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
    "45fJ8EiKRGhuWmrDzaDx61aFNpkPWnQKDFEpKXSSthPWiJgjYg22mPjqfcJHrwTNUwU7Vz2k4LGtuL8LhwZwMuZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCKmV7ihmQS3g8Lozm4Y5K8MqB6WJDqigCgrJnNacPcc3VUU4YHJnK1tjPbQyNDkzF59tFp3vbjx5fJ9GAUKVWZ",
  "key1": "28zbQHnWKxPjNmqX2yCH3iXuYeRrgH9XF4CznykaABA82361RUr6iE7ZaUL9pYU2vPZCch7stmKkzFVr2uZMLCab",
  "key2": "65pkwTWtyJaebNZGH9KuJG1ak16ptVXiV1D92oCvWCzvuy3xPiMFFLyNogGnHARBMhrQ1oecDkrfC3RqnuS41rtU",
  "key3": "32R59H7URPThR1F9cpRDoiJrcPZsKy3jwTYhNYkV5fUadkrjJtGTMVzrEgvv7SezDs9YjjHzXanJTBmzZgVrLU2t",
  "key4": "5cHxPSVrdo5vKpyJTMxoT347jpk5N9oLU65dB17kngoZS5rc1TBKFnYQ7Mw5hWNppLmoagKJTDU1zV9nC6DpB6ab",
  "key5": "s6ZnW98nzGxP6ocW6hvaDgA88mzkYfet8UDV1rGyUuQwWzA4ZfftEy9QLeKH1cGLKWxcTH65JR1x9o5c8emRZLB",
  "key6": "GeeFUFk3Av5TvGTj7Ex46YNWGh4FEmyGv1TTSpZJKUXwPDd1PcuBwvZEigKyUwbH8fuFrQoxnPbWgmoqzNdS8iQ",
  "key7": "3pqYDLC6NWuRVSV8ZmCKZotSVhMy2SsRiVgApZwiQmmFDpwS27ZVURxaaE92BkuRYCzYbYdFDcJ7f3w6UeYTGqWf",
  "key8": "5sYqzxX1GAYEdPcif5pTfpFH96P1V4hqfqzVUPGK7q1Lbf22d5nT5fh348wLWeWs6Ewu5WL2qU95vGmigSsee6xt",
  "key9": "45kZPSZe93Dpf2ATBEUAqv4gw95LrMD5gBaLEMaWotoeE5CrZavSERUJtHTXcS5rA9Phztg1fMk4scptFxFTBMHr",
  "key10": "2xrX4n3wAxUfuPA2XmYia3gpEN7pgYv4tHYPFEZ5Hb6Y2Xharn8HwXHWR1iFAk45ibXHJk96sKCDDzwkX2qCLVHf",
  "key11": "4h1nhPKb22tNiwa5d4UFhsGtjpErn5KVoxxh6AWxSTP9T7vQq4Cjb26ctwQEcUoAXg4WAMVkmjBuXjCNJMPvNzLM",
  "key12": "kSACw8UxmbrZSdv4RG82jLWhAXzKgwyFAGrhfNUdSe3b8v3QL3TqtGVSAfjz67VeMaAKPBV8VDYUG9Fn8qBcpLt",
  "key13": "4oTftBbuESvFfesq9SZpBzJTdoiZZAK43FxsAjaYgP4cRisncM3gTUEMxg9aS1PYkSNzWEdkiWiPR33pEEvEWRrY",
  "key14": "n7PNn7xzoFXPYxzuj6YQPKfNfbLnJe7Vaxvz4sZM7RMXdnhY2z5eXyUVL7rVsB5vzrx1owUp3KEbB4X9CysfGPf",
  "key15": "vpyAdzQ1vsAZdrk9QbzZKiTmkFW4dKiwpqySY1BHBtma5NskzChok6KkQitXv2e9wyqYq4ymp1KCXfm9wFhknzS",
  "key16": "4DWU3zcDYQNMA7dFnkEuzkojECSm9X6t23hfugpXRyMtzu6L5BjTjciFVjTH5N7xBgdAwZhXeTrCna8rz11vBELB",
  "key17": "fM8MwKPe6vnVkDwjoJ7otM4q17MLE7Ze8tBEF7Am7zDx642cccxU5hJqnm7EYzUbzzKU6jC2ut1zXVhzjket6FR",
  "key18": "5UdKTDqaPYhV9mLbnQo7eGbbEqx6KFiy7PzJaNrKMT7uL8UY848FxBZwsVmwWT8V6pUMURhVv3dPsneoHL5KuTTL",
  "key19": "31ux37ubhjVgZnaDEPqg4fw5ruUnv4BiCwmaMLRA5ekTd3CC4uCKWM3cj2L73SErzJ6Xqd1ZLJztNAn1ZoxnFZyx",
  "key20": "5FfZGvZoLNFWegXzBuKzKQr4hLeyNbGnA3BeTt3b7XtLNEwoFZh3wMEokKedZVqEmaqfuavBnEknVqj5169bkYQ1",
  "key21": "4JfFFSMU2voE19ikqjCKygyMLDGDvn74ye7sLmAhFuHeZ1K1nWcfnmrB6Mt5g9bxwwo44PJzNCiyVFRf3MDf2fFZ",
  "key22": "3LYJJwfgNGEKFDyMnTZj2bXXHiXStrdLU8yj7YWNki7gmZ8ujoZtZCACo5Ybk6ATH8FdaQfdaMRGYGRTH99xbEQM",
  "key23": "2oxTYCzp1sEMrsvqMbcZVLVcx6cpMYrp4RzncykctUckQ76GKVyTNrz4EdmovDDzN8cu8rtj7yCgMGfea8ioEgko",
  "key24": "6289qkM4x5QKUMdpnA4sKZUou1F9Gxq5wa4A8rHfFRUfrGz9vL8RWUogb2vVKWE3GSVzjFqaKE1gzd2zE9FQXNu",
  "key25": "48PYkgmT4ykn5p5KcL8c1Lcqwwp9uJCDN36QeZBd2nUnoqBZh9MAteygTrngrYnLzvZ1uwUhHQ5sfDYMPFZyvaBr",
  "key26": "mdDysBA89UpByqPq4a7DrtBsd8kWuij9fLoWnRF2qZoFsmMFncjorzzmGaUuHAbyr9EJm7D4bkTa2v4NLfkukyB",
  "key27": "52myBnYhuxa4CNphKi5df6ARQq9mYkyLS5d8PKDAvAmgDHqjUmv38wNKfWJ61RTXU6Sb662j1ATvBMxdmMeRaUx8",
  "key28": "59rPMuzqNCDErqe9Punbm4MEWTjo8cRe1L4DNUpYTgTfYwWXTE1W1XAq1yDA2x3NLZMHvr1MFYbBpciJyQEkboW8",
  "key29": "5JVnZcxyc54cPZXak4A3TdZxiyyx819inwyBC4nVunTNXTynTMFHrjKu8RopU4hbTuumdhLwToRytzcfWJHcRBRw",
  "key30": "2D7QBTdXmxoQRWvdTTDTuEERKBYPwXLAAgYNtsDSBQSKnP3TjeuFMtPEtcJ7gNs5Pn5JTPB8cYDNSJrCxybL1GSA",
  "key31": "62L9fvRATUnHxumYQnv71h5Gi4Gc75f7Seh4sms3iDBoiF8HqsyUaqcNuir9GKn6GiDXCcJBWkEvM8RFJg9V6kyH",
  "key32": "2Uxt71UWGyrGzfnx4546g8brBvtjPK1yfKQcZjidHiJJcd7x9kBLg3uZD1BVmJ7KpMfdimMK2Gu2LhYmJXKYdcM5"
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
