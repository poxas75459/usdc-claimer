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
    "3eHX54FtffuXLeorFGNuX3sdS4QWPoGADtvaXNb73qXnHoA5hM15MNzjaoTXp5TAbKogFof7JpAHnetuQFjCghGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diNh19ei7hxZiyL95LBsHTGZTpmaNzuHUJtktyNadjfSMNTB3uPKHoNnw2uAYGd8hjFTqGqeZQNKaRik9ic3Zsr",
  "key1": "23qrh5fWxqNPC9UwLb6Y3JcZw4j7xPfFEpb6hfV8nrTTMkuUXAyah2fQSQ9VCWZ9U4NZX1hHt8JHfvmmWXwh1mM1",
  "key2": "BzUS5BcuAmDGR8nzkrb4LePii7gkTsEKd4hz5iu4d4YHDr7kx7pCuJfJHY8TckpktQdnRoue9Kt7hJBVV8gLrdB",
  "key3": "2rvtJJDX9zrZzXVGUcv5Qv7awSQVx89cgiASop9XTXoizjFYMWmDCLbxBcSTuqXLfdm9BJAtM7Yeio95cNdf8597",
  "key4": "2ZaBtLcPtMD26aBf3wErosQ8JAUnmp9surWVymirpfMd1w33w2ud2kY1spoeM7U3tJxSs9HexKFST2iQpM4cKwF",
  "key5": "4mcSwekHghrCehbQC8qxwiizmVGAQwuxk7hCbVNRDEYv3oF1SDRtvk7ToDcmjqaqMbM3k1XKd8Q1UrtNBCzVxjFT",
  "key6": "5BKStqGTy7zgoiZd3aaPgoqxAdWPwjRngsrhU9g88z2G4jWVoNdoK8oc24h7b11gf9xdVHY2BVzhYAxNCm4nfjRT",
  "key7": "45HpbsM5DwZnhgfzfyHyZY2dyGwQFK6t9LzrPRhiERvEMt9wXVpEPTvGZZ5zqVUNfGPLgrs86c12PSiPjhpLbZ4t",
  "key8": "4zbjbW7j59BVv98CoU9LLKYoXfTGtR2Dm1NmVEE8CETrQucxEBAkJP7rAefAswndFZYJ4vYoMYtRECbUQMGhrJ4H",
  "key9": "2CS4GUfqJeqhtseY6L1KKHXqqLypUr8xQgY5qqodC4VXxN7SwSRBJ2eAcre8Wie1zPvVDHdS5p1VcMoANooAyqYr",
  "key10": "33wtkL8UnmHjhcxQ1DAQMvSNuuP9BguNk28qkyp9wyEWYo2S86BSQqp5Qfy4utizvwAbCYpQdTEWX9jtDcpH1kjm",
  "key11": "3LqnUVj9yFU5Aicu7ycECmtiTSFhwrmm3hT1FBd5PCSWUFBeTwWtCY68aGhJThTn3p8WsHkuep5aRwLSpnToE9MG",
  "key12": "5DtWdxPBTZmRTnuzrYRE6MAmSQ7gJyuKbv43Q6RiPY1m4gxShbvh4cHYUCuyXhrn6TCbiRyg6TCu4kjjZnzs3SoM",
  "key13": "4R3JXDyvKRRABuogiYTvUeqW6scbrxZQyWJ2LWojSM1zE9WHRsiW27oCfRTopfSPCLtAGk415HufmSwz1FrbEXDK",
  "key14": "ESuCntfXtN8iWFHjoBMjaharpiBWHFgr8RmfP53VYL8FAjHCb24QmLWYgMmbjAk2g1yXntXjTG16HPz5dZjbPyQ",
  "key15": "5y1q1enuHZayGWLtYT9AqpRej7i1HQem5pHNTnYiq2iKAEPt3ZR9RukJQBKDURoA5XYxMHJRNxKWRWquc4HygGuG",
  "key16": "4xAT7aUyxWFYZXUWkAnaomHX9nm1k3Cnb77qDD1oHbGm7fAaWvjL6ziPbedENvX665QfkUDeTRdy7zdiomCh6uwm",
  "key17": "4z36QR7t9eXDjYGSshbtG9pp882eXKafvwi2ADb3eshDcSp9Pu8J6z4caPweVNG6AKpt1NwjEvW1KxcrR2URS8mW",
  "key18": "45tCWCq18Meo4jxPYhX5r4xkSnWd6ZN6C6S7qXJ4cypKCn4mBgS8ecq22L6MebeFXLHQKqp339dDNNKzS1s4U6uQ",
  "key19": "3oVxL4ttdxgCVfVVH5Uf67zBYSq5kWNnWVzj1sAkjZvpsH2fTW4d7gJcug2VjBbsAGn845NNzoNTenU1uE2cEin7",
  "key20": "2aZyJVLjUkgeRGZFT68Z1Wnt4EVZxXyfNkcdp61Z74hfXqUiwV4n8Z3PRf6P9roYh1EwnTZJ1BPahhmyfZyHfRen",
  "key21": "2PsfFJwtggZS8Nfn4v6q17c5YnuKrznNFwCrfKqPNiELVadYuzKi9FTPhg81ToBccWWSSa1LWWNvUTFEU9f1SvwG",
  "key22": "46GMHZM4iTMk3s7a8UsWUnt6Xb8XdW9QGFD3SphthM8nEymovkxMZcVVbGjjgCfQ8MpdEfck5xZ33xEeMTx15khP",
  "key23": "4Zbx2MSk1RJuoRVVSTxPxy5q6EuoqMZdVAsaq9UBRVTh8w74Qqeti89A1CNj2W1FrzC1znnpcdXoBP5DGUzuBLnN",
  "key24": "3jqFShT1nM7396YK55vtjuzi9brFRb5pExeT6Y6rbVVoZx3HycgheCxuuucV462X2H6X8q4tQPTMAKAtVidwXGQm"
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
