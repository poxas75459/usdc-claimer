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
    "42wYjFRr7KdosLJgrB2StBuNvJ8iPYW5qRWdbh6jWMrEBVth3YAket5CJpQv4mLVs72h8YBi8tmrzgRuahmHNsg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D576qYASke3XCfpWKLxrPhnNHKV43GdQdwpBiyk6MDfn42771mquScDkbfR8dvcWBCfD939WgKTL6r6awHUQzTH",
  "key1": "2w1ZHupRsP33jxFfWrWEseBdBR1w1wStWmUFkmkPQuvAZrAP2v288FGhcXQKdC2GD5XHicjmorTDZJEyHpVHZMe4",
  "key2": "9kTMB9atchqud9gcpgT1KuPRe5ksKvBXpmKVpzoRwkX2kY4zhYDDxPqCBpLyz1M9SAAmqktc9vcTP5teo66F5TF",
  "key3": "QSvjoE4SrcCAyZkeGVKb2hbYmMvqQ7FEkNHhrinBVn9AxPfosaXEZjMfmcxPPkuFewrhjdaJEsafrTz6RZfXuo7",
  "key4": "3ScLiWwZQnSj24hyeKQcqPgSHZr49cUevNGuj17nw8z6oxJVaU2xNmNBFd5YsxQfLrar99SSgQE1Z6uL4zRYfD2m",
  "key5": "3v77BqjMwdaLCvanmv7sbcMGpwqcZxByGYC5ZgQiSToXHjMgZMo22mxDN77LVpztguZDmBcyQ8N3pj6Ey6findvh",
  "key6": "4HnQroNVabRJ2rwEqAznaEufiKowDk3YcmSTdqmjedxbavwBkANkCBwQzqHKprtSFmPuc6hRD3zPZy5ZNUPxxhPQ",
  "key7": "tgYavruuXx2vhxJiTmWnu2zvKk3SsF4XHgR9E4Y8qwx24xN72wgUWb3Maf2twH5vzUZfD8WZHSDiquFE25jgxQe",
  "key8": "4S2Ufp867QDhJ9E52RJPbcCB99PSLqQTw7VXFEH7VZdhbMSgMF7wroraR48Qak4eRar8qJEphLY6nWrULX9cSq7n",
  "key9": "62Ggk61aEv4iZrmdKkV1Ke92X8CvGACCpUCzG3D42JcjF5wEK2EhD5gKcyhJooDVAKCeXo2Fa52Gjpc8zvHfm5mh",
  "key10": "45QX1TRi23n2HpWoZdsWFSmBxueNymXKGpGX5FYd3fdiKi4o7iuYZre47eKRaKR6PwsffGsb4oGpALGf4xgkfsEP",
  "key11": "uQFsfNc8TR2WyQdpkABdFffJT8iBpKgLhd1V32vZuiA67ZVbPUoVFG5vWwm7DniKuZT4ELCn3Nj3H4uYGepQADH",
  "key12": "3T7x1GB9xwYQXLB3ih9uxFs6yF2Wsh3PCPTPbPsvg5s8S144ZYK5NN6FQ51qHYaumiD1t8V9vQXrU64v2UGYtMMc",
  "key13": "2hCpoGojYU9Vc42tArdUUBsgpdfVpMVA2YVfVMdAY6sjSKbZAJ1b64hUwiN6J34x3sZn1aXrtVAW2ZgZByF1nBmM",
  "key14": "2HYywvxx55KWPpzSraCxPraPc642gBev6VQxMo8GqaCcfWVoV5tcpBgbxHeZbWA9w7W7WUHsk37oAUUKjgrYWjdv",
  "key15": "2yAD4ppDh4zMgmhN74QwXs6X3AbR5hCgiYTufLJJRckMm3G2mfjnNa6HuXposB2tYnA3YjLFYNcs1hypTJgFBUB8",
  "key16": "2ce9vLZSo5mCMpTmsqEFpnB6LFModTxBagniXw7rcjsQjNr5WoZvoQ8rqeggT9HEvHM2q1ighUWLv1jgnPVWWJHC",
  "key17": "4JtLWpwP47Dcj12MgJW3oUgWZXeY94co3CDB1GgGRxx9FMjmdwqG2hXSbnCmxrqgrMVW5mJ2eiXH2RTQRkwT6b8n",
  "key18": "m2oVsWWpGUYkvqQvtg7J7SpjsFhUgrBtHwT3gzCeREU52zHTdxibtDJaq4qxbqVsz61y8oM3yFwpaVWNBHPFVUu",
  "key19": "4LWd3S2Sgr3PQQ1sx8tALWAtnRK3JwvFrWtZxo9F5jGY4FoMx15wXLnvGi4nk5GBGMSDM2cFwFF1cV7TLudmcsFv",
  "key20": "3bxvtBZAVbyCMG7qRF1FKTq4ney3ThL9LT2ugYBz7t5g57sXA6URh5gmAPLvAYH39Pjjc2FEXSfjddZhN7z42hGf",
  "key21": "3QZEiB2DLx6LTSFtTi2XupFzKip2yLH1HYqd5NKSnUzM2chQoMHCjuR2xcGyVf4dGGzEBT928t8zm7zEJ2jautbS",
  "key22": "3goQRowrt8TssGKfNneeTFar27XyJDpRxNZmycnTYYYpYDwB7HFGeeBYSJJXh5Q1PghZW1LpebUpxis3mA2jqWcB",
  "key23": "289VcjootH89m4Gdgnni5jUAGK2R8PYSbqVaqoa3WnjMvyn8eMf5LbbC7zSwRb6oQT5gBxWjS1fYN2a981Y9qKAu",
  "key24": "3z6NNFBmfzJ2vTtx6bu1EUhkC3F4EuM1tANW3ToLc8JfXUQHTkm2PzskV4c1G5A3chLPQFHvAwe3TxiuRpj4obos",
  "key25": "3PQkH2jHtVuiDLoJzSkHDRYTaLqBvMqnvvJBtnyqJzjbGZJtc1x2gMtRUyhPofbZ9gqX6zECYwt18piezhyUCccH",
  "key26": "2GycbTxmKkTZDW8pt3iMd4rucXy1XeCujf7JFLhhwWCL6i2USikW18sV4wvLBvnRVrr9BDefom711hfqoMyhfnL7",
  "key27": "5nUQS7PHLDeYtW3njmBoBXX37jsGtRAHrgzvCD5NTDP6YKuBH3VWBVRPDAQr3oJt4JCmgwSRzyaYdyR62oUUn4Xw",
  "key28": "5qBqtawiajkQMcXE3JB4Caywii8ek7XzjLjTj1ykKSsiWGbb6YLVEdcdLHGLA3JrKjuXKSYjVNKWge6DDALf2iF8",
  "key29": "4S6ss3YRzC7LM9u9Z4Dy92RCFYHpWfDSvK8eFDCFdWTQmRMRAbRTsitgsjPhKCvFMLVmiqJGY1RDk8toxkGEye5P"
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
