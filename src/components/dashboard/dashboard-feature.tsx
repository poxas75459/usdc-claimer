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
    "5PSrXjnXhW4MrC8vA4priaP3u3u9ERZQBGUUw17rYEie42Qmn7m5PmVbEECCAmrDEXfBz47AxiZtiUm5Ukbz2q1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmVAYha8aigkzSLDnkqswsCsWGhhQUbVE8zHUpaceuUZkgweiZoViJVGo69rRvRqRZeLZs3QYAF6Xfjua4kZ9rR",
  "key1": "3wx1yB5Ab4SdyC7uVxN3bi1fRNqoNmD6czwJtuEJuGU29aHThUWgZ8itG1Kks2ixEsg8vGzcgBuzY1wB8JKXQ7vK",
  "key2": "647BgaQdXPuqvaTMj6KScGb6jPqLYTwcS7rXvZkaA319uTzhkngg6ELt5GV31fCrWzzwFny4vo5v8VdvoPdUS94B",
  "key3": "3S5yuuSYBQnM2ty6tApwH6WSjPyTARmqqYHtyaT5tfFtWAZkD6VaSZWm897voZU9DsNwH7xGHsE39tmS5NN7WeQo",
  "key4": "4kdDg3SDhhPAXX6PSahhojxGRsFvTZMNyK53NFMNrHopMKHwiEhnsfkE9YHkS5ShbRGR79BnB1dYWb855A9ToWzD",
  "key5": "eZ4KVhTZuyhLab473m3uXamYphPfTsYteBMLeCDr3UmtrfTSRb9Ay2xoArLpU66mqjQi6R72ttQTKjZXZjrPe4k",
  "key6": "3N1kmiNDFSVBUri4gzaVKTCzn1p9Ff3J1PF6ijAx7i3LAjqjCQ6fpPmKrBqCq8qRmgBGWh6kji9AZvLZtT6uFwnA",
  "key7": "5s6a3gM6Bss4WvFLYvbyV4ew68rb59mC612tL9rBZX3cuV67Lx2TRbzuf2gvymZ861RD1PdGsmd6rARUin2td3QY",
  "key8": "4wPYRbovYQsPCAbvuK53aJMJ2gM7Xm2SL7HbdFAeDpcGhmvboJCctQqoW2eAttk3rmMD1bzxCCmbbiVjtfARXHMH",
  "key9": "ueDdoAHH7N3CEacZhtLNn4V19g1Tn8wGmG445R9PvvjbQYpC2XVNsvDZywayfU5pHqS2kYWVeiApXwXWScNwmSv",
  "key10": "5SNvnUd4PgchN9BHW53TULGdJt5q9QpRwd8tfFXsqbmqPMBTFzydu18yHxoBibTkGEHJdEnLNgxgySS7HjJ3Qh9s",
  "key11": "3UB5vYWvGwPmCNh3Z8oSWQPo5Wo94xoVe9VVqYGu97VJ12e3th4ZdAeZJEHrSXwVitwg6iAnV4p6GqQ2hvJMNF7n",
  "key12": "2YiZNMh5f1ijU71qwq5p3bR6N9tWY2beVk2orzqwZAirMJimRfFRCvhYBbDPjsopPPKGQbkaVKjSNZc2NoKw3bVb",
  "key13": "3ow1EGWgMAjZwNFWRCPkbBuWnuaYnjCETEoiZ93CbCZwhsS5LEAcVwnaVVznMAMEnsvJvDUuDUq69Vmn3744JCWP",
  "key14": "52z2eTdG1Ehj95BzhpQc44ydvyHKyQq7u7mowMAtehFDASz2amciYBV9H3YyXJpKn9sWuXbqxuaaJWvSfmBkVMWW",
  "key15": "5xYSqjNi27rCPASNQRAZzTZ8omR9tWw2Sd4PEeEu1SJf9vuQsU1Fraq9FvNBrdNguGuWUCFQ4UsA5k12cGtdXxyH",
  "key16": "5opCfc7eHC4ZRnHf17eLne5EvnHfd7ZNvibyYTL9FkCF9FpZNfb5jrTraHy16HP4h9dAKgKjCSxUjkDHxfU1fhyK",
  "key17": "5qu9QaFo8Rwo9v1Nn5YAmVmFKvARM9vbHwuZhoKb1w2RnthXEeP2W8D8Jj8Uq4KoWiBjGjbqy4vNw9uCrgHr3SGx",
  "key18": "2NNLmZxGuShSYVwVPwcW4KG75sbDQQAw59QTfrc2M2DMDKGzgpagvgd1f4yYf5fd9wf5NfLdEPNTVsmVDae2MARL",
  "key19": "2e5xjoM8rmhNivprYEZePfVcDb98zcMRtYMQkSTEmBxss8bHX8CbcZzmrmyHFh18rCMPW1jFH8n8Lv58imXAzKiy",
  "key20": "2QTRepBKrfid2kyMu5ZErKmy4UkoHEf1ByLp5p8G1dDskYmpHQ3KPFKxSLePhKjk8rMnDA5nCa3DYCfuQ1Do7ECY",
  "key21": "5biQgwfhKyy3HRSoAEFycHpATb1teP8Fb8XFUwMFPZafeYSHQAoyic17ywzfzXshUt9TafNJi3Pdh2exXJqLT91V",
  "key22": "2E3aRJvMgMRkNkHendefR2oPaRkpc3x8y5VCeV6dj36SNmH6u2n9jTaUQjGxQeDw5SM6g4fvAtwDgwTEgbQNg6nv",
  "key23": "2WQCPGrjamcgjn2pieXotT2XL5JBCVTxP1LUYDZTivro32JNBQAV8JfmN32WjeHkoBPBCe41avGnAw27XwbFVpFK",
  "key24": "4RQwRXpY4o6ZqU5urZh4oekih1t8VpQT3zE6tgdWY1XaxonP1bTejCdQo1bwpbD7UHzAyrt7gtNwayJKsFqePQA7",
  "key25": "QEaVD3NAeMY3hSp6j5dQHRVu3N6Kedb2Wy8gsTnCG1teFBZ9dhdv2eUx549p7imFBpgsRRJW2a5aYnaPcm46sq4",
  "key26": "24TUvtH2Z54xxcZ2JRhd2PMzgqaUJ2i9w2eYs79KPuTB7xZfyT9PKAp23fmZdKgtuHHWZ5UXfiWKWnVFphFyLjLk",
  "key27": "3cQsYYAffBeaw3bBpxsiWyJ9zeSy8sSMnXYLV6hHgVQBBhyrG3JNaP3pAJKUaneotYXsUWg5Va6jrZVbWKCCr3MF",
  "key28": "3D5NETYH7MqY3nzaME611hFsVKp7u44ByWrbFkuVkAkjMJB7BMVzdw7BqwLxxvZRZopgvMT3cPoE4mJPLWSJazUx",
  "key29": "d4zDYutziBp96nArkePeAiqdStEX4otuGzGrA7i7itVqJX9E1sUUMTwsviTraPuMCVbSvnKMxsiLvm7XsUr1NiB",
  "key30": "2GeKKzfNPJpqXX9ak4eD4Bze4HKP9fCsBPkiQzci2fNpuxZWGzJY5NSjhQAdqYfeF14o3ZTetabAKNyvYA7wM5Qo",
  "key31": "4xMVwRNVqHSygp7zuxDweJykgcjYzqvkZzYdPBjJL288PzwUMxyxmnV4exKonDrvjL9r8Uzd3NWYA86PZ1yPcA6L",
  "key32": "qL9enqsxj49fsgDQ2PSr6eLy2XLite85UND9z1RANWf59dYPFoGTXcppeTyBpF18fxLFjQZ1DUmwVeva5LDYdJX",
  "key33": "2EaaUUhjJSbmTF3UkvzwyUC5NUD5ksxBg4RuHnSKhxgNbuWQpknWkjVD3PDJkW3xmEjFqBC8Q1rw6h3ji8bqgd74",
  "key34": "5RmCk2pV1joJfFR6x2xBSfZ2Ww1GG9n7p8DTER8fE7XhaJfaavsXFP4g4EhUzr6AvBKd6fL4cxKW1S1ep8p8k1yQ",
  "key35": "4KBpMJNZxwHAG4B9SxyJK7zFoBmZ6KbTV9imhaZD46zb1NwspM8CKSTP71pV9EZ9qaeprgC9t27XfDmfnYPTMHCk",
  "key36": "G8bBmEJQtM8FyUUXybaUiWYQcY3ecwRh7cyXF3LtMaJhruRjePU6hsyerdoHMhck1FJj7efFnQJsquKfocmzrnr",
  "key37": "5Mt8FMWwjDA6LKgA1DxLHcRARGwDbzxcRLhFzpDPfZQpZYA6KpVSXqEivSUAVNuVoBcxRQLeKgigkSYiKf2vCyvc",
  "key38": "2Euik5u42XyW25ensJtSGdppkFp76CiiziMFEHztMEyz4BZCW1qatUERXF1Ahm7PXKVpgkScgjuFh7aguwaTTaYw"
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
