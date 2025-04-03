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
    "5nAMJdNyvKxUXi4jxLg2dUiVp75H6iCM6EUK45wMW8wCdGnR1TbVQun2t3fW9m5d3tmzL1wUcB7Fh9P2CwCjpTqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpTBk6q7qTP1eFvfabTdBHuCwDujdWNazAw17FpNJrfFfc3GpT3SKjWRpabsJ9F7WeiZGxNQsos3KiRxLCXW6cP",
  "key1": "3sXGNWvQNAT7WASUPk6GcYwT2hbZDq9T6U9atKVNAxv5Qz32cXeJou27WJzVYBn1anGEiuBQAHvgZ4q42hFnKMNH",
  "key2": "4mt4N7VjoNiV7fY5YufY1v28g4GKeBCzC9sZgZ2znc93mYdJMUcVkAra5Bjw7bLFmZeGh7pZEYDr84ekne4hN6RE",
  "key3": "4qwnS19FgNNPo1EXAsSJYvpjCq7TwLFiy359PE6tuQfBNwS9rgP7JYvweP3NCCeNYxmXbZXXRxWNuSbrNSM5EKQ1",
  "key4": "5P1kXTcndYmukkvqXoSPyGbyzhTbzmbnLCGoRLmi6XaDYVhPt21i7MvaesuN82SeAAYJ4XVma7XbCV5fiiZ8PsYp",
  "key5": "2H8jX3b8avT4HVGuusrb8Q1zA7eWGA1PvSu3cU6kt3w11cDi4uEcFx8tpqPgRXzoVna2UHF3GfTseZ8SSse7uUAB",
  "key6": "2XGUewNifbHQZdjFuLHgjfuqso1oN9g3VncARawfqXptCjzJHovxPVFhfhUPszxaxr68hZNK5WfdP3YQFniQoQBG",
  "key7": "5rDzpBoqrDU3cqugWgYh5nJFHvQAg7DtJyqCUoHXyX4YMk62EV3RawscYfCHoTQkuJ2zLFDBsqZzQV293oiL8YrW",
  "key8": "65YEDiug5CNwHyTRF5gDLsoXt84wQsz1GwUGEQFFZtsPxhCWgu5tJXkmx1Bbbsb8oCHvmbPfRkmezJHidETCMHXS",
  "key9": "3zKL5Vkyk7MhzBLK2LxK2qdVY8VfhtTwneyWXEnWsoGbnaTF4XwPEGknFDyxXs4nqKzpi4ULaNMP6QzK3ZCx8ouM",
  "key10": "EMiMHmaQeChokv42jUK5ixdocajzZ5tHkcBckw25bcCm2AkouD9V7tdyZj3TyMFGQrdXvhkNAJhq47tBfyRZ7qE",
  "key11": "28hNyk3EHFiXCoiz7TDNfATysJSxKqUiHwrwhmPE5bFT4Hsf9SkuNoWDZCTLAwNGznVJfFCTf7DrGDTZtjFQzKJL",
  "key12": "5xkxd6Vw1jnqsQfKBPebVbP8WAr9Y9rZ7v8tW85W7mLeJrgWuiVxN4ad64cSUkkku18JWd6PsQp7N2aMfjLFvDeg",
  "key13": "4Q1JQGkzrDpzpMo2Mnjtqe4abnMYN34pDXfDSdwsA4TbyczxCrZBAFuEdedDRaSSXASvy7PqtA6xxikqckKx3qcr",
  "key14": "5o5nMdUbX8S59awH1unCd9aH2YNLvjR5ag71V6y1eiwzhgtYhnjmgj7fXkUE63NJJXpVXqP8C2kmMiRwxjHyLDze",
  "key15": "4HZ4gTfZm1U3HGm5J6KZXsZqpjVz72xiccnUDfZYn43BcpDPxBtHhUt6m1WuXg788REanzHWxPpC1PU87hbvCE1Z",
  "key16": "yyHtVnRgf47jzZCYSLhcESk9zZrYGyw8RBZH9frtTfHxwdgLkMv88sPUn3GqpUTsLCAkxCENxuMkKhwdVKEBt3b",
  "key17": "4ypwPE6xtxe1AFesvtAa4uYXymv2crjEbydWnuQUyigrhjYjWEgcQ5ibogvfebMbQWUjWHugSh4zd8L12DcYYTsp",
  "key18": "5jLWq4XXtMPSFAg4ADiHQHZ1BXvCm7mVsDdbyhV8fQoWvuapeGDy6iMSb2Kraui86gjemseLifgUfu95SqRLCeNn",
  "key19": "5283nN93A6YWxghCiE7tbsJonEYTXJ9oLTQ1bUPD1e8SqCuMBQzbfD5iBgWs71cNgguz51JgzDdCrnRs22oXNCnN",
  "key20": "2xhHXBN8EHtyazbJmZN1rA4vS2RvCktG6jZMFuhMtgscXYHEzFpQzwy76HogUFYEs6EAHv2JY3PPJdibmaYNcQ5n",
  "key21": "4qKpabCBGE97atsU8623jWyimu1iHs5JzVsYKMLYVQMUkJ9GmsCwwCHYiPo92tBfeRd8wbAQWhXddr9HPSN4vJp2",
  "key22": "5HGo4TWZgA7GNZesTsTW6nnV8V5scHvrTGkQw3uvBsJoiR2gE8EbbedVL1HnpdnHwqkUgdPLqJHxq3D3UrJGYGQc",
  "key23": "3tkLmboCf185jgtz2ACHQVKXV6ha6MdystvLyXSTpPvCxdDhKxgjpqXNVZ16mmGzmRk2r1u17N5MTTYerVrEgb1w",
  "key24": "36ybeZYZGnJAmV4tPfDWV3gVWhK6H5CkqbCZDYKWqeiyB4a2C72zV7rvyTTbTGVAJ5nhTPDCmCJqtSR9dppwFHMh",
  "key25": "5YWeff3UkD3tfmvcKUg1AX2uxnGJbawPMkf9Awk9Q5rJUDsNeVtq54cP7P33EUULbqHqfT5FcrfJNEbXnyh5YUZo",
  "key26": "3uXPyudq2hLJ8zhVzh9L1zjsinHZZ1WHWNym1hEtqhYBznHyWXfkPGQVVZzpkrwQm8Mcm3RLLcSaMHd8hi3SqEj3",
  "key27": "5kDhbTPhsTedHajfZXx3QSMWDdvh6H4JurnRy7tE25HH5VF8XHdKi6vycA9QEN1Cjtx71HmNvoXUU2jpbrHMRSNn",
  "key28": "44g9tmKMMVvfq5aFfHivxFJnh1gAtjp6A39BEXfwEFwmDnvRTNi1Es5j3PydutK4hY6yU9gtgYBonT3M4zqnuZB1",
  "key29": "4JVqSLA8Ux77zKEq9tthvppjwY3x3fycyJxXKyP4kqGzDyqntJaPnJWeb7sS6oUmdr5sDCCvdzA9EinUAvMScFco",
  "key30": "5Ez7QamXZhnM94eLwXMvfXtsYdywtznWfAQR3qBrmUCQxew7oWFHWRZ9cX7mx6nZvmGHKBBtWAk1Toawn1D4u812",
  "key31": "4izAz2QA2fdTtK3byHYh7DWmXvRgLxZdFCNDJyh8cdLjUd5Nih6rjWj3QjXwkGAVLniXRuVch5Dzuy2ZrkTq6QSF",
  "key32": "54w7QML8Z9rs1k9S1D7gkxgW6oKEbGfGyLt2Y41Y1EoL8pATYLj4gvrywStjUpxcgbaK4borFsa3b4f5CcCm8tZf",
  "key33": "whgRHHWwmEy3sq57DofnbcaQLYZ2j3gTB7BvSsgvrzsMJeNvPYpKbXkGTD1YLAfNYixn46aXgw4gPoHhSZ4qP98",
  "key34": "2t9p9je9nhqwSd6Y3s852RKuqJgJqzSXKAx7kEZcKfvbM1QYkQHSyHEr3N5y6E61sG4GrHPrUYydu5kWKGixjbNd",
  "key35": "34TrWrJbnjtM3zBonDP8JHgcHKxjWiRVq3yp6X89jPfqZcnFQhcTecJxXugC8Dzq7vfnCJtc5KLpDwmKhjVHWcU1",
  "key36": "3T6rGEHq3QuePAbVzQ2G87uYVP6duWZm5yvfsDRo7uBBXxaXSecwxpo6xmRVZsyAKw6e9zLnTpc9ruPxhfbwrGPR",
  "key37": "2iCU3JsqMEFdKvRiNhqdri1QHbBUqu8sVQvJLygqspfhdZfduyKYYwHpZq3aZwgU97o17cUQ9UdKY9YTtz8X45KV",
  "key38": "4qnQDCKjMq8FU6gnDaVvyMEvxNukJrTbxWwP98BX3zVVvvkHkbYvv56ZYCBgws5XUTw9sekwGkYuKFpwJCKfZRV2",
  "key39": "4k5g3vxDicw1afTMqRcr9FoYuTicCHWnXBJ5ZzmqU9DqSpEHbbJJ5ybsoKsTzjVmGxM6v6ghmRD9RNs95xDrej7G",
  "key40": "41g8fY4XqaivBRwtZxeUVX4yc5yBfCBsaSjboHMB7coQywRcRfhFEF3PNukLok6iSs1z1urXZh9sVDkbszuhrq8G",
  "key41": "64A122RhgEQJGfoeiNwX9ZKr269zzebFVaCurGJE7euXy94jxqxNRGvTCcBG5dVqu2rVA65i6gzUtkWjYMKnzEvk"
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
