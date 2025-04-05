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
    "5SJFijJwhyv7eN1AceTRPmLMajuNJrvqcQSXdEMi96YbTgWPtdTRmB2bbcoryhzPnpRsF7Bp4NaGtDs2rZF4RPcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S4HZeKTD8X5Kq7vqfLiyUC5cB5HEqBW9Q4YM1xCv7usoKAT5jw13Xx2tnNokv8C6ev1ygWDfqw7eTsTzLt7ZpJA",
  "key1": "2dxfNXtGU3Dvv1Es71GnZr4T6jZgP4ASTq8oGqSa7rdATAgcgd1hnTszAViL25AumkuexF22YKFPhVNjBhZ3CqBu",
  "key2": "47LWp1BKpT6KMsyo7wMp3rxgJ2oXc3Rcf445YKPkGf2gTDeYsbJ7EEjHaN28Kef7C55LLBGT2w7ymrV1nvZqdBXC",
  "key3": "5z3iJSvVxiVsqEcdhUyjQn1cs4mqQkJU7uhKq4JRXKYM54AiwBAuN9mDMhuGpFfWXhLF8xaZRNYaXQU7vik2cJuh",
  "key4": "4HVUgVQX8nhn2SJUbfMtJZin945dUynEsZuYaj4b55ai1DyXzyempbbDcx4qW3C4xkp7gZqHzACkTYwJzA2cUYRm",
  "key5": "46E5SRGZzQDL6X9Vngepxdeu7ZEnAHjgcUWfMiMBnBUKcKLuW2Be9c6hFMS4QFNHGcV7YWazNvCGxmLBLqjE8EZi",
  "key6": "5Rxrh3hV1HRuuyckTgotJN7mB2XWFodnKGrNJNtHtwKSuCxekLiJHiAQgy5apwfhqzgExkzXEnRaxBdPCb1zTTCd",
  "key7": "42275uhrsgd5DmjYcZGjMXbxXvCgX3YpfDmbxim67adAG2TJ6aTfvspCHJWB6UdfkXM8rxqpehRzMMHHAgJss9zZ",
  "key8": "237nqzBk87Aw6YTtcyHmXK1SWdP2nvD5Nport4DnL52ccjmDMaFj3JEwYYZJX5YpgeNBFKuYkrDEuUEKMsPH2yC3",
  "key9": "CycBLsZmVsjKB2QSP6s5FWPkwZaSK1ghhYNLNZrKmouFCBR1vxFFDZhDHVkr6YTFq89MeGjkjY7WX7M7QB3xjbG",
  "key10": "2mXVZVyo73SsU882KQN545MZaz24uLLkgydgB7Fua5JCLiLi2GYbKTTjzcB829HG86EWWNYhvTAc8xYdX6fv7vww",
  "key11": "qqTC9RQ2emMduDEcVFHiw4yKipatwMJ7cKjUdK5PMzQFYEMUPnPp659YanmLJoswV67KQmrq2j3rMxGrJG8hkv9",
  "key12": "3VNriq4yh5Ex3fNCTSV8naotCLNEtJ3KqZqaq51VnTmQZgih34dMhmSDhAndXdgMY6T5t4MquzbnBUCt3zVLCZG",
  "key13": "5G5ghcZys8YzswGEsqmkpjmdojuxs5b6eAakQxpAtCFTaXS6rvDu12Y3Wfx5vUGhdeuhtyMjqVFVYwQJU14bt7c1",
  "key14": "5Nztv1TwCGA9upp71jn5qYjpBXbc9SwNci1A6Zj3LGDvgKRfmUqXXgzfkzeAUrUoci1uuj5QmRz2bDGtCBTNHbxm",
  "key15": "38WBHzLdWWEVzBp7pYh9jWGGwMCfRrJ4vWLL3eynSHqUhAwdKgPgoAztaKZhnqYr8qQ9hnZBDnYvgcZA5qg25Ctp",
  "key16": "4WjSrRTMPjLJFsgRBTRbx7VaWeg3oqxbcZpxmgr4QKLMCFhybRUSbVy8Bz7BGvFpvvEz65Ne1vM1YrFEuyxNHQif",
  "key17": "3W4HqL5qaCV1YyCJL5wKCEaDVpUYUn6ju47FLemRbTbLMMvGsCohRjfETHCUytyZKeRfEfp18ssqGoeeRf2n7nBV",
  "key18": "4e5yiy14uehi5ExExA3YBP7UiAvA7snJRixcjhZyqxu3vmzwwyqJsp9eUdD6g2G5D8ESyUbrgDUyEMQAJAgAzuoc",
  "key19": "TH48pg2gQPmD6iSLR3s5A84gVxELEzTfaysf6jSLbZXKjdTh4EoHy8iukxVJqsPetnGqe93PtdKF9jrsoBHKman",
  "key20": "59UhuhuPyssDUWAEQXLgJRgsHqGk2L4ARyc1yod1quCxtENRpVGxUQkcpNxww8hPZ1UJRAK9ipCwDrJZCZ54SFsa",
  "key21": "2uvQFAD9NXzXQ1fYo2LzoqgJR8tYtwV9mPtuEDNZWCsvgFtjsUdGyuvUSVcjG5XcrweGG9wioK1MT8tRUGYN5UTR",
  "key22": "KGgULmTtMtTmNDDWSbt8auqSye94VVkjiYumwPYQCT6p4Kr9QTDduPd87XmSPYHDnGdytJh1P8xPH9TdWQQ8rLF",
  "key23": "5SJirutdsmaE7644hDBxvGuFzHBJ8BtY4v5EUA47Dw9fH9P9t27SefifApvr6nwoPJZhRcrQeQ2gU6ojmAX3eAA6",
  "key24": "5dXtsML5D5PCSsTv4VGNfQt1Tx26LQnAkvauyDwsXpLoMJh1CVoYQAiqoBPKh2gDo9BUkcZCxnEELp9B1d83FduK",
  "key25": "Jp7hKyJSKpCofTDwRk1h4jWzJ7ccCs7Rpoh3k6Xa1LNwmVqWS7oPwWXpGtvCegghLgByEkHfrY9NxH8a2BtiLLP",
  "key26": "46VWCZVdCa4mWr4qfpxHWYbZHrZK43buUsQ2iQ84cMznurUzWiH3fMie9z1Nn1q4SrCCkQtBdZUXvPe7KSLzzSrK",
  "key27": "67rHbCJqVeautDY8VheNebhcEjSn2CHvsQFKAPhKBqLfTkCaRRMZNLPqSV3BhstXmRRETSDtrN4o1VGUS3LGXD13",
  "key28": "3nQsXzjUsufPz5bdQFGmQLfbVxNCFYk5gYGRNen8vsikfwPmjaYW99SAFtsCBATmxAd6rPk8ibbD5bksbjrv9HW2",
  "key29": "5SeE3naVMe62KvfPK5P27KixYWWTD2d7HucLbhK141DTBdzuvhm6LwwY99Yp4HNvwLvyVy6GSFvVm8jVDp9NopH8",
  "key30": "4KaKNCZ7DDpmBrMVs4nnxKk7skP9pH7iCTdhnGReJQddLDn68mmHpFtvMpeqhHBvzYM3neHZtfaf5NhoDBZvpPDK",
  "key31": "3sWNViw8hsfRWcgMnr5cf38YYtHLKNdp5X3HVo3VBpQpnDQVsybBTmm6M8T8tTwSHVBgKi2MqneSbk8ekx3pRMNX",
  "key32": "5iaxnPWstkTuHtTahuuvAo4efD9F83ha6RofKEz7YxmH2veqng585ngo77Qe48zg9Q55pEVVgnFBU8fVicxQBPrQ",
  "key33": "3MhC4aHB9cWxuQcThmbYzWiKoUoyv17sjeeBuQtANS1m2Gi2NQP3aNsstMSAzMxh29Sb1qanZvh3fxTk2oAApbZF",
  "key34": "54kNCrqwW1a5Dszx7mUhVVRb4QCxmH3UwqpHBqdT6DbyacoaBQ4t88GXA9sirHpryN2DAgKptKJtRWCEXNMdWvHs",
  "key35": "3uPb3vJYVEM95P2jsxmAab4KnJtRQaz7eGaCHWf2NbyyjKQ6Z1xSusPP7Gb5S186dzqCVTNa8AfhTiE7CjnFbaUp",
  "key36": "Ait4Y5LxCfFeGsidq76vDugrZvDBcrpBV5bfn4hRnpb61253Y5mQaE1QC8bPtuyt6hW5RgPqCEyPtdyQaVf5rxv",
  "key37": "4eMDa5vKtsBcRr57tTwY4EB1WaADaMkPgSXbcvkvcq8w6wq2vNeYo7oqHKBFHmUraJms1yctTjQL43AfhVhHEXQy",
  "key38": "5i3SwVoz9z7mp7g3CrJF3F5uUskTRH7AbAzVbsQ1YVQ2Axbvi459ECq35DpfL4NcpVJ8vLXyAHf63k29aRJYTQGP",
  "key39": "4tVU85jex9R6X5Gk7JPUXNnznKQdnqR8B2MTciSCH5Hx7QSNiAg2AjFvzp3THa6YLAwKSDrhFrTy786SGP4pBa3M",
  "key40": "5tqB6dgDnevr82rzVtnFm7N3nq4j7noV16E7icCEQAwNASPvF3UBWd1PKLs3MkgprUGfH6ucPFM2JWt7yS2KeMQv",
  "key41": "5Eh6RWfoA9Ygf4PRHibxRmw47za2F6pfzzdGrAju6qX6khsBcbEsBm9Bsc8bw41ukoaGAeyndedtEwekGkiVjLTz",
  "key42": "4ZYaQS1YV6xbjX58KXwXzFuFV4dExDRQrJbvoUZwi1CrPRW9V8orY8Phf2CDQKoDkq4Z7gaQaDxXBtjSpg5MoAHB",
  "key43": "3CAk3mJguAQ2o7ujWgGTdQDzuuimsHFNKtMqdJ5UDvmiKoAPSutezTXq7496mLu3izBk7qW2KPK5hcNZdwTp5uxn",
  "key44": "4oGS6qc8fFA6mYXLae6w9TkgQqVMQJMA4tys28es87qqJ8aU5jTSsRtgVJg3QVmDLZnC4K8tcbpYPiBdmwVb6aLR",
  "key45": "4Gcu2LdqDka4e29LJvmY5vJuidNWCmsASDn51cSc43ZYtcqDtbsJ2ZJY759EmjeTyPUqk8aRMuMLJ82ML4kERPhT"
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
