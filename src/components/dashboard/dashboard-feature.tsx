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
    "5NsVTGREGT6vXGC4VYTNWW8J7GLrNifNddhaB6zsQnV2DL1pVzX3845AVvnFDrRqUMxAKAzJzTtWmoYziMvXYg9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zP5d2z7xPRzbbRqh6xxwZNxRggKBbXu9cJzgW8G5c6V8aBBJAwfSD7LB3iX5P35v16takryvnpucyvNkhjbQFie",
  "key1": "5dryjYyGg5Moi5BGuLV91f49bV4xo4KtSbnSFDC25cQVnRWEtEoPMXzmPV8Tiroh9xCTUPvNG8GFN5RoYro73mfd",
  "key2": "3M3DmZWKSNXSpEhQtNDoeLC5dd1RnTcZ3NjnAMsL2zxkmSrVCzMNEBYkcxjyuduyCfVoVk5oNP4rETMgTGkBF5AJ",
  "key3": "4FnmFSADpV1gxGXCfLTT1DducewEjmTsuyFGBsKT8y1t7LL9hkgVzYkH3wzvTJGoE6nNGMh1ycqEStAvAp1uEt4T",
  "key4": "5KVDCPjCkTDzr8dV1rXyuFfPcBn7YJ6VXxNNhqFXBbShybSBUGeqGJmaFmCvZ55JWzbspUBzSJqSTke4k9qb4ifC",
  "key5": "31B533ZdnUq9ZQTG79Ug6BJUnqqVEVQtiBAv8HRBLDqvWSoywMe4DEtdyhjgBQ4B7AmDG9kWzuTPKMbnkzqGhcJ1",
  "key6": "4ZnfYrDSNFfGqs6pKk8KUvXEkBng3RPm94zyBuM1zagR2oRp8JusvoLubykyDoz6fkGgPzwzJMZa4kLC2YzLYjtX",
  "key7": "j7DawQCAZkTXZFxaF1byhTke3dDGSD6nxhBMSFq7gsVJAaZwBBfLvS7mKhbvuYmxviu2kTHqahF7jKaAU67fEhs",
  "key8": "4nUXgKok4kNQNimaPUPdFNQYQ7gxkrANq3XCTTzYnhx87rqHz1TDuJpnoxGDjixivBoQGAAy8ZDEnUVBUTxdTSsL",
  "key9": "2XRu1MswcSn94L54PvUh4xQ4aeBWFRMXfC1TPa9ay4jqWyaXQ99JdBmwwtGpWhCkckKb783rubu2EYYP2hRxPCwm",
  "key10": "3187aNAFL5VyXMGsA6bb62BiL1cmW884B5nCXqDdkktt9xEP5JHmLfwaPkAfSWinthvRVqPFdghXjuJ14BGyGa4h",
  "key11": "5ixgcraRv21SE2inRxCJdN6KzeWdEZdT3SRHrUERaT3P73A6sNhHaq7rCBAaC4ByG5vNdDa1dXQqveS64zw8NfJa",
  "key12": "5dLLDe8f66P4MFnm2pGvZVYCW8NLL4yWW5J7Z4boFJWL8SFGvf7PZPAjigq4WY4XWgzbq4xbTkcXb8MPKxetxJSa",
  "key13": "2n8tYDopoqd4mLdxaSB37k5r9zpTzbEj5yLWhG2imWkFJaVr3PBaihbAkAzPkSDPSB4AmJKmf9JrEsGvVdLYewmN",
  "key14": "4FHx6YWaqCThfKxsqmZbygLR5WqC5ugmz8ZV3ZP4kh5iBGdwsFgBXoSPU1bHZ2L3favYA6Laadryqhdr4pnvXBaf",
  "key15": "4szQhN5qg6BTkKDZEqy9WmG4s8AVjUH3Q9hkvDoJvvBJLzatSoFK4CWBEPMgeFoSRf5gM6DaqzABc6VdxM5QJMyQ",
  "key16": "33nXTaEUbav7PL5TdicgZrF2btVkCayW1vsvV6vCt2mXgvzFYKfx1S3zjKbSiSAHQsb2osWpXwQvQ3zHg4yeZ4HQ",
  "key17": "5ceNDvDAR88s6FSAFvKwr63r4ATT7hW4nHxZvfrGXAhCn3JiNDeCCCWyULGY4XsyVTVixs3hDPiZJjzEov7R25TR",
  "key18": "275xX6e1zzcRkQXQGx5rHVReHMafZgCAHCkDdFfAtJ6cWpKd6efYfp5ZqZZsEqo8cjgdDQ8gmByRk57ZTncpKs6G",
  "key19": "4TgQPMUjtATyssbtkpY54y5HMmxxvF1q1f6hHRqeZqF1BWsZuJs9APQXAmLNDJSevb9cP79ExqTdBFHMVASm7k4h",
  "key20": "39mXJ6411ShEQmEvJJS7jvPpi5HJBSjvF5k8kQsGrVwZxasEAgRoKDBcyPAeZ2Vj2vbdH9FV9e1M36wWxPGnpE3C",
  "key21": "5nAYnuHbo5Q4Lh3j4zHRqEmt7XtnDzKk8MSVYNAkCrwdRkaewK4fpLhFUXAh4Am3gQG9X4npZKXJnfCHBBTkpa4e",
  "key22": "2a1okT6NRGYEqVDpcfXypyzb1EtuBgSSeHTQ1EZNdY1v4YoLyyUEy9JMbZHLy9TPMoiw1CFv47CHfMpuqCVqdfVg",
  "key23": "5m46sLfgoJgZvafmoPvHFsm69NC9gjh4GvQ4j2TP3RZuR5Njr1AT7aVuS5wYCZuBm1tRwyV6m6yhe68sJQWAv4pJ",
  "key24": "41CTkxYXFgzujdLDYYxaLJY1xQfBdhhiFdcLTbvyYYJ4ckQEoixRnkL1tJ2AYxLEriHQvsejBjj49CdM4TZUEHmN",
  "key25": "2wieE349S9RSqJrr4kHaNFXFQnygvw2ka4U3BeGtLKPmNUXr5eM2EHb68wmzfK4VhHRjMVJt8fGnPmRWAebL85cT"
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
