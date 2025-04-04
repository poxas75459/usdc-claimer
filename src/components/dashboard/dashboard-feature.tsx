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
    "3bWyB5iQDjyXzWUFekL56ry8DZ6ztg6f4r7yh5DVNFug2Pt87RKGm9NM4JPm5a7jNYvTHVn4h5ezRZd6Gjxo87i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLxSVmo3cB4jSqeuP3TXAxEcinh2Z4xBuExxHBoG6CLAmQdxbAcyZbfDasjkzdTkWJjDGE2qHUrqxro4B9xv2j",
  "key1": "43sCajgHdh8yEjrKBUpTugeiNoEouiEcrogQ6REYPzGQrsPoANWh4tZPPocNgLm2NbrBr3B6Y9B67uAmw8WbdJCW",
  "key2": "3dJCrFspg9gB87JKwnozQkaUGKTNYtChbHrKGP6QoTXWGQzTbCC9mBGRswKvYspgm5wBJQzsxv6jrFj2tVmichKV",
  "key3": "2NARpbDh3v6DLCLVXmJr8tZMvKs94LT5gWpCaxG9frHBtugJ1w8m5L26eCj6Qyka9TvTfAzfEBZ55VtDrtQ8rai4",
  "key4": "Azs3hLVgJtWotpzsohC5wJ45CN3xUGm36gB4rdF5RVorbpK6bjNafYSRxkgN9yDpjTSytsGqa6UZcuvc6DP3EaW",
  "key5": "35n2ZZ5JLkLwmd3fRukoxNMNNcjTpg78sRareAk8xft89Lf8h5Q996Avs5pzvVp9JfDWt8v67ojaKmWLNb8VPLa",
  "key6": "3ZNzuayp4dUK6xpwYrzqWc91RbJazf73aRS74DHrQvvUhBtouvo5pGr98dP57NyydU2gixWz6SwFP4AyzePnsFsM",
  "key7": "7Jx7Q5fsXVRHUWTFX1c2fBuE5LPhdRbzs42ceAsAit2uaibQLQTmAcm8tDmWS2kMxu3iypDMRAHe5BmG8hC8CkU",
  "key8": "2Ugy9TFRV8QZD7gzkiron8Y1DTEfWZ2RtmVDZ1qd4H5cTRAshUwopNMFLM1UNoXWchYignnrSpyYaiBPVKdWwxAh",
  "key9": "3Ai1YBq6oPos8vXfg33LRfB1c669cBaG8eUXv1w9sfPYFqBQYmVCbTTZQ6ipphQvhD8qiTxoiFtCjJkWxxAVA7HY",
  "key10": "QzqwAXGRvjfaJqKjnS9mtkvhQdDRVqoTx7gwtVRo6B2pYWeACwgaj632ztQeqcTB1faRhKWLhQVKBQCXShUYYrj",
  "key11": "45qzbDqQqjT3fhqpCxVHESohxL6EK1gdjjW6HBBjFYutEyrs8Utpyp2ndJvLj5NwbeQ9BXeNMR1kXWzqsLKGcTP",
  "key12": "5XsKUJTUVfv9qSMYK92MNbRSxeY6mzTYiNmZb7zgbFFee118TWq39vEjodQmrSBW2SZgqfMHL9UhvDasNr4ZEzBz",
  "key13": "NRNa9hV1Kf9qpisgGFx3YUveR6THvXo6bqgC8BqvRL13GXgoMU47XmJi7aigcMwq97uQxvhS6MhYTNdfQWGdmsD",
  "key14": "4Ao7xmruziZVkWt1LSgA1tvH7kacdAjP9pYnW9KSpmdRJKiKGfVP8L9LuZutLrdb3GtQvsMEDTjA7JVb8dxiUydS",
  "key15": "5aTkKnaX41yQMxY5RFbNttS1176ga6Ph8zwopVMQQfnEzXMUFGkFsDrY4Mobs7uGxw4kQMW5h5HkQVpaBLJVbbaA",
  "key16": "3mb6SQpqnxFisQN7GsBsRrKM2zJnbMEWCasDGguyyQ19jUcsrd75S2CMJmjAQUCuGMMGa3jDNMZxJigT81Qgwv3w",
  "key17": "qDLXC19Xr7DZzCoBBNyzz1NLgnXojcJ3yJXHoYy5GjKiGELRJ4p5nRXtPjLdi6P7B4WEG8ZtZGdASUArzd6gGMk",
  "key18": "3RBgopQ7ZcBqKxWDcFT6b2Dh7dU1Lb9SN7ZfvqiyHAMgCAWfksRSkvdjiErHDhY1a5uvpReT9ib8UJo53WrZXfRA",
  "key19": "38aydHK2ssjxoF38AeaFWXUmDvFuHXW368xRDGY3FWAQZtoWYsDqMfkR6iVSNuVEXuooMvDLoL2VFk878XBHfBsm",
  "key20": "kSBVomfXJEfcJXzmvYRSu1VtHdi8Q6wc9cH9dBqAmAXTLHtvFj4T3U8wRihfER97VnG3BCcJwbAA4g2HhSPBvpP",
  "key21": "toqd5ERkdf5D7Cx2iyGWBy3rVAJTSJiuHvhdVwx4vTW2gnU4VY8hSVC2itPvpxJ95SyLfWKrZ5UCtAfEyLpsyqD",
  "key22": "PZUGweGSF8KhW57kq5bxTfn2FGN8PEUQacNSbj51e8qHEH8TBiSm7BbiSGK3UjH2UnRQ24E3kpD7ToTqxj1wPUp",
  "key23": "XXWBrTJFE6AjYEJ6qhpDMSY6pYkQ1CeQp27n8E67Vt21Jkg3Lij2aHjFTq2nswVNPG5gCGgzK9MoJ2VB71jQKgv",
  "key24": "3uePYrXLvXDFBfm8recoa4CcZS8HEnC41AGQGbPQ32z7VWmFNfYy5dqa8SnaaHLotnQ26VWkNLfyosDN1x7npA7t",
  "key25": "2Cmwx3Bq5N5dNGUstCHd48Qdar9uo93TfoZ44NZyTLrYFrSbcCicPKCHN2D7pyesXvn54oXj9Qo3PDqAA5rtapr5",
  "key26": "2DKxuimCeEiw5DvRFhZySy87ehXApK4vhfBNMtbeYhWeTNUnFawzMNUJtc1rswrVVLBDSbdpAHY8N2QXSarMbZdz",
  "key27": "5REkwpM5QpeEqpXHMuKDSqVM2jViTmeLH4GtEB79TNe6EXTPAJvnLeudYiPbYVK9BwBetaomj2QeehuHrLtAUzNh"
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
