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
    "2fww2bGt3ZaKyqshK7snWyrfqaa8ALxAZyBfVeCyrCAnQezTnaUcogGELgr7DX5KSCxVCou9JcxPE4ycXAeNBqSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvoVKxkFHyseEwSNSXUjsCUC8yqLLmv5ozUp1UeHRvayHGCGQds1bRsuw4qxfFccCUTogspTywknqG5fTauseUZ",
  "key1": "4nFsBScgzwkzchpzh1eAaycEJpMkktp1KkUn6mpRwTZHbmoFXypnTkWjiv6WZ1pd7HJqjXUbGyiQjkM6ssEXXdu6",
  "key2": "5ie7bNuVa3Ra5gTWEep6MGNBX3qEji5E15CmGV7ZNVcv5a7zW4dU3h1DXNNK1XcwZk1QX2dLDP7jjmpGVJYCN9iF",
  "key3": "3dWauFD8AjuMPoRscX6pVa5eurdM2M5aVeXSzkyvwHbBoFVaEdhAG3EMcxYzXcLUU5P5ZsQdBAiwV9bPigzrtRY7",
  "key4": "6if182oyRCwCAJQr1kSZsYidK9upjbkkCwMQN8hK3hdA65JaHu3XR57sgC8JhmY1taUCrRthaRDJ2DmfEA4ddvK",
  "key5": "31iHgeXo4fsjNNC8HSSZirZ3enMUpUsaZEhc5CK39exNnAQm4nSvapFAG143tYMFNLoDB4fp6BouPuxfTBsEQVBj",
  "key6": "EjZrH5dxsyDPWfujZVQ2D573TxUCSptFJUbsg16dKzLgvEEDzecrT8K5ZLi7sHxbKo3jwVa3HsQYok5MWPw4eaY",
  "key7": "473p6xAmtEhtvxEiv7GnzL6fTyqepacWcGGYtCp23CoidRjymYBYYqKdaYqew5dUggUrs8NdDKeRni2G83Y3QHbx",
  "key8": "jYHpdiWBT92o9rAMPPjcaZVoyYVoFHw17mDzBVQg9hmsmbjpKCCLF5DiSF19WJEXkTjSnP6tz3Q4sUHydto8Sb4",
  "key9": "3aDfDTMrxECzaQJ5fZdg5rJTsW9fii5VeiNHqzTAt4ZewPHqHbHBGGHEdBv3Cc8q8PZmWzfvxTbwUMywrH3UEKiJ",
  "key10": "356fGtbSqRAEppRjm12uHo6Hog5VvtkTxbksfj9m4nZCrH7YP2wYRkkTPRx6AeAnGi6JpcctBktvRcCnmgTMicEs",
  "key11": "3BFRfWDmVvYo4yyM4fYjk4Q1yVQvpujSiGDQwdv8KKmzWqsuA775z5qq49VpD3ux2ucWfEAWppP3ohdDTGwhMwHg",
  "key12": "2rTr3EYtRXomRNzbuF89oGyaorm7vwYXCRUHyEhbLbHuQtvB2tRPicVKYNYuyCjUjzXnwwbKqWn1p7TLu8aXTDNM",
  "key13": "4j4e37B6FT3t6obvnVPUJb3cDGArAQrFk7q1HH1K2TxRALQEcJYAnUdBgM3Jhj1CJWp2amGLgLwM6watSB4DN3Yj",
  "key14": "hN9AVN3LHtf6exiCYG3rEWJhNfCo8ovGmwQ1siMsTpiP8BWAJb7TnqXhj9Huewudx9dvEK6YhDQSkJW41m1MHta",
  "key15": "3vEvkWVBLHY68VjVa489U9msQrFRGeDPVoxao2vdMHD4kDSPS6R1Q4KJdW7p3JqJHFxdw9aYbrXTZkA8fhTjqTMd",
  "key16": "32zmWNwsocjauBifH9wTN6snKbciWgV3zY6Skb5rGmwMLrmPD9p64aHpZrnPwhDWYXE2w9meJhaRQmousQP3erhR",
  "key17": "29BXQhr6HVTZs5hXvASp14G6sQmWH7UtQ8bikTmueHB7Qppbu1qLhrb2srmfTSu6sBcAAA571gETiMekNd1FZbAP",
  "key18": "586W8ZeXu6P7v3wUTLWjfkckWvFJuo47mzQcm9mRTDVA9JRAQZyaKRmXBUa1CvhnPHJ4cuhrNUmJ8tfpNqKWSzXV",
  "key19": "49h3vvo9GMxSZa19rGRiEHhdEy5wv4mkZdJr8yXfFF6MFeBdkujw3cqDhHrKhKV9hxoJ3sjtyyPrh7dC4bpr2sAy",
  "key20": "VPAsGg7ajCGNnhPmqcsVxG8RTQi6L1z6zgyjCzdjzQFkb3WU19pEwszhqbcsWPkNmxr2qwZhnCrAGFNhGw2Jz9o",
  "key21": "46MKdjGjq3kWX4kQkrntcyVd1QFEEP1smTAX41gsVGWDaTY4YFdUE6ozmqf5UvfBUyU7wFYaBXyqVqyhu2s26mrV",
  "key22": "2qrznTbLxeSVWyLYSn6T5NR7qGyfKrjT4Zcgh3Hxhpnp4vpSJxwrJ1pTtLF36RJj1apDjQ1pvvmTBkhqzR6yQgZq",
  "key23": "3uUHQt7tjSGoEXd99nUEN5XiM1TqAhkfpZj2s6chwexyMLSst8N63pSoc2TRZsvcM9JVEoEiKFr5rej7P6odXce4",
  "key24": "7LvAUobQRRZ5qAHWQjDaEGnVuV3zCv2TGcoZwV2JoyetvezFXKrrMvGnHS31zCbHxof6tZgmbJr7iJ2TzJhCB5Z",
  "key25": "2H6pG4hZxMFc3N3XCmZnLTskTRD7jjoXAgdENtDWcwoHP8GcoQqZ2yjymWfkWYQujqfvyKCjRGjR7ZvWuQHEGABJ",
  "key26": "3r8rW8pWme9iRraAZUDJbMCPsKZTXmQ4fzGqF6bwZre62G7aiWRfmPvpat2TRtGAUTUXMckHAfoJUCwretToEMJc"
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
