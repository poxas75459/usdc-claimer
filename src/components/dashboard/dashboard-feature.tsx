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
    "4oPriRUAmEYzKwurR7AEMvq8QV1PjyA988M6pAV8n4rFekwD8QdgCwpkeWAcGLbu8kzzc8zmXs3HsAhz26Fov7JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jdkkvwhtTzi5KTXiG77DaC1Sqm11D4kgGHNyNJhXRrfguczVXLvfSxnQk8QZfyvENmtPFyh7DV8dFxTcQ6BdLcx",
  "key1": "5irAuFa3e7fWKnKenCEtLZ1V82TwD5jyTrms2nmgi3Nh1ieqsTAg9t228fBDL5NuwhxiaKWMxfbQbYXDFwrr1PfD",
  "key2": "4BN8mTCa1Lc4GpskiCy24FYDUnpizh4eucorvC3hhhaTGu7htLf6oC57p5k5apZRKjRQmyMbnv28Rm9yuXnGor1R",
  "key3": "5KW5kNWSza1erNmB2SDKXb6MEBzghdVWgoYvyVGemrsDrzfWGnsDfTt8mK4EkHeWPbr856ozYeunF6nun6jNDJz3",
  "key4": "4HayKVHF6JuD4ryygW6C66DPMrWBuRszGzc3LprK9JXL6dCYJDDxGmVKCNJ6a5jb7dsKeGVmTnFkyrie9fDpdKuC",
  "key5": "3Jif2PTpzvQfZ1ASeg4xhozYjdMtetBWeFsCEtCL9ru6VYevBcBVNiFgE6yGtcoqFGwBwH1z6VKicv2ChGvQ2WnJ",
  "key6": "65vzi7U2o3FvHcc1kQrzqAbES5b36xk3DPoL3dE4s4PomJ9w4psNb47Q8xYehMuc1yQvWH2CwFozoWhAVKfPGAVm",
  "key7": "2fq9x4CcSXj9gfshNgxQhQriDMBmyEtZojdrzYU9JkQtTEDtToEgCjfxWeRxVeregPfsdtnQ6Y7bsC42jZu4qVrR",
  "key8": "2qV9rBJKS9AvTdMjyeEDEXpdmoDjB85cu2ED3PrXT4SvXxsDWsUhoidXS6XaHBdKC2cxmQMnMfNL5oRporxahrKP",
  "key9": "5iKHcsMh39RsM5RpweL2toXh2aSD7TQL2tRNm7eVJ5DotiBtdTG4phookegovxS1oqpVGN2SoPUnKXL56eSYQu6Y",
  "key10": "4tNnBLMfFC2jJ2daCtzK7S488RU1KdTM6x9tUbs1xhNdXuGzRXsip13TFmwy3kjdpPPUeh71q9mZZSVT7k9xYzfR",
  "key11": "5FiKuivCyJJADhjCyq5tH7tzvgmoiU7LmQdwmbfDrd2mAdvBY52YyadEVtwm1H1HWZ2oWTYHgyHLaNxXZgB1ipLx",
  "key12": "57TFf7FGcHQFXn9hksFyx6ZUxswm7UGjNfmxzGfuWKcJNidugEUoGgAX9pc5GycAnUoAJW2pBX2QVLvZqAgGWEci",
  "key13": "444JWiumy8WeFWNVVCkPeBctnE9b3KzZGSHVkZxGpVfuZc53dccpwtWAyn6Nw1DVmbLSmzJj2gNRTkDnnSVFDDNY",
  "key14": "5bPgAWUzXs24HpwMFzhBzaKTfA9gnkHpRbSb2aTYpomGTggu2G4MicbGH8hBuogyqX4NMD8WYih1v8qaSvAHrJSe",
  "key15": "2TUh5QpkXkf7h8v1AdNnapDGNTcJkLPW94NvMVcjs1dfuz3cMBsecAfhyLqEC7MLstpTFhHAprcKN2wGLnMRc3qH",
  "key16": "6155P6EEsGcSZxzZ2YM4N5hddaQaQnzb4GnTZ59y611DRs2t3vBCBRtzaBCuMUcg9GWVrgzc6c2wnP5kswyQrQKh",
  "key17": "2aWdSH6tbs2TC5YrFMDqkiASboHJp6mb55coSjmgDQQr8EB87zt82Ppk67xSCprZuRk9TAovhweQG71PmLBRCtRu",
  "key18": "4zoFWVU8Y9mwbUF9YybX8hiJEt1sUBhM5N9scnnvN4tDCUwKVxthZ6WzR1z73BgFpspjjjk12wNMXYPm7h2dHjza",
  "key19": "NnqUbbYsUnT5JJH4bv1YECxmUij2o8vbvxE4kxxXbkqvibtMzXk5Q7ZUg4wWSP7KELoQCy7j8mySP3ma5WtaWSs",
  "key20": "MK3q24mK9ec3Hrn7JAM1CZUhzb2RAMYYtxsewvik49hhDohoe2NikQfvErjsvMfbqrM9iTJ4P9GcJ84jwNvsHfa",
  "key21": "5xP1uFprx44EP2TG8SyrtVCgnctXS31ha2sEQFQ95hNSrM5L9kX2zbzx459y3fpAiWspL4Zb6Pr68QwJSJ9rFywW",
  "key22": "2WhYCEF9hfWFTMTKjebXyeP6JX43apzmfC8fx7Yreo7na2VnEm5jeEzYhSuQhNwG8M4zA7FwQEowYEBcoGoRmtfj",
  "key23": "36DuDA9rWPxShQBEZ2uX5f5gj512pjkCK6M24ztjWZVLymM8zmXXDHPxVfuH8Qc3HQ9ksGzVzDP8ECpZYASwkLTy",
  "key24": "3SKKrtGgmYe8wmmmwdaU1Xzcgnmpq7hoEvW24fhk81N7NtoYzLBx3BibvBGfd4snH2mmzHyzviBWpVEzRvhdRgaQ",
  "key25": "2wiUVRZPPUeLft2Ezz1Myyeyht6tZgoxxWtbSC52MYfvbRDbzx7ThXb3HJRAfmiee1GCTevkGAZDjzFALV3Zub56",
  "key26": "4Z4hiwVtPkvd9cfwoGVGsT6Fc3WaWHWvANdNGyfBY5evEwomvf2UK681fojrzHh3bpdqdUAZKAsoHX71VDECpfy4",
  "key27": "3UmRxDb1iN6vu89F1j8ESemH8M3A27LETWSozrEPdaiZ2q1uTY2RYdA8C9PuVj4F32EHHioLMVAxsSKdYU6hBXUM",
  "key28": "3paCrqT4i8sSN5FKcATZq5ghrAh5J87raTemRJdkdaMnWcHGMEqu4XF722x91Y2iLb8nJggToKuX1Rj7hxUpEgnh",
  "key29": "61xUqYe4kSrSFHHC9eW3yC5Z4nqumYoyLYegsRUYGsTx9wWUKsijRqwug5PmgA3mVy9ZgfctCt85GiFYtscTe7PF",
  "key30": "2Q1FMoG1HRgSY52WaVmPMzg3VpyX493uzBB57MZAmCaiNUwUeNBDwww6j972pLgDY3DK8fnoU2aLU81UVpQbDHr3",
  "key31": "55qrLbNMCQWazZLM22oSaUr3tTqX8ApjaBG15dpEmu8z9QxuR9YMP4yrE9pAgPSnHFbYMUMNbBiqphcxnT36GBgR",
  "key32": "3zXLnw1gmH7PLvNALwE8C5WuqCyPy9aVbvEGWd6XtLiaiAWPmAPNjoHoRPFM9RrH5TRZJAzhbSA5WsvCSRS63Ncv",
  "key33": "5CURAgJsd4grScGpqPNkU1qdkBBHnvJNg4UqFhEMj478c11QERUpt3tHNZMQGrgwtHW8437513GyeNfAQ9yXTmN",
  "key34": "5UhwtNG6ohQSQ31HpVTV8rKMKv7bAABvndXZ1YvbvTkTZGn1ji7RRuHiqQKPanijwKmVXAUdiT9ANB5A1bV1V42R",
  "key35": "4vEhPhcqLs1D6FL7KRVB7zMkwXBsHCi8aSXigKjCuHwFpfP1vnacfzEAkfALBaCrk9AeodNZUCgVeBfZttDaKHaP",
  "key36": "4Ako85WdJVdmDg8HPr1bNCVtKwDcpM1tsywzVHpuXKMAfVKdReTQPfXD7uj2EY4nFNrMFS2BsNMVzF7SQo1Vsrnp",
  "key37": "2XjEKgviyMNzCsdLUh6fxoY9vT2YkdGF5RRQXd3AfrxggU8qTYvEEMFT1mXpeVhuWEPD8sHDV91MM6PT9VTYnjqm",
  "key38": "2nWLWTKTrT3KnCy9fNZb33BNn8JCeqtuLk72W9ow7DpniNE8U8Jnmc6XgxeqbHDKHfJdMTLRVtUr3fbvBjUCrRCX",
  "key39": "26MBJBCtbp7r24eo8GTL2tkgkZm9kynedr4MajjqtXBRXBnLUAZ2towie3zCmp442ATbiv2hdaLuFpMUoYgvV3PV",
  "key40": "46ZEXMP88ajgk2P9bHi59HZMmefzwr2YGq8TphvaorP4B9XHuBbis1Cbbr8WDW5MZ15Zy4fvAiUJ9cgv6wsSwT9f",
  "key41": "26V7NtR7qcGPBqL3ZnPWxb9tmwrBUDUzcnLLMJhK8Ur7FbADJrtVLt4EZJAbbPbUzhPoxmiwvPpnhLR8defLcjuJ",
  "key42": "4bABoYtLZcXM2XZCJgChXdHWT6yQ7yjZE55wQkCNJhffS9UH28Q13pay2VY5obB1Kn3ouWyoZDggXxk9aCZRMUqs",
  "key43": "pGE73yxHMup5mzFMcNKPFGGFtGH3H5U6wHMT87fkFujhKpwC8eEMKJoQivx8rmcV2UGe1iPBqdpUrP3fMAwGQDy"
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
