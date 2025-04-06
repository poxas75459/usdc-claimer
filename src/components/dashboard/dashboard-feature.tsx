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
    "K8zvnLb2N7fywvMuLJ8NLzfTttXP3WzHcNbeimVxoPe6JNe7fmmsbGhzY8jyTWMQ9Qg6eKdL5fqafVXM7jMSjNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GirKjtu9KDkxSziFjFGgdhoyPBgJxDoXsYnAE7P2zicVAcddKFdqqWitzafb1NzsRcB4K1cXNGJJt6ioE1vCSDr",
  "key1": "22sALuSBn4jrrxjKzKhMd2yazPVbDkVGd7cuYEpkYCpmkz2GniDKGYk8CNcaSGsTkdARe1kMQ4fg9QwdZXRspxNA",
  "key2": "4CjW6PydFxwmf8FaWztAkVx38Ldpv76JDoVk35mU8qdWaFofrFm8Aui3Q4BBRXwAogoQkg4iyb8aA4R2QVsMxxzi",
  "key3": "wKYPaxjG5awkqqNx1UZLosxPpy8QHudovRbBjNBDHFjXwgGhq6gu7s1HuD2TEF6MjMfksUDdKm13XsjhwT41dXZ",
  "key4": "N5RwmqrpuFmfaWyTC6gQ5F2sbtqt816Y6wy4y2sf1z6qUWGJYidqjLXujuqmGMvRDdr2QLrcm9HRC78KJpng5RN",
  "key5": "61MeYKa7VTGYKuLPcPARDUAaEdffkg5SQrnoxu39Rd6poE6nGG8ih6vcu7jzpianFA81ujCzs9Rudrtk8tJsRXK4",
  "key6": "5o9RvoQeJBAyX73bXewMD7KMmyWCrQ663UoYMpkYCU2HaSDuaHZo8TEsPsjt5HMUhMQGZJG13PduH2fn5eYzSSDn",
  "key7": "5M99dDAtYQdQfzaCLGyTYTEA1tJYoVz5gTV5as3RyU2dX1hJz2GaTdKZJ9KoQt22kXvF1GytBU6mbX9cgKHyZLBv",
  "key8": "5JBd2Qs6wY7EhhxUbXuJepUjwBbacDd8qWE7i1LM6gbsde2Q5a8LV26ygwfRFTUiiZQ925sSGxrAyx9f8JbNo56G",
  "key9": "oCWX2b55xcaQTvFS8LHwjEmcdP3568Fk56k6XH9T6waUG8qLmqytn8eGXoDME7bmuvWVS6HUrbXxRe37U9RhW9x",
  "key10": "3jE8iQttKue3KpTt4oUUHf2kCX8rAEUp24iAQrHy7Qvi8UxkXX8SCA92FANYSqonLktNBVZPi7vYAsTkBGodfSkc",
  "key11": "3pCGZvbWdkkiBDmPAkAUGfgcUoYJVvQYAg8JrwNBprSfN3EV6LZAeAATZz4wu1SHyqU8RJWC1mHcgVTPEshavtTZ",
  "key12": "4EByFWpTctNvW6QkYLyL2FpLBLM79he6oyZwgGMCPfUAFe4PxGySgUNsgKKcQuyhkj5rPMraTSPPuCtHXTwRdF7h",
  "key13": "amBngrJ9f5SWU7eieKaJKdpVKfgh3et42TTXDSnd8tkEdg3iRos9DsN2yWpPBKyrRhcePhWxjmULs8oQd5V5wT6",
  "key14": "4FG9SyiUeFdJktbxNok3BR3JEcE9YDrGhZ8xQrSZGvnUENbax7mWiifUjgUJLgcAs7bD6EA7cnzwhbiPN8uXJ18K",
  "key15": "3qdmfqazhDeNvmfFFiGgW1nAnjdUaE9crJKkKrkKa7MitqwXX78JtQbpHRuqMXo4DMPEu3CCZ9mYBcAUXvdjcKzV",
  "key16": "VmM2jYmEmwUnj6RZG5PTPsdaCbQk7RF6WfCNzN4iq14i8YFBszaotNYxdJbfJ4dyhutXumVFGXH2dGpYzmfNZUG",
  "key17": "3pseJwTE77a2a9AxoNh9xeDammfSEeW9WPWRpEVm7K2syx8qCn5E4mzkyRgwXF5sNGStaHotqfV3iUANjZDh5HpE",
  "key18": "2VXubggbypUVa8t5YgAh4Gu5JPr4HjbCWh5cSKqruYwY7r1SrmyKmF8bBT2cckFZgqQMCrQvF7HrZWng2sA2ZH8m",
  "key19": "3GbFdgVLkLbp3pxFXHYpYJbziTQwRqGBAxqgtuynoY5YJ6UpU2awwjGWg33Yum2mAQc9Wj2LGD6af6W3uUurBukt",
  "key20": "2f83ayj3QozZrBx6R6bUVsvvtoTJVJdVd8D7vfqQxSn748Zjvb7oZ3qqG5HDnu3pqH9QSQyxboMzqgJWamTQ6pw4",
  "key21": "4oqzXkUUiPxf2jEbCz7VmpByrgN5HMDV49L7HbPZyU4MduWEkSxGbwFWAwWZJNHXCgWsBeHatgLFZVUtb7n3GNDS",
  "key22": "2cP9WwQfAJQLweJ9ZsKA98evkzm2DjJ657N47yEFLHuyWCb3XVHGFD8xkpQ8sGFm8BgU5Dm1cNwWomsVfGvovgCK",
  "key23": "4UsWDJQ8H5f43Vnp8WkTxCfNnLnXCvXcXnJCYtiHgnSadqVjDhoWVFak9bPZrYLo6G7GRn6S2jNMr7H4AqCenbYo",
  "key24": "3vJPpsqJYGMWZba1Becae6LftXrPbBvpeSrb7q74bjCBg23mKPsfi3jFvA7KwFUJxbPjCPVXNXgvNJXicquiF8sL",
  "key25": "DmQGRpYSBURYmoXFgoK6U8rPi2XCRAUUqjUdtZV5J55pqHgx5WtvArvTkKiUcSBuWovnCMKcE1wUGaAhThqKhDP",
  "key26": "2NRAc2eWGfkrUzCU3CxFEPcuRAowm6r5Hp3hqg91BEtzJ92Abe8Gpsb2tjFQhW6YeLTY5iQXaBz3nexF3gMu2ssg",
  "key27": "2PJoUAp2aTVsHLNZ1xKR54RsmogxXUWGkS1HX6z411t4doWrXsZ3Hrfr7vN4hrBvjnwJy5JC7xreeKEB3MpFxw1L",
  "key28": "45S2mTD7ARdy3G2wd8LMnXg65umPG8TGm8rqYHL7WFsvjr1ds4npAqMi7Ck85wfUKpFP3mFbYp8Ez3BgXVEHhsNk",
  "key29": "5KpUtVZWKwcNprYrMDNjZSup1GHiGokQYgduL2o7ok9ZZdrG5hq2tZexfGz9oTs1f3qDg74dThd1PfU2DnqsQsqd",
  "key30": "4KZXk82iDDfYRAngFspFuxRCqMaHoPKqpqtq3Z1WsmMgkviybpUxuMZTLTDGv4hVuiZygycpgJTH6r1MtzujBojL",
  "key31": "5e2U1vAtYS2DyzHksrFE3Cw6e3k62gmWeYkpRTeZYeC9Loshcuw27kuxdb1M7Rn5VhwEkJtBJ6p6KF1UpUoXfALY",
  "key32": "5Q4hwbHCjRkAjBdCVR1NWe3xNf1dmHxfbQbMy3umMe6Advfu4vDvTXtNzbnsJkJzYuUNiMxUkKQQTb5d7fnTnVZh",
  "key33": "KiXhvpdGk4uSQFr8sPx8db2R86jTyDZ4LMBY4iArfsDS8V7zJS9t7r18Cig1E9NKmW9PJDqP9PKvg8Eq7Ry3Xtb",
  "key34": "3WoJY2UKXa2Co86Z1DTNnxw7VWMkeraXbF1vStBQV7qZDfiTWdHiuxRhkzqiQeUGmF8Udh7mUC7U4W6jEG6aQzNH",
  "key35": "3jAnaqrkEckzZndwdY7jpuH3HYZudRsCPtnsLw7FRDfs5fT7kn4W7qMhQa64HJBoJNpP5NJRRvaBpFExbvFYKfMY",
  "key36": "42NtFQXHvbBzzbr99zwab4SYpMFAFqQN4BciiYKTdnGesUG1WtfVW69a6vnfFZi3yuochj7eXJT6J4EwGHgF1peD",
  "key37": "33kvf3vUWVnh1ehHu4zRKo9uf3R2upPVcQNuEg5UCYv244rBHQheTU7Y5XP6Wqv9S2ZvXoSxMB37nen5n14GBNG8",
  "key38": "2BnmgwxgNG7FH1xN81S66S1JYBepYJxjRWZQuuiX7bZ15YuWLy2aUbJ7pAYszS5FPx6pihGcfDHj9CCzLNhAxDyg",
  "key39": "4P3nfAjiBFCVzZZH515eQ2ZnkpvNYzsvga9jxnfKho6NB5Z1VCCiGEG6xhS3Z2Ua3gLxdCfpq9dKASGFPSGiGvx6",
  "key40": "2vB2Cn51f5ALdNePjVHvbwLvHJq426jxhfad6ZxUGZh7Pv1bXukYQzr6eBwkA2B6tXLFqchc9iF6TVs2MQFtnxDC",
  "key41": "616qiz1Nhg1brmSzaNA76bspdZ1fhJAaowiUYjrsdGKNHeuiL6qntHF69Sf7mV1oxwUcuNxviDDKCZyqn6sTiWBH",
  "key42": "2yth1qBqbGUn1DCSDFH2vNa4uNEVjPoP7H2zkHbocTLRjfti7q3DnMQVWMm6QNQgFMpcUF8SMbzea2JbjcmoNLMf",
  "key43": "2sP6vnQycnm4U33U2zSwnvpkyTQher3DdzMV3sRtRUnC5ARwH1wbXL1ZEojXHLDLYJ2s5SgYZq8PTfprgoDrGaxm"
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
