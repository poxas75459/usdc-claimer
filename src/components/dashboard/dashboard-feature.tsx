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
    "5PmGq6KfatsFzEP7PhnrM7MFTzpJ8uSzg9hJswcwNvMTZCejDpJ3Pho7pK6Pat7SmJCKsRiZ5gUXXizGSApTMd4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wb5PTWNJwRS8TSCtWntSQRP1RZn5V2T3hNjpgL86Z3D2QNfv4UxKPZRhm64uy2bCDxtemdLKKMAceqWiZAhRwEa",
  "key1": "2DJWxofieLFXocaVBqpzo7Nft5tk8dSJUs9eGCriPZZVpndzmgqRocs93U5ZFMj5G6Revp3TcZbgct9hX1iwoA9e",
  "key2": "3epb8Ruhs21udZWCUhBAF8LpFZNKdczmZEp5JKxrBrfZ9XJxPREMoLTy1gjLLLBKt8KLU7SetiLocsbnVrSPNF6m",
  "key3": "2ax1u13SEK6WTtTt5xLy6PHCeUteCgD3QByNh72fCu2M1W4C24Ybqn9SUq1B6G91vtBwLwPhpH1rpsLAH3ccZ7oX",
  "key4": "3GMDofAryyytrtHaNPH7K4rFjeGfBEmk48UgxgMqT9FPLSMn9Cox6jWgyTVP7QjvFGitntYedYRQjPQzTiSqNsTb",
  "key5": "2AGNu222WHJHF99YovCo3Vgyfihk7sWfoEeVr3Xo6cJdUjenhSqemyUJoGtV6HNjwy6QVDQVDcV8hpFXzsNU8ZYy",
  "key6": "5Z3EpjKKFmgayuKUAxBRJ5BkPExRWFa1MbiHV2kuKk6GnBncu6my5HAYTZkcmsABnMRGMX8421cAk6qLABdUvuY",
  "key7": "5KV1uhS6bTiUc5r3wpdFZKZR7f753xsPwxaJTii7jbmnygp9SFz533J8DRCPZPEugdH8fzNbVXbUU1B6YrDERoFG",
  "key8": "7h47BMusatvkrMmGaH5DtUXdzKMqnVEKatk6sqKrMeQXGMWPeYLyrWdjYz4XFAoaTYPspkAFfdr3Ya79hsVTDPC",
  "key9": "5Z8uy1gjxMSgZBTiXf5LtAjpP1AtAg4T7uk7EE4LmcTaXo6N43DB95tPu2GqzzqUN5mHRhsXpUCnGSNMw18UGVyw",
  "key10": "5G6LV18Gq9S3e7yvAecLyus6bxnpFWnREppF27dMzsjFrPsYfk5VkJohH9KSmcqgvy9gQbxnxfUMbRVjLujBtFPo",
  "key11": "3egKDARGkpsqdDBWk4ZNVCz8s5EXphqzeNZWwCV15TjvtDJyASFsB8mZBRj3RtUKpXrpesoxLQEvoYFq5M3snYcw",
  "key12": "5PC6C94RVeaZPHeZ7Qtmz8ZJvHP3vfNQGbQcrxcmhhUf5EXqKcVHKvf15gsvXBVHi8JD4mVj12y17XUywATsU15Z",
  "key13": "5VyBm74izPxG12Hr2zPoAqCipjTMNENNbtTp9Y2bMoWy2E6kYGvvUdGc19x7UdFkvzQTAEWrzWSganGWePELwk7u",
  "key14": "3XXwv4Cooguhwt5KmqkvpgQn5tgJ75feoYaWSPqNJCUxfEfkrjYdWLN2ksAQTnLrvRGXazaQFHPyPrUqeQtpc2z",
  "key15": "4PjeVkJg7vnCRyAHZmzpjPuYFXKms3fc9qMYwwaCsMyYFsFZHAcuyK37Xw3ruK8TGtEqFSs8NYWGozg5rLQ6mG3y",
  "key16": "3ZjPxrA5qpamQ7ZDNfHsZsx1oSjVjyNoe9zzt7np7QX5cPN2kH8zMKq5FZq34hUaAzhFk56g2YmmX1iY9YewuNN5",
  "key17": "4fp6VvE3HhXABPvv3afR1voyhWAeoBaHBEt2wSSWcs3XJg1o1BsvkcqYx9jsS9RwSuDbJRTQwhEzD1QtTNQUY4oz",
  "key18": "HYGkhgxVJH3kyKfQW9U1p3JpN2GTzZXynpAtboieY814sKgvjipXQ8TgAs9Zp8ijCRykTLwv1b1Th3Kw7JQRZDX",
  "key19": "3SBuTcBZDa2bNdsATnKnY7HDUiBY8WbrrH8zVx4ttvaEnMyTFopcoj6e6GNqXNaVmw7M5J1qqwGjWtVZ5FAfLuXY",
  "key20": "3R2pgpaNDBghytGto5qpZ8gLveTfFmxKJN4GU8NZwawb3tQ65MVgVrR9XJ8A77fQRf4zX7NkgnbctCLEXF2bYrK1",
  "key21": "2jugcsvaB1tV9aHZqyFzjHU9u3qLwygFwPM1coWkK6FED2rYd6rvj3QKdnavQh9iTd5oCAXqni2hg1JSim7NaKHu",
  "key22": "4sWnhqGZP6VTZnRFjmpkSH4BgVgkucGSzVMzEzDsNrwswZ5Hi8Ni3VXuiwA4NVBzUeq1Hmv7mLKHksmUcXmvMAQ6",
  "key23": "3UPTve3NMd8a7DAKPC3incm2c9GmLkJz5yqKFzoVz6JZbQDjKPZ6FCmeaVYxNGPSDSmgQQnU672cX5Nyf1bycq7W",
  "key24": "2i1eeLUWdnn69FFDDNmSPk2xxUFUzaxZsxUwUFftsHrqyLLnF8PWZ52CnUfF9rmm12w4ebxJVTkWA7MQKqE8WJMY",
  "key25": "4pYAsk9SaZ3pFFwydE3Bcc4oE8P2MUL6jixfqq5Kw5C4mk13UjHtmATNYwWWGkF179HBRpwmX1oo2LV9QAsgajB6",
  "key26": "5hvchLthAWEtkdH2vxZFnGwVB6xSLcJB1BJziMRQnwx7XbSZdZ3UxaQLbT8jgygViWh5FP5ktFqRXzxccpxGp1bp",
  "key27": "5MrwZusJXUnFviavaSQ5zEkG3g7kgFmDt62Rpaea3eHaEZQzFBpNhNpcdwLvLw1LrNcnKP26LwHwXeErpfSBSzqT",
  "key28": "2szHA5aKuHihsTBLCMaH9APzXPL24T2N6ME3Qjc214f4Jg2WsiqGVKT1xTNxYHF1P8T254FKkdGXnGrycBCB5hnQ",
  "key29": "5QtK7wNxQWfaarQPJgQoCXqFUye7f2ySxbbLGcgtkVeSDTikR7SfcPUNWRES9L85KpdYtyGfZ4rH7RcYMfrvW6yg",
  "key30": "dxMCmMUsoCo4ZzZkGScQ4uBB5F6g3M3ApbS2ncvg6UoA3z6dcFhr9rpQANGG2pqGC55bwwPSwX4QHiQWCcyQWes",
  "key31": "228ceF7wLpQDoUCr6ypJX68JRLPk4mjHE2ZjKv4VNboRu7ivHFh5GCoa4UhFRttsfG46wbmVax52ELRLb8cT4pNG",
  "key32": "4A5AriCWJfAF2ysMm3DHDpzCSCh9nCHWXwpirwoT3h2YYXpSiuUHQLW6Mb88zqAmc1EFfqHF46tiCJDH8fF1X93N",
  "key33": "5dA3AztBvdGLZwTrEziz8NAnTdogjzhreXPnaj9F9DST7gpGrPhJfCnre3xFJNiLVC6NAXiR1aXVotoMKpvBP9Bi",
  "key34": "4vkxsqhLoJ7fPtiSTD4nqNKk1DprBFAd7SuV1NhY84bGdSCqxXgRTt4ukQMrD6HFSSv9FAc3VnDgUq2BEQRYHR5o",
  "key35": "4d1P7kPhWu6hQDWGs1ReDUFX6U76XrorCAb33a92zj2wHyifnZYUvmZbmT1P27cThTbwpQrLH2W2zDn3bVax8L49"
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
