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
    "5Yr3CCn13Nx8Qz8ZXKFtgQfHxN1b9Uh1CzT8dfiotUpqiHS3C1tEtvpGX2f13n4DY912wAY8rqisz8YvQt5zgEHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43o8ZFQ755Yf3pg7knMBzAwxYGgcXkPV16D3jSf6gEHMjcVqFHD6hPSCBY5Adq6Sg4QC2YyfX9NFyYHvk6237fCE",
  "key1": "52idgwvqB8RvappJKd7sZe1bidQNeA49QU8hEQZF45sfe8abgNwnWZnuHaEzj5PWtYXWdYpB6bZApfccvB7RB1Av",
  "key2": "63vB3SYNMtDeBEfsboAmCxxMkVCXgnfDtg1kTKLbh85EKCBQyHMdzgzrXzBxz2VzYn8sUadZAhVoqKFiaPF6bxFm",
  "key3": "42BCDn9naYD3Jd3Z3yxXc1pUcEMSHKQ7JUDumkkZQ82HPWgf3A49zoBc6Rgeawc3kgii7PJoqBdJBWRFWtmqquDL",
  "key4": "3exC54PfwjC9JvJJEMiQvVydmDbHvodoPN57pVk7yMX4ZwfHVjJBGM2iEYLqbyGgn96iuU959UVi4Es1NA8vaGp6",
  "key5": "2iqNzwXreoUrqmeAuN3vqYsdhqPcY5uXYcFft7kQ2nQb6knM3kPJ1YzZmf2JG1XLjTuecXYXPArNVEUTnLYm89pb",
  "key6": "5EjFpFbXXd2WWqcEsNz9cnsCB1zrL8hWRNzTZFX8iidwDYs9dfGJAMBThFCg3DN6Qwo6Q1VxeWzW2vRU7h7CuwhG",
  "key7": "2CoGV9kvQTVKZpdRY2Gdw1FdNuQa6U4zfKanmDqysMFd7SgUmnCoY2QZLrBh3rAuV9V5BFxq5i188FUA1y3VWUv4",
  "key8": "41scFabvi8vZUr1gyQzeEcE6DA6aW5gX2AYduguweHDhUETSnedwZsxeDHiCbiWagcWquLxCP35b335T1S4hoj89",
  "key9": "5yBv4zKFbo2SvbqLik3qmSFkQTt811yQfciUqkvPwZNrX8P4tNZiphNNDNviT9WwvbPWPDZziQgkjmTKd9EzLyLz",
  "key10": "3VD5iVYYkwo1W6RBKAg4EoCw4iJNDXpntFxrL3ByEVg2xzppVRafgGK2Z97czeFoRqUrhtU5bmdTbvNpLzj2AboY",
  "key11": "EdDXhSgkXcfvZrKexXTDfckPDkYiTuanJENn8TSwVYrMmsFamaPrbzUnNLaydT4iJyzdQp9CSjrj5LQTQEi4q68",
  "key12": "2s8GksYwWzWAp56a8FLHZtVLpovu16eWRyPd2J3b3m7hZacWrKvFvCQbv3N39nBix9VBzhP2LcRBkj62w3yvLiS7",
  "key13": "57VxwjRLJPRgzb9rTadBfDjyre6zquoPLMsBP3exibfdyunDPaQZnFMaMY9T5r1jRy9pKx2R1aD7BfdKjAk6VcKi",
  "key14": "j74yi6BkqjRQs33iPeD6cWEaSP2oCKfZKDZ1ytM78SvTZ4nscgoRsdb7CNwYcfNMT5W8VngJCS8EMnhmUnsZfjm",
  "key15": "2GHxhknJxtLayLMDu56E68gRW3oFZpw9uBCxDEAtNeVxSuYEuCVvGqL4DmojeHU1aZ5mBZ5ht3bGo5fnHcJeEYVh",
  "key16": "3meVr27Q8LbgKFKy4DZtXX8GEKKQkzFppN646F5vxGAjEp9tLFi5crYRE64wxZfxtaWkbtRj5C6Z7dd9EK62NCQS",
  "key17": "3fwgSXHRnJnYsQTGPpiu9X1EVxT36XfTQ2ziuiEWnDVm8NoT6jrq3UgqrjjBhxaZP79XAmcdhmcedd8y1z7Zydbg",
  "key18": "5zgtpp1soiJWfiqVvpjx2JJh82Uz292ebmVmkQf1ySZ8DKX6JxzNnDh2GCjWY4qBMKeLBXgfbiKyA7VWE6fFUXpG",
  "key19": "4DRAonVHngrpw9nXCLdeQ4WjBievp9ainb1AiqkNHv1vbxJbDa6x8JNePkMuikZoAvHRckZ9WuWYN29ZD6YgdBzZ",
  "key20": "2VgNJN4sYUDQhaFoEUvK8gWmuHePknsyBTvYamJdyL1fBZUo6CNgWjeytEfz97Q8AvkDaQXBCuivciUyDjuQTXoo",
  "key21": "3ii3WVN2Y9TQxeGVsKBUJSTDsLf9Y9oRhzCV6vSt7BUg6dTQ9vw7wWchqsgpx6fYgJpCpP8GnhFfMt7xrvznGxEz",
  "key22": "3b7JQyGnaLfPpjx8wmo2AALqnEJ3Lh87DEEYFLYKMePkwiRPrVyWq3Pk8By4NmsArG4sFMy1gePrsPcSTyjjuZBT",
  "key23": "5Tx5Rb6DtXs9mhHgrUCNgRUjYgw4sQKun9xgB9pEZu1TynEeRqo4CpJHEcPxEAZesjDmQpCp9vxEA8qjcAoCThaH",
  "key24": "4G2QY17XrZcQJ6m9nhZ9eS7ZJ7ovxUidqdn659P5AcVFQFLeG6Rrz4r8b6GVCBqE34hjVRf8jn8SRYgEWA69eRox",
  "key25": "2KUWGWum4qck7Hm42kNnKk4J6kvNVVJZZJBCxcWHF83qkCb5BC83R3diHYdoTpkBVrjVdBw9YL4iVkq2ipmotiRx",
  "key26": "2wNXYocfADmZg2RKuiz5zNKBxSqH2uGYTgW2uD3Ee49dq8X7un5m2nV1Gt1fMWseiGCj7CGMfRoBTfbr4rE5Xuvr",
  "key27": "9mkBJvnFQLYc3S6z3nUGifpUev3LJZ5TqkxNcZjV8oL4qmdj9yWnSQKypN9fi9VsBUZz12ZjvasQJq42qX6FBnP",
  "key28": "cLLsnyMQu3tvKm4ueupcBfAUAYqgxREAbTpKCALJcz68y3So5tVFTFNazxAWg3SNiZRMEhivSxHhiwBkdbr6asU",
  "key29": "Gkobf5VegK3M2BqAtEnXEGr2z1Lj99FrvnB5BZKuAQRJPu6qWVnygK5eYiZBMgAjTBEtRUuAbE8uPcFxpr5Hi7z",
  "key30": "4zvr5uFAXX817z6i9dizLPfcuNqxUuaF3pwKEM4yWuHWJwQZ1fpVgPMiTJiUMud3urhzkigCb9JLoMdCuMPZuEDZ",
  "key31": "5D7vuMxHDyb1ABN9Anu4M4bZ22YLHz9472XjuafYXYPTZsRWq5EcZWg8oZArDz3aKzyCceBVfiyYwKVS8cjzp8wo"
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
