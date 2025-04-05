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
    "D1oJQZf2cuEyj2nGEP5Xtf3vAP5iDBWw3efAQGkudo4CteXsdyuotkawxLGsAsm6hw7pNA8FSPpTFFjxDtz22R2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BwyJLqARkh7Ns9XPj2hWKHFGnLwtrZ6rXty7UCYxijBuXTqAGUkEaAUeWrf5gCyEvSUwasubYQmastqypQJPRXH",
  "key1": "fn9zyJYz21Fs3GY3HuZoapFpfTkqtiF1V6uMCTZ8BRuJRWwJZyka1AfUV618fNnTRVqZBGDcwrxdhVzRCW4pW1D",
  "key2": "4VjvfbbEkPFb2H4yV1ixPJLHwbtNhr8gPtwK2szgtvPzvFWHgoxgTnivM3doCVwTDNRXP9MGGL64PCHuY7Vz1uwR",
  "key3": "5jjujQzaw5U6vA8MYN5noR97VvJDpMeuUxPDRc3xui9TbhzuZrwERdATDcGjpfBrM1sVb4jSvFXBPV4ZTbkHbYxG",
  "key4": "4G9zhoaRB9mCohaxde34kyHiwwCLQjc1MpZibeX4PquDZKeCMefPeJFLeKJ85jtY5FyGz7DSLjG9JYX1hGUEfPBt",
  "key5": "2oshsC6RMWrUoyKQdW9fAFxxKsSoBTwUxGQrNHmRh7D4XjRMHhyguGHBcZjPQdfJHdS8bQAeCb4eriW5PdYokLFW",
  "key6": "3Ztxazxawu55eShF3pF7nwzqkXoqaffFGHA8wBeMzUVamwyNxJhiE4owJQN91SwzPxrdEEVtRR7epT1bxq41UzmQ",
  "key7": "46scVJY3HQ777TjLETQkcdwV8RM5DsbsoBovzTUxFbQZoRXpFZjTjTCg3A541aknoX7yAa2qy2WLgb7rCyH5NCa4",
  "key8": "3L9p5WRFiXcvYDMRFbiRBZ672D1LD9NgBat2L7ixqFtMkJpPGoAgewytSCfq4BQZFywgrYchHkwYvFydixSVWz9t",
  "key9": "4gNz3yLBX9zkjUF4kbGkxs8ohPggCrofzfrDEEJbz8sPDxEk9r7oVMYbQRJLWqE836g3tchcaNjNbpNvyzoyjrtq",
  "key10": "4f6afhnkGDUpomQkJapYjohhPWPfx4NkFz5mLFnDR9VNSaGnEsuPKHpiJjgMuw9MyaNtoY4xPAVZEDXmeadLQjc6",
  "key11": "3xmoAp3GktNqRfrcnsTNzSg6DzNH3HgS4EV1r1j7CmBaB49EZyXLJwHDT3QyYTJT3HkZ1rXR5L8JjFpni54eZgks",
  "key12": "EZFhmdoSLduTqniz1GxRMqveixwt6SQQ8Tn8aDuLjHXhSwpyGkEv5GXu8RkQ5oRbEHENYRadLrAwpHUsNL8GTPD",
  "key13": "ZiTQjgHBDjRpdnW8Nc7Z55L5ray28SNojpHAQgGNiQrjd1ceABoXYRLEgDcGWHQP88fPCSbfaFLxBzayk5uzwfS",
  "key14": "2vnZn9tZ82EsKYms1HjMTA64rHXU6u1hbetknCHaDdzkCnYQQJcrDNXiZ2BCinerUxupWeYoeWGqnLq5bzswFvnr",
  "key15": "4pVkV6pqodfy9njdGo23Cwd2PseV86tZRDW4wZBdRMHzkCiAR3yNd9wijNVihhH8ui1LopFy2a75myd9hb9opfkZ",
  "key16": "3WWLTEqAEwYJ4Vg9uNDxGRiPoBRpv49Td1HWi4mHDn4jotzFdXK65bHrx4z9qRwyNTQ7z7c5FH9sskFPxxqe1gKi",
  "key17": "3jBvLbBgqPYfS8jy2p51gKoFR7ZPnzHwyHFtuqwewfvyV3qbYDAnRSr9W1aMFwLZXUPgmg7idp7H3vof6eci8pd2",
  "key18": "He5BrMrD5ZcKK9yXs4jZgqFxDBmfPL6D7FcqD199mmVYXWZ3bY3TPrQuUMmGqPxZSjwjxqxUHWMPPxJPWKVdt8i",
  "key19": "3oFypYBcDNaV9uoVtGXWexcpwcZSYi99xWQ9qqo5sNrFgJtzYVpBB5NsxvfHrJG71ASB49fcHZ5mLHTmyoHiDhBU",
  "key20": "2puHSv3QjNVB5xhbs12LRTiHAYgC1bd5GzekXHV8D2nLaTofD1HpS7DhHCWCAC69pvZwNpmEQVdJe41Q6nYjk1Go",
  "key21": "3fvhsBQ8qfxRGGxFouiunq61SfLj9dsmeJUQyQAJAzHUzhPhCY3QhLSmYESBDq3CiknJp227SMmoYvZnSG5mLzRA",
  "key22": "fit3EQLFn6bBTEsZfocaFCpSF2V2h4E6x5qpjYcZFFEM1Snz6kQ8e19QmVRKihrkF1D7UbvtUVw19arwzKf7RFJ",
  "key23": "ozwLEbqygHD6dzWxA9R1KRNo46rKkuTaaRKNdNnwrKgoyhP5P3sjv1bwwLAVXTR1n4BvpSSt1pWzMVrqLP7gX9m",
  "key24": "4tUd3J273YsFWPH3TMFYZybnHmuudJ8NWsEcYER4adTktFS8muEXDSKgQFmZddS8r7sf2qFB4HrBu8dR7YagqDQX",
  "key25": "aQSTvA8draYQ895qTqNW6A2TouKP1AAVupW1XfcRvUBaQxLasQZ3BpVZPAEjfMv5zSA9hTNtCpq3KHqopb4mFZ5",
  "key26": "3aPNbuNVjPF75UUQnpYC4BuATzxDq3pXAU4EfWGNMWS81NnvBZEa5CTEhzzWxHfAWnypbhbmshY8TS6APmEdGNnJ",
  "key27": "5Wd9pVzQBkPfQvBknazvGrF9XR7GxHAYkanuS7ssAra2mHQ1tS9aix1Rqn7QQzRnZhA9MU7nGYdwKGHPQyX3Zj64",
  "key28": "5wfAkGxiJPr4Y6N6P4wRF3usH7T7uSXNQYCmw75xMzAcS6U8CMHHncCcPMvyhBdpZfZ3VdUAvrYbNxWTDpWsByJL",
  "key29": "2HDbLRrxVhLYPFsx5PF8vfR1q4t8bUgrY7XCTFG7vDXe9uZnvuF7wmwMeMNP8fizj8WUGGKVRsrwN9yGeLx1r68z",
  "key30": "3MQEQCjWamcLMqnnPsHyVWHsNKUXbw4u5zTHap1F5kH5J9Sm5zDB1evquuSSmfCG9EbFaNgZdJep6FZh6uUAJYHk",
  "key31": "4zzj5abADHzkMeZS4Px1AyYPV7J4qKoasUVBNCfEYqaZ4gAbs1FbBnRC6cBmS6oPVHLWsRL1ioA2ifGgoD7yRMWK",
  "key32": "3jJ3VwTXvgeyJ3asKN53UeTPLGFXDiZHZpoNBFbMaHPAE8a9sH7u5mq2BBZNhtq2g3TUkM8nbqTPJVpEgAftY1YQ",
  "key33": "2g2ucuKNAZU6anZqtc4wVKJ6dUCyoxTcMrAnrtxFu3D6FcQ4JAqFpEwFxZQ6YKK9NxJKo9FBYBLro6tsL8MaHhcf",
  "key34": "349qAhrYdNnu4VJxWnZPBK4x4vH7RFdNWZSPeMNbDDvmP3fAPJ5QtALzfr94y3BPyXzuSGAuZJqswocHWYcjQZbh",
  "key35": "5J3rsqKPR17Ty6FAPeZKAYk7FwKusSRiFzu42ZyB8CxDUEhz4aSWk9bdRewADRoQHzhAEWPWNGKnnpBaXKR4J5T4",
  "key36": "3B75HuZmZrvN2LafQ98xUeaJsyacdVTuBemmRJhLo2mdjZ2z6qYeSki3YEMTWpmZXsyVuZTM9SgErTjxUpGih5ra",
  "key37": "gCzKL4xQAXypbu42j3LFoyaAvbMbGPuJsQgXzjxxL4cAn4Ce42BojAXhDhmit9zpswWsYSZ9mY7Rue5ENaEF2HV",
  "key38": "2h1iBQwNWiYaPsUD1ddRdNZj1Rj7SDU4yHWyZKoWGsg8Qnaq4DpfyaQ4UoKxZCLGC9FFBCNfGU2T8dWt7mvvvWm1",
  "key39": "4rAUzLHJKALhBoNakHkJfktMFBJT3hYMi57mT6VComCneCUNxTtANer3V1cTUCfuSASVfxJCqis5sUnah7ta9Ke1",
  "key40": "3H7BtPyVrF2qhA8961425JmQtx6veb3L1v66yYGLGkkWx96iCegVptW7fsLziKFyLSvhxdCin8VcjzYPp3bcf7u",
  "key41": "2gruTf65Bfp3ANHUugzaDvf68Tcf5Mz7SVoZMFioVE7TmaoYKv2P52uAwWtrj66RZ8GsqzsisxR8rmvyc4wVjkNx",
  "key42": "VyFM3JktHDZBBgQkdeDwVUjJAoPGsSiB6XtEpGQtPWFNNyBpCnPUiRTXHQonSwbioiAumN6yaTNYxxmKrsHPDb2"
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
