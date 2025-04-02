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
    "3KRSXjhGZq7PBFWAaLnBnQvmLHi4Bg4j6R5GPX8pdPBpCMytmHB5NEAeZb82UpLdCGYW4Fo7TnhiwWWPABnCKT5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcDjCaNbftkgW4LquGHw8YvmervVSpDmfaypjBmLzT3QBSCuRtVFxTn3BBbYEWGE8RZcoQHmuxCjj9REeBs3nMb",
  "key1": "gisug4XLoxeGYxyGGeF3c673fRYL1JRRHakXmaFKLBGfDRh78SeF18PZN4Cv469UK9zrmx3zhGioydzuoz4oUP1",
  "key2": "5vntnwAaNdEAUqxHBdS8G5fhXAChENdU8QTTPNieanK1uzXeZaKu8r8ZN1KGwZCvCd6eEqKBL8XFJ5GMcnYMCE8d",
  "key3": "2MJkdf9Z8jYZw2t9am58nbCc5vUUEvWX9TtJ2VZYex5WEd41jCsBhRT5hk4tGBrmRgjzeMcauE8Mdj4NRKp2btoA",
  "key4": "3M3Mb6kD45mYprKXr4cmG3BwJxGQxFX9gCHATa7i4vnQQU6YKkiE16mLiWLFMyUUtHjmW1cEFKfaymoHyHmyW9EJ",
  "key5": "4E6HvUFgS3LcRAZQnfmSVZHmMhSwxaywjBtWysYhpv4hf2dtmr3LH9qznKdyjfgnfz2whppdnX7kcKGmYpH6QeDm",
  "key6": "4HzPZZKtDYiZjNjDPLirqirPsN1VtRvXNRuiFT6Q2t7X3W7w86r7dw6eeuncyzLZfD1mZuR5Jk2kknjqVQfTgoGW",
  "key7": "3kFhKDa3rp65PkUEJHU7xmhfNuWfFkevPJNh9aU5bjjggnavRTFyMu6xCzfHsHGCk4HA5GyYxNE1EXAb8Bj21UQw",
  "key8": "5knBvmmAdqFrZ6StDgLPJhFBq5EvAuz92oqJLBAuWuQu5mNN4p3oNQeD4aB664mLPS1oVfeWVBkVnssQQ2dX2jnw",
  "key9": "4YZtB9ifBpBR4GMtu6KzEboG1sVUhHQZD4qTZAtGgdvQDwcoJgg63htmtCbMjRS6PfMueK2JrVx15utCKwvR78da",
  "key10": "31gx89UuTbSXRECRCfMAUt4cnVZN28VnHGyXAygKFkk7QX5fa4byBF7Q1YUoBQAhe7etarwToiYLpaKRwauC9rBv",
  "key11": "3uuX1EUBeoHzajpCq8g4afgBueGo9rh7grNDK8zxM855WTgpDYWW47s8aHaKsp5jTUo1PNQyfr7SCi1j8XAdFZNH",
  "key12": "4E3o1KRoShboFUXtxMZtPkPjFcgxu1qA79EAttQWrSAjic1Qy3yBYcYvdx7r3Nn4H2HTKfmpMetJ1yEZ6hq6BcNx",
  "key13": "3YQM8W1w3hkHwb3ihJMiAkYru5tHrWpSjMguN22UroVUaNMkvbPAZzph5n6VPxWnshMMJRXexWtbZG3VRrov143P",
  "key14": "48GV1NidEKdrwDkMaJpXvkev7D2FpUT79mNTakwWQWfJ6RG5si1jCrULUNLeATr5Z2NG7abbJdNwKAF93hSuvcMu",
  "key15": "MmuE2MFKjBJp6Mw9scQr3iEK1CdrV97cbBpQKjVtkSWAgGHTwKYkAQTvNNrVdJHLzkC5cEgcjE1QdVzuRt1sPsb",
  "key16": "5bosYxUDUwq9mopppkbZC8RcriWR6inGw96PZ6w7ATeNfmJQGP8SSTsHE1o6jJFUBZNWJZ5Q6zQBVsES1ajdufVf",
  "key17": "2LoC4QGax5LfMxaja7SLahSVCeNSrTfU6kDaJhqgoNFpKpBVgCB9TmYzKchoqY4Zor4hRhk1ya4pU84x24QpkxhS",
  "key18": "5ZfRoz3YqZyUkpd7mKaYNubAM7qNLMeCy6NBcM75dsovF6fFrBozLAUPGXF8X6Jcuhz1srAtsbJ827rBuEnaKg8v",
  "key19": "34yipejdDqFWYRK2XiULwQMLBpznzeK6akcWyfybX4hPfMc1tL4nH5Bvgu9FxLWPmtxXtd3xbcFi8qZh4xSFBrjJ",
  "key20": "2dYaKpct5A5rHgSFkJu2h7963XjsXHaMkZoPgF4bDgbzGVusfuJAPdBr3q4jpX62jsDJPxRdZideiyVZhxM2Xk6U",
  "key21": "ByC9b1ka4KcUfrb4Yd21em8ymTWTTJ13aDA38cr8QsWR8w4R8qaWfNzRrcyDKWmhRBegSbbg3RXbU2BvhL7NYKr",
  "key22": "327LGyZJ12Hkk73AYUV8veoRuqXPt7TGFsspLksYGbvjktAA4FkWu8w4v8bDjGrBT85YHUtnix8YsQzEtwhk87qE",
  "key23": "5vt83kW4StYYZzPDHV8ZicZGGydHJd9zX4tRiuVW2BzUb32Vtu4FMS64aqihSSry4RttqSCBpyqBQP4DfjxMyax2",
  "key24": "5ccyzF1196uCSBmz6KyBkzZF5SH4jBM1PEZfMBYJDGaUH5P9YPF5FUozrqqYdySAgZBTbWQGqCynh9wy815Pu7Tx",
  "key25": "BHEoZY5qYmnYtDNFTdrbMgjfHYEEbmo46wGded6UJYbjJMeAvDgbZYTyLRASqusnCeviijwVsP47kaJb31u7oNB",
  "key26": "3RmtnybfBP59g3g5CAW1k7Qjr4hp35qAEos9upHUbW1Bt4uCzRT4Btd8xpjxsPJP83tdDZ5LFQTwVYTfhcfx5KBM",
  "key27": "4eYojRKVb3UutRybLC9V97xbMXkZ77RXPxtx95Quxud9avaMWViXPRJBbik3FGEsxox4qHwHyrTJMG8SEEkpAiQ8",
  "key28": "54snsVwBVHEnNAfA7CVdD2JbpE6PnNJy7qWL4HBA4UPmK6Q72ezzWM5bJopGJZxBsSxv4DSw2b1jhXiCxoJgHJJG",
  "key29": "9WvGvs2uvMCi1b2YzrpprbtyATcGkYyaaxQjDX12m51K3LLQstb8hzcYYYj8qXiAQqvceNiL7qmAc7kZPV2tp68",
  "key30": "3tjm2grwTu2xXJbjSYzvfKneduXZMeu9K1JpqaS7uBgRjU8rD9uah4xRgQSfJZ4XZ5X4i4V2AKwZZqNfWppGzSbx",
  "key31": "Wtxsq4z8qAQpsmnpGbM12F9SqDXkuaTCqDpbiGChedtkKjZDqXRXaUQQPBk1Xw3os7XRQbX3YktV5bqAgHUAdbZ",
  "key32": "4eJbwYpQfqTnPqSiS59napkQFN1x3qrzuMWirXK2hcjauopJXyBNnBF35XvSTGbpxMGnkB6PBDVLCkqr8Wu5wx2a",
  "key33": "cFSud5bt3aGn5HM7WEadubn6vBeF8ZCXdggMZpUu2TC4qtEDxF4kxheytxkDD7Fwa5nPzs5AczEAaAtUubof5E3",
  "key34": "2Z7ZbqjmUTpEF58WSe8V4quEQsaUp93A9UMrn2v9oCCNJpWesbStCkms6td8ZDjMp2bqyLecXFeyQymmGZSP1bJg",
  "key35": "3P9dxDq7Hb5nJpM2UJooEnxHgAp64DgT2kxbxYFWczChNu6im6EPLhjWFasbQR3R8FhsZCsp3RKs5HvdfNpANKHQ",
  "key36": "25HpM4UGuneUPYSmrBMXZecNgeN5LCuXvbaHbs53mN5VbYsizT18TSVoYBt2HfFbkjNJByzfGVxXazWZxeVoM5ff",
  "key37": "3fmhRgLxXYCLN4CuJ84nnouveKH3kpKa42xtmF25UdYaDePwnHMrgRFfx6nFtYaWnv4xnwYbuKLtcYDMdZXur7sN",
  "key38": "2hZsdkuZWps7N4zGjdiYxf7BkLapg5YfmHxYhAP9xv5mCEec3LrBpCfV61t8w8J4toXANZaLJWJFZktmMLs8FzZo",
  "key39": "hgbV5zgWHv6c4PKzcsvNxZ2ErSxAuyecwjDwvtbv8DCaytdRN54GX2kBkch1iWan6NSLafWwDncVK7ktrgGGxHo",
  "key40": "MwmoXL7Bu4CQLT2wtYRbG3KBF57UmKvAb5ETtdNGKo3mM3A3VXRSt89YPtWS4fY8X9jkEyPrELYNRqpMCcDFE9T",
  "key41": "2SGfkBZAUPRgL6JixN4WWickx5kPVcainv3jgc9PeED6iUYtNGbkwtDuh5rp5npGivpGCtpczhZQpK67dcN2H4fD",
  "key42": "5HbFmYU1zh36H86NtEgpKg4jsFK4xXa4n3vnE12UjfUZ4yCFPWacxrnqd5euFNxdPYEbda45ry1k89Eebki85mQJ",
  "key43": "ckUbxZTrVCbcCyVvNSRDM7HjV7YYQeLUtzqaCZJntvN2VJtBqLaT9xKn9UnVgK9MZcsf4b9MR42NKhYYoREUib8",
  "key44": "4bMDq4oA3dQj4S84zXS6BtUxiGXspZiHe2yHV5MLYY7cG3i6Q7MS3i57GhpUE8Mdo4aFS8uQrNGWy2EcVQdgQUja"
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
