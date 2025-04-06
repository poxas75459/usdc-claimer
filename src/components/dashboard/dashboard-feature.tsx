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
    "3DKVtxWuCNP2SURB95syB38B2tGJpw1TehGW1HcDE1q1WpgoVgEzCgHdF6KkaWBvoW8EfjXCKBzVUAQVrn3L6M43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uS5o3q2kwyQ3mU98EfuMuvqvwUsyDVRgQaNmTR6seX2n4wP3P6WiB2C3h4EMdusjZCfYqdWxKsjUPnmectB249X",
  "key1": "37dovfXUWQ4CtCmynBpW7kicNZJXaDFbc5xMMg3pD5UtPNY6NiUXfbDoTSD58uVYq4HbesKdgLc8kpecF2deUd2C",
  "key2": "4ipQu1p85LFLyTBUwmpnRehM9utTsrWEpXTzsmc8DmoDCV8tEBK7naodPfvFpmdJob35RdhhS25TgqnD3MnW4313",
  "key3": "4wADBShcutcPJyiogHewTRuKHhz2AFsQczDsEQ7xQwbUYvstK9pkdsv3SwGmHp2cC9FBXRDZRWECS33z3qaSGoHW",
  "key4": "26gVu1KDdV2KxcAmVnQEe7qMtw44Y5S5vDSksgADhcqgfBgjFHGq1cQUj5B7GeL9iKcuQPQNKAdTkiz8YRUGjtqx",
  "key5": "3PPX2yMnASazDgqMFYRvvGJFC6R5BBzFWEhrDn7pyHVVb1CzeM9RQCVdbRYoBDqcDZBQEWB5NiSRPzLTr1SkZeUS",
  "key6": "41pGHpfnYPHkyLxRi3xzixA2zByPHu9u3s8JTomp5vZsfC8Ykb1Qwmc44xYEeN7UDGuqbL5xS6FDbQgZdW3oGh3q",
  "key7": "UjsNELQ5eXpPYTDNby5wL8fo7QPLPgJiZTTnfdsMkj5sS6dqU3q163WrpCkAhhEa8TZYJ1UdWRibPNUNFqd4zgd",
  "key8": "ktXqMDZ2qz4TEEzkrVV418NDEJFGUq9K9DVCbGEyFo5A45jDBiZmyiDXbBfP6VsTmiAXvqr4utyWMLcCPgRpgep",
  "key9": "56kgHfpFjJkGvzgMiajF8F4pRYRrHyNmfeyQU6dYqpPJkNX8w7vkJSefUrDfydmZKZdc2APCNaPo8bh8MbLE1wLZ",
  "key10": "5Suu4pQXuW6xG62TDpmQSdviBDtQNn4CsFzELv5iDxTs39nGuowCBEnxDiKZA2rJLNQvfcxVMgz45tiTvVfzZjxD",
  "key11": "3EJeL4doQJGRGLE8xoSYoXcgFM8X65G3CNAXU2xjtr2xMt72W4LvBESTvkN4BkmRsWEqfWk9sLdnF6Xx9m7gfAnb",
  "key12": "2fxcmezXZbU1A8gzyXdpQK8xQWE6VfakA1h8zj23dmiiSCQLGrteNfQ6MUGTWVTjeekWCHMZp6BfsABLWhEVmNyF",
  "key13": "43aRC3LFQ966TCzEvCsLCxsCigWgqxZ7evrBQW2XEeVMV2bGaMT9JEPe8fFkdEBKCWFynQJvdaJpaoFpe3ArCv4z",
  "key14": "55TqDTyS5gFgbbM241zt4ZkuYpAAKodS1HHUXqZCYdzmbpqCUyNvtmP9aG6T2fLn9vjFydaMg92Y2cQ7pF2tU2kv",
  "key15": "5YxDsdeL4qoqe4j4GT8FQ9phbmgUtQPbs5QX4hRqTGGAKkXc8mu8Eb2g7dFX15yu4eF9teP1ncnDibYPMoEFwnHs",
  "key16": "YgsJovpYgDuP52da7ZBifz6pxfJACAyPvcd316sMVwitGurBoEqFJeC28FEdMsqkn3d6fVgy48hFPgi6ppDLsPw",
  "key17": "3bqkwqHqMSiyJvpNGpZY7SdLLp4ENQUcuxZHZckyoyqUK9KNRMwrp8UjfL7Lrix1tsSaCnuA14mN2Ju43r3KSnzs",
  "key18": "5vRbMVXcfBMAj5oTaZMtRVZ2gWi2HW6HwwKLe647t23zdMCsx6cLHtknqeXng6TybFAaGZQohWBYims5nyjFzriL",
  "key19": "3kQdMXAfMjT1LShRo7QL4ck8FytYiN8wTajRWkrwXjyCxpC2vBgQgL1gAedV5MDYxniCm8YR1cHxCWwPAdZ8YNF8",
  "key20": "3A9RSwWpcFa2No1r7y1oDxv8N446JxKSAj6aQPqN7f4prv4F5aDgkviXSNPQLDZ5zqnQdh1Edz8EXtUi2Pn6Y2jJ",
  "key21": "2nNohx1bSNy2fwnnxywaktBBvbVR5PTguJ1AqRaU5XJ9AsPm5fpTGrGoW2MBs5zpJ7jWpKf1nMB4L4pXwfefq7KT",
  "key22": "4P86iSYcJTpT2M5YkFygu1PukuazVPmmMio4ncA7YzEgKgr4PvyBJWYEEsGBp43rrk8obHG3ikJeeKp9HjXYZzFT",
  "key23": "3BqwHdJGA5Lp4Sc975gNKRbasZS3B8UoSupp9dXEgmqEHjAs66aharqFYq7E5VsN8U8dBbf8Gnp55qAkfAYBgCvQ",
  "key24": "4pawz46da4CqPezWvuBfxE91RV6HXFUf7zxndG3xe6eQYZyaG5g7FSsGvD8NTZ2jdwodpRWatzqP1psHsdRB4vFn",
  "key25": "4DMfdV1JUWx9JV14bYSTA9ag59hT7Dc9wBexFbHGYNdZzv4oySqc5nG9HMvBYarPco8MNF7PPZs4RMgDrDQsKZD7",
  "key26": "4GojpYDJYNhJHHKSdTaRJChwVTwXKShMfaM3zEP2bpdGJrubZWqR11RJnjTKDA6daE4C1QsH8E4Yz9pDRM2cJadL",
  "key27": "3sPq8KznZRJsS1vJw1J3iXW6xQJcJnM2CvGKercBpn7Tt6gYqqiBEJQs9hLgCw54rbXyqoN5bqN9Cg1aRDjGmZoZ",
  "key28": "f4zTZetpcKdcndfpSP8H3DhcrawmgYgyTygy5Db9NSwPwmzyHiujquBZ5eg2JqwkBdZZxS1ao7Fk6xPyfeNNxcC",
  "key29": "3Hv3qws6rww95Xbi6FQ4wgQComCLHQC3fBCEBCBJmXptV9FvrieH1JMVnnWZ4umMqUrR2wWae1gRzKtsoDkWpxyb",
  "key30": "4v5d3A85rnsL4TgHaqAnbMeG6QtgB6wNSeKSzNGhyers1zV9GwooRQXCgGbMk7DGWQeZ1kq89ZErojLCTumuiPY3",
  "key31": "gsaYvrWmm9ddDsLcqG9Neky5GeYrNp5i5QgTgumfU8zNZnfXpkGVudDyvHkMBa445bFEYR6MBmCcy2XpDXUYazk",
  "key32": "4u7h8nCi1EcXU92Hay11o2fPx2r49EzKwQhYnxJNSagHgXBJ3VyaPSroa2nbVt2zYuE1FpDJctrjqtF9W3xkhoc4",
  "key33": "58fo1qoMFmaduikQrqb3G9pDZA9HBHcVczhdxbKLRBUue1acrvvCT67Lj28uqxM9cExBKAQoX5sbVj5ZVCegs5QG",
  "key34": "2T3UpmMqALYzDLhGv5xiYi2igCfLK4E76gYxnGFQWxUqKeqv8NgmWET6nm8vnSDxdbERct7SySpRqkXsLMofUZAi",
  "key35": "3kMuw8t72MLxfAMmXRDRT5sRbHfhLyUHreEz8VhP65DUZSkYdx5WCb1daLYN16Dzf7SvMeLZ5R8Yt12CCXRH7MMu",
  "key36": "5T584st2ZvLGfCPtxq7mekwd2ewweopr1SR34UpMLbkiAwJp1mvQCoouEq7dY7kEWFvV6tpF2qJCd7CKzmoDnozC",
  "key37": "2iYqNNCMztkY2C5nLryknDbxiCEh9R77j4sHbk6prsrSLBUWyRLVFhgjRw6Za2CrUveNXS9ciQ6sNpQcRaPL3pGS",
  "key38": "3td3FyMWRaboZxeqQBbFkStZK4SHrVmExzbuFk8MdkqAKukkqY3qtq3anLb3HpBwUm15CVbS5H787kJHcsocw5P4",
  "key39": "5A7JErP8amhe7x9ea3qLSVvgb34dc8PYCgdCDLw6GXzEL5TsNKzd7VjTFyvwU5Qo7YduCobmPRgjm6cpdjYHPBtd",
  "key40": "2TFEx9tvqvCsdHbw4w1UiyZA8vgytYj3f9dNYPTFJHFuKPk91ecum7DFoy3kewbEzk2irsrev5bnZqoLutHjfdMS",
  "key41": "54XXgKoDbb9TMjJcvWZLmZrfoVwyZGiUMmoszW3e8i81jtgwf8veTCKoH5yK8t4NL8btrU4y3QycjzfhFNhBeGLJ",
  "key42": "4AkSL4VL35XkwjzaMurJfzagVA82y7UQxfE31TGpVsDJQQaiKcMR84PGYvF2QbDoWimvma6XspifhZESf9z6Midv",
  "key43": "5oxUR9TzhkXFU7ip1sPTjbqrMEUTcYavkxKMQF6er9VgRS1ZKCN27qu2ZJu74if6tChfwF49Y2N4hSS68U6ha1MG"
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
