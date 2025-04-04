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
    "2XxTY4pey5osdLhscZrYUzrmS5H79AFeEV1wsukprHXMyUGf7xy57aus8oZ2uQBWnfY4fuCrnvYCcPB5Sg3XhKXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdFKZaYgTVjxmC8kmVcehW1WYqcrNm4DcSTnfcWkYbjkTanDdmrSBZppXupLvgxvbLXfE9CAq7kdB3aa2cjv5u6",
  "key1": "3R5wkSHas7s69Q8HjbKWo1MmBBWw5GDSx2ZAxuCmyapKWqEyPFENCVVTyLHcdQF9zbv7s4JGGdRgSG1e5uFstHMm",
  "key2": "2jTrSZ6Y4KYC3u6fJWbq12iDKq2yMNP4yviheuoEx42WXhpUz7G5fX4RCUDtbGrKC4PDtMKxu7qaASbA5DwbQT3y",
  "key3": "4A88PRS9c6RB7e5Tyj9573VLV4SV3iREpZ8nJYA8gzjnqLcamCRpLL6UhhpM94SrNvtsCBckFEgZsWJNJvYn2pjC",
  "key4": "2fjudXEkKtwbMQX9cxFrDjEF8RNCMatxHDpvw2UsfwKPsyCHQMnAke2QYdYQyBmPzJBwt5fd1tSN88A7cKdVVVP4",
  "key5": "4PvQiQvaWs75iQjWispcrH3Bv5x96JYRKBZx3uS6C71wShXy5hzNsLuxgJUfU2K3J62GPYVCcHv1YqBARahQQ7yG",
  "key6": "2YkXQdyadiFHBhQYVByGxfdbcWAs65prmCsw6uEKhXjknrdTR5mvuzetXW5Li723Y53qBfwua1VQZoUw7QDkoC6S",
  "key7": "VFuQ82puRC1xinm7yBWtx7Z24xaBVM9sodX44LkcjJWyuMExweb5jYxNwnWzWVA64wBVGAcaETKqbMemh3tiJBE",
  "key8": "3q317zUbwhih4ws5nwJsVkQBuf8znPLei6cnEf8E5eSG83qoTVRzihuC3Gkpdu8LEn4ZGxjooDUb9StFyaUroPZM",
  "key9": "uu3Q21J5qJrQSkkuXX6LoeQVhncR48CBqJbZ8xpcx8tBRpVZm1JKtU4BF6GRA3JknndHoAuDZea97kbThyaa7Jx",
  "key10": "5op6nxgky1kUkSBB6dX3kkY18XN4apGaCwAr2VWPqhtF4hQ1ZMwzkZzcFzTKoi4F7fyYasE1iy66TFweKcaKWvTG",
  "key11": "61ssbUBna6Wr6oDNa1KtMbXJMnDtTjnqJDxmr6nLqppxeqDdLLpphnu89uP4Rgk1tgCL5izCeRY32NWQetq2Kkbe",
  "key12": "5LELgUJCUU6uycs5wrxtfqYVwroYzHRjeGF1njfm7LtyqduLf2wDdSH48UYEWMBret47ypvPcBzqZWRnypkEr1Ev",
  "key13": "kUJDs7crX48ZjwBjkkCz261HY72hyk2FBqETnrzBuFEN2FUG6F458mkpK4zk9orPSfZjMRdVKRGwd9dFRmvYfvT",
  "key14": "4zvbPqt8sBbhiA6w18LPB4PLUdvGGV8MmCLv8uw4bDxx9qM9Lusk2pJhhE1HdoxAasdcab5nwu9U5xeMaxngxpXR",
  "key15": "5NzyU8DD7cBBcsVAPW8p82mK8gvN8Xf63ywpbuTA86VVEMb8qwNgwF9xzih6XDMMptNys3cpqJfSfWNYJsLBy6Ve",
  "key16": "2MSpBHc9i48JUkdBRdKurgRjLLXLaRJmBWTzRrb8DqTssB7kfhA3WjwvN6LTsucDAtgSKz991wJLipdkhWsaBA1G",
  "key17": "41W4a62QG3VHrMa24QAByf2AoGc1mXHXy8QYY7bxwo8Z66ik7dwepX1VUhGi4xteLrnMA3WBbKm7FEvm36KLJCmT",
  "key18": "rfjCQuYUWBHtXNQkftXM4F926GHbGioiCjPxjWPGK9xCT7d7uZPj5HrkaENvHfTk3eZpPyoPzCFcjHZ2EQAtATM",
  "key19": "3rWMSQqsdTzRoWorPwi2YUeHHj28reBrvtWY7amtFMnwKVCLqV3hPaGuFaVt32ojJ1Hbr5E3C7Nx7mxPWKB2gY3w",
  "key20": "47Xyfn4Ko5ezbGbNXKSw2DmWvzSmyW3CQ1GkusWcarZ3hD3fJ8eTLCYLB4SCuziRe23E9F1k8gjWXEu1NqhTZ9Qw",
  "key21": "21xP6ikRx6iVNsiWgwmRHoRe3B7ow8Li6dv4rzQCabHefxiepZgYJVvUFRpdFK6g28yvUdLtawWiC6MfozrG3fJA",
  "key22": "22ZD2kHrGs732R3YaQWgTEFPbnSUkUWSGUnJvatR5KseZc2VnYVsyMUSa1H4YzL2ECKMTeALvczLZ815wvutJQiv",
  "key23": "3k2RJex6Qs6TPhSBrJLnA3dw6QyUnrCoz6BLqVpCL6XFeDE1WhaocmjuNqQyYGTaCK88NhJ7Vq3HD2HnnJSH6VUJ",
  "key24": "5Q93u5qBVRocjDRQ44ME5i3MTqpYEV5Q5p23e5r2g97aB5Tw6txLWgQqm1tnUPqgXP4XZzrr3L5ZzQqC2NTdge3p",
  "key25": "5WoUhacyNASHvK5hhG83KntkuG9TqBwcM1dYEGPzFgBtUDaRuRCUWspDfHSzxHdjvBhZ5CGSHfZGHJjUiin7m96a",
  "key26": "5VJr2cBiinGky9QHQuCjCehtMtsPDYphVPgvEDndrHWM9SNKWq9zhK1RLYc8DmUWApdFd84JBnEh4P9RJ6jeoxfy"
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
