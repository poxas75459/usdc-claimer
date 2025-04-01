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
    "4QNVvN31gxWiHUfjGnXC75GeVLGkiiUW5C4tTmNxwbDbii2ZnvMfpB7B6MPuBdMsLoSL8nfRrgydRgF7J3JMgHKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYSPyPxev9GqGMRzLD1VNHGAVbD1acFSwv32Gdq8YTtf5ayv6oVXLFg8DzyNDEaRuod1rLbC8CRRXbVHiPeb9K5",
  "key1": "3XUeHd8LZDVq6eRWb1ktGv8MyMmBatro6HntK5zinEt3v3RLA9JoTTRy1BRJaq88dC6N9KTjALe7aDeuCqJJNWvr",
  "key2": "62sQd3DtfUscf6cygrPwPkv3eh6PPtLYAQYcy9VCsPNg9kC1nZqNh5tVpFpi1fnguwisgo1tPHYzpDZwfWkyvEh9",
  "key3": "323bwqq5MP461TLqxQWrXE3pRJVzPmSY548ErCvdMUqX6PichodPjGC4WR8k9uw7q8e451hMwqLnMrgrVQTRdT93",
  "key4": "2fAj2rKe9QSAZzUj6J623JaJtbRxbfU9ED9QHisq8buirMfS7YB3zciw3NfPFaYxqiyMiDeASb38dQy4Y7C6b4UK",
  "key5": "5FKD5f6PcJAbCQf6q2Jdgzp1saNDxqq8YF13ePpdzfhgnckFZAqBfr6DdwnUuD5JbCZ9DSe33x6NEjHHWoVUyCAP",
  "key6": "PEgzFr4yn78J4TzK18ZeKivkmDpNCrVbCByzXPoKYjD3HpkbJqrphabeAtenZSafwfcPA6PH8tvGvatW4V8vyxJ",
  "key7": "5cAXqN5LGRTdcMhcnAZKCpagVDkb4Ptupe9gVfyfMCcTEQcmQHHrcCLC1mnhu1SgfKZxS5ws1k7VWVVVGLFKriCZ",
  "key8": "37AATHF2PMaTZocCF1MJJm7a89o21heaoyXFJY16cQqffQS4thYjLeLUztGrFA6WU2V4QypTcq7sdkjsjietz8Fk",
  "key9": "3kHDgEQ8MTHtgZ7nD43N6rCaNUa8e2STk16z3jAqRaQ85Tx4q4guMZW8w7TYVuUYBiHEq6Qo4ocpdcEt5EE5gNwE",
  "key10": "8wJ1ByduGiEdSsQHLgDmKrvNVyrsLtq4QUqoqVag9TSXBpfpdGkNQrw6EFVoE3YZqJD1DSskP8shXxc3V2MVicT",
  "key11": "5ESY2svf9o2YTQySh9ZdFeAjc5aqQhg2a8AfNRr3fLJmPRMujjs22eAU4H6v5yqq6zcknrviB9X1aV8jPCBMAQhA",
  "key12": "aJYDuxFeDoAvNZp1VA2xpujo1vxdFs5Fo8a8brwK1YpgmQoWe4Vu4B56AYVEG7SvdvhBHNViFZfAYWUCLek7pHJ",
  "key13": "5MfftnUu38vX17jnycQiUaKnZ3fGLAxAgczhWtwfWnkHVTVo8hzzNzYGiSqcLyjmnhfa94oPzEuaSsgRF1KuJ7nH",
  "key14": "WcrwV5wuNEqwvwakVgBWqtCN2B7KE2Qxy9CUtUVhvqTVCp9KL2zWfaYT2Rge8FTmxAdF9RU5UNVLiwbmz3FrPj3",
  "key15": "33L8pgst9CBziHvBJgdkeDZdF5y2RRNKEyoXnxomqdaU5VhMA7LQ8wwT2Q6qrmAqGvLkSdSg4F4VegarpeDuYSYz",
  "key16": "3EjYeherRFMf6gREnj8pbyhcQ9o8gW3AnPNJUpXpcrBvwAW994HSNYYLWd7MSDMk8PQJbVpc91UxLkyfr8i6xGd6",
  "key17": "2HJvrQnMNfYjm3jErRAoAkZQ31B3AwivvG4LsQAWXZfEz2ZnKmA3vQupojDpzfuaRhLh5ArA1i65cZwp4QKqN8wA",
  "key18": "5rtnCbTeVUhP95ApV96c7RNHKaYkkoC4P423jNh7QgnFbjUeyJmKH6B68UXTTvmfJdFzkMEjAJAhsMw7YjgZzL1C",
  "key19": "3X6suZqueJf4gFPjFGiFW27PvhW9aXtV6eX2j5bY6bNFrwbuM6nozstUtruS4GSewgoWbJ4ArKeWWTpZD7JNexAT",
  "key20": "3SvwbGdbZDRzjocyqH3LQKSvE19wvN4AjeQZ6YSqU8V3x2F8gqDnJ9wspkDjpW1om7A9gLp4a7zTre7XhzLUoKty",
  "key21": "27bYEkJno6orHXyCiZWz6nm4a4jLuSLCMzXFhnFLof9sZZS4D6UUogFT37GXf1Szp2GxQvVXW5AKdX7t8pF3Su91",
  "key22": "3S9hcAejFMbNZDrDq4hX4r2erkeqx5XWnKG1GWRs8CZboygpptapPMMj96gsspfy686fVPUQEBqLjAa9RSxBcKuh",
  "key23": "2ZeRUZDd1uy7atHVxtXdMYa7RW7iD7AmHWVBXYLXhHHvjmAxDP7sxW1TGJ5vkffhVGbSsAhmSt4GcoaoajLCbvca",
  "key24": "5WWwP7SAtYMg6YeKA11LkC8DJQ4x1X2eXQUVSMGQuGy739sM3bMeoU6MoTxYG2ftKih8JaasLcr7TyFVyT4zDFFx",
  "key25": "2MhVPvxDAwdeT9PVuWptWJcPu6dPKkbfhVaBQkpfSFxLwip8GFje89qcoqsHTKE1SU6XWEhiwkASjDXFtnSw8izr",
  "key26": "4LTpWRPuqvfrmX81utVnXPgJa7DXHSDTfSGL3sv88XToiVHbvFh6M7pVY7xpjdLsEQosuLc3QaUkk4onJmZVt2kX",
  "key27": "4x3Ci4CosboT7WCC4xv5kkYM7cdwGXk4BVpzXGb1qg4rmic5nYL31tcdGEZLcmN6RY6eNxWsFZzeQZj2UTX8596q",
  "key28": "UPTd9XrmrVFuoiSjHzHHDz5HXYJ5RKQWtwgE4dfryfwt7y1toPVCrzH16BHZgcSQErSrXd9XWUigjsSCnD2Bcar",
  "key29": "2uU1TzUFKLLaNd7kKnKUjazdPdQ1p57zRDQLbX44VrTb6cwiqF4Tbk7ag5FuuXEFZhsEWXaerKEHuByAzqzUNw8m",
  "key30": "62t2M4BzPaDsTPFZvV3QFuDhYSTfhQce12iW7ixJn5xqw2rWZdoVXSWp7RcoAZyw3hrdT22pQjFjcJBRYc9uWD2L",
  "key31": "2yxEoVRWjjh3EGvvrCNvZph5oY6UJuHeE8bYVxWmUuLWLDaCVPBmdvSCiH98PQZwVvSJdFvFSBkMEAUBLda6onMj",
  "key32": "3g6UeXvG4UZDi9egLtDZu77h31pHngZAFg3zQw2Re6g5iGjJCtQKxAETv23Z8GxMPh1kmWJtjS65mmfRkbCDm5bS",
  "key33": "3EHmrxeMGQ7a2xdzWPbkatkLr9QHVTKBAHyaDkKqD8Fxfmxjgq4xrp7sb3VyvK71H9an9MwRZeJ7qXi6GKWeMASq",
  "key34": "2sTJLSD8orCmuFS1igfDtT85L4jFKMsBdjHcCAN8H5XkfAWrRUaw1cYDRUyp7pNFaN7aws51ySh8FFeq36NkcA2Z",
  "key35": "3jMZSab59pj2JLGnrsuQLeHuLUq7u5SCbTf7nyzdwX7YKm4ULCDhZsULbco83zuzCjjwKVsmnATkaaLooaYMdyfH",
  "key36": "3XzRQJ3rWyZJ1uvxUdD1cPM6h8qwQ58L3yWyKwaGFsp6XUGQS6CqKe6ovXwG3J5zPQZuytNLHWryU9LfgMt6sEPh",
  "key37": "5mrcgo2toj696sGkvSh2uwrg3RhCi3mVmoS5DzEjGcmY5apBg4f9Xdz7JUVd9br2qwQgGwvF74T5tYSLbbbkXkWq",
  "key38": "41qbLjMCs8DLEfSrb8pi9apYwJ3DFokZby9xbr1LuwC7sMYbuT5QzxJ6eQtmgRevjwRydqL2jjFYRTX2qM8V8dkC",
  "key39": "2Q4uBtvKkkbS6TWybU3vH5LJmtvdfYBKEVFFaCS5pAFUG2pGRrU6Cuq5FrZ6R65WdzBnzcAwM2bgqshkove25D3b"
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
