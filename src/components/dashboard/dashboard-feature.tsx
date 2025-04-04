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
    "4gHbksqptXBaKQm8oT3sLfBgAeWS3X4eVqQxug54ChsL9iKBNzaGLam5qKUrVoFgCxUzWod9mK5SR1v2Kp1d4p5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qaUX6iLfJLxnVZCpvULmE1U15vfjT3JUhqndWH94cPu2Kn3RcCyuv39iNyN9KWyAMf9M5auVEAmwMAREQUeX272",
  "key1": "kMiTunsuBo5cASM2WNMnXHUMNkbxeJjGBbPwuuMCeMsKUAE1Z7ukeEhV5Ti9wJAAU98Hqy92EzQFwdQiafypPbW",
  "key2": "2gRvR873hL8696eASM2zYRcrHyeUp1UWkCkG9EMi7uDtuR2yimyZy8n13CL8YL9wFTMPorDJDnyXnpDxck8g2BKN",
  "key3": "22dnpmJmhyf1HBhUn5cXMYUDdyrzvyFBgi17L8QGFk1V9S2VcXGjzRYmUMy2HwwHyEjpCLYPmj6aQZaQrAVdNw5T",
  "key4": "hC5rppVhSrv1adxuPEDZ24m19b61tpxccsGCVeao1QvGxTTETrF1rK36ibdGWCzjonTfyTZMmFaPaoGwSxCqzAy",
  "key5": "2RqFkdHg5X8QkhLV3k2acHRrt54k6gZLY6aLUtVe3iGjaxqMKJrynYvJkhu9W4ESNNeJkL1XLBHRx3JynN3bXmhV",
  "key6": "5QL42zpBmi461kyBKyWaEUJKYGK68gsojpYmCZpHNGvusYNvgx9H6UtauJmNChkVMN3GVkLBczoCLagRaND61HUk",
  "key7": "2LRUYsuhHi3czv1CzXSf2NsjtJmwDCPB8YDzVn6peGuNixxstZvxuF9bamtLkBRuwnidmwcpT5RTWEjabB5MGrP2",
  "key8": "ec5TtPa97cTJqrnyquPtEkGotJDU9xLiYfdAxHtQeycbTxt5schicrgunorhJcmRnDA718uYqHw27C828uhia4T",
  "key9": "3SqywRQJ2JVgyTLnYhPX5rdB941rxdZjpb3LafWJ3Ad7TUy353fzBXmrgNssBRzjkVehZtXBxewoKA3ktUquzJ5D",
  "key10": "3mHSrf1RSL4ysxQjwe8hNB1aRNZNj9JWdF2C7KgeFNQHtgpnhUtrccYcGKXoFaYQX3uzTLm712XMu51TfQcXihVW",
  "key11": "49fUDd7DhHzHejfxpmP1DumBugT2oWtnMfCkdPDQ3YAQSrbVXSpKJUgijZ6dwfqyAFHJERiaXPo47Uk5Th3hpUWC",
  "key12": "3g5noz6TC3jnHr1kXeXHQpbUufFAqmBjLRtKCSHb3d5UehAk5pFMfvrkvUQiiiwKuqjY5CpKiS2LUNUyJ1bvNJUB",
  "key13": "5RsAgzseuCmVhgjK99x3TvMa88FEV6EvTLerQtjrAn4d6wJ1UwxZqmEuQT8BEXWAdgeqUYwz9W6h7fZ4As25QFCh",
  "key14": "59CtQFXcK5TZ4me85AuwnMW3HNbvqDkmgSsji7bPvrPkEwHEHd43s4xTePB69T9c4tes2acrDNuAKsN97Nyo2DSU",
  "key15": "5dqRieM6xABgjHLn19gNkqfT5kCWCdG43VuLfKcCSLA32saVt4wK93N3SkqRMukmZLm5mcHgo8jdeBjFeLw8riV1",
  "key16": "5Tj3cYZq8DZ4doup2Y8AzJmhrc4CTPFgJxbjY4dCd7FJt6sUHbxeegCoPia4ckHhzrmMuRK8pycgz2ApQtj2g5J6",
  "key17": "DAv16u25zgwuyBH3iiiEvG6Hx9ghfRYVaS8tmSKbeXQC6qatvrKCD82pKVHeWyjnHsFSMvrHz9nRYwHs9fEsvsT",
  "key18": "gpkAudZKsdovHdsTepw146QqsS69ypXWr2Ygza7TK38Z5VR8fYUXaPLbP6CtccQgv55XKRu44dYfEpRZj4VQL16",
  "key19": "4Jd9eYraHZ8aFjvKFSRzWFTwLnPgeTw87Z3kPnN2fxsfYHAwkqnkJf9x2FEeePsJXmnZAzQcXbUTpJuxUceZajAb",
  "key20": "2QjRjMC35GtTGtd3T1rwiQwwYiwmenGd58qydDjEUjU7XFw7qqi67mhcXyz6qFoN5MNvt2qU9QWwtaLR9tBNJ3fC",
  "key21": "5vy4cAzXdmjeM37eGKty12bLWSUQc2tndiw1EGDnAKoMtYkycG4zA4eJgs1BhDV3sbvz2yLPskCRCLn9HuKPWox",
  "key22": "2qB4Pnds2P9P6G9A4fbCncKwzh4BNrjxukDSgK4AYek6KS4jQihjMxZ6b5UkTSkpxMFYfvvh2R75tmemoHQbXM5k",
  "key23": "2LRsViXqQqqoP9Qyb97doTFyARN96DMiZvptGAej6v78k1LxzbZts1utxxZi8S76Li6uM8HyJBEv8Z8rrRF9XSgz",
  "key24": "381JJjDbu7PYNuDwDo2r6cMY2sPeMWmrJB2GDv1pakp2B6dmDYhECqDrYwM1566mVyxgv5ekMwcHnP8PEKsdNuvy",
  "key25": "E2mQvyA7eMwQa92wxkWa2pi2s2fJ3xVY5J5zvdK9ho1XGHG1RxtZtQU4tVtDuGPE5Rq2Dh7PnHKtTh6XmfFbyEk"
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
