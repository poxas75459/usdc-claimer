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
    "5Gw147Wa21zmiemccaq6V7Pdm7Yc9v3aUzYTmBxdjxBNRh88PQ9FJUWvi4dCcH7mQn6miNUKyxDPXMbNKkN9s9Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zchRExn389k6odgKosXoCvy3e1Dknufd5Kv8RmvKL9pdBiiy9BsjEEQyqQMXv8sGj9FrcFBCcNLWVbszF8pS9no",
  "key1": "5wJ9qQnbWtU5ybrpFx3NyfEDix4KCBL81jPy28e5HU3GrKUD2oMA4w4V1eJbhRpL8WHEdtH5MExrKL2C5HKYdwLu",
  "key2": "4BMfKbvjZZ8bYb8StC6zwAQr6i5wgbL53Zp4LmGQJfSDDmDDJoJQbaMH6z7B1jqxZaCNTDdkP3BnCxt3CjR68oZB",
  "key3": "5vbW9uSXaEFWUCSJPFVBjKQeSNAjio2xV1yWfxNWAMJgatuBmqJvQvwNTYrrp3DHPRbPnRDvTZ8gimS5Nqae5ZCh",
  "key4": "5CdoAEGevMFpeAZDokeSHg2epvSaWPRjQDG44TTn4J9xcu6SUF8PsJyce4EWGdyrmmgh1Y99Az9r4V8x8afPKhuq",
  "key5": "gEa5Hvg4rQBTzFCgVuy9z2KYXoDRYfVWEYVVhsQKChBcyaWYfvv8aLef2FsyHWCR7srC9u6FggUb7aXjT823Q6n",
  "key6": "2fSUSQi8jGjUpxqAV9TwN4aLC8mepCRBUxbAhckZ35XPe1Fd1CNSEECnRLkDc4e4NcfGcd5LAZH8WnxD5Y9DJCHs",
  "key7": "55SJhK28z2cZVtGjzMHf9EB7JXhktxp1yDBUfF8JhmJLwg2akK7H8pdMdtkArMBbhJq6VCp5yuedRJRuxb9Z2pNt",
  "key8": "4e9ArqRnfR7yZcDpJAyuZxB1juNCWDZ8afyAPJoeutp6HvjMLn3QKqunLGDyPNPR5JuL1JqW2YgbKnLrKZf5gYii",
  "key9": "4bST8RwNHE7kCeCo88ZYWinyg7fWaWktivDB9J3nKt6JxqKVP1fCyspfFNfu1t44k25wLBnVAuHd83XZEWHpncUy",
  "key10": "4f4A5cXCmpd4fUeqVxytTerxkYjkcWeMamJ4rKNT5kadaEiE2QEVuSGmuyxJ7JMFv6peemZEtF8HoFhuScCEXs1L",
  "key11": "MJvRz1pcD9hJ1gE8oCvnkUZfvf5SeKbLcdeeGrRGKrz55pznvMjLoJM4HTi17jYZMJfquYG6U1mFSumPWn6wxBZ",
  "key12": "2j9mg7xe9QPAr4FW5yuhBLg6b7R7WhsUjFi9Ggak7yrpfirj6TXxderjjhaZXRyXrvsxFhxgUdLNHbDBaPCzhN4B",
  "key13": "3Mk5A9czxdqbot8GT7e837RC5FURQNa5F1AvE759aVo7KnKuBZHEzam3bc9vxcc7SYYdG3DSwmGLGUzvF7Xqudm5",
  "key14": "4hZ149kcyWyXMCUfEispAAZ953kwzZYqqmzsthfuwheezHcR8hZAuUxGFw8mUpKksn4464YsA5cB8Eqw53Wvz74b",
  "key15": "3MX5yPC8c93MdZdWz1pok43gX1tbbzk2YVgpN68TfzUFtz8w3ZL2pEryfBrsCs2rdjhk7xrS3Tg8WSDNBJ1aYCUC",
  "key16": "3zfj9oEDi9dM94M2WQv8mCeevqRgYiWGNXkYCopkcbxJ5zrcAMreFPLqa65WGN1N6DcVaDTye5rByLZzkmy3Nh2k",
  "key17": "3TgZRUNHJjMNVRq8bdvQzbxDe79fa9XhkvEJahxuZcX9JoBLapM7o6uRRDmaBuuPgEpsE41yavqkGpVedno49JuK",
  "key18": "zV1U9G8ZhDM7HXcpsaA3TQkTDvNWabsa9PoNAdq6wLhRYMT7ejciRUBBgdFL7KXvcB6EPk2fqqFJZQv2KtRf5KE",
  "key19": "3gsd6yU1Bwk78XQjHwJqKRcRo78kTRybEFbHSUMFtkJvtptUZ4TSh1kw5Qx46AGu4A5g124ocDWhA8HuxKPUxvNH",
  "key20": "YLGH8WhENP1ytHZxdPLXx6EJ2J3JiainXk5puudtJ6k82bGdQb6e8oynPjW9SbUgLA5MXioi2QZ1nszjj2MtBL5",
  "key21": "4yEfC7X7NK8zuQP95gC61bUEqWAgGM2CfduZJGMCXckkYiKNAbCBR1xnMdPP7yub88f8DmUHZYTuiwH6FnThKAnU",
  "key22": "29ci3gtuTFay7Vwdti2aoGcoTak2rzS95cc7d5PiwQjMHx5F2mRzrzTXfb6qRqqmVAxJisgKPjYLRcjQXvVvC91h",
  "key23": "5yZabMvYddHuHeKLnq72XA5mj9JPomNLzkFk7ZdkWABtp7UvVQjBgg5Ud2HYmEgBSdbd5TDJzBD1G7CWXJmJYXNq",
  "key24": "aqSDWRgsR8v1c5Ve9xpLLzKPNKCJiqWMhZyJapabaRuwQ7Uq4BZT4VJw2UpdfM1gAz4YAaoUmdHuRpV5e6qcaR8",
  "key25": "2nAhqzwT33zh4s84ba8iW738FPMmtPp6X4hX59BmzM1YFXJXwjFds9FfE1rRvjKDCtYjugFwGVdj1x7X2YoD5zxd",
  "key26": "3TFAg9BiSpZmpLvAE4Kse4QKrApKTMMsoJoGuP3qqGGR3HTX6Wuc36C7MXPbkNBC3xYgU71WxepcmNpNH2aYCypm",
  "key27": "4mct73vxhwAcBmi3mdUBXdshpiRcG1zWx1AdKyJDujsF4UkzY8r2WPPvcww8RPPxDMz6yodCEKfUtRmmCFsh11jw",
  "key28": "4xBeJRtAwkFA5b7vELrJZ8yUaHsY99ut6Karzdk75VjU6auR8RQwZmRxsxn72PDAJ2DbUbcvjpH9yARPMH3S6AmR",
  "key29": "2mNw4wrQ4BjVRgj8pLkMW5oRjQJZUYCa4c3xx9M9ko2jAzzbPWLHC2TXVLDov5xpnrds6KdodUHpSKnkyE58Syiv",
  "key30": "5N9pDjsdMyxSxMmQcFLWnSN6XEtUpZo1Q6ZC8q9TnfpZ1EuarVnNWvc72agpQyzzGfQDedhC5oPC3HxC7EMmgxxt",
  "key31": "32iNpWXX1XwmAVE5L7y39JDCp4GN7uY32ZxxRhSQ1tdpWzZybVX6fHacjzZcyx5QAb3bD6YdMGSSVqJZiZgTZPqS",
  "key32": "2qnhEhV4PfF2gwBMueZYNRYA7CgzY4naxhRe3g4z15FWE2ZWa4LkZqWdg6z4a2BUbEa6CbrmUbN45tFcjHkoK68S",
  "key33": "34cE7E4J1suBg3s4iLR6CMW7d3bTsUpFaKGLVAuerYaNmcebidmUHWrb4SoJg6jxHnBB2XkYi1nt5eroCb6ahscE",
  "key34": "3De7QUopVGZYt2vH7773xABgVKPBMw4nZ1ef1pfdrFcb2J8Wh2RgzoZTenjQV3tx5ryrqiVuTvoeAnCvhN28AJfQ",
  "key35": "4qmMfHGuKLx5i5c4ewJwqNDH8E6VTX3DkPNVoKnDVCXSdsqKXLcdpbb4D3FEzr5nx1aoHqtSX2h8RkgHXQi6Yhvj",
  "key36": "2ZpR3ZEDc1U8M1f9ospTe6Zt34nJ3ufHSAraXK8uF3PhaZGTkQH7M3KM8UUzRWS72b7oHxzzimAPx2CpKDpPqBUL",
  "key37": "2b6WmumWThpNmyJAAryTRaZo2iTCfHdbfQoxqTga1Ay9zrByicmtMQm2fCUHGWU35bx634sBJtLrW6ennPStNTEu",
  "key38": "47HtUftyNTMus46xyQhFpqR5vc8mhQNXywMbFAiiwHs7R5Gr5Mz79ALQnq6VLYhWvKRUXjyqkNUhVNRtFPnNxw2r",
  "key39": "3q4xNmdDT7NKgXTKnLd5tZ9kqwHFs9XELnjtYMf5unTSvM4Kn45GVXk3wtzsecspA566ZJBuaSAbKyDVFHD9XL6J",
  "key40": "5jwHEWik8eJvXrDihZ8cz2QSHBGeCJ31pXKCYm8hu5kV8YoU4LxcYSL5v8rmNPJVrAUdKbSNTfJB3Ji2KTaqwqwQ",
  "key41": "2eiDnNPJSgX8ic2z2bKc6LCDGxMk7NCpL5YooobphSRKVnd5aQtUvwVgXfJGMHYbQWNhE1Va5XmgbwgFzMX6NBhW",
  "key42": "4CeLxbZt5uhT9KruTFQyHDxqeqvAX46LuFe4RLASoiSgNSTSr2WaFSyzn4AvYZvEUP51XVHnt7UTtJGj6jgLktmp"
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
