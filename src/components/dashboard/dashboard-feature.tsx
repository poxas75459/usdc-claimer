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
    "4W8jM87S1wNCrJTH3J61sdqvPhRWSQwHRkwJndXsuwxMm6wcpfrzthD3a4pp1pLXc5LMe7Y5YWyPreLfMKL3LxUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2prVT9ABaPxHbEpVFcdsVDse4WLfAiAdKjLr7nYBNomkoRFc6YrVvSGx4izXv4edCoktnZFK8XuYxoreuBQPqjES",
  "key1": "27dnmnsrnZvYLsbi5JyALqZFpusNXLT3sd6eKZ7xEcoRBsHPRD7AtbCsVLRWee5KuacMYfF36hda3V5zcfiDVexo",
  "key2": "4rRQQChpG1TQ3qjTAwmnMALU5sgaCknyg617q3XwViz2zWszz3r8Fhm5qoWbKVHyDPeqqYiRgDeRpsJ3YMCqbbE3",
  "key3": "3MPSRmkFChkUoZYXkq43c1X5cqM7QJXeRuXqgm1gupWshKfYoDWGkSJW1fsZTvkqysJEZ3KSRdxoaRFSSnFBBiLJ",
  "key4": "Bitvyb2sa8GoPZihTELYXB2sY51nJLfTEgzdve7dS3Rmt3FU2fuQtRz3WagSLUpcgmRLLKUV22EXxQvkRqCFHHj",
  "key5": "2ip7UrEV2RLVnzuS628MSx22XzPMEptf67YCPDCsrjGV9W9hQJi7EakHfdcgZTM3Z1MEUSPyhDakr6k4MMueCsgr",
  "key6": "3iPn4iZMRC2B5SBfia9tvY51vN118AKafb6JoHJWbY63Zn7GYh6kTHM79XtcPGiBCqLkAneBvKJQcMG1WKS2CyZT",
  "key7": "5muR8AbjZLfHp7pVFgbXBnVgFjD7VqtECG3v6ftv7wGB3eVha8PusUVsErCE5jbdEW1fXWYoh4KGwGj8Ya7BtgiN",
  "key8": "52B7echo2bf4Nr1DEWWgyZpamRNyyCvmHKN8dMY9i3WzWPd3JMEHq3L8erXRf3LBXroJHQwchZm4AEKREyttxvBE",
  "key9": "5fdmrYvt9t1q6m3EHz6K8gUmX2nnMX7Xzjz36AsdPrmRFYzmUin5B7Xx2hPsvnXiqVuAkqdAq6jZuDhbFppWznkL",
  "key10": "5Y8FN9aywUWGY3PkPvMewxdFEa3wmTMhUgF35gcxz8zm1S6HqTmmwYfxoPwUEHrwDmTnU5G2CDCN1kA98JCYHTHL",
  "key11": "5xSD3toJAyHMTZHy9oWuVYoEJD5hJmMFFNRADHJDmHSzMLt5t5Etq4CUVpoXiQ1bGka8JXKyePcReJSM6cQkzwf8",
  "key12": "qsNAATkVGUu45sA71PQPwTD1W5W9V1uHL44NUhNPhiL6wn5svAYMohcbT4ZR4eTgEkijdXZtVttzhcMuDTfmDfT",
  "key13": "3Arg6cg6KvWEUkEGbfL2KRSLDHxoNoSJuJcCkDy5AZpBsqzDPVUZP7UfVNxzkfLBWqJ6LuzsgMs4QvqZpwU2FMj1",
  "key14": "3km31cqFb61AbuyY4kAqNX4A4t4FHxDtNTty9geYSzSdkiCosft1DdiUiGydgzatNrcMAR1WFnBedhZNFtPFPHFg",
  "key15": "3J7wVHeb8x2fBiFRpQ1yMmMqNdCiMcUBWfCbBxcqDGfCoauXeu7k4o9R1Zc854pUs5RmRTVEfzgefTwcfhHyvZLP",
  "key16": "3Usg6PBzaT32huqd9EYg9FLHBNchvbRDfoAhVNPQsko6GRoie9oTW9TAhnyXYvmev92sUjasBriDp8ykMCvLtZoc",
  "key17": "4rwXvAx9PWfW7UnMqWxLUFfxSBJ5oJJQFVR6pff3M4bHjV1RvY9aTTjNQ2AyPgViupwCmLPqPik7FX4CUVSzmvsR",
  "key18": "4mtz6ZPffAia45GUqSaaM9ZPbZPLVKfXCiP2ip6sdHN16bSYDqXk3P12MMsWMy34hGFVD5vHAsHoWCxjHZaGF5JM",
  "key19": "2JkmvYXgwkWcUxioqVFuYrkJeZRjmt4d5sdm4TS1S2HAFx6gDUqo2CKenV3qpxfLMjztyKbRmVhqdHGeWQntDymU",
  "key20": "4PBXzEgf4Va25em5m9XNhotozej8TsmJpXdKtVJCiEGpeRZ5iBFQWp6YLqx2vKvez8231tmemgLjfmjyyzijJd9b",
  "key21": "4j8VwMRBCNLUm9Y91cQTosvXGV3dTe5jLdcbqBnW8oy5daCued9SWNAiQ7uAGkU96p32VFX8YguMLHzLfs4ydUG1",
  "key22": "5LDu2NLGWUDQF1XodzjtHrWGyNzDw73vyzTC7jyRLVtzr8ZoyuD3UMRRajNuoHh9s5xy33ZfJubeAWG8vTfrJzby",
  "key23": "3gRXcU6MrbmTWNVouRUwyght5s4mmtLU5tP8gFBctvZa2Y3yuU4CS4z4bQdsCcL9ttTCVZdXr9D2yyFEC251cz9G",
  "key24": "4XFzag4ZA2pwHQVzbyNSfypcJsNEzPNbCamoa8CTBBAK4k17TN353izHWvRNKfAvS4HKgArjVMyoMGAkazhfXHAF",
  "key25": "4PXb5KSFGodAyvQWk2y9PBhHtXnoaQyVANLR6GYRGbPyemLWShKjkk5fvoKF1RuYwJGxRwJ1Sm8gDNCdKCmkaxDo",
  "key26": "3YL23cPjA1XCj7sV9UKaJCtBCHnWVhku9bAxjcNaZHmmk9hmjxRJqdsKHWQuAndMRKD4YXVhgEx7Zhg7kHhPtDQy",
  "key27": "4syyW5ZLJwWomzRHNwuJDDBKsZrJ5ZCFudsD7TSFWqtjYurcgVhchznPVpviSK9jRxi85uQgZdWbvpX6QTUX517R",
  "key28": "2F1X1NMYKkKz2pB1ng2LM2Lg9wUF3hahzY1sMTyQef4DnChdQNNA8mbMt1hzEZWzSLLp6jfm7s4zxUDv7bcVQgGC"
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
