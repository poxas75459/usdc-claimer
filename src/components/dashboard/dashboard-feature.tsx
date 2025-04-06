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
    "5SnEyymBEgsbm9daeEBbyqKTvf7hB2yU2uSrVC7zW9Fu2UNi6xbnjJbS9scg32b68q8BmfB4Rc9ESQb2sJdQNNqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9wVE5E1e6yfomp1RBmhaeTK7AiLRrmBtLm787Wakgff6LGwp9Um77YAmvrLjiBbPUYdGQUpDtGD2bHx1tKkztG",
  "key1": "Xkb8REGkxM4Lp7ssQDsBbj1GKZXSRK5VyCm6QLeZsRy8tfcQe9C6dizfLU9ocWcqtRVbkhWCv2fzJhWPi9hkKZ6",
  "key2": "2Mzp7vnV1SCY5iJGntJnL7PrCcAN2s9c2MQEw14xBhxksurWPDAwFQEBvmL58AoPmjwnwLpP2uJDNQbvGSJ5uZy3",
  "key3": "sShKWxAuymDzLZSKcdfMadsUoURdviWM7h4fWAxRTT3gBDFFiSWRzxLCN6XpKgCyjg1M2KpEwkZajWDNnEXkWft",
  "key4": "3VEcGEDAvUZr86GEZJ9uPYtaZzPfmisbkzJ5gmBACRWoSMDFwA86KcSXQbLrVcEx4SvmrgBZMsHrrxKUfQBdPcie",
  "key5": "35auUm2eEPniRxnQgdWZNHLNvNN7LuzoRg44Qx8syT1U2srrx9NqKnUequSh1mYTgBrTycSXtvo5B7KsRhpFYbeg",
  "key6": "4FgMsLtNFwcXNmKzgZ7AvFqVMCtzS1DKqZCNrLvgYRd54fRiHTgDZSJCvGYuoXtVmCoaLX2opAWvAQzGYsY3iwKe",
  "key7": "5KrAfBa4q5ZtyHJmJUwyTuf8J4UaHwWnhswdCgUBa8BLia7K7XxZneCW52W5T3TpjvHYneaX8F45ssbPYRambJc8",
  "key8": "64MxfMuSxbzhRLDgEEVr6pMPhBKe1VTX5NEMJnREm6uSJ2LUmt8bFJmKsoUvMx9Kan1NGfBdYk9bghaEtDdZ8NGX",
  "key9": "3upjbbRedHYi1ydkNL7eJTZTuiLhXtcuNg8mk6gJMff8pDUL7t2uFU5nd2RvvtKxh8AZSYvUUWZFjq7k4rhRK2dU",
  "key10": "5ry7VYVKg9Q833REvTV3po4Ax1k8GeFjoY3PJMSpXbqYAhshwe8V6BngYPhq2d1J9afcsHBY81r3dhsY7qJ4nqeS",
  "key11": "2d6GV1RH2tntLJwPMd3P4rqmpKwdwTc6zqTNb4YwFixpBiLPHwdBpfJvd9phqidNuw4F8NXevEroh7zsCpA2PsiC",
  "key12": "2LVp3EgrjrK5LaXFxNMcA8ZgP4xQZg4HmE6PU6zzmgYT84Pko48QFBxDwkvpd8pp5DtgE54yxKYExZ5b7dfYRB2p",
  "key13": "gKiTAoKjWUbzbw49s71sZFTCbwppZAboo2Knaq1suKBZAKEDMN1WtusRTpzNd1wwVquXYdww1Z3H1jdXcm6S54T",
  "key14": "2eT5FzdpkW7L8HACxAFjATu8RZFjEvSrm6fUujZd8CzzPvwz7D5AptaZiX9UMEUTtRwJfdaAR7Gdb7HYEo4JAn1W",
  "key15": "2x8Ddbri6axKwt1HLXNequXrvHZ8QFVQbEvkG3h1yAuw5RziCDksfZeDaLNjnin23QHRSnfavvhZZyWFqt9C4sPQ",
  "key16": "4JCwTGyDH35g6XsudnNgJ3Cf3K4aUsT2fVPYy4LoqhDAux4XQwM8CpyZ7bNj5wgXTxghCvfNndyubUajvdyqxqcL",
  "key17": "4BosGerW61Gz2LPcbuiiEtMvt46Q9h6mRtuRJdk8R3m8yfvqrY1RgrTehjhYP7WTBCDR7fPf8wmJevPnMGLQ8Yx3",
  "key18": "4p8DJZu4ceGa323AWMJVTRJSeMArcqCey4iAadmWj6Mscyt16NWyvEd9VgEhxySLCxptCWwq9TRDUJ5DrLEcQPuq",
  "key19": "GRsxsheUUrVWpJADtRYrmFdAPrA7d7QsX6q5E2qPTTjjeNWPXkjgAHMza4tvaTpAnhVoKqMaFt1Nqf1bKYzky5L",
  "key20": "3p6VGgti3iDY9VCUWh7ew32t6Z4amsBSy9g7Agqy9WMd6huep87VvwgWoef28dJTTHm8K6aLau6gZzoQ7cbMjCAW",
  "key21": "5MRUBcNiAi9XL5atyAyP3G1hGrrxhePxSrcHrJhSbZmEhae1TFGR3Zzrqsf2xX4FvJiQXnZt4ckpCHEqx3M2b4pv",
  "key22": "4aUvcUwpSfH2mLMKJaWeKVLoZhKhxTHeqTd8wv31dUREQuwjVn1c5twHkRCqcWEzUhzr2JBLetUSEpzvqFkupz4i",
  "key23": "5Ww1moHkyFqGGPFyMP7esjpVGFK2rrh2YXsT47ise7z3XhQmNJ7eqjdBvPQxz9zGqocnrvmLL32K6ARL72PD5ZsQ",
  "key24": "PruqGDPWbG2v6TN98hmDfix6LbcFn6tYWriZTL6Lsj8p1yiYXcjPoCH8WzvNeYEHRJVFPJL2KMU95NbJaDnhXPL",
  "key25": "2zmzVPpUpRcd5FrMe7dJtLibs6tub4uwdTAj8aP4WTFqbEhWN8fcyMtsuZSAz9JRYDkFRbeF1wGUAtuq7YcbzLaS",
  "key26": "52gTxokGinDP3SxN7eJWqXtTwLNNMJmDLcbFasXDVUJtsMUSLHNqgLVG4udLarpB2sqDwGWtho7bsMJESB7mibUr",
  "key27": "cEFH3DwxMKMwpWSRKcRyFT25PyRDLGCoXuQC9w9VnyRRYuG4rqDZ6wGPdRA5dT7DQGm87AwcDhFDzZD1ikiF9Fr",
  "key28": "GsTGJGkQLYnZvK2NYKgAUepgEqkLvb9qtn7ZcWemyWH46uRu7NqPy41Gxcf4pZWXLZdYbMQNJz4V2tc7UiVq49T",
  "key29": "f8PJx1tXr4Xyj9Vv9q5cHSZnXVJFoLgYiY9HBNcokJAjbQdHt25mfrX3GqKBpqnFe1uHc6kv4STaSN4SyHx7v89"
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
