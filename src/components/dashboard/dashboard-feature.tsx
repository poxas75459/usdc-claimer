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
    "wz4wzcuCcTaK9fAXfDvBiUn6veZo4WKxQUf4NTBvdU2Xis4KfbVgmHsoq3W3RSNqR8fD8bDqhLpCeFGZ4rmqYBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3koRS6RjRCPP5GHm8Nj69bckgN1SxDTFbdNkgSQQhwbQ8sDsLS94a2fBdbUqTQW7WVDicKxcKi6zgZ64jP8eXYxm",
  "key1": "3LrdRPwGwQjQ5WUm8PGq4ouyjS3MMY59Qhz1wCYSgt2mCquvabiKhJGp1vxpXaGnjgJ63UNpzd4fmf2bKqm754jE",
  "key2": "tdVVUicX2iia1CXiM8AFrAgaaZRvbDAac9SEfMBg1mSmwmVTyR8PcB3AqG1Vj18g3ZrLppQzNNTyXMqXGMBkt9T",
  "key3": "3y8axXQ1e88k9FiURubYTHiyQgXCrLCCmxPgKSGnmKQ7hUJgMns7jn86ssPF514XKv6efYVrH97tEo4nMWHc9uwi",
  "key4": "4BiPu2Q78LdaFJBU9FdRz8NKEcX1prrzhTgsbMwib4S8SYVLNxNtBismyDdQUXP7mcjbo7P4fpNuLXyQFWUVcrh3",
  "key5": "WKCc1mabkfMB3LuEDfB8fSUebv6NnUDR2SZJaLq2a2LkkYDWsc4qHpDaFrUMpWmcY6TiEzRpQD6GSzqDWCB7jtw",
  "key6": "2CRfbjusrXu54kMjPyzSocwURXLpENY7ULhdPb7HLAAz5PSpF5ZtkD6iBkqiMZQHWsyuQuaeJprvEt8sWwbLLgyt",
  "key7": "3hQjM8JZ3cAHUSPUQCTNzm8JBLuTRn12S7rR2GqnrUB3znYW81GRWDYPXiVdSey4ZW6fhNH8oKcLD6xyryTTrWRC",
  "key8": "DcbnAraknQwRcZVfniCkYSBNJTt9ok6CkeDBD1ULzKxDqqTiuHafJfDL7ci3f34WvyfnM2JAfRf6tzXWP3yQkbY",
  "key9": "27kHE4oYyPzVT7jF8MuSbEanERXFcCrZkcHYVUrZomBLZaBNuwcuvUarMyZNNZwDiFW8Z7gGpjJgEv7RPxjGNdpc",
  "key10": "X4tt3UqeUydAHJCB7Po4YeS8RJ79ZorresHZTMwzdBRXuwTkhkanLX4hakJL4AQ4ieEB7auxZVtnPZfhY7QN3a8",
  "key11": "dG8Gt9doJEmucLBNXDbGDeuNKoMf3b5zPVBuLEeDkRsyXRuYjoE3bYL8sVc4PQmLbovUXjL9o8kNrJpuvyKjNC7",
  "key12": "34AjTF9suiRY8HZoLtqjAn1DcqNjvFoACLWdgFraifdUaD574XyiYx5boh7Uux7tiTWDYBdG6Z8oYDnA5bWqZuf1",
  "key13": "5wknpFnRmGAFv3MBRM9DV8xyu4JgD86Xa32QhEA7R9jRUUDfzUeygLG53vseN8ccAYk36tqREfGkSDr5mu6Hsa9J",
  "key14": "3S2TvbVxgPY3pVqmPdFccQUDNHFBG1BEyB7GGNYVmMnKy881qktQj9gpxkfUbL17ypCc66V6ihpY5BmTfd8WCTBX",
  "key15": "3DArnCiahdMFZpmy7S32Gm1ue45zjEauciQ73LpihoS8JLQ6mpBZLk9CfuERwVpTzEvYPgrzWZGbP6Cn2cGXWG2Q",
  "key16": "5UifdZYrSRckVvxjMSabRu1ZTSEYyCuL2Kofr4GB8Mbsf2b6qAWAVGwS8yMJnWjopABhURCV5FVgnwX5JYAaqVed",
  "key17": "4Gy3H1a5LEan9kmsiDu828kChRKh5EqYXmtgwW3WSS2PsYpKMMcksazPiZLjoE8Ni9rgjpYQhixZQkavtc7uaHvn",
  "key18": "44oQ53xbBpEJBKBk6EHfx7pQiv4MESqkJYkJyN3CnAcqkCDdts7TQrhfeAK1bJdigLrxr8V85ubbmq3AdTpjLy7m",
  "key19": "46FCyKxbYvqpfjrGM1HqtTLwTjjAt4VmiQqzHTSPmvWZFzv7gyLr6kL5PD3SyMgiQhwsm1vmgZDpxeT8M4fz4Svr",
  "key20": "3fQq1FJnmgrevywqqr7izcqMEoZDmfy9T1VBS32ECYCXX7ZBjo2FiLWQ9Vu6JdcXGk3ecCG5wgStE2gYhq5z7wBd",
  "key21": "5s2hwegf1wHaEuRWogD5iWicSax3eaye4nDAwo2FF73XGFkzGJQGVAZ3W7VbxWXJRu28G8pLgX62EivCftgUhtZx",
  "key22": "eZvKd3uKLSyGECNmaxLbNTR8PqVHeycTS49XseYr9kgC1aw2xP32zQo2f6C6zGsdKBrfa22X15jpfU59BvRLB8x",
  "key23": "39vrjmnaJzCRNT4pVYLQHA73v4a7FGJ1eSmcWrneRzSFTWZ2EsV1u8dFb2JQwQapYxQYDYsozfT2KNVSzJE5mFTe",
  "key24": "4gVDnLFpLgi8zKv8jVFPDmwMEc8TJbzL4fU5CukHwU9ZhURuy8PE3H4KCnAmEb8z7AjNXWxDYiPoVqnHGd7qZtHu",
  "key25": "4MZMyfkzMkbxr9MX2BLhSDjg2Qu57TPVLMNS35bgA7CQR4gzmoR3d6c2HEgxEsE3jtB1orwnB8K6QPJ2hZ41D1KG",
  "key26": "EvC2L9boYEnhDPUCyPpCJxVXdMiwwHF7fNyNGuttRV2o68uRxJN8iXtx9xqiiDTmUjpUwW7B5QZhBf42fQRh1yV",
  "key27": "2rRJ3iBphABeEiy8hWszrutvCWxWwwDHp223GEN1hrzxfdYSe3aJytE6WsxcxLneCWQEPvzVnnUFrfDt7QytxZBV",
  "key28": "5nhkZE9aYEquxJn5dYBJccjUWHHXHEha5nvkE1C1s2gokjmB6hog7V1Gv52SZ2FPPzj8mdtNZhhHpQAMpJSkvJhT",
  "key29": "2NtePP84ugiyyHnKcBYdBjEm2p5oW52uTQ6kYwtGEhBSnMwE7iW9a8q8Dwkn5sMXAgazGT53RQZJZHQsxYFdX6DR",
  "key30": "2qeuib8B3P2JjfpuCizNZMZbyh7Awv8FYHHANJwuVE5wKa6yptY45MLU2xpSLr8VLeR5vySmNsp9an6GQhZJNZXZ",
  "key31": "5ZLQ3rj17DvGitL1sGhUHg8JdHYvQdAGLv463soyr4bXHxH3puwLGk8uT4RBtWsq7AXGERA9ot8T7XME9ej15jBs",
  "key32": "559R7bEiyKkRZGvgw4E6EVuFLiZLMhrQ7U5Mfs39S5n6WCsTzqdakBWWVpf7msLfr213zuKu36vdfSR2PGKARyrW",
  "key33": "Az2mMcdemyn7cMRo2MjhGiQa8WeUxyxwc6Mp9wNJ6GhfgfWb5FjJBH3TAnPzRKQxLQmy4ByVXpaZ1TYuZTdhzn2",
  "key34": "3p4VQYKguoSE9jM58zP6RwPdJJbSbkgxHLXwhqCBaLdYDsnRNPgCZC8rZUcBhKWtHdHFYE42biiZPWk4igAs1FyM",
  "key35": "5fNtPaEoSUz3htPenk2LDA1XaDPYWz5Y1yUXEtPsSmmoJiSuEZ7UwSi5mpKeCqTCqffw8VPJzxz6jC3Lv4ZYNbFD",
  "key36": "4ASBS11kyBS7jJ5YePNV6PvGs9FCoeFJwy2d1qruGGCHFb6hLNeYwy4fZPy5uHUMVxitnsp9r1UmxytVaysQCX3B",
  "key37": "XkMnCo7SrVXAqmWdCfjBYa9WJrVtX73GpcpgWBjB2KCJG8PiZR58GBCMRFqP23XrYu2yrv7rxHJ2N6UY5dMCn9U",
  "key38": "3xbh4wMb75eToEEmxHLGzaUrsMec7aCncUCx5zEwhrSKTu9XMAp2UaVL4QX7UHUY3yJx6fdKkPKpSJYYfjwZrZLy",
  "key39": "5hfx5qwdnsp7b4QLf3BKyy3soyoAGyPVR5HCVJnZW3K9JpSomPLuXDq6Yw9p19ZwvcWhz4EBh85u3xyW3bXRZFAw",
  "key40": "wcksMopwRE5bB4JoStQguBAG5UTFqUsMTJTvvq7BDb2NcvCYQCu2vSNK5XrzjuTX3DozCCKFYDRm9sAXMKjjRPX"
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
