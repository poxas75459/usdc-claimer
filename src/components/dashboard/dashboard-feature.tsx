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
    "3VSDxsPJGZB7JTFsX7UZXmhgw22SyZ1E7VxweKqBTGLFg2U6gCGP2sHGdG7hfuuX3QAqpvLnNwpdkwGipAfEb1ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfFBZR4vyFEhdmineh5o6MSvvkJQPruFjBh31FhbzZ3VAkqc7nC1kZbqBgDd27aTMB4Mu3vEFTAAvoX6upH2sif",
  "key1": "Yjy3kJSo974FiJwURgrPVwvjp1TDHxCGC1rdJ6zz55BqHk7YYYXDNrMjKcniJhcU4FcNZNW6EaQgnBNve19ykS3",
  "key2": "5nkfzVPBhKh6fAGzKuQUeyC1pg3AYjG9i4XbTZ5vECRiimhFfwrauWVHNbTvNxecJ3rEu6VoKDEPN5hnzMiJaAvu",
  "key3": "5Y4zne95sXzTiXFW4PnoUiR47riW5RGBfU133p38azDkPHBMsqrMRJS6SBCRdEJoza1ARy3AU78AFnGcww48aYpG",
  "key4": "3BgJnDp7EQ1c6M6xquTHCRNmfj9NGzsquw1J7n18vAucYgG1J1hVe9i3LHGmMnNnj6xjg8Y5y5m1Cxrg9ALc5prQ",
  "key5": "4BNvLbQUZVrfBgPqbKoNs4ukQq5kptgZZrMbAP4PmRBKzWagRFgLWGymq5P69tkxEbgdQcJ8kxa5SwqBzCdD3bDF",
  "key6": "2B6hBJLhY9qgbZTcoVLYEzVhCzYN8a3LTHCtbMXGtz9r9C1okxKyGiH4cdRdf3HHjYf5eerZbpFtKY2FJDKu8Bpu",
  "key7": "3rLtQteUTenCbsC2HoNnLU9rFvR1kir5nFMUhLpyU9BqKPXQ8tqgGiZm4DPfxYQ2qYK3ny6ydBHAgq615WmWW8bG",
  "key8": "2gFxKGNVJrg25htXnr1dsgCGyyLrcXJRcV8ZSqYSzdFzp3RW1r5kDbr6wbteUSNxZjxaLpHeTsE9xfKFHhvGDQ8w",
  "key9": "KYUBgmHHTvzLF4uwqxDVo4f82xXrdNzfUSwaxKNVjsqEtAjdKbGEvmaVJyoBZzDt38PwKxxqWpiwty7SFAWyZGC",
  "key10": "5iZSHCArXNGF6eK2PwkPvR5RwCFLX2oTZ8jkSGrEiUgWvuS4G6ETytQKkBkimdEugMPSkTV6YiTT166qkAbFqEY",
  "key11": "5ygN8xBeGyQJWxdb6Ra1DaCFTuSJaBWKEt6gDXskucW6H3ucA19r2DaccSd7onbpw23BJKLubqMWRaEh8p1MRyzm",
  "key12": "2NNogF6ESG4ziSXkFjcjwXzCTZVbp6QCeVKYxsiUhZTLFmxjZbUR3c4PNb6yaZMVT5M4dh9BrcfYEqABWFXaGWnd",
  "key13": "5SZYqBqBdQCp81RsD1CbXD7PN8QtPGmfBfpUKdxRxBMvPdLW814LjX4GAK11oycMsv29TAQrGspf7GDyjKiMAVzX",
  "key14": "5BFxCpmY3LtVHVWKWLLRVsmCLeEWJ4dFpbYbrf3GNEdBcw7oU1MuKJpptN9PtcT1TuzYKBUBxgPvGaLnL77fyQnb",
  "key15": "51U9zx3BBEMQ3W8HNy6bFXskx1GVHg2oGgM3pefHjeBtc7a5NQsvhTYkVc4WJxsJqqd7aFTqpufNM4JXsDUuaVCt",
  "key16": "4b6vMuWcq8xNBp9U9G8PQY1QX9cdsn1QtJ8ArjAHiaXCHSt2vNvikqi8Y36h5sMLryYD2vt7vngW48eeu2zBNsX8",
  "key17": "RamgR9DeXV1QPrFQPAJQ7gppXPjbW88M6pdo2GDptRdaeDja1UbrUVfpm2uK5Q9ox8YW5W4ouMWooynSrNuExth",
  "key18": "RsB8UpHcqSYSaQBmUGKjfwLH8N8Z5ebHfJEZ8Y4yjzEU6fJm2rz74PnAqwmPS7bbYYZMnZJyWaicsatNgfeKojE",
  "key19": "5cd6HuLbhcCVPKEivWutvELjTs5Ju1Ad3S6Ngsq8g1zTaNHhgPg127pgHMZGTRiZeNnDgLnKqhWi2eumeh94yLx8",
  "key20": "PjXpkJvPYMh3H1cHzQnPCA7D1VcJD1eUAFn57zDuMe6hmT8eJ35ukUuCnjxgYKENeE7kRxmmRi4AMjyfHJotmuA",
  "key21": "4cBBGSN3ZUApx59HsuUzWfcSAtCGhtfPfToVwvzD4ckpMSYUBH9gnZXhmXuLNb8t6PrW6Co8o1yPQZZAzhQVyc7p",
  "key22": "4351zrjc3e1aNV3HuDrEhdpPo1HjFtsfQR1Qohi8kpmEa2yoKyL81ZfT7dw8D3C2ff2rJfuyGLRPHcifR7N4QbWN",
  "key23": "5fL547cs4d6yxKCdACmMtvUR1Np7UjFCsh2fNxGPRzM3CQjtV9xa8MyRqM6EHi79omMYfGUSL8gJxvWAKAaFBNnS",
  "key24": "GfZXyVtDipQKimUzVq1dppcZYXpsh97m8UByW9TvWa6E3LYPCL88QxBybnpJaQmCDbpFrjvbAwfQ3qtuGt1what",
  "key25": "MybsQ99T59DfdBGQ62r3TV7fVGkWH7NTayUZ626h4RUg1xVbVcfNF4e2wc2XZCrj2nSPtZkxzYrVVEq9x6qxiUZ",
  "key26": "5GQLwaBrZGmsb5sBWLwWJR5abLS3QuM3k8chYQQcG9hwKEeZ28o92YZUUjRgVFpZgkbDjJrXnVwNSYoDremPjwLe",
  "key27": "47zCuMdgN8qSarc2KSmcthdWz54hFBTvRLS9FsbEe2GJUWMJmxctzZVjATB3Rq8UDtL4yhGYUdoCgixKf8R3hJxw",
  "key28": "55uxbQWJ8xRvapDmbiqPSm9ZnhEWfMUsBXBbosTY3jUrsA2nSGer74FEAJjnoQCpn7TRtwkKUdoqqcu8ApHne22e",
  "key29": "4wNXhBGYeGaswVdk1FvZcrZofKKCyTE6mzs7WYsbZQtEQAyDKFyi97jx1CXs3noAdPg9dEniV9B5keJVMKWdFyNv",
  "key30": "2PcvAM3sGBAxaT2gG2xW9Aoz88gybMEHTnSEHkfbQ5SGrJKVJvJM6xrPTkim4UritVzaVyCkHiVbw9mT3jvFDQZw",
  "key31": "4XpTUgykL4zFCJAPhSFCevsJ8g6U7tvzsp54QvZKN2NFASBYbMMsXubVFRySKPRPQkKxb4gcJSiTFBvX5uArQ6b4",
  "key32": "2fqTuWrQm6s878gChjz173MFo57Y4QNgRSQttf4AjvhdJniqNTWJhh743K123XXawxNirADxJRmjDsc7tFZ1YkHH",
  "key33": "2C4JpUYuMBdmmCFFc5Cxxwy4FStzBrEn8uFTSiFrEtPV4fixQkuAtkvVyyQVRQEuC7jRAvAvMma8GbxqTTSL4774",
  "key34": "3KYW9rntLW6mvRw5tRiBVicPjw3HYYtodZM4PMaHJkomczYxtiVKVsoTtfhy8upuTgPszoeQbJSmh7C6pNNvmD5d",
  "key35": "xTyxHeb6q72n3jY61PrHfFZZNMNkpwpSkuxYDCS3QrSrRzenyN5XVmwKvXXf6dmSzQ3VjcSrEG42pyLhLFRTRoE"
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
