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
    "4fQkYSpbMY2zMtQp8arrLqZAiPGCDLESWm2zVmPh9PtDcuVHAvHGrTHjKJYWTwRvGsCZxui5gmE7nnEAaJRCkFZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5AoJKQUvmQSyL5qZgxVspjdoR3L2pXKbzS6qH3TPKikZouK5Z8T4Cp8F2Yfwg9qunQ7kzddMpcuDJZzgHVqR9q",
  "key1": "4b6J6MRGGE75UFdsJULSgLoGHHMChtb2FjFbzoWKGrdKubK53U6rAWZ3CBcVbmVnpYLAYWXMB7gZa6w8qoBR5rQE",
  "key2": "6z3nagf4RogS2DcuhSLzE7GBUenL8KMDcmEBQcR36sPu6xwnWq5t888Nm15HVoW6dvUX4XibEv7Cr5NyK4rEDsD",
  "key3": "4vD1AUBvDpt7fZAoto3C6jphYgMLVS7Q7rBxvEL1UEtWDNJ9TU5ynnzk3ueAgRL4pd4i5rBSA83BH5tKjCDHMzXP",
  "key4": "iUsJ1jzTy1ckh1wPszr8DkS5yge4UMdRQF3XNgd28au7TRJacVUkJ5iLeFby2EHtS9yiKpYiCbZRFes5qG4txkX",
  "key5": "2oKhsToeRaKfNuqYCojatH6W1BQiJ99KREG8yewcFej8RpUUdgntPNT1oR24DC5t3DcmphdvB4mgL4mY3Dy2M9hi",
  "key6": "4PPR8RWQQes5UUZiVDaSyFiwEzymYcFrpQecpPzCktJdwYLiVqmpokmnf78zkVbqVCiywupyeG27CsGRwNA95f43",
  "key7": "48SvmcqLWAsrTKiYNctV6TEN8Z1CU9VrCKywqyEUJ64hNtcQPrnQ6Gk4iCDpHcPrsohVrZiGtjzLUU2oLnP5axPk",
  "key8": "4xnVqzoeVA3UFJtgmij2C9iym2zo8X8BPnuF4tQWgxmrQdbzMv8EYcw7S68htdz8ShpyyLNVnz241KFdzkbawiJQ",
  "key9": "5aA8taHriwn5Kv6cbPr4jM6teMGF6utXHps6CQFE635VEY8oqY4t9wnzEHGwR9UB3KXfziYXJjZcgJJyGM9rAD2D",
  "key10": "4UzzUhdhZgtceQZi4hhoUbWF5qnHsgKeB7yQHP5yoGp7bahfmPH4nnw7yRmybwfqxhPc7tP9ve1xXg9wLqxah9ud",
  "key11": "tyNmYLdskeoze9m9SUeNwnFyfpxfrGU6uk5j5g5Rr27Q4UVi73ivapEEMNP8fwxtiPSx3irn9kGYc2KLptdhvnC",
  "key12": "48k69bzvsGkFEKJJQkR46iFKFqQ6Vk7ijquH8SxnyEdcWrkC1M5rUWokV4QwmSAknxfrZ9gbdXW2QY17mZk7aRMw",
  "key13": "5JwXdFiozusJsTYjh13vtqjb7dvA9H5YYAq2Av3qp6kMbQZqqVY8gKk6guJzZk33qiCKug4s2ckAfUuFXa1gSbas",
  "key14": "quFc54eokrC3nTMzKYV1Tp1QgkmtHkXmk1RWM9tfHpFLxbUPVSQphjYV1V7ppqVtidAs2LDP68wFoQpPn59KZeH",
  "key15": "3GRMJ7MV6atEgErK1F6pgooPPKRNUMVgnU84xUKtYVuxHASmg3D1EyuwkMQvXdzp6crwS29piaD6dNH9pxNeUm78",
  "key16": "2zmgKTdxqB9gSMbTHTEriAKsv8w9ajXA8GavVkkuSzWRoA8E6CJv5hgrtU6BBhpM6Tqf6seqRU1BJrheL2iGYL9j",
  "key17": "4DFxeKwKvJPNsYVVU2iExGJas4iehDY3ZgMy2asvA9xeGjYvhs61fEU1xzu5YDRoErq7bCqMYGVWLhXFneCWwn6Z",
  "key18": "3Xa2cD9Zs7rxDJbU3CnB1XcYcSGQiekkhAeowDXi3QQnZFkYo5E3cy98PLGq1f64eAepGTtcLTfp5LiGbDsJAgn4",
  "key19": "2iwdUfAyQCSijRjUyoWHi8sgJWoiaZcog4aCyPSyYAMtHG5iBagP4zyo4pcUGdPonaTfiZQqHXfqgq6WH2LqAeHY",
  "key20": "iTWx2nHHoH7PM52cViv8T5kZoQkcLmf1nYZL3HE17FkVic46guDew5TwGG99n2bU23osParGw23dXT11oNwoxxa",
  "key21": "4fmLQaYjJRqowY9bgpU2AwhPkRbx4sknh3XBx3Tf22JU4hsX8evNVVwtmFw3Qm7z4kCzGsCJEDVi5e4JpXoCt8Ut",
  "key22": "63FF8m5eAbT1nGSc4RZurXf79nZiXLHVQW5ExALmf1S1UWvwCKmiSKMUKnFu9DrwJAtke7QfUKjrHvohcqpBoQ5X",
  "key23": "g7Pcr5tbkKnfmbsRPPs8MJHroWBjpnZPN91aMmuxYy89DAaLZkqNfg4SnAThG6Ngh59YtGGHGZ4ZDqFDvqCBd61",
  "key24": "5yt7T2WDuuj1yAnAQcbmGTJxXe8xa2ZH7rK5EeB1yfPRNVEESWxUuUu6ZuboGLvEE3xRZx7uVsgD6W2jNS86yHJ8",
  "key25": "Up4Ks3VNy3AGjGu3285QDrxZmvWqsb82a42nksNF8sn4HguFZAS6P7BYGYyuS5SLN2s7QezpatKhStP223im34F",
  "key26": "4DdLFzkob1Tc7Ho5eyxtzAW1vfiPmKxH3JGgy2cppR2hDmszroPd4rLU3FPBgZYFCb7sHjTdEMQM1SMJXzmMEN7P",
  "key27": "ZHaxiDa4AN3VWuhgnS8pxR6uqAT57cniWyww8oPQhCK9JGpZqzmsMcL92dpAAWmFsEPDuBerUWBSDN3S4EzHdQQ",
  "key28": "zJjK7sdGXfuJWZJpbTqmYRpmGnCBALt7wR5gCFf2ejLqQiFFyd6bthEqq5i5WtLwH4aBXdkrCneb5zbnuCUpJ1M",
  "key29": "2GV86Ap5qCB6KdmFQmVT9y8BAqYGmxGbdQJgnVbv6XprnvTS3qukhTjocAL9meWFjrgWsP6PwboMAQShLR1tbKCp",
  "key30": "4Dp39tR2H1oMfmth4fuoaevaM29maBqmRLh44nWA4Q4jtoK1aJnTqLdqJwjr1yjFHCrvdkgMHnzhzrDrycD8oXFk",
  "key31": "tGtV29vruvPq8pNn455fxPhFoT1qdRcYCd7cEm1ZYgvLvqBAjBXe1cKqdxTyf1FRv6VATEGtVwBXRWNebhMFboV",
  "key32": "25pjbx94URohcJ5cyqiqyQXiJ8Kv9Xu2SE5T878kgqBSaCn1DL4mJFh8Z85915RccuTUeH7W8turjsmkWLCtWMB5",
  "key33": "2BHRmAPTEN3mMNbTWA3oHDW28ey1Drw5XBtRQ6gyWPWctnCsdYsGngNZYEcPNec5SQjgvjyTY6jZsnNY7s9dwmdp",
  "key34": "5nno9J8GVKMNypiSq6KbkBis7cysXr3NmEzXa45ing2mVoAPh4c6DtgWjEBo8pjLtHco18RPi9M9SQn2hFV8NGMg",
  "key35": "bVLZk9T46d41uoQZhXvf1491e7uTuDoLsvxc5mr9zHt6fUTH9fsVShWL4Sd4vaZPYSL7mr1mTC2QSn3ZB8kLMr8",
  "key36": "45Vm4SJN2Yjwvm58kH8FZhk4qnKcQL5NbjtZVKjusnnjGu4JPWNejEy3krBQhCZHco7p4vWUbYPrTQXDG3sMSFym",
  "key37": "2wnYup2evcsVVJSHMsw6EfRcqRJsqH8EUQ3buyaij9GXHp9kwckgtF8emoKkPT9g8VXjnBaJF1BcvBoSuuFrxuq4",
  "key38": "4nxGL3NWsWMH4EDvdAJq4y7nzHad4uyaKeZM8DMX7LRRfyPAKCE9wLT1HUydRPSXtPQba7iBqdaEzLahj4EzcPgY",
  "key39": "4nd5Fmjm6g1dQ47FjJweCAnwQpkUfF1EnQyMMEz2bQ2TnFD9vFh7fp2CzkLK2AbHXhywnSPj3gzpQhuZDcMeUsZ6",
  "key40": "4o2Z8yNgYTyfroKq5jhT1xnJBHVCP1T6dj5BsMCPbajpE2RirQ9kfNsnLBunmGuZW3hhycfX1pLoqZWeqXVSKXQC",
  "key41": "5covDWGhhdG2DxWC2Yp9xTykzqH4M27ckZSq64b294csVpW3RyVK6TFa2UwRwV5dEGvqR1ZSCD4GZSbXLxnUV7vj",
  "key42": "5FSn7hU6qYYqh3vsLXo47jLxvkKzygUqZGtN84NqzfJvmXfXwKcQTjsemSdAarmWQT3AvUBoVRR8X7DvKakLhp7K",
  "key43": "5h49ptvcchapJQ1FLAJJTFenkQT1SEDPH1Atk2iD3aHw8Hdwtav6mZLfo5ZHUAmXhLgFLgg3NUS3L6xSVR1174nU",
  "key44": "Dd5vERN1KsZ65WAuQAc81zC7UAtMWwMqc1nsTQR7MUZA3eybNQr6tv6EvynJvrvqu5b4otvELtNm5XZoavwukzg",
  "key45": "5ZCdUtnUscMAsj8Dh7MNo7NVsXNWjKat6Z99EK9Auode2C6Hzk1oY28HC7Hyj38JE1XHb3RJnzapLMaPnJuj5iFm",
  "key46": "2Z7PD46ZJtTXt7zkDM4VVrW8gHfGhk13z7C65LXtJ3wUqvBT6z3j5z7MjV53bJiLRbdF5cUKbAhvSf1AfjbebXDz",
  "key47": "5QWzs6n4UCBysYTFKJgB6WtSQkVYbFkRB11PbtAoWFE8nLKM4buKUfhnBKTRSNT6H4PEdh43HizdaEG3FvrtZzMJ",
  "key48": "3YY4ws9YQdrAYDHJmAbRB8xRYhtnuBsgDj1p2ya19oAJE5AFAYX5zTDbzzcw3HY76JwBL37GHW15x7rtKT3RTJh3"
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
