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
    "4C1s7Mw6jgt1YHVJAzNBbkQ7tkS42BbGawZ7y2KYksoKHhtp5KUDDyRJgsoSQHXkgeex6rwNhkAzm4xuRNUpoLpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32M9Q1jo6UB6kkfbTG9mWg2bHFrSywjoN6BjmuVqBkpoUvwzXneTHZw5xyzi99hKn1Yz5rHNVM4gyKQ2uGmdUC8P",
  "key1": "gCCDYLZH2NVoZrGQXPjWPCMjUC8c1fR2PNpcBDhr4bHueCUyBTo2N44cAcedaK6rcKABijVoKqmkNU4RXct6eiF",
  "key2": "2Uo7fspsdwk8EFvebQVDbQ7TDvf5FMqBTuhrMPWFFjZ2wD61XHM7KdACqVEjGYHmqUtFgDZUfwquQeagpCS5817C",
  "key3": "ZcMDpopT2NSgYhSGrmzKtXeFaz1XU7Gx4hye5MXxJiEJPrPqvBV5mTQFrMNFBkPaoAEyTuBhnYoK6jVzMgCjqmx",
  "key4": "2N74vcgCEPA3hY4T4WLfY2e3w7mUswAWJMmupksrKtDs8gqndwWYKrbWZ5XKWGoD99RxAvme7QEGSJtpEwpaXFuz",
  "key5": "58eeqZ1R56GYPT1rLduSndMF9YLPR3HEn2zTh3QY6FGP88V3Uqg976ka63iHHGWye5KcLgVrArd5ndiBibtD2qDW",
  "key6": "5hBfww8xUTjYeYWZynrWsJmYuaRunGhE1ePoed6SFxYAxZ3ruzS6uiCUdXLm8UnqPPi3wviDUiNtg9cWPMMLTzdo",
  "key7": "4ws3r5sQZWi9NJDjHPckFLi6vzUvHpjUcwnuihu2Hqa4yg75xEpnUbuaKJyw1736a1vfzNvaZixjYihfPqC952QA",
  "key8": "2xhqHFxJNmaZUu3apZjrhodZ6g1QoLQJBCZBD9Dp7cAJEMCi1kQdGpW2jUJ5Q8uZydQRBnL6SMPznUeQYrh8dVJt",
  "key9": "8Z4D4CoGHcjLGFTt53LhZ2W8j7JyAkBaWDVwipeSDNpVTbmErE1kiFZQz4y7UZXoimj5CKGoaCWKbSeGco7wN9r",
  "key10": "5BinfYrc9czGccNoEwLJ1FmAg2xPwEdCtyczUGtmU2zKqtCbhU4vZuzbprWddzWrrMA691Yh1hKLf71oRinuJTCK",
  "key11": "28ZqcvrFEj2ccStER9GHsurG1rU99zQuUeSig4vuGVAp3giF1dbvnH79pVN51aKdyELHNvx7u3CSFTx8A6zrTjGj",
  "key12": "QbUP4M6zBmNKmmxfdUAZUrnj2uKfhS5dkmwunvsiP26t3wGumJujCDgpoFf5go21VQxyqCW2DJ8CpPLvqT9DKP5",
  "key13": "3vesAc8nEVWEym4gTbgBxtoeWGwKDJ7Z2cxoC7CNGswwYSs7TvnzajUTHohY4L9gF8uF7psEApjL41geDtz4YCoT",
  "key14": "mDYdAQqQirboQefdsyU97fT5DvSWEw7gP5D8UJS6ufaXjJiptRLZPCovjzB3PU2HZvyRVvvpkAbGooTgAYy8N5Z",
  "key15": "GNTAPQuyBRKpGAYiQVDqfbkhMS8Hgosxtx9PDsf8RKeEKxARp7nXbp1E8KANvNdgjYiyNQiRo8rGr6cWxVaXerB",
  "key16": "2WvvxQEiZuQL1kqq3L5huniYJeSCK1HdkRFEq7eP3kw2cuUSYSQD31mQECR2soFTwm23WEf3HeJisZCjQcSgqGTA",
  "key17": "5utHUB9gC4D6nt9ofzZ8L5sMiTzNyus6EjEqgKCTCnt37EnXiCPzHyij9qUkBTsefweoZpsbTpakxg3NDYxEahU9",
  "key18": "5Af3MEzcB44jzBfh5eJfkgkV8wuGE3frv6TLCMCDkA31jKELaXCeHaaLCksoAXwXPewiFndA5CFXzNngwqFEapBX",
  "key19": "5gGda8Co1fdvJMxCCTDzCyhYs7hyK6u2jp8snJqrrLaZBuE2mSADu5hvvcMMp1W2NY3Dvh9wknY9rYfuibEyQq6y",
  "key20": "3znRfqK6TCR3P4LxXfcrFk8boAjAeprftDEbGpbFhM4DVmMZ1Z7CgAxbua7nFsKx4YXXSqGjoXEgZ6NLA4Trp1u",
  "key21": "3Q5uPKeuzq2pxteaZwkdz1HxqNgz3gQhC9guwiUsRjRYQ4Khq7AXsVRxejRwMWCN8rzXpbLncFQFJXUjmHsS2oeA",
  "key22": "Gj83G3yBFKxEw1q4AjfKgW6R2cs5BWu4bY1743hqRDufNgzTpunano6aydBV8UF9pTZ7T6QD85TFv6RM5fmuKka",
  "key23": "2P6Qfb9MurUMTdQm3EjPxZaMFqjeggXUuyV64Lutp8nmzXEF12hGFvyghtT6752Aib8FM4kuPi3xpzG4xMsbGJhN",
  "key24": "zCNccgH1WgZby8xThVDY5hce4cRKY48Xt8BxH4BKhTgYUPdPoGU4eGBthgnyU9jbZjhoX3S46Dzxfk2hUUQkcmn",
  "key25": "5tw7DGtsAUTLVKf9kzTw5f58Tgf1XewG8cBQRNhwJdAvaV7VcudVdqfjgK8E6zS3xRezUvLT4Sq6rvHwJWXNaVrJ",
  "key26": "39xehK8LLvHcm7veS39dhHhKbr6oNcKYkRSHX6qKmCoq6hCy7WpYBS5a5seeJN7vGLzA1h1cSLmatTHDvMb2Uvbv",
  "key27": "kEQDHYN8TMPftjKewKDKeqb67siEEQ3yVQ3PHRM65D8uJpniaKaq6XLMaAk5TxdKHtMJ3A2b6Zih5fNGb5NTKYH",
  "key28": "5YxQmXMKG4A2S9hb5CphCuf9naDVScrdyh1SSJhqUTAPrFE8k5Qkrg5F3uuuwxQdww4uHgGD6jAwMJCLp3WUuudg",
  "key29": "44m69CvGBosNTKRU746cgjDYHBQk7jF6jR4H2XbHmWbiiR4CXLKd3MLaYKJ5jmzpGqCAa1vTYifWFUp7zzsA21Us",
  "key30": "4VL3DCixdFAevocLgj6b2DkeB17RTLnYbXcDTbxa4zxmqxxHVAZFKwTVUthx7NSg2kDNDQBBDaYdXoGRE5FiyLW7",
  "key31": "2A6V4N2j2n5yXQ7z1aVcNKdW92nbBf69Fi9Jq6Q71cxJovzYkQmVDpHQ4BSx33UKotVLwf8dmttGhCwYmuuqQsuk",
  "key32": "t8XmV9DzBW43yMLGpKyJgkVKfJR18nw23AcASTqBYYZeBrcu9LwroYpjRvvrYPKLW3y5exrPfQgPLUV6rE4GCe6",
  "key33": "2pdrgaxKqwcj2VzLZRD4kKKEiAZewvAEGYEkrrtVazjQVqLzApZPDyuXEWB1TqazyYZamo2A38CL7GD7mR6cqiBR",
  "key34": "4yF3X1VMXks6BGnVdpW8tt1CCnT5BvchQPVUMGAp73oeQ7jfqda3UMwToquCBUMLBKWxwJv2vjM5ALxsPdvbF75Y",
  "key35": "5u2LDag3nnmpYtokcxueNd5xJnyCRwvvnhfPstG5qFJMvhnttTCmrXM7BhFZJUL2nGmk3vF2LzoLbXNTCVtkeUeq",
  "key36": "4iNZcdoYNzWrijkJPt6dHKpkMAnKM8LNq7SU6SqLX2MGjLuFKFgh61Ama3F5bfrMP2qhUPrPki7ZZKy3hweweBGX",
  "key37": "62Sn6DbAR6MwVhcA1hZwnmmVJX4cT9H9YcMnxmErgaHZhD2hzNSL2wwtHJ5QLB9Z4AP8M62k4gSeoHFuNF1eSakW",
  "key38": "5itNp1ahipZ3pJ3iPF8dcwgLthcY9R54E9QX6fPC3xRJJVzSemimUgSseHDUDUaLVviWb3UFBxB21zQYJrxe4ynb",
  "key39": "4NWrQW5RnwVSKnmC3vhDYzcCpM7aXvvS2TTqCbHWwF5uMUeHjJsisSW78w5imkTdQazACwQz3Vv3DmP4MtU21iS4",
  "key40": "5S9pVLXZUiockMtwttrTxGLccnAY7L4Mmyz87kzvPSEkpRT49RxbyFuPa6EtBNBVtvvmgDeeZ2NfHDtAMo59yxxx",
  "key41": "3kuqrogYqcS9AsxWJazPY9VMKQ8sqaHaS8PUmGfr8EXsjKGwdjHPMVRbfgFNbXNyDr5ttBLYo3yaB1AxPJzXKJKM",
  "key42": "3EWMN3hF3gVDpKJwm8JmrEpHtBCkjix6RMuvrXymvxs82WTArt22oqErKBSsey8pM7fmrqB86yWFynntnXhHTUqX",
  "key43": "5xeDTW9VG56Sntzs5XayPWohvpz42SgP91ag5Y4HMaK59JX3NZxS3CyU4tve7pNMnjH3JbzraYb9w2z4fhH3ywdt"
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
