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
    "U2czLpk1S1v4W4gxj6WD1c2VRW1dSCrqiwCNc5X1NXiqQdBrPkm3o6SJvMCidaKNuHeEp4D1sTtKism2HXzkU6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tAxqrTyE7WykHs4Tjics9BhvZ7q1xJr6tUHuc8KGF2vhSSHABxjBz1TiAnoMqAR2Xm4NeLra2vgG88zuEF3APfb",
  "key1": "VJF6DGHU4AFUkuVE6vvnpHv1THSawvJxXvwb1cEmT5ZM9ScJWeHk6Qfzk7GQ3w23zv9pWAYNtgb6ZpCyQqqsH8G",
  "key2": "2GbVanbPVrQt124sjfXRx1sQKQR3JQDNpW7uw2tZoy1ECCu1xcd1kHaSrNWZvxsb5PCS5GvHvAeJP4WfkKuqBRuj",
  "key3": "3kh1hxkBZG2M2rTSW386SXpVGRUa4ATjgck9RrZ2mu2i17YyXN2wMA5bat7nSMbTTyqzCUY6A9XUE9A4JdZyeZgF",
  "key4": "5fYthnCkybx6tZXMcse41mtUytRoiiTBwLiuknVTxrWf3adHAh2A7ZYMMkViPpMCEj52AigRfiubrcUPMDhYumZe",
  "key5": "3Bt2sPGBUPTJMGH2XtuW27UjYuHDfQHz8w568tSg2BNqFv8Xuezhiu4GsqnkuFcntyRV2fZCzJyEuJHzmU4B5FoP",
  "key6": "4g5HbrxxaGzZe5ATNwL2f9n1s3uvtMdYayjsCNj8SJD1kNB6EauSHd4i4TXCwU856QY5C3ky15BNz53ToayAGjLs",
  "key7": "sGAUiLCZMuKXHezeQevaoNjmxapog54moW7Hra7BzuhiirLcSHjXUQY5tMrZ4NA6Zw2B4ETYLuGidNqB4RgbiSm",
  "key8": "64dbd6aaZ6EQLoQL3q7im1Pnz4GATisv888YxiaiPMETDKHvS7yJGcBdHr2pJT9mMcwfgAJ49XpBXBDFHSusEJjB",
  "key9": "5cjBqrXCkbfjVQwmMZZPXa1YKzAfJ3apAAifWGH3NGddchYczfc9KmR4h711QLkMgSfURfz7uvn4TPxVsrMkUp3W",
  "key10": "5PbFjzqfXCLdBEMJxLudsXLrh334EAocoEGMUxuQCCpUp4P5nS3qmUhepVAQ27AE9ynvpqm3N1JAN9S7yAdHj6D9",
  "key11": "5ssaUGy74USpH1wDW5dQfP2usMS5iGfdhoXyFAbXwYAnUpZLXLnmGzXYQcSdttty3FGKag1H2BVz4ZhTzkzdsk2y",
  "key12": "3HctivUg4tR3ZdhwRusL6m1XrMLHtiVftcnzMZwBHBnA53syXK316uG3BAsG6oGRs8QsbHyvyZR6pDQjntftzR3L",
  "key13": "2YrTQf8SVrDnVVrDmuuP58tmMgPzCGvFdnEfzdjDPS35YrchijsMAKcYAmhy9VKXRxwjnH1Cj9A3WEp1AED4So6M",
  "key14": "3JjmDabJJoy2BDBJbXR9wuuz9n7rNxvSuWLVRHpk8iAqfFf9qpoto6dprbXKEpxZY1srWygVvTEMUiN9MmPe9AZ9",
  "key15": "5kNYTwtXv7NY5wpYq2dYB6Fw4KzvaF7xHXZDqpLNNt4QG59BKJrgCqsR76iAv4g5VXgS7AZnQarzhSbHA5EKq32F",
  "key16": "57p4RBPUbuub5vqhobMwsJdZpK1cTzNcjB3DrwEJNEKwruy4a3yH76aES6HNLgGSEzq7TxsXoacNzGYq4GJNDZAA",
  "key17": "WFhaFhmZF7nNYB2Ep6Qy4dTsu83qpUMn6i8KsNSzQRqNgKnUZJoXzbe9pvaWzWGcxGKqWzchPnombQumAxyTvan",
  "key18": "3t1YYGuez4RptQmkKjuoPBTcGVTSnyFCPKB8fpoW4WjJh6LzVn6GpU6pqMfqK48oqYSQRQrDifqSnVa4G1fLk5gL",
  "key19": "2w4kKeb8xCVEkfpaG4RkEBRFqoRSiHxRfRF7bZ2rWNQ99ChZiVdmjgvpBrQMdqQbgEbv13zrhnQB7ShhUizBc9zw",
  "key20": "5XBzYhmaFf9TPtGhAFhasncq7LTX8QyQUdyHKycwNJjW5GPqdBhpUcTGdMVJL8mNkZnCQqD65v7nM9MUhpA1rT9m",
  "key21": "49yQo9gA18s7iTUHEcXJ6o4985RR8apQZPBcCoNFQT7ntc8ZmRLtWSBSk6GpzRuk8Nf8YwD5ZwkCJpZfEhPnsE42",
  "key22": "45nZQU89fGy1rCix2tbGzYhFGo92PcUKWNc2Qs4Eqz5VPw9joC38uPLAE5m2ygtVjv1VeYoekKLFQKhGFPT9qcQy",
  "key23": "2GSHW1xoyPtjfvi7vJBTj3xG2hUziWuZLRtqouHs9GAojUUrCUJuevVBCXc6MvNXLGoe3XqB8zbSrwPCbXLGNtZf",
  "key24": "4c3gUAvoGe5k2sNuNgMAr9EHmKqU1o68rDd7DcA8Z5cb296VFvr6TLssuPhLeSbqFSGJ5TaTSw3Qe3qEmhdWecis",
  "key25": "2xi73KzR8MwFpeo5b5xndwg4cHhXGLA7EP3nxqq7cuc7fLsQLbGc7QRrcWyxUcggUJbi7kb2QjBgAj3Xm4BmK7V3",
  "key26": "3LUNAiZRfuHu94zRoeKUeDH486z4sMCSpai1Uz2kE91WtbdvL6MKJyoii9bMQqzTnLxXQs9MVKXYmr5Zgv98hgtA",
  "key27": "4mF9S8Y1b2pBwUBe6FZTJuubmEaadHsvKQYtiUrjeZJq5YYANcsAqf5v95FAVfx6bnU4gXQqDQYU8q71DWnXtJUm",
  "key28": "4pM4uKswodCRkUjdhkSobc8GjiSSJMxBmY3iCyHQHENrJN7kbNZGM1J24buRS6ybsSbi3tQyqx7FbTpLB2KJVR2y",
  "key29": "TQEcdtWZxXCZVN4MC8XVc4smUCWJeYnvvankLnpmgaD6HHCzq3stMQSPrPyeRND5Hbt2ZV9KTVigdjZjDq3mAjf",
  "key30": "3gT3Dc7f6niupWoZEZf59f76p5c8q2rpKHGLRg6sPmpdSbrBnafPLKWu7oHQyFKAs9LhxxjBjsZPWHgu4ezFLz87",
  "key31": "39nkYmdMtUFBi3ttdC7HZ6yi8NtBFpnTWbdN9wtnw5KMXASDFYbhDP3G3R7qdkV2CukztpCkYzYCEuEJAT8ptVmx",
  "key32": "34wqGV2gjQeDUh85ZfGtQ8hexe7Nt4ko6qYcAKo63P98yYmsP9vAXx3ftoYwBKBoSh5haUfnWbT4Y6YEUAFoGkoE",
  "key33": "53VQziMy22tQ4EsJsCJbRNi5CgXqKUAq1HvCKsp2wnoUKzieHpSoPG6a5h3iJF2EGmSJtVtuRC5enueVFERX3cK1",
  "key34": "34SydhkrHS7NkadovXeuofmzem4rn98HYWBP8rQAFNuFn3MQ6iqgxPJ7UyDan6dd37bK8ZU5wikemg1GbojftPWe",
  "key35": "4RtAB1PpyBFdZCCJZkeCmgwjkoC2ukA3uQMJzN2FbozAZ684zeQcFGBW7dCnX4piXbXjxQbRf2AWtYsg3uGWPVPq",
  "key36": "2nQtSdk7sV8MWSobDKxPkrQg9som5Gecgs4CVpKw3wXGDFwAAgF6H7nS13HMowVae6RVoHu1CaFAgnt3kQjuh4gs",
  "key37": "4E8FztXUwgN7QKdgfvqxsRLuAiLPRGEBSQGP5SWdnTH3X4UxmMA7hdQZJqvNQu7qdtqbch8GjoKQuzoKe31bNnuE"
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
