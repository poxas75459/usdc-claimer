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
    "MWQviCqFHuWb6YnHCUBU7c8yhZ5CDpGLGSpsPhCgNzcvCdpzey1USLCpPRXYWiiDXavChMpZSy7v5VTryknu9B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fufxuyn3D2kdnXGUfT6pk53f1SqkMRbVQPgSHcZVwm7Qo1b5VyKmjve7hYsRyPHTyA9C81PJBrNenstinfrzYnV",
  "key1": "4sS56DJeB4CTjWGiKdvVtz1dQQJriFcYg7BDmcQAZ61HBEdJQKDfcv5VD4Ca5QRzHzjNYbQxub5ugYteZatpqK7u",
  "key2": "2ZYM174XH63dDBkRHM7KZTYgnoKfQHW7es3QRpVifXTm71zxoRi5Bs51DygfDK5bu9cC2HVhzXnhi5L9i2Vi388f",
  "key3": "XWfcnqJbNbZpXj7PJ1FdqVVtdoxc93Aw1puNuhDhNraxJFehxT7PBAmhUn3pTYUoiGRwEskuSs5FrrYYZbhZy8c",
  "key4": "3z9K6XanXA2DYC6iZyL3WBv6RoqTx5GvpCbCYKYDw9g2NKh2G92xTzLBrubNfVGQp6tQnVDdawQAkDvEUiwMbBgy",
  "key5": "5wcYGUBbTQ4n2xhY9XEFVToeBgxzedsXV3oEPcwjY5k1EAJ5HohLy2kwhagptsXSuGDWSDT3b4io6JrwhDqbjpTc",
  "key6": "iMeQAGYQ7dYPqYqVxnemhLFdiqWXD5ozNxUC3KY1ANxwWjxCk2wj3ZxEut7qwoncdtkTNxHUsYhpcZfoBReRe97",
  "key7": "2Scv9ohCjH73UiZa8w3PjbbBoh2S8fjGibZW4Ddok3Y8xYFpD53kDRWhXgfVtoUsD7j8iiKeSEJPbzizMXz22Y85",
  "key8": "3ii19qSn2eyAMdXbKCM88nt21SgoKBj4xAg7tsHhRCTpMvas2ohFYmBB8KsjKJtAM243hoH9DdrvW2q7nA4VrK9r",
  "key9": "6ppwJ8TuqfuEwTUwQMzLTeH7g4KbXvZZdyiQiS9DL9qi431nfN4qLWSopEW4L4kUYzPyBr7F2kwGr59mnX95aSe",
  "key10": "5on72AoP5Pk3rSRdjoLToDXoeAL6BWbqtFV6wmzFwyQfWUHs7TpKyV18AyUra3dvx3ahvMTgdDmeoXBQERGSkNZc",
  "key11": "3igsThbeezFX9JjseXu8LtchzsvTbbxsgGke7xHf54DzrzTS2JsXYtQzodzyNFMakotigVFdP6kem8kh8iuP4goL",
  "key12": "4cT7RSDGvoxzV5GAhDwJRmmKhbsU56u4j6RW87z3Vyxo3ujuH2RdQihCr5mqX2btu7c7SVKPgXAFfyMTwB9jmtBh",
  "key13": "2DVDfcqidtqHFQQjQXQxyWtMNGqRwTPmRdjk96cnUbiwFc4TMDSSAE6e2L2X4rENqcdwhFnVeyWhBnemBZT21N9u",
  "key14": "1dhahP43gCFuon6xAgnUkh289tow2h6gkZqLa5TESiPuB3imSREPFuc3atutSztiTzcSR2g6gekkGGi4JhuBwpw",
  "key15": "2wDfThwvTcjjStB1j9GKXehmLQPDYSArwXsGw3fDbdPKzu5pTjJgXbh3ExGZZMCEsXhMkMiofwKpjaXkDqmxAVB4",
  "key16": "3bPpto9VQ2xRoreZErN9E9wvNq3MtFjbjDVegCKMecRk56nZ2yWRd1nd13xMM6xa9RrWdr7Rnnm5q5sZ5UypFq9C",
  "key17": "35eUKTM97FyPdfecAs3fsHJGRZLmeETUoU3nbTJwzL8TeT4DBPX9NuHb9WaDbw1m38FowHPqHRLRyitwTVzsmmjU",
  "key18": "KcXzU79HXHUxgaJ8aYPyGBNDJ3M2vs9yFj9yHvw2r18w64kMVzwC3dVi9Q31UgVdURZrLsiDQwmgj3Pt1NsxJtk",
  "key19": "3vs6fJrMxmCJBNwJPB8zgZJ14jTa3zdUsUPK2BVzcBPKvh2sxWzhcKGSnQqXmqTQH82zk3xYyjeY64M2rfrZvwSk",
  "key20": "5CnNn9kEp4yhJua5keNdrSGebVPq7kvLtgfHQ6c1P3bthNpjUJh5kYJTuD3efmtCNtGq9zCas9snhAzdUTM8AsBy",
  "key21": "3zLjb82GD3JggEWGsmDgyYq6QV4CGcChG7QYa4ratpDYmFXm9wE1tN3YaAcigbJ5y479HC93AZchSEmysNzEm3tg",
  "key22": "26nW5Y9B3H6hmcvr3avmJLCLgj6Hp56WRunyqv2K9rUo7QerK2NaYbeTApW1JJBej8uQMoAFBJCnf7qfJA81cnkp",
  "key23": "3hTLKYL28DciGmJKP9dfk7NkH5N7rfz64rNupThcySobwRz8kJb5R7UaQv2c16Sq7ptgrUZKqpnwhpyB3J6J5J2b",
  "key24": "3ALRQ9n4DjvMue78eefDvTLZvwDBdT2JpYoFeFT6cn6VbRMRk6TTDXFK4YReAoFdtQHjNWZh8PDJZ5cpUTGv6iEv",
  "key25": "3a3xVgFnS3EguoEk5gLr43w9fsK9Gf7CE7uSLpa5Rm2rSL4uMdToe1kzU9M5aR64gyyPaUt34tNSv1QmYxGo4rbg",
  "key26": "42ELZA3jAeqq3M2Dx4ApbGLmh1yFZqR8R4tpMNdV16tQTpWwe2mgXRuBLw1WRA8mee6iJdkxRj899qnZUicDejT7",
  "key27": "XynLM4q56Jf7bVMxNQZ4WhCzusgZCgbyNyc2Fy1J4s4og8hsF2SrWLQVTb54ADVj2XayDgpcXSVn4DWETGoJV1j",
  "key28": "5NQ5SnQ2w9pov1a7dFqAsLy4dPmJQNwaJWpoPPmsMAsQePnGxcrZxbVJSK8t2tJpPaosPu6abEWh2NrFXhNsuD6a",
  "key29": "y7KorGyuR8YjNgRQjWE2y15cwdYMsRyZdQJebWDmppVu1AyvFVbPinbELqZFzMYW9fHdHoay9AZ3XngBohNBHV7",
  "key30": "xfUrjgyWktbUqEPbXX6PxdHebdXzBBLyEUhSLhotb1Xkz6itzzn7Qrr96qSG1xKctVb3PFEKaNFWiM2YN3uYmZB",
  "key31": "5ycpfiNrazqnmYVaVABxWfYrEmWuKU8tC4EoqiDheShKUspo6C9rhLnh3Jrm4asZaJpjv6L88LrUMhKiT27BwdAm",
  "key32": "3eJ4NeENeByB9jmQFBhan5bsQ9JErbzCiaJC855M8rNp6dqt9iRGd22i8Y1DSVj41ngyEkfxqvwofh4HKdUNGYic",
  "key33": "2pBhr767yms8P5VxDczdHT779x11Bp7Cof52RkCmvh4BnyeLgNdKKAcvoUdVKxQMJtHwprywz4ZkdSiyNc1jKTp",
  "key34": "46HEGZwwRB7ucUmqNF31unq3sCZzGdp1ri3NYZHqbsZKUzeZfTHUhYcMCweizSpkJb2baX643ggaY1zNVNrurYQH",
  "key35": "3xy13fSYtR5AyGL16KTGhY952fBHKXeeawpRsJ283KvoFt6PPLG5RBjXC5B3caoQ4GgtvAVWEdiSUBPe2TJ6KWQY",
  "key36": "4WoJxAfCb394bTghoKpbfxsYtBUTtzFyA3k349TS556EeZ4UZtKcoNq4WgdrTiCuhi2mv7qtiXSqzsRHt6fdkVtc",
  "key37": "3VdqsjQ3pVVAQJkdqzfJ1osPaR27pn5zaY8Us3t9uKjo8V76xv3YaaSRv7frDdeKUyDoNwMZ9cksWhALK8c8kMQR",
  "key38": "5zktaYXrZg1Rb5aZ7fEQ9bZD9XAEknP12jWxMjsrqVQoueGmYSPmLzEodfE3VkroCocrwF5ivfZz9mFx7uemhPyo",
  "key39": "Vs749DvRJUmR5iLwAMDrPmwjha5LvJgZBsC85kA9spwihExseSAbziTkvfwFCH27NXCCnF99fjEoDVnnwE6XfTX",
  "key40": "6442dXbTwmHXEfurULtNZJRGWqxM3y5i8j7cn2YijaFyztf6FfGfqfGWEtvsNtRPocVP8pGL7xdab6BxZXRMUBmB"
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
