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
    "7PavaGokE3YSGPhRXx8ohsuaMs4oU9Qacp6UiPkjPYaDgC8hCg2HEQHnK4yMeMMZVMSSzfmQTwxgZiFFxsKh67z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mu4s5hKqQB9PWqv1ak5tdYPW4QTFLXPFwWpcGAYn2FhCj24GJxt3fbn8p5epp8fBRDYZQjNK35kvKdD3ujzrxBz",
  "key1": "257JJPehijqXnURyBgt6myWiSZ3KfsvEvVxDaZusc7MkFXeptJcpAafmrBYJqypZCxjn1rEez6qmg59C7oAMaMLx",
  "key2": "4yXDN9curnHHHDvGxkKJ9emwRyWvb8TqV9aXrkEkYkXvgRMHdGpUL6c7Y866R9cKTmntJczJi57Nu75JrtXdoqEL",
  "key3": "5SatUtNGksspkHXNLFuoxUyw11hPMQUw9XuGVDy5DBnoxiS7KauLPGHmyZ7cdZVJEMoDF1SH7dPztDEAqSVDk2pr",
  "key4": "3Nqb8jCtmcGH1MgmmmEY2j9YnUuFE1daEB4AvgDH7RsJXCjzRZkhLcxkPdH4MsT7JjqmTsXraumBWdC4hYeF7JqA",
  "key5": "5P4sVqUHhCSL5fzRiVPxWnrwQDyPZ4rr8XcWFiw159HAvekn946HM5k4is8ADwQpJEABMGJNu9PFPhTTunQrhbpC",
  "key6": "4jAbX9oN9DP6KaY9S38v6V53XhyobDADKNvzQJ7XWazyFRXLurgGedxnAJRG9TizwUjTnetS9z2WNhGBEMz3FNnN",
  "key7": "fLJQ4YToGnNa4rZzDgRfKJwcyHHCCMf3iRq1ddJ3AdJXP2BWrG2ApvFGt8Vq4sciTK958LK5qJXDodp4NNWkziQ",
  "key8": "58wikYyoq8DwXBhjTNVPGZC221tyUoxUaE9aHsoJZoRzfaySsFUwfhWRGXbi2548LnPjpXyByyygkCz33V5N6gy3",
  "key9": "2FT3GVAJfUTk5LEYrP4prPHQzpi4hzTmRVJ4epv5AHz1H7AgDwvByzEaCFJybH5N83PDVomFy7PGj6prgF9kVEbm",
  "key10": "5te1daGZCyMwzPZtNDp2C1wXNyf6bM5MWhTzjKTAj5W4y7QKdubAW9ouBdEtQdYuCHdh9MGtHruE1SWohzGs1yHc",
  "key11": "4h3P1upByb26ioaNHz9wbAd1x5K63QGF9GzrnR7szWZ9U5x1VNfPGmDpeZHkozjas73egzXw1jVgjrTUf9J87p6j",
  "key12": "2o72D3tjY2JCRp56RzpJPkNEELQK52ZUMcPi7UR6qAZhA4x4vYsYXCtXqM5iyUn1qPVy2f3v8NZJRqXrUoyzQoXH",
  "key13": "2TKvNtJDBKMiHH8EVuEFHZHhZxenmDjq2rvLjPajb6Q6FZkgQD8PAC2N3Zd7sXcDpo9whwDrBTiDdBP44VFBajxz",
  "key14": "28d8dawVUbUYW6nDQvUVCHtTLXEPEKFPDHck1zzfTEpPuU3pApUh2teRVCwcjB3G9cW91szMGDveT1utADQ98SZK",
  "key15": "n8eXMQfBE5Uo67gFEr8hwwpQSY5ueza24bxfJu9xapURyBNxjeL8j84wL5JrDuHUtb6UZEzjqWkoT7krYf4bEWb",
  "key16": "4sPwxNDBMBiVs2KvkfPbRGXrv1Hq5yrkBgrPpYZ7s9i6E3MgFXaeq13oCATgG4MZZXeMPMZmoMcG6po5BDguEMZ9",
  "key17": "4iLQ4umRfzTG6kmWCKnUtfmwKqcgWv7ou8NifG4eu55LQed7CYDNQBgFVZR9vvq64onKgP3FmL3H5bvDq377gnUm",
  "key18": "3Aw2pWZ6svWjvFqbr83UTJaSYEKj3q3oUwinVte5rce4NhmbimGwjhnzGqcNzjqXq894nY8pyoLsApcZs4tDLcnC",
  "key19": "4api1cWgHCVLugTpeqhqjLbak9RyvUfLie1ArZNTAMevxPVVaKgukGHXFmsaAxwL71X7T9LNsVTsAyZKZuBnU8j1",
  "key20": "2aVEuvQDufnKpTLJs7ivAsAwf1k2rB722vDEMbXNXVL3kyKYDytQUAJ4EAmmEXpX77QqkY9VMPjgTCEBnUVNdbbc",
  "key21": "3QvTW5St9D3yV5rMVg8rmvRpU6p1dVpJ62v2uLaXwDmrw5fKHP3j4cAv5EWPmHb7TqE7NSmEYw5GYdgkLa8n5kb8",
  "key22": "tkjEgmqVJqU7x2TfmZyAMTRhBsZ5seYjhXSzWKMoo31b9xHqiEkiErE5igfmeiuTnevzQQNpg6nJwU5wTvDPaA5",
  "key23": "3NFsmeXcAjKTw5TsYTwX2SLe49hM9PtBKdtPdYKezSooSLGrbzw7h5XM3AKubHPaEcxpX2FQTT3xtAAzkq6L3xXm",
  "key24": "osgyZx9Hzy2J5Vz1rJ8YTHsvfXzMiFgdQ2KChcQsRhtGAdXpJx3b1mhUknXDCfp2zPES6iVH2hLyUnzZ77SgwXz",
  "key25": "3DrSAmUf2J67ZkqWk8a51VMURm9abH1AQBsnjG8pJep141GEt3ekRkkcALyZZ8pDq7aQZLDAiVcjnC8kBR4eSMD5",
  "key26": "J5DhAjkzfQ7DeQ7Y3kF8tefjvGSJiCBAo2z2Y5CE8dz3H7v7Pp83wbtF2iVpRUCpTSwBBWWVjSfdDJpq1m2Vm3s",
  "key27": "2PUXArjP669EpftGaJoVYabxjfTX9pGgE8yVpva2KUj52bkZ1wzjcR7TmMn266xscUinko4oPX678xkTMAinNymZ",
  "key28": "xXKFZe6gHRo8VRijVFvXKu239RFUugErKMXKGrBcF2gKQGmQw7A6NpYXTuV7CAa7r841vdTkLho9dcxk8hQVzqw",
  "key29": "bn71asPVFESrgTfc4KjhqJ6KuQHvxzBakGPsfAnD3J6xR3mQdUEX5crJq1Jp19Fg4jMNwGHy7dKhua6X3Evo4eR",
  "key30": "2ccjkHsCdYJrfcbequhBqhYfXe23mAVXKZSj45crwDP41FXptDUCjKvyndrzmZcEuJVSQyjZVRgts31WptHVBgeg",
  "key31": "4ZzscxSSAeQAPfgHFEsttR96y4yKTbf5tGjtXLDgJ8Ud7nybh7q1fSrynnFvGsFhLmVc9whcuqbavn48h9Sv4z7z",
  "key32": "3Y1AWxBNrymaKzYPcDjgEVD9RuQbHKEqiKXXJteFssLrVkEkPT9AJre4UMYoyLrud4LToffX4819zAymfxVDCUz3",
  "key33": "3P13vUSR1EkqLoR2baCaCWnny4ZUDcE19vb5xSiB7CEugGRigiH2rThRgkuUV88EWi949Dm8Cu9otZV46JECE24N",
  "key34": "2dZr57fxvKbcij4gC4JAnHMGrArMXmNWZqRiC7SBaHuhQ6U8MiF1jL5drFPtjrNyvDMQjH5UgofjMPM5MY5o4v72",
  "key35": "2fP3Jh7BgUTpQXdxwVfRJtwBhX29qEvtU13TJn1kiNhCtbVXPmHQ6CKwDozdFPBEnUrSX3VHd8W5ARA7iEmRDbKJ",
  "key36": "wVauFn9M8CEo7KzfT23QHUsEQLVhZHtfAnrz4ji3iMsfXEi1LYDPdVFm44VXcat8WpqqCieKPsEnGrYzs8Lgc2B",
  "key37": "2TjghzBE7zZChm9M3sK6uFyCLW7Jk7motu9B5tdirwNQsfS7TyuRspYBNQ6qoKa8BWAStKhRFwjmxeyr6q442QVJ",
  "key38": "58HvpDRoEynpMsFJePvP4zkUJR9gLQ53HGhGvNd1PsL8s5cPJL3HQEzatpkDnK56AJZ9MkrBwDUqxttpa5M11mEp",
  "key39": "2LB95dfsYCWzpo7xroSKV9c6n891d1o2FCNRHwyCpfq62Gfx9JUN2etQhs8CzwEhxZuS47WrAKeFFC4rx4gKt9Qt",
  "key40": "49sbKNK4XjRJSpWrwMczZCWxn5CmcFuA7FHv4dzQAPwDTm82vyb3zk9GUN2e2jNpPcsjRU6TG2vU4eoTYfXmd1Mt",
  "key41": "46QUP2urgwbnka3Z84oH3MkLcybwqgTi2LiCnUd2yS4skJijnnHbL9wSy9sNxFXcgfUKMnSZYEAHTNFU7SdQLs93",
  "key42": "7tH4ueQLx8kQ4NZqE5bBMAMbs9GRqeRRVHW3g3hipUX4eT1GKdmK7zTh61YjojZJbhrqS7CbvjZpEy2JDpFzUtA",
  "key43": "2rWVNRMfuHGbtoZAYCP6rfbbU1AszH7tQMukhWrWsVtwutKbot4pdav3ykU8X3Pz7T3QrRxAqNy651EJEiMatTJw",
  "key44": "216qyKM38ZSGcxEcrE4HZ2UMto8JxEjFhWetQLTDtLU3mNoDEWf2Es52tB5rUi6k6boe1tNrFoSHtgsRA5QGDkSi"
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
