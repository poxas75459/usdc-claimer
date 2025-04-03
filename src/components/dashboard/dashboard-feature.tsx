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
    "2HncB41ZHVmfqpXBA57scxFZxUT1jUhVKh3Av5JVC2scKryrkRC9rTDQ3bbjQWi9iSFXYCsppeiGJVyuCX7JUjsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YgDEMFzxaf3WyEmDXjEs8suAN4cqT1X5HzV23Cz9ZFF4pvC69aKoDg3TLoRgQCSvfWPKsggfRHT8XvBk1UuHGud",
  "key1": "2wnmttnVRZyQ2ixZ4AcF1NRkgJDjGqpcGcJnFtbkzwaim5vD2DZxWKMnindZWRDJv6TzG1Z2S1JuvYCV6nWMS7EX",
  "key2": "2A5cdvvgEcNC6ULttYGfnmmLpdw3NPd8vW1pHC6HJPuHxzesoGGtiWBpT7Ly4wvPTZczi5Hu9zJeJxQUxDXvB5xh",
  "key3": "4STMYnKdnPbukbpBkAdmgmooENqCB32zH8tA5uLNadwbFtKs5puE25gspueKaceidVW8Paic5Fwkq2ZLQxtAKKfF",
  "key4": "2ZyVW9ymU2j7HRTGKsGjGVVtAV2PRtNoazTgHTFmwsCe9LpcfKb5ce6NfYFgv1z6XZufueTJXDG7E1gbwERzT9oW",
  "key5": "51sZto2QvmhtMrkUpaqM59CvP69NTfBmndSbKHrWv4XLSTCBWUu17PbDTThx8PaURnANffHfr6z27BXH8hHB5T3e",
  "key6": "g2SV7VDa5qvwKHZFGkm4XTDjmYNfpGzKWUfHWDioxhgsK75Jokn7Tb4buqTV5bqJMrckHw8AH6mmfR4Nv3rmrsN",
  "key7": "57X9vrQLHKhmFkh7sTo3no6VUG21e3siN3kWvhpqH2E1QtqiiNWtQ5YtW6dD8qx1AkikxqT1Bq6Q1hvQcWegESny",
  "key8": "291BmjFsBhTxaRMdARfGqiTayH6LLybZSho6uqj2SGMWWnvu9ZZh63H2JRJYntr1oe7CS2sEr6CVXA7Vy6NFGY7v",
  "key9": "K696457MVjYegwhpC6zvse4fG2zDbD7UYz4ffoFgAzfb6NWFTgEXtXPYaf2gb62gbRnodTZKdBCNkM7dCnJw3ep",
  "key10": "39y3SY3BraDfwfuexAPwu2crfZw1YtiLigjbeQ2nU65GQWdbGDpr3Auw6B86fHGWv9wizCPS6Zb7e3E87budmuze",
  "key11": "3s1zB4fkDzve8G5vEEAXwGa58WR87BU3QDzsctGHvippKAkQwyhX2QEqABhvLhpNUpmcRSHt3FJtvkJKrUzGaZAG",
  "key12": "3rniLB2Dh42vUX1jyaoMSh9J5Cp4MX5JhCCPb24LpswKZfoboGFszp2W15LPoyCM6PaLuXmZUKi6hkacoG9ASE4q",
  "key13": "3L3mF387AnwEMYYrxc8idSoDsUksiNkTR9N9wj8nwVCjMnVeTBnf8dfRFEv9cR5nUfExYuvxp9kGi5nVr782AtBY",
  "key14": "5uZgHaGAQpYQZEoG6ruAJkgqLxbGq1wvqepAyJzJkyEjNK2t5tcLaBN81BkPWsUYX4fGC2oaioXPgzxLKGriEuhG",
  "key15": "644h4vR3UVw6SwtDRqiR89XnCgk2MMqsrpFNCeKyqMqYef9LYh65KLRW7DP77fZ5VUMDsiaN5EJ5Y9V6mfWr9hMR",
  "key16": "22NvNg9vQHPUquFre8AT9ZFrKRqELAJXr5TtopsUrWBQfcWstfwT4298s9kAKo4gXgbsZh6mR2dwHRKPQPSzkLsG",
  "key17": "26tTJHhUkjQcNnnKFH9LQXuLaYqN3dgxLMoqUEoArPqcqj8FBCS3evqHKkdhs51deMPLr9g2ybbmVeeryEaQjd9X",
  "key18": "5hzAeF316fDK7x47L2Pf2RVfRfdXBNf1nfwLXrPqLRNdZ2WXEQ9WX6SQQEkg2JA3jHWpnkp3B2vkq7rXe4chkHUj",
  "key19": "3cUTpcwo9772GGu99fXGcnXXW1VuGtVzWkFM9EVA2xaE2VWKaZHFuSnoMDvH5Zwg1T8gNa3at647zyXTfNNSAfG9",
  "key20": "2vLttTtuc4uGtmzoAJit6FtReBSH2AjxvKXgw6JHMB3jn3ZcTMy3Z1DYcCtXzCLNXnz8Xxtm9BtfkL6hME25smCf",
  "key21": "5P7LDawBfZhdJh3B35PNS2MAbDYrQH4YSxb9Z6caPF4NndnwALc7CexHAj9xYJnkoVCQMLuiffrTojaNM2761H7s",
  "key22": "t4zY24k7EwnZp23h9eiFitLAd7nBM1VA1oEhcwsjL91ThdgpYEEWuLibqkqfWgTfWj7J8urQa4sYDwzJqJCw3xo",
  "key23": "4Bh2NGneDwV729XUZHj8CYVVsou8yRR7wAryBaExE14edxWHZ7rh7noW35nooGa29w4VvDwviRC5hqKnoWmaXY46",
  "key24": "3s2fHS2zk93u8f28QHat7bJ9XrjwiCM8uJMW5rThyiYLZYBfN3gBMCQXAhEt77cgMCAU2atXo6BLvPefuHySiGHg",
  "key25": "67o9kxMCYGnZSzVRbwdvPbM3qUBG4dX4zWmSyQqjE1LHpBQteN3Ndh6c9AfXHbX3sqNQGiyocHejJy3KB1jh7C8m",
  "key26": "5J6QYSodR2neodcRAwDLdfE7Xv6Tutx5uVY4b1n5KHwUpvH7sYDaP5hsY51dKTmu1MgScYzPyfxAKUdKiUsF2jub",
  "key27": "295ntLMK1QA1QMp9HFBhpysmDKhkAKNokaymd3tVEbjSJubJvjgb8j7yAVLXirJm9B2NYL5LWTb2Ax8a2Pa23ZQN",
  "key28": "4LVixhMsBrZyb8Zf1fUFHnrPQ5dj5WYJyrQtTahiqfe3tjjmcihfRjDoLUmUq5ikMLfG9xBNpBHgEzLSiBgzPa2F",
  "key29": "5YG3a4znJ8rr6QF62vyeM6cYwvGfvzL8MPVjz22Cf6GZ9JujpGBiG6KwjPZ7drwXL2X9ZHmED4d4pLoH83ktMwRR",
  "key30": "3kY3BS5oSkMHa1dkn13gEB79qHf36EQtRpYGSkPVaeVo32moAHxWd4fNh62fXznfj7BMzN9R2ZuHfJEkd68w97WX",
  "key31": "41Svib3FD8GFmY6PMxXfhSNn7MT34G6PzyjsSbqnwdNwL7YTRJRkZZXbqNm3F8WzhTK3kPTg18UfcF9z3btsBAQs",
  "key32": "64KuNpn43NmscFvz23D7A1n2pgC76VNbQ5ZCtnayRC9NqwtRu2PtnGY77YPBST728mc3NibKupTvPkTedb4K28d1",
  "key33": "2egrcQmychvKS2nP7odkbnSJ6VLkkq56yjwGSzNb6T5F7TzLRG7wiB4wikPeMYadUBUm2yUP3Td8W7LbSmNXYgNy",
  "key34": "55pCZgpGe6DJvGMTMNv3DUbmsBFLw3PY6tV5EBiABjnbizDn4tH1a8ThbnaMjwdhkdj7neRCzS7BVK9Ad91xPMi1",
  "key35": "4pD2HHv3T57e5wdUt1A924pyFkzvpRHwMkzDN5igKhDLPAV2nkWiK6cT2b69Q2yb1csxykRksX1wXd3ocAvofKmR",
  "key36": "312zwGsecCd7athQhzwxA23en8ipTwuCAqTyfSrsNVdXhGJg81PwjcxpGwVZNBVikURBZ3vPSXSCCCnukQpGAv68",
  "key37": "YLo24vmmMiiACyepMrKh2YGFdKNPGQX45PWsxHZEyayZ3uR7DTqAaYHpXoM83oetKwLFNeXAKci5ieZzGbAmbiH",
  "key38": "SVcUoWUPGYUgbiMDQRABLHAAtBEdEfg6NHhD14xmrMUmNtmLLXhFbQnPqAk2eLTxgs1rN86wdsk5yvvt5rHKUc2",
  "key39": "2PdMVNz9PBUuEadJv8D1p5MpQrtxJJqqnVYhfECFbvmmqCKt2qrT2t8tSZ6BmxhqLygcSx3ojGLfn12gR4wdfCQN",
  "key40": "4hvYeQgspwdJdJPp2tJcLWR51TSRM1XTw4u7wQwcCGvTbDESkkwYNzjEf7eTPaaqFHgxuC5wjRXxPYRtYUuyfHDt",
  "key41": "57q1fRA4ArS5cXc5V7JRfPHN8kiwvycnvTMsLmaynXWbKc2WhktCr8XdoxpAWjm3pm3MhQ62zQwT1T5iiVkFY1R6",
  "key42": "3R7ea5skBVxcWaf3G59Uf6UUMbtZYjPaQxQHQ4MvcwtNNrrqG2xsCX8ccoSQN6dFh6myT5nnpC4MSSnoVJv2rogk",
  "key43": "eqaBLZjkXiYNV6DQCCk4hj94WXN3Kit5XiRwaJLW9VV1r2HtLGSfkwrHA4mb4y9gUrmLT83ix6MvHA5oxKizatB",
  "key44": "dZ95RSYBdGSVnfGG8LDJSMSBrMWLGvs1wFVpvEpPptN2GwJrDF7f1u94gQHEdjLis6akf2PJEcpYEWbmVEPMhvS",
  "key45": "5sPz2DQTr7UT4sPtZKVgKS99Xvuxdx2YFcSmZv4QMFx9evE1SrmjJVxwL7sRU9cggU7GzL9DrYNAYJjXcgeWJmPd",
  "key46": "4bseSBvopRgSFYC8AbFEBjryBoaxNzcYAKwu7FunjTghMcfnSqc4m4pB2SGRYEJzrBaZwjSkEGdjpnPi86wBtHrq",
  "key47": "5VyvU4DN4bRL2vt1jtY3MdK5P7jggkaCu7KmJsSxwTghWgJzabsXPxZSGqdogafqZJpQ2h3nuif3bdsW6HWrfmu8",
  "key48": "4RgKEiUdLK3yCXqsq289i2DP6ZDWMzsZbhnfTycjx7QY2H9HX2kfrnWiNQgKKsGUCK8nd7z9rxHefYmPzqsiQbux"
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
