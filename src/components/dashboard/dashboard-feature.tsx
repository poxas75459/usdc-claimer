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
    "TXVKbxj9y7CvCfqLfwAH1fHUnkjYiFVxbjENoqoWE5HZFffJ3axcYC7mV2n9D6G4YFGgzZxvP8aoRBbSDXqnXH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ee9TxiuX6hWBePrMf5XvYVQrZNT9vs8LACy2LC8B4mSfVtv62u1w9HqrmMYDE1BqLHvYhWxVdxcxL3BYz87YZja",
  "key1": "7WwfFXU47e3TYopLwwcC6hGpBxJCyLM98Hgn4curtLyBuCPv8QJqrX1ydc2SLN7xMJLCn9VMH4AbDSHGCKhcgxW",
  "key2": "5KNJdgwKoVqBRVqXQ5w9B1H3L933Ux6uRpbnvPdWfUvxXCCtmdQhJR9dh1W8VNfz9jSJJAG8Xu9j5bEKJfQhuky6",
  "key3": "2rF5FKbuj3MGXR3CVRL12k5ZiV5nRvTXCRZhqcm21sbu8YN7upD8RhgD7vpU1AWzrwCk89yzJGPK6hximTgqCG6T",
  "key4": "4cd172rVMqtM1D4Eudc2ZFpvi8bVV1T6vodvbS81kjq1b7SJnGVymeBqtXwWcTFtQx4Czy5Km5Ehg1k4zNJKjvSH",
  "key5": "26v2tHVdejYHzJcChrzjLv4wF3QZAXodRBGjCG62UFEPCZpZN7qeRSBrYgkYHrxWDC1gB4cnps2He9Yopy2PYcFC",
  "key6": "23bFfbH615rcTmspuEi7B3qj4dFkuy586SzeSozwT31pV6ZJE3ZQEvpi8crvkboeJCqaqy3MHuNuKSayhwz88KqF",
  "key7": "59LYtuMTkdQiFNCWaT6mqYS4JToFsw49v3eobmpYgBQaeXx6VwjykcrarmymTp4TkiAvYiQx4vEo8as5ELb1f7wC",
  "key8": "2GqeXw3skHUR3xX4uH3Xs5P41hVDHhcRyU8wbLykrDW4NgURfpJ852FvqizYKApnxiAnfgUMx9MCr6x2LiAbetRT",
  "key9": "4F9V9JJQwF9NxAY2RKD5ffCREKgxvqxmGwMYJZMG4oFTG4otRPGWYLXknV85yQE6HL9tiqX5JQfJNANrCAbYYYj",
  "key10": "QrvBwVzeY2VXNUSRoR7DFDnuvA6WecwbL4iccwsa1irCWwpaoAftsMBfwugjsCdVuLarBaHe14o7Ph1Vj2UakKv",
  "key11": "2D5Zu396A5sZaxpi76gEuRH7wSViVZ6F6xfGYXhPSY31MkkFdQZRnnc4jLbU3nDJFkWyvfuVJLLCFjeAMi2QU5AG",
  "key12": "xNmiaRpRFMRZou49ZqHHs6Vt1tRMvshD3ur2U4EDgT3PfuCuywvpJ8q8qJZFcCoM86TAJL4dWqAkn4wYoD3P4qt",
  "key13": "3rGhCdctn2911kTL9QZNNiPLJzsdwqGV4C6qbbCjbQcbpuXNa58qa34aCT8eeeqRbbyykrsPN52hwHxhtdqXMSFW",
  "key14": "2PbEPteM7P6h4qUUf29ENtJGEWiHgP3GUyrVgvAtA33YHCaWwDARe29qQMXLMb9ENNCjBLYgEFGfEa2GtM6eev3L",
  "key15": "37ZSATzWVS6M9JtauUBXHvQLeyMucm8XuUw4ptDZTKX2Hi7wWrbhqoFDN1HofzuXWmCvr9uczgB3bZx5Xu2UHq3s",
  "key16": "2N2sL9BiNXcDELm9YEekKe1zJCATftEe9fNyJsLBTVoCZ2giRYCCm2GeVXdk2zN2J8AcGZgp2McLFSE1cHAR4EQn",
  "key17": "VmQssLCq1jjyPNT5en16mYDairv3LnXrrxaMz8UPWZRccU7gfPvgUqWxb5WD7atRmFCgsLJiwQrKfTAhgVu9w1D",
  "key18": "3iuqTXjgVaB9QLcVsWg3g8CLUDgbFcfPNtFPCikJawG7rK8T1A5A4vUktibze6Ki26ZPv69Pu3CnXkBpKZVrHJnG",
  "key19": "kWj88UFjmnrymvKAvkK7ACob7uupktGHiP4dtCmGBDPkFowA76pEPkZnGoH1x6z8APX27s43hH2hzZabJydi598",
  "key20": "47Kq8ukDxEM8bUv8TSRTSVZ7o945874bbd36CS8o8LvSP6JWkCv7itXhgDRrSZ2pHMGdu9chxpNjc2NBgDPoVSmh",
  "key21": "3Z5gCE6rhYjqTZ9hTywt5X4ZnP3VaCs4GEtdDH8rvHW2jqDm1VpZovihByJGGC1VosWsvrJhfiK9aWezZutKWHEC",
  "key22": "3fpFUD4DcEjnCqUopDiTK4BgkewyCGVDhJmmMFJjNvQuuZ8mdnMXAfN6BBBR6dyBKGBzAyvKdNGSJkqaa3DJcsya",
  "key23": "3F4QeKdDj8xw7GBpDtvbWeZ3eEc9UstpRwNBZt1ELU4TCxZHKtfzrmBPGHyCSBuQSVTsfbhmjDyjKfQbdB4vyPXv",
  "key24": "3DR3pDbW1WAUzxoYHe4q8fNUiTVSQBVk1CSGT7WyTRuknFjR55f1V2YemsZ7uV6ibfFbHzg9fkTBaRxAJcXiMdHB",
  "key25": "5TFPT7hgMq2BRhvaWMeqXt9HFsuAZxwtJGkhcLfRbX4EzpqvjsmzUtLhFM5NWA1Ms3CPi7HjELP3AtjEkaPYo2C7",
  "key26": "3gFCAnK2hpiVuPwH28cA1GgRiCDVbiULQ3t6nQfDJdFm9ap56uqBpt4daqDpLsVJXHga4HQvrESJWpNzRdZLWygs",
  "key27": "32Knvu6fq2dpwFMwktpbU5TNf2NjtrJB1r8YJQ1FcKtCHyBFFJcrrgQxyVLWckMUFta6Fn72cBrVP7kXZ23q2SMS",
  "key28": "2vhVgaaSiRdGKXQdSY8LGbgyGVf9UmF368aLC2aWLRmyG7CJ6LTh3SACsfobZEvW5u1N2gHHjWuEeRXyuULx6qAj",
  "key29": "KGHZmCi7z3QDMn7YVHZ2ZjQuSxSZQjdfZu4XNmnFRazoeecZYHC72u3fekCMmPnCRtJAq3WGuQzUQDfYHR7i72G",
  "key30": "5LnkZEG1HBGKKmGXGjj8uC62GDTBDv5j3s9sGCqZfUcigwPsdmaSpW8LtZ3auFw85K7rwdAxky2Xa9deUEwyoiD5",
  "key31": "5EDE4NkL397RM9Wzo57MohQT2DhVdw2VNCChpnjVdg5VPHPPRCbDRnUFpxvMi8PbEGWRoXTjHE4eoVmkzWUarGfi",
  "key32": "PKy4vss3LhCEJoYLCQqEzBqq1RwQYwTWU9RWt27xCT6SPKB2scFqMDLfHt2Pkwhyc37vivbn4Lo7mprodcoNHbE",
  "key33": "4A4zFG4Kvw6yBjDPt6DhQ8zVCAVoH58TNKiCtU5EhBHABZqEsW674WdjzutR7a1kwhJZn1pur6t6DP1M6ho3vRzm",
  "key34": "27WFwersJUEE8oxJ21QiJrACjfF7heE2AS8xuaYg6iE3X2NS3PfGXjYrRQ9fHEoMricUhzF5RuBKDbmm6H5k6gsb",
  "key35": "4GU3eY9dHxeRx29NbDTW5jDiy9YkShhCk4dn5dukVy8FHvvQj9aCP5r5a8CL1y1YwtZp3t35qwgiLppMEWZdbgqe",
  "key36": "3tKN2GuMEx7RXA52AKhzpBZygxePiVTuayPUXzJJbfRofDntU4kVV7NF2fMjvjMRgRaqKF3ZW798QbHGHoeaBfe6",
  "key37": "2bQvWpadmNnt28u3YaBGzLJSgk8ekP9AgcGekTCFZEuB2ioVpykJnzH8QcW3x9C49Yyk6tYHWB5kA1i2DnUcokix",
  "key38": "3ptXJLjfdnUW4TEkKXkDHHm6wfziiwK41iUAnfxn3W1hQ9vq2AKreGjzNiCgYhFC8bpGE6jJpKixWi6x93YnoSsT"
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
