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
    "3SrYqaukFm911i2aHNdHCPZkeTN5ifhebnQmWbz3x56MWJ8pL9STqC3Bi13AJquMNdegkPedHtamEQNT6dn48Js6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66m1k4mLpKTDnCdVfx8nMNPtQUNRTfJtFh9WKSsAA2uQZgqLVjpoeQAZZMKW2vjedHtEfCRPh7M17reZAHZ8AXMD",
  "key1": "4kADbyQSfRu64Zvf3a2QbeU9VbQmyoYTf5id4QXLBGGopxqAzmt6TcnLKHtmJXPyUZpCp5ULLwwcjE8Qqmgi6ef2",
  "key2": "4NvSL3JZtpFN1A9YSKYKJ9CW3FdyzMFGSqqxDijy8Yt7ooJRhCACc5WuAsxmdPtbxQ9htC9FzPrbzKLJeDa37STy",
  "key3": "3xFQrCGRK9M2LWLQp7fiiLLefUEQ4KozTbEan3tBYVm7ZqaVhs2yeVbB51LP31LCcXDJ3tpALFERLWJh8WDiGxUe",
  "key4": "3yXJYCQ5X4HxFdhZu7BsxD2akroPkrh4a7QKWHqaMRvSic992WZUc6bkc7rQQFyzsWZrHw3SULjWVzwxjUV29fBb",
  "key5": "vCt7g4jaG1dbihRuc7j1VFwD3juPFQv9tYScaGLMNKyebSTJoHswQwkT8Ckv3YESHe6DqV9V7FbJoMNEvXKngub",
  "key6": "hm28b5xYQNM3eL2RnDhTY7nxzyhAXqPfmSf3MW5bmKME8JGojFMwjojoZ5YFGyMGz6bgd4hQvzjCGjvNHfJuCnf",
  "key7": "qx2hxcTnhzaZeGtR4BYktXJu7eLLmauwNwSKS1cuXCBHpGnd9Xb7HnzjN9J8mLt7MaDC5zsa7mQ45cdBaex4Yvh",
  "key8": "2gfXUGVr2MYczYzJyhhtWrzNJNgCYpxrSFRqeNBoZ9MLvcYcd9NKX2hbQN7pP4ZVPLw2jW8hvbpA3zHdz4YFJycS",
  "key9": "2C8i59Hf1LAr8ynDpuPq4Xh1ZE49cgWN4x7fuuc1iv7T12vEANgJJmhVcAAU1jroH3FDTrgpcu3Xiocw1rTKVZ1Y",
  "key10": "5zefNN46MoVpCNxYRjYNcRxzf3QXfvWXYMvvmBs7Db1YRX65PaLMt9MVjVcCXrauw1A3DRSgARQ2ujLF61FnhzbL",
  "key11": "U3269vH4i5fBAks5pdHnDGd4MfLbr33EkTouKssoevn7u2GmmN94MSpPEd1dL69XyyggavcXZp1naQqL4hZE2xo",
  "key12": "2GnpjWhwA1DYUb21jQxr78qGFoUHvjdWM1JegC29jAeWpK9pdkgR637Sux6cg1ddFDqxCJ9evZnPd1q9cYHVj2p1",
  "key13": "5RnDoag97i23QzDejCBxmaGi4JAj1hHfvyXnejcgwhXpFkNLYLdEtvB6Rk3S4F6g8AbjRPSjCKshj6rPPQFkaKJQ",
  "key14": "3YVjnzJsJ87VsmXpJVvg24Y35LLrkczqmXgm3FkY7G8gJUMyh4HVw5mfXxX3fSjKomjNpmL43wG2dYs6Qn6TTcon",
  "key15": "3BkWecn88hNiZ8j176JW2fxkZJdSnGwWf8WbrKRw1auy8EvPg6xSKpcseLFyEnBbSXqMv5Egp5pLrjRmx1ecprjJ",
  "key16": "3DhN6P75dJ5fkaRfGTuQ726Ktc7bymFtzCxPuSdyHvjvTfHD5HjjZCpCMXKvuZ3ovckiEaDunZViP9oUwPnUKgoF",
  "key17": "3VUVzi1nqS1Nfj9VyeuJ2Zxk2Aotg5fqFWSUJqxqiau8X7Y7mhGGADy7rZezEqgDpJFHofsz3LKHAm8FoYxMjEbu",
  "key18": "5WL3NzKwN8bp38A6gbhazKfQuuMVNuvhWiHFddut58iKwJ8gwLjN1wcyhXeLp5dHM1mirkXKvnCexz43mhydxukc",
  "key19": "MWusRtv8R9o86Yog4gneSca6swnLyRwqr38KKnkCbYtRE5FQ93eq3kGAcnMwXXnLPU4Voung8TaXAnNX3n36B2T",
  "key20": "35pr1wCg2GMxK46m7oz4hJW7o5FQncEYKkzdjxoncinaSyPadNZwDc5iRjVsoo31gaR7HchgqQjiDJsQfA1vYFaV",
  "key21": "5CEW2qubKb7LxH9sPf1FB8EQSGy1PB2PjMcB2wkxmDt4P8yDyUGbxdAxWNywkisxwCk4i4ZkM1npK1zuBLeYNE1S",
  "key22": "DMGa4AK3hmyStCUZPeXJTfqyHcEtsD79PhfmHtMreiEpRQgRyfi6HPGWrvCznFiqCxp2J6Kwi4uvbH1Y2hCdQ1b",
  "key23": "27j66PfJHD981LbJ3NccQhQpri9z5S6gk8JsnaR2APawwXnSGKN8aNJoeMG39NpwKzRyJqjPy5u3YCdnDerSZ47B",
  "key24": "3Z5peU4dUU1SDhhygHa16WbfTckjpjUsCqwpMiZH45LsmdqYzAcMgT7jZRmB8gwocdcCT7KywLq6gdEWgQ9mJk5A",
  "key25": "2LFJjuV5uttNgJ83p4AypsySioCYSgrjvGdTDu2maUxZzmhnYGXrWpbdXWhG32BFP2bJxZzThEmNs73KQ6npipF8",
  "key26": "4dJkrTuQqHDbJvZs8eK9G5rhJFNvjMrSoEn3RsH24AW3DARj2PXAfF9TtWyzg6ss2BC72NLi7EB9sZxcPTMhXRCk",
  "key27": "2b8w4KK7r2qpDoS8GDnVmttXe3bf28V85wyS4tuwNKu2hGNbzhb6HfSUnFaJW4B1gm1AszfMSV1tV4krV9YLjSf9",
  "key28": "3RKMBKLgsA8w6KP4jqsEBXjLPnETMFFbgRHqjBDcMyu3qR5jJ2cwDdcahzjN8Tw3q6GmzQpAP8KA6UzSeiM86QVJ",
  "key29": "2QwqEuT535THfDzcHgVctDhxFA5fSJi4H7b6kC8yrfPKmEiadqsrEDZv8yZhMJkqf4RG249ja1cUjTNAuNLz1ceX",
  "key30": "8Ey54kUkMqg3yb1LPzoDUP5XoH351TPpZ9oeFcTWmZdBqj62TCPVwpjWavw4SfMpk2SaxgGUeBTwKtfzW8b82z1",
  "key31": "5FEcriiZsaVh5yWaq6YtqcjZ4yPTSwogPgYjy3xryp6UHJFr3aFjjTVpA22DPcDRUckL4eGHjdWiGetQCAxiEfnX",
  "key32": "xcmq7R1XTUAgu2fBuFWyYzpzCean8NrC8MQkrCuz7qSxg8pa1uVqj5HDARt2Yg1oWEDqcAtY4YNkpTGGgZJ6N5L",
  "key33": "4aKpgNjyS9qeFRuFAUB8ToMt4hmQVd1GerDJqfvvNCNqCFoL7NxPNMutTm8kcmFRiFC8gccSuUP2KHragmUxi8vZ",
  "key34": "4hkqvdQr8cwLXaxP4CTUHEztnrqdiNuPyPbYKgbc22ve31Ejy9UJAJKNgE9V2YmjrrYoNvc5JP2K7HQzvmWfUxoC",
  "key35": "3uDRA6gBFqkhtGLdtDHd5jtcWNC7HsJ14r1Kt3ygG1vkuYGjhLeKgH8YgLQdYi7h9kJe7FRruivBeKivyU3AeuMq",
  "key36": "4gyBRtTyg5vTd25N86ZoPDEwH7dyRAaU8kzh8VCXc1sAaBFVMiDmnS6GPxvxe7GvALxGNcDmuQiVUxxDKPZbWxeE",
  "key37": "3UtXFHksmHc4UuNjv7MGnNpDAYURrbdXxEWPfjsJsdrboPQ3uMQ4riLxZmkiLv3cd7bMGCuLw75oQYfVn5mp1t7n",
  "key38": "2KDfg3Nu8S9SxPfLFAGLjuzDRznpEwnJ9QntF9q1mgp3dFfeAuHu2mp2s3HQk6VE4BqU84rtjCsXuKE7U5rmevEy",
  "key39": "2kpYtH7Xe1k16XvCxNeEMUCPnxxEfm8JoCtRMeVCnjXc9Aqprz5Wgu3SfZThv9g1L1xArvsRURCrP8hyqLgygVx3",
  "key40": "3jh1sZpESnHzp4aKHoFVdbkwURmmvS7LgcA2UXV75BXFBp5VFKV8PdzQBU38hw6arA2v9C5WSGM2WSs1mwxtM1MK",
  "key41": "3Eugq5GGNLcT9bnZYN1GvWwfVvxd5382VWnQBhgZzxvfkfHg8WZ26E7jpe3xMgHkKnDJtwCeuXwU8xa5agpxSxH5"
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
