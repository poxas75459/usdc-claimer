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
    "3b8e2pbJrrPTVXSBgzRtT6eBwz2JLPsqrXDyRTN8u726yGNQiJNft7An7HV889f5iddcjTYGtGB37s3NttBrpwj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pXRwPFmYmodam5GgvGzgP8kpRsYfh1A4zHrvzVbLyfLV3jzXCNPzyXY7gpQpGbxZeCqUKyFHMkwkzJfSrzMgBP",
  "key1": "5Lf4UzjMWLGycfmUNckvjqUYXY8nNeS7Yh8GVcBQphRNgka1D13KJtWpLkyjzXr8f6JTjSvtLeFynvEVXjpaMgk7",
  "key2": "3X4xACweM8QJNTzRVV3dD2F7aG8tqJEnNyDC6Cc2H3wdcWC8BYB4AMQGAQMKxeNsG1qAfTpS93BCYD6uSmYayScd",
  "key3": "5vd9EgbVi3SFDP7Do1GWPQbpps5XpB12DKrdM9Vcw7efEyUS2dsEvEfu3XWw9d3rGsdMjbBH7Tozby5DF9eKhJKz",
  "key4": "2TFv9bNjyDMkAZnYTizRzMdSi7H3354CFB91LnPNy4HJbupQqmJN2j48WQWsnMa1a3AsLV6xRu1wuEPRknqCDCpn",
  "key5": "2EaeLRVLYk5JQbWSaM8pSCbbyb9EJaSr6khSqDZUoV1S4ghipG1dohr6qkPMDjHX4NiJ9UzPHxAMMohYZmpm3bEA",
  "key6": "2XJ5h7Wr8LLBiQiKwPZjoPbVavtaaLYwjTzFizh3vdABqzXkAaS8sbY1GggVmX9aVV5d5nyGnWgDuRRhiVTUx47L",
  "key7": "3Uku3j7msFXrRympjRdSvXeBEKUi2kXV46PvZfPo1DysVRLh6Jwmk7ebeaQm5kXFrzb6PUCVVtcPUUtrmCcPM446",
  "key8": "5nGxSacRSRsKn4VqGie9aMQDwxrAzE4KF9jCFN2nJ8uNQHP3RiYR1cVt8tLSNco2XARhdtrBbXEmWEGcbtSet7Gw",
  "key9": "fssU2rPis7kj5uax1FcbgyycRdmnVEen2y7ihtaPVWUPHpvzESMdkfg4X4bmqVpsnAeUvyRvZjB4DhdgGowDh6b",
  "key10": "53PUqLCzhhG1X9igRAbvAGVLi2vm1o3tJATDZ3p9iFaErtdNn18RxGx3kJMbW6VSo4eaDLiLUzxTmdAfqqJPUH7w",
  "key11": "4cRLWoft1WaiBc2EtQJL9fFgr2ZZJukX3KYC4VHjJACd9VfF2iuCumtGHBXXYRtc89YZYxUXjLNqzaEFyFQ1YkaR",
  "key12": "4qTHRcgGEBnkFNEXYNVDuXizYtuABFFtsAbJEazbfqxxc94JtCUAgNow8qmLAkRaTCMFwSCxfsj3tdLx1JEgnUMP",
  "key13": "2JGwX9Dz6Ap34na2KUbvFU2skETFAsQMTsQgc1ePgfAUF7Vi9SAjhbCc3pF3aNbbWqNRT14Cr5X3p6FDq2czn9JR",
  "key14": "62uD8DbYBTRhJ2XqRiquQjE2ybzbFUsQMKT3d3QxdYZb7NhAztowTMJyVk1cxd8HmBCdUFoLJnbvMep4BA9jG5kk",
  "key15": "2zKiGCUpWrbrVZYuC7p8E5Mr3cHWJUuTQYVP2oZbXBna8pjXW6V6XStaVisSxHBRyxXQN2mio6UbwpMVDEa3udgL",
  "key16": "BoPePBYDe2cEB3cC1akhJfRz5GH3bZ6pEPEvBsH9UCJrtnKZCuz9SFjyxNUSo4qBVTm7E2DxhHiSkcapitLUVoU",
  "key17": "2XWNTxBuaDo1T6ZHwovKk1DA4neboikspv3n6T46nHEKtkHjnL79nYgJFYZmtFADbHKNmrvS3V41pXYWG6E7BHRu",
  "key18": "3EjxKtcNBEHWAs1vhtEAdBxzuXrPDsdp9p9kEry7j73n4eZXkyds11HN5zGABSLdW9FwnWEGEZHafWpw3793WfDL",
  "key19": "3xxCNuLFDMhJZFWyQq5KCnJPBs42jb7jFGfgoe811eb8XXiYjaCudAF3T2p41PAmVH9vG62LZoxiLM9J549m5WQ9",
  "key20": "4VqnCA2dV264BcEw57T9np6U1jmXbLR3M8nihBPNkUtkd7z9TUxWHcGBWj9ENUXJHyc4jM7QgotoXmE28MoAyK8H",
  "key21": "2PgjeYGSafRTqH8sGL4KoeAeHuCsevs8kvXXhVkZ1PTpvVAhQdGVimvawvE85DnkShXQLR4xVVkPxyVSUyRCqz9Q",
  "key22": "3XvMibCUja9wFw4uo7iGMxbiWu8aU1iNu5dt1eJ31waE59c2tZMDLFN3t7ynVCY78ZVqbRfBNibwj1RKApdpQNZp",
  "key23": "5ESteJNhNtmePH12uPJXAts9v59pHE6qKbVssWc9MsexGJaqLjVdkdHPYtXcsvKCzd9L5TvHHfYS1pLiesfBjp35",
  "key24": "4xJbUPFi8AX21RecERq8pj9CoRT1afHhudgvEBVT7b3pHCsV6UbuQhcLkvgGkLT6oHyDgbGwBkriHdFsJsYV69t2",
  "key25": "4EaoCUDc1cUUQB3Kaf6eCzNy5hnyWQEpfzw241QcUCZWvdVkFJqgALA1wP4sMwEHgdmsrikbs4MPMdvgQ1d7amqs",
  "key26": "3jZPdQbwpPCThrAw6qNZ23TGimcwoBebc583gx4iFcvV9U5dzwY6zGdvQN2ka4eqzksGUVdAQubJjJtAWDRB2KTM",
  "key27": "MkGNjAqkhoaePpyvXUbVmdNyz9rcqpwvYt5UT77uYgXFp8bAYguLNrnpqaWRiKADNczVEKKK6rYLPEVZ9QPboUs",
  "key28": "5hd5ioEAtjT1JEQsQZe6ZJnvhybtJhkcQffvu1ucDe7y5sk87HdrsDxU3Th8MwtN94FnPP6nGFt9xPWoTjH2Tw6Z",
  "key29": "2RJBRkgfibHsggyanMdoKY7XtPQVQ5ZhZ8ib5zQYwcThgS9zVnnWx9ZwtmtmFhqSVW96HoSpQYWVRVGJu4cVt7sV",
  "key30": "37w2uHKLepEK76g9wfxFRgfRx1wsxbkMNdVAoCkQyLXAC6SdRBX92oRcjNeDNJkdFrmYo9KMumL5bnabeCUyMKoZ",
  "key31": "3hfH7SssDVkBJejTfEBEGCvviN4wikHD88t65bfQ2tot8g4NsMaN5iPzMzLqGd2euGrG2UddnMFoh6oDF6DrVRsB",
  "key32": "45TWgx5k7d5QhTXyJgksqMBNp712eBp3B1PwDpJDwAnvhDnbFDHne5owUwe3fkvVRyvX9R7JyPiJs2Kt2s2feFBf",
  "key33": "B5b9Ljg2SMTdKj3QYrZwM9FRq5u27w19kBNoLyM7hghq5oC4kc3RLai8ue26Eo5r5XSWvAzbTNs5fLpfrf5Wy39",
  "key34": "4Wujvhu9QcgofdR4QrhH92eYqvJFFG4LxVsfQii9maQoan27RQKgA7X5xuZ6HsW777pT1TTN2omsKbcD91kKbR1C",
  "key35": "5SbGbwU37ykDiSCySjYTuq79Y5Ec5DhUgshHxpFsjHyZia14vb6jLQXTfvwnQA5128caPP5mRav2sEqgcZkdFVLz",
  "key36": "5zgYuYHLDQKzt6XSTy7gPjFk1jJrTzE1SZF9tvNBMU8qThAUegdQjVtaR7WcWQYJNVAPMBtpCKwe34wQD11yRKej"
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
