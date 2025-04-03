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
    "ooHekWi9nZ7TBnnbRKREK2gLbRt59obj2kkqQS6duz1jzVzPQtV3tXP2P8zTm8agjFqMQBJzdXSLbAXQ1nQqAGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ajso79fGFHyjUFsDJ6CH3Ui1TzQcjCLVidcJRpX8j8pH1uXHLrdMC9pmriDbqDeXpHns8nKVRZjV8SrZJpGpxQb",
  "key1": "5EuUJSGM3GMW1FcCw1TWY6rsCDN63WMKSz2pDhF3Ayx2Z9JQyoaNW59eD5XCNqRqhJMeWjZ6gYt9wuNf6c6kumWn",
  "key2": "2fsqikAgLX9MLeTDZ9wXZnJFjtgeuZeG4oLMZrBUmztbTrDVnq6XdwtKvppy5MKH7HFxcA2GtFSz21xJ4cwiHi1y",
  "key3": "4YMoUueTtvEsH6AGLv6wXiZAg6zjuHbBvfe4qvrzM91iR4chVXfj9K1RyqMUQxD3kVQb3V9X6Wi7jM4hUkt35txv",
  "key4": "eS2KhZdgX5NZYP2LFyrButbTd6FBFHGCNS2jZhDzWEW3iz8pFyX27uzaw483tTdct5z5Nr6B6PrsfTSJrp38odj",
  "key5": "3QhvDF1m1gegZYEnA88wX3x8yNt73sKP1eckPSeicmvsETxVtrpU7SaSU3eTtHGyiBNqzsgRuX2Vs7yFBMyns1qK",
  "key6": "2Tz8bFvDqdExL7xZhCweh7x7vDbKCDnPmRgDpbwmkcVVFnu2NDqzzoZgh4JwUeDe2jy3yj4KW48yQLZC4YoTLa8Y",
  "key7": "bEJpuhoxKvAQ2cwhV2n7P569V3xFtKRmCwuMysgHHPN79oBwxUrsrcvTZDYGdrskDLHNfeRrfZrsSctqEm34kuV",
  "key8": "TV79KHPAQ9kjMCt3Ybv2BZgX5h7i3swXRXvhTB17Y5JWW615J9b9tnFvL46KVZTyyyYsce545tk1hRFexhx1D2E",
  "key9": "3JS5RSqxsXEAYAqMTwK3RhAjXCgdaNMyoNqoKxdVYjXsbBGk7v8oHtrDGBu8Fjp2qfcpj68vGSX3Sf9T1cwoBppF",
  "key10": "2L7MSMa8nBZaKdsizrKUhXLiJUB57bwR77xjxKHhhkvdyqaK4Xomt2sEF1H6YveayyeN6JE33q5eVgvYLMN37Ydn",
  "key11": "q8HhE12mH9EWCrs4u7PTd4ajAcaaQAFW1Sg5VemxsWnJxK2Mmbfe1DRJr4uXFDaQ4sdoJ9DB2mKhT5JRoEPQi6m",
  "key12": "MiwAM3vQwbaN43pABd3ASuL2kJb1KfzcR4PveP3xcWLrNN45CT4ZZmTH4T95umhCR4zCwevJs4bZzj7SmRHLGNi",
  "key13": "5NvE9w63YdmhpXCLC2gRafv9nUUzxDzsLvgnFhf5UgBcmypAiEqYAkPGvyktWUgEC9E3WoTUhxNL2XxQv7XY3jjh",
  "key14": "3Y5ukWiZuvcd53VF5w6uKqNw6gDXs9RBBCSEJZXU7d2pSxATy59ZqN5iBt8nJwgkFfUdecCJorJUTQCENdwmgV4X",
  "key15": "27855kaeX1B2f7EhgVch24yZywe6DPKzECH98wXYZQaqr9J1kRwJs6YzneNxBpq3wWZ8Fs2x91hxNgmHmN8nNrki",
  "key16": "2HZxnYnBDU8kCCWtWJ2LP3BQVf7Ng4DujhzHEFFAEBhtRYMctsq122LD2xrV2FkkyPxyHq7DfUaB6AuxrQ7fRRGV",
  "key17": "3iyb1UTnGefkLodmmp34ocoao2Ez6mDoDvoKNyywZSZcMrUbqttEGMWv9T3sxKPVZDxD2sxSQin15LKdkeDtad6r",
  "key18": "4jXmhZyytDNE5YvWAeGwKKqEdo39wJHjKjqohzk3eBRDX2dZdHd81oTzFBWxqRmsqp93nodSLkiixiLRtfSYRt6f",
  "key19": "3g2RSxrckt6qGugki9AjeNHvWyatCHbKyiBEpE8gDAG28ZcV2udX7RCDs9vy4M5GCoAszZ1VHy8SbuLguCNPZDE3",
  "key20": "4uGSoSa1D1kz9brS6RaonJT8nEardFoFatpeHvSWT69QmHScPAkVjMBR4wipyLNsar6JcQSZxDJGVsZyQahNFTM3",
  "key21": "2iauqe6Lj38oSxdxzfvx82E647vHRQ91fyqMocWNMU97xsEcarMkrcrEk5H2fT38a1wKdRwigSws5AvSoLPrncKq",
  "key22": "7D2aQMJTJu4gF6swkMKKZkSVJUYbo7YCAKnnJvCi7tCyWQrL5XMBNrcU8vxGiNfvmqAaYLFrfE5QnRD4KmbCWBH",
  "key23": "5XwF1kT1ug15TcFtVkss6c7E1zYmfTNNZRpR36tE8xRLYqS9qKsfB57dXr5JQ7Bf8nJyW6T9mDHUCYVCfBSbLPsC",
  "key24": "3AR5KQDDQb88jxydeeyo3PSUStHBtW4Yo8x3QoBYoaMTbYMbj7qgtn4kTF24DHrLs1PAQCEB31M6j4QqXUCkZr2H",
  "key25": "4Xazsrze1m5fScn3Kqno7JB5YZQSXhdDmEvJU9U3ej67nTwwpxhH6Gxg6GQ65xhpfuSEqAjzKPvEpQCaQQzG1kCe",
  "key26": "3NSVi5mZvni7ih3VcjBJSvQjbhU5ovoxDBepRSxW8vepp68tW3GNedsHUrqq1hYxUHYD9bCDrzSaXPn2oVKodJWb",
  "key27": "3H3FGoBxvDe5mzrLRU6kPmowWmTHqKjh4PLsRUnS16zPxAAUwSxPTim57HKc8eBAbwKeoffvMVvvgkDCACZgz6Qg",
  "key28": "3SUzX4zcBobLSzxbEJVRrtV9BtJ7mUCNTGn7NScKmxtLLNyfpkDGLPvT2RUYK8mFTyQd4EYTastTZcFqRXQHFKtt",
  "key29": "5G9DASvUM2FZBj2m856QUtGKrUv8Ro1S69mg8AZzmqZeAPTBZbX3GGksh8ny11VMZbqYf59tovYxqHQiEhvpTzeG",
  "key30": "5hWwrd2HGGaL3ASKEh2Hm4SbsU8qmq9FLzwLVW4y82a8Liy1BrfH8KBHhhrRPTBYFm6sK8KwXNqjCLptkzFKZmUz",
  "key31": "8jSzyG8LmNQRb6CYbr7shmbCCM8FoSwBjAR1NsXUYoNeDiem33S8shjuXip7LqJHkttTReea254RuXaiidoojX1",
  "key32": "3k6H99mkUGN3viDwB47dYGneJ1uWPmgj4dadTpocrhSh7UQgitWyWfHz5Rqb6aqUv7FxqsrM7XFTQZsVCcVpEryE",
  "key33": "3aCiv7vpg38ssYqDXqowM3GidiRVfVbJ6a3hFcdSrco6TJbf9fTvruLC4hqYGeNY8dLvmbbuPWZ8fsEosJKuWWLn",
  "key34": "Bqzp6R1r2vBgeHuQwARR7jbTsmH3G6Rtz1g6WfoVxP7cAWkjYy37qe1Di15vcVdhcsUUxtx7W9Muti8vahovx9S"
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
