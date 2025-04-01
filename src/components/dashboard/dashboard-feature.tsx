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
    "3LiJYCaHXzrpLB3tRLAiVnUTyKMEYCdz6pmBuvZsXkLKfGzi3vWNquJt3jQBCyfHGQQzszb6DWVXNYe2DYojWaFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kc95NPSKuso9jjcm4xz5qxaSmEPiPbA6K977tE9BCyA7D9ZWjRyamq6bugxtkRMZhwcddqAtxUg1PMSTjtMGs2n",
  "key1": "5kZy33dHKEYWbHhjFFYyjMEUREAHmnuXKbMZGwuxy5ryxZzNHdaBVHdMsJJC1boZ3gFT4M2hY9RND56MiDKyArfo",
  "key2": "2NkcuhdKmWytmB2n9Axsa9AMK5qXQBDCNvrWSU1dWn5xxK5Yh7c1AwPurPp3nzenn56oWuJcFKKuQQc9MQa13ysT",
  "key3": "5bajLHrzjTjqefWuKACUM9ukh34eakVuBrfcLJw6XY2J8k4bEnF1dS2Qg9TnfKhoTyhHfjh4kFVb3iRUuvBwro6v",
  "key4": "4gP6dPTicvJL6agg37cGtWGBNM56beG6b5EMtyaeHZucMqaYMNRvyQDCLeUnJKbq7jsakPLfFkaCdwA23JD1aLtg",
  "key5": "4cXNS9egRANKFRRaTqkcsDZg8jeeW4n4VunebgPfN8wHVwJUZu2e89gQFQyrf2iBLYWXRSUgikbmuPokVnhrdnDh",
  "key6": "3wBzfFkJdgJupWWJA8Zscv6QkGfqvd8NkR1AMHdBGPq1MBfdRyrAscBQfo98bVr9opUwmFMfNyxxbvdWmQLAZuMr",
  "key7": "3X2LmPHcTpwTvBtNfiuo74gMvFH3FWCcw4bR6ShCdVPee883MZ4WiuHrxmWF5egSm4cFJtZhciwcmRthwPNGn7yV",
  "key8": "4H9jhvkcQPiw4VNp9pe9Vze9oqqYsdUAZ3DvZbWCLUTX6jPU8vSLAWTamZQjKcd7FkyzRX4wgi6obiYRVEcjznLv",
  "key9": "2SHyah9MTWZbihk3P4GiZy587iHU3GArdnRPgtxAjKBoVjqnuLqQAcmXm8b5syzhgowJ7ufLsCkjnm1MC6v3EiHd",
  "key10": "4ZfWjnUxqoNcgF5sXgH2cgVj78WG198M67wTPm75KK7epW8JzkoQKbLPV2jKg9wj7Bj1fX6XevaDUfYE53N8CksG",
  "key11": "3ryRCb5hzUhcHxoA3LQrDeCjNuwy6EXUqrk4RHSs1JTehdChFtkyp8yNiYGFrHz7uqtqgsxrG1uEjQyfK8L1Cb5e",
  "key12": "5vhNq6cPijC7uWfwyn9ZBC8c7LH7FZpthRLgGLZQuX3CwgACfrxzobVZtoHjJqS8KYtAPvEXwHZzCviM7RATad9p",
  "key13": "pmWSNSVeum6ebXBYQomNLD75BeNHyEV4ppD1CyZc3p5k52hFovofb2i5xB19A4vPuY2RLLP1Y3JeXcCJjXVeXSR",
  "key14": "2CpfFowYLv3PUP3VuY81YcPidhgUgbdZfFyTZ3RyjpujP7An8dKbLGQt3BgDFgMqu8TskLi2264qJhMU6WM777Mo",
  "key15": "Z5ZWKUa55f71wqhsmpapY7px1i1MksQ4CzEYNfMDMdRpLJR4kNCzaZypfpRV1QTinEaDwKufn1xmCdq7tuUMNNr",
  "key16": "3BTJQE6gFnsPNvLWMNhZS56pzycUYDUw2VqxiXxbLwpV96rDj8xSmegKum2EJFApj4pRUDrEZJduv2U5yH2pdVrg",
  "key17": "4c2kNcnf6PEH4Hdg2sXFDJyWrnoBd2xvVpeqKqPbdqemfT6f2RgYvwWuiNqxFEKnCRqws9W2i2mtFEt8qS3Q2PGh",
  "key18": "4BE5JjEY1MPGh8hPerAhWsSKu8VZpzTPqnWLsBYW1KDr4vpHaQFdxHyMuidNuhTUGk4rkS713Y3BhEfMJChrFV1A",
  "key19": "a5VKDta4AeiYwTvDkjSJghBrgTMDcebEKfoP9uGoJqzJuosdkY9poWgyYKnadrDwz9raGmnEg8Xyh8QktBeZZ8Y",
  "key20": "bybQh3qg7UQmP6ckVoMC7T8BChTYNmnJeLZcjuyqTXNW6hBdn9my6G8AEUrBYye66EsxY5hjHEfjuHvNBettqoH",
  "key21": "WhXs7RcEVmxn4iWxFzPjXXRcR2WV7FqdLyxqNTBjg4LPYogG1n9peXc4W9x4crFWfJhAMHQFY547iRxpQzHemJt",
  "key22": "4waQfu6eGKxBjPbhsZBHnpzZXLEZipNcZVCDkGkCwmPgQ4dX2wVxY59f8Cj8hiqPJH7fxRjxgxqY695HbfNVQhK8",
  "key23": "2odcwRA9aAgrnosJ7jkqyMJKkFU47ZNASc6dBivUrDZxvGEJ9gXcKSmt5DdRAXmqZqRSFG7oDS1QXCccTdmUyFPA",
  "key24": "2X67vJmRr3XjBtjLb4P3QGHMASXHbcttxp9TrED41Yc1Qt7JFmDjmniNh7hEjARKMAmGbx7QW2yUMuLLHReiWbQT",
  "key25": "4L49MH9X2EUVELaHDq5bBeEXWt6qgdZv2C39JKpHe42noxPfLr9pzBQDmx3b6kkvVSvb3sCB7wkkSeEnGHjbFNnR",
  "key26": "4QSSncF3hoYps2xXaANvWf3wTanewP4NXrw8ptt7x3yWz2PDhXQCYmaQRWL2KysYGeUzYPkjFEvQkDctTYk8EBTF",
  "key27": "3jf4RUfd1veZMKf17ovosVgmMRBhLEq5aUK71pepUGkLnAUBVwJn7TBsRjN6ZD8yffPP29SHdoyLRvtUXVyqQU5i",
  "key28": "2MVSt1ZVLapnNw1wHgCj9E11FmbrR9P5aERtHNr11XPXy4kKYjSgrKRTU6oftd6TMp4z1YMcYXvpM6wgrhwCt8Ac",
  "key29": "Qcphz7oHx6ZgjMpJdZUbgWTh7AtBL9sSmJwFJjxX2iq7Bs6VvpSbnbEBnA53i1EGQT2eW9xsUb1xdRCEYWEdHWD"
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
