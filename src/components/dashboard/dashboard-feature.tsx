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
    "5SY7m2scZoGpPMSqenUfxR9CEFwpganeRnbSsQoDhQiA2UhmUppC986p9NaHb7PTQZAf9HRDZhyhPWwkXVzjAfEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3cjy2f2EmQnyPMP2CZzKufNgqaNRbBGkBczGPryjvKbBCma3myNjzLPgDvu3vTxi5nTo4zQDpRqnr2Ths9tyVn",
  "key1": "WQrbkPM6T24kcN2btZpRnqfGuB1caGYkQk67wLimRuzrr7bGu6kpGZ69Wouteksx1KUsAjqbv5EFsnwuVKjGW2V",
  "key2": "29M1n4tDgpSAHXa7v1ccDDyBo4ZYBLiP7J5o7jd9FWM6jSn3ju4VKBhsTUEM3wKofhdJuApn9deDuWjqvn31dPdj",
  "key3": "4cqeFR8RdNnomEhmSSTjfNNxAgA77SMPwqkmE82GF55rtPYB9hCyfEqwm8ueQeJ6EisFFEcrugcfByCzNuEsP9J7",
  "key4": "3FPwXR6YJttQPZKbgo3TdfUnD2qffo4b2uURAk8KoYMjwLs1Kfw6F9zoKPMH9oVrZdt1c6tLXwFV9BkH6XMdEgsH",
  "key5": "52Sccmw39QRHpui6gW4rwTk3jckd4tCtda5Rkv5BK5xz6dr8eBEMN1Eht4RWqeNSy1XSXKHbdeK6Wdc1L7U1pLVj",
  "key6": "4xjX4sBrjmdRddZ4CTF3b96EDM85Mz6XLfs6scuUmbavVVcbFSfnYvQgJ1wonVZCoYniYxR4USSMW7oLfzJEDRrj",
  "key7": "YksEagDfkybuGAedQcnQqGyG75bVNYDVciiAeufwczoauNN3m4JGYzohiK4kgx87NhmMMP4duFYzahrLqY26yvt",
  "key8": "2hGJi1specnwHVbLFjG3zBRrFgrFH4gXbz6R394W4xz3m6D2Yo22QcoiaRhj3QLwuMNhL7RwogjURUvejuy6PpbA",
  "key9": "63uZMCLULXPMEoAQFELfUaQtxEQ4qy5tgZCeGcFKxBCZNWT6PjoXHbom3ZcexvZHF9JRooD4Pu4nJ8DMyHdVfwhX",
  "key10": "2sjkWPTpSynSSNu4CN7aDM2ZKYj3jZxSYza4RjMNRqxC96X2ZNx3UasEwtthcyj7UNCzdBSwSpfAQmhm96McP14V",
  "key11": "3CRs3SGxbAHLN29oCXcpqdHMJ7XDkgPhGGDYdS4rLLnGDWUbj8H99STqg5C2rcm4qJX9LNRQYxQpbJaHby7j1J4i",
  "key12": "rRFMfgKeHCdN19L3Mmdg5JkRKuEDwACKQv2ysQ992rbPpCuoBrc1KLMpuKAbhzk1sJKgJZJkFN3YmWUy3eBmTcD",
  "key13": "4qng1tRAWK9pzj5Lx1UHpjF5puigA8eCgyCKwbpdDRxMWV62z12t1Z8uk1u4rjqxa1CVL3i7Pm95q3wF4gzaJNht",
  "key14": "67ZZ9fNu5HCUC1LvW65j9qRyqjGFsghpRib2Pn1TSRGf5aw9s7BVaYN41aUWF351cMarDfxHRbpQGfq5CaBAgYhG",
  "key15": "64Sp72qDKEFYJX995CZ9WsHvj2YAiXWmPUPWDpg5Hk9A4EFRN8Q5aCnHk8jRHUdb6DgkVsu7E4HAR68zBMV7w6x2",
  "key16": "4vTHhW43YvVFC1w4BRVjK7sg8A9thL6Ppr2ERoURdoWdTChddXMgUw3fi6NXrm6ivoe1bH56Qx2ju55gYNfCauUN",
  "key17": "47Mhcugv25SKVEeg2EwKcMHmCEcTnqcEURDXwPtZxUpoPHprATnEwV1giJEPf6B17BsopMFgXxLds9Fo3YKxHWZL",
  "key18": "2WrR8rNzd4Vbwy4LkzmLPfc8vFchKPswshXvwzijNhQVMwHsN7qwLLjMPtzaiWCdwL2g8nxMSrTcnVjoshd8TtfJ",
  "key19": "3K6fB3hUZsKSkRabBMRMSmFv1qD9sHp4i4M9iE3UKAJCRHF1ve72PQHymTQaocXFyJkZnehZiZTSufjiRwGBVuj3",
  "key20": "5MkMt3YkWfDdweGFVhXb5VJbEXhnrX53a7qqjrthhJGjy6t1H5WepZQxZjDGuT7dBDL1GAKVAHxKyHcJc6ynNBuY",
  "key21": "iGDuo24pYtWF41svchvhBqWJjG6py5v2ySnJTjoHJ1mkdZSHHTQBqJKBBETjoUZNLoi7W2VDFhxatqrQjMQdE95",
  "key22": "2wFK92bgrQENuEwnW52qdSTn47UG97mb9eetPQjkrzxkM5x2LahNX868BxRKAjk1mgQdXUna4AqkVyvXp1gQXCRy",
  "key23": "2GRe3sEZAqDaejT1MtEdY28kSRnWxhjy3NoCaQb1TpRQwGRyPovrLD1y3erb2dEfSJHQz8WnU3WEYTyWf4qwHash",
  "key24": "66QjyNa3LwPaLdK6bmJHmfVeR5sQ3jWNe6zX71MCyFaWQ2ACMW8MDvHwYNfsHDdFMc61yeNGFWVU2XXXMy719rQF",
  "key25": "4vhwp8dGBSxZiEfN6L4urpyzc4jNbKqzvrLWELfC1RCyJtXUpzofYkjey5Q1Hzu38RbqFzMSz19VqksE6vX1EMv5",
  "key26": "5Vpms1Cdk4AenRGwN8J9Hg18GvRETrZE19jVsbFUx9EiihMEGNZYc8wSitJbcX933WuqZFHYteymWd45wZg8Burt",
  "key27": "59q7qarRdPiQa9Ga4a7pjaiJj7Zi4sZg5YaSkiQAUPhVoiuzN2mJ9xfrpNxKFyDVGEbTjCYS1nPvs6bmDyr6npnL",
  "key28": "CixU54ovKXsurNXPRjWt6TVM59yKjCyZQRTcnbvWUizzxuum3c767CWsPE7UDu9JKgxKzx3zRJve3MgiJ6qepwz",
  "key29": "2G1G4c47DG9TCUqkkiKVAnzGmPQDLQceZfNXhmzFmEw66k2a34JLAzPx6uTCa8DePXJNLQ9UUCex6k8RYvPzrw61",
  "key30": "2jXpuYg74zevKu3XYtKn8zN6hFW4afM3ETUf2FLTT6acDYugRow5TQ4YS3Su7z46QZ7UVtWUtm39pG5CXe7HPmej",
  "key31": "4Q3AD5rd222saqtk2CAzxs7gUW3dMn2jPnQwYcALpJtMdeFrKK3AXp7ig9ycPYjLiEqtgPbTPEYJD2TfBUuRTLFf",
  "key32": "3uRU6mLqdH3AhotDRVoH9q6FVf5hHEMSaD8ys2aemeq719ESwjtbqB8BBEaCfu6gFzNqynFMkT2xynTpVqwg5W6J",
  "key33": "62X9cxhqVNqDPHdmFCXcqdbywGTweUS4bwDscRZdTuuNcznBQk8Dh3NwuTn5pmvTUagojCi52ebQPEnu9SAYcEPG",
  "key34": "48Gia9mZxTRGNoMQyLfdH8czpFstWJSS4W97xchNitWij85FHT7tLfwabXNuaFd95K8KPi1rLARY1oRyUSMt9N9t",
  "key35": "ACANcqefkGCSEVYcT1CZkbopPAhsBR1avPz6aUbHFoGix6z2vkChbdMxHJe7kgPj2ndxWT2pjFA1qUcKbojxBvF",
  "key36": "4nJ7CJPMcESieoTNCScb78JwyfMhSYRX7DyriALnCZycu62UCmrX9SE9NjtkgkECgUv5rQ5bumFisg6Xa3mYGE4R"
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
