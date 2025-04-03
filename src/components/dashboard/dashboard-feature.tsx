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
    "4MeSdqueJXzZANTuzPG43s3XbmL5MGYFaVNfhwKWgyAHcoZRmCLBEx6VYPtBYMbykV79dgmDfsnQDndtFdiS6wmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p47kF5ap668DRRvsDEUoy7sBvMjJFmmAH14zYkSc4QJ1CeHxYxfiYN3VnssGcWKN28JkWYf7hNhzrrU1UMfciFm",
  "key1": "rVsRMjDtPbCA7js3hHxbKisbXWLxeXSbgAZZhJpR1DN3gz2YWYXH1MJnnxneDjfqEY3s6r8q8A1tgLhPynhwuU4",
  "key2": "5vj7xiBLok4xsTCeKGsBx5BRCNiPyxbBLu8QSUdHmZWwb6zt3TD18Nw2tRfwrPZRcTmSTsy22VBYSdpL79PYPDcB",
  "key3": "2R4tMdCLoAd3DmJBHQUZoMzkhsr9dae7eZUgRVt2pBDdQr48HrAc8vQn9CM3YGPL4dJiVegL2VDtfAWDz42WJAPi",
  "key4": "FTSjHQ5dnXMebdpFTAm2XAKPpr4Ko16ga7siH5dJbox1JBAKrxeKQyZ22NDCFJJApDYjJeLfyMjbshjgxYNHEcA",
  "key5": "5EHWfPZ6cUsCUqUsH2HPyp9eufEKGzNPzARKFGMQoCSGw7P6RYry8NoLQmsZ7z6u8pKoHXnYPWkq9r7EiZeRNSJd",
  "key6": "5nyGM8gchZYQSJ3xo4JN7FqKgCLjg5H8QA1FiQqNfxKxGsk1cdPDDkzLv4TghBPkKPxnZooGTzc8BFnEMjcPK5yn",
  "key7": "5AqXE2BGnRSC6u68e2FpV8wYi3nQ4oBac57MwWoBAtQRAC4zzg8J8ztNxmC4VNrAuFwrhdTooA7mLyfCTFpTAtgG",
  "key8": "3Hh56B2Cf5vXfrQjTY6ZLSPpf2JoqJAoL8xNFXwvB3Z6Z98JBgeoidTEDjZdpWYWf5jvDXobq2ZkYHnmqXr2Pxv",
  "key9": "3HvmzUTvYJg2PdvgxUvgX2Xv5WNshP27PkBGo6jjyKXKH8ZvWUhnGG998vNJ1f48V7jFCP9mAfxKnrq5Ugrc3XNk",
  "key10": "XztkYpGrnEnE8hHemRPbyN7toApnb8Z2EPnNqLCMsdfsKFcSexgcUTxRS5hxeJaidzb6qey8Pr8ZGdpdQnUxLKp",
  "key11": "2mDkEpJuK27UPYfoZvRjpQHx6Uw9kcGbEEEYnyGc58xBaGuodt2EesTQqneZ9MHpN5sAJDCDwUsFqNZvdrJmNgjE",
  "key12": "meanXP3syniYNTrwXMkHDVwWqAidVuFD5no12tY3VgfU2dgWz5cEgHx4Aqj3ff9L7dneoM5DdDkDUN3qrnJGv95",
  "key13": "4696dQKpD9idAKhcRqdHsZJoVLAz63bg6o4Y56JVLQ56NJtLj8f2GicfLX2Web3BEZXinRRfm8jpCjmLtuHGdDgW",
  "key14": "Zmvxqgf1712Aj63qJaAA86Ha8BmVL2YFnwYXirgKp2UQfEK7r2yiToA6k8NGv86jVdYMNxNWymkiSAi5AXKFS2M",
  "key15": "3dW4GnswfWXDDnuDqb8TtxD2F7r3pa7fevYPrJJZscKXrizjCa14AM5661y3eu4Yq7cCGt4HPUfPxrSDnYwU21am",
  "key16": "4kzYasbv9mqBwwgdtPh3GC5QYepBg4TtZmLG3SLsqh1LGo9kbtvFfUi2xVYt7cjkQ2Ekg9v2v3v9kHrhLFgJvV8P",
  "key17": "12iqEq5jxTMque8wNvFLznaGn9SqEpMJHeCEkqKhZo9hKsNJHVmG9DStjMdVkeiWQMVW1cWH2RBKXC2efZ5Lf4g",
  "key18": "4S62x9cvCVgBgac92fX71j16ovMBFrbqXczZ1hmG6vWAr5Bfa5U6M4AuoY6e99PaZ3YS9KH2Q28SjaMY1X2DGA7C",
  "key19": "3DKFQWV2b9YZiYHfBZxPUn2vYHMjfKb7YW9QSPyBrtMKB1E5dtVFr4rt6h4KErDsrM4978GwTeDFvBJvZ4waRDiy",
  "key20": "21J5GAXdzkhaWoRZE8DnQSLdMCwhm3sZMqcHbkjskRYTg9xVq5BSSoEozyWHTd8BaX3ywusnPRVLVbEjds4hVpXi",
  "key21": "5jLGYwMLCYhFpNnV364yBUQHYR94wZkWCrTxz4FVbqZgcWDFJbDBcjAzdyXa7BQLg5vshxXikfKR6MjLKAhoPuXz",
  "key22": "5AHpoZNttNp2orJtX921MXs2QkNPbkh3SMQ9LywLhG2m42iLiPWZRQpVmVyUjpKp2RjypE3NxwduYRneaaVY6Amj",
  "key23": "2CZbyHMx8Mmzm1hoQup7nFLhuwodnJz3eELt2ouJHJGBEtoE8H13nwmNRzEq7oJ6ViL3oMugAczwCZ7GSA37Yi2J",
  "key24": "5eRXp4s5puTN2Fc2Dg71WFP2wzYudfjyBkzAecrQt1yzYXJmGeZkYgpLYQdQetYZDADS9srVaurYcjeMivq9TpGC",
  "key25": "2GXtfdzgWWAxnLgSty7zKZRU5LjEp2Uvqmgo9powozdMNmXNAsCzerKXB8ozPLRCNu5pWwY1kPYV6z454vwQhaV7",
  "key26": "3VYMpKcX7BMSGKefAokv6dV2cQQxxGMkdTf7i7JrihV1bbzL72awrwnQD4K8z6rPTHvFJVit8qMSyjeG1VufbBg5",
  "key27": "5k3Ua3yEjdMZxprMiievz9Q6pBunnLiE12BwG5D8FbX91wCprHnXLaCsiZivVRRDCQoS3DKxB3PtqrNoDNFaMzmF"
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
