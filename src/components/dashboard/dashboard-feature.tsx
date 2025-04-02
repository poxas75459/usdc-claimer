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
    "4cs7Y3frjq1BL7Ln6DUmYU6Rvc9PFneyygCJ2CCeB11m5DxkPWejY9dzc4KZ9E2rbjP2ZyAmpkbCi1M2MS65AeCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zK5J1KL86ptaMojsPxv1NdgYHds87kZ5FuvVhD5wy3oEmcLqTis2EhRfS49TpEzbXPtftBEkf8h195TurBirMD2",
  "key1": "4GEvpQQCG56Qvw4FnU9AyfGwensqN81CSJLeK7h5EedoZAGrkESrm5Kwc7DUoUguXVrvY24fq4W69K4F1xkDTEsn",
  "key2": "51jnoCW2sb2DByhoGViGk6hSkvPpycRCrHvdfonk9BFCgqBmLqRYwX6uPGTdhgyfyDofiP3pYaSi1TBXCvUVm32v",
  "key3": "59Cic5wS1rBZB3fXoaDJJT9gR5GyPLRffMyCSGPy6VwXB1raw3L91NvmBsuH81yeSxaLLHhcd5sJLMxBq5JwN8Ss",
  "key4": "5SEAmZL2FbpkMdsMsLNtAhZ8ptCHXjJNS3Wxdw9inguQxohtqah31raGUzzzqpKEsruf6wh3KycZS7t4yj4n59mf",
  "key5": "3ixgje6j6MAhFUfHf69eNq3ERkunXMFVzJ5EYmAinJ9YNBQgfR8hmgstyaYC7YecpnmWocVbvrUUG8kXevS8ZGBL",
  "key6": "2Qc9LA2P8pm4gmaxsXWYLnDe8BDPVyCEbUAWLcid2NXkKxEx1dUjK77d9vJ6hwDEe8ejVQAm243H7KgnFviz5Jz1",
  "key7": "kETx5VU5REpXkbE7cKP7z5yPThdzTE6cCEBqFehYfddDb7xb1zay3Pjb1ESv5DUo85rD2aPFesMHBWEVsQdfYho",
  "key8": "5pxaVozo7sRchCvenuGMozkeHMRrSa9nMc3Bxf87roMTNMWKjXy6i1tF93GgipYmWeW7mRpNAqwfQN9REcXVEyoB",
  "key9": "fqe7UokXG42w5zL5ZoHBT61EJruZVHfm6F9g4Yy1ug8BbG8eCdxjB2VskNpYdKGUCt6p8uPFn52b15GKrVaPLqJ",
  "key10": "n2xBqQs57Gy51FtM7AXYa8ZLFHtCFzHhLdnr57jaE9F4H7hqzsH6Hcszbrekmm8onEmvHAfSkDF7CPwFKc8WQH8",
  "key11": "5VLRFk33rfxou4izLf2UnASxhAjHzgoJiPg9Nwcq3jj4G33VNyWTvwrdmzaTk7Y37fLGVs4zpdqMw7GXUGJjXqvc",
  "key12": "5y9qBxw5FCNeonFuBaUASdGp1qCKAX1EgiXtcg7Xr8MG8ioaMfczDRi3L3ktq573GJvECLQTR6sZpoLBG9Hkwttd",
  "key13": "2EKAWBKyJfjkmxV7Z6mkPWjkcPtEjHXTAN5upjDXE2uNwDbwrioKK83J8k6JJwDqYoBEkiYY7z7hCerEYftL6WeE",
  "key14": "5WmgLn6sfcQeX1kEuRdtftuYJiU1dmkExpYga7jhFmuKnb56ywF6z2wvA2W1r1vkp1UUAYqHvGXLuCeXvDx12hMT",
  "key15": "4bxbeXyEgdMZ1UysCXyYgFSRmLNQFsCwPwcDgnbeahwx9VY92epBHRtpgTvdxoGoFHudMvNJADdyeVtbm3jq8KDP",
  "key16": "3YptHVHGc34fy69SmTtk5e6uEPzpFatiRmEE4Y4sQRzkGArUx4GxdzBEsEQp8SgKLp43vq7MJvh51ePMWUL9sDRs",
  "key17": "SUQg2EvC8y8tSti4ufaLH6hypQfqDJfp7sBkovd4xD569cFLaCB4aNamnzxs9prUrkyixYBLXrwE8mfeUiwTh9J",
  "key18": "4SrfnqDDSwExnRgkKRuRndwrdEKxwmxtcgfyvNJN5SS3UUzddh6iTzDNWzELQk9DkqgmWJMjAN7zcH8cU8RzEn1Z",
  "key19": "5hjGv2dLNCLjVRaxneMBEkHD7fFvqKMLwbxPdbMPsNTE2FBFb8gLknSwNu2ZsWoFed67JkYatkbCGnvdDudsXRDC",
  "key20": "3un7quoMJuaD8XLxnQU6tfanAwUhggCQjDHB7jVtSgLhqwShhUEiyyc25sSYA93q8tQapGFGNY1pQbhaB175c338",
  "key21": "4c9m1LkVEAnFBb12HCvuge9kVcXXgCRZeJK5Za77W3kuaBF8uJqqmAjgzwyjCQqDe1FTDiQb2JgD87RuM111c1cH",
  "key22": "2mXy1NBVxAAbnijqfGxqxgCVoSbpLHwWPGkjdEm4LS99VfeusVLvpZegkgkbz4PjRLC3m2YE4otWWhSo7KhxAHPb",
  "key23": "2yXeu9gpn41Fw8S47k5JL1YZ4ga5xz6uJFAN8EkYXXE4j9gBWpFemizBWgwPNLMVJBTwgRvzYXz5ozd5o4wjjC9d",
  "key24": "2rc9CFmkDrWiVqzyi48hXHo6oryfFE8pHJs5N7VrbDjNbpL1pCvbcBNM3NAX1iiQ9aVPxRojeqHdz5FJdfLDFfhX",
  "key25": "gi6yaBLHMYARjyxz5Pugv4q1KUCHWmX5cs1Lk73fmKwTkja1E2vhqxZqWta8GiVdoFsCspyijw2VWsw837eyRtk",
  "key26": "CWN5TxhfgJ4vxXxMcgv83TEgMEcE7rRJsLbHTmGYDCpe9A1YA27VbqvEQcV4g1NewDTmYTurErJmJLuXeHHr3rs",
  "key27": "2YozkKBMkaUb1zwKCnXHw4Rt5YV3hfm2tJBNBhF5cZ4Qf9rKHpTK48QZxruPf8d5P6TH5HCCmatYsqk5wJzb5iHp",
  "key28": "4Dim1fP1o4S7Sfk812JPUYTtPwL5CV5MpiNWboHBgqTzozyNHEGRJCYnnEa3wEBR82d6YV5VR5yoK1FAD65x67Wi",
  "key29": "3ykCqaTwbAkJzD1v4181N51XzsL9nBRUQ2YkdKxa8MgUhDXfaBQobajhX5C6jB8YRjBuyAkqk1vWK2WcQ4QdzoAn",
  "key30": "3jXzVPAqKhzCfwzh76rZVY9fcCoaffAB8NNQ64XVYgchp5GtgMRj7JnggkMSM1fQBnNSE9fHLvx8om8RNkjTEL8Y",
  "key31": "4BKzu9S6ehSFBWnzrNmZ3iy78EbfWUg1T2jF6N8JovpUTexo7rBF8zMGjHjLaXNNk7XWPmwEStYJwCWzV5u7s639",
  "key32": "287exCxg5fi5GBB1C6SUv3w4eJkrFTLbaNVdS24SCWFUnxhyG9yjPR9zPbH921Mu2paJDZ3NcwTW9ryxX6R2qCdA",
  "key33": "56ZHXhc7CZt6y4BoSU7ZpXagG4Td9EbggrK6cgq4uHZuevYTbJaGrdwdCuHWDTJB7AsxUBrR1PvMdfWKpEZTnqpK",
  "key34": "5r79w9oK78ZLjYpHRwXZuqspBKH8LbL9C1rinn88jNVMeJETL6gPzXgqQQAnxc64pCVYhxkSfGDkQYuJXDc9MYAg"
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
