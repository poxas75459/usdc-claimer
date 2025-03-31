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
    "3XqEy4easbkEjFqHfi7PUzDahRGv2GLajz6m6ayUtmD8M6YBgwzhciX1cURp6kvduHEMiVJ9QJ2HCMCDErfeiJqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TiMtVHvXLewALGGhVExu3q2ySjZN51Lfpi1k8vaAxq81cbsWsUx8HgqL35t43foK2XEMsm2gAxr1dRoMzMNdTZ",
  "key1": "3fhqR69HNSyNxrHqydeqr2X8Q7jMk5U7o5AEzbv6kV2TfAHARpuD2fmDkNTREi7XBTwDaqY6mnBrPvf5oAUTuQ9L",
  "key2": "H8FN4mUNKSkrabEY5J2eKmo63A2o8K7oZZKf8mmje6V5v1UGirW6ujaudcAfyc3NSShDzr7HWzKvtkRhgs8FQgk",
  "key3": "5h5XTXSTwxC15GQGajSwZUj3giainy8ThgnF5Rd6dwzxQJyQv2vydmDEwC1zzNfoTaBp8rn4pGxDrtk8Ms7YmSzW",
  "key4": "3hAUBoAohDVUz37R8tQt3TML4YpZPbdxZkcdUF8XdDHQJwdBZn359yuZVFyLyf5d67NK3cMvMP7vzQ4Stp8T9DZF",
  "key5": "2EhBjFkiKTdxcHhnPMd43Xu8Hx194RAPaL6zS6hPguT77dptPnNGHhGPh9Qff9kfue8tbqbkQm38KtDNXh1HRU4T",
  "key6": "58qm1iA86kATvQrxrU6cx6KwB3rzLtSou3umcbGfEh9ULwLQMicbyTgRywJs1ymBNmwGrdSqXCMddHwK5VoPFQ2E",
  "key7": "5RGkgmTtPioDeM1CvqY7PnxLB7rvbJogQjv2ZvjTtXJAe9LUCzq3fT6nZoNTckLN2wrPiJbpvajq5K5wRWnyjep8",
  "key8": "2QF9UMX6kKRKeutrsHuqBpa5N2oZJWQ7vDRd6TkuzJhqBaaQZpyHeud6F5Cderjgem2FjfizmvkSPr6Xgrjo7Fem",
  "key9": "3XvsqHPBoPaWpah4NcFr7BpM5pkUcLTLtxB1NuXbKYG8oPajX1ecdjEwfGCdvm4bRTDMjpa4xszgrrfZKB4m2cr",
  "key10": "2CahzceZiuz5kXr2p5TgZb6WAEsFp5wLiRgioA7e7KUgUG2qhSxtgrNzeU6afQDUvvLaiPEcvvX4CQPSp7BUDN5m",
  "key11": "2pKUBsjQ6tdBYBvRb6yA2G8Ppm4MiRFvz8eLS7GVknkfvsxkrVKRZPbz9TVehht3xAAr88t6WS2g44GjG8kSyVcL",
  "key12": "3nX3zRtEboPXBLMFNwYKbaeLZEWc4VVYyGmZfqMqb25CGK5q3LabArXwpV36TWgBYatq6VBnXHu9pH4HPvYJ1Re3",
  "key13": "4JMy8cRVmYdkm3H44ksW7Vtf69VvEDzjZhQqxYDRsz1xemsVHojbtzZtHinsnGc7xggVX84iKWNG9jWZLMx7hJ7n",
  "key14": "KjpnnccFzgzGGnM5LkMMJUNXe4JXQxAg1b3rYC9SvwUfZFNM9cDRrGgwAauoV3rhwJivR217vCKULqNBoTQk15n",
  "key15": "4D9ZAdbv8GY5gCe2xL6we5ZybReMcKYGDWTGwJYzzcujCN7YP7ckiAJZYM2yaQybaPhiFjEdn3CzBqfXShrU8WfH",
  "key16": "4q5z6pz2LHCZcSGJmwqhFgvjarzy3ituJDFa8J3X9ZJQGH4Y69kEsynRLrV89MJxYZyAgM4GEaMLaMyBjjgXqvcc",
  "key17": "EiYGHJaVFoUE3FWcYZgzJK2fng546y2L69bxPuspgoRw35u3mEbVe5ex5Z4jekNFAhP18FF2aUrTuQiTemm2kuB",
  "key18": "2hR3Dx5cq39KajuZgJTBnSAXnJMnHXnLVSdstYepG3ef7yjdExtngnLQJF6kE7cjqo6KnwX2Ek45iXaTKWALPYwp",
  "key19": "5puaWvJXCFEJa9AMPFjWNpevjeDDrPLJoQhUq7LJZvoabmHnyXJrkJLArooqkKMR7bNKyyyYu75v3fGyz2GScry4",
  "key20": "5i2CA5HAy3HDA8BqcFzkADLoh844xnFpikEFNYGhEoCm9ygj3zxr42ggrkKyV7AjxjBi4FgG5RjL8BiCLkff9aC1",
  "key21": "4TBPqAwETFjt453HVTHyDegqDXy7DGdF867DjSuiW2tRPDaLZst6ehSESW7KPZyZwaeZhkhy4gjsaSM8t4RJ6cob",
  "key22": "2a7rWUc2F8RB8cYbfYEkiK4omd2Lauja7gqYDPm2ngWmKdtNomEFmhj9yVkGrB3rp5v6kaoAizALG3vw3sHmnom2",
  "key23": "4EA5X3nGMhSJFB9Vi6Xa83XUbEcd97S6FhcbbFCk7cUq7g51sj51yjUShuEGmisVmR4z3Lns3LY5pnAQxngoQUYc",
  "key24": "5VmscNe9gPk3dx5tfatGfEcf6zb3kBEmGDrBiKK1GnASZmdtfSqVhdGyqfkc5y2dPvCTZmKxtnNzmSuKTu55HHup",
  "key25": "2q4fJ1QVPMxaCvcBE4GukbvxH8t6BNYBhoPE2UwcEXKUgBnDEdVsrBd7hGpUtMSvGTXRihCB8pjw9RoBB6CYVWGf",
  "key26": "5rz97GLKpYymRQV9sWHqsBzbcNuFPzU4M8fKuZxDp5akvU2v4RvhjuqzYvL1xpGXPhQ3iRmi8ooUumfwR7Akix9h",
  "key27": "5K6Yemdgi6KbTLPTGexDePvPDyFfwVwPM2JvCDPmtmP6oGZiMcvRG6MBZdCvMvjfMQc1WdPTNwnxRbyMy3siMhia",
  "key28": "4T4evnyDhPtxvUkBBbfCY9RihqgEJ3mUUUdRKAa58KGyZFagiwJrZqRruH3JAbX8bE1ChGPzR5FfsDZGue7jeHZ9"
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
