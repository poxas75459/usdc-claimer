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
    "gwq3QVjxNiVhAhNGdG28vD7RBRFBvYdMEtVKVsYYzTRrjS9b2NYtRXpLCreQYs63hE6fvB3huKWPRTCz4TdGXbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bGWmr9L53Rk5dzUkUq7A4WipQz9wZ3ZqJWV3VgPTgaqng9ZCfWoGv8uUqTs4BYDp1DiJpA5dotkFwvTzM69WXwx",
  "key1": "2pmv9QgwpocjFeDD7W2TBxRGDeHGkvhbAHK1Y9rXUmW2T5UjJUFU4bz8FyQg2yaVt1UYYiGgFwooih4nBedkgfzt",
  "key2": "3pXhq9ncRe1jshvXa1BSjiBkrYCvCBv2cANEXKXV8vptoTxFtVzV1hXg8PZsj4cSTomxdtLwdBxuhapxojSc6UTB",
  "key3": "4SWsJT4xZZRND8iG2HcjxbgTgXrGdx2hzUdYcRH4VcPPgGL2Lb7pDZtaiWYTwj6Jg4vyZR2EPTjDCciDLxZnkCz1",
  "key4": "5VNh19oJEjrSvBbtMUcv1wy695LaUqZ6UJWeLPdNuAHwBouhmpa5XpYTMLmo7aydGXNRmM6T8xchHr4FxmeLjnwR",
  "key5": "dC7jnUawGLuTF3bohwTRW2DdLtV1pGnZiALAEyBPmRV39RnmvRzpxuxtXPkY53CQGuuDbnbUFVUajmV7iFVe8Ux",
  "key6": "65tCeF7ZEk12GjKHcaMPCjrzjqGtEDKbeB6rw7WFMbtd7aXDjovjMqRoqKTJYGf1APL8bEUthwkWBbcAFLFonKds",
  "key7": "3bRzoM5FN2E3iJcScY4iVF2dsM5skVzjZKuXrRX1uLVgp9xpo1c41n7o8Ukj9fSfzVKhPY8MDBSFWt5tG3ZKHPR1",
  "key8": "2J3yPZcxVNV5rdcr1rziAETAxYgCNdk1LUv9XBrvbFL7cLf5N2xSKMWuA8z1YszHHZRFdq8Gg8PPMNbKcKMKVELU",
  "key9": "4APPxg2Mt6tkDBDfhQXnRxJCvVWNCTMnPn474zd6aq6Jeso1u8U94PuhaknvJWi4BjFVR81BguD5ZuYr67Butem",
  "key10": "J5Hubhdt51z6MBk6RTmZsFBeCeqFAfuRoHDMgh1hN1pQKr9vtQ754UjedAzNn9qPtsEGvUQmv6vjJ8vyaX7FCi4",
  "key11": "46ccwqYj7gX1G2mnwQx553KUmEarC2XBtrkPncv8XiBHG8rkgaa9mqpdxB4jWS43MnUJzixouKMr5wUP45oTXWBP",
  "key12": "33TptxtJveVFXKHQX5UVC1MDAr4nYwCCMfNABqr1GiCVR2hm4Up8uCiRpXXmiGgyBGP9cZx5gHu8jnjmm6DyK8hJ",
  "key13": "4yXEDh1AZs5hGEVq8Y9UdzGnVhhzwwzL5Qxe6TvXHVHYcFx41Ghp5mHA2u9cxQ42TANALQL6ctG7oN7jd1b9r1Qh",
  "key14": "5omHy2wcuPXGgL5Y9QVHhRAfY2i7aQyCpBcESXLStAq71cSYbD89zsEx6NMVPv4JxozdSfeANb4ffQhjWzsEkdTV",
  "key15": "2ezfkPsrixFM44xFgiNYNMKKcyaai1iFjzY5Mh2jqyffvjUh2EFoAKsexy5fSSeZF61CktGH1r9hXSBn2sNrQ4ff",
  "key16": "26ehaWAPz5tNwfKRP7gDYVTfKK6GW7uPJfbPHc1TrnC6ApqqCoc3JuFK79Vhew3PZxoinsPdoGHiZ5k8sRLps62M",
  "key17": "1UXU5wvaScDXpTSkK2m7ohTMtMc5x25XjXkxcAc2oU5TYZsFgSA91mMrPxvdceMjHKX421qnDfWGcEYshiHnZx9",
  "key18": "D5tpxSsJTYrwLxxqz42TDGsEe58ZKGpNyCKdEkb667W36sC7EBkTot6TMobqBN4bNiLxpbLi6WMY6PvGnpkc5hT",
  "key19": "53Ei7ELQc5mo8UPAw9XQMcRbEbB2ucTwPRrwXSHtWGv7aGWZTHKq6q6Bgcykbgekz5hq1eWxNKFQuPGYeJtGqtFh",
  "key20": "GgJPpLPdYyehWmi2FpHtcZ1goSMUMaH1cMKWzZZqUhMzzSK9n7Vg2ePW2uwGeqVRMXmtui4eVgz5x5HCWFLgieg",
  "key21": "2V6rKGsHES5jrkterptdSvmubvMWfiyEbxhErAxiN3T3YWYZHLygeLqQDnFn1FaYPXkmgNqCmMPDyFwebEoCzs9y",
  "key22": "3MLmr3aV8rnGyA9bDNqNKiW9tU93a3ziKXkaUiGJdbWCEfxQktGEjRT9Mnz73zBwH94dv3UCXKvVA9rYoBCSbge7",
  "key23": "5VXNDFXK2FA9DZSPgmcoNyQAp8czJxNqgcSxNR6qq7G82CjkGdX5Ps2y7VHCFc86LtqmjJjHezGJfNuAdj16MYro",
  "key24": "mbkaVpbAZRxTLEHi3vDBTTb8E33CNqkULWzgKmo9g7WAshYu2vpCHwTdfy4CSe5ywx1AbH2DYgUTs9SCPikNF4p",
  "key25": "5rksNvf2P1pudmQuX9xYrGY927F6HyZ1igHkYkbqBrbxAkhdJphphX8eefYRH1JTK9rKmta625raUtGC3KkPrmM9",
  "key26": "3LATcvAors1EFEFkGwBv6K8ksHRXN1hSW2YDLAEQtQbrCcqwSyb8gZ3vuVZp6fkHx1vxxhDpPnk6NWmtVmhps32z"
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
