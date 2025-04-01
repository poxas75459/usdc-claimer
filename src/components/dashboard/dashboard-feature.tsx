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
    "2wSGUrtVJoKdx2yFXW4kVWRk5XsFc8MJjnKzej1nDyjiYptxYW236gKbZBNSRiyQMYy8Cv9ihT7SqHeFx73Cj4kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbD4D3DdFkfqYMcPELzHKc6HiPNxBLGmviPJG3eq2B3jYbPTtwLcjpWxzUF6FK6W6Va9q5oWBBJyiJkGkuYh3Xm",
  "key1": "gf9qYNvpqr6CXYirKQcFtjtrrTLxYpmx3P4Kt7kZagYUhySrmjowUR44gqLQRp1VJ9BsNeSEDX9dxXRDitTr27V",
  "key2": "3EGob3V66HhfHfZDVyy9h4Q7T31x5U9cEwqBNezZ8K6phF9JTU2d9bC7sqiN6kBSYvoJjK6ncywtMiCf1aWZajz8",
  "key3": "5g7VQBGAZSVKSViKpPDkDwJWbNqptV7yeHDm3UM5R9eN9j4brZtwRoypBRMW531kdFDUwnD5RwuYFMywWuViz8KZ",
  "key4": "4wjR7jiKsXppcgiY4zDx27mBEzHU3Fi2kmzYm6ibxBV6GPrLoNPUuesDVdotqqUtgLQcU1jKBuEHxhtgtekLDdzh",
  "key5": "J8hgnCEHwTddckjVK5rUW3G7hQBAuhmhjyTEA6zEaR3T6YSrnNxGcWxqpnpvumD6zeFYqPDokA1cjZoEBLYtPBU",
  "key6": "2MAfF58XgyrB1FFqnjGnGkHezaL41dfS87o6iKEB11tSNauH18CzSupvYiHzWX5hxGm5viBArLAbNXE4VkdMFGbr",
  "key7": "64fMVg4aKPtbeBFUhGBLksfyCz7VrES4Lgd4XgbewqfpQuE3yD4CwbJPbC7cTPG7KgHtG25bdhrCJwSRckGw5VhE",
  "key8": "5o5tixjRc3BqYHKR4TTmyW9VGSCwspHEioeLymVeXtZ5W5ZyidP62QafaptCaBJ4E1Mgdbea6ruBjQo5AakCRX1Z",
  "key9": "2Bf6CHaEoBSsvxb5EbqtSNAodFSHGN3RcX2XDFaRfEAza8hcRjjF5PnbL9zP843aUFcyuRBD2Aty4WC3TKde8Dzx",
  "key10": "58aTFSnWLzKx9EfJzu6Pmeb41RG7hGMxadRNt9r3WrudtYNPNVmXAhyaQT4277UMA66Qa39A5SS476Fhf8PnPDru",
  "key11": "EDMgfP9yaDdSaQ6BuoDucAXQ5LKHHoAQKhmBTropo2RUJYqeLecyceRUz2eZwkkb1VKRaBxDB6gFX1roFHGNu4d",
  "key12": "hzdQEajwb6U2MjwcScQW2Cip95734LakyAK1kqqzoyDLKHALp7aTrSMfQbJZyrjRwT2AbBoJDXoWWF86VQ5XHgw",
  "key13": "46AxrbCj3eQiQuPqhMtmzy1Cp5BZoLHDKhK3xKjbDiV7fpv9osGqLC59JxASffjyF3ABzGuq1axYZGJQvpHcHc2n",
  "key14": "xD2wrs7KZrBhUfSmptatwYtZmnb45KuoQ967fCyk6Mo7TVSztUnTLK5d18Hdye4iuHhv1mBJkG5dy1CStybhfvz",
  "key15": "4QAGEAZihxcx158MEGyWaRnLXF6VKLrerAV1VbpJwLrCFPKfAo5z7o49dLTBRM8xcLidyAtpSmQbDcyLmSyjCoEb",
  "key16": "2NhemFhQNNB2q5RA1QFCuG5MSvtKC9Sf2RwMdwpUREHubdSXF2ziuRXyjU8dtvj8GgcrRoAzgCrJhbWQ94TTMwxP",
  "key17": "2hwoFrrjcmkR97HoyLN1o3WkzKDCZvYQAp4WZ5x4v5yuQ7JS4gBnqHen2TefMbr3dcMqyhZkEwSB1CEggdDJpST4",
  "key18": "XCZqv12ffKmCuevK7ScKqiG2pCKstQbUTz5aKeooMLS6XVzT3bZuo66Ry9crpofRcVjPa7BRrZvYD2wzvGC6GkL",
  "key19": "4cGWSUUQQaxQG8tyS4JuB4DG8vmKRJPBSvJV2NmvrJrZf57AeEvCEwNM9M9nPQCqezxssVe6BcHKsankcGVkKMkN",
  "key20": "a6eQu2cMGWaCrsjJmVpvoGqbqLu8Yx4ixn77nppKAfSYMoT3yHC44DofvwWQTfr8gd3qGbGnEgnK5zNboaBoPvT",
  "key21": "4CxfU9z8iokMQVukPVrnHvDCJR4DA7gfJ9VABtawULjVnKrkcmkRuPQwvrKgesPjr8EopjEAxmvhNvcbSbc2etE4",
  "key22": "CvygEMhRYUNYAXq3LtLtHUxkcxTvdAX1XeuUvopNBsv7dnWbPdBmR6XAY8Ejc29e8P4m3mbtv4nDy6qiyExTT13",
  "key23": "3F9riRbgqhQ7XKgrkmEWAHfxFzvZokhFhGPgmFNXBgwi7Jzf6QW4btXkRRHb2DFqqdZH9SdQUp5q6GVtKfKym3XW",
  "key24": "5DtGYMzvQzmdqZ5ZX91qHDjyL8Nfxz5UdRGvuPk7hXjtpTcEtmLQXxBy8vA23tuE3MZzxfFCC91PZiSxWTKkkawG",
  "key25": "5esHtWPtByzVVrXQHZRN7qm3z4qy8DdfmXjnvwceajb6a2JDZP7eRiv3FoyhHuZyWcLeCohaHACLUVMSZj8GLgg",
  "key26": "2TQLw14BAop8WUYuqQqf7hrbuQicMpJbsuu9Z18pN3qdf1pBEXiWs6ZP4mcMTpMBtNjg97vsQ56T9RzL3naxCV9P",
  "key27": "3qSvxig7PDkTzDoNiKWRTvcvMKB2PNZ9QTL9tYkW2JWHuftMeTJ6g1XnwjGgCkjmL7KV5nd97VhmKVyts7qemkoB",
  "key28": "2GkQMuEtYEBtnxSX518rYDMeiDREeSAFQfKRAc6yu43sS5G2i7Me5GjBMVQBVtxNrYLz2RU8zp13HLChQYGW7s12",
  "key29": "4tFGbdVLQ6MrFp82S29brgcaSnZWowE1ETg1pjGEtPXZ5b9GwZT2jFephonS49uQ5Pg7Cifk9ScoBYVgxT5Yyun",
  "key30": "5QXUUVCLGX2dbJ4vyUSZkfkCEcybPyStcpfhgvojBRHtm22Kkj78N4fv1vfmiJDDmKyA3uPbMDUKeF7B6DSBvLVH",
  "key31": "2FGGzcbs8An15KsaieWqA4yez4twGdC1yTqDaHSRuNPPDLYWWMp1GNcwdj621ubs6CurKpBAdtE9TUxg3vMZwuFu",
  "key32": "2Tmq7CRnT93VHRWNq3KJGapRQggZLvDdmEY9WxKnJrpsGF7ZDXzj7QspB2nzhBoRR6Fxq1cFtVdBCCUqXLfEQNJZ",
  "key33": "2YKXnTKEiTrLddd5zEuA6NxJmaB14g4vb3KCLf4bRfJHpicksqn1Bm8mC9TU23DfUyEB67BbUYmR97MzsUvkNFYu",
  "key34": "47mz8NhrUNc1kvYaZDqqpg6WdMvR5zgk2W6YG1HNBJPD66FQBjorSNAS9WkxfKyuPLCiy1Whg5w8mRdWhkhFxeSd",
  "key35": "4MbBz8HfCYVVtFiyJL2MguNTkhMh5kg2Yo4ScYNzVBsn1zqTeY7r8oDQEEXdBZg3puxUAEjvNBUiN1RNRCykgtB2",
  "key36": "3cWjwLYaR25UGoFshRMErvD9dVywaRW17akxXdYF9Nszo6eTa1oD1WmtrWj6crpVFFF5oofhJfVJA3ueM8WKLzy4",
  "key37": "4MGmE2P8hBfMaVzCwpBrZ7tigCA3Nr6Q8rrtebQdwvNYZBNUXkJ5C3koNE9oHmtpe2Vnqsdg167Uxybe1pVeNTS7",
  "key38": "2VEsdtL8vzNZC18urWHa1xWgyssFWJhGwVmadLe4faGoSFhBKCPpVJRsKzrwpzjrFtytqWDSnwr7GdAZ5ZdTyd9D",
  "key39": "4U3z381rbpN3UPFKByM1EerzCCzRWfL9SzKF49oBs52AVr76A41RVhJk7ZeytwkSVvduuvPmiW3UYm2MJEoKPtho",
  "key40": "5PQu6yxb4FMEMEUrdR2K8dgUrHN9rtFv5aNByxrHvM2eyMWMeZ3gH3ZVYzXuCta8tSmZcC8GjNAVZzcoruLEXkkq",
  "key41": "5xgTse6dVBVE9teKed2KnZYPTmuzZBgNJoJNsPgGzXoDecNR3dJjn7ycfNBX9ZvjETf6Hn4voRrJUWjK9LxZ5gLJ",
  "key42": "3gforNT1tRxTRy2tNUKQ4NdpPTNgcBh15uiQBrhp3cvZJaKmEzfBYTJiZHUDUoCeUcoX12AVZN7WbB7Pms3Vib2S",
  "key43": "4k82XhSpJqikLM3gx7GnP2GZ5ZKaBN2rhDMqPwzv24N44DG7JJUiYv6tfjCJwaeJDNn4jyQfLtgL7zc3NvFCkQ5H",
  "key44": "JZg8ZKsCJFQ2r5YGcye5Jo7UVvUUkQD2ZjTWgTubRfnrALuSyar22PBK4iXNaYpmQakB9pEKupMDyMvcLv7Upth"
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
