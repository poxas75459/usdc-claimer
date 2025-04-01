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
    "4knZ9MXW6sSL4JSumq2Vz56DzsmX6wqm9y4HcU5DGsAHZKsB5wfCLH1RQfkh6rMekotApJcjkAJKfb6csLJ9EkvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ULPjDYMoixRngEBiPUyu4TBrDKTc2AqEY71AqVpn6vSMVAxwHjeCtDxT2CPA8oD4cxSNewH6RzbdWgg9Cg3xH7P",
  "key1": "5X9suwgeNacLPiWyTVhtLY6rDwbozMobfmNo95DCmNmnvtfxdQVoVJMD9ubkiGrDM3xrdLCBmd81ioPMZTQP8DYj",
  "key2": "5aujiqNaA5cUC85Hnd5uhmiyx1hudt3NNUm2VDgTmXrtf2TBDS4qL7SyL2BofuvKzPPMtEegJuoUVmLii4kH6WP9",
  "key3": "42hGVbfy4fsG2LvUM54JfV2krGjW3XZmhcZr5c8Sd44QiWJiRkGuiUR1HsezeokaZsnRysEjip6kCHEmd38h7DYL",
  "key4": "5YCwRKE5yXAPUFWmSCjomSvg7yzT26Rkki4eDBFutQafLBw363oeXT6zZcSWURqr8R1MZkXTTykZuyUqmFjEV5wL",
  "key5": "5g3MP7rUxUx7p6jq1QKazJn1fUcUE8pJRRRfCLv6LdCdNZudvMvzhcJf78eG35MTsfMQQu8tfPydsRNVha6AXe5",
  "key6": "3Q2xNhrxd6n6VJAi9gMA8FqKebT2o8uHiGQ4HNbxEKA2cvtgqHBDdysingtmBXbe2SgyYjP9eUQP1vDsNc7LT4oF",
  "key7": "5sDRFBtwz779V1H3QwtwFEmUjcsXQFBF3C7HVS6KPZsLb3mx4RyxP3CTZZeUtpQtW9BTJwkmtPXzVxMwZsXMvAUF",
  "key8": "53ntqvunn3QoDqhFENHYp7C36Hv7KbHUjP1QDW2K4Sx8np8i9Ue8JVgWfHc3QWm6LfVXJZUnz8wTvX83XjEj2wnA",
  "key9": "4koh3SWXcjHQFfn6epL5SFjLdehAcqk3udCQpsfrPDQnKcassocnwBYByCoyW11Zsh8s6g2FBPejjsWq1Wd9p2zu",
  "key10": "3vzcwZjEc3fD3VaFhDq6SamtMGHkZXj7NnMdxZkGYG7RVHhf5uPjy8vwLyVzzowELjsttZNovMFTLjqSuozicrCH",
  "key11": "3ZMBzodA27c19eXPwv4biEDKpDcEym6qvAE38ebVMkW8HFsPzuGp9KVahFh2ZBKXGrZwZ5um7PsaAW1vW7stXsus",
  "key12": "4Zqt78unSVTZukcgcCG7vtvWAY7sWTfisQtVsQB72AHpfouh5pENsTrfj2v1rSV69qkuYxwBgNqDw56jADH3fQCX",
  "key13": "448LY15dKbywT32sjcB5rd1g3NsPks7EryjTh3Bqc9qMUZnP8tXjtFzqPToKRnDoPTYZKenwUqwogLXvFPD39Vzj",
  "key14": "57Fr221Ac75tGL61HWY5gyiqbFVN4YnoQaM7WHtiiEtjAg6VFJg57TepoGEZHkhUfMZFYNF1YKMgzsCesWzb9rNm",
  "key15": "65uHZSP7U4Jamjq1VQgPQmbGLV24Kgj1cEDgSKauzWTTtqfCYnafL43PPPx4FjxMWdp76frrw8zuyWmUbppANB8f",
  "key16": "xM4mzZQsmGZqRVrrdnc1F8aHzN2BzBajCJb4mPCAnDKyUtUqFRmLKcdYXRu9ioCaJPJnKtYxomAUfYUxCKHq8Fv",
  "key17": "5e4iQnECnroWsmNxhps5maQNznBuTi1ZxTxVZVjDicmYTCSWJYVeVptUhadRVvtU4pfJdhjYBjbytaQix7kR2ZnY",
  "key18": "4sFZg7c3txgm8oVNxqkzYxJFEZAGM6rpw3PKVKZsXau2ZPWWicui7iAQGiqqz5WCU1NYhTo4k4Bp3z5QNY4EyB1q",
  "key19": "szAXSrny9eJ4sjTV4yBiZ29KsJ3V32fDyFbnufjQG4NBc8UsYqLooUpXAPxij3ByXXTdz2M6LgTSEmioDVAdo4s",
  "key20": "3ZZMEzQLoG4hcvaGWK7R8uCUu9dMykBp5rWw22qKjKShG1k7XUb6tniRRpAz9fQEt2GMM4dTaMtJixF5qbVKFJKV",
  "key21": "MPEH5uKL7Ai9zJN2yPZARKjJKXbWVwZEgqnQ4SXbWUtSTHBHKeJBsDRdZfbXLSdidKGTenNcRpztfkgqzhgfiKq",
  "key22": "4EUwLoN8Pc5pA6xTwxEANMahmGVvQGq3FgpvTz66jKUe7WMdCLmgDEW2zSaoRih9sbUWU7yt8H8KLAjJ3DsAmito",
  "key23": "3SbgST3DWsfLyvkcGykUAKegB7kDPCz8uSo78nSDJ41PLXMMa6J9Hqbiq3XjNUi9CVo8bY43fWLJgnBwdthMiXEM",
  "key24": "3xX4AVxtYkVo86oXaC5eQnFmcZixryJLMXHkpuAGS31teu66z5RBnBBewWJjkvLmBcpaotvJ4uspHyxnfAnAeDwP",
  "key25": "4k9DZCw6zByyJekswtP7VPXXJAWsJLMG2yrhA35BT3MSLoJTSiKUfw7mbWW9MGTwQHzjFdfpTFh9QaoBXMmGv5u4",
  "key26": "5v6WBNc7juBeynahCMF4E4XhPpFcMbpxqFQfNnzeLVpDGAwmrAmFo7XNYvzQ49jwLDdDpdqhyT5SmsHkmDR9S9Tr",
  "key27": "4sqayedE1NoSgVhp5rUPZsneKysqmFQxzomjazucjxesCzrcVSRnsDJMqRrMBAAN4SFe3UfrFa2YdTTubFuTyNTG",
  "key28": "4yN7PDkx7JCsgjmQswtdQpUVTqknHSXmCN79bvEk2J7gE5tsgwjxpHNgK1u1Fio9ehCfyNgcaiHZmDm3bdRqbMmE",
  "key29": "59Kh7cDKA6Fibd1oNpLtd7ioK83eSrurF9QPd1FwJ4mRHMgPDbQFZjYRue9ZjAgEmZfC1F3NPJc7ninhU7ByJLiM",
  "key30": "4abDHDmyGHV34hbfqoVGcvEXaARHAiqfTfke5Xop1apTGXSbc5XsZyFzDcMJZ6T2WL8w9Qy9AcNWcsZLHvVgb6iX",
  "key31": "2fNSwtWAdREfoCSiNXdDpESa42fpUjyzsSZPsn2XXT7WchSAqu7Q73ZhecSR1xR14khdhf1ShHSjcdT7HxBBGnPj",
  "key32": "217d3kshpFsqWS9TDHjUkNiSk7GvmqjuTszPCgi7oN7b65NuLdcvi2fkotx22weaaRsBAhk2Dxauirf1hsFFAfeG",
  "key33": "2an5iR2AnvWSYtyQUcraUoowH93EEivaJ6XNfdwy8GBmQaRxbhzp7wT8yQLX8Z3VxwYJpfTfqRQ6WByUdFdtbpwj",
  "key34": "3MoZFrGD2KkSH7q9eiFuj2YFVaEf5SyAhHVH8VoGSAJ1pKa5rJrKFtqtFV9LxpddcrWAg6GHXDhotQXYSWru3SuX",
  "key35": "4cBnmNMZ5BLxAugbv2dWTC4Rrvuh5PA9q1UeCFwXXx1UbLNhqLcxaxz4eMQCapqvGYGZBYmcVWKnbbphGEiDfZLk",
  "key36": "2mTctMwYtWV3KzBdu6zagtjNL7UgUZWhDxXivpjnJKiM1iH566N1C9qdwqSgdkVW9pEnRWEEHiFsF4XGjD6ntksG",
  "key37": "4GXht24ndZhWNN7XhWZgpkaPZyty95psyw3TDSpJ9N1BiC8iY6DoQC8c2ycUR6bfRZJ33mHaRdb5PuaPnYh3mwWd",
  "key38": "2BhDdEFVGYApoi4z6kHGSz2bvYTdcZi4cP7gv2pnNTLNtfGa5tVcmuYePhg2HGBdTXpBbL1SuiVw5dDmFC6ieG84",
  "key39": "218bRaBJbtXuNckEbw7X35dW3vULbsxi2oFwYeYqQhgTNfQ3qkPqT3ktXp6u2jJNu8FAoNBrQinoiLJJ98YBXPeN",
  "key40": "5QazSdwSfBWwyoaGkwaSiquGz3LTyJ4wr6Cx8LmM48qCrzNXrKgPdmpzLwPqhs7rPCUgjQhsQyURaUSbKxrm4DTX",
  "key41": "2vcXPvtA4YHD6ngdNrRtUzWQS37Q3CDLadEPjgokFvnGwnRpx9GktyJ9r2y2GsFdGeLegCdQ7ywtEnPtg993xYHn",
  "key42": "zqDJNkzxsMprKbR5Q5CUy4gEz1b21h3GAJ66tvj3eLGiV4NQ4gjafG993NnNT75NqqXRYxsTREZ7mXcTFUYXHqG",
  "key43": "2Nwcoi3okcv3TD4byEypkSonWvypYgheEeYXe3hxqSrTJNMcd7XDA3zJ47fxHdnKLyPu7QHVGv8QYCqzAxCJYjf7",
  "key44": "3LkdgwaxfSB4vbR2Au8SJbMit1Kg8LaJn5NRDL9X8AcWW5SFHsEQFodVFC6ykm5pM2cZRQpKh4WDGpd97rZgjAGH",
  "key45": "4GiZchZZcQ8gQuXxPdrFDfgqzBpA9bitX2EujxEhvHyPsFh7BCSnmrf1sEVKoAhhPeiuuAUazkjrrpvimgE7xxpp",
  "key46": "5s4w8ht1Xf336PXB4x9owp2YVUGmcQ5GSJ79BaY6cmRgY7kZFxjqCYsnKMQ191EAutcDmvL1YoFqNAVcjWtiKc52",
  "key47": "575eWyHt1xUMd5mTghXMNH95JtHUAZdexMTduw3DuHYMzYeFTcnMWP9QzD1mHUWGaEnz5W6tqdrJEmsA32Thfykp",
  "key48": "DbJB4Nir26mYaSgVc55DsAESerLPjFgqxHa4XnCkBzz6dDjVsJ6rd2Gdn4DpXDDY3RUfDm2pTLzdvaoNjYP2w7R",
  "key49": "3GDGJyTaLbAcZASbJTuUQroJBwSYJ6EQHxhJULok6hzEdSkbvdfn6uChfUrYVYV5Wogtwtb3PFJHhvodb3TNZWN8"
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
