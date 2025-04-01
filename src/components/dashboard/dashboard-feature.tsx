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
    "3FsEzZMPztD76JP64HqDyTeoxatYmxqsNxCgf3p41AXoR16sHo24iPJ6XmRMhypRpT6Dg9bdPo74TKFt7pBULho3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWqSFB8HFfCiFFKgaczDXNLCEy2Vo2BxY2nf2hk2KorGepEtPmUH6oZemXMEfymyb6xXqZAku7HGY5gMvmgX1wP",
  "key1": "2tYBqarDfNKG155TK89wKdyUPr92Fp7oCbvfABBjjvixB181hPGZ5eksiJo2EUFAgQwNXn8JfRu9wkk6PTddf7Ye",
  "key2": "3EVNVriYktDeR5ytxX9zPkpDjXDJMWcB3xFe8apVHcsHXREbx54XuWzbeYFRenqSmtNaDdVNceymmQUHtSMfPsWr",
  "key3": "5YieNdn2hbVYXyCXji5rnuDPM1zeY8atAwjwuU6gE17Xme6x7VTswGbRyhokvqzm7pnbTSHPV6cxiZonZ4YzJ8Tm",
  "key4": "2ThHTagqrN1pqLtXeULGP9FxHL2gu6fjt1ZvncyB7eVJsiP4bP4BUqmNt9YGoQRb28v8iVEMJ3o5BKtvSLPsNiiL",
  "key5": "5ZUnBhZwcTFxhQpSrtHjiAsZVmRdTbAN355FqNoZ4VSL1A3dKTLDWZ5Q2tgwR9Kpwk8CqfAitmKXVDwKevo11Bm5",
  "key6": "4MHrvrdGdwPEGVRvdVjmkdMkYJmXRLEppK3c9czYkUEZD6FJkeALMfaiM2iC6ry38nzwksQ6qkxzxQPqveuL9xgw",
  "key7": "4eKiWiigJU4ojXjDk41QthySiB42XipxE7xBetdVmKPtiescgW6XLu5FYxk4xSPMPSDGWgpto8nto2FboEW7qeTL",
  "key8": "47GaA315i9ErrW3ZSzDFcratbFd8Y9s9yzJQkaeyuVLmiAca2m8SYfd3NXSWuoNRB9pDAA3PE7umiAag7VmuGKUF",
  "key9": "2RKwLsr4cMWhYAFBUhcAArJZhBph3ksV8QdvuYiLGEuayfx7K66Yq6DWTGgGhZzDUShK5G4reKrPLeWhpgnohu7q",
  "key10": "22NLFFd4xrtGvcNuNp66YTYt8EkXYvYzLxeVHtsaq2GsUDyVgswnMYMtBXhKiYt5riaUu1Z9BRAS8XtTJ4RrYVtQ",
  "key11": "29UDmdsGpkJSKvRPXuhbfjJa3pSmRfWWHhcFsFSjhY8F8ug8LsCLJCF7A5Gn8aq51MXtw64A6Ef9uKRFV9pH9uBP",
  "key12": "kGrbGF4pBJPocpiDjhXrWUwwSuqtyqa7u2EWfEn7JhvZDq939gfPFRdVZtjxe5e3aLD4LqNcTfHvjYCwFHgwC97",
  "key13": "5dyD2DTvqVFt3fApdxrGjW7jggC8q3RyTi7eHGJLk34suofpkvLxCA6MnK31BJ4eRvfpd6MT91qeRQHng8YVimPB",
  "key14": "5maTV3S5QmALDFkNF4Dha4C1KdXpv4YMFb3iTSHozxVa5YUVvJbgvvMVWgeXLnn56T1xNmyVg1MuWMcVp6CV3PT5",
  "key15": "4V4BpaGeLmviqqoEm8z9oPbrrtV3h72YfAaY5qAqioQxHBHZmvNvUuE4aJ1JAmBBWuMFV47TNQVR15i1xYDLGExo",
  "key16": "5vbDjppQ82DRtXi3AtzzsV1yPVdAAL1sukgwiMebxpbcppQkZPqtBtAypvUwX64cpSc63tJNH6WESxwu6sY1xPdA",
  "key17": "2L5j2MhNnLkhHW7cPhk9nAju9wgnYpSRyW5tGF9RFezWXCzxkEHjwZ8iT4hfcgehBnmXkWcyt2aRoAt19usKon5",
  "key18": "428rUTyarr4ktNiMFs6azBaz1N1yHksV62HGK2s7cvSwonZLuvbS7FJmFLfuYFbAsGSK6uru5hAZNwASKrhnfuvo",
  "key19": "22C7xbLDZzG5BuWqbsSEDNdXMgvSrtWMYVwPvWi5MxewPCYeKnLiuT3LGpcXnXWYFawsyZPXDK6HrmUswAWzBu48",
  "key20": "mM8yGJjhMg63j1mw6T8nnSoUrdih8TvXPGKTLfvFspT8KpAJnekZi6PvdEpDLahhEZutVsiLKKiRnSTxPS3zxb7",
  "key21": "2BcDtYRLMvHvaJPy5PK6Pvuih5LHxfgosDoLnLvG5qpXxykJXic4KMnvahsdt9f6fZx8j84s4SHnvAdjHuGeGnuM",
  "key22": "3KGswobBDVxDqmMJuBWtQcB6wV6HdPtE4EJbRCHwY8MJiQWN2JbREcY2aKQucozHZEXjEATrLTnn1hmS1nFh4nHh",
  "key23": "2eMN3EWTKoK5uH4FRybbrkMiT3sVsQQY39EVaYoSwHddqEuw2W47UzmouJDnBtxfioPMEUEra3t9eFULxmKQNpFA",
  "key24": "2Q48e6YkwpQaBhFwPVmjVsR7WBz8SbY5ZfcuU4wJ1Dvw1bHFjhvKD9cQ1dMsZxyq2s6m38axvh7mq6pB8oyHVwKf",
  "key25": "63iKPiMs5KkywXRf5W3enUcw6hh7VvRbXeHq7kUEVib6DF7eWW7Ka96z2XRT194wnN6cr45m3eMz8QGwnzdKK3tn",
  "key26": "2Nay4sQ9ZJZaoqioGxys3AF9VCd5ftjNfNEJNddPf5e4KT66i5Rbs8ug1BudBv4G93ixtLKEKq5EzR6PmG8zXc9p",
  "key27": "3woxdZcK2uUFhFBByfrZTmGS6a1shTxSfJMqRCVGAqcwmey8k4if6o3wCyMRrMVxGSaN9tcVkCCGYaMn4BNaRCjg",
  "key28": "5vEj5oknPqPoQ7NMjQoye5R86NwZTF7MpKjujEraq9Nm3ZAu5MShEJXbatEjDXrt83twxopH5T66dFhK2iqva5TU",
  "key29": "5ZkRF9dPwKQG85aTjRzthVvk5uMHdfxv78vKYvqMQ2y1C6U58G7mu79qUHgG2ar1o2ppkRyYLduEtutJhKSebowV",
  "key30": "5jMgaE8swCs8yc18WrqjtsQMvGkJTamzkSmZjq698Dka6VAJhkD52W59XfiP8gZD243hQqbtSY6d9iCM9x4fotsT",
  "key31": "42KSphJq3aAnaeMU1rPfZKxYFD6q2sD2PRFnH44YmQd5K3pEBPToGrJzPUmEJEWK5j6NKZQR5e8cqZDsBbXDFMcE",
  "key32": "5s7DUR1cszGjkpxeeYvTWCX8rJb4Udwgd4XiKaepvPezLPRdng3wb83yVpp5YdcYLrnwAyH8pyJM8UqhScMEH7hz",
  "key33": "2Qb75CAJsW49CPWbc68pKJAegkfqj4Xug7hAaETjuzXtFzcZx6K9XtiS3sxNS1q5LbDFceVYMbWJGavYW57ZUEWA",
  "key34": "bXHQJmnduKWpjL19kRp1GAZSd7b23eycxWaKvVehRoHgfzHXGbuH15ddUBbbzdxCpbxbuNiSXa2S7PyLR7MBspG",
  "key35": "2sZ9KQkxsWLo1dzaEWUj6LFN1eDHmB8SnuMgoPBEq71BMUHngD23QLFt6ceL24qvhZysqRRuVZfrqkDMdmZYuRR5",
  "key36": "2GydbLpGecvxscXAiUPcxQVLEnGAqAvvcYfP6deCsDnQTXBEA6sBy77kwgvraNy89Dkx7bo65ZmAXLXXPAUrFf26",
  "key37": "49DvZ4doefzsMD5PuHEhTcqJXo8cB7mogxGMgCzZQzvjhJxbond1fmpRV83Aqt2Ngmixe92qmx1h81NDvAhQsHAZ",
  "key38": "248JwkqqbPpJoiXs2nCgA5gq68TAHCsCmDEa4vjntF4yTXqjVH9YCF1ygNC5qHrEaz5s7B7GMRj63wm7QNHFshhG",
  "key39": "51jMwrXNeaAgtnFcu2R1fsfnvAF9ZGonvpwSCqEpNstGRFeu4J1t4wh7aQ8tAa7GpAnGBiP8N9P855MQs44J2soj",
  "key40": "4N2PtuCj6LVxLyEzB9GVvex5u6pDHUWFUZSsJtc52eL9KMXKadLMiJmYAq48ZFD52q77FSdhNFajukH2uXRsA5qq",
  "key41": "2Z6gxXhCCT1xam5aBwnvg3GyyvcgpfuuFza5DWJ3iAZH9LAvy6xxha11E35JRjzyRQp3YqhnMD2eJyMa93yqcSjA",
  "key42": "4pPBNanVeaTBUxaYxUf9b4H2HuDHu4ypAa9JPFtHNqDwrqVHf79isiM93QX26DYTsgzZRYEjYWseUZ5TaxtEbqhu",
  "key43": "3v8JWxvsxfFSbxaAuxC1APoZJhLX2tjFtVfyXdzjR47Lpbw67SQCrXd5cnoeXVMR6cGggezvqc22av4snZ6oF7oU",
  "key44": "3igq2md6CegomUR96wLKhSHy28yurQ3qk2TYcHNQcsCJwCr3dFDGKxZDhuV4o8LBjd4x3S58LnmisGF3uippNqVY",
  "key45": "4ukFvxSPShqacw2WLzyzPkAxe4sWbpXZT8wzCnzZxUScWjJXp9yNaNkddHhQqoH4n8xmEdiNGzk91bGyEvbzQJ2f",
  "key46": "3KNuHidXJruc41UViUGZzwhGS8Qft9uBUDUVv9sXzNW48B2ZYtMX71obmDKvftr7RMzwpVpNJv9oJtVyfmvip5oz",
  "key47": "3FP2mLvdkF9XYijjAWiSmucPSv3prDcmS9WCT9zLg9zhqFYmcmjkdd8VrgbdiCUYcesdWrcfxs574mUJeH3FeiSs",
  "key48": "567SqWH3evEEBZBhFXcEuYTRoB1gNtfFJmzCJrqvZUNKSto66LpE8rwzrSMu3hjn9v7nYKMbYXeZj3xPmWvYpuLs"
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
