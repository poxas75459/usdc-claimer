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
    "35VF2w3NCb6bBb3FLqUgsmSRYUZnfkFNpTuHwRivKnX3oZczDsxFij294K8u8jKRKxV8RHUvWEYNKBwRmVh5zz59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbU8EyynuzT5E6QNTi1nEFoDfsfcR1zXoF1aApQbMqSmabhBW4bYexA5V1n5gbPhzf6U1goEJE1jhXhGJh8jSUW",
  "key1": "64g7VWdXQsUek4ScpGjMvMPgGUrjA86h6i3cmdJsgEAuv1httCJffmhn8tYmNPHTnFNwi8TnStJ9tVp8p49jBxzW",
  "key2": "4zDCARoF2UeBR9uwhXrnCjeB8y6Sa3jHyuG99vRmw8G1x8Hu1Xm4E2bBEocRRVBu9vAPb2T5SXWyqwnU6CwyqGbS",
  "key3": "5GN6maT1SgTTmdjnudrG3TpD4eaAsnKXUFFp6Z3PNmR2aS5njAfQ1drrWFuWWVjnbmxP5i6pM4aSCzDs64ctkQWH",
  "key4": "569g62mSeQY1zxyKexjTPNJ32cfPYsKUdQDMBDAgqJWp3Nwucus94sUy4ozmVXGUYPQwSaxhuJkwjTpX9srUdQgo",
  "key5": "3J8oibLKsGL3ERt5h16qApoS34At66AU9s5qpxxUDKq9GBWFx8x1vE3YearpnRcDEMSXJcg3rU1mgxRHRpNSPJae",
  "key6": "2KkFa7NB6AnBAbVXvsb5AruKS5AVsJ7k2BBDhKe1X6FgL5yDQF45CxzcWnbiS1WkVCqMK6Za61ndQGYnZ1Z4KVWa",
  "key7": "2TwHuf2HpVxrRCbMG6Rz2se9bMPLSPuCumYWBYb1ZFzC6cYYbjWHSDCGHbmFPw12QSLWkf5PTeTbxtLiEiHKGVGX",
  "key8": "yFn8tpPLhK1nMDYBdR7FXCnnzinDbYGr8EXD4Ke98DLtrZAf9YrBMS31Mxf486ETSyaAzjBsfx4RTfxibKQdtcd",
  "key9": "4MbdgzHtmWqixLbcu8BwVpsd4nJ2Nt9vcA3uttTX9tmAKAJtUkmGFTzfgaDcZgEJFiyhZfHKQ5M4qJpF6fKcitL2",
  "key10": "eck1ujajzEbf1G1cVKguRq16ZvCpbDKJNTgfJ5XveZfaViDUBDk8S66G9XWGtiq1TUfninWjG1NRoixjq7Jhx91",
  "key11": "2g1XhsHq2kBkhYkTmFZkuStXKQ7QMhaweJ1D5ZHWXUZ98wEPJxi5VVnjrWqCLbkdYsGD5A2gLfsJoLbPoscJVwqe",
  "key12": "62uG8eYgZzR4Q5sva8T5RTXYqm8YSEMaj9b528xpYTGKnSK89uC8aRwHY7H2DbJ45SWTKaaa54PG86WQXdr6nfnB",
  "key13": "3s2fQynQ2dAThr36KnxTtrX9e7SwW2GcYN6fwogEgyDd1RuHAjHP1YZSjmt5HygdPywhrCaeBkFYkooyfjAP3L6",
  "key14": "2NPiYT94YehwEWyHoTJAk8GRdgKkqBTUqYg7PLuZpCEdmq7RrXcAJ32pfNBk8ZaFH8YjY1tVEC2atgH73jiJXxtf",
  "key15": "5Mkze8PwRCVjE9Ui3YYxqmptbnc1Ui5pmuaoWdwssb29rSKCbk8G8JaBvudmNARZZDJyLLjZjPDXaqRQhHUMNuyC",
  "key16": "5faYnZZ4mZZty5qKpLauso5pLyfC9DLaHx4QTWmUvCFxFnQX8MXmQHfCCCt3suJtLYsQtCk3wn6EbNxtQKCqP2ED",
  "key17": "2Y9zehyKrLAfUKJvahDcKtNeEezaha5gJbBhtKq6Ko79vttEWfkwpsYxt2ErxeJHD7VAiA38ENseF4LDfvAjsjkG",
  "key18": "3DbmhJhCYmK9ho3wNayfuGdxiafkub1Vg7QRUG42RLyyviVLQH2h7FVKW3dJAsvFEpMCqRfnZ5rrxxhEswyjrvQq",
  "key19": "3RDXz8sS2898B4ptY9kG24M9Pxwiv2MsiXF2vjvSzAmEMJ1CUqKkkPLXkeTq8FaGGMKMRGLwuyyui7EPEmxDpxUt",
  "key20": "4UwJXQP1XnJx4Z4jN3HRJK9XMERHTJbu4SjpA8cAJgFeZgz5guCvMDB1LpD8yTZCCQSBPFm6WrwMbJWQDpVcLfM5",
  "key21": "3y84px5htb5XK8kazM3qz3K21tt2WRB13FKYMEQ6ZuLQMEiyNxaubNwyciJCTnP46xbpNnSZRBQiT8MzGdsogMRw",
  "key22": "2iTLVd99quqF7HsXTGbWrAZmFcpAKzzhbRmqtWyJCP4fzmRxWuWmarCKpnyCB8WU18xCtb2ZDNiZ2kpgpnMxvatj",
  "key23": "4o4vJYHQFajrJjqu6YhGv486BEuP2FyE3eJRr4xmRnjmjn3Yi7QHx7UL9vaKbdYLsTdtQzFjd6aSL98DQNMA2nsk",
  "key24": "5enVyKUocTmxd6BeP38qvhTYK8yZT4QUqrtQ5DtV8sWaJCZd3tFyaMVNL8REv3vUn3URMUHdaTph4mP16D2LDVTF",
  "key25": "4i1VB1apBtVxvKoxk7Wjog2pQstoAPVJaHCc4nfkZ6hhK62QJhi3TLP16aAza8p7yX3B5z4LMsuEr5TMiJJhzJyR",
  "key26": "2tW6PnDmx4g8AutjVH2LmsJagnExzjw5c5m2ZpHSgDzeA3bCpbN6DGqkvtndWQxCCSjms76hHDdXTB4JQ5jBHoiN",
  "key27": "5tm2WoUGVbqUXRfD7Kpjt1oca4QEd94SquyqZbjVBEuoKncDEhUt9yPEQ7ALVZGhF6CEvyVAsGzEXsRTvyFNAxEZ",
  "key28": "5Xjjn1VFGqVuKurc7ZerviWF4g1ZF68JjT8Cs2esXQAKQf8edx3dQFwNM3dpZyCiFNPbqcX7pedqhDjWoCKi8aDH",
  "key29": "5bwUbfZtZUU8rhuam74cQ6K2fFzoiSwM3H1tKaojRVdPc54vQ15ACbVmA6VVR6WnjW6tYPXwyzBkJw45gKd7pviL",
  "key30": "5Lvzj3r7yuyHapYnCW4GEw2g2PVEWqyVkr7yLnznNtc5x4VsCxshjpDybSJw2nicAvcoUazReqJhsnesATvsYQDu",
  "key31": "4UPt1USpmAMsotLyEyo6n4csyrdavqn5GtHd5ethRozeHWKahQo9hNFRJfedbDGexrfHvFbG9dMwvTxYM1ZWfQb8",
  "key32": "3bQ4aTEwVR8gbXAqtvcKhdW1voc3oDBmzxrHynvmLRcqEJttogmhhmR6kvrk6ezigR64ChbG5nP2YEm6movvVvuv",
  "key33": "5zD2uKtufoJhYzQDWidumQnsiAwUd8A82qhM4Fhf3knbEUBXvsd52Ue5FWaSsHGEnTKERH4T12smBaKJimUnJK5W"
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
