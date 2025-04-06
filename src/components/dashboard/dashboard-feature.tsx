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
    "59thMH9WreAnLGkpydEW3tonxs3okN8HpXd35SrfLsBueNQExqtxPDi7f2HpKLcPyC6XqZ9zd236rZPx7WVzt2g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lorj2rWrCTfSb5e1i3K3VxDyUBBhQAZEyAQsfkGnLP28yNWzTANovM1QK8mHkjJWR8nc2e2XHUVoAyCrL9Gw693",
  "key1": "gu21bdCDUzJqWiTxhkYhatXqg7WTM7BepS6KMPZ59B8pGRXrQ3EcFX9V1RW5hyRrHHj2b3V8K9SqHsbgt7utAop",
  "key2": "5B92BCgDExbPNmyCc5t2eBz89U3fwy3f1WsgwvMCA8GZWj3QRqHc5z4kLPRxju1MNq5rt6VXNHZ1FwsDGvZsCmci",
  "key3": "2e31Tu6jUevpTam2PEWapgYnKAFJmMQv6XDcB9nErkdxnoR163EiEX1HyULL1RKHM5uFh9E8UUKCWUtDZz4z5KN6",
  "key4": "2P6SDTKb9Jron4dTcUakpG6P2bHgDi4vKThY59t7vw9hTwdQ97Cea22aKoBvf33HC7kQjzQX5ZueRCcRmx5SqFnh",
  "key5": "3X5j49utGujxPjSguSJcPNMMj1dMs4pYWG3sDX6oYBTPHgGzj93Tc8e5rhpR8rm795Y85s5wfqE5RhuyqgXM3Vcz",
  "key6": "4GWo7mgerjoP5oR55gKvXzFftj6prMqNbdMqEzBpy2gUK8GML1ANQUd38724s8i2i26DqHxm3ucWdDnLBM3YWH14",
  "key7": "63gp4LfqJxV5gi25DZmSUNASgZ3LBTK3vkpMMTMXL8Zibrn7LXrESzKTdvGCBabt5nGF28w5ToVL8yFuM5qqZ6qy",
  "key8": "58erMCD3nisrjPeUYbjns6ngifVXBUmw1wmaKezwhUpUUpmEAH8he77SqGvkF3mLQWRGNbN8ZUk1BgVGCSwgtiVw",
  "key9": "3XEo6PbZt28hYVZZbBS4iRg7fUkxQYe4gZeDDyaZ1Yj3L6J2fPkvaNPasCBYNJ8CC1WEdTXU4dKdzQ9MTk9v8Uvb",
  "key10": "2d2sWDW2idQnktoMLxsz4vjDnHTXhRHVCnzZ41tmW7V2LcsSA28uYY5ctCAZfgB6amCZTMT3GJpBFL67FmL6j7kY",
  "key11": "5ejhJYXW9zovy2V74ASkHwQSn3YLcL8RdkqJXE2FRsByRAbgHkQGHGa3CcbMzjroUfDQXLTvwkjxux8oQ5DWPeEG",
  "key12": "4Krdy3nTxr2tN9SzcgfWTaf1GVaAaavbuLTzmAppkSs15xp3s8BtNM8noaZPT12aVKvyQkybjZDPWD2izEbACAYs",
  "key13": "4aHVyaSgxkNLK6r9vfzcxq6e2xNyb2j44EpqLtiWfzF4cKHBFbZRjxQ32Dthp7wsiuwNWGZkHdNiYsZ4Rh6FBm4P",
  "key14": "5vEHJpgWKKoX6y4zEGXAKfNXcTw1UaNyEshtKWDrZHwJSxumW17p2BqNoqmdecK77ST2NXxyHJKyytPgofwqkrja",
  "key15": "sJU1YwoqrnybrxDSMFFwx6QVXr9bC4D4WimHTxzprHGBSL3KffDRAgE2u5uyqS5EfXCfCpF4yYkDBq9EURxiLzz",
  "key16": "B1YvB8fFERZmR9qp7brFeKLBBcwTgFZ6EQBFsse99SfTzQKq9mGY5gG4xxLUrgr6MFkSR1ExZUSWuzyNmosqx4C",
  "key17": "5r7AQ7b2DnigTdwEqwRCvch7gNpBKrVQnViPtyS1J7eL4s5KNZcJvMTWQkqcPSpGHCdfG4btyUb1dS7paHFjoT4R",
  "key18": "5mUCE47AyJdWxMxV4qDM45PByjwSCRsTNDGUvhR16BJobTrzgG96ADNVmU67yFss2Ug2BRVVNy39gSxd2wgWgJ51",
  "key19": "2pdLCLRtws9YVHySb3PMXNfEtKsbYs2z4Am3VVoy6w1XD5VzHC36pg2sMCsfM4UgwUJmjvtgVkRA69SbkHQWmQ1q",
  "key20": "4mKtMrq5XTDg3jMkFkzTJsbWm2UbWzPaifKBHudvPLC3NHEiu7AfrHDegyqkqfFNs6vfjWNDfmAuqz8LP4TvPWE",
  "key21": "fm7FMHckCnFVkRSMr366U9f6Zp2RpeBtnmcepxrezsoDdmBkDEECrUBjLtSF2rFidNQonByMyXhWMv351W28iH2",
  "key22": "4UEszh11CNXJJaS3897tq2ZNNEqtn6H7WVqGABksMqGicrh2nMz2EecKuU1aXVhvYuvLU6u8PdwrnGfPeZUgVRKK",
  "key23": "dTMgadCmsqyqYyiqtcEzq2FZcHWx9LBx11HszWFpL4c5KCzhGeGMforShxyqwFTGdCSN1YYB5LFHD4o6qfwqfQq",
  "key24": "5RfL29UNBDd4oqiggnCwMugM22p31y7MXHWePLcAz3eQXrhXSeqpVgUE59H1pFGLTEzUfzv9N3kyzAsbd3D7RF9p",
  "key25": "4nXaP7vUG2iyeJm13WqKoxZ5o9NxGMudV1p3L9c6BRmdQwSAsJDg1Zuw8HUY6JXz8Q3Gob4p9yvV7KYramDvzvKC",
  "key26": "2WK5XZeUUKz6YZEKWo7unyEYtx2AY8ha5tWiQ5Qa4CpkidC2DoFjw9kJVq5YLvZ2LSNKK6amegSBf3RXTRw5ET9z",
  "key27": "3hdZsZDb3pxjwvByFAcve1FCi4HTBG79hfKUXsBNPE7T2jLXSDzXxzSVynkoWM7Jj1mSfjQKuhVUWt3YhBtHaZFd",
  "key28": "ud91CuQFAvVGsrJc8wjicWrB9gEMePX7F7xzrKrVTutCvPiP9unQ6ybKjiZoc2F7tZ3tEoBDFMtHRr8orUr8fkv",
  "key29": "5iX6wfX2T4PWp1SfbVgpEW47fWwRhWU3FMDWazmCHHUANkUhpNTQyTXotAUEDftfpxyzEYVdaV4BHcSmUMB9ZSnC",
  "key30": "5twSNED5HHsHFMSqZ3jPnEQ9XJR754FTEnpCbJmizTWDfmQFxR1MaZQsYxEAyNdruDLA3zLNq8quRLoqubSVbBJ1",
  "key31": "2ds1vkekhTCoy7r7GNLfs49Qdfsd7uEFhgFMcKsNyh1bM6eZAxJLGCCFJe6ebXzJQPQE35hv69RVr1tA67PAEtAT",
  "key32": "54CJgrf5T6kGP83M4qtGqzy6oB7n5NDKcbE8VhsTNEhs4ifz2Q6iwtF8XBx7kScyLuKjRp8xBgNKkpLruUmrsXeq",
  "key33": "5LjAhD9e6ZfKLaRt8GuknQ1cQcb4LUmtneSMvXin76Mz8WpSQGeZ5keLJdN1RRemsm8dx9QkaSMFFqANwEGp4bnm",
  "key34": "3bvB3m4y82Ua265adBXm5Kx4reieqMQc53YpQLWJLjfVJMvca53HBBdVhhAnW2G4rfNgGdfbgGsRH5gZT2V6pKrA",
  "key35": "2ZTn69o4FGbFxjTyEFuNTYtd954SL5bE1vxVhm2DjzsTfC7uzbhVMnrynuWGszxyQPwVVUbj9wX7pU3cdUrXhbQJ",
  "key36": "R71fvHGx14hGtVQFvdRgxNYMdhRQwVeUMgkdCZ4VZhYEEp9DCRNrjhgtc5a89tbvsKvCGeR83WQRmi7bCUcf3VT",
  "key37": "3VEdrwhrqjSWJPppe33gmW5i5ogyVfjN4CYrARhRzuTVJdNNz6QyHiYFtRJ79FoeUu65xXkPY1X9db42quiPBQYo",
  "key38": "5D1M8pbnHSkN3rprA8b31Y3PeFVz3UneXfdtnrFHfVzBSNejuNfpT45TxXqPXY3fdLDehP6QZA9vr6vEqVnBmgNd",
  "key39": "3ajTY1aoTTWzt21h3FJQMnz9TM8wxTjvRS4hnHuS9fQF4Q1SSRRsAY4F6buNgBbuabdDXhsvxvLBMgKcXjYM1jHh"
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
