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
    "5rA14Kh3PqK4oPH7xSPZHK6RZWwFV7TJM2HC74Ysh4XprjkfpFxmSMs5U1DvTw7VVKtBgJzXUrf5dXdTQ65DQtES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LF8uWorb2hBHs4k8C4ZSe4B5Bb9aRe1KfuDjQHub6MZ7T5wvE6J9a27sXs3pBqusnfEcuMN2oX4UPjXv3Kc7bx",
  "key1": "2kxyxZurCGcxWxfZ1zV2LPCd9DXSAsUE7uw92oXFEZvVe92mJJAkgnMjmGzhUEv5gxg4zHGedSNCA4UHiLSyvsr3",
  "key2": "29DEzRYEsqAciaHbtjkKjzHosorbvPtyzcJDWxJMRzzFV5n5wHs15DphUWRXWpJ25Ysg15sn2eP6qdAqHEfuZDV9",
  "key3": "PRii7UnWnEbWUno3e14j1HHRgH3Nc7m89cEbFSUCzKiXfxuS4YustZ4nJcLTSsq5ngNApP8AUeRoWHDD7sBzx25",
  "key4": "3JHqagWnKQHTPReS6VezxgBB53DYwccMnEFznaDnzdpvdFwyQ1sFnD5z7pxW5QvrTvYBH3UCxhKwp1GYE34uv8NH",
  "key5": "2Q4rfbU1sP3waQ8YsZhvrZr3neUzVLFT4ioTZPE2T57J2aZ6rCSuKFpuSfUrzxJbivm9ZZQgk217Ckcj6zQxd1rn",
  "key6": "5myveJgFsVN5g5UNmphPJg4TFstr1xdmN7dtwkNXdi4BsKp99yaGMviozGCQptbLKdc3hPo2bA1x2BB8CpNdgR94",
  "key7": "62yTA9z9tDgBHSBazsejrcHKHMZ2qjD7yY8r7RoyX4jRNyXCHSq9W41ZsJNJSJqRJyfuQP99ZbANraERio1dCSY2",
  "key8": "2Y2B2qzXtZ1kKQiwiyzUPi9zPdvZMvkcRguMFJgYMdATJjwHBNQEfbRUsYw6m1tCSs6iXkNrBagTYLzqFWS3dy6W",
  "key9": "21JwswqTaMAAMoSbxHKhqsGUmUbAqs99iosd7AsLoT1EEqmEzyRSxLcUk7cCAiNXmer6vJtA9ebaB7CVKLdPSLbL",
  "key10": "2arp92gk87q6a8mEBGB7x235XGjwknaxS525AqrqUUKzR5WJq5e8pUed7VVpFNYy8AuHLuHr4i6bC91Mh7CzG3cA",
  "key11": "4UqHU4gyDoirp4aerUyJXwuTS6w3ecULHx1W5dZeWGVT7Vd2kAuvuFEJ81sS2hGctBXPnuupgHqbX6eJgPVfsh2S",
  "key12": "AmxetGu1R5rGRBHsNn6UfTWygknPpjVfnz6xbtV59JzVJxTwV2TiYrQFhDX3KciauTDtWNZQDcNYFLpB95qh4Jk",
  "key13": "2ikfTDKuAVcZVTrFnNWnScvFgiNNMEPA5jgtj1Zg2TFAg1QdnXhqqGu8wmGb7SVtL8wwyz93ewYvwsKcPmmKp3LE",
  "key14": "3pALTkDpEuiRMg5kVjgxzHXmqhFm6e16zpShK4955XJ5jubscTXyxnxfPzEnvcdVUsVfSPDjtCeQMrsNfHNUpRpr",
  "key15": "5JtfgZXGg86wjThd5W3BocV7a9dQE2Jq2JD5YbgCXeFEafmFA7mSDrXnntFacgCEqvwpRYWruZbhgqhYKc8ErUAE",
  "key16": "4HrU5DnzBSPbq7LKtbN8bmccbzW66dAA9yS8GLdGpjJ7SYiBtgGSDcSY6NanVo7zFfVL8QTiWbgFHiaWAt7dD3BJ",
  "key17": "2huCcf7sJ35xhn5gQhrKHewi41UvQeVpAvNiccG3hGgVU8Z1NAEzRf79ZWGV1QdCAbw2RS9WNczzo78VVFVBZffR",
  "key18": "3XXy8sHoL9euCfa8bv49RzA44sSKTvtRRR92bt3gqYfkZryaRkQRYtrd1TPxDeRfABzVeoHxjSZwRK5z87iRGH53",
  "key19": "ApooN1xnFM3ayTSAHcNeqwPjwr7yfQmHu82ikuCoQL7HD8oxxGeTHL5kL1Qeh9j9Ze4ZMJcMJdeUEhNRwxUTqFy",
  "key20": "4tppQGzdtAZU2ddgkBjGCpgyWvbfcHpmGpuC82CGtUEnPpXTN6mRqVHtYNy4vZpKJRSFNjongAZcHTTmXr8u5e6d",
  "key21": "4KnJkK3MXUp9L87apv6MdQqKLwgwYZ4NvDqTySZsUWhZmYKMd9SxtffqftDCSfGw6nubvEYRgCkMu22s79h4k2Nr",
  "key22": "3zcxBUh4pq9PrAhMnh7GRqigCBRod8SEYb5bV67Y1anUj2hKRPifiMFQS2UP8Lj4DZoAm9xqExpTTHCEqAk5yZ34",
  "key23": "4tQFRFJ9SfyC6PkAHJaHoyLV2gSKjVwjJvXaKMYokgVHWiYGbfhyvsTZRQfKNaEUYyApg7Bx4gGikJhWW3me7xyS",
  "key24": "2xBk9d5Yx43fMqZdgR6UuZJ9URqbezyQ7BgoWcobLDZS37dPxZaRUFBPo2LZP3YmkVoevcMh5frHMDHBfWUG4d7j",
  "key25": "5bnevAEqXuJrGVnY3f8UBzZiE8qVMRAfnd2t4MJQKFSwtaheZBve4jWwVRuBAUkyDku72ZudFM16i1AcZ11fGTN6",
  "key26": "59SqnSATs5eoXvZLLQvy8nvvABTWJPxUHd2of8Ki8KWrrZyJ4ZFnXtnGc7vgFZTaMCA9UQGMpoCFNHzxQes9pmyk",
  "key27": "4VcP5d5vySX7fzaShWuYWT4NDNMiWRDLkUhnbsAnMMANkF7WSVA8g7H98w3GoHWUaxgrpCmT8jWWcBBKbVzWDdRt",
  "key28": "5h5mZkShwdexvBCBJwgk6gx1nAjwZCwjT4PXzVd1vdLQACHuwrm9PFfgX9JrUbCmXgT4NXJpuPqfC5RQz2YgZKJy",
  "key29": "2yMoqm9Ts737yn4tE4mKxPCDoQmrdmko7iC8nM3VdCJJRVeXXWrSqqWaMVSxE8mg1yxHttSuxVNRdQoD3Qy1cuZg",
  "key30": "4HmKNgNBEUc7H4vXYXaGGkBgnmYWSvU8sEysZivduoqbYwiSwY5Xbyx2seT4rkVRdEke36cTQnMbEMRnSoZVWskY",
  "key31": "2xMdrs8txLp24kP1RAhgQy338Wu42xn2gQddEzovqvC7UM8nA4J1iFBF2J33zGA1eZGArbDNHdBQWosuttGjUjFX",
  "key32": "2qJgGaZwL1ewiueVsQRpJTF5Tzid5bZP2SjwoMEiCb2q3R5r5oB9tMGLPCE6ehdcpCrfo9RPLz2GMF8G1qFFyyZr",
  "key33": "3rgooBVM6rYNNemtP5A526SWokUkJXb44KdWEqPHhgGYKg1Sk79GVR7oZrBqxKBdbjc2KBZFmQNedb2f6aSWotHN",
  "key34": "BvcW5VW7iNYJCrfWKs4Z5RhKA5pTk1ZMx3a5SDGWnvMvKKFwrV689iMsTwm7hY8SmCTf65YyDo9NmCx64DwW8w9",
  "key35": "22a8H2fQX1MGMSiqaMk1BVjQuNHEhiC7NxqLNN4Ee7qCg1mmK8iK2hXBqgoiexnzRRe2cRRxTrDtcwvRKuC8woAt",
  "key36": "5vuVt9tsZw6agjuD2Tptw6X9UoBpH4f54oSJVQrYBoXFW7d2dApwJcFEgpN5oigZuqK9mQexiiH2esFYjDhqncXF",
  "key37": "46KwbJzC1cyPwbYASpq6E2ZdDYgxQJdW4ynYwihLnDz3NJKQxWbJjVmrovWieFAw38oSnAkCiWxzgbjBK8ZMT3Qz",
  "key38": "XpP9iCc9YUpZ2Nv3Ay1rajGK1BBg2MN72W93S6fDS3pC8ZWvv6q2VziKEBjCwFYs2GQ8zAsJuhLC6BDZVTCWMkh",
  "key39": "5egA7TNzL81BgTG46FTAQMk2WZnK4p3vzE8QKSgebNRLuQTGBooF6rz8y7XrHSK9yCkXMJZoBMGv7DVyzaE9CVkH",
  "key40": "3rypXFFwgqKfQq9FE6tbWKfCLa5aTVDLCcBsHjkKLwTh3ki3YXnmifhRJqPd9KE5HmwcCfYvbwdKShhvxjeaBppR",
  "key41": "4N3cwXmcy6nxhUGUQxxey9kphNB6qbisZRUUoBjzRUD7QbTnLyJiGiCYqNiNLEDapN5zRk6RkBfc3qpGTpAXoPaz",
  "key42": "N9w5zuhoAjXCsSurS9rt4o81QL8cQLfy5AQx4bLjXaGkNdGBKuv9VNCkUfciAuM6p4M6BaEcgkLXjPKTiPAViyh"
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
