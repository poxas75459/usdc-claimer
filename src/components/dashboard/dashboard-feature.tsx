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
    "benDwLiBYJu8v8nbBRTjRHbLLixm7chwrADz1eh8fmbfzMAkWDTwU26x1rAJ2hNgYWVeG3VXeF6S5GSLagU7rk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmT27fK11GyMbuF8A9MqWMaV1ojUCvBHvrB9DzmfAGb6VztDJpirQTTHWbvcLL7nNQJyDJB4x37QCZhtyYVpzZC",
  "key1": "3EpZNhTUw2sJPBtAURwFydW27kg7od1fwaJWrhHQLfo7ZVxyUHuqzFat73fS12HsAvQzNVJadCj2AVFZisiCKyWb",
  "key2": "1jxu6AHknvHdkonGD729aUDKQodb9VP5aRwhUnPasPpCfdxoS5KGFcF8Rhy8dsMkASRiuUueKjS2oYmYLhqvwV7",
  "key3": "22SHXrB8fqXXvav2axgVCk1jWcdUaW7j9p716yju9QRyMUwDYKbdG1uaJsNAqsdbpYeUZw9Ca1K1A7iKHXXLmUjV",
  "key4": "4cc65VxRBkrf5ReKCDBKfZrgsvAAQng4UPQrFFYf7r8Soh3GVXvQR5JfSMWi1PX3z8bvDkbBZ1xJroc66k5VAeAv",
  "key5": "tGwcaGTWXGBpjb92VoqJVQHYS7zKRBUrG9mU4QQyUPqSoiEJwjB19Zz9fR6Ug9BADreAWu8ZUsMzN6QYXQ8y9k7",
  "key6": "BEqTwbYvanvn7toaTnHLNsEU1wtMfG2yLjbFyBzfb36R27fW5WVWXHMXTjPrq2Bbixhf2renAG1pGWezU7sAKp5",
  "key7": "3idoj9TySercQwrsLYRsK1tRwp5eifiVYhZ17mhv6JCM6ctChFJuLqfYiBpUsGneSzMBjaTcN5PRM5foS9vbv1A5",
  "key8": "YyzxABgtqFxQTqT3XMy46MqgTHpaiWGDxF4Xd2UvDvFeYP34bQJ2zrGspEHrPcJyyNkaAGrSxvF1CFxu96iC5hx",
  "key9": "3M5hV3QQTdADqvJYZmBRSqwv1LSYirSBwbowQvGwD4yzrQ538ej64FJrGXndxFW4afgeRfHNMkWDFnG36fieHCDs",
  "key10": "24PvALheAVkgjYwP4oxkop1VBvS5jPmQAAppNY5uTs9FVocwnz8aDqk4HdEjeaPq5WPAZj3Kgit2LsFiWQpbvn3T",
  "key11": "2sUfRxxbbQTYHXnzZcQTnyFrRhgQarD1ByCuirx8xgXveUvxpvdmav3DYg4NjECScZVzB5f28KzGxURGVRJW5PpR",
  "key12": "GgBjhgFGFujFXBeB8qM42Uk9361wLfxJTRxJnh1ByebxZWqFm3G5JTv4n3VVXxH8PuuxXT7jH1jWBdRyychNcp1",
  "key13": "3oXwriKmFXskBoccZdqUtwUGMLQ9JGHawjwtTfRhgs3PwoeSHjRpoEBZo2v3VXnwoXvjhp2EjzDT4x7KjQSxNfRa",
  "key14": "41V5hC6DHm8yRFLqXEJTr3iDxyy2rNaB9jByPhEP7sUxbahYySDGZenZE8fpd7A5XHgGxYohZD9VwQVyGqJyeNW3",
  "key15": "6i5hswmKb6iZtMRTCBqUwPxwLpbh1UdCFQvRGUGC8RWFg8tMX8YMZPVHeTDsv7pA2ZAGyyTY1m51S9BDfWBMouB",
  "key16": "5tfbZkjK2HyEouedH4HzyBUvLJYkf7ntdbWYyagKLEK7RNR3J5wfKdUdrbn7augzqi3QFycc5iSwJVZoG4qopALj",
  "key17": "5f5zNDd64rCnmyj36du2FAS7j2Fs6XmMaVgE2NVFmzCgkxsgAD21u1b8tku6cZee9EyMTLwyb2pxv1ywRPsrVE3x",
  "key18": "2kopXADQcdsExaLTweMdcpKN391S8oHMh5zdcL7jLVJnihphrBZxDdGJU3wjMbMc3GscxdTNTb6wcPoccuiEWcXi",
  "key19": "3jjX8sqeAXApWj33xeZYErCes9yQJ41Rr5L1w7JvBCPTnuQFdMJVHP5zte5oxLSo3JdSsZG8hHphRSsNV9WHL8GC",
  "key20": "4y5zE9ie1sKHWX1FcAeZALzaXXsDcPF7C2p3hzJgUVRch4eFLyWadHGinkHCtHSvrecHpYyyxbCPRbM4FdD1Pdvs",
  "key21": "5YGYz4gZGF2VbbkQ1ny358KqZQsvfFoek48uLamSpWkCxbb1J3HJHp357ZxQnWXtw6nSTK1aDMm2oE3fXd9RQBa9",
  "key22": "3mSEHTq7QhW1dFWnE6r5GoniRK2yxR8Nmj4kxvpQ3gptNiMzJZ9ijRcQuhPKjLB4DasgwEQVWvK8DvZxoWJD54Lb",
  "key23": "5VV1cPnkgH4B4TzP1ncjBsaQNBaAGhEKHZcer3LhUXUgf32DWdn5w6EmFek1UYzJqmhhWYbMXjRBUzPFgjbWf2V9",
  "key24": "25xfQdLf8yKrnGs4dB8wD2KRYhLNFNCmLVy1oLLR9WyirN5jLf7y1C1GriBvrr3WXpubXmgMTGeCc7TK7YzjhUPP",
  "key25": "5FVJt5bn5spV1d7HcAfjgpasuawGPizUZDN26bcoG9fJmGDm71pGX2DtrYkqxfxfJVmDpUkxjQLvDRGqKuMQ9Bhf",
  "key26": "4i81yu71CzrMkNqaUWdZWKxhv94G69itJ5gpXuPLCLiHwwEQdXXYCunAkhap3HEJqZHSAtcxnzKVh7LqnbaF4x1o",
  "key27": "4o1LgT9dSkwC8oHdH7RNrtmkqFyy68ZagrfTLhH4qELicjaXFBtohLf3r4t4iPTQPxvxKh6cbDk3JEc8iz6aDPdN",
  "key28": "4wm1s3bvn6SN6VtAW9yoP7tPxA7capNAMo8S5gtvqJU7TBSnCEGQR28tcfH7xAD2mzvp9DHFHnrycB5NgqwtQAwT",
  "key29": "5d1BZQgssTGHfmJUUUGunQvtHCex7x4uQ2rwkoFph48WcrhTDV48YVfuKEJu9RGeXi59k6P2uyZY6kLQHrjgfMo3",
  "key30": "38dBKgFvzq58AvmHJULVQbruZ224KZkaYwdffbqehjNavaMNNu9mutZS7f19JbFD8wFWLzThebTDoxnkUqa2RAY3",
  "key31": "EZZ78TQ8KgSbPPdmjPwhFrYDeMeNNDFLBavRe4VkQQXksj1L4Vd6yDLDTuTVnY2k9juA4fSpDcP8ynWuGqLkGyE",
  "key32": "3BG6jRWXj8ANCoJZHb8xhyza5ZtzAmwvHn6LrU7gyu6x5RnuthCH3uW1S5LcHeogME6WBqbtCSRsxGszhXd8hNz2",
  "key33": "2pxDdWjPYMK91tSbEfNQGkyZDxkegVGyoALU8KutNu1Qoc4PAtTppQ12cMeiytTJLR31KVDPz7FKUAhYhHTMVXpo",
  "key34": "2btBqa1LeRtazDz2NrVwA1eUUB1GHj3fvhVqSi9vUiZY2X7SZ4txYdZp38gt8dgZ6SzDLvvyXvsWbCaiEXoRHcbs",
  "key35": "4vt7SR1Fw1vhzSUGa5iKKwfsfHzANBqAWW76nGPS7zpFcVSWhXwj7cERu8x7DQwNzNnsdhtYKgwBYM2njyyPreQR",
  "key36": "5DwKjAtLuxMpFhNJEwb97uBzQ3rXN79nVzoU7gWE5Wn3gYYAyqcfh3hmBf4JkxaKgxoES1pgzQmQfHkPdCB2qCuW",
  "key37": "4YFsvzQqF1fjEHJxUVVqYBR7EdDG8EYAV4hgkykeuYEsTtNnKFi5hDwJmoR1ccVVQ8MfBfsCjvoMxYaDvGv7KQZf"
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
