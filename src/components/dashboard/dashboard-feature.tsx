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
    "3Ffn9gkkYyLPXRMDh6mBJHgAx4cAf27wCf1sMM3Y4bzXVKVtd7PfNLrnnekNowuhDUuz3Sj2oU99KcECmVTWoXDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYsq5dKXeJDnGdAyS1LrffbnPXEYLxdMkWoEiKKDSyfoL1t8YxvUg7YdrKiLuejp1F2vgdNDjVDkCUwQc1FsQnV",
  "key1": "3mmsHY6RFE7T6eKzt7Tjps8YUX8bwkfqpgQyDUuXkrY1xYraBNZtjGZXwiUSPNNwoRzvBemeSEEp2a6V5BVLpP3o",
  "key2": "3ebdvffDcKQqbwyFfKpdsLJXEx2SLYYsyFH3zNUCU1mjvgDxCmJEVGpH7NtvtUVFRkYtJtkhWyV42f3zoGSCGgrs",
  "key3": "3x9xuhf94tdjNqPpVQHa2wZmYMDWzQdwz9Gz4B7ZEDcGZ6QMBmZh64oM1UWarEQWE1rYfrua4Ep7KkKsRagK9uU8",
  "key4": "27SCYmviXhNEhcD8SkP9Q7fgYVEAXaQaAwzspyVA8wkVdPywEZUQ7x4QvBTrnxdZoRt3SPszN23SNCdueYv8rTKZ",
  "key5": "4nXMWrqdS4mJsci4t7Vzmgdnf4S2heJQMWLpbVuyPYzVktPizBh8oLX3QvAZR4WKdkRhsY1KBPNebimatjoHpxLX",
  "key6": "4gUfpXVyoH5LT5HdpVZj9TWmK7nTvXDk1bCHggWqxyUeEMSpdCzS96EvUjS78cEnxxq8KJKLm56xUfzbv1oT8vDd",
  "key7": "K55e49hrsabWKcZkDSWaTVKEpxt1B9APJyj6MznBA3komgnx9aUvsd1MED7tnT9Hjk9PDA4cHLcmPQAd3wvWnkW",
  "key8": "5QhppNsTcY444UWEcBFw8S44JRLfjyoisAke6VJKvzsezivvD4nQ66EjKRyf2Uhh7VTo7Qrx8auUh7PPw2CtvAsr",
  "key9": "5cR8f2CffVgpHycooUwyVwyUoS39dykQxDe6weZpi2uraat3H7h5y3FYrGyczfQTbNHcfM1bbA2swvYgQpRj5VUn",
  "key10": "2AQnaLc4ws4ZQdRtjy4WqkQTnFJ5DAMnkr5CpYL5NWXtEpgtC7VTDwQFBVcHvYd33MhSUKGTHhJ5P3ajyBMySS8X",
  "key11": "3VWVa5uNwyj7d3emWCSc4msY1LsnhEkvC5aAFVAA3nM5HqZPRWVntAQxHFB85CaDWCzrPeA9PTc8bEyTqHT6XUR2",
  "key12": "3rcdd576hikxgNh6qKVFFszEsMVwKhqasLvymAvmamx3FK83qYGjkhw4131o1X8462wwQgKWiMTPK43eEM39Q7PR",
  "key13": "5gTvc3N2s8cWCCuqx5JStGiDd6GfpsAN2HkyMBp5kAvfBPXMsnErURSiLptqMTT2j83JpnxzcHXdfop4cmhbEqRA",
  "key14": "61hCHEyFsCyu7XBizvXds9bihDn9gmNKA13TCPhu2QHtXMmPWUmNMhzU1c4H7JTz5koMWQ7UXuagvP99orNfku19",
  "key15": "3UQcfwuLKX43yoMndMV5g1x7Uvecq2hfq2vVGnhD2nbxvNe4gMKzv3TUf2bHwwCEcYwvKsxK3KapzgmcyD8hX7fm",
  "key16": "4f6Y4uF8SgL3dBJirmHsL2MPvNqkUDnssg69Qiq8E5Jn2NEyAe6wYF2sUiPDb4ekfoRX5PXw1iBJbYaDxP1DqiDV",
  "key17": "1XnbUoayu9ag1HfTVFJZSDm2rpQBDcZP22CtgAgRug2aaDtVmrndKyoBexoCcR6x7GCzcJvERusW6tYWoeD18iN",
  "key18": "2QXkmGbUBZGufpCN8XA8GiWkSHvyPHP2k6ZkXZ8q1xtrh8ZevmDwNSjmg2UzAkrzjLLjgH4bqSVEYZCq4eDbssK9",
  "key19": "2YzhfreSZWriMkuPwyJ5m8NFSuUonT8X4zTHecqwtXPKb4hLfzF5ocF3Dky6tdLz1HU1XPzkUoXDvAwfuc85sPwY",
  "key20": "364ZeYEVn6Fp9j5jPpkYQ7JeVLuUWKf16hju4NYYS9rH3rpHzdDc7rgMNtL67anKvH2TL8zgZ3TNrBxoqsEmu8Zi",
  "key21": "33FushEvBR2sgUwW6Kyytw8oBsLGjnvEY5nJKuUfSecv9rjoX9LTqZKKEr6MvSUXWWKUTmeaER6zf4qJQYrnGdiw",
  "key22": "Zw1oZ4SbJv3Rq8U1WfngF9w6V4rkHrzdgd8Eg55uchriwuLhvxCU2yAXmyTN1kGkfsrZ3zjC3p2n8QDdZVNLgyv",
  "key23": "2NNRZasqyyg3PZjwetkpEDHCVT42fQ1G2283dsuNFyD7w3gHsTupH7No18MseXMPdpEfEbUr4kgCyhuM9fXYDTvV",
  "key24": "4BYu9mSUysjDdXyWnr5tAi3tHyQnLJYnUToM7LFE4Aitb9STQwTVum3pNFFREB2ShQSZmqMxuvogwiQPxwTBWMLW",
  "key25": "4edyCZJcD7aFHKgX9isqeteespdnerNbCvzCDk9V5BPUW9sAJj5spPdwDNfJwyFiEW7SCfHRqaoM8ejmVmsmzevN",
  "key26": "63THRh4SLaLwm7LwqwPz5Gb1NxfjxM393pXupUeexC6uG7MopBxmLuLqH5qtXmdZ3ksic7VGqV1cQALLev8oWzMv",
  "key27": "yoc9Fok9XgYuprcC4wcFePJ5xU2e4krTBSu6fEbuwNwoBQjwU8Rq6NEzXTTA9tkJgNVZJ6YKdKXfM9y6YaSPixm",
  "key28": "42t64nW1bLXbdX1e2TikyWKmarBG5GTpWRsW8ccDTfiFLR38Lb1WRHZnVLQjSQ6gFEFHGYUN1Y77ibrU36bc5YvH",
  "key29": "bdf5jLqQfvMpNkGgfuXKpenPkq4cHQKCEmE2rhyfVgjpPGVSNR3qTEyfHuBaiAKCkX5Wtj3GCwoXVno4PY27asi",
  "key30": "2mQYHPsH7PYuLucMPLbAQ5xhvQxQKdbsVDg2Gd8J2pnHbLNR3o1B7yHapV4ie3o7UZBJzEz4rTNeBcSAsqVM7mCe",
  "key31": "s1oAnFWYGBwmwwzQqWFYpgrhDj3PdoUG6FzDdXJx4vtq4nYzytx8YSDiAurMUNW2MA1jheo4pkf61We1Ag5VTTb",
  "key32": "c5DkiMG3DDq66iURTDLXRja66NrzcL6VteDEWwVyPw3Q5BF5bBHkGpo3jPYzvFTY5zteunE4633ZPEC5qTik9Ye",
  "key33": "Yz3c8YEpkuP9NRXM5yCBf16urTBS8wo9Zw8jzQ3TETgYvRHQYppaLHmTEAAH3rvc593yQrjisu52fgP5utyYBwx",
  "key34": "27NMeuLZsC7wgJ2Vbgq9N6NX2aKQMx4Xuzqh6qYGhWF6e1upMZDvNM7RY1e3twRd9T4X9Svd1TbzM1WC1GKhtR7p",
  "key35": "qxf6WCGo3Bh4Mn6Vv14PSoo7kCg39z9WKUQDvpb4NJFnTgzDa6gNzMvTSGS52ApsjF9FJVtKpXjcYUsoizELDck",
  "key36": "4szpuos5PRJcrEMGBzp27v2YdJEfKZTnsCZFEQXPDARwehbXkgXnMg6taR8G369dYBd6wGpuzgy9rzUXz2DRjGuW",
  "key37": "2qnsBZtLPJk1RiNg4uZLDM7y7pH5osuBkRUhii2Sgc1WubkY7iozFERRak8w9ytCy5BiToVUnaFiDhQM82jZ2iM5"
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
