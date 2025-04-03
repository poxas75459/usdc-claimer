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
    "5zzPVuW9tJVqxw3P4P3HMWHnAS4QBK71Z54dCZTgB8T5y2sKpSSYTfy4UFXRj66bAnf5MU8XAFXFhe3NeCdbpYEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2Job2iHRyHJBFhnx8jkRBrsz5twYHLwN4YtLPFMJB9q8uK28me9tLR9K6VBfBEdu7jXUvvZHCyuJNBhkXQ8G7F",
  "key1": "3N1ku2wKsvgQPzBjRhgcfzE5q8qnHUZMDCEVbdqJcBjoZbuvfyofPp6ZjUppowAKxhQWfMxbRUupFMEVfZ86Afe7",
  "key2": "4wRNQBvNxd5sZE1HDs1KrrJCyJc1E95uenGpeZtLi1NAGv5SAdknK3ckyn978dGyvXdmZK5hsFUj81dn8yrvXFrQ",
  "key3": "4Myb2EQXxg1TSbRaUBt4Y4LDHDCtJEfKHcLFvraZzR9hyFe1XV5spnGJo6jCQdobDGmkVi3J63HaD2PUmAhoGfNJ",
  "key4": "3owvNSDLKvxjo5MgY9wF4va4pxj4ZygbGnNaK3UBhaabRUi2yYc3S2zT5iu77scw86GjBVWqdaPoir4nunJv5iAj",
  "key5": "tR6ndLbnfTTdTw5DVX7275KvUCY4fPCPmBM6vXFBmwmz89e7cPHTk7j3qgYmT2qedq6pE2LV93S7gVXbiX5wD9J",
  "key6": "2N281iDBHDuPH2nS87KRHCa82453KHrmJfBc7K7iG2Dnq7k1fh3bGYhc1fQ5p59N4GAWcAXZ5r5rfoFc25GB2Rfq",
  "key7": "58bkh5KyA83X5sgobznR9TmSf7bHjRUXx2SWVuStqvVhs52CNWJAWKaXpbusRKETSC2YNbnm33We984wi95tac5d",
  "key8": "3qPjJe7WN1PVm1WfEQXYb3EcdGXDoeV1Ugm84iMvqeugLmArKRjbJqEVakk5bSza3LPkcTrNmj3mJntQoj6KUTsT",
  "key9": "5bDreRoDd5MvQyyA8dGoHzdD6NsiuzssdeiFN3fumhzBQGsp99knJn2c2Z8GYaBKvoTiSBMnbwFgNkG7AkPEWHDJ",
  "key10": "4kpFR7KmZzE3Aj9NwTgr1MKN8ers2M2dAdRqN7H4qojYLFjhbZoUjf3dqFgw5FgVVT6NWE4UsCEMMPjDgYYpr7GT",
  "key11": "4aXQGjimutxGzFBxVsSWYjzZw58ZJjtQV7Xq9DKJyrzdp1oXFpNTmpYc8h28AQdKej9V1y3fNaRZYxkcDgqNnQLX",
  "key12": "5sKQutzgSMLzoFRkKFR5USScUmQF8a3NRDw2SyFmJBZqS39UrQyG2d7DWUV59b6Rfagxv2tMM7sbaKxnB1De9KDT",
  "key13": "5FVAWJ1qaosu5wtDbfjs9i2FvitcHeq2cPgRn4MF2UFtC6G1ZVjgiJCp1qwAu7XgVhQ9ZdcQp58tf8nydjmKcQHW",
  "key14": "4XZ35tp2AAXEtJ2vijspLXKGXDfQcVjaWznfqGXboBqVMQGEHT274ymJK8RSSBnEKtNbKjFnzWZ36GihjXoBTudA",
  "key15": "FHSjnNMzcWfV2V7KCykgkcqawNGhKugkcyah2KhaYTDRXPu5UCjvJeewPsHFZx6eMVDeaQeVvC5uSEmeeV3MEXm",
  "key16": "5Jr3hhDCaapcH9LvwRm5d29zdtir5o9VTp5PfqyE9TGaMRuVbYixYFg4bpArAvq59hXQDpKZKLyaqSsu4dmAovH8",
  "key17": "o4d7fhDA8zLxPYWAPNVXCUa9Gn4DStsy6NDZmMfFJ3XfQqLwD5sHiWdgS7ohskaHe1dhGP8XimwHryoJypenMTb",
  "key18": "4bGgZ5exPmYa3mCuoD9BFTmgXF2A38bJRXRBqWrVQofA1BuUhpWB1ymvHH5aQFvAXwhmcawLpSC9isvEXnza9U1a",
  "key19": "4TUqJPaMXFQKUF1N4SNK3pQxbPTZ5a2923ySnT9cg78jkjtgyVtuUvUoPwcEGjDRpnJy8LFB2b12ncCRVnJBmQs1",
  "key20": "4ckoM1S4ijYNdFwtH19G8pKEZ7u1MHdBDJ94uzYr7NTjkL1XbEjPBW18VewttMHp59ZvY9RmSfStJTZ3a1LwHLq2",
  "key21": "m2SR1GMeRCYwBP1Fa6FCH9JQ1zuHoNpwfZrzvMor6ypF52hYU3oxiSSAmAecRwLhWnT9jKcq5hZnXVGFVH2XEe2",
  "key22": "5b4ejkQWoFZqgbkFYoXELxqLKuuuSmkzQfVKBmuUEzJSLeLjmYhSgdTokjBHXdzVGDnndzZzrLg2TC3vhV7n3FXd",
  "key23": "5S8u3LjTVh9YqzTkTezasyE2aNmZVZKgyp3R6Li6ciAVot5Nz8rxqDycCjcho2cBrWPb9Py2SYffYHfF1RM4kC8p",
  "key24": "351iT9U1YA1B2SuaaqZGQrsNS2SGoNGnwKT8URYh2yibGr2Y5Ekq8d4M6m67n65hswKkjnKVnGDN8TEJrp2ucQZN",
  "key25": "4f9VnhR9ckkkyQqHVXoDnC6B2MfHk6u9myFZvuNMA7RZRoW5nrdiVufj5CV7ByCWjWHg9ehwqBJUR88ekFm7zHNa",
  "key26": "2LStVEABSxigDgXJ8q11TVREe2QhrCr6wYemsBEerYQ648jTCpE5A2VcmC35vQkVmdcrefJjP1a3kRWwg9H55BPZ",
  "key27": "3UsJV5GWBVwgPrTExjzEHLG34iSyq1HcgTapp9cBCS2JrxutTXQ5nXjCzQKNki9c71ZQAU4SNYRDe2N2DQJG1TvF",
  "key28": "2Q8hhTztJBnEVUsaxQq8PmzDTa2EivXVhr6Ae96j327BnRFmcVxFE7hbexcW4DJohPU35dcAdGSXQY4BTvZSYU8X",
  "key29": "3GKRRPSvutFLcxRn5jcL2nJP71CpWQ5qmwGbvitkW7im5W2b4CQQGNuscqC5YJPDLernqeXp4x7jKRJmrRifiFi",
  "key30": "3J71zoFjGvDQJHjdtgySguVP25rucsrWuikZdaWBwbBE47QL5e77dDSZfBmGF5jFxtLFf2GxnQbt7N6yXej9u9Zy",
  "key31": "24zXC5gJugH3egREZgb3xg7ttx3FWrGeVx6TZuh2gs2KAXcVpQ7zD9fa4gCS9i7MzZuBfvTXqVKqnVJa7NG58Kz5",
  "key32": "3AKBJYqUZuUZYoMTYSESF2b4o4f9w3tuv9ghLjsLcbYNgwr27euvzqZQ7BUW8aVtYjtcEv4ye6DiawNW4vVaExVL",
  "key33": "67jnY4auhzEm37yrG685pKepfZCjQVZo5mMVbopkE81nkcX4puWPtQhjZUB1JbL9ZVjFJ1QnAXajfzsLmC1oDzfw",
  "key34": "5oMSJrsfVy9vPhKzULxMfsbJcBuJ8Zy9tPcsUahc6rs9ZZmrjVo4gSLa6rZMNrLWArFpW94moaHaCQF63eA2UT9p",
  "key35": "237gy9pmBqu7KxLXeEwQ5oTuoG238EnDrNZMS2mzAK9TShhtwff1vVPCCvsAhBqiw1Z1qdzpspkei1idD9XTecxT",
  "key36": "5drwf9gAvFxGCmFwVasbbAEcDfXXygYvkSfJ8WqsUu3UjQn9k5RCr9LXoX45rDqEDvb1JNJjnfRoxireoqM2nGBH",
  "key37": "3P7U8eyL7GfZRUCyzXf8SknoQi2jziecwwmhrKHCtJw4SnfCuvHbu7YpEmddSQc5P9ab23C9ok4wdeSNVj2hNpte",
  "key38": "2oNdTgeX2Cmobds8Qs99613zdQiQw3RfU9xUDUJDs5H3kDPn4r2mvwBXRDkfGfPeaSVqqy1A5oxUtMpUBWGZgdaf",
  "key39": "4a2LC9hz3sVv5mhv13XZU7JiEgrw3rqadncv1oKMdJG5iLF8cXQzUQm4WQrzbQM5pVX94qknuNhrHsbZh5n6fLQg",
  "key40": "3ptNGPqHDc9yXdfiKc563ttj7hyB1a62qH2UurRdNViHdi888MbVEP4rJMjB9g1kvUpXs2KG9n7x5BGRMYPwZTC",
  "key41": "3kYTihCAiFN7u9cWH6cA15rDbUpmFZfy1EnhgpPUc6vLJxGJ7YGQ5c75CLPZAYrPYLurRvLjT3KEvPcrTuE83jL2",
  "key42": "4rCKuEQqEKim3PhCaod2BbMPrSag9PvWCt5agp7RjGxbWbznwrnGxXvt3TyqWF6yPao7MnspLJWoqFRzFmgiZ9Hu",
  "key43": "3DVB6YDuTJfcXGPjGnoYWFjpU1SVyrxMudSGGuB9FQ1a4LcET1HcmnwidH1BDKnj65sNkh9ib9rMo1G61zJZzkey",
  "key44": "4WmKTu4riErcNBjL8B9vTuxVp6wciH28wLhJUg3Euc5Jcm57MYKpdFg9Kfvd7FkdtB8srWrzommPxhcZHH84bzNX",
  "key45": "4suKWPGdKpUNuEQpgpsCmLfSpqRoyjV3GvHb1EgvjwSXLN2KYPerTPxB47EkBWbPFLV6zSc75CsCrpCVSevWdFdv"
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
