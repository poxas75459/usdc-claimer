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
    "4MMggEtpXQdKitR5gQwMvynYrm16afVx4v3uU2GkGPxhTFVFutzbP8hFS4bT9AZnYXSMSENbCEf2LPqoomRU5AnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViyaELDgPU8B3BRvyFifDqGx27UJcALSsrAGfJyeGxa18B5HqKVACjqBc2edLtJPKihqaYFLQU57G7wb7FEu3Jd",
  "key1": "4779Ly1yJYazrjuxSdYeqQffpBE8M4QsZH1tSkL2tVRXit1sNe8UFXUmML2noyaQzZNGjQjyF1JjzhVwuw9n6gVy",
  "key2": "2zsmau5yDEr5VphvB3Y3dfUuQUQUV3t68rBxvaV8yM9BP6pzRdmXgjXY5M6vG6pZ1SQ26T5TFywhMrH6g6QGcjZD",
  "key3": "3ZJVP3wZ4pM5jp99nQgzZV3DMcLLiY5NyvXXi6m6LqWx4o8yeMSvcBTK8XhXFX1p7qyJJyRXTPKUqjGDMn7b4pLQ",
  "key4": "3FQ4SajXiPYSuLcPwew26EFwTKE6ViNwa2jQmptEF43tCLgCFaE6tURVaD1R1NN5rLh1rPfVE6YgoFmAd8LKbJbC",
  "key5": "4FaecP9MonsGPrgXi9VnrBYtoSWefz7RVubWmwG5sAveP33CELqVrj1eSa7AuDx8w83VPzXbGrZrpWccQMhdQ3RP",
  "key6": "3WQ5Xn67gcLzPX1fhBU3YWk4K1VA2RJqovoL3cqY3LSKKgmFNQeaQdA6AMBqPCuZQTJnBoDmaZ7pBuAa6Woo6Lrp",
  "key7": "4CCBMar2K32ES78humjZYJDpMqVBQjsDNZW2pB4vxftmSqVjozfbQPLJqonwcaAm5D2rbMhFmRBWfrFbRruvg37r",
  "key8": "5JKLLjnyn1mK3tmUhbTjF1bsfJUstQqgaBuenP5AtLEhR85TaBJ4uZX4gGRBhXqWu5cYGDeUc9993WwmyYx9xCiD",
  "key9": "3kUBvFAdHq2ipPcrHARr388gDcik8ft3Lai5fMeV5E7N41YVpUk6DKsic9b51Vxvj7QPzpuxvvvTcuDW2qDT1yWJ",
  "key10": "2iXyCSe6GDUHs435qesBggLo8SnYZZFEyR39Zr9ZNt37vadgkDfJQWyc5ej18CzA3jqdGNboMuUnyzPqPu7aE9jG",
  "key11": "4J7JG7w9L7RZBMuW2GSkbK465SxVJvXQp96nMVL67sHwHLp6226s3dhtjmEA7nRq62a1s1zGK5CzwcxdhLFxLLJX",
  "key12": "59tyFcWr6tTzw82x4PWadACGr3tQ1Lpp1medsBTPqN1UfkmPNAQuqmyn8gDxVAGwmGLtmabFYAYRJMwZZxjk4JXj",
  "key13": "3Rrm1WoG74eUgaVtLQxndBfJCagaQgKT5pTcKAiS56e3AfxQjSSga7bTV4QxuJPREJDKgmGREKRaFicrAXovcUyo",
  "key14": "4Dmck9JFTSZ3rTJFem18qMmAaXjTt51hnSjtLNuZC5QZWs4E8H7GioGysREwJkTHQyX933dMKoFuNvr7w5pefwJu",
  "key15": "3qD4QMaPG8EQyhEjSd63SBMTMEPxQ29VDBkoywcPJRBLSrNLV5R3K1qa1AZTbHHrHVqSYxU1BPKPgKh44gxYogd1",
  "key16": "4fFrouPohxY82V3fgjmfcs1zJHuGTFHf9ieGEphNZhQJhy5mSpPzWcoy4rCTHH6v5irHyenx5yYT7dq7aa9MZg5x",
  "key17": "5jew7ZtfHkeynvmwN1NPd3Wtc1xcrYXRm5ho1uSp29Q77LhF7kSmuEEErGHUH9AQXgH3bon7uNWBoeGspJcpRVvU",
  "key18": "5MJ4XwgXyrkaw22s2C53EkMcWeMoH48mPSfnkSEXVkvY8GbDxMEPPFV8DNXtVmaafFEqz2cb5mP2RjByaBETz8xa",
  "key19": "4boPenenGnGjPz7SeyFBbjGhSLtrf1ggv95gY7xtWEQw1BswWn8smBX4ASQ4dLuqNKF15rzWbmu7DoUokk2LVQqk",
  "key20": "5rC9oTtLQYoWR1qvJFShVfsEdWrx9jfK6ciKJ7kEeMka4NbTXqmTEVvQTzGy5zU7ua3ZhPnnyjFumxUUUGzk5CuT",
  "key21": "y8wUdpdXAdbbvsxs7y4eR4KdtDG7z24YhbCtVtmxX3MmCNxhLpY79KAxk88jqRoqueFT7hWaJeYnRKFqKqFTTM2",
  "key22": "5bZtxVpxwEjwFCQiQuB1L2AvrVjEJBUszdAuk59MiaxaqkBtSLTVPxqPTH3F7Afpo9Q5u4RzifWQUDnkkA8X2X9M",
  "key23": "4e8ctJviEmRMYutg2KAKaWBiET8bHYjgoVBqEVDaaUDLC6YgtkphxYJ6tvhhtydSRaWL1kYcorXCm9LcNMewwGfD",
  "key24": "2SN2P8RVa97bWWpPqukygDpoAnvpay2tcKQRD1SYH7JqiZgS51d43spSrUorpEEcmHvQKdP8eRkdYgkaFFgFdijx",
  "key25": "64UHD4yHkEBVdpuuCUrBb3mxRkEJrvqMdfReqaUpSKBP1h1FWz5pBFMTaohoBo5kv9mHQ1fMZgoJ9JMe752nczu4",
  "key26": "2BA2hMYD4hpiq2K8wdDCJ4zsjfc5f8CMy4YouYpABTi1YaAorpD9Diczvz2xqZ89RcmwMhV6hLnYKJiRHtVHUPdx",
  "key27": "2HHYqn7CQhxcC1kvcJ2H7tiiXNkfub44fwsGbHPPCiBxRBsK5BpffUGf26ojS93DerF7AAdfUR5Xw7M7GGrdZjM6",
  "key28": "3Y72cQAXieXbP4NUYqm1eNPtBraD6pBNrT7HBgv1MkTk3tShDN1K59EZpzPdbmzgq7CSmxmY8mWUWW9HJ9WAgJje",
  "key29": "5vV5WnyXV9nmqCrphVoyPDDGigCT21bkSQ8snsaPTqH5GRKrryWVJPBTLMYWhYc1fJvphDaU3nqZf8U7kgLojvk8"
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
