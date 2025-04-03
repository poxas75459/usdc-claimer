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
    "4aaGNEpjLXhKLRrixEvAbwEJmkCFgFbgvmKPPxyC9rpGr5oXVcfRWXNdAsv8U8Kf29zZkPbhGFaSYEasXgdcm1y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ia6pSXJLwAyMNPzvMkKcTiVUEkp4J17yry2nWqFiZeYymwA7ue7QAh7FUtFg1U1UbYakmsCrMBs9ec6xmACTQAb",
  "key1": "3ykxC72jWag7vqwZ4XJ1SGmm1w9HfzN2buQgbkvZu7PieEfGHmqximhFugrbwWioHm2aBNc83tjRui2WWeRMkk1A",
  "key2": "53hXRwpJF5L3VSJJhfcWjr3kCKrb3WadxfmjFREfQ8XuFAghxHUJQjn8WEGKRTWnnPpswz5FpNz4C2dXxpkXTKA3",
  "key3": "4eNWAP5J9BNVcHTmWtuchAUir8W7Z4vgBJwrfUtTqKjKzuRvwBAQHpzjBa6nxpKpRf8W4Mx6zfVcJmDn8gtS3Zqr",
  "key4": "3Tz2sqEjRwdcQBKjG25CXhczpX85pKuSkyAhwnHcd1LJqusiyG2oZaPnNmgxHYcLxu7n3W8fwuQsrWSR56JHEPHq",
  "key5": "3P2EYM6S9HXdkJLzcrwEBGgLPZF2h2KjovitRawf6C5bhqo3GVYnq15TG3U6CYQVqG23qowDuwhg7jJ5LZySr6Lz",
  "key6": "51ajjMerK2sXZwyMbKogW89o8S21btZtfQ8HULBibVPNAeh6vqKn77ApFCZP84uoJRNADgo2nPKjq4ucH15VcBYD",
  "key7": "3oEMUErS5zWyWDirihJ3UouZGtJqfKgg3RKZ2qhRsg8zwbAUJQFPwttr4bBRZoXQogJQNar56UFwtSYKw62A6b2W",
  "key8": "v98R7L8evZScLjg4aHVNVrc3xvMSfdSzjZZWE85iBp8CZKqUsBBMektfqJMjvNDC5L9R2vNcu8muSVZ7n9xxyVq",
  "key9": "4yTtvnd2PEvbNd6MXn27eZzFGXu6yasVH4xeHaMgpunYUfJ6wUvhw3mHqQBG3Weh2VpmcCSTjM4SaQ7Rwbu8iASw",
  "key10": "wBY5SLTLJmkuPLuzDqxnhxtb1igK55cVmAKbUR5fh8rWuL8xG3oSBZdaQseYqDSDTfT2RtXAcq6rhG7GwvuzSju",
  "key11": "3G62QNhfYUM8TUnoHVdyNU2hvJX31GjBHFrvFf51xBQBbLoTBqeGJzfx3MBSvxUfUbZpjCV69eveX38yXLEKey7j",
  "key12": "5V87zu5k3cCY5TPDp21r8jnqbasgz54moN7LS6Se2JWFZFWYaBdjyT3MCwExVStz84CWAdyAhR1g46AYeBmfrkXx",
  "key13": "3cFiSUQeqHtHK7FmmTGzumRJGdGP4xS3rDWHfdPKKDHua7ZpjyqTNwcshTC3jz13To6PeMG6bmNjhpYKMkMZW1Q1",
  "key14": "5FpsyVNqrGpMQAWAZ4B1DN6G137XVPyXrUTbLAaJ14D7MRPbQPvPZjPWS51buivYVNNhHDp6qwuYmonc5ac17BRS",
  "key15": "gP4ej1oWZsayGxayiiFxwc2w4rrEXzbnyUGBGa28AreSbhKHhMbWqgogqWybtcmGZUcwovYgfYHYjNXSLjmt9DJ",
  "key16": "5v4GwKVQakjdKZCYXf5LnNv6JBDdNvDsXmthR3BidxeLSpmnBhYkMj6L8W5FY5LS3858D8rAeoLrqVYXN1Yw8NcK",
  "key17": "yfSgA4SH8Vnq3TtVBMWgnCvB429yLXpfuBp5J6EGSPc8LJRnaXXpgspQEGN5kcCbkbh37yau5pHW1dkhHRrQwQr",
  "key18": "5tdvw4RUG3TPm8GqchLCbapuDaaCoGoCuEGm5dq1NBjuQ99sPdSxM2EEMEpBDPsjvn7sbP4iQYEWiqLqz6X8qPwo",
  "key19": "5bzV86e99x3vWXDuaoHp6YWD4WNhSaCsfjvkY6NUxrKeoXBrzwy54ceui8mMi2kKXFYakkTcqxPKgT7XjZDT3nkW",
  "key20": "38Tbfi6dcowdcJgEKMYbxEixPbcvZpNm9XTaquVuK3YxpXqhJpPaqk4DKvNPxQM9gVndPpnxfnxALP5EWGAri9cy",
  "key21": "U3G9CZDH2M2P8Exd3sEmBaNHeTD8qYkScp2drJ5ZtPvpVRd3DU9xmmrUQdyGGT2sP7vDcpWpn7Ui7PukNojLCSo",
  "key22": "4iUcbt5HAYpcgwJXhG8i3vBuasxrabSYThqYKXLf2dk4b5j9S7nG7eE6GZWb2TYSzbyKFCKFWsczp7AyssCuoHHd",
  "key23": "44aRvRoQqrkTaTB2ZvdcdWi727aSfRj83VzbyypbAhaciECazwKFFkkLpyG8uHr6qBtMTPfnQb4GQappeUzsgkmk",
  "key24": "5yNxAPHYbAga9A7kVChZwzotT5Eirt6cLgFUomdpg7MeovafDwpoBwZDJqwm5iezQrscY64k4bUP5B1BovGiuMkX",
  "key25": "3iLtoXaCfqfHG19cYYt5F3tjBo96x8ZqJK64sZ3cVvwvMe18yvQBtcBgLQZffCnRP8sdmRtVRHuCXKna15TTiAB2",
  "key26": "2FA8WN3YHkKeGK8npu3XgogC8pA5hg1wJEgbwmLsxUAXFukkMMaQbFDszw1QJ7jPPkypm1BvzCDxPvpg3rew2Rd1",
  "key27": "R4vrF3JpyEFW4ZiWjJrTg4kexjQQaAy7n5KUNrdSCrXrFxWS2FH99iF8qF6x42q84UJgcqWKthebrmAmLR2StrH",
  "key28": "ASV46DzhPQ6jqboBndDcshtXRAgvHaprdbZnb8u5gu5qiUsYMjy3Cm9G1xJodrWwUW9F3ErrHzuF47KhVNfGdHk",
  "key29": "3L5x13yr3ZurUQheNbvCbWswHmEa5DJrGf4wdQThCXRQdgY8BUacYSMJB1YaE5ZsSjF8uB3ounCS5Aih7mGVrPFH",
  "key30": "4UkznLxmamUz862BcTc1WhjvQyifAvKcjtwvYgKbLEvk5UU2y45gZeMqqQAmLkUxqkVLgXmq1BA2ns61z9bX7nBn",
  "key31": "2bSD6JHzgxRWiJFdsg5QrKRXACjaG5zAc51knMkKqvrnvwiEGpG5BaJNrZyVvavtfmrJz6npQEFfgGw3rvJprNr",
  "key32": "4aZzXM4NShspNe8aFsYeBK1QqBuZMHnhZen6LDgCAch6D6SniQLADyM3dT7FYmTDztVUyjPHUSACWLsnh9eFNwci",
  "key33": "4TiNZei58HfgkwAraxyMXbs3QBgwWPWt5jGjGhLYVXktqrC7fAM1vtWkR1AXffHTVSs9UT5ktTceyuwoTpJDd2Tw",
  "key34": "3R22xNx2qT8mS8tDcDd2DQuppqEpUtfhRN8gAz2p19dmRDZmCviuM2hg5XfNbij7voueTUxSHZjMxV5bv6JWy2ev",
  "key35": "5dXq2EZ3devhRagfhJDAb6QtBB1VSJ8M9z4FejT9nsGqWmjgHe9uQRpsFTSDzsprkXQtQUuB4fR3cwesLvuXhgvi",
  "key36": "2HVRfCzmvRf2H2wW1d74u55qRG3unfGtYPiuVhepSqkHCQuxtXttWPdQgnK4RNKkwVzWuBLpCigr1ih1VA815H82",
  "key37": "2zEAdf2SZWvuNMHWtg5CBCNp8E4EEtKsUaC36KPH4c9RYzMkSBVQvRnUgNDFuPTtkBpYyJUJS2odYQWfGRGHcWEa"
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
