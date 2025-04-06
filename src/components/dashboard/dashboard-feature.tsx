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
    "4Bm3faoDp2167ApY84iAcEof5zbuo9RqZQvfBTZvEphGE3hZ71mdkJtYKvuxZr4GnTpBYGCvC1Rbpbf5X2dN29z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CUK3hvQptzuAQtaFMGL5scRBcHSfBV9KS3A1S95awsSeFPM95cSnJbqvTKFE6mjFxbvy8wxVPNAv4UURmGdg3T",
  "key1": "5FebRiApBqYeNwWp3tcUdQ314gfBLtzhXpQpEtEmgopHkN7y6GR7xHAGUZepeRYcG5ii1a6oXnfPWwNWahHjuJmv",
  "key2": "4wS9hs9PVqUzHjw1wSSsNpbr2iYtY7hZGDMQ77bCwWHYp9Dr7NLbobDQu64wSGJ8GVQ72uBnEM3Qg7R2biCvWamU",
  "key3": "uTikrqteLwohsy6D1pB1MK4NuUHfHkRTFyT43CYfaGeCysZntC2KnPXtJiZJt46STb6X6Tb5nvpVkxb2NxaEtq1",
  "key4": "5zgn47rXvu4jrDhuV8misJktfrJt42SMmAUwmV7JTapv4u4qPikY6iDpMScUQoVuN97GiXoyVvX7PoUGhRmsk8Gt",
  "key5": "4sNaSdJrmVm9QS8fyr7bAtNa1qHauR92S2SKLZGCPNdo9kYRUq9esAQgMXjaXQitXZ8iJbXv5HtCWSrtTURJA1FS",
  "key6": "3MeosAasSgvG7FZLkwvTAEq4RL8VXEA6qkGALyq7ufnuwZA6naEQpouL88Jm2vsZtMaYPu8FmRFrcepb3gBZcd71",
  "key7": "3KKWFvfoJZX9LzQJPQKSikgaizovCrmFAHkQkt5LWxwJzEkRHCpfRiRWhexRveuheBA9Z8vRsZRGSXhbiWHcrwC6",
  "key8": "2PRzJ6rE4K3brepyvuyY3AMseREQSasNigTJwifPxcrUVpqBpXRNcdC4pUHQUJ36W3DFy2B4aiBZipegscTyRiVr",
  "key9": "5K4qrsV4NhygqAJkU7FWRgAvkWtKEWziFnSFwLCMou3if7QY2em4RnLizaUoYgrJTKL9MECYDLQRuLDruQGupPoY",
  "key10": "3MdGdt6tnCi2pNMkjEKzam5eSLPbftrudbvpRxbkA47dRonfTjXYPeP1DNhYFGNbShbAH5XZogemJs7m9BK1q3Zq",
  "key11": "4tfZnfvAwJaubi5AGcDNYBa4iHvcz6GCACqDhUBdLxXzroN5DvRM22eA4bzWdhrBx3c8AyXundkS4AkdUDiBTDsJ",
  "key12": "4UYpfQDygcibkvaUgpe7DCrJJcc2HktcAk6ch1UAVXXX9B4RpTSE7PkSZArkGGgDPFAsi49i4wtEBTUP3uuQGdfw",
  "key13": "3XCNqfoUwHhF8KhRUQXu6WucMsJb6nKqQbWwbGFasbQNwBm8ha6Bh8fBDzkFvKGaeNPFpR4Rji4pK84ofLkWDv2C",
  "key14": "3RT6mKM44kEsLycnmWPtDrRsTtkevzUEgX2wC98uFvuHmJQTT3LhZ8E9iD5LCPj43BJV5aZWbLvrb2bmTYmrDKYz",
  "key15": "5vpXZ4W4isTNiiav3gxHY2yfUwJqnYXascV9MwYwKZjutRYMpxTbweYazMcCWQ7e3n5SDvv3LgvLVAdhxaYDvAFJ",
  "key16": "3D4UXJLUcAcP178ZbtRd2ZhrcrfzTA7qmBt68YcJctraL1VfAn6tQ9rM5T3DuDQUFZ4xFT3Larsy6VWJDqeEHs7N",
  "key17": "nnb1eeSW14FXsfeX7FwoBptBkHJTsZ8ri49XHqtqM2vSsfMECeRcJaQCzJv2gqjTWd9JKpyXjQHrMhAfC2W4iWa",
  "key18": "4RbA9Bfu6ZgzUbZwFPYXnwqcuUWH4sGfVy2rU42PNdhrhi6UsyA7k9snc1VbAmeihW7JARTWP4DsdH4kwg2Xeq7n",
  "key19": "57MYa7SmUGmuFreqfi1TVkHqQfT2TaxPqYKTCEFaddJKcPyFcAW6UvTmnkXL49eQh5tnBdqKHkyRA6nD5g9r1GW9",
  "key20": "jeMuxu8j2aB9m5ud8odCxWk1qbfzo1BkSZpaq3cR241kCpisfWdZtGt2zj5jhWQEmCtqiwd8gqtV4h2KNYuDW2T",
  "key21": "59pEStcaq3V9r6cdUA8NzWzMzisZq6JMHedhBJ7ESdRQqBPUxTPeBwtLy4Q8Z31J66fW6mPHBviqGMR7VnpNXga7",
  "key22": "3eLDtmiJJZyJ7manGRHK1PgsXm5kg5ayzKkA11gCgXPq9RFAefUdE22jyawYDdV3axxT9yDqgzCxF21N4m4hLGrG",
  "key23": "3dDJFKR5KvLB6of7p6CVTm9mxxBWb3AkmpFKrCjWn6Pk8b296nN5DHsszyPTzuAMomeyMGfUGHmY1mbjVRFA1SbY",
  "key24": "5vPjFQSqfdTd6nAdhq9v5r1eErafvG75LH5SQhchS31pbHbaaHikzxpyQHQ8naBXQNSAb7wXdKnvoJxnc6VmchRC",
  "key25": "5sqGX7zmsd3dTL1gezW2DztGqmKDxSEfA7w4Xn8Ai5fpJVguHUQNuv2VmBqF5VmU3Cwhdr5S22VWHaLWYQcci93H",
  "key26": "3Cfs5eRVYUpNEm7EF86ghXGfxUscwFyWRLxn7pcDvQ5zLRNrBy7LtQLuiTzrKqdzFGVvGtqeCfL5qTz2BzjFmeyA",
  "key27": "5HCKASiaVjD8TTyHcEXz4jFPJ7T87THrowNJyTrGVQzgeE9Bw4nSnRNzzAvyXKm24hDyGGVQFWyL5BZPo3v9YGk2",
  "key28": "4Cg2T1Q2PmN2qaecaKaDa4mFtELLGx5yX5rgQJN7YsN8c7WuaVVcBiG7gGxsmdcRVpxddFX6HtJBFQgpWBKhJNWS",
  "key29": "kbpKgCv6r2xaGaqX5uSrp8iACfEsHbF5wZ4QYSd1Lrm5NFuNE7o5VR364r6LVW3sc3QSQnBP1Y4UX5A723HjQqT",
  "key30": "2LwnUbp7Muh6yzDMV8n68v5T3AcPfkCw2LP1XmwFMsA4emqyAC9mP1P8TApRoxLW4H8FJxMNVgTwj3oiBoJd7Si2",
  "key31": "1NkQUGv8QGXatFM41jWhhusrsdfsKxwCGWqqatp29iySJNwpyXmo7Q4pPewDVtQa5XMmm1ypSiz7BaePfH4k6PC"
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
