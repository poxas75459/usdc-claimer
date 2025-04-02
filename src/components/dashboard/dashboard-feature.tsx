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
    "4C9ok4KYwRqHRDWUfST9BcDxWrbuG7Wmb5FYCmUHSfrJWeCZPLzEdX5cTUrgh2dtS8ZyZpMuPsqRWTybZwJXJvhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VdSangCmW1jHNiEymgS1pYdk6Q5cyBDo4uipeRaRNScAcnEfYFXWQcUeFZ9SLzoY3jsAYNNnXc966VHqru44H5",
  "key1": "4zYJkQkX7xkhwRMjyrFaAgwkYGUeH3a7idU13oKBUgP4hAoipNVymNNaXABeWv3H63dZsGjCjMm5UUxB4EDuh6Nr",
  "key2": "VaJFQFGQiQbhkkZarGXWNiYnMASsW7AqWfaC1cF2ZLPQDdY6RgiG81t6mL6Cv25r8orGYj94PMCFyhXb359Ldqo",
  "key3": "4Y3KYage22apw9iCE6jmHiNeyx4tCkRe5FxFPUTqcgxGtv1QzK6HqVbFLA5NXTMGejGpGBu3Z4McXzmnM1Zq6kik",
  "key4": "KbYnb6kbeoc4qEHpJTrKGoSCiLFKvsiMgK1ifphDQy7QnFrQrpBFb3eZCrdGoHJLqt8wWMucwJnyqr4cgKS9BBZ",
  "key5": "2qfqZbhSy74gk5LJm34PT74C8XTw2k4HwRPPcVGoy3Koeqs2oxJ68VpQ8Kni65XrgQRziFLxEUho7iw2cRDAZXoE",
  "key6": "qdpNtPCZ785QdZb5sEG9ZkFT1DxmDyrDRnAUhz6mcuCy3b6AGaeGk4PpPcoDD4Ak7Pe5cPTPqhs5zT9WZW6Hynf",
  "key7": "47TZg3bMnht6YWVTHRnTCfcry1hCXAHCVHJwy8jscgJXVKd91M4czq6S3FSNfjFjoBgmw9ZgEnPYSDJMXiEHXUim",
  "key8": "4xmnArQRNYS57UbFwWXZH1hNtXAzpYhEXsM352ZgRGUj3VQ8bKjMQhTw9m7pVHpvCS1Dav6GsQzyVcuTsS75VNrE",
  "key9": "21zB6gdakgAQpehJV4hCHXbmAsA4qBqZGHDLmnbsPbNkQbra6tDFbHxbKGffzdmsrm1LDqqXQEDxY9VGy6K27umr",
  "key10": "2oDyQ1S3TrAQP8XvA4D7r7suJArAFWzHnap5QftMhAnv94T5qfwJtsgbrdJBegKxGZf8L86cb5UcAqUZZQRcXU6d",
  "key11": "2hSJqv8nzyPLPYXWcFpyDSs7DXR4PFYfw2E44rGQtvj5GzNyi8oUo6N68Nh3yyUUgNCs2DH3dA7XaZnpCFHxzTD5",
  "key12": "3WXyp16vJRaeBchDgC571wkJNK4oijGpHneKU7h1P4JFHgZwMokPbty73f5y9uMiG9dEgtw2PhkZEQQFpdZzB1WY",
  "key13": "24cdmJtgF8jUkCj8My5nuJQWZS4RkC82QLzyPDFYoLhUtbSVGALuAYoawbFz76n8Kmj3G3oc1vLsezQa5Y7c9Ai3",
  "key14": "4cjh4f66ECwi5eyCi3WphdPh1v99QZ3nhcB4BnnpidxHjoewpUkWP54HmpufJGkJwyC5g3J6khrMguNHU6MAfviu",
  "key15": "4ZZQkywbdYGZQR2hSnoFbAWD3NczLXJFWGA85UB3QqgfHUxX1GwaYjSa4Dbsc4NaEiF3cq1BVHU8wTtz1Hiw27bL",
  "key16": "3WR8kTVFgTb4MuoKBceabEzhhnCfCBDtkigZ6txmmEPadUUg2tCRyQYy2wq1kgoXvtkPco9wmRf3eY8hzbhximX7",
  "key17": "3kpmZBeZGfSEuvYrT3Sa297H2CErmqMAhQrUMXoF1WzEeApHBKUPtW2BrBFv2VzU3gEZmsNQydyK2WQBdVMShw2t",
  "key18": "2q9qpp1NM7S1wGY5EEHhuE3fuWvWUuqAY4AiSmSLJct8S5vv7ZxUMitao9dByLpuE9DVtr3uhX2hku45gHtKGJpF",
  "key19": "2WCAp8ivYnPE7NFVd8AFnNk3h4wA3ump4ixxngBLFkAQH8ouRrXPWabVfxqVPyVUTC4y35GKZfUd6riQd4c2sPe7",
  "key20": "4JMFPigNbYQjWm1Sr8pjqu5ooMzvebdfwxoTBapGmw5W1j6HgDTQ8QuwAnSPtyhCEJP7jsCZxuP8rML7dEbdVLP8",
  "key21": "4HFS9dCAe7r9oKRFhR3U7xxJbJ14sAm9ZvHwRdD2WQGQ8AJG8gs2Bbr4k7y9RcLVJsa3TxxRsNMG6FV1BtKc2mi4",
  "key22": "2DPMnvYxG8KkSr7QZUPMsvYcL1hWMPJamqFSEjtN4ZQ4NQkkcHKuSMqCbJ1TcqJDf5gtEprXqno3R6EohzgoAQwA",
  "key23": "Cu2UgJtFmQamGcGJmX9pREA8D4Qk2hs6Y34MjksMcYXxthBWjeJqMnzZotrhFByA9xZjjRXta4A8UmHAjxaFZKJ",
  "key24": "3S5Mw3AiaQWu4Pfm4rtwFGi6pgaXJZ4iN6pf116jCTUVTqDc1sNr4xUaQLtCs33AKUsyoFKYjtqJpuYCvNXArmQp",
  "key25": "65TLbtfE8SqzW2znnWHX4fhHCrrcBjFXtdUfVump9qMYLzXJ4LTxWLdfoeqCiUxRzfCNzmd2VYMQ9qAN573JeS8T",
  "key26": "67p3FgjvrVZykVzdQJY8sKcia9NVuGEeisWA7PTZQeaS3j9iDzMTmHEGnpDN2NMvEmMAsUknLNrVWp4RPXCdP5BT",
  "key27": "GREzVGiM9Y17soEtwDnViu6unhnH2DkFboKD4rtyuhJTYV9B6pNCz7dWDKqwrDJdvE2EjkAdA7Hq4S1T1tCh5WU",
  "key28": "ESmFHycuJMCtpkgxo56rfGUKmSt7F3KnkDDn3xA8tGBYqWbcfHrbDzETnBsUPrQyy9ux4GzsLQhC6dZ35TFwKYT",
  "key29": "2ECdZhbUwwHU1MgMKoNySXeJa7ttaAzqm71FHDACDRZoQddDCoixhkDLPGsvDXRSznvM4nK8LYygNHxxi8w8Pwnk",
  "key30": "4bLguA2QxXo5sdTAHnj62GboGuRCZe9E6ZcXTJoLYndVSbuDFzGAc1uPNXLUFFEiFsYi6FHEhVWvGXJg9yzzCK3J",
  "key31": "4zwPmyX5MtStYVBH171GnHgRHbSCipcDn56TyjFaemr4i9JGR7Rp9WKN5gyJ8AKoD5N7rcd9TcuVtne31rrXfhma",
  "key32": "2cEbZ31ZZgkcfq13faTAEBbC6UVfvyuQA9CqhSssW3TQrHpuSEEqcpYtsJRCm8CUMxuY7vApC4qx1mHNNf4AYeXq",
  "key33": "2xj78mke4kc8FFXBTQtXFgNcyL1tzgHgLpi8XcJ34ZGi5oGXsQ6vZBixJJKLWpoSdWZZoMzUTL3LW13aNafyf4ng",
  "key34": "3eRCJqm3Av2Yvy4tCuvKKsGjVybz7UwMymX7hyFdmqZtBk7EL3F1ewhXELnWitk7LNjXJRq1od1wgCyJPtrxPC8U",
  "key35": "5QE28ovcshKFZJVFfej4QheSxXbcketibw4RrSJDsTkp5hmeVekfCKdPmVjLTM7TKDAVK5jzjjk1NrrN9rrzFhGV",
  "key36": "2a4ePj7saVLnPfcVy72h93QmnJtPTSS1xq8FvWrMxAccxD2xAbtkS8nKZ5xQSfMghpRwXc2chnRKLGhTnkyUGjmE",
  "key37": "4iiHUWWeE5jcUwrVkkAAD4VXw5ZdVAGttXFzWgzRmbaaFKntV9BPKSEDD2tWTXkvZtnJGaSfZ9sZ8ivbXs2tWe7k",
  "key38": "5tgj3xeFhBdzuAFD1xmVBQMqCsBfkYJiRjBSjNE3j7khEi5EeqMQngaTam2dFJtdHWGKpEw441cRnv8ZytJ8gPb9",
  "key39": "twwRk9E4vP2LVL8Z1Pk335SK8x4dCUDjV398pNGS4nxXrfyM8WYXUCX8KV3Kpq7xAu6mCHspHmoEnYpevSFRY7Q",
  "key40": "58YybfS3GwryRwJ5B32Vx3jri8fYzfrbAUAC2eLxCLBLDVVhkAxQ3qo88wcxHqxyBm26rk4wd9n4oN3adyaY3Vwi",
  "key41": "49zNU1N3XqTGzeoYKKte5JZHx2XQA6WQ6FW9U5SPpawnkWWLvkYWkVrkRLBjBCEJe1Qy3jN826wzPc3fne1J5Tzj",
  "key42": "pbhk5DspH8gK99nGqty3fk4GUHkr4ek3H39CELnLH5PrsQwKWgSnCwLJsetm4WnKswrCqbC7J4Ww9931gfcx63b",
  "key43": "55PkVF1KjMpxUw4XF56wTLSgt2ZRHZNxfQ9NvTghEP2f7B7ZwM7DmFZpe5RqFQfQr3YAZ6wqJU4AYPcfZYzGmCuJ",
  "key44": "38aS7UZ6gz4d3AQXdp4824pgf3UjzWfGGppjfrwTCfcUTJtkWqKY7iZjx7Uneyfn3uPb4zwUCxmkdGopbhRwKGse",
  "key45": "64KPFifoKDJ62rH81yWv3uS22NRjfowRVQCfWcRfb5gk4FG23FDncu74Vmj8xY5gtkbsrXQ3e62F3FU765Q7g87D",
  "key46": "5N2r2McV7mwif83JHSYa7wqNVQQZZWfaWAs9oUz9Gpqi12zKginpLAz2mn6eHiGbeexPqo4jv8NnYJe2RShzDwLe",
  "key47": "5hiiYBDnLtFzonP9iqAUA3ZBzaEiR1LBacjDDetxJAF4HWgG5Ley7Qkq9kPL7AqUPNkWY7yhWsncogH5tBBar5pC"
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
