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
    "4E5NENJhXGoPT4bbyYjeMTndXLTVLYk8VZmivueJgZAR4vsdSVjyXfVrEWPNQ4TGtRZQ6CHgzKJembeC8FZGA2wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTPnkc3tmkrh9pSbcAS5Hmet3ZzxfQPRzJJ1PwjeSmmjJaLRvyxppymPtNCPoJUGD72byxPMsCcgvetGkB7piJt",
  "key1": "tTHZ1Cg6sLSySnUYTNyeFaAnnjTQbUno4BJbXrnvr2PdrVteyFuT7xko7TcvVySXLBptzrvUy9mBJNNTqATYLj7",
  "key2": "282FvB3drW24HYXDy5dq2UgZBwVndArMkwULNSBdeNfmxzk93CjrYhSzfAz8p5eXX9uwxLQ2rRvVLnJmfB7h4ER7",
  "key3": "45eQHT4EAzpJ66GgFxS1wR6vySA2XAMuQoYGgeYV744Bvc7snUiTc7U4U4nhuCVk3HcvNQR85R2Z9cPd1JDp3sKe",
  "key4": "4oSPGAajmSgmsvAoZLmKdiViEDgXLZWdQUz1RCCBRtkGRDqUW6WQJpuAULFbGxfWuxvR6p1AYuaXtoe8rCXEk9Wm",
  "key5": "Drx2wuABiPdyCGuPJyUxtYR8nDaVgUrCHDwcJxzUpMZ5MDFhNYzWXorpuvErRqjd7cBsYLqHhCBUrHTG5Ze69YT",
  "key6": "5znUYDxnviQhKQZ3j4DWMn9ufZckueboeQFoRsMS1FKLnZyCNVg68mY5aZpqtUYLLH7WCsuq2Yi7vVCqsSGyW6Pr",
  "key7": "3hVhMPN5MhHTBNgbkmBFphnxmJU4vg7ABA8uyURKRqcPiqLfMNMDF8HAjWMbuuPJDZq3SLVCcAXmEc4pZw4ZbKqX",
  "key8": "5zim9yTgE5n47FaaSCbR6s1KprtoHKFSmbUPGF7inUp1jH5YwzfRvqVe7AenZ9RdEUza2YEcgdUpatTp5jj22XPa",
  "key9": "5AUHgg6ZjWreqMBYkbinxvCd9HY2yFCgP2pF5A93joT5LKyUugFptSezBfn53f7hQYFFbLKvgQBrYZcE4dC3FfyT",
  "key10": "2L9rgCnifsF2TyBq2mvPN5FKRUiL3M7G68ssamQAaSyCrjSPH5QFK7KcAgQc3bLNkkPWvGs9Kj8JT1donigEnHFy",
  "key11": "kYwPPhHzKatYre5SWgdJvvSHEDPoDWY3fJC5fHeJSppXpoQaqqfSLLVMV5P9eaTob7mx8Rw2pKsdRXnsmUHfeZ4",
  "key12": "2UgKe2tD4UuYKUdfHEbc32GaNtqdZLVgZF6ovN6HjDPxaUAaCz4R4ToQ9kxPDLYZvittyiPp7KjvXuE3Q2ksSvgQ",
  "key13": "2afJLGApikoG9aF9rH5quXMV3f1rfFtbmKYW9u8CFgDZ2EFeMyVzYFYPfyodBMdFRJjodU7pgsMPYcU4MVAAvZTA",
  "key14": "aVnjtsNGfmQAdE6gVhMNYDUyLfmwhLzH1oEgyufVD36d7H3KCTzaL6Fv5t5jZ7TnxFj2SFJpRkd5ht5szASu3i7",
  "key15": "4BHmJkKgAQ81mHf3Kc5UEfojJ9gpqAN6YDGyydT1TDH2VDeqSDz83nxwGRjg6WGYaKd292dEbVh9nPwss1PXcm2L",
  "key16": "59cNQUcPdbHycMhZisHhPwmhSxk6jENMpm5QGTL49o8qRCrnujyGCQ9Wef1RRBkhzkGrtTFXddhBKsPnGEtnkkJU",
  "key17": "338hFtQcnyMKPRoAY2NKwSwcmLf7TnCBnrpJaSzcRK2r4aG1Ho2CVRduZ1fM3oWXxMpdFqHaYEf2jzRRXXSTVc82",
  "key18": "2QYCBGYiyRKYQdKhMTbVwp6WmbnCUu9s2zAasiQcrXzXe8mm23u5YkmnbnsWgtY6NPjxCFz8ZfDVvNwxJxVUFhj",
  "key19": "9xVn7HDDaoFS8nF39NsUJmLfeHmQBCnQnUtiQquzvvwAsPXrRZU5yytidbnAMCHXpf3iJiz4BFnxuzmFQJVakyA",
  "key20": "5ss77nFdG5mxTkEyw9c5MYwq3fB5BbgHR6ysBTRHYNhHbX4iJ3zivNASceVdKmXJuwbk5PmzVXoXvMpnD3goMXFB",
  "key21": "4dTH7Cj4diaf7jk2vQE59zAF9T2DL4hbmsV3cYj43HFsvUofXHMzxaG26opMoSLreUe4SDjmf3u4DfGTMwojLp92",
  "key22": "5RNPwwwHGzxSviS7WjqdHZDwQyk5y592wjB7HwJkTbQiGLfEiFKKgWyHMEevkVvrUH4gF8127aQDJHqx4YpRBj2b",
  "key23": "5zCLrur192vyJbKJLFVC79atRMQGM6tywMkUBJfobCUKvNZsvP4Mcb44EMRLMHtw3KbLXRny1wUF5q7Auvp42xKQ",
  "key24": "35GFbV8jBsRTiJtuX7Yt9WenAsgnxRdyUxac8cxskFbcndeq1x5EUZLEZejTj228msMryzo2BwkXWiJ6Mazs8Q4",
  "key25": "3cpaHdAMfGwqXoPWFnaJ4h8LZuLhTkYTdARvmeyjPmNPLGcVsGSXYgrMGmiaiXbQ2guFiALmBBbQobL6KaVh4UCQ",
  "key26": "Dqb4ku11voTmhRfedPTWU6LeCNmQFJRN2xXHyhz3qtqtxVZ49pyUgMpQJq3eyUutpQ9eDHCsCnbJXtr4Vqmprwu",
  "key27": "3YFVRJ87Nv2gPvJyYh23pTwszebwetU8Bwyr41wQbC5ZfLkn7FLTchnVVMGBhCRMjXJvFicXWrayyE3dDRoQV3WM",
  "key28": "KWenZEK9fDTSfBTtA6fQKGRhyskGoCM2qWu4mqEDz1RwkPHm8qABmiS9FiieEKN7AmpMLgVF3U7LhY7Q9yqyWn6",
  "key29": "5tk1jaYceZyTLcUDQDGsAui1kxtBUaUbPYPUgAkzbj1yfemoYwYAh7WFPa4Ba37jEhVt6UpZVQXL3unYqWpFy2ov",
  "key30": "5RWsBVYAQfwuNo6zCstpRJQxiY29RqBUzzPVdK5Xda9iCNN25V64CzJwmwRm6xqWEPgKE39riqQuNnJDgUZ9doHF",
  "key31": "4FFfJ7BUSdFsMoHv7qa8AefYZ98QNCXcPbEkHR3AuF9Jb2B4aNkfa7iWTgrXAPC1HTD4eSzE7Yc7vXodCkbKhvia",
  "key32": "2QMzKYBR1CxJhroNesue8QqFZbDaauTV4TULjBmWQAhdAe3gU6wbggeNaDu1ttbjZKFt6Nxt7oMNCx1CZnFiektq",
  "key33": "3BdLqkFzBW34x5PiwSk2e4uEweFKpn8XuKHbqjjonXzzz5UinrF8EMjdA81T8F52ANBFzCuobWCqSn8fiZLxwUT7",
  "key34": "57S3W9bu9sy8vbeve72ADfBXhP5woVar8uS34txZ5ST9v57WEizaT6VBZ3GWoBgXJaf8LiwvczaWyD5uRyeh3Xvp",
  "key35": "5yceFmKohkQp7wGw1pmRgTGK6ocQWSoYQCT2hoAHitVS1BN6NDkWXNecPgy7d6PVVrMwDt4aWFRHtQwZVWsfo87r",
  "key36": "2C4eFASiviQXP9gqgamyfDFVQSV7HTrn5qDY5rb37LFjwdEw9vovjppiLGtNxGpJoV21CVd2EVW89yzNkNDDDJZC",
  "key37": "Z8XfsSmbEVuEro4ikS7bRd32UvoZ6Vn7AH7hg1YnNtHSUeHrMpd25eiPig8Qw7hjRFqqLNmizgUzoMnMv4uR7JT",
  "key38": "5QuqFDA9QQg7MYpds9RLSZYmGXUUe3rLiZ8pGrWVmhAHD59TME3smHv5qPtpgi9W4TnWog38wPsXGhNFxpAnHD2g",
  "key39": "cBAJBGfodB8wTQfBEityEoAbM3UoWcPam9TwHTNkWvp8qoZbWNennPFoPb82an46ebNfRChK42Jnz2RkWjnhGjG",
  "key40": "2J967XQVcePxmQH1FEwqPWMsVjoNsRJf3s8MZNKxLFwxq1RL3Tv9chhQ3oJVacHoj7siU7JMiABZjNvkVVD3iqve",
  "key41": "5KwUH6ZfFUw7XrFpMYkNveHjEFMqPfQoipKrUEVvk1qHG9EHJVHfcLDMnFCbzo7JCBRUSbn7JGvm1eCXBBiLEfHZ",
  "key42": "4QNGHCX12BUyL2hmG6j5BtXACD5KrJ4pEAyf6VT7xSp7Z9viPVxsYEkHPZgCdSTWX4jQRn7RjhfkaFkzgAi7Dqrc",
  "key43": "3yqfehf6i29HbJCe2nSFFZLbcV9rHPzvWYFFazkHKBobohidSVWqmrDQmsMgZKHh5nFLoSZ5sehQydxDVJU84oT5",
  "key44": "4XJqXAJNoKf2Twa9ei5qRNMpQjbFrEak8g4BStW7tYYM8j6YJp3ky2gzFbe8BPrdZudVViaZsgRM5eJQU5crEkAW",
  "key45": "5FGeF32CLQ6qNXBkyHwhPnQo9KHtgvuzANWxq5emevaV1ZG1ogCR4kGaTun96DQxH7cWBkhAn8jwFitUgjdQgT7r"
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
