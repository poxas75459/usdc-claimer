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
    "5msG9TtuaUrYtqnDrnEKihnh5y7KsHYy9T7DBaGuUoW3NWqcyF76vZMKa34GP6WWHH3YY2Z4ZJqYKCK8p7PpZgcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCPFXLUWtKKPw6qHY2KceRuKRy8pU6DzorHTByAr6mJz3rSDbbGw2am5LevyDZMBA9p9fNncpwoVbgocXaspz6Y",
  "key1": "MR663ABh8heLRN5C2i2r9Kti1rYh7Zau65FgUv4FvADydCDexcKGYL7j2CEKGiLtJbqk5yKBqm4TTDds91AsbGc",
  "key2": "2HNSEWuBbyaGcrVmVHiS9GgCq8CDtSNmEPa8k8Dhu45589Ry17yNyVJEh1FYyfdkGbz5YF7hc6wvV98JZm32K7yh",
  "key3": "41CxKJkSe4fsK1mCFGEJAzHfdfy4sFKETLLVNxTxq1NzDmZfTh2n5Qx4735wtmWGeYwXquwnJomCQdi1RDuyfHGd",
  "key4": "c1ZTJ1eFnc2rTR4Sw15CKfwHv9jPXFiSEkj85bEN3AMfsc1kettcwVUshki929ZUpkLfHWnzktNmKFM3UDrP3Bx",
  "key5": "kNimwK4mbGJjcBDecVtk3tSG3f3zy6y6Hgu55RqUnf76qzLUkDNMcWy5AD4fzwdnPpi8EpzWDkGuhmQA9uvWVHc",
  "key6": "2Aq2ZYJcZNrS7RK23qnmsLX5MPHzRoEajzK9siVbHWdozbwoguXcEUzUa3NWv5SRVSkLpCnmEKyvPVKWzMKVe8Lu",
  "key7": "5J6vBFQHgMVGocQbYS59rqSbtJKndFsgGNov8mpy8AmyEnJbAQj3WJ5HyAuGampaU2FfYVewu3jkPrhvXRaUf4nD",
  "key8": "4a8PxFP4ThDBMHgv8Te2rzqgivF1cRzKpk44LkXfJKPWPJdEbaEyEBTG2XK6m17hX9hgaqfGyb93rvLyYHUwVvRq",
  "key9": "5nxsz5evBQ33esMeCgXSrWQoiF5XucNsUF6YxA7erPWno3kzyNscfvoQtwwJ7LKhZ4wmURFMwX1izBpLybEGTmjk",
  "key10": "2QGnEgXct1NMAsXthgioMqW4rQRXD556VmpRvfNpebcP2iVe7Jx5ekzXLu7QoongDkr9E3FEbXajQLfRxeQHRGTN",
  "key11": "2YxTY4tCR5m9LT5qg2MVSJQhmP7gHUZfEJGCoxZv9eNWWwzMV9RwTNedPBAhstm8YkAx1pkVey83qecQY2hQBb4S",
  "key12": "2VCgPPeHnmKzeT1rHcdJsjyeX8XymNc1j1DTuU34yeSnMMSPp9ZSdbAqz7YuYto4DfCuAXsZZVg1rQL7sxrteLXE",
  "key13": "3mzJ4PFLdqkCQfFof6Vtevq3bGCV8gHnZzvnkW1dkbsE8jQ2H6bqz6aDGWjxoeavFbbLverEMSy5pNiS6Ma6xi4q",
  "key14": "3svXXKgkbuFL4vWBRHq4yWMN8oWWQk4UCNqXr4qzcpVn7oi98u1GxAth15SK7oCmyHTSG9Gf9jMfEc89foqqnFZz",
  "key15": "335vGEHNid6UrV6NZX9YMem4eXRrB8WdzhQcrc1vf8zkDZxioE2Rc1rJ5PqNTB8goYPyoLDHVh2gCoWuHUqeiUW3",
  "key16": "4WMhKWTJnCWTVcvdFKv61haRPv7eVNCVcQb5VAFKmjDK63iz2UjRPJLUB2sAztz8bv7aWLn16PnMzkwF1FHGfkwb",
  "key17": "wXeG3hNnywpmsNjGuHb4zVeAUAHDYi8zfhwrWWzJAbTXApgFfhP6XmnjbWkf8ffTzHnrFYPT6LNu8PUqp8UjBZe",
  "key18": "3rusyrQKt4UxUuPVVdGT48pPsH21n1ExmonDTMrPKRzzYwmtUgtvgEHiTrNN2o9Y6E1GDxBihyRYd2qZkpB5AUfE",
  "key19": "45bABwUQw2V4Kv3jmCKX4zk6mMymM1VtNjVATK2NzoNeBpxU9gTLpHEfVXgWKGaaYj9Po1Ne7hUxdgxGfxNYTug",
  "key20": "4dyjF1D6RD5skwRaapHEnNnGYPNFd2aBTCv1P1nRwjWvGTDxAZ1C2ee6aPZApirpYWDP3nbu15GzWg1T2Q6c8ZK7",
  "key21": "HgoRM1JWhtxnBayj5MG1tmqvvqQuy1ARWfroXA9ciZrk3qrGKfmrsNxRwTf3nLwBXJ2KU4evVWzvKUfGTHCg7yr",
  "key22": "3DamGfhNakQ63PmQMoBd6Dcy8YncjH43Qwjc2H5Y8gpyCo6y6vQaux4EophdSF4nnML5ALHhCEsW4cDBj1kz712a",
  "key23": "5c8obynjbBHWcRktgG1pygpNSkgN5ANm4LGT9fLFrhEkHEwYtKUjDuZnQd3zUUWWtEhNgh9RGyZu8q1pxxZPQWaa",
  "key24": "3VXxouorSHwvFKvzvwpjRtgKq5mGAbJoGubrjReoptDFAsJLzpuMxu6g3fYimv3cZmJZLGeg1271Y1FwLBTavzV3",
  "key25": "24d6vbErVMRmSLsFzcWg7ToRTCqrUXSZztuxdEjg7tkWuWji8pJv7h8fvCKVShh92hjbzzxpagmqjB4t58jxTtL9",
  "key26": "3AWaUtqKaVio4f73LGNbAk3BNwS1txzbXTZzDUZCPQR3GaN9FggPUraTowiHhbxQzDMR2MP2opb3FoHutfYn9GVv",
  "key27": "4rNNx75KBC4gZ9CYqSuCkHiCdnVKajkZDifXva7svm3kewaLNHAwoWHXA5eE5WBwcWhhLNrcwNVFgupkvPc8kmLD",
  "key28": "wPtFy3jE2SBXmhdHuNtMe6bsMWPxzL3Px8YCwJjtHXUsfH8gR3KnRQhCyBzFGVLLJR72XnXcZbjbWKr96pfB1wQ",
  "key29": "29zMmgqtFm6xQxSPKmPTmiLPZJ2QTcS3r3sRguVYcKjienooeKPsAf8CNiWFaiy1xu8QwKxrcjrEQ2w8vf36XKdd",
  "key30": "5k6Ca2F1F6bs8VQjzcmkxcg1T1Tt5dC7YjjNjzvKNNsWEfuprsx8ayBGwpenz2EYbme1hXXRtKD9zRbMvd1ENQU3",
  "key31": "2qcT459TnMVZRz2S7M2MrM5sTamEuoGNcoYXNvPCajJd5siroJByN2bNTRhXCLRwGEYPKczAU2s5H4TwY8gATSHw",
  "key32": "3Hq2F3mwNrB68BaDSqJicdKcgHfDi7Dx24UjBXsL78GQ2Ew1N7roho2D4EaMvBsXKPjt6jNaLXdc4b5zmeXN3WkG"
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
