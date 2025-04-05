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
    "2K2bg43xqYjTBBEUeLNhsTNV8GFACFS7Uym6FXegpYbygtDH5EV67MiBGcQPnBiADxuVpkN9Y3acH8Cndodq7MDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8wXquA26jUGc4qAMKhSVE2fBbpEaAnm7tLcwH4csC7nkTp2KR3eFnKKWFf2nB8NKmS5z69mK5ccjYquuPD3skH",
  "key1": "3dC5wyutLfHB7T4j5iN43RndVLkBs6VbqA5tZeUeJJ7ALbkPLaznq5u3rUBo5NMzoPnt4drZ3Awb27v1JLJi1V5p",
  "key2": "5vjgcTTMVvnDuuymTjkuFdFLMTYBcmF7U2dH2kj5sPcxrSUa1nHypqVaMvCAL5cEFJx5eLDhnGxAfMdJ4wSq3GcT",
  "key3": "53yQEzaXmnEpoL1bKFSCbj8XzwjZqrA7eeL3eYVCgasZxVGpgvjeqSfEJoehMkoZZuFRycJfAMiQLUeWCKCGJEq9",
  "key4": "3f1DAq1cfmDcYbWSFhQ98BDWyFYHDhyjKy3SAsFF2GYJRCfZzVT3tWaE8Ji8F86HTspYeRpRh1gh4Tkc4DsxtnZH",
  "key5": "26cPV8EQ3rh95YFdJnWj5CmtfWmRxEYM42nGM7fVrwYezk4UGe7Cb4uY5mL9FpRZ7r4tVnXjivN5XBbrpW8tfhs6",
  "key6": "3jKJUQqjFhP5VyX15NtcZ2ndn5M8APLz4k9rK5e8sJcWbP8Joa35Xjyp9UbZbgX5CaojE2EJmQSzLxR5yvzrcdLo",
  "key7": "5VxMdcmb18yB5NhWSPjQS5THK8Pek9sSc5xtmFzZFbxtZX6QugNaKsCA9eJhSYXpUtybizc2qgAbiNeydCoqbTbp",
  "key8": "LKy9S3kt5yF3deCHt93mBZy4GwF8rw78eQBeLua1wnYQXEi5GP79bjcdMLGWfMytzyXh85ebC57qqFbENgfeqDu",
  "key9": "54BxK22V55xtKrK7tMQfGcrUySLyFBVRcd5jnZbXrUerWSRXyuBt51gG5CjbaSWnCjsaFpdb7Ey3Zm9BZ5XMxcaB",
  "key10": "5Wdk4AwiEVCNQGofqTcXeJ3DbdhTVCkkJeoriNdWTUDrW7pdoM2EWFpahEL4wjd9Hf86FPc1ZtDSGoaSR6FtoexL",
  "key11": "2Z8JdkYky7LLRYCbbhWwzGRWKE69Cjjy9eCTTc77hyocLUUBBKa1YPncBQBvDKgmmLNNsKCzmcmhNrawSgesiDAr",
  "key12": "3WMxNemuttJtTVYwWs97hhrgUKsWV6SSvz747mQvWKzHDC1vbZGBf5KHKiHriFmDL49seb72PVRiZEkzuDR36fdy",
  "key13": "5gTCS2mB2NVeUoEQFhnaAyUAbVxEW1gSnQmpFVPySNS2xRkrbcQJ1FgdnTnfBdzFyuM3pgkejtfHz9aP4njPeQuX",
  "key14": "2tCjYfRiL2JAPYsZq7eKdxex9P48r9CJAeRZbvJ6neAyjciJ9KY33oaF8gxeWMjZsapqocWmBUjDqUSZNR7VJxfB",
  "key15": "6191GthoWJeqE59zHpoFdFEQAGtrEiZTEmHdwRv3ruAeXzxQPsWdPvEcpCghJ5JT9noKTnRYnJv9F7XMu34ZTRu1",
  "key16": "4QygpnJZBZrgUPjxXpb71q4gs6ng4MBPvHRMo2YpcnZYpP3jteKBmaEuZR8NRri8peLSEp1SGVaQjQwrc9j9Sgf7",
  "key17": "2kevkEKcavQAnYJhgnG6WMZxg2g3Xu5PBuyD6YjNUcRvMf6kxX1WBZvepbbBaRvqeAFHnEcTRnBKDBosuVVzohYv",
  "key18": "3h2zjxxA27bYsn49kQXCA34PmHNwoJd2eKuoKZmvDtRTLiCe2r9ANYxnf7dz6vYzsvfMizFG21seefpq9GBwXMPn",
  "key19": "2W8zJGHN9dbJ4d8CruCA5THHyQVzxwwuc9reMaSsBa8nLqD6QqQWHSU3tHM6X5471sW37a7vb4JFdr6L6P47ycy8",
  "key20": "2pErAbCa9jcKCufcXuURqopvoYm1gpcrWjoxq1XiMeskLbVzkhK7kyxX1UxWztviYjPUbkQbAuXHrrU1nGtdPQ8K",
  "key21": "5nkKs1hcYfHHUzYeA4Wr4eQjNyKjfrUTmGhBoi5Pt8Tq5b9CS5RAdSdUma6d2PqnMH3qpTYJyY9YYbwzoHjtHtsb",
  "key22": "25iDECHL7gWp947YAeGJLh7vhi2SiJW16V5AF5G3eVwZDzzLhLBsEEenaFeZhwMP8izF9kRLucZCZyvS8hhTfyey",
  "key23": "515KLHjUfyxiipi9LotMRnYWagvYio7KuE3sn6SCy5RvQ9pceuc5ZyCVDa2NBtVFCkpxMVrZh21DWRXF59bMBaRh",
  "key24": "2AfRg5o4QysN5araiJQFdYfbCwzv51RGLiWdEvUYyv5R9gmxzR6Y265NJUscGbKCZEg4JXeTk7La52TGDi74q2L9",
  "key25": "4DZ6RzfLRTtpXWsmCjS8xQ7Ct8BBg9sJY5Qw7PhHLBiiGMqoBcQo2pUtRTgujZ3kXcoUdWQWBGGgnrxEEmABnEw6",
  "key26": "3DVzWxRAgScBDspVGoQVmeuEMt4vHyKzbv4Zs7zLx7arJqpeA5Vwc5AR7mAYSL3eNP8fJmbEHnfmDu6wziyghF3g",
  "key27": "2WhdLpeQ9JudLefwowQDxHxkDAdxnwC9Ax41wAR8PpXQY9CvNZLybxMtd824qvSoA9S5cgjugnZZ8hHqRWAYTRHA",
  "key28": "5DMkpdmUq8jBBdw9kmadUNeFQz5Vk3XyKYVTMMfxdbtdpH85aBVHS5Xob25qgZZamNCaWv4h767im7jMxYvJs8rh",
  "key29": "6fvV3DW5A15rtoQygWRKrPUPXijNpLECVtjDwqmTmUKedDqjvwVYUiamfP51PLC21fMUACGCgfhEDxFwgJcH4uV",
  "key30": "5Sjwx59ekD3o7gwJ5pQYmC2MHUTBuQKdK5Y9ykbqgpSrAiWZW4BspUVfU52Vh2gvFrJGDLvixe8uzxCT6LFnyWqQ",
  "key31": "mozmBmTXWDPWP8dh58Mg383Q1bX7MHLcBKMsrSzyDDxwFfACdAH941WeD6CFb1hrixAoXfDo3cUmjrHpkdGbvwf",
  "key32": "JSnaPbhGXZXxG8wcLGXkzmkwnrL2wipYWnngfVDCyWJxZyGZ2FXrXhjB5ysavadAjdk7Cbx8eFxzAdULGdfoYS6",
  "key33": "4xV1sBFvykgqdFZWAMqrh7zPXEkTpJJRuP4mVXrWRiqiVnGDUQx8e3TCRuaLRBwgH1voGT5NqYoBnMFgUrzd4y88",
  "key34": "3mmEuVxgr4dEgkmtv7wdG7KK2tZjpPCg4UTvyVrA9Z2qqqHYFVg23FZTkJYCxNVm4Qy1JqbQzFjgLtj8ZssES6Tn",
  "key35": "56ff5ykk2xgHe48fKX2PDRyPiCRoLAop8fkrqesBi6t4C47uQz4LN2xjGpLsTn92PSQQHL49QTe7xpHssVrsL2K3",
  "key36": "5gU4M8rPGT3TJkyvnxN5HK5zHHLbPWJovMLZxpyR6QLnqvn3wrMyiDjHtBWQLanDxSpnC8HM6BroobRVGdc7ZnVn",
  "key37": "3zyShFpC3KLRzgLDKic5yBhPGRSrMRQ3t8PR2Red8ZPxeaNC6fx8w2SaGa2NiPgwVkk6qdix3ssLdbNzuZ9q8fsa",
  "key38": "3WUvBKvcTZApP2C4WeM1dSkrXttEW5DBuaYJF12JBzEtPx127CnLjZZMkByuSkoMVZahNTmX5jHLyWD6vamLV8Sg",
  "key39": "22eJTLrRNnkugtUKcspTz8uWeJ8BCekKePSjQH55Kn99USkq9rceFbjTsAmLr43sPoag6HpmaBFtghNCtysoo9hA"
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
