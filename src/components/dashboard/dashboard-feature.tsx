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
    "5oV49gq2g3TcEFngRmECtb11Z62CPbn2UZjbqE7H6xxwgBxSkNCzKGTYVcVAnRNoPZ1KNQNpXyZb1wuvmBnviFWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDqzBHdmQHwhCZ3aS1w2y7gedaDh3rANc6mavy1r8Wn3x2T1R7dUSVQ25ELEpDdFwmw7862N9zT82S7YYetYzn5",
  "key1": "3F3CCHc9H6V2QEUCFHUKe1XWQRcAWcKDS96btVbRpUSvnfPsiatX6ZR9Aei9nLi61qYAzJxosJSF5KfpKKZH8kDm",
  "key2": "5rtPvnuAVmd9Xy32X4ejTAJMtSVndhbeqQnECgox5TDZdtfHz7VsWpxixvAhAdpZqA7yXsuLDmnyMdvtuemPGsfi",
  "key3": "223cGrdxMzPw5FGqWVp3kjGDRfDV4dVwysWfywP9i2FVP868ZzoAeFCg6w3sPsCAV3eSnNbEoctuhQmwDBs3AT3G",
  "key4": "4xXPpxpMU8kx1aUm1pFWYMCobRRpG5NXfMrmteYsz3LhWuU6KQyDqtZu9729B5gv7oheNg9DnHiwshq2M8Yof7aq",
  "key5": "4w72gvmDh2FHGvWQrdc5qX6x8Rm3Nva6aBQprQuUPdGWTeSVC1PrYn3nGj1yfyHXmKyCdWh4At1AMsw5tWSBvvec",
  "key6": "63xvByRM2JCtfCSWkhBvfea7PHtUYRsihfX3k1E6Xzvk5diSaAvVzZfgXaUCjnL2htsBV5y7ne2Sjh8Awp2ZcovA",
  "key7": "Gk5LmUdFGa5KeGFm3ya77tEj3dtCXyWrC8K5SviLsyCnZvVC1dccVS2DqbMPHQyVPkEK1SHzSYqoPMd4sUn3H1Y",
  "key8": "2Em9PUM6fNYbPqxJMgG9oXo21wU2KoN9k4VZZ8WmBZykVvcbmtSVdhxRwPAsABEq5n5H58zYGqmwYQB4nWj7iVvi",
  "key9": "5xPZpBa27oSAHjJ2jCZ7SEDaz4enPAUAssT7CDuTY3XuCv7C6kpUGStBpGHyRPJ2Z4KcbCR4ipKz7sLVpGGNmNWZ",
  "key10": "2sQjB2kzWcmF5vLvCst4MRvdsjTBmrh7S69UN5NLxKruLHdyGLMce9K7gtJGTHxK72XyMaEKCVtjKoHDjD4KgZ8n",
  "key11": "3P3LK9xEDhYTjPiHnrdXM92TsH9gFW8XHtnMc5cThjvHsjqeZiNegsUhxcn1TVwfKgibDbhZjeJGCGdCLh4QQ7a7",
  "key12": "KV5wzgCvVxnookmLa4NA6pVGye8zfKTKQ7CUZeDPHp5Y7i31obrg7WVxu5FZ265rWyvpjf9waTWWnn2kqvBPkKN",
  "key13": "634uYrqb8ieWkXM25QXvyX4yRX938s87NZkYD6mTNzgNkd2vHiuodowxyseAtkzP8HmeRPVDvBDJDefoJP9gqKeP",
  "key14": "5xgrWp4zcZ1EPRGKAKw5gAha4gZ5mxjaa5VNauLmDQZMhaXxZDemvUyKEqKYdWDYNtkNYzsmjM3ThdQtyraJNBuo",
  "key15": "4H4NZ1ZNmdxa3VR6aUKjiSL1v4xwvkWQaZRFUBod1XJ5YnPb7nnKFW1fZF3jhQarw1oa8CVvvsHs4ZB4fFEQ96o5",
  "key16": "AvouhV2HCidbsuA2c7149WPnpYKa7zQV2hCGNZpzzUhqfQNoaV7AFWHviTtjPyHN4jcDSaVZvikfiinTuaQ2zu1",
  "key17": "5N8ANhEp4C7zGF31bj4vmpBuffZTRAg1VV1NZAnaKUJL91SUPvv9xC9ZyGqdcybxLX1XHxAMLJMdeRJPXp75AySV",
  "key18": "3v7yuzF5YPBJ6nYycGxPRJj97jh9vhFDDULyybUDpAxtQhwrz3WJD5acziznGZ5t4iF97ouZVfgKXN1XPhPs9nKn",
  "key19": "4YM5m6thEP5LvytyK455yWsJ8foSD8ywzNSCR9bz5gBrfGgLZnininGV1cP3L2zNaL8kyfqDSpPccsvaRDTf96ne",
  "key20": "5YxpfrY3PGnrmnu9xK3rgz6PUMuiN7k548NUY5yUdu28A4KCRwzy9Uwqs5WdZvDxVJkvrZ3mnNA4CwnFP8r5pcwN",
  "key21": "cs8Y8BJpN7QwbXMkNwpsE4u3j4v266CcN9wMYscBjXpwHdvHWN6v9yuhnn1aqGi8JXKMXzUtxjN9v9p5A2pXSj9",
  "key22": "E9NASe1Uew4ZWjavno3dpKosupr1wWeRBoMRSdDPpCGp13XcApHvEGicTVF1WjZG1kktnwsxMxzjwLwLvNu3YMF",
  "key23": "5hVDKyGmabARFvA1cvHxi7btMBuRWULgCcx7c4rHUrNuoZ7KQ1HDQ4krF8qaHKBAyfkAtjJiS989hCVH5u24wsJT",
  "key24": "5TmS3Wi7VrcjKHaPGCVUwymTXpyFa3HkT5WK8CRTidVd6mbqvdhPtYeYCDUYQBKgGhztMhjWiwD9xUawY2qwoxHR",
  "key25": "Fun3r9naYaRReZF2HRYJA6sHamEv6VuJyxyfDkatfp6LgnxFUdajF7J4qnwsZHdBFtStGsy1Wf19Sth1tzc7Jtq",
  "key26": "3qNk3Kxjj93ePNcT8JmvhF3PqfxpbeQu6Mthh8MytHWCykijsNPbuEdwFnF9UCcN6LFSmZBWjcERWLQBcpzdi15n",
  "key27": "51xrpfVDdZz8BoYYSH9CgZ8gczWUbMWD9aNkJkt9ZaC3mNrvWoUE5C6rKy3oWfA36j4VhqeTzACRRKFvnYwUuSHC",
  "key28": "5LLna8W5uiEhnRb4ygL9yGxvnUEjmXG6gKHTDuKmkkttyKqNMCr6wRd32JRsqvPrfZu9qxmRsmEB8JqsvUkqsHBQ",
  "key29": "2vKVhutWPLm7VQ2xESu1kUacC9jtYP1MguWkAbWFpXpAe8zi7YXWtbCVPMDJyuXGCuoJFfe279434VKeHttGPKJo"
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
