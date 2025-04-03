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
    "eGcnSYXgprJAnbJBoeTGrLyqJqZDGSrJ6mKHXjchgue6tURdKaprCSo6oPhFvHWTfGSf4L3e4PaaH1Xd954qyhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNDauEqnRB4UCbWzyC84fTDip2UngwPwiJr4ubQWjs3uBS1KgmouMhJNW1vjgRGQtNTDzFRgNs8WQvJ83SvYUvu",
  "key1": "4Pvof2oWBhjd9EKaLBjBhvrwECBe4xANUy2v6MRNUy7h29YrfmLnrzbUnLfBBmrAM7GxQF4yQWApQpiaPwHcFYWQ",
  "key2": "3hwU2QMoYpxQosBrmDxU52yiqYzYSsXC5LzmL5op5pQgfvo3482hcvb9qyN6fjZGhBnB2jJ7asXGiphk1divjBTw",
  "key3": "2PEMx7Poueq4Ma7orqprmtjb8WiEknBwJyqTn5BNAqfnBc86b4n5QuBpe87smM1C5A5E38FJ4aFHMKs4iScXERH1",
  "key4": "1294rfCP2gwXQDQcifZSish2rCuFcPxUB2Lmdo5BoxsULQm3WcCQJXPcyPNDy6PhsksvHv976JXGS5FZRCLVeRrB",
  "key5": "BrzKqAXP5vNm5ao3MMJJ2YtJEVjahvCgRtHvqRJiScmtKbN44E1JjwUiiVEgVheT397TrwP3HVXgD4tyNhpjYjv",
  "key6": "49v4gcRLoLSWHUKKDpwLiPCq6NTsA5yUpaJQXHdMNPaBcf9jLwKLDZ4vwrDVJC46JgttbdopfV9qFsW5ncBSmQzH",
  "key7": "q7Dhfsom9waNSkXkFwXjuvZLHMxxJm1ssXbYwerFve3JPSwcdeDzpDxf9kdDnCyQYcp4Tu5NpC9H8NRqLeJSYaf",
  "key8": "2kiJWk4XEQf11W3FJD3iQj1GVXsQ5Xb56NztgSHTXjST75Y9zWZHJY3ay82tieiAn9hwUmHM5wUGwffiykyG4TLR",
  "key9": "4hsiQyvZNJavoJ4Cum572DeTdG7FXJUB38qjmYqVk8ywVoCJ2beRUCvJGFRWFXvdRMpByT6H6meoq64GEGQapNjJ",
  "key10": "3u3Mv17Xu7mKG29UezYS4B11GTRTYzVnP2TbBWzW6G9bfUQAndh5ppbcmDt2uQAN4S4yokqPuLTdFGH2zAxJE3vv",
  "key11": "4f7UaKkwyqpgGwoyknJnKwyAzwFUPgZVjgNiYpDTAoQkxZUGLUuAkxRjueWovujWgRCjZ8LQdFs68PVw9hsSKW7a",
  "key12": "23mKs9LeENx8wKhgL1sNpVur1bvcMzzoW6h2EDEUz2EcVeQfqSWh6UZYhcVoKWpguF8d3AZNoFhFkaL5rtmwDQC7",
  "key13": "2qzKayME4Skj7wSo2SKfUkEFhvfap9KSNQsLZCTPhhCgsyGaQnq7yzYg3n66QsssX69uLTSZwaDDjMT5xnmqnKvm",
  "key14": "2YwNgokwgL2MZ3p4FdAWyBM3MuiJ33RRdqtZVT1WYseZxKZiKcn5eMvuNLAKgKvZBUN3ngKf7KXUgdkEp2TA8HLJ",
  "key15": "2Bes1D2HsJ6KsLeCFbSfrLjriU79oJDYra1LmFU4i39fHzksaTUWhpa6nDpxCpu9btyJXs2PWigsHyc2KNHwneKy",
  "key16": "5N2ytNUbunzm8pshB2JLC7crRSiyzcfsqHXpVFgD7KjvNVCU4NyLeCLU9fnwemZUUhC8yadExnYseNtt6aekh4Bn",
  "key17": "yUSGmmH5QmShUWNdc7y6mKFfS2db8xGrsXarLpdN2jvqybCK3AZUNmDAEh4ww8gDW2kmX7HKfDiK5B9ukZiXiNz",
  "key18": "4DCo6F5Bo8fcNM9QKJtRN13EQRURcRjakGvPL8MQhwdHvJFyvTHMp7VicBCxbE513kPL49LHu2qyTm746LFyQBzy",
  "key19": "2icjwu3cGbnGCXAxJBeib459aLMB7VhhsogdSt7RKZotxU1FmJ75HoJt7D7cCvvmCsv9C8WuCsNBuLkaWuzn3MKs",
  "key20": "4yDaNzAuWiFH9qspHENfZ7K5ttKUGeRv4gEyfsCSyeNwC6XPTbFQUHgKiYabmUhQ1jJWFwKJbxJErwQnktdDwMAc",
  "key21": "2mCSp38XUe47SAU372porFXyM6X5mKpUcwsLEHdUaFrov2HtitBa6k8BVivDTfxHgasKUn2CPuq6hVRjx73QRBZU",
  "key22": "4VNz5GmJK6LSSp1R67mXuib9t8CcvvxKFbFRjvY7fie7gyiwKmexNTWpgwn9UoewvhtCLqKyM9pTgGPgozYGzNSP",
  "key23": "2aaD8qxmx3zfWhApSKt158sLFFDkYqK1BnZewhRGsjvjp2UDtf74NHKoZ9qo33hNDe2V7KhyQppiKT3HP8zHVoUP",
  "key24": "NADQqU7wKzDMfvnifHxTMpC8zsNSBVHzTLzuQDo4A46u3HzXzin9JT9811tnKJEAtVFJuWF2Ay2uNQV5M8Q1Xho",
  "key25": "2xZp1qbZsge7BVHe2d6WJQGFp2YFGpUVGjCAp7kfMcosHYjVWLuPCy5C2MhoFS4mt9y4XdPBLXEf21JUS5DZeqgX",
  "key26": "24htZGykCj4qDkwF5FMC682WoBUTNcXERDEDhbTHs5KbAMpgU7BAaApxpDmzV1zaA4G6arU43GdCUukZjTeZB5Wp",
  "key27": "5yDJYeMM2RFzSQAHP73PnQMh6FWmZUCVAphS5yWv3AYazwdfLczs4NNNvqBb38hLmfA3YpgE4nErKfDuuHXy6ZJE",
  "key28": "3LCdt1Sa2nSEHt452WiK6jMWLU9m5F8QjHvhPmWCBCRGFmY6egzXTjwtG9FihkmivjLA41EjzeG8o1TbmBUPLXvm",
  "key29": "KRNYZDkxPZdt2xUvkDj8B31UFbeovJgSJZjhwhxqv5zZKBDquxGdnNF24gpXx3oREmWuH1C7MoR5VRPxZPsxJtK",
  "key30": "4afXVjWTjrivvZ5QqcuDFBw2GnCEnDsKdfnv1Fncjrc87kYfxWiSTWMgA3AYSgW2jo17y1fggNdiWJiPFrQMCDmS",
  "key31": "4bLHEkHL93qboZX6VMhNDzMwKEdZA6PaUf3PEZdg7WYkswRUcKcf9yUN9y77V7Pvqj8iPJ26SCiWJKQsbFt6nAF",
  "key32": "5tQx9YPVebm1jKHxTWzXc5EcH1R4sXHPkJTVw94eaVEzxTWnxq4Zk2TyQPtbgFwbrFLCTc5hvcZEmDU3RYPcaXWg",
  "key33": "43CVhjMJ1W5gwG9odyE5uS5u44faQZem5DUKYrCF8JbHu7YWXcokQTxHP55ntv6FoLNEWt4UnkcNUt9QQYnDTST3",
  "key34": "2KMUhjSdLk6DNs3NQxXqgMbQzWmr9K8DnezKAJaScE2YuHgdeni9Rrod5DUi5WD7R817UDu3Kzd8xU1mqTtnfW2J",
  "key35": "2JDkCd6DKpXUsrDdetD1E6t9wcdwHYrxoTxw4EZs3X4Yfc43o1xx3uwKeyiCvdMhTZFMb4rB9HgpwA1gw5rqftmt",
  "key36": "4bkEck1Pv2EviDVx5t941Ky5hJqYV2MkrN8KKQj56GWEduDGkXG5fbM63h5BMCX25zVzMpCj1vLqt9hiEvjh7ucD"
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
