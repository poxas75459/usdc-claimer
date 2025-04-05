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
    "6783xgWFGkJfqDLKdMF6cMvbfuwJawpCGFfQ1pyk7i3HUeQySZVyPACSJfi7voumfaFnmERjm6z1QUVJrn3e9N45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38uLFg2hgdcQwJtZ1L5ifqXRvDRC9mKiExwjDt27zPJgt85Dxbe635JYHgD82MdkUEXMKZguxPkdvBu2C7HAGTnQ",
  "key1": "YVFWyjC1338uhS8mmZGS9gYbmeFySHmDGu3GnXUSgACxmbceCtQouKgXXU5oZm76PK3t6MEUdudtpz64EpbaKEk",
  "key2": "4bqfKt9CqJ2NAUfhqx7YJWD4HnkJZpsb8ePBoD7vHbtvirJt9pjiMh7T2CSK3QQdUwxfMY28NukFM6aSg6Athge6",
  "key3": "33N2X85FrNYCSttJX7qn9qVwAAneuPocNQYY2hvrp1Tm2vTs1NLpYpBANCWiNQL7UDeeTtfEEYWBEE4E1kumhHo7",
  "key4": "GXG1NdYM1dtFfRDZHvZNdBkhQTdjC8jKsQ8X4Zaza9cE89g2CMbZAWGU2AcZfiu39BjkVvkx2rxHQovNRGS7sES",
  "key5": "56jaTnuV3kp5eBeuzfrmFw2q6HgfHRKKxXHtAB7geGw5VjArrnkfSkxbq8SbCy1o4UvPnjTP4garUTxD1p2ZdJGU",
  "key6": "ct8VMSzkuGnWpyAhLmjL2KGQj5rij1bY3ZyAhJN77R344uB4Rmkobuenw5Y2ruU2AwGbMEbdPrKGAehYvQrHa2D",
  "key7": "2mezUig7U6MpTVg5tGRAb5KJjL41fL6G2xGoaCVnaanAgjnHhjUL3BpTC7LU3RANP3d6nfPLq1GCDtchCG6pzV32",
  "key8": "5w4Ttqnutu73yYmy5yr89SffJ4yiCYSo7RCCYg8SNbnzMzfNUJXvmHz4JWifjC2gKBQfLzkBWwQrfV86mV3Z71i5",
  "key9": "USn812Ws58BUL9HxpHjt9RY2AEwSNZ24pmuRkeX3Yiac1HbghXmFoUuA2T22s1rRWGVjFfJfo8TwgisoMB7Jhzv",
  "key10": "2agYCj16xZEZwMArFgqaUza4wBXiUejrtit3EHrT7iMp3rMzSkBdgeszujeDkMnsz1Zkg7yNGcQmza61szkk3oNP",
  "key11": "3GdtuYgc896nYhrSoTRAkaQh7XunWKJR8f2EMP8dwfhSNdowfCSW73afx18hmeXwHfVQpm1HmCR9J1FsEKh2DPpM",
  "key12": "enjSc42dAEHhPWXJFs18gHm6fgWDkoCmgGqSDoX7FpHpfPXVNpH8Bz9JM4wybXLTWJDjcPABDHaM8FQzcNKLCZe",
  "key13": "5SS1fMEB9W6BQS5S4wa12Rfvu3gkXYvqZg2kszJLgLYkphN29wzW5FMbgtUqfdsQDvXbvhFuqbbXonqC5QCJqnej",
  "key14": "3Bp2zJktVumgHPQiEeVgFYrBNVgKHku4emcxYRTo7TXSDzwE3C8uoBFhnRZteTui1vWDE9dMGXVWDF1y5ozWcyRC",
  "key15": "4SCoTZ6qZ1hnVm4EUTRPeCkVXBAxmoPz1xRE2k81639WALHhBsKy8Ae3p2u19V7gnStsNw8CmVptDUWFtroP8VvM",
  "key16": "GLqjC5yxJ1DQEZE9V16XFJoyZU6SHkvzq8EwVprGJrHe1A3hz5fYrt5pxLp8oHNBFW4v3Eps7tNiC7jBtHbjs6Q",
  "key17": "2Jrn2jKYFCDGyNpD2PyG15zmRomuBAfS4iBGWqoKc5n2coaSyu6ZJ2V9kcwJJtw8HTU1FkxApKQCoX6dTGwEkQoZ",
  "key18": "4t5hFJACX6XYKuBBLj2j7Kx19RSU3A8uYt4Stu6xgeXGrE5Cx4Zvkx38EwgoBguSpLGUK75DzueFZYnWTkHnetA9",
  "key19": "iSKHFyMCXxUaUqgrBPgkwzxH2ZoRrz25Nt2vmhSarDhGswPUyLj3SvR4Z8R65Gt3Y8x3Zt89hwq8SvC3dUDqLec",
  "key20": "2bqyTNxPPx2Awv11jo817mRPp9DhtpnRAC7wHBHHPS5PfoU3LBG3u2UcAcB5ypBFBWY4t6jDgJpnKj2VmeiMaSr1",
  "key21": "D6mDWKLbRG1vMNk6hTxVTpw55AUFd1pyRAGcyoD6CW8c61f1C8ZYrTLh3MqdNtMGjiHi31TU44Ujx4JwJHuzjBp",
  "key22": "4JYnJLu1mjhhL84QB7eHgpQ3CDkqT6iLLdvdq8DjiJeQBC14pZGnuqWgyjbkEdpd2TFDRhF9jz1WcWqLTpD9dTQF",
  "key23": "MVtNWUJD2KdrkSniQvdw7hbe8ZF8RiuBpDHHfvgeHBv4voLS3LePtaxZWT1gFWMvaoBN9TvDqvCpLQySsPKctHA",
  "key24": "4FJpJuyvzFw1EMzWeAeQDRWLUqNgreGP6MynHX87QP4rtzBjEkcw9tes22BCbgBc9KSYxqTzFcrcvbbuFc6RhWpC",
  "key25": "3j3Q717s73JM5FzgrtXBWFRybfnYXeQMRJpBt1s53kt5dGxhgT8eeg3WuNiJnVVbfdd1pBb2ifk3VYe1A7n5JyZs",
  "key26": "2f6a1sUh2n7kYz1KzqBYFDmjjfaBEjftZnA4wioyhN9FenJwU8p1JWoyxZyj2p3FVaQ4GFsQFHSmGee4XgzQUEbP",
  "key27": "3HJQ5ub995mA6GXszxS7925GAXeEfRCd4HD3TUZoQLeZoZoe7HCJctSYiBGAJBSg1mDpiuosL9pbwnpNmCqbTnXj",
  "key28": "ze6FKUPzacU2RYHQq8ukesnSuDwLaRYeNJoHTuGEpLVsHD6XeUMvhcNUahr16HiiQR6y25jCkdmpa78KSR4Pran",
  "key29": "yxp4XqBWPY3XV5LEEnZHrid6Lm7WZm9H6bE6imzS8RKSWTTB8j598DjPMbdoAd8xi38tEq8hpsbV4ruCgoVGf7Z",
  "key30": "27WxQbg5Mss4er4xzXxj5byQqRc5zUAx7T6tcsqR35qst9PPVciT1G3cgKjX8CiFpne4ysnzgepFNYnbJzpEubCR",
  "key31": "2D8pNPwfZjBFnPchpLKhMceL7CLPxaP13k4RkbLPQQREPQSSiJZ72GbVp5nAooMLEFFvsbd6cBf8A2sAV4ncdhAp",
  "key32": "4McHr6DLbE6NGodQfJDa5xCvyqGhRbvncC96Gyufs8bKx8hm7YBkha2MNm5t1gxqC3hdjD8PysEcMP5FwtgphwmZ",
  "key33": "3WcBqXeaFxCpsijgDsvo8yVbHeP9UnRc4Lm1iKWeum2FLCudRvqce31442iRQKebhtG5HA55Mop6fsF1DiQi2XT6",
  "key34": "3hEuWMfnWSLJF54WEkRCYKmbAji7baoFFVxxaZch29pXQraxXbDUBNoAEi6RV2W4eCGV3YYbUVb2o3CLXjrjiVgj",
  "key35": "4We1q7yRXyHYyoeE2ZntfBqfvKgDMbCfBcDUW3LdFsMrxYWqt9ZoSkpX1BCCLebYASppfz9okGoMESpriPY6zSjH",
  "key36": "4eBak4K4oUL8i1vzi959ZrPs8YacgLVrye6i8yZbrPpfEtNpeeK6XGpg14XfM4g3fchZLvVc6ZPY9qum5ZVno5x",
  "key37": "5ToAhiCXPbipQn1hie3UHGP5SXSGWH3pihSUadXN8tSm9yFnBdY3sDL3BfSXAJVeBHYWFZ6E2vnQNGM8FqwVBkNa",
  "key38": "4EBHjNU6UFvWpHf83MBEdeV7Wh7JafbKP8Uj8fr71RZnEdrtAoBMNLeZf9H2YecDEytVDXezQLk4UjEAoKmXqZFQ",
  "key39": "25cg4cJspFowSuEVnWGpUHj2CQZ6rWDZ3k54B5tLQEfWzSxbuykSZGdJYg1mJehj9tgkU2ovs63Ruh67rnGgRwuN",
  "key40": "26Mur2NQpXfLRNFAJZPMQADQYPeTUUDWj9b4Axd3eobau3GKHf6su6L79mKJ6AXsL96NbptSUjxK3bmFgcE9wMus",
  "key41": "3JdXLzooWNcpYGKM4LLV5NAvqXTVmUjyJEbLjyUZcyRPH4Jdw8vUDyLFbQ45dSA6DsL1MeaBJjMFsropjFrHLCHu",
  "key42": "59MXfvaRo2x3YrZDqBKgnrdfxtwkLsaFfWawDehAFW7urhS8oBgZN1u7dAuL255wFPdaZRqLmj5bGPFF3qwGxioX",
  "key43": "3Uo5p2uqM9BhiTqQpNpa2U62EYkCrhbhPg27qmVugAuCAYmP2T9yZJytfVdSev8p9MNFSJ38pzEfbnD5oMjK4QSX",
  "key44": "4rskWWtnRQKKryMLKYSSTqik3hpcXwFrdA8iRURT4FFjNFBrtQP6UzNy1ShjhR8dnCqPGg2MiQYfjtg4UshZSVXQ",
  "key45": "5isAPxZLFjRqsemxQ7AmBKLHhVvfGQ9hMfbA4tUrKB6oqUmhn7iNkqx7gcW4QyeWG2vGEPPAYpLs8BiiKKzfmGyr",
  "key46": "4HxSVdLHQExVpmVpLekeU2yASUYUBYTzRXRdJd5HzAvEcpF9wjWAece4mS2F2DkFKsD6JozVD6t4vB8v5uYzdfEx",
  "key47": "4xUtovVs6kiQGed4vpqDaw3Tunu9FXJeiRscpUxvpdwAYitV37Qh68vFi3t1MyG6JkTX4bTpSp6RMDiC8xb3xhhq",
  "key48": "2jauK8tqhp5M9oNsrsZTNko6gxYJtGy1N4uAnbAxvszbJ46ViNx2MyvigjcCjwz3n22tPZtM5gr7E1NBmc2UJvAs",
  "key49": "Wa4AkAQMjMrmv1Dqe2sheVr8BbgJ87SHagAbdViYqnH435hnCXE8dxRQ58zJEhSpbR3AQAM7zBZgks8HbyWkbrr"
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
