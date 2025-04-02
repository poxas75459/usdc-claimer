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
    "3GknAXRjDu2oA9Zut6kmDrzpEyohUpe5EmR733Z6U34iJjtFApMcWfoWtcKvi4JvxM1GaYL9Tn5XhJfzZ2bUoRVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RNiuLqh3Desi4gH2jCgzrriQ1P2XWp1JeakfDTGmcVeofU8NZ559RvrfwYvB3EAkD6wwCh5u9E882wnJguQQCvd",
  "key1": "2EbJcJ4pSJFCbV52RKZFPkibYRhFwbnffbUVU5HF6SNsDm5Mv4xDnda8b28jJMJ9trSE7cHtvYc6cgVd3QBXSXq2",
  "key2": "5VQChBm7XDfnDxPYG65vgYrqrSU56QBKFgCQva4XspQPvf9NTfgh6BLKHrPjg8Sd3pazdkt1E5TqM48Bgr1Z7GuM",
  "key3": "23o5GMuHmZHXDJztLScZwcx7ZigzxPQsYQo6NbvYAXUBDs4QHgV6iAaauzAKCh5PkXRrRg8e4egVvKvgMahyCU7B",
  "key4": "4TrQbLhBPKYv9y78PWhLZoYB376pAXDkGL1Xh5SE7WprozNtqqpV4Lk1GioywoXJdHoAzZ6muaoQLfURY6Tcw2et",
  "key5": "9k7NnTqTUwd4sF43eEHiSAKp841LDnzgYFnr8NdgF9EkYPy53pxPMbUxzWjwUw7rTa256k5WhZX94dcpYNpyUqG",
  "key6": "4cmRacgeiJwb1U619F2gZayh3qanvh6HLdFd49kPvPKW1h8v4Q8FbJDjw56MzHZEGvR3ho3CDMhBg2EK7jRtKZw5",
  "key7": "38LturRf93Fv9ixTxjHQyP1C7WApZPYmnFJLNEtk2KuopSJUDarKtvTAC8T4PksgAgiAHcqUTSCg18sPioDqNzxQ",
  "key8": "3fSL6Z4Nx96GNskhEQvFGNTfz24SajQwXmWBXUm3QPB6xKUxnoeRx9vbtPW1V4jgvChwXKV468Mv8uBqBkdxY9RA",
  "key9": "36bb6PyYsGT15QTPDFgH6bT9Yfiu4hbt1RxQiokWNpVjCkRp7nUefhrxup9ZLtxkXuox7NVj1F7rwxBeDFbJK9Gc",
  "key10": "34mfscMTDSZppe87BC4jFX7Jh2wAz76FsJm5UkCQqaHwWsbam2ZAgmbLhrYY55R4Xi27hrRbNyi3m6qGb3PqyGh7",
  "key11": "3pc9NfiMpCboM1yWpBMTS3CskCN2Tm2iUKKjxubjKm2xdHpFPYJHNcdDpvTb3WDALBgmfmZEmY58NLN4DvQtpqWU",
  "key12": "4Sb4SQFbn38ttpDT6j7WpxVupFXL7aYGfFMNy3ACojHTNMaHdHMt5jrggFxZdFk4yzYeAmQCynkSyecytgiQ3e8w",
  "key13": "4McGZ71zBYwaYCzYPXSWEMg6pYQdgVXPNsQozYeFoCw8J2VMWPycuivWvw88CBMs8aS3cL9FcFm2NYiKQEDkJD3d",
  "key14": "5criVfy1BhayKVGDthXQF1fanwjdGz8H4Py6A964kFxukQSJ1x1N3ZunfszfVHDhqyWzgV7LS834gm82TjgEv4aV",
  "key15": "2ZZi4Bw6k4njgdkxqbZt6YPkZWhZR7zMTje8n2tcTm2zVXYgi47AUanwwFnCC9r14m1FyZEEuxaEZjrYe5fQcWhA",
  "key16": "3DCU934AvnXFgvFR5dAnUxie1inD4ydzFFs6eBvT5ECtZjdnmDKoq9m5WMhUXv7qGt69iuRQnv3p8UL1F9eXneKr",
  "key17": "3gf7LBy1DJN1LiQVFhqsTGd5VTNvf7zGhheuWrd64SRM7inaRrget6MZcPk6PAfaMxTUx92SzNGEx4KDLrzBPw2Z",
  "key18": "3wAkATdZjsjcy4bCXdmM6BcU7KNpCoh3H4Xhd9FC5N5kGpqeJiCNARJ8eboeNZ5kMjwWrqLg9CnL6jEpYfLK3HjZ",
  "key19": "53iWELWiDB4SVNWhLbJt8z2inXfT4FZ29krbtcu2chJcw1BqtW6qe3iTvpwoeHXXDefUcBBtoXTU7Y3usH1hBL4D",
  "key20": "beiPZyGdaqnY5e3yv29FxgFehsJsXwZXi8sP9rPuaZ2vfQqyRaiTai8mtDJzGGBBATriLcny31kyV1aJukP9oy5",
  "key21": "TMLoLqYx83QueSEuawotYh3xtAhg1a7oUseEscm5HA3SzigcJa4rCS5r1ogR56gkC1WYhJ2cqyFRGr856bmky4F",
  "key22": "fSnqi31bycUtC61HhRvVhDsXLv718Jn9zLsDcHnE7w1kuSpU9YZz8qXKyq7dbw6XiDu2cHPMd3BvHRicd1vnAEj",
  "key23": "5mWfRgf3mLqmxZiQd7YziECNqyr2q6V7b47cfAWAryfXe4to7jgoEx3FDH5weccWsaiWxeUdQ5F2zt8Pr919e8GR",
  "key24": "ZzTYM3jGCsUwJpSGZTpTic3kFTzVvcLWAsr5FXio3ZQ2WekiaR42yktNog6d2YcZT2tGync2eqTHK1bxbuCo9TJ",
  "key25": "2tSYDAA4WTNTVijwmZdGB54HB9dC43meoRRE8kta4Q2smP2Jw86dNDDp3GZECrEsHRwRpQ45piNn6YN1P2Fvh2MA",
  "key26": "2iBDmSCfwaTzExrWX1CD4v4kEA16qBdvWUW92neGWg4Tsyud45XrmNUWz6EfpDjLuMgebV4yeGGEVUDxc9ZCPNJv",
  "key27": "3aUEqCD7QH2FKZmGeHixSVAL436PLuMr4CdyTKr9kbHEquaQpj2kiGwXdky23YkSeZzcHk55HFC8FRwSNG3X9aPh",
  "key28": "P4UZeMfb25EUuHmMQCzTFnptsQPwZToHURSMKxV9Q4Egshir2cvGweJ92VsYFLYpCXf5U1d5MPUWu5tuGBWrrLM",
  "key29": "4kNrzxUNBq4wEjREWdvK1p5c1xZCfTJ7cDuudrAouG91KpviYedkgAy5ymQSt7Rdt9N3jUAhjH6DU3TPZYgh2458",
  "key30": "v8RqD43AJktsWEvPxre4hbdVRDPhN16K6AJXEhe2wTvjSje9JHTWobn7EuuHJuGB7kiuskdYNsDF2eB6eUX19bJ",
  "key31": "4vCAVP99E5Ce7aWrj2NxaX1aBLp6F3FySRBhDw3vqdW4F9TWny3oZSkuWap5TWcAF1z3bvgxpL3vAMmPqhP6h3Hv",
  "key32": "2tJ69HCFSScLWza8uUfxujmbU1MeYyqJ7BinnqRBCRSKouKC6aMv4DCj46Tiwsi3yatgfGoh374TtVZZWrjkH9s5",
  "key33": "4nZ5bSJ7F5Fga7QEHwd75b7MaENMBjdHp88v1zNnSgEWAsPfHbzLv1AgSTU8HWp8tCQW211YbGsytSBenxX8AWqD",
  "key34": "4MhUH7ybN7HBps6cReDmsCnHBVEJEFVs5FcTsY49soqayQyLUdvP5b5eFog44pqLo8KHqVLCWTo4hX4QLdKg7vLZ",
  "key35": "4yV8x2MpZFLxkHYGzGp9VEUsZgDsNrgNUPgSCXFwRPmgnzHrXEWePrXdW7zvwfBLjXZBSV5Coq4CDMh4RqhLEXUF",
  "key36": "iGH5t3wNUGyJ84MNiLKkWGA4F3CQCvQJp8r4ZbtVeHP7FNAfLjPtSU4EYXq3NJQKgMeekR14ZKYY76k34ksbadG",
  "key37": "4X1f4Zamg14F31VH1nkDmbndLFwqjmqEbn6zRYsmHVSqshgoWp2xEjdFVtcMF4fzKRNrWf1Qp4XACyrNZ8xpiqFF",
  "key38": "2yaNcMb9RW8Q3coMoYceY92vQpSY6seRyQLxDAkafnqBzwAEetzPNv8JmZBiR3N57GrbzwXwBgtaGVihUtGYDU59",
  "key39": "2b23PatAyDiqS3rAGs1XT88Bz61V3LwvkRecyWCj3bFG5ydhKSpxN6NHxY3wZXbPFxaFjF2HMcc2Z4QA7HMWz9za",
  "key40": "CD67ECdV1kNMj4ah9v4ddiPGoRkvBJ9srBUVAxtXhu5uYUNaguNTzjzYsN2gpTQ6Cj1AjoJ6FHEKwo4RXdYUvm6",
  "key41": "Yn3x5KesiMh8nWq5kt7kUeQ64ZyatW5Yg2zekysSZgJchKRyXqTEdKijbw6BugUMsNmkoBaWDi4CbfgR39LzEmw",
  "key42": "4JHzFZUpPdT97BcSH5tm3X66aW952Z9X3zJR1v1paYnwMtHKXiN9iE4wW9rDk68m3tWFfqFMrUFzaekCnkR1WvJu"
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
