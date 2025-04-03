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
    "2vx5eVmfkwJwYa1s4AnGZ5Nv1Zz689NE9FWiN5hGbjHV9ZWCUBj8TnTCgEA13tJZ8nx1uRrt2z4WF6iiDpX32B4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UeJTJC8p12PorqFmuKNUVwBLGuKJTTKduvYVJDrVnqY5bNN1R7eqMtpy9DmtEkGvaTaAmM1dAoadDoYtAWQEa7",
  "key1": "64LWE5o8DCpikrkmczpSShCh7apJUKgEjjFnuFTee9qKF3Sf992MxPf54RpbUjEpfAhVWx511WokKa6x1XDDawht",
  "key2": "4gshzRevybKVvdXCLggVzq5zpQfnbttZ6nHCU1FN2DezMYzVSsmbT2zU2hMTe9kMcVaCBhTBv5yUNcqinxYCoAki",
  "key3": "3v7LVPHvcUCh4xheEW92CXaXEHyCKAAZnudZE5vP1Z9iNcAAjoEZhgKWojdU9nbLviivbeMTpniWBC7gJCxVzEK2",
  "key4": "3SqyYXH6guwDn9REgP8ukpc8YKX1dRiYMifAD3R7fwKDHXNsc2iqt6cRq7QCwD9bsFbWY5VqsVLvbEbhT7S3vyno",
  "key5": "7yzezQXPY1ZaNVXm7xpe41E2vfPhVwV2FkwkQNxgQuoAEU717BqSYskasAZRs1xz85r1xoAsxJUuKqEjV3YKsEs",
  "key6": "4HBLAAYvgn7Uxe7HRVRyPa5ww7unAPt3jA5sEKjpNQXzrR3xLbP7oLekGGn5pXZKA9pdBPZ4KmU1w6PDCrvAzApU",
  "key7": "zDmduduvG2hXJ5n6gPW9X86pR2ePA4y1BNKzyNkbqZYExigPVEbtW8kx6TgB7ZgGmeYnX5DnF5jfwwfou4BsvYb",
  "key8": "4cJXcCmQaDPAxtZy4DsAmca7bfv8FxyDyTNLLHAnByvry4bgBAsZxA55f99HfB1YPSDZVNPu8okk9ghgLoPkiV85",
  "key9": "5D18buih3nwCRNR9WkNwhcv5WyMsekS25puXjAhk5CEgxWZPkCotzLGQU3wNkaBhqrnDkCahtvP8cQzgMSiQnBBS",
  "key10": "2SBrfT5RTZ2KzgC3HxtgUsRcM9XsiMFMJFHdJTMRGbsD8LWX1wyDVNSNsH7fJM2VPMfkxfthahxcH4RFaTrGWhAq",
  "key11": "tstwtgphppG1orC7uMohHUUiJyeNC2CC4BEQaxZaoeieAh2EfYPSq6ckFCn6XJEAcpv517113Cc4WTG6QzFtX8n",
  "key12": "62a6RyHcj2mFzcFf7krXuNP2CXjPj7qqqrHWLQoSL7QkjPXu2xTcxtTK2W2HGbK4pQuexw5gqzTukMh4T7PzWie7",
  "key13": "24zxQVkNPNGEYeCTm3Db4fRTGormFDtQjryuT3UioMtyoCwwPnhRcFbFS2P6nb7sxBL59DHj6n97JWgWXNh8XYVz",
  "key14": "4SWq8QX8JzVeW7GFrjbAKKnJRBgx3QCQWBKhUMYiGfg1GSfzcDAiA39ik3CXTdu4WUNooNYjM1qS3i9hh21ivSTQ",
  "key15": "ALvgNeXKborKEmvx5EuLANUdMm5xuzwQRQbdNCiiMEJQ7NhL5kkUkNpR7iBZ3cS4ELqtNqSB7B6Wx6WPW81wDyW",
  "key16": "rPxzfaWsWSo71xPxaPCQfYtjNcgTbtJH8yqfXky6oBmUTJ6zhk6irunh5f1J4WV8GE1Snjk2RjzJCCQaNwnEEBV",
  "key17": "5pQoSk9wJYrWRh7tqfPCj1QP9hg41ZUDii1QeDtSjSmGg755mUMMBMBavCpAYnef1Z5tt8D5xSnk8wvmcRQWpAyh",
  "key18": "3ZxQRiwd6fiCjsk2WXiShP84EdG55fhtQosTVBc6djdPzBntHBXbAxZGSautkVruaj8cJDsRvDKeYez2AU9DX8KB",
  "key19": "4fC1etritJmT3KzWPN6Xwi76Nb15XEdDUmGcJsPfXsq6poZVxRqC9wF27wu53n1DboXc6vEfwBWS5aKVsDuQwchj",
  "key20": "4mHp8bFQoyZmPMPH2AVFR4Qju6YoNknD5GAgnSbrJVjBtNqT2fDfmi1EG4YfEEKSS4JHDyCNCoxqDYcU2ANNa2gc",
  "key21": "TA15PAPw9jFsMvxQT2vNHY79Za5bANSyo7zbqi4xpRkD14CmMmrfgCstr9P5nN85RZUDGh1sxoXGPxL4wteJ5ZD",
  "key22": "3tH46sEPsZdxURiTH3Qihh9suHW8kjswTZy5WncoCh24WAfavouv2WxRMYstV8zRhvCQ2btW4fP7xoVZK6fCsRnJ",
  "key23": "4ZhxjC9mBHPLFKQbRss8PnDaUyp3PPVx3XqzNZtBw8rLYdzdSisRo4nhaJpESanyPMyvzxazXLGvm19jzSgpKo8t",
  "key24": "4zYJsJvgCPM7WUzcox7Apf1okxkXWNobewmVyeXueeEHohDmb4DBVfzjUk7riKKkupXxVcpLsswHQ4HpzDN2veQM",
  "key25": "5Dkb7aKE62MTrj1pQ5WwuW4ufV8VQYTdshwNtVru1TLLvFt1tKwgRVKndCAEURDFXHikzK3Rvf6arLRzVCiBEMhu",
  "key26": "b5rf8ptNkE8NNWrQF4ZBpxG9QP2KPH3kULUGr8H3TicqMYjMBWUCEQa617giXc9DV5QdPNQYZLSz2eq8KtZYHjN",
  "key27": "2uCKD6P81brfBrhqvnfaJY5sLh83gMAb5Y5CyAJdB9yYAuDKetEAi3FJNy1uPuhHcmkUu58SESZqvvQEYajuhNCa",
  "key28": "rABtAjCQgpc9sVHVYxjFfBPfXrLZAARXkKXf3CVM6DFXQ8MSVhesF1FpBE8HYUbE4P42qJtpBEB3zo35vHHdygg",
  "key29": "49RrfAGqj6sXzMZLeTVZKAYfxNFQXZ29ZEYq9knEZEM5Sfbs3L4aC37eUabdVp2SVxuaGuSQFQvT38ZrFz6cdWzK",
  "key30": "54z5rfNLiNAz9pRmKRGMexC23Z1otrLVzrtnQBg1wp3vYg6J7Z7zAckwSg3knA4yGUYJojKWFkT4BBuMCZbb7w89",
  "key31": "LEFdWEpntosMUvdtgUo24SYVL4qqLRfHUPmPYkpzZWCQCzo1NCjpPWWPufAN2KGHnf3K1ZofFmtXH1CAViJkS2G",
  "key32": "5Cj6JwjHtrqLwuCVRqUyfhAQywoAVLsySHrpJtT3xSvyhGKatm8fZDi5b5dgsnFrnyM4GuKALwpN1hbGLbxmtV18",
  "key33": "KyPzpecq1sMXWvtSp7Az7MCSNzgs32qASHR2mKBtZybyT228UvM3oomUdnvjgDzP19DkLWFJd1kwNoAnngAUETg",
  "key34": "5GbuHuACnQqVut7t5wCP3S7JjXxJnDVGDxWE883xMjHeuCgMWAas9bTzbDLwBXzLGWjZx9gdEP91cxb1zo8eip8u",
  "key35": "2YT9R8jCwgH4Uisx8nWBBS7W6Gjo9iHDGkwbu95KCEEGbuYQUreK5nLHSahvhMR2fDLTAK3YzJeB6A6qbGqqofjQ",
  "key36": "3QcETaDfFWzrkate755JC5kA7q1sKj7wHeHfSJhSSRv5iGgUHWjSP43VKDBUhJZAbCxbQ61wohD4eBta1VMZAzhX",
  "key37": "3giZMkAshzA7UBVU1dJUpxZ5ZTyuxEpodYwW9RtGbMYBJL1yqf8qbtvrZqUJzhkhHeZS7SNCwkXcf39PKsJreWHR",
  "key38": "4XhTHaTQSREwNoivLxfjMpWnrRcLQrQkWSvEqUQetApQQZSsJd347LBrhNshHnseoNZvpJ5nhX5JZLhxJpnE9xvk",
  "key39": "2KviuJghQrnUsJSLdDQa5Ztr4PcaRBLjG1CoVscP8sLc6c8RSpvBsfGuuszuSKMLR8ptx3YgyxyNPaxU6UyY4HMy",
  "key40": "3YeYqNysLndmbWjWkq1S7jQ96rJPXMcu94CBXEgAZvRKftoDtjfxqjcT2AUDJdLWwf1uxJnjVPkZdDNXmv3KaQ7a",
  "key41": "2UXGEx6M3z4fD52yBCsomzFWjN3LE5ywamx9nZj12Jn6oWtT8bDifP7E1vRunYBg5b4bUTsvQbRCjBZtJTXHLrrZ",
  "key42": "41HKsiPJoekRisf1xMC8XatXpa3e87VVR4EnBstsikyW8BA7jKfbEd3Uxhmvqq7jeMt8ayVsVGEKM85E2BFUx2Ym",
  "key43": "3Cx7R1M1eUB6W57NUrv5NFTYnFjDNaMorBSBCWbRTSikZJmojUbbXDwaZGEVQ1uwTsDz7z15GweRr13nPxFjbp6V"
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
