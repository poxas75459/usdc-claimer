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
    "4uBwVfk1hppNUBeeYhr4oowknb7m31vh1RJwaRErr7d9KBE8ewmbrjQ773AQVT9J9iGfFFWWF6ty2AXt6psiicfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htPWXBVZgKpxjehtHgV2PFqKoJKgCGCwitvGAcpxgvXbiF6PnESE9YjTYia4tCjf69ydVPZ5Q2Ms3ZsZvaruuKe",
  "key1": "2aSmKz9yPPHHhDgNy3V15FqvB4EJyGvLZF9YHRhcK38QNHoduRd3jiuCBdkgpEhxZLU3miHPNJ7EV1w8YhRoefUp",
  "key2": "5iuznfa6Zhde1WcCfVTfxiKzJYi9yq52TMSNY1cxCZ6RuHv1FvgA14uSvCpm3VswUYzYE5GQBd6RtRR7Ku8Awovs",
  "key3": "2Adn5ahRJkmjV8mPchGh6AQGD5uXfdrUjzmrfFS9xFTCTjDxZm1keZWHuBQXhhy2CozkoZabUosux5eqq6HHi6UH",
  "key4": "2e6i43tchYXUm2aYtLWTE5iRJFLEoG34LcGoUyAdrH75rR9sZHzo5b9jpDhELZ5XL238edvzjtouoDPKnzpHfG7s",
  "key5": "2znF4fWt9GDXuCSbjAteGH45SdM2Rxc2brYxyDSR8yLAV7B7hPcif4oaazb5rYVHVzWrhBUqxD73X7FhHZLhW8h9",
  "key6": "3CFHpNL9dPXv9yqVozWnQfC335XLzquRMD8vfcEJ14syBgE93FDbxzco96y8wRLgbT1EgBxG3xPDkc9ohtxcYuQk",
  "key7": "etCuJHu2tZbYAdQbXyUodKKWJESUdEbwmSFSdCLQWYmWbg7XfzLTxM4sjT3uB6Us1WG7w7sHzskwaW6YPxWS9kB",
  "key8": "e2DNQTnXn4i6yYz8TzxcJQAoaQe6Lpm9uenBX7p7djm5qBeUcwKaGKAQSjUMqFmhazW7oQ2jMWKg6gGegAigKGv",
  "key9": "45FesAaoDkNXrnWtd1FLoNeNV559fmZcCN8w2xtCxVfUEmaNr7oNMn1fvZL4MooaXaEBHStqGjccDedviKJZipSN",
  "key10": "5ssLdySqKRWP1teXtbtRi213WU6BvD93pr8vKh1QVfvH6Z9c7iKy6ZF3yKVSiuNgcBpiqbgVZwUK4adMq4Hev58X",
  "key11": "5Rkai2NW64FHS4tNdFvuYEe2epJgdb8MRLWXCXXTUAKtFMBP4TdXivPRe1G9dqs18qzaUYc5NFniqJ9dGQqSQ2YF",
  "key12": "3fLxGyehKnhDSUr5WAqm9FkFwzZNuXxeLqtuwdNCRgS8SVHH6Daq4oC8rvE2fEaSxVZhjgbG9LbM84kwewSget5P",
  "key13": "5BsDRhfPpk5811fPU2fr3b1374gxvnHdoGu5Lwrfjk7MiEa9jSXtD4KYqPfncDAc64Y4T4QhK7ezkxzL6kdvcDKu",
  "key14": "5bzb476RJCCX1RndpEhhM5GsoZeyj1hh5otoSk6C2owHCE8oRVo6PJgWMiKVMfKptodxaNufcApXQkcZcWBMCrnh",
  "key15": "4BTsfkEBDEX1ELqcrSBM8EryduiajPhypCJB76zRD8NyLku7rfgX1pvyFbDXHZFjRJ9iHFsXcMoeEYQgJP6RJwqe",
  "key16": "nt1t69Hg3qZqNwPCZEPcpRYVQccvBjgEsymaTEt32B4rCYcgE2iESK5rrhqjteh4QS4nNDi6UPzGEeKDAeuBecb",
  "key17": "ZRScLzfgpZiWY8anrbmmKssBkUHu972nj7SsVJkCNGzxHUJGe1wi6UxXyyHgZpjBEYo1RQuhXhcdVYK7zqUBzhR",
  "key18": "5VMTwGon3RvwSiDwS33WhDDC4cvmSpnQhNgX3M22Fk5wXLVTuNURQ91YpP3TNW1rD1YvfkHCQfvNywxCDgwtg9BD",
  "key19": "xaY8toVRYi3gFyYEm5qG7NxiFdV9KgySJLL2oQtFfkavD45ur7UgeFnJApNbyuVga11oBKAbdiDxrWrw3ipt5KX",
  "key20": "21LiRw7WkyLiu9nQnKut4Tt5cn9TE7YksMtAAGYz8e2xwu6VDDyh6L2DRKN3oRsBQS39FwMi9x3XW9846hNLQ9qz",
  "key21": "2W1BzQwn7qHE967QnxShKVYrJBSQXHco6o72hfwat5HYYuYonWGYdiAymHxH2nLeWVpXWvhzR1wipB77JQaF3Nq",
  "key22": "58eqbj1zYNmVM4uc7dVBDweheBB2qkHipZND8wCsZXsmdjmUNUefhpiFVuqw2Ar89sNjHtXHnwbVALcFBDeqfXXa",
  "key23": "2E5BfXyRFB48yrFonYaadt3YkoibMENVgHtmpKHKeFTvE8YCFBSRXuGaTdta6AhnLFPcBuv5iTKiEinxjpRwjLYp",
  "key24": "3Zx5MkqiCZLmkdbUVjGmNrsBkKYwEAWKVCeepjkq6wqnTcphg7D4FrGRNyYZpfCLWvhuvYMbTGwdRjWPrdWHKVCH",
  "key25": "5VZmJcgE4oRshwpwnMPWm5KViBeaPL3gyW9fZELUkme1cJfQuidNcvU5SC4KE7S7axwLYA2BRsdRC1wHtNkqDX5N",
  "key26": "4rEGn53hdqenVBesxtQQMyxdwZBMpTQzfMq91aHG6G5ioZQw6TUmGz8jsczJFDDwjZKxHGpwz9gFHT9ksDxeNNNz",
  "key27": "2HF9oFewYpQ6uDZoqNGmrnmm3V3BRmFTSoMpeMtKRhJSGrzmjue2m1BL1PX5gHVNp4YjGP2nntrJpk8jcjdD5uhR",
  "key28": "2ATtu8vJGsKZrQGqKVNMLeC5AjRkGzjqdYcrsdrdxuKNLRYVGfJBtmxgn55obrEyKLYbZmsNG8KfUwPNdM5oGPPE",
  "key29": "3t4vmuz5ihUNkft64P1vCLjCmCKFfUw74jH4W2uwcTM4G4kuwn74zjHS7T2sTLTh3JqjaYKDdyK3sNRGZNx4xspQ",
  "key30": "BTEuVxUweiYAvJJUjVq9uFAbxnj8TW6FN9yVfXn8x38txJt9Sr7pFxSzr5HY2XHmRdCWMpesQdf7DfMySoq5KMt",
  "key31": "4shd17TcoTwA7U2zqrikkkdNh5463nWjGah7yEnnJrYy5YMeuvFSoTfsGnertTfi834BJabTEAB5pfqu7RF5aBbB",
  "key32": "5Wi6qYjKbdyLDRC12siFHDSp4cxDhxh36vuuDSVUY5pv3RMDRhofTuhCndrdNcvX6VvzbFo2VpR3YVwgr1nopuyt",
  "key33": "2TDDWUuNmH44yWZoQUWSa23sfTxPtLFw4CrMKDDgCzo3PraPrmQ419qvELAqej4J39LMdGkBU795bQJAckJXKj7v",
  "key34": "62SMNJZpHoMipZdWEEhh95dXe9uC1joB895zshLmqgvwYqXGSumqRkedxSkL5FXJAeXanLTdBdKs2BJjnFvzHGuY",
  "key35": "3VdV1MUEA4ejaXP6PEZAK6fSDgcWqu5Kp7Dws9Q4sYPqR3ghLzmDtpqA6R5M1kb2x1YVrAZspqVqGyZTM6XP6N3N",
  "key36": "jcS2DHQgXWMyhfwtUqxsjJwr8x1GHrs46zK7pBFiGdP5Yvgvyf3UGx6AzrZ2hXJ6gbCZnt5f2AUq84n1NRqJcqH",
  "key37": "5LKGRTx9FzW7TjxoNutvpaaBJ4d9eLBTBkHrwwDM6eJsG4oyWXtdwTxUrAwb2hTZAHkBSXybf2hXhCAaiYbWk89c",
  "key38": "5fdBcgT5rs2A4gxV6v9q9fumvgfNk7MXDKrHGLW9dyguPtE868KXUF1guVyXXSiUDbG1H34VVWiosmthx1oLpaiY",
  "key39": "2fyYAF2bkVB15JRRVpgaCfgcMQosVWdVYAVuA2er6xvjUKd1xo6w2ZgXjWBdPTVmCPsGC4njwu8hUsonfkoApHAD",
  "key40": "4AemW2juQYejE2unSLGziV7tfHWAeCMwiKm7y9ZEsfwdr1g7Zt7gwJSZWuQhvvyP8cg9GXteUjDK1R7Zbx9Rpv6e",
  "key41": "36cjuyATGtXiyzJMHh1Df2x8XgubQtyZcqtkpyRATd6p3jwT7FADXBjMzVKCxtS8LxyonDBHn5zbrtRXS7YJWWtM",
  "key42": "A7zWb8akaV7CJQUEWNt1uFyZ5RVnzjbyGkxUZz4LLX4Lgeangrf4oFkGLzCeZrSNerSqJMaxSFWm1tnrGEDgC4R",
  "key43": "4ckSh1xBUAR9gfKZ29ynWC9RjHPNniq9WjQGAMxHueT2RZQtYjb4Fu95whmZ2YJah6phmzbqccRgiEEa5BvVxUUF",
  "key44": "2KwjkEbJQW3LDxEfnBUBcmUTtRTaq4uen4s3BmgqQyJEuV24bVEPF4PtLzerSDBWtLbGDwCyGEzn1ebLaKQ6ZnmL",
  "key45": "3oQibCgRjk467WGYL64VqfxNtYf3kokK9uV1jmS91ADp6xRCtZ5iYnHtkbZ8szFX2joUFUA6DoW5mXixgPZFNTp9",
  "key46": "2EvxYZy3fY5xBL8kH7k6mUQ99kQW1qCri9gwSphnYZc4yCHn6iMXYx5NbUtX4ZgT5unuAP857YPfwzLdyXfDa1iG"
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
