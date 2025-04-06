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
    "4eqeJ57zdVxXCeX3uJmzZR9tAihmpR7nTy598Kui6bMafjbC2QEaJjWsWWBVhVgKG6wNTXumVmaFVLpeyXCt1qY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mK4cPS6635TrGgt9XA6TfHv563ZaswQSUkwHb6CKwB5KvkVpytDHkQihwM1Tw6DQYNpjynWtqpn4rYRCZ3GvB3H",
  "key1": "BBfwotfN3s9kTabTNtvM1bAc8VkcBGVfFavLwPgLF5zXfaJ4qv5VgWcEbRU45tnNraoZ4dZFkco5ib1qugoPYZB",
  "key2": "4Ewv7LmZFcmnfiqR8msiXrBnZ3PYqhFANsqobmJyMDPrdBtvy62gLENanRYb3797xmpfRJkG1JCnbCPXG76yzAUK",
  "key3": "BM2vf7TYsNABEqERLL883ZpMHAanVVyRBGcTp7ntKX5AbUgNiJSSAzMjyhxc79yWSGsaPwri5eF8j9ep3ioCKT2",
  "key4": "arreQB3a1e278PWZt1VyqyrMAEwJ45p5PCEJTJoXSzjuxjWnzPCGUiKp93wUamtCBgVFVyHBvm7pmvSC5Qe614w",
  "key5": "tWd9be3VDBpsMtS6BBX6pde3KZc8ERAYf7qQAProX98sMETeLcF4wu7xPPhmyi1fkKng3DK7wToiHUYB7sh2xrn",
  "key6": "34Ezo6nCggeCnbnisPAgfUafWgJCYYJXtU84LxrrQstk7Z4afuMUkmHVdAbfFT3D6EnqPu5E9fCA6ZzkfVQHsffs",
  "key7": "7VNfdqA4eNMqKrUpbB9C517388eVWEST6RyFuobFYLTyZQ9HkV3R9JGWWpAZ3Hwg325DdvZubDk5wydsCbicdMP",
  "key8": "2AEib4ZKnLrX78YsQnnUPaEfcBB9J1ibs9SYKW6TKW3soLb87B8BKE3fDBL81wh4LXrSQUsGNLDasr8Vd7Kt77RH",
  "key9": "3Ry4HKF1nunNn4TDDEu5trukmn2Nyjz1UzVmnpTq4HX6VNe8wPhCTGxhYN5U34j4y8msMvZJLfT7qQMus67KNkSy",
  "key10": "4qpvDzKtLrhock83pnW123PdK5TnfxdXXpFLsMeqUDpztkZusXMoV3FBJoD64fybHiN6WYBAAFfG7ym9ctgZezn7",
  "key11": "5VnqqX9URsdcthGGoJPUsDZdUhTPtMVJ6DuvbEvkDxEfcs6h19eD9XagP3kaMghGYDqLy374doqW3WTAMXhDRBPS",
  "key12": "62AKNfejc2znkbbuoVPdEzW2Wqpb5grDJeZEUtaW8XQSr6Pv6QwHKpTaLH2EWhAJxAneB4mNbXKCSdVhT1qtVJr3",
  "key13": "5R8uhzYLU1ZCxKtAyYoNbPH83fVyqYGtbCTiPnpCZtgiqQkZPk5vuVyVxZCvyQ1a1Dg88Dyokqkxvkj6beAegDGs",
  "key14": "g8siHyHgAmXXLffeHge254UdJHGSwGn1vTuMFdRrChc5a8eSpuVB545dqjVxAGF65mEfFJXre4nFpErhNrYfBjP",
  "key15": "2fsBMBYDaeJr5AyzYXmLyYNbBdB9nWCJ5x5abDuTE6EozqW37im96uC28fcFteZSdwAQkCjoRSR9xhKsLwgudKtw",
  "key16": "4yvD7rRNvbFmpE5EZNX3AD5JvkPq917mD8yNGveUxwEJiLpHSgf9kvvtTGz7yWp9FdESHwqxD6ZSC4iEda5zghf8",
  "key17": "9Cd9qSrXS98tNYyNZ8e2u49sJF4tEi18okaj8UeN8rNkwmHeumAVY8wQc4j1JJBqmfi5ypaDi49pqGvBF7D1nVS",
  "key18": "NXMbuCFfZsVnqF2zs3t4k7uYJYUG7g6g1SCo95tgPYRubWff2jAQSHhfCN6WFNmNV8wzLZcvXf9VgznCUsSCGML",
  "key19": "5HqE4338rNwSZFoxpgFpXmvDHmcLEEpEZ2LKUxPdxXAA5otNxZfCsJKw2HnGS9u9hhihJGnSo15LMUUFWAkfVTsL",
  "key20": "3pjGa6CL6N28sDeHercW2sympu7V7LAKP9JtXqotsDMwxGxhpviWNuHenkvUBDHFP7Q17sJYAq43dyqMuCgRWdUp",
  "key21": "WsxCSW5X9pmt1xVSeg5zdznrgv1DRktT96FoWQfkWTfthKShZVDxiYSJNPig815bK9PQDp63EAcy3bcbXCG9KX7",
  "key22": "wY7YBWK4KiVEBqAFT39qMvqR3cxerTnSfNZH8rr7uTAADRTQTnTA2g14srM7a2CUGmKcQ6CVsP2SNwPgztNMRrr",
  "key23": "39eDPJPqvZDKhXMVV3zx8HSLzD9GeRpPSToNiGSAG7kTsZwFLoUq71AVi8aXHQTSj7AZocHQZU5NRxuLGYyQy6as",
  "key24": "3wqiXZm666ya4GfqEnAM8gJgpygY86CGyWTjjKQYdrmMFLRaofUvwc5r2isuGGNs8w8pfHW2S8cPDNCrB27jPBQb",
  "key25": "2CmWGEVyYYuRJQgxtQTXXvGdzNHtK1jHGrrG6CUqNij2w81XxSYM1DF7VQ8y8P7Re7nbWQv999Lwjdu58Qn3taxU",
  "key26": "4NBsyqXBvCxgpxVcLMYTrHqtGbt5Wy4JWrKtTQzeyJ8q6f4q1ekp78sie4DwjEZrEvDz5wud4q1t1DXXBnw2K9nF",
  "key27": "5kqDMeiL2X6VZKsmk8LF45QUETe9s1yzLz2gDgD1UM732Sy61Qt1Wf5NZfidtCdpoihKWVwDMf5VXHTmLEhHZW2z",
  "key28": "53RwA8fj6p6qCLP5Y4fJRKVgF5LWDMGQQiJqWT4DDbpLwwJ77xvQ7PRoMYNrHRd7cXrJ2pWyeifL13kELtkhTgZk",
  "key29": "5r7c58saGMGWZoremPrFe87bwfEJy8n45Vdzh6mKMPoy2gmLnGunVSX4hyP6ZQEowwFRrm18ArcXbuXDEjmdHsiB",
  "key30": "5KVJAtXej4SPQUN1dGdb48w1hhss5nqAnQ2vS3Bo42XTaBXBBi6FSHauTWeHC8NWtWKGCkxiLTxq71RSR9dHQ9KK",
  "key31": "2po5DEBvh1ongLfLxC9C6vvZSbeQ8S3G4cAGZNtPQ6wHNE7xcFoQg19wmNaWao86aeWybuu29fh6Lbxx75mkCdtQ",
  "key32": "2mWLyzDk5hfezRQvTuubtkoZGtTkUgGEBDbYBFc3m1RRcjqhsDHXHNws2n32MXfuSJ3dXkEUKwzsuczEcMJBC279",
  "key33": "4AHyMngCvvLaKXLQED3KP6Vxa3yANzgNzy6oB6GASHyoHyERbiLVns1MRqVrzbuo2AFjYqxxXSdThm4wz6EavbjV",
  "key34": "4nMwH59KrfsGVnA17b7HsVYZb6EYkqkcgNnPuVLGHuoDsCn42YYqnBJL1CPX2AYajbDJsTmPDHScJTTp6YBNdUKT",
  "key35": "2s5R6xu1oY2QWUpQ8kaoH1NFwDx74siNCFGNxc4s38JNQQiHwDtcW9zbkpVuunojcXHttm49nwr3hbCnEGFmeeFn",
  "key36": "2TetkSdDk3HcMuqVfWosGBrHy63nPrmnrXnHv4cC15pcvz4Yn8Em2YsSLeZuHUgUq4nWUTGo4gERXZgv7szsPB36",
  "key37": "4mHK8NMdsvdqD6dBC8SPk3YWdYgVw5cC1biXmtcpXQGUMahotUwss5V4euciCggG7a8dtqw1dygWY1gGFshGNDxe",
  "key38": "RtEwYmumojKLJaVMnRZuzpiaevePStFHMc69WKGUuDgm5nwQs6GQRuvRuLAiDFhQs9edoXB1hr1Fq4Uq5Ga3dPv",
  "key39": "4TkAQ6NrxszrZKYTkfyQt5GLpD3tZ8zd1ZGd6ToDYnHYBPDjNRhgET1gceYZK9XUGAg1LHZUiYG2XwCoxVwP4gjc",
  "key40": "5Qwfpy7kmHPmHwvbYRjn5JBgBH6ioqXYfV3ZajUN17zxm79igYhcQursQ85hRZXCYUVvaMyibH2vgtPsn46qiQiU"
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
