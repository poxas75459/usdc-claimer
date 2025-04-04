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
    "4ZgwmsBDAZ3Bix65cuk3Zg9YcZJgoNPpDsubKdzxY9rpvNDpHj6VRyM7PwHDWDYCEHkYdqeFPPurPoJeeCrCa8aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyHNKY3cCu3u6x31UWdrRg4rwCWv36QZGuLDhjNJAPTSy95daey3c7nFQCzgpM177wBYexqu4QSY81joxRcoBxV",
  "key1": "1KeenTKHmXrAn5tadGSuasuVfrFCJizfbnReiuDVzUuXKcRtLpwVwxhu7UGn3FHuh88wph4LPffbkgjGGytExJo",
  "key2": "28S7m4UGUcPnAhHbukyzZadu6BVK5BmCsj3aJEyFUHTt11oEmpyyuYWjtCpwh72cW2hpuYEfEBmjBLMKgDG8qRU4",
  "key3": "4pgDYwiVyEkLErBahYpLMgfUQEj6epkK4488dPYTajZN2fFXsJZpPnLvPXUjm4esCscAUzBvp61QbNJaSUFq3MR7",
  "key4": "5qxseYXXMN3TXmYLwk7FpWtMHh7y8ybh7SDmvBmZUHtPNd3uiMhmgqZ7TFQ5fa2mtjfqLZQMddLYuZU1oa9BEuM7",
  "key5": "4gTjyuXZcW6JavvFst7dmCY5BwML6YuTs16eMddhdNi15YrNQwLU18zMzVEdNCtXHv7msFcw9kLwNyru7i91HFde",
  "key6": "2Ps1fzB2sALtVPo6AvLkBFFi93U9eGjV2QQbfJbRknjJavkNsD9Au5wT64U8odppdyi9m1UJBsnLaEkqzk3r1cwd",
  "key7": "4SMfJ41H1FdP9dUoG4VhVzUg7cUnsyMBE39Endayo2zvq5AT7Vt6ZmJXE15FBNmoD2iAbi28NpFYyGkKRuhYs3Jx",
  "key8": "3rbbLFnKacavmB1GxDQ9bBXQhWn3vyfsMSfEpzjqbF9ikPAHpKivY1zG57Ydvwum8zmhtrbLT5u63hHmgkNpwo7M",
  "key9": "28z6jTuy1LNFrVMzzSq8jkZnMyoyWrnob8AEgbcRRGXt4Yfazi6GVVy58hsSqN9a7Uz5kCNCyXhidVZ9qVqQsNNX",
  "key10": "4SPSTZikpBBSvVqjWYo5e9iAfCCEFbwhSt6oZWo7ikz6JFd7ar1YmzB2pWaEbCmcFBbEQFDf7FXQ3B1LA51LMGih",
  "key11": "4mDqf61WZqqYv9StVofMvN7X8bjSPVqYTa6UwaoTk9MsRaXET1XPWwAyUPB4HcxPHXF9w4iabmN5JVQCy8ViW47w",
  "key12": "RMhC5gZSKfKraiu3J8LsNXzFEin9tGyCqvDofjTq3VV9RNpLQXuFCfY6JnxS463HXiNnEASjdLu2HtzPMXj2Wxc",
  "key13": "5qV9vYSmKZE4yqqaj8LcStyymGdCJseZkCiA1ZxTD4gthNGP3H2yuBJ7iwM3pFKGJVFHtjD8ub1VwuCQ9JP6Zcw5",
  "key14": "Y4AnmGKMyWg1tUt5VsbQcTZUivALBshzXF7Hnb6VqTKnBMHgZhxDbo5djR93PQmwy2mxPpAgGGpJcRBqeYAi7RC",
  "key15": "ZiM1uKD3sG39uMaEdJSxz8VdHJsbRSbffVSjsf5x2qnMq3V1aC8G8FpcQUewTpMTdv3aAVVzLy1wDyrVVbfk4jy",
  "key16": "GXWafXQY3cVveKRpbkpyLjkNqt3RVno1K8bEQz8XUk8SGVNpiwCDgRnHVwukJdx6kFwVh9Drym2DCydCL4XgTnE",
  "key17": "2LNP8sPUSxcXZ4J6Kk195wwnpgRhQSi4AukMngMuqtSRoMxouopDRnHhCE1ctfijcXzRgzu8g7JmhS5N9ou8Myfx",
  "key18": "64CbynDVdQrJTQHkydhNJGDH5zSA9DRGLw3YPr87wKjpus412u7tB3CnH7AcgqyDGZ2ENnWf8A1NDELFnE1gKBaD",
  "key19": "5HHemJBNXr2XK6BZfeRTzq5LTJDNeAra8YDfFFRzuZ93J6stS7SzCQBecTGm6sCKCYUHNMjdn58qCujrCdUxwdMa",
  "key20": "2B6ZfLyscfVQoRJmUbL3KgpwgfaPJTUTEhQ6CDo9yT768tSUrjV1iin5s14KTqVoSHEV5Y3KW6agU8rRN1iEWpGD",
  "key21": "nU3J9VZnVTGhJJeY6QExAbCfXgji4NQmDRDJGP2RqHYqZ6uqwxw13hvgCxSTUpRCkwY22PWNE8UN1mvKgR2UPEd",
  "key22": "34gXoqBpfzWBSkbFUsrSjZ1EQb7fXM4m9jd4XfbqPXrjH9GgGuncHKFTLS2vEFBeUGZA1CbpzBbyGvmRjMJq3fTm",
  "key23": "5V3VezYxvTu5Ur6w8QXiRWCXyGNNmQQQzhJj6pW8mqAoFzum5NmbVqmeh57xuvhgTSYohVtyxCuhxaSF7gquNXzh",
  "key24": "CmAtLdRc7kWT8jgUVC7uyUx8V8Mmuke5CoxWRTuXx8xiySxU3ZooJk5TquX36Di7sCaofqHYuZqL1sZwThfx2Y9",
  "key25": "4xTP5dNxFBwSg8bXQC8dGASgrUQFk9nDFPtMN7m6YUyTzhxbpUUbrfStfVvr41stZgMjgXSNbCaepPi6XYCCmZoD",
  "key26": "QB9iomK2hjfgcvdjfqNw5eFAkUQ66AJVEV86Lf97YFcTk6wcDThVTeYqH7ADhg4PEKVGqzqSkRcaszREqqwhEMW",
  "key27": "bgnDPyvBoLfEQossyqNMWbC83ijTgfHe2RtFj7umgt5yDhFctPDBzX7VUFt4pydNt5xMKn3oVvdZBFTmGfPKboe"
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
