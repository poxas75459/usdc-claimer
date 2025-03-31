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
    "4gpyhWLWNXTuVeQyA121Qpg4W1fqwEo1WnQMhpm8Pw1cZz5Td1exDo3m24jnqNNiYE2YEp7neb1rcozEn2aKJXqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8KyZLECmByFceVKgS3r9UTq91amdFBQhq6wwN6seK9JTbcRk1TiACmw6P78c6kqPkfdkyZEa69NBKqAvkEht1Z",
  "key1": "9jXtKMGcug28Ny1VxUEBxoZXtfFHFk7q4yf7TqBNFeToyM4yNfYUZR4SuKA2pob75RgjN5zUAieoygBDvfoGwDL",
  "key2": "4HbWi8sUQwBkntKkyRmC5fVkGTdNrqW1yYCGBcuTDmHXTxQ4jYkUwdNX6HHWgM1sfh1YH76avWCu2qfnCzqJErQf",
  "key3": "36cRqAWDC1g18Jw66gjsyYSEx3MpmFP9b5EfaqDjVHnAUuuDgabwMJsuiGEQwBHG9T68fyUKKoPnchFc6rGuynxn",
  "key4": "3Y3bMWSJW72D81XufYayEYSBqF6gf6ZRutpRLnXqPqJ2APUf2Yd5L6yVycrZavqKFYBux8Fnw7sFo6cuD5nZF9fi",
  "key5": "41t5z3z2e3jhezS8CUokXiE7XzknLuxW6Rq8MBKyHL3mReDZ6P2Pg5cea9mWEH3uXUD4avHZH1Vzk5Gn7Ra6d8uK",
  "key6": "4YbVK9YE4yZStLrXX1uHX2Jgiph6t3mQfCrQEqJnZvzDDSMY88KGNrt31o1H51SLLusz2Fpcc1X39VeqRd9L5HPT",
  "key7": "5AErd5VWuSHos5SWj3hqk9UV9Cap3udsQ41JMmWz9ybRVswn4isahvCSTywDrP33W17DtQ1A2Rd6kk2ZLdvncb9t",
  "key8": "s66QpHL83Mu2CPn5LWAFg4gsRczmxCtTiFr4s4DPTZySTedCRzJ46dLPAX7rycaJXzQF1WRQdDGFb1xi9TgzVdM",
  "key9": "5dsYhtVCXMay5LW9LWoTA6cXhuWqvGBLL6bejPyGKrsDc59h8rNRJXE1mhzUcNLs34i57UAgQcCe2Tftn8GCjdBL",
  "key10": "pVLBxfNWLMqvbTW93GJ1cx8ubqriQwBAYWaU1e3NMmNPwx7HhoLRaaNJudtySQ5PvEyJpuQBw5d6XXPTR5LzYa5",
  "key11": "fYAM9WjtCpTGrWb4kmwLuQNan5DMpcdNERUS4tUuM7uQiKxjAs8P3ZEFnvQmzYDRR9NGwBsLmTtbr1ow8w5PNm6",
  "key12": "m964BHm9sPxxAVVoNWoNaUkSpVmjbeRmBuaVQQdV86UMewk5eWtCVVPogawAjhWsSBCEHExvWwVkw6cec4sTDYE",
  "key13": "2nzYaShqEzMNkSvLsGyfoiEajMWgfa12UhN6c9xnARrRpJcfsYhnkjdTMRBh5i1okJMJwUBvSQxxEEpjxWzBAu7x",
  "key14": "sJaL7Z8gefTPftjr5smxcuycttBBN2zWtjkEM4idbSAPE7X7svmGDn5FE26r5jFTAUKCXFTwaHzcLhtmYg3Z4U1",
  "key15": "4AX4TKwb1kcEE5VyGdSrbo5R3hKLA9kxCwn1dEAhRaUhuRRsw7qUBMDJ6mF1pqbubwYFoxv9c6czG5RFQSbSLqBu",
  "key16": "4RWtLribQ6TptJkjxiHfVYSWkwqH6xNeynhz5XWHezEkxpTSssAr867UXpAMEbPpH9YABRTmy1i6EJZEe7jsbjMj",
  "key17": "5T5yA7Kx1n2xdddUsAZjA6wGSEaizhLYEBJgeZcVvwWkEHT5cVMGe6qnAarJ5YkhcsMVLGoXS1Y2gLe5rdyNsHrK",
  "key18": "33agBzRro5CZ1uvq8r1VDMT2fzweDUeGe27neMfcKsqWoHa3FsDikpeeKpiaz38AhrzTr3A9b5AceZowmFXJxSE8",
  "key19": "2NKeDbvMcMCakRCKMNGFmfbRrYKCLBE7QsbfgL53EJRa2M5M7YwCyLRyiHvVZuXTPsQiVwFT34e4e2nxrwJNNsSj",
  "key20": "5WMMdnwtZRrsXm9CGiwzgyh42bmQWAUdPjxtAGTdFLJUQjKjaQ7reCikKSJC1Qe4wE7wT78mKWrfZcXedhczF8c2",
  "key21": "o75KWbVeoCUBNi7CQc9MW566zpXmEvkH7FGLHYSQKnj4ZHQgFE1yesLeCjyd5qjxpkbn6drzMoqeYNLm8Uki2qk",
  "key22": "GZK2mfTh2bvB6MvqgYrFsovSy94EJSTrU65ojTG6GR75b6k7Y68HdoJbmoJnqMshU3sShqJf85nC88Fu7QJbCbV",
  "key23": "5XmQ3jfCKSEJjw3SDfBt64mb9U75ySJXFSpztZXCeYodSQzKVQrGZLDKp17qrg5tkw6n28rUL3M7toJdkqADYCsq",
  "key24": "4phWbqvPpCegRLR3hs3Y6wxz5YuEZFVzvE2zejDJGPkMkVug3nkrpuugkXqmtbJ86Qs2HbvoCQnkc4cGuPjwuQHi",
  "key25": "hBrXSXjuDmmrr1qQoikCM9GYzqJyNmdLoLZgsVf5BKCFRkaxw5bt5SPaYoFwnkcPCkX6n1SCPYFDBoVUNFQUrjZ"
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
