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
    "3R2bnbYN9gcDS8Sfy9PWcMPEQAsDAk957pzvVouJbvGWnqZ3XeJK1UGC34XnX19jqGEXY91yhovpvNjp2PELcdmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNZqgoRhzMxYSeDHsXDjhTwYZgv7W3Db5k9n7maxRiEXR6yDJCDbXVPKgcdPT3H8CAwbWkBAcpPVQ4KGDMBFLMS",
  "key1": "37TG6uCgcA3QSwC9WCTkHQmva9PervQsWB9SvwFQQwigLEcCbgMqu9BH1F4S399j7xYdgQvhi4x8KJy3LZ3kv6is",
  "key2": "2EV71oWLqBUHkmkWzd84itBUVrUUo83F85DUhUL12C964MCgdaRoTFLvuuRsrVDv3usCFjxJbAiRu3aCmm2sfzEc",
  "key3": "4kPUjiciheq2Git1d4tW17ZizjiwopVBUQDKySR7tBbYof6nVGZovrFfo5ZZknXpj1Z9M6R78jjCxtWo6fBFLWog",
  "key4": "2cocn4eu5XUGELw7cfLb6kV4hLiXDjbSn2bpfxWiUMd8DcHAZbQtq5vmNHgLi3WNqPJ4i4a8KYaWCMmzPuDnte6r",
  "key5": "3WUiunfCSwLHDR7eoDMqjexQKdiJz2XTe6hDbzVLeAXVCNJcqWjyuBwU5PFD76riuoucUaURjauf1qBGDjbixFtm",
  "key6": "4yz1knJg2P5yRPsb9SyaZJpJ2a5z42AY4W1xR8w9FbxgRhcFX4q6rfckmGE7AHAvpDGmKkhSzYVSMRHXLETzgbvT",
  "key7": "FEZshdy32L85ayroTDj8RN95RnQzC7dhTEzPhjBLmXuQESH56djQB5TUDFJWmsomKLkuvgVrX9Q6j4ryeVdP5Kt",
  "key8": "4zGnoJGb71PNxvCynKbf4Wwvqy14xHm7ksW7fDaYbE89qiXB1Z2rdKsDJ4srxNjox9AwMhwbGEbaRexDDJoNvGRA",
  "key9": "5DaFrudpEXZrxLJEW3aETPm1B1w5HFFwoXL6GUrgmsJm9ybhpfsVC1eajakeGrmKpCQAojD1JAdWVyPh8kVUjRVN",
  "key10": "63pasULH2ftPG856peM4LQ5fGSTqqG3vhrSxXsLc93ocBaKJL7MRoL1i7NJko6MQXcDugnZ4bYoqQ554stGEPJfZ",
  "key11": "5Zg7xfnGm9EFdG6UpTEseyNsyXC8sDciVs4V6SUjopzapfxQMQvG1oiXTpykTnaVsK9pHj5fX11h2H1V1UySWVSb",
  "key12": "hYMFPeq8Viamcm9jneHqRN27aM3NPidMtaaviFxk9KfNKeDLs94YQTiFytnQ24YwmNpuvadRGzufXVxZxWpJ11J",
  "key13": "ahxB1SHFwi6MZRgwpM7XyKS5GWFqjyP8LY4EGVFCQpn7GM6xvC5BjyJLTL6SVSy1JvCuMARWLbrgS4pHBo2t4Fz",
  "key14": "4A584XaUGdr54WbwUJaMk8FLToo4CpCXGiDC2tr2jJeWh8Qu48zM3hmaGD5g6n3KyWybTZk3Ch3jFYLMfLm6bm8C",
  "key15": "5BD8Cd3C5K6FU4fpBtWoZuh19LMNrDz2EQCCZRtXWts9npwF56Fa6pVLJWarqZPYqzRCqv6HmXrSghZCNEhXyNsC",
  "key16": "5MfwZtaiGQFfa2PDij1k7NmdyjXnT9oKB5h4VvPBGSTR1oEa8fZPGWr84nqAvSCiAGchoKsGoK29nCSDG81HWHTt",
  "key17": "2tSKUuAszaf7XnBv7w1g2Ho51syiK416v8EV5j95CF6uNnutKJ7349qep1Wh32asjWQ47VNcNxJkonhkba1isrcL",
  "key18": "vuBsvqgWi1Kv2bpPoUiYcRGHwSqfmkkaShQPeoNTLRMnkT6EoaErvs6YLyJuW5qBKEyJoeAZTJ4ZAjwqtAm2Htd",
  "key19": "4BGTheVzWBsJWMSXiHq2npzyhkgaZ7KVoZeayhaCAUo7Qh1ZjbSVCDtxKMjqPqCd5HTc7cLBi1w2cDi2diyZcUEU",
  "key20": "56t9BGNGKbqFwuF9UefYa5E51qEQwT8yjuuFHzdqREPfjwm9SGfpBuYD8idBW8SoCUo9NrVoUK4jwVgfNiQgd9x1",
  "key21": "min3zuKDdQTvCWFmdqsshgso9vK3xa4BEDBoW3yxzBLF17kmF25hwRtAEGkECFWV1T5v9y1xLm2Caf3TinXwHck",
  "key22": "3ccbUuX1wznXjGxB28Vcan2szjKNwjrUqnJDuyyso44KoF6bBjYpwBVh3jrx9XWmE86pGw3sEvzRv9ChfhiMEdPA",
  "key23": "3ebqWUzLwx6v4ecGyWo4auLNnWKgQQeMNJyzPXC7GsDTnXkdR89LPTMpqf8mhaP3bJGKGRY3L1fbL1jdqwKWdtVH",
  "key24": "3HVQcXLcfNjTuD8Hj5EfA9JHoZdNFfPnC462bw9w4UHquW4pSDHPLKExJYnnybuGrPy1Rdpk5Fh8NCtLEDqWFZTt",
  "key25": "2kxanyfvuuT9JyhJ5bKYNT1mH5wvEoQJZhNbKpyDAyYt3Km7dcGhTXZC8e9KhwqvLbNTjr2QrwZjo5icNkjLwby5",
  "key26": "UUQP9YB2uUNqaYUzeiPrWq9EuAEBnc89hXiYFi6CWSviwSp7cuf6UboPzjN7ADn7VQvM7jBSLUXKcRMRKkPM4xV",
  "key27": "4xrRsQnuYrvnJuNK46kWcwezhmbDTtAuQaUs5j4qdrhYUwDLqiTLK7xiNB9ED2pSqfL3mesMz4NbWwMmSbK7nBHY",
  "key28": "MmSCHBTyV5rajixjhcoe1bGrTAdbzzaBw4T6RdyHZxv9kEAi7ttwPXGAmRWTe9UJHbny4XrqwQDCpBFi35YPFxL",
  "key29": "4djwvbWWvNmsuA1tWVRLJA5sRreJCeRhYXqDtTdTrD8fMUtuvM2mbBho1Wtegijr7tvK6zCyLtksbivBmeKAH81",
  "key30": "57NantWjvvrjuHSRBgSjvj7zPbrAoTMsZHKtb6KHLo5guqrSdGa8jysPmqVnhoUWfA2XnpWrbSnarHcUJgjSMsW1",
  "key31": "611r7LaRiFER7DVpJMzyBe8UqkSjJZQPe8CjVkrFTuKaUZWMwnCJZVN8Uoudbv6W8S9mJtjLWAPiodiax5C6gnMB",
  "key32": "3uFpLKwuVChJFsgouvkHRk4YuZnxQ3o1UJqGZf2N14WLBcyokZSGePD2uXqUx6oRtFKbpe2RGCyX48mFquEkz6gT",
  "key33": "5RA3ioDGCouS7vMMaT1N8LSYZet6xaYFkYWemwxpXKWZ9aCd9WSmbxQZUpBPuKtnL95eZbmpPYGv6YcvJD8Nahos",
  "key34": "4VY7nptqcsQFyh8n4SxueV2py6PvXJhUtEUh5robbRQzLTFAdy4ymfycPrysG7LL3UUayU5K2YjP1E4ky5dooP4a",
  "key35": "5n4NJnxB8HNfsSp7RfV22NZL1BhMQhGfMu13L6gJqfAcuo1ciD8Gknxo4f7LV6AR7f3gMHwke4sf3u2X466YGFJL",
  "key36": "6XdEZNt84h1MgePJvNSXdDbLR4AhKQjpsmzqaPnf7RTERTD6MTWyTsy9nSXCSYkaDQfj8Gg7WGGqV8k88A4iK1k",
  "key37": "2bo6H5bh6HXVqkcUDCPoS6EDgaJGDyPDeobWmLvee7Je6WTeFsNNvB2amqJYfXnBz69KUBpRzCZMT53wLozJha3h",
  "key38": "2udGEeYLKYXMC6iGJdeS2HpNd5ryEi6Cbmgg8s8kib6h1X1wT4zBsXxR6mqT7sJuYPBFz9AuQE1pAdBWcJrnMPmu",
  "key39": "43seib6ZV6dkYTtdt4n9DMRkM5W5GiTZH1wX3EabX4cnxoDCGStCwZSGTM6MzXH3UKemQqQKqXabc3MyXv7CzqCa",
  "key40": "iqcL9KhP8uRQ66Qgw5jy9WsFBMmMt74CJv5dS5WA1TnunSidPcZ2GamdAUdU7aYZ4Tv8pqu2sy763X8obybxPBA",
  "key41": "5dPqn3Kr5HyyVnbxtXPkZui5fb72kXUggp653BmNkMQaUrxbursKVJ72ofNetnoyQ1eHFaqz6rGqZnS2ZUWTZGxC",
  "key42": "5psxVHBbTf55qE9RvWKs19u7y86UyTD2gRz612yLJuQnMNCsL818cxNQwTbN2TgNFV6oZcJxL3p9xGReeRRCc3Et",
  "key43": "HBakJhLfnXRpYYJiXy5GbR8UoEHjYa1kSSdtF2mDb25ejBL7AfAh2qeobQgxkxEteCyMASSQp4CykfStWTpXpaT"
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
