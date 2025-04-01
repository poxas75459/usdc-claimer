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
    "4s8PwNK3tAqS22GU3oGAWEcuoG42CyQekjZCksyTER21pofKdT3r2EK2ybaBXqBRehE1KPb1Drnzzeg7Le4ZucJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KBQkAamEo2vvGAr7FgY1yWjCzYt7RGxa65sZadYrkES7tpPGASDQtd89xVdZsnrk6yJwHLaJdLSJjqq4iDPSpBW",
  "key1": "4hqh2QkkJbHa8MjnkJPUDNjfSXXnEGR8EguV8PNgirMHRzpP1kmZEqu2jMupAcMjtHxVPq1ijDLVBm3W6T4jTN1t",
  "key2": "4guavs5rJL65zswffPgicw6ESeVP3xEhhLWYHg92a8TatZ2s91euZGqRzkstidy2pMs4Wp346oAw7jr8Jzwkqvo8",
  "key3": "4cAbyLDHMKskspbA4mA8gCtD5d2epBK197Z87wX2pVJGdUgb1Yqo4YtAQWeNcVyCuVeMs8jjME24Da5fTstbHHWr",
  "key4": "3bsaHYUW9yjK2M9WT7iq1pd5Y2Mah7uaTBnrjQpg4UG1JDArr75SLpZL6peVE7KuM8kztS6vf2tXs3mEGvDrJ5Ar",
  "key5": "62qFKp385wbV8yaTqyF7kZbUj4f7mJ5iAcxdu1zsGAZSM4yStJdMzbHZGGE5HJgEJ7gc9QLyVARVqZm6XBzhgLRr",
  "key6": "2cmVk2vDpo21rz6omkmo34DpE2yFhd8tWgSmqTfdvCUVEHnb7jfXu9RCiEx7Ez2GDz9ob7HFpdcmRcjBZ9EJDgEU",
  "key7": "4tQLZm4sFNWrTiWW2zuw9f3uiDzWciL9JVo6Ffkgy6zfogNMBNLJQ7CgF8s3hnYksHBkECj97wjqR6Dbg6XjqUjW",
  "key8": "5VpezvdXqxeVeETKSZmPbohY9VGtrLebqwphk1d9y88M1VjxcMjpWphAqwDMSi2XQ5Fcjg7hVHGmnH8nxv1tGkMo",
  "key9": "61c3fptQAVUY2scHWtp6Ng3GVHvnccQyaNKwNNnGRScaexNe4VjSqQo52y8eLnRfzKmibBUJLSFeto9T3ZdeSTpa",
  "key10": "3Z2Webr7PMqVJwcXQAG3nor4dyoH6SgcKVKraawhqXtzquS8qXycA7E6eohh5Mm1QteL7mstvh1hamtHvCKNwcnR",
  "key11": "21B7Z5YU5M89EUeXpMdcwenrGnrpUCSbrFVnkGQYsipsHzHTvhQqPKWmkj7xwcpGycU7iiz7ygVHSuqL2eB4j8PZ",
  "key12": "67375vGXU4gXr51YfaNPbVWxyQXBcyobzr655hST1zaqbD6HUPNv6pWv5W3wtQSB9nKcUGCyfSCyS9N74mu1wbTi",
  "key13": "3BsN9tzzdemENSqtxZ4EhLsG4KPivqDaM7ESm295yFakbsQn3PNCsEtLVfC3cSmqE4qNhU7zPrTxueKTKVfRQWZx",
  "key14": "71qfDVofnJyiffYQ6x3utcQZGC2nW5M1Xku3mFrNxVpviCXAyWtcGBxRTU91W9MqYPaZa1zNz8Y6G22os3gMkr9",
  "key15": "2MxVP35TWCEkHDSxWqSoLZdkMoNx3AjL3VDJ3qL3UwU1BirWZzfrAcgw2FL1tPFjhe1EMSKmgYE4pWTDqPSNWEVp",
  "key16": "26BjKcRoCrRvt7j7iLP9jcrN6QYka6CKB7exYMgT99DtzPKYTNKPR72Uy4JVkKAuss6nTMsYo2yxAJi6xxPxo2U6",
  "key17": "588DQzC9VLsGzTKJ3Dh2X44y3i2pxhYwJMoznC5iykwx2AqhxGxp6NKi5K5rSMURRExfG64f91vJTALL8ZAy5uQU",
  "key18": "kRhjW97mQAf9VUnWJ5oNn4QbJmi1LuWZTiY5fyND2gVoQGCDeyMZByiHHZLiFoPvNsbCgtguCGhVgXneyfh1MNS",
  "key19": "2Fyz4av2KKDHiQLY1i5uWWLjodQE9hCCFTmJJFtm5AH7MhhBAs3hqLJNUhLXVcwRwNUmWPfLpYjZ8UXYH4Qg4nEj",
  "key20": "5Dirivq4ST4RQLtxGKCbaXJ9oQyW94q7C4zASEn8L34bWWGUggrvhbPkLVXPQHvhVDwDEExJVJbBPb2HCquBZStD",
  "key21": "2GDKen7mEfuvLnv63QRiGpkukVHf75UaoHmhkJcQ55DSfryyAdaQU8jePEmZ5sA4Hm75assZbnBdx986bposswsu",
  "key22": "2pvwtLGHSfzbySeZGL1X3jXmY3oDfct9aeyizRJZqvm18n3U7hsj16Rg1fNyYrk9tPE2Hg6MrMkQFdbFfCgM4kWL",
  "key23": "4yVUvWWsZHqsh88s59YPcECxqMk5mvsZ9haaWABJR43AsJdj6zdjXjDa3rbo496Aa5aNeVgAmNyTFzoxegtJEQJf",
  "key24": "2PGQPXSQByv69z4vDX6vdHS5uuEipBmoHVb69UYm4BHZMhZyzPZS4rqQAL6qssCY6pmWDqvxG6CdGSpVw5qwMy6H",
  "key25": "3iXoPVU6m2eQb8oE66At6M4p8JWNyAh1wmiJB7oqGFd3aqsym3XeNXgKwjKN2q3sQBWQtiruwAx27coYreNjZVYh",
  "key26": "54M4TKD4uj6CvnQvkZKqSAb6hsy8FK4iMqAGvsbLhdPGTbkCUigEUJm5BtcSvgujHkqS7r9jAiMJW6hUd5nkPJ2t",
  "key27": "5sg33N8mDs9tzMeie3PfWgok8MZ2pxJXeQ1GQ3gxiGcs2bhZEi6ptPBNovhW3KnrGmHRFEerZ9WZof1LG4DeDPqb",
  "key28": "Z82qKuW6Y34gaem5tboZ3fVhKwkwDcZiVFgX8WvD7yfrvAPqXLhNwsTnFqE6nbzmx6oqMVhEN5m6NAEBtXMZB4P",
  "key29": "5RHjqNmQvCJaiJsV4AQWrqiu5gubULjqPdF5PmuGgAHiNeTdhMnFmk5XwVfGX38dkWaNE6vCeohszjRnWzT8mc7z",
  "key30": "3NwvTMskHF236RbKbAWueZSs2FoGLAd8Kh3t48anwhCxvAZfFCNfAoYY5Tv9HP6zCMqiNGwSzrhnabkYfpdoak5b",
  "key31": "63ptrnMbGcvRDBjtokMc2X5kz7spcCGeHCkRXN3ZvoM4MxNhbKRdbufsZDN9oMDeEaZgc3frU3zzeRufBzeFFwYA",
  "key32": "386UkCgwmwy2s3ArxxmGcHjhrfmSV8xCtTbvEgPJYJX9moBScprnu3on4y9kNmQSEdjHEDvoaPTau35Hh2xEn8QN",
  "key33": "smMAjyGFUZcRtfZHD3J3MXCpHAu1fJWFPEXxPW8nEy6iyibsDQAVXgvjiBaX7UiL6NsiS23qUbBYLgkmjjB9BDx",
  "key34": "tW4xuP1jEgQNbDkwM2CNzmMt4SmJBokrBPcCmoXRruRrQZcYESwWwfs1xcafJe9DCBbVGvMMj8DCRcxKbVBMUWb",
  "key35": "bGXQjFZgw1QozESV8aTBSiYHdhVaPNGPgN2pXd8NHhmGGZzULUMpsCWZr4nzhw4TifTjhBRoouKCXEan717FCyR",
  "key36": "4ZmJiof1TAAuQ6oHNAjHK37WmaxJNdUNqFPvEhULsRWVB1owtZfoyRHcxED3Q5HFdhqFPovsq8DgzBsMvfK3gaht"
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
