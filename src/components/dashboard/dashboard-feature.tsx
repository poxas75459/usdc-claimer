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
    "4e2pr1MMKev3zBJK48rKTcabYTMhvrdW6x9b9VgbXjivVvURbk3uH14hNXb8E1abVHmkGY2vuGoYubjxDhyhCCX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZSvJM6hGR6ensyFNwo1ZWrvNsP1YhGU6C2heCKAWg1Tn8pqUfz2KLpppdPDmr4LMmg7oKPkAarjBNTvdzCQi8E",
  "key1": "5tX5g3MB1P2yDW6PTGQRsapTeyLf2vAovePEfzLm7i49vmq2g2NWKhD8A9FbYKFKkyjxtP7bvjS7MSmyRe7uqZHj",
  "key2": "5woYBS1udoCeFSjEJSVbKFNiVFAxdpHjMTEL9JigM9pTAjrWZZEuJi4wndfb79GwTg8doUAnhqDqUvxgE3Xgc517",
  "key3": "X3PaGt8sJo3t2wXGFVXHTiKB7U9psAC81cpuJxSpfNDZpAh9ZhELcUuxJX9p6shkt7RJXrohj1TpTU1jwhGyccj",
  "key4": "5rcMWUpgACxQ1yqMwoSLUcFpqhqLoEHjXa6xooxJXMXu87edYUoD5qaVdFVKGKPj2eyD6B4GRJkDcUak5o2hrxyH",
  "key5": "5FAf31RpbLkWyz53ADHmqEG4GUHU8fELKt8aSBHMVFDo8XfsAnDXreRuEHCZKQ4apnozm7efxW6f68qqWYtvUV8m",
  "key6": "4eKy81EK5mPAja5FcW4dVMUKjp5K3PZKJkNxDX61t7yQhVLqgqfcZNDams3wot1xzV8FLcyBkYmQ1LVxnbG7XXEK",
  "key7": "4qXtnCJvxuNLzAjAbBMJkBayQjG3UbAbWdi8N9QMCRaLyNAyyfAa68HZxc2coZXg5PG5G632z2NRKnqQbLXEggnR",
  "key8": "3VDuNbwUWrxZmfjQUFpuASGrPexiM6wgguoYXFq3yFt73uvQFqgbLgHrr72Ryqe4FhHgPce65xBmQpB2iGzHT3FH",
  "key9": "5mU4LRJjZNTiygWzHDBVDtN8ENiNn355YNFubBSqNo4aLZsvdoYYDxFTTj4LHmnnP3sevxgKn5axCUg8HKpLMqA",
  "key10": "4LXa3XSWjXNBf74GfErF7SaiPkfjh35637tEZGh3tMVUueLMXjJ26mCDvQ7Fv633qoVH4A3G9CheRYecSWaR77bu",
  "key11": "36A54BrvECka3beJX3tuh9s7LMr2WwYTZAxLxvgsk5MrXsPx7s51PsTUtGRnjR6EFQKCEs8eFnF34TEsWf88WYMt",
  "key12": "3oRkLNJpciw3oaixGWNnSTcoR1YCxvMqW666bVfDTXXFNZ7A2Z2KpnpJiucAcyGaH2d6SXy5vCjvzqE4gFJSteJg",
  "key13": "21Gu4gAte3PwdtwCzkhKWx6A4z5Zt85awq32zUyTFSi1V4NLftauHbtE46nYybVGBPqzKZuESzF98yf6cNdaz2MY",
  "key14": "2AXqkrgtMdSRFheyywaYb1a1xjzz9EZZUeT1nUbTjWqVTmakBSgzBnaPVfCjPjV7t9QB9oCMTmLqcXsDebyUSAp",
  "key15": "2Xex4HySfo1QArQ4UhfvJVRR3pp4Qf2nEys88v5Rj7K497tNNvNHx7xUuHxmBbigBU2cMcXAGULY9zMobftqxGNu",
  "key16": "5qXqTDFXnoc489fcpcQXAEpJyE8N5v8HtEBP5FBXJ5drVHiCaCUyz5zrfsciJm2B4WxbvsbiQ58wJg6TMMcHjKcf",
  "key17": "eT5qrCKCWTQGE9bziHGVFtXVooBVy8CE2EJiBYKkHRq6mYoNSt3NLcjGh65u3MaVofCetr9q3eq9JxjLkqUEEcg",
  "key18": "3fFbkSeYepGrQ3jipUfnxtoQwnYdBS4GxSTDWE8TRxdaiiMwmiXbYYLf41i46PCHsnPcMEbu6F2YwBtkigQVnPvf",
  "key19": "3A4UGKQa6D7xidwbEgtTM7xZ3v1yYw6zu3NoXfssyFbNKj3CBVh1r5uv5YFaTAtNxmpDjCdKmCFQi1k66gEiuPud",
  "key20": "4TPyrayDzGfaBuvqNwaq5W6fVcMkYeWKwgFW91fRgDGggvYWJVp9o31DAceGgWyZWoQUoT44ZxNu7KnhW6Mnmm5Y",
  "key21": "2nL1h72C4B57SXkTttdDkXP9qgncVdJU52tDWoPotrBGZreojVqfv6nj3zEgDyKariXzbFZ2MgSvNJrXBrZhnebk",
  "key22": "2FkaHssGN7DM6FxHdk1EniaU7xQCekxsCShJvfPw61j6QVuEG4RQm6xXccK8hHdZ5K7CRZ53ZsrdnfLFGktzX5Ku",
  "key23": "KDM4vMw4MqQZq5mMiT1zVPQPxMaruEqMcoGtQfPudsjti7q7uGPPPd79WmDbYNeiuTU5Ccu2bLo3kzisiru46qu",
  "key24": "64ZvZqxd7HHiXDKun4ZuofPu2cZ85DBkATsqmm2wzg3fJjSwE59bygMuNt9G3s9HLVYfgSpLiMHr7SUuNTUtbtPE",
  "key25": "64PS6sKnxX7sBtDRzJLNTds4BF3LSvm5arTw9v1vfCHKNiSUHMYRTrbhsYkPk1b9dndQHea1nqCSBFvcyyQ8DHwY",
  "key26": "2aYMgTXY9knHdjFbeVUYtxsMYwXLwJQcArQGHiG4dhM3aDNWPMjd1ih3BsPe1xuLiu2DPj1677ad6o5sLD3EN9Bg",
  "key27": "3fv7bbsWq8j4sp9goV2xA6trzDSHMRV8NQmdSrki2sRm2zom7nTLQ3fuUVdKMjcLaKywQuDeuD1Jw5gFpzwbPBAJ",
  "key28": "3wkSWHogU6SH2K7barZRKiNya9N7Nd6T8xy8RrnvEDT2rEF37z2BsiHxfjwkHUWuBciS6iCSEu1LCfXq2y9Tpgqi",
  "key29": "5zSBkQDz7rvtbjeoHYpHNfdfEmYpdB2CP7FRhnyUjkeyQt6jumBzEEuojPDvD52Xc9kDWF8TddqWA3b6ZGXNGxtF",
  "key30": "4TRRx3DGm8RKc7ws5NUoUKj1jvF9ua7RWWN7vYqdo94zfbQNkzUdfr5urJQtvRnN3MXts8MSks8xVL8Sqazs9kUj",
  "key31": "3ujH3PsYxyBBiB8vJ7p2KRYXv6XjWy6dTPAC565kxMXNNRPSTQHwSdiTfXnhKMvqjE7iWqFmyWEt62yAK9W12izv",
  "key32": "4BU6fehWr2BdWmzCth1QNpeSKeBMMkLiytT5xUMhrLMiiwALSbMRLkAh2MV8NgwC5g3FAFk9qyv8KoeGKZaTdpi6",
  "key33": "3V1xYdrFqgps6BjzW9B6JziJg6iKPphMMm5PmwxEorWxfixbL2hbRB6ULJ8sGUtFbDBFc9DeJVBn2d44eZfGQDia",
  "key34": "4tkK1ahR7kLZR512uwuuSySEmMMBQWZoBQUbSyTfECBSQBQGV26VxciqTFS3yCGXy7VoHYD374mTDGB5R8UUpsPQ",
  "key35": "2CFv8AuqCK7BxKBTZNRtkzv7SQD6rjPJf7ZD4JfZFTsgbCcentKZz189SQf4BvhQ2KgsGoMjA6dVekfbUpeYg4Sv",
  "key36": "VAPhEXD3spMM95HAV8Vj44ofjooNWEfqSjJqeFV6svgTykEtVWysqbvNS5KGH5Hs6u4qZ2X8pxRGvK4JjVBaHPb",
  "key37": "5GNyxNMeU2NkcSuDZasvZnSPsuCLqcGPsib5hSzsvtTvKeKhMfNHBt7daKrSBWDiBeCsuWRXshbEuCwtNFBd4rVo",
  "key38": "5Jmp8DSW1hPyxCZUnVwSN4FYKRCbRjLXGmLbwu9ayqgEYdjZG9Em3wbBgKqzFtxKF9JyfLxJaAabMfDjau2Qhgj9",
  "key39": "4nqrd6sUEie58fjaST78St8qnQhQtviyuZAjAohAbmix2SznCS51Hg9ZuSe9W6fMFkbugCKBdXF51bhs8SUKt8i1",
  "key40": "2PF8dd1HurZrbpCPmnRXZ6t4j1u77Tb66oUZFXrnVDNGDDoXof2tLRPmJidCvkpnxwpaCRB1k2T5bZPW5WiYPEsb",
  "key41": "4fCpWnenPe5GiUZ8b21fTs9ZkZQxvLorbZVCB6trV4KsUsFYxXZ16cYtkoRwobXztxp9GV6Xo3Gx3PrYtDEnUuK4",
  "key42": "5tSGzk5zteBVygSHqMFX8q5h6vgVFGuV5oBaXaqYsid4M5YtnDyBxH4P9zSLgpapDWnn6FShH7N8e5rxD5CN91Qb",
  "key43": "2HZ2cLe5ZPPz24mHMeumeG3LJNS4CUqpvqfPmkwRmwzR3QyrbWhN4zULqN5rLJbi7KhdRqaBJmv6XWpxrgPQ9gee",
  "key44": "3Rk63rtpq4Coy6S9ZoWHX7if1Q6K1V2PwBiNJbrVmVZ1cB5dZAp6XCCEh9bzMHbd9JsuTn1omw3nUCSSTAVHUmTt"
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
