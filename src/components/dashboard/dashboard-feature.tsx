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
    "2NCu3LMCnYvNi7xSEkYDofEPhsoLTf4q9L7ovGqBKQK8Vuua7rAau3NSBcxVGTnyYaF5Q5aMoSvmPKKiySZztnyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UorKodMz5HYRHBQoJyxgC6KRJvVcPZBbD6Xh5JneJqzDvKRjfx1Wmj5w7aBL3u93HYYHnFQTSiA1sBHsKdRsqa8",
  "key1": "2xmq1RbFidT1Bd6Jm88ZEWC1FjudhzNHxkswS5F5by5gV5Bdvx3oE9DyuG5Awo7BxTaDrbSS9JP1bDimfGtSDZ4f",
  "key2": "4Zi3XJSP7dpGeLTXbcVHL5roARFaq3j1FQxkLpVWg56PY3zAF5XQycZJqvpf5LM9gsMpMcYsSSAAXiXVL2VAZitc",
  "key3": "3a2AG1PnPV5U7EkSeU9FzCP6SiPCojrSduwapWW5qd21UEUuT5k6Bp6LWSf57gJRMtfJMxswP7s78PBCpuYRy5mm",
  "key4": "5eoY7HpWwFBA9HgwQFKtGvyeDQXzSimMnDPzzchb88tL2RSSFChjSdxCnpydgtvAELgdhDTPGtTiPDLDCZPF2kZc",
  "key5": "59SjYHsHHCoaEFimR96ygtscjNZh3JLMLR3mAQmuCRqr3pKRXxo7VXSbD1Fzm8zUE2JDBnyVvYhCGZf1oDnZHtYZ",
  "key6": "2nF3AdEZDa3SmJecpjyAgSSiY2E8qa76iibT4tg7imhLzCgytMsxqLYd5wqS3NTJNcpX6Lrj6Ww7h8KbAQcQ3Urx",
  "key7": "4RNJafCDpwUodhHEqsP9Bw6YicS6nSM3ymc1SbDETmXjy4WBAXhSq5y7eCidKsbS4Fmw8a1ucs3KQCRmauLqRrBQ",
  "key8": "J6qm5oKidH4CdM8CYqbHhFB4wqDUJGYmNoNk6vVDj5315M89bmiXWkwcjh3eca46NvgGc589WP9KHTgNcrZre3Y",
  "key9": "SUJnjuyqdMdouHhrzrmYsQG2XhmCa3DigncfaCHuct3edVisRbsxRfjrX85VEK1wabZZWD2uBpWdZSQntpuam22",
  "key10": "3LLGBLHQpnfM9HCNmNABZWbmKwLF3mZ6Eof1D5X93XdfuTxwmypM2ePTmkVtMuejgu9MDjissaiXHoi2MG3JR7Sz",
  "key11": "ainiXM6ZUV1GwWHpnyajF5SHW19oGCiqtCq6fiQgJqhtHPSRV8GFCkALyGt6JvWmHg4YHok5LQwvacdyvKTYo19",
  "key12": "59CUSqAdqfxUU3j1v6ic5Nb754VDszhGUL5JLiXUvr7QcQ9GPrqedgCunxb1DdbzsySehTrwuRidcFG4MSLMrtK7",
  "key13": "36FfYuoshV5Q1GLG6hJijnumFrgTBk9sYGGybbzyWrGZ3dyL6KdhVZMF8M4qF22symMD894jyAJBSFSm45Q5knHm",
  "key14": "4L8S2nzPFGkBVGd2QxKnRC4v5TRogtShwT6XYUBMgFmaCnUwLAJM2NU4FzLdJjHxaps5ooenvDNGuQHsXqrV7vkW",
  "key15": "FbVX9PtPvfwwi5b7kFKRf3xktY9o1p29bVHp1T1K9FW5pTnLimKXSmm14bXWXXjqbzFyfTEyrgNL1dNdtF2hr9s",
  "key16": "4tGDvfJxgzKXxc9JgjL6paAj4U4fGkxvKNseZnKXMBvQvb5Gk2S91PTHgxzMB2f4CNUq5ecj7eCPjmKFaX2CR6Zu",
  "key17": "4uKboiP7wQmUMW53JSJJcJSDqJQBCF6hgrQVK853dDToWvMLBpdA8t9peY4eTtvTonMT26a62yZQHCF2fn3Jjcut",
  "key18": "66KTQgWwkcj83BNhR7ATgggc5dCkkkMQXEJ2ERECEDvddKUBqWLLhdHXpE3t3tyfjjyBdVSFS44dihkC8SGfii5U",
  "key19": "3HNXnDZ2BbrMALAmkKQk1K7whmMuvNS4kLuMfAjcBiJmubZu55zjEnhyJzsKgjzGzJrndtmZxW8Mv8aQ4vqqkhdY",
  "key20": "vtQATpxcjZD78nQQtVsKVPZSH6VZy6MyX5KkNxNfMjZukS9wkA6y4oR9iTk5xozPGYo3cZW5V2wLQB7oC6edyLU",
  "key21": "2m9dWreyrUbf4q7KtC6EmL6ZTPr74Y9RRqsWnF1Hj7BVmANtoqofJgJmnDwCU8PUMfULcbMbwA5Rh2QRchohn4Pq",
  "key22": "4obuKLjG4aqCAMf1j3yJMaY6agCwFdY4kfdCCLFkaSBCT22GdsZeABu1WkaS4yHk7dPJN4rjiPMHSVhSNCKz8ZM3",
  "key23": "wQHqYrPgkeszhujpVDzKs6Bxm1ruP4EEjWuZm1Sm6TGttxxFFX1NNycZPqKj5ewZTufDrQxRRx3y77zxw1SYfbC",
  "key24": "5kmBTvBcQg1q3du39gxNxNtzFJG4HwDX4Ttdx7VemwpURwNegfSsnHwUxtt3grPWde3xEz1TjVeXqLbEqu1y2kVR",
  "key25": "4H38opecoQMEoXHsLNU15SEfBB8hAwk5ynNmURTNhM56qBcRefpfuxqRgXjPoL1upRw8eQADqh9FAUhdh3guVXUN",
  "key26": "49v1KxHnm2JfVW4g55pWPAm8xfKVEAZ49VGy2VT27P837GDS18FzM9LHskqioVF4ASSCXXH9BeBH9b7ek4Pi2Hiw",
  "key27": "3QhXk7rCFcTyYn15Fe43bZzNqTEs1QcnPKWpzp1YCznryZphnKuTVZrz51HHoGgsQWhhNLR2GhVx1WT2h4pTxuoE",
  "key28": "ELA1nzYMun3zxjbhxiSM2pqzLLApbpgsxqQQfRmd4MWRVoWXiFefMhVGhrW9HpXHpBEVpW4j2rCUeMdcandypMH",
  "key29": "5tHk3QpzoVsKpo9gwMYu3xbJj1pYeLCTgHDx2oh7phVx3PFXREdGR8M6K6hdJf5ap96KRFgLiQ4F5b1qdmjCQPr6",
  "key30": "4aKja28oGo7g7LRAgrFQx5BQzRRazYHprDz4A4Pg6HMmmDkErzDjysj7PsAdYo3WsPe41hfQGJ4QpSNGMPcBXhPo",
  "key31": "2XVmp4cYhLLp9LDVq5jE7SZtzeNJ3i7WxLpkXUBqGUbTcE5jwK5e1YqoZdMtsa4EvyBqxJbGQoUpcsZKpf5JvvmB",
  "key32": "HBLRWeUzF5vrTYiNFeLu7Y5s1rNKuKgMUHs53KjUjcE6jagP6PopYwmgdba7mKkC9aGzcF9eFMAZUCyPyb56Xn3",
  "key33": "5mjvuchZsnw6W58PjoANGWqHBNhFJy8AsVMMM5D6z5xBUUw2rsqYC3aAK8M6SKzbq6jqBMdBCmboESFdLH6RPNPe",
  "key34": "44QcDacgei3sDmibQbNcr5RohhxfjRha6wUgozkVCcfxht7o6eiwVg5d5akTLFHD87vqmPKEC4wRjxhLitGK4TRT",
  "key35": "5u4bT27ion9XiAFNxerJHAYdPv5d9dp3yeVGGZfmA24dyzQyWrnL6Dv8Rwx5zM7mifbgzGrhyQjzR3vyqj5LKVJs",
  "key36": "2kHXm6ixThfqtwbNxiMNgtM8SXumgzJtUNS2HsK5ZZeGn3gWFFLxixV3R1y11z8CkCmdkCGe3LMdxHfec5gBbWDC",
  "key37": "2cGgr2tUv5bhnJ5LEKpmXU4RVsTMpgoyx4p7L8FZL7m3qjbsu2SVXBnqCZQ4bCuBaywHiBPFkf6kzLAXb88E62Yz",
  "key38": "4xEvM2yvzwAF4KkTqrar79dMCbsSo2SGrNdwoonBpovYmX6EVmtgrvGGHunCEMpHEgMybna7CRA7Z6K8pFCfrEgX",
  "key39": "5Nt4HJcqsyZZKw2e733KRWkAGEe3aBrWJMRNxXn99D5G9e8eiZHmyUrgjPyWTTcs3iK2vDR8ujwQicDUgEjSYizR",
  "key40": "4Q4rY63EW7CwgXBwoSBJ2ZjRfEGb887Q3vBk4PX3f41fcv5PyemQFBs7XJyDaqTeDzxVLhjfu7zK6tucxDv6vaxL",
  "key41": "2cCiFvN94tng4rqM9NBqfryXHsPkqRvzvMvuvPx6kZ1h9DE2xaggQydGK3UBjWeH68Y457mdsx2zH3whWvrJ6w2B",
  "key42": "5Mmm75qQ1edn9eanLQ15puoKParj4DUzfK3W1ftfUGF49urs5YdDUEsLb9bBBCxovdfNepa8zLL4tEr6fLDigkNy"
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
