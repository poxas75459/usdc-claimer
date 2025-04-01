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
    "4YyjDrSnZYhe1iZuTzmMqzJ2MNUWFckC9ZpnEo461kkszXNyV9Lce6dhF9pgtmuDkNrQqegeZQzCyX8jeVech7h3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dp8VkrgnFq4mKbPGJUPNVz5GrQWefjZmmvE9CUJW1K7aZdK42L5SzrHbNFPFUqvJSQk4xnYN6DmqgJKoDB32Wqp",
  "key1": "3cySbGeCAjbr1cjtZp2GPgSTwt19fmwBtHd7t6rxm2Qns1E3zXyAA55f8RUGTd2qLV9DQfCFrCNc2etpXbbYiBT4",
  "key2": "itepLZvkUGeKAAqJmCtt7R8jQ5tq3stxTQKZkhv33vrRNk4kDsrXCJkkpCoHsdzvJfZjgBb3gzfd39rvafo5uH4",
  "key3": "2xPRLYp4epzPixpB5FvSWQu5dJXMEBxSud9LfmC9ZPv66SwYofW35xchGwmwamjW2BGXCDi4YgqpskFDUYvCKarN",
  "key4": "4ikoVUcrpPk8A7Ea4iXdNcLLfjwiLtQk5fxocwxc3eCMkux2741K3PdtMcVFqXVb6ysdvkxLtHooiPwLn3MboDtM",
  "key5": "B7mXz9SMBFvy8ZZx9PZ1KXNXrqMwA3GpETNyHhnzAZiYShsExH7NeybHeXJNauMKF7BCE4SDsx5Gs7Nw9MeyRNj",
  "key6": "5L7fcXVsUCmEuhZaYjBumQjpTnzQjMnb7bL8m6FPEMiegSAH3VSN5198H82zwkf1neR1tcbf7AnmHsrm4meZg3Mm",
  "key7": "4veQUzmkBrbcFX1qH4LeCWX6tiBDvXAY76m2HAbkwTAWH7bQPbK1b3p2jSnGPZ5zYSVD5KfDMraw1Yyd4VHadf8m",
  "key8": "4WTTMFaRJ594zhwes2ZtJ6ZwGYrLXyFLg5mnYYwm3mTbEjZSwQW2f5FsheyTy1VnsP3DS4JAcHhcscZWaQAQ3gJs",
  "key9": "5ZcuZCKQR4qyHQAVKQzckcQiDRHytJGQcsPC9Zm9jec6PUiPTaY8ZM2vvyHvXXRqi1vzxdsWXdEJEMwPZiTAKmeK",
  "key10": "3n4NGeSZoskwRqBtqRJQkyY2snZRxXgCEudTfgcR67qs9B8QwSn6NtmV5cMgvTDPrjvon58s27B4br9ySpW8Jpfp",
  "key11": "4Bhs6NMGEzLT6EKRvRAtzafghR2YSFvnqxRrnUDtzpNzpP9hH29QN3p4P6K3LmRyv2uvsH7iTGBtyscGzjNjPx4t",
  "key12": "2BmUmJ5LaCPbKHVsigH2XuMxfRxiRteFaTx9ddDYw8CSADtd9Jn4oqnNpa4TMGM8dFFshw7cj28oJGyQ4QmdcTMW",
  "key13": "292FDrX8H8zkDEUKzq8FjL8g2FZ2qj65V6DQ5R7LdMaT76SH3L6MWAHnPsMamL7twSZDmRTzB1eiAhf6JEEBFcQL",
  "key14": "3yQLPCnse9A86HxmrHZFTWWwXXe3vUBrydq8UToe9dLTXtxQVRYuHgu1KHewyxd1bEvxU3H2v4hCUX3eJPEgmb24",
  "key15": "2A2GKrivzwQCXY8KXJvauxnsFRJJTA75a3v5CQHgpQhCPWYFv939D9izVAv45jaJPY42e1jkRYBSxkjGJ3Z1Dg43",
  "key16": "1KyVDgiN6PNmoK865yMvBdPbU4nsEj5gQiwhJ2V2ffxiURfypJbnCt2HGe1vRrbkN4ttNhrgMts7SAYnMELbbR1",
  "key17": "4rJ1BUdyUvxB1XuXsftC1GxKp42vN6R6K6kyN1h2WaMYC2Q4EmBVkj3GVYxxuS5YDoRhKSkVxgjkHZeaePvhR62R",
  "key18": "WcxdfvSuRDmXiA3RkDrLwdByDcXB5T1kVb9ZusFvPZFKEaw3yLr7H3YQxN7nnvi3g58qPaVgo45BRpNhsyE8ZxR",
  "key19": "39o4tyVBUySkjDiAyT4EbnddqHbD3sjuKZDTNxwzxiXDTdKnqZGtvFPzFxqq2JwGx4Zz7AVcVT8WqEY15jkZb6xT",
  "key20": "3wFwMWcEhRM5eQrhaD18Gx4miqHwLTjCw4h9Qn7gKjRtY4Duxs8Wtt8oVXncnzvozqwakayHtGFaqWSh1P7V3we8",
  "key21": "3Xpa3WiEAqowmYPV5bTcPQYrEY4BSttiDVZoA6BmJKekTpE4LdQqEzKvTJ15jTBdWEuxqXNnQ4MFkP8LejFQNm3T",
  "key22": "4uGPhXgoyngW11oLPTVfAxBiTtPfKysnt9cQFEFxxyG3sP6ExEjGKDtKwN6FBeFQGAqEDADpJ1gB3HBxG6dhHQ1y",
  "key23": "NqdtXjmTNcDwyj4JVzC8Un2FqsJWLYU3E1oSHmddx17Lh7NhvjBfBUcid3re8c9CURQAnWJPrUFjHDgFzBgjZyN",
  "key24": "4VK7dUcFPkEF5Fpw6bhng8YSoDftdF6tS1VyQT94z8NZGtsCqvxEjj3U8vPoXcdSMncfirTdXtde4JcJGDZKMu7Q",
  "key25": "29urnzZ4beDNZFwp7TL3yy4jSi5aeyLjPUKzHZxbLYdeeVWPqPjsTGZueH1sxQ2WSuZDTRW38Kib289ZgJ1nrszE",
  "key26": "4CyTXGqCUnPPGLe5yWe56CdEmqeNo3ucbEwP7wWRGEztZpowohJMz6RAkoCnLAhrHtamjQwE89coP6Ts24jjKGUR",
  "key27": "4Cn6PD38jGcajyx2RX1xk3U9dcht1nYghswfdx5MwFrVgNGVEbiHY9Xr4jZhhfFtwXQvwBB4ivCHGKFmycMBrEqj",
  "key28": "4QHCrQ3963BcUiz5YYaorMGiBn7PurX1miiaWrf6dsweX8vSEsuiFuLqbEZuPNHc6itYjpf4UTFGxb5LaG2Ad6hJ",
  "key29": "2hAWF7FUN3MHw1uSKQzEmXNfraFUXuQ8FHx98hEzznAFstHr487xzkK126UP7unK9rYb3VwM2ZcsGuVJ2VEjBnC5",
  "key30": "5rEy1tUg8xpYrnqy5GsY9aVzFgcVVKJwaCjK56G8PaPud9PnHPaSu3PCTR4UErzxJJ8f5JeLKFXezWKkdgWwEmWp",
  "key31": "6285SEbjJry8MXPZqukLT7ukeH9HZrDymvs4xnANoi9fVAPEcRccYmCbLG142jtPXwVDcs6hp2uegBU3PrRfzBSq",
  "key32": "k7L8cb7Hst61MewCBsyWNK5Ce5ktfVdiaNtxdDKKT26Ae8oi8x1LKvP6oQozaAUtEwaAK8m7hfT425Zm5x4VgTR",
  "key33": "kAnGqcT1HKqTgp9UpkYZ6DHgx77BYERJQNNDHkKgfNwmLJZ2NsrR1WUqnjjPJzpWdW8DNfAiByHTPJNSwq2kS9u",
  "key34": "5D2xbUmMQ1pZjs5xEUhRthENgCFyfyacvdv7m1tYUEkwCj2sLN6dEot2xornRANXWs1v9wRVv4QxNAsr8arZZKzt",
  "key35": "4vWB3ikAEdfqyYwgFAWWs6d8cmSQEVj2jv4fXfJVWrVjnugTPgPhFQJiwUJRYYifN29K5a7nWSFeBm15oAdZbyR9",
  "key36": "33Z5PdFKXsez4A1JxhV2Jx3tCPvev3REFbh5eRJhNaysmUbvCPfU9qMhdYCujzKu3fP8TyJRhDjnio9y7bWHZPBc",
  "key37": "o29oeSongmnTmLWngc7KmKtbdXTpxsS1tenNj6BjeLNJYKGxBBSSPn214E7yyuHLW7fvyfcNq9qRJEk4wjqLpBD",
  "key38": "64EPZuyufTBfjUTLEJHSHDVPYiqbFT2Pm34D5MWtuw8b8DxfGiNKFnJ4FS1J6VWCESkovXzUFhwo7s6U7ouxV2JN",
  "key39": "5HJYtNBmuMhWVvHdoad4NisPrcJDoqHQAk4xbnoZQnKGCo1AYSq5Aj3YM223AHj4aw5K5XcLwDjZEqVd6qdiV7w",
  "key40": "4HDxRVjNFSSWUWbxGVRzywngeTJmsCQQeBL2UwQhFaF4a3zSDkHd9NHc2bJyTLhYC3gFwzt4Us1zJojogsuLM2SE",
  "key41": "3U6j8MS6QUGSMMqj9bJiesS3p8ShZJysrYbfZ5T12VkWFHBbWLZznRwaQ6k3Z8ckagvFWSbY6tVD4HvYJp6UZS5P",
  "key42": "27PdvX9CYSRrossAgPA3hkEBPjQ4wLsBHXHFuCvDJT6VUfDNh1SqQehunA6cMD9tdrPrBkZkk9nYQ1VCXsQMeAuA",
  "key43": "41PGtSm4G6Dj3t9WVLC1MWaVLwEvXWoBrBoAvh1nSBfMbvCMNXG8gqDCFTst9YRFBoMzx1JH4rLgvQV7eLrGTkuN"
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
