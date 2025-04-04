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
    "3JGpk1SKgyGpdxNMZ1Bi6rNefp5aZNZB3cjBVb618RuBFgxgsJX5kyAHvrphrRKFp2q4G8JTMj7pfSF4QcjUf96M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cBojwiUSj4acB4ygHGJaJ1o5Ctq9gmYCYDKVVHqxg9VDUGh5AwuJiCakcfpVfELRHzSgAvbjyeTUZ2nvnAimXz",
  "key1": "4B5PeSPQyEboaW7cRykdURxJsz1fUxenAYXwmAgVeDnhx2aeKuQyq2pxatPtKn386qe2k4gnm7NbVFCB1BqWPXoD",
  "key2": "5PfzApZKAtY7Rw2YPo82izdWezNKQd1RTWdw23AmfTLTTe8Ef2Hp3Z8M6mgQtXvW4QAdoFZWYaBNRNoGF8pdhbFD",
  "key3": "2vUBE3fQ65Tx8raYofekYqb5TYsLVBFYN7RVAwZ68LFR4tvQMM9N78HniuRnAkSKj1YvB3m7GUM6nEZzf1dczU6Z",
  "key4": "3uAhVzp6G38Jsvqci3W8zdaq9ju2t88zQ2pbDNxuyGyjx4W3MASRGVN4YFWN6CGwHpxyCrwUanRdJgemsAjCxLZq",
  "key5": "pqWK2fC5bpS13TZhsuYtJwZj9P78hzcNeSbXrRb23KgqJTi2WqoF4H4oL5CNiRJ5YihHve3BZJinreXC6tKFX9d",
  "key6": "EdHFioxyyCfYZjzTS7xwvNsi1uAXqRLwjyKQCQmqoeYoCD11SspTD1fcFqsbGPv6c6j7DwLwgryC2ex71Wr4LJi",
  "key7": "mpnW4649zTSYbK7JZNTUkbwL6NQyd5xuHPrEzdKtiF6wqpz8dxyu16oGjYv8MF13K8koM9GCVx3dATMYTnHzgPu",
  "key8": "5iPvAoNhV2E6ccshk1F2miG8R1u61HuKbYXyBUQ34dzF9pofmeUoNYyKA4x95LarfykbQ5nE6zMQmehJ39y71cwu",
  "key9": "5sUh2PveKP8DkpdAATBaCExfCbtb6Dj1qvVvPex5k3UqtPJaCRoyu1SMh1813hpEAkz8LsWptpsooxP2yPQUpvKS",
  "key10": "5vdt7K3NNCoD2cfXouzRpn7PwdCSBUxsSy6wFMbTLneEJocFAFQPJDf5dr5c52zJvKKNPf5qmFsVA5CAETUduXYW",
  "key11": "R4zY8za4KJsVFxD9adgWyv1bemNbN2NJcqmY6WnBqm7AwrHRmSpa7buydzA8HrHuYiDfKeiUgrXkeHAVryw9eV2",
  "key12": "4ZWZGjk3E7LqebACo6QbaBCDhr8erm4o5De3q9f6pN4Qf8vVGPVwFehEBzhkZbFwcfVGCeopPYkTusAaSkSjaC3T",
  "key13": "57w1xptTzLe1VuW8XQ8nsKSPvDzKw9QRJvuBJtEgRRuevLfMvR1Vvtx732EvkBUvAyeDVwQtXCGCsUZj7MJS3DAo",
  "key14": "udX3M3Vx1dBeGkynvVsUUQ2UnZZxWeLBPUXhkC9ohPMjd5AYVRoZ5rjDqHAej6N8ob6FUuKig1srq5jGSXpyyKn",
  "key15": "4DnwM1PY3AW2X5GeSFFhZMcz7U2JPg9DBtdxj8piM6ht76hyMSzdQcQbvpTaEBLj4mWDYoFHGjKHigKrSwSSeups",
  "key16": "3uyBcmejMefMU6kYUfG1gNKCkyPUW6qZCD7ZBh6Ji1zSYpkz7WmvVAsQkxN8xMDvLsafRKpjbEMDLtJniMG3HAqZ",
  "key17": "3VEZxmAiJPYCTf4Cnw6LrLmfzHXaVr3JLu3tk6tGvskMpRARnQaFySptdoiDnyr6r9rZW4WjykgDFJZa2kGmtSEK",
  "key18": "4XFUAAKVqWx4Hyn1UZ9Mypi8HdZvmqC1UPSNXsJ6uji75zkMGChJhKHm9ZsGYatCMgoVbWBQ1Ha8E9j2NSLgREon",
  "key19": "2cs11NLxpsqvWR7QWC7hqRXGbbhv5FUdFqZXbQs7VaD2z1ZSWGyhUosr4zcskY3vu1oFubNxcGiRXgHnvqEZNtbt",
  "key20": "5Kkvr58Qj6RLTmkQVBBMPbh19qCUzBSkWDtzAcBRb6SYiVsoh45h4yNRwzF5irSJoqX6tt7ogArkVohXp6voRxDi",
  "key21": "2487Fu9veM8jDiGwcBY6srRaMHnamcSzDzKQ1npkhD5PDSQhkcBgHvAB1PVoifYEQ3E315E3TMhwH2kDEYjVeRPX",
  "key22": "2Yi5wBJd3v93WuuUqTw5NDjD8s1wHugNMQg9nuWFVg5RbjabFT2H9dSQxc353nLjh5tts4JvEqkFaBHbz5AZgGzD",
  "key23": "4FNpjknH6oE8f5mkjggTAVjdYbDhoeLriURqe6Y562HCQcC2cCQGi9cARRJdu9zEz4ZgGFzec6eXQudcBV5LQYx7",
  "key24": "4f6Vyd4VZ5XUG8oKJN8S35ytdqvRwuSh4UBeDJKTrqaMwuh7AhGHG5grZWEGLqUeZRRdR4TrusEzNr7x5ywjLz7F",
  "key25": "54CVUow7cuQRAcmiBKFY3DyxoJRNzsEWW4ycnVJuqL7wPszV4ujSGm7KciMCeA31gHPtvebt9DxPXBHmGoNCwznf",
  "key26": "1MzizAojVjLE5xSMTeMoTYsPXr465tiNAB5N9NT7kPjoQ67eh9GR4KN26GXk9Lki4GyfkfCrUbcE4WAir4wTciY",
  "key27": "5qPrKhWc4RrgqBq5CsYvxNaksXCrkjeBHUaWTdAWjbFTD28ETbUmtjHdrjV5icsxdtQucqLZpMAE7yFL3G8R7RrJ",
  "key28": "zarfeaU1VxXtSuqhy7Zgqfy29CfXQ8gvGLLJFnWzmiBRvsCVmacPyYeGwS96G1ASTx7j5j1WHPMZXBdUtz1pQcy",
  "key29": "3G8r2sTs8XNJWHshNtEPVSY1zB1WA2U1iNMgmTFCViCBoy8NkfKTLnE7j26u71yqwLxxWGt2QASM9XXKfEsVMasU",
  "key30": "5nWjzUiHKANC7YA7iDniZRV3ykYvPeLDuf5XFepaxuZfB7c1ELtffpPNhWWrBdZj7xa4fuTGrE6CHBqjFcMWD3Pm",
  "key31": "3pxuQqH7TC4swu4o76baZM6aDp1xXfSp7EZ8uYNNtsAbYfNCrQqRzHSMEQPYexzW5XgBR4NGzHLBr6WkbvDF6xNp",
  "key32": "gQJdbYfA231anHsfCtjZ87hmgjDMCgDqZbzT8aXTG6YJxPAznrxB5jPQeBSuWimuRA5cRNoMgQGxBT4GWyZhX2c",
  "key33": "5iC1qyPqmCorogZCmFiVEGcDoebXb7EHaAuncrTPZVbLEmYfyCN5G8JA5z9qaTXCoGvQGN4CfxkgQ4hXJuHrJ6Nw",
  "key34": "31XWcZ1ANph912jP4pRFR9AHBBWs44Ypm4rZiMFLiTYxHHHWajCShfxZFV2TudtLUPtxcm4RCVkUKTrUXKojHSZJ",
  "key35": "5hiDbHxJpiKVSt7WYeTuUaQHP2EemU3A6joSgYZQNVMT1fifcDLLyRbJJzb4RS37WmSQFnkhimN1wpw5Eu2srCE4"
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
