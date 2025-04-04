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
    "UdTLaYywudMCXqw83YH4bMTRjUVAtgaYGZ44kNSrPzUtjggzYb2aSqZEeZrXGvy6SBDa9owDC5VmnzQgnDi9RYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoVSYvoGWTPGpFSr486npPnKtUVApvgpjNL4W6CTberMegobQH4aRRizgfrtgF4v414TDQFcWctjDzKc92RKSsG",
  "key1": "3VFfoa38eUWqwA9MSgvfTdYkJ3szqqcoNEC6hKPEuyns6vGQVdyANTBwjfBJaD4WL9MuNbqkH9YbHHKJUt3J1BDe",
  "key2": "4HsL5d1T6nCiKPvpnyijyuWLBMbuQHYvUAZ9Knab7iWKhrDt3AufTdLYwCaRtvj43TZjsPGgD1842coiJ7JbYkSr",
  "key3": "HiwdU18LwYXSouKZs8FpTCVXwpHqtmJWyaFcW971eWddHwqfTAHpZyBtZ1hnmk4sqiKyKU4UdwCks4yunscKKJj",
  "key4": "3qCXBi6EfZqFw5oFDSWkUXyUta9eriQwijo4UQTk5NRGKw9a5zrHFSGX82v3U8pAK1zaoSLJmMBQpuz9CemRoxn6",
  "key5": "2f2ASf412xmL7xH7bQqn4j1Syy9zJx8ta1qERiWDxhCFk9xjynciQjtXghphtBiQ6PAmSpNTvA5poHgNz1V2rLpa",
  "key6": "tVNcgJHexNWJ1QgCDvW99MzehUEbwe37cvVZLQsmSeMXjwj2PggHcAcRMf7Fd6jdLPLm35MuTWFLx9hX77VCG9m",
  "key7": "3fACTaeV6jxegbjLVLtGqdj9Zscm7XNohkEFJ3wc2WNwLiPq6HDEXMJQtQpzENpoDginxtJVV7yf673yuyik7E1y",
  "key8": "4HaH7xrXEe17rih22DDdWycTNgufaoJpGi6J83NUC9aXZ7NRYx5wRdfSh8beD5huRuekdP8YYbZmhZSMB4sTSVAs",
  "key9": "2aUHZgP3K33LVdxDMWVrUwfexBu8yWWVTN41YAxVrfJd4MTNLZxYMGdhP1mE8zny8tjLECFySFptLRBwhGMZj1Ve",
  "key10": "LzmRWyuL6V8vvJJZVLuoZYxpaoKfyPVtGQ2mMHmAH9xipDULZjQHAkNwFa1JEFREHzXaYFsgx8JrKrSsGC8uPvc",
  "key11": "2cM7dauf88ixxMF17ENWExYKqhtDN4fLpQ4x5Gbx8Ai5p4UMyd2JUexScGhMbi2mfzPt2Q4Ej2kKwa1M5GWuv9op",
  "key12": "8uYVAYgXEcN18MnsBjMDKeuVvLQDSfhGd9da4fW7aS2vjVP4jn3cA5246PoTWLKhMDdAKhbyCxbZUyfzbftXp7M",
  "key13": "TZyhNvDjQUztNhrErYNHxXMVLhGSFYNPEUZJBeLLftFkutV1bonvYaNoGkk1opVBF6wnZpjPMwRBQed6AsBzUso",
  "key14": "24Bsc6X3AsqNjynFtyTtaxzEFouB8a2ZEc8MGkMcn1t2WPD8vjnXQvfsd9XCfpAY4n78E6eC8QVG1aVeSND1sDhg",
  "key15": "QW5h8zxWgDR5Tnu4A3ktptypGubz2wDgeX8B17RTTfLtTQyTdGeJ1BMmCCawkke6bVdTDuMgZjNky5BJMBa98yZ",
  "key16": "3D4B2o27n23uc6EzntqeoAQ9jYUt19QXMbVwmViket274zzBvZghBNyzZcKn5UcaC22aB9dHvV7KXXaYQWTYgaUJ",
  "key17": "E7nChjM97DqxcGKLg5Ec4AyawWvCVTKYBaZY2VSLUdHe5ck5W5zU1nWziiPDJSg1hpD8uteP7Mpt2eb69Vwy9yc",
  "key18": "2oYGLE4UY1YCrv9XtAEavqftBDTVaAmTfrtHSjbMds55ZcPqiE8qK8ugDHwEELerxfDgkEK1ka7DXYD3Qj2AUFLi",
  "key19": "2WVUfphZq1FAXW9jUtiqucKfWR4y8BGt9JcbTSRfspmYw36pQDJVB63VYHHxLrFvd1qekeXqu2GouAuEsgD1cS8D",
  "key20": "4z8x2xua87zHR6XuQUdRMjTEEX9YR7i9wQjLXG2sR2BWtNXHjMpVGR9WgcpTZqBetH7Mwn7qUHp5Q13XPhHKrLue",
  "key21": "3Yv54cCP1mXNGvSmytjJxFB7PaecWPUGttLHgYjKtPXo5wPCa7f2UH7YKrtc7NEe3hsSLjVdGuq8Qoy3xnGtia4b",
  "key22": "3wSQTtGG5RkXCVFrp1exk3PwLvR7WmZqGWprFKijUr49mwa6uSt5EG8nVoxCUTG6wvriCgmYxz5YSsAhM68hjLtC",
  "key23": "2YnTGQpDeafasrBRBQbFT9zxSnhBq4gZ73o5F1ZcB8bSGXbYQashxSfHqFDS9VgkV4XE2CVR9R1HNiSwmNgMorza",
  "key24": "SpsM3kpYtB6j4gH6cZFhKAxt6qo9puvDQDdK1PCx5ZdzTAqPKonsJFJ39Fein1BYApDJLkxV8zNzZuiFeAiTGik",
  "key25": "3KvnBvurhdvQNLRpCVzVZ62fPoBYe41GbJsWbRFry8H6V6YMspQUfzMrvQ3xu737xi4EYDx4yaNq2Lcc3sky2e4R",
  "key26": "22Tfx1fHwMy1iPNDLkW4MDAxL5y7CvDfLLgT7wNUH2zbBonpa9P1GFPaxAHbZCzjApx2qQutpV1cYZMYGkoqmAHS",
  "key27": "5Z9Akebm3KQccK6JhywqW3VYBYxC9SB5wopDgXbTjvtgpz1fq3h7GYedwDDZmiKQ93FzxZETeavjcsnLoDMR8WR2",
  "key28": "va7EszK3TDGtQMJTZMFKtWnRyxdW6zuuPbkVQVd9FVTD9bZjJdVfWzfL6oSXkf4gJ5KGPUYxidLEcwAzUizwmLy",
  "key29": "rmpdeTaXS4XmibyNJhNy4smPLPFeq2tgR5n93LMixXpCs1iaxdRDQ76YdK1zpWZFH8HNrYm4yQ8pfa4ZKom84PC",
  "key30": "24Nqxwr6Vgp5S1hAxdL1bwgjFxxRG4ygxtC1KRRWvBs3oKM2mddnSMoDhTSpbcsr9kfDonvUs7Gc6AE1W7iwhsq8",
  "key31": "4sjqAE8cJqpfCbbtQxfG2VPw6gePPxjq1Phn7MnThFf4W8jiqSDmFLbh1ExJiiHo1DVfYM75z8HoAarTd9AuHb4",
  "key32": "3M5PhgyFwKzTVto5E22PXYqQKoLC7iZrqa2bdweK61QV8ZSq4hQfVkApD3r1p85aC4PGMUWSqSnyfriDhpKeQMdZ",
  "key33": "2XK36gsKKyioNm4Su64ESJmzzKt1ogtNb6MEK8FEdHySspb2aUvpA4erVbsAz7yXs49tcwTtR7N54pSviVtTpiGE",
  "key34": "33BPQeCShQFMEiFz7DPw8MaQPA9nSLNAWLtaPApG5K9fELqfwfcLAqwGZ74mSxEzNDRD7Ahd299hkiME2tZ4cWoc"
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
