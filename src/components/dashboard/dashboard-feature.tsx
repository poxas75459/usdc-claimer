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
    "yTPd4VbpryVBXBvgT6bJwz3mCnoKdHBhvQPYThG3i2KiCdzDnSVP4rKskm7Q2WX9S4pLexhB6aFcexg2CExypti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBhWP3Voc9J7HXmqsnfGZCvoRvATKJUdDWFbiWhD8szTzsgewvVTX4npEkJu4BPWRBoZo7SQhyBnPSgBVy5sT5D",
  "key1": "2QJTpKKVsdMkNmvN7eaCo3PSoWkQTzMwBkPzdi9XoAgnxjeQmGYhkcPb5WCU8WrGhJax3BhggP1rha9x883E4F9B",
  "key2": "5yuPCcyu6kZYPhbPrQNn6RWs4EHEHvZrNPrhgGkYewcViPo7YizxUrZeRcrK6HB44fbxRLAQJNuJ9wwHykyNaEAz",
  "key3": "4mPzSu7oX9LzEhEASfucDPzKtDr1gkGQiazYNVzpHBhFUXfzwaG8E43Tp2KUhenJNUQuZno9x4e21MP7zoXB657M",
  "key4": "eizDSxxwVVYCznxtVeA94StWVwykC9SfrQe1KVY24VQVHtVyWgqd3hdm2G83L8tRxf5pTiBNms3LhGdNN9VRSzw",
  "key5": "3dWAWoG5op2tYJD5DGZdLy1ZeZxYbKinT8R9DcV6FooE3JhyRtkqU3pM4xeVuHahaBqZRzYgambmpYbbxKUqRSEc",
  "key6": "39rD3dUmZy7LDdfJnEDAZxvsEZHT2J7UY6ZgF4ZtPW8aLEnCwasGXQwdgKzN6ofdTJd5G18YwGvFRGA9nRtxvPGY",
  "key7": "2S2BfLreW1f7GPqmcwSpujK1rZDpKSvPgi551HnrXT3hhroRLU1jZSiay836HdkGeWRgoBCPg1r5TSfC3pXByvPv",
  "key8": "5XMK9VNrqHvvA5GnW4TAeiVTpjghvGX71RsrPWCntqFxdTXyjHqwWxCAKLTPQbvK3CqkP2Pn7WK2rymyhriABcPf",
  "key9": "5PoRGca3Ye7PiyuTm2jsTodVQ71uFmkVGHqhZ7wg5FCBVBdXCQR552SLp9GxYsYzJRAkngiuvtXbUbdE5JrAyxGh",
  "key10": "66o9fLYm6zM15kmrNkJRrU2njHC34NJQQ2UpjGYD8ZrxyiLm991axQt88PY646zxPgvDxok2Dvs5JwaPvLx1fSnU",
  "key11": "63EU3sreeLCaRh6jPmLGX9m6mYoW8NmJ4bBx9udq2fPdhBSxxSzZaruV3AruHA6GQ7oLzwthsoBMA3xiE4q1LQWC",
  "key12": "2ZtuQ1iDqB4FeV4htus4DXQfo16HrghiVdrpGtsSh3yby2xScBULZw9r2x8Tzjp9UcCbyNMKbtk3DznJ2taTJERe",
  "key13": "3tpoamTfxBoatP2YkCVuFKQx7rgHqztwzyShnKS8yXnooE7ZryweGYXChf9ejGGyUjXewZMrnTBiML4BqiKEgATn",
  "key14": "2jvS5Mqht7venR9QE23i8gCZiSycQMCqWjBh9D12UnNjWQa74UZiRBxhNpDhdod5SXiDGJBHpxvPqKFxXZRoRB6y",
  "key15": "63Ju8evq9LrcTmHp2Mq5YNASegpaBoooSP368qEGTvBYMqxjeThHncLmshMJTgzE4osV9JCMMy3uT5nmJmrxfK4c",
  "key16": "RdDe3gs9utnCBfMne9neQAL7WAGYg5qMkGWmk7KEiSVdmWjguTn5mbnjC3omb2a83VdM4Lo66BeXVvAFiq4jScu",
  "key17": "2yMxKcfrg9yGPET4EcCsV7noE3n6FE2bSHSHU9PkByhruHZkBnpHWyoH1ajQB2KNAiEHdyqfGCg8KTpWkMVneAwF",
  "key18": "5wHzyLzMUNoBd6VtP5BLfi5Ai3iTKQFGbBpaJVQmyQrpwivGivReNRYoB6MhjSjmSUsBmVaFKB6XpGgSHhMbbaFS",
  "key19": "4nYwB8qXRE7n5FC5U2oXucV51AEnHSA5TxKz98dSkZqfR1qbLNgzmE5qfujBEg542nU3UStbwLfhL4K5AQNfceNv",
  "key20": "2DGNMDRejvMQKqGPv2MDEKnjgDytfAjm6Y6edK9n5Vt7XgXMXAiDKSc5hQvHdxNVRFXLEEk3YaTgV1zgVH1y5H8c",
  "key21": "2KF9CMR74srd29HUw7cWLjFM4o4Gi5PvRVkrwcZui99h4yen5BkfouUmF2PAKvygDz2mHDXv9QLBRGzF8M2BsRmZ",
  "key22": "3153qEbhsxtEoGYzCBbHJNaHTp2M8muai2eXoVGS2hqtz8G3A58kunnG3dJiB5RSAu8tNpYAKauJKLYTsUSTrdMa",
  "key23": "4fwsLggKtZp6St8wLKqFCwpK8yEcAc56VEtRWKuAUwLNh7sYpWeAvrs4rNfcfbPoBbFikTmdaJEH3vmfrN6NNHBW",
  "key24": "429KdoUe1cUrhDKSMSLqoH5wJ8kz9Po4eg75QVkHXXf6JS9dwvN8bZrWKbnWSpCpUmyiXudFXzLavnnpxjdsP9RR",
  "key25": "4azPgtyDcjCDM2MaHdWQZr6z9qBn6mQRNPqCKojFpStM1S6iDrv758NwrUfnBoQh9SfA6MHWZLui5BRq9AsUeaKT",
  "key26": "4ShrpKW2X1gZTMS3Egp1gWAvbeKHaaqDKwip4Nm1pa6fwbyDjEMDzfJBQcwkGSh1FJfNCJ7iejGRHZsC5LL9NNXP",
  "key27": "nyj8xzTk64XW8hNpfqrU5A2Qh4abfHeMnWP6EL47PLBAi7F9vNZh9fBCw7meE4DmH4L2X4mrQFfUu9apK6bkL1f",
  "key28": "YfWiqATpswDGEgHZtHbkqMHtPpKpjaeJku3tmqQJKFzCyfT2U6PkHpgM469aUacvrjL1XuTwtfNQchx6L9mXsn2",
  "key29": "5F4tY56mS8pPsZwQXyWjfbeycTFxxu2M7yYw9Uu2LrW3ojquspcF731uAAXm5mZXxVsqjdhnhMoZhfc7FP4tN5Bc",
  "key30": "3SVCq8NYqCh9u2Va8YPcX1PzTHjBiNSDix9akoixGRxMHRpX4PMh9JAMXCRx2MX3GA72fY3vbYvyVHJ9zVBfkTeu",
  "key31": "4MQTt6Rctkd6ApKBxRaWkrVMkBZ6iTriAD6P8GrTJ6r35YnEwxGhQ1mYqqRa4vFcGLZRtuYKhCGjSe8fAhw9zF9X",
  "key32": "3Ptp5GxygszxiyXFZD3iRaAh6ci5eqyN9vw55GXidDkzH7CqKrgf2DDgohWJxNaZddnGH6mHw6zUXbbJBe51rfo5",
  "key33": "TWuzDHBNkCoeULoC3q7JdSgeX115dZM35ysK6yS6Pa1Pa6mX2QL3NMAgmE1wXQorDnpaG7Cdzoo3hh4x6vN1gbA",
  "key34": "qgjjt5erqHcPd3V5KXY7CqWXcPgjGNcU1RdJycnn7naFr1fB7XoZ4niiUamaTgGDx6KUXAgrvCTF8ri99kYtbND",
  "key35": "3dZN4LQ52awrz5d3Uu3oGyTS9giRJnbfLy6YkNodwR5mUhFtiRooBMphXor7mpuRBhUxEKqsitsobaSkhZBxJLPT",
  "key36": "4C3FppmiVF6R65dM4VP2YyGQ1U7HwkRTysJamSJonbcjQsppTmTMkgtotRWhmEV7YwEPUX1yqt7EECiYiaEYkwnM"
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
