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
    "4VE86qFE1zSgZ2NCapjHZEZWzoNQXK68hs9Q5RQgM3tSyvWsY22MRyZPNHW35VVjcTVbzHkNjmixCkFE3HupZmNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ds4WCrd66D16ZKBdvoSm6necN4j5NXoym9YWRwuW1cvF2igqwW78eHJRCyqizRdjaJbAtf2nrmFPCrHQjZFXWsZ",
  "key1": "3KGfUxD5iF5osKuWcufj4n2x8ZHkTUQ6Za7567vNBdYdDthWt3VYstZRmwC4ZJFEfQA3H8BAFHcFsegnDVpGq46k",
  "key2": "uCyG8u5r1rgpK7q4wsEeKRZpSEjN4e4bdRHuVRifvtuUo8Ewyp9kcYKB3h2R4fcqsLrtm12SCTfaXt14Knkz5Yj",
  "key3": "4sgwnRW3Dt9uJrQ5u2kg5WJ24CQMSnJfKXPtgLS8H5Cn1NwkrHFytWvSfN6zMRcWTwsEBtGANxfNuNooBVk16BDK",
  "key4": "2pkK7dJ26F9kmwFV5k6gqfqZcKwfti72WGjc7wog9zwAAcub2EDiNNaMMDK5dBvBtjqKMfsRFcNdskNGhqhquz4z",
  "key5": "4Ur1m9ZHth5m82zv59eia1HqU2Cs5TqRxj3RG6iNjtZyDiDYpXXzD4nNaE4b14mU7hdYoqHZqqtMTJJa9HBckfE5",
  "key6": "3aSVxDrJCchYQrYQZ4VLhw4LFABgV4L8VhriPKU1y98sRLv3ShqUvAUZDM8g2ckfz1jdFrETsHtCGuBusQxGaiH5",
  "key7": "3Q85EK5u9ycGrhZAh4A877b6KiVtHw68WVvyeLhAJWzj8BeB8i6ZHdRV2bhDY8dkXMTdiDFGvVRTNkDQRg4o5m3V",
  "key8": "5x8jqAsbSBgQSnhSqbmL2a5MasyAh95Hcjkq8PXGfSnifLkejV6keqYRy2vvV3uNbHj2kTQtXLiP8Bb5NhK9A1i6",
  "key9": "5jHFQDdpvB2TZ748R7B1oQXCfETFPBevBhn73Ff8S2SZRHJLAcsJHCiudh4j5o8YgTX3VJw8CRMyeKfbg2TPGpmo",
  "key10": "2JWqsCzZAM9Fpcwks6Aq9mP9KfrusRVnrYtnwkpBt8DXqmDmwaGPusxZenBogAM8RvsinVU1VAbN7VKCXLxacUzd",
  "key11": "3AN9ptzt1j5LDwrZTC6bY4Gm8VyZeLHQeqqPC1ZQymg664yBCk3u4ELxHNJs5qC8CBzNFRZqf4csueqi73r6aeMd",
  "key12": "2Tip9tTvcF3L4vB9fAu3tShz6C17AkajWCNJxQcV2pi6vLZFARa4mR2mi8npANfbnyw6vxSFeGMxjr5pUf1XQQAw",
  "key13": "2Rkiiyatkdr3F2NSkFMs2WGmd5goQXH8gFAUALt8aw8VXWrUmdAjFpnCWGHw5QW4dfiG9yjcojiwhEXGNcNWRf9i",
  "key14": "3JNgCgutDHy7WhJ4W4AZ7rrjdghfDjgJqatggoRUs6YjX7cDQGzH4mbgoVe6C2iz8wA1RQMoshHTSSWJfERYPAtn",
  "key15": "5Cge8bTmZHpPDKPcnTj9S75gvxAMwEPJpjcitGz2JWJcqoTpW21cUSdzHHhSXJwxrFqzmjoW7WXBu6rJo82sAVvy",
  "key16": "38AUR6owJNcnfBHCz8orMx7wXx3bZk9rQD8LE6Rgh86NF5Ab2188hpKVfbUWQXJEjUGG65MQRFfPzstmNG9ekyDd",
  "key17": "3VdRAiKcoTDwfrhhGLBkPhnPUgmsHLvbFPRoHUjpNrUgFJxTjQAFAJrAz6ERy5jBt87soT9Eekv33SPPJzHGXrxj",
  "key18": "5mxyeqrVH7EdrCCVrVgrePr1og9WjCM9iVvherciTgzyCGFQpfUNDU3pjuqtjgfzjVThyFv2QMcxgZGAftKaSSs",
  "key19": "3EkLqnvtoVVRPC81AW1ePpdadxdu5FR1H2dpJKT8fC7J4YZVHuyRwmALoH2abSkGwAERp4mipU1MkSqKRNBP5SAk",
  "key20": "5LBf3uRCsFEimEh33sU8PkhCXWHAxv5ZsCYE1jbiN5DZWXVbdPEesUULPiGpe8Z4MeqndUGBNzCT57ddRkPEHg8c",
  "key21": "5B9YnFPzdoHe5V5p6hkTRtyVjjcaXrpuoa7tUfrjYkkV7M3FXyXFb5bzMTY3FGNwRs8zegMqHakqGGxkHUGtwEbV",
  "key22": "2Jwsf92r6VgR1591x56ceCxsHntQZX2ZBkoMpvjuTTDRZHso8aaae1Ddh1NamX9YhWyAEkE9q2y9Qo2zqPF7C3Sv",
  "key23": "2JynF6A7RPhcfVagvtPjFu4h1WT6KqwDYgJ6Qbex76FCYH3zM13p6NmEfMcsnYkSy2cCXYv9nY2TpzkZPJRu4B3K",
  "key24": "2cXyuW2uXjnoKvWeFjnnzLMAMzpMaNkn2VeFPKatLtCb3VProJPwg18qgk8AbWBu6PtuR7jZ6QKu14Mfjv6oo1de",
  "key25": "22M1TVRH1ZQ4Kt7L38cFchf2gJwrM8xv7NVR5sUBnzGoxvTSrQEPeiRdKeTUv9KkgtnhgXberzar8wNxW25uL3rV",
  "key26": "2TtEcXWEPNSz6vGxTPaaUtQMrZV7vgjnHEiQqTWEbUXD4w8i7bCYJFemt2MiMDHgPFMEkfqJZ4mmd8W1k8AktLVu",
  "key27": "4fzj9B3uerK4QRsagJCKVzUMwoVg3NC1fb7SBEzGsV3kzRmBbeKHEuRjYsiWQRxXuHDx4yNNuL5HQFaoKttAfbWA"
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
