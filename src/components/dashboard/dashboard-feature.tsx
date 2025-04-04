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
    "Jtt6WEYdL9F8xckTb1T4t5EJYFBZzgvCnLviYdBsijcD6yzYVcpXXHDBsW4TsfWtA6k8rdWYHzgDvX1FesSbRgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLZDJAggQ3EinqwogH23DFgWvQjDCDsxSaQjseMkCj4cYd1agj2MZjoGwertDmC7Xuqf95W1h4vvFb6WQhkxG97",
  "key1": "3BmMmk8XfQTSU9txyTtNRRiL894fDDgH8rP8AQLitNoCwU6gn2XApb9SriTLoW5tfcJf4zUeXt98dKKTAB7rNMyj",
  "key2": "2EKfpJa9SPgFgmXQoWFzJwt2a2kJr4BpYXadx3DuqiVmkJHGmZMWSanAmFBkFCunWAApmhoPhxaks7LoVjGHmpEv",
  "key3": "4ep6tdCSXzTJrxEoc6AhZZ6VPxYMuvCrKmRSWR9dfYDxDNjtuBLk7Cm5XVvHm8n8cGRsBqQYeXMhR5jUPAiijXhN",
  "key4": "4Mf6yTYnZ5KF5RvddTSMeqqF3wBJSsFWx1LySVBNCSAUktkz1PadBmKmvYDxe9nmsToX4tG6SDGTAWCCYU7AYW17",
  "key5": "5nP8KpBZAXb9WNHTrRvfZ3idnxoWYAo7hdZzJFwC6o7JHLr32G3ScnLw4jtFPbN6ZSn86rbLYZ9oFv9becZYctgQ",
  "key6": "337CyR8GunmXgAx7VEDoBDpFEg8BAqXoxF9XqzgjManpP4QbuazxFoJHLtwy3xaxJLuC9Mb2Xjyiivd2k7PNhkev",
  "key7": "2gXpcBzKT2L4R7nXgJH9rFiSLWfq9ekT7CMtB1mh72xnq2L7gzJWvZ14838dJUAzJNZLfqZ8uwrPcFbz31xaSMbY",
  "key8": "2kLv2ATafFgZNcociZUHmdnaDAJXQEbpdiir4gk31dQrPQoh4scedommrYFj8kZ2DX6wPsSKVj8Qy1CvEfLUnXEv",
  "key9": "QJpEMbYXqmFGJyuji5t84cHBNPJ54Nu99Dh161jM6uZQXLk7i193nFFFSNszxzQw9dkptcHULb4ht9eYEToBygm",
  "key10": "4MuaoWgRLHt7jj3kRaS65dzQijSXKDsetq5JLP1KrwBRSquFu8BCBhfwajbmniDf3a2vxT87QChyjx861Q78NhgG",
  "key11": "3sW4FBHPSAwmZMJpMtpo4bXLq1hLp5zowiD9o7LnkZwSLH6trRRQTaDf2cTKjRL9MDniWY6hcDnxHCnY2QVPAPxU",
  "key12": "v8nGVFgu2aGNztdYCJDUWpipC1j5fxj861Rjn5AnLJAvQZbH984SWHZxwWMvwJsVnqpesfcorh8KcoDTK3ykhkC",
  "key13": "2RUWDQQvF5CuRCSNcxnf3BSuRX6iupoV2UA2ZCm2sv8orJSTqCz7cujXY4t3gP71xB6yMzyCPbDsnSwb5MDuSZjn",
  "key14": "LwR7aksLXv8zZ9H7Kt73gUwp9BK82meoPGbhKK5yDutLRPbb5TqJAjmvj8EVjhePuDyyV1csywoVs4rENCEBHHt",
  "key15": "5rcch4T9ZUpk54rvx8WUUR4CRG8NWDHXDvw4ieHpAr9h6Jfs1Lyhrx5EURNnbT3nJ2F9y9SeAxHJAn9N36jU1gVb",
  "key16": "2BXYj7wvFreDAojUv1iZNNu5ydVQVsxjNsSBZAQFeEVSiUyVb9BNbBr6XV4hbVNQm1RChMfyina5h4FJN6RzqdM1",
  "key17": "3MfRbsEyuNkmQse4vdwAvabUi8FVHrt7euZy35kahpLLaEYHRWtW3N6Sjo1VsicNzCXiS1Jz4CfAq2ZGmkE5jSpB",
  "key18": "4bw6UGiajhCtrmmS3StprE5qjpaGgVMeT3XJHs99vYLoeQLDBaE3sNyNKMWCJxPp72TK5sTAG4eX9C3KsJai1Toi",
  "key19": "HCv1quU12m7vRNGisyHtzDPyinDtBqVUzy2f6F2FWoMRXUD7K9vcYSHsWjwQ1jXkXju26FDoXLqrC4Ju85qVanS",
  "key20": "4WuUCy6uJ6a4Jrx4jQZgA8u3FhBbWCK1cp9f2ovSnSpNa65jbeeSA41Y22qb2nfkhVtXV9yJW41GnDJ3p63z2jrQ",
  "key21": "4u8iNq1dgnbXMQU8fp9JBCfa3iB2kRQW9gu3xhDM9XqdcWKXpNmuvckG6uWrrqTL4QjmZWzuR8BeUBGMcBktC8ZQ",
  "key22": "2VEdQMt3u6SHtfEqGpMY3kXu9djRBz5aMhx6jNZkMxGt3Hd1YM7gSCfvd9soHN3v14boNZ2pHiEvv3FhA5EawVP8",
  "key23": "54syEVCDjbFsk98yYq5c4sBLMa1MvZ2TpKHDJwEP1epDTbyPxGHf4BL4QPQupqbEdQb71GEP4KzyQ9ExQotQnxdF",
  "key24": "396s6DfpG9Vv6q8Ttb6uASSTEPHa7Xj6dzxRaMwFuTnukLgnHckVsdb6K1bSP7SL66YCeeMgCKF1mdzVo7RChZhT",
  "key25": "4V5qYugtFERaa6E5QsPN64vQxrHD1MjAxvbsWJ6Zh8CwduPvHNpUuWzScyZdSAsMSKcVDZUG3yc9nAtwcPTWYwvN",
  "key26": "3aobwBj1ZbwKbm3BkGtcqQWduyrEuhzqQAb7D6SLDEiJf9VGF5hyXaEofjdfAoGPtz3yC4rHyuaaSvtnm3RKPjMA",
  "key27": "3A7NjdThN9VFd5JMUDHhKSMAdHqYYvRuEb82vnFiSpJmYVTMcxVMiZ3mXXciHs2ziC9XFbnde4DM3tEAm9SDU1ms",
  "key28": "3Ag1FWHTj6QMgpAJ34PQ41MYFxnTQisERq6sK6fpPC5xy3Tj3Q7GhJaQxsi7by2EeaPcwzBgsV6M7quCFfr6Qg8U",
  "key29": "4SyEfFFc4ajbogRNDAkQYdAk5Lpi5UmZvETavnreeNy5kLvSG4hAs2JBG5X5rc9VGm4QUGCgzkz6WmCpQtLwoCMJ"
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
