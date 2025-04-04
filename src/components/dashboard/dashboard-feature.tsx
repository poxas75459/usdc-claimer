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
    "3BNACRrZSEr1wuLWvuFYsJssjavu5rKjRhvyQbuofUXbMvNdmB2eUMawwCHbUTZSq8Ki6hWi9ZYxasoKa1RzmbG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smSR4Jsco6p2jdTdcioVxxjyd2Waychc5zJkxRVkGEqYuvd2ejdMt2bW6yt7yd4hsYEgk7GpnUFdpZeP4PML6ph",
  "key1": "2x1P59LQgWAQdfAdKmxBtqHMzoC8VTUsa1FdWpVLn9vRUxvKBwUqMJEo6TRFhL5tHXZYMTeHPa8aazbSuc5w7vdT",
  "key2": "5iQ7hD8zgwJtr4LHQnxgeKhwPKjGsKBXdvKTE2f9Qn4pkchD5mMqti1wAktVihfbvibk9XQCY49fVusU7s6rU2no",
  "key3": "2FJV8N6v6b8mj6JUqyFtq6cHoBVpqJufTJQrUe17ACrXegRM84JmMytgPK1T7sdb6UmYRMjPoZVeNEW41M4FKTDJ",
  "key4": "4BSwDyTNuwficNU9vpbxfparTnPgFqp7XQ2bCVMaTT7hghSwf2Jh211AuEaS2ufbNHvscJ1QYjJRCk1RWHXmbyBE",
  "key5": "4TZZBoBeaN3U1xvWRCQpDXsbSe62uspWHiZHj65RaRfqVgFhVKoJne84r8r4udt3cTVHsUjBDTR5z9fcPSicuznp",
  "key6": "3QhTXWWVS9Kviq2etxEZbGbtUr72kSTvDr6z5tBTce9dWVjxVNALgFqxrC4Vt8UFqVdiZYsPjdcZGc1x7KcAWfLC",
  "key7": "4wwS45w3h24GirseN8g98oP1f3hjUvdr4oaSuDnMHQ5Rj2Gek6FRxPovJhNHnS2Cbt58TmoKYYnZ3Yo6hjJRaG6v",
  "key8": "53zFQktDJKWVeoNhvjYTRJr6HKmkFYeNGCtet6a8EV6TquTt9tMacT4QTFHphHUj6z9chpk9u9xtfcHjNewRrQH5",
  "key9": "5ecJiN7QT5YEdGKk2HTpxfPWdWm25HmhJ65rtZC7VvRjTdcCnbP2XZbinytsxXKpo411cfQhwSG2HXa5rsQZjR14",
  "key10": "26QiHk33Em5HcVknp5xN4XXttve4xn7NPusA3f5CcEiiNqEAd2ePQ7unYSz6xRXM4bEeayFNK83PRkGRP3XkAVyi",
  "key11": "DBxXH8xkngx9gMmD6x8vFuBbcJM2GBVPM1wgj1pqQoDaKzJcPYB5bwo4Sh55Nf3zsJmWGoZcvjkFr4XU4KHZC5r",
  "key12": "3cNyVSxNb2knPPZte2FULieJ2a3oCcnyJCwappeFuVLEmDR3wmPCxdbuYjaTQX2sLGRVS5ojVtR3aTmimURbD4pp",
  "key13": "5snXSDhGvFgS5HjUGs3T2ADWJrLXhvjQqRTdsYfDbQjum8nXJF1JSW5ieptEDQk2P6RzVFBVynCQbxizF45eYgoK",
  "key14": "4H1yXX4zMcRhLFSkGUcfetTeQyZDdPZYh3MVycL6QQTWmdbQuMB5SoLHRFLbqEtUrwKsNNWFCFtwmsQatWLHrEnv",
  "key15": "2yM8eURf1rE7tE2E9NNueay4mM3r8oSEXGiZBzHtKNwXpyFAd24pwEG97qJC9jURxHAae5RPmRMD1KqXqb5c3kbG",
  "key16": "4zu5ToZT1JPf51iYHKiiRHwUbp4ndqZ7ivcAUHB9nExnAeVUeCndq1ugyyAStBEv2SybaN3CALQTkdKvip2a1CjF",
  "key17": "4AJ3TadbBMVpzHm4nPaqP3BUrHH1Z4We6bLxRRfH4eRYEVg93cLLr84wLkeejxdZAeM5syMMvsB3BEt5HWQDyrmr",
  "key18": "51JnkGeHDBHDdqahW7Htw4SPHUVozhSj4Ck91BzgUaV948p9Du7FhWfcPSaYzRFexTB6AkHNg1m6vWBxZUNWyETt",
  "key19": "4g1XW5MbAEPp3kZ1nLBNECaPuV4AGfW8mU8xXR15vVsgHUG2dkML8Ui15DWb4LufAFVZCM1AKDLxV2S3WoQeVGsU",
  "key20": "5s4FHiA3ptPgVQX1yUaVuMxc6wbqGjeYciaMzrau8AziwkgegbguUCDWvitrTVqLTMbbCGpbpLGr5kDQvMKburup",
  "key21": "A7j6NobZJpiySuvFENGBMmVLEsazfM1jrvxZmzGNyNyf6SxKCABW5Devbg5VhSSWTGVgZDyEGX5iJE2rtJfeyZg",
  "key22": "4irVd6E2Q2VBeSV18LSq1pBUDRXHf7E27GE2fnpW8jAfsyM5TopDEcGfsjv6uGRJpAN9DWmMaU1KduQ4TSV5X468",
  "key23": "5DX19G5c7kzKq6H9ZZsyfQmfeWBSgFejvwcRaeuQWw3aBfWtocSfEMB5pegY2YtUqLwYwRjyp35Wie4nU74GFm73",
  "key24": "4b8QXTDw3G2vEcv9DbfCiFA993YWaC8gHpB5s3pPC73kVnArivFdYMC8QDH6appUAG3Pb6S6nYB4F4n3TGtJRDe3",
  "key25": "315d66JVpbgYDZqkuYtZLBMEJ1G2ktmfNeEshVF39J6YfNviELPhzYJwXzojziDfmFWJ1C6NADxbF9MMHVYU4FL7"
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
