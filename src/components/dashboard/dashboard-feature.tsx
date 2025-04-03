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
    "kzrL6bqf6wYMpjCjE9Wtrg54EtuU97eJ4XCtepiVivjzUY2zXw4krkFn2iNwyPSAmK414FYBQ4FaNXNRAh1Crmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59vWN9oRPGTKfJTgrKtMsw86i8BsfzNNytkTV578cLDvzbTzv5aTQC8qcBZxoHYuSeYiE6nP3nXFSTAEAwvFjGfB",
  "key1": "4mYkzUgfD15RjoUgDfsK9xw3AoVVj7nKbyXhGAMN1whTedqazKK751kqFjF8LF8WMo2XjtfCBpgCPZss6e74TPge",
  "key2": "5eyx9LCpW8brX7mVqDBEn6QjEb3DpTSRM5SsJ5GWyXum7BKwbsv1qbeeoLwTXxG3v2237NGp2Kes1fDFcaJHWoN8",
  "key3": "2Z9KQKotQDzpsUqos1dzmVryyGePYewSshWCxG1Fg29nZZmgcWZUwUoDQHCT9ZHCoa73iXr7wGJsRuW1CNK47Wu9",
  "key4": "5PS4e4uUQ2nu59tbE4U5MMbeu6shBEYhYCSAE4baXbJedNzXbLHZBdqLhmhahbqBbxkJhz1bUkm4KHGWVuk94Ja1",
  "key5": "3poZjVAtWUrGpTYug2sdyPE6hcX3RHkdfXoq91xFP5H2SeYCTpW87Yfr6Uhuvi6gt8pGWxnRCh7N8dbtwK3xjR5E",
  "key6": "2p1bLzBCFExPWhvVbsKpmjBmGPCRrV3px9k5YjxtpxEcVKbtPFxnmjqcK51prhjrGgWekCLcpixb1xRr9GsDiLrB",
  "key7": "4Z1VXjqift7tc24xyYPBniRev2kt5YJ7QiYzeyP8a8wAp2dtCLdyLyBL6bRuSK1sSaSAdXfdC7sKZqspCVaKrjLm",
  "key8": "2Xh6WyhdgaHikQr8UpNeALDbvJwgzB4wLpy87nxkdnA94a1iMPKQ4H5An1jA3R7dE9jZkFD4BKRgY3cbcNZVKdr3",
  "key9": "2vzppcLoXgPUVPYeBix9cYeiNccvULyXJDaVYfYVrFWwSMQ6ejKUEPp15FQ2pCfJXdD8UW3yEm59QKvVcQ5s7GNJ",
  "key10": "uvoNY98jBfekPfJQJS9ys5GL7ULADz8ZLiAW7kwzEY2zMDekbheMq87uJHTyfUQKK8Ti4TVD96RAkKskn3MUMrk",
  "key11": "4ujyE2J5mm8uTk8zonFydrXHYsheYXcKCWsk29J5nE27VntcYrzf5Wz5AsfkAhf1DfUrKUCTVN6DENaqNdM2N8t8",
  "key12": "2zK3f7n2r2sRHNhyeNewrCU3ecf4enrT819pFjNJKA4naM8BinwHWhsuyvYbsCqqa6LYz4oFHP8wBp2oXf8PSp6",
  "key13": "3AZ2pCJ4gWAEqXTceonAagam9RS3A14BC8GBj9gpY2zDLbysBzNnWMQA6c3a5HHQRnr2XP9WED9zFWrvo9Zd7ABx",
  "key14": "3Rb5wmEpqz3bqSGmq8D3Ubh8hxEhocfsTvGrRtKLsYyN3hVAcmXDiuzPefotJzXLm8jW2E9wheCyrfRmZ7Jd5Vce",
  "key15": "2mkhsMFZmoBDpU3iCRcphmQybYUswxMWRs7JqRAo56j11GNjtBysf5wiaweRpAeryY63Ai8jiysGmasubBhcHVtE",
  "key16": "UNFFqgS9DiTQa68DP4rHsv6Hap1doGAb6STeEdtv81gm4qKj1oA1LWh79hYN5NrQP8WjzjsRGXoF3ZFpxXDjTdk",
  "key17": "2vJZSAAezdPkibryWTE6uFHkMjtqVJCuRUTkuiAiUjwzH8HoyR46SrG1EBq5pSVkPPTnsFjj2CYDREZWK8tgNQuz",
  "key18": "j2XiqMoaevNEUKU7pKaD37gH6CNQXRsvXCvfMUrbfrG9yz3LGCKpVyQbzMvqKQq332AHLpouPoqQLXf4vjvJ8Wu",
  "key19": "4jhTxGZMoeKg5UQvwaHjUudbnidDCNFM4BxSXosagd6Kh1tNqzC6ckSybyMEqgBHmTrPaJNTfz8L4AxLvh1kB4mJ",
  "key20": "49tJA7RbqkZoQkJmu7x2p6NzUZhjqrVgN9aCA5JbzpAHKWyz7y8Uhbc4NCp6XACt2AoYyNWbDeTuSqRdC6Z8YHX4",
  "key21": "39HrFkV1aWRXkqK38QfCok1ak99QSTTjANjqnMrHVbVcw9qA8BkHQY4ZN6Xgjzhf1KQNjPCcmgyXy9LSjwpk7C7E",
  "key22": "x7HFfnBq1RYv3aC9g1mukC6FDD1AFDCFM4AoR36fWe1fwRddEY5TRs9f5KmsDKNRE74dC9uAX9p7CkoxEuJpR2Z",
  "key23": "qK8ZtLR3bYKsaUge7ZkqvUsuSGzqxkZYnTSBeJf22dWwpcAkLQUZd5VbWwcNJLvxe8fQrAArXZRg2UTgE1VNt2d",
  "key24": "5YihrtjXjyQAXemcGZsqd3hxNjErg2MybNnaEMUz7W5d46EGcvvpQQuVggDMxCK6QVbjcXeKeptRUisgnyoyRLFT",
  "key25": "4hyQeUEbZFgRvpLKFvZ7rKQG1t6a4AEfDiqCjFdMvBu9bVmATZhXNUPzL6Lp6xZPhKyHymCgj3cbiqs212GknXV3",
  "key26": "58MwbUU1AxvdVZopTcUQCHUY6GFFhkMDsaPutD8ezUtkFPb3Q7vbNQTog36VqN1LmM7MMqoYXj1eDwpfEpud4Ghp",
  "key27": "3Z6snBYrQBQxiHgrznFTJKMSzCmugLWpoXgszrq5ArxHdNNsggaSMordTUXNFojA12w1jiy3riehwsAnQWuDBEqy",
  "key28": "3UxTZb6hkbvzDgdzHi7ypU2qsBgtK2TGsC74sfLFhz57oHTpV1bPwXHzHA1WQhPmkzM3U8nxGwPLFyzxhuYXLw7M",
  "key29": "3XLGWbDhjz7nMbmjjfqGLbxRzPNeYxUcHzQYPC76sPWsbhEoM2zkwg3cvX71HzhFsedyvqRF53V4KPutdzw2jZiY",
  "key30": "2zXHvtL2sFpqsZitPkVuC6ucHN6HEnEb8soZdVouHmZYocEY8xTFi3u64ahuXon8Rg11nqTfXbPcakapvhxEFET5",
  "key31": "4LtYdEdaGbhjuTaJWmvZNTaRduSEnceSDtP39amFTakBz1zGP4NbaHFeYpmhQkHChRP8VWFGMGvsNm7Na1F8D8zb",
  "key32": "49jwkQprcgn7rvNYQ1L9eibkemKLyNPNusat3XRFzd41scegWD28STfaJtWsZzn4g2vycpRfpX6hoPzoev8h8N34",
  "key33": "4mXvBkyKkbdKBacKM7xB9TayvRZgh4VSgT9CFUbsqQi2woLL3y6cDuT45KKYBYQWpqCDgLc2eEN6N41YbJcjCAeB",
  "key34": "5Fga6s6LvVELifPtgg1adUkx5n6nVJToTkd38Qy9H8SHXf6ngpiuT2WfQnsbKe97eTutnmrhYhvefHUkeJALBDFz",
  "key35": "4v7ejsQxaszhgGtkkGd8epZYgv9xSTUWQzYEMCX1Nt5Z8Hy4kP7U15pFukFVBaGbHbqUhohW2Mz1cnvQNrHzMoxC",
  "key36": "rxW5VKkFkuE8FYJMWZhARaHji9aPcafjYEFEc92CitzLQPGENMfcjwEWhYWDttJUvtJ56xLGu1gcExpws1w45fG",
  "key37": "jKS15HEQesuDDfPgfc7zh6ZaP9V662qSuWJTP41vdJKeHo9YbNrXhbDfNDPnVicPdKpWwRDUvXq7WkHYXw4siXY",
  "key38": "2DAckcrW9tkQyQgHdGwgVcbQVWRsncKBB4GTU2ZnTVYkcnoKRPXwGYZ2WgZMGU3rd7YL2fNSH2LAcB3xDAp6PNnz",
  "key39": "5NCjmriBVkJVNNtAuseiWCzmrZL9S7PTEzm4Zd1TWUqDUCsG2JMoMtFaurnutsD1zKop33xJs15aajmJq1t4E23m",
  "key40": "2NmqnqX6Ypr5tgf5KuKoWs6b2VxnWgjXf2BFvJGAKseixmT8W9VSC9uMg5CKQuvWJPCgXaWnVKAnenoRex4rVYob",
  "key41": "56LV2WXv2hY6d6QQzVtyovj3CyoCp6bc1Roqgc9WYjynaha2obRWzT8LtsUjyKtjnHjKxTipt3LgFc4g8GwPxjF9",
  "key42": "4cpnqP7uPbWm922zjpv9yvpc69gamqK2FL1GMjrPY35E68ckj2TEQR9ZEE6ZJG8Vi4VfqMyiSzoFarighpwHAygX",
  "key43": "d31PV5zrVkEH6SzHw7aGq19JsNaXBDE1qKuPeaSVVez17YPYFt2tg3mMwuoquKejfBE69NrddN3HY6J6fCyhqE6",
  "key44": "23PnUfS4tpzadLeJPb9h3eFf4WQExGFegBomNXuEF9UqbAE5nS1KCwZaa1Y3qazEHcPWRiRGFGcPM4TDqTNJVW4S",
  "key45": "37NsriNzxGWHSUBfEXbuCNc597UEqvPhfWUKfYrAe2hTzeR9ARnDCszNEkN4mBR44iSDvhoJQbvQqqxvG9W3M7hE"
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
