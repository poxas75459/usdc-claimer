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
    "4JCJP5mfGUz8cgfV22PXGmPAjxHXrx2xH2VJz9vkvMycJYPE1VexfLnY7cVWBfeXLiktdb5GPKT5xodTFp16ERDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jremvdJW67Xm8rhWUrNK733BTFyxEKxQ2edEYfUMAvAMyXtTcKpU1N3fhnKDLcD5QZLpwYyAkwR3gcNvZrcrAgR",
  "key1": "43wEcs2aZCnQDCs9MKLSUPAREeXtvkDEyDgtwkGitrvUhRQaaMg3Pdk6tEW2oKJ6YS84qvCKTiftnewZAFtNYupa",
  "key2": "iNn216EFpxp8fi7Fzp2rtHQAScD3MQtBKYSZE6Q1ht3WoNEw5ZLnhowFKKv6gxR8a7zBVJtCaZXZXbkR7odceXi",
  "key3": "3GexMY68Y7e3YDDPZ5JhKoV8TypYdqsqqiuK7bLaAMHpJpMngxY4contyC86PHqkkc28xoAzf2DVLn3CX7aim8Wq",
  "key4": "5hZiR8bq8Qcn1qEwHLEMoQajZqzScSEioDXTbWZqjNMiPrU3iBhsWgCpZ5BurBzyfBQ8Etf59uph4SfCHXdga78g",
  "key5": "645jcQnBFuJ3WHq4vTY7nSeUQjPCt1TDXEwxsgekuiaw4fp41sbqUMgPGcw7S6P3f4UhFwd1LVmyboPgvKTPM3SV",
  "key6": "5hcj4ig6BKPTrS8w2pU8TNF9RmM2DvKxERbRFVhRk6E1d8ajhe5B3sMcwEZqZENhzMod1iGErfdXhVHPYVqUckjb",
  "key7": "4V9d8vmFViaN8AvfhCU7dJD3Tj5WxLR7cRMM8HP6zGbQG4QRr2UPiGQXQTKWLd7Crcx8KL3ZGs49AbU1PbKuz9wQ",
  "key8": "EQE1Ua8dsmKmUAf7WFYB4iLFuUmHrXazoDgS3AyXuF7xVjPX5diZCckJ9URFAJUQxXBtfw4B1AAks7MYpLA43uQ",
  "key9": "CKmbMHWxQcRuHdh1Hdd4jYCEENxf8xA9CCgsQAx7BKqht9smicFXCXHTmuYt4thqtKBhspmSvLou9UiyRme5PsP",
  "key10": "4La4EE17fUsvvJDD6EUhZjZD4BwCFxK8tXsaeMzyUNLbt5r2xP7ds3VYRKZuze5XtLZMckpd5cbVsTToccgEcHn6",
  "key11": "516WwtSKqSfU2HkYPUnNfdJoZrRSHvTXpxKcRag8FZHZkL2QFEpZzyvAkUU58ZTteauinHtiyy1HJKE9ig5jT4dg",
  "key12": "4vDHbqe66PcUy9yhJV5GhpDeFc8uhkqVcFcgtDR3qBgh3WkyA5dLC4T4aXhrgLonf3ktsXFZatiYpXgF2t7TKhzj",
  "key13": "335T8wKwFfoQk5eEZQWZ1bYhWAkuYprYsCnWu2XFyLGb3yBa9MePdGXFwobxcwTse3NKwEF7MecDoQ3pDbWPT9df",
  "key14": "2HhVoSZfmifay5rdU9UrTxt2Dn7usLbUi9iuZJM218niAt54n13JcdmpPQd4ahXrbqivZkJSW7Leoy7Zs2ZN9kTX",
  "key15": "3NrXFrgakUhagLfFMDxbVbtCkWEF9YGcKpS6fxrna6GK7edvpRjZ24enmNAR7SienDzPY28TJR7bg5kPA9tsy12Q",
  "key16": "3tZxD2XxsPxqDKMSTM2E53kWUaBxG4iVEUufZhAfzN3tLdFvCzV6NSAASj8vvEEjhZi3mtzanGLhNHrvuXfYKgD1",
  "key17": "2rRwztytHMoXLhXZ2iQRVYRJi5TSm6FCWNN3MXrqXs5aoLghatve7xPXDewkrtbSf4QsRDCWLN66Q15YpsSaJwHs",
  "key18": "39nyDfC6BAQGJsvYBAe8WnYYTWUFzmvn5fWmB8Nau3nmHv12TAQc8ytRoJE7xAHh6Cpp3TauwNRNLjoHBfftAZDA",
  "key19": "2zXztgxxM8UWj5eKKzLVraPbNxiubeixjbwik7952jruLybocTf6bMFMhymwyFi9UbuiWuGTVtQLU8Fg2o663nTQ",
  "key20": "3tZA8CWsawo2xSRtnc7N8396L9pU8fax9a5b7JzJRbsYwmdLYHUXSb81KXPgpCjgruzpvFtMgmRucG5PuyXjpaop",
  "key21": "3tit1nWC6X425AQtiz28DF6uGNXGeSDjWep3KYQr5CAtbYiBZQzu2TKafEa6fRazNhD546hkA9mW9ENYjSLvNFcK",
  "key22": "3GMTmeh2k2wSaTDCVs4S1QWxyg3Xgu81Z48Z6n65YWj61MHGpHhahMEXihEvBVQiBn27PH5tx2UagnYRKYTDifT6",
  "key23": "61Z1yfizvCwMupzhy2eiVNvCjekyjKp8NkPBohYjbVzujtuskR9EciwbavKEux736gtSZgUBBuPu3tB8mcs9Mudz",
  "key24": "3VNoNgbxRHWWAMkYZK65YZqmZspVvhBGA5F4fhov5efYFe2nSNhTqTjENLnkvEpLaUUA8i1dQSXo3C49ZEay6q6N",
  "key25": "5NreExMs7CD34yfApBfs92qzaTPzwFxwQv3rcoZ3MoRNnh8ZyijgfEd4zk2weKnmdB3xGTadRifHoLij821dnyzA",
  "key26": "5SCdWR7SgSkoY8b2VZCdr5wdc3aFQPrYQP75C6uvMNpxnAtSETideoS8zmkNx6xeWroEJWzAP2XQj7HJFkxutJHJ",
  "key27": "4tHjJ4jwLP45Vz9ydaDekeUk6Ct51swqANaYvb1ApPjso34AzB5gBVyGaJV5w6ciA17kTCKBFWeDFRqs8zYjW6du",
  "key28": "3PgL4dzt64rJdmUodZJ79U6qUMcAaMWySaxQTy9Dq3ZKQFsQV1a3Qbr84beb2fwRRKAkk8sZgUG4uj26YoRf52Aw",
  "key29": "5hA8maDSjDDVDJ8CPtXQpNQ6BS7Ts1jb4y8oxBVX1MnyMtAvHuZ9w8GUxn9KGaoAbaXrpTXBkZpFAuHfTo67tvyD",
  "key30": "eVDMGdhgE2j8vnhkbW2cSHquk1gBfhEi25nUwZ3V4faN47yYb4ztkS6xxdSMGN8hW3rRjk7v8ZjSqgAbhs8oJsj",
  "key31": "2o7m6WFrKLiUkHhjQLNGfmZLXvu5V6iTDnaVhoCCFJJXxQLRCHNQgHNTDHXwLFepUZkA2mQiyzWWKf7M24rQ8Bpu",
  "key32": "5DQdZtwmWh9rTqneNH1zr5nwZDSXLSKzcar3pS4o5mSCSbRR8frkk7v6GM4nwFMfE7H9gdikgswAsDKpyTfyZ2om",
  "key33": "54UMewDnwT4fxtsncF9BBXN4Q2GKHCb1LrkimRxd4vpkY9FUzqRoMfC68vL56TrXJfQGGSNz9GXhjoPp6J5sQMnp",
  "key34": "2GJKjfT9EL9oHfFSp6DJcFsAPttsz9Fd8xxtEEGyWwofLz339y3BLgvPs7yzMzQsHkfXXQyhGEQkGRL2gjeeoTP7",
  "key35": "33VxbU6FW3s9rPKq19z7q8NRssiTQJtz1MPTBqyhtfkoRnnrWKV8hD3JbPBjRPvryfw37M7bVLscLEjtPiwEydRJ",
  "key36": "56XNG67xwv8bfVdRLmTJFdBWDByqu4kGG1Vcd3XBuimvv1oNv9SG8M2458Q8pUCySv4qFWACe53Xv6ctyDKjYLwU",
  "key37": "ADmrPzyLKMNG6tjx9Gw7SbeQvePDg9vjU3c4Vhm8ufDX46FbrDHgxZppzeYd4u28CSF2oxneKB2SiHSnz244K1Q",
  "key38": "kcVyHxygh8eNz5PyfHjBhZv2gweYxwGCBrsaZExNpUhyiKZTRWKFgxPDE9k5eHFPo2vrfVQ5RxBTuTCTCCysmkZ",
  "key39": "5znwvt4SpUVRh22hQYefY8TgMmH2iUTmBBu4aBcSqRroHjtjaGyhL2yGSZeEyRYYJvN8hjXkQ7USz2wYTSQPc526",
  "key40": "3dRnARugLuunuf7eQyR5Ljq5G1fmkrBJdhha4kAPCcn6Uw5fZzGsuVV8U7H8w9F7jjkrtmivDoaxzbLEL4Xy9n5k",
  "key41": "2Ehpr9auBNavtfAjnLBzxBbQYaVNGdYk8ZX1Jr9bwauyJtNXk3NU2PdhFh1o7zdU1FYvufiN2HGETNUp1pEFQLc9",
  "key42": "3ysKtjAMsPnegdnjFwDsNx9xy3CjUBW1hDwGjELJXvS8bsr1NMcqBr2WxSy252EYQzVP1ZEFHU7BkdSf3AAL7Ti4",
  "key43": "p3CPT9ZkfLdLd6ZTRaZgjnRSazsyRE1X1k2dHjLtBWP1QQYxBrQbARqyx5okQX2cWceQ8hhDqqzNKRDMoYvXWDP"
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
