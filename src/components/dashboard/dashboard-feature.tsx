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
    "4dEMomoTjA1xiXjVU447CcdCKpB2JGZKbi7yTvmwgTboeaUbbAbNmrBSw99az9UHNPsceCgJk4bKPnkrZBy6yDPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VhWVxZsoQ1UqFYXE5RToAGp1VYaD6MC8jYjjgHviBNqXKphXsYLUbYE1UxSqoDmqorMLTrti7RvNhzenaxpW7Jc",
  "key1": "3BctptjUom5EMWeKM2NFDgghndD7y47Q4TKrxokdmJ99wyGXhr3RFXugMGCv6nFs6v6XY6apLBPRJ8Di5NHxuigy",
  "key2": "3fk8VZ7vBAp472ytrs7DHQPACd8gsLF39eku5tQxEMPsJ1zym9DrrY9rS7GMqDSGFQzx9GL79b6gPah1BNQSs1xU",
  "key3": "4Uj1b3SdLGdKcAzC8tMzUjNDVqY4En9BaPd6FimGYk4UB5Bb5XrZBwDFWBSvCst5UvfXvLAkqcGfvNeWrh3RTjvB",
  "key4": "3jQuNSdGKzUpPCuSxGrkWq4Fjmgms2B76qu37ZgkF7cpJDwdVRDsYzsB2KD6ravbE2qwLVBPBHNYWd9hQdkL4SXp",
  "key5": "212Ytr2ej9LAWhD7X7DWUigSp8nrhbbWb3sF6PvTa6XmguRy12m3iykWC3hZdL7XLrE7a66zyUJKDqc1hojMSmSR",
  "key6": "4ug5JFhD2ni4RQoV7iDRnYr2HBprMVenqcaWPe6mRV9wjaJVKbmqYptVXyod1bggcpAt6sr2X5dfw7syoZXWgGK3",
  "key7": "32knkoCZ959nNyhyAUJ164qKSGkDvvNHeC21gSRQJ2xdKXeUMoYV1Tjh5bn7JhmdPvNuAcaPW9jqYND7AP7q3Ah4",
  "key8": "4JxVpZFcZdmkJRk4WsMKmcfFz7pBZNjuP9UXobgCULgGDD4EPwj51R3jaadYapHvCW1kLJpLpw5HkAwwfemGDK2q",
  "key9": "4ZfpG5WxbiUMLX9wsF2az3iHwddrRHkisVSXpa14KqCMasthEuwMgwxmTE6QVJmmDTuF54GR9pmnaBGCyKTdvjnw",
  "key10": "2HNmpwEe4G4nbkaxA2LLopWf6BhgXJ8RnkeCBHguWMR9q13kFivPmhc3pwdY1fpH3Bds3VzgFBtxojLLk5cGLuaj",
  "key11": "4nFo3F414FconGLmv7XezQDpJCNSKPMqtAicAobVwKY6XPTbSq9nVm1MrVBV3pwdFnwnZLSpvSHVnwMWUnVMs81p",
  "key12": "3TkfZdo7XtaCgY1C3w84hZtkaDM7XxcTB3socQPUGuoos6uyexDA9W3U63K6FHefvK5LXE7otE3cxHNuLnT1FMM1",
  "key13": "4w8Stoa8prcZHRWoPZUeuqSjxXzHiJJnCTBUSBv7vN3nLnE6atLhuhYW916a99HMp5yBfUfC84t7AUZTcAL99TKv",
  "key14": "5d2V1AFLeExMLuxVwJUK6rJHqZMonww2fYzsYnitk6sHyWZa6A3asFECsam6JP65mL54sXQPTWpUkMzZRbDP79T8",
  "key15": "2HSwgwDyEWsyPGSBod8z6EMjocBj5qzd3j7Mp6d2batjarNfW24rDRBQJb5Mi5jd4Pq8wu4SCLEyjd6eQTJY6cTf",
  "key16": "5b8Q8K76WyTpsvPTsbjrY2ZzkQQ4DmG2e3kgKzh37mNSViR1XDUjYZE8YPUH2gULL8EbeGVsm7UDTtCcKFKbxTmo",
  "key17": "2nFZ9NtErPPJApia8WxXQDKJAineszKoNWGuTtLNqBnabfj7SgV4MbtDzma7Xqx31MiqoYdV2PUFEeZFjtsqLNb9",
  "key18": "3h8ZGi4xZEBkQtE47xq1uFmwCJm3St4W6pqn2m2yK5oZGTYiXQAe8fbwTY51anfZmjKySGvcB6GoVjJSGAnR6qdu",
  "key19": "NXFqChEMwSaBMxNJQXUsPyiTtWzfXwKqJeYAHg6rMXJGXNg9okkAk7SV9kuXjz98jjMhTrdDCEyegaWqxxRotyT",
  "key20": "5d2NPyvsECLADcJaQV14sctavrwvNDuBTcNJzLuah2ddpUczRYCnFzD8YbUqHQzxx6PSCRiWRT8nkbPpzVcR4PKs",
  "key21": "3A4fo39K764VPAaJ2WmSj2vTw4PwygHdUfYbvn7yujRfGrwLsmwCeZ5ff52dKw8FBaB8NLYiYCe2pmwKuMuJZBHa",
  "key22": "4kQzRyPa6tX98aaH6cUGT1dyhowFAaL4DymcYjHtZxvUi9XW1vaHbdEGh3tiGPbyk3XSBZFMaD2PK79HnWDEjR6r",
  "key23": "2fTTu7MnuZrzoZ7vGfEaU9hsnC9k4h2Zv6u1PX3b9BXLtHntPrWpRv8kSK8kogj784xNQJyPGrWGfQb4Fyqceosm",
  "key24": "4kZg4koiGdgmFiGtqkoDAmK5H3PgSv7gHQE4DkMtH3sHHeym7Z4LPokSLQVS7NKBmDJKw93whC1Nt5Z4YFCYxCSg",
  "key25": "3qBMhH9ipTdNVtwkYrKdDsSsZQDFA3CEkazeMgmhJe91kCQtsV8Qj4rvEuYS4VD5WtDUmBxM6yBaVv7aeEKfmjwp"
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
