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
    "3aUhgX3bg6Q3N51fvrFJ3UpqeBCW76TEm7HuJU5yEdA5ms1pfqj2SQ4oAEPUavYFCdggRDqoatK1x6WcLnecYmDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATmcKuQ6xGCxcPUxH3riXWCPm9BUwTws1kzGkfjNtsvmw5xRao1QyEzr35Gu3QR3fdUtBin2J4NcBbxugRXz2Uo",
  "key1": "2iuqq3Ucpj1uD7hEsdtSxXgKbhKf56yFZhEhWqonc8cgoRTytPvf3RfRKnKmuiK4dMa1i4uEaLTaxxWojmbnu4g1",
  "key2": "4DTvBPkjAkgjFcJNcKf1pGyCjCiEnAxsvDJj8FfR5g4eFWgKsizCEEXDvprUn2yxnUSRavmyevegfpLgj7s6p6fZ",
  "key3": "5yGaF6Rny4cdq6gZRWFgKfPqLNaPs83aN7nspD8h3mFsA2hQnnCC7s89NDudag7X81Lyr9oahFxg2ZWdNdmPegRh",
  "key4": "5qxCysJaMgYS58Bb5bFX8RaBDEJS9j4rB5ay5EaeshcXUxFQYUk6mbDm4J3EW94M784fxqCVXemH2btp6bVqy6Hf",
  "key5": "4YooiUJRimjRp7W5mfpXSMyrdQNjN7ZxvRDGffSeMd4Q1NTpK62brUiR6JrxiNewhRkk4d7DbPuY2izd18U2tAPB",
  "key6": "2K5vWV3hdxm9kCp6SLKBAh88LDn5fh47b7UD97Gyz5yeg4pcCNiw9QyhGi8whbDBRfeKxXEAstYNFgi3p4abvo81",
  "key7": "2DfyPSVuHeaSB7gq5h2to5o5ur8tiY4wyQGmCqitKXpJ3Ew3KkbxgsZbVtg5dCfscVVoQjHngGh82aKFxEHZpjXf",
  "key8": "fMbawsWgsMoxgprdX8q1qL3c5iW9McTUVNC6e77zQePm72Cm775hH6QKZu8egrRkPQorKK6cPoJYhKYw12f58J2",
  "key9": "49FqCKcSgr3U5HPwtZo1RFVQwHV9UarDEBFNJ6Dvng2EPc9AuaHV5kTfdfsvvpSX67sWPHzSpNrCojytwYPXTEj5",
  "key10": "5x8HRUDfBTsaFu6xmuMTj4wFAGMSv9fY8SBXKSKkJqQfywB95Y37QNqH7We6nxjbnQVhThNNvWCCMkaS5xn9KB1d",
  "key11": "2aryQJf2tt2MHouxEryZ4qnmuqbq1YKNi7mg8myAPCidWJx65QbEogkLhZqsZq4By7Qr7fEKugKWeh4ccoMUpjDe",
  "key12": "5UuGXuiJ58n8Q8cPSksG1GsqyUDVVWM8dw1MkhJZMTLdYGkTkHJrYFe1oy9XkxBnzg1tA6jVAJy8boHguE5kYNYy",
  "key13": "3vUfh4uGFBvcXFy2qJQXDcpu9P8ReZrqZbnXbd7bW35Q3uaANKNzmLvF63np6MsVRYe7yfddfzWov5NqiEX4VQ4",
  "key14": "gd88jyYkPhjnNPbi7ZAG3XxF4AbRKuk4rywajtzuNhpHHkG3mhwiiQ4rpLzooRLeXyd3oxjLf65K76NwCNfjU3J",
  "key15": "2nhpt8jsXxkEZ6pcF3LWsG44WGM2oJufUU2xEhBYjSsTEKcNvb9AtvmpY8zSqNRYbfPh2NDaaEwbJx6u3Yevbn7z",
  "key16": "eg2cRPZ1phQpugNttnygJ8sEjfN4aDb3kPV1H3JrG2kD9MS1QZrPY7xcoJ4rXYqNakB4QPReQranFq2pVbgd4FW",
  "key17": "3MSJeCNYUw2Cn5mDJNJyqLH1KQ9hzqn2VSk2a8BbTfFC2QqUUShoGWBFo2rdAmfZV3EnYiZVvuyyW1TsVYeGVAAB",
  "key18": "N8BiStxmefg3Dt91oLqR6hu4smS5GdX7p9uTRjArUhrtzNjdKjFGsvFbxoGLwSs2Wt1b7wkU2pewHUqBmJJbPeg",
  "key19": "5jv3pwNRRz9Y7DXrqfAvZcUDM1tVGdsFPApanbL3HXRayxdZv9g42s4o4eTia1cayjoJtKKQLo4TWFat4obt1gNp",
  "key20": "2kaVK9A3ob2XBKVuvL7VNkNgqfHJb6TVixDe6F6aNknGQmmW4Pi5k5bPzBmajDCFMYxN9ws7F3EBmpQCcSqvV3do",
  "key21": "4fuC4xXWEj99j6GwjCycfjETBP19pKijHUH4frM4ZLBdiDqSrFFHs3txNLLPKpFwMawaFmZgbYLSuNs6U7mN9rkf",
  "key22": "Vd1uZqCE55aBNCB9U12ZYF6YKgNAbJeYgPYKbxL9h7xw4xQaA7vPArVMACqkgTpKWaZVwv2MwtkogQuHyvJDSy2",
  "key23": "B2oP65v4bGMDQDemZGdE1L1zhPTMkdgonW4FV64aVK8YM47oAPgDmWtq52YqDiwJKiVQK9q2W4JtzysfffpM9t4",
  "key24": "p8Z3pQGZ9KHDYYYUSY8quAZ4nVDGD81pc3NvXmpV4aGZfuKF42yy7G7weztG83toZWHcndJ8cxQZNa76LuaLkcb",
  "key25": "4XMiHMztCWUXntB9pKWbnrVXseaP3XvoukgCoPmQ5a9mNw9EiBduseE8WLfZTmGnX2qjHmcjcrVMbwNpHNVEmbSx",
  "key26": "5sC1wiG1d7wujt9AL2QPqXYF4cnCT48JQHwvu1PY4SFFcrh9mQ9ZXg21eQje4uvUpNE7fYoHV2kkKEQ9jcYmoV2w",
  "key27": "3MtMGFyQ7Z8QBvifzLcvSfsh4qfwZbwA6csgTTdH8a66Aw3CZGavtGjQf1BNRhaQmkBXDckXu74bVTy47mgRjARM",
  "key28": "2hQLo7AdN2oXNJeePUkDhsZYuGm4Qx5bTtSSJGisvcxDvmpy76iKs9rAXpmP6fQ6HJdJRbKLAZn1ahEoTuD8c9gr",
  "key29": "3Dd6yQuzTxgJGn24J9mXGsk33mcqBukAttNTXMS1ZPRduTkssGtvyqYgzRc6VumtnNaNX5XvJV8BNwEwAeD75WBy",
  "key30": "JzLLjvAYG33pcmryAX7iKF48GNe8fJf1Vazr3c7aaZcaHJjht62eccKFH8vcP5JF8FJpDwxKWBPpwnjsKbrEVt8",
  "key31": "5nQLjfyJ3MXZ4y2P7Z7QAiXNBTcyUtkKHmgdxCnzAL4DsS3aRFHiidD54xs96A2g1HJRDrTQFNGy9edEYZkGAGd1",
  "key32": "2cX47F5S5Qn3nf74RkQ4uaNEKmzGNSYsFq2iGq9CP5JJZNAgq5ybJZYej4A6vcKW8HuGpUzSLY8jrnFeHwq161oR",
  "key33": "5s15BntBQfEZLyssfWjgrvbojsFDUgviJfGcTWdKtpBhT5XZP3EEkFgLShVC6pp5rnKhAQ82MguZmRKc6TFo23y2",
  "key34": "25JgDiYtoamLZer6bbgWqPAjFqQUqNFyg5BCJP2R9HahYv1EnbyhbqnURpwAbNchvXiQdJxXbbBNSgo2yVGeXYeJ",
  "key35": "2uZbf5GLMzy5nCNABebzjTWa9yfsm76Jb2zutHZZNj71L3kDWZ2WpdeAQwmzr9MfDPBvRAMzwuEyCFB5B9edW1xn",
  "key36": "4txxfGw1JSaVaxwXVJiXr8hxj33We3JMMUu3UBUfLwcdTaBHseFAMShgKnMebDXjdTEFKQ1iDQKrBN8TjDtgsmSA",
  "key37": "4aaiFQmdsQHUgZydN8FCStvEFzchhm96GDkHb5skSiPCjdAu4S5dXTVGfx3i6pf3tTmAbAcozjeC8hzNhv8honXi",
  "key38": "5vpUdCZdAhdPSjBe4An7heicMM3Kn5pVkEPrfVo2e5tp8QWLkcjG6cCrL2VJUXZXxGTAwLtqoavbDopXmbZQhZwG",
  "key39": "4LXWUEdGwNJDsimH3JeDws36j7ptxQo7nnQAD27wDT3a5AxMFHKYLsDqrNGgPrWPqWTQdEbjyo3r8bvh5n7DVM3b"
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
