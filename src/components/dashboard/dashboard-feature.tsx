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
    "41wY1npHLkjJzxZdZZcQjtWVbx2TrKoSw4ARsJ1Fs6LhPS8qybDK7jAgPnTvpZh8Kcyc3RvtvCCiEboYNWNsVk1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nk9KQn3rD4kNsRqto8qeCGXXvwDsV1siFSKysod2TADSNKQf3wfogG4XESTFGkdceiJPgzN8cD995a4yBJCTRZG",
  "key1": "46stJAGNALbKmgRXEZZKembcLjQ5ZyCPmSRniVJgQYy3k16J7yrBci8mc3UhgkMXJYpv5e6CVH1tv7zT2WZj14uU",
  "key2": "EnmVBaM8vnAjNjMhrN7NQsjPAm1MRaS8QUrRqTN5mfu7r9bSybJsKEDHbovFGtS9DugfbAaaRAXAq1Jn4SsWpqs",
  "key3": "C1wVd4ZDz6Ecx4587p4gfofZVwgYCZhGeKPQNizrqH8KK9DpqxoJwJJHBM7jJixYNfg3RS85423HYEZvLt8ZP2W",
  "key4": "2wsPJW2PtjTJRe6oQX6se35i5UELY81wEa4KnyyWmHMPsjQ5R4uB3c5n5wsYWCm57P31K6SFKu1sYJXRrLr3ivzn",
  "key5": "3f4Fpofva5ePnmb2mZopjDtq7wpv8k5FV1b2oLQm1mVuKk1FW6sTgwz7iVthvQUv6yb6XyDS2tRDxEcFLfoEzhhh",
  "key6": "58h8MDHce3fQWxqWA3JWJkzJ6PpRKZoXazA2cAjJjoZC11Dvf7yqSbuhSpoceRfBoFPigcdtVU6Uv8QC7fLhtEA2",
  "key7": "3R22PBfTCwGRHZNmzzU9K994gj2vVPR4kXJsGe6Bv8L1kuDRjpkHTdc9fYod74f4qw9wTQuHkg197EoGYoDU3Mza",
  "key8": "31F5uCMrdW9TzFFbFK2bjk1wEoxB6m9SwroSkkfxk2iM132fcnYn5xHT9tyR8Su5FUBQptAVmYcCMyfNuveXYfN3",
  "key9": "4CdBf5Li5u5TihqcXehYiVZ5R7F9sPLpXf2uK92wC951RVMHMUJVoaB8TKDKYkL3eJZcX2csSCnNzEnx9mZkw2t3",
  "key10": "4Bu2NzQZvS32qq7U1FyydRabXznWKcj58F3j517qpPmtTAFgqgejS9i3zEFM8GPoygPmCQgNuqgh6NHBYkKAzmzf",
  "key11": "29SPVQusDaYnYPDZpsqzUMZ5vgMk59HaRrVd7trKTyX2WzYEjAWWJzrAoWfdxvmZMN3v9DVHT5VDzyhmfgcrr5VT",
  "key12": "43XVduaTc19DRmb1YbEZ2Q5mCkFx97pdpkEq2fZ1QXyLNvVrVEDdgQLHJk5m1nA6b38FLgzM6tdXGbucxi3LsD4v",
  "key13": "z3iQz4XV6D3STk1eesR52WTNtNBKLGSQR811wPz3zrjkC4wxta3McSSS4x6cqGCpmX6pPeeF8tCnU6ht2Saaown",
  "key14": "2BcpV9RbiHeMXHwZV1WeUYm41sNm5oxYxa92CHqDjYhkxAbiKDD7aiFX9DeJHLSikqdknAh2XoZEYtxsiYxFzENR",
  "key15": "4ZmVmz1mBEySGM8bSVWSGXsGvfuHki15p2p4Gx14DZHazyuY8d9MJVX4UVCkxLEQGsqbarWJmhbpHS7UavYdvxbP",
  "key16": "MfGfL7NtLviRTbse3bU8W832gB68qJzKc4CAWYSm4D7AkjWeWGLpo6oTz8Hb7P5GYQx5GVhSMMj5umoTxYwg7hS",
  "key17": "4vo8YLhyLnU57Hjz7gD2RBxefWh8pnLNXZNXzbGZPxA77xpzAeVSxgk6vDWX8vjYRNm8pWg9jFa3QRsqMK8qHqg",
  "key18": "4bofdoBrdKtooaGnhxVJEejT5Eb85poB2GZCXBbK2hE6P2Xqt2FXXCEKoSsTJP7hiNumE6tUgCwAeYL5Nf48TwYo",
  "key19": "4HtTQd2QgYhUSjAcQqMrKMhxKTLJX4QCEPfeM7ovFUmZW7SXN4q8qAaXjFGBz833dxdXVYYPEwsHQr82L6jwMg57",
  "key20": "619863tQeF23ui7mbbHzXcvGcrufXhaZw87QBD9n7yHjnBu1HW1eMouQ53XamfHK1w11qty6QixwukCjKdUEbNKy",
  "key21": "2upy1z5QujRE9eEbhghKC8Q8oMP5ttQa8WdYpzY4LJbfgGcmgZC39Rk9tgyfbXqfqWhZCzfGggJHa7ZVTW8ZZjZR",
  "key22": "PnS5xfUdfiSNhaaiVzRuWmuujGSDg1AQrN29wCUFJCDynkMUThARpz8Gpahzd1EaG27tgFcYfSCmWmtF3uGt561",
  "key23": "2MKyre1z1UqS8HzPfCYFViWBPENtsoKx2g1vsnvezcbfL7pWTd4x82MwaXVGu9HZNhhbAQX4HRoc2JeewVDtgMd5",
  "key24": "nPe3rheUmZeG5kPwjEyXExCvSphfngPB4drznXnGNxPnF9pcsc8krLi5kU74RfUZkgpND2M3MWF1gUVjdLdE3Bb",
  "key25": "4wYSyTTcvibM91VazHM9HLRUF8jwM4RHkEt2k6kipz8DGobtxWinvY5aRVnexF2xYX1hyBkFnTiSgaB1Z1CkA8SX",
  "key26": "2vrcLHrzRWdh8C3W1A1bfgnV3V1cQaQYe3J9kzRE8mx55scAam9KUGGV8vzbnHATovYWE45gJodXMRDRGUhzNtg6",
  "key27": "51x4viCaqCJns8U4rBduMCYVZPc1bv6AbS3F1f7babtz6y1mSqJyHcLatykaHfgQ9w42Dz8Xftd8FTq8N1P6Twxv",
  "key28": "5EKXaUbDtHYBMBvjsue9eVPTLABNm9dXY635PJgiv94aMYPXNmYyU8xATB7ChU66asdcqPJqJKV8evqMD6okuNqt",
  "key29": "5HceVNvurV8SjDS2uybXsNo4Q9UEXs8HgdoLXAvskFCM53k9kSczYmGouBMqAefij1NXB2SKytffwk6mLr9KDfRe",
  "key30": "5mS9wCJtTyFgY1jMNzJHi9YNActp5jA2XVKeGdJTAfFkwHbHbm6K11DCuP3qxMrzTffdCKHQ1vVYRFujDGk1J239",
  "key31": "57QTkpwHwNYhxkcc6kMgDnZtejt7hYDUeRHMfDiK2B9M6wTxemwbjxqN7xdVeCWmCDj4AFrVq9X14v58TuxSDzJb",
  "key32": "5mmf2Czv4Xb4csGRuUynbKn2Z4RpQPscn2YA1z54TYA46f9q3WtoqV9bWSUQhBNhZwvpBew1mCkFBBqdYPnHXvAV",
  "key33": "3FZ9gGLkqo14AAYxAKy1CPCTCHPyE8N9rXpeSfoi1v2e6bKjVvcHLhZj5E1ZfAVyA1kXDt5ox5q629D6EWsK8CEU",
  "key34": "525bHv9c7Q52f871tT13vAwUXzode472nQCtkH5nVuwjHTFztC1NzyGJNbGtq8Lxe3QQjgGZAyB98kMNWVZxMK5S",
  "key35": "49mNMDDTiSkTW6A1nHfMe1pPesAZU4kUmw1iRHeRuppPBzRadWWPKr5BNRxpSAUkwU5nHwGU2xb8z1fcLMW2K8JE",
  "key36": "2GcoDA5188KyHXuzRBEbLDhT93YtUGw9HsJQmSucYeozWJ9zgCZj3t6pBZUq4LXoUqxPqv2zHjA4mTAJbB9tZ6hD",
  "key37": "3e3Qg6gm29bCzPHLbJbbhqcoWYWmE6zQ22AdCUrNonB4ibYZcAqFj4PobZzr92zWCBhvXkesAW9YXpyhJRuNLZzj",
  "key38": "2ZPbmcxDxVdtRYFHM1C6zcs6sir8FXvVqqtJzahmvcBFs4MRZx9FVmYo6exzgGUGqFdW2ZD5emByFD3qDkTXcpUQ",
  "key39": "6brJrXDpCNAT22QBSDKZ3jYVnr8SpJhTeNrCMu6LgEakEi8Bs3uj14rEUhQEwyqoZX8YBhvpwAydwPqcPSij1UK",
  "key40": "5kQb9biKv4jmFE4tJb1TPXjXGoithnJLXa4Ket3uQkC8Fz8oTfH7JdDB8WyCbVQ8BvDzsuxANnbppctAUifNu59S",
  "key41": "ZdVQEQrTwu9MoMrsmbtJCsAX4nZgXBFjHryHP1UpiLXjXXVYwsULi7PZE7m3gGGsfiZ9GFJdcbtHYZU8q8Lwou5",
  "key42": "MrGGwAETiZxURq1dR3e12t69ZNkeRoi7piBdsGn3wXuUqJ9vR3JBue5eBZW5pFhDYuNpWcUQ7n6Ui3QrHHwVv8z",
  "key43": "4QeB5mM9ASZtKF8MEbAbktUCePrzMQZoXNoBtkqDccDs5QcGzv8cNBHwCFXrYqF2FZrThHL6rwquC27gbeBbSmpm"
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
