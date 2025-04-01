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
    "3NsuNLW3bjAkF1gwYPG3LeLnNB496TAc9ua7dVit6uotdPJMe7ns59iRV9E3i7p1d2Fg9YX1q6S2R41ar7WVcopp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7CgdhtFYuc7eCBe15jKi6N94P4P6EruhgboF7drBgd79iSqESbkSpW67yrWkz4qmP4t9u1xUV9hBGSDcz4G1ZE",
  "key1": "3SmNsGpLTdjWzSAwnTVf6a31XbgBVSVS4hTDAGhsACizxwc3utCsQo9JCfsmvmhznzAnZmSfY5NnvqkrpoqTcf1H",
  "key2": "227KuWGHfgnfDfEvRsEFhduhW9X7cTP27ELzCtFwkCh5mbawu2FvZeYMhJVAF6zHQ7vYCQhCgmM8jcvgPNSHhx5o",
  "key3": "2nJs5MSPNK8PRXfpRb5Wct5tRdCB3dhw9rzESTYJw2VezJ8prL7iGrKezT1SArHyWbE41yFDg38cAr99UH6ytUje",
  "key4": "3mDLrsL3RiGN1rJLxFiKR7nUWVjT7Ev7bZKTY38BWC48qDAZsWN3DnLDMcU73eJCCav4afD2VozEh8ktL66fHex8",
  "key5": "334a2TwhDSGmu2Kg4kzSbNGvF3UtErpECN8pQWfaMERz7zYwFPvwGtcYkWaFo7pnGAARk4YvNhB3Dsa7S3jCjVZC",
  "key6": "4mY1zmMQ7FuHBY223BxHSNggkGfETeJ4xfQFv1qfYewVSJWtXxbK574HQQUQs96agnvg2LuLFqcvNEfxvZziqcL6",
  "key7": "3MWSqB7wzoStj6D4pc2U9LTujmN8VGoK8BDTKATNg1pfP1ypXqwkmkV9YqvZFBeUSJU2CPgmyFVsvAMTLrnaLXS8",
  "key8": "126PTcAd86zZ8RNiJfUT2Y7E4s6xrTxEY39y2p2gvnNMcszXgptrgZX6oAG8nDMUcv4KDdQcdcVsdxxZ7nrCRmYm",
  "key9": "tvYmqGDS1dGSNaZjooKxeAc3N6xmZVi1UYJsAci5Uwinhx4rmHvMTKvDCA3rUhAj5MfHM9wCaHB5VutpZRW8B1L",
  "key10": "4UiPticUQCpWSheMGZcCjRXEmY7CwqZQ9DQWBHrFXtZBA6SxtFyaMexdBkChMRYMHJiSqMk1YGSAGFQM14R55Zqa",
  "key11": "B1VjNr214V4Nzho4mJHtcmRcvKGFdRB4JuT8tKsiq4TV2Rpb7bUEZfZ4bkfKMh3tyNzBZj6AQoxLCE7PNF9eYDa",
  "key12": "NEQwhKpLbyMyZfuUzuP312XwzY9y9FkyzG1NDzUdFpPKsmkbGWBLasr9DQ11tUHGaN5FqVonjyWtPg6N6SZeRcW",
  "key13": "4iayzV3v5HqegC3BAZFmWQmYMXrc5QkeCEJRABnqaM46gYotZCQPH12wXDeAksv19A3XxiG2UEcMEPToPq6iPyQS",
  "key14": "5uAfbvnPnsf3MttKk3deGaRCfhMMPnd2D9pbSsE5h4vfkyrP2iKwtbrs7YRAi2QT31zAhh96Fta8DorcVMzD2t7B",
  "key15": "3SuuGgoL4Qa2kFyPZuQrL8nMjf5TPNY9NAt4mvtHuV3dP7hPzMC2gNB11TBXFxvuFXQe7jg3oYYtGiFvbTtHGLj2",
  "key16": "5K3xeWULuEaSMAAWBm7jPpmZhbFbWBSYHqBHn4X5jruKaVm3zqKjakoLAd9L55JQ41KCFwq8D8ZGtx7tS9E7YHTp",
  "key17": "RbsWXUxaaL9gvvve8qVYZ3HSenPgjKQZ4fgWueAffuZbf7Mdk5aWTVERj6XLx2Jiy8gaXy382xRdjumCuGEgzxg",
  "key18": "4AatTSyXCRHhG2VfiXTXUa25VaQ9TwXjr2XrMiwTSDwyDBGobkQp6VbdwpvM2EpTsFK2kcEf3BnMkcrPJJu1uwjV",
  "key19": "5a9eDLvj74KKh1qdecgjE5JGa2NV89eYeDV7BZGJARSGWt7TZUyaZMC4ex2CcUri22Q4x2PXxUs6FDgJpxnH6vbi",
  "key20": "5ayXpHZG87yYAmC4RPRxpBXvSpTPD28cNJWFDb8zVqo4bo5otb5BRmMux7dYG6HBcVfPt3W3HQHt3QYGLeXRZ5wV",
  "key21": "5ibYcdZikifNPWFg8YjTdLopNRgatHZ8qNHgdKtAV5PhheySQS2wJFyFNVj1w29ELsGBLFWsZfnUXK88VWqj7ob4",
  "key22": "2ekQiBaTwdztDc2RbpLZm9RfHa4iYQAT51z7HgkQuTY5JaGgg16NE4Vv9q5cLMZ4HJ4DKTLGfhpkeZFbTEDFPuRG",
  "key23": "5y24ciu22k6g9r9CDz666gzvt3YF7uW7xD66y1YUCLdmaMAC2m9VKERUiW51CcpbEbkzAqpqyF6NnxrdmfdjrAcL",
  "key24": "2omrfPVsr17AVE8fBwiT1cLMGFsLoKYFb9DV8t6hpufVqTGkz6My2Fegdj8Dsm9L2bLJ7CybQFSuh8qVrTpcffFR",
  "key25": "4vhXBAY9Xec9GMyRvBotfDCXoVVGtNvbT2Lzr4U2fjr2uBXSQUV8DveJ4prGEYpa2zFL2jymuabUTJ1kKpp6AX7z",
  "key26": "38WNBjpdp9so3rWGJWD2GkZWeLssVEW7KEnnMm68bzvmDbe1zswiFHd2p2BJgjfJWFXYERyVHRHhtstwa7DfTshD",
  "key27": "4Y25tkJfP3NCwRgRSDNbEvvtL7cKdww9LEQs9A5Z9HpWCXSRF23Z2ZuhzwPcBxQznTd9mTFXUvFQtzTQ86fcnPZN",
  "key28": "2vxJQdWeqhhGeeWEN4nch3kSK2v7gNAWfrnMATyNQREX68HNWnpAA9Chn7N68v7AMfXxs2viVKuR9LhoNuhC3cSr",
  "key29": "2hz4eaPxZ4EReKg8MjTqZaQubQG6JEL7tpEZtWjjRFwV37RGjo2hdtrARTLdMDjteWK46LZPjH1JRj4c66i5DwLa",
  "key30": "7FD8DwMQy3ovcHudTZtDpiaAoMsyTZqvxeS4dZeNCQP535eELxBZd9NFo3tWPkGp8bH8bZLu1iP4c9pipHJoEbD",
  "key31": "4GYxE3RbXhhJ2ajpH6obseamV11tf6x6Gz2Vsrv6YX5ed6C2qgVSAtMm71Kh2MN6YCHtwuZ4hHFdnBMyYmK2qeXW",
  "key32": "uqjLGaSezBBn2u54pxqD16BsddCgAXCgbynAia9RjxUTGc1RSmQK14EifWhQikXisG4yJEhoLe9Qe1i8GcJ54uc",
  "key33": "38yF4GFVFSMRKK1rnRTJMLU2iqFdkJHSQ6pZT82KPjHHWvWj9qZTSLSLCubpEzJjd8BmMypqMVVGZ8CZmuHfZDwx",
  "key34": "eW1dWx7AR4gZj8ByPuLD7FDHa4jxLjq2VZKbVadpZDsSsbzgFhVy5od8CEgRKvkLtAZkLBBC8fQFUXcWMWXNw56",
  "key35": "4E9RGPk6EfRZjiCin5cuboZjYcg2LUiVCvVw5nnaDJh8kKKyk8Eo5PiVqzf17ixoVXB2c7RQqHcEcu7phXpD3aAP",
  "key36": "5eZqFMmtd7AtHqvZnAZrmgMZkhy2qY4vrN4Z4w2YVoxAT7NzBR7fu38Ui6g8ygo9zTGf9phn6ev26gSrRC5tkkJA",
  "key37": "VXiGdMMi7oVoCCyeYb5jf1d3YyEBDEfzjExM5BS8LxwuAePMdCx3hzVSfAxswAfsPsyExWvr8r68mVnbwakZh7S",
  "key38": "5SyESmJg85LsVpYMbrKi6zxu9TSaDt3KYP3rYXTfeGGfxdUU1EFwG66oX57Pkniua4ASJszUu5kfgEwX59RN4VDb"
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
