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
    "34hBWD9Ffs3iwnbKyko278szym59kKxFVzAZCtSHGZq3cbe4W9gecDjmfjU6VQ5VFviLVvCmS6zAykoHWKxxZs3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "haycViE175gGVzG5Xb2ELUzaMWnHvhccuNLJDutEFYm9qLuDEy35jSF2Mb2p9u5Bvi14yGadYfbywWA6439fkbE",
  "key1": "2Y9QLqLvGavitoXUNUFonhcUaG5ghzzX1hbCL7wxRweRM63iK2GD3WKVkhnD3oUWvMVum3eXmsPvdp4PDR4UiHHo",
  "key2": "388XWTk4hNzUa7hKCNAZd9dZxTUSqtVfrBS2iX2SdXTPDhvdeKiv8mg5j26xfXmrZxkG4Uq24V1MgryEpDT66UCV",
  "key3": "3ih3PfrPghXPYuhdsfm7uW3pmErBgmfLHry7dQ1hHj4CK6QGmKrYif1sGZe5PRe54S228cxH6Em7yzfPA4RoaeFi",
  "key4": "4pQCqDhSmissrtadUPWbaiXhwWXKiv28qhWubNyKzAoA1FMUrd1JdkTpgY4hP7RaiFQSc5abgYYmz35M5AMM5RnX",
  "key5": "3ko3tcGGCAXyntKHKNXSh8XUTtBKRvwpmSGMoLSaNGXKfp5NSjD9KRutBzRBX1KnsW78FFernG8zGrXJ1SZ3uP9f",
  "key6": "iRszFZssCBZLUoYc74PFc6ZWvjzen2rdNJRABLRnkuSDWx5t5zStp6jx6ne8f8F9LKUvBesAZp3iT9NTZ4b4JQs",
  "key7": "2KK2fPReopAMtKGJ1oHVHpbJWkB8aW3mvQNZYW4BzqXorUNpuqb9oRoK8tamZM94gRiptRuiwoV1vcVkmZWkQF5v",
  "key8": "NHFe58no3QpAw2mWWcxJtRavdRFctos98F5tjoNnkYyBKtVM2vxytDdWQGznFpoPQbkewywkVVTk3H6y4LAoZ16",
  "key9": "pk3APQ2F8CJNT45HQdJh2EH5PkEEJcvfPbxvWuQUnw3vpGYwgCRZY7WNFf7cjb9FXdqEzqWJ7B5N88uLJnmiVuz",
  "key10": "5qQt4i6HY4QeUf8upsXX3TuwQNDXdYehBUS4FbuJs494VcVRvUWUNBC2VB286UswfGigqvH6uw8R3Crmue8T7VTN",
  "key11": "4C44yKFHSSsicjLDDHUyFDxbmAGx45uopEXiZApy6kghu2NveTYGLMcXugQVKC3di6zdZLyiZVJvEGN1Q76cqxW2",
  "key12": "3GphQuD2PDHU2RkXoETgFGA5TSx4dPgkYopDkhjaT6MY25npzDB19qWfTYrCGQtF39oGXqmyfs7Ysd2rDnSPi9zG",
  "key13": "2ANrDo5nzzKc3zw4JNskm44v2G2zuWnVzo2z7c7j81JewZDpWRdy88cQYfGRJLs67XmLLP3joXim56cLJNDM5pdZ",
  "key14": "5CdEUuWF7JnueQDcN2AX3L6CUZnN3451x3B2dNLpE1Y9r1UX7HGy3q4H2L1PnhiCJNeLXd2kPo6QnU8Hnjdokoh",
  "key15": "2YuAp7u51bQ55NYHX9aQNcopTL31yEKTxRg4KeQcFawRLy8xvHD6SduQBcHTGU9rphGYW2ewp4oc7L2P4UQnpgoN",
  "key16": "4mqKDSaW5JifQsdGmBH3NuXqvotmbg2WrpTQM8gcecARB3EAF9F75HigcuepRVPs7YtcszXtZJkAnu9ZeEUmSjDq",
  "key17": "4BrpqUdGD38xyPJraHW6EhQGwRM8mHJ1i3PZ91Dkxw9pkF3nE9ysX28AnbJpWpW3GY7YR2TMmMGTTWccRoxVZmVu",
  "key18": "2B54FFQfST6K82My3sN1CafQyqLQDCbkBZwAR2ex3M74xgWrujkYsajvob82a18bkVD5Q6A7xeezKw5sg6vvFrJD",
  "key19": "499q2gMhft34wa9xq652fXXXCa77tupjUcvmj3XgQdQHrQ9q1RM6tN3dk2YbHSBWAaLGJ2PJc4Y44Buw2eVyiPM3",
  "key20": "3pRuns3VqSy9Sj4ci4vm6NWqRi34TjosouL8krsjmLeE3pXjZqbqo9MTsiKZxS7ZHE46HGnF5SyeBF3Lh2DYiZMp",
  "key21": "2qT19TqHFLSKCgwFL8ECW7KcAd7bAVoaaH1tsSqPfz9AFHfV7LRq5uHnAoQCz5JeWsVaguAB5WjdyyNaH3U3kLcZ",
  "key22": "4AWRbGaUjM1Q9sKQ4YE3PGSPDBrqQF92aDR3LqY3fTUUsxjWMazd5TmdNEkbJB7QtGocmhjF7gw4eDXzFkjXFWXD",
  "key23": "5dZP7R5T9ffgyW4C8eL6dJzU8bWq7VA3JxjrtadgZCpkBMYpQ1PfSFakQGgvSBVuyFHepsjWkkQAoa6Apk7oTWtR",
  "key24": "gjvoFSAtphPqQc47L5Y6qbWLFVVReaDsNqhaG2Mx1qSH6H7yk4DRmnioQSzHqzdsjMG8CPJdbmemwt6fnLTcGzo",
  "key25": "5kBRHQKa7XyrEJVe4eK8D633Vq92Ywju9jQaqADAZaJPA2ZQC5KxzeB96eBxsZETMdAJN9gz3qN6uR8Jizyu3Xbw",
  "key26": "4ct1m7L9jAVmdFR2wnitdPG1oRgjgQrXoKPckCXJYzAKiqLEobSQbgmVyT2tGNyhfHqEZVzRxKmkRQW6N72Rcrc3"
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
