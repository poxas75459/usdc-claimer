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
    "6S6dZXCHYFG9NdNAVRSKXLxUkwT7SQZt8dKddK8ZdqBDAKbAWCqo3JeeRxw93TUGQsBRkeEXu87MzgYFN6ANPJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6MsLAnG19YvsJk95G5pu2v7giszqhAVx2RHHmMeEnNMJ9YeZYb4W9zG7mHw8eDBktSCCD1B9uQ6vVFSwtNJutJ",
  "key1": "4gWWeJ2QkBMhMJ3sE3HwHjqsiZJ1rhspBUFjuN12jMyaEXDEVerrfGPiDoGhDPXiKHXLwDAyU7aN1M9D2r3BWGwZ",
  "key2": "5ZgNco1XbhVgxHHWho1pPqhJXonijtskE1ibAVu1f47fMEtq4XZt6LQd5jQqbxbcHqUrrUVejT8w2h19YxaMyVVB",
  "key3": "4moXCn3AnjDgzqCs4gY2mXB7CPbBYMmEvVdoJaXXDSnaK7vk1LBtqVpkuj8Lp2D14z7wUne6nHcxKHTjEr4TBtoR",
  "key4": "3coxwmqGBJcFXSojWKDjGxKjunDvHgozbKFoswB6Ro2465de9Y4km5jCvMC5bAn21p8n63bVY1qgtJtPDWXtwpg3",
  "key5": "3FbkQu4DnYRJSyT3qpmrHSuxc83Tbum8WzqWb9rb7J26MSaYhYWYcJHmJ7Ydb6fum4VM5ohd3hp1B65dKNUaWRmq",
  "key6": "2XEWRronHv4eWrsV69L1YTKpZkyw3Z61x7eW9dJ6YSoNCpfq96Riiyh1WsnBEicYW1ZBA83VrHJcj6PTKcxpUUhV",
  "key7": "2U5k9VB1wfV5XoVJUmuEVexpBWmAwnK9Wda5Y9sLZbaFujfeN3q6HDPYVpy1dWxSErDvb6bKEQkq3VBWywH5RzxE",
  "key8": "33cN2YgHuNTaAtmuuJnePejM8PFRYpJ4Uy4KDjQfVtXw42BqG3hEv1QuuXcKEmYdTufXq56Pvxtd7qwShbpEu9om",
  "key9": "9J4U4TZEHTtuteEVaHBtrC2GAwXhtfNKfQZWvKL6qhhGoY4HBHfeZD4NZ91wnje7oQ5SerkrRMvm6H8rYSKKvRQ",
  "key10": "2qQhKsLzYdUcSUCJsnx4n6gwuGeDKNrSVztThk8nMMpSTLJyDMSw5HUdnQBfB1zia8LnA9oH2qntx9NPyETn62FX",
  "key11": "2jbMzoF9888T4Cr7fTKLK8e5T99vPC156bu5mAXLKBFbmhpK3LqNR5PpgBAkvBrtzNyoHkTk76hSEbYUciigpYa2",
  "key12": "3gx2qMknQ3yYt5Vuxt4hZERWkyrih1arxVkv8nyVxNqBR6jenr3DCCTjTCRP9YzARUvtMh68jfWPCRSZ39dLZrtt",
  "key13": "4nXheM79eE15VztdUT3nRyz9xb7ccoFRCMvNgxfgW6LTZtL4zX1LFvx8ZJMQuhwfpWXpYK7ZsrNyaA9ufmxXpSbq",
  "key14": "2tC8VtRSxiuuMBtuv8etKDuUsNMHFcYdaW7EkajFWTFh4q3DmFxKF9yLVubLwBGmU6W4zCQ8mBBa88DzgDzBviyL",
  "key15": "2GjS7kR7XXtzaKYk3avX8JHrWuoaA9cKKDJBHUt8JPLWnYdAv62Lt5DApa7wFKdydZJ26C1kMGMNbndr3qjRMUnp",
  "key16": "VShZAWgEURzBLPJnCXTcrnvkjgyhZN63xVCjDHK7NswPVfuaKGwrHCZSLAChaSNSSMwBYi9hVGoVFJPNwwgK1fN",
  "key17": "2iPRGjGDy9neHN9ArW1dJ3rzA4aWhyvKU11osY3ebNjjFLCHyzKmyFmmaivPYVWadyLhTg7whgxB3etEv7njqsaF",
  "key18": "4NdPWrsB25PxFP9gVLJec4DFB9xPjvdKJfEKv4WR5BuLGYqeNM3rYSisHoyUBRhmRNVHpVzR1zz6rJoNfZLSnek6",
  "key19": "AkyzXue3FdqubxgkxR2fDVjQdpzEahTbuEUnFWL8eisZqbhU8VhcLR2LS4EJyGdRbbmXWV2hC7wejmaYyMZR7yz",
  "key20": "5HnrJ7aTUyGbNj13z7AApkBgCrJbPy2SYDi9zMWxt7HCWjM4vxnFmdXE2TqHxFetZ6gLMSUQE5ydwEqZVTUpDj6A",
  "key21": "4tzRkie781WXNP8fKq2eAQ7qfW57dK41xhWoTNpNCiGghmHYbsQ1dV82KZcM77VJkBN2RKSFb9ntq4cnrR374Ctx",
  "key22": "3wKgLPi5XeTuhrLiKe7yE6YYkSVAPHy2ngEko3aH4APXjhYzrLbx9nmLmmFCRk4aXG3FKNyKrqge4Acz5JVyeDNa",
  "key23": "5ggh9cFHfznhwqVah5MDJAvWwf7Rz96MDrTUmFrF6C8yn9znCZaJBjvDqvbXbqU91u5DTnXNWDdF6AZ6C3Ctk7yf",
  "key24": "5FNUy1NgQPLT3Fk9FXwuqcYQXG9DXSXGDrsN9c15meJqnKvQaE3oMKWsBA9PE8FkMk3pKj6CMndVkr2tX5ZMZTiN",
  "key25": "35iHUzEjfa53BQwsdtemcCaAF5pYBLuUHxxj9d8deFbYSAbzRUUYzxocMau4tj8hQnH6rpoyw5TnAYBYxZJhoGCh",
  "key26": "t9TQdAfvTs12tayzCe65RfAqTAPzs12uubAGqBuS52JeHfBPaz8b3iXj1rx9EJV1iDCkvdFwZQ4Nqwr45gRqyR4",
  "key27": "4taoAQHnajRVF2m56GRsaE1Zzq9EhCkuKgFraVwG5evf83R89MV9xJmdTtVzjriEYaKK6FwY9LhqvCb8hXx7eTgK",
  "key28": "6RjfWo2VvQSk5CWVWrjp4YrHq38ZtbbcVLLeSfFPgUneEEZTsrco5oEA2A1Vz1opYPYiYZJ9LUoEBHXaV7cgDLg",
  "key29": "tPDcVSmY1pSBm5N7mgZZ7ZZnwgo5FFn1K6YTQRP3zH9PhW4zKCr96bDKoShT9APKihxQt8SzjrC92jqeUYZ8N62",
  "key30": "5HjijgTd4obHVCHSHidwvkhKdSffSL5bTmikudTjZHdsM1UCvXxNFTdbSkViYV2skg6PFGb5RBt61bC1F2EDb2D7",
  "key31": "2QPg3wBPJwXYuGXiursRofZNzy2TKpStKugs2LxMay2BYa7K19HCZrGrW9MMJpFutLyuyUegbr796LH8dRfk5WUD",
  "key32": "3xJSZPTJxmVatdUnKpP7WUwT692ZnWk7w1TfNoYUtEM9UG25vG7N5tqmqwGf7FEtkJCdTKWgzHPYWo3pdX7KQqGK",
  "key33": "4zkGqqACH2ZujxKiewRJ6fT4KWS1eswvd6jFLm6cCAK5ry95NB8yiXX3MPFAw64Wkx16KEBGC5Mj79q7WCLAbhu",
  "key34": "24isjovHnXhb4FqKkrSeWpyeXsV8pXhhdHAESa8Jv8H7TnyVrP3uPH1w3b8RsXfuSwkLpWxngyWqng3vyZSPpDpt",
  "key35": "45vD2JjJN2XeY1fiSTv7XnmsfNSJCvPoMaa1JuHxMVU1YY4e3KQVETbinH15VoZySSDVrEBM5kWd7aEnh6PPARzb",
  "key36": "2oK3MddEp23PSiavCD7J9Za4K7BeJsRcA6wBVx5yT5kK9LyJCC2EdGNmtW2S1PqTN554kymZRbQJQorYGbUtR5uU",
  "key37": "4hHVbSi1EiiyeUrM1xYbpQBr8nqEQdW53PnUku89DgsnMndX5FPCpE3oBeEBtPuvt7mbbq964xj2ToURy9Ua9Lz4",
  "key38": "2yWykTkW3chAsxwuAvkjDjGRq4JdpuQHwqct4SHTGYVJ8b1BaXofknP8G6VuQ52vy5vg5nL54bsCQWLzkLDVD3Yc",
  "key39": "2SSG1RCGiZpiY8efWgDD5GaDaXemWP175evAeBBPHggYxEy5rEexkVa3DgodG3HK1AEqdfrLDmaxreKmfcNHuTQg",
  "key40": "2NdkmxS3CXAuKGS1WZvUY6ke3oxR2PaS6oN2Q4PMZqqBKXY7ebH2BVuXA2hzctFYPpHWkPMJqpZbEyjgFaFokNSj",
  "key41": "bLNrsGbemmbWi1fuauqzQahwTULa6WivDQ7xYq5Jr2yygZCF95SdsN6rmSUARWhzegfFqxKZP1vJboe81chxoQn",
  "key42": "4czNVUWRW1h1cxf9aEXpysmkviy3D2iULt2LoWUi8B4coxqJ4GgBwH5x8t2J9Zr5aLFwMfo2FntWrqPrs9E9LTHJ",
  "key43": "QCNxG6ehBSgKpQ4B69wd8ZU5FZMLG6e1Sb3NGfdgLMjzGjuvyKXAiZG93jJym6fBsmEnWXPpn6MsHj9hV6eLAay",
  "key44": "2rPmW5N5FBVKbEuhdLS4uKs2ngS9DK8FTn7AzwTjK4sK2xYQrm8QFfqJCza2jQmcJ1ea8Lq46ep6rGFMXaT1LsRr",
  "key45": "urJ2WHxFGuiKWJNZHQcHjtDfJAFYD2HPPuEoh2RNyADBiBQX5fZXGxLxb7WKuhsa23k9NQFefmitjnwovy9PNTF",
  "key46": "22dzHpxzV7FQNfwrD9HCpPobQR3o7FPvhjh1njzb86qfSAqNskaEtPb7AU3S7mony28JXujW9QKoh4HGXACVPsWH",
  "key47": "3G5xVtnG7rwRiDAP6w8T62TLufSBqpYPA9KuNhJyqC35fSTwMbLXgJ7zxCU5Edv1yGGWciDu4GZ1T5TENmxjc3pU"
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
