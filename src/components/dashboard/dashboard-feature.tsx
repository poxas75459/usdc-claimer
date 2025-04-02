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
    "678Y878NyWcKEFYVoT5kbY1H3HwcxbJqRf5NgVYtZSaLdhj4vM24TqqUFfgoxKbELr5DX8xTZBEXmR92zyuysy2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kHf9PYQtDL86h2cb8vs4eUeLLQKryUfCEeABPs5c7H7bA5Pmbf5hav92Q3JzJsDxsEErKv4moo9AFEQHfvHp4t",
  "key1": "4uPVhnta8BzzYc1peFNRivuaFJpxPrrzA72JiurYxHcKSstHiW65cqUmLLnkapRNmeG9Ci8Znb9LGnbW1iZsrrBE",
  "key2": "4A33cvq3Jrh3xx7trwpY6buX8Ktxxw2bat95YkTbwJVDwQPrZAFZkpmnaT2QgsYekJ6Sk9mARwkG7QwqsH2UyvkE",
  "key3": "27rM9gQZcuQuBDwKRQXSdQwYZA9THFBKBQxx6J2cmq4DUGhkLmbb8QLwk9Ff1x5MABVZMeFBoeKDM8HpYXPaFjwt",
  "key4": "2UzbMe4Y4nLTZzJZw3aKcJic2H8267Z2uwWZz6AKREGE5fRVrPetiEWuJDBjT7a3KNM7mJ6WhSrn2ev4Di1PM6Ak",
  "key5": "42fcie66NV41ngfnzaD7kdsJxQCpwyQAK77QJD8atH2KGVvL5EVwZvFWFFcNyXMevsNt7Kyoha2nwSuUPb2GMAum",
  "key6": "zMWvTALFjFbFyWT5c3hhqhfs7sY7VYVaDmQ4rV5aLCG9M7JXyc59BffE9vPrDCZ5QgRHw16QWSgyHVQoSF7F9MJ",
  "key7": "4MLZEJgXR49rNjAVd8xxpwpsYGHSzBoqTGifZ8i4JHdsgtktnmf4EviTAQyXDCDKiT8uBBKmKf4BWSuhzMXPfn1v",
  "key8": "5cAxWbyta1zQJ4idfdMqACy2uLBsztB3Tb9muoks6N9fv8vbcXrfirBzX1nVdRGXfzL6FSTzjrzQ3Ui3frgn6G2o",
  "key9": "kBDGD5HknWK45EJDezhSRErMDCWXiob71tgF9aipZMS6EmAJL8uxG96yuT4UTXjtg2w2kRREHvxpeNY3wvB2R4F",
  "key10": "2TP1n4gibHpdDBMWr21MqbWXqkAoCoFFRi2pU4FgP8Q82TZoqNXbdFxFoggsP7jamFRSpJsf6dREe73c4gyrq7xG",
  "key11": "ZqnLiXnGdtcEjsaFWZxwRz3ZWKqHvzZ9R7h1APGj4w7Xvy5AG32aYNRHoQUFQoWRhta4C4iSkzJ7LtYxAbgLNiG",
  "key12": "31p26HmfbAYZ5GGnoXDj3iP7BwTKdXB9Jq3vjWJ7vhRTyWmebhmJjHQkzYXawsz4xq4MyJ7RkDHHZu5nPj6BEXDR",
  "key13": "3FDYDA3au788TkCfbiMDxuAFzRtwEdKaaqS5qacm9L6vTj6JT6wvfRJXnDXfaLmgUY1AqKncHdkPbkAmX876UTrm",
  "key14": "5H7b3gy6bSycWr4EhLT6R7dWQrBRVZAatARmG88rLNn84Ct2k1nV3oUWXDUgYQc6ouQMgcNGrj4GPhS85jXcKcqn",
  "key15": "2zNhS8ZBbRqTqJCAyMsc2sXG6xYVou4HcFHbciVU6XnYn8STJWoKpziVdVsvqJyUThDuC8y5XPCLa1Fxb9e8dk6r",
  "key16": "3K1se2pPUBrfsGPDWtRZ8NSWDfNc5cLMFdzEfq1NoGLFzZ7LNoBj3pcwk8EGzYRwsDQ2gwhemGTEueuXKjYKtfsc",
  "key17": "2dyffxcE5tPUAgysidDAabg4BZo6RytH2qfD7vLCA7nD3H4b74JZWC8yRoS3odo2RahVRFgpoSKVRa1BQLLuhREi",
  "key18": "58a2DCrAE3c5cuE1mANhUqqyUVad2HmjDfBoqbYM2PcUgxr2hm1GhkJCrMd2qjXTL7mZvjAMP5pWbJiUBNLdfMjz",
  "key19": "HxTUP9ubF38LkmJghahYVu6Ln25C4nwGBHbRBynJWi8NmsTEi6fafACpLVSm9AYJQSUUbWmPhqCqZw6QuJwd6bF",
  "key20": "46XNoR1TqVThRDGrLXAQStKch3CwMfscXjSra3kAeMmiFUcBPr6LKUmHxU1yJkz35T4uZpaFMVMNppF3mxVt97rj",
  "key21": "4E2n1TW9quKj3pF64qQAnQMG9nMLUgctPb3emgaxPcsAnJZi27LmVoSB8MeZdsyxp39wDRFZncKczeZgBwsGAqFZ",
  "key22": "2LXRRCd37acevPehvRKxZRZfokpEKdv1sm6r91erMTdEHt4CPoAWrjeZ8gSMZjBwFZithUAsRZ6tEQ9BFgn5kG1s",
  "key23": "631KBvuHbxMa6G9DnNhF1ArpkZXyq5biZze3S1ZsSnVqzXjtjm6FgDNj2E7QkWhT4xSmwxfr57GGcsMhVeSkJAQJ",
  "key24": "4fa8wNeSVA27QFPg1GkdVYLibfqiUBf8Gedcze3qo2ZJ5MWmozdQH7uQDem5MdF6jYwxZ7ePnMEzugvk8PD1w77o",
  "key25": "5r3XkbRr8FBcQGqUhPRJYaofEyKSoS4oqagWsGtrofH8zhbWvrA2XYZkLRy2GtUxWuB1GNhYNRSvSAsFWRXEqeJ",
  "key26": "2GjW88PpFRiHQXJZRDM3aVZ6uWT5r2N2QGgSa2ZDtFgoR6RuRbGqvKnqtRs5Ykhc4SSTkYGuMcfTGTnjmJveoQvE",
  "key27": "2AeRtSwrybwKnpxtEurKou4FcAPeG4gTeMzs818pG2pJt9WE6uSzu6Dyzf9SZA4DigJvNvdTBWzj4Eo6abJqXHxm",
  "key28": "4sQL3kiqJcsiVRmE3yKqHC8kvijoXk6z9UeA9R589bSQRXn9yaGCt4qYMoVKh4coVEvCqb6dN1PcKLGSxMzy9T27",
  "key29": "3RANnibq17n5abJBetYKbhQj7j2jMuyoxjiRpZ6uPXg7gRSmoQxR8S4U42gHxNsm7y7RdG8tQ8ASfWRso6xpj9g1",
  "key30": "56kbKLw45euWiS4cvWkr97ECjECg9bQq5fmBHkQucC28qtECLE16XpE6Met514SFozrGjtQomTKXHTb9YiyodBjb"
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
