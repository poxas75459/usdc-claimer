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
    "66rBdabgNomYcfLzsbuXez4zuRrxKgNHEo61gme8nzR6aHm3vUNtdf2wr8DSzsjCHQJCW5sqR7uLaaJo5WUCk3ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5io8vEwtrJYvHShZ388z4HCPa5h1F6rGGruox1tyG5JFFSp8uuRmhan9th4vFad2DC8oEF3HVf6ka9zdmPwbRsC3",
  "key1": "iT4TQq9QUhuCfXrARsAKMkLfNmo1TdDGeazNjPESubKAuXk1KoKgqYnE41M5LUnLCbf4QofzUu9tb7WpkvWas3b",
  "key2": "2nHJYMRiLLh2zdsWUZNL6wNhhxkHDWQ7wnPWF6JaU4ByBJaDZ2ihG3qjtbFvxvcbkooAtKmnj63ySSUty5emwmk5",
  "key3": "2r2Z1dnF397GUrZgaNWQCYFUwEM7bg1UNJCECUnGXhYnTx3zmaxzBVX4Xr4LXiVRqbrkdNVCQLtGV65KTri25sdj",
  "key4": "2uL78fyhCPkZoFxtYT2EA1tyXemD21kJvboZam7EDbd1ZCVvu9rRPV26Y4kVJfwGx1DBnr17wDwXcre3BaKbyAzS",
  "key5": "3B9RgupevvCkhVube5EQivjudE2dyYxwVg3H7SXHdS8psB43avXzRuH1WqHgS45kerPHqrmKX5kGrVsG3mH357LW",
  "key6": "215rHmJXfR6UdjrHUQiNdatB9tdKXTbmieY3yJnpqJKrfnLDdWDnHs9BzWpn58sjBoWCa37BEnFF3Asvh2n13Yqj",
  "key7": "3RYotdQYuTd1pSgwyHyR1T6f78Jx6rNYtzs8o7JL51QTQAk8xsfXHDxXcuBvPRkc7JLQWzzJ9priCHriak4Q8f1J",
  "key8": "3bkeXHHmLXk7TJYP6W43gbgX9AEnfzapuMTMwZMc7F3KBPais9BfyS5Y8UyWTUUZZkwNCLLMAo9aURt4LSy88cHq",
  "key9": "2PKhxY3Dvur2RfD7NG4C8FAGdG1WqKhqp4sqZgKrXz4Lb8ueHruavTVNjMd3kNeW33vpoNpsNqfRcpfAe85PnDT",
  "key10": "2v7GKM1Aw43T7WoE8C8Y3sUYn18DipJL8iZkz1ZyoEGGcvrSkPbitWFS8qYKuveS3ZejQDMwPP3znLB6niVHVyM7",
  "key11": "2JUa4VM6HszvGKHxAKKdLLCoBdEJzjYRUENEvHTYXiy6Sm1UBALy1auBAy9oLfkRTuDQ4bGuuPRGpVdu16WzZpVJ",
  "key12": "qhF7fmJnYrAfnn22uN6y26dZNJwWoGK4NtfGVzqvGen73QbUMy38jSsm4NFK5LK2EgsqFpsHo6VNXq87nZFg44S",
  "key13": "41tct7gRxeTj34UcXXmr4XjbHbq4MkUowkvQSUd794YBtMSwximr1mUFvVpMLvyfuJRiQbzcQWUdquAaVWaSBYmY",
  "key14": "3TP8eNhLHYUCWnhNnDCRLo8by6s2ouC7fkdAWujbCijnurHUDeHfCiF1TfAX3cnkgTbctMPC9APLa6Yai4rM6UHZ",
  "key15": "3QyezmspjBq9nkCBdDL82VCXdXDefA3AAtt5TaRW9vKNPrvwBHGbtCZpAeArj3ZABe7R5XgF5XCnPani9AWVDvVW",
  "key16": "228p1dHHSwA5BcitXKrezgvAqL7HvuFMwgSo2KcQMSC3FtKWd6gHBCJcw22hw1BLGwquzfKETbCFZBihHC2S8Z3L",
  "key17": "3CfPKRX11a8LEMVdg49o2Eprc1ipHitsFx3U8cKXnrbD6DyP6yb6TxwR9fT5YvAQE7dzQeevzxBZbSiXdghHwKdF",
  "key18": "D54gzyzNG67hLbnsDJCpZQcwxEYcsbgxKLxT3ueXQd51RvghDf6TrGPLnmr4deDZy4knbzn6dSGaVugqYUUPAQQ",
  "key19": "3bEGLB1n1onfFjZTG4BP1PwFzF4fTa6wMgX25PZ96rrCdfrvCa5FCzWHjRv7QzNZ3ev43Xp91cCJbxj1mSCifTwY",
  "key20": "59PFRaxV29VE1WZ4QUH8HUU5U3vQBpV5V8DhE3Fipg5BR1dBvSMzvWqAERbNP49tFSuJ1dBJo1pymRNZ9fJdsoGz",
  "key21": "YnNDZxGZ35JBHmzRydbtxRJgD1kuGp91TLgQdm9jK1oJaLvFyiuegE6yGhD9jFmmmRapscassPLqhN89xRncTh3",
  "key22": "4FX687dGxV7fC9tyksDbAbVBdHzyu9uyvoktKvwSD5fUrut7cp7gnC45AXdrF5o9K7F71mu9RxJKC2UZkAxntEtC",
  "key23": "3nBVQxzgV8qWfki58FzCPUKb7RHkPwP8oD3p4ymbaSC8fjx3DnMdc5QgHgAg1rSDgMD871Sw6Urx1XcZXgdffZb1",
  "key24": "3JDbEZZhGfxEo5dn96gtYjxRmijWuV1wmKswudMVS26qJFdTDeML8xn7mVShywk4ZCZknn9rRAYkDTYzaBBDZP1Z",
  "key25": "vTAQYGbE4Q16WftDLDZmJqgjnLu9XjQZxKr9vgN66sAMHo3PkHEiy4MRq49orcgYGZx2WTSNEg79RtwME8kZtqV",
  "key26": "47VMKwXmYrTwxCpiRCJ8pdGTM5qVNJa3FfNooLba1472TeJTp1QbrFcemFna8WN1LBNjrDgmFg2oRT89y1zMd9wZ",
  "key27": "4iD4QE43GzFamH2PV94NVX4ECNLN6uGGomQ3eBiQgNd2kEkTwCirDauJRvvRJ7Eyo3qeivyeT3Pq1XHSSkCkEYbR",
  "key28": "4QwAHndD52hPXfjNPySLACCwd2qBeQNUdppEJsztggPzV3uSTu62VydELEksbX7dMQJrkqMStWJrKfnimt866N3n",
  "key29": "2aNqFTgSqAwiXWMp5XgCNTfvNficLgNvPzq4rmnofk7d3nPpwCdcS4JNX3Bj1aY66yuFdaJZV4i6SFATMBkFgR4V",
  "key30": "53e6trm6Qj4nCQkTcxHpDguFS2uGhxjnc6zXbZiJiGGrCajagGyMd4qYnpToaVUxf1UqEPkeVtEaReLN1EfAbDxX",
  "key31": "Fnyza7ta6e2fN51onMKjPzg151rN41xv9bsdQd2282bsAWKk8c9GYQFbwZo8iGogyBpBJYX4ycUSj1UMZFenSXc",
  "key32": "4eyGB2oyHfxUy6zuKrijKSFtKCLLr7wRdUYj3Cvtfgqqf3sKV19mKpY7srmUZWd2mTuiC2V4V34qvULS9v3as5HV",
  "key33": "4qH11N26pP5ETrZnAyNbmF75SQhjMWAQ2e8SowAwqStCtLk1h2RDLLMhSQZnYAmFowidvCMms6ZBExKrbSgRsX47",
  "key34": "5kjQsEXCQNt3vd5iCBVwjx4hqAywTRgC5kUAPL5fdVqLqhVYohsw1xC1yR7b2DXkASEat8XdfuZ1tCQNNKmuSKeJ",
  "key35": "4KiWEmpD1QPKC6kkN6GXVnZwoPa7rB1Rxp9mWr7HfZpQvtL8D9CkWpcKKAv9ywb1gUYH3MvaPR8HJupEmzbpePc8",
  "key36": "2zCAu33GLZVjafNhVrM4sQthu7tR9XwsJHxi1jFTUPi25vUMrMkx73eMC9gpdFAvanyJm81ByDbksL71mrmpm12J",
  "key37": "rCQyReanzhTfrz3Zk5nmw6nCF9JZpTTE3XPNtqnwTTpQe2ZPREof8E8UXSiu3ZrWnvNF5SU6cNkoWfs9ByHusCy",
  "key38": "fWZX7j6ZBn1resgmaEDHJu2cLPaJUXArxsvEzcQgjT1ZGehnvEHVjENpLoTBKHur9HisYav2xCSXkLcrgMNbJms",
  "key39": "4KWnnSFMJeUnf3429gJK8UvAXF9g5wXqim2rNHi3QxAbyzodiaJvp89whC6dPkfZLnQv4ahSxNhMA8ur5EEXhgju"
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
