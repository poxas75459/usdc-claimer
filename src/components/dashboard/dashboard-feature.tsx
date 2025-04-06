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
    "NFnQZUyJ8ggwVYRjehyZddFD3HVt3iWzUzVxHkhFsydGe5BFijHvQK6by99NLxuyZhBjMEBwdCQwPGx7kBeifwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWcDxw3tvRXaBptCTAVngH6z2PFDtYajrriGJkzHnhNgmmrC71paFC8TKAVS5UGUXtumQkzm2wmzevCgVENSP9s",
  "key1": "JebBZcn4Rusp26sfc5c1qCf9YhybU51JX7nkUcm6NTRWmfY6phQX5Y7L7MkrppsCwWu2ERKNRdy3VeN3LLQ8WW7",
  "key2": "55UjXzjvsiPt9BzCEw77RvVzNQssYzLFEkUKkYoeHkcqoHrCByLVZSEPmaM5mvnDnHVhpcuUJcyB2hChdrkmPVph",
  "key3": "4hBEMNuFs5mBnhjK95CdCV6k2h5hHKmtL3ZRBG6yWXRZpbXQsiqJjRVXpd9GC72eLxXxRUMaN9BnCviAQ99aWeGj",
  "key4": "3AgU6QMRX1smQdE6ch4TR5vbzkF1Tz3EHrjoUM4pKofXU66DQ6SUajFfCJFRLVA4Mi8Z58SVWLcS8dVHc5HbMLEq",
  "key5": "4wXGycgGZZCPRyGP4X93XiL6hNRhYFgHydX1Vt8SYQmTaeEr6WESaeTRrvGRXPdjgQgX5U1mvmWZby7559f36cJ6",
  "key6": "4bo8HmemnDsVYko8V9HgpfWMGj9Xij39Dt218FCsshg7FMewVUeGB7HNxJV2AXeA7rqD7aYywK1tAtk8BYes1r2G",
  "key7": "3e8JLb3qWwU1DNYQrishubwhub6bdyKYd1yM1ZA3tqAMkddrM7wDYDqZoWim88HZ2xreTcMVjeiMWeSBXpbiNvat",
  "key8": "2FSAGj81S4YgWout2p85xtGG8g9Pdte58g4gVaF5eKbTxVt4baw9DMv5456tfZPMpXWH6p1ireQ5MikqPSmMMrsU",
  "key9": "4bUeLJqVFcRM1AtpNECMjzX3YjgMHWJ7JGxJBsuFuJqGgLYtdrwfsjoNqnxec5iFJ37PeGhwHrDcgoJndDoWqFhV",
  "key10": "mADDzu5kpWQAbKGkbfdqZ3UqnxMX6bB5cVW76M85HU1XNaqLpVRPb8sb4BDAumSq8KKh6wCd8tRfrZRfVLM4Ktd",
  "key11": "2VPzXZjji3Bh7DfT4ZLAGgHRU5XBseUsYKmwFv743EdqNdtEXvndD2Gckb52Pf5DDRX7y7pNFDsvsUaBnW1J93PZ",
  "key12": "27NGrn4cQjBJzkKeAYgAi9GaqrdN1iQycvXQk5smxwoXrLm2AnLoSKu8ox46Mg4VuZkczqTgLffUjQYdRUB1yNAF",
  "key13": "5Geihc6KYNSCeGaQWYHAZSVwn7VHzaYFStCcP6Za6PCFvLxs6ZtRRzUvpzLY6YFwg8d4cuNDCFSw7wSPRqSknqv5",
  "key14": "53RgY9ikBEkKjE8FVkCkwFCD3naH2NuXvKQZZwHLjWVhGNfAAJPxkXgWJWesCEGF228k7CBaQn8Y6hWNMwq7D8hP",
  "key15": "3H7gnNBXZoh8BwF1h7Jnt8VbKi39371WsNkf12goTUUPnFATT9GhgyaeB8urxPAterYx7c5gWhNaTihtdcw6bfV",
  "key16": "4dbjp5mEKaUYMMK3bw4ntJKFHJMFdUfrGjjCQHDSxsgh3CC6NUd9RPDSG8xbyxjJfPVnco6Wpww7iC4XXKuqSLtP",
  "key17": "2P7ndEa3LyrdJmM6b5uT7SLMpdMsLjGHf7c9Mi6t1KzYF1Vfzz7N175oYyZXHLpmGJjEzw9Jfy1uLtWhzghHiDPt",
  "key18": "34pDtzBFJDs37dw5daxKZhehXXnuAhWmwZC2SLhKUm1vjhWXBWjSfxuRTR7RdYjjHJdXBPaSBARM81qJ62RYPpKs",
  "key19": "3pL9zy7hts2Mjo1bz4RzT3o61QquRBZN8Hv6HVS7xcMFijA24ap4BbUffJ7A2RdiVKiwrYs8ckdUBFhghKidNnHU",
  "key20": "3DTuEBSc7HeTiK1A25SriiAnizjQnUWLuXaN8GnhTVjR6XzotQncSf9LTgW43WfoTBq74J1hBZkJourhU5xYigaU",
  "key21": "3Vn7yj9bhtLyJxnoX3NzPBCnEH2fjuYj7CdCrVMW6spDVJ8XdGrWD9xNaM1KhEc2SgTyK4yoU8Uuz2qoT5wT2Mmf",
  "key22": "JhiAjxmTxB58WuceN67vL7NaUgHf6dBgbvwxUZcMom6rA2qAEM53VPYoeMewfCxXJ1MMMxHtjTKsSETgQKd3oLB",
  "key23": "5assAZ1Wx5eXXFZiSNZnCPXtn9TVcgpC9xQK1EhUWhiFv6fpjNWUwAwS8eCShWbePB8uqbye4tdSnvqet9fJV1Kc",
  "key24": "Cpkc3WweH78s1VKBPga38F5o3pGw3vqMLobciHwygh3DvNctzmcfupjJU9SnikAvCgXQgYo63n5zavt6C98mUqo",
  "key25": "2RuPKPZCeVtRvwwz1cze8KbuiGJG2NhqHPHJ4DKFDZLLD71hpUrSYpKezASfc9R1sor7DTp6Xk7f9aJp5pr8n8CQ",
  "key26": "38wrwjkQXwkyc8qRaZTZunLbRDoVsQBAD4Ca2M9st5wbsARpN6SQs3WHFV4PGpHD6iiz4zPTKAradBo3KpdftFpY",
  "key27": "4Gdf1VTCU6dA4wJ8XcWAxDa613NZNJ8nXctz9iyzb7pfz3qxwcTR7PkzXv1LDuovLcsbaKFjczN82bk2L6NQxtL5",
  "key28": "4GiaoWHT68iZKWvZhtFTx5HwAh5TsNxQUygP9Dtts8XQwxvKng2pg8vpncExwCeDkuBkhkgmd4x4QZvKNvPQUKwF",
  "key29": "je128FJyVfHLYngQzib4jr5jM82Vh7VFcArauH8vdcEnh9LmQueddvpv1mfdFDhbh6ZDcFjAku3CryG5o5UmCBG",
  "key30": "3g3uQo6EQKgx6PtaG63naDyRkDeN3ZH9N4BFGG2XATvj96uRoLFFEmMjUAjWsxLsWLc3okdJthA62nJBsmbaBUQh",
  "key31": "8CfwWoMLjL55r2Hv7W6NaCqqN6eQbkoe7VrPEZRNcfJLquVW7pKxyog1aQJ5zYK9icnGN2N8zd8n1spFjomNGjr",
  "key32": "5FyrEocjzrK4uYXnNsv7BTScBkoyWdipVTGFh5VduuRPqpN2GsMUDPWLHvQ6GmhuNnY8eBC7bpH6P4D9f719M1PL",
  "key33": "3Yge7qibpMHHmFXzy4ynhsgD2U1fQDpqSVP55z7sfQnmvXykKr8EiaM5M9gSJXYih5rNAkrHbsHrdmL3WA4aFt5a",
  "key34": "4Hy4GRvCgHk4J4EUGgEinGs6dcEPbkr1oegt7jTs6Ybp7jUyA4DLeByUkqM6H5uzb1sSUHNNNtNuzP8ej2NvtSQs",
  "key35": "3tRQ9BQj2NYF56NUVb4DmBpsTVvqGUw2b63iYhcU4zJmASBrwMSZTbhWfathpXG6M32vyP4JUmcsBY8skbuLbuL5",
  "key36": "AEPFsEajCzG1wLQStX8hmKSryTUSF8XdQ97b332hYrEpxPhZUESaURTvZK7j3rNniR3UTScfGD1Gp2G6n4cENZN",
  "key37": "bXDMmZvtbHyxtfPXc3xq8g737jruS5iD5ZUvAM7XCP7Ge1ghLPj1nJ2ZGJvaVPLtDTMfa5FRzbM2ZyMnLsfvgvX",
  "key38": "2eGCskkNALs8Jy5KdEhhVZ2PxUUBA9tv7VBccJCo4wvQczshtakPfoxzBuoD8nFe7ruuBbkwh8X3uvnezQKwsCt4",
  "key39": "z6h8NXv7Rh6TD8pt3ff7XcYAptaKsYUeR1c593i8LSC6e3tEFT78TYP8wGdAs2VMfKN6KZcnctafCVYVaiJnBkn",
  "key40": "3vgjj9yLVEvtZ6HkxEpJZBzfmffcgiZch1jtEYxGkgjxQgU1nvUUfrJsqeSJGWr814hXgG3qfSfYRFGUpmPEXBLC",
  "key41": "4v9yZ9QYkA7VXvzgoZ7PQoBcvrWNNmaJdafRusDjX5yiLwiCChHUNcvz7STSgvUoMPVHsXhbkk76qe4ZzTrJBhdz",
  "key42": "WKXevpr65TaKmiMZ8idUBe2x9gZUEum4b71g5wu4nzjfdPxvh9GU5VvJvDheLoH3VpCKxfGcACpcbXZUue1kRtP",
  "key43": "5ujv1WC3pjs76eTKQuFazD5JhiPqDMwDQisXD7yDkqCjBL7tQWxqCuYcJnaxsZZV1hGkSEiQ5U7r5kCKzFVtoAZ9",
  "key44": "4WczNB2jMb8pT4sQ44oT6qBz7XBvrVXZg8GUNS7FgahR1nUucJbbdDpucyLwdRJ1WHW2y6qk3j3yWMRo5cWqcHJc"
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
