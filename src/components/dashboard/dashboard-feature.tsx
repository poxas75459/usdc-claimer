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
    "5om5xuAEmCS62eJ8kik2MhULWEsEMxtksaCqVvHsaMQeRksjdGGia5P2Q1N7zYjgVCmpWxhTan4Bh2ctWLwGCwnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262NKDazyQ3LzSPFMobRQBLJ4BFqJ8DKnW91xHTRRfLR4z8KJJkFMNHBdzcPSGZXxMjd7Qfg8ujjp2H9C8ng2qc8",
  "key1": "41ZMeSk8x952cqBp12cd5K1ibE37r4JGkAbVfJYuwkGbG8kvHnxop2A2APHWLuDB4y674EAKiRaDS1bGQd8JvEjs",
  "key2": "5hg3u2YgVva58V776ZWhCrgpt5TJcnZ66Vi9BSa2fvzz4ibN1MPpMTXdT2TdWR45boXTFYMB8VfzucMjF9H9Sj1a",
  "key3": "qb5Cb4RCBrsahpz4gCuhp3hr17MZ71L5hAZudjaesWngb65TPSwT5ax849uubxdgzagZMGWGV5kUKFDNvwvZEbW",
  "key4": "41JsLqQnyho8nzsfiXwae2WQJKHagR7DPZdQG7rMB1e6avzwRNDgz7QgsSz9F8DkN5dFyiZsj8acJusWVPAL2ne1",
  "key5": "2QCWmx3p3LyUy3wZtDz9DWzR1gq2rKwA5uJrb8Fj8sSth4iYAF23DGmX71xvkADXB9Mk4P5HzHGffGHYZxk5wM2J",
  "key6": "2ZzPkriqJZWA3mEfMNeq6BdvNh8F2ACTVP1AaUDQz9PsHipJ2QBEznwCaT65MMwnije5afy8fhNqpLH4zvVJQvEj",
  "key7": "2rbG2dgGq2tixy4sZ9Nj5tbTSdw796V9Kja6VcVa9rQk6ucrYFCjuH6GqCQAeCiCw1vGnmJsMR8UjDY1qYXCfsgw",
  "key8": "3qDuzD4buPMW42yeME53yN29nRRXs6LKQeKRBXdM7BRojN12DYHFYtc1bbU5hnmBhpRU9JoYWmeL8WLBgaA7owXh",
  "key9": "JdG99cmDf2Q2RnXa5nYbHDDAvYeuayBZvyroyABCJb3DBj3boTbjSBm9kECkEU9HViZ8Nn77xjwGWCBVeSc3vr5",
  "key10": "amRDvrMJzLovndaG3FCQVAwrBhTQLDw15DxJnwB9zPEGyB3jj7PDfTQs5LtrpKVRCRJrrD29Xy5EZUK8WnxuLFA",
  "key11": "56Td93tnmxFha1ERgGANwhjqq14ScxoBzXyd1ksQY5qEVBhw2CrDH6cprm2SKQ2kVSQAs1jHQD9DGQkHocPuM85Y",
  "key12": "DoE4oAKuRn8oGxZ1dfWiaBJYyxa4DEAEpxxjU4r68SHdky9YyFGdD89zQBHmucSyDDyD9Vgszk9jvZmcfaKRXNH",
  "key13": "43fAD41rYyAECsWJdziMCbPikqxBcWwL7CwruKroPDsTVnECDAqjx3giT9nFAxGmJLyBiZPHv3UJBTEW9sMFmPwQ",
  "key14": "8VXKzi8voyPBDMdcCzWy6Fehd3ZeEp64uquxcWcqjwxTUQxLCnbJBDBpS9TYvFUxPqKhLHn3TDZysnaH1s2oan7",
  "key15": "MqBPtMMGzq2tMURFaviguQVnqjQdL1yus4EsQ19na8iYm6iDCKURjwEeVKqj28ox7jg9g9uUha6cjaBTz6Ed2ww",
  "key16": "5ifZox2kBqZVfmQBfL8xhNAF77rPyHmXW6Yqo26VMKv8MbCUjSCmYat46fbJ8aKb9sKDzwJg7oWC9YEU1iuUEcZx",
  "key17": "5gbNCwiyTc2kajCTdNCng7B5F8SxLdbdWEZ2GegfjbQH3gqRrx83BKwkLVMqLSuu7EPYzA9U12suEekBhAoLvNW",
  "key18": "V8QiTE5DWKQwbYfBEPGZozG2oriBzLdon5YHyBwaYWnAW5FrDVg8qW7ndiV7opg6ntYVwnvwptkLXrS5w9SZaSS",
  "key19": "3Vo9GXQDBkbnE5moK89ukKgSP7HKpVL1F5wxmCJ7nynmDizLbJ7VRkkGj3m74fwpPukxBEzeS6cjfX7YWmmFJTJb",
  "key20": "3tazXoSydacHXnyYdLyKpT2jf4syUKkdA7n4ucuGP4EvNR8cESgVNJ8YBR3Ma8xYgoysbpGoi3c7uJTmbg67tH8g",
  "key21": "4oavXoZgrJvZpoVUL9JauP5XGCzez72h6BEyhYYC3jWbhqBroNeDFBxXFGZkPq8HTHmRvMH1ErKHnXxpX7yL2JKe",
  "key22": "2bcxSp3N3XXNepaWDCWhasjFa26pPVpok3HThCyey6s5nGZzU9axi8ua12nnXcQW9dCRWP2itkzAurpuyen3qyZD",
  "key23": "3D4ro4mqqpxFvCf1MeMH3rmUEAjpLzd3ZgdCsvhKw5N992krS8q1TMEBF5eF4RkRTUEaaW55KbppXttbRwhGdUeC",
  "key24": "3qDAmfXfQvLDpgSNe1j5LhToPZuV4pWPuu28QvHd7wBEKSeMd2GTpj33RdvfezeZ8YnkAydLzCDjbXDKQMSzAs5V",
  "key25": "21eq7rhi8X9QC26m6AFLigeJprjSTvEnVh6tvDq7vqoH5LPKA9ZuJdRCgZhM5SiZztpXHwgsu4Ym4NtTyftFRTGu",
  "key26": "5ZFzw9E3zdp2SwjBL866ukQ5TsUFQC711bCHeJvhhxKJtcRuahg9zEmd5LoohCevYHiFUCTrgacQVQM4w4sFkoRZ",
  "key27": "2yw3YuEccu2wzqJB4uFYZ5hAdoXu4Z2DkD7Do8JihojuhGNPYPp48WSWNLFpLNzTM4YxBfws7j7kqGcSh96i5SU3",
  "key28": "4eJpuPN84e7n14SJJsg9NzjEMqjfE5juLQAiBRBukBLbswYFDz2eryFRRXHVdjCeWtwoMXsxunAg7HRrxJaVgYhV",
  "key29": "4HtQduqRbJQhMBEcND465wmMzjbWxaMecTsZVa8B52rLwzPbdzhLKsgNUvjLpyvN5KRcAunpbuA7Ej9Pn14wafzW",
  "key30": "2E3pt3etVtyN7WjSJeUTK68AUSMHjPUvjFv6py299jwjThKzex98XAxSZzGzdE1vUomj3tGa8oTNpDCwgBu4WP5D",
  "key31": "441N1oTzRVDjgUbxHL3Ny6TDPx17kUBUKnRgA7mE8Jhy74epCHvBxGxjZEHXcpe9Q2dLJqYCSZYVpuB73rN4Ffdk",
  "key32": "bRihfYHZWcq4L6fs7ovCsPDv7BLubcicJkfaqhrRJojRtJoiBwEQKYdkUeXq4MU2UxpRP9BsCxKZX3Tif3Gepjv"
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
