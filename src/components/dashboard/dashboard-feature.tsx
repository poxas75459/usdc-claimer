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
    "2HA2U378au7KLhpoLW1pagg3MWtsoR8GMP9nHqqucy2JHVwjfap2Zp1BLNmLwuBds5zfS3YYevYbpo2NPuj8EbWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5jA5g4PuP5tnaHhjcCgTRQXhDXMFVZyNhLwT4qXix5McvWPFrWyxhh4Uj552t3mRZ61DLpAKeGwK8WTd9EMh9e",
  "key1": "4DqWEKfWaz4gbDaTB3z8UqV6fkSGw31i42p1F2jhc25mpWoVLAVdVLSXtyLwB61AY87PEqfhwt9ecJUR4fgAUncA",
  "key2": "EA5LXDKyG9rmrLL5aCuiskp9q6Sg2NRsdick7TnAbsH7UGbfW1FBzeAznkxPKoVN8QodGkgBpYYSRkA44GxXcne",
  "key3": "gspcMwVLGoAikHNfBeL9emFLJbB7E6QXj5TKXrMTaN3parWRwro2QrSNW51f1GyAw1VoQTXFLbojTXNTVrP8vjN",
  "key4": "4RdRXnBmJgWYLWqkNTXs6Qhxjv3ZBnn2ntPgFa4MCK6RHGhezdmoPypNymkgpvzmfvCR8TvUUK7FBbtmGUZkxFBu",
  "key5": "3DzTQXMpDuNdhNPdvvbZkjqZShdyDjPFjUJ2T28LaPcfBoLyYjEp5VcRPH7Xq4vhkDWn9FLB5vt15NSvZnyGCRAu",
  "key6": "fswNesfW8y5ikF5FV4eF5swwTEJ151zpPA189jKTQ4dweQ21M5nKPwfcLqAKziDt3ZYHFY46hk8NpG2KMtBPnH2",
  "key7": "oZPV8tdSyTQGVKEqFUWyDoMD19ek2SAj9BcXWWFyNLnHuSPJYGxUjEVGu5ygTTfreYpiUWJTQgevNtpuC1U3XzP",
  "key8": "5kcbVRstBGHDuVknYonSaH3wpeyuNju1SGnhhVuaozRVSHoQLQj1uPpVraKcPiCeFT7fPYixyc2HgmatH1xeyvhj",
  "key9": "4LzncKPEWuPP8igr9vh2ZAssJBQHKGKswwbPfXA1N2B7W6Hh6cPyNjyNJp4SLR4gQDvY8GjmYtGNx9t7Pcrm9e2r",
  "key10": "28pzhJHaiyDJu3D1ZpyzyFsrnynW9wowQzqhF1sTrt2WbsvwTryZuyBmAzyqknHXarXYDmTLNLBQiGxE3bpFVdTS",
  "key11": "323Dw5sun2RKSodSeMHR19vMgTNCzt5SdX8LttMHDZUaHTHph8uTy4Yi2o4HBfgvH9Fywp86bTaBq8JgVKkrU3rR",
  "key12": "46QzfN8DXsbw5Pr2HxzX9pYFSVrEpZJdmsbcdsgy2HEqZmPAxNZv7Vxse5XvKPqeCTZSa9gvaWn1115stC8Yuatm",
  "key13": "5gqyKJ9ehtN2mMAowbdUndGjVmFzJNtoYcoaCxaUerZtfitPnpEBTpwrsCPT6tU5zrZSAxk7z4L6sas6hnrFFHnZ",
  "key14": "3rnvuXFnz9vJU1V7fZvsxf8oxbedjxpGdGcPU6XmEt3W2KBhagCfKdwNbL5yWtbD7FhX8SFQwbqzCxq4eijqnB2y",
  "key15": "5Yb4F8LY2rsjXehd9YSLjuJzX7ZJfiVt4TfrjQ5bVKZbzwtR9V5E2Ta5M2R4iEJyQCpKsNHr7M5CYjm1vJh8h9BJ",
  "key16": "33z8vnfnUtE1mcdnDeQim4LSbRE3FWcyAFWWrfeUbLd5x931WPPAFdytLFDVv9kM6JZza7UPyZoLgZfEaPUx7ywF",
  "key17": "xyi2YLrhRju1TaKyf5TNUxXFsMyjzLskNx9Af5jD4S3Rtsm3X4eEfQGvummLakgThcNq6RLYbXpREWQGoCUeHzh",
  "key18": "2mn3h8DGQppqvN4PUkx2eKENmxa6X49qwPM1Cof6hbLeqgtTEJvfSXg2hpHnZYoZ7HemTr2q5qzsEjhH3UiUsbRf",
  "key19": "4hruyN1GofwoQWPmEhCiXVMjAapJsD7KyyzFps5r1GjXoMonipwJLsGmPQNoPZ8LEUrcosybcXomnJE1Ry2wT7fN",
  "key20": "2GnPj5aTRKifc6GHFCJwTzch17JxEaBdcDSCMpHEv6P78BR7fWR5XgMhp4AwEHmGJrkuVa1UNmhjUSnWj6RuFBSL",
  "key21": "5K8FVUmfzFDyvTZTtVACr66NXQp2TtgdEyZ9Zmy2CR7n58KBKKmY4PSiKRGVSE9yss6aewvPygdp6ESRmiGwVg8H",
  "key22": "3nCYz7jRabFJHKvBdKYGhSQgb8Zo46Q3m88kMkx55xnGviuc1TX64NUKkWhN9Uz1syz2Xp1Nd7ZYa3DuSz1EmxXv",
  "key23": "5tT2sbbXyotnccfoWkMiQtHJrA33Gx7ZPHdV687XDAaff873itYSYN2jZ1xBvXToSpq53itBxPTfofq5Dk7tA8mi",
  "key24": "3mNCb36Vkm64xZQwnTjSyUC1RGUDV3F1K7pZEgr2anVw7A12uLTzYTkUYsMMyckXMvTKkZpQZP4D14pN4N3hBhqV",
  "key25": "4FstzK5mSvddVNAgV7o4Su5HXzMM8rXkhXRSXervvfHpsRMsENe7o5AinFTJjQaM71iCAoiENdPz7bMFC8upuW4x"
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
