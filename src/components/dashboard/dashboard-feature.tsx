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
    "5PVcb6pXoL6QeYeHW3rNsQHMi9jHNLjWkPw19jtm2ZkWJfr18w8ZcRtwz5gWiGMGX6E9xvDkLA171ge2yi9iaBhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TyymweUiPPAMervh4aQFxS5LggYNH1nuKeYUfhArh6FtLq8fuBbrdmoJmdmVxpPHNLqbCArpLiFyEGczxRMm1i",
  "key1": "4DFrrmthekEGVU3C1asfW8pe5umusELVrijokPgFdU9d28zNS9Q8XrLinwpdNsFz14sE3m6YbJRpAvZgsfcCcCDc",
  "key2": "4yfuFrWRGkESMGAUz2dWo4fdFi2dw3ww8V7MxsaKm4BzmqUqyZHE7hgMFbZCf4wN96cUomcdqEhWRyWWFc6van7f",
  "key3": "2NjX5ZuoWcbRPFyUW1D976qAdCEi3TTbHttg7xCCqSEFnpNHcbmKgr8VFa7rCiotTh3QD8XzMK3hJu4ahEGBT739",
  "key4": "2gH5xWjkB4qUAH3PojJbhrmGJDCgKm4hMaBM9fW5AuT8unKYCnwDEAxn7WQDFmyTT6UNNLDd8iwKRtbkCqQVm7tt",
  "key5": "4x9vcov2vLxDwY9Mi6sWUeP14vA3F7Woc6XMPkMzEuwr4hSphUut8kEBpEMC6eBkSoErV7Do3igmSz6e3254EXFn",
  "key6": "5woKzZ5TiC2TpTfF8Vp2VMr7PMUFRXk5uGEu5UnG4hV8bqrmXoYMWgJzxEn4TPSjnqNkMU1EjbLjzYZXGG5ntQPe",
  "key7": "5yTKhkuy9mGbdvQMr5EDmZHJKJJhqG7tHVuo9BYhejAvrc8kyreAKk8tfmFjD3goK2wQ8S2K4Zw4RRhXRqyWfqvV",
  "key8": "2C79vPgNosHhYdUztRFX6gXmtfgmNLjCMYfzBsxsnsBywryyuMVPGmo2qeGss29uQpQVjaKz8YsxM3oWVCXNyVJ",
  "key9": "3qBjy7MepyKX2xLEa71fPczpH3wW6UnUVa8JKTtNYdVceSey3dBYng4TFdX7X17p6oJtwzL9UPw39J4YFLvv4J9j",
  "key10": "5RPejsWs7Z3kNMWPaN2QaXRuHY9C984gdopxMw34dLkdoAtxYkzJxHdHqxumbGaA4HPtimyVftzvqztt4AgqYbhN",
  "key11": "moAyGAWEYAcwJ6rdcMzUsRUokvgfeciHF2BWYcdwDfrmMD3UYxDi5AiXqg3y3rfKDxy3NrYHdHndHz7EwjqtjKj",
  "key12": "5dYoAfD6XxDuDcq38Y7Mpa58xdDJothsxFQeBbacvz39xVPauKtY62gDQypQj6MMiRZVtc8yWwFhMKRmmpqwK3Sc",
  "key13": "2AARDhpQQekC8kcoYCv9XTqpJbMJ5MVb6v33GZDG8kKfwNruL7zmWgNMcJMwZ2ZtJ7YnmpGHABcAMfoMz75PvhXv",
  "key14": "3t4aBxZGia9N9dQ6r41V6eFtLGuBUp4JgsFxkDjNtwDEZL3Dn4xmhGt1ZTebsF29kJup5QAdoN1tfn4QN1EZxKQd",
  "key15": "4KdZ4jY5yqbRHPCKGxJS1woGtQCHnaumajdTc5LeQVnKHD79NHQTPwQeUjtSxSeAtiXB1XNrZDM2TkuxTNbratgz",
  "key16": "2XUtKaebSw1qC9KLcRXguRTcHvdnpdZwAy6D1QPQrmfdexTqFYaSFuYeBisrTtYPpqpSmTPSqpeqTxGTiTrPved3",
  "key17": "4izyfR5VJaXjXPDN3mmFBDNSvcd11PQzo2cmA5m1fAPby52PNUcu7DMq1zu7UxWLVfsRKKuScCWrXB4MJEsaDA9x",
  "key18": "5es6T892DhuTE5DuUBtfBFhZQVgz1KXLuw1Gvb9MCKqN3VUrUA6P9UY4TMuWdG4fy2gkA4qVxR3vJQTk2nYXXnb5",
  "key19": "5zYVFrYZmoKPtHCSaZNp1fv4ac6sswtYYQhehAM3sx7thzp8TDg3YfhpLroxGqhrDvf3TWFGVHXRc3tzx2iJzYir",
  "key20": "31U6pUdGWVPot5uM1MThQkEy5Tmy6qiPX4PKhb2terYBhRwJE3vtTbFnU7Hu9Z3Mx2agcbZNqvbmhLFfQoZ6Lbcz",
  "key21": "2ag3QLC59pjxBPvU5drJ6QWXnHbfTPYnoQiKDPdihp61oLKvhWK1RmVHZWfRBsiTC6okeqVLnGSaL3rMNZZSxZ7",
  "key22": "67UsLY2xp7SRADGgG8wNFP9HwimZomCPEcb3vbDoTcZM8o16gantYzQy6RYxaoegNKdwMfwKQv9fwxJz4Mq4ywnH",
  "key23": "3N1VBCD1EUoRsDWNQK5vQdabTMVHHpUX9sAmBUhVxpGs3XtaSAZydgWtEB6PVxrRmgjxUERgxWKC9evZduVX92eb",
  "key24": "4MLmuvgdXESFrjUwARgG3eWicbm4wmhuXA5bx7hPTMu3KobMLaURopViBTNhm8MRZzs4RwG2k1unwqf1SYzJNfbk",
  "key25": "5Evo28G3Dz2EUNYFUe7L6bqBA5CFqMdb8qWvei8QdiSUUhFQtDUtD1Q3RXZQTcwrG7b21FGqUwzinUz5ZX2Q7Pgf",
  "key26": "2HyhvpgX2HS5WjaVbUrQAtf69Jhfw8pfYUYk6SW48PAs2ZqucDbjx5x2sPBWKuCjaqbAztZ6YjMptX1FLJjVGk18",
  "key27": "3J81DiNhoHE2qZmjKWNbzBc6dak3XWHAYoC7E74AnA5aBp8WFkBZ9g1jCWYxyzDNoDiugrnxKKVnoo2fuXMnjHH1",
  "key28": "HbZnaBUH5QbzjpGnsKMFiUFuXL6CFFUqvcT1DgR6FpA1FpkheGCjdmrpA3LSn6kGwY4ReUPYLT8bXUUNNy3sfB5",
  "key29": "2PWVgXET1z4k5wPUywwi7FK7NbnQpqbMtNunAghFwvD9i8vu6HfhKv1oeJu4b8byKWPy2UPrTq3a1chJmJp3f9YQ",
  "key30": "62VVVrN2FNxiC4HAtx9SjEXtrGjfjvo97bGSiwSWgVShxNCHDXHknU7u7HKGMoib4t5tXnQM7JRLXREf4GJ4EjXf",
  "key31": "i6TnxkvVjvJdQjhuTueJT9BBSYt3XnmYTBpCnFF8h3jhB2KhZudKAbRRBwLqYu7ijUU6XY1bvrEQGHz4EkVu2sC",
  "key32": "3eU3fppbcvoaVxK6PqTFxDfxCNeC4jcnR3Ppi7iaq7UL8tqnQjcz8EqmKWocpU877vUzqXwt5AHycXZhqeDeog4x",
  "key33": "5Kp6vwx84T4dwCvetHRQioGCKJ3fEj2wUQGZJbqhtaMTP4uEXKaUTXLbQLpvo9bPdXe5DxAHmRxSnbZfGzhhp1mw",
  "key34": "3yYSDJZdXgt3hsEbk35LpRCaev21p34pWGmK73n7QMMVfLe3HSfgKDwuGu2rHga4vEK727Zo3UHZxFHoYKzrahU3",
  "key35": "3TCkTZv8MmbLbzr46eBrk1vVpnZNTvNtysszYcrFXALcmWFZ3d5ruLzDwTJsQ5NhF8uXuSfFZSPv73piw4uxkFpm",
  "key36": "2fwmHs2q3EthqmYb9nazYnwbSvwL22j4fLBVSqBA8BZTDkqDEzb3q8mGcuBUTAL6zHWgZ46xCRvnd41QaieNN5vz",
  "key37": "oHXNdDMUanbLaSadFUBv5ovMG36tCAGcbPmJag3KM2FUNmtrh2ZtT91WkAKmiKP5237vDjsteKhaow9bSPFuTra",
  "key38": "4pFFVvda9dSGVHwusTpo3Hrt2TCrHeKNCcjUbt1vJo929xRCtzpbD91GAawfj2G33FYUGyAjiMY4PBFH6xMWgDWi",
  "key39": "2eMT1ahVEjiCR6cSsjny9VQ9C8y762KveYMqcufV9yZGsP3rzL78zmhmuAUkZEba8xyGNkHsAm8fHYUrceMsyZx",
  "key40": "5Y3GB13uKYRswhDuaP6g8Gx6ovRCKUh6E5mzo2oUZGxnsNARxujH9h7WmrH4A4J2rxMHqmerpWW5f2JYXCXkogEk",
  "key41": "5sW1iupg2PWmb8rKsdsaG5rzF8cBbTVsETLfB9LaJ66xos15pXojmdkHoiBNVAvHEa4Uph2BBb9rPQ3H2cqNQ9b8",
  "key42": "4AbxzPHcRq8pFizrMeAiNV6nKSQreVdw78JiWpVrYrmpuvBnc5HqfZgLaPeQDh3hJfZtw5U2KjMKajX596fC8h5Y",
  "key43": "5ExATH82KK2EvYZKbSPkNffjh6yqSfqfoPdj6vh8GvwceY2rJgYy7jU7Jyie4Hn4D9puGMu6pcC5dZxopcT3EdQk",
  "key44": "39RSbWGJXzDCxYTMbHzC7dMVD7WhGHN3P25CUZvhaUthZ7vnMAZPxaWbrDEaQzpBjBVCmhLzLrsM8StLQYqKKvbY",
  "key45": "3xomT9T3CBJbEeKkucGeYBRjCcEH5d3NkURDkEgWeLB81MMgebPn84fqW67NPVfgGdWFBfpneDU1ku6HYPdWQRT3"
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
