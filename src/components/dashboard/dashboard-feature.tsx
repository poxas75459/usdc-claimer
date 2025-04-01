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
    "3qEVgq8eiRg5nyVdvt5Z9febKNLwU7wEKzuVDcyws2HTF4cwGTg7kvqMCqk14RboRDdnuooGzuutjAN3e6psLARi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6XXjLGzeeYWzyYdtSYyj8WXXSsCivRw56CwWLm22gWoXGQyLrkApSv3MUR6BRD5EopbHDwX5kMyBTuGHeKPAhR",
  "key1": "44rcKR8o5DW35fb3xseQ3hWMMea4LYNx376dZZg3EZmwYXVn1aT5UpVsyjUUcHQLdnB5iFXrnXeUuLaS8EUSE6oe",
  "key2": "44CU87bVo9S9AdC62DYjpWkHzhEe3o3nAcQfpkMnuZhy1tS7a7MpS4Q7vVaaqdg6GNjtmmnjEgfKaGrpBuvh9cgD",
  "key3": "34wGaXi2zFMYr4JiTWcZZjh9DDvY3D3jxwQsDPK9xgGV1xYZSp9iCK1NyTwig5L6jsKn6hAYbkNgwN1BCevuHK1W",
  "key4": "4GPukZtj8T2G2wMTEzozprmhqmrqoA2bMptWpmStKtrNsmzKoVTQG6buuCXixGJAhNGyJ5KyBTdzZcdUYdXjiUiy",
  "key5": "34djtkuHTWHWGjbYPnPvyi9842ZENi4c52fW8zCWU96wjTXs3UtnWtpY3KCQC6CmsLbdQKyvqZjQePcwzbzTL8j8",
  "key6": "32GmvtswqNuLM87SL7v6jw4VJyTqmKUjkVAVmBwtf1FAcpZ1BWXTPBirDCXvvZdvVkYEF3TiC36FPEo7RZcpSeNM",
  "key7": "2euGy5s6318Q1DNFuDaCbfj2HDBWdbKmZfqWrwQTz5UMWYTSRkX9ziaWXd8qFVEajgB2jgUjbBNukBnQeEP4HRAu",
  "key8": "5vzbQpPNFYr4GRcpmzXx6gpMD5u8XEDk2KvKScVqHkL2HKJ95xTModhYQfHpbzyZsMQNFTDQ15rbGHPG4ZwFcdE8",
  "key9": "51PHrNY9e1k4TDbHMoypepJvL2iXNCDBD2PKD7BTZrNBVtev4HknsJdzVabHjkBr9ozQtYNnSR4rpWrRuVSKQb2M",
  "key10": "2NkF4gKXKZGwB7mYYwePLndHfLecqNk68FaUiGCTTGGTBgeZEQ8M2vJ44Sr3G5xKBNtRfgJdhhBFpyPGLzZKGcaZ",
  "key11": "5rqtYQD7JM9NPo8yoyYRneLp1DbH8qevuVAzvJ3ng88UnDDxbQ2d7XfgJQNtaH7VdGLjv3Koan8wbM9CETAWtjot",
  "key12": "UjkRvsidFftMiQhPpxRSJWVyCvsLo7837wfJ54maph18iCoeozYGZrfaFdKXTbZ9hq8JFRPhekFGK1NR3i8Kn8r",
  "key13": "2xFAC14CSVypS5vUiH6MWykCCY3BYbXpx4js72X1NmHQM5g9SvXRxoxXvBPvexTAitbvqiY8wJL5vdKJ26MRB6qC",
  "key14": "3LpvMAoJrnqEDWcJeTLr7kc96UbiRubHU6pHwxBXbbLUD2gtYLG28QevN6gw8718PaHE8hfbz4tzhqCyKLpUovSL",
  "key15": "5rYgxipqnRsnXVMXPn3MZkguvDKJRaBnPva1e9KTuL1JmwRjp66n8ASru1xscYvBPuMcg1mhBNSfPREvYV9NbPmP",
  "key16": "tdEMYYKEriMyBCxuCut46q6JfKwo6XtvkySN2i7UDdst5VS3pZnBKP1XNWdbbV4WT6JJgQaXS1iX18TyrmWGceU",
  "key17": "5dFenzvgQKAEFbTiRxUkrtS7eBCQxvGpvLJJxS2VXatAYsPeeuNc3a6j7DnXRUGfDhMUFqYggJ1WX7S7LCjHUgdN",
  "key18": "kFah7RAs13JqUK2v2G4DD9Kajx4UtC3iDkweE5wNFmuC4iTvsoafRHMUqP97aitHpRFHhsvq6ttew9XVyDPCNVz",
  "key19": "2N7chx22xC9cB8bALaBnXn5971TRU9rFbWJdF8hBr5PGXwGhkVXqfk6CrDvYh1bH91NHtDDU2Rsm8Y1EN81boGX4",
  "key20": "23LUsGmEPm4DJnVMWnwMHQtL3tsF7oZ6qFRSFa21bSGgXsHqPxcyN7ACxH3RZeeNRZSfnYoNSeuTZYyD9SfiuK9b",
  "key21": "t7jS52fn7TzidA2ktokTmZ3D7p37YaMuVfGTuHnMSTZAv56EHCVJJRb7WYMpcZXXSjiz245zoWhLbJKobUYD8Xt",
  "key22": "6s1BgEWS3fNguYJuwBEkaTQ2FqWDfY7AkevTq7wHMVimdMmLhfc74vU7MJCfQXf9DwMvSwTWF4qZn86JSrbvrL4",
  "key23": "4Cq7UTyJ6Tevq6WfVe6hvt6hCsm8J1R4tk5cqRv9vmmjaTrpm5keoC4wpo9LLh2GB66SDFYw1SVbHz6PaXEnX8tJ",
  "key24": "yraTkhSe7iZGUkpBqfm5vz2cre1htKNqkWQuQFxNnefaH7HH4dJ9MBgkWpxUjP9vDjUoVi7G61MM3y2RMEToSfY",
  "key25": "2a58FrNtd1Hz1pjLeTAZTEx3qnNvc6qqcFwxDRBQ7xX1zdWasD8GpPJt4HZ9u9y3MBVCbXf9kQGoEoJc2E9EZrkm",
  "key26": "4nussuWDZJeb9EsKb4aWD7NccHvJL1yHfphLoJhW9Nv6z3jaXyjduadpzJ5ir1azwqjtqcvSuNDG2xtKetKTKpf5",
  "key27": "2NeoUqddqevgQRwavYh253mrDG5PLqD57URXcHHfcjc1LJB7naiasKm1jSzEXpeDUS134QxY78gpHwhopoYyyXfd",
  "key28": "2UsZ7GUK8hhjakDF1QGyM9SykmCxrtv7oRDU5DLdwHw3MZYraEQnDHVP3Q1w4s4qnpBsKhCBbKRcuwu9oB23fThe",
  "key29": "4Kwxb44ubH2hPAcThoFgYSq2Soe6nGBTB3FWNCFNMa1TSyuMuU7WHsptPVCBFgujbbwX7FzaYYRD4RVMdJVDBBuN",
  "key30": "3oQaikpz4YvqC2Zcm8Gq5M55wxRcRqfLmSQQacBH3T87KWxSoRYq3HPn3vxmD8bKGpAV7ZK7MKLmD6wX5WcDUPpo",
  "key31": "2pSRxcmb2BCKrDVanbUsfvfczeL3su46o5CYybnXzTgddCYgRbtZLKpjhGqTExV3tWh1VaAabPqDk1opedi4hSm2",
  "key32": "4zxXWMQEfsvXEKgYzPJiG9wRNQYCvCoaDBsXwHtYNTJnF7h8k6jLaCY2gM2JJFW2f9JbYAbYvJZnhL9VFi1JNGuf",
  "key33": "5ekT5QXF2x3rrBZJKdqqtLnv2WdGrF8ZDzJzwsiTAFXkpaEz9qsAdCeh1Z4MSSeXJjM8Q5umYMkbdRU8pytJgFUF",
  "key34": "4XPwp4YbWFcHXfL42BhTQT34Bj63XKZv2Y8nWFzzWLKjvhWgcoVKGBHgWaZCnRYdLEXdksoFSVPZNH5mzmYpmMZf",
  "key35": "2YtEZtVDJUC9FJeUci9pRpus5H54gV12EFSomEaBUjMkLZhm2MPTYA6YkRkzNmSJNYqPS4d7m5E9gBiJ5Phg6Xmi",
  "key36": "4PAnkBdQnmYJwdXYYuS21SCFh39ktjkxCaYg6AnSP7r4BEdd3yPsjVnKytEWLRVsVSf7Tk6FB2JVxyUns1T3Zquq",
  "key37": "5TKKEbQmHJNtrtDStazPthVZDzA8eFqS3busDL3j2p32KHecJpcGyGmJWmvFTMq72ScKkXv9babAPAtFXApXWAqw"
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
