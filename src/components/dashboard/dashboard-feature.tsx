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
    "G6Z8z9EAWeeTSqmMeoRHDbCvjgJa1BHbh3CKzstknnitzb5MZcN8WSoyjVHvy614cWRkdNybWzwHefrrzyTPLfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxUgNDLT7SGeHaB1PaZeL2CBRAsDuh59o5mAoQE8pQvmGDGwTjbkP7Rvpgaenrsmii6bV2qRZQHy1HMJqDZC2No",
  "key1": "3keaCSB7jwLgM3umcyCbzRbbmvrkDzDPSW2dKZPnhLJNcmtjxSox3RbAhFn1sR6ZycHgYsJFPZqi9EAEoirEKMug",
  "key2": "5ELqZkiSFYo5TeKW2mdTfMC4hnsuTZFaLdYkbTKC4mGCSPJHo8ojeNJFZnnMkzQeoTatha5TBvYvZMd2iruKZMnG",
  "key3": "2MK7ftV7X2PWotjJ5jwWPQVdLvSemsSCctd5FQ9dhPYYuDji3sDCWapEDom7SvyCoAQfHun7uY4vpNB8LqwNsThf",
  "key4": "2iCd5imFUUjTw9441fNqQMEwi64WwyB7VezrczATGBHsDZYLmbzVgaC4jKAkpaF5s3W5qnKMAxw835PSTFe2CQd5",
  "key5": "yyhV7a41Tt5CeU7HxdDT8RwzUDpJP6q3oHrpmyVK4No7jjfqNpMHQqV7GuC7XLHDC5VpEktnBZrHonWGMCno1DH",
  "key6": "5UXTHSVS8ce4nAEd4fM1A1iHxR5QEZ5KsrRjMb2dXJQDfrcHwaALAcpWs12mNKRJAb81LcYPq86bKCwZoDc5QJ9X",
  "key7": "4J7VhQbQUpaEMdn2YLR2kFUDtZvLYAFKdsstvuXZpfnchdL28apyfrvaTsdHu1mnwCEtm6aVFiLjHw2affYYmwHx",
  "key8": "5Uq323RaxUZ6TUdhWLArSzRS7wJMQeN1LHakL7kZnMDkY1oDd1ZUzszPtuyW3vZjoHDjb7T3mCsS2frJLH7BQ3sy",
  "key9": "5gQZyE2P9XHg1AGiisXzt8Af6SW1jKyTyvHXjG33px4z6k1Kv276ssDV7RXxNJZHWF5b8dZgUmLS4f4DXuAgKp4z",
  "key10": "2oiiJD8HwfWiZu6dTx3kaZKCjJNYNrMyZMR7b1KkUpWuySgPZt7wYibhP7BMfWg1UcbJo1tMh14CLncgEKfJPx7W",
  "key11": "37ve1NL4B2EzuJ9Kv1ephiSTwGMZDMJUTSPSULjhdTNDKjUymWcpz8RznhQNP9F9ABLaLY1xvjGdwA1zpPe1TAm7",
  "key12": "2RGtLgeUY1YjG7GWfXFbBjDGtcCxAn4NyzYJNSd1YUsveYxixo1H2T86z1DLL1ELtv67yhhGv4zH2ScodTLyHFSs",
  "key13": "5nL65vu3HX9jpKre9v6kd7gCcActxrRWbUy9fRbEsbXxXpzdtzVqzUNzsvCgwQ22F2zd8cfqehAKUFRfHTqwkW2W",
  "key14": "5C2VaUGDKdgWoxgtooT3C6JdbrDH1fobaNHiuUgxvbCQrMGawHzvhV32B5fcs2ED3oCwV2eRtcPtc4U36adLgebM",
  "key15": "2NTUHMjv3yHtKow1sf2hn84oTUnv8VHPTtvAky3qZauRthrEvTBBiwfCH1LgqqsezgYS3hF4LtWHqUVbyCzVSMS8",
  "key16": "3XKtcB9DegU5S5AYB3gqxpZKptMwFtAFSh2ZcT3KHQVrErrN4BwgGB7KV4yS6a9gTiXWmmTZb6arEx44UfU8ZFRv",
  "key17": "5StQrGWFhww9NDZFS8W9F82r9Wwr8Z1kG7ttcNVpbzRK76H5FRPJwXtfiY6B6t49vywQPQofoJ5q2cNsGMK2GcDY",
  "key18": "23eMHsyBAQBDZKm54BY45oQB5hKcaEWK29pLDa2fz2XTWNPhdJH8vuASQ8UG4VLMcHupiWb5P35TKTipjZFBCxLo",
  "key19": "52m77gfknUGnZFTbJayW4PYUsmgtVXJHWdYaQxwC4mZrYDQkSegtwtAfBvPf9WyDvnd7VqeczoSuQFF2Xx9byfkd",
  "key20": "4y1R2BsTSpWdmH1DUhRUEmxNHtNKCfC6ZJY5VjoCNKepYN7DizwscdnfDMZcEyLyRSixUVE6UbUy4TKxgRvPqxU3",
  "key21": "61ivdqmHviUEq5PUU4BwmUU8cATmYjNGiS42YCNDxsmE9qLLsfg8iJn2sTUoUBuc4nJoBh4Y64RBBwzyZ6Z15ZRw",
  "key22": "5UZkxUySAgbv9gzowpH8Easd2nppbRTkCoHvtbmqxbYemhLZaWvvGd5Jh2skxgtmTtt7AFdWD9GwDaPWhBuqZb7C",
  "key23": "3VAGuQtRccZed8XxCHh9qYkhHm2iYo4kTS1tKR9tX2BdQvNwaqxijBaGYRJ6EVvq1P66oSrcpGq32uotQGwdFXxP",
  "key24": "23y5nbJFN4KXSoH5tzaxPQwauUXFnxgAvNfBFfba2EmEETa82o5P52uspNTdjeASB7YnTTwW7hZ5tw1neo6dNxca",
  "key25": "5eEShFKBxhT4Z98PdhUotDDC4R7TVwmdZgX6aE6L8YrzNt7e3XxmqusaS3rqmo7aBRtukUVmSabDCkWP1Cj5zCEw",
  "key26": "4VpXNYxzXHtGizWRSP7w9RanHY1TwoSjppYTJuTsMPQN2ia5crPNgUZxx3KerbJN5tjUGPxmFwT1EGD7iKhihHXa",
  "key27": "A7HPEuTTtMimMbKvVFDdHeT3E3RjLcd78QgxvLTyXZFteukhVx5SzfR7MEb8K8p1uhG1Bh2gctwLKZiHrU9wn7w"
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
