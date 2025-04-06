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
    "4BMmYKYocx97ED8hmz5Qt6fHssDR7WjTwYPtLDzPgYgRuxKMT9Xc16yBDSFWhKrUeGoF9Nwgfmj6Vzvb2DsZp4gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6rtCggWAFjW5fnFEL4poUMQBYbEnbU3z6PPwK2pgY7DmRXf6DLFbbRsNWfg4k6aSYMayWQjmLk1naAoCCGmZEu",
  "key1": "2JjVTpU6FKfvoYsEW8xXHEApBCcZvRy3DKqA2YAFxeh4PnREQEjb2zDecT9cQxdzsTf7Neew5SsnTeP2yf1u75Er",
  "key2": "3aRSXpxQbfzuyQBNf5A9gftB6651QK7JVfAeZQ8qgebHCnkSfB2R3ia81EuuzEYiwS9agmMH3Q3L3s5d4F6yTNq7",
  "key3": "345KbJCinjuQW9xqg4gYF4jcktUHvECF8Qf5DQ1ffDtZ2NioutD6sVTnQVZvSs2wAwuHWmRsbPvsmR9Cy8SRVznK",
  "key4": "4rtXkq594XHGbHabLNKxtsUar6FDChzrERCifV7igtsxMvCoeVY8VdcUxgWJSJa5985wdwsBepsnAwtKDBTeAtqi",
  "key5": "5J3GkpuU9cgSWkNyguVHeu4c7VZMR8iSwruz4yv6mvqzfr1RP9FEpRDe9YamyJMrj9DbmNKx4THzmPr56cZgoj3",
  "key6": "4AYnZ1DjAHaafu9NT5pRP5LQeNnPfr1eGkQKsLwiHsU6GZVDU7jQLwhAYbQepgY1jB3mtnNyJjTpLUezMosnhHNG",
  "key7": "2GkPMKZkGrxvdcQyLzCNZYkb9FWoTRQVY364B8d2HKd91sx6DW5U7GBVyCqKZVYvPTEh7Y7Ye76uPzMHN3dthB9G",
  "key8": "46EvgCNi9nUKG7HfDErby2Dbs81xiBWs2QVEv4KUYNS4xdYEmEvbZzhRjNFFQkFNpKeDBn9dwNvdXvRxkU5qcWQa",
  "key9": "3uFVsEptSj8TNiPXZ5WeDsP9KQsciKsB8dKKdWnn8cpkWGS6L167kUZrVUbdEqSGJcedYZfBdch1wgMmBNb92PBQ",
  "key10": "4yd7aV6tNKKvg8GyCLEJd5o5NerApGGGmDusvz93kMLwYFo7mW6uFNo4PEXZaz2iG7oTvVt54tft5sDPBkfto9bL",
  "key11": "4ER5jRXRkyXFq7PkpdiTWP38Ynn1HDSkB6DrjdPAadDr4u1kbeXpUrAvfecn3dKobywA3gHRShYUG6Gx527Hh5P4",
  "key12": "u4xC7ZqNGQVwL23nQhkq1wEr1S1JusFWsiRg98drwf7focRW8vfHkiywBgDdHdN61HtZp9zxvu7pprTrgwAcnGZ",
  "key13": "3pQHyWmVAgFmeZSYGsfqZwheh6hjs7eRfRagGxbDgFJhd5hRgkx9Yg2uA9ZAJZXHNVqz7p3wMxn9jjBqguYusT5Q",
  "key14": "4SqhzvSpB5vZpmvGhRitkjJmXsjd42AuVTtL4AyYoqELVwJziWctgo14cuao5hZ9ALfuoW75VTrfq61d3UhLDjmJ",
  "key15": "4ardVf9G6fB5QkSatWKV7cBJo5JG7ZHWHr3Kv2RmfvYa6zfipbXmF16xvxJ53DnJWi9HdfXRuRLJTE2bo5kVyrJY",
  "key16": "4SviADjA13XrbE2DyZCy6owujYod2gEUVCziB2thikPoix4FDcXdkSW2dLUHdYEwU1Zjg9wQSQjHNPYijhYP8RQs",
  "key17": "aDTLGEd5dk85harLEcc4zPq6JbG74t6gui468K4zoZcVPGriCi2iAQzdMbaPaC8asyP2KdZC96Xu42HodgGF5fC",
  "key18": "5TANiL6M1Z64XnjC8UbL4L6dmXKFYqJFMFxQsXSex4wkK74m39u6XT1BKZo5hj9uff362Dz37jWpCAyBCdhNcKDa",
  "key19": "5H9k6nJMju2eV7JJjpipR9zf9JYcnoR1bdpP1yku9BC67Ah4XS7y1ntk2PWMpVdn6r7Uoe5juF4StG2ywjQYVoXp",
  "key20": "MYFVpLdFYspchHmaLLiSae73rhEJXVdsY2gw8HR8SFxAEKu9ex5ySrpk4BFDEjat2cTCH92DqrRK5DF462BMUkd",
  "key21": "5fx1QV8GnJMr3yYktCD9tsxH6i1VnFQhMz4jPVs6fUdNXZv2a53S7TeQ2x1XQvokm14yVJewZ9szhdo965DXf5hx",
  "key22": "2XFKWB3WCaNeWcFm5Pom2u1hQvJA1fgjVdMXp6j2UkjZYy2Fr9rdBNi2avAYwEBYruwBjZqqmi7yqRb8p1Miwg8r",
  "key23": "3MwcgnRNmmdBmRijo6HWwJS6YYURgirpga4a3ydAhTNTr3kQNNqB26cGniycgV3EV2bibs23Hb81BGXd2KsZms7K",
  "key24": "2Vc3vAi49Bcz8Y4pcFw3ucH5Yxy9WYEQYPom1Hqo3X3fCQba2FLohXT7pNE31x15FNjKbotmqzAJ8AwhkToaWU65",
  "key25": "2fmDppKQRv4ukNtdAzfk2fRuE9Ts4j6HXJs3GBivjpNbu46iKig5FcQyhtQ4DTf7kG4aesY4zGYNcnWkuFJDHnCA",
  "key26": "3uEovFmxs5Ye1Xz1MHjqoyZzuot6AXazPtaPD9E87FU8Qt7Z8rrxx6bM5WfzJgpLNthp4zLS7Vwv53XkUEJQm2VE",
  "key27": "5RqXzbXV6eHkUjcieH3qcYkygRTDiDCwJRviqtzJ9qHWYstjKhgq8RHE3G2RWZQZX8Pky8gHV4D7rjxytmYH2ek7",
  "key28": "5ZDxnLQme6QzCAgMdBjniUcAEs6sZTEtkyrcBRHFgpZv84qXFVuTs8K8Uia7WhRkNp8aXd1wqrJ5SQkxH42fWReD",
  "key29": "3YStDRL1m28fyYC5R7tsXFXpJbj9LdyL1zhtjzpUjwR4pQSqZpgirT1z6rcHxgxUyZESCh4k8BYGFRLz5hq5feMt"
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
