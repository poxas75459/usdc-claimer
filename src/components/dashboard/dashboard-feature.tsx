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
    "4hMnCrp5VSEGXSyvsRP1a84k7Uz23qYFioV4s6nMhZ1NwnPMDb8SxAkFqLr3A23pkwwg2yMyfeEQKQoCSgAz9PQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXQWorEgVNXRDeNvELXFVGwHXqvTpBGqoxBJPtTXDssU4LrgJwDD9KqSGJpPjpS1ygEftgEWvmcevzvhQADDvuR",
  "key1": "FDsCUgnzXn9VtDwcQbFWoXpojdZYNmorAW8V9ZgV4Nzx8qrAVeTSe9AJMDYmVnmQp36Lowd8KTKurze8avjw7j6",
  "key2": "3pYEE3WLCGai8ujaJZpWk6eEzZGw9BiUF2vV43QaKzT7R7ro3n59ENNLoCji5bMV3iomi44MpjJa6NPmPEZa2iTh",
  "key3": "r9KH7FDTcw2P1jiLsvWh18bzgmei3rPgdDGCnYzru8YzuYEkAbXB2U7tTcd3BRBfjV6NuHmdyo7HHkN4pDAstPs",
  "key4": "4qYG9vTbhB7riWu55Y71yTZVsw5GaTyLD4KrPS7b62BKaSYYHQUS3q3mi4HLvKxMPWbXpszvgCDUXvyhER6WiCXo",
  "key5": "4ZwJKBbbLqaxFZRA35jYMmWj2L6nRMt84dFh6FSPq7a96c1ud92cyB7UEqsqC6STD1SGpLBvA7EQ3qnFRCF7pAuT",
  "key6": "5WBLEeAcFueHRPRQc9Rbgjt8DcKkRTEMee6rVgaEJKwGoitdy5FjdgTwQWsGUGBAVHpa5rbDTKCTGpaBSTkn7j9s",
  "key7": "YRNBB8GB84vUpMSWTTaV7YqVFvfpj6nXamRQjX5BzxtTakdhmojczvGEDvSoV7uPNqk9BYTWjmFAdwhFUsSMHds",
  "key8": "21HqMyaew8gdeB1k7tsTEoDiYUuZ7VqGfeRwyBbkTDuZFEoNviCAvvz1darxMXz5fMNuSZNTY1M3HHWucfgVuJ49",
  "key9": "V3zn8eLJvQhMiC2uKc9WRKVVrfiybE2n1reTmeBBRwHmUZfkfGdJTeqRSQgeUwjsDnJc9jy5p7Ug1DrTVE2cPBD",
  "key10": "dXzo8426vdFcaVWGnZNs2t1JQpPepCgqnwcSoNfGquyyNghUmrABtGGSwhmYfmJRsLjBKNDU5MFU5QGGcDCgEBu",
  "key11": "daJ5TsN8mScNUMoJygf484VydUxbF18RRYwFaSZR2Zb2dNYYLEGC1XK6eBcTFXisiCdD6VUx8ti6SaNWdtB9U6B",
  "key12": "36jGdoQkABcZedWrkMf1j1cyJqB2EjS5rbiPUmJ6ppHxXF3ngj2PVRzeFM2K1KZCVc63HSSjNCrAEH1Ps2msReSF",
  "key13": "2w2KZwhEsUJoEKmm4bWaDFPxKJPRszpyi4YN548pnESxxyPRoLmZ5VM9Sxhu8yC9Rb2wqWNtfVykE71or2GPi3bE",
  "key14": "46AmvJmPHV1XB2AVCFmekw9UwYUcSTkjzXQLM6HXRJFTpEZb79wd1jeKHPTkC44GxNibhpjFQ1xv7ByNLvPXRFqQ",
  "key15": "4tKrfitFzJeHQ3UQ2LcM3jGnxepnnn9VEb9iduzVM4isLZMvXE28EJA2FEtw2stQjFRo9t3zj2NitFBZqGjZhZnn",
  "key16": "3KpeE334nRCajeZp1tgbYCNpbmnk1HvzP6EqJKzVDj76trZcYgf3e4Gso9gZCPK7Ms4sJzJ3kNtHkK2T4AKro1tb",
  "key17": "4hDmBSU3gwGH55oWrR7gmWJxwxmTDPZTxhzdAoVycLgiMDsQeaBC6qKEiVkfPt9rVbvXQ4X9YWfN5Kq82Qr7tGWA",
  "key18": "5rCveh5XfiZAuz9Ck4hRgeHFaA2TAXnRMM54udHo2dHxtdaaxgr8LgCXkciPMLTREF1Ca2rKsdsDM4zjVgZbYpSu",
  "key19": "5eAGURGz6ZT8TER69TapXJtDskLZWKuBohh6wUd7Ea59Rw6cjfus8aS3uiW7SrSAp9BKqLZ3PiUgb5qwd6YzDrFq",
  "key20": "3SfaxyNzuVqLmap1iJY6kNrS1zUnKkwgBx3VshvuxeeCZnGsyCVRZZQZh1rfuKWvrJHczNq1xa88XrqAoHpgearm",
  "key21": "2HojUJrUsN1Lvfbiv2w3tVv7vquT4XYKB1xCb7pXg8e7uq3Tvq2nmjJWzzPwrpFysxQcyP4jQwBQ7CGkmpTr551U",
  "key22": "5uhU1mTnGNSKL2bBJxq8M6kr4pLrzEwXSx2v55z4cdwvwJtmJx86ZDhz1gdbTp7RZS3VhE5FwT9rQyJmFJZCV4p4",
  "key23": "23PkJ6B3ZxDjRrVJ3NdgoqDsciNcFYmyfQqKPHd326nk5xQRdiv7bEgLNHKkrF9xYUT2NmaogzeTX6oVnTkyWwP7",
  "key24": "34TGF1EKNP3nDUNc23S2fHVkq6FxP8DPMVh6XrY6v75WVrbFYGaFF89Df93ZfJbW8jqmwRFJBt1by78wGg4ttnxe",
  "key25": "3DovPUsgavCuUpLUp92FLtd3Yrt8nevJe3wKtNweKRUrwPrvXmDCJw66TYqa8e8gt1ai6N2qoytP2CcWyN9KwCBn",
  "key26": "4j5mJRVVsWToG8eStwZjKeYrNzyBQaCvzvJJ9v9DpZs4khYoBukq4WxpmmntYMs98WoGy1UiXkCutfdwVNvZAmcu",
  "key27": "2WSiDzGPimaF67m4zJj4udQz29hTzBjBaQTceazEaqTVspJPzpJq4XLdqCvNb3hTuFHAju4saGJjz4xCgjopL8wo",
  "key28": "2tPEb8zqf76PXnFNuekcVgqgz8uPBkDfsapB32f9kp1UNcSysgny7sDfZWs789EpRUJLrtRAiQqx1neb9i9QzSvA",
  "key29": "4wRGFWPtJiaaXYq5cAzE7cD8CmJxMZoZb874UQZaPiyH94GwUGzAQfDrd3eF6nBLUECE8ng2ugKBiKw7uLXnerL1",
  "key30": "5qgyBnivqiyVJvTKWpnaBoUZiB5B2NUPRvnpHgiqB1QwRYLwe1UJSf4icnfU1bKj35PEHRnGnwJCqqJ8HX8cJ6ek",
  "key31": "33hXqZjgkQT3VqeJeRhbxG6eB3AcPUMBxmJMEz4KoDMEAvbwbgsDr4pKbc81mJ9quQ1VT3H1utcVEnDnn8WDog1t",
  "key32": "2EFeuJEbP1NJ37bdpxnh7VLGPMDLJMuiduBd7JEyCuTyM2xPCzCbbQUC8h1wffbQkHMNotFMoSq4pKwyNiKHeak3",
  "key33": "5ecTjExFUiDMHALZ7rhnDfvuxKm2FmH4FyZ9EbahbTRa7Cei3PoxdytCLACyGAYBGBQd8HkMtzDhkqqqbQ9BvP5P",
  "key34": "4gputLXXKsPC1PnVjRCEJqyhJ1NoriB6EyczLF1dUc2KbiysmSzJUjLexRpbsUjrBfMJUqB6x8rkoMBoCPC6B4RG",
  "key35": "4EhsxjYx7spWZ3QfZbqREpWEbLCooQRThk61GQRqivFTAb9D4dnJZWy5EriPUxY4YAuDcUqxAxY27c5JB9jmRtJm",
  "key36": "3Jf7N8QbQ9RAmioMkqYwSVDUWTdCqxZTpud8af8Tu65HUyYTxt7UvQ6w5djB1N4LjFPmgkQMGYSRS5jBYMqTMb3k",
  "key37": "5T6Fmjvx1zbq56YbN8gGr4HrAn8k2bgqpMdPcvkyJcA19bVP6S9jeQk2TQHuvChccTe5JyRy6X9DxHnsKNQQprcp",
  "key38": "4WMJw5hA87fEGiGCt6Js76fLC9Ag1UphTBZzmEtStN1gqcaUFgagLGP9CWhLXKh6pVVtoyA1PGyg2uW5w9SnQco7",
  "key39": "25xBrHf3UkTwM6SoKrsv9yvJgQZowZcy3D6tXxc9MNbLBGVHZgm3Q4SoDYmNwFfEcBADmc2qFmLtCRRm9PDUnGcu",
  "key40": "4EneUXjaNBSYDMqSqxqRwSjinoMCRjNsF92ELqFN5Ru3kPzSnNfBgrKb8SzKCPttTnVGjDPsdyVD2Jm1ydh3d11B",
  "key41": "2YMZaf5nPyYbceG4Jre4muZQsAsEfse1TgFKXr6DDfDbjTAtZvo6LXhSFsWJNaTS5mJncBs2bq6yRpWhymxftPrL",
  "key42": "5tR3VG5NHU3Bu7PAD1SJppK8mcqM269qv5hAFiXSzs9Mnd9No6ARNM4xbi95zJHTncQBGovB9B2L7qxd7BpkRfPy",
  "key43": "4ciG8o343rpph6Z13ryAbQyWwnmPEXdCogzHGnexKCxyjerA6qdEse84qNNuk8tHov2FWTUVHxaxC1Px8zjCN39C"
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
