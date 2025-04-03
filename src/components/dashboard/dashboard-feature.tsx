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
    "kXz8PRK7UKHRAeWJBYkBuBQdmvKMVz5LQp86wddY2ovrUEiJ3xaxhK5MxA1ruVaFzYaJpAv9jtAoG4KJwxNDMe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwpFQR52yoQn3q7cj3YwJZzBpxCtn8UqzepuuNU7SKooy9T5XqtRvSgjW4P6zfzeeeMwWBYNhkd6iFRgxGs8vng",
  "key1": "2cxPA8BiuVNDqGYynS8DAwgct2SK2i1ZGaLXa4y1ST2a3S4YfXE83ma1j9UPGbgACP3BEvisBMbMBWbc2XywjGTF",
  "key2": "rVKtzRZDKm4iQ9ohDuJhr3h8XasRhku7aAvsyydDTpaqkz8TZnDJ45f4XWLFHixvNP9jLPQFkeMthxTe9UhAZNL",
  "key3": "21Rr9iG29QdgHT7bJdBk1iGy9cDpsXsSgdNX3RfWc7SU3AU1dSLHhZBCuX5rhRQgT3P9bhRyCKymhQHYFB3bB2Kq",
  "key4": "5uu7fw54wW8ovivTE7xkNRCpsPQdormHPFo3A3K21Cgsbctbgt8Jf9omxKWaXB2Ps1cndCnkoP2JvWmvvRELgE8N",
  "key5": "o77CpKuK4bpmroJX7sW9MSUqeAonxK2XUN1zfCrmHpdJaYUq2pixgd5xj9XD8ih3qMukKBtK2F45iNeg1RcEYR2",
  "key6": "4s1dCE643Ty7q6G2pcPVhXQ88mPPz3JJDYRQe7TsWHZmm7whxJXrdPxtaednT4FQirYWcKouLiDCttTM1R7wuF99",
  "key7": "5xTwJ2x1CHUBCPVWuUvUwM1MtH2w7B4YeK6DvgtpUgephx5jaHUUd17uwz65EmfCVj72bmAPYVBUoKvuyFme32Sj",
  "key8": "23cXywPR8fsK1RzXfeYFpftW4TTrqJGzWaJMyCNK7DspngDafWAmNRySnmSnxDneDXMtW4mXcFz5TGR9RrTbXoVd",
  "key9": "5sEWRzbJDyPQcYwvGuMQXFRKF6o9HfnRx3bEMhXidgggnEm5fFzw8Ct797MnA5zWQ8qnk8wHAU3mkJzRyPtWoP8k",
  "key10": "36rP8C6KubWimg9jXaB13xCDaCN2ir6sR1Toi7EiKi5qWYNT8DRNatXSXFE89NZYFeL624oqhCd3y68Dko2zjSCs",
  "key11": "5CYqTU3jo9p3xJ3A2hJBPs7qBYaMzrKtsqFh2NbMMrquJaN2saMSKMgDNSZSXJTb1wgJrzjndWp9C8zkgw226zT5",
  "key12": "UpvNfgibRoazKhLn2NV98zZhqSY2rvZm2W3Qtk1JPBUsDahXCvigdzCCbpfia9fpEGjieXxdMC1a1fdjxg1ixFq",
  "key13": "4xoktRdziDjbtHB2xQBPP76Gp57rAPhCqYnop7CMySQoQrunKTfJj433Z77ysbrfXBhb6hGPkaHN4RddkzhcNrSg",
  "key14": "2btRmpEk3UpJf9ev5KqBJd3WEtfGr1VFof6qh93iMdLpCgSibhzmogzSKpFtb4aZiCMKYroyHb493gfA456WkMeQ",
  "key15": "46UsBhssAbxbm952p9inYwv9ZUZa95sqYU4rd4Cdnwe5y7PTMttNc3UiQgfnK5oKWZ6MpHgR61cNeJ4XvQPxrk3v",
  "key16": "52wxBbxYyyteHBaVH1ZY2BbR7kgAdh7aiGfe5WNFGaEAi8ZFZkZZFMUG4Nb28zXd6bSQSwHj3ybh7GS44F6hduhQ",
  "key17": "3AXkzH8Mi4GQhrbtcb5H2DyzmCeWM9vJukUPPwZ9vL8hSvRDKACjLtR7qMQFeZrQmhSqR9YsNJG95spt1TMhBqJb",
  "key18": "2YsgXstrJ1UQHtv6V85QdcPNcTJgsNWPDwoDKVnqBCVDX2MFx3VT11jgPo6Dfb99budcP2HbLUi1cs7scrKh1D2v",
  "key19": "w2BHureJz4a76Jt8Jvc9riPBo2pQNm2CDRJkYf8eRSDuSuKubr8g8dU9gesN6usNd8nDneTh48oypqAe6dNjnab",
  "key20": "3D3g5oGhs8nx4MJb3U1P3F3udpPeFCT5CthBwP6AJnyLYcz79FWcGuEBWHnMWzo843quYKcUr1d9W2LeXWejdEDD",
  "key21": "4qCjVSpdy374zWTtgoV2ntgWVY5B6nmuT4K2fBMKTrrZMn2T1rkxQdNQ1LRNeMPqzg88YScNC4qZ6fba7ga3pg7m",
  "key22": "5tzepnrJR2ZkjwNtvhZVqW6sSv6gwj2TQKQNaeFy5h6oDqFsmkME2UjgUvAdPy7KaoKtAz9AbNWjqzNjbWrTasM6",
  "key23": "C4NSdP7DiQ1tFHu8KJg6kKVEXZuPj1ZEeDBeyL1bePUjdsm6xmEA6vv7K7XeuAkEgjLQxQErRN611TmwftJ5HcC",
  "key24": "5ZvwodNzo61wpc3tZhxNRTtP4S4XsezsbUdt6ouF6N4E3TioefGsmtYHzcDBKgF8wgtmzuWEYL6g6RGhy1J5Zryq",
  "key25": "43hHCiYj7fSEp3zxjbkio9iCoELRRm6Mf4ppFHeMxTdJ81YFzpCxNpLZeHYpv6yHgF5LfBoXjjfwz4vK9YucX6hF",
  "key26": "66m4GREV21NpwqwDu33PTFDm8o1uUMep1UWZEuXsQobpK3ZaADPhRtKZGWwwhJk7b6aGp4M7Zu8KB2NZiC2ST6n4",
  "key27": "1EhQJqhTMAYVafqLbRZEeAbEXeyquYCJmAd8tVEnEHthsUG2czTN93UzH35cLYEJNonQYzu7BDWtPdcBK8ug7bN",
  "key28": "4sKFJBUvjc8wBzW6LrcHwkd5vn5q7P3dC9JWxvM3m472Cz1xEbnY49ppXHszvk8oMty5hKpEa3jkGnq4tZksDZeH"
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
