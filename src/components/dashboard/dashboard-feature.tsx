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
    "5zR9xozNcgQiWSHfjm5UKkL51XaXn67tw4wnYGbV38NCiPkpVnJDxjPM6Us8fvxNRj5cavfNHCZWY2uf82msMHt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tw2WpQjc9fPzJZqJH3J4Rdjq1BDXqFMWmA5qEXhj1GQQnTfn2h84iNLNjVkTM4QvCbJarPrFVeZQ8BDokfkgesc",
  "key1": "3Nrdmw8VvzRZhzas34pHPmH5t61dBPQgHA2Cf4ZtFwcB6UUnQy5QLW2za39KaCN14aM25coXxif8ELHp5X8oyAdu",
  "key2": "5vAYfwPZZChrr5Cim6dV7Y5nWSGW7DxzFgUHe8i7fc4Vmr6CSZcyPdNis2bPhmdfHnoEefZreyJ3P6bSkhALyXnt",
  "key3": "J3xZzpYvwoojS9Ec4HgnwT1cyi1hSnaSrzaBDv7pd9qh4xn7PQYKCreqHWpwkxNiZ1UPir8QzCHjJZVCKM8UmwD",
  "key4": "2H1zF1QbYndAezwkhGS5ETY7caiaZLrrY6Hx5YbyurvbJbsnJBNe3Cs8D4zSeW4sxAbUkxqaRkFyUgxCJp9BxzAi",
  "key5": "3STBVjvQwzQadZXo3n1z9TRERX9WZ26V5tc5QPdWq7UwASW7LAjcxvicSCEZ9wdtNCGSvaqcvTrXX8esFKeNHdmk",
  "key6": "5h3GjHyNEZpMCDJufLpRkijxXvSCtkh4HBUvt8wkJFXDzgpb8GqP8tY7pG4reqWUQZ3TcqeosXAuc95TSPTT4dKz",
  "key7": "42mPzzhP3a7oMajgVYLgjft64TxFP8PAdzzYTn7xiH2xXJuMTdzmiFjJn3uKd54gz4SEyRBm3T92hkCEwABwoTFh",
  "key8": "3pB1cHx8ja4GxfRju47C1PhirdztmpSPgbDD9VvHBysmCg16YabzaYGXBekXLdeBiQUCvop6zdYq9tPqk9G7A7pU",
  "key9": "3fi3Wi5RQW6Crh2pB2XJTH1BVe2QvxVgsGFYxeSGFeAoQguD2MnUUDVd79CHNr6WnRbDtWK3qKgS4KVRiUEczeMY",
  "key10": "4SQ18G6ToB5kPgMrmjqQwWp3rTaoRDWv7eAXg6LjfHdcgCtjsVxUMBeBkczCyB4nepfPpPHbMZ2R8f6KyawYkLdQ",
  "key11": "2nerxyNdXGkRzgDMrUxfEuVZrHYsfKQMsPNLeZbQM25wsa7QhQnNaHWnGqdBvbPtGL25HQerbXTCrZRxwfXjqS3o",
  "key12": "4YKK3fP1mtHUyWLir93vMqdCDnmnyWrx5QEtCj9YtfpbUwD9R6Q2r5fT46yATyA2FV9B8RhHyeqbdM6BUapmZEG6",
  "key13": "ffSunF9FGufUN9ro8aNjUQeVegfCccbW2pUZcEwM4xNW4uH9tW6grDAPQbur3ZsX8JvHpbSMyxHkJTmZ7xPxFN2",
  "key14": "4tEqwA9RQXQFMQrV7kD9r4aNa3QCZtf5FqMqkSuGWHD6rZS1G1NEXLFkgwq5aF8hhpqh5CV5ub9NyS4qJ4xgpDh8",
  "key15": "2DgoWdK4JcuDoyndyvB59RGKBWKuS2rSzL2EDKPYXd8Zyuy8pmPynX8MxoEWDNR7dUCqoQbDdMmnFyGhfiRE2LqC",
  "key16": "4HVig4sZmx41F1z7tz61Yi4gGqrdtghxdfQFp93TTwSzcHmbBEg1n2t2ABZWAySG6k3Ch83vT2Ern8CPgUzrfRXy",
  "key17": "4hB4AqM9kcF5Q58AKyGcy6hkEUn3C71rWT6RbErg9HVSt8MxcKAfC7JLiks6pALYzJDQmKmYRDNNZtWc2ypK6ZkW",
  "key18": "2WcNQwhUCnuBwdcbojjrgPePNMV85axWgBq7G64m2RpTybv5DwM2QbeBTo9PkchZP7RvJGZZBtzq1kTnVmv4eUBP",
  "key19": "4h59FMXfHdLBvZ7T1SNZNPrUFNENdaJnfmLEQtvLJDjNYUbK1Kr6pKWCAcarZ1TdqAomjrkCxYHFZZ7eTTqDTZh1",
  "key20": "ugjhLMXBrNzwxKKQ9owU5hpgPgWGvp5s5uzDArRzUGcs8DBJVniqzjGq2ZD7X5rJfyHtZ3yG2t833UB8gPnWC4K",
  "key21": "pddRzdGLPkrAW5sgHQ39rGiHvECVYP5pDJkBbucro7fE28eYkeV9YhsVv6emgETeUxzDDVcAFK7kKgkUfXq4fHF",
  "key22": "3ktoPzwPQLwbi7B4kDoY898Gw3vopp7ey9H8BrauuACNMF4GVHaCtMf5yHVVYNzZt4vaUGNcGxhkBRSCo9AJv1bN",
  "key23": "4Zpytm8rJ7EhsNn1XFVujizJ3X6ubbV7otF6VgV3kack9LEZXBoq2gMMBNaXPPv5dBuwgyZQKfhF9RYU8VzC8ftq",
  "key24": "5xMrZxBpP4FWcgUrM4GpCaUxo7UyNyNKJp1rucZ7fvCdYZsWXAnTevxsnxPWSTGTUyk4sjBta8ib8roYuwKZT1Dd",
  "key25": "5Q4erHtCbQEfVVDgktD8sQQncBf3DYxwGQW5JEyrHezz6prGKWGiCXGvXm5YWDHhsAo5TR2GPp8PAyh3YaDU2iTR",
  "key26": "4EA1oucpVqjHTZfW9bkxse5aE93q3sEPw2v6Lf1ySToAfxCbxajFJ428LDokCQf8LJiQFsEgPxg4MyzDkXp8PzKs",
  "key27": "xkbnGBTspkjFSEqei9QN3ew6gkFQqueAVL585kYPZufy5tZNN7vrdu45amugdWAvvVGDr4EJw83PCxwn5n5MvFx",
  "key28": "GEhu3RbT6kYvFs9p6CW2kjewgq8oJFMJuLBEuMyyk6W8WqHbggjWjuuLB6BEGkDajw6kh1SnDtgoMrFt6TpoHAE",
  "key29": "3ve7ovh7ZAWiMcaSnALC3uqhAyuEVxPPsHKXGYzbF3v2NVSZis3Co2W1u4bRdLWydHdnb44F9gdZWLhntS9JRgpd",
  "key30": "5tBdpnur39M1HNmwFq4SgVeX93acnKfPoxEyvJytc4N8axqk6nALN95Ee4Mbm5eRFaxjfRTdmMzMui1rWHvdQg4Y",
  "key31": "56mQtxAWAHS4raco5aj9Jqu3fB5eH6hGNDugCVEbcRmR9bs3b4d43amMv6i6uBKZ2o9XfKrD9zvJQQ1MJQXxZVUj",
  "key32": "5UeDfxL3VkPKdb6jW9eZNdhYHjTRZoF5ihMmBvP1we8e383kRL1eu64ctbjfqVHp1T57K1V65js569MpNtZc1uNS",
  "key33": "4iikm32HR6a4qPFck22ANV6uBCRFsgt17gZD7KP7xoA1Vr8fhTrE2HH61UcqJVe4v3CeqMVvPJDWXXVaek71i6nM"
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
