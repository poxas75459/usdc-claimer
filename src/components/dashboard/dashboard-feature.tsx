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
    "3bjg76ZQCDJNmrxJkyWhxprnaT5RLRcnya9WNb2zRpb4yVeN2c8SS7D2pYrNrrNpKqK4kTape6bXdyawavgDz39Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2am6TXQ6RM1ff9NpwnppiPrCX1dVgYAD6K3D7pihe2LFM9RPQAZRXtEvduc73u4uEU2aqr9LhK4LsVgLoGB5Y6hG",
  "key1": "66GgQCBmG6eL7HsK6rfjEMTiD6qZZR3S9kuAppi7AufQpc3pqijT28DGHBkPetfo2dGrMB1HUStnDoPvB1fatKZ1",
  "key2": "3CJesHttGY4NREAsCKtmFSCmwewoWa5gPHDjpu5GBvyHHGZBe9rBYQSgitxAxrpzmYtnMi53GWBRQUoNihkJ23ve",
  "key3": "5wND16zTFZHsEBjtTgEbFz8BuHbpPK934HjzAQ7pcmyfZ8ZXFSE6MhvECnRR7gXpno9uQ4qhg3YoKze3X79EZ11e",
  "key4": "4xqgjpf4DMViQWDt5ttsCgrx1MwCGAEssHVCyjsuH2AVovLU7avA9JA9tMtCJ5SjEY3aprgPc5UWfiSxTQ5c6vPz",
  "key5": "5ge3xoQ4EY5ACFUXHCNDpfMiFdDhJ2R181GnesXy1AR6KLzKE9wFtCFUKJ8LYNARou5U8gs4Pwi51VB8ukxXxpcu",
  "key6": "4Rh51c5mvWV3MyjzjuHEnofoLmUF3t1ywGfiDer3ZtBG2vsB7J26XMbjp9MVY8fyVHGAnTSAcuC9nXDf4TqoKgEx",
  "key7": "CxgnseWSzE7WwUUDYY8dJfyNjbEyx1iM6KwTr3Tj42dki2GubAj9RLG4Ke1eHvxcBM6292THVS8Lnhp4BCKor7m",
  "key8": "3j4Bh8nDgP6ZZNrQY2BaTXCEs4GjEn1wNEmchS9TUp1eiLWMBPVFAzMBvfanpUiRvfxdYLTSyZEQswny9T4dLxmk",
  "key9": "sbHHMD64AtgBH8bBzsEWynQfi3iueKZaRLa9HnKk1VT1n9Qx9LD9SQwLck3aSckL6L7UYpdsEzKmpMZNV1jT9nW",
  "key10": "U4Jz1eHfh1knoVbdqpVdHJU4YkD1Rwn7Tn2nA6JnSZDFpUxsMPx8eHAKQEoh8AZGmN46Z9jRtFsUt534h2ZgD7N",
  "key11": "x2YRf6CwYnRMzwgSboeTkY7PBHzZQ8suPujvv4JKRmL1VPQto4zvMLhX726ygDtpyNRDZg2exgx6MN7aSADr9yT",
  "key12": "3sYwNiiMx9iVo7CDYTMJVyDbxsUJzKSGAuPs3DKWJcDgogVfPAmFUvvg5W3tZ6LnTu1TbTpK4PEAdjH14tyLm2N4",
  "key13": "2uxBpwGDV5DfZgEJy7NQBRoj3iuLjMpt4Re3THDW5bqg1rczL2jJW1vubi64mB5smRn6GRriWYLCaKDgy7ovyrky",
  "key14": "5knZmLKBo6LyhF8HxJDERh38tkF2h7Dwr4LbZozRS6eLf7RuDGbf2JQeXekkgnZApzn7SeJ16KuwdrwX7kgG3qo6",
  "key15": "4LPzyguffW1815fNrZPm1Ahib8qytzAVqw2YUviKtUt1xhWArGkJUzJqYNQBXtErAkBqXVmvDVAAVWCkUBp4t1uP",
  "key16": "3tJDG8GN4HkJqr3aXB9tEwaALpNiwz6kPMNf1KFsi2fyjrecosDwxRu5PHjUdxgjCDEvsQ7pMzhDaKcVJtg9GVAa",
  "key17": "5ACdNU4bPT51mvojtXUWU57jzEYmMdvgfJDgpDU5u8fpMwrx7u5Xpv1gXc223oPNrcWohMg3ouzP71yxhGWqPcrL",
  "key18": "5eQQTqeosoAHdUiAz3jV47reT9ruUammr4XXucChqfLDfmXdtpULvt26JkcuSR5GycJzjxt5MERDWgtamFa1DPQQ",
  "key19": "5diqJ88kYjEB2ABXjt3Xs5G66S4Ps1DY2HQWBYjXYgRYfLsNo2iQKoUuZiiPmxCx9DMfSHhPP6GtHsovEFurCor4",
  "key20": "5iidKyeog8ajDsmwfrfnGEDCWBB43Vjc8va73WwdRsxFgQFEbyF1J1mCBKfwCvVQep5ExSxoFY8r1uSe2XEVaiNa",
  "key21": "4bqwXtT8Xh63MSkpnGSJwVQu5visibx7uNWR1UFaYvc37qRZWxH3sfrCSRdgfg3XPdRQWBH4eLb5PaK2aKm4jj5Q",
  "key22": "2XQodc6b4vzZ4Zm1eh6MZbJQc96ypVGAjtXTL5Z1C83t6G7DQs3M1ULTBNZAbdbXo5VezEMu7sZwDZtp49iKXzUV",
  "key23": "3VKw6YqZuYG4GYNHzNb8PFfPxExgEYdipg1rucPYEdeX7RFdJQRa5HWUdfcLSQYGFcXjfdyQio2PBRzeHoXcJZBJ",
  "key24": "HavHGMsXKgZiUewXLuEKLbZiLMNbJQE7k519Lpj4f1HDHphPzcM2PyuHeqE1JvJfsZ6CjKA14F4Vpfx46piGUvb",
  "key25": "44uW5cayxdDMoQG1BJ1DkwSphkbuvomLgWypE5FpNjDdf5uefm3dqg7dYEgkTWskqgL5NaaiGVNqAzJbz4Kb2zn6",
  "key26": "DueqYJRPr5YdnxDaWuGMMpCY2w4b8CsSuJFnNtwLjbbBsdTJzWSPztaBRcYENd7hQkUEjYtL9A82rntCRscVTdf",
  "key27": "4kKA21pjYNqUoeMn4NqeeFEBBqvmo3h5DVbLB2FKuyAU7KbPCFXVe5Hb1hyfDGygDqAdycf1RjxWN7Q4i2VULu7n",
  "key28": "3ozdMLfb29ARzWMJHasjBdzzbBWfgkCtHsH982o4ZEbgw49Hg9UGvojV5PHba2eSzNcEoZi5Ld9JGXKkbNTXmJ1G",
  "key29": "5tZR4GECA95vFg4pvfMt4gWTSFTyEbLTdkzNokZ4eDZUiPbayS9PsXZbf1h81DqEefFgmahvWNxcKXkWEzYmcDne",
  "key30": "39ZErNmoaDqFJWRQat7Wh7BdJttGuDcmkNknVTsUqr6uPCp4ay1jxvTTgpWqAFHr5uSEdbqqV8phBwup1p9axLxw",
  "key31": "5QqEtfc9EZRtbHnWFP1fxjBXVKW3sTz43XoViddk4tPJgTChVfyF37ad7kjWzESMUavBxs3Yv2TUAPo3UfPgCRBm",
  "key32": "2ua7KR6ATGomQQAEJ1zvYyRbfxVuWFfb2mBRfTEZwK6joNmf9rn4JfoYLDhVQR97W4UNUdKC8gnB4zEhW1CaCxPE",
  "key33": "5Vig3aPkfZuxGmgZKDjUujkZiBkYFgNErUQkJPR8wA2H3pGCYKeiMy2VGgF6gWUDzm7mxVf5PN1aqb8KgFL74N8K",
  "key34": "2ZDNpu4B5uprhkLZ2AabMXq9nSAx9pz2gADRVi8Vcnc1fgJFSAi3kP7jR55zMF63QijJ49YSsZ6hJfWBrP9wXVWt",
  "key35": "KLrrfNi1CD8yysM44yMNWKt1iNW4dfFH2Q1XxwPoNfHcqoFEoCjnKbbCimDNuuodHNM3fVi1M7bpfZ8x8bH4phD",
  "key36": "2YNL1drmRPHtKcvFj4XmesL7UcxrLcWukGigBXM7Nq8HzQKoAzV5D5PDJuhAZJTw7MdJ5D6gSDnPsu62QcW5FBNo",
  "key37": "58TQFBEEp1BKRUMEhQ71P3kJFK1SonzCo32g7NPgD7u9xpTNiB2ssMK7NtubgZXdzKdp3s55jasxWjAmLMffCjDa",
  "key38": "3cZNy91LCUSLgXLeDvmcw8cbmhPenDWcd2on5wVLncN5yyLKVE97eSw99VNnphuwnyB9eLpMmuQ5R6ysWc2DJPsC",
  "key39": "5zhqRgdWw9Kw55JH7JVochtxq6F5iHgPjYnvDah2KdMyXFpCkbFC3ZKNXsAeMUuSvLA7yT3LuDrKPvfh4ryjvi75",
  "key40": "4fsrUxthmS4gs3Hw8QyXfN3WtVLNv2T49H7gSA8ydHnr1DeTtzEJ1EBDnqG1NEmN1YZEF6wVfLSF4TqUrihHs41K",
  "key41": "3ZtF6DLLRfSD8iSZycC8oaDiXzmrkbjWUErQjAW3tRFkDZdaTS1taAoLYWKTTSbLN5Tz5qFMavhtY3G9rvqAibZK",
  "key42": "EmpEspG7xuuX7Truwf7J6y5hQuqjNqDJwvJTF7yRcj3nSpSHFLz15wHTdkoKJMPE3W3eTNStxZddQmqhuF8DzQS",
  "key43": "4fPiCXeFKCCFUCvtqjLynWKYJSF2HpZMV8KRrgtyXzvr5U4RfMpVby6CHWYmwcPsEGMsGASvqALJ4kLqgZj5debD",
  "key44": "22Y4jgPDR3bEDAFUTKdfafQGwRZhwc9P3TPDNhCSgb2rVCYmtsy2jktpHpKCrZ1KsMhyeRte6yMi52mH4s9GavXZ",
  "key45": "66We9eWjN8MJvs88j9TN74enWzwyTGajyzHaqBwgV3u6oH8YTckDx7KbiQBshhCdpMP5FtQ1ieM6S3BuUcBQyJDn",
  "key46": "38Fm4AtjDYhtErX7BY5v53UJXmT1uHP9oNXGNiHfiK4Se5b7SjhGnQ1ESVJLC8LK1tuqtQcRo4FsXoQo9qupLYPj"
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
