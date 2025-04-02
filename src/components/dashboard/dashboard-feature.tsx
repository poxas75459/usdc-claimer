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
    "SCXC8V9ZbcmJAjtyQZ6uSgDjCg84kRbZNAsn8MgkV9QybtFdtpa33DfxVEWeaNTJWkNNsDM1qAnMcTUSvxxLPCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psYvb35ZFp1USYFvxbGaXvchdnZ4vontpNisR9dSiN5p8gN15QfbLfnePAuJxr1XtMQ3Se7us3yXsLTzZEbaDuQ",
  "key1": "2rb1gucfEkuiDVoVtwx9ib4uHKPVW3rhHQCYibQDv6iLo6hLLZkZEhsULvD1QDRtnUkJrgsDGF7VBqPYxD7Q74kg",
  "key2": "PN23DX5yvjxz17hXsc2RoFEujB7EiF5m9tvPyWLh7ifcnk6i5efETtojoAMfpvF5nukpWerfMp7qDABWQWfVYfb",
  "key3": "4XxiurxvTyWRrxqoe5jaamrDtGuAZriJcZWA2nohirCfNmCZy89nPeEHNjiuEiHSTti2mHWqLUW1fVp4dmmkjwJ7",
  "key4": "4w6sjzAjzca5Ubm8xW24Wvfy52QpWwHgVTFS1pkGKgyNSboEpEJKQtvnfgmYr1pZzttx11nPNfft9rEAs19n3kU9",
  "key5": "5VbAUfNhFyBSq6uPive1HPvHt5D2bsi3vL35g2YNoZ7dv4NXQJnSpXRQ9Xyyv15hCYwSSmEKZXG8RFcbfAqvWtPY",
  "key6": "FjpjWtSrSZpBvBiiF3KpsWNRbKU211LFNE6omZeSuACVvs1nDhkrChcQyWvUEDcswDcjegkoj3EhtvxfinYcxsf",
  "key7": "Mb4xrJsdkEvCzTz3dvXLpkevg771pbGFdATJi4nitDmDorsYdA42oY56ooc5w9Bk2AjTPvbsnUkjDGuo7hkPAZf",
  "key8": "572ZK8hmPq8Yc1jGdHGsGK5LaakK5zyyt8fUaxGfxcSiU9qLWw29H87tLzpQKERPMAxu8ghwwxzMtDXdzzwNHNNw",
  "key9": "5tJQM6JxR5jiUh6TuerQdxM9Cn1mSCe74auwnR1p6jVANnT3eFbP6fpB59PtrzVRnZnqLBGnB86ZgLvSGuqMNHvN",
  "key10": "4PKhdE9jrL5qyxdQBi2KyAxo1PAycbopMyeUy8mWtMDSuBrGR1ZKqjLgijPGchwDkc8ts659NwVTzxTMU6vQm9MX",
  "key11": "5mEZQE2hMnRwY3XdUeULgkHqVJaPAQoStMaUwUkGGT9Jakx8LXWHZB9KftNpbE5tv1uJMwBaoNHG4Tgm2PhCWa7F",
  "key12": "qrVfRw1NgxwzrAbJKWQfN3Ghxw9kcg8QPWB1jB9QovdQkZspsz7vz1hbsf2S8GioCdDQW3HGnxS9G1NpDfaucT7",
  "key13": "3W8LkVUMkBMFSyafsxTfiiTZY2ckkSUA7Pr8cP31NBH7MHmS21NbeYuryEaJYJtvv3okprPwt1SCxBVSkGdCtTTk",
  "key14": "4rNMfYH5UbhSNcSbrYD55ztDBT3FW6EDh6CUMmDQ5rH1KZkobr57mPub9bBP73b3SYfNJmnUmmyUvAxFCJ5pjyrx",
  "key15": "udaeJBybRBKNitwJTzHfXqk4nMeEonYxRRQrzbsPywqfCwHDVTuEdXhn7iF7kUHTF85KwfGPhtjRvSVUT5phpbi",
  "key16": "41VBhfExarEgW4E4okMc8V9PYKDu6HtGNH5hLhaWGDygey3iqw3gewjKtj2QDU3hA2SrmNbH3X3iFxJwVpTX6ZeB",
  "key17": "Yo2LJajEkGwD97mXMaqLCUbXmEJLkroJFvtTmnDj9tceTEtTLNLUXoPBVMyLayZr6ZMkQG1x4f58ebTaPCWgooC",
  "key18": "3TPgbZiECNT9VBXW4kxJ2zuTkHKNzKKWea1ioY5MeKHtof8DkmUsAzcdWLejNUKiRp9EdV3rp393JKuaGUvXfkAB",
  "key19": "5mGh3EiQ2NQ8U9Xj8Z4TahywyuuQxcfMpPKapM3eY4oDso253kxeDvn6m9aBTVPgoLQSQA2wfkf9GgATkrw3Wc3k",
  "key20": "2SpeNjLQ2USaTU8jbXMwADyNnSR1vtAiwntgR5iGrMnjUUi3s9Zb1dsWwF6LDWSUFxiddoVjw82GXujDokm4yPvQ",
  "key21": "56mjf9ugDbK21sj1aVDgD6DwHfJo2Q4W42Uts13QWBVTtmY88aKJN61n2PS2kMpyH3ChKZsHRErzUYKmXzuL8VDb",
  "key22": "5Sv4GNebnj65AARUXwJDtw7bNDLgJaqhKyrYwfi2JmXfJWPuc5MpbbQ9C4UZrQ5gH7wfBVJnLEHzP37WDj9DW8GE",
  "key23": "2GhAmrXM6avSwpekTiSeCTNcWsiLizZmNTwrABmEB2SzXqFRfJ5kxe7TNzCvNnG4urHJbhkJBVftAsLxW25LiEN6",
  "key24": "4Z3EGojK5reyqnGDNts4CFDePth74XwsMbGkY8g7FQHXnqkZjyVJqRpFXcwsd5SciTyGiEvdLfESqWaTrqtA4mmY",
  "key25": "5LHXTnwcf5shWXFocc3Vke3MsGrTuNK7aVZ7Mgsc9nshfyNv99BCRz9BbbwkjDTU946axyB34YvePGwYtygtJ2a7",
  "key26": "2g2gBtTFB7xt4wD1gTPML4oQVmDKVVwbGDBxWKNR99wknpBncKUkgXRk9JZ2bDVHwu3p9bwtQA5enGdgr1bj3qx9",
  "key27": "13C6aFvuExL6NBFw5pkN62s3uyRRmYN587D2EM9rrqehSGSmix9p176FkE318DNfNmucQLgmGmb9UjKMF2bHf6T",
  "key28": "4bwvrEguc7uSG7geP9S2mBmyEXm2LVmUqSPGAfpDWWQpyJjQx4CLbj5MmRyN9wCxHwzJkZ8scawHTZNE3erYQrEN",
  "key29": "3p3a5XCARsvgkQAGkLE8ca42VJa2YAmqAnCWnUwK6aDVPPF1PGZv7PGTWeaWPnAAFxEQbPbQyX6ZDQjUAq2ZSEVP",
  "key30": "3o4FsApxv7J2yxyTa4wtMuVUzXobtrerWcMYA8NMbfGQaYbvdK8Q4H3pAzVtqL5sjBpq3kHYbegbSkTDdbWyB6qu",
  "key31": "3FYLj7TYGMRiJ2z4XxwBeVJJFWVCtKL4GhjVyJAS6FbUQwtSfmcJY9UGD4kBVPFgrK4P2sbpyEN3eBBKDJb7DEqE",
  "key32": "RPuyhdu59yZkfD8h1q4LMRxp4zNCk1mDadCWwW5E5Jfq8DeHojztirU5Rd5v64XVoSBTePwqakBU2kSc83SGbRA",
  "key33": "j4mo3PXmeqdfLzG7fh9N3kNHxgHcmehPi9gcK3HT6tDm3bqLp8TqPUcKTL9cjTq1oEL5KHmvBGLziJD3JeRfKnW",
  "key34": "325rKxccUTVeo1pGeim1HxVjLFfeUJryFGwE7VWu1KrVX5zhZAx5QSsLSuPvt474bKnbKwDG19B133XyJH6nX7UR",
  "key35": "2AA7mhmkHfLH61mixJ5GQ5jg8t4ZbANL84SYAoryt8ruM5FTDR1kmB3B2xjPsG4G5F3pQW6YysH1gaWZvXh7uokx",
  "key36": "swnLRzy2iV6xdEPAkmWQhp3hUetvWHWBHckjTVTBRUE8dBUfvbd3SbJvM5KGXaXqND42HdDFu2tNR22h148QZsR",
  "key37": "5j6UUEujSjRCE2F3Cwe6qjpsVEcz52GHRqnpGwXmHtFJtKK7zmECC1QRM5vNdFjRktx6ML75S1BtbcNWB9kktQp6",
  "key38": "3pYj69D3vnFF9exobC5sfJPRMCJLN7XYaRGydmGCwQbMVY4oyud9v3XLVHnjtyGzXFwgbkYxXSnAAxC9rpyXKJtu",
  "key39": "27gj6LakFTWhus7dTAy3ixyLA6aTqLdQH8HSvgFH2NyQqiY8pcyGadcd3CuzY8sQeuVa7BxLL6ChMarFyorqULW7",
  "key40": "K3EMwmsboSDsNxBCEwwzC685XP4VV1UwEAuho8RZtHbrLcaHPwxQ5pEo89n3Cyn782L7dx8PoZjYSMauCTYx8to",
  "key41": "vSESYT5fiAd1xYfojMNvDzNgdcvURTEroDeFgS7DbqWHU9A2Ws2Hu6JykaaV8qWyt8gihB2BToVEtim2gtVoyox",
  "key42": "cQSvxnfECrwKLPrV62vvE29LAFDReMQoMc8vsHo87AmcKnnbF1sGyArjSDLFXxtXu7k1k84whjh7bdRcVvpRUuu",
  "key43": "2635zpUWFFqHNpEFKKaDzcrAcWbg7v56J6XZFGqM51XA8t4myHFJ7mMvvKL4mAi4Yf5dd1v8H5x9pEqSh1zJTzvy"
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
