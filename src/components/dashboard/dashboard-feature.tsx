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
    "3oSauu4Joz35P6DiTuKLQRrT89kPDAWizqUoxQurh4B5cyfUco5YTUJ9gp9gsWrLk42Bq8oban7fZC8iqgYivkgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CA3yiN5WV974CQZCWBfrGM5x3F4EF8odqs8cdKRkkfHier6idAUXcfiadd52QcEiMZ8iAtnRYCLKynzVnEgB7ot",
  "key1": "51XAzNQqgMya6W4QbEK1sJ2Mop7gNe1D89dgdcWWG5kvB62v3BwKNkQGe7Ec88ziVBvkFNFAJbMDp8h9WodPgcKp",
  "key2": "5EBDzSyzNaE6LFcLEFyPepdwwCmsQFu6d2RCi19iFeU3gpJx8WseCFBcbzLpXToin8cquirnf97DrA1N8cycP3Wg",
  "key3": "5enxkDjJk3LCfxnAvKseyxNBpoodu1xq55tWyA1iEg9JhQ5Wnm5znaQ2P4Ptz9F24Z51bJLQqfwY9MB9PiRXTiFX",
  "key4": "5BhrQAFYNwQczYSVppaN4FdYMN2bXxXoy4eCFhMqj3qkZ3EBryYKtQTuravMLJqZXeLK13wzpmnFiDwxDYo1CDBy",
  "key5": "4LMNNUeZYtxb91gD7ujBD6MWkFqsApK6KVm73ir1WWJbK7W98F9NaDEZWjDdjip2haRwvsAZd8YXyACQnALYhKZD",
  "key6": "5h39mjtquEwqbt6gXZb7kVdC8J7E1n2daADdugUDxZN1n8RhWjsVm3kXcgEQLUGTa6KTZXd9JABuL6foeGQHgA8E",
  "key7": "5NrGH9rHAK6sVPD4mPs74pkBx8QF8MKw6fxBmDxbZ2dhQWsidKZLS4c8tr3o9zV6Eu13E9xzfqA1M1FkEgQi5ETq",
  "key8": "4Fdh4pMAZrRytKaqr2w5iGXVMqNzqRK5aGLAtfErBvbxSxraXiiVox3eVtmNhK3EgkyjK6mMuP3g9CGYcNK86cfG",
  "key9": "2CDQYhiEfjsvs2pNzNGFBGmqgDt1nJtvhAU4fGxRELPtqye2fFBt9xpSnkxpBDs2JCiie3Yuht31MrijHda7jVrW",
  "key10": "3nSkseGLQjsg2w2CTKhgkkhwKF3TVHfcALbqsNZUtAAjKGer7okpezBEfDpijew92E7tkenNco5MHv3HVqmbi2oL",
  "key11": "GdvkQK9Lijt5RTcuSV9CWXsBS3kRsSLC3WupdoYBstmNnkVYDug8Vjw1cwuXBF5o7MpU9wMtJLz5tncbwo9ZorW",
  "key12": "z3h7657AeoNFv3ef4FuT13FsT53J6BdYanbVHWpRUhHZY8XwhGW4dHKkH5sFFopF7Xt5VkGH8cqxVGLykPU3BJd",
  "key13": "5MwHz5HVA4xfY1oQfLWjsV1LiVgRKX9CPyMYaRaJWj3QJzMKE8LY2mxi3b8p44yiWvsqpCxE7LP1wAjgaqG52xYJ",
  "key14": "owsDqH4CtsHDXryJbAtvEQZFfMMtoGbN9ABpf7rCPjCSTiQYMm2QjTajjkcbhxjQ98FXPqEHw11wa9Pg1536DWX",
  "key15": "XAgHY8baHt3RFWj3h7zkvKG6odNSrxDSpeYXs9CcR231HQbicLJcC54gf23fkPayjyRZyU87AjhCwUSSPnxFobd",
  "key16": "3GKDerudTMCgAiwgLzoW5ak1KxZvSL1CfgUPbmz62VdyiFWptii7akXvdZ8bMtm6Z1j5KduzPBpaAQ3NWF4UP2Xo",
  "key17": "2bzShbfbqeApTTeDPFUEDeGALMLo8j7zYZ1HHuH5Xkm6EmvDv6au9p11sJ4neKDvzmg4hTzcjkhA181DJJqJQCxq",
  "key18": "3D6bW41VA1q6nEg3KWnSM9RfGjLAjQoYpwKSLizNu2Q7eWVCRmQgYskBP3aoLopnAZB4383F3Mv1doTHSrKRW6Wd",
  "key19": "4LYqkGWN5sAqRiLXki8NHjnqcqrvfRsSadUtQF5yh58uyYzQQ961iUqtyuXnipJY78wWn48G2gwnrDJVKByzBTgA",
  "key20": "5UmvBCoG1xkRpMDo3UidvSn7HgD2QNer78sW6toSDadNDtzJb1tLdry3QGYoatpX8HsHNpFcsLdDxuXEpcDmJajW",
  "key21": "3xfoXja7heQHNsTBDaDJ9LDFWJG6jbuA7UC8ZGeGNNcNAXEneg2Qd8badAsoQJzyrTj3U8nREbyqb9FkNWncKyVq",
  "key22": "52erRPRSGdHgpMRrdkeAHtJvzXBouweUU9tzpSHqggqMURCboSvFmgWApCgDqTqXaXoqEX8ZfnEPt4xLVo5mDvXd",
  "key23": "2UF4gbW3cm7CospVkUTW7NmHQvF7RjUTJRvGdmdGCvTfncyTQX7zikNPbErsiT5rPSyg9FMXNMgggxHHgYK44h8j",
  "key24": "2VXL8rmj5cQ4AzPk1H5xCYmt7Mn2hNzh1UubfUB7Mg4muiJzhKpzRC6Q7Ph24RqZG4z9hM8am8y2huRDujRxMGKC",
  "key25": "J2jfaifUCyYuvHACSAjp31ks4J5c45i3kqcYqhiF7DJCQKSF8CM9mrBgGqbEnjTxpJ6m9R39B3D6cYXN8cCpw3o",
  "key26": "3bYvE6PMXiQMdvvj7c7Ah2wfES5W32i6FKAJmwqKN4aW8RQwPcNvJ3WUJH6YMBF3aimuC1B2C7yPb3Zrzbm7wLL1",
  "key27": "2SzPw6yWvgQ7uybS3AWEHuPFJHpBcEAtCZJuCC5BbBhTz87nqpRe82cee787joTMHgCrKxMYySnMLqFaXpwhtfma",
  "key28": "NAkyXWxtA2iLMVxW6LRk3usQWkGNpdbngp6TTBAkqTpKMZQukgiRMNGWiqBzvgb7BuUP1YsBzrAgvkTQiAErS5v",
  "key29": "4QBuY5SpYUeShCNYLenc4R9hzqYD1U3cSTdBUgxiPr1SNtERfyxziuXLAUAAySpMvMKH8SXUw3uohuPS2nZ9sMud",
  "key30": "3Ni19tiyaDDxbiCtdiu4YGcKunMEbH23J67cmWNeYcsbeKP84uXErqSzo42NQAbvTUbXHE7STT7qZc1grCqXmdMf",
  "key31": "5M9i18cavZcn7GQqwpQWPNb6d1rBaLED1VzPgduC3Xqz5kYa4RwdB171SR1HDEFwGNG5ZcW8UHt7L4vJHqDy8TgS",
  "key32": "4WB5R8fnw3cCgd8Q6Wi8GEBy8NXU8CMBuU8LTTauJ7Awb2adH8HJDjDvh44mBCx3AFLH96ECApvqBufkNFQbf8eX",
  "key33": "VUoGjoSAQngzRv338KkHFftGnZDFzmpSKEaJJiJMeAsRKnjH9ckn9yzr9RYryG8iJcCmPEyihbatDXqGWUVQMqS",
  "key34": "2YHN332dYULGGK4JNGGPJLJTTWQoaHeHFYgbJodsxHoD7QWbRs2D7Q22Gz45Q38NVLLvMKoP9BBMzGTFj52cwYBL",
  "key35": "5QUZ5Nnn69Bstr6MQVhTYg5Kp7DPgDE1qW6mV7aQTgj5tzTp4hQusbhTWmcWoJHsTkxx5sUYSWyoKg9AADht7joV",
  "key36": "5tcbpuAmXjvmXag871Xm4N6PESfpm1vR16XxoF8AqujDZqnPos5eiAcvC95xVNNRVhn6RzaXdSfwtQqrJMayFCYP",
  "key37": "2g5HKMyj2rU6uvfAwqwv7Gu6dRzVj8Jb7VwP11JFR1MR1ocLY4F7yp9pdNXgBwAX2VRKrE6x8r5L71NTBaVoh5Yh",
  "key38": "4HxiDt3Zzf3554Buk7MbAP78nH1uQPi8QfPCGdL7NTquWqYdZ5KSeq8khmBG8zANpiTawn5RRGDKx9R9aceZeMY",
  "key39": "5kqRQUEX5JhHHbFqqUNRshup4B698eWBbALNK2SQYEmqk5DNZe42Yde24W8m132aFLbT6PQH5gChMaLDUtugb4BC",
  "key40": "2qDUygnURe4nGBMdf7kemdWrAyLiLUqJmocQj4mv98Jm7NR91ddgNJ3RZCUkuKan72h72V9fJx8PDFVL9MbxNd7N",
  "key41": "2xiiaFFVg1xk35EmPWtrjLDqeQM2wxmB2TpoyB2GeQspMreUguuNE7aioWyZjUE3nvTZgUzmRdnfpuQ4aTox5YEd",
  "key42": "3XZy4eqN9FVkvQxxjErKryYDN5fxPfHmzPTijJN1LA5xa89vzxSAR6nnMFtG2j82XiDCYYMftp5VfAU1Fc1hD3ne",
  "key43": "4b3Z7gCDdz5jCNmN1EPo44Uiy4nbvGHqpJqoToaMpnEp2ES3qVDdr8uLpne73nVwJ12Hu9cfeDejEqpv6z54jBu3",
  "key44": "2RKJj6AqAmjeA4FUV3h6hU8zkyB3cjgE46V6sb8X5tCaFmZ8j2Lfd9FfyZta426etcXkYJFiHxRyk74YQFBXKkzP"
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
