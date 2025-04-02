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
    "6gp48ZUUWm7MMay6mkeq1KePQFxYXczwjAXMZqZpfMa3j9kb5PN22AaqistqpWAzY6XRWbpvEYDq7M3PC1WMWyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuT5Y6nLZTwtCJQXqAzqqbKkFD4yjVRPoLsySAQnTKNe3vKghdTGhxZqegrs4PsAfMKic4PS2fAYHG2sLmE6AQq",
  "key1": "4M8rGtHMH7HJM1VPFW6EXbDZ6JjRQ6fVuySmT1A3RuwGYVn9ZRbNzJKG31V6zeJ3ZtgurwmW3S4mMYWTjCbxZTor",
  "key2": "5Dyjwu38KxFzmQHVtgjhCiJgVLNKzy7rPQN1Cpk1JXDZqY1uZ7vBQ4xqn7UwGh263EySyYmwufLdfQH8d9eGf58V",
  "key3": "66o4CFJpqRbf5RAtkLvfUr5U3Kp3xkqHGLTRKe7U1RZ8zq1gEzNwv4i5tTpxpJvYdZ43ZmE9f6mUKTm7ebst3xef",
  "key4": "59mCo8y2HL6Z9NsjAMZ5ujVNcQz8mgJbnui64xmYxFi1qKUiG9VaYxdrBoxjmuirojpNwYNS3ucvA4d5HBUaBwmp",
  "key5": "UMeNmzQ4azcitpYNG6eXV5fzL1fT7FHFARFqynDbwfo9GAEx4E5c8RgXmRd3jA1qL6G1fRpW9MSEebbj8f3XuMV",
  "key6": "59wLTbWRvBRHNz7ULUbe3uhsCovHhjqBrBySDq36jgdGnxFN9NeMLfmjR3sjqik8FQMx6c87JgGsHyzuEZKMcqLA",
  "key7": "cG2cEdei8xwLoCmXZzPSsrVuWtUG8pVNDRT5o2ahty1s6MEFvsDNKdfxKtYE1jzS9BFwKrNyDxXUJfcBs3SA3jF",
  "key8": "6T4xxCsusEDfHGGX4y8VThNr5bNpcw4p1ctkErTAEMLLByoL2mrYG5CbDkLYisUddrzf1hYJSjj2gkAWPUYcMak",
  "key9": "3ECsKmE4bMrNqTbpi7jxwHanBvUcAFZPd6TGT7QyxTq27XTPbTg4omoA9abWAuZADiwffoG42ztggGdX29uAqeeC",
  "key10": "5nmixPJEaWMRisZQeJJTZGhu4xXWBADcK3PjdkMHeuKb8GC28mCZ4G86aZGrXj8gpx19SC28dd6z2VcvRiyQrU7m",
  "key11": "42sS6Xz1SCfLqTJPrm2fdsd4Nfdd45kjMMXayGzMiHGkWFgNfrnYawKoEPDG6KNcWpthNDZtxxr6BqZdL2JL42h2",
  "key12": "4Vere8FBLTuoJDPf6sSXTn5KmZ5s5EZza9uBJZAL2MUTxUCWn6VxCtwVJQCv5abJ66BEu1ZhTL7Jd3djEsn4sR1F",
  "key13": "9cFDgj2QbSpyfQuJmiyJwiNN1XLA7eL5zDf4MgTK5TPRj29xihnK4PaqRDSWZbeWF5djzDFsLnNyZYKGgXEAJmc",
  "key14": "rGexz5wq138xrJJ8KVHWr6oR1iPPtenrDziNzGs4c7soYseKj65Ky7jW933zrh1BYKXVF5RwcsWzKYrTxHWqUHq",
  "key15": "2uDwhvDTaamjtM9VWUcS6YspgBXvYiorKkY1fE6j4y6BbJMmeYozRtrTwnHtEMikRV631K33juErSvFmhFFMK9GF",
  "key16": "3SK9QhG21YRWinB1W5SvZAqNhrcuL3yJpbto81NCdEucaBAf4ZY8utqZZgQAUbLDk5y3LHyPe2ZHr3PC51HXHLCt",
  "key17": "2HJrzvaZGPevZAwj3tZtrmH2q1YbGQycSUqzKa3eHpkaMZgc4smySwF4LkATD5siDXF72DFcgnBhskqbqqziNvYc",
  "key18": "2uiRg2wtWm2nYfn3vs9hekkAkxVYkBj4DA6Sw4oY77aVnQd9TDYuMZNd2uc3fNPNomwV5ETv1EMEhWbCypng6BxW",
  "key19": "3VausLow9M5NbjZLnKYfv914B2VDaFYfubdT2eib2eQKTeChoe399hHAVxNZTo4TFBVeTKyshj9PVr2Gc9aisaLr",
  "key20": "HWuTeByguPVW7fbafyg2keunBmSbfjiG7kADwiTW7bFPn6EYgnTEiYbeED1cYaPduW2UfbgT8CzwnGahyqcyhLo",
  "key21": "49oaFnNm51YxLfUUnoEVFTg5p4iHRxhDfPRd2T3k5vMiEBV4XrwZCsbj3pxJ7ENjSfcqDWc4s8x1tukaCjjXJEEG",
  "key22": "4qCSFXGodVBsXaNS3iYFGDNCuVgp1RHPrbRjEvwLUcHouUEfKSMErFqUx9GQ6JXUw53QHcdtgN7Q9ZNahYhnjV8n",
  "key23": "5Ct3DjCvFK2go5fVAUuREV273ohzao3iuB2vm7JUPx8BafEKfxXfwSasrsUu3AefdJMfu42BAqrMxfRBkWaxvNzb",
  "key24": "3SeivZ3AdJ9KGCjhvtUHMbjwQVpguAAUKQ12nz7deSCnsbNjMqudsKVW8Z1VecSt4VPbs4XYYB6msuSEaUp3mwWi",
  "key25": "EKcKeEc8p8m2ut6kTLejfBisujcEhRHLy1CMVXqQnupxuYUjhyCAh5npJ4ic3uRsr5CeJgGahfRDKQ4KwgwgWPQ",
  "key26": "4Ryr7oBCsZphEsjkomwKzmtsmDn73aPAa5GLmUFoUP6SiFovuNq4HctrX2Mme8G3rzZ6dUgdjHVhcDtvikAnq6CD",
  "key27": "3rv7efnGqvSnJseLm6jKpcoS6UdpFNupjc9aB7pvLgYx3gwC8SkhbsxBqGJEe4FWp2Ba2s6YSxb5k5mWJhwqkUyN",
  "key28": "5GRdgrpR8hHcbmcUQJhJcJEKb5ekswbEKkbZa5789MmNW8nJibpq473saoTaBWcdMb1tPzmds6L37YAaQY24F6Af",
  "key29": "2purB4CnRKCnPchsAtEMo4mYm1MAY7cye12uqJTjbS7ZCEdxEUAEju9ABy3Bt2eixoFKaQTaNPxJDLyZvmHfbmRF",
  "key30": "5PTENXB1CRNqDx6U4K7LbyRsFyyx6FfYn5JLno5aaqP3TSfpoAmqnVnHwwgetWJUZt2ngGTcfJ9nHbkQRhpV24Sq",
  "key31": "5ZXCaVy3aAhC8PptGdNMuXtz2uVubhWL2jYdFqPgnJgCL2Tx6Jiw49LndT33BMWRf8dxnjESwZpBQZtgiXrPv42J",
  "key32": "4BkJd1Q68FZgk3CyjpRjgWfzP8x1NSX91FABL2bHsp1dqWiKf3pnjN1iqV75Jt3iE2yvdkDQbWxCWQmPxFcHUP24",
  "key33": "4mXJ3xu7XWNC4QFn8rGasneeYMBnTH5ktAjD6HNcbAjrfGXofvq1s3Ay9CFVUAEJdg6ESMazagf9qNUVVkoN1Tr5",
  "key34": "3Bcrw2RnihC2xNgE84LATxoDCrMDcRtAAD1LBojTXAXjXNFTinoet7iJKfred2QCgc2A4pjEiiTmqG6uNUMq7Xyc",
  "key35": "66KVtR81aq1K3RvvsAGGqxTL87PxsWZAvhFkbf3zRa6edAJQLpkmciXb3rvGVNXGdEc5PULnNeYsNnNPPYweNy1x",
  "key36": "59ir8iHKWvMaSSRqABzPJuAP9JYZXVR4n95uXqq1vu7ZeRqEHiapXPZaAZvpqeJqoFwDh8xDmFFrDiGDgAfeorju",
  "key37": "3g6QPsuW57Rk19tjiaeo28ncVZhBQiuZhjmEcy8ERFgfss8BuybYbuKttMjDA8jsTCv3En4BcCh34eBLPbxHegyW",
  "key38": "5tMgFmBvCkGLTSM9wdPZrQb2dFugFVXPH5bcuBQX4qBrjSek3189zT2fC1AgUX9FcoMx8HLn4efnaVnnzvT2pi6",
  "key39": "QoPo181MSVB1xZB8qGTvMeGbw56i7GJC77bNFH7rKZp77YpqdJRP9aDQqR3AjFjFSxVYvkWQYBv6wrTcNg1aJt1",
  "key40": "5bGQpdMMYHf6RefAAeuHQQNEiNVPZZmCgo44grJShu695K6QXqGoLmS61DK7ZYtmp34Dvg3JBzcvBBAMFi3G6Gn8",
  "key41": "n5yXotcHwPnKDSz4RCWfQwLzoWzoN2L5My19yV5gZsroRYE7yy8CvrniamnBh8vafsmSxP5JxKA5M54fB6kBYkE",
  "key42": "5z3B8ggFoU4kiJsK6k97i1VxSL295ua28ZWQnk4YrxhqRcngEtNp88Nn3VdsxrBjW5VmTVfo3EsZ9k7GRRSaxPs3",
  "key43": "37LzXYGF8TEfs6epv7inp8h3HwiYmYjpefxyqswZbixQye2sNfCcx7pDmNzgpZ4m4YP7HmJJQPeWvD5wWCFhC5u6",
  "key44": "B1E1LUzj3vvcw2cvyoHu9DvdKYe3Q8prCFBzyN2aRNJB8HwM1NgKxW9t7gsUsfYuL4z52Qpcjwck35VLYFsidxh"
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
