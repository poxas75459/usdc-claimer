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
    "z6zWPVDADzvKW45gH1tT5AY5s9mkXJtsBqE3hjacmcV34E7dzJAdHpXL6XpRdRwUezQS2ze5fZcSC5XdZ3icX7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCKzXqkuLWHS6yiZRYuiQqYTf5WNzXVTDecEJqoMSenePHzk6ksJvGbMhKLyjMFqqtczb1LhagYyrC6nPEfzwjB",
  "key1": "LmZd1LxdNxe9Xo5hagDAtAY58uBq98askxJmKvfn2SynUf1TrdKZEQ7MPcJWYvJhPsC8vjZ2a82dqDZmtGPmmzs",
  "key2": "5NbSGRbJzj7W9StmZa5BTmXc3bevCcbbLJU6TShQ399qGFkiGKwanH4qbYKde4tMpCFusFVRCuLWbtQN6KznsnUT",
  "key3": "2S5FLDsL7f3XkWhmvFoaARiWcoKfar4b8CGcjj9f5MqMGQFNUqmT53NWtbqdkcbCbF4ihtsdjaeYWae3K8YRQe4g",
  "key4": "5o4kPUEQvwKRrghAp2c4Mox1tG2NdxFFH9LC4tbAHW9gEKPWrmSUzMruxPm7nM7Urg8VR78367z6zFFoHKMCs8CB",
  "key5": "27kuXx9FKXVK2LRYiG6oS5ZotH8LqX1NDwfKLK76gHRg3be8B2K2bv26NBWX2VZVmKwP71hHgPaiKKpuEfmVTVUo",
  "key6": "2JH8Sq1e9DQaeLkSmZUrgSo2PUrn4eBrULJY7cciVxtnQaoMvWoo1JSfo1HHnvopwjRbZjXzf8UF7oxdj1X3i3ZC",
  "key7": "3nQiKpT9DKvKnxucWTbbQhwN7KPP575xJBDsudhR8JU7H2rvYccyTC8zqTE3zkmGzR73VocnfbzcHVvnqRuAbhxg",
  "key8": "5ePLmcAeC5kiG5DoywaFbm1pD4qVGcrSrMFmSUFipw3hgniJ3NEccpQSw55vNCti8g2BonkGXfznF2wqUyxLr9qF",
  "key9": "3xofbGT9sx2EJ1RcjhSzJbUGJFKsrdJYHLixp9pakU1hzG5v9a6sPK9g7Erb4r68hLnibBBRVF6RBfNqJV1ohJa8",
  "key10": "2joSTtphLqoA8MZ3Svo7cCMPFBJLbZ6u6EWC8DXLnZkCN78TjFBFk2zkd3PYJVeZ9cbSBrf2NWrrs1QtngZ3x6uF",
  "key11": "5W1kkC9TPizGkLqV6AJfjq4wbdUXd6QQtzLkN4q2JhbyqUysnJbnPxMfZtC5gUR562uxFfWfYRSKSX8pgSLRyVn5",
  "key12": "EE1rQnGDcaeh67APdnDFhf8kspa4yU2CBBkvyCmYwf4T1mnEFrpqDxm3QktZV6KTnGEAdwEhfYfpEwvGTAJUirC",
  "key13": "4A8eUaMn8CQWwrpqvxs6UvYoQLWhf9G3u2aWpBG1wKCQn57RPBw4Vy51w3xpKxtJ9e26KRFXjrx21q7ssds3FHVh",
  "key14": "5jDM8TbGLhEDxfpD4Ln5BJpMndnHBb34Y8Mw8W3eYpuQnsHHVm8kCg8b6EuJXTEx4vPChWJNhbwKhLWxrrRbbGRD",
  "key15": "2PTvybCax4XjKacaKJoReYvfMRRwTYh4q3w8T4bkhfHeAaX1suXd7XGGAVCjqKzB7YMdpR8ppSfnHwaTRBzApdxn",
  "key16": "5T5UuWaNvHncsFSJGhgQFLmGUFEzKWq1gwhxGq7YsjaQbY8GUwbeGHCSGdnHQdwHzTYxokJN8ZQV5Z3n1PotYHsv",
  "key17": "4tTVUkak2KFCZz6s3KvQw6sQw4tLsw82UCeGLGxZKKWyA1waYSz1jdcy3AFHoyq7rAnkF6oRckB8J96vZds6SNy8",
  "key18": "48qq1m4bCSVRghoU31ZpsMQfMtYPZXU6skCya78w1ExzdAT7pNWRfYjsnYW8aNvB5JEuP5bBBgvDUJ2cEi7iqJU6",
  "key19": "224VGmtVbqyg95EiZDqMQuRTcrZ6RcgxuVRRhCFPkTZuS5rxY5WvCeHgtRZteApKUobYSGKXbiQ6DaXrvqyjHWJ2",
  "key20": "S7LJ6yJbE1gWNAe7Zsv7Tw8LJTbgALo3tpe3XtgfRarMLTVKLUvTmp6aqWfhWTm4fi8fqvVNeC7kq3nMb18GF1J",
  "key21": "5xwKcVPJmWmLGa9S1jCpwVKho38EzaRxSmxNYCqJk68VEpiHADjPncKz91NRWuJzeR3Y44HqA56uo9jpCtc9vobm",
  "key22": "5AN5orAqxzrXjry87qyGDti9W6oLAbCy785apB8xcMpDMwRp2iEL7LsF7h7i2EwqgTxWwddHsE4GGnrgCqmc1jHD",
  "key23": "KA5yMdJuiRzCG51RQvEf1WKckVUiVX6V9zKWVx5VKUptKMKhTp7DiK8BTDSvZJJxPRD5Uu2qoVy6VRjE7g4tikC",
  "key24": "3dXwvrvg1wAeNJNFndc8KsbGnYdrNkJhsP3Cu9FRvVGwrFgx99PjiDDLhULH87SpgPNVXw6vD2sVJWghbqYyahVA",
  "key25": "3wXfPnREN88QixitiAxvg2PirmGvbWAuh1gjKN2ANsGu4jHRd1f3wzSMA9PkufZNQST9vHtsDyBPpEh6tBeykMAj",
  "key26": "N3NC5CneuwNEtATfqSNEBri1nCBZXB56oyJ9YS36iuaVqdFPQiMFy2Z4DpV2Vrk6JPvzaMbg55nvAoBjmh6zQcR",
  "key27": "47yPdR69tZQEhYZxTgANT6qFnSBeyXxVrGCFcXfRLpAqZjrVBhQp1z9w9h1EUbzAT4UZCnni87n4jnJc5ErLL4yy",
  "key28": "53qPjqQYcBcp3c4bMoFXcf7b5NnF5aMrALJozyfVXFv9BNXtBy3UbFkCgDemZ9Xayk9sW1ZekZnYBsJvYatj7tk4",
  "key29": "3uyYjDBM3QZ79K5rdPjsQr35n8vMN76o4fYmTiWukvGWHz5jkhZagGrBJskAUXAp5MS67tbTKAiKAMwFtMNPGgJK",
  "key30": "4e4ftGSGHoiErp8JKuiskQRngm8PfcbeiZeMjsYeMBvagyQzJmYkjwhXULN8Nm5GrPQikgcDXznBtaSyq3GwemwP",
  "key31": "MF8YXfHop9kveNYTJ6e6Fj4N4REwUbpVLdJjhEt2BJQYfamW4SeM5z8ZPrWJUYZJuXZJtf8DuCWaPZ1BTLZB6cE",
  "key32": "3TfnpfyPxgM7HZ66FMzFDsSYJKgmBBQgrNo7BhzMoN16McAE6y17ALidrwDfsDJ3TKQVCsSdXeKExcH6LMLJnV3r",
  "key33": "GCWeqhueC8gUrg1voLkFDsZpPiCQSxxZ3qY66YvP1BRHFzAkEVL427CAtz1ETnjrryAvWkHLmdR2cde9amQzyxR",
  "key34": "556mZDxyYQ3nc8C6W2s2EtBTm9AQbFMHPuM93XjAED26jtTzezgqXTsUTnhwE1cuMp79NfYuw38YJ9SA58jZS8Y1",
  "key35": "42nF3a8ng92NY4WMBigbLNqxByNLp3EgTzUsbwCoSmByP9CeUEXyVQ5Trema4WPRMoqMX6f41ZD6PeVPdwfPFLe2",
  "key36": "4SCV4iGf1q8cvaAmAcn6G1qD5mW35nQx4Vb2NY7LfDTQ7nMjzJMBoprA6jt2jPXXV6EnaerNHyvAZraVkQX8NLxT",
  "key37": "2Yu5PP6dhW85vTsP6xBCgJbYehULZ2rEhraqKMdYUKQkkVCj62wxs9UHo6NYspULSg7ic8rRWBj7r44AbYpMT2JM",
  "key38": "3sdEuncNs9MEr5hMKAuuyiCVsFFukdMZudg3u9oXVHizzMhodqrWJwa4aBcPUW1zwSKBnKdf9C9Aqi7uiDXCXhze",
  "key39": "39asLQ6X11twFbZJViwt9QXAGY7uZniGsGgc6ZPf8ysRgn92xToxcFCQX753xA2RM465X4nzfHyim2F9BrR9tb9A",
  "key40": "2CZV2fPwLujiswtdDufFNqdJcwjFJrEuMQHb2qzy9THkv23qY6ipAgwv9d2wZ9tcGWpgKMPMdi5QxEqJAmzNyh4W",
  "key41": "2X8vAteqeAtVmvSTM3CGW96wn1X186vMjVb5HUSLTJYKwKatjNtuEjZDRyZ16PHGoqdSkAw4eQpQX6G1KCX6mGoi",
  "key42": "ez876vCAnjHs25GxLDpg6iQTvbp94sxKfXWcFW4FQBwp7AX3GCfsooY2GdEtKSK5S1hdxKTkBEvFUgMYCT5BAGo",
  "key43": "5waExHnSp2jkWWJUL8tQfUEfUFWDEiM1mxV2GHAfeQPEGsJV1NEptAPQi7pU28mjxK84FDpSd76j3SgqXEzfWCyB",
  "key44": "s9TL6zfPuGvvuhawg2AZdXLL4eRAYs4QkwetZxKrVcB9WWg8zgV4TwoVNMhgsJqNQtMUViM5oCujpYrhskiM6QF",
  "key45": "v98ptMuDm7uZ8QdRmXuYLvHF8jcuJ2WLHnzmTFMTAm4ySE26zL3LzsCd3cvuYGDKKeEciyPnv7bHicRyd9XsNDs",
  "key46": "cnXxKYuKhnHnbb99VF86Eiuo92V1r9YzXrhd7xZGLSeQ4EqFqKTV4dwU8aDVdwUn4KjSky4mVmttk15MQFdwwYx",
  "key47": "2MPkWcEQ18vxd5VHu2wsDuVCoahRXYtTj2Wba7QCjDc9Qxr491CZgYRuJpUj1jtRKsHUNbsvjdPtrLbznaU2wno6"
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
