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
    "2SSLhvrzYu5YFCiby4Erh5QJyTMfTjXwcmefhKgsAxFydhV4Qnq38EjXQaqdcPXqeFwoL2wZptSodXb8RR79PX5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNaNTpJbfcpk89UJV7V6D7K1wz9h1yjMZ4efQM5NsZZHMDsS6jbFcbii7Csw9xSbNhMUmzHXaEsx39BiS2arHEX",
  "key1": "3J5pYtUXnUWFTSuq2VmqCFd3cfmspkXD8jxYfe7PYHL1ad16f49ZkapSLwc7T3wqRXbTCrT6CHn7ti9BaXRSb1dk",
  "key2": "5e3CU1MUGqrjD7uvcyZaSoi4ZfTSyRpJrDkzSPJ3mDEs7WaV6YWSoxegGpVMUadVC6TS6Ec5b6AZQtZtk1hc3of8",
  "key3": "2An15Rk5arCEWA941vjBN4iE7dkk4byS6FZc54WZGfgDM1BD9tU25KHX89MtBmGZEQKExCsSLdzji7FfXz7N37YQ",
  "key4": "2sL6xbHqgEV3H3ePn6m5b36kV1XqcJZU5Z9iD6Q4ZFLUvQRe4gnVoSq76AuCdLR5uUp9aTrfXTRdtduqGVkWkh2o",
  "key5": "3M1tqcNs3J8RvmkX49Eo8k99fd5wzdBrRiSYkQr32HEWS5HpTHUKW4VS6psG6oSm7fpteB1NEp4QkcTaCtd2E5QW",
  "key6": "54YVSjBEa9TueqauVfZLMTXfnako6dJBpS1hrzesoTW2gQhmrXH3cuQRdwMBWTv5rWWGHQhyX1FojkgkwvgPhoTN",
  "key7": "61q2v4h3CvLdAYxyAphZWuFFwEo13xRoJtLBrazzhzeXowLaUyozARFoznVyPYi9PAqFQEj8pY6e2hZRqicvDiPi",
  "key8": "4iuoHsWD4U7GUEmcztReLLaQ2m2eqZcnsbr76BUgB5eLvBXzBb9QoBXKYBtVM5ujTb2QBqDd12djjYxRAKvBFksj",
  "key9": "5f9c16rWJq54GCUasD7zfLSEZ8jSFAL6Nj5r1Dqbkp7RpgM6mZjtfCGrwvuMtdG8GFbTVTNZCb5jCC4Dq2gmtzD4",
  "key10": "5X1pXZuparevntAiJ8p4oZe3k92HEHK79iMEMdmbNbZPUkSbKJWpvyyeNqvAHVZjMQ3dAgMiwyJZt6LDcEecEvh4",
  "key11": "s6JA2mjTNq68eNutyuHo4z6ZWCrv5UyvQ1A6ypg9npFapZA5D2zU8yCgPM3KpHK5qet8nEbfrhi4Du1rWF42zE9",
  "key12": "t6qXbc4wQhWa2G1JexRwK4DChzJoEbR9gLptp7NbPT4yZNuRv59ySGTxuZ4scuiYEjBuP6toEswKv415bLw9kog",
  "key13": "2yNq2obhoJjzKzLzyGKc9Zvz14onQ9JrraR8C5LAXNmM97ZV4PMysDED4UhfhdsQ6zCToLzZvWaWEARpBmFvc1e4",
  "key14": "3htz3cuoTQ7k7i1ny143iAxXigshxmwC2TdNS6QX9y1CwSqq44XVTjKh3h9LLc68chrsF7J5PJ9fD7SHKUyreVLd",
  "key15": "2JCVd5Pu4gxeSFLYvDvkKoBXe16BechCZUEvadFMiwALJMKidQqHjxL4Sj4wKA7beakbjzaGwMKvb4EZ5QTQRpGH",
  "key16": "4XzeLyWjtwHBRKidFueA9cjgqD8ynNMiUNkfk37qpbg3Q55gqAvSNNAvPrhc6Yp4nWwoPSXMs4TbejYSrooXm5Bk",
  "key17": "iPMYbuXUknPDNWu89acHzqgVsDnttiNERTqdnCHFeHuFF6Jvi3HpsezDmNGsHQ4EX6cvtdfrXuWkmhyEozrX5e2",
  "key18": "2gG5kYb3CTy96srU6WPAvq4ivhotgdRNJgKAFz6HijsHc8yEh65Tg6ZmAwV2RBU769VNkkBVSD4en9qcyCvyjpdH",
  "key19": "3p9XX58zEigVcLF2tFz6iTNhbwtfm8u1GjnJ2tGMHAPpyAdt1zUjWsfZwMddhSdLfHdL1UiDC3pvBvucZgAdBnLw",
  "key20": "3tvFh832dtDM6H7EvK17C1stU5yDseWPA5f6MYsUQDioW6xhofVqbRMDoGvPwc3fWhLWVYrpUpmG7HMJksF7tyk5",
  "key21": "3GSriTwtfoLxy4AUHfcPyfCMEx1QaiQNta7m6pg8FK5FSRv2BRNS1LFYS4zX2vUU48fzNfH7zLJuwL6gS2CFeJH9",
  "key22": "65SJxXKdj6mQt9RmME6uMVMygRwju3wLdUEKbwyTCXCUoppS1KDDn46b7jDF6R1p1jbkeaGotRb8qd3CDzdEVzRs",
  "key23": "26ME4dATmqd41VD1XZNWVSANyVXRYatwDrxxsQeqDqrz53NfjBcfdbkYGXzbJM7MCVSWDBULwSH85pxGCJwvZWDH",
  "key24": "4YYjeu5dvNmbdBFbcXUeAVQgEYsn5c8wiPZCGPG9PyXQb8k7n6Umoc9dpKDJgmtnZzssaDUUzpyKvmTGGGZwg2ht",
  "key25": "53SAHzRW1mULuXnqiqmZTB8XZChsGtc4yEghTg79KLXij5kd9YPLRmPWzRtmJbMjS4yewxCNW4NEbgSXQRRmWSWw",
  "key26": "XU7HEKrsxGfGGD7sJMWcwbFWTLd6TXMpAGcHnykrFgmpYxjHT3j1h5U87q9GDBQo5vGr8hE7JHoLHxQHNSNH3My",
  "key27": "4YSvWPCrUrtmnUwCZBPSF1rupEv5XzobHmbP9YimDiJveNYqPQKWQxHbNaV3sSzH2y3ZCN3QEct6KVLMJwVAiUQ5",
  "key28": "umeXKQhey8EmUzUVpCgxbW1WsHH25u3PZ5qL2aSA78HqpdGGk6MLcumW9mqUTqQEikTR2WUsvqEgpapofDvBq5L",
  "key29": "3cddbf7brvmHmpwedd2sepHZE7BS2ZXgqbvbJzQxK4i2APA2SQDzPe63s8MWMoEHr4sQf2UQh2HRgu1tzpLgVMt7",
  "key30": "5s6S6djHbNDWyQakdpNQvZgPUtURePqK4Ekotthe9qGKEKpwLBxW4AUZtKgxFJYTmyMXmBvZgaDCYpxmDQZbPYJr",
  "key31": "5d66XAHvM54V5U6j42FkwWDSBrdM6oprTWZKe5bHS8pbgz78muawjoX5q8uLsHTegndKSsQBin65WhdhTGs761LM"
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
