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
    "4n5Sepx7oafCtMUE4QtpwxaEmJZTzLADky6EpPu8x1gzFRyavBWtKS2Wy6qTuY1EgYzgSKuAETp7sbYW4Crb2Qm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycLLqCoNUVNAwkwCvfUguSQ5KYQFJKY6xX3GKvLoFfXMbEDKdeGiEMe3BiWhvbrQUGjXuDxgFBShjNuiJJnJumX",
  "key1": "3M58GPwzGawMVjMirHWWZAc4tgx4hDFP5icfxDRfytMjuDe4grxtJyVJdLzaC51sPxLkemhoJxR3LzjFLtXGZjjr",
  "key2": "3vxM6V86ZaPNUgDv2GJCegdUpzgGyTHbwftkQB6qvZ4kbTxoi9hqNXjMSyDAFVGsfBfnH37hN1ARkHT5qvqnYoNp",
  "key3": "34b9MtK7CYAp51E6YUdGPgVksyeTw2FmdxhHh7FN4zRbXHFxv6mQJs63saaJAXqDeihpsb9gR1PBAiyDDcowC8B4",
  "key4": "3nChvDJjcPBvu9aLSn4DvnfQtUcty3NE6FY4Pod9uXV6aazJwbfQU5j1tCgNqySUD5TsxHfP7ahqGeHTczb9V1cv",
  "key5": "2wTLvy1XwFo7ey6cyAKLKEX6UmqpJ7H1zufXpbFMgzTWyKvAnBhfHRs54HRQJnSwcrTudf39tLwpK3UGp6UBDYt2",
  "key6": "3cuwCchN5LSQpb1KULDSs63y1L97VaxHe2KsnisEFPttWnPG4ZhPsRK7y4R9ezR4XJktn6SP4FkWvLnqfGtxyArN",
  "key7": "4AxwjMa4oNpGjvkH934vtuHGqg2DiSuh37j6DtxjispSiK3KUk2wVNjhQgVWmpkB6EZSJqr4XzuzoRikVoZmdAdX",
  "key8": "3KRneQC3GJD14SGe4d2cdYtEqKBq7FdQuLMbcwhHxiBfGTYNTDKCUQzjHdxS1XaE3SWcPNnfqcff4pbuDTiW5z9d",
  "key9": "4BgTCDjtc7bUp6uAdk3NC8FubX5uae4ms8LcAhQbABvvWk2puz9DdVbqAfByAhYtrYrAo4JMUpJ6P8MRYWaJbuFQ",
  "key10": "ELMU1GXWaihpg6UdH5oeFkCrebAueLB81ibwZx7e6eZhB6xfqEVukY4eLZkEJCyHkajb3NzTYvewVHtkAETQi4i",
  "key11": "5fvR6Z1ocSTiRADnZhK1ZodrBZUKb8a2Ls6RryNWqJaAbntEaPbBvppj7LGosf2QmvTSnq5o2ynBgvmLpLQ4f1mn",
  "key12": "2BEc1k7rAkeERxdQpCucVncR7hcqUuowQtWprMWoieFyYzduWGPFfzrUGBDyL3oiqYDxD149akNqx19c4oKv79i7",
  "key13": "4UxqhyNnhjRmMiWwnKKYfWgQKC3WMP2xpmQafC3kRLPms38cfVRT3uPL5LtN1HPcMCTjXVpGeNRkkVsdcFL6LeWU",
  "key14": "3uKJf1JYWuSirqEHmcLmRWGeB5emr7ermyVf5ShqaYPvULVF2yyciNtq5MvyW3VAxETcEUECB2V9uSiVFmxF3hVp",
  "key15": "2WcPs6ShtVP4EXpixG1vVHA13tUJmmwq4iMzaUAjye5TH4ZYXW2LodrNu9uLjRnx17LTtcBdJeaBChnvihvgpvHG",
  "key16": "5sRMdLgRjDcrj2MKZY1oJtcSD2WBbFBJMcopKkpvnQERHEwoxbMy8zuhzqD2hSRKCcJWXbrNYQxoXQrWsGuBoqrm",
  "key17": "47zibVK3fqSKSSannyauZtXioxEySuSCxLnxphKSvgbPmQzCuMufDe2TvknqvnA6cPbkHR599FFujEyRETqizvDa",
  "key18": "4VWjyEzjsKqj3NMQDhv3dQQSctyTSMgfxSAE6SmDAwALYUuEnvR3DbFyK69DQ2ECcA2ozc5VdAUGFoWBKmzydaoj",
  "key19": "2R1DpbXCZK31kjb7LvgP3brZgFochfTz1a8yZiqBeaa9BPdSsK5oRLygbxZza6B7cNEyWQrpkQXvZQxCvYFQzyvF",
  "key20": "R6aVmH39e1XDSwV6guxKzVTpuhYjqmRkqo2rsUqQsKZwzM3KeSziotJa1CEgCmiV31FHt3ieNHBrQnF8xNBJCDG",
  "key21": "4RtCGkWCAgJzBVpLNsBy9L5dW6RPbpAdPdDhFXL4hXfQRjtCm432QikiPFUEWYfymtJ6cF2W8oADu13UpvTrqPZ6",
  "key22": "5HPbQDYqr7hXftrsfzZmbfLoZ47jmxjbDo4PPUn33cQHbDQKKJQS9tebywVZibPJ2SkFkB3xsShKcBxi5uuzAXYy",
  "key23": "2ug73RHQyabrVhgoF9pMZetoikZCuxucdGvwVHmt7fWzSowzWCYKzXpLspvRg6y68BUHJ4oie8MxT27XkCz2eP1M",
  "key24": "mbBaqNMSfrrgXY15cgwtEG7pymh7nUu9x8J9W69rLRswoE1UzfVb4diapWcf3VVUJ9JboBeprGv4pE2LvLY6jQU",
  "key25": "5gc2h2PzFJCadE2gv9LBd9bYhXNPuKnsHPFDvHPeM6bdzK4vHoUBXhDHScQKQW26pbFyPx3aTQuQsdthVYX2Wwdu",
  "key26": "4iPnevz8LNPSdkMTuXfrPsfaNj3cNHj1wSuN1WcMfLTXN5tg4yaFpGUeuywhaUkMxqoBifxgPEuA5iyzuRHk1oGP",
  "key27": "iEQmEDQybETMG89kms5V5VLSiy6q7oVDd4YhQnVdLyHUcvaBtq5W6mRxypt5THSsquMivUdPtrNSJ2aSwBDhQ1y",
  "key28": "44Zpxq9jAiMjYC45WCoCdKTBXJrNeGf5CQNo6JEUUbUNfUPoivfWry2HG6Zk2FV5MYhqLMeoMktUCmiqmVbZSNzP",
  "key29": "sYUpBDYdhqtqoyokUuAi2QtwFd2bkhCUiPqZJ8Gdotd4yET8bMLo4Ujy5SpqZP6fE26S5D4adtYneYB8Ttt8Ftv",
  "key30": "5ya17TzG8kSpDCvcw2q8DMycJYAvNqi5kRo13DXrwMB4WAQ7jyA2CZsQy9kcLmKaD4cwsHhhYZ8VYsqpZSfwCtdy",
  "key31": "5XJpcWR9nVnFaWq8vJSxeEZ1BmQPhGoKJRxVFmzs998rtgSEU2ZRHLT1ABRX3HigRcwC5RXs4bS47NHRgoG7F3Mg",
  "key32": "2Qga7M7bKwzKMvMCUoSQ443CKibyV9fp1ygdeDR2G1rwzbGYW3NuRMeh6TnpXEj78aipQvEWY2V1bmbn73yLNo5r",
  "key33": "pURz11VRe5WvPjEdsEGRfxqwWvEe4qveKZqEbU62mVf4zwwm2UngzxqcmeZ3dEnx33EaC4mSnfrrdBFUt7vwBxq",
  "key34": "2AYLR6oUo7DohduGxaudDvTB8vkfZFUjNXAgY1DjaQmL8piuGRrLMoifquaf67DPum3qAwfuF1t1Rg2m6yYfiviA"
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
