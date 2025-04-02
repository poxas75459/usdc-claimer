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
    "4psfa4KFrSyEpcnXcLNyRP4J13i5yzd9h24FvJH8yi7vFwaGCChT32jwyV1JStD74TGXxLT62gAmkb8FwmZSqnTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAK8pXUxNgjewGBWA6xTvZv6aLFVvFyUwaPHVj8E2Fa8xbCefuQBZP8YYvKXqnjCsouUNEpLSZ8LXdhogoyLvgK",
  "key1": "2gmDVD8Dcjfsg42jREQ3KM3y5TkTfEjCVpsy2LY5rBDHdFZh8hpXrwbNFEz4c7oXWKnES821hQDv25RDF5h1rxD1",
  "key2": "337eqM1B8LHVvL7x8uxSNo998ZprWixpMH5JR41BGQgZcdvAmwWjpApiDR86v3M78a6k1QX85jbwxH7ecNEvcdgN",
  "key3": "5uEZrNTeF1w3V3SEX3DUQrPHSFcgvh55RkAk6ZMKAKQuS8Y8pbebJSYuceLYgZkuNL4opP8ahWCGkzECgrKRQcGq",
  "key4": "3iRbnsuqcYZuyjyBx5rSe7txNC8ZaACkQRZv51wHDeyPhH6cACvVNVnCa9tamK4xujJWDQ7eAQjhrzfuNDZyyvVz",
  "key5": "3f9LeN9TAmX17HeQvXSSwPuRT9ZikdteMYbXp78QB6CAMnaCQRLaQXjQbD473xj4WSmnaB44tXrYzFdL576TE465",
  "key6": "2gQiptqbcRxXceyRbLAfebHcU5f7E1WbEXCopWM2dNfsJ22eG5Sw1UxMbf4NyrrjeGfHJebLvoU2LSTzktLPSDt6",
  "key7": "5rbb2m9xSWQxCohZQGNE6cZcSmYG4PbyRLkWh8thsVHJM2aKcCvQD4AWDfCEMrnrEQJ8LNqDm9cqnViyAd1hWXpN",
  "key8": "2Pw7Hn5n3ry9fcwexnDiHGMTgiSw64TtvXPcESXZr6Zsh9qrSqtfLvZTGVbUbfBaJk5wYVMVsA76P4gKtZnZGR4T",
  "key9": "3Q2dtYnMn8nRmEhBSyy2gCgvriDagebSugh1dXpbM1mqJDckx7pZBfS4BEctmEdxVW4ziFi6jSEGV6X6XiwPE1Zc",
  "key10": "a6nC1NqxHJfk6w4UEGoJaQZ4TKNWGBqAZucbY4n14byQx4uBiCYLjFyx51EPhpZRjRLA3CvAH25rywT6nV9NGzs",
  "key11": "4ZGFWi7Tx9KWw9x2pLXEfpbjJr3A635T24cie5HMAgeuxvt4mU2n6pRFah1CnUvmBjhJCuw9NivWo7RNCqS6p3hT",
  "key12": "4ztw27SCdhDGJyasriazMRRUAUdZzRKCNVbtedJj4UKnEKHHaz3hNNKgHg1h374WSXfDKUk5LshrTCWDDVnNagLa",
  "key13": "4DejC3Ab2UNJVt5zTuLXzhaRNun8rUugBCHQfAKqtyT1SSCRypdaEoNHoebW45NZs21hJZ7F3oiyxbTLDCA6YBU9",
  "key14": "3JeoGXm1x8kR5yibsfUe9xQ1bc1tZsnb46wXE8nngukFGpH5Au2ZqFb57T82p5iUA9D5gEqZKEYqC2uFSL2X7XNm",
  "key15": "48XzuCbcT27fvqdPqJm11JCFjK7hdvpfTDrDxUxpPuZL6AXmmsraMrsK5WngZ43Abm8KxfNZieNVtasHSE4f2YKJ",
  "key16": "r6dzvfXnaNmvCSNezJNGHkmGAbzvEXQqJ54NpTMAEbLVq3rDU3pF7KTvyFy49sDyPhnPNpSgSAyYmNPDrHbbWwN",
  "key17": "5SSusftH8mpj5RQGwMVPiE8C6dsaSKtRXsk3KT2G4xUTaPQddccoJLdFiLVfVMMnmwXFcPQTbK4yxM9fXekLPPFm",
  "key18": "4EL5ULkYNKWo9nZZgry61F7yePnoZnFEuicK6XKNb2YeBk13W7w4Tm2xiRLp3NE181QdB7UVfw3uPeEUC453NwLH",
  "key19": "4fz1JB2Pb34SHJfKVhwN1qWHrdkCwWa5gbUVjg5GmBx2kvJ8RezHKHk4tYJaWpQMyvqstced98vjzMKwZ3uwiLAf",
  "key20": "5fagWutQCwwvMJ5P7ADAVnV8q2HTzUFBUbX2YmHHqxM41MRLN4bdecvPkqrdb84TfjFRTHN1DKfiJ3og4BayWAiB",
  "key21": "7Ha6gf7vteMZ9QtoqsexnmTsi6rL7Dsxq7LtELZcfmHNPqK2tNU2gYYcuqwhoRWbKWNbvhtmz7FVizaU3dyAaNA",
  "key22": "2XwC1d2axfbfpjXgPaTUxLCGFaiLJJCNVTS2X5SeuNvCNrtMzgvKhUg78rMNkcs4g7qgmFWXszohaT55sGWtrf18",
  "key23": "575ukxhn7Jvb2WgnsjzThKS56Y6oCrmscrGVy2LpTEjnRV1JjzjJXNKHvYWZSR6phbVifZSPURKLtnV11FDVshry",
  "key24": "594fGg1sFxA1zTUzqURP9aasbSGLBqAN1jt1XLBCc7gvYxWFDXaPJsy8Zxz8cp8J98bbQMpbKeXHYeLDJdCfKUCN",
  "key25": "ytpQmHGXF8rckr9KeTajLT61xkTQf3LtFiooxYrowvgGWJTF5S82SCegLnoYFoipy8T9ikQins9YSiANB41YwWQ",
  "key26": "3ub2uKwjiFDgCHG29jCFqf3G8ECt5jA74cXxqM3k4yF1a2y14tSgmgg1EqBbDZXhp62jjbEkv6yh1raAi3YWUeY",
  "key27": "4TUjBfJKFRoBUqr6XViLPds9TDVtNwJbP1MxENkuGqgtesQhAmkPYVcRzTVBWweSC4TNeDW9EHfUTURss1XcLzLP",
  "key28": "5VXruU7YhDQj7w44oLyqdBrqte3qtFCuws5a7Ph3A8fRD3FHHH6yJQRVQpfCMcQ7HXA1EzD4qnyQsjfVHttdFdAE",
  "key29": "H9oxZLrLDunHMLNXaMskTr3tJE4j9kvvriDfyfVCVzrVtsDBaMqcXEPVakCAwR3Hu14omj9woJnB3YyzRXXy2SA",
  "key30": "4YRJ7Rz42xLuRPuv7KG9pHQDFJs56KqgYiy3HqJFUqzv4qXLhjdpQ7hyNkLeXCPesNUyn1JePW6xm96bk6UstdQe",
  "key31": "2sbqWE96sLnCfjb12YsEw6ZZdkbNKLs4sohzv6zhggQT43KLuwR8g7ie2JRZsiHt2Y27NDBp7FMTYS1SWdorzNP4"
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
