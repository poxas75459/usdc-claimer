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
    "2r4p1ZeQxJSAsfDTeYaxop8YogXTU43yE7wkzGDLnJgsxdeBw5hjKkXTNRhmBuuaMLZ1j6DTYDWe4HXpjapXMTsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Pqj81cqYY92WzrzEGQHiZ6SyiwKhT7M7Kn9P57TCn1zKNVVY1HbiGhi2BbguYPZPPyYHgQDoBxoJeY7Mt7z7Zx",
  "key1": "WbS8oFtVkddcfiJtkqJm66QW33gBzCRci1KFBbkqNt5RPE2MEAToYPbn383t99wCMXcdNPDxrrtAZEW5JCydVxi",
  "key2": "2cx74Kjo2EYqqg3zJL3Cd3483ZYwuo4xsEEfcJaY7fhiB1ATgkG4fmrpaAu96VQYg1ZXZ6sye3RxQkTeZAEb1jju",
  "key3": "1xQwXqfde3axHU2nrzZqY1siHKGQAxSX8h8VLjw6uqXuRcquurmB2nzvkmemBsmMQ4VNw4uk8tSc9DP2f2jVjN",
  "key4": "4Kud1iFcgzHNZTdMSETUrUXKktTB5uLPzkdjNt6Zt5YbHevW7bBDe1FkLsBFWJVg2tG4k9EFdEVTSJ7iUd8RrRZw",
  "key5": "4ntvMoY6TvspoY9HHnZdiJy2Exg53pt76zMkcwpctzt1LLr8LF6kfYR1JvzZzyXnjVYobhnbPmDRfv7Ya4vZJdCa",
  "key6": "2KB85QWT13sLw56tdux88EYi9VPLJgLcij7efHmWyhuPcvG2U8JE2vgQotZyFk8UEAeyeHSdEWHL9npG2Hi7hiKQ",
  "key7": "4c5tVwhx5ZMuc3rhrHuvdLoQXM7iqDeg5gGjX14RUzKwRFBwtrMRee5yJvRzSc4zDC192aqQU4bkzjzRyF5aWfvb",
  "key8": "2dQNTvbcCgR47fs4bzf1pbbtZxNX4kHzzwKVZyHo1nYxgKx3anmWTweeNUoH3TM4CusYknt6qF9NLgjEXrUxjxd9",
  "key9": "2jmBTdnBfAMu7QSkdhNKkpxG4PiyQFhfJc8WZSWL4z1bVaL9DGkoF4tJefSKXxL3jKAzm6vC2DA6M6YPZrB7c7c7",
  "key10": "xcWj6R8yo2z1ac4fzyb7exUaRqGQ91dYBzZLkrgtXGaUy5FrFnqppb6cmzmH3dM6jTTe9kxw1NLBiTsN3DHGEv3",
  "key11": "3zQUMG3ziEx3dKH6GkH2Kd59c42VWHXnUXnfbmj34GYTGak4ptyTFX26ymKfZQBZH28dJ8AMMP4SwibuUapmMvdW",
  "key12": "2QTkQZViN843RQvBjfLvBreqPGu2FtjAXcYD6RZw7Ukdd8LcZNZgoPdWp3mPLd1my5TXFAjhpmMKCUbobr98Ks3B",
  "key13": "SFpwexkZgP5jD1fBegFx3BNx5NJbgDG9QvbbwSA3gm4xCdUGgPFXQCjHpSNbmTV94P1xZh7QKdJ82cNYqDAFupv",
  "key14": "254Hzb1i9YHcD9Sd85HHjwqQCnFERvtcY5yNykV8zWeTEm6VV1E2B9tEE743oUb4499CEaPskWGqUz1NaGJgbyhc",
  "key15": "MLbUWbXjQEd5o1BEzBhKiTkF5bbiPX9m6nR6wPF5kAweiKgVKce6YDmpCqE7ysq5p8asoSwC41yJ8nEFNPQNpEn",
  "key16": "2HNCWgYagJkCqW9aLkPQUmViBv6xk8d1nwBC9rEkgo671Ctbbc2Bmjptc4Bz4jziz4iVfPRN2QrBgjkfA1XTuFz9",
  "key17": "5ovehQvKfcbqPAYUJZX7HBL1jg1tRaem7RbS776on4kDjZWBPNTdAsEJ7SHXPxbvkjEHHeJisGPqfy5ay5uQDw1F",
  "key18": "2h2dLbpPXLc7JWUjmjk32KZv2TReQvtmuVLLKd11h2FcnSihTLQFd578vb5LfHvqVXkztYvhdTnYdcJG8KZAJxbv",
  "key19": "4FaRME6oQjinsokYmmL3nHMQF1RzgaiH8kd8eDkYTzTRjv4R9EzGhLzM9oBRgnHVqTh5qmZEkARVhqhEqkpoV3iC",
  "key20": "4nsd3ExHqQEA2cnFDdtLxkbZWzwZmrErSJPFxuTfNYw7r82Nz63SFfAziwg4P5MjFvjSG2ynsgqe8sJMmiH112u8",
  "key21": "2XciiScfSeUuTz5VGW9EvaEY17eVABa8zNRPuquD1Y2xPa5sfbhxc58NzVUsgryFGmcN7mXqSqpPHh67rKE8v9CM",
  "key22": "J21Z343tr8gUKccBRJvG59wK13Ywt6SPsvXZnM2PYGgCwA1NJnCk3EPwVpQBM2LfUsgKBxf7Rhv9n8EMzwHqXre",
  "key23": "39vwR6sbJZRRB7XCmUgktGxnZFimMDz5bLMg68V4DdZDpnb41rNjzweyHYgAWPaRif5KfMazXNFEQcmNhh7FM5hG",
  "key24": "4taXsJ2gWewpgyuwyR8sn9nKh369gXTP3qr9T3JSvVU6fVEVtT4Zq4tqvNk9d7EnrRE48pBDay1Ka3k6ue2MRTmy",
  "key25": "MXi3mtC4KCuHcUj4ZXdYjnqMiRosUnYtfiCVam5vawtt98PiGJvwdnthoCdX47nSDXrwX9rbXuBFX5BqFr8TLus",
  "key26": "iMHaigJ6ggAAHLFXMCPcymi6po7wy3vQfub7nN6zXSgV3DGwaMAzKpqJjZSXjCs8SyikT2AK2XmH8vZyKk7b5YR",
  "key27": "4RhPgwASEy9oHyxvEA5Cjmx6iW1TE9uBoUj6wvXidd4rVTgTd22k2j8koxhNxjdjMX5NDkPEGmQbmYWCZvEzJB1m",
  "key28": "3CrQNqNNHXxnyvqUKiTqt6itHRhcJHyCtPtXzNrf5M8CqDN1ho229hV8HdHF2TnnhZkTMdg1i4LQajpvEEHJgaQa",
  "key29": "3QRCcuE51kt5WJxfGChhY6GAstfeQfdKs9WunfQTzLMas9grbuajUi7NdWWrgkTmcWdfGvFcZUvqSg8oQezAe8J",
  "key30": "3R8gwcumibAKmqnPSMnbswBpg9A1P7Usj173Kt4VckvNdDVKXbXJdTNx94eD1YDUcKDTjbCpc9Ggp6LJvik5YTLa",
  "key31": "4oSVC5xft7TrdWFkAr36B1vcWmFwbXFFsM199GWMTVSCmqzxBu5kr58gfaSrCP2cUx8Q3fGuVRYD6sKrTnzGQFx9",
  "key32": "2ZktjACZ472wKV67vuQy4zEvPSs71BmSxyMAY936yxTVj7TAPkD7yFBo7FKtQk58LJi6Nu7A1YiGLTuTXPHPm4rb",
  "key33": "2VFEJRgZCUEm2e7YvB9LDszV5mXwB37KdFff4nWac11BSqtbzwV64Hute3LGeks2Hn1r1C7JWmidKAZdAmwujmSe",
  "key34": "4fmtjEzXNbDT8EPa9Z9o8wwW2aKwAiodvCkuAb5XFipEoyvqhZUp8xLTg1QrAbrtphT2iR1trbqgTJj7NZu74Asr",
  "key35": "TCBv95BdfBHsYRwRjK8BE4SCFm8igT89oBJn6Tn2AXzZzRU6MeUJhwLSkQC93QNFJmZ3dtvQXZM9R5jAcDqnDkz",
  "key36": "5X1Ugu8QYZPeTbEmF5drhTYEHXhUapCoJVz2ybmJ9Js1cdEvaFXjZtkfcdQYMLVByaTUAqHmAm32ujwCMKSAhGjc",
  "key37": "342cNy1dhNjns9cbz1NThSg4YRHVo5deyzXJkkfda2717WKyMtzNiyci3wpGvCPo6sxrDEHS22N9bHq2h4ya3reL",
  "key38": "4QtnmMZvfELJR4WKmk2NPSFT1QUWYzuVBYx4oFZwij5dnWRN1aYuzHtC5eDwMXTsRATLiEoMd7CsXhdKM49KmUK5",
  "key39": "4jnCM6Sj1DzCKv3ANGjkRnWBDr6desANtW6mfeDMXbf9xnsqh1GE4QcA8pE7PxvWh3HXJGehtXCyd9jao76w7FFH",
  "key40": "4Z95EBuKWuRH82pnprUvNU3Z6qV8jQkY2m5BvGDQ3hNUeoXkSzSpWZMs6prtVSeT9T9XkeKJ2Ay321SdnrWiB5mk",
  "key41": "2GmKNDaubxrzW4udFMxkeKNCJ12bsPjE8hePaWUv6FB33gEtpr5rp8zAmLKrtf67t43WaS9jQKFQhFmoM37r7fYS",
  "key42": "3Jr5gQLN4QM4zNgQy2goCEmvxoy5zBMD9dhccGr5umSn3aGD97sUDvKZe1E36BnhztdAiCyGiMXNkf7xyXE1uE5B",
  "key43": "UcA1CWYTkx9W2AjPvXiW8BdpBssw7QFkeUUmfMZxM7TqAJKivDm8i6HNq71oNXRQrWqrFxDPAWJEnUXigJyuN7X",
  "key44": "59qEWajm4a3hsy79A8WpZYAoUUBXrhzdCUmbaBSQ8UGLiu1fsar9r7G18W14J3EoMZ52MPQTo8rixzfx7EDhEnsJ",
  "key45": "aebasQqccACFq3f4bakieTVuD3DKroHSxQKmQV61suwzeq8HS2s2sCzuB2z72ybqSv92X2SvuAMhAwxx6Ua4i5y",
  "key46": "4YBEC3Ap8mvb2LBfroCK9xdw3cTfdybtkgEPBKatYwUX1BmCodBrfzRigtotUogEqH78dMD9vm94E8SxddAjMKNW",
  "key47": "5d6bTpvdBFGxDY4mzHA3zEucuaiSiSZkJZnnFpnW4v148Z9YS3NTYJ4FukSUFmbg5QmqRPtDcMcrNN3WzXRJbiSb",
  "key48": "2iMtZzsYv4DHHHr5CbGQyNiTFFuUFGTVaDdawmaNRqeokiskdGDphqDrUrQfTxMngHfDFcNmMsK3jx3QUx9PyEn7"
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
