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
    "4RoNphpGeBB15uzMLvsX7qg4gKXSdGLcMcWFQv5WPtNeSLZREdqRYgFpbtu9m8jDA4AHHb9HVpSCxkZpdEsuEmLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfb3kEgsJQp9m41KAgJv9GbH1pCMaJSeAizMV9gmraLt9FfyLmTkZwa5DFtT7iEko8WZ57CJWkJxmBRrL4LwKKm",
  "key1": "4KuJgg2RS3YLTu67gnmfZhPeHd2EMVk7E3Zc7UKHnyGpxPpmrNWLSoxTyDF9Mrwaxm8h4EGWdGQ3EnoJJ4b5Q4Fr",
  "key2": "1fedo9ZM9Nb6FuvT1o2BzzHtgJwERmqVvRpVc3FNKjS2noMZv6jyQrfXpMJabfbiuw2QdmUa5FDMzdjPYPANdBp",
  "key3": "4uqusArSuqKBD2UKb3BLA3oNN1hqRoL7Z51HfAp289Se27dMou6XTcjpXZLKiUDgRkB2enKfeyBqTX1mVFcT4YbE",
  "key4": "R2pSDBjzDzVw62CDn9rGrBxG18ETdTTZg9eDhrZGbmnB42Anp3rUU5qDccQvnSu3QAqEp8xVCcZGuDHajXdB1sy",
  "key5": "2dTgBcp3NJcdckhBrsAXKi83tVGMiai16Psj9gdBrkr3EYSqNBJUELzsZzyLvNUfL8FeeCfwDuZtLLBRp5FcDhF3",
  "key6": "2W6Gkf6KFk5BR6bxAb4aRisEJe3ApxaejBUjDfhyGN4CkUt8dLTc5ZUQYCz2xrn8AmCWR9ybEpiJTcso3duKWeui",
  "key7": "38uoYE8Mth7oZu7WqQBudieJ7GVVSUXE7AUCKXKbLKadSeprsNStGbaZoaadHiezBMn1NzJES5QV9e59pMbj8qw5",
  "key8": "2cyuLtqhCdja6rcBFsPNMRRvy8Kw3cVuF4bfpqSEeK5JB6JBa3UgvCVVzML1hfkXyvvVMEK6PkjA8bAfk6GE8ZQh",
  "key9": "4DH9UKpqxTHoFhSMGgo96wHG78f3hCCn7yKjqZVCY7yi6TauDCahoqH3t8F9yjevPsXXVLYwzfC1WbeknV8H9YNT",
  "key10": "4VzWJu9ZXLkaWdnQeuKATmfGc4Ta1ftAgbzQi3wj5wBzWtfri1d8i2bV5arJFYVjuSma3f8XCdXPLbb7Tzdc17Tn",
  "key11": "ebmDoVxFWczbMxZKnjabXhRXYUd2ApJt1frgUEAWmswFP4TZu4WnvR5w1K9gGnyh7XC7FpUdydDjdSpjZqmwQfa",
  "key12": "55x1WSsYABqvVNxiuL4zqR5WJXY9RR32bFJHU9EXHWeEngbv9SpEJZE9XAt16vJJ3DEeWvio1MhsXw5QXr7MArdg",
  "key13": "4GwDxqVENuXyjHSoqMfw3TLNCVSapJAMoxnNVm3GEgVDaNhbzEmzWdzp3zuduk9jGnzdVGz5K27GXxDriWie4U6g",
  "key14": "4f9RaoP8TdZMq7wwE41hu43CXM6BRFVQugL5xqyh75MQxMbuCMF9YUa6EYEvN3gt6ejCzJxXwn4WQSuqLYwJjiHK",
  "key15": "5xeqbJ7sQYgo6Wr6C8Uw3mu8W91rKHFn6FUcseLvQPmY7UwrAzxsTWsuPxEY9WbkvGCXm4H474ttdtn497VDqc9s",
  "key16": "A2eikqhsHApTacD54hEvPefiVbxHLSUrgWVM8Z1Xmak83dim3E6NFLqAFZ11r3TtswTevj2Hmbxv5pp5BjZo5PJ",
  "key17": "4eJ2LfdJpmGZgnGoynXjmNw7vVugkB3DVMyKWat5bWUWJBFk2wsoXfsRdmtsGEfWear3qgaYJfBGPv1KcwxervB3",
  "key18": "LxdoCSchKFZWKJeZ85YwDno3ejJiJX9rJmT7auDTic91HupQ7aE5MG5KbZkS8zJmUdz4BXLyBTJQYCEtXx1wSwj",
  "key19": "32C3vveswoqRAvQUQpwRzgjLJzxW9PharKoZhNqfVWHTYdFDiCPz7KneLvzaftKDvasHNWQdATebRfujqmU7UoPn",
  "key20": "3wqtJe6ykvv9h6anGhha4nQxiMdsT4sB1enTmEAZitctDAME8ngf8XzVovQbGoSwQy8Z3Yw2teTjTFQTMikqpdZ7",
  "key21": "Qot3s7vsy5wfAP3Mvhp8HeJmFSE1a3yCBYhRKjNLWBZZLL7M279eH3ysKRBUeaHRLftaRjjcBPBEvmVsBBvwTYM",
  "key22": "9wis3QGhuDkadUb4Lua5f6rCFkXtE2vY5X6roZvqSv48Q5Up84S38Md5GWudiWeVtSaP2s4FTcrbkiSHPyvr49t",
  "key23": "4bGakZ9f7T1kPe6c91rkFffGy1LcRFptLnBLHcStaw6YPCeRgF9LgHL2dJF66C9DMwrNadLKi7FDd7rsYN5EUUtw",
  "key24": "3irCs5LQuQ2BSefuWns9Z8hNbtXHj3cTPQA4v5f5tPx3oHXTjeiHztgjTNHo3PmdfDbDX81BWnr41F7wUmqrJZix",
  "key25": "3WCvtjDdksiiLSvf5a57stizrFZ8cjEkKsCCZRQb6PNisDABt5ZDU8R3Q2q2zRdEEPx61gj9D41oXBpje6y8qrCK",
  "key26": "55SUf9o3wGkzgkqnDhdFfMBgirPB6EC3UYcnvY55b4atRKokSAUNQs76j7yYiW6tuCjfcD7SW7MS4rVVYBjn6c52",
  "key27": "3ZCafBP4P4sXKP84uUs8TBKY5XBnnY9y6DuWa4vZSZ8yfDp1F6mSoPSm7PCSJNefCqqWnnh22yw4TTpGqcPrbFkL",
  "key28": "2VPpvreq931CjcTYjkEeHVmUhoKP9M2kkxEzZgvhUhTDgiMscfizeWLVY1UZsXrn3wfcpvKqn9tMn4Ls5xsGrs4B",
  "key29": "59GiZXCpixuKDc6BFyC62URuwDachfsuqKA7d7RnvTHDsz6GuyK5zrQq6iWj9zyQghWDR8VN35cFPdjHRszf3rXc",
  "key30": "24mMU2JV3jAiAsc1KqttHXXns3K9a6BgjbpGYzUjW5PXtSnmgjLMcjj2trWpKafmC7Ux7UZx8wQKu856sXxLwdmk",
  "key31": "2wA6Xk4DLy7UVpHdSFtDJQDHJocNUyCzNwxFfYPeiBQJFtv5CPjshPjwr3EGSNTh25h1uoXDdUkyWTLKYBTMGfeB",
  "key32": "3sraJFgXfMQVC8TBY4ZamkvMGcs5CvATeMEhiUFhJRvJRwjmEpHqcX18gVYdwd3n9suQsjNaQdDCNij2npWAvRcR",
  "key33": "2YbPSXsyfg1gNUJHfXbKP6pk5ypBTbAMCGCKYMwk1GZjvBmLSorz4Az9uw3kfd8PADQxehKpAqM65rNdjktudVyG",
  "key34": "38PcczxPuiVCkhkh9hD38opxG8d984rTJXg1itsfiSTiMboPcqi3apDQtjEaPwr2LTVtbasV9WtNJ4zAseet785b",
  "key35": "3BL9aCCM49AghYpPSKTsd7ktac1KdzZ9wZCijiAuQ5TKykFJ9eV4JuK3Gb71dewK9kparK3fgLyhqYvtxFjStq2B",
  "key36": "4DwwiF246ZvnwL5RpMErm3A98xJdnqAD6Vh5JRFfMK7yqDzfwJh27fAkr5qF6Yr3j5PDQCHjGCyGxwDnstxsRiD8",
  "key37": "3TRxG9epvj59hUdvkQ4aaxMhRzzTXYJhNMoKMZLG6qt9aovRxwC3dZk5RTsc9rCdHFsTCKFkWfpZhnCqLexB5ok9",
  "key38": "3DsTGzCMTw9tpfgSiKFd5zhuWZXWHzipS8XcS2TbWy2V7N5sBBZ8rPXgoL2sFYV1kTD97VuP12NCzDG1UpMDzSeB"
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
