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
    "3eAKnJRTKd3hkDHBBXXYWeWwvH3FFCJRMMn7mRBCEcgKuVS4MaHLTgUXxskeXkXXeYJU1a58kQp4ugpFDXfJSeVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K14megKJnfsJVPF2UXq5zJ4kU65TWxdcWaPfgjt6B2himKeSYTb5GoPCKoGpfeJ9qmWxUzeB5ZCpnNJ5SkvoanK",
  "key1": "4hYmniKGVVdabkAuK39yR6mKYpJypkXtLd8E3ZGFPL7McqB46iyFVQqaEj5hGgAD2rYiazqaNRnMWeAoave9PngL",
  "key2": "4v6CFAmrEkbJ9JVDrbod1QBbTZ8ed3iGqUSHSZo29auhsDJVT9VQgGvwLUFMvgg74GjW4VrbkhxmFAVV73MEpyKT",
  "key3": "2rGRQASdSxm7MvYYraqmYR23SJmoMTndeoWv6xoijeE245YLvxKVNZYBUhgr5LXnuWmv5JVq2qnWqkiazD2kQG65",
  "key4": "343nruTVXuQPUFPMauhVvfdCZvwH8h7Zs3tPhTkXLNTjAxwkVuU8ampV8RqWbwe8r12kWJnxDSpsCEZLhue6jfkS",
  "key5": "3YGn5TaKAGJsX1Q7m1QqQRRT9pjQ2LmHSvZFxSSSCRnFj1Z5hvvtifSUURxuVu69LS2xv5Dxu39ruYYvzaoFc5Ro",
  "key6": "3QrzWPXnykDN8wgd9dNyFHY2DqXb3hbbhdrgBgWhaAKePAw6UjVQxTPo8u8vS7Fi3ZDfAzAbrm8pZGHozGPpGWBS",
  "key7": "3PjqpSkjuVexD1taJZ8Pg5tSxkhqMw4jqtBSpiUs2tJYSCWBiUrMxgsShHBxQAUh6AXfDNkiTf2fbneRKpwNDXgT",
  "key8": "jdcMphYCUjF5W8mVtCD5dodkxACMLucuf9hWdnoMoseovkS56fqhFw1SdcDWUHBTvCkFjjvhmCjYghDjGk7Deu6",
  "key9": "5n2jpcjJteo6c3kAXhW7bGiDVxdvx8wgLLcpaZf4h5M2Rv3RrRfzaDfHhKsP6LLPfCGryH1qrgX9cT9eogYVjNXp",
  "key10": "3HdJwEp9jRF2xzwZZ2pAqXrHk9opgeWiR7uJAnp7qZ3oY4VzzBv1fwgcRMWe8JmfGhvG7W4dHiqX32SALYoD9x89",
  "key11": "3jDUL7thWWCjPFVHQkKRqsUhrWYRB56ERMZkyotAzqToeXhMjvEctQTjxzJa3JHGqLf6Ksa6HNQTwaSMRweDJgTo",
  "key12": "3hWWEdxhgVyNDi2pEUAzL8VETippYH8hpBRTmbs45tzudsR3KFHHjALQ6K2Eo23ruR9RmMVS5FbGK75ZNr2Lne5A",
  "key13": "3ubeThWCFx6FZRj6Fyqo7LniBPadma8SmySScArYYjzkHTPdQ1VB1vXyNfEr8cSqmo8P7LZK8zpKmsGPoEgLu2AE",
  "key14": "4CzZ9BqBGmq4rua9nJkBDq1DigrfyqzmzdMVGB3k2jFP5U5YpCKW2MZFzzc4McM7kfAk5MoWD2svsrGXztjAuu37",
  "key15": "2vDVndhcjgDZ4ouEbhGrwbMErVbdqun4mCjp3srcHNtKWaVwkHYxjCPMFzPzRyXxcnoqVLupptW7n8TbDmUJvagg",
  "key16": "4vz3pdKRWZtfmzL6hfWgdnpAHUhZmZrjGu86ai5TkGp1iZYVJrqdRmEeFsikHK9dGTuXgu84KBW4U8VWmqeRXfZe",
  "key17": "ktK4pg71rWuWLTu3bm1Z4p88iQn6VmhzMzUS9hderF5j3QdqoDuSJv96697pvsQo6Zf4tm6Z25oioxbfYc8dyLK",
  "key18": "2UZjHCbHb9n1xh8z1p55y5AxW1rzMxzpVogaP38wWF6mufJLYYW56zYAjevSDDM6Rw7TrMncFHqUww24Li28msVg",
  "key19": "2ugTf6vLPBVbV3JAbL3zpR4YuXCgc9PoZvNBceVK7AKWFDRGC929Ct1nKfTtAJhi9EyPmsrowfx4sPw4CN2YX5bC",
  "key20": "38Lrtepkn57T4HbEwEK9z2BGhgsLc8pBaYwniGQbBtoqVj78DczzULWddon15xjJk4m12TWp2qJMnawD9d6TmLeo",
  "key21": "pcgiA5uwfW7yZJcRmvxJENGwQKxVcNQnzDV61CUeSqqrPGfVtTWvgb7zHW1qrG6QK1ESbfZbnsb9yyaGFbwKQrP",
  "key22": "ALQFwvXh6iTfSrW78o4MncoqCJohuLwNjzbGAkD3qCnNGeMp1BXNhgeydTuuk4w8U92moGdcCMo8w6iEZ23nomX",
  "key23": "TwM1Y8cEL2gKQDh5gZG3pw5TLTKJtdW2WmaDdKi74SDY39T1fPVw6UqojUtTS5kEXHp9Rp1tp4mbwGr77nxjuCt",
  "key24": "2x8VPzzSkUueSnNavHvXsexfDkf8mL9Dkag2UtHaugYKTTjYuVY9URbg12wE5tM8mp5nrt2RLpTAqqS26BLLbU1E",
  "key25": "8e4RNWC2uRuTLkbevjh8sGnLhqwfoBAC8FQvTiMLzQg9FvTCbQFgvagL1LycGwyjczMJ8poJwTLcH6MzNa8SxhE",
  "key26": "5VjKoJ9faeNNvxjFyu758bv5RnF6Qc3s4sLKxSTrRsesAUgNAzaU13yfRMCdr9zPq2gLP8mhu5Croh1CV8GpSyVX",
  "key27": "64pSwjD1oDtoBPcG8U7XZf5qW5C78vG8XCXHSjN7nRgvdgFADf4mHrjAtgXDW7w9LeVJ6VNKo145eEHYmYm7w1BP",
  "key28": "4vFaoWQwAMdkCt2U48SDg58jLKBC7T8QeHZWYHK8Df6fMo8jeRCrUGsruMugThLPoxsHMhXK86ozxnQBrJfvZtde",
  "key29": "2dLJdbHnCfi13H2u5uxS62QvQoU3xKG1T9WmqSr3ZXEsjF4bAnxtUPUvFkVGNEYatx2FGM2gXwWVBM4ZNEoD3C7y",
  "key30": "V8Qv8xgEGGiVKxLfZ85q6HLmPpwHzFWnXHWgdthsgXvKReyQqJuPsLT3LzEjW3o1m14aiDsPGs4uVs7aXd9e1rN",
  "key31": "2HkE8TTz3c11Pn974BP2Nfxobmik55Pg2iejHVcQuQNDLZfiftAebKS5zZjNZRE32CqNRVfMxag2E5CbyHSK77by",
  "key32": "2Ykr33pQJ7hS28a199k4TwrbFXdAQ47sdKMMfSs5bav8g28Br9HYDwoN3ZgSWDv1pjf6MfdaeRFY1nXubbJqdrdH"
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
