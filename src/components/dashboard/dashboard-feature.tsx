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
    "3mXYLQj3vwkUQUAKLGGj1tUDteMjDSAT1qNi7p53qECUfg5wU9m6CzRMn9YkYpXodEbtb1VAcATLrLv119tCsUfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVxZhN15VqhRSPxg8sQHubWET6NnGairV2oiuapLgf1CXAQ2n5mpdYt4nSafKKN9wtdS2gxRKsB4TG4s5rfF6py",
  "key1": "5sEkns4wwmH1FKxSD7D5gvMBnuqivKnJvB9riFCk2oDgAjbz2k1QESBGrDKbrnxhzuLfURqvdDpuc6DJs3DfFXBp",
  "key2": "4RM2X8XGTqiZuUSv1DYBQySb6Ci86wkSAx4XaB784jJgSmhkX24DfTCxfqao8DrRRgc6otmD4mQGRF1LoNreXXcC",
  "key3": "4M6nabfaMttEBwhqgaP9PAj6zoc1s8qdmux6AUmSXYZpVK2xJPcamzgKbarVrABLtYGy7oPD9jJZNwnkHnhXnAyG",
  "key4": "VWDJz34x6CNrjZ55u7yjW1mvJPmFjD2FYizqwN1uPoWacAfsJ9xoboTdJvtdzkeFHpVXK9ohsSRL9SdxBNUCjrQ",
  "key5": "53ucqerdPJAY4hv99DNN74yj76pi1DSZKZnzdM4qbJrgLBDgfXs3eUUCirBoMtzQ9xMuQEFtSAUTmL6iZYsA12gx",
  "key6": "5dURPmobz9mFR6PqKRY9BiUqAMZgiZxqRp5NSJKqPT2doKHnvHv5pWzEF61jr8EhHDwKhjtza9JeAUgGcVh5zjKc",
  "key7": "2S9jwMkZjfqKckZQtYvzGfNGJnDj5U3BN95Pafah2towohcPwYvTHf2ZzgGwswRDcUDBp3Vu5YiHv7XHrXHeFmzk",
  "key8": "3S7gh3331B9PM63GDP3Tyo1DoT3gFGwx1DfhVcdNCKUBXaMs4tx9CChA65kc3dpVzn1gxPWRqy8cvqhHa1ET5svW",
  "key9": "5bacQ7uX6i1QJS1Kd8EDy1YADYAfx2hu3Sg2BknmmSAStjjSJamnY6Wz2ycCBSTAosoP7zKrwGsUAsCT5cak8UiD",
  "key10": "4K3Ui2xNLKqPPJeMwNS8ciMpFSDRGgYrnZz5t491oVhBA6xhSFvKxPwe3YK4b2J19EgpmzNQe3Ya67GLchP2RrqR",
  "key11": "2cTGFEXxooFj2xMV8sffwpRnmwwi71rrZYFrZgE1FDGqhTLGbDUCqSz8e8r48AfAbWKXTvpupSMvY84jGEyrtxjP",
  "key12": "gZCkubP3mGvW6vhixpTbyjwGhdVova5uzRaKbiMqPYJk6nRhseC43hDgRo1bf1RzwCs2D7Ekd1a9fsK1RFFqvwk",
  "key13": "4C7M2v9n785zimAw7wSRZCfFRDrb4bJ8td68Aq42Za6ajG2etBCQZuUesiW3oB7XX264wwmzfkmSnG3RxfegDypT",
  "key14": "2TBr7p4aJyyGWBhDFnSWo5WD64HM1TMyxK9xT9cCMGR6E2v9PGbuDNRNRYyZTNY7KruMGLcpjy4ZbFatioDdFG5m",
  "key15": "26Km4h3CoJJCF5X2FRWHweXZimb2v2vtXs8mYHi7sa9A1AndYr2HhsB8178Etuxv7vxkB2aafP5mg8o4ZUKPbtUS",
  "key16": "2efnb5B9itATgzbrGv5dWbjZDwxqL3Wen78tNxGxQgG6Rdb5W6sEwNYPHc6pNoh3rwEWb1MVRPjdJLML6T7F5xm9",
  "key17": "4pL3UfniuLcTP85LTKL1VHfKLYwd8G4m9wNiLXUNxGfBFYwYQBfeLnS2NMaRUrtF53V9vvBAGpPwYz9qyyDD6AZN",
  "key18": "Zoki6L6ozWTrGgkKPP7nkKz9Hj2xpi9tKrYwQ6skAqF1MZ5ffmAN8YWqX5TnWhBYtefdzpPRZSCvHJ1YcUx7WM1",
  "key19": "3LKjty1Uc64bycDKbbgKFC6Jv4v7thf9JX9bxHjY64Q8ypHRjtA9pSTsFYDCGG6D6CAb7JUNyG6m9nPYJiiEcMWy",
  "key20": "673rcMhmD4CTQiWT22ACJS66mkVqfqJSDe7ZHMKrhdo2xznFNgBzzHzaDZnxeQAi5jVcxPDsnR3HbmJ4RSi3z28K",
  "key21": "5kTKVPHAemWnM9X8BiSay3Gb8RZ5NrGyUXayWHdyTif3dfXcwq7JMYwcmWmtBDwa2joxwFM8W7etCRxy7wySE7GZ",
  "key22": "22QZRqRcGeULbftAwv5QfpxhjASQnwXVUbiWbhYRjiUMnWFBK8DQ51HjQSTWyBKPf78Xdpg8Q4sR2u7NrqEbJi6p",
  "key23": "2NkfjHVfjU25GXeRGB6JrE9qoUt5vg1SKcq76mngVaG7kjmUoQUVpdki1naA6MVFfP6MNFaup9xGnm1KzecgCfAB",
  "key24": "28oqz6D48J5V46EBL27jDt9xVrNayG2E1Gpg5BswfeeEkTontTjDLQmUrYGMDVGNWPJVTuugu2m3aJ1RabL9fvKQ",
  "key25": "4qqhCyXwipSnTBvb7MBgK5aH4b5G9JpuWJ56cDsTaVemrsXBoycBrmMTMZLqszY4fs5v2GgPnyuFmzCu8n7YRBGJ",
  "key26": "65kYSLMWvfYzEHdJivjX8DK3F49RhdsKu4ZcfznVRgzKbbNWTHpD5apm63Ucbtmy5PoKGP2G2Vd5Hh1cMFtpUvGh"
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
