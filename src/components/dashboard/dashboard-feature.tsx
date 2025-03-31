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
    "2iYcwtz6bh2XA1Qv2qWjxW1gE6TKZsgdjRqWcsPHx1iFSHULm2Vx1cQz6arHsDrHd8xzyB92ir1bDaVQW8z4BxQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JLPmZA6BxYVVFA99fUkbxeNKaVzWLj7viF3XJiCXaxmb9D81hEkRF7GPpiE6VSoKm8AXjjYezndKXFaqxK9v5AZ",
  "key1": "4PVFsQy9EF9ZGGji4DmDjNCU18mceg1zYkmSDpaKmhqLqNNEFf7tYrZWzZPAmB9CaVdZFwHeRFNhxL4MhARMH6Yd",
  "key2": "53BE4nDr8fBai4AaYmqTefcBthfwq48YZVPCqmkCrpMq9e3wekmSrkRXkG34G4MxwvFE7fZZMmeVcwN2tCCtbymX",
  "key3": "2tf6zgpLRvK9dkVTWQbjPRHvgTDco2PnnKYDyM7Bm24FPm6QTH6rJmrmKXYWbBvefa1RhEGV2NzdcN6GmdmbQfT3",
  "key4": "4bGeWxhBkDHWuMTsGHhZeiaE275LMTkY1qUwvjScH8QfJqQzyM4kfpuzbeoGcFzwtPfoJoY9SwN3btnxuvfo3UC7",
  "key5": "58h8w3vUiGtSR7Lne3TAF3LS7oRF5nrV9AwcwpkxuRk7swEMoYd9eRC4KS4u2Y4VZmdDGEdapNckueMQLZpecKuY",
  "key6": "5EsEH7kfh5pJDJ77rQ5Grx773y39dp42uSSFW6YsCXH9oWdxNiw2yBRLLTNVe1MehrnGAnrp8d9fB7R9hFfUvXSL",
  "key7": "4shV9mk9wC2VDb5y1x82Yb1XKKBJn13eWXM9KjDs11USvUUyywuMAv3cKLWJv5xA29EzYoRnMXZSB77Pqipcxh3B",
  "key8": "DNE6KBPq84KZLuRQUTdmyGWB5KJu4kTAQb2RKUpj6eEx1aD7xjoU3k5MvDSKXQZ7agg84DCzyu4qSHM85bMXyDY",
  "key9": "4xn29zBN1K3jfbYthMaDmvtiwwvzuaGMjMjckFwMEDhbBsPVKnuPqvFWxtfiU1ogRWUveAehHvqpVDRXj3QCQirH",
  "key10": "5JtSBMSGAkjQ46Fw31gW7GwBLruFtYAHf6uyZvgvU9VaHcAhehXBzoLBs46Jmk1p4YaGYE2SrGGG6Gm8vcFPnGKV",
  "key11": "oCZVaShxyrUKMrwmKrb6K1FrvuYKPNFugyKXvZGN6ECTYs52Ft1vpv6r8goscCafPf8NAVKNJQNJxsjjhmM9om6",
  "key12": "57aKnm2A9k3Zt6rNaMDZfE6vZ7qwTTnd5TB2aJpJk9bDUFuHvX5sXGVumGBvZt5rqiXjzFDEpE6epq7HiqZ5C7HA",
  "key13": "4yFNQNwuYtAHPkKB2ybp5DDtjBKBSMNvbBS4uwzNZrwB8nTxo19ncLVJtTEuPTYn2g7KPJ6t5WXXpt3Jcw2a8NZF",
  "key14": "5ThTcU7AyDE5MovRDw9VAuB4nrt4jvZCjxYNfYYCZKWUJXgY5xcJuAHtjZ8gaLXCJpCaWhqPmDSMXRSK7KKp1DtS",
  "key15": "5qJyuV46v4WP2NnjF9qar1mh52hstKVHNDGS5YGu23GLRtGUyaWsH445WPKLdugNqMnq4kvxDiq3tGyjd3MTfmC4",
  "key16": "2ch5Bh9bVqTtJLA1oKBx9J4H1ZBnAbVwuVFTPHqJ2ctT2F7sHXpsp8dUpJ4gSZcGsmbSabhd8KESXUWGEdXN88yV",
  "key17": "8yu1xdmg5weM3JmRss2ZDpGniZFGKapMXikBX32DaDCqfAP8a5CLeTCR6Kcn238wSU1ydMzgACmXhLMiWS52qCT",
  "key18": "4o8Cr3JPdAPCW7Lv5PNn9CKLMgKVMXUFZPsgng3Rr29si5i343swd6rXEsokcfmSanw5muTbxf3JkHZhaScrzLAd",
  "key19": "YG2cxJWwCoYFr2FdFQNjSY6GiNmi8RxNojD1DxJZies7XLGfEqgfn456TkjR8PnhscFrmAeX4hMLpTpQZtCeztr",
  "key20": "3dkteUkGFGj4hoHmwT5Zwug4w93sinaWnrCxeVqTmN2tkzmSrxo7unKswyJgMiGsPfgqkC9teL5VAzHcLaHcszpi",
  "key21": "5o9oBMRe8hoDzGBBCWErn9e9SK4RGfyJTvZTqNq6ELKqsenzbRgejRY3Z8KRQGHQji8VnDYaUNaPBU9svAVKaySp",
  "key22": "3ZKGsLi8QZ124Sh9ztxpkgeCUaUDgXDgtCrjkoiLUHaJSWDFoC7EMTV7hnsZZX87NuQH57FHCbhBr6nodLoyrMtG",
  "key23": "4rHRVzh6ENWi5J3958DiaS96ZAZpUSMK1idPVxTTNiscRDJHSPdxyGeE8bSZaagnhfVcn4BrxKHQbyzX1iZj2WDS",
  "key24": "4duFgM4fsspSwKbeu3vUWNdZeoQc5cPaQ3c5kiTbU79yptZYfAMrRPG1UCbFuw4TNDE4EpNDHsEezCrp7t7EBfjS",
  "key25": "2wqmfbWodBf171ptDknf3E4DKNfvd7WGn4MNThcjFSQfoPtiXN8Z8MJyQ2mdAz1zhMBkuw2ZkR7uh3Pkfvo1sZs2",
  "key26": "4tNWjv639s1j6LYxwbSadd4FvCezgDABNzxwzjzqpemYRYTDNvNa2mUGsGV3g5qxj5id2EyxoGtb7nQzTpU84zjS",
  "key27": "5sBGWm8NFg4SptjF2FiU4bRy9vekeqGpbEns3GMmE9PCyhFa3ArxiCj8ydUBZD4ajzS1wTvh37XMsALXFsTkTzFu"
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
