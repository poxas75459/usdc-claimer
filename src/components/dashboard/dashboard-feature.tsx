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
    "2AfB3mApk7ZLQDaaBXJKTxBiXXTp9WGB5eNwTVaEqxHYLvxPi5wpHvWuMGS4hCZCS8vC7Txj6kbjJxY7Upmb5gwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhP67Yc5AgnoctgLvkkS1GcUzbqam1cUhLRLLQJ9puAdzLAFiccC6NGWk2yzAhE57S2qUqogbtJRuKh43LcmsWA",
  "key1": "3Gno9HBd8eFgZVNPr6wEh8z2GAtx42zbFm6PBwug9RfXxG9h38SM9RMdurTv2d3kkigBEcat31E5GsrH71RngLJq",
  "key2": "wPTJEHV4GcmQfQHDNmW8g1g2g5z8uZk64xZXVwTRp5TJiG4wurCwUCHYsjYC5yWfzdkbBaZD8yP7R3gVEYBGhUj",
  "key3": "4iVv326bMgriiNE5ht8P1QcdR7jAh7WqMQFDDugxDUhADGgbQgpF1ojYtQ1RathL6pZRsTEyFfr1YcKKa1biKbiC",
  "key4": "5SCiPQJWdsyk9dy7PvLUeG72fuAorF31svTA8EPgfiiAwg1WRhzN8mdye6GycScKcyB5MbvrSJ8tpmCJdXCD9GMC",
  "key5": "4to4dNK4VsFU7ShwEjAZFe39DRr5FbEmy3d3pUXhYKcfmoyWaoUCxRLfFM2Zunr2qSHeJxpRmzBuQoFTqRuXfsJC",
  "key6": "5oYcoF1SEv22ytqtFmZTAi2Z3yzMdQutfht1b5Zqg6CG41GtE66oyySwfRdzVJVd5YExY7J8Pm2zwKjjq5izPfKG",
  "key7": "3xj5reToq2vpP4ue62Ko6PSPgN3YzNyQQNcGygiBYTEvFaNrTw4YRhhoUokJTBTFCkppZ8eAnGZKNEpA3AVvJD2z",
  "key8": "5FvGZsjAkVvJn8d7Z2aq8bZ1nbH9jfgn4qoDZVfejPTCvpwFDjVfgu3nbBJ9k691qvDNwH2hnB2wagVet4hFahPg",
  "key9": "4EHf25t9EhgcfdxSeZoZ7bNGJMmimGC4r2KoRRuEsktKxEEG11zWoncHESSmGdaMFyXQc3LRvk6gtpnShX66qxWr",
  "key10": "BX2hzDLs48AxQtCqwtc91reacZ4XgqfipnTVeRKwdATc8fwgho6i9yTp2byhshradKSZ6xu1ZPVgsaWqukMWD2i",
  "key11": "5wfQ5apBi4BxcAJVWzmsVed9LE9iTovuxVkL4VNXpJpzq6RUR8p5WBdbigepQxkftKSzR5N2ymb69QvVQwJZ6oh6",
  "key12": "4YJAW2AuJhyVEEAc5aVyWizoboruZyEfFFvHHnFMeWumMh7KX5atYyUxmdb5PaU5nASwahbdXgc8nvnKgAEnHj79",
  "key13": "coGxeRbdLEToeyQd4TeKx3SRhEavdvjPHy2jSgiuhdp9BVN86b6we5kvH66Pzrispgbvp8zyLhiCfReYau61GEW",
  "key14": "wH7ciBQMTUDCVuvx6KYWGehQ9HkMbtJJU6oxqJitA7EVkx4GZE3vFRrz64z6JBuWxCypsCTPdHRGZHzSS8swFqf",
  "key15": "5ej3FQsLpaBiEnxKq9gTAE3d3ShJQNiuhW9pRugtrgJ4t2dcVdAjLw2KjjvYHQMkDN2k53YXcGkRkXzCzN6E1p5A",
  "key16": "43Zcne6x3NUjVDgAwuzSqQMH9oCanwEH9sAHmgudhxyvcYtXNVLFwvtAHLWHmb97mWHP4pkjzPWrrWqZEySLk9qU",
  "key17": "5Yac8HaEmEub74ikQH5garRw9qaZP3Fb1VvwX21fHLDxYn7KvZ6aPujzhY2fjKf7f5ojyZmdeacHorDJWEAcMnCz",
  "key18": "2j4a33K5zmzuEkzXSB1k45fU36fS4bKpTpYARq3BE2xeeMYsByrNKuakUjRmSH2o66M2YEpNvTgBLEKwonozZDZM",
  "key19": "3bSHdX7mDFosrzrLM4scqoZt77whM8AQgsY7wrok6QcE8Crd3CWS862JfNMxhnmoZ9U5iU5UvDwLixNk1RyBLr25",
  "key20": "2qpm1JAfXyDhQTEFKB3Lko6EcHxwYtpi5XDF1ZsE48P5BLY7QESRP4R6qB36HR99MCDNs2Pmpa1UfECZS669nFD4",
  "key21": "Z1PZE8rrKUE3fPfw3KjcWDxmbGnua96jnBeHuvhcVsqsDvbrP8sRYkxJD3z2w6KkprpG4UMw5JPbFRatV7QoAuk",
  "key22": "2QLx9end2kXk3154DokZsfzyZcHVVguSrrGkUxRWCBJ1ZUoxB4zXypg49FCkgvaCcKWEY1vbm9ha8MN4iTrrTv6f",
  "key23": "aXzKXx7scsSntG5MBcJAE6jqFZQDAdaYrqHWqjY5DdF445K3rUims6As4gLj4xSdkah1kRT6v4td1kgxFxRJzLa",
  "key24": "3FdqMvkc31aXhKaq4SfU42eph4ajp4cQtn5ySmqojxxrMJoj1R65u5z9QzKW6dyt7PC45HkPEWThzc1Y3WiCYn4j",
  "key25": "2fvVvRj75QfiJ8Bg3zqUP4rTTbYHvJ99khJcFMP6s5xAwtvemnCUJ1iqdF6y3tmpKPiyKuCRWuauvniNtvNCJzEy",
  "key26": "4Pq5DCBMLFS6UQEyThdAcZuNQWu6uvTAdkBrw7n3CmZEfGADWA6zGdA1Cbwy9UDp2GrX1wkuWwn1vAS1UByuezaU",
  "key27": "2B9NbAJDxMJ5pDsJ8nAM6ZsvL4F1WyEhhzYAnEAffr4QeEFhC6FVYcwh7ZH8LnkipqxT1TFjdsBXn6ygrstVP4RP",
  "key28": "5YBu1V2kqpJWrXZbQw8SVFcUdeHgH3qRQhLNcctDmBRJKwJG5kXRwUPjoLMMBREWzQTjzrtE5feMCG355jBJBPZH",
  "key29": "4zPWGUkaApAcyENfw5561HmM4sinNoWpnzv8jXm2sowSVoGpVhPYTtbGcbg8b29WVNtsfmTbQVkNu9PcXDwQx1xU",
  "key30": "2xUMC4BsbPAdiSqaM53fHFy9eWAqkaJX46LDfqH8JPJ2XmmpKsRrjVpR7BVGT3HoyTF9afkvtM1WjC77s6abpFtF",
  "key31": "3gHKaUrBqkeQNyHSLHr2EaDuebuCJba9YJeZS6dFsmygBEgrDS6QfE1VPFNtWZvK8psKLDiWZEdnwySTXPasXfB8",
  "key32": "5PyyAjN7p5CeUHeUeGXRUVz9oC7CmC5hBQbnpgfo4YP7S6ransgvb6F498SWHvBPtQny5jTRELErJEWggWRuy2o1",
  "key33": "3ixpnYgETSKdPxWskVLfetxCYDRUXUg5VJP13vmXwuyAZwnftFcCgZjXbjzRzYauAx8nUn418y7TNniFaLnn1TuU",
  "key34": "4drqLBvTrr7jXc4oaafLbrd8Ck1Wcg7d2CjwF935YKhGHzYvUnSTjtaModdw1n2graR5xjXsGp3rTrgUnDF6hfag",
  "key35": "sRvpZeZB428P58P6sWGGZrCc6SRveuFT65vSCf9U7y6Wov5rxFrTWDDyHPuBUnkyZuHrwZSfpNbRLa8yFpYgF44",
  "key36": "4AnotZVxn6KSXmM72UudhhqoSSj3nsdSiEfMum57pSvH2fX7LAPa6VWPtPFJ59sETf1Ezt6mUmD1xfz13BsbdtT",
  "key37": "fmNxD1Ruwka4AoWBZ3Gbwm8PnPc9Bas3fW5KLp3xuqMFUhSuZQ2y7VXmwcUsN2pDMBF6zArL3VhnXHtNQ2JyyDq",
  "key38": "3mJCGN1Ry4eCKmUk2aaMeWaGnRkjACAm1exFzWWEQ6SjYHTFcti8v3JA3irufsqi23EfntpkHVPxAizfAYTLaTkR",
  "key39": "zMyZbWwDCtxCMLJ32WftW7Cvojazy9tN97F7TwaYxYUfe74JRgF7Gn5gkbvNDXaBQYnu7uxBSzxVwx8kivHGxZq",
  "key40": "4gp6oS95ahaM5ebHvHtN18eCkM4fWzkMWsKb5MsGzcTh6ZvMjiA2u1X3H8SrV4bRTdr4F1L3GWKML7MD1Hk6MyVV",
  "key41": "3xuZxMhiTxkYDq6x78d8JkAW7NQ5yGHHBzXPH9XqTeYc63PA4bKdKvSQv7U6WUoxQ78qSG2cauQCWT6b6dfBogww",
  "key42": "2YLadrufM4JLs74TojNHDpFLt6WMaPPxzjPjP7nWgWxvhqHCW793Bv6MB8CnHmaNwkbmxtCKAD9gD8NifU3agU4c"
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
