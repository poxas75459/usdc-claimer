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
    "4xhpqR8i9Q2LZJBym9mxJTLUES4A9Rvm17XXheKcWt2qeJj1fyqHS5Zw2cY8XSwGqC1XCNip357SjtLv1Fn93jhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PoUJES3CN7FbZhAeAKkgrDByoiTkVbKdkuDyZwk13mtnE3qspZqwFqb3rZbCTSFnRMCN3UU4FNSQkPrQsQ3RuG",
  "key1": "5HD14zctkXNgsCzTN5yd3o32fSLVHjiXtsyoPhc3bvdCi4AcQePFkDeiPkYX6hRnqntUCMAvVfVsAxhZsTYLxfjK",
  "key2": "XRD2S6ntAGDevSV55LkuzjP79Bm59pGhcnZhhNPuVBz4x9GKgUc1o2HqQgWB82mf4MLW9tLeF2EBXiVfiywtHzy",
  "key3": "5De5hSvcHM8T5eJpad44FtFfSBiuprBCBFeZ1hVmTcecRB63NvoGdnpCQ4mBZFNtY8gtEiQ3z2frBi7kS9aDcRgY",
  "key4": "ayicXUbYTgZgBXFruoLo4qwkLuNPSyiECfN7kuZtuA5Zg8quDcXNHwgCXiw2fUssaWhjPrbe8By7BfBKxSJkuih",
  "key5": "5Kxzf9WZBKFdEC4nyhWY1T6bHRZXn4fX5p82C5oATapS5hRM3ToqUTt9uP6AXY1A72ErwjKbsdRYf7Gc6Y8yRokQ",
  "key6": "5Y5k8mkQaNsJCyGyAdUvQTrRZp2xuPToVm1xSA7KxNA8XM4sR3W7FhgPn77hchCb2oQhXSizNtRyU14uUSfU2R9e",
  "key7": "3QfJWpRL6en6pqwuo61rSuHzoeYmNJ6TNMQ6dMx4WoxbMVJQuV7vgUhse9fw27VWJPETC9AWWiLUJrrG2HBJ94pM",
  "key8": "1NxcuJLpEvCN39Vd6fTzpiDzb5LxuhUff42giYocDV1yLoJ37EHe7FPWTbocosZwrP2BoZGcF79LxR3Lej39L5D",
  "key9": "3DRXjqGPpmirj44aw4Jb99LYTvP3ay9sSL7x1nUe36mbrb3ctzhaXpJ5wLmD8M92dxLjzRfFbu8y1xrKzitS6YEt",
  "key10": "2UW9K1dH7XBj5p64kqxqnMUcUSZCmiKCp6KzhxubWiqbgK9RScSNnpA2V6C4px4GrLsDgCaGr8BMLD7HTB3mfnQh",
  "key11": "5r2TWU22dibpPui7HafivCrXyA1udSV9ZUWzcRZN6Yy8VtpCXWJzvVG3p9u3zyqdYqpCGw7VxsSQrRAVPDamxoE",
  "key12": "5hyXcRiyARFDFVmcvJYhjgUbNGfJFqNqJcUBcLJPEgU86PrrYeXusjYiJoQ3DHVK24QFvcoADDLFsTgLSYytC74P",
  "key13": "2dBX9pmCyxMGf3eG2AedFiiJaqU5c9LLFCmKBgBvnR4fajhLoEyRpe4s4GVeUcTPQ8xU1v1JbbbcuJ9TWhqidgrN",
  "key14": "5Mv8BGqn8FjV1tYbqLJimhV6Hukw1MTwY148UvZWzegKrDJNzUar2KcaDybCuSEvxKNxiHdfbaZJqx2kN9iHjDUm",
  "key15": "49LyjxQzZxxpUuEzXD6Me4wbHy5F4UML2NJYyQVKGtMhf7uD25ECaLVuTjB6kUeptrvrdKZgCcKEqc1cHNgTLnL2",
  "key16": "4HYFYMKauaKb2HW1V1DUV8kJ45rRnVTyRCQ5iey4aCFhWS2Xh7QQX7WUSxHzYHLVEsZr4p2ML2K7nxi7WjQFqA2q",
  "key17": "2fWRP1RczcRV9YDFaiSwS2oSaqA8QzG7bBzfYc1FNegJDxaWiyRGE6dsnGuygNU2ZpVAagqVAdpH6P1dRbLjHhsS",
  "key18": "5yj5tS5jyutXvmP9QeRkT2MUzYC3v3CbLx4BJYCUPGr9iPwAA37AkoEkxwkhvLjft58iPK2QSNdNkjfjzSkU66LK",
  "key19": "1Vc818ZRpKzRorsCbjKRjtwnpD5q1jQJTvocmZEGFUzWRZedNWk7GM5bBARqBEViArFUM7NUq4WACYx9QbqNWWp",
  "key20": "fACfGwkzs9f6shaP6TStEkneCgwKDhUaP3RprHfEhUJTqNX6pA4mWYQUNzcfc6ybgE483MKeEV5zdYpeVKc8qhv",
  "key21": "3qu7fQMEqVkayti7ijkanjURQ1CmU8EmExAwsGXrVM44XvSqEDQdhXhYnR2D31bVVSVbcrgi8SUDXkG6PytVtUVm",
  "key22": "3RtQ9awoNEPVe9DXLdCc9qinAADe1K177wswm8HMU9f1aYAoBGTKpcQtLohqH9xjY2XVL13Z9qNYR2CJh3m6HhD3",
  "key23": "2jQcZSuU99hhnNBDXg6X4mLR1TmvWkh1xFjz6Zb8j4NChWasXUdZrvk1LtULY7mSenuqc8xtdT1MULNttRfHfUJH",
  "key24": "3p3E2gW9yrgSxySnFQNAG9GoCGGuP684EBXwedb3C1dWCV7mszhuoSYCVH6AfErzHSnqR2u8DvES4atbZYbwePC3",
  "key25": "4ZXuVprTwu2T1C863zrsewceTGHxGAH44JB5M4q7n17EhAgC8yF7RNj3fY224xXSZopQUDoR6EPHBSPGT31QRtqX",
  "key26": "2793ZCnvhkeNxXb3j7Xsw5x58t5978QCCbH9LG35FMNgefNze77rSTd6ncBs7r12TjnK3GWqN98thFDd9X9GYBYr",
  "key27": "JYNHH6bP7JmdKgk83C31Q1rL4A9noAtAZ6KSLL99PAyurWz8CbCHiNgsNxgrWmFhZvAq3kHJgn5REc7hf5JY9Sy",
  "key28": "5csxyQphZY997xPD6aBzgNwKGUreX4tNxubKTzkKFnb3C3zPo1oLLr5pwvJwEgRvMrvh3hMtWPGgHU5m36EuCxcW",
  "key29": "LLuW5xWMTJwQWHNwokrK8HtYbPfsm3zDT7oWsH9fRtC3PuRJydCph3dKNGejQyVVoVvXrPzwges6e9FXDmHaTNU"
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
