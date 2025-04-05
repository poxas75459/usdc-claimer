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
    "2GrUFeQEv2frCDGH7pcxDAmUroZ5C1FxNN5zbRapYU2fMbrHkHjqdh8FuUHkF8tTSKbrndSrnJkthTEGjjPnZMax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4QA5Zmf32uoPW893BhELaz7KsHB9dwQR18xnx97oXiHzovfFFufnvEHTwcBZJGMjb1Wx2oBVnH5dR5vHViFFNW",
  "key1": "22anfjdXWR8cffFRTuGeKtY3pgwka62BtWpZ4ySnS3xNM72TYEE6fvsVnmJT7Du4iDqvZJWbCSw8qmofQfquTD7g",
  "key2": "63VCt9Xb7uE77KdoJmPNzaXNNKaYBxCjSNVhKidUEXr5T1M4yXt8mnuaE6FnxfRuQXnPjZ4Ms2JawgRFJ3PpTLhz",
  "key3": "4wPEkiLwSoy9oFmPwXTDN1tf4Q19sdgeJHUJDAesT7Jz4kohWBDz6rvcE6XW6AEsSobYpbYsHLEDECfK3SQYQ99i",
  "key4": "2wanD1uSnXhCnaTmFDwm3WTqEcWaX1x3tEGj736TqW4JcZGtjfFxdqsMDaM9s7ayzdZbuYu6ZbqAzNC4S2r5Zwrt",
  "key5": "34fgsumpewqosGSZpeiJyMd7De5xdxQvRkpaBj6hTECe6aiZHHrtYV6G6izhiGUxeXCUTfqVByEuF2x4uGL8SADG",
  "key6": "2kev95UxMZkhZ4i3SqdnkqZzeLQWg4yBSCgHpR9RY2zEAS713QtzKViHCZaM7QLW5WPCERFjfgBPZF5DaETDgW9q",
  "key7": "2BgAg2JbBRHwtLYZFbLj93xUWewx3JGbqcNHBjgFG4aK5kmabDPsZ2bu95DcNr4Tn3BiUbbyDWGqezErdzaTj8Cw",
  "key8": "kf4kABuemFXbMsWeutMbkWMfyUb3A8GwZ3zAEjDqU4AjuhSUJadoFcAstTs8tePitCRi1VspoR5232UW8X38ZWb",
  "key9": "5gYezSdtuY66GvhtYpu9eVsrMGc6z7v1mEXBDURgD8do3ehQv9TTRim4d2yQ4QVSm9wziWz8RKLmTz3TY18GwLAm",
  "key10": "4CJHtZmTSxhNeZgV43quzJE1jsZgQ9M1HAKWWUwDk2TpEXfLwyDGwY7EmjmGCnwnDVYJz8ubz73JP1wCxtK6die4",
  "key11": "4QM1wbK1UyzPVpmSFGrUijWi7LsD2q8tA8rD6MV764vGAWE5p5w2gMcTgUC3g6VfLmczVvBiedban5cnXdhb3dFA",
  "key12": "4KWJQT37zbyfavspLP54xfHF2rnV5k8fo3z1d9zerzzZyWqV4XKmPGP4AgVmPgYqkQhguZH2qHUcgPk6UnY7vUvC",
  "key13": "Q7EAHxLg9ET6dvBKZKM7GndREKNB6Q8MNym73beWGpjG8MGmnDA3oo9t2EvmtUGN6SK4PzmdVPArZ55ppDSj2i8",
  "key14": "2yjFrseVG7Mhre8w3uTDH4Vz6ftTadxrdarQcDi1WnCBLGaf4ezvsimJcvW3P9gdRH3PsZTwu27w85r8P4noabmS",
  "key15": "5yJndwXY3Ca46bzva2aCUGikbwFySXiYT55UiJ4RouMreTLKvvp4UdiUNKQVUBsGZjfQFqhhdVMP5y5Y6YTb6Ryi",
  "key16": "3pY1TzF4UrASB6A2CKNRVUcd3cR6QeCh3nC9aGyZF4qoP2zPfGrDha8bH5Z3oXpDLjchs6NikseAWuNpzfNUZo2m",
  "key17": "4j1e2DAeVPLEyrxy3h2TMw6hUVSjKxe2gXgWjAXCzWwt3hqJcGMpp38ACxPVUjudGCY1sBSDiwSysRLdCUF388b6",
  "key18": "5997D5shb4bmuUBppsMdq93pNxg18kFr1T9eKv4d4VjZRmTacXxHxU8F2QBwrMhXicfpnR3QRzPkvw4Mvae9GHVU",
  "key19": "39cTukRLHHVwadbTqGkczyFPeomZg6j4tpt5KCN4CQrXnuoSakXEkmoDgjhPDXVuQEGo2WKo8A4KGDg1DDB4J17y",
  "key20": "4B9cVBKCsQKAAzfVEPHM3uzFvjGF7zoeBtyu6UDSyTnxEFiXRqsFhBDTE5ZLagdiTMiYLsPeHnja3VxW9wxBY83b",
  "key21": "1cejQoKbyr3Gf4vqAXvp6wrMUoH6BKkqhKRVVs8RfT9Jt1qfdKBREQdGzw3wGmrukn5FQaQuBsxE9Vi2HrkevZW",
  "key22": "5TD64PgD4ghSashQsfi5vjVp8jGwoheN1Q8kM24ipSjudYpHjsM9K3x5y57KbA923YVPXtukADTrYdsdn9qEHetL",
  "key23": "2oU2BuYuMzKE8NfdrG58jFMnoH7QEznwryWLqEz5GSC7iVwEr3wacK5kKMQiMmDAkZxu4gFEJtgDF4ZEmKe15Pj3",
  "key24": "25byqvpATe78PE2qvw8YTp8U4FnUYeafCFkT1eX88xtR5dze9FxXYtGjiWhzWs8zMnYfJr17qAtiUyX1ohaBd5QT",
  "key25": "3Wppi2YEy5Y3fECfKCuYadoQrgCGjSktkfDQf2rh9h7exPYdB21TPyY31x5aMb9M9oxmPALPo2P28TCFDSWFJBm4",
  "key26": "5yZA8jddMYwxbveqKyGHYDuv6pbyw5fVgSUVvq1J1vDiskQfjU8iQjP5sJTCh9xq4bS9QhmeBpcy9UhbfHiiTWKk",
  "key27": "u4Uw6DwjbfekpbLqMWTNrw94RqX6d9M64vvyaQnauHKjBi6YtcpCnwurGFPSZp3SqpDRRqi3VhguPgQ4nJfGsNu",
  "key28": "5UUPcmWhUc9F6QDvn3d3ggWdCnX8T6bNULsAx7udzHpvFHVpNWfjKnnEBTugw1LWq8HDv3N6pxEo8U3CEnV61vJd",
  "key29": "5TfBbGVucxvVpaiyvPpg17BSMPdRCDeywiMnJiGSXfBLHYMJ921kp2x5Bxumv2DNsueufHggjc95FTWXjo9atHdr",
  "key30": "4Rfe8Q8yNYWhGXXTMy5Dy5kfq7ZsVvqC3e4veDZNVCNn7aiufCLVck7Uy2vnD14BfGx6AKGzoVTaskXmTa5SbULQ",
  "key31": "2adjXascWMuSjTd8WifDj6kYsxgJgkFd4QmLb7h2nw9ne3wyYQm8p7oJGmmc3s6YSNcBiRwRFmADU4RhDpUeG8Sk"
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
