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
    "5LsavYBCJS2thYaRxV38EriXomVag49Pb2h3wXCiqNwXy5k87n6f2owfdsEmvhh3oV3jP5ie3trDz3XNgdC5hrQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AU1qTPc16nG3m5fDtv6oqgfLA3fyqA2eoJ1syLWHSvumsmMBZzyVSVj4mFanAK8UuTc9YX4Dz579fYpEzNdrMfa",
  "key1": "5KTvdDMs2bHniQjUBE9nmALGcmF51nANyKVGEfYtYeCTTqsEm3tCbQGN84qs9F4dFv2jJzrCp8mqNhKX3ZwdB9q6",
  "key2": "4tZHKQMbjbjEaD2qWKFkSvpV6w42His51JRTdyHuxEn5agX3wDQ3oX81K4YrEbcq34iGtsjq72zNJCF4hCYqjZs",
  "key3": "646WHW5pENTXFdv6nVWwK2REB33Ja88rGdoYmpeGQAZFUEH5RxoeprswtkJykBwVLvLAtVooZtYooLR3spEFgMEE",
  "key4": "4boAfsbdKYqtRK3o2UWDFUBB2tnRVXpCbnvaQBYmPdv4hGkgSb6yumMyd5vJ4X99ALACuQdUbqDfAYiELKzLQXpo",
  "key5": "5ZCuWh6zg9prNJH8W2iBFwD2Pt5AV4D1XoH8AnHi9PsQyQGw3faoaFPMeqDocbsL2zpovhqsTgpx888YyEyGK4mj",
  "key6": "2tgQ84H7SsMJfttYvEDQYBznX74fjqpjws21gjQmkz9o7TyJrEQKaNtpKhLuU3ZjMFp3LFAnbt4ZBgLsMGXDjb5X",
  "key7": "5Bs9Nv3kcm2rdAVvz7BjZGJ21Sf2Cg2T49gsrCzH96ge26xQ6V2dKU8ya1z4DdkLd8TioX85KPsMkDojzYKQVCbx",
  "key8": "3iUc3NMVBtFNtRTLQpo4aHyvrcZ8TXBX5bzeDqTXKyGmy2yxKbnje6jDC2XYdSjoWAL4DWMVJmzEezJkBcEpLPrY",
  "key9": "3qZey6hxwmz9PgEDLyKnFTY5VCsmvMWz6p7GW7tXSeMFdXBr9qRDJdWe45T4TkPafTLzpST53DEK5qpuME5BKANp",
  "key10": "3aSJCjP5VGUzvtKGwQs2ymQeXyRniQyqZdv6ECQB9A8wuQkK2oFPdwH9Xhp4W4HQjgX98AYskVrtF9wBa16hhFTs",
  "key11": "513m83WfmdxcB1FBt841djxn7z2ruxhxvcKYrBxTXES6CUfkuqbKRCnsFP6t2UG6KAt2JAC4WTQ98mAu5RuLknuM",
  "key12": "2u5VpsWHjuAyGF1tyzBLbe2yek2KpqbSSo42VwKrJv8VvPk2kAknfqKY1QznJ3S4KC7QE7CC6UUuf8VjQRWtZWMp",
  "key13": "27355Tw3zKQQvdYNVkb2mYvNLrNnTQ3PUQwGvkBia7eiCQpvFWKVG7rtMdfo4FQ1QXkE2RfPCosayHvLKgGKfi9D",
  "key14": "rXtvjNJhBW2gXDW9cqJBdwMNkP5LoQ9sX9tn6diy22fU34DtDLgdKoBT6cUbWGi23kod1vDb3P4oqpgwGmnJsvA",
  "key15": "5wwLR2Rw7cxVzYRfdCvdpWZAWXTNRfPtGUop4XQec2CdWEZxhLE9Ycb59GxgKoqptjjC5MZ9FcyXQtR4qLASf1M3",
  "key16": "25GKFhA6Rgxje2A8sULpmDajXTR41FxoYg7q7QGrB1v57qviQ7KTLD68WMTDAnpHfxGLvjLPniWFpeWRfebNNntx",
  "key17": "3BVjLDv9SVMZgojAjP7cXwudRnSgwh9nCtsf3rU8ivWNaRqpSpG336oos7Fo5aC3n8rZgGFwUfQYYMKftJtM3Ecw",
  "key18": "2D7aQcwjuAETye7ZSahMRrTKxLraEpare2BPSLVVTCoVk3KmDL8zESa9SAyX8bdunJGpbp5bCGf5iMF49ZVHND5H",
  "key19": "efMQg4hn6hQTtRbguHedRLcoc7QsE6rJXfhcBMcuVRqXAYohVnyRP8hE3SbqBGzH5q8HUsodVHTg4b8itW6RbtJ",
  "key20": "4P1krnvv7gCB51azVHKJYKANXVbSSpoXTfHhN8UVqZbu8BAhni7K59FyoBZxRsVAzS3rMtTHAZtBFt2XWnetJ2CN",
  "key21": "3PjgwYSV448jZgZjhdsTUMy5SrWkAd5xQMM7EPpAjaKExVzQx4AW1tj5gvdqstLxwvyu1tRcYWq1raWXmfgvZBW4",
  "key22": "21hmqWDMBKsiTRuy5mY3vt2udaTir74YgGBA2DafsXY1JbBBJ3edWoegZ9A2MFXKYTRSCXabnE53wUGFoTkyZgT9",
  "key23": "5kDTeaoAq3rBj9oyLENiT5ZdXey7WHxqTnZ7EaVGe3pwQuPTJ8FeoEfEJmFeiLmYVmRqK7s2mwWExDEfNGkJN1GG",
  "key24": "51eqZBnx5bkfqiQL5HCRAztx3ovyhbBi6CjSy1mcwadUUasqBngTe5fdxkaWZkknuxaq4vspd7ZQ9HH4Q5sAfE4x",
  "key25": "51GebuYupbW7hfnBQQ7tU2jqsfYW9oiCZGDA9otccCsqn9tp4FcUrkfbG28z99Ccka7AsPws5ycJfXgwAFV6TYVh",
  "key26": "3p9KDQLUYjPYXDegGz5CNBa5rX1FuJUbi1eQ3oEDa5nmoL5VeArZ9UidPXmSxgPL2hwQxPRtzm3d6ekTN7rAB3Wu",
  "key27": "5jYajbeh5HZPSDmVxJWVWmvWfCmG9TmnKnbep1WhERj3v1Tc2ymzKazU44Amt5JeArMM97tq737yjdhB8YJ7gG9i",
  "key28": "2uVhbJyXg3CA4BZKkNywxFrgvSEW6LREy8rjq1VwF61vGFffRDjAHRfgdtmUWW8UWrJEJhch2RSvtoRhk7gMqQgC",
  "key29": "tWhP8yAnynKLTbyxFYSUBNDn9AaY2xKLzQaMXviSZSUPxWcf1fy9aqMdSVBzSsjzR3Nwh3C332fZYTVZwib8q6H",
  "key30": "4SK3CULDXuBN4LT6W2tk6BvurbXME1JYHLwCGw1Z13ApUWGzjye82bEM7pYnv6Dyx2Sv8JgrB2SJpTM4YZ2UbwRX",
  "key31": "2u6EXubNQd68pfYTdHU2TcvwLZ2vRgboDk7qrdyZ4yDYzYmkUKsybHGTQrB4bvoWNNDYvvcZ9CP5pj1GfsUmpkv3",
  "key32": "2A7o2uQ7Nm4XV48hNSVTY7dpuvtu9gtACGPNSwMQ3DoDbWD8Nscbh6fSMNbk2ERFQ5dNJCyunbJBzG8EjBPzinfW",
  "key33": "5Vi2EQgnfbwKU4CfzQAzcnR9PFsqgMD9dFtnivruU7YPT5GiV2mBX86xHmEuhsTBZDs1zkQHtTahsJW5HPcrhGAw",
  "key34": "bQxzJdbe4jrK45aSJKZ5bfds9Txa6W8tPgipRttbSdpbZxz4acgLAAgkvrytejtYFpbrDygTEWVKn2JUXuGWv1F",
  "key35": "MKDfoSEC2egY4wPqRD6dukZpE4GhBcxrkfycWRpvYHYErdpQjn1L7zmJg3RCEWBHfnXBjQu7iTK3adZ5Y9ZWHMp",
  "key36": "3HzVBTLJVCLrQ9frMRyrsBYaGNp6GmHYgR4TqNbTbQskVBVXkapQmL8JokT6qzcmDqZ6ja26MsPNRBAKUcrwCzWM",
  "key37": "58V1PTqRK5euWfTCKJnWxfB4UC2mbDFLJupMMJ3QAouuGrjh5bgAt9AxtmW5tgQetcKeVGhYRYkCy7NRq6tp3wfq",
  "key38": "5B49sQf6wctu9ejAi4fu7Ct23HFg8Zg4eWM8DYPoQwtwHBN4Jvp93f4ntHAX1vUJtaCbdYgQoBF2QGRYNdWB2qmR",
  "key39": "2dyJVsk9JyoNiAcgSo9uVPCfJsH7qXFqL6q1uXdZyCYVkM6kGCs44b4YrhFf8eFMrjQD3HEL1GEQ98WpUYXKMFF5",
  "key40": "qJ3XfYfVvJXyZUQwawNG8eEHDSCDc9iprT85Qjf7nMZdjySHhs98RLjdLyCCQqeavEiGgrBWpki51ygU72eb3Jx",
  "key41": "u3ShSTXdJ4aeY8sBvBCqW22HPzMrDwsuxmbtpAzCXzKDyndoabVJ2TkkZ32XnXJBD5bsCA68Vn4BTWstMkVf6NV",
  "key42": "AYhGwXzwGcwTgipBGa2Su6yk2sKFBvbpUiq9EKoufkXpfZYjSscsFM715reFQr7Sgo6nEwFE2BjJSNYxzwcWJC8",
  "key43": "5ZotRCtg37cT2Tu4HUZvbyonbga9pcX7LNDpoPqvktLg4vtMDpQnq8zYK3GZtT6WoWxorunuXVG65KiRTn6gWhUh",
  "key44": "SYLHLVz6r5QVg8FTFcaffLF6MNDgz4sgKuv5wMgK8o6cHeL7cgSLJ5HM4WAhGbYbpwv8LZobtZRcybzWDo1rEwK",
  "key45": "44D9qLTbeGRueuGpz5wvXGS6kVBbSddqcW9bGvu4GCftpyyFNCRii2bbQGYpgRHE7DJiKvmU4qUaGmoqLZhXQq2v"
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
