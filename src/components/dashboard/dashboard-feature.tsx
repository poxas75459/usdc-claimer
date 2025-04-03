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
    "3pcnMWMysnbCCThRrFBM3BHKDnb2SmZEq8zEmCXP8T52GzLJAQfsi65T2W8VbYtAn2FkgkJugWCjvM8akSg2C6od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxtBQBC3rDHr4MNE9Jbgmn3HD96arUiA7ykFpZuN3x8qnUK74s7MSNx8vpUaufPxadZZsmZ1cynk3pzoa4TwDrK",
  "key1": "2Sc1JaHkGvecpGWK2qVsBYDouCEw8jk74CCHc9JurnfCWXkfKnBjoz3bWwUw8kvW7vC8n9TfhEL62dCLXVzHMNCG",
  "key2": "4uVaL8PMh73NWZTrdjFvjWs3oWstC6TqxxRcp8juTcoJoMg5hooVaDEAwWFhxTTVtCyXWyEZxhp44x8G9obv9qmz",
  "key3": "2JisJS24p5H9ttACPh3iY3P3WQMew7TfHEYjprUxGKTXzEJJtU9yyrYNQcwNstcgEjtWFjSrhpiCQdZ8z32tcPMW",
  "key4": "2MSSAXvSSNcamHtaP6xAcEwiWpm7FxPgcqUEZMEr8kz8CxfunefUWojYk5wGe1gB9DcdQ1tkSxAXzbmhE154wBgT",
  "key5": "jFFUDMcVGJgQo7fjnpTbotRYNH4p2RdcjYg2aKTkNGPZbg61UcTyBx4ENLSkZZCxLmSYBfYkuDBDVm4LKSkLayN",
  "key6": "3KrqZrq6zkqBrEMaq9s85m2GahBQeTp2GAtZHo5CKuc8mZqYDMrBmupvTp1YddUYL573izF86SBeeKKQjcPZBEPi",
  "key7": "4YaYLNbazTCQASLh8AmjWYoanG7oMzmMjG4BxQ4v8Z781ZMP5W3yCK2GNmUsHRs4rVqHFtkjbwGDgQkxsgpes5Nn",
  "key8": "4yS8oeDtnndcRJYc3bYfR7LwkZVa86p85pArfxBF2wN66UWQXm49tt2kyiiQb4ugqTQegUEUd7XWcSmn5kxc3Zgm",
  "key9": "4uLqNdLMx7GxeLN5uHwyxwTugXLUapwVbDYGJM7Yn9n9SqFByJLFdS2VXfrQzQAYecPmjwFiCz5HYHrkLfVo92da",
  "key10": "WaPUswfZijcJA55At8rBxcxVH594ZLY7ADHGfAv9dvpUYVR1FCzeMhKD4SGEwPazB8skvZSZVJhwQpG7a149PcQ",
  "key11": "3n6k2vxrsF69b44pa1Y5EeqmxQMEDgt5KTgUrQpbdXc4rzBKpZad9mUFT1kCi2pN3CjKawH3DSHW6qZRo6FjsqYL",
  "key12": "2kRAEkWMe8fW2VTg4pyABpCc2Ln71438DrRBKv1xfB78zHDMETteSgS7Gx6Fsvnmcv4xQQzQdN2FbMbe2U9KrnNk",
  "key13": "59aCkNu7wwUxJsw8i2QTrphm7pNqmojh1xuidNQP4iJ6PKYbMApQAS5ApPZRes2vQmq93ueLZVaYN7EdQdywgdyP",
  "key14": "2Zd9JUZ8wTquDfT6z3YErWwF6aExnLJDqNnWibk7wNV22wwW6fS2S6hDvAtwQJWEpj4CNWEqB8yR8enjaLfjaga8",
  "key15": "5Fb94bXD6E8fk56Wm3fX4yzHBRagFjbLc1MoZjMXRpwuAoW64wntnXZp7ukPxFMqMcdh89z6TdnP7gYdHwcgJaUk",
  "key16": "4UT2A9EP8BdQMQNjDyvqepm276JGs8b5zBmvb6svrif77d2g617uNNHWvCY9rvb4kSmcR36ccTP5Hf98t3hBBSV3",
  "key17": "3PmbVWZqHjQCBTcEPTQoqf9YxbTVA4duPAKA61F26PLUGpuGhsoR8QYFSQgqJPf3jYsJDWxGhoLZXR8n1RVcUyqi",
  "key18": "5aHwbk2UnbQ7PeCu7pmH61roeN2HwnP6LK4XYNvMPnGz5tCNrc4d4znQWUKodMfA3kCJFx9odReUNHcngEvPVc7m",
  "key19": "2zjZW7cZMP7LfgWkWT4XW7k7YJwHs16TYLGxEJUeco9LVkFmmPKiQaouRiKF9mKN7LoyD62RnASXFGgjMDimsVwJ",
  "key20": "27QRx6Jy7T8j7RzcnPvFpnVXYmGKrHzRrx8z9AxnVrsxMZAfMPwP6L5jixo4ALAkJU9wbzvRmGLgD6qXmAcr2TSw",
  "key21": "4V55swvizsV3hsCwgtEZUMpxmZJuKrjLpgL4pQLpwwvxf13sbvpcRZVxLvGKgaXqdadhvdnSzZeAMHceT9tACfd",
  "key22": "4d8sJ9TFGaY3cnjGatPheSWVGRxS7vrkVsYg6ALUeLUxH3RxiMeb9m8ci7QWtP4mDaKBfmgdXgZCbcvQaWLPXUWU",
  "key23": "5dQY4qFoSLADZgmzsgdFtQDvtqdRp2UoigJADr3hM37oAq8Wuz7cXamd5boSfmnbAQQzmTBa68vpKE1ZrQmwL5kA",
  "key24": "42uk9PMthHawjeM5igPWasxFWRdGX19NiaHU6Rxm8utqacU49mTwUuAHrDjoaVKG7UTRPqWHKMuD5tUHghvaHsr2",
  "key25": "2ycESU6rU4EAcVuWvJPCYG536NCtgPEGnmesMNbj3njiLvUX6MHqA4NXQRrbY9Csk1huDf6oUAmJJHmq5HxvuLy1",
  "key26": "4oHyBKtUKrvCWpFLDvMWzou4Fdo6UmxqB3g1WJhm6bjpChAsMJ4TqF9D1BYVb149hwhgyPkJqgMwpJBQJLF59dXB",
  "key27": "4wr8BnAbRS7FmWrtUBzbJkJ7G9ARhyf8XUJWx2GcGomPvnf37wzXVJmR4hm8rVFTXziYRxhsZJLSUPQtMZC1Xrqh",
  "key28": "2kgT7Jvc9dWgVwt4388v68eVGVhr7t4aWiCcuHmGT5W4vDs1PTtKEvLADUWXkseWyxrYYqDyBxBqFGFJuAv9eZaT",
  "key29": "4ZzBDjKkCxQKNASe8EcBuhPLpMfJd7CkJbfUhUBF5JtvQCrB7frtrpMJr5aASfUJ4pFfLwoQKnegZ2VE3fPtR8Dq",
  "key30": "4AfSdbdQdU2Y2JQPYEGZ5NEBRLpbfZ1Au4S5oMQUb2nYj5QrNo54MxF5rkchEa4EqmgBGTLCFBjQoWvt8QDvHzRz",
  "key31": "3PSogcuDfdx8m9Yd3Ftg6EUC91nH5tFPHSGepbjCFk9HqYCMGQbzzHFsSBZWJgRS3UfqrCwoJEFcKEupvDz1BJg8",
  "key32": "47nG7GuJb7vifQfYFBX4S4S47qZttCCZmaMZuEBCQANTXkH6FLbzsdR255At7NVdbUUbejFXiWHyjjrvfMAz8qHk",
  "key33": "67epCdijdoLgt3zDMPLBrCbXkW8GoCjinos42znxrgZDkp7Tk2gN26Arx5nQpUVvMtbAAPsH7XZswcHSD66XLYJK",
  "key34": "2oqyXSnzooMdsXovSaQMs9uH6473t7csB9GMD1kxfDVwrv23jCYK7cGCY26C6APamPFr99Qiqb9qWZCWBc75M4KT",
  "key35": "2YoqL4tb9EkUvRZMYQiDdCdLKQoHVzWURZ5CixV2QjoJhhbYN2UjF2PYy8DfPExNRnLsPYTeTqrWaXBaqKjvonHk",
  "key36": "nzWBXTnXfgNRWNjTetTato9AXkTjJKVmAiN3JCnmkBP8833DaPhj6oUs5cKupTjmWPGhC1T4ssgV9k35y6SU7Ua",
  "key37": "HyuvjudpXBBJfuLbtCmJ6Gw5aG3ieDf382vLBNJxXGA9DD5G3cEBC3BYZLw9osdqbGFTG4bo9Woh3Y6rF2MPX5h",
  "key38": "5YjXZdLBLgdFSkuMk5HTWcY8Mh5vjXP6WEZ8NqHKf9MwBxEMeyCthXKemTKxEiLXLTmidbmU6VBsFjpJMwgFqxrs",
  "key39": "3h3pe1LovwNtLqcgEsTN2yBhLRXDKUPB9VejpcYqvRZddKSAsbUvnHBKCjpRLsUg8qVkWofjej2zJMpQUq3sSwjn",
  "key40": "2YmahWx35rN5BsvZemvJawvYn1h6obbHWXgtCubFakgZa25TYqE82HkJU2ZdMDbZ3cnusbTdvuSPq2wU2umRcryg"
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
