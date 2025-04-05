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
    "UMMfHj9r6smUyp84ohTHvr4jjTRS28MMqkxwakEL4k5WSaJaxbA466XCkpvTmy3ZSg3rLzfGW2g8qQsKuAtyyn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWt5NWuJbnWYL4pGNJqu3gDzR4zTEKBdzFQRfXVxNZm5Bvfzmq2nzhRBmiZKqRmnjPGEFzXPfEaFYx1ZkUTLX3A",
  "key1": "4Sb4wsfkSZJT18r8fKBQhvyLot9HxvfeHFxbLBzMiNyK7WrxmUWNPrYVJ3qg475ytaNhzz2UuubEvjphmFYtBVWs",
  "key2": "2LgvNvFbcp2Lz41mkVEotYGcMsRerkmLrfGp7qt3AuVghsMGd1ch7vZ41HkSdDAQHWVctEv17pLgh1xWnkwfR21R",
  "key3": "2yHQ12eWeAHh78wKYXbD9nhPC2F5TgzWTmUuXpVsZgwLewUXZCi6RNYKFkBxLUBwEibzrAjaEfuvpU5Ndzq4Qzh9",
  "key4": "3ueN9V4oYtbpkQxwP9xrv76SZdn2CaebmN3KVqHBBb8iDCBBNn1HmnFqZKeY93QcxsxWtJWS3QzyLoLRRZnRPDia",
  "key5": "5PnbzoqZRKi4qrvGPPFpwudr4apo26qT7qrUejMSe8Rkt9YmXV5CJyoWxLvFBeV31DhCwfUqR3Xk3p3GnTNAxatC",
  "key6": "2ZUa8eeCxTwers78AgQLNsp9axoo3Fs5iPHVSXAqymZtC5RMe2ZeYcQi1cMjvcHatZx3yZhs1ddn6Cn4GLwZe4nx",
  "key7": "tMU4UpdL9UELJ3VndyYyBJ5oSA8EZHox1aBMgNj3Nbg78QwwiAJA6SXChFy7iF6YZQYsYNVnNTQ18GXpYTpWoMh",
  "key8": "5wkPXF4rQbtYVULGe9x9i96MN89BrRJeCVpxh9LY99oD6tkXS8FHEFtTJhZtLRu7Zd2EUPswiYq76xUdbjRoVBUv",
  "key9": "3oTyXQquFCr4mwA8g46c1Tttpd4Gex7N119cpXB8WukQnBfBeTEQS7dKhhFFF99DbieNmwhVDRQUqhwKPs6yRAPP",
  "key10": "4qAP6x4SdGzKHrGYNF5tePzic4uZiHX3GnGi2GPicv8xeDpj8hM7v4NXApuBeRRYKLLGbjTfsgdeWdkAWrK6bPQb",
  "key11": "2LZBATCxYLZuTsZ3jupDHbU4xCEsjycGcTwBuhANCjU3gxUaeaZsXvPE9JVvtm2ebzhxpBX1fptPyEvxu7QeXTX5",
  "key12": "Jn6cjQ2Rsy1HPB1Pw3AQeyvnbs5JDzAFixdN158jhUxHYDEUpkrybrMMuCg2zBnNd5oeuvMpMHPd9h9yU524r4s",
  "key13": "4eLYCje9CxPj8ijgpQYiY7TxFaAJapEzbdQ7jd8SEzvk8q2U8GHzpqkQh5efiYsqB36NUGZS8cWGSXu4VwjcvNbX",
  "key14": "vfCy73a8ue8Fbp1JM2RTK7MTrgoE2iPmvv1rD45HSq5cA9Kd1hNhEdpSebFJwGDKz9776eJp7ePr7xs2UoWSq7X",
  "key15": "2zH8PPTvEN5PgpSHm53qRHu3VDnxvVhn9u5zhFJMQBso6KmgFGZE3ehqXjJAPhzgydqbaAGTXbVCLK2CLPfWdw8c",
  "key16": "66GxyFbzcEvRNoLZ5XYrVeQVgzzEcRBJArVJFePxqeMnfc87k1ux6ynibTA2T6fjGp5SPejN8SzrmaMsUgDQaQVB",
  "key17": "BBfdv4Rrxu7So89uRoGPRgErbHrYU57RVtaUtt4JvGkjxKpqmVk31k1iRkZi7RNcXF2BDfhr4MdbXSpGmPxk9dT",
  "key18": "4LXxhKR4uXAVPdtzNSPWhCod2FG5Ms4Q9B3mQ9HXMkb7sNfXWDZPaTPEePZ8gsSRWEM3qXYS4jHCok64G2EmDMiM",
  "key19": "3hxAQZNWCWbuksvvVxjc7Qm23cRg4VkW8ebxSzvStRtDeqk4AhoFEQQi1dwnB461bw2mgnH9WFBsdMFj3g7NVbPz",
  "key20": "QhAv14tGK5NTejMYuMXY4ftXHFFLDHmwJ2vuJoef4dDwo9mk1yBSkrfgpHLGcyHQCDdTN6GxmLqouDpZtf5s36a",
  "key21": "5C5FvP3TGpBYkuztH2fKnu3mV7wnGbT5ono6X3L455cRY2y2VbzPxzeEwbrHQad6dqnbiVKXSTTCJ1YvqjuPtmA1",
  "key22": "2ctdqT5tQJVp4WaG14w84LrGTWjYqWyNHfQFiwffgBbeDhukxTRs5uULuLycACFc18b5yEm5TgUcYT3qxJnRBsZL",
  "key23": "5wusZDk2shxoUojBuxuvafSYFLgB1D8KbSd4h5xqhfxGUVVviW1CrgtCN75ZTLxLhNADfuMceYJKFaX8oi9PiW3t",
  "key24": "itFcoovejXFnXA1Gjq87Vr6aTv7hVQR9FWEs2WyUxVDw5o6YFiUXGRHSah2QpQbUUjVBQrUSHYPVLM57BC5RSee",
  "key25": "3Lvf7ULyBwoqiCHPN6R5kaDkNUKS5JWkfGqgAyAEBCEEtqQThQYiyY4KzNe3g53P2qxcutSxN1bhzZcKA7jipRkN",
  "key26": "2jZHhp3vTuH4SJf4m37R5Xf1WyZsM8cMKUQ7eavpkjifwBiRDor5EEWhsJh1crUs3FJ1GU9gM4QgbyLkmsCHhkD7",
  "key27": "4sHoDFm5eE7FSwHt66SVE49LWUTvuEbovejedUTYtCCaS647PyPh5cn1ap7nLopmaTxS6Nymp3c9Fhm4mPLcKtFy",
  "key28": "42ewHsCpuKGhkvM79k8DTSN67zn27iFHGhg3QoEcys5oVbkYBtWfceDBCQBD49RqEgwRCamjjtqZGDewEZzYQDr9",
  "key29": "41NpqtojhK8paMQdQxUKrMC24w9tfnsaW4VUJeepSBj3ss7VUpYECa1DfZfaLnfEZcP2jE35fr6piSRcXbysSKKM",
  "key30": "qo5FtZ2MbSDb6eHonBEih4ZFKn6wALeNcBkbYenn8a6k73LrhpGoH2cbQ43w6wgzJUA6fj1H8pdBh13DMaxWgLw",
  "key31": "5bqvZ1fCTwnpSs8iQAu8cJ6ZH4x3U9yMRngrW8A6Bx2nmJMbXXtEZaMcESjNhjpkRcSVohUzkt8GcGwv4sEk1C6o"
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
