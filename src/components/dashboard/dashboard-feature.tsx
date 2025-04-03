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
    "GPGbQ8D5VRE1RSm1bRnbALGRYWssWuBsMY1L8hQeMJJKTPQAeKGbKdNXTB5nMaRFbLJuWCRTdpVEHTPn2HeAWnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Cs7Q3hDWjQrLumZwKYeFXhsy7upaPUa8RttEdPJE6cB6XfMigveRwxVmiZJ577jjML4UDpRpLQBpjeGv1tUw2n",
  "key1": "VMPCJwoxkktNhZ22Hba4G9tRc3zfBMFb2MdyYKexYi7CEoJMgqwjFV3Tz7iu1w2pycK9DYrdSNbdS551sa2LPwu",
  "key2": "5S4cy5kskhJXfco5hYVSwJtqZPiYEJtAVA4QTD5Drjf7PqanfRkWt7rDRdccCFXUngx9tynFmn79JQ4rBLBqsvck",
  "key3": "hrctszeEJUNCTYPi6XHAVNFDfZ9XVJXbW694CHLbF8fm2NauF82VJbbzw5JKgjVrSfFm7qBreAdfEzBiEQM3LNa",
  "key4": "3dEqkfn58DKYYCL6bSvkwHnd6LzEvp8ERDgiGbMQbiwdPXjMhfMRnoc69FK7oZ3Mj98cmPTuYgNsGpYvRE13bSrp",
  "key5": "tfwmZ9XzqgWcNJC2q9reCJ3SiPtdgaywMHzgt7967wnQSUCAzMhaFp3bgRiYQS74KkJkambv9ctpNHNUTgWvRCP",
  "key6": "fuN6nAKy7YkZmWD95AnbFbSWvSWFeKwnUwX3tgMwEYDL87hjdjenEdSQm16xtbe9wT8RVYtq791KZPWusWXNPDv",
  "key7": "5oLVbLFqWncvimUBFgg5iENr1N9Hs7q2nPKuPHUchWJEDc8wYBxk5Qx3Ze7JbV9As19m3A4kQJs4GpyyFeHSzSuy",
  "key8": "4QFPEau2th84UxjDgTTSfbZT9XbYugdUf4GuVc69edMLTeiJx7tvtiw9fg2Y31781AigVNnw98tYju9hgQBrQsLL",
  "key9": "5on8suPyFyt9o1qZZ5KmLtVmVq1VKgxM1im7ZJwN6JPoKMbg2zmBUswNMbFHavex8i1Ggk1xNDNSf3CxbGLjTSFW",
  "key10": "51eCXvGjTBdeCn2p5iCKRV7ZzbpCKRbtqpPmJzQ8dNaqsVBCfeEniHaZSDEWbBinTQHazUeQ2g61V9JrVqE6NanH",
  "key11": "29r9KPUJsHrPj38hQACxhZdB2w6XWjf6nuiDNC34mvAJ5821R6audoaxnVULenu5XSLqGPUE1vCD9Fu468U5AhKW",
  "key12": "2qqe2PBqGzy6mpF6k7TMv33BjPogoeDfeEpSQHLXvNCi57RGY1fz5UCRCxyPtKJk3JyFbGfbFtfxcLPD4qqWdLhm",
  "key13": "4E8bY7tPPFduJaw3svWwEr42hfyuy4XwjfVYrVe4yxsxxwGL1iLHMqv5p6CQtVbsHhZRW2DFEgQiDHvaDtoCR66d",
  "key14": "2iWqgZPNDmB2NannWyUFjdz5UBNKzXGXsLuJHx7Wg28ynP6YuTSaxAo7HRSKQL5UrMES5FtZW8SCmTHn5LDE6Syc",
  "key15": "4sp6oiK9DY9ijJNMyqQ7PFbQArVTno4w5kuvzwiBSYN2czme6YFDzB8L9MJEKZtEKMmirz2aPANULViDReTqiJkW",
  "key16": "4nponzrNnrFodBTzu2PTbRi2qrH6S8AbtZWhWjm11CNJLCipQ9EYxBbqpRmVJuwNMjMwd8ULEqefE5ER5ncCx4F4",
  "key17": "2Q2uQuWxBDmHtr3Z2AnQW5zMW6658ELd3vYSwDdZs6bwNa5cgHym46qW25a74PXZ6XNY3SU6La4PdLNXsGF2cZSy",
  "key18": "2S2Ued1GubhLucRBeNDzbEp6LNzqFx7AJ8XEYTSxmpu63746S39DzLZbheMHrMEDSPbWqrzr3WCw5iikSPsVXeeC",
  "key19": "59VA5Eii85BLLSSHcQoLooJi7mtdvAqKtMNHMJWGWbrkPJfsMm1PWnEweBKC3TpDANpZcaemExq8jmqAaqrKbxg6",
  "key20": "4Q5isKh2noEoAyaupMcfTbW4YUQRMsMRDpqa28Dywi5btdVLFwLZukF3Cmip2XMpRp68FdAoHSMrnw2VdH7kEg8f",
  "key21": "4b6EDQkB1L9hRZJ1m6yXVFy2TWQBP1ZL48qfNcU8bcwmZB9WkYqvkWmYKmY3FyRNdkSELtBBp2CjuPRNsJRf9RyF",
  "key22": "44xbdxviSZK4PLn1xNnr6Q1jKbqe74pnyhnBnT7i5TPj6XgwaF6JTAMArJWLGRkGmu19wAYtQD329MQDjQciYqiw",
  "key23": "4atHLpNb33WZnGBhj2tcdf2zZtBhpAd8rrZyWf4rdN9H2VoJ1Z9zjtFwaun2ec7BF75U8ULf3zEXzEtjNiWCR6AR",
  "key24": "3a72ihx2qWj44oNcYztu28Syq53z6YPjxa6cKkB588GMX8ENNV2vvZavLdyvgpnom2UrEb3UNgStwGGB4gwzsUza",
  "key25": "jefqwSGiSwgr3wMLCjNvKqq41tHY9iPQAzvasjTZYQX1w6MCo2wkjtGFGAYFG1uuqdywkXTHQaHkeqbtPPR7p3J",
  "key26": "2Rg3awKXNB6uYhMPnWsSaE1Fr6q6adYThYG6s1yzHA7Wi6vJk7BVWWzCtiPmqCKfANn4UoPFxmvMT6NsYMdjivwq",
  "key27": "3fdzH1zgPqztD8D6Aw3CLwS8mWWJN2kr4LkSsHXdc93pKDvxZyjiV4b9YCHkKi3muUz5d64Rt2kRG9ss5aPz9dxN",
  "key28": "5Qcc6RrwAU6N1XyAsSqMjffnuKswAEhgEyh2ktoPtzGPTV2pRyxpnypXVbPejAQGZydFwNQoFn9f8pev6b6ucGNh"
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
