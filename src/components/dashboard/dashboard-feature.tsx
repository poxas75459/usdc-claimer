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
    "2pWdTuRv1bXuQGqL55ybVBAbMkNPENfJNR9F3nfpNhDksyRVcRZ5Zb5m38TBrB45bfHpe7LRz9gNFYyxcLHm2NPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXRX6o1U2DhPyPcUaDPmpj3seN1xM7mGMQe5B6cjYYSTTbiVN5AymWQRvmmJxJzdfT9mE1oPTNG4MSYNZ2TUMjz",
  "key1": "2nxdjKEKV8E3bnUxyqxusE4hus3ezNxGNHiUdQHWr7CbBGdQLNvKAqXocuPQxA2ivvGvr79oq5uSF88NLd5ctzyk",
  "key2": "5YV9BrPQ3awfNhJH7eqVRyAH4w2kLzNmf1MDZCTWEBu6kbwRkoTs7aqz2MMxAJJepVQQidbhKkiYLTu2pN5L5Riw",
  "key3": "36JSJe1bDrh5e4zgUASXTJnhafmKqPSyBRSGYQy6tuvY84piWMuERec9Vw48ZNiymTAeK85S94qoLnd5L6RAnd4G",
  "key4": "TQoyL26Uxg5Er33wtzoMuQAWHb3xtuNnK3kV6De71q5HeAh49ViWNeNQUdhYh2K4JHbNfPFHjagxEQ7Bi7nPWRo",
  "key5": "4MNuSJJiuWvRCyrpbfjBh7qSb5x9tAhv4qXAPxE9JsvgAb4ybtekx1ZtRWVUNqLePYEUspsUgaRyX2t57mCUnWCc",
  "key6": "2w78XpEJYRPPa2CvozBMDSXehRa8SpNeqzWNiqgHrGSZxdE3cxce6HSEPrDhRFgFguZGifFXenaBTiVagEoma9Kz",
  "key7": "4gE7RkHYz71bPDkBFeHohKdt8MFDPcuiG1botZuRyjoVf1QMabHN25bG4DUWVpVhzAgHHaEaNgK2bd26DW52XWBN",
  "key8": "47VqkJuT7i42yFb2r7HNNhZosLkUwe3FryZeCnTywttWSpYgN3F9rPgEQNKCinf1WUoZrdigHNjZrxPBLWgYjzX8",
  "key9": "2ryhsAGxJUyyBuoZNyeADXFPheRNdaiNqfQzUFGGPykrcZnx4MvSJUXVkSgFVbr8zenEGRBrCSiSVC5texzbbrps",
  "key10": "4rNqw4xSZWBxGMxaxLcRPHQQMKWzyHLXub4K6chDBwdUExnDJG73Cisb6rvD8nYYpEXufGu4YEDu7iXfy8EVuce1",
  "key11": "22MuUXuDxLpQqavy2C1LCCP3zbv4WbVHjtXUK2A2aTQ8Xwk4k7tira12G36RhsUuGf6HAMXWf7V1VuAykG1jYfzm",
  "key12": "5sEpB2Nbov2EdvyjK7Z36Dfc1eFLEXE9zVu6JPPmCKzCyTisJpLYNL3EN4Nf8BCXsHvXEz5xTawUMkZW4WAN98Yr",
  "key13": "3YwEdgemRkET2kMqk2HaTWM4VFzb8YxgzgTLngtqp1h9vK6PLfVNuhGP1ypPHUoR47e9U764dd545V64aLjbucBd",
  "key14": "xn8yPAukH7ZLiZuZWBq51VwRbTpB4eypHHK3nBHZwfG4x8AfPeNVcE7cFGMb5CzDSjsZp5XFbXLyDNAb4JrT6Mj",
  "key15": "3aPiSg348QsHYTMmiGzbjmTbEd6mLcemC695VhknxLwetmAKAAvRzfWK1mmUW3nYqFgMZH499m9JSAqUUQBKXqTg",
  "key16": "65jTed3xwtd29t1tbWowMz58Ra8nuif4G4jZ8TrwxD7C7mEsQJ7pTbQgrBU9UA6WB628RVapoMB9L9N8oQUNbz8k",
  "key17": "3yADPbzqHNSgMossYZivmYU5fQndMjzVftzVJaD76R7D3VTizTYVy2BW4SQ9wVYGmQ5yutzRt1yTR2WEFjYcBk9b",
  "key18": "2BnVvi1qNT4hsNqDGWz3wXPeSNgwFuhSKS4ohwSPWtSU7sxdqbQKoPRVEJrp1qonxyMVKkLoJaeTcEy1QtaiiWZV",
  "key19": "isf5QPX9jyxk8wwCDedg729XNek2g7niCNwWJ6aJyzHBqtTuC7ono2YznhQScWbmAqW6NjGqnn5QC68PMcdSHgq",
  "key20": "5VSKP8gvnw4NPaoGggbYmXrxjUc3hUjr3ktUAiXH2ABwK2DJo2rVPf3BpxKpcwS2LaAshm4E1uf8j8Ai69CjyKV3",
  "key21": "3LrVg8zHmp4sAxcCSTbTXgBdN9b9x6yrQxcmbckBdUmPkb4uWPDb3zYCNKQ9eazsJR8duwaS6fwzYqTzVgsoCPSa",
  "key22": "58LfCL8rMZ9dafWHpTrJM4ypPaaAsW7oAz8DESSBKeK4g2c4QJKCUBWqLGB1MxyD8hpbYQKAHNzbCAEExutJKXRe",
  "key23": "3bCgeW9hTJZVy8Y71KWGoCJRgWD3Auyobwkmtqzp1pvdmhU8gt8Ajz3o4sJzHX8K4VED9uR9cqersWWsQcLodQQ8",
  "key24": "21i8kG8Wxbb3aBNuDKgDga5dPMVNwE8tXhYFQamcfkjwEnE7hsbt1FQX3BocqfJGLUMNyyW96o6qyiDgpAhYQEQn",
  "key25": "3to9ejwzRG5jZ6qe4SEtRP7WkRGaJDPgoWws2TpVxyZpzUaXZSZ3AW7K6wFjD9HbHcVAGSFNmNhugGFy3SiXCYDg",
  "key26": "2JYb6M4AG2vVBQdWMoB5jZbB3nPJKqCbTuSr1pPqqbYB3YW3XRvM4zpwnV55NBrsr8tT2qxLkTqCsicAj5tke6gR",
  "key27": "36siTPFbGAGa8LtG9Yd8v7iVBQTNvdG7X7E69miowTSuLRsoFUWc5ZWTLUwLWy27m17pgkEiF9mJBVMNuucTSAhq",
  "key28": "2kWZDS546Txt6rLnv4bZk8kqd84BZxkGCUvwx7gVraukWKh2xTVBQjXX14W4muSgmMVQBDaC1XgUscoTkJKDJPML",
  "key29": "3fze4ovLVP41tPUegdwy5rAcgRto7hqo6AcWzsMiYsfyNcZNhhX1LeHiFqQRdudatRJNhZkYUxtsooPPQgrWYUUu",
  "key30": "4x5DZxNqFuMSJgnNx2vZnJprphK6QuRLU1icbK4me34x6FRwTnXcDySYBACB3vNnzXzx6TPdBx3joGSGLqy73cuT",
  "key31": "238cXH3HeYggkpme5dTERvXXitwj9TpqDx2h22JmtwbhnoXiF7HJ5oovhyZSn6CxitYJetiBKjWFrqyfZSu1QAmy",
  "key32": "5v29joww5Ayh3bxkDTAHbkeE4eTiNG3Jd54qKvAWH8y5SxW3Szq37CBoeccbpavnzWd3Fv2F66gxi5E36DpM8HyH",
  "key33": "5sQ9kcYLqmhU3YNLGyY1HDBA97j1HgHtLeYfMYYmu8mwcYExHkyUCYLN8FVcq1mjCbAWrPDFqDrDoN4XQwRgQhn3",
  "key34": "2ukRxdkZgWmxq3jyHcgnTKYZEULr56f6nBLqpsyMnNXrAmDn2aW2KPQkHu7k8HoTMQT7t1HB7RqcAB3BAX4QWDsU",
  "key35": "3jhcT5Ppz1gpti3yptMzQysLiApfYCoxt6V2hcux6LHzZU1pYmXywAfQQ4qwB28YnyDS4MHsxNNFB5AvYo5xA8X2",
  "key36": "5jX4f1TbTpDVtUcqSTFXBUMJzJfGyjcteUQ6JX1PUqynZnT7fpX1awmtuq945G7kNxsSB6MEhjrD3pMgeAjHundU"
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
