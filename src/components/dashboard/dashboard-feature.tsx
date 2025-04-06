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
    "kohkwfyc8HEaDSDaN5QmJckqfivnXxGR7R57r8BDofJiTNhWk6gLcLG4Y5CJTCAMExr4kKQDbFJx95Kj5c1G4GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PzNDrzyZ72CG7e78kVkY4uiLrd3tTw6ifZFy1uBoHoj2HQ4ZaqGjwXk9jabvTdHdihyrhkqm4gJZyBQgSSeHHbx",
  "key1": "59WYiiMYaGHmnBYmSnivNkayAC14DUCyoYVte7Ksb72CERbJTJbgK4EQzyGk6LU39Mm2a8f2gG4A4cvg4FMif4sy",
  "key2": "ckjrkutrjdD8RXbEwUrwa39FxcEzEHxJBzJS33ALDBKFVQviYunzp4jVEPbKstH9JzawaXyZhDiHaMQQgYGF6Gj",
  "key3": "2NeqcS2Wrk1MMUhg3hRncgHir8ZvarFwsngCoHiTV5MZExvTphzxM1tCN4bGHETVzH5NrbUQhppPZKD37i5gENno",
  "key4": "4spCpJNCR77JVrsKjsyhvTz1EYpXsXozQTPBQKQVxngfykJ8y8A5kQ6fndobpYEVEjiG37DTEX8iVB2zGxDL2VJh",
  "key5": "2Xt8K5V7A8kT1TuYKTq6oUhdW7SX83W2fBbvQjzm9jRBXKDMWqqi9G4p2mw4yojHRVSonRaZsrHYgMrcMtVnGZsd",
  "key6": "3iEtYbV14zu6PyRQ8kPifHj7qJZCQieCF947pFfiq5So4XQ9Q6xav6sTuM5rm2babx5i8FEm72hgWhMEGNBUoJLh",
  "key7": "3jQ4AiBmeaHAm5jNpBgiNz6YUWrjPn4v1wnyrgyEJ5vTxSKif6QRwbNFXxDA3KSUQcZaSzbk8fQNyhUmrop2dcJh",
  "key8": "55fZSnJGCEcaodZXudsQKEbmZ16nTGvCoKnp2rES2SXTn2X8oW52dZMiAzifbSozGauvZSeD2jXHzGWyrra5UUSe",
  "key9": "3iW3VB3oEr9fgL94L238RWBNo5yGiA2EZ1AS6rAydt8NxpqPJJX21TdW5zRCX4q7ek529C1WPN42CG4znvNGMnut",
  "key10": "2U2voLwB7BQhwrfp7tUoXRuYVzgcUDPn75TqzDZ1cViym8ot6ipmCX6uCjMkPvRuBPAzTFBpXZwKY4i9hTH2r2Hf",
  "key11": "3T6YZNr4jxp1cCVN1a53MNaNUZVJEBkMFBXwj2ESnBXtMqFwsE9dZxJLKU5VwaicKCfaE3RAGvRTVPNbSmpTrSt9",
  "key12": "N39eTwMPmiVyy84958DVz6ubtEvPFVnZmF6FZsS4RHjteM5888GUuuD5VhyTr688dPBLm5VVQXHq6iVhUGrGf1T",
  "key13": "iQr9wE4Ju6YRaQokqao7ACdEbhpVK5WzUDazdXAUA1nix8FV2M9d1AMsP3zUCVPWrxFjQfVLkE7f9sN1Mipqf5S",
  "key14": "5jFEAa3FgDCeLX4DG8mfMcuwk1FA5RFvTzV9uARahJMCch5tAPoqRGue7Z3tpEetHWJKCSEcNdzGcDfNxnsJsyar",
  "key15": "3KkXBa5L8HzV1hEQY8Bzr3KTN1nGGmu3JHCyoEKXc1uXcDqh7LWmQnJXQzSzYnXtHuAPkDVxpayTUtjzxWnwrj2u",
  "key16": "i6ejyJmsX7FQHuBH2u61BHyM6mnv1efD4vA3itKSXjFKJpHFu2usj7QDeHHyHSJBUPHu4qxJmvj3FoozXQPSwas",
  "key17": "4s1s4XRAM8b8Qd3cg27a6WAbjakdz1d1aY7habW7vhNsjcqqyiSVFa8StpZ6HeCAGXJF8ogiiVacqhdqZubGSAjz",
  "key18": "5vL6CFKXmKYE7cJJaPSSdCUrTriSe19C8QvwsrkQx7YSjW99HBrr915FNijMMVf8B86D9GWSqtAKyEKRJd2WJqRu",
  "key19": "ZUkfVNzxpAGyfocmscrJuEqdDW1Qz4egxVDaE7BedDPTKm31wLfGFjFc7DamXdA1nBx5y117345GFkWqeS6Sppv",
  "key20": "4tno3V6wxymH8d7U8y9H15g1yM8d73H5eN6a9Gcp86vYBYPr5a82G95rMttrqMKGwwraDmmrnmNkc6jc7wvmnuWZ",
  "key21": "5u3yaaBTBKCBRD4PXMJrXrs2dK6GJvCp6vwCGyxTfrjaM2Gs4BwyFxPyDZpjFS6c1Kh31Kdtbad3qhPQQX7dstjD",
  "key22": "5FGYutLQ9a2Ri7954dP5nC4oXngs4r9X3sYL4826D7RtwictXf7KsYrsBbpSdPA15fUrGPrcQYPJ8Y5PUUVP2nzf",
  "key23": "3dZg5rqi8i6gAsy26R2b25baLCf2H2FGGFfDeEPRHXKDmDGnj29KE5uDjjWdzY3XT3mxwbK7Ln8e7m8Ci4J27mN8",
  "key24": "48MdT8qA1AkMZWyQzkVX3Rqzj3D4UPmR1c2XFsn6TBaJ8K9ckXcX7n6Tj9kzVdRLSiZtTZFg3DabVLtXfTBhsNW5",
  "key25": "y1ovBbXYJR9zfMhGThQF7bdTdc7nN9fjeAD6mRHtdPqA3pXKG9wsxFevUNXDrgXJnXWwDfF8T3tfqkS98mzaNYK",
  "key26": "GFrrnM1aGx1C5NczXNJFws18zmk3qg3j3HrJxjQkf56ctk87D6RrEgEQsfNuEgNubSXEZvUwzNdq9xmR4DULSNU"
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
