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
    "5cZC1WWctxKF1MoAawiERDrTFXgLRs1Y13MGw2gdMf5Yt4YG5C1xSMK6Fc31QCNKDCmLQeBoDdVNPBQ65MAh43Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZ1huNHFEuiqDrtNYoYxjBEMphuCn87RRseJ76afhMXpJBav2vxCjtetjoHtgZjRFifGEXeTi7NfLGA3BieBjdG",
  "key1": "4XLNx2RBLwr3FKxnjQadYxezKrtbbxx61QgbaxBz3bMtHWtQcuCRC415c1e5KQdu1TsupXUoQ3BUU4XtFJuW79hG",
  "key2": "5XejCd9Ns92Nq7icTvTc1PWdzsen34Zd6GSjQRr39nHciDzK7y9WEjLKjZs2ZJ8HtEEfCNU6CcfKcf6UU63sS6aq",
  "key3": "4tnU2vQQjXma2LYuEUKKz3yhPuKY18aHPMMDvGRkvzi9fDeCea8A1GUUQWcC5y7BYYbLWJyG61TrycKXZX12MpPH",
  "key4": "5MLwGmDM6rW6xHj4qcbc6eNPN1XvLu4z2NbsGdRCpnShm7T5vYKhJS8L4RF1yv2fhvow4PAw8rpPBsUKkYJFWx3G",
  "key5": "3EXhF7VPTQbGffA5y8aAjt7xL4hoHtNgYstJe8uYUqcawx7jgXfxhPLC1XLUdnLvVHHArdA5pxPqC77JPk2EASkL",
  "key6": "38Hy53Y41Ed3EyEvrd5Ly8Wg4SpkuZETQADSRcxm52WkF7ULoDDoGLDX2H9BCDZ934MGh6yfzjSZRFG8oBSf3UAJ",
  "key7": "21xjbSRvJS278cx27DMXXszsYaNhT8K5EozVSj3BP8VLszaD3Yr88ngfb58M64JYAf4ngRHi5ZyKKGWc1uAsYbXn",
  "key8": "2ZZiSxLsLg1dLkStMq7RZKTWYtJvVFLbDa1fYmKMUhAvTevV7pjLETy9DB9ydB8ckMqZSwCerDEGC2rvrStjyKkA",
  "key9": "2yDASjNVPoYBjcf37hZAkpGoHCntEUEuPG6pE7pnAZK6F7dX7pm8mi8nBVKrV2S5RQasLspPyvXoYDu9pu7aRNxt",
  "key10": "3JCxqRb6573v5zbWkrYVhixpfjvxCowny7HtQoowKpHxXt5tqUZsK6YUwZm5jDXkEztteQF5KJxaA2xBrbon8s45",
  "key11": "3QzhcebwwRE4SVzAzGPrH6nnscTaqT5XW7HDsKrtgdHMM8mmfynSCHPdsbFVK34F9tmiTWJdnV4e3nfxMxHxL65X",
  "key12": "4Rz9rrxRSLaG8a3RSHSxccFHQFrLzp5ctvWBFvokfozG21oiMkxNRPYXQHG77SVwfLCNSrDVDE53WV3vVo5qKeWU",
  "key13": "5M41gUKDLjriKkXXNCDiH2bRw2UuyEyvueNAL6ujq35jM8tDroTzRqSDT1LaqJAKe4q6pnor31vz2ybJCh4aRs6S",
  "key14": "61pYUi8dZN1EvYGLJfL344tPu2jjZYmvFzz2C5Z657n34nZHeXJKBzCVFm6dDdPXKfzcJc2GmXi6GFwjiHqc5KQD",
  "key15": "5MsBCM7ufrF5y4PJoFEqYHjYAGwP5GS1WdL6dHgevZy4oyadAKx46t333zuq459Xv49zJE2Dz41cvthE5PaoPiiX",
  "key16": "4eKrrbhSyQvrMq4gs6TgME1avwKgzsXK7JpsnUhPATBVg1ggVD6Fc3Le2TcUA3dRPVAMqE6DibiFjKShej8M7FUW",
  "key17": "4QejPhJFpnVXK4w9PM2yS3yTVVxW3y35kFJ7xsZ4UXbZGzbc4Leu2NLp5LNUKNv6mfbWWbFHQydc6rkYFfxbrN5a",
  "key18": "4nwvVg69ieSVf11uH9JM2JPnpsQG7J5Fziyk3JdcSzkYjFXmXD3uXhesXm8SqEcR5hDWjNqZwyKeQMswhTbw2Vvd",
  "key19": "gJGsGxkeySxtjoig83VyTmq9dkanB8JEn7s5vCBAryJA5GwWu8YiijnFPaKaGRtbC4xobEMaN8Z8b3Bc2S5Cgme",
  "key20": "4d6fsNEhBt6D7bm17Du6taCVpLRPVvYHbqYWbLLJ8xf7kE5rXobY2XsQvog3n2BgkrVLDzRsNeoNWZ94KGq7aRNb",
  "key21": "5xYDk6GF9gruvitkGdcTGPDXTjUM2r6422rMG1e9zeSsUmLBcWSX24Nx6HdQhTKWBGAMSpfqGSSWAzmm5vDXyMZQ",
  "key22": "MqjVzFAMkrBhDY6nfnrPzCTYPbGngTz55wCL4azxiceqo1p6V26dBfD5GSmWRjmLjpUhmd36GGhHCtoDB48KNsS",
  "key23": "5SgH5trCGyspZQdvVJYbsaioBn5447qrPd8XK5bwprNwZodGcbStpKcV2SNGSsYSMv1eiGDjjRaoFTgBxTnJGgvM",
  "key24": "3hRdLemxoaqSw7AEPUVy1UoYGhUdBQaznVUD1nCYzK2RfRNm3yjGvpG1XSL6wutW1SWpTjtdnmPx2eXHVvJXPVZW",
  "key25": "2X4RVQYMVS6DVJE5TZugGFm3MFGe6Hdgqd8LvuVevwoeVGuEYmyZfuoYjcCNNMkMrB4awtmBt9bCXzSHv5acbeZM",
  "key26": "2Dn1t9UVyVyN7KAPGogGuQCiS4zWfcUMnXkdWfRbCE24AAzcmfxjPHrf8pkAjYB7AjryKJVsPytU7aiZw7Mo5G7C",
  "key27": "5WygfHeW2vNRoTfVJd3kUBBFDAfBuHUUQLW4dyh4iJxDpnU3p8NmoDaXoLczJfVq8qgbtkvMeF9jxEpMGiRd5sYP",
  "key28": "2gPhxoKHAuV1VCjPaswDjY8XaFhvTwov2zn5pPKKHa4V3gnbonvaFJJVwZjD6UKNDSUpsAeH5cqmy96PGBa6uV7i",
  "key29": "54HoQ2keZ5yhbTohYHW9oFSZ5KaAYwPCHDyzhHgYVPc9PjCtrSZEgNfaxfCgcyZBCq67AZCQbhCxW2kdhacVsQS7"
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
