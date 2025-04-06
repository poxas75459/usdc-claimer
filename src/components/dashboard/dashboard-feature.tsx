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
    "27mnztY3jXicm72amu7fVATsJ7Pa4qfZEDiL313EvJD9mSJAYNRvJDshCD3SLvyidbNAnmtWqUEyAZiKafFmaNNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyLTnEncxebSnSD4v56hTynJ92DvztkdzF5T2pTaAvxWG4NaFHfUJvEaNyHVnTTvqdMzY4drd94g8cQJKoVqYhk",
  "key1": "6GAUSd8Hm9HS157TkpqCdKfujhJfEwFZZBD3CTeCwQZuHMgp3MFT8eFRS5xQ96jcuUv46wCDEhxSFqvEktcor5E",
  "key2": "4xEhhT4Z99i4MeWKPoBef9o8ZZ5KftMyw1gu2jTwyzij5t6tAMME4hNHV6Ugu9FMrXhRyW24ugLihMHSuHtpSUaT",
  "key3": "8ZqqYAMYfPas3eCswHvKFmWufdUCR7P3M7FnbMUNWFJELDEy54NGVpkY254LhQa2KnuTS2ncZdxatKR8FdhVx38",
  "key4": "24sWGR5vVe77AWBtmsNADPkRCETmh7DCev2DJcpt7vWTUqcuFzpRGYyYqmAC3z2mqC2JvQk1dshysxL9t5dsznNE",
  "key5": "674xUFKxeGvUkXTuJduGoXoV2FUkA1yYGBHsm7HzVoY8v4sYGi4StmPNAJ2WNifddDRWPaMqMWAiGidS21hDABtN",
  "key6": "3j7QfWTz7pQJasR64XQqwq4MHWVjHgfU6Aa55nPbrwFukasDdTkh2jdcvoXRBh9zz1Dpp5MGduaFCj8Ju8BoF7ZP",
  "key7": "yB4b8DU3iiG1drJe7kXyXVX28WpJUiWDvTXGzrYsbt6e63r7pbpkvydPjdAbPpFZyaryQgm9aoqN9GTtMKvhNYq",
  "key8": "5s83nozJ6gjFeZtRWBVB4N7ApA9FAZpm2XUGmkVRkKpT98z38qUfGv1KZtWendDsEnAygZjs3dJU6BRpV1fBebNm",
  "key9": "3sTQHv6x5SriHRB6TBP6gMhZdMwHyGZnF57uh1hHiCnykfL7Uvi6MgnXoYS5EfV4uhvRA8Z6wFLfqWwSdQ8UWEff",
  "key10": "2nd2oNdyJhNB7U69DpM5Fsxqd91jq6NYwAorpEMEB2neLku2icXYKmGrWQFehA4Vatd4ZjLgJfyn5EnE2YBdMhLL",
  "key11": "5pxSTFzcesekK3LjMZDEZ1r9EuMi16VbXrPT942QMir4rMESFqWHbCzDXmfzoaLyhGDBdgjc79cCuni54EocDUbo",
  "key12": "2CNdcHgSjY9W9R234ftavqjNdtV3cqX35Lgu2pefYHKjT879zdrDmu6zDGxcSg8KZkpXUBwwUPC4aZSGazo7orgJ",
  "key13": "2GAKGPacEGYFsM1wdkX7mTLUeCT7q1A7rkiEUTRRRC2gWEw8Jxup1ePwqzPnwRuKG1SVJBXxPyUQiehgD7D7YTDj",
  "key14": "5GzWeygYDxUhKomyJb95DoSmHpomNrDw24GHvVZqX9jk4zX2hAyYVrdC1TdeoymehVNX5NNNBKQJMCQh1kc5bmMK",
  "key15": "37iFh82TKtBCA9Rn7XKDz37TczSYpxZ9tm4hrKamtYL3ByUFAmvs4kvrLJCj67PhArvVEMi9zreVy9kqZ91kSb9G",
  "key16": "iZ6rvcMf1FbMTsezSj3jRg7uptumenAXpEoAcGFMhhEx38LnRKxfR1MXT6NfEmbNjdkoCYTxWUik4x9vRLHyfQ5",
  "key17": "2tJVgyc5FtheiAHxPQhp1NfpUfVG1Wu8yvS514WWypCFy6D9Y6fzrWMFfqP14AyaX2FFShWGo6E2p9qoK1S8AJke",
  "key18": "Ejacs5Pc5Etp4ThuS1EqCuiKuFV8qbqhrFQMFxtvUJAZYdj9aSC8hrdMweiVCapK4uyBkT92qqHfRQiBHBLKhUp",
  "key19": "2rHMuS99qAaHMfEMSkegoxwQa9awZcwK7JTDt1Va1j7T2qT77PQN8JddHQZjWQnbnQVENoKUcSTieJVFbVMf7cnF",
  "key20": "Mdaz9xh114W1VnNELvp7cSM79jBE9VgiTpAT91UvsAyrL96P97Hne6Eejh689jNuttAk38daWz1b66BDScKAJhX",
  "key21": "23Rt2JgnQ3q3ZcaohvkTKTpMrfbCSvR6cY8No56sSezEKzYZrchLkP6N8jzGPsMobdbvv3Uje4sEur3L5QHpmyHH",
  "key22": "4dNrYGr8Nij1WV75xPHUkaZSjkVmn5FvJ5sS9zbtWChXbPhftBLii89v6iSiQ23Njb1n38MTY5D5gdkM4Xh1KLWq",
  "key23": "3TrX1wPDezCEudop7gBNCen5VPxaDw4xcpfjQ8pmeoxSdWiCkBVD1U5g93ZkNRNYskGfTrCsL6yEBGVRQFEbUPmv",
  "key24": "3kciQ1VLWWmUp48S6CoyxiFep451tpJBQwWrdnivnstHJZghY4wQ1BMLj1ExTvjvDde25qH7h4h2XgJaxujtJBXT",
  "key25": "3EmV3tuzgiX4rVppg5SdMpJXjFQ6zprEffLpMb9JnHeafejPPGDYoJqUfwMUss4AUbUiGNXBHNV8n5bqCw5wfyMc",
  "key26": "5o6Ua2urtaVVdNjptwor9LWXwvBcRTDuV6KnNd43AjH94UhEm9BRADZVUNqtxptdPZis7XKgHhFXYRrSJ1gdumkL",
  "key27": "21B8uxSoqKzq2JQ8R3osd861wi9vWV1hyfx4ZxUYyof5LnK7wonBNGAcYniXR2rZmY5R4dx8qaDBw9ZmoW3i9x5P"
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
