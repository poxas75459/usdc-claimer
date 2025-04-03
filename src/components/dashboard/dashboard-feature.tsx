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
    "41negvv3LYAgv4jPgdURcoJXwUxxMznYPE6BuGXRU4n7GSevZnAfmKuJnXuu77AR8j2Lj9jRZr97Gpi7ucT73nrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wb41gv5NkwYRUvkge6QAvdEHmcECAKoBFBCEiDVCu6kCqLGyoNjvuaWRuzXFWqsHvpx1TkDAQ4MFiKjGMBv62Wo",
  "key1": "4rPqRnUmmHr6ZyAWy6v5qX5gCn62cCyTfNQuoBR53pceUdjn4UDnDfpwe21DeML3x2rG695PjxzMigyBPqq6qf8j",
  "key2": "StSq49gE2BvsdtFQwp6okRBXSjFBUqYqgSobJCyfEMrQKLg4MLJwACKKSGF2EAYkiHKaHmYyuaQBUtv1TgSq2A3",
  "key3": "VKiuB1PQs6d4rYeUmSyQLrA5bhTLMsiMcoLYrNhL8hzmc6ViUc4iAZcsZ3NeQVaW1MFho89wUniB8iGdT1Kgxij",
  "key4": "4ACL84uNtmL7f4C8TkxPoJa3agj8gpKV2kix5qtdLakbsA8SMG5wcB8rELsZUJn45H1NW8PPBeHYFCQdHxMhE4TD",
  "key5": "2k31N56XxAGNxsAn6qmNwEcLvP5xjBUMbozPXN7PBxmW1bM42ZwZUL6XzWKin52wt8ydkX6GMr6h6ucmfWd7Py9g",
  "key6": "2WiU7JsMRZD4mi5e2rXjVqp7syy5J1LrBagQ5kpupEp1oiVwGm5XEeD4UX5TndYk16jiJUetTsf7jpUK7fdMNRtQ",
  "key7": "3s7Q1kZZcH9zXJcBw7vpd9Ums9dyGxmY4ArnBPoxEykLn8mhhfDoCWQDWir7GSWFHfG2bG5TbdRwa2MDyFaazgp",
  "key8": "3JB3oi6tfXbqQXRrTVPoiSpqV6g9pSiSc1cTrwqiNLrcURhE5MkPXeUbNTNU5Npii4bYwKRxgVAzLiWvcKmkbMnV",
  "key9": "2mWQH9Wvcj529jKdev247j2WYhTU7imNNFwYxhmgM6LtfykWxnZvWAJ2BmpHuoyond1Qh7btAKJNKsdnYcdMfmhY",
  "key10": "NpFScEt8MsFqhCFvHzcX7Ap1w89z8B7SP4uikD9oAYtKDPjw64vZN2DSmazYmcDx6HDE3JGGhd9XfoNjhzPKkcf",
  "key11": "BcwhoXLJEsH2meQFT3fetdcvCSXDW3FsXF9SP7k6ziNrCnTUQXQ1L7Vrqe6c9Hyc6xFTeyLdBjv511AUpX661fV",
  "key12": "PM4DyU8n5ZukqhmzyyVHf7sdhUe8yAwEDsRCYtaoLoJp16ifwrhgUvrYFZGp9vTdJDTnTGx6qYkj6bM1DhXHVHN",
  "key13": "3kqXaXAKg9VUhJpiumMevtbJDnHCkv4HAHzF2tjk116Up38RJzxe5Lbx5WENKuh7ku7ckLhPo3Bsy6ZB9BFbZbW1",
  "key14": "jk8uzcuS3ZNuSidM4nYVWiDsERxYoYpeaPq1XBuwCe4vLt1cfn2AAsFLfs6dRHQGA3BzMbdwcbxwZvGevMbvS7z",
  "key15": "3wB1sagFgA4W8Q3KbEx7PTgYL7gPBpDz6pwnNK3hH66t14R9r6c9GCX5Corqyrh6uqWtEaxs6fQ6VEGheYLrB6Wf",
  "key16": "9Nqqx6Jwo9oUJprFypf21v2psvkmvY2C7bRvYeH3JeLpTTCutxjr42RgrdWq15gHp99BoxtgL2xuSGv6SMQk2dN",
  "key17": "AZptz9rLzeNhUSZQF8KTPJJwbqMHzXMgnfBj2xnd5xS21YMydVmY68YNC1ZGtPNqDr8kQ7pjhka3eNZdA7yEYeA",
  "key18": "WWsSnYYxcJxULhEXAUQ1hhJv9xKH3Y9A2XhM1tTjRw6V41zCANadFxZp7mqdRtCa3jWPJ1S9AtkgMQhhH7mtPzT",
  "key19": "5AmB1gBCGtyMFNXd5iS1sqd2sgSomm4GTftsA37ay5eFsTdy99N7cdjwSt1uGxKryE3o4ydKXKEPDENKEthuef3Z",
  "key20": "2qzk3TBYjevPsFhUV5sGhxP9YKxq5bTBcqUZSMnoz4AWQLZJDqmsjLV3NVN6ySph6dQxS8Ykaynhfp7x1Knc2CxJ",
  "key21": "2R6fRiiPvmD63GcvSdDSfLY3ujR98v1VD3PhnSYZkcrr1yTqfdryLjuviZ8LdzEvjT8XiHexZpk8B5Zo3ADNx5nU",
  "key22": "m2NnMnxjtPUwabUcQxd5598wioXzMkd5VA1UKMnKKcmYT2wFmzPuX23eZg1eJQ7TuYFCmSMxtmQife4tDCWGFsR",
  "key23": "3m6WtfjPxcWFatNdNtA5eKgrVoHQPpNpWxzTTy2eDKKQJimoB4rphAiwoMnGAEvUzq7ceAVF8qNr7pzBA4UMKGLS",
  "key24": "43dJjPJvuDMgiDTEf2qw8kbgzHWGCnPfjjYPj3cYDVswZQ5e6WXvUS5tauxHYbEmBr31xDbi6PG2xt7LLyrHSsPi",
  "key25": "3cAo4r457k8X4TooNAuFBNe1ab4QLFQJ9Gk6tYRX6Y4b82UGsTXuXCAEjUmkffGdF6WvDQtuDX64EwLktvkNAj7p",
  "key26": "24tYksQuTdxybJG3M9Rc5Li27NhgBe1BKqDqvPnA3c2RwWQCn7TsVsqiHKU313PGgB8svnVPzjGMBgG6XvWhnwNy",
  "key27": "g7RbNyKT9X44eT7XdJHRTELZu8mtawZAqa7QHv6BYHp7HRpYyGHaVeE9r6NcydAhDxZTneMyWgMF9NJ9M7StwCJ",
  "key28": "4KEqfvM7RYgbZtkmTPneZt91dyEQZCtRyifUtvC5MA2z9Wa6pofyAZmWSERzAjX9x5Dc5qFLd9ee3iMisvTkVRrz",
  "key29": "4iy6YgzKUD9v5EckzJv5de7v3j7oWwLp5nQacJbnAsnsjecMk4iu2udGc1tgQr7JvfKvS9hcfBEgjnrr89JgAWqM",
  "key30": "RPaGTMvcoFMnXNKA8e9HipDc5yYp2r2U1tpoheXVGxXe3sQg7nK68a8sSpcCfTZ34r3ssnKwKzpuWj2oNbHar2q",
  "key31": "3iYdKHKV46nF7jdSPReacoVjx4itd9otrzedsqfdHzDfQ5SHzZzpsBAup6uJvJQZ5XavVQQX7LvVAX7Sq8N8eAaA",
  "key32": "4rZhC4cSMMgX68pCqJXegw4RnZaoNDNiEYbn85k6PZi6XFT5vkmxavh59B1q9QRPNi5qJTNBq3QmffFZe8F6GQHR",
  "key33": "4wNQVcGzN3iW6WbdM5ZEpuz4bHEncXBSn5CyKLUy3mkpBNF82xwLGrgXMJoqgbFYGDnvxERmui8qqKpGgC5QguPS",
  "key34": "2yg2Qmq27jYiEvtEvFC7taUg5Lu3fK7US1rR12YT7NdAmjqbqdVhKLyiWw42nkWDkWQex9kww9dtyMBjbt4YiDLN",
  "key35": "2SJJMSfVUqyBXNvqATjWeiM7X8bXNcc5zN2XsXFWwEhoHeWHJLbj2AQyhp6DSxveg2mFrJZh8FgoFc4vEn1vQF1G",
  "key36": "3CbFZe4XpBxFNwh5X5a5k6QNQMkq3cAw1F9onhhN5hG1bBRL2LraMadfGSEJ6kMLvraJv2Mnde9QMhrJGWPFhdM1",
  "key37": "592tkFv9GNzcuP8QaToaW4a2GMGauGtjrrkiX5An8ztBKnUjdGrVHXoebGsEudX9JAbSzjd77SnLdGYKzad4MMJ9",
  "key38": "2V7BFr9G4mSQrxCGKmrpSoSJmadoXNyXCz6kRBZza2AaUSiQqTWS2N2yWybKV7vABBPKJfjaZZsEhf8Bs6Lgv7SK",
  "key39": "5777k1c78TFLfH6Yck3xWy9EGZXQy4zmyXTzYu2d3j6tHFyvs7tm596kkEdyHox5S4XmYCdFtJToGfTFGzwYgwj1",
  "key40": "5Qk6Hj36HkaC9RYBjPVqU2AJMat1939bpMNqCbfcmZssj9vHQXZSeWQBP7mLr8UmCiA9BmuNGU3myXjDnbtva8vU",
  "key41": "48qE7eBVcYMJKu7fdqWzTzJHdXPpCTsxTfbXUcJJewn2JYbQ4WzEgNcyJaHVVkniEJagwb9cu6Dw6XdM1CQuJoq9",
  "key42": "2ZvbMJsNtHJj8SgMPtT9c8jAE9SngieKwgyDrKCNUHHf6MLAjeY3juZ7WfUSQDWoYxp4bgTVaXpvGRfoLv6gSSFQ",
  "key43": "57LZc7Y79PYF7jRje8tqeKQeMeRvTxgnLkU2Be3DDnKvHDLNkuc8Sb8d6nzBDdmgY2JUSjocFUnnzq6MEHAVnqcU",
  "key44": "2mKte28YbHmUGojDsBqsKqzgR23Hs6E4LMD9Z9H86TMGMza4dx8QfVgMrdthBr8C6stGNKbxdzrtZTUGD6AqeZSc",
  "key45": "3xf5gGiY1VLhrc7CLWYk1j1Qc1gsc2ULRxxuJ9qMYVCwZnfsor8F225UNvMPRAoLNMob9yqmWf11FB5yAWiykUUU",
  "key46": "3Hsc8PZ2BbpK1VvyUEHht2yeKKditkjo6ha2uF2FNUJ6KuXYPPmy2kJzAxCWMN8asvVM9Rx2XPTbDjDH252Fs2yj",
  "key47": "4UAXXh9urxh2BmsC9HSJDa663yHz8K9FojFxUWs6espzhPaN2hNKrb2gKDwYVxmNeRbcQ86CZ5TA397XBfdUqra1",
  "key48": "4Nxukdje5oZRwq7Gev5La8UjtH4X85qyYqp1mHKerD8hWAMWBBQ5GUQcRdWHfamn6D4jcXpKPY2khspEY8d7JePP",
  "key49": "4KMLCFMJwwBRdhyuQg7YoP99F33dWGmFMENTnsSZ6XTRjbs8qXCWaxWoEr73j63zXeWsegjqVY78tfibKc6hg1Zx"
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
