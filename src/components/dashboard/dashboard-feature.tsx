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
    "SkgE556V4LUw2qKATEUDuXX6dErEG8GDiVNGjbDLx5qr6z9U8oakdFHeMXyK9pNbgZvpRYUqtnGzyUsvEqQfckp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3DnV8T5NtASyWu2dCyZhJ1NwZYh5RK2eHaXq2tqcTFEKbaaEkXBpKYSYr59SRif39afbQf5hfnHSdciUzMaPG5",
  "key1": "4eMDcbYQ8pp2fhjCucQ9yG4LsYFE5c6UM4sPrKQ6zr6AK6YdcazPnj3wGfjan6zpATrNG6pps3xqtDLTPdmtJpo9",
  "key2": "3foT4nWfkvdf1q1FiyVcEVv6NwFNs8Czb6MaTGiM9spipwpdLHX1jpeytTV2iFVSmzieMh1qHPPw1BcN4487GPyU",
  "key3": "5gaK8JyqVeDEwByzFGf6QLw4JEMHcUSpmSaWkwr2UoAitpEW7KQfRWTebT1HYBe7LBZYDVd46TeHJtCskybYU7h2",
  "key4": "586m4WnE8JqobTX6bf9ey491epeTvkdevtMRUcBgzbm1zLPncswxCgZ1VvHQU3mecSX7LFy8gTy7GzayNFFa3VyH",
  "key5": "BFscToaYAUBeYsetRW9LTCLD43aeBKePALvbqv7aXi6P8tswhDLU9xWJpkkpAwEK2faUvur2FWfyga4A8XzHPHk",
  "key6": "S9Ny7CiBJbWuR9tTx2nhdoTTpXjzPHkuhXXtHM5pRbM1sRHW7daMUaZt9xatg1wEUcce4rvrZbr291f2GXdUNUX",
  "key7": "5vyps24ncygMJcWawqwh3WDcNBSyZLP4a5UtDyMUkhsbboCjUiwcPTkBTgxqz9eCh1cQd1tAxepCxBnYp44Dwbf6",
  "key8": "5Y1Tn1V8U4wZmi4iy3XBKAs5AfH1iJTehPzM9ek6eNdLvTsPErNip4d86eLYG5DAdjiZhG8AbLts9cBN3nt4qtin",
  "key9": "4N7M9M1cxSkAYBjacdJct9984iMMwLtXg9wvQRx8vT5UQgyvHda9tgu2t7TZKf1qw3Rkx9tU65zmjPfcKfkBK6Eu",
  "key10": "3FB1dWL1jsLZ1ms7ftdrNDtjZHg7TsEYmLkhvHo3mFawjoXxnQT6JdomBHrLievL4Pbuc3z9YZxMpk4XATNWk1xZ",
  "key11": "5yMa4Wfb5RaPC7EKk6rJQnVAabyc31stst5YHTfMH56TiHx3XG3qCdHe2CC7Q1cczny9TqbNNEiFtQVHDo29hFny",
  "key12": "3fPSC8wB22CsHAm8qgReGjq4axfLpuDP41bEFt8oLZs7ZuV6LLTkZEAhxTk1FAtWACWsnDRnJguQbv8kBaihcRHj",
  "key13": "371oVcA6QKsAhA4X16iSQF5vSpAL9QB4mP5wjaizSXWg6L6fevJm7h4cjjVLkBGsbZHkx1UYQYSJohW2Jty2ww7s",
  "key14": "45LwFRuNh1qxK2rwocovDfHftXwawpFtXLtDqgqTisKYcSx49zgCszg56rUvrDnd6rgGSFhi9m32b6tc8AUBEKqg",
  "key15": "3UMpvpY6bu3uiuovXUcH1VLbEQWqSJzfQ8qkbY58aG9MTM5LqUrUqZ1vEpyarY6XDQSsoppc4imPbowGGdzTiaNt",
  "key16": "2w4NFsMBx4NvG9YKxeWkM3vdSTkHCWy95qQ2keKWXUbg4km2PYn5DCcUs1MmxWFLKq5MxmAonX9P8YHv5ntGzS9n",
  "key17": "3xLHsguNipmrSZFdogLioA6D2XDJdaG31U9dytPLPryA5z3gETxpLfhTfbAhQFN2d88Mzc9CzaLnK8KzRtAeseVK",
  "key18": "5SYwVPTsv9g7KES1NRUA7o4vQw6FnAiX88Sh5M6VC3hnjDdLbVcWipL6oYJpMjr17AF9PtXPPwnHsvUV7tB7dXoR",
  "key19": "5LocN4WpXfK8hLzvZswD8Lk927dZTYwRVFk97PRuhQfiACCe5spNFgUNK7K2M8U4dzc9tMPg7iKMWhkSMjbmEhT9",
  "key20": "3vLRoBuqnZYLtKPp9Yk8KHsX9reiMUv5QSrUMRhFJBkvPbTPsLx7AqdvpGoeG5FEkwPCZ6D6nMRaYXw2TbH7s7X2",
  "key21": "5cWC4EYiLdxex5eCzL5CrSYnYxS1VavBSTx2kLK6BUZ4eYR1DC3yzdtN7mH8i3Ck4DcdLZ7P19ZSj9FfzBoTzwhC",
  "key22": "4VQWEgdgR1StjKSkCNcve2PTCag2dMqweFkknh46aQXq6jyTfVT4wJurYRoBXMPrGLqGtYu9CYygLRbhmMa8hnnC",
  "key23": "LbLtmCvb2M9UesiXBhPuLJat8Pk41HYbeXKsUe1XCXM7HSuwDDBdJbt9YMJadf6gzYhyjDinyF23zespTDMuQCr",
  "key24": "57p1DFnW1P57yiNu8ey6xxb3SdMfCxg7ASvwNHAzSWUZHveDjzTenc4LAJWTyWiJWktsSEASCDFBwc565mCZzuqV",
  "key25": "4siZ8iqZVkqZKy5iwnDYavtg3JkXEoDtoqSBEtaHTzBy2hvLMoFdb8UapfAvhy6jCVGxf8JiYo1Rzu1k4vmBqzhX",
  "key26": "5hz5DhJAybaRraD6WsvR4FUCnbUTmJHwj9dbA9q44rqkDgf1SzubGKm94dWfRqsvYq7dXgkxDssNELsr5fPun2Kp",
  "key27": "5FduLUKGQY3kxj3hdhZnDV55eotG76y9h73MGxwEejiHukpHfdeQCqS2KzaN2mwyhNLNHzySmRAUbCBjhEdaT5pq",
  "key28": "5VZRu3q7i8XK1C5dfUztxgN2ZZrLfnqbvSYPTMFGzdTmF7CBACkRGmg2JwX674mmHPU6jfQD3Hra6QL6c9sVbqFF",
  "key29": "47v8Z2wpwqo49RShr6oWe8ZM2BhWMHhi97P1QrtjqHYvwkHxVrg1G4DeQ2eECyH8YsY2rX7Y8DbUTa1YYc467Lvr",
  "key30": "3Ri7cNaRcTXAxsfPzJ7byQRQm9E146dvp6r2p6d5b7rkBnbBJWzwqv6BgvzDUSewpwhJ5ytvurqdKPjtvCdXdLhA",
  "key31": "5kKTcNoKxK4PC4nNRFk8ia8N1sksZMepFBfPeZJbq6CBZJePnHdqxrcoHw9q13SHu1ZFiEZk9PVZKiFRyXLoS4f8",
  "key32": "3dud2eqMsf3DwJEJmt5amUzLsB4VQ9siHrxipznjgth7NNj4sZPwFpyPxdCeHyLELnii8YywbbXbkdafUdfVJ482",
  "key33": "42j2bySuRPv3otGLjzkkSG5WZ3CN2EXSLWFjnHFMd7KosuDBGqsPw3tDqnyM3v9bj4kw3CJVyo6m6JTqppMiA55e",
  "key34": "1xMV6FgtLybikT1mpX1HATyiQK8zzSqfUxyp163hZ5eEsuAQbyCVrwV1Z3JD3qLEDfvoHJDx7gD5VwvreRXsPXL",
  "key35": "4Qwd1jFYgxjP5ezghwNZRHxxeNyY9NoVaYLzZrXpEqZQH6oHbmLwXrX1JzgngjG5hRcNzJsqvHfgnpbEEwdGbC8D",
  "key36": "57kuK17A67EJMJEp9RHUxfYAvCp25UkP6HPrhXEGX2gRwh8EuC6wCk1QXak4ieDKwtxeMerHc3NGziT2Fp8bNnqi",
  "key37": "4puwFjhvuPqKnm6s4NgGdFzgA7R7TUENtsNxNrYaNmKnmUfXivV8WQ4BgcfH5MKSBCYDqFjwAKiNDMkry382ApDn",
  "key38": "4qNGqvLoWSt29fy7oUZ7T25Ab2RZegTc2Ak6LMN8MW15Ufb5Ei6V791pgK1pAh2wpUTcEUU28QJqosXhTcNZd1fS"
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
