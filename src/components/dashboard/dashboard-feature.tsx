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
    "2SsuVooRVQ85DjY32JjJM7GfnrKPZpmAXdrUtP9CEdRUV7cTH7nh8PSxbprFAn4h9pbXrqLt5AFDxsHnxmELLoGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AD8KWVhNmxC2zpTgYMqeHRL33pdXx5kZWF2fo7Ho78JzB2epFDseg2jecAokfkcTM1uXTVArxStvBha3NwJunq",
  "key1": "3829TLLNYH6PGWixtKAn1u12pnzYRZSf4fKxzEeMic2C3BPGmfRs3rNU6ux9C6morixnyeswpCJuUWiR3NxvYBHz",
  "key2": "41KuiYPoTJj59Vc598ie3wfWETA4K4E7VpxjEJ2W7Hw7EmDjzZv8LHF8JmtnF4iqRpxZshkP38ae8LWUiECgoNRZ",
  "key3": "4mMNGa1EHSEWtC3gPWsEHpDvNH65EE6L1Au5t977mzAy2qcfSz874toZDruhku2AAqCpi7s4bFbmKDnHT6qQuTpn",
  "key4": "4Y5fgHGzZMjiWXitjUo8wzZZisz3DNaVF7aaRgYQacDGy5gpzNoRXa3MYNWvaBfxmFdg1v8q48xTBWVymMiVsWME",
  "key5": "2hm7ivdAttd8rygCXX4x75G6wZbbVPLg4H7ad3FLnAroYAwSHPQJpBGGkWfLDxPT737uCJ9Xv4miU3ob7HHQH3Hj",
  "key6": "41tXBBeHa1MATxznrNsCDr27yF4QPe2CkVA5bBfiCZLNDtr87esbQAFVfArLNh6gCS5nm3LcLHjTvxCVvBSR9MBr",
  "key7": "uCPNBGWm6pRN14TZqHEZNoykw2gxXBv9KbbQAUbXPBEk2yqb8qRKsQvFopwtYfPt8uwY5raXFhVvaotFTLWej5S",
  "key8": "47UpXUZWKoA1RavqBRXkS89D3BNoDRoeZMC7Fjmkb6hwzUzmihVKHXDZFAAA2PA2QHhEhjZV9UGvLM6ffiicmorf",
  "key9": "3cA1RPDKmtaD54Fg77eioaCW56uNkuKnpmReBDy2DuRBF2pmHBnaUjN2H8aFXQH5HkhuYhcLEiJ2u7t3EjpRSBU1",
  "key10": "2UeNLM9xth7ZnZGwgJpdeeNStGC5xjTsFkEtARq2dbJMXnz1zNp6sfDzE3mQUn4rcGqmPpYVgdd9WPe4YkvXC3uu",
  "key11": "45sVJ6uT2UxNQ4G42gFfGWiwhEQaqdwhxRnC9N7qKS5R6CadsdNaX1h9ys4L8yGXuGyJnFPfa8F8tgANKbWKXnL9",
  "key12": "5epSBN1Gizxd4d8ZifTe7fpW6DS1mFppTejvyt3N51DDUhQvfRWCY9iV9cNjeMg2M2YsWM22SqKmxQK5ALaWYxzb",
  "key13": "5beZA6dxSf3c4HZuMTW7THia6jys5dH9NTAWd56jCfK1yp6sNMhZMStKextCEemS1uoTg51kdEu7LMQD7AVLVnwW",
  "key14": "5mvkj1xMVPDsQo9CMZY5HaisjhWuZMdtK7ZnNPUrXLs1rh3vB7DjCubE4FsKuRBag4QbfbmyqRY4oedzz6EnEeKq",
  "key15": "59Goypvd9r3e1oCEeEMjqc4EaVbCDcVL5o3piukfRznEbZ3GiSvv6nfMGuJzNnLtDRo7DRHVVEkCC6NXrHwvvQfe",
  "key16": "qLjWS2S3HjEvZzv8N7xYTqwMPModEEkFzABcJVfw2LxxDvQG4sdpJ8hbKFA6E2XyYhQJuSMEEDAQ6rQmDLr7RWR",
  "key17": "4zvkip5t97m5GYGBa61gfpnBDKKMEHRiNmpgEtZaSK4qn1VZc3kb1T5C6Tb9MeC3X6wJYvcgM82fFSkqknD5qpVC",
  "key18": "54ombeaARDHCjuuqYWJ6X9nTkY9LcHWDk5j6m8PUTzizPTmYVNMfFjd2baAw89phXH7jXaHzQFfwtThSt5y3fEYH",
  "key19": "5TPsGK9qHDoNnMko1ArZy9q5ubZ1jUSEZh4ve6cTozyyVj7nhiAgx8FfrbMtGphiVKyEqWYN8wUYorePvszbEBQE",
  "key20": "JuTvWbosjp5cUqeauzqn9Jkb5EVwvoQZF1gC1hWEyLYoKC77dTS3bxf9239px4Lqz4S8rdvo7USp9F8CtornEYi",
  "key21": "4uAiST3Ew5ZtMtQjmHTVBWgmn31Q9cHxPHoQ8YXcJGD7i23YeXEQiNtuXgGzSx4fUdfRpyqZoVi6MYsu4eRjqLS7",
  "key22": "5BiVKAeWBcFn7HbKBE7Nr2XJctrAg1UX3Qu2eKDrNLrQ6ibFTK3FZecPuBQnHoYxpBQLqEfe2z46ru1sf38ftxEn",
  "key23": "4dyVa2kgGLccwAUv2LP2Z7UXbrN3Lgz7c3WQnnkfZRrLfQKL3LjbZvPiT8rMCSMpzP3y7XVp59WzJ4V3wtSFP3PS",
  "key24": "5naT7u7qh4q5ch195qyggnUvne3rekp3AoYv13kGvoR8b1bgqAnYshwVztTW1iX8BrDGwGe3nf8X7maEFJ85eP2s",
  "key25": "4FiGPBjifji8YeLRWJFY47MpoA9p1TVpZS69vvKEva8LnAih9RDfLbkXVBUuUxMyk7PpnZfWqwv1fkWXgwf5GHUo",
  "key26": "4bR3drJTqMdGr9PF7BdeiDmue3u132zgoxVssihLoEnVg5wyvEsheDbwhjZmKpC2fAMXQnQg8cwKA5A7hgd4UUE9",
  "key27": "2kpGb3e5eKTs2grc76z9dm3tbjCqeKEjt3ytJWqSKU93AT42GwQq3ruxDZtUmz1LSrwdW7uSqEr5FhKWT6Yz57t4",
  "key28": "rMLjJ1c9cfBo8hs9ZFDKW87DzXZeFaZzHYc5TpzsDUT5To5JRm9veQKpDJkCQ87zuws1cbfwch7ncnnGQTcPfBV",
  "key29": "iNd7pC5Zuy6xJBtei3BUBSwmoyH7LB2o2imweAnfeXr27Q8ySXHMYdAuRGXMFakbjhYrBZCRSUTzqtw89sjHBJZ",
  "key30": "26eD4GTHFq4cQqJh1QF37gyu6hY4nGvDJRuS98uYVc9dwsuRw8szvMy4SFAzznXDvAbSWALv6FwSADLXxLxcvRxm"
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
