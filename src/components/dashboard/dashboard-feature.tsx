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
    "rYaSgRpJt2jrnL8tTbaqag2S7MDq83FKf5CBxUdU8ZqsTVqhgAdDS1pJZ3cqUczBNDkmRXKcCW2zQ3CUuZVdZp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jb3iCWmkkDKanUhLHjCi25389JD73FzJUVoTadgo4YgJadbRXzyWMmgHwb7rL57e5ZoRGZXtEUmq1LnQrz8e8h6",
  "key1": "5igmBgL7t1RakkPyW3d5cRxoAh9WfyAmsd2gb42jd8JQxTBrXF1vTtxbWg48sZszHLA2SSPmW93YvdZ6pJW255m6",
  "key2": "36o57uXaFTnefu22ao83ubako21xRXj5gTbR2UysrkFa4tUZPtUGUxD4PP9GreRV6ctnMDtpqCCm3yi5HW6Dxys7",
  "key3": "3zAwCgiygBoh84aLAD8Dy2ErN6q17LzcMozaEh11avDH6TdhburmMdpZiR8DknbZ7HuCBHDZcQiTUgvFks2S6di5",
  "key4": "3c7Atr7Xv2x3nJw3wQaP2CzwNfz1TWnEd9JNSKsopG7WdYY4LZofNTkbXnbDjA6v6krKuWGuukDjgKCPvZYf9Jmk",
  "key5": "k2miT6QJbHBe2U3Ft6E1uDakVSCtMgppvbWESNTsfJ1GnxPc8Dieb47KQYiKcy8xUe5Rxa53pVckmL1jHpK2RbD",
  "key6": "5jGuC6Rtba84deouqgdMMTJWjMJZa7DoWWryTEzhMcXMtRd4poYEPWqH8gmz1oaCNxNUUB63SQ6JHBGEXpfU6Fxi",
  "key7": "5gM1LE961MCG4ZstLvVrYzhvauW5AKEoeirx9jKg7xrNNDfXTnY8LbkeLykXU1s2YPGUd8h6795e7Qn38VXKUsvL",
  "key8": "5RYPLasGjtbrQzUFY6wDFV6qccRttWWpRWMi82h8qk9ybAxJP2QDkffrLUeMX6jPH8VJiHa98x8p9g3s48C8KxYk",
  "key9": "5jACGwB6beaT9JAWtmfw9jstYZJu6zhdVEaPCseBv3hXjypiN5QKQGRTfREi2379SbRxtFLpXEwUfFD2Kpv5xUUM",
  "key10": "5AbfgZmQ2xxiPqNATGRchpNEYqN4ETLPZdtWp9bT9fnmuQnCM9TjfFrvePZHTjNtawTxtjAKdWAqMoC4aFyVRPj2",
  "key11": "3LFYshyh4VyHNuX5xr6dcthPD2QZkUBXtncYjoaj9bWGPyvWo7jur7PTLZtEmRGZpYinwnkzUqQxTagboFcPcbVE",
  "key12": "GHP8v4JQaE5GEFR8L4ztDr2hetTwUwVZGmThyJixgp5fBBZm6MeuZtJ6ibZ1qGW64QPDtiFHXc6HerdFAm8hQd8",
  "key13": "62e1pFgrZx452ru9cGa1S1osphw3dT5RzH7s7tbD1ce37agyzBnsUsVvuyw5EFELE4aFirRZsAm1zRv1FDvae2hb",
  "key14": "UEzs4RJBugtQn5xqpovnLpN7tNcCRtfh4wzcyE2fkUg3RzhQRR64AieZ1rGmHF52of8f6r1HcLTUzTvHYzWyiA6",
  "key15": "5KPZ4PKfEKQxs9SxmJa7EAbZBAw7bHRb91CgWPDEzWt4PuEBzpvfHuv4LTMEmfmZdob4gcQT8gKxCtbY8tdTwHrj",
  "key16": "EZFvvsEBZsGs1n2LttmJ7y8NuANKzXWYuz9jeaETZPME914611JiKSG3yKXDY73qd1qWvtQM8LdxDw2ZyEa4ckS",
  "key17": "NHtnaJWYyVYSV2RstdYeSZ69GZ2pyz8ugGREsjazKWpE5Gm9k6AYwMXVpQDp5v38yParnh1cyJtv56L6XfbKxnn",
  "key18": "4TmR3MA8Wqd9HhzkHyd8m5h91fsra5WW3TELMgF5M5rh5Cna84fK1EY4KEf4fp1aJi7MCt8i5tqVpf8XBeZDnz7C",
  "key19": "5uSpovFp9ZdexsDKrUgTx2oV33c6d4k9E53XopQpA5cLQVLJT5Aw6RTYbvoYsUkYRr65rSivFQU2342ZT4DdaV9v",
  "key20": "cNAS4JybJeWwJiJTy6QiSdTqdnoWD7RgtAitszxg1dFsX91BbNNfvoShXtRLLLrf7fhtWsTXpprYWWcCtiZJ3TF",
  "key21": "2db8rPrp5vbDkjVddLbAcRZKQcVpJCmaJEJH4iunmpcpQDeqUtFwno3qPHMq5LMECLaJZtiMyHq3ozQpgugDmFF2",
  "key22": "YedzfzRyWtGGyW5Q6A59dA1wfoBd415Pav4nj5URTHKfxaEQDMTwEr7Uhj6fnQazitwFU9SuVKXi6gHKpkvqD2E",
  "key23": "5vsetiBZ94WxLBsn24nJV3pY1Hk68AS1VJzebwmyT3eq4jWAL3pLrT8qzNYriKjQjbF89796aSNEDzr7pNnsTCvx",
  "key24": "3FzqnbqPRCrNcqN6tHhquLgkwaqzB2hT8ZvJbmWYPjcPvT2w1cmANAE7JxFGr1MVG6Mq456YCuQk6wGzhxsPMmyt",
  "key25": "5DB93KAQeovJLpXtQWYEzfWN6nfrGiBdxZ3BkGAY6xLfLHX34uC1Rbj7qP4XVm2ZcV7ou1QzF8arD81e4Wf1jn7d",
  "key26": "4Q4zaV6Ms2JSsnnehMco3oay2ghwtnXbQatMPZmGoE9BjNGTqmQstMBNHiZK9uL8u3r9Qsi65agzCRjKZ7pBJfTR",
  "key27": "22w2vbJb5nHWUHc2MiKK1Pcr1joGspFjw5B1z2Hr526axYU74p34GkdWUUbAJZMWeDh2kexnRcsSZQNEpZE1FLva",
  "key28": "4A67uiia3DHZkGBjuP12rPQKKZpzjFkN5icyzVnePrprgjPhKXUmZuEqDf9LAudH8KJqcKXBhyuaXMFSAZtU8iki",
  "key29": "3d8Jet7PmNE3JrTr4Pj42iMLQ7ffKuTX7xHrFZJV4RzKdagrT35i1gMwu7xVjb3Z9vmgM8bd8rfwdoKXo1wriLbf",
  "key30": "Qh3kWof5qjU2Fj3urVcQp9ogX4wG2NDRdiYaFEUq9BhiWoBfb2FpFDoQ76bXt2xCCiGiEToQRwM1RdmRFreyKpn",
  "key31": "5itbTGDC8JKAVuNpN3n75nuHMZSxuYobNA5xWHMuuBg87971HDFD8sP3qd2ZsewWerf7bkkT3Uqcbzh1o52HKuPY",
  "key32": "4J4wMBSxbjWvMi8r5PMzptA15HLi3Qfv2Jw9uLqLqyXNLd7JF1EpysPNPboFSc5hANgK8PEpPyvXFLBeN9fSccRR"
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
