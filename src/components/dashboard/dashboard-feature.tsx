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
    "2aGkhwj9W13anV2X21D3FM3WaAxSFN6QW5BhcjUaH79uXxuFG3E4GMrSvppHxDKccJwRD4n3SF4gcnRsYWNaGhFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUXDpiC13NnD1omYMb1Kf27ACMBuyNuDy2jyUyMsqdWDtUNanvJi1mUbGbyfVcT1G8cQqMHuaE3hRPWRTSDXZm9",
  "key1": "2EMQhqex9jARDPbMELXsEdfujKSVDJAsezC5aDzwSX4c9yzunhar5stxFjRvsZwd9EcanPsviNGHywBankEzTMex",
  "key2": "5AcBmfYbTWR4YHrgiGtHWf8U33N8KpnQSHCtQtBv4H97oK8WVYD6vjXBaC1peBHWcsPY53Xmuk4HZh4KX9qDTSXa",
  "key3": "5pWoNtofii97Gem36c7kKSk4bUbC47JRtNwqEqvPNWxsJDYTNFFRdBnG9xWhwH7WSpJKYQQpupXws5Lw3CJkDMDX",
  "key4": "2urRQKYZxKgZWKqr6xi4mkg319jA9xdpTL3PdWXM1uUHRRNyk23hQyNBvTH2AvyiPyvByu2cscQDxtygwQ57No17",
  "key5": "tkfzbGUij8mk3BuT5zZoEadr8xmj2U9cWwR7LqxNxbsAevEAquk6VcBfVnWu5Vr3nK9Y2Zra6gKCEz1nhWR7t7N",
  "key6": "2q1eqiHFRuvd3cirCBcRd4cFETNij3cuV3yKzHxzL8PCpQRKcpJwJRSyp2gJoeb2amn8aqkUUdweurhHKaNpDjiq",
  "key7": "5oEydeo1QBMjqfVGB8fBGvUzKLDjh824mW2N5bSbGavEciPuQGfTnJwr5GFVjx8Niq5uzvfyqEpf5hv8ukHuX7q4",
  "key8": "5kjeqWH7Goa5Dv18fSgjvfT1Wh6ABAcHRvuiQPZdqdv2Wah4y9L7pizm9yVaU771WpNPcBRxm7HCTKYArkBYi2o7",
  "key9": "4S8dwaPDw24iRMkSZZLjGAZzu4pTz8aSci61KZrEeYmuNtfzixbe6Q4xbyzQgxi8GVhS3N4gh4y3kWTcxngj9T6R",
  "key10": "2sqrRKDVq9XqKTEKWX2xyybb89aszni2JgyZ4s7urnxYxbDTxzCJ9hUGmfiWCMdArgigNPb7PYkPYTfkdcLTi6jZ",
  "key11": "aSqtFzJrGtvgppNFSBzmpsj4XBSbHCSoib2tgnBMzsSSrC9Rvk2Tg5i2PS2vNXwQBrUxScgqaSK4i94PMdq2j5i",
  "key12": "4xrhoQ7aPckkaU7jP1o4v9aYaeF4YCmGEWKr22r3dQ89YDLWQAwzGD3ySwSP9Rwc7wAKifqPgj9kLAXJLFUBxRt3",
  "key13": "B8YpKJGuo2vGSKkU3HdmonwcpiuoSofm8pFFw3Jhqx2YXxxFYWSeWBigQrc7tLyb8MCGrsSojP2fZbtPV6jpBWt",
  "key14": "2psyWYm2E6NjTqyFE7j9S1V1wtYVJ1PrNVJRUYVNPxBi7ACDhRMjc1eYJ8RGBwCKEHnATFHiQXcYHvvdghdmYbfg",
  "key15": "E2aL6Rjwjj8PzHVUS9AYTZgd3k1cSS3iwQP95Ccr9nnkCinUwimsx9kNmMcBvg7dCc1WAAkXh2cpbm5BK9juEPn",
  "key16": "4JVpyRBZaHkJJ3SSuDaq5hf7WNJ1vtMNtZd7pXeVYmrLbMH7hzDxSmCKb6hczmgcWn1kqUTDnYvEC3UrhgRNLzrC",
  "key17": "5FbmhpfjzQubyvh2e24LH6BvCAX1bDXikUSsxW3S8aVoQdEqWyAm8ym4eaapuUzTNbD1vMB2coB8j8qPNV73v7hD",
  "key18": "4xQtSBExtJVZ4b6C89aSvLyP46VZv6GB4RhY6ZwhrQ25Tody5N2Uoe4tva1ZyGoMjVtyt9Sb99RNa1Hcp8UZnnU8",
  "key19": "41svTZigVdbynrrX32nyvBPGpz5nLHu5cQ28Gt5ywxn7Mks2r8xrZPAWnHvJKc2AihHrtPw1uEq4pBTVeKuQyefy",
  "key20": "3uprtk5AUyfqnane3vggJYNTtQ1ff2FCNANTh2AjYBRHX2t46LyUMEzp9gTFCafwy4T8SJ6w2LcH2EdjQSR7rU4K",
  "key21": "3gUYm9chcmt9zP1iuWJWzTB3nCU9tVXpn1bUQS8S1NJgpA6sgnEDWTF4SghtfDHhSfnF4ATPtgMPhKTU8ALwYJUq",
  "key22": "5pH77uSGdwedwYnPLuLrrPNhmo9LXeyKCmyyaDcJZmXUkTXJP9DeD2ChumprP1BMuns8f6kbcw9EMSaYKgToPZdG",
  "key23": "5X36wiZ8AbUQHeVbYVV2JTDeEctWvW8cEq1YFZQc8M6QtGMzuSxuaGpWdvQvsx6GmX9LG3K8oYtww8S1W8YnEYHV",
  "key24": "4MMoEeiKS6hVicjV83hYx9vPWShjCiNdJ4xZY4UZNuVk8r6bPptJpsuuGZjwA3PbPYPhpruyJU79z34ML3fLNipo",
  "key25": "1bDRWkMq369TXTB4iSRseHPje9FMKrFbftHtGpjCBaBdC5MVNQeE4F7maHXaonJGuZZSKuWQYpt9N7kNfiCpA4s",
  "key26": "5na3GGEgVLdF21LvhFhXUeBjmL5Uwwh7C2DE9BSzaAoPdrMqfDCGfPgXuMmWYDkj6vvChYKzDddVwB86wy7DUYa6",
  "key27": "tVqH7nctkYpma3vGytAEsAHWLFQxSYcBjbrHrSa3mUNNnzH5hfEiwAHj67vuJovsXPpgkWGivpSrtuxyDhcCGjX",
  "key28": "3CyFaPVVJcsyQAYEPNxdC6qAiJh4CxVKLSLsC9BTCyRLujBpzMgttokBDgoZbkXvBjm51uCEti59QFopMz1VhLKb",
  "key29": "aEgpwgHMyoxbvXVrcvBENPE957SNSb9L8BJQrz5f3u6Ntd2zXKqs6Hqn8XMuaaKoJ9tPRNcgtDP2RSA1rfTo2CD",
  "key30": "66RfXABXoCFS4jL34wizp7dZCmxieJ1Pi4g5R4y9fxqASzmWr9Rtio8kAZ3omhQUMvazacPx7sERGsdNofHKRN9A",
  "key31": "2ZUcRT7urfurrmbBwcWJ4UEDJMWgd6vU1fjmmbdsLDAjo2HySgbKi5JzC3XJvB1g5rfCLab2FxXGb77Mi7n5YyN3",
  "key32": "5Z8TDK69Hku2dtPgjmk1cxfrSJ5XvaHwMYQHac47C8mNz5LJ5tWxx7wnEjBTynarGLWB4w1ExktiUkLHK85LApq9",
  "key33": "5Kc1dDgW5FdaUvTFmrnEgMMNqaG3yWxcVgFN6G6XDsrtQd1hEECTCmrnuFoy11CwXH2oxsgRtgMTosJyZodK4usk",
  "key34": "5skJdtJWEiurF3beZLg3xfKRja8FjjCgSq6FPuuL3QXPdQ9GzPwhH8no82BoRAkKDhbuxYZ3vqhYBvKDogvKa317",
  "key35": "2HZZ3SAof21zuWQEDc3cVUpChMkFgnuh5G13usZBkfpgs5f3J4icBpYsrQjh3VnsLq2mzkQFrFPGHa199CpumkFQ",
  "key36": "2rUevgaQ44AvJpSh8V3hAtPb9fEB5XoENhr339nzrZX3EZjh4jgdqtUrqvzxGuZD3QvgM4BKtivRA2Zqj7WuHMst",
  "key37": "61BBHpX8XwtmFt2R5jBgwqkotWMXKj7e5k3QeorUdpF3Ti9V1Kd9e2UKdfByYLZtXvSCzefivLrMVqYxNhWMTQ3",
  "key38": "2oLsYUkQchYQBwBNc1XjsoiXYF5HVB8zL7QmEVt6idXxSXiYtUPU7XhTET16Vm1sitjYnAymUERfM29GN8vvgA12",
  "key39": "5ehmuKfmJWLqWSBwvdsTZh9hE3QTcp47UeF8a91RcLLXNEUAGXGXiQGEYZYgdSuitrEjUpFjVrWCb1PQLQX62KEq",
  "key40": "gvJcsuJLrWvBDaFcWbQxVS2zyXVG5g7A3i4M1o4tXcdH3M1yfNdprudgzhzze8mRkyY9p6dTw7GGyT3UCVvb6Bv",
  "key41": "2z35acXgHUkVh5SsuesDdi5LhVGVNhDRgH5vHdwqP1GjSN3fCnDdvZ6cBQRdDdTi7BTabFnmHYjtS4paNQhnEo84",
  "key42": "2RsJk6g9vn7NFgBS5Y8knHSe596UW2yLPx3fEzG7KV4XGWTfM7wxTQshN6HV6c4RZuYqKz13fnkAduWYN9xnz15A",
  "key43": "PmPMsVSnxZZJ3bdgBtXkvvHG4nXFcpPFXm3GYw2SgKbqAuLNz6jCtrZ3uAzfTeUwMRbS45xa88hWKqjoFsTyZtb",
  "key44": "9B5DZnnZAHao2bkeCKvia5YYBP8oxBLWeJLxhgf3G4VKpqPYsQcUym3BfdLQ5LMqXvCW9FWFXLTy4TQkP64gvaK",
  "key45": "e8yRuQUJNpR5tZxt9ksqVWZ8wdY97S1Ap56NsfPunHJCpVM9e8fBFX2NJF8zw8z321GEugwUaAarDiDagDGHk7E",
  "key46": "2aiFJkbhMQYuUii2xVVr9wde4AvEBm4Vi3G1KVme4tzMtD9pU4u3zhTsSL9CsoSidu8QzBVfPsoxmMMpBE6YM8wy",
  "key47": "ff3cREoqJur3ksVcSf7599BUynvQW48141vzc4V9kHRUcUoqer1spDCmfHWYkYi2QcVp8JLw2UZoWweQCeMbhcQ",
  "key48": "39WUXck8gDhmnpuPWyn1demPNktwmSox6exyz5kecYPEZRaEBDTtXEVf9ofFYVqGKEE8CQybWMxvQFQfmX2ZDQXg",
  "key49": "4p24SZSSm8ey8KXkMM7pzokXjKpsyhQkCVwfVj7R3NmygaMXRJbSLzW7Dg1Hx1C7rbxL13vSUf8Bpcvd6aH1Hcub"
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
