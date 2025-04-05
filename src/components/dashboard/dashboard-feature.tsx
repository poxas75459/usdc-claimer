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
    "4BsGFraRxvWtRSkKdSVFzyTrMfRgsFapQCXd3jQ5C97U44TyFPaEZnLk1aN4sei2gZkhTv5PAfm77n4xsbrj719Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XypvjiCiW1ppC7X2LkmnT8DyMrWQE8fBoF632vCpDu8HRnkJj8kZWLfRQBvxw93QZSZN5S5UuoFCgFXny5Phie",
  "key1": "43wTfsAQbYwC35Y47Ma4mhfua3gmKht9qtT9869yaxK4qEKGX6HqEJsMe1DmP7L6ShGBvD6H2H2Zdebe2TJ2pgDq",
  "key2": "2hBHCzbJXc1cEkSyMihag62gr1EfKnAC7GaBsGF9FMZCFDTMZwCAYaRAb4t2rw5iJBBRwwFFpydwkyD3BpbX6SBZ",
  "key3": "ejP3YLAJqNkyA5ea1Gag2dQBXVwEuhMestgMcSvjvuz4rzV7gTYVJdVe21SXrLr9pCDUeGCjrdadaiA8DUXZcpj",
  "key4": "5HfBePTfkUjg55ZCcS264JH9BcDp56ebdxEkwmUnkYAKmweZKWqZ8ZonQt12Xt5AZbNKS8xowYwc3swJQnGm4Pyd",
  "key5": "3Hkjajn3qoiUzyX2BATod7zqHfzWAuenn2Pgzg3XpovS7ekD4nyumZ76p89zrUEEzJUGsVREzyyLW6cY9232LMEm",
  "key6": "4rBP7wds7xLnPhqM8iVrjWWPtD1f7RFWwpYfeca7bi2hJS547QuEjkRgNpNunRDhTzm5ohK4zT8vXHMeWPZmaNq",
  "key7": "4UkH9Hj4oGCX4NL9ZLsW5yUZufvYnusahd56WgnaohqsdD5MTf8sNZTSbCUxw3J4U3qDwBq2oTeBiQz9v8jKjwp9",
  "key8": "2xvVUsDprVit2SJd77dhfPZMAmJhstdDFHY1dp4DE7EpV4v1SM8n7rwdA1X95rjQim6NngXWrz7EeMznSfGCqwmi",
  "key9": "4KJdHDVwsxsXmiv3Jv8pFsZrhPXPShKYXrJHTevN74y8EQFAweXzF4Le6AbBXgCEvw56Kir55kjod37t4PHt7jjZ",
  "key10": "25uwZ78K2AFx67fti37XmUaTLmM74r1kFpABFrmHS5Cp2RefhRtaHCRW4WXBKyphcC6dwXaixDJiAG1tpmVgWi2h",
  "key11": "4qCRdebVVaUMCuKrU7b7hQQyVasBe3S4huLQhvnAvh5ZBDHaNMXe6jhhvBst8QGq4bdmvbVcffJLp9SNFhDszXFw",
  "key12": "4d3p2JYqJHju8sw4187RFn6q4e1XU4FCBNcYrpAbBBXppuNzanHcG1H2vcUe3ZgHoEKnLhLU8LpeKQ2QCzLs8NX5",
  "key13": "mYpLXd2DSpsXqr8fBToVRDqy8FaGYWs68gQb17muGU9KbVfd8UnzZYEj8Y59FPcwo13ombuLg7ZgMrzzyZrSwA4",
  "key14": "4EQVVydC5MaUemW6qPd2xYqxHjR27hzuTcApjNMroqGuCDvGVsvRcDTUGjvXPLzoba5vqTaMPxxxmmXNxcFAGxqw",
  "key15": "2LupScrYdLNWP3uN5np6BB6otFyzYCuY2Y4ztFdvJ3jediGDttQqWak6f72sgetBSRytHFMMAzwEVibzHcwwG2AU",
  "key16": "ZuKotMAuj8fk8zTR4k2q1S2zBLn5eWBYDvdyZweDbWDsmsaFBoXh7hy7Bp6hQXir6AksZiAWaspKoKPC7tahjTx",
  "key17": "3vSzVE1K5nHUAFK1juo5pxvGfUZjAa3WFi8uVT7ULbEUAZMMJQFUYBZaK1PSh5emrKogknhhmbP3vano9wUxNTfj",
  "key18": "53LUC3Ggyzq3FMFBm2H4XaT1CxdkwuGkVBdLpaYhKFxJy76GNqqjhntobcJ4neNm1FDoCcWurhtKNLADaGGb4Swx",
  "key19": "KUU9vdoxvazpmzuVSj7SBtSkBJtyuNgMgyEQnJZ8B2iDP9szpyLa37DkdUjm6HG5SwqShFFk8CqfbwbmkCkecA2",
  "key20": "49LmEifju7CSkcvbACWpn8UuX6bo8ji6GUMNueQvLwQHp5f3oLwGNTDx83ZzLtisXS9gdYLERWxB5R8ozZBUNTnQ",
  "key21": "fmYEANVq1JUrnFpBLZrwt8JaswPp2JYcgzS5NXT6nsoNEqbotvPybpzwSH5ArtogaE5DWWZ44yt6LXFPp32GXda",
  "key22": "4Zxkm98FZz6zCLZA9iW4ux2soEHtMA5VM3jH5XZThRW5b4sQvkSW45ajScdoP6wtpyetXNreMKXWLhz9gSU64UVQ",
  "key23": "25G88RhZEoEUQ7aF7uG2aX6cBSufS5uSM4Drh8vVtGHY8SQDVQmcRvyhrJqv9QzpQDo2qbbhveHWKgP2TGSZ4wdm",
  "key24": "5eCze9KHdFM2qZBEE7zDyEEVXsM6DiEeoXPiaEePApD1WJu8dfjkQP4mkLRYETRF9EEMhoBGzb2PKoKNcUTZ7fe6",
  "key25": "255jEgpiTKAeQkHnk5tJe1D42JFqYsudvj6dUHVsUig6NPCxEbw4ZbEyhf1nB3XMNtaGcHZUAUFdHgwnM1dmQkTg",
  "key26": "4MPQbnUBC9oQMgn7SzdfP378eKKejzMJv6FcBmF3xh5SdsbY8FcHUpnoq1GJq9H8XJzffKVihFcP7iEauGSendC6",
  "key27": "2XWXB2RTNFz7Cgmd7gSovgVzpnpn4DuEQozBXMG5VJJdFGhjXfXG3X94myvYY4DYnLFkaRF7YZH4WgAy19hNsPpv",
  "key28": "g6Qe5TrXjUYkLBWEEcagpt5sSk5Nysn9xDsoKsGjJpQPzbSJq6MU64qT1xt777mG7iUKyU8rd9oQDePp35HjCoM"
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
