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
    "5U6EcAVmRnSS66CUJ35m2Ub5bHhRZfg19KoN6QQrb2MExxU9wgVYUV91pFXx5Mfi5u4njrRTVzUb4TEhWdRBuHQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pe44ARd7WSvdjxvLShuGWLKCHvMFiKA7QrmkDa8dkewkBYzmDHYZHaPFz8NTgXFZ2cdNo7hG7LpA4mrShi5S2GE",
  "key1": "4cizqr8ndhfHNfUeC6ck1HT3nDsc5vMAoUVBop35ToHBz4JiT5pCr7ypJqx4Skg7FjJs6fQiYyKc7QtU9ZUqpUpk",
  "key2": "ZogRfJgftUw2LuMV8dCJNZT8cwQAWFqpy8dK8DRyVoLSJcoFVi8TgbFcESpq4UYrae5LsAvBcjQ1HAbLCYAQ98h",
  "key3": "2MX1ziuGMoTiPHbtso3bBEgmbc4T4FXaMRxbd8DhP8oS4jii8xgoBZUpnY7du7UomeQSPKtYWuPAkVMGvRjWdWfw",
  "key4": "4NWPaQ53KBwEEQkmH2pQ6fhVtAiSTKXagN8pjg1hH6rktGEeLjSW5GsQGHbwUx3t7ckk8ZN66bpcEQu2QryxJj2T",
  "key5": "3h94DuFHgQbNHeLcJjkLN37ofnDoQwZfRwSJiELs7wzR7FKPEuCrgUrc8et4jYS9WEgZZWxbuWYXUdVT4kWh3FCf",
  "key6": "4MrbefpBJK83GbKsWSG6XR5GGpsgSd27uiQLRLQqpRnTF4tUc55DAudLpKLTVy8xW9MrPGNpAaQGiY1FVz2eTJiA",
  "key7": "2m11EtnQsMJfX7agXrBVBtAtdeHW55NoLoA39mbBVfkk8yQcd3zXAk39fnMjTvWjb8rHPid2CSr2Hu4oweePBii9",
  "key8": "5xH8xqBapdEtDemGGkUgZrWaF5DASJrQy1TjpGhKZWTvVyFAf5hgSXVefWcu1J31FNpaJNxE6UazGb34zsEKDFcT",
  "key9": "uKckvqvWFyLLgFMbGQkNSSqxyBfkF7HswW2KPwXC3pjcZnAN5bFhLy2MfMeRQZTosnfNY2H7ZNnc9g4ThzgAgSH",
  "key10": "5iHjTqBSqHV1MNnGXsFw567FWxqA6XxSbUizCm1XVrtzBUWWMmZw3V4HipMQgNJhGi4d9SkooZ5k2zi2GoUUGNPL",
  "key11": "46VMHwdka8bGpicwJhBCvJ8earN72CpoQhH3A3EPvw8iQ5PCRqhpXfo1GJUBecjrrgZ6CMb1XmjjnRwaRLn1YKtD",
  "key12": "39ncfHpQpsTwT9b9z1zPBajax9DNuBxRH7FfHLpjZcRVwUUyTr16Cf4ExcDcwhHSM283ccmd3WiUw1KHBncgcW8D",
  "key13": "2br5fheRRP9jNagRqMwwPRhDDJmoganQSdZwCz5haBFb8KmnEjtUbbbL4WjTEQcwmBt95BHYo8zhuK5DA9gx1BT6",
  "key14": "5gqEovpvoySzxSctpPUtKTEqN8LjvDunWj4miDasshgEn4JrPCkvoEGEAFgKf97zEdjWLURcw49X2383vYXKRECK",
  "key15": "5kVCWnKYDG2xZdZiCeXUaTbQammKzyyRqkq9RF1r5zjCeSAuQGYPW6V5thoh8Xms4AiAPPtXASaUg7YmueDFRZxi",
  "key16": "5zGgT6q62Etr4EFzhwtruGWvWazxwnFnYnTsmWLWAVP9BMQSBTeUH6Jg2DfGJW1hwxtnTd7Fw8DseUVd2ojQWVED",
  "key17": "4GjJ34SsaChqDZbag1xPrJis9R8Jib1KT9iDuxodbn5kExEqpFBpFRaD67dNXUfSJPNL2KQjFgvE5KAuMfTPv8Y9",
  "key18": "2q6VVYRgoSzzZTncQKne9eYVKwsqUdZGMKGGvF8zo6FZSRKxWmEmfiG7EbHAUhdFwTD7wkSMzeEdqX9V1wcDAqHa",
  "key19": "28BoriyNQnBtC423ApvQbkqUF7D43oXw1KtTH6FSKEikYJ6rdgqtn5528oSZns35DPYD9i8FwX1BGLoUiQAw19uQ",
  "key20": "24xz6ySMhXQuU6JXM61HALKE2DzBJrAJ79RwyzuXip4ArZTrce3WugJk9dC31oVY8Wka5DcchdgYihwoxFZfA8C1",
  "key21": "HX31zvVHEmsbfPFSPVpe8JrmEfASB1PnHdxzFwPazebeywLMh6cj7z8L4fUij1vvGiHx5X71mhTaray6NkCSow3",
  "key22": "fEXHwCemWCHxP2LAhFNQkZ4XHaBXLLnYh9xi6WAydyi5w1MYgXDtSCZj2c4idrovtkKAzMhNBfEHv9oN33BpSsL",
  "key23": "3W2WRstCnfWi8q9biMuaYMJXVGo8jwMj9eGVcnkcTqvvh2hfVvTE43Gjvmrj5UNbbRtPUZxSHFBCCsweiJwg8vmF",
  "key24": "4AbEhfKscYhbvnW723mXPaqgUmTM4r4invgsb9bYCxBozjdAKkYUwQk1Dx29X1seeZR2Sn3b5gouLDid3qFUHjbK",
  "key25": "2JoDRvGpM37vEfziHc23kfVKiPndUHPoKf3G5LnofJpdKKaB1zNXEuuhCQkdHtYV3qw76avCoxYwVBDKSWEiSAss",
  "key26": "5hNpYvPZHVND64sS8hN96jUPiRNpbkwHbGRzuxDfhcV3BX1bFEMDLw46XDupvrMgSiptn8QFGx5wmYjurc1NSPuG",
  "key27": "3eo4SvjmSejXJM9LDonTaQ7SxjDLkTupo9KTL9PbR6Su6Gmpz5Hqva27ivD7HffYJDKV7FSaagogd9FAyHN6wXZh",
  "key28": "5oCkZxDqh2YBCJBksE7MDNH5mQk3Q37huQjxo71n1XiYwAWUWqtMue8b6kxr9K93VWwANDLGK3uYK5omuZXvEvyn",
  "key29": "4zKgqTDpyDtGwS5LsYCt3Z86VaVmCD7Eb4CUooSiTfQVUfJNmt4gEtQyzvFTZ9sr8osKnaKSYeugGj3c5qTKEwrF",
  "key30": "4T51EfYGGPfz3pfwqVPzNdHG44m8vHQb9SqMncnJAVZzcG9SLEphRxyJ8qMhGbBSzs3NRA8AFLdBLe3YCqoh84N2",
  "key31": "rJEkLKCz4HJQKBqCUEdCx814GyQRdfsk5QcH8hF6TE8ogX9MQPJXH6XmiX1cMMC9RyWHAnbTmJtVNAW2RiLS5S9",
  "key32": "63z8iqx8o5feFtxVM8dkBN5aiHSqyYMkxsuX9NtyACdpN2XHr86v5dnnnSBM9AK4WvqLd2yHU4sUUq7xXkBjMkuX",
  "key33": "38sSupNy6mVXPKRcggPhYWaH3YmXvQ9DXjhRXqvdNEkqqNNp18uFnzE2emfPhHerakLgdupQpmY3Xy9LVP2NbBF4",
  "key34": "34FdWDxfivH2SaPej65fynNZQoS8VrzcbQ2bGCX4n4GoM5baGaikvxpLECbdCwFXb8nx1ieq7W4Ywa2VnYxr4hvD",
  "key35": "76YwcHnzT8eYx8ikHgpLv2jBhGcCYszq8Tw8C1XPMLbNeLa4fPU1zAGSQmT25KGTtodjMvZSuWL7aM2oU7ShkMg",
  "key36": "61qvqyN4xpKHbdncEQM7QDY9jBEgS61kyQZKLHFoaERtJXtuu1Ykem1LM3nxWiP7v54ZurKNa1kRu7eGFBa1MNU3",
  "key37": "2NHnT6usn5E5soBv2n1S2gHCj398EVonFwEMtHUoXdd4vrdfdvrRVGK425HvT63hR2DqVHfJaC6r3Q9gLad92u3X",
  "key38": "UszJsyRB7ZTYKzJhqCVd3Y4WsFdzN1KMhLogM7qRXVyH9s1NcaSmbZBdvEbQUfQ15hQfQz9PiBemUP8zAs6Sc4f",
  "key39": "2bSYmzo3Lnq12PRBgQ7oxdL72BRqpp4fsCVWigVkmXETCCMixx7ziiRwYUc4mked66k93NbVLzZ4VwMfZrea1gNJ",
  "key40": "4bXj5CQ1rdFci4ATZbBE5jr5UgfmdfyHVRAEjLJ56ag9LwZjJPTNcc6HoAtnG57Spr4ujVwpfZGzPrFYaGKstqSP",
  "key41": "4a5zLxyPWj3hLM9WLLje6tRMs7DT68RmKjdWBqMqPA5mYKPpaBaPVsuucyP14QfEjj1KMKu4umxjneNCGivM9rVv",
  "key42": "9FRFaVhvGTzzhPJen4CJudfGkzxGdVtAmAaBQJckakNetuoWuuq6g6YPxGVH25RjZKTDgMVHgeVZPsPtt1c9HKR",
  "key43": "3bcBQosW5SiqbxZahHnmwWAVy9bfFupMiBrES2WKGsSPvHAZWRJmeJF2RKpUBrb64JU1LCmaviZSgiQbwN6Y5Yb"
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
