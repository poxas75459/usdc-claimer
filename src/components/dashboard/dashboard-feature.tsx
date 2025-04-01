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
    "5LGa2HdKHszUFvvB9y6ioTREQUKrrTuHbYttNNEQDWjxNnWXCTJAskMEjJTXX8nVE7QdHP6etD2819mKCLXBEdCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APawLxSgSJCnsdWcRHWodaXFceAtBRsAi1LYZem1pAyxywNoVas7gRJJuCu9oExUcZCpWe5s59qrnZYsEytuPvd",
  "key1": "9Xgk7UBPMoE9ncTaTGRsWzRxuPvpWtYHAiTb1jfJxA6vCwhURKsbNnwPQ4ok4aHdohA2c9EyytQWzK35UhVXu7B",
  "key2": "V84zPzHhCPTq1vweZcqGeoY8DC3aNx2zhQjAKtZoXCd73deavjJATFEHZsZgq7b6g1ux4vTboiPkFsr969beHgc",
  "key3": "28MLJcVDiiLbyp69D6esH58tVE3gAkgSYsM95q76FQTwhPpMVFF5YYGjdTG1aPRWhqfddCCAswbiz57eZ8qi1S3W",
  "key4": "4KJpwhK93rBn4guoN1P7rKQrWxYZx8r739WWv3zACrTS8dqVZk6hewk8xbttYXfMutqjnY7UqhwhrNoiQY5EEvP4",
  "key5": "3YRqks221zZktoabzfLp1K9AzDUaTNX2QuWMnsPmxSh1JUhTrJ6FtgZPC5e1whNGhkMstcqDHnJpTYUB5R8X9Hty",
  "key6": "eLuVv38UgUzcthSYYvjCgNdprwTm6gc9r6v55cZpXcYs8KDNkTi9efv2WxbxsKypK72uWAitXznTJqAUToGL8eQ",
  "key7": "5g3RCitQi16TYsbmS6M4T4jyDmMoUMUPWqeBignSyNbeEF9k7GdpaMdGJPDSVtw9pYDF2e54odF2yfnQAdosFqMU",
  "key8": "2Q3ak2eRMBEsbaCp7igREfDeAfSjbYNp4qyhJmSCNivRNL4qcy2kSzNggNqAVsYwpHnW8D5TufQ9U8beRq3NNe2r",
  "key9": "32XBHAFFd94t5cLuNAeKE7TvtKPNPyVp9aGVftpzkqt7n4TEBPD75eTTvKoAhZA3mRKqLBRHxUVyPi1qpHurfcCr",
  "key10": "RTDcrQyBFKW5JC6F2bxk4bYbMFPpRLfe465Ec4y79HnSUgkY7awQJcHjQNzTL2t7SDukraQouFuW4yNWCw2VLer",
  "key11": "Pp8X9c9eRbhNd5YY9cdwN9UamtFX83whDgtnKMwH4H3U9hLB8YyeV5sdan7hCN28vayr5nT3fawCoibdDp7ezXJ",
  "key12": "4nNRZqSjGSJNBcoTbUn7e2ReJ7WqsC4TmikhHvW9UtysNoCZFiWrNURtEb3GRT37Qm3hsmySpyoFULQWSeWVMEdh",
  "key13": "MFwYZuScojdbYMJm5N5pzPx8zWcNACHvmWkdzmNw1X6Pqqz28kfTTddPfVvYFxYvHe6rqxWKuXEbL7nYiMwhY99",
  "key14": "33h6V2VRKeNfgJaLwCCq2Dtq89YCBiBcVrvuDj541eqwPb42Ebz3QaWpasDqmQUwQcsQcfXbDMqvC92h5h9mNGF4",
  "key15": "8x8tfwSveMbArfyMRhPY8DeCoeMxnRhgr921steHLrEptrrSUGhCjMpMSXVH1z3Rs22jqPcnPq91KrXjLFiBgwF",
  "key16": "ZGkJiFLWnE79ary3ADzaLrDy5srF6vn3G54gSPgcB3BSxZZmGjmbMCXCu9X96jRGKQubgFZz3zYw51o6s6XBixh",
  "key17": "38uMdiycUvrV2WXHKE9bfo96CNJhBFYGzXbhhwFk5KTBbadAan2PqhLA6AxKH9Gde3xmtjjY9FRgvhAgJuq3r1Wx",
  "key18": "XGgBxSjmp8Be4LdVfX6EMXyBe3avPKHGVDxixtuCgzXjWVMCtd6jExEN29QZPKXehidD9rXTQENxodBgq3MNu5w",
  "key19": "52GU7t35ztg4UznJak7nqFoLNKYgSjx9nyVu98uNoRcAwJMLFTtAF5LjPvyevBX6KAp9D2i3W2zn4KKphnqQXGJv",
  "key20": "5nyHCEhUtyN5kHiCvwvY7ZaiH6zhiM8GB9LGnVusXZMEmW1jZZqL3FrGH4yG3bWS2LjJN2hMypvvhbVyoj2YrQF9",
  "key21": "62oUpVJVUmxiJthUiUywWC9dYGsr3qjtKV6mXzGKt7tZ98574iLotC2X3UXCTT6MT3aFcy2HMBNQLSvWspZGAJm9",
  "key22": "2K863ke82fpbgE3WRUEyr2REyzKNW7YppYbNCwE6V7CBVqmmAaDnU8TAjAMWq9nEd1RCxtEnXG9o63RGbMbJQ6t3",
  "key23": "5i4n9EhckE7Hc3EABKGpDH2nfRA6S1rcYyxx5caQD2n29Xp96muzXMQgUBECmYF9oXkWVDxiN5NtjxUaQq4etgn2",
  "key24": "2BTHo4xqJjtVSeo1u4QVLKAEx9CCNSDYZwzbVwRWoyq69q5fG4hhg3J9KfPdvyoD9xs2N7JZVdoY7ubwnCR17M26",
  "key25": "2NMSgiBkthwx7EgphFTYFn9DvNXQf5KwE93swDXQJXZeCPER65ycUNfRe6bnfQwwoC1x3qabopX47aWzgEt26FB2",
  "key26": "3XcpbEmUyBVVZ4AdyVckmuqnUyQKPDJGYYUorPsS7Nhte8NUUrx7gWv4SJ1xfyVvKXjEVeZoCymXPWvGpJZry9Dk",
  "key27": "62Mw5vde64ZqzQUMMnFu87JHkkhEY2QaoXSYT35phQhWanTDGVhwbK11sNH2hLNtm5ytZhc9N5ZoaiGGXBTBqxmE",
  "key28": "3c9o9TANW8fiKohV1BZs4MEhTom3WHBiGaLq8vAsuQP3DcWb1ew171dUN6UM7qcEKUhFNkU7CPWMmgDMtP8xduZs",
  "key29": "nsSav3HkR4EdQfUDyjNah7tywmXEvzcfuwb3sMfSzSYkj4rKURivEtk98PhAba5HeaaNSK7BmDjLXhDRWvesEko",
  "key30": "4Y68YvjcvPShV1CgAzFcHtLPEwX7a67myToSamTxG4wW4FzDvknpBuH6q8yG3F8V54dp19mLckJyyDNC3qDd61FP",
  "key31": "371S1BoYpMhdwJeBE3DV3UCdUVJ14kr3caZWTQJRUg4BKqHoJ6XtiEP1Nb4mK972b3Mf9ixKQQSaNwc7GdKeeRzH",
  "key32": "3zTCJt4XRQrCf34pLXNvJyabqJ7CDbDaSv22YjmSEuwRXkhW6NgY4SHSkyAYDFW7M1KHTji1tJqyRuLPfzLe3ZCp",
  "key33": "4ViNSuTtXQJ98ukKTxErNUZ8y9sADjDKB4j1anqGa522KZvkQGNUXwGi4LXy1T8mmimkFVSieoX3Qs2AhryzbYMt",
  "key34": "53QQbAB5UttzSju4vEBv9dGGD2hrQNvkNaD1fZjj7if1ULY8e9k6y8VNErgZMjA6TqQPaBxYxVAevTe2jGybiyz6",
  "key35": "4LpLxeYrR9ByjjEGDwBRduAg5E9DftHKq2ywJJ7PZf4yf5rBiWVkxBBH2Be1ptkuBwAXCMgvs849cvQUJSS1mAp1",
  "key36": "5zWVafu8ocHgroMxfYWY45Jx93T9jan8xeBqKceg8GXr5MKgEJKrzrr2VPNJqSHJotSDmk1Kd53awyJ3RU2pNtXA",
  "key37": "EMwnRnAaqSKSvnmZtm6VHzJm3EDXo4ePdDxxNcayVjFbgZ1QHrG2UGsRbQ2kPJtcXh3uH9eqKzf2sbyfjzdYCdj",
  "key38": "4azuHVoaJH3ycuR6NxxDvYQzCgD9z6k1jm7xUuZcHgbZF7FyWSkmAgqsHCNugBJ1JW5NdJdJTMEUhLH7BVnMsuXo",
  "key39": "w3kcUhWuh94gdxJWKd3UeTCPKixGbkZ98u9dPL2LHE9kjPL3PM3TCknHbB9rXK5yYBE2YQRN7Wm1MoyhgQBMZx1",
  "key40": "3MyBUKXuUDtgtnnVE4eoNG8i1BS3LjUh8vYFEUWjCNqq8icyUDV5D7fNihtWT21HbMW2ohkjHuKvF7w4kdBaTcGJ",
  "key41": "4irqvkWNodofC3j5xZh5ifi5DmjiHYdSVLceKke7ipJdJju6v45J3aso2qqjd52JTTtqL4WUwyNgCmqsVhVX9BaC"
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
