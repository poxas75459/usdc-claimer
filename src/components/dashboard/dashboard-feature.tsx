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
    "ZC8K2nDBsoaXsjeVoLan7jN3BwYNYuxLFQ1o3cY6p6nfkzrA6jeQsDv6kcxKeqWD9ah5N8B6jdt9mcQjbkrVkYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ZVAFWwv3w79wEgvaA1BjBkgVkVzAdsuqmsB3iC1hEV9BWofAQJkWEMHC2KattvQh57JLe36j9tgd1JsZTZn9LN",
  "key1": "2qqY9UtbrY5SHCjVVDRodspMLEtv3gZ1dZN5NTU99M6Co2KP7DCgR3HrYexgEnmfcZeiyzyThTg9V1uVMg5NHkCq",
  "key2": "3hkh8mBhpsgccQ8PoJKER5R2Ng4FiossFHFK7xxXGHwHwNBkqkdBirbUF7LEL18scGiDCyAyJk7MYGgyx8pp6QgM",
  "key3": "mmJPDYjz1hY4KLFKHEF6yrs3dYQzKacer33MXkGut72fgHq1X3wfMw3UwcEYhqr1sDt2VMbma9bYU5Jbjk737QG",
  "key4": "2WfhYTAbfbxWyQxyvfYy3RG7Pmd7ZkwYxMycVccVqczqiTEUtxVwU6NQqY2L8mxgQb7QDzmR2VTFUdrieNzPvVXw",
  "key5": "37A6xXFCwScBhcb93Ea7xP5bDdL7hJ7nRyWhDbui96AhuPJRGPvTZmDXSKrWYSLmPkSWcx4fyYd9YEP8rgU5y75F",
  "key6": "57okaz6WGMdezUP7ZikKqN7BZot1tfpQDqWSQDhnbBtYFiBkGa7Y2u1eg4hrZchYZJwjpihPtFgjzjByUWSivfRr",
  "key7": "5amV3cZXe6yP8Z8Kx1r4zKzgWtZarvHT1z8TD3GRQXoX1963hSbn5M3ZCNDdRodDhtUQkHaJEuQe3Vb8PctY6HNy",
  "key8": "5iaXwG4C1wGUWZPm6nMvA7h27xgnRT2XnfWVvVwtThiw7DCTKtFZKzLEkvP9KGVgTyeNMZokDf7KxFVnWNRntL8A",
  "key9": "2cZVL8vPuwyvDj4SD9kyax1by1htoyTRhBkSofnbGqCvKnDZUZqCs26TrrfnLwWJM2tz7o6bjt5kk6VcRtHr5Vne",
  "key10": "5Yuj3ZjuhE9DdkDmpcstxcKXKv7wQBbj8mMBWYBRrZueJpP7GsSnqaoFrvXPTiqj59mLUGrYjb1sKVujkVDbJZoQ",
  "key11": "3ir9MiD1AHSkaNYd9KnFQ6QZHMUdGxDPZfy2htWkS69Sbv2unvVsKSx6Ur4PD2He9zo3t7ny7NjyBRxRgTjZKn6Q",
  "key12": "4FMGJham8fpzjeU74oCMyoB3vAF9duJwyxXD4saUwJKsRoLCNhWUwKxviDdtPuVqru2VQtBRQWYox7i8JSyqrRLy",
  "key13": "2QvzMnL3jgSiAnNe2SB2sCEJkDrpE14KAd5isAJFZKthKhJ8nY9CsuCbxi4HehknJShaik5vaXQarRT18Ez5ADmJ",
  "key14": "5ikh3Nhq43MTZFc2ajQ7r6Y4ubTVYDErfYvJejr5tCCEkWvRAE5xdQH6ZsMRiWj8pRpmySCUiLZKA1DQnEfqhEru",
  "key15": "31RbycvNsJgUaSUcDQcrMR4fhMWHvPDUxzLJhMcXcu1gd4uNGUgSaiKp2tMC41ESNqM3WaVqv5KKK8yq1a8SPVJP",
  "key16": "2qKQtNZAMQR8LnuRjDwchxGhQR1ZtcbmzLHcpT3ZNqBcpPsR4Ljw2QXdvWbxF3ijYYvuMHjaVD6XP12Nc99eAW1B",
  "key17": "56dGhkksaBqtqhjs4Ykf9b1q3YzSWTz1VN3d3XcKzGwFqP7bY4cxQPptfTn7k6bLNPnGdfWv3trdrLWrGPc5Stsq",
  "key18": "4GApcqWc2qSpwbz7eGBYSuGNZqgEfnB5LQewgPvk1Yd3LeTcw4ZM69mdpDympE7KKkKv7HWTxKoBygXeeNSJd2jg",
  "key19": "5eJzj4SSmvUxickpKJe1eB8f6yz7hgwEYsjKB2K7vPDt7iYQ5zXvm2tBTk6miGZ5AUpoLJemyNZGYF879stLJt3b",
  "key20": "ZeShe615pYAteeXFMuB7nHqrrKCmP958tdcpSjEHfJPZf4ZnsAwXVCjRoGdtqEzewftSwc23GFGjA3YypvNXhgN",
  "key21": "2VyEoZXstCyspDpWmnZszumguT7UBUn5LpEjJzX7Xiy58YHuAieVFyHCabFZbZT4a9MPghzwx7GnwjG4SdheiLgh",
  "key22": "5GKRQkVybpEo6bLStWLmNqWHyjbkgc8qUm5eS9v6MvD3GDMbcL6dKkZNVfwQwNLMZsZ4XURay5PA9bwERwkoiyiY",
  "key23": "641CuqZGpF3MmgKUZXt4FhkQJemjaqH8ajxjyYKweLv22FrYQNfhYhLASXMZMWTdqsGGZBCTPeeVXZ7DzQ5FcQqx",
  "key24": "4rBxeVqa8pe7X2RpyPwYMhT23DnWJWSP8svtUSDopBRRZKfmdjEPfSUjfkD2dE5K4gkfkcGHhnhRK343vtnax4eF",
  "key25": "3eXqd6PcbBVqe84XjDcrnswRX8MCBe4k6TikVp9TApykwj8RpstoDixgmc8dqiVeMmQR6QjNve3S7uyDmJDfN4m"
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
