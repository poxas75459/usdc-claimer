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
    "5iwrRdUcy3ijyZSVnxLwpovnQFdYup9FxDfzaAaUjtXBP2cvwoozdetfi24EegWF8Ai7Fjn4Zgza9tbrQBsGGT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLfnsQUbjvbUmQH2KY5JyiiEsvPKT33ybLdmXyhNCGDSKpa2Vc9RYfTkjr3z6gWpKh71z6WPuHjX21uBHKuG79u",
  "key1": "5NpoqrJw7MDzf61sx17YWRKQKLTjL8BC8LoDLUuLpNXbFoAeZDMzATqLcskcJGv3hV1nVJ481sAhoNefQgXnTj3J",
  "key2": "3ie6JzdMckJzMXnt7ZV3KJFZFJ5opZjU37L7jE8WrCQhHjwAaeL9hc5pfDjojBiatdtLJcDDoUMH4i54EBLYA86j",
  "key3": "5nKF9yLWsQQLAV8Wv7NuZ4fRAbpLRNeojLWtPzMW7gbgUi3oGr3cYQ8HPHQsb2MyVJU9pH2c5mVzNW9f1vE5KDua",
  "key4": "2oCqDVaRvD2mHEajCiR3PSZb9pwsusJdBsvZe8fQkYACFDk5s4eTKXS35YYqks1FK5qZxGMae1njRZrXnYn896mP",
  "key5": "3k6CAYWz8q6KD5g9gQUJVzcYC9eDiaMWgRF2cRAGaGeHrbG5FXdMaHwtSpFY3WJ1kzpGVidHdRh2QZPwgvxRcm9P",
  "key6": "vNuwsVFE63SaRewkoPekogMiTm5f8bEzwhGi5za9yZNSwZ9daGuzrn6Zio61ybnunrygiLT7rKmvFjp6erAEdRy",
  "key7": "2now1gLf1tW1dU74oZDE9u9YsshyybqiwyAzmprSoz2CDi5GHKUbb4LfjNGVRQKTf2vK61zNvdrPbQB7RPxt1nTV",
  "key8": "63HYaVRS1rpxARuLut2zfbeAZzevTWsJotf8xLtMBn1aEmbs9XCDPGNy8Ldcf27gqdmemRTNbc3SJPpcJwou43uN",
  "key9": "2ZL6eCWTFLfYLzJp5czRuBqn9iNzKWmU7zzb63BACHe8iM6hdQUaFNWLDTL6L8fqYPogeRGnZqkuRvzkCdeCoXNe",
  "key10": "5HkB9vM8CpQX5C8HPrRRw7GHAQZ2DRoHAx56j4z1TW5d1gc7Lzug1wf31qrWpm7t1VhJ7anFoe9qXnoNhKsK6qQR",
  "key11": "4A3ud7dxZhM24nbngrBspH4gBJP55xrMvcwUqZig2BRwquo7BS5pwnrb7WJssfiCqQM5tgpkqxqmwCQDXaGhSepi",
  "key12": "5edWX7fNh7aNGbdGWhuz5HfkmGXz2tz4ihmmun9ybowywjiVCeg9JJZiLR8xyJGXRFGR4SQNmnRkJyxe4QoHzfBE",
  "key13": "AiHiTFMjm73zn5x6hiGWRNQvgzABDqSh5Sst4GwGFvburjm69LrLPXCWTmF5KVnVtbJxTdU5JFVUVKJoCRqVwiv",
  "key14": "27gTBmiu1REiMPiBghfSF6X42oWJa7HncdLofxMzu2DENdV2bGBTHq4EFH1R2Zsj5CcXbaHXuRw11VoL9VAKUkvZ",
  "key15": "QrpEiXXXXTr5tpaumTATZ1hn7Vy3Vvmmk92Q6mTTcqFG9Sen9AE1K3Yv7ktRCCfrLadQ8PF7KnteJo3xET1jWMj",
  "key16": "4gw3RuFfeT6FfV1a5aBkjReLWSiKQeUET5mJEMRyip6bQnAfCjEfA5492KUGEmFEdCj66mP2VsvnqeZu1w8KwEDz",
  "key17": "564Zsy5YdiY3G2MGJnSxqc56FDVgwYJBSu6pKxe5HVnZRciEA8A2ZZrqDj65Mef6J5jy7ZkUphqj8YKM5VvwCHsu",
  "key18": "57NANwPqgx4zEK89HaFLnER3DajNDcSgquSSB3bnG8XV7t2kvi1bhpAApQWKkx2P1C2rhy38opcjtqebNBWSysPo",
  "key19": "5cTVUXUHxHGCPAiEFM7DRYuA1Qh4CpooqjU9bsCegdQufRd74vvPUiPiDPUTBDjVKwnkqh6eivRo25g8uJmPuKrG",
  "key20": "2izTe3UttxSiv62WbWi4SRjZTdDfhqiLcXh4YFyNJJqxZbxkNvsUoodn3gCNEfSTw7Jp4MifXZLsFPYXu9YAnUJo",
  "key21": "2ppP7utBBNKWKNB5v2wFqszAKAQfeMDqCJ9od9vHqJkqAzr4nwBdXjvkD5ReZGmVUNZPV5ijxCsC6bb57DZztThn",
  "key22": "2oAgtu4wzZzCdTBHX8ZwBqjTbcRi9bvcLcnfWKp5bsWxnAx1jeb7nwxX3q11utLgEcEujXj12Me8wFJBYB53FgVW",
  "key23": "5TZpwoo4rrofQFTXPTmbXkXti6b5grgVjHuDChTXgZMH4M35HPJtaZ4XMEKaNDiRrrooPoxTWePGaW9tj6L2SFww",
  "key24": "3sVQ3QQLkHrCu8qNgfvnBqywvWtbYSSUgyPtEGrY1JiPDFUJqCuNHdkpX2DsCvLFMTk7k6dboK5v1U5dvERACoLE",
  "key25": "2yzmK5vtyeMBu4UgU6tosfsZ7sfqGVbXxNumDWZtDhBiKnjrSxWppCmnrsgEzfworDqDtN3UZAC4jBb1mH6thqJs",
  "key26": "4RZuqPbPAW8MPVpcDS29aosnfb7NW5bE9wdZ6zQ7ooaJzy8coAbwhLA4q4jhpbNPLt82aLXct9eHkdytW3i8fTDV",
  "key27": "65pi999rUHapHpZfjYSPGoxLRh1nasWFSRMEx8bHJkv1SeW12axxf3itggHisfzs5E6vWMTw6yehsnwvEViwvBDR",
  "key28": "F4V4JgPkKJDDYo64n5nscQTaSCF3onWHZdWBD1i9BFn6LF5tXc6SV9LFSykZ4adTdD3nVJ5mjAdSYs2qMrWNaUJ",
  "key29": "3RdEwPSFsRdyPYajkK9h2tQ31pBgQg6GZrJZHwvwpsq8eugDim1RHjx4wLm35iQvb9d8yEtsxaksM3kxQsF385Jk",
  "key30": "5NKsuK6GEgrEpq8Xv5HNg5UcPwAUsECh1cwbQm5gMqB57RcBBMF531csutKbV3hMbGDpZdj9UqmRFDfdgx2pJLLo",
  "key31": "kCx1UusgF6VJEwMtYDf1AwH27R25HxH27e8SYW4RJc7Uwy9Evas4wsWB5NWqADoQpjWpCCKb4ykTRPup2YQ1SyR"
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
