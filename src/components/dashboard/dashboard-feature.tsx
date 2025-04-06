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
    "5PXyVeAK8BSCZbNWAnsLwN3tLAzp4SADdcqm7jnxRN4S19wCzNEhkiz6EzNSbYnFmPd48V7Hfnju3Lb7LBVmsdtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PQjHA4EJ6epRcgfjJGcmLqKSFDQFvuzD2t4xMiVJEnCV1u7LGj9eb5VPUk4MXQfQyA2D6SpD3scmzUcDSLMHLeg",
  "key1": "54inTwVCHjKDHeqSXeakAH6AxNzGi3GexxQ52gg41dRhVuaBFdZdxVHPzPgSRVkCeNuB4Av1LY9xhGKnchRNet8r",
  "key2": "gk6z6HucPqvHaMHT9z55XbagsBcLWkmVJyLsxRipLKhUk2mqZJUc6xLZdLExVmVfixhax3HyVcm81EX757mAC3a",
  "key3": "2WLogMNyAhNYFDjRe9CkSPXc9xwGhW7QGsoToZqTr68DRbBzd6zsSfYx6W9DbF9ezbgCZmjdTQ13WErTj73gJvte",
  "key4": "27pikvkKUK43easduKJGgSx3SMLniaXpDNxoHGF7B8CHsdjuk8SZaX7wLQqkCrQZ8CQSBYgM7HAEPpLAyc398ctA",
  "key5": "fSQxq3A1B9Wd3Z7FRNpfu5qsmTKgzp4FHrpSTXKh1wQxxr7DQ7TZN299YigfUgm9LYwghXMTsnZKXUtQoyzqHtv",
  "key6": "kwffW6Sf6x7q2Gr9cwfFuF2X6zA2oAZx9hEBky52HzwwabQKPRdSgV3a8PtC75FB2cbMSCiZp8Yu7UoGrQ4R77z",
  "key7": "451gDiuTJHTt38umxSDLoVZdHdZy8nNHHHaaWjD8rjojRPm6QaLwpK3DQZRsP5yJgnMzMufe1t18uABRc75CB3r4",
  "key8": "5ijaEh55bVxTTjybefpnvnYdk2uhDGnWPgWd3x8cUBFdHnpTbFgspjvw9nJ9m71kNDUCigfNVSWnFNkmpdgBagDf",
  "key9": "4hBmLfMUE4fhAkKu9Y5KYssT2sVPTX2CKFAiA2zKJYVZ7cHnZhkFLAK9WKYsgPB4MZ98HU1uqZDSrV4FksTy6VdL",
  "key10": "LPggVZD9phTB6nVBcGwe136Cwo7oGt322JCwZiZNhaizhj6FmHpUarYw5tE75UWBnBKUSYi3vv73ny7PnV7q2Cv",
  "key11": "5TuKSF1mVU8cQuvXNuws7Y1kKkLohbciqEKdJz1WrFXdx9eGrSbuKpamNYSDq1oXnfM1hw4ec3C4p6MEVXRE2gEW",
  "key12": "Zb9DqwANNACRtqdvoHMAin1EAHq15TyX5o6RFKkGpcfACAPznJqAMyaYzZoiomNAdceT8qKqAHZaNix69Du1kej",
  "key13": "yLwva5UdB5HZv9Up8uwHNjseguqy7weYGs8dENRii6RgMZv7ZkpwMKDaXxb9xLwzZGXAN2ii4U3YLaNCpMKKKD6",
  "key14": "4AKuyYXy9Zcy5WUJ3p2ahVgyd5f2hJV4Fx5VED3eU1dLLsZZH8E2M7r5V9cPqD17jGLd8rNyHqkYkAAHhcFVSq9b",
  "key15": "4V95jb4EHDaD54yMY4jQ45Ua5J37BpAzJViHqiVpCFCLsxgb5QpMxj7pZokAYt5Yk6nBCU3sufwvcASQB9ADcTKH",
  "key16": "58NdsFMUyqfKS47762cK4wVhcrCTKcCUURa1bj7L4MvLPPFtKMBNbTTTLWcmm85UU6EtapT9uqbbpCyLTX1ooebm",
  "key17": "3svH6prrEMRDGhJHNQYDxhUDd1EVuCEiSTFSJBZy1KrcNJHgfRuvcimoPr7SQgnqM8Dt9teL8WY2qQXKo1QSiRVS",
  "key18": "4BLRZBHk64Wa7jxpQgKsx8Uc9oYrZ7y11eswofb5Mrqp6m9RaNuj28srX3UoUSGQnzoL23T5RnWTundiftVu2woD",
  "key19": "GFbyjupiGb7vhwsbRik2EqNvsMaGHiTiTxrb5YgA2Lxni7RbUBwoLmWh8pwohSFjEeaQvP5MEiZmomuF4SGczyg",
  "key20": "5t8KQabLTxPRKKa4C5pz8FBKJfKnijtyb3oYPZ5dajDAmgCbZy1igbmqtcQ4eoQmUFCU2C3Nqu5Skx5jpaferpWW",
  "key21": "31w8A4h4gVjRcdmXTMmYK1UhKRvjuuMdfkC1KgCukVVsY14nkqd9yA3EjTXSB6hV3Nv7HKqzwsEwraig63e7kZC1",
  "key22": "5iCyJ5uQGLRQ6NkDAweJ1x1QLP8yrjG57ue22GLA5qtVeapgxtM7dfi2gWrFNwKZsgDz2yrhUi3NHUVGbfWUGeYZ",
  "key23": "5jqHPYLq1DUZtW2NA8dESpN5qoMi7SmAYf8etwNoAvixvnQyPu5trCLzpzEZ7nx3iwTF9C62bxtCrpoPScxrHFNN",
  "key24": "AycpRbZJ84Ndge3rdxBysHsiGVcKYgeucXFkqno2wzMuzeWLvGyqEP4JyTTEDZaNNAdSJzkoejXrydEotMb6Mki",
  "key25": "2gxj2gHWRGwMatM9wo3qsvpSvZqvhmavJYRkrUDosvf4YVcPTH3d9a5G6rai6WoggC8oMsWiP5r4mNwvjBBmrKdw",
  "key26": "54uRkrcZajVM8E7Gj7RGcN1HqTFF8ThChWrmSUE1VsiX7HoMMDoMxzSNBVN8rnpMD6pg8ujpTe3BWXSETUNg7Gxt",
  "key27": "ecsX3NEdTZjLd14bFFWcewUFeVgD9vM8nSBnTnzRycW8m94AYKPUJEjoFhDXZwvJ3uEnGV522EtBUcS4iP6wZMA"
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
