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
    "CKoVokuvouvmUUpsTCDvBm6F56jLr6PiQTJmgYBPayHFnFuDgyXiwW8HFAMQBSNAWAsXUNXLq4aAs3jEJAPxRCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zyaxrmdjX3Uj3e58d5sYSiDhYFm4L4P9mM7JkevpFgj6ZTba6WgLUKnrCLzen47ezoBMHiPb6KAjAkvndJdj9e",
  "key1": "4aWwk3Tk9sRxUWXNarvuXJrQ7vLTUxKdAvHDaUidwKgbogwSWhx8UALSSumMgM96LTamCUMFkoCbyB98EEQBU3KN",
  "key2": "4SPaM4hBWmDjhknj9FM37XQ8fiCH38VZtQKikecPrCp5cYziyxrS9uzzFMprsGaQ4HLbByHcgg3yPn53gGk2EtRe",
  "key3": "5cPqShyBDhsAHVcREEEyonBqQrmYcxfFkEJ7UYyczBf9nznS7hsS9ac4AmRYBDsTXZ6pjYSCvSGr76Rg2A6BnqST",
  "key4": "4bnqD8jGKECsUfUAuz4gQnHRHTRFFCLL9N2XRMqSmLZrHgKcpMadgb6kM2Bp46yHgiabV8Gs4M17fDxc4K6Ldkn9",
  "key5": "5QdbYwoRa4miwnzjGZRaahq2aUSPwGWY999Xxr3PaLQdZb3PEKpcw69J4Q61eRrdiTstfxeVoSb1onRcBKYCukuP",
  "key6": "SmTgsSnSSa935BqE2tTeYN4DzApofNQexvaPSW7fPWC5z3JhB5KN7yo9ZzihPga9XYJAuHHoLnFWtYqfxBfzXqx",
  "key7": "mo9DpXV1wQUwbUhgpAW4oqtRihrDEthZe2usNqzxkUzFLuLmix9uz22756S7LFQzZLffmDTAnEh1kiMMiPQjsED",
  "key8": "3x8uc3YiNkDkuwtoacyvGZe5LjmbDGAcR1KMSkhsMY7edKSpX1TSqZtJ4PVgmK1j75BdR89hGxEKE8F1Q7vXqHu5",
  "key9": "xu46CDAJezjfVZWKqkPsbNchGoagqbLWAwWVEna8QYKmahaXsgm3UMFxDqPJCDJ6cn9vJ9hGdZW2Zzn6txLXYpo",
  "key10": "4fXCxGRScrSQgCxvATbHkX6pPuNUft5M35xWseAFUM3F6yCDuCwD6tkPzn7fpMDRdcqjGYjohdJmprTgTEekkuBd",
  "key11": "52bNZxEo4uoEeC7m1GtyyhqLadz5Rww6vdeJa1cnJozCmUTAw5UhFchS4fa7TUiakiGFRmjcq8ncTbyoJEZD62fk",
  "key12": "2ATsraBBe4qhVRzo7DX2Q8cu2CsuUMbyGuom2NnVTEEyDBAhiMQP63HQ5RrNzMgZSq6tpZfRjPyZ76hPydDJefNj",
  "key13": "27HgUYamJLpqWYUAdC8cq1jZJ5ZAsfkeqQ2gwR7fVy2BEUkrrL7ZbcrpYEywz9cqcPwcq6e7crrLsjf6KecFw4x4",
  "key14": "5osJdDa7KU85rYq7tVW4nrNb6XKWFFb4dvsktF1nK4brDSFUQ7DS2Lw87nrGWfo5Jdmf2u2zFFq4J1zi7igkuUH3",
  "key15": "2KTdxjTqp19L2GXfGAAYpCbefyazz57b3GpVAqGFjvEGzf2kVC7y1DirveHdSjmyZSRQD7CcPw3AjKVGrNJfWMep",
  "key16": "2ccevXot82ZEDvA51kyeupVi9Th8vGhRN78bka4PfaBfnNYWtYGEFEE84VGeGV2D8mQ9ozmx1UjnCNM36hgB4q4m",
  "key17": "5EXQdwjzfqxbASF5eUkwUxFVPfMRaLt2DzJ2RB9XyjySiVfaesS4LSSHNo7Zs5841SsvUtAZ1g1H86L267ZvZ7hC",
  "key18": "55tcaNpWxCmTCcV1Pn49nTh9A5u5dDuECRq8oENgaGnoA7fD2MpQDJ3VyVSHzDHNwi5QQQjtct6pbfQRw5bTamF6",
  "key19": "Q2vwzBXjVfjUQw4QzHYYcGi96keJBxeJA36WR1oPzGYGQ2ktiT4xXRWxtE854CEnfqAZFnqtedubCZoWFLqQ2eg",
  "key20": "5vHDAPxncXtvTbDQWeYs3v4Bk1x3Y1ciK1p51JHnPzuYNnecSaiuSzTNWoizhL3RYjtQG9XM8c2p1qPcj4oAU3Nc",
  "key21": "chpNma1bGUtRrduuiyQBwR9XLFQaPZKoofgij6hDvrGUJSCWDQDo8Yj4nLDXGVmaAq92qKYypf9PJgUWrBwqPGv",
  "key22": "3fGK1VeqbwNT8pJ8UG8dsuhnqJzHpWx4QtZ7fkqUMAAJkHmNj3WD43bfCQ1e6A3Xn8T6vNtRaSDyHxUAnnvcVdek",
  "key23": "2Cc6BFoAnF6HSjcuWLUC56cMZ2K87RzKr4rHRwE2TspgbuNH2jJaRSDGjeXX4D55ZZVR5CaPb4wRi64R7n9LoQQH",
  "key24": "5w62W79edhS9q68zLi8QPi8J4sWHXwAQt1LmWhtukw9aRNFvvw23HbK8vrAxjo9Ybsxhw1i3SjPwReQuyXWS3SXo",
  "key25": "3MTNEgAd3vnJKhHrXZYjXg6K9iCkUUt1yRhWYDZvkW3mV4J6VGEK8Uijhv4bUNtoG99KeiYND7nUCYmu2VrA8TPe",
  "key26": "A4Hv158YxnovCUya7X7cSfB1y7HdGXCM2GxD8SP71TYJCSC2fgoM4M7HfAALyst5ZpjXEhPzggesNvAgAAvjsuY",
  "key27": "28ZQsLACf6QcHsTmYKvuCk5Hf9JDBe5VngqC3KvEAGtUe2pDLfawg76vSsDsSTcEyz5yeMhDDpSYjYzyAindBmUw",
  "key28": "8caV78DZJHnQGW72yP9WW3uNLJkxEdKat9LUVwPVeHaQaXq836PaUYaiz93vDrHLfNVhsnN3zqSNVDZ4ajtVE7d",
  "key29": "44nBo5NW2gcxpECEm8XnmnKff6oHqvt9xFBYoq9RNyWgbFGxEsTFdwv7Ls1jqGmDCQqpN4rWuNmszVi8i2qqtKpZ",
  "key30": "4GX9sWEaas21DFu2uKkavMmqucY3ykGbRvYPCmBGfforEMSWcfj8YFTkUQPiGea9oq9s8dmYfSyNC6yD3jCKTm1V",
  "key31": "1pskNd7uB4CAcsRFpvdRPtFrBEYt34pzWC8uCxC6mMyPecZMEYDSzuGBF2WD8okT9Znwi1rMBJpUnxQLSaTH8wt",
  "key32": "3rG35uY7vkNkK8BCk1pyBCKgVqAb9f2Mu3eZ1HEihUsKjXm8TuVkfAWw42GShufHXWFV1zWGyNL2pzF1nc35Hu7X",
  "key33": "2oeDvwcsdmmAvWHripx5ywwjmkfiNsb7fJNeYU5BRWMLGk6SUDgJ4CWCAHFp2gWxY6BC7s26Y2g2RK5boJmwkUZZ",
  "key34": "4vPbEc4FhgUCtPaVF6PqYtih7qYcSJWFzUDpNWcbYfFfvBro7rgm6xdpJdtiyFyUJZAFMvRebaCjHT5NDiDBWAgq",
  "key35": "2S51tDfB3mB7xK7Y6WfWHwjNBAeqbZGDAehr3nkD4oB74zYfkWQm3qP1Hcto4XizkCrLPxSwE6rBXimX7oEsETBN",
  "key36": "5nPvR6WTC2w8vBd87oWPFe1cRXGxTA7cKB8Y2n5hmecr6m3i23LAMhRxUwx8vQaGkVgjt869oWDoH5p5aSpdVsAB",
  "key37": "3HNdWAJ1ffX4Fv8nCxjaLb2ZPGfcEbGRNEphjpYbhQhWBLoSaLiZ9aAX6X11RNHrpKppYG4NzFXXduuP6cQJocQz",
  "key38": "3S1we491VANcm6eLM5pp3yhrfiYgLiiPbowoFLiUJJwnEWBHWj4Unu7S32z9Lic27QYCfgyMVV8ANV5QxjvhpZct",
  "key39": "4hWtXnCokNWyB8Z1Bsttt6zMwMuK26JcFBk4QabpBju6QkckocgXnudRvjg7rVqbH1Kb6QtYMDUNgRGfLRvrrn8f",
  "key40": "5QDjLr9sqZf8AhdjBkH96UfmwrnU8AEbnZdNQzZkosPfVEAjtB1BXGTpotaLyN9tDTQGLoRkkf4FTdNHP172FZtN",
  "key41": "2jEbNAgzG2o3Dbg2YsXMkg6sEGMJRS4HHPj3ifwwNgzxaoWTuDWqVqoQSgHFGs2DiCai1X45wSPMbZ4idJLXWKC1",
  "key42": "5Xd8Zux2bpTFnf9cDWSC4rg6uetVdPTYs7bVok9Uf5Y2MkYnWFYDMcKwHdHtJUu619P4PJh29cN5hEh8MCkouZST",
  "key43": "2s74LbeFE66EgjaWQ28XLGFjqY4QhhpqbFjueVq1JjRY7BY6veSRNoJhctx1EarGEAyvTegKkxaaSFTs915831xH",
  "key44": "d1hqWPLqZr1ho2zyyrTjmNMYzUL6Getb7bLbsGXZGy43JEyu88KtWfVBsa1F4VNf56taoF8UphBaGR2s1nSWNkK",
  "key45": "4MPkfkp5WkezgF1ZaTSvn2K2ZrnZ6jPgr36DCm2FbpZ4QKdDnK5DN7QLKbupeXkzEvi36xgUMXCw5yLNM7Y1wKyr",
  "key46": "57KLi8n656zqiSd8mbeETJT9vcPSfXD8dWqZ3deD16UC51vixahBmRYijNq3Kw6vRGi6Sm69TFBpeCw9GNqEtHnT",
  "key47": "5ZWc9SjnswfMMS4xqKjhtjVgB8nr9TP4EAStaKyMXcLigxARQZHZndyLSeJqsFDviTQLGVeMs8riWzrpV7V5gLGX"
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
