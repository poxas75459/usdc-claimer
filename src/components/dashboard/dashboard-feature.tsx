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
    "31m7QsTTfaqPgGsPp7oknLC4SjLZHeD7ZtugcspXVQEb1ydbW5FVRVhzTtmAVkTtLTs9rzsRUQt9HfnaRBgTZvkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBGiQGXzuCFw2UrvJcMCg5wx7XibJyD6K7NBbsuXjnBXhXee1sypZ59Y1hq7Udf52sTQ25AQ3xg7qFGNXDT9m38",
  "key1": "5n9m7TV2HYHBUpBCs8gE1gjGEip4watrref28NdvktnyiGsrXHTWvx4fwzooHtekP3r1FzmC32Qu7ecFrftBNKCn",
  "key2": "29AUXbJWAFv9WMkD6DHxikgTZPJaTR581du8z6aF9BnB9tmWULC5Yu3ZF7Rsy1ahM8i6EAFAj1hLq1HHUv9oS3nc",
  "key3": "2oosyNnAy3Zr5qbvuVZcEvp2EQJKy36PscpaCwP8YZjgEfDGKbgmNzYQzFaoyTFtAgokCpoCocWYqqQLZxXa68zF",
  "key4": "5krfQZDRVBihkLHTJ9d3RMQCHWuWijTxWTnuwcTbk8TbQQUgECtwEW4YJwMKHoL1HDsePfydwNrDrjyr4mGMpiyJ",
  "key5": "572XyprDGxAHKnNrSQGbQesniHiPmKnDmXnCWwxxV5e9ut4BBZKZ2K8r3SjYZYAvLdHj4KLntt35NBAr12BN1FYt",
  "key6": "5aTRwjMB3DGpAM5XSzuoTw5RnEanWMJoGnKhG5Jue942CoZ9589vQ6hjkQy9kdduBmEBzZznzHwyebpmSuwd4D3R",
  "key7": "44iQZuzYHeZfPJGqnpsefdbEUmWTbwQYKexUhdjqGYqME5iKVbXnXenpToQx5tw34AzqLGvsiwpjM3CYci18tWd9",
  "key8": "Sd8SNnFruK1kZdNktYjtVUMz9thGSgSabqx8veKyBLWVyZ1c1ydgojAfnmic1YcqpQFCv3SEEvjc7ZKUzHtF6HJ",
  "key9": "3uE3Ko7VtLLtr6sH8rmyugH4eGQePuY4NikHeMDzY2VPfy5DUcxeVVfRtSj4gVStfQvR1v5zXzvc4vwMyHe3WJEA",
  "key10": "2SzUo5QvNq5c2v75yLmEySqGyRwjsE4FUyRLnc5AKhL7TxZkvvSdtxqDyUtVJZEjRfcLVjW6rCN4VJk5Bni4vf3k",
  "key11": "5SeviTiYnaD21vkM9fJ7adqXJ4zm5QoUHNgW6WEwHXH6FXY1PzoMaNrSpL8PR8DDo3VB5mqqWwU28Ndf9j4NM1Sq",
  "key12": "EnXy1ecXHympxBE8AZ49UvCmvNk3vJUpKJqxtbQA5NdNApiH4oEmF4PVLfAWomaAw2JvcCpZ8T7dJJBjUumnuSQ",
  "key13": "63WWafQF1F3tNTkgR9cmZEh3EKcCVNRd7WzM7f48TsGdpdBkgqCNTc69BeNxGwXbsgpRbVtFNrb5q7cFXz43pJtL",
  "key14": "3qoAVYmxCh1rVgT4yEi4MQK8t3YMFJU7GVVinnk8ufhZpbPWGgaSDsKbv3i6ukJG2ggta3vaTL3xzM5aTQAwmxxU",
  "key15": "3xYRv2PEiostbmTL9geBQK5UeaNHWA1hV8iF2WTksBVsQv8VYHqG2js7dNtn75nz8qBxsfZi5U5s6xSvjGvVq7xg",
  "key16": "3C3pxEu7C75cq4NMqi5PJb3rbsa7TbDAUsGLYbNyaYchLBgg4y6ZPKrkf9JBSozvu2Rn29AYNXrLZSKaqzowYXuY",
  "key17": "5P5b1C9pEH8gpYwV1CZ2LCxgXZ9XX2z7j3ebWizpMj9qVW4dZ73JmRqv4V8jcbzK4PM4xJLm2TFUyDag8npuHJXA",
  "key18": "4GHDsecXioFsxAqAH4b6p3Whr2wk2g3Q1J7Nfb7kSiN4wC4qooaxkYCy8DoHYM2aa5tMzXFVatQjijHL6Tz1mojP",
  "key19": "5qrgmvGdZsSELig9wjA65LJc1DjC3Ce36U3RDb2A3VUKrNEqA7w2nvqtvmiShgA9hsj2rdH9iXAjS7zmvFTZkTvz",
  "key20": "3WNFJgiUFtQHWjgRmcVnjaXT6QptGJw8sexzA7vQ4cNEkqsmbG83HSe8PhGwGVDdKkHyFERAqxxbvzs6rtJbdMsJ",
  "key21": "2Dhox24WmgH1dZGN76AZd3mJDZjPnegK3AtE7Gf93zHggpsYBK7Zfyj39Nr1v16XtCfq1vRAnbh6ERJWDgZgWw7s",
  "key22": "2JCKPNF9CHS58AApahU6DGVgU76HUg3GDBZE7HKadobtdFKhPXtWYTTGaZFaZwmk5WwKtBA5EBUijduyfVTn625v",
  "key23": "2NnZTdXaZPfQog5yebyqo2mWPDDg3yKUUZyTkjttRcbXUPdaNWH2n3ua3o5D1oQb1BjHGh9GkBYLnfZFacDi6W3K",
  "key24": "5XadjU9hhaHnjyzURF8xw7PJfc2A41tKBpLSgzibD6AT9umMvT2UYEaDgrFaoM7yd8dDe1XLzQBiU5wZ4CDYWTUV",
  "key25": "22WhFbekjHSQHNVQoqww9eryS42DwZeHc4Cc35aXme1oiFV96whbsuSGjJdYgqZ1vPfQ7TWLVCtLTVjJgkLtti5E",
  "key26": "3w3TByy51cPqPJYtnK7eRa2pAnofDJbt9dYTBTEY8zzMvaWcgrjwpQGNmSCnns48j5HGzHmp9GygjZ4hEs31Qx5p",
  "key27": "2ypXDiZ4c1cc7jKhP3aaC1B7KoW762XsKp6KyShnESCgDtjs84PdL3BR9H4QVGKoZ4JBtzAk4fsGVpmbJNEWHSv3",
  "key28": "3zkstrdmuxa99DgnJjxgxPGFX2xM4gpFhjcLaQHvNFMeJ6WtCTV8iVbp5xyB1swgijQfaqRmSgqVLzq5e8FgW5xM"
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
