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
    "2WFEPQdsmK3kKBwSFPmz8NvTax2nDo1UfGqBxWDCy3x6ChfK6vF6TnXYTe7pXuARtpCo3o73BMyBhi7FNvAk89KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5xRCfR3amehibv3a7WZWhnpMsei7Z6t5w9S42oV1NpfaEP4jabHC8666XHefg3cVcPzAZSZ8PRdfoD8p6J8Z5f",
  "key1": "5UoRTPtzcPTnvEsBS7gijZA9Z4jQL1M3hcJP3WvJHyRUzmVYRVmEh2rSm43Y1E6VgoQeGVnPMyJGpebh8ZhiEPzZ",
  "key2": "HjwcuNYLk8gFS2C87NREJAnZEmoMhBv447pHcKkD4XXdh8czwQ5X1FPaoY23uKReAmUHt7KaLMHzeD8Qb9d3XKE",
  "key3": "4VvkHNoFEkeKbXEkVYwRfAeS9pujXV8Mknx6h73ozTciAJpZm8WMEZk1Anb6v13MDR1HQcCCWrDuKZvv6XHhRPsn",
  "key4": "4ynvifko21rqgemEa7ewKJzSUWHEmucStBq4q72psTDYY4KUbhxGCWsjMQb35DRoq8enBP6nWgX3w2xCtRiP1qKj",
  "key5": "55NwaFzXUbXs87jFWZviqsUp95iXH4Fu9f7GSc8gyKtxwcXtAiYwMJHxjFSU4eDsA5KEiP413ZryNzGyVuFzqzPT",
  "key6": "2zKC4gPe4YA9UPHqCJdo7VwH1rLBM2Ck4FwV6G78puXqczNbGshzNcGmKXE22VwEZ5atVY4PqEcAyCAs1GhsrJ4u",
  "key7": "2kxvzkqyQAfhKi7XSqxvoxGqPSi6zdz2QrdVaFw7UEWYQ8yigCihYtxZyh5R2RmRA7U4iawhvu3kB3f6rCubh7zh",
  "key8": "XagJFgQ9fPzr2Ao9hh2tZpmJVPtoXM4WMp7Wo17T7qib1UN2Vrdm6xCw9SRH4WYiAU3CtnydnVQmYYZxMHMCufv",
  "key9": "48vsoLoQw1UsMDh6GFFSFSZSJKw85xyphW5wLrdoxM6PsnQB8m3Rw6fkP7rhd6t3k5gToKtSxkUXB7KqEp2kjSaC",
  "key10": "5LAGBP4WimN6gxQ5ua6z5ZhqJJH4yiUbGSgR91CfuuJ58uFmJZ1zcf8fna98PxUnAMJvGS72aw2CSDzqA6daQ4Bn",
  "key11": "3XgSrYAKA9uYKqUjzq2Zmq4Z7PKhuM4Xy8zV2L7NiXFEJiz6HV5t1RAsvuP8ukdLwKsfuzo3jzDi2UiSBnmaYf83",
  "key12": "4Rwcyn7twB9B8i4tEm5ZCuRd8oS62w2sYwPMPkFJA6KkLvoQLwTdTfvU3s133txr7xrtHRkK7KsPjWcD2nvXiYPJ",
  "key13": "2uDbnYQizA8WHVVU77w8Pec8MLqdnEze1X8GDqBN3tv83dPvpvEhieJGdddjCAB9fXTJxyV6RhNe56LPZ4hFp3sz",
  "key14": "655KqF3es5Feyt4QGh8rBhaWkYtQz4hHKBF6VPg8i95M5d3pMhTST4Rp9ywwgGi3has27KrHHqXhyAWBULybroC5",
  "key15": "4LCtMPz8x9ZGYpsUycEUXBAGXbvaLyXgmxjKvaUH1Wyno9DpK76GL9dGLtVZGLHAq3hPo4Xn9hbRAvmAd97htMQ",
  "key16": "2uUf8wa9Lqpu9LTSSbi6FX1JnVGWkAeYakgdRJxiBZpo5LURcGLpPdaXL3HiHifktHW6Lsk68XPveZpkyQZFrNbZ",
  "key17": "upoTUgh3GGY5Ktqv9Pa1E7hrALKvHh5WKWfVUGXAhiTEnzngXn23jhRjJa6wkcejHZAGw822Q5pS1AVyW9xTTUR",
  "key18": "5vaMbjoX6izQS6KezBo16xNFjVZQEhzbjeQcAdsQ7C3w6rsq3BvteXbgnQRZAtpD6hpxKnTofKct5jpixyFxhW7Z",
  "key19": "RcgG2acMsN18LVG3xjfqmiar9J8uqomfpVFJUMmzeGYGtmdLEZfzvRBqs7K8GHknqFE1yMhz7e2Fs8xTPL2TSPs",
  "key20": "4C8LM3NwgTjionfwnkTeuZrTRxVbC15NVNjcv3iSj6VrH65qigq31HQzgKmfrXu3U8egu3iqfByjnQ672D13zgr7",
  "key21": "3bpdkUU5nriVWTPZuocXTaQCyFV4AZT2c7RZDQN5qe1NharuRyFb7Fx5sexgviDnSmZSWP2n2RBG1eTcPUfJDBk7",
  "key22": "4sza1XcfBfFfddhT3GFA1bN5uV8uRGFKDVQro1NyEHAqupWLg249j95uBy8jDN7jwJVzrzfQdp5W4q1VmjvuuQAX",
  "key23": "2w8DBKniTKKmkBMF92dmcF3EWKAGgbZ8cyFR76cDzssyEAD7cXuugX5HYT4HiXbbqwDFboeaxXkzoynYqacCyK43",
  "key24": "2jb8j69M1LqFY9VquhWeb3gUix2c3mhSczahXkVo3r51uEC1ph8GN1WpgpjqQChrhyEgAkVqZ4V5m8zh8krrkRdo",
  "key25": "2m6xjGNZGAWgFSvG7npM3VqDnnQWgp47HpPBwHZjET2LSdVzayaNq78GLYDwP8bA4gdAohE1CoLZFLnsPvugubcV",
  "key26": "WvtLqWiaRtk3H7ijXAKdP4T6ukcue48VoYtZ2qAqTcoAMNf7UmJnxFW4F6czuCciAtsjiVoAKHbgKcs4zjeEbRm",
  "key27": "38nzT1wN2s7jhMhbEZGE1KNQx9oAoTycBtRtcWwaS44N3QR3tDzFwBXj36KnjVAKtaYiZBtwiUY9PnekwdGMM2dq",
  "key28": "129V7C86pNvyBpRv6y37HXnqsN4gMfoFxBgNnZn7hZi9TfwSnj5z3UuPaLDL6hv5nysJD84DDoQR67N5tTbSCaWr",
  "key29": "44Ez74wteSguBwWgrdaqguCFrPCmE5gYG4DfbgeAwb5HwJs2rjPbHFa5DVhxrJU7DJ71z5gkKkWE8LL2eUZpq8Sk",
  "key30": "38gK8fMAWbyniG2k3je2VMjUoxT2DJqPWCyMTgMm5r3NBPyHXTNeXtYaDGpPBkzkogmP8CQte9DeZngpGboJodfs",
  "key31": "3pCtSsd5WzjFFhZ9NTiyavAszA1DZuYWZVehDf7DZ65mYF5Bs9ZVD4iHLdbTmfVvrubuoF5ErrkZDoqyfsD2Snk9",
  "key32": "2UEU6VHK4xPMjm1HGK3nnB5WkzYMwAyAEkyp5annL9UWTueCVpLtqhxgJTf9qy7HKDu6stjwwbPt2bShA3hKgrLB",
  "key33": "5pwnvP9jBwK1DLg4PQcdxoiGP4DoMddMbbGMJj2ouS7ee1eV6XLPKU5JhJ68wUfYVxmqBkbM9YL5MpE7dP5h9LiK",
  "key34": "4sWvmW9kZCp8uNfRawCYvxNu1tyLx7VzoemxMN6FfULuvFwYNaHiofkLvZrPYsHyrjzguafzmdFZvKT17b4ZaLBD",
  "key35": "5DDzzx5S96ECX2iqZG5PXMTGZ5PNMLvsfDz79E7755PJMXFivH2sBLeVPkh8WDJRNwAN4U71CEKC9CQQYyNqKhpg",
  "key36": "2PhoX5nkmFae99YtWGELvsgWw1ae4bxdm9ogapP9u3Nbta6Xe6yFtErbBjUpNs72kVnoaxmaNXgv3isnsgMKCton",
  "key37": "2JdPZ9kdyEMDEzFa5yge4akFmCeeirofdAXCw2eTDnig1T2dymbxAbYkgZkrEBGtEsEk41vdo5Q7ou38Sy8SBv6s",
  "key38": "2eXheEbqXjPQGPvNtExhxgPc4xBv7c2RNSqffxU3sUujAPt8FBxH9DDBGftE3X7rB9WUYj7sDZj1WHuLuZd1L7hG",
  "key39": "HBy3PoMnpDtrMuoUBaBDnqENdSRHyiqd5q2Ycs1UyFynPd3EvUCWxDNojzRTy3MeBhMwxG2MN77m2znZYvgFgi4",
  "key40": "3X6b2NBo8AH7bL6kj8pdAaDWYu5EaaaxQs11E2CKPpeVdBuNCCmy9cAqegBsew45r36BVr9uanm1v9QgVwUSAnCA"
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
