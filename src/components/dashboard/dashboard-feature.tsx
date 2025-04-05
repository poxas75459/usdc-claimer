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
    "2MtfwUiSDSK5nKS4RZ5cxNdY9x9UaD8NDBHEFS9MNLsj1WdJTUBM7gcxXAJWavAwCimDd8wRRHjq1xmeXd9n98aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJ1ZacS25oePSAKtWSoBrosQYV9rxWzAekMscqhzrj4urUiviYJPRHhAbPc9fGQu7ktgLFtsQtbvKCUJFzV4bVD",
  "key1": "3h1W9BS1CiDw89mWSHEEAA9yPHqHxQrZLY5ZwPR8eStTMiNPnj8eUAUJAx79xArvq3Z16UvnYNNgiK1UpJLNHxMQ",
  "key2": "5vDeM5eJdaxwWbbefemYkr4LsehicHjAYGK1HxuFoZwGfB5BSqZmYe2xWLpZi4bsk9UbuRg7TmpuxnPbrsRu8LyY",
  "key3": "3VE5zSzuuqmaqVLd1pnCarrEh51nft5K9Sx5X4SgqUTtiUb7KkLKwprfzvXLdhN4h68jwQPmEpVkQ7aVZadim2nc",
  "key4": "2PYPybjKJpS1KUsMkfNVQm3zVSaTFi6opjVjcdXf7p4PxrShRFAfziFQHsjvg4CSNYmK9HPo6wXQRnEXAg7aGWRs",
  "key5": "2X6MdRNVdYDwVFVFWLYysANLL8abuwY4UjcfPjAoFz8chut2jwJSBPmPmSFHj7H19iKuYGhZ1yRTee9guPQeg7wu",
  "key6": "4w6dztm4zSfZAvcpdXbMqUENQEEH34HuZ3urtgGcpB2bsxCtsWFGMK52p3enZsJi5ZUF3zMrQuAAEnV9guu2XxzN",
  "key7": "2BheXs4PHvVXNZeuNcFSWgz3v7xiVa6XRZsgyPT4evHfFJ2iGAqbeSBmHEXu1tCwmeiZdCuDJVKDXzG8WHNvdpzU",
  "key8": "4upk2E2rCR3SdgrC5Vik5GUS2P91YEg15BFBhMqKpT7xMiGx4fF4ctXwLXQCyw7LFBdVbbnUV3c6kPRfXodxnNNq",
  "key9": "35pM3GBJmpyJhqTv7DtmVuB1fncBrkSXrma8jmFvPrDxq3x4Tm1QrgqM5BeWTjBygdZQwiWysri49fJ8ZemA3M9Q",
  "key10": "5C4NoRcyMMDGHDsE1sUujNvA5jqAa1EDWxT6hMiSudq53YQZCPTajS8JeZMVqLg1Zm3sZ7eNooKwWqNpnxB7sJpC",
  "key11": "4rGLkFf2PR5N7YRFhEiiTYimnTooLCX63ydjQCLUTpN4P7MUAkv4k2hHnqPfKYk3jjKU8qGYKThaQMnrrtdvSSum",
  "key12": "4pWw9fosBVAVJitiyQ5YLA5bj1w2LrUuVp5a9syPRbuzdibZZ2mgVsDCfeaL5CJAkaBKXqfauJGGKwj2aqyrAyvi",
  "key13": "5MTi8TghmmgTnG89UifFMBw3nYnqb3hrs7EsGQMiHwacou3obVCib48ThSSf5pfxkECkD23Jzzh33kd4Qzt1aCzz",
  "key14": "5j5m5soQaMNW5xSiFApU3F6p6WmZLPzcWPvePiwSScjeXBYWd52rkqTSLVpkJqgrTmpEXf2RzkvHzWPEsxg8KXUg",
  "key15": "3VVpBBuVryEtRPw5oKPYCze9wTUxVGbNKWMhDwQDjeXpjXUQZ2tbsxTMPkLjXNDPP1cnsPUnmY4LnS6tjNgsJ51h",
  "key16": "3DqpiL3MyypXKv8sXY2Mi6FL4f1UDmayqGZBpbgNDRFxVfs7MnegG8aJDmFEq2bjcCxa79QLd7s9s3x1LkbaupQ3",
  "key17": "HoH3wXWpiCVcBjDjb7Nv6dE1hFVd5N4BCtKc6aTsLMN4L3yD58Mqp83DgUNzq3MD1fLfBvxTsLbW4bQR1L48jHv",
  "key18": "2Q2E7a3Eajj9ouGkpAEcSMwvyi5Hp384b4kFvCtyM365NyH2ZaMdv9fgU8AVLYwH5gj3d4PNiqSKCCNAwVUw1yRd",
  "key19": "E3dojk6NA92QwiS24LAiDN3kZpp1Eh9JPZP3j8p3hZTVxcYesXWGngJTkWNvCVK54cfZCTTNp4qWEQRfQtfaWLB",
  "key20": "4GNSEqENhYL4CN4vckfjo6rfkzZwHoPcbboUDTXxQwsB9KDichTF6nn5J1nfNAp9qP6kv4mwrsXUEpVDL5EKzP61",
  "key21": "4tjL3hs3MeUentv7qfMtqpU95c7mFU63ZVek1H1RnqFVuxWsspmaVXYFFvNBCcdjPkfbZqxqMANyhQoETTmLqatR",
  "key22": "3JY6Ef49TsUJyrL4c6DWriqhT6pYRnUieSv1j4w3ZBVagdzAYL1yFYGkSyy3aCRXxXqA2afSnzgmK4VXxdwMsTF2",
  "key23": "5NKo11h2XUiTqUeX6uhfsdFz3Fr8nMgqHY9NvazaXccuX2p6JqmD3KLmQZU8J8DyCbdAVy3c9zzQ6BKEnyQqThsM",
  "key24": "3sBAnkZmfftFKxqMVLcvaH4kpGyKbh5ahmHpA73FFQZxKSjdjbvbysS9SonPyzWy8Aj4vU4BVvQsDcMWfRebzF3q",
  "key25": "55wFoDCGkbuxYnUnrvAb2vdABrUhpkRQENf1tEZehBYhQuDG5t6GzxbCbV99NgUKXsPUCSLNkA2X5rK1D7QNrPdX",
  "key26": "2cxnGQmbVc6S2oPpwSTnSrUanj7uciKsqZ2oyxZ4XHp6CUBXMcRCAaLCkLUqftYa38TvL43E5rymbBhLSjsjZe62",
  "key27": "5CH6azTQLUWtRynGPsPFwoszXLDs5pWF91d2vk2tB8AEjbrfexu17mVMjHkgDpYcbXezu26b9vkChp9qscfaEd5B",
  "key28": "2pDVt5fpKNkvPzVTGermw6kE2nRgZzPmiFuzdTXkaQEhdxdb81BVJT2r4akSTbKErQyRv1fCf8MzbhrpuPehEGu5",
  "key29": "2ta3qNoou9gQviL1J77oA2Sm3TNfN5Qc3Bvj84NxFagcXXZgibzHHZLkzszYkG4nnP9fX4wmYdSPW2Dc8d98AsHu",
  "key30": "1538gr2Psox5SpF1qakiTjHkuw2Aj7T6Xh5fKQ9AMy5vr4wn8gXRh77g7Z46t4iQ7ByHFACM3mKd8YDXMxQRpXs",
  "key31": "Sv8fkZ5a2AbAnk3zyReJdP1D7TS3NKVPLMEfmS6X7wc8MTaB5NANFZNUYLRMjAHSE7vPkyTmwTM83NJCL8RKcSy",
  "key32": "DDHm1ZnxhMV7wbMS3yNBwUZX63FiH2RMXCqHpv6xsMppUktVx8nSZismkQ3bkmsrU9gU6zszwCaLfv6b6mdmnc1",
  "key33": "3JGMJtikBooJzi4KZte5xurCswF3kAat9B8ANWWFiqQ26kJvwDLucr6iMgNHohUj7Rpk9hwZjv7W1zs99ynNUYHF",
  "key34": "29Cbv1gbagXZMbDuQa4xaabudSh2qzhawC6VcwGb5bjUeqU9Ui7h3WRceLjEtxcPC2myeegCeKh8XuEWPMMBMtgk",
  "key35": "21bfW4NKsj3zuWFijez8zKysWmUGHmg5HDx7BtrhvHm7M6SKzzjjUQdgAryZUke1Gf56DRTxJBSLRqU3xjx28TM5",
  "key36": "2NPQ957b3eamm83gnMWkg1fcoRi4QtPSVrAv1YyKYgrJpTFfc4TvHyuZD6bqLQzXwo61kxFYyiSXiyH9VcE4obGb",
  "key37": "3qU8kov8WWEUt5kjcnBpdJrnCzpqXo6gz8LcrrxMhyeeTYAKRuNsPc8MVKgLa9oLgYniK7Dw9M9MPhQxuH2SsR5R",
  "key38": "YSTCmtCuHBszt9HNYfk1kg2UcmiFU3gJh3sbyF5ovJo1B2gJCESxfkKL55X18JwEWVbfMzNvHGKVECA5SGEmaWU"
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
