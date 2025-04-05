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
    "38kVpzDLGYLtkaorjgEwpyVKHPTCnBWwJMMBtdciPyP7sg9eRQrg8beNoepz5DpckVZ6AY4zk6A1PKW7nqmf7A7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7cXYQ8aw5raDShtjjzsi7JcEbZj6kXyZHYSQKWqvUs9GY84kdo5UX2mdvvDvWmrjWP4zYuuUNh5mNwZRs1VqDT",
  "key1": "w3tQbX83y3NNuBnMxsutokFTxkC8kdSkyeUh7fRVHajmGcvHwPb8QWnCeiinvL8Bcg94YEgF2VJQ1WHhign8SGE",
  "key2": "5EJEZoz1sHxvpxUBiJt35M4KtnarmpksJVGEpKW8QBPQiAqLhCqB4ewfBoCiSLHFtvYNEoT9ezPQWwqnxxMnCih8",
  "key3": "5EHF5GWg99fxZ8xEBJ4kMrxQFB5AsRW5vfZcATGLLexiAsKcYK2pMzW45wuQLML1ouKXHfM4VDaD4mjmBKLMo5jd",
  "key4": "2juKrHit5vDS8GpXD3M16aPkRy7uPVgKphjT4HoYbTPgpDLQWTCWj7TwbZrkyBL9cPesPo87GWuS4VwRhqBR6zbp",
  "key5": "2ShznVCEai4HF5NiU5xmbt7J4Yuv2JWfYYgj9PrR7rusnbN3TMzBvjT4v2ut8yuyfYpbHy85ZodFqQoTqvH8ZLuC",
  "key6": "4jPZfivEjdjYXdHSqXwoT9VX7fkTBnYtCnKZmMRukYrPbHs3twavLenQuieVzH2u7tWr6mDrsjP2dPcyw8rRBePX",
  "key7": "2FSbvemkiKYo7kcXc81hirVptfEhgr6x5m2rVV6VUVUMMuCT9NCMdMJMvJtezisappVLcqFcHwk46ep3qy6wmQAZ",
  "key8": "2gJ923LzNftVuLVBBWivJ1GCrEF3zVDDJ7oQLYtz2LS6NMoq6tFdiV7totsJWtWYFH6YG5AUEr3EajjiUEGWmnGq",
  "key9": "5qAmvF935zBmHVHpJTdjdjYFohPNdBhNHqvLKKMZ9xzSPEw4Drp56sGX9d89W3ud5pFyHRopKvo1AVbmxMgafUnH",
  "key10": "4f9SVoEn95FJdo4iEq1w6P9YY8HV4uV8PQ9NiQJNVWPcjr2NXbE8cwBixKi9E7KGwbVTtr1HbCXmf7WXrX4mkhL7",
  "key11": "RT3AEXaQNmEbS5mdUrceBpMyx2GDDFNdnZ1S3qmwp7Bb2Q4yMqqyRJrL6Bnk8GaU1eLPURErwQtd8HFv9Swe8Ri",
  "key12": "3uNnKNsNdp3zH35jmUPJREkv51YgKnoZEZvU4fn1xq5QWdaoAhAjB1aqyPBnq9XJYjFhw9MDjtGdCvZ4ozFiP6b4",
  "key13": "fmFtJ2BAjhsGYGJDybjSLbpAh82Td9ijL7Cy98YrANyyXoU5ubPxprCdXNK6TUgU98BNE3YfkaRz42fUcFsYQ9N",
  "key14": "33LXTVqzRNLKkzHTSEuhvtsbL1yMSR4uiQgCc4P2C2GDJBKmHDaUyPjVU13GvNwXGyxnkGg9Chg6v4hss2LVz6k1",
  "key15": "44LwWesiMzN7txnTmDQxmd4dPnyjeYWTTEPaFYgeJwR5pDikaDKG3mwCtJYjmazkG8BiK64k2FquZngJKNZPAaes",
  "key16": "2NSfiYsmdnu7jmH7z9wfF7KZKG8AdbAtaWDA7nMXvxVq9uhepQTDy3VVXBNuwgd6RdU5EwWzyao4Muw66QPxnead",
  "key17": "4TT4Ex94pgQDz4pZsui7B5sJkg6YPNvkjFQThyn6ZQuRN8pyuTJsUu6EGnbFdvfL7PjRsUjNzvsdc9ssUmT8pdwn",
  "key18": "4stTTGCzdt5KELoofuKsC641BDqhyXKnrD1PMkFzc6LuE86cHbJvGYictE7nWmhaUkkgnz7xm1sNgfZVaYrdaaW5",
  "key19": "EDe4KPEtAiVRNgVm41yd1myEE8EQ6iVhX1uPh2uej79FpDthjWq1ZtxTi18ULA42wbaWkhVxd2xbFs4EpT1vNXz",
  "key20": "HyZC67eCvw8SxmgSGtV8KJcZN5icLvAbh612EhBNVzrtQiX5QcrW7MctqkuTAKa6PBUgrZ3FmHry4RwsRCn6mUg",
  "key21": "37xthrFzN1KDQEVuuvyJfpwufoNPcvV9uE1cb7Cf7HLv7NTty37oUtycGUSykQbtT2nUycnMi663SPHtbqEsukZm",
  "key22": "2SwWagUhTvqRt6XSp7YRpQUxiwtUgwDdMEeeMSCo99oksmocXvsmSB9ewqzuYudYvEuWst3629nLvb95nD8E5XN9",
  "key23": "LzvNteKfhoUxtpX2Hm69XmJNUpmd1dKeeMMbx2GwUyhDCw7Binykb1BtJruUSW4zNqkTjgRdyjCpmCAgeHXZvn1",
  "key24": "4ZJnnBSVFvHahuNZW49tALc6ddXVJe162bJL9MZjEgTvCdvZ7mfiqLuVgkbFcDM82y5WAx27qUUcPivok7SK8b7T",
  "key25": "3t7XXd5RzSXzwLcKUsB34DufZSwUE59EfKTKcCba38yiDF9JehnuHjvg21rroeEGqJpopYEVPUXjnaCbrSZjNd3t",
  "key26": "489kvt3XBUU95euPhptzSESobbb2zayYgjyPaPwCjZ5GAJDRJmfx45vfxPaeeBHKwzxyxyivaGQ3EkBSFbfncGL7",
  "key27": "2LXHUsADtvMmN5Sn8KzXkwfXLEsgmXkr27SL5Eb5TSMdKu5WVP6HcMukRAywzcFtru8hH85V5v6EyAtW4ZZnXDiP",
  "key28": "2R75fJtHBRK4FTWyCWMBfeCiyEq4oiik8GiDjCb5HJe27BpWuVBsTPGsozVzHKLD9xwSqQEUyVqzoobsh3GLoLVb",
  "key29": "5QbchaEfGRgwW7vwMaRqQL6dUYE6TmcmieT9gFuBjK5HXNCyytN5mJeuzZNPtNrxRsaMREbnwGUB9QfQxmvqxN9",
  "key30": "4118Joakf7dZuC65xLqoMBGnpyUfM13UnV3B4mmBi4oTDJTmimVEJRUJsy2QVJymrLqEL9zioHtLoWMAWSXoduxc",
  "key31": "3DieE7VbZqTt9WX91RU2sEXPiYDs895A7XnfgnfaCRu7hAcAArSAYznucKG5BoGcRz8AMaVxoYYsxYpUgd3FpPvK",
  "key32": "3qyK2WHyUFdbM7V6RwAhdcJuQV656VcZpsonMeNReQovLtye4cTDsgRAJjbLwhjC1MVAHWpZZXkjGn54fpKRaBvf",
  "key33": "4cUi3SHiguUohJzDu6fZi71Cs12NsavGmqWf13kUHaihk57roSkeZLiq8G7BuVhP6CUxj7NVY8pfPUc73e2sa5n",
  "key34": "3QN8w1M2kmb846UQPCpRKzcX42cfSwZxWFwFU3BqezccKGPGmzpRrAvfZ1RT2hFhdXjFBQ75weiVUFAa1pYvLqqC",
  "key35": "pWxTYh5Kacbyhv2NAdJYaiCKNQzs5rPMvrv6nqoR4qutfdSwm5VDzDW3e2SKh3JU2nWE4guPkQdmoC6mojcYeMF",
  "key36": "3ZfierpNKKVL2GG2AqJ1j4X1b5SHKsMCudCEY87adFg9nipA1DL7KxYdGqWNnvk7CmCcCiTKbysAeCKue5EYDvH7",
  "key37": "3cRhyfNH3vF9KbY3rXwcq3A5BNdWFXLnQ3M6XNAhNXAoMjc88iEcsf5bM7UF9Vk1zM9ENeSXDDZSSr5FWFrJfpUt",
  "key38": "2ByrRDzi6V6k2sPyzD8BrT7Ynw75CYWsZTL2YaRbA2GgAdzvJL8bZKS9tVUR5VkAeTUPeDwvKVYjM5vq8stCUkXn",
  "key39": "3gYijBHqQYuF3NVm664nw8WZEX2KsQYP7AXgp25b6pvroULChkxmQrukbwDNeNk3BTDVSAeoccJ7z9NpTqrLUxFK",
  "key40": "56suJf5BnhPjq8hRhJjiH5ua2xxQYNqvEgwhHEMD5PHP8ETFJNtK2FwZ7YdLmM3aYt9ukne4rvt966XemScuzEhW",
  "key41": "4vLB6KsSgnowdoFWnLpjjL1oZhKwGHnVo6D2WQPMJgbPNV6DCt5CLZgHMVjTc5UFHNYXoDxYn4BASukNGvMhMLUY",
  "key42": "2kFH5D7Mb6sHT9kFquPJWMouFFd2opRRQwkqijrJVzky16Dq6Q1sUXRbqcLJGhTU7387fyyGDzR7LoDYYTFiv1cv",
  "key43": "3QHyab9Mmo3PqAJf2v7YRHdYL47XfjC8CHRF5TcjCqz7wUXKBE4A8xaHa6Y2KkaCM4P5T9UPVJd6cFquJE6yBWuD",
  "key44": "3um9Tu7WA9rQuHrksbTihVvAUidddaUkYL1igw4VXruDAZhxXysiH28p4yN51dAw5GuV3WLHqS9GP677PD1m5jhx"
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
