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
    "2hAs9DsMBTgreiiJkn9jYuANJrY4Ti3LAmt3wweNZJHwEGeR18wxMcNEjpMrjrb9Ectz9QiHABGsuEVYRTM4hAyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1E6DjbBLXoZ8VEKk3tZsyzxUKfE8sPLPYq3oHkTXWW52KX7sf9ZdWZWDmnRg4uUaDvDc5h1F3TCfuc7E7hvxr1",
  "key1": "4RXMaqhv5ASH2QQ7usVBEipZZGxPFHASCKxRobbnkm666rD3WuifCjW4eiWqyUNXYfy7BxdH53NXoQyxgpEu6PUS",
  "key2": "36oPWWdX8Kg6ABaoN6DJ7NmxzRAgaQbwGcWxQah4frRXa4g6oW4Exe91XDfdVhGjv1hoao6ReSNxWzHw5SkeTBjZ",
  "key3": "5CHxTxt4Bjwf53xRYbKX1gjMtZb6pkzRJZTjoMrUBPoPXVRSL73U5nmQs9nHdszeU23fncGebYvH4KkbUh1zAgGe",
  "key4": "2dqpnNzaKf2U1votv7QtCvcqMNpq7wLojhMBJgdMVpbpLF2YotsrhhJRufYgyvyuUwAfQTna2juWLNdMSvCVjCTB",
  "key5": "2iK4egZaHXirH9hdCT6ZfrdVFeQWoRwfo5RjTWCBrgnMaQ4vACfBx14z3dHHJqp28QaSVsmii4RxXdTrQr93qb46",
  "key6": "2NR4wXxfQwXSWQGzTp2CTRqKo2YJYfivMn1iMsqJvAG7pbNhE2vZU9xDaHdCcPa39jvXzTcuwcKts3mJdg8ucere",
  "key7": "2m5heBLZzbLeAuNSs54Q5p7QSDceN4e3NZ7XETvKKVz77q1fLxKQNE8HSz45AFQMFpWDpyCW17tr5ShA8mFSPG3N",
  "key8": "4Uwnsf8Sm53eLYC6axNPLyNC4bDoAMZbTh5HzaXeeSJeWwXojoefUdWUTKi7udQ2Y7pPEnhVzQFgXeiwL5wiAGS1",
  "key9": "584dJHK9Cbv7pHQmTouvjEKkboNVbr6VtStmYPF5XiM9nXQ7qFi7VoWHdvRx8RvJJaJ2hVrbYxJeSyv39fLNoH7W",
  "key10": "CEc51nvnZWJPMtjAFXN6YMXGuZrWaUiSetpknXPC5t56zm9Ld8ZjZyuXF8CbMpwA5KtejCmPddcS4PW9mLjmyW5",
  "key11": "3HcVbFkPFN12dvo5zV4FetxY9aQZU8PWWH3ejU4zEU1uzctjet3j25eyXKYLuFoGzojSe5rFq179NiTLQJ61rGne",
  "key12": "GHDp5xZsBWQbm18FkpYXQdtSRhoHZ6z8KxVJJ7HhLnH5eFQjzjks8mrCwfjWRWQgxym24EJ9yeLeLZQeJoiaxns",
  "key13": "28EHwD3bg4bRTr6ZMio7Y3vokyMeQkYz9D8XTqF2StXCEn8o1dhqQy1icCHwpZ1kEDyLdw7KTxUbR6yHwRueRLCA",
  "key14": "2fTnd76i29RJSasdjpgZQLtqMTUvLLjbt8uz1Cb83qfrYv9d5AzYrtwnqENhCE2t5MWZTdjniJhXU6XbuvPP3pCn",
  "key15": "4GipR7bib8QowNhLAPQ6hCA3u6EFCfDZXuCftVXjgYYrsVHeuzzGRxbGTQe4Jf1MzMsx5ErFL57YfiKjBCF5GE5G",
  "key16": "Ms9cLk7tyEkGj8prWXGvfJASLoCJx1jxXg9F2WK4o5Rq9RUdvAXEWY5mipqDSEQwdWcoFery3TcwPWTPDfUY2bG",
  "key17": "8f3bh7k7r3CUSaxx64HYaVkhb9QJe1A9e4LUMjUhBUjdTTHs8rSRxVE5bj9Ctai291xeuw2kZ4RWJB5pb2isZYR",
  "key18": "5PYxpTibuUMCDnWTUDC8KkKtAs5g34P4J2fGhcoxPFpnF8pgmJqZFmw1e99je6pXB1p2QhKrMK6TFQj1GWe7yqmf",
  "key19": "sPpRN4bKuJKyWtdjLaP2UUhatYHAf1e6hUSuc4JbJeyY2cP2YmKxbcQDB1V5HUPBCSPfz69BoxJKdZ2TGm3cRFu",
  "key20": "3tHccK66UfgwnMSQgvbjep4wZ7rbBLzFahLNgDELDowC9Yorj3bEHp8o32uAJpZFyNdxd17eJdfj8K1bATfPSsCo",
  "key21": "4objagjTmRU8n6tsGGC1rYyDXzJ7gruqppHziafJBDrirQ5dSf1FdSNXGcvn5V2kHdeUtA8HJLe5KTxhofU2dfZG",
  "key22": "4rwaH4aq9tk1UkQcQV92b5vZzHPxy8785Vkasj46MKFG4Zu9aAMFyiuYWmhGWqQGUHRfcGj6JCU2Rij5KimfFxAE",
  "key23": "5gAAENZ4g7m3ZXi41W3CngnTvNdrBEa1BFsQHgoSDfMkDo7R2bjRjD2v4qLxmMauD1vpFenGjFdL28ZW5o14cemj",
  "key24": "3JxuXjMELRZCYX8MHEifdXuQtEsgFjaSRKLYtvJMjKQtXTLGMXAkQ6pQcevGjJ9THzzxTgDpxhKx3skcXtV8yJaW",
  "key25": "36DYuLzMpsZX8mJijHscpzBhHBBeYDaoiMLKZX7LUfwkQ61EPpeRm2JzMoTShLRLuvgaGsx5jPNLxtXf6FRTyL5x",
  "key26": "3jcNrg4WhaTa5MtZ1NRmKoDJ9Wn6L4o8U75MH2ghZJK4ctggiHUnMduswCE3KYiS6jz2UnpDcZe4vhc7roFuzgvi",
  "key27": "omQdmw6Mp18hR2AKHHfrLxTZud2MAVF99Pq36p4yf4jhwjW75V7y8y2rrCz9UMt6HxGNPDmicW9v87UCn8sP89T",
  "key28": "3fBoKHKvqhQhmDw759v2GzmrJ3epwimo51s8Z69z5cxuV8F65VLzGwkKTXuVfaSM8gHZ7LP5nbSP8gGrpZjCYMew",
  "key29": "3PxSma8JknikDJB7Evpry8AUw9E1pYu7o1j88feGX3ubXA9owFbxpHqSLHcYeqpuimaSynwBJiqyrKosBJ6MgToz",
  "key30": "4tkiw4o9JJ45rKgJFwsaWL9PrFPgnNZCF32RZsBDgvcWkW5RNkVwfhWKfLmZSCxkuPtW4ut9jnz8C5zu12k4Z4T9",
  "key31": "3obn356f2hdq4y3zc4g86UDqXMDfWPupXD41L6BHYPRhvNLhszKPzArhwnqV4zgPYUEEmAH8NMYTMZ4N5TX65K7m",
  "key32": "5TtMG8z6pLh1hGA7p12M7wjHUc1MBSekAY7SVPozDdqBT61YFfvVFENErXVRxX5V8hAoPE3NV7Hv6beHrcP25LL7",
  "key33": "AhePGwEzC7GqbXEhG6VSMBDdhxSweSm4uWPyJCCQNsVQiZ8G5dRtgkrNEuosjCBnBmjAJDByXdVUVJbDbNLbNGE",
  "key34": "4zrV15KAKKJFvuFPXHNTUvx3fzwHyJUg3hsD4ycb8Fsb5A3gEFqGnZ12YRQWWCnKgtyMQCGHN9UtoVPM7Eo7JdZe",
  "key35": "3FcGhXqbP65aNpnLTkN9TYE1X5emdzvD2zRB12a9H2nakdGvQpETb7tNAvJQbaiP2oMTcR2uyQd95srCgf4bVNub",
  "key36": "5sri5qQr2R4jEwr4oPR8ebAbZAq9SwZwyrYKYktgMpT22PBEZgqr4byFpUbWygbcD1EWMZnpn8bspYeHCM8PsYKv",
  "key37": "5cY6Asdh5LrejjmKpkspELirMNzj7FF8wfEp4YbyPuGyyYtpYMPRyUp25xCnh6zWoet2yv9XAqF4BewdS7VVW3YA",
  "key38": "3axGJs4WqmWRac5jsecPYKMTJHVVZvufX2jYN27HVRN3Z2atn5JgVgUSjjRAR1Lmo1EFkndj44Zc1KEgQ7gbGrJx",
  "key39": "5KV3JhNRuxp3yhaSZiQvXR33L2JVEebRQVY7QSR9wdDx4dgqE1TRh3L358zobQuegCmJBR6n39XQAdTshbhgtaJ6",
  "key40": "5R9G1Tg6dNKbn3VwwhzRkYgNaNZSDDsFsEhxNkAF4fVV68jfUM48sSPFtKwdKMeUwRjbXayTdXqpCag1okzFUTTt",
  "key41": "4Gzrm5HFFjaoMnAx9BrjMFoBrtpZvbX4WiAKkssoubu8UFRS3NfXdFqKQ5JjtVTcqR1DzNRi8eASZanU8nn1o2ba",
  "key42": "2u7m866V5XDxCFCFkSyPT8Chr4F7xvY2iVuFn7GsYLbYxLU97egkPMXYrK7dofFid4Rss7hTUEXzJadnsnMVRX4V",
  "key43": "4hf7nzRtpdVteBNsnK2qENcUeZMpYCWwJgVrQkjW8zRUBPnjXUhhXUnA3R8RXshJJTmvrBRugaa54FVP8gWYb13q"
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
