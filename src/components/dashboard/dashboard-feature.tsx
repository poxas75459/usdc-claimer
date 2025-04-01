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
    "545WkWBRTzFQhhaeeHvTUgJUNHrwBREdtGYYksHBVk28tkwDLimEiUjKoK17AWM77Lb5UXJS8XGq6sF6swe9qmBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmPLLPhrAoPVBvQyF1nk6fL4tfP2vgZrKLTYWj3VBFP45thTAJFbJv797Q3S1Kjv7nrZCaM5ucsormckrRuF6Rd",
  "key1": "4RxHFdGxTjf6JQz9o729K3nzFeABR4Wto1i2sS4Mca8Nn12kMams9CwLfGDRCVHTML8DwmvHBJg7nXshBACCpU2K",
  "key2": "3D5yC55GZBV7jn11fzRYAQFUQBLM9FHq8k6h5ggf5JTKJ3Suo3FWfC23KGG98rJqdVWMu5ovurEn9McuJAVTdDKu",
  "key3": "X6empWLee85zWDHtySMCS2nkJTkwa9gu728JtnswW7mQ6tPBQnpsLJqyyL7g1JtFUpuiwv4qHqrpWVsQ7KuBpLQ",
  "key4": "CgrX4rsD1LsuaaQP4qrY7XHp3x1Pgs8wNwb2YRqcoZyvmSSqBgx3x9qxmZRzPFyPGrwJi9fp18b33L2eRpw8hsH",
  "key5": "3ZT5Ah4djoN2Jyd76qspwPVRqeqAxKz2mWEPmrmYLXc2b5Sfp29w2Uk1m5VuytCwGfd89vicsiWEzeDaaBAJ8Zxe",
  "key6": "55NhtgZAwNscdQvZoTX9iSrq2gpWT3bXBvmyKdK6x5fmgTKjNnsU9Lofw7SHjsJRMmi34W9nbeXpSw5LoTJGUoTT",
  "key7": "3NqJX1MDrVeiPu4fLs34ficq7HwBFNAs3x3yvFGso1hTY63jzoZ5QZmdcnC1kWPLhxfv7mrF6QLyx1gHMzraFTnJ",
  "key8": "nWv8NskWvQ8QCzzuH9SZY1SMf9Y2cc8Cdz8yfPdjv3vAds6YSUKZihTePnwNwMCnwTvjRtqBQgb9urgeLiSsFSr",
  "key9": "3WFbZ5a6zNqzxJtPN2Boo9qCUM6xgahnHZ2Lx4SaDFfyR8KJsTRpiiK2ubAJqXrhyieztXwoiMJ8BR731otJbu2b",
  "key10": "5vk9MkSY1kBcvcgCrDMnWtaL9i3Vb93wmqk8hU2yDWKLHxwb2FACsdwA8qhhXuQRCfL54coA5NxaLyEqjeHfwje",
  "key11": "CpVPjHhogMXAWzvNV5KwSPjnvPCRP6R7eFFbF14nGY9utcQEgtKJyCwpRk2b7VZh1ZL8vdtJyi4dNtmhHr6TXEC",
  "key12": "4ZqHFDSP6Dgt4vYZdw7UvMuseenj2dDoMrUkUtV8aiP6Ry4xYpDhAop6rk7BDLYeLtjLmpFZogDrMfMsfefcTR3S",
  "key13": "kvrPDRrdcCSZKP6D4GkgZ4jkos8qSsuVB9Y3BhaDWbNuh2KoCQTnznMpQCLqfWYgyz6qQ63po2SynxiD9LMh15G",
  "key14": "4QAvLsMGXyAviXMpRmSHhwZ2vzEE3W1G4m3ZW6aAgxrAdB1rC7ZBe5PwJuQ8cs93UrJ394UyrY62zntncyqkE7zR",
  "key15": "26hexts43MA5Kngarc1kRvpNNuW48332oorFHqqvcdSpTKDKfeeW4QMntcCXVSwAQDGRy9KUDrctF2UtxgNC9a8H",
  "key16": "63Nhrz1dw1i4i9jesgcZbxsDJRHL8CqwDgT3vUw2Vu2w3o4nDGBrSgMzbEJTvfZH87kUgihDw3H9v6vND6XeJCvB",
  "key17": "331pRsrHprubMDWpDsAJEaK4emQwcuDiiSmSD6AnKpy8JTYhrRGZAyieEnutQ5xJn4imDxFT1Udm5GGEG4PRX88k",
  "key18": "3hvCqc8Jz5MXCL4rwwDMmh4Mqp2auyrFifEKzwNhgo7jJu5CbByB1adfd3wX4WzP2daVdhZLC8aeMEMW3AmV3cpc",
  "key19": "3znsL3uMZDgG6bCYJ9YFUgQbKpBeXFAiUjkDgJSaibVRs6mGEueLrGMozLbdmQedMbwtgtsCa4b6VXAVifaz8jsH",
  "key20": "3urTyssGFSR3WKKa8qverzYbCiTVB67AzJ4dy8pnWBMK68AfNPRumHKwrGC296XHSo74zq2zqhCstZRR4sCVbUSS",
  "key21": "6NynyJuRVJnftiUJ5UyQYT4SoM8pDtReZzdbUvhXRjfYhbN5HSQ6DbH92Myd4MrdQ3Vw88qRLeAjeHWr6X5KGMG",
  "key22": "4wVkPQwXXe7xjSyz74cxh6QWEutzkiJ2nAXaayP3CSourjXr12oETar4giFZF2pBpPKnVftFYp1DgcVM4MrtFX8V",
  "key23": "XSVrYXB1qBvUhrL24N3zuZd3bTvSjVfSGfyGXTxrMj7DVz48vBYqvihMxR7vicgNrQ1umeKJsW4MzgoHfNyrLq6",
  "key24": "42ZHVYKAPxLu8hwzBrKMA8TTkX2sZMgc1Qg1Sawtpz3vaTHeT9FL6rfJ4rgXiusJG9rEMjaPCje6RWnphonAbAZS",
  "key25": "v8MdjCbdMKjy56vAr7SfKMLdRuKLJtocgHQYue1qivoUh7mUJ3MuHqSP6MGBFSEe6w37CAC54aCHWgRrwvwUHK8",
  "key26": "2wsgoG21H1zqRLAeSYvjHHdFz2oSjBuoyDSbgrivRiP4imYdmVQRLUdyJJq2SXzdDZmjPPgNAJ7EFh874HPBsCFD",
  "key27": "3V5Mzf1XUQhm8sAJcYjuo1UwebiS4HybLs5KwXdFSHN7bsnuhuTuNTmNWXBLXWZACZC8DLhBKqQN4c8qkszqqXAv",
  "key28": "5Vmy3ihbpF6RFwXWTKdjncQNsyvKus4LYiBKCw8u6gEQE5EmQExhubMNrzviqkbmgguAZZzX9PHMXtyPXk3i9oLr",
  "key29": "ETKHoYydtBzLp2jvqyrT3sRv1LPHjKo4C6HyCBKSmTZEmjzT1DkMKT2iVqGC5fgKfBJE4h8ACwCWRMWUvRNecaZ",
  "key30": "3AhQhTgqPESzmZvuRZa4PcGZTm826LasqteBmCgqrz6fdvFkpfgzQ76mq22E54XnZtS2yCcoQHpKh3J2HGUvrS6z",
  "key31": "247WMvqy9sFRmTKKzhuFctzoJ8ZzrYmQhTjHg9GRBzLkkVWrYUPC7DYEmb3TMJsGtDCaUD7dsNyZBBLvENoifUyb",
  "key32": "64mKaodeaB4PRqrLNjq3feb6fRNwADg4BypkF7Bp1WT2xDqtVZjLgeqyYkuBDcE525SUxN1SS9uFdTgA1yWqEM99",
  "key33": "TWHSAoGvEacx7XZA4hcwfT85GochWeSYChaLhMXk9REsCxj9P7AZFFgJxpSpPEeAxygVgEd9vfZbtqLYTs1izrg",
  "key34": "3pktkJbarK7rTYE4gB4timCa3sC6DCSUd6qMiReFHhqPjBxv3jyjSJSzgFEiHcmSGHsmiffR4AVV7mvmqu6AYSvA",
  "key35": "4wUqjtkpSoWxAkLQ1rWAYdLh7PEhgeESzpkQaCdoHPNVwxBs7YYyCihqKDYSiWAXTrMLSbSAXB3pv1YrUaY3jeE",
  "key36": "5jC1vob5yfxWykrTYprWSg7zUw69duchR68TGY473YhAW4mraD3DXBrCc4ujKPNK6BBQaxUwn5mUujKvZutmQe5d",
  "key37": "5bWFBtavDYFDLpd1mCjXQ796BPCWXMmXkGmEEvJyntBWNrpfDp2LgtsRBf6wwBbYc5GfNUP5LURsZsrQjy5Wtk9u",
  "key38": "37BQASUZTsaVbc6NJ7Q38JtXBf8wdUVeaF8yWnMiGFnfSDSxTf2SHmkGN8j6bkEcUnaFdExRyXGVsMQYrpSSFChq",
  "key39": "47faWpfmgg2uc2Ke29MZDhrUGZBjtW5TqCzxhMAH21Hu3qey6gFhnftzbFM1kZJdHzpLvRxCq9bc2YgwED6VNYwV",
  "key40": "66k1vV2q2FJsinrAKeyTGbhLf7z5B5nkQLjzfpV6m6cbeaTPGr26gzK3PfeMdc4rAsLdvXKCHXB8X9NZnMCY1zt2"
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
