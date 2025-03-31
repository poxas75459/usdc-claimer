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
    "465uQxYP7P9UJpbZttxeX2Ji6XwqjoWNtGabpZfLntUdkZbqC3GZczMb92MuhRLXif7dug3CSgaWxothA8NoonGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uHMDuHYdwcsUj9UJmiH8mKeLtZiLuvBhPuNASe7SP7ADAfgfqAQJvLy3HS1XsdzsqPhk5JBaUhXBDnVjY81ttJ",
  "key1": "3H7M2foVNYgzMTMk5L69qJrmfNnGNy1p6fcmbyhy4uuWfBoE2beuRwxwBCW2opaoV7umb2Lwtn52N258rpVniwbq",
  "key2": "3BvpS1QtfwK3JwdCia7exHCt69uGF7g26T4Y69CydGbzMwHdix5XxPZ9frohM8dfhRpEJDM5kD4dEi4vwUsJHg9p",
  "key3": "3oSXBep59HaCaDZQ552ZQKMgkcV8ZWDXTHnFFRdeAbA3NKkAVajwnRyfh14svUWzHy3qdobsK9pTAowRcnGoJDQg",
  "key4": "5vEJ91gCqE4NwRhLhCT7bfGBPq3Sv1FeNH2ouB8wDVzpdgQ2Q6HTWm1LHMKF22WikxMYWBvoa21xehGZqmmKSDt4",
  "key5": "4oZADwWNfU79pn4o11J9huU4GT7J4Wz3vckph8Xx1nvB7keEw8oTktBtqZuY438hD1rfKVDwbjj7PTmVd2JHbi45",
  "key6": "3akGvCEPZ2syJnFKcK84zERYciNJfiK9h1cLb9jnsPgXxiDDeT8uKLxGZ8wbse3fpnTedyFhkzzAjQdTABj3ND5k",
  "key7": "3f8UUGeWQdnmBozmdxhym9pa2M4mSeV8eTBXYk4Hq1hbDKdCiGZADaHH7LJV56UMcN5JrGiWfKSGxoLASygbwAxg",
  "key8": "4RVPByQWYoBd8dtk35ZbUocshatZpL1mjvtV49HAwNtoYGXtVTAvnFgDK9YYuqLvE1vAbREQZKnQd373uAPhCmya",
  "key9": "5Qvxo2hJ2yhkEbZd5FDQRQvUup3zYKpqmsBSTxFeqUhLPeZjLqJDkwg25PY2YVUuHrDQrtTxRYhJTMCHChYdu5oa",
  "key10": "3ZkVFNDpzMBBhg4vx8AvQPas4FRtZ9LatRzvjw24dkZw15BJHVKSv33LXnxhB5hZzFiFvrRBsD6V8QZaerneXVcF",
  "key11": "4cSoqFmorZmBnQbFQv7DFq5hkobyknkaE4tPWkmQ4kArUaAu9yyYXbvkz8d2eeG3LAbfGbAmTmZfqkak8rMEQrQk",
  "key12": "4KcvmYfnpxccSfHisTMDL6EvcJVSbpscipbabsg3Nw6mDK5ioqgGw5FLGtAeXNDQCGJqb58TtcbpBUXjjtJdHCi9",
  "key13": "ggVAR99S8sDLVZmRdjxeFXibPaUrsQFQjgPPUuyDzuswQbou6rnMbUq2Uuht2G9kXB2LAHANcSvwPA26Vz4CHxR",
  "key14": "3FFeCBD3pDqBz4kjpogfeLs6fwtdBT9YXs27wLS4MTKnJUTbcBWXE7t5p2yQyycwshgUoS7Mcmukjy5jgmhPM1cy",
  "key15": "4LJwEZZSTni4QoiiWUZDWni46K6QJCuHB35adTG1RoC6SDFgyyDkFqeR3uz1Fm7CFYiRAE9JKFSDYhXnLKNwx1ya",
  "key16": "9nDChYiLjAg8kD5YRsPAEyTiFXjWhHGEszGyahpJKMTXrdaTgGY8zchfxZSWmnUk5ULesx6mrr8B5Wycx2qsvdW",
  "key17": "5BFNeZTeuaZS9dEKQP8rEmHc9nGuXsbT4sr7GejZ5vj1zxWf1QYepY8fp7hx973m7AFx3SFHFiziTmA9DrUrYprG",
  "key18": "NVqBksPoP4pcHoV4PcA865sFzWwF8y236ExERAxBNQhCiSXm7MSJgNLuJar7oQx84wpUkP1MoARWmCfFa845mDd",
  "key19": "33AnJs2yZRLdbXkQcijZnfPpATPLJyt4Jw3avWRmErDxAKMRTtpD6GpC1XJxyHxGnr6chKvu9jZp7D2tt63ciuu4",
  "key20": "5L8AoWHe1SAFNWHR5E4hoJiiinZwmJVu7R99PVtHUF4oAUryBqjf4dBvWrvrxTB4y1f6jMcmz5gTrUYxhk1awGyW",
  "key21": "DnLNxoW6qNdRqtcQCCiBEwMVhnhBu92eFkWJ1AEcr6g1His97E7UxLx2nnmbkksQEiDYMBKuerJUEJTmRNid7gw",
  "key22": "TZrPmep79YkXBTn6GWw4Px7PvBpoybTEaWktcetdBn6cSVc3zuuanCZegGXu8xmJDbtm14AxKaoxNQYQifmnXdb",
  "key23": "2E4UxN8akNfBPU3wgjbHghk3FFexq3qQ1zpoG1LPrxfBkTwmtsjRAaucRRLmZXTMrHp9G1JTfwEtjb6KDRtm7Ddr",
  "key24": "3L8R8R3sBe4o5NDkV7RR8wYvRU9c4NCwDFMwKx1TKBm3fjLZcqeBHjr45ppSzWNmw2qmacgmBnbiiLgxLzxVnzPR",
  "key25": "2SEDLtQguwaLfC9QVzpqc8qpYn7uxxsF21rk8sxK2Ycb9Sv7VqeJJgS4cG1McppsA4AuZoKMepG2eqDZmE2jtPeT",
  "key26": "5EdQZPcYHWPr9zegiy8PrpegYNH8HqyVNtgxamxeV7bskvfGuDfU6kQDuT8a7TiVLyC1DipEU4Pm6yFetWbDHwai",
  "key27": "EaAYiyYMDvZmQ92K8dEMqz6ohmCSWb1C6R7AzEBZgi18VRvpgk6Y4TqcTJMSjGoHTvoq5bMmADMFo4hv6faHzhs",
  "key28": "D533pfNwxa2kcenUQs8cHYnBp3CJpM42YXq6rQYvgnCbEPXLuXX1vMXJxXQGJC9TFX6GPPYzWjEEY9PSJxtHSWt",
  "key29": "2PysnoDJwQr2xPaWQUx6m5m9zwK57ft1mr3BTvExLevznCFcR1ZysGYEFJcARbcKJJgzHd329cneHgfgtH5GhYsY",
  "key30": "4AgkF8Ga2U8jr7rtXtLBXS8eRMxQ9h1iVWQhaMh9gjKZXcCFbxvcRuUsuXMKMYPMHciLCUfgzKnDmc8rBBPeBjr5",
  "key31": "3xGmFPyactfepZfeThZKPvMJnrLwxRuhSawyvMLnbKtbtF3xWtNbRFawbfbQjg5gHXRJ3w6NghtxwVwEfWhxCRDv",
  "key32": "4ahmV9nnod8YXeMGApz9Sr8rf97dcCrmVW8MJ8sW6WYULzQPHP4eJ9X1VCZBcFfFvw84gJLNeUUtDGvJoGAsfCXu",
  "key33": "4rqQJ1pUkzTGNJGF6T43q7AC8a5kwekbvUPPkMAEoQeiRshnzEd87RyWKsSUoB12sQ1pBoAEFwpyXchwYD3dAaAH",
  "key34": "3wCqgSxhoZ26FSR17SZ6SFsafM9HSZ4yW8prnyg3x4kB4G8uJiF2EQvrpFFAJX2iCTnwmtdoroBVG8abXLjKknhE",
  "key35": "3eSNKVywEWeH9iV4eGpKtgEWnnUCUwoHTBuNpxDhP91q9APSfd3NAnF4DmSceFpbzGCHWnKYfxKMju8G13NEteBU",
  "key36": "5Sp9ZnwsA2dC9F4dcpvqzP9XT4RqWEcQpbMWJnB8qXLZR2uvLKMRynssR681d6Ror8xukwjRX7F89S3dBFjPYtx9",
  "key37": "5emyFm5ocrXhuA33dAeD9wVLQQGWZGZzH71hvuASV2QQJgLgtRJk2J8kydapD3USEzXkw35c6RuAqoNRXXzc1kiR"
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
