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
    "1g6it6zzyUEcUmPR42tbRSJ7uQsQYd3b3mak6djk8S86ogFXL5oNaNTH53vbJPrtR2oMxdxVqbXVKtnVFdduMQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqtcQoobY4nz5aZ6YvBbCTpuTEgriqYg1geGfjwYtFu6wRcE7TxHaw7L5yyJsKsrHfdLhLcEr8fHBFhRCJUTS93",
  "key1": "5HJNFw5hBs5QjxqNeEEdidZPGHXHeQxBCzeuCffLTErEqYDztyRqf8NREAY6j1jpFMBdwHNSb9E5XQPNS2txJZEa",
  "key2": "5JvZZAq8M6svTd7AmYHhB7P81uwox7rFDp7uUetydEmMecPa2GR4odsWHXZNsC8Nk9LptRbvevPwYosN5Psy3V3A",
  "key3": "4pnmae7RFRJoqRk5rKtC7PgDQXKb9jrmrUKGDMi9AoZttRAxNx5AQqNf7mY7sJpRtFuwiDXQxskBu5gnufzcQdiW",
  "key4": "3bVtGnShM9PtX2GVk9b1MXyqP9Eg5jPbjJMG5R4LSKx9449mzEipXcRDkAYNVcsohx3nDdaxd729AGGRH1JixtaN",
  "key5": "3qJh1h2xXQbgqK75skobxEyVaEcefdVQcgvQ277Sq6DgFdTc3N3L6C6eoiyP5sv3jngq9RPRDq9N8wufmtLisZ5z",
  "key6": "23e8CC2VuEVQinFpNtkR5rinBuNZK33YS8cSdCJ2aEizMLn7bJckzQ2Lk6oCh8RUmwrmZZNaxavcBNARdN5hrx8M",
  "key7": "4i1apdegU4b9bRJ7PLA4oiSB9Aw8d52WyyB8gLrfSRC3jk9R5ctHmsyGFjkidyysvAcgVYrJ3Ft2LXne6oqPgtyq",
  "key8": "2aNPSL7dGUE4RaG5dErB4UuAPobvMvC1QMfH8pjpthgXLoXfrQt8qCcXoyZaKLPBS8AikuoL7w8YsTXyuQnj4imz",
  "key9": "3BVb5TjN8x2gA7pc2FktFyNamNeMxtUMid7UKzSCoo3FyKkNj4Apr1jKRb3MaKg8RftHCqa6VYsVvAwxXPknYUG3",
  "key10": "2aEW8QfsceWnUr2eUopaog5kPjWHjuMgcf6NsffGQBp5aBJjXTNwYUT8jBGHJsvsyVXKYXp79PBKGdnVyPKBmtuZ",
  "key11": "45fyBEeFPWPiZtyGk97Cxp67AtSBVSRjRYowoPg9QqHY7Tedgdae7iXzhsnh5rVq4t6GHdPh1BJq4cANbeSkJ6cS",
  "key12": "37jQrjGPmDzUJEnUUuhUMXRRq6dcafhVTDKVxSKJ9SEYBDbuLDZ8p8XVmfLnqd9TPF5L7ESi3DafYs6FrQCGB8s3",
  "key13": "dpHNBdZdYjp8N4qYFzk1Dsm2MSi7q5pyxVZvY3L7TkA8CHYFZA3fYXJnVCozAHdEttjSkoDBXH6L1XCfgUE1Dk6",
  "key14": "4rrtCLGyrBRHb4cZdTBXKXoAq4WfK45S4oeCJ2adr3ZkBAz43pNbs2ymySrXnjKTfbdNntFx7MZjoTwtpU7Fovfm",
  "key15": "6gtmoyui7P2BHbEu6CMt33eVZrjMYe1Uf3t2tCYLwYBuHt4fLyUR9ThPJsiPNJN1TzwHzutU6g3aHucGBwUfYP7",
  "key16": "3X3zaesk8u6TY7XzxAupC3PnKHfHKvB7rYFHDmYVsPVWmKWeWiURPWjk99yC7vpiZxsEjCqrusvgwkcukXms3Xd9",
  "key17": "632aXYnNwQwk6txERopUELJQ3kFQxckhi1dgC3VR5eeYQb5NZon1NVCJHPUxuhGfur8GvJyTxEKWgptFS2JTqi6X",
  "key18": "8gxY7svXHvLfRZFn8GQGoa98286A85hCkTwnsqwBFvuQYjGtg9h4i9EMEoMoaZPZEK6MsKwPCARegvAb62ZtS7e",
  "key19": "3G3ZfBgfVj8cUd4gh3wkemfS8FjzKd44GX8YP1bHMm9kiTwRhkxr5WVg8c5YwGZpbu5te9No5ZoyrS1zYLRtSzLo",
  "key20": "4ztQpdAtNJr7z1Xj3xiFwfXEVs55EN5SANxPs8L5SB7dFfTJWs2BqZfKjK22EMqZ7aKZ1euLCbGPNV6zKZ2StYR2",
  "key21": "8jV3VRwm3HLHfQzx3sscZ1TW7mGHhbVhpoQp6Dt1RiHYYgxX3nJN3PFj1sU5gJn5pfDUv5vDxE2owMD54ZRfpZo",
  "key22": "4HQERNtngxSTikJjBGbNkYsCcETsESsT1o5sN5hssjzjKqDUVyFopYpsfnABaJkrXYkHWoPWrn94dz1zd6YorjBk",
  "key23": "a3j3fYMyjovjiMUwHm1kTHMhPyUMmQqxNePnSqDBN62pj1dSf5EnEMJDYrCSbmCQG9s3CmiM8qefMDHDtcLVd1o",
  "key24": "2SjS5XNxGdeEeGzAZhDwwfjHDijjsxCjuE17swTj8Vfnmt5RJjdd9gHkypZr2owUjuVxxd1rmiiPWScMJqVZQmxt",
  "key25": "2pMAyrsxdzK5rNKeiWvmVFw5DThYCkh49fGKBDstZm5q72Z85MSAra2LG344nJzGmDs8VgWAMgToMCCc9W6qmgVH",
  "key26": "65ZSP5qcz9ypuLJzeyEtW23TD8HhLZfD8gW2YFacTB7E6dhW8WBU93GkYx4nNkhPexSYghtxdB57DyeBmSBrV9T2",
  "key27": "2tBWRFcRQ4sXPvULZ8Bt9cxEo2aJ3Yb5NUK3dd14CghGC6ibRTYWCvkB25dBJzTDhJkyzBnS5doqUF1i87bRSFMe",
  "key28": "46C6ApHtVczneP68nnJ9Rd9EJccsefa2X7CazR5G5e49TVqYjxkBeraCyQm8gbFGE1B77Mr9H9XSnu8Ui97fL323",
  "key29": "5XwQdQEFJp6hTVHb4M88LfnfSg9T5fP78ruZPavN3CHLxiAXvu3XGgDALAgZ7jhgwYQPXbB3gmBzS1RPckZ94b3k",
  "key30": "221NWUXoK1BgTsjwHmowGHmzKW6qrUWfaXG58HRWcPjXzREpVRJMEZV4dwJn1iMNm1mCt5FpEsedrPx1pymzxbrZ",
  "key31": "26bq9zXP4KZnAv85HwmEkbdekJk8UFPrtQfQHoGJt1wfEC7gePmcBo3FbmrsdhePshXKYa2WWdCM628eNn5sukW1",
  "key32": "2Uxk8PLEj7PwTfkQxdGKQxw79ut5ETGUQpMbruHqRSV9StdiUeHLRDLrj1bB8JtMw7zFjPLqSnJNHffuRbTdHPxe",
  "key33": "2e61myaWfZAHTMJr8tg9vY5d4FEV1WSxpVxYUNeNdhZJaYGAMgZczVbZJV2QbBpKTqwgvFvoShWq2wnoy6YskfTQ",
  "key34": "55LgJ6CBYvoG2FakcbtB88eAvTMnBkLFWNsTWas44odg2KaSe1Wnb8VT2AVdUFoTZiBNYuu87EuFkacGM3dGPFJu",
  "key35": "5VPsARtvzHVdAfnDszJgFddor4dpRPqQK1uLnqVoAqZw1ZoMMA9pSMGyMwj6nicGRXXJRpPCgckYQNM9hypmUPEr"
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
