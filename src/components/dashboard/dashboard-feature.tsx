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
    "2U8B3oSEmd76wwwedbM3J8AFDfm3kzUZS6g1smuSXnrWc4ULyQuHxhNhezc78aJWmt687wvZp7xKK7S9hHuKUeG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPd4RM74G1ceNh5XUoJyhe99CBxN1poRUjWgCTPiULRAQWbhVJ4Kg77HWyncDbZBJvm6o8HmuPcC3MV9H7oRzJ7",
  "key1": "3piNDN8LWUPb6QwgBNjKLgsciwEQ3QU6UjbkCtDEa4eRZG1B4kiUTrhgPgPDXtb5wvvJCeY563s3C8xhsV57fszj",
  "key2": "4ysLh54wm7AcamefaMYaADnjHgpGdmKTWskfpiCnU4CfNn3hKcokMBRxNxL4RFMwetmzarK7wcZut5ezyQfMixH5",
  "key3": "2y1de6k82AGjyn3HtWrKeq7b77LWaaQgbAvYE1bF4sDJtMQe1aRWJbDRxpGxX1iozJJ8hErx3dNDXJ6w626naK2W",
  "key4": "4RVbdpfrjXqqmXUXdU6dmqjxsGocMSu1QZJxgswTaiUn8gmAr5nMvQDQqwPHTxwajCaWh7jNmU9nM7VATHCg9xzF",
  "key5": "UzJfLeKm7cC6fPBKNuDfwAuQtZWrGTkmxa2WLVZ9zWoxL18DG5KNrVnrdwmzWBteUQ34WVCRtApXwBtivVA4nwn",
  "key6": "2pY4gBQhFbq4TfRkFC4m2cPCM7jWAHb95CfGhW3mZJ7CFwfioBKeNbAobedgzAgaR8hsZ82maUkfmza5f3s8pnuC",
  "key7": "5xBmvjB5q9Wi9hbwSfeVuoUcQ6WLXUBmifsndbkqcYTCSLrazi8fRDrF8LQCuF1v7MihmToXGH5DHLiJSnyq5hn3",
  "key8": "5sumLGuNqm7CNfGtDZgz4zhSixvNJctyugdobaWMv1gMrQNqsCTZUDEmpwuRRsgFJE1Bvkeqq4SLx9i1rUevVxRs",
  "key9": "4NnNCijHNw9SeHsyJHE6NduM5t9VHebyTLqVqMX2CCh8AHHZH74UTJZoGdq8fqaq3mKpEsu6H9UZjrWE3YFna5FH",
  "key10": "3kJbCKkvghXdfm3pHNNYddSqgtaMgqP48knW8raGLrmw8zUXZV7RJByjoq5D89W6LanDLs4BvPkgMUwRutC4QtCi",
  "key11": "9c46eDhb9GypRrFDWBzaPNYKmuCFwD4nCkZniLpJrJDzHDQLrzGRNPs3x1GTmkr8dJcw4sJ4NvYWA2aU9KCtJbf",
  "key12": "25McbwhUQ5pmMarps44SdkfkJyLLn4GABQxNGeVE4kxEdYz9xgsybU5CeJd3GdVuAaRkEdTM72uTJnypZCdNbhbk",
  "key13": "2LT8iYN2ad19A7QzQQ41NpSZSVB4hGdWNRb7zpriD2cebmijFFusK6binuT41doDXPdNUVBLebxxLkR39x881zJD",
  "key14": "2257zDnnaj4vARKiiNia8vLAHbdKMqYS7wsMCW5f4uiLeiLwdZFpWAEUAfvXmpzbdxMmr3w8HZg4c6ezJazxnCLk",
  "key15": "EBaxGPzJEz2w3xA1wD6iLabcTCo7wKTZe7b1FkNZJsff3mG8Vn7bxPMXdmhQustZnbX8Pdb2DXfdoXyTGXduBSH",
  "key16": "3iYKe1gQqKQorUTwtMdPjNx9jsR6EvMo5LzE2k8YmSWnoCSWxEL35TmXgvVUG9Pd2nJhuHpgLtc43kKZtChgPuDB",
  "key17": "3Wdw2JZA54BAUkhtXPcqN6e95cKZ1QQNJpdcV4VgDpDjK247PLdnfZHpsUgbrYSDTfLUr3EDWajdw4i5TM1MoXwr",
  "key18": "5GfMT7NUtftsoZagwmprNXXxH299G2UKn58GD8oAX3ihga73ebsu7k55XFaKP1DcNXnQE8kn6MHrgz6ZbayFBD4t",
  "key19": "3rD2wqp9RdSt3acNgaseCsQMmeU7oq7bGFpdAbSs5qEHRcQPCqEdizGYBBbsy2422C51yY52cx85JdgH5j2SBoek",
  "key20": "54A5TeSkBLQ232tMPX1T5G6RQiEQJXqANW3PSBV3fpLaL5ekE4vEZDH5wC5cKGSNGmTTz63AFdt1w2WoPircvCAQ",
  "key21": "5GKNuKixZfD8ruzr3wQKBxhbnTozg58SWxMiszySkpHNRfAddYnvUt477XC5q93mubf2SRdRVMCTLCrjcJEscYqi",
  "key22": "rVhJvJvNbmhwwWMGQjHt1xizn1KFjwa4cFDiJ585G8jCBPe2TiH1ejQ3L3LHZCn8vdY2ak2xVT2cNaVBEavYeSQ",
  "key23": "5u1eW7FiBMqcZSPkRqKmmAUZnUW3SYoL7Dm4X6qvvuqcRsaQtULriugRafEBJypQFnarwxVKyktzfCb5hHmgDXPv",
  "key24": "2tNJMudPF4pvWA3x9QhhZk8dktgesD9ZyDEzDueTnrPBJaEFy4pjPLCnYFbxaTEfpeaduwkp1nyddQkb8oRWhK8H",
  "key25": "5aQJesDaEwJrhrgY6N8Q6hCt5oYbeZygDYy5DtvmVkoPMCPXwH9V2MD74XRM15AU6QogaDo87iibTNXN98GdSq6j"
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
