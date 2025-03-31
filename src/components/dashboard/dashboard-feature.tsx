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
    "4DnKAHZaGe7LvzmeYiEywnsMibmsLQf6xkW3s7g8AhkiHY73RBPQGEG4dEF7Ry2KM93eLH8cWroQxpQLgEKPd8Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M2u7pPCCnJBtRmGiYUwBWw9fULB7Vfh98NjUfo7zfJwaozdBENA2V7YPpKFXZMGaCpA1S5uWg8ypcSBBRRTN91U",
  "key1": "2ybDbDN4XoK3V3nQDQvogUnEWper551fqArQdjEykMBnYXANP8ujxtcSiorqbMWD6ReaUw9LBj2SG5SVonw2hz6q",
  "key2": "46MG2WrwBQr7tRNgE4Prpjh9hYwVWD2GohySaMEjSxYaACqPVoddtyGN1f31G9rZj7eTxkU8PZt5BVoxr6VEkLaF",
  "key3": "owmTzBpVZnuBVEtxcHSAEsmysLhjrVSLsne7TYs5mh5wx41vA8ni9gKKA1Kj7EU7FnGN9Pwen3xon92Eccezr4h",
  "key4": "3ge8q1uP7FdAsEND9EGnPRNxL7WMNhNAxrqYtrGS9XeJuFxgHRWkW63PuVUYjsYzvDGQH9NfmbRXP1EKc1iczjQn",
  "key5": "21wA6uazg8mzQ9vqLEfb8m9kYYQGEhfcAKpddMniaMa7dWoL26jreKx6a3u7bSfBjFnR6TZSb49QfsNvZffE2vU4",
  "key6": "FgjUwSFW2LQAo6JhxmeoriBZtSfcnm14tmXvrFYuJpqr16NnaQKWUxVjG5nrMRagWiGf9nMG6ds1XnfdWECtwtZ",
  "key7": "58nBvgdHxDHJzUj5GrM2JvjhSdWNDmuGyCRSZFgNwGkVdPmb5izgbTuWtuLvTVyzm3ehbC52gFgrPSHD5H7PsRS2",
  "key8": "4ie7XkA9P7dSRC2denUUxQCvRu3JquYDZHX2rk4xLTNqbc4kU3Jicyrbd8NKdYNJ4km9oVioDDAob3TtesgXcTt3",
  "key9": "4Tzh1tiZJu8PACEx1aUy7XFH4NGzoPy4uGVXJ9dRmgrGHoaaEq9Hzzzn6P59pg5FbvgiML5ewz6fmVWgVNEr8pFR",
  "key10": "3AdFfX3nNwiY2foinBKyzV54wBu6U1eCdXMhvRqg37YTmfv2dgQ9PZ2aajb5HDMFKoQXE8HWUQN682o3VDiMSgfo",
  "key11": "Xs4rUQu8qRR44t1ixmrb1Dbyc5M8d55P5nyHab5AVqZcVqN7ataDTLkADhJdnFnF4aHyHGqW5JdaooAHoa9arxk",
  "key12": "5Y6PR2dTmAfqxyBSGYZ5Kp7FH4MnmBPpmYConAETS5JcaGXELFgQavcdjis5H7eR7fAt6pNp55kRjre2tus7sCPR",
  "key13": "oxCNcog9bHEkTWkdmNzf3n6Ez4aZGz1Ct1wjRrQJPyhVsA6eXWMkSSEoziZaSScjD2KnJVdzTnttTD5wKFPkv4t",
  "key14": "3YcNTYsUPdmQ3vEJ6ULHeFkMat3fPAPkyR2iaGjig4N2cK8DLPkZAdxguziSfLty4CyLdKP3QzrdFv7LGEgnbiYx",
  "key15": "3KHvDvnazQ2ky4GfQJZDePb5CDmEa6cutzSCyaXgPam94FKYXx6YUwHf1zZpzeE4eMZ7inbsBtYjSHdQ6AtmD9tb",
  "key16": "5i4hCQYqdVsERK94MwHEpZSS9rvmSaT5h2ezQmARJtnxVp8WXcA5sEtxkktUWLHMWusLJiFAz1unyP7myRJr8URa",
  "key17": "61d4p2VfaYkjHa3M7AnMqgKBPDpht9bFuKs1vsgZwK9PFU7Z2PtdhwS58JL9nMdQJP7kSF2pJ351QV3Zr6Fc88hL",
  "key18": "5UF22hEUuqCJ9ySYEMeLKthHN2msK4ELz1i5h2EkYnRFSkYpJnqDjG454ot4ehytGFJ3MJyVNuCRJbNu1YWYBDYW",
  "key19": "yZ2Qja9aKKhajTU1v8VCMxiXS2Uzq1WW7hsddMo5RkGqmEPurgSA297KUAYmUTymWYx8CT5YDpKoqCaZLmazx7P",
  "key20": "2jQ47S2zVgRn8SuE8h7q2tL2Tv1PW4r8mM94ejv3h9FQYBegk3ojGJXaNJsG5SY6zqaKudP49x6Hw5Hm67pM43AG",
  "key21": "2c8Hi9rvBTLbiCrb3tDBFfyA2wMN9UjhRy99Bgq4NbeYWrcJovod2ap44Wwb6wWcEmxqDysG7kcGgF2evaA2eTRw",
  "key22": "3p4KHx4d8f4dtezeogRrqPJkurHcRsS339pH6ZXq3CBihYNzpAfnqC3WuC11xk7eHqZSn4nQ6uKrdNtCk3sMgTuF",
  "key23": "34kjsAp4eURXR7SjH6cgVDSpnV9nGYXa2bRn8a6UHjnGrVQ1E6DBBQxxxzzetr4WycSfnZDrWduvtdrFXsDfhc8n",
  "key24": "52X23qx7adASiqKYbUA818uZjp1y6sGo7ptNWH3N6yczogjDVfJgAgXmT5ourfFd244iMzSPbhQaUhDAyskive7a",
  "key25": "2ByBxJUz5edm1S1rmXEy1hGMn5aGRPzTESpW7YHHYXdFVdGcRZpSurC7Q8rkZyon1hWbVr6sFoAS9TK52GnVgUgP",
  "key26": "2aMhWZaqjZjnsgcpS4XCfSNHmMzKbGN8hUSkPto2sKbJyYRJEgMX7RncTqPc9GBYDYncU4ZheAs1WCBw8p4iRjzv",
  "key27": "3egRezNgVGY7fTWpKeaP6Et9vmN55yi9xKEgVrFxsbRq2DLnZEkrsvVULoRuE18Timk6wMJ7zyJhauA6Q2XmRJso",
  "key28": "5pqCQwUEuhUD9ESEjcr7eKwaMBo5xE53ygtSAr9Guf3giCac6LmPLGsmGjjBDH5E2DQ6GAB4gELAzThJbztEKxSV",
  "key29": "2d5Q2McQuRVTGtCM6i98kcPGjxrxnurLqTLmtajrzpAwPM8PhndU3ZvwvN7XHRx8CF64eNxZXioL1aN4E24zAaSt",
  "key30": "NHyVc46TBtETuDhqp3aaP29DwoKKBoHaqdJGN8onDsxRaTYpqPFqiJrjQnMP5v86vJTiddrx2jRJgqQckv3Y4QH",
  "key31": "5GTuFFuxnxMVsiLyPktfrJPotiD5yS5T4e2EEU3A6Yx4fnfNZ1qfNjCzhNiUEJupCwy8TdwEAwX7DHsm3rfy5L9S",
  "key32": "2cZQbikbqZM1nghNBUguPZV4ihepzHcVBYS7xHDzEnuwv794DxTLBycgrzSKPoGUHfLFSkzYwhFPMir9a5Rhwcsv",
  "key33": "4txoRxgtJGfJQjji8Mm3tdq4WZYEYLyePmsLWABFbcBYSq5bCsg33xiuLtc5RdDYSj4yUSRkTGGJYbybov2zUCHW",
  "key34": "2t1W4JCHJKkxuzDTmv7uuEbriEfDg3LEZhBFGVS8S7Xnb81iBsB96HjrPTS9WvU1D8sYJfaEqawPsuQt1Cd93jka",
  "key35": "v4ziK1fxMxaM5RYJCHrmqnUePbCBNqbv4H1EbKxk3sVWkPGUfYuuSJR5neuEVJNbm4Qy6HzWxkPwWnk1y9z5HPz",
  "key36": "3EZnbZSgSf13JdFkpNVnFSmcrsavbg42ePNvbYR95KpD7p1acf6QCYyeN1uMUVYanyLHjAWvSDhuPi6Unw4LTnwM",
  "key37": "3vFfRP3dcYAwr7ExoC9hLnHSeiWQwkZG5ZXhe6bg5j7vws6Y435jgTmWQ1c5wGdJyUxiATeeTCRJW8HBWaR8L9Re",
  "key38": "2KSfQk2NikUr8DTmQE6ZYYkgVAHHKwukSrEKodYy97PFW9BVRft86myaK9gMeenBo8Av38i85gj8Z4xdkyeC549M",
  "key39": "xx22aQrnuAhWMzyuPGQ2quFwYPVDzSRnrd7yndGF9rFat1zc7DJA4P2bYpPGLsKj3dEkNPsFDYbTdhU1NR9KJa4"
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
