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
    "4Ge3RSYjWAM1D2ZhoQ9YrevavwQ3UxmVwneHw4LnVBrxh1cfy9ULMQHcssuqe6vQ9Kn9bhTr3EZPxnSUNBGUXp4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiwUrfnz83sSRbtDdECee9x8uHKkDkogiw7cDjFvLdhDdKFxhC254Lq4bUtj9B5u8bGnwpd3dsgkBsopjmzkQm3",
  "key1": "f1vwBinSe38PRxLwVf7krbvDicScGJZX8SuG6NHjtSucFgoQy4YgcY5f8pdMczbHFGwkSh99BEKw3VUQL5dGpRz",
  "key2": "36CX2x8V3MtHJyRkHGw9992Aj8KG2PMfpZLs6DugxhZasWEgKHWQHmN8tzkm5pK2GLqRnRF2CseQfiKJFUnj8M6T",
  "key3": "3kwKy2nSs3qLzRhqUKdUSd8pZufYe9ovJzLuWS4ZPce4ddTkTg21GhmT7hCsP2phgizt7kBw1871PyWqh4y4uxCw",
  "key4": "4upnU1gPxiQV8EWuryJkNzVR44iD6V6NdeiGd7bdfgih8x378ETBZN8rK3oixmxDvMjxexDw7tNjq9DVUNLeQ5Rx",
  "key5": "2PNZLP1NaARLYp3ZGP3Ltw7Ne3ZCuAHRj4TV4qquLLjhvxBiDXWprmzb6DkK4NbcCHYbbVwUX2kGVtBJYtnkTsju",
  "key6": "4yLoxzWAzoaqd5KwukWZEMena3Dd5jfDTzFVhvfQdtrDMVPfvDwUGsEX9ryeSxhjkVYczFjTcjjX33aQTWQBgimi",
  "key7": "3yYqQoUVqqBJZzz3AYvYehpQVdVvoKp6k3xk7cJJfswKV2dR6abMkGE3QaC6pdodJpPaJosPCaaB1XzFy1bDKLHK",
  "key8": "2Kw5st7nSMJzE7ttTEgWCbg8DNMY3TrFiNMUoxMRxCF5oECc6qxefiAUcV9h2DzF2KbwvAGQWEi3Dwvz2cWoCThn",
  "key9": "Rr5ZS5nHhhkbePQZtGEkxUmCNMZhtbsnjCxSkGWq4rSdbBL9eSebBCoCuoR4G1iPhLjvfB1RAuv5Lh26G7Uw8aC",
  "key10": "44XSQRKSh9wDjqSm7fBEfUz7Y9n1eCcLMkk7DFA2Aa28EfrA3xfDe6wsExavKxdbWh8W5MBiMrUkCJM2DZw7r14d",
  "key11": "YPCJsCxbKf8DEkCfniw5xfdeqvsvZMtcrhKJXtnWBDSLv3N9aYe8frucQAMie5Z2WsoogcTuqm8fnt4D6AAhzqN",
  "key12": "3StgsV4o9S7SgGEfqVLR2RLBC9FhXRGk9UUGF3K8TMXfaH74AQnXJh6EKUqTBEuyuCExXtyrbRwqktDcYTtFw9Te",
  "key13": "p2b6yeCCsy66AQwnhcBCWjqckJdUiSvMbSS6ZfETaKZQxxU3CA99ZoWPkmL51yC2bEYmhoNxgxC7iCKBHyQs6w2",
  "key14": "5WXDjK6YLtKrNRDyakn5SgorHLRgnApC77wbmGhTEQPcHq8DUHFby9oHJ7ALWVEAMyXQUiS5kagDtbbaDLfrWMMY",
  "key15": "q2t9RNXzFJLyNrghq6sg9AsMUSL87ApwNpTBY7Ayj4AeJ6MB7pUACuioY17WNKyRZYHBFqcNX8feUmhE5eUFCVd",
  "key16": "4Lqd9sXU6S8v1Hd3r2M6ugcze9mAnTTWdn3y1dsbw57PnJG9excKUQ3gmpXnZsmaVcAf6UqmnyqjeyGo5WSdeb8a",
  "key17": "2m4jEe19woid8FdHErx7T2P4mCj7xoXPNeKksH5GUnpjxywFCBKYW2YVn68JLg6wHsVzPvjC4g2Pswot7GnEsjhC",
  "key18": "2j1gMibFwD9oP2Zp7xJ3RgTixFpDbABNQpFcRuYw6S9XDXLC7tTYJJsWnpvJbzvEBemP8UXR9mGfFw3h1LajLhzT",
  "key19": "ki9tw2PTNyMuBYAEKFEnYEQByYNNzgbd16n9mpF95TKeMeeZbdQwN5yoWEVLcorYRGtKmTip6joJrZ67aCuaAMc",
  "key20": "2Tw7dJMSCHFhoDrfP1wWFa3ccQwhJTadDtkpc7KxieGyGbWxAzNwvGqBKuWzpR1Zd7wDY5ArrCHVd4s95q7oGtVj",
  "key21": "3vquJf4HJaon5e3MX9nWLUQTYPAsYvftXmrngd85nrdS9Gt3NTJkuLYYzXgjVoFMamseCWGuoViiJtrRxj18w8n9",
  "key22": "5BAksMZyZgKp7zf5zgG2SyWXzanrM9oobzwytFfhP4dn62UmN7Txv3C3TxQyCZTtbmcipNsneAw8T8DfwQQazunP",
  "key23": "3nQGggdciF8Ta23ez3bHoPT3Vquu4fXwFBz8riF6TRViFNAWcuqVkZtQp4AzLM8Dh4jjfAKXRYkvb2keYa5CYsS8",
  "key24": "41yfuLoaybc7SP1XzoiCLCMDXDH4smLbmDv7WypCT78dfb5BeMbJgxNHvCRc4BWFWk65QfX4LYeGtC6jZ3cxf6WK",
  "key25": "zZDAxisn5h2ozcmBsWXdiGKLPiKTjvpJmxo1DKvcxNs8k9u72JjwYYyseYmpsE6XgkWZrcLbpjihXMBuotZoAK4",
  "key26": "3vUMBiBP2MpxrwCd3A8M5WqaNaxi9B5SCSbXA64rnyn5oPtT5mWMjZmyu3n1VAwV6rowQ1fL8jns9YKow7ncXxDF",
  "key27": "25iqXYfkSFU5ZyS9DLezPrHRfdXWSTnuvBeRDJRzqn1wiswH7JtFCU6igBidPCX1EpazgEkEk8GRLgrJSSnN2oVg",
  "key28": "2rhJ2EisskRD971WHcHDLnxmBYaY1jwPNmgcTsZWWs337mbSQFBB8oR7iQ276Wxdn92vUsoMZBEpbAbpCkmNuJ9e",
  "key29": "kao4UAKkAPpY4ZekZ2Ga4kTfGaEKxg5bzkefTiZhR4umTscHrezjiajk5KgXstNwxLJxnri6ifG6ywLCSH7KUyZ",
  "key30": "3eTbXaTJDTc4gByaxHWXiqZ7fsinD3xZ1P5vjxoFt8kD4sndnxJ8wFyDqTG2Y9gvRWx1tXDhfPEwF7mDrNyiEyJT",
  "key31": "4sAftXQGKSqvs9xcudw7hfFs46Rvou12i5gv1MC8MgBzTX7kNnrgGvqVYdExygKsJ6oXpLcQgM15TtbtukF7GnNv",
  "key32": "57uCJCcCCJGhSwbicfYPrBD3fQbNeCtXMWzkxSUDLpmwZexhkV8VYmaUPNbTTp2j85J1qAoADyUgYstbViDjoa3",
  "key33": "5VRPQupbVy4DDdCR1ExuxFTa48Zx1rsd3uTdcVSgTShXLgWuH66VwKAuLxdUXjEkGG6a9QvqknUjBgtog7cqxnT7",
  "key34": "43Tf5TDR16vKawSdDyg9XTWHbQ8ksRkB5j7EBppwguEd8BAf7gbwn9tLM2e6Kx9SRF7bz4iwXtpsoR7fg3TD6PG1",
  "key35": "4UJ5TW3xw5DeAhPdjLzVRGTBRqb6Q2KEk4jHz5RU3NSmx1dD5hqwZTvX1UNGaVWmPRejqYETPe6nF1Z3FYZpaFp6",
  "key36": "4xbCZNjvFCFSQUHxTM2xgjwymmCCPSmfjiWeeaEY6DpxhXSSFifmMWTz1zXqVzxD4282TvkxRwUTyxVYsfrkxR5H",
  "key37": "4486xpRGTaJXuiApHwS8E5wLsztY8hRFRcZ6pAVcCrj8cTzhQ9FbK6gN1534eBJU4X7ev4jTLDfNrT9ThP7xnufm",
  "key38": "37mUTAFYKLx9RFexRckTmKnUxL1mbapCdnd2mXX4SruyVNqoiG86Pg2SBGuVBY5mDkkiTs6Rh1ehzL8BBp8xjVm9",
  "key39": "4R6nCzWs7vWNv2g9YG9ejoEJucrAXXBXg1zTY9dgU9Vtn8NCna6gFn4UR3sf1yUraWauzb7FHMwMLfV1jFefCXLs"
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
