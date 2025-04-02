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
    "LVrCFDZKyWMJJMfCop6nHoU4K3PEXwtFcUT8X12mgWe7xBVnwJFyRTDjaobzaTBgPZfxVFg149ahLT66R1jzMEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cgM3TK1Yi3c6XDZpvK3j6FNepKjNAbidioFhCT55C9Ts8jWGxyz7htmaQRmA39dMSWcEwnUsWSiSEvGxrx8rEe",
  "key1": "2e6Hm4B1fEon6xPtTwQxXb24rY8zYr1Kyje3rbpGamTzkwB1L6xTGFLiRCorrQWFgzotXtxKhmPawZjvdBfV1QN2",
  "key2": "4CMGEMfHnAL1pbgEnBeubPoQSYRMa1Y5zU3JDCThFBCyAbo9WD9D5wu8uBRtU4GzV3vd1oTjDe6DPckFperkGUm5",
  "key3": "5vETJux6woU5MkKkiTcVuhP7Lw84JmemwG6mRLidbWRvwVtsYjdutGgDtfxy3ryTtLAtMW9JF52twxgvTVwuAWci",
  "key4": "2NJBFUSQasA2QcpRegmjZtfC3wQSHanqfU1qtYr4MFKHuksHGJuvWWpoaubFAdCavgabbTiGyb6AoKxuH9vkCQRw",
  "key5": "3BrduZAKgYzRuosto2z4qzdQoyWsTs46pL8ttgsWjxr1Nrs4WSNjcapurQhCEQ8trENXtkkkz3GDHd2qdHRa1toQ",
  "key6": "2iy4b6RcNorgop2zAMiMn58XM8SgF1Rna3vUV7RTNaTuKaGuJpCUyAhAa9AUNqHo1a9Jeo3sohxrw4sZiLMXfzAf",
  "key7": "9E3LUoKFfmfsiv2Cct6sHFE2EVpd5qWiTDqWUraz3ttf9kGSXLAz13B869Nh1ecq8ZMvcGdzTL5vJcK8bihMP5G",
  "key8": "64drC3DTv3k8YSrEMnqw4szrZxpYz8VXZDntHxEHyymxcNeX6479MJemVPwPkGesxMgDv4pkkSqvJWqEGzb6uVtx",
  "key9": "5KsfMty1PJM15YiZYysVY2sMLmgZ53orKmEgtWzubQerWCvaLC53ZLxi5c6Mn8WxGk4mjSSnN4BzaieXvJnFUeVd",
  "key10": "4uER8p1CiTbS9QiSX5zYbp6F9oFMX2kf3onL359nfcekZbyP7sBeYRHvoxr6fvab22qJYbncxFs3d1J4Hg64tNyr",
  "key11": "59PAkWTgiaVngnBQjKYfMJAybGhDroUKXR9oRVAd7dVMYLXjwP2EfLprPGfuR7d2n7bryXoshNxhtDYcTptcbBQA",
  "key12": "5qW67Q3SAbBzckp1kqQFWheTkvySgtaVAq1Wfre4R269iTKvMss7UV6FMvqujiGe9fbf9JoowCGsAjzjyBWLfPGi",
  "key13": "4GZseutgTzDjfRKywhDNCYppCzBDcJYY5Tb7tCz7w1ySbLsEVFtt3brPpSah2N1c7iQ981udZV6DJattY6EjZYgH",
  "key14": "3Zcy7dkwZvc6Vcydw9beXA9z4DxqVLWqQiEMXD49fESA5qmMNiv2PAih2wj57ueE3WbXxiRGoiTkEtH44n3ZcV3x",
  "key15": "5g8zForcA1SfmswQrqVUCTiSDVHj4XkjAU1Np5LriGtcxPob9jcVeQfJ4MnQntFwo4QqmEeBApFfnLAcTdU3KZTb",
  "key16": "5D5vgv8oEGskAHNFe9z2UFjRsAxmmm6ZoQ5Fzt6T7925DFw2rRRu5CTtQdruiz6ftHYepokphNukcugiwqpEFhid",
  "key17": "2E7u6KV5Up1vyVE32rAVFUJM2StachJgjcTSQmfGDjwaHizsQW7j9ZP2sjvxjYTE6g7oZwKuz7EzxvGaQSHsDQr7",
  "key18": "3ptJhjGWCAe5HhRxtmFwv3hdrbNTK92BNtuJtDP1kZkpKxz9gj3vx3LQvM4WFNqBk3zfzxkib6ei2UjG5Sb5Qt4B",
  "key19": "4N6nBuQz3xyWfrs3qT2bYUAyZHpjc7bh1ULpx2tX4nu9wTrUm5amPJCJidFrPJmWM6UkyyUhCyBGzisdXhgPtbSh",
  "key20": "52bhVPrPTfXj2rxYSPwUSK11EA3kx5pEmgKywit8uDJiCthcyE1JQ8BPpMUrKUr61zeDrx7vvfSnLd9nQYT7Dbor",
  "key21": "4LVfaGbAxKZd1Je7UJ9Sv9YP25tUTxDvVGL5D4B5x4Yx1xs1dEWQDBRUoUgcgEdrGjakGQeeia4iGbkC8rRTQfpz",
  "key22": "4AWCe8a9PFrAwDfFyQqNcY7xRrk4Y6B3nQdQ3m8BjVwKFZc22qu11xFHuGyFRN9iiZ3kZDvzaNtvcnj3bwAwVDSW",
  "key23": "3pawQsLy6fPSGMp8sYhof4wXaVPWMyboAZ6LPq17x8bRUQksb4zqWCd7EmeHUdWfvi1TmHKb9thutd5GzKApWfB9",
  "key24": "3gDMqbp86A2DiCj9jFnqTUkjM9GHGQMnz9wg9HsFNNfqnKyyS65hmNxCbAQQvKoHZN6PkjqLK58mAWRzkUwhuoTi",
  "key25": "4Ej2QzPRV9TmS6B2ys63rzuQMP9rZ3YC1MDSd3R9kVrVvD1WPDfR39Aim8bev5JiNkb4P3viQnv3rmyuFLGQNxSG",
  "key26": "2hdYs4YDt6KaUb9pDk9wUMVt87eTnUtYYKGjrgf3rV2cw3UK2gEhV6VWRdHwGtJ6dRd5uBH2YLyRkR67XRYq6ahY",
  "key27": "cA8hDsDHuddK3myXsakpyybwzodfRCReFd8sV7Zct49VSj971xsMzkghkZEzs78XWNy1fUoseRXk6HkytHTC6c6",
  "key28": "5wtZqgNvnmRTW1aMVGghmKbGmXwi4AopX1Vok7qyiRqHm9m72bhWwJqEgEGsJ3bHLdxzdsRqBWEVrL1CgdRnYdST",
  "key29": "5wx1ZCzpysZmTaDeKGDntiMswu4jtdPH54P7FQZwLB8LuiBvUqRvzrwfqycDFx9Gvp9PHBALE7jwjwhtZWFCEwoy",
  "key30": "2Ux2LUZUfpHPLq9DooVjExsBr5yaw4G7cqXa9yuqy56rQgNJ14N443RWCHWdydg1bSDwshsZWrhuki5H2rtBtPb5",
  "key31": "SmuNPRy4rFhgch7wKktuZ9xxyDnNv4MWQSryP8pywRWqhdFgEek4zpA2iorAusJWFrgbKbHasgbAVC68MWTNE8u",
  "key32": "27gBhsqSwf4PpN4VTjNFjyaa3Az4s5ePLXUp5yansgrc8PKGK91SfXKWeBt8RUVUUgjHwka5pDiaZC6TCqQz3R3x",
  "key33": "2pBDMyiqWBG7suEh8UVnBKeC91z4G87VPturKyzrcuBmGsK45amwcw6AxupuTJ8uXdHYxYVaPnq98jryUrGaQ8Sr",
  "key34": "4iVXfpZiCtyDCcYVbPs6xQh4GrV32EkAWwByuoqwhfBhdgB4XwKrznaLKzN4VuKe8cVc6VJUqErG3pXBc52cCZsc",
  "key35": "2C8QEemmuctm2BkxvWkwsqtg43PLF3cGvD8yNV5VQYHMEHCQHsQygWwczYB2wE2drnExZgukGb2hzsb5Y5VZt4WP",
  "key36": "3TYUeUkcszdmym51CcWdJXb2BXRFDc9gcBDm4y3KYaWNrWEVxkNgf1RSjSqe4ZKtH3C9ETmk7CyLXKN43A4gz9QB",
  "key37": "y3cEGWNA7GCpuni7mwQgbsFofgxLBAtmPBPy5VM9UmAfH24AutMCjw4usvut4yGZjjGymBUbebHsH4unFag4deY",
  "key38": "3SKaNs9KigKJqNne27RerzVDuSbwJSb8wZzP92oH6tGj6FM4gK1n1oQ8UR9fmZD8UHzYQdTPFMG3VQV6xk4W5ZWn",
  "key39": "3JLccfEsyjhsRNGnfbe9SrwhtBvDGpXnGs8YJH2JLjMHtKXYvPxvjhNkmvxgnVi8SsexwFGy13kYLbjkBgkLzpDZ",
  "key40": "f1m8EpqhfnBqhrKw1P9weygH9sTtHYzGn542KsZXgR42owH5WkNCmAc6GGu7uupgZHbXXHurR4WMjHG5vzcJk2o",
  "key41": "5ahSATyd56hdfpAVSLBFVPjCrYrLYzQv1RdGweHKx1a9wy6e1Fge1su4nkdUg1wFpY5VTvyju3isYzonByHpEqy",
  "key42": "2dEfi5Dmy9QS5AkptmzBjaRqW7pEQrrUCpJyJtoHnq92iE1cbJu5aUWoUTqH6MaNPNTP1wehpaP82jznMwS8gGbW",
  "key43": "iGDrPW7CTDbsCCZR64jNxdae1LsXsfGRfW6okmpCEG2CfxeaSGPbwBNRCpKaQk4XFpJF1eJKPj9b6pTjTfwMruK"
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
