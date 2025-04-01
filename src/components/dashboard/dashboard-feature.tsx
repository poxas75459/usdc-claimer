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
    "5MwYefNJskGArFRN8tkdZiaBwZq8fK4JW3NGNYWteUzAqRQCXHGXU9MggWocjbm6x7d9WBQpaGn7vueZTiN3tvG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYMwG6fubmmN6znZxyt44Meykq3gYH9HeN96Dz3y1yXA2ssNuGkER8vGBvVizYoiVD6jsZYNhg7oWdoQuoCrDis",
  "key1": "2sDesdDLpuxBsn6yBt7vhsi18vL47NdbZYsGeC6qF3vaWaCLkLMqq3xawFDh7o4CnnLmHy7DXgW4W6BzdTWmsPNB",
  "key2": "3iQPX2xxNsE3WmJMJYCyPWsqU8dMiTF6eQCAPYsThhDTYRCtX6kRQxD8XbzN6zvDLrAdWJ2dVTubmBR8jitVvJpu",
  "key3": "29BX8koHEei5LPJMCMVgZQBmyxYLjzy2t792Anf25THSUJp6jsQedpgViC7vAniFWxiEi7LSTZcQWKd6pTiTjtcR",
  "key4": "r1Q9cYxMM7TRsK2u5wBAPo77N3FYVhW52nCiJymDBhLdYEEsN7v6Eo15SmApJ3R7KrN5rLi8cqwjgob3GMqtPGk",
  "key5": "3QZ7tTnCq541LkACmhTH9hMyjwdWZKdMwC4vgSb73VjD6V5LycLEkps6YTZmHLEfEX2WRJFjzsb2P5jpJDvHuc48",
  "key6": "q22V88m9wQ887XWZV7UCK7YUEz2NVzPKhHs92YfiWx1cMxo8Pdnrj5pk7pRBhEDH5Zf5S9B28eBVWX3ZTwiLfgX",
  "key7": "4zeVLkoPk47xMAVoAuoSHaCbMxEzpLzyNwPBMx3DPK7Soj3Jiu6fRZXC9cmLPqJNarP14hZMWkyQfGk9hrBKKQMF",
  "key8": "5AWKojXMukg31erLhjKkRPEo973nDHPYitWjXNZPd7g6kqwJy9DnPUtmJqJ2T4KEkGXztKEA1dnQRYpuMvDNtqRA",
  "key9": "dXwiecNkHKnkMWt6vnRoX63ijv2PTF3rEVYeyrNgUwpo4Cv9mTqq6yBFQNsnx27PZVpF946PkX9UqQjMju7S6g8",
  "key10": "3NpJsTKFFs6Rz2aFrFMHvrZn8kX98teyyAnVJqfNmQBqvPjivA9Y87t4cvfY3hE8mwWgeD9n9e9dHSetvX3sCxBW",
  "key11": "4N7RU6S5zM6rCprRwXQCDghZMg4uTP6fHReDjPhg2avaJvkZqv49eEiXsTVJD5SSv16G1QavbBNHtM99QLNALbQc",
  "key12": "2UPNKrtmBaofPCRvLhVZwniy2vncpfSShhymCUfrGcZhqyaAxK53DQfBV5mcrCbdEGErHYy7K8VG5aETUPuNUN31",
  "key13": "2dn2QF4sdUbyYoatwM2g3d5A53mn6Sm9t4CrAxLA86nzHQYUtiRLLMYWKkoBYpFrVW2cHsx2vXpywSTcpw9vNUp9",
  "key14": "2tMEp5YZZf124ezeeD4HDTDQfQykJ8tSqqXir6KfBL71nmf7ePZZh2eDAEexEEuFrbLA2dXYQy7qEr5cz5wNoEQP",
  "key15": "3q52ZiCqEbEFz2hDhVCzgcjrWAgF7z5jVVc5g271jGU6tfXuj1UGjVtHGLpFigShLNkHeDEgkACRSkmnRr2ktxAR",
  "key16": "2nPwbMKmUMKSNuurkFUyZgyUHfAbj4sFvUbVTMGvMneAdpaxiFmajtGu33EKr47gZhgKNUjctupWYYmKCYfwknQN",
  "key17": "59q1Td5Q49qXLQprz2peHh9otonYbteF4nuAefU5M4PuA1W2t2Ugu59QkYzH2GW2psduyNjwDennHsQKin1ExZFk",
  "key18": "24jgHzwkVBjqNRs4YBFNZCG61kLmtUqxr7g6ZxUoPMdrDStD7vDGEsinw6fehrAwtWRBhtzzSRVKjq19r2yfnyh2",
  "key19": "4a1sw1FVvz5j1jmL9ZNwZHnMBwtaKJsAY7DBybGHWGU8VGNoaMpRjgN5uF9yUPHaN4dG46ZggDJL5XwHVprFmeWZ",
  "key20": "r5emfYmVEHmUerdf6mvHfYk7XcSuJrFiVYhyQMQVbeaMpgFFySYK2kZCHfZ2EHN2wXZo2CEtZzUxhmWEmZPif5v",
  "key21": "3LFAswjUqHSi5KVdCooZVzyMY6HGGUdt7mJXKhStLMa28oDMATup21ZnN1F28N4rXhEfKV1JTQmHQ6hpkToUx1km",
  "key22": "Nfs6yfT7tquNwGr5xKnvKKZujfwdErCei8R3sXtWygHUAiNgtSumgZrwPjSUC1aZeKmKHGphxBAUMokXgZ1MDDC",
  "key23": "2tUZLNwQ5hSZD6XARYXMsU74RTPmCN2EdUkhbWXiuE7gJpb698hm5XLctBvkfi36NB71KmWKuwJNyxVmTvP73J4c",
  "key24": "2mBYe7d4cdrbS9zii5hZwP87sN2jV7MuRmV4XftGcWfeZh8xuqu9PfgnWLXQyEtLevfJf9H5J5qy5ZJq3uvPRuoW",
  "key25": "2QYGVnAfK8i32XmBkn4Q8HrH4Wovjeen7HUqeZdSinxX13fE9HutyqTsxpNAMFKF13s6o3LK5LTwFZRLCyfHJhr4",
  "key26": "1xqrCEC7sgS8CJnRWH4NGiBisEnadTWKuWjtJXukn9RH55rS4XSTu5MSGcgxAfc7ifEnogrzuYf3ZNd29t2jc9R",
  "key27": "4Q3DSthcWPKKugpJs1JmkUxV7Uh94EKya9uVRzCiAXwtcbCMnAChBYmRkZfVwjDEpP9S3KUSpZqD3ANc6gbFxL7F",
  "key28": "4yYqmGVMpF7QoEcruh1osvHmBMi1wqhDYnJQLk85cBLU4B5y6zinNyoJY81V3p3VQ83Njen6rPshkVNgeoFNb6rH",
  "key29": "4ckQUNaKdYWp7fqF5w8bz4QeQFoeSu5MSSNibbhxRinMeqq84X6wPKpwtH5teVRFTPaBG2gfJhdx3iPhYgR2RZdm",
  "key30": "2ZAmhPp8E8dPTxTHP6JDLoirFEva62y7Ls9fTk7rAHtLMsidVbQchtFzwcCY45gs5azqaHnz59cjso5WSdue95ou",
  "key31": "2C8GL1tvMjrWjgLVMboSZ6oWYHxZXGHyy1rfnyvG4zERJijTNLpi4Z53r4P9qn13FzftTtxWP8NQFyDqwhVDKYec",
  "key32": "5nsn8dD8P7TgMA3HuHVwWJ3HYc4zUnogwnQaFT2TDdxHbJDFADUuRz2t7aJkwDV5h8q9a2T36SRUBt4cupyqt3TF",
  "key33": "hDqGqe5vVQ9gTpNMAMnBQ87dVtWY6tph6BkcgdeKxEcUZNHDKDoKdVg2TeeUrcMmbVrxPViuXM8GYRryZmkNBsw",
  "key34": "2p9ASQP6W3hoaFzsFsRybGv8yMniUmC2Y6NB71f8KRzwcSH4AByYG7nffXScEEhg1ro975p6ebwnpEvqvgknKwm1",
  "key35": "56sVYfjRGHg5DF43c3P8Mj2f4ZEyEGELBjwi4BCzT7yN1HY3LzwYgeAgMM2ZVkvBi686Ld2aQ4eTyGxJK248PJrM",
  "key36": "2azVKZTggRfpFq6p7qzN3XeVRy5NKRvSY63aB8LMQBxMc8wAVhtPUp7bcsGWK8XYMGwKGFhc8pwAvXEWKRjk8AfK",
  "key37": "41hu9ky9fD3J3M2dok3113QgkkDwiCyJtj69CaFqjdA6yHFxev9Z7bLH9gJ2btF5KaeqdTwKcruEGMus5mB7xMgb",
  "key38": "4KieZ41DDZDWSXW842ZkhCQX6NDvjaJx81PbL6QvwRzhsTwMas9Ktph4wKL4kK7bGUaDWAFrsVedQDEqXBSEPsRX",
  "key39": "3JEc8KrK1GRx1mYTyb6gyobp1WaBU9SC9cWKP6jGMajZae2xAe3EUmTvLyaWCs9ZXn3evbpFBqf3fzo6AoQmmHAo",
  "key40": "479CnCj4rjQojzx214cqgHnKPzaVYPUJmQcagqE5sCgvYQTB7HJLxH1BEk7Cjp3kccPaNs7BxWKw5eRT3vcZ3j2p",
  "key41": "2X5tmyNMgen5261LhQghkmqa7AKTpjES2EZ9WAKNSgrcGu2B1jba2ypVuZe8wGX595B23oeisLkdAbbkhHaFCoD5",
  "key42": "YJcgsojnJYFQ5VBnrWTvLB5mj6SHK6MvtPEVaYjnfgbcQvAsEnGzeayUCodwK15mDFHk6csw7hk33oP7EnWJcgH",
  "key43": "2vSVoXyXUHL4gGLo6cvYbUoX95JuVPGmYThSYLj7dxN7B7pURSPbEoRqfr8KvBuFMgAixZ7b3rXbpJsYhbV1s15i",
  "key44": "5VBSekzEZ63ZRwwthsNRCqUqRnpkH6qFqGWLV2h2aictta3eMtJwBRbuP4JqXPBwgxxdd6oH2Dj1VjwKkyZwm2pz",
  "key45": "Gtu6JgRPW8trdNYEjB3QWFGCaVE8dGsfnvN34qyXsbnLQYnhk24YUzZtbAPDEBhB935d7Vcz2TsZF3QE8PPVZMY",
  "key46": "2W2coALJ9P9SVVUVM7QayYB27m832HVQpzhtpVx5384Fi9SjDWL13VmCCakoYNMPiTRhJA16hvVBhNxJb4FWfVJo"
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
