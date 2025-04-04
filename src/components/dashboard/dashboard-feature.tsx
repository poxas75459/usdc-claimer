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
    "2yrZEtgWD3xYhsQZytWsMGyHZ2MHocusxkHg7VrY1mPH7JDNmCkRK88Wz7QEtYKXMk2aPhNWWgESrj9PqitTEy3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAwTFAk8MGQH4Kim5GUPhZbkJLMM1qXE2iAX1unZ89kbX8u27WwZ1DHgtxpUamAe9FugkQr7yB8GJFFtWbBWmYY",
  "key1": "27S8FR3VagMpFoGrLSE7DynTaom98CnRAHu8cUWDuBNcz6qGonqgczX5d6QbY7reHHuNfSjgwuCSC46ZC3x35NeK",
  "key2": "5PniXNU1CqbhjwNBM23naiq6GM6n7gZnivxV9CiAXtLubvsyyY9QsC1XfsCZiAW6hRPt364Z4pdYSgSH1v9Rs5sk",
  "key3": "A75z9Dg3GBPcQAjbGMyBL1oAWH9GodPEdeQSJiSL5SpHf7mGYWZm2iG9uzvoQRtNZ7ZshyeHMRkYBB8Ui4dq5KV",
  "key4": "cCCnqRQtcsu5V1PwKtPRWMH6NNuinsbpkZerkuyatwGMgBWMybPvhSCrMcae8q4xEgNHA6ZDoyApccrxi766Z4o",
  "key5": "4XQXSQmMbN32w5n4YwrWUAybgnKPeS8CHPpCXTkrvZWeUqPqAF3ohGMUKRNoQszUFxJeFq6hfzczmSHsLo8r9FMA",
  "key6": "5H6FZxQZCmwTU6KZ4K3LQ3KEXbGtsN5eG3GPHyRh2wPQNdfxH4pbmBrbcPE57bbGt3rBfa8btUq4PsB57Ad84Yjs",
  "key7": "4gWct3aNEHgtLksbpYftpJQvuoU87MvPmTZ9bmo4NhKxuomxYTwFzQUdnfrmVfku7Z3ckMjQiLMZRoB43pf7dFeT",
  "key8": "2CbRbafJa8rdDLZzeN5nUas9gSxevJxTKk6kVjvim8hi7UriJcyZwkSnkPQg8VWueBQbvQXp61nXdgJN22VZgjXv",
  "key9": "5qSginkdTxZqwn8zyGiMbfyh5wHsmquZEQEYGm2aohD4nkQJaBuKYxB8Q3Jks3tRs3uWuVgHg3FvepQcWGeQvSbD",
  "key10": "5ZBxipuHsX5pwu3MnDRNZXmkuyhABjNQEkDfV3wf6Qm7BGQHbMzB2Kkkgioyv7bYwuNVLEk6kJrqiVZTNgTZcLpv",
  "key11": "w5CPDqRGkCiVYaEFdVWgpPdmEraXn77VHYWatHhrCR3qdEtm1AvYLYNYANza3JLN5TY97TaGaPHWJcm1KcknyzY",
  "key12": "sR19iBhw3n1wgLTYa3bRUvxJupiuDuGaXiPyPue8ybwBEteaMv8VPuLH5yrzj77hTEwGdbGzzYi67gCE1EmFnmD",
  "key13": "3qLoeHbCeKZxkWK9LdNC3SDndaediYvDB8pHWGZ5gmYtECydiAdwHc5ECKfXydnzVsHfS31QCCht1hDKSvXTsMBj",
  "key14": "3VN6ffy3JYgZ16Z2RWzbs7mK5BxasT5TFEf3ydo2mz2zVevA2eJ2MeqAQm6eJcLEU4HN7hQNCA9aWFt3DCyFpy37",
  "key15": "2ZbAeti4EpLmeD15Uuv1qvkVnNQ4gZp6EBLEA1QWGcDQyVk7sPN8cvENtkF75MHKnMCVCecwX5EjrDpdY4Sph5n1",
  "key16": "DZU8LUQcvGD4CJpF7ed3r7NcPxaKRHbFQpXVMXpEQkQufZaLD1ZxksEi4tu7BSoamDmedfLZ45fG5T26Wpo5a77",
  "key17": "3zRvLTkCXXDguQfSP6xYdKL4ZKXBZ3Je3NnMyqazThNoGZD4HfRtcYeeZq2bw5CFeHq75BzxxHzJELK8RooJ4aoc",
  "key18": "34DX3fjmim62twWcTGreiVTFScvw9jm99KWArf3Dhm2aWxhSrjzEDBGeQkyytabNKywvjYTY9vPyPGVEMeFca6Sm",
  "key19": "WM1YJYRHx3mt3muDS3PLboEDdpcy7x3gHXpjqnV1Q54oSCPUjad4bNDCs5qoZqYJxomRigyrkcFonp2MdB7epjN",
  "key20": "4HfWT7VWaZjGPm33iuH4nqg6q26pSaQp2cE95faNkChEuU4pZV4U1MRANfoDVzh5u2M57csYKGAbT2b2PAbiVwem",
  "key21": "66qcWdMTzmjPxzx1axiCVANn39EtjE7Ghbz1DtGmK2qWyo2mc7m6fSSzmdoZvGj2QexfSCYq5dainTgXv31qdGtW",
  "key22": "56YB4FYj5XJ9jru992EUTi1kzmynPA2YPjHPDPfyom1ZXawE6QVZufdA8mxbb3Ja1q9LyA9kaHCz36HbgdyZXTTs",
  "key23": "b8ZbZcu3AFH8jtWLGjTajPUXrhLhVJDxUwULda5rS4BFdcky4q6zvo7iMZp5K7aikLKM4s2GxL8nni5UiYjR9Hf",
  "key24": "2QHWp3ynzZctwVGqHVK2o3GHLf4JDHVASK2Lr1ZdY3tjYHvybkW6ngKDSmdxtZFzHaBMYAsLxiEhaxST6f9fVmgU",
  "key25": "3LKiy1wGjb2YuTnkPpyJj5KtiagY2X1pxLbCU3jyyqe6qvCVV8Vfoo5JDR4W5n1TqNDVhmbfWgJLqjbHkGRWzKvC",
  "key26": "3TMHEZRZffQKpvrTFdwoRCgCYSZbJzfCZ9kjQNrzZcWYMaigvQ9MfynFo7y6fjyJPWu9ctpDABYNNzAeH4Q9Jhg1",
  "key27": "3JAx62wr8bE9QtVNuzumwqpxppBg1USCiVNmMDFrRRHB9bHPmoYMa8qbKWLbiFD4YY3BKaipEWqZtUwQ6XTAVdv5",
  "key28": "5L7rkrvfhB6fJLEF5q9FYxEYJkPoSiBz6ho32NMhhh8Nmp9SB4CKH3PWAGki7cAgNx2b1KxdoXYuZHAK1fS5SHDt",
  "key29": "38cEVfwZBsBQMukjverBC2nJ6b7kKqYGKXzbejxQzRHwMmoGdvCwDNqBEcoYzariNQ2xrH9G6sfZ51rQsc7dR57f",
  "key30": "2mVxq1hgzB4bkHN6dLpff8MoaGMyqBNxgqF45QhKt87b5mQSXPFYCKueo3ZKJ1UCbjVUjLMXfS141a1NVrUH7xR4",
  "key31": "e8fGbMDaEg84km423fbEn6AdaqNGrmgakmyXb87mYCAcwiMLH2VnyXWggaFzC68m72qZdA8zCRzsmD2uo5mTw9K",
  "key32": "4JcisXxy76PxRKhAodmfRc1eDGuYqctjxAbpDSsyYgxWJrFKYZ1VQRhjz6noPCBTGQv2Ye6fhC4ahCY5iQQomjdP",
  "key33": "xGn5Eb57tuAC6VH6CQYqfeHYWaS3eNB3UXEEnDsNeVFa2tSsnqVWpkDRgg55RVN5bkREaDFzMEVfdrzqjKqofKh",
  "key34": "FyCxmVSAAnwxYTeJifGp1yBW99JPc4yCngxDg2BTLpFY16Hezy4X2UGsG9P9n864p75gRF14shj1pbCdhZdSMjj",
  "key35": "3Y4j8qtsYmksW89BZKY7aQazCtyNgNxBELfWnLNpH8ftTbrHZAooQcQF8kP4tFH96jiiLyUWH7UXoZN3MjAmLvN8",
  "key36": "47wAS1xti3nYZMrKj2Gd3EzRED5Yrw3Es3RV1CXjvTJrai8fmZd8LRKvLxFe4q9gKsTR4fTdgidLvArgT6ThPwBg",
  "key37": "3dq6tMcSUpBVd5ADkTFWGWWUwQ3nR6z1yeCGgsZYPQAfWovmbgCWaUo2ZZgiCcMxwWVys8AKbYT2Dmybkmo5i5p1",
  "key38": "UVuFnXrNBT9nJdB7KpYBweEJxBfEkXsRDB97xhE7NJXJKbdkXbUXQ6KJH9V1XEwJcmFJpWRSBB47xPrVpS3dyiS",
  "key39": "AznE25QfpkLTmb2GHFfxzRGqiiHHaM5UKCdTGyq42LaV99v5rvN6vuSg5y56CwBox75zpCwMUyYoz9Av9SzXg4C"
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
