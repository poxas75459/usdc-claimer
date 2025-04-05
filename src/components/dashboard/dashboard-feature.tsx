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
    "4FHTgPRADDjy9qzhtHZR8gDifnnYZC4wKqNpMeZ8yrPQNaA81zt16bvg5kefhUqGxxRDPWgKAMqmLvedqDXBYU6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYjQxLQC1S9zhbTMPoVMd2zwujN5egLSx7UWtdbzjJ6rf2SvFpLkb46SBjPd7dPxYJKkb4vPrHB35m7zzYxw49W",
  "key1": "2SaoRyxKzQZ5gbqMGeSRR3jitR8JgVbfF1B8bTyWosMhV8p8rPyZwDiw6nZxhBK4FrKDpG2bm5fjWJcThZm38FE3",
  "key2": "65S5gwec3ZHzn1RyEV6SDTNj8SPMms6rhPoWbc5w7usZeL4816FK2Xbv9JEiFqgHd1Pfmg4QJgPPCdHZeEytK78Z",
  "key3": "GFKYZyLcsPncyVj2JHtNyqsbcATEJXHuKj6WMBL5M9VYLsQhRun6o9Ep6WDo8Q5rSbKcVP9ZWYxzrQXMHs6Piiw",
  "key4": "4kzaE4KnDx5tn33ekJqrBFskRZksBJdsXdmkdWX2QntcVEzJZYRzueTfEVDUBcN2JnBNSQzXiY9bXHcFRrTH9TSW",
  "key5": "2GCSuWKb3ZcXeWnuJsje4XRZKFJqkj17VJ8jcXkJqY3LQQMYJUxp7xwAi4fqT1aV2wsktdujp5QettfnwFs6pMbq",
  "key6": "ds84Tpkp9Deo9sk3CFERbfwBW1G6H85NgrKscJ28Cc8HnbEn4Nz4Ptm9KYxwYN5yGRG13xLsBZbAh2KhbDZf1GL",
  "key7": "6yDEXGg6ae4Xw6C4SmcJUmmno9U8bv41tBknFAJKS86fbgPeZ28U2VxCdveKtK9repuJ48AjgDLdXHwfbbUySm6",
  "key8": "3BkXzfiVXUFrnDHfUJnP13RNeWKRjjVHT7LccNRkPQqj4apiK3rd8HXHcrepgQoU7Xu6pUyJfV5cBBHrTxerABeM",
  "key9": "35Pz75fMka1nCGFKbkmWAfryWQWaoptXQnrX3PyygJKbbePQe91mAMhP89esqFCrwcZL7DuLxJb2vXPRtG2jd1TW",
  "key10": "5yiNNs9pVVeF3HwPVNYymHMFHM38WDJXvZjcLHDpuwoZ9Qs6qzUD7se37VqHqCvpTdNKuQUxDKeaNf2SYFSxnFZx",
  "key11": "3k9Q1jZpeLBu529mnLEK4DnFfdk9XyRy839jXzyPaNmN9vPC17s6YVLkykMeAaCiNkPZtKWZFR8216Zfq1YBeovz",
  "key12": "5VVVfie5x9NqM2TbSQ9p94KubqxQZsjUPFRWgDE2DnJ6taNkY7UYbJisG1McRsJqLSDaCn5tmqNzQpD6FhrVeSJP",
  "key13": "411Bkf5yhtxv2ER7FiDNU2hdHhXvXMPpS49aQ5ks39ccs9mS6w5vGbGSsHnvsE8bZYHj28mT1quEWGQcVedPgENH",
  "key14": "5Ry4TLogzTm7cKg9om7uHvNiJwTq7sWLLsqr24yGCtNcpw7ZToxhLqDFaKabXTkzL2NunUD695MvH88bJVxUVQDr",
  "key15": "52WtxMniqYX5cG1Z8mai3U2B4TwdEGEtjKo3Jy67kUUo7yApHZBKUjHi1J8R2w4W7Mgsfs2Cua7fsvYa8yvJWncX",
  "key16": "2FsqHpZixgFV7L2mJiJo1hiRzwxG9egBnGD4z7dG3AGAkye3Qfyg3fBF5zShk56AW7bFPXsKJxaW1susZpjjF2cm",
  "key17": "2VfMHnKybKyLMZSAs4M3CPCjjXmsgxzCckSLs8KvNo4Q5WRknXqhP5nA3MePMJUaEERjRTEhRwprATUU64JgpF7c",
  "key18": "5wyhazmu81kfRadQutMcbsoPNpM8TGK1kyUEeDC5CaGaRLBLJ7pdkZzg5vN9tbMRuVcv3WiU9Jsw7UCg3HL6xS2V",
  "key19": "LkygsimXrwN3qXzCwXSXFTmn2Ybub9Hy4dCQNwAJysJ5LM3i4AVHMeWZhDXcYqLSqeCQ9BW9yGYG12GKr8Zznxj",
  "key20": "59vvZbTHvJBqMqGNm7TQJ7MfFdkVxTFueXtpMgMtJX13stn4nfY4SRBFWvZtLqYkVC3us15KvFC1wwDukxX4ucpb",
  "key21": "33d75TMcqBDjTAXePz89gJ7zcnraizMCBcWrX9KiAJiuxuN8tLFeXksto7MJzCtP4tRQKsYt129oKNTNRhhY5JDv",
  "key22": "W6ags6vrN4XgDvQyA3LxXgAPdrPmLRgQMy6PCnHLhdZs4iRNY6bXSiHcuxajakFqm7J5DDR11jCoWqXtCMGhkXT",
  "key23": "27c4nBgT3UDX8EzqqkB7RzaShYpaTysbbwXoVpEaxRkMF8CW3ikb4756qkMSESQVhVgzd1haR9jG48RdtFcyjRJv",
  "key24": "3cxAPLCrQZ7JvkBPBNcoFy1BEmbQ6mD88H6uRd1FJJohAsAcEXLPzxyBmvFN7M7MGaqFGeRJEUubEiZP84f8NGDc",
  "key25": "3Fnm1YWMXUdsBzwUMZUBdgWTkpxkgDUdujALePNk1QXHFxiaN78EeQ5KCeWG9b3WLbSzWWPtQ71C81nYxaeiS3Cv",
  "key26": "99Tix7RN7TDNTgJ5YGLd7NT9eGvE6S6GRnaBHYeYYfkRuVr8iM2Cfye3ac6KQhv3dR1AXj5STzMQvG4Bna931Um",
  "key27": "4mraT8RPvQYp4iibp6uA9kh8GqkJRticXcn46qBoqBGb8dWwo2oLkpJPtausHFBTzTzw56VdusYEmoVfrqTdjDLv",
  "key28": "2x9PZbZ4cpQSFcZsFZFRjVJ2JtjtS7yHynNSmHVByfsbNbPBs4xaGc4eapa7vM2pdUBp6RexzGKuij4kkBKsyPZ6",
  "key29": "3N3TE7AwzULXfPzwwV1kGjpL5mbrp1bTdUeNVt3AEK5qUfoT9EfkptP7mDCsBdMWwj8iDX1P9xGhPKa3QiJN8WRe",
  "key30": "6jhaxeMoQRjfLGk31YEJAPNRcpvfQPfPrQDvWDKkzS4ciqPnzcnKoMVrTrnvCfjBdkPadVWKoDNBBJCH3j8Vk1V",
  "key31": "2d6YSFSKL6Keneq9NbmYviz2p3UWfL2RC4Xqc9NJPEGvnFbV4UDfvxMFJuD1sjLeicn7VYbYe66baGP54vwNzRqD",
  "key32": "hk2g4aDpZuUsMvy1oDfnde9mteCMkzBPCwDADvjmQBa3xPyCGb4KkzZMFc4ppft9gEnLWkUsKRmemhMu1JGjEXA",
  "key33": "YX8TBkwDdAFjWfUx6grzsTqFvoCBC4G8Px2Kbgbzjj1eDieddMiaJ7sYDZbsd7TofywBJarsd4i4RD9qeeZWvXK",
  "key34": "4YFu54S3yESFBbqmFd8V4eAmvw1GZZWkUQspWRBQ2q3Rzpc7z3gfUSJZBcTV4qRky13McvKwFkcrtG3XwKjPCKbt",
  "key35": "wRRYr3CgqhsWUoqAiKx8xBMzbHSLq7WcJqdQfe6XLdEWUn6CoiKAVYGPaQ9bNojbwX2Uscu2X55T68A7jC9JocV",
  "key36": "2SLjBDFZejjawtFrb117Gc58QfZiSvtCDBxQ95Qg9gbeW2aEt7aMaEGYA91xwHrcuPrQAZn6f2KpmE4FQ8UuzXA",
  "key37": "3hRCgetLXY3vFBLZfpyivF66uQYQciqcqK3MgFVWtSmBtooLfUcqTn116RAyjWrUSMnPMDt4FG9s9SXeTwaUMn4x"
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
