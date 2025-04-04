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
    "64KtZiUAJPLFtB1WYWdzxyptZL1nSbTicVwSd49qekUZh44z4vHVqhFgduPpf1dNTU3ZrA8vCUkZBkdmTJSbi8Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQHJrSXQ2ddyqZTDghrmUFortpXi5fK9RiCtY7KV9hM19VEMefnxutGw1EhxreN98T6u6mXyAu3WbMA9finBcTL",
  "key1": "5jLp7E3R2cVJMJqh3g7aiRioT2FwfYDZKGCtEGY4pX1yDhs6HLczHRWJ7GqrKtcsDca7skwiGLZbmEpyn2yZHMUd",
  "key2": "31C9jXpB4Nn1CsrrYrF392sm9WjtEAT9qzzXBMRiCsxezkNedzbDT7P7TqRTcFTXXpwZ7SvGz78gM92QGjUjRQSc",
  "key3": "5824JqWjKyT8epB2demawfgwH3qTq3a5ZmJwoQbqvej61aXwpXngPCqDEA2Lzr2SjxYnSCH9vKdz4zz7Agmf98Vr",
  "key4": "2peaMjrj1HWHARmMcjEJ2EQRcK7pap2djbNLTTouScLbDBnnRKY5d3ZrPc3zyKaDtmqxWA5ipWb36r8dzUQmD5rP",
  "key5": "4jtmt24qWtEAKcBX24MBhoWrfstms7Me6yZ9qjWHVN4PzwYcFXWfyMaEXTjZtMmvLLJbbZJ6wT9v2QwUT2tiAVtE",
  "key6": "5T7LJ8LNyrz4THdH6B2ZUZeBJxSrehyGHx2KNrJxJiqfssMGmDtURya6G4Frt9uPqy4TXkYfDsqoXGNVTMsmZfdc",
  "key7": "4DHB6mAexcWpMaHiCtaSpTs86pB5i2ESmVTnKSkq5jqLn6CRzyn9J5BxbMC9coA2s4gyXgAXguNpV4zBUkbGMhys",
  "key8": "4sALi5n5nWfNiSobAxXE6pDSUTJu4MrBa9bFSSMJ2eppbR9JpjngZiqHJEULbR9D3qpgCBESHdqjpMBzWwLtV2SV",
  "key9": "59gqW9ZQoawysWJPrBmG93Skz4sUKz12RX9guepYqLeXDXJKyTEWJuMQDrPxHiaAFBBibX2EAo8BAAWK8cSXqwMq",
  "key10": "4DpTVP8ixgovKac6B97GUhTUxjEz9tyg9yfoMrjaxi57neUkLBqHF9jRRTzayd4V7ZBdv3mBBXFUqziCiAH4eiT3",
  "key11": "4mYkBFT6JvB6pDRGF3mkwdR2ccPTAdb7U9pUHUFfJH16hkBv7xpq3JSBg6HdqxcP9EWHWqAhS6qNAuL5ePG2n1eu",
  "key12": "3o9rSzwPZ45VAWLowPf7LgstB6PUCs4RQZ2rKnzVJdVScmfUWujETaWA7N8H4ybxVoPNTdhXtnF9CDQTnAACqphL",
  "key13": "5gj7yRUgft5pfjJev715fC5s1vyxEejEy9uefYsBHpQCVZbjS2rRgHHvmbJyrL5kmnTdqoK2HEEhKzoBR3cquGfL",
  "key14": "5jyPH9w9SLDZt1CPu6ZGjPKCM6NySGHwYNAATvTa7ykcCkd4FXmeVXDi3ipF2aXobhRQGMh3rBJ9bCUb6m459vF8",
  "key15": "i9XkpoDiQtnGvkbwAchLEL8b2FMBPde7hhQghJNgHQHyNStoGMgr53ZCC9NMFhBzhSEnK733YmjrGUKyMoEBwWj",
  "key16": "3bd9d865VJ4MURXEVCqkfACnSEhQoPGiGdrSfp7u9X5is7vBeKx5zyjq2oAjcqNRYBjHemBirzNWRb5P6U1wQxpz",
  "key17": "2BjomUEcUPJddbU2XsNbvNBovFrAcyfpuysTnZJsTAJxq84Ue6Egoh47nVWPveFQeCjS1W3edLznyYtXwTdtfQkJ",
  "key18": "2Gy2sqMzsWBnf7V6X6SMH6JzitbHiVwqToMAcs8LEU9mPi64KGktBVAVYnxfSk2RPku7k6AivUg3yCny37ykubdJ",
  "key19": "5GvqZDeDoXfThaHdiHyKpjRLTQ34H8cKmrfdsFyzoy4adWpgvDjvxMMs24ovx16kcE4vGaq7Kyv9Ur9BaJMZgs3H",
  "key20": "128HwzJ4c2FZe2tUrJSYGL2iAocUsw2UzFoEBZPoxrsniWpxxGGHJy1eBJvxWb5wmwUyQiqmMq2dEz68FukBTrWy",
  "key21": "4XULn5aBLTCtX12qZNdUENFNKMmAiWHTfv2qkQ1bRmYKcrboEoQnaEz9EvEvCi8Yya8HB5wUMibqWecb55afGUFv",
  "key22": "4LZPdLU4nTh6dun5Z9KERYXR9ZutuVbzBv9zqsyWEUJ4iUybxXqrvBxZasptGXyybJoHuGMNij2QpRkBFZx9Rwbu",
  "key23": "2cZD2qDk3wExwrJiGKaigq1mfTdwhsqQVSXs3pgY1MVeL7zVMNDsXJZu69Z9cvN3hvjdxutRTBmvC2SQqe57mn7m",
  "key24": "4YocKYoBJaQrJEg3xxyfgSaXDtZDLnbbBGh8etkeda2R1V3jMPqCnx6XofsabMFbzaQH1S3EeYfM5DgAk9gVU7J9",
  "key25": "sWJ2AeUELePoaJx7esZEU5SxgeHQPrfXGJ4pXLJT2J8YQT4wDT8QbM9u1j4Yh3ZuWTxJ4qRHyYAG9Uj1d9m6HDG",
  "key26": "2HQnWn6nxv4jK1F6LkcNyDbWhnuYYBDNqKLQ48Puv5PasMYftDCocKHoM2uYTDYoBTFrmTkyTe7vcqv2F6GytFRU",
  "key27": "3dZJGVgRzptMnNGiD5hH7d9ihTzoQKZKuzVuRjSfTCYYoYtpjgTypvND4Svgngq49j3B5ni3KajeRSp1pW1y4xRn",
  "key28": "2SkKNFJvATS9eUnPZXTWyLazBbUoxYJ5uGWX9mGX9s3DMgdEGriAyVSfKN2S6Rq1MfkVN1QB17LfJDhHkHyzkmdE",
  "key29": "5b9mLnBcg3Fbwx4nvPbWA4r9d4zzRbw2bbNy3nyzCrJqSWgvyxMHWBui5cqePNrWYPEBH9NfNZPj2VpVfARX7f3w",
  "key30": "66soh6T2wjERve7Pm8hsjWpsaNTjZnXSJNFUKZTP8bs5MnNUuz3vM64uGrA1ovGqqKXS4vMzuigrAGG7SCdKtJ4m",
  "key31": "26U5dBdgdjXX4D1EuiNiXtfCgXzAvLE2evsp4Qamg7w3bXBXVobR1D4TVz77os1NH5cvbhDTXPF5j67K32bEHXPo",
  "key32": "41FLaDiMVngrJbuwrShhpx3FSNVCP6Jg62H6F2MmwLcp3SopgWwU2bJjXZstqDxPibxYH3Kr8vYe81qT2ZFF7eg1",
  "key33": "2Qc5hdKC8kQUmEWhp45vkM4buJULc8q6CfqcyDeRkxhcQRsCTy77DM5S99dPXXfG7jwSteo8Qad96n7cAuDuBbjf"
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
