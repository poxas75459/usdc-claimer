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
    "56T7qv7rhjk8iafAenDjhEEMWgmrTiCkp7onTcRYGgnPzZN8PZ5P1NbAKDrZ2DXqnSfQaSmGNayyNtr4KSM2gapV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLxFtB5H2NkdGLhk84Qd9ugwqqWuK4aAtLGu68x52PMRCV4hz1mhTQkWGvirhFcjtx7webPcJ7iPax94cgisC1a",
  "key1": "4YX2MyJeXoCkha1k2zWdY9aKNrVDtDdrvRzVUEgCFPkefN1wouSuLuK2kNpTB62rgEP59B5kj8ZiwvvDLPzvQS2c",
  "key2": "28j4A4i1pof8ZxVFRS8UCz4f3Jwew1hvjbTa4dUpV386rdfh2b99tXwNdR9syoJmEE2dTZJuirrwuGqvQwXiBMew",
  "key3": "4qQyddDbna3Y93rmJjmeFVpWoDSxJnpAGZtyvrXrdoziMuBgGhowE5N6u1JX1vwPP7hWdewZiWpxJufCkkbKx8vS",
  "key4": "WvmewEGFXgjg5kG5BCsKfJpWEUMvStbDYN6v8jTx9rxPKJvcXUMDNfd8gwRstvA9kDxBXfpi3YQYzgZxDraD7sf",
  "key5": "2cDY7LJf99rs32fUFpefBKe3RSXiSantLJCPB71kydR3EJwGXZGpdK6iHzLaTcXvx7u8ywCT5phjHDcBMMcaSYKz",
  "key6": "4nkPeTCivKacJwMMT6BCRwcHJxuamXrnxCcZjaHzur5WczLFD6KLcRQd5HiDwK7GPPavNoYgG84ZnDJAgATqAHzJ",
  "key7": "5E3GmaXwhkVZ56tXfauqiVinjnCPFaFgQDpJq9uitnpjfFmxUxNxC623JpRrXa4rqS5T9fv8bj8pchRzGyNJyRzk",
  "key8": "1c3ccMps4KKtHpwiCREPchJBtHNjv74jed9WLCQG9KkQbhZBEWGWTVW2xJtQ1VSMDUaZygfgR9d82bFkZ9AtbC5",
  "key9": "3Xx3GZd9TWVd5M4oyfN561GTsW2qNtR25s8DLxiqgHKg33h9cNEA6UzMTcGo6JeBguZYHk2nSYvpqcuY5ZDBoEZs",
  "key10": "5Rqod9ZjNq8ZVFUEk99AfcSSHK18HHVeL2e4ctu1CXTES5urWEMkMT41VbyWDkfCc72oJ1WAWa8KZfJhsyQibxrs",
  "key11": "5WmSpjHFxp1Cd9yxVvVKaXKKKvFtSXJ5bjrLsXzauZBgs864tpxTy6fh2WANJi74uLASgz9WafSA4YxR7ovCyjBD",
  "key12": "3So1pRQtRUfF25D2gHCGaCyNxmqdmNuzXPPU2UN1UMqXfnYEJzih9bVZ25YSdVKBWqPHH3JQnfpKHY2n7H6E9VJ",
  "key13": "3wfGFeo163GG7jWCpQRHN4gsTWB11a49Ayn5zf6EvJiuKrpUwFYuPNTSWgReNYzoD15SieayrFDXVDJ1RmgM33GP",
  "key14": "uFFjkMVxK4C3q5FLuXrmnau8PRSntz7KEY9mufSzZPH1pFBcYg4eA36azqBv5gdoTqeBTDHGoVFUKviPHDxsgDj",
  "key15": "kpe1Q2MeNEf7U2vbnJQtnKZT9iFWtSAiMXMEHnHvPWB67eJEgQYejB2eNNMjuzCt5FvBKd5Bu9swDctEyp1PB6D",
  "key16": "5u9sDEFN9SVFDMUHbaWZh4ZdxTyUzUXCZxZ9Nne7v5gb3Uh7YEVsuFqBgDivrrHQ6BPGojkgLkUcV9kD6pH9HeX2",
  "key17": "3TLKuhsk5k23KKWLjsjSfHmnPKdK1dvSDZTShCLoivwFQ9fRT61i8pVXbb9sZkR9EY3djsZ41ft8R84zSj6zETY1",
  "key18": "64n1jxNNe2K7VoSpn7m87Zz3gPL9oUVLhYNRfANMK53Rfb32N4dVZovzRHSPXg9VcVvnY3K3kuy6qEKxaRXSGy4L",
  "key19": "5fx8uHbYqgxhvEYoHUVzpNWj2PrBnBr8UE5a2CdfFsjMhEXmEerGVU468bvWgMLLQ5zfxYrygHoX7P4SMziFy8iV",
  "key20": "32yYYPRDuEnx6TQ9pDfwBpchbhrizTpUY7yvfSyb8JJLL5PrXFDMvUnLNPui8WT9cCThVkFESTXLpxbjJXXiQENh",
  "key21": "5rbPyoJ7HRye1dEuy8PqoGQK2KuY5JXbwk1i6jSfhzdmhVWYweTNtkK1J14V8Dyik1KtZWKJ2wwpa9GC5aUeSuVp",
  "key22": "3tdWA5DLiWLcEr2Zxwb5fCjjwyWuBCg9xy3BpvWB38e3USE9ye362v2UNJNzSFdMTTV8rhTCLv4ieLWn9p1ry9gp",
  "key23": "5D2AsQeZ1d7kE8iqXXTZRYoW7HzSEkkq6GqNqZNgWJPt5a5gAJqgXWzKSKvUr5DQjoze7g2b3xMLaDMSmJtuV7XH",
  "key24": "3WT1v4fr28DeLuGMQ7dAxthuWuPES7K2TwfuSaGS3XKefGDYVWg9SojSJAmcdgFX5Jc1NhGxG77sCmvKREzcAYgF",
  "key25": "SA2M9JRq7tADz6tdfDmi8v2CJ1zXu4JmD1QoLW6WCP1oSokHHstY37RtyCzuT1kJf9gsjheRmpj2ci74Nf2QQce",
  "key26": "fBM2vXi6Gk7aWJ7hDRbTHh8vFdG9STZfN8dpBjdQ4KSnH6921JQntnNJNzeokGXq3sxhJw6Mh64sQ1LjZpAyJrV",
  "key27": "53nmSi9Vf554LwpLPhbPxoEwg6eu5MvCGvNcFHDDMUBYrkiq3PFNrhDnLyXpSfaq6dx2xGkJSdtYrmt6REsf5dt7",
  "key28": "UVApoYP6JTz4kzbZ4F4qp5BxRMveBkRYLraXwFiMt2bQX6PTvii2oUYU1LDWVr2AmM3rcRweuYgiYUG9t5pnuzN",
  "key29": "NT4B9Sn5PvmVv2h22T6Q33VXfGYF9AK3HJ9AKv7nC7pmbgM9P1K2bmRoCwkkXP74WgUrnDFvpdDJzJ9Mm5EbW2y",
  "key30": "ZaS5yh9xq4dkSV7eJszHgtLmdsYPPioEPQUuQZHySeeFUjBVBRPYvgZNhkogtj7umZD3vyJLhFcFBLN14K2TDUA",
  "key31": "4ZnmD5TeP1u7uy5NsydNsoFy4Qoz3K1oztkvLeN6qzhjk6z1hdg7JCMe4iKXrrHH5AreWZcVKeGst6E7RPTuZis4",
  "key32": "5T7j3WWB6uLW1eLhwHfvPR4N2uvbWgJQakT2KaSRX5Qpy6sas1xeUibBeL1i1jdFYNZXNMB1NyQur2RGyn9STJxQ",
  "key33": "5KbMRa4oMbVYX75cbfsmZaxeaHep5y5vAVT7Q49aezWTdYdHRMDfPUeY5v92otDGJxW1c1z4Be3zSzjsrq9kyRk1",
  "key34": "4LUDrPWLo7yn4TAy258ZYYg7mSEyH1h8zXrdqMNEEtuqJw2r6uX6zte1rs9H2moNSgE2tYPsgx7qs5UaT3bWkrgh",
  "key35": "5HZCEhnoVjLr2CpoKQfKqD4cydJ3B8L6En9zT9gpKhiQu4e7emHrVxUjBTyTAKA3Qp5paTe11jWPELx2LueXHyZg",
  "key36": "4FEc4xiXq3zqxtDZhunFwzgk5eqB9gGjjJ9taegxtvmgt39a7bnAheXy36oEBz8pSs6jgaqHAhUmyg2NGabAwN74",
  "key37": "3R8kUDU9hsKQMGYKB15SgAdtm8brZAi3EN6a1NaBrexHVKH6QDMqFMGW1GJSTwux59W4vD71xA9osutQgMkaV2xj",
  "key38": "2BHZQzaN54FnM6Eo7edsoUceaydkyFVWdkPGQ8DMBSfp5QW8qAzxeKLxR4Fp7AaRxqe4Qb6ugqUuNYNAqWoCcV68",
  "key39": "5mrRruifmg4StiVjXpw6ZnWnNCpah5P8npyvV1qayY37FxbkBCqVPo6rEbcFavfHo429Zs3YiHibyb8iQDa1eA8Z",
  "key40": "rZb1JEVjK7n73BLiNyJND8tMasNUTanQVKj8PTnBTmrNU7drPm5hLPtRCSjiUKfcrdxZMK8yYZ4NWHzRiPUHM2J",
  "key41": "2y9FNAPEiAWk22LoxPpW5m6oEBLsmjwkPDhiKcXcT8PRmmzczgbpD7pNyRcTJ5ojMrij3n4WqiVMvpgK3PCmo3m5",
  "key42": "5mzuFKF8YNgrZSWSTZczaMSPVAcLP217L8T8buPb9TWBR6VA4dVKMQ4pYWqAzL9HHYRY273TEo2MNqsL1cXHT8gv",
  "key43": "5jw2aiySzchQEyuK61chruii36ya1cirsXzEDggWfhtNYZZdyJibhtWeyRnm7aMmZA6w8t2AMTFEaDorjBSymCBS",
  "key44": "36hNE4ojtrouv978tohKjSvs3rFxahKsPp6nMoPvCoTXXdhq1WTBLCNhJMsGk11iZYo5Jzrz72WYwaJ82n5rVzm6",
  "key45": "3Kp88USyuJyD4aVChrKUR8ZN141URNG3r5cw5GqFamRr5oMkQUj3cF8TVznvNTaQXhtDMkZqqotMnmkxZdZZFJpE"
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
