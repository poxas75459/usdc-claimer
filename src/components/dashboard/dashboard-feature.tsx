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
    "4CrqsXWqti4hMaqZkUj66thAKw1x1bP2httSdcv7ahPGCXrs3dsZgMRzBDWizdw7wi29K19s9CdPCN64V11nVU4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXVmj2vmEkxroTDZwMzEubmyRBpRL8A6HcPzCBzk56JzJSe6APjiTrpXRYsEck4awQVXCEDBh2yu5pvCyE66FeB",
  "key1": "2ttuBfXByQMtX1WhXmXVSEM4Hizmhb7xgmPh5PfqqEyqXSxTREzXzQP57RcrDa118dLGtUmfMCanLaPtVSU6Qgak",
  "key2": "4Nr1S2e9JxqWSMJRRK6PnZqCGBvqu4yYCYpMp6s5z1CMsUQYhCXACx4rvCy6cmpCUqbjniFbFuHV3vDiyAMCriic",
  "key3": "5inaEN9qdtjDqCgy2bFUnXZoqCidT8gTVQNaHjFRYT5S45uKDBARmNgn38jHDZeFDsS7o5xpQ9sX5tvvsFi7rtsS",
  "key4": "3wkpTnqHK9M78oF97Qfqp78G7C538BwPESnoWkYLExoCKDMGFMMBu7NSBLnSSwtVJQrZ6riPb9Z6B9qe58T368Tf",
  "key5": "3xeC1bHi7YSyqKi2JUbqsfNpg3apxiwFUDxeCPRwtr4GrrYcxB6kU3Uhi31v7vEgFPAgY1iKvGKkt1eiJCjGvne8",
  "key6": "5JkggW9RNQfayiSxcPuRMwJnX1DQCg8Q7ds5gDxemzvtSN6rVu9UEdrXGScGvd8joABhVrcGsW2A1oEA6VmoSfg8",
  "key7": "4wbaTx4JHMNYDtwSWKoGEKyZraKEGMZ7UiF29f4jeTSy43kBGsvXgFALKMA3aRCQ5D1zp7mksn2Q5Fdn1cgsx4gc",
  "key8": "5c3gWdiEnUgkwL2gkEy34TaxCZgDezCrvTDxQNRriem2KCBVv2vfLEYN8dLk4E8hR48JqwWk6MX4TYcido3diLy3",
  "key9": "4F9cqN7f3FH3gwNfS6ngsmRLYycouqifMqcNy8kCY9RkwCiasruLxNEMS9vHMNA4pRab6HxDBHFpGGS1E3gNsbVu",
  "key10": "3bev8N1Wtv3oqmMNYtVhq3fXp5UKt9TUdZUeA7fLdXekkxYbwS5Gad7TyH5P7a4gdzdhXGTSw3QzpFxZAKrPZknE",
  "key11": "cfwaw8BkJgY42fAcUQs4RFaYAkQMYxH5LhGNtZxiMKqhhCLQZXzfEhSTMhuxGUeomjdVqDpMaohorzHNWMjP3nZ",
  "key12": "XtXwR7dLcDrqcnEZQ15oUK3ZVu2dQ1PFAjHCtG6SwC8x99jUGscp9MGLfeDBouY6WrQ194V9jzeG3yR8ibY13qL",
  "key13": "3zyCkVqHYCXroQRYp296ZdHGVDf44XacyVRow4ACVZTdpnuooSbKEgSjn6zgmUqKNghg5sntXgcyHYqR4eTSY6ok",
  "key14": "37o5Kv7bGbRZZ962pAWY7yNcgCfs7Ab924UYyBkiW64mwJtsukfgqJLCD2mj3Z8cDAXZsdVyeyQ1mhFbDy98e4op",
  "key15": "2pjanCgX4nTbHV61xCxfc2iA7q499czekH2szkNvMrtYUJos6wv86JXCd6i4KWZfEBFvzBG3gowwZT2yCfB1WzwM",
  "key16": "4qzoDn2avrkEmUfSVQEtjGyQ451wwBdyjbJX7b767HTJfxJ8tuGTLYGmgcrWBGSRCdR3FvN2H7P27dLPV7wbNkSn",
  "key17": "5wPTjbo9b59ewKrbBBcqhjBJL1cGWvNVWmEpdSJUiuvQnGXczPgx8vF2XSEX2JL1vnJnySRbNYja7xsojevJqraD",
  "key18": "8vVwNPhYa4T1bnyNKrDhRiktk2WkXCxEg1LYDpgau7rDdQMTasSYfNRCo4bY5f9F6g5SqMgPiTVM26QzDSPpZGo",
  "key19": "3HTqZvTh1zTZMWhERaTjUaSZupD5TH4XUCknKiei9GDM6pqwgLCzFr2BZr8rSxQkBSJ9eztTDYuBiLNV4q48wtA3",
  "key20": "66nmNiQePUzNPmJ2ydeAd6ZSaveKdevcXNXb4DrCpfXQt6VfL1HtLab147WfThYB2yknmaJVescwRWa6RiQLzzfZ",
  "key21": "JFUe8xLKGzhMatgaL4KcpRc8f8nbRhMY2A5aQhzcH1DRXkhB5AN5q8YRA8m6kVvhGQwd2xGrcCPNwyUyf5nRMBa",
  "key22": "LojfraQGxAUNoho7vyagAsX4bkne2hTG7XsW2Ch2vhv8jjBcfzKdFgtPX1YcxN2kjwomji3Z7qGyC7wugXcFuWR",
  "key23": "3uPo436zkkAkGnubiQbs9xeEfKsoxbsY3HdEDhJrGkdkp485xMkssjEYtifkSXEvbKR7J3sgB8cpCHLs8bxTU887",
  "key24": "2NXXsWqK4vNZKMk53AiLxTWc3SNoZFYTSyUR3md6YdwYgPKVmTJWJp3ig3eDwiLuQofBCpAPzEJx36DP2aGZhS5q",
  "key25": "5uHqee7brXDiambxhRveqHadWcbQvab3cK7CEbdy7xrNLJUX65u2e3GwiwouRWHdBzdnX5U4bXAWtfCAjwpwoeS9",
  "key26": "2P6Z3ULBjuq6UqhjipKfj3GDjPsBcr73Hb9qVn8AMsK8o4JJhubo5iDc4B7EbTdADsEvvjvmeaDLCt6HN38uF9n8",
  "key27": "4hb7FbZc77nyAnedDr9yK2gyKavBzjWZuR3Ca9vyM43qKzcxXm7pk5iJ972jt8Smp1ZGXfkd5FWhwEwM7SpKp2Wd",
  "key28": "322eTNGEcwmtpVxg7eBYTWGUnCHTaYZAg3RV2G8h91rw8SeKqdpyieeQTRmHVTNWRBCpNe6ZU4QPahj4P44o2XgV",
  "key29": "3CJ6oN3fp9FGNiUJQydV3rYCyi9aGBMuuC6FD4TSVP38s3pw8LVRj7a969EN1Mf7PsUyja1WWRb5SXSseFHy9yAp"
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
