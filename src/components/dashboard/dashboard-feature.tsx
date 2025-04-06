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
    "MeCEZayVRzJcwXrGKj653fUWRpJjh8ogDXAQGVdWLcrEomdctjFoLnYoHrFSuUw93QSAXHLaf6qLiHxpASX6WPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtFeQv9prNreogAJEf816cgLfqUZ8ou7S74bBYr69NdMhUGpAvi8wMG3JhnfP46rjEbD2eDPiXhT56zxRmHAH2p",
  "key1": "26D3it9F95cnt586hZqvVAqPxdPwJouWB7n1Y8Jqonsqjjc22wKxWiD4wRLuLJscN4JHHW1gaoM5aKd8XvkhNhK1",
  "key2": "uaf9owoVNkB9hnrCuRqpWND8UWzyqRhKJtMBFRyX9GodG2Jxu1DvsdREG7uyachGJkibdAdj9LqicsjwH1w5obH",
  "key3": "597qjbjvjknjQydF5iGhzvJsf4qwTxhQbPwr8uttxQRKUJmdq4crCP5VM6EMWpyVBzAbovrSSWDygfYNsYyoD4FG",
  "key4": "4UVK4mzxLUZ9FqxzxSwGbDNDmZgpG7RstW2SdQk1tXf2aamyE6Q3eeS5vAYDoKsvsAsFTRRTLdYT8GViTBabSdvu",
  "key5": "2Jp7Tnw7CCfQmvktjvwyQ9EdgVNrvpP4vN8sBo6ZgBU1iHZgsv2GvwkGrmAFEikSrG7R8Juxeum6gCtLJbey649U",
  "key6": "3Qp3iog6SxDjMQAip5tpqzsVVyaF5FFk735Ybp3eTmGhJFJC6Kcr6jotsNbSUPWmjV2hpMjV3HqYQNNztPghzBfV",
  "key7": "4pLpn3daQN9Jb1o5ZJo1qGDpPxKh3xHEwmeyJ3wKNLCq7gho4TYLq72hnJipnVgJhQJoRR6G5FrPLhu87B8ThXnB",
  "key8": "2DRgh4BHxhTffYMcjPwt9yGZo3oP9719EmvgwU1xYphNUGLMdW49EnG55ENwpULauBPCFY44eWosj2Lkx9FXm32f",
  "key9": "2anNJnfK9SRcL6r6iDSrBqaK9Q9LenqavVARq3w1uwzqLATU1fomboXVfjD7LtS8DYhkipAfnzo2H5YeiNwwfnTW",
  "key10": "3YbuZZYYE8iVU6626K21RFCHKUn3nxpKvA8DxRNzfwKapsq2c6o371KjX6KhnvAWxCkTfGDJjTpiKvwDqeasLijt",
  "key11": "4NdhJgVwTrHmHtm9FXEGyrum5PHZPqu3z9VJiUWWHbTiZY8gzDWum6aDcG9zBjPQFSRL6vrs9ce31ZZCNtPwY63a",
  "key12": "56R1SQ9gVXVD4k5RA8DmiSNeLi1Urcv43nSgC1BKfbSyUJrgt3asgqDnZiYHcMjCrjLyFwY8HC5KfjNtyVnCgxtd",
  "key13": "GPNNZdnQHMtF6EwaVMu4VBGmAPMATLnEXPf51HDrik1WAm6qMQAZmurWDUB28aCrGNkz1V3foQALck1CR3H7ZiB",
  "key14": "2yxwEWR59Fpd7uZ8c84RC6w2cnf19ad67wBP7MsnD87FT6BTxMCEYHEJQaS1CgiGLg1NzLVbkHavpa3NgTbY8gUe",
  "key15": "5BnPPBRUxay1sU4mX6KFdz8a1YwSPZ5Cg2qJHyVCNcEQt7k3nQnmiqdurx61FeuYaoAaWb6wjsrU6yYghJXeKLsZ",
  "key16": "2bi1tEpvVpcPNh3He5a2dqV96RggEJzcCa24tx2GbmPvn76eRKJjqXuBzsrzezHs2iKpB8DjzwBtwPeRTZXtBRhb",
  "key17": "41dTqRbdy8fKqko6tNRiXZt2j8seXCFGqsWZipSKSX4AZhScxJbJmrsMBAWkRnA5bWafXXeeJxrcxKNcrHvb77FN",
  "key18": "4qrMkSouBqQW18imjze4R2KdonUc31g8ZmqvAyEfZyRCCFzP6txQbn5uxGem9t44dhgT4JwYKv8cndhRK5wgGFnE",
  "key19": "5Nzt7gEAsDJiP36wK9ZeasgEELTYHvhGZQ984nb3QaKk658heBoB37qXHKbNw8WGfJPmNx9Bd9cPTSS9AcPFzJVs",
  "key20": "3qdgS4RedJmGqpHpKmyFRcCwt77skYjkVtikbsofJFmQy8tx5xCFNe1pMxEF91o125FcRm6nijNQMMyxiNzNTurn",
  "key21": "2BgAVwV4ahyHNhmF7DthEMcBvmBpHtyL9vpgEADpZznVQXVP92mVdG6csCojdKxv4BTubw1WH5cVZcaA8sWnArfr",
  "key22": "Eq168LuXUyi89ZqNJ8vfDqr8g2Ls33Wkx79TKqE2tXATCdgEng8bTLCeQyKp1KoyRAw5bFDWr9LVMutzCSxhc9u",
  "key23": "2AAxE6226zPCydcm3bin6iPBQ4h7X9mXFjbLDttLpv52c4GNDGbKtbuZNHmhccafumEvpusHLS7WLzb2ZStS4Pzr",
  "key24": "5uoz7QiK1mn2nBrhD6viJ1rrUeqAbQf8WW5nfvcM7DKLj597t39Q1SwS4D6PCm8wWSdmFtpKBXt8wxuwSmczgnix",
  "key25": "gUm8Dr6zqNwCPJndiLpzxpezavnHfNhAyxxux4nGYPA3gkzKBxVNDuAekB7JdjtEi9Mcb6hyUY9EbXeSRdBiDtv",
  "key26": "5a4iZtzvgiTtiTrc97wUKfqnB6ZCDSmmyDbNj9G4AzEATJDaM8TKc6nM4gWJzLHsJhWp2TNkGygEBr3Ci8mVE7za",
  "key27": "3YazAWT2APD2UkmchKeCsuuBiNndX4K7eQ7Uh8tRVDi6TZEeTfJhNUfjAZww3MYSasQTHtTfYP2f4b1hYD5w2RbB",
  "key28": "4Tpezwsz4BeV7o17QLdqkN7TTk2oxRR9PCeFAJSPHguQEFFBHAAbcpfMfzkwoM5JrUXEBtn3wdG4pGDdbGcZJuBC",
  "key29": "53WgBjgc9crcYyuZrMo7b2oRYP53QiV52ACVUdWC47nfuXQyPiXFdC8tJcKm997xwadUY5e58i8JZWqyDYaMDvt2",
  "key30": "3xG4vE1nDfg8GqAWarE29qWWRisgudX6X9sByuF2pqnNjMZbyQ8g8LD5rvdAaHL9FdWWZxihPWwDCBe2wqCQvDAS",
  "key31": "5ehZuUry53jDJ9k7nDJTAbaNiBhF5LKQ3M74bwFnkNjfDTanaV9f1ueoiWMgAtC9XWF1pyozCR5bXkfbwoETeGBr",
  "key32": "4xUf8Me6aKjtDi2GXQPqYG6YRKWK63UeN6wTjGwmZhp6uum16w8hS7tndW3Qbey9JMPLAkL6Qb1wjpBZWasTizwV",
  "key33": "4CG1kgncV6hvUTTe8JK8amNiTPksiEQdXbfeaH5763zQqD7jPTiuuvb82hHwn8DXTPFaizerKXgd42DofbRi4eCG",
  "key34": "6247AR7jmbMhZsS8asuvweDrZ7ndzH9egq9cdzWPGiL7sVGBaCwJrEDrVsb84waS3mh9aTsigo82sSV9xmGd1mbM",
  "key35": "38vBB9N1ycbypLv4MTicAifgep6xjd4zsz2smkNJFtuQWvR85YUFS88fJQeVFXtkcudDga3GtAGNjYPotJEaNZdP",
  "key36": "3ZQqBTWQ7ojoMDPfMfgQ7Hnb9t15PVwwRfgcc8anAgLWQ46GCyDZDPC3m1r2xiSauM3eE8E3NARHHHUhkmBwmAjX",
  "key37": "4wxRqqrnJ9Bu7znc7ZHr5dXvFmGYr72LnJx6m8v1sDfGvjX7PaAGQKbtCXAYhfNkxbZsgVAKVarutgEpkNYjEo1J",
  "key38": "5Acva7SVawNcyBHrC8jPaWfoXDNG9giQtzMx47rcxfrqsqu4r5A2hrkAjNVxFgLjsRKVz6SryrzV4sAkRJZ173ue",
  "key39": "5mUqZ4wSvPV9qaZCEsDJNe9oqHxgJU3nD7UafUHbABunjJ3wAX8Yd15YBck3ta9RpPuSWAFB9ZpeHLGxcKcLyxrD",
  "key40": "j69Egh1FmbjpT8qe2bCAxzZ13wwxPsKRemU7xT1LPNaNphAwkGBie4wFFsUoN7XaPyVAoHy1xhV5g1Yfz98XzKL",
  "key41": "28MPC9DHmU4jqoiPTaTG7Fr4REexKp8tYLE2145zirGdbWCjDHd5FqprjNCjUp7T5N186wSJt3mdYexhRfV9y9S5",
  "key42": "3JJovLYJP3V5voimmmpcxdBpnk8NcnuaZ8RG89ZrzFqg5dx6m9KhdiNmf44P3sdA7KRW3FkRk9Cg9QfA8Ph8YYVm",
  "key43": "3W3SWTGP4tywyQXp5hJS2T3D5JpHeDjFxFFVdgSFNtvN8mgE96bm3uM8HfEik8KR2kMx8txWWgUJhTRUqQEA1RXe",
  "key44": "2xVsbVcwespq1wVRg7KqLH9Zo5YWYFAfTpBH51WHdNeDZwdKifhpZyVy4DPy1mp9G16447uNq9dJkAjyhVfbXH1y"
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
