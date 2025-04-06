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
    "2skjuvLS2DXxcVuRHwcNFswFgz8ctpzgPTdc94LFCnrSX7R19QWQHFz1ZMs8WFwGmaRVUrm2Te6kGJwN7CSfuunT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qHvcMHpHzJtmJu8yPGKsVNhAsCU8sH3X2Ef3SxfPe3yrcE8NixF1A87sp7J7q2cEPVBv8PN45D4jHW2a9gCBUf",
  "key1": "4QCViQGjCwTkdzibJDaKYpMERvRDeK2hDYvE1DjvHdLzmRMDXPofnedwtemvUpEM4UyEEqwV1ktDaggFtDRrnJtk",
  "key2": "63EhEa7aA9G2yi2efYzWPZ4JWow1M6t5TjGot8ufqv2PU6D7Lo24VaXBQU9x7dPVcJhqJEevDgFhuwVxp9SZiGpC",
  "key3": "3L64NetSqVzdZiy6Zm7E3Ffx3ynY5NXBMEBAAaoLg3uuEAfJsKAM62zyyTCD9KYJ7mKegYCFzMXZ3scEEMXQZY9H",
  "key4": "3e4H3n8Lbd7aReARBqp6m3Ehwi1BzyEVw5aWJasaKFUvY1K3UTkrgEJcXGpz8ZnzU1jmJs6nD7URKTqNndaiMJud",
  "key5": "2B2A5D8MeBeAtDw69YHcJ2kzfhChEgZk9s5dfUSZg9E6JFdxgRHRynsjHy2ac3LordGJ6TjHYJscH6AgHrZptCKB",
  "key6": "5bZqM1YCxwYqyTwU42Cfc1LQT2ZfKRhGTgmZTJGXeJWcX85PzADiNCQnfuzs2T2rAvLCn8ZgUhwEBdwDtpotni3A",
  "key7": "2RZwPAhYcjYSsFuupJdXPpYi1miuZ4KzeKMYuUx2Jowj1gTvtdiNmbzuxjEW5excSDcTmFdxDjAx4hN8VuAriHiZ",
  "key8": "4UPaLkpPJUUE3vrrPNTEnWWqntYx2cJMqc4RPrZyaj3ieV4DHT1HAm27TSgxfrVHgPTN6sActBPz9Eu8vLnqR2ak",
  "key9": "3jGvqbwLQqf8jnJXn5xF5CJD9aXqmnFRMpVDeNf5XUyABVrGcRK4cKo46XNurcHzsVPYaSYgExweYaYv8pDVZiPn",
  "key10": "5fvqiyp5J1R3qS7q6h2mNxTyTuQuCrwxJ6rVi8XYVotHwPEzCGwhrtir1apZc6d7X3egbt9YbKtMN1DBqHfUQJWj",
  "key11": "2D3HNyeWJoVTLkMA4j3jT7Nu18Vor4N9aDT54JSvq8e1aGjmvRGPUZCMSHfA9UDNcZzCPSWPyLMA3aw62F6BuHJD",
  "key12": "3BsPis3TVtPEkSQVX7YxHhakSsB9TvJtuT7QPzFkhrqAFAWBZu8MZdzZgGVS8w7qK1n3feHM5hNYzny71sgqNktv",
  "key13": "5MbdUURKzroLcYVBX84LuLz37MewA1N32gC8jcSy5mETUzUPqDaGLAn1SyyahK9YfaLcaj3RQU6tpPhXUvfzufFj",
  "key14": "2nyYiLEzYKzcovf844fi1dzk5EiRmiN4jBzmHn3GTtLBa8KpNDRhgZBEHJkS6UaxV8YxsSVFxr5pcSujtPsKWje",
  "key15": "4D2HagF3knvzU2yYtf3fb4AptW398LBpDbYqVKyJqTmbzbwXMb4WDZnpgdmB4T5r5bqGxfoNdJZ4iAZqBcJSFoag",
  "key16": "5Syj43xx5UMNAMeyCwjetY5htMtkcq9ZsZ9BiiRN757PkhpEZEwkhFBCLn3ZxJn8c9DHy5fHs4PVs1sPtp36eicZ",
  "key17": "mC8gEturC82bWFQcmNv2h1hyfHwqBfe1RTtyQXoLMUYtqM22egxJCcrvjKdF8ZeTyuuiZadHrzVHU6N7dRYYPec",
  "key18": "21r31HcHB82qwUkZ9ak9YW3DYnEq6MjDaPBaUXm6eXiSTzC3G4fnJCrAPuyRJUJa7FRJXJKjAE6efixPcKeR37Lj",
  "key19": "3otR5gTxixFnYFvUJoeuByBhNopx86oGsM14FJiSKGerF9SEnxFZe3X1ZwQW2pVQGyewU93xfccRMVNAZGXyxCwu",
  "key20": "Jqhc9fgSxq91atJRPAHBPC3pnobiZeDQhwDn1Xv5j8WSTxhbBwwDdebZ2TChYpyqokWrjL7qzLcfeUwvCTCzqFX",
  "key21": "4aeETJi2feJshRcBSzH9i7xDVk64NBJ8ttsLbT3bY6x3hfRRjsQfpM4PT4WsrC6JnPCdfCGoKt6exdzoJetuRgHw",
  "key22": "4R28nFyKJgrch5WCZYPevrSVrrJhefEBQvZ4sYb7tq92uzdGhXiGmBkwiKZ6GNdAsEe42MUPmf2jkWgq9C1h1Mxk",
  "key23": "2APmRqUN2TJmjaUfKiLRNZcohpCciByXPbwSLeJw5NsW1YkPRN5nLJ5RkVKwm6TuyP2tPEg21vuKa1nSgodgV3r7",
  "key24": "67WnrFtfgbs74fGKMJCtktS9EiUFkYJGhbTAvv6kc4E3jQVCwNFr5qvxPmCpbv4jVYxGYpoD7PvkSkZqbXtwPU8u",
  "key25": "35vuKa3cbfWzwavogMrrzpxLsD1rnuG5eNq8Y6Jzg4jHBA2H8ZWtoBuvwyMiUJgBfTChmR3Qz2XgqFm1944d9CGb",
  "key26": "5nNTaGeKJ8Q7Kdpsof9VaZuBBAQeKqXE8KdHctb4S2YQNbhD1yEB6kHdscEcWCyYGqQNhHEX8FkcDdZjDcBAsppA",
  "key27": "4VZ1GsbBn4fQnqADy5p1b87DynrhYYoDZwVFdrD7ZjbQMq8y5yUkx2wc8EngcRYDnvNG7rzBjn1x6eP3sMabSEL7",
  "key28": "4Cfb9mPqQM6yQTmco57kBZCzqHpKgdepCSm9F1Hk5VEU8Tfwqbm7sKiVLBMD4QgKCVf4tEzbmRgRRZp76tXiGUjL",
  "key29": "2oRRGJWuQCBRXH75V6V1JnQZ2niEPZoQdEz4KDTFGHjfGtWtkTZv6vj9cjEMJcEYJonUC3DpdpXWktGqd42cmnNq",
  "key30": "4vgeTxGjzywX3hEyvsgL3RTyyrqbhzzWBsh3dGGExoAVeAEL1UgFFgTFf2QSH1UvXjryYcDJg7wJLpBp9AyMSH3F",
  "key31": "2qRezJUGTSqyFywrtniNE5G9eodFmdTvwdodnndZbpZhLmGEy6NTUDF4Tz8h29KJMTMm64kiVyaRkbU4ABwVHb3Z",
  "key32": "2XnuwtmbwniQWnp2ZiVD9CNdxpJuYfJYumNrRV5jjThCFZJbmi7m5nRJmL76g3Zm6bjZyr8rrR765La6kZk4STCm",
  "key33": "2QK5QXSmGXNyxsq66Dq7urkETVc2tsWnq3qKYoSMGbnjcf5FW5ToJGK8bAvQgn7h7KKu84xrQ4Q3xFQPWKvQS7Df",
  "key34": "oQJJ6osX6rS551EDW2TRuyhNpctKiEhVobNf4KFEjT5BsUDcK7f3RfXD33Jysiau1LeXDkZdMb2TbqP1Z6VeRWB",
  "key35": "3wkr6DDDVnKttipF5ahVv1a8ih1AQeGLShKa7jFkcRMBnJp6nuxNYwvQtzytgFwnJk9Ju5GWa3ckFyyUCmTyYoGc",
  "key36": "41JFFFdu9tc1Lnkwk4FGSjiCPc8ioXwTRrN2W7zD7rVkubJa69dHoqTm7r4x2VP54GXMoWDH4PCFr88foVRoKkUC"
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
