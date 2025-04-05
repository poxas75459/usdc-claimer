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
    "4pC8j6RyUt6o79Tfqq8ucUNT8NXChRJVCFaLk7MsbBcQ52caCnM9yXT57u1A7v2SCC9jeGaFB41oqapEB7pHg4vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVAzNtZaNkn7rwqVKDAqjyXUDPHiS3ooQL5PsR9iZymuvDT3ateeabLPtNQityQtrXGD5umxTzFH8juPjPCipHd",
  "key1": "66iUqAuC9Q1apP6gjcZFRYqmEGU616wFSBFsez5pbCh2wa8okAkWhU2ECHSmCzPpNF8woTe1d2okSp7Ct1MnAARv",
  "key2": "2D8kphDvXvkVYLt32wy14BRHsjTq95hc7v2vgUYQ8NGMkZDETS1kRAiPrAU17udqQtJNNmjADPWziL1ddEiuxVDp",
  "key3": "4VrCfA7ngjePLdTedhjD8et9kN5L6rsWRvbwvSNjiNuQmNkKQxCo1jW3XHNY4Tr9WxUBETppFwthknNvgiGCtQ2S",
  "key4": "4r9eGhTtwcSVzSVjNCs5D7sko1He5FbuAzdhitZvhiHsAR1DoNex8GZTcTVoyZdrDSmYkeEjWjUA6a3TUJ9uf9bj",
  "key5": "5BKszJwvQk68K3uL7VQcYi11hfjEYw1fgdQZuv1nGDA39uaXJ9AnAptgRufJewPmWnjDShSVT75ghSuK5gHS3cZx",
  "key6": "yFrRtv3hw7x2kMJsdWH69YQ2R3bYrSksa5VdTQSVbS8K2J9E2dot18FrJFTzWde3ucDfbPjDoeQmk46Ze3AR6Fg",
  "key7": "5ms2Kg8tj9prasrW1V2KazV76Dv2Ym77WLGERvvq7tjtBp5hy9kobFLxGiHQAVGizwNmKgb6CSXW9Ah17b34SaRi",
  "key8": "WLxy58rsRzXP9ZmQ2FqPAo8wjZKMkM8jWiChoBZjHS5xcQn35zTAYD2pcY8MSe6kbsxMKbBYKWbnzCo1T276cYr",
  "key9": "2eKc8iKFMZ6w4GBB2LpsMQn2m8pnGbjeuADHiTrmJ1UMdgqnWXqzTfgb5Yo4hWhN4JyqJ2EQUpJ2frB2HFPhRAQ9",
  "key10": "4cRdai8wEVa6PZ7TJVSkZhYwvqNGzoD1eSyBK171xnz9XWar9MSACQ6vwDQBWTyS8mwHJF8q6N95H1DtCcMXKe99",
  "key11": "3xz1M5DR1RCymSwGnbgDBzdoK8w736CtYio8cUty6BbKHxWjZu4LzhSmV54P7tMTFeG6q1ueKbAJMecRtrdoDHjA",
  "key12": "3UZW5aUeH57UpAbv2dbRcMXM5H39xU7X43jvkrAPyB3rxMCqEHqPeEtue41SqH7f6o2M3ocmeppEMwfx3eV5x8Jj",
  "key13": "4azvBMExUdTR98Bb6vg2iLNJvtmqbE4yTjYQ9ffYBu6qBh315t2MQhWq5vR54NYJGPxPS5TgnTmQMDp6kCwtnUwD",
  "key14": "gnUsP8ptzUppzvMSqm8mwYRd4AF5DYWz4CwLiDqWEhniR7CQXFRw73vewt69MgKXpsKi1UscrXRp5JU3KrWLUnC",
  "key15": "2tv48jbGpkwVx2dTNB7xZaEftht7jCQgXzsMGumdYdNTmmebKwR63w969EZUVFvG9VCs4u76LDB4JdpX354xFVSE",
  "key16": "3p7yhmgoZkjyJfcF3B5yXxiKVKiPDZ1g8bsVWtHdxwpNGXbZSoZewSQoz4SA1jY6Q4y48NZSBvkNrAPT9uu6bRta",
  "key17": "BGM1KzaH9dQWaHnNXjwJhNf8FBmgjr2uzVQ1d2kVVpDjUwzjA9c13D4Az8KGPb66o3n3c35L5s4FqX4SaS4wWAf",
  "key18": "46NWhkTznn1Bq3J8piArFtnzx2qQar1cnfZJYopMWPG7TXtrTwRL9GxNB7MUEmyMJouUN28fi8ZSwo4c6H6upb8X",
  "key19": "o5hF6LFzYHPpXzZQs1iNq2WXHBw2i2fpdXnCTcttTvmVYQ44E18traKnmXLGiHTWJUbcR5xz5p9GVtj1gC643ML",
  "key20": "jmrYntxDm5K4fu5d7ZfLGnAPndMrSHrMMBPA4kgiprqPHi1ygaAKUMoDFrn8LVPLcfAggi1LkR84nok6io3xEru",
  "key21": "3q1jiSTCNwtntjcnwuA6VP8pTS6XWUjyza25LoWtaLjQgHu44iw9fsuUhVGA2gKKyt1tJdbn6JPfH9B4hankTDJU",
  "key22": "35cVdV454hbzytzxPhvCPgvVhBvBi5DACamHgafSRvccXYFjuk7Jyzvsyq1pJopP4iPJXLdJv9sSMUnSnQ6kW6Er",
  "key23": "36MijBp3bV97m3vmTH9xsdD9MX7hjv4imU3My8TenaAszEhDLhth1DLBjzQU4AoHGAnChS14eQTcZge5nWRyCke5",
  "key24": "4PYvY7BWeMMvGd9YFMeMCHHcBm3yUgkZRruy6rZBMcfjaKDPMY1oVsLSE3YQHqCfU8ZSeP4UCzmqZKvNUXnGcwdW",
  "key25": "5qUHdXaqh5g4KNQ9G4uy5siPZU6UrbC1ED97WDfCbdvJ2z8SXy7ir1EpbTQhUDW2MnBwXcvFGGDAt5EVtvv9Pe2b",
  "key26": "41spkCfBFHuPe5rRaHkSJ944fFRrU3vUZpA8KjwF6rQFwGeyF3o7KbpCz8kynWjcbA95KkrqTsojQPYHd8s4Xvvk",
  "key27": "4ARiP2pztjbFVV5pUJpPyJkwA4fmyQqiQCN2GCCmxWXBxNcd9AczUHvZPJqtxytMUt599ccrVWip39ejLjW4x53s",
  "key28": "65piHLYWWRWthRHA2qK4mhFUjWLGtsz5DVfLZ5hhoR7gPQdVwpQM5dkFV2zQuR5R21kkcP4xrMPibykEe3rmNQ1d",
  "key29": "4u5TKQKfdckDQJr7WHQR2dmGdQceJLV4pZ7GEDGGq3WuLhiJXws58HS8YN7WfqnYLd1pfufoiZmPsSfu7STe6pz4",
  "key30": "3t51yupmu7yqBi2FQEDef1CYi2wLvMnKNhih3nmeguR4TZtzVwugSzwR4nSiqdvHTjcQr72nJVLbL85GWzLguCDU",
  "key31": "99V9fSS6deAEGbqwSxTXNwGmzWHCrjaCLdfsQuMTxNaYVieGPVdbDk1uzFvuBE1D2vyEqPah235NonCnKsj8Ytd",
  "key32": "4FbQ74gMmCZQFYe1dzhYu3YcTHP1Tf6QTWxZd3R7yhLiWtMp2BeikAM4qgqAofTY2GWooct7yvEZ5WqrZy1EespT"
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
