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
    "3Qv2rJ7Yofg4V6ygrcsuryYQ5LhXmeZiNGpjj1vKyTWDghQAkHi5EqZf5bLqb7GMDdczKAwtdgDxctR9FVFpsBE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24J7wHmk1VuvmDBo88Y3Addgqw2x6Wfn2EHAT2jPKxsogXDCtXUzwExeLUMDfukc5whzHSVuKVUgJjikGAuawXm6",
  "key1": "4q1eT6USMoKXPXyD1HNF3vasz819fFDt46B8LAEgVXYxeeS2sRV8Vi4D4JUeuw8whBMpjcaY8Lnj4uzshhHknnsR",
  "key2": "2J2hD69Kzhxa2psoxPGM2dYXcj97oY3rqwNdbN5Qrq1nsK17ctcKeiGZXYeibMmnK35QBUbNurTRjUKYfKU6jquN",
  "key3": "JaMZMLDdFs8mBQrbyx5FofcadfQMKmEkHvovtAyypJA9XCs5Za5HE8snf7Kj6dnB1Myj2R3CE6QQemXU2TF2UW9",
  "key4": "5hkae9j4LzxLwi1TmfuUDWTjXrbowDqZeufbbXD3NiYsGuAi1b3m6HiwECv8tfsyKiCEA9pVX7rj9bp3dWDmkGCg",
  "key5": "3TPXaJyBBcvcMTRnJ5vcvKrb8yAunjVTMMmPxPLcpZQKAyRbvRuYPRCJnaUbH8WTrrz1neZSnGyTvkUq8G3qjWRH",
  "key6": "4dq3et1WvodZPQNyiTKVjLwp1upcX6QRd9kzNnyB2aja5zgnyd6oDrVTV4n6rN7WYSCVsLGUz7iQF76X94ah3tM8",
  "key7": "5Bxe2GaXCkdBkvZVN1afvDSFf1f6Kyy9RZcr1iCPhGxjyamYQnL96maacuQjuRQ368J87GBoSTrxUagtCiFqnHWh",
  "key8": "h2PwoARXUWeLq3zQXoHNzwT5qnZTcE1bybqW5a7AWhsKiVXDx6zQCau1kHZQNkvegQK19aqbVHjTqWsyDFDbJsP",
  "key9": "434e2RScVo3xGarSbrQRnwtbCPj5xnz9deZGmtyw6ga6GqetZMQHwYHE3Paa9m7oSiyBtvAqmNub4x3hS3gwMRwr",
  "key10": "57wFN1QuatdozMUGWvAdcR82kogSzwCcYE6eHHc5VyRyaS7TpR1X58WJizyXTTZZ8jbxTsJHZ4dE1YSfDmgBJWCc",
  "key11": "2BNbMu8JYZpFfj1QinVusYLox8aCT4GUfgkyXQZqGmWatH16j9wsxaMmeCNdQnvomDEXxmt2ksTxD4v38XpeK7dS",
  "key12": "Z1QEsrnJ6nNhF9TKufUVKikgN8Gtsg33w3dsLiY72oMzTStTaohaZThhfHgyLn7ssrt1dpmAe273oisKwVN88cS",
  "key13": "2VJCNwouWGZZHVyFHtd7qBnNhRkJb38xqS9ijJeduX6wT2jLriZ75V2L8jpUy7TAYx7Q2iEAWFai98YkCmJEk7Dv",
  "key14": "5Ca44vkcoyujaq4NzmiBF24DLPwmaivagGiR6rPdMtWQktd5DbhVkW2DiRJdnceEYixBUXhWqptm9GvvwjnMR5dS",
  "key15": "658qPXicaicva8U9xSoK8Swk65exgVVDHY885E1n7mE48qX2hdLyDTHNbK4x5VkhXmPKRTYyGJymwJYdfRHjkz8i",
  "key16": "4kjwrhcZDfXvMU8J68qhemhfmNQyC2rFnp9HTSdf9x61WaMwvY71NS1yV6XPtFF2mdKRjyeXYGHvCTZHoKnSjazh",
  "key17": "3gYA4eAMSV4dCvte5UTvb2VLnUuDCx4ixPBr4ihNb1C6R734VQR7gttX2CYMHgm64opaWi4ydkLyEgJRRPx9BUHA",
  "key18": "patEGnfKvAtEBBDomXATUJ2F3udkRcXfjgVP8yCFcQveMGtdtACscANMiS1frZR39rK77ENMJb6gG7kzx6cgtLN",
  "key19": "23wNer4sGU5k8rjvqxm4jrMpXhg6K66UVEGxsCrx4PNzZ2mtfKt1URAH1SrZS8zgT7r9Bzg9gxPVDRGYS1uYjppV",
  "key20": "BKtebscPcQ1f6dFF5xkWnJZ3rYQjKnTDmaSNhRMtC5shzuiZVic9mwVBv7dxKWcPFwDnB9ZuLU5GmA1wmCBy5ht",
  "key21": "5mX7J8XcNN7ZBD3m1TkGYGoX68FNp1Dik28ey6ejYGmL4mw3CQMckS79ybAoSwFuS1G7Zu1hnu9BF9wGeFjEvkWu",
  "key22": "55bWxr8r1yrGhSqCP3tKPpUJXRfWN1izPW2RFQg2yzDMFuwqUH7AfrYrDfZ77YiGpCb5nu5PKk6AoXrDbW1hwGST",
  "key23": "5tkrBPbb1zambeBzjQJGHHxTm3j8cYsnC5noGVxoZ1s4X375kQdsn8QZpNtc75Tvd7Ph2bCy1tzDQqqwnbiavHUR",
  "key24": "4g3JGKvkvXLSTSPYswixxeDeN2h8peiW4zPqj8fPx37CT2scoKQS7NyzurBT87feh9DLXiarfw7ZusUZwULmMSoo",
  "key25": "4EF2Qyi3TN7ghagfGo9TGmWFzkuqastapFD7rkwKsZVj1TFH3A2rsQVYVx3GJL3geQXVT6UwRVCHtNdHKvFv5Bi3",
  "key26": "yus2upAGTGbuVhsnkrvvB8cPXDy6weqheCiMv15DQpn2TsA48DyYEGbo4tzYU35RzDbzNwKjJkWyxUbqPKASfBr",
  "key27": "3zYSrHTVLH12qjnBqsCaiBRBQn7Km2o9FdCuut1Hoc32KPQggWSCp1FNxHr9CaPYkC5RJ4uGWfZxz44F7qCP6RuZ",
  "key28": "5v8HWKFU2kJNfbJuE5Gz5sQLapmJ4Spa6nV7SR8XthBQbVqx3cEBoDmLxCcVQR4gE2vnne54zc8cE616dUQkNGdk",
  "key29": "3dV67HtjrrJ66MVXXt7YDeqJVWPsxhAkdFbLRhpyspoqoVn9yLU4n5rhWCELkSKPmWgcDttrFNmSP7XqehmQXuYL"
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
