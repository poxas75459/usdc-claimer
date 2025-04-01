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
    "3EHqzEigguiGw7rDgBdaDBfStdyTJfmzURtVnxxehWuWJjKBgRKqVn6Ag7YhcgSYahKJAQvu5VM8QtqAbo6mn2AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQrY2LExAzcteruvuoBxACwJZs57dQ4fVHpByPdLhfwvRic5GGiMeAnjgz5jqCYFGZ6d2PYRdgLp9E1kq3euKud",
  "key1": "54DRGTaU8nk59CniVeFvjY66mbjGrr6Du6aRKz95iPrMtnhkPUyJNGygduhreeKwMhgFWQQ9cNL98Chg9ou6Af8o",
  "key2": "47pfKg9xK838P6v6k5tJm6CtqRrt2BwfGNxkKJrBQdbt9CHoR5sSwrA9sCimZHRpw4E37iTSpUg1d3DtY9Q12Qfx",
  "key3": "2e555QNFYGoKJz4Kr7zmEWyfoUYEqVc8pEihHUyuu3Uv7CYCKqTx1WvyTYEhn7ytHgTGJ9AuwQT64ErgGVLYcoGT",
  "key4": "5ABRkv9AgnQKL8PHjgV4xnfMS2kVfKVqkDvULDQBXvJHxcMos4hbkjdb34tx4fv1dyeqoWrP3ahWV7FsehgfeeCV",
  "key5": "3xStsMNjDWxmVT25FJZHhBEtwF17XtB5mz4ygbwLHyGAVGnw8DmwuBH61vkwQN7C1ahBAjwrH9xyrcQ3YMsWBxcF",
  "key6": "3LfHWvuAkT4BDuvyENXbHaixbs1v31E3t4Cz2LJGfSVaQS2cHFZf6ZCMQLFrGBP2pAuumiT2XK6ptijZpoUxpeDs",
  "key7": "SBAfG2GQFtmUS7jRxd8RZiza15sQSoXcsGCCopWhVbWLgXTUhyhRa1WM4i4HmQP8tBoT3hhqLSorRwwnGxFkE7C",
  "key8": "4asTRimViPAJatqNGJd5rhm6bn7iYDMXhfZCqmrk9eFWGFK3A89uXB8t5xG6hqkQHM18gPiDVKHuVBbx1Yr4MKXv",
  "key9": "4xrAgL5jmiUQDNS11BJyjtyCGnuGn3GsPH8RAKyZwxuiB2ip8wHnxYRhDnEwDXLpnMSqki3fBRhoD4vUC6hT3pDB",
  "key10": "3PFSX3NfHUzSieoAB5WjK4KczwbbjB2TMBXGrfWTrh1ZrawGzHgDocDLVonqGii5N8BdMUP7M5ARtcWp2FiLeTHN",
  "key11": "56SscqHASYJABg9gjdJWs966DYLBnNE2yb3ncWbWippjnU7jLnSgsByqvK7H29yKDUsPbcLiBWLeEg2jwu7p15c1",
  "key12": "53ETFc1nQ77y8VtWrXnhHQCGwPrSZNWHermirfaBG48gmvGctN8KkgR6HWLaFpgDW2Qxro3aCctF2rPQ6VAUSx8L",
  "key13": "5ji6gjDqoT5HTqB7NJQgunTQPE4xRqAxN11xvn9qadybkpdFNsavehAMoPPhpJhNQUqrEAbYcNpYiSDWyJvprktJ",
  "key14": "5TgKJxiQMfaZgzWzsS8nafcRYdgVce7esLqiEzkEj2WCXgAt4CCnx2ArCSAHV4wPiQ3H2or4tfGB3sTe67EB1ECT",
  "key15": "2m1i72rHA4KG4y88Wggi8fUso1PUvqDkrtEUWgCDvAHH8qj2C65BsVdnoZrQypQek5ywoSkm3TobFU4Bm5SsSaEc",
  "key16": "3PzWq2vFuDewsfZLoFHazGmuAV4pR1Uz8Bnse5peywRKPXsrxoYyhyqs9iHRCq7b9F3YWZKXDzFVqyBK5czCLMwx",
  "key17": "45sNairdVqDFrc8z9txwyMEJeZcwDpcCVpjRPpiQUXGq6xLx5RVL5Ke96cQwZxqekDop8PhqQLFLTxmURBpxcdXh",
  "key18": "3btTjJsT3ak6DhQJrGcRHu1pqA8YVVGTFh8DiyiVvVGMAoEjvaNFAuAqWxy1dD1eYM4MRf57FLbXneArRAbs6jY3",
  "key19": "4PjsUBmKGriu3rzhZXHEZ9L3eVFiwXw9HCfhJMGTofQfJhSpD9VtPh9Fh27fvQYT1kAk8Unhk5P6Gx13i2Dkgq5C",
  "key20": "3Mst31p43PSAq9mkkwUjziuLnPcPjjGkZHYKKbjcJLUXxboViPncTVRVie2KaTR6tPD96XGdx9cH768tayvFwU5A",
  "key21": "4Jfbjwo4FeVWjzMJaJPmuS8Gxow7QwueAqY6gxQA2Ez21bANbVuxjYGbzdMB9ucB4v8iG7HZEMSZrgDjPqg6yEKK",
  "key22": "4Gc2SoKRqz9JJp7Cmx4z8BDS2PG7ap2LMpRQLD7nqijqjYa1d2zFwaWDRDLiGPVQyPsM8SMsXwfGCqd7kjBcZo1C",
  "key23": "61JdZVkYTcfvhPANbtLpVjw81tHPQenSQJDhdTsyJiuU1DxM3adGLL5nrHwEsmy5oxDfYf3Nr9dkM8RGL6tuuN5h",
  "key24": "3JB3bo48p8e113J6tUQviLbBke2kGXghfrj3zDPhTDC1JUx724y21WnKnQ9PuSxz8XVK9k7jUkyT6toNjXsNkBz2",
  "key25": "2gxMuJQ7uGDcrfX3s8xQTaW3WCTmmCgj56Pwt6RP6Mmz1akXFz5Y6YznEbuVDAASYbGfFvzbvLj6pspDturtMsi3",
  "key26": "4Xn2NbQ8is5QFXmTWmZSYaRJd8qrjkUrmHuhSZsCnWagAgm5Agzhsupw261JkTutUgHfYcTUTEFLQ6yX5yeFepkV",
  "key27": "44QT81voQaFm2gcBUQCKTE3EreZ7Ssf8BFdsfNjXWCR5cJkY3YpA82xdzAtgT5AnfsYoCqGn9CeFTXsSKWinDNTa",
  "key28": "3XMvUQ7AU51Rbsq2FyRMLfw9x77XzV5QoDh7GYQZUGNNV2fVPpwSARGRM789xH13WTktbyumCLWHMfUXRboi3DiY",
  "key29": "2yJLJqrWHiqfKqtfrQBsJfgoYbRgePEQujZFDPZ8u8CFYLXdy1ueBPKRDhbyFPzgbVHeW8LoSwXTfxtd4HzZsbZD",
  "key30": "2V1QzYvcogMcymTeSx1i7u1nNGyD79sKr9gyXJyG5qYFYTHVzCrnWuEVZ2rYfyib8QHBRLv6XW6UQ8XoaqRmxrdg",
  "key31": "5hEgsbpiLHE89BhpJ91VMC3QkPhNBXsuuNcqrhGA6BBt1VBkroQghqUhj9GubgrKVhTcG1eyenw5zQzfCZCxcWGo",
  "key32": "5cRdeJwqo15S6MXJhmMDMtfkoVVEgK2JCPxPpjePPJwwfKPTKn3saxtyfhyVrgeZB9HdCA8VD8iRQfJfhurhWvDS",
  "key33": "FDQRUS2dNTrizLfX3osy3xFBprCyaQo1RGU4wb3PGN5Zdk49TFTM5tvubeXedJsaJumscnAFxPxVEHh9MnrYXuK",
  "key34": "4YeT6XJ8ojBArxqGaHFfe2ht5dVpWQ1iieuBymcm4VGbtYPsnBN71YG1P8epbAQAgTp5oVo3Fbe7bqaWAM6kq1bb",
  "key35": "2fS8mXhzNMemoiQV4gZHSgUWPDXwUdwG4t3jujuEnJ1yA2HnW8UV7u2W58MqFouK4v2xJWoNxfrpJ3hiRVzEDBkZ",
  "key36": "4kt3i7tHKWSSC6ZQhxt7sfxZMzv9ppdMdta86TKhuCUGRuHXFHKV3hwPbBa2pNSqqBJJ3EParKJT1gT3xCyX4kB",
  "key37": "3hpMM2djkDW9VhC4DY3oPWrQyz1A6NeHy3Y4kdTHtGSpHpdeadcW2ESC3sAWEk3v1g6ByCWnk2vHqkp275NYoPMU",
  "key38": "4CJU46gs48QcmLk55PkKDaj2S9CWRPRmsb1nDLsbvspPPHTn72g81u6jtzNC83MjRGGjLZNPHA9DY6raRnExWv4r",
  "key39": "2kxmzSxL1u8DtV4WC2HBErA3B1AqUra66iSA7Q7fh3bJfJchdLmu8uzMdYmwrgYvMPSNtyG6sPEgi4XHZ1tckyBY",
  "key40": "4XLMkvfKFpyC8jemrpM18xgLCbPzMBwojzyso4ZFuZJyjiXCoj24wPM1uGxgpKQk5fdxfAnr3qXdCn6D9zs7Vjoz",
  "key41": "5gUGxRq7CMq6NUpKTk3Y6BFDsS6uLBtgUCyqKM7CzpNpvriMsApdDbgBPtotv2nJvxiSv2jf4pPFkq5eJU9L4FyQ",
  "key42": "5wPvzPqV5CGoKZDTp8B7UDPbSC1p3NBmPh1up6CZXPy7NnWzAJJ5DZ8XyBB1JSGNsFzCgR7QmCxJizoQELkYWz2F",
  "key43": "U9NcjWzVB3TPccMywJisjyDTrtgkVDY9rfXNoLsrVUn5NQNVW7nSRYALnNE6SHp4V7YgnAYGfU5gS3a7tsZDo6n",
  "key44": "29aG78MMTHUnDXPJf1nNZjp1oLJimzuJDpVRQQDjpQyU4MDLpF5uRDi5gqQdNAihBZVEeaoD6j4s1YkdYnbW6Fzo",
  "key45": "2yq2apsFiNfbzbFiHNq86MURESFd3tspaCcE2bBkqG2i3jeNjVmmCXtAFjBGKjgdhAvxXX5CZK3ToHqP8Lyxqi6t",
  "key46": "5HWC6VHyMocxeDMEzER94DtQLeGftA1s36ZiLREGCqziSMKnTNNLMBN4EVZB33Dw9sBxPWSEzER7HaFptFCAJFTi",
  "key47": "499SN75Vjpbmoyyyzi71h7wDYMqUGNsa9sfUbmwQZqK7PuMNZxKBAcfbbAQmGi7VPVDbNrjJXnRin8y56BKkyfoY",
  "key48": "4qVoqhZCwttK2oUx8NGUQ9WEJZSf4cwzKjFSFH4rzaJhRTwyigfPoZwF9tP2MSzcBFysoQ5QbG5K5Wz9Ca494JUE",
  "key49": "4PTBKbsBsvUyVVhMEP5LEt1jvDZ49KbkTrybE81isZ34HVmUDdNsoAhYd6KtKq7Lx8dR5vMpJnnbk7LEEST4i2Q6"
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
