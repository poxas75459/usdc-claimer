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
    "4p65j9bYipd6k3B64oFR3mW5i9ZNafe5DN2eZnH6hbH5V6axSqj9mXfGH21RhpxEgHfr7TUc37gyBpbnuC228DYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXvbqnj73hWENgUfknDDgDohYJK2YhD39WvSmdUmH2mPAQ9dodZGa51HhUGGDWdmQGzfgK6GuDdfq1YdxdUoSJU",
  "key1": "ma8SFuVuhTbjv1pkrt9ZcxAHYFhXnjf3UZp7wfDBbcEZrQh1Qkea31hjL8bZqe9jhvybvKS6cSYJEqVmP95gMrc",
  "key2": "3TS5LuS2htzNfbsmehPG3eMe1KDQ9FL9KyWjLpAtJaLcwoPQUJ4GSq4S6AHrA7TfC5kwZ9kUTZvR7Nzz77CzAxTM",
  "key3": "41fv6ZZYSw7f1yHiBDySDDHT2JAg85czQwwkhh6dokvXJ4pin7fKfkFh5R2ZfXmJV56zQSSKUrvYfJM35KWt1RRs",
  "key4": "3bjRbRX8V1YNtKT6wKTM3jFZtjUmRBYXEJCYP5HWMMK1weuC15a9KCGiP3bBKB93eweJgX2i3xqcWZb2E6H5ziUh",
  "key5": "4hw3TebJK43dacm5BmLDhrgzY1kvivEcqRHbQoNUwS59gvBpvmFdQVM7mvPmLoPEdQdbVaqieUFFR6VX6RbssVrW",
  "key6": "3iuZzhvjTN8H3DiHEGd7hTAp4MrcTXpAifZbTXjjUJhfWzjL1J1gWr6PipmbkbyTr5edLoEnyFPaqAP8hwHKGo9A",
  "key7": "5EPECfw5LNLRT3R7sAemubDxquw1UvCihFTwchqdmGmDBgvL2ouv6XHfNrbSrXaN3qJfkyqGoCAPRPTK5MiK57RN",
  "key8": "2bdyWbWBoznNQtTQWWv57nQffsYctupuMooXiWNjC7piFfXHSoZxJANqQSio8c43zt3hq4ycTLqbnmHxpqPNb9w5",
  "key9": "49N2e6j3uJe2HyUaLrgLeeiyZdxtVociDJg9vfrcqQbWQbZxcy6MNkEj5NFUijzZHpmAuw9cyXsbppoXLmttq5Bk",
  "key10": "2DK3YJCeH1htzFpfzQh2wfr3DgbRKUjGuBhPs5kasYYKDyikQ1jzFXqKCjsFNgX8ykXqrkSajzquK7F4EuU3ZUad",
  "key11": "4QPC1ShLPigEBGKnE295A3EVYSK3FPzBieZeenXE1mcoS8TEBRCAHPL1cGJ3FMrJzjdNBxfTBejr7NTxstSpgk9Q",
  "key12": "N71SEeZ1BKEyP8MWE279WrRKjRSHc86yUJEjoKuSnzTUJe9rVVWKCwsSUtQWyAXSjUwh6BJpwSXx6odr6y9fgvj",
  "key13": "5RBAVf3ZURohAhKbN8QSfds55KCH2icoBAmFE232pYiSSDgjpeU7o3vBEiCMw74ykgoqURYTuywPRuMvbq1AehdS",
  "key14": "YgXF6nrbgdZyMkHYQvXtWJwxh64Kc7BYVWdQVDsQqjBL7ywXxPVALwibVZHjmzrHGV7jy7eGqJc5UQYSst7kdu6",
  "key15": "59L2Xv7TRVrvsmDLZ9GYBCp6M6kmq87ts41AWE7fzV6Tekr7TDuetLoYDkzrZV96nUyAg3PVTEPkL2wnRfedX5KR",
  "key16": "2GZgphq2uhir18j3he9CgZMZrbjESj1HgFFAJ87rFyLS9KyibR3hfF6K7W7MZQhNESSR2YcL2ZMnzPXSqRJb4QkD",
  "key17": "42u24H825sq2vf7qzr84qp2ANeYoxgNGYVL5RRPXubegyaio9dbrmmpvSG7efbjfy7NsMmEj7WLXBF3777reSLvu",
  "key18": "5YdrWf7KLz9xKftMu7vdccWAHSTCp6SECtJPVgvLRrZLYKTYqBo5FHRCz4GjF6GxKzrjAGzUAsEy6UdFrxXZVyie",
  "key19": "5cbfhPLMtb2ih7duhFFSNs4bp3TKUCrkmLQ2fkmid3BWz1J2T3u2JqmYqTNyzZraTciJhmekKNGsm5LssP7WwZus",
  "key20": "4D9MHZ4AXy2dWeqaqC6QgSDmw4dC9Jy9KPSMZcmw6PNA73Gr7B4MJvvGAdxFGpsiXdLCQVQnFdxv46n669H4MfCQ",
  "key21": "4zSvMuFTUhixa8zktvaZB6QY8x3NP713YfzWp91GupPsgotSQnYGkPazSyBbBULKJCWebkJiqLwrVZcL92MiJCYf",
  "key22": "P4oiGiVANt2W3JecwEnYa1ZhaBjs755tJcEn72S81DpitVPi3C22gPSpWExAamqeg8jxdqPBYLqb7hTRjjSggdF",
  "key23": "632P2gYao13qtY2T6E193jjmPnJCiJHvREYzTPwoXbFWYB5H9ZGKJJ3KTKFLX4HNGN4uVa2QCaMJ5cxNyhrKrYkc",
  "key24": "3EjBM74AewfJ7E1x2sG74KDyYEpwB7pKiDd3nT8HRPpppjDEAhxkq2BDF466FeDNP8T3fHTC2nfcAkd23WRLkex8",
  "key25": "4MY2f3nZngBmAgwSzpeaG9f9nC4RRAAdMkuMpV6dZgYpCgL6Pxub3t77K2LdrXHz6uVDJvV1wpCuXh8KNqTKJdBf"
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
