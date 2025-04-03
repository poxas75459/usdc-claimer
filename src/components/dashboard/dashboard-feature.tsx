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
    "2byELHGKWGq4imPqrZb5YoXhdqCGHzcoFR19zEVbRUwc6W1dQ3Rt8dt7hPctTBuynootrcRJqVekSPkvzpNdpKuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ss7epJLq4sUXTVWNvkTVZpEx82JAPemDnkajFu2ZER5h8YCMLYsvTBKgNRGXWSGSTedZRn52dZ72Up8CEtRJJ92",
  "key1": "53MtKNUfSpEL1kJAb7kxAkfGsfpBMBiBZB69HihXqEaWXpGmVV2XZRMummTePpZw2oDwAJDwa6WmhtSa4iVsraBf",
  "key2": "FUE1ic39u3rehSxKcb53otKsP9YFidEXsoSzF2rq4YPyaofXkTYSeu4V39pkXPZTiHWuypGA1q2RaXeebpFJrku",
  "key3": "2f4opaecAFeiAezfafSLPWZ9JjDwc8yrZrrxK6XWEkTNcaovZyrmWtghUBEhPYLodBSyE835f2H56ijTNaLPEZgG",
  "key4": "51S4VddafeJFRqwb15RBAg7KfsdaTxRsvj6tywupwXKAgkdyLQ7Yog9FYi5VyEwjAx8Ft1Xq2JYbz47uF1hgWetZ",
  "key5": "2q9dwruyfjdXG5JAo5mETJjD2fRkeMR7md6EZE3a9j332JKLX7bpMfsbStYR3SQLbiQrHx9iMuuBeHpRrwoa1Ery",
  "key6": "3ETJJcUpcWT67Rtn48y7EvbFVw2cfhZuXqNWrEkuRYgPTN67kwjZ3QqCsW3bvEobUqep8M9KQjGKBGZBUd9HCGRL",
  "key7": "hxxNyh9E51ALcvp9bvWn21zvsUQxR7aKCsjGfXRwh3aeTvkRKJCA5EHtTJpmBARwALXL6C4u5bMmB6xbT87YzrL",
  "key8": "4jEJKNPB1SSTqH9Cpb65YMb36D8sASQEoBzg91ohw2GBsRp5TPWhZnweemMbtapyHRgXJFDG7Mc6pYSNhifxhrhj",
  "key9": "2FymJMk9XmuYVsEgamvN3QdKDyHaFTyN2kkAZkNhjaX34aP58JyFHREZrLVVzRExzRwRpb2vfs2UhZc7TRAYqKps",
  "key10": "25XDcva11fB32fxnaB3DeCgbTK4u4howPLWTjqwYCDUy5TeUesDQ91ybTjoPe4745qMh4sf8oHN4hcXVmXnracQj",
  "key11": "46d1hipd2AstmrfwRCafc4EiLzBv47DoQNcFUZUuBEvSHPgGVQXuNBugWUbJsm9Fs5Mxi3yPU6CNEr3wQ4jXbeWj",
  "key12": "3J9GHWMX66YdLFgUAieEtT6UNnuf2LMNkrDnqqVRXb1ECP8nTzM4Wer8qNJZfTmN3Xa9qEyApfyTFyAAGLQZAo2o",
  "key13": "3BfbwLUTh2ae1k6MmqFkHeKMtwXoQFsUhHbiJm79nMRBGHEre6ruSpZDRdPfr6tmHNs8T9XjvqEBfCWRrv6XYMF4",
  "key14": "3X4ACrQRsfWrgY2TbZjE4nsDEmi3K2kdbcm6eYrigZu2x91tRcw5rZJnvJwmSzWCMewnrgiAzj3pHjomgGtQCshr",
  "key15": "4bfmgijLEfrrGZAnmsB5s2xzJ87Li6bxnbhxiZqavZ3dmduu8c78jkg9yUj1FNVK5YvRUmgU8PFLxcUDj3jKaPkB",
  "key16": "4kKcspu1RJnCj6PdQiDTa4ivUDVwknhBnyiuCbTrcCRVWzwk1U14mqLeEX5MTq7r5fqzHmhaw9YNk64xmq2hBTPk",
  "key17": "5bmx7C4RLRJ3eecCK2evxeJ6j4dHtibuupRJQgSsCrudcHTDF74Ed4Y2Zpuo2PqfyNvC6WVxSgWVMA7TREEUjqXD",
  "key18": "4QC5tfugZsKDwf7XicjvgtRYFv9qd4xnvuzPX4C254f4bkDCtGStkTbyaYWoctHXUM1qwj2DHaKqSk9Mf2VR4KBh",
  "key19": "PLWn83byrAsjfphASNJYBL7WESgHRrvQ3ZH7QkF1ib1DNYySx5Au3j4Xzimc6HmBrMc2KyQTcqD15iCZHcTuHH2",
  "key20": "3AunDrgwFEwqD9zCjYMyGtxwoACR3p6tKQTYTLr4eeyCqKZAJAknV3AKn6nJX1ppndwQdWEtoMpGsaPLhmL6rP9K",
  "key21": "4S7dg2NdqktxqRnK4gC1s2Y2bjbH9vzT5rHi75fEvukrxPQXxyt34pmhitMASWKR5k4XEXsSGMo8CSezu6SBnUrR",
  "key22": "5drWuvi1QgTHFBMWVUs7dYEwEaKjryEVmoZr41HYrjbU7fXRSFLed3PKQT3DnpuPXXpQdMG3uTRHJGEJfLtUreDa",
  "key23": "3Y1p3UzYhVBKhkQJJjSEvPuoJWaWBPKYnJnMCf6sWNHrXiUdjmV1GTCwWZFi6zCXK8gacMkGjTJizszEPWdkdfpM",
  "key24": "5prFKMj4Mwh4Vv4jgAKerYX8NzmfRyy3jGqJYnvpq4WgXMtJjJuGtC4R78xg3Rur5bhvS8xjXgGy6CyfQ9HLjUhk",
  "key25": "5hbyQ6xLmQzjkPZ1gAfNMjbxPZeEtGHKG2equwVyjm4E6GAhPjZ5MmX9ZSA47qTLzjLwCQ3KChnG8XN9BYPmgwS2",
  "key26": "zaz8ShbfhhNJMYBgc3JnrkptFGQo5Agqg7dDxZzFveESqSXjw7aoNExM2U3c4Zn4i3MHKnpurWsJcxLomiQVEQp",
  "key27": "4kJsVWp1N7eqSMzKheQ9yH3mJoXhuCRoXQ35NX2ZgM9ysix4y1Zc7Y85agHHezAMuuWKxLjCVMFqMxmY9K2oJXgb",
  "key28": "4J3GKHPMW4LuLCWZZWqfP6B5fuuh3jGaArpoWgQCD1e7fbH5tbZ17mx2CfGMtowWB441MiV1VSGn7Rqwh6utRZfk",
  "key29": "4chrKaWM1uLNAoeQDao9DUF5uGFEyaePiEm8uggsiRDKkQaoMRBQ3KWTLLRdae7nN3DLPu3MfSkP8UNqF8dbZDzA",
  "key30": "46KhY7f6AARKtyRHhbuTxMakhYqAZvmm3myPPaHB7SaTgvaH6ArDVANDXoLkuws3rQ5P4DCXhj2yWmaN7L1xDJo8",
  "key31": "4eerzjnVRngpe8ZoTPMwr8SLmaseW1YvThdZ6Fzm619FcEk6BBDAb2kywp9prmyF3iSxUCy2MNgnqLfydHdcPEat",
  "key32": "3dpsocKq2vo4DqsapQybC2eYMFEayMygCQQ2yUmUSNv1qhH5uYJUY4RVnZef8CVSMMQ8NGwqvweT9kNeQGD5uQZN",
  "key33": "4H4oExSAaE4nF3jvK3DpdxWD3xvy1RZrQr7rBvX2gFzxr2WURxJaJS4gtKGDYfVZqedrLdUYExD7zg2fei6ZT1bg",
  "key34": "5Hb7Xdoqjn8qedUYTCenRGQACjnJCzibrryCvNvsh3F11tNmZgLYHVrF5ZPYQdFwhYmsA4Yk32M61eWzNApt7NQZ",
  "key35": "3r9J5rrYSqLkiecJTikHRzJ3c99dHKV7HRcJLmHaNTW4gvZG6ay7hFoNUkKncsL8m1r56xZSDyFPcqGafDQw9LY7",
  "key36": "5rahwwDWoT9eQtwxs5DLFKbSfJZWGUHUmG5TYFi4v6Y7hmFGneTM1ZvFYg3D7xWVWFgvByRfzT6ak4wDH54brkvM",
  "key37": "2jWAUgzZLnTtvobJp55gJP95iR86uv1e7CZb9EL1wCqQBL2e269YMZfqbvcN8BJkkbPbkHGrgpc9h3c9pc5rNexw",
  "key38": "2oTy9oWygi7pK5CxjbSzLp3d15X4RPbvECPKvSc6yAsN2y8ArWVpmmCEX8pw1FZnz3FkA9gSbPHB4erCQ3SU6Az4",
  "key39": "254NomhDoWH4QBqzSdiDQJ3RGgy5VYp8BZfLGs9tQfzU79wPoA2JMvABtJcG9znMynfeFVGo7JiRVRJMfeuuVfZC",
  "key40": "2JdgZsGo88xU7h3yPbkp3j4K2rkFVGL6odAJtQdRBgMzNbw1WdAm9dKMeQmA8L6ESB6WnhnZQMTCrXXrQZ3ehkgQ",
  "key41": "51rwczKFon4BKKScZYWyMiVYhrUN4Axc1VMtWUoqxv6emVeMppxbW3dzk5vhCSD1Lr4CgvtEcya99ULeJWQcbLqj",
  "key42": "4nKUDqmgtG9NnPx4Bv1W58Zpa5PnQw4ratmFe1aXSN8hyoGjknfdAiWzJo8wwUFHpYzxqo2BHRPPtJMzSo1ksNgX",
  "key43": "4xf5knYxZ4wg5JFqB2hvMNQWbSjBF4dySBmKYtMTc6KoPN5SY9qPxEZz82pc81vHnC2x6hDrfqajTMvHUSyNp18B",
  "key44": "2ztgjS5hoG7AhLJi46qtofiSZQX4JXCJjq2aY7V1KT3Z1gabDmCD5miSfFkFKyhxc9KgEhRS7BMdsVvHrrtYqt3S",
  "key45": "3UifC6KGpcWuG1GgMYhN9UkKZtW7yTRVX85Ymi8TuRswsAK15wX2S38hXZZKTUZ5dbV7ESixxdMQgpDmuwVHqMqY",
  "key46": "5Udjhy2yMFgfZcr9NSaDnNRjdWDckHM5M7NmXNZb3Q6ABtqui5tNSMmpkyMvbFF8i1KUue5MmvXTkqM7YJ8RDk6H",
  "key47": "3hiPZv7qnfeqNEdbgiMaXCf47iMQMQsewtCn1TYUGYBUxRC5TLLss3uumzvfJtfVtz8ASk5JFn3Bwav5JsvZiF7o",
  "key48": "29cJD1K5WJY8fCnNB9VrGGwu8iJ67LaNPJoABBUHvZp1Z3zMoRPoSjzLKPHJMu1YBoCbom8cC8hGXekU9tAeXTLv",
  "key49": "3KHocnD9dDSN7jPSaqEPmdtJM1CFiT2KQYsbGs5T7YxrugWV5ds2DVUVoekBdueycNVi9yofz8iSTBoPu4XHVSzL"
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
