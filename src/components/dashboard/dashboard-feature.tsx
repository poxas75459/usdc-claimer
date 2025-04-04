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
    "3VuDu3S6k3mPipmWHHiUE3qgKZ8m8eNGMLLV2B2APcsfp6SRRkNJkeEts9hznofyX6PDAXGcfQSxMv7VFxDVkMP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkB32UCywMAha23br5nbLfcaV3obqzX1Qb7t9eHT2jK4eLtqjsnYEA3SrLTfMMUzovwnvGoJq5mP9M2CbyijwSV",
  "key1": "3YDFanLvi4ZDiwrAjC3YmFKC3XLNbyNxUwio37V6ugkXoyJ46qsNYXc1tKgLUvsjoKFZ6H2oWXGdBiAecUYj8HCA",
  "key2": "3bTivnPEzYNbiQYYctZA3cRVtr6HMB3QFia6gjojumE6nbVVLrvYTzUiWP3FBmFf3s5yYB4PoCitu6fWoAZpj4fn",
  "key3": "4TkTzEeCXHbYdVoDzZd9WKUadLSBsGo1YYbhdvniTn7NSXAog2x4Fs2Agw918kihyu7ky9JW6BnDnJd5cy4aF3iz",
  "key4": "44RYVnHmAnKh3HHmriQsBTSS7w5PFjQwX15W7uUpkdiLdyE4vnoXnuZqk8WDDxEvSEGgNz8Cpd43A1zTccbKb26E",
  "key5": "5DC9XQowyicDx3NHDodG5A2eB3bRCYAYUyusVXK4pKgCYuEdd4JB3rWLu3W9aePizdBKLbmGMCGFSNiboGh1GciF",
  "key6": "4gpLcR9CQEDsZJBXmmKzVWQBMNHjjdYTEjYws2HbewHjMWVUCGCvJebHG6ZCfrT4Dv4oa6msUUMSCfkhVVr3BcBc",
  "key7": "3zLJtigPp5s6PNSkM7DFT8aWeKZbDf14xdEiowPV6CFctLtNsEcqaoCykYrc1PK4jpA9xVY6JGUWajEeYUyYTomX",
  "key8": "h49mPFaoBdeSqe9NpaExeAb6pMaXGq4UMMgcaVHbCtz4n6Nr74oLgJkRJnQksUfeB4zbRuxumhZHc8AR5Gig4yP",
  "key9": "2eWjDcZ8Z7Z8j5jxFwC9JpxTACUXAEPCWA8F2SCZ7m6iTri8DLrxCNmwNN8trBcSA9wAHa8QuT556BKEaLanhqYf",
  "key10": "2BoPPpe2LpmQY48bnqTeTMDV4aVq68ua23u1X7nxZAQhaBFQJJK93mvXUCM5tbbks3erBerfSZHxNGCZL2oTekWt",
  "key11": "2F1wrg4FSth793qYoTLGrrBDKBMFcNj6QdhBvTDXod43cVWkBRuRAgKyFtDpGsPqqMag6UMeLV4aa9Wx3p1Lixbm",
  "key12": "5PogseHfT6kV8zHDsMtecpvEHUfHyRraiz5htJNx3wDkHJ9t3DL4wVNytJ96UMGJoLtNWHNX8XPW9m9uk3uMoqVi",
  "key13": "oYJxsgFEShEDX1zrv8EFFTFfyL4HmhtyCfA811ssqXZQDqz3fU7PBd1Qk9MYT9cBw3ofDTzZnTaaAEDy5a97pJb",
  "key14": "nrC6BzGHfXok83QviW6LsPNf8ounANMGksQ9sXmLD3rUiugmCF5yRJo7UyCCFLjjuREqBxHnKpGaMjxdQLCQSRN",
  "key15": "4TcvhSj8JbmtNcTaQxHo1Eq216HRoFRf9xnTfCSsFHRnwha3po4wUJJ6tZDRs4KNqCWJqSsVRYxrD7p9FQPy19RJ",
  "key16": "2neBJLaR6B5Y2eD9yuEX21H3yBP6Tgbh6qDPs5GdpucjSB9tHWqvzVUr33Qsb1hCRJWCug4kLJhGkaaEm1b4nqdc",
  "key17": "JqyAzFJZUDUT65atBqjKAD7LFWWCo5i3TScAxRJJkcaTsvbHXZ1iEWcjCcEncTUjyuVzy23xL9V4qrwNNdZNhVT",
  "key18": "BfBkYkPsZBQ4ywdn3Ga72wV5VViYPt9ta1hUGhjwpxAaYx64PaV7BLcaFEBmQddLwvDDn6KgBv5DCgKhiDbpmZ3",
  "key19": "4hbNSVbSfn1g7Ty2m5cUv87VKpGZ6ovrMXFCHvvvhTQhiF3EcwZJDx6StEw2M7ctmrJCBdbQNNVcn6UwB3DyhfKt",
  "key20": "3E47GR9tq3RY7W9H3RFq1pYctVWQsn2xWgE8YQpJPVLV6Kjxw2zfCiLgbip289cB51RyMSQ2jTKfd3QbjB7MRNfF",
  "key21": "3yLhV4yvcLa3d3KgL6TfpLjEd82Sur4utDLcyCPt41s7FmHfZ3EohEeYVCxocTyA9PmCQbn7r5CYrkGhF5Lehwkg",
  "key22": "2m3WT69pFuPYeR7DwAe2S4tfeEKwHaoDt286NBHbA8c3iwF8ViaMnstD4v8vg1ratPNNaaJgaL79s2gYH7VWB2j6",
  "key23": "66nRyvxZantDYdHffzbrTrDfaPCFtPsazdVP2ZgNYfz7qYMWcFBnQH3p3JxxC4nrdHGHxJMoavd73WD6s9QfnANi",
  "key24": "6FkALyytwgips9GQyw2cY3NWLWJQREoTbNQhMb33HYcbceyzBjeRFYtb5z1yDREyoeKozo6yk6XerGDnV1zUbaj",
  "key25": "5yehYYSRhvk5zPg4kSzszu7smwDa3kx8qbDehyuudAcomJysAAPDKfu55w6neJWew69tf1iFsYAzxv3MMySoEsL4",
  "key26": "37JXeXbS5m1fsijbwvyyJaMMkiAhbU1mf8DdGiwhq2Mi6uZQKBtCrdG4NJviSQ6PETHKM91Z6eYW1LMup7P2zLk4",
  "key27": "4Rc4wYnTYWwMua5hNeBoXrpm1Z8cmX6T9c9imB9xSvULMZGjRTgwcvZrRbvMJ1z2cJEJQS5mXMCN8v2iZGsyiG22",
  "key28": "5LBGGZ7o6k2g8Ezdt98QvhY93HxWmhcPg1HSLWU6zqXNZaqdPyMmnREVY8bGtwio8gnaSYsLYknNnjai7znTgGKc",
  "key29": "86gDYYmBufdDgrtGY9TJnW5uKYkbisTxfQbddLojcE13AMCytJNFPxXqSv9zYg2to6AFYRfETr7CiiVtzc9jMi5",
  "key30": "2QsLxeLV26fZiMC6jeZ4FLpY36QgHVKGaXnzCW6cNSS3cnwee51iNBjsM9UM5sbveSmnHCF29hNVQ1Da6btBmwZo",
  "key31": "3B5GRoW8dQcbZGYwzQur8KeMHoYxzv4ob6tXUfq1RgtV9Zzg9XNDBURVQVJnnr6QAMYTc52Dw6Qc4ZyYEpR1Vfs8",
  "key32": "54x7gvuj5evAdDacjkVJ655r4Z6fYxLCsWcc6SNVAmrrPzCPZnYUCtJoZMeR4a6GUzwN5eVY1LXb7S5Sy31VMqxe"
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
