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
    "4Gk7nHu8T61EG75pwUbevzvUabr7cXAEtyE4RRqUp7jhp1w4ciTih4pLR25qZczELfNPKdQJi4nWbnAUXSDWTqqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aprH5z7s4PQndfwtP4SdTuHcbKQhBTajy8zyEyYFFaRXfG5Ryovk2BibicVzysSS4kL9qKWF159vLuRX6aFTuFx",
  "key1": "25pH8dRvGo6mkaZgU54QnT4hvQnk6nKBeUHHnJtLE96aHRzmdhNU3C9CzcuWcxGeGJ9i6DLxtZ4Wfrqu4QJjxPVj",
  "key2": "okMPAT39H1NRmmRRg2mWs5vCiTfGnCzeUFkqoT5xBtkdNUzojtvq763KrPEFhunk9jqK4VMwLdW4PVWZyH5Z4KA",
  "key3": "5aCYXK9P33ZxRpwhgFtuPtqNaa9LAtQt5aZ7kMAHyBqhJydBVYEuAUEHnX62Jut8uvXXuQ4TtERfRiu7rZ79V6eu",
  "key4": "4wwT68pvzhT4CUhYeTyMu8R3yBQt5SzeUFx98u3TgkCyqZdcPX6oUwVE4iAsaNfwofgCLrQ66fpRMfB9jvRoEirc",
  "key5": "2a9NxWyKTZTG6TmYoWUpdFtsWrAXfkfCH7UErJbunQSqbHdH7ujHoDP1C2Bf6zPzpqtB8njkEZ6ihWiLXKrPLpmA",
  "key6": "5opgZQAPm93i7JRziCHGymdhhLnzY71htSPVGPvcmzgVW9kwm9ZpDrNRNiGpYwK3v4CXomBX8iVhDAwjx9pkuZUU",
  "key7": "5NZWN4Q3juAoVhZdATZRwYDZP6EN3ZwStxiacQyk6hx8gFM9nJTbTiEYPHSfPUy5vHfmiJHn3WqjCPu8NXaAAsAp",
  "key8": "4QmFH4Qkx4UWnbP6S5fGKwKrymh5JJeCKTxg4ATYn7BCiRDyuXpWMYzzfyoHr5KMceKZTnbsQaK1jiWCNpjg49be",
  "key9": "5CYKmhZkMM2cJL4AMUM3BYKjXEnmTtmZGFDHQb4dyNgXBKPdU7PQsTASqVpmnuMMpaYkw7RMKD8Q4gSKXVvr5dAd",
  "key10": "66NXoG59s5uohbZKi8u9ZGAJhALH5DwMmcjduExFwz2VdRq2fk64DNdJgy8jdbb5PtvMngWdAse8wwSdXWUUmMv7",
  "key11": "3ZQVJTxLHJRmcF9dLqqn4qqzRkDhefUwpAEB845LZJG4BSNNdejMrWVMPLd6mwBuEJeSKqXkpFzFCUEUNXVnWZB4",
  "key12": "pc6EJ1he6ZURMcw1jsGMdEQRJCm6zBA1scdWsiLWcSsZDeLDmDXkxyn4i1X9YcBMpUWz1ix1TRmejoVGqD7F3BR",
  "key13": "2yk6ZNEVBC1WmHb4fb2SBnCztXJdQPH5onS3wxUANLNXWFtwjdPKmHEaHjv6tspfpdZRJmQZUYiUfpnW8bG8qsxZ",
  "key14": "5GUqUojg52qvL5mr4ktKSArCDNz38ZjkgSC3SEvSpWiDYdaVxodT4sCA85jA2AkyXA7WJqzpavCG4F4nSjBDUnAc",
  "key15": "eBSg3xuqPSHNocLoV4D4L2X6qyzgCG2TZNqsT9iwDUMqPAhL3NpFMUHALgXoidSuxMKpJN4NE6mRP6hNWQ21s3g",
  "key16": "3uMq2z8sZWpA4L3rRaPU91USmSsbuufxCDEwW6PY2b36cTMk1DG3s4fJY9A9wqM3EV75YNT1i9DVYCvSa5QSrDC1",
  "key17": "24m2JueBd3vYEno6H5MRmXhEFykzNt4k41S1FDpV465P89PFcdQjvitzAwbZ89aiYtQuBbv4GwMDQRWQnHFdyk7B",
  "key18": "bYtFaBcP9PBAAZPKknnPF5CqijoPUHcAaG8QTpbiAeTHNaUp7bujTJ1RkrWsAtyRGXS8FZdrzoPzppafJFxbJM1",
  "key19": "3JyXLRamSKiWgF2tnHQ1hSUsFQb6PPYHCn6am9kpB2rfQm7BhN95QpmpoaSzkVgmzkazhjHvn5cTFzsSxcbHNWdN",
  "key20": "4Fkq42MTtipq7RJ5NonaYFFGHRr9DLBewgAmGJCzjEpoqVgpHtfxwBgCDJAhqXinSytJVvjknf6KgASu4bLzFbBd",
  "key21": "357sowXrxe6eLzGBoFvYgCcA28WuhUSvehP4JerLud4zW1dUnKGgtrJoBJ2DPNax2KtB3TXqqWfqusrmbgtoUrCH",
  "key22": "2RHNsrDD2fNNYvtHpZ74s9ZWm1hXWAr5ZFUymuV58qMtsaSVRpD5h9icy2QmvHo5BCsmh3mWM3wdBqEzgLv6VU3h",
  "key23": "44UScd21LKKiPMMfLAicn8x269S5ajzd6YX8augzpCqqhffEqLHYB1LJcLeHMPnVMtPuA8gb4sAXURQoEfRLgp91",
  "key24": "2rBxDLNARkSbwU5H63tJU6B9ZYbUBHEjM1UwpDtUouUKtcKexPTNtqEMtWSV4iCEVDPJzMbeg3DWh4uuCtUf4DUc",
  "key25": "36d5CX5LUphKQa2wRcUUCoZdwWj42BBmNQB1XY4k6PPxKuUXp44dc6d2zFLXbEt6M6r7ASRN3ete7PLGmH2KcrPx",
  "key26": "5QXuHD8y9qoSZMg4XkChNWtWydXzNQ9PeqqUo8Qx9r6vTFxMN77d73gn45n7bFMeRwFWc7XWsY3NFVKyDQthWitN",
  "key27": "3vF1iY3CpBTyzPB42ZfEo7YPXQnVg4kyUo9DTfAG4S8kfC5eJGq5iTLEk87iRvd8Ma57uwKqm8XVbkSVqG55RMNQ",
  "key28": "5EDqjZ6KtWP3YZwX5ek9AdJ6u3XwUf9FLRNydzgSqxPPc4UmmhwkWqtM3aPUrktoGBQBXXTN1gZyAXCaDmCNas6H",
  "key29": "4fduxrbudueMjhHaaL78zfdKfFZ84NiZNKYYbs8vodTUXGBhHX7U8C9S4XgjbsBhEjdx3ABasPU7gxeryHvt5kzk",
  "key30": "ivbkRDME2YVCVbdRtk7V32LKYY1iCy6RrA1coknupu9v3NJuvZ9CeL3bx7QzrmV5ZZy8U787MPhPDqjJX9hKgv2",
  "key31": "3YMBcCXgALeKQvQoQJrCeJb2x6oz3LKJpi46AZCK1KhNUuxQAgAr5tjgqzb45VRq9D67Ln2Kg3YAkDESpCxWCsjx",
  "key32": "4PcwiWBxRHFvGzVgjW9W81DuvvLw4ZsNTz1i2fA7cMwDWRHomG3Yaz5wy6Xi1qu8E9cv4KmtLSUyyxY7b2RoLeWa",
  "key33": "2jA3713bzNNJ51L84QytFawsjRCYqHhYNtU6MffKmpJjBMHCTvCgL6mymnTvBsxKJoUCwYFuYCgf82Hf4cwBHcws",
  "key34": "4KdTS8K8sPJvDeJmJywkgcLq5xoMvsGjKJ7yNg3hbrEMN5y1PPsfa72HyqouCtiKfyP9LaH3SU8LXDwKNALyb4qd",
  "key35": "4vLBGJ7sTi7bxp8ABjiPJLMAKiK51PtGhtu3JkQsjKZWDipfHGnXBeUMJC8GfhaJs1VzApTW9xvry6AHgcF5GANe",
  "key36": "2gWJgFneKjFqy9WUYWoLR25sGDpGE99Tqtda1WjhFNyZd24BdzdJcCVKBr2dyjMCmHYc2sgb2qEEapvuqromdnF3",
  "key37": "ZHMrMKB4CCgQBXYfcUrYZT1FWtoFMoT94KG7D4GSmg9TMRPJFu4Cj1u9dAMp1rsoQ4nhM9VDyuCfSPYUwnYDFbJ",
  "key38": "37GtYyjrqpNkFM71mBtcwuJTxxoGQAoaALY7cijLUCSPF15jNxRTwG9tf3FCYBJWGFubEngTLePw79wHYik9Q42A",
  "key39": "2TMBMXwwsx25PF6p6NEAMHVCFg21WYdcT4YVDakhJcW74GLn69W44ZQHXfoUvgNagxYo8wXXupR9XyUwceG1Uyzt",
  "key40": "4bn3LXuDzx55UsNxgwCBhFmk31wRisAz2RkcSCx9Nx7bDCKTfy42nrVWBbGPXY4XNWtsfQEQQmqjDdTzK7X3YYf7",
  "key41": "4mHqtBKJNgzXTNhtH9UPjKh74MJ9A9NPWaU8HWNLJ6GDDvX8WLMQcTiaHvqd1bFcpSmyNyn24BUQDMTdab3mJbDA",
  "key42": "433MGszcLs6a5wEFsc3Q4h6iQxr232QSHzzVvYqq6HxkUSpeRSCCtWStDjrZxC3w92dfqqjnvUHiE4H9Af4KBz45"
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
