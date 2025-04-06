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
    "43ykRDYt66nZdKGSVBSDq4hbQvRpXf3UciCrYzg7nvTehWJx1F4nC3mEjwCHtnZWTEP8KgFKq98fBUcok6L1AVwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySUnyXukNDatankrUpgK6Dy3z2bL8kgWBBGnnPgAsew3EkSAggfwp9N4hfzppyDsGJHdnbUNpT6HWvpWg6gKRy6",
  "key1": "2Fiz9wRXd5C5R6WUugoBjnw1pvk6Qz7h2LZRmR9eKnKL1CUQPUGiAU2CTnZfnwMARuvbo2YigqcY3JUSiNDdAQZP",
  "key2": "3e6gNqAEzStdAwt723PaFXQHZri2T8iVfdWmdssMqqbco4eGjuqMGwMcjcZYXa9kn4mkrnoAXkEiGGyqmoVGEuSX",
  "key3": "2WcuA8haZJTgyQpSy8xfbBxmX1vF5FALtYf9L9Txf4oxHn8SGUNQSm9tm61BM4RpvZvDoQvQwmnWjpEVSWV3pLiq",
  "key4": "56Lh7bjVtxAA5TD1GD1iYjq128fpoCtFsMTkiGCApdbz41L57ZvqGhCZ1SUiWjzCUreNTe7Aog1YvzW39F2BGbLj",
  "key5": "2EVvnSXMwKbU4TzciYeNSCrTtExirtZ2yjn1J1wY3LAej5Gqse1SnMK4EL44H6CuF8Sa8q712pUPJF21py5KeJ3S",
  "key6": "4SEZDhxGGqUJgvkU4kjBeEeQ4hhQBAqsPYmrHQcbGbAbMBHuRMaqCAimsEzHHPUC5j7WU5QMZwJUgkkREoE5gswN",
  "key7": "TdTESsE4F7Rasw2ZaHHQbN3yFXD5hnjzMN9KT9dPdMkZR3e9mXzchMXQq52YZmQKv67j1sxN5piuxGPbEwoeeu8",
  "key8": "LyARWpXW3f5wB1eTmQroaGVA4mGEFj7gLSjN6Nsg575pkUiWL3Egt2JHdM9w3Rf1HwVZUdZT9jBHcX4sDkG9n7y",
  "key9": "3hh2avd1dMFRLvjP7pC3dcKqTVQP9dFEUYEGBAt5DcCKV1WWugXK1LQFmjiHc54i64CvyjHsATGwW3gscj6hb2SS",
  "key10": "5bN7uuGCmVMqL8UrR63hrJREA6bTJ8v362m1mdy64BDwXnxwpErVq7Fnen4MNovYYoW1ix4vG5CX5YiwMEz19eqk",
  "key11": "4EpbRDgAgVEzEijj1kkUbcgtf6NcZERanhwGvTgPp3bqk8PfC4WQWLpmAdGkoJzgwHQDHW53MQvwsKc9T1TT67jF",
  "key12": "3kYghWGVcimdmiMxdRkpVvc8imGyBZyk9wr8znXAPLtzGF4nHq9ECL8CyCv5gpu5Gp7KkrPbEr3UfkaKfoXphP7F",
  "key13": "4SD2pwmgiPkBBuUtY8sxcqv1tmhHYVony5Qt82t3vWHHqp3HMsUzdHq7hwZ5Bh2854hBUzqubZbYZi9PKx7JDvKC",
  "key14": "3jBpv9M1k9o4o8zommWWX8Zx1KwgaG42duCmhjhA7CVD3eF3Z7AxyBph9MZVbLaQctABFLcKHLobrdgUnJ8PbHhH",
  "key15": "4pKYzt15YRb5qNt3eHn2WdyvPmTnphQZKcZ6YJ7jiNw1QFpZSx1UFe1YZoUaXdgckgYE2QXaLzJquiXcVY7e6Gc2",
  "key16": "5CKsVzBvgyN1qgJzEU4tjm3QoCpQZyqgDFoAuw8DqGYABTZvh8WCMEGcph6VQd4ZZtMesn5gCNugdHgTrP6BTzJK",
  "key17": "4NsY1CKoSAcxnKghksRQCfL7Rds2jXM9jSNxe2UzQXy2tsDiHDXJuQZ1AH9SNJbepMtQCU5QNC4mbvzj6FDhcpks",
  "key18": "5ixR53oW1AaSYfSte2QaL8ZgW1XLfpXGReZU94XRNkavfzMYkJ6iG7VsAd1HFewNUVKt1j5xDQDmtCLUf7AnjiWd",
  "key19": "2w834e62kzNobhzvffu8aXnDdVucpXs49ucWm77aayfDhoevA9q6pps1wguXh7qtX5M6Ge5bcLjMC1v6NTVgNpED",
  "key20": "2exLDQkh3NNUMv6YMaK1uNoKTBUP4S2F4j9gGx8TgcfDCfh1MdaztTHmG67JasLfR5xXE3UWHnFd7rvAKNT2YKFh",
  "key21": "dHjRPJxZySgfkhzC5saYw9PyQpj5ZqXP7sKivBwLxcPb6Wc95cDziyftPVizvzqRV8xn1bYjyg5SZjiJkSzLxSQ",
  "key22": "3Rd8a1U3RGkssqQCPCAcUwyQPSaYz9jtnLbsgEc5Pi5GG9AY1wtM6CyNQPWJ8fsMhaoeBLQ3gzoG2v79HUPhb9tE",
  "key23": "fTTJbawrBnDdxW7caUuZ1aBXrWKJtqNHJym4Qfa9Cmtu2mri8vuD9RdzhUUTQ2nPdZrNT2WqMQXvqjq28erHgNx",
  "key24": "3ULFXG1D2rmcBv6PZxpiRFoJjzkguv9m8G7BZ3DuLpXCbMsWhSsZG77w5Skj5BRbjT2AUGRM1YMPsFGq6we6L2ne",
  "key25": "57AP6xUKm9pJAn88u4qUFk3pM3oNwuiv7WZdp1xPDagS9iRTb8bwTTtbxSw5pVwwX2dqpohWo2buk1PopxfJLFyb",
  "key26": "5MRbmrtw7rGghkWepbmMqDP3Hgoq7ndcvkDPGMz9PNd6uJX4koMVpPpGTw2BmeojQ6MniB2Nib7pfYo7fjmU78bY",
  "key27": "4WSeu5aixATnj4cgVon3rv34wKQtVZVXK9REvkcaEpouibQ2S2zQb9AfvmvwedBbZJWdiugpAwM7R9v4tyYjztpX",
  "key28": "39yJYQT4Q8hT9PqnntV4LppBcvaCdyTWriYgMS4m9eZqU74adNzqYYsYRBoVmvMLh7mDBfmkn3cMAKPdHBr6zYn6",
  "key29": "2Q5PyxZGR9G15gyXY8VQN57n3d2oWj6hteUmBcKM6BVpEXNYbvSjwKboJx6oLFKksYXxUdZZ39RfLDE9mC9gHMdL",
  "key30": "2eAeCWR6NTh3LCGbbro3uKmVkGaqqdLdFcjMWpoeoM91DttzL2ECEDvj9FRQvD2fP8wcj2KgcY7yYkM6KWrFRcDN",
  "key31": "2NfpqbqNBX3VeJLs2buqkLSPpjmDDEB2Fd6u7vo8zmPFhYXExGFcosnN5sDRjHYXpWCGNTNjBzmLLTPGQFez5z8m",
  "key32": "hJmod1mYmKitiQXQkAyAjXCF8Gwq1x2r14WEq7RR4RqEiDbPnAFgjeF614ffMdwMfure6ntgUkL5fmveiYyWimb",
  "key33": "5LH6v9D3foT3MriKaMYmwr1TGUwHXj4dc7mTuumMwRAHdLxpBMbywmavksN9MME3dwmdwmRNo7aVJ59EmgiE7LhN",
  "key34": "5YtW3RTSXRgU4veWx8vYmmT8HdzvdBxnvsyZ29Rd3wk1LyrErS8K7J8d8RmA55vA57eyravFke4uSkptYEpV1gMs",
  "key35": "53Mxc86wP9Y3NG1HLR4ggtiuS4S2Z2F5emrm1rzv4145Vzr7apop3qyCvQdyq1CaYUGosjZArqF1AW9i3cv7Rgdf",
  "key36": "2emnzDd4p76YkS12ASiw1f8vkmxxX2hJiJnugmgAAPVJZHpEHSJZ8ofBbFo5rSFeo7gWSMJ4XbhvaAAR1HfEpQCx",
  "key37": "pnS6BXd1YkSX94KEjAfbSDRS351E2ULEAoMMy4KSYWRW1EGAFo2XqhVGSE48nWSSVVbnckqgQC98idVspjuWZQB",
  "key38": "5hGSmTub5MoWEBsnDopwUkr2yT4r6cXfSsCAUkaWk9NfH8zfwmpFH1Qy5tGn5jM2RfXBLkR6e3hpJ7TcjTYKgbUG",
  "key39": "2seVfy3xjSo6urb7EJrGBdMpvjUbc6xuzqvhLTetfmwvtutAvzXjxYtPUWSfyM3CeMu44rNeD1uBQEFYkJWmtBpe",
  "key40": "4XWXUgFZGmxudhto6RYPmzCbLyALZYFPKhpWnfmTTUx4Aikhy6zj9osHcjGajeoc9fCQkv1HB8Q9cLVccSR4pUdT",
  "key41": "4mK9zuQdyh7ErpcRJUHy4i9zbbgCoZMSxiBSFFLsrvE6csKzfAbaHTcaafPEnh75zeMQd3kgTx6mMb4pr3WYBeue",
  "key42": "k3MXu4YNn9ogFg1AigPoRCaNPerijKiqiFSV5sR871z6iuKxWbNbtZ9CfZ4TVYTFTfChN4DCgAaJtjF5JUzdg2p"
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
