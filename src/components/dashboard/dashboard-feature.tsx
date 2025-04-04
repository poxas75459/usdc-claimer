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
    "2T3i2EVbPgcQL9Mh9fYXEvb39EL54Cnh5K6YJ74pAZsaLfD5n5d1sG3dw7cgdPdDawZ17MGV3uenfJ9FtaPsmjBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWY9GyCR2JoFCMi7kTejtaTLop3SQfF6BZ8SbUNHgMTknm7nPtvg2dktWP3bxiv1n4MGUy35WQyAu9fCyRgx7FZ",
  "key1": "5jzjQSeA3UjGg6BzyzUNMdV3dnoNHmH6v2oebQji7xybLYoxj3uwVUsg8VoUZavfDRN6WgmxmKCtTRjyHVmPi1qa",
  "key2": "2VE4tJsJEVUakst2o1mSwyqfJVL4sSpnaHoiDgjir9TJERiztjPeFo5PADLVr1xTYebyVQEoS9FYomK2PnbbjdhD",
  "key3": "2mKGbacVnvCZm69gvgVzRWp6i8XS6JRd1iZaYesFkgmf547g5jV1mvn9a76vzp93NxHdxgN9GjUFTWwghV8rzmhT",
  "key4": "5QzzjpjdtertrNGtne5eTZXRtSXWcUJsQyczDwe96r46W9P9sfKrfXTfBvX7zRL9woXoFwwyQemsh53V5URtHRZN",
  "key5": "4rHE3ZqMc7SnFht87bTWqJUcdS5Qk9BxXWsFFS3YubjV6JJdo2Fb1kYSx1ueXLXnP55q3GY4sLbEejzY79iSoCTg",
  "key6": "57rD8uvv3dr74uTMfv3z5HxyFdXQ2J2yjdMLnoGSJXaBBTaUJy8QYPYp1BDEwPCXfpF7cpfwFA7dN9Kwnd2aaUG7",
  "key7": "3XeLmNBDrgMFa5y6bd2wDgRhD38c9WpH8biegAgVA7J7ftBm959zNifCunggE98ND38Mu6E2NwWmW6L2Hwqmsiom",
  "key8": "3szWhzLR8368NG8v4Ut6XawQ8KmyVPR7PgEkbpViAXDXK27cMfUio8NcJXb1mpgEizLMMLrux526N2nHHLYMnPXq",
  "key9": "2TpdCi1ZJjELUVxyBmyksnJHJGb78QCBpg6jkiCJW6rvxhxF7Cj6bE9LfNhyM4FDMPZKUsjUGLgVH58QMt6z9RLi",
  "key10": "zTnedra3Eyb2paf77DsQ77BYQc9gKY2G82Msy9c1Ey3ThAXtZUxvctLLHmQ5NaMLuuRrghpM7dQxYCN2AEdP7Dz",
  "key11": "jgyKVf4iTXZ1uJHtaLMCUXEqg1Sbj6saSGDwzeqoNDSqRSvpe9x4UFEdcJGL2MbRjEC77xmbCgbFSumEDmuveny",
  "key12": "Yc2Y9smFEPhBZdkrTJmBo1kQpw4chXgyrnTZQ4McgEVjHfynFtGY6oUrd21Qh4cxyVVGDknVgPEwc1MwFMdhtao",
  "key13": "5qi6fLqJ6ovmZmZtf42hBwGivfPVcpYcnpF6BtRrLMDeXHj8LEXctZEbWN3RbYWYBvY6N9Y6SW475WYp8XyryPD4",
  "key14": "VGQ8QrA3Nv5aqthYhCrVEK5rfsLGDqnNPc3Es9jFGCBr421BLTfGfqGFeMWMBBhe1p9CesTw9GnWNyLUvAGX8UU",
  "key15": "BwsoaUAUwSoZtXn57nbddT6LnGA6XmmNa4adhybqdWrHLB8CH5vya7RBRw9Vo4dg4mZdgiNZcCrPAxqyE9Tgorj",
  "key16": "cH8g5Htx78eaQbu1u6Mz2CxAoruHuyYMAdYkfd7AivTtnYAo7oVgwFif8yuj9cxz1MQCVSkCbUBH2ADhczxpwB3",
  "key17": "3TDrwGzXRga8rSY9pr4eGm64PA2EsmNPECcrAGifJfZd6o18DmCQ9dB3u8a1Kp3ZkvPFAQu5m58fuJH5ocsB2ch3",
  "key18": "5zyrFVnxrqsBKipDP3nB7T5EEb2XGRSh9P9LmbBcDHasjUv9ubUtsTTpej8vjdSsAxqfr84umcMzPBTevc5kDHY2",
  "key19": "4xGhkpLTkYy1tWUwQVGYkv4KbsNv8n5ddmTzUrtHWKuiaePKBrb6iSytxNraonSAdsygrE9qQDme1zDPgrbrcUvh",
  "key20": "5FttUAaYGEErU2CdhAL7Lp3TozYHXpAVHh6p33VNDK5ZtFZiR2HKP8XXPAdzW8LXLhJE16LuitF2WP19oqAKQC7v",
  "key21": "5mY4bpNcG9LCTS5MJDwoUk6Fw8CNsRkL2NKHDaRvseTYRrDsJwekQT54Uv1NrbdQ256ZnC2mn5jW5977ngP7bpSY",
  "key22": "5BPiTmzFJHHxe1b9BRVUxjwFL1mkh71q71hh3tNbPjbywHeibEzSuSUFPTnFJabyEMSM2f91XBMDaE4xE2xNjor6",
  "key23": "4qYyZKpEYgMe5hC1hBTUnVHV6qEjFizjuzNFjigmqks5z2ejHRv2Nwf6ZPnSXCnJbYwpc33q7n33iBdNYGbKQ2uR",
  "key24": "32HTs2YkLULKigACuAWymnBzNLkXD1QFcNoQkHLwzY2VXxTEnZms2fnf5teCrnYh5dTXu9yPGT9qsB8Be8YhjrcK"
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
