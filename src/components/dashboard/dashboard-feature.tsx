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
    "xQWmb3qB6GevYxJ1psp553hwCCV9Z3eLQdr5n1AM6SBPcdGM9825KZPPx8QjFsyNXZ12H2RNUWU4vfpF9PXABjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KUztRb7zVSh2wbuk4REnjFwRLog38bKQRUJBYZcRBSAcF8XCMsjeZFCcer9bAcYbqp17BG9pUfomwvus5a9sGoj",
  "key1": "4hjWX9gcfq5GwATNmiXvUrZRYS9W6XwPV1UY74TK4yMKjVA28VYEQWYUVzARqNDgPDdznsykeqz9LZ6wV4HR3bH7",
  "key2": "4S8JmtrNcVWbc2HpTE482Ec9yViBZK3hC7bwkcw7tqRQYHZf5t4La1dp9dX52D5C46Gs5xcLfCNJn2itXUbccJwF",
  "key3": "2mAVRL3gUFt2LY7RZmD3Bs94jdekrGWkmZ2d7Tf3QwBkhZoJnYS1fDcF2F5WWuvUygmdf41NSYvyBuvKBskBKCZ1",
  "key4": "RuTkQkJd6rivuA22reATJjokcLavGrCvLohUxsGFeQLQSJ9sPLCzsgvdaF64PA99JahFM8fL9NhPmWTJFwmRYGw",
  "key5": "4ZhNhWVn9bZ1nueKqGg9FmAdGPxXHys45Lv5z8oLEawaf8zES9w3HoS32tgC7z3Gja3c8smqVakibnVHmepTX39t",
  "key6": "2kNxtRWWNwLXyd3Yop9b1XwAjUMM9KjJJQm2gZXkupFhm1Hmcad5cRDG3VLi1Q5nAEgZgaNj7MofiM833CSrFYnz",
  "key7": "5S8eF8GgY8iXVvnfCVBHLDxU1GfEKv7J7Dxc5FAyKWj2Wv9YpN7rGMFHtaBhXSchMV49ud4zS8DQxcbC2QqNfNop",
  "key8": "kG7JC2NgD7WxMJsRXjctqkR31V6jThtRVgpGo753KbKiau1jVbJ7NdzeWQd64ysNUCRnUSg8zUi1LyDyPscRY8c",
  "key9": "EhccstoNpzu1rx3rLJUtg5CuMS9L7EiCQV1K7NzF8bjDVFgN4bQYh4SXtr1uMysNUHiH15temFAWGiQBEED6E9y",
  "key10": "4x1KBfyychsYFqs7nD5Cjk16WXuSjjgNtbEHcHJQAphZc95Q27fU7WxNfv5gwspVccEiUayeprs2kDaCfxi7Qu23",
  "key11": "27JKwzstMwqzABbt1gpfgVqjeCSNMrMFxo8MDgwfiT87P3zMFhHqwA9fzMgCK6gushwZNQtBRQ39n1RKuQPxXK92",
  "key12": "2XqJ4F8CkWjCsKCP94aWyTryCh2AkCT7dP2ebCD2qFSisTeLCB8USitDJ81S1uB3JDrot66GLH9wb5bDVy7VdKWE",
  "key13": "4ir5HAbR6BP7sLsW4Fmm9JhqFzSJHtxLut8LvTZLykGdmJNMWwa9ih2it4nn6rwhCZjXX9fFWtNZz8dwk7M9ZKLu",
  "key14": "35dqpTfYhSMZQHXHx1iU3kUAoa4iXJZs6pEcvSUj6jAWeA17rv9xCk2bPkP1dUsRoMGQYepQn9P5hBhoPYRkm9Pt",
  "key15": "4yPUpmhSPcjyYg9bh5ypv1to341xUCW6gTG1nuDbzWXL3UwqJFuHPDWADxXhq8Y2TQKQ5tyaPRRbXi5wXLSyHB2H",
  "key16": "PVKYFRUHr8zhgfbRXZvhsmv7QCJp94eoBUzz8ifYNhDVZYKctnEeTXmNtstHmzrUDYQcfb63oe3mMy7G3TkfNxt",
  "key17": "4L6Hp6vV6eLcKRvq2Ra8wkjCNWRjfAAvKstfrH5CoyyUH5xXxeYyBcgrckccnBiBbJ5Atgi5e6muUGDMQw5NAFKD",
  "key18": "5WtAGtE2QcQJfqERLda1aKrybWWXLPN22iKZ7oeRM8XXWmj8eEQGCpzWMnwpLmLDeoVd7skAWdGTHfQS9yioq91v",
  "key19": "5q6hMLmBRaZvuPgLzEfJKkdxSbBQJzb4eQBQSay5dj9LoNv7BYp8sjUUNRqQEA5tE7mxXz9FxdNFUbY3nVgFmPxW",
  "key20": "562mMvRZFspVxruBJordNFVSokopHV7quyXi96rsHyfdCYDcvhRUrecwvYQeNA4g4xJ7NmT3DtDtFgRY7mMzr6e9",
  "key21": "5hwe342xfsNn7JRakNpDJcZyj9hMbni26XTKCaF6dT9ZD6ZBtXSCG4AWcaqXUSkufuiESDeVJwDEgS49KukjZdLg",
  "key22": "61SdUGBdLAUpuYQ6LVrgkneFRsbQQpGTwn2fvYtpNEw2ZoFfiHFewitjZbPFVYAcga3h5puxaAuj4PoWzvw2EJ69",
  "key23": "5MZQShZ5UhoZM7HxTSP7vYwJFLCej3XEW6nNN4wZF5Uj2g7Bzgr5DTs219vX1k9SPsnSNYVQbVve5xfTMsJghMxc",
  "key24": "5ik8v8w6nrCqdfYX7qVyd3UQ9By8vWF2SVqKEhxxRvJt7bfEpQbPy8Nat9VZAWxrxrFjNqb5Jm4ujqZ9msvoXDfY",
  "key25": "2uLfmkbahqds3HQx1oBLfGNyUSwWCFynqRDLQBKaB1thSwDALCVGGkogiMLLVa8kFsVebcvaNsX9noc5ZEurWWHT",
  "key26": "cUNBnRsBFwa9iTnp3cgF8UCwJtNYkQyVKb3krj75BS8p13v6K4VkNYGgeVzUsxhK5Sw9xQr3rQXM9haD3BzYF9A",
  "key27": "2TVJktGTwqi1b1eFPL9Laj4MYJB3bmoU1pT2xRpNMN36nk1cyvoB9RK179p49zYdbPEpmkrsoPBL7Dweq1HbFzXJ",
  "key28": "43TD86pgmp3ZodCegKvHca3dnXNnQMAuPy8cZMxWBYFbm58pVwM9REoMZAr1zXn9WCxE6XfETq2yCmaKxoQRffzX",
  "key29": "5NMCkwMh1NXQZbQCifCzbf4uZNc51azCQCuDLkqokjoBUiTX8xEpVaczNz7JHfzULrcLUvoFhVV8fd49C3HadeiT",
  "key30": "4NNSL9UchsrdJK6Ge76KaNWkwru6F7osmCwcFW9QeyAGwoM5DdBxE3GsyCrSU283AVKt99AfNciirtxKAo39DzTp",
  "key31": "3XqY167jXjGdd2XULAXVLcs65uEYYed2JKGxxTwvsZEg2DoN9XBhwyaUrKSkg7akZQUffcb49qtNJ9KieB9sQe3u",
  "key32": "3KAHmNVbwgxZCiMT2EZ5umzMyFXNHDo4enYKaCV9wMre17DA5mkRc6wKCSoPkjSyad9E32rdXXRaytunDeBRA9dB",
  "key33": "4UuZgsFSKDjGjYJk4pJo4P6Nas7BEinC13mPscp1zEJaJdJrdFsdWzL5Dsdf3hVPQAhiUWQDSrjqjdKJ5mRHb5gd",
  "key34": "3xPScZQZydAdxuFuFkQGqjeD96yZ7RbzvXgva8dwXsNBoE6cbAtaBq3ubQse6VnMMyYrfaf6F3p9JcyQMoZEr1WS",
  "key35": "RG13ftfSYfMZUy2sfFaStsqmmM1BPnLPcD6UrHSDuTHswSMzuSqJPsfLDEqw4UiLS3C6EkhfqrbafdaJYJ6NKAe",
  "key36": "27fiUzyFc7tJQXv9rSxPAN5ujnmifQj92KmAEKFNRRHodb9NDyR71ehJEKTbofTzi1yABtneMqKxmQtojesW9822",
  "key37": "d4S4xPapikHpeY43CAkVHHG1vgf2Ewxis3ZYA5ZjpH1mw3usfxWFqoPCsSTCp9oYmAicBcWvU2eBQALiQNCCKaC",
  "key38": "5N1zXMm1w5ojRpZq3H19K6RSLqetKhe5Fz3NYqAcwy4YqHN335qXAtdAuYqf7JnpzsM5qotFAjMq7W6NRGtAp5P2",
  "key39": "5vhZuwnAPwovy1Z3vuPJ2s5MeCwr5RYNWBM3v9eSev8tLHgH5Gxti4c2PNG7MoHiuQDMSaRRAwXERkBxm3UJRPHT",
  "key40": "5KfDC5Qu7L9ECmMZXvtPDarZxMCf9UtcM3BDcoV572DqvzkPDfLo48pZZXHHyMYapntu7jVtvkh3ikM9DUedHwZj",
  "key41": "5vjsDYAGY3r1C95MuP6n2zXjfZWhFz7uYv6K7eUnfnqcXKew3GpmZw53zksFjic9nLYwiiH83qseeCxZ9oAXRk8n",
  "key42": "mPsoJNLyyd683vY3TYdnGX65fS1qyXaMdEyZMUMazoiGDnTeuvbMLS37gy5wfJ5Fqr132SPMzr9nPsZmmYUpuZ9",
  "key43": "64H3jUy9d5Dy4k75SxCVEf5WWyjQ1h6hH8GuUBY3AM6p3ghL6RjYgxpUDZLKDeVzikHqWoT9WX3UTAuBZUvW2LP8",
  "key44": "3tp5i39ye7pQuQfjvfU8z8XktixPCifdaHx4iTmjJDnvN8h4Jkfd4nab2pWCdPJWB5L9Jd9m8Rb1dHyMKSqpPcS6"
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
