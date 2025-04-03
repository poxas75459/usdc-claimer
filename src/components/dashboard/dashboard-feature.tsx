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
    "3z7wwF4QWn47SDDGJjPa1dM7EE3kZxnTtEdunLyZJwuLZhpPxvhoijMwhD1qXRvt7AcXYgYh7bZt8KbzAfZeuchY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qq5u2QvERaC34Y1HPoNrmqn9Z3ukZsQaXc6pbc3dPqB39LKT1jmumpESSjBYMkMCcW1GucuXfUXXqxHsnx3UyT9",
  "key1": "cHG1XkksG1HoaZdYiBBL4pQerXxEHJ5iCR7u6jtFLhfPcLXNLdbBHY8ZopRMFgMWtC2W2v8EUpE75vNyHhBuX5i",
  "key2": "5PRbnfb58Nt9tPN58SZ7rG6SN1jUDeQND3V1H8xNDNVwJzfZ2cKSweRSFHtRy3c4VWeBGrrqXBPfC1UQVE8mppP",
  "key3": "4y9UcTvtDaBFzasHKKsDW5BjLoorWY8JWtmCtZVfjPCYZ1u8BNqTtCK5TWsN1ECVCP2PgFpp3SR1mMFUHXAiMtZJ",
  "key4": "utcacPu9Cm2gexGRdqkPgXJPu3BtQzzCwFr9dt9fJ7k8Fg5i3QBvqCtSXhSATVyfCzqkEt7UZon8daCFfeSkJpk",
  "key5": "3gWxHnGqD6vWv53P4PrUDYHnmpWPbirCr3uJqPLnXAX5BSoUSABcc3xwLCZMTg7MxmXAqtJetBnEcdPs2kXG4FB9",
  "key6": "3jFT4uWWqTbcXZByyUhCMuFzfcjdovuUJ3LNP6QkYz7DHx8PMXAf52ER1NVU2EnXyGkTWR42Q6wPueKbMJJci9aH",
  "key7": "5hEWGhsFgRTzKge3K8QSAc4t1bDNheh2zYUFANoDAo2FNNRpGoW8DeQS2j15v9yi1BznRVtu9fq5D2Eq4piJJpNL",
  "key8": "jm4oXKvGwmt7mNQ4JdiCqtqpLDH9k6ia8vvDcXKpeRwkJ2GMbhCA7mCBzhngo9uAnHvB7TtPPobAij2pG1GRz1E",
  "key9": "5XivSWq7W22sVHW763JjTqEr7yCfiTvZ4VksY3tMF8pqrtL4LhkftLvTp5FsNW1mafPSTkhQ2yJQGCFee8fGHjSc",
  "key10": "2QEL5XVtMiqWM5LxrWLdQz1hHJs4doDa1VqD7bQH9EKfdLefErHf2RsrdnpUS25zvFshnEpiWp3zkPZWKj1NYvS2",
  "key11": "2GbgiuzRouFeDMgT17iF413LqvQv7uLsmCmmBmtsKZ2BbLbj1GbBPgjMEsnQ8LEBdLuBuKQTeUTt3zZHLqXFqoE1",
  "key12": "21GwUvSyow9Y5zKRtCCanS6QJ63Ej57HL5afBnwiRb3qX1A36Hz2qmf7s7b7rmEShXhDqdHfiBTcBNkrWAj3g6cD",
  "key13": "36AMbdVFCpgiWsuRbfYiSzvavmwvtkEwJGHK6qnuvrnrEmnqeveGe1jeqDh5eEBAVd64DB3xs9Vhn5kJACHnv635",
  "key14": "56G3hAB5dTA74ygRtpif8LSYEwTcY9NtGKJ5JU3TUesZyUQvg6Ego2jgcn2gozHLEvn6M5F7xqkVVeQcmgAz98xt",
  "key15": "3g9nHxZNE32qQHe6Z2sxpVywTdoNtGisqtvL7jhDNwRaSoD4WqmkfHjXXdwb17FG2bfhxmdetVTXwcmzTGtm4Ted",
  "key16": "3FLKex7M9ENeB234gFCM7WmfAHR7pz1g4riyoDfb69UuuQ1vDc7dubKmAuHbWV21fgUitqH9vvkgduZGvD8CNLWa",
  "key17": "3EY622ucpn2PqHxaDbhqBzw6yi1R9ZhDV7rSd3nc6aph35LH3fpmjSHKbPxdHBUq3MpnmfuqbtVsgGNh7jiSYtW",
  "key18": "Mo4VhezxkUPaN6q3yBbypYodEjax21FkF9MR6iyBq1HdqoAoSQMuWGoW2vmCB5zmW2tARRgdP6L4PPYLaJAvu3Q",
  "key19": "oH5M3Ts21gtLAzAJdNKDxStFQveDPQxcki8syCSgtTweWhJkZofTnEcQ16RsRBm5tbxWAJiRjmQ2cmDTvxQsSA8",
  "key20": "568TRopq9WuzdYPZREqyyfRR1Ufjj7Uu6jrL1kGtDxKvViHtEC3iA96YSdJ9ZLHbAZmxFV3q8JHvLG9FK9FLhc1M",
  "key21": "5yiKzj6YxKP82wrgs77X6EHf6vyy4jVLJMXXRpHDVKKkV7jyP6JLfc6jpDuXhpuRztAW31gpZQGJ6F7gL3W1cuno",
  "key22": "4KMgaaTRaoZTBWjrEaJyoa1wFgy6VXXQF8VHqtUwbNGjQAsL9nU8jR6bjKRa2YkzhAyK8kD5FRtJWtGh7kZcPLRF",
  "key23": "49XMVUP1mwpzigSVbMgxy2sstj7c8qK5PvJbjV3JdepTHfADsTp3XUrwLvDAg54H4SYJY3dnFqrw8v5vtKCXkwzG",
  "key24": "2nNbxVeskw5cbw3C66eXgCxzsZSaSwwL4BsR1roGyb76LUbnkYX5fgsoFG1h27eUuufCTBL8CXafZJGWV7YL9fbo",
  "key25": "d3boyUBFNDSG3ypWSVDyaZPoHL31Bw5WLCKMJm4Z33MAznhmHd8e3v5DpdJiZ1J1pjkDpVGhWnas8a19XCKTW2Y",
  "key26": "2SJnDombsmeViAL1z6grYXwXM7mi5DLKzMTSQiw6u7VCzcyw9EAjuAGYW2besTRxYBw4DRctCyZX3YP3AtcnghLA",
  "key27": "YXiLrzEPRmrn31tmLiKwfjy778F1HKsbsoTwcQQcP4UaELsBrNiJcWAtxfpU2uJpQXNBwXPanN4o9nhg71BNF7s",
  "key28": "3JLH9sc4dvoaDSAMYJnEEP22thjm3A4ENUK3r44LCY1NRRrnckx1dXEe9yq8MqhbvsRk18GZCANEx9wQoWKKa5x",
  "key29": "5seuBDX8Mmu5Mdu4HYSWuSnYnBZgXapkvpcx7tt55QHpofxQWSBTqxhsMXMryGjJ7bQ7rC69GDUeDut9sCCBp1Cf",
  "key30": "3f8yL7QZzFNn6NoCLRUJbotiJvfUUvVzWMheCYhnDnwLWLPBYabcMiUY23fRJu4W5mCsHx56e2QMaLc8YNvEZ5fa",
  "key31": "4FzAPrBzqz7rmeg8RcFKdyn4Vd2GJ7xDbkEmBnsEeNbndJWfGhL7HuWFhGot1Y3ZWyn5d6GCRnQgBZLeTVwXaLxC",
  "key32": "67hAFEzXpTpPsnhNpcjq9VnHGhM7jP8CaURFWQHBMo8DuLw4YRh7Bj5YU81WnJazDNWyg1KMXm58hLggE8E6GJT9",
  "key33": "5f7n8JFJegsECMpVjWWcWvQwQsxCs4iRaeUfa5J7nyJWi5yGx8n9qqAJXEmaNEma3uNdzWgeFSH3kpiUvQfAV5uN",
  "key34": "2CsrpiFypW4HuEjRKf3bosg3LfStVs5DG69dpVWttUhcUanaCkvXJPNMM5PkVZfb5B8CLttVMJ33TqeLVGMNZghy",
  "key35": "515tPaGHGuK2yC8ikp3WqMsGQUioBGv81FKFSfyNaSMJUgdb2B1gcHekzbYUUJGi98nwd9PhZ1JNSxXXAYRCPzLw",
  "key36": "58vB7dzhdMMnRJAXGxtr8g6szu77Fhv74RgHdkfrem1EAY1vpiEpNtfm6rLk9qK41en4TazHj9M4nFcmRWMLHAUN",
  "key37": "3BZamiRCMeseua35SNCApe7EgavsB4BxhzxYWFjkMkAgLx8pCKiwvtAjvf4wHeJdHtgZAdg264LmGnTb9dJgynyC",
  "key38": "rabpho4tMXgbmbKLEK4iUVGigSb49Wdk93a6b1YoW5XhqHpahiiioW8G9F8bT7o5EovnkXDEPkH4nrZeLerWVEz",
  "key39": "3bRN3NVCcZz6A6BquviN3M44A7iD7yr19WawgE3hxf1pc51xcRRNCBBY9Cazr5ygGATTWsADi1q4EJpuox9yxX9d",
  "key40": "4Y9UTw9uNJ6x6zx1Fzq2Zt3pD9ySQJgqyXzLqKx55LWj9G7GVy3yBahP2NAok2C2c5QRf5Z4jJqUFR1BPLmwJR6X",
  "key41": "2tr6wHVsA9PhGMm8rcC4e2E3NJkHoR9S7vkPo3Fm58B6vNpNbedmYa9Aou1Nptsu7ktgVdN7khtqyVRnjNgWqJpr",
  "key42": "3TWYTFdJBMQa5cHnyQFmjEEua3wEJo9dy5bMohWEdQaTRuQjxSvEg2e9z73yM2W1sRdSN9NmKueU6THLU3ykAHuu",
  "key43": "hjuQzs5XuzwehgD8cbYuhqzpwY6X2PPfDdmi1FtSMjHHs3PVGPXGwRb1iAnzTsADiPmYnaeAHcbr9b3yck2gTKw",
  "key44": "aQN4jKvy77g9fzLsbMNY894NsHE2EXh3emTTr7sN8wpoTAjdFvBYrAXyJVRkApCj5p71eVcHEoskqMucNDJ2ztq",
  "key45": "3ghQ6u37aQ1NzNB5ZJwjKGbLniwg4aBoMxm97TrR4XweTXvpPNWxKNHWNt8k6qaZZZHNNqZFwq31oRbAxbwdqSA1",
  "key46": "2e1hGrzXz8HNur7QfZakHW3z3unydvp7CSbqNBZyTbYr38TJdS3PrFetmBtgMmSEHV5gt7EaZPTHPp7TzpDNXzpm",
  "key47": "4Rt5bTwM6zwdC4BwJz4at4rpeFpRkNSStW75qtfRRiY1mPqBqoViw69sxwArMKkkSRo15AXunkZo5nGEbftZBApf",
  "key48": "4DZj96GfFEmpwT5gtJ1cJBEGpd7rGUaZhsQH44a41ja6Wr6Xw2yvVu6fcggTLRrXxd97mSxf35doxzHUwtBWgFox"
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
