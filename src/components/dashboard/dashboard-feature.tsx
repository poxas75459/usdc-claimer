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
    "2yn7c3DZCM4VT9vLJyoDxHR21EuTCSZsegqFGCL8hdCSrgUYztiBs75nGKNgAoZbyNZzR8kNxKq3tN3HMR7dnXDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2q3ZmRSngEDDX86NZRezu8s4PBUyx1sNzWcNUu3vjH3ZMasN4DTdX1NTe5Avf56ezyJAUNnAELZLAECzNWidFZ",
  "key1": "5pYAvWqkca2utv8ccd4p9uQM3wcsd11YKN5AUnVK5e1NHjGfLGFKQUYndhMQyQhYyH5XEAUoksKzW6BrA5bHLtac",
  "key2": "55i5e9ozaWSiNySHxrSGARUMHJqUYMyTG2LapLgyzTjnc8nQkMftQmU97K1MQX8nzEtLvNNzjAwErPzxYCou5SmA",
  "key3": "4EhPLt1p33bTER4Cen2DzckDnAno2HnqGAtjW3xruowiX8jNNkZDorxUPjRTiJQbh2Sr7Qc3HbiNqyzwDBrYxLzQ",
  "key4": "3TnRkExyzg9WjfBen1ZTsgnuHzYndG2DDNrqf273ErRFbcwLkESdq3ebPYVsHLBmmwpS3gfwTsBUfTLFVLtaLkiN",
  "key5": "5Bnsazmc8j8Byz7zyiqv8vv3vUpnChj3cowpRxgpFDgWyJrqth8oBC78JsStHCtHZyUJkHqCaBR13MqRKwHReE5L",
  "key6": "om9V7J8dxWmHHRjHgczgjnA4kUjdqPh5W212tJAHYvANNcHYJdZVH7AqaSTuTPZAYmLpP361faNq39ikQYfjHbW",
  "key7": "5JarCLeCQAjeX8GYaCyZBnthsV4o4LNf91TLHrPwy5qaQT5E85dsetdoa9o72CuqhRnSJw9GzJPcpcU41HVeFA7G",
  "key8": "2hprt2uLnNpoki3H41nqi5HB6XFx6ZKpMS2AfMdWFjYzPumWRXHxzzNaB3Ti24CWbe8mhCPYq4vBsNsHMgdpGD8H",
  "key9": "2sNGzs8kuZ4rZZWwrfFQQS6KD9yR8MZr8CxGF6tqzHkgwA7a8Yv9tN8KgqGrqh4GVFyjBPTZfKGxC7vJVDR7Hdvm",
  "key10": "BkGGbJEgHWyfWWocynP9tc815h9TyxFMEN9mfz4WhSH2r39fUx9DjtPTkdCV4rwyKRr6sU3ACL8WdcF6T2RbKBp",
  "key11": "3rE3CRYvGePF6TH3k2zQkyM3fBkbGNkdGQr6K8DkPwAYoQebWxvUrR8UZon47VjRrYgToj9ShXu7B75mvqPTr8EM",
  "key12": "YunV8dXsSwDpsR3KBij1MFoSJPAzFrH4XCJ8HqTZ9ySjZQrg5owbJ7EeiBYSEwM8zQioCURxY2AuePcPtVnm8fd",
  "key13": "5sHdQnmSuS4yGXETdToqyLcNHc7KWB7V53FTmftfJ76utVS9c1hQ8n6sq6h68Hc8zPVYRyNkX47voJC1JSztE64b",
  "key14": "3BenFo446fz5iXCFfzcz6aVjqLtfjYa5nJYPz4UEreUk3vimAUD9cHi8JHepZvgGMSqqFwfVBTumjRPmFxE78pMN",
  "key15": "2EBZKphvM31e58nsPkYo7JGWy5YxuVfbauGW6BtAWhUeK8D6PoWKfCPuHzrJy4asioGcXAVohdTZXSiinPBnAwyf",
  "key16": "fPe3Vej6SPRaGacgsCe4gHbj2wzG14Hzt9VmmXX5W3WamaM4namGLXYqS2WV6mzJcACoJP1m1mM1F2gjzbc6fqG",
  "key17": "5sP6ZL164LpsnSipwLLYqKiSAAa65zgfuCr3wP19giPkU6CjRWpkxpY1sXAzzKwEk9hFx3Xv1HtqBDyk3ov5uxwH",
  "key18": "2f9HptcctLS6AgxqrAW9nQ77zi2aNtkUYDHFNv75Y6BgJ9aVFLkCqFGcVq8MiM4NGtp8KZwfoRDee1DmXDyfqAmN",
  "key19": "3smJ2GPgvfaD4pCh5W1G847A4E9o6DkAkR7zewsq9HfHMfo8JWd813Ke54oHCfUL1JnLfw1dUX1K1AD2885UfFc5",
  "key20": "2DiRAEjaZuXc4eiW2wABvJT3N87WAa7apCzdfURn7W1gi23EWkoHABT5xXJK7p2P4WTZWxFEakArPC7rj9wWRv39",
  "key21": "X2yUZkGwLrpVQYv6zHa6sMcdLmtMuXa7pa6ficjitbdSjK7oX9sbSuj5PGP8BJmZ5ShxmS4wAQnVyn2N91FzqoJ",
  "key22": "39ZUthqKLUqKSksz5Mzyp4brkLFCR9Cc4Y6RswafM4yntcNLYVNpx6G3itvcG3Avwu59ViEg1cn3yKkm6mpBQNSv",
  "key23": "3XPy7rvRyVxfzYQkrr3xfz7Ts2omZUxMqDeFNbBM7pa2fmsHpBdR1FySdjpuJq5DXu9UyXSyVJYyuUDB9smnQpQ3",
  "key24": "4e9EcVgW1jdD7eRybSuoX2mCrTg9K35seWM8opWB6aPLWbkgdm6d33PjvGSUdrjbReiyCVjNqPENXsjkpPUM5jgR",
  "key25": "3qAfZSbkxhUZpfayukxKUsckpsJN2nacMpn1U5m3PQ1CKP6vRuTU75jsZmd63Dr3QXhMBn5mrS7RSNb49UpbZvGM",
  "key26": "2dTd9pUsHzT2kB4at4wMzVfYoELuyCYTmJHzSBeNQBtYEweANnXS8FD7FLZyCV6QCimWJqyko6PHwCwNhSHEC7UU",
  "key27": "2qzJvU3NL8KZcGasgiNpB45Yb9xMoTDPF7ttHeomBHBd6KjPZ9aca295r1W3j35rvit81C4VnS4YDerrUhpcCAbf",
  "key28": "2W1FnHLhuhbCHETQoeeZ2oDSUS2faqdBUUaXiJhKjeVodE4ZcpSrcMrmhew5Urc1Z8o6MUcTpxgt81Pg7oP6z6xj",
  "key29": "23J63SNKrcNTKFVoneGzDnHVJfAPAw3RaiBuFBTZrNdKEJMAosgykSjUDEM1z7HUApwJiu4EcmdcHwtxMemzD2ED",
  "key30": "3pBp1HbvzsSTAdxn1kro33DBtGqueu6s4XrzvsiEdq2yybDj62bf7HAH2UW6RN3FXe8MEjtJuvyYMwN7ttuENcxp",
  "key31": "2R1D47nurPp9sohQay7Wi8BJmVscMQ749bicifpPnSQugLDTr7A9W2rPqpH8zj7vK68tGg2XPfTMwqR1y4rapMwD",
  "key32": "MUKTHY4qYSR3TV5A3SMsqah1HZ9rnAgz9q384PHTFVyKK5F3GbUdWVmnNQWxHxwNztFdpwjxj7WGZEwiDRNHsKr",
  "key33": "iofDRWBDLJQYofhMQ12krisJwkrHyJ97MR8JBLuCGDpNdwt11a7EPM2RHYEtbFfde28WSXX8x4cH5zRevsmFRL6",
  "key34": "PxX1fVpbbqnheWMTcCBoaHNTx1DuAa192tytmDCZB68cSahuQFpjBundiN58aFyX9cF1jCn8Do683WyU71jQtD6",
  "key35": "66fYQrQEPnctaiCfZHiiEbCK9usBzdEptQy2DXRYysf241QVXi2sxu1XAsjc5EmYHLiJueCDpW8nsXNKoEK41Bt2",
  "key36": "Xc7bFbJsHFrWLuovnVQkH7nmJxqn7QuqiwFocFj5AbmfeseeZWoRb9MfkpCR4LMgXYWga4AyzcNEjC45DKRuXHi",
  "key37": "5iWGmhcTGshAduMmEoVKSHcq3UxuNrBes7yutBDjrM3QX7viGAQvH39TeQq16e7VyvbDR9d1cSr3pyNm6iMqMWAh",
  "key38": "2XdSwfYiUEgT2U8FCm4XFP7z7EzCEPdwePaYM9tceWyGpAwkvbUkAx6aiEgD6hzX92UPBNCaFGvQxcddwUc62w2p",
  "key39": "2ud1NiiJVmbF7gGEB6Wga6mCam5YK2ZBeYBioDuKjE1GC334FY31yD2qU6ijBBNumhwGkgiXHZrQ8z5xoZhGXYg2",
  "key40": "27rVspwfNYb6hqMThD7aBHv6nGQvRrhUEp4S88P7uG6Us2yihg4En7HqbP88p8pxJkMZL2TiDzGmFmaKCifdSHKh",
  "key41": "3UGB776WuYSrxdNcC1haL4S59QcgodowkDYCLiYx1kivgfmzYEHVdc2GEgXVrsESFoDGN2nQeynYMp5x8o2XWf8R",
  "key42": "4PL4ACPH6Eu2Mdf2dvkR1ZUdNFhA4BXh6rbPSy2bunhWeqz4nitVoVKSSwo8UEqVTejSGKRBK7V1EBZ2zWPhrJsz",
  "key43": "uJS2hALFZ7swSntRvJoZYpmm84ht3uRCr4abowJDihsPQbbseTx45zMcNJpgKNCeKRnvgJv8Lf2G6CyQdNivwn4",
  "key44": "FARxA63b7KcBG87Pubg1UWLwAo2FiXe8ohoE3BxLpF1DfuqXHAbmn6FmyaU4UNGjPWB3o5uSC42aqfV9eZR6sqo",
  "key45": "3mo4Qvw27MerBpza2JSpRR4PoHNdssK1SF11ZwqbYpiLQC5rwz5oAKUEERE9Qeg483de1srpjbNmpxtzDR2X1jRy",
  "key46": "GDsuZywrYTabxmvyxfDL5jcaw5QfjimhKsPtDocDNMUe7894WymsR1biv6pFMuSX7hXtdjHJSqthPwVTEdJu4RB",
  "key47": "4Exo5tmAKrF4sdCt2DB9im4byEV6vZ4ew7ZRTHagKt8vxoWWEbESDjZB1yM8qxJeUozuJnGSQgvJCvn6e7pyP1Rj"
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
