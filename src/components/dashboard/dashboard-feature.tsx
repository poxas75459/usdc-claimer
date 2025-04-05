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
    "Rzj3JigqedKbv4AAQVeDN2VzMPsf32oG1k6Npenhn4cjFxf8hH7eQNTwFg74HzLr6rDtt8a3SDhjMAeaGzVh2ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CaMyTXFiit7u5ErANwMJPJadH7UPGF1A4sUzkTmEqAmENAba63gbLpC5tV57YpTkD2ZKKGf7JqPiH5RghCNU5Yk",
  "key1": "2N7ByGwMupB5GVWJcKwJTedX7SRWKGoFz3q1Y6Vm6v2vccXUaVSM1asZFWR9GLrcYGpVWoZgZRxowvpNhGzu9T8n",
  "key2": "m2hXt8M9kXBZSSGMqHC9ydgkG8rGvYnjSn6FuU89fibmYhiciQtqLHrrXY11FTbwW8Ztxn2pNNSh1WDtR681WZX",
  "key3": "3k5ggr4qeP83oteCboetNh4igEpWXwNSacf3hWirVU7czuMAtzwdX8Pn4rppQWHW7ByfgzAkM8ekQQVkebPsQaW3",
  "key4": "5vq9RSzJ7e9vLoRUFGjw6op8t4QrwZbGUD1WGuaztv916yF2NLc61Ew9gPxabYEbw5x1QtaNnVeimBVzfPSswgr4",
  "key5": "46s2onPaBPiSJHkjwhF46R4sntVKzb6qJsuhZjhNx6Auh8Vddk1Bv4HFMUzyAivHdRUWSabnovC4Hk4bf8Lk8WQE",
  "key6": "25kctGyQCbeMkurZFLemqmzkWe7mZ82Ht6hZwe5DLFJh1XvXrDsh927Gs7krkdMrHPGbEbMhjkfdmpTdVvNdpQgQ",
  "key7": "2Rw8HCNgDitS8RRU3329tG66VKTJczUahT9DnF8hoS2rNE2NuBFmYc9cbE7JEuPYY56ixdC3FRiQ5i9t8aCV2sDo",
  "key8": "5H5U5xNtQDGoJrfdCcgkhcyNgQhwUbj7z2iCkawciMnjhKM1W3B8TBvwE14rkKuycMvi4jeVZL93XQdtNi4aWR8N",
  "key9": "2tvD15TJaUgkjq6XSPx52fcVZJAPG3aiurJLHg8g7Rydy2LvVBL2sktceaVeCsd1n9BvtcnvW4bqXvzbinywZ8a5",
  "key10": "4MpVYgq9yWc4govEyk2NnVM9iLHAQ4YcWZMkvGhmaaNuCS5x5zHxLR8f7oZiirNhuDMnBYAqQRkHCdG9PT5JE62f",
  "key11": "3CSAFrKDsNKAf9CH6BbGwpCG2HiCT7dsfNti7qNK97XuUhY2LJFrNZoWzxBdnYUi5gqerxuWapmEj8i1tC3yipVP",
  "key12": "2NVfHcFSecFVoLMcSi71NXr6t6Gp1N8xkn9TQPesh4eoQts7PZgAvZgaMzx6kowoaam4stVJu3JMZWtbeErRG9sn",
  "key13": "484ojmuejNVphhn6HLVXpxxMebKvkSzdE79ga2LjyPn934a8dWhm5mwy1ibzqB4PfezU6XTY2WkQYHpzt1bnVUc1",
  "key14": "4You5ufZGboD4HRNH5xnEDojnBgov5awrXqDuq9xUvhCrdhEA1hT3aMNS1xd6n6QV42gpndBcaogCJmLEEaDmTqV",
  "key15": "4yqhE2qVkgoCgPU2Mr9FiLwu7ZDXtVxCQSV4nmoESJ89jUAuM8VFFAK4uYipN4ADffsyuuJ5XuLmGphZsMzn5xiB",
  "key16": "4rd5xbSV5tQz7uuvLwe1LXedYCi5FmiMEZZPSuqYatqUYvAD5cmgBUvv76xbYNLsvorQGnmDjBo9mqAxinb5qHsa",
  "key17": "3eqGF3xDVHqbiHyXZcJP4hgtzuJ7HbmvrhCdqv5K1ULDFm9TmxmJQWLmDqjgepr5LxSVtmbpqXb72WRV7fMWT4xE",
  "key18": "4ohqFtM7rohaonqiSSMSLqb1yJHtAGBe5MqQmn7jYfamYYLRjVhPqmYDJT7QgkV7AfFzyz282LakDuTYDuUJMAoj",
  "key19": "xde9ubKKzyQ4FStxZTw9eeaGK9mKKfoDbspqWTN4uS1kuxYPbA7qSsetsfTdkoZNPNFVARhKeazreXJ9AfZDK7N",
  "key20": "59qrVcbfY2xSU1pGMyt4CK7Y7vyk98ARzmAs61XNKLFx4134RCdAViC8ofFCdJXQfoYVVwcZ3orsh4YkGKgqdYVd",
  "key21": "35QVrvQqEWQX11NJSRNGFvgJJDnGkUk1GtfGqzGS1hUbGtoamm4d36sYDoeLkDZrNyNUHvMDn8683cyUtA4vED7Z",
  "key22": "3XnLvBRuiUBNgXv7wiwV8RN68demzNbnq7hbuMgmq9nzRuMgdqtjADS5UWXBQMVfPJAmTKjuRhSQ3bKeu3jGDWgc",
  "key23": "ppCQF82pbD9D9auxK4QQ2HuN16ZWGmawxZESUu1mvUvcCPiF2BGrKw8r7uSwHHvykh46MeozvVgnKeRdqPFqCRd",
  "key24": "3RioyhhQc4yUgKBX7mdGvD6nBHyX6r7WkCGamvigN9tmp1HKpqDMYzwjnmaSUJ4ELv6vUbhHnKKM9km6ZpPPzaLs",
  "key25": "2aq13r6is4k8EwSyXcufMK72ZmqfuFvWRKuSFujzY44VoFjeTKnSvRkd7tj56Wgq9Ld9DbFZmc2mTTNQrUJErQ4V",
  "key26": "39hG3HGXvZzNLS18kdFhEy9sPZ3PRgt9h52BD7ow4nTViZgQ9TWB7jRDuVM1g4PeB2KaPMdrQbxFGXNrY367zCuP",
  "key27": "3K9yNMtSkgUjzozZf5XLCajKv3MYDRSggsuuweXp1vhc41SwShtb9pXHkqUJySSH2eKdkfbZHJbSpNW2ieeDaCmB",
  "key28": "5LMzmfA2wqUHb5BrT7gY72xr9hyW97nCEruZsQCXWkVNmHGtYY75Kp63KXa884Snw3b5uiL89io1ubAuKYNdmro8",
  "key29": "66M1oRF2QbmXRS9ZCjXyQykCnS4ucicpUs2zGdBoMGyJPWvX9cYifx23UGv7ojNXv4Tr4YS3DHHkJAWSpqu2zie9",
  "key30": "61prF6EpPgYkHdcsLqnHAQS3WCVpZXRapGTUQWtwKjjt4VMqHUrXxDNJVp8LnyK3v9MtnWMEBSzfkTHCW2ZT5Gsa",
  "key31": "52TupgYF9feAokgBdL4b6TuHHEN5swjdnNZScLt5WRXbpqZTae4DAUVqQfsK9YNFaHZpZJmbYE9gYdpE1SfBiWkQ",
  "key32": "3f8BU9xNwnAfpKVr81JwJaTq8eDiazDHwrfLwdNLdYeegpKhACWqfMvCu1KsCg8UTa2137MkUyN1wsGUZ1jmmq5w",
  "key33": "4gvkPQ5wqVL5kmqaFnLM8yAu9ybi8xecsdeF89zH4F1kXF7Ctogbf5wC5G924jz5ZBAsHYbwkrgzFwy38nksKx5s",
  "key34": "4Pq74nDMQ2Q4ppuWxV55Mk7AN6Epv7ZKExzeicKkGXxbhSWwdVh3XMytjKszskY9fPPxiAYdfgrheExYcJpXSba5",
  "key35": "2btXxuRWBypDa7znsMush8kSLnRUYeLdBADsL72dzb1CPNUKZzpWGpj9KcV43xTFGokgmFGb2SB4N5FkqB3DJcxM",
  "key36": "2bxtbHJPGwC2tyyomV3Vadk1Zv3emvbASG3Tr6p7Hk8ECJ3CwzDCZFd724M6HfWvDVsZFYa99NWwTbD5RthGtu4W",
  "key37": "5LrKyj78E8CaLjKhHXhXtpdfZLm7KZMT5zvAYAGtUjmW29NDEoJKm35bE7icRkAKd3jucktDxdj3izR64isjLvSt"
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
