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
    "5pqGWbgJSh8ws83iJNdbAJTBfhmr1zUxjULRuZE5jhFbRZXxueQatApdMsfpMa6PXebdyo5gYggE1T56ZZvkajQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xaxhav9f6rBffKvqFuMgMRaAvJzfWnJjvmUpcgUMy1EwSPBYPSfFi6bTw6ntTLM6LXmazxLUJ1m4Mf4gsAY6GQ8",
  "key1": "4baHFH6mTaUbDvodyomWiYUQcaZ5vUE8dcH36uCPiEyTUPihS6nXE7CkWMddrHSc5Q5Ztn3kpMKvrCdsHJQDq4uz",
  "key2": "5HkmwakfX1nr2e8UAmur9XN4NNSfjdwVccDFHSWNk9uQv8unHxt8nZaS91SSanVZZVDffk8r7UqRZsPHYuN6KuqR",
  "key3": "tUvPMFEibEik6rsK8mntBTzGVQD21eeY9PwA9LBXHdcnEFNus5d3Y4GSUqsgGaPi6ukbBefqzKaddc8YQ1ScLTc",
  "key4": "3hBumAajAZAUdRQmu4SNDQhmwdrgvZLgi5mWDCS7zyvnA73k4oMdyi5f3m1aNRfhpFwUxWjr7ButrLLTwLgtKecy",
  "key5": "27e1aUgLK6JFxba8bE4rnSTSWCa18zTPAj5rab4vfP3qhZ1pc1gGuHinXSVdxnC39VXSYR5VfdtvDmSzD4gL1ZSx",
  "key6": "5nCAHuyFn3BnjKJkQKVihE42uYqiVkzfhaLmEX1ygWqGfhm2whsK5yPXag6wzwMTZSS2CNfqLyQYB2XQ36q1jR9g",
  "key7": "5GhVKwR52mELjfAXA4pQn5E548iNgnZwoFNq2wMSuip3FR8Lvz8957z6XV8UjvT38V7S36RMR221fy8FQm9WJ5Gv",
  "key8": "5z9bE1sJz89mvmJ13QRYyRWkz5AwT2SgZXrSBG7ztsdb8ziE1YYLLDkUpk6QEkkrXQx34ab6oAfh7NFiK8bpcNo5",
  "key9": "36nsuHjmPgQdAvC78QNwaxHSMSfYZ8Ry3xKgqVbo6CuFL9tFaoxUsU5rSChBjU8TjL5Wv6jzJNtdk2uvEQS9PQHu",
  "key10": "4aGjMjWy4vN1KWjmKhhStLnyKfJvQb4dARHeAu2aFPdKsELfertvZ8Qcvs6dN4bm1CwpAA9PnKY5bkNP9JRSvhfS",
  "key11": "3P5jpYtZRxN3q24p8duaZV3ETaY6AgvbLZLmww2VPSbcDDoP29zcNJkeX5ps385CSL4BkBHrRv1kTM5hPW8gMYnb",
  "key12": "5jqKBTQt7egg5UWwaRBKacFfEQf5Q4RY3nb1BCmawxY2F421DaHyZo5RipxzopnoTxfp2QHJzZgYQ3YxE3J3PtTr",
  "key13": "3domPG6HyszoyRHoSYPhdZo1fpLhpvruWkR6gh2mimY5kBfUuhtzqqsfouSrWZGokn5bELPbFrakCkZ6Fsu8mRhw",
  "key14": "594dnQGyGGXsDCbcqMxMoJdZiqQgXGtjq92aWr7nWghYgkBwLiBQPueD4Vcy4286zNxvnsmGdUjQtRTWFWPS152m",
  "key15": "3AnCN79gydvveFZmgzkjhqdmFLd8zoyoTdWUhVwo4qxsJNPmeUmCFcksparAuEnH9dcFCCQGuupFqY7kFz2tas8Z",
  "key16": "2n3vRjdTV8rVHs2R8jLhRsjZo4vns731zBiSMmocAoLyWsbj65yawCW4CxLEX43EmXAVCTbLeyWnRbAywVbwBAMp",
  "key17": "2cCbZKLXDwZawpsMqiqajrTzhcrR59iFTxjeCaoXruHoaJdoh7GWMPo1P5mtvPJjKJPkEtEn2giFqp29nBiynTZk",
  "key18": "4tTYb36YcV5fcqhyN56v8RRuFojk5Z8hAyuSyPT7hwsrpUsdSPu6kv7ZaaH7zNRCW2knPoDbosu9wyJoF9iAP2ui",
  "key19": "5QkCW8m44d2294tjRS7RQsXEXqibps3u1NfpR7SbdUCqkyr71f98qFmJ2eUeGJnGxVQBWdiZFz4orPm7HgMXzMhY",
  "key20": "61gP7QYsuAyAgreeSgDUegpG2m4cHL2ncJAy7TemNdtPSGsr58pMEPZxJoUGvbzomGhh4ojsAUwefq4K4TkiHuZZ",
  "key21": "2kfNivjrUVk69kqQ9VqJSvCdSoEX5bFaJ9ecA2gb4RFLhgNikcKfDUj7NMK8cFPRtqmDX37E75jBU1WM4Nj3NpDS",
  "key22": "3XbVYru4gu8cHxASpA4GfULPHCkB68NyjVVVnnWQzzv137S83nJuhYZGVwr1RL69TuyBwf94HwDX9EDsay5KPWso",
  "key23": "51NALjvcXBczEQDFsG5MeS1Pb3nBXar3mdiUJnbkArM9WUZoNcQHBD5tLpZkfLqdeCXQvbGjJ7wd7Me3e5BVdSwk",
  "key24": "3vjComM5aCr8b2CEn8u5kKncuLAjvRQahTFQP2xo6Uokfi2zXRNTkcnHd37UHbY48a23GUZLFq62fzMio4HS64wq",
  "key25": "4nEH3qBTAx9WDi3QkXdw86Xx6CrKHhipq5zMC3uVrxPntnzALeBfWbpBkhU57wLfu3y97TtgPXGbVBJGMiEtQPG8",
  "key26": "5eh3L73foRY5B8ZNQ2LZ2yHjnJhWt3DqzRxzdzsvNBX8dPXghpeWAmmCJoYb6uQA76C7kU2dpsjM5L5q4iUmcRtC",
  "key27": "5uWh5DRfX4wEhUvR6KtRuTeaig8Wzb1itkMjBNpSWSL3QvZeR7aQ6JY51rjRmvMwMN3hpNLoaa5TEReBLMgRPXgf",
  "key28": "PyDnVFxX5cmQHaqrJkouEueJyW3kCGy3Fivb8JqxsjDYH6gPe3mF4rnRxkuNvFLLhVf3G4XwA8w617gAoq3H1xm",
  "key29": "5ceaRtHpZXwTzD1sZm6uTbya682U11W8CvCM1b9U9tVsc7UPfGjFeQrWCTKCQGj2g5SY6EKbUZLoVSbfEpW7Kucv",
  "key30": "2e7hirGRFrFL9nqe22oKEbQeQMYLGWbf7cyzADZ14jKokWrwJCqnaxgfBzReWZuLHpvxszh6iZqdBsv6gVnikSf2",
  "key31": "3JGuQn11eP2ZBhXNVvxUTB6s6ERHNw8xooFYKzgdDVM42PjLfjPSJRqVRY4kwTuZSBAmymw5U5k8fujnMHxCnxQ2",
  "key32": "5kcB2gxEk3GB3cMkB1PxYERhadUzjXvSpNjFfroYUhMxr229HcEjwbAUMkqk5hdjnm2aq7JyJm6CEg6K521ifpBo",
  "key33": "3b5sv7KzpT3bn1p8eM5RNBR5GPXwxG4MjJgmttTjxVjRJbAc47N2fPaxxDDNJrNnU56To4TFMyJm12ngau5LKqHS",
  "key34": "afuXtgzPvByfgu1ov61g9ecRJKVwr9wiFVsx6NkyrzZFhpD6DYPWBvr3fJ83XnrrNHBUEmRnLaYKy8ESuNArukJ",
  "key35": "5cpaLi1TypS7TUbaQvykSG3aG1bYAVPCDvmd1DnhxT8m7jkDB2Qb9DaXELuhjcUUFu2qQwSaiLDWhmCuQ6Xej8ce",
  "key36": "2NV7hsCaTJ6U11owE85FdiMU7ujadZ2FKcc1xFspUjcVyg5MhEvWWSNC9WPHa5hfZvdPwhNXNXPLXkFnBqLStPw",
  "key37": "6aKf22eepMqMATAeo2zBe5P9Unufhado6tsEv9Pam1c7KgL4rMdTk4G52gEPpVN5jYKWcy2iCaHBrS6jnZ1sTeu",
  "key38": "3Lzk5S9f1CRntWzekbtUJ1MqWjKCtiAtpUhsDwAZG5BSJwzuovdA9D54V3dBXbf3E7WSukXJ5essKnjtVYWytRyr",
  "key39": "5HJoUUGc8QkZqeD5uW5WrDxnR1cENY9x5aEWZYtRnHSKzyYn9Jy8U6D8QnUwHKa8qJhy6zA6wc8rhesY97tZnTya",
  "key40": "41PSjKmkRrJZ2JVWi7kkvCQYHxBDgERznrxHodThX9KHGsbB2EJTbYuAnFR45HH2jpMrk2FcMymegJZ9PLNu2USS",
  "key41": "2txN4PdQyRMAtCWNJBCqc8cxL6sTxvPrRRuUpMxYVuBXmMjqjG2GGUoty76cysCtoS2FEKbPVaVYpJVWwfzAfEuU",
  "key42": "4jMyAk1dg7pme3xEXpBKmx1NNZjhTD2F2xx39PGcXRz6LBjzGJibw7hJv35QvujUwtRz3UtNnyhosWu6HPHyyvjh",
  "key43": "32PTBAdJgv9FXw4pZzppXRHeunt4WLu3TfdyVjxDuUTR8eUTsq3xsLKoHpc18nuruF63xitjj8H1W5k2Tnan4ju1",
  "key44": "5i4SDspJ2o9dwBbkEdAchASbVPASrsT6xYXaxQBcFPSFvC7hUnignCiNC18sh19tEvJ5ZLaJxeaWwe4U7swgdErP",
  "key45": "4QC7zPgvz2RfDLipkFL4sn7NPJBqXEFohhyrc3icQgZUgzPuCzZSMyu5QTQgfcwUGdSoA8vWUn8A1QJrY8nr342V",
  "key46": "iBVmB1dL7HqLa5AQh8xhmg8dEAcJc8zFfXA3LA26LszAhynfsxmqAboA7Apf53vKig3FZUSfrA8EKw6edw2aWB1",
  "key47": "2kD6t2kBemxt5nZFd672JsuBTtjGfSt3aAqovPhSouMiJAtwhDxcbtrkyNtbvy9X3FxA3iCwVpGnuFRYDrzCoCQB",
  "key48": "26PUPAS1Lo2Xbzko1yRmxzwXxuraK6eLUY7z4AE8XK8qU7tmp9oQsDDNt4TgK8KavuhBRHXXmqevU6f1y34KExrN"
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
