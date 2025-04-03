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
    "FLsq1Jy41EhEhs3GbUsxkyVKAyGvN7MEdgjzwr9Lv4wMBK1TcJwnTs36xZDoXxEzYUv3CShSRBuefsgvvBrEiy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tx9hqJeonaRDDp1382CsK4Kim16bqP2j7m66fhgVVqaGZJk5QBMwqQSa1SYp7qo3uCNvE77QooB7uBFwMb4yKRF",
  "key1": "4NVBzVpagrpFAaX2GMRM9tgzecGDA91uVzTbD77p4WQ7LLQVzSpwLh2nk2mTYwD873MsUnjcLDsqrBPGmuCCaFja",
  "key2": "2UKtAYHM8ysJwQ9BGv3K9DxrJi38FyAFXENxKpshhjXpgRHqGPyEuRpcYWC5jWcQepxnTrj5rRn9LooptUywY38d",
  "key3": "yK8YZas9pBy1BjgFoWvtgMwiNQpMFLmmq3DCPy6hDzAWB4hQ98BoLL9fWeTU6Qkewc9hVLPPo6eyw739mazbLxy",
  "key4": "5fPG8m2eZrtDQNNyLuHo63hxe7eRKfVeRT4BvDRYusDJMxaWbXRJdpai5dzTbWH68C3UQKxoRWPMumyJishvhA8P",
  "key5": "qGDA5TWKZy4s7siKrdWoTsE3rhsPKQYVWLy3e6HAPxER3hUtq4PUd8xnKR2M4Eo42XMXjoFNHUPJ7mDkt1ft5Kt",
  "key6": "3an4aM8sCwWeudnB5p3WJnRSbs3UADDVpEAM4FiZumqFWoRB3yVpUh22oiqMACKUyJgrFy9yMzyFkBcfbQByHesn",
  "key7": "3aMWNtDEoguxdcjm13Wwz5eW1Ak57RsTQjdZtWv3LgbsWoekJ2aJ4676EKvyhMKMcWX5AR2PbWrWhHt6v8eqJEpN",
  "key8": "65nty9arfcnxWsAKpG93529TSk5cX38EiuySv7rtS9x62hBNQ2CmGFfG9a6o2v8SwfznaPhVzqrW7rfASPA3SJvL",
  "key9": "HuAyYHc5ywWo5xYdSszCqkf9nQHjSuowExJvZfa4niQzEepJSSq3XNRhgTwmDKoqPFu4kv2Zh2izRYVWbAfTJNZ",
  "key10": "5MhNUwBLL15MrbUsVGvz46zqVC5cuxDhEuzah9fQNBq3MZbUzU1b4YwpVrwKiuBQmq7jppfgJKNpmn3awcGLR2t7",
  "key11": "RNZYRqYUXLmJom6qv1egwPJ5BbHFeWL4JCJ9FVJvx2UGNNvebiNsSCbnAz11YCUeby8eBLbrKCbSD6RTxmfddN5",
  "key12": "5UHdUV47QYwPKuepGCCBy4MkP2KAij8jnvRLr6sv2bUe6C26MXhfvPeHavWaUsRTnDoAp2vs9oUFajhA3wkXLVGn",
  "key13": "2NsNynHug5A4iQeVr2sbuHfcEf4UktUUsXrADG8oQhb2RLF3Tx2bRSqUZWhejbSrVTBPgfnA2je8nqhAcbkhRohL",
  "key14": "49uMFwZe4QjVUgJyDu7obMjrUScyj8ns6mim8ukTCQmpVVF9LqfxzSa4LiQj8hXsjyjL971q1v91watBx5MeQS8J",
  "key15": "63fSaqohYKwR4psc8Ugk3q38TtonM38MxjTo15PBJXCqtcNfqgtcBzTLoyu3yT5xm2De13tWp7A3LNXUU3pygWRM",
  "key16": "2QEQp9VkkDMsXNsbRoPzew3CgH1YgtVKvbMcL897u1VKmxoazFnPx4dSxfYf3hgLSjpHWKEsLsbeo5Uq5k4pjjfW",
  "key17": "2u74xbxViQgQamwXYU4V14ZbxCKNgJTHuDyRj9e8w3BN47KSuJMqht33TESmkN3JiSdhMZoyiEkxCFhv3jo9paya",
  "key18": "4AbZSSaSu4xxxVgPsWaSFapw1ySWdM7g3AQpKin8Wvaw77UbVNZg4JEerwsg84VFqMqiiFoZxE7a3P61a1ignkkT",
  "key19": "2umQtj646WLKWoHMUdxqwhZt2rgtsR5dJKJzmKdRToEne8Jjo2UiFVWMPRqXnqcPVk1diKvxJm7mR6GnmRbHTfE5",
  "key20": "39bfVdA8mQYpTct2kUaZgbF1f36Wzyy7pU1Fia1mPR3oawuLZ1CkBqM3ANetEHdjMkNtrbfaN2s5nNSYzopmoS1Q",
  "key21": "75W2fJroEKVvhJu2GkiPZnF6Ga1eCUxxeu8b3EvirnaaceLEyxuxpFATs5uUcfXacVLASXkKKABM331wvouyPwP",
  "key22": "gPrdr6Tn2z31zxQJvPfTfpqg95TmE9v8WhS1YLmYGgejmKpFA6B9WsFvtuPLkMgKMWPxtd94qME2mUuMVeGMixM",
  "key23": "2XogUDesa41shfT6jJwpoXdou191amTLUUyL47gC6fSUDV9cgUZizRSCQLxySqnFJvnMQzqRHqqj7Vn675zWHJof",
  "key24": "J97oXVV4u1yYFiZRmURqGA518kmuErsHqN9pWTEkkxcm7obRLXPXEygwKTzuCH1WSjZQsha6Q9972oAMjCHMPEH",
  "key25": "4XnT9mqCrp1xEcnyeTwyfs9oMs8G3wVQAfgRHMGqAZ675HvKcDCJgytH7oTgaDxNRnD5bpSHVFWwEQYmmAgegXHP",
  "key26": "54QjsY26bCL6SUZmqVeB3QApHyVRbuoVKv6VkvQzN4Wxs8VcUFWARHowBgevgwwWJDFnrazS3crFQpSuhg2wBo2",
  "key27": "2KLBiAkimVY3rLbnMHdLvFh8pytBdviTn4qGxEWFFtWUj45wWAEEPHg5f8K9oV2JHmFSWqvA6Dzki2Ut8sS9N6wL",
  "key28": "3oUNXTExmUv95ooDVjnpMtMfWqteXKYUDMjHHmxg6WfGVcxph5ELWv82eFWU5qsnTbG9vdtFtWnKpsqF3prrDpf5",
  "key29": "zEkvejHdEwSi5GXjLQoaVEF4Tpbv8SGuE7evdkGjyjqjWxkzHPtZp7tQmmLJB5SVxSVpMK3JfzVNLx1jS3b82e4"
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
