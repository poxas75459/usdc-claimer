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
    "V2vzixjBc2bXxsLbjqvEo9RJsQWcQr9etgg8rNLhjuf3usoXkFFvtebLZ2EMvniTF3vzRTkggJZvZ89iiPcnLVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rz6TomsBcPyKmEuLebCGNeh9H9p4arUrmznDGrhUdyq5S67yv7u5oZTkJKqRn7yexNZiDqc6c2MQM28gBd9iYyR",
  "key1": "2RSYJ9Lw5szBm7t3NazY22HXvw6XnSABYRjpN7PqDgu9HAAyTx3grCD4u2L5167FznA5vSSrMUyGEYdiHeah9S6b",
  "key2": "2c7cgzeYjhfCYqK73Xpmya9znGJKgwkWHzWCDRtqt4ESmNzgXrLnaZEeGPZUgudmEYQye25zvJX7GKZmt8561S5g",
  "key3": "4Ufu1f1zAZ7Pr7EN9r3JFhx7an3LFfxV4XC3K1JXZoCGfY17qw1tqrZmRr2s8EVNLHZBrzMaoCxYhQznFk4erpbV",
  "key4": "5qLhuG7pGSa1tQyJ2wwcqoFYaBZ4sRJidDM1n68UAMhdBqB6SQYMmSsJCd287WNa6Yt3Ds4DKRYJxDhr7pGcdZLC",
  "key5": "4mMLCiY57EqYKyxxBE7pNhXi54FxnfJY1QB41ghsVU4tL9PPCu4zPMWuJ2TqE961Xgnvp9WpBYgF8nPNZXGPMrTF",
  "key6": "2z9KB1fzAAGHPZbCeQDppG8QU4NmyR2ugqNzWEt2oopJMHrjLoYe6c32HixzuP8bAh1BYpyaTWxRDKBYZkbjYxJc",
  "key7": "3vUijdGx1qbeJbiNLAz9SuwiN6eUBb4CxVyDX1hfk1V8wNCGLiEz2Ppi47oRQLP71TCJHE5f5uAQWv7SURs3HFig",
  "key8": "33ckeZd5T1RVynExXBwSN8SudZBqh8urv9pW9M1QqmThnWTyvZzt7Y1nNDLXJNhfRX6Zj76VqfL7ED8q3y2HUcDo",
  "key9": "eZpoE3Q24BDqMTSbhn1jztoht7g8W1VUEGi3LEiHuTSqyhmZmvjezA7VAofG2sVe8rSKiDuhzpYpVYFeEi5aoUZ",
  "key10": "4Dj7WXYZo4j2wcFnbpPVRbX6QyrhuuuNK6ewQNQGJPhSbdTYGcceotAuz5QShD9rXKihoYtFQu3BcvBZm5SdC9je",
  "key11": "45ay5mY1KN4mDwpXxGDto3S8G4SPDBDmiXM3A4CQ8rXiC7f2PmqzcfrQWXNohbt654yBJr96vYhCsD8M3e7rKqQJ",
  "key12": "LptGTGGZMbBtFovANEqVpd7PjghVx1Qv7pjAi8dRXG3cUZjXU8AguyZcVmM2F12tA148NvjbN2Sugys12PMpGbg",
  "key13": "2egFvmihjXcdaDZNw2dSHAGmJnugSwKAW7Erz6AHUqLZtB6bmawyrz8hKDRH4gH7RR7zS6PMxb5aCRuQVSFtvG25",
  "key14": "4Efhb35QYmj3o8fPRPaTzSTskPY4uKW4ZPdhXhHFT96FdqBCGR4oGFhjpHUmyzTNHZcFGJh2Ebk9HiGojHXADmuN",
  "key15": "4miDvWwMVbNgXK5DbHUYbdoHmNe6XdLhEhsoQpN6W3kqucUWCY9uvQM39gUboAK7MHkR8vig91o1fbxHbjnSHQ17",
  "key16": "2SxgaD3GgEewJ1gBm9NnaDhjZ6EhaZST3bY8oCueUgBBpVCww1YNGRKPA2Z4jzz1nDrKgRqEagJ49pYSFyS6AhNh",
  "key17": "4csrjeHx2KLRjC3W3HzLQPDgMBqjaMvncMFsuWQu8M9RJXAeFEfyoHCy2BLa4Rmi7wkNECfKUA7WnZKZRpJMCAqv",
  "key18": "3tcukptmEnSqCgZnUZg3hgyhSsVcSiwJCdeVHuA7P34AGcs2pefJvBvj5iFfoxtypA8i4SkPJxev4UU9cgz7KDcc",
  "key19": "265GC9sY8MsxUZnN5PNKCDxksMkjR1PDGtxcSGpVrUD4sZBVFq9L3Env9Fc6mLRJanWG1gA4vk78ZVmY7VHP8aQi",
  "key20": "43PegzUqUgVabVBYCAnRqEzChLVFi434DhjpJXXt2ySxGwv1sN4wKEFmPMbLztmJN63GjPuUDyNgqYuQ25PwLeFK",
  "key21": "31K7Vo7qXEw8SEBjVqVJzhUyh4kvzcaRsJcxy6LE68Zo57gzwcVowZSePZiTkBN1aCNoj5ojgk6hu65S11PCCbhU",
  "key22": "4jJreA14T7zJxcgFBRjRPjG5qsTgRG67rXf938HoRhasdMbiHzUYWYjMuXkkMdLT6YThxY7xo6rh2G57qbt3PJp7",
  "key23": "5bj99pPJpMA3vxqMF9LTt67LU1FfXRuQwyvCB63AgDxqoLGL4YAA1KEfeQBydmLnkKfwF1gDhKNdBVyQ7NABijmT",
  "key24": "cEbNy9V2Z9n57qCTtFK3CtpCPtZJ1ugByp8qfCw2CvcvAXJqtJrNLe67ZRnJ7NbWtfctnQ3Ds3qHDiEnbVzFWB4",
  "key25": "b45suzo6Ne1ykteuWa99Ht9epjnkLteApQQa6cFuYGtSpL1yq5z98928r1HxmgmeGNVqxCEKSknX1S7ZRwdM84u",
  "key26": "5BRkyPJsdenHDNVLHf5ghGthKXJP9ueL9s2X8XAPYvfYUnyBiAWD9mJvj4hSMt1imHyneynDCvUc1FTTRpsdWzHt",
  "key27": "3unjbnAfjd1sPs1is4C9RzFxdCpVdxaz5U2pBmX22onZagw6qZ82CMwVgRdfSFFyXNi2xFShEghNhnyfk1zmDc1z",
  "key28": "4YQTsz6FSmqZTqf336p6GrdFbTvkqcPKKRZ7BnXvU9aQn7LR5TQWweUgs6hv7jmLPa8zFuxaiU7Y44GJF4YM1m2j",
  "key29": "5gAAvqVEBLTakn3FLhHW1fWkhgfrMWFK84Rw1guFHDquxGCHMw1EG7TKoPmfMnwdy27gPdgPV1YmM9hu8nG7cn9e",
  "key30": "4qHVdRX5T24Xh4RoaHii24JVNPF3L9PYxUaGriEbsnVLDWSrqoVqsqPcpyThg6wFZ1qA8vnQ1pC25P435rrcHrDv",
  "key31": "p3cK2yteBTZJa7tTtn1eD6goYuT1Xi8XsK3paekBYq4kVRaF2S9cStHkR8KpQ8LatdnX9eXPXDwTniAHKQTTT3s",
  "key32": "HswazhDB7Fu1Q7yh6k3BjuRp5JLuQ8sKATaJ9xWEWBauNXWj828XeqEK7nptwJ8qwiicDG8uL6bu6R2Z3yZRYU4",
  "key33": "5pr4V41y7Savrrjznac2Jae64pQK4WgwidmT6bmAiN55JgvQKtjahz56M36DppBctkvsoyvXsJCAz9iBU4k3aFHK",
  "key34": "5tc48pj8jLdg8veoL4HRonxHAwmFxPePZFpgha5A4myVppWQPhhbRYzfKzgk8U8qNRyq2TF52WXc6DUrDZgsqeBp",
  "key35": "29J2KPwiYrzR7VMifYWfbfD6rjyKS9WySpNSe5bmkmhELnnFu46UvYoMR5HQwQq8opDqBtMdz8nZFAnL4LcAe6S9",
  "key36": "61ZNV7T9VG7TXznQhtUgPRw6vqK3gtPxwVks96b9oYC4RsT7wwy8EBBCRC6Snqi85HPpDtTFbeZXiUmNDXS7Mqt",
  "key37": "36vdbhC2rWNRh2iuLvCs2jSumioHre9J7Bw429xRWKLFsXdwst8aDG4bewbkFTv4MaRY4HspmoF24Zae1rJiw6UJ",
  "key38": "4fSjDVKSb8t711Tymnw25CDhy5EiqxjUw3g79Lhcikf21nfKq3xX41bnTZrY5kBC6zYC791pTwB5ykeP2s499g2j",
  "key39": "1MP8MDFfSpMkTMUDtLzKUMgKbta9k7Yrvp7kjGuqaGnqT2smR98xM2B8GResQjG15FC9cDBXJ9bQAmnUAgtgkmP",
  "key40": "XdQvAyRHpZyTDT27M49BJJK2CGDc5MHUrWC9C7QrygsQhbn33C4MqZ7dVxXjRkVvfBatHUA6beKhEyFiV7SC3qX",
  "key41": "mw9iKKMXwmo9Fe7wYn5U6PKcKZHLrF2GwKWpiiqyrwbjVwiYfYDvKZjiBxA3Dp3GGFX3TxaAx9s8MXozAbFeE8u",
  "key42": "uWuUHu9uoxRwuQWuM8WYHeu7AVxstRRS86ohsHvPFy89Us8A9LvJu34C9bpHWhLzjPYyHndy1fKx5Cx8AkKmoHB",
  "key43": "x9BWdVVBmj591VEb15GfbgBFf3DWa9uTE4V1yEttaEPEW38UWZzpevCsfLG5owsqdtDZDv3dsotFzL2wm77FCHk"
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
