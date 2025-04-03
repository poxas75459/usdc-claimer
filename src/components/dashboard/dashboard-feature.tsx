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
    "3yzzCu7sRLtx72yyDDiRX4BMmWGAvUTrntKk5DYBkVpe7AwKeaD36UknDRWFjfEwDsYgZJ3BiytJNanCqN2RUyg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MkhKEzgnGeQao8QG8Vo5MEz4HS9j7dR88hx3ue5URndXb3Vr9yAmpq4xYY5Eb7E6wCKLbAM4Zet2cK2Jzs8JJq",
  "key1": "5Kzea5ByZYW5WBLwWckcnmrdjuuesc7xqHhEVFf2ECZH74NncpcvKjLqZuaKwdq4UbE2wKT17HD2N3HPmZfyMZ7v",
  "key2": "444xGxc3SsTXZheg4paW7VhXaB5DRmQ3u4Za5tJ7mEPzm4g1zC5UxGYrKyyZqeULQVCvREqQZp5LAD8iADnZcqjW",
  "key3": "2NvGHrTDDHwvoVjqnaobHNYobNducM7E4BwWVNqMJqUApjgCkt8TLLNGzDM4MNUSDnwP7WUV7J5B4VCrF5AuTh7a",
  "key4": "5eA7N9yA489jHUcmqtirhcizKToemU4hD3tJq7DVHNx88vBLNngUtrPRjvkW8KSeYdpds13Gb9N5aQ2pxmJxWsxV",
  "key5": "4GA95MLgXUE2W7c97RFzFbK4pV3fHGTgeNW5DUHEoJ9aNvE13x94HN1bs4aH1rq8q6VdxZ46CWLcmwGZxoD1ntjV",
  "key6": "4z3jC5zpNoKt6UesgHLu76rutt5N7ZjtkGEmm2wXBU26WHzvRDwtT9R1AEykRVqr6F9NNJe6ZpjkHBfFKrYRRV8Q",
  "key7": "2crNXr9GPRFStBRgXS6dApBmUnBfd3EeyeeWH4y1fogzXXythxRFeWwE4x5ij37CewdKqm48DuYN4v4R9Sa6pBAW",
  "key8": "3UxidSj7d2ftTDFYrNkLtBnCB9ZqvWDrhtXBRoPhWTW6xTftxb9h4ksuFSoCUdhTo5riobzbyqehcNBG1RJnxBGL",
  "key9": "2hdBWicoSevPK3t2eutSkcGqejVNJ8McP5i9pNADCmeehiMS3cxugWAUfehD5H9gF9QQJ7mdDReo79gL5bdu1iLy",
  "key10": "2TUz1pMGiLsE2eeXwowwStReWrbZVu4YP1Tso51V7zNZBfPZ5eyxBBsR2BfPoJp36iccmFGxXHrE2znuAgu3qsSY",
  "key11": "5HDf9zuQr6cxhKQEttDrMdfWgP9ztQLBAx85NMP6X7A6xPMno3L4ivcSxn9SXBeRBZBiHjz2kq5guj53tiqitDz",
  "key12": "2H3sgCUu1YUemgw9E7cNXA6q9fwLmnSHkK8vzCnnMz28s4bqw26yVM9EFip9WtydiM7LuZPe2TiwidM3FgmWFpUv",
  "key13": "3YEGFFSRSh3p89L7JwGtjExv14as6fuzfbYiiZbRbYRYxuqQ5ntcZoGfmEaDk9nHnNCkRhZfETuZgqipLT41iE3G",
  "key14": "23GauiDV2HGAeH8RunPQJ7bdtt7W7vwpKkp7DFiRqXpZKqN3F53NjvVh2KrLBLFGjH2JxHfjSdKJ1Eq9kNK5m34A",
  "key15": "4LUSKiva5FbgBCB7TXTWcRXRLxYoS1EnuhtAmbipg6fyY7mMi9TNcSaLdjbPUkoVZZyd14t8CKPpdad2uofjvrJY",
  "key16": "aeqRTCdQFXqiMbtDdQGyujEveZKVNbJQrPTKBcRsvc7XYCYfnYQPTYj5YsLWgHNLhTF5NNXr3c6z5YPrMhTMMxC",
  "key17": "3Z1HCJyDMAriyegx4LTbbSrZTKiDag43B9byxxu48auaUhCNwyn2a6CyLn9qQux5AULffMrgV1sHj8XkoPWFBjVA",
  "key18": "XZmwDczWXz7KvMKHjyimwjSh9jxHiEFMDtzqoC4y96KMAqZFS14QVtcYeW3dMAiwvtSnSiKQexQ3MMhjTQqMk56",
  "key19": "3yjHQwfytQPt7LXYpqQeQhERCsUE2ZUXr3UMVQJ5Co5D9sJXvxJFasqTbem7eo9Bx1y72s5GAErsx8SwiLjwZRKP",
  "key20": "5qTTv3HTx7BqKaJZPigtZ7Bs94bLGSWrpYwfL5nTJif3emHFAom8bLx92zZEXd2CrUigtLTigqukVDAqpjRqLdcA",
  "key21": "4L9x7XbS33y3wTC9xWea5R2BT536pxZ2WXBCbczXhRUj2SNTaXvNEbiAYhkz6TZJCUNqvATwiC83uET8u69Km7mH",
  "key22": "2DSXcNb4kUArPiheS3zmoBYmqQyTvSf8LxogqpRDXuajiSHhwKXP8dfcTJXo5c5viYYWPM8xQDZ2opNVKJxAKuvF",
  "key23": "3iEsa4PBxyKAZJLDdpG1iWpTmZEwnFd3G5WozNYB1dvmSrWSdzwafWXQNGdkDbP9ct3cTAR8tzMCxDJB7BhA6jvb",
  "key24": "3CX8GHr2cc8MKj2d41UYJ3ptBneZvyjxLHf7pNYQTtuhdigR47zxbPJFmEY9BpYUCSZFhm6P3DmGpSuRkHKEEQZm",
  "key25": "3w5vF7woce8zo5yS4gds5jtvBiCxmxW9isw2LZnasAa4ZifEEhdY8DnnLG2KFnsywcWFFehaavvb1Znen4wQ3xyr",
  "key26": "2cXTGMSCqQA9Hv7vysDUg9hvUQPo1suf3hK3AK5imhzgCEMd2sXdJRnj5cRgVmwykHyJZp61cbhdXwRoevZU5tUN",
  "key27": "5HGHGWifemfCURtLf7TEic7BMPh8zFvbsNtVyDPjsxyGix1eiWBcFS7cXhH7qdJatGoL8WaUp7JWACvCNbePd9Ds",
  "key28": "3BXvHzyv39S5FckjQw24po4pDB4ZVifmQ4BsTVw88pAPhxV6UitgrB7ejnrMWMP2UJrRcS929fhdYGTn6cdWtoPD",
  "key29": "2uPahUWLfMwT5hW7XPwWSM9CETSv1ydxXTy6E76Xpnbh4cNXdV7WSGdZbGpb3TWeaSoWB8E4oCLw2A33QzmteZhM",
  "key30": "47AM6H84GbuBRk5SqaKHRb7kQEbyWjz6fsseDBpxQjVfZuTsJbkR8ULDbvNA7mCMEBBqczffXH3hCxS1JBi8AjxX",
  "key31": "tN6CDoDLzC9GiZWqukorufb7h2YeW1mbZ9CKvJJQX6bD2DNDVmHsc7fiCv3As5CLRDEj3VT47rekm9WzuxkbeNB",
  "key32": "5ArbkNm9x3xWELPntgq6cXmAnLeLWwRyCcyfgDoWZYJR31H3jiGo4zyEYA6H2tkCanEqQU7yyoFDseA3GiSZRo7W",
  "key33": "STrE3Kq2rHhXsumAPWGa9jJGDBiJahWfqzmgUmqeT516KAApCx9JykXZJz7thGCpac8CV7gXg7HyeNp1aZQ4XCA",
  "key34": "V8wxkNidU4dyVJVtHJqbrue1BZprX5xpUY3VQbDsv1fyEaSBWWaj8zx8MLjdB82Ey8dhrQi5mcf5XnuCSBHTQEq",
  "key35": "4FEJamApzrFaJ2WVPfFXdLzWq8ynJre1H1ZqnZwM6Z5zMVvdPiBqtjG6fTXpg5wdxNMQTXYH9JkgU18vxm95xB1C",
  "key36": "3HEyKu6nSdFd29cpeaf9YxAj3AkoA97RcjkznFMzq9RskvVEuiAgx1xC3swT4SaMuD8bYANcDmNmHNZJDx49XG5s",
  "key37": "s58tGfha9GEmBJSYuMCkz1rjm9737Zv3VZ34uPjiNsHQNJnwAJQX7CDKgmBhMVcy7rcPaqsSiHcQAzrRVAB9ocL",
  "key38": "5uko7zBzcpRbQJe61LUkCd2LjNPEKD6dG4VPwhxRkgeLG8ffvJCRfww9HD29stQRARRV1HTKTE8ttkx88qSdoiX4",
  "key39": "3gsXVxpMoz8Zdo5ZTD1T4YgdUsEboepz2WPEwR6JTh4nUWBWFXkPTYoL5QvnPzWiK6JLGPwW8wcuH8T8AySEoeMg",
  "key40": "Y9pnTKjv7pmGxnioo4TcFt4crvuX5ZQ8JRBcYH8feTjpNYqVXrW9fPPBdKEG5KViNwaU7wXei4og4ngmxXrzwrn",
  "key41": "3K2y737zYboRVAYvyJPCX44xJ9i8iBNg1qGVKiV1QHdABn5BfVdT1ohyEqHUDREQQaKDK3pLczogPYPq568pXEck",
  "key42": "5huWujJTZrPKeQ7rWH5RnGy5JqnGuoFnvN9xXb1ba2z1D3CNYsxRSTP2FCyXomwARUCZFYCih1gfJboPtUArR7ih",
  "key43": "2CPY13F9nqSmUqw8jT1xiuYshbdx8NL1zLDvELLQDobXzaedv7Gxd1VZnA6pJYohZY9tXjPGnkCiES5xxGoo4AMs"
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
