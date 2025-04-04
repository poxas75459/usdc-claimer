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
    "3jDwCFLCpkZcGCA51mfAptCSG7KiX65trznpThXgrfkddu4x1EH1apXDYskkKhNod8HQhrkdHP1dCkrCx2Sv5Rui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RcKJNf7x89KC9oEjjjbhJfNYHMXfXGJ4inEo1QszA2At1RbKS5waHF3MRF2kumfN9qVoemmexgbEwvTLctXKCsi",
  "key1": "4nx9p89WkhhtduCkc8NkWoUh4DfmQYYPkV7JZLzHGYRhcNPqLLwVXm43Pa8SJS1CLcYqAgmsbTS4EHsgDqQg9MEM",
  "key2": "2JdcUabeyPBQTiu84rUgwRDVqjFAcaNJodDkU6GEDL4owtPgqKABUejQGiDjJu2D6jGcLoBX6UFbkHQoXCqPZweN",
  "key3": "3gtCqbHKkboLg2bXaCHX4sDEbGAoyKGUF5WGjN9GYTxNxTNWHgBs4NgxRxqNUzZhubaomZnKrxiDh31xhTB9SsoV",
  "key4": "4hrhJQzjXWLDmz5UEbk17zxpjni3xhHdwjPGQ81Yt9fWw2eczeY8ps9wQUziUyuaNYkAVtWfbTWsMEVUC7SLiy1y",
  "key5": "2R6rWKNn575FyiNuSX7TF2RU7KG4Yq2GnTeFAyhaTqSuCAdwFwsDGMJSUDX3XtyVzLHEhAvbfRdJ2Teu3k7nhprS",
  "key6": "2fdMkykjCq2RtjR5KrLwvdU7qYpQjqYmfuoJY9UjvJL1bzL5bk7296VvegRA4iXYAX9efC7hMeCiuJcPWfrADTNC",
  "key7": "5moSdADeY6AxL1P62ABeN5hCLZMPXphRSciQaoykiXSJE6WXuWd3W95uZoqGWzkHkPAZsa5Cw8Lu8U41eu7JWGkZ",
  "key8": "32fRhT4pgrzqxNLZoJLc3PXadgcg1pNGAiqAveS1fdfs7uyKJqhvfegDjw2nBpERwES3MvDwnMDeXJ487p8M1ttW",
  "key9": "4F6EaZey2eSdNSvG8G1bMY3q3eaXjGvQyHN9TDJKGqaT3twQg3jADjMuLqCSiQrME6DaFMMhgYV94ahBddwXHTwA",
  "key10": "5k4YJC5uwEo4ohGDP4y1C4njdrrgdCoGThBNY6HKzqAdjaVqcur3ePfiF2M6odzwEVrJo3wxfUAiPh2UC5o19gDT",
  "key11": "3DZGSdFtANdF9BnB335RGdoxNBzbecmuV4Y4PaaHV5YuMPWxfS1sRvkAqJAct4GxRNcMPRsrTr44rK53RYsTU6q1",
  "key12": "5QLjTffUBGJStfQeGrxx6QKKyHooYenXpWaVPpFB4Pd7koGbEey5WfVJhkvWns8ZJXntFi7FAvHxif97vsrYF8FU",
  "key13": "3HEaqCfRTSgHvPwe3AmjsUCeA2p6XbzSBXV54N8jYSASMDm4ejGe48f17f7V6ao5NwVQvQxsxyGfsHvbKo1SeHqy",
  "key14": "5mMN7uhN3S8ohpHLgMQJXAAq7E7NHsc7GmTayZsBQjwvRmu14QF7odXbSEEFG4z1QbiSNQ1C7SescUA9X5GV2X5Z",
  "key15": "4uoPueHXQooYV6Qn9pcTZNzjUTaBHnrW9tZh3BKeqtfnkRqqan87CFm6oZhybQ7oSmuE8CQKEPzKeJgyWX6pxu6f",
  "key16": "3KPdPre37ksqqk3sEZKZBm7EC9jRKygj6FadAjZ3gAcd96pCh3k3C9guEPjrM7nQK9ejRoJETNqp8ErS3KnpSrUa",
  "key17": "3DzvxHbjAtzey5c44x9mPV6Wz9FQkuqK1KwNL3TMXDjk4XSbGbmAJofcJ5P792wypcEMEbu2R9XudTwu7Lmg4PLb",
  "key18": "2yT7Sx8Fn5wC4zTeFxeFLezPcbP9hzga6kZA152vMNtUBVMwSbLzdd6HjTrgqdVdDMNjH6neWbrdfKnXFsnZEmqZ",
  "key19": "2mLXrytJS1dnRwmKZcf5KGe9u3fj7cWUP4FDVR6NEDsEB9uqqLCuph3nPP5diXzRDJ7A7XU482irzxpCAPCU5ZXa",
  "key20": "2XaK3tjkKdPeWQPwvXat8u9kPTLseXJp918WyyeVc6eXpwMAKNnaqLsy3pu4c98AqtwHdu7Ay6PXrhq8d6ySTXxm",
  "key21": "2yw8G6YWGDEdBYuN1fztRAVGwjrfpRC7p9ZKVqWU9zWxd26wJzMSf1JgB5rJs39LdVNB5zYTp6QVUXQA4jTHHANT",
  "key22": "5VGJqdt6UTq1vCKwtCbXGSZ6Wv8fEEDTV35dHqsTwbwUYsxo7kLNnhdNSJ5pSRutdkNTpFcJXDEEeFmZKrbC37FV",
  "key23": "5dqh6gtTPriXqJAbyHFeA72QzrEs77RD7x2t2eUgfp2DhCtoLa2YXkze5YTTHffKC9e3JKNctdjt78i1yWwCkpS4",
  "key24": "2ucw7xw9Uq9pHwDnzmUSAHJduWM7Ub9wKQ9bHzR1mUB55Ue2YXqerGuLjefyLr7yxWXuqJZx7FJW7usY4DvoMr5d",
  "key25": "PbxEVrnd5ekzNbC8ydqaHH8Z5UedxKnjSFf7rohQhsCy6F2dq9sn7jP4uKM4xrKJp8QJ49RAxQH8bsSwBUdTVCh",
  "key26": "3wDemHF2T7ZAzGmZNJAAayrD1TU7XW2QcojEVtMUtfhm8GMiDnyL73Kg4SocvZhmSG2967UhAHZmx5YbxhFJg7BR",
  "key27": "4XuAuvpgVDroNnDV8WMKiZYttGkNvCGK559rMgrPq8qTGkiSgPa4QYv5QgQKf978TNWh749LKv9paGoXxD9HvdjB",
  "key28": "C3EMxbsZPUUm4MKt37sGbVsgRyekoij6MfwXZSmgMLmkE9qXwnDeE2RQymPpLwZVjVvZ6XHcfpGs2GFjcp7GPtx",
  "key29": "4k8gucqsR2tSHpJvAvp3LQxeCD46bjjGcEgULD9keKJWxFDpEo81ftGnp6gkFKywMUaJhHRf4BDwL8mJAcmQh7NE",
  "key30": "5kxvD2RcuyeZBnRe5b2hzbR2msE7ff6SS9GD9wr5ur9W34XnhtHf16ZvGZQdbj44ohecH6FuMr1Ks4yccKJgZL9R",
  "key31": "Z9ve7F2MA2y2FCiGZGNs5H88X2swn5BWhEhc6TzBT4aZubBfPJYKVLuqZu62HL2Y8HuDKQb83C7d7ozK2GDVoqK",
  "key32": "2ZVoT86UoPdgsGVCbLwmRfVbY5KLDACrRCN8Q1X2LJx89FPXYg2p4w4FTM18M8u8hSsxZiUnsn1SvpDas3vPz3CP",
  "key33": "8SrRdtcYuSJozoc8TrSVXyRFyyCmJhizJkxxcfoGMybMjE9nt2Uv6f4SMVgY7urgseSh4wvNgPW4Jqa1mcp79g7",
  "key34": "38W5YcCUt287GmP7fGHCt6r72bAZaZrLfXvqg7UYNrhq3NEukCBoDgYqTRSBXnQa1VH2a622Nast9cd8k7UXdbux"
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
