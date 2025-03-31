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
    "3VfmstJWQXHyP2MitGBkijkgsdzjGZyRRhUbwnbhNsGifpNrZnFRHGLFytcYxAwNWcrtpQSi6GApxWYUEDCcctpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWssHM4on4ikS8ejqVaFZaJC523EGpPmhjo841jnpSWoV35gabVYTGFC6kBhGg6ediFvYF57gWpHS4hd3xeZp9k",
  "key1": "3BLjCsRegFvcMektnL89kAdLs3jscJePGsKpRPrRLPzi6eCZ19Zx6wm4WJSLY6bwHxFsWqMLnWvk8EbCir2mNyb9",
  "key2": "LdystYRRKyoPQRmRJVQdAZzLMgvZ5pczqe84AvhK5SvPAdnBY3Zuy6GbFPwNDugbY46UbbaMq3Jay7w8zkT8CXD",
  "key3": "QNAGfRYMJFz9uKsG6DbWnA8Dj28giudvTv3JvPRtGwDUcqrdWKrDdYdLv4qDBn74xJ16eS5UpRRiq6qgHTPKSc6",
  "key4": "2UVJXUG1z5VMD7w9Gbw4LNa2eAk99EJnQefQmUk7UzAbQKTGdsZL8FMEjjVFR8FXpLccizgn2aDZ4MmXP9hAXEu7",
  "key5": "4mtCZ2RdCGPCeHHPGo3uVXm8DCykEkNQwWrVcVUFp2BYLwhboce74n8iDL878CM9vYE8hXSvqeuwfx1LCW38zhqx",
  "key6": "4S1H1JdD9nL8h8JVyybQNAKnsUe4o8QAX37ZJADu3kNv5p7SrRR6GsffVEmJxbpL7ETnqU5x8jFzycKjHLmQyH4p",
  "key7": "41hUTLtaFx8tbZEf9efceFuNCSpVBCN3r7vSEY5RpaAvcbcN5ogpXCMYPRCUDP5cjajEnbFUXFA49z7uhjxoQzug",
  "key8": "2ehfko92haUsom6Hxy5eKTcZsxfdbvcVipsKDoTdswADUYJ3CNDZQ2kMuZWJ8R36A5NWFZpxekrGoxFmTvZspp9f",
  "key9": "3Jmaxb7GAnUVpLndzECe8wJ1EFzbkdQ3zsScV4gEqJCxDeAaarfkVHPyjctGZoaECPPPLLSkfFYvutpqVwf5cLzM",
  "key10": "3qTZoWDWVHfV8pXd14nJahXg2kxJsktjWD6nswaJWpHyUrHXJfvMC957NmZ4HUToFTGqKEfd6KyXUWZnv1BvYs9a",
  "key11": "58PZaxbpDxutfmLY9FoGmAZrHgY4yCtRwfQQucM4h9QBKRhK98AMMosobkNuzjjetkATJ7AAoTQMABpTrFwn6X9g",
  "key12": "27AveHJQnrqaqHUnJUdhBQFhxn5HzKfLufQm88JUuhAx6UyNVM8Woz6WUyvoCMHKiJUYco3jKLBpgvn4PrvpeeDk",
  "key13": "51Uze1jAjSL8orJhe3j8dsHDNSGjrBQ4JpVB6WS6XEcdubuE827Mkc6WyWQge8z7DRem4CQy1teRPHqmYcsed7CY",
  "key14": "4PeDELNkMSLs4xq6EyKBujjnftABmgLs9D1wY5kVdXnZuN9hATGh5AhXsrq8xhixJdXxx2X5fs3sHnPjfBSop37X",
  "key15": "5fWdEvZEMZgsh6kTnW7FfyEF3gBgNm1UFpYm84xRsUzK68nimuerxy1Pf9ScCmKgGRd3iFJ1evdb8hWdniAMU7rt",
  "key16": "2vtuCuxwdncxYTppRT5sDpDoh77ERuz28oLs77jk76SpFs2JtkyGQJLkgPvaxsnwWbMU4B5MKX3T2Sje3Ax4iVri",
  "key17": "5Mdna7HTHTcEDXbzxtjjdYsW2EdXqU1mhu5SydzBFT7rLFb3g8tTRhWwZCyp3iQqb82WpCvqjsYSXoSXgeoc2oUu",
  "key18": "2MvyL2QLox4ugB2NqBjgf8tkFRF8CtwoFECXapguVqHZwymVcmKUmEAH24t6fa6Sc3zEUvmqDz6A9xwKsakByNSw",
  "key19": "2kGiHCBXFhqLo3pD93S98ER6zMCK2AMgumETvoKG2rvkvrvNwLGLkUxdrTSovgpZGA1VtZY3PBg7Z3Kwysm8tvWy",
  "key20": "R7kwGGKvsrR5pwvwBrKnakUiCqubZLj8xFFLro1A3JwhkhAJuw1HVTNqK772E8YNTggPNPidEfoYXUokUw3GtaS",
  "key21": "3oDh7npWFyfUeqQe6DFGW1KNXA6NzLo9PCJ7XruxFDde3avTqYcT84xJN4F7GCZeQsfttzxvfJxweXd8tTEQYPgi",
  "key22": "2idW79YTdNYYReffuawgonZ8MWSjK8RXtCJgP67wVDRCfMtUV8JazoW3hCeRSEQi45FtuA4ftDGdiDpYWSUqrTeb",
  "key23": "4xs24xP3AWfY49geDFSsZcCLPoafCjJDDKFN69WGV7Tuaog2WtAPYCPiBnZUymMyoxWXKsLUohRMtUUrpzXGSdHA",
  "key24": "5PSmtd5GaJTVSjvBAMzY4HCfTceGEBvQ4ZBdyiHTjVe9guqjitsvJhq7af65zmehsxByDmut3kBE8L8enauhkx3m",
  "key25": "2gETyd1xuoHvrbuU53zfmc8JuEsa9C4FseYkbdkmgCqsBCxVpRe2YYdabNHa5ZaaeD98NaH9rsgjAiW449y72HFh",
  "key26": "3ryrnNEXZhYyYvZFBEsK9yuZVmxFMT9yEZcFBHHgmYQLtMeCSHmuW3Jj8AbK25hanSz6NAESdwbPy2WYMqArtZqT",
  "key27": "5QiQqzkcpbWx5BrcoVigoLqTFW6vZFF4hgZZbM8adrHF7L8USRDYoLR8oLD5hK94h4jHyi62E96C2MLBErYb4gh8",
  "key28": "3QohdnxdjGbkg2bLxm7gry4VrXtg4cxUPYQrxvN74ydFUgiH8vCkEkLxAFh3sFey45czkwEMub7VuQW5qYfkKEzi",
  "key29": "3HDymvPWTxnjBvA7iiNRwtLP6F9RNWS4x5je1btGueefGpQNsGa9Eay839d8zr5X9vyDDZ8mTRfAVM92Xcpy4oRD",
  "key30": "5de6MdLvVBWL6kqrBdZHkgKKvM28cgehhJGB9cei4tqJBPwLmUEx6KgZgSbY2ST9KERubq6zMamrSNJ9yxqLGzeX",
  "key31": "2cfVgEVToWq79vkk6sroQxQ6dUrPukeZ3o2f5e3xHa5UmzRGhg3RooPkKu6GN9VEXFEyp2r2ZZUTTUv8BsAvkS11",
  "key32": "3Ti6ifg5L3zy7P5LbvWEdpuCe8vJCGQmzBwxBYceyaS8i7UiTj5mFxF3mbHEinWGAsr3Yo4MGoMVZausgVjyvQM9",
  "key33": "3GcyQknaYeVEMKEs2661pq9VafeFx9XQMg2KXRDtqBsHq3UEWm9PWDMF5obswcrRhe8Mba4EhqUTnvL8SBdMDodp",
  "key34": "3xV1EkVJ6TKcY5KVU3MaKNYYYqVVcQ3frJQABT9717DsUDUwqqcVQK5K39VF6G2ptWVhDacahQALh663pWzonAHY",
  "key35": "5xtL7fxBoFREipQXLqeJebo5Yjh8eUdrvw3Pg4VqfwKLsdLbjNkg8WbYYvE7iScNUWzSK6WVYNVoXvqeQvjHfDfJ",
  "key36": "2r56NTBTkF1xrkoSeqY4e6nghDY89PebGfwspFyo9ThnTgzfxjSTrACDAZT3xCKExxiVxitkkUGE5RqDxZ65sg1V",
  "key37": "4i6SJPFN1dBRk13J6MEvVSGogzVUG6RigVZTw5g8RgEKThXhSSWN6K1CTePpAAspLGFJvfMbwbbq7eMqghDsU6g8",
  "key38": "45pk9FMaHq1bm8S8BhS1A35E5m6i4xNNVc2iKyVvsTEz6yPtcXzVgEB8M7vX5PdpU2bHJgWRomLnAkFDdPwo1Zx6"
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
