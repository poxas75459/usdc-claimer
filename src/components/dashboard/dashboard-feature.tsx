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
    "65JGFVUfgJN3o5eEtPFXq8Yx9Sp8KCv22ayTXGZP1tuqeHKubwCaZvk6dmgNUqi3dExuukzhBjguUzW2dmQeeBL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eV1LUrE5oYWtgBpNopN1JJkyjnUd83K1m5HRJ8fzRrdSbpA51S2VmCCVZ5VSN97f24XznXYRoRcDvHKAmKYqG8P",
  "key1": "dwvNWFTpbUDZEiPd6iEXqyTRX8EFn6ZKWcNuGRynSxZANqC8THQAEjXu4a8VVtKRwFt7K9nd46qrQjeYj5adPNK",
  "key2": "aZrVej3w9XEgrjkjiJUhDpewNQJdDJnBzjA1sMxReDdbNuHLLKLBJa52Bj2pGNM2Kf1hmo3aQEtHPGWDurVkdWs",
  "key3": "h263S7VAxvkjhmEDgEPaxfYG1w4GUcjtUpmsQaJchb1EWvPBiCTFiV8G6LoxrvLH9Cuf475muZpjJNT7q8YZcRQ",
  "key4": "4KcnQQ6wMVpMPwkStqqft9Jux9njZHoUGZzfQaLoadpAdKFfYgSveaDdR9My3mRGcFjCmB5vYo24kddfWfbZkC5V",
  "key5": "Gvwabt5cPUzsTWH98HjsdYEUibvYb7RtWTgzmBwMYdyhEiFLiKLiG9X7TvLPn2WFQTpJ6WHVmsyGPjb8Ez66bZL",
  "key6": "DsvjYqb4wrLqqGTp9SsZHRhv9aqavraVs8h2VP9mrmFwCjh3SDxJu21w5QzAnCfTKTFGvN2prhoakbUWXuwjKAT",
  "key7": "5XkWbYwWLxh3iee9hwG5UeCivSKPMDQkRpddqfNvG8wvqFLZcCNjU9EFafwQRh5neY7Wy9fyWJFx7ujMD47VzFa6",
  "key8": "2zukgX9za1kt9HwNwnzNhVVt4tsf3B5Kv1cDFEGww92LKzGAPn3YZvmiUaVBfKToH5tC2gGXVFkxSdWttcH42kCU",
  "key9": "4fFsLUtpXN7rVNZPe951JmQUmwUHu28p7Tnk1vXPkjPRGXDd77r5xHFfhC6dBqu486bA8wmDXSX6Ky7gN8yTeA4",
  "key10": "2MJHS3YxFpr1qjtKP5t3wH5KNi3cta3uXiuiVGM8QWXnMZuzAbu4wVEKs1PcBytQQXwp5TuQrDSPnrXNhpN8Wy9P",
  "key11": "3uNSLP52hszcxjAGyEztXCenRuKHPJckdsw93aGGzz5pzAQ1ZLuLEvCgSgdz2mQ2sx8mqLZefe2NZ18QJYuf7Fc7",
  "key12": "3v31q2cEBbRwbjMsHZ1srFEKdi7CgwJ6azkTQXMM7zexegT2UEqR93ntmEELeuNFto3FMRQm5Qcoa3PtmQU5XYS9",
  "key13": "4AzGBx36pKscwJ89BnH4qsE5SUNj8L3NoCJhxdqUft3LP2nDXVK9EbxiWHjaXXmSkZGWCp4wDcChTcvPEznoQKk4",
  "key14": "64TTEobvgghS1MhmjCFH2QMu1Dh2kGuqSMiANXDcAmZmGsRw5eGU3oSpK6w5pZCWmhBHAuVPoHJZeqEGFjs8StnV",
  "key15": "2yoX31otfq7nrcsamYHydDtH4NnKGqtPpQyt12Cs8qpAoX6ToinuqficcxmKghK1Qq9UpDYD7j2Latv55pbSHMv6",
  "key16": "61X1mSa1aegKHKQs6S5fcBAJrrbjd9rYaxCRTWwEgjFFufQ28Rk9odJdsT5FcuTHGYckZBA5Mcv6GXZihRFqgXB4",
  "key17": "52NyARRNheZxo6DgG2jk9t9SkKbjMQ7nxrjtJoYwgiM3CN1tXnqkbNqGXhfzED3LjPn5V5GYt61bkKGRW2dd2SBh",
  "key18": "2Qa46EFjNAU5CtbeeNW3AAUXuXrb8dxLTZrNdmhSC5Wi4ue3PP4nTaeDWiKnWeGZWnSuTEphs1ytUyftfTtcaNsS",
  "key19": "5nqL2DmhM3uzr5mLCEEPHXnBPAwau8DdyhhcrcZCqXL5Kt9WqWtRnwtv3honNmdDKCL6nY2qXg4EUi6SogEU7BZw",
  "key20": "2uot1wCmEPXJ7eBZzuZAuNPDE2x2ge8Fvmm3d55kTzmV3Ym8YBAkgfE3Xfjvx67fLgzMdiBm8LbC8Dab8mUYiCwj",
  "key21": "FDyoiUZzhwo1aChv6Eu24yDRGAAPQL1hFnrD7VbRVkqPtNFxRag8TV8CFqxzNsnRqStB8fmQ2C6eGrduN1wH1AL",
  "key22": "5dqsx2fDaMqKVv3fYDYkfgAWRpgY7NdKtQ4w4i7Y6JuFQwgsHQcU6EBRUfauV4mJo931kPECVsim1LPCXfgsQ6bx",
  "key23": "3An8jMy75TrjwBjvxFwmdfBkxSBt79eugxKFqiXGpy38dRUQsqYthjeckJTb9ik89bADv4cfPAMDj6XeCxjkpzR9",
  "key24": "4bkQHo2Sp9RxvG421oz98Ui7Vkh5aPM7qxvrWYKy6wiF639KrXCrtejcxU8Efg8CUep4Fbkzd9xzM37zUVDvRu4E",
  "key25": "2K5g6UdWfZiViuv7H5XN9kH9SgToHXfvM9mxzmv6epCrL6TkJDkwwbMTb6TeWXifqKpqrPTbFbDU7gKPW6WhDmgs",
  "key26": "3R81Lb7x117Yr42GEWEXGk7GLxSzDAkX5EA7FE3wJ89ZB5UX4DzyeB4icWeHD1SHf38XrimYFKskNf9z7z1V3yh3",
  "key27": "5rAL6JjZv3o7bpA8K2UimHXNbdM4piFmRK6wy1goMiDXXJLWemQzNCWDgmEYvkJqDUEbMtWqeLgq3nuJUjdsWUjX",
  "key28": "4Yft273vYLyfAkJUnodGADUcbvcDh7oHiJ1PntQbhWj2GmKsdzQsLepuvM31LdCXKdDTErKsCFKnsRJwRFWPyYUH",
  "key29": "2wAQAVrDKorXS5N19fYiCMEzFXW1onkupJFDvfa67nr77v5LoYBEBEELJXgcf8u2ertLYy1LbbnuXmv8ji2A5WXD",
  "key30": "5hFDHd6CiTmPGeMabLdCLnh5u43fhmQNf6koL1aVQAxAWbA29snfahgWbsuHeKuqP7aHGq1wFQ9HVcAGVAh7Njoq",
  "key31": "FLU6X8U2bcvYTpNxDgekdH3QZmBecPtHxrhs47RP8WBPgUbn9Pt4tmqTQvJG7PnvfFxJQR5ukEtcDQTrbUg9iP9",
  "key32": "3SifBFWEA1KcbitmiJYjucVKN3C8e7nfgWTKPWogRXYqdid6iFqUKqesp6umup3Ep6BWuJuzY5ACtzRvTKfTq5Ju",
  "key33": "432NB5V6viVb4aWi658iJjeQZQ1BrxzU74caoVS5dBoTeVWMtD4tPGXr1Netrg27FwBwqcWCn2mvhTeVD4P98bjy",
  "key34": "2B1BvtfDAzfpSChEXo1K3MD1RWDt4VeuYDFRG48EVysG9CB4L4xjfLFh9ENXMbqPFc4EBTe5R3R3K6X8NsNn2PYS",
  "key35": "2bTvodoSf8C3eppfLMs3HHzk3kMzvKSiMThaJeW5RUB6ExX7cQHB3zqafpnbo7CBomhNamg7RLbAGNxgHEW1fkEN",
  "key36": "2sUtkTspBYXpTMdwDvGTpC7St4jaf2Mspn2MaTLruwVLhoTZvz5oSfLkywoqZh7EemgbJGJr9esnAgVgrFvbjgFk",
  "key37": "33SmBZh1VnhVsDYJPSBm7ua8aLGwemSgFXJBjg7GSgxp7h9mPa2C6SyhnqG5bgeJrdHjg8mCw1pa72LRKkmXpkty",
  "key38": "5pCChN8GArh5f29jzar35VvDrsezsCCVDci8en7ZxnpazmDkv9gaFd8pr6EzJdTkCd8S75pEb3STF7H2knvyaXp9",
  "key39": "4UxYCJSRUT7L8aYwR1HkaSrMc4pL78WuGVPhh4Edv1eakniKvbmvsrh12xHDGfWZ1tpUNGXLf95XiMeNe64dwT6X",
  "key40": "67NhaUyEMhc3rMYimP8bRGDxoB26ZS3swBpyf7fqxMCVSSn6EDLfMqq7WAweBknWgYCshmye5qkNy9Jq2esBeDRj",
  "key41": "35xXEsUK2grTB3mRYCFtMfVZvwXLzzsiaoymnhDFTz9qLgvVHwgpwSe3BFoZ6vYneHt118AqMWQaNcAw352hV46S",
  "key42": "2Jk1MnorxKvZhgn396vCJEDMsWstNdiLMpgTBBcA9R7nJ2JnEqgJpVsJLJDngDBhp5mcq5PscLMVDA2KuFAh9gsn",
  "key43": "5Modfq8MAke8h3SUCE3PC2Adge9ncpEu6dLicAXFH4cuVyYa668e4N3343VRHhmXetuspaHeYKmWrjo8bidopb9n",
  "key44": "37NmNTRdHWJSDhgJdJsjSr1FM4wqFGgv9gX8Rwua3m83eAk8BDn2qn9xTZPxXBhjZpAcPkwgBjHj4TRuTZNbe8Co",
  "key45": "62WW6s2NGGabHMFbsi3qUMdx7Y23ybKpTmpqoHgzKdD2VFtMKpaKqHiJV6XjtL9bdVLU4VGhD9bYKgLn8cr8oXj9",
  "key46": "4NW3UEkJgGN86Ga1i1dTP4qGfjSsxFxP4h17V43iG37gCsexazLj24o4etRaWUJ14XMEfEVbYNudWjDsAJ6T9GZ",
  "key47": "7zx8L6qcb68ntmFqX7ms7zZEH38N8nN3HucBas1XAgGR4yX9S2wgtZkst39n7vjm1bJM9EmqhXrB8mtvqagprpL",
  "key48": "4AaFXjkcxaEmECnxTQ3Ecj63G12J9gRxCD5j3WYYuPCsPbMzXyZY9zd5mVBtPwiU14W1h1rgHUvYBMJucXhrQxHm"
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
