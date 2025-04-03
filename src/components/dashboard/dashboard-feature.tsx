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
    "5FhbhuzNCZoLMcc5885j9bd4ARiQTeKZ7hcp2s9BXpZTyMm5XVjVK1PBstSheJEiw9mwFHresG1fSAGEuHTbHhJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBZBFBfC5jRhD4nBwMin3HMw8AHVWuuqfQfu8emp1CNKdzJgyTc4e1NtwYC9hCMqijznh57EPAgoXsk1qLJHd1M",
  "key1": "2JHTv5mdWLVBSNEdLSP2XoppPiSxNDNTXWjhHRT9iL6y41Jrg7q8gmkhJxZ8c47aYnStNpX5YEpa692XAy2wwxFj",
  "key2": "27jxuDCj3NfESWExxnBB4cX3tXsM1N3NpSSAd91XZUWYvH9LUVd1StjB6qMSSXRqotWdRdD93csoguVQBk4K7LF5",
  "key3": "51SvQS8fcoSyFbXsfjgEnQ4vniV1NX6v9DoAv5T3bNsqzoMjn9X6SPqv7FGUx5eVMK4xujRvouoC5Y8eRrPkLKBf",
  "key4": "5B33obTDnnGZdXY32Dvfcs5MiT8bXkyzECVs7KZW1CSuiBM7xCfzVci7ZwW2XwwiokWWNukJ7MEsYendesCF9Zsn",
  "key5": "UnNTPHPfxkvfakbXKygq5HoGdppuMAgsDSmyudeG4ZxVRqZmX4RCTn6Xofvh5fgwPUtBhGmysez4gnR9qfepC9z",
  "key6": "2ZwRBJhEppoFpkFZSgUeogsvLfLSuaG3Din85V6m1YUVYy6DZ34ysW53GHZc9kVgPKPyxQzBfwktMoBbnUaHkery",
  "key7": "zdXcsZD3DiiWRBydpFkBgLCSPywkK3TXVTedYqrryBDJVwRaPAJgY6HVuZeLJX4s9JwTb3koEwkGzHBkfTkeRYp",
  "key8": "54zW7fDM827vdNGTsVd6gy3y8XzKszNrFa9gyubAmRRDPaFVjDxjyGzSRvEisAiytnSz3BsNpcm2wTq6troDTFcx",
  "key9": "2xLNakAGNiKi5rJ1VsXQoBZgkvVt1mpCho29w2sHnW19oz1LbRPo6HjHUhh6QoKRTurLajBUEPugHx5XHj2etpLL",
  "key10": "5XQnUQsmH6cKqjdQd2gCtJeYRXn4G8Emq7135jC3CtHuojsHY5dk8KisvwGfSPgRTdqKn4jquK3tEvh5N3guNn28",
  "key11": "4sT3XQtHGxDr46aMtVy2sGj5a25wLKqZLA1y99bsXYwiYYasgRYFiiwMJQ54Qv31sGybRoRidQxHbfFfaJKDUDWo",
  "key12": "2Qqda2pwzySfLpU97DFAXheHUNqafTZNtPv4SfZfEpGga8peBV4tFtWNan2UHW4yk76L5osvPXeJ8DKzeHifhVji",
  "key13": "5bPEWE4Jz6dr1PdjMEwYDGyN9xaq2DVmYYTvJovzQdYotjL81nyQTTiWtJuQamCijghLzcBWqmgLLweXvpjNNKCJ",
  "key14": "5th7gUAGk1sEPmfVv9a5ovXuYHe7z8LaYcREmT3d7pWcn5Qa2PVke8vCJAvpoic7LcFJgJmZfgAV2NSKtZFKGBWT",
  "key15": "3pTsSPf4iPsnTLDctnEE6JmwaNYoPjNSMLZcFfBiesVXvJrAMw8u9q5jq3tbpF91rkAJESKHdb3Bvfmph4uckBd2",
  "key16": "5MaKTormwUjUnYSsTRWi6qecdoPPUpNBrMARVnySGTyGZYatNAncYA1cZSUoSVku6riwhJXzFZioJXDriLTtftsa",
  "key17": "3T9Uv8d9JraAFQWGLPH1FFFm6paYH4tJL2vRX3RYrw9PSzEKjoyxvpCPrVXLbSoszuvvy7q7VggwrzxjNDcYfiA7",
  "key18": "2towE9p1nrN1qKNhLHmL9cPG2WE4NLZxthUme9NJbTXfWBBst9bWtnCaBa8KfNSHmfwxtqfSJ7LaWMwFzSn9zsqM",
  "key19": "5z6JpeZipB3fzT3x4mKdQ4NdkVei7CSVKP6NjYqMjzVwqtZSczDTdNKcWcSMMtjeXRmLis7eKoP9kNZRiz6Nr6G2",
  "key20": "4s3RM91s9qemUchs9hwAhEeb2Z2suMW1vwyEBcJNCVRJyxnDUM8BNCXfgcfULFKA3n83udFamyekduWNbeH9FcEh",
  "key21": "5KMox5uRmSsT8Jp1v3V8CrK3agdrZKaEjvyFx6KdU2AkujKNY4YguSkEWUMVFsfPQWdQqSj1CRnda6q9fUZRhtoH",
  "key22": "52o7UYaDzfadB5wwtUYd9PhxjwmDZw68s3Dr2tSV9pAzGUwUdP7NCscDZi1LX24ghpEkuRoP16ZEWj4SDbVbH6nb",
  "key23": "5Y2bginb7mNFzvEPzPU6BaCFFf8UioBe4ERJchb6JyTtL1W8u7CteZT7jcqYqwvnkUwRjHFHUUT5Q7hfrTTBts2T",
  "key24": "45t4j12aphfGio42SJdXZEcCCEqVBqKv7mRjJwP2MX1NLra26j4GSpriozq9yuLLuna2J32kMbP54hsV3jEzy6ki",
  "key25": "5QjGwojfgXgCBLrYFnVSUHUHvMA6mXG52DTxUqzdbGLntBaXdBUovnMjeDMjVjwBicLw1YQExRJ1MGkuwvPmCKYB",
  "key26": "4526KBFYqDDq4p8VY2cFbpcA4G7o7RLWnoafsC45QcREp3xJuEVQftQx8uatC7evF7Es1ccynvkcZbDSw3VvEx6Y",
  "key27": "5QdUwtGu1yRiBGn8o5cNLyKwpTtNmLEWxsw8a8KpvkWVZzCELPxQFg8cnXRiorwWBv8VrxNZYk6GT5Gkw6riVJrC",
  "key28": "4ZSs7enQs2v7hTwNRG5cvSFChsGgWw4vfpxUVJ3tSxZMfBqcV5c5GLwvDdBdKxHqKfn49ZiqKFWyYNnQekiwwh3c",
  "key29": "5EJz27coXuN75m3BCDPceqTA62rwPqxiBFuzqhJ6ZPEPRtEoswNqbMPJRZ5BJSWZQeKR3seggRwKsjZGGWF31V9Q",
  "key30": "23Ugc1bDsvgVa6akWvuiHhQ8YTUtrW9n1KSuMk9tP4yQ3Pz2AG1uVyrW4NCGfRgJRkihivnTQKWRdPbvwVXbJdki",
  "key31": "3SBmJqVi8FYdrim4upB6awuLhsTiYc9UkeW5Xi7tGze2fqgMKv6kALdshKDfarAmrocCe3CFEUweS396Z5eA2iNw",
  "key32": "4wFoLW7QaQi5Jqb6r3VjcghQMd4oTKumgEEoq1FzN2VbwzA8cc7woQhxKFenwbKxvcUTsAgcyJkctxfJT8C11vCm",
  "key33": "3MU3YbE9TNpETRA69jJdUUkKYzdZxBsUsqkvZt4ASoNhRGLcM665n4NQSGysoFiXaUsiC533uZP2fBQVen5Zi1mM",
  "key34": "2D6JHq1bHqt5fAxptxsdVkkeFUj3oKCYJUSUrXxAaM6ypDL1fsqMKVsHpPzTwWwghCyYwfYL9WZDqCsWKYB6ubKe",
  "key35": "wRRoBiJWz7D9qRj6NTiazDJXQNPLyhwwAgf2a15DfmEEp7aAjidPwKQb1u4fprvGj8Ltdk53D1UCALbV1AtWhjT",
  "key36": "5Vo3mMrQCr2b6EShwKj5rjB1XQTrJTNGrAPRuNN7aFVjUFCU68WkVqSAichncpqStgLJttHtwwU2N6LpEV9cQvTF",
  "key37": "5meq55TV2XwP4a8bzHgSS1u5eoXniMSn394VaBUFAM3ULN2VEAzXVoUHKCsxWtEPUmjn62YFfH2wkDBpkr6zot5n",
  "key38": "28jmfR61enYzyN9nH3te2DbT3s5QXEQaheS3wKmTMUJegUjs6jCBYaWCZgX62nHnpbKwXbmd5xxNXdab6DfWLubz",
  "key39": "34VTNDiAAck4hki1nLYgocH1msgzgpPAM4GGBJArCxusj6VJLxnpSrtmzz99KJKzSrSVhp1GdtCLPup13kUryvGh",
  "key40": "2TnqdLoTjPUxrFQuwJP1xHQbWpQZvxe6QHxA989AXskhRBHZqvDsNSEqrCpKnCsNBs8rKRrM1URnxthLTwJe15zh",
  "key41": "5uW3SvWporMZGKL2rJ7rm76XsK566zBYCFsHHgpPHfozTeG7htiXxvzmSeoTTv6Lpajr8A2TswF4E9Dpmww5gpmj"
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
