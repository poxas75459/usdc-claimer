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
    "34UHNsCdVH28EHngqvatafFMMrERTNmqHaxfdoELn8xYEikJoXTuK1Kt9yzdWhWjLagdtT7p7jYWeogTb9UNEB9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JJu368xiwXaztBExog9Mow26ZQT9kwQobqeLdRGPT3ddampLPipzT5Nm9rf2iEP9cvPs6bckB8W5PUBBBQzw3n",
  "key1": "5PLd2gosNkY3oz1c2LLdsQsJcoGF9TLRCatMjUVJH2sYChn3BYwpr7s7AhWEUN8qUtqvL6iuCSutLVakdhBK1dVN",
  "key2": "5Y7dCYoNSZXDiovpWi1R3JojhWNXnePBNhqgVE63PA7gLgGu7y6bUX7e8frkDGMY9fX1aD4H5VWU6YjdkXDiWDeb",
  "key3": "3Xju7fy9PtGxw2fafvv1zUBsUWBJXcytaKJu8H8aWpXQH6jxayTnsS3A5g16ptJ5BWKKB916cokjyd9khWih7BPb",
  "key4": "hrH39DDDmy9MsN1GT3RU6hLaKnXPGTmFPSBD9fxEHkpoQ3RijrvK3JpkYmmVYVbSgQTvS3zndW1afdWSU54smfK",
  "key5": "5HvErZJsEt9YX4Hu31yec2qtdQiMZHTLdsVUNcLmmswqJ5Cb9MrQRgac33PoymKhiPRoo1QWq386aieLvoNEhQVG",
  "key6": "4QKu3PhhwUud7tExVDX8sP1Q2FPxqySnNLP6rWzod4ctpSHw1ysWg6sjLQ2WDeZYFmzTqMAQ7WMehad5XmteWZpF",
  "key7": "W7wrpXGYzUqtf5jUpuZwd7EMySzwRdJ4VUR8RJE3oHt9m4DurnUCkR4KtFMBpMgg7vbFkfTfxzwZiGFFeGyiQKC",
  "key8": "21WXZFGdL3cMGbdNjmyjBn5zLWcAmhp25fYsm9Sw3XszmqCur36X2s5u4UrHFskv3WYSwLeXPGwFi7rkKJHKUMdT",
  "key9": "S5FYGGaMC4ajsQMj9E5LpRAzdXnpFrtkH3sTQmWAgpxUH7ZbX8E7DFyqAmVinzYGhDSK5BHRJ7suRr8UPbrjqfJ",
  "key10": "53zvvdtkuG8YN2r1pMyHqX7mRkAJKSdAi7bgHEwxbUgrhyipftHaXK425gwsVixSEnP2sjtKPfmrji92514rLVo4",
  "key11": "594jHdFiGQss9U9pYk7p6UG2VGAqveFxPoGzAzhXz9AdJNoP6ngWtPD5a7SXnwyZjuXH8vQVbbj2feCtgwaFdRLX",
  "key12": "4yFmQCFgYjQmbPzAir81t5FxDWQ7VEbMqtTFqRQaQK15Jv6VnWrT37TeuxzuZAEQ5mDYNHpf6nku2jLpVGef5h2x",
  "key13": "2HkFeuTFX3KoZkjgs4MZLuXLDXcSXbZFKmMhGtwDr5qo3F7pt6JQc1mKtXmPdDmYTE8ekJ2xzxQPHvTWn74YPJcw",
  "key14": "2VHyyhCj6ifxnzBJPYjVGYWdGzX4Nn4Ps9hqupwdSzbcSLfa9qC2aiNBw7yKbJdDLxoy8ve5vqVVXqvmm1BfPZ28",
  "key15": "rFnDnG6uPBMQEo6jvQbnmRChkDqobDuyZQwSKyYCFgC8LUAGmSXkrCiz87FdUDUeqAjhhq5oD1jg1PLP8KP4UuJ",
  "key16": "RbW4zjCyQWzXxd6DTbVaGja3e63yvYPyYBQTqncjQsBEbYzMQdvuHWWV3wH8N43nwgYJ3grgXiLT7LYHF9yqwXc",
  "key17": "5c5K1jCSP77iMCBqsKQmUxa6BbX8dLPQ1LfhYU5erB6b5n8yq2aXecyfuxMnGAowgxUYDQT8qxMQ144GfSrJ4VWU",
  "key18": "4yrGDMCYLphY2Gd7xc7nPr1RpiP5fDh9Q8tpCeMJsaAovuFZwrtdYtwCAqXsUTcXCAUgYmRXVD6VccM59ZT9Dmz5",
  "key19": "dcnnNPtFucL4YPCwfmoyLdpNkRVRj2V2NELsiEfMYy7yuCdTaiTVqx7pLvf5n9tUPv1X1bJ5FPCXHSKgcjX9Bo9",
  "key20": "32WNhaRxApJnTUc2qBXzunKb538bUxVaT6hDTUoPhSHW6rN9CVbjbjPzJ7KZJ5Fo6fuePSDPJgE9qwNABUR6jaRy",
  "key21": "5TX2QV7Sy2B7mduZ3uDaaEDecRFT26Cfo6yuEc1ihWNXyxDMWod2ZRvyjRnd9U2xU1h66SPEFYbYGQYZZFr2APD2",
  "key22": "4WiosrFYn2N1go1DbFswvoQ9Rc16sjrYcFjjfXgXuZ6XiBFxPfN4ExHeyX2PsLiyK4DfABvruVu1FkgFr5AGJEhD",
  "key23": "2kZrWzh3L5xzTDJ7KfxWxU46niu8gTELbWqr9GC6yCUTBDbsThkoL43wwtacSWseZyr5NEzidYV7FTshhp4GBzcj",
  "key24": "2BSuRfnXmuU2NUmXan5gze9BPosKigDoJ1psHSe54bTPgNt7Zk3S4KXEdbdPtuQUzJcPj5oLocVdZXLjtm6gMoup",
  "key25": "2FLRr1eyE565hePqFrzCNEwtdQUcseTkUhttBSaMiCNAJXAEPdGze6cALRAcyqB7khQRAaeCcixCV8V8R9xggDdA",
  "key26": "5hcGQmt3Zwk3jj5JQpGDRPMdCuYQyf9mFpB4yFN4KbmP2pu3v6bSZ8jkmTLxEMwzUbBaXEEgSCX5Mp6Yv8hoDFnq",
  "key27": "43cV2kATxCcCLHJoAwLvi7Aqx1gZ8dNRE8xLqZUaSs56ft17SmVENS8UnT72ZCjF8xsdoX3GxzfqYojJ6TmAd8H4",
  "key28": "sZkVBbNkLNDtgc6JwWyxvsp6oSk1Prc6df86S3XJS3PSACbw3e7FwKe4dXejngo55fBLrAK5tkMvPG1PzRHQyym",
  "key29": "AA5DXi6T9yuA83GSDuWq2rminR5MKHx6ZtMsF2qWurvCdhtAxxr6cFvVn5Phno6GQmaR1z58KFjzyG8UirmePNr",
  "key30": "4B9aDm4GFHfGDSp1ieataJKgig3WwPE3goeBKC3fxH3M7xNdguuhkB2cTnhTPdAwFDteUTEX3y6n2t9VEWJBpJoN",
  "key31": "2gf1VN4mUVfc6ddh4h5Ff8srWsLXtLvX7NEfwdD15MEQcBDB5kqFNgUDkW3UTxJeR5gor51AJ9K5dFsotcrkqMCZ",
  "key32": "2rj35837TqN1MRarQryUozaLUrScidoa7m9YeLwKfHbCDeckn92bJNyibS6MhF81jU5BBBwwM5ooAxcrkfYmJAJJ",
  "key33": "2EzhgwcVTt574zTJuZFsToUGjqBQVDjtVFWMFkzUzYfKKY4nsmy6mdWmUyv9foqh5G9t3evvGrD1nt7u6GinH67C",
  "key34": "EqUZP7NeepwnCruxmX72Lt7mmN8PFC5185T5FRs2Av9xKQAfyYrxcrrP7XgkjnaJHWZaVnEJywfh3Ssute1tDTU",
  "key35": "5Cmab1W3bAdUNbdpeeTBKvA3oiQheLT9cBvhiua5oNqgGGtsD3vmKJttwDNDFiEZFxDXqMpr8RVBgvsRxx7Vqw85",
  "key36": "DwK5MAhhZU5vAR3Q2hcCeu82k5NT5SSBE3uRJay5LCH2VY2YH2d59weoDFPHGd3Kx7714edMtWSrktFVGoPv7xU",
  "key37": "kpQVWWtPFmLTDQmU92QTjZtg5HcWQ68JnPT9pPMmc68WmUGyrkFHzXXR57Zr6ACkyFigmmPt2kzbpigSvq9TXxw",
  "key38": "2TM8GWemw7Q8LJktYDPmfPiM8bu8S2BacYiMhn3fw2SChnTb2ByPvmfzrj2LvMzrmAB8ZB5837vEEXrRkY96jk9a",
  "key39": "27LufL3gb3qmvoayXbvrUoBKMfGyRyDMCsqdJM6XbKLHNMnyDe88PuXnrisDRqFhYEDb8Qw6GHjD4B7rjpkg7Lse",
  "key40": "38v7UjsH45X8wy7rSZTbMxp7LsoTYjABdkMpoQoP1MEwuXhohv2GWJ3KxZvtrAQHHsjMoGnMNNDp7VC8KnNUsodv",
  "key41": "sURRBCvt1Ff1hhHYCjWHb5JSjPxR2qjtFFry7VsBYBGZ2tFCnenRDuFMd83bRudQcDR7GZNTzhJyZcNSL9QmvPc"
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
