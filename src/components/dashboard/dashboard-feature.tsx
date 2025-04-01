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
    "5SrZkVqyhDiTQqvwxmgYvY4aSWDoYK2Umvua8qR9crRp8KMPzTpBsMbyJYeyXMutmvgGvMiUKceW2BnTn95HCACx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UEJuwSVu4EUX4M6hmfHPDtFCXetAxkuWw4H8VAAVmSC7GxWvdAgDyTE3SMHhdzDdjjY3Exwx3Q32qbVaxojsoKF",
  "key1": "3BcxXBv63GStooUUeY9tGn4rc9rKv4rGASDfBn99Z1swm1yxssDghFBaZ3yUDPsaxnPCf4kZNYoBwnpZLXibYDha",
  "key2": "4VzWYU5iSpNkBdqLb6dUVdCufj4qCW7D8bxaHtY92FAo5q5BVnMbM3f1XKL13i1q5AHS26U7dxv15iAHeYmzLVGB",
  "key3": "4mrNtYwbwxV4PJj3P7a5Hyci8JEFrNjpGwto9htGHQq5uYVh5otxh3qmde3ihGxayYh4hTFtDi1rNK14YxeKbsNg",
  "key4": "osPTfjF2mZxz792ZXRyquph8DUquLMWumg9E55rGgUEFsGKDT3WHRWK2AKtNPTvMYz2SJRCzgk8qJdbY4iowbtD",
  "key5": "2SpiKKdCQ41UVm58HeSEd5GK2zTxtWa1LgY6HV9ZGmcZMNcJzsvbzbCGoz1BAyG7UeC6mzqgEFpEUDsjDcJQxmZK",
  "key6": "4JKUPhaHPQsZbnssBKbytQBvoAfDZVf2ebzi6YmeoPcyhFFAw9MMD1hBbeyYnH9wwp4WUQkg5yZshTPhGtV1ZKKv",
  "key7": "2nWx2Kwj7mj4QnrKWUkddhbCYWz9eJKwksdLaoRuWJVvE64nxMJALttyXQCTqnNH5Xx731r4tKgtQopjDm7REPrA",
  "key8": "4JytE9ZHcgWzaVKHUsz2BsabHVYCnzM26Uj8GCq8TT9k5MvHeeiJf1kuSwWFM5h5x2crN3ZRosxsPcgvGbRdRuJo",
  "key9": "5Tu4NuKSwCJ7SSgvDwCjG6zpfy9cLa1LEXzVH32Z6qYj9d6YdhLiQP8z3XDjmk6pxV11UoheE3KAzVSsrxGwdSNn",
  "key10": "3QpYJErDWpZJSZxCPWtBX3oYdGvZiDw3fiiEZ6gnKkiwKDQhhfoSsnowLVWKW56cjCciir8srGM2FxpJvDscA9Ja",
  "key11": "4m5EjYxFs1F3q5k4nyMqXYEcWZVK9UUGSxXEhPUpBcnE1cZ4a9g6xM5HL9eY9EzQ6theGJ1UgpSxbQ9hDs4CDFKB",
  "key12": "4Be2kQ4QxDQ3xHAP1KVKrwp5WuoaSZPXHm7tzY9eZzNv63aTSd5cXyqhjd5RNU9n6TsSTSh7FRJZd73NsFARXg2b",
  "key13": "5jkaeQiZ1fg1MGHSttApFTPTwG52vRoUpdKNJxtnvCdRWTAswByJ4TTze4JoxFsEES4ewiuftnoWFbS2DAgwULmD",
  "key14": "37jGst1cW6chUdrHMkVAnekdXLGTtcMNb8iDkQmjMbr47jrkH5Bf6oxtBqhX8jMhRTQHrni9h5rQAJjQcdJgCMct",
  "key15": "kXRbLTZM6ewCZBjrEqm9pSXjwVBEUv1SGx2PeBfqJpBeMaibayeyFg4v2oe5zFGYpZZhA6xvX8MirSCS46vv1ts",
  "key16": "tpy8WokTAnSNRv1F2Mmi8hf9UCqtpmUx9FNV2osQ2wFyGryBG88pEiGevXxBHTTdeo3yTJbF8h8Bu5nTqpWivr4",
  "key17": "4qbjM17aPHKvUoaFkPry7r3x91qT6qKJE3X9un63nKLdcBjNXtnWSJ96urqH3kut7Cz7FoPqoyuBkzV3XustcBvg",
  "key18": "3PntHVYpGQv2uRnczh5D1VV2byXKT2bcHjdLAnTADkLHxPwcnSqtwrqQEmjpb3Q5wPFShQmuW7xq5xxpKSZgqtkt",
  "key19": "2SGCn4axs6EQtSncvNmKAGmJZuudHZpYiVX6PukDbuWxboXUUZkRkFrxidotUwd42AiKHRptoNHiKZJKjafVrTK8",
  "key20": "2A1f342r2esK5ghaChgpeZtMfyW87kuZxdTAqoftaAo2mjGzkXoHhd6mJHFppz24HUr7TNNJ6iJs5of6EBix97wp",
  "key21": "3jc1eVyx92qosj78JKL7zSQvq2myDtCDuNVdpXbjkX8y1J6hRSTmo1zTjPpUMXBBQ4XozwkJ1pPULb6gHNcYvK96",
  "key22": "4TccprVPHuovLG2bDChgbYjKAeGchZgoc7UBFxpsoczWk1kjTfBEPWu3mvwvVADa1VTsG1sY6DqVY8ScjPXNkb9b",
  "key23": "4fGS4qLcHQaY84S4e5JyeSj9ZSaxrRAAzDcPGYX4Ev7ppgAFern4QMPT5vc9Zof2rHVJ4fihkm9kr72DoXL2trVD",
  "key24": "62WuQ41i7LyAay8txxnDtpWJi94FBtK2Y5EHpGEZhdKNShjH7m45EJSf5dMiRhAKJFoHCkVChRHUDLtEqwp711E4",
  "key25": "3WVhWygXNKJPnVMSXvAHyLEJiAJnFXxFnmEJwr2f3MzBbXHc1suQSe41oiLURYbL8kcaqqqLBm4xSvSvNzifwjS9",
  "key26": "55nNvWgVgdNbhGkgAaSfu7C4iMMHDSmX6uf2NSwTT1Wo4HTf8UmNdmqQR4jDDSLhQDbkGRuy6kvGP58YPNBfovPq"
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
