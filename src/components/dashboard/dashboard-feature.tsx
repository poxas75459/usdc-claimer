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
    "4uHUF1gA8Ry493GzJf3DY7GMKXeufftwSrDM8FD3N3VaYpwJs6zzU2tKLKD3TsuL4fNukHGh5m86htEyshivumEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dLDA4fUETMH39dhCWHkjqUFdg1S7yxwBUKCF9RTUxkA9UeaCcuuxdyx5MSjRucR4JWSzfaSZT7CUH1JsVD4yMf4",
  "key1": "4wESjw4ieozJkKBS7nYZpzbkRovAtnGw64maTTEVq5UVfhD6dVAZ5XjqyqxtTS7iPY2Nn4c1W5eNudEKfwxeDESD",
  "key2": "2EL8vEDuxyLwaDQym3M8bZ8GJqh3435QG4XVYnQNUi5w2SqYgj6KDgXHCjk8kW1nDNtxADr2gaJuLuZi3wM8NscH",
  "key3": "2gkXNNxRXrBnX3JzF9eB2My3kUQvLxfU4TQXKJsXZvDLEGouSvDUUvNwzoF7zSyNHCQrA3rdmP7fEGQjeD9DtqLj",
  "key4": "5TpqThp6z6wUeowKuismjENdjmFUMANMyP9AjEjoQRq6mnPAqPjkkMZKjet6PQxhd2wzFPKmWP88yWNz2GXTwH2F",
  "key5": "2U1KFGM2FnrPn7vGnzctUB7bsDZwaNk5pr6psB2UJMeUsHVmLasGSp4FukLxdycYWum7q7NwwKCFtidut7XGY2na",
  "key6": "64KgSuxLSjtrKvbrEJ8tgbku8q4MVZyVa5WC6hbrYSxAHkcnpoH8c42RG2vQPJi957MD5iCZ3ZmBBGLxmHNGuaJs",
  "key7": "29Q2YXfdsrSWHh5pYfzLqAaiGNKxSL9kcXwi15crbRoQPqDmxgeHWKr1sLeYm1ee8ZoggMrry8CWafGFQHQaCHsK",
  "key8": "SY7akx8gEZYT6Cfe9R9k3LDiLN3zy61Meyod7Uu4h94h9kqv21LXUcCcZc4LnZz8NJMZvBrPNaBm6rXVnQm1kQU",
  "key9": "4oqWqRxs38Eu5y16JTkDtp2LZX1V2kg6PSzoFnHu9pubjNJbjjtbqUkAF6DRq89WNrBeAWCws4zuV8oVuFenT1Zy",
  "key10": "5qCXXav6vCCtdQf5up8Z23EhQXW1aW7bArLLXJSwsTwDAcftXNiaVJ6jt98aprmGY8jtnUhqut4CKzQsyz2mk7jh",
  "key11": "53uZ2ZnZAiPyCyE9uCCGX4DoUJ5r6cFmJQA7poLgLEsM9VgNGuCzhR7Vpt8qFikDgG3XXoHmrFeRyyHRCpUqhyXY",
  "key12": "5p2JgTvrLEjwBny7tZRT6YoeSFDhC4Z3EmtpHoApCekWskSn3QwCcv32KTYoUdRVcV9366wz8coN8fzgmSCFgPPm",
  "key13": "5bPqhtUSE1UpNU7DBgnTnpq2w91A2vBeZBBxPhKiEwk822ijSEGyFSjz7n3JZCsddJewA56XtMvdtbrbWcsEzRYY",
  "key14": "32YYnpE2MPaB6a9zoJhPsVLhW98a19sjUY6f6mYRJPQyMWjspv27kEGVt3AwdWCCwaiLAPHximUNt9YLdXNu8owq",
  "key15": "4YSA2g3y99HQGebz1VNgnVJXcTsajcfh4SXdj84RnXkX6zWneFkE2BqNzt5MQkTrsN39B2ukgzm9AKMP8vNW8fgv",
  "key16": "2FBAcs8831czVMdoqrfzAvMoTJKXNPewpPh5t1hfpHQi5tJXP1k3f8Ad1nwzUGeUBXhsZWuodtBtZVKzrrnUWZ6E",
  "key17": "5P5AyXMfCGDXWH2Ss2u3XpuAGy33UFgEhJ43CgmtLnfAA5v5y96HWyGm9pRRJg8TcsqWRfqGqEEXm8aZmeVxuRor",
  "key18": "LBRgaxhdj5kgs167UCSYkvqwjuR6TnBM1A2h8dUdqGJNKeG3Bk6SqEro4tEZuCw3V6FMmS7NfgVnHzVvUs3MBcM",
  "key19": "3ptrRxsqwT2kn198A8hP4wHaE23XCzkMPpeptKsMSNzckHLfG93UfHRxQYWhMJywChMfQec73U3yYpEb5Fjt71DC",
  "key20": "4Rbqjpfvnj1YUAB4TUYTPVFazSLqUWN9rvB35GnzBjf4e16N8NFu74vDfiMJpmonG5sf5BMUcsCWGA4pWpSAZJuR",
  "key21": "3wzFdcbsae4VqnsAunarXg2Yg5rqtTnRf9nSsWdxZQK9ApsyxeSgCyP2QXd9jziJCVSPpPiRDFXw7pcN4rabA538",
  "key22": "yJGwNE3jnNTDvnZ443rDZEL15Qabe3UyFhUqRYjALALX9Pr5EuPV1JjA6jr1WfgthDbbxo26vYJUVjyi7Vm4tsX",
  "key23": "3pj4xTfCeKGX85DvhqTUA54xJFHYNT1p1fWKSqc4ztxhdPToBVk8NCHZxyMbXn2pHFawp4fs2KVjPxRJnP2Tivv5",
  "key24": "4vBRovgwvrSP1Xo4dHeTw8mJyDdDQ6Q6uPoUpQ5DPqUidY66RnApTsy6xusuhiCtwRfgnzx89N3jz2wtW8c6c3KX",
  "key25": "5cwL9adbFKT31zeUsPCFLwUvC2c4Ber9bgMovkkdqzchx5bxLLpmxM6pwm33AjjmvQfkK8mZDpf5QzpWu8Sb3oEW",
  "key26": "3okvEWZyD1LdUHrB45V5dVdpcYDccH7AL3o1gZW7Ph7qsrQXuvsVd9dwVNNHh3vMNS8UCLsjGz1vo3Tek3QQKhqz",
  "key27": "2Ztf4BcwwHJg2vYc2GCwYtKtVjhFTor6cDtouKcahFMxSpcEdLKhZ9DL8ReXL5JxpybthbLeCgZnMoCvxfNQ6QGn",
  "key28": "64wt7dfnSBQeYN6ePRvLzM7M3voLke8LHo1agUjViXpjLu25qcYhxqFz9bkX1qaNBG8oqz8GTdHXuTU4cjuCxw7C",
  "key29": "3GUpnQZbpotiLA2MJkoQxW5HotJA8aUdn6QoThrQtA5SFVaLKFfMqn18yy4VJjy6jLZwPZdkcVCkSYyio4hZyHX3",
  "key30": "5wt6oRgXniX3k9utkQM5SADxux3ZvCwdVZx4XYVKNZJP7PEjwUHLwqWeLuEBrw78mNpg2CPFo8fGqbNkNjDaXZ3j",
  "key31": "5gAqHWgAYsAkVbtSjXfq3ai73DjtZadtj1RLLgE4mpvFrZhBQzBWjFsgkKcYjFs1uAFBrgnxQ5WDd4mzRihshAr",
  "key32": "28UH7MyR7agf1iD5AFPn5KbVywojWuh8X8uYUkjcPR7z7thwAcZoyRHxrL57g742RTLkjMRGn65kjfibh2oKqaEV"
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
