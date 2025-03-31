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
    "4yMHB3PwNqjEMhR5fBfVCv9NyeWLvbyGNMEGB8HSv8z4MyG8cx3ajxSPcaZ6nkxYMFVXs9DE62Bp3Tz9QxqSfS4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSUd3TLdw4HL3vjAwdCyimeyiEQXxYjDAE4cJY6t8UeQkxmzCgPHPaCbqnWc8hNiFxTjggdRnViQG9E4YFzPs7C",
  "key1": "ngmfcrQeyhGekNAk8P9hLDJviD2FGQQS2UvmLDJLq8ahZV2EcQU7ya5qmD38SM7HhtzQx4v8DTfDwFcAdiN8Jv4",
  "key2": "3qUHduhqrATXiNymtKXaZgwNzGXh3rMa8Ti8vQ11ASe7vQZdjX5dDCgfeffComyeQkSKTq8vDUT16iwPfT3UTMUN",
  "key3": "4xR7xr5qiopz4NDvwA2Z1kW9U4zAGpRGN8BMSL3LaVQ4tf4R99QDpSg5mnPqkLXNBTPju3f6qhRjntPzg2QmX43w",
  "key4": "2J5DN5AAHyGhHhVLHfCeXvfaQZn8jReUcskLMTGBiLSw1LNBBWbMzW4s13DTsU6rk35tnEQhGsZ6aX23P9K1FSda",
  "key5": "4mpAbdQZnnPrZfFffoiQPMsjZ22wN68weNTFphq2bVrY5WEbAiqou8SMvMoMC2uD15JKEJMn6nP7gfM2YZPLDCyJ",
  "key6": "WwUSV1GZwcPM3WAGXNVpxQvrMZzmXavM7BSdV6oyjqAopm9qeQRGs2JKfKLeEmU2i2x7jh23QMhixzbFuVE1cVj",
  "key7": "4BMuWspRDTRcCfUymZ75QVicJd6K1xkT8w3jftcQRSX5WHYzb3g3yjVngdMbRqsN7znL8GYUigfYvBkC54hR87ME",
  "key8": "4Yni2e56LPv9mB6VtNygTbtRkgf2vSELe5qXfakkf63yqKriKcqgGr9K31Hbg6XTQoznWthNqGsvbs5qtNkpCF2F",
  "key9": "cJPThbtaUV5EMjU9BifJDEYdTWVN6eRt1MjSFv8RXH7DXVSpLeGHcUwwTKsBfQa8P8gLS9KyfmGTQTi4HPJ2BRe",
  "key10": "4sWXxJtiNtUf823gsjKAoXVEfBXzQjYYWggCxiQ4KqTswRriMJfmmbw5PMbsj6DK6FY9MVjs8hMmYis8dGgyMkkg",
  "key11": "gcmYbAasiJyi3reTtGyaMQpB3g5QzrYLL9qjZGw2Xi1CTsXdGqbBJqF6BMo6Gaenc2TQabeYDPVtgayzjKs9awa",
  "key12": "4w2N6chxvcGALUpKDKEjfuSXaZ2nrCiY2CNPq1NWZ8pch7YSpaaBFsGHuyDA6hfKso3X2PRhuAXDv1zNDBY6fypP",
  "key13": "493YYM7rcLEXunF3aejM1n2nT1uPJgviCt1tq4YD8aCCjnRZo1YnFEMcqg47MHMgYfeSxRoWfzFPVRNSPa632J42",
  "key14": "3fCfoqmNBW2T6dDq5SsmB2ZcTDmTQYfHqPiLvwJgxgHayt4P8NXSWJKKA5mCQ1Y7a63zhysPm7osDKuxEiRgfx8W",
  "key15": "4BybthuiT8LxhsAzU52TytEh2YRgdBjf8CeFA7Kswy8tpmc7pmDBy6kPSZjwHHUmdCwxuC4DCVUNS7n2S9i2VrVk",
  "key16": "3MYaSWtk3gX5yAKHJA3zVfxVyEtj9jrHtbGdLT6v73v6ZEfDpStUEq9iyThfAuQ4rby7BWUVVKYSTPWYR8Hibgbm",
  "key17": "5nxMrcHynFQc63fKynNsn2woNsWexhU3r1uDYQmpQ5eCuhZDqMj7Mk3Ka7HhUGeuSgexwsffYTCGsaD3KTtjXNua",
  "key18": "2nGD6EtmLdrZMkqgKp74xpVUpe9Hn6jPfxCBkP3fEQxLsAK1vykvp8Xia5Ks5VuB5T5PaEDqD5hZ7byDNfzZzFsN",
  "key19": "EcUB7pubbJgNwc3MnxdQd8FpsDxh3US5XaDAw53bdqnaZ1DVVyFeEUQB9ZbaV4CYgBwccqiomvtV8bYSvLbwXBo",
  "key20": "2DL3B4Ac7MrydMoGX6Kdq9Pupo8UoigNtt9stkgbR5VTSLYozmqGnvjGZn1EDLTXHSzBbbvMXUCdhvN5tBtiMzNn",
  "key21": "4quri9ud1y3fSW6Ai2u2WDpDfUi9osgX5HUwNSAbAKA2xdb8b2a7bKEDPQCPp62x57xf7eduk1huW51BnhsDnkyq",
  "key22": "ukYx1FPYmkUzbxY3Zg4UWnkBSUUCNmJitvCpBCzTnCUCv6zZmnQr1XSYRZTinTWXxcKVw8yyXp9CuS5hEqxEkjU",
  "key23": "62uq45Vzk1MekW2oWWRUuwyXziTRtgkJqdv3iHX4yb6WMfNYcd6QWdGraWJS5EBW9vHJSh1du3Tq1zF1d4AD8f5Z",
  "key24": "SVryYk32f3aCTjfZi5X5Rmv9hRYLuzDmd7PjXaZvVYEUNeoU4aN27XWBBuA85KJ9DUEWWu4kZUT6opbAoxyPLQ1",
  "key25": "3DH4QYeHu1hgYXpTPePTd3aGu3DZtLuxaNjWrxZmKNUv2QJ1uYy4aNyjGhEk7cgG1HZzLXAfJztPwSnq4uCvvAST",
  "key26": "5r2QXvpiKGWEexMjg1sPACo1JmnpDFYy4gJqEJPVd11T16qRCwrbgWv9Gu9Co25riw763h5U53noMrKkc1gyquBP"
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
