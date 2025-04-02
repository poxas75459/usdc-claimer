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
    "cAE723FSwNfWPHcLj8baziPYLeU2qaR6QV7KBnGCp3ND6QD8vLaq79yxwnW7nZ5Fr9TDv5fvmhfhpTzPvCt5GLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfy9y6jv14Rr8dKvhGLKFh84b6V6QfaPKeTYgqk1eVnCFMhSYL1ZiCC1sZiGmEqNyN4cBcauMx7UD3TwA7ZfNLC",
  "key1": "2d4oSt5iGgBz1zeuUJwSMLzf4y58c5mr6QnnULjxEJy56ycMfdNYTHhjaix6vnU7CqYPYQDMfyE2wCVuaALpyxrM",
  "key2": "78icv3L3UeeJyPpAWFGym2Gh7yaV5nBTkUvYC1PxhQqdxdeS47FgaT323YHxpsYpwCdecKFrwcnjbxdKEhmZimo",
  "key3": "5NuqMRJYSXKDvuRatXsgDRREtT7QXFzxFBZM6wcZ3KBcM1SD4yu93vXdVcVtQ3wUSoDBQYshiMAPaV8d43E4mVDD",
  "key4": "ZSnA4u4sE8cVL71jjY9Zqg8aAfoLDrGqxb1Kt3pgcdKxNfWPmdy5LWXr4gYZ7f4GspvQHYM6yDUJTeDcjLmGALr",
  "key5": "3PkBPTD6URpa5Wy1qkxjBYRZGJS7S15H6xa3RFizJhoDz4KJ9sXtsdYwVCJRZBbfgmWezkLtXoAHjFjirWNDanS6",
  "key6": "5Jcu9GmSiUAZjvWkq7zFYH7tfuvgjzZtUtdehZSD9855T3zkzvKu2mPMZN3pxQ1LEW9mBG2795n1xvKk4rvj4HMw",
  "key7": "5zjnTQuJ7cRR6omV929jSvTbcg15NQ8AR5MSuKadr3HjQ7exepG3MR78mTX7KA2UUt9DbXyXfWDaNAYbdrUPMYXx",
  "key8": "53CvfpBaeF7nvGh4xgaNRYsigv5JwG8tB8frNSXCbtnjLm6wZNSS6BtdoTnqAsFiT1CfYKsdoaNbzXF4WRyRxshf",
  "key9": "4Vvo1LggF2xWH5iriN1N2LxVauDonChuRaZeQT8uQm16A4CvYhf9TFtYaSjvmroMwtu2nTcAiQDZMPFtqg1Be7Qw",
  "key10": "3LBjba9SU7zm3mt7jirqpPbR7ahYYJnA9tJSwd3eZ1kXvNMRUXKHPDxnima3TUn1Ctm9C6TEWxnohUyYMtpFPPjM",
  "key11": "418DVeaCuseU6Xc6QkGKpwQZoEWJRQt1wiAUVGjhMBGiLvFHjcBgQywJmAH4pHwn4DWzzjTQAFXAPqhzuodApELH",
  "key12": "3EwtVJzZKHyDsLESLdW3bCSJD3gNuE23xudKkhrmyX7CHUkmHK46cfKwS4KWWo48Z7ZWoPXSRKrEK7PMJRrftUP4",
  "key13": "5oLNPJciUzqPD99LsjHfCjDeoMEbdKJi7FECa4r4rLd1XS7SeDJdpmvyrb82DCVtEnaoD9mc2pupLe6annT7K1mV",
  "key14": "5hEDuWfYRtJQ7oKQfb45VnapC1nySjvCjCM8AjisruiAajyFdVSZ6Zk5tHhRppQY5ConzBwwZrWcip8Ms65TPUEK",
  "key15": "4BRzti8kLBMyBZVeHbBYxhML24qqfHhNPbnqMPXbo7LuqdFADyuvEWyJCkPdBVnTVtZqtZTQaAJAwbz5NaBbzgT5",
  "key16": "5GresGhjhkGQYqdYkWSZohbLoAtpD8F8oYVM3pAJceagXDVTdL5dYcaz4gWsyk21CNRgHae8Z9ruhYrGYf3xN1JR",
  "key17": "2F6ieyRHEdhvbLzxu5ivgZN7cvaZ8acwTY6sdb8hffa71LUJUP3uTnhPE3cqx1jcccTa5LmoX5Va2Y1CbGQggmGz",
  "key18": "Y8UJgNGgWivtCox7rnkir953pyUAF4Mw5BEriA1GNdE812RRqRbGG7cVYgs1FjKcVq4eMZWnR1ePW9r2XGDHvSK",
  "key19": "5q9TH12cq49TRDo4dnNdbbvtnvuM8UsZRySxByytY2JHnP5sSYPqw4JRXRWWf4yyqyzb5UR7zjQ73fnDQznPZ6Ua",
  "key20": "3VVKu638PBQAZ5px3sfxytKvbe1Jgn5m8176R5TszMieKdG9gN6bmEo4mX8gz7zmzbz7dzeosHVJCvTzFK9aXqPF",
  "key21": "L9xLfLwPTHsXt9XTohMYAbpgbSYVvrQPNX2KosdZoUDqXbkQUgmt1KX4xnPLLsr3KoU7RJ7FgXesS7o28N5mXVD",
  "key22": "jXptbx3KoRWq6fpQKU76jPtbH3tNBSsFS2rZC3WgXpXhUdMHQtXuCYnUyWmUnroMiAidUMJ1HzLYA119ucYNudD",
  "key23": "UJngUJ4EKdhvz4PG2yyp9zuMMUsB7hJ8CQ9QFtTeJGjKQGet5ZrSJd3Td3r51wR116hu5C8EL5pvsvYZqnvhkqz",
  "key24": "3gWqedN5KQU5MGaYht9Lm2Pj6mr7E5pn1624AhyqiQUpfmsZ6SgyDxCGRNZQvSx8tF9pe1fHx4Rof6QKFVcXuFkE",
  "key25": "2n3G8z6mBR2nJh3U3e6XRwqaf2SYuWXwF7xY9vuDbiYd1whWoTwLsa4hzAf3isQFDPevn4rMHLdo2ghMNAKmG5R2",
  "key26": "2RGMYGKfc2ersSUGCAEZsRh7s8iCDRWDVk8XrKkX5r74V2XJUCeBeuQA5GwphznLqcppU8rm6yRidRgX45DhTot7",
  "key27": "2g9iXPfxboSe5zB4wdWA3UcEmmQvU5K1dX7Eoeqdyub3Z5QDLiVZNcWkahpsKYMxYaBQKdP3WbbNMsxfbHTHqJf8",
  "key28": "5xqZn9q6zidHGJSCEgfxc2yqbUe6YrDFp9vqjfvKq9TPH9AQ8wGooGFsmUNNTWfEKYA4iDbG5JLT5aqQSj4rUMK1",
  "key29": "2SAcQM2rRrwxdVCUfLoSjYN5JLFUU24magjyjYqTn5g3oc2fRKj4BMo6hLAZ1Kan8oQTkchM9UQGFHHoFR2MFFyZ",
  "key30": "3rvF6VRFikFNAi7MwcRFGEjLDFYKQDfcnWPycdNTuwJkiGp6e9dGqaqAZW1etQaqoYUfgw1iAc97w84QgovaudSY",
  "key31": "4a8Vny9oQPK9NVXaxoZzRQLCE4Vk1eGXkTV4fgCkRie13cVKssgKeBh8iU98AxggZ861LrUvrZoPbVNF9xmM1dDX",
  "key32": "5wpc4awkKMd39YuH7QT767Bq6sqyJgbiyYw8qWaaGA3k2gYDBjmPht1jAie7S7q6RwSQeFaLrpEHe76rfbH7oWWj",
  "key33": "3YJykEoXkE2cPwh1LAKTocpGfzKVcdrYYXsfhvsNvBVLvkXL74wsg4G6PNiAXgranSPFenDFxmxUvPyCSVkGwq7G",
  "key34": "n5hqd3JZXozCY3eSJRFX8bGns4RQaiXvsRzqzmP1j6E7wKKHNEUvk2RoYKSTArxucZNKeRrbsrxsGh6mGPGvr4y",
  "key35": "4vFdvR24tYbMgWz5c1EsaTWkx7fd2xbUaEESBn796qxFB2T2EwkYFJ422KGCLHosSG5yYBp63LfZqNN6hDBiZG1L",
  "key36": "2Y7GsHzPtZq4rE7X3otjzfkfbLffC716W83AXw57mws7WMGQmeLqUrBbq5ctp8MbQiynJ8nRefN1snmMk7hQhJd7",
  "key37": "4MRSyaFfYbUiXUcrU44a72GUiWapSocArurUbV28LYi9er5eNcsWfEETgnkyJtUAjucJxWbwBT8dnGirR6TH48wg",
  "key38": "onyU3gtfo5YV9h716ZiZvWC7JL3ZBxpYNH5EZSjTWnxF4QWyjazRnAPDt7X6vUMcvjhUTuV74eaHQkTBQBKV4hn",
  "key39": "44K4ttpWoWQQLz3WkLMAjQC5S2ERVp9bj9AN5rnHmqwdueayHzLGLdndokzgotrarc8xsCNJumJaTyhNzULJnoZi",
  "key40": "4ayJAUdUWLxK1KP2hDRBDgKsYH4C1NQnErhkEsKmxfXAA8ceW8ENcYcGyae7cTSs58Nu3xe7Z1rWw9SheEoyFtBP",
  "key41": "2EXCSGbdbZ7hPsHhLmJN9TWRj5oRKuwrci6Ec8UvC5MAey9YVBffwCASKAn1a3ZjVcpE24xiTWPFvDbBNCgJWaZU",
  "key42": "5Aq1q2r9euKsAvKWw88CQr3GTsZXwjRP9RRp8mPCpprQM7R7v72b9Aei2WdMKfwFZNKhr2Mu2FZWqYe6iWzMzAvd",
  "key43": "3onTLEJUTztbCiVXe64GmmPJz4d6LJMn5HVBeASZAc9KwQ97TDUQjhxUQZWQP8GQYuf9rYxM6KxfihoeVLPDP52B",
  "key44": "31TTqsaCFRUnqtYKQjHRRvbLRUyyfwP6LLkGpF4VuTA3JrSmXcV7bzMURyMLFQyMRPh45FG52YkPXvVoMPp3Drv5"
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
