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
    "wz6TDKEaebv2GDYRx8qUYjYQZiFxxkdHR3s9pmgpuX7bRLY6hSEuLhqDqfBziKygYg7DPgfqZzm1zHkn2CQYCpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkPbsXXeyTFhic8sdKAvhT9CJQ986U3ENi7XGEuEM2n1MicEJu3DQJE573aM2FqXCLFsesZB7e7x6aYxepjsAms",
  "key1": "5feUarhwkemUuvmTzdmyNEjRYi4kCZB5kHAboQnwDP7vjPvrPt1yH3PyaCwN68XSZ51pxwN6697nxtYCdJYMX2FN",
  "key2": "26LLMUezJ5pthGxbUbgJRGauZq9gNoWfLUGE19tKWcPfFWKVLmEHR5XRx6ZMJRqgMRK2EkFNVJagH6fXDq2rtgiY",
  "key3": "NJdWghaY7SitsZhaR7v3Zjo4LHMJkhiaeyD34vBQ4Mfuawhmo314xW4LQPR5CDhN2LAczNz34Zgxz7SWC9b5tpn",
  "key4": "BwYqX2aamTud4XuAS3f9wLC4BdEWYEXdQnox8CfcAyjVjtDx11K3jQp1i6fKoKZf9sqon3BeeNEDcYH7MmWYR5f",
  "key5": "5URY6XiR1GpUtDFwW2SobkzPpc1LtaB4mCoRgwTN5iYLm7qfob5udq9omJTunSzi5KN7n7PwXpTHfqYuhE1YyYu6",
  "key6": "41iEXR4syu2WCPmzucS8zG68gu1cWzVi5GpXg4xevudj6obkkom3QrEhNkVwkTTNksWdfTQGvrw2RsFtPBZ1ErbV",
  "key7": "3ZxUn7CVvgM3BUrCcr3tpeWTspBmNhGBdSDjqV8zwT3dHaNQHNhC7e31DbwiegHay6xAKXAe6v8LZ6XCthdRdGy3",
  "key8": "GbhBPbanc4jSSGeBSJk8KzWDpU3uGJUi2v6Yr7G3XVFA1vTmNDG3VoUg1Dy9D87fZSpaxTK5aVaYU1JPUfmG2Hr",
  "key9": "3JUN7AzwvfttYfGsFRNb99H1GcLTPsyAd7pHs91RmS4aD1SVPciW6275eBt6qQyipSqiskw3ga1BGskNTG6jkxHx",
  "key10": "2i2omtTa6AAmAQKQf6r2iqE5FMePaKSDvDRf8DkFXBkCgzSm4LZy8Mzf2ngxgNXQgLKtKTVrWyS67fPWDw6nEE2n",
  "key11": "5PjqurSPCP7rXfAWaSrvjseWTsHodGX5wT3kuRsCqmDLn5URe7oWRsV1rCPFaKQMVstCqZAiNHvsamGciLcHjwuc",
  "key12": "2nMeaH34MqRG4kaqFPWnebSCJmVSahHatNRBv4sbhJxoKsicCWqQEgGiAFrY55p3AymzX1XbfAk49dW8StZCRSxN",
  "key13": "5Bpi4gKZYdKdh1BPUBjxFmPke4Bz2i32KBMX87nxY9Qg2p1gHfdVxju7cgEkj9bcqSjiXmfy6rCqhsNX65HwPRj",
  "key14": "5JJgRpnkX8J5Gcs7aKwRNcFQLkufoDLKfDjCfAEEnv2Ykt3yGUmK5vNs1JReGGW5CFSbeL1YRi6QHT1BboegDFVo",
  "key15": "4gdr5nfvY86c1SKDDTZWdS6WRC4VB2XtmsaHUbDQb43k9ZssVsLhHja3V3K4V6f4o1ymuVmyrgBoHVGwYWhUmQ2j",
  "key16": "bA9xk2Z6zwVteDU4arNVaR9uTssbcu8WF4zT69BnMbbLc2SAtkmy1pMUMJvszZccqfWCvdGiqGEF9hg5T8hnaj6",
  "key17": "jQcW24GrHyyLNNcNHYWVoJy8Cp3ryNTtb7EngqFco8L2uWYDDjtMgw7etLfFD2sww4cJpokmzfP7J9apo4rToKZ",
  "key18": "b5Jsc6dnTnD61miYDV8o366ABHn7gdzEsGERpoRLMcuukjvFCUiJ7wvTsqr57Zk4Dt4nQMqNq89unt8ib2Rhujv",
  "key19": "5yDsrksE9RMCMsnfv9aH8j3DPk5C6M5wi2i9dqRzhiN9V2UBGQuuHfXenEnXj9XkPKDi2CxtaPpsS5sdM5MZj4Jk",
  "key20": "2PvX8LgsJcXYhF6eQAEY3cFwji61gxcUs4WdygFQUvrwAaoABqKfwpM93FSch5s6HqddKvan3vcvxPiZuLLiu5UC",
  "key21": "22cUGVAPrK7S61zCWSZnPafN7XqPjPZGP84hAjwJ3x2xif6YnjmNuCDbqhbaVpB2adefWtxpmMWHXyYKZKAq8icy",
  "key22": "61Ayd1PkyHdQHA1DpcJQ7eboNENzj7ERmtw3qZbgniSSCp7r7GNHoUheAHoyHLx4Q62zZzdpCgtuyv18iAV3EYuk",
  "key23": "xumM965ktmk4gCAd9Xr5xoBL5A25nbZbtazU6kcU1D5uFbsvWZ89CKrDCCxoTKokTZgVVfzNGur2CnFcQjWMHpR",
  "key24": "3qRNarp4WpnSDGpPdFjyMDhU7vs2ufD3ZmXX48JPoyHf9XyKgp4uX2xw9ofjHSTvxqf1C5hCMJcggUebYkCnGtAy",
  "key25": "5f2JaxJQ5AzbUiWuPmnhKmeMdFqRRWqivJiy8xVGFHDLDSf24HjaiNiPr9jUZQY5TTA2LpKVMepp8qm16VedFoyv",
  "key26": "2HVhtDsV1z7TH2JYZT82CMbaJXPK68Fwz9x2pBGnq3k3bMAM9VHfBVybVQmM2XtzXkJaXAtAxtTkAxKnxzwUZ3JP",
  "key27": "4CCdC3kTpomCTJqFgAfmumVXbgpjCot9fPvBK9hCBdcW23fRwxmCtJTGz7hbgTAqzoHudT8rVzmEQZBdECLHny1d",
  "key28": "18SVtPv3cTnuPnLoNvtP3CSKYaqMz5Res1ptBX7xrsCMQoqJhTdnGdot9PuJwteZwZGdxv3r3BqZ1spaRhoBsbX",
  "key29": "5u2EQfQFhNhdFRkE3cLCkUzz5RMMfaWCqcgKjVsHm8fs8QEF7Z6bCcjq4MRK8GXW11dfavRoaDtJMwYhtFckw3m7",
  "key30": "2z8pVNBETt7JoAosdPhJnQGGupwCWC9gFPcXRhJhT4mtokhbERzqniXRyAXnw2CUBuNQg6BtTrLwy463VjuDUrKW",
  "key31": "3RuqGX9bkj2xP1v2DiwxeMCafFbvdX8wHDVRXdztP3rsgbwpmYdY4N6nEfGy63gZrfoq6Dj62GR266vXo5Q88pVd",
  "key32": "5SMMgi3u4uViZMjMha1dqsNKnubt1MdFpY629ozu52mrRWJcsR9c419rDCxnfXU5R8iKqrnQsA5EF2mYCbk1jVfs",
  "key33": "3ndV953ZcEsYqWzqo3ZcLJEj2XMPFhX725x4iTqG3cSAEudKx5C4nQxRPKfuSR4Hok989KcCLE6UiSWVZitPDQ4f",
  "key34": "2eKcAuTga4UdgepAmXdwYhC1y7JQGwF4vRqQJydPeLeuAoqTxJSuh6SgwB6Zv7ALuSoCQi5HrQdg7Ft8JJrA9P3D",
  "key35": "66c4rMFvWr9AQ1VuWaNLzzypqyuDwNkoP5mctXBZMbTJfSpktmVbrXm3A8M9mE9UazmrLo87EARCCCwTMNPLMScp",
  "key36": "5jsV7fZu9pSbsXo4SVQwBePxgkdmGJvYXb4V96DenMjpY7eNak8xGWNbTYV8QZaAef4BEYGN7zqfYugkqWmRhPGD",
  "key37": "2rQ1F4ncpK7pXwjNgxnjbqhTLzuJAJk9U5iz53VMBeYvqYiVSwLGm2MBK9MqQEhcb9SptPP2h1YXhKLjC7eFCTXU",
  "key38": "3LQSiXr34vjiqpuviERV5urfKcGTmwCrD5hwGxA6D9DL7rbSkNuFPLCWy9Bb3Nnr4Q3fc6kuvKGUhsb9uHopst87",
  "key39": "64MxHgXZcjkDX5YZ38rQ2erDvLJVmc9MGWaA4s7GZsec19RrPdfXDRiTQoJKtUdeEKJcwHDjVhtXHJpbrhidL1DJ",
  "key40": "4AAgbYRLcF7BwDrHUeJahfKnZBabvsJSeVp8sZwEwyidjhdQcdpj3FM1NphA8ghh39DgjTvx3XEvz5pEkPmcFTVn",
  "key41": "4Wxzsz31bt39m1oMGjpUQwXf2MkpwRTZUYiJjJY1NpzqQSEUMyxxRpKcLhWK5A5LuvndJb3z2aNTQKeewYEd2vB1"
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
