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
    "2KrobGoMdAHEJnqghKS8bLbBnDvmNmBFPjwZh9ijKDn4TroynwaQSo7WZxUBPZHeVXJvW22gWo3quhTMBzWQ8GAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDQ9noSseBHoqs3YLAuZ7xESdsLT8aTugYgQbr6YQQk4D8ftmsjyaSkdjCp5wabS3qcAxsxjFvC6mFWL8peKYeX",
  "key1": "3hBZDSoZu7gxQBU4tUVjfa9yXPJs3kHsktxjNUKi5THdRLpYHGLSz8PHXtEmRmaGj83icc5SYMgFvJf35XY7Hunx",
  "key2": "33GQn3eYfUXSSKXsMraMPXFBRD1Swzijc6NjoTjxUn2tuZYehCkPUTYbz1TAWiFmay5gtLcvizmyZ9BN428oqYxC",
  "key3": "2ydXUExwWwLtCBPG48H4ggdb7etU7bbYWKaLk8A1991DvMFwyGBCRNC8y1bAm18SXca64SJo1aPx8RyEeNcqjkBk",
  "key4": "51GSjZrToSyLJe16pGwTN9ncxmsLkdC7x28i6FkmoDD7fcwfRMPKDNEfNQLpwEXjgfoiLiLct8TjLHfCubHW19mE",
  "key5": "3typoT2j2Q526kDrtiY6zjKsCcstNBSxBmP2esmZ3bPicEbBtpXetnDg6eqfLQTVZJczdnmJo1pDUCx2pc73bdpZ",
  "key6": "2omNYw66uo4k2C4CEc64BY7dA2G4NggWgVU5aqdEmzKyWeoPo3VrzcjttPvS886hNQTFFqECSR4DtJumRSrSpk5J",
  "key7": "3SrJpvcdv46xfmyLny3THbt58WjoWQFLf6X9YTvsDbHcrWEfi8YZhbmZs8kzNu2G6zu2tZaXPHTQhZqm6heW7zv3",
  "key8": "3NnWMC1yKkoNisGZz4Tmv4qLC447YUaR1GqBxGdWDFDR7f6u4CK4J9aTq8KkTQTPNRjEMxdZpdEYar4XEsUyEoLj",
  "key9": "4CL5dvsddNj1xBf18pnw3cDiiPWhJ1epAgZ5JUNq8Y7sXgqGSszekDU52vEMKuneHZenrwx1to9SQGbyhY89mKqo",
  "key10": "3BTKFv9zwJtjpia3rL7h3MsGi99adrTWEA48s9KPGZh3ayahs5G9u5jQLdcYtwaTCuQssxX1XdLyRqDpeogvbk7Z",
  "key11": "4VJyn6tW888yx6GDR9ayQEhd5Ep84QaJeQQ9vYc23v3w5MNNcyLeaNsMyPh1Jw7WxNWQKtNc1T8Kv8HM4hK4Jbr2",
  "key12": "2JVffC9urugmjt3CDhe2F2STXZb5ZY4akCdu4xCmEubNTW1CT6hofhkpP6pqESJckrDqL3yJmd2r1LcLZLidWEKu",
  "key13": "Mt2sgeew5RU6SiN86J4nf9LXB2uX7pqY2H5S5M9xRz1ydCNyYa4rNkREboNFmMMUEyYj9mipaNWgqXYYAy4uPaJ",
  "key14": "42VqaJ23hDYqHPGGb6zqt2tqWod4AmfAPWjB5zN7dWbC9cukJDsoqam6P2vcFEtt4d2iATvwJxn4fj5C7mrLGTow",
  "key15": "BNoFeJ1nPEzam6yfSC5Xn3b1tkRVVfzVLF3APXzUvKGPQERrsDT69W9ExRQoQWdRYTVqaqJbPp92jwCv9hog7Ba",
  "key16": "5AVvXZmhfcFD5dr9YsaEDt8YavsneCE7ww9BSUM9Lf97faufYmyDuZCunJR1Y8dBwefm6L8fAgLPCxvgbuCtGyTq",
  "key17": "3ssEFSo8TZzRtuZJYw4AVHAs6QjYFHLUjArgQYNJQXAw2sCaw9hpzWgvawpwihxVUa7yJjaYpcsgtJfn4iLnXSts",
  "key18": "4GPsVPYNBFGyVRAqFyFr4GC8cM2Kwi7JxaoqnBieLLRcZ3RK9GYXL6XzRU6Hp8No8YWdsrUGjNSqKnMD3MAFuFFQ",
  "key19": "3bYh3NZkXTUmaDZJuFqSPpW3WFW4ysQipnHBvEX39zUDDMeThWxHu1zBwDvCmDVB8ai2qUWgueRQyYyDuAS3X1ht",
  "key20": "297SqwjXsU5TRkEtF6ht52NYa81ooNiNPWwf9i92bkNDcgdygVbQN5KR8xsS2fMAQR7PNe71exkw4SjDc2sxJVyG",
  "key21": "5SraZWWurJTY56dV9WVham8M1asLvymo9APbeJbYNeofY3KunGjDSmjjPpzgXEdRi3BPKKQU342Gaqn7pnnqZQx6",
  "key22": "3JA4sYevyK5i1f2whohiUHwiVHBsey2irZjT7cxPoyacdncJbT4xP63oaMcXP3sKTHguFLxcjxuPX6pMTLcnMhzf",
  "key23": "3dePaX8xHKWKEhBTXPyoSXRT6CPqQVr7yUc4sYHRTvEC1FpKj5RkNqCikRY2y7uwWyqtrrRoNJrMCLvNH2kofvZa",
  "key24": "mEWouY5XgewWKJ57zwVqNd6Fw45ejNsGBiyFVoP3Myaox9pSTry4uyGQbBduRiJ2FMmyycYtQUeSr7YuQ349Q8u",
  "key25": "53TwG5CnpfEaTSwkJ3ebg62rvyqf3SXUP1YqqgH1A3LN5da1KPHzjmXjxray1cX3gBRkpPhbjLfo1kAXKAuF6XDP",
  "key26": "42ZtBcX7smHee4dXpNuc2UqurFcoiTP8qayGeKeZWoTbSHqJgzV9bZGJ5CX2BHUcNVBfs1m78oBx4h7Vgzc1boph",
  "key27": "2yy9rbN1LejEpeAzgA781weLoyp9tPvRJu5oydbeKa9VaYhx8ehtY1vJJfEXht6ZuD5bU1jPftx1S7cWFgueRbtC",
  "key28": "4M5LU9o22hZRgUo1fssZ5qP4paqdzaha3w6vtT3naoKJoniMsVCMi8qp3SprG87bv4Xhoxif9DKCkbshB5o447EZ",
  "key29": "3UncYRK29q6chwivzB4NcZuxQrhKdebaXgxYTcdQL2cuYd8KzVNK6UYgUSJ4LSRiz1e2UcUpeX4SErKwDiknnGd",
  "key30": "PzJ4D3wkuNcSMYiUM9VU7pcKZrM6TZPPx3XUrQMeo1fVja2ui967ndZJEp1LZ3ijc3eNPGxWQM4VAcdwRYGYUnA",
  "key31": "2fufQnJ4U7uKD518VWCu3TF7v6A7TVx2wtJXG65oeZ3D6a3QBtT3AvR9yJXygyXmY1rtgnk4KCd4t6SZ1u1sx9uX",
  "key32": "p3bL7AqRHk433pRRmbAcjwdX4THWBzMt9Qm5D2HKQUEY4QMWpdmrXCJxeTq47UPn9MV7zjvScAJ131KMLvPWt7f",
  "key33": "u9k2pSBstRCTLPrmsB7oL8PMkmqknXzBQvxAkXGsZrAzwpACgocfifNYUVSmEsuqpkh1TifExoDnXYTATemDRrs",
  "key34": "2GcQU7Angj2pRaTumddqkqwiZc5gYRDUd1iWgH7uXxZR5F99WrJnsJRBQ5qp3TzkktFDBGdfaeJPh4JPGTTBkLTJ",
  "key35": "4YQusLDWcrCyP3ERr4cFQZKbtvE2FF2EP9fCVE7CyiG9ykGfMq1E4YdC8k8RP5PgAvyK7Zp6apdBZH5HTD96XcFp",
  "key36": "3rGz8cdGaBPw1oZHogcoPo947dr1S1e73kGXymdMXmUKgsCKAGrfyiKRNhu7qLJvoBsu6tVTS981ft13Kj7ojeVD",
  "key37": "5KX2iCrjzLRDD3LqqDkxZETzW2JdzKnund9gfHWbLnV2bmeKZw9US3JN5aLy849a9Yr9UsnJAexVMdHN2VnuVKi3",
  "key38": "H47SJw1Y6FQX5JLSxMNK9kQQh89TRdqU5GU69jwWXfDm76HPsKCCC8dNMU9huV4K3FWM4CFVEQiKvztTRPWgnyo",
  "key39": "55V5SPztiNpfbfuzrvGSm8NyHtsaXrV5z2xRgfX1QojU7JSjoQPSAmvGiWJGPaJhMYzzQnDB6VDcbyKyPDcGDHex",
  "key40": "3YNuF5RTRpVy8NBwY7wtR3y5nQ7LNywMUuiW8m7kTKn1gwR5NGRFBeDYDijvpA4g89DhcSGHa18pinNcBLCaA2Qw",
  "key41": "c4MJX9XwQPaRjePerXodTftPssRzZBeHuRWiYnrYVNpfuDYM818xqwSMyrDqarjsWpiUavAQRR95ervirrWnBRs",
  "key42": "5iHAfNWu1ZFYbqoxvQYKuTMAWNsDSsKJnpEKL6yEr6VGV95CJZGhMvzT64asWm5Fy71CbAVv5ch8xMSiRJunhmTY",
  "key43": "3kMoonREZbtMFJ39ZxfSUbTSrqHZXJ3iePTet9bTBmP47jJgoTDK9us4bU1bQWdZf4BHzobZsrens1zQ3ZK6FRb6",
  "key44": "31Z7VTo1FbhrqN3g8PrbxUi1wHYQJRWsiXkyiRdneKKQvarPirhGAwks2ZCJMZZwQCkZbgUVdnTogUZjHD6yjkA7"
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
