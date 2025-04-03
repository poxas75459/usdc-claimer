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
    "3PtmSdUwCQPW9Vyymjs4mecJsdXeugeYenwSpAjBLJZfVtChTvstVgCRN7y9ErqifVVybquRpFyQ5nQu4zHthfPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471QjraLgmEFPANxRURGxNhrySnjnFMNHTwqbJT3vKrkHhFBe8AZ3UPnBiCQU61sWEgmcXbcbPt3vaLh4WYtvorY",
  "key1": "3NGtLAr3a7DUkrNzHhrKC7jk3bCg2MhwH1P2qDTGXMJzts5s1JSn6w9Fp6ZvQAA8BU2FPFTSt2nFhcABZiQprTSF",
  "key2": "9iiNJc1zqUYprM275mxNLXtuqY9fdDDW3LcHxbHJsorAqdb3r5nJGCVWNjwXrPEB73ZjWwxpjBd7sWUabEVG991",
  "key3": "2obgtBWU5b2UhXoQaz9xWfmHmuEhEAn67jwu1LvEc2aar8XJmoRj4X7qMhhSAU2nZhAxaE6Xc7j6wiQkbvxNMvXu",
  "key4": "3PXqZWBzvkBiHuEPZqw5i24LWroXtyvFuR4t5iTdKso8h2d4TJwLosnEMPrEusHx9y7cXpkGLNXqx76Gh7EhfgwE",
  "key5": "38CE5TBuuxGbL6smcVBrAnjPGbFwepjB2CxR7Ri8FQq2ZXXEVwMk3AcbzsJQbQGNHiRZovZf61D8zkLFYezRg1eV",
  "key6": "2ZWLwL6LobNvsoj3Snbdakui6Z3aamoxYKhhYEhdWjApU2HTcEEifrUY31rz5ECFRjjmx3VLFvPTAhehUEA3RF7P",
  "key7": "3SKZEMUamnVZHdAMnQ131UaLVbgMivqwuFAZduVA4gsRbdcV85YAgptSKWtx14wpu7HQS1BLs5isYqSfvMQkSTtt",
  "key8": "5K1c5nWf89gV7EftaqmESbo3ocoLSXrZb2FT7PZTBjkYs2zGK1M85Y3z4FXcyNzgKmz3rMsMtkz7ym1b8C5PAX7z",
  "key9": "31tSw4dzwuJTi83GZbAvtxefcUKPb4F3e1uVRd1BrfhJ1694wqdJ75CTt6XCELczaNw9r6Vezwgzo1T45vMdz6xg",
  "key10": "5GaQ3tRb8vNURbbfyBBnK1tPnkPTnty1L1zZTWZ6BkFhpVHNBSKyBj3miTLujsgSjDDcmEc5qW1Rjvta3WHHQany",
  "key11": "aeBkR5E5eVSxEs43RUA9C8zPPAv9XxmJtLWGyXvJB7aXJBvv3vb9icNM6ZLHYGpiDUWHPxKveVpRLzmEieCtT6e",
  "key12": "2Xb3Y2fbpa9CGhqdVPFY78KftPdgyuqfWe2wLqqYydz4XkgDjWbmN1fVt1Ysviu5VysMwP3sP7URqodKgYuyF2Pm",
  "key13": "5xtmGFGRAYrvnbAPbGqfWTS3d9G2x4UHi6tkpZbFUh1aeL8dBBJhVTinEBKZcdATi6X7661J5wQ6WiAfvQqxECfg",
  "key14": "2mihDBDGiidnFnZkx7WNYsWxfbZPXNeCgAY4oLexg5PW5iGr2AhZfkKB3TYECZyBYt3PCd8Yv8u1sTJJZk217zpZ",
  "key15": "s2ufKcPX1LS7BGTETBmkAac5Y1HSP24bMftfEqvckiGHPrHmAcxrsgsLiorjxjsBja4qgfFdBz6DnpU99eBp277",
  "key16": "5TzHYKRJseBcy9oNsZQsNN5p5B1Waeb8FNBpxBQqqcnQCYQsnEQ75n2bXLQpYNX3k74Vso5UU3og7nc3gQRo2U44",
  "key17": "5f1xWgx3RxGv2bQhDDEPG9XAwcfRUHmNgbQmYf5bSizc7jDt1i9WZBV7WvTmxWQGMMsBpCET74XYU9R7c9b3JYJf",
  "key18": "3LVYJXoGL9HiCbkbFfiGKgekMGWpkWD5K7Ux5ZGUwf6z3oby4VXqzcXKbv7BPgs5E4hGJunPXFQsbnpDP4PC4TrF",
  "key19": "2PXTBk2fxHMGQraAPiDQq4ZbJrxT5sR8RfhGFrD8UimRxgwQzZQSQGP2sEXV4GheWuwrvt56zYLMbdgHEE1NGNxD",
  "key20": "2KmU9WpvQi2V31qicrCVYWEJiFiZkdjLxG93jjtJwPn9S236pjh4f6xSybkJ4PZFNLsucbWjaPn8FVtwLNRACUYD",
  "key21": "5c8vTi3LnvMjkPVrx2hAeHD6YMRe2CvQe1ASmtP139XAZR4NxahHYnPyf9aNJsvomVMmLzQ8Hr8ah8rthZ2wp5qf",
  "key22": "5fHKpXJCE1eFT5BxMMzNBpAq4DAd4NMgcCn1WpYu8M1y4hY1rMoYqAUcAEy4xeUWWCEqvoyLX3mbrpud2U3BKssq",
  "key23": "PnBjmQ9q1rUTun6RqH1r194Y2NnoU1coBSwHpVvfVpTdJzBZtuzHZNGTWtvCfGZgF28X5KSP2Lar9ufj1F1uLrz",
  "key24": "5FHcT3nnFJNqRot9kdUQjQSEboK3Pxu7rx31CSQg6gx7WKAdYXKvpADx4BXwGfwys1EYUmPK36b8cY6SsSfWtZth",
  "key25": "3LHR5SapPrn4h1YrdwbS6n22rv6D7uLdqnt1jjsn47W1UKBhTBKx6X5KEnPwv4VZAhYmKn9nsChNSxAwLk8uRQJL",
  "key26": "318e6HkAksqz5cz7xyyLJKVmjpcvBzMFswMXSynZkYiPrYNqvu8TqPRSsDbdouYeRMmBoLTK1rFzdTPbUWFRKZ47",
  "key27": "4JHAY6nGGszuJfhRZThV3QdCt7BasWW9pQgt74XiyVXD1r8BexTKnvLYnUuqxi3RXeSK22kEg9VtGEEYTfXdvWxu",
  "key28": "3MkokArpCjcAe3utZEszspzMfquo69gQfewMaQh3hignhPnpaLthN2ooRwhvJRooU2GdiV7X1QKNX3vogwLHRZji",
  "key29": "2TKJLgzLT5gANaaxb52HucqQd4wK8UbcKGq7VPyrQN4erYmAocrh1fr9wsSX2dHpUThTdFpwMCHj7A4sA5DrST9a",
  "key30": "iJM2ynNLHhRMLRLbZXEHEkEESSHAq37TGP4MxdeydrQLddJFts8ErygFjyxExjP1NxygisciLhbjJo2NQyh4wse",
  "key31": "279i4dpEUE4A9jj3kkagR6ZRQPCeHeMX1iquCTNgFMkHoCSCBFGi7bjt4xrkouU1pfv6beSMYTVXTfFv148Ubyb6",
  "key32": "5wDbaWHBjyY3hnUjkjeJvhnpmucMmwfymaeU2YiMFaGdeM8mzxR8yKmrFCja94ktZGVSVcD9kYTV799pGFw6ehFA",
  "key33": "5eY6zNFKkPnQLmE5nYiVkWcvHsuzyw6QBrX3U7AC7KoT3sZ5Nti2cUewFuKVRyJYvat9DjiENDwWsMdPUXQaSF9w",
  "key34": "5T8tRR3UcN6Mr16pf1tBAwobtH1iV7LHTEF4Sc6zGN5kFnHd7gNzvVNq8Z4CvBesZ8RCYrmKurHokHcX2ceoNaDv",
  "key35": "4vYPB8n9EM4bR1328KArwbbLedJ22rJuSjw3VW2RX867X2WR5cxxLn3DTHLmeN2mEgrvEgxENeTmDJKNvscbYJbF",
  "key36": "4xh9g7JbRYgUX1YcUL1QTNfPH3Jo5YTdmAz1pgsscf7rehnTu1fS5kcF7tCM8ivu5Hmxqph8wsfovwUNPzebYD6n"
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
