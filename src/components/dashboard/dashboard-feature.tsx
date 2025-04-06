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
    "XyWvZ6SY6JUPtNjoHEMTUiW1G1MPRwaU2vMey8nYhDTCFSSJcjp9t6vt9tr9vHkzxMjvF7GJY2cDmkSkwpEwrrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2to3gKzP8Vx5GvJEToReABJhQp6Qfs8cd8QbGwtVt7BnKkK4zcQcARMRgFPeUq5VBuWkL34SmU9m3BNaqEMjqvxn",
  "key1": "3e6vZpZnkTLeiJC4KQTbxT9onqYhJXQugbkWw3ufHwYtcGvHHMi9xTdQWSoVLFB6nP4yEFfAcPsAyShwHrkBL5w5",
  "key2": "3hGZ7qhiwVAYeTu4SpCrYbvQWjV9CxrU4XwFwviY51xtsbj5hmtasSc5kEhRjwf65ThpjyReqjc42UAMg24NHVbQ",
  "key3": "YVgXNHdqLoHYc2qa5YYf6YyRQ1j2zGoGjFjr5E37TFCmdW5dFAywq9qSrQsZKfihFCLXbrQWQ1pnXK1zb6xSjAF",
  "key4": "5S5zfBaFbbgnraevC8p8xGUApjgeGU3KEkLbVBBEJ795DqMY3ydzqmVYhYxFpmz6MxfUpX5aE6PDafjLua1qHpTe",
  "key5": "5VHa3z44phhZTwQBRMz9Pe4eArQrNbA6mnr1nKKNrLvL2iWSZLVfFiNx85KLGU4ECfGycMygjrhBgvFhkpJC52Tx",
  "key6": "2M9UgFL9xEz3JdFzFCFRq98ZDhuhTCk8Weq4CHZXME2hDNuxWe8ekNvrHcHqqSKJNCnUyLf2v2nU4zi3GF665vuT",
  "key7": "3zWYbC5dX1i39QEvDQ9vF7fvU2ZhXMT1NUqiV6bs4h9Pe4EWsR1wwgV9zxiva8ieemAYmmvdnaADsrbtFiec97HV",
  "key8": "4peX5WBdtoSrm2SXrjtEJiWWeuc5r1uZKAYUK4yrmnK2g94QpbHHeXAu6zzrWXMa42JgtacLjT9D9g9kPo85ZJgF",
  "key9": "DjPvJasD7zDX16A5ow3Ux85mmyRzit918vRmSVGpUbjWHX9HjauTeatfpxxAry7Dc9XJcccPU3xihnFtyDD3CCJ",
  "key10": "tXAyZRYKHQh4VKjToHtxf4VGs4KDowcNuPQDZVQ5i41Uw3chXqHrEfkHAYHmvtfhsNegSt1NMsk8si9ak2GD1MU",
  "key11": "2MzVr8xiCJc1He2RhLAK57GuEfXZmUnW6QeEcYVZ3bYBX8euPyVmS4sc5HBZMxRtkFYgmhCfk4p4MyKngUcTPDgB",
  "key12": "3UQgkzzUR42VaQ35r7vyWjHDpWGExWw7RJv56DEXRroPQ45bLxPsVycAXUYGPKzd5EoftbeHESjVzigx1EzphCoF",
  "key13": "63Q7q5YpcuZmRNLnANzobqix8vjvzauh5kK1LtCEoukYh3L3uBNnTcRJgSqo7qFv7Hcs4B9zDRaHpNnpiJsjHubJ",
  "key14": "5DFFQvXNbGhKHy4x8bvxxXNSmeSAKKRdVkZn1QJ1RDr2pAn6rjZaK48NVB3HwVmvv3AsL8Rv1QXr2cmzdEKT2s7o",
  "key15": "64jWMcE5uEbBDbrGR9NTrREgwiAuEZWyLwRmfwedf4Z4G9guYAfKhwKucxUhSjsme7TNNXw8k4i4mQNeRvXAG4X1",
  "key16": "2DQJ3WS7hdzp7cuDpKPUm4FhFSpwejJmVswdpJ8UNLWb11WAUjET5hEHQfLeBrsNey5E6riRsGsbT1u79rhwY3UK",
  "key17": "4KGDAcCDxTXGZyNpPhyCHNoPABbds9d7yVuQWviXpZtgrSC7ihHyE5u8GmSz5pJcyUSvc9aWu1NVJoFe5ProAX7q",
  "key18": "4vvtzTMMfbfsAWpsyahxgmBrhNwrQNDFip2Bep48cYVVbc7gmFraFxbjxzd2vhHtmbAC6rcWhahuEVyP53C6cYAr",
  "key19": "35CEig7FfvAXBoghTbGm4oyHbp59b8d4uma7d4LBnxetJZRBotXQ5KuCDA8SURVXMxay6FTGWaiRzmTTzCWwmoSw",
  "key20": "4vmwEf3xvaNXNC6jXpe4bykbB17sfLWDpQDJeRPQVyDE5de3ZqsJ2DrwRKVgCmi8zYh5NTHRnWSxAGKypASqDpcP",
  "key21": "2iUDRVERmbzXGJxaVeex4PZ4SsDUp6xnKzab2BpatBx3RGZ8xswtkrFmyGa3zkZcPwJnPgb9tVZQntXSSTpcbwat",
  "key22": "3eZ6c6Rw8WChA2zjK1TWSEk9TC7VZMBpUqrga9LigMAevuCt2WS5jE7NUKiYxcyEmnPqXjPV3Y4K3rwHQwkdqrBu",
  "key23": "5KVPjrKVn32iw7HNb2K5MX6hDg7vm4ftmUmCS46r3UjhvCo7DCDKGDm4ywFZjg1VFt3TsnpxwEPLK8xrJzUHG12L",
  "key24": "JNE8NqS2ttCAiBrTCm9TZEmB5zYw3fUhPyxhLoPPSWYnekqBMGqavjguaso478zfAA7QTKj5gTgXsh2FWFQUZrd",
  "key25": "qicK1wg81gzQZVq6sG5hfNpTNGAvnSpV9YrwZwUAkrc69uxf1oC1Q9NhzGza6TZrF3RbVBZrQiRrFjxbrwepmc1",
  "key26": "3RpSQNqhacYAQudmJ6R1UyoJ1BYRMu9pyH1cF9czMN6kG1HhoKkcPfz1gaWff9VoXSYWEPDCUJ9JrE3TbG7nYnQX",
  "key27": "3kL71dppQ8z5YHpwmRAqRRGb8o2R3qn4f8hTcDhYwPbX2tqwcJEsBDLprHo3DNufmdhkyw5mgENPrR7kPfNSWkD7",
  "key28": "2eiEPXtf5UWvZLbhD7StU2g2YS6pwtpabBBWcakE8inuiYv5QRbMmRsFZWYJBJnaPpytCHNRB9cSCMi6tG5A5rxj",
  "key29": "3SJQGEDPz5tGpsmFNvbfowkwd2pHUPa92iJFRxRDvjvp6RnuEQKtEaViVxtnLb6wUNMjnPBwfBbYjECDdykGFLHz",
  "key30": "3nDKHAv9h3pm49EpgHcXnWDFEHTCvKYaMjaPnjuR7Lxhm4hqUphcx1QANAMbsiPoKVEyeUW2bHdaNB35K6gvgAgQ",
  "key31": "2vRKw9N9DXvKwruiVTANGnFjYb1mwDkcE5G6xwNgUoyHwKUwopVMAkjvn6xE51QaEMrpV8PHxs6UQ7GGoa7e3CNX",
  "key32": "5mBvbA3SuhBgC6FNLQv5Lfj9chtmBtu7fDCFbD9KE8nHeLiPBWfBjd8C3H8vFryagDqncJGV4VKixHk7aVpiQLaK",
  "key33": "3fHtcR6N48pFjxdrr3dxPvFgezM6sUfiVKLxaM9KW1xwMb8wxLRFrsqxZ4S7bBysYu4eAY2hVrVkkpmiMYHpXbPu",
  "key34": "5VA52Tc2KfLT5LqY3si1tjhP7Nmr2tberh2puQewpRHKGMrHa6AiQfViy2GXqicaR7ai89hVfm5skoV5Se5XKkM8",
  "key35": "42gRMuYjmF2xMrzdTTbs4YC1qL38CPLwGDPVFgT4brrXLUQbLhdG2EqFpgEyivZ1z11LeQRtuf9LK7gGhPCXJXex",
  "key36": "a8L5D6p5uVzac8uTnPqzsMGzon5iZknPQwB6UwQC1aS2reNMfcqD2sYz2KrbLaPNjoVSzHigaSnmVohXBFUi2Fu",
  "key37": "3wRRntn1bZpWdxcEagHXv8orcc4tbgLBfiKMkW3rseig4fi4DK9GSyvZSLdjytwqNZYFcNXkDsgxg333EUFCnPMX",
  "key38": "wdUY5GjJ397uP3enCDTcRYWuATChcNXeaqnfUQNqSiw8sHVtsCXX4FZnuCRoi2rkiQ4VavwKoayjWowGTmcGP9X",
  "key39": "2po3uq7rRT27wY9WtCDQQSHuxHRQtVXWiPry6DRSiQSRQ9fBbb6HvoKvvK11ESq8ktpTzezptTb2MvjAhP4xAXu",
  "key40": "5EAZowagRrG7Q9JrACB2k48FL7xNVrXXVJ11TPGtwPiqpPQLujQuNDdfi3UFBU8P1QVLjLZep79YVYDrToRAVAv7"
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
