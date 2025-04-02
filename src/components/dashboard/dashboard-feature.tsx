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
    "5Ygw4DWGLQb6KpquQuVCq76TK7JSVPPPcNfc3KqT6HeW89paQWNQvAQ3rVG54rNVbok2pLGH4nJcJbsrSHTvd7Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YrDX8Dnq34MdySPKAmr5EAGHsVRrqtjofMg1PNoN9VdLi3U18hq7MoqANBEy4HEbqohujaXExpQsyXsiSvAcHn",
  "key1": "5jYHUhMXQq3j3D1Xo6w1jwxpbsheq1dawdCqV8uQ4J1DtJYJ3p3xdHhoGNMrvfpLxJTME9XKQpqBjDvLXLH8MZg6",
  "key2": "2Xa3Ndf31hBgmHfmftsBvDNaf3pkNmKueSR3FWC2koPuTKpAToJ3N8cwcGGEEuVZqa9bpnxp7vsuLfkokG6S1JPQ",
  "key3": "3nsKVLS4miVr7ZEiByzEZ1TdskaRxBFGDiopBL46Yfi3ViLwKAVyyfRZMKuatbgkdSf7bjMpiCBFwCnQBaTANM1W",
  "key4": "2H4fhWkH6ZC1bcQ9FYz5sE2ecmrMWezDcbb4w8xMboUB6UkH5HrR4xQXK2Z2W7DbrJEV5GvouZRNYwRdFW1iC5ck",
  "key5": "2jdAhJ1iHX4Bngv7qGznsZGs3GCVwXztH1EMJyFgbwzFntYwhjhw1iDptKuDHYTGGDRgASiVNWAm1Nvinb5Dv4rn",
  "key6": "inNvqQ1ooTcSWYY8ufivPG8ZeSj8L82EuBGCM2m7QwBZCBnWdfcU95iABnLT6xkoAibano6Carom7upy5jDqHki",
  "key7": "3orFRNhTHA5ko7MDrENyXre5TGCp6MCuqQNSn5XscC5Q25yTMKM9JmTheBXmqWj1AwN8azd5Pz5wmspCZv6N5S1w",
  "key8": "55UJiQC5fU7QEr95ZF7NLi4ucZgebWYAFxMbwesKdJdhmEHb38yre9zMGxeLGjNmuvtAv35gVXhCoGjXRz16zm2U",
  "key9": "PsgtPB1zPipqS3KF8jvFzhwvaT1Bq54qUdzBSGP5Vo7Y8w7uUfKvQ8BkYbHEVnRHHbXBVniy49gW9TXdGMH1t89",
  "key10": "2ZDxq9JDTqVZWv3STf8uC7fGwS9fwWuWJj6wa1Z6ctb5CqLJa4sJ6e1jXHFMA4u1N5G8P6Uj9JGb6KVgnqSAkUzX",
  "key11": "YxM9L9zszczXxDdBLEZznnqQb49rwL5ys7pRz2hvDeYHQGAdwsrr1YSAFXRjXLAS4WbLKzgGrAsGxD3aXoKBM7Y",
  "key12": "4c1eR1b8XdhiEbXdavuoJp5U8Uvv82hSwnYEdmN97u7gsJtFXUT7kBYEvLQq4LhyQVJtAsLnDuFfyaJnsAuQhE2J",
  "key13": "34SNAFko64q7tB2LVyHUVupHnUMC2Kw1crhgCvC38PeLijp7PFrnjxnpHDdqqyoK9XDHhuhj8JRNYT3fkZDXyPqQ",
  "key14": "4YNevSZJbuUpkk1SQhVf4r1mF7FUV9p56REQHSkhjCDRxTkrfyVq84bf7ZUCUJxhvtshVQzNWBoVwqJe89M7rBAw",
  "key15": "27cq5uvzzPj3V7Ezcc5Vp8PeyHnNdqv1PHUihUhP3eSnJbnzNPkr3tQ9s4uGi3Q4V7wPWQnKP8cqSfAu7FmC64Bx",
  "key16": "46PaohrFAJHLJK7inQaHCGJK7ZUPQtZVP6Louhg1YuEGRuVjJRh4i5G4NcrkZZAwBYwDqNnJQUbW2azGckFD5uaS",
  "key17": "3XeMD7jpEdM3LmLgHZzjSExNcLCgNF9rEs5ePu9YwCNjqNh1dAtAGbtEKSN2BrMiMF5jDqmKn5d66X57AMdKt1T9",
  "key18": "4Eo9rDDF2JMCu6vAs32H4EjKS7RFVwFGpxpgY2UsHidn9Mt7gKhkCiEXa494mqc8Fc1Vmzbic1Dw4pxTTKZynvAy",
  "key19": "4SGi3xqAYCjwCmfxDnrHZwRYo8xH8DfTEEHkubUnQwbADG563NAHrELCixiyxdVXmJhmp1qiZwQwDA6rZkFVfHHp",
  "key20": "7o5CUcWYY2F6k5voZyNBFA41skWNMbUqJ4i9xgeZAMCMi7oaQjvnR5StQBqDSiWVeXgUYVEut4kpVF4WXLBnt3Q",
  "key21": "4hENGLrcaMS6zkiT7R3jBJ9ZEAxS4sQQMFUrUxp2S2JSGDxT86Q9HWsqc34snGJo8wHEELWAvoLtgTNmKKxoBW9T",
  "key22": "2W5VQtzXwPyTrTB1CxnAu7gcJCnSdy2vpM6CRdnzpptLLjjFA2QzK32yQTmbQULsMyAJm4dvazs1ZYWtv9SesRHc",
  "key23": "3THDf6Nomou557YAfTWsnLYZaukaQaiHzdVD8U9CRtkdADSNEuEEapaXqNAdE1C28U1wMErMsZGVXCU38nFBTjcg",
  "key24": "57hkdBPzmtwcumcFxF9DwcLBx3kxYCXbW8MaNfdiVeLnPZZsrfHZhK7oyyyNRBb3gD1cjCCDN8ixX2rws2ieYwGV",
  "key25": "2ZHR1ttCWPjzGb62qnE3jsJo4z9j2fpN894Fx8LPx1N5pPvX8N32yQtqPoK3rRBGZCQxbZFWD2Vv4hGbqZ33pC5"
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
