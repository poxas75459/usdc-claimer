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
    "Ex1z8kr9nE6Cprs7TJMD14e5U76pQ3BSumKvHusJr7Rahw5SbpM2LrTqp9qJM6N8xUfsCcm1i1f8jz19pwkn6qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZCGFo3oDwdBw7ZqazFvUJpLYteoEB13F8iVV2p3QGfxQ5JqHJVxEQ5mhw3iHvXXh4LX1vukoLmJ7FeQQDabdeyC",
  "key1": "gMaJC7vTfFfof6jrXDEJS25HT6MvCNEBVWB94tGqxSnNAGXzELi64KL4vKCxw2kPLLX29ezD2Pj73TXRtv21qiP",
  "key2": "4Kd5kZJRPESNmmmkbbT3r8sheDFUxGutTrTEk8T9t5F4NGVARm3QvMTqXf2VysikxHzWSXLPyGECxUf8WJ6fbjMa",
  "key3": "VuDjLkCqWruhkxk8trJLNKmXVuHv6sMe9manTzE2akwbzXU1abYipD7AKG6MFDsTko4YCJBYLDGsidamtRpYPde",
  "key4": "4SWnGX3E8msca6AMEi8hg3eJ9zinukfy2DGaaH2zSfBrju8Xr11T97TTKSEccbpmpEP7D6bNHmCZV6Qry2uREymN",
  "key5": "5BBd27Cfkz1CiD68kykktisHNfKtzYas9AMJMxsmZyyVAXVq1b7qXAPH7YcPajSX5YhJ1dRTyZ2wnBGn2rrRbdcr",
  "key6": "3g1GMVd6NBn73RqaQm1noyXGLYM3QypJiWJr8vPtbDuYN1FuZBTKkDWh1iheNXMPePh5FQ2fEs5n3wzaLAE2cc7m",
  "key7": "uxyMbSXzKaA29TM8PYXJ272juPcZ6eDF4hnp9K6sQmSCq9yemsA4vf9tx8xEXeAEip6JgUWgs6nAvxJd2AP8QHP",
  "key8": "QUWYNuv8ajaUxQRPSrU6S6cDDcfRmBkv1RBvoQGHci4BD19ZCbXqhQChQKhyxtdubfAJzBJL8BecKVDZAZvsogW",
  "key9": "cquxEWJWzLQaY8ubn9oS9kepRxtP9wVjzgqTy5j8zZE8GfxHHMEaKJTg7LKseHSn6oskwKkHAa2hiHpFUaPSkhz",
  "key10": "2Lns8veuzEeEppR8sjinCYxbizgSmrjhYEskj4A2jNA1koJEqe1gaj2RRUZjdARuMj2LZyNGGeyCtWH8MRgr1C3y",
  "key11": "5bR1XQWkCSa1bFD2ZCf5n1ehWVN7rFt9TrdHWc5MnT2zTpFMFxc52eb5xyRKBvnZcpZEt33xMyUTiFLfpXwPdVKS",
  "key12": "2qpnq3AQnuRBx4DAptgZDGHniir9QQEu7xLo5H9sYsmyKu8SbpjztoVUBgvBSzbr2DGsXhxo4yg3sSGpZHMPKGL6",
  "key13": "pFo4tEn9hHLSEhsQyQ2dpveDCUEkGAHGGAVFfoKbg4zq9gRuD2V9e9P4fzmZg2EF8en31Cc4KDp59JZWBJoThy2",
  "key14": "3T2kxCEMAggVyaqwrSMc44omsqwk7JVpTTpgFw2ttYv9hC4nvCmzZFa4yXX26art5iZwUZFShTDMi9vmb5u3eyET",
  "key15": "5HYhaUrEUkpcLymVqASGDWdUuEfKNrznhE9caCC5peNQQtn3KAJDiZx8g5bqMvTYj5SsURgsnWuuL16CUa3EAX1j",
  "key16": "34MoCJAY7khdCk8zNW1CzkD7LT5Ky4xckx4vgbE4X8ziWtkpKrt15HYKUgMXZ6QzyKBGVL8HpPwAqB4utNcgpLhD",
  "key17": "3SR8PyejkjniE8tckAEQ6AKRLeTUta4EMM66y6mxWMrtRt5unDqcCvzfWTwVHzBupqPKehJ21pPBhWqWSbnzy5CS",
  "key18": "5WJeySJHossZQ1ysKsj33ucisepiiywX2fc1heyJZMw4YJu9o2AfrwDu5JLRJGfU5wuWdjP1P2L35kTCeqdCETpQ",
  "key19": "2hLRFbSr9g9jFrhThkkdurAfesr9pw4JaELihRAt5YcSXT7DLoTjdUw7uNbezV3sPabHh8tUt4fd8KFhZGHhyqWn",
  "key20": "55bQvTEieLHm5iBPozzkM9VWiqLg9Km1qcAq2iTXAP4pfhrhKG1kwjw5mZUS9dA3DizQpNnyatvuK4mvLgD6mFyy",
  "key21": "4cMXws2XFoVUGxRBnNEkLNgWeCEGC1fPHMXvkg5hD3U6DtNraFx9i7fhDwx2gCs2SDENhzMmgSZVP5dqq5BE5jpf",
  "key22": "2n8sfH4rBYjt2zYC71RVbXugaLKhWSuuwyTV8vNdpkR8Sg3bmM3bttjYKnga43MLtBNUVLGNnzDReTiCjzQcvGJM",
  "key23": "SFi29i2Hy2dQBvHehU8XtnYy4sRgU375aKpanbsAAKucyFQ4ELMxSSr3rm9FFtisXsSg8CNsfn54RkLTfg1RHcN",
  "key24": "4Tkw6gPGP8gYvxBQfAYzvcT4jCzgoRzXEcHQwzJU3da7tdXPJdcugQw9oTy2EUvAWKVVGgSXxthfu5m3AhzZH67a",
  "key25": "3EEqD8wKyetumHLij5SzHaxvt8ocPj5V974CpHx1fcLoDELGFgBjPMgtgfLCxdpxK3Gidft97D5eqkacXdHuD6ha",
  "key26": "4nehpBPq8eYdATMJ3HTXT1Aq3doMy2bkhD2ogQELDrjyqXtyF7CmCgQ6CykG864hUscu9vVn9StfitbNP6YDADyM",
  "key27": "iNmYVjBESbZf89376FoD1eeq2qPfomwpx4omDKVqU26sjfE9Y9dJAEjpcmkz5fkrAU5T9C3WPurmKM5xMwEqUW4",
  "key28": "4euzdKpFhgK6oBXwMH2R2ZRci1xiyr5NuLJtNURjsWxgnh8bENBBJHxTe8uvqjuWZvupWmhgKJS3kLj1uJhSR8M7",
  "key29": "4e32mDPS59bP83W4FXFjZ4UYhqHe36vifuASDf7Q6ozagXLwodKdTi8KRfZ8WrXhWo9YqYDpWbNNH5vjSHuCkoCm",
  "key30": "4MpmjGCY3Q4psJjUGkYXkyKViHx4aFyKUkNs7vysuSf2TYVyQmA1dAs1FZ2oGqPUqq69rzUvKAhR72SU8QobZPpv",
  "key31": "ko92diE1tQN4xxkHAosdVWo7A2SAFM43nmgWdcqAquu2vVNiXeXpPcbUfii6pFewCBmZEc9sCaKHwjADG1fcbcq"
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
