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
    "LfAZve2XbbXMW1SW16MUzUgoacwChLuZSBtomwHX2uyuLPBtFydnWNeczxU6vLn5cPjanJ9qLfFxDQ9qpyWiZNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYdxKtBgkbWeVrAA1DTExS5wnHbzmnMZcusuiF3jx4A6zuREWeTV612kpF5tYJveTab7pFKJcNh5h1pDnRGSNuM",
  "key1": "3RBp4y3hmiy984f1aM7ynGyecGq429ComcRpwTst1rBUEgguV95cX46rEo2PNx5wTSKbLaMa8ED3zHDUduhd5ZCs",
  "key2": "55r7ZFB1xxiSLz47jKeyeiu2nrCriBHT8WXxC4NjPSVHHkQurn5DSVdxdZoE5TYAtvK5pDWhYnqP4rHWV42WXZWZ",
  "key3": "jXhiXKTMVJhxkjnD9X8UPTgpWJnFmd8ARXCnp9KJska4gcKwN8Gg6am6BaJYWVyuviebufnYZNCAPFiQ7PXAHaM",
  "key4": "3hz8kKvcj7eq329kXUmM6dakjaVNRp1DnphARKD9s2Ficiug75yiZR4PXetscsQpZ7iCUpB9TC35KA9ogNBJ71MJ",
  "key5": "2wRoUdM42JWXuc5F13JMpWE7w9ajX7DAzFaKAPGZUQjWGkFPTzWieSwkywDUDkuNUQDpnCHgJMXDEi6y7RL6hr6y",
  "key6": "41M26u8A18ihUqXN8GzsKDQpTp3rLyzFHjGY3noNKSe7dn9ZSTuyAVmCj423X2C58J5j2RMLDxsVu5qoTPgsyX7k",
  "key7": "5DjMNVeJLMAZpxQdLVUcURApu7ccwc4YsAJmScLAdWGiRY9RTasSGTAb2MRRQgLMwWFHVCq2VqwviN43DAaN8tbj",
  "key8": "3jRQB58KVnqzeNFDhNd6AJDUig2f4WJeGoZmak8R2f7WDiHUxPTKmXyHx6wFag4uUBtNyhqseP7RPTe26oFkypiX",
  "key9": "3iCFEHTCSLL2iD2yBepBLPgQpvEfhJA8X5kSyWmUGkk76b6vtgrzQ7XgYqfseVyGD9omcrEXZDbuJoMnHiL1pkf8",
  "key10": "42CqyrpCQfiyYAgbdm4EXfLH9EwphnQyDrGwLN4RKCiGp9KYN2hMotQQFd7JTRn18YjSNC8Mi8W4w6A9MLipTqHm",
  "key11": "2xYyptjDHm6PVvWUXjx2jVQmZNjiSYN4ruZKpEgb2m8w81B3a57twcrKZ2hHYXKYAKE82ew2cnzXujBcbnaQ7WoN",
  "key12": "5PrJk1JPusZifZqYE1F3su85F4E8AiMEvxwMeT3qwAftbvCbJ7ZWaCcATCBP4pfYMjL6JTo8iUjQUsQgBrbxWtk7",
  "key13": "nGcPe9KcLmJG3NExxYVpJt246apH7bt8YQ54CuzFkYnP58FcvLTjENfGGYDH1cotWBGdSwDnRdZ1zQkBAMQ9WMh",
  "key14": "58NH5YvCbKtrQfqLGgkfPBoSWAK9oRn6ggkNMywEvQ6kkMUoiq5zV1VNpDGGEyFNZhH9pu1GGThidgtPcS8NeBiu",
  "key15": "5oohDhPZ9qq9ZNPs7j9ZM3qZ9m5CZr2zyPkt83HuKtwYVvGnWFU2ZoqRSkovhYVBdktcQ3at9Q8aW77uGgmLQnT1",
  "key16": "39PQzerzDUbYmMTkM7HdbqqNaAX8nmzwLnnw2RDTzzdRVZvA5Cuqm9jbqdHb89BcfYtCu4AMSpZ2TgKTesYBAXBd",
  "key17": "4qLVvb5MeVjzqG12yQqKZjP73nGc7gSxWHa1J81oerzWqd7eT4KJhXy8wy37cUmm3TpickBGExngaeAGzEVgM8Hu",
  "key18": "TJ5SUeM8L6SiDCBSa7DLP5PtV5KJ5H1NKaNfU1vAdJxaudtEHzMoXfvjJJ2M66FTwkB7dyapB22iiVnJaAWRzF2",
  "key19": "32WyRDqTkLh7pWfmYF7zg7imUocsn2j2iEBmynDDprpBWTXbSe6ucg2XQvZo9MCGsJRVvTz49DM4cWT5wUNEroEC",
  "key20": "G1j8fFihe9SC4dvpAde1aLjcscffvGqnujLp9hW3RLsTKkbr6gzmQ46oFuEWze3TLSN4DvENpW9YjF8GvQwJxFx",
  "key21": "4SwrzWCgouZTn7rSy7TjzFmzRFk89X4LmoqdeCCfM7qq1qBTJVkwKomNnAMMt6zh2AZSYDub8ANMm5Jwd6gtyoxt",
  "key22": "VHxhXRFXojy48BfiWdFGuN6FLa4SZsAmTovKGuT2pfpcBDkxGqqHrs8ZPR3AZ3FFdToitJ9ejkKs6TS93JJz15L",
  "key23": "3hEu7KKnoJJqCMLmZvUHaUyPkStUZwrNo8WNAWFcFdQmHWs7c7wSYEbQDgFJSsXbkABxcHe5XKbsKAb9sZfMN3RV",
  "key24": "HeXh7drvG7iPYNrnv7VeaRK2L47pqffwrAKWXB8fM6hML9rotV744K699ncY24JN3aZiEFHiaFn2qnVpW7kMgeH",
  "key25": "3QwLQDT71uYkgP2tazkmzsP39YcqK9TX1PUqxEXbL5soAPtpXT9bD9SW1Kss8JTpTA5B8ZLcUT6afiSDCo7BSzB1",
  "key26": "XwHR3oDimrR625Mp1jS7ks13UfZXueuVJdrKiarSta88t8zXSZxjCgBweU7ass7Jif2XsfNXMhiNHBdMPpnMq4D",
  "key27": "5iZKyASF4bg3ZMvvaL7ZkQuRVGN38HatcdJDP3SiPKhYaxu96VfFeoWkZN5bzVJ79hzkwqT9wyyMmCFEtbkzEKRS",
  "key28": "52B5ax5ikCNWRtMV4bBSovCHej6cfz1WyXuqks28YVAhcUFgj16gQcXdurVgJw16Ykzgbrt2gbS8212jgrjfW4qM",
  "key29": "4Ucu9ojtrL81G62qXmCoXfEr9iBQriNh39itBvCoWYt5ZeqVkgXgQZ7bzMEBb2dRYRypX21cty38JXGzTPP7j23J",
  "key30": "4tGLTM4cvKk7PSmA6skw8hLUJasxpNivt8Qyov1WMCE4EBNgvw5w5y4T3wtSpM9rbZeLVY2jm3J1VhJU3Gg9vALC",
  "key31": "5j59gJPC45XGVbMHBX54JLMV9gsnDTeeDQKJiJ443nw9MRDyBBjmpfipGJV8pRL5dDcxehrcAwrNTczyVExxfNja",
  "key32": "5728SX7rzTxEF8VMvtU8H7s33KBE2jbRS7DPhsaooLFjuyGnMRsxsN1CknciErKsNYDJfNwP2vaFE6cbhFu6BBi4",
  "key33": "3UUPkKPmhEXjQttvyb7k5TxRJsD9C2oD7JiGWMPsrNTpHYGX9WQ7jmjNmY2EnRjwfDDidGFuFkJrZ9D4wRn1Tfj7",
  "key34": "i5AQ2mHxySpB4ikG219S9wsQidYw798JmBMhbE9aMqWSpffULMC2e8h68APT8v349uZnfZtwY4wAr9CDttmRRAe",
  "key35": "4hxT1tkHyPj52crwnUi7S7sYHNfkZ6n7v597UqHDd64ZeG7an639wEofdsHQ6hMatw8AoJ975i82twR9cFuDFnjh",
  "key36": "41pswZmpxXYgxSzdp44462JNTjFyirHWkjufDb2BnRWovwsMtJEF8oPb3Mc4GpD8CGKgapyV3jmaGox993DP1wLE",
  "key37": "3TgF4KC2oTsqrejDAN9kt5X8W6SxbjaMJg8y8mwXCGYGX8MpmLzBPzEhawKvkjGFefwrH5QQ77BAnerUKY44JXmX",
  "key38": "5vrr1wrmBGomGmYD6ji31r6xmU4hkex6gXX1FDojHPwov9ePFzh2x8BkertqVaaGmE5DkyBf3C895mSDuzMPE8du",
  "key39": "iLr9GD4aG1kqU45ShE4aSYJUrFXxDzafDGrYUzu1unUxdGn5PschbJRNwcS4wmt7B5BUfB9qt4ur94tqLxwMVxN",
  "key40": "2PZ3zHkSs1wQv9NGSuaLQiQ3jJEsqQuJzHycNFTq3ax47ZfsnBPj66w1Wfr4VC4U4jtgWqpr4uJUp3P1ZMY8cW2e",
  "key41": "3w253CPvo8HMQU6fs5QwT98yzYcBqZ6xrVK1qLfKCwXonHi7ZxG6o72YnHQ2Tzx6kVFQaft1AA8AYTsHz3tzJMZd",
  "key42": "3aXjNHMCAvQH75Bg5YGKNdTLTSvCPwCoKbZRyBcNmB5knqQS5RnK5um3ftaN41e88v3oB8xjcM7ymJtZ3YoJo8U2",
  "key43": "48KhzGefU11AdS8xNX46JM18CnFTu5z2MNnFGA4vkwCHxvwY6HAEwnsnLEwEHiRtDcNoEhznYLQzYT7ePR4SfULo",
  "key44": "3JtRtQD1kfMP6zGcYsYEZN1yuPkXCueyQD6JhrHhjnKjsFrJCXBpegLkUc7GbJAZmocMhkViPxiD6FywBvxp4CKb",
  "key45": "3av6z3sopQ33fPPdG5DrNXxfzSNUbU6VFkKV1EVhAmqBV1fjtcBHqLG7YHPYwxqZubtH98ZCEhhzPSVuaCohD4Tt",
  "key46": "3viJ41h3hXTjFkqYcGiTWsPob7fL4HaN4QDDpsBBNJkJq6xdMrYpYJbdVsuWX3QDqUuoRNCCSQUNaLN34rs5aWx4",
  "key47": "57Qfe3CPy8GGrVFgMbMyYvWBuzsiqSAo4p2qMRXoZ1utPA5wEuv6cfC2Hgd6jKSG1FXRefpL3HhrFwu7EBTRDRYc",
  "key48": "3tfrkRp1YjxcNi88H8WpkQKKsDEHyE35oiwT2oCtnGFNfW8YAELDnoFoxVEeWeVm3DjxdHiDMrXG8JN3sdQJpz2d",
  "key49": "2HrLfSQfFQrXFo165keVLvFbP22BCDJSXjkNBbC7FJ21MVNmbZD1SK7AsAkbU71zrPUHStYKuKmGETVaZW7Wk4bg"
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
