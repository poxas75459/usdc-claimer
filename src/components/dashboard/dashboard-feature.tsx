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
    "mZhM39By3peFnpiSivxHyrVe8MnJ5cwxD6fNf3Jh2Q7WAgwuJV7gNsJHPscBHUD9jJjJ1bJeyXNHgGCoQ7mps6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFgx7afgGoTfPt2KVwifvp9j7wc8Fh5De3FtSiwBAU6NKsiZECfjLQ3dWN3NgmEEY3DZDQJkfht9jLVbtDuQ9Gr",
  "key1": "5gcsTKPQ5o7Xeeird15KQtohGJJ8jbLfJf5ETzorwYXFwaXx3sn8gQfzYYLMUdhWowrZxGTWKQ28ZkREEw65jnT",
  "key2": "4cnLP37zonbtpazwEPYsgqfRmUrzRL3Rg4HYmXmdx3fpKa4TV5fNBczShF4VFQDYqrU5zWdyrJsHS5CosEFgYVKW",
  "key3": "mAcvp2Vf697x2in7b4uKHnsEpz4EF27DBJkpH8g2t8aLYkLdQC93FADh6qVMgECVjrHGF6bEw183KW6VhRKCm7m",
  "key4": "2z15ZFmiYA519a8J1rxMiwDvtPkC2XFcN13PffyWhDHLTv1ardNHT98EwJPy1VZaftS7GjBjrurQ28AgD99FhHtz",
  "key5": "4W2b7dUfESkkCK4naNK1PsBvdbFEcTLQToyPAHaUNCiGb62ct8N5UxR7zxtFSaxycGwVfJ2AZKvgY2ft8qE7HrUH",
  "key6": "PggPTBQwrBiyzuNszYMiujuzPg5qvuGCRzvUG6fFPkgmzCQFpUvUSVZZ9ijK3GDDyD48qRD1UUU5aeetSnSVWDG",
  "key7": "2mZtA1p8RYTt2W4ZcMtdy5nUCMqHkZDG8oaDFDbA1Qh1KjawbigGGmQSM6cLe8PDAzemFu64PFDbfy879MQQbnp3",
  "key8": "3rwfJ4UvDkKK26bvfNePfLF8rs8HZrTtWmnAaEheN1S6bHY5UG3o7qrJ4tyJNJ4LBkzuwjmkVqdcA9FpEnx8BD3r",
  "key9": "45udW7n3TGP6Y3DyGv447qjhiGqZpR92GBcg1LfGf3dU8UvrHmTcwX4PHy2zvU2UQmo8TRafwmHU2xK7F2h24jGe",
  "key10": "o8VXrMQS25mgazKrodNYbQSZPruUUtvyzduKgMRPDhTwRLVrq8Wr7cFidRmaPCz2fFwTp6PoYV8TLS4Vc166AUF",
  "key11": "3EenvwPWHpypf9NXAWefKnaqhhKqhtuFzhzWK3PybvvbK3Ts8vd2i7SWHsfiqSUs3x7zoDbX7RLDVVbbxg3BnDtz",
  "key12": "2yKoeyAFD7DFe1AJDJtwdifVZAzdSUR18NbZ4LrpntincsPWzwpfKSJ96WJkkZmjn3WRVeksCJCx93tUudFP7ntg",
  "key13": "xyo9YEKuU7Z5fs6RsYMusUAi3ZzfNyQHYGJiNBDT8UVHTL9dkASeWuCp4jmtArCUbN4FLA1PBwtf1RhTdBqfE1j",
  "key14": "2XU3279tkyJQWQ3sGr75w3wXZekktW3md9xEHa19HDgdw6y2eNC3tb21AR5S8eqKHzHcbBw7gtjiiesZ5aYMwMak",
  "key15": "2KzSBpBhbtWi6Sj7Qt82SRen8vWwQxhNzz7YxK4rtgf2uAq8XrxykZ5azXmYp6nAp3STANXhaVkVPpUPXBMRWGNd",
  "key16": "4eCMTcf5WACS3NvVXG8ziZw9412NytchJF6nS4SbBYppuWsnsKxj9FCNcYDHLg6Ls3c6PSj892Mg3TauxsUheDr9",
  "key17": "4EytgWCkvzAB4UPE9v4d8JpVzgsMAmhJnh9iaV8JBHT2WnSa6SoVG2QHZaWWZsKj3nj9fgPZbgAgQivR1GtHhZ18",
  "key18": "3qkHJdpb5RikEeyNU1okGXqghjTpWzaWiXSVsYCpEFrBUwDhKc5Lq1YboGmVE6Z5fuTstJNHBoT1hc8Lp8HJFCLe",
  "key19": "2eT6Fe7Z9Zgd6k3FGNZAyeYBXu3rNWEPAXYRtXs3CNGXEqo3uN33nmha4k9WQhUdJivv1DC7AQiyDZGVk9Bg18fL",
  "key20": "4eQSefJavB1XyqsnzAJXpBaqk4gBU4ua3PZftuHfxneSm89jWWszMFiueyx7VhGvjCRTmih5fwJwA9jo5XsbstK5",
  "key21": "BBugqkihJ1f4W3DVHJ8fPE1AdVYKQL9ihEomMX6uK4fcBNwWNCMzFAMU4AZKE6QzCzf5is7FFJu6wodY2Wrex4A",
  "key22": "3PN1718x3SNJDzU9KKPnZ8kZTJm5XaNdYjmikXjjragpvuPhtc2cSNkBcS9nakDJxht4atqhn8xcHse5FBTchTp2",
  "key23": "3BgGA1tXHw315YmzXMNkYNpuwBKecoKGQxrmrCHbtwF2vMmgHc1AzjrbwdyXhryEryBt2nRLvMVKNf9qgqaQrhA1",
  "key24": "HUVs1QRCPDV3w44pGWzqMwXfbGc5dJ56vwH7b9rP34WuhDzSAgMhiX4ukTb583kkarohFAHZNnBKEKTHL5yZBYd",
  "key25": "J1W7WFSpRNiPVWweScy99WHwFAHapryJGnSVMcsnLfe8eSmpjMyD9R7NwerX8BVpWo8B9ZS8dBGick29T42V9B9",
  "key26": "TyCjMb29p8L9NxQbfvG9Q1LjmdwLhn7EjKNHdU8kgd1N6KY2bcUErTdXgbt6Y2hVNyTNSps1W1vyaCThdAxtWP7",
  "key27": "2J4CPMTrsyzd6g9kG9akzd7toM6JrmofAk9YvWAz3Twfa3Q58sfUhmQiEXTMePC15NUNoHNNjXHCiyCYq4hgDo4D",
  "key28": "2LgF1W3Z72JPohEkGYREHpt6AYGdQDzWp387fNxCKHbVwPMQzcGTVLA6nqT1ZFNB9frTCgT1kCPTqKa5qRZWVCWM",
  "key29": "4x62B74zR155TWxc4LuhAMhuVtGcxmavXMa99nZ6ptdENTNNA26hYfXR9i58uGh7w58Rsvj53TCz1YRQpKWMJ3d3",
  "key30": "5xnqyM7P5mnV2Q2AGbx98f8iPLjrbJrroxpkb9ekhofYsSN4LfJ3VPRXirhdcnxvJhpA61RHadkjktJvHZCk1KYY",
  "key31": "KbH9UPFT4E4TpHJDLbxjMW9LUyHDpAdmWV8YQRPZRy9xX4q1aE9odcvfuKVxNB3DFqJXWsqt55AxnLQteDrwUMw",
  "key32": "e9zTDNQ1EdfnYKnZkfqZ6tWEk26PYPbMtY7fgGj4AhPNoy4snfBrkS6no2GBHKAnTvXwGBWzGmzPVHEFNLZ5KxQ",
  "key33": "2zPT49JVEY8D61A5joKc1pv9WBmHxqCUrkDWvmocyfJ5H6L7KBsf5eqd9gz7CWjeb2cN5neezVnECv8eeDjAXnas",
  "key34": "5SDkeCaiqqFmeyWHAgn9Vpcpg9GzKtQbr2ebBjfeurYCzZQFWZBsZ6HwvVgr98ZgZnsuJPZtcD82wUHo9RUtotFD",
  "key35": "3vunWiVkpqYZyVW6nP6P37ggUtaijQEG4dkZvYH3oA3FnasZmaMakRdjp1f7FDxY5ryxspoBoRLqxDJN84mNnYuF",
  "key36": "3qHE5M58QJt9HPd8UcYm4VbYZxArS6JQtKwguZpC2MSaWq4bMLrf7fuuRAkHKT8HRXfcVSPSwyLYVAh157fLFS83"
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
