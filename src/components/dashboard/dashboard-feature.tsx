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
    "5aiH3jSgp4hpNj6EaQESpaVW74h4qWXqK1YpvFLsFi2SMGz7vtgd4YW4jWpSLk3N4pvpkoBMveMQi8KpUW5nFoh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQrzMGVJhthgsXdWXky65TGPxamJTuxEn6MQKqxN4et85iCH9gYcYfkjLMicXGjdWcqhh2VcEpkhHXFPnAnvGd8",
  "key1": "JXNKwtWxCJfSDsJYoiXseU6xZBcaP1Rf58cdvwUb5pP3qPV9k96FbG4xSZWxx7ip4WPRgs4wXKDppe7qBaZ8FmF",
  "key2": "4hSUVGXhLtywQaxErwvYitxbNjbZfGMZ9cZdD4cBQFyjVsAKkPrxuX9uM5YWQ8XYScysvRJXZTvMzXg3bqov6iHd",
  "key3": "5pbCSeiKsoWdVKrSrMfqmsnx8BVdmkVJHazHoi5eNkSXbvgj943oMJp7UCmuwzn3Z5Z6ed4SD2wEKFE7DYjbaVB8",
  "key4": "5V2e5SWHyiYwJoDePZ4ymfaX6287MHyXBV7hviCty5UmTQAZrDGMQNiRoqb1Jg1PyVKeairvmratFFAKFtJXbiF3",
  "key5": "28FpFLfeeFYN6G9AZysR6vfBW9ydrQnVuSo3RHCuE4H4a5FdA2TTYz9WHcPEmksa3ibMgxjQvt86UYnqPAV74PPq",
  "key6": "3LbUErpJ6jQDSGrx94zTwtyVDt85fpMYxk32Ht8o223EDwo1Fe9ihcGWNxjgcvfPNao22dKaDjDL8oyccGgGkq3",
  "key7": "5uqtvRvwR33d9iuGx72Tu2MvJUQiQyKaizugWPgZJcuvaNPnXaBo2f56sk6n15KGNcCdJTuWyctsXaZYecKvT2o3",
  "key8": "3eiEcrNwywBSyAffktV7QCfbUn9Xs5cWSdp2WnkEoDnmVoG4PquS81WubuUMWxtDJ7ppwkp9CEqWSpGjWt7HW2j6",
  "key9": "2z273PvsbJKc8msMRn1oiTVY3Lv6BaYJUUfJWiy7KvFyq9pfy7mZhGMLkDWN1SiGftJCc4NFLLXqkWGKjn5rgtnt",
  "key10": "4tfgYkDEviGsMB2UfYcAyc6L9DcAaUsczWmt94qYJHiWvfDdUBv9qm8f1Zy2z95o43SNSuQtoraHEWUm4mvfrUR4",
  "key11": "418XCsRz3rSuvnQcr1D4eQaGRnPSY1q2KzBKdhVXohmbCJCtfo56iAc25FXkCFiKDgvG4Ydf2DvdByKdXKePm7Xt",
  "key12": "66hFLjSKs7fCDbw43kaLK4W9N3vmHSsL4wu21PEKbb3Ndh1Bhx1Ux2wN1ZiwgxUHjka97EuhzZ2hoWFK2gGQAYjU",
  "key13": "5MLLcm6dvjuw64241nZ7SWGLDVndLSRhe2ar6NjQwLaiMxPAFGYBDpCKm4H1Bfpq48UqRjKS9Tn7Ch4aen8AGPKr",
  "key14": "55q8SrqKkJY94Xvh3Zh8LkRqMpVsYcJF2mSUtR93a4zVTKtb9X6Anx1D6QayfF6UhnNmXr89AdfbFUNENC18jK9N",
  "key15": "2vxbr7fkjbRnpue1wcLnD9C3LmUv5sWk5VE6DHm1Ps1541JoMWuoLm42u5PHMRMYKUcN881PMuFj23Pzt3EQn9dh",
  "key16": "66foKsZkZbzjUZeRiPXttQfLBhKs3SUtdFYfow8Czra9q8EP1unwTYwbvjZn7AgdLTY3dHNamAeRrS3myYhKLEFA",
  "key17": "2y2dsWGwSBebKhCuUK5R76HFWFngwtaryfc2BiTcybEPjBNod8wCRtf1Lgz8tm7yBzPsMXZXF6WDZVYmA4Uz9f1E",
  "key18": "3oi3xoRMUbRCTdXA6p5gKrdcmCmSK66pYkfyaXK4ADz7qrxsrvn2fQqia2c9TFrNjsXwpi2Wf8QcddsGrNdGvoP1",
  "key19": "5TB3ogXFeY63TnnbmtW1yWWZv3Fy4RL8Rdx45W6RurVVJnvCfyJfbTjGbrdUwgq6FExKNfqcBkCya6b2sooqpeoa",
  "key20": "Sw6SM7fQi2MKWdXS7vRbHWXeLMYRpXY4e3pwA3vR6ZQtpkNRMUaSGRKY5wCbZoGY5uKQhXuWE46EtJrP8z3DFM9",
  "key21": "3Q4HeKY9oBLiVDwcyfDoYVneMErFY1VSNcoL6VFPcedC7xHgTcteHMFe7ToFRYNkDYWJjcLWA9aPzsPeA4QTB68Q",
  "key22": "6TbtPLnjPuLjmvqiN859jf52gTgee4ZsdD3JcvYVNEqcuJCDA7p2Uef3ARXWjLBaGCixYUbWEwPRPLGnHXHkahS",
  "key23": "3x6c1ZjXqGuNQHSw8ZyYMYLHfRMAaaDYa8hYdZJMwVxbVcCxDKcwZd6TVPB4oKknLFqhsW3EAyTJr9kfVVLHTCoW",
  "key24": "3XLJqtaLK7V4tK7DKocuHxEa2EdBJGLmT1g97fFeonEtVgbCFguf5XuJ98g2RyDhCvAAdLmQAd8ittHPF4rMDwGJ",
  "key25": "XgRNur2skSqVf3iFbrLEeiCg1iMiiUU8C9Eo6y1acoPavk8A4WtVevYmyQbwgnfZveLLb74LFffir8fG1wRrrCY",
  "key26": "3ymfBMFfg8adpKtxSHXZrqkUtRbghBn5pzmbeZYtpFh3TLYpbBYmXPY3GCGuYg9QSX7p9dS3xs571uWfXsy5rYZE",
  "key27": "28LQYnhoCYhMhA2eGFAmazoCt9gEYoFdiyPZ2T44nHNDVCEoQ5mC9xVQsBZ2qSqFiLnurjLLowHuM1bxRf4cA85a",
  "key28": "5p4pFbNpbhwTEJmVHv3T1kapfjKZdmyUHnmSEKSyn4X4KXBsZkjWCjsabWf9rKGeuxsqujV7D9a9o3sfR5gurbUN"
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
