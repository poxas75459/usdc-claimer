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
    "2MiuWuHfyDUiTcwbjpzphiHtGiAyzYY5FuzLn2BCELkHCR5CtPwfrw7j9x6ytL6qyRYabyHzwrJA5NR4uzMVQKMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETrSSGvTRp6AT8KNCNn8QHDnbosBDzughDddsSSjoKCgaaM7neJPnuX9qAFCqmqyvH3ALqrehmhexDKijPsPmZs",
  "key1": "5zb7K5WAGyhwD5JpfGjNHCZho5xm3xWDKWvvmYx19QpHNKRoGHbTRGAe9BFnQ4iAjzTDMQMSPsxkuasJ2aUxQtZz",
  "key2": "2G5BCquB6qgmpFxi8mspzELt1UD5kRw75AGsYrqtp7e8UqX7AAbrwHgpRPnwkboWvc9fVHizKjMkiJxmbJxdMEPi",
  "key3": "Bc5C5sfMK5h6CE8rk6RsiKbRkdNppYeK4KeF6sFf96H2zcHEjLPdpwhBVrZeHvo1x65uiiSesFVcZHEENb9zp1i",
  "key4": "5CjDxqCKUYkw9jhrdx7oKewASjwZxNsktJY9UQ1Tb9ZbsGvQNSHDnphn9zLCuqzJ8e6dnN7oQ8N8fid1b4i6MFvk",
  "key5": "4A413j3NLzZbPxaTmu9YhTSAHpQC54J939hbsVnd3vx9eMAY1neSguUdtvEuBYos5tYcNj2uGZkqUkVu8BLNS9j",
  "key6": "PtY7AZvtuQ6T7Hy4rnCnvVzEgiazo9CJ7xGqoNngdzcj4Nto9e28JCRQBZW6nEGszsQzof7tB4nnsgQxEqVofny",
  "key7": "62u4rusR1FJ8GGStnHuqLMZshJN82eDAy3wFVGXFK9GVe6NbQvWeExnEPzEuL7TyyxmAH64NcfaF6fLxzxYeRsDr",
  "key8": "q1MANg2AUQ2T4JLdYjsepenXyP2imsz3qi3ZRD2eVrQe1NaYUh9BGNTWWche3mVYBB9iDErHrwwME41rzpGCVJN",
  "key9": "528WR1MUGTjcD3zVwVFZ3L2VpFuc1uQx2S3CtMh72FNv2xNdcgZYdSv8AdF8AAZ4BW9fTgFhqRiSEt5sgV967wtQ",
  "key10": "4UP8tnFDa9vZ2e8Y3WzstdyRPXb2jM8FQG19zfhXKPDmDtya5GeVds9GnPZtjSNX4mcUToRwiy5uNtdMQJwySqPW",
  "key11": "5q731DW7KZkttiW4iqPrPNyHbiq3YVgBU7b9hy4GVi29L49b8KHjDGDjRoKagXYGatxuHwihXbx1GZsN9xnH6vNG",
  "key12": "xrtZHVpTJQxRXr6Qjn9rAsYN9ZJQ5QoLdGHq5BD7U7Pz6zGZXGr8niWEZjbz37Mqej1tVjhMo767MHDyrsU418K",
  "key13": "tG983cmja8ZxLPxyQAynBcvsLV4ND5PSqFSBE5B1LmvchaMkxXdtWJkeEgj57K2urJJ22ujZuxY8kWfbN4yUHM7",
  "key14": "XwNqsQuuhSLCjkw5pFV3VBuEGBaCDKsixw4ZRr6e6EgkiNcRX8uiVVskhVRL89ycqiS5vYUmgjJ7EPej94R3ZrT",
  "key15": "5TxELAG28NH8AAMC6gL8pPT7YAjzQWk9LhCojF6nBiDZosXPT4pWzzL42qm4CiMioCazvnina8y1n73Bv1kbPHSv",
  "key16": "SDRSzefqcL1bLR9iEv5jBZHffZkuxTZEAo7TzpEb2pAAghSGv9iCVKREGvjn9sCjZdX1tngiNQiKgvc7gYR4Gud",
  "key17": "6685VwY685KiXRYB4HJR9foHsxeZVRCGsmjzrYVhhqPsTgShSJ3BuotP672aFY1qV9j3JiaR4PJYLnoLHnFQswx3",
  "key18": "2XSYNvDaXF2FEfeTUrMqKEVtdWTg7SaDA98qfXeua9g3a6xWK4LBMUkjd9J1VjN9hWdS1dKwPXspXaktgLPjFm4R",
  "key19": "QcifE72HRoXzmzFNPEEDHK85ovVyVh5PcJpVf5ueDk62Bc5ezyy9fTEV73dpceiNvxwgeukbyRgN5mnwfiJRi8Q",
  "key20": "65sCA39yHN9G1SQ34mgvMJ8tvJLUn5k4BoUTpr2igwbnJF1MvksGxeZXdH1bZMbMdY9gpF6NXQrgHfWpSmeQBqGq",
  "key21": "4uCtydHipZCrX3iocbz9so2w1HmrWbKEDCmp3yfaK2m8mumhEisvJPMXwYxA4BMqYR3RWyLTvRjpsnKy1g9znCgY",
  "key22": "YsS1LuqatUL3eRobKurG9dxywK3YNqq5ChVqrRKbQEy6A2ecESBBrv2GDwEVaiV4wmagtW1WNuSXZt9ywtkEnZ5",
  "key23": "4obzeqWauUd2T9XvZrdC6eVswASUZfAEEgE1o2h3FoEaCbLzfuchULqebmxkBRGcvWzxhfHpaAMyQ8WGyPRdBf2o",
  "key24": "4tUQWEJSuPBsfqNsHoorvqbuSmh31nHtLaPCwWzL8jVv12wyiT3hpFksAn7FZTSV8uk7uqeiJvrtVvjSJAUmXoNo",
  "key25": "46jLjBtA7syoqAB6ToSeZknfHRTnVgnFiHJpSapY8kde2QQV2ke14mLCc3mpq4PkHKwY8NfSKv4tpiVKop2qZQJ7",
  "key26": "5XmWhyKBjk3WQL6yHZW7dDaMAitGpwKMJJofiMLXVMWeMbjL3k6TBcuxZ1oRTgqZvZkDBKwct1F9cpXxoZi6KhZ2",
  "key27": "2irLtPEMzZBXNonmZ5sVDr4NUyorwkZfb5mpZPQgrpzXbeqLdKzMbekyvBQEk1payqCk58kZRzyms5FmLtWVxPwp",
  "key28": "4bCPSVMSxMouvep3a7j5bCdoUBpNMawC9nTULQ2jzVgQmteLwMgCv4Gu5BHj43n8rfdPSn8FWJAXWHSpnvr3XhfX",
  "key29": "4j3JgZ2yXLDcL4x7dAguiAv6fx1VRmAVxo3REkjDbAhTpxjKWUiTQFuvdVpLdqzBps46waB8ZRdWv6q9Q62rYxh",
  "key30": "3vFQG5cgD2EkxL8CAaNV241EpVA4Eyuo9jApRRrh47yrQfynAe5iwjjJLDTYR7EE5PiuzEW1Hcp1BeZioLGBiowz",
  "key31": "U16TESF8t6VDUb2DbS7CbdZgYtCT25eTVnNNDLyEZgU3HXRZ7Rk6QwD5a2xyQQFgDEwjo12JeMnAQHQydcKC7pY"
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
