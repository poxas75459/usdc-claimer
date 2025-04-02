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
    "5YikiZUjWczPvPpCDQwLSqzLsaYhAWi9ZvexfPB2w4Gm3AHbqFdkAxShiiRTvmhCY8xXEdhMRycjF5T7bYmZf5yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hjhGxFsGPP1vRt1FN7SDp5Q5AjRSQ5LUoPAFdLnbijRUfTTKmkpi5QEq1Gxn4TPn45UNGSiNJjBiVZsdh6Uneo",
  "key1": "5ryswPZxTVR2eY9QCHrjEywydz6pspgyrJqiUzAiW5skFMQaphn3qhAENjWeYhJd84P3G4UAFFFhnKH1RovagEsC",
  "key2": "27HUBJ6FdXEjzqaKr4ERsoqaJ5PhU7VkU5xXThBvjae4KjcKCXz64zjogW7T8jCDZhCMMs9YFTR3i8R9guwrzuwt",
  "key3": "DkSZ8hywsGkJV7z1ETM2FvgZNJEgaFtba9ZiuUcTCmJHGkm6cd1UhQAxDxHYpNvff57Gd1vfJm9MmqwqSXkZouS",
  "key4": "2cvo4pysnpoCH8S4M7RxpmUhNfzNpeTD5Qz2kb6nwQycPEMKDRd3y8vTfVucUshFmZzFNTwwRJ4VcD9iSM7fChGm",
  "key5": "4xS8L9Qhv7ySAiCo6R68iUeeJcVvZZkXta2dTfj8rW92T3FLnZJ7PgeGdTzTTgqeFpM3XLdXTT48uhYGwYnqXBbY",
  "key6": "2psVghLa4akkAzQC4S5Yycv2sHoL83X5Fevpwff3befJeUT4joe3YsTf7AcsYVuLbrb2qRf2MgHXQveYoLiSs3PQ",
  "key7": "2ryqxdjLtZ29xAQxeYg9XqyLpWqgT5EZaaSgLfSy45cqfq13mFWZ1BxoEZ6E6aJSp8hMsFm94TGrPAJngnq51vzh",
  "key8": "4r93UyjoGsv6xuqhkQskV1F3mJFUv7x6VDh9zNMvknr9LXjZ37ecWTtfgptNmyk9smZmfrpSBoCCN1wtmQNyucnd",
  "key9": "3apAR9wHAa9iZ7pHt7a1tNx4eSfbMTmQF6k7TLMKgnUgeZfF3CiHRtmAhNCfhME1vp2Wd3p3Diih5aFtL9EuqATX",
  "key10": "4z7s7TSjYiJeqzs1JiBAvqwUbS6HAvzWoQVohHRhHc1tsACVZJSsLqRLZT6vDZm4rPN5M8ReBMkv7Z1aweFWGh7F",
  "key11": "2dU3xf4pjaW8uyHxz4AGTxGumkykgSqD8bYXzMULGVgCwhpFqjognucdnAnRwqTfFHPEDSkiTmQhp6dJAJnoNVxk",
  "key12": "K9HXooYh6NUm1hfFikeX15iWYnn9WRW4ZtxTqvFVo5Tf94GPWYJKoxuEG5rJCDYxPfexrocN4h3r89Jrv5pZPLD",
  "key13": "53LGTvuQHzxRF8q5sqH2x7R8wHnwxtKSnjSJSejpgf5Pqa2PAkLn2VqEKzaWaqXH6cQN4CFThaJhmYULqaWmJ1Kq",
  "key14": "5cvVN5zUNH1bUavjzqPr7dCqZbiZetJUSbb92B98cg3RZTBCsMeMR1pWiwbVAyL1Bu11oqkLgZdVQ3RCnU4rHBqa",
  "key15": "5VNYzKDmBY3ntsfug1eaf8fyDk88ykEvMgfNaVctz5vcH1TmrQJoYvfPUcN1A6Ajnj79jGLbgZHNVVoKymV17tLi",
  "key16": "4hGWByHtSkLZk1G5Nn5wb48wMr9eaEvdPno2vTbCLXijxDhX8uCpk9rjQGCF5dPPpSWzY6EU9vxLiwSL7VmqvQPH",
  "key17": "5aGoTCij34kVbKnmyCREnHR4LsDjtiq4c6NS7pMcSx1xYeHEgU4xf1VBwN7JAdn1GHAVnDwVsB1vd3awkeBKpNLY",
  "key18": "2HX4i3x4FcPLrCQUAB47cjdysPoxFBjBxYqUUoW3VwAVzs1hgGwuDWDYSdaueaSpV5ASUMfyLAtx8Uf1zNu7YcLS",
  "key19": "2oW1oQCzFrt8RuAgx6qRXH2BSfWexnk5XF5PiXgnc4Fr3Pa1Tvm9iYyzpjMW65DMKu6EegWuKKrm7q7fA6vdinry",
  "key20": "3noDwPSTGz3vJjAf7n9s5E9VNBRJwCCNZRD2oRvEf4Qsh34rUyPnnb9DSfbRtVuzNrnb7GGqKfE5NcJh5Uay37sT",
  "key21": "pCgCP4xMdxDjzzMcrGSTfFLrGbjXDxr5ucjgEjR1R1rxtoMT39H7XNZQMeWRHgUpkELtHfbMZtd9SRH94gCsCGH",
  "key22": "43xzdUfBsJGCEy768ivUd3NNn13mNUgm7fdj1agMjVzguEdk4bnQgX6GQWCovcP5QNUjaUrA1goTs79MzVSqQGyK",
  "key23": "4k3Te7PDQ3bWDjX7Y42A1UqJG8XUUcEgCbca59UxEZpWGWnUvsZGHvGWAJ851bJf7jL5ydUCffBFcBFcwpFo1QXN",
  "key24": "4NiwJfYL3E3X9J1VdGoGcnT17SFxwV6D8WiH7L75hdEyq1Zmfe19reNMQhtywQ6KP1mJdBfdf63XpCmiumGoyRFX",
  "key25": "2GT46rbnQ1Bu1bQzortpYoK8ri3pkvivrGru2UmWF92TTng4qdJkiDoBmi9pj31KvWK1J85vmNzYXaFWD6Wjj86d",
  "key26": "3rrorE32RDrC78eacT1XnBSXVhngF1a6RcpCRtxnu5WGcVPvWA8dM3RhnN4j9nF9QyyMjNiGPEVt62c6FMpQ2ka2",
  "key27": "eVjf99MYjMEBxuVkXabfywzjGmRUiwiAnBd3JmsFNQJysCGkvja1mXG5d1iRbwKPTQ16tRPZuWmeKVxeLt314G9",
  "key28": "5oiGNaqeaP3NmrvbbCDkZ6ynCQH5HwVvmNC5HUa6K4hhsSWBaX4vGMuq9fD45U24dNoVJKtEh67zYsE6qRRWiFAq",
  "key29": "3Ra5xAuzFwp6VSamKwohxd1prf6upn7mcik6CeVXoz2vMBC3iabb5uQUJw83eLh8qRBnbDEymWwCAeMZBCo2Xr9h",
  "key30": "39VvaSuwa4gx4SjbBpKoeEYkpWJ4t2btztdKeXsdzkwB2Ygy9bFu6zypFaTjjEtoFtimwYsjNkeGNyC9A3Uvgscp",
  "key31": "2gnYvHj7qPLza5jzJQbJS2dGu6X4Gja2dJVwqEnfwTwTSuHCDdWGeyFx96w9Mrmwjy7eMCbK2LVMETfiyN1UoDQp",
  "key32": "3YKopMVrsePFvScXUYRQWP1qDcuBeQ4xP4vKW6xifrsUc3VcRTJFdw2oB8Kssz2Xmd1UBxojrkH2HjYmvqrp578Z",
  "key33": "5VFcedRLxxdiURx8RFMdD7wQKegj635fDaoBPvzHS65UGPEULA2oLpakNa2coqcBUHxkDsZF7XmZCaCUx4QLxz1y",
  "key34": "iBguMafW6dozW89aa5mfK971AeuTAqj9eMNsnHozfxYmaiRXjDpQ6mqrGHHk6WmMNMsGgWZuVk2k39hPx2ZWzXV",
  "key35": "3eYxBtKzdbvFQL85U5ztAX1KBMz8ZbQyi52Vu8KtmmRfRLbi2V3S2K1hbWj4Xv9kJhRiwL1j5XMrzoyHRARkg1BV",
  "key36": "65ZJ88bmcR55X5bjV1YuMm1iFaHPtRYMEZWeryjknSyaqVFPaTd6CGhR74gbEGdLpAyPzKLcR8qnNmyj9JMZcdSi",
  "key37": "3VHD2CguzwTrvqqTDEMhHkcFAsXVQbANaNaJjEAbxyBhoRsi3UjugawysbNhCrCiXUdU3U1kwKJwW7pRPo27YTg",
  "key38": "5QnKamCv4vcAx6DE9kKDw8PURb9Amau3RXC4cxoeHjXsA3morSHbVdL44vitMRdfbXnrgB2bQY6JTUwUW6dJHT7h",
  "key39": "4nRumYJRfaTPFzupE4zrigX98ver1mr8YWu5qULVbPnUa47Pv7ZkrjX2wgiaXsotz3i3NSuoKvcPhfxv3spu7HAs",
  "key40": "4Zw9Lx83D7j1CE1XWEGPuG3RW8td2U7chRgTdCFbqR1e88AKtwU7giXQJ685qYUcJdY8jMC8vmoMNgBjpyYtju9q",
  "key41": "3K314LQwsjduV75jnL4gqKnysadcAHLdw4GVm2Q6zwJ5gai2sDmQMES1GyBzkkvj4Jic1a7AbfjnKSJV38bD8bj",
  "key42": "3HpF8q2o2jEkgJDfFyUCurx1BPse4TABjTAJACDbt13cCNfZ6r2B3vrQmCpdkusR1MG1oCyNBnwASMMKRP7b1JcD",
  "key43": "tVnLhAb3th43XJMFLJ5sJAxB3QTmhR8h7P9qgthVjASaUb1vEhhJzgrqDbnvhVdP5xfoUsvLSjPfePq4XGNB7RP",
  "key44": "41ySxtYy8jc3qEwdFDXq4F7YmykmPxMk2gvc3fT5T8vxVinJwQmTBm1MazUAZkZVi66FpG2mAS7HFMGwQbZ4XYaH",
  "key45": "5Z9YdcZooz2fy9HEXwB3CAHL3Y6GByh7cdEPriQgdnXALrJH8V5s4fgabR6Ef834Z3Gx6iuaRCyeiDBr9R21z9CT",
  "key46": "4jQQs3xvx1mndsrhKYRuMFhi95RsdZeUt6jpoTZsJyGMFwPi2LhDFxP8LUmzq2uuB5P3sSwiWFk7gjrtjRefomg9",
  "key47": "49sHgaRE3w1fWE46ZomuhijvjeVqx9fG5NxRpMPwXUfwiuT8mavZdJdRGreoHaXpTetcLifujrbFVNT7CLun85Pv",
  "key48": "5W7Ayr5hEhtSRZR1cBBmEM2JEYYN8NpoirBeLtKPc1nACu5RJb7FDMwuk2iXxUAc5bsyzdqgN4kBP2oEVwAzTX6p",
  "key49": "vk1P3KayMmDErrjf1wzVwQW74yBzJPPd7iFCs9VNoF3ScADSx5yRkGnNgQQwtSjPWFo76wqfcRW1JVAudG1id3h"
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
