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
    "5FWVPDUeNm9jpU7ruNbzPBBvxTxgq1LdAhM5bN6sWtA52DbToFBo6CzreCmfuXWLK4iAvEDwQUu8RRVM57m2gGbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMDvESKw8c7W3F79o2BZZAASCFKmq9nrv7TDBjQJr7asFc2vGvTpt5Pq2G15ZfsVoT3LPVspoiJUxrVp6Sm13xN",
  "key1": "4mtnAZjD3hKt5RKFXodJFVeRMsVgBfgKJX1qXr132Aqr69fmf7EkUGi4MhpgSebSWGpeGpP955CjMuqGMyFszHA8",
  "key2": "5Po1u3zVduL6ALQvh19Ry2tNTcaupTZxkYrJh44UBPXrYK3GAdY18eemKVq4scmDTHFwtmSdM55RRZQsJLcgYRZg",
  "key3": "5H6QMruXK4981tuQqVKh6KiXJAVdnDQfYkWrRnbBPA564d1V5utnSbTkXzrmcG2sTtvXNLFQ8DdNcC3LCG8v73b3",
  "key4": "3D1Q2LSAdiEmF6MLvTV4p9DnVw5TN4PaKKUqGZ7PxHGb7BECYmADi7Qbn9rCg1Ak8dfr9VQ9TN52eCAJfL7sXSum",
  "key5": "5GFv74cgqMLm5pM891LWcjwgP3om8vcBAKoTfPj6wCZV8DZDtYSb2dGtsAqBho2tRh7mbPF21n6FjdQtu8vP7mqL",
  "key6": "5gePgegDMZRqPwnx6Sh4aqoLnNuXuktw1p8PsMjU86bGJ1WY5N5KY8qp39orKoVCN91xA5Rgsncp2hN6h5go96va",
  "key7": "4xz4dvtUVzEvH7vqF2D8aCQUJnyL4nooAJP377gvxZtWoXKQWheWRP6TReXDjNiF2b1Ve7zpWSabN37c7DtSW23J",
  "key8": "3H8c68XEiBM81U2CTKnjGhMTFK3JfJpoJHQqWT8ouciP1VPZCnQpAJERVotsbphcPDirU28tAXBe5oMbkC74a6PQ",
  "key9": "Jwf6fE2chBJLRUwfSvHjc7LPLGGsvhCfMsVMmrv9SXR4DvqCrAPoycFXfQNsd6ahwFYySmPRkUYw3poqg9T6T4B",
  "key10": "4F1RLGr9jaoJfF9u85vPpYK82jodAgUtHRLw9Hc1NPByS9D2H3Lm3DJx527o7ZFSdpRCcnR98udpzRCXhBKVfiL",
  "key11": "4LVRLpj5nnypnJ9mQCHfup6s6NASN7adYurma8fxHU2PHNDjjYk7UQCjFRikmB1P1xVTXUsLYkvrMa5MXYcGRiUR",
  "key12": "4dR5ZH5DgycUPg3Y4m4PKvapW258uZQUHHzi2xVsoBHLPoRDPDnEdreKxsyseXrg8XbWVpsPptESBMpJenbfoNaS",
  "key13": "4CpfB5muVdEss5PpMGXpsQVGUazQVc8LgBTS5nupSKjcTQ276uqi6R1PaR9KK6a9jNcJjH1tn1S2DLMhpxqM6ttb",
  "key14": "5GF7uo94Auk7z8ZVVGkXhESv7xYgpgSHT5Yctus49NazjU6MhjxxFCA7YheKDcjgiTVHbFhsj5QTEsqQFUeF5JUt",
  "key15": "2Xh4ia56DBj7NbG5dsHwRSkLroYUJtMQCk2BhSnX2queBis719WYpwZMHFDCMjYJP1fTF8SQ8oFxE6Pu1ifZdxjg",
  "key16": "CuevfcjpP9ggeeBXDqnNLh6oHM52yNqSm2qucmfC1TwLSKqqvfbyTiFy6agAeUgf5npcMM9eePhqjS2PTWv2oVK",
  "key17": "65McL1BD2UpuT7CJ2ZA2F2NcWwqtshdE7cYS9M7qXUQcgxUz1Hk7qYZEoBGAEjWJZR6n1qFthpg3bCEjFZ3cpWFX",
  "key18": "3uCDZ8k3V9niD1eF8hyHGKSgjfvApgvyo6RwmCHhjmLRfDwaEU2u3ktXHaC3YnD4JQtZTer58fLZXULocJUoMrj3",
  "key19": "3Wt8tuhqK8grsb88JNXEEwcg7wBAxYiPFeNz1QuhjLGyv3sEUcG8LUSnYNYWUM9akPndLbQjTZaBAeqqwPUAjNQr",
  "key20": "5dtSgjGx16QMHU5XnEpbh8k5hQT75wi8GTNUN84N8RXWeiuCfRWJsBd5TKP6vVGN12fzYPF89xko2BDAZ5o1zCmA",
  "key21": "HT4xcqzeHz328irrxyaR55vd26PGuWDgwBEmRssdDaWCnwaFCaPU5jj1DZ8R8qXnWHoJDrJLP1in895mucaBkRJ",
  "key22": "5ZZyFfbyttD743tSLqEjW6KsZqAv2QPgKRPTN2o67tdWLCVgZNxhT56bcnXiqwaQoSsSei5FuGJEjmp6YmwB9PW",
  "key23": "2anLmHtYWLpeBSonG2DNowqZKXMWSw9eJT5ZyYBktN99snYr8PLNU87ThT7r9FVEG58dHjNAf4h18E77yFKMuDqr",
  "key24": "4eezDhWMzqZJdKQuvdnspAh8XkTF8FDMyisSVoF3kP4qwrTZkDc3oS2zyYr57UisnJeJJojZJzc9N57Zq9TQjYtk",
  "key25": "3brRxGHwmza98H4uGR6VB9toHwZhdoHU9GovksobkXxJ7PgsDNk9gCZTuQJh2PBVkSfnjGXzLd87G8nCbjMhg6Vt",
  "key26": "yUXvgGUcrwrm3RryxhXRsHqRWmdRGCHCsVcv2obWmJpyPrNgiZfYJdVWq67Q9fcyy91eRgABY6nVyJ8GShgsPzQ",
  "key27": "3jtPgviHumR5QPFpktU9nrwHAuphJektd8ymf27AdWzFt1wtx49NwiCpsWTjM8UuEzKRourdytxDoYsiuD9TouQG",
  "key28": "5bZga2fbn61d8yfrpXbirGwyy2eW7PKbVy7Aqb38TRSd34VELRoP3awtuSx4x7SAQ4giBqGeNEA4kbS9jmeURBhf",
  "key29": "2caGYXa3cc1MJTGm1DrDqTwMx54zNfUPqv9ExB51TwfxaLZTFLsPEBuAiwdP8Qe9M4tcGdRqYnKgpRCXoAAgDgq1",
  "key30": "9KRLDxAv9cmGxVk9UQVyLZ9D1KwbjeMBa4rhVVmskP6foXmgN3WdXnM7iQiaf83GzPuaQPSSdFXd6TBragvhm9w",
  "key31": "2FosqqMhKftsYMmyg4YrV8uG1Y8RGYZNqy2SAaV3fcMB33SXcRGohL6iWnnnzc1rSNhy6oMKTJWtxxuHW75WbNz2",
  "key32": "5hadDhKQCTUz7tmzrQxtEz56aJsfqekdxzFcxHZtf3GRJrJSSZ2kyEtyFk8t7x8G4DJu7ZP3HJ36dC24MeaNeoXT",
  "key33": "59W2gwXQ97ewHHo9PErKXEucaxkUCDj14RuHqYCax77LD8k1wmhfZUQteBAXirsdtDqBmBpSSVj49Qj7o1XbF2AP",
  "key34": "2MS4Khz8N2oCYGjHNQ34jGgeJThT7kXPARZW3unxUBozPTJL4VrDdbrsMw1XVTtaBGttnVLVqNhoDCKm6aXkRt74",
  "key35": "5Pt3h8ofaszrdg2cpe7eq4YwzonRrPkkWMa15v3exbvh6UhATPGeAmvv5XjEiDwZ8vi3wp6AApfS5h3phtseagPR",
  "key36": "4SCNHLwUmrfxsi83Wme7yH4R6njDs5tokN7MjVZhZDwhByHwF96EnhaC6kP3yPgsCLfQdTw4CPuDs8RCDUorVe3E",
  "key37": "5WGJYgow6Ji4yURYPZ8LjSPvP5Rix55U6mJS1dWpuovANrmpyM6mUUr92o2tWnV7CWnG8KoeE1fxbDehwrZcb3kR",
  "key38": "38o7Q6GMp17JgUhoidcSjf8zZTjAW6pJzzL5uLGSr9ivrhtCanpMw8mDWoeuBsWHrg5Xg8XQi2RkGTa2ST9k4qA"
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
