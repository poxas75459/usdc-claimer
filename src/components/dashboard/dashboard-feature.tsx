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
    "4NQkJsQgoELuyk1KcvJ4VtxRyPDH7T6YyML4Uaozq3VYPrAgcrimxrACEJ5xiHKyzHNaKAZGEbZ6gAZWj3ztPH5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzXZzmJ8oSTC7AEBCv3Ld83ipK7Yz7eHLY8Vd2fFhGGegjr8sxxRWoAfYXQcDx227p6pTQYNKtABHMMZbrf1jX8",
  "key1": "5CbMTcShM1QzURQxU1KgaAhpheqZGa32nbsM7XsW5NmNXxkufFr11KpmKaXrDYQVewfGGG28yKLgEBryoN3WkJVz",
  "key2": "3YACNVwkPX6Fr4KawFd9r4T2sS3NEZQbmzDvvdVpqR8ZaL9L4UM4rbQeG4dL3Co4AyCnYYGaJZ6fWYqdisGq9FtP",
  "key3": "2xNAn5a6h4MhRf7a2gGDuX2t5d62okPbeM1hJt18nRiZ9dyqSPVg4X6FXF82kp9bE1hWnAAsnKiaLyToLry9P433",
  "key4": "38EASMM6mqdfcgwCjaqwHcpMwwxuxbc5CdUhsinNQifm55YLsdTRKKjsQdyravg1DFsh56N1k2CsdNEXo68Za9WE",
  "key5": "5SjYCgEWHdRY6Gib2G6m3g2BWdjV6JLbEr2MxWbjQaFoajvifYZsP1Z7ABbzy3XecE3aLct7MNhxfSDPN37pHaSR",
  "key6": "5XX9NMadSaQgJL3on4yWVjjcLnSL75sDFzhoAwQroZTCZvJg1hFUegE35JSnLbpv9zmi7SutRT3WcCW6h3My7swh",
  "key7": "QNFTGkCn3qdkEztMFyAsAABGVrMGh2VUKhULavyqFZqCgTN4b8DLdVCtuT8gM8P57RCSmubuyjQpNiTqVHTGmiK",
  "key8": "2qxtJk8Rg39B6RuUA5w654N5bT1FL1oTXScQg9NriMjvNw5WmMqNd2FEfRtaqdkJ64R34pCnSBEYtk7UMMC6gEog",
  "key9": "3Rp37FwzL93MQto3UPMv6rEmpQBC2bQxXJBtnnqDDtYFepBnpcuQCQxG6h4uUwd8NQJodfHNXxian9bFrcBxNrcu",
  "key10": "5K9GEdQoSSAwmV4ixTMwsYPsvsvMAbVS1yGfxTWATbz2hETYpxFjAymJbrnYTti3DPGoNZ3CC3ZhKZM1k6xEukCk",
  "key11": "2q8sqw2WvE7dT9X6DsH7u6zhUXSHMA4pi9gX8xcq1RPNQxSM1u8QxLoEEQPvNxVWNk8ckW1DySNyNRAcxJZjS6xB",
  "key12": "4uJXTuTmqu9K7c5Fu7scm7ApB6XQ2Eq3QunY2DxZtvwBJjkqu7z8DEUFfzer3JYkKEP8LgLJS16BSoQLCpLccSxZ",
  "key13": "26VZLJZbL4T4aXdVujFBsYQQftxPPXjBGJw9vpAbQKRNxLfTX4oYENHuRYH8Emsi91hvh4qaeupwbSK7df7h6P8Z",
  "key14": "zJVxeEQs7meeBTnChky1wsDsS3wNeMkA7z5A6nqCkgXk1S8nvUdD6RfN2BPqkk7VTcG6ExHArdrKRf4q78hyryG",
  "key15": "vDZ3sF91dMBe1BNT45ZiXecy1VmtDtVneCyLZQeyp2h1zruPEjyK9aqTfZVadfwzd9yb5eaQf9PEUWt4S3Y6FzZ",
  "key16": "49HUnmDwpZz9fYwDyHxHAQotfZ5XQX2vEySE8Wq264JSqDsYrYwUbtiJtmwRG1QCH4BmER7UGsh79rCwwVWW6Cth",
  "key17": "61XVN6RctrvTXkuFg5EL8L3crnwdnV4m2QjLfiAru1pQ84SwELG7y1Avj1XAKLAPyLvdsaRwM66CDN22WrRkE9am",
  "key18": "5uNx4rfith7SoKkiLJF8xmPVbAiMHCEaY2EdU77pXbCm8q4MPbsvUo1Nn4veCVPHsDTQuL7JkzuKfC7Rntxsz65m",
  "key19": "3JD1qZLtQXdLi7MC1DjrX1PvnQ1pLKbvyPRoH2fZo8Tzc9sDgYMs8aDBk9rwBdSA16VvxCmjTarUjSHL8JDUYzyD",
  "key20": "5QvkaTaf2osM8qTkimunKUxwwdFSdWA5Q5RLVywy4c4yvMMUmEqoBydPYiMrhjECGBwzBiyqzrYuu17LpZwoTWFz",
  "key21": "3GcYP3etdcPzvBG787JtGwfFAVzEocenfgLn5y26v8D3L7V4CsgCs6CRF9xRNKyug9ATajUM5Z1yKdmPAXNyJngN",
  "key22": "X2idXP2LnSgc7jH1hUjoPJaFDrRQuHhyq8W3JNhjBumrt6qT8LgxoktnbjVgt88tzrWNFWiLpysPX7wEEyaLvDG",
  "key23": "64GpWGTFmRbH7rH2jFKLnrYidW3AhVgYrkiaSF66ebKcPJFiNeX85DyuWNv9qrWyYWgy5uR6w7Weik1MaoxsZQ6P",
  "key24": "3K4oEerME1hai28usQYBRgHTpHsKDfsZR8gcr6C54bcZKoqNMN8HHfao4a3B7Rqp8CqmrubJZwtvvXTC69NvHii4",
  "key25": "3Ui5SAYg26jgWkPX8jWRQPRgs3kEcDfLPLAWE9BTeywZ7hupvG3rxzfkDQkuFKEeiJBTDH9uqyWW1RssmPJsH8DM",
  "key26": "514eXUqLM1Pe8CBCTshHX78R4JnbGX9hYRyBceZ3YnqodzswZywWKBBnWq7p4ktZmS7zyF5V1z4VREe8NBcGctAJ",
  "key27": "4qKo4CVCy6qnREcX5BhE8nQ1gALJtjnBADA4NJXcjoKEAEFcABTh7ZSphMSwB7rWSML7iu6bcPwdm5FKLgr9c1QE",
  "key28": "4bjF9Ugwa9s99RPJbtdyUb8eHRMS5mYdqBhLuNES2AUA5e68KkgaXjFdKXUUrKRiwZUmMdDL63WdaGSd25gYbGPN"
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
