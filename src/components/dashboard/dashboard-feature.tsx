/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4X64UES15QXL3ex8ghRBw8ZUzmEBQNMUUF6yiKcG2VUn48fJNV5az7eKg1bHacM1N23ALSwJFojaHFRtqktUS7S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmnMxNGC44faX33UuDXr1fiphNPxGSL8uktwQAN98FemYAaR9AJpQyn9rcDKLERHH3UxHjxgTP4VqtnLnGH21oE",
  "key1": "2NyJBYzfEKi3HpfK5NzcUxMk3DcVtxDBfCVUzuPS8SgFG827Yjxy2aYrhT9maACorv2WeWKM6wbn2zcF6BiacJJp",
  "key2": "2EtQBP1h94iq8WyRT11JD75iYbE7PmZMV2uf9gD2QPPWTdHP45RWZFYwTiqCijgkwSvZ6Up69xBx44c9xy8uWCsr",
  "key3": "24mNmocGCGJHgYJDGTCGabsbWemkxhrnyP4hmmzCAaAjAazU9Ppfn5sTQCQZgBxzAmdoazU9xgRhTScJjsvMXqsE",
  "key4": "3crXEPpavb4BDinLU61jukE4yq1jxCHXBYgW3nHzRFeLjTD9a7rMAg7Q4Fu3gcv3ff3cFZqjPD4jE5ZevTKrUmRs",
  "key5": "q61RefwZLcBmLQq6Faiux7xz9HxSBav4Bbg24H7t53poUKzVHV7KdcrHRjtbLZQGU9wHGYmua8hzuifH6WFZD9b",
  "key6": "CFV947RbVFDbn6DC6De1BpzP29cRzkJzZZ7jGUZdrKzUaFGPnonPhqvKfQd8KdgJhND7zrhFKSUkqWTKsAjq1cn",
  "key7": "4zJJdLb5fEz58cC1ogGyv3UZXKaeUF7LPMwfHdGF45ujipNzzwheEhZQaDiYB75He6iS5n7g9PCwDjfhgobbUv3T",
  "key8": "5XSNFw5K9BHjYq5Hay2TUowrkaZT6GJQiysigQaNFPcevhWqX73YB8LanSuE6iBg5EyzYHkZGLPDUjVVVxHSm17o",
  "key9": "3DCN6Gio9B1C5WLKZyREtwaPYub74V9LEhVGH6pxp6vJdtVjQbnZDyL9bvi1B6itbwNqJieSZUUR86U8KtE1rV3M",
  "key10": "uoN5qKm5T8SxgWyNrmv1dASPTKZR87Tuo82W5AN5twJgp5oEXzx9MkqjxymobUAM8qhiNuxMC4cdm4BZZZmWJGV",
  "key11": "2dVsyqv1VRZAxJLF8Rkax4nR2dXeGgnKVWZpkUwJeFP5oKRFNY1xXtfxDYAHspiqKZsA8nGbSQL3TJch5q3Y3r95",
  "key12": "3DAy5ueyu6EJC5VjqYaJBBgVRaMmdCei6S5rWyy7dqnYv3p2vegnKKmRrvykoekENbQwosKfYXEMrpNKvyN3hc9L",
  "key13": "5LMz9kKpxk5hUyTfLPt2A5Urb7KQa8WU8xi7yqMoz3rjfTG5Hb6mS9Fg67RTCP7G1Lbfuh3BowxirMRFs2YayxAu",
  "key14": "3MEbTgZBK5CJ7X2BLVxrFWKZNbzVoVn77cGxJvHLVASsjAQanRzzQfvFJjGq86dMVHDt6ysavHAFzmetC4qdozJW",
  "key15": "5xMgye3vXxmkCkZohVuFk8uagHs85Uaaw3PPdZfc7EiNeMEum3o6ZysSE79uinyNU5wUUSgFgQ1XSkb5iMeaQjs7",
  "key16": "4s4QBPGApq9sbjkkr1dLWB7nhNSfrfK3vFReMsDAFCD11sGkP7s7BGWve3AMFYnBV7Uy4cgzkgH7ooAgWm7ZR5wp",
  "key17": "1yq3GMSLtxv29DoSh9A9GjjrdASfDZVmXX5fSmG5Ggk44SRUNUbPsFXBUhNa9mcgqjRVecfn1YrELg4Th1T6vwz",
  "key18": "3MrjuezYbgd7xrCUqjCvyNy1nY4Kd837sjwfsCEsCq2u9H8oagoUP91Y12MUXepBenL4RDHmNE9cYz8UPwzCXpSm",
  "key19": "5J5Ft6GqLt6SH5iiz21LzdpK3QSLqHs5w52B9sNF8kAv5PavCN42MtNHNgHx1LZ96tSD8mNB1cPM97mVxNJpFKsY",
  "key20": "5bKr58b6UZy7GHjq6zRYfbPrUqFFVyxUTLtKA5Uwmt4YLXkZENufBjeZMJRq94gTTYH6x8Hy6Jim9ejc2q59wVrB",
  "key21": "3su36qUechRm3wx1pnB9fST75ZNkS6bwNa4h8q3DsiHxZJZmDiHVkXnzEyhxmJZ8fTpWxNhDAPD5heJqHjWHxtQ3",
  "key22": "2zkh9B3wS3vQWfdifVa4UsTynEvaKMqZaZHsyG4YuSDL8KFSAAe6pT1FJfJsL6E39fmHVmVYVEdGWSpCDvAN8KT4",
  "key23": "BnbvLJpNwnSYh6TXcZC8BJuRRqncVKuBoTKWFQSury86Z8HvPJvQA2a8MznWQYxuRqgvpTQMDa1HyKDzLnPTNwi",
  "key24": "5WeMycwjeEm8pW69D63abGkY3DBaPk5aYG3jhUUqmHsMYcRdsg2tdJfLHE3fbGA6repqFkX4qhZqq7RbQpPEWd5y",
  "key25": "2CCDfxBJURCGvrznAJxdhFgq9Z6G2EYFUQ2RsCsshYu6WYirBz8kPukunEJq668gJCBjBnffNs9DhBx1pakk6qYp",
  "key26": "4F9jREaogK2annVeb2cP1XbCcrsJLyoAFPN2iqR6HAgSTRZywMSqkVMbdHvzMEJbjq5T1JJjtbxPF6QD9ptYednH",
  "key27": "NDmgsjhTY9ZAweGhf7yYeu3ocdQs2MMRauYeRMfFVmRHfpYN3WYqGcA47HKySG9ucJvoKkfiQQLkh13pBTR67xx",
  "key28": "3KS4Lptb52fdfYEVzdLj6KLdfktA6HbBT255gkcWXZiEpcuzy6PZW2fDC3hRuoqsK26h2GvDf1Knk44fWLGhwB4n",
  "key29": "5rrrWEGWQioB25bSsuJckHLnkUZFNNMLWKW2NRQHp3ATGoax6wVnqA9bi6Zz6xL5PYefr7TgYYJwb9Za8d2A4QB8",
  "key30": "4aGcN83HEa9tfQTKHfJhMiVeC7zaGNiMDPG3rpnBeGEshEzkxrumJjGSeE6NrWufZLf3GQ8YjuHDpA9kzeb1aL5z",
  "key31": "5sTN94rgxoxdZT3a1JJcgdaVPozqWC1YUjiD4pRWGu4fFZgqY84dUMabEBcCnKyfEWC4KsK1SQ1KLMYFbKMrNeEr",
  "key32": "3FoQh5ygB52BgKzPrDxjxAq6mhiKkHre7rzSk2kFBGTGApeftonk9TyCknXc2pHktEoSEngPuUZrLx6K4mVQGQ6z",
  "key33": "22DFcm9RQ8NqozE7YU1pvmmGGwo7iDvwkiHafX6pKC4M6GVD9i4j5fsRG16h3ce2Rf4cTJyufBANNDFLheyYXVR1",
  "key34": "5VKGDcHPfuWr6MquLU3KZDG2PrNq4xVowYq7x1XwqDqXYdy5rrCbFtGs2oLQXGeKqSMEJ6dRb645QryaPF4pYaYJ",
  "key35": "3QZi64oxU3ETUWCLd1oP8BBzMkP335wFtuudyZSB7nDKpPpEXEPVxMenVVgLMQtkAg8KHfuiUyoozDQu6HKJ5Xdr",
  "key36": "627GyREA5yfF8JVyDU8JdAeNPbn5xnQqL6yaH5HBMfHa4vN7J5J82w8kfEtf2RAzS7L4vTv1EyRUdHfnLty2WYgK"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
