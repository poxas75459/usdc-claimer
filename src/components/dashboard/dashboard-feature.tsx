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
    "AW7g9ChHfgmyrBHCTLrqUkXV27cRvGn36kzDV96rb4F6FgiuynuTnFWiqGMW9BuqtEJycx1XwhZr6qNQh733UDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A73Txt3EaHjQywB9X7N5GwWrZ6rcJsYnjdMV8fQ2SaGehBUWwj3DWRRyo9Smz1TAeZMj9e1DTGzhPf4mUteqv7X",
  "key1": "4ZeDZobTJNAvme2ZU5csapQJHh95Fmg2NTPP1QXNLtpoHg2DFVHMZhEquuYRmL3Yek6zbyVcqWnPg2S97wbAUDPs",
  "key2": "4YieYtJ1fAg3mWCbF5izks3XfLBFVNvee3vH4HnHqGJfF8kRrSuuZTKySNb9jyyeW3h3qCy5UCugJ1wYs4hJ5wrc",
  "key3": "5arNtxsw4woDBz3QXyPArCF7CiiZZWSJyDu35NXefJDDRnv4WEqnZzEEVg4Szc5MhRLJbx2CtVwLGyi4ad6Xcacc",
  "key4": "4yDdyQJu4Zh6AGYHStAgFDcpkBcvkikP3devP6nR9HjrPYnRQjyJiKS5f19r4JfSuFzsCZKA4YVby8RYbxbA9jnD",
  "key5": "3uZGpg3cnicqTwb165gyUjWi2LmBSWcWNk6GT33HPeRr2aHNbQo3vbAUU9wRkLaA5MnR38gNQM7e9LjhaYBTHoGC",
  "key6": "65mvVjNsRXi6654h52Ns2ocsWfzvEh6BUmDeS8hcni99mv4snNW87GpT2NAgX6JE9a64hXznFZW2SycFPztrxcQ",
  "key7": "27JycACTV5pDEs3yrybBMFevSAh6S7XQxy9x4xNJfwokpzTC6sBVDMeSi1WJ5Kbhn86j18coAKW7bkAX7pE9z5ns",
  "key8": "4aesrtaN1GFeeCjzRgx5G35tPB8pKSq9Lv5KoQD3ThqZGZiPyRdwApR1SouzcScb32xoL3rH75CsivrnZucnNnSe",
  "key9": "5Muw9KRZnXNfstmRrZ7Yrx35kTQnZFSRvTyxWrfdyUhQN6HDVuzjc7VTyuHR58NEbpGG8ofTR4hLfu55qS7GZuws",
  "key10": "2VoXJLCHWn5H6zyLmYhFc4i4AmDRKNaWmYxCTZvFpX6ZVrbuCAXoiPkcZp8UwLafAxt3Q9YgYJ1pyq2FeotFLEBP",
  "key11": "2mY7TmdsgRrNWcrAozejmANSNXo6RyKv6oMx7GJm89nf5xpkANdVMstuu4ABZUhsnSK98vmjJuSaH1pCLgRPHkAN",
  "key12": "2Co3yqywGME27fMN8oxU2wjaEYQ6HfRiQdGF9sDjzwsCnCt4ffGmZPuLqXQfzE3XUVELPMcs9VZzsjHSLUbBe2RB",
  "key13": "4e3fe57rpSSSwW3PFGZ6vuWFo2SjkRKrn9qrkgHJ1vjcGuZNsVTzHfQf8GrcCkQ86jD6mpEcKRC6h2mKceuMboiF",
  "key14": "5aMTxdRN7QFsi1bT7n4TCiwxV8Jcu5EufqXriYKgvJHMN7eX3FfBBhQCLpJ7a6n1SSqJi1xGtcExBsSTCP2HJirS",
  "key15": "3pYwHbYTtYcxhzmpFDoPYjEzYjxVzQaEgbyii9ppzK9StHybzGsxwPhBtQWrmp4wGhwmK6WyJwtRutiFayBw16Ux",
  "key16": "2ShnSf5a4JyXk4MGUAafZjn9XeN7BKAGEt4WLUKhBZ1fYLyd2frG5CHqi1enynR38Ybq9PEVTyEHWzQH1KRcibXP",
  "key17": "4HHGijqo6mteyqyHLQPRmvDha5MZqnWaHf7ZrK5yW3cP5TpHLAwhHeiu5ZWs39vk8fkCk9bFb7eAyJvuCkBQHWDU",
  "key18": "5pJe9aiPZoUe2ZK1PjoR5DNxf4XCF9K5jnSjQTi7uRvNtnw5F6ZWmQayFxz5iyFQQVrXL4tsv2QSQbdbAfazSX8R",
  "key19": "UtMBRmwTyMStdt9Xp4L3aKRMfnd1LBzrW9dtU3brJ3i1SD5HzuaKETQ9J41CGx1X5bjhSN6anGXtwJd9aKKUHfU",
  "key20": "3Awhu2hP4e4L4Nf7CXm9Fwem4bMvtnvLMzsa13deMoNNehYgNopu56rTAuH3sgKprar8Es16yDdwd65cpzERMxqy",
  "key21": "eFxNEJepjijDfk26dqBGZEMA3ZqJ3JCRGRiapwWboFhco4nN2PuJKxz7b85ioAFRfgH7HaCTec3nji3KDorTzPn",
  "key22": "3fHSxFjgGa7D9sDRSeqvytqHo11h2dHvTQLMMUb6JFsvtL5cNwX5M9PaKD7GJEVqourkSFigNdxQMZRicTZfrTpp",
  "key23": "4W1qjkRXo7b76WTZzuQ1mDgbGxxK9XfyTLEeEz4PQZ68oCdoTbWNVBh4XuJoRxQGWubm2WPMTtNCaiH3baVfdDLj",
  "key24": "4RXFW1gmwRi17A6kDgbDugZ2oLDM8WzEFxSsQiTk5UPyUDCQZzxWhbebCfRwKcjY1QQmSocVb1YYGaCHrwvPxq9R",
  "key25": "5e3EPwGxF9SfnQEqzLfQR3dy1uZutN3GXdZB7Sf7L4N9WBSfSzie3hJmiTkyGvzW4y2Ndqfhwki9AnDkZfcypR91",
  "key26": "khrXggRBTAx8tVf1AtHdJFoQTrZy92KdzMQcoQkbVyW2gk5NXDWTqJR3zcJYpvwaYcEizrjxuhZmhd7tEMefh9y",
  "key27": "2ywPyPT9dtiSKksEMSnbYyxXGk6PjHbohnzRYS9iDZhiekAY8WagnHmpndmqEHY22Cg4yjmhyKHMrYnA738MULUk",
  "key28": "24nG6YQyYGY47sZdiHYFthtko5xEBREs9dbeSeG378TbHBt7vobTKYGrWt6ZEW1NsKzA4GzcUyvxFyqB3Hu18APA",
  "key29": "T1sWbaUZrPZWwsAd5vy4WgMRHAfvbMqu6NgSaAe36dkcCMCspREPbfKAcqaRuWBSJNuD52Y6gVFPRkKprowXDDG",
  "key30": "2qB69E5bZgw92znjn5SjkZ2rnRDNFfkxyC8hRvaWoxSVTPZMiGrjX5cufUrbomqcrKQjN48xVHDfDuxf9kcUPk5a",
  "key31": "2BZGZ1hDnQi8PY9p4nCKWR6rrUe6YFgxzPhjixaNdahedLHa4GeFYSnu38PyFqfhi1y5j7wEBrgmQuJ35y4n7DHN",
  "key32": "3bYbDV6a4uH51k8hocAMbeexuZhzDLH59urpcwaQBKZTsmYY1DBxYuSDnDpacuo4JNPanJCnBYmixtiK6iJpKHp3",
  "key33": "3RsLyPjBDvcYMns6SBWKG8VgTqzMM2jLurh3Ea2WJtGnJ2cNhLaRS53wHHcoPgZhnAEY3zLJRzLejwxZAEWvbBjA",
  "key34": "wPVPzG5nzZv7bnpPmsMZJuHxwRoRCpgb68xFsgdK9vU922ExGnqFPPLPa1ZhhXsTMxysz5EAWFhzm3rPwBU4UcA",
  "key35": "2HqQSgrgX3V7YctBviP3wEZz7oH5Cm91eeMH6wJArYKmQAEDBGTisTR5zCwcVKgDXoX2VbCpFB6RNFmBEL4HstuS",
  "key36": "TmSLGtg1dsG5R7qr8UBHXJmrRYoLQAK1p3ehPPcr2RBMRCph8rpYx2uEsBYAeT8EpjqHkmT1b6KgT7Ugdch8DRB",
  "key37": "21AjcCz8g9RHxqF9fnSvYgycmNkYya5VX2dsrPqxAeDhW3QQVduM41dKgPGYAWKhB5exzqaLXCLw42G2wfk9gVpL",
  "key38": "4f4qiyJxxWSDJGfEW4op6vLm8FQjx27y42cyzPs55CpiEs3mhTeifrbFW3WPd57J1x19gB3o4FySZ4ZBfFerDZti",
  "key39": "4qXtWyAbEBBaEcNMEqpbRyHXLevqs9RhysDHxLucdt59XEwmnV7HvtzcoYnpSvCopnTCp9Z2VCjRaWGSvAAew7r3"
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
