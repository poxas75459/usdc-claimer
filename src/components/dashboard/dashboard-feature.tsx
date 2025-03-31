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
    "3GdwYKiEuMrPtHtLyJd7ewFqg3Sc9p3WhYxSM9FLJdkXqxh8ApFYHGADFTP1nSDt1Poty1TLpGkQby8armx9cZgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tqM1fmpFPyKY9BTDrqTnN7j6EK9VKYL69WoNeGNvdkC4m28xfqbVRwuUyFHPnYA4Q8ugxo7X5bbwkLLP1CGhayC",
  "key1": "iaDbNukeTh6Si1i2r8xUUsRCE3NvVwDUVndn7LHRzwGvn6XsHBvxGSkQCHwRTcZpjTC9GVGtDco6pPfn26JhDYy",
  "key2": "4LrQ6RWnSazdnAytpsP46PXaB1JDA1KrWsye8tbiPqq3PCtYjh7kpUFa7C1LNMLU1j38EBhDmWnVXBen2AfkRWdg",
  "key3": "57wgttzrtpN9icpgcDregfxuf3PDgNWyRAQY5vMJmiXkMax2UChMXa5MM3B4EVVdMa6QAR8Ft4nwr8nRPVUUjdKE",
  "key4": "32LAPKaqStBBokskdwqgsaNisR3nkDdHRMQCsMiZA2VZHetJMFwhJuSaqMpbcvssJVpEBvZjgSuhzy8dPg6SJ5zo",
  "key5": "2twU8iqeBc3tzwmSQsnqwTrM4VZjM5wXCzp2uDqhLLiRjVVV7xf8QKHMMrPL7yjBGv5WiYgWAvdPQJBWniwnBB2P",
  "key6": "2CM1PoDQ2fZ8JJbkbphTmMPSVyPNHRRQAZ3VwvFLcgPq1DorYjXJgbHGaLsLAPg4HkiyD4AJaw6RESX2E8JNB675",
  "key7": "vXmn4Gie5NCHuc2WdEov2gf3KsaDkszZXueC5QH1LVwquGESUnbPkKriWo2LXEL1kRcnDDg5tTZaa74QuDuukNA",
  "key8": "5zpXpUoqXmNaknbmq1GeGc54p5ANczEf5dcemubKEfe44pPYT6EYZq97DtS1vkWZHEMmcDB5EsNjzF8t3317Ca1c",
  "key9": "64sYmJdjkcj3J72n3Cm2quQ3TJivM8Dg1rAijDoZLrT4DkY3SSWzDSGHuoDGzec6g76K1kkQjbuH2xNpvkVkz6Nb",
  "key10": "4zDq2ACUx1PFB1yQ6qaj1HbAE16BU9Aeck74v25yMsQhGYVsDUBuwCzDkMv7csPRpwQ9TX1EwtXTR83Fq5UbMAVr",
  "key11": "5QP53tnDCK6CgzJmoXxTdJEcJCrz2Gaj1GA7KWJ4haiqk2v7W5ZAh52YbDLGsa6P1bAKaMxw2VfkcyQDFbBEPCwL",
  "key12": "5rYU6kY2LWthb5E2hzULHvpic1ZLufeLy31bVRFZJMbm3WeKffZXi5qxKSrWWRP7DaD98SrYs7JfUxYdbAHjJrNn",
  "key13": "2shqx7ZmeNgHBjCzExc2nGGruX9tqrBCtcWN8YjDdd8EuvU9nVbrrP7N9pgAVdcd442QUrZqSTwDK6NtyRDcz2oX",
  "key14": "9SbfExV8BM1jrkYhhZoanyyEL78qSRjYonrkGotGNuFy7PgeNeaggmCpLJwDEXUpdNoH1xf4r4BjTLUUSYCpeB4",
  "key15": "291Qj6qCuRWmdVf22WHjUb9wJsAp1guPPazo9Y1xyDbZaBpaeL75zS6vqGZ8pmrU1yv26rA6e3bttZYWj6XLjRec",
  "key16": "45Cn1psL1oy1Hr4apAo9Sxd6zugGG4d1Tm2ZzAocdgoUhUCjpDhLmHvPAHjFUCwzVMWRxJ4WoZjXpMigmSLkvc54",
  "key17": "b8YeKqJKviipPJD71i927vWpD8ip2prYi683Qgudu9x71rSZKdEmhGBv5YD26Pd9ZEkR6z3ycbK6wkygpEdRTBZ",
  "key18": "2KG3GHpAQLC98g22p45P2ehkWsrq1SG6g21jUJV1JQxe6nxtY2p9uY8zDF3WhVcZJkyiKPchnJ1g1auqhfpjLPjC",
  "key19": "3jcDypPHs65hPNAnPXcFg8VYNjKiCW4NyMUcw5GnXFP9sdFnJN8qiL8Y6VkUTEN2D7rxxNENVewHeVQsGNDhPTEd",
  "key20": "5sukneH1SfGij2EoGVxVsn4zHHgbDjhTbuYgZ9mpnXMCvbFubgKHiSJp2r1s5S4GPZMH1gE3dVXyrEek24PR3mzV",
  "key21": "3rrNScKcwf1Sfm88chaH2xdMwQebEH13syqDSv3a3B2KgftyZtLSFJ5GH13ixLPFoaZREQbU15XuhCKQFDapFvDt",
  "key22": "2aP7fohEEXjCLkQ2V5RxVTDShUkotFQSZGqGSEYUFx6aTt2cAUJZLfRcxToB2QeZMbZnuBsN2zSqmXGGUwd2EH3d",
  "key23": "5DxMjj36TmzP3RAMFVJxLNuXiLXXEY3WpeihvcFPGFBqoeSZV4fQjZycheBHtfH4a6H4BHqQT5Py9mPTaiwgg5V",
  "key24": "5GWidrJAuwn8WNJ6jiTSQ7HqCBjmrP9UtcoGMfMejnHWba9sTZGiPnNhKwqmHa9EZZFzW7wxhGAnCWDP5Dyb5r34",
  "key25": "4LRmnSDvDnbegBSV81s554xkM55nNrCU8Bbd7Tni6z3kp7SDn6ohCQiAfVAnfMC9Hxzy2J1LmYEGQJ1v7BKrsFF4",
  "key26": "56ei2JzLUjnDmoU2t3GV8geqMmX4CNB1HxVTYx7TWAj3uTwr9TxhkAyyMuKRtsnmCjx3zy2YggeMEDrusDpW72tr",
  "key27": "5DZHby2e6WrEn5Bk7vHCVTEEVMvaa5Y2QcCsrjVcWR8rZxM4M6hkQqcsNAqsftRJa5abAT7vV2vowKPnwvVrNX6u",
  "key28": "58pRojzWZHEpycMDXAQ13bq9kD9zTsYLkv4nk2kzveArtDBYeLNnYprJquU5UnG5VVUECqA5Q5uk4hrziBm96yLY",
  "key29": "5ycb4D72xM8shoaVyN3i1UpKSakMbWMm5n5h3f7NSmp8QtaP46jdirget8GwJgKm69cJyDqiK6iCiXbewHGG47aa",
  "key30": "5qwENvVJPVkjKDyqXrFcbG155sEQrQ6xN52Sws5nBALxna78a2WHuix7Sbh2HFhzF8FmktiBuz4acLsruwV4KEYG",
  "key31": "4dMfRtzwvHTeefZbjQ3dXD1RMPeg85g68V76CU4sohhe8UmBTCWaavjEW6Wz6apsCS7QAdnU2QEHejSKQ4cU5Dxg",
  "key32": "2coJdq6wfNxJrifB9J4Q4RKkFZTe1pGDzNLXuwnBbWXjDAhxK6XJsDLV6zLFwFH7YLo8Cv5qBL1V8HRFWxuqZ9NV",
  "key33": "3d2XRwtYRQn6srtDN8AS1fxkq6XhLKmMk7K5U8gNX56fpzvQGW9Lw1yJjfPXzFMQrYGgqiJxMCh7RKJEnAPv6G4Y",
  "key34": "3mGdQibcRCby3cgVrfRJJG6gHNcZrDVKMvVL5mBCDKWzxMsdLCoGDyGAv9qa5Kd6HUiQv6Wf6gKfJnnFRnDUGQzG",
  "key35": "3ZCXDMgm81WnRokf7TRPQkH3LZr4hUf96iYPHiXr1Bfzbh9fSN4pqdpWvKtJzY4aSLhr2eMGvefBVf2oH8GCMeqg",
  "key36": "2DhrmgratMCH978RXcHBHvVb4Se33MqTtPasKZbtNnJtRhXzcMvneoNECzC77SzSbismQ4iDJD4DVpvjmAr7u1WV",
  "key37": "4KXdWzap8NRH9gRi4gp5NX4Jm7cixzgVLQFwWj7pcCqZLUcMxDTWMrcS6n3mXPnJ7K1zkBCyVazqd4Ccsu4H5rM7",
  "key38": "526p1abUAQNhofFAVb29Ce69Mp7NjK82TBPcSbDwJ2trejcLpAFXed89naHAFj36hWbnfFMDttp6gWxbBBfkFDjX",
  "key39": "3ph3qRt1fSkPJ8nucKGD1JVV6A22nztR2uYUZJ8yFTQJ7aDhx3xqGvvLw8dc4YG8y8X3ScVc1B9G6xN7WGfRt2uf",
  "key40": "4ZTDLeyUS5LBJVP8Apv6oBe3jzRfvzcbNfPcEfnzsTazMkVAPDCZwiDBzgDCUaDsSmreW9NqscaNVgJ3QmErnsJv"
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
