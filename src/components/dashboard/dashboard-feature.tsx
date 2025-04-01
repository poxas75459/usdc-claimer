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
    "48eewWVDCPd1ynZ7PMaxrysACaL6q7Ep989T5g5PTw6EFX6qkgJ3bNyqY6BUQEzxWYHgLDgoQhkQZC9RhJ54BEk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LYCGuHrQWctngCVbJ7fsgvchnEbDebpA6saPFJhoN18caGExdaLirxjzCCeS1FzetkAs9zYA31Y6Mvw8huCLXE2",
  "key1": "38mycvpM6MszcK7mabtCgR9dgcrseGivd8FA6VtLxcVGxSSvzfxvTU1ecZaU5ewKrg9464TLTz14kcRgWVetp55c",
  "key2": "BnavnL8uhu3aaHEpKH3fp37NvpY7h9g5pLbuuPhf2Ca9Kb9Mx7LsZmqgDc9nJPh7wAQH2nEHpUGYJFEPeshgoEy",
  "key3": "4LsBsdQx5KB5K95r9pc4KoCPTXzZdP35pN45d8LH3XQRwZ8PTLLjZPQxYcPhjsmwYgmjzEDPqHk3uG6A8DXsGQ8u",
  "key4": "2UhHATpmhwzw99evSQpPJYmVUzciBeS5VjdnMjcHTwmLZmk6mkHNG8CGrxEudXVpAg3Jb4DmEsz2s31TRSBmFpGF",
  "key5": "5sUWhSHsLaNkeA9ngcRPxg2ANyMe7KwoZJMqidefSUZLo2PnL9xGK81tL3LL9yPNx1qUDkhHgMFA1w8ShDRSbycQ",
  "key6": "5s4JC4r9ydkFTm6z2Rn1u9ZTERVdShWbScoDLtz9bV2v8Bqju2PkqSBhsn2riimP7RiEqiVrTzeyQEbbUzbckQrw",
  "key7": "3BiJkgjMnBty6YiKtr4hTRZeCHYpQvCwxpirZLGjqphgnjNpDgXFKmnySrGHWrkJti84d4g9Ssmwo6FVzBpS9EFt",
  "key8": "4EPrdyfsXj4WvBw9rqS8PuFysetewP58Q4sSk7bMaTGRT7B99kHWB79rszqXBob61uroVgqPMpZLZVui1NZnvL5b",
  "key9": "3NZHu1Jo716Uqew2BovqKsruQ12x8CuW2arv5sMJgKS1Aki9hQ5WE4pACaiDMGurWi8gX1SmhLUUd8jvHQR43nhY",
  "key10": "i5xLK2imPADXgoyMLqHhz2AGGLKLikQx8N3BRd3eURxb4fwP9z8MtfAq5ipZhXVwxEhKDmfRtcVF7HE1k4Zo9fz",
  "key11": "5zT3cd1cSXnXVTozez47H9Q8Gz7UujUYxy6KNYBjUwiU326HUdoBeCzaKFp7FqqXbhkSHs2cUd8bfqSegQso43XT",
  "key12": "39xK49tpz878UyZqSj1RD3us3vF2JBMwk4Z6DFjuY7McfX6uoFHLBEUoJwgPjbyKD1fhNFGUVQaELr8UeWSD9Vpb",
  "key13": "2ufQaJMCd8wULgcTK8zPZSfrMAwEGKBtPEgEYFuhKydbAM3aAQk7f7nAXLe3xDj2MbVpZqi6rq7ivvkqKywHP7HB",
  "key14": "4LT6S5DhHiH4wuDQabLFiXM12L6B6g1vZv86fCHRof2Z6Zq3FQgAaoeM61asnLqPTvuUYsVFokzVatCRUGmjBf2a",
  "key15": "5gYTcFz7TKqm4nS3hFk3Bsm3RjhkC9MREgPJJFibe64LcUjpob5AkWEdvVp6ukDepveGDoEHoTcxqJ4dqoKFo1mB",
  "key16": "53smupnyX5upokVGbK4m3tg4MBc1YhyKG9BC9Vmne3oyswCe8kBqtyBGBGzuituQbN9i34G8yzhmMooSZzGxzSYW",
  "key17": "Z8vqCM4JCArREv8aTBV7ytohj6F7ZD7dTp9qcUF7cADpJM2iLEiGdLBgDRXYQPMKQPmitSXHEgNnvkpW9oBUGxe",
  "key18": "e4Hnvw87paHPruaLJ1vEtYU84TdSiHKK1eJNDeUfZ6w8SzKb8n2nXsT6MPAGV9Fh5cMU1C5z8MkeEC7NUtBvJ6S",
  "key19": "3R9dsqdThJwqPMCfJM8aLcRc9RMKj51v2Ha4CHTXky5XXr6cvdqXZMEAwg2Yx8Ub1VDMwDpwZNjam8uJCy3XSVBk",
  "key20": "4Sx8uH3jGrR1dpCojQ8p1yRfyTpF967e57LWPDFy7euA8eeZ3tD6vmeTc9XymK8M8aGfrwvb4NSzNH3ZSUdppz5p",
  "key21": "5GNXffXZZYmhBF21fgMFhXBQz6zsvhk5e7noUC6ENWskuZF5SVWFnX58uycB3JLuQQQsVwQDr4w9esuCf9snYkqp",
  "key22": "3iBZQK9oDyGV817CYqeWdqHxcJA8oZ6AVyQDJg6aBpB7bSsLgPsDX6JVqZh9oxdi5ESKLMNiCwkh5zYxzaS326F4",
  "key23": "jwJc1YVUri9dS2Lp73hGZhjDjJkbjN43rWKuTi3Ca6gYr3Qy2ULQh2Mq1XL8PnYa28iUDRTYh6vJvPDwALvYDVH",
  "key24": "5hHpwQDKBfS8cntRavxmviXZiMa7HLzwHchgJeNuHCJqLawnzMQ4eZbBzQexLxeqXRZS3A2p8HVRSnd3RFFuEKiJ",
  "key25": "2n8umJCwXgYW7qC8gf5URMGu1mshrvtatUtxZtsg1GDkxAsJDZX5BArnUooecP22na7BSMjMRk74pYoj8Mw4tTU3"
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
