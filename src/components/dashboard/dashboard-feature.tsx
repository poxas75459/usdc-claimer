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
    "Rh3C3Dg4cbxA1nkVH6HzJmMJ5Y1ZyjZqvhoB6xUF25yR1B7ZbwLJf2hcKxiSsy1WW4minLjbvT8TGhynDxWqCpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pB7P92XCqA7BbyZmv4mPLDvfwanCfVmf2L8bT81jWdRr5dvQo15JFmEA8snFnSkyQo9eWmMHib9LTSkPJAfbPFr",
  "key1": "4ZVuS6WczVKPxaB1kUqkKhMKhvd7hxrBCTRNoPPbAL4oYbxvr5zvkXfDKcS4nPM7yF1GxFPE5Z4paZxp97wNcMeT",
  "key2": "4FSvEtKmhKFsMk86SQ5gYitK4DtMKnxJ2o4FFNvniD7vjtpN1SQqAfamgzmWoZaBpasZfxEtsWduiEpXc9TxNAQm",
  "key3": "3HdsvhT9jX85NKqVDDb2XLqRuUMTiMH45xatPqDWFYdv5uRaPWsnJXQ9NWwDYZJpy6ogbGZmnFPh5ESrXGy5iTpv",
  "key4": "4FtEA4L99gR7gtv1qarTrco1hnW1KDC4vaKAbhepo4AkMTDfs2ggcB5RQFPsRP1qquQhgKgcEWHzpksZZTSNDMnk",
  "key5": "4KtwgehXtpwqcmxktzsUoSybEYJQre9KCe8EuGr5JYXNPVZsE6Ev6rXu5vLLet3jmbJjKGKLMbMWcdbjMB28duHZ",
  "key6": "KcH8EdYhXrF1ZSpfMJ2EYCzgmsxBW26wG7QSnTyc4dhLQE8S9S3PTcZjSSgAY44moRBUMcHQyez7ejc4yvtbYob",
  "key7": "unzvtMDioWNzkXAGKTfNSZpSdfDV1j36uhsepNgE88rvTETJufW8t31bcPhc3gEwqiNx4FAWex9VGqMtp5RwWHW",
  "key8": "4Vx843qgi85yh8F8p3qCGqdgH3mDpW4P1Q6KMcvcZ3AURJja3h8YQbFBFhDSxdK34KMs4LZC4TShySgorWEgzN41",
  "key9": "2kB9JbcaYU4gvsfxkmDcNTW1x13PMcmZW8AaE2CsW2cNtVBM6PQhzR5zCJhZqdsU5R3t33M6hN7y5wNMUSzhAggT",
  "key10": "5U69UJFn8LcMVisoYAFPKm6emVhmw1KhBwTFxL2i31tFJ21pVB375wtxDnhSgks78MeF4nyCy2oe6x2RtByatpri",
  "key11": "3nP8kCz7V7YopPVbP8BdyRvwq6a5momqFxRgkjaiyApjUJM9p3piQsW1wZEyxG8uSPuSEj8LvsrzKtJLWkJjEL2j",
  "key12": "4iKzy6zVkLqAznDKmRMWZ6iere1ihAWEyjGMM41zzhdGkKiw43qJcf5yubibkGLg1grQFcSTRhKsq2vJ5oRqtEQK",
  "key13": "5cWW51Sx4Dit1pCTfaygkMy9Cc2psvLDhzPdAF54b9BArBoPMVDDf2mAZ2se3Xz4fzm2W9WdNC1mdQ8iqDvyJncb",
  "key14": "4kkDKHbrwsFDWZc7qh9NxmSN9vpVZBJ23vZjJq4oNGibsJqntcww5zi2eoHXsLjbDTXWKRrHJpUiLLE9JdR6oYSy",
  "key15": "4FXPzx3uQpbJ1LtTrCn33XLs2sHa4LgcXnHSQxCe1dAdEL9EFRvtZxuiQ5pMmMwyk2Yw92hFRzosWPPaDz9tyYmt",
  "key16": "239mk6GFe8tX5F1Mxkkci3SaKn3r8vJ3DQRBGKznBGj26bx8hAuZfR8XqZKTFBsA8D2racDko51rLCF7FJcER6xS",
  "key17": "4AbTDt1toTYVaiBwix2YdubxwzEgzPCC5WUEU7Mdn3Tb79zrepjt8bW8MmHriWCZrhwZW7sFihBgDVgq5MfJZ5iC",
  "key18": "4GZB6ASyMsbBJAhoMNqjhU5XKvr2AsX5f9g4Qdm2ktrfqxxUagHm4b37HHtuj4CQe3viMCY4Urqj1UspgK43oZ7m",
  "key19": "5NCn1MUFPiRLswSriEthNqEP9vgGdz3VJZYUBPiKcNm91YiWvMZkEeB7X8kmckGsbLtKHLaD1PQapcMmpKErswHq",
  "key20": "38um7KBQ3eJPWaxoXj42qMG3sW82vfKotAcRM44ndufau7Z548MFRgcQ5SzHub8aYKtyZX7oKQCDqNZ1GYH2r1vF",
  "key21": "Pbp8ySAyNJVKuVZFQSY4gLLrstMZXRef1qfFwKL7LpUT2hn5saDWwKVLDXUGqg5JLwLui5tK3wB7B29v1vkRkJ1",
  "key22": "2qos2wfjd4HTrVwsb3zDQE1HvDLwDQBcT3k9hwR4miCK2xM6Wr3QD9wjkXMfh1d1r3nM4eMxPKCb5xKv5FQzi56e",
  "key23": "sthrz6iQ9q6Yj57XZR2Ca38mddeGQSV4HenXd6reexxLT3Q2jyaQexHLdfwRsZK3UhZp1ntebnA8twKudB8a5XE",
  "key24": "tmgecqn3CxH1YXm3mSNxwqgYhr6STBAUHfQPj24K9oXmBezhn6wfUzSSyi33xZGBx2JK2LevjmyZX9PMzRnZHgu",
  "key25": "29Mts1sFFedavmT6LhNC5MnFgtrSc81TSGSqYJjLaF1KeQd13WyM35Hs3DbYV7WudJ5xrgpm1FmFGdm1PXHzxAGa",
  "key26": "467capf9aubZyAYs4Wy5mVG78sH9cfx8CgYo5JpSE4mm4SHJppj1hMAzWtThU9Xbzk8ncFfm3pq7E2KzURzaJ1Yw",
  "key27": "3VXvZHBaMm94XVytW7k2D4iC8Hv1MzcfxBoXnCKwLy9HQUQYH2cbi2n4PHzeVqDZy9DTa75WvncSt1RCfdenXoFg",
  "key28": "4uRumFRr9zwFZcpxQnqmu9a5osDr7GQGxVF7A3GpD7LY1jpnKuaAfkcFSBensapTsYu3Fx1jV1EcFJv6Hw1LU4nE",
  "key29": "2ee8RvwcZgdo2XcdQWPfMj2BQQjuPK6BgPgWkWdfUP2G3C9N65qa8BrdYDvXfT4g67JdqdUnNYLMbbLXi4xpAeig"
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
