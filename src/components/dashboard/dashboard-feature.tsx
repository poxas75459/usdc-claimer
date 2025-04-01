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
    "2kETJmPvnq3gYwqv2upPehD3QsaG5j8WXVqz2kcyVRzftZoRC7f3gjcQ11ECaq7y4YCNpxWRxi79sbfnX5EYYDA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zUj26S4fkkJmdcAGQTUDYPGxbQPcHyS3m6py12p5zMWq8wtwtZKWPov4vCnqbyMPYGanh6oBCcMwYgLJUcT7Ay7",
  "key1": "2nbhd2jdLRzsi3UXRdUY13ksDm9Bb7YuRunMYHKiyjQihZW92fN9uMPqgx5tVeverxAtN2FuCLBUn39QpuxgwkUX",
  "key2": "3CqdjNibNmiEwpeJakiQATNmnnA98ihwQVxBaA1kB8XuxHwJx7KfPF11y8uawvA7hASEfFtVgVSBx2kioYFfr5s6",
  "key3": "56jAU3adysV4iMstBKferMGkojQucn5oHvMX9idpm9L4k8BSQE312CaL78E15zfAw7NjNRm6JyiCx7ZhqDwM5w7R",
  "key4": "3FaGyBxZWeGVH6agJra6H4aFSzfsNnReaxkd3yFN2s43kzeFxW2bRQmsFvVzyUd9r6dzSm91Jj45ZEjSwBopfj9Z",
  "key5": "3VqvwMcB54pp5tD4hbhCdY78VanMyy9dGUPstsWmoY3NAPCyV3mgJTCpQY9CAgvymXiaSwAX3aHXm69MbFd1sqzB",
  "key6": "2g2Nf9ohq2x3MYZh94DQjsMWmdXuVDABTN6yPHr7tutUzoU1Pg1BouRJC3CxrbdnZvcW6bJVHzoKcuHY6urBdk9B",
  "key7": "5CokinqPo8A6fjkdv97SMqwd79XRj5M5kCkWLYYT4mw2qmBKLWoswrXUWek9yL5iDDcTGHVMxf4qvRUoBmdVx887",
  "key8": "5Wz5HG4VPirEF9tdkrf6kuYFFTUBhV4JuhpCgcMxc82ZoNrwgSoVsUHKaZTvGpjK3ztNwbAo3PNEyu4pK6Hsm7Kx",
  "key9": "7PytzEscfbB4rg5ETGJSu5NkZyUQaPdZUnLNsGLNBA7fSwN8s32qFGXET1P2s8rDqVhZSP1ojU5zP86ULPxFgAz",
  "key10": "61WNdckSf5jj31QE4M4aXa8f6uHyViePYVSsGHxhErPHFvcutMAeKmH51F91DSC9wVQ4oQwhNqDjeLtFU5phPP2B",
  "key11": "3ccQJA4tBuUVtcKiMqbEP3X13aQQ1fRY2vMWRW8kPpbft4WMQjuEhHuzTdzJ8Z3RsF941DWVxh9WVDYCHvHWjGrA",
  "key12": "3aXshU8yLVJ8e9hghXr4iFPD1CjfDYkUecTxiks44CoTgXUF9DeaaeSCKnYPpHiSEDZEWxq4wCuiTpDhJctwHomS",
  "key13": "5nwAeamARufkxdPDbi9Ps7QTYhLGXCDKMB9gBbX2CLqioktRnQiQPrZ43p58HSLd44bgU3ZJJVoAGdWwDQX1oZ79",
  "key14": "3EVrr3fx8znJKVsafhvABjueqtnZJBZBT3iWwiHi4N3TYyF4L7ptUuu7c9F7JadrxMXTQbLW8LneYuPRH8DDeSt9",
  "key15": "5vohRppP7tsfPyo1MjEy6Wb3ksUw7scBFurtojPQfJro3zAj9tmTWspffqmDiHvfSmDffHMXU3WGCWepEsQHBqBD",
  "key16": "2mKtFq7vnwtHt7VykSafA3g8cfCJwXkUvrGJhKuxgWeJndipezTqxCae8GrNGvN4J3tzPwJ2yWuddpkGsd8uRYxH",
  "key17": "5ofk1UCTn6Bkq1EcagELuJhZhjgttbHugKYAiMjF9pFxiVQqAksMP6p5fum4kJntFvgC6JT39zcTsr5XvZiZHe7W",
  "key18": "4zx9pACmqoBBjKPDnqmV6We1WR3niUMCgvYZbpncH9KHqqXVuu4A2YVXWVPmnmjTDGgMaaHBpN5Q4r2Yac783taB",
  "key19": "xvbsmr5PHbXLnY8JWzMznvzNkAumqegTPm16yLbX1aUr7MaD1BzLBaTYnGxwFSuBSdQErX9spZaA4roH1X7udtc",
  "key20": "4QfpQfL35vnWgRJYPJDdki1QEekKq3GT6fsUppefKw2J3aneXgAGjFWxYzspD7zSS6fEUPcSjtXo7W2znUjNFXcA",
  "key21": "2wzoQhH3i7FHBnjGGEuhLbMn9Jn4BCBi1HMHJqFtT519QTt3EUbR4G9Z6tD6PET5fU2YWTcnRZyRfTDnMMmBN8KF",
  "key22": "BTJ1LRjjVzdamdd6DAzk8wyxhdJt5KEFN3sF4wYTUjquP9N4Co9iJYUzGgqMPUzedUc8PH2dVKDQ16oD3xARu4z",
  "key23": "5uFZphPbLZRb5iGKCPRoScMoZtbuqSm1sxDRymW7jeidPRBNSob3p3jbBUKoCb2XnEz878ziydFtH6y7ktU3ESuf",
  "key24": "mh5XVfe4BV8xG4NZewDiR4jq49X4YtDHZSKfVNjCobB25S4AaHKHAdoLq3FzEWf63jVqqeunpBFbAdBZpnzzEqU",
  "key25": "cmf2yh9y6EMSx1fXUjWhkiGtqjEpqN4M1w9F98fAvHGeG4n8u3FsrVLrX9FTL6GPa3jWyiXqCPvuY4DBJv8ntkk",
  "key26": "Hp1q6cw91QkpaQyxC5NbHU4JxPc33B1Ca927uri3YTiJ74LZjt2gyVn7spXi8zitBk46V8XkStbU4YbsuTbSfHu",
  "key27": "4C8L4W9R3AAfQQwfxkdu417XSKewiqW7wCa7DNW33ynmtrctW9ywVNiHZXk9nyUfcrrEin1UGFx6qX1DhGycVeyo",
  "key28": "5GzGaLbvPaobaHrKPLEBhsSLC9CHrdR3aY9is8Ve5DUWoHdtVYadp23dhGqBoQy5Xtuo16St6jgLzKRD7tXKQ8xQ",
  "key29": "yHTrTY7LvLgSNC1Hwxz3pwNQos97ChbsWC4sKqx4AWwYusxn1wHLk9qnMkWBicBdKnDWuyb3wNbLZd92KxYHBsU",
  "key30": "3uzu16nxEJaXS95WnxzvRy5Xf8si2chVkvcagrxBzvBaRs59ooy9jk9fd762RxfkFLnmonZs4vja4QthR7Apxv4p",
  "key31": "215kfBRvAJoopS7SPfM1q7FkNdkVohqYgxis4TAFeU3DTf5Ln8iEc2hQaEjkQmisJFCWmyPf4AKLsiBsd62sueVT",
  "key32": "6ycaFDHrXgEpCud95LSQGYHxTksbDNGFYWtbSfg8HdP9MQG2GdSGk7FxLaJMW1CTYbT5e7No9wKHsXG6KoVWRj6",
  "key33": "2gzN1yJYnoatqe2FNp9cV6yeULgn4FXSGgQzgspzGVXpHPEn8X2AiynppQqft8JHXDXJyb5gwBbiEwnbo4i659vS",
  "key34": "21v5sN7SSPmo6PVSjpdWac1j3dLXDVqhKavwpBwCUiJULccYXGvPPWx2crnrsu67j1cmdp6z9XmQ3EJuZZ6fi1HK",
  "key35": "5c3gkGmL4L71EK38PQRa1C6jG63ekf5Grakp2bCM5q24Zkgzny9tNT5suvatyEJpMXFnrQvzRSSXPuK82rSnvyDg",
  "key36": "24mBnYJEyFwgPtzrmV18yMngBzdPnbDvjcsLEq4cBs3RaQ3bD9XCEyT2Ty5HhWUnLY1h2f33fqBGg7y4wUWKakdC",
  "key37": "2DAGEuGw685PCqzeDv1NhdLXGXwXAhCGbLS5eUDArfj5UKWhXrrftjQ7HqVAPWyGhvbo6SehyZxTvqbQRGeE61KY",
  "key38": "3sZj2oshqoR8xMWML5JepTeT1cNKCGeMNnqiqreQ2KFKxnDPwBZ5zDCSvwtNSBaP4BvTgaatwDdPPtqSoD668wBf",
  "key39": "4nyDkapyvD6TEbzYMLELCF76Kvc7utkyq9DE8Fdd871nsC99EH7QuPsDFjN1WaDgcBDRHyxFhdE2N6EWrnemZwo4",
  "key40": "3UnVhgAAq4X8ScjYwBMBBk7Gh82VqSMW9E6KBqsTLTkxxCLbED7ZNgeEnDjcQcijkEdjboyXnVjXL7rukKYnS1Rj",
  "key41": "5TpgayTtVas3pMARbDSxx75tuYaKkqzrSee9qFYxykp1jGkJsuiDubVFvYeHHDAksoMSun6Ev6AeQPH7xsH8H6sU",
  "key42": "5urqUyHJuiWZGQQVLHsG5qQ6e2LUEFRYwfbyDYHP6qYLVbGps93RmWLyVPx3H1d6bKebpVcwtSQPVDqLvA87kAuL"
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
