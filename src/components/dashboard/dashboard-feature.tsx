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
    "29nbQnJ1dcQ6PSx1j8M4eQRqGnQosJRa9AD3Nfod9XysywNLoEBrctHPPB7eCvkuAcpKbmTh69t6pRGBv2u3HLdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiV7RgdFQwgHdvZ9kEeXt5jSXdfbr2hft2ZDYoJ84UCAnacsvpC5hCq97auRhF4dCzj2qBNJ8jx2tvK9gKjzMmy",
  "key1": "4eeSsEtm1Tobhrmzb9CTjwdpaoSVow7QgcWG4WDywZTk2Bh3ueCY8sY6tBCPxAsTvthVC8gtnHHStTpESxrKYih6",
  "key2": "5Ubju8mFgJKF5niU4xwxM5o2mxevo9kobp3E6kYdAYQ8JT29z68FrK21UnR9JoNwkLiygdGaL4tYJoGjrkXrbQoD",
  "key3": "3KyFw5jgQC5mRGTZeDjyMbKyvmEfSd5rQgN8mq1bXWzDdwKq9nMN1eRenLSk9m2JkMMyyyWY5A9LDB6CbQgqRZpC",
  "key4": "3ae89reTn6X2nec73Xk3CU1YyQAWYDR9hkv1UwNdufU92FFvgaJz84tt2JnXxSVQcfJvZqVVK1WuoJiTWcEwsBL3",
  "key5": "37RLZWw9aEWkL4CSqqvUtr2tn1EQJgfmn5CPiBmgkJ9yqiVCtCqRh6B25ERzvfpXZVco4V1T1M45ZUJD37Ec2Nap",
  "key6": "PMxR7k8CWftkVnCjX5qFxSikGmaFZEAJ9Fi98t5fg1gDgZos8WVoJVuoqb7YvoAdYYWizvxgUpBUwcscQSSwe6T",
  "key7": "JQ8gr4RjmRKWmi9U9VtqLqJL8dGpt9xZLhEJxHA1xJoVHLubNNEC5gBLPjdVFdGm3Xuqp3D7oJL1Yn29eFNmdFE",
  "key8": "7EaqnX8p4iHNftDfAaYR6iRSwinHqYES1sZXr2NaGkKPsqdhH7qMgdsdScub697rsaRRK1Up6BRmWHsQqXG2RTB",
  "key9": "5gYSZJb67a4nprcsuMHms5aAWyyVtNn2ex4kNTQyVVwrMfGjM2zYXATd4umPsBewM8LpCFmmqojiAF566uYNnRWj",
  "key10": "5UP6rd5v7XCjy1LPFNNSostYoiTS1Ujnis2vYPPcnB57ZQbbGHwHvLZHFJSa51WKnuL5jdN8G4CjEoxYwXhn4z1R",
  "key11": "4es94PE7AqBj43JELsDSXxT21xDq85RLRTB3LdXvKrDKvGkRdD75Ho5xuqwjpZyhy8xPuy9TRoC5VwuPDXy425Uv",
  "key12": "3qKu2bQkwSJDtCeRqYmHCtb1MekYTZXqRQty5JuufPnoeQ8ktWaJyFTxxovXQG1asT6FNSHNVaB4syWh4ofPLxjw",
  "key13": "5z9TWUC7GpQrV7A2asQMFG2NidvxsiPJi7qCFKVDZz9jHE27krocqNi2JHap6TLZPDFEZfYuzFyqJTyyua8LSNV9",
  "key14": "3kNZJmFma4ZwrVmBkHeDr1zYv7rbgkst15Ywks6hnVPkW3rMszgS4qnRi3cYYrSjFHZrh4xNZqrXRLWg4WhpBqjd",
  "key15": "SmkjRQxH7aygK3uizdvePELdb7N9EJqy1bqf6LaEATJpPeAeogUVvH8G7aibbUGU9RDqjq1vqDqNMu6SeMgXnDy",
  "key16": "5ozXM68tfQGKQe7CKscWcC4XhrRi33k2iouHkGHh1mB5f3NQ96ARP1aVmeAQDjXDsVagAWDMJnTV4bSFNkhDjM52",
  "key17": "cXkMbVqkHJ7fvAiSVCRpkha3fVQCQTa1xDdPPnDhCnGKG9LX3cMQNE8B4nAQ7ZwFUdSMmzE1BgPJ8y4VJJ56Ni1",
  "key18": "4qiJLK5kTqrB4xrEswUNJtnVdmaLuEVRhidVbQXDSnzcRQ2W7X7s8GbQgPnqza3UJergeJYNkpaVbXYZnQstaohg",
  "key19": "wN6XCadTKJ2dC8enRZqBoLmnX1fV9xseqXsdzynRQPVLjPwiTCyQaSNzHvaeaNDvq9C2Dt81VQohmkeDGiAwRvP",
  "key20": "3PcSoxdPYHuW61vg5uZwgew5kHzJWN96M38Q2jNXmcjSTauGdA3QuWFaJRWPtoni6vSMa7cfPm7V1Ae1azar3pMb",
  "key21": "U582w3NxWXkVrU6vqo2AKpPf8DsbHJjjGyX6vefyiFtPbwCCWPHkrXw3KRnCK1uNbtoSMxfnfVyDbSDvFcF7eDo",
  "key22": "2JN8VY759Mtxgs2QLizjH76xmNudZpdTdNoAoVMhNjZGhE7bHdNmJJ33HWYHcUCtKS51yH6na2taV7aTa62aevDo",
  "key23": "4CxutWRzLq9UCcdq7ddM7qppyhmUkrhpwFMb7iujxtP9fCCzSGCagMLzw24sykdradFqjqdSg23NjgD94CEdWVwj",
  "key24": "25E1G36gZWszqxj1y3LdK1UPXFvw7W3dn56q8vBpNFT1zQbqPEgqWMFq1YRDoTKnnrv6uJb34K6dtUHMvWm6JgT7",
  "key25": "zs4kqAbmNjk2SsSrrLXmzWD5ZcWxy7gjMP9Pmy9V8fW5cCvosvpRarrDKyhweHSR2jWQJM9HE8YQA85T3qyHz6n",
  "key26": "4Ys8Eadj3d1ksd9eSRnfjKenPEwqGUNo4eyZ3S82tWVytZ7N8EfAVZT6RVMd4DGyByLgMGV3XioGvs9jMNwfWpzc",
  "key27": "246mMFchpRuY5ESzz1SH6Q95gxdzEQ5oFs5DsYfKdNLMpbvD3q4cAiCrqNtSGwieECEpqJ88EiJM2msD3Bz1c1a8",
  "key28": "5mn6AdzpVhjhHbnBh8AxDcGJJFrrJf6YKvz7EzFwTzv1LenNipMU2ibbsSDKuEbsR6osPFbHFhsMrQMLkTbaxWjP",
  "key29": "33zWe7DkmwAcGxWurTMYiuHQYFubCKA7trJt8M6ZREnyHrXuvDPaWo5u8cpLpnsEHYpUjhLSdRDQts6HH1UBhJao"
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
