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
    "5bkhBtDxtJHuFLTD1R7QxnZAzJAz9vzN7432j84Q9GddKBTPYrUPrLxrpw2ckUExC2ixgkTTKvi5kMD88EtPJsPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTa74ma1AHL2g8JqTQam5854ccwcboGYCZDd5GBnLRRENK9EJF5XD1pzWrXHtLM5ZfLfXSuaBZHcMbSye84Ehrh",
  "key1": "5ZYY2ix5UMSVNQqaNiq5CJ2f6QK5499GG9DsQa9XLBzkU9qxBkCSfWiMGRkAeVEZ1NRYZjqNYeTJjQ7jBNJXrg2y",
  "key2": "28qURpbmy6LgeEXjjaQadgomiSbcSbTFW5k9uqSgQNfkdaRcGWt8H2boRUrfxesDxwWQMZG366F25mb1NKznF6zi",
  "key3": "42dx2dnwhYNUjBvyhDGbjLQYuXgdSHxAyDMy3KA7ixqJMA3C25LmB3k2p1UtiSkRfHJPe3ktrsbRxitMkmwZQ78W",
  "key4": "kp8wxRuF8MbZefUXif5NNt2c6r6Z8zv87TkStZyC9WxSn5tf7gFhtuGA9c3jigEXuSgyq93e5FKscKgZA6BonSk",
  "key5": "5yyxATU46TiGUERc3Pwdrqzznoqn6mikUttYL7NDN6e5jgYwBNeQNMSr41JKL8oWRFp5F6bjA7j5r6tGebWo6DGD",
  "key6": "3mxzbQF2cUxCxctoXRwqpLf69PeiJkcYGqmUboqkGPNk7C1AGKr4DpUebmQyD63MfopNKDnbgKnKAcSKkvtfhuCL",
  "key7": "4XvHN4Vyy5m9jivDg2LkXDdWRzAFaSgmZPvS1sFjm66ptcYseycVZzfHHTc4jgA3knXvqAmVqYRuF6m5RxdZZ21Q",
  "key8": "3MfvZjnYZNAnZtZrd3CxnvPwAf87Pmd3o66nYhxrLWjFCPR8RJ49NR8rx7EsPSNWQMY66LCn12Q1BAJ7GbVM8qfp",
  "key9": "4XJqrQXUgZVLGm7DAdfKRsmKj1MnxS1NNxFbe3VsDmwesDbRJaMC3LAu3riaWaVGdKdNQypRLaWKLiSAS7K2LVw9",
  "key10": "46CVzJnTVVW9fi6gNRLGphLsKL9v8613C4NN7qt9CF5hR1QyM1ydmU78hYv2f3yv3vucQtK1Zryb3ndBXVUNEVyC",
  "key11": "3HoAGGv5PPYNoBgSzcUjUGQGZCPrQVWdHinCjxUP5VPDpH29VMQRT7VtuTmpPvvLyWxFBHVHJWTEFBYKBAWyzvDG",
  "key12": "2TBA7N4H617HqjA3TVPb4R6jwAzbCuPMhrWejW2wwgw4WbpJft8qGFHRBTTdZ1NxuZmLNs3J55sdhUuyqJqv51FE",
  "key13": "58oUaez3qQKVp4komWmykYtrup6RMidxjDA4tzjuvipz4UgkX5tqTWC8YN7EGLYeLdRtYGSYeAPviSNPh4f64CHt",
  "key14": "46qVJ8qBJ75oyZK3vqW8Qi9LitxoZmpKCGDXZVvUkvgmp7v2hZkLb3rKc5LnjJ836KQcub7DPW9TK6EGpcPm7aE6",
  "key15": "39AdV2miQZW4wwLNXuWEEpDcyHhBNHuZwqkEXVQmMnmdWEXJAbUSK9gAMwr11sQxzythpq4pF58GZar4XxY3bTYc",
  "key16": "2npNzabFm8eVgwXJgcHasH2CyRLgMbtZnuJNA3zzLb7bQ4nwY2TDgZzSiZY1x56crgyhEJAgPgFZREP9zdKA11Wq",
  "key17": "HXxbzgguFvjZ9GWWj5Nvvvp2dXa8RGrteXG8ZL4pCQjkVnDCsGQsU65pESnej2CKKySsgLK5HvD6GZEhbCG2L5F",
  "key18": "5rL9XNUQLMNVEjsdkFbZo4muNLE2Yd9txV6Gtor5R4XUb8e2Wjypu6GZXn84Bt5wEt8gsKBsMxUsjB3Pe5Wmt1bJ",
  "key19": "4vnwSSEV75eYaceHkfxkLPe25JwQxTVdfMAch1soMDJ5d8tDfAE8tSMi6XYuATK2a9nAvUCdnP9DMuramhnWjY58",
  "key20": "4Exoqro9MpjuTAr9tfhj3guq8mkMbCxv6xK9q5VJXj5u11TTmKqiZD9HyYpUYNy5fjrH9D6qproK1AvZcM3yxuRE",
  "key21": "4zLWrbvUxDZUPLdy4vQ2Lzp9FKT4fFvP6sjXPigQcEDzjzYjBHz6s7N29qhPV4Fva2TbReWfaN5wQgM8pLGVATKd",
  "key22": "4Fu6nSK8SrdTgEbCeUXFXrj86rw5NMm342VgD5mCogeAbM7sGFfwPKf92cCVz6Q5DhMFSs71b2e8u85Xwd96WXZn",
  "key23": "2X2Ee8mGJ9DeW7bevMShVts92dEAhwQtoAo5WMV5jZ8Z7LfD8k1xNTzon9p5ExLQWgFukNNeRqbUXCjPMtRUXTBc",
  "key24": "4EbXthwWHcWC5VQ5Xah6Y4U8VY2NgDKLii3KkRcEWtnHB59VB2t9QdFcTM9Jwgx4QHD5FdDMUucwJHGHpVaS95Wz",
  "key25": "Qnkb5FV5pUzWnAJFGr5cLBTeLHsZSpwZ8MiHwkPadCfEHgMpZEvCx99b4BjKb43jPLmtnTqHaLXLS9LVxEBPzfu",
  "key26": "4B4BnGSAitohXLdmBLq8M7FF3gv96E4xsBqRjWNMuqmBbaBakCXhL2vYnwAfnXoFAB2QNzsinq8yb1TapBZppr9S",
  "key27": "544chEYwwcxbqj9WwSHyHdpQB8eXMXJo6ndR4uuWLGLYcWwkNqugYrC2JcGeJLu4m5U2XqZmtTy2JKGjo9B1L48a",
  "key28": "5jiNDssne2XPkN2kAf6bcaYEEombDh9YCenU4qPMnLBMMnZunvRs99EgiKszHdFuAMWnaVRL7q47RxT1pPjtJ8hs",
  "key29": "23G4BHikWdJFe7TMf7QZQJAzHnDod8jm5waXBsK3MxYGgwK3mdcHoxnSZAhQKXR4JURSCoxFPuZrZ2fvcA82p9i9",
  "key30": "4mAKGEWTJq1bR9jKs8rYrB1STgc2W3BsUk2Zi1kNsa42E7TubRxAgkBAbt77qFSp1WVb66sEFPXE2p9aoaQXL2TA",
  "key31": "3gQ9reV8ND75Vg1WGizKBUq4xP2MSkGLYvembBPwDMHzr7krE9XQqK5VFZNaRzggAWj3qAJXtU4RmTQKE1i3cvTo",
  "key32": "3EpWENKFTyQA8veS8mJbu1qAvmWU3esNzTvTvjk2XjcXDvFt9qvhqxKUKd4CD9w7mtpSJvbsr4u4VRvrD2QcUXJg",
  "key33": "4GH1vQMX3RYsXBH3aQLcoNgwSgpYp7VTdPrpNG72Ex8ddHnNo7wxMqD8q8kyRZRqfm7ZwSZnCBD3NAdfG2gXFrb3",
  "key34": "4ECVbjyMYeqnqzotxK2sjwWpuZrXaYzfJKaWkHLmHejUPAnP7SLhnhuuh7aAJChForBoH1fNamvAoAzmdcbRqDg7",
  "key35": "5JWCxhriNHRVRvRHHm61tKEN9GomBwCS5G4zzrY2L8qciidw2V2yg7RTFewLwqfynwKL9MBFgt5CmLT7fd444EVs",
  "key36": "5JYu9McX6RSyerYthEZ5roGGSnGFFBUytFa32iq8BrVAC4Do99usXXLRfkzpRThd7mY3tvgVzutwFajoinMCUkUD",
  "key37": "5UW6NPLJ4U2px1usYNADUneqWEGdZhsyEUr5MPBcsfmK3rQAo2Bf2nPezxniUuLGvPdu8LFmTQKtGKnJ7wDQmnZN"
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
