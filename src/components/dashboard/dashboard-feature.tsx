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
    "5SSenGPTENEJWuK6q5mqdTZVT7rbYJEVuvLFf6QaScrS9i5HaxikEneeo3qbFhpocQvHw8vzzLjQeAug7Db71Wph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UY876KVth89ua46qG88VwFQ5WWPmhG1Gd4cSovoUk3DG7xjzGPrb7ePhRS5aUbVb34EGiMwof9ypBqiGtEPNdhn",
  "key1": "39xPw66Xg1ecWnR4HZKQdxL1DYv6GK1XzvooRL9HZaBQLPdb3gmsN65TkunxJE62XPphoYEy6ifBfkvZ8GjsDmrK",
  "key2": "5FgkZPmAWbE58ZS6CZKxqwFE7P5b6XYmGh6jfrHvRi4zSXxstyNZ1Tn4WZ3kVVVusjkH2KhYW5c1AqfaHuf4hHjK",
  "key3": "VDesJcjU1JDAybu9eXakoptZhAaP7pBjM3AmBXj5fUByoadzipzYXGKLY9Bs3JzEMk7fjnKbVr7nmywbf7cEMxm",
  "key4": "LXeSPqfzxP6p91wzSJX6XtihB5BKLimRDLXHwv3fa71cBQXzL9rb1nKGFMxszGS7FraiqnQz4CTmS5M9cupBWHW",
  "key5": "4UseqvENfVRk8S6etrmWvwpouLTfzKwxkMsS1yPhB1nYTgMm92nxbYu2e31kQfpia4gUCzrWa8Mx5q5J9xe2c721",
  "key6": "L7uPCfzRvF8n96mKMrsViVAjsX4ZxUZYWP4wmFsZMpaHckX5MiAWwiPr4uTLvSwaX21r4bQBzujXTM57u2TvYf7",
  "key7": "3mJsBNrNx9jcKx7GEdVsM1HJfECwREBzgWkFFDRiAvZ372BhuBESceD1PoNrRFXeAEZcZUcS9thBRF3p6AwWrkyw",
  "key8": "4qaW9ZxXn87tTMuJkNu6u1Mjnbx3p7bMXKgkYde2geAsj9T3a8j21WJXuMxzmxPEMMy3PhLQ5BQnuvRj8uxWTQbg",
  "key9": "2HArdxa7UvsGdjKUrk18D6du7XbjEu9YnnCXHBXrxoRGtFEGvHKdapnTJn9hvJCA5q4pxueJKDY5nmb6UAyBcbrt",
  "key10": "3sMXyzr7JGY3xrr4wAK31jX1fwCeCyiyD2zFN6Vbo6zWdbyhKGEnLDWKBNFtAHVcYNDAUBHn4tH6orRDGV2xfcU3",
  "key11": "2oXwhpeqEZcd8oNZKSfGkNNpzGE4eem1CHDmo2jsYqLVvKJekgND9rG8qq9kEMccShPGftdyjWe4D9sWb4kAd9ue",
  "key12": "5AToYdYLq8RVuZnpiBgm516sKuDq2pQo5MQJokLCNoT5V2dp96uVF6RCPPZKM69MR3cFWStFUUwZ5GtzpfziRFt9",
  "key13": "MgGgJwonoCkS77pQeMLHMvXc4hfo6H7P5zfhdvUCQYeJP4Nma1d5AnMqjwfvXV3j2e7uT5yhDivDrfrdu51ZDA2",
  "key14": "5PzQcQk3Byo31GMhUZhnfKEy3fHLnMEY8QUkqTNr4pWQFX42AvAuhqneSDTXKR8AWQEhTkCA3rbkHeza9ZuYs44g",
  "key15": "5sncvL7Qh5nEY8RkMWaYz3waaHPV5hYXXmb7LL49r473of9BSAzHLtm9i6UqQpNfMHbTSyFMyRjLbV6z4gNqbTZN",
  "key16": "LxZLeSTnzon5dBGYRgHcYy18hw7GC737NWWRmWCmMQvzyVxGPLnzcCANMA4QQoqRz1EiaoE57HN4ekAmfbB4tff",
  "key17": "rkwDy1a6TY4HPj81QFrQf1bDzSk9YbEZwoPxAc32hr9R7hFziPYgWiD5VSrrf3UafRqKXnPX1999yUDzaVdfuhn",
  "key18": "Nek1XeqcxdKYARWQqtfLcADkAUSUcFDKWZhNe9drjEVs5W7ASXnBjMTvMwRqsQ8rQdoTq4SEGgGm8eXsXKLT1LR",
  "key19": "3Dv3UEZVxh7ki9bx7NgrieHeEsydWZm44Ro953DCoRphLKXuSopcHix5Axs7K2iXpfQuEtHhKNTMFLpNuTAZUVfh",
  "key20": "5JmcLBz9bNkFw1M54BkCUWMjAZCeEeopjkpRK7AESc9KiudLeMb8D1kp19UMnQwNrGQBUQF4sVRfqTCYfKE9fbGr",
  "key21": "3ShhVFg6QUk3LnWkKutz12BWExVY5efhtUmpZ18ZchsiLrfMkAB7bBLBSp6Y5UhnfsJCutxYyS7psZrAwc6YvrsS",
  "key22": "4gi5hJYGUUZ7jpXrFeWvcPEEkiuKJsjintH1U11M1xU7MgZHiFr599jKozSSMJM4vY5B2iCxrEbNaRYjiz89kXq5",
  "key23": "5aYwBtzxwfYdoU7z7HCdpvjGbqYFkSpSwETAA5rY9QmmiA8n1ZMUSN2bEH3GiYD4qKFJfDpEnS9WZgKUHzVMa3bu",
  "key24": "5jBFi4RzE9XuVquSQhYhydEQvMaPzLXHQNP4SwoR9PxtZF3BFSLzenZc6i6hsQ1UPUxTKSdVMfUnDFejzYfXFipb",
  "key25": "2LBDCXyUYaXbZqVsAtK4YFgXAPVsEgCqJmSLKtvfWdEXCBvHTVwHYQaoJNvXEQBCnpTc6bFdsvkEMMtmUVTWWHBm",
  "key26": "TALk8cpjk849ap82qNbLvgkPuUv6otYD9zsqa4nDW8QLkiWsbQGJQQEqe2Q9DwSqQuUdfRKrHeXjVWrtDBUp3ug"
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
