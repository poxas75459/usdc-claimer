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
    "4FXATvHJ6SubufYpSduE89tYbmYXK3YUtYjtPshRWbtxJ2UTLmhEPjoB58dwKrzomVKi6TK2Yg7SY3YAqrz7WeN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQdUtWTJg46ikuLwcZ34hZAgYhd5C11iDFT29VqzvNQCyCxMQyo5Xtx1o7yVJPNzrn8qGTJH6z4tJMjMMpjx7cj",
  "key1": "5ZYkz723rDXVAjrubrTTYEKw2Hjz1LNZJVVMrdp9inSYdA7fVjs1dkg7okE7Mxit3QztNk4suBbfhi5MirhVJcwF",
  "key2": "33qGsVBhiyxfvUEj938MpVUXoFQZ92t7exTrdQXpaQQdpRgV5Pis1xVETmBTjkAuYdwfX7rtRKZTJ558y6GSmaLd",
  "key3": "5VAiJgQbfJ7q3nzRyRknRSUNpFuJkymhBznXmHejHQd7yftFKkTTLetw6oMcqJ9s559E4MWrhyXCX9N21SAETYnv",
  "key4": "4FziWnKupJzBy3gHrM8v1YtVe8oBkCpnM4U85dG3mJjnHh32uAbu7d8z2jPWineAvPvjj1PCQ1oDg2mGrRRPqV28",
  "key5": "58saFxfQemm4R9yNNrNQVak3zh7rHNhhoCCgwPXJMbrcw3wxY1Zw9hFBz3Wr7PKxPJ6cj732MAnAyx8sA7PU23m1",
  "key6": "3nxVC5ZnNpoiepuMtUoTVMVksR2p1ncxVSmeszcY7bAxMeQPBsqo9nhdxhpGP4dUDUAHcCPna1JFHrb4qYHVUzqH",
  "key7": "4JcBahBTeRVnd4t2wGPieB2jhpKtSiHiVUMLn91F11HhMbAjFKhdE6EKUk1chzwnhqgxxDRpFkKpCfiVCc6uVYEG",
  "key8": "3whoxborXVQG1xG25ZuUiuTDQXyorkfJ4wTVZpABeCuyZeBy1JBRdRk2YhZ1sCp2wuVbC8uxMXEPraWzaEFEq9H7",
  "key9": "2tDhg5hxMPFG91Toz8rQ554cjWBrSRXqmSUbnHXr6iooBvdyA5i6BVg1UgTVW4RXSX7rnWsremYXCEJmnnwxZbyY",
  "key10": "5QcwHn1KhDpqaD64Qi2mu7jAaR2XGDJcbGGTKtmRWBpQseh4PG1TX4NUrujWUdzkAMwWzLtnfYEVisqMKgr88h9D",
  "key11": "2esqrETrcuD8xDRXMrSbd9ggMRYSWFKmsML2WyGFryFvcDJTSz5hDKQmMheFmhRGhrS54AhbpBLejzrYxzhW79Ed",
  "key12": "3HAcViCSPbBSW5o2kQHDRhXWfqQbSB282KDP7iksWcFH2RtVHHzgQeWTAPMthKP5cgJr6jApLbiJoV4dqebBup2E",
  "key13": "5EzRbrJWhhG3tfP4whNBKrxHjd9PugKoYyxwj3MuqFxTgQ1y2qo5vnpwA6cRm8C5s5eBVTNhrBkSoW6jm4RtH7rA",
  "key14": "4WnxXYJYgtxTzcx358pDgmDVvmtHxmsc45uXK7pYPq4UoS3HvsWYaw3eiVzXWZW2MeroTuCJrG12Wugm4YDt5fB7",
  "key15": "5AKfcrouwc4Trc68WobPFv4zJqDPu9CyDuGiMXvCiYQGhqqsbFHjyeEjPwaAk4pVP3jppiUCXVXUfrncytFfphfE",
  "key16": "4FR21E2fxfRuy6GqSnVKndjMitCuRhKox795FRqW9ciXkLo535G2n6qniRxyaDWbvQb9nP7CvCUp6KuDhyFuBAAZ",
  "key17": "CJfgLoNn9rDxaSV5csdZCcdny57LG8XZT5YqT6pciTkoBoBXCRpN3UMM5qjtMv6SGt4B6itDqT8ByGNtpD3yqGQ",
  "key18": "3PYBcnK7CjzaxZF8riBRU6x79Uvn6Ytz75whe8zCi24fsW9A4XHAokYWY3QoZRTpKvHsz1rySPQESeVyxupKqqNq",
  "key19": "5opzpWQcPjhYMQpajHd5yxNSaEFjGWC7ZUYLZmHUiyTpr2thhowYmW8ienhcEgicaRuKwtciD6YXTwavmXDbWPpn",
  "key20": "3jEci6WnbZgr3fY9fVpyUMi8NzLGpwoJgk8D8q4tTMn64xHwCQoenhZP2sGHw3sqTwPhD9krrFQMhPChT6ycjzTA",
  "key21": "4R4f3tDisNNcxtvUFcyztshXQD5Fip6DMgYbB43JoM73MkqoUpPJ6Ti7Q7uFqPPnF78bFnN7HvFspWnwAT86pQnq",
  "key22": "3TVUU11MT6dx9HLgmJhgSgwtqhUBrXFFrq3vJGwoFmHsoRu61f7X3HpwB8nQLEHFBsE9aRLHad7rWdZaCgUuarSY",
  "key23": "2t7Ys1iLcijxjH8dasxchoU6MYRa7EjTmAr2uFTXeScViShndBSQnHrRS6LV5dBUfq5n4nS3MkBYspNrt1vQuWbh",
  "key24": "gLkzJ97R5KYNornHe6KLuhdKAvMKgbSAY7o3YthF9FvB7SgFDvDUkkF871TKuGyfnHHoAafqYPY4pPUzQRT8kja",
  "key25": "5WtnjsWCVxtkVktkaxfK3PKQLKqMBrzNUY2U9eKfwtrhtAu8nJdstdWvaX1Endhmq49Nc3br5U6yif8qDpsozakV",
  "key26": "3SjyPkgSLgVJw6xicgvLSSybv8oFRVeN6mwmspzyfuqQgsgvpjNSoDRmXwXzTEhu5aDmdpW6W3sFCkqrKS4EVz6D",
  "key27": "3ixs5wRCAdDiZLJdo8XzMBAgJkgrhwQa2mbPMQs9jzvWV66QBrH56uPP3cj3JvJe6CUZ7e2FdDF6FdaAs8UWuKuA",
  "key28": "aZviz3fiLRfZdnTetGnMUyz5TPk2KCUapMpcbUrUACVq4iQdASHHUKNFTZRF3krswB2fjjm9a6HLmmyBa6MxrfS",
  "key29": "4BaC1WPw1Ac4GUBKBztCQs15bd6N59uJquGcHxyjjsUbi83q8BPQkz2FxUgx6zxZdAXDPagV4W6ukY5feBU3eN5g",
  "key30": "4R1N3LNQMr6aoJaGFezKYUWUnxmME4SiFN1RXEz75Ldq83JhkQTYqmK7CjbEa6juQneBMJPiVajv5wG61ieRiD6T",
  "key31": "5pWkTxTf1W8AD1YwjNa9LptH4y6bqX6yH7yG7GauJVTTfTesSXaPZ3KHDrfPhPDKXEUk9AzsCVfunhUqABbrLm9L",
  "key32": "ukDUNp7tSzBoG6rv19dCuJ9Q6epVn5jnD5CaNM4rwpnmQq5fXKDYTmd5Wi59jFCA1oY78ppduzWKvbB6oyPPhFo",
  "key33": "EyS7pGoT2dG89YwRgnvLsNuL1fZfye5uhJin3iCPpd5FEheDYmdfyFCdn1yhPgyUUUKAbjr2gdAqNdaSBxt1zhL",
  "key34": "4CP7ShP4S4abEhrvCpPEtHhXUXQLg7jX1brLtV7eseQ1aReFx5M7ULCUF6oY3e2Fsjm7gNKJDgJR2TB7YEPEkHXc",
  "key35": "2pXPgML9JRNVBBwaAtcCifsoASDqP2UMg4zVtcisF214Cr3DECD8BNpxNMFsHA4MWgUGrGghtN6pAh2TdVSi5pnJ",
  "key36": "4ruHRa1B43WBHR1frWYMqxp9wEA5iwhKXsACncPDm9gU8oQGg1ygFb6Vu1T14vWVBPHvSswJFqyC7ae2QLqgYn8M",
  "key37": "3KM8pKtFgGRU5xHovUTmEEifDuRKMtcFwh4dY3XMy3tUDk2MCGAShLNa7ksquSBjmXaF8NhhRYRyNQsEdDePz5xz",
  "key38": "3Z73vMEhqFDBnZfn1DS37uSFMdymDuhDkbm3bYuAJKoKP63L5P2A5hAom4ngzfVSMN7HjG9FpN1Dk5HgrYAG7fus",
  "key39": "5gSW1ChP1MLNUYSP9wtEsmshd6e6BiLS4XK1QwtdTiErR3BD1Tw3XZhWbrQNnNedamiqERjBRM1BtAKJGJEediqp",
  "key40": "5hxjnWFkLaEdnQA5mydepGeDRZtNM9wTDV3GdKocRPqsCMYgBicTQ6dwyftPvWtyBHHNLuLYRN6bi4pdSkpRaFyv",
  "key41": "44NuZjJd5zLAQ9m1XbZiXfwkPomVrKgNBaERr251k4SjQsCdmkwdJCsquCADYctdbmT3hGyqW1RVWTCuBvbiczwg",
  "key42": "2ivafDfD9mKtBuLNaeT9SCoPrxQE2b9AYgFo2DNcUF1cDnfRLkq6r2oMhHygimvHU4ERtuzrhUdBBzNYRrghTRkQ",
  "key43": "3aucHrXDqnMMDdCbSbymARLeNeWCDYxAS4EoHuChwHWtu2v7b19boKYDZqreVzJ69kTbNz2Jz3jfzAdjLQDM2Eu8",
  "key44": "wrAgnWo4cWU86bqs6Nt7cGSXuSfURtMdWdAbMjQWqfTK9gGPBbRy1iCqLmcZWUVYQfeQCMovMRU9HphbQQwXGcs",
  "key45": "4wUVNK73nqgRVhUQw2v7Pve3d255QfK4TbdXYuHRiHL5pimAN1FnGFj88rLbhLbvPfRKMRDb67uufwXkuWArbe3i",
  "key46": "3Ppk6XrR7j65dTm5D8yQ9cpznPBuHRchFX9CV7rXC6FrKFpouaezsQP6MQiYzz5GzxtQQPCWa4t8t5FgVF9FsHM6",
  "key47": "35Xvc6fQDm44qa3LvSRgoK9h66hf6vgP7xqxU836LQwZNY4JQg21kbrTAqkbtTHGXYSZqyNNDAJ1PBbUxT3cwv8M",
  "key48": "4qMMASBzPkQPtrjC67vLGyWJQv8VtKA8gCWrQkgYE7kJNQGAvzGViuhXzJpuGqMZ3Jbz5q6zdhpvxSFz1G5QbdNv"
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
