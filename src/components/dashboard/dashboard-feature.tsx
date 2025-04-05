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
    "3dapYPGVKJWYzv6mhQfohH8AkiuE6LezaWhNk57FPNZRduWpB5KkVgP7p2Vch1YMfBkaVEY6ix3CG6NhPnQrsedB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6on6idQDUqE7h34y2E3kYVkbHyCQRmJLBJiXCxx1g1r1yky51DgjuXWjPkDXQPiWYjnV9Zw39GZXTFb14Z3QRBy",
  "key1": "5bPo5swAHe2rnsY38G6cTFf8YgXED26yWpHoM6UZQ9JajVatKum7v9yzRmJ1UCqwrBncQMPDhu3WzwK6TpVXiFzq",
  "key2": "2vcMAUqqBa4DPVnb6nYiiLFsb2mzynr5RE5GSZeeVjkRPYxNvEU7m15QKxANHqTCaeP5XHqAfZvfF3CqGDVbgEWt",
  "key3": "3pRGeENRikv1EoyYDaBHkckBehjMjsn7XG4fhsMsCMoiyeFb6Mtcguc3GsrALB1qY3y3YoaQoBtGQnntZg4Y4Nor",
  "key4": "3zqFRU74ujdKt1Ert87nwFedEccdeNRK6Mb6F9YA3PX2EH1Rm7d4s6J2DBjzruZAPbTXsEuWN2ADzSr9XxCAQ5PJ",
  "key5": "4xF7aVqoPvqwUtChKTmhhK8U3VrWYpAyDWkqGKDq9NTwN5vmkdqfAQjtrFKva8LWJZt3EPJ9bXVpJhQ5d3evz41T",
  "key6": "YkZNA9LonWFjgM4rqcquCof9DKy9cLarCq9ywWjKyYUsK9KdCeDrBsu6tGp8N6RB2MnPa4o9DZiSqfRj2BwrP2r",
  "key7": "5vypqkgjytSeLVCQ8p46yTzgzfECXi6B2Bmq5hEqU3VVXUfaZKTdFtnSKJEnqZtToaQzNaxAuHEBfbLupeMGkgV",
  "key8": "4dpg9T2HsBkU4CFhTfmqhiu1xGxfjdcHPn1TZGhhDjGS2cEWSmbJ2Nd4gEUURS4UvPWq47pi14asBtv5C9RQzAKr",
  "key9": "2BZ3qrjrPo8epbEAxUNmwHCxnvcnagDLj9zGiq1TrT64tnW2pn5xwACdRa1SUXj2mLFiHbuukb7Pt6FUJFJpne3L",
  "key10": "Z4YkoN9bJapDSPdVEz4YU5fmuVwHVs1N4Zvo7rYGCdScLvWfbGT3MvZn9kSStkZ3DDDQJ4DK8e8z28dwp9KHmFJ",
  "key11": "3SwnUeejLRKjBNZDSzoPqLUGL8obH5ydzguQYVbV8CQqSmJYrfmu6vbj3K1tSepzvSRZxPii58VJBZxdSJPnoA1S",
  "key12": "NMFdN9YZqjgvXbFK2Zr8CdbfJuMvWnJE2E4oSfxuDEsKuTh3yb3ca238KUprxHJ3jsuCgcHw87erGmELfyt5bJp",
  "key13": "3GGqyw7wnuDeyaPnffbjWc2VAGoJq1PUTmymnS66RrhrW9Au1AN9C6r4bwCQ3Z7MZZhFZxx66U1Z6subGA9xNzbB",
  "key14": "2zEuzRZC2n6reN4Zk3usByi9wgCpBGnpxaJBytTxEZJnSVt4TpVRfCD9yEZbYBPDUWJkqEjHQdptBVJcUaBsCrjw",
  "key15": "3TVMbznHyfXCGT3DkAuKovVtfigUX1kmyaeQkrgpQZLDFfcPyRqMg61vQpXWQH9mrfSgYKWwxESTWU8Qo92E1QeF",
  "key16": "2mxbyXSEgcKxYAMhUf4bBCgQ2JYXAtqXauYCMmUqNxUpYFKCMy8EQmqCmmQ7RjgBJ9P6W6ah7fnKEbkbc9zFug3h",
  "key17": "5gKUk8Pu5mbQkpLaSeG5sH68JoDH9vwTcvXMoKk2VoyBjgpozrGYkm9cgm2zTpqxukARp7497oUvfFWq9616DBre",
  "key18": "3zYHtPR9Hd6mZf47AR4nEpt3EvfaaftNEHZifAeHUrsscevGbF6wchAcRP9B8Dc1jNW2Z5NNKVPnPEtJ7qRnjfRA",
  "key19": "37i5HbVLswztHqJB57pkuRNPkjovHBSqDzKAufQZUXorrc4rVaf7rjC7FRMrz8B6L1E9sw9ms8M3BsG54yRQJ8oQ",
  "key20": "3kXejKo9kxBy4kw9HfFiqp2CubHgELX7VEFb7QwRGv6kmRicUg7NgGfj28m4db2kscKgn3Zf7CFgz4NMWxFgX49b",
  "key21": "5GuAyiSHUj6kZysS2z2iGFFAmZfNGcLVZjFgSWx4W7QUfjR6Ydn4MsEasvExCkHEvqnAueDzGRdbn4W1WXEWVbQn",
  "key22": "5gicxHCzkPtCQ9uWzJ6ADoMis1Kf9pYbFopACiVLz3C5fzQPMLWy24zURJwgqx2TDZBZTFe1yRtnF7nYo5wCXsPV",
  "key23": "2oXdAuhpJc9M7V1P32ubjmVLZvYXb72zkKWjyH8bXG9BqkpcZNr84n1SfjY8vF5VTbxt17T5coZMP3B6uTYyJQJF",
  "key24": "5NtkRtjAXDtJr2FTayKM2kexRf7ryBGCsvTN4wLkx1ewuFDbmdbqDkNaZV3i4Q7nPoqFe6JfLSCBWpUjsukgLbFE",
  "key25": "3ubhaDJ5J9V2WKg41VsiNkdKnuAKKXioxiLQ47h1pPYqihmB7Z71JVrLhipnY3rMYgM4JHbvTFZrgip9SL9MqjB2"
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
