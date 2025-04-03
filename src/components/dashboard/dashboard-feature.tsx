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
    "4jkzMb3qveZcH9jEeCLgjP7u3vf19xM3rhVSmrEaDYBT5CMuWkiQrsBUw2bwdaTG5MQsErWDhU1SjxJUNU4WHmrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TznbhQKzUTuUSLsfXYgSjWe7Xruc7HHkJitYdG1sLXiaR5GvvApnS9zoG23gXp2YB5FGFB8mXDB5QvpKAKHGo15",
  "key1": "4gkux7xnUSAYpZWb7LC6UWbZB9gaCYvYA6e458PLBwpvUtEkMd3UsPcsu9kJMvkLyKzdaMS4gdUurFYDoVBByDJg",
  "key2": "5nGpKLfrnXXESm2g4QPggAYBdnBxZvXNpNr45WxHb6S6k7HMaULMJbrqK3KBT7wC5WzfiovqX4NQZa7qjs2yBJc",
  "key3": "5M6vMNaJFAmuaqr9hGTJRezDCGtcPCQtKvKfG4rBe2CSVxJJHWrxenzWLgWmcnEayWgYNP8Jie2mdVqPHjSCPvzW",
  "key4": "2mumNdsmiqoNPSgMt3BNEQQ9xS5PzcH8JhMWMqJ1TfuqS5WG5mLqJA4rpDaHcD2CLMe8vd3yapY32FK7gB75JPih",
  "key5": "2JzRXq7JWeW34UfbjR3teFsSUZEam32JiMM5ePdirAfT8FpRJCZosbfxL52wNT42oLws1eCfvcM2nfCgaYb2JBdB",
  "key6": "4pdhuRv8KBBATaecvaiJP8VkhypZapuK6JsSqNRcS1MLqe9XwVQdQQmoCDGYSCuhm8oeASAHB2piJFQ42pcGxsfd",
  "key7": "5115TsLmqGZxst3TghPvkV1qXGhP55NSzGgBPnvzxFoefaatVd6MHTCieoxkTT5jp4yEVrukw1coGXeMA9dxj3Tw",
  "key8": "544dvkiiuctCDneoM4vgHrfy7hy9nGNp4x2ZAC3Pm3TjBrooBA5cPMf1skid85zmFZBJJPKnd6amYntshXuM9EvU",
  "key9": "63Ybecr7A4Xco4yKuWu8UMzGYetjbswm5Xgs2k5o5pwUko6QJiMowLKDnsjAaXVyNoa9GuegVuhQ7h9HJj8waupA",
  "key10": "3vVrWVnogcSHQhqbaoNH9AGLV1WSxPvtCYNVo7B68vN7MoLsn3jhqN6x2Sxg1YEXDLqCGaxSBHQD3VABPnd8kqCT",
  "key11": "4FhsTLfVWMMjCRcwJ7hhtR2eiEpPGjeEEa6MnXqXsVtj1DLuUkMfayrhMBYyqCsQSHvWibDNARGPNocVrZutW2CK",
  "key12": "51KRAejigQL7gkDUYesacNqZERL6GEtSsyER11ZYPXVck6s1J33WXDo2AwteDSAcerjYEcQr6ChekNwR6paxwA58",
  "key13": "3R6YwmAB1iFFDg7aM2gVgriWKcvQrCTZgFkSpScAgBqUJBRLS8LizHxSJk4Ju3nwToQS2gvJvWUoqLLwUehmmpTP",
  "key14": "5oUGn4Q3nwLmd46MnDodeau9rHYekQqbL7srXvm8vtKULx6c5MJtZrZfEXotLpJ7ejTF9fq5jtqk6XjoVt89bCzV",
  "key15": "2tG9yYshjsxmK52qzvKBtMpxsKHA4Edd7GAxU8bYYJ7bmmBio5xGKZTuH1KDreTy6z9mViQE7M5ahB1xg9RtbpDR",
  "key16": "3hSSZRX867HBVyRp5ifddcR8ZTKMPoAjK47mXjN3aCJEEhrLiTH8NoBocBUaQ7WPg9cYAn9VLT8xSmekEhPA7Bmu",
  "key17": "3EUFPramQt5V6TQcVZ4QV72gYrs5YFoPYDp2KKGJNFMnFSpzQpwzaJr1ueDmh5ibnLUZDd9bpyXAXuCBRcG984Nz",
  "key18": "5QfAfn8Q5geyocoNmJbFxzNkNMGxDZ5gjyFJmqGUq2bBrDSHdera37mei29TWbDXCconaHSsPDSjTCFf5toS2mjY",
  "key19": "aMBH6vH4GLqcKsmzyAJESF7RvZLhyLSE26pndfMPrWnEb8tHctKN4brUu5QR3yEDWvDvrZ4wHM8AJMW92RyKumy",
  "key20": "67YeDcneqBAVVZ7tCfzdZRiakrW295RyrbUnURkgUheuK1uMmZx5Pbzrwgi53UihheJE8Q2kmoaocg5s4Lm2sicd",
  "key21": "2Spyuq9cvwWNBhnFePuiLQ3yvv66ZBY5gz3pU7TRJ1ZWnnfGdv6kkDGVsDTF3Xp8VtUyGSo3supeaNGaz2fRhZUt",
  "key22": "3AMCqC62LWtQHSxYYXKyAgAqTjF3ceKveqr8pjPrNXhjsso3MnecxHuyKMbvDYifWuboJam2gNREZADryrsSFpCp",
  "key23": "beZ9YUGED66sCvUYHj3VjD7zuVe8NwCeuWpiYSYJbRLGcb73n37PTWTwYegEVh6ryCSQoUTY8hvgMTNeb8gvVdT",
  "key24": "52DYVjs1JnKLFjieDvbA4PbJMn4mw5m18rdPrJK3atKnzc8zvjeapWSVbhkAxf4ZyfxebcGHKJfg9KaVHP5YBtRF",
  "key25": "2rGs1beED7sjgy9j1GBpYGNniJuZoixw3y7RKZHwhBzqZgh79AU3MSM2wN3fwURNd2eeTavyHcXL2amGrU6ecZWc",
  "key26": "5jDhLwEkTEvjPyN1YTSAL9uNC8D9jhbNki3nog7bR1T8bxPzpiokb35uF9komCykcWLsY36Hi64ki7r2VQ5cvkhu",
  "key27": "31wZumJGeXrQ4PG9eK4PBZvgNZQdP6R9fBcjiPmzVhmc39n9HjJr6XYv11zLZLxLV7aRnaBB4cBC4Mx8wkB46mnu",
  "key28": "4iJeUeKJVwD5Y5G9kJ89vVdxnvBgHtRwju2K8nMgtJD1nE1gjeoKEx9R1pKaU44PWJtQkrSVvMfnU7ruAC4qvZ1j",
  "key29": "4idD2b3GJ83u6W4VcDiqgKtXu4Ng43Nh8SWYB5hVkuc8TenxGoY7vkYTDrgPk2mJ9ggVQpaZmRuxrgNyDQsGFvJ9",
  "key30": "3qZzk4dhpLQRnfQSj6jVP5wZwbQFS941sDvV2fLksWpaET6gbt7DazL7WM33mxh6t3pocrD1F6EHJQ4m3uxkDKhp",
  "key31": "4yQB7F4iwQ7JEpcBuvseiRZgGNcaWoQpR7aHB7N7MvoNp6Qc8UMqp9hiZhy5JzpXxjSMb7zAn8a247LLA8rP9evw",
  "key32": "BMaatv1DZg9JQYvDw5sQo3SNfx8jDguSLP3t8tTfqsnB4KQSKvRzaA3TU9LcoN9kYj4CtmZkRJpsE2gaAUe76Nw",
  "key33": "JsQGBrFd3HCYRHpseXCWic1Xc3dbNpjChTiJ9ZSDb2K5YmeUkNsMBTGr8gj1JaMnJTprxU3mM1N9NSbQXmji7Kn",
  "key34": "25rhvhfc4zL9hsCwuQFFcEJjfRW6qekievP91TPep9MiUJhU2a48RXKtTwyGJ75iSwbsvtc27TjTZ6WS5NrFgjuG",
  "key35": "53Uf4LD6zVrge5aUBmWqA2ywWrEo9CgSRHjiVjU6EnRkmZgGgom71r2Qrgtug7gQZXCnP52hhe7b4Njv2yvF3ZTt",
  "key36": "35mMQGpAkLsbqfqkG3thh57vMfvWng3vzWSuf6fcEpq5XZuZZ5vVL6CZUGaaggntiooMVay37XLhQPhBTbCs7YEH",
  "key37": "2F8tnZBEN3f39Qx5wpCxe6Q9qFNvVYC9dcx2eVfeGLsP82Wx9W8VXBwG4wLZNsEvoAYFhKuX5eZPN2oQogvyEEKZ",
  "key38": "u8nxeWFtCzEUoF6y22ZzsGsWp3LvLuWeeGzfqWHRQwb5f3riM7dtpHTZqxZdQ9umU2gAQth1Vfm4H3eJw36VqfM",
  "key39": "2sxcZRqs9dfxc2XBVR5ib9ertJSbCCdqyQTs8JdTKS9c7SK1vk4uSQvifQPUxVsY6y9JgonkFsGoZYg31ka6WE2o",
  "key40": "5Ra36MVmv7MrKtwZ1vPsxfv6GriGoh5wQ7TfsSb6Hq9EvxzUojuMEJ6AC6M8qKgEGrBQKKPdL3Lvg32aYHT6shyP"
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
