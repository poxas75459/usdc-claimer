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
    "3CmG2ojTV4CKcesrB4E6gkvDwxNjgAwh3tRn841MPVz6dutG9xTgVb5VxWdkG92hMP6CFazJ7cgvyYzSgKPQHWnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pwTgQjL8GwCdxaQVSNL56pirdmb4Ab98pBmJ8U962oaFcT7cXumaxPQHWytRUzDEFCFXrnESabDhivfRrW7YDg6",
  "key1": "4ygDivKsKM8peyckLuZsmzhdx1qzhveakJpc8vnH8knaNgBr5n9PqKNy3NyLh4e5qcB5SD92CEvy7af3LaBEjr1t",
  "key2": "4SNd3fhWeQeGKfG5S6ZjHtNgPMdBV3RtxDYB8pVdp2VthMf8u7tvreMkquBLhHFo34P7Ma9td7Ei36pGXX6dV4yL",
  "key3": "dDuZtnb72cjT6AvEauHfPUtwMRgCKMYpZh3xdy3Vh4V4dw3xgXLYv7GPUCK3z9b55imYkqDy3fMjYDCi7UsaDQN",
  "key4": "4JrkGVyhzYrwt9nAMFrKMW1T21zmDkcT9DAZWM1mCQeMZssxtWytPH8kEWGUBK3oKAV74xBa75Hv6xN1cAxAJXuw",
  "key5": "2gcaPQGoF9m7oe8ggw5DLE5Gdt5Zpa7kRtTaUchV7WXKRGcyKYQ9ikjWthqS3nbuqeUm1m6eYY66LdMF1nUYfXYs",
  "key6": "2eGMQboRDvPug8L8fKkM2jQ3iWAXvkT43wivbKyWJ3AR3Z4W47g9u2XKHiRKydABC6vABY9gmJouT2vjoTD5HP7n",
  "key7": "2W4PTzMGbzVSX7f8tkcNDD1UUJkVTGJTpAgP96cRQ11A9RfRKQm6acfreARNV7SX6WVajFxJCzjR3VhfkT336upx",
  "key8": "29Ah7iMvYYqfjvsZSFeC7GLrj6U9HuwQKfh8hDKE5XpZJ2K98rLy376TjNi1qhstVxVJburR7je1PPEv5ge2CFd4",
  "key9": "2UHhKB77MqN4kicBTFMYYhTYjYXVgmihJWVQNypwLSoza8gP1dXnP6nUtkZtmP4ZhNRYtrAthjFhXrz88Wfa6Dpb",
  "key10": "5h8SFyRpGypTGVxz2sfvLKXDPEx5SNw6WT1GCPeLdMhfL2P1JmUcLkvDooKQiGLQfEMCGpULXXB6AzCtmdXJA91m",
  "key11": "5rcNPst9nQzzuHXuCS71Gumkk6joR3ZhQMsNRtc8SBu4tgQThaVQMsYCkBzNXnKMk9zpEBrzYqhNEUui4GNzg3rK",
  "key12": "49BUfYrnm6MWk3xYXUy68mRfqXJtTBirhvT5LSuk7AkVhMD6pNTGYTrMfD4AoVxF9S7fvbmjEE6fY1KYDfLd3tyS",
  "key13": "5KrBiYPsYzEDaWHGyfDdscysgSnwW2BpZce35YeJjJsfmjPwnh4rW4mtPeBDDpnPdZ7FQfEnQFQ91XqMoZ3w5D5q",
  "key14": "2r8MjEz4Vnoh3vRZT4vELZ82mnGnD66SbaR1TcPMYWhhZy9M5PiegGqwimma4y68ksQJtRX77SwdrCVN5VKhG4dB",
  "key15": "2zN28nB7fqjugvqRATqA5vwxy5SVDkZRoKavjSp3iy21RkjEqtBhCfa4im71ra2iwSrc9fKZjKc9F4VNrwAQAunq",
  "key16": "44m295iEAhaRFsf23qZmYjvn1VpNN4W3hLfL36eS8FDw3hKqrLkzut5GTguNApkBxzP7pPfjYyBKGzCSgsnhQZwd",
  "key17": "2HAavbPfjEPj6tMx6L9x7iPDmJ1uyXxu6qx74Yq3RGAkMyy3cnB3inmoWzuYAApwjSmytDjjdogE6RRoSf5Lzhmc",
  "key18": "Ltg3S9WCRHDHb86fnJmmP8JYPD5VYF6F4CFB6TyQ9fJhfEwr6Adjc8pmJi743cyUVYvnqaZQgGybHuhHRZHAiDX",
  "key19": "3X3b1cjZw7h2bHAhigcMQxjEaJvHEYHYW5AN4aZXiSVLnNEHrYwjUWsyUNaJhywHS8zFG7XT5XhNpTJ579uyKXce",
  "key20": "5UoEcWr3nyiZSTzY2tgY1SXGjBVZqbqv4iijK8GgDvDuxP2G85xnFKpL5aVq5GtmV8TjPa48AUbbXoCpWKg5R9dp",
  "key21": "5DcD9H2s9ENYfo2BTFKEAZFirCri8pcXw2XXfLRj4dfeKHgKadfteQ3W3NqLYgjXWkWfXfKDThau5hioCxjUog1S",
  "key22": "2FyyMjQa9oiY9EcqBjdzKLoSTkc8nxjNpSyWZQR68BAAAFay1C4pB9rDKKh4ZBYRFzpkz48bfFriqVJtoHrpTXfQ",
  "key23": "pN17JAgzyApnmdXnoo4HH77gj4dH8at3tjULmKgjf9F4JW6MYZLjmLSfNsspBPtHvdwQ6Q5Tap396EVALvvJpXN",
  "key24": "31bMpZC85mwMjbuxAcag8tTJdYXcttrWmHCekr1Cqi41spXYFwLes8Gh7SkgD5Ck3T7KvWRGWBvyexfxussYQ6nd",
  "key25": "4xQ6mybbpe4R1uNeirg4X8RtEQbgJ8xujpEtphgErxurtaQMxnU9hJYr7QvkFX9s2ave6QdLVu8WffWoGJHLiDAk",
  "key26": "2MQ9g9ojhB99C7zKHS42UMe8vG2PB5Hs1vz7XtZQ3dekkgPNRtks5rZDtuMrghqXdAAVjksUY76jJpUsTa7zRrVM",
  "key27": "2ftjeKeESZRoKKKCQwtyLApjLv4ntz5Q7LAkMmZbm8nafmjLyuuSA5wPgfzbDE5Dor8ydvsc45zPR9e8RTVccD2g",
  "key28": "q5B9EvvUo7dEcccTQGYPFgu7aphLkaq49aHHkTHTjRdidLsM7Kz21HR7ZDsK68Ajn2hEDAYJqFfMhdxsS8XAq5e",
  "key29": "3iLfjDZBDDKjp45mfvNaiUnK6xT9kvrueeyZRVczZJpEMR7nwZyPc58LQMVRjFgPgK2hLpa9x3k4KFBtk4d3Kfqf",
  "key30": "43WM4BSAV8hKM7QMRzsDnSUun9PFk8NijphxvggyRZZBADsexaTd864SGypzwtjQGTgyRcw3aAHkqpdMddfESV3a",
  "key31": "35SvUSRz9FQKW5yEbzpJ3k6biVoZ3iMf5J7R7Nfy7FdBN7uL4vJTw3mgW3AviQAkyXaCu5uvK1ui1yqHYj7RbUE7",
  "key32": "2SDJwmuBkuZvywPKQwLacw7eRnJjn5qde5K2EM7L6JT7pjTpiXjAbJeSpfcNviUmMfRjA1r9N836iCsU83wv6zMB",
  "key33": "AEHvphcMGnV5rmJXV37R7hjdoAZJfKDD9ZNGATwe5h84txFWJpZqcEXqdagtrrq7aqiMscdguWH8s5tWaHJcZNx",
  "key34": "3oyZ4DUoZVgxY8E3UnqLbGpx53YmcCUhnzruvXuggMkRji3XKW7r94oUN8sGgU4vfBzUiPLXs9Jmc5WJ27sFipYG",
  "key35": "6196iePQrSeodLok6YMp4B5MWUpUfdNaNjHAmZywZowyjrMUmFZKxS7ch93XrWhgmHUYiYZtUisNg7jspbWbzGwu",
  "key36": "2FSxA5vyd5dJwdPP1EZDEYJgmqaTdUZcqc4mRbViLyucEznof2ixsXpbiyz9oCRPiWuKNB2SmxnscgdxUjc2aGkL"
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
