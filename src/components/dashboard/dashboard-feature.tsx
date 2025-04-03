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
    "2r8Ur4p66UQy6dCYjpK7Wrf4xvAcCjxEGziXc2j8QLjp2NEMtoBvmY3h7hYZPZSRVhGwT4iW2jF5BwH2SpvLR3N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbfyncAVJiH3SuYoG7UjQFpU3J7yA3kZaoaPkowRbyw3GY3nFKjx14g4WAEUVes8UPuzppHHm9PLWy8CuhEERdV",
  "key1": "57KBGGj2WLpn9a6Npy2sYt1hN2dN36hobWkZWT3CsbAnaVGFZbYkvDACZ6GXvDGvLrboTiKHFyEZBv4Pw5u3H9QC",
  "key2": "21zewS1v5cjrjXMut7mKurNRPRru2B97c9ybfM2MnKLk5xVwLxydadpRXr6bFJn5oy6bHaWFvpyCYfZXVL4UiqUa",
  "key3": "27BKSzjNsixmA5u6BucM79vgmxQGzSr45soUVeQaYtBVb3F78TzUArJMJnQNQSNcfbK92EeAudiTETcVQpVqGt8U",
  "key4": "JBWPbkPhdN5sS4t4yBA5rDeQXJyihjPenvFYuLA9iJJBPXB5bPdJBrwYGycdAkcsPDD287ti99NgBvncvChUM1M",
  "key5": "2r3axugfCV9fR7QiXR9Y85ZaCQcZJR3MqYEyfevLSmjRbjHhFAPAkHbs36mcXCD7dxhWg69vZgBnzzPM2zExCp1s",
  "key6": "zqya97jRhYVtbdLfYk9pRn3YU5fXYvpoQGabTzhXT7GfsQjqU39Z3n1kH1owNsDAtD1fmi1uDKHjxnJZ9H4w6jr",
  "key7": "3dFK4qS6fN9Kevv44UTgGnFmhHije8Ktv2AGXnzemicg88yPyMfv811kqhfFVcyN8vpAZtfioB4hE8wUeMwLGxwT",
  "key8": "4j8HA1pjJBrg2egw1ZLBUap9vH3w5qxHbESYDQawciufnH9ZGCb2ErMKGi7HXsRDqKF5JSEvCAKEPn2xTZ963HWZ",
  "key9": "4Y1xJqiq4mGFhZQJvD2fmSW7QvvB18u7VCTz5F6FYyQDNn9YT5AAXT4Devvt3yqhsFVR1DBJkRDw54V4xBw2a6tc",
  "key10": "vbVkTqh8W78D1dM8mZStyEr57kwfZ4H4kNFwPSDpfyUWJn39tnKzPsCbsfqBt62LVDuvQ14hfg3CUhobRVFm4qd",
  "key11": "4WawThjvkaX5cAS2FsU8ztbnvU7p9dXMhzrtJANqjbwnzmvqzTu3yShHGWNwkVrmRNLPwWXJbqAVfjuTAegW9dVK",
  "key12": "HspNWL6VHmfxRbnz5ePWXuzN3qFRzC5gF1g64vgaVfZAobaVVrLXNsbmGhJYG3PySsL36NW9UeHXy3seXKfvn8T",
  "key13": "5bB7KhehTubNGXnhXa6LQCqAbhfNbJh1ViJmTGj8Mm1A93pzPot15pQsMckz5U1r2afwenwPyX8zswy1ZhgPcftb",
  "key14": "k2ZB5DKwBv3m54WpjzRzSkgBPD9t1hqhg15jdqkbvvTcF39Qft3czN8Bp3aw6gpZCJP9TLNQFEwaZS9EFTKJm7L",
  "key15": "3NYrJCQuA4QUuc73mrAAFvuCd3okn7ug8FGHKAUvUPJRXFGeTcqfNp4Pus43tkeVqz3jTaiijTnCNbgeh2wzdFoM",
  "key16": "64ZVKyY3SSRmKShwiZF5ZWZxiHjhXadKi2rtfcUB896oA4uGi4eXGyVFcwBWqDXWzNabNNkVBUjZ51FckZu313P9",
  "key17": "3SmY9arDuz6C4UMBroz4gcoLD4qy6TrDRUhzJLCiQJi9gfaYGdVb4RLYYQ7Cy5hs6YNgNPfZVEHhg7VLvzuQET64",
  "key18": "XxFAQBemR1EhZWf5Zj6R7EnaCfJ8jNV89gtfE4uq9hagHywoS2aDqhinYcihTSYvcQMuU5JNprpD5fDL9g8raYY",
  "key19": "5Bc81QBnhYUrmByumZ6jwm6yNAcj2R6cbJBsv6YXJBqX8QLY7s4ptCCGREZQv3Ktqq4JBNFDhQcgHGbmcbYzJ3N5",
  "key20": "2WMwhRrVM1RmUAoi2PgcXgFdJvscQBYBM1t6gDm4wWqoKM24GHQUFnzE6FjRR84uxh9zuXXWyUcvZp5D6Y9W3W3y",
  "key21": "2V2hgwm7nCo9jcbfUDUdUnzthm91nAfkPXmxZW2Ki4HMRcW5W49hCUGihS8GFpesDvGcvpLSmQGpKn5JmhufWZcN",
  "key22": "5D9E6MVkCqXvJc8phxG92Muio5wntndd6tA8obVFL7PeFjr9QtCdgTyuaPLgr4NsBy15d3NR1j9UfSaCMYnbW6zj",
  "key23": "2WD3BAHDnw9Xr8QQ757QgQWa4Qcy7JKjXSVDzheCZ2ZWvAvgtFAJctGrCpRcSBVzzQvGBwYcDqeTW9vkUmAfMEXM",
  "key24": "2dVzyT2xnXDpca17JPPVgnqGVyCuxB9NUrTrfuMoQsa9hA7V1fiPbgZURU4diVTQjc3jamBWUy3cnYY1w6WM3sAd",
  "key25": "2egbj6bKW6j3Ktq94hHcw71ge3BHwgLumcU3iWF8yPAuiPEvrL4VNvWm8SiVxB6uEZTFEtpgzcqRfLukpHrNe2Gj",
  "key26": "2nDsictAynPfY2rwTz5BBey25KnjMhVcdecSpwBEErwuPW2YvpUSGKVnksuWLCsoC78egWZ8YpP3FANA22LJwtcD",
  "key27": "5y2uwphYrg2mNHPpiu93kNgUNJVPiuQHHMBofE46eehZaBirdTe7fhrqkNy5xa3KFVxzxkFczTcF6cv4w2tbPDpD",
  "key28": "PELhRdAbBgpQDPUoVnhx6YpHvabKwjTfoKPTTm6Fzsd6gg4T8kpSXmBwRgzjQjqZf4MW1TUjE8qZsWVV9KcpCxJ",
  "key29": "5ZQKdrWfSkCdHTLhugzjTSecEUBv115kYnAWryxJNLUnniwHdQ4VxhtLJJnLh7KxQW7QiuZPV7994xXzZWFK8CoU",
  "key30": "2Atiomino3QWh9FYng1F5TEK7rXX4KtibCvn9Wd2iVP1B52KtqvuudsnYwjKpf3JXQzFk38SMyvTo4VFHUz8CQKs",
  "key31": "5aBDq9DUUYHDzK3Twp2Dm3ax8u9XEUSC7RgwwVURK6FYn16EJwHNGdNrENPgnPqWBQaqT5Wwe8KTSM7FArLh7YAA",
  "key32": "4D9vgwB5C3FBBVtCfGYzFegLACJtHe1CBQFdx1JCoz5bW8hyewwxeXTAQKxqXGCEtUjMLbWYKyshiTPh4KJHgV2F",
  "key33": "5fioDPoShBrYpPTj5o7kMNMH4kL4kteGS3epshwvDVnwxDjubPknLUXigMEubqLasxmY2gUF5pdsPrVTCGzJsjCS",
  "key34": "5h5JAiikvXUb1fekP6r8fGep5jMn1iT13WCXHWUbSaFJEMRSLyZYQxAqQ8vv4ej9A9gPK83xosTDTzJ6UPcZuSJv",
  "key35": "54VXEmiaUmyTNt5Ry51y7ejUbrb7dUmGs29aEbGeQCLJVy9FAdakYvtHsBLNRozoGhbmJca26VBHrkHE6UugdniA",
  "key36": "2RJcczkSb3Gb3361xwPtnev2iLCMav2EHd1NRZUK1U8THRfjpaE6fqNnfijsrc9bHaSoiStkckXpYzEmGSo43XoC"
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
