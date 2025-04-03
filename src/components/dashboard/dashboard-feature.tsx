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
    "ezVynQ91hbb7uSqfkTJNU8xJvYJsKYidc5aTz2BARA8GfcS5KvB7g3YhHxyCxrTKdks6Jo3AfHWbEvnvMynnbJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2MzvYA6Bph5gmZHJF6Jq2ynaQUd8gUanYjjTpLPZzpEqWQd81VHkBLNaMgzQ8YBaLxcSSVVNcXexbTT8vhLbtM",
  "key1": "4ZPyVzicxHSj8vEkNZm8Exafb7CZ4QTgfTZGNcDjLMmqs5MtyZEVfiMTo9ryBLuVGXC1k9qYEZ2cKaEM7FTxgSeV",
  "key2": "2KxRMe6BJCuP5anf2jYjAiN1vErGeUVan1hj2jedaFxXRV7x8n4kFaQVwGdvW2AXTqPm6cbgnm8hiSJM1jCNAeH3",
  "key3": "cGzCfUpZd5QHdck51MNVsgBCGRTJmo1ht5vJ7ubznxTvtKP6iYgMs5MpoU4wspkagtH6TG5dhAQnyigiBwPuWuW",
  "key4": "5XTNMPydxXsf6RmDWNyP77wgAjZ8YcThoD1vR2MCtYmZWYpQd4d6UggJuTd3Q9mecQDz2YMkaB67hixZzRyBev1s",
  "key5": "211UiGgFsYjeHkdezLSuiFhyxWHjmSXwNV9oTjRff7rN1D9f8yfDdpDDQqsvWxwjMVdWj9YRWeDqpiy3Mdr7MHVU",
  "key6": "4knnjPuRVfxVXQAXHuPg61XRX79majB8ziDLR6aUBfwN9NSnqet1WC9fXb5wF9csNGSNwxn2rt6U7vRbWJrJeWdH",
  "key7": "2RRG6TYBnEAxauNB1Z3nN76KW3iuFF6fM5tLxFRL7eS8qrHnEVJKBBgrCDkeG9o5w5wnYHmMYvBJDN3VXnTkw6ow",
  "key8": "fCAnX6kxbhBYTbd3FVEaezsed1Y4HHcz5LxfraBqRVimjVAXmH9eokEHCfyRtXQ6EDN8GYZFwNh6mMGk97eyESn",
  "key9": "dzVnDu6auNzCTP8348pqGiwXyc45kSGr3efGkHURkEbg9MrYPBjnRzMPW1o69drjhBgsvBuqhGsSNswHUdGh4My",
  "key10": "5VAgSYvbTruamikSHrVym1DUygvjHgWAkxitL7PTY6682jTXL4EUG9GFxocCrSNJXpjTdpDrqJkzWf1sZUbioYng",
  "key11": "3P1thggLmEoVWnNzwv3rYmxLdiSizjHbQnHgPe2Ko8jk7TJLAZ9iXWJ1vH8vhryGAU9pmCuEJ6FeoWD7y4K9mqNH",
  "key12": "aQpANgjcv4e7xekGaxFAKwCVVjFvbiY8ur4MGq9VzXwZYMNeFJ9FFSVBDxvWKrrdLLjNZQGRwWPFWfBtPaLNWr1",
  "key13": "mBYexdT6VmeVCvHAEcnQgosmgS9w4h5HrVdh5JZo4UrZjfymmWepKSFvucPcW5r3k4nhkseE1UTGX7HWicResBr",
  "key14": "QwjLoG8U6NkxY1sQH8qvgby1Y92stEe2RUPZ6hpySu6aRe5c3yevNdAqdVKmhZ9vbE9AgkxS3NPK6F3diwk5DKM",
  "key15": "3KuzDPpW3Yht99sGHDXXvpRxW4y9ygvGscvyBWadrs4rhNTZjMKPD6cEgBaNuN1HGpH5M4RgH7rW2nxn1Lq98xad",
  "key16": "62vJWJQpG4FDVDXtTCs6qQVpmBMsa17f2gfDPgx6TzCvwxuoYb8uyAC1yUh5BRoxkYu96z2agtTQnDVToyJRojX3",
  "key17": "muGeCNaQWVRwsFGbii14ixNCWDwu1nbvUAmbm5DcKEMQWQiuDqFQCiZMpr6EfPHbZpvn759jk2cq49S3dTmog8a",
  "key18": "2n3otDYBZRtpJ5wUsfzgeWVj8eZrnv5vmsMZKDFu8uPZytZ7gqBfpBofHcrD7jtFNKVDUBReKGvfxRZirrZWPKz",
  "key19": "4Njhta6A6RYxkZhP8tA4RTyMdTXXbAumN34MA1B63GGeogoGsH3doQJJ4XyEDoPBzvFyvrstrLtqCwbsH1Eb34Tm",
  "key20": "3eYHS2DnP2zhd1wD8ZLuEYoGLixJKUtuWt8Y6Vu1w9cA3FngmpVAfEBDBAJT2hbUgDTXQ9MwRsmWTFjbCDT5SSzG",
  "key21": "MhpAi9HA1arRpYLwCUiv9dCwmz7emTDeH7k2dFC7LXnwYzNu3mstgmrqynrir5131mUUU4RfjjNij7PxF6uGmzs",
  "key22": "2UsmtczxQjP3fSnYs8J7Dpvjipip8A3EANw9tAhqiTjATGjpNamn6zA1eaJz5JutkYMuMbMRiEhQGXNwP685hcT5",
  "key23": "GJYbb9X2xdhBxttSQeivXqXDvaFXCJ6AVWwGFp9MZxi4Ykv4C7qZeHpDXp9qhw3wWXXe2o7NvTSerdSGXs3sZpu",
  "key24": "3uRtr829XUXnh5UwMktQDZnyvZ4U7tjd6h3JpatkDQVQd7Jz7m7kfsn2esX9hzS1NWuPzfyYYGJu4xd1eM8donHj",
  "key25": "2KmyPB18SWdKuHZCezYiwkwKJoCBgPyFaat5qT318B9deEvvTcEc5QcirGT46JhLYhdvuStFd4BYh7RS9eyPKUcx"
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
