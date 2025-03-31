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
    "54QRPaeTUYjMtLnP3CxwAZLnhHh8kMkoYUE2eNyXRKaftUb2gQ8Lt43wFqXzqXrX8ZYrXQtn8PD63TR8wSYkF6eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsDv5STg3bZ6QRPXkzuSh29PB4vf4k8BgeEWmwzQBqRfrnhLfrTjLAHpSi528oSUGSVR3martrVDGVCy9vwxZd9",
  "key1": "3mJJRHx5FMchgHHwaXsKWv31hb39UPPNX9GWhWTaUoHtQrVdq9ec4WuNreSEKTqDoi4nYottKrTJMfLWSXLxfdum",
  "key2": "4tyX83itJFX8jehSHVbTp81t3Zxe3LBqhqxVUtHZdt9EG3VVBndaFb11o1es5LUuJp7nmmbopdgQ4hSoRhtKWYYw",
  "key3": "3PCeee3QfPJmHfd5gXfceZTLHPzHcdgsSTRX3RfbjR8iA6ZmoHfp7wEMr2aA1XW77RjgxKW8wTFbzVN484dqYbz4",
  "key4": "47s3FpgDznbgvgnYS6d8KRCsVyYn8wBu2gARScDKPrRjjVVBoXaTP9q7ALnF3UNM16ydRkBxYiP9TA3cyPdcgx72",
  "key5": "D4k4dsKX6PfKqL9wznssCdEvRHGqtofTdqvBMwW6MU9x2w6BoPdXttJpdNHYqW7m4F7Kdt3oJMxPh4fgt5UmU8r",
  "key6": "35pUwu2gXNuLKSojhtkkTtRTScnx22NSMevq6C8ZxBUjzs4NzaJprZ6f2AqApywg8GHQp94a4pUSUv1PwGY57gAQ",
  "key7": "3NFLMQLkQCi9HnHJ9E3gYv5wtZ2GP4NawN1HBH6vomh8yFAKNuQomHgXPi6RtHES7BP4he4tJ3Atj7QpxP2mBdVm",
  "key8": "2bSMuvyJWA3LA9UE3LWpqS1G8MMVnPAoQHvp5RhQQcBb8qtRaU2tf7D6ufepYGGMH1otBZ5CbEYGYf5gf674HSx4",
  "key9": "2Lyfysamh2WJktKE1wbNDE8EPCzLdTWY2syNherdVwoYq4owqs3xi9yqJQJYEYJVt5gK6sMBRzntmFvHnHDCfAYf",
  "key10": "4xHiQLUq85aZ7K9E89NM4hqkFJsQKNQnqnzDF64ujL79TurtxtSBNyvVeboAaHQkuWNEpaDjeJP9MdteNY3HCN44",
  "key11": "3KGCJS4p3Qy9WAScR1XKWuQWUjBoQLDfLbp9k95qEjrwMvWocCuf2EE1aqb37U5dx5iQ1suY2gFZA5DHcCyMsbAQ",
  "key12": "5CEPesWHwRwzu7w3BLZ1ddQKMZKmSAYBcpKQzKWaPis7gWEQHEndRwVF8PaT4wkHV8Bjy84TyQGG9V8r7FyLbp7F",
  "key13": "47vLcZLgkZwe7a5yzzkY1JrXFgx3whiHvhyhkvLs86MQwPYTs1WUBzUz7EoPTy6qespBhZRxT4WjTFNzRy2fVFBg",
  "key14": "2AKPxKGJdUkSYC19sNVzi8pNrfh8sFj6qiEhfEagjgeucad1hNCBHBU7phhwAstLyrHpSMVsuGzj1CzsWWEcwmAC",
  "key15": "4RoLibmoxA5aXWQZ3kyiBqHEmSELbjniG96sBBucuG3B3HiA1MZ78NJXMyTM9k8ys6E2uLVjGXXQpnfGgc5RYttf",
  "key16": "3TmJbQpyvWeHXHp7WRoWf5aWfyN3yr6ZfWPfivvGH8f1qwfH9XC92tzW3jue6QUnTUYzrjUKQaK1hhNUoW6BXat5",
  "key17": "j2pdZBdC8fZ8Y2VshVPvSdRE2Gy5cwxJF7fQ2r7QHjPd9kqjHE5gsGKaikC9phT1C9Zoippp5ubbDwzfXjDLakv",
  "key18": "4vxcHtd7dBdMZrYUo7fKaTt7LVmPk1E6g695Udtp6btg8zZgwHmvTXW1YzpsbtE1RjkB65Z73VhF6XrkQJA85Hjs",
  "key19": "4Fcn95kPh9aHLq5HEkaowtufzQgyQhL9j4xLCWNbRd4bR9X3BPrr57tPPUGjd94pVRU8QeAqoFgQX8AhkbamRmYY",
  "key20": "2t9T1PcxcXKukk3hAGzMaVf4uenRgv3UTyFLpxHZhmjY8vT2v1zmJndu3yoUVpXyMhqfHWQaVdbYbhWCJQwWYuhi",
  "key21": "384gvjcFHDfn84s1B6hV2DQ7hYpVeYFsgeKAzHWxXM2wTnSC1QF5siyiPkdVSBdUhizcTptMjH49geegp4HB21nN",
  "key22": "2mXYdUnAqm6St8XgnMDBdcLgbtAG2CBpXWmwm4JNxEg2jFceiWsrjFM5TMCEPiKJnbcRv9R7yaF5ToaCjDUC4U6b",
  "key23": "5rHjZJY8Dkg97VWjWWT2fv2qZUv16L22n88JpCHefoKL4z7jnsWYfT8FwCP2ntofyc5nyjSyEdxb1KawjSAqybpF",
  "key24": "53ZHHmF677g1RaNdxiHTdhP583ssF94yv2EXiLSKpbs3YEkLZB4gSbuPNaYBA1ZgMYNjvZWx7hQXJSvmHtpaBsde",
  "key25": "4n8dZ8XiAP94VaSwnwCXHkfTrYt2DtecXtCwRcvkKUr3gwqUFDHTuxbeg5AWbRkoNC1Di85Q5oTaMvnhVZyL8gW7",
  "key26": "665CxVbb56Q6YjBwr7eTfZqN2dpF4VWd8bdGtXmyeSqYe3qZuaxxT5uo4YNAQhN4SqP2uUfRgtfDydza2a5e6P2g",
  "key27": "bZDMAzgNPXpZmWRr8HUyz1Y16QJatW7K9PheyFDPnPePsbJXGn5n7qpQSA2yLyRF1jyDkR97zkfrg6MfUVbpv8W",
  "key28": "5LTTstpTaYC8cf1TyH7g3o9FbnHVKHtgvWdtHnig3vKYiFwF4FwKNRAFwAPqQ9Pmi778ZSH9GkpyM46DutencLgT",
  "key29": "4VEuCxg3ERd5HTjx3MzK9DQjX34myigeBnnSgbt6byTW3ALSC7kTyghLqLdtmeFUbzYxjnWoNnqD3RhRqWSzgiNY",
  "key30": "2H1bm3MejNGnPzbqkoskhz8F5fWSLBcP1jvgWrTBwxEv8NTf9kUozSuiZnE7tifvZc3a6MAcAV5ea8FA1V1YYf7T",
  "key31": "TFK78EUYbMpLPL5Y8XQMrXsR9niLXDydiQ6rSvNrJw7h6J2D29G9tXN4nuPyDVqyvLqKxazCtgpsenCM7YZ69HJ",
  "key32": "2gxapu6C5xM5mMrvHG8s4kKJ1hwfNf2eQnttQ6ZYbjDZjotP2H1a7omDXzc84cmj4HCTk2beWbGb4stKUMDnV4n7",
  "key33": "2uWjG3nn2WaxahWYXjpKE8gBtsqyZhFqFRL9F43KmfuDjCLbgNgDBTTAmjmg71PqvKbSbUUmiJ9q2V33JocMdHZ2",
  "key34": "5K1jbcYt14JB2nQomvmN3vPrkZh9PWHeFmoUvUGA45KanKy3L8tVmH1c7syr4MP9Yqfig4H9cFVaNpbNPtKNoPcn",
  "key35": "3uUXesYi9Ndh3VVZ1FvtWVYNSWk1wkb9FWf4YKQaPXK5w2Pu8uLHgcNBCDz5e7o3CTFGwVQ46MsRq5NGqx6baaKK",
  "key36": "4B9w34VtJ7obwGhwjGx38CtbHS5N5R6Tn6kzZSWXk8eCm4ahb8JpdGL17wZR7Mx2wphE6ejd7MSpPZmmixF95n6K",
  "key37": "4qpq6LgADUmnCMR5m8ahutWfFYwEtQgQ5su7Aj2qPPsdZLu16VGA4d7QybK4JoGJ5LfJivqe9XuqNvZ5vJG3mABK",
  "key38": "2ifQgvLeR6Fpq3aXudajWC1AfMJvsYVDmYfFhByTM8zY95qNkXksimwrypoeVuBvKT4we6ddapUzuVQ4KUpzj2pR",
  "key39": "3r7mUam8MfnLpVELxmyqiHkJrZf2uDYrzw5NiPB7hbNsPan5rkjsGT7JZQ6idAwP9Cbuy2pFqjtUYDbMXRttLkzy"
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
