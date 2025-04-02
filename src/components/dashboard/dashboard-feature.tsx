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
    "5necVmotHBBQq6paFjcrEh6BqNJFpDEuAXgcagg9857EinabLLge6yeyzSP86RWhrzhm7A7PqgU6fFon4Hw9Zg6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dLbaQkVWcaFtKMfH4ZUZgYwZ6j1vUHdtGgWd3Va3coNZYkcdgNpFtUZkHHV8VuFWQZt2961trMzkY9qKRY3Kj5c",
  "key1": "3Gddr9KxkeArtsFQFsG4K4ffCTNC5zaLW4CBUtAwJi2DzbH2tTHrFvU2uN2TVYjVJwbnbHAg54m42LLMHAzRuNRM",
  "key2": "3PgdF7beyzeMVF4HgRLwPh49oX9xnjBJcest8BLT8hEE5gjpVeTYkTQgvJxjdnX1cSWvk5deUXqb1pTKVZkuJVkJ",
  "key3": "4r3mW9Gbk3kXBhaueQTcurkP3A7J6SedTe67rAwzMfk5rYeDX2drjsvWaHhLqv4EJ3JMRRhasVgjFovH3VokX2dL",
  "key4": "58MBRP8LKevVpoGdeaBx2ekwKkWqE8bLTxbn7mtyUzC3Q1SMxERwEmY5gY9YJX71N4c6rudKzQb3mtFvDeX6JEyw",
  "key5": "N8rLAkAn1F4Htyvkv7fy6XpCQd1rzoc25eysveUCJjFKEiwaDRpKHKa5qBRfMTYGPW6v9Hpbfs333VoCtfkjj9R",
  "key6": "4myuvmn2uFffGpqrXJRsW7wFy1uYAxcQCYN8V9QoL5T48Uucz1E4zhbc7Qh93jFBb67QcQXA6n89RVdxy5Ltd9gw",
  "key7": "2oBzorP3sx5yAtLErtuv8DzyMVHsCFXs1f5t3ugV9wvfSxtuQ5rXdco89wcrJdkrTWa1T4skFe56LMrpaVePyuRd",
  "key8": "2mEEDuNvky5AmM3gPD1nuhWqBHzzviqDwY6D3CovcMzRJAL4KvTkAiU7XXipVkUxfNyHhknVmDe6s9rCxKkYZbH",
  "key9": "3N5pnyV9Sd8KkFzxuzcg6DTW4G3ZppUZaoN2RijP7eyuSv7Wt7HE6sPX4CeXgtxB1jJ8T9LL85JVTprHBHUrWfCt",
  "key10": "5BzrBXAx4FZTjni3U2cLVQjshgthaTh4ohU55ZQj86JNyd5DNSDN1E7RYnndBbVbCrCYdSjatuLJKMRfXAzhbi5K",
  "key11": "o4hnGUVP8uTvKWNGGeS3H9iwFLrerih9eyP57noXfHuzmbVvqSSngrQN8HZDB9Fy9wTjLpDf6wckdV4eXSJPErB",
  "key12": "49GYPckB2s3vG8PuC6yYcf8P4kCJXJKtUMDpHAoQbEkgXrnmzz6yMtyU5z6wR9aSCYgResVVDKcf1v48PWcV5FP7",
  "key13": "3sdJfAv7yVJErY4FS1gNLk3La28aR3E8KawN15x5iB46YTBTsCxTKAgryuDfLAWtJr381LvHkrL2MurHbxSnFU16",
  "key14": "4wBnqfaKVRi1ToAtrcjaWdnFd2ksPqeknpwtw6wgVLTPmHBt5TuAUeYwxaV74qCPr2ZoCx4XyJk9DyjCsUEBNEMh",
  "key15": "dM8f38zcXijnwr3fh43sZMma9AQSnqhbgkSzfvmopzxUeY3bG84WDEQUR2vSNrX96jKjpYvcZhYJVkLEFpJJWRG",
  "key16": "27Snc4z5qCaKhr55x2BTn8aQyU4AP8DWmdu3dGxvFXMo2WE2TMEbrBBmFM1ey874z3o32rrt7VKqWUQGUa5wAwsU",
  "key17": "2KBrKaR5wNMq8LuF4UBGJnAs3S9bo4Yb4jgEbRgKz4mPNb4iYBy7YHVD1KzLgJVxgu498DVpLRD3sZp9EtokwsL",
  "key18": "5RwFv4oQ4MaiZF7fNoRS8q6xjmYGaFtW6Zjb1uQkcfsoR5sZDfUFzZ2hN2fp9QAxz3nWjyyJ7bbrFgi7cFAsS8mq",
  "key19": "3MZbAvSKZpUiBNQdJUJyuc7Hv4GnZgTiHZ8JRYYiS7xJsvvci2AMHuwCHa6tGR3wRFJkpEaetCsyKgFUA9a5Z8fW",
  "key20": "35xwg8tsQ171Maf7DHyKrhqsV5PKZqrny6VdvTLmtaTpa8rgsrwGeUMdZwdYkkbGkdQ3XqZGZ6FRDq4ACSDNHT8L",
  "key21": "37hc4Cik8zUM7eZ7viMLdCCMuTDp2hSitmreUmqDWoswHtAcWMkDUUyaroSK9JCgZiP4AAizkBDywBRN8SSe7nwe",
  "key22": "3eMpT9Y21QUyit6gdMAxh7xkVxZdoRE5UghwvhVh4cWx6Kdo4vQ11CpMK8SNiudRZZuBD49gmYMtwUHwudkGF6TS",
  "key23": "3NHByqe5KGhpv17noUCgMi5rqk6kXFuDyTsxfYVAnpTYDiswTnr8pCdeK7SRVWRVj716X49QtfieuayZ7pe6M7gF",
  "key24": "5i8h8Nb8yXPfo3MsAsKjq7qCRtqWhGqibvC7gaEUKKabvCToWNjtzrbfJQp4GzR1E4NHcYydrz1KZeSYUZUxqea7",
  "key25": "YzGMWrDSWUk6Hj74MYwQsAs8dvq1urqWCmjfo6VGrx5WF5Z9orqZqCdHbxTA9rR7xcnFb6zipGDotydoTY1RgJH",
  "key26": "4AGGntccd2cX5Vu4ERxHKfwC1onTWqjhJtRuHcTo1We1baAEbjQGK7TGK4A2EWKAzHbEhUzdXFEGLDjSeyQvD8pt",
  "key27": "RJUBxc2e5FFDFwkztW2HsgWEFiPUbSW41JcMDb44HGfyR4wNCwKq8mLagsy5RcYovEBehfTQkdzBKHARPt9BPx9",
  "key28": "xBjBtKn7JrLZvSeXMQMum9XYwtxb9GDqbG4Ji2jPzPvm67WVQryu5sb64DYocWv83AiE5JbQT4evLz23TEmXhoU",
  "key29": "2TVHoa7G76dRq7oENoC7yHWPZvG2HzveyhyNQYUC7FVd7Eo7RDTZyUpvfTbU4hDZBD5uzD37dKUEHpHXif3RHHch",
  "key30": "5u8iuUHJwCJzgVvU9sv1p4Bd7dsQ85XZdAdmKkZp9QRq6Lw72a2Zk9XpPwhaXd1tDpB8zQaY3NxCSCcGAAA8WKUv",
  "key31": "3VyE7yUmWbJEr1KADbrfjXmiKTmGzFXtsNSDS2RagQuKppS7YqsQqQA9A6yqanEod7yJ9oANWnUafEiySm5qtYk5",
  "key32": "5ZLLHFtJdNVdMAoxG2gT5jdnHuT5E9RtytCCLWq1DJcMG9N9ZJa7usavXBHftziQknop16J1xM8y4HQJRT37EFAx",
  "key33": "AAFkcWzo59jiYYadTcPHutPf37kX6UYqNjtfVFEHC7HJEMCu8VXsitfW7rtumSVPMhFymSj8cn6DQKrNV3iFmA6",
  "key34": "5vbswddzdRt6KYgapJDLHsTPopdV2jEEcaXGwidr85C44v2nwa8kuZzKtXToDqiLDJcy7TNdGkArkXcuy3jk5shv",
  "key35": "55TD98AVSvJ4QKnAT8UTZnFQLckPmuNz6LQgHCkwgJhTJrMm2tH2sH7pXTaAaFYbfMQFV7kBrZNgKYHkDfj5ciw",
  "key36": "Gcjb7pwa2jqbE5j1h6Mtnbbtu8Hza6dRgXADFm1fzV8FvtbLCPrb53bFko7oqW5xxsAsWskfpmKqve3dhi4ohRN",
  "key37": "3rifcRuh9k8i3yZz9Ke1DrZs4i3q6h93yT75tB3QyNjRKswNANMFiWq8JvCJeERQSL1ijTNvJK4MKi9ARDuFCqhb",
  "key38": "5DQNGD4npC3SWPoWd2P4gVMPoWHvHn7zcGVMgg6d5Nimm6axF1uFhKknu7DeV7GZeybsBHxiXi7npVJRGWCNXNuA",
  "key39": "3aV2mtBAneWrNjd7saHKQPCTm7ttsGgfDkd86j3CKEELSLHd9ooaMo29qZU3QcuVL8JXcNtJN6Zcwtxy96ERjL8L",
  "key40": "5eP7YoKQopghrQoDobFBm7aAf33v2UTBbLhaaPDqzDhZypu3rswxj8VyHxbMhqLrKFE7p6DiDCMQ6ZzqLhSbFiCx",
  "key41": "5qqap3eVJwmiZcDgnM649ihcBrJFs7aAyXRQnLSyRKThx8dvfJorDZ2ekBDQPnJ61U8rMfondAHYD5gbhy6vx5ct",
  "key42": "v7JWRfZHUNb4zVyE5uXkPFrZBbzqwjoPonGDx6frTSjkqsNXv3SH47DKPLSZrXzi3tfWg7HHYeJux7yczxeNKwh",
  "key43": "3Vddex6DbaqrpX7tKUHqixeVnpQsCYDtA2c2YvgXx5j3PVbByVkipVBS8LuUmwQz4St6Fum7iUzAZFb7hvb6hbjV",
  "key44": "4sEdugEuMmy9KzQ73yM2fC1b6twCJa2PTVhWesXTXSs68aYfgtK5gASHD9KegXnnjooHHpC2u35g6VFwMA4HCZP9",
  "key45": "4iyQuECkVmLLUAyvUgqqC3EChwUVWFdXrGD7uL9MVazFo1BkEjH3VTVyVMdbbwSsB6iKuHs2ZW9M6gK1ywbdKzXS"
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
