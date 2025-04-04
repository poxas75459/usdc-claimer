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
    "5U4NfZeyXeSD8dXu5HscfU6tsvb2X6RGm1mxNmQKSbFix85st2PZTdg28w5B5A3Ymfxi957kg8f6H5q3kYWeNQrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmDALgzyr58xYLiY5Zdfxkw57VhPeAu6Mn4SwDMAtxhnaLRjZHYDSijtz6X1GQVCDWDscGc7JcxxinknUZjdJAw",
  "key1": "BXEsSCrurfP1HL3AnYkdWWU7nrUN1CupQqurJokXmEe6Bb5YLbwvQwMsfyxky2DyGfMtonYzNfuBTucJNWMZ2KU",
  "key2": "2sHYTm2sSUdL2ehFbGe4hwX3XhxHEqPZZCtJSSr6LWwgkWz6U9WbCWF88camTTo8eqif5H8bnFqQs9MiU2ukSqLr",
  "key3": "4RTfR1cf8BEM8pMz8a6c5tByFuSj8jowsSoEDbpF5i3RviYwqCX1FVSRfNC4pJ9Vcjf6pmmRdnz1GebipifYx2DM",
  "key4": "3TcQFVmf4CG6MDDBjnimFaUfFjM44pTLevUBq35mPkCxwxzvfx2ynz8eRFd4ke4uVvKSLA2ooWPY71XqiwizPsTB",
  "key5": "5MvkvQxzuEh9XQJTMKvaHrSCn6yEnXDQSEo4WnXfGAVVRfiXBpsvy2FV4UYGAvMyDz9t6kkS9tWnNuLZ36ZTxFXE",
  "key6": "G3eJH2GWfEmpuG548GaLeVZH2yeFoz32YUoYeA1nSojsgPNn31Lu4i4JwbZ3HoFZMhPWzMNKn19sqmE8ycjBTvj",
  "key7": "2HcJFKLNVVXV7gSMR8JQ3CP427UR8isbtW8Qu2pg8FQMHWkQfP5s4WZTpyLwXZx4Yny6pjaX6mNhFkxZ3dytZKNs",
  "key8": "V1bwssKqKtNLxWS7zNqXUpWDnheJ8cUap3XTTvz5czH4V6mdsVyZkDH4tUokzGfGZP7U2Sv3Nkm4kop6aMpd3hg",
  "key9": "4La6NkZTYkcyGn4aiizA1HEgi4z8FA5EoQ4JfqA5CYtgTPuZP2W4ozQQjN8rhypfG15NuSmDxmQsLzNrnbBHy5UA",
  "key10": "236BD69Y8xQbQ9sSaWPqMTQ9i1ir9gdM9bkbwmze8eMpgNNPTAVCQ8qCcnMmwKAGsx9KpnGdG4fAkCg1hNk79Ck7",
  "key11": "5Ua2VjKFwp5gRtvRWA2Cq2u2XcuPb8mDiyGFFuocZNBpfK6RzMttTueX6VFzfreemSR26Jc7tsNWJq4NSytWpXjs",
  "key12": "3ZHXBPsqx258x5bWmrMPcLTb2XWZNXDhvwB3skiJAVc1EaVh69oYx3f6wBEi1dnCw8KPHqFzSLkRUqQZDJvkNqNd",
  "key13": "3ThpVW7PomMJQWBCyQnDDCmJyC8JuzqphdYb7ZMSH1yoXeHyGvGGZHmyGfRuG9d288ZqKATLopBgDfSmXsaRPVuc",
  "key14": "4XtkR2C6RCa18a24b7bwLds8ZSBKRVvmTLTq1376yu9WZzgPa9pBzmuNVU4NEBhc8WgsUCDorfkVRgM9SnCmxn2y",
  "key15": "PebJpEXm3qky22jpjm4LJTX7PDNHAXirers5n5zYQkg9822vL6Xph9CxpQSyYLgdhEKGVsYwnjowDrSaQySVZmM",
  "key16": "4aC6ka4EhhkBKxZfXT6mSXh1cFHutWXNfEnE5mhG3V1QeEYwAFGWryLdNXk58JPa1JN6yRRGNaWYCdCDVrj6wdb2",
  "key17": "5fLqnDAw5g2Yn9LRuBy6J5TpPjVnnQrbs7Yrf8TsTa9iRKo6Thje3xvARtokJDbJau79P3cCprHjhcvA33CfhPaT",
  "key18": "3EneVpM7aFmxXVszWpR6woVTCGeJhTwnbohK4aSVjQj65U6hhddAzuJfPVTcrZQtyuy1z8qziXiDGHsMZmSMcrV7",
  "key19": "5SBTx959e5FZocgGYGE7rpT2A2dDqkrap4MEPmy7nBLUfZR4C9VPLN1VAcHUjZhUw2Eo83ux375FBnDeMtaj9nS4",
  "key20": "4k8aKUFDVkLskHY8Eto614wBUFN1dkDwFCFWFMLinAhtp8kquN41XMhzDyeBdJKYAie55DjAWZ7eviFEeJeAqiM7",
  "key21": "2X9ZKnyqscPhNdAxSookT6rpkniVxadiopT3ctMEooNyZtXDEhDdAAEB7DVt9aE4i4yA8bfjScWxyABpfEVoCvj2",
  "key22": "g72w5m2T192eEbqnZABJBcxRgoBUBiMhFADw5FftiT9rPyChUF59H3LC3x9HesFvb95EhYWDBoVsdBDPE2LETdM",
  "key23": "5d1LUj9DNS8quwkxb15jKCvXSf8dAiiAfBU22Ny4PLXG1pshqYoFxYWJD9o1Wec3nUGbr5oEt6TGxzecvQZJesrv",
  "key24": "5kdeorA9BkBCkaHNoQ43yBX3wfTGP4Zi2SnSD2E1WduHSgzLdxZRxP3RRCt4xhrVqEGTznDoyYvAmaY3mGK27vda",
  "key25": "36PvuXEHwySc1SkdXZYpR5CZLZaGV1cYRK8QtY2vwsZwD11xHk8burcTgDVBb9ofwVzPCgGvcbFQQ3oc3AsJ7k7V",
  "key26": "2oW5iHzEr4iKsFuZi5BGnETST5kigN5ZjZFZUx4yNh4uMbiKzh44p6L1NRnLJ9JPhQMGCYASo6ARWtJpeoFLVnB6",
  "key27": "3st86w3rao3B34SnYEho3L7DSC54H9NEKNDHvDtbxNdwGNz59WQQ8Qouc7tHsU7gtnSQWaeD9iSJn6SKDm75bbQ2",
  "key28": "5irnrsKPyqy6bEMLa5ThzpNZRhn56gTX9tXL5pDiNPAhBcPKpTWHT1MjrsuG14k2voW8Y1icykwkj23XThPRk4Jp",
  "key29": "5k9oVuo6YF3M3PrCe2M3ebuew9NXGu82h21fPVg6hd6HdY4CFDbHHJ46PE4yZFtgfdGpCp7kQ1xvujndjRMdTxj5",
  "key30": "4uk5VaFqZ99JSiB7Drs2rXdLKBb97nERSfJERYyvS81DzmbjXS1EUs4h7ofLZeeUUsfyxeY4iN5z1pWwutUzQxr5",
  "key31": "39ECQTiXhmeW9G49UW2ycLu4wpGnUkZrmmszbaLjGXZgimwBteKR9ibJkHVY885k5hRu33UXDSh4BN7nDQCCbg3k",
  "key32": "2pS7BSQjkpyNtAyHSwhdokmq9pMQknXjH7hHjd61UeEt1uwjyv8UYLZvxKn247xdg7NdUGtDgjYgz1fQBrAWDGcd",
  "key33": "446cEZZGbQJKD24HGhtUxb8U3EBCo5tkphwDCJtCHAkXQMHTncEk1E6xZXVznHWqL1gFQHm3m5rnH9TzewQFovBc",
  "key34": "644TMBjSpr9NtDhJVQwNXYbL1E35PJb82Lb26SShkLBoMxetq9nZqivKSYBJF9tkryx6YhanMrmRyPpMg6BWYtaA",
  "key35": "3sSfMrjZuckUtFbjPMcuCHTKdFMGfJzT64sGPBcNNvq8jMn2Ndw8CYoz4iHeHaaDp4t9mbsBtuwAgpr6wRQsnrQa",
  "key36": "5E8MS6tSx6TKriYgxdBPAPfV1mpq8RLbmnSpZ8NF54noAbqs2oiEH6h7opPLG5UoB7ww8Hww46qhJnoCNpN1GP5u",
  "key37": "44yzkDqPiEoTp6vp6uf2Tsx4JG7axnCDGYi9WBPHgUZpnJXJt2kFQNiGAFyuBMovm5WJsEET7u99heDCUs9GpnCs",
  "key38": "5e7aoizypxW7oBGx2Ht7Lcrio7r3WHmbwBW3yVMTuNcitbLdM3cBBgdrYjTY5DQ8Bg9DZJSv2oHQexqcR8KJMmoe",
  "key39": "3XTn1W9D4kk1mgSnwV931VRFSJm8TmoKEZn3nEytxL3iLE8pC2y92Q4hCc8kufX1pHH2F3UNGHUWDrWNfzJ65avN",
  "key40": "L6uRhCpyh2WpMCQmQTqXJVFqwqGNSaL9Q53nUDnVzs8AJzFa6LgfPZbyC1De6WAnHDVTwCPEPo9vLyQntSvg58S",
  "key41": "f2713panyK5oZXS4s8m1s5sXuPXkCLPYpaFJaK2qR2jM16ti6ivRijACg8TSBVfxd4xYHgJVYKRefTmkXq5dozo",
  "key42": "5ZVfwpVKod5PLArkkLM5dfeDSHWvgcKoiPo517vY1ZY5bcoPkbB9EpATVZcECCfPMrVCH1UFNpXbqKkznrPK1Go3",
  "key43": "4m4cqDV652GUz6xPChLbtKm5s6J8mrjKMtD2ooVy63p8P3P4WsNJsj4dSMH9EnUxFVLUqf1UgaQzieJwtPZG8p9X",
  "key44": "39HYi1N71mcSXHaYWWgBS3Pr3goBEghbXqPHgHGuBifZktE1tvNB86DupLdxFAHbMAfT4Pbz7LHrCSSuee45RbT2",
  "key45": "36umH97J5yVnet89ViFe8qifekqnxvNmT13kFHXGMqBKrXuT4XbwnsRjTWX7eKDA5s117sAtZ7U436VCp6PmgVUY",
  "key46": "8JMWCUW69eSLUQE9sDdWbLKofnX92Tu5CCJDHPUhYrJLkhRyAUK56NZ95imopWadx7y4HUjPjDHbzF9FF5XK1SD"
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
