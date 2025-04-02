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
    "4it3znR9MqazDjwScVhMSDHbtdwvC3eBGFG4v4uv3bwHWnANFXHuDDex9J3EW8M6pXf4aXt63U2SH4iT7L1h9BHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383Da7x1JLrrQuDoqpNmeJfTYWQ2ySzN4BJoZJYZsxWNBNUMQsAHkFU2M5kA26VcVa3T5giKbFEqRu5QU5LGn8e",
  "key1": "2eEnvurDEMXk42tVd6jt2udi5UsuRreQasDSg2dBsncyo95SgbRNx1ZxJzv94eQXiD382DJMbpxgNv7x7deZGTrL",
  "key2": "5Ge5jjkjb4GTYjKUnvsonF4Ar4B1RfVpiYbZgkABUCCr3qtVF4ecnZJ7GuhRQ6fLL1i1xKBafirgKcMAvhV4k63T",
  "key3": "3AZsQynT16FGQzuRJ8kDDkKwme6WeiyWjRpbEd2vUzuei9Zv1hEW2Fv4gRWY2cDA7ikvBPHrCw7hw6HBqn2fc5d8",
  "key4": "47fRd44iyA5dWUVsbkcqvw4aUfFeKXjGvkbfbtSRhiuNs6n6WN7Ce7Yxnvh7cAdUV4Zhkz4p4nbxgcXmcV4Cdi4v",
  "key5": "55A5cYFQ7jXn7QpyGJCBB5kcyRhy7n3wtG9xqoRypoGYDXt35yopzG319XfC3Js6CcomUAkrNh3rs9xqCbPi43SL",
  "key6": "4ypQEaDgGJnLWUAxUzCtbC9YR5mx1s9j4Fp9m6b79mj71zbUSzNkBRCyAe5Yvemg99n4LtdwgA3UgXhEuqyhmDe4",
  "key7": "3asFUj3oxpkNJ7v7VzAkrh4TJUKZn8gmAobAbKK6HwdTo4JN6HB5vN9P6cHJCBLDTtBE93juF3VJC6n1TQba4Czr",
  "key8": "6kwuPMEVjEjA2BQLcogED69kujdMtHPHC356bypQZUEWZWsGTR3wWsNXrvBpHbvk9TZth21b6LsiHpZWaE6vhcY",
  "key9": "3ARQFAw9ALSCTw4UaP6pqeyPjDDvUphGvwctLCpFG6UAt7F1quWtQuqBE9gMKQtTpMDWLTJZJtddtW868YUwyzML",
  "key10": "oR6GsHhx7tnaoq5HNFnduktXcAB52SnmtAwUzRRjCkoqWeJ9SoErawiSmSmow3T2XieQeK43iAeC2G8QqR1NQ33",
  "key11": "26GbuiwjUe8xqxo5A4D1wNVDpFYMKnNvz7KjTaAnQqd7skY3h7dDuJH8uqMAkWerFQmx3KiLZZnmXXjqyU4jWUzG",
  "key12": "44rs868vc1cec4xZpNfL6npyuzK73G6pE4dWLj6RLSrdsqb2bD3SdaKFed2UyPv9HBVZdLskvmHLGRx3kQ4FdHCd",
  "key13": "2xyB6jc5SzxxgfoeHQVWLRLMCV37a3UnywsQag5jvrVi5FUAesQvkfyvD2hUaS94J3yoSgH5TomBgqJXeohtpUuA",
  "key14": "2zBsL5nVgLM86pwzTnMG5CmQmW9LwHXGvVoWsuKFyum7HHUvkUGnx1Qq7HYb71GPM14nhSuBaiHDQKdEJ7EC2iio",
  "key15": "3tmdDUx3J4MJdwKBPx8r3Y9716WHRkGPNgcbLBLdt3yhRxBgoVwy4jJKYHh5e9q9J5soEHPe3iEywEM4AmRfTUfc",
  "key16": "3vYGjFUPudmwVhYZpNVK8X55iQenw1iMsEyisj7EcJzoiJH5aC64HiRmnshJePXkxFCpavrgNb2E2QENZvcdPpAL",
  "key17": "3Xyp27WY3ei2FTXjxvm92KXfBPDUJncwDLktfdc1NbF8mTjDBqEUQF3a94oGh1zYh2H2XNK9ruWUfvh1pbEVMvbB",
  "key18": "2bePCuiohCT7fhKs5dMzr811eVWTik6efMtAvhSeEBRgesZTWHmBbnUHZxQZeioHKQGtcavvzUmAVqX6AFUXYj1P",
  "key19": "4z2ZcJRAkjFmHg2QoDJ6p6FpmSXRc4a8G9SyuniYzA3mNwQpkdLh4yuL2edX1s16WW4BeM2RCN4YuNwqioRnvhDv",
  "key20": "65r4MpGJdjDa9jYLy6BXtgLTAy27y1CrXj2FmTvmZXj6CR7YocDHD7WeaqkP5u7oEKfMEN8LiVNiPDYCkMH5qKu1",
  "key21": "5Sh8TRQvyFoZhiTQUsA9NP5dh3EVsBK1ZoDQ24fhSGuTeh86LMdGJcT58xR1B5noLWBfDtAxNgreCt8gL1dbkvvz",
  "key22": "5FSRgNCsdd4iQC1nWnVSHb6K5SW1t1weCUTNiT5kpJ4XRHFmak7decGgXuDougraUDqRFFZM88feGrqSM8DSnYdM",
  "key23": "2gdkWDU99BhkQeuNYLPVThTqtuW4SCSYcmNxPYAAaks5Cr1zmb8LUEcD6yLyACChkM2T3ZVoDnSN9NZQc6aAa87U",
  "key24": "4WTmsui7aUwuDkJXgPTkPjphaFtmnEcvogNWs97HzBw6hK2KwB2LHnPz1LG3FRti26fLXQQLeeAEao1s4zzai1WL",
  "key25": "BciPXsmiGmtAPxgTqK6rHPtCRSGJ8ANbuJ1cTEKU13VMFLBdPt12f4aMSEbiarCDvDC2q84UfJv4vyM2yptS5Dk",
  "key26": "4KDBgSJKF4dVPyXBC4LX8gTjFGAmdX9s1XFCMW4sHLjHBRa1rKdw1TYFFjLJS86BTUowExVFt4oFPJBKJbtBtKhD",
  "key27": "4PJgABFoKXudVbFeu2JnePEmKSEUuFwZkShQrrqDJm9VC35a1n6tJaDTsTpWeZovvvKoRarDWWH5D5Fe1SSzpmsD",
  "key28": "4CWgJoekedrC9BZTDE2DUCWS7mYTjUdXvKGoQ4eSVsmnMCkm9FYe9Q5QA1ACFw3PMzFfhRgGBKGpDJDkMZWPc4nw",
  "key29": "4kMmCWQLeS7Pp139KmBPyuHXWqr6xPE6WR2CvaRUKYML7x4MvRMpCFoXtAzy8Utm45xNoqpE1V5ELHmA1pi73v8U",
  "key30": "4k3vBV5M4bEhm9rkTHTxhfU4S4ZakX7oNWdXm3GD7qXGT8K65enB6r4gPMHcAmcr4YFV8fRWPzgr835s4uBr1spE",
  "key31": "46qmzvxzPJJ2pb2gTrgCm1VRZqAdXHiWNBWu3xxSMbekxsDG1kH7EQvH3U67Nu5Gyh9t3vXTppu18hdFc5Mr2gXW",
  "key32": "5wCsF4MZ3yYdiiCpjYaiMNWm3S4pWpHuoDBhb124Jpw2ySk3Z682HR8c9UPHhkRXugWoDaJy4KGRAsPqyg299veR",
  "key33": "2oKqboqi87ibCgthYsqedic3MWt3j8ekbNyDC7dtoPLTL8zTaKT8tgnzAtEaNmF7ujD84fbsHWU529QVHTCoDCUM",
  "key34": "3HhSiu8FCa16hLfzEo9K3rxWTiMxKgfXrq3wwkcxbudEsaDn3Uz46XpuqK8yMtsbHp1y4SqbSxGHEmtYXQShXzF9",
  "key35": "3y48TpTuCz7LjcmhTQ3WAKVkhDCwm3SWW8SF53wrgZx6HehgWbrhpegnuiVeVHgtg6EWXRkC4FjwbjAbYTCtgmyz",
  "key36": "5CfB3Dv4FtyKsAyYGjQ1jdmo3jXifhgVd1U96ui6wSEtHWQUMqB67hcDHxYpwG67knZTzkQKvbUdWaEt7oa564BE",
  "key37": "5us9hTrMiYLYDd8v8vUyazHqsr5SLBkR4d1AGyxvMeQTs1PSW3AHRAEC59ZfqBFkuUn31KWCsLUfPdBysNsYbFx3",
  "key38": "5bmaySZDufyS99SrXkEe3mUQJHYmtXLyZY3Mmdf6DGqvMBcZ3KHMXo7MhgYKRZoxCKjueV1FMvrznrmjxPyiF7CY",
  "key39": "BvoEiFzuKkBNeWNqNa1Gcnn9Ak8Nyed18HpGcC2XHKUe16DA8AaSoduwWsqkYihNDm7xMZDsth53Xkrw4o9VeQj",
  "key40": "2HFSvDeNrZSbSdD7c18cVaySWGBXiUopW9QzAWu8VDQa4bFMVkeVhpG8Yf5tAoCeLGyjqaCHD36T1VQwzXYmihHm",
  "key41": "4sVdn2HBFESxcF5DW4WvSAf5U4wSu1JPYigk4uh4voX53Fnjdzgh7jQCSB9iG8ybHhbo1m68xmsKWWuvzq17jvH",
  "key42": "4QqjqegVGBT29wTyA1655h5BM2v1iW52wUJdRf6WS4HKwvTiEugXkSup3L67iffoj1XgLqoCsHnyDFGrR2KXEc3Q"
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
