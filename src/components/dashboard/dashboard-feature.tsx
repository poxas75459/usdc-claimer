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
    "4vdmoHeio517Jz4bhRkcf3b71Nt2CqeG5PebZtTFaZ8B2tPFNYJD8wdW1rFLyBBzQXLbAy4EXEmLBv42SZu9McKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRMpDZ6Yv1MVDM98fYcFLonX7XJJh7mi8VdNzVsGq5gGGjH4dqUujd5tGYpRFgCET3FM25AgSq3n4DynqJQ7muS",
  "key1": "4Zm5JZDPWCXtuVfi51mGDwArdSzYQ12Wznw3S5bRANvvhuWipop5PbApRtsuEGW3Wgy1bvbxhQRUwRBvx9t99T2B",
  "key2": "3UyaHU4MLFxtNjx2AmEQfNCfJ7bft2fcqe9Q93eJCryov2JcRR3YPKXs9TNLCkSnbEUuiroF4XXcJDm9ZUu68NcJ",
  "key3": "5YqTvZWotU78K7kWM459FZbkToCUyquPoDjrh39E5ixRYm16fwKrfeFAfLLVR3f3MT3N33CubefeqSViWdhqeFNi",
  "key4": "2Xc1Y61dQzKC9Tg4pNA1esqfU93j2aEbZFejkWmag7zHzecq575dHzJwKs4MAuGmsYWCwhavxoRx8CfnPJE3wQom",
  "key5": "5afqJXwnSAPppQ4vCpEHRFtCS9YERrroU3qf48xT4SG7dzye5MJsbwnVbpVRxYwZ7WSViMFYLrLUAVyT2t8BdUKP",
  "key6": "LyjYw9eUUEpzrNaMnr2RHLnErsgwXbaURGEujrEfk7FKHeKbL31tetJVtGUftAUzcvcsUwLoHBCMFtVqUdE9DEB",
  "key7": "t6ikzBZBQEpNXAQhH5ijPuB97H3SD6ETTwYqhRcTZr1reTP1VTKgvgadbqKtW6LAa4LjZymeMKbCW4QpQUxqApQ",
  "key8": "563CwAgugha17T5TYBeobA6f1H1K2YLm38tvedNWo6dpQsSvsh6vkjt6wm1f9zuDn92NjYcHYoa94GDKU9XCtm9f",
  "key9": "4ufQb9Pk8jYBUhHb95VSTde3W1XJeGkb6dpje3W5oU16fj9KUY5tvYcy2P7vAuFCS2XJhxAu5uUQQZxSkZjKzDj3",
  "key10": "3M6xuY7R5prrxS99wHyWpW6qqQxvfVPj83sj1ek5UVxu9UusnzSetVq6sCi84YYs4qLijVgqiyTZf6invbZ4wwuJ",
  "key11": "3e3e4gJjLMa5pg2q8LwsFk9oUeYDw7Vk2FGwudyTVc9rPK7q7GM1rT8cbh9hmzESMvey2gZQNJzbyEH8frA1FuLo",
  "key12": "4SLq2Nm4YESWVRUyzzguvszyf1LR5AnEWdwJdC5qcjckFpKpCtCvzE416BB3oPuJpJPWUhdVV5XVkrXmAAUpbyfC",
  "key13": "3FysVw1PsSpT7mwhfmZt8Axbani1FuLFXRx7xNUy2p7VqWx2HVWgfinrriPv5MGuCfRWUUMu3mNHk2uAkVfSh6kJ",
  "key14": "4DuwtciRmKAtNY2g6DQRsE53vrGKVfKdKMcYbkVMD4EeMMVvwYpwU1YDZuqFmaJXZXNohWsvj5u8B9hQjLSgfKv3",
  "key15": "4WPdTqaisC53ZzuWCPDLgmdewzEUkxYKzB14JFvs3iNuHSBZaBJWofExqUNKqGwPwCyN6D1bBbF4e9m1UrWs3pkq",
  "key16": "vuoVhsqLrw7KTd5LoBhdMAa2TC1TDEkFM8rvFHCpJgVBfwYNJghjYX8MHgaGbQJKaPyhCspwU8BsP3VcqJpz3fd",
  "key17": "2ZyKt52gkQuXR9G9SKRPjGrm899pu811SyrpWLtEH9BjruymN1gUh16gYhKLcRaHf43SQkJ6CDPNRTgj6SF9tG7D",
  "key18": "2TQCF8MrUSrcezAMgWUZcKp5X78HH3tU2GfxtahiQrQYu98wpjgExXMnwCfM4pcqx6De5DmWfjDJQgy4iqvhN8HV",
  "key19": "62FAYgy1bPPDKy7jUVYckWf6iM9wuvTqoNS1jsESp1WHcAuZYzaJSvwsFNuPpo8LicLADYHbwKj9Yog234PzbnrY",
  "key20": "KFpebPCUrrTChifBryBYEaqaV1VsbF9jNQEBKHkgv6tXrPcdzYWsfpcRgSH6AGMVmWo6A27vRmGoGsHDo45BxXi",
  "key21": "tVn9a9erSXjK5Vh2re7qVd8FXVQSjgzD2pdjhhwDAZFgX155AoGieWN8VJ64VKDfy2mQA5jBWPnSZSvj4nYN4pW",
  "key22": "31AbNsw1hrHww1Rmva54nkFZRWr4cTXR7Zm5fmxpvPzvqXsVuAmwLwQE6jne3PTA75iybKXZcWGmFhmwNrDP7Ewk",
  "key23": "4Po1K5G2h8T7YffKqPeLDGR66SCKxqEN9bkmkGuPGt5f2v1oZUDx2aPzm8owcWACdV4qTL5TE3DwfNC4nJ7eNrEX",
  "key24": "4gHG3QCoy69Lcs9dsDdxZ9wY3vMZtAr4qYnu6i1TA7fsQQ6yRH9XRPooC1P1HtcfbwU15SzLoGvbTt5c2kN11oWu",
  "key25": "3eC47RGQsTn8YsBUDKLZf5Ck6jJNiEATf2JrdSgDezwY2zn4Dhzn26mnrKYRd8gVwie8GmZGvYZ8Cg8K1iASChMW",
  "key26": "2ESworyncAu5JnA6ZhVcp6sxEPuwftbjTysvQ2jCWCNeadWtn1SanVEDV5qXLwnRGZS4tekobz3mfsPQFaDgyVq4",
  "key27": "3JVz2kv1jDqhNpvZwwPbwAuaT5oF7zSmRe1MY3PRV18bFC5e1Pg9x4xZ4cVBfTMfvgNsYuoheyY3dZSvf8PmnEnA",
  "key28": "2ibB5Zf9TsZ8AjfeitDATS6ShchipWgqeRXRTttRT5epkegCT5Go9jYL44PXnMeb1DoBz8w1KWpMthDe8hzeT1P4",
  "key29": "5hyvnC1bHHNWSWrMcmLQAsdUoiAqxG9xuPqLrTw44Ssy23VzW9m4mzMHaKp3oCcdTosATVJgHL8mnJoGKbFCDhG2",
  "key30": "4p7fmBs1pYfgB5W6ru11qBYfn8prxQ2Uk6nxn8RuYSxRmVqn2VLW5ZD1nTC6c5fGQ5CMGsH5jxjP1eu92ywXwjwP",
  "key31": "5VehAEoTueLEv7vmwszJBHzf9ZaX6Aie4YuoSXtwibtRpEynUzU1F9iYskocBvQotvzPuy2UZzS4uwerQA6WapoM",
  "key32": "2dBL3fc5PAup1rk6PEzhsMtLqQBrzftg5yP9HMhRgXbDPwA6Xrs5eQjFiAPm7GGXB95VUTeSpaTgZweiKD6pej62",
  "key33": "52hUip3wyNp7ruiPpz4xUWSB849Mg4u6f83HdHMktWztJqCtzkKw63xUmBWAdRG2euXdN5DFarTb8dmZMZEiuxZZ",
  "key34": "2hEW1TYQxouBEqGzuZZSSNVqHBzeiZFpo4WZ2WkGVbbr843NHHNvLketrUpspme1Ekp3wxQkX3ZeoBut6YwE4iDK",
  "key35": "5DwypWWQ3rrkST2EpPZn9Mq8zLeLAH55RsJiumvUo283EF1SLwsrmA4VgVoMJrRNnp9gDG9R9srKBFyRw4XQNRcF",
  "key36": "2jCSr5AG1p4D1vKU7tPHGJzA9WkFk3XSPVT4y7JwFKxHcu3CRz5gWjraChsSLG8yyzWSD78sqktt1JQc5eTfsN8Y",
  "key37": "2Wj5KH45KcYydvg8ukDeUfxVjrPFrEehNJiuSTKMVE5jgLZX7WA3EhqBLVZDVMy1S1mPWGWbquwvZ1EBAouMvX1b",
  "key38": "2HitgpbabS6eczimpAx7G8aRZyXNHUEsQucPPPi5G8CymAx2gJ39mYLuzWt1uky5NbZEUvLZaNuAMiBngEBzSPfm",
  "key39": "2nd8rQh5HUqddVumJ24fq861kwkv3dhpfHS7bQwvefcEsG5C9A1yQZcKCiQVkffzwnk3BqiVTEra4X73g8pCifmF",
  "key40": "5dkH37nnDCqbrLn26EJY3njpdUeEkuJ24B4bULL6v7YuK9rgM6sUtFVs3ZSQDiXULUzqM2izz1x4qgXvqZX3qKJy",
  "key41": "2fHhMzJj2fXsWGxAcHr8wCZ1ab7CkbmciRYAkYbNocFMT1sSzyyaXmiMCXmh9bjF6nNhQNDKZ9c2AkKb7fWaxt3S",
  "key42": "4UNa76B682ipibKubwBtLVPMzzgkxKanxKfnf5Rxy1ML6MANpkf3nt1ZANVQ64iFfG2UgLpkTV1JRQRPf64j2zr9",
  "key43": "2FsLh6GYfG9chSJPgeTpKN3guh47MW3exzUkKGUKpJrFsAKHcdc735262CYHVrf4WKkYQvojzzyLoxk7K1Q6wofC",
  "key44": "4so7t7MSn37VxyMaGBsW8QpUQW49VyZJnNsc17AoTou5CEQkm4Hgf1zT7jmcBatfbaiZsnKLPS3iPyJqd5Ynf59S"
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
