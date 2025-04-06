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
    "429GgqomJjmi3ud9oRgyqgwAjRzKJ75SZTxVNgk1q6z7UcJgbSCLhzTX5SRzMac2i8PiSD8FxZ5cWGmq4LocFf1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nk7gJ7euWV6WEM5niGs681H4hZFyL7wyGWHePJ8eAYyzqY2TF2pn5VsLoXU7cuSceqTHBvCLzmngX1kFdY6PnUG",
  "key1": "51nXbV8ic1LAnQYgLrxSheUqPntRKwn8yPHk8ZW5fK46SmSqeA78PQACwHx3ePwfTTUvBNYKFNcXsvnr2QxiadzS",
  "key2": "3EEgTqh4exEdCqbWdrLKPdekm9Lej2HkCEtd2C9spMjWwenjsbjnUD9iKzyj1zr96aauEuDN99fHJVbZc47JVwLH",
  "key3": "4nK6APYdsgkErwfrLRw11Yut1tp8CinKq3SvFskkB2QEAmTtUZFUTmuwJH4EyfYf6Bo1u9cEjU9coxMCq9SfWdUn",
  "key4": "4GSAR2LMe6iCCHrzqF2sptJRfCCGpcZ5n9XwJw6xVEU9BFezNiqPXgaf6VrF9m9EmSE6WyWHGM1qoeby2pCM8aSK",
  "key5": "38ZTroPE7BfvSXGkURyLyT2iPMAYfkQjG3d2MkqZoqsoYwPfGqZdH7CNqCKQcQzu8Dx52vWiGQYFKYB5nQwQNxKm",
  "key6": "2QuvobQTM9gUff3TbC4PXHr4j4UxyPGvm6rvDGEfZvScaU7W11oksTJ6ASnStmMveMnKVsok5pC4wmMA4DmkKcBZ",
  "key7": "39z1yAqpSJUiJrWUFVuiCrd9FU2hNL79pP6Cgrz3UhhYxMUKfncZvZxDeaoh1inAD8yUp5FyrGwTueeWfSDAyQuC",
  "key8": "4ngi7QAmXzsDjWLyGZikAezT8uBHqoF9xknhvy9cHfn9dxVLmgwNohYjr5Ah1sTu6S4QaX4FmpLgaPUCpw48cjDd",
  "key9": "3C4iutzncS62e9FMC5QDCw9Hov3Pza9uLGzPtoqKPkKhDS4DVQBkfNUBbgk3HGF2daWViTQtuMtvhJbPddynAx5d",
  "key10": "5DbYq2dUXbX6ibDkeKA48uR7ZPjuwrAFP78rDrUZwgt1Z9dKnLaSutzMDFX5tDP1KGzeoR6cAQvfzrdwu2SXXDqp",
  "key11": "cmFiT4ZtkbchqDxPr6vK8MWTzMhJssPtbC1roJM54kvuX86TakdnsP77W6nEEZMw8QgdDZKro8oymPGDhmw3Aqd",
  "key12": "5xkrz7XU51qWBRodJeg2ogGbSWGmKi94LrmzZ6adNR1b1xhdMieWfG1udhwg85oTUP6eME1XnezaxUb96ksYGNz",
  "key13": "5TUvXULQRtsyZ1WX21LbDdUNDUCMka6oLNabZ5vt7fbw4bxwrgcLu1RurZwsz7dHRWCQz1y5KMcWkRuwP4D54Zp3",
  "key14": "5MR68oxNqtycSfpocAK1Jo79AMXFYzdcKJa8veENK1phbDHiNqL1zdcyGDXfCFhajersrMMrfRoYEnJpjFrKvx3M",
  "key15": "3mUZdWUivN4YprXJFUuyKWCW9VNDgUAJebxPLKW5LCVHfttZbUjH6CJbuMrSS9rbXbwRWfYCNhBCGzKjUEPT97Zc",
  "key16": "299eVmhc4K5aBX7SbRjnnG5oaDio1cKchCoyKN4XKtHHroYctpw9Ni1rEwopwu6UqQCVAYXgj9TsEmihxYTzxF8Q",
  "key17": "3RTcinxPS5nmG96wNnEwdfANsos1EUmweFWJgxkzdgqC9GC1o3dXGJx5prVycb2ndBedchttowV3UerSS1DkoEbP",
  "key18": "2gT1c2ENN8Ju52QgiLi7fR7QMJQNJ8B1PANDQczD1HN1ZRwSaBp5Tr3oEPQe9iFXBnNST3vroSwXzw4naeHCBpQQ",
  "key19": "62UFHTfcfFJoHzPdxvx3UgRhbQk3VPEhc478x3vp66WNxYYqo8VvEWhdP5ovDEfC463F2uehokYU6hcjHP9sDX62",
  "key20": "K4SQp7GoQPbb7ukjbhSBx116ecKezBVMoY1F42oKfW5hg2emZmY2TUUQcJpgcJ7zvY8DJoJjAdtxL4x3ig6TaHF",
  "key21": "2rszdfj1AjmY4KdNtgVXX7UGLxVerXo75s1WHr3MYrtASkFmhvubKh6NFVxbcQrhFuUN1gjWVAkz7EuRc7GyEKRh",
  "key22": "3UBtN4pREyPLHbhNkumBTdmUxtiKqfFpmAACTzRuKZtLatNorTSBXRotXpV64p9JyKE1ed47XRCKRJDZwaVP88XK",
  "key23": "qZm62cxwDGoZXjKtyjs7ExiMMuLwqmRvatqEZmfy9UYrJPfihezTB5Yw2hMF2QKoBbp7szRXvx1NGED8ZpzUoKZ",
  "key24": "TqhLEGkrHo5mCCvKsGTXihhx4XivKKzch7yEeMKzycgLMxvQiqKqVuuYAETa9mKpXtS1V8rg2CkbVgZiw288mVW",
  "key25": "h7H2opnHn1CrenCuRazdMX6NUnoHzJhoTW2wHjAh4qRHnAAQA6fVGerokuqQ4CqeNM1hL9tcPfr8riNCFnyUjns",
  "key26": "sZJZmLTzTWWnM2dsUj6miaHfz5z5CAf4iJ2S3g1m38icsoTW2np6XyFJ6f5TBzCGDuEuZKVhWaUkpNkHY9NF9EK"
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
