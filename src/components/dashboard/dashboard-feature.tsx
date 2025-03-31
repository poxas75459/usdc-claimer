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
    "4UasMyHuYfr5zHFYQQrbaAxQXytr3bppbBw3ZgJchX5Y6NkCFjzAx1j59KxbVqQ791SkJPjsj8LCfP4UyEQdqKNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fQJC4pTYcZcYdv8568SFF3Lwx2nba4xMEVnVZPGfBXxFJh3qZxF7DSkmuyVKzY5CnbhikYTGukfGqTxSeFAhog",
  "key1": "3pQn9ANWRHf9JqbcRnNdXM3DQ31GE6tqNZMNj4qEgnEjPro9FvTgU948CwnWmSHy5NvEJruqEiMopqY2BQWLrZJk",
  "key2": "3Td4WtCTPfgQ1yTSp4g4aQnVFSDjVKjoMKprabAtR7nSmYwMMPLZDBteAnMDMeJeFKctDMSZnX3uKCZgbPUBpaP2",
  "key3": "z2x6433mdqmXWZp2YMmhzJAcfPtpx8XDGSdZvKu45yrYvFxQvoirsd1c5oN44yD5LjriLvkaiQF6Gw4QsD2EUp9",
  "key4": "3A4ZpJH5conDtcWhSvEGuCrjmx1beJ7vhoGWsr9nYiCm1GA5ixPrW2218kCgXJNqoCcxmsGwyYB7o4troboEvTLq",
  "key5": "5Lab9ZHuofP7QvGwEwqYZZQUTbsQzQ46mrLqXnXCj5bQd6nChbfLTbPB16FPSAMcBoQsjh1fcYpY1CoZqBoFbfkF",
  "key6": "443AmqRPK25pagCxcisKikxK5DXbVxXVjNE5mLB2hWyoy2xyXXkq8YkZkmq9pH59cUJfFDW9xCnMbYW1gLfzBL17",
  "key7": "4FUk1GDbtfKNRshTCMeV7yVqSMekxhj5wiEnYjw1GGdwXaQ7cYwsRcGEJXmDou5hjPEbhkNDtXyVFEGrfRMSVrWi",
  "key8": "5fuSHAnk1aPoAqD8Z4whGbWCExaAmscby4QxAQdxnSf38cKXV1yp5qkjLRm33qhy4diG8Nfpo2endV6UKpiASPF2",
  "key9": "3g3LULDMn4BfYE4mAsN7ngCZWbGA9khFBeSUp435aPUqfPVAgvxsoZ2CppLPcXVe8HnmuK3XorMPEL66Fi8hqPuR",
  "key10": "BRwcgKXL7yvAG8nJ57pu5iHryGkHFPbfB5rrjwjVxvwkHMUubG1EPH2zfFVJsZdUMFVSAJDnWujZ6uruawyWkDS",
  "key11": "2bLxxz6BG5opyKcXnvxQX14Mxg2Wwr72Zjr5eFTuz49vqkysC6JjmSS6uw32gwUepAgKPWHst4gaQv8nXmLSauGH",
  "key12": "3G5HvaPNTAHGiG23RNhiPhhtEBARnzhsXvL4AB8LTkDcrFPiA5zHKA3tTk6HqgPfoUY4CUyqgCZJ8UDtzUH2rKAa",
  "key13": "5XGXZJCkqN32jKSpN88ZanyDgpifZ2QwP2QFxE5W3si5M59xe1SEoLSnDk5zKxFooJqxrJ1mTTqzjnyeHLdAfgCe",
  "key14": "5SdGQDGUEDzN5He4esCRWKZKQpxqjjW4QZsMtiop139DjG3jrqYwbzZiFKFRhRK1tf3LwCKs6zHmTvy3vbkMRaw3",
  "key15": "3euV9dBvhsTnrBYdp2AHsDDwt6ojDXYtZEeSwiJrE1ZfhGrC9p7WJDcxCtGUz6qXJT5M1YbagAV5cpiPv9wxPSYk",
  "key16": "3GTCuinJ3rwkHHb9AvXmSj6SP9Q4x6KLvE3zCyMR9S3eQJynQRSJyLrKnvGvAdWxgNsjtbnV5Td7QhqTg5WBc7ou",
  "key17": "5DX2Rnpzmo16eGPf1SXZk1FrDEqbcJtwvZQsW63njghdB87kLpTYQuiAufTDBnDvu6safT6smTETYnKukpwN4VRH",
  "key18": "2SPNMdqLfdBFcdtuutySmCpkKGRYY6SuZtHhZpn7KDE2Z6JnwKSMQLYjS6yqZA5ba2rEkTJ7H1V7BjA8RTYty4uS",
  "key19": "47cDZjfrzmptyfW7oGm6n9Ap2BeY35GyFWpn75oKRcBFcRVAXCcBSaLnXVxgph6BcuBdSD5ouzPAsqqHQbt15j1C",
  "key20": "55HThskTLjWvSWofkotqcoeEyyYPYhjWneSUEWecc4A7r7p6WP731i3QZr1r1YxUgZmnLQJQyKXeGKydW57CxWET",
  "key21": "3Q8eXchiL4wB3AphZpMKgvsipT1rCP8h7Pc2LZuLrTnDp8JbfmniSW2rbzaRSMB3ewcc76Ev8113VuzNvKd7c7ts",
  "key22": "5fMXgMxMsKsLo78xiVmvPg9ZRmQA3iiLp2hRsA2VWEkk2qM4nNhDGdjA39VruFnhRdrMLwUS8pqVbhg8vXrGw65S",
  "key23": "2vabke1V5QAkR5LCpxCY37XEFsW8MDFLvCGa5bPF8GrLuSbxC9QHHNsp8GTfjyNmdKxoQ3zjg2X7DkP7SMiwrv8T",
  "key24": "aWSWN5RTaR3bBmekVEiWrwuwvx4eVMopkQy2125myCo7qfijQdkS6QYdrVH1cD4SDyZ5fvRGppgK8bNKpCHUsLV",
  "key25": "2keqj3kqWkEM9R1AiHd4TRVBqDCGxwTMYZZRPY9Nw9MrQ6i3nGqFu7YT862GG7R1XxAyThKMdUm3TfL7gBLuXNBb",
  "key26": "4Z2qyi6ijSAmNN9nPJGY66y2SPRcr18ucsa6H512oo6Af3iLA9ftWhNbva6ifg5SPLjbzpLas8jd21HBTMhT4NJY",
  "key27": "4e5rDUUfVUmvHy9SE92Lr8TS2PmfP1WhLNwgodqqZ9r9WhyxeKwnCdJhvDYFK8ELJG8mhWbfpWtUzPts9erCZWw"
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
