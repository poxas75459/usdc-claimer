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
    "3DsPXhDFL6mzwqZWRHs8DveAbfXoAEFqJ31Z6wA724k9bh613yAznffssajn2uof1xU3NLZ5xcHUMXowCrPZuwbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXoBVhPjpXkneFm89SpajnSrwKhCo8vLbxq2fPaHQA7dmbn4fvaDk2grWPpFxbb3vg7r56ZNkDtcMzoGjv2dNby",
  "key1": "2DsPeEwNmTQiEgnnMuRUn1guDfmecXzsQP8rHeuC4Ff4QzSuRCMzKsQcKdbhzmeaoRdPcoETnAf7mVX3JtnTiypw",
  "key2": "3T9Z2PRcrs3o7TFzE55ZkV48q4FZ7vnWNvyEn46y4jAigyWrwopJ1eey1kKdGTvmpWMkzZE5GdedvLWPY2EhbN65",
  "key3": "5z7PKEKJ3EWUjAK9nctvv45wRqVaoWTAcdoAKTYNPXnGyDg93BEZgDf93F6H6H6HPXzFFK4DxcCYUzVvBXv1Xj5s",
  "key4": "pvQNtZw73ytt1gPS1ttZdbciymDerSayV447qZgCZ6fNN3RPEeoMir9jGucQXyP9HYDrt27DzsKLLKBaLCs8vAE",
  "key5": "4ibKof8mHd1L7GLquv2qmACXfvjS9iRDKndvsvR5kr9iLXQyJkfhS6eFYMmkAuE2rY2TCBsY5TyduXxNrNAZcpap",
  "key6": "2idJrpLp38zCy9KGLUQmRcHX1mWDG29VJ3uao4LzRmwtB9Pu3LS2a7PB6aaGbG4THhdxuwvKx1F2JCyhTx4tuUux",
  "key7": "5d5PDbUyDHPDukVmg5jXytXKadJ9hzoUn9hFANHd7vjpxvXYnSXc1sgFhwXhLpkbEXQ6gixiUjXHXzpeBZSKjmyw",
  "key8": "2bSiiR8TdytpHRYbobWqEukRZhT2DC4PZhh9h3W1MkagEeZtEvLu7UFxwokZ2nXcuwgEj73NaB88G1Y1RMhZAAdu",
  "key9": "5QC182g1SQiE9jGqKPZmAxMHq5jo49fedisWzyQWSjUgd3Mvi9VdmH4TpgKCqHQyHDPFbyVqVbR1zBLaVPiguX4Y",
  "key10": "4dCtJ8Hng137kUgnC8CuugBwnARFLpgb3DkkzNxqmK5F1zfHKSMtsGdEor125VBGLUDTVqTm4nUCzkt1APA6Aigb",
  "key11": "2rQKEerpTzDdqaC1jknKpJ4ucrhusxFHwa2DcqYRqWBBt3DTBVKRWxYM5cbctsw4u8CxSGXuxAT4KRdnJTJ5vP6e",
  "key12": "66WVR4L1op2KcCCMftuRc3JnRMGekEQ8WbU829huCAsi7W1mniYn9mXcqd7rmp9r5L6hxA6J36ZD7qybJiQsPfBn",
  "key13": "2qGVts9VSVG2urzci78CLFLriEH6wfD67dmZtSvXmzwLN5q8XczvNFYgE2skBePg9Y227coVbscBaCMLaGzv7f3X",
  "key14": "3aT7ZBcNk1omVESUWetCiAskFFJ3GzCmvdChsKuzvoXyF1X2U5CitH3DsSdeGRposUBneMfE7GrDPKMps54dDJyu",
  "key15": "5RYytLxK2UTGhdJZRnjCGYLdjC3RDwQPpqTX8p7awgehr8t28eFGTHQWyk4A9EGVdvX1XftZcEfGWjpfhSbAq5dp",
  "key16": "2MKR5FPhihC8H2MBJL1dL9h8t5LooMvNCTCbVBSBkCPeQwGLiXYhdXn6PCHgkwug2UYDvSvQynjuTt136uEWScWy",
  "key17": "cuPe1eF5sSYzvnqj7LVAzsiVrbmAAj8fabuGckqAzhYrWFouNQGEnKDKo9y4F728igyUae7QsPV97y3UfdTMoj9",
  "key18": "3gXt2MXcoHMdiekRqUKHDQRSg3HhS3LFwfBdeiQqw5EJX7uCeYjtnS92qNT8iawYPvDccRsdX7DRTVibj8nquzoF",
  "key19": "5yD261bMvXMm1hJ2BfaLgAapcyBeausMhuzgQbq6n9zq1n7roqtZgWeFxuCHvJC4qinZWeTM8BEi4kFf4SVMxDzq",
  "key20": "4xjK55WN1LVJALAdFUwU95QhZPQ8KjbHRq4tppFXv36tn2rDwtVCZBxutnujztoC3q8XJcMppYUQ75cnn3qMPHUo",
  "key21": "592Xc93hcD2i7QMjYiF16xvxcUWdmfeV1o72CDXGyevFEgoKP9hZuhAuBZ17XRiFBeXYgYv3JGeDeKVjAtnnB1oX",
  "key22": "5mK23xxGAvJd5FYmviRPdgJZ7pBAcpThQ26cMfeBWbiFL8yxk5no567zaAGXG4y3iLP6UMMs7SM5UHtGinkxjGxM",
  "key23": "4g2YEBAHqGjt3aYUiGbMFu2okwucEshU6htGZF39PAz7VphWo2w5pf557tyKM45ah6QNR1frw7ELnBRVCer2Mqmu",
  "key24": "ghie3KazVBWkZ6XFEN1Bvd3661C2zEmYMVdvX6BQaPFt2v2p4PWR2N17DTi2A9AggYt483pCuZtCiaumME8iX5k",
  "key25": "5kaJnyuFZ2v2kXpkNbTDV26Cf2kiBLwKUfqQAupG9wWJGFx9uWfVQpVV6Tp1BuxH6BernR29p3nRY7eLMjCrCnes",
  "key26": "2WPT479RsiT2DJQybnadJT31W4KrpfASXFf8L6r9SPk7yYHyxnSE1BQVLwkvfsECkuvpt1tc2Uz5vbRQ5sKGzSFs",
  "key27": "5q4nAVvjMh8fJgDXLsfsN68LUcpA5zvpoyvsEcUKYWWgApKdLQSifMpnrEcBDgiKUYYk7FJJntnb9SyiAbcv3UNT",
  "key28": "9sjVyEMv4tyzhTRw5nTqq8ohJ6TdwAVW46dCCnNpPZTZYd85hdMJRS8BsZrf6p8BuE7aea1ySPz42Zs7CkJSe8Y",
  "key29": "5F5yY4rxfK5zHCxpWTV3b5MdjnjEKb8rrHArN3UfyNzFigJTupxmFz2eiKpLkesiNRBxvgonCBSBWKadgmjAbWgH"
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
