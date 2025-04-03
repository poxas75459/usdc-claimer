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
    "2MiRgKWEsVWyBJkLcyrr8LRSZ9nNTqC56b7f96xhD8UYm9PQDAdoUFAR3hH3uRAH36Se3EYZnxqUMap4TZmi8Vgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o62nGw7mr1K3GBBMqwuHU9ZZhs6Ec4SzWu7U9LAnqCS4PX3Pe1awSjvQQMSyxomZgpJjuFnUGMQ3RadvFkdFPUn",
  "key1": "gqPo7TVF7t1soA3db56NnCBma3nhVrzb9PTtbX6uCCfsz6bSdpYWiy72ubVrdWMMQVcrmct15gsGmHf2JBP1PNN",
  "key2": "4PPL7RQokAzbsjfNxd8F5f4cafavD73333cm2bjpBrkQRZGYKMveCuwBMSNKwRuMVH5vyR4vXpRpWHfDJXCFjoA8",
  "key3": "4YUdqmtkyEXUkCGsJiSbH2s3cKidFuVFrtc8LeyH9fcim5jwjiKLnLFLm2o2kT7T7nQ3ACDrbJrwUTyd4bj8mBRK",
  "key4": "4oi91NsnHijDNXSaebtite86gpn3ptoyLEBsAWAXkcHe9mG7mpa1p6byj8i6vx4jU7bAioC2924F9mEm2WAqDAa8",
  "key5": "3BhPLZiNP5mbCHHyDgMwzC3MBMgG9pUNTdagq59fBSqTALyp3bFZ1xcTZArBTWmRa4W9sWuCS8BeH7q3RRE4bSBB",
  "key6": "44ePE9X2zKf5LCcxVqg2ZbG77uvLQ5k87pZQzVy8HSNXC2U5H3gz98BvdChEQHjogHj4EFW7zrt59xg1iJjZcG14",
  "key7": "fjymszbnQqA5PNRLryjyM9ooz2yuf6FcbQGymxqesAh55VvCXGQhRvPCi96Rnc84RDtvvsAgQamMKZg4SJU4V4h",
  "key8": "5NNSnzRim1vickDqmw8nJwmHfKB37KemtVeymxVvv57VikjdXx86U9hjFYFemb37BWdxSXtz7BU8vcQ7StkFig6f",
  "key9": "3CpSA8eXznk7mjJ7p5dGNAvdzRFj6WiqA7eNduGvAErLAqEDJW5Wjbu8Grms3vYWbMph3tEvaRhrxVcJQzJZtHLa",
  "key10": "3vbVLMkyR4wyLPdxH6u1GfqiXj1oivrmPJJWYQ2nxkNVYLWDKX6esQLVKgWTKKCp7qWzAy1XM3U65iB27wTzizSv",
  "key11": "5AvGRRXydqyfj47jhyHPW8bUsBHAYzLCbjuEz8NyV6ctARpSy1xRQo9Lt4HoXNaCFjAbvWGACoQBDgzTNwzv1jCN",
  "key12": "58pq4r6PE6bjuik1qgYGAWnBmCgXRF95R1rEnnyvHXcKqRbD2YLBYdxX6bB7frPpMPaRDFYJK824FGervmpCiFpK",
  "key13": "2MoBjCfMMCg5br8b1FZE99xx2zACnfaf1Nxh2vpTofDM62uEgKyYYR2moX4guHxG9jH26bTQW9M6rbsunJB7u2MF",
  "key14": "4eUQ4zPwmkCxxvPSRrsDBr6bJYmajPVcN84bDr53UdWDEmNoiHNrmFg42YKhcEggRQ6vaR69rmJpXz76CJj1bNFU",
  "key15": "5EAUUFvUYuHUCwfm8C4i11zxzcBLTFhsoGjzkG38PYRiqqgQpns8Rr1zviTHBDFcmnwsdvUau8NY6qeCxj5uzUi7",
  "key16": "2wBxeKSbGLUAcfY7TWTd8bdyKRnTUGiifUusTSnb9wDrpuJYsNfUsAorC2i3SodnoR1wciND1zeRFbtNh3D4vfYF",
  "key17": "3978DmNmCkfVPEGJ8QPwKc16T3XQP375pZb3wcUzuzCPTTBU41hF8S89k9rPTuthanfixYqGKToKX6CAGhqdS974",
  "key18": "2GqxoAbUVUyX2D8u18Xk1Lnuc66VJfoY7LYk3QPHMXRZHbYAQazjoq2PrAjRX33w8TVb7TdmSJ5v7KZqJh1qmKYz",
  "key19": "5wwCiT1YkQpUQBTx77KNzp2vtdzhXRsGCa8KGJdzxXmk9ZBLvR3D9bkfrWUvnVTJ1V8ye6Zk9DsRrcR3xnWVTBy9",
  "key20": "4oYfw3YYFN3mgn7tFJKyDyzyChjU5utdf2DgJJNo1n6X47CHMNQYC55qpGu5oqj2AQngvHu8tdqMiSYQn1d1ypgT",
  "key21": "28ygiLeCmMi31RTHCfdeuu22kt1HPtVzTthP9CEg6RYhjuBgyo66m8qAzUyUSiVYmdEN2oQam8pqcvKPzaDm9W8C",
  "key22": "32kYY5FD4BdZcXyRSxMVFS9Qpyk1RttiLymYGXjYuryVP1GwWBRcW1p7GBHC31LhEocEJfqQb7nTEtXkFMLRtMT1",
  "key23": "2smyE4jQnwSj8xjMZmkbDZ2J9a4hoJ61nLfpN4yuKjW1dZMAWocm6DDZg2KjyAJw6Dg2FbWC3S8oHJggjpBjHkmh",
  "key24": "4R3a7fr9mLEUtdAwFSfJX4cP38VVsWaB2PB31DVjfzWTcrXchYAkfGt6Axd2QKt9aXkxUuquXb8becKeRzGXawKA",
  "key25": "5ZmnrnTPpfqfBL8YPntoh71yr1a6qXP9vu8ED96675tKfYCQaqzPCzrFn3RBLNrC1UAuuWMDwj3F85vkScHBBrPc",
  "key26": "EwNVRvRdAHYfQeW9voFgth8ou51bDrLPQmGNhqgSbFGpQUzXZpEMUEm3KLLYGsHxoxsr3dxhhQWqZFUyBt9zG2T",
  "key27": "5f6aPfK2XwijJiKZ9L9dttr7mQeXLKvQ35pjp1GeSGVtzczgiNVPdEu9iBNEZtmkSkHQwP2ct8xybkWou2g4FAHg",
  "key28": "3h1XkpmvhXiR5hnVuWbTWi4G1iSaxGuJt2oy8unpBhbHD4zPmp1E5gFtqPYjwWWudpb2scUhpRMs4Dk6GiFSoePL",
  "key29": "5ZrxSaxnAeKG9yq6WY2pzrLx78pzwxu84AdrCihQirFppdVkZfUxgSvAWCn24vjF96vciPQKoqt3wpEj1Wzyd5W",
  "key30": "3mc66tDPRon7LcHyDAmDFA7T5g38DHzrR5ipM6iEhg3LMokGKsC3Y4TRNNnDTvCxM5r7rwyeKXKe77GSuj37nYFE"
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
