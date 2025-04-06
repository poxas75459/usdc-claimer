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
    "3r462tXizzcijMVddF2vb5yaMzLFjt5A8ecNJeowXVFijzbsKHKdwvfxcHqNu41bfopaVgvp81Q7iayZXABQ3vHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259icPGPgCQ15ck2sLBfgcCCJDuVRxc4ycdhnRDHoTmy3v65WWaQa7wNyi1WSVSiteX74mUqvNB6UBaeTwNVZo3C",
  "key1": "5AnyAAcSKgt67mNANV6ToBJi1cB9Huaj5kgHY829AotNAGdLhYdFsnudz8k1eDmP3GA7vomtsj1yFyb8DU7aQxRL",
  "key2": "5KQuZ6rBoJwV6gBiSEQdY2SEFEhYqaE79B6edXBkUSR9PXNaQA5PD4KUh5GBKdrn2xVPJbjLWj9ZKKWKcZUK4H4T",
  "key3": "mitDhXpzv2ovVoAvYsHAL1KNpACzLaKhcKSkN4ZZR5TMSuLeFkbTjFVrdP3RYktvkdiB4pJC2hvLFj55TaLwGV4",
  "key4": "MC6XKEup1Zif2U4ALoDCRBwJUTqPEmugLKTk5J3Zw21zdW9hKdgJzyibR5ULYR5EUX9Wt9UpgPVFg4YoiLzAyhA",
  "key5": "5jFZ61Efzr67ptPQxZZ6jEtMq7X1tWDrbLi6gd4PixkRrm724ysNyjFNwMGQGAvsZutymXg22pe6pKLo41PMupT6",
  "key6": "64eigEo8rRBfR45fEAc7ZKhJz3c5ywDsK7A9UPb3YCmwocymZ6fFcZUttqhaSfA4mLdwQG1tQ6YHEnaPFU9oZnRg",
  "key7": "5oX6e5Fnk9wNZ5NNo9knYTji7Vpmks9eH7Km4gR3ov2eR7zDR9KjiRpht9GoyxYWMXQehzuZLLZikmkeUqSWufiM",
  "key8": "Y4Ktrvbr6WQvUuUrpFWwVtW2pDZiS4ci9GBD8ZBXWvVf1ombvyNhvgdUuPGNk98kJuz96i5d6QY7vQAHe7Cs7Bv",
  "key9": "5HQsU1f5MFsdRY2cQnLzopRE1koyr18Hj6bK75cDWTPrrr61QCEjRpD1xMogHrTyRsf5WvPqmeAhkEYGRr71vpHZ",
  "key10": "3hTi6zJzXeYc6wGcTMnWTj2UoTHXYv7a5Ps8uqiuRyThrRLS5LcpEUuoKR7SXYznpnzZJRhDwPLnDUPfNpNBwNb5",
  "key11": "36E8KrAywiFJANWQnQbVHvGy3f1FhSWrG5Kgc2huDUbEosfDCWrbWLD7JmkFBTS64rMwYquxHb8qHr3Jfs3ZfVot",
  "key12": "65cjoCvGvpomNLHFBd3XCbWf5mkQn9ovuywUuvNEaCondZjbgFsyn9saQujLG83aKBJBxUh4dF5UjRBDwmWcFq3x",
  "key13": "21kf8U3jbYfbWT72ZnA1Pv6pvLVvhq87eT4Zjgqixrqj6sdJBTcAX7rHcRiFZdCLjFzKXy1u6B6CrCQzX2rxvpxU",
  "key14": "2W2RueVuEtZs5D5oyg8BAdjwTSrxAgUEMSRV9DQXGjCsAKWqaEum5vpHuYRwwSJhnwSMG4ixAvCtuUMWsQm39bVo",
  "key15": "43ynHnvFRUb2MzaFK9kV88SKFTHsXNt3AVR4KrgomaULmrCaGB8ZRv6jxfEKfRNZvEe3Z4vKD9QcfheADuU6zLPH",
  "key16": "3KnsgscMuRyofEmJfRKnCnTTH9dZ4UWzUCnyQqtBmkc55CghMuSAX4DfN55Mb4LANJmEteZPDVR8hGt1upDyX6ii",
  "key17": "avy6FHG4kzTCDSeBHMShutXMUS9ZZyiTvW5FbptE59sckVehQsSL1txikYWyB1EeZyWYnfTLY164oZFaKU3Rq5V",
  "key18": "uSgXTG8hD4T9whTYwnPWvtkL9GSEJD7ugYHuPb72H3QSuuny6EGoxzjwSVanAigxX7uyrD3eQCu7eZietGYGZZD",
  "key19": "4Ho7V1NGBkZAJjFB3biW7yrK9AyYjMnBvBwSpA2ENkWSLM8SoHY9UCmNVJkoipp6zTiKn1VtBEaFBojDU6E89eyv",
  "key20": "5czteBxbBPi66X2qaCft25EiS7bfz6oubkQPZboBTqUregjQ2oUS6XKuN3YbU2vtfzMEsYo5khEED6oX4rGWzsVE",
  "key21": "46wred1pNchE1Y6B3BQrjWq14EgffzBF9KvbzsJEF7HnJDmBKg6VzdMyJkr3Bd9NWGtmYFJBps7oGGk4n6pNuCfB",
  "key22": "5MqYRzDc1j1WLZwJukiQnvbuqPJ1fT8VZauTT6E7cdoAZRAysjS43jiB17Kvesvx6kgh2WAACAJ6AzWZWoXY7wg6",
  "key23": "5CHonSxXdfkXmuoHYBonYmSky65psh44M86GWcEqre21dvYBZ6j4TwtRzDSAXsvaCS1scA1eE1qeNinaaGhWpDvr",
  "key24": "5oecvjhy3qjf3EWv6JjQPgdhMsMKMGQPPayAJfE3Rs7XZt6T5ZK24vhZsh1e1k1uBSUZzjMPbDzyQiqm1UvRQSB2",
  "key25": "41SbRfzGpVgCFZZ7nn4L1hUDSskTXbqdaGvEbe3n9yEUp8UNxvjj6x2BtRbkyQ8bGUYLrLJ5fJ3qJQETqMu1D5bo",
  "key26": "3u2Kv4zgWJWyxTa3AGnk1uoAC5Mf7D7bUbGu1zbL37pYTNm2aHMqUir2WPzKbTqtBC2sJ13HRNtw6mShnCQMnU5t",
  "key27": "7bwQyJ2psDkanz571GKnCmPK3dUqb2muCoJUpK3trnhQFFGzdChu11oPCnvdxoceKTLUyjCoShhU1eqixTgtEjG",
  "key28": "54AaXMbspmttZn3EMTMveS7j713MJM9iKbciKuFcn2FeZ9DBUUfK6BftQiUBHApN5hionZ2v96Zk9RtzfGKPDTQr",
  "key29": "4kF8g7ZvpfyTsNQhqBkHpLapkzVZTLU32LsX78KQtWJts4fBAmhJRs7yg7Ua6LhgjN7BAeB99gpf28sAe4BBQwH9"
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
