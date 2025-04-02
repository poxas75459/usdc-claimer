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
    "4dDtvJpn1wBK9wmvKtD5uuHpBPmZnHqKF7AYMVounF7SBHug81oKM8U3NgoVJamfU665VpPxDzhG58t1bbiWSTZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YA5LSmb6VpHap7uLyQswfqzb1n7rUpenU8uGqx4dSBW9T22yYsTGo7mkVMgzFonDsmKEKtpSLAofv8HSSqd7VH4",
  "key1": "454BtVvD7WDYaa6yQWevDAirdqFWnRiKtSjce9dZJiwPEamKVf8XyZpzhNcXuUvD23u4jjDLvcpYPo15wvVCNPmT",
  "key2": "3cL8NqrgK1P6PZPg4n7MdRJnKjdAX216r61c54JqasYpmC2xk3SvoG2ksbegeNK2ZS3oz1fS4aFm2GRRZa2P7Sv5",
  "key3": "2LmkMb4xMFuwCbQXYRdFGbZ5Ua3NydPxEHcRunwsRKmkaz35PaFKjbo8R5L6EXEaV3oS5tRu2c1fHANfb5UpToBu",
  "key4": "wgi5gXcRteEKf95YGR5nGKFZHLgzYdpBAoCVybm2puuw5BWAkMJZELpjymTfBSRCNi2X984xsNaXuYpxs6QJy4U",
  "key5": "4NV7b6CJXiKkFXUZbshprqhcXpeyXN8RA5PFX6Ff7Vgy8QUjboG41nG7sd5jo64VLkVxEDH6stQhEBdRbsYc2569",
  "key6": "3rVS1CyvtuYuahn1tgpWZj9pPbfq4HhRfc3xtHoVf1WhghKwbott6PgTcdDmerfHefDYnoTBczSjXYhnfMLhhPDS",
  "key7": "2aoQCWYFp9U7AE6XjcDhVAefJ2QRNcBAbNsUJgbWtXHfbWqxdm1257TCneDnAdMuk9x7ARxAXQg4S7cxrYzfNGWv",
  "key8": "24JMwwiG3VJX4QFyAvW3V9V1PdMSysMPetSH3XQPcG5vHMrTi6DGkZq3ATSgY3uHsH79eqm4CzJejTcArCVMjLS3",
  "key9": "4SDEwKNP1UyGqc6mFRkkqRm747QQfRhU1sEkDV3M2qFnRiQ86CwYuY8Kpag9YhgKVV9bAAjAp7bxDMaDS5AUUEo8",
  "key10": "56shVcy2nJuvtjX2RaRdwP9TR8gWot5cer4LCWom4LdqhZpBHkAkCkcYXLRykFdbJvssHk5FDZn1rNwvRULSoWnN",
  "key11": "2oZuiwFNhQH8Ckwgk6d14T7nB2nCNfRty61ffQUa2uAJv7d6deyEsCQMAqextYmDf5w5nwTt2ExiRui9zqLV6Z88",
  "key12": "2Tcyr7uom2GKFq2pzpcwa5yBvoA7wQatNeHJCmKpRopj7HEm1CUBLWNmjzBEZBiARTFuvgnNJQ7DgttUcfHRB3gw",
  "key13": "m6fmLKji2AEmJGgw9TzvbEmyNHHUgu1iT7agXphYyxD3rHrEkwz2ZWHHJSbuMoemAdteAm4xmtZRXsEzqay42Jh",
  "key14": "9sguhzgPuyJFXHzAn1AkC1jDTaormDCYm6qHfbtxCVwrs8XzUUcX2trXJimSJTRGqScXzxSVXJaJ99J3CDkWhVy",
  "key15": "2wPaPEX8gK6Ux3VV5g3cf6gMuuEcy7nbTDf7yPiZQo7D3hUbUEjtQMy7UQEQUca6giYP3KHcpqkKu7Kc83wuG2NC",
  "key16": "4dLKNkGSa8HAjqhRLNU3WE4wWSBR14iKww3hueZmf9gpA45yQNsJow7b1gJoZXMUpsyMx4g2Ey1LPrpdbKVZoVym",
  "key17": "3GfNxaQingDAtaLUEMu9FyBCHtk4vYWrVGFbkaqCQgVsyoyCFb6v8R8gn3vf8ERV1d32KBcKcSsJ6UMZb4fpVLYW",
  "key18": "3XYCVReGB2nn9bZ84BKbnhu5qroNL2koe9tuXpVYXMvMwmyv3qsApNphmjygRVhcWvKGEtaSwXv2sUZVDmx4dF91",
  "key19": "66vb38odTKqym6Fff8tJjSKSEYGXXExGFHqodXHv3YjWnXb6C7PNmuy2YUFNUxoNBwwE76oZh61j64usq6tuhLLN",
  "key20": "2PVvyH52CFY4PotcduVkxoJMVXKCYNCNTVCbNJvf19Nx8RjjPpgH1tupgEptzo44Tkbhv9437Q516ChoEhiViAGe",
  "key21": "4Q2TDY4vgxcVqoP5w9WCXaTqQFeLZvYMsC93EDoaQ8sCDynWyWVYGVz3phRuiXoeJHN3scRc9YMq87yhV2AkZyTk",
  "key22": "34cAj5S4sPJ8LG6FecQby5hzPjpYfc2Fr3s1yDHgCnsxNU6Dtifk19ffHVUPhrKWvqHM85yN4QESCacPoUV1wP6f",
  "key23": "XR2TQksUF7Cyp4W3m7eHqppRPxviW8WBkXr424aU1y2qmeQD9W4oKbD4TLrNE179dkDzqHiaPkxW4xADXMHe4y2",
  "key24": "ANnRHzT3LoPtj1zTYbV3AJrxBmSzfhcphSKmsNGEc5AFBkaerjigRHDZ7Hm4YbSECgwztQCqu239HcQ2ZvgKnsP",
  "key25": "2fPTbC5VoaEGkQo6zmwsqpFw35PrQwBR3JcCebnpej8oQat53Ldc2tKckRaMhVzhGgYtqdN3MnnJt74wh265DTeM"
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
