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
    "5dvvA7iYyVgDth9RvduthQcTnVSbtqi1TKxvgzTQmLkVqpHfh8AEBgqPuu2fZAW1M6BziNvQvb31AybqrcyhZE3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PB8W1ENMdsB22htiEfA7Frv4eNCjiMsup9YPHYfs8FHpS312BoT76DCKTurrPmztr2Ncc5rGWib8LPzoNvTBSkZ",
  "key1": "43BXUaNaPpyCGYx4LY8E9Vr6k6CRsNaMvXD212rKvx8yBLGTzRfKHrFjM2rHqR17h4ai3sqwe2j8He7HmyxSEkib",
  "key2": "5f1RE17GcwxKqf7Eh7Dvtz8y9tngQveva6cFNaAxYkZz4GhXXe2Ee6fFcQaeZHXQQgvcTugqDwjXNA2SPi618Fjt",
  "key3": "62jwLUx8E1z5rrsT7fQHg5wfHnCw4fGQtksUJca1qqsQrxdb6KBDawrepNJqf7Vge8a98bK3gvRwQaQan3kzAdPc",
  "key4": "3g1VVJvERFzz7Dg1A9rX2dJwRPx2PfvCKPKCkCZDpGpU9AG5tXzMoynqd1KohD1Lvb36m4UyhKwDGqC16NdZPbuP",
  "key5": "3ceMoQXxQbq29Gsd7iY9AqR9KjuitxUVY3WLnPStUrcpc1XRYMNCxNqWRxCQSdV1Nyie7yxUrbCGxuRQBNhfZDgY",
  "key6": "3GyJeZkLSfxdb7kN1yKisV6xLTTnxy2QZxQBgVJpNsxRmjCwiEWEqSJ3XBeEVRGyCrbUT9AHzpkWikJHGmUqGTAy",
  "key7": "3swLQ9beHPn8j4VTtuwgEkuhZKByKovKqSTN6VUj8JDeU9fE8uk82kV519XkCvWd57Peqeq2ok9Wkd1n5H7rGydG",
  "key8": "3LhdPn8w5csdQprpszj6DT6bwW7VRQbovNNdXEVdfhGCtryHfbGzNuTAPhZutDKPFj1EQGeFqJhbxppYyZv9pP71",
  "key9": "DQYzzrPnpxUgppvRGMLBBw5oDEDHPniN3nZT3nbykwvzsNCoUC6cCudST9ETi3kLqEx6ZGZtcC8jQRuKqroLpcs",
  "key10": "4aurZTdA2qk5nzBA6dTREkefhVD3z4JrTPr7jVARQr6MtLC1NzpXLbhvhFV1HCrRrchgdoekWKP9goCsEudCKgpK",
  "key11": "5F5tE6qxZ66FUq89eHBFguMVCGNUX5MJn23SciE53PwK1oAdPFUFvB5GrBWxEvHYdi4TicNciWor1zSmUAHbBMrV",
  "key12": "62i4KQXdatRPdEj3ZmJgygERsmS2t1mNS6fDkC9VXWUpNv3i4MV13XsgSkbDoh1TfELWkEQ4EF6Z3xmiY2dvr6UA",
  "key13": "5RFkqYSJA6LAwEj7NnorYuNFPQ4A4jG9RQG7W8DH8PD7QsWHj6PdNPFA3FWfujhsgLEHfJkFqQJTHRfttLXpmvVm",
  "key14": "48s67vmVPfVpS17uj4911M4a8TcA3WSVQXTXmXk9cqVGdY3p628sHi1RHhWiwAm7NPq5x3L2qtPj1TUtmnfQrDkV",
  "key15": "6692uQDMZ2jG9xMiPRjZYRmCZ85Cs7kJ2EwU4bSfGTQ79RjAKd9QZQcYLSdcaSXKU22hp31v3HiNuLkEH4t95D4E",
  "key16": "44NiqBD4tyXpwZqxNFmNfokj6yMoT3KY3iEgHgbgLHaCUKP2yVGfXvcQ5ChMRt8unPUHeE8PUmWYpvDScKzx1DwQ",
  "key17": "2GnE1AUBJPQDfJkJVaeGv3hTWTn96q3hj3v5W41EgVRWKiCDQh8N6Poa2m8pdDA8EgyV5A9f3d9FCs69PyKvHMvP",
  "key18": "2zzbHh6HktkSy6V7sRgXkrtZJ4nbSnn6y24SFWSwY4hV6GJjQRMaZNMsyNtfwmJhwevDu1v5WkRDDscz2Q5Dy8s7",
  "key19": "4y2MpktT1uwkz4V2PpdpGLqVjDrBeDjGiAHs2ho5EEgQfKcd49MbLYXkjRasLY2qp2s4WD1RiUMyrfkauFwW3m2M",
  "key20": "2rYwnVzB1yyvkTvgzRLQCQZYUFB9BtpajkJk7QefBgEKFGA39gkphoUi7uCpcHn4YXXW9FvR9Vuy19n84wYcyZV6",
  "key21": "2vyboZ5FCiWb5TphmYtUM3sSG1mx7d27w153BVG1o6XyddWfYJoQH4uPo6ytNMbdiVDwr7U3AFuXiuaDCUufHHmf",
  "key22": "4jKTaHsgbPijeGwaFs2L7syG3SzZJtpAFcJRYvxRXEuqpZ2PFW8ydoAoWCYA6Y8uDdbms7YVoi6JEzxhXvMF2znz",
  "key23": "3hxpidEUgdDDDNZEr4vvp8suWG54SGkut657xQsoNi9ByxJbYymAwKCdYkZeDugBjahor3C5QLcDr62iNinCYNNd",
  "key24": "2eFVcn3ZXegm2scAg7APSpnhkLVQxXeP9749UJcbNhWngY2m7ywtHtRogPe68AtgmFLJEVtVb74s9FEcMH8ZXfN4",
  "key25": "2wfw87uoTogGTvjCEComUBHkSTosNQgDtX4mBE6uaXRiauhHULYwtZ4TtN72VpwTdiJVFFAWosnbPH4PHRrSK7k2",
  "key26": "5RVBcudVSPXceHa74ThCDCotVtfVX9zy4i3sQWg6hrN8fAUJfdCGe4vnv4UXugGXwZedQcX6AanYfg2ZQZcthVvb",
  "key27": "47Ja345S8iE3NL6ypTHPQjNmYhCdaT6xAcvabUpx9UpsxkQ7YAiPX1auEhGjvQqr5k2dV1LAHstF22omcK24Adm2"
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
