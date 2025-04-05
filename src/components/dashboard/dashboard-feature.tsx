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
    "3UN2EYAJ42D14pwA1KoNKapHX8rQ4aQzfudUiJvpZySyoNtjgFiXVwgYJ4wTwon6obxWBoLLckRxoAq6E7qicwHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHX6RuiNEWSTsbiQLmA3ZYzi4JtUBxkPwRkpVjdRR4ffR9EtHgDZPvzzWcbgB1uLRRWahUrWWu9bpCV1PEujvzR",
  "key1": "4DTc1exKasAPXS42yBVCAptVVDfcvCXLp3f3t6AEVmvWbwxsQKMojtrVHdSAko3pdCsvVXdyGW84HuAB5u2w4MfF",
  "key2": "3RLcb9VZeJJfZQ1CAEToHN7s9XgT7NiBhnVBfmQ3E9zX1vfWUwWctS1UHMEhZkJFvEAifgUodn2Ua6nSYikEQM15",
  "key3": "4AL1x7QjvkN5kPZdKTscSijrn5zFpSBAcionqMzVvRwfdxe1dJky4wV4ZJ7uTEmiNwHCf1vgripFGdipw45gqw97",
  "key4": "kLgMSxdopzt32zaWa1QFaE3gq45irLykmXTYQtHcXsHU4uSWKmcaBGnx1vLpwXpt6tYnJ6aDWZFM87DmuMfFyfw",
  "key5": "z26nWi52RztxqM8qYDVxYMcR3faCFBN3sjwZLjCoGLpW2ibFa9mYUdfMUegt3eSBeMANencWHygHaVCHcKjGj44",
  "key6": "36UE5P8neekbNh68UYzgp9CbBR2VQ7oH4A7MU3Hm3ZwCYkU3R2N1bB1vjj7Em9FKqssjAbmY6R3Xg9xAzqKWU829",
  "key7": "58RknRKYvJyieKBL2R2yuYt1JUUKZdCMd54Cuq9NbkRrqjDXanp39wFemJoLNVrfyDgvfssQu28HVqtZCde8U1ex",
  "key8": "3ZubY7iYWibYrd3PnBNhHcYNpKfHcfZAxvrzHrguoFXpbzMbohkLHW1Pptthd8Aik7rfrvTJcYH2QzbTdnJB4AZB",
  "key9": "4hAcDhLscUQ5seBA6wZQDKf8s5mbB2auur2sEvQkYD3UmC8akxFrvSBxpyjqS1g8tUjUpmuDCkghKbibhPzo4jT7",
  "key10": "2y3YH9CMqJyZHmvoU8VSBgU8yxn7VKBL8e2DtC5QP23fLAW6brLqiepfb3KHYpRwJtvRtG6okw1vA8wc8AxHzN4U",
  "key11": "3gyC3B3RSpssmFURwU1YWzUdBLSZW5FPnoyvxYcZjPTJfX2ttnKmCgi5uiDFj2W28GFdsL1M3rHmnEhhBNkEf7S7",
  "key12": "4HRrgKT5qmh8nfyxBw7TdJjaiqQJqDcAgFNA6csJ8t9inqvxRfPhu4oGeHmrDPZDntaCDiXE51D8LpyyDtNH3Koj",
  "key13": "2iogSzyLnDuc7tEKG4UiXSDiKdr7iXZfZWuDSDYfYEfbP2ahpXHNqoRCBfHupJRukrjkpi4QmDjFfTPFaMkWTLup",
  "key14": "4YXBm2TtUnng4QtdcbxcfBCeDE1fCeYf5XaHFjnotGFtfDCVyiiHFnLriTmeXGLq5Z1hNixJwsDYxpmcC9TAqri3",
  "key15": "jHjwmS7QjbXTeKdEQTNNWCSK7Gva2iorq9SpQbxrquBrQ6LP9HWQUpq8CEYqDgVkVyTAVNcdVxdwBKwrgT1sNim",
  "key16": "57onmmHFuwuGC222JHf64rmZtMrAP2EATwBfDgibdMD8Nx1Ed18eSq1fKXGJDq9ZZ6cfc63z4VqprFbDjZn6JvwA",
  "key17": "57rcRMjgDaes2VXbLtx3wQWnA5d76D9XdjE8FkUvvH93LK9adNAFVFVVhUBQhhLk2hbNEWQ67xShQMuso73zt7JA",
  "key18": "4dPhZWEaa22UiZb58dLDMAHgPBzd5K7Ppybuh34zX99UdhVHnrKAvvYYftv9MqY7tNmUCvp5U3rdC632A1kmhBnt",
  "key19": "362brjhC3XDusWXTFkC28gUMoYecQATkQBdJXVuFmZojaz38ujv4UfgtBZX1LDXjG5334D8fj12QpnCpS2F5wv3k",
  "key20": "4HCaUaqLRoVBAUCLKmSKr6Ft69oSKdAmCK3CS4EwfB6wpkj27uStybcqNSJSjde8BWddUiAtU6H12H2pUppDmyZn",
  "key21": "4tHZjs7jVxm1Dbw5nCTVx2WNMTXgvT525wqtUgFQeuE31bgY7zTi178k5XmrdA3F9V7gUjXoZc7eWNefRiYZH5YQ",
  "key22": "BRg3CFdMdw3uPNe8mxf2NzuqzRzZjhzQbDcDYbG3RwFtPDX3NL3a6u7mejiTwvdSYXYrEyhzcZtW8AfYpmw4Y1f",
  "key23": "5C3fkMv1epJiQcp2MzA1xGwa1MGtrzM5RHUzT2LkeuXJRqGzW3nbRU6wUst9fnfCrZJ753oM5cZYyLosniQTkgYu",
  "key24": "rkTYSChmPAExQXFhqPoRYM4KFWNCTPn8vrMBSMpajF9J6K74KYdq9TxAiqypFDpoxomS5WPVpqYRVmNMLSKtEZo",
  "key25": "nzKfGsvG1ran7URzyr1jaWTC8x3jSRpbjvFtjsuvwivk27uts6P1T2iTQNGqCSgfzgeCnPnqTXL4oxkaXnsgBeL",
  "key26": "3UHjY8YQts7QMdu6Sncf8spdXoTKSYrr343wxX6g9aXanaCA9acRK1C9sYKLfdojz3vzgbAifAjVGJV2TfVPtMZZ",
  "key27": "5omA8841jPwUKMm5zqoDJ1FEp4V6zYPBKcJnQrTATRodpyCyMyTNxYGYGb2hp3WUMUNoJwgQQRxqj5WVRxR8bpGG",
  "key28": "2qecxD8WXK6taEmHphAkQZNDsq1isF1aJvZx9WDJGgGTuLb5qdRuoS1SaWATunPWNjHa1oFfBRHgeCBaKCaBanJS",
  "key29": "5XniXs2SL4pmouJDoasiNqjM6DzQCyVxEGvZLRzt4uN9ZgEjpq9BgD7sqBAzZGPTeLw5Lq8JtFnqr9nzrtcGvMZ8",
  "key30": "SarpesGWGJEetrpfhrLpn9gZDGUpRVi3HLBTMTJv4hsJCDLByL8HM6ciV1WpWFRLhwR3h262ZmNGjCcZy24V5gq",
  "key31": "3Kz6X2X3qmiBqjJAJv69Wfqju9dZfVKBHUMssvQtrptc4ezCLcK9AbvSu4sEKSfxK5pvrBmEhRnxoCaUaWywnjgM",
  "key32": "54RMEheCcmZDYV7gt8U3tcdEj3ZH7k9mDXyAUMaHLX5RbRhA7rL2PqhQkHCmQANDK6UvWQQQvTT9YehFYJLAPesd",
  "key33": "4MmkfAMBBfyYWUk8YdfjE8B1CJfYQ91Cz6eUTWpKKbhTTweqMnrNKoboHctLAbsQjfFdB2nuuCzxpedKKzvDPr88",
  "key34": "57idFpLvC9Eo8Cj2XiUXP6pWUHPYaPm6BT4SVZXTYjKV4Ubjc3AMcKS7NHEHHapad3uVf3VnDtMH3k7miR1JnGAG"
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
