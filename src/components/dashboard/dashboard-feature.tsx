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
    "4p3JmkuDxBMaN1BHsaZK9y2d2SaZeApHvkfxbfjQTxry3TzFXYr5zexprNmF7Q7QbpnPEMQ1bJo3rf9uQzKSojwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmdSTwTnNwxMquDMniY8uURxYUJUSDCM6NX5psrhJ2LxxeUxZqBaqsruP5Xf9iutMd9aFeKGvCpFZ5MambvGecy",
  "key1": "5jHXrTDgTgqhWDPEgBP5v7d8a3GasFgco6njwPgryVqon2tcxxsCrGZHKCnMradm7jGH8pRyqRijMJuNDFetG2p",
  "key2": "2RK7mxivKqP9mPwx5gbukNqBJzuU93DFhGEEPiPewNiGuL8zgdbUguTtaDZfZvgwGYPty8cxV5qRvYtzTePcBqUY",
  "key3": "33bDcSDR6sKFVmiPP9c59mH81Mhnqn8hsLUBEsiHB39mL1cQRMFNcteHJNcU8J7qR3JmZqEJcobo9BHwzvbC1dnw",
  "key4": "3iLLgbtTnbiwcAD8QrJG1pebFJiW6CmU6adc52LToqnbxbiRuaQ3baYvoUBp2BkydfG2EVYs6xy87GvvPw4G6ueh",
  "key5": "fQXwkhTNC62H8rxpw97ASX1jaSZErxkyY1kz1vR4oCc1hDh3euDcwDrgmtP93j3fTKqnjx8iH4fHGPQBtAJoqkB",
  "key6": "54NRwa1a89ybmAX5X4kdXyvdW76fArbEXAHcqzwTTCqNBR8aqNrmL94TnZWeqDKwqKk7xE5BKLW4BHsHYAaJq6re",
  "key7": "2VLJc1ofL1u1MvFaavbqqmNWPKTCwYVMbfy7phN4rCEXsnpfaheeXvw5okQMqntFVw2fJGD7wb4rfXxGmEsTXVfT",
  "key8": "5Py9u1r8niY4iGj5dpwiTjeTV8uqaQFBF2UUcy8bxyYBWEe9Ew3NMqoZXCkNCRnsmKBTwTRBsp5CWE52gREiqCmN",
  "key9": "EMt85bFrE42NGGUuLbVxt88FQjNbPB3UqRRVVTscPy5hFKFv6D63h7uQvrw6CGTLUjLqYc1Xn3Q7pw4vQ6aGL7Z",
  "key10": "5Pw53yYPcmb7j3VsT1Q6yF6Y4m6P6okmyrQVbTP5bgiQmdUstJm5YzVn4Ef66qped9yr5mmo5Keus3ZNfywqN7j6",
  "key11": "45cXLp8ggqzaMq2H75NWnewpzVoBYur3aMLJr9DkGxqW5XLFVZEUKkYsvwMNabaMjufRMVbHqLvdkniX7ReTMa81",
  "key12": "23fUw7Y2zrCfZsGh1RXJreFaBwQayE88aNJp36XLZ6ujfmj2oWJGzRfuyt5rmoNf9HX1rwLmL9RQxUgnnRSa8RbX",
  "key13": "3fvpxGoKRdpYR99NVXprx1VcdgU9qAfuJfeWJ6BPgRHZ44WgL8ZNL9pYpakWRWCBgCkF2MM2F7iT2fKYXUF2BeqP",
  "key14": "EkhdqbjPDsmmgyHgXSRmCSJLQcpyKRzEVXFotX3VweBat2nRDtnvptUQN7LpAwe3ncpQ73titHiCZmgaZ79eTKh",
  "key15": "4uYR7m4CrLRughSCYeWgATSRrquKxr4MpHrzBRf5EYr17C2XUCKNEPd1D8VnpY35sCSS7pRuyhBYT6txripB8zzJ",
  "key16": "D4qk2NZ9bmPyiVyLxfZ2MB6Jp9TLLPXefRpu99D9xztDxhd83qH4YF9eH6kd3gnCG8ox3qC7d49wdMLuAMniJSc",
  "key17": "2EzTwBKKEWKFBNvXmKA2Cu2UKw98Ng4r1TZNiS9Vng5q2rtL7ECrJXMQqThYb6ZH3MD3YAyH82H8Qb8pKWJKWDhy",
  "key18": "3CevWjsr3UUTiSb6whGiQNARgPjkd9sX8euaS15Vmng7qRJvJAEfddW3sGTB6CvNpBmb1DRS9u1aw61ifUABQimq",
  "key19": "5ZeMdoUVUMCDNYQiijZ5Nc3d54VbYJj7DEVBCW6nJTH7CokNtU28vHSQJFVcafEeNk2gscm98dhVYa2S64ZdrTDu",
  "key20": "2UUezDkAX9Wx3ADERVhJb39sMri8XWSaFvhhGNcPmeGK7UwrQ76Z2LEtLF3UPqQzkHWkLBSH7c11pnStev7QCtKG",
  "key21": "258QeTmM1kW9XwLK88uPkFcJi66jgQcCh1QoUmkKxhSFsZeuqVqq1U8SDbsX9uhwx9ZYzuUrEoN1fTPqYpEVdvjo",
  "key22": "3vG3mBMAnyB4G2Gj7puBVC3cndAwEjZonihLcXj9PN1bRTdHVzfPL6Brw7yLe3waW6dq8N7xCZtcgDifp5CZYq1o",
  "key23": "5emwGhwXx9e3vVqBbC32Qsos6txNbpjydvjRUTsr9ABBkKP8Vr8PnYzwgTJZkovD9mAeYiizmUsnCrjSUcctWLwb",
  "key24": "3dmpJF78YVHmdSAFzbyCjkAL25uWQzHL18WMkBTDp6d1kPJ6fYDhBotqzt18818TqwygfDgzGE2rnnVtrebgYGoK",
  "key25": "32RBuCHQbPKSuPRcQpCDAZHc8xCHSq6BodUeHtiKbKK23rtbJb9dSmFvkrbwxqCaKwSHEWTgYX4DgxQN6GEFTSQG",
  "key26": "34EoK4FsR3nr5XPL2QKTfGAdP6MomdCU2oN8NdmXWuYFn3YNLkRUBkvfatM5ggVnuK9XS88mKayMw2Jwi4ojtp8X",
  "key27": "kupqs22C1wy4QXsG512AY9VgzApt9SmfuFfVgnij6jJUwvpVTH3jYjXQqfhwpEwhHDd5431vVsgnEPLpFZ5mVge",
  "key28": "E7oRtLYmP7PAGS9Y48N7RWhwTKBX13C5i2T5zKfE7cVVdzNqYMr2g9Qr2cg8Lg7H7UZoCdL8iqB5KYfnjUimUnF",
  "key29": "4P5sArKQwCKx9FwVgozBMp7YK3j5np8wdSvKm5n9kptaA9A8JukuvJ8tBL7dnt7Mi4PQ1RkWBVV2cA9Rat1QjGPH",
  "key30": "47PJX8WAFgbJ8zzeY6Ho7r2BTVp1t5jE3TgeHKdPkxj14wqFWHhUje3YsJ1BPRvm1Z7k4sU7MEG3MaQSyLr6Qx3M",
  "key31": "2ivRF8WpDgVDmj3D9dELKjGFgJZSHKe4nhgVddALQuvEqAPqYZLps84RikdviqRXqHjz8CTJLuAKmiifWK3ik3HQ",
  "key32": "5ZPaSDH4AaFiusJg4joHwAzxuVEvCx1rsgMEmrTeJsDDuo5bXXqfhdp7pk2dLrnAGJzwZY8JjKhASYUFeQq5w6TE",
  "key33": "SLp4iNofL11XqSoezJNKimyw6N4wHqxN2g6vn7KSRmHKfDGF1xkcbDGjuC4Lk4oPLBRgXF1vyAQNNXCK6jPGCLM",
  "key34": "5ac97EsCdQsietEQSW8aRq28tMYBHUHMhBinZumTCDg1VBHR9zPbMNbrQmMu5Am11e5vj3gr92HutER6bhmC4QB8"
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
