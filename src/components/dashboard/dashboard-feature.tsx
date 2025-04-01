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
    "4RtEn7kFUVxsHV1NbA2fjmdxbz6NAqVoHiHBoPjqS34gC6s3jpnmq33KvaCgeoRtrJMc4xFWCUYjpeAerzAXJTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nfh6dBRWSgMNKBefeKA88gKRFFZvZjC7bUYKqkZnEV4W5XpSNqdUCtkaL1QAYX3QaEMhN12A8JK2e1YF5WpX5Kx",
  "key1": "22PtWqmRqA3ta54sv8nX2wPzuRoxbTBz9sGr6pjj3TtZqd13676L6mrrSVyWU17ZokWq9EzENoPsko4nyzQjXmeZ",
  "key2": "5zYMhfVYZ5U2oY8w1r5sWfw5mo4RA66vy7EQXPYnbMAyY7qCWeJZMZX7e7DfXADJh83B7ET1Kh1SrvTLJadoyQPL",
  "key3": "2LdnPg2PLUsLd6rJSx7N7SVscfuvsWEx2W511cEF9mKU32Po5YJas64HvPdvSEW8TQzzyFfRTTr99MAzPNzqcG1y",
  "key4": "2ScW2BwNsvGnEpnvquYEug7VgYnh5Pq9WiAESshoCbFXiu9tWTg2cb7yf3Pf4jVPDxtwVa4MT2yojgFXoKjKMucv",
  "key5": "2CWiGitYNhhP6yW9tfaDVzMkt8CQURVkJadZNFgm76mXTcC7BXfzikSM4y3gdcgxSg5SBzRhV9HvsWcXD9c7eSkU",
  "key6": "3huJbjws63gj9D4HHp32RjfPzoqyv5Y7vt22adtkGHgeMAJqcxDQTCkEza4DBeCXGTeyfBWUMCqb92ACzLJZC1Lo",
  "key7": "5Dxtr9BHxPK2wYRHPMCkSi7S1ZKjmKbSCK3wgEDtxa5S7w9R5w2DYZqJhgB8unxvJjmWSQJsHYjsEVE3DTimd8rk",
  "key8": "yQRdSqW2iuxnn5mL1iEY2UzasWyhsACugAzzDPF7n8rwyiQjRbrrtpYKN9j9sj81KDi8epLjdKZRa8B5fYQrwBu",
  "key9": "3jpuqgBtMaqKkNM3YzAjJYaKhmfUrEbmuAZjwv5FYDm5RNY6XS4qWeNB8MEopRTfZqoSqgncJp7CNpckQMbHHfT5",
  "key10": "4d733yLfoWjozyhr9tkpj7cGR3uXC4Uhvu1x8kLAH43a25Hhqjj2Huc7RosKT3yiz2EtEk5aW9AiyRkykPLjxkwq",
  "key11": "2xKEFuggGsfvYJoHEEieXCYsq5RD3rqtUnDnySwgXJjoDAyTayautQwJZZJ5AEeQyzCDT4xqU9L8gXjpeXifnZks",
  "key12": "33TijnN1BEnnY1nc6hXxxBqRMFc9b7kPfB5RPEM3Bpq8bX88FTiAo8tAqqt6ekcb4xFMjA6J3eDx9M6YBevharGE",
  "key13": "34iBaSg1SzENAbMCRdRYzfTzJkv5gvGLvPajfjPwikuSHqRh8wMHq79gvzEepiKQL5CfBMBtMd87zWR3ZVJrsMZd",
  "key14": "5oXr7m7PYhDV9cWmribCtNhdK2QDyhE2cCjLEEuWwhTexKLThjUjqhms7jqm9wQR1h34x3poZgqw53QQcMw9xXoV",
  "key15": "hbLfLqwbXi4oBZXWHZfM29sWvASKgJxC5236Z91SGKQLobvJ6wNEajtCirBXM2mHjp6xx3DXonUs3Fn2M6ds2Zr",
  "key16": "5GfxCuxo3rRtJLJUkgudzEvNErwJ28M9cWQCRMcxybyDkSxQn6NduB718ugLeagrQ24ZiW3CU2iZk7FtS6ujB6rg",
  "key17": "3oPSLhE1WMZuTZRyhDsByr4gDCERqFGYoXiGdvW45d62HPjLV6nYsQBvh4XTDqLtHShpUoG7DmAxVxfgkmcKwDQ2",
  "key18": "58d7Tu6dnU4g5MCgXwTTXHWya6JHGqcS7PyV3jqfmgcxcdu3aHtcbiDSCFyqMJVLBzemfaS26HVBzvn4oPrpfT7d",
  "key19": "3CjtAPJCerTWrpAfe3VjWDZsMaXRXkDC3Xyykrgm3VZZ97EM3szFAfMzXnNcCYudsyvtyUrX2YWAZaE5x8qTyur6",
  "key20": "7x3vvbVfco6yYjFsAx17b7xoK9KHHrSmCoRQRz379dd9cTVveBAWTh1hU2LFpZ6kdddiAxiUs786RUqV6KCYwPa",
  "key21": "3DjMzdCLsU6MsEaEWbnSxdP8XnwY41AXBJWubnZ38GfRMhRFA5GwrwHYNmgwNbv225pJzXjvjsV334WUeEXDs6dq",
  "key22": "2vci5qk9W3W44ZEoZgCNi2MGStnjN5Wmj78VVy133XZCwdBzAhoLRiUKTFRbtwuraDSUL8nqs4gyKpB2RErifkrF",
  "key23": "B793MaUp4YESTWDxm5e6omrMSfSQPqoXi9RbxPdRPrv27irotq6Cn8Kuv7vvGxHg6VfPdCBFYcaBSNfujr72cXv",
  "key24": "4zPsT8TiNCTjGaR4XbDrNnXD8LgnUkFejoxCSgdg8L7VkTzs5QGrajCsWuNKh6Th5hcQXDsMVYWTVd4D9EYyaLEW",
  "key25": "5MN1kkLqR5aPd4WB4U9T17p3eZ6ECbhTXtS3mLmSpAXyNiZeSACxMKzfPUWy9c1LSFeoEHoZNs14Fhh9K2aD9pMQ",
  "key26": "4jPdEJpxYYa1ArLTUFyqZa3kST7qbfErmyNVheiF7kwamwd6Ecxk28hqPpiULEDYasekT2J5tEtnJArLsmAczLfS",
  "key27": "ebPASrQrrfP1ERDsck8jfMMPUVfmUy6XetFY6vSEuoJ2XN1akdtKRE3rQAkoLU17JB4iYF9EthsrKsC7GwyVvw3",
  "key28": "4CEMtuT2UB9vQVvovsbQdboZN26PFsUxze6xaRC7QjjkGrem4WgL57qBCXoa8C9bSDSXfx8yPPYzXz6gKniEjhAu",
  "key29": "3zhsTRRkXWqWJwdfqZFfJqZMRJNgvcVzMEBc2ayHomxgxEMyz2LPkogxuLxYpws7QHEC9Z8FsgW3NzdNFJ6KWrBG",
  "key30": "2E6ShQwiFsBfnFUFcbdarp6SG7RJFDWSvXESwbpErCKo2rT4rqd1ynrhVKyQqhMoYi4JBy6o7f4uG4T5SqSWbuXN",
  "key31": "4ztHoJS4Gwfv5ytk9geQw6HWrfY8aRrbvcPqnSHRmDk9mvDGV6oj6dLm5MowiPosfHHxoZgokACqpmkgiNJcptnQ",
  "key32": "4cubWMLjgN1Nd9c8aeYoZB4WiXGNTTD8k49PqYc1ZgjxCNwo6F13muaUZ6TbvW4xGLgxAPFzvqvM65avthn9vAAM",
  "key33": "3aZziMagy8x17zFCrTvTvRMWvUCWbjPRTqEBZNboKaG97G7uLomFixgbn84uT4nk8KQe3h8MvHpywQhSWFq7Chtn",
  "key34": "5ysJPJvSy6bPLW8xARdrUd6s3UACG4AayVweVrp9MHuPVPErTVRuFKsWwsk8ksjwvxN5WpTMaUt5No1nYW24EAgp",
  "key35": "5fvFKT6TSbpwWbPpGYE19J6RtrMeZjMNdHtZeEbgsXUB9ScyQqGmayPAhnfUoP5iaAtPBSY1djFBGY16BjfNDpRx",
  "key36": "YdFA1ZRTUkh53ciLwnwurpjwLr1oimZrD5YFxE75Tqs1QTBo48cdBfLcr34VjcC41gdxJAkqq4DeM3PvJ6cTafz",
  "key37": "5WyvPUXGqh7FsLS225U8bRmU5hsjUdzuwYkvhBQYGWYycwGb3DGj9qS6Uwpvhcs9psuBsda3TSkB6BPeecdNNV84",
  "key38": "2f3FRQsyZSLXby5Kt3GJbSiLPGoUFvSXnf35TM5S2K61dYTrfR1tZV6YiHqzrew53hszsEhMpE6NdiXWgWncXMQN",
  "key39": "4LwGstf2NGeGoL53nLBn8r8UkA51spztqHjJwTkubW4nP6AUhUGJhvcCzh5NwHh2XRosLnw5vyBxzck3115gNXVq",
  "key40": "5tyFAwgduAsJocSzHh1LwhkPteZwJzkgbbAXN4MHke1oLXRMM2b6V916PgoesPJyT4x2GHhfREtsgbjz6FWanki3"
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
