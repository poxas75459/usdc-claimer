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
    "453DcbnEVNjmruoDRammcZhtbHSoj2Z7EqYY6RxidxmFq1J2mKVxBsT2hvUhmc3LPszh27YeYMUDvCyYB6hLsAkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnLh56oJD5TEVu9J5J6wVav1VBhQASopfmd5aKsB7ehsNS7dComhP43L6VEXdqQsVXdXT8D62oQWFEaoBkGUEBa",
  "key1": "5wkekYrp4jfgX3wRZjRfdhDv761jyFNeH9yec1AjWdijccXsaRdxTwV6i9RCGUGEMgvwRUPJREHVfMeojU8dYQ9F",
  "key2": "SUUXCLqSdqaGNRWVMGgCmo4g8fw4sdFzg2wJfV85dA5zRkN4DnReEcrdjRgLUYh4EDpvtx9BsbcViHt3bQDAh29",
  "key3": "2jur9aQQc4idFTsVaKNaNmBtRmneDFur8fAetKQQmDiiF4pP73SaGvhK6zr5q3i9BfiDC7KGmVrPW1mSke2RxYus",
  "key4": "5moGeRKEuoyp6Z3x533eNmJiYHZB5ysdDQJs5yrSjEDasTMxcoy8KJxt75Q1skg1tpsAG7JumyvA7aavRxSLScTd",
  "key5": "sBpS4an1t58RBjUk6iS79DVT7UT7Xkc5hkERbpPDJuLFh8DGy26W7GvgakBLosUMJZ3DK38kYsd24JCjcuZwzXV",
  "key6": "26ZdMdYnn2UKHQX2wbgTDytDmYiVAVf4nFCoaW56bxtPxuJDvuRcnJ7FwkgW6YnJYZD7Uhd2usiYo9aWdTN9fymp",
  "key7": "2po96x3dqfnqGhBqySeVkEiJH1MpYXnKDc6SxXsFoTn5TYV7RVGv75T9q2YofCV39pr4b37ziSqphczi69F57Wkc",
  "key8": "JUNUgqicZccTzSRKNaVuHa5wxGRhSZDpnnZnD5Rx4CdrvUi3BozuSJ14TGVVv59GrMmnmLj36GXYnw54cxGaT8J",
  "key9": "3THz31xb6UW5NrnUDDUk6FKiEMyTH5YoibVnZQK8rx4Dyg9FcihrAeu2kBGmEA2XN5igpZWXhFwP4H3vEzE711KN",
  "key10": "5TftwJz5bHJDftZejpPdBvizezTTouqymvqS9nsYDfmgqfU4c5K53L5PPoXSdSLCFF3nnDAQPXKGBJ1dsUFXfhaa",
  "key11": "4Xov7KvqCMetuhoe4kpXY6V1icjjVoLYZZ9KPvZhQZhYgRBkAXYSuoNt3wxSsv2RbMGdJfuGFmqVupSFoqXpocWE",
  "key12": "uxqn3QVeN8pY91iHwHZeae1aoUnVxyHYhUogZBkrmh9ZUjq3JC4gRFU41bnyWbXDDNeVpCEgHfEWw3GZ6UrjzHq",
  "key13": "AoMWGYzxHNvCyCMWRgD5SYCxH4QQY274UMXC6QZwp5sJv8Mg8VKWqvLdvETUmcj9bq9HVhvPcjefN5zYkyh6H8E",
  "key14": "4BKQBtpqohQFVTN5P8JBiBUhwrpRU2iR8EgvRC2DeP43hFuEyQpv8FaU2GzJJR8zcePB1Eu3FHwyAhw1CtwKx2Mh",
  "key15": "fmcxhSY6B9DJiL8f51VSgAEiLndJDX8xqoH7dGjXL8YshN1PCXXAyNpA3Bdh6biHCbNHrkHX5wgab4AtraRoMKe",
  "key16": "3twrbHuesFL53pXeHm9t7vfFZWj9FVZoc2FBsBJ5FrV5SePVYbwheTJZX2mA7qDDbPYnSCm545s1UA75hn1S8WJY",
  "key17": "4z11JTU5MLE6s5vPooRqfVHEPeq1KPvASvpwfR3gaHCa6si9yunntRQ3wht9xnSMSUZS7jEfHFetj8AQQm7kB1G9",
  "key18": "2Bc4sd8jy1wpPjt7AZGt3jC7WonpfkmHFzxeyTVz88suQQv71c9zsN65YQ92diYNGvJV1gtdY1qj8e3wvT4EDFpC",
  "key19": "2zvif7VxsbpccaJZSFezd6fj52Cf4vvTizqD6uDt2afZYdqiqxZo3CqqwgqTkoJmiNrTbh247HhaXS6C74uFrK4V",
  "key20": "4wRrSVC92kgZwMwB1mCzKDA3YZ3SMSVV8bgvtSjoT2KBfCve4QJzoCvKhTWPNT3mS7ZQf3Lv1Fk5rNbt9ikGqasX",
  "key21": "26irpvFLjv3D7n3Zo1b6J6djnzvkzhudhf87DcoModbkS6hjdYg8bUhtcLqnjcMcES3DRLmooHe5VWP7Q6v7JN3i",
  "key22": "48nzSDNkNLaNNW3XfogJpLCbYgg1TXE8EybxhXFm4LJwiwvZMtE6XSjvomw8pQxD7cAm5iWBKimbYggg92PmMgDE",
  "key23": "4a5ZdyfJtdfpQYXM6UECqpxBQ5DckJZ5rw4hSNUfEiC7NLcK6itRhKikWQiPxrBueFPFhZekdEfE1D3RQPckdGXV",
  "key24": "2WihcqoGJEi8akmBeJU2tszg6baJLpCvThwZ4ptnep2462nMNvHHfoVMiazEKUJjGmn1MZnXKcJtujnv1GoRUjDx",
  "key25": "3LPGP1Np9XktD85ESqbW8hsqRLHnTE27rz1w9aBLZy9Yd1egq1rT9LTSEn9hd71R24fkqGTkwXAa5swXSTHYZJBw",
  "key26": "2YbyvbuY39179XmxAoeMoPMNXt2sXC7BNHM8faVQ9UuoRwTtU6MuZic9hJsek9w12fxCpaVBHwryuQWVLL1FpXuM",
  "key27": "2omg568QsiFNJWMZg8gXEv26jeniCmXkJmeRy61KccDqH4a4FQwYVJyx7sqyEwziTAyiLce9nWs3gdGCA2RHeYve",
  "key28": "53r7A8Bzy3Xdn79EX6tcurkwGRJ8o4kE3twiWNJDYgZza4RLz5ZW5KZnGHoYjgiCKzMHzjthrorsGFAVN6MnpS1o",
  "key29": "42Ba8dX3M6ibJ3gB3Fx3Wugm5oxGy4zvd6S2QG915yXHMksNoTZrZDA42EpLZurhYVaNZL35h9ciuv3ghJQkxp4C",
  "key30": "3eX6ZbbYfABA3dkgWfsRr2wV5ZQEnUZ42wMx16gwj8XbfaJX6DJsVRsUamcNo2YQtVG3ze9UNQqwDmtNGfnUQMkJ",
  "key31": "3uNZFqkmjaxtiBXaqC3UH5EL2oxGq8f4eBLorULBhi4bChCx7jucGxUYEBAgbkiBUq8ue1Sqm4nGAnsUMSVf8jMK",
  "key32": "3krm9WtDCLLeXHXkm9fXx7fUaCyXNmpRVwLek3q4haDv9mRPECGtNo1PYXi7rnKYPCGKUx6D3N2Mn7ZeR9SjCSLR",
  "key33": "4EK1kc5ctnJYbdt8PDkxQn7ppVKRqcKtyJ4CmnqsmFNHNDMxhMP3okN29nBAKyjiXWxXak77nVwhEMDykCbYNyp6",
  "key34": "3HtGA6YD3s69iuDbdKTQhmbhJ6czE8yqJrmft71pZDvKknduqt59wDNxF6SpvLKbLcfZWs8JacBx6jeEePZ7YH8N",
  "key35": "5rNBanDk2sR6QnvXuJoRPEW8PRnH5GxMKbmSgoBWat2Bg9yamYcHfopv39ByFm424fCZSBJ2fNXRBPFdDbqBttdC",
  "key36": "2hJvpsitNwJpqJCCYM6pdCjMs2oQ6V4u81NnWRZXp9Da7VUdq4yHYAoL2xqBJgeyp8oywUBUEir5sY5AcpBKh73M",
  "key37": "2B6r2v7XqaJRVeFEPP8pzYLPCHmekbc68xCNesssuKuAMZvzrRB1LzGUGHErh9MtggsjwvWD4SGSKzvCNPQBHxCH",
  "key38": "Jx53mFarMLCg5ZQV1wPkS82HJTCQ6JJnDdzWHGvKFd4oeJZRrYzQ1H9WSES9zPeFtEiE8qyp67yN2buaeAgz26F",
  "key39": "5WHtaxGiQBygvRYCzmhuAyMU9kBLe8ADZetKr1fCMoh9e6ZqHU6Lv3ZZyGV8mJw4CMNEJJaugZDTgfLeBTHRaM3B",
  "key40": "2J1WSXWggxaTsjtPKTfVdLUBBCmnWpYQpoYDBJBBVS9AJvef6ubzuhWPk5kqyuKtQQ37nPcpmtgMv1SKm1kK5om5",
  "key41": "x63iejWvzrrTuHwjfBrZY1LZNQXU52JcPLM4xDYPffr7GatvzNQsR29DomdK9dFA2NGHjePVBnrYAabQoxEKdPp",
  "key42": "2GoDAP6A1XfueSbHYFuZrzJuqBgM5e1NAi2bMH6SbmSgSqxj73titm1ZyP2v7u3uTLhj7ZxLK7UkmYugErmLkcas",
  "key43": "2tESyJpqayutpMUESPXSn6cx5pKT6dGLKKmNpn8wMKtfPAePw25xAXTPdzXmXeJDdn4Eaqu4uEyJxVRG33czRovf",
  "key44": "4qJcnxuqnsEmM7WyBpz3yZjs7BY7ZpWGx53zRrz2Uip2WkgDMewKKiU7uiRTkyCdsjWBaqNqtdYB2oG69gYiYNCX",
  "key45": "gjQfkvaKrr1qkcGo7SYX91doZLjdefL3dRgg6dUdTX8NhGwJyBbVCXREMUr1ad9BzvtwMWPUhN2q8J5u8yycYLE",
  "key46": "ikyB4bddEFBdLDF2G6rsfTggR7A3pRrsX26nYKt4L4S9779SUhJE8z6EuPF7GcoCSoscDnrMJej1jr9tF722JDn",
  "key47": "3RKppKhkKmY8KprGf82eDLPZ253xZvDrKJbQoe2WBAdQfYCdDFXi8Bx7CKiPZswZqHuQLRFcjhFihRnf8QEkCoiW",
  "key48": "4LKLi4z33TorRgCcdZr8q3dN6qugHCyuYCk1RNjxt3EjKey3E1nnrfJHHYQdW8sSFwAMyadvRqgfzrHwp1nqHQjX"
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
