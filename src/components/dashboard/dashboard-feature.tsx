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
    "4VUdi1wPoYGAqdpXb1uM5JMGkiut32Ari1ZMVk9SxDkFWd8rfKer6wCsrFbjQtbdrxWwysk37V2Hwasrp5ZZG7he"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfSLpLXMuPfktmGmEGDhSSKSAR7d5bffd8fMsZuTp9mmjPJwk7MTccWfw9Q42kyXdJEcsCZP724WTaxVGASJ1Ss",
  "key1": "8trUFFeAcVxc92Xow6SgrjPpnQF9KBBxkt32DNwdz1YyhRKH9MQt7j7YfenUtcbpBNzzSNNkVmBTePRsLp3L9nf",
  "key2": "3unCbFY2Z5M5bx6VharuWWjapVpN8HL7oT7nxcrK8CVbKKjJ8nLtUXc43EabN4Kw87ejv34vNaixZ45nNmJogBMg",
  "key3": "3A23R6pwYRJJvfUB2pBTRmKS6APuWnjFwNY7P5Bgsuqta2npZHuZ7UWA9AYgFXFwDDQ3zX1fsHGh3ugsusCe3vwf",
  "key4": "43Pa7VXAx8L2Yod2wiL1mYmXiWBnjbYhyGAW177aea7Rw3puB7QNyhW8Zg2jT9GLK8f769NUb8dFk1WYSAxbqdsL",
  "key5": "44cxsJKdaLB2PX2eNNTHA6TpXgXoUzejAUbShgDeLg8vxmGmvnLp3N5MD4DfbiRKorskig2nELoT463ziRb66JFt",
  "key6": "4xWH2z34RHFKTq4xsg18H1CEZbVdbZy1AfysbC3FC4tKB5ZipC4CTe1TgZ73UMMRpdVqDQGvZjL9MJJXK2j1Wkj2",
  "key7": "45w6FfXUuUnAj92VLhT378MCVzPtXcBdZzhqNp3psRT8cZ17j4kYhMviFB2H2LK9R5u7pX5HZ6poXt2taGAf8NjE",
  "key8": "jhKqhaUfggA21tjwreafMzdPvfBxaNRD2RzsEw61Xw4yJuThCsXwZS2fiinroXzcnUAvLoqbsLCGqEQAtrgCqMw",
  "key9": "4xjdS1BogFjhqVif7fKgho9AP4BQMdpxmw9ecG4M5fbmUr66qTgAu5HRHN9aAtKC74gBpGvtW7WZvCJWFjZXujGT",
  "key10": "59rQNAYh1ceuhowhrFm6KiuDynBsdVw3Q7HLobmjfqBxHmrj2F9HndQ58Zgq66TwjqoBeUhysYhMAymXaU7gpGNA",
  "key11": "29nm6exWw4fTj3fEnjqcaZzSeBwPHyuDipLqSMJGisMSxVD29U2Xwj214XQdyRcpoUGDXNJiu4ur5VHiorAV93wY",
  "key12": "4CJgdMuM9NNQTsRtWrcSWTJHirfnfDtK7iHKLachBkdAT2tuo1TP59W5QVzdwcQ6LLXBBkLN7vWuyAahm2o52ur3",
  "key13": "27xgoonVycJ21vK9Hq2WcUibwcao8es2LbvMek2aYzzVp5VKzpsCWcTPiktzeY85NR2T6vFqqDoJq9CpbdoCS6Yx",
  "key14": "y1XhKnQvWgmoyE1rpBuK4yw71bNNNJb5KxwtLiGLzh5nzyrmcMQHp9QX1W7AbTohYku1buCLKuvqdBph3DcNEg8",
  "key15": "GMHGyARBauLqxp9SA5wKqP6ro27WtdyjnCahbRP8U3GVGLtZivTDTRTAgs2fcJhx8ZhUGkUsEh9qCPfzhqm7pBx",
  "key16": "w2cKQkGYSudPPTpiXycknMf4rLypLejRhHAivB3dsKN7yk69KPqstmAsMEsk8BFz8Zerb9SS6msR4ikwQXNfWTR",
  "key17": "aXiyLHHnZ6H1dnY3XrZndHUjmFGFpCM7zbj4QQiv3Hu1zn59aJTQ5CJYh5Jzw13D4iK6W5SsgcLEHMf4K2hmRyh",
  "key18": "48mMk8F2vuM6fH8QGCHVRZgVWiAruw7yBxUiE3AKFfgDv1MEuQqaWjg5EF6Ss4xWk7fD2WSyugkHEQiMreup2gon",
  "key19": "28RCV8EsGK5DqP4o1Fu2S4ktXUouyWn8RfAMHtVusWh7p7p4x9mSojUtKQ2y92HfhcxjtKNhQtkQUh85bL69vNWi",
  "key20": "2dWiTrvT2VY8bhGWtX1mSX2sBRCqLH8RjPgXs3sQ4aPY7JwUaDkN4eEjHGr7rw55Ra6JzXVM5JNvUZMhLUmAnUmm",
  "key21": "4qTi9Pfw2KrozjfyY4SuY27KjNgcTRRjD2UjV2FwUjXi8JNshWpLmkJh5cRCcSDfmRnVWE8goMvE3LcGvxuZz7XP",
  "key22": "59ZiJhPCpL5H9XRhSS55XPbhxiTXJGdMGPTic335t4BrDjKcHa2TJdU5RLdU8pRj5ZTHHoPYkE3hb8mJJDok4MhF",
  "key23": "57A3tyyBprx1LoeaopHwk8VAYv5GqzWmTnmMU5tf7NvUoggT5cPQWkS782XCrEE9SM9oivgo4tf6EG7hxNDb5ZaV",
  "key24": "3EsUGCXPgu526yr9GZA498cKvPmCqEqHizV7mwnk3cwu1huqsQ3FbwQJeFNYwq1ZoB4Ra17e3jot6Xsv35v1SFQa",
  "key25": "4Te5gBez5pQRxq7k9VnRNB7NsLr8WVt2d8a7faWV6TsS72fg11oQA8ekz4zqjpaaLZeppaq7wdfkvgGxsWj4GyXG",
  "key26": "wiZJe8gFUpzFtFc55jo3fbkp5Fq1j3HrSjhJvUqVM6gdRBqTmvFjzqiq7mq2hoxjfGvwYzHbkuwmRTmiMvXwDeU",
  "key27": "3rejvaia6HYbbGLtQzpc2ZEQREGdFVA1sJPYtKxyArWeeCR78evKvD6CmFWVRBKsote4rWQPaJ3EFmnoPHCZGc73",
  "key28": "5tBkAT5ppMWbGBtoNU8wKhdYZZBJSxH7URZubobgcg3QvXhZtsfSnaSePMqZtX1tBrqZ3WZYb4RrFSc9RcwVpuyQ",
  "key29": "5HBsFzPt8oqdqeCHNPLt9n6ZPMuZXDukQQcvFhusutAhL1SXWYzdBVoWvVXwQJdF9DtjEDuXsCKNt8HRYAHk5eP5",
  "key30": "5y3FrC7cY4JB3i3ro6jaXs815PFPz5dz1dzw4DfTWXLP6aGD9zvAJ4dxr2XGmz6ZKWHpGKT3w9D7ZHNKUtxRKW6D",
  "key31": "5CBdegEx972ysqTXdAit56an7ZR9D1Y9mHzffnTgjf5VBk3MNvrrNRKRKwsD2rERvuJikoU22XHyT1xSEH9yt3si",
  "key32": "XcZDabL71BoYC82drHEzoSPTg7gHNGDsiLtJ8bmDwJz9XeK3KxNiD7JJmdChzUb6K9axayzS539ibF9dD8gq37e",
  "key33": "27vrwD1MFDJdhgXJ8CWZbTyg72DX65Hm7SBVRfjvdNniRYNnc4o4npL17WxWup4RDChVMnoeusNxiPTcAGcKGdwa",
  "key34": "3oHVi5Vx9op3VoxWcj5FgzSEMo4AXnwxuSbMdG7wBhA4Y7MauVoyHwUZSG3CFgBcxr1qZdJZrRBPTvWehypoYHTE",
  "key35": "4hwnMbpvpPmi5axf1nKFTCcZXb8ZT8vuJiJrrnreYK9KiPxcinJfGHsqtdNmJUaPKJrS7HfWXDrqkYpwFZvk1J2C"
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
