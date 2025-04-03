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
    "5rTpBzYMdxwfnZqyj9PkAvgiFChmGaxjEnvoQ4sVLUkqhs1xjWSsP8JmYpAg84vNnVmEQ8Kk9VYEgLA8XAszTvWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUAaWb7Zi5rcNgF93UGi86Qv1o9Mo9WVx2m1viC2nVn8ZGny2V9KdUZLwNpfGTFwpdgAzDxu4mkEwfSz5dhvGSz",
  "key1": "5eXwhppnjXPWNxTTABtdkUgCa4KNx9VzP9RoUNYg6Uq6Man84XFKdohKdn95DuyDjRF3kzMCdSjExa7odDvQiDS9",
  "key2": "4DY8JcPf88deL9ZGZ6PQD6bkhjoB1fRPpSkmJmbdABm13UN2Xt6Cg8snURL73WhsnNsZxUxQLoGLabadiXuDk7si",
  "key3": "64GR2eBGBa9NTpNR347Qdi4iw2s223D97XHAenph1KDvgYpMgsDYNdKRNcdHjJfynD8rQEzVMNdHYC3AokA8GsoA",
  "key4": "5SyqDsetTAaLHshpJheUv7ZbiwoCunJS8RD3oQg5gWfuTbfgHsRkYJ7hq2Sfmfp9DvGKTUwiEj2jLnyXGbPNEKjc",
  "key5": "2sx2Y4k9CHcUTaa77roVFL2zsvg1eNLzRaxMcBKEQd2a51MDYivXdsy8twscD8j54Tfsq2TxxutwPKfxnJi2uV8T",
  "key6": "5qUe4uBzJb5S2MNh7rsFmc4SR8nTwRFxhLLLa4NwCDVFpXASnrScgoPpK2nZAs9U9nrSnfjqYw6XK6cPHSFKQi4Y",
  "key7": "3iVBoz7Uqdxn8iDHWtkqDVzQTd9pTcbYZcYBDubLxgn4XsVyMTwvd3JqVPTdRNbKdH8BS1urin4YhqgfaBxgbaTX",
  "key8": "4iEbbTxyausMaMTJf8fpiwYWwn7kENJ4WiVSbKS5wSXYXq8izqguCH7UAZ5w8afjPytNEvXCjCmoCc1koDLhcz6E",
  "key9": "4zStkUpNN6L8TSBCmRDrsS8dHR6pejwXaWP5LnM3utkhDjT3xQqCeK1YyKp149uwNkKqijPJjW25WVMAAYpTfW6H",
  "key10": "3Q5nZVyg11CSjdx7kouorYUrNuFVKv1AVNkiydjATx7q7otiDkKtgyRPVzFQz8DL98gWJ3TUdAvpXu7b5Ur5LYP",
  "key11": "4m6zAhJe2dcDRNB9GtAmTzmTSdbjYDGVG4e8ZeRpzNKzyoSK3252rS3WDhTXc3KcDPdm3goxfkd2bNSjiEk9SQeS",
  "key12": "2anR3ZPW3J7xgwzxBce4Squs8S4M4UnHjKDfU6YRoRbVsbYHvU4YsLSPN9XdyRctoXgQKqbk8kzzRBbKnEKbMWQ6",
  "key13": "3mxq2x3KjVgj6uGBgo14hBDxRESFGmHg7gKbJbm5PRGuq89B8WHf9jFMt6mREbXNBwpTC9Xe1kz2kKef39N14oj2",
  "key14": "5HaR7iT5EE7kwYxEuQMHjYS7AyksrcHKfGQ6YuvBArpUbhHAcDD9W7ariYhArJX3m8KCumxLQM4k9FoigztrB6C",
  "key15": "4MRYJd8EkDjtZXJrQhRTVoLTyKpFqMK2RQD5H6vacgY8jdqu9vyAV8XxKZGLactpu8igrCmAkgMxChhe6NLMpwZR",
  "key16": "2be9PbuREUYhEfJ47SBzFy9rNXTobCVBEqSPv15WEMw99zGYafn3C9QUNVjd2q4fm7NFCoLbcYcuD9mTaruiC4cA",
  "key17": "5qA9YxLnFQcidv8E2NVx3JvSKVVKpEqtxD11wux3DLxned2bWnnngaCL4iRTZydX8xjqGw8ohLXozndnj4jVRiqd",
  "key18": "4h1HjjPdeTHHf2FFdnMaqa79Nuamru5DqHc5wzrKP6aaKvRWSwBGykUkDXip9A3PvfAeDtnWn575eHJVMJzmji86",
  "key19": "4zmx8FbAL1AhfL8f9fDoBQEgjS5FSUwnhpfwB3aYdyZg6cS53U3P8xAZsPRb6CLgN4fZD8LGRDCNWntHQvrP4Mh1",
  "key20": "2NEySNUiSbyrRV453BwcnDBG6NP2i1MGqfp1oTMG6BRGuP2noStk6wCZnHGGi2CXdpb9qpPEaGe4WhKTZuG82Zf",
  "key21": "c2XLQmn2XY1TfLaM2jSo7Nsp4ytgNTJWbaGgkyn48h6yj7xvFNHcghDtCG4mKaxhmpxEuQqoNx4hRypqTDVEzQe",
  "key22": "58QvrfhrKN7ndYpsuU3PpoYtS8FiLWsehyfXqMbUZspPAx1wMdvx3rcufchMj4oJTPsKhbTD9y3yxbzd4KBvdnDZ",
  "key23": "4VY2JLM8VS3Zpkp8Unj8AbXW2dzqsuzPpRLCFRCpZ9k1w4GaqF29NxRtvwpJc9TBAJFFPgkhDR6JPLRaX4mgqv9D",
  "key24": "4iGni1uCTBnuKkRnHAmHjinFhn5Ze4bGLYFqevTWiq3GbBxcBGngiTpMmtUVVvGLWsPadcKDbJZSdnTz4EoRw9ea",
  "key25": "4wZ2v1fDYb2Yqoii1DHkxjsJTrtFpwRpAsvzCgLxDMWS8BiXwnLDUJHw6cUVWTB1PXTozUsPRXcHs9vT7QQkEGNK",
  "key26": "2g1dnZKfNfRwdodqRgecpKu9ivQeaKiFLpEB1aJpZGMTvqCGDUFUvHzNCsn42JeYx9W6NmmkXjAHSr6whT7R5pdL",
  "key27": "5iNEr1rykaSHjgTRooGW54wyvqjn8CWsrWfjV7wczcM9EfeT47nnAR6gKfmxLRcCXYckiy759EoviC3LqZaPNscu",
  "key28": "97ZjKV9URe1UeGnN6oULeZK3L4MkQHbmTANEKdNKC3VcEatnFAnYJGyNtWqahVWFG15aS5S9QEKwPReUAd1icjf",
  "key29": "2VY661RgMYmxonziu1iFJ1BXJCwj2PGouQBTwqqAXTuWtgbi8i7BBXpcgRFefnQ1N7nxsnCsfZhFpUEian27cRvc",
  "key30": "5Lit4ZEfDYHggrKyuPgvvu3q2spptgXyL35XzdncHBBhLDCw3ckqtgmhN6ZmwcmhKdejjJ5Q85EWdfQ8tNaxF2Qd",
  "key31": "2Y5uGDwzBXHpWLJsLDSsP8it79T1zwi9M3qrMqowSi7v5HrxLqACvNxxzGZ4DiTfBrXeNWmKRcmC6U4QsyYTxRKh",
  "key32": "5h8TJdfbPizudzBR5hYh19p8F1thCsTi6h9551f3YhVPoown1DU2B1XCyhhHJHqiS23i86hQYxee385jQEMzpnXP",
  "key33": "55pqyNHvnkEcKhdr6Nq18nVyDv5sbqA4XDY3v1SgvNwdTjex3XAB9viWhmC46ixqZoB4sy5eEncShEqaCWFxPoQo",
  "key34": "4X6je3c2n9H1DrkqZ4uEjJFobSM7QRXZeoe3jogCuP9tYkzUhC7dwgpGcrzjqKnmJPxnTvaMeyge6Dtq1Mv6A6yU",
  "key35": "5kqwRc6zfJe66sftBhnFD4vURX9zFNgUimCGgKH5JAfJNpg9Qq3g7366JxWTfTBGSQjbygQdW5wNARGHC9mSWUtQ",
  "key36": "5tnURyfar1YaPgrj6dcGoXsChWbJUN58iyvNwP6T7KpdGxsUSYLbTc3pBib9NiLZebmqBW3VTeCcEU8DsyKDTDUU",
  "key37": "4dV1TfqhA2XP6HNVK54jr161PPjFP77GpDtJ3AAAUDMJHchHzKYj2w3KSWGo2FnEK985mXZkrvg4MWAtxdJW1ctj",
  "key38": "2zeLq2tgzzF5hBLHPFL9gZYL17yML1Nt6ozWjEGbKjS9CJXNtrFc6gou5khP6t4Ho4gAsHw324npytXJa6y5c6Tj",
  "key39": "2mJk9a5YwGRnRmkkYrxA6odvVTSxKC4K5RedoY6Bu84uf2Xii7hUhxC1cZ3ig31XE8RiXh3GSAS7EfuxG8JvqwT9",
  "key40": "5j9o5WXFxLqAgiis4Xk9i8HKiULyb3ynDJAkCB6Y1b83ongZfW9nLMi9GgBrUGSsNsTptmjMtYah1aYsdeFR23Hw",
  "key41": "uYCcgwYrfNCEpT1mb2fWnok9NrmhYTCjTaqGNVkc4EHo8XQdJP5xcveGjQvS6bejVB4nY1kdciEy45vLLchQVgm",
  "key42": "3ba1PgjWH2ALDo629taQNns634yP8pxpYwzEYFy5H8E45HftCJ56RAxnLbdWNbHQ6xwuHguwuDdeM5w9jnEhZFig",
  "key43": "2JPcN78XKvYVZvQABPVuSJeHX92FUocdZGAQ9gEx1zpJbVjtKbT61HTrwJv8j7fYAKxT496jvqgAUWhCB3xQnbB6",
  "key44": "3MjWrqh8pCV9Y4ZqkJo3FcyeMQ38nthuaquVAbk5mDxe5BwMM8859cTxPbLj7A6oev6ogdE9LwuhNJ7cAcwEb1KT",
  "key45": "4hqJVARhumnRbdu93GEpEK6ZxpnxwgG6anpuzFsbi7FAs5gfyEfRet5G4yTjvK3bAstCQbZywWgBR7ngNmDR4kR6",
  "key46": "62A7bTt4BztWTuH3S3FoedZccPPSQSyHXqoQXGW3YmVrJVoiDGFuLab5fFqazsDc18AJcrLqw8AAjtNdmmMEmFbS",
  "key47": "5vVhh8j3ndVY6ZEdrFJ6ysEbPHj1wmSxaRwehJYfmmAFjG6bLy8puMpuwuB5S7wPr5xwvWiHGtBCBJ4SkqybcFY7"
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
