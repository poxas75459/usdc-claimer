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
    "57A7eDXf6BoiJKuxo4Yvrvs98d4Sdie7gXDY6CybLRsYF5K6UKz3dWntRKsfNvJAH1qrSRpkM9zg1y2rzNDNyZwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxmb8YtpLsBSqLCC1EfjbYWPMPFP4akwvjcnsukrHKbj4Bpiz2jyWY9nP3js1G2SCHN52YfiFogkV2SA9r9mPN",
  "key1": "32jrCEFmy19SLiuM7GoKKSfDKw2VDPxxuixjsv6Bvst2ErksjHvbDfPLMdaHbwhmLSbTcEFvnECTqkJpEV69e9Hz",
  "key2": "4uLLeTbB5PcgJGcKreJRfwc2oyrFNyDEu7zCMfagjBGxnVKYpiDXNSr186VdRCBB4g9pbW4XPh74JddCYR3RGFpk",
  "key3": "LCwz7GCrc7TV6SxuxNggqo7koFPz5P64PCNpZQoR3jD6vo5yLrqz6ur52sJMACAeLFr2p63cvj5FU9aioLGp9er",
  "key4": "44hGQMwK8xDYsrEDDPoz6CW2eqtCVuRC57WwsJ8ne9MD6ZTJD41h12Cgtqx1RWY9XiTK1rnCovt57FCxoPjKGLo3",
  "key5": "3AWwgbrEUqqXsGNvTWPpmV4RXpevyDeWZeLH5Lm6LAHanqpS8XeK3e92AyJ8SbsxqoPHQtowuW9D3nSTLwZdsjtY",
  "key6": "2oofJmWnaV5j7UbtxRwaMyYr5p4Q6Gg9DZrDjLZREhKBsemryWgA8YrdMVoodrzHMME2wwxCiKPzC2a89xxm4oBE",
  "key7": "63QYoyEyEgAe5uyiRHCXgHtRmA2pQmdiyTypE4Uz3wfk3nELS1dNR4A6Z75pnvJNfh8j8UzzAfb4DHJRFoxNdCa",
  "key8": "Jae4a4ydDj7b5cRTRtiurG3eXuAbEDrbTY8DQS6dg4s7Rdi9piPLG9JSyrDAH38cQePzoDDBSUtLNxonWJ3868g",
  "key9": "6353Th7eiqHNu2WCLu8FV8Ez5hB4XHmQkmLqN96CA68LfL95L9rNhWrYBctZhRCAHaEgkYQb74uUD9vMzyhE5zxV",
  "key10": "ygvLoedM7xmRCDgF5cV23bTK5wXqC5MFxEk7xFPfVZJzg4DcWzwPeexYw59KwpSvVkPRvSQaoUkm25c7txyJgAn",
  "key11": "5JdnX8MeA7pcYxoG4ZoNUmzUCrae6UWSt3ojHySfn1Y9Ax1gkjgGrGqyPwGsqAVSrAGjK21eWc1D4fMUAKZWggQq",
  "key12": "QmMEbeaC4yZruEPKFu1WQpC2NjvxRvCsA4DcQVZFmXaVERBsn13QpYeE8vHGVszYTFE5Bs42rxJwp6XoWhCJxBK",
  "key13": "TZKtTcna1zFVUGMLcq9VDdqMWNoTvy3d2Tp97tvBThdZ4bGw1UCHKtuiKVtT1pV7hRLKww5qhrNorgha2E5VzN3",
  "key14": "GieYXohHJSaryzaojPAqJgFTVodtKXoSRygZTijSixr4yYgJdawaJHmBRXpK7sYiJ2ECWwSCfBL4HLp8ye5xDs3",
  "key15": "vYVBaCNiCcerHedrU33MEqpHo9fkrEygW9n48pHQ8wPQQRVivDDKTEvQiR6fwY1gfVsgkEvvhuR7XCUQ2WxgotR",
  "key16": "5t2fhAiTvPR4L9L9AUknVsgg2SbbsPJqxPtHAZyeCbS51YKtpbVD78snoGWTJ1eaP5sr4RLLRoonAerVcvCYSfG3",
  "key17": "222CW5RxoAURJeide4SL8ym5oXz3FPMe728gLmnUsjCRwMf8n26wwj1Ky8KhZtHeFB7bWQcUKRohVA8Hxre4Ar2f",
  "key18": "3UondfJyUZszW29P46dgWEWWLtLNRM2itZgLC2j67tLdm73GTNBjEaDfw39yj6Lc2KQhYKS72sv3WJ17t5txFwY",
  "key19": "4Syx2yYGYw3RN147q6Du82xekv7YxRDJiYo4FE5A76qAF7XyjsM3i71WzmPJ82x5bF8TviKZcCg1dW58HHa7CV2j",
  "key20": "27c1heokw1yg644bvkc9XHXCXhFkxbVtJzBEBcnApsq23UVc2LogDKmGeBkPPqNWsbGbYjgGLAGz4MT2JhHiH11o",
  "key21": "zQoh2xz2mHt82ieAna6fP7k3aWJTFdboGjbZe9dUH97TGqppkpLXkqyc8Vk9M75XWcALaeR6VaauwmCDLH3HV1Q",
  "key22": "5vbAUzmx8zKvwGYZaoaHXnabw9K9hLZYEo1dE2b76678RsxzhidLrc7UQ9cD9zFqVPWbbsUNDQQcr2op17rpuFPG",
  "key23": "4tfjRwLh8L7mcWtG8q7FQt6HyRUJ7YVNHp7ACM9R5jyX7jC1wDE2juUXKkgcGaNxgdEZEvYAQHahCPqFpczBj6Jc",
  "key24": "4Zvnot5gmCJn1df2M9ryoQ4it97NweWALs959VdLmYJ7PiAHEUbN3qvUG6gu4v9cT9dDZQUgEAnEjsxbLxii6bhi"
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
