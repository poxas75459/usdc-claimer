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
    "2YLemW2jWvXvnpKoqEJs3CKW7ycJQk2THeyhYkRDExi43MtcUGPGzhpt2bgAMg43LiB8q8WV8ewMRpJtrwgnZhvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gni1oikJqxncWA84CtRKdx8hTJ6RRzDzfcf9MLs6iFbrf5N1oyYZKZueKVjhf7QCpfnQf6B4c67Bm35o1wbHuL",
  "key1": "4MWJXhss4zJn2k69jBPDohGKgt6sDf58D2Shwdapq9Y1aQFV2RgYbt3V1PLmbBnRrA9QT2pGukeUGjGqkDJsFtmT",
  "key2": "5mygy1kwR2Aoa1paC82bRXMjnCpZh52JmKiBsfGgG3de8ZKAuc1ewsMN6hwk59HUdD9LCMDxZcUAf7cMs4rEwdGi",
  "key3": "3b2iutPe2K4ojFNeViGdW5KY6pT9C9hHPBeC2Nf7gxiwRQPn8hdpQLxkynn3HX1kVReVSFR5TDSZQXPtqgRFmCDb",
  "key4": "2YEvVfNPbnWokTUgkQQXmA8h6CHB5MHrmEH5G8wwvEhw2i1Tg6Y18RCcoR7c233pCN8sZhTTE5pkUj8yqGMdDPza",
  "key5": "36685M9529S3GSkQ4qUamaT79PLCXMrP4r8xF1fP2igyfYavSvxmzbZgs2mj6cTRANJUGG96jLmB342xdoMxD77d",
  "key6": "2jdM3bXEJxzRJ7qvuDd8A45y82HGBsdaRN4zLB96ZTZahZAbm2sqUCK61qEhm6a9fs7qNSV8iBSeqMEPfpbo9Xrb",
  "key7": "54bxz7Tj7BH1V58628YgCqro6aDHPL7dXhvBPAxQYXAt16wHyQMYaJ4CgvrztmW3nFL5dSmCEnCFQTueGBzFYjoV",
  "key8": "5BPYUbs8veVHhkmcSt5PzbqTD3HGxJAUYQLqsy53WcxcNtcmqJ8gwQQpmPBbkoSXVWMJ3ArhemuYXuJ3cmaadL8L",
  "key9": "3eQQaSQK9kJKvjiPpc8TcUzqfr8zswnhNjo6soHWELkSrHTfdGAGhm1znTAuLJFhNidoeknAWiH6WNMPyybbZbGc",
  "key10": "62VgsXPdQH78iEe93D6giBHoi4Vy9ELqwrMbhqCyg2VDnp9ioGKUNtGrLacj8JNs5w8nzAAYsv7GhF4S6nK9jve1",
  "key11": "5en9afRRj5RRzJeQABLsRNZhutci9B1XzXTjpNNqoekqcWY1wpYgNqHxNEH7VxVSkcofz9gcEsZcgu5hPmQMmWru",
  "key12": "4H6SDYDfHdSGkQ7V5eFVBvwdNyLvAUxra5EiR1tfSweXiKmTNa33XpktY1ih8mj1tEm1MbZsdvxoxkyBeRFeUoFf",
  "key13": "6113nuQCWFeszJAPwkkYeErhvqJRdkGNorjYtFdBFgG8H82o8SxDqtRRQea7r8hYtSwoYif63nSgyUta9RcQg3fR",
  "key14": "YNxHxKio14oBeLjcM5pvDv9rWjwRX25QsMAx7e2vjyHF6xvyZX7Yggttnd7etB5WxzaNDLxvm5VketGC8Hgyz2Y",
  "key15": "iZGtoEmX3fwdmXxR8YTdxBLiztVYNBEeTHDZUxYnpCag1nN9HczD3ckEDqswo5zCSHYnbFmrJzxo6L1StaSUHcf",
  "key16": "P8amtyFTLkkaynDab7WpEHq7QLLWs7F1bdJQhKAZ8qPcp9EeJjtSkKtEuEwyZsdPgppzyLTVsu2PfbU5JtoDWqs",
  "key17": "4y4ZuTAQBUuuRsWviPyBut7AjqkNs4WDSDm3EgRNSykFf7NEKr1apg5gKPdBTgXopYMNBatmxb8GtS9tpVuEPHBo",
  "key18": "2eJHA92eAxe63c2iD2kxg7gvZ7fkbmkMpuULPCBAv5xqDsS6Kz9jrzeKDrKedfGmiF14sihrAzSGfMVgowb57EkH",
  "key19": "4E6ZQuBPitFH1CrseT9CFkvTKJLuBkV3tz3RGvHMXjNArXff7Na9z4sAKAXtiggoq8gnXbfex2ZcimDVeB3hrAH",
  "key20": "31nffc7BBMz2HwnwMiUDrH6wWLc27xgNBLgm3gZsS7d1GPB54BNjPDPDCkFVydB9jFHGKA9FkcPqv2tTHZvmgv3V",
  "key21": "2h6wyJdsMfnkob4FopNNdtATBeniprz7SYX1NB2xxfeq5M8RcikFBigysxw5PPCtFgpSkMHxHnJG1HcbQjEFzMLW",
  "key22": "2heC1NDji8MPTzcK9m1KoYT7i7meQHXPADfNNCbMeFMusw6tkAFL1iVpDHxnJoDT9h5X9RH9iKSHnSB3BmCoE4oo",
  "key23": "2BbJJMFjEH3KRPpfQdTbdkBffHHFQkj5HF8M8Js8heqajx8vmBqUqk8v1MwKPoctEPFC9HsmYKYYBsXwAsM8szr3",
  "key24": "2vTyHCtTvywsnP9b5ZmdKgHWUhUpRsPVSXB8djrvn1su1dwV72JGDfEXiPQkuqTnmTJYJKP5uziYoSQXYg8sYyS1",
  "key25": "4bEUV2BBHP5wZbxunhoN4rcBJHnskfigvyvHyEEtmK9mgnhjqveCpSNp54CN1d73Tot67XyVddvG1roX5K9gMFv1",
  "key26": "4FHrxHEWrgEWudbtru2DuYYnhGuzbdJ9RrY7wk5tYV3BnD1h2g52BJiRBSAmpEgYHu8URvZtb72KTdwrcPQbpMSd",
  "key27": "3wYnkVRNnYW8TBNggRw9XQZNLujk3oMG4njcMChEkymXuqiJMKterBwCL42EKsPb4sLMfXtM1Cr7CEkQygGPuu4H",
  "key28": "2QmkrZer32X8Y3msf1L6Yq9vzTYMumdXCQkHJpMkZW39h7yLjJSU8Hcxwzo4ZMcL1DsxFg4gQZF9kc47oJyf5m63",
  "key29": "5tUkaJabVCGuGBY6HFbSMY4Wig48fXxBDrzE8xJw4GQ244nBeonvBtXvfA8iX32ujkjfuwR9G8gRhBuZXDYwSAMX",
  "key30": "VQpWyDnnnX3t6cmnwzWhNam5yd3WMcsEGXR5ANNP6NKCm8hrv7Svkv3oAF47NNfyYhUSBRUf3ADWY56D573PkT7",
  "key31": "3QdZV4jX9ohThsiBJ9egvxrkt8NvhvXQ9hVUWZGHEiwHhsoLZFK6aXG1Pa3um9H3y9WtZn5yKXrMzsYAXY9FsYxG",
  "key32": "5uzumr9ju77hsjjsyG4Yqa5UVjbmubWVHYDM6zxnCifbxppEYu6VfpmuBrsvoQovXGG3XPCBaYCDAEFngBPFqK2a",
  "key33": "4pSQEx8xqogvanwkukiKzyH3nx4YaAF41bU3fHCEpFZZPyLu6jNg1fWVPjEA4n7Pox1Thw4Szx1ZUWTCm3zQwYV1",
  "key34": "5uZFU4vCookTypc7iizPXGktNQAZTqsn67hL7L2N5hUYLGtzak5Tm8kGcr9VvNcn97Dvq8jqnKunXFywiB3b14HS",
  "key35": "3QXxuNfr5Eboiakec3smouqp3UzhHM3DHQ5bXjgjjT55SXppuiHsCEujnyQgUrxRSoasgTsXxwpPsmbdK5LdRMbb",
  "key36": "5MWycCNDML18zsCK5XNtuSCdXfdqaxQTpjnpnQc9o2aS1bWaW8zBFRS3K8QCtU1zxjsxCYJc2uMZu1ygtPhbmVwE",
  "key37": "P6U6qMWvoSb2jv69kFr36W1VHFJ5fraSh3LLTPGsuBkXpw6Xgjpg4gXrYKmLZxVtRkcuYhWh3q8QNx5EpX8dzpy",
  "key38": "HcmQAGDUAacDTGioYCmxLhK8vpUSUtUkQ4vZQ7UsxQUcMgdLxEDrMuWbSqS4CCupbNq5nYyA4STcsbB4vEPajdS",
  "key39": "2mK5XXuEeXQkoZmYxLHs8q99r1Fb4pKjLy89n4BPWaKXQUELgZ9XY4NMYFCocqDfRKzyVFEr4h5j6sPiPW5hizL8",
  "key40": "2YJYY9BD2L83nGY4T9HjPn6n5EBrtvevS6xfe3kAYkC4Xda9Q1xDk4pjRcndLucpk5f5BiPdd9KJGnxaZA2mmG2L",
  "key41": "63SFXaqsv4Y6J1X8uhKMSAEUo7WVMMdnNJSD5fiqswBvwSqUU7HhYHMAmcmugkDUrZoKHfWzC7BBBfQetAjpdw3n",
  "key42": "3zpMgUxsDrCRzmw6RJF25oVdPCX8sRjsdCwCsCGzLZ11cWpLt1Cf8omSzUHQTwvGP6FbpZXuqvxkxkXkESey2Vp1",
  "key43": "5ZmttwLxXARrg8DVpx2wrGihthVRBhnXBuJP7q3wq543im2DReEAwVVuEu8wX3xefXL5HHXiokCXmfoCNAztg2c2",
  "key44": "MQuL8GuMbNTy4TmpyH334Kvawb2P8jHDKowiDMNspRe3ko2qnn8h79qSzUX5ULQYSMfJPDdnc2DhhxwYT15cqnf",
  "key45": "24wg8e1p8AJ9THhNtsYryV7uR1DkpEDTUmfBGYxchBjFN8HZLSqe7huK1bpxrFc1zxxjM4yVmKJoXaQnawT4eCA8",
  "key46": "3xgj7vLyu337TDW3m3LzMVBr5QDbR3Ub4UiVeerB6xJcorW2dsV5o3YiFdFvhDvXDrTqJ2n4X2vWFXSwUpeySFVj",
  "key47": "3gDmgrha4M1vMS3sRVyRfw74qn1ko5VCpvLMwor6nCGqiQmsHA1Vh8bLsmsoNtKGNpNQEPCNmKT5tFGVJMD74Qrh",
  "key48": "2LvDpzCujFT285QRS5bmrKFwmUV9AdxNiVTWysh7TerScffniVBNvwQUyYzDREVC2pgL9ku9UqY4fUw6ee5yBCLB"
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
