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
    "4JJsDhwmNR7PhF1CnQx7pJJ1v6wBDSBfbRESVQdBshqdK8mBqUxtdQKpeudW7oShMNT1hy7FaGyhMiGC9RpeTXmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQYSMgBiNhzNDpZv748qrUNEV9GgvD4RTLwoDDEaGos7rkQb6qBE3SvNYe21kzFwy2TEkAhxmqC4JSEYMabo6aj",
  "key1": "55AMxKcr8gCWysAWB2bUMGGnQuZ8Q4KjdQpe3VJar4B1kFT4ZeUjVJieaMp5tstJWLqkWQ4vLEPSqhMzQ2BitJaa",
  "key2": "2SapafppKxc3ChkPrw8ej6TWjYpqY3d6NZoXHWxTH9rVDHpzK6bM7FobCfVPT8L4d2Mz3kwzZp5U5GFAnpcXLuJr",
  "key3": "KuW6A92KuwQb7vfKusndForfVknd1nfja7ptVXYgQ9EtqjXmfKq9ttXJCCraF8D3rw2ajepoRCbwNfDgmqLy2Du",
  "key4": "2VFUQzSjG5nt73CoE4bvnWCMhWsJmgALDqr5S8fa9P5Y2S3rpDZy9RyBX6gGnnqEiTRw2KcV6QK7c6YChYXYdUNt",
  "key5": "34gUFQAcnWqJJVRVfi8Uau6xmSrJXkYRYQYK1yhkmjuXbEVKJv3TFCCgWwPUGsrzCcF2jztaJmjBu1WGdaCS6F3F",
  "key6": "2CGCUhtFJcg33tpnrmqwNPLDbBuzBhDXBS8wA6mXcJ4oVcw3oUYoJkies2eHDPxpFfz11WCJZ8M5YjACBDPDcjXF",
  "key7": "3BvMCSYvWxq9nbgh21G4m6Sh7sHhT2muLZoYf8QwVnw7hhB4EZHPQLPcQFw8KNYDdsNqaHdAzKmFmjRfteqasmWm",
  "key8": "3FoAHX6QTPc8jBHDi5Y4QaLyEFaP5YQ8gDqf2q2pc2Vz1ubYrkUs3pwcvYRmJsXU8vAZXVmKx84AMdsEVD6vcbVB",
  "key9": "4jKWytaXwngfX42xiy78b4KBpH94y1SFRge8HyBvJHMjkoibFVBhsf336iNTmRkKttb3n1xAx3Efdsn5n5HDmRej",
  "key10": "5ho5w65XNLWeNd7KR9dj4xUf17WcvfbUjkfU7J8EbGu5uuHzE2j5qARmrhFuyLm2dnBWVaY2mqPUA1DnnRQkCz7f",
  "key11": "5LZXhkAhBsr8rzGrSB4LBhxiaMTkNjbY3vzeMFTtsF2YH94m9foav5cRTrxXT5dvomLmJHAmG9fEbsJhoovNjJrm",
  "key12": "4JdYjQcv2WoDW6UXUhTc6MJZMPxkdT1znKf1KP9Qg5aamj5NpjT5NaBH7vTxytX8QweyPi55PtkfM8VoDNCBDGnD",
  "key13": "2Ax47RiQKxsvFpVShMMV4Tu5xLDmSiXkfG1gjpN3XSkmRYdMzw1N26sr9gYeRy9GACsiHNkDxiYJJpGE6qeghNUL",
  "key14": "5C2a7mumFKzdY7ZAfi5ZyvTmdJunFYVoaSNv3W2DoKtDqv5YB591Tqu5DqEHFzYJQHP8s3UL5S5vdSQFviC4Amvs",
  "key15": "43sCBwavuafsKskTE967p1PL3TMcPSiQfBQjx4EnZFPW2PSmcaHZ4vZGkgajHsM65xWEJTt3NiHZFhHeLBGShdqe",
  "key16": "5PTuSqMVrsQk2mWznQAgqnNPjDyB2S2Nqvv8CVnQoGRSTeoPu1FiPyqHBVJed6xZWnpkyU1HLMD89SWNNmUUzsaz",
  "key17": "4Kw1cxeG32cyZkuLsw5kKVqrNANd1dCLgMReEPwZHsU1WfZdkAmZjh4NLFE53WLyYYVsB6oYDmecUMM2xgyhVQ12",
  "key18": "gbrzNAZ6oPGzys44uHBVPP1QRG2vugknKk2qgnkSX1b7QiiK3mo2r9zp6Ju5Fd9TAmG3eC3JfjgkjXMZvM9CZPE",
  "key19": "2FVYVLTGCBBoGQE7QkNUsPPjAgpedfLjrsbM4eL9o5NN8qgCxK5THDXaLwoXz1f3Tx3VYu56ZpL8dv7biRniSX7",
  "key20": "3JdP5RNfqh7Kcs9CiFVP2oNkWswKKximuVKmD8FnQCWkSF7MaXVhUrS6iGGkngGbdUeEYDSHACxSrXBLFEc5pWTw",
  "key21": "A7efCo4i49BeMhhjeSgbTu64oKt7pLVfBSMGTMZRqYV2bo4KySxp9xo4n69Mbis3wFJwPeq4YN791PccMjPZe8v",
  "key22": "ey9cZka6YoYSPCM75vx8JKSMJHPctkQofmjiTWXwBRHHHsNorWJhQyU2UcgLCqjvvYiqMb2NirFcKSewYnNXno4",
  "key23": "4BsTh9ShVGY57Vw8Aj4Dj25uszzhBmmrgqdj1VcPDruarKXNKZzEeHoffpeFYfyzPzA2PQsjA4pAFMazc6TGKmhk",
  "key24": "5siHyKVydX3im5SnhiQ9Q7wUAcJgr69UWCJmRGeD4cxspAKbQeroXdfSNEHBczwtq7AKHPyXzQpcYSEy77hrvABV",
  "key25": "2cWuVLTE47c8X967fSVmdZkSdr1kDL1qj1MF2TPw7PtsF8cQq3ZdkHxqRH6edfuTeRANVRQYgKtBKXkfMUKXhUrL",
  "key26": "4P28pjjaqSR4KvRaNrhtWqPt4SRP99qaS4ApeK4Xc1c5jJ1cptAofrdCH9YCJeUVZ34HNZ9YAatYdjLWjgSiJVGd",
  "key27": "5TRoGXRRZVwcpmqANpG5stdEfdmoWnrCmBLHhuQf8djULTm8Jgxsv57j4gMxmSpnxqx2hbfsk6SZRzDUVfnN32ab",
  "key28": "5g9k3e9xLDzQCpS9vU53gE86KTCjk2hquXQ1KKzeHT81ETizQyafwRZvqgFRh9R8pmdjhfyWZMAhf6iVNsinvjCd"
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
