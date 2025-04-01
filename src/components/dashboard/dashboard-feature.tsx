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
    "2qbyDcBCvDQUYp3uqhZSNk6HAptbNQ1zWqRyKx3MNMWNStKe5cBWQGNkCgvUgxAZchrAYP2SLKD14UtiDmBHV83H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8aDa9iThiqFQQNfX96XquP9g72RTjtduYs5n8B4JQ3P1Z2YU2ZUHMRompDkE8nXUxdk6ijU196XU4hHoJVXEjh",
  "key1": "4dJrKaNQmV1D3wvbb52KHzBuFcPfrP3HVUFiWae2m9ij6bnph4FyaNZrg2NMsAzW3hstWiCtXnUm7MdKByiK4cTC",
  "key2": "wKCsbrMbG4m87z3Xj5vZZrFbAmTkvyUZEMMyZav84a1YDUgVty89sMN4mXST3iTU6z6xEjTVgo7Lkw6LMqPxspt",
  "key3": "agyLaaZFSLFrLCZdD9i5HGoToYRRrBVqUohkJYQJPS6mVejvf68bW65UYY5ZHSqtw5w6UUExoPaJCq46FhQ3TE5",
  "key4": "4pkNHNjTxR69CGayrneGjiuX6ANpkCajtdrs9Y7YzxmsiBPK9K9oooSL4jGwxGaPHt2zPvpnGYRzFqD2FhyefWeD",
  "key5": "2tzDsg1w9wWVxYpxwboAt5jXsnEed5fx526GeMTQ2rd7CuFyL6N1LMB7Gi7zPY2yUzdHPD2qc6rK5iJ5LiMWctyW",
  "key6": "62SrtetppZzxK3kj8A8zN6P4epunUqqdtEyExjCVMc2nXwn8UR1MzWYoiJcfLF1fnbNMPRbe7e2QX7TYZuwexr59",
  "key7": "4U5TmzSMK5KofUSg8LuiN4VXisFkSwpRHFqsdmkBBAYt8dm2E4dP1tSafhkTyv7kXfqgzrqc1yLt2VW1NJQoMin4",
  "key8": "4MWzoGra45UuZBsWez8H8adwnMhgyvPeWzgtmhvX4eRWLP8RpxrEVN818fNWdUVFr4k1SnPSiK1TPEmKLXS7RHjT",
  "key9": "vEyNf5nxakshAonkhg9fev7qr5EXahRF7LpooKgZdVjHkCvQRMm4XxFXH2K5QetvbK52i6qzwDzGgyvLGXYe6qA",
  "key10": "3qvePkFuKnvetLSFx81XXf9yjVP7prQ53gBaw5Le5n11NpTKrfiFYrTGek1bAAmkTskXX19JLNcRqXq33ZBBWXxd",
  "key11": "KCuPqcRLeG5cARxm4YjxT1XNsgwpt5Y77nmkCT4j72KSmWeWWpJ25zCub7uFwT9rwo74euJSiXYixuH6SKzkL6s",
  "key12": "25TGbWQypyFrJFGmNHggkAJdhLVcneVfN8NMt5YDU2EsWBzeoZecXKnaefpxZ1mB8a2bY98yESwCfpqdZ7UE6CP4",
  "key13": "3CYvbMX6nWHg3zMgph84Rv9QriDKVEqz5FjTH9D2gyqGn5fktBDPaNEmQb3ahYPwC353v3mScUXeByAcY9pDX5TK",
  "key14": "41YewNfQ34FQM8cmsSpowgrmuCcof5XYo22gzbsXshFZ6Z8pRATcTAkrg5XuAmSq7STh3jTq9kekFykuFJubzsCH",
  "key15": "5Mj51Qy6RLpaM7KrbLxrdH4wWqjwV3ZyWSmLfqySbVFW3pEw1Qb9vNhcKa2igRsViYgP4nRhYbUB7BecEGqtjd1u",
  "key16": "3U4ZJdYBV2isgR14qeaBQpawq821aZ3Qo8u9wNP6Mcb7TE45e5edfcwuDmznZX6SvobTdtk1Q9Rgswafcvaqg19A",
  "key17": "4ZQuV4XNjR2e5um45vUVXpMqQfKD5fZX4aAmd8VzfeDtpxdAtezE59qX2XBYrivqPJcpxSmTEEwGqsPATHcNTjnT",
  "key18": "5BPKbkhCfgX75sMYpAoHEEf9534KxxBw52hUfCxpoDhgJxofbPt1EzMLC55nXaVsexhpQCzXdYT4JcHojzBa5Wf9",
  "key19": "4DbcK1j82FWQBgHot3GnykDwMxDbm1Mj2DW9QCx3zHzAr8wPTKR9zeH66r2tWzYx1dSBikW6iyQBwVzkP8zQznXn",
  "key20": "TCLmovPjLiXNZxVM2sxV17vkprvTse2h5Lc9gfZwS9t9XpqpkhTjX5fUYGGQKiNghjqj1ePFUukKgoz5iK4yprL",
  "key21": "5K1yAPozJoz2jzE4ULDqZUmyFVeAb6CbL5UNvNcmwrh8ZRQ8GWvXhmyzQKYuHPE4FbhLC85jVXgZzqkFnNyV6exZ",
  "key22": "3UNUoksUrxE4hozYTFRdPhNY9DLqbXMmmxAXhyqnz9dRqTW9jf6HDAWxQRXKvGAaMHLiNEJHokFyu6gsEhnXiaZx",
  "key23": "5MaEfhTeHbcdUUb9bsuj7BmMt5BiT2gtgYKzSdfLW5PE398LGNMHD2SVyLGh48H4xp6euSnWaVRuZSA6iw44K1pE",
  "key24": "3w5VaoifqswsEtW3uDHwRhDsHeQdpuCjvGs1aoJQEzxpdNhQuDTDeQEZR915CUK57sLjjnjc4sgrskTumgG7WYUH",
  "key25": "5b79GSHLxwAfJ4AFzcCm1qjJFJsViRGCmaX8y5N4B3qKNRC98By18GCmYTwAfyxjePXf6Y4fmSTPbUgL4YTrPzrt",
  "key26": "5nzoGYU1Jr5RuTM6bLmrYp9pRnJN36UADypxFhBet7hvZEYts9mb7kQgkPSMTxarct2AEmR6Yc9LxVQDTVqScSaW",
  "key27": "2W3ks3feGtw1ZbnKD3NCNjavjA6ubAwx6QZhLHGhY7XViWyxF8yyQwKGmsnwtKjp6T2za6WBCXhxgWzSzX3qbp22",
  "key28": "2bMrqvrv9gLHZWmXhzsNgquJqM39rQ229QuNC1jABgThSKUQABumh53dFZaqBuHdtZQR5zj6CWYr75QufZUSsMKN",
  "key29": "bbQBmqzDQMVtQsePMq1WG3sWynXivCk1hCFPBYE2afpVHKnnr3gutBAautS9gZ5fk6hPhCuhV3tpGrdhS9LqXE1",
  "key30": "23TS2mq48GLwH3LAmMdpUTotEwEGNM3YWYxjXHFa3kD3Ty5HrPQ12ecxiXcxVZmKx7T75zfnTxoabR12TckcVnFt"
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
