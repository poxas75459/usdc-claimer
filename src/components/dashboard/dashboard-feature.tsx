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
    "3zajLHnx1bt4vw3a64RLg6mCikenEmbLLhCktobpqiU9xACt4dRhYLGskPF2x6RE66G6yAhPeGcSX2xE9ewfdgj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyVXqvMMjCLpH7bgVCfx9TEXrdSDEoAFqpMTM64goYpdtLVssveHPm2KZzfm5mtVF9yGpVfL866VEZ6r7vhcSFq",
  "key1": "4GPh1jFE24HQ6xcCbVa1pgmZppjmM6zxkVHWiexxTPE4eHewQcQZiCcLvi3pVZUAan46Gzkvh2QqXXaFdAsapD26",
  "key2": "HzGKVrxxErxkyD72mwZbwonHyhydGnh8JMYgHr9ongYWhSXHwjReFa1oWbfyqRzYuAeoicibh5GZSc9AhT3PkEd",
  "key3": "3oSEq2TJo2tm6NNQoLgezEbtDczt2iKNhduoaub7exzMLwKiphZSLb76hUTna4jhhKaVoKnFFrwbPtvxG4MnTaEB",
  "key4": "2aYsAp7Rrn4Pm124oSqDDYKg1ockFRPr7SFKt3y2V6BG9Fr4f8VWaVhEmrNSJPVd8XXZR3f7oRNu1dPrseRcpFp4",
  "key5": "5yoiuqpeyozoSMzPYpQWyMtnU28t5ePf3mjj9KgiT3rVxaS9U8PRdeRjnzcvQ936yYZGWwLfDwGuofeDzqxWQ6QY",
  "key6": "2fN6vC4o741NVZqZ6cNtUHZpEUcEuV6pCaxhobuZccMkYMGqBNuSEUZ4s984pzzNHhtFLUY5PcPswkn4GACthaXh",
  "key7": "2faUYjwzdmTUcg7LrJ96xmdQGfEjaMediW6jQVyL1WQzhTDyUutJoJB9HS9Tdo8hPZsRGR1jUUisPr6JHCPace9t",
  "key8": "4SPfnk8WDaot4B8bghBAiR7nLJQUffMMTpmiRWShx4U6MDHvEYKTLGyZihZEEH26NhGYjQ7c29ES544nTcJigmYY",
  "key9": "3J64ZEsv6F4hREJ3rXC1E8yXdVx7hWzEyJsHWx7jfUAdppNML1E6ijMXmTM7HjCZ8CPxfGZdWJ7nLguaTeSF6x53",
  "key10": "2JpvosMu3RvEWZA1sAQDXYvXhSsnBE7tx7d6UbvFd1ewpuUKZSYaXJHScFPWxLVd8cZpTP1WAoVJoPKsJyGYiTR9",
  "key11": "AEQ6MJadfxzaFUxxkA5qMPJ3Z7r1HcCbc1mWS9LeE1XjpPah4GNXWi3Z2z2Bkz4kB9G7h9kqrb3rVQ2TpXKyNWs",
  "key12": "4LHwW9fXgdbipLTM2KNZJX9J57tREw65KCuEpxWBXd629Qsyv1jF7zSh1YanYPAo539UPY6j8XcuJJq9w5JeNa1j",
  "key13": "2mo5nsH6bRqH6d6TsczhnxcHxJhobLjyTEB6Lf5bqDepV3CvNnksvzBGPj5ngAZgQjwG5z27NKcTw2TmFBXwUwND",
  "key14": "2J2v3epVv8i3hERqQY3EkjnmQ4bdpjAsHjhuc1koSpuaRqwnZXtyc2zmiQUGh2tMvnWWcdDcdJ39E7bMkwhpoBDp",
  "key15": "2NrcEUpSKpxs42uoWb7ufdKRBPLGzDb8H6JiLidhtXb6FJuJLhHjtkXd7FXuzRvvAopph2mod5kPMitMiMmsEJYC",
  "key16": "2e3LZta9AAwchtgSFsJw7ErjnbsrQcCVmRTpCQnAynV7ChwyqfNgxzzhFUpwPfNo5kLcaQDwd9yc7V5YeSrFqurj",
  "key17": "kK6Ptb6aWhEYaVzqupW21gKAVfZVcKY6Ged3AQh8dAoR1KyFiaDn6A1dCLKuV6cFPs6p5oHvTj76421YQntiGLp",
  "key18": "4uod2dsbidwvELqd3aDjXkuwzwEqa6rDwSpEHC2c1mwBT1Mfn5HSv4UzNLmBgdTmwJ2DZnQjJrVH2BP7J8UWbnCn",
  "key19": "wx1FyAaW2n6LB9fKUoTHe3jzohfwk5Cd3QB1npkoRA1c72wPKH3JhaQUvyySSbd3cMYcwj7TgXYMLkPpxjtgVRA",
  "key20": "4KhQxvPq68mbrusjhJw3hkxsLH2wEikQPnX8gz28ciUgTXF5cLrfu56wBr4YESmdP9NUAasbkRpwo2wvK56uLVAM",
  "key21": "sJNNH2kuayEBGBUdLDNZBZYeDGB1d56PgmyTEHnKNo5KdbVRc4ow4HvFMREfxC5686SyyyzAD6McTxckYYxchvF",
  "key22": "3RsGzh3hhCrqtXdyFTVvzdL6VhwzeEzrD1KLq7ogdNmCKfyjFbPYL3gnksRuLKrUDEf6tS5BggTbQtyfnjqKvzoP",
  "key23": "2wqr2fDTaLBaKDyxQFSYAPhK3T83DvsYw4o4WM6zvo7keoZt6QDocCYnzuq3jqSMJN648hQnjNdEysZYVgXZJGzS",
  "key24": "4vWu5Xrkcq5xzEhntS3W8AGquSnbB41UqS3xS2f4KSp99XdzZ9SgKF2KGHdXsa1QBxKgVL9BmVCZQ8YgJ6PfhWpS",
  "key25": "5Ew1mkzmBjjgsNMJQNccmqBEFL9hGtnEu63Wviv6iBWZ2pKBFTBBC8CUHa64f1iAKeoUeKiNyZBugJNYLiZ64z2C",
  "key26": "3tbZjR89H2xQ9k86n1G21Wj863SL7FehKSTtcT64jQgKt4qHzGBxRazFBF7nkkVNxB3PCmejXNjHmkNovNmPtDyD",
  "key27": "4BKT1HRzfH1Z3ZjDQPFygLDmA1pw155YfbKvB2quv6p9xkgSZbMk8d5wRkaC4QrTQV3MHdGBxQPC7kUHrCtgLvRq"
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
