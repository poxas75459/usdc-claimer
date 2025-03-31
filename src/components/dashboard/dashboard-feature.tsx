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
    "poBTVuMegS5Q54E1dg3GiYxMTFmfVHpiW6nCZ6hwoPc1T2jUuhze2AQAeHoE3Hd73ubw93RnCEBvhrkc3yumCF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24pVLVawkBvZjPvojRJgz3A1Z9eRsxhdhyydfQ6EUNQqVSJZVyiicg84QUev9G4HVim1bSnF9Sj2U7j8QGBMQsBf",
  "key1": "2zEGPpgH3AqQs5uhv9jhD8KyFJVrrPsep3y13PTQwLgGMMR7YjE13rzwr8P9Sg9hireYxVvaDf8w3a1iRQrFDNnV",
  "key2": "5Red5bwebXqzKRygxBkfd34rSwW91Kv8uw4CHGDmokKAr3p3nUwDm6kXr8iyGx2EGSn7drjBzu56gupNV8UnM9DA",
  "key3": "4RE3fxKbqScMBinennqUEPV6UVjN912JxFAxKdkvncya9kffvSqnUHLVCcfmgcH6KGYeLQ2Ce7LXb1Nwh5XiNHFg",
  "key4": "2ic7inQ1nVcindXB5YZuBMxbsGcUFjw9LgLZbapd86NQsWRoUVVnuzsHgnhNiUUNAcae2dcsWxgyn7GYzphnRvYX",
  "key5": "48t2uU6xiqt6jiHxhFTnA4Ze4v1GZNiHJ2PTQaTaWWazwcgB8dXdmASioyZCd43MzmyJGZmcXwek5vzcnx6AqmFG",
  "key6": "672TDdumX4E8oRLccBAXVMikEe2MH9S4WNFCucDdR4drMAQJfVKTdHb8i5Rq4w3ZJu2waSpqp34hH5mbc6J7FnYh",
  "key7": "61hoYXKBeHsXN6ihNVPhvu5XJJwDM9yqXcWgRpHm6f2imnAhSUWp1WCMtVJWQZE4VNz7ue2N2SP2gCofhpCxVTvA",
  "key8": "A4PfMEamVJ34m1XtKtHk5RQrnVNcQasSWumuPVQTNCpJtFmzwvuCAhaj7nArEDQFU14d1gPnMa1J2AZB1JcJbNF",
  "key9": "AQ74sZp4DHHS2zLht7kGczHAbqyGrCvZM2PN36VQnkqPWWuR4guyUMS1EEyTQUH33bLNCgKQFQxuERguP4zRU1g",
  "key10": "AyTZfhB1Qo3n9bePPWXvn1avZpAFdr5EzjXd41YZuwdPgnkeUoh6yDV1AUjYBKtyYyo6Z9UeJ2m6WdhsfuQaW3n",
  "key11": "4e9JqeBnrowbj72r7d4DCGNnfiNnqVEzoFiWyx1aHjjLdaxz6D21xdoekY5HyWtQH4n3ehemKUfdGCDtZKmP3dJr",
  "key12": "rYy2sNFDEhzTezGLk5ffEe9JBihiPWVUNBatd5y6N6W8P64rJBvmFJHMeJRNhPBKBKaySbvaNqo9PeGvaRX8NyP",
  "key13": "64gbT8iRPhVJ5NCoapN7dmWDhojfJrrmdF6YjanAiBnhNDrHTMUMajSoUVEMTVxSWPfxrmHw2L2gPY5aGtaWMFWd",
  "key14": "4hW3Jd2Ru4LBXY4GMYmp57h7NGXjMHvuVzVpaCoh61Eh8ZytTCrr8NovcRkVJzFqVBMmgXLrQqUGRBqAFJogLPpq",
  "key15": "2oNw5LY6p9ERVegzCSUWEnC1yirwZEkKhzCvABFspHapY6mhf5KVJs3pKhjgEmFkCRWsNGiR4PPwWwsaXs9JjjeA",
  "key16": "2Twn3GBQ1FLMenSrtaeKPnCe8VXAsQTg2myx82RDeNfnno7xpwJ1bAxvJ1y7aCwsPX35kBuFQ2hPKZH6rvwtc76q",
  "key17": "qJQGdpmHPbfLCfxH8sCx9zqeYPe4K4wxaiHbuMGU6mpQi1284k6P2aPXwuSsFXPo7kMBBBLrCm5iDabKRNCdFtu",
  "key18": "3h5CL8jRd8yNUZLbGr5AVAGtn23Tgt8tJT1jsbcnZZGPY7ULdpmttUqqGgHUED7KRRmgtEEQJtbteaA2xCUXatNg",
  "key19": "2BdTk4AZcNoaLmny9YdADX35uapk8NKk7PKVc5utQpPggWpS781bFPKT2eSSYQRgXwG3aPF6sEqtAkghgfpyVfXD",
  "key20": "4cdW6ATDz2xpyCGz9ergJzWt1FjXDD1BHJWBzQ16fh5GSQ859wbXEVdDMMNqt5DCd1j3t8NdcpEM95M3dYKXg5aV",
  "key21": "2JvHvaPQkXrdppU1wiZjWxGJ5hwQxLaFok7ndVRoHiDnUgjveAaAMwDWw9FiN1CzE5FpxDS1LadcusHXXX33mUkc",
  "key22": "2UnEPnyFEU9Be5eutSW2k6ERF9vddihZk8Sf8qWL7ZyhMqZBoxpawsiRvG82mRZdVPZFDnCC9Z5FnbVM6kJ6pP1b",
  "key23": "54VJ8FVHiExhXZYNU41fWJNK3kzSj1mNGdqE5yrHTnc4reSQ4QcNL6C1pW95CJ6u8YqqcmSxd23jJd715ER9DDKm",
  "key24": "4WAs8ZZJqxSt9ZHsoGPZXnb2AHMPJD34fuXRc2o72wdjo8giUEaZxd26koShfwRK83oH3GNYdRfitg83i1fdYxsp",
  "key25": "5XtBrDG6KWmx6yBgqNYyT6ukB2qVDsy4yTpwPv1v57wyz2317E3QK1MYgMpkSbrMFKhKZGVa6ECXbKygqULhtoeV",
  "key26": "4LmH3ZJXJu6ZagRrowmJHStirz85g4Hxa8szy5n3G9Jhpe8Vs2jwHjAcyWf1BuZPSty1UgMYCzLhDrnn2vERP4TF",
  "key27": "3APUBcNRR8EvNRuinfw6NMJgULT5fncGBBpZpepFmK5A9j85mmev6mLjw3e7W53EhUVfWf3tGif4bDmk8LJ5nno8",
  "key28": "5aPCZoHshLyMgv3RTFadvL1pB8RJRgYbfJAC7VUp4NuxdYqVYHfYi8SuPG22ZEUERGK44rnyQFtJebkjq2ufvLK",
  "key29": "2okTsAHim2goUHWj7kUS6PZrqnEavKn7eR6YBJhMaotJRKaR64pKM7MQxMccRGg9D9UhNgLZEDh9CCMoQc8Ey83N",
  "key30": "4jNPZn4ET6PxHYSpAFDCypzQRyLbz7bMnFWCYt3vhqrjvnBmY84EsuF4THywFz1WMjqeamACu7Fvxh9gdm6BS3T9",
  "key31": "4YBskZQtGznezJZxWVgL4DeAXosnLy6m9L6gTXGky3HXqWUs5P83ZYhDsys53SVEZk7iHUgRwWLYyKzSMJLsKpDU",
  "key32": "3NBBwvShUZQeRRhg1uceZ8etTyiQF8K2oyS9aALw5j5QCQhLLMbgmxVQXwbGR5GLWrXSAP2188SnLfRkYLe5eNtY",
  "key33": "2BEWCcfDDki9Z57iqSvBUBNRW8mNi4M1LVMwuRN7GviiCpfnYixB6seA3zJy38kmeifPWU4mQZj3na7ZTUY622zj",
  "key34": "2XmzCgrXLsKsQE6xKFSKyfLVtfQALySyspgTENqwsGjUKtt4mXTy4igD3aoy4U2GBFuJQWrXTvYadWALHEWYs8NR",
  "key35": "4z1ZT2dsxZEHfEbNEZSR7P9poRxUNTWumkkWPrGD3PaAcpRtg39JKdiTcH5rPGaSEjRNMC3oZFiS3hK26k8hXmNK",
  "key36": "4TfM6cucRu9Rg3PQGrwt3FWg4dU74Q3NjgsyW8XxJQt82LsXbv2aS5DBWAriG4toWuhWNHi2Sh2FJZmGKo8CkcGW",
  "key37": "2yZ4HvNBPSq6qq1nrEEUqQgfMwn7Ccv4jRqc8aoG7xRRpVCPwEBXUEuRA7C2XKmkV2HecqMYVykwhqJxQUaCS3ij",
  "key38": "3A2sTgv46xjvyr6hgF8yMgH83TVfhUVnohmZgNVDKhN3fC9JaVGKTPumQSmBEvcPGCEgfnDVcRHtLMspErJ7kGPZ",
  "key39": "5xe9Ur4vVT53yeStUKAgX5KgTjFJXnFptGUV6L5BHDyQ3VK3Ha46keWCXy5XtxDcycJwpQA9buhQAtcNY6wYMyh1",
  "key40": "3oSy2eL578ejRTcvCKUAdwqyVS1nibtCkz9v7VvvVhZ3yhYM9m2D7zjcB5UiUuP6VRRAV5NycKDtaffe2BTABUcd"
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
