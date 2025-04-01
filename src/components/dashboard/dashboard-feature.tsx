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
    "2LoM8yTsT4CrJaBVYgwwj7fRH9R4GeXJB8LRzfDwpieZXoSaR2f3C5VN6TT5LoDiEJPZwJRDEnGzHnfLHxx18s5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9GDaKbmx1XkH54BLTbPimgoZXxCRyyxmdFF5v3FwJpe49wizH2VaKimFQ3G3C1sQiwwL2Gk1pk9tircxRcSHVi",
  "key1": "5kSATtyYRxFw3Hwg3oh2ZAeszJFnVX5w2vnW86L6unfYsh268pXJadBvUEyJgMnVphQgBApJhQBxWV1GkU2tbbN4",
  "key2": "1tohEQPBVDigcKnsVe8mpPfdKQZsuD9beke7ya9G6D8NqGGuUufkGNAATGGLQJy25jFvJiSV8BqoDasq3P9fUoW",
  "key3": "4RtuNs5XUrZZaRzCLA6WiPXafro1uN7iHmUi56K8FsBdn3YUirN2ZdyMLvE8q75vBpMi8xHbQ8p5nj7bnynZcvV",
  "key4": "XhQVYubDnixPC4Wm1bZ3uZHBvcPNa7VoP7F2EaBjS7tGvegMPVM3TgLzHjy3rsmjuEY9Ec7g3FMirChaPo37ZJf",
  "key5": "hTbFCGYNxjWBn7WpPjjocCnFg8GCj6Cj5rdGAo9vYoCB6eP4XWftuNYKgmSJQAUe82wdQcNVBqoUX759nLfxwpe",
  "key6": "2UUFmQZKtxbmUJWAWE1MngzTXjVm1aocU7abDjdLzc1rvk6iamv6FVsYUFLJ7hrP58kvo1hNJb3L4W6d18JdpYMf",
  "key7": "4b9icEuSCcJogZyxptTspi1uvriVNswzESyzodnhDG3j3HND1GNYUBqCNAz5dBdvKZWJibCoZsqShqW1xDokM39k",
  "key8": "28hKH41ax5QiRTEGBaU9H4CyAz5gD4DpTYbzLVyJUT2jiNHZXUBynoeZ7SzfoxkZkKEN2agYidrFqXaUc42BXodB",
  "key9": "2ci6gnnQTaSSAqPz7tAeCYyA9RWrCmAVvpMivhAUs8EXp5jVUwMdpBsXaNpRXKjCHbhaQ7QqSftj3oSr9QWVMjCA",
  "key10": "4qm1UWHwEZURwfmcHSumRxateNyfTZP6yb89jjq1HbhevmAbvGL3Mnb62bWnd5xsuennt7AGZxNrwokZ4qRtR5nq",
  "key11": "56hKbSGXJiMoaJbxg6gfKt6cjokuR7u2Afdv3QhzGPkdBdHFJpTV9c4MD4qhHbZLbKGefbVmd4c7oydyZp8Ee99T",
  "key12": "hugNUqbuMQJyMJ6T1h8KecUxST23vQBDybVbgsuD13PmGA1FmX27SW6fWfQKq9ax68WL9Vf17n1kKU52hYUdU8Z",
  "key13": "GzBZ9JgVEdGpGeZV7xJVMLGym5gijndWS2AcSKkutTMg2dyF9kk3C3tJ9vymMMCxJoBWKH9nGgtFuhbhV82PzcD",
  "key14": "ekQd1au7FJpUyuXQwXCWT37x48VhoSA3QPH2MBgtKAcT453LjRmYjgQB3mCVeCaDQAafyLDrG1u3DpR2d3xPj3B",
  "key15": "cmv7tVB5xhuy91PqRauHxCGZaZEtqAJQA4dnn9pXEkvpRBH73y3cnLN8SAWz7HCMGt7Npv4TaCKVwhQXA6CNqZ2",
  "key16": "5gDj8a5ryTvRADQ1cGGd8PuqxfdaJvbgXmxUFTnn6a5ERiB4KtWFUVvWX4M9sFhxsbaqfs3MDAu719Y5qB79m8jC",
  "key17": "5UtMY18DfjHZWGzczSqWq9kS84PjW97LK5BpErr3RVd6aa7MWuAM4whgEf1o6UxFVPwX6hXQQpoBNU1EDAQPqDAE",
  "key18": "2HupALuXBBRWbBPLfQ4BCrB37J9nLvqbiXBdpjmBHzf6G8SwtfyAeiF5MZEUXJ17s2oGLuJLC8CVKfBXXSCpmXwj",
  "key19": "gqE1y8G2id1QhGCBugs8sfTs2w3AZtP8gXssFsFtM5eXNbRhBpHdp6TW16SxRdAyUkjuQBKpwqYjMTPegBP3bDq",
  "key20": "4A1kj9p99JcsQmD956cWUSLBw4KfTfzdxu22NKFbX5NDN8VgFYpmqw1zsHGnisU8kXhZsbCmF5wVYKcphLebpmK4",
  "key21": "4pdg57FKgVCWECLNj5ZXWQFCSpQGwUqVk8hcXmrtLAaAkPLet87BkyquPKREWc4wuHJ1fLGQMMu2M1iDGB54DySq",
  "key22": "2jUgNKtZJ92DRWkE2QaQaJcwfsiHRkSKjcH8VMntzVfxPFR2sRyGuCSBArjNvT4mzSQXLGkGdhiquCWafZLHvqig",
  "key23": "zv8MUGa7f2mK4GAnKvy2UStcP9jjdCramwpRPxGLmm5N5ZPF7noMxp4p91iBzeWxq3Wnz299Z4kdLpNJgb4gobe",
  "key24": "4qo1pRhcVA4anpuRNeMr3iQhG1ATJ8stX3nuc8S8CrEBTFH7HHfUox1PwFnRY7hmqspD8swhC18PrGmt9yAfCiVj",
  "key25": "2ErzAjDrvWsMDQv3CrRLrwd5kXdgbJJEzCq2TWSE2pVQXxP4PDTGLCWUqYgMtB3MumA7M6RrUZ8borx9Bjh8HKCt",
  "key26": "3LGpCxwiuQ6brAnpwYuE3iuwxCgk1KDFHiFUi2A3r7SLuQGUUmrAJNHf4jJk3mmKXtQY2hA6Q7eMkakofUUU8Rju",
  "key27": "5vxmgZjvLess1ZPzY54xGkrXwC2eQG2rk6mnDnbpYdnCR3UibtzjKaRxWJ8ge5zZHULLXWQnaaJqvCqpvZJ5paZ5",
  "key28": "4JtS7kV6AiKbLioNzXtVERCiPmC2qrh2VonXpyV6q953FKZPQ5X6wi87hALrwQJ93nmyfL3HeXvqexiN759cACuk",
  "key29": "2J6JudbkpJneNZzbY52RevTdHU3gn9dCAY3FFVrKg39EveCZMDjsxqCZpmd9VdGurWDModkPvgSD2Rhmh9Y91sfc",
  "key30": "2MmPJhrTnHiWetXE6P7paXm5w5WHFZ8Vp2GTXNeR7S8BoivSm8M9vq4VqhVADrYm47Qy1zvAuziDSMRvnrDVrCK6",
  "key31": "5eggM98U9CFR8sScuywhWpizCkz34pRHJ3hfFPMWXwBzMpCekASg9ci2ctYj8DdQucuFJKQChDbNMMnygHrmivoG",
  "key32": "39uCQpEvmKzsRv2YR8XC7Hy1a55YX9jbCnLkFJDYHYTyeTJAimmd8WHH8Vqz4fJKGw1kabq9wASAy5kACsBUX7Ge",
  "key33": "3eTnwyVTF1Zz3X5bNJv5cTJnyeKDvyTXx7YFH8uLutB99BipTkmfjSoMk5vM4TEyJPe2SvD9gzcouNiAFx9WyfP9",
  "key34": "4Lg6DvjSSPWoX3EVJGNgAf9zntMeyTqJRSajBrbmuFfqyvpbWh2NJXT3nbEaEMu95mL1suqXeuSJfr8E365S9HLz"
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
