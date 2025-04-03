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
    "61qqTnAjHywuNVvzbzuJtWaXiodaG8WkZxVVC1R2ZTeu3UFZvVoAXmfemEdtG1uJAyiJNyhhz7VeBdVy3zzNuAGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2daiUoCCKhmmtmQmwjjfLswukrptuowGZUuipzjm6A89gjKgGQKVg5AJdicafDh57D4At7J3jSW5dqcVziKqPU9M",
  "key1": "4ooaMzth7pYMZvfofY4zZNrrHkHLsrY9y4DhUEmir5soUDDPjo333GD8wdNSmET8v6NjXQTaLxsXcV7pbzpMmR8C",
  "key2": "3HL1MpFv8VKJH2GevFXypwyj5sBNRk35K3dPYQ7DTaV7G9HBufgLKi3wvzGMPzNAoLgbGCuTQZDvrdUUNvpRD8a2",
  "key3": "4UrXEGoXnRCT6bpoahLKo6VxEiBr3dr3xo2dpni19x3zdZMeXjcat1mq3k65tqMEmykqwQDzvZK4thrEs2Cso31u",
  "key4": "61w2XA5k8jYVJw1SmXiDbKCHXfEyhbaTtjMe1j98hPKu3LTWrZ5cJYcT7qjVy4LL9Sj9omuU59Y6XqdA4x7Cu3ny",
  "key5": "5VEUDt2eYoWesuF9RUM9RtLdE4cAeWaMTuS5wSpEYLYaAPJuf4qibTBxastEUrNvtCwQGvEWt7tEsmppQvSpRkeY",
  "key6": "22rZJaYK8r44iuLajzWrg17ku9B4583UtM4ZRZsuqEsYdUAe3dv2Xe9wKduz1Cce94ffuHNHpzs7rPhppMoRkGtK",
  "key7": "2dsNfLR13S9cfN2JUScJb5z132DGqQVcwewEcasKaFmTxLhZZqAymWHhs7aXQ3Cu2VdYeGmnJcX57y6UP66qdDH1",
  "key8": "5jkJhHCZcNMckkDRE2c4xyV8iw4ySTv5Vn82uA6GD9dvmA9J3MAVDJvW55ookTX9mXxvEcWpdH6y6EPvfRPq1ZHr",
  "key9": "4ieUW9pJcam2eve7BgpfarExPHkP9bkTATH6uwF5MQ6iWFTxtUebTTZ9a7ZnVtvQCRV63ki1ZLsJWKvGVa79odZq",
  "key10": "2fG74RiTdrap8mHo3oDjaT4MTjGymBcTPu75i2uzCJSzMeuUehr5hGV8iarTwaWsvAxLYcE5RCfgexyxqun4g7gk",
  "key11": "3mBGJPDLaLdLQjjDLNXgfA3dBrmN24u6nB1tVD5haUmBEKxw8xh9vrByqFiLM27Y3UZb2TKawWTPxZt8KTgEFdCN",
  "key12": "2Ur7vJ3FrcHKUsFoBnZV89tomT3GGNRajn1CWFUsButiQ8BWx5dKfvBsyyNJRQWDMhnfMdNwbkMm7Hvzq5ZTrSEM",
  "key13": "4mXQsczJZWviUjWDeZky81647RgCCu8TkQvLsirG6rrFNwAyYsYB1p1bHxYDnFESbARNBTYD4VDMuJC6pTSj2LRP",
  "key14": "2USKfLSGbpvcQrYtCvjmrV7jF2Mbz1TmVqQNnb1FkuraTyB4PYKiNDnMnW4ZTNP7Er3bWrBctrwWAg37AXM75iRS",
  "key15": "HcH2ahNXsnUS3H7KrK1eanCfBjbBDcfYcZiBbj21fAk3ju61FiZj8nZFYGP6A4Z55ygJUEMhH6aEuZ3YTfH6WGD",
  "key16": "5j9mAy76FKn1EWukQN3Lu6KvcnDU6CzLQo86bSr95m8JbRxhELZ9LQb3MzvFNzNjwJ6YZDBZEX2CrsfS4P9ESD8P",
  "key17": "64CCGvbu3zaN6dXUBv5HAqCeMaL42fZQJGqK5y7vNEyXt2LZpv7nTBGe8LDUTPSH43nbp4rpM9jhL7MM1KUgoaKz",
  "key18": "4fyLdNtkLWoU4HEyqhEQm3JgjPxTk35Xe6VPt7hZUfUuiE5hDpZYKUXsN4RN6pLrnz2SEGAXyXTP1s6MPpMo5pfy",
  "key19": "3kb3qxmcZaFmwAhRm2ygsZKEHmWaQhS1EGC3M1PqVEetkrHiEdb5K8TgcQqfGNm4PumLtXLgw3gx7miu95YbmyHD",
  "key20": "38iQw7mHRsZ8GUriegJAC42tV2GSVSZtLqgUKgwzaExUWKj5jY5Cpkre5eQ898pMHFh1D3Pb6bRVMWhNxESBfoTP",
  "key21": "nYFzHiUJEjD86oJXY9TReokU5edbWJnTiN7BL43o47g4Z3K8VxdcgNqGTkNYmZoJx6ofjRoeErP8j5N4NzkfZ1r",
  "key22": "FnSY9fpqVieBWVAzEC3gwqpCkncetJ2Q9LxF6FMWV67CaZL4Ch3iKhWwLSLmRGr3jTPqMHe9mmaBKhe1ttpnENd",
  "key23": "uDSM3xWLQgycwUQiiehg9V9jR7XAjx93DULihQ9E3M8mXpbJr3DcH9Tfw9TRcbT2tzQsMHGYxMjZiQjPLwnxbQe",
  "key24": "JuyGtEEQMryNw5Xx4xdXqDRr2Z8yXLV5E6MLcF3brk8qa2LVZ8VnFnWbHzqGDZs7nnL66ndSpq5LLE2qLkzgnyb",
  "key25": "4wmekywv1ZGcNuQkLmcbGycybVqtdpvPHjgAxDKrAG5pWuiJABcdqNqZrM8q4MDQ7UkVfNtGF9dZhNFyST9FEK9P",
  "key26": "3eGwWq7spJmLXpLfnMSTo9BWkhdJLj8LK9ExSrALZq7Jysv4VusQatFTFD7KZqFSa1rWudwoTar69KkdCrGrkAjA",
  "key27": "hcfq4GmJHjYjEkte6w782eMczi8D18d5BxoE5HQdaZBzJs41MQ7FpZiG9EzXVaDpfHaa3iTQufxMscyD33B4DNZ",
  "key28": "66fjVndPzwcQc4sNRL4mrR6THoVutq7bNTQNvZNg4HtgQ3sMCd1A58ZHPbpNbXkcyZ1e756mXDr3Pkb9dJHCLohw",
  "key29": "5r93zPuuWcwZHXBUybW9RXoNas8QBkF7KUQcSWarTgAGaSFyXowtSQbGvjCvGs2zXVdiWjaWwDtsc3oPLRqyVkJg",
  "key30": "5KDVFTHzu81cQ4k91ubAUm65tScgEbpwriTmB6Hj9xkbZhojPYo2qGuW8ASPexbSoP7q6GoSwa9qX4d5HFXUirJo",
  "key31": "28AoHWx7acb2Pff9QzcKattpKLWte1ZjqypTHTRzyBv4ZdjfT9yVhQixequ64oB2ruL4tT5hDFnHNSb16kCWpdca",
  "key32": "3NwJ46ufidJPiGLt875ReyB7McNdpq2u6r8zmqwqpXGaCTpfXLQasPfXjgKd6LQG4yv13pqc1MKisQt1m8YDrmJd",
  "key33": "2QMWsyFTDgUzxwLdJ85d1GAdTo7o7bsRTVYPWQX35GxS2HKxwW5RQioJRTEsYrhjbK3JaWQFpYtD4fXoXZ5ig7qv",
  "key34": "5zvzTrdfBkP4P2yq6fFGbwv8GxYGtDRocw9TuPVYEaZNZcB1nFPUbL3uakM4FatVUuN7cMWdD4pgTXua6y2toMkd",
  "key35": "2w5VgWvAgNYLu5hoNdGJefxm5uXGZwiFtLFkUCQnncNeGGF9idCECaEiAB7pCHNEAB8H6QdVVFvNYNYtCiqFoZZH",
  "key36": "pj8uAvAfCTuWGRbCtGs6ZDWhWqysbanHg7yqoyL3vZvE6X79wJHz5gioP9pPcMpQY821xQr611aKzL5qXWcL6GF",
  "key37": "4dzeZvJyMfnoQEAtrtBxPpbDKEw8UPep8iUR2qfSTmH6cNHTkHJ1iYqpnWsuSnx9SNeiDNGrhn7wwREm1iZ6RJ2L",
  "key38": "49Hsb1Ka7eJgD3Foj4uGwbcWXWhQfNyvBq4e2LzCtqfhEaxxWygwVCky6yXvmY1osDPrGk9RMd1hWAEoqPr4NXsS",
  "key39": "3KXbhEPTFSTsJGyfkV7vj3D94TgxVzaCeHfiVVspjSnSY18g1gXsFcRQ6bbtnH5YZYxcoc1kiNFvT65GcnN2XLwn"
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
