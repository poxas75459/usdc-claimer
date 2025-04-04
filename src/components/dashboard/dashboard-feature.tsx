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
    "2XffyEAzng5g9r5gxFw52PspF6qcMM98bjje4BfQsgdywaWrTe9sZstw4b9rGL67d5c61txxy7YR1Bccgbd1toVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHWyZsS8QCzuAvisL4y5RBsmme2KVPJ7HEh4N9XyGajCVqaznGXs16jb1drmKaf6TsunxMNGRKDAd89iBGBGsWW",
  "key1": "2cAzrJrNejeg8RFLPjBBUv6Uhu2jZmenhQhpqvUiXMeSAHbmeLmk6CqicfYfPDQrbnqrpoAQaPoLTvkhsvduvJkE",
  "key2": "5teGARxseqiA1MtM3BeHJJufH79uBkkALRbYg2Za74s25gh5guYEK4KtZWJHY4XnSrDcgxEQ8hdF91M8rJ2STxPw",
  "key3": "26m11QbTmPqHnCgRbm7gvLDaQGF3BnHWvMozzCXMxLiVqS7n8THbrzUbbWSYbLACLuLU6bSug3nV4ppLiC4GWj34",
  "key4": "5viKpTxhpesxtKcig8dxo6qZu1r7zPxCdwwvYLPeSb17i8vREmG8xaAnHAtRuBLyQZjmiPZNeEaZ8T5yNKdM1oN",
  "key5": "5HLhCvF912pJRDSDzJp83jxsQLadzGpgru97zBqLwGLBFFL1xNTkdQDiRJ5vzSuibZ9omSfgRKUGr6DR9AauT3Yq",
  "key6": "31RsdtNKCurE3sLdFs4ZW1ZwcGseLTtdXzRp77XPdMezy45z7tzsvvmJmGiP222UxJHjufSpJBkZfSFxesKgmxda",
  "key7": "4hYZPrEJ8c64qHPqTRXDRopppmn6yqXaE7rE71PGXwsBYDihVG8PNbL7TBeYWP4RSRZb9iQYFcW5Zuve3sdWxvpJ",
  "key8": "VDZKW9upnNy1w5jCp99M8gYPb77NVbqJFzVvxoZ1A3rk3SSEHdK74CcFv15idDombHHXJWrxqiCAaak1FJwDLSn",
  "key9": "26P3LcFsWUZFo3EtvC9o7wQWwmfTv9QbdFARSaWMDxA9fLi9LBt15fiNxeaXChNVFonitPyTxM4LyNPcS4qZbAcs",
  "key10": "3jm1zvoevuKwkeTrnSiX8CWKbSf6yci1qjXymKUtq9W8rysLVcP2tXKTZxHHPW9d91vwjeqtGhAvQLNPYETWoxLq",
  "key11": "4Y6TjnPx1AmAqEp1E4TtMuEV1B73prxyhz4eDog3SncdJg9Vj2fyYpgBB5oBtsXzAap9WnL7HTwwejDs2Ta7gzq1",
  "key12": "LqHcZVN8AWinFJUy2wzaQ7t43ALY4tCQ4sFYdKjWsYB6jHu9yNQ7Up5kuxWF8PMGJt2wNi5SfpLxP7CtRyDuHPB",
  "key13": "eBLBtLGxMPVcGshUtHghBk5GqePHzJfqGbPeDimpoAoeZZksi5NuHk9YTbsHnGEo2fHrp4kmnbyefXp2yjYgdGV",
  "key14": "5RULoW1NuXe6V1RFX7dyQ7M3qt1xnHUXvu2e7gTZK9rWZpW7ZSE6XdWRs2CtiWyLMnhFp4SCw5kw3SwxYv4mohHK",
  "key15": "2RBCeEEpu9ocFMCsATdopBHaUhS1P4iNPhAiZECLt3Y3JvRyXaGnTAnEXjNqqxj5PhPinGGLDowoUsBNbPSkweTB",
  "key16": "567JKsLiugbFhspt7gfbVdjzzReTBpZMr3xJ7P9k5xWq4JWR9CxDQv9XoW3wRoCYPoLbjbLYkHLuDHnkxA72MyfF",
  "key17": "Pfb2FzA8o8NS3B32X1CMkocbQku4KH8kwwMSXzP58hPFEVopjpsMCeGNQZKnsevoUG76Gp7LoYeyKH3PvW2Kr2a",
  "key18": "4GzGz2MK1SsQrBSTb2TMef21jcakH3GAJT1SSzMuF7aLkG3YP4FymADsGGY1eG72uj6EGBoAbDTFNiXgJyVHEXwk",
  "key19": "ycq571wTNqRW7VV4SvnJzkpAV3ZieWmx8X4ifLXnrfnSAqcvrgWzTB8jRUPo1YNtCTQ6HV7fqc52xUKXcmhPa1o",
  "key20": "2GCEyMZDBFk7eKgbnGTTUQmvYsk8zu5no4gaQ1PUCB99mn3oUTront6Taf7TrkrFKJw1pPwgKP99QRhJ2WZrCuKH",
  "key21": "4EXrvhvT1Z1BAzDTcXvhTwhUiTMT6gUYjSBjxTRs6FhDzD8GxwiMuCvsuvyXsdh7Jt2UFeJ3mTWEQK9T3VTjhtKq",
  "key22": "3F1YWgwXQRtoezHFNKejJ1EYFpr3XiUkRLWKEDbqdCP8YLfhzCjZbBrfbCxCeSmizRa6j5vuKSbNi4YAgV6Ztj7Z",
  "key23": "5oz7f9CAUszojk1ZXbbjyktJsQMqDsNptoXatj2yCNBQ6zV9VR7KqXPSgvfxxwsXs8f8o5VHjHmW6dpioJhTyH8e",
  "key24": "7ihszJtZGoJhE9qbq9iP94AY6e6LytArMWpUajYxdxHJ87FX5GzTUaz2MBffxxTc9tbXxuxntAcWmh4wSch6JoV"
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
