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
    "BKAdi6DMiYRd9rTqDtuXg4AAYtaw5338uERPi71BRQmJTycrp35T2nYBT94s8FWFG7SpUZZY4V3YHMokmgkyT6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBC4rrq2iyDnsQTJFYgkmpcHjp76Fu56Q1J1Poc5vCQBJ55Q62ktmUtzx4aBMNgxx3kkDVB2nopYVjaoWWjGxzt",
  "key1": "5UX4L3FFtJ9pG3sMa7tt6aUfDPS9sJmM5o4WkuwJpXafWxFVV26jE2ci6Hj1MgYGLCkEEWfMFfTpBrPbnBJZJ6uR",
  "key2": "4zRsGdxRfUan6m8MeczAbRKmCwMrrjSdy7E6AAVFYAqnDD7R4uzjuU7aGudhuow6DGsQd8w3qeccVHVGX2VZ1qPf",
  "key3": "4razbTUMdwtHmwNB4ggEC274n5rJZVpM3YYLB1ysmYgCGcBXjBuzwEV8SD9mZpYQeDByPd8hsukC4PSM3doXpzeS",
  "key4": "uhgHizj7EWAxuRTTafLJfzVAYSVX6p3HZ1vcuh1YoaGhtV23VLmhAJjYqgS2uBA4RYpqEnsP6FYyex1F9GLiM1G",
  "key5": "32SVFZ4UYZNdwuQ9XbeV16SJAS6cRE9Z8PpTcxmGqV2gRHcsh8euCzLcPxKAr1P8Yc18f2DtpYWWAw6veJhgvhEv",
  "key6": "tPBU1Rf4UkDsroZ4cRXwfVXWmTZ2RGQp1qb2q4TYjT5vb9Jxgk8UL7DjEkVDKb1NnyfjJFDmQzCFHDmLxZQHLme",
  "key7": "2optZZ2S9HQmvvwxf63ocMPvpaasPzakwCC2AdruQjT8ejnB1EJVjgjwji8TmgkHZFrALsSNrxHKhXwwju6hwhZz",
  "key8": "GW3P4oEyH8F8JgQLdvY1kEFYoDzZ2m9xRUgrntuESg2JnSV3wRFzXFQXFu1Z6r3qgzKPxPFRBQSaTADfhq7JD2w",
  "key9": "2jLcFGimTh9RHxpMqbsZZZfdYdyFCZ7BsCAYsYL9ncmaYSURoY4Ek1BqnEPH4njk2Bxse4gqdDHq1yyr4WCf34d1",
  "key10": "389v5wQkoT9xKvMoXQqscWJrizxiyG7zfHqh1kXM3MAGAtP4LcRffUhbnmkazPeFtRxWfxoux3LSq6PNrj3Z2a9i",
  "key11": "3eBVYFHc4KT3w6F9rtJEV1tBbdV1gcenKpfJFjW3t1ZEJFfdc2Gd1i14hLWRGUDiEVbT7trB35yoCqb9MNTn5fLs",
  "key12": "5Pjax3yjLfsofMig2tTU3ku4PpS8H1jrT1nwDwKFrBBmig3Z4UKKxfCTofB3iCxuchD66bdDUi7SwyehTmHHKwbw",
  "key13": "38vPwh4NZw8c4eBCsnYVH5tCaHw9JkTp7aPK1owgjZwqAVUwyt5vFaNC6opDx63XLA3GAJxiPA8QMEgCoBkUa2K8",
  "key14": "5kE5PxJDhT7JpgM7xHQZM1EsPggxdehA1WzF42e6Ymnhnvm81Qm8t7cnZC3hNyq9B1P6TLZV2EH9FB25ECWR8Na7",
  "key15": "2dF7rGZpiTuqn3Z13Ayz3TUzuQKhiWqFkjubWot5LcZAX4NrHRZyS5bR4RjrsF9G5DVKc5TELqqhNHH3UmVkCmaZ",
  "key16": "4JebaYPumYGqC82Z8bHo16LRzfaYCsAcDwF2dGJgZ3v1hpapjfFvy1qJRU2EjN9SPSKLNqUmNRBkvrQBfGq9J6hk",
  "key17": "5RCBK7UKwZbu81rkYKWSSmyvsAHJE1u323CBkn6NKGJCPVHkWPem2y3bfsiSrKS15P345oeAKw2ig2Xn5mBTMsEX",
  "key18": "FSSHUcN8eGLgZHAFcpZSmAb6mbvL4rVQbhCYAXXwUYzCv1eqf7RAHThHTtc4KcbhS7a21Qcgecqdb9S5wwuUDKC",
  "key19": "5e2bWX8pGB5MRZvCkfeniqB5JeN4nbdw4Bt2dTzoxPqmkLksZpvTpnWGCeJEvt2jS4AUDFpkbLMpT8Ch4Zn7ogGB",
  "key20": "2V6d7r1LGH65y7tvQEc3bcSCX5J197iF4A3qvKvWCfFUkL9sS7bBzrJkZANQG7n3MnMdA6Y1Ht4MLxeQ8A9Pweb1",
  "key21": "3U6WciahAr8U4p7RezcZbwLyZCkdooN8JQLK6sa2Poq5YVpox2HCYbZvrhM2M2UV3rX5WgUdx3LGiTnfQBw4D7HS",
  "key22": "5gzDA9ZP5kXj6J4qsCaT9DXTAj2QjZrHHmjtuWXjyiKNV33HvnMh2RBiodBYdJDFZybs4RotQC5Aj6LRwu2hUJ3w",
  "key23": "TVQtQioB8jc1Dtj2WZQqEHNqoRXCpXyLKaJGXy2HFa7A29bfNKiRvxrv4AanGvKKk1oB6cQ1DdoivcRnsoXRewv",
  "key24": "5GFkmmEXvcaBJ7BmEsJFdom6mgjhmqGHTtQFCYoYkeyVH74itxehU5EpTzJZzWnmPiGQYiLgNri9sBDQFrqfF2NE",
  "key25": "skVEo2YHyWY1vZyNFhXsZvz5UwMnewSE8Z3zWcLfmEqq5NTE5nD2gw3TqbmpzryGwgLvBMNdEM7ZxTLYRCEmkWj",
  "key26": "2rcYyEEcLaaVHE1HxV3bBJmfggkVJ1tU2oMr8EcShysxnJTcZKTv3NYDr7q9cHHG3agYe8yYHvvbYjDy5ApEFg8p",
  "key27": "16gJLqJz2hSd1skntgYERkNajLzTj8QG4zqoifN8FqXXW7gw5yUFSq7fnKgLxB596HDENTKsAvCSF5kQNZXZexF",
  "key28": "1yh4nNfFvVdkmsskxD12u5QHXtWWPtp1Uxm8tjBMdxCEMdbL5GemAHuvxnrtKSzj6hWJ4WkobNQ5i98wjK9BDx1",
  "key29": "2ERRjjoZ7X76PqpnxSeXWyoroisMciMx1AvAE8fMcqacs5WFopfysfpicUWU9qwfh251AQnX8WhrH38ikCVYa8e7",
  "key30": "3qH3zHTQZLoTB52K2s6PF9cyi2KsAyCLE4WiwAHJQG6VZdpbKnJxdAuedS4JtkvFeNBH8FBBSLz8CELzk72vx1dv",
  "key31": "3Uqiuxh23Xzdj57488QHXwwLmz5hohs8i9xG2BqaQKVAVPythvLMjUaiDFC4AqigEAnsrppCNHXtHKgS8rhp59eZ",
  "key32": "4N1mhvj2LUuYcDSZrkAeUYzRrPHnKqx8A1G1HDq4pCDFA6E7MMgioEPaued9i7hj2oz5Y9cWJd8ZN74EwpjbvJsu",
  "key33": "N3B7RwjZKvELLadoFuKaMuh6WyLMqzMkyksQzoQURkFmrCEM8HTaga3k3N8y6FB5iRvXfZeawQPDKhB8FA5bZmt",
  "key34": "4dPQAVqxrjDue7Ew7gzkTKLvGRawtxpUC1dhebuFS5SrTnhQeP6JThcJrFK2TX2CSd9RK7sDcu27jBeUxNBKkn2f",
  "key35": "JRQ621FNWayjxq44QSNzsNjBeTni4pJJ7y1kbkDsQMZ33Cqykc34HWYYBG18wt5CjBHcnoWcH9411zQjCEWJcZe",
  "key36": "2xdsJsT82acu1mzR2mhPKNkJ3owGKAeS7GYe7zp2uAdsD5FLHANweRPuXBmgsUZtUC7JfWMmQShsbNy5tKDf127",
  "key37": "8CyRVUjD2xAd32GduhFZswRanGZYLka5C2a8yT5RSWZPP1yFoxTBjs4hZearrz9NzJzPspEsGBeyvxeJVwsg1qt",
  "key38": "2FF5EnxqhDuZfKqmGok7uyCqfxcR1F76SrA1W1c817kW6Bda99uUAQQRKnQQNpeLDNVJMoXPgkZoR6gJvBY6chvk",
  "key39": "4hRnRfFxkj24ST5Ugj2o7YiqGVKJr1PVis7V7d7kQHbStaiQKtFVodwba53QG6XcPyQxKkjy1FhiDJzCrKMVrjpT",
  "key40": "35zCUTHWwiD8gyHEHktQAn9zsJmkPhXnRWrseCPGdrt8fDCaz8XNbxD6PLhq86FwBn8pBdS4YMuaPq5j4Tey1gsB",
  "key41": "5Y6qcby4vVmH93pvRCWWs3Y1oiezujPsA2zbVdLbGJryK73aipbZodh3CXQeUekxk2izQ2shWavHonJGD4p9APKq"
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
