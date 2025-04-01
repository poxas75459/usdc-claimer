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
    "3LrVEYXqceyetsPqRhvhVxMbjvEeH2DfdgRL5ScBeCtKtHtyoDETxadM16PE8yzdkGeBJ6WsPdmy9wMSeFwB4pqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3DqgbRkDJZg68vjD9yZgDbzdNY6mRyn6cGRUsrYR4xcU3CHmni5P8gv54z7YSZTH9tkjDUsMbmSQ8JBHcij6PB",
  "key1": "4FYy8dM95JXEiUyFcYE3UybQYEsSs8dc3sVhjeWM7qBYBNnyR61XXifZdG32RH1JeX2aCnUmHPoTu8r55PDyj8K7",
  "key2": "UbiS1nQUu2hwXSeAkdsoVsXYCgRZmEktUD6syuxUsrkJqpBvpHWaPWhS1DrdirZyoLUnL7MELGajQMzQEiMoxu5",
  "key3": "5MJR5GnfRGsfN6cX5FXK65DzHsLERNNrXGAJvVw7tGdfnE6T2r7HmCvwSLQ32PQTXiURYz9WkMpg9esH3FLPFUAG",
  "key4": "La4j9XUado5VSFcj5AuD1Nci7P9qWZ9Q3GoaU4kyT4rQGefqUq5mpyQoSsXCfiAvN6efo9Eiy4N3wqTN4Y3yQyz",
  "key5": "3NKf4dEQ4iL2MPXoCauMYAWDzypRhDS2YrxQM3M4rdD6QbsgmCK5ckkZKWokhvqwAkC4GS9aLx2pWUnS1CepZm3D",
  "key6": "4GiUoojHeSMghBWbP3fhsU8FBVPcbauzmkL12sME2RsLzkaLrbJFgfufKffvZAmVWP2hBLKk9Y3ZkAURj3dTioNL",
  "key7": "2Y7J8CivtgonrG4FqNbs1qiqWBr8FLMgcNttUrwnJehJedjEUHc7uqRkA7322oUomGE3bHVBPZ2m5B71K3ssbDG6",
  "key8": "2gYf9ze6o4bdLZ2d955MtSBKwDdtGr5Ah1gXSWQ1jtppn54G7E5osMF7evyyGSRsK9TnQg1xka1PPCReA2NbRqQp",
  "key9": "5jLZcgr4jvMXV5tHe8xo3XAkwUz5YCQmLqrcFFnc6r6DghcHwuDHf4PsgBeMaaGbiaRfoSFUcyvrDVWcHhPibnyT",
  "key10": "36UBQY7Wn3p6m2VR2AoXrYf665C4yP1whX82PFrZxnDYL6mgrFDkY14RDencyrCkqoV62uMcnM9XpwUoc9JzJB2w",
  "key11": "2nJzPUM6NwgG3XPeWjYwCpEwR1QTPfbo3aLKu2rvjYLnvGiZDxRir2541bhgctFBTEcwEEgmn4BjjXz9bZpcgAUD",
  "key12": "3nymURHgSUzjYTVUcMNvNbKnhe7k49qfCE4aWMCRRrN8wKFqRFZN8pTvv3TvgXdwM4N1utjAsatGHgi2pdYXyFEg",
  "key13": "MT51SstAfWnm4F3wdW6UoJtHchPezMbkgr8sXibpB4GuKaCuo5MGP7oKqMzdLdM8qPQfyDiv4dNgL7YH9HbnNui",
  "key14": "3vZdx6A7unj1Cz16ss156diX53ZQsEFzoCbHfGETDBN3ftDgQCKP5U7DNefYcZudMUL7LwV1oWHQf4GyNLNbgT5d",
  "key15": "dgNtHX34gX5RfAMbPaEVtesWpNEaGSqWs5jBJiP979pCvmofpiGCwvgkd7bckArysFTBTsJo3p21g1eCmMswjkk",
  "key16": "4KvscnSVQzBFs1vqRhyddx7ggdPF4k2wJ9NdwvVgDt2hehkttSgVXcCPkG7oHcNazMyjXVUZagMa1dp2tcKvrvy4",
  "key17": "4SKfUjMtGB3sG8FXYdJsEbzwEznrZFATFHc3P4DkCJbmm4iwTr9AvMVJd4Mmk6bTZtg41iWb4pB9MjMfaNop92BL",
  "key18": "3qVMG3dq5xRsQ6G4wzgkgRtx5Zkt7dTTCXrFQVVMYVenatS3Z59cnTSbsyJHbgzLa8Ph8G6yrzYrhV8yUogTAw2w",
  "key19": "2AAATYQ1VC9HmBdPepS3JmESaN9z23VFAjTVwJciQ6bExvfBEJFqtTPxAML8auExjP7A7zHwWnh21Y2JDagyr3eV",
  "key20": "3JvGHTLB5pC4fpeZFtyHiNqbzpf7qJKnEnqMSdCG9nDgZUNydEWzGx1fG1TkTFhgyDLxomzwg93CBFWaKPa4979T",
  "key21": "5gjarAGZUvDWwWorMjLnGBtPJD7aMgdtHeNgcJyyEHkUVkQwNQ9g4ioGqg3nuYDTccEpeApZXFcQhm5AWJxmxxYp",
  "key22": "49FmnSvrCzuH2yG1hiaPoCfTzCkvyYR2EeMjGPxin3Hou9wHcFZDodoHssyi3PAYwsMXnXzbxQWcPubFgaUCw8Pu",
  "key23": "3cce2sFGkhDW7uLuq6fUS6tpN7pkzXRQcqw1QEd6LPfyKZ1WaJtH4bLDQ7Ce1NRC91gLxReVYpwL76QWLmzbHLDA",
  "key24": "XokfdepD4PGh8bSo8aqoHrvpmasdZzMWWLqJ83Ycy8KZuV61CKUdLBwCKwDCEwGaVN5MCGrVaciwkU5wH1mUBS1",
  "key25": "2niMpLwumPtxq4RYEDVMvQE6KTGiQu5wLUNevTjf8W2TAnSx97paR7FyeYo58gbQ7j8Wp4YcCpTgk58zL28dLMmg",
  "key26": "3jytbJjtzG9K7XimzHRsPAGM7sPCeHdreywMWKgurP5geT5AHgZJQT3xxosEQYiHP9QpkrAN9h4iR8sg284jTWWB",
  "key27": "2UtWeRTewwVMDsCHdRt3ScvTQ9yJHswFy7y5ppLR1m6unxLQuHyy5itSmPZN1N2fAFpBywJXpzh5ypZ3fjY4J6zq",
  "key28": "5zU6sA1sHnMCfPGcB53pw1iG6TfY317QwPehrLdJ19B32HKUd2VhK8ccCkUFMpQCRBJfSvcje8becYPh7Z8DRXR8",
  "key29": "4MxuQdSBe9D1bS5ttY78Qkdymi1utsTAKSVNQQmf1aQ6Px4WEFy3EyTx1WVULTnqJhFHppCfvh8QY5bPuixEtwNW",
  "key30": "4ekBEbG78eAfdUTN1wBz7CjsMjMErJuQnr6aV3XPKgGz3vbB4QsrHn9BAjc4dXVhD3J41FjuxYFfRTzTi7JVWfsb",
  "key31": "59jTn38Tn96DE43zAjvSJQAaF2Lb4m8ehegZGVH3NcRUu9hbkREwTFjBUALVVD3mksnDZe31uCj7VEywYZE3tuw5",
  "key32": "5BFDpEwj9Y9AXnfwc6NNFnBGsb8RU1JWUUxjxMXz2TUSnRiGfAxDfifr1Ms2vwQ3rq9iuVGRvFPt7g5mMf9bcfn",
  "key33": "Noj4i1qy8xpaib1mZZGCrB1i7Ru524fVfiJ4uf65kLj7AYoHJ9dHsnbBBvfBAvEXzmAcChvxfNe6ndPonnqCHWC",
  "key34": "3f52a1ZGxA7cq87uh7a3XbajBF4PpH6emywk5QwX6aPdmRwwXKRs7RdK6WJiPyhRxY5banxCAqU1bbwmCdgFW5GU",
  "key35": "3eRfJibxAV7Ss6Y7rgxGkWqzSnbzHmFffhynJbPDH7mb4tmxd3d9PNS2Kw5Pfq34jj7zB9Rwk6F5KxDHupRvBuTV",
  "key36": "5tgfdY4oDuJo9QeTPnJh2sCBVK92ADJHdnc7TaDpYg2BSVrDjTVZ7B4PQqWvUgbTaNt184KrLPaFvMiAAQGhMAGX",
  "key37": "3Fvn4JWX6FmBUY8NMSHaCsivkV11dehkfTDiezLgfakEvja2zjdvWqLra2TfVSoLV4bAorXdCn75HskgweycVUeU",
  "key38": "51FnGXU9y8NP12AFBswHgVMXRFdL9gC2NmugbcFtBtS7B47gWCnHn4nxTLKnkrCbwXdyjouHDibPBjoV5sMgsSCx",
  "key39": "26bub9PDnumSiZTx5Uu7mhfx2jc1p1eF927KWBSqhHwbnexb8Ht6pZv5sovrVuMuSEdHGaYA3fNNSGAYFM81jBpg",
  "key40": "5e8ti3UM8XvJUcmih9rJHRgqNKtjvuxM7YuhFA93v3wJYGwDy3kH6RSuG6zCpAFdkmNhYkwiUS7ZKgeqKQQB9zqT",
  "key41": "5KoEvXGghxL9omfybqKRxvB2JW35MsDLroavwre1uT6tDfcdCLownYXeLndVyWL8UxWSYzuynta3wAdJC5jjJTzi"
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
