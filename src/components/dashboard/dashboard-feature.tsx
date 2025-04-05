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
    "4jB3VYeSJsrQLwC6jUwanLuH81kqSJmRZDgwA4MoWQGEncsPaZSvoqABr6wnwRGpZ3n8TA5mrP3mgGgPUzyvhaco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XY5tsGacA3jVVEU89xaLCqcXbqsRPASgJ5CgHAXnDvDNkUKPH1zbaq4GpngyKt2tZPyJqybuSU2tnCcMbNAuKLn",
  "key1": "4RwZWoQ8D15NdJ114DcfyTWAis7Qao1ByNGdin3mdwcLsYMiyzcaw1sNSKx9Tujne4iz3vHcz2HpVvp2vtBPv25v",
  "key2": "Bjifh8usczkegYUdjhCUxcD1CiPCUVm61o1E8uJycdgcdXciEyP6FaWHxyURpuVdNsWWFoswX8rM8sbkBX9qbVH",
  "key3": "2MsXKd1ypMUQUC7xoBWC6JGhb2QHhqRJwQCJqUsTYSU4RULSDd1KqhssULhWZtE43mwXm9DsLyfR8BovoBj4Ujf3",
  "key4": "5yCuTacb4qG8GHtA6ZGE4pTXuuXXrwdNqAVbqc5rTsat75sSiq1wVfZ9HHwfVYasPSaXDLL68FPSrQgeBjjE14Kg",
  "key5": "45frHEcLo9Q4KmMyH2Nc6nuS9Gy7bnGExPoxb2YBKhb24wg9g8CuiNvUtHz6Xcqq5Q8MHHuD5CFnFu8LDTHJaqXX",
  "key6": "Pn7uqtNgwiHLuZseApvxyM8nRZLqyJRXSC1na7vFbVcEDKRbP3qPBCbwhzif6CyLD7CAC9U18BbvsPqxya1yM55",
  "key7": "sVvdtkVnhFQ64L9WiTroVnbjs6YQEjpAQfQRzKt9tvsfNSap3TFmAXQ2d9ufCGojaksV9raEaLg95nd4nfgu5EH",
  "key8": "5cqwHQQks8xk3VmkEycbp2Q8XpA5EUZCUxkBdpdA5wQfBKsMQ1GxbSBteGEprGF6K3HYD2qX9j3BBJZuooRDUayT",
  "key9": "3MetyS1cnfYiTtmQVsLPjiLefnxxrY2PENdoWpqd1Qb633NzfYgQfdcM16z3k1vcGgS2RsqeSBBuFjHNki49sjGp",
  "key10": "3P4XaV3nwVszZy4LB95TEBgxuq1a6ZbAwHmvtwyK1RZjBLqrAut1Zk2DYebNof9qiR9HQAQ8UMAwxfpqNxFept94",
  "key11": "4wF4YAeWHBcPGVL6unYcmzSgWoKu5ZVwNLH51PqR3Qy62tmdnunFWMYNmkWDf1auSqn2o1R2Rnwhz1ewWTj8FrLq",
  "key12": "3V4JVnJ56nJCkFaBVL2iR6xuc3CEZPJYB1DwzvtGt8i8Kkwr9n7oTuByv6V6uM1jWobt1wavcq6me3bvjYX6bfKM",
  "key13": "VBo23n34ASn7PwaB23MwZGMZArVdeJyuaXdojmyH41FVrQC1qbZsX3HY9qhKXHKrH6x33MBNcMVexdy2jYxM4V9",
  "key14": "rygDcSZoiVHVYdhrmwTsQGjjAL6aUgAfDz28fUU27MxUzyCgBJ8ScUjiwpeiWoouqi2trM2etFVY2mtRGkw4QZi",
  "key15": "4XswbfDFN3hi5CMvBbh5UB75GduWpYUD3Q3EffR3CK5En1Scre13dQMCLV59zDuUCYnDuSvh63fif9Lej8XM75y9",
  "key16": "4tnMapiFL7ZWRtQB5BCTZChTEZQeeohPMjs47eRjN82XsVosCoN55GUhYyZiD1Qgxv71BF4fePPkiKbfY92K2CrG",
  "key17": "4zAztBGtLtxPAVcHJAWgpxYTrBx1C6VJoZN3vFrErEUVMNevSAnAszyM4JTLatv2kEdMPbHDiQQwwkBH21yzYs6L",
  "key18": "JmdsKKeFXP97EhLJ86XajwoHKDHTfgKa2YxDx94tALNyq9pAWBdkUkALbmD23v9woxT76RHxfAozk7u9E9ZgRb3",
  "key19": "3UG2VvJb8BoFTfzU7Ph4eDh6voP334Cj48RQGHYSeQR5aZDFu7nJdVAYuWxS2rqeZpEkJwXpuJELajDHifJxxWx2",
  "key20": "67VLKQU48r7JG1SjugYef4jiEYRuQfpxfVtw5RRirpRmCmnGkfbJiUvDK2fgEiU6J3rxmKPsfmBuEBW5Xxov16D",
  "key21": "2CsijMpmrYbaroWUjaZhTygR7AnsLzmLTHCfUYiMaY5rzfpWKDyUcj1Sn9NYJegGuiCYeKMSB7xGCEC6LV9i7qiQ",
  "key22": "6vCMRxGkPytPrxoyEvWVoMhavksakeFiYhhiCpoPukk1LbP6ceTmL5KqZYpqtLZiWDzB1sz9d8Rae1o6n8n7DGr",
  "key23": "5aQH2gi2eYzFuS9PDs9VwNvheRiqHRzKGsLohRu6JiBrEPkNbG2MLmwrnF7FCQsgo4uLybwuMH13MGo5EtpGfrH9",
  "key24": "25zAiz91nULXnUrwHvqSKZGNJqg8ASfiT4UYGFoxmwnyejBx8t5GopoN5zU2uLZKVX7X7MLhMuvUnrQfM6F6qoVv",
  "key25": "3sJgsJQVShdQRDPWqxr17b6XKEPTJxkmApHGAKGRyMZqzQga9n7dUN2dd1GG5aBzRZnjNUwhmoPW1YCzK5AajctF",
  "key26": "5Erk8aqsFCJZAXEdfmHi4pwt6q6dU7fAY7VPEzSyxvUg1Du7irzuLXmwF83VhRgWcgohNMG5C2a7p5ULmN4Sys6V",
  "key27": "ZABzBRYnuR3V2ydqqkzHHcLJPm4KFNfNijCARokW9T45MtUU58d4oVwmZFcZCKRQAy56VEpAkjTEztuywDpSnmm",
  "key28": "4YCDjA9zscfd7WUdApixuC1bzovpTBPgruhq1w9Bq2iFq9JpABWwMrLBC7uKKgDzbXQM8rwKKoGKZLLkucApnyUR",
  "key29": "4tREu9cULDs8aF39Bm3y8RNcvgP13D8FMTBNYJg3kbajdqDLEM3Y1Xhm143ddYrQfvoTz3uc3LuXA4rraap8eMcE",
  "key30": "2vrsj27oiq2ZxwGfse5KWX2nB5wX4sfniLNMsUQjj9W3QGrkiEj3cxVhJmFZs4uEPMVSAsijfqmtSKamcVnQnpov",
  "key31": "SxkChFXtsRZkwH2GND7ew3VcsX6HypN7MJqrksRiEnWLLTPjK2ktysAEe1RSzuxUNeKrBrPvc2qCChcSEht3f8L",
  "key32": "5qcamQ1p5WvtDRHXnLqD3kogU2suXtKaUk9dRcZhU3o7AEy1DLrTFr5KwMtZWPVaEXQVJcKxjRWi2bBA7gmTHx25",
  "key33": "5BszGjwwUdwb4pSKQA3fWECS5aZo6C5XqsTtkRfho3rExoTiTz4kFVvRRmfJr7puZo1PmuVUS84zog1xCjXqBsjB",
  "key34": "3mcuHFcZE6z1fDTgmavRnEdVrvomAgBgmF4Bkr7yTb9C6KokucfxuDBcEtcyvfs7D5mg4E5nzMVZ4ffoSHg3oXMr",
  "key35": "4zWGpXNg2XdR7tPSvC6ujooNZ37CHSsJA4C9weN1Cnaj3Vhydk9EcDAYVD887ArVbXtgkAEAFP83yHCWNBRKTqYP",
  "key36": "5XSceWQnVzf5FL36xkYTiwujUK8uChFR3gXhuJ4cCbSLCJwbHF2p1EVctjUbQb1N9b2QpWFZyktw2ncn4zXqPnvs",
  "key37": "5tyGDkQuM61HFPUuV43TkL94YmXvbN8DHxTR3NPx6gHAX6qttvHHChnQSFBQ9XeU7BCnsviri2KLmrvCDURLhiy8",
  "key38": "PCMbiswGE1jJQntEbcStD9CDykmMpueHPSm1Fb73KtVD6km4BfZSNS3rtaqD7gEKLwn8Ud9Me7E1BzcGohE515Y",
  "key39": "jdXd3Cb1pUbXJFU4xD5UKJ69zSjWHyoUsG61P2kmBxJKUxMmUFXew7etFq1Wd8w5uo3ZDz6VxtgpMvpwdBzQdpZ",
  "key40": "4QGx4fsS5qYDSsqxJVJ99yToZv683Dkgj6fKq1ySC7XiMDGWXiBAdpm6nPbqrXkHVgoqN6hwPQc6SGSjyjdFwYfS",
  "key41": "4jfcsX3mAwPss568RnA9GN6Rqh7nNnkVyMVkdo3Ni6pGivnFLffZKkBJZPgEmsyKLnGhBTgrkHbEMe874CDBxBK4",
  "key42": "38u49HSxBHoDvUncTbb8mnkf5dcyeFmTYEVvRY2vXF3h5sSYtVrqArbGKim5Qe6DxZfk76GNmwkJaivnvSMtjeer"
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
