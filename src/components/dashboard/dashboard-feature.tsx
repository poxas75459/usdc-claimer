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
    "o5v6c7zrxQVntZmUA6js7Prf8xuruTzHmT54NJcBuFa2DKzTLY3GdVkyj2pjPWMm1Zav5VChoY369bSJMNhuGcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u89CSMWXthRMT4AjAZeTLiHvMxZzqLkvzzofFRXY86CvkPwtH4HuJAfxDhGvMSVJF3p1dDcmx3F4LuCyBZR415F",
  "key1": "25V6SXV1hKStT3FFwLWDyAThzkNELWhbcvyPCbwoKGoTdkNXtUVTLJjhqySZyQzzE7uZLaNh75f4ciW2owPBDJcS",
  "key2": "61zqjkesbdZCtRVtzw74Jv5y8oUgzMGtcfZy9J71kPE8cBtdwJBQTrqowoi7y7pa9EX22CaoXECYNL4d6fccyePk",
  "key3": "4zzitg6YnUFRHhua7N5URGcsCYwPuG6Q84xsF6NH2nN5KN8g7hoQ2FfTZiQxgEjKiQ6aoRmVdppNWxHVbYm72KDP",
  "key4": "3DUZoGKFdNo9An26HjmVtXyDAUxwvzSSrXXcAxKMByAeaLmM4MNmQrY2a9SHTqNQFW9m8tarDmq2Jjs6k1tT223D",
  "key5": "2CGrwR8qsRuGvNhUHT4gp1GHvuzYY7pPPbm1noM5p3nwQ6sPov8GB5gGaWfTX4DrdbE1GKaELViBNoTWtGu29g35",
  "key6": "UA5jSKLB2AwQbdZbfWPrSvPpHbkDvU65iuoFiZoEM4EsK4Kpr1ujxqj89uHW2Fp8KBVJwMaumxbw3KKdqu1dSot",
  "key7": "21NsrTyLtDwM1uZk9Tkdxb3ZCStAvgGQW5ciFYAUZEGppBat6UuPMEGpuGyynmLhXxw45CVPUjPX2W6YsCes3GT6",
  "key8": "4Bwg9tCd9SFAD7NnfbgZAmbV7TZjsmVuVDhPRtBLDPX9csqFpXhwsEdtoLwPJuHYhE3xvPSZKhC9Za1YL2vx7fub",
  "key9": "2Ezy9MN95ehXGNPpGhxncFHQXWyyfDepXvngGb72qY1MwT1X2EiUMCr3iJMpkxyxXqMi5FmXiozvCwvc4SQZF8uF",
  "key10": "3hGYkKpQ2gez49J48fH3UBLftJhemDXFDwF7zSHwQKCXCTC67kb4M3vBT8nfepEvQUbq39hLKgCdGx7X46Fi92kw",
  "key11": "oNs83dAgkTAMrzUHpbsN5gvwWuPenT1nvt3S4UFKdLwECsSwmE4WC94Uyh9g6g7FJzcTZ8B4JRDvmaQbAqkiPcH",
  "key12": "3412JSA8uWorPBbqe2G6kDfJh4jwsRmm5WNa2dvGfAvTNkkxPpuV7PbNcmUqPgYNg649neWgR9i6a7FXaTQ4bkJD",
  "key13": "5k1AEXPeHV7Ur1jtayqYJw8SQP8Rcox82jvpTUrxesCHH6YDp3SzdTesBDMtLGH84YoheY245bAvjLfxgto31CfL",
  "key14": "CMHVLbwZZeMDUnaTEMzqTWDSnQS1QJoJdww3SSfvEGikBjWBDJ2YE4EDRX1iuRXJdKLh6FfiDaD2iZSQwCEPxJu",
  "key15": "3i4DfuFNMsW5M7r7RAxsPaRcPgbFuM15AXC6qXQYqcS8VGk12P8FWxb62eSbEDjeYRQgAbveQ4AxFbjoS32n2Mq7",
  "key16": "FxW9Wd2YkzSAgoN6auEKov83XuSq4Ahjg7mAeos7Dh7HTPGVyeX6NMk6C6bCPYRN1xGv3cWKEGpf842t636Bz7M",
  "key17": "2ypRdTdPyKWTQChgKiucLGuB7M2MoY2VZKY63ibpe8JiwA66jtPpng3QTJhF5Fn4Wp12PPkm4rWQt3evVkp4UZxX",
  "key18": "2wp3QPuGdxRhZme1D5ZXB1Wn7Fwo79SfyFm29U2QhDc5E3CntconHQjuVnAwXgYEx4gH9M8rMQEU3XaJjeoc3TyN",
  "key19": "itpdeVaAjV8eKJy5vueRro8KbDkiUnoHRiv5bL3muudSQ9ByhTqcortaeKyEfU9yCyrUr9xDLfo2SLitzqzk28A",
  "key20": "ri8RTSzQvLRoAFXYPX4V5AEppcEZ8TAcpJVKdqNZXjmD9xoQMNgFSyW1BPE8awQfAFLcKB7spVMsckjNp4UB6NL",
  "key21": "jSKqF9fHhW1TWJJuJchwWnj9ckMdqAwEgTJvvxHC7KMjVSTA1vqhV3Lru5HJFs4m98G4zLaDXqhzRDtAkvsqhJd",
  "key22": "2aBKHj5QYGkCMjtGLTa8DUbAvCrjcmZaqrtKSbtNwxjVbf3696wa6qhtNijeczeA8aY8wMANFV1jnpSrwinKoiR1",
  "key23": "4hHKdgP5EedRZjGzmZJJWvWhbxHsv2ezoSb8yDHRqznP8qbz6qnZqQnxWLoe4qGMvkimTvSaKnQ9NrqxyeuXsx2k",
  "key24": "MaPYDK6H4f4hrmffidsFtpwmwaZt8kMxKhrGXAFVbhXUgZmALkT6gx88ocxpgEp5Q33UtEnrzheYqxodBPZKY4c"
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
