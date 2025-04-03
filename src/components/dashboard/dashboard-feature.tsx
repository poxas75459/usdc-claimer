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
    "31CZ5uvrqLvtV8cvNRnpKWMMMzejP97vac8sBAyuU1FEXT4nWHpjLMhLmgP1AQzZTTWoym6WCsoy1yUtzmsxuYKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pGxz9VZVqfCSsB7q26En2Q6vuJcvrbJxHZARwvuo6PNJwLCYQzQyaP6V6e1u1UQPgqFQydzvLP2N6JnfM3wePK",
  "key1": "5moYy512gKZWnXzUCvCCvAt7A7TEXEkUd9j9qcWsFBWfp9r5ratWFmV9oFfBwqswHxnL7b6v5riiCGCViRJTNDjx",
  "key2": "4mTGEvqDiDoKahRo42GEe6C6aEg9TnNa1dsxNHgi44rDw5rSWipdDaDM1x7J66teBzzarnxMogZyfibPhPWExTvz",
  "key3": "25AbxaXyiP7rpbv2krCX9xN6tC9wom7WEatssJr7QvkMj6PmtHhpS5PLSshRPexM1A1xiGrXgLwfnT4i4bGMC7c2",
  "key4": "3EqTYwKc2yjCyGQVamMvKLrVopNiU3HSnQeViriuZyKp1uWtVxkf2UbFAMWB1Lso4TaQAtKRfAHEgCfER8KUw2Ar",
  "key5": "3mADEheAoRVVsS6WrcQ5CFszadx9CuSyBmSgrMEELh8Z4nQGr9PRrj1ojpKiSpRn8qUpgTuedmtvpjnbYNcMydjw",
  "key6": "41FmPf1LCtjZu42gSf2hDburMwWRWvVaM4kfmLGMokJzGcrSDNcV11s1nMAvd8FUrpC7kWoMZ52rwgMroDiHHebj",
  "key7": "2CqJcRPEfKaomHFio5YNXdb3zjvo2hQbByDKTq2s9ust6L62pR4Zg9SsK2G66n4PyiT5KfAiV4exVrB9tFgEKY3X",
  "key8": "4mjMqQtyoWRjjkytZYRu3pLhcthFAJVWPufELg51Nf91tm2iDgeyFsMPGmLphQ9Da6ATc9TCHAiNwyhYyRMCQuiM",
  "key9": "4BwFqLskSoGR9ajxQeUo6cariJx4Joo4RW8Pu3zW4ABR9DQqtgdTCRYdMLMNjfQ6FtcMsHE3Y5jSAgPWXMGFwVWs",
  "key10": "4HzpnvSvLgs8AuRa4w44hBPBEUnkQcEvvsMuTeAxwV3epo76yXaARTBuywiJbTzkE7DbpNjEsUGEwaWTAKjhFZRF",
  "key11": "dGcVqHcCW9SQkncEierwpufCtoqU5wyk23WapB6JpZXyrsP4zAKppaWU8yuQrf9ZYRf3QAyvNf8GpzZ9vHyCW3n",
  "key12": "CaudoTmoN9F4UwYK4D1vWNYEXiFZhZKwWmBY1Dy2YViDRYR1YVn1Xd5ifxqrWS4GNCaxSo4fXJsG3CAiF7AM7tJ",
  "key13": "3g5kpRJyWfEAWcc192Yrrrk7rksGui8wmKvicbv4Sg6eMHdKQgLjS1sbNJq5gvPUkDx3Qq2WeVsAJat1p4hqNV2B",
  "key14": "2VT8U8m445kdyAgyk8shoKvTdQVLLhZx149Lo2YZWCLKhaNgfEkziJQyZW6pAvh79x5AatL1pci3x8Nrux3zNyyS",
  "key15": "JfUK1L1PgLqBDeFPhRz7AnC4c6jVvCCMV7ii1wU1DAGivRASxHFucHKDoiv4Cit5zy1UVGnVT4jf1SaCeGnCwf3",
  "key16": "4VJ4cbeSfA2GrHQEZGXPEphxx1oxu4PGX3UpCcwEHCixF1iHXe5xAceAfoREGKcJ4py5vTygiBV2WkNXaC9VzRpU",
  "key17": "5TxFAD2o3GKFQFdj1vRezeJqbftCbNYWdfThwVhLgNpZtcYn3Ttg3ZiXzxCDZ6APKB3NA8Q6XnKseNbz38Hna5pf",
  "key18": "4KPefWQUzRXPPfP2WBmm7WNZpvQwoukXWLvpXwcDzf7BmPoNV3to7pqbcm9c4neK7eawd9yJjVVPx5tzeKBGm9KN",
  "key19": "8LdgE9xeSFQphy9pS8jSS5BEZXML2PFRrPLFBtdA2TxPwkEb7BzZzERpQB34yjv15ZVgkxoEZciJBe9vX1DxjnC",
  "key20": "qaMXTJiQ9uGTgEyYHvRuzJ5SppDFeJgRKYMLMNYWSN1ftKvZAeymxaVv3mn7Ta9DwwN32dzRe6hjcFJxMXgE5yU",
  "key21": "QaGxJgw844HTHszF3Q1VuQDyxXy2D6fh2zjvxArx1iRiKfj1BzkQz2iZcxaZpezhHhbz4t22jY1s7vQGryRqEZi",
  "key22": "4we1v29DTVKPZSFmimNxEi2mBw1fxrSHWThxSmdP92RAT5KJsWBmjRudP1mGRdgMLCoNhRxtHzjHdY1knXiZcJXr",
  "key23": "5jDi5sAHZmSNk2YG9pUBGr6ohxrZBRnGhvNdek928J71zXT1WFe8eXRW4yDrG1ZpPgtu6LGP2s99sTxdy3Eh5Yni",
  "key24": "2vS2MwfFzzvE123EMcfn3bkfqqKYJBrAVKuiawJ44SuHpuR7tmnKDKevVhbVdwzhmjzvFgr949p6Bot9K4mDX8PH",
  "key25": "4f4cacvtPvN6AGfU8YBqWRud7ESLoBimC695VgoJ9hnLf9De5WCjFLJqPQXfgqVkDZCGVCMPcWkbpgTWxVvkhn9k",
  "key26": "yy4RbNoHeKEaNqk56ULmwYo3p6BJ28KuSbNgJ6ogZKLTCvkU8TuQmJnxsQCbXtqwFyWpxxkAYEiWGgynto9k2X2",
  "key27": "5q3gYfBSbksLNmvPyfiFu6sNizQcsdBgLv4ij2RSZjMrF2zMau5EuAkTSuUrFVpXtEkj6iCDGDaKyR7eWGk5d9Qh",
  "key28": "4bNrXHnFecy9qEKCrAPSrt5J9qv1vzWVPDvy1vAcTVRARMxJkBPzgkfKEBQaCX5ykBkoa8o1mAdDvKTchrKLcNsg",
  "key29": "3gjADERNHaECRV8F4ibetUqgaG5Gc4Dppt4QsbaATeBYEs2pyvesaDKhuj8DtswJA3t8BsaLQ7JoSBqyboKeJQ2b",
  "key30": "5QDLJaZRwi4Zz1hoqnanKUpSaie3EdpC3oDiajycQp1oPLDLcW333PAjotF6fVBytzEacabwN6Jt5Y6yHvuYfvT",
  "key31": "2cqRtwfC9SXg5Y8WZNk6p9QmWqv99m5axq4HzWyAB8dP6TAXZiswzJLwKuJ2WHFk1z3YnSRSap8cA7pLYFCfJXaA",
  "key32": "33b7DijkrfUNRnLT7PdpQohXrjHVMvKAR3cfbS7Ka5Kcq1VD4PsfXFtdPHgLJugJujuTupFvM8uMayPVSGDEKKLn",
  "key33": "4XBGSiE4CFZ2hwKoqyBPhUjciEUrSYPrfRHAg354ZyYX4eXcipyov8cuU2igx5NhcnUn3fgR6BZLzdqhcteoVC72",
  "key34": "2jmkswvcj3syKkzVg93f9Sa9YZt9TbTkNP3MBa7bZQdxHsFoBynMUcZvFEMy4yCrQ9rcq8T6ycTNuMvyKLeQ1xDb",
  "key35": "3zbpJSjSonKuxEZdYnsmz6G1NfWCLzUJLdpdEDS68H54JtoPKk9wDbs8F4hGv2wTM9s3RfEakTzc16ZJR3CRxuxX",
  "key36": "4Xqi7ajVjMD7QnhopZCv4YAbphiepvHAixSNoHQECPxuzY41MhscH59BtewqcTfXtGMxpbxmacxJb7g8iXdYG4gf",
  "key37": "5Y1L1sC4ZvuHpdLVCeHADXMe9e59VYRmpVPGebFSbCzo74cQxrmPxf57gzFmjkeEPoSH25TnQUSf9NAKtf9qKVaE",
  "key38": "2VD78wqusVqaN4RDNJWesw1dAer1rxjGPMQ1C9vBNExMocUBFRfS9b2jDdH9vzZPyRGCvryN7hcgAaWBifw6Y2UE",
  "key39": "2qbn8aezwvF4cXo6u79CvaabM7G6JhYJGmTpKNKcniZdVaE5ciiGRY8fvdsjrYwgD3aEZJWwiPyXk9QDeEpnVTmy",
  "key40": "w6t4NjiRGWfKdPPmt9FvRxDW9Jy2DavJtouEzsPF5ftENrFk13z2i2WatB8zj1MTs4pot2bExfthfH82YvoKVUw",
  "key41": "2EPtpUeML7WFfZ7D4gkxG9gXtkNDQPKGH9DHPiMhSGQkcmxZ9KWZBANhBocfkkDCtwEp56hzfiYWWpSAajVjiBJQ",
  "key42": "4KDaGmo1ajQNLwH5b6tSR31rRei9A3jBoPhjqAjGD9Jv2ZwyJKQm4UFsnGBdfUHipFYsfzKkc4ytw4mUBzige3Dn",
  "key43": "4zBCqFGtTeatZhSENbB7cXdvr8iSTYwt6cf3UZSpSxwRjEmGWqHTVzLDdv59Lo6KtYyLBzhu8KbXGHcihd8WZTeA",
  "key44": "nscdTenXg3nyixTK1hXPgQ3iXsEUxCBdvjP8Kd1UWbXkGn3ffpbDH6W65dC2AXAPewmobWRU3DdUfhscxhpkvxb",
  "key45": "5hmcFeeCkSQynRwvw5najxe8weMqoLhJG2A53vxAno4rNmm1kdo9U25omPZy7sHp88G2nBT6gVUovCKqmjPuzZB",
  "key46": "5V5iZ2xQYTbH9YYKgewJVGSp1TsTqYVMywFTzQ5ca2urFSuePTVWPKWuswC4TJx8K5KzQPeD4bKcjcn6woVp2keV"
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
