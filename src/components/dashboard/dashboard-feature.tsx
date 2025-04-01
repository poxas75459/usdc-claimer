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
    "gZmjKhXUhJJJZoVKK7tZoq2g1frELCZnGK9KYKsxumSoMqc33kbwcQN1YBWHYHCRELvFjpB7mVoJJYUjoSf8zvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fvge3ao5XpT64BoBfzEq2mmbnjyhMSdZ4pDrAo5WvD7PrvPKzeWbbJA4kbWt4SME1AxwzdBAq5bjuWW5DLXKtsz",
  "key1": "65oGMYT3NVatumS8h2TfsppafmNRdZBCkkw7DdTRaU9EtvDWYLaRnsALM9u8JdBazESs5zVDNG1JyCKm7C4wEQ1G",
  "key2": "4kWg5wdDhJx2zfWWbdEJQay8uxdMS4KmrZuWWZoQ4L52hU3fKXdKHztRDqpcVA2nTpapwaFHedxpz2nA8j5MUcbQ",
  "key3": "4JGY78a1UnK7gsiciF6A4E38xJWtbz11XFbfWvszB19qYCMggV7Uf4yLGabP1dSW3AMRRUgswy4716kYeuWxSQUy",
  "key4": "4Vt49YqnU76giwgHkX1ytfVXxzqxLwUiE42rnUPbKb9LXGkvo1evyqSb97ft2MsXJuyAwstY5BJ1df7ijpAGBfiZ",
  "key5": "2jpbvfur5E7aAk63dXqtEFdHJB9mL4pKBTMjwB5weA14LNMbG3fFHp4c7wX6PPCQ9pH5PWDwnAcydVzhfHL2EN6q",
  "key6": "pxpvqmbTJmDQyDh1k22ZC3K8n9erZPMKjmW1Rp91SjohTScRydpYsAMS9VSK895dPgPv3zYhuzFuRn95QCovSW8",
  "key7": "2rCgp5BdrEGKmQmuuE8xvmSXbSTnPNoad254K9bLHq6reHxozZRazA5ao8GvUKhJTekpgyvLRynDxH4yMtkqBVX9",
  "key8": "3MPUKK2AJ8LCJx9XTZmv5mABSMz46hrgm9jpX2eyLcTEnqM9svQgqyspsUScEvSmZJgxrb353hmwia81pPZE8w48",
  "key9": "6848Z1h9hhEm7fiop8CE9EoqWsXDtKFU4WjaY42Y7XUXsigbEMXHi38KDZAdZ16DbzHwzf26Q9Tv5vhepY7LoF7",
  "key10": "37qzYXWaL9na2LkMWe9PbS927TY6RWQFT4BzRsXGahyUrdkHo1uGQKs9mX2mkqyC2Xrke7gccbfuiVSrHBjagyus",
  "key11": "2x2RA42z5bzTvcQBHGXtuvKborFsHbB9bTvD1KvPRHsEaJ1feRzc6KGYuyPASdXXdW1867sCEkWVFhS9MPW3grqM",
  "key12": "4D8AkfRyYYAHHbaWzZutEXE7VNSFzYdLdSL1QSPzST6JXUrt6Sh7D2tyd6xPi7eeWXKbEkE2cRgMB65TzzqNJn3P",
  "key13": "4BDTdiEBdPW1fpXxz2Z7h75MkrJarXwD2D5t6vQg1yc8iRCJDJXBYMykTX6QEFWeFBAEfjT1kidQREZEsfhWd5Hy",
  "key14": "D1PFmqGjW3RUzhUWtJz5woBtzBdf9GS9EPF4anLw2zZB1TFeJmJC65aq9s41DcQdvQ3TnBBqRWuLfLuX89gGRzT",
  "key15": "4C7CaKxfhGti9FSb4W81LnY7GNmWAUr9uK8HcWD3SW8xZqLNDEmHozVmp6TW1sDcXdrir6yqWSQsrZi263MfU7uC",
  "key16": "5yirfZyuDed3BLcP1apaTU2iksScn8W3rMGEvssXEA2VkLNyrsKzj5ozuJUuA9S5cuHEnWtR77BsssLouRhBZo1y",
  "key17": "5ynG443tv5ma1AREx8xpamNEeEYZAtD4BdZLfTLVvp2r6AdRpAeU9GZ9ss3c2rPYPQY3P1t4GAqWzU76Yo9JR7eK",
  "key18": "VhAH1cEm1HHbHtXq2Y5aYHeF5nkgnL8pAafCCd5nMgLkpJQa58fv66yWMj3Sk6xpFtLnvHeYAF98zhb3ydTJL1r",
  "key19": "ax5VtZD5uvwfWNxNxfnfmqeBJDfbeT34gGoAxwXjgsVEANbkAnNoBibBZ8X9N4H347yVQGjCuAs6sE9Ys4cbscN",
  "key20": "4YfHETjD3RW58ZvycgTSntjzsrbkcMtvgYR47XzsURLiMhZnqCEWL4yLDRyzsE5o6DdmQqPeFHiqD5f8nfQUYTee",
  "key21": "tDHiJaj4MiKDffNqgEtd1rUD2J7eLE9CKjXUrHEMdwCbzEgdpmmt44CCWeMQ3FyfTSskkZVRX9y8exLP7Av2Xq8",
  "key22": "3pDTt4CytzBSmgqK5WSzvF2xFzaBaZY4PCQsfZGY2xP6Mi5BsYaqfmCtfDzduyow697APbgpqchtLNMY2KpoLfpr",
  "key23": "4JSgHEa39CpnmjNogBUx1GfNsFG6D9jwBf78vGNA1wZq2Z4MuW5R2XA3GrbUDHCNVYxPUGwL1bCHbStStjPGfxZe",
  "key24": "27NRmB2RstjhF4E1zjobf759LnwmsFXs39ME2xdXnvuFfsDuW81Ky2YpPQ1tRkJthFhNeTnbokt6K9WXLrRd3PoL",
  "key25": "47iJXJcKwgV2itMfzdbH2LYxf61rXJjJtab58X3iSu4pJGHs66mm4UvMnay7oLcwJAFvFwFntSpLadS1tY1MkZg3"
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
