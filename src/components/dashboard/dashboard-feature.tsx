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
    "2wjSDcn1JHW7r5txdFmJDSvpEjkMMzRP5SD4FhRiiSZrRKZzJ5Y3vcAhW6kFAx9v4aNCv1W7nSv7zGQzeWvQ1Kgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5boxRi7kW1hBNciH67mDks8KhWZ5euVDz4oK77emz5nkCJwFD5wwbdqfxwgXuRvibHVSeNkakPDpht7p6ePkHc",
  "key1": "2ZMjdrRMBmaNaTVbYM4Pj6iSGSYu5paNu2Qc9mcihAxTeGEYppH1SiEwJhtGKMXjDHmJM7yG4JmbWwjvKQ8H9YYE",
  "key2": "3XHBuyzHdcJkvTVXMDkQiznGZXbRoGhdtBQW5okD9v3YH6bLbiWsF5sNzMbf41RPmkLDwDUrZa57TXDzkQaZaA6y",
  "key3": "56UFfyYDmZiH7aDkmepqYKKg64vTnVYvX27y6nhVVYHLc9pSMAKxBTtBLuHhShApBwNqV8V9sMT5sYyouqYCSTht",
  "key4": "vssJjoshubHHB38bMF7Pih31Dzmf6wp1xXZgndtq17j6vZZUzW5J7Q9kZB33hWFmDsAHvDcoTrNcL5xu2wxN9VX",
  "key5": "4wBEb6fgjghyq87DGyGuWgtgEUMjqEkj4QVFBGuSfoiqwTSEPJLQBTFEHdLL3m1GjqGhceKQ3Yvt45uqL1LvPREv",
  "key6": "5BJr7fnx62eEZijpaLizLRs4kRKrvxWLZeuC91GNCX6pYWS3eeoCTKnyZwLLRVjNgbfRx8CUVPgDLNsYWiGa5DCQ",
  "key7": "3YWW5FJiMqJRMGj3dg4DimCgXf1XkDpE8pgR8p9bbcwweHMohSbsEqRAFsXp3odiwPdDCf3aYhbPg49gXy92zrPh",
  "key8": "3FJER6X1qndLDsbURVkHLgfNrUKzBw2QJtAekoaUUEt2BLFbg9BbvMCrQD9PTTnuGKvznteg91Z7HC1833V5uBU4",
  "key9": "vUAfJxi21iLyxCmAcoU43saVRwBRXAtD3hckJKahY9RB9Vw9n8AR3EcK92g7YEQDMCYvH6dwv3HnPoQFiRVjPbN",
  "key10": "2nNzFsdrwyRYDcrQCqgsjwD27dNTddDFGfs1yLSipNhh9cyC2GiDi8fJu5UaygqCRRFLhTUh6dWUKBf5AwxXyKwb",
  "key11": "4nGhjwwkFBwcCqT4rfExERHaYXHzaUvAViADPJRq35gruzWeKG639p6GBzH28aKJhisbj9GB48CJJK7gLrEVfgvM",
  "key12": "7SySHTnAc3cXMDPqist8ihkrMNpKFR6tsPymu9Mnzdqre57U9jDA5KrBj3u8cW2uxJ7d3mtNnQNmKpKnASbC7Pm",
  "key13": "4rfSae4Xd5Vr4VWimKBhfhti4BBrDxrqcoGz8FYTSsWRBmWRY9buBC5kvpKXmACQVKoftDKVioXp9BNEAP3oKrEM",
  "key14": "2YfAQiQmt4YjLxudc1okRGWKyQ9J8ZxWJP7dZ6xtHAvA9JW8VeF4znZAsFytG61U4LEEbtobknLLanQELQAjwn3S",
  "key15": "4iPRcHmovhJw1SPR87NNtBs3mxMQCoQUsBg3U3K6asPQQSAKwfvbDUy1LBXzhM7DsZqVaKQ97zPQVGfvxGd1sbKw",
  "key16": "3ACFdsmzXRY3jcyPe4ru29DUo8GtyHN6vxpdsWsrSbJu8v7w8toTgiVY1TPv5FxFMjqktGAS2kXfyt1pwYGMXwEk",
  "key17": "q9DXNcTU8BAyQ7H3PPsbpjAAAwSc4ddDkL2YMK9EkvX1XYuM9EiMnZmrRgyj6d5qQLFBvGRmL94qJ8DEKxLVxsk",
  "key18": "rcwUaruEVcgtZ56xnMGhuT2dsjRUQFKp7otkbzySpM3nSUYAopk6GaDgppqWAjmkQtU5pd3SaXLGQtUBXFchNbD",
  "key19": "2omgLfvahYjJS3BjdCENpHpXfTszAXtgTgmEWrobdwWzV143KXPbrcGKKALwUA1oNNKP463hfdQRbaJvg2DbaEpK",
  "key20": "V9J3b3GqvB89AbRUcwn8L6aiYoGoMcQRn78pwtWpwWooGQEnUznCG3Ag3BCP8A3opxmfbmWDe5yuRkq2eWyW4oR",
  "key21": "cozBnW6uTeSaDxbnpuuGbvyh9C7arX3NBCknxgzxkvaYmU1NZmuyoKEBQtw6ch5JtgDgk5aaH8QhoRsvj15jni6",
  "key22": "2ckpHvWLEGfRuB6xvgZRdfAjyrbfJJmSFEgKpkCHbBXuJJNzXBSKDdhEhyJ4j5GNJ46kVzPUnwWDGoGniZnMCNk3",
  "key23": "4VVrvGyKAotWh5DH9z4bfrVW6xePnoESWYFSwK5fqb5hQjUu4vnec4P5nnsrAtEfRWMrRciqBjewud3AWyUsSoab",
  "key24": "AXaz9XDtCGaNxqDGrUZKgHA9KHkZMXK9Fja2qEF3VztK2RojNYjBN2X5B7ufZoJfTcvWTNxBFhD7Cjwu4asPQNG",
  "key25": "641Tb9uyL9dAgrQsk7HqwyQNqoPA4fS4Z5HKFUeZSgNHhhDYeANLFYun9Y4GptpsTyw8Ktzth6ukJ2PtvEYacMA3",
  "key26": "3HBrqkhu6SjmrPv2XXEbCNzRAD7FqMyt7TomnowQta4wyyisZbH2BbgB7wdeXqeZ2P1yhaowtGoi81ts7zoXQnCa",
  "key27": "ACVrn5vfZrQA4DRtXyzoTDjDfFDUcuko9uq2CiDHztJe9t29cAQfwqyJFvj3GVuuvpnRidmFRFCFXekvsrQ7qpG",
  "key28": "3ErctAMcv8JrTwNLXLPcPaWngxzd3GbGsbWH5n1k3HCVR7dcbFsTjsgXAFN1vtvbgHwaC2Bfv4S2QxaRpFehnBns",
  "key29": "3w1U9pHu56CBKcJbEj7UcovMttyJL3tGtM15uzX6KJzHhDNiDY9cUnQcLi78cEYdC2nwzL9GWQMNqXGfyLQVKXEM",
  "key30": "5uNRwJLtA4c8a553tt9k1CKZWV2hGhfsGQF3LhjM2LdAsvQccTh3DmLzSXYD5H5JwQDdPJu8BZ9tuzZLpKv3VACT",
  "key31": "4Az7Ph3VcRKNrM9S2WaHsnQiyFTRkofpuwvGRpqvWribjTsCM5TRVpq9Ek4K5zvWcoVpH8TBskPG1gunoTqZwa8D",
  "key32": "5vHkAiGDvf3xAVhePbV9xC8mCBYrx6KWJ9ynrdbHkEXykLwxiyGq77Hssxy1ZDTgWk9DQx85SUn5qWFrYJcrZBwK",
  "key33": "2oVDTPrsNoL5mH4133FJ8YpFjSPyHEK6TEZVmh6npuA66mEK6fM7Cr3AttNbhSrNhEDm5fVRJzH6mk6ZiV9UUrf4",
  "key34": "47EvPPYvzPoYhgmU8Vub6MjkBBe8Gdpz43WprPeiKiWD2YZMhQxmfEigGEX3L4xMmjLEY5D3baTfMhCLLLMCBPUt",
  "key35": "5CVyNmBC38mgioMd5Rbp8yJHuDmXPskLD2QeR53ud4ke2kEAe22J7fSZibEMPTWpKZCny1NCGRA6XQ1ePMVYwm97",
  "key36": "2H1Coj1jw5FNr7LxdxgcLECLJsnLR4ky4psYpYNQG6HSzmDQX4kwZQxERtnqpE39JKMPRrtCT2DBU1QpZA6WTb1h",
  "key37": "2AHGnEADTJwgnoBdQtyajie2QAjWu4M7Gf5LJoufjiAmDBDy6W7vhZ8AbwAUA4TxcASyJ6JnNLGibG9B1yhS6KVA",
  "key38": "L1n99YdufRj6jzqx1gm3BZnJQV2fGN1c9akcCPQN43ovjRkbWPT6nymZruJfSH1xWJH4HhfjYmfJiBdT1prUCXk",
  "key39": "4Q6kQWoewT8CJpyxRKR6qyeBcbzxBtb7qYT33i7yt5Y3osN9L16av5h23WvvXFzdbd8SWdkKwXy1GnfLMTRFPLnS",
  "key40": "9tJ1UvpSMAY8AQo6HSRie2jpBXwirhK9qiAPTBJeABwEDRAvkryQxF4YEqzWQtQZhHXCEECCwdeVEovsKDQdGmz",
  "key41": "oytBqRfgSL82aCfL19jrJupGSUqwW2sSyjFgHcBcD76X1TRLMPBW3Q7TV9x9oR8tRTu3skd5bMAMXMPnX8Ucb9D",
  "key42": "3uaeHwGpWVmH2Ugw9BfJnCJHKcTEhbgzHy4YM78rJv2KHK35GFrN2ZkJuKTxA2dXSQDkBJUGoucDBioQWbTm3qvP",
  "key43": "2U9mLCR1athoDK5XXSY4BBsLQ6byTSV52Esiv2AqM2JXuyDGyf7Wh97HyaZ3ELiQ9kB7FrPVoqENBkcpQTknGKdF",
  "key44": "4Fkadhk17bStnt4zhvS6Xo5gm8zVb67pqYSc4hBShemf2hHn2ZhfKC29xBrj6X4kTyTdEq41AZsxY3RTCAaUmLXi",
  "key45": "2w8h3syikL6o5oik8W8oKk2HRQGYv5Yc8raJT6xNMxcjDyukfX6hq1s69FwLJzepG63PW6rdZwS91f3GbUFEFRFw",
  "key46": "o3RKn25gH3UkEXVyp7JwoJFKihNEtbbtdUjanNNbiqxDNWvP26no8mCkhqhainXRDNDHkH3pRZL5pfVNtGWyADu"
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
