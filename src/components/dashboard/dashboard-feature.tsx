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
    "4sS4ZcTVuRhUZtS77Syo791cQHu1DWTjz5PximC2oTTrVZo3C3wWpad39uiW6v488bEHBJdPoM6uMZoNrfwGTXzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ymAgrNAGSLPQQXvccYjLqom415Ax4vwAVTsRo4Qwa8uPAAd5ZaTgp2K2NGHYD1uTpiy49AeP1nUxWQyo5dkYw7",
  "key1": "4Pvi5p53h4yc6oUP1indwwHGi1ihcUCiHjkAgTCvoWfVanJQMFjcpnvnkeGFGH2gvvQVYEVpDmPkaSzExHhrYMqN",
  "key2": "3woTnV7cse7o5CEkGDF7t48c1x6YwXUXZJSMB1fQTFPthFg2LQspx8jgGEMzY7qVgzCDMuCvN7UAJZvHGytjUh6E",
  "key3": "ULqLMaaeGppnK7HeQKSnwb9itvoKHH8jJk4GwLVQxAR8pFab7kAL24PaGXCyPn5faSCb7iMPYUXohsvhQF99xoQ",
  "key4": "4zoin6bA2TRaGniNB3SBxhVh4DcBdnqS4K5tF4msGC6ccSjhBE2nNjpYWhAZifqKhXzdt68sCyAXQT9K1B6xvwUq",
  "key5": "5D1RYiRNdTLTyRsbH2UCmz3eBEfdH7qQNTkNN6gG3TZ16FNWoq8y1JvDwrpmpM1ptFYQounYCRvgZ73LxDRN3N9B",
  "key6": "2QetPT77uU2N61rcyJ651i7aLRAG4NCxmbFXAcvPZDUCtMbxyZ2UanxiH59idxp4HrhpUioZJA1kJVBt7LLWWJbB",
  "key7": "JgnroSag3HPdrsDBQFWg5Voj6MBWLDr9B51B1w3iEmdeqHep6C9bPYUtqyEXTK9ZK41JPGFkZGjeU85BCG9kChW",
  "key8": "4NhtB9Nw6jmicqxbYdmySHexgL22ZqXTFHEfZ4NQFSmLe26exVaVfiiAeaPfW74pJivWdREs55QKMiHd3XHuEMbc",
  "key9": "4Wtr83v5e86vwA1NPJ4i3VK3BSYppGwYWXUBAKkB31xz9yhFjiWuhrL5CFC5NhoZjcD4KsWDhpPZwnVP3F4XxH1C",
  "key10": "3ky9bEXmwbpm779bs1Q9PWiyC7gd61t96XayWb3r1owkgvU5VmXBX5bra6WDeFUFqgeVkq3KBV9FNhqV1vDoHBGm",
  "key11": "5kYCuo4QKAC4tB8X6gwN2iuQ5pGyHJNYF4D9vA6eAXwchv8j7dXCteEfVRs1JdY81N2v5NuYebqCDMjukVH8Twt7",
  "key12": "hxJdNU4NkLYNZFHu7E6HhEUC6rgNJW5ynoroomXJhNiYDyfFXDAqVLA7nF9EzjjJSCYTUyEjV4x98xvp5v5dq3a",
  "key13": "4HXQKn8t4nZWgsbwsv3d1Z4JaeMn5aCGnFEcg8sPzhxvofz7vrSnKCn8ubhcHr2jBKc2enLLDiUJkdDQ9FCtwjJg",
  "key14": "3J8EEkW8yyXFNERRh3Rjr7PxYLTLL29TKyXymBs4advioFAutQLH8n4xqjiGScUGffiWEo23GBPSjrcP1hknX94o",
  "key15": "2QjKz2oQwGorTuvHQQfLaTgZTm3WJ7Ppqu3WvXdVtEQujoPHtUYQb3xBwrdnggq2TkbE8e91q2U7JXUCUvKhu23m",
  "key16": "61aT1VwqAec76PkZXRjhbujzPAk6nfzkae82nr8uZUjcBj26HDZJmuYCf5zDGdFHxRYqR4FbBpcgjo4ENRXKykyi",
  "key17": "2Dv3ZrFi3xSMWiYVip7kQchABdvFKfssEhju7dT3kC8TNxFz8RqN6RJVbKM4fpLeydhbnGW2vWWtQHiyJweA2TMC",
  "key18": "2ZaL6PForM6v4jnwruHavZARD24EvfZBWAjuvgyWSGa5chNmhBSVDYjFem6CL3KhQur7dMs5KNY8nQ86RJdhWY14",
  "key19": "4zwFeAYpvPChSgYP4fLj6Kxb8XwVonqjyBRoQjk5B5akfGge8qFsnREWTquqEAuYhibH8To32rMr36DScqQ8doGV",
  "key20": "5Atjx7w8DMAnR6a5zVJvq8hnKecqT83ZPM6J6m7v1LEZQUFBUU2g1gLCvj7ww5fZCNcDLrFvxFUWM3KieCXrok66",
  "key21": "AnaEWH33NZo3Bx8HXBBBU3x4z51AVEFy8e8yKCtx59MFRD5TNFX2jeFnn8c9YfVrENf7qjF5WG1gsckHeEADT6E",
  "key22": "39ifcYDPCUQmKmUhCLMno5mjcPQ8X7eN9hR9K8J4ZtQEMG27c4cmvbKftYyLD4L12JkSeTyfLa34sbhW4bpJ9vbw",
  "key23": "5rHorx3mi5dCqu48udF3RndfPL3tFR32eDXWsvM4rB2KJa6DD7RTBTx4n685oz8euv8upbe7szPTwYZQN5hQdvAJ",
  "key24": "4U64x66oRRQSBUYdNVvTPCMgGsHD8G7VrtxLV5upJfz5rqkGNNULRT6QxEtVekMke7mGycPGCXCq2b1bZGWr4SaH"
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
