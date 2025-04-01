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
    "5JRpctxgvXWa4QaseJEbxeeTGV1T3LwTdhHzUxHaQZ3hkqb4fptex6Y2ka991raiahYekFXSnYuebLSwH6FadU5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrBhPzYGPbkksxb9rCH5tdEB8SAErLbaSwMXwk8goBV9C8vR1XPwHnY2H52X6yKXb4oX6Vx8bfqgSfSGVhTsruN",
  "key1": "5kgjS6qFXe2wPvd8dSjLtggaC5eF2y1BifZYmytp85rvhc7tY23ukhmreLWd2y4sxvVC4zK6WxbeVJnjcSxjZxnr",
  "key2": "3yR3DvFe3cft37zhpeanx8tVt8sjpqaLCgQe3SaNPRq3rXuEGjPmDuVMDXiaBT75EYCeizWrqzbmPBwyPngpBJrv",
  "key3": "ucPoTdLJwRccQmHHwMCCQ9od97QYBCoQ3T8MUmpoB1AX2veCRoDv6QY9H7VBYrwh3u4xyqGSm7w8E6o5hBqLR2n",
  "key4": "2vNfyv5FrrfysVswG1n4tftf6tTZEsdrWT8Va4NMAwKXu3VR2rVtjXTzoHx2a6MLe1AaVzwLqSs422aYKmLvXfVy",
  "key5": "5qTQC334cjE9YvrVWQsqwjgMptoRQuspNmxmpq1jVbTjBGvd8KWdYegXk3dNMjacV4DqXAWK7BWYX75VYre8r3pV",
  "key6": "4ojpoCtPp1Yx6om1fHG5MdApM6kk9nPTiutKgB8hmiETyrHWWc6bC5mPCqGWwbm3QYdkw1jnkWsmWpfMi4ede92T",
  "key7": "2XpyqGK7Ai886hvtiJiqLUYUTJxdRR9t7NoHYPuvB9WDLoZE69vvQrscad6wtpdG2xBuEtzRXhtWE4FEEABTkCdu",
  "key8": "3rQqTQi7Ff9EVo8j8CNHkmvbTxFYirVSRhYpaTSJvdRT8HwhiViGkwZx2AGysQsw3oyfQbpzLpBMoqi34oXmnkdF",
  "key9": "svw4c1Y3BsC9hWP5UCE7drtpoR6TjFAZ69qPTe3U6ubvz5JEgGp2wz6oearyjkDw2hxgtXQxGwpwnWxW27z4JeB",
  "key10": "41L2gh3cSpasjokE22UXSZQf3Bp3QobwyW8ttVmsFCAmdc5U5KyeXdd4vRi3fPdAto2BD4mhTEuBEGP9AjEW6s97",
  "key11": "kbwcuhdGxh8fhHpy2BCq1xCuWPDmmgNTapT3HWs9edA9Vm6P9PBLymsgvkpwjm47XQpCzVHocf88v61V7R5Msxr",
  "key12": "2qwmEJN7MZyLWdRuDi11oiSZMjsULcQ3FC4mdfNd5LibnTV1Myd9ktkkxeSCY8hxh6eGE4cmtJDwUHyuQtkKU53g",
  "key13": "4aSfKRJamv7Z8Vz1MkdRfnCyf6RqgyWbZRCwHhXHzdTndRjXCEaxrhJwypXazcsDZqU2HAKF4nTnDMGfwQHz94kk",
  "key14": "21E6DkkcCrTXLMSCJnetpsQAVHLkqFCL1H6WtTcWbwvewXubV9fpSZRfEc5FYAMKR54UiuFmmL3Kv7PAJ8NohpgY",
  "key15": "47fUxg3XbY3yjzzZfmPMrRXeGzsiNbhSJMRiY7971qt6n1SvXAzE8LDt41Sjh3ahRK2pSuVoJaS7VfVXxcqtDxU",
  "key16": "P7FWbpuNAoQFf98utLkTGPh7NeQw4M5Z2B9sPQtNMUPSh6qE8KJSQKtfm69jejxbXnyYWoS2aW5zwu2qCj3bMA5",
  "key17": "4iNXRJZHwJbdLd6NW8fEKamJdso3me2PU4gxYBTzo564FDv5jyj4tKEaWLzFRPXFnE31iTcr41dFyV5L9Cru4YoT",
  "key18": "2i9UnefVY8Nonkqoixw8vVXh6UyGMsYKzC69AmG2CyKYtQ7MLeV4fGpNt7RKqbfSqV1hHHTb8cvhzeP6dpxPb42J",
  "key19": "2DCcdb5XWnhKtsgL3QGg7H8FJ8imBALH35kcntiKeb9cdWffqTtMcyHHsRW2JH5qUURmQtiPrS9hRY8Dk5nmRDrS",
  "key20": "2hycCTsV4jZNHuQoJdVV8SuwhNb6G2c1qm6Gb2zwbSq8BP8e3yRCZdCqfF7joVdkJezfgju2CGFVvDhwU2GNjTuv",
  "key21": "4x1GeJtepKNc3tddSze23twsYZ7Tm7KGqWDxLFG7kiFFWpQZa3QprP5JtvoGhJvEijZPaFPvb1ZKpEQAKcyRLNsC",
  "key22": "1PbUzawh22H5KzYsm2BeQ8Zgqf54Ed7mAz5MmVVu7E72oCYL4a2skwpwbLAnVgu39if1ro8FNdN422JoZ7rLZP",
  "key23": "2garyUNtoD2uxtxoK3nVFhTZ9san2v7U3xWkXqPxreHcvCs2PupNSN3Ao88E7eLRvd7GfM1Rgf6UwkKH7qCDazVK",
  "key24": "3YCuFcnUt5kAXKtDX3Hj2esymLBvbbcFa959zBkK3vbfDi88UPrwU25T3QNsyw5TbwHMTkFtEi78Nvovd6sMUfzr",
  "key25": "2VfY2P8U4xrHp2dhFevVYxRgmCT9wR9b2mMx3XkH1EdkJc2PMSAn4uv44fBFM7TnDkqh1Mx429LHSJnfySvQ3kMA",
  "key26": "4PXTvZP84wLAS7vVsik7vbwWcZTdZnEd9aGbcUoSVcvsXJfVVaMJMTekY2V6hoVJrRAEmxSAJ6ivwRKG98d1HB7F"
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
