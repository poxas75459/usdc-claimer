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
    "mbB7Z3FXWBkgr6ViLujaZKnZFveSGW3wsQeoVvHfndvZ4bjYBGhQ63oquAKYVx9mWXjc4Sb129YHHp15j87SphK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZSxjJZwMzCbPduhrcnpyNmT3tLT8rk9ezGCdVr6YD2CiFbkeXnxpubJBqLjHSnbJpU2yUn8reVbMsNhwsMWTcw",
  "key1": "53UU6Xzr36vUNnqBCVZt6qMcuGNVg6LiLEFNbVD9JW5CLDjT4PEZHg35gBwkT5bdhhZTUN98oApuxkgGQ3uB5mBz",
  "key2": "4fkb5osFbPX2wJ1Ut8B9V2yskTdoQe7GUjZ674x8M9h1nPtRtw5sGJzBt568ftU5hJ1Y5nDywSpUEWbgdU6wMUS7",
  "key3": "4Ayej7eyk1TWtB1NemQr2JJHPHF7aifeJC3KVveoCcTUmnymUB7CeAUiQHx839UdZQzmAtKW2BbzuVzGncg9MnE2",
  "key4": "2WZgWqA2cc5HKT3rm6rU1z5yPsJRfZbuCwvzPwHR3kQxJYXgpUMcTeHtzeGYtDUoykWLawAzxTrsqE3k3KaBmpQh",
  "key5": "3C4eZSqVB4f4DgSNGSxzvJvJN7o6voRfhZrGkJxBVFio2GQDHpPukYbYjBKJZCWq15WVdzkq9LDNBzVAtKcwG7V5",
  "key6": "2oGT7ynBH3JcHT8wijFa27wZJZsb9vBTKFvWd63g2aKCnhcwCrbxkAkX2MfZD9JC3gjtXKkKjwsWn8xG7a2m2mQu",
  "key7": "5rnYnbbeEzFpaGRNJpAFHwG9HXhiYPo8cHzkFx32FckVbxPtpLWHoAU5nFSBRmiDG52x54yHNC6B3NTvFX9fBTLK",
  "key8": "3B2XgjiLkRFSReiKQqbij4jvrBTELTqbZxECes27VtuALFDHpwCMXTSqaDfeM9FqZ8CiqYbFP8WoZRHBYNncKf4p",
  "key9": "23SKAZvPMmdiqoa9mERKZG1c2wARSrFxMu42gpvTBuM4kMz6PP7fFVqUAU7nLHGWSt1Rd7uEDTrvxLFHLiPe4KgV",
  "key10": "2cvXhnxAHYW9AVxCxKQdx1PggZVc7YwbMCkWe7eS91efytjLaFxZQSuX3scDb6j1LfEhSWhSDud1j7AtDtbypX6D",
  "key11": "n3AE1tW7AnvJq3UZnsFafkidMWePm8aVHzrRRbXneQ8nFmYHZcZKzb619tDdUjnEdDHpuS6KzHPFFmbtjmhUexU",
  "key12": "4F7Fxrgq3u6Fy6bopG1jRwXzU8Yedj8pEgBzzrnhnwc1FxjfrkfGTq7CTH26qZpvXAHG3pZJnCotakgFnEqYgrfT",
  "key13": "24dZsK5pbEoSrYnYxSzd8kbVobmZc6FxvUeEAtWY89QRxvuaRVg4x64rpQThjfNf2KHno7gowfg6vkgJa8ZicyYb",
  "key14": "2suGVrd3qahcjwnBHbL14n1tj1CW7KvjHNvU3ryMnKjPQ86Qt4K6uGLuKptWkkvb7ZCeKz7wtZwMDZ2xzpX1LYBZ",
  "key15": "3QpTbTMARKTEBPZPVjNRoPbiV9ohhXMWfSjpEvcSNhDjTAfE5v359wMMQnhVq8ymjKoocfK1s2oDtx5VhqS9aMeW",
  "key16": "2M8SaSSBAZyBB1Rex1uaRxpL5oSBqoPkRRM2cUo2s9rh8bHxQszDhNC1Fm88Yn134q4L8316Loj3PBeQ4EY9JC4v",
  "key17": "62Lf3JtGSGmJa1PTXRGtVku7eJb8gyrePFN33ie1ohNvHhFNFDwh4RVh7PZg83hK33SZ8wkoJkimkwi7jm4NyCE",
  "key18": "3DLm9SVKgB8U8obBa21rnDY8T9KY3a5opPqRKbgR6H7gdSyGxVnpLQQMt9xU86jriWzNTCkDRPtXWJJWoL5Smq86",
  "key19": "3kNbR2Y7xUuGXwwmZx1Wi5ctCC1mP5y9kBGS9oKtLxeF9A2AhjhrfxFrNXHT5p2KxNs87Y7dByEZbwedM63tjMfG",
  "key20": "fnHxLjHjQ2vZ7kLcsKRmY5WTG3Gg8TX2CfGvWo9grKi4Pr4TMo5LbXkfbAP79fhDGuJTEndUtPbmdg6js3u7iVd",
  "key21": "4AdkybihCX6uNk44TLqrRTR2yLZCf3qBQEsbrTFU5Gn71umufwZsJwyEKRA7SREkb3SZVupWmkwpWEzw2SKnpje1",
  "key22": "3FCuax9LGzrBATTXuxZNsEeNrKHEnLpWENdBHsn2Q3TcCkLF7rTM2xEdVJzkPtCiWDnThCHUq5wo9WDHQEV4wfBE",
  "key23": "42XBmRq8qtAM9UJXSV8yQ9zMwae6SGSihmzPHZ4qWZW9pNAfPwmzoACin8VoFSAKXG2Tf4kGkVeuRCaSf7N8w8zW",
  "key24": "3gup5roCTZDGVcywHi3ztJVqSBQKvToyvz47fQ9HGAyfC6kFCgz2QLSTurUMAivEquUTCYbt4KEvC6AixPZ1Bs27",
  "key25": "5yeLiXLaNjif5ARjRfnGwwW3z2XhG8gojBkZp7Q3zPos7Yhf2krBswS3frav19GVQxPPGRJxa3VzEN7nvRj1gfXj",
  "key26": "4HayvBhZabqCS3VgD24Axnh9gBDxwrPd7zn6TM64mMwZAwMSrcEsqMHyNizLQi4zfoTss8yYL2so6BsTJzFwXD5U",
  "key27": "u6zLktghiMfF2fCpMYo6S6XDPT8VNNLkrKr6NNkGAqSuFrFY9ojPm6tErjLt3uzgbk9Lz7uKgndv3fj8g1uHLRD",
  "key28": "62vVE2DUg4MKVCxqscunNpCFL6gY6uzSNGyi4RjsZXcEaDhFyGoAMgFcQB8JuegfAA9gxTmWbvijsrd28gnZGRpB",
  "key29": "3MArjR4HLvgvNFLUyK72wdMoN5YPjVnJDNp4KNHWzPmnvnjYSsLDrwSoKbdEJtP14tPccSritwrf2E9iHDXjCeEP",
  "key30": "sPP9bAUD9zp6fRzFDKVVX2FTbYKctpRrzV3hhnSbxut2J1TK32R6pkv99jHDnSXD1zcpc96GnZNKgSLGdf2t97R",
  "key31": "2GLZBuqoYe3W7b3yFCxY2i8VwSpbsb8kezRuDqQucNzNhr8wkPpDm3vQkHmGAZCKyhXCueeHAoMvBoQb3mNhibCn",
  "key32": "txrpM7KtmxcZmdNjHwEriPAMrV21acfeRBXWNJFWUz2H9y1SxDK7VP46XpkbLPF6AHfiGaZyQRPinayMfdezZDE",
  "key33": "349Sq5a15d1FSkxs5TSaQDotEt9KYVRRbEqhRy2gnAmQN3gM1KZRFPLYSg6tr5qz1BgRcCynzniC4pSbHxXFdAxC"
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
