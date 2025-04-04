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
    "4P81WfGmtNpnAEY7JXhAoHVHketAfD4gsHWYaUzfJ46rNyMgTXM8MXeDBVZfS6MGYbUXCA7Uh8jbqPfNRvTEZQp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCgXEJi9YziZ7pzoFpiywzqE3CoN4YWcYjrq2813bzMdet2HnHYRcneihic5USWkvC2a1DAMNNqf5NkraoVYvi",
  "key1": "27jzLmCyp85Mw5ADFFfjDMRgTtPgDEqmkxsWEgdsZXvPKu7AWqaMutRi6B8KYohN2W5Tc11EcayjB3NZdYQWuz1r",
  "key2": "48F5orhMGpCL1EGzESV7R6VEZAtZZt5ggirhUnTvjQRcNWRC7nriWUzJMSsmkpztKcHxY8BVcz4BvEphaXhFgu3R",
  "key3": "3WcEhVNuTC4ntQwz939mJ5QUwgboeXRUuBz79iBhP4VvZ3KcTDvJaSYWRmwt1tiNeQmrMqjKm1kvcZZ9kDfkRcpZ",
  "key4": "2po71S99aVkWQQuACWzpe5xe8PWJhsiceAsURUaN3tCbug4BCtnX5Y8Qep26u8P2rPyFEESguMngi4hnyEF22cPU",
  "key5": "3aqh1BSXDjuYEypLZVhMN3ujqwNSvNC8zjm7iGi78ttgXjUiHfXMyzBURw3oR7fRsuubi2tuBmCGhXYYMV9TZ9Z4",
  "key6": "5eMXkwMAKerpenafb4bwdR6FX1NMS3wEg48YA6pRwdMXyfraFEBASTZJNdu6cS53aj8DfMBGzLkfsZZ6w4zUPDVs",
  "key7": "4f5v7ikjVBiqjDF8KRiAL4ythzbWWgA77CHuucskie9i3J4XeEEmf72rVkxf4u7Tjs9AQghxTjLhTjYNCGe2av3Z",
  "key8": "b7qcZY6kwXH7iHBAvha4Bg6To8GdXXgySZ2uTKGKS13YSrQEbG3gxfrpLx5EkJ4Ar3WfCW9Fq7UZpa9GyJhU6WT",
  "key9": "efV2qkhTGVKm25sNJMZ6DW5oKnSYm35dz3CErF61qZmD7RpkHqW7bEgUCqbVGG6qgdEpXt1bqeyaXk5JoaM3PMx",
  "key10": "5yt3o7jYdLgQrxRx2rks1Qi4WmiJt2NNxKdy3WxjurB9qUFBX9aGijUKEfqe1NarE3bFDD7ArRRLWYWzehW8vywB",
  "key11": "3pq8imves2JBH4tWqAyk1ziTXbL1Gdmp7pfkj6HFxFU2gZb8pKmrByMiWuBsxgBHd7c92wJXYUH6qJG5eg4xJ26y",
  "key12": "2hwfw3SPvbCUKE5Zj8aePVTgBGUFRR9MYzD5PmPjXYhu5b5Zqdu8MCua3kWjZadzMLGAd1qpqte9CeJLxDNMD47j",
  "key13": "fxekJFEdSRYWhM6AF3XbCNbbHPHjGiqgvebLJMZyKMLQ3G4rSgZokmE39BXVFXqTPXkvrfjTKE3E1VY7XSSW6G7",
  "key14": "4yuiydYKzgp4dbGWdCvCTHg83SRiFTZ9o21egPpjkizQTe9uZSQ9CJGjiJDbG1thy1fzPf2s3DUuzKAu7HFCFuSo",
  "key15": "Ygrctis2t9bCezJL9biiZQ3vii3699YZvKSju92BXd6TyU84KLuu2D9eK7FRzTciMn9UE4kSTmHiuasRsc4UtJd",
  "key16": "XYCbnngua6VNUVBme6hkdc9tH42aHxFWFKMY2jW3rygVrE9BsssVhXuYHKwswcVMnh7m9ZFJrYwoaWp9sjLwn5w",
  "key17": "2pesb29NR2WKC45AeNfki4Jzb1DxxBZbis5dPVGdEJwwLonqjD52XL5RQu56KiKQ2QWWUnCmeGjHi6U9NFBE1t1S",
  "key18": "4MePTYHpfxuQhMRMAM8Q1BJ4Et54xfw5FnK8NTfjAyqQ9hKj829eARHWPJXfGkd33E4NtFf1JcddDjPWKkdngxd4",
  "key19": "PzZQNygaSXRX1PVWtw3HeQT91u6CKUN8HqjAAFtoAL2oSujbBrYgg1d3fPH6WXxBQjQgCReM6cJFZmPF128Q5qN",
  "key20": "4xpLfk7Lp9pMV4R3D6mcGT2sbuoGbSwVkdvbUz7Srbx85BkhjNfLhR6nxV9dv8xpaYnf35etDXYMRG5ymXHHArW4",
  "key21": "2PE8FGWvm4iSGoCnFhZ8mBqgbs5rbbcu1E6YwPjQZRVBvVq4tpWsF958SxoksLjCYFXgjKh1bDUsjPMAKSAZfNAW",
  "key22": "3YMSsaM8ywmKi8sfwBp5szbqchndabPniwH6iUyhkok4ZFTf3R5G8aZKQb7YQPXcY4NvMJ4jy2oGobLsbHt5MLi5",
  "key23": "5ddfqgJueLfHMbgZCeFnCZpG7DiMatqBBBMQPqHXagpegGTaH1YkoJijRgcBwaVerxm4mFbr2cXxzcAu5GqHeGJg",
  "key24": "4EpttM3PANeEtPtaCPYRBvWPZ8nJxeUTC8kBUWWZQ7gQySjSUrc523SAa5fnn2vyJpR9qKfvuPDFnQfP1qvWhg6K"
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
