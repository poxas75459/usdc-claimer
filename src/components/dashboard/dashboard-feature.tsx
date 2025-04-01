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
    "XQE8Kg2csXrhMgxNXkuAGhA7HuUDa1QXfWBs2d6W8VraoxobKtqFbFJeTm1gLUWh3bwRSR3w3GmXm3UpvEFJ1m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCNgNPX44yBN4fx1TsAQAvxes9isbseerYzeJYKTHQwLzQuuc4nHJJTMwmkspCzEXEKKFrpJ47UnGtbxMyHjn4H",
  "key1": "2xn12GiEn4Rqc4swzCjEarYwV9mW1LeiwVCLGExKxYWjf1j759Uvq17NFGByz7fygB3cHVqPRSRYhbkVbD91njW9",
  "key2": "5RqQLdFV33ry1VRvgDnk6HrhK1W8tEYspea7wRDGzhipavMwwojcu866gQtyowHijYdcbxKmbR6bvKscyGjFzAuB",
  "key3": "2JKhXHKUdr9ifMjm4qsmzGu4ryvCKUHxmbzjkbDj6x9J8iGGegfAeCAqHRMHajrFrExYbUa5ZFvNHc3V7YaZhjog",
  "key4": "2fYN9YvHnHcSVRgv9b5yuKHeALGb156ydhJu3E4TgUJ6PNgu1kqXXb5LYpiWMqcnZfZhVnk2uQ2zfWNnrXK3cwmA",
  "key5": "3QTCWSNF7DifFgvcJYAmQTrZwLURH7nw443KAMRMWX16DqKYy4zANhm3woUA7JgyMGPDCvs31FEu4a7QvkJaKXxv",
  "key6": "2wj2UtRuLCGgBFRjgd41MTUwBv993EYhoi7zK8RsVfqyVDXGbpGM3b53GCaFbZQ3U75Ks8Wksh6M4pvHsJQxqJaA",
  "key7": "5jAiBS4wUSsuHnjZxhZr8Sh4vBAR7yG7We48TZfMhypwAetMSisEA56jaD1fTzNiwbXVkSYkzv6q9hY6yGHEjid4",
  "key8": "59PoeYaXpk6SFs8Av3DoRrvEwzeFmfmd51siGRE6eEBHzSurUkRAN9dUhxgTT1GP9EURUQ7tFYtbKYkPR54WmGp7",
  "key9": "3jYroT8n5mGk1yWNBgueD3dpbVobVYqfTaUM7YnG9djVzHrDMe9utHh9o2UUUC5LSjC31puMLb1hA8QAM9xTKDbh",
  "key10": "3hHfdgy7jfSCbwswrGNm7hS4KnzaFWEvUi5D93Q7XingYox2jbogr8Lr6uKwKQoKzWPJywAKzP2NEdUXkpQxAj3b",
  "key11": "64fwd88wc6e4RaMWLc2q12uYXq42RB56G2RgHeKVHdn7UF6CWWJr8srZUb2mXraR79YfA81GoUeja6BRFgHv7NDP",
  "key12": "3m5kTEjBWz3MCQ5kyX8LTLNfyixcdjHR6w6jJNZ2smATdPwooRHhjjR111x1AqGXLFGihj2Cb1fvC9hcf3hwzNLh",
  "key13": "3dBmjp4rhZccgyiaku8hbabFm9v9cFt4KvmGmVnCRBEWP4vCMAhc6GRzPPgnN8hXNZ7zzqThr6ep7LAKnLyc94X",
  "key14": "qTfWk4hPL9uCbYAkqRNHXvdGXpsnikWA4SfcJhGMkDM18hEzagxxynAtWoakMEtkxtR1fCQcNUTQBU9QJ3XQ3ZK",
  "key15": "2SVDJ1s4EKRqULAL34zLFPsrKWJF4Gk9w121ks17hpk73YwsajfKhDYrb7HnmH2oLXwZVW2K5NixHMz72s4Z7BEu",
  "key16": "25d5R5VcV6P7YFoddKsRaUomHesoEhX42DeGZCC6LaZRakox8G6YjTWFKcFwVcajEmtxR2MFunrCvdqUnP3rMEYe",
  "key17": "4YtsLbwkxyAuzVDHWgAwMvxMuPEDDhGPE3RqwqUu51fDHrCT8sks9KodqQJ7Xooam1SGeanWCTUnSbUccMniqPGP",
  "key18": "41G9ZRvTDvWL8oW77TNmMyyKkN6k4LmoBgYLazsY8p7mZYCV8CvLZzFNdoGzJ8bTUnxtcrwkxDbFcsuBhmfkMmBP",
  "key19": "4vh21MFjnXjrdCqyxZu7kt3yy3PrsUDpfSXLu6cf4n8k6hQbuzVJ6MLhkNQZLLEuDNwLr4AvVtGdUF8pfZrXsV8m",
  "key20": "2V99gCZVcWCDnQRCtbJp9jC9c8NTwv4MRTv1Uw7qsrrPkcqDuycaNndCBntMZMu3SsVbCyn3g8K5pCQG17kNHS1D",
  "key21": "3bFmiU233CL4YBL21EKy34SFamSF5H88tr128veWM7T9qGPvZAwkZZc2qqYifRV5XpUcCbjDrQNgmWNfvioirEr8",
  "key22": "4hjESh9DsWdbyrmks7U55J6umaLjCBFAMMHFym5MU9LH461u1MbSo1FYxQzYuJgENBd5i3izNz4GcZMRHVjBxUaB",
  "key23": "xVJcXMHzxToaWEPKVnWLgppGrLS85V7GGeh4xgtt28hVHocmsNTG38hWXRZF3FPpSEkzwsw7ok66TxrdbsdAi4k",
  "key24": "5sjrAMUBvxjfDpsH4ZXZHwR9BUY6PCcedJ8GiCNZ2hPs5Ygc5qkt9shnW5Z9PM6cRzTEAog4B9EVNDwrchyWu3C4",
  "key25": "389CJ5yMZD9VC1rGZeka5hy1xyTHs2XEWCRJN4kMchQXDGL2tDCGNuaDm1btsLzH1mAd6nUZSLEaJrdqnoMcZ9Bj",
  "key26": "2BzpjrQWLucStSLULB3j7V3NVRzZDwCCgcwvjbm28eyRdpsyNf2CQC7mBvABLnj56YdDkdwXQ6fwfKTQgFK6iMHR",
  "key27": "2jHryozAS9DfPuQVnaHnfCanEJZFXmQus2ddZBgYxJbwrZXxw7B4JWUoiSoKNDNyNzwqEvX9vpVCYqvdZaEr7FtE"
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
