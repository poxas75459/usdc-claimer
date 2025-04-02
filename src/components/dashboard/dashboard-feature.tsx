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
    "MEmkBYKhAYurTARiUvvn4dLD21CRZTaJFm7vP2BCpqSFnPXXX4giGr1rZfj3dvD76ddARvizQC7n8NPGgTKXhfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EP4KGJhrkiXYpQs7rqqmJRAcc5ceodsV7PWDNaxMmx2Geq4Bk8Wj8LDvnt6p2gdmkT8kr9mpHwQzUWJgV4sXjgc",
  "key1": "59dtvLAc2ivDdfzLbQTysqVPAXA9zHNALDTt4tWpwMUTfHWuVUmqErgvdQBjbYB7vyTrVAWj3qiXoqWaJ1dZYSA5",
  "key2": "3jnzGLWY5EdEJ5fTzznaXGpzy3anrg6wCiftJXRgjx7KCiskQ4GMH4VNpvMEyUxdhnT9nHdT7ULqSs7JWBELaagW",
  "key3": "4WvF4kMXZqUSMWMLdnv3DdQ74adoP8RYdP6eBBmDLNdfqfNVhLbwyZnmMviZePsZjtoN3mHCwJ6n7QneSvKoFzry",
  "key4": "5gvrJcWASXsHZ5XzytrLTFDErVX7bNPyTRzRBa9qHcURL2pBTKRcnUoxvMfEaAFh1QD8nf931z5VisF8ZZkEa2gd",
  "key5": "5YjNivo7qJKHDfgZmfhmED3hMiaU6r9WkEH23UZo3Vjvp6MZugysv7bj9tYxU27B9w4GVgbcKRpE6wurHEccr9RJ",
  "key6": "5UTK3q9ZTom7MjbaBNQW5JR4EGPN9KWo34zCyYHvxCVzwvaTmLHLo5AwSMJ5hf4tGNnnw9SmNt6hnGzqMSHHtGia",
  "key7": "AmWDEG7EStREGHwJKodruaDKzFWLscyAt8sWGBh4u93EGSEfUsFkTGWqR8qBCNjUZ4yomvTmUW7CqC1qGfXFmjq",
  "key8": "5AMUEVgRKP5ZY3xcaA4hcUQWZP1euRSdvFNxxvTdecZg2mRTgpMGHvv44dmEmhzWBti8epj8LyYw7t3kU4tNBj7e",
  "key9": "2ZoFiZLnnm6gt7U33ZPCUhhFJkYGptQahJXzhh9KdL5E5LoGc62LbRWTgBQQfyQ1K2hXVe4LQDtvsxxwWEX6Gdtp",
  "key10": "5C11tghRxqcweaBfyw9AS3cRQKrHu6krRipBpP842v1Lg4YMKsrnBKwAkZ1wDyNVjhSV2oeQj1awFsvpa6bvZCGS",
  "key11": "4QkbwTkwdFCxyN4sRD9wmurZykCuJVPsUtqvrwREqDkpMtxyw8L5i77Q3Fb6UqSFaLePWXY95voMxt3zjUemYkUg",
  "key12": "4sQJdjFX3zFd4KtnSgD27F1U3tA5txVov11tWdfNRNQ5TXyRNMoR35TUYA5X52BDKEmonLmbXezEa6SCLHdvttbt",
  "key13": "4iE7zxvWScZii2s2HsybFWcFekmphPZVG3QbUnRKtVTrLTw4xqMmFbVXc2PeHXvhR9v6MdBVbW4ntrDHCQXKTYcR",
  "key14": "AEkwu1VGpQDqo7FCmMnFZ5HAuKiJLSTGG5FzGdLfLnxE9TfeYDvaTtVwcyj218BtnWrSk8sadFWybWkyKuti4m2",
  "key15": "4ycE3uBKZkQnHpoNTgnzTLNvk6wgk5yZCVpSRfNWmsgHexThcYs8oaWZURRa26MuZgE16k5HmuPjU9TBuzqTnRLQ",
  "key16": "2GkknDUBvPGowhwtaR1BjKfrRf17MYv5CoYE5b9vFNmsjM46bz5i1cpFaUNMpV9q19MV3wXXU88pgnb8PQBNEA4C",
  "key17": "3dVXwZq9cBd78WBJhWobA9oSkCyqNWdoK2GrTZ2aL61dQfhCguSmWVYQQhjosiJrYVQtDdKfbiqDdN9v8KsDWAAX",
  "key18": "38u4eCVtKneq5GMbz5RYS8aCBzr8vqPivHzLVedGp3wRaptVtmjveEfp3eqXQ6Se17EqMHVU15fBeksFgeCGGS8L",
  "key19": "5APycH6HQtcFcwMtRxsCvipS6JWJkehZR8phW3s9LRUsMLH9N3h9WJCfwoxo6Du9TwcCAvSutatZyLs1iV8Yyyui",
  "key20": "5bACwNMbfJ3FkH8rgnyCUqSx1Y8bW8AggftvpXRxZQ3fGoXqBKcbTgu37ryzKcupfkT4UXsrFpCEX5iUto1JQZnW",
  "key21": "5xuPdfjEJ3H4V54aH9ymzQethsxLLFve5sLSTgAG1Bdg3Y8Um8cRaKm1MbKyeBgcBRojek5y7vBF9fKQa3QUTRGt",
  "key22": "5UbaELgvQHwo93sS1D4gxNxBLsB8dnqCsnNH5H49DM8JM4qgpmdEtjfTVTMNZvYTkRhgUsRPfTXsHctfUXCMkWNo",
  "key23": "ofL9Ta7VhfR9evbYx1cxLB1URDAYzxbyqkGbT4CqewCAqnRSDLh6HfNJTraAH6t7iM33u6feKJ5QvVGdSg8GVcE",
  "key24": "qBLFDi9fM5rFE9mTqZHqJaVGebzYpEjn5R8VadLz96Dwveqab2V3tQWcEZKJ1ouuvTrWxMMB9TnjkFBv86eEf34",
  "key25": "3LkMZWZ2mZeNYbAhNS8PVag6ieR61WhFxjMnn47VVKN59X8KVm9gQpxBQEWaLdhB4uuUYjBt3YiTyBHdbCHbjZxg",
  "key26": "4LHRDNB333moF9s1Uhje549wgXsej7ABSGjoh2oTQqiZwAkqTr22Q2ZfGSPkUGs4wQz2at4G1nqtEbFC5dCqEcin",
  "key27": "4zhRhbvPopsAhxrF3caSpXJFjkmf7RBy4gYWacVyGznbBMcreoZdHEwwMYjhNU3MrXfiiDMgRBMeuBaii3Uyp9B7",
  "key28": "5G4BPbfM28Y6p6tDyBaWh9ix1SuvmsvrVSAAbjpmfi71jS1RQy6scaiJy3yHjyRiJJN4WTB7XP3AC4EgQrN3zYxX",
  "key29": "mZY11A3H5sMJtWNQweTBeGqCU5nXeY8qvMBDkJi5Kgap3j3SCtHkHKbJ3JcVTXuQh84D5yxZnid3C5okeueRdvA",
  "key30": "2p5YznaF5DHNNEzCCG1DGkQTE2gkFxwXxw7exg62MQXcFVD7HM7mYLMKLrAjAeJvYzoxcHBKNBWkjmEUCSyMfSft",
  "key31": "5rGtV8h8pSdsxGPVov9vyog4C5tARAKLw83amitFZR4HuZRwY7F86LqPW3wCFKJ3xHBa1SRZ74UV83VQqUb8WmEL",
  "key32": "JNx6FzkSqE9nxifBWuGoi9X5vARfJBF46UUjuBiYawYi1wUFbG8gJFqEqRD87XZ2snvFPSxJTEQY3pPrDAFqLn6",
  "key33": "3KRKbyR4VzkksPAUT3MAQPZGiQHwBB4PC3yQadDCeDwVTT4PReJe33cXssjGNHHw2kjJ3cF6vz2d5bXd67FHnvUD",
  "key34": "WGMgBbox6xrEjnsL9zME2h1K8eGHLVdNBYZXzTuo5AghyHVJdJdkudfYBLHqYg8p5M9CaNAbGU4L6ZzE1NZYprw",
  "key35": "496gQwk9JorR2q3Ck7YYaZZDWEqEz32fjfWZvUFgm8FqkQF6hkzMk1UAYag4ieRnR8zWoVi65Bkt4RKAv4UqC5u7",
  "key36": "48mRphwkyxUfPqyHyyP7CbhfQPQymACRLewrkMgouuSedJc9NGfPZSYC2jAywib6V9s5rwdoJfxVE2Wwx9tsvwWq",
  "key37": "LVGcmDgu2BzrwTzzZUdPdaz842PsyYK7NvvchVTJZUE1oLg38tPjguA5BBQXRMFpfbF8pJZM3Jg4AzocXwjxeQp",
  "key38": "4QBZGFfoYpgUVxhUgbVtDCbZQ8NBc7RBwSmA16J6QujmC1AhqMYyjfw1DZ86sW91iRhjVz94Awt1DjhhyFw6jWPf",
  "key39": "fZr2iEfa1rVpReTFVqS9cbe4arK5Ly5HZnHo3cFqwQqugBKGvmcqRa6FMX1uweBXzPbD6hYvTAfPqMLJUr77Fgo"
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
