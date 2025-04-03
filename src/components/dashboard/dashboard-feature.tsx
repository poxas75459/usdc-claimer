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
    "4pz6DGJ6nRwiBNt4JVuZTnEjyCfCAEu1KhbbHLDYojPxn4PSqjxgUi469Jj4FGbE9Cahc3Y8FevYGGWUJ5ErtDc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pjsoDpBF9sQPbim8YnFTY6zJ3zvd2kYEzcZvVGtUZghW9ZKFjNdBP5PVQ1CJgTXKT4rnQUjGv81twnqaqS8gXf8",
  "key1": "kUAYyYEssQWaybi1HPAbiiHFiGXoKhQdW4WXJkuSnUZrLBSt18bdEP3S4VGnLQRpV8ydEWUe1qBMXtQuQnDwjhZ",
  "key2": "nBPTedPdqGVnPGV3GzfYvWZ3LJ76RK1muWsfnsPNMaKbHvVVW3yLohRFEh7YdEzs7brv9YP15Xdvu1XsNdGtztp",
  "key3": "25w6rdccK6KszuZaBgMtv83133ohZZuyGpA4x7usntiBRdPRzSSkZXA4geAMfJy3Z453jVtPqwrBJxy6D8LjmsbM",
  "key4": "4QRt7CkWwbZLZnnXg3Haxk79MWm2xafxbnVmKkSzsn7t6LevHEom1AqZCqFq1PWSb6trKcS926ad6mPAADgV3S88",
  "key5": "GEZKFtPD46AoS321VBwsuK6SEoXAW5FeeREVY2rNq5QkU1ASwnG7L3x1dGiJfZNU1T67XYSBuNsdgeWDrE5Cb2f",
  "key6": "fHuiK7ch5LE1fe8g5D6nsGMKnF7MnharUXyBhnEEL4B81gr82LF8M5GXxji6QnVjGaCG3BduDbhn3P3YHJaYm43",
  "key7": "3NA3RDxQejDAoJAYB8K6cqu5YVu7XedX6m7furYuqajB5CAAQiCymoupoJ4PtUJCperEuQciV11fYwP8NbAM8L4k",
  "key8": "3D44wZkpHFpoND3kP1aXmGwHDnmGvQuAqmnyH55nXWEXvhsn5QMAyNaAf9sUjNQmVvVTY2B7uXqymNxe6thEriLA",
  "key9": "2Pg7aykxLczYDGfn6LAgUtVVHsBtcfFf6h3ojVRkHmd24cfNS9AYDwWS7Yzbu5UmXqKoJYyKf14QAb6cHjVJDRLM",
  "key10": "33zqfMUM6dr1xj3RwNMb2S7iYTJ7bJ82SVJzUN5hRE2p5w2Rw6EN5BXCkcSw5PqxQwP9HaHTphMn2Qc9Z274Fn4u",
  "key11": "4C1WJhfnBKUwZ6StSNwivRHcstZQLwnSBY7MkqwAaZWSr2n825pvaNBsY4EnT4SJJ6JHHgaPUfn7irUQMjrEeNjb",
  "key12": "2NY73aZ75gsGgyZGC7nYvuyvDpm1UDgVYBcN9S6H1qmfafxzrNuQE6z3xsLfQR9Ub6jXu5UEKnkssyZdHGDbnkPJ",
  "key13": "52VcY5j7HWaVrkPFFmyJjtdqVGtcA6XEQU4HLmWLbN8pU8ek3oH8AVxnz3R1URnAdhw4y7LQYVz6d1xsRXMc4ftj",
  "key14": "3jLT4xY8vUMRyWE7YNLoSP4uKwiepNDxYBfFjMgzYLbYT2PBn79ffqfFzznca6uKLCdpUghKwLhGLEJyHLzQ6Dn3",
  "key15": "4D8tDc4ERSdXKzXRm5RZfffkpDBoxuVwfcLWK6nEfiMawNrMWDQZ9XXMtFkruJbQcyoMuLsMJZHZyLPdnASS73HC",
  "key16": "5iJXkEFLksNQAcUtiPsHyAkgS8xRyFuzJ6BkjyWTfyiMpSeMcHEYhgGa3bmkX9W7YqQrM3HqWsT14t88ei6akMPJ",
  "key17": "2MSkVe9K31qwq6jnnjYUWmzSd7A2cVz8dETG97cQVW3tcBWD2stpdytk5UNaKWBvjKnAhA3BwLwes8hGsfUusand",
  "key18": "22WRASkBTtVnJD5WTaA7LsdQuNYjw1xwtfNLb3JnYRuJp16k2vMRvjRdf4p3X9vhfaWK4Lx8DtqGTLZU4poU7Cjk",
  "key19": "GnpzZN5cYsa2NgGg12BjvqrZoMyz7CnbqjZMFzMWQY6d3kXntRjfvvFFx1qji23iBjnhF6XYwvunHp8529XoEyC",
  "key20": "3R6Dz5GJHLGFUnSPq5QqQkxUy7nceNGCuzxgAjvnMRpKQQWyEGXbSH6xVfHWcT9jmcSzsfUfxgkoBMQscx241b1X",
  "key21": "gMWP31UvdcnNqgDR6HybufUugvLXgGLBT6eCBm5gfgDvmMiCuj1QJ5ULJh8mVfwPPXRxV5GvbfeU8Efxv6BxiPS",
  "key22": "2VcSjZ6VvWSwRGq51XyyiWPG2qYJx6CUuvA5uRm2xFw2UCQBLoofFbcotE5pLS5KEo47pJVj4ecwPT48mrweE9rD",
  "key23": "2UsFDqywrLmdGGZ1uHKwXuT1sjDzqrUWmQEXQdDro9aeijcXsofrKP128Ht4EzFTb7F4qLKrHmPjijgUFtREnsJG",
  "key24": "3qNevhihacbfAK9nNCEUhw6etsjYQZPveS2qLVG54U2aDXs71mx8GwF6i5yJmSLyukPmeXzJD3RdDdRta9DG6JPF",
  "key25": "4zPdYiGWNF52f1adWMBYax1oukSuFrUfZhVwL6t9aNyWLKTbYVSororfX3gF5chU44aaMr2zndnpdVv3ab1Gcv7",
  "key26": "5PCXkHxqbAD74z8pBqSMbNw77QsrsoYxdZrEVXRjPg3tm7ZXVmp2gyywBbqHyCdKSVZbqM2s3hjn6E8CFen2sc5N",
  "key27": "YKm8oLkrxEKCNhg5g6GhZNnXSgwfTvx3XYthJu3WYTo9DmqeM6qyk4ESFF11pja7Knh2toXDBK6JdMPSGLnw56q",
  "key28": "79Dyf6HDr6EaDq28yHofL136VrwkKV9UjAcKF2LZcCpTPzKFHEnBxZCoWtHd8epAd1P6VEsgYdhR2zWFypA9bEo",
  "key29": "3ftfFPkVYdpod8Ef3poXkNWDvVhtU5A9d1pFkPcZq9eLwFinF7i7udjF5BZdjZLjxacXNZsCdGJ7XD4jQ4z4M97H",
  "key30": "2zQ2ygcXGeme5fcVPDRfAGXWcL8rThqDJFMkNFyJHXg1SXR2nekSgk391389AEifY4XQg1fnx5vYBRP5bVBnD15f",
  "key31": "c4WgiVyDoX41Qqhui6jG8ZA6GJt5MDHhz5mya7jp346R75BEW5RUnsVRUrodX9uais7e18cuzi3xrV1gvo1vz8p",
  "key32": "238kT6Bf6HXQcmsFtVq9RLbs8LE22ucLjQtBX3tGkwxf5g3wFaoLmBGMTDTqb1t6uJpuR5iP1P2g4uLzCrtzDsci"
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
