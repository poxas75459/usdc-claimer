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
    "2tzzQzjG3igEmErvkhxdXwsBjCVGtqRbn5ybgCtKtWDFLSgGqtLGUAeLCTSiJuiXkHKMNbAXUHSGtdm6cWgim8Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DD196yey4iunYwikCK3psPkWmKZ5aeKM2VptUZeSSZHuVe8ddvpYmEj8iZ5LCvzaACFVR53zQgca3MWAEVN64q",
  "key1": "p87QucegArY7FcF797hgDbfxVvwdUwDGQ83k69qeaBAvc3qeW1mzneiP3LCvhjJ7tJeK9S5JoNQgrW56V4s36Dp",
  "key2": "5v3Zppfoc4xHMh3YWg4QpqcR7rkV5HqnFuC4u5sh9hbjczGCzEqJhWedD8CMJqr3aaqZfsEVdQpmJ13rRib41oq3",
  "key3": "3ddwU2AmuA7zvP9W2jUPjc43SENg2mnVs2ShvAeLZ4t1yYcsZLPqweqtUPFDTLFyaXpAs5LtQaPMTp2YYPf3tJ86",
  "key4": "511vFYbpJ4jjK6RyV3Xfd6LcNHC9pT3XWAQh9xy9cbgHCQ6qCT9yeXbW27WuoimYe7gKKyFBPDzky64WyP8bhyn6",
  "key5": "5iUYEoSyL7YE4fupA8if1tbDBc4oZDAwzk4v8GdYFe1voFk8CbV3HfYfVhfPCzj3oPT96NDo6qgfkY5XjRc32tDj",
  "key6": "5HgdEr9C5QMnGSi4wiE1QbhXLpHzU3kD778Nryjxt19GWNzHsvFhtsBKwJPXACFP68xa743aUC2gkc4a5VVeHi8A",
  "key7": "2to7GEgpi4s2J7Z2VgP9zhagd7XjX6jJ8LjRVUReEkg8A8NdgWeqsG669QEH6k88VFQTg29QKYGZruyNzrqLgHKV",
  "key8": "4z54H5kTEjivPCz2KgM69DSUmWztCMT8wRrkec58npiw2y3DodwUc4guFSiC4MVUaJaA7JmoTXBN6EdqLNLeCnrR",
  "key9": "2gFYxDCGpQst1ZZWmaf5mPz7uB4pxLJAF6WJz8jMLVNJqEJcrGA3AV5cc5smD7bTc3TDRr1xZLtF6LosJkdGiGCy",
  "key10": "6ngzrjasmx4uXaLKktMKV6nncMVFS9vQ13wb1Gcs69M7NYygxF8tsXBNAm3KPHNPxvPMbXGQ6WMhqvF8uQ2SQRi",
  "key11": "3RQugfCt7inDmF61t7ir6dhnaiTrTE4n6FRPrM9WoQ9tX5nNYPzJSL2pwa8E5g5hb3nXrQP1ykxNgCcc5JnN9TCp",
  "key12": "3mjVB8SrG4uC3Ws1ppZC1wtKCf2RD2fRFo2soT6GeuXRqjUifeMPc78nE6eZhTcRuddcQaQb6VxrE9EHTyRhzkqR",
  "key13": "5TvzrJvV2dyUUZsk6BPZf6HDSkkGDA2wm2dr8EU963VMFf9Ascky3p68K5RBoVY7Xc14ViNp6vz9fAH6Y3ryU699",
  "key14": "4b6Ua6YbD6UEPsed2xX19SVThYodCgQa9Adqw2i4D1ZkmAksR4nc6BatTH3gjyCub92YGAEu3gMdCcWSimEj4GEk",
  "key15": "5hDBoKqdWxXgy7BAMrv4uzohvYbywwXpjaBXVJjQjbBqXbvT9jDgYgqMxExeeef7mNEjo97EyXzpyfSr5au7few3",
  "key16": "pKWE38GHySQMJ98rPQUHdQjup3M2gh9Z59BjYJ6YJwvq5WosjW83Xeqw9fTezj8mu1znukg92b85Hkj7HLRhc3Z",
  "key17": "3JZercWjFGDcdWn5VsD4GYw1AyZCQBN5vmAtMeZceMxAjTZrNso6vCeTMSRT9nQ77DomDVWe1H4nQrdUx7npSktM",
  "key18": "2eAAAfsJPf5Lc2CavHsRXFkrzYTEs24rWvzWsggAe5oAtYuMaLGaPZHdQBYLTLuC294mcCKT73TWQ55JYPvnSa2A",
  "key19": "33ETQGz6dij6PDMQ3Y5Mdcx1LYfwbmFp7DQwqUjivA19CWLiGCp136C2u4b2Pik1tG5kP2X8tUMJHVL9SPPxz9kM",
  "key20": "3nXfB7gSxr7MsrnvaGHnGWYfBRP4ae9CiBPusEUzpfrcqf4D9WoAGpHWqvE9prmiURPBk6QQUNRj21vUkpA3TYCV",
  "key21": "5d88KKGYT64sGVHh8XFYmmRMEnP5a8474DT5tVMmLUdyP55iQW3MJQ1emSGjFpXck9c11BXShRTWVNDXCWxSyD7E",
  "key22": "3gx7ckbiq7xeC6fG3qvZ9ww1AMNVNNf6zvstMXDFrr7sbXw95jd9p2qfDeHsu2oeng1bpDU9QmKB1e6PP7hjkiZw",
  "key23": "22Zyj7s46ter9SbtEFdwXoPCeTwsK4uWRSBd2BtMrTLcEY46hAvbG3QVb5SsGkzyqGQNQH2CvVnjY3KE3CDU4Liv",
  "key24": "JrjWXHotmPwcy7iFrbFqapVhDi95nYzLz3tH6icyZFzFibzTsTRsgPX4Bobq2Lpp8YEUja49Y74USbV2CCHzYcm",
  "key25": "4ZokBYsgDXobZcsxWa7R6A8Z8MJQMmVB5mRshe3fZ75TToUaZE8xcQwAUstAN8KBURg3cAurk4nCU8SbANNvcGKu",
  "key26": "2NFYrmrv75HoqU85HZp3o2qTCQgoq9CKSrf8VXBrAiFZ1ahDsowBhKDM6bcetF7TPpP4wWYwSUHeePMMHqAZCG6V",
  "key27": "652sXa4CyrJPeum8sDr1heboHEEJ9R3BmUB7Q8HMWRkh8R36BsC5tQ4RS4xS27PqPpc4JxyV35HGJamQUKCXvew3",
  "key28": "4JfVdqNwDWG8SQ1oN3chGeyrmhZtQ2qN9rN4AvM4tJSN3GSBB8mkEnAgBEcZnXPMvjJrqWAZ5jDsE1qTWHabQjF8",
  "key29": "34iwCQFon1YaFCToG7jwK5NRfYc3QPuo9ukXrhb6EApUczE2iEZ38rtXZqTn1NL4xqKwbmEaE5oxje1gpPaJc2DG",
  "key30": "ZsDHxn4kgLaAyjH9wySARCTiqvLgGALtiz89G5c1JjWRDCn6kh2vsvsw3XezZWkaPnXnkYFBTU6UqBxEKE2kyA9"
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
