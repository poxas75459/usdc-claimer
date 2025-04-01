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
    "2EforrdTS8kbgXYJx7nqFgBKnPYKbu6JCAxBB36c4JvUhyBZt1LzjwtfMWj5mrCyLP63vC3gECdzG6cr2bcvSo2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paqbArvgBtVoXEN4YvPpC6NnbxM9sUrffmLESKR7WHUDX1HhhPzE1STXeTrkgWDu7PXy5iCwdik2YmbxWm8mb3H",
  "key1": "CYvskb41t1WQ9ugSXi6SNZ3C9Eg2a47nzwWHQ9bNGLNdNBxk5cfLm4Bb6mM8m9vYPbCAwH2EeqdbRXJVJSZVVwr",
  "key2": "4jjRRMCnNMqrWdp8UE2DZaUDNkRSTAuwDkXKzwA2aSjubkviDq8JJ7WBbmQCdv3desKcWxYroCmmUJkN4RDji2qX",
  "key3": "3iSQ2vHFL7MoBCMnqp6CzUh1N6dwhjzjTQcFekaz3cQrbacpNv3JcVpT18aLVJJJCEXyT7B1xH2Betf7UhAHAPtA",
  "key4": "5ETvhepsYjC7u22hcw9ZEfyD3EqmVv6rthKnMFYfL18gcRk3MBvLCcxZUyzBADuJAEX7oc9ZfVUjVsx98UBjLzXS",
  "key5": "4PMzSMskJUitcbsqbTf51jr4ADU6Mm8xPH5eRs8pNiqkD3DUPayJJDuEZjuX5mrBFMCA2FsmoiYzCZKH8ZviS323",
  "key6": "mzAEBEN8yWHadMi9gvMek8UV4Wu62jT2iK99ztQYaGktaA11UD2LrWeJu4BZri1dcKw9uS9qFGKcW13zPyqXoKz",
  "key7": "3BXuB1QGdqiEKttspehqYA7uedFxXu9um8q1tk5ec4S4U389p2LgEWTq6S2J5Q9xP4PbonRMB7JJpbb7wVoSsG9",
  "key8": "PXQmCcyUUj4YP3uBcz9DHWTA1gBBFg73Mmbww9gbGwdfJx1x938JLhgtUYjfonztpimCiRm8VcNEZDH6uBKBMQG",
  "key9": "5tXAYvciUQxMN5exzbf6KpJZ5WZ7uf6y9PmFjojJ94bmsedXioa6M3cHMqt8rRquP7jTVUWp3K3YynwbyMhnP492",
  "key10": "4CpUf9J55n9qTfAEJqhygJ93uZqGeJoffTDt1gcpo2VwTTT9AdyT276AvKu6cRo54eBwmZEuWkHBT9wvNcc9p8am",
  "key11": "sTp5R9z6V9j89DS8vZQpxZeVBSqpaJzNfBvYT695T4VcKRkANs2D6YrbMADqmJzRkndEq4Fxnhxt2RJm3R2xSH3",
  "key12": "5hX85EKA4BBT8tceWydEveR5U8goN35rVAWDMnpAFk8pqiArag9VUxesxSAQewXarFA23YCkBUh8LWqTi2MpJSA3",
  "key13": "tQBNGyGnJ7dGVtD7o7UJALHhQZDR71EzZRS2wpn8stAhLK4PdsCkaXJJKAPjhr4PZosWUL6df7fZFVGscpxGgqr",
  "key14": "4wgYTVjYddAcfvU7D31RmjwWh5nzC5XiMqv9HQgcFonTGg33H9EKNiMXpjQiogNGe6DvPH63deggpwmWDy4JvZiE",
  "key15": "Mqy8Xd7vcQ4xCAPrA9P8Bg1UFVDqC2AQC2kkZHHXN8JMR4eA8d1vmucVjekwkLa4nUu2sEH55Yo5n4Ster13kns",
  "key16": "45WM9yP7fML4Ro6Hwbav3qxJTY9vM9d9Nu6ZpXEFAxWvTNwvcfki6ULPXk7p1G59piMUqFAHdBXbCQddXvKTrC6f",
  "key17": "4NehgjhiVhjL4jL7LTLj3jMFB7HgwfhgLcu92RcU2DzjVtWn5p92c5MKsZKaREXexAkRLaaChmFfbdbdKAbN97M6",
  "key18": "5n18TNCbNnAYRa2YuJ3uq7nJemanC7HRVNhLPvbnJcDWWs73Jfu88SwRJe38CyX2PEwXq9zvPx1EzvebFzSeDiZu",
  "key19": "JfYPrav9QQMqrXwU7PWL8Ydz62nSQCKhmBKazfH91ZuMyBzwRk31u5eixZcqDc6VHmXf5Tttu8sHyUi2SYQh8AQ",
  "key20": "48p5DuCrvWLZWTt3CB8auZzZBdhNqhPtzU11f4AnZNXVYSvEJkytnjuRBB5rcHGKrPMdG6Zs4NKbGa5reWCXEDUS",
  "key21": "3GG5MiGAoSBRjabmagkF8d3y5Pe2SmQpH8fsgapzSZSHGBErKC9J8oc7bTXVPF1aScHgCzrUdo7kwPQefRg2xJZY",
  "key22": "3Jgu23zdLNVWwmBUBkGuuA6MsxvQiDFg5sTSRedkyuKVMmmXMMHWNYxBhzgoDWh1VzyorSrxhYTiQyRcRYGqJYgd",
  "key23": "2HAgYdXsuA5YgRVmXDCWMQSYkiodEoZv137rRa26taQf8UhsqxMfkrXnhfmWSf1thSFWaAQLegxgpoFfS4JJPggH",
  "key24": "2KvQbEuKooZxbg9SU9aoEUvNi24Ji8ZZKbrbrNojSh767HjjouYMZDdvuRKKUADFMbxCuCrLK7kTKxsBWrr3Tnbt",
  "key25": "5Z6ijiCnZimhsjgLMaBtxCG2abSy2p8uzrgHUHYgj8m9wAQCht5ovhrPJhUCs5zUqJ2rsxYzHfq512pdfvdxru5S",
  "key26": "26UGiypHsoNYUj9d2weVAQcdXrsEsiJbJpTGamxkCaqRuBeq9ZARJyJrxGsyNcewtRvymzLWUjEiUxtowPDrC33E",
  "key27": "5oeWZsVg5L7rJ9ohUqDwTpU2eZB11mZJj7aTiph74ctnpMnHRC3P1XeBLi8upY6qgk5sb7R2s63nqmro9wSANRru",
  "key28": "2MC1LxZbpp7a1wiiKdGNqNvb8wTC9kaBNfTeLwghqe2yaRHFpPM3t6vUdmwpTCgXAFaz7mqxHfAY4WJr7bymnbHk",
  "key29": "4ef4bPL9mCxtGRHnz3ugedYCYEvczyYhnCDLeVws2pVe7c7TUWNSAWeyHqFPk5wPqLazTV16oQKsSJtYod8Jpvpi",
  "key30": "2GzP6YU3ZfzaiCQNrcUF7Hj9KyenYsdVaPmBiNEn2aufabGorJAwop99tpAAejArunEomAMxaYNSNtyMHnBUKcCA",
  "key31": "F15gwHdnCZzehBCCkh7YHhpBkkTXGCPddn9SV5r7DwEmx116pwHwuSkCfpyLkLFGWEJhN8UCzW3fHZbcBSGbcvn",
  "key32": "3ctSF25C2DKfBPemNKr4DzRTfg6XyXVdZeThy8SZzu3trUr58ZWA9EnSGSLhV23k4BB9wXQXEYmvji2MKFsQKCZH",
  "key33": "DBGTtCgQYPJ7RR7mNq1wqgNFJRWR5TXvQqs2131cyLB7dqZUrcPPyu8RfeqEZLjvjarr68fLDztmPTrfg2p5RV7",
  "key34": "3HD4RgpnYRVkA32HUGmpuYkTdeBoU55gvYcZYkF2zW3Dzi14q6TAaAsN3d1cPYGjYc46PkfRpzv7XEZE7c9wBEs9",
  "key35": "3ReyDAQkUpoVhy463UVPaudLzZru9RHdjgnyP8EEsWUP9T6r6NmCrv2cQfrkx42WAAENruVrzTx4ck5EChdHr4aF",
  "key36": "55w79s8v7yHREyAQRwGZ2jocaqAvsHpzGBchr2G3vf7ZQXd2p5rkqvQ1eJnd4ndtGn6cTmAX7uG9wbbGptbDEmVf",
  "key37": "2PWCCTNUti5iJzYPDHBiTV6QK8BhSp5KwJ8sHF528uDhmDuTduoN7oiaaGiRNACM6SY9KNTqpVymxRWRkigCbwmd",
  "key38": "2AvdtJJPdNQ3zoW6RhMGUNAk7hLAxWd8HDG8p7HDyf1ydqZ7qwTANa8xJzrmM1zuWszXtKgqjB8iR8ALRHrkKbj4",
  "key39": "2F2Kaqc41Vc7wS5Ynkot3N2Aimzs8n2FdWTN6E1B3DK6dqzFWh8qzTLTFr6ztk7w1sXY68drnV61JEGHp5SWeQz8",
  "key40": "xD5QRg7oC3621ZzWatCd6xf5igPfSibAWctzDVN2P8VbMJ5BM9ukzhGvGZVGoE7zs4xqeC9iaZttyH4FfM25ZVy",
  "key41": "5X2TckBcTjcNofTrx8voLH7PRH82rcCQrc751cRQ7MSkG9Ha9iGMVu8wsh8wEYtd1EcYBaPvGTHNZ4tUstX2qidb",
  "key42": "2ehkEJTmWMne5nY9tRC9moiUxGchcx26Bgg4MytyMPWuvEx7nkQLDnqpAyQkdRLAVrSX5PfVTpTAB8URia76hkXS",
  "key43": "FF4C15g6tBuyZUnfHVqA9nfXyyEvUYeKJH3TjPaUKwYpd9dVh7H77VCeq96NFKmeTYSq3YXSJ9DHHgLcrFcuwWf"
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
