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
    "51gUmE8FfSmC1vzLxa1A4sVzk3rCoZKAvHKoL3b4Gd7ZunrPW5c6H72pYNCHCrEcBRZFRov6hMus1rNSgZVFGAfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WEVhQ2GvL4Rs989tqE6SaiVvSASFpEY4xfNDroP3oRetQp88mSPqiX1n1k5VZWUNer3BZfYmuTdUaaxEVGysrVd",
  "key1": "3JCtU6ma9AfpYdUqBLDRmV3RXpiQPivKFWgwQ69WBRMRBXPX786CNH2RcXoezJmRSZyFZeEnPhYXFTKsGZBppUoz",
  "key2": "3KmX5FhQMHqQQLMmAcxH3qhzRH3FrM29ifMwpWSUwZQ4A7skqzprkEZsqcqdmd42rC1i1KnPDWMr7Pi9SstTPsuQ",
  "key3": "s8vRqtmXBEJNQHAdn2ZGNth1Y6FHoWymwoPeCBr2ydKDYrseKAmmYYPT8bNNEUpGRQejLTUERNCJTVu4k7TxvVN",
  "key4": "2Z7Xmm9mRPsXLQzGhctWFF7zW15hAyfQZQymFMsVxxhMWYMB2MnnRebVbHx1sAP6abkuZBH37YKJVLK9uih9qBVW",
  "key5": "645by41YtXSnRHYfuMaTj1YVouEpeRsCvQ4EecSELnyw239vSkeN1JagDJfPdccZNMpm9ex8aNrAJKFZ8JUUMExJ",
  "key6": "Vh4nKNmcrJSikX1ehDnvrT6Xc7Tz8YrQhgR3TTfPQtThywJHsa6NF1c5zAakwmUmqQabuZ3Wk5BejWncdDNYALi",
  "key7": "2PAMF9f3bjtUn9ffSnxNHfdywo2D2hbbod1LAqSS2epHLkqy8Eacf9GLJ2s55psXgo1ZQvEGXYiZDDDraTM5DPYk",
  "key8": "3hNhbHMQbxoxdErkUzpP61464H7UfwYKjKSqVWduMCvVTW2AsFdap2afCmp68j3HGid6eYoYDCtnKa2LogfGbKHn",
  "key9": "5jnaNP6VZxfXMwH7guiu3aAxZgNQUwdTHWJstKE8dsRoBgWTGresRQGH8ahTy5xbPbXqUgzmMuQFnRQVXcnfv8Uh",
  "key10": "5JSoPbGkg8zZ2QaLZr2fQoNhUx17HJf2tzV9FGYDvq9sT6khDQyYDmnnX5QfHywkW2Hzdh4dvGJKNpkDtfzyUzo5",
  "key11": "5A3F2coJ7wR4EEWV16afBCZ3QnqvxEPAfEGYd4Ck9saCXpJ86jwJZFtJs1EG5aSDSR4BFboZDdcCa7bLLwugH2LY",
  "key12": "5Zpxc9ZUyYZgX2DJwkyi67GczjtEsbboKPMU4nFWMpdkg6W58Bm7gZnuCej65nP48mqf8RzB68ax1T5D4yxQf7hQ",
  "key13": "JgyGYwF72hcV7RyyHekx8rqCj59BktHF4wegeJV2ADHyA2TXUDw224NmLnRxADZtkhiX6KUrVoGrC7cM7QMsxa7",
  "key14": "Nh9h7kC9mEJDn67tPSfUcuiGQ38Z1XKTWo9dqgfJdE3uBPhPaKxgRUxnj7qWPmCqBzxmLz2TVCwymYNkgWpyKhs",
  "key15": "3SESosY2h7gNM8c3usRxyF3iEY3CkZYfBML2HQR5BryKuJAP7QX4nHxEX6KrrekC5RhRKpb8Nbc16fFpEi883Zjn",
  "key16": "4CKaiAEKteHqkJYDXvEcqFMJkrqxQGcTdfakUaeCN7NfMTQupZfEBcYSpmBtBuux6eeNhiDSSmFGByA5sBfbFC2o",
  "key17": "3Xp1s9Rgx7tbxQ7wuL5XxopCdHCmd8D9ychitZMFfizoAWVHZW9YAREsYbvHzU6x7HME9YKYEC3KWW1ysnMUeyhZ",
  "key18": "4mVHTAMnentX7h2CC2Ga2sk5PqWPTRoQsCMJETZV9iuKUSaJs3pWPTEdAvvqb36QwMQ9HbmL1pU4ASLVVNrWVr29",
  "key19": "3sJEuMmhnCaDuwBtjEShuFFDYJfXG6TdyjZhD7176KYkgxxnvprW7VNwmmRHB5BaRWioSGSdMLMjyrPrGEsi6QyF",
  "key20": "2WAuJ7f9ChiyCAoxiCcfNVaDWM6wDnPDQYz96wweLoqdkLB57xV1WWQPb7195Rw5jEYgMceGhdzcpbBpG4mBTjrF",
  "key21": "3Kfv3xsj9XbjDV6w58bPsMWom9NzAcNyborU3wjvZfVVfBZYVsqMKkM1mcX2AhbstKD5iDzEAdfhpVDKMkT2p86s",
  "key22": "21Jp5CcK8PFxWA6KWrToE1Leu3zZzuH7PNtLqL6154sA1u4ZwEwuvpgtamhD37RagrxgGZ5kUNWW6aq47mkiPu8v",
  "key23": "4nZEie4QmwVCUh7SiWoHhUqy72oFtRo1jkKWbzKcq7Ycz6jJCd15RU6ZZkMTPWV1taqRPiUyWXbL9QYAGnyoQoSY",
  "key24": "5dHkdEYfPPbPjENos8DmCKu4XwMewHRvQVaYd5BVuCogmbwbmLvoodHMjKj5n6u8EpAC7Uh9g2CENHvFERjnDbtd",
  "key25": "3snscbzgPUuH6jCCEsKHQVoTZN355yunQJrqhSV7eFu5X2tPihAGZvMhZ9FQYEB9s7tmNW1G7rJs5VLUSMtqp83L",
  "key26": "2vMhRKBGe7Txfic1oEzV993XWfmJqrATF3eVcUWicQmWSdmKoHqnb2TG2WEDrtzNQfYaWxptwHoCod9ApB7hahpE",
  "key27": "3Ex1HdLtXnBCQnutCLqk73VY9wSaLKfbkjEVf25hEWLjH1S5WFwvyiqHF83V7VwugsFd8FZya5YzHAT7jNXJxxQt",
  "key28": "4YjifHGroNE49Hdun7qZnr25Sf4raMkV3nWPDjsbjvWkXjvAyqbQSVUagiWM2TejEHQXbyKV95Lp9Wsnxf7ewxnX",
  "key29": "xLsGMzb8m7WCHrGZoxFiChB8NCzN12VFdrKuAtc3zHAKx1g3ZFiLxMpcZFDJcux63vUgZXx1ds7HaPRmcAET2VM"
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
