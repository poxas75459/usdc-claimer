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
    "NszEsAmhDdxKauUtLr5NeZiUd7D4eRQNs3XawaeYTmgGpXcsEBxSt7RkrvASZJoyRexXVuVMV47UbDCPX8zEgru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRUvo3WhmeCSBkoigii6zKqH48TrhDvCfXWdfdpx1Km1jHS4nzEeW6UX8VeKjHvFKyHT5fhC2EQQ8y3ccZ6tYRh",
  "key1": "22k7mJdBmPvBvP8naKsggS6sR2N7rkgtZFSnjcrS9LtLfaHRdMxukHES8CqsLoaHHZYm2hv4xkayghx2b35Vi6Qm",
  "key2": "47SP9jAsLpKbWxj4R5Lm3DksHjPyMk8Kz6cz5h9URTnRf66TPyc66P2VLqNT242hXQ9WNEPsLFvXz4SPjNp5hQTr",
  "key3": "4Jg418dDc6Tyi4UJNutMj32T1Kw9HMJ8pGM6WCxgAfGYPPNCznreGB39qDdR18KSmvA8bjqKby7UDdHaomK6PtuS",
  "key4": "qkpK1bnsrX9oqMcdU5KArCBEBMnJ653ZnYMWwFGQMNJ132HAPBPS6f9eRdt7GTSVVnwDetuWLvRVVafYtwys7h7",
  "key5": "EqHP8Y3iEYLMB5HjmpHyJtJojZnHCiRCaV176bCzDWf7NKJo8QrWTki6iXuCWurCHHUQ7dmVYGkE7bmEpwn1zVj",
  "key6": "4Hk3mxWdhV2YQopB3eM14qqw8W3YAxCnUyCCWLacvjJiWShjrQaUq9NFm8zfqwyfepLCVqo7nU6S2S57QbJ7nsU2",
  "key7": "3sS5A9WXc7UXR81kCeTZZDhdJDbkpW1zEgCrpjFXY7LWHox4S2wUzNCEozBjz1rBqpi3bcENGsDiR7iaQVQQGs1b",
  "key8": "2iNV7vYTxRXeo523ZSHv4AdWWmyYC3zeLGuAMUVPLZd9FJneAhGWibCPKF4fdCFZAxghbGVvU7ZynSseXUe91Ak4",
  "key9": "4GdQTdHhMmTqsS9kBjqiDYbKbdHgLXzNQDqRxTBPuYuNnvQgrBQ4aMvEDX7E4XvaWYEiC8NaioC9HPDrdzrwCETM",
  "key10": "5nc49F3UU3dMYCrZuM3eMHiB7sqfeHPcu9zK8HzxeapybPxeHWwbnj2nACefpekVvRos5R9EVX3KcLcLiBe8YZ5T",
  "key11": "3qmsqebDvRqTYKKct6SCpw3ww3tR3K5xHmGnKr9Y6N1EGggPKoe997hapRBc9FgEaU936CjGRNrFr5KuxFpSyF2v",
  "key12": "5GcjHFYDaeSAP8jQWeMsMmQRMx3ECSJG7nvsqbNgEzSuWsk6oMv3iE5scLw22bzV6LSaf33P2badRT12a5Et6r1N",
  "key13": "3fm9WhVWkiAZunxREqvtWJgHq9b7V7ns7Wb312ypSR4ZTEn9SYjxpxcPGNDGUkE3rsUTCWyaqoZuR8WxWE8XujMQ",
  "key14": "2M6rHQu3XQe1ptyJQxFVoYkSQNgMUKn6cnMa3ynL4BjUjh7uyPPzVVzvPUrxnp8nYv2UsqVkdLHLuNKUwJt9T8qj",
  "key15": "5vcQhAyFdfMCA5kkQpCMjMpoUMjKS4JPRndDdR9mD4jejNvGajk5C9vAo9bG3r8ruJ7geTxHHfPNaADwG72XLbH4",
  "key16": "2iN3WELdnUdvth8WXQxwYqPH3t67yFp9HRp5pRsKwhAvdeNfov44wdqeYnEPcY4dBa43reN48gUy2oohi6BniXSF",
  "key17": "ckSkXfRGiXd7eqew5FYdu2AQZKF9KH1KyUgJy3Qku9Zrh5dwaUXewNDeWLFwphp8zC8HnkGuLPTg7vsztSjxqnW",
  "key18": "5R28CVZqwWrvnV2oUKyf7zvJHbUWPRUbLuEebv1bX6jtKqVAoT4fA2MB2xUFb1a1ipueiZoJ8DoKkoG6cUy5B7A1",
  "key19": "4a5FL3yRS9gZqdunx4ecJRXxGG3jZLPgA45uorQVqoVhTwAAm1KK8GaGvFwZMFcLtb6TH1iuPayeVAJd98SRpUnW",
  "key20": "5LvB9qZvsXi4FSH4HFDCLSVxeTWyKg7XPz4h3YQmydaLKoobXxtHy1NNee7x4jrQMJsXp7Wg9bLxWfAQyheWn7sn",
  "key21": "2TKRuFcrsHiUUuSMJNNS4hWc1tGbs9u7GAUsVPPHAaZ4ZGM4bSgeyq3cwmMb4U1LKSSYiFYef2jZmbDeUiZEn4sg",
  "key22": "4dKKGWAZ3HZF71Qv9MANbs43L1Zo5tqH5x8CDtZL3x7eEaJ3oHYM4H8CGQPsAqWNiCuumEsrFzHULTTxNr3w4BdG",
  "key23": "2yrCwJ7E1f4XZybYRjWi7iM8qfg9RjStBS2EBWagYnfRTVuG9o9ZAXDuZWXM6FM7tA9dDQESQwz43TkyE7rBodXx",
  "key24": "5EcE1fbHPSuqz3M2JdrUx2LBjeXC6c6EftUdrNaP7KzCFhBSLX3Yr6udcCXpyndERxaev6KmMmL848kyCXasnkpz",
  "key25": "2z8cPGbxddSmhsK3fBUrzNDSdpPfhzdAg661J8UvvoDPaLiWXgWrNFniab9wXdvKZzBCRmVKHC997pfcvS4xL3pL",
  "key26": "67FpVjTBqRQBdUYrj9x3wCTcXyH76a7hpw5WRZH7S19repbWHQ81hG3rxdEph8EoCUT958BLJAfvnWTJs7jiETbh",
  "key27": "2LcWxYMFcwLEcfMwwLj3vtYpx9PPQ17EKa9scvaZv6wv1ZhgsGQ4gJ5SZc7kELcsMTxASThGd54GH3oeYUqmctvh",
  "key28": "4zHdKVjPbsbv1ciarX6LUXdiYKK4Jjn4RiBMEp3PrbdL785auDDm3ahJNA2TnNcgurTNYpUe8jbnciVo4Pbzm9CZ",
  "key29": "WrXH6xsE3tTDrgLM3Jn2H23a1g1E4Lcrer7QJpB8yXhiq2W5SAwQi2hsQAn5ahTdEhGR7L1gVBFpK8gQVYLyGyL",
  "key30": "2h9vHf5QsSjWEbWk3SzLGx4CgvtaTpCk2uB27J5nw7civEZSNNkLSjwYfmFdx9bBYuCS9GafdmREGNFtYngctazm",
  "key31": "36Ji3pKHnK9FL6Vwa66Dtz6v6eu1MeTDqdoupELtcDgsvvpqHVRZ2vHtdnbhsR8VyZVb9QmZQUFJQt2oaJ9BnPjn",
  "key32": "3u9Q5yrhgA1V21M7ErNW7RaCqXetbaEt1aSNWgxzCKToroeacYb3WqbEuGDc8L3hjpygLDzSqng621Dahm7R4d4P",
  "key33": "X2E9Awomiz6sieUFvYRBwf8a6R6akxU5bQe9We61UjELtK5kzGrXa2fe7ZbrbQUdmm7Da2v949djZCc1faTRTHx",
  "key34": "3AQWPeJQToYf6WTu43vTa17eL3BAJe5SBP7YFyyhcQHZtjm75yTxmWkrnhCXcBuJ3CgGT9PQi1P7vmwGbXPaZhuG",
  "key35": "3HMCENJcLiWczpVXekCUmc6xArTeUQzoxRR4yzZHTLn9QKLeLx1o7dgrVRb2CKuxdQS1XUhTckFEqwEhEKRCz2bG",
  "key36": "42XdGRT3aKj37WZzrsBkBXTKYNb27EEC7yMtv1jqc5t68AJgWcKWnNhzRyVMXcz8P1EqAPZ2jvfveDBZJRtFFF43",
  "key37": "SQRr2BPSsMGtESgcRozH33dG3gJLTVAHgUfXjfQwU6TZrpghdBMtEY3smcWgCPgncgc21LsasJmyKr5qZiB2qYt",
  "key38": "4tJQ1CRQeivRwfEBrzrX1fJx9yAvnnf3zv1ArrjTfCu7gM3KorsBn2PthozwANGesqSPMUXmegwUgLYcRFnakcbq",
  "key39": "5ptjHJcygt4g4sNV6rcoDnok4XmoyZGEvJS1wVrfyd5hAZDP8w4yEsuwCdCGP88tzTiJXn2oY8uXCXfUZYsFJDQi",
  "key40": "461FLkKNJW4AoXeTjTrjGnaRMCHjnhfa9SwkQS1z5khHEcLFqRL7xHN2XhyVjphRpv64iTf29CdAeXk38D1PsYQT",
  "key41": "34WXYhcGB6A17VTrGfV4MYYe4QeUwTZMD4DtK3e6FbM4hSR7tqjGthDAVJr1azTstPhbYrQW3NWf1N8jg2G6YATE",
  "key42": "55ovDZAqcMovzHzmTDUsbHZ7bASdU2g5wxxA8aFSxSosJpmrt3qpsbrLaAcdJdxAdVQdXDY11uu1SSXXjxdYq5UQ",
  "key43": "PUw94UvFFgpWnGM7nr41TD1RDMjA6NYLZrR2DBVJHen7WzoG4Vpe67fYFpyu4qJ95x3aihdq6oyoAW3c9rNuwZY"
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
