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
    "5NntNorgCLqXjuXgerWmneUCSKUeNQAMSu9DYjhR3oTYd8PZ4bbJ2PwP47TDZqK443WKoBUcMWFPxJ8jFS3DhQxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGuoRugTH2CS8dpffhvNrXYdzQt3t8JBX4dp4eNA7c2hY8rh2sVNskU9ksqfAfJCTDnFPTh8UWB5FwYewu5WECz",
  "key1": "3CLhJk2YHfN6c4NBCNW3qgR8rhHzBAdjGttqHswyp9SrRzSpbeCqBabktvfH1WVrfaD4BsSZu3UJWkXX2rUNEA9m",
  "key2": "4W7b4yQvDS4befEKi2XVKTuCMq6LZdQSVS9iaESsSd1aDUBAN6CapAqukfBTY749ntncRTaBvzUT4NKT2PAtucqg",
  "key3": "4BBmkPkgbRU4SA9nWVHZcEWLS3dqxN1UnssUcovzr1GrwZihs4savNojYSo3y9JzWgxJKZwq661GWo55BWSLWCT3",
  "key4": "4e6e7vjDFtQuVAEwBBn5fDpp6okGzEbyCwiHNaCFE2Ngh5L3D9kNgFtW5jqzyPntWH13PDPvMFa5tKW28Yx7fzL1",
  "key5": "v9RN9WZamn6QvHQzCcQpoeekRezD9q59cuB8oWXETgP7WTMxMSTToftvM33ET9Pif7R7VdxxRLD7koJaice9dT7",
  "key6": "k2MquCNWcNYc4kNG3gsj2iTMW8WC9vwpezRFF2EDuC2YX3FjjmkY9M2BB1eWbmphBP5LmMEXes7cb8x7nuvKjVF",
  "key7": "6ayT5rSJ9c3TC2RmggqMeHwCG68f38tZzwPRkq1HN9hMMvjZdpzCAGUPL2HxM2ikXpb6gWJAQd6rBeb8FGQacT9",
  "key8": "3DNbHNcbDunBrofCrn7D2F7N3HJn4o97dqYLSZcNsorUnapzUAvkSc9xk3hoT9NnozgoTV1VHN91q6HKwHuHQrJ5",
  "key9": "2sye5oYAZ7DPtsQPqkSNQXvUrCN84nycee3FneHnSdbS6Ys3q7sj5eRMoSv2kXEzjZqMQ9v1mURtppBDWT9pnphs",
  "key10": "5sxV8PXaoqvpzKFUXWZbAz3NsRjf8u764gLHJqfbJZDaYzgX2YpG8WqTkjbHURDp913uzUL6yyoCT495nM1czhuP",
  "key11": "28kbhBQpjnSoXJDYi5UGYz9Xmf62JGr9LFCgiq3PChVpthXToVs9M23cNkuJrag3pP4r8zR7EBAH88Fy3KDkoXag",
  "key12": "4TcbybFAzgtknN75y223pqF9MCD1JZfEYEFKUqrXnY9iPNxrSf8r2FvCaevgFacXBh8Nz2ATtA5ZXgKmKE6cRLaP",
  "key13": "5Vis2bQWKAAHD5A4paQLX5NSX7mjYRz9cHRtAC6LHDdxJYvs9fJw5hVLJes1wUVkhbuTsL3Ha1rQ3vKdQGsM9ALL",
  "key14": "2e7iiCyBtkby2PzGteRpET6hUo13h7J8xJnnWHTHE5VMRE7q8y4BQg93epnff9aNBKkHLroD27RK1uasLmJae49a",
  "key15": "5Dv49LGJyiBGPULor9goHPmSB6NFuPNYLbfFt6T6LiH31v8KdxNG1cVj6EXAwEdiRKxKdxVwVJiY176VMvd1Pgph",
  "key16": "37pEBUZjGoSAfpFT16ALY6Lna8H2UcTn9Z5uv3kuLBVvYNMkPTBNckJciJte1wvB1xGkz9R7nHeQNtv8Hmtinhfm",
  "key17": "4L2jtx7xUK3SZSjWiVBjB4sbrMkUob73SFAAkPnWAFUJDXTk1rW8SgFgPjH4dHmEH626jAQLdMt6XrK7wSrS9KxR",
  "key18": "2FMWMP6niAwyhoyFMtRPCMozjtVRiZZrUY2YzgmNZF4mo282mYT4WA3DHWuRxnRTfdhL71yBuwkd3BVJdpnubPag",
  "key19": "5ncou17jFHBeWWVTTm5FaiNLRedZ5qWQw5QZ8PUoWTbVFH7rxQF2ez4Q51TpVg19pPYPhj8K47SJZE8qrg6Ho462",
  "key20": "66B9rsbBmJRZWBKsmZWtgdzJUnrnC9zCTPEnPsv8WxQd1PfcahTpDkNhiE5p5S9tLDqmGQWFkc4k1EHYDqm6egbo",
  "key21": "3mM2xkPwwRvZgMKMnKXYeiabHeU1zBvQFzndmfUvAevhkTFHiScRMpeELL9YFzuU2FhfNBZUoo6hrr5TBqf3y4SM",
  "key22": "XWSmjai2SJXCEiKWa7PBcXJfhiPcJQ7phDgGFpHcnGEMfMnr5mTPNZk3BhSiRA6Niz6dVWL4SxAYjsCU5SztxYK",
  "key23": "4kW67KqeJrTEUsB8su3VTycfGZuNKMVDMc4G1nb6zML1G3oNANJebEJXZids2Jo6VfbCb43JqT9ATRVi8SAoDQnp",
  "key24": "4HLmkrUrLHnWjGHHAeeLGYedz4CbiQHSunWkQSG4K8iFaXHbLEiawYEdXAL6aHc26B95rLqRHnx8mgNwrQxgRvp5",
  "key25": "3XXQtWgp7aCAPoGwCRSWD9b2sEZDt2mNCiBXkiHycFjFZKYLRVxtZcTpyivQ7N2Sh2uMbqPUPsopR8PTBYdrWgnv",
  "key26": "3WtRiEmALhtGdYR7qFtRHsjTz887irgfKmFN9mzPpPzczsj2kfNfZabVipJX5HUwfMMboWjruJ2Z5ixGLpStJUZu",
  "key27": "2PJKZ4Jg2PDQieZDfzdgNFqjCRSSarSaCrQavvz3JafyCDoW6RDdNLv2AwzDjU9NLgkE7FAxaMGuCvsPbjH8EQJr",
  "key28": "2c5sDFZGRMziLNBhVtUizLx26KwgxNnMVp5EDZAKRSdjLUj4hA8xA82NwzAsrDgSVsfXU4VkGzr925bb2guYh3fB",
  "key29": "5j5dGzMgAm5B2NWFiu8VwQW3ESJdQcZf6ARMtzCPjpGrbAVkcgB2xoacJMu4TQ21GeaX7nMTxcypgEmYe5QRtHFZ",
  "key30": "2FskFMtT2SGNvz9tZ5etPVy1H8RD45X8orKSAL2Yj7zuJAuXJhYp3Fy8NaesrDm6RNkXdbZSNkHRxVZndU3gH6Bi",
  "key31": "26TAXynxXvNzW4PMDAvv59quBV6BKw9PuYjHi32ed61a9R9nSfYzMLLkLy9upRTzjehu6SUvh2gonTFFhfzqC53z",
  "key32": "quiyLhR3Bj93XmSwJ66MUqMRQ2ZR5x61gNYtkbWakDjd7ffd5T2V6S1GpGiU94S8rCkmCQW2yxuVrYYHkNKLKqN",
  "key33": "5qyRyCdmwaVKRPETqwa9gZom54ebTPrFompgSdNRR4u2jsz8o3XookwUssHJwnbocaKNyZVZwV5P5F1gzN2K8rgX",
  "key34": "54BHMxoimGGcJ1vapkZvY9PikzdbJgQTsNMHwqbJ5CDXq8a5YeMR8TfjsuG6RXv1tP9oq8sY5iEnScDpBYf8E5Mj",
  "key35": "29tk9A1KRFHyt2XeK7ciRrhNGSNJxfE1WGjg3hfwWMUtq65ziqLppHi4qcwCzmk549NFGNqG2MHuKRMq68CrEcbZ",
  "key36": "qo3ZSup7zLL6Xrh3WK1vfvvygVqvbYC7YuVdUKdUKZ5cH3LbUAfkCVj1WTwff8bpsjm4TP6TH5T2miYnn92ue7V",
  "key37": "ZQ3T85gVF5uzYA3zA17XMpvkWVb7N36QqHhpBaTMakrFb3cxUtNDbgqtfoVB7QsgENeWUhkZnr7Tecz7To6ooyi",
  "key38": "2YBuvKCPEwpZAsttB97rYM3UUjdoVwVn6RDzX4R6wuNQLzWkYgnK7AQ18g9nz3QD7PomBZv7HV59DfZ8jb924ek9",
  "key39": "5ouuceonaRSbwiKcLfesFywJVddUH7pBFqWKxPZA7WUsLb24v5A6QaAyANUBq4zD2HnnFPxuucepKq7MGWkiC2Dm"
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
