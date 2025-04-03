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
    "U6bZ2Fzbxd4PrYbfPMe3yiYy5dRbnqVFFSJhL1Q7m5ii9vhaqmagvJXJaqMGrGprGzeuioMHTVtsfQtxBBZBF1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7JceanYyexZwNoThcTH8WGPQZiAApt5J1AE9FhgdQXdKB5zS8e2ZzeKqeGjQoWbu9LyT682efYLmvfjSZ3vMwo",
  "key1": "2kda7pBeQUiweNHxHG7yS3zwPEcdiqnJzhxwM7cGsHWhUbAHhhnDwFcwSYJQs88widPUtGJygHpMcV2Mg9Qn39sK",
  "key2": "fTwtU1zuzTaKFZqdLxPLE9gWaQqemhsWxi8M7nsHGNmwAWrnDSXgW9JJduxfNbnwX4Y94D5mKh3u6CgjoMHMEJ7",
  "key3": "2khLKyQh5V1wqDUNxGUeK2SgkpY3LVGPU3PUu9t4arxHXTDiofMPzsDDUziFJoWaNh5WvzDaTcixEP4pXy4xSjch",
  "key4": "2ZE12pTqQXFNkTmg8VpkUqsAn67a4o9CU5JfvBtoNDDEkJvijk1k8fzV3adk78tD2nnVJ9ZkrwPZC6K1A7ZezBLo",
  "key5": "3SPXC5GbY76fnMWwiZ9GuasibGkyFEsqXUG5Y9mEZ3mcvbpoeMZNvBip6FYuSQQ9vHbi96bMrMJ9sXZTKd3KFir3",
  "key6": "2YJEHtefWHPB5ZU61qtrpqKVHE7QPrVmiSxYGpbKwvckdd9G34vyrsC5LC1G9RNWg42BYVQ9hSvPAe4CnKmUgjVB",
  "key7": "3VHT5FkKCvQ3gRgZdkUpK1CGHitMD6uVE2oo6PT5VhpBZBD8Zposn4VgAJCt33AA8hqy3EoZttVBHPFQJ3yo7eux",
  "key8": "5wE5i4VhPDcQeUxYkt8FJeLLgSwcUYyUqDyqi6CpuVrf1XYGYkZxPazRRuUrzosQQBBB41JTbzdVStw5KM6Q7pRL",
  "key9": "4zHJDSrng3SNWoRu6aAPfk8gJAfhCi23zxWqZnNCXwncdFwhRHbX29XrRhQqKMxRSVthfPzNisAXmnGhkanhUZvF",
  "key10": "T4QBi742PEzLEHSqeRZL5XcbwQ7D9Lt83EZbv1v5kc92jJQDr9TUHewvsUiCBXFUiDNHFqaCn8E3Z3JP16v4oNc",
  "key11": "PC5vMiB16AZYQiP7x1YbqXE4eTeHk9LmEE2ZLNasF3tSuEWTwfRYWmXqTjXNcuzKVbTXHvNce3Gna8sBqFBRhtk",
  "key12": "4amPNUcBSibhrLUkHD2Qkti9YA8RT1Jp7SH23mab9xvEYNczYsfttMwr5G2diT9t8n5tXTZCVM8DghroYmcd8hdk",
  "key13": "5DrajCtsy76CN8LAjeCpqBXVNuueEAdwLKf8zEeqovKQtF9L32MZc8fsZpwwntKDDFCMT7XajGJTZyPdC24DJjAK",
  "key14": "2dFYFLwp5icLoiGRjBZj1VZgVCGoKe4yDJFk4aQT9YTumezDtREtRhdD2tn4UaDGtgsnvp3CyPDwx1NEF7gtp5vo",
  "key15": "5vH6UE4JbifcNVZbf2zFd7nqc6Wfziahh4hskDgwfqVUH9j5Pkbf29683bTB9CjVLXtVRdnNpJtyXXTBXpU1uxzB",
  "key16": "fZjqYkNsPJuDpk8fnyG5JfaKs7achWZpZgDy59MKZ3mY2reXV6EHZRrwT832L6jwQbnjXmpteyv4tCcRTizMLrn",
  "key17": "DnfMgqtai6ADFegw18vCwAsT2SYC2eFKT6v2uwgdWHvMgq96M5VrA8HWwmRbb3RyNSVpuGwGWbUpdfg4Q8epMFA",
  "key18": "2dN1CdqtLnwC91BcUWkBfp8ZZryghHR4jzUAAdCdB7wPHNaGiqXMyTQ6vvD3cFxhy9hMokeHDWW6zPVXtgYGtXeK",
  "key19": "3RVmGnNs2Qao1zq9eNLXKLjDuBL9DiWkvBMuQQxWbQvwZAEJwKyoLqrjZeSEgc59G66uJmzky4HZf294Djh8eos1",
  "key20": "3z8m86M7iPBLQcLc7idTMwD8v6BFgdxA9JMXAHoX7FBtrxmVVfUVSYm926DkJdCdnkBWztt2sAYDNDV2sxsgNTN",
  "key21": "4xzxVjcS2W1fso7f88UHEojhzXbEUTyAnpChnP5hjN7xQQisoE6VzxxD4vgWVMN4vt2kAWXgZeh1oH7x87xbtznP",
  "key22": "26YkTmmt52AzMJR9g1ZDs7zvp8FeJeLpiuHxiFPoQioeyMPQZmdkQKDmp8UvTX6UYYYNhWy42DSRBTvyM3rRTxEm",
  "key23": "2YtNkuxZtzGTLkVbiEMBNBECSSmuqNazSSttw82T1e1V4yqmoqPRWEdc57WFAeVpH9BxQihb6sTj5iGAxu3Susos",
  "key24": "L987XeZ31rg7MZ61U7AUq49eC82xMMQRA42zgSmMRAyd2jEe6skRnDDo2gErdU5SGefgxPxguyc6CH1Xn3zGMNc",
  "key25": "4GsvjFBkiKegfkYUw5oz2EF4hFeUvJY7FR7vC93VeiCwhL5MJ9ELZesXB2zuaPJgxUFW8jBd6ajX2FbWdHYDJP85",
  "key26": "4Bo5eXrtwoRAG7p18zX4NuFEMBpYt8zMgsA6KdvbFb1snG82HWZK98cez1Dmk3sSKkLYacsgV6uLiDvLiPfaz2h3",
  "key27": "2KDSf5Jcnn8CKtiTkumCTdXxPcFLtTt9zqdDytzHQFfeo8iVJyfEX4p1rFEWzuZxMuGddqShdnHH1g3xdupGX5eH",
  "key28": "4d3nSXCqUmR3DaBZwkVez7NG5SuPZ6ijgBnwadWgdUFBA6tkZTFuqUGiAkGzmnxe3SkSLcMeKVk8t5pt1n4mD16d",
  "key29": "4rjA4EJxamBi7AbKYpLwc4S9KdXjudQvs5NKuT1KDmYYYBkeR7T4keWnFsaFqfjYEdoeKyMgQfyNMUqgRgmK8X2k",
  "key30": "3VyxZSSx596cnVJXeYMpGxkJ8LAsi6se7bjJTmUipbbcr5zmsPVvoqjGC265TzkQFnxyF8EKDQ8LWFcT7y2DPxG2",
  "key31": "3HDjnLC7RnJ9FzM54wUqdQnyynjPYYZ5Qo6pQqadSLRt5bwHLKeGJQE2tWegXV1wHAXQWRzhvxfnY41FqBV8YzTd",
  "key32": "49sx6meMNFV74CDjoQPkJCMswxQkTgA2bqTkeH5BCspfiitdpq2cNANfU69EGByc3JaBBf2iGpPUHr1o4kKBmJzo",
  "key33": "4AReKwawc8u5gJuVaCdQfKFv7vxxfg5zLijrFYTqWJ2BEPQc8JF1FEAvxZsqSZBQL7xBkpigHuXHpcgBaTLMvQ94",
  "key34": "3d8ZNBWAZ9oSewUbLu76ywErJxGtT4sdejMCcD7Lhs3ddKtwbek4MFnCrPUVq9B1JQ3VgZyhVqJzK7g63uZmdXBL",
  "key35": "4Cz7tyacqqUGV1FBtFJ8GUJ7c6gBvi8br4CpasMppHHvmmj8atQn9YrGCU98re3fADE9cvi9Z6TjrD2G2EyXyvaX",
  "key36": "5regRQMkKyj6q7NuQNdgaAXmzpXrsM7FnfT9GnNova5nfgmAnFM92ZpkgQM7tHHhxkx2n57BRw7KRv3vTna5EeF3",
  "key37": "28JYbbjTzqe3WhEB7zLRYPgqcZBcd51XpejLWs1QCrCkCwZwLmU1r5BDQr8tbV639BytqDYFLPZzLswgNBWKGdrm",
  "key38": "2ZAXm66XCm6Ukb8y4uP47R1LTnLJfCpWueKpE716YoUcDFhyKkzYiKKeAEqNgEm71q9uLtyf7HstR59uVQLcdmt8",
  "key39": "4R8LtRNwnGtiR5QXx24j2uAuNgAyjjVXKTZLmLgZfFeEaSXc2NKjy37AHYH3FBuntC88LztZhtcm9PmVZ42SKgdo"
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
