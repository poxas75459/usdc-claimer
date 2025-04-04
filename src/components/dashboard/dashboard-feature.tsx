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
    "5154yJNBqdPkSNuKtokYwAbKzGeY1T3nNQMdHD7XELRo4ccnUqT5Eg919RHzxtF1XhKYYjLCJTgk6rGwWd9ziW4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UuA8zonmbUaZgqqsAJ1dQWpfouNghe71ChRDTC5f5jfy1hCvxt45WihXayjNtb2nwYWSGQXDsCzxq6vaxescX6",
  "key1": "4rQoY2VuhfTXv7twHq8M2JzPXVqkdzcCNC8mR7T827rZ1NFp2ixV3ZUPDriZFNfR6fqro2dERXgPfb3924mx1szJ",
  "key2": "2c2ViCrLHJzhxNKWPfNXpZsBCGfNgbpYYNFPUxJKUa5JEgAECmcRJm5puQx14sSTxPzb6FDcHeS7WKNMCyrfR3uE",
  "key3": "3NduUGPWbQ46nE8u91KZdmPwGRC7jNzYkV6Q2yszBKbPjbXXamC2SzDvxYiFM76tjJGVcgFWDWY4hqfkQ4BoaVdt",
  "key4": "SX2HtPi2hcNJaMd1S3imzhEnWTBEdYVVrJKKkmcyxcC13GxnAxXvwftf3ZP9hwdQwABdt9JxgNr5zL2g6xWHeDs",
  "key5": "2DNp4xnXoSpCufbpRd5SMS2jCWtHhgtGoYHAKUGs69T7XUF8Zekar35iV3NwDQMrwPsLEqPz32cj32aQmymFfZ6H",
  "key6": "2dbvth9getqEoYfBbi9nTmAXjemhEhfR73U8KLgEFoPRTbMBHx8tH8PKYYnc4hW3kQzg1L3RuSvcdtYSYCrTCdjX",
  "key7": "2ihgmqRnPxFaES12V8Sd4R75aAWFMpYT3rNjz2ikm5e8e6LR2S3hER1kqh7SqQVvV6wqn7VtN4S7YePd5FTFzNYp",
  "key8": "5iKRjbWtrQbp9en3N61qCL19wK9ngTsRqCzQWx71GHxwsMMQDYu7at46ugUkbPYWQqGAZnM6u64QpnTn13pnB9Zu",
  "key9": "UCxjwYjqiJFjg245eJz9d7K5SLGSkqS9nFY5Nic6c9vx54QZTX2QEQMe5d1oVHFUcvKc2ui6GFDWVcHwA6N541G",
  "key10": "3vdwazsZq63vkPG3MajRYHSKfpSQr2eme9NPuqzf948pWgAr8sxpubjcgWoXdXCvU8kcT5A2BefTP3WN8K7HCvTR",
  "key11": "25B6fW3YS1tPHv3aiVtqARLUojAB4uQRAaLMy3fkCD4vbEAjQ66NCfkUm9ohAMpC4N2odaktASzDbXonv3avHLGe",
  "key12": "5u1tp4S3mJ6nyZ51JccYNc2K6bmC8ycuy6sz4gSLXdgpDTVb69CenSDZqU7z3G33J2FAVRKWiTW6GnBqtgqcHEFH",
  "key13": "5huqV2aSpVKmphY4Cu3mXtZyW7q7rjXkzwx4rBtuvKuGjvobkxmpaUpnqPmujbwvymEBihJuTDkg7Wg3NLKLkuee",
  "key14": "4r9ff8gkJ1mVZgtbEKe9LWmroMfgt9Wk3WFWvkUzm9PmZtgbZr2YsCSS5qrs2D6XEUw8k2yQW6q8t935MPuAi1qS",
  "key15": "4qJPwgDKFr18XJGoEddbFRsE8oHvn8vzCLFqMqC1tVbCk62v6BcxVjUBNiFr8WgaefJysmdjNeTpjayosB36HuSg",
  "key16": "62X9fr2HaUV1PVAwpiEwYK6ACZEVLV94F8Sjd84tiM85A3tGroMP4hzpeHBb5ANb2MKWexahAUrLk5VFGuW46NZd",
  "key17": "4dCu4d16gwEgeZLNT4r7iRLt7hsGtUxMK749WyyvmaFE8QPr7xqckA99PKmvcKuo8nHa9BHY1qoEkrpDaZJ8RrbR",
  "key18": "2RwD17bvMK9D7Xdkb4spZiAT6VwNoWSLKS2tVmjm1f3Kfn92pF3n8aYG93J1rRQoirMFUgF8eD9czFrDJSNBpwDq",
  "key19": "9ntp5idoQn7WeYF6eafusBQ2gvS1Nm9ZLbtq76S9a5PoXXQqMtWMtbiuA1pxApoZRCW2Gk32Xr5RRKjM3NE8Ew3",
  "key20": "2iBtT5gwtQRKpu3FfZaUCRzzk391RDzzog3VmPUKYZXWAbm1SSfWvUzdcfqXcsGTNZwxNYsjyJcT2SjPMf4RdfCH",
  "key21": "eRx5bJ74xo7kZV1DdbHhvyw1aYiSu51jQt8JXdYgDggp45ka851VXnLSWW4kzKSN7cwxnqwy5Sa7efACaXqKziZ",
  "key22": "5MKGGamYcBJdWrHuUfrcs2y58YMrhkKrSq31NL5HNvW8EmifNAVVUFE3Lumjy1QEWUdGwJ9riswBBSdDQk9hm2PT",
  "key23": "47UYVZkukPhFR5aNsxMjrXkhRUhmfncQtUHyQz5BN8kSMDMig1aPRBptRTQYnbWNdLweZpyE4PojAw8Qfs8iJMA6",
  "key24": "5bBS85LiuQLB6RuoUXH9ViMaRNNSJTLdXXBW86J8i7GLtTRSFDefbyEh8smhicbq7H69G7edxmZq6fWZAsXjjpjG",
  "key25": "4jw8r1jn5KyzMTpatbn7XLH8JDdC6a2PbKy2xyvzsbZVj1uGPrHpvuYcBCRLgAw2YA7Fpqvef5DwdkQvYYXDE3Pe",
  "key26": "QGUSPLf26qZZt3V83riZjF9MqFZuDZLGVVGyM5ygWBrLQxYLHB6Rzu9hQvKzvYscxurKtp4ncV9PhfnjJpdXL88",
  "key27": "1GuprL8AFvU8C8dn8GXeZiDTwUDp6Zhsc228gPY2FkZJdX8MVPtm771h4rAyEaDPwSLzuEcx6UBDdv3yjbuJK4G",
  "key28": "45QtCVxtBueoN4SPD9N3aiSSF3h9A5Ndpwwdq5Bfmfz4vjAEQZk7RpjEhgfi8LCREdTaVPVDFcww1AguEFWojKr4",
  "key29": "5NweXYLfmtYnzdgyfPracGnP5fY1FTjzbPXnZNwFRfDSQ11qPbPZLATbwq6yQKB3CGGLAYeSKu6sWxpSgEGUJ5cm",
  "key30": "2LBskec9q3xJgYHw9Svdykc2mMFmE7SkeND7Ay3h6FX1bQFJHWy6DLnS516H5TgqATEvLq1YWr9uZHHzQ7iuNEqp",
  "key31": "2XBUVswn39BgvjkUdt7sFtXJ1twRXLER7yjP2NMdJHb38mgxD3PpzFQAEXtUv8W5vDHueNniaW7mV98a4FhETT2b",
  "key32": "38kjSAFnFqhFqLtevumkxfaJK5TVuVDKABdKwU9chJGsSnVALcnAFCGXqfiTaW8DM5SeHxbeL6mePyEg1EmqjHTJ",
  "key33": "3a26ohsrFLdbK6hbSnmuDnj3nAZyNczpFgVGrsLrWiRA82EdoKX25E9hFLE8RtGPgFFGeF9L3Zu9146kTbU3Cazn",
  "key34": "2AQRynGCQFY7p8gGqbp4DuPi3tkp1oyYho7xdHGr12o5R7v5gtCUdEtDxpfxzQMtEGJ2fokbGhDEq7ZwoxGYhDSr",
  "key35": "4U7vbUm2EKYjnnNWHibefkCE8yM5DHJM161UQJrM21mKz421DXPyKGPPFiGqxE6pFWm9cKriRa2NVb6kibLrAi9W",
  "key36": "48yKkqh73T4YfFYbdAQVpSW4X1TiFBqFYGT8y2zTJr36k6wuGKhgcAAvcGScWncH3sNvC9HxWDKXRwwiEVvpLjY6",
  "key37": "36Fp6RUkpRmVss5t6EgFN3z8ZiyzE8w9DD5BdTpwnxyNXqsGXq36Y6ebA3hbTeRxQTzJURp5MC4AfrnBJjG982T6",
  "key38": "2wZGCVtEbpHYJ75bdAKtEZtLhEnmyFgCzkvzTQk9uJ69xsAVTXRebZVEsk4Rr15Zrh6hvAYVw72FmoAPqegsSVdm",
  "key39": "HT9dCq63489eB7Crs68FMMtCr1HGbJDapm1s8juD8bFdUNV6aJ5sxo8d7FmUfvjUzF5kV1AUck7LaRXfJWpdvhX",
  "key40": "5EK2mbRXMjdaTD69sDyDpvt1XZeDqaqhSWN22atRDbudpEtZ7fsCaKeWLEVUsoJdk1C6QYPTb9sQUeUZJNgRf3ZP",
  "key41": "2WPm6udPoNFQS9KwQQzYPi5EG1LC5HYydgUHkGVSQqqcaeb7WxYBtYL9yodYR3D9s4S94NqZvxNwCaRH5kG9aDZE",
  "key42": "4bme9VGTTziAUdJK5o2hNeLmvtc1JNpoCNWEKY71EEf4FT8gTJtEsi3om5ohePH5AkLYwffX25xn3hxT9ixFZjDY",
  "key43": "3ddrD5w2CXd9suz73xdbgxWSrjdJTQty2HdPW1fkHjaNGGGAF568cDPdEU721A4RmSrg8f6BnzNjZG3rtV7kjeUw"
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
