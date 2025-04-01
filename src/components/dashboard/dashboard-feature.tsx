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
    "4HFziYdHga5vanqnG2ujWnzRSid647KsJwRBB5dSgzMsrzzREUEBiNFyoBwpmS9D19ApKF2HC34mNpdSjsdDZZNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymR23FhcYfoYARTx52rAdC1MPathDfDNeAAepy6XttDJizWdEt9Y63CafDdY3Hhd6TtSmcoubuozCELuMePBFVg",
  "key1": "31zV8C7Uo48Q4QBFwyVSPUNH9qbEpiNG7FcSJaq4SSS36HnvVU8ekgTpfWtFts6xVsHMc2GSVZdCjLP1CWwrMKjs",
  "key2": "3dWvDAk3owk3LBB97gpF1pqZhcaa4PgVDYsatpr51RvxsRYJJY9F9sBuGKTJfvr9pww25TXFvb9qL1AQp8cYJR2V",
  "key3": "5hAHSHdZDm42JU8tEEdRbTktvHTf5NNqyqSa1N3WsV8TbHMMEn9AnbJJtD71ErQRP7frQbiaw5K9MucGfGdgPwBC",
  "key4": "3VBaGpCGa2N1ami9or6FTSE76T4E3iyy4MWAuuo7A5FdS8P6AHRMh5Kv9N5Q1Zo5y1ZFQXfCv2Gr2e7ATAghjGuV",
  "key5": "5aL5MqxPArEL8Puuf7JxmmG3s77n8gq88gKNFsFUQFtBRF5ezt4GRFiGEPsgwPdjGYZ5RAMG5ZnqtSP8DV8q5n5s",
  "key6": "4PNrtztJY5b9zQBwjxeWAiTfXVB8uK6hKtJ1vVKQQDVeYY5tQ5StNKJpFYRXqhRVvPoLERUGbE3Y7rxy8RfdLhS3",
  "key7": "5JZTpnbXQddzywXVjMDpyuVcXihwrRRHysv9PM2cs8oq4RypPDxcmuggoXvvMNEoYYf8yMPVDuCVSS59QHjejKGf",
  "key8": "3cmM793ZpRMVWrH9ftZyNyWcBwKQ8fh7qAFyMdgDBBPE4SgsrNC64wpKoUrEdJU5xPfv5yZ3keszdXZrasHgu41f",
  "key9": "61impG8F8gnoz7UGmXmQgY295f56ti12DEnPcRM4aAR7YTGAPipmR9Rrek8tkX3RxEjcnZ83EEYgkDgP99KdTiuP",
  "key10": "2w4pG5Rc2G3vtoHFZ8amWf3fbVWomtdmDAMUsgGumrpKyWtUFZn3kVgKKrhTdRXezatZQkfpCQqeRwgdcE2Dj7P",
  "key11": "5PAuV5CxxBVWRzfQ94zw6zQxFozA1JJ9yQHCV87MfWAuRXswhSAdcZgxcSvNiz9fyXh1H5R3iHMBLkD74QD4JeoT",
  "key12": "dQRavPWU2bnjJVH97H9ETDVPqw9UENgyntLMx176MhTKBgnccvvKUX2QeXHP6jFAfaPxNamQAKBa2BUQ9E79p1Y",
  "key13": "5FTf6sE6bmA7KxqzncvhxXheKsvjyYTdhaPjCu9bTqWUzeQR6zi2BhwRwzHQ1fYwMzYtKycGJpvMdeRRC6caiYLJ",
  "key14": "5n8b3QS3QSqPfFd7SPGyF1uRBGNaJ7Zeg7KpbTvXURJUnzKfAQAwbkMRkQ1u4g5pxG92LoiChAdAfxgfPQJ15c2V",
  "key15": "5X7EVEt4hrjzqDoMQ9Q56GbBSaxwF8nkNCxjnHMV8qhJToRb4Ww1yGCt1bK9yQgetEmvYTwkcydFCPtw3ze9zRK4",
  "key16": "2pisQCgVwoEHLgdYKETB33EMDWGy9HzWBkTRWzNLSxyHTTFma3oS7cu6ctuBq9VfPkRRGdoCmEFzmxFKLc7vcjF5",
  "key17": "36MyA567V9s1vmNdtxxhTyrdZAtzYZfjBLicNswLYGC6ZwSKvwMa5VGtSW4ooZwtEUBgsSm3HhUgmxMcqE26P8e9",
  "key18": "wAD5KXw3zHh9gooiMepbDL61psuN9gvGNiY32WbpBFynhvvpEgpfzMaemNYjTzAhWWxtBkbNwHwE6Zy7oBBN2Hu",
  "key19": "3WQENEvf1cNZQrZ23YVrffKBgm8TyBjxW9H4DzYP1W5pMStti9qVqzvAUCAcMLpaFwx7nja32nTZS88RbnyWQkdQ",
  "key20": "3habEAV3vpwmyffaEdPCoFwS8DuvMeC82jepidRjbSoGHNyGRPqKLZxgtLidZ5pm2TAe1sudxv8eRemQr7zAWZPV",
  "key21": "4NgYG2RNf7LkQa9yYvGHjx7eCU7J8RHS4F6eM82Q6DFBqoaWT8UobmadBP2GTBgrX5hBrGPG2dS3XxuNhwcX4F6G",
  "key22": "5QYjzjF5myQvWnyRxri97fwsm1m27aLc5XaGb6SaxupiRBnN1Tdr1P12gGfAnEVyVWtSNxNdZ4uL4Zn5dXfEwxJx",
  "key23": "4SPYW6cVQmgUHafCkPU9DKn651YR1JxUq7NWuSrGJeCSUf4aCRAtAVYN9fr6HjFbaaiAw2qTBxo5AZw3t54cSTUU",
  "key24": "5R9zrpiqf2726gXCPBm876ThHQRUg5D6KWazaVVCVYUohnR1v7eZXD2D6CSUSANnVEe42ERjz3kX5FtLCYsXN3LF",
  "key25": "2KRvU1JdjRDgeAcqPcRJhnq5KVwVBHGSzA2rWK2QAhLFh3FFpZd8JtBZmKAzg8jwoyTGMCnWtBqaYEPiUcnAwUnv",
  "key26": "3gEgDGKsmurcj5K8JfgS35E9gbBQSBTE44SqqncSHkgkwaFvCtdX85xkJD8AYkhJFiLCNsx8caixYsESJzVnnqD5",
  "key27": "x98qHwrdYQnMpqzfrUAhR5c3LnxDPZS1BxKHNzHdkYNSynRDJF8FomrrEAYsGJptmvRJCtUhtrHmid9KZ49u3qw",
  "key28": "5gF9ZqZBDP7s9BmRyAqfvXxvAbeWRP9qMg8StEYT9jcAVtLUBc1ieK5VyvDSUYPMdQympA6jpSmSB27fFg7Rj2Xg",
  "key29": "24ueKuYCZ1EH8gCibbrCD5594gakxrUfYJQPQpccwiiJETB1bxZYXc4Fq343pozCiHiizANjd9NYQyr3ejvCQxtr",
  "key30": "3pYuESheYPSPRgqBaGxbtREQ1xjFmpYhfoyuG2TKYvNZjZbSYN4PuBYXbf1toGU25ZW7bHWQsrHvUqbhM8rdAtW4",
  "key31": "2eAU3mNtH2bSiwiy92rAUHjPgwh9tH5CNYwD2RJG9xptZBQ2DCPSSRu9Lki4uYnj3ofXrvUziy3RdtJq9T9xFqba",
  "key32": "2XZVsiRmaBmarpqNmiAvesQSmP4WbF3B6xMyqknsNf18kYg5NxtNKt6hdBQRkGUUjfMTL9kBG7NsKCWyU5bWPYE6",
  "key33": "5SVPc1arosc7HCdCu871ug8g3gbnNuYYMMa9YjHYE5rSt3wyqrHjP4TbXNvcHhD7GsNVcwTVRLTUbPWoZzAG9HXr"
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
