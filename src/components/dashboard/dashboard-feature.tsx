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
    "3W4zm1Xpc5iaRCYPEC12b8VwhyaVftgFUJpNZ6JXzh7wGPFhAfKwDwrjut4HVj9TKhhjqR8EpHx6YkB2N5oCRVdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrDrKjMReRZNuyCk41pqFYptFH1DcQ7T4Nu5TrY9ANWWxqwwFvCJmEapPVTKNmV2H9ETBZrdyNAEzJ2rwWpeiv",
  "key1": "3DqRkEUY97g7FZVJRtEZzMrKiVm71y7B4Gd1PqznfGygRrK9TcJRSLdtsiG38tcMWimYuoGq9V2cJk7aoLck57qo",
  "key2": "3hTWFmXrAyn97Bco6oZtnLWPe7J5aHJ2nxgC8b93FsyP6QJHtj6JoMS6vewm4v1P24jyfGTgtjLiJak4ySPArKr2",
  "key3": "5DJBtiisFZqPCCvM5HC1e3DC5Leb37zxZEE6AkrD33ce5ndVBhziMVbTopiGtTkHbkPV6p8pUWvakTsL2Dwwsg47",
  "key4": "5dHuyePDVLucixkx4Dpsy9CZE1MNQyuzg5jF3FAaTU7yVjAJpMgQDWQkvbfLH8ScE3SQx2mms313GhLUfwATrzzW",
  "key5": "2G7uRirvsPEJN7dvyMrcajpxrHYXe3bGEsWpUtL3qz4equpohnpsPeiYB3Q9JQWcm12kzeQ2G725fW1sZdrZRe85",
  "key6": "29sUgYi22pbKGYwpaspn2PuvWFmtppbezQYLj685EMxrPAky8AJh3QpKEx5r5R8RQHwAyTJHWFUHthgqqnbrpwDk",
  "key7": "QUfL4MQTjg4ox57KvGGzpQuESH2qpRQxaCpMz66gef7SrB1VBphuefNXpxeqUaCnQPXZCpqa2WSt36cCZ5mT3Tc",
  "key8": "2o1uDfefyowkrRQNaVnm2JGThCcbWc6LpEzKofiU66yN4tF8RQ1UsXxiJgRRm8hg5YNWTaWDvEWSXtux4krVZkcg",
  "key9": "wpPmY2BuHNhwDk9C4JpxzE5jSk3Q2nRFYuamQtsqZXTn76B59gs2yfYudmHu4DvXaWDhB2bMqzwaGueawhBAh7B",
  "key10": "24mzhY2Epvr4kEV74brDK2VNYLcJTWxJeVmtLM5GXmqTqn5psb3iFs4bHRSknVrgWdMj5WVox8qa2bh6ZN4NJsM3",
  "key11": "2hpkn1ZMAkvU1Y3KFmkN6DeyVxNc8vPuERt2XDEk9wSmq1yKGkPX1nbAax4DRxMDeFrfxrcnrXdQKhmpykWvF7V5",
  "key12": "5EteTvYCY21fHt24EfNG1Pz7ha94qefQwPc8rhFx4otn5tKE7KKh349pSzJGLqR8ip5NU18Kjb7wYcTkhuhejo2M",
  "key13": "2EbZwxfLcseFDePEqQCxJKpMvVK9BvTg6vKrFCaPtJpXz5VcroZqBA5Wz4szHAj43RsZ1XkQRg9j4L1JgKsbAzCD",
  "key14": "46Azgs6HrtV4wPSx31eNfN4arCzHW8Uugum2V5cAr2SCkTtHK94Rkxp3NfncLMy6UrwReuQASLCaaQFkZgXCbGCu",
  "key15": "BKjCHyabGfzJRhKipaaHg1LYydZb3G1FwWFs9wE7t9Gjp7iZ3BKhNYyaZcRZ8MfqPoUeA7J2JCHYP7bgpzfKhGm",
  "key16": "5yau7E337VaiGybGY8MfcQAbbgRDNb2cYfBqhEPSK68cnTxRApGa35ged7T3MyuTXwEtE2n3DSahp7vWb99w6MBZ",
  "key17": "643HSxaYivzN6nCkNAZktNpd7ypSzEFWkDLMdtr5aKugvcjbPC8GMYCajzefFik3C9u8z2e7kfMoryCcEep2EUrZ",
  "key18": "4wmw8gHp2uz3P1XKJ3QHXDDhb5qQcp1WHjBLhHdiauqPMAikvRvm4agWwLk1m9fimjFAmaBhebuYFWE8Y6ucSvrG",
  "key19": "4N7inSa7AquHc6m1j1JxponNn6sJfXz23Tj6eCHit7qVvPTKgtWy1s8ZNjbj2TQjco58yx6kPPnEh3v1rD4BwpQf",
  "key20": "quLjxCUQzFAHK3hgrzxGivFQedkLKZLH1TdL4jSJqEqoVHnyzySmPwKgKcEid9TEnxtVvVVH7DjAppsqEC1wcCV",
  "key21": "4zUXgwbAP525oLnkcfSrWBcwHB38MksLao7ZY3N4mTiqkqYgTPafbx7trJsuQGtbCMDgo291uZS6LFTAW9z1yPwh",
  "key22": "3WJ49srxMEPFhK86r6CaNYdNtXFxUBAsh6d4J7M1wah5D4eSYmedrrPNEztF7md86zvK3MGbBV36izbdf3HwPr2h",
  "key23": "54JFwpXyj7cP3L7AFSSZ7afsFWNyJjW9Jh82cXHYUoh29KWce1ZUbRkngCRoYbG8QN143EKs8si7EvqiX3Pq2mXs",
  "key24": "5eiv577o9MRTq2V9Ki3GoBjQ5Zb6kYmUV6TPAiqqBb27UxEHtoVZm5MQLPapoNfpitj9y8wQYpZJBMrVgE2pCMWe",
  "key25": "5Wmd55kWett1Z4M8q7FnwLqskyg3zpDhdT7HMyjkPbs3LwYKiHmiaJxSEWYABnPZGeQNW9MjshMriKKcN5nWD7fn",
  "key26": "3csPoxenJueL8jsZ44ZrreL8zcMXgnEkceWbQHs2iZShGJ4U2M2f9WZBdjLVcjoX3LUZfqoS5q1Fox8oCYMyKKAp",
  "key27": "3cxUZpNELoxnSYgc2Mm5T7XWWMFuAarehyAHxddMmet8hvSAxXMXApzxB4FDd7bcAeVNYybyP3tQNKRm8itK4Sz9",
  "key28": "5JyCV8hw63eAAZUktxTWf3KtQhU3w3FsWt49eZj7wGCgJW7a59Wq9vtEjtZHASx9GLqYAtXBn5wSYVyTa4QAW5vH",
  "key29": "4MKxicURyCVFfdcE7WpFK3Yr4mJU4ssjHH5kgQUb93A5xzZc57N24MptdHwe1mR13QLrQqTsxtU5YM2zKFBCFsL6",
  "key30": "54Vy3b3VtZWAk6J2xgmBcM9RApyBp3joRfg66RsiwzoFAfqAZ6BGTu7ZvZaHSnaYcQ1RN6kbkz7CkgWmuX6SUQTs",
  "key31": "3yG8cJF2T2Zu51qcSfXwfpt2c3WDUJvZ9SLbUnNnky9BRM2roodrvdfF6nt9nahdq7fwrrawmSSxBd4n6CngZULr",
  "key32": "5t9aFcekDt4n3EXMUiKCPcHJShjW6AWzTJMKs3VaauHc8e7boe25SHJbBRxRY3pxnGL496WHEavjkEej8KzFJUez"
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
