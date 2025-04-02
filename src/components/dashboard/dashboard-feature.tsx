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
    "36vmPj3ctLG2eSUD3mVNSBHrc7onhdjbujaCQd6HVsKYToXYAV2H4e56JD9faczPEQ8ZSLwizwjYHEoRBAKjN7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFsHU3MxqqHvUYcPJYPm37ruqAVjaBmthv2nMUmEt5Xf73R7BNUKoPoSNiBgVqUVwUyDH69bZxHsCNAZEHy5RHz",
  "key1": "3AB15rTFQKAwAAbWcANRSxBsQPz6XP28ZVnpfQW7c5wKkDXj61MzKgck1e73CYJ62fWBENT4JcwNUkTmWHTmpu5d",
  "key2": "3p1rUcuKzxT3cNoQN8uVwx4Jj2nfiZB7SZybS4XgtKwHpw3dbNiFroCWNJ5y847VzS4QAKkcBRj87pzfwm31dPw5",
  "key3": "5wEn8N4RWNhZfQMy76FbREkizGhnoqRpyNvvPrEJKuXzb8thjPT5Qu3TPoGH17nTGJnWh3Wgf456Y38QuCggAx7v",
  "key4": "4fXqiqsMapB8SPsSw8BeScchBX1gFLfysWZFt39jLp6YNH7g9hxJUUv9Q7sBPDU1kaupMAKU2ZmUS3irY7sqt5r6",
  "key5": "5u3ucuY8XxyWgTWWkGwE21ZxvgrLbBai1KFnVSvbEWEJBE6gBy52kK6518HVQXRLpRaJivz5tHgj8sUHquWP5de1",
  "key6": "35TynFCnKmmv6xX42SywtLRa9MYKLJvdE5A1j7joKhjBkMQC3ejdQkczjH4JHdXFjYchojHViuZqbeWAPwPV8ven",
  "key7": "2U1fYRGp1xshMe92vYwuC7QbgpvtArPiArf1dWtsdq6P9BCDfU2MDgZYwjbqxJDFdxKQFaSyNyWtc6zTuMGFstCH",
  "key8": "5gJiptZgw1hvNqTYCB2jeXUvyhGVePZrYyXymQ7rEWZ1q1EDqjZcHuwQRpzdLwpjoaY896f3kLrbbtKgrRgPCZ3H",
  "key9": "4afLttksaaPwdE5c5qQ2Jja6ffs4gRG5SHoknWA4gsuMbqu4XjCQsZfHNtvhKVS3w2DbAgsTqidpj3iWfANGZURo",
  "key10": "5Zj3JK1zATD7itbQc9KNbdKvserNzAeTQ8XiXiQdYdyjKAhLGoPhhbayGNmKmMAY1ss2PWP6LvMp8BhGaBboaDnn",
  "key11": "4ZNd7fRk1yEx953zHYgveuqNjtJTbdeSFXvX3quu8h2TeAzT7PWREJHpNkNT2ZKETNzW6v48krYvuRwWSRxWTFUF",
  "key12": "5zCSBdbQnraCzYzYiBFVNLHnDAPMDPuF2YjKyeJETvXobNHXbxZ8wd5YKCvWpVtHt1hEbnrQFjAogKU9dhtXLRkK",
  "key13": "4CiNev5JPv1MErVg6v2DCT3TUxWTWUCePGPXu9SN6BPySZYnR3z9TapGXLnPwvMVZo6YcJQCJ8zTvHrQa8TQe7JG",
  "key14": "7ghnRRWUgnRUxGKtYzMepqS6GMdCUDyGJKeGf4uq4mFP8pCUHP6ye6dd93vMpdUz8fhAxdXj81M1S8zm4ChQhqH",
  "key15": "3WzqdfXGrA6MsbuxMi9JrzrRhpNPr1YyvXAxVnfAnbNRFPQSRvcBsKNeoet6w5ZBbC4UHq4QqX3Gjg6gKxBd5eov",
  "key16": "5xDYvsLWRwz857iPtXAeghN88moHbChduU6rUvP2XC7zS4fTfYMecEqAwvFMEq5bTxR7HPJnptMcTbPXEUn68UxK",
  "key17": "4zSL9qvvKPTxWJQuKj8RCEr6rrXbDJ6TBvyiHjcG4m9zXxmUoa9LUKwKDMdJNx3ocWmJiKimgv6Ni1gR4z8nMGvu",
  "key18": "4S4p1RDHije1VniiNFXG5MG9XPydNfZSkyM4hSPycxxojjMqftwNsu2i5KRBwF1JjA6qkWXJe6kaVV2UJNafC3KQ",
  "key19": "2wk7ZWYZiqNsP1Fbri3BBK4nxdNXox8WN5y6qV71zSbf84iZhUiqCpnyiXRJKCyDeXdJ9RbVtkAeHUQXU5kPjShf",
  "key20": "3JKR5wCvdpdeVXvoqHGZBqbDZH1p6YLxwRZtCeZxoSQc7jrMYRoG6Zvpao5rQvraYwzRJy87eA7KyeuWUnkYXYz4",
  "key21": "TuiaF94t9z6nhAP9a42jLDXtLd4BzTKDTgMkTsurwv9CYnzNuWCBpkvxKhsAB4GyG81zsDxRZ461nP2AL9kLamB",
  "key22": "34JFWxVafEXpxn9SoLc2qqPrJMaywMdgVK4dwKPrxXcfoUEGJzSCuw6EPxd3xwMipWo3XhMsSpdmZ3uWSa8Qdwo6",
  "key23": "437UuMAsijoT6jcBH1zJCiqmZF6tFMuPEPHER4XZNBNEwWhhxdGVcQCoHJv63cgGxdeEszwpXgw7CLBtpiS9r6Za",
  "key24": "58sFu18u6Uj6oGu8WgNGRS48H9fXVyzUsrWTTQgbaP5TDg5pPEcK2TrneXYbHyn7fs9mBZrJaYi3gbbj2JvKtftj",
  "key25": "5FDDYZ4SCGxUAHsknZa9uinKnCQ8hMm16T5ZfqE2ZvKum7Uauwug6vyu427hHtTMn47iAembrJZqN5wDKBaQ3Ybd",
  "key26": "3eb55ihQtDRcQMBgN7u2vUsp31DrJ7fvdWMM8MzoH32bRoY1PYyLHsMW4zMkqJ8tojnb4zZuFmjHETFKybyJEmm7",
  "key27": "3yMPV5RTvnbNeqkPiZr8NdFz2GWSbjqzGZLAiYi2c5jhrGz8itDKej5RZCnYGKz2gZ32AwwLYqLca3abvPLoqWJB",
  "key28": "5iix7Kde3hFohfP3KW23jvEz5qh7bL7ErJfnHkB5Zg6ecTPgYzagNUUXGeCE3twPKKtYQeYHhZowfrzeDRzBYCPR",
  "key29": "zt1UTjdZ44uuDrMAETyYaeLVWjmxnwa6UaQum8aBoD76NZcrN7P48Fq9AQdnKSjjBc5xwWiYKnCvAdD3myMKfXq",
  "key30": "4hhHmzTSngGnwA3LgtV1eiGtU1adxtMjWkwXhZTfNxRjh6smxeWZQzb71aEXTfLC8ff8xuyftUecfyGuJ8FRXxcr",
  "key31": "3PbqktmpvqfcLrpJ9DCxstkPJHrpKWLAfdPFXH5DZFWKU2JpUHJHiLuBLT3y7aZysDhiLuncjGWCmsNWNAXKmQVZ",
  "key32": "2JRKg1ULgykwhKs4ixJ3iKrC5HWuvU4aVvKSKAZCyhyWna8ph4DFntGn4fuw3v5rGzYYBSa4cYKCKmbDR52QA7YS",
  "key33": "5QboiNziWNbfaHvi9WRqg5NLqusEFKnuipC9uaHVtW6cDcrNufzMr5RQD2K6fQn21ww2FThdy1JdtrJA8CsfH9HW",
  "key34": "4nEAJR9LGCT7e62uCjekAkFdfVSJUkEorDrrwpLYLPPK73GpASX8rhy3jrdx5x7DXrV8iAud6BT1xy69Jba2VnKB",
  "key35": "3c4L8Pf1d2NJWd2PAfKsEs6TQ6hdgbayt63XM2rryLuYNUqLyuHLWDd3mL1EkaTG5vr8FUGLxmG2y2f4D7jLyYHi",
  "key36": "3yp7umpSgzQb1qsfBhUeP3xMAwsgPtfcc6mB5cywBpdqRbn3YwGt1TyR74Atz5qxTd2TEVapho1UeGWbZBBbyR31",
  "key37": "529HHszN77AHur2PB6Lvcgx2gsHkMNwTdQfPpDeNsZrYmDQMAs86UgN5ety6krmpEK9wTbfdFyp79oDJK9tHupi4",
  "key38": "2cr3caZY7Cag4DvVWHAWcjD5Ktr6ZKxgjkrnwpJZftSvD7cCq4FdBpkqZVAU2ub5c3LrXWHSY2nGgpoQNXJ6tato",
  "key39": "5Y9tDA5SRrwgC3NUhnu9ZuEFrppLg4mKL7CQM4awtHKXn4ocgCXMwuTEWEj7Goxi4knmnH55Sc8HUGkpGuRBoqJu",
  "key40": "5umFs3LwEWhuqzxeedeKBePz5nffAdAs1Ew7TWRfTjjMgDtTv2DkTWnHLoMdpoHJzKSogCLGagHgYdMmNrCnAb1j",
  "key41": "3Gy6U3vqM7ScemFnXvPoaGnozjgX7Gg2fEuVaCjiYAsjWSBgQiNiMtcGrQpJ2S1Bb9Tn1XjCKgoVSfLDBBfG4yG4",
  "key42": "2Uxu6WLciYxrm89rtqcRVdpnapaoj7uLrQnvEudLdLrqFQHFVaAqJWyNYNJv3tqeWiaA6JqK38oFfJJrF3EyZdLS",
  "key43": "21z3LV48Yu85WSmrKPGgUGYihL79X9zepbbFwiw4n9anTWWHEA7JY877ijwpU2zy1wdEgsxmXiiH15m4DqQBeCdZ",
  "key44": "nXsDX1UjHW6Sf9vRzGU1jNamSAfPhZAFQjbpYVxsDjy87aZ3csM4XrPj4B6knk9VJhCRbgHVS2cDdxp2xcMqzRe",
  "key45": "2iuMjsmWE7nuuAcZnhVecc7KmQGJrMTjDKFVFwpJVPNr6eSbzmoJGcr3HbjseapGr4CmASe4G6jstnhxeQK176bu",
  "key46": "UjpuUUEbXzHBKf826nJCtDRiKDCPVdgqbWGgaJJ1MoGRrVn36gSDLi9bgno2tqw5MQ2ipEvGT1Xx8Cp5wsWXzpU",
  "key47": "47BoLSDAPHkdH5FQNV3bx7qfTXhCAtPWSgKQwiRGgm6FpEzMmB4yDCvxfHcxFBiwBvSExigsrXgHW9XWHARMieqT",
  "key48": "wTGLdVXVNrdZjCyzCELaCEdQTxrKyn4ECHpMvKoYU5XL18Pt74sJLXmeWipMkGxLE5zbkvGrviq1WceyiqHbjFZ"
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
