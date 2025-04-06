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
    "5wAQWbDXRZXNHnJNqGH4tqJsC2V8AUxi5EGetki6ptZ8UpwZVRKdQdCqAW7sGiSSvextwJeS6EvcX6nWc5J6Uc9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPqcMJpDgbZYz7VDCFvbsZW8CZySMBkpvrCdn6oXi5mxMZk1U9KbXpGTGpRGasSRhCUj6AeeeCfrj6HJBj1uT7T",
  "key1": "4WPBiY9ynx4ULDPUaX6AxixcjHyQMK1rJuMBq85K7rAKs6XGAZ8QUC8yvfQWjmEzhoTyz1Q28ZcjgwTvYQBr4vVd",
  "key2": "tAZ2pnbugJ2PbXhcf8ygtvUUjxg5pHJH3Pi66BYwR3r83x8nRJKFmW6t3rqM9krsF9pNGLrNgs7uwxGVciXXVsh",
  "key3": "KcGFmHtuSx72qwghov6PoFP5F5xEwVRGH8ZWtpJdX9ggxTGmniMVR5HnUsbtdqY96SpKjrAJYjLwFSMvnFEs6Fn",
  "key4": "1nbPvQhhFXDRVBkEHNrKLNY9wxeAN9dTMK4rsV3fy3JwzaPnqJKL4x2eoJAiBaLtc8yDx8Z4PLXtr42Mu2yzhtx",
  "key5": "RfFoQRpU6j4zBG9JJhp3BHhtH949cmzHwTswqBx94FTBvfy2KZCAmwQr2Af7xJxBBoY4SMu7j9z8B1BwhmdzzgN",
  "key6": "27Vap4ivwDNMZzsrStdJypC1We7afsjq7djaPkiGZgmM62H8jJcVATJUjMBsfu2ifattyYqEKwwArGDUCcKPpGNX",
  "key7": "5F2Lnx54kau9VP2dKe3WRLMzAH1PpaeixxzDw2ap6iNcZqg6oBnWYkUQP4XRRznSbFCWgKogQft4CGdRZdxX23MP",
  "key8": "4tZeHbz7JbLByPWEdzN4BoGa1TMqxBf4cPSR6HZvqPVenANTCPGaPXo1Vzr1oWoZ76vpfvM1DMP9yUqieQLDKB1f",
  "key9": "2eHehD9jPBZGdmy5Fxq1fsgNkYXXEprJekEcqd3siKVhwzeh8TGvsoTnidYMfA1MVbtKc9X552JtE7aHfRJuxNxX",
  "key10": "3jE97XC6yBSGMtdsKtHR8sVnKpBWwNuAoVWwUVVXADmd1m68GaTh8jLhUs5cx96PMURWf1rdY6Zg7XDye3CjPHY5",
  "key11": "4KTMNK9GvtkJ7wax6eHXcS6by8oBeJ12XmLXin6ASKQEsWkyyWMwFZKAStjazL3PoigYPdwCRjbQotjJySWygjdn",
  "key12": "3jYWS3ixaoyiu8cAgeqWEy7qDyFAZVuGZAX1xbQdQSm7X8erooaiviH8LTXGz14yCgct6er6k7d93h8muzzrAXLx",
  "key13": "2T4Pi6aVK2wSNm4watd9ULbd26a8pbg5FG6JfQ2dpNsjEhM1K4AusEKM7NpPYtEB3miikCZERMBs4gLnV4KHeBaN",
  "key14": "2Hy4769CiEvQz9fULyGBGYgeFBTGH54rgKsWy6gtFLURcCd7nuPgWNNMyf5koJuyr25KLtGy4CecSst9etM9GvBP",
  "key15": "5rh6fd9uXsZVuyBEBpoQpMz9ECmxDABEd1jwHzH3uBb3M7YbsspRbFEKq4Bmr6eVLVrhN1Y7QNYNQ64BzQQPpVfW",
  "key16": "UUZGupCBEnJ4mu3EQovzHFpNMh61RykwhmMNZ5LgNFyuyiJugaBENS9nVg2YH5cb8F8Emf96WXE8S9ZBduNedCf",
  "key17": "GHgsY7N8WfeEujvVq8TsLNkkQW2joRStU6ry5NtxWjZLeiZGRtfErJBxCvnKqVVeKhTavqX3os44RCApHmKqbwf",
  "key18": "3t8ij73vda4ET6CtDnPkYpYL9SbvYCtrPewgcVV9ZYo5TFyECDd4AF4EBA3EMBUSsHnHA8coXKPdRcYHdsmmKuLW",
  "key19": "s6yz6GEBjDyHZqMdoQt8n1q8GrWRKReVEAu8wkXE7iBaTUdHPAxqmYhPcuRDWfKgpX4rLShNgWLH8K3hbqRN7s8",
  "key20": "wZGLRqoXFN8oCohsXGmbaVhog7Nj6mhoYhg4uKizDRjiCJPpxE9D3AKz67DJ4vJVkj8LUoSCcZ67nDjguQYKWfu",
  "key21": "55crNNuj3ha1FqmP42q62x3EGJFVK3ho6qaPJLTkkUFhhnhfqwuv1wtneoAvM6CkaepAzQZogHixpRrrxjSFpCBs",
  "key22": "rmwNEB226XEYS5xaVqZJ1aKrMtBXX6BYQQ8K468nTM5Q9ryJWo8oEB5B2nLK4HsJX4ZC28nHwZNbCXt7bV2tN8n",
  "key23": "3SbTGGae6PLaUSSSZcJV9D7V6u2D9Q69ziWGTDEDVinxiypWqqPNFLkAfNkQqLsWtqDBPatHr1UtYj7EjrgFCjfh",
  "key24": "2fG1LRshMtPRcFgsGZTFxDEccXo4G1EQPpasrReCPGpYjBWGc9CefZP2kdiHaz24XsQgFZHbMZFtubVscFzMh1oi",
  "key25": "5qP61Km3jLLmDL6JKDjGzRHRSjpouA2N9TBoH9hWXtRJCYgx6jwU3xJeN31SVFk48kh7FXNwQEWwr5M6JmAdNaP5",
  "key26": "4GhvB51CcwsquTnUN77EQRswRU5uL6exeXjwu7vAfMVhg128jSigrfoMjXAJZtSBVjaTcK9tihzSXGWYp4XfgbRT",
  "key27": "62EWUDybRtJ8hBzWxGCmABgDx7hB3Pz7pc8BphP8e9eveJ4s7VxJbRztcBUeG1WYpKrqHjN2xTMSW76bA1RAXfM6",
  "key28": "TMrhB1Ev7MXPJKDJdivwixEs9xHyJ8Xr4Aww3iCAvQBzBuCLP9jMHn2j5SyvcXWtpk9aYPLE6qjYShEodx2WFG9",
  "key29": "5e6WuUTD7QTYyPCaHWWoM3dr7Y8ZGUDgcBqbUACzA1yZEcfsgWgfaiqaagT4WsGf8oyNFjcgvwTf4nNNgy23hQYg",
  "key30": "3RnS8Ze6LDPDqBx3oVEbfrcmhUxcqfZzBqRrrSRicG334RtoaNJSPC31nCf83knLjXtHaq2kz4qvjhXG3fSjpzuW",
  "key31": "vZUXmoSMnB7y71tL8gsnrpCRWGpVodJXFY1MCixAcAvKkWQTHjkczcmr54d2TKpQN9zhvBNTW7jnyS6dg9iamgL",
  "key32": "3ymi6GipdbuWSouXYb7NfgB5G7zXsTd4w1xciKRKaEGxHuKA6DjcRgJzoLMF71G9hwRxpGdpYU7z957RERQUPScF"
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
