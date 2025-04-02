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
    "4u8DPwxaWo9AnmYUmaFZ29b5ZZ4JwkYvBPefqxTMtFdbgaVxmpBSSekrUUQDrj8Wx1X21sNooyTmYhYeeriJb3CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wq9PU1eWuGQT2iSFkcWqdssAJDiLHX1UPJd5z9hMDrYCxjqKz56Jf9o1UoSTLBNzLhgfmt8AB5ibSBRndqoQPer",
  "key1": "2aHznFEW9t7yMq7poyE2ZbwRgXoTbZFnpxXSVGU2W4TNfbXm8Kq8Dm53TQtpihtKqZdu7xJnnH9GXUqATz7duB21",
  "key2": "Wtc1He6zFeofTbZrUcW1V48MpXYqGj3xNxwgzqL13JE6MpXGNJv9N4gP6J3FKcbVFwCWhithxYzD5efEPqNa6Cx",
  "key3": "4qu85TVoV682Sq9AwPga7kZnopQkfAiyuQxdzU3dpQByLyHKK3cvJocTWii49LZ2qLYtXBxCmoopvKtBpULfeFw2",
  "key4": "3PDavX9HQ854PqYoNFAg4nZPY5uimsFhMMQugDVzxYA4hFx1GKsx7CAiBCzPNbdQG8VeYQAbPzRqNpdFuev3tEwq",
  "key5": "5DN3thE9SLVFghKMK5PMy7zY2f6GutYPcJaKRgHhriYcUwiZcxR4khgShTTmNSyLbSyKLVNM1VScteyLTPMTDZRU",
  "key6": "29k5guCXCP9oHNBspDhRUGWks5uW6gMVHNuGDQT9kMnp66BzesuBrz2hF8i4WFksb8aRq8XhYALbKdSAFzQFk8p4",
  "key7": "4XexFh7sLM3eL6XEczvjxUNdCz5TizUfKqfU7mQWi8J1pTjeurd41GBj6jkxLgDZiZjQRzAe1t5oCi79qpCyiQVZ",
  "key8": "4LrhuvSgEFTfhcyb7EUJu1iY2oj5CdQPwU69Fg2jsnrCFCLxyYQMibYdugZdz6dcwBMGyZJ2Rrbf7RAzniLA7Eix",
  "key9": "Cw2JNUWCSbNHBC7t1SDviUVJSx11Bm9fpD1pGinsoXSsgTguNXdusKVWh79fTMBTLPHWpxroQ1xNJXrNd5nqCr2",
  "key10": "24i8TpdbZPpo9rkRj83dyU6FuyJ3baDMAmxn4FnLuoCyXMqtHYo2L4Z3GpjAmniz6sDEZb9AEKUaHTL8MtdAJ3dR",
  "key11": "4PCr1cBTGic77CG3NjpvpJWjT5K5RHit65Vk8oATSTczt5pqV4bthRnsxVCmD34f7LezZoS9L8PUshSEQG1SYDXz",
  "key12": "5UwcLnbddH4JbBR1uKdJZVYzmVKRVAgETmma8PLAq6FkcvJyc1CdD1Cc2r97SUmHrpbNvrUgecdsWGrV9aARwrQE",
  "key13": "67Pj5LtK4d73DwYZsEiMWBP7efUfVsN6XDkj4QVQS8Cj1uiuKAhsBGiaT1kaMKSDZDtRhh67eXvth6DUj9KVjrsk",
  "key14": "4YqDX6sUHBsryCPvTLwhZXJK3urEhDVNRstD6dYxg3svJrA9eHKQD9d6RPkgkoqrVRjjLGh7oBGnd91tD7zrMZ9",
  "key15": "4o4Sv4F6bQaa9pTPWKoW6XSH5mGqfcMBYavrEmni6sZS3JMMLfEmkNqQwipVqbBhPgGCn2A75RrdSFXY567En4bb",
  "key16": "2jLSqD9RfheMLAjvZjzECsruSEDbcYr8ujgDK3zKA4risbHAopKsUdZbdpfGkA36wjfiL6V5veWnpUpoG8M51Rhs",
  "key17": "7Xniz14rNvYN66CLEmj37WSxkVTP6FkATSnGyu6tsDqpnzkipX8UJAjsCD4KNfGmhDs1pZywjANkMRz84cBTM4U",
  "key18": "3nAV18N4VMiFX7a6CgkS4LTQ1hCeMwsbkRjNBVhN4JZKmYjuEd9YWFELg71QTZDu5C5evndHDTfViDcYMvkTr2ht",
  "key19": "5D15rkPdqqCJK6NraZBWVgGVtZHuGw784HfvrDStH1NpA8vNzCtAShvB118ajsWSPFe7MFCLXXc5cbVnzufQssSA",
  "key20": "4dvSZtyZsPmKWMtjsAPttUYHjWHcp36tPgy7cz1FzfrcAbEc6jaHCQoGceBJ1kFgpGo3u4tjHaKMiJaq9yhXJPrB",
  "key21": "3KmMa2Wdd5ERjMFg63hjubYtVyWQHt8QrxL97VRbioh7TibDvhU3Kca3uFfbh9eTLqKus1s6BS9Sg2FrvZYxbMdn",
  "key22": "3wxRYqJZiRF3L9aPfVDtzfaaF1p87MTwebQ4xKF5CCywyJFFzfSDAUfvxLF2b1ANKz4sKga5oNxQtXHi1cqu1RzM",
  "key23": "2vwtbTNjTNvL4xsMqhLSvstmSQHrnNoYd9xhnD4QBCbjjtwQD2S434kJCLofotb7UTs1nWTkS8jzZcxu34VWAumo",
  "key24": "3XiPs4W2d6kVkCzK3YFtzTie4uPqAgRoajMof9A8XR73hbc2qxdhdmCARCEorSqXqkRHe6VpVA6RnYKKuc9e84jr",
  "key25": "611GmNuMgJ9n7WTFprkRLvLzv398Tx2KkqqqvD4sQHsRzf6TuwCroSaZFwthXvSk49orF5Nxuj2hMGBhdWeSaJgF",
  "key26": "2m5udEDBgdAXjvbAiNzE9QgmTEAtYe5g4m7yUUYjCddMwzuSUuXL2QxGWuNkQwUVY1F27bvznTGSs4rkEStyuyDy",
  "key27": "3xBccEevwLK7KLTbdunxA9pPQunCvZvAV8fCeoFKJ1y2ECViTgv8JbwZ4tP6BSksVeMHLLdLTng4e7FWzrjxWJTn"
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
