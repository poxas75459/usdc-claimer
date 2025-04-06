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
    "2gx8VSfBLjMQHLFxPjeS4Xy4J9ZVQU3onsvxX6pG8dKsVKMNLdTduzjEu3VNgz7iTTbLHj7SUFJP5XdC9nKkM9yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4wxy535LMYAwMmfYv9fd6m7N5ZqrahVzVfy9nZu29TRHn8UGY5BR4HXS2W1MagDxJ1Q79Ss5uK9a3akRyoKWFB",
  "key1": "2mFUKiJCp282JESWAiY4XeJtit3auXDp39stRxRdFPSNjdy993hETX6o1zsnPc4mb9Aib7WkqFFKKdxCUkajeZAC",
  "key2": "42Uo6ttwEg75nwXDXV4fF6yLJgqbXtC7XucYWkkZJ7KAk5ckZ51NoPNwfsWDx1CpVvXG1PrkoEjFjW5bXsGeTB4X",
  "key3": "42v5R6AhM1hhkRfuqTkyVPWYyb4yZ5Qw7yc51UdcSDHH2bLFumfxoY987K3ZETh6uZYKJQiw3zzvRAE97SP64BMZ",
  "key4": "65NLrvycyvVbbYvL8oP3o4783PxYe8Njjy14H7iUz7Q5uyAvb8bb2sqHFzHPLz89auKeadTM2d7ugeVfDhk5SEQS",
  "key5": "31GZCLRAAAgiMLNfeDrUPzr4GMQ4UPBWvcxkEX6XkEREjQAZh592pbWCWNxUSQb3zD24GyVajpkywZQiJgyQiUH4",
  "key6": "2AcTQ12Wgkzgf3hpTD6kuTzHvnMubTsL9KjCitZqPDC9JqtJ9FjpeQqer6Zds2SmFmtETSGt8tjJWLovWcoGVx8h",
  "key7": "4BgUFPmWtf9Xv9ooWz6se5SM24BqBefkDsLaLjG578s541GNn1vPKAzZPd68HTgN6fSvgtqUqi68WqsSjgq5AWX6",
  "key8": "3MuPs5LR7XzrVzFBSrBcKeTHMt659i1oHSVmhxHPHfCSo2eMnxWgdqAD6eW9XHcZa1mYGMhkv79TWu6nzp4iPbf7",
  "key9": "qXpL5FzWpdixW5JDT4Pse4rsfNSYrwafjSSYZBznpxC3dmfEfMtq3SwguPqvgfUTbRX7wB5zX8aKYi69Vuf5tmy",
  "key10": "aoTvp3bwwWPsHiMFvVASzvhcQcKZfgcwhsFQo6KfUXu2x6CJd2pGg4sSG9wG6uwSYMCVPYLyHVFzQSHBrSJYbXr",
  "key11": "4rsmicXQWUcLzVLaCCa5gcHaAvgx9uSh6L6dPsimvB312YWzGgpNF2P8jfRmpgCCkNr6Bjv46FajNbRmJx9V7buN",
  "key12": "4dKNGhzLKz1aLFiJFEjFdDRpFcLczgNXTkaTRbMg7Z7V2zk5LGKBAfpEEh28bKoXdGbM4ZpeVgFsxhrT86QnE3Cs",
  "key13": "4Rp23etsyeqiitWUTQDq3MujSYTNCGvAsVTSJBHwVQ1kpKu7YPw4cViiSMVgTaZVDz5N7WTPLMAoZWxDWftnhjuZ",
  "key14": "HYiHy1PuddSruKNTRD4hvW5zxVSy8fkZLpefTUxLTt5rpURaCn4rbHQwuNZh7rdBrRRxXvQDarbsSY7C6dVLV8X",
  "key15": "21gqNWpEKkB6YXDkCtCtcVjzSFv2EuTrhxH5VdDUHZ6Uq6pYmVYuSzWrKo8LjAY3Rzx5J23gkKbm9Rs9HtRuDKgQ",
  "key16": "3Y4uDjLiNHHgAup5UWBjMxRmaipf1nWjFkdxoXKCSc6tK6yYKmGUFN4HEQscFfXQyR9G3cTN1m4GbWEfAEYzE9jj",
  "key17": "5Qf27FS7tdtDdD3fbtUii7b75PXxVocouVGeJT1xhVuXsiB2buLsdzfQaxF47vsqzrUmRAehJBBVkfFnaNRBQ9PG",
  "key18": "3QYhU5svbNFq4cKtpBvZZsxyEwmwHLJqeQ7Aana47icepJcC9qNhRspxDXTcQuoHZKhSiHoHEnSkDnBBZo9a6pVH",
  "key19": "38SVVQChJiDjKHwvZ4CGzRAm46ggqMi1HpWgwPmixs4H9PvXapqbU4ySFaBwyNXkeihZArifnwoxzNiELU4jHMLM",
  "key20": "4AhGs44C8n34aacKVnKKYVm6RDZfNyrX1hiqhghR5oWqqh9aNBMFCbVZKBZ9eBZrxk8iw1hY5Agvqb7n2pgF3U9n",
  "key21": "MG9V6eWCV53cgd7Q3LL3UgotG6FH39nUdeHjf46BZNyq4UMVrTMsFoLUXBfNHYr2vFmGxBhaf7FSRYy5RJcr4UC",
  "key22": "BgwYSTxxXrv4eXKRD2WKNLpVR9us7Pgp3sQP58PmkRaS6XJksiuXXTYo4r9cZRTZf3m8S5WShZrb5p9xVQf1e5o",
  "key23": "4rp96WZBQQvgDiaiGjxGKhpmsgW4TzeRVo1KR5eaPRnixCEqgGLCBbpSgB4cu3WM4arqVov17GP5kBpQZp9QgHGH",
  "key24": "3DnoejXvP9ym6F5sd72fYCQTqb86EYc4xXdJ8W7vDCGdiRhsNJ6akMGZytGsJQkknyw5nt3ngP8q4TPZnEa1aiBN",
  "key25": "4kA24fMuVDpuJvhrXAsDKVqzgFL9Gh7y6ARxLDdoxELaSMN5nhpbtHKNyhia7dnEqrX6HeGUoxDUfvz1GpFJoQy",
  "key26": "5HXiPoHZxotv31bAcvAmHsRtpU9hyxNkSUqQ2WkaTvm8MHjgwt6gtn2row9Ko17JtFnZuArrmrquLKWKdaxYkfJp",
  "key27": "4pNJToWZY9e4qAesGkhWJ8XdhDsarxmKytgqfD4z5eQqPGS3o1WezioiJvWg43v1wTfzUPAMPmzgDy3ceMKRYamb",
  "key28": "2EdUK4z5jJgcEpj6qXqiaBABP4B8uicWdUwZXBvLzotbgq8NVTW1vkLVFERuiz5vtAWq9FiBq9HKctb5ujXsoYdp",
  "key29": "4SxdVad7HW3g2RUJuPDyuxZjYVb8Z9gPoJ3JL7AeZLkowa5m9P4TtVwSSuviogfq8YChhz1scVtFmAwJhmSrdAXd",
  "key30": "4Kp7rge2xjVV5qzCnGuuanrTWyKPjbXvx3FeYPKuVm7WbCWnFSna3Q1t14QFEzpmYJHnyCrf7BzUoZTDFuA2PHNZ",
  "key31": "658HJmeqz2FVaVoiSSLC6rfH5UZz4pzcmRR1npjuHpurtRnUYr4DABM9Ji9Vwgb531d7PiL62jNGrFMPnjiofFjT",
  "key32": "5e97c7SdNVHnh2np4SUpsoXBvfRYebEEaJw2ekLFMFa5rFsDSPCWsC7auJxs8Du3rtTCvP2eKG2dxLoeerKAyudG"
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
