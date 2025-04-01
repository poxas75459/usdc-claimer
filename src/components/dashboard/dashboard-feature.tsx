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
    "3vsg6BpXK7KRPp4X95iUfPai8HK9ADRbDdXrh7GPbyWaa11miLsaBESADgyNXdMxFnL2SnWgnJkrsiDLuXCeavTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHJdS1CTJKfZXQe4DtFhAL4H5A9RtVBQAFVzJshvEMeF9R4NF98xU2V984WQWHbmp9EEBiYMMPdTZpxovqtYHPk",
  "key1": "4671yYdQ5fUxQDt48i7gFuRuqQYqYYKqNcXVJbfCxwq7E622tkeRmqaYyfPF39bLY7WRnVBHEXaXNroHxgkguqbs",
  "key2": "EuxrHqeNFQmcxwuGB2ibHWde435XfZmBqYWYGRtUBb3aALrcLkFGL8jTqg7VFJHUSDnwSpQatkpKUqUm8zieDjr",
  "key3": "5Fcrx2Gx3gVrU2eBcGV2oky88QqJnYq3MbLrqLp8F5ZDWQkjUAkTG9nGohyuYcDKNkLZE5XQVRhxBDoCCKaSjKKY",
  "key4": "bgQwToDQZKtajN427uNBdFyimauuXCzZk1EwXvG7xp2A9Cg6FXF1VHsXKTjiNARF5ecSKEhhMsC4XbfG8TMVNz9",
  "key5": "4etFUYc9RLvaS8N7w5sBdTLa2MsdzNpcxow64tgamwb5nK6j7YZpNYVY4NdcHHL3e6LzMjvhQvsY238V4skHz6XS",
  "key6": "63wb2KpG3ePjUt6BsfBRJaXd5bYS9gxTwu6LzVYsvTScHSFs38ng3K99bENWDcHXaei4ey6sP6woRKVfXrzb3uHx",
  "key7": "7mxdLfg74dXnEkz1Gp6HwMHagcK5jgtfdbCoRmYL1b9oYP5P6L1QHSAJEYamayKoMzovG7ginsTZWhQKPcy5ypi",
  "key8": "31odiW5PtVBpZPag9y6vNN3QFRC5ToGDkowPbyzvv6J4yB5woFQtjxovhG5zM1DaH7sLK17DS1o5MDdoqpyo89N7",
  "key9": "5ZBhbkHKEjHWZq7jUHnjib1Mch5GcAz5uqS6MDiP591FZEVmSfsbKNRMTcXWJJ482UygkT72KVBjuPkqB1WgU4vH",
  "key10": "3RErnNU4ntdiVmnCnBEKbiM9AcCQJ73bmywV57Z692e2KAm95aEV6cxosVRsMAGNf8nMeAkL2Adq8DRb7k9R8EY6",
  "key11": "49XiAg59NXpKnGZHpMWJsAsTpXikRGjPccUsFcxL1oZTb7G2VGJZLa1uov4dqAd6Q5FHNnxUjBNEkgeCqofbWucG",
  "key12": "3CP4p3wDUdJ92Na1cu2YbSRgTMyWrX8FUZUQWWPWmanuHBcNm8ngPvH2sc71QXFGJMEV316uA8QDV9wp5vtYBkJ5",
  "key13": "3jLmkAjk2W7xndTLh5f1NaX9AGnmtuHhgM5beP9ARSr5pagrPgLMTMtwuigPLfLR7HFsa2j4EsJGUu76ZEQqnC62",
  "key14": "4yZGL56ckXQV94QGVb6CgaHPRdt7xTtKzLFrfcq84fb8K7kcGU45PsxpjfMp6CwCCYKiQPwb63eafXGXckteQxa1",
  "key15": "4P5Ng28QmSWLNwmwkHwK9CNzbkr19qNL1zb1H6nmSDZwrfoaw4YEVCW2oSPZnM1qiPanXKGuwb9BMzckZAGatX7z",
  "key16": "AbdBzujrmhWr9JdfEFX4bs9dwFNBGoSYHeRNW2x98rKvaScc8tojFTr9coJxMBuE5avzUFVfMCvZrsRoLfpoq4f",
  "key17": "5tUrtKbueN1onFhwymnYA22NQPyJxdGh4jPbBV2aABLwC8sgusYosTnBYH3oxd6KgKqDYx65eyFo3PN82VrkhnK6",
  "key18": "39jC85nwvnxx4aw1oGKZJmpEaqnjtUP52GBRotzcaJ2kn7Wuexei54mbwXxjV3AtUAt6wwMJZQ6mdpUkggXZN8YB",
  "key19": "492HoPp71epkprs4g6qiiSTZMXLzAiFAxS7RcKPjywAcABpWPpdNM1bGJ5HJ4QTkrKXotycsy7aoDnUJsEN3AUNR",
  "key20": "3u4snEwDPf9ofULGNZLUYqG8i7r43NdTpPNmM9ny3qRU9yk1xdSkWcQXJg7LVAVkgVjWgtBSL5dwf3BNrLZqMvNW",
  "key21": "8XWzjBFdmAZmtUQtu8NYUqX9GKJKNnpUUH2smxmRkeH4gjFnh78YrpXUVFeabNPFn7YKkfCemJ6mQhcFTPAWKDr",
  "key22": "5YfTLkCSE24CCeHAJ6ags4rZwAxpZRxPmxF4JV7oKVyujh8XuyRu3EUbeFKNyZe7q68xPYWgcJjuZvB8DsMyUjTH",
  "key23": "dqro3Kn3JetnzGAkzjHTukq9MnNZsgVCUo4t1BchDxDdpNoQU7Lns4zUMdRtvBPKQxpynjvys1D82Xrv3vbM4Wm",
  "key24": "3UiD563XMEgoPb59kUWm8QUomh76rfNDUJUzsFcrfuycdUaSkQwYmi4LrCv6wQijrTWuY3aFPN1UDwBHurXBrWDB",
  "key25": "3TBZzSa3SoyuVbiXXqucXXkamJKGr5kiTysxqXVSHbLTRgZsSB8ZgRdYYoVNQCtQfFRk2mwuUZ9DygG7jc45zLFY",
  "key26": "2wQcf2MLiLMsf1SpL9CxX8fbgssCHFENF1h6Zt1Eog5QmgoRQXYeEc2PdFbRiVHntdXjsN7NKABrnCqaqXmxQwb",
  "key27": "iKYSWx2Jwncov8yukdBirZixVEqv9EbAnomNjmZvwpfWuv8cpM2pUXLk8YvDq3BmmKGCKoK2C81WZagvMnFjnZa",
  "key28": "3CRQCYibEB5eG65uc5e23DSQxZpLVRHSm6YQQghLpqLoCHXygWnrxnNtbG5Ps2X1T9qSeCHGQxhLQH68unjDGw21",
  "key29": "JgJ2t3T9EET9qVGAqMf1LS34of2Hyf41vBCr3gy6vCGVcJbSYKZHTo5RknYHCpXfpDiDiAxaeW9PN872kpcNsEv",
  "key30": "4Et2dFKs8Kxqag945jNTSu62UzKMhiSJ5pY9WP44XqX9e3XiLbMnpNbZnjydy6rckki2wfXxvwbxqyP3fF8Q2rUd",
  "key31": "45TbFNVrRhtrM6UKdjuL57uVh3Cw2pNWFKVfKcKzGHWQ5pT8cq3Y4w17Y2AiXQAXvK1e1NUiYgWnCXNcZQZHPqNg",
  "key32": "hkZqXnijtyaF7Yj5x6ezTzng1UsbCsMp3S6vidJBb3L9FLbWd1kCRyKjzwR1s655vHEsavde8k8y4wzfjr71Zp7",
  "key33": "JVxnQMF7ANn3W4tQNZdKjpjwFc5gbEC8TzcorxuC4JMjDhEBGwPrrBuWZbXx47PLWoEadGUW3Mg9i6pauMDSBok",
  "key34": "2dQjh5THvWrLSUVwkSNSwEoQLoYjfsn9xMWqSCMfBfhzbuUGKaGsBujcQwJwEnnTQHR2fvLEXkE8CtKgFeWttv4o",
  "key35": "2UpDHJ1YLsANFCkMxsvFZSCc26pqSMWu2cD17UB5BjZMQVns2Y7ZtGRnMDtm9FEHmKr7rMtanWcfqASUZtgJ5ib8",
  "key36": "31rciVbBB7aRksugYRXhn6R4dftJh6kJK8Qp1vvydPY5pokQzCYvanLNdB7mohePqAYiiYA5zurW47vX4Xh8U9YS",
  "key37": "2tuEQqDSHPdTGKjd2HTTZekEeX5LyqmoZVSey5Tpr1Q6cLTRftcM9rgaqgjR6YmQoBhS2ELh8BiJLNQTZPrDp8Tf",
  "key38": "4Jd1ozowHtmTeKGW1QTKPiTdSu3UJTehFC2BPUuMMu8jKBkDbNTca1c62BwKYeLoe7J2sNx9u3mhfeP7aGAaRT8p",
  "key39": "2H6FY8Ya9McZyFHK64ukq4sABvhVwcdF1hrj7dtsXdaUVxfE3BJ2SQjWSZ1BHQEgM5X5AaSXM27qKBHGvvqjkVF3",
  "key40": "rUD9ZdkLssAMmFjS7s8oecC2CFGt5wi469asfXL9ctRxzjf6G2w5Q33FxNj2ti64ZocCU5J5ymwrqKdZNopJ5cF",
  "key41": "45kvoj18oz1qh41VaR75qfxqYX8xMrZu3HPoqN5rojwNAzbWqqxC5XnTnVdgDpqZeUZ5RWNKVisENxUSXsGma4d1",
  "key42": "6LCB5n9f9Xd4VmJLfuKECt1Y1Tex6tqGzgXN9E2ZFUzUN3x82KDFDPANohX8uUTkWSfimFPiqA2Whi6vioesX2H",
  "key43": "4KNax4ecDzfYptH4L8KmwEVKvtyVVGWXBnPKpkZxoGwwoxJcxkoxZo2tBqTijaWBRqhqvJb5VB1t64UG7YyY5jz4",
  "key44": "3DJQW82q39cLJpwHui7wdPVCQoPFHEmqF2cyXN1ph7oh1MTRKDMQZajtnsUfrek2UEWAKyrN74YAZ9ehWR5KycHo",
  "key45": "5HHwkdH2uU3A5dFqAi9nsYqZ31nyAsuK98ihuqh23fNwrx15KeUbZVa8uEQMUau9XV6LSyats3tcXcW4QjL9yJS6"
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
