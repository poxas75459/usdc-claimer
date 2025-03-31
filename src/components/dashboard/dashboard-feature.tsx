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
    "ztNjZ7H42TMBZGmWCMQEsYXC8FnJFopgQYFS6tK8BoB8hpL3QRRYLXjRc4CSSEpqXVhuL7VqQ5yWGXaMjuqFNDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVr4HqAbcuG3jN5nAN6RZ1HsxTaByTKD5h8dkNtMhzTXLaADTcHxSnkU2yhuB3rAqkNyweXKHW6Z2BNvHC3ofoR",
  "key1": "B1moSg8emY9DGLyMdQ5JjdtcYiRNc96GBae9iffgTztUuzJcaQ79GwGmRiNvA48UPConwGgVujg3N3YVkX5wuH4",
  "key2": "2eLaPRsjkE2oC4WEP5JoHypA2xuXWK3gwXitzyt8MXLqX9vocfWAGjKBM8NAMoh6cqQMuTxVxVWdm2qGQopcVaQX",
  "key3": "45AC76fSpSKtEr5s9fCBt9FojvYZuyLDYC2bX9x9LMFwu11L3MvXL9Rsyh3QyJ7AZXHUK85XrVxy9iAmKxPq25og",
  "key4": "2YgRTQeXsMVSGGbRAncvbxLrpCvEh9xarpHpQo5hPG6gkg7izJx1YEXRfDmHiGARt4edTKDWX3sJwJEvqind5dzZ",
  "key5": "51ttYqGVWjTQLL7sM1r7JyfqkHmGFrvpzGFV9LL1PQCBLS81zT9NX1sf3W6maG392i7HuVxh22bZWXtvK1xtr6uY",
  "key6": "4GwgyiNxN1yNvQAWXvFnaMGgFgTDirT12Fk3YbuUHeQJXZuA2sDd2X8ZGoJnWeo4LA3GLVYZKBzE9f1s118QCuqX",
  "key7": "3tzQSB67t9agb5gERG5zwnsXddYEAisTsvNm4VEnCaLkfbHbTA5RYDJW95B84u3ay2dPgL3f5jpmcLGpf1gr1dW6",
  "key8": "4yX5zVr4rHQSwGA3xExB7M8bf6HJJGgF7UnyXsrSACqxeC2QuWJgXqEQC26wy2qgEhZ7rdBKLWBe5ntnWH8ihg2g",
  "key9": "J8i5J394Xc9jzMjMZ5YVACbJTGTGsAvCbBbhKoV17oYw7iostWwiMDquVAcToh9xjpZs9VGTgd4h6YohCMrz7fe",
  "key10": "DKVjM327B2vbxfwGwX7kpvYWRZnmAeKymnQXY1xHsBEnBZRjARSDaygC7KRGy3WXYdXYKYU53D68fdCN2JcvJ8a",
  "key11": "5YfMnwcWAbTYpPJGBxJaob2zbLnvY8aHkU4AYNdyTa34Y9E2DRTATN7B4ffGTh3twrgfPWAt4yRrAbq7KFbkVRS5",
  "key12": "2Abz5DGXKsk62HaYdpEcMJ4EtNYJFpK2mrGh1JkPiKzrw4KnUzqyx5eJq3t4QjDNbeiXQmdeAyaRvYJjroLZk5MN",
  "key13": "4m9ymdtAYfTPneKHnEd5tVoNRgkM2hushRyFKKj1R3duiAbr7KJD3T4FWF6Dj1RWqM2MHyf3Q7FAPMeErUJ4QkVi",
  "key14": "5jxmuiLswiRbDfkiZ3EokDZHKA4M5BZxQ1VL1sRNYyDgBhFEwyUdMmD3GjuVjLkKHXPZDY7NwhVfAAamHtPNb6BQ",
  "key15": "5VvtZo19a9hCL9kpQ7gVcfJk7RVg8KTQ9zDbpFNMkGTsBi4AcarqfFx9jXwfDxJ9idL27h18pAMcvefHVFgaK1sA",
  "key16": "KLbqvr7wWwpNyTtYpuvFs2NAFSXFYNfUJupPToqMbNDHSkYUJMPnn1b5SiCMyqrBmGYqy3no3nywCWK5R9GeyFn",
  "key17": "64Ez541Avia19fJLhadnRpKtRD5TMrhZ5eevtihPkfLb6e9397MuD5tUwG7S4LTHVzoBiA5wRG8vZifokob3BfhY",
  "key18": "2Ye2A7emi6mYumv3eHwyhYkLYNKfiK6FPsVtqeSXfUEPk1Z296H5sbj3WcUwkyiuyLDDJEHRr2LJGWzkg35iP7Hf",
  "key19": "5Ud2RUyFmsLX5CtcpTPm222jvc397eqLbBPM9SLhiAeasardy3oMEZoS5xrohN3M3ySH8r6djCsXVBLRtK7mMuo",
  "key20": "4HCT6Eb1jxq4U6VEphz2nfesUdj9tL6BUEu4GnxH8FkvMzFFgW4Ap2ETxqgwsE87jPY7YCz5NHSSZm5Yx671pMtP",
  "key21": "5GiB3E2HNnqdaS3VPZquWX5vBP9fqFGybL2w7A7nTckviRAiPZtxTNKacMCjbfZnUx4hAzf4EWbFMSMjJLQNarQG",
  "key22": "3ds4u22k6w8gyQqh1eFxkwUDbfpWmV3ha7qmf65bFf1BPaW97SczopJTSY24zQ6f6t2n9RuuVM9txB9G79SzvgJ2",
  "key23": "4kRh3gc3NyqqavAQqx1u3o6BdFCFhkz3dLhgphNfzuATxUnkUxZ68C7YSr2oW7oiUagEYoJN6Gg5cKUMWKRw7gRe",
  "key24": "cb2wQWYXDQXgzik1H216fSzTZGurKuWMYWeTCiMMQB6475LEwer4X6dhCrLL4CEUFCuWq2jjanADyESUJeythRy",
  "key25": "2Chb6SRGbe5QgEyEZNmugKCCfnWGjsNPJkfZ53KAqwRhx9MtCteRoZAyG6Z4C4x6D9VieNzQ7HuDQsSKnJYtaZ2J"
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
