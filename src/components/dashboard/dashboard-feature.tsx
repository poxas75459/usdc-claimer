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
    "xJ1dH4X5HLDXcw3NpDQBTQf4a2hYh63n66g3jbfnZPxKe15Wnkbh39rfFzmQz2XxgUVRnsV5ebqJmapBMU9y6xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eccPMYHo31QZFX1hqWeTZF6JsiQva18pHLxSZmtjL7VEW5gwbUnV7ZgN4dAcL6x2kWMnvJVfHKUPCoCnzsxTaVM",
  "key1": "5YKHEak8bGDtQSpLj5jbuQkC5UUrF5b6bRqgTLu5mDoTaPghjoXxpxekzkynEgFuYG6wa77DSJjSvvKy1XfhAGve",
  "key2": "3Y1bFSiHCXVuaRAF91yHPMFvQ85wy6ibiQcW1LmAKoXJBLfMqTd9DwgGLNbcJtw8oWYJugbhVnuhzaihBaCbQLMp",
  "key3": "44tXkiVqFfBhiQA1ppah4at1DxUeS6hWBBrw1yWeDxR2wTaCQBBWEUPm3ggjhxiqaQdakJHxnR5SUrzeQz3eJdQ7",
  "key4": "5kwCkES4KuQzEpe2UHX3pmmYnpSsLR6WQouSYxpdAJV7Qa2ubZYd7AbbD6KEr5EgM1JVTLMSRcPqWXmTSXsiUfZd",
  "key5": "3JRXNYeATRKDTMZyrt63EgA8qJEf3qsETH3YM2gG5TJLEXDafkJTkUSzPUYk8CW8f2JcbJL7FKUGrjomP7Qfk8fZ",
  "key6": "63xuRpbuwo8e6ABMQQ6TqRNkVRdNZHgzjDrE6nLUT3hqRtMECq2WvVDc7pzLTooGZgUcVc8fskU8U2i7nXDbLQ7t",
  "key7": "MeKn1iWJYWXPoYM55LNCEP4YCs5XgD8dsndZ7RRXf3E9NrDocw4EKmXxVxwPpydcVAvR1KCMgsgEjFuKcmaVM4F",
  "key8": "49rydGA7emDTy2vwgB8Gf2bZEgYDTrygtNNMmSVRHFdCPpcXcT64ZX4z7KittYPkzCUUhbnsY9KXxryuzt2aB8Sh",
  "key9": "3KAer6rPcay5ST9xPUqRoc499KThtNHQgcywHYzffFLMAwBswk1BfmT1Ev3CA5xHeiMDw2uRjUQjF5EuWUC3vUmw",
  "key10": "4yM3qFTNW3pVXNPiY2x4BxoFNJ3ZFcKxAEQyQeJW5cainGBUhTu8PGddwumQkHbiPt8sVNBmEo3aSdpHicMhYXxq",
  "key11": "4K6BDFnPBGtB7PssbVu8dVTpkABWwz9pM8Mku1QRYj16PExYCq8ruQGE1nnXitcLFKbPB5tNW1e7KqF9qJ9RA7tY",
  "key12": "2msL1ovjbLnCDaEJUED5eVf8PPTReDVDiCaLzy4KxS3gz4as9Qx2gqs9LJ73SL8UeQ1yUbtJfYAAPe6yZD6z4ow3",
  "key13": "2GfdRMhw1u1xzMtGumYf8Z2ipvUGcbrhEx94YjPr6JVWzQHgrqeh7amF2oLiaZULDsJEt99V5H6V7NyCtsdsdpoj",
  "key14": "3pEt1s47DEaNoPcBAA5bgDfn75GxrXaSfLiGxvTgQ4tzvmXiAMeJCqdkKpN3VMLiaD7u872Eqk3DtYxFzRv3YVeu",
  "key15": "48HoLKeq9To2uLfw1PhUNBLZjJC5jnSqADwdgmfVvEC487MtsGjdDxZvZFjbiGgSYqjddmriVNeMaa3ZVSjAmPM6",
  "key16": "4opGrRfmaHz83NadfbNHUowFUzwmVypCFyTenSsi7B85kwyMuDNiugSddFqGjvdK1XsfM8mtH5fnqgmYx4RtDCvE",
  "key17": "2XaJ4MKytpp899Woqys3RsywGs7QG17D7MGDzaUWHTegFRVbjHgVHQTNfsNY2DrDmDsLXpcQVhYMoMio7TzC7FvH",
  "key18": "mgefnneHWsZzktVQaxedmDvtDeVmHgJ8H5Eohrt2ZnVa2kRiUn9pn3wpK12V39G93NXtDwSkhKWRbDoVptXQmFF",
  "key19": "4QU5EgJatquovx9HsxZcnaauJLe3kCNbSsNcn58c5QzeY3aiAYrjSUgeC12a6uWWkDhkEaZhSUMkCGJUGSNCdyRK",
  "key20": "ucnt1EtMhHZ7kN66tRtRCT9PeKGETn6HUztVdZccnh298vxSgvspdVzxNxHdHSEv9ZcW3jMuUMRyw4PKdeyaZSL",
  "key21": "3ZXUEkD19h27LUCdm4YTqj47HmvMb3nPPzRrnCm4RLRY8S4CJQXvGm15GKPpQgsMbQrZeeiKqE32Bb58Yudf3jjB",
  "key22": "4riva3pRg9aCkU5tnrocbkSb2E3RvwAQw8JCM8MdCWxmkSzSTa69vNigVpSGBHLats7Q9hA1urvjnPhVdauGnbiX",
  "key23": "8XasFWDz2XSPMxqwcckU7yv6PgPF1gTGmRtNpVnKDcdPKvmkPNgJvN837jSrTuqCA7Te7BxFZt6mbWKDSTztEPF",
  "key24": "28JF64nQQYbXVD1Eg6HnvMENXwdYRP81srQKn4929ZwGqC3HTwXmeCG3FNM5SAwx8WdHrqJ2LyCYSrEGGa388cod",
  "key25": "2TsemUZnfbwYiqah4pszuj2MDC7ZM3t7wdutZpRACaZGaTE3jUqcRWpQRVVAhM2j6zDU4TqTaqifu3JDRWxYnBaX",
  "key26": "34o2M9zaLkSNXJ99K83hvHhGNdyhjdUhmj7RFZ3NDUogq9rJsrboSiEbeABNk4Sv4p3xz8p1KQSqB7UNBy2yCfhx",
  "key27": "4E1djtscRVRJ9cAD5GpGGBnq8jtBptdXNAsVDyXiKSkCKqn27HrhVJeUuVL4ftxBGUmNUZpLKj4RhkgHw6Cm3FUU",
  "key28": "hZ2fsvsWUDgKWWMuDdvsquxzhYYNAeLYp5MHGepbUUtJ3MaVoVJmM55ef7piByxpgQ2xQjEVgqRpE6p9tLNds3b",
  "key29": "48Shb15gi6BS5SAUjn4LdAAqo76uFdx9us3tnfCW6jP6Uo2zebxJvgbFJxr3fdBtMhV5cNkT7xRiMPp7J7TKNZqL",
  "key30": "2oa7D9hCWWQx1Hoxatoed4H74jrLT3x4fo9iAbnh1Ji9bFQNhxMHAwZBipjStDsWaon3exkMkHDHcECzBiCaKfk2",
  "key31": "5NMNnfxyawCRhzXPg2gag5cZ1WaaHQrGnGBHLYcr8Kybwqd8aCM77EXNoZmghrSNp44ALfYYgJRu9p8c7uqcK1N8",
  "key32": "2qGLecq3JWsW3H8GPzHpCBvbWQ4r3FYRg7xXfVwkW7WwsFi5KchkkPFt5KUWk4u2pos64nHfXdPfmXKB7uSuDdsx",
  "key33": "2aNHbn6oQSqJCwmDWWF7aDLTKJzo3Jm9uaYmQTwKx2X58Rarffwje396Ui8egS5UdrtUuqJEQhqhwCUBj78NB8Tt"
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
