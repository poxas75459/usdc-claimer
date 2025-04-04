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
    "BjLn11fmA5jw86YbR3fJSgZKyhpGHzRp3xZxBLktWWLbX92dFADssfPVzbgXY79ubhq7NJ22v1PuSwj4TckH23M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YL9CaU3HhJuSkuPb4Y2yLtARyT9Lb68Uqjb86gwqBwEnzQvvk7V1TU9wTnxf3addGpp7UyadnfSPfJw1TLPrQ38",
  "key1": "4Bvfdia4Crw8uY3ZJ6q9UCXvDLPonc1ZFG8GQGZWUyPsMgL7TEGBx5N1XxGQ7BGGgRCr5ESwhTiMUbXK3kgFjDG8",
  "key2": "4FwqhN3DWgaDqv6j4DRZGppZJ3oXQx6hYsdrywQA7Yyf3yDU5aKeN7ncSS7bnDH6AGKVEMN6x5tSwVjPs1g813BE",
  "key3": "5oVcvSX3tYpAA7svXrQ4H9Prs7bZ2s4V3YzLQVansTgkLWphpnKgwnFjZ6fRrJkN5dU3kdMWDPup2kzRJQzEn8qT",
  "key4": "4mPxnvT6rBtx4hFpZ9RhTJu8aK7t6N6hjRS9zAYXREf1kh4RpjPHajQWDjnpEhyKRudBrg5xKunGjZ6b1XYdqVDd",
  "key5": "GNatSzxt4mCANPGKSiS4oKDJmeBsqq4RcSdFh2CMq2v25LQKF15cF6k6Rr2gm5LN3q4CgZPkJMhyeGXeHDrN3x2",
  "key6": "4jzXLEt1M1NLnRSkp9r4FainEsPoPTThHeqiKP4UrjNULw6ML2zrfqYiiDVQHJx2GCQ2UFewC9YXtpbhVfbEiVpV",
  "key7": "4WNJjf7hAdnKfpjaWemsLJDLubsos9Cmhg9RL3cNNEvTbrUNa9HpUWCLPNE7VSPJmemzMgqyreL1naF1seNu9tjR",
  "key8": "5hrP3aiwFVCmzh91Qydnr4J57ix8fFZhcznnTyVexmMXrF5XouVz8qvBuMbfCpt3rEAJxnMyYZjw953ULV4yXX1o",
  "key9": "wUmSBkeRFj81EbRiLSoKRccEj7VqrXhoaw1iAKtmPj6Cr7PRwN5aNWpNnFPX8imq3Nz2JRipbVGXVkEupU553VD",
  "key10": "2UNMBYroEB2Wbw1e7GtgkFkMJW5rKk6tdgCdtcCEhYfeG86JNvU92F3CQZ3zrpNhLPiY2JtF79W8UpcRy4Z2zsYK",
  "key11": "3WekR1aSyxad5qrFnE7PU2wgrw31K5yqhYk1K8QqEYLkH6rzFL47zycfVJYrpF94WLTvTDWSgcw5HKg777ijrCP9",
  "key12": "4JC3FeK6E3yqgh2vnfdtZkZhMdpJxp1R8By4DStbmK8xiBpGwMVaxb4NibA17s5fXF2X8CCHgbpUt3GxSehW2Vb5",
  "key13": "A4cF9KGYysWovPEVEABHs7x7zKrVyUYXPsUBMT8uwmFw9Rq5zAejgPpWXKqkkpGy766V8tMwbqmvxLNg7fyciKK",
  "key14": "StRYFb7ZmSgc3U7gS9Ch9EsV8Hug1GD5orViUhAxztwgyWaZJWuPNT1J2opZ9j9eozvTP7szeL5jYGn4nYraaMd",
  "key15": "ZwHESHFFahNt5Adyhzan8zHJJGh6j4sxFEa4SbfZtFKr2GWC415p4pUfLtYSKEzqJdXWNLcSKbakfi9WG2VZQnc",
  "key16": "62TboXs6pU9xnJ6zew7GNejsUGgABQwDgjDqmxRkfpUzNtuxuj61bF5kC4n2R25pwW2NePYo8eWNXQfugCJVLG4D",
  "key17": "5KfPHnCxiw6WnNpiRY2wuFPmwNCqjfu3wibFJLyyToZZbgWSMDgTHfe2h5naRv37FfGXZEtLhqmTiq4p5dd5j67i",
  "key18": "4a1auh29qTm65ib1ZuJrq9pT8q4g8zc9Nvx8yythB9epU64PaYPabc1ePDe9WQ3sWgf2W3uBqJdoebT4VakLoMvJ",
  "key19": "5i9FdQpgq46f8UsBXyYmc6tH2RM9fV5mtpap3R5dMDgForsgGZPNrHbocDP1naPpQwvdwtd93cqqfhSGABUvWyNQ",
  "key20": "4yJYmH5nLWUKeTfNpc1kkaQ1eU9FHDY1XsEdJsiHsuDYAjH9gFDsUKZ2eSLz2ichNhu2GhxhKcBYiDgMGPMjvP3m",
  "key21": "vFz1erbAn4fqj9WsX8w7ebGwdqEkxC5iVijWVx7P9jt6tYJe971ETgqcv9F7iuJK8kxACAUhTLjyz94hMvRph38",
  "key22": "2PWqtbiPiz5h4fWH2Cg2Wx5Cw6RL4SDuejCQ3o6fJjn877VfhyhFKpDeEi75Tb2LnvwNxMcMnqWhVHr3G3xh7MMs",
  "key23": "7NfBorJGkdhksdPzYEKAbnJsSkcK2RTopQzH5ftZyr2siRV9okXFRg6qGZL7C9fqiNnzbS1VWrDSLobQAP8aFaw",
  "key24": "5RnVXZdHyn4jKPjU2UeYJvjsY5Zawp3LJtQGN2PZozr1vsTw2S49PT1RNT9HzmXYsc8WCWk6ykRzgzBKpjLbgnfw",
  "key25": "i1FKjbfPEQuuKXEh4SQQGeizC56LZRNCwneJhwdmb1npAXiVACXVW6hAvATkit1pY5QcN3yKPRs7Vrqh4CgfzXt",
  "key26": "yfEYaLs1nSvjMXWgX5wug1fpk2ynviRsKxTweCeF1ErqFjDHi6e6jJxPiQQWk4LWvHe5MxSaKTu6pM6fqHHBoxr",
  "key27": "8jDFBebFqiUHbhr6bxU8Zuz29qtDKyWASDDERdxe3D7gBnYL6zTAnSf8TFTxsCXGxzGvvhdfh8fcZ4CFhmNBTW2",
  "key28": "5sw5WNxMGFshjFVkvekR9b4Xdpd8FkwYMG3V9hEcq1Pkz4fhhz1FBBeBaKUrAdEEW5QHkVCYXoTdD3gFUNBG8BxT",
  "key29": "3f33yk1squvRUGAtCfNdqaR69rNC9uyzzmj6wcB7Nh5joziQQqH9QAGBT8UAq6obJ6NvFCgM6b9mgc5jUZde9Fhc",
  "key30": "2DR9Y6RrndQwg6kUgHSdEUCXxGaqrKftec37RPd2BEPuA1WQmxbBwuu6KS64CNQTqBZ2eKhvkJY1cPoDsB42LWJR",
  "key31": "WHm1kKqhDV3vRc3Mw5MAVstkAFAEQCCgpv78mUPBfFX1CBArEfeSVHrdgk6ydPnzJtB383yR85w3FzfnSbWRFq9",
  "key32": "5qorAethDJmd4PgnyMEDuxDR5HRqGiGHM6Mun3MJEbCTaWvUb3DkSv6F4yJ53CD8pJw4FyFSs7TYKZqTWJJA8Br3",
  "key33": "65FaYDAjgwBEJ6nU1uSSwdCxtTqyDM5aJCBD6zWca4jVbAGgAGtpDEtE9huUs2bqDhuPqU3LxQkYXTQ9L7v7C3fm",
  "key34": "PqyWyQ1hhRMvjEb3GM3Tkjd8PikhK4WpxQwUi8MNqSGpWpXUbjNLSjT7KUro2TyhpNWpUqpd18DKPkA8pJjFDCV",
  "key35": "33miSxU3yHWdqYNiV5JrkwWfDY8iq6sHaZn34pxFs4u5TUKFnZWQMdq2X8zxF2uH6su4vSnzrEmhyGMEtAXd4qpV",
  "key36": "4KaMKca11ac1CfW8Z6m8Xy2SAGksW8vasQFwkY6ck1u2AZRqMDgETUzb1z8Jpb3qCSgRUf1z6fCuZAMk6DnKPw6F",
  "key37": "2feqVvy19rz3LB8UM4XueXDegpsg6YwMi4tZTsXJqJYvLxVaYvpd7kSGbMgT8yFsgBQToz82vs2T6MFngyXn85mF",
  "key38": "4anJHUHhJbKEQ1zBx1h88S5wnUforXkDc2zSbMZ85CURrLtGwpogkX6gpeBRQhcHBfUv6TmsrQCFj9agM33ZPKSv",
  "key39": "8GXRR4ugtmb8CYtGk7PUWYGjNdjBGQSJ5R1nxojA17pXNpcQXVod8SHSXR7taXiRNM9osNqEPY86SyDsVdgKRws",
  "key40": "4VoxYREp94JLWinGaJn8e8EcJBRsxCPmYwUj5tx8XTwUZDmKDbw1WU3yuA74QDpoAgbpeheVkSbS1Pm9YVkCPB6w",
  "key41": "67Btxo2TMa4pTkeumsGbhQ5EjnthZeX1KbCR6aHh4tSc8gXRB66Qso5rbUoD9PV4HawgHv1QgNuABAJNDz2Qv5SS",
  "key42": "EE3aSxLNZYb6q1kBXfL7E8wAwCBQedvCRpcPAVG4HeCU8LfBn7Sr9vxmkeKnvxhCeukEiMibkVGu9ya3q1YsEeA",
  "key43": "3Tb1jGyT6f4qLdu62Y6VfeAR8ydxSdeTefAqvHo2Td5iBTxNUPHk89zFkT28FVpuyFkuiP4PCBis3dJbvMVz22Pm",
  "key44": "4krFS87dy7s4WUf2XPGMojcxY5cxG3NmNWRR9UdCNMSwT1uLVsL1msEBZ4NcwPd4mVNZhbCENyrgqRysWjHKQXAX"
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
