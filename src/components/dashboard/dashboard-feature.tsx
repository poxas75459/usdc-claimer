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
    "3LYr6D4RA8g5hHZRHsQNWDAMVBnzfRvavLsBdyhdAyWYmyB8yFZNB4EBB5ZUWMV8NWEVr5QJsWgZ4t1suB1giSiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4aQyarz52diK4Z1NQaNRJ9e1Gznm9dYRXKrJZaP9Tg91s6MgCjx2VfmXPZWdKC1YKJCQErbfH6qTSQjvhWngSe",
  "key1": "47jwWbhH8moARCHKNpNvRdDW6QcxeaFsvVAPhdiaRa2heiCvpLuFwey3bhE7aQEPmt7p2rpbPn9ZzTpoL8hdQyjR",
  "key2": "2cxfF4rAZQKhboqd6uUtCpr7HshEoJ38SNh5gSzDKQhEQgghyjGXmZpseVvV4NjXWFyyL86x8yyvTDir4YidnRm6",
  "key3": "5KJn56gPcJWUUY9TnWYANkzmpuK2heJ4FDhUZAjqxGstj7oKP4DKJaRahmbQ2YNdsJP8tcTxM1KHAmfk8bNGP6UH",
  "key4": "3U6PJUKpBaceQ9GLDRr7YBLsbzGYmYLSndHJrXVSx2GhENz4UZBpNgeLeXyQc7C8iQMvJTbDs47td8u8fZAGMQAH",
  "key5": "4YX3dAEbHt6PEnvgPFHPPsjSGSTV79KGPnu6yrjxSvukymUQbEnu9aqTM7SvpBPgnDBUzztXNAe3GTkQMNwGJRBu",
  "key6": "2aP23wkM88Ryo3y8nqh5R2NUwfBmpK7FB7vcsj5advEVnX3ryqAMDCPTcYBteVSfVPm2SfdZwrQjpJZ1qYA94MTA",
  "key7": "915PZr2DbNWWv9mqq75Vep95PpTdSRbJ9mUrjdZCYgAHTgrhuqJcetVAeDffekJVpjJJoZrYtCURaaiMNCSJpB4",
  "key8": "4D9xv4AZCPRTZ9ic2jjCgVsYr6pz9xj5a6FGr5rsoFDbfTgYfFdR2Y9z4HdpxSVNKNBdvrWTg6s9qmFz24zUzcfE",
  "key9": "4Vw814Yce5RYyFkYhdQakbqbc5owoynp5DjaXCP4v6rFaarqbfhPdP6waJyLmR6rx3MWQ9tXY78FE3X5xsxGuP1j",
  "key10": "561waWsHZeENehFMZqS9DV63XwZX7VineWvweXQnmENxSRYwWwH5vagEJoUhaoyimmuqceuQdfGajhzAT9haa2Hb",
  "key11": "3RWB3CQKZ6NbH5X3ppECd1PDzwj2dKT7YYuRHGv4qjht2V5f7s3uuuwJerHTtqbGVjNFvoec8MufAQ7Asf2EzttY",
  "key12": "3BAj7WkCwbdZwksbFxF3WKBiDRpgTtW2ekgdHQERwrTA1zbf8mfX6nBDsxDbAiMNG9oyfcL7QbBMP3UzdM6fPgga",
  "key13": "4EcyjU1ckBUpBmshTuCpwFMNL7NjcZXDb2QswSXGXCwSaCJ2xhZWuxcDE3R3hCNKEG5hJdXGTQsPtRPcy9S5Ji1z",
  "key14": "2oWjifWpKP31E6jmLxc3Z9qNpJ7zQFtv8ahgXwNA8whZ94u7FCgTLdy3PEPLvYUbNbEJ9AhbXqTYP7kEbqT6yPSx",
  "key15": "4rGAp8piTS6oH8976WtsVV4WkKtFy2L7TbqPjgZbto4xBbGg3PDCoZJfpzvuYnTfu7Fxs16MKtgUVXsKnTsyFKz7",
  "key16": "4VC8uim4swW25Tm1JmUMMNmjpQFh1FgHa6KfceeWHrc2DR8Yrkbirpwx52WEoXRKyXhcTkE4G1Y6hoG2QgEu28r4",
  "key17": "25F8waJFr1zALkWf79RyTErhWXNaVkAPaJzzus4v7kFDzYryAxW6UaFAKeKjEehKGa2NJWnEahrV8MTRrDtjYR8v",
  "key18": "3yRYwHawMywmb3VuZurW5dVMjLaur8xpxnA6J4KzeRUP7XuyHyNykR3xm54S462dDA6sa3zdZQo78As7MsgCNAsf",
  "key19": "5VEQ9iZJpCNWJoAnmjfXcXUKCKNAf4caJjZekrrrgRzCxfV2xwgfyFSEHpFEyTUuLfkHtuhc1QWifNcPAYLGYzUQ",
  "key20": "3HKiq1PZjFg9mPJoMxVusZpWcCjib9Jo5LhPzkDNqiDe6R6UhuUJMhCd9rurEo6wijydswQqE6ZBP5WGW2xJmA2n",
  "key21": "5kaKW4neTW5nu5ERWa4FGfiqxQonmPuC22MjCXQ1vB6e2ahGpiHgCi6faCDLpfVqfTgC8E4dj18x1mJccMN4goeo",
  "key22": "4Z3TdmQAhiLmNFrQTcvoguetSAsZV6hkqT3yXau4MkVsD6x1oM5V5MXsDp7Q3NWpAqXqFffHffMTPUd9gbRrrgiy",
  "key23": "KXbsuoE92yLDj9w8qcvNz94Qh93pSLTWHqyVrmSavAV5qWNLbqdQTC9AZ1oZnG1QpTADfi1rrGAALzNDQqJFsX5",
  "key24": "32U6tCwEuCZMFPTsBbXsjQhp6JyazzEhFmPb3u5evdeL7HLFHHYVoY3Qsw4vkAXDjMbBaTJ9dXa84kHH1nrHTLyc",
  "key25": "fdDnycBF3s7KYkgpSU4mK1yKSWM3P6RTFSNpMf7NsZVTAvSb6n6qcsvkgUDC74XdjNeVMSqksN53cs5hXfFoSX1",
  "key26": "2n9cbGf9F3cmgiu6CGmmGL7Dax8iWum2zpsjTsHzHafwTS1F2REoYyFb8i3uMnLfsHtr83TDLXfbQ2tEdcyTkd3F",
  "key27": "jcYm2dsYqr2s7hgdhEzMsaM1Dfxwn3wCswxfUwJWZdK3iywP8joqZ65ZV455vEP2nzedX8wBy4dEhv4gG66wmWG",
  "key28": "2aBetFnhredHw6ukxrh6U9gi1PfjeG3TzJZpAk2ptPSmUGGqC1E1TYm3ZBy61aY4jZRL7sxG1GPVgL36GKjRWfX7",
  "key29": "676sNjic37PGbeQAG59XezbFpunxEoAbH2rPs9vmc6RM8aUu3FexUVAViC8WHtgMNReQKFPQNqmGiQjsZVJ5kECc",
  "key30": "3K3cAGWdvyiBoSxZ3DS5upvrndaw2R9q7jXYHozHW1Z7pyTUdY3QcJhHUovj8efiWXY4RWwrSPyTzjnSrC4CSh5h",
  "key31": "37fsSrgD7miF3eWKsoTr16fkGSkYE3iF9AVVw26yVJFa6jMfNtAZz14oHu84mSnhM6GAX1pTTqjXU1Wp4ayTaKap",
  "key32": "4DSE7xpstMdzxrpxk4KYxKXMyodQVnVow28kzEfMRuyqttvTEFHi52Pm4BWZa57sb7WMNvpAwQKTwhkrshFCnsF7",
  "key33": "3VijocDB5cWAYz7QyN6kaqqgmo2LSBzRD4ttrReZfrLkUnfWMChPBZnZgGuhmz4vkxMKjvMDvGCzQK5PMiVDXBxX",
  "key34": "ZsyEZyiLa8ufqRCkHYqwNgBw4TYQ357FsPRA2h1BS8gzw5bJwtvMz9XhGKykVAwNoXChoHH5PKHoJPztVJCBLVD",
  "key35": "47pFHFNX55inhuj4pXrYQoQ6AxLQRNTvqmymP2Dvuybg74QWFTZgaARYd2DbfAi138RT4R6kpoijw77jbbyVsct",
  "key36": "2Et6Kq5JZk8rAFpHk4vjBVDL8NubbpTc4qq2rQwo7eAE83fTE2t7oWNYR87N1YyDMGNdxW8LUnYUapjmsokrmHyj",
  "key37": "3msx9Gn375m2obhV6g5ZkPZmEuMtWLK3364aRbzSDvfCCzkx9dU5m4VjrPE41GKSsnKdewaZ5S6k5EEgVtS2Y7qX",
  "key38": "2fzebtmGrht558WCCFHnZoHn3J7hKaFD4MwfZMHwM7t2VWdZMVJGVXg8PzB65KajtDe8sbivhx4LtqD9LQdpV12k",
  "key39": "3Pzh2X6FYceQLhz8aZwK9JWnn9gFrjBv8kMddTVGHAQZqQCFgKeHWqXpRmMT5jYpt8pjeDJyBMHVAL7W4vzb6p8u",
  "key40": "3p9bYxrs2b8sWWvc15Cxgp6pFhnsYcosv8ghiy3hkMP32bwsEdJ4CcEU1GDDMMWqnGHBoCzsYTHuFKwyhN8mtnzj",
  "key41": "5MUzh6WANNdXyWGZ1Eg5Doj1VaLRCXNHuPcdAeUYxdNkUMjUfkcrEHhsrFbgRfGt7jp131W9ivysGW4TP9h7CQXv",
  "key42": "3p5phnP1VwrvkS2M4qgkn7ZtPbuan8Y5fPQKKdHxnWaQv7YXzHnzgDHkQAC6wWFh9gpJzcYh3Du6V8UrpnzvHUh3",
  "key43": "DN7mveYcmtZ65uEpB9z6aEn6We5qWdY6bexujkXEBfCjr4EZPDrSPve6kq57EBupb7WEqEkmyTfeUpDzhJ6tUdR",
  "key44": "5ZbMwdHgKZLwkf7tNBzyRommS5bY8TtjyjGwGgRTHE8iZb4syZfsHJtMgLhjEdVWkNJA4icGvGZhmJnqBhDrd1Qk",
  "key45": "51bZ5wmKSXRHjmZ3bjeNtnN6zetwSVYw5drUqqAWVS4GePNBvuge5C3jnbny654tgSCALDriNUvA1GkcDigTNFj8",
  "key46": "4BU9wLMUGHQwcnwCpYrzVBsUk37RdQwipfXqxtHMcseXWeupYaL3xkb2kxDpz6Yve8J9EWNDdzmzTambnjnRvSqH",
  "key47": "5jzdkpPKPUmTtbrkxXSHUctMkMM2K43NuvPSkqBQaUpAj1dGN8guE59Eh9MQjSDvynoRN3aQUQPKXo8GrALtEZSF",
  "key48": "fSqP3DJA4tpRaKXM23BAMhA1Uu4ucLN4KyirdnJBWeTRfhSMeH4hh8kj9nDNWhfsXy163ptixznP86mBgAYZFkU"
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
