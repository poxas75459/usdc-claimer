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
    "35sj9GaDrozpGNB8BN9pCTqZYDsmeP1vzzDFbNHT7Y3M7kLSmUWx7x8NY813gEMAfLHCjEnuboJiPvyfnVnxkX8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fq77b7To986HcqAjwZQTLyZd7u4xDeAt4iBcGkqUMbrHbKzxkZMXeN7XSvFJFCgE9uiy2tYrdZciYX831nRPvn1",
  "key1": "nA83zndMniaHuMVZ4iwCeMoZFqFj5yvb53U45em7kPHwnBdmfeQktQrXJxAdDELqw6c9fvbHyLuHhLSnpbMMCTj",
  "key2": "2joP9szBuEc5vC5JbDqBfpJf7qn2xq6wM85GbjefpXCGr5Xmo5WoK7ye2orumcXU9Ge3spo7irmD1HXiv6eLYnag",
  "key3": "3yEF6gxcL3fgmcKxSC6muAVW1iixLe8RuU1DuyJsRfboxUKqDzstEGpuGXcdshUodubkcjSmaK1EoQyRzoriZAHv",
  "key4": "4XMiKmoYUxCZZJyuY4ngvgHPabmLzNf5Lx3XyysVnYHF4raWputfTMR65fcka41axBorCoYby3ZbTsawPkorzzYX",
  "key5": "2WMosgNpGtEFanY4o3SBqHWL3oB7G6H9SJj1DAXD5ZTR8hq7BQeanMZBTT4ZPnjSmGa9qswixnx1Q6Q8qG5349Kf",
  "key6": "uwU5W1jHU37mY7Bebvc49exMUhybGUWX4pLZaabQmbzbQC11meXrf9EhtCsvgGKsMu1LnU78ntJozqjDeX1Wedn",
  "key7": "2VMhtan4FuMke1h4Th4D3dUFLCwroEVbwwUZgb65tYNbtsnvCKV614WNge1s4UZ8D5UooBLRPgEEecjWVLonG1F7",
  "key8": "2ssqeCa2SSfBdM3BxXa8yZN3MVQVdjtDArn7fPpR4yMemNpTCV4rxmSbzGqsJgJFB2cP6m314iMnmz7dXdBNpZQA",
  "key9": "5smow347xm1PVkaH7uxMLz6pKBRiYN5neWQyeAPgh6b7FnJPeAxQAMSnJy1EsDsAbHHoobaZYZCfu8NYmLw5FpE",
  "key10": "4XiFVH81MwCjPNW1pR9qbvmx5dHudyrdiH7okz6amKSx6h2qtHfbasyhTJf79VioMi7fo3jNy2sWDPNZLgW7QcTZ",
  "key11": "4xdw2PkeQhNcDoBShuxZTqu4M4KXQaDhLovSTNhVVRrhLsS9TcCbUyLLdiVAKKgzSnNNqVy6o4cqM2smZpDfSXRk",
  "key12": "2RmwVmoeDNUHQnLi1paMnAQw8zyi3uiBP8cuonTf8SSsNDZWico6P5nhFs27jj1FBGZra1po7ySL3J4r1NKJPZsZ",
  "key13": "4sZGAB2GKiSea8dAw1ifmfjHmpMCuc8GrbiBPgpyZsuko1WzA1t62dDBksTywvSp4rXZfLQBKdkKyGNFj6y5F5eU",
  "key14": "3BHhDkQnj3YiNHkTnKB29j5gS9USHwd1Z6mqayRQQt9Mz5xZG69ZNNQS34eyuMYeNKAbFCUT8oGDJ4Zo9D6em9X4",
  "key15": "66aL4EutqJbwS9rWxEPbRekHit2m1Y6RMEAST4De7agLuqsLM3iNGhVHu5o3HHZGSBm9fEkv2Dc5jXmccn7QTcSL",
  "key16": "4eY6LXYo9vAt5tsEQzpcLDeuHW4vE1qRUZqhWoJ5w2dDi5P6n622wi76aML2igVRp4zFg5CGEUGmDtVwzsnr6y1c",
  "key17": "5SV4PDjFu4AG6gvexh8dkccAVH6HV342i8auZ4zxDbd6hPgwWZ4vzuGCToFJRnws8A8XzrJzdGj5uxCTP5KqiSA2",
  "key18": "3H1jb5gBvAcTLzJCBfRJdHkoA73dHNxUCWKWgANGJvjiLDKe6AVbCW9ZMx7FoZJFb7S25Q45yyeN51E8kXH6Ahg2",
  "key19": "tNv6V5GDVYJd3znKdJvgUL9kgLFZzpiEYeSVfdjNkYDrj5yeqoQHkpCgCpb3D82hPW9JUsj9K1bay6rDRWnPX4Q",
  "key20": "4cL3eZ6CRXCj2DkHrtdJkahSBjdqWvvNcEgHZRmFZVXYN3ee8cF22UTWmTNxoSWjzdq7YYeb5C7ZG3tsMMtwfKnx",
  "key21": "2z6CYcdpTMCAsFaKmghP2KggkQ2JbNFsumnxUqoTwDKpRHCkBCgP3yj7MnU6mxXykFXRLVHqudLYtuqMxKeGhYUJ",
  "key22": "K27Qg9AwSvTHBU8Np4fqpi362qaaz9EerRkpvcaHxrniQTM8D1EjANqF15RC5wQ9U8sGKuRpRPmFEjoo8DgqHyY",
  "key23": "63bYCMoTwoji9GKYiq4hy9sdQTjiz9F8P6WZ3tkMaHtZ7ctF7dGg88xiubGnRbqdrdpcontaKQPoomdDZTkvHmrK",
  "key24": "5ZPbCfgLvX9f7hFFzRSVvHnGbVuraezWjWo5DEbQ76d2LBgEzwHt6F1zbXnzWY1VsfZFeEGWw2KDQ5qytz1ePM2r",
  "key25": "53N7WHUJqpKJS5DJpFpKQnw4JMHi2FmGLz3htjt3JAePaknwZFEAbZkndUntZxhRmYKLx7dmEnYow2YYp58u7njN",
  "key26": "3UUTgYMDUBnUnb9W44SNqUFNojfzShX8dpTBT4MG2uoEW34Cmnimz5uBSLfPuWFWiKxckRmkKxN1XU5AmXgG4vxn",
  "key27": "X7bXxT6YfBJFg92gPDf5y6n9Jpz8dQN7u1mQYb26mYbvgo24is9GxsDE66wQ8zn5BAa2WxznwP8EDSC6m9smrd3",
  "key28": "4xsNMw8qbFQxMdt8iGAwFwSfNGaYgofTmgw5Gi3R55EspqxNJuyQE2EsXnt8wg96v8uxrGzPEXioh5ENjYJnHrck",
  "key29": "DJg6r52DGjcU92fwRDHJqCvRKLFTUzpdvmtouNzZ1EMYGa5b2z8ikTic4axLAcoxqhstQHhMUp3sTY3JGLguXPf",
  "key30": "WcG64DLMPhJ4wCpJ9RFXoj2Bx7c2bgQN7CvQjPvPzMNJ1ozgpLQkhmhnkkguG2SDRKThxbVzvxxa1N6riBPj6Xg",
  "key31": "4TvA5RytwWQJ3aqLJyuF53PRHG6x4g6y9AyqjS37pBFfaGnssAPNMDyARutctcBQTYiaNDBd6NtXw195u5v7YvH4",
  "key32": "3vLreFekK1j3wo1Xa1aPeCknZVP4Zygfq7C3U8xcuTpsi8zTFjAqCgFZsR4yvgTC7spFQvobEfu25Xp7bRpYiFpL",
  "key33": "HfcsEDcXLbmqgUrVy9FJWRGjv9T6DsD4Fkn67inXzNaqrmxkPday9DaNVawAifYEUymofuvkXWATcTw1BBgSKY1",
  "key34": "2wfABxAx4yD5rJg4e74M4QWXCyCABdktmdsP8RsByC8YXWq1FR2f5MG3v8VpQPEw74RHGLrYPo3HgB6iu2dRkVDZ",
  "key35": "3vushcsDim5xHPXPQSdV9usupWVhuXKeAA2HGqox4c99PYE7VX2H2diJ5ts7czqzeM4wH5Dd2a3BXcaYSx6crVey",
  "key36": "3GQBJPcbnQ4TkhmhB31Tw3agsXebveo6MPJPuZs57gA5SmU3hiePE1m9KZxAcXhXAcW4FUBCwqTTkD5vcLwCDiTt",
  "key37": "2euL7m85qRdF9SMwfMzgjUVZLBoF8w55XN4XpMvuzoxvt4oVGNLy2efHxwXwVG9BtUYwE4zJ6NoNQxm59vAVKdWS",
  "key38": "5e55u43xjeFqDYCPEhXqh8Pe9nBoiEhTHsovLe5yaEHHpFf6sf49QDDkgHG99eStuD7TqWKiekcgKeyC1nozuqMq",
  "key39": "5zSyCJbDurqVvckcY2q46YsdjUdRoy6AK8eSardq6xkPjpqvvdsUBoMBUtWLo16QcsT89MR2NN3xbhUeeFsNwawf",
  "key40": "4LTnbs5RRy8YGXuipDyvbVBUaT666ZgSrCBr8iiRoiaJMindm52tZoDLUpsiQi4sBBAftDbNgZAGeGKo8aAAQe6v",
  "key41": "2qeoSCHmiJr5sNb71x1oBzjAhkLnFwWWTtprWWcPNdJRFngN6WHTt28kFdMb92XVsawdArf5ns3nU6AvAJ6b58Qg",
  "key42": "2Mq4Shk75F2dg7eK6mN94DJTFLEccSxdRVbP6d56sEFEC11s8cSL3F7gMhwzXmLZJr54o3JVNRoUyzWtMXcQXhwu",
  "key43": "4oJwfHs2Uo77RbYQ9VTNguoDUTLUPsc1rWExAxjZycQAX7kPNAEa4t8RV6cy58NM8hbYzu8YtRMJ2rfVoF2bz8x9",
  "key44": "4uby2SJiw1YBzJeGXFkqzfaVbfMYvgNLoS89sCpdeCx8o1kfnadS9HpqryoSuGW5VwwpUY6kWVT4p5sypFB7FACz",
  "key45": "37SV73mjWoYh2Kxi2UM3sTPkfYJKyLhLGW1kYbW3kEF7t4q6BjaUd4seA3jEsLBwW1zKn8P58cWZSMMujgsPLU3g",
  "key46": "3UoHv4Z7XUJBdg26fKwZDGYQ3rmTVhmQMYrUwjUqYq7boVraSz9CU8x8WM71kSmiKf6gkoZEEPv5Ymc1cre1rQFy"
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
