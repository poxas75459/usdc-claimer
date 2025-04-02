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
    "24GCKujQTHzLCcfTt3hQHHcuguC512k9hZcBdJBL3Hbxampc3d81sjCHfJuELswcPDukGRnfLPMerMKfihRMAr91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gZHaEt1992oXMSYoFD2SpTxJB5aTsPoh2NVxfwg4qm2QSxCQPBRc2UktE4NAQpBFcBJyPu8vcf6URqK4TxXz4j",
  "key1": "3RBSPXTd6ZgLUssqyJerGkFjJ8aAGF8DmHtngk4PUBUYiEPQKahLAKVCS8s37Nh5cMiKKeV9aEi7vvhMYfDRCg12",
  "key2": "2XHgngj9LNFwg7WhMLxuUXTg8XdP2JYaA3u3Reh5jkFQBBTihddiQpJ8oyiBSBFSoFmxWWWBV43B45TzTvJnarMw",
  "key3": "akNE9AFRNE8egDo9CmxxjvaWtYFvktianSHeLppg82Vyx5Q8XET25KqdfHdmznbgu9WssnnV4rRo43iinspfVuY",
  "key4": "2NzLTKRw8TtMX3VsTxzRF43e6RFx1Dev83ccSygcy6jRuDRhLFNQ1JhGdmkoAQ13CyPTxMhbnw4ZDVHuuS8kFBZA",
  "key5": "5pHPM4gmp1qJcqjvDJ6eDJP1KX7pJpEUMorQyPnQtAAgkyVGrYCtdxttvJdUm5hUV8TgwB8N1Nih2hjUd35udtFg",
  "key6": "Xvxzm6b6hGGmN4y4upS8q6GL61GX1nGaYzh9e5bxs8vpcYe6JX8j9YcstQeU1YQgDaeJrNuD6D9j5R5ccq6sNkN",
  "key7": "2QreEKKoYVSy8KjkVym373nxPNdb7AB1Y9Q5FCW4sh4NLnvPoBXdQkAyScC9dnWEW585jidxbTu9NKnA8mVDwPwB",
  "key8": "4L8HdiHidW8wmPc3wnDjXVJ5daxeRwrkvwQ912uqrv6eS61WhGXnAMDYYgoUPJZLVws8YtJy5hH9JxFuKEiejUGB",
  "key9": "4SnRPfuFFAUehWHMQHy4ei8ZYFzhKw4zyfJo8EqA777kyydReQVz7vw8brK2WYgtfasb5qW5FrJACxgpw7JkE9wo",
  "key10": "4P7AwreQMpqiHcztQpTMiZebARGoGwEaNwvTk5gPidgGCmKXZHQpuVaCGzywqJCXAqRp1LgbMQRAgdiGXpvd6Xrt",
  "key11": "5i1pq5gC3hivMUyWy4aafKxtMZVhZqyBvwFxQKXD3VrBZymSeLj6vXhcdb3zonKNEagjL8RSbgBFho4pLtjriTtg",
  "key12": "XtMrXfPLnHFZGPCepHWPAHbBj4ZrpcNzFFsbtiVea2SkKNTDoxjUZ8h9NtrL6XhTdqR1EykHT74AdzjLtgWePf2",
  "key13": "1vf2Btd6gxMLcuaARDdFpZNbiSbQjn6Pqp1XLWCyDxWmJpdFn3NybjDeXHufRNVRM7NKi2u9op311Do8Tj6CvRv",
  "key14": "3zfLEa8Vf1khUJAgtUmSdXbHNddP53d2pkTfmnwq1KuYcjK9Pf6hkCcDB3gPQYsfA2DjFxtxqjLCPhhBSaCFLYob",
  "key15": "5ndVa41xFKykMHJLiFTf5JjLf87W5ELmvUUMUPnaDz3kZuBtLVjJUQdvQiNjzk9jXQAWEt7PK5B3vVwhRFqZH7uu",
  "key16": "3UVSu3GMwX1o3qUdHoecWRuVQFjED4mirGaeLGSMStW1EPEGnaPRcm7vADPi1apDEZWsetcWZK8Kjg8ZCtdQA5bo",
  "key17": "ieuBpcKjHm6zkrivoB8eYezCegQit7MQdZMEKUioHiS75tK27dbJh4Pb8FTwPijjch7h2Ln5GbiRC1ppeVay1Fw",
  "key18": "AqZCEcDGbtLnALHnZj4v7NYYYJckqRd2f1SYX1jHMcJtNHV3WXmUZJoLYYUx7BbNpvBkezguBquXnVgQ46y8jvM",
  "key19": "3XAgE9oHXcDXoYD6nffgLTVZrkBQnPzrpdPFGkdkvysw4ihPK7LARqJAji4oPs4ob4DCBmtPKT1kMSgX2Nt7MdZd",
  "key20": "2qadpTYPnAR3QukZJsgDUGA5QX9VxrBpqfPChvu4a1AKCYGSPDSpwJjyH4fv8k61Sh4vSJC81eDiP8Y9FZg8UfHk",
  "key21": "4rgm4i5597o6xzjbdxXVMpQYDgn5Nws7vUNsAbQm4Jq2aE1YSrV6EQboBaons4CPJ4DL7LEQE6Tkf8sZmvahA7Ce",
  "key22": "2gK45BjGUEqyMNpuCRB6xRe3igAMztGaZX7N2QK7okBy23uU8ATWHgTLFednN96wNNyai6SXejRmkEWxrsFGh5zU",
  "key23": "jhHyVKEC3KreyJfXx4sDa8xYFXty5zzPhmLWYy38jE8yvLd44L8yfS3tVqe8eLNPdQzk8JSXL4mYDcn28ZsoNSR",
  "key24": "4aML4KojwvNFLs7xGyzyKM6YHwMPyUwd1Qv7znMXLQkXm33oyTcpgUfURXyeDJy16usxDZSFWR5uMGWjS6jCjAVA",
  "key25": "2xeNJoLu6W8MXm4V4rZuMH3BibuuY8ksdCwkPC68ANQxTXLhnqMb4a5bk2hphfuwk7fd5ouPAwDeWCx5ZPxMnQr5",
  "key26": "29LAFU1dfNiQYMMNUrKCxXjjjTWs5uMQa3bgYiref4wjmgfuiu2rDN4SmQ5PmLm9PmUG4mvSFhWbGCrNuJeLtoXK",
  "key27": "5cx3ZHjkYEc6jwUAYz9fAtFuCSm3XcXDjVJP6aR9rGaZgHyVfLVjDxdfTaonkD1oCw2S87drWvtNvYV2DPnxnbU8",
  "key28": "3MBU6z16vKDbBkJ55DXFQij4g8XZG8cufUnehDbN1rmoqvjx26FfvKn6jYGMxHTvUF7x8FYJWpiCodphLryoXGXb",
  "key29": "46W6FfpFwv5u6A36gehyB1YzGifCSmT5DnXPHPgNqpuujkKip5xGE5qcxMqUGhaXTuXJXqb38jKFVXt6r8AVmgRC"
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
