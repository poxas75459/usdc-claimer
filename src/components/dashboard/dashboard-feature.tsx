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
    "5v6bYw78ZswthkF7bdGcgbJujY1FoDcwFtkBWS8Jao7S8gf5ELjfFXGfJjaJJRyyfAKixnoc9rG5JZaiRs5RPX2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BehwZSCj8k983wMoHC8vuB41g911SaGsrrawmE8pMepWPHWmyvZD695AsXFE9GV8JkUfb4A5xeYxvQ4vejUNTgU",
  "key1": "23YQYLNm1iU1A416Us8gytT5haJgmJ9nTwWQsMccjAGKbPoQNBJhQhiUZkvdpDsF7QHdk74QiTgeMm9iBrL4gbnB",
  "key2": "2QWZ3gAeasu8LRKbKFBhbGixSs4BHXYFpZG5dUtwxGUtKShfPeYTXjsKXRZs9PWvoS5DT1Rtkw6edrxXmnUSRMCm",
  "key3": "duUcV3zeLcp4e5fNpiprVV1Rx1aV21BTSMLq8Jjmrapo2DvyaegkQAH1KfCfYateBDNS9ooMegVzk2osoNGeKFc",
  "key4": "3A152eT1ivJJ2DRPDw5PQB9iunpTbUkEhGf3dMUZ3N8zdHJHF5HmPd44Ve3Ti5ftxnTqKgpEfbAVx1VwC7CUTEwT",
  "key5": "4Ao3VpkGAJ654XKfXHJQhjkziZBo37ypdH2FsdW6LF68JscSSqMJSTf5s8bPgLnQ2o9e3ybfvXhKNfRkBoEVX4ZB",
  "key6": "4o8ae4PoSCEusT9KYYKBBfBqU5LwzZd5xQBRP1HJH8poWb2pamwNE57tEKSaTN3kT1x1J5r8TKDPk5Ke93r6Say1",
  "key7": "29QfvtajifGAtLA73FUJgUdui6EdihptRdStBMrAKHJdC5X5n3sKY9Nm4SuDYYHt4E1KevtXrQ4aEu6WjZ2s4d8T",
  "key8": "3zSizB7DsU5QG6ekUtke9WHNvzTbhuW6VF2btFEXWiWH93L7LgY3AQKMp8iRpdPYkWdpMSQu2D34zunt7c7Y8mkx",
  "key9": "3t2xwYodvo9H51BMxWYuvUaw9o19U7yeZ9Y1LVJGDWWfEKxqzVUWH5mVCt5neuGQPkKDxy9zQBHzjKEB1ST6Jgw8",
  "key10": "SXKHW53d1RpUCABXD3Z4rPUpiK4qpLvnBD4MZJupfH6TwTroAe1d9HZtAkGjwCwmWFnSQaEbisKoEu5zNCss5T3",
  "key11": "3tK2Ma5yHgyb326TxFHrk5UCqZJ5BfLGJCeTAwDrPW3jceRDxs8tVkE9hVbTffoh7gDFRRV3q9RkqGq6DNuCb7sC",
  "key12": "4cEJcDhUab6vpfRhSwDhpjRaJSqm7BsYvNayPxJarV2K82LtXW9TjmycZN1MjfZq7UYjS7wNkrNTWsUoWq7axnc7",
  "key13": "yDyriDww4TVrHHKkcCS8RNnWPbFLXrnLpB14gaBj65LoGA65gwh8kejqo62S1yjU1h5C84V7AKTpp4auWAZsin4",
  "key14": "3e4Eh2X2EUN3snvd8P1ood3u4ZJk23966YdCa9RTYCdeXcjdzTwNMtMcQSWbWzVQNxaNmm5sfVnreCkqXH42UR8E",
  "key15": "5Ao2nMEvgJThHTHptVEH6YGBUX6PevTuz7FJuAT1WdfLUsXPKRYYscmPqoTkC8N5VF6hwRLeNVa689gT9qbK7Jmo",
  "key16": "34QWszgQktnHCLf1GvDbytQav55aBF7iYgMWVWKt1u7i6YphJ3TxczXiErmcGJte6sLaK4LQz8sSJPSXQfPqeDwS",
  "key17": "2iTKtfstbPFb9ckxe3Y6AG9G6YQgNHxmM6g3sGTrMsfqE9PdZj9i4NLKHc4VgzG98sjK4z2ZXSdecsFGDeshXnCU",
  "key18": "r9eLHMPDW5tUzAPzuYr14NJLJGwj61j4eTYHWN5WAm9Y5mtpk9DCyRTW4eMgqeZYyGBvfGKBXDBkR287JMDpKoP",
  "key19": "dGbz18oGx52gFt6A4Joomgea9emtkRBymPjdhgAhRtBTnHAT5TBtgeYSVLeyf2TWbWPTf9Xb9SsnPJbMj7JG6zt",
  "key20": "3PoRyxDPMdVKopNLCbeDFr8ebZnr2ch2TbfaiWTXc9JjaSvgGqA3o3g8HDUsUJ8L58yeEj2pXr547RFEXT1TYdLR",
  "key21": "2uyXfYsyin6ygkXhSp1pftk5XXy2DakpyNovgqmSzc3dFK26C9iefiSHg2Q9w8j8FwZMhFFtjRxY79AK3nWovufq",
  "key22": "4tGSw2cNP8zJg6DrqUXapLMrqoFUJGBs3HaUqLG7XvxJyLKZRQAeCEhWHdF5vxx1KiXT2y9BNfet2gS8b7BFAKq7",
  "key23": "64pHPJRRYkTtr4B1Bqc5Ak3bmzWN67hpnDE5FvKXRvacxvbCazNcobFvnh8c4zkBrd9e4qBBibdzQRDpQNYJqev9",
  "key24": "4pyCrYhGu5mHMVZkWy6gbfCuYFHzYsUUvLaoRUkZcSs1fFW5m6xoGUd4dGAUt3XeeKhTsXVqRdEuGkvXZTEiWH4m",
  "key25": "3JWzj8BjRrsw5au8oJTnFHRJmgScnijhv3ZsLqQZCSau22moXUw4A4uFTy4o8C7yBhwMGnHxEP79kGWzrfdWReMt",
  "key26": "4bXFirvfQkQnoMpEt9pov4aaf6sSWxiL8exZWMeFf6NjVgpJkeALXectc6srLNikxNQ8fTgGM1q5DzFX96C1gxur",
  "key27": "WVVtGPn1tPy9LbSWHeZKwfoXyDoHvuTuzGD6r67GQ6Synptnfjg2KUHnYwjBpdKhF3N5stSdXYdU9eto4SohBFd",
  "key28": "35KguHNtJfRyznWGASfJ3cWg67F1JEb4YaRSRaHE6phasWaNxoaLMXazXw5CNXjLfYiWKRSe7a6KcVUmvowvND56",
  "key29": "jGbRVRyk3K6Wv44GVZKeXDbaie6mdqxHHE11khVfrCRRPuvsxNSvB5UdwcBM4Zmse8XKhqhzEsYGTe7UKz5roP7",
  "key30": "5rNHWCt55CgxnFQkt415HRAkfp9oqm4LGrnSp9U4necaeCbmVZZXKu8iyEvEskGxJR9i2L5yPNhYuVWFcFrBEH4",
  "key31": "4sc4on8E6661M4Z756CF8Ws5faebdwaqoK7edvZBrFjEH5efxaWaaGrthkW7Gfmug8Vuo66GmWs6WYfZrMmwDxqc",
  "key32": "55FDtSTjUyS1LFhVui1DBJA1YbEn9zDcbdDPD38sj4KQkRwJKp9Tdt1Zb7pRyDQ5JHoYxuNTgkz1oWkAzTo1oURB",
  "key33": "4xZ6Vsn9xdKKHcjerEApHyd6yx2dmK8R89Ef1zk8Tc1xNYWn3ffVjC75hRwJKBHRkstb3mD5VNWpnXuWtFE6bNzj",
  "key34": "NKx51RGVJrPbZJHak2eWbjBDwfUQTv1VF9LPMonDphwyKn2hfficx2LfNsomunh4F2kLmea4E9RxBs38HRZoPpH",
  "key35": "3Ewz5G7J39g4ge7CYiXDsJvA7J5tYxrDf5w14aaQHk5A3xaeKgdo7sEzT4yvsVkt4mfFyGLVcwwg4AiU41jSwydG",
  "key36": "4oo1DbQGfSSMe2wgH6sm3Lk1JFDxuEXWf9pUV1xRQWQScx59QR2a3kNgjUWwcHGHRanAcoUDEENKBeTUWEHj7dBv"
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
