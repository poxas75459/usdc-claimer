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
    "4VgApFSR3SZnPwWFU9C5G613Rm7SyuvU4FxEAG1Ri4akUgiYBT2kamoSYjyD39RZe663LYhxNMrDzS9BVaZXhGL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDhxXPFvGqkYSkguVP71T62YrYcwodsiL6PmEH9yhPpXcqKHRzR3zXE1K2WJfvbcuFzAM6beMDZEGoVK5wQY5FZ",
  "key1": "3gSzcKRCohUwyPJQqkBe1t7TXp8yAj8ehUX5rb1waCPgqAt6iNpgnwSkUGLfxf3k4Vs6Qeyh5ahE9xAJJescRKJ7",
  "key2": "2iw8HMBAuLBGqyt7fbqZ4Rc3d454tpTPMcn1rVHM6Q87933pqsVKSGY58GL5W88iQBx1KfwVGam2Jq7JxoTAshhG",
  "key3": "SJsTqpmE9BgoYigdf9rUyiAsnVDauAC54qaXdnhY8j47m9uAWA5WHZkhgBCvZTu8hhZz2TNWcTHg9YqPwNoRaNb",
  "key4": "32SFdZ3F5M8yboBCYTrbLQJTkcdmEbV6BRvfdDdhdeVjegnLriQ5PvMCXbqEjK6qC6rHy4bbhd9ULYMAyHZ5vWAC",
  "key5": "5zEj9ZJMJEnhopRxgc9fRxj9YPyXwruS6Q7hoQ7uQGviVkmVCRKqXJ86dnqbN8BbAxAj92vbjdWp5Zp6HQmNQBUR",
  "key6": "PtbUdm1g8DcpsxTE989PxHyUQ91s8qi8VQxBUxoo5rLoiRPzGRiM7MoGS2qM8fpjZToGgfqEWdDwPEBiExBegPw",
  "key7": "4ykq2ADKCvSy2FUz2n2EdmUTjspSz8MB1knPLjuEQKiEBUuMrTtnBpWFgxx1J4AS1k6aNE8eN564SbWEd4wwReQ1",
  "key8": "39khTEK36MpmsRAvehowCvdTf9ukRaRsEXmg3gmjS2Vs64uG1c8scuMoEMGux54yNAdjSvzfd85wMh7tWbjcaDj5",
  "key9": "KLZZ5rW17TtoQHsMHwY6zrJcuFHPAKCwHyDT4iecR7ZqZnZpuAcdVvzF6474QiY8oeSPo9oxAgm47eRdrx7Znvc",
  "key10": "2SXqgkbMm4MkGDFsW3n7F2r9EkBuLh1nSmgQyYPRaVbdnzEE2s5B7t2EaQzn6CwAA9JFVkwE2hGWLK8UPUiAztxh",
  "key11": "QvDXoo5Ye7Cx3aUTDyoeW1ckn5yu83GSoSEFMymgfTYhCxaphrXksGbi28SVogdHZMHPWXW7VKpdXJss94UeaJS",
  "key12": "3AkKzPJgf8y2hQ5EUfmfzBXv4gHSPmsWCXrWZFX814SEEjru5KrtN3BdHksNkUdiEpXtFaqjCEGg3B97ncWPcon5",
  "key13": "5dA3YecASpEfRsray5kKfpt7NXW8tN8razJj8CrV74r1ghu4TPniMsumNfyG8EtZRMeRWvDmMmyzRrzKZ1PEqes7",
  "key14": "inWvS4CKK6BFRE8faJPq9ZZQbuvdKDfgMkwreEDYGWnEf5soWexXgdrfCCFoDToZJKoYha7vKfd241uhKsD8zAW",
  "key15": "39q1gevqyUe8iMtBXSU4rhYbrc4J8eS2dZ3XxZb2A5eHu1mq2gLjPGgyhdDotUQ6iK9ccSzFDFrw9GFEFgvKmdzw",
  "key16": "4WquoZGejKUaFvH2qskAyJR7oH2BXF26UMNLFq5jAVu24S1PTAzmohU2YpWTJgrM74hrN9wMpFUXoE7J4pRZmsUP",
  "key17": "3URfH7v5c1nFdJCxvWAHVMfUA9bCP8r3Qo3SGDywdG78kbCdcPqMm7Ps49ssdBj81BHENKmzhmT7LtRzghtTYxSn",
  "key18": "N2uochEuFY8WT22YwGJpr4DrJN63wd66Pn4Cb5t1kzWWgqPF9g4Kwk5LSw7DLd8yawAV61j6obgt65WwmWopW7Q",
  "key19": "kTwioL1frsArLxbiDqp9xGGeEDmQk3YThdLJLb54LCJo2mW8C6BFdZXrW4GtZ8Jboq4bV6o5rWmNcDgG87nF6Qp",
  "key20": "3GnhsSUzdeHMnPZF137Fq1r3Rs2cKZKTR78MbSLg3s7Kd7NQcznvknq2u4Rjn4KdxB6HdA4YFg9u4yz8UjLBhMiw",
  "key21": "5HJRQEzS295vxnqKyd6yJEYX5m43gzpAu7AgUB1HF6cvdWE3QuD2pa4QkfY4bVTbSL9KFWbR7TWFdCKAindZLTWF",
  "key22": "4YjK291fr486DH8o2UQMxfRNpWr2AZmJdDczWBHQvn8s7kp11iuck5osysxo34kwJNnYEpMdP9gMxL7HNpZEsHcQ",
  "key23": "fYZD5Wnnxuv3MXgMu7PpmYnuBjvZ13C978TEurrx3uqhSDWMsTuxsuwM2SXx4Ld7ecdxHeft6RK3uQKYw5Yhbx7",
  "key24": "XKt2H1LF6tYirTvFBpqy547tUw9hR1Mq2A3QrNqXhEPWzaU3DCTMZHW7D476LjyWYX7aHKLMJTU9DtqNLZ8N8i3",
  "key25": "3qNkB56q8CggkA67Qkko4k4mvrmpGy1veYgK8xovF8VjZd12fNniYrRV7MHVSs4abwijX79Cir2smd1cBnR9Pw9R",
  "key26": "3AXGz66LirAd2umigtHfZZF3iZwFGWi6NM2BybizC6mU3TZJjGPG1j193pcPbPyik6KDCKi6fDYWa1vDZQrAxG7f",
  "key27": "3ohAX2fEa83tSbHmdVqEMG8L26KpihgtVKtQSMX8CveUuyZcH3j91KeLQQuyGWct6Y3ZzCpMg3DrjN854fKqhE8M",
  "key28": "e2q4g3JsUUGQ5jXoeMNMCHV9Y7QNcnSwCaf1H3zWzRKizwacv5JjNQEsjy6avaUtwCc6Dt7ZjH9gDFnPWGu7GSe",
  "key29": "58DH59QE996PNa7JsMrZWTodQTZmK8yj64a3xo6do4aVH35eFY53UsXdCKpWKbpgG1xCB4qY7iYvQcVtrVheN4JW",
  "key30": "4fJGYpc4RHXAkfrRrvMPo8UjCzMQ2TXStNA4Gu8GVT81XBVfkm8wm5PE575G65cwhGD7xXMnapGRRgFNNVmyjuLK",
  "key31": "3Tzuhs4mkbDssnPBe6JWnA92zHK7cMGVSbxwDzouDWHUjN1ihDbgi3tdeWuZo3u4xvrLz8cXyNSGL7FjuHGCGgRR",
  "key32": "23onxuHvnTPJ6gbH4qw17dosFRXtMMLfMrUcM5kJQtCrvnDxR5YttgdRNg71iECYXBQ4FBC13qDEQf3x4UBPEDiU",
  "key33": "3QT1bwPm5TRkZ9hVWcWNSuzYP2Yvp5v4jF6qmgHy3Am6STh9626CGo8FXxrQwQP36tytbzBoQtLTKAXtF716ZYir",
  "key34": "t3XbSNQb5vXvEoDJJJRWe7efQmTHy4hLsA66L9yyRvujLTyk97iLQSp4AWqpvMVpCFDKGMzC6aaAgg6boAK56TE",
  "key35": "5z28HJ8SP7g8Xe8oNsoRCdgwWWL8bvbzmdhCAWBZACfxagwn8V6vXNiWTNrnHur6vzbUT8R8S1YRELbArECkp4Wp",
  "key36": "21EqHxLQxV9n8D4NzSZtU9vqKCy7cts9nqdAWKCqrLVuPJBetM4kBj1us9bX3rbtMqTJfRDJjgLRSWR23k68omuM",
  "key37": "3JNEfepB9NfovJdDLcN8r77wRVx47C3dbHUvba3DhuaNtxD5uFx65uPoMyNTwYz2yscC1LYppARwWW1SR81sDqhz",
  "key38": "39k8ehUKr3yEynnC4DnicBYr96cgvmSWFwjjWhAuBNWu42vRYhznQULB6rpNCb3EE7TRK18pzHJKPiegLbJ8xELr",
  "key39": "3ojENqkHR6Yi7YvjVZqsRfYtQW4XacsKYE6cprQ8t8N7SVo89M3EWckn6EDDAXCZDcnjzA4o6qhxqC3K1w4feVzT",
  "key40": "3xbQCoQCH3CrxPiXqXCMeBoyyt7WHbGxaUmySqUAxcmtCZzd6QUsdgXwtsBzJDzCbakPACkHyDhYpWYYK6LabfHB",
  "key41": "4dRa7hWKeFgjXX9sXtu9DxdPb4zMutdgfwjDKoEhaYAqYtmGLGAPzuLa6q54qrhfd2ih58x1gpzqMLfm7zeum8zT",
  "key42": "3qojBPok92zS7RrcuFYqoWTVzpXkyQ1KRw3bK9WASRB88NiGEUUkN8PJPXhbrPxTU3PCTZXBZHWq6Ud9L9NQy2tX",
  "key43": "5cqSrDswNQhcUZkUFJMRAj3QYt1NuyuCFsgMayNUTgbNyRc6e6n8vuhZKwxo6eic3v2XwngZ8j2HKJZBixxXn4T3",
  "key44": "2XnLzREmUVSntyeNYTK8ZgU3uNMwSKZKpLEJYcJg2nA72s2PUdPmUqZxxhPmvZGSfJVvsQ1K1otXr1BTwraaGiB5",
  "key45": "HAuNX7GYu4o3ZCz9E8UU3m3NRXfEPefyA5SbXNuoFeJLWLCvBiC54VFUJJweSqdoNjoBqMMcNuh8LpCcrTxjjDh",
  "key46": "3aoJ6p8EDhKXk535AdkSZiseNEtodd3X2VSzerXFShcAkLsEYSw31xBSFpT1aBSuJPGsjss5ekc6dZh3bE3oQiKm",
  "key47": "53YdsG9DFyBheMg3J6pdhBS84Y7yMRSJGo4FoYkEZtGRP9SE8GNadThsQ4Ditkbm58bJ2dFp3KkLd5JgLVXRUmSF"
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
