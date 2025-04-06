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
    "5GmpCGMZJtFzzYQt8b7qZpceAq9yhyMAvw47kkUnEy6njzuaYaoXdJmyzDuYAk3e7Aj4k4trYPUhsjBmoWWC6em4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gA7y5EtyQiCy934rmFUZeUq6LWsTLewRDFXuLuFgQF2r2Htewni5MYN5BNysgBtfYTpYw4VgqRp8z7FjjoEF4Jf",
  "key1": "EtTJuMavMN1hDq4QgTETrM5drL54gc2s7CaZQ1Tvy6DyPX6PWuk1LWqJeuYn5VYp9v6dmpHAfzABgxKu6ZWsdFL",
  "key2": "4us5k5V6cRErSQ2HTyExyCgm2imFAe2duXAKvgZF7KVgWJXaCsox6Ph3pVWRwAzWMq15itF2jdCNjRSNZSFWsfJ5",
  "key3": "4U3jSnbSAUGSdcepfbxB1NboSEycBEu8NwfnrgL7rJRnZPFUCs49hZRgUYQ1pb9gGHKLrJiEpQHA2RETMyUKziPd",
  "key4": "5JcqWZb1oJkrGez7RijYSTKBJper4KaqPxzH7dGm9GdFi4AYF8PDPJVZHrbuPjL4iMe3G6vLoMBN3Cvz1r96MSbk",
  "key5": "qpKeo4WbC1qFrRw1FRxV7hsMZAs5CFRfrNhNNn1m5GGMAzh32PgWcx47QmGBUz2DufVHoxdcmrVHMKaTShXmYU8",
  "key6": "5Z7E8Yrc1B6zqQqxG7kyrbmfSXseeFsPt5g1FiCWUARNii1SpEQ1zYR64RT9CfRDnezGcTJ7q5oPDvZjfK8yFaCr",
  "key7": "4N4bo9Vw3pi3VuiPECVtz31qrAPNutm72Wy2SiBD5tKEcxxdgWqj54vPJRoWHfPt2MNS4aZBViB9YJSR4PQbHtBL",
  "key8": "2yMzevHxP4dDZ6kqXep1ShqXCGC3cQQuHS1dAPdmcDVRUeDGj833jiwesDvoBRo4xWG1skskJ9pAsREWQ8D4kBgo",
  "key9": "4oBonMDbQvw9rBpkhSj44X2daRdhhfvCbc3fP88KW3YxzqE1s8k7ftmyZ4Mc3yARBNfrxijQsCoZ2eZBDPms7j3T",
  "key10": "2bpaEqLE5baCVDsWwUXkRgKGUooZuoTx8FjmxB8CBGvmyHMCLGEnsQQ22iJvf8kUN8BSKjnBU7Cru6KH3gwimchu",
  "key11": "4NfbQiUMXC7vPSo3jE8DrJ4zsKdjptkjUd8tzajqsky1QifiDmnqxvdHPXpZYbzrAUG3uLJd36NwtX7zVTWYw2WR",
  "key12": "3ah9dKzvcHvGkmeqofwEwN6qafTG35KdRcbiBkqvc3spe33z7YDwUq2RqV8ecntEBvifs9ewuFESKvs5djazMeza",
  "key13": "GMkNwg6scdEPbufhZVQ1aCw28phx9ufYdiUfHfQFZpiA1jSZNjVx8qnuUFY3k3foMCf42Sj7Wbk2TypP1KoN6ZV",
  "key14": "617wA2vjMEXiZHD1DMJu2JEBaWSLGoQBpzB4QNegppwv42jPkjW5oMMh1Z4f9gS89MZbp7pV2sTwHeAMyYQrQjPT",
  "key15": "2Hm9BZRcMAZD5hw3vAfon3dFMVFsGUHggcvCwwLeWs9QQuMg9fV13KkSpJHYkHvYepLgN2F6DZnZmN1wLSQa8kCi",
  "key16": "2768YvxjkMrEnY1iuXm9PFrs2HoCBwuDjxStgkUqJge82jWgp5aPXrRkbseYtZCPDPRuQQDvdkWzxYQP82zk68vU",
  "key17": "39z7ct4mLPUH8VEdjUMd7oormrhz6aWbrQ3KEoWhwR5y5bagLachukJ6JT8HxLwvTrVFivxp3WaH6T42y1WNN8m1",
  "key18": "4n8jU1oS44VbgdB9cvjGEFnhmxAYnf6qDiT7XAutbviKoJWPSqGt1FNLeRLvbpVEnVT6MCtsEAvcuyNDcKEGcFGk",
  "key19": "5vLfEeWA3gQwX62dXpojNSPN79QBky6go8dWp3fUKtRbEMN6bUq67yCmgj1Y3M7scmMURqNyqQ6ioXynVxy8BhHp",
  "key20": "5HZcKjGAi57nxfNJTnDxkJNfRP8Q5ELBLUVEsT9TRwTB1RWZYTEgHXcjMTsVP6XgtfM6YtB162yW69t6ET3JRBDx",
  "key21": "4bUvcsgyrnsvfrUf1zHNu565uCMDLtSBLsG55Rg2JncaVsNy9kaoCMohbANLQnhi1jjhaKyb3SF9zeV8yKZfhgTA",
  "key22": "JfiqaB3cJc68BuwwyErbTbNwbZPSjgbWXeg3CTHJP3ToiPSsAG3UgLFrVrcda6AiLErsoWFsib9N1i8uT4R79Nz",
  "key23": "1QLvz9h2Wiosef3nLUJXVE9N9pMo9s3bkoAGttcK5q785Fr23m4FpNgfoegDr3URKhrXdRaL9JfVARzZwDDxKJV",
  "key24": "21gsLpk7t4qJWMsHosVbEG6BB2MPmbrQY6KA5KvT84C1ZApr984H3p5sZ8kroWbtavZJ7nFCGqHg3JuBb9pMTirX",
  "key25": "3z13svCuj1wB3WD1Wd7QGxSadNY9Ucp6H3aQyYDJvs9mzq554J6xo169pcCLBwNxxY6uh2cnzNTcXVjJnQWDRcYi",
  "key26": "46ADBPfCxcQHZKXnFu5VhSVudVEMeH8hEyUSqZjbnTgRZ88XjEb3sgz6kZWcyXxcsgtnAxBUFJThFTwwoZk2kH2i",
  "key27": "5SNrLruTfe2vW5vTQd3TqpWnrKp9YrcYW6cSiyKs3ugKxJSbtRf59d6bxwrw9umh9ghUAu1UbD3YS44keoAipVRQ",
  "key28": "9EYYdUUyMKLMNN5rTCWck916KEFbf8dByJybSxAKXWcoyidL2DC59NwFWtiJte8CJd6rMELtmwhxyX9k2SKpGjp",
  "key29": "cNVj2nkX6Wwdmip8TYVoxiUYdwHAHPoCPM12aPuz5WJhaFw5LpgU2sSnhmsJ5XWjW8phyiZU8CX3zAueujk8biJ",
  "key30": "3owMG6h9LhJ5tcPJMS8ipMYvu66ai5Sqyv5GankZWooLAk6M5VTYnDyTDViizBkqCeasKSzpgq2X3rwjj3yghwuL",
  "key31": "57fAigvyy9TL2gTmGxdJezUubGjoLrWgpQJ2QJpMhRpWKBYsviFawiMvTvadR9R8CaFEzptJWWCbhutrKdZURZzw",
  "key32": "bMzZDP2WLSVzqAEovmjVuNV88MGHfEVYtpKLhhqo78ktNkaa6AipNj813edFJQ1kTH9BUqoGwRuDsSNM8NeTM6X",
  "key33": "5h2k1Q8y1m7qhAUQ1pH1okkoL292GAnrqNW7g2a19BQwueTyBqPsZiZvQMQM7i24hStkW48wJa3rTsHuSVKudWZB",
  "key34": "2zTXFvRdc6brPvg7EZCcrxhhpBno1GwXzFZ1AvoXnFrY5h1xr5mVBgXKPCzcaqe2B5DdmMDWB5n4zA2m8jQMAnKJ",
  "key35": "NFHMNgfxnzs1HhTg4AnA2HPYoZqe77uqKHVuRD82zN3fFx5hKfE4GNj36zpBw1MbHssCefGMSbDft9EjCAS4Xe9",
  "key36": "3wUrKUyPFdmqwRJQFsyymQiaW8Du911qd8j2Lt2iE6ntXRqiazGpe4wMeETJAbNTw9Fg8vqjwAqzm7S2e8zdEgjE",
  "key37": "5j73NDdtNxnuDrHGkRF9GPxmRoyaoigNa3QkoiFFaxpbnF2ZtJNcxSppYPDru4BSkhD7usY4XHrMyofD4bYT2T7B",
  "key38": "5Upk3zK9eFPAQ3TiefYxZasZ2FJaySm21Uvqz8DR5EZ6uUifaF5VE6YXWBZTQvDgS8qG9dZmmFG9P4ck5P2HBpKj"
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
