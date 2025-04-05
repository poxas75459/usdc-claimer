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
    "BFEVPzAAKqt45zyXdeHCw5Q21kRBcmqm46aB66mrhwMVHvgbeEuntPh1oVm9i1uGuYpvoEW2hdERz2m69ouZ8Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aiLuki753ZURr93vSu5vSFCMDPWSYDje6qx8zgnDiJcbNxwRogCpbPzt3K66E2hHcqCrzeyNBziaYbafJqmuTyw",
  "key1": "3jy23rw4y2y2fM4jYo2SmAUGX8f6CePeobH9oFZq5f5aAqzZCLmq9Tt4rxA75yuiYsBEKDTWp67N3ei9Y985T23P",
  "key2": "5Eq1ysYZ2FxZAWTv54WUwhN28epgEv43xHRxTBVPfMGEP2eDbH8Bn1z1dw8MJvWmsn9Cd2Z6zzKBHcRDpB6RrnaZ",
  "key3": "3TcGyUimpMksd69u98A9YEijBHgBrMH5VqrbPxc27Db5PvVKqf1oXWSCaNq3VmsyHB72mtc7wsho8QpAYi8hJYoW",
  "key4": "gTjYwWhTCVLPdQXM93dGzu4HH4QnCoRaVxoruVzhRTaVAUq4f6Vq3ffhbNXXHJ1NjGF4NsSzDWc9ieKG3a1ay2D",
  "key5": "2NBMLDkuz2ffeLm8in9pfuy423X2cUGMo3gHyhqzu4A52josjpnUZfXVdQ5ec5ZC4Exykn5qURUM8tp1dCZL1CHh",
  "key6": "3rXYA51fWo5EWSLVmTS7gNZKXSVHkq8DyYQosN4XBMcAwkBQLL9Vgx1RQ72zR5UNNVvqvMwqvrojxy8G8rADCqRN",
  "key7": "374zPiWnF9VWRHcyv2R9wFdBZJr5SGGiRyULrA3fZUyc4EYsXwGhLqQyHvPUgdx8tzWPm3n5fuo88Rd1gpqgG3hz",
  "key8": "3euzspdu8aWwyouUERygsjLKjgmZMTgmSKNAgCzaZS4s8rhwmDzQsZ5mryho1ohJfCeZZPaeyEWntPgsa59LsXzx",
  "key9": "2gK7E5VvCq5LkW4SiuSJyWULCoB5GtkGRLqFiQMA1u5m8MEQSheyKcVSK7VKPLgfNN5gA8BkeRvWFTPs7hXhPpWo",
  "key10": "2EDUAopi17L8hMUsATaeL594GMnHiyx9aaR65kbNACcWQcvAL1ZgizvBsCkRyrSk7G4vyrMjEp8L3ss6e3N38RP6",
  "key11": "6546hdTp6jNz5LgCMQTiCNj6m6MLtZsScxgfPN5z25UrGP7vL24MENQKoCjjdA3Zy64DjF7y9NkXf83r7L5xXpda",
  "key12": "4wWWWcUyXwxpa52ps7BeKkQkBQ9oVmVcEmVZDXtPu9gJvWdgxyguTDK9Ga2Ld8LY4yxroCLTsy7LdiB9sEUCDrbE",
  "key13": "3a1kRWCY5p45cmyaXzvERbhwweBGWkzTmy35GNfgJwStVed3d4Y5kjh9Z3nhb1H82C592r2snTbMj26pQvSYaHBQ",
  "key14": "2ETt2XRPk8AoCvRohSXLXLfDDuDg1SKGWELTYuGfWmkimes3MqVAbxSTXHCkinCVppRtSBhUCotKnt9hWNctxd7M",
  "key15": "3dm6cTWf4CNt3Mss6urvuv8d62gHWqvXG7DR2b5YuZA51r6cRhpeBJUCgZjvUBxYZcWvtMtTA3nFBqBvhJU1S2h6",
  "key16": "27rB4gb3pTPRJTVCRx23KHb9BaDPDoGyptWyNim7831NFd8HoTv1mtqe6xsPwoczXgecjZdaLcwKXtYLocnjWRgE",
  "key17": "3Fd49B46tdhj61eH83T9vG9xenrYKfoDgh4d6UwhJv1LSMoWr5vTjrEhTL3oVSzKbcvnmtdyCndXMoCXWFwVmgqA",
  "key18": "9VTpSCrVUcXtjNt8rV9fGEt7rfWnQkeS9Udi5jYPwtGainWwiG9Xp4QxmCHHdAnnkz3JujnR3ATNtsPj3nSzNi9",
  "key19": "2GYZQtzqhvKH8MaP4rwzcGsAfWkseMfruprGNgU7Hs16ZWkm9az8xypmayaZZAonsjHbcsffqXdcvX62dM69Smiv",
  "key20": "53teobBJmGpTqvdmBkPcrf4v9nG8ssgjNynerwz7mdqqYHSMxeszfAS5Pf5RdkT1RhHmD3L54zb94Sm5nPWBVDna",
  "key21": "KBsFFqHDZ5k6sVs7hPY3P6ds3pGYZ9eTmziYsJXLGERzzthy5EyHx7i26tyHDHaMkvzWbiCNJKhqrp2Wt2UBP7W",
  "key22": "32j2oUTwVad6ifHKvb72rU6NZQ91dmNfKJdwX7T9VXjtJrJQzYVu8A22eiB9MMJw1UqVStJBgFS2fF8StQ1TANjs",
  "key23": "zEuBZ7oVsodf4XUCjRXj72Q18Jc7fEXQCMZrHnuVQ9ngk3t8qcMfg2YoP44vFY3AgkH7Z2bsqPAnvZ5mhKZ7EB9",
  "key24": "5WzDGdQMerF9eEWjWSkJMLpfzBUSzvRnnMGrgsqwij9PjW1LAeN6EHkydQdLktVDKVYa4PUZqa3WXGnCvvabGfPG",
  "key25": "4z6BgDPNaqMGYXGj8SZBxqiSKM6DhvUfGs3LfDJyN6Pae8y5fktapTKLDuQUFip44Gv5oBNFgit3inEo5x5Ywz6x",
  "key26": "4LDThngc4QmmNRgzSxedXs24aKwx5CZbE4LymE5yrWGTLjoxQuqPx5UB9HsyZQCP3ajb5BE9tm12pg6kgQjxnHnu",
  "key27": "2MEVERCN6q2fGTjNdcY5bQVJ7BvZssj8ayGUEgMb8Sc36zhjcGDuesyT6FCQ3yXfCWtJL6SoaRWA72xNQ9gVwAWm",
  "key28": "5cTFPbQYv9K3dP6NSTRyhe61bP6oK6uxGkCP62mygV53qm4pQL7QSodgJavS4Cf3dSiosmAJV1mH2PvX7Pg7aXt5",
  "key29": "3Pva2tN9W9HorSUDA3Y3KBDtvcgj6fFNjwftTCyYgPKtLUAQHHB3MZDtVyW2YUJRgg1rUXoxnEHYexNopRn8THV6",
  "key30": "357wLgjSNwsKLLAALsQmpPXu6SFs72iXRbvS1khiAPzCPCgh4nTecUf3vnw2mAPL9Ax8TDUNRPhwsSKK58632UMG",
  "key31": "5Qe5gE6MTQMA6ECXFukwJXSS6iiy99ThrSksJoXLzfd4iUgSL6Zq8DbekThB2c3NUgLTQEqM6HyyqW2xupV88b9c",
  "key32": "2hQwF8WqPj9q8hYgKHPekzQes2db8ebSjcX2AY456nRRKfSnKLfaV5snihuBRqHqjSM1tA1rNxgMbisoty9jrVW9",
  "key33": "5UwQZrkfFMLLUG4ycgU4TET8hZVrfhH5wxFgfxAgwck1wRZUZ635wogoWew8mzEtgb3JZ8doMn7GFHXZLP8N2HtY",
  "key34": "eoFWHPHHPN5J679AyvY2ZP8b8MhDsuM4T3ZsL2yqSwUryuaYs7x9Xr1SNb39Efy4pWZtKu5tiHhuPmBkxWnWNwv",
  "key35": "3KqABtyTGpScEVYg2JWus45GRcYzTAdjP2ki8NKxhi54tpTgxr7tktjzjR3FxaKAuR3mB9z36USaKeWSYwdzYntL",
  "key36": "LNgL76VPD3QRr7rAcKfwbEr3EfMhsoYPLkrAdrFZ5xEqpqasUAEkXzN2U5da9g9eUtjYw63QpMehym6WgHBFksh",
  "key37": "5uR7sLqyngd4hxF9tivX9op7UVD7bQjq9d3KNTewgLqNKuh9CM1EgdEdwXQUyw2Vz2ojmKtzc1sFJ2xMc8jrscYv",
  "key38": "4jM8YZoE6A3SJ4VoqprrFK6L2fVsgyF7XmhKLm8aQKomGhSxgRvfHCE9nV3DtWhAkH1esUNUR5bqbbzXnrAArSb8"
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
