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
    "3HUdAeh64rK6QXkAemYpRbKPK9TF98ptMP95xS1CaMqGPNa76gH4Z2JSeYZ38wUornTTwEUrWU3b6hUUKZsifct2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4Xt6jr7zBebnA64vCM84gnvuJmikhQo7SHXqZFAt5rjdPDkNFAMNczkPyGqraN65ABbUpaCAw6cufbDDu1Uehb",
  "key1": "2JL2g9EF9YQTLTRLTt3LvyNLSJTXXZjWB3UejiicXvVjYdyUbieqEfV4Gmr51p8CfmBhYSzuG4DfmatBBB7jUNoZ",
  "key2": "2axHmf86wqs5QX9F8WMGFSLjAm5QXcWom8qn7ysbEQkneLCJG8PfyGofWM3UnS2JHYpdpZxne98jZqKttw7FMd4y",
  "key3": "4cokX8oHvGhUa1eYU6yhsNffbfkHnwCYfTYFRxLHnjX28GzMZftfLaRbU5YoWwJr1Z6P3q9ABgQeBjH8sbNgpq3C",
  "key4": "3U4EDqHhZjB9XDeyZiWUhwGoyycVAv65nYqQXwJrdcAqj2ov89TkfNr6WcYiDXTcG66f5vFASsPo2f7HBL5oaXA1",
  "key5": "5wAs3PJQFFQPj3rwouhStfCtEmL83Ux6Aid661rMXoLJ9g6UMb2VSurA7qjm1C7T1x8VcS36NdrzrZFyC3cEYEPT",
  "key6": "2V6xNR2Ldg7oAmjokfjfCjn74kMQGiveAsdwsbcUGNJBypdp4VD19robTYVSS6DtKKMBmjx2sgmULYrDftnMSJTk",
  "key7": "4ib6ZeatKZnEoKX8YkD9gNy9Mvtd2rLURZ9FdpDfnmCVxYCUtq6FHrYWaPeBucxfNFEfRyhKCH4oNACF31B9doiP",
  "key8": "sBfuRKqAcRxPiHaaUP3HgVMfnD3rmTZBkyZXsT3FLAWAVgRiPXwUQdJanxF8EUkLGwa2ftVyUc4yZWVc7UW6Srz",
  "key9": "4XZWaT2mFWKZn23PRSSSKyRsnuhBUNQxepybnwadRC2TytxCzBqNbwDi7GR7ZVUKwuDPgure2rrWz7NBRBgxHnmH",
  "key10": "4e1xrbMY8hGAxCRdnAZEoWgDVJZxSQ9p3CNkFvg8TrHxagfWLoeaThYyDEkS5S4Eh43NgjCacRCXEfyhxRKVYkyi",
  "key11": "3bLHA41d13kXGjxNiW9hhA9bcjrBnRkx8FkeqB5Vr4bFAEV5bnntMvsBNctSJELbTtaQ6uEu2E2eeSjxhfBWrWvY",
  "key12": "3JjzTEN4XXqk4dN5Vu56hwz12aQSwEkDUtDVZbpsXKffVUQ1F4f3t2MaETaQGS3VpQ5SnjmY2uZoLkFo41XAu6oj",
  "key13": "2QtGSPgzCY9RWr37DHUoQB4sG2tvRweULeP3zbwcGSZqoJ2WuGCEuzUmqcMWurbuKebiYpufKAEuX1Lh3Hxf8VgL",
  "key14": "3hHJV42iW2gwxnVsGrcC23LkR3adPcbq2ceCebfgFXKYqmgUxChzZ77uEPP9Ym3REhibm4n5h3f449g4dZCU5nT7",
  "key15": "5KqrcHfD9ZvVJEY9VcnSxsNBDTFatZXwNujvYVy5aVKRXggZsbytRoJdrbwdZahFe15mDeypWPVRy8tR4GhNtRLK",
  "key16": "5nacqMNpWM8NisTNZsHqsu6gV2yFAnVByAMC6WySmbLjNqFxVZXKP8xB7vdt1cckfHt3jQjVz1rjHk75pQ8qxfKx",
  "key17": "61Ex6THN32TAqwgTrZBB2jdo9Sw1vrDBj5L82QKnHjUgwbXFTz6CBw3TQTjoTeZZqC2uePp1gD1PFfN6M2FH2gAz",
  "key18": "5K2YjM7asjszZ2C16ayyR91ZKN4JWgbSmGFavezTfXMg9NRSnu56oS9Nkc2XMerByNzsRyEz2h818YZbbfAhfNs3",
  "key19": "4atFsik5eUxStNnsTKt64AHp5gYEoWpkxP8H297KCk8aVjz8UcARiAksKWwAR7J3dprerLT1NyEA3zGxA3LNYq4k",
  "key20": "4DGAR7EHnwjX45dAdQUB7nKLT3jeFVJchx8w7ojhA5vZpgCeGu4r8dC1VR4MXt2oRKkDzZVVHpn8L9Rp2y7T6tDn",
  "key21": "5wVBAVzGhykwEpFUJU2VSbKQnwHUamPe42NxLyES6pqsUDprvKJVKeWw7a451ZRstvbRzimLSg4MQvQ8bPzB5cUj",
  "key22": "3GW5J12XYeU9tWqfdGt3ipaqnYaEjLnU5hXknngGT7J2inWAyVW8CzaSMxna7WNkST73X5pYBapvxNeGATaTkd3h",
  "key23": "3dLYb1ggUkx8fgA6a5FiWN6mRdnqkScrHz4UNGKHLa8Xebh599TwjQqBSkKnpK8YMuLZiX3aTFAag3QDh6B96zib",
  "key24": "4stVzp5TF73SkeqBdiFcApzuyCL3HP9mxNajdg3RXF6WE5jbswcjxF3SxQn4GBmVpeBsF5ecCT9kUpU5f4fct4i8",
  "key25": "3pUjUJg1hdtRisYGVNj9d6xXhH5wXScrEmznAfSrEE3Vzm6HjU8gAFJbS71PhBKECwEKTrSCrRa4n9rk1dYDNU4S",
  "key26": "2djbo4PuiCaBUg9TaTamiytCQLWKSqKpJfVZRrcxq47fWEtVhTvkTaRQHDfhRpgnNDCkc9qZVUNe5zwy6A1QnGj5",
  "key27": "231n18xLNisRPaiFbkPHAjt6HwL2QHLjnH74jgG6QDLFUCygXzyNrjrPNgGsBraW2Miv7f4s3rj7EWkLrrMhVNoE",
  "key28": "4MHmzhZ5rPhAiGFPB2Xe2DBcHVp2JYt1hpz6mfjt4Yi7hG9GCgUTDzK2RSQwsCKpk4oCAVHKRW6LnNUjHRA64X3c",
  "key29": "348xsWkAkhpBkKTEdcfFnCVY5WrMMkSLpUfaRqGpZPwL8PWthcVFJXHBW45WKtCuMb3nYjYf1zD8fUDHWCduxK2w",
  "key30": "5TjEmBht3z5CuLZ18WHDV8fvsREcZxqAU9UWh274esSckgChenHXLP8Vc2zyYqDRtxyHQUAQ7Bq39utHxmSJFC3x"
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
