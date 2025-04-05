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
    "56J5qJdgpnTM6aHEaokEP1xSjQhzFkidsxXSRdMPBCCjhPpExKp6JV5d5FJg8Mu8xoXM4xpZVNLTkCaEfzpM8o7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VsBdwnpWNjm3hkV1FzZB3K1y8iUFQhACaNQDRWKj7NebJvzcuyjbJHbg6jVQHeEYnL4GvCiDxE2CAUWC49yUFb7",
  "key1": "4qbXf2d9746PMSPkk5aTgr2mYbCWBqu4YFGDrLCzX8NdXZLUhxpZTPY93StRYHXwCmn1fy8pPYJCj3GxFbb1tK2e",
  "key2": "2y7KarX4c4f1DVw5CuT7JBrFEEpMe2rtuuHZ41BoBw9Ui4tU5XNusjiFyQAPsvTbWVQviC2Ldoiju7chHFMDdccD",
  "key3": "5GtzpTrtwX6JDQvdhycRzC7Tz6HXRTNQ925BQzey1ahf5DyNvjmkKdgzWmnLUVoBsMz8D3F7rm6e5QCXcryemFU8",
  "key4": "4mhLvknGYE7E3Ldu8JcfhLUEmXfmF5JLk4cfyzdywL6RAb6iMDfwhHkCZRyN35XXXR4rUyHbGoQxxfkDt155TsYm",
  "key5": "Miws7juMZFYDEsT1VfdNTTTKtmYEdvCDFVBRResGBgjCLK6HjpseFJV5DrDiFJqFRPd49DhqgSpM6wZ9RcdZDiA",
  "key6": "3NJD2i35oYoTZAVswwHvuQSHmEyreuoQycTPSBfQMxt9cFx9VMBcmq8JavTDUy9jbJWW1x6jMj8havszL3uYU84A",
  "key7": "CEfFmvgcuYihREiVy331FwLaiwZHwQZ6exyyfDRRQZxyB13VEefVCk38pQiFwS5zZwiLyCgTsxVfVUtXt6BkQBr",
  "key8": "4TzrAmExyt74wwGspEuiUfxnBRMkQuU7sgux9Qoc1vT4KU4FPr62uKmkA44n9K2E6JAN9Yt5rHmx6f3KcXJXJ1tw",
  "key9": "3S6ihyzGJRiNN6a5WhaVqDNDgwuSDLnBkSoXLBq6RY7yeoLmU8kJz7EKsH4XnxYABd3yiGcA6msKBrEdXKusy2v4",
  "key10": "3t7ETQQTiuygT6agYWUd2XP3rJ6J6a2AHEaYvkAbW7vx1cccjF8uMku8sJDr8Uwd7BiF6PLEgJum2Yf9HBg8JsPG",
  "key11": "5WBnPZxBBeXSaLcKbhbk1LZpKkDGvTGfu1SaaEPQiXLDSgu6NoJY1RYyRCg2v48uc9Q2gK6dXkfMJBYpzLLz1Tm5",
  "key12": "4RRuDuDTgyDTRkEY7byzksrj4dLkYMtf3BbyN6zQGSHcciXyHXXTLLxLw8MiDVcKbVvZpVmDe8AHExygGDPzspqR",
  "key13": "4TG95iHuwPvfyfQ3T967g8LFR7q8MokjaF5ts74ZJS3XbcNEQZZ5tA6WXbYaSoHxVnwANJEiC6oYEUgRxkYYfnvD",
  "key14": "5Z67fx4o8CT443w8yQBtF2BfVTnGKYepdbsrKkiRbnRun77tp2xrtqqoYgAXKRCgseamVePrAEUeYAowwnXs3pAD",
  "key15": "2audc1WVXfprawp4sb1kpnVF6M66y5AhNp5F8j7h5pVRcffshyHJaUJMHaUd6rKSf3wfW9vPk9HTQE8CMNvQjrdy",
  "key16": "44H6D9Wz7cMDnAeP1hWvJasqApE3HpHUXBJd5NuN27sfCrwFB111CXxBFcAqBB2a5Za2KqrgiRV5znYSiQWEtNub",
  "key17": "3F6XjwRaKq6T6pVngiL3TNtSDcaKPGS31kZ5kYNa75ssXKFGrj3xtCJCp6Q3RohqvVZHT6mf9tzQG8wGhhAX4Whi",
  "key18": "4uk4wTARvyXdrWduYYRuhPSn8ijShNvpw6yewrNQqeuRVufKWRndHgrBxX9b6eXbHc1pMR6RUj14AGLPGerZH2AB",
  "key19": "5ZR2jXCcWcgjf9nFtxxj7dadFjgMGSriEwVx4tsF9u1V5U419Hxht2xxKMM7ugqtoGX439yKwnQ1GMAKdnetyx9i",
  "key20": "5JEqTNLXNtEw1rM7ktCwL3jRZDuB22JGkLc8P8wJpfncsUrybt8DUV2we6ForBs2dE51yFv7534Hk9XB7qD3fN9F",
  "key21": "3SkQpjC5qTf6At8cPfHHcNNLkix2jkFLzjsirYBiS84mogwD5pZ1NsEBXUG7dw9peoDEoj5XSRKUfxPNJYBTsfeM",
  "key22": "4uRoX6YiD2kSrRUt7Z8BvBtSnVmm1AutSYxU2qPZs8DDWzR41bsD63MgfgdxmNRzKq9APmYcceGpbw7uQwsR1YE8",
  "key23": "55WRj1681dsf9VCr5wJ7Bafnu5qe9BjnC7MMK9i3t1qzZ1Bx29w7kteDpkEh1oULwdXGU5KVZhPEaZ5yYjk1VdTv",
  "key24": "2QSGooL1MhysTAKPyXZfjk47rK2BK4u1YHpzUS3tQCfrVs2vjFtPxKjo64koYPvLZoSowvHigPeWphhupP1vreaU",
  "key25": "2UGwXS1qmNTxGoLxATaHtQNZ9XLj4hWWQyLqMzkeDvuyRWRhybtH12budfBtYKRoxhmk5FPB43nHg4hfFdSygRus",
  "key26": "3LL9vEAKnc9eB8RHuMV1iiwbSGrBZJm7Z2y1S6zKeW6cACWEduZBSRkFZgBZ7Z4yszCFVutP9uVkKpDhc487joSr",
  "key27": "5UxtH1omTySzFJUf4iTYBrgE6KJQdGmfwDGsGH4fqZyyL6XndCS5XJ5dkaTGX1Qh5fYDsNVwbKA6wUtPmabSX8d6",
  "key28": "2WEgVXg1YoDWk9WekkjshyJ79keJkjEza7q9iLtK9mceM1f2wCneo42wvKgsqkEaPpty5eHJPrhPPU9TdrnEJDnh",
  "key29": "5rfdAY31tB1PJJgMgG8cW76usBK52yDegvGTFDFPHwqU74LcDrWU4MRYkBfUAX3Z3b37SU9nsFJ54KV5SsE57fd8",
  "key30": "5duCo7YDbnM1qWTCCGbx1gRk4oigGdXV4HCQHKToCAyYpeUcoWiCayNsyAewYAMRiu7cjZ5mpi5PqCZqXDDRfMTw",
  "key31": "3razG7hmdiiiq6dSEugtBmQweLFATX2KaaZQCuXn6wHQCzMkyf97gNH4grCcHmiNMKDGh4ueDUjQR76a3A6yB3Hw",
  "key32": "5hLuXERW2JxAPVbdX7acERgCiszFzTphf9ZVhyJcd11mf4mXRd4TWdB3CZMYuPJKBknA5i4yUZcka3hmR6KHm9PC",
  "key33": "5BSHuFykDYJhz9Quqhf6moMEjjovUfwjhtKByMeXUv5enb2ZXLAgdvFZLap2odqPdmYrmoSxVCNNqsY1NGMHpVi6",
  "key34": "3RnUYwmxCkiHkhZm4e8XFUBSmY1ACuihXjkxFPiFts7DWxGzSP6mXYCcpXHmS4QU4QGDbtHddy2n1f7SgLNMS3xb",
  "key35": "4h7SUrrAFCWoUBNWNyP3EBbvrRYgCeb2sfmhJm1QkVz64DbymXugHTS1Wj6HrgmtqBJveBqyFXq7peV5MksudpTh",
  "key36": "5CrRKm6Jg7NLuR1Pjha34mkRJ8Ag82vo8n6RapvpkB7kAAttKmdC1zaVJosmKBt1KQF9bW5o2Nw5HEnTZHirx2S3",
  "key37": "heHnNAqMAao72EY4oEMqUHbfri1nQEZ38me7kVFtVzc436QR1TBREF2T7jstNbATmiuQ46XLGBEqzZXrSD5har3",
  "key38": "63GQStoPjbhwHKpg7qKw4B8EJGZUq7WoKQQgKdeFGnn4QC7qLoFtmUxGt9Hn4iQmKqD8E865eff2iwtFCCGkxgmm",
  "key39": "2HGXSmiVS9f2rAGdSAEk3715hn9VvWqW9GizDY6PmAxPmPQW3LpE1Uippm8svmow3PvWcqtHtRJ8kAyzYjZwRThZ"
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
