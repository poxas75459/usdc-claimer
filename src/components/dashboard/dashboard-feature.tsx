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
    "iqmdZdiCmsRYLof86q3dEHD4TBsagnEnfgZWM1vx6dVbTjFVfZLoD3ThmQnKTy5KLke8JkDTukfgBamALcu3BNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Q5LsZktyi9TRHZALp6f7USWCumK9k99jdCskKbLjCCMXPR7KBo4D2ctVq8rwoLtLcUxqPR9zshThmEr78uwE85",
  "key1": "nVAF7H2Mn44JCLyiwEMZZjuZnyTVrJ42MQenUSK3wkMg8y5Kc4HBt49X9gmukdUomcqPRbLXu5T1cev6N28x2Z7",
  "key2": "RTkLwJZC5ypTiyr37xLxVCqu2qDqufi4ehwujw4chBChyFBvXq4w7TsHMK4q7JpE73gwSQaBm4siaikmfLYhryz",
  "key3": "LUamKK4PRr3mDoru7xp1EAKHizUFThsTd9tpsskzxTxFjrf3cckkXURGE4NyGboHnvi8QQqX6LRUFXHw1uPKf5C",
  "key4": "614J6EyA7rgsH54undWbEjgKRBsWm8tNhqiDZKwvL5SH4sCxcuzFfWMdnpCe9wE7yJFKMHQW6B9dPybGJnJP2Rqx",
  "key5": "3zfhsynKg3MeTTVTakkyuyjaUnfGYtF8YFEHxettrA6EMFVCooZpZJHZUBypeSvctP2VoXowTKi8QzevZc1hyitz",
  "key6": "2rE9zUZ8cwfap3nAkN1QfnQc4zLqy38KEfYawbBKyHPmUwJppVNc44DBCCArr4QMxVkQkCk7SG5b29Lxzt1oJ8JA",
  "key7": "4gj6RXbfKfrpKP87QLcV13G9r72qc8DjTf9xL85KT1rzHeqRKMeE18GCZFJPTHAR9Mzv2mgRv1LbE3cLhUssdHjP",
  "key8": "Wj56AvFDnWy7FJUe3Ub5tcTWivgawB795z5Mo5hT5PnAEVRoGCqh8aAJTzes1QVTV9zptufUsszWGKL8g9yF3zk",
  "key9": "2T4sX6F1eHsMVjXPerVvYkUZoqwRZYWDUkNyFiK1AjpcEsYPrHybaZ6mrKw3F84ubUyNtk9nXBeHML841hhXzTat",
  "key10": "LtVtFNYb1zq8RrHMUse3aSXF74BzxqXqrhsDmRPF4xenknoiCxNhQp1EaaG7y895guYw4kD4skmokBP87k8iXfH",
  "key11": "2TRyHsRriYJ7i1q2ESHQjVNLBg1E7vUSK3UntXuvzfNkXe6iRnRym6FzDEVD7WVG5ue92QkUoLU7ehzc5yRePkrQ",
  "key12": "3aZ5fqHUJFs6ZdncWESMQvMh5mhvXvpoBeyCZD767KYqHshktHbni9uZBCwtLdv1JzUiRbhHoepRgk6KTWskhLuB",
  "key13": "29XuiJ9HJtVTdwdbvp55FWpTW85R1YBkWX7Dou1d95f1ZT5tNqXoNTdxjE9MNqNMc55iV4aH3asEFGhC5jD7WAWv",
  "key14": "4m7agkzDfXbdXcBjj491aeCg2WVbzckbNHXvWWiMvP4tzwCrqxy4jM13ws8ND1Y65jqqW1yhkUmXhoepgoCRDA4e",
  "key15": "wPE7jUbdNwnB9HXTw3N8G6sdMMYbQBKJPwk7CM7gjVsLfSoQKvRWUxZBXxSfbg5Gjwb36LzwH1yYWSdYrPbizwi",
  "key16": "3zi3eQBoz7kKP2e36LHraP1PgSNDiyjm1JkPVEuMxQSAoqehTcnyVabDbi4CQ9Qh9ashbZcEytZnnUf71oVavvkj",
  "key17": "2zPz54NrARBQfbmptfJE1tGrN68bRwST5FnmDZaUnZrXjVpPe3uGD5qzfzTA3Jpbs1Lv3Xr7JDjpa2LaTn5JKwfc",
  "key18": "3mMvkDL43FQ39D3Ukdh1FiByTFrdiHT1gBDwtkwnDg9DSHVLd2YTAqRCebWbE3nZDExNdaPKncovqYEvRRw9zCaS",
  "key19": "4XsBPxxSq1hkMcpqCu7GW7XzaSBgL3sx6a62LPqfwwWMYChxmbUqJgXa7mUzosHzEibddpJUwHTPgPWfdy2UzRqm",
  "key20": "5J4uGbTEVtMry9x7HL9crEPo5oUtcygFLYD5gQcBfn3qpG7SUGY8fxmWNmdjRUTFaRnLseTHrwcZPJba3nsAa4R1",
  "key21": "3YXDTb1Pp9phDMrVVeoKF3BU7A2FLm57r8VHKrpGGEf4eTwtm5j6pZjUVp7FD4Kup6QotVCR4zFTPKMmcGP1BNrD",
  "key22": "5LyCXSdg5WExA7a7DuopqivTCQBma4U3dabyPE4xtGEzzJzwXsdp1wEGWgKD4G4Tk5uJmo4jZkFZGQQv7AKoFRQ3",
  "key23": "k88LKpZL4yPwgBtvLWwrnu47fjFZ9QtDMYTdWji1F8Nf7ZPXCTvc6AMApp6jEkR8iS2ZEtaXgHGH8bEyhPNj9zk",
  "key24": "3qc4Qvanz9GF95mCf1h1siBYy7zRnkH8HosprvnbDDBthms8TfTwwEi79NLuLKg6hAhVQQfcaBB6YaDBwrUYa9A",
  "key25": "49QgERQmxUuJ6V3uRHHr5UzK8U8H3r7kHb3ebtfs7TXiDB5JwuPVADYu7Jr1e3BVtxx23dqv5sC95wN1QnXVrUf2",
  "key26": "5rjgi4A51gxGU6oFtBmT8N9JkL3Rh3x1eoNBQLPaF99AL245cPZeuMKdkrsmkWFMEhMzuMDBwztHeCFQCuQ2fPGi",
  "key27": "45dZdyH2S7maJHy6Ei5EB7Q4oz2VCU4tibyz7CTn2NzRfspfa4J6bqd62rUq43dDMWAm3kTpYYW7CzHbsmjPRHGf",
  "key28": "23WVA5eCEFRA3khKsAjGF8udibsDpSHwEG3yNXbu8iZtYC3xjX3GGaDdxmVDhR5CJtEFiKc7fdP6oRy7BhUSNiJr",
  "key29": "45RxSPEA51dNtYn4mDrhNEtTGuUMnZJ1dPHdZKAoMfPh1zYYrDw6EjMtRVr2SGQYgaVu8ujKPuGiLb2qXTvqSehm",
  "key30": "4jNvMfyTxvesZV1z8RWX5xtL13J9CuBVDQe66AfZMAqNhGtMdd9z3Pn5BcVY5q1c5Tt5dCnGZf3srsoiRjqSuUAR",
  "key31": "4Z3oXeoie2frGMvCbLdT1sFDBTwvKAnAbxE7wJh192FhMvQgqeEMcPWrwimS6Ya1btNyxJjtJPrJwXsugT2HhXMC"
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
