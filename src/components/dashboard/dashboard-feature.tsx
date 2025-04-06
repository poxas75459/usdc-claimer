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
    "2DTY1CN1FRLS7aTqqSKhtX6B1RNqKTtQZpRsgMqYmTZofeKm8DrRCUSoRWnPr3NFX6TK3ihXwEfMWh9wFr5ZG5v5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJuxMJj1PLDShUU8u2MwAigkZPoNRUfkP579vMTifxhEsewM8WvAPKZxVBcSKEbeb1W7sjVMHt2wKehBDR27gCL",
  "key1": "4jXV5yQMa7s94iU8o2z3aJV2mpxKRGAYsbBjHt86AVgTCaur3mgouZiTMKPDTBeUSTXxZkE4AfsXR9WqwincCTQg",
  "key2": "4JqNhoKRPiiY1QvdssJ216p1WWYueMtcTC3Bc7e4VdaoL1sthovrJnYoiVXG56axztUhEwZLUgR54EKQYAQ1w8ss",
  "key3": "2wgVmRt78tq2YPh5Q3L2UcqxaNXHwbryfRX4f3uQQ66sscqdsdEmihUJ8BENvsb1WDSAnjYvtoURD1s3w4C53798",
  "key4": "59TLFA6C4vzX2pswgxKzaNu3ZvApNxgKqEtSnnhCwSmWJDHXY4bTriwUEjuJjBEUCWaDK31cqfcejFLTSvqmRTFm",
  "key5": "4eeknt8xyVaDBFj39EiGZb9z4YmTFpckvsC6s1ry5K1rrofEBYX6GmfNxXXJTxTmDm65fhcW144KhZ3pLGqaQegF",
  "key6": "4EHrS8amsxR6eeEnorzwpo1BaDpXQfx2NN2VScu9hBf6o4zPBFAs5MKuCxDf6ArAwhaiBGJdbWrhCU4yGHtJLYjT",
  "key7": "3BEP1HtZSDhnx4NNb5p4pCx866jEtDVvSfbr4dzfmwqcFCmHoudi7icQjhiNT2bP4UZU5raheXzywUgUAzBbJFVp",
  "key8": "3VMLzgnVhovryGemcWvYAzftu8T9sZjNZVJNciAFwyyfQbofDGzWLDXdDEnDbikkVzVqVcVdnN8rhcPtjKch6Zkq",
  "key9": "5q79MhZrKu1todcC9zb2gEDEKqtXvVtjKQkZ4XPcxdnEgcZHyHZo8Rj87aTZJYxyBx1cfJBM1n9HvtRZ2unGaTb4",
  "key10": "rDsPHh3QsCfJRV6EMZGNoEhwKvCAUtbLcXCG98sAZCext4nFDazFjrMqM9wpjd4kZtVm8nAxBuMW2GDqTMCFLrg",
  "key11": "2oSNhoVvmhQx9zizqmB61V2Y2VLqXMYytyLJTwHmB1cx1WGuiJp8jDVMs1wahUQoeie8W6rdUR1fCLbAUbTKL655",
  "key12": "3wfFvkeodYnEcFQ9UgdqL29ntTv7HEBbSYdg8BLgr2pDx3qyXBSuPdFVDchoQjH3gNdhSCfZezY7fFvEQ3ht4pCo",
  "key13": "3QUEAz3Rm9CSVE2w2HT9L9DDmrsYmBG73DS4ky69nHWskUm3gkQaT6eucmAvsVDnX21f7DbW4pvsSCwHsaXN6D77",
  "key14": "3VtpgNw35LrhbzyonF7NfcMd8vVGeHdJqic9db8Rrv5MuNk7LibNBi5DTaG3Nux2NUcvSMTsWQADtKpwxsZ9yeCR",
  "key15": "4T1rsBipKtYQgSA3RJFyLnCRAnhKgF6WkuJWi7AJ7QuRuQpJ4K89QeNUhf3ZHUzSVRZTipRX7KSA3vHTLx8JvShn",
  "key16": "L4NQbD3T5zXzuWKipHbHKpvuVG6oeEeYMkmFDyS7EPm5YeoaDn1MFv9W6WKt4or6j23DXXKi1A6EX97tLB8egff",
  "key17": "2LztmJJUH8UewRUKFuECj8Te9dABjwi6EPixUaUfothPfWJTUqBfMzVk95k5YgPt4WeYLt2ZvpmjHqgHkdfcRJFx",
  "key18": "4SYbWhHFvCD8BgBbvGVTHxYq7HXR4fNJPt3SbjEFEijzHFKJzFteSgP1HVvug66yFoib5pZtZMSdNwyP1eSum47g",
  "key19": "vw2a4JB9qh5LBTN3awqgViAsyAUj3zitJPwZY3onSDritWWSrwnJ2C3d23uFukVrvuod9rf4yzK8WGVjvWWyfap",
  "key20": "5UD5dcHamRVU7HEiuP1gyp6wGVxKuNj2wFsMELstZXEiev2i5eUSwq9x3pe8DQzzCCRGKQ5swVZd3njfTecbN6W8",
  "key21": "3BaL7DdB2wtzKHgwtdo6nqqpwEcPmYFG7t4Qycs5T18n2SQVZeAbELie2zAYVVpasRo5A3Aia2xSqFrNSLiNRHiL",
  "key22": "51j2URbqDWm73vsiEMCoQUrnzECfHTwkp54aNL3LwS4pmUhnZxRchxd6eQpps3rgXhbJPtLcbHx2sPRqttFJfB4T",
  "key23": "XpVaWPo58LZfK37SJe1jW5AMjCRPixf7Nbvf97CGbMh6n1WobcpzBeqZJPF4zrXitqAA5suedjLjYxMNbQEk8qx",
  "key24": "3msmoCvnVFk6CADQt5UYQxsERxrb6abPcCGFG6A2GqcohJUw4qEoNHrvP6hdx5pGoZUKRDjVkWKntfEwtv2YyEDz",
  "key25": "5zDWUYFsv6dGMhqF9hicKSC87biy8XWcuNnThf9MexL6gNcLc8DcFLbSSC2hcoD23HzNztw2heE3NCPcEUdp3kBN"
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
