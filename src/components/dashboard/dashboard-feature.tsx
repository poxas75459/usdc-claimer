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
    "33HhnKA9snSTyD9fAvER3h77zjbxrWVtowM92fFGrcpW7QjKakSrA8WEdiMTGkwUoBqaPYe1NdPhsxxALjCXDVsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXRZu8J1buYTwUShzGdx6e4y87NF96fsw2x8SwnNX64XE3hSTQd5GSEfdevbeU4JCiaXV93suqUMPq92gCZZqMw",
  "key1": "21YXLxgmEiUsHhWu6UYbrxWGFSCzatAETKmQA2xCCq5Xr1pJMckE36oiQChRfvZPzRh36cWmR7i4ZXDeEPzMkEMP",
  "key2": "2JuMmgSBDgNTRk2Pa8T2Vio9A7WoYGYTBGbuCKqXwUvSzgqmnm21wKM9KLep6qXWBejTALVavyULmJifyPnQHbjB",
  "key3": "2Z4wUTurUTWNSa8GbGs8UStatVgTQLqK8nHcUh9PKMUqegg6KEPm575SZCpTLGWMCXDoLiKmm68BtDfk8HxTP6uZ",
  "key4": "51TeTBsy3QmaELwDSgECfK4g5AJYhiwoyiznfiygZs3w9GejsYBfJHoFpbtMjraAuENVym6VBo7FixV5p15KBxUa",
  "key5": "WiqVh2HyPSYziKEJ5SLcSpVDZNCPsiMmDrXXrjMpvUFZ1vtCzaoCDKGFvgkU2vqqZ9Gn8ArU2Sp8T8vjgqdDZx1",
  "key6": "3ZeFTrVEUp2WyiRAA6vKmkbcwV83C5dMBj7WjY4MN64ejpeLra4NaytusRTvMy6XGKNCyCKnuY2UG9wjbZdRDEQG",
  "key7": "Rz9UZc6wAetMWMSVEzBX3zjeACmzSkmRjiE1HzFog5Wfh8upMtiXVB11x1BAj2kTZufePC57USNWp5vSSBZFTJD",
  "key8": "2NVXhn4uoRU6rfc6fDgKAhamTbmsLK2j7FQsnAAn4qggrJ3RUNFr1uFxM9SDR4Gf5ecgJFEb8VitQvozvDZ8CjBR",
  "key9": "2frFKpSCHwZQrTYZ1FFs8ykh1hRkuarR6ZsPHeavUgb8WW427DVpx9rMhsoWwH14dw6XAsUBEs1hfb9ghprYc5c2",
  "key10": "5Kee1kcVrX5ZSttCZCwtCyVaUt3RqQj13ZxBR7cabUgSxfcitwJ24RPskfuBSa4BJf7yjYiVK5HhB5e2WZn1YM2b",
  "key11": "5LYxtYvsEtkqrymTQaazRRUC1uBwZ539VH1tEFidSZfmt2vVWpBC2x74Xaqy4AysEE31yncdLB5HigbsM4p2yJi1",
  "key12": "5P25dYDPbxaCyZrT2YrNnRRyiEWQM6Pgbss1QxgXuKw88zRJvdy7cdzp7CPWTPy2CGwb9jzLDCytfwZpK5LMCNL",
  "key13": "3gnQQU95nizoXi5MUkaL2pdSvvfS6kud49TFbEJnxVARSsuzdKYQnfCNFQnt8JyqKH41B4p4W6L3cbKAKRSfXGv5",
  "key14": "4DKJ7RzJXSYJJ2Y6vqCYhxRysHAFfmWt8TRgFmwb1ebBmy3rcfmJCNUZWMGHqs7uTAW9h8rPA7PsekvgpNeY7ZYS",
  "key15": "hEQdQS7qvrYCrbbRqrfJ1rLGbui9QaCXBkhQK3cpGREuaCpcVYYKFHZ5iBE4sZKRcXn1JcpfYXc3aEHb871Juip",
  "key16": "aFHysJhx5onW1r5AnxG2DTh9ct67QRf2WAg6tRqY76KKPh7wv1CnTriToVpsMVBWRbvVTV1asc6beNdJgnfhQFx",
  "key17": "dC7GyBu4w89AbMiZBiDfZwRrUQCc5yeMtQWwK7ZUZ8TJzgPFCrvqA5MpeUHQo6hCpGowedyC6TzWZK9paLkC84h",
  "key18": "5HZwukhSnaQ3fYRzW9FnDZp2Qtu5LxQk6aXy9naSmHPwX5EdFkUm6UvMxZx7x7A4ZBg2KdFezmKUPoe4awDVodwU",
  "key19": "4oqpyXJA272uf2FVr7KtuLRwFUJrgrdKSqdJoc595x6BmDXtGFb6WXq3NPAzKUX2hVkWvkLQTChFMhqmGNWyprCd",
  "key20": "55NXndU8fvPtd1Ep39DVdzx7nEHobRumpN9yCnJWG8WwkuuUvqNE1wXqnsYtL7gzVY2sbm8AWwcCrgA2KdPmTxWJ",
  "key21": "3nYwK3nvUzsPLKZX49xvYtXUnB7zmewbTcWZJNywGz5w7xdHntYGNP8JyUf2BcE7XnD7VaFphCBJh2VwNVAMHL9K",
  "key22": "4SZ19J7V137xkAAw26xCKT2eUYerEqFyX7evoFs8Z2D5XUiz13pHgMgpA2hgZdac8H1nfeZtmJE6qAAmXssNRTtv",
  "key23": "mmQ2qU4fvjbLzbPrJffcgT7QpWyWsKLY2pWke5fmeWqNz1CPabxQmH11Bi79AyoDcaaY19eQew5GgZryvft4xyW",
  "key24": "3yquPUqpfSGdmK76Rh6bqxrSUoFxiTByXDxSTiShP3iMs1dAnM6dwxfdqCdWFfsoz8KyApvmTJEwUzCjsP9JFsKZ",
  "key25": "4Hq5q6Ay5ePGRTzP1e2wtzipQM9qyjHxHPufMj3EomVFfzZWEz97KK4MSTrBsaPfnuEZoontxcRknJ4j8szm8d6o",
  "key26": "5wQAptd8ie8S2dTjxjZxK73UN5D1yZ5zwLk9pCLznF1fUVzx1ndUXU5Wg5D8Kd4r4C6hbpG8trGVikaLoueVWW1u",
  "key27": "4xtygYFPJxGbGEAbZKfFp5Ws6c1Gygs6nQkzQHUNHiQAD6Bjuh8tdVvBTTwdZqz2BhaPL4k6uCXdrJYSwto7CF8S",
  "key28": "4thNAgmcxYwcvgsJTJhFQpjQg6c4ufjf7tqpnJkQVbdEy4B3R3NpzRSGEnAFqwVthFRFYiJuLMbyWW2RRsPR81Nt",
  "key29": "4f4fsWVatJF2seeVWEazew6RXxFLX9KPdw1vh7EA49xMrZJXNqrycopx4vXdPhhwr99mdNHuxn2DJ75iGkjHzS1s",
  "key30": "53RVorPxdpE7w4Y16AJdDT3zRXXguDAYhJ4GVSmtJcVamnhbDBzZCV873w8JpQTbYFW7LJs8tRmvrMXCzJBARFuz",
  "key31": "2JfPRuEbxjpg69t223YiUnrj6hDZXgkygo8b31wkTN6YJiuzSeTg1FdB5RMmbt6nVxsig5nFsFvaiofzorQ3XQAQ",
  "key32": "2V3HKmvvM68NZ8LjjYGc5ZM2aZVBtWJKTdVrFp9sbcYSEqu41MK9Z3TPs4ygpsSbXPCfNCHA7U27NrQurrAU8wM4",
  "key33": "51taR5RqTWWEur7wRDbRapLwkE3VFqTBdoyo97JS5pHw5GtPnJQbcoVvNyYshDuw9m7EYgATZZS9ofpipszayWPP",
  "key34": "4nHDNzE7gNUk3jwW2qEscYoKK21ZftRexYjKvsWzWucUHKhDYEYgDvYUmDv7YnYuGwVjCpViU6JSz9Cthxg3vhSV"
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
