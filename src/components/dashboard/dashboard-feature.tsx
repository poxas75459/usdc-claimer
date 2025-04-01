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
    "k3yk5YnKggrRiFBgtoD7yQpQoT1FpoxUf1BHR75RgrerW6eV7wetchg3Q1iRGcryo3h6GXGTmbPx731rKAc2VQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWNsmTXauTF7wgma9E27DMeuydR38kPF7V33kCQR56TC8xjUQqucoMqdMRQ5oSoTtmzo2qqzPNXDShkULctrM17",
  "key1": "4ryEdYp359Zvvu5x119BDRVYLhstx7EeQKS9n98HsTJxHBvqzYKFZtD7H8XarD5gQTE5aEgKDXDdA3mt8r4qdbVv",
  "key2": "5dGfRBGy4BayYj2iP5NkFfseviLyaL4ZUyuxufdKRekhuGdCd3HDCXgTXwaoMqU3mpbYRV3mDgejuK4kieW5BRGH",
  "key3": "679pExDPomN63XSZFUbpQA5vrau1G9Cffc1hqsuBWCyf6yxVKta6tyURdk1Jr9KqZDecpRtg7QDYrNmjKgdHdgX3",
  "key4": "2FhtEyJoSozCj5FFqwwhoRvJ5tjiKzaREMXLsfguMmayb3UL1GsqHAqkmM6c1ccN1Hs9sQPZm5Y7HzwqdibjMHyD",
  "key5": "21YkFAbajacJ3UQCBMmYepnj4ucXuTYgTkmYgY8DibZKh8shyTfWP6oDwhvhCUxFz4wtuFt7Hs7b9vtg2raTp6sA",
  "key6": "rHseXyq5154C4wSVJEPP4CqEJENVZi2Q5MABkMygjbwAsniU9iwKBVowLj5RraDmvfvGumjz81CoDAkPH3CYa6k",
  "key7": "39AAYHDrmiiRq4p1GiXcYPLmjFXxice9JfmmKPMztMkUfQbNV77q9HdDdmjuMDnFBykAGShvhubhfxWgWdKeHKS3",
  "key8": "2Giv2Sdt7sHnNeqJWtZo8XcdAA9Lg3JgWr3gQXn3gS16T8qZ3ByefaivV7Qn9txhe1UcDaM7QNvoeteC1x7MM8eT",
  "key9": "4NYHx2d4jzhfBu5N6fMXxv2Z2KqkFGKsCkSD8YM1AvwExPx7Uhxo72wASXr4APwZFsnwYVcbzs5RXYft9LjzAG4d",
  "key10": "VMZKaL2Rx1g83rHY7CJSANsNYLFCDFxYnH4JCPnLHjAp9fvcExDxVFXZfZCuzx7Kq9SvbWTe8oER24GLHT96Z4u",
  "key11": "3s9t4HwFmRGMdpgKzGGnty9MbQZRSQTQtoUpR4nxiKUMSCjS8yCb54rWAmZhCKphEph4hhcG5KMX5iQhkVTTYz7H",
  "key12": "2ENiRn3ka2b5VGWY2RA5wgWgCVVUa6gtvjrC3D4Te7tBePuW83Z1KY6vw4zDDWZbfuzSnAbYXD5f4b3du1zkF7Kb",
  "key13": "5onEaPfd9d1RYL4DtJ8pzwLjqktmKaJSfq4bBMXUxf7SNLpHad8dC5sgPyQanQAXxbEW7BcfmMdCA267navsdHps",
  "key14": "4aUNTsoLahDLhXPFTwPMzynDRkQZ9M79Q5cjLcRY1XTje332aSbd74zHXa72YsTfT4VcUe7SLh3aEqBJTUGVBBrE",
  "key15": "3791dfbt7e9iGKRmqYu3xHCjZV4K4wq647dSsRMV6N5kGbCcQ5TbZpnEKL1N8hVbk4EhWmQh77sjFTUtRBK7qNyR",
  "key16": "4LWywAUjGwG8LJTM2qFap2WMKV7vHUsbvTRdchnewpj63jq2VeVsWzSZ4HhS6U7Dsr4dnc1U2tGogqs8XRx8eNBZ",
  "key17": "2XXNi3RtLrrmdsGZ84H78UGxjuDV3CVD5A5R9Ucer16qr9pVwcctZ49UrhUKLKcmN3rfgQp3ScbAKVFjo4yLs8v9",
  "key18": "5WxrZt9CmZu3SAVsfkUDh5xqMwG89yCfKFNE79YDQCn7gZZFyii8ycfg2hsZ7qVdmQmts1jjdHBgbQvQXqrLag2i",
  "key19": "4P6cCtx6HhoNQhay3vDM8oH3oiLTqUouPoJT6CWaThvpZa1hwBZv8Lw2ptvVnqJuyuCdvQVhhrmVMJfsJLrBxkJJ",
  "key20": "4i1K8DUTkPpD1E4M2WUVh1gFTiP5FiZ69LfxHiFjMwnToYhMZuaDL6FmmafdccKHnvdTWGc3V8axWnXpbYvsCTY2",
  "key21": "3SEKi7CsvdD2Btsm33MZ83pVDV8Pr8594vnQqmfEjjkn6XNLCczHBjt8cAJUe1eAZHR1Fby1Ms9HtYMSY9tGJZvd",
  "key22": "1A71kcMyiPx2qYmQw7Kn6TKGyjWi5eVaruaUPnDGj163uN6kyVfhT5AUo5tdHfBkVdGGAdo4QwRaWAyXBx1pJ3d",
  "key23": "4aPxQCSTVfqwjBinTMzmwRzr7gFVZLm8LhnC9b7nB25TjpChkALxpHpuhsuBoZ9ZKNaxYuhQqk7gckwJKqQpHHB2",
  "key24": "4nfRZJxu1A8K865sSgU19R1WgadnqZCiUdT9yvRYcVg1otuE77HGtZ6vskMi28jxvqqYVn45y63abPrfbT6qyYCG",
  "key25": "4niUxMcyrFxyYDA363nyt2NhdJ3JtmE6FrqhzPgYZLMZFpfFLoH1npCBQFWApG7UkLJPfhyssydxptxmxmweYPQa",
  "key26": "2dciJW5ZyMXLPhxK6mw5RwkFu4bn5G9JDXdb3s1hKf88otfDvQUzwFbBm3pRfXsfziVFGk4UTm82X4UrwiSjVBEs",
  "key27": "2NvjmvmX1gtEpkyXkruHvWXv8oZMknfjvbfcvuJvqkUdk7VKgZxp2NG5d8g7z6LRaFwrxNBqBdroaFYq4QdyquEY",
  "key28": "2L7Sx77Soh5Fdqb5uPAELFCVBsfR4MKtNd5KbdgkTi1GkRUm8oGYJjUadmSRqyLPiNCHdcahhj3KQPsTcjUxExqN",
  "key29": "2D279LcWKGe5aJpabeLn8ff7QgckEdzs7wTZpVssaLibKCpJ9C8dLveu8kfPKe5nWhbW8KWXMzXkZnEpFZnVg6cZ",
  "key30": "2Y8QFDup2dSZpwSqXgiuKgLXLzaSuHY1ZU1jeKhAzucCPYnJg8KS8CLB2Ch8AeEVtar9m6akRPArhSPmuXbmCHG2",
  "key31": "5phhgd5t2aSbQvq5TLMim1EU57Ck5unvFt5ZqAhpHctKPn1RvgwjwmP4Lnn4qT8QRYusQpKtDZvHWLSYgPY7LEdV",
  "key32": "KFSKdW41LXicrGy8ZE6CYCTaaF2eSzeDQhpC174zPe9ur7cr2fDvTaxvLbbUJEs9ASVK4AxSUR5DChhtXxtK5JU",
  "key33": "65iLh4F6PwR629gWsgg1vWGswe9UQCTdQbamKVoAP9Z5m11fmaJXwgVuefkt7dMXfErQPvAc6XZAZiePxNp1JebS",
  "key34": "44zPnwy94VAx3WN8rZsqEN2wiPt7FwQ8C58wD57eNXWGELBH6Ujf7mStuA9Cd525N1MwxAuA7vgn9p8xAdmVPMzX",
  "key35": "2KxB2vApzzXQxjAWug6PutaoRDn6YR7yXa9nLX2HE5Sm8zvk4XpevHcjKSbVQSVFr2oDai5w4fW9vygEAFCKDRHB",
  "key36": "AuLNPd282RfZECVySsnPtf5eiu8y6j9JXfaTc53AWRbMNfkZitVbwrhk9NMQKSFJqrFdbpAhhpwhBrndjabAEtd",
  "key37": "4FUYoYKFDw7EMMcURMf6TftpVBiQQjzes3PSHFnytQPgVYCM63jpYWG169fCN7PGLfrWBKeFbAsKiiCzMaYkH2yS",
  "key38": "4FeQacyfi8NMjLoZMzbcCMCVw6MPyzZoMb1yu3rSs49Q3HP5NLeeAdAJtvZQL8pxQuj7NMTnHt5UF1YgDWzgKaLS",
  "key39": "2LpVJ75eve7coTiP6dQQiDekMb1zWQMcJqGmEWDWEfppMxgmokCLSBXTREtc9ztv8qr8Lu9HUmFS6VeoiNuBxivt"
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
