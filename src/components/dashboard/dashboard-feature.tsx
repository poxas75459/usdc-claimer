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
    "5nUua1pa1kD4YKrTbk1uPDdjbDrSinhMLkCe1W6i9TxaUHtSgmp9myBepJiKK6MRMSiB1fKzRLqKpRPmC6ftuCV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMWsx3P85XYWqWtBtiLfbQUcgTJbkB6uvsX5QXsBb5KWU48KiBDxaRh1xz5PDuMhpz9AiH7wfDJVrQhNn9TNqsp",
  "key1": "YqJvSLF2Vs61NpqZ9gGMb6gz1u79JNjXkNSRPj56FMnELVTAwQh11hmXDXkQV6pawvXMqAsYsd94HPMXtRCXfGp",
  "key2": "639WTpBVBkBMGNZtu9h6EpDonGwfvqgKYMw3wGRcukryD1cBzb7QfFKEBwGaetHQHw7zTxA2UVFuLoDh574fu39m",
  "key3": "2TuDr8dUEmg2Nmqq1fayg7dFE7bzMS5D8KLabEv7FCQ8qh8ckR6vdTdtSigGv8rMbFN4wq3etNNs4TzMGc7c2pTa",
  "key4": "3JqdejfYrHa4aGBrYLVPg2s8ysDVBEERd7fj8Dck4rtoXQtaZSBbsj6ZeX7myp5mRk8BLaq4CK82xMcRCufRiurK",
  "key5": "5THfDLFuDXpFRC9yrE2i1g8HXnmoz6Tfvhownb28WopNsKuepfa8t2XpqD2eB1LqXMgPUFDMFjVzCuhitQk9PyJ4",
  "key6": "2EJVwiwNKJuu13tAb4HX5NUoJrkRFUBr7nKVj4aJhnbQsHZ7ZPHHrU833eCBB13BLXQJn8RKCG2HmkKSMVbcbTPT",
  "key7": "5t9NmGp9QdMSKZoHo8NtqLmuyu3UQpXNoconPGzX1T9u48ratPcU8LxznQJqUXTAjQAeUMsRGAEKyNbaL57ioLuu",
  "key8": "3RRgADDEVAUqo1uuRsPXSPH2KfDsbtTBwK1xCu9Pct897R552B7owx4ZPBbhx9isVJurKHTQtyFC615UyLsve98f",
  "key9": "2YfAZcVh1L9484xx92yZTAVTR7J3c7KtAR95FgAd6WFkGbdNkS6BWhkCXU9PeqHcKNZJiPG3tq9kQf2NrBzEarf5",
  "key10": "2AvhsHRshVMdXdPcMJ5L7NcR5Z1MfdJTns4cmvoNTDUuGG76eNUmrtaU7DTjsj2QLCjSJgowWmW2RoR3xUAgS3KL",
  "key11": "4EJ9eS379Uds6AfDTWtNtUYFj1KLNhZtCK67nEs6hNddVPCMjDv5fCsCZcPfLmKeaSjU2jLisJxjLo9UDFdtDNju",
  "key12": "3BCHLupz3QWixDx6KK2ss3YsjZLB3vYoY5SpvZWnmgkTnLYLo8SZMHRvh1MEGLvsRTWvb5R52EgM2qrwAQ8XWqg5",
  "key13": "DAgzA8nTsCSpufSG43D9bqfvQzWdvMUPoyoiyfDURn95cewCDHHpey3yKXfVPC1HtRLU3KQNXKfo39DS5h7rLwv",
  "key14": "2SgHBbcWKjw2M65ktT5wT75LmcXWvkfraA6ahxjNkgFJ6cyzN6qnet9LybuEJFpwSKtcGAkKi3K5ps1yDGGQehRR",
  "key15": "45GPxE5nT2hrprNwcrQCLYzSpobs4WghBptPVn2jkGH1tdnz54nnGtSsZn6p5VGgmVWtqxKa59dfaReKtj4txaGx",
  "key16": "F2nDrqaUdroLNcrwgz6j6XK9eUCULTWCQCCXGH7gohQ4Nq3KDBt21S228oC5LcSgGn6NBrEiMBgYQy3RW9GFUUU",
  "key17": "AKpJ8KW2HuNvLqMoifQkRDjUhRHKcsJbMr5rWtrpVQ45FFpjH9kUSPs3zucGCJfD9nriCso8ZMnRyJVxYPFvCR3",
  "key18": "PjEe3oEFgq98ac2na27MYDnte2wcXw74GYTaZYM1jFA9qyNyXeGiJV8iVpAgvctWfHHFjgFWSqMs9xUoCcH5sVn",
  "key19": "2FdNMqCTo11S64N4mqrnNUhVmV1QsoBLndyb1A6FkkF4hhghv8Xp1n4Kwj4F5y6Ex4o1RhPru7hct47Dso1HcKnh",
  "key20": "2qh99dwaDjcYFeJ9TCQrKvrP4hpYceByanUPtfboDY8YXFHmaMtB3bVmQgs7BcYVDAs2TaNZMv6TK6sfua53g85X",
  "key21": "5FSeNxvRd5NrrGdmEGvNK3Nysq5XSaZkJ261j91NaMcA5MZth8t7upiascWgrNWaBuo3MvWCBpvNcSAdpuzwwcA8",
  "key22": "2Qd8krMmPohQqqFeVwYC8jkXzwAQzrRPe3pcn7Tzq6WHcK71Phf5UNSMH8Pb5bFf6XjSf5DPXoaAoaTFALjZuJUw",
  "key23": "3dq2huwZMbeSLnZ7WRLp7puhA8bxtXt5WRLxpRqf7zrFrLwrD5hsPBfNrb2vL2c8ciiyo78jJXtTwzF8ebSVm1f7",
  "key24": "2xv7e4f4YauEbqoGeMcrCNve2W9pd6mVheyB6aekGsakQZMUyMBcC7KKxoxHsBxxEeRGueBZtU9fppwLjnEYrGRp",
  "key25": "ZcZH7k5nG4coGZnR3Jo3TUGhSFBKrSCDssano3zk59M1G3yGAyupZKH7LGwyBfBNDsqcoNR6ASNogeaE86CJoWB",
  "key26": "66yAUq5kzegef6MyVb5ajGNMENMVuksDgmFHhe4aYgm5NLNe9cfjmpyxd4am7aGvTwMUKgDFfiGRfo9ks7Gdada8",
  "key27": "4fFNef2LfmXHZeDUzaKoS9FZ7DofvxZxeuhT1bK1fdGLyHvQ2v7MmVF8sWAvsATHyvSeSMDUz6AfPpgVmJu413gL",
  "key28": "4jxKCvihC215tqtX13jALede22midz6e5TA6c9vzeHqEjgamht75EsipbSnREtm6D2ZguhnGRjfp7GvHQPvYch27",
  "key29": "5LYzWF8QgXV5dqx5sGUgBfzJd8pVaomnWnPV2MZCBegxmH73v3rCJW47RaN7wQwQgfcpgop76qUhuQdtKFiS3f1c",
  "key30": "d2xs2rHm5KbvWWgKtbF6FazH91W1Yh4vBKrVRxUmYxqELMF6soaM7fGa6xCBSok1jQeURyP6oFxijWp9pqjasgu",
  "key31": "3gXtH7TvUzriXDu6KwRH3RMkxAn8hYtEeMW1Zh2NVrXsqhU5Ke2Ehy9E6MKZJk5EgswrnMemithH56Sypm7WMb9P",
  "key32": "2froe8m4eDU9H7cQXA5mh82giJ3QTPDWS4EwdrmwYRMpAa37TPYqDGvtkVG8K4AYiqtDQtgghimQHLZedC8FCCTH",
  "key33": "4DTgmHH8C92P1KPcUASKaEggZJuA7MNn55Wx69KuVP3VtgJoQiCLd6haJRAoLJwgvpgHoTK5w7tvkKUnG4CBBjnW",
  "key34": "5AFdJ5MWz7agtCLfY2dAAAqNyPfdXDA9S6UDXXrB4mtCBnfD9zEWNpjJAntVGmTCjzRNJqWtAVmbLapi9PquQGY9",
  "key35": "5UD23LoasetJBnkaAWbg4zDCEhXSc37ZD36TQY2hKRLPzVcrQZmNNpDDAxTAcNoZPKDow6vFDQvwxzogW9ebWXfQ"
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
