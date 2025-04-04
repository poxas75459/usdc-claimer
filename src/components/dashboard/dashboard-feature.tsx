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
    "pNKZBVanpzgWDvpqFzmZK6qZ1ELbZU615mwqE3jKJX8qEWVpbHMDWxEJxW4eVuNbBAbZHdkMxoni1gw7E5G7fQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8sG7jzyZFrTdnnfCyD2wuFtiLEpdV5rTSgJ53ufbjyJRTUfLA4iaM1ZUWhPMSWtMYszTXLUbMFVJ6vBb1FXkWG",
  "key1": "3kBfHMW26Jd5n5tRov94SynqBxNb4T1szK71NjSGag4jrHyvYRB2qaZvixad6h58YDA4vChcNMWBhHAVCQSw5fxH",
  "key2": "5ZgrjTN27n5HYkKUxMNezAnrxbPc9zEC4TsZL6e6HHSeYzLSXvKKzDGrNeJuSWGeXnJ6SYfF44hEho3BZK5fqCCQ",
  "key3": "26eRkXrnUNMPBd9ay6vCYgvUPm89QfEZdNpUDxYoUVfxU5fw6tS1BcvqyMQN7hSDhEN2SGkymPy9W2u1SVo5eqds",
  "key4": "Gxuh63KAX3emwtPVqDPUy2yZ7msfVns32qdqjpVswPQpo7gT9EyT4J4kkyyJp3SHfdQMRXU2SFS9o1TbPy3yikN",
  "key5": "34Cwx35RNYsp2stGku3Hyoz64d3c4Socd41AdgTNYQCn5fMWx9FfQhTuu8iJhFgcvwbsxgXYkpx6NniJewCPhW76",
  "key6": "2eJLwph5WQEF1LxDBFA5557a2Jz3mbhxRxfkBr5jmgzbWwK1q7ZJCgyGEEQiwi4vET3vBMiBZvn1XrFQ9A91uKPQ",
  "key7": "26iiL2BX6QZZxVfeyoVFQWjAq4p7JrETb3Y3vvgcjhMdWjnk6fj8QuzZFyeoJbesHF8dB1dnaqX77WRvMuS7BAFh",
  "key8": "2ag56PN7SwY3G9TTf5BmWnnXCnXXm6FJ3iCfsbRQzEpG2RWMMFSC8LPBfnqr8WgjSKLdwFDUGjJEHRekMvvKRs1S",
  "key9": "5qBP25S9YjvN1gRVenhsG6rrq3xEr3745g7daiomkZKghSCNx1dkzQX4H2EKAJookL8ZMVHP6X9UmFfeUxZfxnD6",
  "key10": "2v9kZgYxwhvZ1zPJvKqKkWP2yEx72yqNF11cHaqRbVRtoksLPcy9M3jAWVj5M7GpTS6muVwwqGndn37Nh2Ub1PfJ",
  "key11": "62u3oGXsqhFBX9xDxGgPJNtqqf8kiPgvCdTi4VyGxwkh6RAqHLNwui6hCMobMBFDmCxHYurzhnBZAAu9jhk2RYnn",
  "key12": "2dUApdSMVv6JpymJau3Z2HCqKRngiE8RdtqBSVWbSs2HgpWxLZwUEbs5tv5ZbLLfYfK1ZGXRbig57v8zoetpsQY9",
  "key13": "4C7aMUGPWWXJxAGWEs7RFS5xkQYmkqpqPECkvJhwWkJnjuxoSNjDtYMsopQJhEcLQ1jT4ugin4Ja9CTSpq993zLP",
  "key14": "2oeETtQWyRVNgvWd2rnMBMRT82QXK9MEXNchR5dZDLhKeodDyBZWPXApk9TzuJAhGgknHxkNNfE6QCgQr3c3a9s",
  "key15": "5jwM6sG7TkLzzMNoxtEkZ458ytuCJSGMQji54EFTPz8XMbWHgzq5KDXpPWPpJwaMfea2SV2MBjbhwhbw8CCgeTWy",
  "key16": "5oWwpkmyM4K38nBXu3MrJUTscYE7aXLV7yEMLKFnRiShGCsrabDfPHvtMLvmmhSUuW6LubG9ZNFSThUPxsa6TRMs",
  "key17": "6hKFbWfzeriCUmdJEb6JUqQ89yWWZeTkMi2kQsEC3baV8QWZFkF8mnNeRoDwHkkTCLvTj3kXzVaDA9ZXvyGc5R4",
  "key18": "5H9m3sN4Z4fzryy4Nsg3bUWj19yVE8xjutsxR1j8xvxhTdKo7XGzC2MNzYHnJGXAbinqA8YWvvhcU8T9BV7cEd1L",
  "key19": "2dnQPoeNjp4x4mqtad9hJH6FpLCZFpUrnmhnLwJSwCoV8eXVs4yfqJacbMJPKFpVj7Bp9oMjpMeMis1erDe7cpyj",
  "key20": "2KKRm2HKsDKS2ZfEisTRDwuEcohVcvkrTBPR5iFF7ZUbAs4BKiAxZNADKXeTWNRt3Fn5x8ZetrnTK5A8RGkGKnmZ",
  "key21": "2KyBBSVhDQj64umLxjkSoVDqJTSjt549XYMLdpGZdcnHP1ukj5AeGui5Cqi8RBZo5L4XcT3hZTs96z8cB5JgrMhX",
  "key22": "64547qshyXz4fsY9BNbDYu27EkDBPJuzuugPnqcTWwFua4yz8m39vMn7ot8FP2gBrQ7vZmJ7h8qvotJYX5351ebM",
  "key23": "3C2nTngicvWmYw4RKvM3ETo19K1VQGvYk6fCPTcwbEkyJwsA48J5zHqQDJZ1tf3GV22S7xnzJ9qNe8j9NGDQn1Wu",
  "key24": "5JMsQfGrKY7gqCB5daZHM2ZKTTLhz9U3wXDE5mbmxHVTxukVEaHxud4dh8zH83Q7QKtZZiAGBPN4v96N9wfRTRVW",
  "key25": "3Cp3smGtuS6u6564nDs63SiXd7eFkr87ut31DzQ2bpoZT219TpYbwNx4Y7e5Z1jjouaVjjcmkmWgq84SQHcHbGCk",
  "key26": "2Bfec15YUEGCpigpxd9QKE4uQZbf7YNigorGvAzzTdk3E74ghznqRuVRyuocdJfQp2tQTwxNDzip4FDgshfgASvf",
  "key27": "2M5PdgHzW9Q2GSQpCztrWJ6DSaTfNdRVPmVU76Xwhok6fs9WfyrhgAEbBhxNfWonUnyiZKwEDJasg7aVdXCRrwfr",
  "key28": "5egyPoQQEjrPRrSjbv5b6wNeagGbhzMLWCJa1DbMi9ea13pAnd39oXi5gf1Qpdf8mF3SFe8Dk8EQitvhj6N1LDhN",
  "key29": "5i1YQKRuh7urXdxPJ8v3D5bprpUDiGwFrjqFvLGXy8Lk3R3FFotGSJMVifvHWFxQWv1Cnj8YXhLbnYEHaHmudXde",
  "key30": "4tUiVzyXRT1qxKcSmWShQvG3dgZviYeEVpmsd7f1M9KTsJq5EW9R9w2u9RJhy6TQbevpgHeerQbgjUUFUr5yewB9"
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
