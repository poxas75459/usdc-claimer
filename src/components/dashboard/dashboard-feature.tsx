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
    "4e4rDvVaZ3AE76Wh8BWYXBNpSDQEXw8sEt8288BhQBmzQbsw2ghwogo5bvu7GzKBvoZofDPJKJS1ThrJrMEPMKnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heyux7izM37hfqwmmQfn1yhWkiFHJPgMwpfkPZhfXcFcV4iJPLsjvNqJvttakkCQZHuFWMm8M5ZQitWSu12ziJN",
  "key1": "4DiXvixk9AFGz1a5Fhuk9WGvyjAQdDCjKVexwG9vZLSvxdT7JnARtypwFfaumEUhAndBB36ukch2LdnDugTY5Haa",
  "key2": "4fEboVy3Gn3tJqVDra8w9XTP2Pf9nGfiraknEESSXCch3262jdurpvhF3miZWgF7NQi8iGRFnF9qcb2nLgqhvAns",
  "key3": "3qa26gBrmv4uTYzF8Kut5yrp4MTmD5dEZyoaqmpUrFgkX1Chxk5CtcETjW2cBJ6BDCiwgMuYgGs1okw7xQBkncQ8",
  "key4": "3aNFT2VQYyzE48Z1cRDpSUNtSKfh6VgkWEXA7DmodEiJA19rVg4fmmq93du1KUYd6bBH5oWk2ujaxL1SfDZyFxEb",
  "key5": "4mYRchjm4iDt3tAhyv9g6Gvh8VB9XPuBhoPH3y6xZSM43wAt5zU35qed8LbPw7NQNcnjsuZhYLXHqSzB5npg3EWj",
  "key6": "9cLn1VAcBZs5BRUsgazwwVf1hXi1p8EwoXMYv8MxyDrQRP3Ua84EV3h3HEcdJKM3u6P6EDm81nw5Z7Dkz2aadPa",
  "key7": "5XWSd4i6vpTYuSKkR6J4bjFN2AsrV1G1eY6Qv7viMNPDWRXmaZ69UMj9A2HifkV9YNnyB2Wic5WJgDAGLwQ16YtX",
  "key8": "MzGBe18DvuBKijkVv5wmoK3FcLQAzB8G8RbcBS1jNHm4vKj3QECYhu3hVhNfVRB98876YjyZJu4ZP2Nj5Naq6Tc",
  "key9": "JEEcT2kNi4b8LgFiS6ksgnSiVjozachuecPbtmzFnYTFrCTEqMYtAa8oEMjz45u16xWGLZrwPzxmYRmDDP77QqZ",
  "key10": "VHMSk7EEMywc1AHWPp1wySLdwS6JcKPDGgiABZSHC5Wh871jttrdcspDvCVjuRQLSWnEKnTsN94dS3aUTCiavmu",
  "key11": "3JxmCowyhStbMnNJWPXLA98ycxh24WfvJSX8H8PoyPbgG4efe3u87rmsHdyTCfbvreMpi991HnPwqB5vmyErSzXB",
  "key12": "4K5x6i85QaJpBRFHe2qaMraVjBPfKHbkgbXctFw62vjxDeL3xVfnGHatjG4agR95YNjAkK1Ej8BxG9ZF7k8beaKS",
  "key13": "5eezKAzZW1RRBkc31SWfeWgwWnKEDgWyegrsFApY5rUqH6pwgza4TomHirxkgdjBSAxrbe7TEfgxrUSSSxmnGsCN",
  "key14": "7jP9UTMft9yGyUyhPvC55Bf6kp5mxjEAv2dHAQz863wX3mg4pUPwvq7xEJAjw9uBgxZkFkUo6HFRCAHKQ5SMENF",
  "key15": "4PhdBFcAQkroJDNr7Ecjw54GRhjQuqnrvjNn2sTYPHDyZyx2B4tD3nsuXih3ZRZsn5aEZWYTV3b3Jt5mw848dmFN",
  "key16": "44UKjRRszHUtaVQqrEcqTKWw9jZD4UG8Fhs1rsQfM5ubdrXUwUsP4dyXMw2LKCxoD2Y3TrDCVvEuRWS3R6CDSjEj",
  "key17": "5jp9e8hFh9nBJmEeyTf4LpKfkZJAuH7YWsKRgcWctn26GuszYmXWjPUAZFHaTytyHCvyvYiduSTu3FBXASovaaQh",
  "key18": "34mVMB4ERERJ17mqpE539T5Ejpc2UBw9tJS9opTwX6Jhc1ft7N9RX8KFZNUSpPH26VM4gvUXbAcYTk1j3rSR5trD",
  "key19": "5BcW5eRywZRdnoabovgPRvv151NuxCGJdDHBSFhvM2K8QzfayzaKYXbAgVfGyVrgSbewyYo6nP2ERyX5AUaxmhpN",
  "key20": "5CwAiJ8rSk5MDfx9hTH69tDq55zFLzm9hvTp3N9aiNyMQ3tjERNVniuAoBj98jiQ5Z2MPeDRH1iV2ArSgiKHM5j9",
  "key21": "2Y1zDdMkGB6Xrz8nCPAXcCPyoGcL8VqAgx6bs4TMXzyUBCJHmT9NAdT4FrW6TRT1VXZ7XjtxKo1uySaa1C2vhK8i",
  "key22": "5HK5ZjzAEVJce9kThmRJfJ76cr63tpJ6hxeHfVq53ReV2rJCUQtY7qf2hR9AJ5QvZp7ku4fkut1zvvpPYj31fiwN",
  "key23": "4xiwMx8w4XpWzruGHWJApQ2RQA7RW9387F6mEjHc6TKQcJh5fG6bauHQKZKe4exfU9vtFvx2AEkWdUR2stGbHry",
  "key24": "56kDUwXkPjn4P3fYhKWfghUSXQGMKtDBgPmESTjDaDZCAykN3Vss7KmoX5EPiGtEJvLVWE8K1twj1Nssc1gH6n1z",
  "key25": "35CibjWMVGwic7sYNgUkZywqhQ9BuhjutbAE1317xUGz859FcaCvZwu56JddDLWQYE8Xv55SDaMZ5EY5issxw7PQ",
  "key26": "3L9CwXugo3af8MUZe5FxXDEAekZYg2SZTUf4yDtAMxWM35C5sGXVrFKRka6e4o3zUcimLZR9aEvGXBknpgJKNR2c"
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
