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
    "5KyY9epEUe7i6FzibqLQ2xrrQQHj1CZEh1se8o5cTRWeve6cUvsx7XUYakSD3PyU7tugoUHhjLNCvgAR95pro6Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nvJ5dgo2tk5s5EDYoZGBFFhDLkbeReGiyjgbC7vJRZVo6zoAVGqKvDmcG3V61kYgTNyHLXe2ENqnPQzFMNGSG7",
  "key1": "4mWDh29W96LfF7Yd5chm1b4Eym2hkCFH4deeryYJdzZMQfCEzMbzvDxgakm2VsZXC3uTjJLfpLJg2MGSmRa9qken",
  "key2": "fNFdiwzN13CyFAzmC4N7GcdVKbi5kDC7Ai7RFDe8kAGqrPG8wq9x6af49hGt754QNynGSHypnfD89cK2PtqhdFp",
  "key3": "4M352WULVtE3CV5DTeGTNvZVrjmwsPtokcygQozSzQqNorqnng2rXNpAKrpu5JhG7xSp71Y78R5LafB8cVCtFmPr",
  "key4": "624JCs1Y9EdubT5qq4ixyAh6N7gLkkry26ayXV3sedvqSdd47RY5XrquLJVyrTnCfdBiLKjfYC8gptVyiaDW2b2W",
  "key5": "3vRHDTGPnEieviW5CnfzZBFUPeLJ9BgMu4G3TZEJhcLDKnCnjUxVZa8tpyEmTneRRBdN8zQnssYAwnostzF3bfir",
  "key6": "53bvN6w6RYknMkrvwiBaFkkp8F7NPrWkLJwUMTDCwHKeJmUDQNENVuxByNDnDyLmyfwdpG552VdjsXYbLGh7Zpfj",
  "key7": "3xnsZBbCVpUuFNXy9GsTJhwKQMwmSE8cZf6cRP5dkeUVaTmRdgbfdaCFXeqLwkJS4FzFCL343bvqS4p4WRSxga59",
  "key8": "4QTkMoT9QJxpsoK7T2E5F9PQcbh8how9Q4r3qktAzipXv3r8V73vcK7tr7SGWwvqBavXPABtgJ55qB3dCvHxjucw",
  "key9": "4YXCr532EC9N2uBcLEnzxpAdcLofoEWXwKqHePewKAdW4fhTy4hXp4AJzgEZnruJ1wv5RgKo3CXeUe3XFkhf4ja4",
  "key10": "5uXg3qynWUugcgQUDEXm4XPDo8eeLRMxf1d7ViUkvG5aPuRXi53eEfHpV7wPsiFheUjGEfCjvVoD6vg4UF8YbgA2",
  "key11": "sxpvCicjaDiRVdg62myirsFDkFhWezbc5RkxDzuXnTfUMUCs3KTd7JMtNu3Mc1VgTsCuvMA6TfsDL9Fb33NTPhh",
  "key12": "5B1iidhLAxCkNKPUBpn4m3pUbZTe7nsH2QvjYW7weWFP7Pe7pSSSEvU2hr8ERUyqFerEQsvyszj1yQTuRq9CaudW",
  "key13": "3EPEJ8GNXB1kyrvrjgE8mi17yidsZDzNT3BfZBYtrecC6Efqjf6CwxesRVn9SAo9PuVwvqwmxhJb8g6JK6TQhRMQ",
  "key14": "2p8bfAmqy92U1RmSK1ff9pLk9EsAvBGXPp7hjfQoRHkhtWJGjpYe9hzzNYqyyEbTAzaZ5MJmsuW1AayC51epWMnN",
  "key15": "2Yer2mZ4bNJjA2QLh6QTTgsQYWPMGmNaB4B8c35GfBFdsYaEJM1te2tkWXZhZESXLhYGiwUJoXcEJpRAG5K1Fd4K",
  "key16": "3XY39fvRhGCsJqrhxP2jEs96tJasVfTZqbywrEPgeQz2RTo3eHQMmzCgYT77qVAgQGDpb2cnLTnxLABwpX9yQaRf",
  "key17": "4BGv2rrGEXgvKXwUWi3Tf55tv3UhEiGw9Tdm4YiYMjqcNrFbU1Fobh4HRfu7NHeuVK9cQ1979DLDW4XWfa7jywwm",
  "key18": "4AaUuzJRGubTxwkNRzi1uKJgAwqzT2EywqX2cL68WVhDJoMoT5rKA6M1a5cCss4yA25Bn57fPjbd9ixGAw2kNzjj",
  "key19": "3ZUfMKJX5Bumtz7RjCBWfzai3pCEMh3AtwmZyiUbGB1JquEqqyNfkTGA4eKEeghUbPSHaaXAGRJHEkkZ5J5z5UyW",
  "key20": "4dfJBngtXTkNZMPHJvagFXU7xnFg1KKWeNftgaefCd4Sm7YHZNaQ79coidPGsVaBHNcLTT4MWq97nxzZ4ewGcuWu",
  "key21": "55GxFg2RedBcGfDyxs6S5ao29jycBdbiQp2hXzz8YxfTZDpTrwxC6yXMapt9666Y5MuAkNtLD4p29gehPi9StPNv",
  "key22": "2RZnq2TKpsoQvnmX5F8jQLrXAZtWeLGGAqWJtiAf7HDZkkXS4W8Ry7aLJV8jcPcXq9qLqgxvDnxV9EYzKU2Rdztk",
  "key23": "3thGb878KmpKkmUBFKQ9jKmgwtsUwKpiwTvufsApPMudLBT2s5DtZchLD9wxckm6JT4mBtR7Wqvo2zdAg6v6wAur",
  "key24": "3k5RJiczX7F1dkAro7YsWjaSDLCnKeVZv6VgAPnPtunotNWB6w4JH7MLPccaxFnDx75YFN8dZ4fuH8AWHBr6AkeC",
  "key25": "4Fn6cD8qBd3Lr8xUbX1yZD4oFgf5fpX4B1exYwqbiZRV8ZQLbS36TXejkjpMqAfj7DocVttt7Bg1q3zf57RNoXQy",
  "key26": "47DUeS38KfmZWPt2JudQHropz5mQCXYEhXKFhwcszRQ3tSyyBQ1tXT6ATjhP6m7W5yrvaY7hFSL7yti79G3rxNyo",
  "key27": "2SnopPWrDSnnLgwSyzEui94y9YFousFn2DgB4MBWiZsjPRgrBqpEvGQ1QAVjzGKqtBUpXLhnkTbcYNo2wsmBzb9A",
  "key28": "995UX5WQjbWK2Gcwt25YgicFC9g7fVytDK6wgFy5w4ftr2Rvgo4vhX9AVcnBTf5exPQbLsVHhAtJCB8uifV6942",
  "key29": "6dahtrfoMM41j78ZWUHrF8QmE93K6KQCVhgSY3FJ1ue4wz6aCWMfw3RXJyGDvkVJPDjg9JC1N2ZS4Ut2yPZ97mn",
  "key30": "21YPLtRWpePr9kTJNnRBYuvC783pMDVvux66DXjwCMwjqARd1E8VbAhXyzGTUfxuLJoY8VgLhXmL9qZjkhj8kDhS"
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
