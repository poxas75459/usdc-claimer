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
    "jtQBQnArTKxSEYR94XXMp7HYdQdFNvV91LR7CgbibdcDgkEu7W4ZtthqFo2zVSKdP3k2f2TgAHaT8imqZ44pDQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGAmVQc7y7qoCjmfT2XGEBVbiSj7rUHyhkSYZeJCnwXigwA1eX1HhVWSyZfG24U2UqPnYZWe21Rz89ZQGfVTZGN",
  "key1": "2nqctXF8aW58yd4ohd9K6YoKaSnd3yZ1Uv3jEMzRyNVNtgGpb1MJeGbRF9AVsYEYxbM2hke1eLZuuqGayo94zYrL",
  "key2": "2gfeVz82JM4Tkdyd7W58sGvuxJq2hKtp78RCKqGZpJMu2AKaG1D7FyhvmF1pdJW2F5MUbaL4nV9wA7N47dPR94du",
  "key3": "4US1YtH9kfr7ff3J8ZPnJNXPNi9qWcye8Y5f8YdR5nRSxDRgo5eojUWy35c5J4FFHfy7JNKQErHq3Sf1P6agJRyx",
  "key4": "3iWEQApu9v7ytUPt5Fkq7jmqM1aZwmEvc85kC5ahJpVEH874M7nHxtPz5g6CNQbdbBWhn1CMPRTbRukYBfYYZC1M",
  "key5": "2yuBfpH6HqW28QWUjdRbkWEud2G91PgyUcDtBrpEaFNQ4XspYXqRrZWuJA2cGMvtXhqr3NdFXKeAhfPFrspFUhL4",
  "key6": "5qh7GWY67r7P3RaskzhFtwoM4f2yBsvPzE7pBeXsWHvQnHAFtL9BQV1eeqxw8b4wj5hb8waRjRcUXkLKUUDrx8Gt",
  "key7": "f2EP3JcmQVtZtnGvtT99hmxhQzUFQkzpNN9AKET5HdyMuYep2ufqEsYb4UBR1sTL38zYHwYvjEN1DpD1sAzT9eL",
  "key8": "3TyaP9pY8LZFdzJwih6z8YoJKG7HynaAvHPRBaq1DsDEGineo2VvSXjJWafppKEQC8AeaB9YRF4iHT63xREsiJER",
  "key9": "4MQcvRZBHpNjsTWUB34oHLcoKsSiYQMwiPZRfB9GPP7U5iGcCgq1U2HiS8RDpvS8iP2s4qwEniTW9JfnAeTjcifM",
  "key10": "2hQ3cNLURAknPanyfuRrx4RAQZRgziC2eDzcSPY7NH1YzUd59rfVrwEFXAmtZvBDhRacbQG82zhfoeiuJP8RAFTF",
  "key11": "4tTNqWE2BMMaAS3h3gHEn8k1FrtUvwc1J3FiqSN19MgxgXWHn7pAJyfshuQUHd1x7aAWuxwYjv2YLb4W1dcCwPwi",
  "key12": "3CzNCZVTPMArLwVKT8JTT296qVZWhgRqNTtnwwy9RdCyepSjLaEQj9fyDhzexh1NovWqZGZytSTmeZxsZ4hEUKtE",
  "key13": "2CvC9FzDCYFLz8tZpsH581xmCk4r8CvXZUKRT2EdxPf1MucCtfP9ZDnCcDnYht4UACF2sv26AKmttQmsZ9WhzJs9",
  "key14": "2Kb8cc6VQFKZWvaYDgsL1nmJKy5eFwqo6SjHjBWorP6inBcYocVKSdSeMXNGMjvKiSQpr5TqbxqTifSykKLHj2Mr",
  "key15": "647MqFpyfFHN665ZfNychoeHaBD7LkshiDfRmSSYUHVH5ufhjECbgPT8hPJDrb2obdehEB9mrNSD2Eth1wJ2dgW1",
  "key16": "44d8bXKfE1fJo77vJfTTsaXQQKkbUwffDiEoTgwTR22rn2fNdQZehMNXnDFtex5232BV4CpBqpuBHEESkDPVJ4Rw",
  "key17": "2SVQKZasyh68Lxkt1X4oaFxqGNs7uc1chZgLrQjZ2srw6nNm1ytMvMsoqG9tXu9DkhFWajo11DThzgx9oEi1sH8o",
  "key18": "5TsNjg1DmMQaTeW2C5gYaGwH3Y8oVQzKGcCYD3KpZUGMJErn6EbAQjB5e8sRyyNr4ekxGEbgY2CtWLT5FhiVB2T4",
  "key19": "T7t9xngakovBkSFdeX26Qp7ru8MYa79sB5bbAC2mXqtqHfg8KnEY9HGHHAwzDtEjUJk26kKHEwKPtLrVeUboAj8",
  "key20": "bUKynFsk6nPo46EbrT9JJh3tLwVphh56k4oNZFG8ZrjQTxt9BwDovB4fP8GVUxZCLPaoSxr8Sh4wgivnqqWxjdA",
  "key21": "5fe4bW1M3YvN6FyrUbqA5k1XvmYfApSLbDZ7WRYCQwkYKcZ3Winhzj9nivCn6rKxDU8ciGtUxuiU1UGJ7XKkT8Mc",
  "key22": "4hwZ6pT4JHayLxGPBgEFcuhmbSTLTPbnMB9Mb4pDPxdVthhPA2BraYFSR6zs44zftFinZGpcDdprwNPn3Mf1XLip",
  "key23": "3FciqiEkpmEzPxqThAS3NcxX4S7ELYyeh6oiPPfVxCDCXrrtDUsu5NoWRrZMnDdMVah5xhijnmJKLL3AMxaL8kKx",
  "key24": "aKbg94WhsfYwiNnfQVGHyYCcrBJHTyMLNYWu6SbLB35V4wH27mHh1vSXEnb3J73Ux3MaZMHRSbMUMt8j9K3QWir",
  "key25": "48rYQgG53UdRHke522rVLDqPzUvdEp916P5xbbw18TDtZcm3i4kNzc4eR48oxY87nuoZkppQXHFQuVudes3Nsyfp",
  "key26": "2LUNDM2xtmi4G2nLs79U1dLbGCJVDr56M9FrfhCJRJmVLigTw7dRJFzUS9NsMrpzHwcYzteBxPAfNrPas84xfSaa",
  "key27": "Y2VyHht9ErPXjY2hmYwNhc2EtAoazUPcavHyxizREFgmH17tgkDUVKuSR5WK1f6jeodRQfvt9AZGw67quSrr5Yn",
  "key28": "5bJaFsbpqdH6cikHHq9QDpzyWvViDcrpnLZ5VPvEbiS97uakvK9QT1hFjxoykZgC8LHkeg4MxbhqxzVHoEpsJZ1S",
  "key29": "w3HUHWzj1WResAWnpQJJnzvnuQPs6iXWprHCYnFTLzKFKbYTBbovmc3xna18yesYcAsPNCTya1Y9Y8TQV9H3MXy",
  "key30": "4C8Ry9PTGXSj4pqeoySYBJ82qTavpDLjbM1y9Bfa3ogXZq13N19f1wdccGbjm1CMaWxXqQfAEUp3bWGTDeV4rD7g",
  "key31": "62Dq1YL66QcPgtoBh3TBxEvLVLs1mpqLqRTFAWMLd2rC3UCx4itJTzcET1SC9GV2S85swCi7r7GuEMMYugDmyG9N",
  "key32": "4JmDRKzjdREyUBmcSdsJYMKG39CAg9Md8HJp7KYio9Z5isyzSgsjsLGUUvbLphdacgWpamn4B4QcMrLGFQGtM5oa",
  "key33": "2nZ71QdZwMNs1NhotFzVWU986JdbJKYn9y65b4BLCFnJfTzYtLhycLWLP77FWyNBBERTRkRNrf1FQPJ8ARpfyi5G",
  "key34": "5hAUj3XvqBXNzszrPAMgMFXprcSoEiQacEuLU9hbgts94e8ZUDj76uCXpEpXqB9MeHJNWBTdggi27T1t2YZ6vRch",
  "key35": "5v7p7CAV9M151HPM77dRACurCCw95XrhgTDDeTpUVJTCeD1V2bM3yZEnfYWoxV9KYCqGyw7G61WaR7qgnEW5KjSP",
  "key36": "5DPufyYFTEhWuhQy3JUiNWELHu1bCr4bVcsaqyfkPwHeGzzLREdGdgFrNUHN99BvFgJifhGB1imdNhUDHwxnHuzC",
  "key37": "4Dfj4jwdjitTR2ft9b3NCVf6Pt8r8B1r5n4JK8zBnzeyXhVRVRwHEe6j7kJutybLYWEHXHyWSjikr1F4T4jPeDrs",
  "key38": "5H989nv6yhbFTt8iYtCYDMid3zxhLafFNzwmRDuU3Qj1chjSZ1b1F4eqsaPSp4ba7ikmHuDDfKbbhZxWygJD9dgW",
  "key39": "3anWXBgDahxNe5gYf98L9ziimYhJaLEWi43mmS9Y1rp9j3xBeUwropXfw7UVn3iceqJXPALC9AdxNLiqZEyDtWnv",
  "key40": "3EbCVZzRVznrSQFX1Fwy2fJHH2hXdqDbHotFjY1Ed5Hemo4EECj9nebFPKcxFrrpBrLQX5FEmUc5Yn6nMFq7t3x2",
  "key41": "3PQCz59kf2re5nsmEaXuo1kJPFkQLoDdgSB6zFvu7Hn8XD3rUPvfv8E1gRJnePQM7ryTESeSrX8VR66eFnU5t6mL",
  "key42": "2EH8d3MRetLvW3esMF6AtgTEdDYHWbuiRruNTrFGkPUk3qTy9jgaos46GgHNPwk6Jw1y2uHmMHDgQDvTyanuVJtU",
  "key43": "48LU7Ur68r8JXt8oMDWauBpwUUCSLFDddbqmCbkDN87qid5emMSdNkZN3aJDjxZaBb3GgW8FwGgxfsEqQrvtQ7Ks",
  "key44": "62ZNMUweSa8cfoivSeZ4fr6hdTnLBs3ZL3XKF5Ca6sZWWushRfsBWrmmYYRSiNAsYnCMNeeFFxvjXTGYrxYSbMrk",
  "key45": "5EcLSTkx8ZriE9U5JDSoxHCenw8nepvQiEZyq5zFLLnwuU12HKTbFSXCTW8K5RDAnxnM16FzGuh72FbFq274CwWH",
  "key46": "5P21tY9Wrdh3g4bh8b1XgKXpjhSK4ppqkNwWvfjPvvs9ZCmELDgzQ6Diu3Ef2Lzc4SatFSvJmiPg3JFz59yJNLxU",
  "key47": "22nF33ccbKY4WMwH6ibwusfmE5SVYzbUM1S1AKBdfBCV5x72dZ2FbddVQk4RyU1shQHEhSQnAmsq2SY7yNro7ZU4",
  "key48": "2AWNgTbViWBvKqPQRPoq3dzNoELEGx7dL2ex7bvf8PZGVGPXKuvLNUERAb2rnkvp9NULXTRLDmMpfrCZMiwBJwp6"
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
