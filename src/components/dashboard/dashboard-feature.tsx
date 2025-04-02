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
    "4V2bEHSZ9Nfptsj8Qotzha1f3gTsqxmehB7myUQubyQ635U1ghjKcZKLfiWNG6HGJPKAbmMQViBRWFYcC1BzRK3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gphC4QyBKT1CLCSoxWGa6vU5pZPgw4cf7eJmwKUYj7y8PvgyqvMRTNXvur2vrexALBhqM6uVAgSqdg2RqNqKXoe",
  "key1": "4AcA67aLtvbF1mvMkoDiHXzgsNg5Z7azSBKegFxETTKSHk8NWb2911MriEn8jaqvY4VrWct37EEuxAoaNAYE182z",
  "key2": "QNzEWAunM9D53tGH4tFbpXkbumcjBjA99WptwjKTcuqEAiba9cBC9RDcFKHYEGBqik9VBnbe45FmmmVDU1MLndV",
  "key3": "r4wVwdZoQmohnTRAnSSQsMCTJ1HoLY83F4CrNHdkCbrnSznniisXnnzxhUBPahvcEY3pkJmbpmjUAq5ESoioknq",
  "key4": "4sKFopm455Nc2z4jF5mAhx9TQixQJTCXyuHFBAca6S1gaCyezMYW1uPVKGUjbmjn2rwHfo55w1Wmutes5H7FqSdE",
  "key5": "5gYkmfiurGzXhkB2M7Jx4LcFtszDCjFihihWgn9sRaWLghndKTXgqpVC1HVboQWCCxdUYA6B5S3V8GE6m7VGxtuy",
  "key6": "2Y1LLDfjVU18jn49ZKXtsY76TqwQgYcJHMcMUuy6vfALTYRgHhxxVv5HG1Rqe75Busy34jamG32Fr6sWvVC71vJR",
  "key7": "KuzSy4noskA4aQK1nNP8SCiXXjwUszh4PTZsHn7XsZdRrwXdGxmukNi2mGctgjvTs8V2T7mTFj5RoydMt9b8PcC",
  "key8": "4FVKj2M3M7DStas4QMHZYBvk3Qa5zgQ5WykM87SLHKyLB9KSct2vSXfCa56FpxJRrUU3W6SPtcDSnUniDYFKenJh",
  "key9": "4t6UUrKuFw6wFHnDchAAMH6yXqSwTifQGNF4UKX3pi54VjzfcJy1eH2nLJnsGT76EwkEYqM4gR47sDgQGvhwgdQf",
  "key10": "4rNyxRF7NN5vfrKquH2s7AWB1oUmkJ6Q33RZAfSUkwJzTWSd4WaVXA8iRTm3R8CGDucyRN2WXmvQEYUzMwYWniZh",
  "key11": "5dvfvsxPCfEhGMw2oFDHJfr8VnJ6V2r7553Uf9Gd7Um46ZuCzx3Rqu3yufLmsJubk4RiuRVMwNKBTffxVTrvQvU8",
  "key12": "2sifgEjAbXLtik5SQgdYNe2BLkzkfbmDqmm14io3tqBYhFUuVjLtscNBpPf3fQggzPXPWaKP8sEhVxatMmQyotpS",
  "key13": "2NuC4Msmr8hVbdrN6UK3BmUETmxENfGqfcVoKf3gCmh2PrqvGAr4JwRrNcEQnmvGp6UVGccUFUyE83pVidPJbuKj",
  "key14": "39TZREusygm2pGvPzFchj3ieTeSDU2UoZzpoHgqYNqPV8AT7v869WLnG7C8arXwnTX153e6BfTdzPb5vYnaff4ov",
  "key15": "3jxBZV4YiFzXXbUoCX1WHztjWZdAiGnuUf98FBjLmWGou9yn2pYtJJqf14ErZeDrmWEeLK6KXjqJxNiMirnrF5TT",
  "key16": "vnV6PbonZ7THjSEJGhuVAirAEVqfSuWS8WymwuXuFieNgRUTdXD95YZ7vDW41PNCzhQ4U3cY9HUPy6KRLCDzSw5",
  "key17": "3cSxNt8jjXXzKdQQPRgJYbYfBcq9fDKa3x3dpq63CSVxMsEvsHi2asyttuP7NbrkqFrB5XVMYDzG7mU2k51Ri647",
  "key18": "4YdTx8w9V1vdrnPBgRM4RfvaWy6QaxVWx1LHLvNUMRSw46Uo9sKzUKhFSjcVz1KGVWyZqNGxxP9Cu76VFnZfW9v6",
  "key19": "vbacz6hAauHyU7WxoVAdQZmLpkNS7urHr4PVT7S4QZ6FvdGYxFnPXwCrH9jpXjSeSeBuqG3bwbXxpKUHzvVZHqi",
  "key20": "5AfSpVLqxAUnJj33rLU2yYpMCUxk4eS2YeYpybkvB3KJrJJMGisdH8WgWGfrVcXfTdgJJBj76XfYAxE9cTqc2beS",
  "key21": "65SZRX33pSw5j5ahgYzggJaAK2mMFWbXyJKgupwGmpQiVT1Q5ZwfusoEvSpTt36rBETT7pogcBetarXGgxGzJ3cq",
  "key22": "282gqqcjdATzT89UKxXZ4biS9raz1T2yfWYx3MU4jjaupJAkZQGt9TyJsdqsFArRqfsZrJ9zoxb7vdusDr2EJgfU",
  "key23": "hgBv1gHnmoXp8mTQ12bmF9h64xPDxTfnhx54Ab4T35muQ1CzcguS7ZammNvTR7j5BUhG6Ag2pmMZVYozERKBDe2",
  "key24": "2NjUchD6d7FrXDupMyQwS1fUj2ZiR6QHnJdYWvSM9rgQXVRxAVpzMWdzRgnqX5kvMXhUVtjZnK4HVCAEtXtAHEJS",
  "key25": "33jYjK3zsuAPsz5GFx4WVb3z3WNJpatQe4sve88XQCNCAv7DoZejLW9AWihKLxPFZ46ECqY6mmxZuUoEQub6Zke9",
  "key26": "2eA3DwqyqX2XByzmyvDScs6dewypcKnzs8atyU2FR17fe7rbybeFqypAfe2mUDR2YvakeyJfo7HjHqV9moYytZDF"
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
