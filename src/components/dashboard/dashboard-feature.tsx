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
    "2pf9GQN5gay4FouMUa1ruqmZJjeBTAxeBHkMjxAysNNqGwTHEWk1JNx7TuJeHZcs8zmjkPVKC4kVrC7dvK5ta2rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LyMMu8wqgM2zfEjRuT2R8hJsW4s44xgCXq8ztmBvFPTbCakab3tb8pp3aTYTnYSyU2NZKKbHzaDFAd7CZz6ygwd",
  "key1": "nHNpsBfAtNfAWaNoq7FN1BX7o9JDb8cEbaj5PZMcVwL7oZRacJecrkt9W7bw77yuaYGtZxEMk7Se4Xhq1T2gpWp",
  "key2": "5g3w5evRT3YDx1P1EHmbBDCWzPA4LA3CfYFdc3bbnEKbqtCMN7bvbj7ZT4ap2YQzkanyVzB5sqRMzRSZ1Q54pnBf",
  "key3": "5cBqVwcyQDWraXzW4KFafUCyUWHDBxd1CAFk6zzb4N92xfKV6mxgQ9oQTLdeBx1nC2FGCjiBGiz6r38sKW9fVKqN",
  "key4": "4PyGwLFLZa42GfK7ZLk7kvdDQuiiPRfBCmXYJ2hrkcBknKnP4iue1v5jsgC3EBAeijvjaA1nbwhhXVdi2JwCEpDu",
  "key5": "5Dtgpq7Wzz8Gg7eotPy3ArNWS89XKpFbMhrTidU4k49mGhuLrPqY2ksy3i1FGZVW5NTm38SpWDKyC6TAxGTeKY5c",
  "key6": "2feiKn9UiVK5cpNXAK95yqeccyQ7KuQfexLcZ9aACNjUo1xk9ZBja9SoBHLowBxZqKHrqQhJ8F9umxzGipSwG6qK",
  "key7": "359K2D3FT9xn7wLs8RjeCmF6WoEN5V52ky6RVV7Uj4EPiGHabZacsm6ZajLty2z9NLb1bi9ry41U1FPsUDAjHntG",
  "key8": "AE7TYkt7foo5cicp8HVEAmv11LeozxFgTvE3SiXGx7MZ1E1UUPKXF9Vi9NRE3EPKfUtv7qPBEAgYPQFxdhkPW2z",
  "key9": "43uEny5XJTrrF397Q8tx1GVxDe2UdeGBLuVQ91TNUEVLJP6pLaKweBFhRHker861hd28a9agdV7cR9unTo4xdEvz",
  "key10": "3Bd2op9uQzSGz8hE8WwYKEUp1UE3pdV9fGyaPo48JZ3iqLSsiPQ1gDmRM2z5kb92xsi8cwLa2962cdwEgaG8afy3",
  "key11": "3anhNeGXuQgvzLs9YYiN1aW1amvVP2afKdH4xaYyKxTrwM4w2oohRtisuJph2ychLSzcF8Hym3FZTxZvUBTsAEmV",
  "key12": "2cTMzwLbgqqKLY158fvJAWq2yoRFhLdYer8bLNJnN9Zqj4L1gCfcdwLCXJipodyZsccAyZCGveaPtdHJYkioCk87",
  "key13": "ikXDruNT2WpnyGgiSsvhscB6cynEcVxFsDPRGCAw1E2eMsN4KsZxCJqjyVqX4MVDH7RrpjsQcgmouRyREtSAj6Q",
  "key14": "5vUw5QSBR7b6G2qYb9jZcpsjMW63ekJgJXVHPuKA92UE7m69kGkYpParWKj2FhoWcVEiP8GwJCswpiDnKTATqNt",
  "key15": "4RAp2imGS55cBztFsV2dDmjhPeDtwYcLzuFL4SmqpKXrPjVVSUp6Sv6EAXqeVgfHF6fkppPDxwHH6BDUj2sNEwyT",
  "key16": "5UACfSUjAo2fKrDnwvexj3yfMexSibZ77czXB8aatvo3FDiKvctkjdKcwwNjKbFapmEwL3y6D9szHQVNAjebKGCg",
  "key17": "4ZnSuVdXPbNfQLNBAHBULBQktXhSpmQ2bW9vEKHgixPAMRz5ueLtT4c3t6JtAGoGkGUV6Uk26A8LmiMRcvkQcXes",
  "key18": "7aAiU9fbLPyo7WcTuU73ozLZg26P1qrKw3qRQ2J7cCdzdz2De6C7ANiCjtnoNhyw6vivjXnnS2U4cuwRWCResq5",
  "key19": "5WknjTGD9kKgWiz9QvkmbL7kGbwpfXKomSUEsoFezd8o8z9pd1V5b6B3AHdbjvWuDRPgqpQCM48fRHGCooVkhKo",
  "key20": "f8BpnhBYxRazkCjGf9MsghfnkfwjZExKfxiHDqzbM6KhYhN2eJekvTzE8UspdwTVrezCxZc8nU6hCnnVo4ndxs6",
  "key21": "2KCJ8P9ht66s7i2kmPALEgw1JvCyHaehrWmzzrN4Dft3pyuqmNXgE3XewsZ4HYPF1X6fQ2BdBLpV1FFbNHWiTPj2",
  "key22": "DJA6SbKRCpHG7Db426rMAp7jx9HHtiTcktNbX7aSi8QZX3HYZCEdypZL78VxGv1m7Lk5tQxyqWCMS64mFsySRFV",
  "key23": "2qmJb1hrH896nHt46vHsTn5kN3YLPd6RvtwYQZYZeLtxjpTEoJYdhVz5QQysfwemC1BoXs8B6doaw9GL9RDotivM",
  "key24": "4MwjKK5aSxdgtPUa4Pt72tTr3ip27BdSoyowQjYunLw3txRCNEFek9UK3hP4qQ6LMpsGV6eRVL1ADEKY8trtxpy6",
  "key25": "3HpsgfzXux55sGAeUkuducNSmYa5i5x69EBfW7kcjbf92yk6dQYQLM2AA6jdZ7zVcv7WeswWr9i9u3fWfUeyNiFL",
  "key26": "3HryEXRJbBrUpRKshzRdiPW5r1DtzjAbC6Pd62U3eQaWexSE1ha9N6TYPiJ4KCq47q3a5wgt7YHZyzKQ9cDZFBX9",
  "key27": "5u6svjuY7vziQHMND5bWAXgHTcEcNn7S8GoRpVtxkZvUgjufXCHhStoDdsbN2kvWq29s5qm6ayo3YcsuZJV2aFts"
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
