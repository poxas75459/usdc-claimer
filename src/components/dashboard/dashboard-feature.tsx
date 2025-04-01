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
    "42tWqQ5Bu58WKX5TrKEpckzy7rNQR8D9joXbzUgA1UvCpUzt6DykiKdHf58gDT9KWeWYv4fGTP8RubLtrKLc3EJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tu8dFD4hdu8etcGJS3hqPFVHeaWL3zN8jDxPQebG9k97oH4GeZ8eTjbEii8qmEEVo6qBqBbD7peq4GKH6U4sbdj",
  "key1": "4zte9YoDq2rrmDdiMfq9jrdAJg9dLLXwSq71a7Qixj4JuBBo5uLxS2rgiqJm5K6YigfB9ShV152dubrccmfs4sb8",
  "key2": "5cvndeTk3tVTGCfV5hTXrsHnfGksXYRTkLSUezDJ59EHT3R2JxsT83zrUfmZBn65fxRj61yoH6tV8iP4z4YoqZ1S",
  "key3": "p3UeHnkuqUivAuRjNAyJFgx2mRncqySuBFB1AXNZxjoUBmnNSPFoG2B6GeJj5BMfaDiQcpBghmxkY92L3rdBmaL",
  "key4": "5BaZ97hfLtwtcU1wWc6TdUourJVJkwPaUD9rfHoHLaDkBochS1E8eSiBvGLCivaVjUC4R4uUhxbUt94ymK19YYKb",
  "key5": "3stbNEo9sN9MqyXrxPX7DKfKw3sVgWuM4HEves8YN1gMDSGDjfSk7jop3YM18o27JcZ7JKR3nAq8XpQ1xr7sakxB",
  "key6": "Cmtb9GmfULm2qjewRezheHReGFBQQwnoou1qqDExQW49yUsxkhdqQN2BRkDPTYocRu6P79xktMvyXh9Z1ys2nyK",
  "key7": "5t8KtVsvvBSY8UDLgFQHQuR6yWQMHifA6wr8zCZiTNActzq646pKDYTSDCFoNZZDpJfLgMk8cNC4qMitm3JWaNC",
  "key8": "5mpxHwmBiDeLn4u1WmDwiyCjCVXraKNoSyvtuyDSdyzYDLHkR5TetEVcneSMSNpRN56U9guAotcxNSdb4TSkFtCn",
  "key9": "4fC8W7dEvvDZpaX5mEE4eZu44aXXZp8bB6YqKYqMTp638cJYtBVr6w6qkes1FEVGk82f2rLXaUP7743vrdZrmcD9",
  "key10": "4ViPAVdJc5hbdVS1JJcCTLHhumYfSvXTQnhUW3duPBGKan4sFmfQmjaYvmEgz8dN4msSUizL7bZxjQ1EhphtZjms",
  "key11": "2tCupxqG3yTdDPaZ7TTs3kK4P19ELSUrUuPreMZwFWNCrzdjih9qvr2zcZT5nptNPWtYDYJGCPjJZzXggV2oVZcN",
  "key12": "NsgufabdFTsNArf9eSWaancw3aobvBpnTNoLBcv5V78XRune1QbpbGmHxxV4EmjxY9BAGijw8XPr5YTMdP1u7uG",
  "key13": "42Zg3n5foPLdVn9C7NHQar6XYZfudZ8zES9hFMd5D36Yd4Utx4d6GPw4x84C2KzbQyQnvtVjquXm11XrwbVpSS1A",
  "key14": "5CHiFrVakXshwVELWv6dPTrfKPtDqBQw4tQFstmkTtN7Qviam2XNrZLx7spaxpNaHnEcQ8yNfyv4S9MchfhzyjU8",
  "key15": "3YpUEpvEg48EJ53a2vs6ZLphf5cg9X5HMYsCzMmkvoG37pSLpoYYafFpjgT5Pey3ZzaAbs9moWMxF5njotv18bgC",
  "key16": "3FfEqkH8EPLP1yJ8Z27bfTDTDWzPK9VghGMiWvYPEGzqdb1PF8q1d8NGFtyTufknZ75RHghNrcELiocBCxVVUoE9",
  "key17": "57xdpNw44sPNYGB2aDwxL5V5MA5x2q5gk6gcmt2hEsZzvA2QXkDjvAra2h6Cujt8QaTQoAEhmKRcAZcUCwWj9Wex",
  "key18": "3Ysq8unnwDPUts1P5xy6xhRM9obFDhtBQebvRP2p9nyj3HXQQqm5Uevu8h6m4k4yEhp6XXAHpK9bcuECgbt5LzYh",
  "key19": "Voix7acxhjNMFzG1NAsKhbwQFZm9XTBGFNKD5bTrcRzEB6zDHxmuzH3BkdU2qxeZ7FAHvi9x4tnB3yizZrpEyhK",
  "key20": "31LpGrRTdKBAMF4xEcp9rXYmqHb5w4sT5cVuDaE3rwRJEBb8QbTnMccJXGYc12FeULSSSyaV38UyS7BLtAfhoKwQ",
  "key21": "4uoK8q3f8iX4A3Sj4CmkfbEatWLACJqEeUgTkPwV7Kg1ioQNZeqhZhwwzvxkJdNyYpFYf8cDLgWByjmJ4TUNdu3W",
  "key22": "641Ve5A1MCuAcWmVZNaXQB8RvjMmMKbr4uJysffWhjauCrmgniW5WFzML8WKJobJAU1JX4xmRkJYQmrkpddVQrhS",
  "key23": "8JNPoXmDe9unMf9YvxEiJPYcuB2YCz5aYKeKYfts4218pcRXEX7WePwbYUHghHToBfo82WYKw5WqTns4LtnansZ",
  "key24": "Cr5GsqMcByeTTGbHVKbPmwMmBt8YSrVGu3AuVjLN3G9qPTWsGm6jsaZGWTEQ9QEYRDdsq9MMjNJU3ozmMr4VjXW",
  "key25": "3rvxnmgjo188tJ9TuxU7aaXfvC7BkYC2uGzxEdkWZVz4D9XMiuBpvYT5t5UrF5ot5xAyRvQKf7rx6eMPFW8mcQSJ",
  "key26": "2fseanSW3KSmsAmSGBy7vQC1PWauxYispGsGvMRGGKvni8zY4XT9axQMVc4y24awFvFyP5G4fDydx5kcjLXeMmyP",
  "key27": "2bBKgS1wFwahCJy3qaL2DNkstJCe5h2yvdNa1MfSRN4uZPPtSLX1CygzzKE9TW1YvGAdhMK4YoDpa3Nz9SY9X9Yi",
  "key28": "3j3kpbgjDK5zfmDRvNczgfvxts4Hh1Cq45ntUtgJX2tV4kpbFtUKQmY4qQxwsfmYv9cZUqdgFWBgPAiDUQASv4Hc",
  "key29": "3weZ8E8TZUqqSD9KpE6Y4pbmNScU6bVEoAkpALuhPNcJFzSvv3QV21zF5tB3sJRkitXxWcVbjF3QRPbfVbkB4hxf",
  "key30": "5UaTFduBwKQ49h2Xap98fvngtKAcofaDrcN7KAyxzK6z143C7XuLm7skk3gFmShVYqP8Ciinzn7LC78qFFTdeJ9e",
  "key31": "Cnwx3bDqHj9Q4N2s19xuVrshWR2P5ANtYF9CsRpqPxAKf8bZek5KW2ZsnyERNESWGxvEtvq3xQ24omFZEdqcGrz",
  "key32": "2PBcRhf2hZTH8da5NqKE7BN6vFpJKC4d3N1a3C6EKNEoMxTJuqURVLyvyeGb7kjZUiRsDTzPL2fs9mRPHRZjWV8g",
  "key33": "4tudYNoVg53JH3A8cHLWRjzNfxJjNTztXZE8M9yhr4bfrFbjGcVMxnFXXyCreS8qJ3BS8eDKmjnzCkPpr3cDEeEf",
  "key34": "4CA3zjHzfVhiet6J3NFbTN7fHHzgCyhtib1n9KcTvy2My7VHAoHTbmJXw5h7SH6yWUY5baH8BYVKoQK7ndGtM6aB",
  "key35": "285G9CfewpTqL2cuinJzBjqmkLy6Lc1L7ECquf29PT5rV9jV3csJa34zyEkxnE4XZ3ZJftQ3CTEbrrwiVNjsQKKT",
  "key36": "5kdzYRtPXxFtmZaFXsNXJpSgjb8khpq8PJkCgEkYKNwe91RkR9hmPeuVniBNaJM88AeW3pfP7YFJcG8tCyZirM8a",
  "key37": "3mzuqNVv1Fw9pmAxYSpGdMi4tNuHuBcGvK5rsZCEU5fnVpWSdM3KfHgZk6yybJLxjF3v1bjGaAgjbHcvm92kXdsK",
  "key38": "2ivDGE9bbxFifcvaS4LxpZSjTdauzBPGQdwLi21gwj4QusEUTVe7TaPK3rTxEHqYwTgimqCZrzuTNfckob8weiHa",
  "key39": "2zjS59wLiKrdM2EvRrMikU7Ggjnwu9YayP24Wi2LmLQW7cxNYUuHii5zfB9MSyhzxBvbog6gRcnJrkcCFP97rf1V",
  "key40": "2QjwTpdSm7WDMep724A3Jvtt5DNsvwjX8Kf9m3cXxeofJYBZEgEAmaewpwzU7WzthZQiGgf6KDh1TUQpnPog4QDo",
  "key41": "5ZzkWjoScWQQCAS8vfA7jiEPzVFCP4fgAyoXj7Ny4pWJqdxL98dN5n344XMEkymyMmBmmJkkse9XGxTZagJpxxfE",
  "key42": "2D4y4EmyXJ4yEQC2m3SazgqpYs7njg775Z96EyEW35vTufj6rLgXZWDuBDsbJvLR3o545pjUEd6V484g1iKDufoM",
  "key43": "2Lhdv8Nran4L29pTT2nm6SFMUaadWPEhK4tQ3pX13UVgXbsR5Vok4CCBtpqR2Zgur41RvCDPUCFjCNog8R7wpgb4",
  "key44": "65Zb9tPYzm1vKg8jVdFQe5ZHT63on24AqWGeJssU3qWRQ4okxhHmMjkG5kG4BjeYQPmanKow4DgYk4dvAWNxWNe6",
  "key45": "BsGvqipm8cShapqKi9zZ7kTtEgGDRvNQ72TTePrC3CrcSzXubu3ZYtriFbqwAUA7nuoy9QBJnMS425gEfC1zeqs"
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
