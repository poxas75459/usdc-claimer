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
    "2HpHngTMksefa61Z1hr1XL1Tsrr7rKn7WzeHecyhUxVAnzm45sr2YuHPtCXPS7KgoGJ8tnCdrqEzAvJkZJMzPU4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azDcoCGoUFGC1bZbEHBTw5Fbjj6yYZpL5qvyWJmqc7GYYqvB1y98F3UbTm85gPFv1fk8RDLce27Bdk8pXGChXCR",
  "key1": "Mo5cbCcV3CttY65xE1cS8sRq7zazyi5sCQAFkeKs5HVda3s9AfsDfy8upmGeNk4WC1co6mbDGsvT3CsKvCxEZ35",
  "key2": "39oYj5fmbqVijdKkSQcGkiuEuuJaB2vWVWjt8oWtuMAf78CRK3wP4wBW8NnKFq7f8zy2BLw44syUw54sBWzd5uXo",
  "key3": "3U3Q8HZacUDoLGhUHfGWWK62nDaCmj6vrc6HFQ8R4Wf7NpRYLgrVkECjofUufWKDSEs6eKn8pMq9Cz1iQVEE9Gi5",
  "key4": "Ch7VMnTgGTkyh8gyY91R1oDt9XXymb3KcMNrEfQStV2M65H3TZ1iVTGpw1pUmuR6Dr2SyuJN68eYCEKaiMKaXst",
  "key5": "k83moYq3pnToGEjbZPpLR9Ts4f1L26BYBCY6w1tFsdjPiRM4t6x5d9AmJqFS7UfQcVB4tjQSKJaSiqQrrkCFse8",
  "key6": "2B2nYe59YYmeYs1duW9AkTCJiDUAMwHZZ3MgckjXT9QH9KdGPmznNQWdCw5exekzoagR9je1E7ZfQ6jmkatcA8NH",
  "key7": "3fK54GR7RkcQPMULocDdC2BjQb7XJ8pHneXixVfMNAjp7cQ24rB4i53yfLscBQ5SEWyN6oi6TJi1MS2SUBWeKysq",
  "key8": "2seimL7i4cNbzPbdKLN9MWizSD1dUmarfNXHET1LRgfvVmzgPv13z3txHCz51LDnSJndCKN6e9XpViaJeNqft2Qo",
  "key9": "3UMAWQCyBD2sFU6JseTNgpFpP2sqpnDfstMTWzG82zBE6tVAszojswecb2KefiQR9JdKUUR7UutDBmANTTrFDX3C",
  "key10": "4tb2H19dUse1jRSwmQnL2XGh32r17akaPAy2q58atiG9JfYUW172T3wQkZqgTnhxArDsYesPxG3rdBNFPjwPhwwm",
  "key11": "4vmQTBaTpdoRCxbK8ia3EdxESPDNh7KfhXmVzeMf1w5J7vPdYyTaHoENbxKnBha7KKQh1YZf5duQmmhZszXtEN4H",
  "key12": "4SBGyXsnU81z6wZC9BkSSan1iFpvQA5AdhpT2BLNQP14pbXcBk84fuxX6BZAZxbzwHKGKjgEj2bNDkK15iBQwcLK",
  "key13": "2sQzLPC4cZhszQhP78Fmr3mhLZDajFzRUXXQKxPLGrR2NF18yEc67TPpuMndKs7YrhYfZCsAh4kEki28T3FEzMMc",
  "key14": "3LGftSvYnNwhCq8v2TTW5TZtMi51pLQzUkih3suDFwuALe8HrAG3STwdR9Zyz1jNUAJCMPch2drq274ysyP9smtn",
  "key15": "2tdbRZLKDYHMbwSqMF2bRFF6bknSKPwmtbpyNWcQ7qhMqhX8Z9YqDPrh4YsxkZJCvb62FpRTuK8eLMGDngXs637t",
  "key16": "2vXieU8qxdBLNqchhDiivfr7WoCRXKTaJPi9dzuHMLfwx5vY5CFiW45mvEnPrma2NAgr5g97UDbTRNPcWyf8ycXb",
  "key17": "jUaMBsq9e1Un316NLK82hn4FJWkv9TacDx9hBEZQuB9vVDXzHhAC5TabuPUTSq8nkeu7bgPwHgdDRLooNrRXquv",
  "key18": "2vRVGPDKYxiEw6fkTppaEVSKAhaBj8ZbUoH7mq962Mb7PvJFrHk1iTr4hKoDUQBmp9EkFn8GuWXzAtMEJtXtoGXn",
  "key19": "hSBAsgxV9UUtGuLQwjWAL4aiMh4zKLy1oL9KLFkjyvbhdUJGRqtMV7MJBaMGjhQu6ZrsMEAzfPRXwy5z7Uj6nsi",
  "key20": "4A7EoLqX4XXXMHWakXfp5vKfQUhXNfiLrh4x8EcZZJvLfHVQACkfamL6BPWArDoCpkSegQ4UULPc2e5kaVWxK6S8",
  "key21": "JeQn7CaVBZCFnhHvdWKNaJqK18H3ZoaTcbniXbpwtgQfDUzZ2Cjo7BvD2DBZPLFiUXuhBabnXYg5fmakgPobfee",
  "key22": "4zXswkhzcNU1qQE6m2zSwNqpbDjGrhTxNArHyiJLXwXeYwPmiMLfDSS2MG2TFfKz67YfbXyM5Di6MCNWf77oJWgB",
  "key23": "4JqpGkb9mTEr29bgSBsuS47CetcB8XuaHuSnSaWTSiZgGV7AtRZB675Au15BcezKinSVVsQP4xAWBeYV4ExsLsL8",
  "key24": "2fyUgXpkSmgmKEij764Ji8hVJyHdyfv45cawLPECxuYy42aY7CLDp9baQ3os9Kb6SXXseY6u2yJRHBvadmQnMPfN",
  "key25": "zvtRQmjaHCgyNMPYYVZ9UVHffpmNmQYNYqxCLaUn87FCDKudaNJQTQT8Nig1JqzijE3JNCt7zEvqsyaeXi1uU8Z",
  "key26": "2UJnsLmZFUAahjcBGdEboKwFZJ4P3deDePsR8115S86mBAwTCbutfzCpSdmcMsB9kHPNzmCRj8f95JPTN7dJWFbK",
  "key27": "3EBwrtmVkosLK9pVxfsHnKhhUsvWtwLarqZQn2bZLXnr6McHsoxedkr38QtH5ZaDUFFKmcmZutZxouXueuQRkPki",
  "key28": "335ZCLAspQJ25MV9QAfJFA2FQMPBghajZhbNREMHg6aUF6SxhALpHzMSi5GXVMrchH6hyfoRbcZ16AFceHHpHVBn",
  "key29": "5sMSxdz4zMg4zBVDe1Vov7toeyhxmxUUMnU5yMJoBPZ8VJRkvDAL6UfQLbWqe1yUth2mSye1uteXMUZLpomwgDKp",
  "key30": "5WRGjVJtyNHoZNLFX3EDNJM9C8C1sFZbqXv9jkemzWp2QfSdYZNTzedYAWxqyjsAAGxowi9WvQU8ZsHkK6XQvtor",
  "key31": "2MZmmuDsBCNmQJ6oUZ8JRkYDDFkUAQfy5VYAKyGHu5x6efLkPYHdAjf6WMZsWxXCEmxVfqC7TFC28fC43exqy5fy",
  "key32": "4s2s6gkSbJNn7LU5MuQTZ59VmGKjASxQnt3pEiHNdaAZLeEcRHWFxeGSN1jyUb5MRy9pWJ4kRtWUhQtrfAPZhjxr",
  "key33": "29DsY8dvWmKDLyoNuoF9PQaasqbP8F5aXJ8NYeNBVZ61i5D5Lbbp2S2SLLWftQUetYMNDpchKDGzjpMVQDvXHVxg",
  "key34": "2CmhNRPbVQNQCjPCRUQBeeVabtquv9GPSeMeUioGyYKjomzhcnjeTvA7sdvJPy4cha5ceyKJjyvNeKz9fPhUNZcp",
  "key35": "WTzLHA6euc9Q9N13JVBj7HkDo4iBUi7WoE6g818C62yWFC4XnBXuiivJbYUD2pHSYCrFXinEpF4AQTqY2D26jH6",
  "key36": "6jc3qe2Rg2yhWZ5DayDgdKxEz2vukRKteDhwT9FBW2fZqRaxvKzUreN8zvCxr3yBbqerV7ajWNM4FRLxfCHhWXe",
  "key37": "324zZMq5YmWUCJZzQ1XFdot4Dk6VjVaMj6pEXXiRrArUmPVXNABHcpauKiyBp1LHFnB6iPQCKAe6SFSD6P6t3JNF",
  "key38": "YiUUpvazn7Vwx8tRukVvgAnSfFTdZeJCokfTHmMcb1MkWFLgwPyeu2ndbh3rUd1mtGVp6hTb6BACBoWvNNphhQs",
  "key39": "4krY73aZ6MPMah6fUBwFpG4dgEcqbQdN1PYorHwUXBPqT8vCSJDhRE8iUmwz2Ya9ATmxFq5jooxn54aA7FJjYpQX",
  "key40": "4brdg8fqHvRHRjqR5SaPBkD8F6AMGpcJ9ywPEZPSbY55QCHGcG1rd3HNiauQbEfSSfGTNTTBDyyVHT7eJQKsWTD6",
  "key41": "2W7WhPC3kYgyzJxB7vZQa72Z2TziBzjiwsBPYnESwLaNyg3mstUUpqVAg9mZQzWxnVM7YFBH7Dokt55wXnkKSz6x",
  "key42": "2kAPhKXMUuwD2sTu9SxEAnFPDLyfu6nsRsQSHpjZ2bcundoZL3bJQ17zHgZR7rdZ3rtSLctXpp264RodUHN7sZuk",
  "key43": "5KvaxSaVLsx2DaSDGGDriRaRdRt829UrwUkn96uKuF78yQinv2B8uUU7vv7gQ9jVjU8HptZf7VPPqctK74SG9ja4"
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
