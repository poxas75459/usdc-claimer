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
    "3fGBNXtgk2NQHTi3E3ygFozmF4shZnFnxcCLtRKGLhQqFdrFnJpnGE6XxN5grPkE4w3QP9Y6JikdFsW6HP21euhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHH2cfmtVPZ991biE3b8AKsoXSwWUgK5QHQ9MCUxg83Wg6uaaBWUpLem5oDXnSKUF2jBusHYaT3A7EoZgoXwzv6",
  "key1": "4VvtdhHM2LeVBtw2fyGXkdyW3qcF7JHo7o6R8Nig2PfDNgxZBLFs3SEhSvJg5VtgY1HT3e3PG9Lo6b5GhmQ1Akz6",
  "key2": "2AYxNgW8EdoD8XAd6pSivYSCqpsAfugpg7DSPzZft4n7rAG2Ng6i8VqSQTrx6kTUYgeNMaqLTrvFySjEFK89aNAN",
  "key3": "2SRL2zCb9eURR4HWwUuYCkJdy4nFZnffZ5gtTYcsCXnXzn6CawmB23qccYU3NJMF2FoeiQ3HCKAMKvUqCMLSh1gc",
  "key4": "4Wtamy4km7pKM5CwFD4KK4YgWVT8HYAxWZh2RC6zQZuS7AB3yNZydPRXy6PzHFbS7kmguQu4gBV5z3XxUG8SLGmz",
  "key5": "3k9b7ahNxUn5g56d8nNxQqMd5Ai3WvFF7kxueCpo7FwjFaTsyRLRnYfDS58EouPvhvweFUT7rLmR3NfqbdsTUXWb",
  "key6": "2Cyee2i4sCphCWQQVa6FjfVFbBC4aMembQUvzE1i9jS15iPpHJyDBfr9MSDeQ1Pvff8bqx4ESbiiq3RVZTJgHdzy",
  "key7": "Sqwje6WZ1zvpa83hPpYMnCufY2KtN83Az4xheHu8bK6TJZqD4mm4auq4FksSrKJYMxx6dmDqR2SXjdEj2bgiQy3",
  "key8": "2bKKcHo9ptcdLinKQkGa3GqCMrYyXikZC7or3pdZRY4GoeQLR9ZXHdzXQDAGZdQGAdoxE1fFEecFbXmKSshJyg9i",
  "key9": "zsjHnug7pXH4SUKkxB68CwVhk8mc2XfXddoPpCFMDcrcU1TiXvF3ZRKjgkjNCN4u13nCpkzq9FR5aeEecArZjc8",
  "key10": "dzoGYLVcuCw9bLypZP3kv72Kia4jFwYdDxb4QrrYts62WjgxLSdE2n9AVfM3G3sN8ARFjDctbxC7VNotggjKNhH",
  "key11": "ec6W5NXQqQe2nz5AA6uw43AZ52vGKRRjfhkgNnt783NUdgDLcVGXVWpXJazAiHg8RRDEN5vFRWQjruL4jk8KUQH",
  "key12": "5k8qDRgjjeFfYEfth5FPhi2P5ixUSTtMEpzu3kwRCBtqPfTED758o83aeU8PhKVVZBUGSdsGCDey9oZF3UehhUyj",
  "key13": "5McRmqv1ftJj38ghK1dHD8cNsWRyRuv2HaYVYkDYzeknxwNeewzCaw89TC5vyWuAyhJNYuCQi3fVGU34hVTr2dBg",
  "key14": "d7pU5ETtrUAierSRz1Jt3btuWkvLhm1LTzYfhaFw89aB8obLCRtyF38PLxbfeg7TSySzF84PTrJLSNn1gWUciKN",
  "key15": "4sjGXLGeXQqqVbbSkmg9xVfoE9MXVs7DDwycVPFGtTb4C3YDTPpQBWrGT4ZW9HBAkQ56FVrVvGfhZoYiKsNn9p9g",
  "key16": "eCw9AAeLu2TktYQcDmcGgj4QARgTzA28bSa8Q9X3H2ih75d4e1DmrKi7Dhtp3BBXAw5fP4WHm77iAwTvrD1Mcsw",
  "key17": "2Gn7pMAoqyZ1VanVXvK8Uc3Cvn78FtiY6ZPbSWLX9Jj138UKVWXDaozcfbvYJytafFdMKLuTH1NteGskNqVvprQC",
  "key18": "5o3vuvSerEzNDr73sfGefPrQm2jbyis3Sgk1ZFqBLitkSbQPkyrZPaEtCiTRPGVHqSmDAi1oKzmG8SqxdcEynVcd",
  "key19": "498qZstvjrUBpigMTkC8LiAVuKKxEuJnm4oPLuKWJQn38EQLXVLaDBJH41GpTsSYRtteQ5CpnYDoy8X5qxVySgzK",
  "key20": "28bT5cLz4x2WAzDER3t8q74KEEoWBMdbwWDsFnWimJ9QKbQwoDCcpjAaEAiW9f11xFkYTVfMR5iDtL1mdDaCykf5",
  "key21": "4nQDa5622PogMunpUHDNNhuqTtL7iS2R1fTdhNiw5zXJcssvwZPZuJfShnhiZrUaf23GMWAxLiERrunNXAz7kqrQ",
  "key22": "3jZ9UHntBctC4wH1wxFRsqzaqLEcHX7ewioc1rkugkj5emY3NjSKFqEByVoxXTPNAf9y2Zk1Hygk9ydSLScKa7cv",
  "key23": "2wKkv9E28rjVfgdi8ekSnRcpMzU2mGXQdzzg7fC3rxhyZj69oTmo6x4ZCAvZ6ivm6Hjn7hGEuxkM7eWDCyzicfcq",
  "key24": "67Z4pGfYr5B8sBcxFcR7LBSNPx8rbixrGNvdoCU37cbqzVtQbfdSWg7EfzFkYe8QxPVoGXuZ6bK8k3KRQrWCLAum",
  "key25": "5kf347YD1UUVzGwuQ22EXiD6BuQyqvscUoPMHqmRGTmdmhipPHV5awbXzYL4H3YUdRw6NLsrmEnw22yKfdY3CaBU",
  "key26": "43oj4bZsrHk999rWH6hr3XgXwnXWCnBsaaWMd5LMdUu9BGGChHnsvf6cjUUTyFbWPUVUTkte8yxkBytZzLdBxSpv",
  "key27": "aNGiTaSigNkLiMHRdFLESQkh2sK3j6K38jteQmhFwK2wpZs7wssnHFqJpaJwsYSepQATUvnrVntYfdMtL9Me4Fu",
  "key28": "3z9L5QKR6C1FiwHfCsz5gaD419HiGWQAv2eyrsGxmRzUN2LoeMan6UZp3zCf6CoH2wLnND76sdj8gDzPrSfdCJex",
  "key29": "4LP6bX7VbX8AssnewEZLX3H2drTYL3e1ZNvEcpMn4BiP7Y7LTwey7bsw7N6NV9JsiF3tw9QrL5sbYQmJM1QNTvVT",
  "key30": "DfviHHWYKr7UL4E4VmNUGPhzrQv4nteniVfbYwmWPRj6kF6ARxPLdVb1d5uaEZac9Hg2NhcgdrVQyQ9iwMDeaJ9",
  "key31": "587Bfzy3N9qLYjUzB4waiYttBnauoqjxyszFmxbcGg3ARTbtgVVRC34ccCoaXJznGEsfx7hvknC2NpsBHbV6qfaL",
  "key32": "rfSX3Wa9MyXFaPspZXQcDLgT8BPuGYMJMPSLjbYoMuTEJmkFPHa5Vi5eKpUoN4dL4SCBKcVx6SY7nai4MnEuusX",
  "key33": "39pEToDYPwZ24Ma4H7KX9rKdcArVqp1j2b2xyqJAfrJZNm8Txy6z1HQERWpSYpm9rLnhhNJnpBGBnzGyZwRynNZU",
  "key34": "316ZxQycFqvz4hGdr4kmWy5BP6QFzys4Aba2UWwpbpZD9b283bdmVzewXsRjMudVHHtTRinQC37aab9L7xmyV7Hi",
  "key35": "32tJVRRmkxYsRg5AetSKtB8NstrRqYHhcqJPPDHEj3XYGHr71KXTqZNH7w25FqHDvqkSPi7L6hQ16gxuWQN1GBwv",
  "key36": "2o6bryVtkCURDv74GXPef3NpNRMsdPvUArRxx6s72iYJQnh5dvvXCT2uaesbYE2EDJGXusvRXwXvBXV2rVMMdCeu",
  "key37": "5zJN6vXm38YthEKqigEkreeu3WhHccMeASeJSmrJXUqeTVBGTBLKDna9LPgSPE928akg3erXTXmc92B6VPe17EHy",
  "key38": "5gF2VD93UH3rumA1q4JqeSbuVN1BEvYNcPuGny2FuWydtBcPPbzgBEA6d5QWSBbMdrdgSjcyua9YMxc2zfqjFHev",
  "key39": "3HiENn8wrVSgsAASW2XKRAQYYYmnSsXXm5QZ3AUNXXbBKN5ggVjjzuo5UYxjsX75rdqbSosBdJTcwJ8913didXyb",
  "key40": "4Z7uN6wr1rZFufdE4BYQfV5KnQxQyPbZH4SGcHbT9fFU9KAFK4rGoCh18vkR2vRQpB9V1qb8UjtzK4AKeu8kLzbQ",
  "key41": "D5DWmX2PGFMWq4tF5AqYfBh34eeqfFGjLhWXjZhw1cXuq6SRrp5pNVmLEtWZiATPZtHSa5w9Mpy6ouTutGWRmag",
  "key42": "35R2fYtLhfdM3HuYcdKqeX8ibd1wyevCVht2feh68rtWmWmbJS4Y7idthCwymwtsssLMwcNKVDHeWqiXeVE33rXW",
  "key43": "5cFUF3pBnYMKY6KkBrzR1cPNnndK7vEFbjAhpPp2FCo6v4KunVw3BmRSxz891zFxpNFV3fFBezYcvTqGLBpkFYfP",
  "key44": "4byypHZGHw5hvGg1gLtTv8MoNwFfEQ9qqYN2Wy5CjdRrsxwRcZ3hEx5MXrR1UuwF9sLLNQJJcVJhxbtJKRC28VfQ",
  "key45": "5jTGkU1muUfqo64m6kHeraCsBdXTmKXJqg82ZU5JonPNpyNAHVfX4CMMDAiQxRQrDtyThvxqwvMPnNZpksgec3ex"
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
