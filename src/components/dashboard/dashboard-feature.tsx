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
    "2Jf8pYz3mUfwoUJZri2125ex6esny5UaQJaaxz9kJArSC5p3VWdHD9mjc1omzifVUFALT8WJz2cSAjPaEEJtm9jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VBQ997SmBzDwHw5JcC5L7ZbWstu7sGemognhF5QtdDh8z58Hi25Rn6y2gq8o2tT9C1sv3rK7JSGpq76C5619wSa",
  "key1": "4WrEJt9Y9kWZh3vHboJbAi9FnA91hdEAN79qmuNhKfZQHKEpd5PX2pFm8xqQiuWpFn15PyoUvkpdPA4Fj9dvuJJK",
  "key2": "5EXnch2fFuXWk7JV3fHzSPUoV9QcYvciNKditrzU8PBVyDAKPcT59SYxYT7WXUFVhvmVX9eKwLdPXPVGPL3jVhsG",
  "key3": "4tTYKreYJr5zTc4XVaTCKNRf7Sn7xbPN7D9mzER1PWLMmuMtZasK4C6YGqQqB8ZTRyteyLosFq14ii66s1AFhHUG",
  "key4": "TFEELMqdGtNqiEsoHZiti9hv94gUHC6DTkSQeSfU4wTxPFc5jstEHFTGv9ixSX1kVFxscprxNPiWc2ZSagPXXgx",
  "key5": "4daVQjnbPpV4Kqnqdx2fyqLheptrcyYwT4qBL2BdAi5TkCVrdMLDfPAei71Fw7r7HQDzNeQJN9H9zKBe3f3NhUPu",
  "key6": "Cczy6LMPQ4YVzm2Khyqa8yGDggxARGjPhSgpHAAeQi92vvioKsGbd4XXE4JVzb8aLNs4GmbPFGy5U4qW472pxpK",
  "key7": "5XEroQ38xJX6nQhyiLpkF86jKEDnptiwJnPQ4BRPJMzhZkyWiV5MWVBEd1z6XuwY5umMFdfqVmcEVMX3Zb9DiKK6",
  "key8": "3VSYhhSZyCUHFpJCsGLUGyiuYjK5cfy49dQQBif3NScUppWCmQ51Pd6RZ2e26UhGqM8tj81cZVPzGnMGsJe1cUPx",
  "key9": "2EEEga1iGkpkoJagQp9nWNXRWprg6t7MmqQZGRRbvS6CX46h95Bcbf5LaKHtyKkhz5jb8WQ6My2DxBuRRuhXSHg8",
  "key10": "2c3keroSEgp8FpV7ndgPvqZqwoVmXLSD3XRBHs2qy4ajStWF5rCvNaG9EysuKpxkiQkJJwGeE9udzAygENU2KJkA",
  "key11": "ZgaWJzXP3p5WgPt5saJ898RWJgxMQew8wRDNTMbB6GAAQtF7Nj2bMuHN4X27Tx7GVoNK5dFsVWLsovrA48Xvo5V",
  "key12": "5wRtBHzpXQD5zcVS3eKytf4RK9dD4Sn52LUfNzkSBHfwpLC9ABGx55i8YUBW5mj8CSQ9MvMJTQhtTgTQxwH36YPU",
  "key13": "3oM2FHLePFepdNBsyJwPVn1uHiCfHYSCRbXZFNQycBR4a2okaoDvcboFfmp4Gtuepj2guhcdi4gXP5tQ9iXLvhW1",
  "key14": "3RSa3YDLQjcDPdEVmQmdpdqkZ3kGZ5kqgqFzSTMgpsfb1d5AnKiuHsh27UXdnFh4k6fEgTDrJXEx4htqpWDpRA8X",
  "key15": "2z2b9JdEu6iHyryzNPUCcYhUv6X44VtpTCrqTeRdGc9GbeSbKKwendzghHYTwWiFJXxvMKFyu8ry3Zan6YVcuriD",
  "key16": "2p8seMSKnMVS6ZKVnPnuhK4rA9fkfgC5mb2ieAru6yYomdQDX4mtimG9tBmMhP6D6zmqCddJvKoEm47PQ4em69EG",
  "key17": "4C5pRJuFPLXYHd4wFwjxa7K2CQ7SaAhjDCKfCRwYKHsfAkJR8pqTmNwQvAdx6HZi81ScvuNWW7hnrAD2kavQWhFJ",
  "key18": "2Ez7PBoAKAtF4vBcoJo6jYTZbN3CGcJaq4km3MRSPktNEQgukZfGUyeR3S37SDjLrpxLexx3kfWmRqPnRTf44WTJ",
  "key19": "3BJmgx3WFKriMQyZj27j6hCH5voGKTDmaahmKcLy7d4BXMkGk1SF37hbgpEEzbZTaSEXcoKwZDK2NPascZLQ833e",
  "key20": "28s3KpbyBr7XKZhFmUmX9xUHUydFcqXJ8bm9erjhYpmDpMsdzm7fqxdbNeJV9Qn1Nwy6fWntz254VUX2SmbF1FVE",
  "key21": "5cZcCQMqSQzDkJKsk11XgL2Mr2EzfHwgw8JNfbbRhr3iXX5a4oYhq8521JBMxJNJ9Qa3ozgs7hTEG56HxZ6NwpnA",
  "key22": "5Qb9eGfLrFd7qDcm8JuZm3MBSd2KRGjGHN6t2xvwo9daArUK29rqNJ7yQKvp413PRCcmVVC4zkaJwUEaRBedqP3a",
  "key23": "3JwCQL24q5tUUPT9Cc7Tn1t9sUTwg5X96bdC7NaWxq13HXT2ZKU3653ZYK3akAbU4JZ6eCzZAiFh4jcwJseHuazc",
  "key24": "3NcPDy8vei6FJ4vPfSRVfx9wJyjya1rDBCsgWJ77iyLXd58CzcdwfCkMB5sxoTw9H1H9vmH6GpTmjXueADubsPXw",
  "key25": "5cLo3yAPtNNy81q5V8kRRhWJ82Uaw7U8tUDyb14xaswUdUxdiuy1xDospCzg6RdsbzH9H43U7KGpsw9iZ7JDyVrC",
  "key26": "4Vp9hdGeeH7hSvLNVmJu7j6BNYSa8DetZFjjAXH8J5RxCHXSUaChuQuvtd88ue5LBgkiZYhpB95jjn1xwD4uR7Lv",
  "key27": "7MeUaRgBC1jQv1ijVTLccQN1ezzsmyAfi1NocJHR5mZ4H95xsVMgQmEUXEv5HRExVeaJo2iqU4udNsYK9DBF5iJ",
  "key28": "fMwwLJLZAtfPpRBK5oS9vM6pDQWMbZzLco7W4odcrKQkyb5Wm5mPd613URRDu9HhyqWCdpAxDRXjTNpCEzaweMt",
  "key29": "5DfLm95MvdTPpitwzu4gwghEPbaqmHAQmvYKikLUkRAmj9hGifuGXnc9qiLYhCeuhBBpTA6EPTSP5Q6GxY8uNFMo",
  "key30": "2Vk7VkL4U9fh1o1nc8tazGusjTz5Be85UJjYhGqVzLxCwDKtDu1AL3kWzhaSvUNPqVPFHByMdtoNkjTkZTD8m3vP",
  "key31": "32BNSFsKirUSR3dbpkUMvSfi2L7AikEAUmqK4oCVg1DmHQCCLX2WX6JYZJvUU6aPPrqECSPZ8F82Bf7f1kGHnBb7",
  "key32": "4HHFyoEY5i1pj615zx32o4C2NyHdE4Gww8WHL2XjfBwwCapmkJ4pMFHD9kFZ3AFiBQyiGuESTapqjjWNGX6ixQDk",
  "key33": "65ytqqDo4ekZek3BFFcaZ3XTqsHAPcVNE6RQPqZDPZs16e1MWNCX5iVcFTFPZQcnjtZJQHQB5JE2Nh6ck5cddD2s"
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
