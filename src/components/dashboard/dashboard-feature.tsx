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
    "YoehAT7Qa785ywHe6ojeHgh7mhBKrwSaeE4kmYns1hZcn8EVr6RAYbiXTtj2SBQgGjvkKpEc7Mx2N6DGG5zdwnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K5TQuGnv224XsBGA89z67aau7VtNinFQmfAqRG7J42DKKbFvsEtVi9eq6pMujdbWzwJLNZHToDPUmKCoT8tm1Ba",
  "key1": "3cCJUjZqu3EHUF82oSJ1eTNQtDSshuwcBep7Kn1U4iCXNbSKmwfRiWW7EmkCr5hL8Hgk5WLCJ5ZRLvhyEbYhd3x4",
  "key2": "3xZZwcLs3WyPKSEepH5bzUWGNfXvNNXsPvsJoBoZ7agJ43eVZRZwZohPSg67GTweKA4C7ZtLnoSdk9MA3TPFEBFg",
  "key3": "38HbFzkusYXvDe3Uq3fYbVKpnMtdPXcb2QFD5Nxvr1HYZbWHr9nH4GErA7xqT5XyxrVjd37GuvfQCtEoA37m4Ktu",
  "key4": "32Xwpk9bWfw3ECdzZaKBQco7CF26wZ5vVG94x2ujZhC4DEpj3j9vmuZicxkd66QN4BtnnSqxU2MtvapjaF5TKHuT",
  "key5": "2PuehNtrMEwTtcgsgN1JQngEusLHSVQM35dTKyXRTJa9a81G1cfiX7LV7g2tnc6DtWRsz2Fs6kGTSDynZS4bdaXn",
  "key6": "brvetMVeJf4VovBUCpGLi7HQERfESYNBbKa1ZMvtUDq7VLJR6S5cMrzLdSLNxAB1zff4x46WCEUUTEkUWanuxQb",
  "key7": "3S1CwS3CHM4ydkK2YmP8q6N2yhkLgHEfKGtpvdSN2bPYkbBG2xzRqPyyoj3kxG5bB96S4s3kVycxgf8crGW7gj6V",
  "key8": "5T1CvsPZaThfuwkVWkDoxP3xsoAKxcJVoMUc42LVbgvDQkJ3DZQUzMwi9SRZmCtQp2AgKmyxTb659n15NVeCwaZY",
  "key9": "3DvBMhNBGNwLHKwUanij2WqPeyzxvF1QA3YgMXh5Z2kkoYYSNmmyH45JY2N3m5g6t16vomP6kQAuV78S8owHDchc",
  "key10": "5ACQJusGnUgXR4nJHV88XnyzGapNQRHaVdfgTwMGv5e2PwHDgTffXxbhStVZvN2dzg13tmC9AsdtcTTJUj9QTMFa",
  "key11": "326W6zFPJEdR4umyPAQ6ogTGzzaYuT5gCektAVr9cYMEqdwGniDaWTcDtLRyK4v6qXtBrT23Ts5Yz8E2ynGuC9Zy",
  "key12": "3mwNhxTqAz3FWih8GtnyNgZDZDD6oew4cFGgbo9rZh66YxZ8oe2cNgrvHeCkBQJcjJAc2sZ7ecNW1zQN8zDyMR9v",
  "key13": "5p7tj5ycjgc5frHwwh9pgoFrHomphHihA1ARpMQqsBTmEGMkBHXTitY3fTe2Y5Wyrcxrpr9PF2YCFdDsWwjdUgjt",
  "key14": "4x6usD1wA168pmZXZy7Cbr6LMUqodnWSsG44JaCd4LYoK3jBEuCayJguJgpWP9eDMuBGaq19PmpgN8CY4S9fK58c",
  "key15": "5hisfAr9phyZdqpXN2mTnUaT6GvwXW88AWnehf3qoBfphhxmstTRzcaTJNZvk8gSbSTuNUtAoocJCJXVthEaizGq",
  "key16": "5RMrED9LDHwhGdfF8UyjoKMAQrAfEFrkJhvMXy7L3QnBBXjU1YSHARLWdBfAANWof5B2u2QAmbg5BqQL8veBxqF7",
  "key17": "2zfp9bEensHEkFkG2wqMzVCis5osCywm6i34uUxUKrjv9MnhusnRaqjvjTpgEuDaHzNg2xYUeahNxMaALhfXFJj7",
  "key18": "32Ayek3McnXMuX9Du8GqY6q963mGJ3NNPBcMxhLWcZgKfHbcdNnEag44opXsa87jDLwry3HvaZ2RxdWCW3bCWBSH",
  "key19": "5gL9fa3K3g4YLEB1Hom5iod8R3oddqpWesNJnu2bR1HtY4i6oKcPARDoAP6KrhVLx7PN9MHq2qRDtqxk9X89a8UD",
  "key20": "41GBYm7TvU6y4qRL7vooamdQBF3uVsmAnwDDmN1f7BziEDYv1bJdfZkFgZuVAo293fhKLsbZ5SzdBcZn2qc6Qe2W",
  "key21": "2ELWGzrKC8AuK9u3u9jqt6DRGe6qcbhSN29o85MXRgYwLo7DxdeEYnDPtTJhJxyZb3H1YU2jNTm7ZzxUngyE1dwG",
  "key22": "m3hWWn3bRVuzPnayqkqmvgWyuwQ4jAx3NjFPkuzQ8ZKNjaWYM5UoB8eHeZwTMvYYhf1e39RbtxKZUhRj2329ToH",
  "key23": "2c3pEXJRBFcxonephxfZJuiGsayzZbBeuY5ZK55mWR8fMCap2GDM5GCTUqW5P7ManvpM9NytnNVcbrRWPM66eBCU",
  "key24": "CD8TnNdGnkpiE3mLPFNmktuw3DwQVqnpgiDrBzcPG86ftUbJu2FNwbrRi6Li3KPuHb7zFbWUwKEPN3mwBh8EaHz",
  "key25": "4xq1p8StMLb64gvR9UiKhbCp6fqyx7HeSJkMBSpJrPYBnUf2kuAiwiw5HomgbDCZjryPGpK3oZgEdcsH7Mmx9tTf",
  "key26": "2KV84BKQF6Ht4tHVW5nWAcQaMANgshgB4XzqpMdgQGCrEGLeirD96qG2wKeA2o9qaMMHcQvDaTeJxegLjcCaAGm4",
  "key27": "n6MWAd3eC2sDGz83rnFKnjDWzacE5Pn8fBFMoVmb4aAi1UR8WvWcyth3hsH98EgsPx6FvMkEYhWcgDDjjJhHi8d",
  "key28": "AowG8uPKbKK5VrJjozBhZzAtS8vyueDoGBJo7fymMsa1p1WkXmMTfmt8bjHQVeqmc7TPJvpvmTkT6uJJG2hy9qW",
  "key29": "5s4eUsBwwoFKe1tBfCQtmBa7xzP1Fikfof3MJW46rpnxmj5KS6fxgWFdi7FiPQHhpmZpU2CZQa3hiskVPLFrB4S",
  "key30": "524WNuCuyV8rqTkgW1tAbvfTn7oCfntzrz5qiyZFCquHP7VUgLSUWtWHwxvebPaDUuNXt8x5qoxbkFFVB2BJTC8m",
  "key31": "5eeF3gvG4PjCx18hUCxG6UMsFi7RuGkgmLZeE4YghULQFBQYTd9NsGpSLagK64kExAUGpp1FUGsP5yPW5R7dGVSo",
  "key32": "21DP8TgihvdaMhbvRq4oNCyodjPSBx9VWzG9phj6pV8qGcDVUcqJ842G53uxX7gwurvmMc9HKcNisETGAyueaGFD",
  "key33": "41VqGC6rP6E6WaLaBkYaWS7g8yVRrBp6XF6FtMzHyaofYUfKhXL9zEZMjeQzfovyERNk3aQ1yeZQidmztCbcNxsz",
  "key34": "4wKBoJCnvyrEAn2PwDMHHYVbH7hNqFcwy5866brnukMAczCTuhD961W4biGjtEWmUoRYUby2wJfb8M3QjBv8T73b"
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
