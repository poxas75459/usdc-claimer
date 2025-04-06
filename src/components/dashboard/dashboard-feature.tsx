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
    "4xRac3iJZdFBb7t6x7kNJQy8PxuQzYQSdKQuGEoAdDGb99JE3Yuqwvgigt3QWaAKToYBwiUwdtkoLSn8V2JC6zt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CbPWw8Gce1ZAM3bmhXDCzdrkh1pgx4kRVKhGdCFamLXePdaFvMuiNsc9vRG3Si67rMCutqmbeQdAdTgheDKkFw",
  "key1": "4q2KvvLnW4SMQGoYsLLJpU7eM8EGhRJijCEcJgWAmc2qSbPJLWrHYuUVLG5N12DzazuS9gXWMH2fHj4iDaUi1bpE",
  "key2": "3AfiXNArvLQA3Jh4Cr2RVk5yDtYSd3Zgbuqs3GtHAkdAudFyUk6V8yH7PXpNtgTq9XsHjRtpSmkFWJ56ZzGtpZux",
  "key3": "4MtQ4EMkHBEjLMFYYNwQ5QkaCPamvK9Xd3tGyvSoMqBi9LufBSiVuaHVbXZiEYP5GffA8UCT26zy77vgiSyfYRun",
  "key4": "66YeyffM7GHqcdHFpReejXgYrsmg6Z1WdSuNC32RXq4MwTjPuJKta5hNLZwrXEwNSvt8ZdXyJr13a2j6ePKBN5ct",
  "key5": "9EeAZ4Xv33ME9zbwctCv3boQxQ6ACxSG92VtDf5Hz1Pfy1jiMsniSheVo1BTdZZmEBmrPKf8fDSz2yxtw9vzLgC",
  "key6": "54hmdUNT8rHAG4MwpyRkHh31BpV6RrSNsP5Vq5dVq8ikBa9gtjNGH7AH8roGzqQuGkD48siTxcj2LD6i5eZ9F4nF",
  "key7": "jTD4X2fSfYEYDkDquNUah4yemKjvjJeVkbFr22Tgy9HMfmMBvekvyf82MpNcz4ExgB8DJjwUX9HaARAGXjszEeE",
  "key8": "3TZPjTi3FWGXzpDHc7tnw2CtTFP4YLwhbCRkfB48uzW9hDKdRYCuAnVLHHx1gnbMKoEjiDam9W5RqYuJvLZ3pbas",
  "key9": "2PpTJzaUsi63eMYbZKEE8wmFycXSy4FSV1FCtfhD7nnuf1kM4Bogr1fXGRkbB28rAZCyYiLLZFzuj2TuaBbHhyjX",
  "key10": "2wbB1WMwbuSbuFfaAsWRpfYcA82mzDTtADMtUaqaFfdKghjngES6VU1qoHAp1kJzWVvJm8g6PADQSU8df4M4SE9X",
  "key11": "4ByU4vFAaURCmRppDEtqHLRHCFL9zRsxHzkgddnvihah2R3dwK3oX5U8D8mUWXpJTsWq2M3tE9nN5dC4Wp2bF23f",
  "key12": "34QR9ZLo5eVWp7y6hRGXZf4BV5sHbCuFNXas4pAfEUDLc7ALXh9XHqHdQ5YSNbrGfhwd4Lkb3XgBXexYWMiL2tnC",
  "key13": "4Byw82MzeVQP7edo2sHYMQbcPbevjBhTZkqh2AGvhVzkuNwaubCGYjsdLGrzbje5cmcCHxeFuC5JaMk2MgRfMtjU",
  "key14": "TnirrJgWin8ZiXbnTcAHDE3EA7hPi6ZCqHQCNYu1bg4ywtBbnDbGo8MmxDAZKEXbs5aj65Ma9phndrB4YkY4HYD",
  "key15": "3Ng5FSm2aEf9guckMaqJApCg6AgChQm2p46Z6TmnHCVP7oFLpf59nPUcxA3RZ48zbFbSoxiEJybzsCpJdGFyfoM9",
  "key16": "37Gf9unfqCFa4QADd8vaY6x8t41zvk1rAZ1Bd9X2yVXixVG3fmuFFUV2dkqASXeEaW6irWR6VhoTPDDNeeYLCC9S",
  "key17": "3dMsmcrS1yPHLvBmanvmmkP5hWzLjUSXMGENJeSkrW7jUAEHmiV9W6j23dCSzavWdjQwcsG2dz5BG5aN9mkKrCJL",
  "key18": "2uUonMp8PAoMLGsm5aXUEXw7Hn69e2LzeK8BG5rYqR8gcAneeiD6yu5XLtT74abxXLADH8bTjFHfyn7tMJsaXwCZ",
  "key19": "2mtVuzDz2WjUwhGYKQpDB5hrRQPVWqCsRf77rbE11afhMarWUKB8T4mPG56ELGcx3FTpHxjqBivKVufz6jqVJmwm",
  "key20": "3rPsnZ3TsF3ziEvoGfA9AyGGzwD8eyqK672j4us4oXnC5d1LSCRHp7E8ovt3EYSF7Z9tq2fJbwgUgtiTZNfvjAr3",
  "key21": "2J2GvRu4XVwfjcU9EMXfBwxstrWoXVte54naii3nbYdvq9vxRdAiX5Jdd8D89g5ejpFLcDtZEFqPZLwxFueBa7ZZ",
  "key22": "QumUbgh2CwFHnUdRYoWQBx8R7TYMHosHZSfNaDf4BNsPBuUiQswHdojJ9GE9RJRCuee6gEEAk66ez4eJzxY9gEp",
  "key23": "4dv4vAr29vkEy7BnKiDg3gbc7qygjgk2UMpNnBYMojsYyUXpKtm2xqttfuD4iVutENeuExLDrdokVfJr8a2rW7x7",
  "key24": "2pRaanzkSzsHjTXYwPhdKHM27Nopp2s37LKr4QoDGBUKmPADwYfxEuweGCN9VMyqvgtYT8r9z2JrpmCM5CFkamu9",
  "key25": "28gaqMSSvyhbrTGGspVESp6AfRG16EZ4hKkenpEUxEhhMz72LcoY7mRaa7WUuYT2ubLeY9XGfmM2CjCEYidvzQyG",
  "key26": "2Y6SSM8SFSsfgDwfQzPu29ntyGMPGjVufBLubMWxziETV8YRtd4kPeCVsDDaFyf47JcKydHDudWnxiyW4SX5nyKC",
  "key27": "53jY4ak8VkN1BnPxPbw8QY2DTSrsSdqbwX2dMdt7V3E4jcotBoDcXHgenfb4P1L7tMieqExieZf8ZDP8cJnpuoSr",
  "key28": "2zGixPehSMWNc8HZsiCmWiBSqQBPsXPSn9r66oLsgvF26p7x2BqVwh2P8W6fbxNsFoEiNzPkpKhtMVyYEs4CPLqL",
  "key29": "4rprCr6gnkL9CY8MpeVRwnu5Yvfr4571PmSBPt1Jmkfm1xV5U3iovwowYnF2uGFhWb425nzxzjGLzwFEZSGxjwa9",
  "key30": "22HuA94soN8jccy2ZbkExRBT5K9kvTZWRMmbGfRDjF5oZdF6zK2R72GuXvZrWWwaH7Jt2v5tsWezzZEGxEScZ5Wy",
  "key31": "41YnC3mPWry2F8UQuMqmGcDYBxNtg1cPxkneomAyWspvyJhjEMHdXEeinwRm4765Qk6grRK7TtmMKbMmjwPkd5Rp",
  "key32": "49sL1tJKW7qXkatTDAoFcsuCRvVLC5GiEW81XeVgkmsx4Nutoyhje4x7At3svUXHXUVt3p7ajDhQWxB9uxcje62C",
  "key33": "3mpo9SMfCBuGEsSVZDRDvvNw3osxkmJw4nc7Wesao159FTGAcTRPyt8EwtW2vFXDCmef3Ba9bkwv3JiCSDQyL4Hh",
  "key34": "Wb5u6YM4eHaH45ZiQxiPYPRsHx51kerEBuMMJFdZsDmLXC2Rkyy8Dq2CNd7p6U4zg2Vu6YiveXA4QiK1B1NYtvW"
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
