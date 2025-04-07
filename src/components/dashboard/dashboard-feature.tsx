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
    "2JiUuCU82tyddA4V7h7xdBbiiT5XWoRnHgR9wQs4jmnSJEGmFGB88niXpsWBnPSWmJfNRydPvKkVgf1QXzaHhVgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSh94w8uByE7P63an2EPyP847unJJd8xv6bXDcUhafB5BiEAgvaNfQeGFokSxFqRTx3qCnkVpFKmSpaQokwxzXY",
  "key1": "5B4MAVczVwiTNGC9hMunNPTir3EbJRVyJe6GYtG4oy6o9Sr1Pi73jgTpT6aW6ffJ55NAC5vDNXAJGHgBqRGFw53Y",
  "key2": "wU1MFsfGD16hoGyAUuWx1UwbewpecdEaCWTYb4MiUhAR8di6B5Ef3YkBTeCjofZCe8gWqmWouzHrTUGKjtb2Vn7",
  "key3": "2uNR8Gh62dmW2Raj4UoDrTuVV7gu5us57HjgmYqtG2E2L73u8oGREcFAtNqYJLkV52cTdkso3Duted4vvB2Cp3VM",
  "key4": "di1MQgSvreuukA2FY9AnkYoH2q5SfmKk9akWcsKXMCd5Gqt3n3CF3JNuvoRu1wBzpdGrTWBMBu3CkRRV49f5TdD",
  "key5": "2EN5EDFaSR1McykKtmsH6ZME6bMsyongT2bYkSUKhLkLvNi6fmRyZT9p6bt13jbpDAVt4ysK8anJKPRgsQFaKA2a",
  "key6": "2mpNMv6hxGjVvgtPsBivTXGVobJsvzTuAAVETfvn35CV8LjuKLkZYaBo6azzVomXpnFXPsKeW9rv7xtYH2STsiAP",
  "key7": "21n4xWG4wsJ2gKChodaBiCgLWs7PRVXW79PCRiHNhQqXvWTu72CQcJEDwJFZrxCMYXNgc13mbxLhXbRk9DJn2Naq",
  "key8": "4rkiKZaBe5RiZri2aHwzBFrVk78Pf9uuy3ogkw8fz1NueA5H4uKJoxnUq2mc3zPb6VuC4LBTLq7ucPxQ4KHpy8p3",
  "key9": "LbWBmwp2q8VYffcqqEqfd91ZWEjKjqq8V3axsQdSs97ZBqULTdC6XhPwDqH5wRaMrJY1V4Vd8jKnMnXBYnrQ6ig",
  "key10": "3hKukohK61gVf99xpmGJ3uurTWMVNMSehzX4vWdSmEmvkHpcg15GNxDkw1KfujqAJ2hBLVyaStcj1ByEn27xZv9H",
  "key11": "2wMZm7cERtrv8mKkt4zHTceKpcgdrsYVi1gyCdNkaJ3YDoFq7D9sio3DvPNTVVqtXbVVdFC2mADWuEpxzfRSoUrB",
  "key12": "3LuPtvsUqV9W6KRdkQigboaD34uWLv1tpDyNLdTBQGXxhk1UwbN5bztDemP5rPe5XXKuUiuVX5pnK4J6exzegE6j",
  "key13": "41sFuyuXbF35mpEeSBnzPajdZNRtkcJCK6Hc5oWVmD13XdYnDUZSJgJPWMeqtKWiXYywBH6QEcCW7ecg2vHNePGp",
  "key14": "3BKeAZsqSmMXoCHXWRtM7ouL2VMohGb2JdQxoeiVBRq4zCvGzdftGqefpysCDWhhwCNhcF9uwVU8aHjfSignbpTz",
  "key15": "5VtFBxjRPhM4oeAcba5Vo7LmZiyCkEY8Koib4FLBTZPd875aJmYyuiPA4TjFuQ8wEEKxKGLKS9tyngeaojwL4xnW",
  "key16": "4i9nsdCYDtC9Ggep6uMaMKCJxiKauMSZHDy5KPjj2bfDtibUCMxNTrfFZT7guXq2yU5A7Sq4y4cb711tLphNJQXm",
  "key17": "2ERksaryjenBxBzoya7sPADgS3nS9kSJe5g3LfUNY9cbMEsikSZj5kkDRgmJdhso1WXpP2Bcj5S8RqsoFoZxwpoZ",
  "key18": "5VWGSqSiW4HyzucCPgWpbKRM77QEG6kvobM3wB4KciFkvv7ft87uZnxdKAYEmctrmtH1LW1xJqamj6ve5m5XgD8U",
  "key19": "38YSE7nNcTeZ3oYbbz7syhvKeuUXQbHhzPPoXoTwNxSUYZkwjmLBnupws5GCpEoqQMdTN6wnYR1gfWHnmK4xX7qf",
  "key20": "5pLsF9R6ABLJCVhcbd89do3FAa2EpjgfzLSZYPkdEnfAK3xhKzVsJ6DfnW5T7WQDweoNih7vbvt2Y4sM5pGLzDKV",
  "key21": "4cbPhJqUyVBeit8Lk2G1QkEGNtsBQ9j2eHKZpyo5eVxNpjZHZBJtpYMEfUzSmeHfx3eLnLeFJPRwqWSD4MBXeWgV",
  "key22": "2tRq6M2qvDnJTiosqPzRuRav5abGkoX6KzWqBggfzfiLAqEYKK1tR9JEMXzuc6hTwBrWSxGDpZrJjxVQCmkrAzow",
  "key23": "4A1CDxhBjyv8q3XxcREaT1ZTP4MUTHjuoiPNZ5kGbtUwVhhMM2MVBTxoGsZDeRzRTcQXDziPosRhQ7h5666pYGq1",
  "key24": "U9U7GNCE5sHDU29GHWodFfg5SzmcKPr9nMatwjNFqrcStp7rGLEdtzvSkXRqGNst44Qy2qLoUnoie6oJLusZC79",
  "key25": "4e42QMeKiynL8DQwi46TZ1w7gTsVRv2Jpv48uwWmSZcAN2uwVQyxsYnFL2jWm8FsJjV56EPiDAjys5KKDqtxTytL",
  "key26": "HZ9yyENtyF1otTN2F6mkakdKRbNATjAGeWUkQK93ZXjBPUBREGw5uG1Nb7ZBgQcCLDCibQzwxwpSMsKyG7Aon4J",
  "key27": "5Jpas54HCdrRhoDxfwMTJ3CkXiaJnhdm4Ca2bnUcm9fxjRM1mRTGc9JYGZz1TDSPe9dy3B7pGBcZNd9ydKcYwoPM",
  "key28": "3NBvYT5eksjKxe39eXn13mEBxEMghCCEFhg8PjYRGpzbxETCNgq8cWzc784KJ9TgVxPuP6uWNNk5BVMiCJnXFZD2",
  "key29": "2nt7DcaSDq5vXCkhsYSMRvM5589j22YJBaCbBA9dn84BHMEPbMkKXt3QsjFCqVAQ61nrzMh6K9bcSGDYXWNk1uUH"
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
