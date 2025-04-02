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
    "3YT231YhJtG1Vh76Utia23fjPmnr2XdyCxtrU8qKSQGz4CNjNxNswFbChafjrLxQ3DDQnLK32uzqKfRzj4BUaKF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCGNyWtwPoqHiCi2GQt4oiK4jSo4KKTxEh62Ldvd6xw8mQCtcxWt7k5HyavQ32hkkhmjzNFVwt6o8mT965LhQy6",
  "key1": "4YNLB9MJLvRG6rhG5sqe6hCUqMarRtbuvbNNxFoSjoGhcw3geqWWAangC78wvnYfVTdM5zzg22p4EZWCqerTdSxe",
  "key2": "2Vb7Qgoef8Z2WWakE5JL6xbFycVRmYGSYpQWU6VNSiA5mDW7SpqF6op6Fs6c8Gk8R4VAY5KzELj8yPbN9aH8ryCK",
  "key3": "3hWbZBpg9eRevYCrqJyZt2bebjM7APqpn3Ljz6otpJh18z8xMBXuWb3ciJefmVQbiXxHjbSR9uc3rHvx55WMyKNe",
  "key4": "2Q41auS8RfMC9L2Pnv78od4hDcfoRjH2tc5u1AYTBLm4uo8AifcpEo9oEoSvVExj7h8okaDX94zJGhtwUi5HDC9N",
  "key5": "3adUDTNS8wd6VCKUD3AVvUhtzFo7rCNwHNvrJRYmdTi8juNUnCNQoxF1vdhrM9nQATVFhe6tTNkh7Fa9WgQcffXE",
  "key6": "3HYPwVqZ7N7KaPJTvjC28VxzXt8rCvtQex8E6eVmGscCsNc8VXx8bV8myQHUvz3ZSm2v5CdRNPxdi1xxypPHpYu5",
  "key7": "5i2uMiokg2UTnGFyi9X7B8HmzY7f3V9xWSpmru2oUGNe6web1foLnXr1qiy9Hazs7X7VgZktRzP9PsSRQyAHQpXo",
  "key8": "64e1Rx9GWeg5YTB9FWzh2uid4asHFgLnbio6sdk28pJrJvjpkbu83evzthN5qM5zkFvsrLWDH1yMibDthvcTyWJL",
  "key9": "59mhaiYJaH6T7N2nn9vkcmLqM6S18KhJsUHHXBXKk42NRSMcNpkujhvRKWKXivuEHkTW3mvcUutB4EbSV4SmmYS7",
  "key10": "4Qs6jrzXeEnn8jkWVGX6tiW8PQf3sDZaPRsLovnqKqqZmgzBzguyMdm2kBZAsTPL9VxCwokqQd7JZuUtsjLBSAmh",
  "key11": "5MEvF7yuEnadjYej7HmBGSHLLK8PQZc9MTg19CGGwDU9okUQb3CEosUT9pDj5QxXiJubGBM8cQ5Fvh3uNJCaAFSH",
  "key12": "eB2fcwo3iCXZ5vjqaobz6FHitHXG67azdjzp3pCRMn2BXVut9nqEXpXzXShwksPBZnjnc7jAwsXNubBxoTdCP41",
  "key13": "3L7ix3sU6Kb2AySFUsn2zChngFBSYJuPVnuoVKTfm2kwy2Ti3L2h87ct32xrtvbuK9PJyALmXarjvBTvaML4crr9",
  "key14": "3awPotHoQn6qRtJLvoYveCcJdz6R8ypVcFgnp58aEBTFWNLBT6fDsAwgYJ661xChf1JbDAmWKz9ECoAQ417mK9NE",
  "key15": "Atx7Gozyhbr4KbtMqggb2cQZcx4iDcVYxPwayrFbkcS1a5dtxbFLudNafFiMcYEn8YBdGC4xjnEarVndypjjSx6",
  "key16": "5p3nrgpijtsdq9pKBLME7kPf15p9JV3AqL5GMUbpRTEzfu1PDPs6HniUPVx8ezsVdA8McvQyopd1wKqTPRDGtZmg",
  "key17": "2voCb8nm73FNtxUCbUo5Uz7gv2DoCdWv9wnuyeC9dACcjv21ZhJkYjfJ4DYTx4Y7Kutg8goVHziMWJyXhjH1UsS9",
  "key18": "CDBQDVxuVw4ocW2yUys6sQq2De2x7PaaETQwByKhqWSwApRQLboXj7h1g6LUaD3zG334KtfpNAbPEKc97yhLgdZ",
  "key19": "2gvXa8MaQkvapSkUPhBCf3rg1WLqhnKQ4y1R2Ca4xNrMDFfJzKVXV9hbjtbugP1ZpL1KgGVhNcc7pJ1KRPbuC5YS",
  "key20": "5UTta6wnm5QZi2U62Dz38L7K7F99U5kYucSfG28wiE73cD6UV4GrJsqfgic4duYgYT2SczT4E65SMoURVMYqLfzh",
  "key21": "48u2gCN37AHwb51TiCt5fJqzhFBjLyNQNJwk3DZCzq8u8L2pjtG1GREYASWuwvQfK3Vf78Eqa8iZ9oQ6V636WVQ5",
  "key22": "GNxcnsvcw1EHrDfpyU3sDdryWGGDHvrtrUSkUgWbHqbT6y9MCMxojy9QMehuWFWy9bkkZcDYWuknbzrmC1efNRa",
  "key23": "2tDe5AL94sCfNr2XE6H6Hac2Z1afDLK2mFxtX1uE14CpegaosE2eH3FTFRtEuMe7pU267djw26BSXEEt5dqzE7nx",
  "key24": "27zRYHA2tAUXUusUwECBVQxuKidmDZcKXMqWNF2zkj97bYRwDay5eFw6KGVXbVNjTvUpC2xyiyRGz1yiDhnNPZCB",
  "key25": "4HUDn5Mt1W9tFBzMhjHDCkmQG5VnkYfPfbFTfS2zoKd1H44EkGDoL4iwkWHRubZV9JFU3Ku2qYMwt4sb2FxHFDcS",
  "key26": "AQwkwCmYHStif9mWQXFWPCvivKqhwWaUGTAEaeXgRtcH1P3vTiLGGK3Qe8E8MHe3xKXJPwHUZvV1W3qMgUirFcr",
  "key27": "4KsCyfc1UyE4R5TH6coTYN1LjN4WCVNMYwye5CmDtTqVByxCBtAD9DSdaHaj6YLDqoKThmSUULjgr3WXKVLae1V9",
  "key28": "3Hv4azGR7UwDNC1rT7iZGgPbz7U9UZHv34nHBnZw9CsdEApmv9aW59UKauq5CZ2Y3Mu1g6UFKjrPxUe923E5T8s4",
  "key29": "45A51YEqcpdvYvfDfRPWR1iaHhwn8WNXL9HZWNgdnZ8XtWc6VK4dZd91skyZYSVf9sRbcDfvAAvLsghgTFuWEZez",
  "key30": "2Pgq7bfqMJa2HMqnmir9g5gS5cCvFPukumSRgbhfG6E3MwHzPs6F3HQVPwEV2voeZ4rCgxXRVdgYX8z9rEYT2WPE",
  "key31": "5fdPNdfG4aX6E86PbvZx7p39Vk6V64AdZkR7N3GbqUkBh28D2ehzrHHEmdT7WoB5ffmMTFTAHSDZdtHfeCGRvnqg",
  "key32": "4scPGNvxHxTJcrLyGjgUNvLi4ryjjruVrT59pJHrCtqJm1HMymhJrhu43qbHEYja5sYNFJTmqYELyM3Y7itgecq2",
  "key33": "5Z3uHfie4vQyTRBUuVizj4VcfpTjdQR1KeP2gt9DkUav7m2KG7VQJ2bYNCGKjM8PLhMijFNm5huQ2MCwMGKsbGeb"
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
