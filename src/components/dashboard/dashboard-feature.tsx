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
    "3qsrky7oyVzf6fZw89Mfub2VfPZykBA68LvqTxVEzPwnWF1oCUwnuuquKodsZgHYGRoPZZraGPEGDhrz7uJbdaob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f794qhh4ixza1dd8YR6WjsPQwTM7PcKvgwvXZkAKfkiqskCFg7Qp5sWKMpSiW5xs7TFvaAs95gKWokHdwCTnp3m",
  "key1": "gnzbJjgx3KAviSuQ6JksB78ythq5cSMJPzAjM8757DgkxyFquQY7aoz5FCFbUiNoiaJe6CHz39ZFLDsmoHmwFHz",
  "key2": "4pC2iuY7PXFz4VNGMs9tSCHXUtkDjZ8YQKjveSMByHsqppcmPJup1LAxEt4ivQh3SgKKN23aNgt4kuM8vmHhLi7H",
  "key3": "4scn3YbWV4jMenKmeGrxES2WBo4HUXJJB2nJAMdG9FapXBCbWPPGWAKG6WLp3eC6RPQ64ov7HKuArbTTXUYLzLW8",
  "key4": "96FHagtQNNMxRx2Nqx8rEFELdZ7cp1Soe3o9yW7wQvg1YucECvxrA1or8EB9kDyq6dPrTPP17CgCEwLXCDZc5yv",
  "key5": "XvAbUU17ve4EbyuyBupvfvefo2r81PCxMJVQxV7QuKhwJofiJnzYQNZeVMZyxiTSfoh7nfjvY1cPxY2JdhqEcP7",
  "key6": "21oQcX6GYNbuTD1ekDfrBiQr259gcAeXL6SA91scUv3xqLFgMGDdq2tQoYK1Rz3Lusyg43qn73dyNNKodGGn9ou5",
  "key7": "4Q1Cz45gwbkRKsQBaAZs78TLrJRTRevUfpW9i1qoQfqTJBoUPMhCJEvWwYZ8BRKfS8m95GPLg6mAUXBe9UUeAPGo",
  "key8": "4BNxhc3evrn3NFMQ2KND6nJkedHcyr1Eiz4Pp92fgb5nAUJB9DLeh4oDeAxGxMjeXCA4qqCoc5112hfUwsjYQ7Wv",
  "key9": "3UN9J91QMfyuoTopKXgxb1ZoLegAYxvs3uqMWsUfY3EpponZLJ11c8wnyVGZEzM5E7jymvPPgxWQZziKNBvoWgyy",
  "key10": "3NEcPzjuCcviKKd4dECDMEHwAUZHH1gg2MFWGNahAqeZRuTJ49fB5dJ1gTSB974pLg72jZWbCY58PqRna6aLSk3r",
  "key11": "5gMBo3o6qMoV9Xgu7ALSesk6PGJ2Ua9iJegzXNFQbSUKkQneaCgdKGp6zPhb7oa6hNMtV4jAAXiD4xmgnmeQ5y8v",
  "key12": "4qjbTorhAN3keuku6irNYZ4bX56xmoQtGx3X8ZQpkyMq5jZ5NCLFQzJ35eRWk5C1cSPvNmLJtdZBBRtdF1Jm1YaV",
  "key13": "DH1GmNqotCZiVKMjck3WCf6pLGezBz9e1V8ewxYg1y6RmyosA1YF6jN1AZCpzvtw6aXLTo5NWQKEJmxpoYVyDAy",
  "key14": "2bE3pfRFVu9qW6kcAWnJ1skSnMRrKyViFUq9Rdn7ms6Ufy4ErUwChKbpTXmhWXMVRX1BNHcKNBTYksjGaFFJLhHR",
  "key15": "2p6KBfDBCBNSm1rhWtDsq41F9X6aXZDcTyfgNB1ntwSP82qggffMT7tYri6TaRDsdAxepLLqKCnuMvHBtuv7VJuJ",
  "key16": "3UwuNr4BZrxGfQEjcEempFep59C1VcQSMbVpRs8hx9p96Ea2BQB2f3k9dgBqardy5hfPQsj6uZJ2TNxio7FCvas",
  "key17": "4fyeR2CgJQcsNqw8fWxqnrfzWhyXgqRSa5tzdZUvjfPnNhyftHs5v9goACjVw1q8gVapvhKRXLdFrAfvNuc1mrqL",
  "key18": "YzLSr9UnEpwrjsnnMHgvJxkB3mfk1etmhxSbHxcpNFUXzfL19caEbudkg2yHpVSTzbkQu415FcUdK38V4dsjM55",
  "key19": "2EZ4vdv8uLaVVb8LnksRrk445A4VKMhZ5sKCVQGvYzKt661BVWmLxRgV6H557M6KHDnkbZ4MtfRYCHj5fMLPSnDF",
  "key20": "5QKyfcWofqmPdH8w2n1LXZsUq6CAiaZcnGZKXW2Fv4Nh2WrbfrcKp4iPmBDBxLqQZ2aaTC8SCkowTMyzDDLsdLBW",
  "key21": "2DnqSruj7QpBxSPBnRNpeRDbPWbspuV8NXgfjSwrdSKwQQXKWEyh3jhQdMAtEpaNEGkHTgyWBtZMx3KoWztTENe1",
  "key22": "4WPsC7kCSvTqg7tyW6D9QLLqmm1YPhhLaZQ3oxyfTZ42WnVCXJEAVLgJjHEagAMrmJJTjFwc6dJCFPuPEjhQVzb8",
  "key23": "28CiCYvV67RSBc5SGSZmGRunjttv26X3HufhVJM7HDQxjdoC2RHp83zcdQy6VtCw2AJD4vgMzhWPLr6WvaUfG8zJ",
  "key24": "5TLPjGgCtxa55az9Ya4SfcWd6nEZ3u48LTVbgsZ93GmHLbommB4NCrVgmbZBYrpZ77N4cEbAXvfH3EswXYsw4BAt",
  "key25": "AXEd2WpmTnA3sbYzqFxY8dSg1w9CH4ZPPQDkvU6mYvGV2oiQeW9mQTcmTnth8tqhtJJobsWiTH5iZKkZHUqZUeU",
  "key26": "31TVkMbKmnnUvKBesz9YmLBfg5QU39bMieLnhqYVj59P6Hz5bEFo2S5iUGTZhWHXjfKpiRCs4yZKB9K69VmtHFMQ",
  "key27": "oF2VKsow3iJbN3kAqZb4QV4tRTna1cAwk24391pRni4eK3nzr8hfzVYVWnY75SWjRoMk9LRgxQMb7X1aJxm19fA",
  "key28": "5FCLPNFanhJ3xHiPJE8t98oitdxxa4VGUrQBFLPiGkk1n9bS7c7mho6MJwj28HmNNWSuzkaLx3xBXRZtxa4pUzSx",
  "key29": "646eD4GUn6gPE9QokhAhAnvVhV57M24LJq22HXeZLTJyvLLMB6twjc54hLUgeoD4bJGxBKthqnRoe4bLs2AWkiMj",
  "key30": "4MsCST4sbvZiYeAdisYeZfVhpLqAByb3mRzet9UobyH1q7NVB82AtaQJ7gbEVT2VhvMNvdgS6rFUXUEsiyYEk9Mc",
  "key31": "31MrJaX6StYabtRqgAJJyAQxYqGgYmUcZkk5GtDkz4CqoYogitffkVptn5foF2uq1wRsp2GnFeaoYmkCJwzzi1yX",
  "key32": "5QA1D5QNXwLE2rhcdLJQXpmk7k5rbSTaPhBgaGbXAHCmWhGu6EQjeFEkYqxZSS7dtRxTidGV4uwiiL5b6dxCG4tG",
  "key33": "1xAS6GUWe4Gh1xrjsrVTNDAA5NKgTjd9GQrp11nd7c8wFAtpxdosBbwyGB5kkcfJPQsYjk5RjAiz9zBcghCqJoh",
  "key34": "5CfavoGMNyLR7rvyhrX7eT2Sq8xNunwHSAEEn9cXsWtLCe3aUfsSez9K8ftyvKfVePCQjeBZJneDFEuFMNsJoRh6",
  "key35": "5r5RfviqyyS5Bza79vXyJM7ojD66ErLZPDP7SDWwebW2Nj7DRQg6e19k8C8PBqCdCSm624VT2zLBX9hP4QdGeBHa",
  "key36": "5x7qoXviEaphSoKxWj22hbtJBEHxBKGDhq7Vcc23qrgppwgSerFnB9mneDCSVoHEQCeiB1tsXukArLmK7Rcu9161",
  "key37": "5v9R8C7Z94KjEoBtXq7xrqidvwjNtvv6ppse39oQhHdsTDLkHegJYdfaaz12gSRC7da1uNjjaJMXrq2y6t7RBP8s",
  "key38": "24yWUnqngiBaYYQJ1GqMw8H8DL9K31mg6nj7RmmaviAbX33GSnnqMvV66fUJJKgjFNmurR4onXmyno4Bw4qCaaEZ",
  "key39": "5xWsmdgFJGNsiCTQMkwbNAHYdckRvbUSESJcAs7Kev9FRyjskDsAynqqywE7L4Wqe4Qi6pimoV8GFoi2rfUtyEAM",
  "key40": "34F2suALVaFoTqk51o8GSQzyg68sJFW64SWZHjG3EDmgYJNDdw7ZCqRazdndfTRJSgfphPUPVHymeoWxipEyrruw",
  "key41": "2zhakn1r4uQyzpAohRX2Vo5yE3eN6pfMmr3BqDt9L34zArPG1F7vXsADXAkMeSQk9E4mqiyTWsQ9QCKeXCdWva7y",
  "key42": "4D79rryc1RojoVimetfT2YCADkhEPp9EpHUxWqdds117hjUbuYDF6Ve7YQYmFoj6fd1aDBww87ashJbR9gGf3u3b",
  "key43": "5s2xrBm5qnvwwm5oc8yRPtAvfEMV442bcSkyaBvkiK7rYauXcNx64gGKxGuDujbHkXHgBf5vHJi27Nz3wyX4pw4m",
  "key44": "2o3HsZk7ycBtoi1SggryQ5EM2Ye4c7n6YUrLqEkckJNtMH1KMUbNUvJwJV9rqqQ35LuvpHwm6q28m1jdZEzzPCmK",
  "key45": "WbPhFpuTehciR28LM1MDUNv3oAVfbp13bmWBuMDPTwt9u2FfqoEb9xy2nxHdDdgRcdyED7BmGdXdL9JirNoN3m8",
  "key46": "3w7QnKuFJN6gNYxe16v4179PAwC9vPhtN3EdHmaNRCryqmqzdGSg7jYpsTnhPRFaqJxzQnC3qo5jitPk8TsJM9Am",
  "key47": "29kcbam2Syz7hpDcu8DXHdr4apgHSZtPP9ZQcuCCnMHeJVKEVsojTJSgPpY2SjuyH9eqmCwV693xdMvU4L1mPG4w",
  "key48": "5VCBpHeNRYkbhBZb5nsWbUMWRSqKpkhKnE1jaqpNQQ3ecpm7tq8eVPRxwXGX56tCkMCMVxPJhgPj5QXg9MdqCVdb",
  "key49": "2X3h2WocbtPjurmsh4rJ1B1LLjwhDBJ4E8UYiD2U2yg1u1eQteP9LpSZRZbQgybxdNu7TdPq65PJHtYY6WXWH3vz"
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
