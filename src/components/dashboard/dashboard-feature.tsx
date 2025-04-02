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
    "2b29GC3BkizZfiNPiPAKYWNnbbFwrTAQXCSzJhVL11QY2UKBQcaZh4m7kCgumr9X19cVmUe5oa9XKxARd6j3516q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CrmRmRSncLc5Y7U4C3yBmsHXEjrg9DJka9Lon2ieg7YX2ed8Zu1LtHWxhYbqKFSqMGdQDHXYVTEuKiNcVdzZxBs",
  "key1": "3sJc7RQKahm7dfHJtYoQfdqzTr1r7pkHhANFWmYxZsbAZqKoqo2JYxCYJSw1uAqUfzZyxxhQNrzvBQ5cmRUrMBw5",
  "key2": "BDQc5kuAYvhwn5auDn726QxZd3A91Eieb86XsJveUWgxGF2WfypFXfbCXiuqzq8ysB3x1FDahNpCxaWpPPFFp3a",
  "key3": "2vHEvS99JXKjk8sFRrH3ykJUsR4v9cLggQzx1RUPZdV9p215Zemh9pTKYkUNg6xt1PT2XxZ9TBFPwd67dnttPhCU",
  "key4": "5PBtMUbXHCBzRYdrM5ZStyNDNzLECH7fqgSHyDoZpS9b6hAtsqTo758r4wDSPcYHJgGuAdoQibzuUyiDPvkX4NxB",
  "key5": "r7DP2PdQjAmwb69pWh8U2Cn3wPjYkNyYaYhkMk1jSJVpz77C1Y6FdLyyCcyGWiMgcW7dn1n7EgSwXw4oswDrXcS",
  "key6": "2KwAEaAMWRAA8E8kMuyQTR8veonnQPWHRUT1ReHfsJh33Y1aCk98KcHjeU5vz3HvQTFjh621dYGScBQHBoUWT6BW",
  "key7": "3adaNKPvNq9wNJuUcnkuJnQbSfvJHyTLiFuErvH5oAt5QzZxVoYWZZf9yFin9jLiWkXjcaJVJG43hi7ku3DpP9dM",
  "key8": "2LJvyGheBMCeeLTnoDoaS2kPrnp96CiPKrxpqKq1VaPngBy9xYcKBsghKE4DZ1NY25qWhaNXZoWboef9G7eeHtvy",
  "key9": "3JAuVN5HRdfYJyubMHog4NRxPfEQAuth64vvfGyCencmEfCvk76PoVMhLmQqPo9CBTPifdHvhTt4J1Vo1GySyPMr",
  "key10": "4hyZRmiU4MsU8WjQjWi27wD4MHGMYYNyEhdq1GrkfayfHWAzNDYiqv8GEspywzRSRDbzvuRNiow5on3HvANeKEFR",
  "key11": "4XBMw25B2TMPNQhXMeKCjynzi4Q9FFdhgRMaXyhpaMZ4X1A6xrh4csS1FL7RQ6d2p7cekBwjHwJdutRoiUj97SxR",
  "key12": "5ZbeL69zMwmYnswuHymext9K5nipVaS3gwChvoVpxP1b16gh2XQMZPmrbvkynoNyMykKvJcS4geM9ReytcaVqs46",
  "key13": "vRhne4492JwEmam4ybjr6ThaL3qia5yx3ngLon9bcfsShXvKWN4hD2vvadXLnja1tmGr6fzk4SDFEKXKJDcgFKB",
  "key14": "vkdY9jSUUmV9erC9K5F9p3UyGkubtf3ZgRRQfWxuRC4Fmkqqim9QjMGGCVUho2wS7M2zPrtS7neh6qCEvypzXs8",
  "key15": "s5mU7B4Wjqw7ZMsMBe252N5a5zh7g8za6AxERM1fMYNWKyErJSA1UWXKxJijVUdsMKWDR56WCrMPDfsqGrAcCHy",
  "key16": "2cZP3zTGyqcBfdtvqvLEmB4VBjaAA6gJY7j37NDmfZpoBxCAvanzM1Vvb37CyQ6iE1eeUhwfNDgV1GCaTNfNuoxN",
  "key17": "SUAxnd9XtPuRdtpuzbDczwZkV6jJ46fytCShjuYFUxBfACW4RJdAqwhPVrApk2H7SjWqNceN6TsYc7Xenrwoezv",
  "key18": "gWu6xmThP4K7eqDSWgFNpxA4Ha35WY4kvFXjw8PyEkymqHu3PAqMR6XZ7GuubQRh4W8kzeCx1MEM77m3f8ouLev",
  "key19": "3esdSTt7fwy4g4WTsP4UuKMpH1RTx15KjAraf4km2KHVd3kjbXs8aA8uqXsskwAN81p3fM5rR6WMwdwssrcj5zJY",
  "key20": "53AGgMFzPshzPWipfvzieE2rEyTVkNgjmZZYfdL2nBHXu6jq2d8JHMtqasRbUSR4vPFFiY5VNWkR7p8gdxt6JKHA",
  "key21": "2ph9nct9fNECJb8XorxR4W92UgtDnHsr1uQ66MGBnYrbPSDWfY8mMDfEVNQMbcew3UJWpe7GzGEMzf3cwqab8ayT",
  "key22": "3aZvgqQ6rUewAJT6HMiSTizRkpXhZxn7GceDCMZMHTzg3z7Hjdada7jfGTA44oP7Cr8o2GowR2W8pZgCWVFjTaEK",
  "key23": "39ZvpYAJoE4u3EwiGXY9jo6pHmPC22v1STupUmVqajJN1QariiMS5hbFneEQdFhSDV9X1ziUrGkJBiMzUwJzrTPZ",
  "key24": "3cMDA31gfxbqXTo7roMQ1Zjafp5YvVHxsXyfZ68X8LYhB2p1cYLnFAjsf4whdTA5EMbRzA1a5X3Y7mR86Cfb6UDz"
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
