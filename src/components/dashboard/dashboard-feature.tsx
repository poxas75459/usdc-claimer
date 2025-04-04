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
    "4b5pysXTzFnAorkddcvgEWXbysVXDvVNPiGzZ4vbRLSFvTxR1TN2pCpsCaYbVQgRGFcMFCeAVA86FYh97W51cAzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqANtxRJGMNgdYHzKUppSkS2AcQF8txBwepdxMixPGuFWcXQCRQTJmkiSJ84ymBTW8yxj1RqbHX536YhrJxyfT3",
  "key1": "3CYw9kExKABVGa2gUrTBDaQ4nLMuLZiwZQFLQKgCUQTkBfKHvNS6ySk9DzvBLKwxBbmgXCShE86kGS8Aj8uxfxBK",
  "key2": "4YXqhWFvRG2F2bwEeqZRpTe5SD6nDoZj1PYmNUg5L1x6FEJsXMkJaUJ4A6xYiwtpS6aVJk11n316EW5JnsCaZNy",
  "key3": "5tFyNk4VSnC516KNJuWcbGkAZcZHcHXkgw2kMKtkDpWDeyJvR1rMoCpyVJJWvprXuxoZ1csFyK2FnusM1yTfUt48",
  "key4": "4RgGWgVHjK389JSuWHDDCAWknsdd3cTanHxuZTfH8LH3CHx6NVHNkcZW5o3QdL149E1xTMRi5mmwoPECfwh2FePB",
  "key5": "2bszjhuYHfYGEciN4NpWWqS34VgcTBTveHB8Z2JVadCVJWVzH23PtDyQJYeHg37RYewahhEyf8HjFWUX5nVMAuN3",
  "key6": "3GnoueTeiVhPfrmxNhzDFmRwSfXv8o8xvDXU5iNUnhywXoiMAeebSNcDyFx3Uy3CAAiY97wCeW9mWUr3eqER8wMG",
  "key7": "5V63ws5YWqmwvTcCcGWmc2igENbCHk6BAwyREKeYYaWXRZgSgVNKPWJHkVf27VFTuYqHyvcpMRrUp7MwwDtbNfpq",
  "key8": "4NNLEDp97FukoRoFmJmZyoBLuYN1kEZ1x38NJ9mazzkeu5R471wCK49T55hxXE6vnAStocSdWwHoVhWMmnmiQsHf",
  "key9": "2iHhmwLeJekPFPVmWoUL6czPutYohmg8u9aK172SPNJGLAvnu6zwdoePEhxV4TJy6vJW32erP7DviiACnoAwKLgf",
  "key10": "4pYTWuE5TUGJJJWAGvtsusd7MAuYKpW3d1ECXjeCwFNqGAeUU5iND7WPWq7FFZyirGsKRQT7tTZt13y4HMbLmziV",
  "key11": "57Usqmkd2EgwR9xYqqk9gJbLCvY8WbZkM8KZyNsw33ffA1msv8rN3J3Z2Le44K3JKdtti1KrAE8c6Rz3Qv1ghTex",
  "key12": "2reYenriVqEy91puEr9h9CWoJejm4pC2YwHuW9TPzq54sPydK3sQ5YgUKARwbTVZ5wEdXXYd47fY5jyTFV1z8ej",
  "key13": "4LLNXwxXpaugn9ZUJQw9cq5mR7FX7LeCwP4nwFQghBofR3HgRLtaovB6tFGZHepkteEMznh9VUdNzvoLJPtkYr69",
  "key14": "Dka7HcrsuwKFKpBWRsq55BFPxvJgtHL5VTVhDr4ZtXaf2rDZJcLHZb9w2AnMZcvfN6ZxNLW8fKsGL896gjiPZ6h",
  "key15": "2f5geAp4EkusE8j7QfW6R64S2KriEDihMkd1gYCWZ59P2VbNVZZP68bunbNTwQ86tTzzLcGKS6J5dc9DfDxDZ12j",
  "key16": "2uy5G6bNetBtaaM84zQrp5YxRatwNRwKFQzHTXqMRgKokjbNxGqpQitzSYor9H15JDuq59ytMPDygvZhs9NJ6Gq6",
  "key17": "4gqGBXcTcinpBmWcW5vbVhq1rRt4dwi7WdphNRD85NvNWJWHtgxaXX1qTXYaiN315irBbB5Z8GN1eSuW5US4MEXn",
  "key18": "3f6UE3A98nQSr9Rt9NWDpAjWb7yRsGA2qqbrUxfNkA5UGUhUj2rnR9bFbnmVNGyqHRyW8ZsbSckd5FaqUDrQdeWL",
  "key19": "frdLwxTQEwrLPgyyyK1ncEgAamrCvwEfYFNrey9hmQ89VQf2XKA2wg8chFAtVLjvtDrqErRmDaZ8bDbVaB1J2SU",
  "key20": "4vy2e5VNKzdCjL3J6XWEzn9cGathDBBgm5uNJd1fRvJjYBp8pLMVDtkhrf27HJQ9LJZrvRjMU77RFr7gKaPB13Xh",
  "key21": "edYFnJbLXQuggztEsey6jKCNNVhbJBfUFAKKwnDPTbDrxGuKYTrd8jvrUPfY5csTfP4VimJJ3bB14JSn7GVt2T3",
  "key22": "85qAoJSSynrnBLKGmcLLqdDsez8gzcA38eUxLvFVo2Grr9eKJAJLUdkwJxrh9EhPgtxpdoLL76fstY2Ed3X8e9C",
  "key23": "2n8PSYmk2iHLNDVabfmffz7YBWmxk8rDpUwQeBcnTTrwMacVP2it3VzYHXvN3siMLNxd4RhsC7KMRTU69SJNG1wp",
  "key24": "4emG7szjk4dFEdy2TT7xdDMJACY6TqCY88dwebfG8MNuEbwEeWfyEJMZdqQDbHr1DRqxvkLM2SUhekEiB1Uq1Sud",
  "key25": "7EZN4L46H4s3Zk4kfaDAUH4uDEDU45QacMi1DbJ7MusfHiocuEteBLtd94D5nJtagRxuHBzN9bTaxxD61WxRkem",
  "key26": "4FNSVBXojduYBQy9UX4ARb7ssQNiQj4gx38dfRpJDkhFGUxQ7KJMvBYM8myhyEARxioSbFsSRzZk4drvJkfKS55M",
  "key27": "3WBm7AFumvXzRYvkiZYF6eZeTvquxScpmqp1WvQbwa5ooPksHcV7ARiGXJb1Hva6djP2GnyKyiDybvWaCufJAiAS",
  "key28": "zzQHPq56qATMSFv9YX6cZ83kJuFdPDeurASfLfPd71r6zMxYNGJtL8hntyj5NDUa1re98pJc2ceMtGkUoQ2RYZT",
  "key29": "4jgv5A7HDd2okuyDeZPxPQWou4gaNeJGHcXXX7TzhWgE9ng9LRa2g8ZAFt4Ta9FDsngNNAjpJof5ZxwqhHHWJ9D2",
  "key30": "2CkzRGxptMac71CWZrn2oLPDo2PtQ7oWE9eByZkZZyrGKBpRoS7hCJ44TiuiEZYcd4sUYe94Ywd3dDYW6tbPH9PD",
  "key31": "4ZX1fKczMRYvNpwk7DoarbxUTjPGKZMMMr8Xr7hGpC1n4JDBhmM9vmn9BzQpPbsASp54Rbuf5QhWj3ZCM8VkKFdi",
  "key32": "2Gcjb9q4BHYWEPfy6XxdKc4s2FQJYRNZL4U1WzmTcNqjEcb5qRAcV7EFfW7V93AN4a9tHDJXLg7P5Zc28jHdd6yH",
  "key33": "2FpD5Q8zBTP6mdqBVFs3b5W7BqvSjY5cLWVxYyqzNosB3r85VntVTtN3A7vVceEDA5AQ1Qti791soWjpzjXKNYyg",
  "key34": "5LopnApcXaxGyC1K8wRrtzEuqiLGPa8uvEHA4ftfFbE2xKaRtAZLsvtjdT3tiWzBozso1QEvHMGkS6cSA9T2EohU",
  "key35": "61U9ehqqUaT3DTC2tmFusbKj8CxaJBv7yad3pUVkAinKh3BSZ8PT9vLgrcyw8VSSPh5CKJpeosaqRYHxDjBHrmD6",
  "key36": "m1zcdbiFLdASXmFeRMJMKHVvxxNedR43rxpnYgy6E7736qtAYagAXRpVSSWYr2gLBiWryaS6TSmGnW39PmC8LN3",
  "key37": "44rUWjHCUVR2Y4b2nu7YLvGVktpBTs64jMyx6iaGrkd4R1cj6L9dXNYVNq3FWdh7DmKQ1PnAYuHTMRP9moeyUWrm",
  "key38": "3ji2uD1Gd8VPGpU9g4XyPCaPTNJiR1nB25w6AFwyG8kf9gCS564d4CehhDaMLtZREvsPp4r4z7kSf6eohgmDahNa",
  "key39": "667byDRCn6BhJ184fuyjEHgAMcEikBUkroCSHTqNaBvndxYL6sUG4z44JRnkrYQTwbqiLEFC7nnJBC4VqoEsvRPS"
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
