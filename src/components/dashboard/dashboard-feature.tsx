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
    "3DGUpWZ1VRPAiQyXbCUaxRVsgz8Yi817xVr2DoYEZ9nxofGZWckawevBBtJDMYEAmE4r3vrtH25v3fciQkDN55jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsoaFt44RLXVGpwNwYANjKkMcodJDrEU4HkZ2mWZMYgs3RqnaV1NDpKufoLTzQ2AtyPV4gvBShVmL9Wes3Sk6Py",
  "key1": "45eq86ztPe876W3h2E9BcXqwTE2FUTdq4YPgCQgdDmbB4ABcp3jMzeWG7hhUDUFBXzRcwSuQ3kcA2Qr1TW7g2Lgm",
  "key2": "TPgbty76WX3cst6fWeKj2XgpmCkdoAbG2JK4WUA9XzUZuF2e1mZPmYAgV3jBVz31b6PogKu3CPFQuHSgDSMCPKd",
  "key3": "2JgkxEsPr4Lw6uK1Zawa6NVhw9QhXz43696QpxMqHpnxkszkABsBeLHS5Ke7vBSUmLspbEUPvdasjhMjDgvqMbbr",
  "key4": "3D4QgKh2AwXM5rWoWKgDxGQYV34TK9v9NGyfWCpMNTvVXQYZGrziD63sntZzr8wDb1AF1yZ3rmeLWEg8L2e1etQa",
  "key5": "3892435oHAgoV2jWF5kERX42SmHva4LTH1b1aaE5vBjmZZnRy9EzB1oLnZVu8jnz5CsR513y9PiTUFs6cUx2hrkV",
  "key6": "UHnEfiyZwr13LEV9ZwJ1eUYijHNuMcN5p2k7xQeGq1gF8bWfL65AAHJaz4ZMHqLEDwYLHLrV3CtBiPvPKRfzUXc",
  "key7": "3JMEv37cB81DWhHMC3bUoXYjc1F5k3iB92nmgYNkTm69jHW3KYHUJVm8MFTLwUKqyRwvemBpJ8a9skrNkN4qxHt6",
  "key8": "3YHQfx9fxGk2yfJ89vtYbBWFDhTUvNdy5e1ZQQ6CyFY6W8UZcN6JB4Epbtr5kJGR1kLbp97dk3SNAcJFTaZH1zJh",
  "key9": "FpWYPbgZ5p2sxwkAwyFZYAZsDrbabfd9CfWCwa1jb3QukgyZFc4KadaULd8EWoe7xwkUsiDrZdJXdXr5cei1y7F",
  "key10": "3KD3VCQwR7VCZkQEZ7GPLxo9UpiFZshsuGjb9duNK6njxDSbPPqxiKc3reycXhFSx8ypCSPBnrZ91WxEbXGGAYZE",
  "key11": "2JUQkQXaNdD8Zk3oVUtVrB3mC87wfuQiThfb7iG4hcjutfKorEDUCMvxferCBA4TuyNYPyzGeKSzUjaRjUaTWGo1",
  "key12": "55ZgmqTVH2s3xRY9pJFmdhqq46u8T9MK5p1Eud9gMxTfXfCNPFnBbBW9e5Y5CAmriAHLa46SZb71LUKhZaEUcyWv",
  "key13": "4HgfutZ2FNx3CEuTYi5Uy9rkWhkN6cd28Lx8YKUPesrdnpqfaGEAzGccRYqc3PrAA29D2P4ZNBdWKvChvbKUbozC",
  "key14": "2ELtvJmvU45aeQxvAgN1UBpJLirLNMkwb4gVvsuGxQMobYQAxxw2Y8SwZbxa1r8xBAcjXibA7MCha93kFbbkEYYy",
  "key15": "4nUg9sp9VXfbFNg3FnNvLYfHqdWoCuV6P9vMMhgzBaTd9XcYfZCfNF183DBaGvj4TZfQ6VA7L4esS7DbqvdRb4Bo",
  "key16": "4wPTF2FqbeH7ycV9s5884YBSxo6T1r82BUyzJanPcNbAaswA6wotSfTj8VtA9NQu2RHsYh5KFpSzPyC3T7DPwUu3",
  "key17": "4PKnKQD4rs78xzYuShKA478Jdvy6Ps8GTy7aMNAEWRNk4ujKhZNnnxNiAM6WfmUfd8xYXBhwWaaCZGZJ3eqZiUR",
  "key18": "56LKAe94Bgw3vgJcpurSswFr3sUYhZ2gJ7DiJ5ynTxViPM33TXxBMbPksYE7a9CsT9fup3nG38KmF24biwxZohNX",
  "key19": "42moKjtCZXyXrZ9ppPJWyWqngdmDsTQegEFjfgV4Woqfv4FxZpxmjXP8kjC4VAhUTE5oZt4cN2aidGH17YM8WsdT",
  "key20": "btLtpjX87x8SRyGAELkm34JdrAY7ZQhVpCHcgAWGTbQTBVCfwtboZQfHv6FkGoMDz4AnXGNx3jubnZ3F8gvYahp",
  "key21": "63fRURCUzsSW5PibsmtC6HyiWH6pPiqoFX52cXcCiVjGz5eEviM5kHcR1fMtPR27963XEhFooeZty1EHeg5rbm5C",
  "key22": "65xJewJZ676eNB1ptaLxnrP1F4QTsToXvvkTZHbYyZ8ooQnFu3qwvejKUAgVwQDZjhqYHXLTU3325gWLuRL7JYv6",
  "key23": "5HC7ET7viNWrauXUUU6hjH5zkyjP9DXXpwDQFE3EYzgc6nqvN31r2gwLPEmtTURxvthweJdJqheQcQCby27kbji7",
  "key24": "4RenVubJ78k3xje3u9a8sbgaTLryfLdTP7WaxLf4f5Dq6TeSUYkbjbiz7iX7iQfY1Jj2XMSAzcsU8oUrNVvmkvxA",
  "key25": "2vjLbMYAgmRKnrMdoX5W7tM9JEMhgXDW8Thvj3qEmnGbphMdoV5YzAYp5z1BwEQZk6i3Aa1phbQBjtQMLKo4MAgX",
  "key26": "4HNyEktcnJgf5vGx7RiPERpqkGZAitRZB8MrdgLBrPF86DL5GEkmjFszobqakJAvxCQ7NqCXjrwzrw4QqQQnjqt6",
  "key27": "otirkXEMsjMhjCJMoxPpNR9LGLhqj7nfvpb5cvpu8Lhvb31HC2XCreNVGBJBvpT3Z8skuVC7EdR6r6JBwSENSsB",
  "key28": "5XY37m2C5pSmEGjwuCrawxNed2J62Loj9K3ehrNZPL89xAZsrNpboM4LD6Q7q5MJJbboxmVHJYS8jAcqz1cXjeYG",
  "key29": "24sU1SbJTstfhga7BeRjHPg9AsvcinoSiYtFpvGaWEqHBBrdk3t3C27kM8bVStXirMzgsFpGa64Haj56xCfREEev",
  "key30": "3bBvLpMFiRctCbc7jbkGrpT1LhoidbrXLVLNevXNnutrQoxLus64PGMXqxCELsL8CSS4dEUStJNJag5eXxYmq7Z2",
  "key31": "5p7Ccc9C2difZrTp7SKcWAr2s8BccmEe84L6HJXu7JVxa7Uy299JGgaubtwhafnBbNDoKdgrKbCDvaQKgAzf32ZB",
  "key32": "35ZtiEusk6qBjL2z1T7QG4r53sJfRwrNzJBssVGkgt6pHixyy7BJV12eQnRTsjorj5wvv1uBCczyvyDus9Um2N6a",
  "key33": "54nYnSKDFPyjCGT15QKiddoX56t5HjyMGP76Ugkg5mEJtAvFD9n2FvQtHfrZs2MjZJV7w57avYdbdnBbUgfRaEzv",
  "key34": "4m3eoMBWkpLH5wHGBMLVPcQtZNLXbtCB9uPopqxuUaSoXHcns2xsm4VgaH15443TGQu1LoisoQMa7DTen88eTwkV",
  "key35": "2Fc5QsjFrnaevFDKzohCJwjk1Bp44mjzD2zdCq3RzBkUPPdKy2KiGwGqzwf3L2t8vVqp9ceia1UWKR2MSZcXG616",
  "key36": "2TaBKLszqxxhPsfe9L9uDBD1xnhmupkHjGi7NE3uf4rCw9W1pVpZp3GDH1kDbKSTfKiJiZRoriWbgNnwKrZQ17Uf",
  "key37": "5TGs2sLGR7oMo8mJBa691DWQj4Sjq7GDF2Un7c5AXv5s7bCHsofDcxs3XY3n9fMVN9YsvZaHRZZw2L9685ERKo2B",
  "key38": "2vQ3zU5fb9ns5BphdGDQH9We8qXvYMLn8GY9C4u2Bz4oqgCS9jKhnPF3rQgVzYYRRFPBbx5CrsHZ29mSXzEVYhjh",
  "key39": "3KBCoh1rANfytrB7yDDANszZTAZTswRX4LufqAZ82uYGfk2mAbEyFexNu1Po6bP3oJn8qvqHqjF5zGTaGQUDbRtV",
  "key40": "4sT5BcbXsfLW9ZguDB2UrZTnVsbs5gMWFAPaqngy8pCRpSAiHuuvSDPFp2bhm3ipJsF5ykgQZzgj6das99zeGrnU",
  "key41": "4xPPCNa8DTdVZPZiBVYDfEjYyizABKGHaSLur2D91kYxFsh8A4xsVL7fQvBty1b6f9Zy3mQoBEyRxwA25MX5brLw",
  "key42": "45W8Ha8frj6NR33AFJr4vRYMUcRrzVjqh1npA2EoRDeUB1p4hNK6cmfqcSTtEYgtvZ7K1xTYBTnFFGtaAPweEa8x",
  "key43": "3r4FyVHoagSzZ8PaZt3YF6BPAAjviJbnMCarvwfE2qeZJCW6CHrEMMQ5Jqr2Yzx2ExKqARjrnm9594UEeSg8iF54",
  "key44": "2KuwunM4Dp58CAnFeHPhDaCnDpips1UZdpdCdLsWqb6iyxS6Hr7NXozV43SDSwigm8PBMcLgSfVLJ3puDQovjip3"
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
