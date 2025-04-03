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
    "4muHitZB4c1pB9RmYjUPZVkS7Jy2RUQKW99Ek53kpia64gYTF2WsYf56LXDaWsJuqMEJwovxmg6p9nSmUeBTYEop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZMzUZdWSriHxg2XRkkCUQ1THMFKvTLiWdBB2oobbLZ5NJeZ16NEuoAnQp3SdxZK6f34hmiUFMRDmcokuh3ucHE",
  "key1": "3jx5hcQt6xqqoNYBMM3KKXFrCLBZGbqTJgTKVr3XvM9SiLC1TKwHSE6rh2JkFNtnSJW8HAnQkkNc4CiMv1asSwpC",
  "key2": "3Q6JiD46aQ2R6WwkwRDWjGE93dKtXCDEuvFaV1f457uDLKamr61j4FcEBPWYoBrN217rZFTCyYiBr2ggoBTRkf1q",
  "key3": "3fTcfyMWhPVAdHHQMVEEyeof45uZHYNfEceNwkVUh7Nxp7Vz8h8eU2ebppeSLJRt4oX94K2jgFJyQtufxFkLzG8v",
  "key4": "5WpD65YbcT8fTs7FpaAvzjRm1Lkx88va8JYpMnM8oGVFGjis1F7XT5DnHAWUTtZXnm46b2uEz6inWntFGebyhGCP",
  "key5": "PPLbvtiYN3mZwgPHEDXQwJYxdhYhhM9ceqzm1et6wp59prJutvjAxrPwiPfm61W5ZhxJnS1spqc2C4jGZPsMs28",
  "key6": "2JuMkmrf6CFisDSVBrgwxx55NaokbZ9yonyPukKL2yybWKdGmj7KMyj8gJ7kqUHG7YLyWx6PyHpeifqNTaug3WRM",
  "key7": "5JWj25ccQ6H22AgCcoJ3z1AudDW13evembtgLt2JGG1DWd7xWAzw4cpmPcFp5G1pxxsbpMkMQTm4nsz7VQ91YS3Z",
  "key8": "a4wXPCE21z2pEFS7Z2yGZVz6cazS8jRCNQrm8XSqB9dmdqMP388kHij6xN13DUgvR5kSnoCSjpQEPcTfHytRHs3",
  "key9": "mQBbf1odkoYcQ91jhTU2d8u97YWomQcXj8NGpjZLJ8LaUG34F6HAktKp93oDGVjG35M4YH9U9sNfgL3xuPQHyBp",
  "key10": "74X74K7yyBz3ycxmLESYvwp5eAjU7sDjXoo33qs7S7EgjLdKoBqmXdV8DVXBeaaQ698QYggKFDiRrKyzRBWNT1h",
  "key11": "2KzaGoB1rYTc7rMBf8LarwV2no2xGb9N67Wi5ofScoR8EEUps3vQt5aUYDYeTngmeFXfCYGsSUMrtw9Pt4k8Cpwv",
  "key12": "61vS7gQReQpMUhzCvmftnUDqfDpFCtFKHNJiJRYaXVxBzAFURPN85Dc45JbEhhqw8xYyksnCbPXJqdWXiT3CJfAj",
  "key13": "4KPzpPEZ4pQGpgJHNB3musML3EsCTpuaRGwNkdbCgoTwEiHX6CFbEt47UWb2mjnZTnvCgCvPy44CTuu42sFVoMRn",
  "key14": "2TFoQTcj2rD6s7uLxktL5d2n3e5qUaAoKcyyp39MgYGgWcJMmsUhvSodff4Lvz9mt5qBUHnDap5RwQ9iqiyTLT4a",
  "key15": "329fPPcSfBZwHHZNhLEjdW4ujtkPy8ySNBJLS3jXf3SimBm1222goomGYQCCF9n3BP8a8s38QudEv45uLf3HH9Lf",
  "key16": "ugxtDDK5h7HQHci8Wh3pvWQFMvSfwbAMB8LjPCsot7L1H5ssmrqSdLUqWzbddcoMGtnNoviRKAFT2HW5hCdoTau",
  "key17": "3gFcR8Ly3sEFCJien14QHJjLY75eWWEutF5JRLpJyj7p4AziWpFW4799h5jTQwqNosQmDg1LWzQZKDm1hNQRWK1v",
  "key18": "nrhzDwSAg6yTzS7EEzWCaEc34FDdbUbTwCAX2Gun5pFcJqKLo4kPr1wfSdaaj6h7d8AM86fYpzzBDf8fuS1i1Wc",
  "key19": "tLVfzNwsCgVPFjYQ8YAnXtY266eEGyK1GvXwfhmYYsmreRocRwdubsWb6Gn6S8CyJ5rUJHxn96dx8fnyxzTM5eg",
  "key20": "3W6xCqfZM7fiTjV7cCraS6mNQCjYGX5QZaVbfpkcVNh7nTXWru4u5YcK1VktbDaADC3FD1yhZZxAqECpk7EagFW6",
  "key21": "iiYCChbmqcnMXZ1wcdg7bErckweF1VmP1SkWjDeEd7cvGGJ7BnNWVoBuJ3Xfq4Tcoj99PgsTFnjjMaQRPsHoXek",
  "key22": "5b6gp897kEzMsKZfMZw52GAXzDMnagURLH1WqYemeFLwZtDRPX84ZgCBrf28zuKLVXJJd3aKJjh4jjX3ev5VqvR3",
  "key23": "PeZ73HGHdYZR389f6q3J1a6woMKDQZ6tUax2xup6HJR9GEPDbJBw21hDfVsEfWSPdcoZXWuvH4DFYhhxUpSWCDN",
  "key24": "56R8pmCXBSdahzYL4wyBCGxNCWtmFc5w3NFzb4XLC4FEbsjPYfCyFfkE22vnMqc51oMNDm5F89n6eCbN9ET4vYXt",
  "key25": "3n2rt783h3jZbFEcFwBvHtLNhZWRb2wjPvEzPiNpmkzAmLSzGvzVu4fwSknXPSAhoLGmzq39nrjvV5PRbMSqt7Jv",
  "key26": "fJtYEoQKgo4g8Y8qUo9cR28gDwWdZ99Nuzz4L9hyAjsWMYj5L1eVae5aWRhq1hWAG1JRanyS27hixYWvRZApVaJ",
  "key27": "isorAjS8kTaviv53gUw3uV15uFJ2tV2eRtnMeuVWp3hF6rQvAzwkmha6SUt3wDRKbZzF7PZ87akgkyRrBL8BkYJ",
  "key28": "fDNQxyw9kFNbmBeKn9XttAiSfVwMoHWgySdGQfz6fYekB2fS9itmYQvxcyZfiShzkEj8VxHzru1tSHf1VoFq8a8",
  "key29": "5dvmg59wCB5L9XDMg2u47Eu3qYPLSuewc8z3mA9yPmxFkixQuioMxcKEMLM6GxM8NHjHggJsW7ay1o9VwVAmEcmw",
  "key30": "sdKz6rpnuW9ek54rt92Kc2U4fnuPd96hDfqv8CdV49qXSUUES5UJtCYDfkEQ1Dak3FEmcMzqUwHvjhoDjTjATr7",
  "key31": "5iCvMys94Ab9cVFDsmU4BRcXjBSbaddRNiBNEghpMfJmPhJQy6TJufsV8qerE7MwvFmMFB6kLp3fkexWZRFzdiz6",
  "key32": "aCNbpbYeVxaJ2jgQVRq9kzzPQqsBnxngF7LoowDzffkbT3dJf9ZVJoxHaVuE8PAmNeonCfFopjzKLanz6QXzCEh",
  "key33": "ZisSeiyQFscvhXagHhxHSoUDuxQMbQ85tEsZrXWMrQCViQABwi9VkHDVNmDvbgzBpx8f3vLY6T2wVg5ZL6yTQH6",
  "key34": "GwCsY18eGT7VpgAmwQYKmtDhz7tuhD3nGV3pfkuYER2EDqQ66m35DSKmTJCpoSA2vNUpepMeZXFarWmp6qgttfi",
  "key35": "3Wbb8EkAfsgTFRV2CLo4o8FqE2hDW7EkLsLWA4U5LogKwCrFVXE7XhCSj6dyHUSbq5XUjcjdrXJF1dHnxEBwc72D"
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
