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
    "4p3yBzWMW3PK8hZhSWs4NrC7Ga8cgrXG256MYevKsXwU3Bk85zSebYnKfiDJ9qxAkhNgxADR8GPGCnX9YBpjAQUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fs633FLdfHLN5M46dQx4MUBKqQEaBFEkRiC3ZrXnkTdZWdBGkeLxddpyxv64skVFMdu4h1XiB7sPk476d1383Eo",
  "key1": "2PsNAhFkfG1uEMaKX8gBJJPAdMK3iqjcWC9FBe7mytfjtRzxkiVjsFJbFft4e3LHz5n9U6uxtV9QXmkxjcy2kF8d",
  "key2": "3FutBcCxSe4PCQrQ1RffTmAgqReeX2xRnYy5gBvtqNvtxqPou9MbqdRYU46Xx8XE24QMVPyKqecvGpzBTGzWLva1",
  "key3": "45bcwvEG4UFGyZePtr6imsDS5CtAmBibGTjsDeZZL9XGSna7U5Sxsh6knvoiXSAikmV39mp3sG9u9S9Jz1nwNUzS",
  "key4": "1CfFduqUqpSmCokESfWLrw6nHPFt2pZAWh6YEXagepWiCguBKGSZTe2f2DDAQwcMJyDk38Fzg7oMgiYU6GfLbdd",
  "key5": "4MLp5bvxm3BDmC5f8x4uw5WcmDkUuYJrrp7fufWnXCXx5R4dJAoYnByXzmxN1fQgNLS28vgD19k3FnPnkDtPnPaH",
  "key6": "4CnVUcL8bnaqPpYiDHSUbeQdRRutepbvp1n1DAmgT6mY5aCHjnk9KCT6pEwjkBkrHAGbLMv2vtpRgzH6BkmKfs5s",
  "key7": "aCs7zScXL8ZXBrw46aJYMRYPByL9KD6yLvtwkSejy5UQEGifsj1ndzKGpyUeY5d3ck3XrmcaA5WMzL1qxG5tG7H",
  "key8": "488q7o6dPSBNav9NeUDviHT95W4dk7iaaTrSbevfrhxoPE1J6zZo5L3LJZA5faxpp86oj2crVbA5LwB7XkjKi5mz",
  "key9": "nPb9AxKUn1EuZMVnGhjLuLhDrV5nSzJmgEYeHUozxLQwrHgejrzYWtkYzpZKcWoGNhL62heGpRgxafxve4Wd2G2",
  "key10": "2bVY5ng7vwViG5y4JTcaQkgURLroAAwcjqo7UahbSGKvKardu3u3EoF4GFeAAe85iquKXGRpu45eWk3cZmJRgNJs",
  "key11": "VVbXvVf3LCbX2KUzX7wuP7dufwuYNT289M1FiY6uCUwswgiVL3ufceBjrYQEwNw9hxWPWEYprygEW4VJiW9hTsG",
  "key12": "4tn6zPUN3uAbeQfsGgXCGH47BgFJ9DsW2SajLRUmwcSZMQ8iJ8MXRKELLgnEfVtetxLrrcNo9VJ7WLvWEaMh74g5",
  "key13": "31ojwYTZ57ggnThdtCdeqeY1Ac9JXcFwSrmZdmvzygu2kxxMEnrAP3UzFqbqQ8gFxP8iezpeLxxuKZNyq7at2mSD",
  "key14": "2HbQDPXHRZJhZqsBVqroHkpFMrkQC4tb8Wb9HFX8cmaYTBnMj8xJEvUEmVZg3pstJt5V7198xwBWdJQrNBf5HADu",
  "key15": "4GG18WbEZvV4e7i1erexpvP8LN3DS25yXMKdMbQM8XaaZB4aMykLVJLU7J5yBH1BWgeSHdSiKx1AaDLVPihwmp2X",
  "key16": "2wcHogsyAwnWuZ5cvPRc7BWCtTwErUeJRtmFuKvQh9Li3Qwo76k7hUUh1J85bniLKRSbeoBhUKk6oXkhx7C9Qk6X",
  "key17": "FNFfPVRyZCXHfoZns4Mc14VwhwFmmRYgPW7LeXWhqDGerxvy4y7GeNHgrwAsAtiER9Hy4a7m9oSxe5EJixWbXgi",
  "key18": "3oXsywBUGBeEQP33Em92QiYfLdHEjuhFGGzm2yfXg1A3Y4cBtoo28dHwMvtmVR93ZGr7ozsWXevX4Jk5fTcuBZeF",
  "key19": "2hdpeTt5VrGVgrwKQKC6hwSnztTfG1rwcNEEXKt5ogxxWAgSj2VcbHSZKzHWKPwEk7WSo178WLGUm3vtimGp9ztG",
  "key20": "56s8ziqt6TVjdK9F3trpBsKwogqaa4aNSux4xgjCdKGPBYFhGY8Ao77rZAFLtEG8dm6HjeVWeiBEoXgPcQnLDjd6",
  "key21": "J1Y8kHTbnajpftN6eeRhcJD3jV6LoUmvfapTYcsuFxGpRJj8aZvpApDvQNu14PVhxJvLoQ8DhBLg1fKZPJZsyyr",
  "key22": "2rqWgNHwjMjsMfMeb1kPepBda22GRpBqC4UUJ2dzwakHe9b8CngCVcUG7fYBwoQ6ztxvzwrLb2wz5aEps5bGKq6R",
  "key23": "4Z2wcWjj2sXR7FQEsZNASBPk55WJ49kwkJxoBENSGDfsWqvqVfaVLs2NzmhWiCHmfWzquYpmFdSqBhr68e319CKF",
  "key24": "HhQnYQYFem7Df5P6zxgoDo2UwRrKzgkrNBw8fvFpa5Pj93Gd1u7YnezkzJn67aajHE44HMsaFC7cPqSKUZm1snR",
  "key25": "626zoaW9r5wrPm6eVDq1H4h8HshPEjPEuxFrEty2xcxU4rhRkLDt6q3BMBjp1U8NYQy5c9crDENZJ4GNPj4rqUZn",
  "key26": "2Hvo4YxYyTjK43DKCQFTJRaATwvVJALTZoSJCtwBXmv1VzfeusagRtY5ekjhQCcbcBHcivQpqWnvuRsqaRxVj5Qr",
  "key27": "LQqheT1y3uAfkpPSAy4Rr65KMNQxU3CJQXq587Nq7vFiQeQfDLxQemrbA8AjkHkBj8mdnSmiaN7udzY2a41oDTd",
  "key28": "3aKojha993h6Zdv4AYcsUiwphK5bTRHvUBFrWm63S4R1Mdsz4ySKhDrjtV1gMNcDScK3oQAXC3Vwmmutmm69eUsR",
  "key29": "5dP5XoxCXKUKuGqU6z1V9CRvRUo8hiN1pUKuLYNnng9HpSeSywD7eY46bFBLvkibr2nWWBBhDK49XuX5KgQYqDsD",
  "key30": "2tRceZsz5CSBHLh1Jbdyn7xhyPJzg5QgMF7hnRwG24q9hPXG7CH9QQxw4Z4oBfE8pyGPGCVaC8r7h6nbc92cZAZ7",
  "key31": "3Ms7Rwu41EKnBj4HSShp9UgWa6imnKVBkFPPBxcjbnCKfh6DrVk2jxsEJ4SfpaKjm8t5r2j94AZbeYxc8H1aeJwx",
  "key32": "2seMTCByzngZY8vLFsDR5rkvN8jWPr7TpHLSbzfgEeKQmkT8mJkbhXfJfPGvwtuT7LD2ED4tpB1L9BAgBAHBNsMU",
  "key33": "3U4x41KPz6JTjwMDymBJM1vhCrHJ4jyBUZxgradTVwWuBmQcqS1oSzkeEUZ3A9nBmg5pWqnrgsuKp1oAjCd6GVQ",
  "key34": "4oFEif86VsrcYBqoVPXmjKPCytLoG9ZNubi7EmDppqbvkezt6jCVQSNnfi4aWFJKN9jhVFshKRRRXoeQaDvy9HS4"
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
