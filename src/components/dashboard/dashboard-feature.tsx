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
    "2QJyN7wA4VEmTT7KxjqkcMWuJhS3QNaj349gzwch8s9mYmYoLkiciEJFG1sHj5PMQQgZ2XYqF7fYJX4sG381pk23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCbuneCrSkP4nX1fkov12F5j5L5GiowR4WgnkuEx1DcMfJPMwdyXaZR1EL2117vXw5GnuxNeHKKvxhkh5PVeBgB",
  "key1": "2t4hcsfLWSoVMAZHsWANK81FhVYd6dW6vjK5LaWxtWsSquq47vvKPcga2VMse3YF8FSEeFBDMFFmtbEgfCK68RDs",
  "key2": "4W24uzUNHPSrcuLr9oUS84yhoyCccFb7zuRUMQ89SD9YaSS9dzRX1PbDW3AHB9sTynQkqqcaKRYv2AaHF7LayHpB",
  "key3": "5QdJr41Mx63yCe7Lm4iaFycgNWMonK7Sd8AmwDupN7StF5Ln38Txta59FfsdcS2yRfTDM6TdCGyEX4yn1rBsPYfk",
  "key4": "33GyJteoGVzFZ4hWLAkpMMPXhQtUzPXBRrzywqew6z9kX7gDZzQGDpqFXAXtgosTo4SQsuARP7UmsQ9PXWnxhfEK",
  "key5": "wrUYEZCuWNqoA46dkvpWnmK5aDuVV7sW1eYzidSQkd3xTwCtAHSJG3SkZ3hSXqfL3d4FrVGZV2sYES5DSgQj5GY",
  "key6": "3Jh5zLg4jSVQqWWxgq2VzTdrvkpr35p5ezGJsArzrKfdoMmDgE13x34uDsLrzmSp1xQDoDbnEVVfSciz6gnsYgta",
  "key7": "82hXNMrJq5H6c6vL83YNqKM1bY53mEykDyCDpfq1ZscZZLcfeyMbrdcguZSwXE9iS5rPwLkdoyxwYwiYj8y4bY8",
  "key8": "3deWe9FU3CSPT7et29AzKDKMYY5BYQvitGcphpZPXc6ScNxZUDuwJ3VzKBRccEWcMumTAzpmQy4swi425H7f9gWj",
  "key9": "jvuafve35QvwZeUdrH1vW8GtLVbsGSiq2drPa3GGystaKhAzQmCfuCxCowTuZ2YoXXZTEyXa7XYme4AqNNPHnxJ",
  "key10": "5giyC8HPZBKkdeMT3cLzG3J9afdhQpyM1wM7btgBAxTcE371KAJFodBS6BwLEaTAPS7bgUEojodFwfsy2HERDKLc",
  "key11": "5r9BDPjgWdwJCNCgvbPmXF44BaxRrBvB3XSEmg3yPAYsJgtNrpRd3wHpEBkyYKXrwxU4PpMbBWURG1SEsbwJB9Es",
  "key12": "5gPMsA34b74QMhdDGHZvnGSusGrN21DMqT86kriKMJw1bKXhcDz482Sc8uvGTZUUhTLLp8eEhkBo1edKC6p5tfhK",
  "key13": "4reJNTANZRAFGre61ap3ryJ8vzXXVQvpaFHRp9rW7yftBNMyhV1WR6cJ4RzJhiS6xZ4Yx11E8XeUY2YNNGyFGrG8",
  "key14": "55ezU3ytZuEdzMdFXsBqrTCCG5uzMbUQL2KPUaVkoMHM4PLWo2c8Fm3bUc4JbVB75LnfPCkJHwrjncfrMw1XUzWs",
  "key15": "8BkUAEdp5bxE5tTRhBBdupxFvgRX6RES893Y2gKz8hYPoAnVcWRSwR2wrkLFiLvG9fNitizYULeq2cNzRvZaYMB",
  "key16": "3CBdpwkScGu1ZRMVKgVHCNyh4UG6ouBCEkP83ksCvu8aB5StSN5gGjwEZ4YujrLvJ7kKge9iRgyS6XRynH6i6fGs",
  "key17": "EmkcNPiVgCecAE3aezuoHozDTQAX3sPLNMnGBykVtENvzXqW4Y6dg9akSS3WwQuvnKSjarjC1TPhyYcVcX7n1NU",
  "key18": "EF9rfTJKKX9RmY23QxhAUNVmJNkuepGge7tqntvsFRr59oco6BivzsDmVSo33QGxPyRHPTa94r9GxKbuo44VfAW",
  "key19": "4Ewefjh1xgiMNjR249cssdjEMMqCEWZWcKpGe5z2JVE28ffd7Lsc7LVNBGo6KDdoHZjbswajfZ1eqrbV1CaqcSrZ",
  "key20": "4G5n42B6KeCZTpa8usRarZmff1oVNYCZ4aBXFpmBqFfh5vpLmU1tECKWTVqhdT1pyx3FDjkWCSUbMNDvFk5jErzV",
  "key21": "eLiEAicqdWEeGTDSqi9tN3mP2NAZwqGQT2MVMbh5qphi1cEHDeYKcarNf4osNEnhsfFANDGbhWzt1qrS7SBngXr",
  "key22": "3dAigtG5sGT7TmoMZB3j1BLwfp2FuX2KwKmC6PKBskZmqnEnNpTEEmyBf819c8et381PU4V6GCnGy37rxfKWs7vT",
  "key23": "5R53TTQeDm3TncNgVUTGKmQgf9rEZKZKADcpg4g6582kdp3SX2tJefE4pGqdNuVHNGaBSSoPUemKsVXFdApv4jFb",
  "key24": "5JXZd4kbgiUSFNVuFJRY48ytTWN9c6rhKeDnHBe3SH2hyZNt1ZofjkrswRoYJpyFqiivnCfm8dgSBZsRDQbtAtwi",
  "key25": "22NAPQmfrScpnossZv8aUJL5TYXUDma29MwfRqU21j5yiN6MundktDcvr9VwPGa4pdzx3RQATVynN1fkcYNa9mHq",
  "key26": "66QT8C2Z7Sey5YjLi9qbNZYALsLU8zGBuBAgahjsZnyQb6sxCyB7Rusq5FXupqgMc4WGSvpiaTkVqB2nYhQti74t",
  "key27": "58BvCb66kBqj3vaJ2UxNqmSr8axJgvnnXLpZ4VsYmXSAEynYPqMXTdAvhmATTN6M2RVuFHrJRi9UegLvPvgHsPk9",
  "key28": "DWb3ByTbNpMrN9e3dqYtMTTeomGY23XTHH1RacgbQ6GzrEuEym75sVpWhuV7Dttruzy29PPkhi6RJXL1Y6nAuaV",
  "key29": "4YhwEjN5o6U7h78HPkeKZB7q1k981YbdjDvrPEXectBkx1dXxMzjWjuSvDDcEy6it5vXpARtXPQGvdPGy69uGNv2",
  "key30": "3Ef6cqdxfp4XqFN1tam1dgPyP7iXbqNMXqaykPoR6ieJTWc6BQfBDBup3A8cA6uSyf4hKQNNch8z1D2QGb6Lip7D",
  "key31": "4EfD72LQQjSMUdyMHGZuzjfMymbhiJFXXkyzUdmVign5E4oqXDemqB2yKTqLAW96pzdYijGMpanka3SXjyQUSbf5",
  "key32": "3KZnwhP6PXBDKJZ9mXUrtrPNkz4PC3knroico5AjZo5nKFQqEr6Ryj17bfWUZHSF2HPW5iw7Somu3p4KfbgZ4b6j",
  "key33": "29EAHPBVPrEVXAeU7LqPc4Ag2qfScUE4Kq8WBpUJ6aa5nGwubSYYc8mZZm4XuJKtF7UkzMyksL3djux2iSqNg8C1",
  "key34": "4kamuCf7pCTKLqVAow6pa6UaSu7vnNe3RgJA633Efyfqo4zCCYYvVGqRZnWGp1kXUqT7FgaEMRTFET5mKX3Tej3J",
  "key35": "xbf44QKSD1dusqqutP22p2P1MWFj8EPY5CyveejTBKkCVsRCW94WKHybcDkPBQ2pbyYnBYSmPhPvktEHqLd2ytG",
  "key36": "52mce3RMeQ96Fbc9GYa2An4NeVokub98FoXdMj1FJEMwr2hvDt35ujUEjPz9auwXmV62PcayNzbZdUPjcYMoeitR",
  "key37": "5pnnupweP1fYCjLm5CPk6YieFN9WxPEi8xCzCnbFRq8NXoxf4LHdYU9T38TLAQ61Mgg5ehX1rHE1Zow42j1XKWGx",
  "key38": "4NGFBsz8TcfsjSKYVXH2qcN7QNFkwawYoHQRYX9F2soHF4UyfKMGBzGyQLvmc3ohsyhnGTJL8ygjhfqZht41NF4n",
  "key39": "4BthBkSgkAaAwNLG8BBviidda11UDQtd8Uxw8EZxwSjDGuzJDRNmvaW7jF5geoQ9m78HRo2hDjq3tNaSWcLYdn8F",
  "key40": "5UBDELLyXAAELXax6PvoNUkXhGHd3cMCpS5nxSeNSzAcsUVdS5UJhVNwQRpwDYuAtY3T6159jS7YAaMfyDaAi1Lj",
  "key41": "63SVydcRQDFweqosYx4wUfsAtGGUgMBEPE6zhEmtjryJ4mvEUbFp3UKsPNFY3EgQWmgPHkNTXLzmGotYzKjo97Nr",
  "key42": "4qnsaB2Qg3JRpXg9ZesYeaZiBPbnhpM6Zu9HD7bfWqP4NWnAefjfLy38JKsqJebnhbbg3JPEvJTENsqjovj8ybwZ",
  "key43": "61y431NoMBmK432bvDFA8mRFmsoGpmHo43mcxJf8SnKgotvCvPNsPamrP6gqeqUsDZkgKFwuJ5dZw8Bes4AkQvdH",
  "key44": "2vwvnN9miKem14LB3MsgtodAJ8sLemn8Fu9FjkSqDjbucA5Pc5M94buu3YNm2VG6xRNKMtaySsv6KtRpgSKPdg7x"
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
