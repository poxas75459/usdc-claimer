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
    "5zLWuTgEG3moJ7Yq225p9QUyWMpTH6pT9n2Eh2tCwJd71QS4ijhwgVcZEZqXXsdKgmBY5NMheHuZgiX34SNH9yxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctc1qBgBnVyJNvuRtuvV3kdymHf2o3umworRPX8JWQNcgAuN4E4UkAF8PUjv8EjBFQAbSvhtGevLGzZn4ZfJjXe",
  "key1": "3ec7LL2Hm7Uis29fkFNbjDqPev9B4JdB8oQNomh8RHo4H3aVzP37o2wvqHocNkk5TzUdpu4YvAw5NeV3DLsnUhk7",
  "key2": "2h1fg4nddzcL8F5vdDeuu6QwhVTnsxH6Kr4jaktZeN1u6vZscxmMrrNhZc6UaCL4wtJ6U5hjvAHFw5WzdSydTkz2",
  "key3": "5frX93Wc7YcsDkUoMpWCVkD2BdMFgizKcuVV26TYZRCjdxWUbRU1doN6XDmBdJsjnLH3uRkCJemrgsBhpMySGKPN",
  "key4": "5w1dQcsGQJkPf7DH6LXpYzruPQeSqjFyjxA2VNUXeDkPVxveLz5wp1oU1CmBuasBsu3hi3wCf8Y5as78g3SFQy6i",
  "key5": "2RVUWu2HdPzqtuXYuEXUWFy13jXvJWZA8LMYivfMLnCZwxJB3pMhkswdHjTyCCUQkPju8mej4Mbx1neqiDZQpwAi",
  "key6": "2exZWCKsiDF79F2L6aUk3wWZPD5Nr4k87cKWLYZQvLLYqRpPBGLEEykAzZNa84CnxJZ47CnMy6q49y7t9ncJ6GZ",
  "key7": "4BFsGcyNL94RGuCFCMxM3BxphrbtmxkiBqmhjS86yaqfqKwx3RCfMD3BKaH8t6nKf3oTPR8b8g5bEBttxZ8JwsDg",
  "key8": "3UMnmEWarX5kSPas9RPU3wqfqcCyEUwFGunqGsGwtU4tSoWKMZ95SqJ6cgbjzRYCX1UbSYUF3jq2bHp5nhBZWfb4",
  "key9": "y9Lvv8BvHBac4wLGBRWHjwynGc9GGSUDHzCutgoULpXRMnx2s8Rk4rCpDp8sekf73CGdJX4o58dSR7RuZykDnL6",
  "key10": "3PTAwWbdY29USnym9DcCVnEH9kQkDFw4CjFMDRUBfrjXsZ5fV5bjYehqsF2NPYDMQrkMn8kXkUyTgpDeuFC3HoEN",
  "key11": "2YkJU4wpYVS5V8A9s18o3u1wAa8zV5KguqjTQrVaFZCcHHdNPGEEZa4xA2LDTynQepDq67N4pBcRBNjfgjGXK6BA",
  "key12": "xorHJKaut1FhyPsyDj3pUA8RAXH4R8BbpryrXS1oiJfAEpZFqCA71optGWfPetkRmTgVRWhZSNybvwP6xVRabKj",
  "key13": "2rApRk7PEmi5UR776mTzk48PWvUii1q4a5PKySJTJWV6swZDuKhMV644aCTm2twhdtNtBBfD3uTZFNttFyxvLkng",
  "key14": "DPBAHn9sHHBga4EPrTeyxmDuHHd22RyCkwXnPLwpSveVpvf7gGkSqj3e772USHKb9EnFDEBJb7E2ovof5VT5Li8",
  "key15": "f3sm1YXkmAZvkSkRwKYTD6gCv3XX5ZgTcXHijQpRUyj4VYhS46M7q4DhhW4ygizcRMenxZx8Bd4E5wtHYxsMAPY",
  "key16": "2JFCTeWH3AFsKzmXR4gPctyXkuQXvqMdSurqoq6D4mZgVrasFDb738J7Ef3WNzhMy4mfEe6JpxekioSTm1or8UzP",
  "key17": "3mKFCcNJj9zUhsPZbK5bMPFhT8pvJvpyzjvpVywxccMExWdtqGvmwzYstPJ8quajgeBcbteq92MGjJHrNKVa25ra",
  "key18": "5Ev16K3ELE3gdEKm24byoBDb5YMA3QjiLkYke3ocgN9inmrHn5pKDQ1BUpX37M5omZQKsmwKZW4iBoFRNccDrEga",
  "key19": "2rn23TgprtahXsF7Hn7KJ4B9VkRUYKXWhE4Sae84FSPTcAtRqpsjh1kZ8ZbFHwBdPyUtUtrRU17daj4t1HJvqdw2",
  "key20": "prGxHQmFWNWN2c8vZes5FSkEFasWwJAkjFXKpRVPKAWtMPb2b9rN4hdGQUB8JdYAJi6KqqVMSXj4Jk4JBSo7pH7",
  "key21": "2hwYavwk9NGwKtDbwghm4XGHyCKWiw6C7Lkfr5SQ1e5vTPvjGjrD5RdnVuAP1j2sj1DY2tuPNrnzPcfYBJRxLEes",
  "key22": "4DybcqSDE8FouP9P7oUMibS5UC58BWmBDa99qYjegU49gYwPod4tmjCtotUEmLMMn39M6uUaa2mjFWSSaPGh6gog",
  "key23": "26XWskbHPaHveHhk1tmC2dAC3cRk7P3YjTVnPtSFBfdgo9UxSPyL7aKaTi7s9k4eCBH75BomXYb4yXT9yh4o5mYk",
  "key24": "5YVyNkAnoMeyFBJNGj1ZZ3xKD3XX7w57AWxFGdN1G7g13MAMCXbNGSaqKcZAQ29hFrfXLvxf26X3zb4zF9Mz65uR",
  "key25": "4og8jjVbFMZWT7aiSH7RVmHg8igUkimmKepYvRUhd5w5NdMTn25Edjp2qFBQ6E8nFYg2Md7eJ73yYgbDiPRKeYwb",
  "key26": "2osZ5N4E5MeX81Ne5x4z61BHNNkTzkFcQfimME1o933WotnhJvYpw26bhc7qQXnbGTYHjr9jhjb8X1W4xbXkQKLa",
  "key27": "5P92kZnnNKbWuqayxC52sYGPdqB5FS9DAmq2x7DLZXA67KNgRFjyZYWeTYBzpohUa8cvAirRkVMmdhY7tuFNHWgw",
  "key28": "5kZzfxU3sbfJ955Jh1V1eVbCAJTB7ySCVw7odVez2v5TrUUZ3anUxfH3GJm6yLY9YP5ckXY6NzmpLcNqJFrTwba6",
  "key29": "3mAWh498trFZPZD5XBDUbe2ReHc3Mm1o99Xs6um455peEy62ww3YZDFDYhxd81AcSM2yYNwT45ckPb2n9SWqFGTs",
  "key30": "441x681yb2hTWeDckWjCMLRqYwVYprB5z4crfaXwM7AYhFQedD9AfgAaSmA5eDNRNp2nBg6Xt8MmayDq1bRqx8hA",
  "key31": "5Qo3aphDHzoVg4ZHKTQtyr2eWRJweU1E4VapZooHd71FG8vzbm98dtLnnaxbiEQgtmaKWrQP8p3GiJ8pLtaxb52U",
  "key32": "428gA6DrN7DS2wafen86P8rGzGmiJp3jwGgv2mt14nV9qyRbDtFbRt1bZDfdnkinj2o68zsodmVCimmD8Ym8DK1y",
  "key33": "2yDMZEf1Ns4uCkfN6E4yWzYVp9te8GAZDB5rCbAi6uZrQtk5mne84DSGVLkC9rjWfA7s93ohwq7EDfuS1cyLLCca",
  "key34": "4wthqT2pr1QK4HF5UiLo55FAF4Kkb2HaQWALCh1SsyoaS3gGCqB6F5Quxzjgoi2VAZ5wNLcosz9PkVcvXrivPU7C",
  "key35": "4xpoeppWuK7K7bjbtrAzLWSoZztCP2V2z56ihgB1Mfs5NeiK5SXju4JerCENYmYNro7kRPfKbF16Z1T6ap5SDQ75",
  "key36": "2dzNzK1wE8TBZto3NTzm9T1nYtkDCe9FabG2bnt7jRNFNau5Kxyo912gK6C9HQ1YR1jxnEh96DZnDyavmoiKD2q7",
  "key37": "E3EZkgkamKiBZ4gyuup79y2zXkpyDkR4cVpqx89V1F9s1LvaTwdESb5oQ3CSjDXUrZ4VARYbtBiKHAyTwjLLfdB",
  "key38": "5PhPQuH3P2qdFV6fZ7hbnTmjj898HbTKxF7zwxKgTKqPYMg2kYj89rcPUiqLs2V5Ya4C765jnJfWJuPPQ9ZyTwyh",
  "key39": "5gdDcAER5BAQZFjUVaN1VDDEV8Tcg53iu6EheMbMCwxS3RZ4VnbYeavNadVubiuotnVwne71pyHt64UjwyQnxJE2",
  "key40": "4KMknhEwFpfCzf6YN9T7EVN8RLTASbmDwDmvRm1Sbho4Ep5c3uaAHcxuWBSDxw3KtpsEHzbW852549yaHH6yiwoA",
  "key41": "4dAU1vF9sfEFhEEShTKVEhfAC4yvmKNAJuytJQXV4sVn2QFZjo3TR8fg2gay5r1hgsVw1BSumHb1riRTMHhfYm74",
  "key42": "2yCgvvWtRqUguiBC1fLUdvu19M1dHAAtr9qQ3z7Cd8ozysw5eAuyWf8oCm5Kf814WMPFv9KSUJBA4JytmwKafujR",
  "key43": "3sZXwRdQU3rwiUzhkiMq3oFEpdvG4cubqYX6faYRpscVZMMQWeeEoqhwW4tqemKWSbiny2dR8QVd8M48Wg2Rcv8M",
  "key44": "3nGrzc42wD7LSSMWwhvMEeRAjJCnioj9kVjsnoD3CALWuyPGHGCiTEiaSrg3iuTFxXT3cCvztUyuBtQ37QPtuQRD",
  "key45": "531G1h5Awzv4MJKRMxvcRUMt15tof6KTs9hQF3mJHhGv8z3SGdDaiDhsq6d8wtzouqgZPr2fnd3MN49Vu3DiXJqt",
  "key46": "5SRkdBELQiv9x2ikW3jzKe9ZDLFaBidDBYc5XLnDQtgnAfvdUtcEYCrLELnLV7zcqZUs9ZWEqQcUtF4x1tYTPy2a",
  "key47": "3DoZos5QaeT4fS7Xbdr3GydgYv6BrLTkYb99Z4TJGQZqHKMYbtvvEZhxJGmugKe3nX4Kzt3e6rcEPAZKUPEbvgPW"
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
