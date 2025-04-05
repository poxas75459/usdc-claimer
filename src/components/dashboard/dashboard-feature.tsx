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
    "5iba7qYLDdMZeuDj2jmG4pTE8fLBAriFCsLkJGMTAEnvk2ogQCw1wnFzBpqwKheTMGSXqcbCAaurqHJ5Snt5i5NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8AnNzhNP3WpXHrvrQL2LoMTNu9PigQe8rGHxxpvWGiedEJ5BkS33hJAzKx7Tc6DyLARUrMHHiEF5anBhPQM5bF",
  "key1": "51wStCK8GkJ3JxLWtqQBDmYybEyGrmcD7TyMK3PbD9hZ7q6x9RSVGQfVnhNww43ZoyKzXXCrxA2uf8N6duYoztrC",
  "key2": "2Ky1u8KovPHarzJMe6nbPrXWChZMqHCz7dBkrRqurqe8R5QYbZNsU7wXDj47aVwfeQJ6pPTQTUGAhoTZc4pjoSib",
  "key3": "2GvvW8cNwKoyeTe5uU6QcKK4CjQWZt1AKJ7GFNAdJGMvR2rdtpUXLETKbYTW7Ckks3662dN45gDUYeVAtWA2Ey2w",
  "key4": "3sgSZLSs66P3agCc18vg921uNHjBjsWoeGTfAA4r4nBui7Ra5oBYBTV1PdoyrvvVZo2gdW4rzAM8fkxXqAFZ1W4s",
  "key5": "2JCtaPMJXwgeQKiuAmXEhWoESADYVCtUHHdo6GaPuxqAbRosv7J7U4NxtvEmVsEdn2KZ1iRM4y7pdywcc2RL1x92",
  "key6": "4s3EJ7abNZZyPLJ5AUfpK6d9fT86rJSru89soeRkjwFXBfdf5HZCb4CojyJ5c8CN5iyLCoSDJdw6vFqJSHuq8Ahr",
  "key7": "3GB5fpTsThPGc7bSHiuHTqG3qzdzjXLjuGDKyYyJZKiacoATbv3u4ZhMZ5ke2uQ5BaFjXQX4gu6u9c2b8LaSMdWN",
  "key8": "5BWpTErJ1fEZSiCQ9cTkk5Cw9dEHpAraNxU7ZffsEzxrsUJ5zPar9rfC9i56dH23m2SeDi7A9uhJHKYLBxujdpdL",
  "key9": "2yBVZz4BP4fH6xfpwzfuawx7ZDw1dytoSVYrG8MM7hZ9fGsHo1GjKioP8NfGFZKtBtXpWcdbQocBx2sbN1MR9pRD",
  "key10": "3fswRK6UX5HCVbnktGMjQHjnmcy8rPbJRufQFeSxM2RXZ6hikZxUXaqtqGC4UzbXdwxj61VGp5kiqDAbrkqFsT6p",
  "key11": "C81kNLg9SBWkWrshnNADwkF58bGfdaAvR1SnUGnmRTnfjAwXiWUUkaDnNXh1K57qJKmr1jc4NuXWyDzz8KKuKMr",
  "key12": "4oDWRmP3fFn6VCmfMBYb5fK5Uj1dTxGKpzvMYV6MTDEf58n9VxsfSSW4G1SNwiXP4GavkSmdNeJj9fkPb6JV3HLc",
  "key13": "4rpcM9sVqx9kYw4qruj5T4LzEESVX3L1eBGc4eN7QviGDFj3xe9nfXrfFqeYjhxtFUxhEdHLACwAfV1mNv1UwSAE",
  "key14": "4LKLwnL9tjVyCQEoVfJn4rKjZwBYy4n1x4XzYoFRSwCsJbvzNrr6AfcespBHxrVRuX7FuhHmd6uupebMTu8zdv6C",
  "key15": "4jsVk2vUTnihEefbkLiULRACZYFNPQ6YN9QZ19PVfTdEL1PLyaztZtWrZ4w56HQDZFHGx1UjGcztNJY8Bt3j5qTi",
  "key16": "62MXcRNLbpRZQqprezGpCkyyAj6DSZ3ropTFLVPtJbnSBc1eKy8pkM73ThyyvgBwPnwTMsvjc4DVXLdjoxPZJLAo",
  "key17": "4AJyBmoi3fqfVSK5qNqpqghQCmsh1jsPCqioiEhz1PrVGeoFPWLDNLXsGpqTqhjgKNPdAHv167kzruPhuyCPSLxN",
  "key18": "2nBGb8zftiUsgTNiMpuwncp1gTUq1DH2jq169tnt6FsX4xRBFuWUmUeYnVfqXavvqHEH9YWkmer2iHgkWc8zCX62",
  "key19": "24JfGD5zB9M6CkCPnZ4hjLjbHDjwEM9QE5n6Yif94KEttbcQ2ppynwyWhXeTm7vMyADdeHb5j1Z79md3QKQXfqni",
  "key20": "X9VrxgWJegz1YLjc62ueUFr4spg3sWisvYbViHJgbpFvusZTMoW46qx3SE6GJibhq5iPYio6J5vbcRZoMGyVJia",
  "key21": "2RKpZEr3HgLgV8na5zkP3qcXNQqHKSRsjJcFwBjxic2iRzcNhepEprVxXHj6LQxyZZYR4XnpsqLGFrHedQXx1AXA",
  "key22": "3KcJYay5L3AjcSmRFWY2AKxhcJSArio1zAvC3ZcgGfqgUFbBkpvsEoJeFDaubcgNT9oea9nJ2e7raFzFFjPznfWv",
  "key23": "5kKRaR8ozS3imG6hE6FdxQKqRaeZELk1hJx42aKJY8t6D9ewdco95bLckMzi3H13TaoQYtkvUHB95qNv13ioPor5",
  "key24": "5K9jhQTdXCQ3LqyCu9LHhTYBeJfMrTd1C4mzUohn7hbHptY4mfAc9LC9QJFYoL6Q9Fx2QmUpM78WLS9swpLQaby5",
  "key25": "4v9nsyUXdyQXeMMhu8Z6UvdMkLEBZ2hvVSVSPNgtiFRzQaazmgkTwMMwCvDZpbSmbPhutfYZSdDqhMg6FtvbcdiJ"
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
