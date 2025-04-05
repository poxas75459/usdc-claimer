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
    "55T2WfRveZDHe3vxYp4rQTMSwMZZJfSk4isMgPsJkuQs7mSm1hpZe8afDcbzNUcGqY4cC47H6vbMN3oTreksvmGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FELjwSo74gbNQw1r6mYJn1aMUq1Mno27sv6bpAbDW3TVkCCFPfeZ7zqikCbh3mCdZQRv57VuqsBrmb7fxXm8Sym",
  "key1": "2H5ff66wFRrZNVF9vcKTZ5gwAiPUFh1E1t6H1WakRXD9DWyHoM2Gb88b53CGmoQTWMVv25dJwQPFJkNbLzb4q1uJ",
  "key2": "2EaLjswreJpy4qX8DJg8vCCU7VGgy9ZrtSbYhTZM11TyS6nAnJDfGhP1kVQMS1mmMNeDb1ZEQidnJYSCPk1fzjjn",
  "key3": "8ZFZs31KFH2eaCfxSnuArbqQyG7kQNQ7WYYadVnLNZpRE36YpS6HHXxEuLuFzU7xKhVY94t92K8FrjfNnmtYCZS",
  "key4": "22CSxs4ENsEvtJfjp5QWDZ1wsjszhHc946zarpf1GGcTdP8QT15UKChwpew152NyyZrsWnxBfZ2R22RU8bPnKfL2",
  "key5": "2rMbEVhx32vqib5HcanSD19RauEpSFiArRuQiy7T7Jp2MHdYjSX4xT4uS5yUdxHtbjSCAwu2rzvWan3HqM5NRLak",
  "key6": "a17HwMEsEFZvt2dyFBzTeH8CFvp4fKDzYvfj8Y5e7zGbbgE34LZM7KfZ2fVTV4zi36KAm71VusUT1xJLbDo3ykB",
  "key7": "259SaUUdpgzq9XsaviAVFzqaGVaFnWc6KsZ1JTbL3DdtVYYUGHzubPF8A4of5RSh5JpJ4xwkVydgDaj6C4m9e3vo",
  "key8": "54Cs9yPesuTncjf1QNgrK6NXFRuoGKt3oSKHorECz1ebZY1EpePA6WrZ6ZFubRGKD1UsCkgrn7R8cTRP3XHSkU4z",
  "key9": "2qAL9GMW4M9iVG17HYALeUHMuDMZH3cY16PGVhRo7yt2Ufpuk2aPSVu1jMyK84iSm3sFTaDi2neqK1NUDaNdSjbH",
  "key10": "57aax2BJrQjHn2giWdsbXhGyNtFz5LyhWxi7MDzu8KYrZiQTJ8iuLNb7U5MCpg7gw26Dnm15RCVmv4FjzMquur49",
  "key11": "2AcM58C2jTJZC4bQtaQ2SebqmEY54DVkJKHfjmmfYxvox1U5CemG8nRNuWReyBh84C3VQSiMzyqQ9gT4XS47qnG2",
  "key12": "4jNcnBgnCauTf6hGdkZXc3NVL7toUn79QHom7qE7GnT4dgNNGtXptGV8fU6dKmoduBzxdpC1pHmvtAxZw22c3aoU",
  "key13": "CTNrhXAFGuwwVircMsmkCUzznvsEbH4TQwvSyHWtHmWkvJjbaBnLRGn9gMT8yN68r6rFftR5y1xxDytDMURTPJf",
  "key14": "4Wa9WZ3d42o1xrcNxhArp37NWcRf6fw8gGtjjvGEgkYmzzLoMuSTkw4jBJ3v5AoSs1NYkZ7UpGWjjfgh5H1zNCpC",
  "key15": "4WxEVT5KEAyy5AFaKQwQZ7Z4N3dPbU9ySZ2cRs1p4UaQzan2zvGJpo5cHxY46KEAqpdKPQbBT8enh2fqdRV7trQZ",
  "key16": "61kQ6BQSN9ivJV6fXAq1qyVFD11JfZeFTgb2iL65VcgSd7y5doqk9ziy9362MGq337JEo4AdMQTUzDpQ7d4XXedr",
  "key17": "4BMbBsCNJNp7MeRh8AsVp8ahF4ARNU4mMiQNebh4FyTnEHTK386C5eNHvynJTJCDU8C41KnuEf6VMyxZVPVSjzdY",
  "key18": "2CoG8iC3SR7cqLQrYkfr31psy9U8T5puZDDz4KLV4fru3hJ9ieKwZosL7dR8Ybx7LhPKHEpCCfDRqBuQb1gorfab",
  "key19": "3qdHJY6HpUSZcs1v5rr28iE8zPpFiKSpj42ftebCwyWaphy4QHTYK5wrhfnsXWLfC4u19HguJT7u3HQcEavV826w",
  "key20": "gj9pXw8q9Q1XRACMWonQHa3wizXyMb39y1d2dA1c947U3w9nJ83wkiUMi84WZM28ioKCpmNQqeHxCbd2uEZMAsG",
  "key21": "5gCjGRcpwdTqantdbAKX791LEDdNWLgapfz98THyNxN9Lc8YhrcgkyQiVdRXyiSVa8WMpcPJJW8HYsph4HEKLnkJ",
  "key22": "3jiEGX6XLGBYnQ61Q2amhqsorncyjEbQVo9mysHUYcHZ1HBBnakZ4dU7VAdaU3KYfJ7xd4qxttuE9DwEyfQWR4bm",
  "key23": "2mDja1xVLzdeJ4GTfXGp3rCA93cUi37diwBJsjs1ujXY4tBE3r7n3z9XpUAAJmcrHa3ZfF21DGb6PvwZy8wN4ejU",
  "key24": "4RcK7RLBupjp4NG7NabqVmXGm3PY8jpmtzasomzuqdJgDrjGVkHPqC7mUtEP3aN7mNE4G7BMFQkncWhdxiE8qDtq",
  "key25": "5R6vpTBPXS5t4NvVH8uwhNhJaxdiopQqd9MQ51FkoP9HSaKHAvAGpHWAHam4Los2L3TvKzA2UgNVR3CraHsFs5T4",
  "key26": "4Suw1upWQfcQ7bcxupDmJb8ncHsj1VnihAYSh7SUEAJ43mBRRZUHETDtRdCmJ1Ui25Q1UhzinGU5FP6kza5w91jH",
  "key27": "3qzfxHvhCqvxho9f1TKQiRrSk6commkTfbWveSFysYNuQS1ECBS1JgpiGMFNM1shv6ZkSVkQyi6MkS1FhPu4s8KV",
  "key28": "3MsD1Ju6ioZ5GDHtpkUYa8YGGTVZ9D29HpdUcihCHwMNW5V7Jr2KKszBxRLu6Lv84vkLAhPtef1DiGnc5mWiKqxA",
  "key29": "4shukTpb6WDFePKNpvC31HVDmMRcA19Y71zUrBhjGETgXAJFGe2NXM9FWyWJn767N1n3UMMdQDi6Nskdw44nqUSi",
  "key30": "4CUe5ZgDb83YLq6riftEK5W5QC9Krq9CwYvMAtMau1VMuBsTHJXeULaVK4TPmuhQzJ4rNGmjgBXdFdSTtii4gZY5",
  "key31": "41p61Br5P1548t5FcHkBPGk8bBz3j3aqdM1FvJgLjgsQmAuLid3quaFsJTD5aKh7hXGuZnCyGyDEqgWvvNTGb9wH",
  "key32": "63CyEgyEia1zJJrQmx5TjFikawFspyu3dm5JRqvBEqVanaHbM4CR2NuCaAyhTMniG3PPLovgTqRaUuX5VepjZuq4",
  "key33": "25xjBaeFo8KPPLuFXhRQtGh5GASaSUaGzAP6Faua2ZDuKyxj7i527uiS2EbrniBzsmRKvBtDDvokQsXM2XtxmMCa",
  "key34": "4j9YkQ7NnQQ7RKv6L5menmCD1zBr5Ff2WeX2hGDnZLfyvjDgfXQxegR4bYHqYjcHiPXoZAUnDEwUQDD28KEUhNNb",
  "key35": "5RwWG6ttUHSdVQm5HoaYGNGiyDHXbtQN9uwCRycvCdPi6sRZG9yphVqLPE4aX5Q9fpzviLvsFTYoJC6PEZBGVgGN",
  "key36": "5gJWRizRBRjK6VRp8PKgsMWsVMVesWhNzaKPHdbepEwaAcueMq69PDFBzqkSGZvapBRLGses5w7Brw8dPsLSfueX",
  "key37": "3kTA9jnueGVNKiRNRAL2qgWgvAqToJHz9fhHiw7VNgbYcRyp72XB3NntTprBafmub5FJiECveckqNCCNpxaHSTwH",
  "key38": "4rTmHA8SWfB99R3guYtjFqXnHa4XSZmm73n4d1NmphbQX4pDuCYbriMaDAYZfqgskAPvEPLt1qvxE8ubW8K517rJ",
  "key39": "4dbDMyw27UrD8zEWTzB9NkSgL67Zh9sinerSoj4qFgjpdK1TebyzAZWMMMGQeM7aMyeEt5wQZKeMqLnLE1obSoKi"
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
