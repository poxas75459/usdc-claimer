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
    "3VDEj5KchFvbhzjinTa2mdXpdqQ2U72H4K4EtsnZRZnhzKZRpgcBwa7Pr8gRVaduk4yx1A9ZfkZiCcDi5CuYKNXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYV6eo5CgedCHvTGZ353WbmmgzBQeyfxb6beGMtPiMyNWfVoRoKGXt5RALFrVUEKssSRWexVDrrjNrGkojE3sJS",
  "key1": "4UPGGdQR9jqT8FWKQEwaLgeTmjGgYFEHzDxzLHJEYxUW9WKAv8Z2tQLZGcu3QJJYerNc9u25PBW5a489XzUKLtfV",
  "key2": "38dRKQgWY7B1rbWUENGSMot5kqx3ikZF6JhS8TYvrYvKbwMVCXcwRmmM9TM33hpT68UD4XuwDnuufs7NkKTnDFSj",
  "key3": "A8FLgtGqy9Ty53WMyxDASSfGpWM7ZakGP2t8FLgxUKcxuos4jNkqaqS3aoNA11etSBtuKahN3ynf2WcURfYzeHW",
  "key4": "37i5cDGz17dWGWehRCjT3KtwPPDzEyVBpyRSYoSdgfCFJX7CyUC6sgPoqPRUC2j5dV17WdHA6tNwgFAapyJoT3CA",
  "key5": "5a4BGnWcRmz3G79abfASahsqDMYbq1LFFehMLqBdebuu8mztPk3zQgFrXR3ADHQktUZBbv5xz9dVYrcFoZJ1eJf2",
  "key6": "3Vx61UU79UwRLRzecPsTa9j3scaiNKVkVArja5Ud1ccKE9Zr2WQJVE7HxrD4gZ1qZwnpFDi3a6YQcAXT7Q6PLQ1W",
  "key7": "3JypLbzGr8FCJquAWmsB5pYU9bRr2VviHRpGvS87zdrDC5WkWuc9nq8qqiZiBFSdSH89HnuXxtmQwiQV2hUAhg6h",
  "key8": "mFwPeDyTqzyqLx5TE3x8XNULG9h2J3Wt6sWp3kZLTk1T2BdgPBmxuzGb7W7nVkBUKUAEDJTWCmDHhscQ2fBFKJT",
  "key9": "9HemdXhWbJDj1oziA96d1dp9sZHqeMXMdzsSxkzjzZRL94yDj5HnctBJrdv6ALi4GvdoRtEhNiGyCzbvyF4AxHa",
  "key10": "3k7CzT4M2LDr5iASQdt88EenBTajzKcpY3GCgxZgxkX2piLVJM7MCxtmpjVTunT8uSCxRfHEcjRmmueGKQJe2QyJ",
  "key11": "2SuA31Rcx8GuTFvrngmfchmVNksdqZxoGfpYztDdstHh1EB9mx3tH7jHeGFXR7RCptC9i7YbF7jvPdf6vvEWMMAH",
  "key12": "21qGTZ2piNPkwG6meszr8gnrtLQokPFgnthfDm8fFHAeF8679aLgk21qrrzdvCfAcSFGuWt2BaNm6VJ8okH4NcQ3",
  "key13": "TYgnpXaTZgWyJZUGScir9CjY5pgeGX4Q3oxkZXWgqUnHxmdFdM3dzg6DGYW1wouqdpoFZe1bEu69KfQycmqTYTb",
  "key14": "wSkGq8R65go7bFQwmJY25Q5HTC7PnZ1eQmMkZyjLK1TNSXhaZ1zu4BhW3C1JuYrNVeRQHwJo22bsq74Sh9FNN1E",
  "key15": "4xvi4nEY5KSdZvi2mdDWVPp2VVJXo7ohPZ2gqsmgyHrpYYziE7YQw4dA4NzZg2mRKE3tR6E2Mik7qqEMeMsC9Dbj",
  "key16": "TQeJvXMVkySdc2VFHLNXnbtPQu97Xv9yWqJkrzjnxHXcwQ7gs45MEQRPCM8JPuVnfFSxsxUDew4rk2TTpkiE6p4",
  "key17": "k65VZZygEsvTdVoYDLUHCYiDYa2AzDdNMA5qrRn9Hb5rkCAZzSRimo8jfMkFWBwLXLzv9ycERrihVV2H7wzUTCM",
  "key18": "Uq9DfJcedju9Rg8JtFKXrr7YehU7krB6xPsn6NjXyUovGATZnpj98rUAC1XW1NbtCAmLinMgvw9TvSDMnpteEyw",
  "key19": "22JXFLNksLDjUVQA5kLKFBVE4kERqAn2LCqfu7woFDn9n3Te8ZozC6HEJnLzVinzj2qod5z3u3hd8nJZvNB6KWcT",
  "key20": "5VZF6Qg7zrsQSULGirPLc99kD3Bmfg7NosxEZzPGZPduPpK7Eh7XwjKgUm5jEbQgjfvoAnPtjH9iA66x7Qw6BBtR",
  "key21": "2HNh1U1HkSrD8d5wp4izd8twMAzW7QkNDuXjs4oGEQBZEREQUAjnQzpNn68RtMRf65z6HfxK8x3Str5nAEBUtEDE",
  "key22": "2tybNQFB3iWz3erxXAMJQQk44rmmZ9Si6Bh8M6fxhtMzFKvu1wW5PjY8DyxzUWTVWoarQvRUChnjFcAYHZFrv2D9",
  "key23": "4Z3kuk3AoPPBWecT9Xa45PktSozyuyUYNE6Xji1uYh6P4tcj9mqT8okmCijTHLKhFtVkfVBCDsA38733CnsV39gH",
  "key24": "JQWhXJ5feNw8KAhT3vUVTBVGEzgaMETdb1QK5g5afFo1kMHy2cNTAcTxihNshFDh8PBp62i54JuNkbKwSm5Ccgt"
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
