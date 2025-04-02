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
    "5pGpkr7Aswb3WmfPJNbn63J1H1Nz1fp2NC5dJqiAWemuREYz7KvJX9wMCkYDMvUT2HLNAmrwLdkBFfoEfwxRzcEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25sYekGJwrh9vn2jXkZUPiT5k2xYCZcBnFvUEvBEYgEknPeE7UdpG6uprX6RpZD4tub6P5RSeiTY81qVgN4vBtcr",
  "key1": "Z3K1ZffWR48R8PgeDS99DEzvUvfaiUK67DenBMmMUD8Vfg3vHPMCv3RBBSWhRSJEVWMstNZhzhS5NJLh2Pou7NN",
  "key2": "3L3VVizuxJJzLfa7rScP8wjKS6HzMbMqpLtFX6RW8MGU2djYUpi4nboVCBnjXxjhYruPvfUQ3bb8wcuyoB1uHTmk",
  "key3": "kaJzzsAqbvCU8VeanjtCKZeF9evZxTvdKCs1qcXq3gkCj3XH7v2AuBvFoJBxcEVELU2Ek7NGLzZs2WuRnFzwpGG",
  "key4": "J2Sakegou7jaRPQqh26rMxtn9NAFZ5j2ru51PQiMmWec7DdmkfZKGtKtNRF6UfC5hxyKzLToFpThsYRpgTYDoBC",
  "key5": "5uiHD2AbCvW2CGoNPwdu92aXirbw2G8LYRyq3RGtQLXtAC1KTiCRuCFQyorj2dZhsEY1WvXzrUq2zwEs3EKsvNap",
  "key6": "qCwxL9fVNGs6xyvqb3wCeSRzNhDkGLRRNTMjEJ8yp2tPPCp7HEWZWASwArYoZ7BLZHtx1uDFQS3JGyvDGGwNAVm",
  "key7": "5pYuVdYverbedBUCXz4F8BPShg96poSKQYXS9anh6qBNyRKDQ5YodtoSL5YUgGK6YZKVaNDRQ4RdaaMHtrYXGqFd",
  "key8": "3sNu8rtd93n3z6sES8vhYjSyjA6R8oPXyYeZc9vHtYQAy1hWeENsb7ZQKRr9AgvcbpPWHYLpFVrH2MCTXxkwoBma",
  "key9": "3tCmEfu3F5B2VSEAt9uCVe1oh4QTGRtwdpB9ALXRhpMCn8YGnVx1ArsAb7qLPW3qAMA593vJgLzhrzHCtUGr3iK7",
  "key10": "4gBPojjTy7i7Tb7axqEs8xtRw5h7yoJdK3U5nVi5cgeVRH8zcoY2Ah18nB3x9o9SFbcsKwMc3To7n7P2PK2mt2Ak",
  "key11": "2Jg1NzkN52Jti6ZarkGwCxNhRh8m1hQTwh7VwyNMopL58CUKb6K1j7iNuoijSWXEkHm3pFfRC6DhmzoCYvRuUnGk",
  "key12": "Ra4eCFnesTVyhG5Rj2V4363hD7jZdFhbyXGf3E3yzQSqHRzkNQqt2sWoRMpcNtGYqoK9V4ifg4rEehgs4bHLMFH",
  "key13": "3TjNNgYQn5EAAXmqyHraRkSQZvpD7P1BvQmqSJJ18vXjtRZurdubbJpYcKeWJc7e6sxjZUFMFRNBRQjJrJLh8Zyt",
  "key14": "32zFKmNU9tgJLjtBXnW3uMUZVcUDPJ7iRJtpaos4gwpS8NLLG6GX1u5gbf22VPkNWgMHGaWqANQFmL3JBdyo8YYp",
  "key15": "dn9HracMDkVTW7VRZ3LEUrQGsVkpjSL77ecLUFA9T7BbhAiHc45aPuWyhEpDsDo19qDhWoFbyjo8cKUphHCuwP8",
  "key16": "Xa86xgXztPWaaTpyXYyk1DsCnTjjjiV47ntFRP5Cmcde8T38fxe3XHqqUxqwc1rcLebHBB9uF6UpFqJcCiGgbyi",
  "key17": "3iVfjyouyhnhCa36CPzKvR4S9mwpVFdVXLSsdBSTGNxWAZmpwyKLhmPUF1Ff96M817GWZffzqMWDWkeMJ5iRZPed",
  "key18": "34HN5Y5mcYL7eEcrAU5kxGZFejCeay1PqybBtPECVP6KjNYpbapdUqecBnsNRxXvCTKQMbrwyrb4PVpTxxDcHhS6",
  "key19": "5hVgpokDZAMjd9UBb7wK65ytyuimC65ULwaSGhLvb3TPVxVZAzPqs5T2LnMooThqTm7CKNmGaAgP2uxtzB1yVLNB",
  "key20": "3rRYMnd1vEjMzgDu2nKZAfCMJao3xKGEqLzSNB6iCmcaERg2SLWwGP9sUnciiSqi9vd5QsgUiLhgJ2R1LbuQCLdQ",
  "key21": "4cTuANSbpZyb4q2e1NBCDhhE49nrF1DZk1RikCEEXco8uNYo3syizM98ouYDzb8uyNPSfbnbaXCf6Dvnn9hrZgvP",
  "key22": "XDF1S9jWHrJPvZDNEQekSjepmE2er3MqNT69HV2nhoUYotVjnEPu16Eo9VyPBPRBTrSoKjDn5gwr4gY7qdTumt7",
  "key23": "L4CV7zm6V1Ur2dhi93duXZk5UjLuc83ejcWWjkeZ2s6J1tWhpoU1xqWcFUZaEqW799dAVnoKqUJoiXLKW17hds3",
  "key24": "5U2qheswTphj4xDjt67615jfgNnGqFXBeFtBQaPQZvX2f9wuRQnPWQ3P8JYQ6usNXNvNHYAA7zjZSGzWM3391xAd",
  "key25": "3mG6nghnLe2gH5UAKcLYNvicriGgDFZ3hpqWLGEqUWJ1XYrQnWVQjBw9qtmVHdVLuCMEBjuPhGQYyh4SvuhgzpAt",
  "key26": "5i7q9FKYSVssb2USmwuCwkbacvrP6FgYBnidD1xhDhUZSKxxyTUwaf2y66oafzfmUkAYuM2Q3RxkKxJNjLuddn6g",
  "key27": "eo8MUXvVJYFwiqjJSASQ4FEXVu2PZF4xrzkb8mpCJULCg2qVbfrov6XfwCRnyVfWavEcKaAtxUJbPFtbwXJXLrU",
  "key28": "25jTs8MDeYrwtjwsSPnw427gYR9jqZMddg5LpdtBqWWcDZx7dk9CrFShrZ75hnLN2NzGx9x7rDMxXqbkFUbsmn9R",
  "key29": "53iZsw6NvYMatuzH9Qo5LZ2eRVAxsWKtuwBxTJDA24eRaEiqpWnx8cRL6sh8k7yAwcMG9GH94er8BV1upjJuUW17",
  "key30": "2qE3XDEpYqFYCmhs1d9Spch5brhFB8kM4e1Z65oSMTCCyUW1K6XukApDtQ6NABP11zvTixQN4VTNhaLawjBSrTaj",
  "key31": "5bTrcURcAcEHZAqQSU37AmoG8HvdW3UDrReJAcKufSqKSBMJtYCzvZtpETVsuzYjudQ5rS1mfbN7s7msgiEEJmLK",
  "key32": "3Qn3KB5cauB9ekKmw7X45ubWWTkiBwQPtn6wBCrcDWzZTWsJZY3qUnrDaQ8LDj55BSuVGzzMFe3UyAZ3ayYCgi2Z",
  "key33": "4Ad54JXiMZ98zrrdZRrPFjgyAgUDSTfmhzFEY1gKSGLtt61pJTEuNp6W7VUP1WBWqHdogz2axyui4XGwu8Xs8Br3",
  "key34": "5gdbmApAVTa99g4mSWHxKc9rjettqrK3MuUDy3LucM3o8gpiToKpv6K6Jav669Gt9zNFYdnSLqppMZpqtX4F1ucH",
  "key35": "AJnrMegdK6n4QqmbuJ3twe2sugSqYsYVvhV6FihAjHqjMqhsifYMGsQxcnosMYmbCvuBfj7UdAa5LaPp7wDbYJS",
  "key36": "ToTEvwFYrLFLf4zqV4hbXMqPMMat5zNaMc96nWxzFurJa4FGwSDxiE6R8daAf2tMiHBQru45ZqhKuVMyDqr8u8K",
  "key37": "B6Mv3M88gdiYz3pBfe1cb1wtfgeesxMe3WUEzkXysuUP1rLUZEFLVvHgAzn29sAXN2SQbMjvrvft4ycn7gyTEx8",
  "key38": "2QtGa5hD9adXjjCKt571WWzu3ABvepsfhPZDYjRb8qUJzZ2m3tCpNHrgqwEE43oLVtPMYgcHCQgiwwJZrae8QmN",
  "key39": "4Jkz9mj3JSxs2gdmSFq8Zzxn6sU3PVpfWqEbBRenDTByxq52M6mw5bx4Tx4TR5mRMwwy7qjp3wf9ducVKGPz3Ne6",
  "key40": "4RsrztAxZbwfkbKiAvm2TPv3adWRP4DHKBP32XGmhevjejot5KgXHDkLJgTBo4VU4mHXHzAnXvobLLMMJDxQ16oM",
  "key41": "3y4UELSSpUx7pU7BXYXbmkV7azxTg3mZfCekxRxDwuJLukFkTL2GJK85Wfkbs5fc5DkeKifkeUQ8yMmn8Rjjhivp",
  "key42": "4q3w9XZqLPNBnPB6fVZ7qBCnWN2s3DjZuvzmsjBrP8i34ciVHcpyVRxyEcWUkpY8qVzuhxWP4frS2KbbfeVztUec",
  "key43": "3mSiLsjgUH9axZ5se8zNYajhHaqCKg4GjxNP3jh5W2iYcTBnWDknPYmKPY5mVwAkUZhudXG32jrsGUFdRPUo1hh6",
  "key44": "rxJVxmuyJaGXpCiXKb8WunnY5Pfp234ryxjBaqtJM5bFBt4FDuXW8qH2tK7GtBhxpPQAwNhHAqqC1so4qRFAQCp",
  "key45": "Bt8KAR9VtcMk98CEjooWFTZvjr1NEHBRmQLALKWL5kyPbJYKHtMBvPstyjEnAE5LRviKMNsJcTK2ucgBtYdr4Bo",
  "key46": "3tegjNdGq9E9FsHMaB5GGiPNhZn4PbgiDzaPdrCUxiXxGvP8ajsZekgdveuE84SjXd8JNwB6uHx4jrdc4GMvfbp",
  "key47": "5qjfKkbM1s6oy4f2VwQSNG2tsGPQ5o9WDNeNPoKE1peiFveArFcjUhUdAbphhK5QjPSvHvvr2afCHZx3XezuWcJM",
  "key48": "2yy81mMMtmtzCNKwrAenDLnCDi5xrkeKqTg92JB65Fsb8pQvo4kTUgxJmtbz9HhNnSGVps9XXVR19NLZFhQsbi8T"
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
