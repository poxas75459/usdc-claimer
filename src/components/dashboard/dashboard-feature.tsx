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
    "5dTtJUmJr6UBc7SQcpGZfg6uXYsvwsmfxFZ4ySCtnNxP5C6zd65JitM1YQQv7MPZhCsuQTukoj1CaVEQWN2G6Q7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4quioPuh2FTt4mH44My4twyz2kL294JTSpNtkvprR66PuVLS6vs4DL2oKYLGLAZycY1NupexkzkijD3RWTByQBNy",
  "key1": "omDQWTRPfih3Rm2enyZRGgpViFyAcZ8AQ79JbvT5CYeCUh29BHz3o5koYb8xMSbDLBKaGGXgMW8QTBb3DaRZBMj",
  "key2": "3RfmDsBRFjY1Rt8XaG3EdCwrcZECJcwq8ia9WNygYoebD13s5t1qdwYRPJ48s3uAo4d8CSg3Gh7XkqHfJpUpeLEu",
  "key3": "CJMAZQPsCd81gvaHzXJN43hbBSV9icFM1FCRGTEgC37san1bWnfgyBptkTcSaiNhNuEb1aHHmLGiKCfxd5TKHJb",
  "key4": "4jtVcD3xy63pji8XDpJGwenCFYuwfEjoUfjU9KRn6GDc8uwtzbZKjSDj1jfHvDLb5EbrMKdN2ZrUKkz9mjXbrEp5",
  "key5": "3rZwJUKYbcmztREHDQdj76rbfd6divBnVYkBGxYRZaHtX3pFcpRGq4F9RCBDhhFdvHxKCuKaTCFAAB6hVq6xDfBD",
  "key6": "3489gDMLYYG6fLPxYQQ49yU3akMoB5jkuzb2Ay6eekkZoAzQwRCoVXTExybcQ26CP54FMgDSXVtHDaRsCvVZayZE",
  "key7": "5nL9Cy1uWv4ePUaFnX7mLYDPtmC6V4WXkQhUM26vvU763Jy57c5vq3b2aHR83hougm18nSvBUY4XxD8iB6qjhWLY",
  "key8": "3sAjPr63oK1Tchm9sk8VwJQY3JjPHg9riFg6Sgv61FqpRZTFkxRrwvogrKFL1MrVWE8N65nfo6ntfqjb3W3cHQiR",
  "key9": "2xeefYwirjGr6wJRWmx3AoDJHEcwUUpoycE43cUDFja7znW2Prn4QpVq1pxNEpQrQiMmW789Bw1Yc298XYZH7TQG",
  "key10": "3Go46va64ngRVqBUdzGMiTu8AT8grnKHvB3r8uzDrbuRCZzrYXQpkzPw2raqzDDUFPJZT65rGAfAUB14jog4pzAE",
  "key11": "kGtCihQg1PhN9qaeHUzfASgWoauYrUMbemTgtGraX6ms9jAytcav3ixUEz8iun1vEPji7PTP1M6Wvt1V7KfVQVm",
  "key12": "4Z67NDC2kwzc3NMuw64P3bSeGQ7kTnrGXSBznHUmBZSKp79KDpD6J2iQYjSXNTL4VmgDERujF5C5wEfgAYxNXXqH",
  "key13": "5eemEjztsQRzGRvMYFRNNZm7cETZkP6jzg56CFmPb6BWgApr2ZZfbcUDSb3USM2f9a8yDbHacQ21y74k6BYt7KQr",
  "key14": "4Q3UHYMwQbN9SS5KXzEzKjfjv7t4ssphkLz8W4sV7t9TSpCtqiXDYTtBs5bxUSb7o2LC7QJ5quqvtwMSR8GjhcWZ",
  "key15": "5T3URgquJQMtS9PiFhSifqSDA11CUc4PjXG5ZArgEA3Ci6pjt5GFbKBEd4hu9pPtTDUWRaeCJR18dFZroDoXo7wU",
  "key16": "Yco78RfVrBGeeE5ZXqqbBjReBveRzwnDjjXE8iMZ4Kzs9DJWTLAMPZabxDbLAQ5VL6f5jufmBqhrnz9DzoZ9s6r",
  "key17": "5ynh8brEPMF9VKzVpMsNrnocQW8FFtYMbqn8r82pEn9NedrCjiARk7SgkeWGjZq89sDPWdyTm9AjFznhj1DSyRX6",
  "key18": "4HZnzFZcbn9Dq4zWVgz9e4GDN8A4Hy2wMK8rckC5p44mcnTYFdmuCsAqvgAw8oXgCHcQRmg5jUTfs4gLmWBW8JgE",
  "key19": "24kZ2CkNG73sWWAMvkQ2u1kWrwUmj2ZdyW9q9yuuvWM668hwDyqyrAcNauHc2t4Z3bdR1dbz4SA1Zg2rbdSutwKC",
  "key20": "2NtFXFny5aTYtrhacPjGum31nW2YjU3E3f5HozVyRrYX23ir4pPPA6e9SyuJ3hVHMBqTrugsRBtgTuL2eBahMBYx",
  "key21": "2SeV6f72Jhzybv4WqVtyFWfdwJ8V19fMxArPudEVMHkZWhWAirr4nZFBFnZLAW9WS35b2vAgFo6H9MWtziqXn2UU",
  "key22": "2tkp6nKEdi5sRcMjerAMr2quwxnH5pLfHUxQkToGs8NAWJqfSRvKRwJwnmoD7q1gRzs91RbcJNeXuLqBCmxwAVet",
  "key23": "2KNtES8NCd3QRw7UpPprP2xwe9SobtRZv3nZ4iWEW7eYboYN1JkSzKaVmNJhxGeL6CcZV7yk9JxrzF9nZG5bBGnz",
  "key24": "fG8E7woUcQaMUetGuantoWpChEV9mXiNzzC55poByXJCdXGvDPYBd95Limw38J6iQLRoW5iH4xjsvoAo7vAiw3B",
  "key25": "4L6pLQFwR1oc4923NtKCcihY2nCsb5E7dTGS9oYJ9H7TxdJLKkRDCfuaeTvcHHrHZnMt2vdn23QPYgB2LVp1Lwv9",
  "key26": "5Z1C75b6zXFwV1M9JfyJ4pnNgK7Hs5mkuM5mNxKW88XJ93bcDkCJuvf78xpVG42gS2EeQoTERvKxyjfJwrvkJgH3",
  "key27": "32vu6bTxoASHoCypHHpW46HniAUVjMD4tZq2idJ2MMZUK5kNbWwFZWbpLj4PycQqxqePajTYT6pWhCsuQGtPiZEn",
  "key28": "5Suz4jV9ErZwSmB6kUj9HWi5BZrsW123y5Uovnr1qT2hRxkBfihgwZVeWRBaVkrkaPNE4HFJPRSfGErRxHx6XmWf",
  "key29": "5QYMUv8PZ9kM3gverWVUNo37cXpHv7BH64F7gYczzgdbGfbwpbJM4SUo3c4KaoDVmyqg2veZWTeiUp3a3gLkt4GF",
  "key30": "57izchejnLoaZXtYrcvqcAytNfwhacZ83eVR6GJTYLDqZEFRPYPnLX77JNDdJJAvfkyKFq3B86itoQZo5HzyUkad",
  "key31": "3udxFch9GGRRrnNkzWPXkN1GxutANiyGGqLG7PsaNttDcjHiC8gNr8YFiPSgER589mmw9tvsM9ZSZSunn9Mt9TyK",
  "key32": "4prXtfs45vFxzJQSVGLanA6pLo6NRP19we7KP6UpNhpq5pA2inLfAmCMYze5HbLp25iQahRmDbmtguoSqLoqoHjK",
  "key33": "4f6KGL8922Cqf4fAc9a25Hzf6oCQngQNmEZRGtz7pdPbD7bf1PGCYCMv6ZD2KjQjtAdZ1knkCLJSmsc3Uh8ZjrTE",
  "key34": "Us1892iK2YYPyJgi1m11rcMnyyjtAhFCVuYvSomwqxjND6Fjas5wpUE6ZCzcf5vMBS3GnNfuLPKmfBWtapheZN6",
  "key35": "4Yh6RcBdFMB6zkQCdiVT1ADJFi7a3SUm5EdCQDhJ1ozEHykovRMu4THCaYqsHwKVcgZRuxiz3bcmvCNbZwiajkMc",
  "key36": "4eEjigehTbFsFqCdyq7hfgbCKib5zn7MpPqvvoFyvbQ7bZkSLioZRP6s5Jsg34w4AAm4wjJ79nMGYfqYRKbcVxek",
  "key37": "2UF6NXLsamdaBQUWnXUrhEj2XjYKX816n98FZ9fBMxmKXyP3zbob8m3vTEnZ8ckVFTEJv4pwvVeYMDb5u9v3u826",
  "key38": "PcfdAg7evUuKSGu46VrpdBHJL1oAxLW8yt5S2y8qMhTBX1QvZKaqMQUnNvsnfbPt1Vope7ZRCsTNU6qnxdeTZEd",
  "key39": "8KL2WoTUw3Ynk9vM6seoY2uqkKqD3Vw6cprv1GBQKYbXY39eDcUnmrKRaeqwXQknbyYeNYLwNyviTEADReCUPsZ",
  "key40": "sKKF2hNnx5roQGiF2KXVu8YLiT6kXhyZD4S1xBTKPwXJp2C2HQjvv2s4AwUFeRG6bciMnaLPotoyJR6k4wcUxWf",
  "key41": "41Ynk1UxknaRbfxMzS6aigYZvoSBNJ6X1Qwge47RboZynZeQmoqzUWZ6qMVjBMgBnsyvTAoVZrB7kJzbDv8cHhuy",
  "key42": "5w2sv4qpGgcGCWbMxq8AMb5PPYHoLo9Th5VcKh6uv92YytBXBVcr4b7eAg81Dbv5R1rkZvq8jUXXUpMFkH5Vy6JH",
  "key43": "2S2Q42q4Fe2RvQEoUR7gAqtNSLjav7mwaqwBtLzCBEt1VZSPFnCrLc881uQwEjScFU2nhDfXiepU87htBHpxzH8B",
  "key44": "2WgUPpyHnJg21KqJo9ixEMBGVSJs613CcLeDFi2untL2NuRJ7wErGaw57eiQEajWPN8a3gLEiTYnZdKT2ko8pzS1",
  "key45": "o6o57CqnHQUzvvrQqpN5chKK5cSavMKMH2YwihLanri8s1ETE61mPcmX2vAXQtCmF1eAahBJDdn3U33UsCBUbTL"
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
