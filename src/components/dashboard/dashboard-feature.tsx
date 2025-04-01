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
    "366vqzucupvLHtLRZJpdHR7gRdK9JaLnEEkdR6QP9nZ7ZY9nxB2dSoU3Mu2AQ3FJaxCrp98w4bRwFxw4eEdQpgbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHzoTXztQsTfdhFpvo3GJosRFbcV1K1BTyW6DhGNqVgVwR4t8C3s9642XpdZ7w9nbfaR3YG5B2XXfVJaqv5qSwK",
  "key1": "59bAiSt5PB2Wm41Q9WGEtJcwpgDuvykn9WvFm76HmFDpT55tbEKgcx2M7MLC7LonqE8WWH1fvZD2nybqfFbM9B64",
  "key2": "8gi4rg4bmLNngcGfdkXdWjo4uVYCeFhUAtZ7BMXBsa3V1khf97kEqEcXmrmHbEQ5kojDFjZW8unoi2pxqZjqjdC",
  "key3": "4MSEAKysnvAUajaxz8jaJLQG4uAHx3y4h9NpQYYa2Fbq3Z9ewzpLHcJBsN8dQYFSuAXkuiuAvRum4Ur3EmAsa3HF",
  "key4": "3rj5BWePgtUU6eww5iqZroiBNhibsVUfYrG3Lu9ZBESvkX1xpVgqMgEmhZ1ky7W1DdpXTPSgM9Bepn8RZPxGipmd",
  "key5": "3twKQwQuAk3SfX5UZeskD9dNTgmW4QEUiweZbHJmT4xHZvcUZENGxLJtcDYdtKSsFE2GkEtZiEN58NYHJeksyakn",
  "key6": "2G4zT3EygGVbzEftbpQJsvxHG6pBgo3vffqApCBumdRdYesKwTWt2FidSiUNSwEFcjxS69mF1aVkp94pAW3FRfeK",
  "key7": "Yq8YqkcBkDPV3iGxWSVCgP1WFaTsuhiaUcsyRkbCu4Q5GiMLFvYbLeRjpLy6CZyHTFAqj1FF6DN5JqywH7LRreq",
  "key8": "3JoEgQMFS4pVZM5nZ7RFPKLhXsitpW78emGr1Tasw74GHJfuDKb4qm7jwRADBz81kC9NoqzBMGrT3T37HF5WHQks",
  "key9": "2PHywe8MEns2AoPznCupzuSmyVTz1UiSRi83TnWa8cNvXkGPJFnv8oJPxNuSDjiG51XVREPUJgwSE8gkcMdMVRHP",
  "key10": "5nyQjx2eukSKXhqV9Aubzop3DRXnLUpNazYMyuCqPnyWjhvrpaKiTeSNnMN6eJcpGGYFF67FHQqGBaeiZpkWenAm",
  "key11": "3aDHi8iATTKXGB5CqCGbP3gY9pYXE6Wwt5TKTuConvidRWDtUtoTmABRnL8z7pLdz1TVRmZUWdAxtGS5ZpgvM366",
  "key12": "2n9FVWoFAgokcUjgVAzfTbTGiyTPZADuU2UM2T4Pvc7aXgRbVsELuinvrtLFtYPgSM5aFZqEZARq8s3iNHG8PjvQ",
  "key13": "2V9v357XTKrvrGYeps2u5PxJQVGiSN84KY92TNB2Fxn2tG9aPHDuZ2nkvgeU5GJtmjXhDtZgpu6s12TGbvWPbhcS",
  "key14": "3SNfCC1ptBb3MwdDG6DsCJSivjykFg3bSA94u2b8AZAu3kbBBZJHyhUjvR7VR5yRHryNnBLuGfw3bTK5FzF3YsYd",
  "key15": "oWemDQVXUp557YXasz4i6uicSwViUfcLe6EijypM98WrPp2yywh4D5asuSxdRncUwRAiNDDx3AL1XJUzGaAUn7T",
  "key16": "j4bVc4PfZyPBgH3JrxU2ZJ35PGVTMY91YwY7xgmJVn2G1pqTju3MVLqyV3tbHfaiM3eyhozj25zLJYGEBbEgNhn",
  "key17": "4Azie5FgoBnoqrvz9VeQx1mVNY7rrPmJasnjaUHSXzXJChw1RMpxU1wJntJyDCkNpGKjnA3bbu1KpuibsBRj34Ta",
  "key18": "5Aeot6gXhDqJeTqvLDhnZP9D3cVxqbfVwT3YYzixaxS21jnSkWdmkUbac76p8SoW963gUVycuoSmXqfhdQtdkoNC",
  "key19": "5K4iWedzrBS6RKmnNG5fzqcKKkBqn4jjZ53i1ALYP3eDWcvhMkEWAMCgtH2A9X3v1zDGbWNLYMDLpsNjxuiHiWnX",
  "key20": "3UWo4tc8WJ3wW54e9oYwK9Nbh1nfRt4zoEr7rxqbVDLQ3BSi8aWtMVcd5uvx6K53pQtFE21Qyc7a9e4iMyUgWeb9",
  "key21": "4PUTmstJCEZ5dC8pwTtiD2F37Tfg2oro4tiUVrxf5zbxWq2F3rG8hwzZSoGiDF4Dx8G4SiwvRcx2QA26puAJsYuM",
  "key22": "48vVSRHzh56Bdi16uniRfpKkFnA6QQWUQNeFUuHTHsHRUnbyhmPmrcgcgcWH9HthX81s2JyVDQf8WQ8ybUZquJJk",
  "key23": "2vbwbQzCm1sP2Bs2sqAfvEKNuNM8wwCETVyBsfJPzvMkadnpczBkUvUhP7Li4A1CnFMbSrhcWBYuuzgbdJVEsfAQ",
  "key24": "4wBv3cxWTPWKvDFSQgARfgrq7aQ5h74qwsPtLoV2EgvLoqvjd8975J2s7XeogZP5SakvVKU3X1CnGouSyKme7PXr",
  "key25": "31DJGGPCR7n2pYYyJwgrMvBbyfzKU3RwikcWsceMrhatgJpmcoHiiawVfqWKpEFpYm72B8p7UA9SiUD3NVmDsBGy",
  "key26": "4ey8mBVJiDZYiZwgAYERWkCxzJWEn7T5kHvHgA1oDbgix9ebJpevouAEGFj48fdc5wDVi9SWdnfmd6SXtNMBtW2f",
  "key27": "2LHuqH5xfXCihZavJQEqgHxW7vntzayTTjKhMFHTwqSJ1E5i1z1EXN8rWpkR94i7hyp59q6m5zp7NfVGoj2Z24vt",
  "key28": "5y6YBfMoPZuMiS2VtN4xSe3GtL6vF7NvwxSAGPZbHnP6ggo2ZseJpHbnF8jGFNEZAePqFmr6cgibcm2etBv8s5va",
  "key29": "3tGhqdWspKTAHzLpXuY6NzWjDgqy8s4UgYjjdtMffjMMnek7Z11X86Gw3A3ePScDRSubQaasUGbU2gAre3wEV4s4",
  "key30": "2EZwsR7geHAmfrEbwg4WHX4fQZzUU3F7aEtPknBeUnMktWvQ9WL6toJyE4LBD4MN8R8vk99w9mXtZfLgKNgEM5kG",
  "key31": "621XmgcYRB16y649Wvoq2dBaVYzVQ84P1ySxJeAhhkctNP9FW3E7HcATUb3W9uqX39PG1iaUZxec5rnug33mU8hs",
  "key32": "xYgPiXcsPiu2BtApXRFUJRGu4m5ZKNwVCRD1TXhXnuqXCnvDqDqVAXSeLZ5pJdr2op94QWGu6KoPLoNa3M1gvfn",
  "key33": "3TGpww2Q4oytMHD44EyEQPfHyActfo98XDSEnuN1EmzkS46D7qsyKwNbtDrrRMGRgcTrgnybNaJonKDUEZBqryMU",
  "key34": "4yKeHheZSm4iC9s1PnQrv5ZUdTJoysvzBmGcKbfZw6GtS8ZHGsnua4dW7biJ834cnT4EUWHiryHCpwdCikHJVFoQ"
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
