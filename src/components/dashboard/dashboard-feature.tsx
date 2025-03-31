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
    "3f4oWNaWkL6M7wjRoXdwf2soz16uYX4Nd3A5GmqgPAXDx51gUp1FmYkE327BCUdQGUxddwBdCECp6yWmLpBnCk5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUt4twM4U2r9amMn94aYmkUgRQSt6gCUGPkdCuYqKFyDjzzRb44Mh3dzNhGzkTnj33Gp57sELPd6N4KeyBao1nJ",
  "key1": "2inKRf42fHEy7zQZJD2DLEvYVn57iwUhBp81c8nWcD8WNW2MmiAdCdL17HsWNkUc7n2o7Sxj1x3JmDQ2nbHJSYSJ",
  "key2": "57mZJvt5dUV1jDCzQ2TwFVVCn6sWyWCgWmdSefj6EoSdipnXiC3HM284UnPWqpyji2KJ5vyUQ8Py2EfHkTh5iEQu",
  "key3": "5s7sxM76m2DZnYBirzempeDnVWHEZ4cV68yDGPauiR1mpmbjXHyrNTr8A9fiY3x557pDJgA6RyUJFa7b7fBCfBpN",
  "key4": "2qve1dDfQ6KmEmtHcqw85qcy412nLv3ZjTgRSGsW6sy6DF9bDjrbipNmuUNENi9u9fNkMz9ghVBTx8G2HNWdSC4D",
  "key5": "2UrM5UD2jEyTq1r5uUzgPc3jGJfFPkJTU6FHMmeonVAZTRnvwno2JCbizmHwx89BRHt7eHMpsnAJCjpaDRsG2mM4",
  "key6": "e8XnUgkxpwmVtmB7UPQN6PzFjWoKqrvTdAQPd81AY35MMau4ss9q9hUwWHimRffK2PJFYajJyTtwz6y8UW81vH2",
  "key7": "5ssrfuuzqpdrbJCRqJNKwK7pY4ZdqqMvucfXTxk5fPnMfzPNiyuvjpa6V1oQvftwQykPmjAveX4HE59GDoRY3vfk",
  "key8": "4ubsPPrqRijsSZRkNEDrHBV8u2mFcU94Yjn5eBxb7pNHFniVRpwyodfNceTosCRYWyNmzA1UZ4etUSjmUKh9HXue",
  "key9": "5ouZqbSkfN1Ek5zUk29eUZwzLurF61AGaxGUvHV3LNjYCT1nBF5tL4weCG53CXXWkEzBwcHhjZe9kpJEXb1oHffH",
  "key10": "eAe7wq5djBtnC9yeEa9QXVAfs9PCF7wmz5r879DGRBdXVgFp6ryj5iyZ4Z8HCf62vGaUfgrG1xHPLCVENx6Xpzp",
  "key11": "4jQPEW5CMakzAGQFKYCr62ukRUqkWCMcyecvvcTXftAo7TQY4eJTykzRg81J2e8ZeWLLixiPmqbDVF2MGMfRaa8j",
  "key12": "421ZFinRefScyPnaZuqPXv1dwfcnrYGmk3ThAkXunSDaZyLgphqH3TTBo8k8m3TBBrrejNQbBpzvgdMC5iJxaPM6",
  "key13": "4Kt91svcSvNLGitUg5MzgNf6eQTG68FgnTPL2tEemhpKWpbTtjpaghCTKy8rK9QbGDcPqYMrksz2pXNtDttwohtM",
  "key14": "2hHviW91hn9rLfkzES5yZgE2s4oVE97ifUBfpd2XzwNsS1A1KdzUvEiabfVkd78pEiABjZmRYQG5vgAef7KXDPGC",
  "key15": "3nKPgHAuoC6dzMXNCDJML2UZmMLvP9qSktUUh1gkrpvht1Xh7Ynt76VJa7cuzfCwyc9HHKRoa24JerGJM4wBYKCL",
  "key16": "5KvG5oQ9UK5P5L4K2ZxQdvH351j12twZWRW1bPkoAGuVWxTJW6RtHhcPDDUUxsSPvmwaeGWzhsgqKUzXyfMksoP5",
  "key17": "5itZL78FsE6Tzcq6CydUEMdVW7UcXNjJZn2NyPUTYsUBnGPApVe2QHxPwWkYvKvJwLt5pVkUzPTLAbBg39sRDCYz",
  "key18": "59pCENARH4z1ixLBnSV2cJUakRdMq8TJ6n46mpxgUxSjpmr9AtGxdqm1DiEhFmFgYPLRaomKgSsa5rdGFRPAbnyq",
  "key19": "2hQ7cNbAhWHffRMvKz6gQ6k38H7akpFD48CHXddCcYwiNNDTiGcBu9J16Zgm2PChjVnrf6oBNZ9YNVCnnXDLFxx9",
  "key20": "32HA1GJZFndVzMxZ6KNzSY7PZKohtoiAMqmRM84tDqf1PPhb5shHrZtoqeAqyzbrc64r3yxYrGgLBUJdZhp69xvB",
  "key21": "4LwrBe2Au2aWaBqfxLqtm7UF4qZKZ6rXHu5a6jPQXMQaXN9F7q4wFu7Q4dXTbUeJhDDBf52kZi61gGEugeeazbFj",
  "key22": "3SK3YdUvWFeY2fhPw8q7WZgW44Aa759dXbBUYDoksYVgHuNZVakKV6LdcnaeMejpkcG3qgXVg8vDojGPTgUDu893",
  "key23": "4NzQiiv81ddnXiPzsbDqvJwdTpEKfZKxazBZe3v4cJ98nBZdgmds1CJ1eQZLEVnPwZts5cKWzh4b4Hrez1xoABSV",
  "key24": "urFFX8bjLytFdh756DLDWPvK4JNBekpjaRtvZCMM1eHBEmnBYkymLGqb1vQXvSwZYSQz6kaB6PD7iYqednRGVYs",
  "key25": "dBaZW2Ath3yik1WzMUPUYUVBbaXZCmpJYRcnGN5uSJehEq5aEM5tY5YbLunJFwnm1Ej4iZRVPD4fjW9235X8hg7",
  "key26": "39XHEu4Z7RTqkqKFVz1DB7Gj7axS7piQ8uXSwHt1bj2jiAWfPB2onKCwPeJvde2onfb2YXxbfJZQWLUStqzCHMeK",
  "key27": "5aiGspM8mHTHUznbXTzC8NQ1wQq4K2pCQLk8nzZRx6YP6HND14hTtUKRez9zM3CLCcvLBnXHqhLqchbuZ15d1XXU",
  "key28": "3Wv36Ap1vHdxBXf9PSWHb5rhUy72Fth9J185MCuiiERtePDHJAu3qTsNGcNdPMXUZbhnDTrWRHw9kj7n6D6SaVN1"
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
