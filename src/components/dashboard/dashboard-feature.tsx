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
    "3Y9xGodGyhLrgUQNkvY2vLD8EKLc2mLPdUQQWSe4sxu3HaQAzTwS4vdfHYZgHPXLwbZJQWFpQcrz2ogpGBfU6pj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVQc2ji6Rn1mSycdaYL8U69fFfenhRUvUg1DMBZwWs7vx6qGeyxzfimYeU3YQzstGcojXGwCVyPeve6R2FPNvVM",
  "key1": "3yLJ1V3k1DqRFPrzfjbHShBY6mc2eBYq2mjdjDM14pY2JmPgTMwyRrQa4sNbsawTudNMCgXhQmfVHaqmj977shNK",
  "key2": "gyHEXBmmS54QUj46mfG6oY6WjZwCMAdEk1BK1q9fqSqqK1sFDG1WXVpkMZYGhpDFwKp1CmAea4yXSG3tJ4n9jFm",
  "key3": "5JoaToNgfXUzJuVyUrcEseskQc8houVbqLCt2fTB1RcL417Ksq64NGkUUG9ekmkCDoZXekNxYwwgdknsLNSKZB6A",
  "key4": "5t4HKEuxwSanHGGy8K5nUq4TGtsNNB9VManBNgkZKBSkq3W1DaKHUARWZCsRFjZP5Yh2N86roLXG5qoxHB8sG4C2",
  "key5": "5hJbBeD4iHTLDMx7B1gQQN5banCG48RF9CJ3RsxLuarQpayeCcb3wcwXwQJ6g1Jmu5sqUok69yFQeNWHNJD1DoLh",
  "key6": "43ZrqA4X1cRdhuRRrNzLsnKEuGL1kWKS6CUvK73eGgzets6YKZaq9Kggu8DEo7JGF96YkfA8jBvRfDSPC3Mtw2xy",
  "key7": "TwuqsYQ4poUjmzSVh89PP7yc2zP5Yf1UMQqPyT4dy1pf7kmSZhW6hEthv9M5aoXE1CM7T4RKjbJqBr11PiWbJBB",
  "key8": "4dwmuTLu71MHCz12nh4rEuuwbC6niXjoQ8VfyB3tu7Kyy2ziViqNXmNWeHQCCzUMwPPru9gm2vRefLk1fbyr2HC6",
  "key9": "3RWiKD9daK3jRKyipj3FqakLwZRFUV1wqhnNPWseMDxa5SnHasAfZrpKqyR9JDUjfv1u4E2gF5TrDX9bifVUPPxz",
  "key10": "3ZEEZQyPCGveU6o52gixwpNydaWcpdyboJfykpWBFEbacnQjXVUDtGfAXuYiUMQL4wyTeMNxxQzaS1LrAYe5fPig",
  "key11": "328EWPoyoBUxEVzczq4K7KUhpqE5qo8CKWa3wfQsxG7iVqRSiA1QhbpfdUauSg8aZTKrvtu2xjbpPnx7rWXjurZd",
  "key12": "5r5uqy9mdMBmazRmfD4nguFas3dwewhqhdMJjE59UtbEhW7KGj3rZxgxRBEzpxWyGjNgBwXt9QP6G9UMagmRAgr1",
  "key13": "5cBW7coaVM1jy9rvyvEBDLi4KfVUVhZVqECcQDCYQx5VbTAaiViBvZTXsxmix9bCehtBuL5SyXx5HpSBYbo9VYmE",
  "key14": "4jinkpStRVY5k8iRbo765Wcz4nArjppmpBijQMHgsSTksJum6j53CoM4j6YZ3xUw1mSAkYBKM28JsgiZH3L2tp5c",
  "key15": "4j3gUDEig6U14VLyjALnJbrfgXqymJswFjz4uP4gvQW682fSCtQEgQHiRuXVaMjBx97vzbFEX1nLQ9B69yNTqkKK",
  "key16": "5bjdqf8zrtFYNJhJpu8STLwUnJvK7yjpTdj7FvNXx2QrHR26jWWC7ZvSuL8xPvgGrvEQHJQf3XowBsqRV4Vggtw3",
  "key17": "68zrqwjwytatDx5ce3o3gstYYB8X7gsEqwkYFBn9qcfxLkTRTy84fsc9cqzQgHSogNWjSufECCkJET1kNUy5vsk",
  "key18": "5a556G26djCcLRYPiuM51sFgCZE267VTK7J8TyQQuaWu1KgjJJAskpCyQvFrrhwBTAWiwfHRGUmj2evJu93zTMZv",
  "key19": "3CUHuoDzNFitw1NEFDgmwcucxUGHzFqpYQ9nQR2kgjL1LecEiYN8SPUN6ms7KHGRfVFNVMKKHJb7AQbYoDmqYZK6",
  "key20": "58isN5uf9zEpYMfQEcb319supzUoUaMzozrBCWGch6RWCSA5Z7563Td8eQjWauierFQiscmVp2PQM1FMwfXRWyyf",
  "key21": "54KjJpNjnu62daGCFSSzhNdTCbJicoFujafV5tBFVo4k4iLJpVk1me4Gbtbh6WNzNMBcujt45FMksetpTCdy3qeb",
  "key22": "5LKd5kir9KNsjxxzghH4D1styhmNmFDw3A4VZS4zsQRSnoLbNymchKWbiFaABGic7NQhfKVazvUpQsyXq8tYv9Bj",
  "key23": "aPpRmjB5rALDe1iZziwtpW4N86PScmqZMig5zwQkPN1sojCpUD67XjfHKz8sQtbyAFnG4ZVo5giG1jKigi8x3aA",
  "key24": "2rhZ8VrjBEXHL1CnJZEdEs7an5a3i9s2zGAoCWqzESQzAkRPjJwZJybZKb15h7u6NG4SYctL8rUD9JUsx2a2RDD4",
  "key25": "5RyQDKqGdWLvGQw1x7ndFvYs5CVmNP9ARiCk2nFhsotAHpRAqDKZTTxySBmddizXB5b7FemdyyVkAT3VYEZesUtY",
  "key26": "65geB7qrAnvkeKihCZvQLhXh8T9USQ4UrviWw1gPPrrPynutJBftWCu5gF9c4ATNfYBv1osHXisLg31XfwoXiB5",
  "key27": "2PtJ8Ez22TWmaM6ePBkhRSbwMy5opLuLLhT9PinjjJkVPrzr5jPqfDjznEZEDHNgkY1ohSMpinn2Pv3Xroc15FHs",
  "key28": "UXrtzVZUL6fGezReiHoDcAeL2oDxGu8Spw8zWf6dUKvzCoMTrSqAM7sMgZnj3tUgSfm9JxE7xVXXdQvd61kSrVR",
  "key29": "4qPiiT97grz8hKp6gKycbjFxuJUPkCbGYHEVrverHQhj4FPoH99GrGQLdFv2jDHsoEiuVLy7NNwNvgS5mCN6foU2"
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
