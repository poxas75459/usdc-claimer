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
    "4eR8vS1pMdyR6zdVdi3yFWocR6pEm13u9rerUUAVthQswHN68CD515ovSTYTi2noUevKbMLceYATqkqrM4SraeHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37h1kiYN2cjPHmAww87ptLTqvnVpFqNV52Qtq9Tkh37CbnwQERspUG382MJPeGSyTYmButwKWKcTRT13n4ki6V45",
  "key1": "47k31kUQLEyRkE3MPMiQE5ZL5Q4Axheb5sJFuzgAYNANgh7FsNJXyt2ZDUwQ8pVr2fHsngKnivkCQcGvzYNc8Eme",
  "key2": "2yqTTfbtLuSaWn1PJmHHZvCXZveG27veYtbXMnuQS5tAx4YcWm8QJ5RnkNJKgBCzeSjppbFPdpfQSo1b83iAo7ew",
  "key3": "4wP9iTTPxDkVYyZxVDQSxeiWMukPQy2QTcAmHMKX1DLPDttcpvEM5rBHs7MVShsnjeJsCMnqqtrWcAvKKgPmkizo",
  "key4": "4LEykRRAr2FJMV5rufvcGDuuY9TU6VPEoC6kfy81yftnbLFRVWw3m2dN7BW2zo5Y7Uxt81GsMhwk8TLxWBCEryG6",
  "key5": "3G8m68PjYh268k3yBPHernnzVFYKySa9VKEqPn1bnsevMZFMBaG8w2eDmXdo2yueZ5f8EFYPBkVJxx23ayH6YQnJ",
  "key6": "5bi9MoJ9sfuk6P9rd2UheSFwu2mWiJJaVpRDcr8hNsUupmubnpJbVSsBJkzJJc93bCuKAimUpsJYbhst8pePRz2F",
  "key7": "3pUo1cQQUaM9iB6JBUkYjnz541gnr7DsigMTByRjKcB6aytNdynPo5zUbb5vN2N1kEqsitzeVn8DtZreDDXVKgUh",
  "key8": "2J2muc9qaPbafVduAWNPQAmTVSzfEGR6ZFLiyf2qodTzpzU6NaMeMw9ScwZe3tESEzjoUHLK3nuTcN8NVKUYFnkG",
  "key9": "5MCA2iWQLDvLjXBeAjZDewpsNKuyBiCsxgrYyBsTFHTDM79TD7Awi75aWDRGYcbrwAm2TXMvLfNL4kRrFpwDLy9n",
  "key10": "3wLRYFSP1QitW8i8vgiWM1H6wYnrteX8bTZnFPSKCwK2Mv1bEjhQtt9SHem2pniK6wBxcuJtf6STGC45H1u5KU1m",
  "key11": "2cbbDnW6AEaFM4eng6Cb9rhcoEhWXyMhpMhYDm953BajUw64hKLgQfDYaqXYSJzAtLXJRMRz8RFwQfBaZBVSb5Wj",
  "key12": "52Esdw8PgBk14MpZ9y9jDXp5Gsgqrpm2xrw7b7r49UUQnRxgH7PXzgfwTActQoTP1u3wL9wCW29MKpMLvpdk6ytP",
  "key13": "2Hc1FPgdHP6C59QG1LcRM8ERvj94JMvGMLUuxN9d69atqtBeeJrcgyomsApWAy2h9u3jZCkJ7279ZbZjnpZzcQTa",
  "key14": "5p47G2xrdKmpmd6ujsr7fe2ihP2GhT8xNWK1yvtKmZ6GfnhZAvEw68bGav1siNaS8avEPju1hTphhsYJhpC9bhzY",
  "key15": "4S6CUTJaHesUTzjQRej3DaURRtQch9ig8NzrWwvG3aSGXVkCNUiuBM2QPyBLS7YdLiXN8u6CrsY2CnBq4vWHQ3mf",
  "key16": "65cZffApHmUKaDTQ8dkUfd6LkWyikN5LSAZg13RPLt9na341QQFVmNw4QQtv1mquD7qsPn3yzkMextN5cBLqq9Tf",
  "key17": "4MavPZQGBSpw1GaLPN7gUCQ3Fa1sNGcXhkKnQb35sgfPMcWJdsYFiNF4Ni1p9HAgZcDXowrd5797C5NHMu2CCpbV",
  "key18": "UCSX6x7A7mxKpWxz4cWrkjcN4qAt8E7Jn1NNMBHgo4ejQx6bfrNXct1jzeHXP5VR4qG1EV1L12cKYso22SRXZTU",
  "key19": "MyqHHhE22FZp3psxnQwP9a2PnBxdchF37FaTcAk7HmiqLMZA5ivWucXNUKgFocPfz3ZnGWXNawR5BvEKoeNxEVE",
  "key20": "3NzqUPk5TVXxrMtgP4cZPHYBYjtFQuaAVjDEVLEuC65DQJwRG1iK443S8XYq1be2XaJDzMkbccSDY4ZhVVB7bzpK",
  "key21": "4T2HZURGn3xW5JJTvWX6eQvrDtbiETPKyKCtQERdwJroznw3GCViifHCd1VjYMsRnk5WjYGqS53yzQD6DwAXn7S2",
  "key22": "5QQhKAiJw2E1PwmDY83WayZZhzDP1jHvm9kxuwMEGtYpTpX7P46SP6np2yqNK6YB5QFxGk721X4nAUqqa4QHEMka",
  "key23": "SeGjKV2XEctu5LwZTPkUihcoqDo5Fhguu18YGpnkPLrmuf8ULBa1Erab5emYvfiArLmZhmznCaP7ezgqFD48W5x",
  "key24": "47BTSAPgxagxpABvYap98WvW3FdcDouP4ve9FYXPLEqXSPm1sTeGUunzgNsZBGYGBn1fj8r5W2gtwWGDbbCPENrN",
  "key25": "4qS8bBdbPfB1V6sa4QoZm94KkWR5hfYGH6xVUxxjxjxU9Rs7wPgiiiWqqsgSGqAPvEYx51adyApwzEWuDTk56pkw",
  "key26": "4goa1ciNqeYz6iifNaVSDdsMW4GzoFRwg3bpMA81vXF1SwT6pT7FykUYVgTvoKiiQfzF9B6pWWrCYwsVAmuso4W7",
  "key27": "3ypTZQsX6w8g1iv2iMM7aUCRDHw9pyef5QdnKf3supwJ3xJDJHhvsReqQMZ9kF6f4GLycVriApFdGom9P9HTZfNu",
  "key28": "rEreXHWJgLEvbBqPNwbccGSMhhgXFdJTSsLNV7wpuKDDUsF6QLyPaaBqaDkEycPTPYqhpUDC6jw33i1ksvVtbnn",
  "key29": "57SEfXiaj7RppuvDqY4yxkwpBaQFmu4tfHBx8W3v2WDBzVTPb4Gtz4kjYwf9dZev8DxJ3Z91ZCTpeDPNxHavsAxu"
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
