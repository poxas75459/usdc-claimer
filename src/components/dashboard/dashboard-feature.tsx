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
    "2utepuRLpT3eWA8dQ5y95JTKeh29TKoVLnp5MPBGaRku479RkNDU76QxSjUEmBeh1se9hek8Ax6313apEE3hdCTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZY6FnyKp85hMEzYRu1Q8jF9rMckTTCktvRDQVvRMmpGMtxjMAtghhSSpA6mA2vX8CW8wcpUY9PbBUAzGDYufo4",
  "key1": "YKbhcAeuELv6xPhGvDLMW5XPpMyW4dtQAE5qsmuHQgBBrmm2qSobFaMyWzjUEnVtSQhG194xdTQd4PmxKn5g2v5",
  "key2": "3tHcFMvF72D3J3d6RoF2w3bTeu91UTxKKH2jmJejnkxRQ3dgwnXbrY5ZwCMjoxZJ8GXVXweNbZnmr7WJnA2HXy9r",
  "key3": "65mgqPrzovmTtEkv5u34uwPj7TM4jXdQZiP6fH5tU2a5eTkc2ga7YirkfSeZf5Cmbk8vBkWcrzHBFQx8umXSJbKN",
  "key4": "4BXEokXTNCWmLCoTjR3F4eRneK1KoQ3XFPetix6NBmgQZBCaz9TnNrMFVmZ94TvEpdQJVbh5GvGde7rrAduofKqC",
  "key5": "5HrgU6cMqkK57Kc1Fj1m27TCez4iosVyu8dRHyk6P97yKHNxC5vvX5fvfhBkFQDQz8hT2suMZD7rrwiFq5fGuTST",
  "key6": "65DcDe7rjRC8dipz68RCaVgE954eJs5FH7Jr7HBUR2PrNw16sYjeVoK3Dio5WmJ3hYGXocprQkoHgiSRXaaCxktU",
  "key7": "4brtTGT3Z6rHfWk36cJe2cg47RZujX3JzQw3t1s42SepcNGgAuhJrgXotjn8YYqCEc88V2ZVGXSrzFH9sPcHCSXm",
  "key8": "5CwddFj87gMTzZhzYHM4gQ7Xsxthu4eiS39eXxyj6pdCmu5nbUWRBnE5yTrZ5W7m9DNRX38FazWKDBDAv6SK28FB",
  "key9": "3ZJqHnvVT6f4u9H8Qawz5GuH84Qkn44Vq5EqjZqwo65KjQTzi6A7p716jGQ8fYYYTTAUnRAXHcWN3CFjPs9t4Bvj",
  "key10": "Gsu4he5NALguVYVR7XXM5VwQ2R77rbonxJfB7UBzbaCkhxXbE4EWfsyr5AVcGGZP965BNJEDn5gXBpWG6wAiiBH",
  "key11": "5uby99g9CWc3TYEUyi1t3PyvFcsrPsEsmfeKC6f3PnWLWJhdxotjt5ceEg7p56vzqwBM2DMZ8gpudA7RiQK7npaa",
  "key12": "Xbp82S8RAWTJFquw8zZsBSze2S7Ttqtngz7awuNGZL9hTjHXo6LBXvFndvJwwCpQ5WYQMvMNezTXVp4CZV9J8oZ",
  "key13": "4pT4dStWo8N4FcByXFMvwezo4x4EDbYabJh2XfAmVmaAJqBKpXxwJcwvJVxFEnHMc4BkbymPj53gs9SD7v1no2rG",
  "key14": "5XxfSQtLr19uqCR7sK5Y8EaXmefZEA8jXVm8AwnJdCUx9dA2gaXuVyzCmsa9UAtsQAxr9wserfE1CAH12PNvyDmc",
  "key15": "5btcCYuvZynRmAMQouqr19fPbgS5mjLZhXWmCr84BqbFRZXKhS9Jp4eXgm5ANHjJ82i1HasdzFTcrLWAKRDg1p53",
  "key16": "4PADTsaBFT4Y5MoEkBunhJYdEoUj4UpXFzk5SkddJdLq6pGUy7MiALVTtqqUv6fhsEhQXBwiQGRCXai5fWJHT5Ga",
  "key17": "66zv2z2HRPa3UsHF3jbDCK1hhmUMAiozFHnPKTtsVwB7Jqays34dbu1xSCNNARQFq3HKWrG8v2cbLrNjP8Bv3Yxm",
  "key18": "5Ygr5a3eQT2x4fm47U6UXV5PBPfpeFyg3Nd5wpaax6s6RoCBjLpu8b5howwzbTz7CMvR6kU892qSigJRn7uefn1Y",
  "key19": "55Sh8ei2JVhSzBJdL2tfb55xyuRZxbv3GWCsh6AbZytumzveKuNXF2axqDUBxYn3WfYc655x2Mu3pLvmUF8BzXgN",
  "key20": "3kogTjwG7UX4ewr3S7UbYpUhNZj99MQ1zy6J7d3VPx6SfBKexuqv8akwqaqQExLoy94rG2vpuGcedRR4BfLQ1ibK",
  "key21": "272BWdCoLXf2DvjzWcktQD4HXP8v35mpRtn94MT2XeMkSmiF4h8UKK1Q4bk8EvWGfhAiceNr6Rb4fwmRRjEcWqxR",
  "key22": "34xBhjnMjAi7hQUJoJhaprNAGsfpNr1sxcDXrNZ1Fqvr9Ak76oVEC6Wz7A1aZtdA55Rs4S8nQgckgWAzZt7kseSd",
  "key23": "3u7Q2kBtvWrYmH22ayGSt5pZ2ZFQVmntF81EQbsNZ3dRBDq5vY2dBE16WeonoqbNgoSwphzAi9Vbf9qxveJW9a65",
  "key24": "5SZggheoJ7ac9XYQfJ3hXEzrqtVWHVR2LtgVFoqRUuLfFWsL17y9n7yYdSvQv5zWkJYaAmohEoD5eVLy8PEc1bvo",
  "key25": "5oUFtxkZ9YiFvznBNMhNoMabatVjAPob31m7u3oFPB77nfMZBCukr4nzuyUYxyM8U4VrhfADEj5B19CePnvNEYet",
  "key26": "nrPcdSYkRxZpiiTBWQ5o8FkrbXwdKBExPsckPpUSbbkt4QKQ97otJbyJHJSVqDS5MB12KumqzHKT3Ea3WdNpaqB",
  "key27": "5Gp8LQ1jUaUbVmZJdbXc3Zgstt4MHfuqtefBJYioyiyLcHD6M1G1tnzs1LTsBs6EiNgS7PJNNJrA3gmgegVhU7sU",
  "key28": "3i3u3wdaWGWMysnU3P8FXxbtsbX7Pb4X7gTN5CsuYqscJwufwr3zzxK8CAgvdgr7n51Zes4pJ2NGXiaks5mdNTS9",
  "key29": "2vV38vgkkCHMYiU5wMZLdDvJLq6zFGDGyTs4vGjYF55jet3LruoXFqbKBmctmFF9GECWCXqkzaU62y9xxVkheNE4",
  "key30": "2b8kD1nfY1yTuVH8q84HnZNyyxjyeVEXfBuKxNR8RJRddw862ZJgYeSE16yuLjCrakXr8f7jSFZmhPB1LcRCDxeY",
  "key31": "53jhvqaohBCuTLSfCaxELvssH3JDBkxWvcGHYK9EaU7Bp3pYXsoTHhBSGJLWTVVyYXH3SBcUqoJNRc4DJhEKroSQ",
  "key32": "5QUihUYKUGFFyDTbHVKGqgwprEmpiJLLDu7z1gW1WvRWArUJY2naL2pxhPFNdPUqT5oxn5HFJAt9Yy5aZaxEK6tn",
  "key33": "5ZXpsYn7hbZUR6B9PxDqmABfTcwscHKNfXWVAb1UhNdUoF21crLcLea4gf6tugoYtFZLvVs6LVC33cEtAn6cDHe3",
  "key34": "4Re3rbzWL9uCSby65dSx9Hunrjyi7JUm9tk8dy9hknaGUbpcAwgRV2T8BWvcG9EYEknct135S7eJGC1sRSqn2XUk",
  "key35": "5NHteX5F2poBD8B3ssouN9yp241kc2f63Ytj9dCEAZA5gFHsKfYKMC349LmYaZZzHXbVDRtHYW9j8REPvRCCn3yH",
  "key36": "51jw6rCvVsrUxdGrfSoUQzCi2T51J1U8zCpNVGvqonDykXcVTHdfWyn235Qqu3723YdmPRJUTfYD2UhAtkasCzU7",
  "key37": "4ESiGR1yhVm748yUGnEuSrJjD2s82HX7rqySiuHTSutpmqkAqJFyxemYghmEdrFEwsst5avUNEHsXppN2Q6c5TbW",
  "key38": "231LjyAGeJoEFQnE6kFW8ydVJo3U9M37qz2Z9xKo54BDFtwVjjeTbQT13L2UAaV2PTad9tk7prs7tp9qbSuthmMB",
  "key39": "4RSzDCVb2rHfuH1xCtsfUog9YnHboRKgeq75mG2q44qyFfk1L3zeZ1w82VXuezgmVPGVDdRw6QxmLApzCogYFA1a",
  "key40": "5ySgohRuGxwkmsLxbQWCCjJTzQXwDJrtJpKoptNeeqs93V7DP6dcSj6DG1bxF4GydRsq1oios2tjfsvSCZrB5iE6",
  "key41": "5ZgW1P6B1FMR9n3LRoDPjjipyWYsnkxPvcxTE5ysmufP2aYbKrTemvt7LAaFJo48nPrXdYSw1p9esSRfScmMQ9LE",
  "key42": "5z3koL2YegG9G6jDSEFci9X5PGpmrBoXeLqodwXtuTC9ppTJhj7U6pzCkVvv2ebZY6kUmRkVoisa9WFbwzdaxWJb",
  "key43": "5mRwJKM9qHk6cAh5GvwLVf9t9gqdXFurY6Xr3Vad49ytSasFwb2LmLmLoLxTFgSik2YALJN4ssHZToP3Zx6LrtDW",
  "key44": "vsZ64SPR44QGsYs4qnycWkxNs5sRuxpiG6ZbWL4aUyhJzxZJsiTTp1ULzUqFVxZdKrbC8N3FRxUxzQuAcSs6zfa"
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
