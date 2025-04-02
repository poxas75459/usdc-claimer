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
    "5Vx5LasU992VBQRLikEzdQvwhGr5K2ia6XE2j7GGu4k9WSwEvobzH9V8YkrCQKEQ4bdARJMrV4Hm7MrFvVZ8EbNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sijpNT7jzQbkgE7Wt2GK7wX2pqjp7yZ8P8iTwJLcyj69yTBbbpfZzMrGNjJd29F6XANafRbxNj6tu8XtmzTxUWo",
  "key1": "4rmcc9jwLXeomAY5Z8w55QKeRWxMGgCimhS2XheAhFseeJ6cqphF7BdUBmJsfwErtD5yza73xfDZ7RBk2Vo7RuyU",
  "key2": "5HUCZ9W1vxGRVmRPiDZhFModxL3zQBH3NK7inboPaDZegJiE9cQvYoNaTf6SVRkxMksPpccDhbQqtR5hapoC8gVZ",
  "key3": "3f3DtpViGcbset6JnoPiCbNt9wy1rA6Vz61DESLHj9S4YGeeHK9iKc3vSdKsjmye5DhdhLLv7JQYYKwKVFQTbGif",
  "key4": "2Xn2nEdRk6MHbyTPBC3tTagxo8xcsmZSCUQj4MxMvnPDJkKYBv2baM3dMeJjGRrwoS8N3G3oRJyQGuDfqZQY4bai",
  "key5": "5QzRgQCBUBa8a37nfSr24bFcxADjU19WdkDVqk5wh5bVTyxQp6zkJHCzemByA4FphB1ng9BAvcMa3oZVta3Li2S1",
  "key6": "2XtH2CqqFDQE2QqXj2ytxShUC6afQb762uU3qtMRSukWoN4vtYrYfEP3qgPuQmUEW4GXjppS8ohbX5hfjEZLdg5V",
  "key7": "3YbnzsNS6siaCyUp3o54mFiSU7cPCHsBR5ewbtBtZ8bNxTvE6sk9fUXjDApZzj6VuKmdTxsyzYn1se54SFNLYDLr",
  "key8": "a5iYxrcgKoRDm4DQvU9c47PrrYZngMHxiwwT333jtRYcYi14myoyrR5kHC4o4WuM6rAdvo34q4RscgZUg1fwBe4",
  "key9": "5LtTjr6rCtsaDc2w9wRhKdyLwhJCVhrB4RqVwQnoN5kPiTapMZcwp724izwZug7FXk4ox1j67jW3JpLqXbwfB1MU",
  "key10": "2iJMXUzi8nBorTtrHjrvL3V6xm3hsFwfbktJSwNE6PTXpqHJe85rnUQfRufNJCeCWzcXyRdg3eUFiJicyFFnwPez",
  "key11": "58NgD3v9F3h8d9T3r7qK2nQg81MpFgeyXTChLVivJYbFjBW7oXFErMMPcNCBXtc3vWNtWZ5jb8aqubpaEC3a8Y6U",
  "key12": "33ptMuRhF5s3edY88T38GGaBP3Fg4zRp7ibvMvGyMeargpiyoEUxj2a96PLU6j67jPkcpEY6PPYRKVvVqRFUgEXS",
  "key13": "m5kxsi9pAfxCQQvimLs4Azm36dV1Fe5GesWWA5m1qx49PgyHbqD1ecrdQmjJdTfBuPrJXSPpwUF3QqF4zweZJpd",
  "key14": "2Ry65WL6GdJMgrqjZhasfsh8mg8UwXDsoNREtGbz2YnnvHqPg4QJQ6RCGw8PpLPBPxv5BVbX1dWX42SYRRhAQ1eL",
  "key15": "2Kq59M4ZcPWoL7HLwDASSQnuYAhb6LYTz6b5oc1wDiMMygLY1YtNLTp3BBdKHiXaM3KBAekiq4tk1ZiaxQyENnSt",
  "key16": "XszmGfb2zn9tV7v7LzSg6zFNcSyjKxowTnNovNyEZd6yjLJBgdrt74nrhQEdhDr2pPwjcbfbugR7MboPDzq9iZd",
  "key17": "2Yxmk84ex2HGyPNB54b63f5nQdAi9QvyL2DWLtRi3Q1NSTJ33maJP1M2s9VyWASzTQC6TkDSS1jUHnnhtJwiFKjE",
  "key18": "HPJm3HwYBBntw51qjPpmLCjM6dzjBE9n6z5TtR9LTTWgyWeUyx1iZybWxZ1ihUCane7mY5wRkv6dAGXaV94X9FK",
  "key19": "4wR7KTVG8cF1wX152qPz26DxS2i1CSaotsvwmH3Xyp4Zw3VqTVTTAR1Fn52ppFFCfkQ8eMgt4wBnEHtQwxETV87P",
  "key20": "4YSysoicTfYxKC48RdT8rYTH27cGKBjxYtXGjDuJxcaNWYtJ5LSURpnUjvHmuR82GFWeiz7uj2XQqYDzzAA64cb8",
  "key21": "3uR4BypQAE9aikSy48Pc46P4iuMC5LUASyuS4v3DZRArhfjgHvLU77mb4Fb9L9R5jFFu9WhrVgRvHETtp7vBfFKu",
  "key22": "t3LnxT3aSpDzG3r37Tq8NngyK8hs7s83vXRRkTrmS8YLech1RK9S82zSrTZTs7Ywyqd21NDcMtKTqqVar8W3A2H",
  "key23": "bEoNfY1eVZJCqPuxmmbntKdtPpLGLTSmFYKcPmxFG1ynA8ffAHUsVmgRapRGeNDPBiSzAmhxf6WRvpqN592FdNo",
  "key24": "4SARFRpNYb1A21cYGqnAy1UbagEv4dUVybfLQ4RtVRgPwbNRiUvVfHHPWei9s65XQk2bJmp2LevnrL1qz2p2GcGw",
  "key25": "AbkF7QtWW78kwLos2DARs2XgGGFw6VNrFfLRfjxeQDDwSnnG8qhWTVydnj3uUaeDCF2aQCFuBMSjLFZyve2Y1wN",
  "key26": "3YqQSj18uXbH84SdhKJ5GCCmXuVnzFckF7tkLLAMZMGJuyGBMkjWTqh5XQGmp1bJp1FK2DXMyY1jehoKjg5tk8bJ",
  "key27": "3pgo6yYH2E5yy7H2LdprS75jKbFpzfFNzhs9jpUprxmYyMwrdwz8WzkdZqVZb1MPrKC4Zbq4tv1pwBELafQobSkb",
  "key28": "fc5dztFo5rF6WwVpaYRuJfrP6vNYkZYJEcMav89zmL43Av8oKCjCk7MKqZCgTNyp3N5yUPqA4XwE8ATPNtdsohn",
  "key29": "2pYJMUgPaCCfi8fPAN5VdQ66mzYE19Dfw1SfyUkqnzWANYCFbdNMvE3AwNbppZ4By5Bbb3rUZajsmT9s4Ztq7TBt",
  "key30": "4DnJN8Dh2TTVic1XVfWMDU9rzBk5FahEJmALPg9SEVdPRFBbMnTWr5zAiR82FvTy6gn8obb9ndGPh9s9yAPJbaco",
  "key31": "3Caacw8cLwPhpuRjXcBsdmP4vKgENqF3WFMvWTBUXXgheqFyr5uvPMBvrC5zEewUyVmn8XAdRWQ9wCB3UvzQWDHp",
  "key32": "2EFJLodPudHVEFhWTGX2av4w5n4QZWnW8f4cFHET5cTChnivUYNA2nVxhLugxFJndAyzAsGsCGcf9jTNJiSbBX8k",
  "key33": "5jrp2EJ1PsU7NWqBn8fotosf2bEe3cD1QYXyuLrnESaRx69Y3m9VLRz9SC5zg6AZZVag6kLc9nm26jntU3SCTc3y",
  "key34": "5GGw4ASgZ8tUJDViX4GYQskQdTnhZFf2bzrUVg6CujqrEion61NhwgqfCe3B5SafS5nQoi7aqdaEekdU9CdyKo8F",
  "key35": "4tefNdgZ1UhRGp2t2zNY3FQQioZ5dt5Zm5th3xce1W1nyDS7EBN6jvxVgeDj38iFySSpaEvCPDoy9iBiDYFdbC9n",
  "key36": "58nRxE8guHWbLStrSHviMjga3DLA2omYeiJSxvEXLQar3bZDjNt22GneStV2VMuEtEhU5JKXnwzfSD7gnkSadUAa",
  "key37": "47uTkVCcG41nToHtjhpzb5JJa71zJtWyt5JwSKfUHYJ2wqMfoPu4eMb4Z2dthGguLRxkKatUji2vwfx9ixAqRL4u",
  "key38": "zithU2CFfmieF9sHku1VRWfdb945QShD8CxJbneMdm8esYPh9x6XcuJbE3Woz1YAtCX4ekRZcWvCh5Bx5R3KBDD",
  "key39": "2PUEMsgRXdPKacrhThinHTkvWBmFjHkDtjD4dEGnBtbs2SsZbpfTqtckiXSj9um56rSKDjehQKH2RQNaavVGV3RU",
  "key40": "5ZdriRf9b5n5U4qS6tc9GKsPqLXYwTbfQZSR6aQeeapEkeW7WaPVYF8wde1Z5RwLGP4RqfjHe1UsLZhfz3ntka9p"
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
