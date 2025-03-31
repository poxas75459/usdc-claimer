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
    "5ntvcv2HVE3qefPu8Dm7gUwztQeJsQ5DF7XYoRMSp6UfAiVnqTSoHFKJUcB9hTBS4fANETVtPU6XuYwpufQ9bb4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUHqkjFxnZpw6doNewnchv1HpVeqnP4o5J1cqgj3asyhb4oBGMVF6XFK9vWgLbcGaYNbYfzyN5bkXomufcL4Tek",
  "key1": "324j9jKHRRUmpEkSHYsYX6GrZH4b4z3TWS92PAPh1kAShCjxChZKJSWsFJsRvdZ43fHjaDMAsyHGSiGXoVFYwcCj",
  "key2": "4M8dTLEXeqwBtnGfDPcakn8LHtoLXK95NzHosVvBMMco4pnxiWEadE4qKS8HaZg5g5PTfFS1SZHLz7endKNgSacB",
  "key3": "5WiCRDBLozU2ceCSXqYoo8VJeCZJgixhn3P7EVNPnphr77t578GPRJ6TS8uQYZJf6UrJFY31GwyAmWXZgtUJN2NK",
  "key4": "RmrYmEHfChPtiDZ5d7sC9mBnwwAchZGjawXLtxxoaFNb8knyqZKjrWNLRUzu8pzkT1FVcneN7WZhUtX6ct7h7Np",
  "key5": "4opnhAkYnkDEJpDvMeGtM5fWJgEXzG3jtgaYgWqaPmcrSJAzHNfBKtodiLrXRryCcCA85LjuWxcwVnreeVMEkTqk",
  "key6": "2D1M5vQa6of2NueDnfN5X4eeN2FkbiCcRgtdQ5Qekzr5xyt1pFDw8DFuhGFfVdk6LVutMbK8ExA8vq3Yn6baQGkt",
  "key7": "3vUvHUvx2pqYvmTBvrvs6m7VukcVTZdkoW2zdLXtrWCASFZhZpHomQRAM95yukTKjYHNGr6YCTt865X4juchNWYn",
  "key8": "5g7Lcmq1JWFB2gTE8XjFkwwLJcVCS9Joorc8eWDbWu2DrxxMmtCWmYPoE3YFgEY2YmpVQGeNs338XaUJwbUWDBPs",
  "key9": "2qrV6ibP3mAFbPRiDj9kNsE5TMFXuzeYy4KdLqetExVSr7V9JBGPsraNsACV92JUA4Mw9jXCgiPK8tkbw3vFsaUw",
  "key10": "25DFdv3KZnXTf7h9ud2W7weKktfJ8xZta2VvoktonVfTSp3zyHbtwBcP4Cs9wcvGhHXK2tqMM1v1NT1czNtZcJMg",
  "key11": "3zQJeJTCYesmjTjqKXcHPDucUQ9eRnpZA3o1J93LovnZcdLkYyN2TvZFR5kVpLNKUTLggtwePhcPYCHBAbYY4Tek",
  "key12": "41p9HRNdLhqysSyAUNF3o8QrB55hvyjUKfgeL23mLTTQ8gyTkqndE9pT9m7oEsPgeuhi1GXT9XCjgMNBv7gJEcfy",
  "key13": "35vk4P7DP4z1ez97xbUoC8kwLoN9qr4oNJMBm1SpdBm5T898Mfi9NTSbVmpvYZK3Pjtevm9LzvhtXWxT6Dx1zV98",
  "key14": "3BXWApqrzRmMW1vC8tKZ9kMctEHvL12XShyEYbisH6LGwzPDEutbEz8zJcuY587tTEMrZR7cWjhbu3Q49gLS273R",
  "key15": "2NdYCSjeMY2ihY2XELFY3y3tjM4NaGyniixcKdqV95r8LsuweobxzquVafJpSkNKYM5Qh5RzAvWMedzuXiGe8EGp",
  "key16": "2PqkwBtCQMveanBdTbs896cF5WAEUwfqdqNuj515jvhcqbXi36xv3n4cFS6cX5hgYFRHNdmtMuwRTLg4t3aiDoUV",
  "key17": "fwMD8wT4s3Cxk6tF1VYeSbUhYf3sjry6RMkHEQG7km14nyTGSdmeQPvqqpQpEBjHreYz5HSEpyxLuLkHDQXZzEq",
  "key18": "4a7YnDejvyruuNiaAEWUQgj3uwtv6ksGYG2jK4YQPG9GnZ1o8JDjPVhYacpvTdTxnQWY45nLQcqP8ypoLQHRPZ22",
  "key19": "2d5CHbsDxkHr5fXVp14pL7rcNN4z1AhgqRdY8iYm2xNYfYKEJXZLbzbkyxd5uNSQRDtkbRd3YVWrDcAW2SmsEoAr",
  "key20": "38PRdGcZtBbWp7uSFGi4CRWNfSw4ZZ3nPdy5UoqdCDzr74yzGvZ91CkGobXm6DFi44JDeeajwg9JHwpkWMXFt22K",
  "key21": "64yDmA1PNZFPQdwqbHzvetRQgEQM9cMEDxFbt9XL7KHk85daxmVP8XiRHj9rxExpbvLGivPfg35s8k9X9sJwzRYJ",
  "key22": "AVo21JDhG8UUFQMb9gnL4yEK4V5Ndc1gPY52jcSvu44jC7s7C2VwAG3kA52nr8bZRuYhdBv8eNmBpgs9SRkbUwa",
  "key23": "uHCF1JJj2r3ZAt9gBmBg3fQMzoPyAF1WPChKTAnALXNbymhmUyBxm9oD742BDqX6kZWiGGHZkjUFBBz1krEsX8J",
  "key24": "433hTEmJiEQCKqdLN95tB99QbVcsUEsiBYAn7yFhFqu2MKwUqM57RBoyEE7cGtSK4gSyFBgGb94jN7VX5cud7uGu",
  "key25": "3fjwEi8k9uckPh7kAqLbiph15ZCUTDc6TLTyyf5C4tVQMc41P6b8PU4xSHosAGbyYpu8GiprFKjf7LdasAb3UfGs",
  "key26": "5FeEQF4T5CYoanT1cBsADzZaZiKe8Bf7bqeNDESNebx4aF9h62v1Cs465rnK5o3esN1TnMhioGv2PGdZCjTmyx2S",
  "key27": "4mPm9qTBCm8VefwZwSDPkRXempUM5NgJUp8orpXDSHkXpjX7SbY81gpRH58rgaGUjxbHm8xQu7dp8q7Yvq2HkzPo",
  "key28": "5b4NmbT3pcxdcyAa71FBBfu6QsxbafM7oMUeP9H6cRprWCBp58vMianEbt39zTtci3urdWvG6yJm3a2hg36gf5gD",
  "key29": "2kqUfkKkrMkvDv5KDXp6KGjJG2gvkATqj1VpQPhmxeewxhf7evWA1EgBqeBqpKnWvT22ZNETNNbEkyHDuyz1Cb5V",
  "key30": "5sWC26rL4ZDkLfFTRGsgA8MDjZ93ZX4m33jcRK3w4maR2EVepoG13pFt5UCL5jYfW6K9MApjbMH76QKxPLe3BD6m",
  "key31": "2jDcXcHjo9fM9VZsPdgRRWbrj3AoJmjQTbZxChBxF9LwmE9BMXbfuTt7mkRW1U1WX7vupPmmkLYKS9KBYUsTVzYs",
  "key32": "Ajpcvt9GEJFKZZic3MmXPFUbc86RwsWTDPbjmRZsenQauec3vAo3DGgLFNCb22MVjCBJw7SnC9n5Ts3rtpTkbS1",
  "key33": "5ycu8cY2VV14FCB3av5tc5VFw9EpzhyWVAvv1Xn9ZogAvpFEzAyCSJm5fTwCstZErQpMCtHrKV8MEXmMst5atG4x",
  "key34": "2Bc4SbR1J46kber9ydkV7MrYnrjKHVeVHsUyEPhAjGCJLwoezvt3WbMw9qbjAhoh6EphbkBcEDErtnGqHHgrGFZW",
  "key35": "Krtfo4Q83UyegXUHaZrufEmr24WBV8z7drTDHHztpAZS19cno7Fv8ZtBdVJCvae1JtyShZ5dfLLn37XDjUgq6DP",
  "key36": "4FjtbgWbyc2n2EDZL9ZfUTvSA3WAKXZJbugxL76VBNUdhSBdjACSDzuC3RrbqybfdYtgsJCRF6G5nyZRBXjA8hGu",
  "key37": "2wwDuNEx2bs51bCh7ewqdj3CMjpKsCNMK62PaENkxynKc121X1q4xVbXkpvaw3FBGgWrtFJ1SMeDXbhn5YsGUju",
  "key38": "2dFbQaTyByki9oRWvLf7isVSgdJb5ARFdGp74JwRsKpiB1hC4hKjYMJFMbxcZ4fEFwaxRnbFKwsVx2cc7ipBQp2d"
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
