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
    "4ebFjgnCeF7GxjABJ81ozdgcSJKVVRQyWiUBy7cKS5M13nkn2bdfvqPo5nNzhZqHZCSbCsARqcXq13KDgcV1eUW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juXh2HSJJxrfvdyrJMBcrSvcrW6x1sdzFb9VKHBHBDt2dbXy5RAgxaT8jweFFZTMzRno8EjGSjNDMMw44CacDWz",
  "key1": "2wLmhjyj9T96fZzFCezWuUqKZn3KNezSXbd2U1FzT58cebrWRC3qkEjhANEqWL5W5nG5Vhk8xjyHon8tbZyUrEWE",
  "key2": "FYvUekhcfGdPRseYXtKCcknQodVYbMr45ZKzSwTUwAe3AuCEQ4wgxNTpFNSP7QNqAB2pQc4KxtEn5EVktetjVo1",
  "key3": "5t8qHiZj6yjUB1ZdNXqT1RrApjBMgN1nZmP5CMc3aoEfyoBz9gr6GtXqEZAbi5uykNUySopjqNw7tmZHxmwk8YqB",
  "key4": "UKaBhqNg6QkiKjpV3EAk78L8ZG68Tj3jicy4RxFBTnUUdTXPgHdm48cGL62BCmwqU9fwwbkVk5D91QtNTKEsRfk",
  "key5": "QavA2QrDcKxG2KufWEXnLjwdwoeL7GLtSsuHBfP5AMd9KZH3D5YSL1ztrqf6un5jjhU4HM82bSXGE2V2ZHKwATp",
  "key6": "4jW9Vsixy9n9G3MTFd9mW2aoNTEfuFiR1pwDNg1snsdDAkGQ46yiwiLtr2ko2AYaVkEooeXj6ad63F27ks65uRJs",
  "key7": "4wTU8BL7ccmWzJdMWYyMxS6TuhiSPJ3aFMakchwwMRGWSmF7SYcBSatFJZvm52aYfM6RvZX1gYDnyZ4K8tk7ASqH",
  "key8": "4J3reuWwddtmFPiCKNRiadVkhfMrPxjsFn89sToikWZBij33oirum3L1yx6t7nwMtzbTyBjVnuS833LftgQrdFdv",
  "key9": "2Bd2Xhkh9cmhrVmJEdBd7B1J43mjkQpinNi4gKUhTsLuqpMcZYHnkMU1sPTy4M38nMPuH2UcST2uY8YEnWkCDJr3",
  "key10": "cT2kigp3TthVC9QsWt4tnd4B3q7NvBdTkzvtGsGwQHvxzNCjFnVRz4yrYHSPp4wotQDBPHmZBvpC5kudVChF2Sa",
  "key11": "3tvpbMGaUp5aDWQitgNxAncNJLX2i1GCqmLoBGYLDGuAUWuFyz24LKFCvdohVSBgpY6CZDmBqQ2yy5q6JX2GXUbP",
  "key12": "tm5h5vdsDi9wH1LKPvJU7pVz8m2wfCUsfPnw9UEaXJYKKxGcZbRaM2zpDGFj5iHzSjDZBjgGupkwXHLnL6TMC6D",
  "key13": "3kbEEr3Yq7Ry9PV9Pavx9KAXRSCfDaKg3Y5PL8J95hrYEBzuW8SPndC6LYEma6KfZxSjqeVJSfdwStCVmnb6JifE",
  "key14": "4GhFrzv5v3bcwbP8mxmaLSVCLsD4kGBPwkUrPnxDD76ZxZkzRXyNno2zUZKBvvEFeKThoTsgZuEf3EMmgV5vZrSB",
  "key15": "Qpu4Ag97YVEdMzzBEKFPoP2P67guKzXghCjDUAuJhURa6kJL5wYxjLJ6b3k2FD1duhx7oB5QggNE1bCxEqAECia",
  "key16": "3Q4Cyt1um6V5k9AL2SSEg92d4jxjbVsLFPGCBWHtkidUhqcwkVwmmEfWSZi3JRCuC9Caw3TUejHMXaq2MtSLGpz7",
  "key17": "h5drnFkiNw34BWpgqQV75gAy2DbSeQDffCcgzZPiYzHV9m6G9WdqPPGFStnRRGuVov4dqyFFcELM43BASykncXv",
  "key18": "5NWZ7syGwgC6LYThuhL9omWPBnSjwEGc4oaEz4ig4o2KD4aAzxVbXY6LD1XG2CJeZT7io4e1qSxLMdw7PdSRZeva",
  "key19": "3br3iFJAST6op9QBuGJ9hReTTuYMoYZrEtm9o6XYu6EwiwRzgAkEn4RbAc7HZRMqPocDK6ARFCkQA1wyXB5eP4ui",
  "key20": "5XYz12brpoaQGoCdJWk9pn1M8Vhz2S6UVR1bhvcNVCQcmaPQNPiCGos1xzdWnx57fZsUcVBhS3oRszBuCNx6JiAe",
  "key21": "oS3tPwWbxLm8YE7DCV6yi2RSaWUYBSufDrJjomzLkFD92Vh6nEeiXTB23nXqowr3Ge2yY2mBzFxa9qrnyP7G3qD",
  "key22": "wFCaLrn1K7UXMVjMm2k4uvz6LBWhZBmGZ4g3rWQU9yEYGnPeunyjFf5FUVHNbxumzaZzGGmBV6SyysBd9NqbdWL",
  "key23": "59sQQCSnaNocQeqkYzCDoP1UgRsRnop8ozyEJEBsjKmLnggbgKB988J8Tqgugfm7oRFk1bdtzLqq6aTY3RgtimrN",
  "key24": "5LEE5q3pzz3ViYZqiSwx5SF8c6zX6Lh5g4HioZxdNx6g2kYwpFPZ62qt6UczDzFNJPfQDnNezigndgXxYNduYjiS"
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
