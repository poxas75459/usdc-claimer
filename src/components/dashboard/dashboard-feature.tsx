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
    "5XtsYxrrciWAs7RPHCpLSHbQWHzDS3vZEFFZzvcrjP6H1uFzDGESAt5ZCy96fN6wRZB2UR7aCzdvSmU5NUFEwqwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9UtMrv2yLzaVkHXhPPGU3P4sZUi9fgSU5sfYKS1UX55kJZinCDA8pDc5Z6e1gdmWWSZcKfgMZvjrtcsg3Vo1J3",
  "key1": "5fcqKw2tm81eTjL29iPTA1fuNZUcvNdDtAUWVT3CH6QfH2ZdVTneRj5PffkkhPr4A1wLQ8Bn734aqVASn4cDa4vN",
  "key2": "34yEn83bHPyucYVb1ZgfqQRYZm9kUGnvdRbay3aWZyPH1ByVjiXzK2s9HFVZr7gXzqGD4ENf2s9tzicmRxaDcLAG",
  "key3": "2fufstRM7onM8d7hU77uJhFLZ5gjHkETgQCQFKzyqNWdyrdgTtyyfKgfcngopWwqLzP1NoS7qDdiQyiY97nAVgeL",
  "key4": "RWM1iGvReeAXmtSk7rDSEDcPT3g9fjwZGSV7EH6m2p7R9dxddYGBafRXcoch1fPpVHfd2CmLx2VBWhp9az3JTXL",
  "key5": "3oFUffhSunUVAnGMxJonfXYSt9nWEXjQ45GUh1UAAGg5bgm6RpzDbirfifieTN6pBdLZpAya1hnMmjdkdstTHV76",
  "key6": "BtTyLidDKyU8pbjLGVdS8tFvX88n7YMjgR3SuPB6ynQ68Dpb3P8yA2Gd9zjcUw9qscgCChYQcCp6MLz51sJfzu4",
  "key7": "2g66p2DtmYMKei12QqawEHMuTMox2RT1sTdFJTPLNSWcfdUEgMEf3jfFyQStPGXAr9s7Gyi2WNP62FwrkpGnbPjt",
  "key8": "Zcfh1LXsG47LJF9inMJ44UDgiviJbCgCxcaaQVwpwj6ZoGQ29tmesAH7t1EBy6C2UFuPXhSu6WWB7mmgTvqoN8w",
  "key9": "2nVeubTGG6Ci4aJQbmzk617fXtokwzEnYBvkFNu5E4DPcfhfDKFKbPBpbEhzhw5NtR1ocmsAnNySPiKon4Tqporr",
  "key10": "Wj3xB5qYYU5bKGDLEQwVLym3B1fqcEPMSrXwPdCv3y7p9XpoKq6hQWw3eFuwgBFRXxEABK6kgVDsAfx8c1Nc1wQ",
  "key11": "Vcm3rQ4JW2PgtEeLywoyCfCUbjFt3rj7PPEx5fYRALFZ4euYqVLA75vmgZXdkvtnMsAYFGgMJoeSd4pMvggRe6r",
  "key12": "7NaNwtqxLp4SQMpBg9a5ymmCNGZucq9Twv8HKKzsjHhUbYDCatTSC2jx2aCiyCXVbBmttwPaRgsoswFJn5Tm67p",
  "key13": "2DHQ9G5oCcWAr7ReXyV28X8Uw18WwNqTAetB2XDGmGteGdjgbvwYQUMZ8tnBtemDFKDoZj8y2QxHptKHqJaQvxsD",
  "key14": "4NSW7L7BD87u9q6i4tg8PCE9HMJSAxkb3QKSd19bxi4TGGQq4Zdj4eNheoNwR46aVMD8xXDV1ZrXqbvgqMggVMsm",
  "key15": "EosNJu9A4Cpswfs75XQCx6pwD478JVn5SCD3zqaEXr13pghkJyknFXfcVHnMDu6hp5n2Aa4XzUwxxx8YQBSskoE",
  "key16": "3SNooYi8N1GNRad3pFMMs5nd3bgRLiCdiZsnX8habDDAR4PKDFCVEVFHi4gXhQg3kvYmjVksn9cLQwbDsSKJEekS",
  "key17": "Z2v52M3uJGwU3DSoWxZCrDRmiXqX1xX9dz6tkEhRjaLAZSK8kiodWkPUoeMRT6d5HmjUT6r1595RCXTgnkdZQJE",
  "key18": "5UPzHJyKL8FgK4skUZ3EWCYsisAMTQm1LDB6pNuezhjCqrYQh2VYmhPaiddHaH2mKARzRsWhCr4PTHg8Qgjzu5UU",
  "key19": "4k7pUEKQt5Yh85LfYyKMcdUHAcqAjyNqwNNfdvkWvPS5Mfu2J4RZcMX7wkJGWfkJ1AoCY3SiZuMZdwMAaCJNP17c",
  "key20": "xvRW3iDUCzenFeTf8omYqCYopSZswB4e59ZhKz7woTFoXS5idEW1YnGDixpA3icamLp3cRNcYvpFFbB78dsviQ1",
  "key21": "23stKjTCsyKYPngdHcJtng7oQpPB3YMMt46ZhtXGeBXYLGGh3M2H9VwhfhwXceH4s6ERv4MpeYBh779REbZ91Qfz",
  "key22": "PrV7k3Tyca1BhD1ze1jMQMrsgBZeb8RmBk3hxckmpk57Xb99xs7XoASNrmHxarmgRMWoDqnE7xGL6xY6jguTuYc",
  "key23": "3bTMQz8cUFAkattFUvGvMUCUZyoAjrFRu4yT7MxPbgeEo46BGJ1e9jFoxRNGpduJh5CeyE6DGcvJ22XSXdyd7Sxp",
  "key24": "HZ6hWyxsyzbv9A1AbQnRc1im9MbQp9fsZ89bp4GhSaz1NkHxNtrQjv8hKFSyM19bHu2M5cRh5sgaL3TnLyZE7SG",
  "key25": "36eprzJs4ZwLTW3h2SyjJHcUGDvBWLqfLH2gGHvZpTF8QPAeGgdZ8LWLNv4LqBw9QiWEiL7FBtwFJLNYJmwc8kf1",
  "key26": "2sL61bkHF5YCqpwDtgD3h6gasxkujxXTukDqKeX51QXWmsV9XrNuMbdHgBfqoNwdpJFCnw4gmQEePKRAA4c7Hyjq",
  "key27": "5m5JNkVq2EHn4YSAVaszXztb8Su1x1rQb2LW1LC2gymLXwNt3GRWpX1p5v1HDrbNzGTRRy1wyDxP318FZoVWB2p8",
  "key28": "5t8sTKwRxtdx8MfTnj6KBCSQoWNRcpGSpDo2eFXEke9qFjJVbbSMnk8NaKMZosj8Tkk6ySvZNVnWNjFcbjmCfAX",
  "key29": "4qHM3Dac6fjQBG6tiBwtiVf8zFwoijT4pmE14hTwL7gkq7s9U6UsaUb3fv7P3bFMB6SUW2mCDaKHdJd8XdT7pFS6",
  "key30": "4mqTVzKLA7ZZQYJje6BMENuj5peJKd8YJs8LCF6V1F5YRR8eGY5ZNxgKd4qoCwxtiJXC8E65QyjjHJR446nWqoik",
  "key31": "DfkcpS8AMVAi7AgFYLQ1p6CSupQr5bQAo7SaUcx1qD9GTdQi6wPr4gPN2EnD7YTGqeSM8Y967ZfWT7CSJHCektX",
  "key32": "x9HUZ5y7BHGYMhmf5299gZEBHxL1fZnvwGRuhD3pTjLPpQCJcME2rr9TjcRpgkpVaCKQbMrLi9RcUCQx5tJAk69",
  "key33": "2T5bZ18YpKP4HUBdR59W7cZupAapMC2w3fYG3chuJMBAytUWyCnhndwYzzcR3xxrsz7yrnJaVvoop24rBDWULZKA",
  "key34": "bZ6zj4rMaszbcABEC8HGYiJzJ3NiqZSpcdCen4HkT3WTig8h9ThokGaw8s8Dw4HRYVimtSMzih2cvPyhXCUsSKx",
  "key35": "1C4PrCazrzegrE6K65noPAWkGkNFA6sgmL2oxyMSUvxwMUFUeF668tFome972Mk68JvfFfnQLb49bUkcQrW2hv7",
  "key36": "2Q1nemHNVKdCEeN8yei65E1aT5HKzminSZYAKBtsgjdyzqZw9HRDzMSq4mGLuiaT3Fk27AsYk51dHXqPqL5Vm5wY",
  "key37": "5J9kR3F43keDpucSp2UCjV5XPPZc34fQoyAH4Xi8vUt2RipNHLvvebHTdaj8K9SX3Lsut5pnDA1kjKZ5BEPwwj2W",
  "key38": "3deF71X71r5AUgB4FDwT5Qq9qjmJLSEeh21HSYewDJavFhwSjEqE86EaixJWKdjPwWiv8jvLedpQg4SygD9cHA57",
  "key39": "3Q5cnknmYFb4ZvsRK2dqUzcuygfDxi3op3RSzka9uCWfPNecY78DcwctxgnKNADehXAJFD4DV5KUA5D48doZ9qeF"
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
