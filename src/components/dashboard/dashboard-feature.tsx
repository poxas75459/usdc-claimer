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
    "2ANBYcZ6sd7sjqED1T39xSf4bnP45BcyVVXmbKgQRbMbP4XYPdTC2bpSiELaTP9Z5A8JZLud1speApjYXqwsMbSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487sXu4REXEw1XonGR2n6mxJbQT6JQVxAYoNBeYxhSmJX2S8zjDAkrggKVRcjMQdsaQXHRGFAL6EHLSGHB181N3m",
  "key1": "2pgaWXYgoeyh36SjgTfXS1Gt29mehjs6XkzXWZYirg4kC1pTAWwc7g7hB4m3Y9Wh1EpxzMpL5NK3qhGRE86tFBFU",
  "key2": "3Hd4cLJ2sCJnh1ezS4yduFHCopV594xVUyC4hyBparBF2RnaHakTKHjwgfEfjGwxPEooYxWrtPijZdG5CnF98mvb",
  "key3": "5F4m1Kf8M8pLDoFVm3xrQtrnkTKk6LqYfSgf8Ny7t9LDdPpysBjdcEhc1xorLkfrgDLDo4aFJhM6EpY2v2ZfJVZi",
  "key4": "pSUpHWxcNgt4wYtAc8VikhjuExxA8Vo1MtpDrCGT1PSxMKKEewe5JWhnG22UWpPFtwdhtf9Y6s6PYDf18Z7z4zP",
  "key5": "eYjDjDH73K8QhwFvWt4vPgQCnhbMgaRDF5oGrpUMTwHRQrAXULvQeHkynL6jGeP3p9Vigt1CiPTmLJcPMBSSszH",
  "key6": "LRZYTL4EB7Emm9pS7uxZ1GNGgKRMrh5AgRWEsPtbyD3L4X5FaM1T8g32hsc6xEKYgMho4aaP3AWgaWJB6qF7cTW",
  "key7": "5v3KXUpGAkAecoFMWP86t6V4rN9TmicUaQPsjiyV15MR3Cz9j48oSmKKa71qLKW2EQcsaWG3nf4j7ni4uLB9s9BC",
  "key8": "3PSWwCnrkSxw9Rp4Wkf7XMQeEgCAzBYLVQxRenWwtFkpnD7VrcgYrP6x7eAtREzcNdPJpYsbahiC2w74ZdnrXsgE",
  "key9": "2JSgQRPTbZUDCpKbPXdcyNQ812hbeaf4enA6RL16hfdXpscpVDqyJC93haKxWLyNJ1pPfR3YxbJk6CnGgdkFdbca",
  "key10": "5rFDezZ6yWjgJGqd1HLiAqNNvVCX1tKvYsaPg58JRwKvMFV7rSs9Ew9ZAkkDdn8Mn1ki8mHBMg2fV7Rj56BSTdfx",
  "key11": "66McMyiqHjF4Wyrygk3ETpYQVX9bg6B1v3wTtukoEdoQmauVxS8KBsjtxvnPHt2P2kdL3MwAbCGfYg2bhJroQvrf",
  "key12": "5LsTqU1Eazqzmr25iuedk3UwraSexQ5Bnqyq2wuBvx37A1JVNzxkjWUTCfhRXcHAwZ7HDTnXyzThsVhSDqyUb2ju",
  "key13": "3KThwtZCP5EvotEhmDBumaaMQe1rZ9d3XFcHqBQuBfe6Da4G9p8HnJZ93LgYNiPHGB88o87TDDXskFEFEFzeaJeR",
  "key14": "28prBALEnxZe5zsyVPzanDzkQH1idL5U4M22gN4Kjs9S3PBSLXUrLN1BUMNZboMp77LHWpXmU3GRP5tfwwsepVx7",
  "key15": "2KUGiD2j3tepGaxYiymcG2yWXgWgkcNsRR7CHes4WJ4krDbBYyS8UMTVQxPjf4H2quMPVEvQEEyHPzqtqCaeLAJ5",
  "key16": "2Z5QS4roUaYJED1dLHLUiowE2f6rb7EQHPCSVF8XGtTWcGwvuRKHGtivMrMKVu3AiRPvQbSadFT44drnjtjkxPXK",
  "key17": "3g4b6LqCY8Ccq7ZbWhpujXuy5jmBUnaYubwQCwZbisXzLApLUcSoDnPHhqZoafbdqfwjMnayywDQtNwz3vzf8aTp",
  "key18": "3wa88rr2QY7ouy79nnfP9aCF9dzZPUEjn8kxWYthCW1dvLa8zBt3CvG4oX7GeosQ5qpTSLGD574utyZyT2QaaYQe",
  "key19": "2xH8jSrSo7zbodxRiYxTpG2VtNo9QjKSBromrxtAJSH3EdCcXRSDTGRmQ8oDSZh2SWgEotVSpygdFiqD76qRnitu",
  "key20": "2a6JY7MNDsLt1GAqtBMWtEDc1qfWqM2gmJoVhx1CCquDZbuwy1qEfgUM1ydV59mDW2rHJr2YadoGEd9utP4hHDGP",
  "key21": "xEUYEp43eUxaK8qdrGcmYg5KWnDssa1Gtdvrbp1dWhFQ1TwFCBR9SmJVHb9vMR3YFnyqWHnYXgbHJyoJM6MC1iv",
  "key22": "3Tt97TwjKsXNVUJNgu63gDkMLSfwxXbMYMQXPdNzYtG8mjcChMeM8TAeLR4aWRPyVDuhc7mShmd7KqSvn8TPdPiU",
  "key23": "5K2mW45b7YT3M36NpRXkQHcXni6b3xaz63mHbPugoQ9ueUNHwAiQFD95X5nuXNrfPdiqbnJ8Uc2gmNSAYsyzDmht",
  "key24": "2srFFkt978YNuyYGQCjgzS2Vsk5UG7oa7MMkWe2YWS4GCwQMtgYcvcLF2iEDQMpbwET44JqoeLQG3Pu7qTNdKAGt",
  "key25": "3DAU7hYUySKBi1fR2CVV2DWUdKNevPeDArbP1TzLzWGNvfzKJ72Gabj27NHozX8bSERTdmEM3G4cLmaPw8XrAQEA",
  "key26": "5Q8KCq1i28srN8fQuMXbiJsbRWAiSek2jqN8DNpvcJUq35Cyw5EYK1wcQb3Kb3UBUywcDDEimJyAw5ZmeB5DGu3h",
  "key27": "57LF6CyvM44f3MMxg2kqUG2DniZJWJw3ajfU7Z1JPCcLEvNjHg4aN5m6Q9RCabvgeyYsph4BaSMgTJuM63Tr5XMi",
  "key28": "63tZS7wUTtPJKLGU6UDPhFjnvjXfSv16sJPDeQTQXom1pL7gouLu4rMiqEBDgJCMTG7EBo7obGEk83hhkSmuvcUW",
  "key29": "5VA2a3nvBqjbJnGhoKNEq4y43ijBpAkLjm8ye4LGCixV5DVpii1M5ce5NiHF8vda4QfZAWfcMuBSmCixNaJFHUCE",
  "key30": "5kJ9htac6GWftfpkq1kUHyLhMmXYLEjCZcja5mRh4WKzW7aSJBKu5fKyfuc8rqPzzYXFkQWQJgBDot9obQXmQC38",
  "key31": "3GP4RMM3ESHPGYuJAwe4qBvEzQSpo3fYHzdS7Z8oGhRBbbQYeyhJx7urPjAWkGA3eTuGqLREe27HkwmWS1qbXZFh",
  "key32": "4AR7yQ7nfj4f4auMDoyYNMy3w78DVGaNW2mZqGPgm3XniWy74fpuPykaA2WjucW6iSpWr6k6zVTqc5s6z7RG4hWa",
  "key33": "UJaEjJXWVfsUgbuaCKUtvfruwcB98y3PvsenTSysCqRF4PK7rw1iQuG6FKid3q77qE65TkobYoMiSoM3MSpLFbV",
  "key34": "26H34mKRDHSFAQyXJmAbXf9NbVWj4sSvasu1zyTD9SyikpkDLudWNEGHMcVcooC8TaFnexNbpPpp4WW6Eskx3jex",
  "key35": "3CWVYjD9ZSYprrK7GeNm2cMFRPDf5vFZ7qVz5RcqnVFrmEGWCgwJxtVMnnZ1YHRwH6Tkf93TBA4RtWFP25oYqBJY"
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
