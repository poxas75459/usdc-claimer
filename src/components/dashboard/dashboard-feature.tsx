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
    "2ncCb9MvZfDTyyeZ8tbmE5H71qLgp72HCstJskBemhM9ifCaMm18mBwvsJDnBj7cdUWJBhvQjcgzBMF7N2w28j2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpNmTZcHUjY1eHXfJX1kybMZ2tMJgpEyfitrmWN5m1QWzrui5WETTokhguK8XAinB9i3EYK7eSayTBapDNZDbz4",
  "key1": "3LjTCc2PqPJ4m4SBJPEzUn8X4LwKY2TLWtn6yqKAup1oW2chH7EQSBcrzVVTBeNh1WUKBYkcZauHgkbghZej4LmF",
  "key2": "35L5FjGRwJxBUyvvMxaZ6qwFsNgLEDbAeoaiN8AKwC9L7h9ejbDD9xiP6LFzCxRCcaLv7GxsaMrYY9kJ4LCiUt3d",
  "key3": "64Ay7T5pE5p1BPC4S7kYCaBfjsu7atjo7vPtG4AznKSteZ6W9keFfE7aQ54iidcoAtiP8avR365Dps9UZ9675jAN",
  "key4": "3Uo9iWagg3gwbo4eizpBqvjCj7uzoEzm9M3qGFVrbNmWqZcsH3kypSSbok2HUw4kmBiQyn74iJDDra8GNu94azk2",
  "key5": "3pY27ZE9JFkUanFQzvmZdUEQnmnpvQ8JPMC4c8wYttp5cXZzdyhUB1UmgL5nejJkpFq4vaygNb3SzBwdtqXDS945",
  "key6": "3v2SQXXmhrr9LSkkCfAEZeYyr33fnVFmUatBH7P1x9JERR5GvcdsLcrtv1hLwUBfERso9UbuXd5TNPFfeK2Nf5Cb",
  "key7": "2anmPXaqWApzMVjDQxBAHGSNb1AyfseKxsdTL3k5ZtHV7tHLX1CFZPEQP9vFj3s6Lcp8K8rYNrCcTyZk8qkYQyx6",
  "key8": "xbZPjcfvpHwWuHAfzfnrGH7H86pqk88tLzJZQrE1LxXkGSPn6yNRPC4o1JcMrn23vLK5JsYvoE7cpzFTjDmr4X4",
  "key9": "2AUBzY6krgwKpUYrm7nTZySiAoBH85jexeDYY3fnLoHfRqKygf9i3TfRUSjG8XAVGf1DQKBVj3vuzwUHwQQu9od9",
  "key10": "13dVDTBVM2YoA1CF8u26fyq6KFeWzJe2kMb9KtYtXmwgmM1aFey38ndn23usvL5L1m29J2HRCMjYWdVtSnQ66kJ",
  "key11": "TM8MzbR1MUM8eQUf9j97esUeWM58WesiAbpCsgsAzzDXvoqR884yq1524YncWuoYXk3skPGm6XrZdRgsnrNqWF5",
  "key12": "1BS1Lr85r87w15a8cNR7DGo99xTkNFh3gyMeffpHsG4rSjBBDvhHvJrDrb8hWBue1ZWVMkp9QiTRA6e5LGM9j3N",
  "key13": "dkxkd3foeTPH8pKx1CYpiQJiqv3CMo7h6JbeMPhSRvnJvEDTL5FZsWptpE8GHoFj2Qpq9hZ8hmYL31Lz7wLsUr2",
  "key14": "2YqNzAY6y5v9J9GHuEB2qYYJM8PmCHCRWFWT8KpAy9unYkLZjT4V1F6w48n5JJfSxaLm6hFoqLMsh5YTxX2DEdEU",
  "key15": "3mtsJy8ZSHSqPLiMvkEF7oRM49Uv7t1jSUsb5cdEdgfXCJ9w4j8DoST1QCWMjmG4FSMSHHVo9auLPcocog1KFuyk",
  "key16": "4b1DtdSvE3rtx2X9WH1TWp5sZfHvjDUFpdyvSgEy9RiMTvzQyUX8CQmHQiMDFiXcnbgKiABfdjqjgNF4Ygdmpyem",
  "key17": "MyWBoaBXuVe5KUYkAoWtZDj5CyLQyB15fXARAtz6xAEQH1JkzcSMWZwfJ8pGCBh1ZH3xxkisMGQiHVeJoRr8wPX",
  "key18": "3CS4g1DFq68nCgmvu74g6G6U3imRom7BUt87UwRZKgjwyPuBSTGseQ7KSw5NkcAbvmbUzRKwhKZDavDL7oE5dg82",
  "key19": "2KMVe5z9UxZLo4CffryzmtbJ2k56uynNrAtPyJkfVDdNQTLpxc9NusyUay8qxkKn8RhWVt9WLCAdP7TZE1Q7o2oz",
  "key20": "4hLF969XaaEKo9HmVSjn5K6RigWPUn7qNuDyeVrn13heUowKiWovTgxnGZ9HeknGVCBzbuzm1dAWU5TJmNhmiwJt",
  "key21": "5AWrPaAUqybRqujUzHf8P2iX8xy67Fmai56BU5uE28YqpBfi8CdMWjM93Tbnkcm9ojni2FQg9fHcyyfK9JkqDWd9",
  "key22": "4FuRK3NRkxWwyabq3w4cRco3vtVDFvtZhJDRmRBsnNejuK5LmrXN2f2cpEHy6L3w8h2JHUAXWEpU2JgHwidnoiAY",
  "key23": "5UvTBPGWWJsUPZbYtuLwBiHQWZFAM42ExP5na783TP4pHkYnw8LEsB5ricpu3pMMeuF4hzEwHkuxqtfMkkRbKx4D",
  "key24": "5RKHPWKU8b9unoR1UQvvMyqN6jEmukvdnYYkvnKhVcS3bUrBP9Qj3rS4de8t5Fn4zq6sQ8CXmnyHE5Fz4DRfbncS",
  "key25": "36Ci3wqwApPmUrGLWideby414H1EuKwJATADpBoeShZQZtifhBkUEzwM12ZiqW5sE7FpC5LeSwyXHKBh8zw5eKbE",
  "key26": "5gVCdKEPpbBFhyVaUcQuwtnU54p8KZW7HoqtSbg5cadR9gUjYN3v22J9h5AuaDwUBBF3vYMBBGZG6t2h4zCZBCvz",
  "key27": "5Z7nHShLRr9qLJXwRqhNbpuTi4S13saZFFPGPN8edkxj3wb7S6RpRLrWFGsB9dmPXUq89zHRmEhZUr14qLEmf2ND",
  "key28": "65x8wVkx6XjqttvQiGLzfmVejiupMfbgbSdjQUzxipwdzBTeka2mmHbcxCabVa8D8uUdU29MXsbQBezapG3aJumh"
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
