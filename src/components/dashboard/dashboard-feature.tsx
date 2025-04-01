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
    "32xZftKpKB9K9sbUkTgNw5qSbAcTjWNHQX7qvjXLvSRkMVVjfowHambbErZ8Zw8sEQC3PfSqWYQUcn1DrJwwMtrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmaqGraXs7K59pSQYjFzbiGm1wM7GeSNtKVLUiZqbF2qvSA5FXxcAsB5WfoS6r5AwGd5JBTSBsDfNsHzv4xRFAi",
  "key1": "2h25du8YFpYFo6VdwTFefp4FmNc9kRFXzJdBxDw5dY5JLXFfA1tjoXznz58MzLX1NXqzQMePwgGTvDZGMUM8FMsZ",
  "key2": "84VQDfeh8shHx3iSDf5TAQMTh3tkw2yn3ooB797P3ZRoxToubztCMXdEhc8KFNDhDmC31ufCyB9PfkE3c2Cxd1W",
  "key3": "2ugHvqEJCfG2Wp7kh89z2P6s4LVuVE8pjuVH8vsAotBF9Y2bmKBdofQFbgtzdjBBEcJLv1m1Uguei47sBes3PrSb",
  "key4": "4u8PgKSMCppDqdi1YJb57HUqF5BbwLvhHefEshNTaSDVJHiZTBDi4Xwh1UeYTDqtQoRJbrsLCYA1xzu2EBJymU6D",
  "key5": "2T6zCsogFnFeXqjEETLoWhtw7CREUyxhXU2JV32coxfo13QBsaNRFnq5sZ1Un1pXpnLTa1eFfqkfYcHiLqAw2URi",
  "key6": "23vcTDcSNi7f9DpzgCb6EVGaqYWZKLmL5upxhHGEmgQVKvBP8GtnVKxGeqnKEovPTMJnooQ3NxdtnVPnPWuMWrE6",
  "key7": "3tFq21rPhq4eP6oHL57wR6YSWnosSeiVDcZSmu48sKWYhZHuhUnXkxSYncuYdqJmV8eJ1K1mV1vt8nvmq35tEsoB",
  "key8": "23fAo7XLrDNrRKePQ3sBRP5htwAoGoSkBRWYR85he4G7A4G32a1WcE5Q2MXjW8zzoDEyxBxKRaeBLuWAwzVy5ASR",
  "key9": "5jQ4o87EnFb8WF6J1L3XcoGBeR85uMAfwUaJWXcQQUXT9HbHgE1ajejxRJ331JGreW8pzmMpKude36FyJjaVQXUe",
  "key10": "2FWodfFR9UA148dhvFxHcm7RxuXB1YSkvhvsDP8Fe1W4D17DdvtgzLTwHfHPvLmXVqMjX8xddLpyy7FvogwePpBS",
  "key11": "5UcZuzSoEKgDAnrMcaWyHLWrcXsR9H2xVpBuXbps36WiCCE68AuPzYaHN1S45BHmEbPxpu7J9fNpy1nNYM8pugeb",
  "key12": "4awTSnTfuT4GQXijXZjNMfygFJJ4cYdzrr5yGLYvGiZoCFpqMjk8Y5wkZGZo1o4PTjbQu534DXWZxZgbmA3WWBg3",
  "key13": "4CngXVwCaETWwAk2LYqyKsLKM7BynaXSio8mXx9imHba7z1Bjt1G9ff8izYF74Yqr4LunT8RC6JL1oo7BgjoxyXx",
  "key14": "4BckhCwdwPnwpvFNnxjRfTj6gjQ8AFvTtF42uCt2RTf6E1WkVDHUkxrbxXFJehzrkzFyaLpFnJzo3oqxsrYKYxB1",
  "key15": "9WknLzyLYxFSAmHyi4c2pELg2NNPw6n4kCKqTUfn1kZMqJRiFcfPLbLVeNfUV12nNho2DnguKSXYTyGLyq6FSWv",
  "key16": "47bPZeAbQZJEyLQTfFvq8Px6ME6fdPQuqpCRtB9DqUQwvL6YbRP1WTqGioGGBz2tkKU5YU2bYbnAKPXesN3zoNfH",
  "key17": "uTKBXefqNtGsQG3LnQaVasNScqof2pCUGWXA9snMX9RgDd4R8SQvzcLmrezHpQXAHamFPY3wDvpq7UDterbgJbh",
  "key18": "5J5RuRukR4Yydd7Epq5ctMA96uLtbqmRVPwucw1DyNTuuGjDeh1DVEEGC5U6Lfu5oFpJbEgP9wWZPNVTaxswGFrt",
  "key19": "5NFxBeg6YmDnTNSjxoZKX1NLWCduzg7khY1ZwWj9abnuUtqno9sUMT67fAvYabPu1YPdbmxT2XVduH3wazFLMGkr",
  "key20": "4deY4UZcNgkHEyVHokFSd91UpJkVWZ1zE4Nopq8z3kHyR4LD8tFteRwCzjBXWEo4J6spWSAhi34i49AkJUmweAw2",
  "key21": "5X7X2cd87wvyPaaSh3wxJZuruv2EDzkZ44JeZa2vLRwaQSzwiK5vaB2T1CU9Ryxe4hXnxtC6YHLQgR4P46B55RaM",
  "key22": "3FuPBTFNHtJgnjQqM6UCZkfxWC5BXh8SgBbgaEfMiBhUcULjg2j7sNhSfmdk7jGvDAbk3bc2bpKHm9GE6yULiUtg",
  "key23": "3gat1Z3H7BWpRaQottDLMHA4dh9AXK4giEzH3cuYBWfjiXAyqv76WdA5EGYQzKaFKqTTzbY9MVjoiXyBeoT7z9SM",
  "key24": "4tW9PJvZPWRGQ38yfQUvzrPTHsc9tokQWHrJ8iSWUM9RxVwFCG8mTmchcds4hQouK27vRtCihLhYEaQt3whPSFbj",
  "key25": "4zvQqgdxmBykAebR3cZQJFRVN8PAyDqeUT4LUSDH7G8BYdLSNTpRwPYt9YiJ6v8hS2UFg4xQktJXUVMSJgN1xYoP",
  "key26": "3qvgY9x8HhcUVLU912CsNNEW32yNo3rpe2wETPDibeH9Bz4E4BEZf3vnAa4cXPUojXqe5XdxKwTai7DDDc4LkmKR",
  "key27": "3j4VFEJJXgngryPBwrHH4GzRG57ymTBo4iGyv9rRCYKS6JzkaYKGsmh7TSHuDZQ823ZsMJb9ZWsAxJrxc3hnPpnk",
  "key28": "Yk7TqKZSZ31aiEcEdzh2gCCYVYGp89kdK9zeFKdzqsRBNjzzJT2x5A1PSxy5jyYzV5aybYb5shQwWpJUzQJZVP1",
  "key29": "5yQGUbJVKYsW1CUSzDH8mi1NUYZyC4esnhSgRUr9PzSUjDttJUMkY6RDSjRmwqGz374kyqU7DEkbwNELY3dtoJuy",
  "key30": "4ncxEYdB3ScsbrLET66rcu4hhgMhpyES97FXopRrw3MFQLXKAMGJAs1jpgDbnbZUwH7H3YMf4yC37H12ACRTVZ5J",
  "key31": "2cXnvyEdd5QJPA7TdcoKrTxmVnxgfaYnne8mAfJU49FSAXjGwr5tLtXgdLgkbid7XBGzPEkKmzpbEqaa1BZh5XB9",
  "key32": "3imSXbgHtByRz3b25YsnQJzieaRofs846C64hhX7eS7ddJon88uNE7ZQZX6bTpj4t9yd1YMLXhuRibPu5iV8aBYH",
  "key33": "4HU4rmtsGsfK79Lk2eDzA46uvaEsxhxznAMkDrACq5zs9kU5KTreMJfEMYohY9dqCkHE9wsTZshhVJT7LR9NumWR",
  "key34": "3gwLhFzV1Rhpz8wXm4rAQwgdwoJYFqsT7p4QqnrQbpzvpZD48jhFgb71LUtL7fMxFbm5S5xpn6sGkfvsfjC3pZfe",
  "key35": "5c7gkC6Px3xEk2ehW9q3cPLHshWyLRTdk98YT4LFAK2i3XqesnJVzNZNoNVzgNpbyEKeBtvTNb4xSHzyYyh3T9wg",
  "key36": "DNHPkNrry9w6Yq9ujDwzS5EQ3PFffHRNVWBjhTnULq8GY5taghBTW2Fu3dfs8rpV3oCiG37Dq5BVT4iWNsXBakf",
  "key37": "2VHJBRwPgindDDuHrn5frF2SvGGSss1c4sCzGQmsuWadRr1mvRtUebXiQcieLgnuMkhU2JvCFqESR2PibBhVBWZF",
  "key38": "2Xs9ikUkxW2pWYqXE7Vmoge9D1MRNZatygSmcAQp1dmoqUS3ZPaZw4xYfZ3eAhHGc5Tq7WGr8f2MsD3CwN59HNWh",
  "key39": "5eADvPnnTbWh22jDte4NN3h8ccJ1xjqTQR3w7474qqrCiAYShKH2Aie2qNAWtkatJ7yCGmrAHyAFuY49EHESM2nw",
  "key40": "5JTNqq63g2BqSmprq3debt7y2cuptet25BBHDQos5ZEAX41vqwwWLfbUzX25BRjZUzQqHioYoLXkneRaHAgpsjsi",
  "key41": "2xKNvmkNErV6tHCVtZVFTyvWcwKzuZjs7fxmiM9zJXNL3FbFc58DHHZaretZRxihh6twuALJ6wtAUmffL9Yop8RA",
  "key42": "5EgeiPR9vGUMXvQExXc7183voPYKr5dDwSVWivhP6qSCVVPgmAApRnBfpeo5rih2XCr2VGKBVn8XvLYqNX3xqcTN",
  "key43": "2PDu5r1gfaAi2psJFa5uFNMqz8WyJ3at8FyBqGwhPmkLxiEwTyCzXqyXxsNsqXYuDEYeEb7Eo76L7eiZZBYpTsFA",
  "key44": "5Pub24HSwPertHrp2inGCzhPbzw8noiDqqS3Bdr1f218n1ocWxvmsjeYodWDQnddaCuEV8x9gShp4xQ12b7c6SSx",
  "key45": "4qjuKvUyTQLqV2DfzdyeYN28a5hqZ3WrfkaVnahirVHf9GAaDH5CNusL9vAr29Ngn5rFaCHyR4VYjdsqzZsmVYGC",
  "key46": "3oEV4YMoY3E2kHvvneFqkk4WVVBjbQi8YrgyN4yDtVUH4Xc5CLfXHNyXVU5mJuVsRZYeMWPFwbXDdJk2c9jH9piT",
  "key47": "2ACDs8z62JAWbdVBSZbBd9Pte3q5mzEqAVE4C9PNFRE5NK8RVqcR1bbdiJj7bZU9C49GLab3EBi9gtUQB52gFUa7",
  "key48": "4FvMm2WknVdGBuDGN1iJawLkX4RmxseJkm9PZerrN2QD38RPk3vMwcWv5ykaxMZoo4ZPVMgqWmy3HFVhteFJYSCh",
  "key49": "nYPUxS7AcF47H2LuUgFyoP2YdVcsz1DDoycx8WPeWS4GE6q9gNNeSAdFdUNBYNmskCmy1pHZPTB2rawpkM9R486"
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
