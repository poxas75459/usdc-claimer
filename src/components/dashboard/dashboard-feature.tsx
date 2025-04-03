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
    "vBvzS5xLJHb3Es7NvZHCEKKoygrYYCE5tDzFp3X8iJSVFFTbvEFhxDuFoQmb2hxQCFxWbqGzBaB61mWbsrP9nSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389r2czbQpgTeJq1evSZUKQcgcht84Di5Wdc74CbRnZ5pDenEGVCJc1i2nHP1BFn2XdwoSrXDyWi4S4UXaymGCwF",
  "key1": "2iGQ2AS6XyzF1o6qKNnnX7Gp4rvQjC4si74yWM5Rsv2rbDfqdsMRZbApgeSbre91PvG8WKYeva4hpetD7BxXGv4o",
  "key2": "5bixxaGHfJStJJScCSF4TuuT8aKJAhc2cgtGkREBFw8rDDELtBUQb99YEYxNKFS7g8JTWcFgLM6tbPM4Hn9dVX3D",
  "key3": "52gc2BmBzSJQH7xdBEjEkKgob46EdsDzwbTkYNjRM7KC4uPpW7fKYPrrbLXbYR56dYLjV5rqd5gyervpih5JwnJh",
  "key4": "3U5UaW7ZxQLRSM9c4xgPbiRAfSvt9M8eifjd4DrBaz2K3ZUL9pHPpk16XypdE2fkDewMmbb7Hkxop6bJ2wQUycTn",
  "key5": "28XjgWWQSXqsNeUyQ76kV6GYcWkehYF98ENt8x62f9kqRXNxXzJNa7KQdeuoNdicvgXRdaF3Hh6N5ocswPCbBpXy",
  "key6": "532SJgYhan6q4Xd3KdtVfFTeTtSqoHw2Ro2GvWBCpxLoVj7dxoG7Qcn1Y2WKjTFkFBPECA7wQENqLcsVrA2TWQdE",
  "key7": "43M5AZQc7wDA2ZUaHbtrnMxybFceaxC3HkoX4h3ZwjsMFHdzTe9VkYtiZjK6VrHh1Fxs3uLLdCQGr2zxAcnZDimp",
  "key8": "5fRnJBpnuZ8zVVUYeSxPTe4tLkcdogjbJpK4zSmsZLA97qP18u73pQeg4Z9aVpSkfSp3KHHpJbxsP3wezB3SrDdq",
  "key9": "2Xb143ysphYVNf9y9xjeg3iRGtjAAj2CgG4VaNBTG4MQbS6WksqAYiMRE8PcK59mvqZAeyVNBDxxM7mQyvqi8RZK",
  "key10": "4Bx3gGkXojA4RLkaCrfP7abExkrLDnYtCS9yR1ZTmQpTEtaBYw8kZygsAiScMP37Mq6WEukUD7UwcRtFrYGYKEj8",
  "key11": "nhLwzfjUbRMfQKxkMY3aVyxo5dX4eRr4nB5TzZHDqBv1JxvZrYYZfK3kjtbVdQnbtV11cgyxZxkgSuH1BSYs14r",
  "key12": "Atwpfqeki1JJA9hMMpBoZWoPBPw8X1uLhQgf4HX2eorBpjdQ1MiSxdwmTZNqtJDdCeYsGxodTkPNQo2KAFA8zRn",
  "key13": "5wtzvDGh8ehE8mriuD2hfNMhWFaghtcK2HcKWEqxWRrr3Ywmze5AGropJTRs54Ud5BKPoTkXF4XDNTmQPkwJBM2C",
  "key14": "2WD1GCexo2xXhfvac448hK57nKdWBXB2Sa7Ay1c82DyyfgDyHd1QANUzy1JEot5F4KkjABNb5qLtEVpEoXfPJwNP",
  "key15": "2DxXMTs9S8uQoctFEDrvMAWpkbPz9rUj3AYBrTGRmoxtU99n4vYkx3mYrw8mCkhSG3aduiESBddPac6fNCevvuB",
  "key16": "24XD8EEnNXxQSN54TjccZFy4sgfuFhcN8Q4Ex4fnp1pviPXddwjwEnexfBUqTxdbdHDzU7vxxa5iYtcg9gbmCVaa",
  "key17": "87XUwnSnBtM11YsaYDppDWkGbELUxn9z5Gqfg5Q6xWsvXzfVDx5HqRpVAv6y5aLRQRRHDQXktEDqdkbNc65zVRz",
  "key18": "2MBdtXh6RyZkLjwPy9mHtyZMzcijQuM8AqPsyybE4QVLuLbdRcbN7Mg3qQX4jBSnW1cBH69GH5gzRCskrfUY3VBr",
  "key19": "4XT6pCacsdpVz9fF8CWzCbJ7QhxUkkxwRP4vc68iAeQ4uAANU1EcEFJGqSXM2ZZoVddJWccqbwbfzq3rnqUioDUs",
  "key20": "dQGe569dxCqnu5vK7azVm8yUALrq2fxWdjNVfvnvweKJ9v5a1dosZCRkC5BJhi1cMkDNGYjfzBbnVZ2y2MfNvpW",
  "key21": "3d4issAjjB7KcYYLuSPcXrHSavdmAWb6rbUnfr3Vaabwtok96Zec1r72RYXH6k3igPnJdm4CKvDTaqzcqJFZY1cX",
  "key22": "M83KxLUN1pzb9yeLqxC2Gk6UTxtJjwZMJ4pjRVqYaFHFaXdQvx7JkhFh4eeVb2a5L74wStg3EzRbJDHoFfnuJ8K",
  "key23": "2B9uB5AsmMovR7BjGj186UKjccSAWiv3epV51o8exXCCTACjkYjQbgVafz4qpd1HvaT8NU9LeHXsvcShqSq8Fdeb",
  "key24": "4hpnWiGUAuBDqYkjnj3KHRM8DvfTe4rQbQFbMHi2UHv2sy5YszMcm2JW63B7WwAXjdfitJqU2QKuivMSQeWiycbQ",
  "key25": "5jfP1kkeRkACDuahrouRTHPCaiz1iZaHZXL9xFWKBWvFQ1NmioRJjVtFxWJFG3Sym2p6mxd4bE1gYvcKgJg8Egja",
  "key26": "5qcgSZw7Mee41oqMVoLLKZFvpGVGQCDhwj1EFUMvXvBKpxbTh4xsgok9JjMkwr4p7ECS3NK5nTXuKPdtFRadnDzY",
  "key27": "eJwybawEwXDZN5bGPegTYjDUeZe6H43AT3QTpQQrBRFChNE9JV8TwN4FjHqeADx6yQCPtAPvXyt1eTS4tmVD8Va"
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
