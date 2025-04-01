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
    "emRL2CmdsbDrYWEmiF1K3f9Ddm8ZcFGHdwXngrAsUC6kRXRdhdBGap9MWAAXyYAehbJ4RsZtDJaCKfKLPiuK15u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbA812W2oFsepPL6waNnsE9hx9ZnF9oSSKHxRmVZTMvjbmNPJJn5DF7YQSj6yEENgFVmtDZP2XZTxbXKG3Esqop",
  "key1": "2gmXcCrGWH7hMhU7Jjz1RVsxvTCtbcytYjSpXdhdoEGaHPb81TSRqvbCHnWFcS4r4zpw9P7VVwhNpqdMx3gPBth1",
  "key2": "3cDni7JBZofD7UwiDw2rKXHCdvHFw4NEBtrsvwRxkYQjdrsGaGP5AdvMFEDFLwHeCRFanMgtsW9g5hrAruWj9ydE",
  "key3": "4x1948GUL4PDvdpbrP9RfLNztPccWANhwSHgZLea7TQjY4zmwcyWtghqZvb4iAaDVwbqBuC7KkfgSijcnQVGou7W",
  "key4": "3sRyFd3ZXifAopKWhdstfLDpBJeiKomxphNDjTut1YFepkijyVZ9EySYBLptoJtWvu2aStBa6kYK7uWpSXEtcgL5",
  "key5": "55n5LbbKazVtuDhQSyxNxkatjvkh6u1Poo8vsDJE1etkhCuvRXFgZQJyfGCrg7Gx3M78AakHYLTWCwkBsFoBceUp",
  "key6": "22XnoHL4fhpYgr3J9YkT9GXM62MYeJMyB1rv2b5BX2gqZh8pfBrHojGWpQgwjrq4c5qFWbS4kvBEdUnpLFZYQCMJ",
  "key7": "j3cUwwhB59Q4w2GNsBKvQFmNU9sHZvHRf2vKGfrvvPcprks11HpZdQnwVoCbF14UBGjY7mBSTHDvEVckAMvYpV9",
  "key8": "61B34nDsynxp294scB51HUfZ3Cf235B5kJBzVVkbhArKRTooKtXwoRSksq2xoHmtm1YxYvXvd6k54CipFx94Vogt",
  "key9": "4rsNEQKuC1pzj8952QSewUDz4DbXRB1iTKHDzGFRHbAj5nKAUPhmxceQbfDBwfotu1PxrnVmYUYCk3TYqejd2jGk",
  "key10": "2b98s5bdRDoy4NKLvALbmwbyy6xGf6MZMkK3NKLG2y2czQmzpDjA55vsDehpZKkcDeZMsKDd2WTmDDLuubcKxrkU",
  "key11": "5Y5DqeypEvkV9Hn7X5TgzFDMMfxcMTxpQk7p2HhuAuoW8dYyYTw2pCVzE2BHpfLRHhqFdLFJLVu3hMpuWCUbPK48",
  "key12": "4xFvuaaafzQpTnMxGuMtEVJjggttf1vEetcSMjT4LgW8XNBvQEbrkf9HBmzwdfotR1o3zLXPYyq3zjzEb3vr3mNm",
  "key13": "3wGpohJnHkuo6UMrdWpUZUvRtXgu3mpd8E5CFZpwi4UB1weRTfCtK43WidHSrWT3R1ozFQoiGTTW8pj2qr6be5Hi",
  "key14": "jMaNpgwvKGV1CXKExwp9CYUkWrmQYWgjHsUSyr5opbkbz4ynsE3qLuMMvYmFUYjQLniVcAdo7SpuiMzE343QJ14",
  "key15": "63J27zwzcS1KwbFXoz1QRme9RXL9PAXSA1yCbgpefgkAUhzEWsAp2GwutQmZ6L5tZyFiR5wLpsNL4TNByHw7S96F",
  "key16": "4qcG9m1dyJv1s5UtRZv3K78qPtRTpQ3siM2vfSoxNnZvYxzuzKuLEm25P8pzkETiQREuQwidTiKcme9UFWUZDQBA",
  "key17": "5xTMMEM5T4Lk1b8Qko5UgFGehSPzageL5WkUQ8kzDN28Kgfd5jZ6e8KRdMTx1pDz1EStnTzPkBsNX8EVW7pKmQYC",
  "key18": "5SZoTLNLYAuqa6JnXkxiFBDTaV6vYdR7PGwNs4uebJcARA5yLMyTo13xdXUhc9A2tjTFSjgz8NJN6EUC1rQJexYC",
  "key19": "cqg11saxj8qLR1w7VtYVqMkxoj7KjaqzoxHVcxhGqr5gECMA5KP31Akm4soxxvfRpLsX1z4GRLGym74Kd6NVf69",
  "key20": "wN729zQpokMjM1PhFH26mDqDUrAJyME1R6jZpFmE78hGgzKqdvzPx3qSceUp8dCuuDA9RTGvarBJ8PkXVdGEDBL",
  "key21": "33XzP199gnDuo5o8hs9Zqs9hJYj9QdFjwe1pP82rq2Ly6vqKGnoXhzxz7At5PjZgCTGDSSxLcDNWRz3edBaD6FAk",
  "key22": "2JUugTNEi6qG1UT5RtmSbqvZr7ZSA7EPF93F7f5rHhhVotHg3vrTtAx5HntnS3Uan7VnX9hp7uJx6RmBj9pfWdWJ",
  "key23": "5ADqppFDsi17jjcgi9ayCmUbWNU59PXVKzE9ZujXUuNDj56jgA6NY2EPRQHfSMaXxatBhJjs22Zk2pNcHDmfmmeq",
  "key24": "Nd2j6GEz6eUCWw3JbRF5EUePoLHQNyvnqHTgrycMZYJBs6rp3U3WXFgbo1ekdzz4Z53xoVwiXSjx3juk7HWZcua",
  "key25": "36K7133to1ft4pLVHjMFqcP18guCo6WP7F4s3uG7oN85yQTUw3vndKxVHpRkP8rxp7gmUhoMUjMS5edcnYnt8KnT",
  "key26": "4Q4fL2JFsEfy4B29T41Fw9p6pwsH4wWrD5Sxe12c3Zs2M5acQcse3TceieRV3D7pvX1mmsjsiCtpsxiSebHnuLzL",
  "key27": "2CJXQpt7KfjfDprcuUHJeqSmdCr9kpCudzwx54cKheHynkbrBd4gV3f7sioM1SmUCih19UwnURcDk4DyzDujPww7"
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
