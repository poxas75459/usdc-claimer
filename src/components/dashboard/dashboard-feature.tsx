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
    "4aWrbNjqsUdz82h5ba187HcP8kk67c3bco2JjXAooqhrzTxiysx7oGsGDyu1RcH9j7koqac9KhRP3YM4QxK7yCbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMD7LPFD1uaME19izvJDtZpRQwTq2ZRXRiK2JvWzfzHCM7QWiVU77nNkjvV3fLHYy1GMg8kMztmmSMYxjMeWjs6",
  "key1": "4A71GGaj6siy3dPWRKam5g8H7bjGHLin23HdfNm8sgoUjwrhbDygjD5yTXVGkLL2WMVd3ikCMKEKrR5xqZsaxb2E",
  "key2": "2bk1HwRco9m6PoMagVjaWbNjmHRVzyY1Ch11oiaN7msydcVCmcsJAgTVTrL2p6icX77avdZoWyPsPXamdmwxC6ei",
  "key3": "2YTe8yws5Fd8JqNjE85WkmRqqt8g6KDjGboQYhB8K9S34RTzTgaUWudaoD3LNhmRyQBrr2jUUSZMB51TUX86fWJP",
  "key4": "4XoJWJNaes2U7wNFVNiyU1t6Macos8qn1EaWwZuyLxQQ7SPtGPJSBUYAcr64VkwoU5g2sX6gWXyXmj2Afa8MUtdk",
  "key5": "2dpQYNLRDYrgjRAmWwKwcY5XkRBGnKJTEuQmaVLE6oqTbwRqX7kLhNMCqyCngm9TAeantrWZdGep1b9hqiFkRchN",
  "key6": "2GeBHFFgFXErcJjkusZ9DbiuQBs1beHUntD7tTJPrGxeNqnqCen5yWsXjKm8qFFx1AtsqvpqWKjB5gDKh4pgBqZx",
  "key7": "4hBTN9Bckpe7NDYAaoEo7h9yeVKNG6UbdHpgEq8oKGBg2mMH6cAVDa8bR7Y2gTUkzRd7bNbgqk7n8hE1PJfdtqiS",
  "key8": "5sGaSD45y4bVVzYpLD2PFcQzjFjpKyxPMRybzYBwHXX2xmDuZBTk9LotBuUrdAaHmHU6sPcedECQHAhLJG8w16vd",
  "key9": "qYVwxwQmqdbjwBKLnDW1qY3AG582z3j5mCtAV7iAmrJgpbZdVMnLGNqpntrsDNaNQXB2T1BPQjMWXQ5davcPiBm",
  "key10": "5zEgdKmGNDPNJt3SWFnuUbBeazzDV3HeRSQjaYTtSbRfJpGYCJQA6EergNW2J29VmyiDucnTvFqp2zkXYhMaB9o6",
  "key11": "3jpEnrpck3YXrfzKNKJzwNHM4WHP14qDr8UFmMEPM7ru3hEVeRXuEoqveaMqYadWMi8ffqLQNHJPunnCnsZ1Ay6V",
  "key12": "4Em755TnymJJWXcpRhaxmTqiUKX5ticMaLcd53Ewp4pz683d8BmquT3dWYA251rCL8NYM9WGwyXnFTooFmHTgPZj",
  "key13": "3ZBG5Jfb8WqbvDg85sCdWpKqkxsS4Y8XrxN8ndU9WzLy8jSLKMd4KdmqWzuzDMULvo79VJ9gcoTcgaXkrAwfJcyX",
  "key14": "bGnEWTXB7PTG42u9hZ1UGEs9QDfHs2bsc1vWpysRZnM7FtC6v1EcXyjtyge331YjDfEoRqdwn7uHU4MhDPqnMCQ",
  "key15": "262GtPGkE9fGXFJJYwDjY1aoGskefMRLQatirqdX2hqW3Y9Bp3dLHZdCFWXeZVoccFL5VJ18SgEStqrJPv6Fs8hU",
  "key16": "5sx15h8D9vqWk4DNUXckPKi5TkD913nsBNGYrkvwLCPxXcixUeNqqvzVWQiHQpBJ7wX4yoQtP8GAtxTNEDb2ZLxQ",
  "key17": "5FaEEPV7EATZ5UF1AwsqhxY5trhp3ZiXGSeQ2N4GkcJxifCVLWMCsoK22Hj7fPa9uKSdFcLpirS5FGLnYDCaY2Vy",
  "key18": "2dqRLsH8j1D7juGyzx3jfkHRTpHKbmE6sMVSjshiiZTQEczN4atWPLmiAC8waXTV7NDSWGXfDtPtdcxuV52WvRzX",
  "key19": "khkwWo9tCupq6gH6G9yejQNdYaBe7wAA9ch1bod314DqXq4FM9WWM8KHvRJgoGyKuGZr8iicpTXWoQzXeyVX9bY",
  "key20": "MSyGTCuH8NP8xZhFxA76sdeDcMPZUpyR6ZA9pyCFaCU3FVko1MtPgRDih1WBt7KcXh9fLWbpp6ofmFwYkXUgLqR",
  "key21": "3dGAThjCHM97sY4UTP1jnBo7JaAGpj2sqiGtuoTVUJhSmjSQmzQSBgdYebXR6J7djAKGQsqpLF1hQw3F47PpQqPN",
  "key22": "bqhHWshz4Ah2cotvWUP7PB8kAyoKQdcUMSRiHeWstj4tGyy1SfD3icUp9HJUKeQoiJAZi4KUgjPzyPqb4hzheUk",
  "key23": "gLwXp5Geu44dixe7xijQVrRXC1aZ7wC9WAwQRjx2MtRvApeMghopjpP8uzKykzmHVGgjrNbfXunWJeWHbL4cezR",
  "key24": "3qK6MVoQMPTpkViRarmNFEsiHJ6UqsVAtPhxcbeXLujvyyj7455ebU2VLu4UhcsXcUqym9jE2WrfMdWUF1ca2GGm",
  "key25": "4ehqKs2L4V3rfwFSx9mQpvYWoBeyCypzqZP8asGgkaHG29NJjyAN4Kh1eys2sTJ7asiibmzvrY61UZ8569cRAQKH",
  "key26": "5dthdxmtvdZqwYdhkMgfYPAWFRYDtauqrp7fQQQebA9j47QceUEMTNykwDJtrB6hf6Ei9MDvkcsx1as7QeCTTfg1",
  "key27": "4PxDYkmebak492tTXEXN2MHjGn4CBFA18SoZF4265rL9H9pi62K95E8XXXy6ZfFPEU9pPMmLtBhbYRCbfynMgogX",
  "key28": "P4H2oGLXzXzZ97dPyVhyQFw3v1frpdE7myMovKtsbuEK6ao2gRtubx7KDjcwEL3Wxt1kbrJt8Zox5gjdKmpeKhF",
  "key29": "hAGBxiW4nCpMcdp1swoNmDiqRR5ANUKb4VGyjGtwcwkEoTNfhNA71pf61mr9Y5Uy85SQfJsYscYR8tETfQymFxD",
  "key30": "4t36iKR538R74ZSjyvpsae7RPgrmgWjpA5vhewSqDistqco6dbZn9SMaL61uEMXoH3wapUG2PpdPSALHL2CbLCk6",
  "key31": "2uEqBeoqz6bD8gdCJek375wBPhDoVkUXabibooQXrMRhzJTS6G7hetH7v5TMES8YmUXVUA6NxjPmHp4m2BbLkoNK",
  "key32": "7P5ufhw7jixWFCsteK91zQwXK99BygjgeYqyckNBu2Mow11pC1jq21sa3ECAsTRq9a5v5Rp7NNCdmeYpMoGgx31",
  "key33": "3KhEgAPzcr28CJ2feVQBczdft6kRAUMrWTYnAkyZAMtok46PT2jQjDZHF8nvAGKVTV9R1NqHVH3nFiXSdEZZpvUC",
  "key34": "5vdVjXGLRU7QYEFKJvttmUJqUxF6hnT1KKYSx1azAf9CBrQDfzUk3scEbTsb7hsZQc2WTizEYZ54niGYMUECV1We",
  "key35": "4epenAXg987gXuVkKK4uw83CBCbfnzaESVi6kcmKStxjduyZSmBcPSvRsgadd29CVi1agXktQ4LmXU33ngpmSPtp",
  "key36": "41NCTxkK5dKnexwuMqDgJUcwjxmqFBKwhMV9EmnuyCrgJVJez3hWxG7YervJKaivYt39yv4JQHaBvFzSUUYbN4ro",
  "key37": "5TrrD8AEUWm8jJ7Pu6y9W18yYGrwV6Yd7zdKXMfWLCpKzHeNuHC7qCpLaULdXCsp8D29oAX6CuMft6k49PcktjAr",
  "key38": "3yY5LHFaH8vPourEWqrDoKWYLcv6EuEUnkPSdp5rLx8PgfvWHidasZU1VEohdy6Rdpm7WuvhsQYxQ4EgERtSXKBp",
  "key39": "4PijUUHVG3bayVyjFn1ufDTUfKFgLv7H8uZBsYneuZor9MWTnqzdc1syodXbSaXvrKeSJk2U6SJhVi6HiVhowjHs",
  "key40": "3yZgTNjhMfcPmNtjw9iy1P2NYMXJXGUqoaN52amB5s2f8gSjz9VzsqKbdcvtt8nrgRaswNVTbMyExkt2rvwMGvrS",
  "key41": "4YtkATEFXUh9dN8omXm8Mhm2rX51Yb5yjKiwhw37aXn8JEruRBpfKmNXNj2zLs22VZYvLrUrNzAU4JavepiKyL1b"
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
