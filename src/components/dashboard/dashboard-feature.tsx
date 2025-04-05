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
    "hd4FG85jeVJLcGnP8ki2zui2cKDa69AU4rr5cH3oLMWi8Uj1sFCZCFA2n2MwAPKQeDFLLvvjrMpeoQUEwdSJrTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFDG7LL4iaTPFrGH14HzYJGGZMMX4FpCBPKruD3AnzS6KHeyN3ndnHoHzrq94CUacyKRUGt3UKesmVB1EBekZF7",
  "key1": "4Htysnu11GAtcVe6andtBZMjgjedmJ1pShm9CvdiN1LByW2y3mS2VYdvBwX5U5y8ViJ4Dp7K4pTux5pQxBTTJ6Q5",
  "key2": "LcufUzBEe9anxHV6WWfeqwUgCrFvsUxYi8SU76mu7kxL35TenRjN6tdeb3bm63zui8BYH2EfaMW7cEZqy4rCi6B",
  "key3": "22w9KmyedWMm22oqXMTjwFoLYbSgHGYUVv9y62kHMaF68H2iueHBcNGXPmku6e2XmmRV2w24tje6yXtnJuokbdC5",
  "key4": "4fFkRfqamPaEgcMDGk5bQwyr75fQTsb597QD4JQxjkKw8MmWrBXPqP5CQxX4ebD1xfs9wVR9fMdDnwAkcVirmLis",
  "key5": "4r3zWMuRfYUUqypL7KfKQRKCfbDWHKdL8yv5fzayv8gugfSn8w1bNRSkKgcAv63grC9zUAs4xeU4FXiKeBQKpEn9",
  "key6": "5ibpukn5Wjw6zywoZEwuNX1PuqmMMAJi9Zo5s8QdKsm37JWQMd1jWgqVuMvCQRUyatThQ1j2rwh2HFr2DDz3PY8N",
  "key7": "XoHYNmgstZsNKLgHB32bYwFRdfiB3xSkrvS1VVSj11wmdCWHAnDUpfX7f7r5f3NbH51UofL6hi7HARhsB68bbSa",
  "key8": "27gZq9SYxvPwWMLbGZMwQyDnubgtsG98W5q5yNAqkc6uRzAJouTia8mxip7byyVo1bKucN7AeT66JLdcr9RSSvc7",
  "key9": "4WKosaMmjoCksnkzV8t3a5q177LPM1XaGD2NVzXfR9sVLppW1SPRmAGgKZyR9LmSpbmhebVkt8ZYRVrNUTVGqkcP",
  "key10": "VYbuc2M4FwCdoxmESroaTaiuMApoSCX8X3Gv78DPpVAA9n2ys3r7NzGrQ2hYe9Ph9VYv6XtQ7NKcTHEVkV8LmvR",
  "key11": "2Hu6FxMgLsERtNZPwpJwMZdZX6QAbF2rGnod6YvhuEHQwZzNTe1fBE5nkvxUi4UeAAAtqywfMuM2xhcwqeSPVGgG",
  "key12": "2tDVDDKRskhHaeN2unPp5mb4ae5RYrQX83JP5CJkEBNUa6g8tPFqt79oEWwNctKZGKgJRWUU2m3PqkRqo47pr8Ff",
  "key13": "2xraex5phidKDzDWHiALqWjDZdxnfwCzn7UfdfLfs6QdRxhYEuQcb2eQcrCNbH4u26oAnXGA94RrMj1ByEEDTazV",
  "key14": "2VA1GFwD4LTFSB2Qvc1VTjqib1e6wSVc5nMxuKYJ3bfuK1nRjaFicaxnXfYGpUcyeDSwn4tLZqnuCuNKWs8iv4QC",
  "key15": "4zaxMC4iQH5UciSKjX28dPjUms2vD8C2NirHXacav3UQr2JPMeood7HqVBUDqd5xtt6HodCeZfibHgVsFgyno2gf",
  "key16": "3Ni14VL3YLaRokiEMk1uCtfVzA5cCeQ7zgUUoniCeALYK5JymiKxvpiiLCyGtr9GGdyK6vwBNxh85wUbPo6YTCs",
  "key17": "6BPduFqcKowEbdFp2XET1VYHNP7QNDxnm4Bx7xkui8akBXzriEARiWTNtBrankzDUAFQ9sSKpwJxrbdGKhTH3pa",
  "key18": "4JFUEJH2nTvtnTNAogtMx2Zr6KL2sLxzz6TAE6XTFNzeNvCCsGV1ndUEZNcPyKPwg3x9qSwt6CWo4wfPyMkmwntt",
  "key19": "5H85rAxqv9wQakn8YxiCc2NdfR8WrZBHuNxKxaqztfvbW6e7etyLrRag8W4Y8KN5YvFTRfudYsmy5PcS2wM1fRJ8",
  "key20": "3xdpPtnQYbYf4z8Vec8uLCCZFm8mZqUh2pMduftY7w2fxQuK4uCPKYNM3KLXJvWbaP8kAvANqZVpE2V49VhJSKG3",
  "key21": "4nRhM81e48WLkJ5UCUGMcQqKQMjXPv6se1U3udw2FKzjtZgePFsdrkXahHihfeecPX5NLa24ooFGjdyfcx8suMfX",
  "key22": "39Bvsf88WDTm9mnNniV6PEVDVLjtgUDp1wqRRYhMBP2peos79iLGQ31CZDEXtpwACJNhV1mHKv4NSxE5uf4jxAmi",
  "key23": "2zTjdd1U9SqXmuPKKQ7PbEH14A4wqkiYWJFEhpbtXnBvRduHLJ1wu5TqMVj4PqSwgy3QXYfKGD9QpQvYWyRDiRcX",
  "key24": "2bRTy8RpmXcHuNpHp6mg2k3ZWq6G76ZG3inHrUEzzoQaL1jQADb1RjKWaZmBS2W6bLpsGWaTMfu3m4y9FDSxTh3Q",
  "key25": "2eUTmPz62K1GhwsxCiQWacttb3sSYoDMSvBghWKY14XosfA5Ndpn1UXQvqcdH7nHEP4yFXYffkb8RNVVzTs3KJxp",
  "key26": "2fHzWxdFKv6Ni7Lqb4hsxixK2dXnP2daNXp9orh3SUcueGK5ZdcsU5etEXJvnKpdNYwabGEzgy83ZaKa9BWXqGxq",
  "key27": "4LhMTHVc1AA2N7tcwhSUUdz3BanAWawJTNN1YsLJUjzuNGCvmy6FHgvm8edvAtBDf2oyWt4o8HmPwxQbvymnnfT9",
  "key28": "EgQjtHZz6zHpTcpCVWJ3M9irP4xBMdGJAvdB1JoYSGBChCecPBHXBme2UTt1jcdHfRjNCJbd6sk7DdJHpxGLGEt",
  "key29": "3zywyMD5UEQAFxg7gSHyNfpzpXHZCehC1vcBAdQgS8dADqLzJjEaDCAkJkNsgr2ddc7vwCxCWMeYMgePDtJd56jm",
  "key30": "3BGBFaFFmYh4Tdk7hWaEuB3wTBYRkkmmagvWwVr8pXPtoeYQVtKTDq8Huxc48yoBzGzRo91R9emaufaQbUhrFnKc",
  "key31": "2SDpTiMryGCrfy3qBMy7Jcj8VcGffiGqkXZaPSGUjxUujDzix4v9nsg48DFW8fSACRecq3CopduWpKzt2aq4Da1R",
  "key32": "4UWaivPny9Po9Nt9H2hKrKwKcMHFvd21qcDHzg7MVjMHTVY3ckdcSFTJhELw8Gb5eJqkMZovyXGKREzxxfPpptFM",
  "key33": "2dPrbUa9xYaaFKWq8oNCMm7p3wtfAhEa5A97HMZv4oW9Y7PvLmeXXnnHBkzNfN4ZWawgZB7G6aemRpBqzhJ6HhGP"
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
