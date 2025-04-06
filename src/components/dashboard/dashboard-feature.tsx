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
    "4Xymn1ZDPvQ2mw29DXvxsJkZ8ELT7ZBdT4kLKc1jKHPXK1LQRGrkKjWC8o7WKrSnuYsrc4XmKgzEb2QfnqcVGmLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQG2G6cxGZiwcwVhnXLB6woiUfKYBWGmEtTvUtp39TjAU3CFLYEA6yDYG8FBYihxC5fQYVVhVJ2pcFBA5YsndFA",
  "key1": "4RVKKvjuLWEp7kdZMy68hohpns4RdyvXWZRjeHRdTcDarQPNWv7gN5Anawf5hsrKNg6cEcwhwp9fZysF2Wss5EqV",
  "key2": "2FHDom3WvnrqmAZ382HxH1QFE8tGwu3KGXGw8ANJ4BkeKRBuRoHHkBgWgXcD6ZXw52xLLiHixRq5axou8f683kjj",
  "key3": "4KtKq9LEpaR4WykyJWMLwqmCV9qSPfAEYU3MfD2QvYpa73HgXB8n4U5gnqwHPtxFx9f4UtCgDcitHmvD5cFJWEJa",
  "key4": "3EGZwiWgbsfyP4LzCyYJ8qSArEAqeC5GpWeMgbg6rMLHDxKps5zf5ZLkipqcEn4HKDFmqm5oURCnxUzVVKRuYRKd",
  "key5": "5rBTmPPvyRP1WEGLdr5SLGsQaeq6w1nXMks4Jen3YzNaFZDZYiDUkFN74XmZonEPTZbc95hFGhQaFRGz23qHkuJb",
  "key6": "5pxqU5ja7ZxRydGF6LW6MBwDrmpeBGoZaJVuYw1FwtJxdKx19pCZF4b6N6cjs4KVjwqHi6hBPPGvvHRvnSyqsEjC",
  "key7": "3omvT2b1F13EZF4QmBUFEPrcUdXy9Cvy542rGaTKYcGWfcaYssrgYr6mgnWximL5ertsPQXBauQxhz5siMwLgPM4",
  "key8": "5NgEFJZpwpk3m1MNkjkBvBvLriNF4H14598M4JmNdgYWnKRL5198wUVgsDSL4wvvkkL9PQWPEFFNDUbBhTrLnF4r",
  "key9": "43FiBjQ3Qs2smkbWBvJYmprTTPb3khfZStXrMLnw9Bafcx6jEoWNLYZdbaBMRcGGV9sAP9UoohhkSALxpTebuzDZ",
  "key10": "4rwkPwHCt51k43ehku1foUZa395SLr2XKngt3gdPAgkHtNmSPbxbLfLhmuiUh9NYB1WcGxYqXjULcGXAiRMM6RGo",
  "key11": "9qV3xnJtehWgNwda2utVz3o6sw8q9s2WXcnATLEw43HtCvfr8As9ydhQiQvnzJAP6YJUtbHfWf6vTDPmycuVPGV",
  "key12": "cK6zqdLyduQoftPSbLvk53hLVAa5feXBn6V7HzmDxdyCk3MMqWHCEAj9LDbqFFiKFyfw1hmJu7wsTaUfDnqaZRq",
  "key13": "2MaeH65eG8Ans7WcPF8eX2KCoskJkNBeGwUYpdY4kfNsdvUEdzdEPzYv6Qq6coodg3XjVEt7Ye7MHqAo4E62KRCn",
  "key14": "5HfSaUUkhVX3A6uTzqiShinoDifrPNzfhBD76owaS49LuMNHcSf93YRrBv3wfEtKdEWENDUoC7xCBpkDNwyAeuHf",
  "key15": "4yzpLCJP9kL2oR418z2F4bGBJ9FProsDgswGr1FMLfbhXgDzVz43FQVgLLdTA21NwNewmKnGtUfqvJJkKpECvW4n",
  "key16": "2w5voqPGDYWRpJeXXfgjCEmRdm7F8my6qL7atWV79rAZMX3mhbPEUMMkCUoCKV6mKwtk3MMfXU8Tq5qysc4tuU8L",
  "key17": "4CiwbVwzNc3PLBWe6E1ZmWZJPwPV1iaLdgpRETbBEQeYkHa7yCghpNbpY8qughywGE4oiQk8JpNYr42NJxazhi7x",
  "key18": "5UQL9pBTeaXoyHx9kzSCeRepXFeNizEfrRfS4biqDbsAdQZzw2TtRYzNTNVogLfsRbw5exPEA4QzWxXng88WwozT",
  "key19": "2hAMGodbW3qL5LJsBC4sRSTYw5VezLAkryRbmZdbUtggoUmik7SQjZam9c4PWixZ6nv7yFdpRjNBBc91xPASiu6s",
  "key20": "39SkHjvsyesV9ggzT7YhfLzzLaZ7tRnEX7W1UnzM9ES59NvawJzLtuB2moNwZtQecrES4hbPckG94dUGeEn8MC6Y",
  "key21": "2NxDbzGKEYRvZJEKF7R9yie7Z6GX33KidHCFmqDcbdNR2rD1aNT4EVgQgB33nmht2DKVh6UHA1Qwj6A8h1KToTPR",
  "key22": "DnnEhivKBgehZnRMziDJ8FLYrSUMjFnqqWZFKh6vjyqQif71gxtrBtDWo29XS1VofZmqwUoZtgv9NgXBvQYC23H",
  "key23": "2s2NzXm4229gQkLkduRNvp6Es7H47ynmwwjT7ksNF5MaEv7QJj4g1PN2ZRPC2CgXvmhgqaBTrkA8AspVDwATJX2E",
  "key24": "5u9koKvyEiNjBxzJZU2xrJsSRk5YUzARBHkuAhnbQZoyuAtSuGTDgLTiKaN5HKWr7USASBV8gnmX6Nk6jxVP6Qqt",
  "key25": "48cdua3DZehapf6aH1P4n3yeJzRVxoWWdEeeCfmb8aqEv6CCQhyU7zk7mhr7YsoaZUV4bjaJbg61zhp3Zseq6gce",
  "key26": "4H2psUo5H14p7SNNnHYUtU9FPj833KzPJfRzL4gzXX2kn5j48xd6rvzTrkvDigRWzqsPMMZS5645E7p8iH1vXgux",
  "key27": "2khZrMqFRjNvF31wjVCRGxhhZKp5LKVkCJGjn7fozeXy8gGLcnXeJDoJKAqRpK5A8bnuigZucNm6t1L3se2uoQxi",
  "key28": "fHAbJ8JJ21WKDH3wN4AkUfVYykSgJvv23PCX8bsmTSb8Lqi1vd65vYyZcU6mrtfvja56yx1qPtHQhXrFVLKo68P",
  "key29": "4oXKzZyfqCDXWtVt8yXH67eziVVfkZm2Xd2W8fJ6r8b4ZqV2QvziwTbxDtihhCeGYn4RGymjFLaRd4eLj4YasGTH",
  "key30": "4VvJhmpkqioJq3ws9d5895D92ZdCM8K2CkYZwnFhYyLn132PJiFPvZgXp5tm2D32fkvecn6H9eHS7yeNbxsGq65J",
  "key31": "4Ygfqoqeik1Qif3URWj7vjNt4H3JJ18jqBCXBrVRVKhKf217nqWGAfiwKFawfVm5DHGTvs5wftvvkgZVikvMKT9c"
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
