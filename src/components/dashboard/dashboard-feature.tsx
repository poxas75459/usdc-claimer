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
    "3LTmKVzB62JRaLLX2ZnP5KPL75Jn5S77vyQqyAcbM1Z7K79FEEUwCxne8e5pdVxML5hftnsZFBZzcf7oLe8oZwgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4uujL2aWHdmHD5ESsbbKxNb3iBtni2KXncW5SkPEyf43fDi3SdYVS4Uidz4BuZhkxoLpN3sUtRVUknTcPe4XUq",
  "key1": "4NCqyf9gXM8XiPnMtoH89NqeNEH8zsnarzJ9mPZkFXj4CqnbbYsni623gUzXS49iY34FREEmKK73uizjFcFYiQqi",
  "key2": "JCoJKzTQqESDnH1456qyArDcWYDpiQnK8BkdYpgFedfxqgv87uPWu8UvY4JhKgR2o67Ak1g8jp6zkYdC1ZYYwWU",
  "key3": "4XJgqUihtzf6qcrnnwQ35UdhWoYnHJR1WUyFANzyKCvf96M4zzrMKhFA7UDDExzpjmwwgVMMDksMLTwkXVxeceGx",
  "key4": "4R4YKbVjDXwkvkmoTsZPrNFenGNjDW5SRNJLSvQobHL7JG8LP5YByXNgpjSHrfPmwaWrcE8TA3mjYEG83j7dLWs6",
  "key5": "5s6QVLEjbitcmvhSYLBmBWb7W3vQFB5CC7PqbVupiYugRifnD3xL6tvjugp9UbVWGgGgLpePZP71y71XMpyFqBaz",
  "key6": "4w2Qhhuty4Swi9JNXsAsbr4PB1EvmBQTZDuqNLfyDyXr5C1WwmF7EPPKyRK52w1Yqtq2CvsC8rqpoDDPTj4DynSq",
  "key7": "2spRpCzoN2Rvh28mxA9j9WbjqZ75WW6N4hKMKYMRRaRNoExZ5P4AQt4dHLUREYs3M7q6eQ3LLSeZShVLqCtr2Hvw",
  "key8": "5XveC7Yve6t5Z99iJ2o7WrhiS57oA89d2aAvgdp4WZ1gME6Q2NCEUpbSjT8LWYHiSGTqGzgdF7SqMVgiijhkF3si",
  "key9": "4THC3XA7M8m87WdYwa8oJKP7P8HJaDGDR59hGrTR7HFkBwPD3WLXZ4ugbASS8KXLVVWHgJReZA2yN5q3dc9z825Z",
  "key10": "2aawi47srqXT7BVsrqjjGivsHaB7xsLbkFfjRWTbBs8At9JsBKERXzdC9gNYFZ5jWQ41GF9kHposaSyysddF1jk",
  "key11": "5wjnKb6L3JQcEbNvFtQo2Xpxq9mY5eogfVd23CHisNPWs2MBVer8e5Gga7EWqfaYzSYJXup8jkKmkTSWAGFu9vBy",
  "key12": "9zuUnkUTvhSFu1RJk5Wk4a83x3L4Sh8dKmYceHWTexbuwe2Zn8FW3AHjvJ3teihYUsrMBrzQXvJMGBuQvQun3AV",
  "key13": "5WrX96hE9XUPMWU5DHhiAQuk95qRNFHT7dQ5uww4Y4moTaJUVjWBcbKL2Ha4SuWS7sdzQhwG4Dq94pNCNHPvGpPS",
  "key14": "32S6omDfEPy71CGRYSPui5WmyDP9JDgu9EFnfg6DNNi9wMVhtAUwNaJyJivtKuPhs9W59f7SzaJGzzVWTMVMzfc8",
  "key15": "3eiUnmDKdY6fdie6UDAXiahHrR5gCMvs2jn9tL7HJXEuNokXfRUvviJ5C7m8oLwfmGpBJ8258eTetKWvswg2Lvrp",
  "key16": "4CwjEqJkoFbTTAh3PtEUcWWTbDXHt4qtsbHjeHiLgQnvMzjjrT76xavUQd1BvVR7S9sCEs6J4WBG9WVDzqqTXHAz",
  "key17": "3k5TCuADenNz6m1Tv9wz943yjMxPZ9SoHqtsPYSvEFT4Rxp2o65q7Y8TuLa42kuRxQNtqJgi2EJ5J28AAHmmTR7P",
  "key18": "3UDXwGdZshPv92bccT36uGRugdRaYeFjpgAFD4SPT4EPSh9qpnaHfH1zeqGGk9UTwxWmxKGp6VMBCrXMnt88yaqn",
  "key19": "5zb5GQEPsrJRoHx762vEDacqBL35UyLnv2z81z42u6YEr4imR95T7kC9MiA3yYpbRMCKb2uJTXACCc5XDFN3yGjY",
  "key20": "G4zRqQN2Woo81jXv5NS18CtV7oZoeb3mjG5pnLevGG8hzRkfxjjhw4EQrgWDWHtppSQAecH9cM98XVUvABxYAnF",
  "key21": "3T14L2fxrrBxKxjfsj8pLjkncWFMxLorhsDy4JSMGrEEXFZV2PETbohqp18sTcGCmF8QB7UicQ5NAU37MDik7zs7",
  "key22": "3HzYMfWsEy4NywYH3BJ54daftbHjj34DRFQKVTPJpyieXf32ugZ83pN9ZvRFRnUPTfA6WTnXEj2xwCNNNeGjVSpB",
  "key23": "64ThzGzh6TUJZPtNuHM2yu1CmvgPVEGyztHLzfC637MBq1yPS7SrS2oPACccm5eCLWBXCQ8d4z1wURYZAsEqRD8d",
  "key24": "3Nf6g8XV68r5neCk7XsvsKeXLjKCXS8syebVxoSLoBrxUpP3ZVeaWFPsN56FyeeXN5G3wM2VShEHYKeaQd5N7Y32",
  "key25": "4GYDsjtC2UgDPUP78HjTuXFHMHFNySFuMZNE3Q8xkbatCzYPMmcDQAnYpkTrbDB8agVWJt6dcpEPLcdRryK6m3gs",
  "key26": "3qsr933N6BwQH9ubxaSx7n687yPodJkBmrN7WBnNjZjJ84UdjZBLXpLxsSqPdcWH2VBkjQdwqeMUsezMT4Qb3yrH",
  "key27": "MjW5vtLZ4S5Nqazz9UFmQEXyULw83az8TtPm3FBK3nDtiivxPeR6PqaGbxpWcx4CPjdT5hQX3GLjysHQMbzZ787",
  "key28": "2e6M8a2yQZKaL6zNEtcgbdNC1DFZ51NYL9L1zw9hQ9rYFNGGrd7vzfuFo2DjHntcsbiLX8Gi4qLBJ7YPqtcHZKKV",
  "key29": "5QUotsxbZia323Z569Lzppz8Ek7WuUxePM6wud2T4tC2CxttpMpUrxsQzBMmPzFwtbTvN3ZojeMAqSpp2coN2uSJ",
  "key30": "4YSa94aEZwLpsWN7TMHjBSn8yzeHZH1PBE5TbwwoeGp1hvpYPVUJtXVSttVfw99dwRxwYZYpitDEQGCWym7JKSUA",
  "key31": "NNdL7GohBEHcGCF9rkaH7FqiLQkmdcoUtX2CEd5GAsof8oGs7JFe2U4AQMKpDXVS39imBj78yAaWbM582u6AwAz",
  "key32": "5Fa2s76uoUebxv8bkYwnN9Qyo1fUJeHZNvssg9UuG3cWrcCDU9WjHgpqUB8VCYTZvcy1bNyTwQqYxWZGZwzV9VN4",
  "key33": "3gK7aY6EV4gooHsnaXAKBT3Zz42YahkV65dqozS2ghzJ4YgABDDDTHP165xcYnejPoFpxVux9kjSqvHAoS9g8kV3",
  "key34": "3ev7ZR6eBEksTot2TPRGo7qHknFnXFy315FvguQoSy3ABtYo3BBXRnEZxiDtPPv9Z6odEnKVyeWeYNSzfPUHeYw8",
  "key35": "2o4PNmN8nP9QfFqF4gKWktKo9F565MaWQuMPoiDyVHyJsAmdFUpBPii6mAJiQYehiom9pWu1XHQNTpdTKMeGKD9J",
  "key36": "4jz3WBBJxyBAtU2WEGUufFRrX1769a4XATXvDsAYEuTu4nQ5u9xXt2qFgjNHEoM45FnX1QzkM13o9gwGJhT4A26y"
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
