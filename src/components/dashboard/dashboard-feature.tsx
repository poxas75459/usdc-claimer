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
    "Aevpy7xrsuApvY7hKDZbrELVxtCKtJH45LHgY4t72oqrNb8hutFwEFtXhUhvb7TmuwFUCeYL1QBS7DEzj2xVuMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hngYpZJrkFvZx9XKeGH8ZrdBGzRDvHEWiDweYfmA7w6BDQeGoS4Esqf4fTfkzuj8ahSNnR6EnidZbV3Wuxg7rcA",
  "key1": "4gZVR3AQPnbGReUC5WfRMjJN6SCrfSNdfKK1q2kgqndb3scR6knHevRUynNnhuDu62XAgnBz3x54CYfChZBZyn8Z",
  "key2": "4EkzrZF9LGgSq7RnW6VkGoFVXr6dUgNvXmfHv2GcqVS6RGUjHR6Zw3v7QV4247qCBEF2FVqqAkdBoGgtKtQuYfhp",
  "key3": "2qxmK12F1YBVP9uGHyqmw1QAU2FZe6VC4ynYDvqphutv5qykbiDvQTiWkCu31LopY4jNJ1HkZhywfrovUt9Q3QSZ",
  "key4": "5DLFGCM8em5TVn2LvLKJYoDxygsgBetLKJL3j3PHtfRV6TAFdrxERjoiRtDS7nt1PMvwbdGfKNiY9XZiSRZY7dmX",
  "key5": "2LnEez6XhJwHnP6w5uyJW5FFpZzk2hUxbw1f3n28VRW37XUAptZ2paYQK8kTVQsFoEqtYS5qTashVDdsWv9bzztD",
  "key6": "5apt94Doaof4XZzzvjAhPFoQ4PqaNqUTgvtaRrYgP5Jnr8MdXHLhTvxgpJrDbv5K3RaGLsZQ6znCsYt9hBtkXMVD",
  "key7": "qk7BXe4WWn21w7VuyLd1TkpnLX4qW5SirfVdhWXnQZgaQpXdhi6Y2XbHFugGeiywtXjAf3MLtYYLdKtC9qUfFyu",
  "key8": "5B1oNFArG8545M1C7R1ZQ9ZtzFVRA7CcDFcEEPskzExDTcnovPmZMN1o55V6FpG5WiG74kBSec2e6dGa8uEbjF5i",
  "key9": "7dXctMSGcjNY5wemmGsaV9D38LMUrzsDP6rX8MHrobHhWDFANH5aLM1hd9tanDH5ikdf2QGVRamyYb636QsNj5v",
  "key10": "3siJ4GzJWRDS5h83UGpSReHYAUmMcz8RHsQRZnQSzqZBjbhYtMxewjCn5goHoxhSus94otmL7khE1zr7AXayqp7U",
  "key11": "2vP4n2wBmVFPtbjHjQsjAZfy7pbswiRanVeTh1C5P61wt176JJMRgcq3b6jHeAmX8TCbfM2Mu7Wg6twNPeGuUgmz",
  "key12": "5kJW29V8u2PB9Z171tE79ZLQXQ67i7aNd31QSKvVy6bCKFwph2NPwWsN9BAJBXdRT6chxcGVJufqiW5Zy5Y5PhAr",
  "key13": "2aRusyae5mwmFkAju1iy5J2ZcSEAukBuxpRRhasTmPFAsNwTD6rNRSdrCNQPxS6WzYNtaP8fqsvBszNNrMP5efwc",
  "key14": "57bJ9yUEZnkfabg9nzbH8JiTbvWrNCJfyzTFSg3Md18GkWzxMSfq8vcD67oq4dXoZvQhcS7iMgNxWrxFPT2Hfzuh",
  "key15": "5qymoTA5uP1DKM7FonukLwJFpxbWrR8k6UvEMNZHN6ureQNuzqDD59ivmnXYQ1T49KyNzfCb3P9mEw2i7fJrUupN",
  "key16": "4xEwXx8CPfFZSZ7rthN4ra4LFg4KqpVmTv9yQ4enC9NrA7tznFVMdm55xtU4xAvxXEwV46HoWMFm7LCTsBH3iJX7",
  "key17": "26UtxwXZUqfnLd6D4oSMP8Urmipjt7PwyP25U34bnro5VjLz4w3LQX1BKmCEDthy6emY8LXNDGAwqSh7woNBFVZ4",
  "key18": "vTAGQpGt2ZoGgMBPRr2MybkERkgtoVSbPjYxCKjqz9pfR5e7YLaXMAWAonZHLSN75Fy4sGmdN4VoZP7Urm4v9qx",
  "key19": "XP7kc5MnFKT8vrCqhj1o2fip3RZnRmFFYo1UUAnHFYFcbiG1Fu3yFgP28L69PtUb11ad7QwYq9MJcTnSXH7RXBm",
  "key20": "2vFfhvv4qCm9zKzQvAJKaYyAVdtXGa3xh81q4Nvpv6KYWW9HtERpyzAjVag9rKqce5yuurovHFH6GHbNA3x7nKS9",
  "key21": "3aaurLc2mjDhcmUxbSmKkEGi7KT21w5VAA5b8pF4UdDZ8Tr6e15TSFhMsYGGDyQnMj78G1TtjmdsYRXTkHcawfvD",
  "key22": "5sHe3wYqZHfM1XMizvxYYvzusZtMKmq9gsFo7DvoDJy7KbJdWb2VEMDiEzEtwhSy4HX9ft94FWEXH9YKk7mLezLK",
  "key23": "NKcLuSMkqBzup8e7zQJonRao7u8zSMPiWTiVuzsLxzgy2geby4EtrJca9hTrDeeAUT1hf67AgG7ZLW2R4fnYmFu",
  "key24": "5JFgaQdXoFzeX4RrYf2irda2tAEKUSVrnCw4d7U2aaySMwebsKegeDidehZe3sAzEJvfCHn2rapKfLnmGtCCsC4d",
  "key25": "5EhEREfsf6czcenPHyVRWxhQF3mkJL648Rbo6yMXPdDG6tVRw25yTDZufUp9CiztchCgDKZo1HSXqymYuz2v16CW",
  "key26": "5fWDHTTrZVYgerdfEFLHpG7upoBsuddMgdFe6Q4d2Sf2GmrngL6qffqJwnYmeygCMaLRjZea2DtHqoGgtssBT8je",
  "key27": "3Y5fD5mjf8dnufsNDRpifzNMsy8noUiiT8bEgUdKW28E9M2Sd1BD1f2xhi52MwzigLzC4CvXpP4i9P7iK93Zw8DC",
  "key28": "5dyGLAWPx3vUgkv6JWi7vooLuLcSE8tMv3PGgVoxCfhM3JxKsiSA48bEyNYyMgc1MXbfEiAZvScKktmCPND8VmKG",
  "key29": "tSM6NVfocSbJDv2zf85u4HKwVNgFkE4Si3sNAH7wFqSoUxdyzX82F1hAFnWtpFRmNuu5tqMb9rUtLYYbhn4NQJW",
  "key30": "qdLLMZWmKjV2wzG3CbJyX7GcU8Z2pUnvJeLn5V7pXMgf6xZDWAgXhebbGX7mMXuC4hpd3NfeN457oFexdUdvqE4",
  "key31": "D2mC9L5hTKErxaqS8Q7RV6BTJLkJHyrtsfNj8qHEMyibfYiLVhGTHLXr2P1YMjThwFFAJxXWjTFrSLA2rqfNMT7",
  "key32": "bdmW7pbimW77aqMV4kzeBDYFVLXHZpjwbksuLyDPXqBCUzeiWCdD8ba7dBS9xDXamfGgR1wTwrx36zdjctUsn27",
  "key33": "4sXKvbGBhy4357jXoSJEfrqjNRH8pdehiD2JYRafA4kW4qUp4TkJcKXBXDVYnGyiRedaXoxoBSJdysnLWNYBz545",
  "key34": "3rh7KZ4U9c31GwBPg7eEk5wGga1FKi5nPFLKngHy11PGVxxBdpvmDUj7L3wnEBFy3sVf9UWAUAh5XmLiBgJoB4U3",
  "key35": "33gHTa2awHqieeygPa8EQdme3TEeV7LJGdWoRG8vE1YuiKo441X1FjvFLvXe4yWWTLTUnTbNamTVmQ8jKU4nkfpT",
  "key36": "2gEQNYJbqrSMNMKJtLABFnJ6K79t1i7R78xSnBZ2tLbxHvgaj3ew1mqUfsLbjceZ8Mkn5vXzDSawYRhfoQxcXDHo",
  "key37": "4JaDYD2RMFBngNL68tmDHdMN4NpTaqyp9nowHPeUZXrC3PtYrxT8tCHBtM5gsVeuiypJt4MTWvynQ2fY1A3rQmL6",
  "key38": "5fhFPU4XdGfMXor78TGhNoH78Aa7Azw15sQbgzRU5oz3z8REPXgiKoVpeEj5jkNVWvZVr98E54fvs9KFdVWpTEMR",
  "key39": "i7qkvKdfFxnzEqJS58Vx25xWB6ERpJe6dKeXzWH1cCzmcUocajKJVn9gkGBBJU9Z39FeezsykbHnjYt1G5sTPPZ",
  "key40": "kSAi1y6uHzrDyUMvqENxm2hKhud33e1DU82hLP9U6JtZykBaJ1UyeJVqH7QT5v9p8X4g9XytBtZ28KUnPE269n1",
  "key41": "3PxiBK5De39RxB5isCerXf8j7uPBaX5YBgLjHRq7YPysd6ThMUoaTfGSWpm4T6ZvS2CuUDUNywjUjvMLBL39CPyc",
  "key42": "2aabapapasqcvFUFo32HoMdNe9wvn8cXCzyLop6VjYjJhwK45hnT9a1RbmXkQYXmDW9rt58J88bmWNrbtuwq51B3",
  "key43": "3ymRjeCwHMja5e2o8MfYMiKSsn37XaiHkwvu3GeafnoZc1Arob7VMmAn4wURpf6N8E4J3hwbz8NgszQ84vbQVBLM",
  "key44": "3nbzym8Z7FEh8JHvj6xCNNPfEnZMc5bbUj7h77bnGTv5QLLGgTHzRq3waib9pjj99viXHHKVHzkHjwYr95jUPpcX",
  "key45": "4rFN31NPRAiodEpJyP8znFsRajAhjjZqLTLCjHPuuEQBGQiML1aaguhEB632YSQPZCaKDBX6XaSdmMnXxamNU1Yb",
  "key46": "4WbVDGPifTaBNTSvzo9hMHNuPijVSeRtipB3sTMHex1CDF9Ah4WXVsnkWWFXeB5vBa94i9RkU9kjmajwAthsAVBj",
  "key47": "2QnJfJoGoLNQoBPxzLgdtVqCGDjESrk5mVV3LKSFeCX1VR8odz3ExceGS2eQmcZjCPgrGpMF82EUT6kC2cmqWjFn",
  "key48": "3RpnMP1a1VTWRMphfibbvBpDp1GW8KWmueFw26DNg8ubWWaLU8eB86vpGcx4MKvk8C4GyhE6hr65a5Uuf65Xy6Pb"
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
