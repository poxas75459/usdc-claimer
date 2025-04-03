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
    "2dn3toXCvYWdf3omtVaJnoc6g2gxD5LbdKfEJxjY5zMzBLagB3YMVrzjmETC8rMCN6YtX634nfdXhDyjeiJkoipD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6ZRpPsNDPwwqXh1sjA4vG7BKwefP2r28b3iDdMEieTNPrBoo8jFHJ1s6Wwiv9g9voN6Uuv98xYgtvW8x3MvzFo",
  "key1": "2U9vbn9QSmVT3bS11BsL8Gkv6dEiFzK4Dh7N72p3PVsmjyu7iYtiHWsm6JwwTLbvR4vZVTkQ6iD6gLTSB7rqZ3vr",
  "key2": "5MrqkYSGNSonXiAQXAooXPc8H31Md6g9z78cRR3TATFRspxgeomDAoLZR6yZHZKBTyuZCdjxraz35nARDHS3y3XN",
  "key3": "4kPCrA3Mf7eQhyhWFkGbuYXKbLFeiWhPS67u95zUmyh8QK8RwZFwrBALy8bwMdrNL76sT1ornRJyUvS5qtRkergN",
  "key4": "25oydEyuhK3q3oW6SqAfjtE9M8AZWJTfUonm7siqhZqUS3W2RF71wH6cLCzq1aGeup8FZjJDHkcEcZHz4LaPpZSe",
  "key5": "5YGJ1rLVuLFS5EyEwSbYahkGwi4BWy3mJ7567oQGEr8kcp8w19TEMNxBK6gEQpJX2ur9fk9TDRyuMR9tzwsX2LdK",
  "key6": "2uBXiMCCHSmG6pLUdCct7hapcnP7btbJgv1MWok92vQ3rUNvkDgmhNWv9chWdNAxjcCRU9chGrDq5SqhjjTF3Qnk",
  "key7": "31RhzVapixroU51HHQo1iQen8qaNrpm9ND7k9cqd9EdjRMEoCVmm3jc2YJyzNCYG2duD3uD9RF2QchXiF9KumhgB",
  "key8": "14WSjpURPnsPr58ADfsifQwvYqYQ7UEypVWStx1FdiQGrPAdpb4CtDh6QQHYouJFGaGzq49ERhuisxz5AAk5fJk",
  "key9": "o2CLvhNVAVeLcg3ndBshSZMoT7Ex4A5vedLUSX9j2Yikdg9g2WANrXt6x58fDxVnQ3WiXnracvemKzdF2yM6D6a",
  "key10": "US92kvR4ErkCfsWkB1M7ko8uj5kobt8Xduz8jsWWFxs6LcEk9UdpTNyXyyLsuCrewfxgWMQfgH7SrWWdqDJWoU1",
  "key11": "5p9AHUJy6ND2DCtpk6oe9nRgqG6GPqy4c23bQFJbAsLaNRu1huVWrgvW9sf61HCYAhmpAivmx53vvXSkYmHF5Tpu",
  "key12": "51sKa9PbJQeDyCkJGJ73KQYX5uDJRqcpBPLZmkkQQt6vZCu9xVh5CkpLW8YAoAeMwXpnKbaKGhYdPSLAoBpjqnw4",
  "key13": "61gx3UTNr6xJcCync5xmPLXW6NYDisR7FzZk6uESgFiwpdpfCt2k4Pn4ezgj1mUeHc8uK2HyFnHpPXh11XJtov4p",
  "key14": "61jbGTaiRQ7yL3c9Xo85QbeD1J4Rb97zyFPHiuGqkkaQNYwBExKbE6QYthM4KCMUzzsrPRfRymrfrhgwvUEPP3dP",
  "key15": "4SZ29eGFZWCcCy7RAqoYnuTZxQrZcMC8xZM8NgB7aGSx4xx5J9Sx6tPZEmX8XJ2esRHiV23XZhnchwBdvwUB1GLi",
  "key16": "3jAZQt1UiVxm8NoLmDn3pNFucau7YpGyunYAnMX3xwtRnCr6xbZuHRxNcNEq6v6unzANuhiSQMQhYtukzahK6NSG",
  "key17": "46G6RBv5aPmHdRKJgwJ4eo5sVHcSj7u1qwM8Mis7gY9U2SMnvL6XN979MixGsWryT9z6HNEkvY8hHemc7xoenvF2",
  "key18": "5tL6PK5fxMDYPZxbiqRnkbZ1DrfGkTit1gfaFcpa5KRCTbFxanAo3Xt2C1S2YuAmyZHtXX7U51fuAYQAJ6mmjJeW",
  "key19": "5CkJUx4GBY9sLbTEVu8UFMKUW5DrV9FwoNsAVbtMdfixARFiZHfJc9bFMGV3an6qSokLECtbF6a5DmUtW3XzG4eZ",
  "key20": "4BLpzFmajnLP4oXnTZxUYjSkamTgTN4JyJ52L5YfS7cMQDM2bnGNjP4ArRWV4XwDxLZh4XPUTiv9JwjYHPHD8gC8",
  "key21": "2fP6TbgJy3EASFqh7fj2V8Xrn4Ci1fCM59pcZ1tm3jNg6x7TVjAk1p6Cw2jsUCEPJRS2CCHbhyLPLgtz12z1y5Zn",
  "key22": "Lv1jbegy5mARpXT6TG8XQPjxjcqrf5VbNtkPJ4htRiR7CCNrViddFW6hFoSPS3XsDLfCkaqcZxvZRYscEd382zd",
  "key23": "YFJvr2ijLJ73CB5kw7h7wYMYks1uG8u2uUomFfKaCbVPZrRosWaN8hontYhY5j1qAnL9Peteq7vn7vwidrXFRS6",
  "key24": "25znDuCy9urSedMBgLkSC7Lx8fiAFtn1ZuZUesiY3SKuhPftjXz2hCS1YW84UUrxHGVkdsVGoWDtAPYZxNADoCWM",
  "key25": "2V6FYzj1omcuxbJNMYraWf1U9gE2WYfUsG8yjcerAVwhiPXArBTYqzXXvNWRQAdLYVRQwJ1BgWwQUG7SULwx4qXz",
  "key26": "5AXnZGVh9NfKXzyTrjoKax6rtdNjc1QmC4jTxNrrxKfSpkd4vdGXFcbVN9pdQQRwhLixCs6PeBE3Q6meJhmsKr13",
  "key27": "2soFp1c9JXk1BzcMEW7GpT4kAj1FJAeTPrDzEDoVeBDYWegAh8D3PxtCg8L7yDRAytRQBfmZDd2r72jpw5VYPBiJ",
  "key28": "2vfMFwVDyz1rn4CymR9AH6Z75nSaLNY3WN2JNpZv8RLP7kfdA5qs1ffv3XYcBXzGm9R7RWVYKcVckCFxDCiafFpj",
  "key29": "2fBFVPVii4jwgMi9S32qXZJLtJH8suY4ieNKpBTVRFfAveWUPz4wR92RdqgD5JsLr4s9zaHS5af15gfwwBqSMgHf",
  "key30": "4NPi6B1EW3irHe2s9Yy2G2i1xEm4i2ZtTosDL2J2yewshqmrUjK5atrmqNnfJJEPKrJEFJ4HskXVp2319YT4xrwa",
  "key31": "5Uf1cxPtBqGLF4kkFDvqtfet63M7L2uyT27xPpNvURYtuAbBKx7CmdTjvUv6oBPsven3JSpZBNZ7ZgY3KSgHnYWN",
  "key32": "44MfU4Ztg7jMBWG6Ufp3D8K1aj4uUYvR1HqiiHrFFj2TNszfF3nwYUK6gsZmfpfePZCgB51y1MfWjePNLR3Eqytc",
  "key33": "3f1fxB95BCnqPDEgqT4oJK4mVeoUQ9jpsivJu2mgqdz8dZ4vn2CuV6ufhLD2m6H6S8t86MPqsKNhZ9xBWYJzEULg",
  "key34": "KzibQ2UBSFpdQT5teCsdUQDDtpthS7SzfcV6L1VwNzrjtV9jRiYGZqvHmCpr86eiF7fdHQ4nSMmNcb7oMBYVAhF"
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
