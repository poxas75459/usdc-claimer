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
    "5iopXztu9sHcmAKXrNHiiB1MLivHANngwuz5LA4BErQbbLFENKTn4Hn9ShK4eWrSEzdHeU4R6xSkxeJtnTKUpgfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVVFNmosxm8sCGAbZQAkPdLGE6Cm4NBEMbE7nmWL4SVY7ZVirdT1p9BggLnpXPMHu4eDpZK4Ls8wRFY6uQUQHS4",
  "key1": "5yzqEc2kruraMFEHazi6y6SoZvxmLNNGBGnwr5W9FgozU9MzxB2ZxREVHsHxrkHoLNwC3sshkPXXWSfw1URuXi6J",
  "key2": "3XYUYbf5cbe4B1xr6mfMqkJ97S9SZMncTeirYDfSxKh1wWPyDRewsBjp2eNKtQiLw31hnwSMbPzUKdLy9EvUPv8z",
  "key3": "514PqSTcp2DXVKYUXaE1zHAg4e6fkK3p7fXM3F22HENC2KAn66k9forbpRPQZGvaB4tbYhPPQQfPNtH1Rz2n7cjM",
  "key4": "4zRPmouauHQBwNJakT6jge2VyeyBHwDwD5EmtVv3qZNy68gWYbk3N2rQa5rg9EoEPzmEoeXYjbstqd8QppYfQKi7",
  "key5": "hfBgGV2ZoRWwzANfGZLhPgQtoQCnPRhsmbbgqB6wx9w31MU8swR5LJYUPmHcv1zDAJsFfkZH4hpVTHi2zbzz49N",
  "key6": "23C98QAz3ava1pKzY86LmcefDNyk1LGqJW6PXTBtPFhXvbDcVyYgc27zDKoq83ALkNkPPi73CTwTLf3nojfGfKvu",
  "key7": "3JbDqe6jUUMtokqfF3CGhNsoXL82pmDbkmSx2itAnsT2W7DCFHkyjKewoSzsCcdqBifyRURLXjiY1nu5763uwUTP",
  "key8": "4uqapsByDZvni4Mh1BjF5uD3Lmgk8A7tqbXr5shLc7Ubi4XMbneqfkkvmYKAQyDtaahhroYirYNHV2YxaLZAqG5v",
  "key9": "4Dz4H6HUim6eW8HN1k4Wc8Q63UszYQPDSZ42zpx5UsydpUApTtjrMHWRCM1koeyXPcL4aqHT8tg6fTR7DZH9BxK1",
  "key10": "2hUD5ZxampmtCUVfUNxifnLPPt2ii8F4yxtppJSxKwH8MvL7cH6Rjad415rrWrzKKQkGEa9uoLwo64FyNGmXnPUV",
  "key11": "3cuMwmQA4vzc354EA7kJaaNHhW1Nuzy1BiMAmUydfyocytkQCmLj6iKuTfUvimYepLsWgcnnTrkVaCoHhGqNTRoc",
  "key12": "9b1RAnkKdT2Wus5mL1kLri3PdsZnJxmn6Bgxq7aTS1XriUiYtBHpjAT5YwF57ifLr9d6RECSb7kFirEfe8vHkNq",
  "key13": "dTi3KY1696zboLgsc3Lx9Xsm8tGYnNa23eTZBaiZpJ31waW1vPmSTqDY8swsr4Z4w4eY5U7DxUkMGSuSMCyzf5u",
  "key14": "2N7NtfCfkgtGSarHEoS8k2CUro5tNYiGEHgtGUuKYZuXJk1bCrm1Qn3UMHMQn2uphku8eqwNwuG2mJJ3GZZJiq9H",
  "key15": "4iCx1ordm44CZFVyGycBbCzsuXSfE1G5gDd4BnLJNsLnixeG2pTwwpRiDoAZNjMR7CQHyawApLPf3eQG4Lhts6kK",
  "key16": "4JgnNQgxQzXQCqnXNzzdbp2uxjCrf8B7BqJKdTp4zbzyNbq3m5Qbao7fc7uDEzkRhqqzbm49mqFfhGcr7i958PFj",
  "key17": "3y9w5RU1KZTp9gGnchZhk6gRwQFfhXoZHjj8xAz7JSG5mkgb4tHjbUM6WeDDKuxP756QoHURDR3EBRSu6GQPd6Cu",
  "key18": "3JZGS728hK1bQ81yKWyHfgKpdTaeKoND6aQFDuovQpPkiEM7R6vkEnrt3ir67icw6gtf2aA3Lsu5tveTL2grSqzF",
  "key19": "5upRZvumAk4P4d5xxNtU1YXN85zVKVo3xwuNxkvQUB3hdsgyF3dLY8a6tgomd7qbHBrAA8ttTZPBWwEJ5gKZfQrw",
  "key20": "5N8FXzz9WgsqX8p5kuJVYmDMxMRAPsyDcUSrdssCXCmMznZtBGg3vgqzN5aMbsut5xpvsKjnJnfVYKh9hJ4Qm8Pt",
  "key21": "GyCYrAeKjxTr5njZMFatb9WpRyn1rTF7B8X3MSjXTfXMWNCWxjYcirhe5mDsgkN2hTroeSiAtbqz1xtEhfQ9jVk",
  "key22": "4hku28Xfe2XorEp7TmuGQB8asjfwdepzXhNuNhgk3zqqT5AdMd2xwMbjv11nLNAfCaz4Xxgrbm7nzSqpQMusT5Nj",
  "key23": "2gwemrwvH7axajQemMFkWoR6BTBNRT3GvsSEBwbTikobXU13AXJsmZrkD55HB41zugB461VfFGByu4Lm6kZbbL2v",
  "key24": "2gQpZA4cadHNrGJ5wmLN7pmDnbZTb1P11XEppg6Swd1D6QLsErVLHntPQ5U9dTgpa29s1WmTdYa3cx1dkCiwu1Z3",
  "key25": "2W3i675SHz25juCKC6dcNT25bC2ZkUchF6HMxmf8fuSAp4eAAubFb1rzzxBjSvBBztZwznBwrpTN4TS6EDYDcBA2"
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
