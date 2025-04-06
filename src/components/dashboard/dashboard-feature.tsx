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
    "5dfWDcnzV9CV2ztaPdUAxG5azsr9pdTqm9KGJfVcQ3h48DEe9sxXv4FgJPcBMJ91YGx6ngNSp9wM4rwg7MFFiVb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATZi9Npq4Np3y2XqbFe59UQDiWb6LmNH3fQykUVbDW4PnZU1i8X4x7ZbCneir9JnycqiryJpmka4GeuofwtaWFG",
  "key1": "4Jp5t2nXcynReBk6hHcqeSWgyTZH187oKhg5XVjmhovfYvddLxqTn1ztqw8EdqNjnXSKjx3shpA9f88USMTiyMq1",
  "key2": "3yTLcm6VSWM6KcP1xKbNmTpERdcChxNipCJNJWgqZQqVXaLdA5d5dxiyN3J8AtHjza2E9ShQc6cMzjrRiF2UsX5i",
  "key3": "2dAxFcisF3APoYuDpDu3d95uYcBYhhctvEp5Mu9fcEto95geuGWARmmMAssweuhPbnUmsJPtDZR619RQ2jZeU8Bn",
  "key4": "rLhX5x9LPXgjHNDbrsN3UdyzHGGKDTW1fBHZ83KGMwY8Kc1ratYeUDVmVLcEnxRoXj4hWEeZkvdWFHZ5QjKTwWh",
  "key5": "KtV3oir87UcH4WZmvCXqjWYAUTCv5wswivFJxGW7wvYvafeo6RoqyCGYTet8ocsAtjeGp3Tv8agTgh7CySvBJh6",
  "key6": "4sdQZWncHAKWzh5aitWtzQ4PpVtkiLk5pw634wcgeiKpPZ6LpmHPsoU93SBY8Dmo2sPkmXZCgV4zpNLr2MQDz61G",
  "key7": "2gSESG327TkCuHzNvG3vWsrNCdroCBrbsTXyFc79j6WkLX8Hs8vmK7LNXSHsWMfhRkfBrnHxQ3DA1k2Y2d8LNNoe",
  "key8": "5sCMXrhVRK3LPjHxfev5R8o5wv2v8NYanz4Q6DvWHSGNrMjRJGgPmR1cXD5aPZhkRtSFztP7wugJxS3fqDUPRja",
  "key9": "33tHFAFG8ec1QTL5YaciJvmSQtaC46vqrJzbRQzrBb79GPmSjxGYEUfN6iLHigJxG7uoPhRBdqPCxNh5uevazykJ",
  "key10": "vtHstqVGHdnSAWuTPBr7XMvo9kRbqLZwFBUMBL3pTCUQybLAAw1pmcFVokAiwJwNLV4y5DpZ2J4Jow97mFgUp4Y",
  "key11": "5wvzxTRRiVVBrhgK7MvipKWFt1uEmLf6hgiBT3X1ohG65wHj9e4cH1DcUVgzFemd7b23AnKkW5fqbXpQhd1L2zfp",
  "key12": "4Uf2xX42bwF3qCHZv8zDvuZ6s5ddXUbVfe9ucTFN8jBKPLq72PQnGf4eassKfPcg7rbi1Ey227ULBniUqLdw7djU",
  "key13": "2PdqEskVDFBSWkWLYyVDSRcddE8zWr3cQvQ69Tm3U6zovV1LMwn59Xfc7FQJjHsUhgmQH9SN54dLxRmnJfQoKkzX",
  "key14": "5yUhpaUhScMp5Yvc749NpiYT4e7hujhfK7DrBFBGzZUo9N7YbfoBJP7ePFQLFB1a5fa6gdMnkhe5rKiMMvb95XSu",
  "key15": "21XJ9RnLTMPZn9uRhA1CHEpQSN4TiPWScDK86FA6eCGE4yg5eJh3fmd32cEY1PpMbjzSnCkh3k8imMu53iQG4Xht",
  "key16": "3Y63TsT5dS7Hq7yHUDirmLoVLf4xwrQUTUcS7uoe9W7j8xiZS1j9pdgJ6ZJWyPA4i8FBRx6jGu6QHUNkheNTsV6n",
  "key17": "449KNGW5bWGeeqduDhVdreUem39iXfjfLjKtyALr6ss8p1YB5kGZHCrBZmMe2PE1wyWZzvurJ9ibKxznynyZ7cXE",
  "key18": "4JYkRMEsEa9itdCEd3oW9FDiYgpqqAArpncwTQWARX15D4vXHiNzp25zCz51UYz71uRM9eJu9EBWq49tLe4DRCBL",
  "key19": "5iuwqyu5FyQfdvrWgGbcua1L3EMpBekEhrk8KWoYfdGJRRV7tJVcHdXzPkkWHTbEcwWA7j8CUwY1vDagf1mhxD5F",
  "key20": "2AQKorAR8p3SSYswGb9qhNMjGwsuBBR7shQ1tf4Wod9heZuHmBxwdWhXMsyJSsCQyhw7myi2YPfh1cLCRjKmFt9S",
  "key21": "62S1t1YrttpD5XxuEfdA8TzHCBdGccXL4bBhnhjeZp4fTPDUKjrcjbPGJHV2HuKZsYhotNxXGzN3HmbQwtRhfuHp",
  "key22": "31PKWj6dVKEz63r4XnnNEDGiX6hKnH6NYVkaVdfiSE6tGY7VptC4i91A3K98QWJp3bv8hFYMCme55pDZKurrKddQ",
  "key23": "p24QzxYHm6hhMdaKNtXuhsWYL2ss5vD3aJye6FB5YV7V3JXC218VgibJDfat6z2Uo3uYeq7xs6KrmSAyuv2HzCZ",
  "key24": "36adznqRDBx2bBSNVeqjDbTjuAVNCZmgxLBHjo3A7yToKkDTfzFQBXoDFVzd4yjvbazmT9muKafNQQAvMrXq5z5H",
  "key25": "8Yhpk2A7xemf1471NehmdZWjUoULFMovWNiYuU7YxSAyENSE2nMSx1mjZ1jQjmA1yokatFs2Vz3924U8n6Qs6dC",
  "key26": "wu5QLYzzcupTaLHYBvvAuDtJtkXrjibvZmBnVnJz2feJBeFXDEqBSZTSjnn2E8TMDsDvBqABdDre5LkACkAf8gm",
  "key27": "4Qgf3cAfpmqcrtpDhCvUMFbz5Hvd7TfjMxodQBMJ2s9Xh4inVzVFoyPXzJ8k3Mw13FEWDGFgoCGwXtcPT9uoN2Ek",
  "key28": "gKnLLZJ3pNt8sEw659ahtngDbyiPimcDEJMuzEsw2HMSx49y3BexuGytaaSCDgpARbR3njCTvFw673h7QU3ZDVJ",
  "key29": "3kHKdQFyucozJusTPC3vPubkouPLb77cSjXiseWLw1tpBBfYjCVpGwdJgSjRumbWBY2K9AR5wLmdNUexvK5Qyw2r",
  "key30": "4R8CGC29zbYrt1MmHmJ2ngMf5YanAi9UyS6qDJiztEGQtzrxQy1k6H81vQPCHcfwBLWYQuEF1Gn2Ut4qKcxYajo",
  "key31": "hZSGZcPob6teTXpGvwKbiDxmMbLKPzKkPcmKnGUccCGADtSXtcUj7eh6u6vPdTXSc672jhT5e6omsQtiHsxDVC3"
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
