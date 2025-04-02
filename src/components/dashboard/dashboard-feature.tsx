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
    "Ah1DzJqExb5aHW7j2dgB626Q9qtU2hBXVUPkJfAB6FJBtxsX4G1zoC7nrLXjorDvgAcTBppeMRELtErU6Bozgu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JbdowWTdsX5Kzkbn2eH88yqw27Dw9TAJimHKGRYPHFsTHQDuNMkeDb9frTt4Ju9ozwNzbZvQpN8D6F2bXsfZCUp",
  "key1": "5nrSXnD5A7iESpE2baqAC5rHi8X57HxSMYn8UBjCiMRAJPtePtkWr9GoJZozNzJM12ZpWjwLKc1SR9KT3ySTv4sd",
  "key2": "23asHT1CRhPGTD7w1rFpUYx5wUFJ3t1Q4pP8XXGziXp9gQBPBJJsrxzyuREDeQu9DsY4YyB8aQDPkWjMYRxmoTqP",
  "key3": "3xSJjHYKLYDurcVzDryKeQ8mxjwaKK8QEGARS2wZt1Cq3LU1uw2LEd4d9GwL5peuYdaG92UxoMkLGRHskFVdjtdy",
  "key4": "5XsJHXjg14483sZU6Q1kFMrVAinHjzvzapu87SSWn4y1ZfwivHZLzUKrN4oCQM94RfTTiy8wFR3KAGv5BvnpBhcC",
  "key5": "43cYEXu8Bxo3qDZBd7gkubGTu6nWtAJqYn6SAjZtDWbywFyc8Ao9TK75PyE7VvGf2ZnUbg1vHBt6gASyihzg14eN",
  "key6": "4LYdeGf5hgbHJN6zNTmKc9FBLh6Yy1uVs7LMiBRQSYK4ye5x7fhkZ3FydtnikFQuHDV4FVcBG5eE3kCjVNK5ZUew",
  "key7": "2r8oYeyZiRdPswxUwc7FAE5ZAAjmzRmpfvkLXBJLbtfAabr35gwLfYyrzPxjLFFihUSX6jkp1NpHhbtJTdrCm35A",
  "key8": "rsWcaXR8Mjo6fysDs8gwcvuAAumnShadHb75xshmYGxV5WD9i3jyAiwsYfwLjNTHzSn7S2ENnFbsrpX9RYekQ39",
  "key9": "AjYwqF1c7nGWh13WBo6NutTcbeBq8bWbCUGXVfkwncZa2wCtZ9L36FXzKEZMC2FfiJgmfDQB1BnELkiCVRwAnSi",
  "key10": "J2pbWxYdz729JaznjJjdN76HWtcWex2N9C2ZHx86JPeh2Qf18Yg3P5J1469NxvS4sjx3jfwZSpfMouurxb79sc5",
  "key11": "xM3k2Hoq6qkM5HAJp15mQuW4wTxFNphsnqBKQXJ9Vi1ackwjpQqdd1Uu89mzzKa33q9pLDtd3SUenpmMNuLs8pe",
  "key12": "56C88m1GoTPMkmnWpNkMgRHEFXqSFm3HkiuHBBkH3oxoDAzQVqH4i1uFfoALoEs73hhkq6FtGEcZSC7ytm5RqMmf",
  "key13": "3UFqCgTRsbEvPSNGvx7WpexTikmo9DyUH93kKHXR2ZbBinmfzxHZ71YhLswJdonuvEnBmVvkEkE54pYoXgetmDTe",
  "key14": "4LePuUDVMTpWYKtHMCUDveQ69KJLGpoWU6UdCRpfbbqcG4WQkTsRLos2yQUNdgzAcbgsGTiLGaTSrcXWG3xErixD",
  "key15": "4Rpcwv4bFZehZG4vGv5fd4NQ5HdeuRTyMiztJYZPDSxkcPNFDvb9LJz3DNyP3VRYudDoA6gBNpMyb6fQBWyKdJ4E",
  "key16": "VKe7wc1kowPYSyYrFCJZtjm6P6wrxUVL6LXBs1e4YxwnB9vdPt3zpAGpXRRhpk7nGEYaFzoGc8UXJ5TciYHwd9Y",
  "key17": "3QpdfkQ7yUEG97ogjp8FKdYGPd4RiiTxovZ67NmdZ5QXv6X3xFjL6npR9zZHGTWtXcTsCZZg8aihS6V1RuzeUobj",
  "key18": "5qcpKDuV7y9111QJkavW6LtuXUxxMaX4ZVR5YcPP5foZoU9vx5su1JAnQzhupx8h1fmHy2MbULKnHFYGdzQZ6EKR",
  "key19": "5p5knMN2YYViUuB76nsCsRtBmDmFaDt7nDk3rJvaS1VykyQsYs9KL17rYRuWKqG6qYc5WFjfvJXG1MC46p3Hx5WL",
  "key20": "jThwfSdGAnBdZGo5CD9Lt3NoGinhsdJbmQ6oRQR1J3CSadDNAphmSGsaneonv7SgGXh3N9V8aLjNYcJHvpLdqWX",
  "key21": "3KT5osbPCe2HF43CavAcpDotmmf4TpcK5AEBdChZB7MH2q5GbXcrqgdJVmsRj3NMzZs2Ez95FmkBi33PECjRg4Sn",
  "key22": "8VvvanaVHUmzDHrgag2LaWJKCWCv366x9nfj9h1F9sh82NjUVBedLtZ8coMemHzJ5z75PGPeEUDauPyf7GbEDox",
  "key23": "4TviGSbpwTNL6YSmKrSeKMEaPxRCrErvJnSBWnYJVLe8P6RyrP65tF135iiXbqzUJh4tAVUKvwYZJaWQaYG1PPDN",
  "key24": "2miBsuvDtk777LhD5fNMQiE4XYK7UuUZ78snZGiwRecmob5s86grcNpz1TXP7vuk6HwB7hiZNUDEXUTp2kK3bDzr",
  "key25": "EG1tRqivevpRbsgZcpmQbQcRPUbv8FNW1FL6RXnfJsMd4UCgtgvewUy4bXkNndpVbhZEsi8h8FCnfCZG1Mhi8iY",
  "key26": "hiZiXWNHDsLr4gMwJtej9AnYBGGqNPRMUip3bmvz7LpRWaH3J1sEmHyHP8RkBoAmXTAoiiEP219zTeUbHGMDmSW",
  "key27": "1fmFVHZcCJcPXdJNvvyZURr7jADu7MAeDwN61f5ErRMyoG3NsSBLVKc3i11rZb9m98VDK8wogETdU3U1M7swDj3",
  "key28": "39zfoCvfpK7kQ5PgHYfBPThXtDzu7RzeGzEup2EPgakjoXfyJgb2qJasn6RawhWVjwmMsDynK5suEBbd9eXsTVMi",
  "key29": "2RYM2qRt96tLKcieiAUT8pWSkd56iP4NuUY6u61g7PhEXhbqD5n5Jxk3wTTwbfKurdoNy1CK4SLiXb199YarsiAi",
  "key30": "3UKRd8erDNjkR2NEfoeHbdTHyx6Dh9AQweGmJJdoequAU12uGEYPrrwxxjjFpVcVKE2JZJ4zQFwV2mB36juPS739",
  "key31": "3Lvy7Lco4otgrKcLSqoEPMyt7h47nSW6fXiiW2Qgx8tuBmXFhgaVDFmACinGmBkoyezc2Jj4aWU6BmK3mQZ983Qa",
  "key32": "2cNNmNNTATvjqKdcYePBpNXmeAcUN92qQhrsmFPMQmaZQKSxtk2SpeYKBCTT6efVewwz9hypm1KzWgDnktCSXuUA",
  "key33": "5fZ48VsCvsvmaC26mU1GRxJa6XpawV6YAbwQ3gkcNKQaB36Ngj4FJyTPBGKStU2jNrDXXCwAmyuPBiCfSZoEBgzq",
  "key34": "WvHCGweyPvM7R5ptmxizL7MRFMsVUK1cDPh2aMgdTG7NvbrjnTZ6WbaCfaPBjgG2Nfn5pWFNZGFjXVEsV5SJyCw",
  "key35": "mRhhyQTsqVzafATVCthtHif2pLy3rQDSv5SLyQHUH6o7xqtzXU58SAgfGhCLT5mext8U1Z5A1ndbTPZ9axNzjYB",
  "key36": "MFMPYvPaS3i2jsnzG69bpRwQBHYrJxm9VWr825kh9N3yw8R1qU4GxgcVvmNspj3fUbFM7zoJydSKvtzrkE5UJz5",
  "key37": "ts912Fq9Hu8GonAwgNnQjkdyi7LCewvNjUESUJWAHP6ekfKhnSApGJn8U6FFHPEiD6SZQ4UQ932LGcrPDqjJzmJ",
  "key38": "2P7F1VTSkrpKPMUexcq14Cv8LL8q2Sz2uhnuHXRTuLNYGhjMH6cqGsg1AUUpphqdULKiKrYFk3sZm9C8koFE64jM",
  "key39": "5bchSq3BQwiWqJpZxZua1F19ssbsWeF1fDygvUViCnWQSpUoichEDCDYRAsycyr57jbZkMgLMdKuA2ox7LtjP6V7",
  "key40": "3fGmmaj1DqKbYDjkog2ibZp3AisBayovuERsr7PgFY9PtUb3tTn8AouFYU5b22chdnmjMCXShnW9Q4PtrySUmtZc"
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
