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
    "3GwB5sLAPS2sDp5GraGQ3j5Ktj19tzauFUXKTxzBECifvkR76BXN165XoDjgeLvhE3xB28FJ9hv7fx5uLtQHkruV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RwbLjfgZofrPFcP2BPh7VS7UxWk3dZw2v14RqwTPAMLB84vVN2kYwktHCsPzQ87FeqgMwKUe3yK1AFivEzAbuAN",
  "key1": "4EsCXyStEuCGqRRZs2Wjsix5PzytTp55U1K1kgFCTBeZZwgFEwT4gzxEFyccA8k5KNntKbuyCKrxEYuPgV1QENsF",
  "key2": "2yxhp9u1FT3oicSEb3YvdsbDdTfAvanSC2MYhzgYR4q7rZuGNZdp2LUkwhjNYNSMCJKH8Ecze2pUmUovrBDCpZ6x",
  "key3": "2YCeeksrfaCpGrsKV4aswEjNGsssSKi68LqRZ5PDwY6Y2X2W6Gs4s6nWDDcLHkAmNDjzJeGDd6SNaisbkqmQf2qs",
  "key4": "4xn5nWSG7hBLFsL6qb64Eih39HiYEgZRDyHeZu2cp42JEVAkNkCmPXHuWnuEfdXkJtbwpWXmTffrGPLJSCba7bCw",
  "key5": "V7fMUhenQAbxp2r85wzYDmKa5ksTxZj8hMBRM3dtQuiiecXS1SvX9FQiCeKLurkqeyycbubUFMG6Nu8wd7XiDgu",
  "key6": "3rcNUxuTw4PMjVGE74Ufc46fe6MApGobh2EpZ2SPdJSTyGgQgt4ZgWUAyALE44XXtSJMszJSTm5uJETbNr5TFq1f",
  "key7": "38fjJxFbJDUW9hSzKQ2G7b29YcyzS5EP46wBW1qnAR5Ekbsu9TJKGWXYwsytXxpf5Yoaab4Db8TEaGidnAVT6k4K",
  "key8": "WWJ6AyNEtwhtyAkeiNacHkxxaZtBiG3Y3fzvbVJJJbZo6W6G7A75Sr3iCCqQCtYVHCHdtqXmGZ8jKratRcS9ws7",
  "key9": "5M3dSyyTspMv2w4b3zU68H5opyREVp579D1uteY6t4YtDHtpZ69r8ixFfGZX1fsenAQLg7wnLLw8H6BXTjMrN8kT",
  "key10": "5VKjfmo2z3bDLxiWvYVf1YwHatHHPqLCNGUAMDahavuXnuA7yZrHKfW8EgrjBVXvdjkTw2rwsmUTGz5PVEdEtQvp",
  "key11": "3GF9tA3HgKFqSC7Y4nDfawjaxE3MQHvda1f2T4bWJGwFDQ7xB44LCykCGnfqbXQEcAP8cLBhf5YESVar1s1dc3Qd",
  "key12": "4iHGDV4X8MMFWWFo4YMca9haEtNww58LErnVgy6jtbiD8fyvHYdgxizKpxroZb8PBDDCsmZKwpsg4aJruiEGqixh",
  "key13": "2qpudfp3P3mL11PUaBNzcNsqGvqZ68TNMe6fgUjSvUC57uBL5x5VTEpqXKmMWAmBbeLDbj6ngRjbSqEGQm2ZBFnC",
  "key14": "5n4waYyXN7pGh2quevECpk2uVZbAas8s5a1kxk1EkhjTYVFCovFgzxYTbLeYkDeM9XN3NVMMhYsDzSEsDkyWJx98",
  "key15": "45qhKpvwsy7yUMT26Jtwgj11y9KsVirNWWrwbBaZUY555PWxFBUNGbuB7aw8MrkEC9pPa9N8xyPb39ecAXR6CGm7",
  "key16": "4VQYMFW37ggRH8Swpu6ZVK85XkJVZKpBwuwP9amoo2vE8821rMcGB6ePx1poTrZYWdi6daDueS7BkCKfrm9gLc58",
  "key17": "3Nozn9D38x2gwExCBXmyBQF4JSeCY4PBEraTi8WQwfW95XeA3vBQbNzgFMqSyfym6WmTVKvVK4p27yoawAAMFw9S",
  "key18": "43sB7TLR7oy8rAMRNqk3DokizfFeu3f7PNKGvhN7vHZo9EtRT1FVsDeeEjNr9CaAREZJUf81ivZeNaztV5VdYUPt",
  "key19": "2PzKNW3AF5DpLT7tjsofYNguVh5H3dX3GhitgcimiazgpjY6bVwgBmPTx6fA23s97bePPMUf4JkxbZWAaUW13zba",
  "key20": "5EFbGCTScyRTHL5aCD6PDZWQL2A4xy8RJPrtnzyhXc9GMXQ29o96StnQdu12S1hkZob28ReuXr5TKsc3LY8o7EXA",
  "key21": "4gsMqJV3PDhZkVPbUqLAN7YkzRseUjj65E8n7iPyyog9Rs3HFEvBtpRayoh3mBWkMgsrAdxD6DXnYyXayFQ2y1dx",
  "key22": "48bAQ2yH9EoVrDT5KUbMCumnRqBMFTrC3rxwVLbkVuUCvW4iKTMj3mWFQE1PGBX9N6bxsTaptXB3VeLDXepFpaEz",
  "key23": "N7xEptAAPQLC1FaUHHasbgoGqpGH4UFwSXvzdJ9wajKzkXRfZzUtFVQgHwr142wVJT1otXwMEgAsR3HvYnaDfVD",
  "key24": "5jThXaTvPdT6SERZ98FCCPAjStu3b1CbyBmr45dNvaUfqjAX4EnuwRpxtZ7eLhaeeUZopqVhDC6AfAN2U19gVo23",
  "key25": "2MioXGcVXA2w8WhtpLw5TP5yEMmQpZ4hy9n7KwUjopzEsJUnNqwz823Z45rRjA3fGz5wtiQTUM7HRXNsqm2VkRVT",
  "key26": "2DuNL3LUuZiGRvSWeBaRVSBSqVfoo5dnADnt6LsX7mHWWTrWfTtWANzWCQ6zzDpTJsT1jhcYwfYCptaJk5fQVUNG",
  "key27": "5QMzxW5Da5HQRYkxzQ4Fn9SA4eLimQx4cZkkwYBenpStYrTfmAkqAdTTRa2Ub8hbMU3kTph17WbCYqvpBWpVyGCq",
  "key28": "3kPYQPG3LBHdoqm7cMUFTbXFmaHpHWZSiUGZaXba7nhtjoZtmHuCM8CjLugVsSb6aTpNe4aRLoLYx7tPviRYX2VX",
  "key29": "5WYRKFDbHkotRscn2m1ar1xo7htpfz5VJP33D6rkMNdR7bdj2nNg2WZp9u5p1z26YAnwMNiBVudJHth2QprADgTQ",
  "key30": "2xsWZuGkWv9Yc8nqvdEUbzi9niqeVwChZqAie9cdr9pGFrxJCQMHPedvqUKZ8GBHdY71FNfz54EKdmL4cZvMkNKE",
  "key31": "L9xv7h8y3ob6dmeNe7K8Hwo3BD7qJg7nK4uqf2CnMMZczeiYWyrhVFptZyjtodG3aofx2Pe5dFTDtvkJA22o6qj",
  "key32": "51tbzmMg7StaxqNefXVrq2ZY5Qj9K8BX66XokEf4VnpfoZ2mGmXGm7rqcUAdYnB8UCef2LPbKUgv9h6QnoXAC1tn",
  "key33": "4meW4ieGnSmJZDtaHp6ZFcnoeVvLmZmCeEiskG1J6vPJwgcGSomzSdMkoBqLdNqpBpeRBNSeJn2ScEj3XRWnDrxk",
  "key34": "4J9LcRB3agvvTzTbqtMZsZQYk8EjmkZJEToGJESzRzrZjFJceypSVPUtnHAiDBTzu5iUZeBEBxSzQ1isej7NfnbH",
  "key35": "3sQh3NCG5KcnxaCLfJSgM2bKqiSFEPNWtThVXNtdiMgNTLxuDy6zMPgPzNM9cJDSVeff8WdpEyjYftiWTD9i3su1",
  "key36": "5uNFZkk3cZDqAMWndqPVgpG7BT6aYajd2sgwh251iWepbJRdiKy8iFpQ3pTALM9fzFASP2Bm9XwdKG2xzrUa5AYx",
  "key37": "2ErtSPdNQ5EN3TdRcAX21Xa4nEN2w2Uq2hvru2ESfJj8fpyiqo6s5ZLD1CVxkyJHs9N9ngdmH5jsS4vHkn7YGbhE",
  "key38": "rwnKGjiUoALF9pbzx5gzoEGbfWiqateZ5P4ASU1PQoeDBYLUDnYW2iS2j1Am1jSjohsDTuG1V6zFYSpTyXnqT6z",
  "key39": "64hwdtA21BWzmdhpvN6TFYzquWQBhTB1DPxs3ckUyvdVfy6ToYhH4h8KxcpYNXzzLtRyxsA4JP5NqJNZCDpQjFqX",
  "key40": "46MNS7sRgkYUKKMcc1pPveujgou9t8v7bGXp9EzkGJTzxNoL6ZNFLmD8HumBAjrdHDGun8oe8uExj2jcZweKg6Uk"
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
