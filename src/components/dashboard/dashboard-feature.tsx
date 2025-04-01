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
    "2B4a5ouD5zn5pM6F9KVJipJLYEXhYhsBFBJ5NkTnTuRq3zTorB18YMPCDe3bFXagm3p3zzj3zYfQoNV8VVXe4APB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSMSPLwZz2XiAW27GNq2nknDFgawWcyDLtTxjDBkxMSqsfC59SXBmJzxrGYevLPB4hTLsKALEtWnndJRsFGcH9P",
  "key1": "3MvKh8G4Cu1YBik7HEHCkYydTtTECnSZRkbtc9MtpugfWXjZV9Ui6hzGCNb6rG6KFJX48B7BtoDhmMQcH3SkHeLi",
  "key2": "4tpfLLipAy9bL2CdRP8CEpiuxY9vBNeTf4b2qFgeE96s96TEJg7QCtNawM3ux9HprjS7czVemPr5ZbPpJmqXt4b3",
  "key3": "5ixp2kaLbNceyQpY6F7dodbtiAUR5aYW2nkunGkr5Zxhcuh4TGTHS3xnD13TmJrNxGgNnsoBFSGrWuLmajo6v2sf",
  "key4": "2GkNBMt6s9J5DZW11c94wrBrKEaeqyeC21XP1kWxxxGNz2wvtAg1QNJVSuqEG5CZczhsHAM3wJp1m4eCCYYTGwpa",
  "key5": "jRuFrH361R5z75S1ehtLYTChe3KH4VBjW8jKAp8HbtitjDo3VLo85LTTfLNRNV7X7TUimC4sswywJ53bx9zkexS",
  "key6": "3y1SjKQQLtny1uzpCYvivs31Y7oBgVmNkGASyCS2RH8iUCJA3iY4rYrbtPZMcwNnzeRtetiYM8tWmfeAeRMa2jKr",
  "key7": "PXSadCXP4PyqEfus5j56quHjbrPxoB14omuNJipTFcKKuD2ri7mbhArGzvWPSmRVHQQh7nPHLj1DSZLet7qdpcU",
  "key8": "54LSREGi8wsSZfb165Ff8uuvyV1hVuyCXHw1m6CfMtDot4xtLLZq6AgYTKw6tnogBEgGCzoowNAQZqtP3ECiUfZM",
  "key9": "3x8DjYohm8VT42pavVWsxZMjQGH2E8qvtAaE4TJjhmN63KKbtN3cs8FnMVbW4iCrmmFwCQqfxsM3XAsHxfEpbN59",
  "key10": "3uhKzuhRQu3dJjuGpiji5JKd5bYrT9LMPKFimR2RHihNn3jebgoqu21MHyqVMYwSzfph4X1FLBzq6Zxio9HZbWL3",
  "key11": "5WsDAXzYejGSBEojaiSZPnSCLjbTq9XJ7jDW61CCEdUA3Phs23YuSRSEDKE9o5sPJRrfjDizrTeE3MrAnHTBVhYz",
  "key12": "3gCSWD5gt26gdy7Pbe8wwum8g2xwMuoTNehhvkMw81Ena157TgQdqekNPufjPQtWd2RrjyLB7T2ZTmgHery6Cj6C",
  "key13": "JKfx5SdTgdB67nyPZ6ojCGiDigYCyPN8UsCzqmZ2J4FG25BDDFNDF6QiusNSCvNKBFkSUK4oiEVJ7zR75L1XVuJ",
  "key14": "usPCfYU6x38JRPyF7YM9Vq1uD6dHXN76yDEeKGn7txcbUhjVB21c8q45Jjp79cSmTDdc62i9NP8rvsV6AnRxqGd",
  "key15": "2iDpqwpAy8Le4MRtHncnnmMngvSnVCmb4UChP1DKLrH7Dqai2VxBjdysTtb59134zST39uSHjv7FTzUjtidfzEEd",
  "key16": "3vzzrGN4PB1Dbt55iUDNdJfrfCJCnE8hF9RXU19XjCuEB5sSVBFW1EJZo4Txgr96pNJpAyrSTSWvWK1hGyqeCjeY",
  "key17": "5M8gjNzH69sc11kSBNW8qmaRwpJe6k9Q59j7JB6Csne3jxKEBseBmcE9fKJ2QYkFWRFPy9Nz2hfhpWKKq91pJZis",
  "key18": "5XH75yKVw7vN6fLEuSQR95eaDugs89ptZSZ387MrLPd1ZejfUNGEhV9L7ovzNB9jSEPyWKVJQB22qtCYmjRKNP54",
  "key19": "4Xyt89y6HnkpdD7xRvewZvEyXcJtHHY3M66MtiHggTjhyA5q9SgsryMJes83MG1Et38Fo3ZiLNXCXGHVeuY3CUwZ",
  "key20": "3FPh72YsG9Cs4mmBwpSNPxBnJdbAgXJiR1aJ6xNeKtUjsLSvwSrehAKDVkzMc9mBmjtzbex9ETMGvq6aG2Zjs5Ls",
  "key21": "4eBY8CQmq1Fu6b7LAvzvM55AoePrBeMARErJrZXiSHYm9JpQaFeuXg98bh3wNECMJvWL4wso41iKNKBzyr9uFHvb",
  "key22": "3UeDaVpZBwNh1P2ycpWKYvtww3piW2kY9LVeKiaNp3FVMh9eBdz7gtPRFuXy5gspRg3KMvKfAVzYVUHMBfpqeibK",
  "key23": "4JPxhAF4tQXnmfeQrebWaJ9GwovPHnFFG9bVBLs2WZYDL7NSATRc1nSCYukoDQzu61tm5FaFkGa6aw3TkCSCctUD",
  "key24": "3JDMgtMQEp5jgizkxHfx5g6X9UtDeQdH39cAbxp8tj5yGkt6esgiJgUKuf95c2vSYuHom8kTBU4tPJtEFaanp5Ty",
  "key25": "3hVZsigvGzySrjJ6tDQDXZySa1FSuQz2VmyRDBLhmXtxpcLpuxns89QjrnLmGemDcsVTigk7qsKEv2KaQYvrocFs",
  "key26": "543bfmqwHCMbax6yukY2HUYaW71FGhdsWcMoT7eMLsBEbTnvt1GtGQYPZ5NBC7ZjKh7jFYZ321KWHYc8bnnSVKqA",
  "key27": "4GKP3WtJBdUcaTx7cJrRsx5Kx3LcksjwXRiFtJvy3gn9kPxtmHVYiqEJ7d6ETFdGTfWhzUS7rE5hkjaoJ69xTKz4",
  "key28": "5gMTzUNUMNtBJWBDLtiVLjKUhjJsg1cuNjMQUuGTbH8twnNVdtowE1PSy3aRUU2XuUNwbDUwrtx2njQ1YmdCVDJU",
  "key29": "2q6voZ4LJMxbD2Nrwg2adQ8gTzPffaAqqUDeGhXndM6RPbPZ6w6WVvLtrTMjGVR5Esp8zue5s6nKjKRyF6txkaeH",
  "key30": "4Mo4ESZoCVuPGrKrEiKgFoKSh8uDPuABVLSyu6H49AUKyZFXxhccbb74ev1MLbT2e56g5Lo5MJAStiYC9LUj7ZJz",
  "key31": "4ZdnqTQUyLfgiWWpo8aqjpuabVSK8tZ7to8WXnz9LjHsc7xmxWxkSAZXTfsXDiuKaNzHCr75qwaWXXnQJ332kEdH",
  "key32": "37ngiwrr2idwuR8LhuNSZBPiaXyXX3U5n9tAaynfEhQf7D8nD9VXMUhL9wqSioBFZKuMuG5KhwK2HY3FF4anbJH2",
  "key33": "4YoWd6k5ePZSKoUvFhMRd7SdCpTjHv8xKVR8b7S3vdxJK7yMRcVQMHBbQNb5zxT7doYjTVcn2TpQMqTTipZaKsJi",
  "key34": "5r3y13CJVMTG5SzW3iqLTGRPMgRQxSW7nJ8EdowuvfYzE4oEv4rrt5eNyRZkGC1G7QV3JERbzUiG4eo53A4zvGcZ",
  "key35": "4vAjDNB8XVP4xi4VkmFNV7KWHjyv5z5ZX5gDxmhWMnPM5NuyWBb1oeaY9pNtRPYVXpbbHHTRP1VQUYcfsNiTZB8w",
  "key36": "2sfcV4zT4KURsBPqCj8jjjJBkc3e7YGMsEknrw6kA1w5Lr2n9TtPii7YC21CiTtdppUyyeNxk8hR5WwzUXjg8vw9",
  "key37": "ZWNCvK4iLLHrUbC6Md68Wco5MeCvQyunRdEKxcemZRC3fb3nPuCZgaeZDrbWuEHB2pVP3Bu9oZyfwu9QZQ7MDdG"
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
