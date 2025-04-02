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
    "5sf1T1zViAdkz34KWyt7abqAJGJi6CnDTEJQfSwTZ9GA9EErnzCdE9sKZ7LupasTi5Z5acnGRwyNsgZuNRs4tH8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msHZ1qbUP3B3zdT5fQS3kX5S6yhqgvofAdK7qGqA88Po3nFohj16dFcqWdoA7YzaUDkRmbD5W7ELBaEpYRqbyC",
  "key1": "3Mge3xjx1KqFGGp5vZdx1eq1K1opqD8oRS6y6KYc8LbTwwozagCv7sRrmEkLFEgsdJwLWGnTWFUhFrccDPVuzsWY",
  "key2": "XaYt5t3P5Y7Nfpp4p4ViapDbpGbM9EL3XwuU7GK1hAZmEczZuLgQqsbubf14YQL161CeSJgV6bLSB64KNKgB7Ni",
  "key3": "2yZRSAe2Tw8FYEwkVP6MjhBxUWvPAnpWhSGHJuL8DtPYAqaNDLQEKGRZ1Hwp9SCVbH1F9YXaCPjxt8bDfULmEFR5",
  "key4": "2paGay76ZhxoVRptyhb3qF7hqNLogj4SnpDnkk49f4PHWKTycWaepGoquV9cwJZJ6p5E2Y57ieA6yg5VooeZkR36",
  "key5": "2qaHsUhL3Z4ZqNT3qDQ5io6KD1Fu5yNtQ8qzTyU5tAJ4sirWK3uR3HiXoUsQzEnF89CxYqLWNgr7zDJomddSekEb",
  "key6": "2PZewWNQ8mBCDvyJWS2XngEpWcxM6AZ3HzFhFGnrxWULgTyXMYsedbfZyQhk5sgoCtW5tdTE4ehXwGufvVpSR1CG",
  "key7": "HVKG5wuPtS7vTf62rdaD85emPkdP8RK2KecbZD3P2KPtXKmEmRyUjpngXx8L5DXVDxFqSWjBbB5CeuDF9gahngH",
  "key8": "4RVhhD2n2TXDREbRX6jJ332hmA1jdvQsWVAQkZ7efpPNiM3cYxVYk8ZdLWBt6Yabn2NgEmGzRYs81xuaq2cLk2Kx",
  "key9": "2eSmeH3PRcLsgvpTzdcASzw7r6UVA2Bdxtm772jk9TenWFsc4PryEe8D5WRi4JNrrz7jQj75TVQn7q9nQAyPZn5j",
  "key10": "2z9zBw798qEz8SUdLLo9ESpZiV1uzH3KVPY8p6Wmv2YgPyDwnmtFbmUFyoQSTmT9h6GwUfJKhb7JchkzK1kPLwRQ",
  "key11": "qAQ3rf9RHuJmYvYyTgi191H5KA2zgLW4ZqRK2uZe5NQugUKN1djqemAi3m3PTP4DoiskV6Kv9RSrrDyAyRTYXwX",
  "key12": "2PWVP8a3WwWR5Sod7HWMbqpLUhnMRDUWYM3ys8aATvPgouXGMbpLDS2UpyRTB3SJ9eavUXAvmvZqbgznijhNqoE6",
  "key13": "2d675bDpn5aS2vb4X3rVvK54qoaYk9iNCrDXfJ3iiLo5VdD9H78ARKzCcsacevuA6nbCfct7n2CbQdfpBG2nG3TL",
  "key14": "5Z1hZbq5b1qRLmwFYVwoFr1PC8YXUhBGFRwKCW9bAsU1p7fGHY7Qd3xGZ7Nd29EZpzcH5Cr6EMfSiTgm7JuA6Djo",
  "key15": "2S6YGUs6FpY9wrh9FcHmMMPRxSdx8aJp7T4doyJ6qZsVMzzFXSjVEacET3DFnqN8T95eTbexWNnNeZnQof6J9yGD",
  "key16": "3i71hZLdADyhsBwQJTbfntsRb3Tr1Cuke1MSobCzZk7vKygrvRCNk6HhAebEYCGNcaCt2aGeVzsamHQCSW1MKp1i",
  "key17": "42RvtGeXR1RLKZ5xa8pUcgqzpaBtgt3KPcLzobmcaN5Sz841jSewt7zqNSgk2A1nHT1qGRmGbNS1BL2waPGY8jd7",
  "key18": "5ZWUYNrqq8Z6hsNHuo1yK4AaZyxQvRgaNNyiZsK6SBFGGjGb6HDf6e6yS7jLhAxnqPDSiRvUjyusv8tnUz1HbXcs",
  "key19": "2nwVeNxpstENz6FsXctVczrcjVycHHr3BVYuuBymLXV5ngkyP5CHZ6hsStuxoidDHbGTxmUi6rUFJBdFrMqAn7u2",
  "key20": "3U3vXUfGuKoBxfa2D8seCam1ddn7ardtzRbKVS4VJ12n1GFZZ6nJ4HEqgXTH2qzbZ373Lubea1QuG6XMuRvqcnRY",
  "key21": "32a9bLyzZYhxGpjAMjtAkxpgdvaL7Futaf5yLky1LB2HoPpJVnKi3GwUgA8v3wF4e2iqJaqJfGDPH6uQhLHoy4Ed",
  "key22": "3d1UtqJyBvRbrJnRSPyZBus4vQnjib7mfUYgXfoQq2yrTKLcfDj15hJQrd423xBxGnqXhMQm2DREsDtWxkrMQhTQ",
  "key23": "4Ymu2EAnHVG2UHDpQ41aNoeJzch91Qio3jbg29xt3hU42ZjWA3k2D7CADUwhhT8VRtjxwucB45NgiyriZmgiv6E7",
  "key24": "4t6zDiGw12UchxsDePY38Ni3dyGjJbSyQbp62Y7fCZ8EEH4nJjNi4MSyGGvgn8yzoX2PoKDnZ3Ydx5pGxLYSVrrK",
  "key25": "25ZRH1xPWieEBFZzDNxxP4b7U1B115aBuBQkdHFJLYrfnsZybB2fY1nqDRN5KeG6wGzJncZUrCPo7FXoQKzdLQgz",
  "key26": "3dSbkynafFFryRfkN4MR6kBYjHXpU5tjXdqXQuR2mp5mepqv2Pzo6EHo78vk91WnJQ63emEnshFafAgANePFGgWf",
  "key27": "2VS1aTZcRontTgUawrnUN38aNQSodTRqoy1H33N74mCtnznTdx9aohBtgn3MygTyjHqRTjNy9GpmJ4GAL65XZ1c4",
  "key28": "4ho5Movfz6vt6PFs4ALN8nzZRau7Hms5agcqr3nfoRiEom2vZk2JukFz5cpafKyPzktjwrL3qQVLcq9vK2ajKWfK",
  "key29": "49YLBo5ocTyDxSzjWHpQ4J9qac1xWNV49Cdh5EZY1VUUEioKhqg9G3xCaWDbD9dWoYifJPfuuwhExX4x6g8PMefR",
  "key30": "2TCi62u6jaukyAdKYdnnL1TAsJi2FL4JJuzWSqg1EP5zD6tnHdKjAUgAHQno8scJYjCzjdohuL8bi6qaxL7zzzff",
  "key31": "2hYJcgja8cBh7KN33ZGvBdZkrh7tQWQsYWSCGqn6xspcufLWYpy2S625vp6JVzDMFGihWX5b8ggJFgtJ5TxU2g6Y",
  "key32": "4YoxY8wQQYMMfJ5763dWsnjkhkchueQSsBpfQt9CXMoxumTM49VkBvMLAS3uYdz7fVzEQnDVJCeXqGPKsCTzzZ75",
  "key33": "2xStHiquTkFFfrrTFXvpUZDwHJP5N55N8RVpyVS1J64KP8769hbw83sQRYebj2hBrVuhcKQ8ZRjM8g9ZEP7rogQf",
  "key34": "4bTp3izzGxU27pw4fYT9Dnx7wpcb1CHEo1bFFyn5RvQEd4SyJdHp8QUiqqYDsks5nrULVYs6VQ9oFUz9f55xyBsW",
  "key35": "WtgGKhNLvkXqBbBavQ1pyA3hQC1HHAqK6nC44UNp5V5zWaJ82NmdxM8xwXRMYHvQyysvv3rL6Y2tq7oKPyiWXeV",
  "key36": "4LbNBDQjhVRzrNCkyfwWaXHUCfyqL54id23zYmR7Cq2UycVGGxoUxcAVEZNjhsNvEGbYtiqJxjTvxYA5WJ7PEkSg",
  "key37": "5jmkMhEeek3KjTv5tohfz3wkThehJENUPQyT4FpoamK8Pwu7awx9u26kD8hTyicEisc1GgZJKVpxXSJapQZpqzfD"
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
