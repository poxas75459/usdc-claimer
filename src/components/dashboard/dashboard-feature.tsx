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
    "46D4WMPiQin4kFKzLaKATV5euhgxVafaaVgY9u6NKHj7e1htSvcgTpoPdFNWU2iaD5fmQi4uAFeHYJHUsWpPHF72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvskZWgxcZyyHmPpGVrG3wAezyidSprG12VsaDszs25i7TMhZLE1uLG5rET4EJLZXakURUr1JPJjw6brQYMANiz",
  "key1": "4LwZXJQRLJBKeJ2E8cKnto6FDMXQ9b4QkvBY7rbGskuLBiNagybjCP2JABqnnHTZPteadCVG1eTJAcyoHxRPYR8y",
  "key2": "2VLjkzrH95tJdzz19VQrR4Uu8gE5P4d5oohVVtvJVHyoy2ZLCDFbTPopEJe2Zuhj4WWQMktKjFvRvVHp3izvEgMZ",
  "key3": "234QKjz2i55ia1q1jc55mNBeymVgNXPPiL5me6euwr37TXBKDpf2bKPEkbbJChfHr6iF3G3eMtXPTfKsM1XMvhyw",
  "key4": "E45GCtsyaWGV5Z9q4pwHeXGtqACzifzn9R6S8vrw9Pauu2cmng9dhubaMZgDNEHBZYxrEbqqyW6e8fU7zxusNYo",
  "key5": "5d8N1s5DU6U3ZeVvGWDRTWf1ggdjavmWMktxYSxxrQAWTrEuAj7GcEzDTFX2PqaZft8v9UVysCk9HeCXBz65gFtx",
  "key6": "4tv1fiRTSt85WuhVcCp8muhdvtfgBLJw34aEBax6sR3aCbpcKYPgrabmTvjd8C2MURyFDdAQ6C3ASSwtZiMZnbpH",
  "key7": "eguHEfUWshrVTRwk9s1CB9ZPCwQwPYtZ44gxmHz3xCW6Z4QhzgwN3TSiJL8hqvAwt7puk6AWre3QBtBfoSmrjNP",
  "key8": "2m2HenAWcEHxEWPn4n6zHmboPGFTPzQM8XLoRhUM4FP7QeZj1uBjaxvCrNLF9sDsueGfTb7J6nJ55bRFHHPhjveX",
  "key9": "2Wi6S7mg5ngRMHvSWgM81xMy2KR1bxwmJGCr66eoaQNHado1VH9f8aQRfFSyzsvacs164kcfJN5nyM5ertbgbbbU",
  "key10": "EBUVsfuVLuYXagEAAnJXoxhFpnVXiXseVQSvdR3xqFzjtLyG656JtZ31Kaxm8BfyamjNAutjLZYNjDtMRF47pMu",
  "key11": "4dU6RUFhuzTvbDnfrMaW8zReDLDWc11hCHXwFMeaCVY4JAUw6RZ5RCWENnpUhfxz64Vn4sztZeydLGg8rGJCmYmV",
  "key12": "sad6B6JmWQkDSrtgFZ4rPS9wQCV5cvTLLC61rx5dvPcAYu6gkcd2mabMP5iv4DoAKVAsMUiTM89QkgTbvBhPFXJ",
  "key13": "3ufhfEBsjXe3MFibsfTYu7fzz5FeanRHWi6tLQhQBYdnPd6hMoztQ5DLS7xiNYCSrdRTPctW43FrPrRPUgGetGMT",
  "key14": "2DL4saZQch9bgmFZYjwM9Pvt8dhwhhCoYiFbWJd3zPLyhaQFLePy1Bdp3dKnvwx6H8iXaPHxTaou9EzyPs5wFmGs",
  "key15": "2GZxWUbFjX7Fd5WLsZqWpnjL7r9JstuJYXadjyuvvmrzrZofcYdu1FP5kUZ1zXvwsQkd5iaicE44cBvtCTCXfphx",
  "key16": "RGZFYsrV6AVizqzdkDzxDqNtAHPT6T4kfgJD9YUzeaBc3Zj56SzPuTtzubrQy4WRQFyG3dnAh3e8YgZoabgtep2",
  "key17": "4fmsToHtLuRAiF7pYVoZohkgyo9XqPRsaSW9oETnf2L84KG59SkVfyjCgxEANStShKQbGGMQ2oNKVYduD6okqdx7",
  "key18": "3K7JreaAv3j3qEQZULWPWT41jtPs51twu1JqtkVzx3s4jSeAmSTP4UympBbW4KfDB8obsafdxWxRUdZT7p6WDZnd",
  "key19": "3FpJf5tF4oVjPP24rdJL8cu2NAvhW8STSG81Y29V8PiRWVDSi1jJqpUFpNhkQtXBZjxJGuiJWn9og9jZs2YzyrBd",
  "key20": "SnaMTwA15K464y9KjzgE4DQo4zHW5NdhYEQ1oZTbKfARZhxQmL7BZtvR5ZEiXdeqDPvnYGc2HHuZRgLHhLKVN6G",
  "key21": "ypxi5uEiPXhfdh7DJAUUWpCv2ng1DUCPEJU2s3aJY75iMgU2o7iYCtMEx762PCamofwXCnaFu7ac7bRNNYrbPhS",
  "key22": "2kmicr4XyUzKiF6faTutJ6RoN1Y4ETs39aeVsFXw9Qay4s7hXxo7m5LwhVCF274ta6YBUq4XN9KBN1xMTqs2j1Wz",
  "key23": "2h7H1Njn7vH5YT9kBzoteWUGwtR7VKQhESjZaA28G9hUm9G6xrmnFvJrCYcC9PKr4MMnkAfsbXK1Qyhneyk6DgTv",
  "key24": "25iZFvtSrC4Zh1pyNr7tFFUeasiWQhsoMuJmHxLWjiL3nsyF33tUvNbSNhN96KYVJA9RWb4RgHwWoZd4VHDk4ET8",
  "key25": "4DzrLx4uWg3rw42QdBnyM9H7xNiiUKE1iUtFERAUqTxiWG1WUvAUmmSYedtSVXouypxVYgkJrJgEu7VbjmAsyggn",
  "key26": "39yGpgzHSNsHQmh7isdedbLd7PC3EdtWikx7Y3S5bQmoPFAJ8ws1yKh1HVyCyWW8fd5ifgUF46we1GMNKAiPa8Rv",
  "key27": "WSCn6DTpStZc9UGASBACRwjP4j1XwgFNNoCSfXZK4Zpsb1qoNQuEW4r9AaqE8zBDS9xWrKQd642JGkm8nz7TEHY",
  "key28": "56VqddwfDyyzgHCdsuXviRTtsxbKiXiaGWdJeHVFuMAsxb3ojMV5Q14Jekw5gkL51Ewuu6GeBnGXWa2AhXmp5ikZ",
  "key29": "ngw48b3xLME9hCFN1ewP6gfs9WUDpWTS7Vs9Jj7v9WCemHkN9ZNqhM2CWWPiKUx9qtpuiRbcDM4MexLjWkraMUg",
  "key30": "31myJJ8DMVdbHbEUwKkWRjDAscuebRbA1bjsmtQGFZA9MoNkDX3ahUTpGRU5kM3C9HuP6nEZN7jQDMim1MZDLbMP",
  "key31": "4T3Zis59rUueEJDNCpqw4r1dADamresW23UimsyowG64QaUDHvsxqUTBswaVASLHUi7ovy6gVawLbcH7D3uBe4uX",
  "key32": "5vhRaBcu7M1PWkuigVfv8Yg3g8kTEAdpweWi6aLf17PN733eN8qUxDfcwmZzTVEJDSEAdBSthGK2bHWFjxn2qDWG",
  "key33": "2FvgSUGRtsLPyUeYZhJtWD6cYgx7DygbarZrMKUKcDqF4184P2hQ2VBxsCouE8GmRsVW24hiN9PbVWG56DJjhBaV",
  "key34": "5wZRX6oL33pqE2ENkoLQJDZvY2UP8rRzRZPS3NJ1QZqpneVjUevnhAA6oTpWboSm45Pv2E6qfZ7Dexmmuh4S1A9R",
  "key35": "2u6kW4RugQQtocDeyVUKgrEC4k5jA1axXoaFSuzt3fMAw7Yu2SbEofxsBW9CfKuNuJyRqYh57qArhuJPPFPsB3Cf",
  "key36": "4cANHcm5NAtdJGJPvMdhgi5gVhejaxgrEZDUrJ2FBC6iaRS7Y8ZHHeSFdoddbY9ZzPNspZYTMxggY6iHKFWvkz4L",
  "key37": "4ZUZoAV7aY4Kz6msSWW7yKXG7APjMnntEhKaju8eYNJib1GuCvyVtD8YCxdhZxnnmAqqC476SHMZV3WYALwf4g7J",
  "key38": "3s4AL3UKfPXbFu9JkqGwEcMkQ3DLSHFJJr6ran2Uoqsn61RwTvLmPMQdq91yxGVTAEJaZH5uXb7vews1XaaUnGr2"
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
