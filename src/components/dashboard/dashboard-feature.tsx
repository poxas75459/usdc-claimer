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
    "2BYCKCuGbxApEbTqDZm5uw6dtPsw9nBGapPrhmpaNZNv2ySCcsvFgVRrKHY2Q9hLudUdqWSgjqHa5632qac4mAwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ztKve3CmNexTyQi49F88g6GB8QFsFSkcvaarQRUgD3fwStYtiaeCSwsK14SFBiEuuqFvnqNRmtVnWaWykPatG6",
  "key1": "3bFHy9GrxZFNvocvwM4aDKUDwEt5mVFrrPDT4qLiWjs3YDQjhonruaVJw7XUWWx4an7Uy8qvBMMfJtPSKM6dxonr",
  "key2": "4QYD5A2ibZDoWGvBYpgqtuLtHb5ia2pZDNYiXda5cYqKukHBrCcX4YN6Y81LbsuXcAtSSj24j6RUPtG95YVASiDs",
  "key3": "23VKPLYZpa7QyVoTq6DfDtDnbQYSYcg6SBsSP8Hwj3v9io1hWHJNtLAaD39x1JAUJqvd8t3c9JhewcXg8YGE8TSS",
  "key4": "3bqqHxS7oUWnXWkZFr6pDeipSpetGEnQSqR6cN2CKd7gpDaqTU7vfR4GZBK3URTnvuFz7XDfiTGTW6K4cfhQ4Jn4",
  "key5": "2WjuwHZgwTx8NF7HLBv4cXooPdEZtr2DLEeQhkSkMXg64r4Yv4UpQrqkMceKGkpGfU7yXG9Rd7L8qgQUTgFUD69v",
  "key6": "Fn137gvJiwNHJsAJVrRjNUK1tFdQgQeCstpkC5UBJKmy3YkuNuGhQxM5gLAmfU4C67t1Ck7yFtNZrQPFG5CHtQF",
  "key7": "5UsdWjJ53LDkGNYyMyAtmm3mRigkoN9kPRnH9va3RuywDAejeWaDeMx5wsLeymK6GCf4hweNNkAJzTtrFRSP5bsZ",
  "key8": "2r5kFmNMMEiSUJfy7ix2rL3ZC8x9YUXrb9DjoKz1F99gRKoXy8HzxjPBrvGBd2oguRgcTg8Vb8PhdcHWRDUu3Pts",
  "key9": "2NwwhUZA1SCVDtvZcjh8eZ6TL8B1GgiiLBcBpaT12fKSAxRmQnP3dXKo7ub6MMBEajHoPRAPNEHff5rJ8vXbczvS",
  "key10": "5kzmvzQ755722XBuxivTajEix8zSCq9gNdwzn2a8NyLZp8987WYmpmpLR45aLnnfus55uYm43Uwm4f898hwgvTjD",
  "key11": "2jVJKQdT4GM5sUoTJ2LeM9bmGHeRhRuBkQ7QM3ejRGMAbt4a1Ba9H2bs21CeyohmFiHKir3A3xTFzwzWi6rCYHsg",
  "key12": "5QhN9AukoAQ3Ts4ZHCbkpokB1JXFwMUi4V6KUfj8MAgHX5mwc1FVgCQuVPmHs36mAPerCKufRwWWzFFBGhNW1vNk",
  "key13": "65S61TtXaFJ3mb7FpEDXYtohkjeGbLzWceG7iHyNrCUyfh5Bnfi8yF5LRrooCgFznE1ssEfe9TiFr4kxKfvj9WoX",
  "key14": "26yeK7jVHpMZoHEdEX3gPqnbHW6dzA8QQrq4XkCob7872JxowXbUrFtq9widWBp1iLp46h2Ubc1LsAwYfciN7fHv",
  "key15": "4Vy7MSrUuLWCMvUndQeGn8NRniAvPTf4Uet6YS1CzC51YRpUEH7smLktVHjvQxhz2N74DXZnfZKTkZ6qZwBu3iEM",
  "key16": "7uqafYZwcxgJ8YPffyTGQshpEDpdFgPpu5DnK2pRA9JZ3MTqHnA6mn2tgH7bKL4UpFzz7HzUUnDgmTRxfaRYLJi",
  "key17": "24XC8EgQK2PPV3iyZLjs9q5hfFFvvRG9cfMNeexsi59PcJCupsb69miGPjGHq8Sd8Ye7kAT7auJwMjNoDqa1xrXk",
  "key18": "4hChQkh9sf2QAMqhj5wPy8EY3i2ReVHjmX2YDXRGBXzNHMNfN4YQxnFDWpCtgq2NPvUnyc5PVYXbdy9VXv4cEgnU",
  "key19": "2kG3TrjduU2DSvqi9B6Pm9wXn5qXAUfqCbW25ogruzvn3nS5uaSZLbZwap6gMGinca3XjyjG8Lma64j7epuvLdt1",
  "key20": "4f1hwuKd7bypSsrFikecL8TERgjEXXyvKW9M7hgVAixk4xQAjxz64jQC4tjuw3ZuMyG2YBX5h2Dda4LeBuNE66mJ",
  "key21": "4v6ypWs5D7zmKN9DKtBBRhzYMJ8bftRnGkVYzfTAsrHsEGUqVEhB55YnpisXn6ZBtcvhg3snfCyX9kJfUkQSfnN1",
  "key22": "5fAnZgN9TLAMef1SyGxGDpP1UanFMJSpyPWvfcd1Za3PQMkQN15GfWCmPyynpGzriXH5cmtBLbvSapexwWJcwPzH",
  "key23": "5fJ8ZySA5RqCquuSuhYs6yehjGNfkMTYFZdHryxfAbSKyqNs3UpwAUPQL9X5eYVNLTHytNcoSppuQJdXn4ZjzPGM",
  "key24": "5evxgBuPk4xSdcRf3z4EWdzHm7WEAbo2jBp9LAPXQ7M4nbt2VJR3VGzfdP2CHohUFF9jzZuFrWcby5KRXVrTNSYY",
  "key25": "2MCDswLHHxmkQvceR2okotdNSfCQwgsG6eiitigmNqSY3oxwCPSMnHgGx6fgw9vGEXWsdfk948WgVtUw49yVVDLw",
  "key26": "2G6tPBTiQgefi5Mua35kdCJybo4ZMn3Ro6CLSrv3e6G59xRpdiT7Q7UzPiAqEcXe2ZuT13a8Gu1rCoGVJAyadS25",
  "key27": "4jGEDTEhZsQretpVXEzrAr348iwjbu1e1djbbajyWEPWCsJHTzVMLPSMwDrnT6VDKcFcrkWtHx1rEjCsYwKVJM8e",
  "key28": "3HaHU9wZVqc9twgTH21ggC7Amsp5pD4dRGKVHQy1nqQ7TmB3w9aGyQ6izPHWcLiUdp2C8FirCG3hzfV5Aat3FdVq",
  "key29": "5TKFp4nxF9dXhFAHzFDqBwShqVsoo2qkHfMC319keT3Y66avGrRWoWczMzGWsoLNnsMax6Ax74HNtu9PTSfgMNs6",
  "key30": "28CExdEUM3rnWwTruZ9TT1DHCTraEDWFrm2BZSFJo1ZWeq2fAybbThzo1ktAAoza1SyyrM6J9bqmRKKAwdd95qdt",
  "key31": "5z5E4KKp5oHA7ohNyrSd8kYqV5TiYHJVtsnqwm1MGedKyZDy65CYjzdDpkSZvqFimf6Wj68oJWagXicex3CVyvVV",
  "key32": "4i1eQpCra5mbc96TKftRRhhunMft3RDCwhaXRGSUicmxQPcGw98KWkGHtdyEW4af6kpUTgD9cQgd6yNxfNJQRFBS",
  "key33": "5k8R2GpSUSisYPkJHSU7n1Jt7YhRz3iUurg2b8AwSz8brnqSrUBmY5YhgHUZGFwNwFfGXG6cjGgh6vTEymWo33UG",
  "key34": "2KF4wAe2Pz5aDQoYb8wR51KmDydcK7x4b2sJXyWj3vWgVA5QGYt9QY9Twc28FtY2yp9DN1kEhuyd6WFvXXsdPb2H",
  "key35": "3afrWZjQdBv3SYjp5VCxuYWK3dmdpoPSb9BBhySm98pftwakuaVwY3LsBpa4hvF2Lk9R9fzkFynnLcbd8fXT2ZYa",
  "key36": "PNE1eKs7ML2hZS8o9dmW27SXP69jHXGccZoiwon2ETfwsVKGiyoCngVLBRsfC9FkDDySEM99cNYPxKPpZMLydYp",
  "key37": "2zg44rNfPzhNDtcWWxyUNRbQUmBtoZJ6m7rnGUDGTuNoyCMhbJJXmvxH13rfMoS8JSmggrLa8GjZNALQoajcpMPL",
  "key38": "5JeZGR7t7MXoLzmD8dmeGCq28Fher1nUXrwBKXA9jtX6tWyo2wHCQLKcK4kHnkVKoVYSXD6SvEGjNkpaXGQZy8Xk",
  "key39": "2PkncF7oAw2F9p5qu1tqpf6oFmJEAoP95ZdofTfprJj2iGJ4sU6mvR3zn3xj5VZbN5mkAK7HzEF6sPTF2WSBu9mv",
  "key40": "3F4VeJsrpXDVx1jDkXi4o2Qmo9qFd2vMmprc4Dv2yuSCy6b99EgRYVybtBEms4c9tpja58UeUtL45X7ahWxmphgt",
  "key41": "4QTVATVX3iZnYPVzdz6kUzyX9oF1mpvR51ZrzKY1BAAY5dqasZLUrrU6ebd5sqbskkv1ccpx6Lx9QSzq1i1pLSCH",
  "key42": "26Cd5gbo3xTqwgRVyVokBuGDAD1kdNdJGQPtBfxezxwRKzJtqWcJP4xUYFPyC5t3ZDddrsiEjTqscZkEJXbiPqe8",
  "key43": "4uzWzD9nyLUxGXJUtz4WjScD83F6awbgT6Ndh5GaGfvcsZSTZELwcZGCSSd1y9ck6gC91AXD3JHU9avM584hNmpG",
  "key44": "iXhvRgjR2UVG3r9pjHpsbTUXJi7SN3hrPrX5MFaZ3VNGuFWrgBPuixapSNbWzPQGLq9E7GQr6wjBy8zqjz6wnrp"
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
