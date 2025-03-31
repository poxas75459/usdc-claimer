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
    "5f8KLevp48NfMwUhf39TbcS1snEzeFRqzpNER4yoQHkU6xVKpypVXtr94kVMrcbtc9d3fm42oUUaDjoRanAHZ9xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwwU8o6P3Bfsx4HW3DKQ4gSjRarnwxJXpURtig8iy2PENwPz2NYtpdrzA3Zuu1tTSDzHAidPTiZpSaNH6onKR9h",
  "key1": "4LbQjrfTj1a6Pn6sSEyxveEeJDB5yzCXVwpcnDR3AFGBkYPuugCVXAKDdLKcvqiZQP6CWHjg3f4MXEyhrown3gub",
  "key2": "5srQ4ntZQYZKcWuj68sbBTC2BpCPgLGb5pvwcCWUD5i4JgkXaaBoWp1Yu5PWJ4eC42MNtZxh1eC1LSYTnJYnuUF6",
  "key3": "5kMSWWkNV2wYzwv5JULEtJmKwwaQYDzrNwZ5RHcD8YtyfuEhe24z1PKqGwRNJoAx2kXAUwPfpf7LeQa399CJTSrj",
  "key4": "3GoHrBw7pj95sNKE8bovPuKXpDRDc2c3qBy8n8CFdKBGrFiH47zmz6oiG7FMdHbmkMqvjF6m14fwp8VX5s4ELJiZ",
  "key5": "4MjXTevpSjH5hpBLEN5MqQAMWJsY4GT6fysYbvB8dDz8knguDpDV8bhTw8BahjwFCYMD8pDrqjhCnzRiS85h3HKR",
  "key6": "CuaeN2ou4DZZxZWa4uUK46gXFdC4Zoc6QYGuQfiTVsFVn9Z6X99bnGpiKYJqPKsMXHmfudEsYQC9h4B5XUWgvGC",
  "key7": "2Mc9zkj6qmav3DqqbnQSPczJm4NVmMmg5P5uuNNnjdwtNRxG9u8qgPjMFxfTEKbJcPg3Ar1RqoL5JGaAMpWt6EtD",
  "key8": "4ftcvjGDdkkHHkfGbuVQyT8TigPRZ76Bo1tM8RrK7HQapNTq4oKeTD5VaT3gXVS56EswsE43ZJMeuW59z76Kg29e",
  "key9": "2hoGrRVJUraJnjtSx8VDBQbZTk5QZv4YFC7AfSjbdc1pK8YKVmTNDHjfowiBsB9PUL3LSzBm4G7g6v9LEKAjbbC5",
  "key10": "2zxxHZfqSS5Bh25QcZ3un8dCWDdFjJgJHR3ecVtow1rksq1tXdwZ3cPAvvPicaxSpbZcL2iDWbigwTqX8QvYinnX",
  "key11": "8m8qtyeRrPFpxZ2NU9soHp5p7ip8dV7bKM3NcY8Mh3yb4Vj4UoLdpjmyUcxLoS7ZYFAN6EgBhvDwoybpUwD4VUz",
  "key12": "hLZJb1Z2qgXxFnQCRqB32czsJvDtBRe7Ma8L2dKM26anJU6NzxGTJUVXPxXjsgiTdh6M1HGYaKsBUtKJkQzJ2d7",
  "key13": "29iWyBNB3FJh8gpmt69K2vH94V6yhbiBsux138zrD5Txgws6ritnRuSBcmK2tk3fk7sdbhUQJX3UCVjEwLy6B9zg",
  "key14": "5KomxenyfwU4FyJy1Q93Rgvqm35KriGyfoMhxaWCqEJ4evs6YqQQHrpZDMZrhhgg9tKSxgiActykUgdyVPyQu296",
  "key15": "3nPoeh24FT4jfNKL1LztWkKDGAACyTKGbVP6z6PXrMo25XPvrDLWG7ggJcJPn5SZTP7AuxdFLS1DR9SS6VEHT5WF",
  "key16": "4WQ3dXeo8Ka7sDS4yNGfvv1ukaBe5HnkMgEA5isE7Z2MXBuYb6c1mEmYWfdSno1iqWy2WRgP6NhzeNRiKHsrFRCX",
  "key17": "4U7hvgQWV29kJfC6WkR2rELcep6ZMYhZPBwURz389Bfk9f1eYzY2doeSjfjfXRA9mao89yBg28jdEZ1xwC4BmZ2c",
  "key18": "51gNBzZixu2XARpYr3R2qKa119kJT2PGUmVHdA1MzoRQSqDJSAwtTdXS8s6egGdpokX28PTxLUtNbGpR9NaqqDcw",
  "key19": "52prZ1fJP9SFp1cHzD2BVZAWuAYhpnam4w1sZaJ8oxMctLuy4qRP2pCLF8V8kRobaMfZXWQptSFGHJwW2JkvGQy",
  "key20": "2hUoY7vHYJyhRFmbtGff8r6966sGePhTT1g9nC6CkvwkbkHTzJRhG59hVxdkaWGQtFQRwuHSWPXAonWys3ecrhg3",
  "key21": "45EWHvqkfp5ybvXSRFeuy1KeXm5vzMU4M3E7NYNvVwjp7B8ppHhwSNd1vbXYSn1ndHMwU4o6pFbt5dvN97265eLX",
  "key22": "3LZLwLDAuZYFQYi6mZoYYq8qk1DyzypcyKPjqWYhx4ba3eVEUB7dzFL4T74ZKHxxCw5A16sWUaUfn6cDNty11BUv",
  "key23": "56P4nhvjfaUUdhYLgNPAVTvXcNfaM2QCBPUGmPpw5uh62bCYqzjGEEc91TkVLpTPmC9s59M81kieSX46yRjZkx7g",
  "key24": "dj9bJoKDEXikQk5PFMhtHdASu2ogvr9sQWzhvUCkpm2uCkw7Us6uGHY2TJVCGGmWbaHafSM5Sd4xKKwvcr6QaFZ",
  "key25": "B1wRSisbhzUxf6wsj5Cia64hRqps1gfUNsUx9rCGLMc8oS56HeH8L3Cp5ocxvHPmQry5N1doMiLQ9wKabXqd6EG",
  "key26": "3SvVLDiowKErxRpghWjH2hRjDg9ZcfYAgniU91nLGcgL6oWaPqRMRjKh1L1KZJhWW2uWRr9XdFRAooneoUHvJbXL",
  "key27": "3FzaxoRxhFDAzY6wECyn9q64n64heEXiMDvjdqZJ2orb84FDMQWZkTb3Z5UoNpxEm6s7VnVmmmNoSP7si3eXqyxt",
  "key28": "2XTGRnKabZXN8DpVS9vcEpW61tSDuz1JNnkp32bkRjLRskEnrQQJVNcJjezZVeDRu6vYCAxB3S7UpXM51MNkqXSL",
  "key29": "5nrRryYqyGAmKHoh9U6Z1GBNSMj5TBDj2yAbbvfaW1uxRcvd1rd91rTa4qoUtVZAjNg7JGpEMtS6T7mk9Q8QQuMW",
  "key30": "EeChVJHko8Ge1BkMtSXEtevW5ZJukNUavHk11dnPRrwpJQRq8Qr49ngS98iRfS7yCN9qEW7LDHW47e9wZfapEms",
  "key31": "5FTSH6cBuJ7b8brWEMnmK71kkoqbn6njvC2AW2gNKxfZQmtxuTbnrbVwXMup8xPW3pgDwjuqUMi9yr8SjiqLKEZv",
  "key32": "2WapKqDUR28HVMHocB3Fm5jLxvF9683ckoMi3GmzaXUUxb392TasqUFzbZiRNaAjD6zxRnEqz9SK2aPrGfX2JJwP",
  "key33": "4yauwAPM7EwhmvncnFXYmrsGrRxntasVK59g2xhHyw6KrDHVmxPvooh7FeoUW336AJBc29wWryFFys6Qy72LeReN",
  "key34": "287bxogkXZKPCDpZPbLfdhmeSvZYD7Y9a5TdLUCuH9d9Ui34Tw6L7c7HsK5gsRR8142FdQZ1Rw2xGj4rc3qW64Ph",
  "key35": "rF3yzfqUi2PnPtQgjmew3JmxnqKzAVdksixLJ4kEupSiaWgkYnDhKGAE4zgZu5Ty82KmvuqpvCJg9ZdFTKTRcjQ",
  "key36": "5zNCrEisJgih3iQ5Bs6HZ8K9KBy1ZZBwZXDMADaGcSujgAxMYox4sV3vPzHBK8hzhDHhpyYCRokoGeJPfkpn1GsY",
  "key37": "319TsajscyS3cHofYo8QR6g6Gtq5rXGqyxjz1kY1tuaBUTMwnk7GP12ex9Rc8AWaG3vVGRk2GfNiPrCSwtTtUhdv",
  "key38": "4Td5FDzPxAGwvrFi3VBhvZnbsd3iqZ7vT55wrTsejTWH6iaDDhjfgRDCYRixMXs6JrxEjrPWc2fAg137rZHtdEA5",
  "key39": "8KM8QJSiR7x61SUfXEAMCRAAFwB8o49ZEuha8Ho3J61Fe5Tgkz3N9fmTzvDRWZqvzuKPVSS3EGXPHrmtQx3LjvR",
  "key40": "33mvLMYzUxSoEV6pHmPB8VJTuwTjKb6on1UWLzvapykkeJaAWxbUBHyb7ANK2VnS1VbLs3x8T5aAq3NXMFQYqPb8",
  "key41": "WWAkeuL4tK6Gn9cA6fTH4Rx5FcSknBc98LdLS8NJgy1kLuENL1c6sH55ZWQ1GKPoXYE5xeGc9sZeTboAADs7ARh",
  "key42": "3DCu7SSPTEuQPnG1ferv75g71Hyss94VeX4gAWtbZGqoXQzd34VJjuRvndiaUQt32m5aDHYkAq94Jhv9JPvsFuPw",
  "key43": "2XYEWGAAoUnMCwN1KiExPxQs7g66Ftg4xo6vkZmXQwhaViYTHHaujJqDocQKq38RjfiZbrs1cGLv8hDFkh51cx1A"
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
