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
    "5nXmeZVZNVaaGckLUKnVrav2oNAxLAjaev8cqYrjcUzwVx5tVE7VpA39fjCg5Zwdq1Yqi5crYD2Ynzx62oVt2LK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6d7PZJc9coBFYi9PcURUXUsiNEg8ZXT1y3R2BoUyRpV9WY9Gm22ajkRGLNgS3j8PcgL5zLuYpaK6v9YqHjaYmvx",
  "key1": "5zmJSku8n42usREbQ4mhqDVcueqskr5xV3ARyART2U4GmpCwucZh2EzyQeqvSvbgooSPif4spPQ46i21nt2UwPSY",
  "key2": "3dZpYMN4X8rU4AZ5NktmtGMeM3Edhq6SNtwoFbfC6G4RtXhJNsK8UrDzwtEW6Yrs93jBipZkqmRzfv51RZSkUju",
  "key3": "3buimR41ZcYZc21xMZRymHaR6iiDFgMTqJArJEp4SYdWy6JPAPGYUfBBJqCP1yDNeagf6BaTBQCuafDQ3RBCHT1z",
  "key4": "5g14fA3C2WR1qY7NH5epdt4Yh4bgf9uXbtzQM8BrKFh6iLQehDbPhEgK9GJ2mTj44PD7b16St6i9oeW5WN4zKUr8",
  "key5": "3CDgGmieTqNWWXE9psZ8A1G8Eb5mCw8LH2UsPoCTssU1LtZF8Qxm2ZWwR98h7Vgwsoh5HtrRC3v4mT99JARniBH4",
  "key6": "33rHaZA5tYT3XnD2y6ueBRaZMQvGBfMmTvvvBfLQcjczrXqtaBDA5PUF1VTn8sLyEJxwEatpkzHR29WYbjmptiVH",
  "key7": "31BEzN7hABFQ889vpF9GDkNXidaLE5kqoBEyGvcEfB5oC2ji4KCHWBJmYjNFwsHWUDLMJddtnLQvELDZbRdFh76X",
  "key8": "3zFuBujpbmdWFc8qy9aqybBk7X85PBhAP57nHFQHPczinQxSTpiFtHQ3dBKJvyhGBk2eMocVoY4fdEFQn3h7DBNv",
  "key9": "wJ6yYR8D1vNTJq6fA4AdPvP7ACihAGapQvBh2JFMQBYRw4QQtpe2VpyjNMCvRuRzSdgz8ZXESc6QUKS6NjjXZhC",
  "key10": "Hhgq6qY5fppeYruBTZxeXj7ysAcC2fjeK4LbQVaEbcxb4a2ic812N9zsnpjBPMHKGWYyKsCPhcQb4qu8FboRr2y",
  "key11": "2e8NC5qdw4LjC1Sd6hvvinapkc68DaT3Y4AdymLR4S6ARPuNUVpyT2D59CVa5BLrerxNPVZaiJtcYeTTpfW1vBtu",
  "key12": "4yGoWFXTiptpG7pZoAAFj2Vgb5Docs79wyKvSgEszhmNXZyBvekNTSdmTQGUDASvhakwzmLH4d4VbaWLRvBzWnqp",
  "key13": "5bUTETfAXnLVHnj2MM8sLoc4PFrvRRpN2bFX3DxqeC3nKhGsQsmUQ7jaAZZ1NVuTCbn4SzFDhVe9mX59teMSJJcF",
  "key14": "nMMxX26nWVKzyMk4c6XRdyFuEm535vro2aycDU3KJCTSBsNGhA937BuLwXqqLDZ59CmietcR49GdDCJkoSMj6Eb",
  "key15": "3nvT3twCjMxeUekXqTeQ6FxnhAxoz9qyPMdGB7U4msiAoFtxHvJm3JQmz5nb9C6fWukgfNakhqDxT6aXKjJQfDry",
  "key16": "Z75ZdwofFamqV8hWVcwPkt7ZfSQXek6JLTVEwEXXgsS3rDSxFmi3Eob1BDrkZQH8PzoRK6DX9o2YQMTxgDfuhLX",
  "key17": "5pnFjSFKxJYoKvjQwAYZEvXBWj2VdXLMBZ1YveKnoLrTsfHepov4eHEL43H7BrSTfW28y8EgzfBCLLFgLbaZf2N",
  "key18": "2y8GPJZ8kWVCy2CXNANZuPDJpSjNzNDNdiFUiiQkVSk4r9iMtsZfSRr11WjAsktdN5LnCmhk1oNKcWEVyq9Rmq89",
  "key19": "5aVsQWVn8gheuyaoKqpWSra1pVk1P3fTpJMuYbvwuQ1qxh44C1wUf1JFWakYp2rjL8GrwopptTKotB2AZ75sQCjY",
  "key20": "5i6gPhJFTRJedU9EbWWDu5APqsaCUXcrLcY18Ka9pkZamqmAFK69ZSr1kk4xxvfhTKSz36iZR59WYnyifWkEDHdP",
  "key21": "42wKRMZ8qn1wD7uGUre4m91uBfg71ES1gNs5vpCZExRRnoonYf4U6HVaWFpyM62Ux2aEJkkjiNpk8bpe7ouJNDuy",
  "key22": "5KLzfiHojJe4KxMn9Kaj1pTf8Wz3oP9JmGtfbgZbNUgo5gdQecz3Sv5NxiHq7WEBHG78bCmiwh6ue59Tb9eYVBW9",
  "key23": "4cmQUyvbXEeipbtRuiJZVn5oGcnDWS8KNywk7uCm2NuxEs3R6JzpEYGEBcTv7u8ErvYHqug3PD3cC51NSGwhpPRE",
  "key24": "59sNKv8QvxWS1WBjLbrXRVjbG5WdLHy28WiNT6zogL4P36xmzVtvsh75fNGTtmxKm6LiBFCSF2B8b4pnbq4dUoru",
  "key25": "5v9wK9geoqp2vXw2H3zfsiGF3mKqXxqaK1NdHJnuRLxCgJ1rGEpTCd5BvFwEHjnc2SZUjX41g3GGcdBetNCwhLy4",
  "key26": "2G77QhdJWuwMvpJZSHQrknf3MYYGjtkxRyaVTnKEhKKeY7nEmdW6isNAUaKHf86cSNJL21LrWWhPykqs4qL91zEw",
  "key27": "5WPPztLF4Wqiisj144KCU6daNeipRjranBuKcBkYjkcadDuNX6HRB3J861HqGt45XZa4ozrRDrXeAL6ECa1hvH2e",
  "key28": "4c4v68kvLRxv9e9ei4EMcGLsLKqrHTExDHmjDiS7D6BmsBcUo9CSvuapoUXEHP3TPimK8UD5vsw2WqdKaYZJETpa",
  "key29": "31scibc8f9ff5UPnEHMc58sBJSdcbhhQmWvyt6trMY66PzBrTu2cHcCMJYmv6xWBSnzSNGMDFmJFn6ezjpY3XPAo",
  "key30": "4FesXiKp7mKzR6cQJo1nZZ1fhA5AfrEzt4tnxnvvRhETvVsBMt6Mf5MTn78NdVNenPoRe5NB3v9oFnLyFV6qL8z",
  "key31": "4FZQJc8u1mx3fdVUsZABEhWHZ52YT9JtJSqv4qALxF5FXUi2S2y6FCWA3vfLvXGQtsALtu7bPfTH1EB6WVdf2QNK",
  "key32": "2H8JyETdhKs4BMUCXarsjShbMZKd3hxKVjWzkRWDAtnd8tTBetuSQNdcmBW2zVjXeiSWXPiDTgx3bgN2i86ocJ3e",
  "key33": "nfjeAr6hg7BFyq85iJFwjo6SFEG5Fdtrj7LpAKujkjQorrzsXJTJdEP33twi8Zcpj1pgwYRMzz1aQjT8yaNKdMn",
  "key34": "3DumoJ5uaDCb42Lp17XPkDzRRmtgtRLdJzVmvxjzZ1gecfg5rBPWW5qtBn1ZjXirGncFP5oR3aQ9f8L8coLiGyx9",
  "key35": "3zjkAuqiqvg5YMnQKtEHBcqEidTcK5q8dWjn4kpP1H7v9N2baSQcoLmTRgqLRCotzPAJMgJLGcmhgqFURsSpQG7j",
  "key36": "3KXBxZYon2LjJEygnRrnzEy1hGX4S2WfyDKp522djc6Tv2UrW672DB2FezcDubYZt23Suyj6uH2GgTeTVU9CLtRG",
  "key37": "JRmH4YQ4MXsmzXEwwVacLUfg3Fu72duG7RByzGyzyB9L9Zd3fZg4TqFh12naksL3RcCZzXdSBc5iuWSexwj9uKh",
  "key38": "3CfQLP8sfWjpteuK6YkG6xXt8T9uGtxoPvBvd8rvTEeeUbALwfegeA2NhHk7eDLe876osjF2rkYFttmmVf3FwqXA",
  "key39": "22K84AsUt41FNo1D7TSEdiSHZ9dKqTXc42xvayboJaWi2srmk6Roah836mYKf2fox1YfTtbACb5B6v9f96dEVPo7",
  "key40": "7BXNkVPjErtCojQhNrbmyvRrueie8cEgdHBKaDTz3cyE7Nx77YmLkdbfzppk5h8z9WgmyN3gRDUv965u1Ecj7gH"
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
