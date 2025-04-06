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
    "YcXZvF71NEpbpiKoS9tvkj1vagdU37rsXPCfcMLh7AaHz18YxGaY6qeZAKENd8w14LgRsMpJxczWctdSzRZkCkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQQBJhCNBbXMvSkjuGkETGgBiCmS9SuVgrPFjngP6upKPmAqpM1SjaUdrtxMVEYiRfqVw15KZQXhffoqHhJKCsU",
  "key1": "3vaXCTNbTBBdKfNPSJVd7Ld9ZNUmTAgZp6bgqjrG58Boq9rwWTZiFzLLvdYgDwZoAYiQYs487cQGbhru4Np2gRP1",
  "key2": "3qz6xPKFFcLYXqwJp5XBehoMwVLpsbunTE2Z9yWdazPdHmzibPCa4uGW1XRaTCkP1eH19KEF8vwYbkABPu7WP3WE",
  "key3": "2XxYrKdhauPhFzE4vFYdUCtaF7MW72fLzaGts6CbSTRxmawXibwgm34kea7WPZb7q5rFyQr2sVv6ErdyaB86HvzC",
  "key4": "2kMuVDirGCdUbLCBaGeAdxCG8o2P4x31YxYamjQG5SmwuXvMGpLHHQkv5pPELsLjtchouGVoYvM6FyEA98mfQ4Ls",
  "key5": "5bEs5RchEEX8kbrdc47e4ASHsvwcSdz4ssho5mepcmg7s3WDiUiz94SDvRKrXcrH6EJCdz11JHUFjhsKecSeuHjs",
  "key6": "w6goejXivEytqhDh1bqca78Ubs7QuE99jVhcRGXMKgHkbrpkeBMJ2Lqhh61A1ahk8Q1JB8hw9xH8X59eQW2ebt3",
  "key7": "U9DhHurJFPRsRPtPgjX1j8epLZsmRXfxDHoDr3YGpcPzs8yiWdh6Yx7PWdHwCYPZUS12KFrQUyqgZPPD4dyf9TQ",
  "key8": "5C3mABeeVQuHTwnoEnj9ciU79jfQvD4uEaiM6jCU5aZA7n3NbZZQsNkXYwAdz4GV9Dqo59F1agTGPw4E9Aj8YTuZ",
  "key9": "g8cj44t6MRctpapMVEf1abxD5UabtVRxGePTpdBJkAe4QPz39P96xkuZG92s3qxD4uWnnFxmqM99sHHdQcWJY2W",
  "key10": "5ccwihrgQ2YXNDyc87YSrZVv66qpUWFWmDqs5pYUDfDWXncsxdRK4qLz3ecFnHXkzrCgqusnV7QZv2DFJR51DCw8",
  "key11": "57hANE3iZqdv92M9DWMhNeFQz3C5J6kctJwBsgSu7rGnXUxga5i2yfAjnsxAbwQ3fGMoMzUC2G5AZn3tUJzy5jjJ",
  "key12": "3jSrYxjx4L5xy4249nLfuDB4qQsdoje1dXgHhV8eGJVZ97tWAkFrQMTTdgzKTV8DvMkSDe1AoaHpkaRXTKdaWr8a",
  "key13": "3drCm6EJA244Xfppze3wYEt1ZE9MhDuvEE7RJLZw5yoJUZB4yp8suVjCfempcHesYnWQFyqD1yx4QLP3gUJe6UBb",
  "key14": "FAYidPNdqduwv5zKyGH9Z1N83d2ZSsjjsq98EQfP3tRiyNbi2p6QSLcwPSsRFtM6CUdhS41ZRexYo9awMtVpAy3",
  "key15": "5c7LxnA4wbAbMPA1ryevJ6kkUEru5SgcEnzhbQz8zfKTJ4H69F2i1oJS7R1HQw9i6KCtKLD9WbE68rdBNwa2wE7Z",
  "key16": "3rJUpBc4gm2yWdrg7nBajXmXtNfmmPgbBBLZ3rkqHTZoNGhKfBLaT8gs32LdXHyGT3ZaW9gXA4cKtfj7aNDycWZE",
  "key17": "4Nbxv4UMAK86tnQxaWAtWFVRUaDT8t9BtP3DGpeFPLPypY1otGhza8xedfoyrtizbwiBawcNFpuxFsS29iSL46xU",
  "key18": "9CK6LU7DjQeSi6UpZRQxhPtw19Jnw8fvfwangZ7kxxih2P5TQJALRi1YJNTP87csX9ckmPYdjQZacAGajdyt3mp",
  "key19": "tJNfX2noJGcNYF8vk2FrSVY77HXngdGiWfLE46Koo4GrB2uR6BYcP3E2CrBj7FmkmF78YFbDmnqyWa9NGGNt2eE",
  "key20": "51mXwiJEFStVgJwtkma8r25FGdc6rGsNMSHSpjigtH6Yioz7Tr3zSYp7qLw15WGo3SXX3YvP6eoiSSGKbdKzNkdG",
  "key21": "4tCGQdZEu3oaWxAwvNfPCoyxyHYvSo9Z9YV9BHGToYHHUqVnmsuWQtLwrW8a4kcWRRroUXWFGi9izXErzMJypjRZ",
  "key22": "3X73yxzKMeFo95T1e2xMwLP7nFFqA29C4sffM1ipYpKcG32xb5sSPzScBpjzhsgPiiuQdcMfhxawNeANeo6ztzj4",
  "key23": "3tLByeuqxcP7Ejc8zd3PiGkBFVZgzi9pARFDwMD4F1s3M3ZJKCG1e2irVnFGDdh13jUKxqcMMRV7YNkdfz2pYvUD",
  "key24": "2H77aticu9zLgZZ2ahaus7hTw4phuBD2gAWRWqjFyknFMZv95UnLYysXYwZtm7oSLmaYmye51r6qmkzMhC9AhjJq",
  "key25": "4jwhjaDJBRGpd6NMg1H9yQsbsQDhpGLLWrHpYRLniU4CRxdsPQHsmeGregtNqhmbQtvFTRVtpVau8ihBWCubFkeH",
  "key26": "3ZHSb8kbF6ivjRx1a1kPGzGMHz6XCvUTUSm6b5ABbHkEV5GXdP2BH1h2v3TZ1azEM5Xf9bXGdLyYZDJwczXrbQNf",
  "key27": "NPHF17Xftqnrdz12RTwF4WNaPxa8dR8guMcEtRcP6WXmbP6ZKvMUEo2kULf2qdvL7xvy343NajwLmXF2vnogxZd",
  "key28": "3ByLPpdmvMSrAPUAAk5At3SkUyYx1fuP1CBwi2aMPRP5yEHRbKbvGiwZCmyeFL4bF3DcdPB5eEDP5ggjmUND6pFh",
  "key29": "4AiZjaRk8jiRxYAiCkRR8DGqx3s1V9yRe1u9LDwuSPghdd7uR1DchMh556D2Zx3f76mQybfcDcKP3vgpUVBzBQj9",
  "key30": "5iy1PuJjR5BcnK3muM49bAYoNinsAZmmTviw84pGxEKYwVQtQeqBshd9X9BtaHMTWWUjBoRm53UcRo4sK371TcVn",
  "key31": "TmBxvNr3MrZJxMuAXRS7wCp4aRiEKydPG3yxm8AE1MgtVDxLr9JPTqeoeJxpybCpAtyH7qxYaoBUbajWyvMkXv1",
  "key32": "3zV2sNE78vaTtCqzocDAj9U2z4Hctuw1kMh3j79zYtLbfgTVA34v6ubpZuSArFJsqoYGzxQ7PqDbVTFPr9J2ECtP",
  "key33": "4cD6DSze9amffewy7k4qhawCdEgJUGkBZWghVHSEVy2QAkwNqA3W44r5ZZydYc8YrHgJ8RsAGBX8iHEmt4CXNgRm",
  "key34": "5TxqVmYKpJYVYMuwqbRYTcL5ACbyEdcnQreCs6gVFP5yWY7EngBbFerkDUcdtGzLHBZXGBpYN3WfRo63W4hQj7A5",
  "key35": "2775wLAGGMXrNiSNhMjQ6VTg55jrkaUxek1McabBQDfGKgppd2z1NR1WXWqUoERWDfVRVs5R9f9U7CXjQa1Rpyqw",
  "key36": "5JWkTE1NhRK25PvMT6AeLnyou4Kx9WxGBCRvu29mcNxTwx6Jxhd1BgGGEFHLPcnG4Edt8Th5aAuqcMZXxrLWYUeA",
  "key37": "65kbwvyUM1D7DJWFVVH76xbtrsw6b1abCH9xNNJWgyYpbYSCvp6uUMtYToDvJUjR1sVvvtHzGghQzuJkpAkHR6yb",
  "key38": "npt45W8CAMCKFJ8GY2QewckFbpnDJhPu5fFhJ5wzjcrXzKVL2W3ios6bSAjKqyvDzxY3o7m1as9BpYred2rTJm3",
  "key39": "ffGoNVhkvf6XDM7SxikSLsdZBhKt8NM5f86jbYzG9tivUMkUgSaMQxzqLHLpDKW1WyhufLSJPCGMov1BEfHnZbn",
  "key40": "4TV639PAmHGuZZHfkYrzp4ZEEuQd9A8spj22iUKceyGipDpYiPytG9zknHfgRv4cL4pAdqv1Zz3ZHSGfeYXsmgvh",
  "key41": "3ueRtygBqc8jFmARVNjWzZnQmTfFhCA3RCxyWCESr43DhKCp9oTPVHeSEtYwrgiFmG182gAdrm83z7ZhA5Tk3DGs",
  "key42": "5mbQ6vWX71NFvSTkJA5gGtffheZoeV2ULbwpM3XsinYH7DCvAVkNcV5crPffrHHC9DMYjsAavpA26itydNGgcYfS",
  "key43": "tqDUU1t4YawivUa1ZtJFkaqxTULSJtLAqJgQG71CY1hAqeKEYtkE9xjsW33PmLxfBHMjKrQVGvCYWydTcC3wXPT",
  "key44": "WqsXKGiNpHxnfBXaADA8sgmdQxuQvLrfWmTwCJrAMUdMBN77TVD98yQWuWF58bFReoNnpVgqMgFFJYFnmwnFtrc",
  "key45": "4vxpWvwYNwyNW832sYhmnxVwFVjYjuGjf2GpJDDbB2EmTcKD5EdmHzU2H1S9AcsSSCV7FDy6Yao8TyhDwiL9oPzh",
  "key46": "66w8naGSEzPZVxtYfPPHimG6k4sZsQfvXjFUXc1x5BKmSE2ivP9k1Pi1LGni6UwYeac6VMwT2qoNd6cyuvJt7EWx"
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
