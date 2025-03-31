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
    "472aFZyn1dhvtpou4KQRH6g3AS47atLy8Th296QnpzgLKsWypCDuz1vQBpdSKddfRBaCFHJJp3z9JgKxsNtRvF1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEiCN7jxhiWn4T3kFtzVuR1exd6UZPNcmunxdxCozLC1LrcctHP2ibdhCT7hYwVX6NUB7Jnnds1CdZ8YEpN1hSj",
  "key1": "U6zDpVcbf31Wbk7LoQBi6NYC5Nbag86fZW2azMck5YKKTVagz1WtQRYaaDPVhSMjixgoZbozGotMCANNgWiA196",
  "key2": "4ChUvLcLXZJGss1fi3JJfW1avn9npt3bDB8isHnD1FHZh4A2YG2c9ccFdjZYqQwqvXkYjJguggvDadpfrbD7exkV",
  "key3": "2X2dqi6iU2UvzWbnufVsCpheNH58Si7Mpq4o1JdiLaddyUFSxxercDrPS2yB3jS1SwvX2jS5tYwcyMSggq9JcGxS",
  "key4": "2tJqCSnZYNmwipj2uPgPji5QfmManQJb4r5CNUh1xwJWsSiKbLmdSFZALq7iJhMab7n1zsqJ67BydnmvejiEubbo",
  "key5": "2V1zVMXwKpkC7GviN5jV7VRbuDjPRithJeGQ9Ed1oSuNXFbRDqutcEHXH3izFJevwPRB17pTM8cBoWSFEnnbNUpa",
  "key6": "5Qhr8MVN8W1aUavL74za9W9FMoFGBH1UjE5tADzqgwY9xFn4G5Gwe26U2gccY6XQkApCu5WyDter8QAE3t2PHczw",
  "key7": "4BRPV33ppJpNTtjDdGd3max3tssg9QeZ6rUjtJFq5SznamNzCEvX4xDo7teFaqYuecRtPNqSBUZu52rfVHATmm4f",
  "key8": "5MJKzJ3SXCnYG7Y9gFx58Ugobdc36QS3TffQmUZ14XFjfLgVYpJJdLEijendM5rtfafrQxiLcfP62cmz5gbcMaVH",
  "key9": "67MydZqW6eyo8eDGpdfYVWvSYQGE3XYDrwfbNbyMa73YXt2sBHg3ugDA5orrVv2Rc61HmbZpxYHxezPMp9s17otF",
  "key10": "3weS5MJWMWrKphMmBozSof8Fy2SvNgLFsxgQcdQr9hQ3FDTuxGNnbByyG4ZhaE6oP4JWVkHj1ZvBtrchqYrsmHcH",
  "key11": "5XEPL5aLLQ8tKy3BS1AHZT2rLXD9y9qhkNzCXHdfBWZ8Zyc3poCGt9BQV3EG4GuyxTVWg78B6gzkXqFnSmpSB43U",
  "key12": "2B3ehr7jQohrXtSAwJzjwGvxPzNWuAqgnN6LCmGe3TAiTx1rWT3rpVeyfUMdRt56hKWyGk6bTtAdD8tRKArGS4YN",
  "key13": "63qTzD3nHCFHNia7ShYm36skdPMQA7qc2Q6uLwW5yMWDNhV1SknJWFpjqdxpyWrpUujgJPUWeEhabm8iHCQeoQQ6",
  "key14": "4GGggtVhwiHXYvuTwhxNqngUDFXY4jB2Pd8Afvgg2YemPii61j4xpdZqTcCCC9Uh4U4km16LXtboVd2bTuWbzP88",
  "key15": "odwwegq8jQa26FZ9qMt5ZKWRFXZKi5D3gZG1UZL1iqVWSpPtyF5Eas6pGq5aG4vxJQjPo969T7xfAKF1GZBuNb4",
  "key16": "3EmGka5hFX3CYWcpsLtnVBnxxKJGAYLmefW9aESjh1UK45HTUiQVvwXnmJGaeu9Pvv12itjWekcLgijmcEjD8Jca",
  "key17": "4eaHGNrBn8WbqnZPAhmRNCJVLyF7RLzMYwSRXS2nd2qMB4Ab537Lhub9RCifXCvRkUVkMVTNJcfNzKVNC7rVUtsH",
  "key18": "625QX8CBuWE82QdCUwcEVJzQnTFTWQLq8dmVJzvGS8tM2DL9VqYGtQdM2ai6NQC134kdhwfRnFwCb4YbJbBtr7Q6",
  "key19": "4h5oQhYV16XwmxotTWctUNoE1omEatADBRSNqEZgMRmUBWBUSvyXGfhHYoV3G2Y5kvWJTwRC32afbrEprTkZpgNa",
  "key20": "4CYMWDcEfSPKmmhcpxsevQYYDe46WGQrSQ5AKZFj7DDHwvfkKHqSstHQNwXsod1NRMHH97WPsPUjbphajmTpYArD",
  "key21": "61LDF91JTWpMQq95YSgwzAqghMCkSp2VAn9TfprmRLf3sYhxiskvRej8qfpV8iQfcMbv5JinUDoy4Ri9xXvVCvxi",
  "key22": "4DG6s2gu8bGVZnqFBNJG1sM9QhgU7HS1S31sNy2wjBdP1hLEWfGz8k8SEtvvtA8gMhDxkHWvH264k6f4Dv5eDnGP",
  "key23": "2a72yzgyDzjPu1SzCkmHdzJkkiQzhqKNa6Am8f3bvtvZmHCEKKoHUkiK7CRZWi6dBnbGTbQatBpdXmkSdSmbT4R3",
  "key24": "34Eby1n1qJcKQV4hqBT1BA2emUnaQnBL3FcUrDHvtA1XXnMPf118kaNZPVCvLCbjedmPYd1Qvcpnon23A78nEH3J",
  "key25": "2S8piTTajuxCKBJXFpkpyoHGdfMsRgfgWwGwk6BfZKPYcHbA5zpKAGVUEUqRs5TyRmrUReziUQQELSN5MzLzjob9",
  "key26": "5uSziUXMChCBPEeNjwpfehuLbC19wei2WmWbsn687j7tcfWazperRfkMN55w2GsHtv61gRaLopW5bvgdmgGDLHpH"
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
