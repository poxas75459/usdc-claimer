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
    "2Use6xD61QZLWDoaEsaePbbeauoSwXnBsHKrckUAcKAwbt7gdGRMDVYAo2eFE7fwnoM4GyKPJoEBYRbrRy1HcwKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6utvLGaKECkoEcmngXQPGFd9B7DmSeqcxeYup8ipHZUV2zfQs8HoTjm1EZGAGBdYDqHqwJhess9JPMpxfcMFHK",
  "key1": "5dV9y6msNoaEdccYS6XDBbnSyVFRK7Gewq6yaJjAmasV3pmSCNhepDTHAVVfmxmh6KxKzDZHDEDkK5qeo1aKGQnf",
  "key2": "48z2zdf5WSCpaKdygd1KLpXMfKHFSDj9niuMREwJaMV3QdAJK7A3Atu5TZ6s4WdK6pqMbjJpKhShCSy96wJCmTHV",
  "key3": "2yNBxV2HsGb6M2DACbN5Lq42RPWywQG8QBfYM6reJgN6RgGsN4mGeYydXpTg9P3jCTX6q3C93zCfzmz1c32gME3U",
  "key4": "3eoYnDngu1CLGNBvbug6pCtRcD3NuVFmDk6uXJYF8mkruNf3g3MrjNcq5LPjnq8Ef7PSjkG9YqDrZkgxuJcU3VuE",
  "key5": "3Ev8ag6XDF9Cdz6oq6VWykDNj3y1WyomU1NXrx9ZQujaeVsg6CswpAt6XMSrB1PFeptBeJHJ9veYQ9b75puANNxD",
  "key6": "4KaBUyQ5nh8mZeJMR1QcMw4AWY7MQTjsuWVu5ZMmtnnhRzL8Y2RAsk4M2zLwHe6ZkrS9ZpqwiFPoabAhDHLha9kW",
  "key7": "4isXpGgXsmxkwH2hbpfqQpZFhQPvGuXjZtMuWjTWfKPvGtpMjiuyUhnDF9yFW7BnJ3eBX4FpnME1BtRyiiutj8oC",
  "key8": "41GPDAuZ98WJrVaWRt5icnH5zb8ss6geszrbJGA9HnXFDAywycJ6JZg6w3wNhNmMYyYqep1QgY5oXsQnaMPRT6Rw",
  "key9": "2K5JWjpUfgUfFhT9BVMa2dkJjcbHMnxDEqNH3WAhDEqXK2UUQQtnfniuB4dktGHGJJeDVT8ZrcFGmRqhAKA9Yez8",
  "key10": "3nd8D5AbWeDArE3gpj9R1iX1um6TtdfBGzQq4S47N4dmF8F7CdRTLhYRxyiwzn37yMgidGuKziPvYAExXHYCXkSv",
  "key11": "4fBAdbcMbzwAfGUDbFSC87BK8s2hWJD4JV3woqB74Ga5h7j7f5xvjFTQWEeEdeSfX7qFdkGp9uVf7gEbLyLz3Uch",
  "key12": "3TpMSbVkcv7W3StUVrtjRPzpt6XyEQTFrgAkj796MwLD6ZfrD43r9ThWrE4AQerHhnToJ54VTbsJKpLMGqCe6zJq",
  "key13": "g15YV8rh4p1tyq9oxVd5aKodJN8oyzF7yNkdSt6d4p4EhHcBaTTGxZXG6h8r7c5cV6bJ2HFKR4J5mMY7Lv4c2Nd",
  "key14": "2PW9KY6DGwRiMPuZXAscRt2aXrohPV9A47G1EwyYwTb7ZDt5TFeS7guhPnFuhd3ftx6AAZTfEYbzSPxDPgyV5eR8",
  "key15": "122twqxihHfMoGWo67Pedi9RuyavQeAGetnc1ALm182WmhGLi5bScQ8oXYUtCfNFrabEmnctKFKUaRFU56mwbBhD",
  "key16": "4oDzdmk2kkpJunQ6QPSSXNtvvpnrzW6RVZ5Knr5mdXnuQBFZ1prPTpmMLpSQuRkASqZ7JvCjvvkgfUtTQZUrc8EM",
  "key17": "5fvqegK6ugx2mDeH87Z1vsr5xPBsLecgX3UGZCfssA25F2rPAXZcEZ7RuWwqcg3a9y5D72bToGTW8N9AWm53hVHq",
  "key18": "4rsXzQxketKPS5Z7B6BevS9ceBSSmkSxmU6EM5pAAWuqcEGiPyupXfyp6bzRoHNmXorNH4GRhwdmLHU3jKZqYrXG",
  "key19": "3jfnTirSK12B43moYnQHWCPgx6Lsq7SVduTQi316T1cJBLgLf12XMoe7ihHMBfjb6gsavPQz1HVpczypnHV7FS8f",
  "key20": "2F6zhRdgxrL6mJvjeqCXnZGoVRLV9HBuB5AMW8SLYFF5uLd3WgbQFVn5rWnqqq6df5VAcQ8nFmg188Zqa5vYbM8T",
  "key21": "24zH12bhEddyqoSunqF58BAqbLrjzzVPWq6FKJVBmqAenXpso1V2rYM8fAtL4apj5pBNJ6sdeMw83EeUAxdH5nKo",
  "key22": "Vz7qoRKqVR6AZRiTzhgAfefkzG4eLt3fH25DdAXBZNMvVGuZi7T7mUPdHvJFkoBJB4rDbDpyTvu4dCMFr6iKQXE",
  "key23": "4iBxet6P9MGhjfULmaLCmy5wThk4Ynzhf4ganHocHWGjsapKbMwJkqPhh9hX8mjtKMcZvuPezCRVjWP8dHJWXGrF",
  "key24": "22pm91FVhCSGQMKK18WzRJLsg2WF18WCHhmEck9t9odMkcCaWSwQwnjdBhqFkc4A8yTe88rzyTrV33WbnKU56k6E",
  "key25": "4th7GnKb9bDzDyjzKwex5n3QrcqAbWhGQqMntgnBbu6BBApcoqVUiUbpg6BJaxwdt4u8yynCVuEtzLxP8DrXPcys",
  "key26": "3hBEKiCKRUgRR6uQHQmFoSPvQEzUgQkHF69Z41zKWFT6ztj9FHwRaBS9nCz3zoxWVfpjbVDy5vAoZVL4QWeQjFnm",
  "key27": "2pQFC4mGqjtQXH95WHzTYzbqSbpGeUpBh5aNZJDe7wbo9gs9AdxM3eG9VKUDNVoh3c8oJACTyxgApZWvv3o5ycNo",
  "key28": "2QRmN6qNrMX4GqaJz5s49SujqKdpb6YfwnxgsbbUEowr9PbUzQLHoBFMbW7PeBKBQjak7fwfDVCE4QqzKyv92vuW",
  "key29": "2zPQLACiPnj1BjTfyQ5Z1SvQw7y7njm3JzwTmduyeuDEbStqQ81vJ4LDrYwKn4DXNhU1KmZt913DXDxjFSEscarR",
  "key30": "5pjQApGzpJ9C7PsvyhaFiAb6zQLnPcMuD5DdoazFV47R6xEACvyMM86pCwqAZGecwgq8ZYaHk28NpwdmXqewmhfd",
  "key31": "5ZpmPS7ZHrQ3e7x37cHXxwEbSEUv5vxRL55d2VaMHqekWmdJRPi8hke5Ppjup8QrbGHSVs8AsyKBK3jzbKu8Ze4M",
  "key32": "2MevCExaBmnmYNPywVHVgZZmDEpPvL2iVixiBmF8gByzLBTzUQ27fcXJ2tuin65hK9AuLMH97raLqx8YoYe4tAVM",
  "key33": "2txuB2PkNZNcY2xv3BCD1atDsAyBE3QRwTxVB1hmHkaJGYU7tK9zDHQjPD1uXkwpvQBG641SZne7f1VtLDXoF6sU",
  "key34": "fcre7q7GhBghkXCSiNmhFN7kCwN1yrpBFJTn1pP7BZcg259WxUrpQ1dViPQ8tFghnecKJ5ssjPFZEbr1camg5Wf",
  "key35": "82d73U4nPdzyx5hgUzZ78bGiHr29dwGxN1QB3e7f1KuAyDwD8Mv1LZc14HxAnCLJ24DUQ2TrqQWsCn79tZauLqp",
  "key36": "4GwoVe1Vdxr8JuPwBvJqUVr3cdoEivguPA4NUXAj9R1jLPJ5aqh19TxHXGKi59pkdJp2a8vhVf7JMUztT8QtdZYr",
  "key37": "44VJQZr4EVZ47tpmazgcNdEmTQUNjZ4CKsX3xojKQthnFZLV7wXHU51khqKCBaV8agBMzuTBPwRdZjd9GvpVhiQz"
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
