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
    "3jnMZZrZsgnpkoaqgxUin9riJpXVnNBDeQMwQssQ26LQd9hoyiDoxcSSarTWP9F5UbFWyjZXyMW6jYm5qeoz6hjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57J8ntrk2abYyeTJWbNTi9E1oGbFNHcnFBfo6DBLuG4ryojiEC74N4VHjoWyW7J2175AKMwxRnQeMbiX73ohGpxy",
  "key1": "55jeM9FeGgCe5gLtWFo5RsZpyWhRRgby6Lufb6CqHELzB9gTeZqrWeZsbs2eP74SoQRbn2UGPmJd6YgK6YzFiYmH",
  "key2": "5YzLizFpKwNhdsDwVgN9J8XNyDPLN4Uz8NuQvR6E1cpehNEW5bRgLp1M6Tpxo1uWSxa4n4DvCMb2om4xXzCm5uns",
  "key3": "2ToFotQEfDze7yavyDBmzN1irMfg1H7s6hTBHYycBLAC9fGoxdgdUidj3sowaS5bqGb3XcijvUHXSEvkBcejPh9V",
  "key4": "2wF1wuAu6GsWnNGE2d3NBkqvxwWAyQeQnyB5StRgqWkSd1a9Wso34HKwr76Q2jUa6nRoekyAS8eGBA3tDH64WHuN",
  "key5": "4noLNfU7RhSSdMvB1ydPctuMJjGndpcLuxidVsuFXdpYZfp7PCU413iVb8C1iBYsJn1xkhHmKoXYbQzenGqyAKRv",
  "key6": "5Uo4sWqVb7wf7SvcPCcEhVzvCgJGLFqm5fkVWkCdVZzGEpmJPm9wKaRdZcTu1tcYGwuj76YV3rSCQTHr1WV7DhwJ",
  "key7": "5oFm5YxSUEM15NgFr1k6KRBSCV7T18D1PbyyHgDfPNoB4MpN46izFiqNRY2nsjj2EHoF8WAbnQwSvtmJvhVfNJLZ",
  "key8": "5XkXyAUUxgjjWaLDsHEdpJxi2fP9eeu3xcUH9HQUaQjmjbLvuMR52utXAJcB8NjFbH3kapGArY7HoTHVaHMMuuHe",
  "key9": "57DvAQCXzqDgTt7Cg7prpbRgfQhYETUxU4GAaTUwKVD9nfx55aAxuG4x4L5m8P1qFuPmiSJDiRpUi8GGikFqTSHR",
  "key10": "pqtebiRnY6xo9azPJhpGZLhmTayoVpSUYAADLui85BGLA7XgLiHCTwWWJkGUKmEKPFa3S3seKjm7WaSvo77RMbo",
  "key11": "58LX8VSi5YZxHDA2Bna2E655GEQxW5YBDSDGPUXcWu4m2XmbRMkCFzu1WSuk7rdgnqwXbGo1DjveM71MeDuK8b8F",
  "key12": "5FLWYGLxxEDMznFzaWaNKWSVphDnXKRs88DjR3N8BCkDAipUH7t3EwFekwuYP156FexNv5jsxcTisD1LJEVkrGGy",
  "key13": "43t9phJpH4nRGPomzRUhWRi6T55t2f6x3CdHNPUr6zo9QqiKBEQcEQDAyGtxD5bfMHs2khhbY8o8xPz2s1zqxBgg",
  "key14": "5LDfgR43zfSEwbQAFMWVW4k7muuykdvKRYzKtA8d228wPesp4qkdEPnZkRrS1L6zpzLFwQ11hvAiLiGfteuzxbde",
  "key15": "3zfY36DuKpMy4ZSQP8PaR4s59GC7DZo8oMgwj5JTjdRdzGdZuQ81XdNkrxksEAmF2yaaMHgdua8skKT6Nibo35WT",
  "key16": "4nDD3WgieMToNLxnD2dv9koAyQTvnKjReU1WQ8qfnvQztqwD38cx42pvr3txMVdj7S6BfXhXgHE6MC6ie6EH1xQD",
  "key17": "49Ma1KQkxdvWQq5a7EafpQeTQ8F9pYmf7kQSrLRAvqrgkPGR3MtB6wKjBe1JJadRPhqyM7Gt4TR4rAswHePp1sLo",
  "key18": "2Qj96VHx8coegiMNUQ2hpMTyQWgEgKXzGb1SnmzS7TZqSKfrVxyJzzhGFy18Y8oh37oWZ1jMzDTEcnnEYUAsMuCD",
  "key19": "5sEE4wiFZAFFVUER2dtHd7gYyZircexy4jfZpdiB8aUXPCSecanxjLFiPbCDKKBMQYQk3B3Kf9xy5MXvDb9iquvp",
  "key20": "4qaWYqWj6ZxqcN5jKvNdkJkudNRgPf69mDi7hansMm9w4Xyc2Xa5ZdorGUxSQAb8eFe4ws5yCDjoDQKy7WmEmuMB",
  "key21": "47qqRXt8UGQPTWZ3EpDPJH29acwXQGKzEsBuUWw4RNqX1qcJrqLEbokVZ1F2oQ5YZBhMTXiubAWCFUxTueZD4EF2",
  "key22": "YtoJ92hLhZhj9zorPfwdMXvpNqxWefTd6RiL6vALys9CCSyAAHbxkTmnj5rPhAs5VxbCJJogGAhs14aSQARRboz",
  "key23": "4BJUDTkqtUe4uRT1S4dpxbuuFcMiXeA5QitAmi2fYhFeb5i8ux2DX9Pu7HkKNZ91SBPNyGz8sqdeb7APNYzajyKK",
  "key24": "4pRaysa2HJmVwyzmoWmFux2SurN7ee7ccWwefRhiP74NfMHrs6EiUm1vGGSTRvuNid2GgbbAKSms4r1RTSrZXzvn",
  "key25": "3PWehFRqfJEUz4C2PBSdAR9oYAhB37SUwLEPVF1SuPUJfiwxX553eNPkEgEUGoswrHBvB9yeDvVVkpGba8tyEnuF",
  "key26": "5d1L8mThsugfzgR6fqUMPuQM24TK8FRzCP9yLoA4empVerAgmadrYufhfCLuMX5GaWntjQGUZB4JDK7KKrRJAJ2B",
  "key27": "48DiTTrUWGQhuukfMJGdt2q86X5Y94GchacBM5T1LnyQViWhTHZLkKpBeQ3GUAMtBoMyUYhf4Jqj7v7o8AAs6Y7w",
  "key28": "26UHguYGBUtA6MqnuN5mT6HdCtkJwx1snMAPYfwTbXGzzRQzfz1h4Fopbnwszk7fW14cJyBU6C9WfFCDCu2to42Q",
  "key29": "3C5pJpA8aciT8UF7rd2xqk7wBMwbsZ22Rn56X3Uei2oUpcV3FaJa7gmQk6SqnW5cK9qaqnFmv7hiXjVCi9FZ37AZ",
  "key30": "5f1GFW9KDdP5kHVK7NLpNkkTANKCagpnNHtyRJRzW27m6X2PYwqGL8XzFP7azTsod5ASi89EYTVqm5f48jLJaMKr",
  "key31": "4cDGUXkJdZqZXGj6zhR8Hdp4YWopaX461PV3YFdDJmrhTfr9omrW2fvnP5nFmNkUZ1PDFm2bGYC2FkyVfU1mwCH3",
  "key32": "3yWXwo1drvoo8rcbekKcJQxL4sZxJNViQ17sis8zEeNjKL3ysEPAUXCXg1etyphGPkgmPwbYKE2xjjacjQGn1En3",
  "key33": "4SEGhc1yqq6w3vRLTztR6gA9eVVvmLF1xzN3pkwQvYYmdWMMuQsxZs6eyXNwmT5ULiBoxsF7DWqT4R1X7MGkpoaD",
  "key34": "3c6gdNkWC4SuLf6EKbGUNm5ZFe915Dxeu3K2i3o4dZ36xAkprPwvmG53PpmvqUH6FyBUkxdeyTeQpzrTDQXtvJia",
  "key35": "2Wy9uYHYgsHWHew4aSVhNNrHZ781eV2to22m8FaewtsjBwH4ETizd7yaggGNeqdK1PxUynAoZeYjEegDG8pZLogq",
  "key36": "3FPp5g88xkoNP4m25DS56JTvC2s23cRKUNfnh7SbC92BxJNSjCBhzuaheoSZhPRCsx33nkUU4P3dZVLTJRD4iHRG",
  "key37": "6LrrEm6F8rSmZkV7g7KVg4hPqoLukedEBvtzpXeygBZnYWJVtujhZ69BriycRackaeMYqakiK4fHDrx6Fz3M4uT",
  "key38": "Bq7CamJBwdXDSqXwsPXfJdNux5CuMifzKFPPk3xZMB4nbtAz8by2TaUgeCS3jsY9enQTpaZQYnkVtRukNLiDKVK",
  "key39": "5hSRUb7mqNNEy5mVXkuSG6u8YsjbmxtnvEqcTyfBSa4nYn9qWF1XWBptZ5yNWYMqprrGvFh2kbHohc5iGZq8JnDM",
  "key40": "3RaeHNaW3Vs5RHvvR8cPkjav6pgKsu8JHNnmUQ5b9BZa5WHct2yKhGdDCrpHgnTSXGqP5ayitJYVZp3HmTR6WHgX",
  "key41": "4EeiL2yzFNZb3cSpxacBs7vQQbcj6k39cy9ShtKUYirMCwvMWEbS7B6956RejYcWmGzC3cStUbd96jGN7hF4r2jn",
  "key42": "2qf1SzHKjrK715puppscGuhWMPfVoXpoiLuLPsL8D1fMZWzhTsBacqd5DdBx1GanKjBoorfFKyaPbavYUFnX6LYz",
  "key43": "zLaCWZHWDHd1ECmYeZcsuEjZn4hPaXof3EbRTgS5grAR5qgWsLvPE3vHgYh9GS8TfWY8xWFMzjjmHXvyQ9yzJD8",
  "key44": "2WHA6hTPrc73o66269ANywA2KSFkK7U1mVM3yqjwxNcAgQXX64nARo7DpCVkfBa5KRw1mConqmNH18XETYnqVaY7"
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
