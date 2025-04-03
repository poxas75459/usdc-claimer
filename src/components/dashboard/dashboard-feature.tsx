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
    "5SS53TuXKJUcQ5hZwAoDs6yGWQkDCBGhQfGMLMT8mVLsibSDnnrya3UA2DajURpdm6VjigRGXbenGuw8F8j7VQ7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oayjw9Zfk5ToKEtzBpRn6BJRHkcyoCnjgFdEnisGk4aq8v7wV5ZwTTMUoug4bP8TUR7Dp7VoMY7sKtxPRouTw49",
  "key1": "2po63bDDNfYqpzyLNntfpFperg4L92StSvPnEsmkQJegVsDMTUQP56QbJcYKeahosFQVhCY6gdg1D5gYA6tCszav",
  "key2": "217gy5kYbDtC3aRFbqhhVCXNBnpxhfjX2XtsgMatok7YSVvrhGMHJBxAg7cVBSVz21FGHp8GBaPKhYh5z9xWDsu3",
  "key3": "2XQenV2ZQBtsfJaorPFrnxgXCUb1nEEu8MNo8e67yWKTGb1gToywS4FMqYpAYGLC7W6h92t8F9fNJJyqxmbuzsfz",
  "key4": "4QdVHHHsxwRDsYGCYRJhc3CXidNyZJJ34n8Ahx8Wgg4Gqis3YZoxJJ9MJdQcWrjyDf2u76LCfwx9Nq1GrdFbzEYv",
  "key5": "3zqqmxv16sEFBkLoikeieUyTVYmnkBESkmxfV6ezPNuaf1fzdjuVSWyLxSEg2EDkY9hwDpeZSiVGSHF3vP2oBk9Z",
  "key6": "cyWUCMwva3sw99DdVdTDmVczPrDDBjv6fdhUcpXNStLEgdrzuT8aQXHz4Zmo9CosedJ34eMgwkH5dsAs6UrzcDQ",
  "key7": "62MrsupChXpRfqghsfTomqdhFAiNWt4xARAbZuDmXZb3LWKWpvps772Subz3iff6pc7Tgp5BZGxsjRutfQSnZk7S",
  "key8": "3FMVVE8mWqEyZjNEvRjZusUVrjayCsrhNCQRgWWZiLDFaPLyRAMGoLwdA2NSGgkJRcFZJJxCNYX18WvrEpvcRDtt",
  "key9": "3BfVcSu13aWK5fcxNBzU4uaBXUiUkNF9FHQQPMq46dmBm4mafaQ2SoibKnBYeKk7tqpHWHgu5qJ48CKk3f2vfp5Z",
  "key10": "5WU7bSAunbS9KD9a35r1VXCKEB8QkpsXPxt4YgSfPvhRkSbg35Y7x6oAc1NdpcUEu32RYkCXbVdgRLHQFBdNSZKe",
  "key11": "4Tp6k5Gda9gSQwQEQnGhevtjUscJwME9JtfBPhySRz2zg2EndxqvSFnC5f9LUC4KdhueD1R3YecnN6m1jZx6MZem",
  "key12": "3E14xknGVUEd3gxjhwQjJ4jA1LR62UCQ75AKtN5fAKrPqE6EuwTJdNTBRzFvFbGTur7ZoP8oC8nYfvKas91PYSfx",
  "key13": "3xyRRYtMEYdx9YswmNBbAYU8TojzZTCNTXZEfXrpcqZJSofrjhFbVqrXrUxvLjH2hLhy8ooVXJtruyJNbvVsNPxq",
  "key14": "4csDUEHcCLgd5rxZ5xggCkxE1DARr9REgJtrfQXv8nW9teTSqtk3Bygw3KZetxrGaBwEdSZKdDyJHCYsKqdpSWrP",
  "key15": "5N4EmHeMFCSnd3kMnMCc8oJiw6aUk2Yf2fkgg5VjAKQHt1L9WE6Nr88oYqfVSxWSUsYjmFsDjB2b7wrCbQ5WnQML",
  "key16": "4SJp9DWgPnE9Xt1EqMNnXxqi85vDQTLCqQGKBRkX17gmaVqKRdN1NaNFuPgTuPqhFfyBdfGB4cRMTAfWsbfZvvHT",
  "key17": "9rNPYXScoasQktep9MLzih6BnUgkr4HNsEiuisvuaHeGVzzne3Px6HNVH75koo7yCFgwd8LHV51PdgpM4x8NQA4",
  "key18": "3rzvrXUWSM1HfwYg9zewJtGNTcNdFS1L9ayww7Z8cUt3r3NRysun1A7QC3x5BBPQfuFNtaRtH5xmduYiGnXKKJ5T",
  "key19": "4ZCjvWEtkCVBDDa68ziZDbBJFHN2h7R8BNcJu8pTfUfpQCYsiW4UfzZQvAiS48GJ1eKoQQUSwSsXALgfcKcgUCfh",
  "key20": "4W8YWUMQCQZWFypAvXcxBwBzQ1RvMPxQndgKe9SjoAXjZFYLWbGw1zrZbsEDajR6rbRhoUbJe1ETKTr8kprmArZL",
  "key21": "4o4kuh8zoMe7YK8P7V1fmft2EtDy3k3hmgSaf3pAdrPrNzBYiabfPj9dSgx4x6pNs5pazG2R8umq8vEUWQGcyjee",
  "key22": "4VwGoFQEnZD53e4uqac6jqFNtgefwVhRdPpYmCq65JRvQbBir9aFHomA8ZvfeMkLRSjjsezxhfXPWk682whqNw8a",
  "key23": "5unwnx4k7qYv4jLUYWBPAYiwJr9CgEuvRH8jxxVmafVnnE6GJutFxccAJKK9SLusuTtimQ6BVsgwEkbTmbTJ888",
  "key24": "281KKCEGadqzfEDimFdJSBQre8Uj6Eit5jfi62QzZeLDu97ijNTkW975LmtcHbj92AWwXsTjvSqCKvmuwjftuYmx",
  "key25": "2UgZoHvV5r4EJonpepYEjgd3TvUVpTJ1sjRh95UVmAsdQ9qzvfzCRrMLcStrit5tPJtpLWvHdWChYJyFVZaoktRK",
  "key26": "4GBgXSJdtnF9M19uWksHKyPvR4FDAE9BPHKmTT46mRdB4HT2XwBuW6xaP7jGWY22LK9KpVoPy7Wf41xro83SRRz8",
  "key27": "2HdzygUfUryEbwxALXgijwZLNqDBr84FhD9333cCHRKDbmtfJK16yV9d4Jk4nCQmQE4QYzQ8vx8AFWSyjmi3fRGA"
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
