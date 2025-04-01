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
    "33JQJVhYv8hexfT6wma457LFKMCwJJCWL5wLazPPNFLqNcs13AwfZDbPj5XShLp6XJntB37gUMwCF3wHyck3YrKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGR1G4jxihSqrWJ8d98EPF9zS9XuaAYVfqmakURd9vCq7ntENG5AfPT1CSaTEMcpQCoonSUtfeCSB8aQEWvVY9A",
  "key1": "3LMFW41fmXKekNrzBmAs6g7zMzvNwKU1pCwGtiQmDxYJKbG1MaWBg2hiRWd7zZe2CbW56aiS3PNG6DXotUwY3TUQ",
  "key2": "4dVps6wJpQhd8ydqsYHXarWzEUeDsM2PNtJKMcwuin686PBfPV5okUtuzgGaiA6QcquqWeqUSvpaHi9dCkoBMTvX",
  "key3": "2m2nvtTnpQrhvLuS4N9EGTASLDTcC58RZfzDtnCAk4R9w6a3uEPcPLXjfMBYPBaFJtAUSZnHaACGqShoJv9eWVNd",
  "key4": "5BDhgMXSATxQcM3CNb1WXF5WYT3f4HptjxMjPZstJbtFKkR6HHvYvsf3stoKPLDtdNcmreCzAa2N6atPTFajLwp9",
  "key5": "29v1YguVGu2kX81CRJ2HE2Ds3ciH4CYhGQDfBRWz8vvMk8F2WSYCdVGu5JPqnF1SRoesjNoC739mMcjvX59P6gU5",
  "key6": "3ADhyEg1eoodEsXypXmxHYaeagkpzxGqynSERNJph6zvbmGaBGzXJd8y5UtjPe5rG3S6C8SQUfuRWtmAgtLiPBs8",
  "key7": "4FxW24js5mPr3k5tSeBbv64rJbEWAEmnNz9AtdThvb7UXsKp3F1mnJxRoxe348qLuizorNBLxhasG6FX5sc2EBNz",
  "key8": "331jxPsjZkbYGwNiZtxuUwFmUnfT83xLHSnARJpZiboFBKzeu2hHty5GGuzJKzhdoBXTNwfkzvWyoSAQGSjGKuDC",
  "key9": "2jknkSjB4n2kHyZGYJmjjQqzzCnQSoSCfuMwmaG1AHAD5RKZWRZoPsuRtGPbRvwsrLZvqCEWLAvjL5AZCUaSaqts",
  "key10": "3W4VDX3FXKTDZXJLY2DrHc8822bi1vhhKe4JQsSkeTdDZkcSACRHEDJH3sDa588BZBeYhmaURf9Bt23jX8bE6pm5",
  "key11": "3AhRwd9SuCnfzhgpPXbn5wKXtpHyQSgW3Q8hvhg413hThTPB9dQ8Aq9wPBqJgCxQxRLJwKno3NGajtCzjmX3JWpv",
  "key12": "4trhemoQqkjfSfNt8JgdQ1y8UjoKbBhUqed8HAgYoFPhCQc5XfmxKp7jV7qtsyHf3Q8oVJsAwZhEmXWG1iRzcKzk",
  "key13": "2rRNcqvCRpxtmp8B3SVBE3TNwJPhKmQfAdQXJULLSk82MtHvQfDQ8Xjn6jcxQRP5RV9txC7hhurNLCspwmnjYun4",
  "key14": "2CXp1iUGW1NHAzqRqNyTetSNpRwT34qMae6g35nfNswPhUZuS96YFxJmJEDBd77Jtsnya6qM6qLXKnnN48wi4xC6",
  "key15": "F6fcjsT6fpWT8gRGsXqSrNAHGaiHQitFQbKCacK88KhWTNzFXbxgHz4RTzG23oXuSqdNCKKqX2zQPrU3RxC8je4",
  "key16": "3fiExEvWednAZgtS1L44ggCmktLrHWjNHa8NFKoh6xwXPh5L2WtMNhr1435UomhBjAVsALiPNbbFahBc5TDxcCGi",
  "key17": "2jnNkKX159xkZhtFFvFtnsDpCFNpdLunRCAsuKsCt72WT8gik2Sg3jGkYUZYprVrD29xJyHSBoyKhWyJyD9AUsS3",
  "key18": "6232GKYvySeMDvq4LShqncjGr21nEqpZJuEvcZtDg8VXuLGoLsypVMQaHYSChN7PyZnQ1iJvCdNYkCt5sTt22LiQ",
  "key19": "3ytH1yvnVNrQGAodFSivsVKV9hAszE98rX9DAMsiCLRWmDdRRYqPFyWreDkiKG1tBA5zCQ6xg4u7FG12e5vBfWyX",
  "key20": "hREFdhgqRHFNuWo9kkjgNL7FmwcLBDntNHtrMoN7vVTDd2fSzm7bmKUKFoVYUesaJkuAAdbDnXLTLwxCEGuCNhK",
  "key21": "Ubq9RGR6LfataExSBzdHNkEEKf5kY3h8Siezv9EyPVPsStabT4tqBqUNLxpi2FaZLibC42EHarcMEQc2koVqNH8",
  "key22": "3nzJe2KuP6mormY5xZXAz3GX11Eot87aBLeVwaf6613uHAMdnaUxXF3JXrL96FAy22PXb4udZe9XXrq1hp7usewa",
  "key23": "N742x4airnbTMd1JtaTPmkY8EDBiZSkbRuSq4KWXZkV3e6vCNvxqu9rpcFSZ3a2gwSzL5VjnbVkdQce8gDrZ9nT",
  "key24": "2qmLRCHHFQUZW2MdfyQqeaJTgADhxZHbeyeXkXcEvwwPuwFwFG9d7uxMupzRNTWbZF9FcdgaqGQsCzz4hP8QTwXC"
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
