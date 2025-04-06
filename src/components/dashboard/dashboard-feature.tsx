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
    "pC99YxCseZy2Kj5U3kgkHMCkGfibLDm3NoPkEjQgKkvSMzDP2GNhbtQFA7f5B1yxNrnCMnckxh2uWPZsXj7Uzdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMhbZ3ghLMcpcLDRf71AQPKLTBAshQNBmEUYFkbgMKxSFYx1B9y53e8aNeBNSkBunC6ueJ6pvJeMbA62EYm1qrY",
  "key1": "5hNt2hNcEkFsDDrkGKcjAvoe2qG8KQMehCJyit1fezFHz27vQ4Wzd7dhrJaokigUehocXcvJcQDae3KxvgR4Mwkp",
  "key2": "3N4mP9Lxo24ikex7MYBbdZfLf2gAws7sL4Auk96EAz97ZkDaXrkhSUWc6G4qy75dHvSTFhtPZ98Rb3gXhnmo9NSm",
  "key3": "ehdTZhwznCJ14SMJw2EQEYffUTNBoFhWjMBjFe9PfBmJH3A8qE6hgM2L1A6AqEFWW8QM97W2oR87qCiSVYw7XNM",
  "key4": "aMxYMYkw4TFm1ZJSvmY3QrqKKic1AVKptk33oFwgA8dyHE5CZVyXmzSKYwmCfLM1Zs22TY9N2ap7ehx8AGu5T4d",
  "key5": "3mxdJGzgSyCYRYr5oQjsjmCtJv3ipo9RKZQLXi5GzfCxPRQ8dDZGUDaWi8STFciVYfzm4PbykoPmrAFuawHwRGHP",
  "key6": "44G2hrqKnFXFREA5BW6rVBRNLnMWKY2Vqf8mq5HcvhhYswoadNJFB8uDgDLfu1gu7QgiZHE8otUqy2Bo5z1Qy5KK",
  "key7": "y7VCj7oZrfXXVbVtHPZYjBRNeecjvVSG3zetqurNyHSx8QNbTEAmJrwxritCQnVFsENYKzZmbdEdtm2r8d9H7AG",
  "key8": "63RSmiycTF1P6BvVatAw4XdgBuZDVCCa7Ziepob3iwfA3nQkDKmsL5D7AUya2kE4dBLxH4AS8Q4NMNu6A6kjzDcv",
  "key9": "3W9EAPRQKPVFzzWaekzDnxqDGiFw3sAu9MYfGS3fuFMyVPtqizVLXixLqad27VzfCpyfrnCyEKKYS5ZBSdukUuSM",
  "key10": "47aUx2L1V2V41V2KvX7cACN8bNDp1TJYo6ma4bT3hDvFMY3FZCGFzGuaUQ9qJsHShKbhPiuDgmuCuzBZjaMvjspM",
  "key11": "fjAnsKwhfqoE9cgDBjaXBZxbKmu7ZUKkV9iKFZzp7nQgeBgWj6LfegyuEfLnueVSQe8gzBpasPf1ekvsWuKRiX9",
  "key12": "21bBn7d4KyHK4Rmd8rqLUSkPGrCW814aLfCGBb9nF9FGSSokdyqNGjNetiqJaoMzcQt6AZjEx6H1aA73ugGQFXXm",
  "key13": "5CnBEgxZzr811BxTpCXvSGK12bY5mqcQenTSbRf83TibxcKZiCCWhw4QAJyhpFtuQcFFzD4ACxmsD8djQcwcvVkW",
  "key14": "3ePw9FY3gnzDf5x1XUTeFfFZnhuGdQM2w8jV6JBe2ZWRkQqP56KK314nM99w77qzK5kizNJ86LWoLthzA111BMkf",
  "key15": "7vW8poXax6HLFjMEXES9NapfULPdhWYjuV5NorU2jNnR3CMPWtP58smQG9YufJf44dNKRCwyULcNSEoyuB55CuY",
  "key16": "2SL7hwpPct3VUXdB44RA565vhBsojR2Xvw3Nj6ZHw6TYvtVBrpgYMPuprureQuwk3j7BMJxTUNWUfBEJjJaUXuud",
  "key17": "3Y7Rs8gGpErsQTwvEuAjRGvi61krKtnjv2h7mQxX3hgz6cBNyv8vH7X1KVwsfVGSSiy4x9Q5pBbqHBWAAhL7rWBd",
  "key18": "5H89Di3LQ4yioPJm9Xp8ygbHFFPNsAWWLXFrH8mVYknPf24Gf9TASAPHi7PpaQRu3HPthnpy4xAcpHaeoHBnjVV",
  "key19": "2FWumV3xCRjWvL36RtWiFGfbd8jkdxosDP82YdXCz4D6PNG9vr3kq3Mzoo91CvkzLVP7p2mvbE7TzppuEiLH4vXs",
  "key20": "ihyXxAC37Wxfu9AtJVQKCHUAzGBmtV74ofNKoC1siJfRJbaFAHcASXYiUdQgTvxKwgbRBwWpYLQmGD3gVxqMVaH",
  "key21": "2a67JcQbVxESSd4eZy9L5koWMu28JrodemrM87one6eQZ6Hp7bgnsxM6nDYEhYGJZN93oE4N6xHfzNXRST4z5Du8",
  "key22": "3PASPEf1yPdSR14QztW2rCxpaN4tB1uA1VyNhLRQevCPWm6bu4nJhDScdSTPSwy1QNzJUmzuRHpTMRzEUiipHnLE",
  "key23": "3869mJoK3HwsmWZK6zGsGPrzACVn7GKtxyR4ac95fSAjXUf2D9UvA7WoUGziWdfz78waWYmxGCEJui7iBbPHvzAf",
  "key24": "2iZ1kmTH18s1V64NvKgQDzX7mjWLcCeeFqMdaTdjVNu18CE14PhCH8YBxc3oJC8EdGM46bzRAFs9q6awqs9kJFT8",
  "key25": "4hi2pjDe719FaksYiu6cn7QPkT8sggN2qxVBEYNiRUGMdjsjJk8krT38gdSrw7vvEdYhJ7TuET3gHKzdsYCoDLAq"
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
