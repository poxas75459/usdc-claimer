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
    "5HRpvaNmGDwYAM2W8jh7ATKidrewfevC4pmaJYpGvBbabUtUxQUWB38VhVHDrjLiQcQKWFhe1JPuMTCwboYGLUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJJaK8ki4HZQYPyjVKEN8SUguoqEzsnrF7U78nxdwZKPhws1T7XcJJYJyvPN3jnZhxDajm2uPLyBxtoGKyXJiHL",
  "key1": "2JvfF3HWF5G65eDVvXrvf5jD4gbAKcWK9Gn44PPVdtSViCzx9bhnEHTobLimWXCAMtcv9euvQHrZuoz9q1FFN99v",
  "key2": "2ArLLaJnFQ4rtJrAniuFyeCiZjUnoRD5pVoPXcURTN8uigKQeXJhmkFGvj51QadeJeMwLPtDRvPKqNqDWAwawqga",
  "key3": "3Qi4XUJv3ANKLNY3uUK3EGtKYyfhk3tvew6j3zDJZg3jD1y1Y545YvfKfy6G1nXBXncEy8RVwQCeGq5Dh9HsnBo4",
  "key4": "5sFjYR3UA8eeHzYGvLNhQx3ktARP8EP3knJnmPAJ9JQCGse8mrhvUw4yCxM65hUT5nhamJWKeq5nV9DKktE4ppar",
  "key5": "2zpJMkJjq7XXyCBQTGDPC2rdVe3XMf1zPQVBBFvPo2w9HikzDdYdXxSVpZmTGbo7oYZFxCDvBS2PcCP131Motpcm",
  "key6": "5jyA339nKueii19HAtFCb6oVUthfUHuiYigSMgqEq3zqzXTBMxhhWNqqfN7CAPshvAakEgHhqE7hfKB5Emdbfmxx",
  "key7": "3KYLH9dH6fNVmxjw3Hf8psCLRhinibFUYFVvEjDyWFDuDfjfdZWJu2ZPU9DkP1rJ5QMAHpTXLooN4UiPLMN7sKNG",
  "key8": "d5FuWJZ1iCMTZPKjpoDhfa3uDwip5E4peDHwp6DArZN84ys4cDrxKPz2PacQ8gVurT4A4GwK8jQrb2UBrnkeM3f",
  "key9": "3Yp3uWJm3RXk2UgEJvoLNHXcPYJZfGXVJDiaiJyX6rvJXbmooQBVqH66FkkV7Dq7ctUp9bcmR5KUzkARwhS8sFxQ",
  "key10": "25LTMA1QkaynbAgbW8Z6UuSHEH3JjhaTchGai2FKgiLFZzPbYR1kHQDS8ztiFyTZhtb7EHdFq2Ua69CpVotwwyLy",
  "key11": "2634Sa3nvVKKwH4arfbfCDwJ5DnZSvwD1QuXxSSd8VAVVie9p7rnCid6KpnHe5Dg2YNgwVRVvHTeJJriB6P9hfaq",
  "key12": "5t2gRhSVPqTecmQRCcZZcjPwpqZC67piwuqmv4veVj91iyBVGcd8vDWWB2LPk4eim1BgHSSr5PgVGwrjC7j5GouS",
  "key13": "39bovd3rFCgxWVMbu6itFxjQxS2KdTAepKv7ixJrwjpP1S9cKZDdhnZEdJnbuRdDXvJzBtesyrYpxsxEc3KrE3A4",
  "key14": "5ckK78kFtUQnZKihLz5TwvR2jNvuaMbevJNtJ1U1TrWBRF7QvJXJUtys5U9qzxYmZQfuyi2Zhp8NRrddXEwTWjmB",
  "key15": "5isEFzcVLPR5FtvDGBHRABGrMtkFj2rwYSYcn5Src72MHZjVY7FNRhxFPE7ka76fm4PFvfP7pZS4xY8zTg9JbXJQ",
  "key16": "3DHvfrsq4UQSAwUzE9iR57UyqY1W4hCUAadFXT7SBs2HMYHaydRAotYas1HMkFbog27ULHtvADARV1sYjudW1b3e",
  "key17": "DhGYKhJhc7uoCRivsNzK5uJ1KFBYmbkVAkUFbhf5uohWbBMRtWgArPmq7zjekd3YEcxcE6V13hPgx4wpDzkABwv",
  "key18": "2Ex5RtLF885EtzqKE9S2dsVbKLzXJQ64YzqcGkG899vTADgkVT3Zv5EEGms7Zhc8rJzKrLTMNMV5qh4Nizmt5QCR",
  "key19": "4QJGf6ESSPNUAVSSgmupSEd2PcG34kREV22W7vpxmPdNtKxqRNrM6gWo2yk3sBXAFHd6AyC6YcmXH8p9vWtnSa4m",
  "key20": "2t2z1mQTavxV19hkzBarHnw5W7oXgHrskeoLBkpq1V466gmvBBTa1hwPwgmg2pJnkbwTfJsCGU9rvznKMFEtwEa",
  "key21": "5miGE7Rxk3YTokoe4PaL3dnyQLoXVeY1EBHH6H62mknPW4ULeNLshin6RZidpQQi6ghKiEAQW5mmhE1WQWyUhChb",
  "key22": "29nrJrwkYPoRCUPbXa7Q34nmh9kstpYVV7RNRbTJjiHnLjAxPRVBS8cPHUjCjAjY1u9Pj2Q1ZKSVeCMkYqKvQLJN",
  "key23": "4MUbPiVu2uL6uhc2Pvbo7HvHwheJMu5ZDnST85jKCs2Qyv63PME3E6X7B4MjG49sgo9MksukfParxBHug2xLFpEz",
  "key24": "2sE5pni487XjmnmTzQxj55r5bCnNceped7Sec52E1VzpP7p63W78MgwU7dybQGs5JPi2mv9wdbzNyKBJczPFyyJ2",
  "key25": "4n19HfhgTiDoG8YW5PTHBmMpAaW9pAs6dFbfe5zCXp7ZgmQZYe1Us23bDfbeC4EGA1r5weJVtzMQ4Vd4LtWsBwy5",
  "key26": "2xu1PxHVNDrM8HwUcwaE6UPMbRsY471oWtbsU26mKxxomrVSEqsU6a8JjMNf28SoApm8D3pxozcDMkWxayvdwyza",
  "key27": "3oiHGNSpWtLeUTETA3kdYXi5xvowiLGopeMNxCxgawLcu7FEcCCExtmZiAKoFMDBjaGutJdhZWs3HLs1M1C8uSxh",
  "key28": "26NC4P23wYE8mV2jCut2ETyGr4wQjzHQ9knnLaLh5eAh4Lz5ijcHcx5bcMHa8XzJPzCRghwHoXcN3UY6TkYs24Wy",
  "key29": "uPczaK97z95s3WPE6Bw5Q56PsehzyVbgED5JbWeRfyfVN2eNvMoS8rtNiv7jPzT3smr6EQj7S9HifVi9H22nzo4",
  "key30": "UYVBx8VVo3ZT4okXZ3UzWmUci8dZ9sUN2keXjq7Cga5C6HqB59wzSEDpbLXKQJfQw36GnwQ6GBq9QmAwcZytsnQ",
  "key31": "3QmWt9stKgRC2DyLmBGuSYLUBReNk1QEFsjhTFEfeeRFv4enL5fHsvLh8bpkk7pDMFuBSpKqnoUQBtNEj7c7e1s",
  "key32": "5yvg22D58v3V7kMJnhMKKZywdiGfCcG9EcbXUD3UEWBStndyEm5eJvQ2huhScvcmV3XWKsggeT1Xbo3ha3c3Rcsw",
  "key33": "dRFGaomdGtTPL338kpgtwWzfvHCsjQXkVjcvcn2qfKhPQ98t6NXXsS971x5nF6tAD515E1dvWxG3RAscjUDwwMJ",
  "key34": "3tCMBQhnSeaQJWUYkdy3EtzT1vwLiRNFrk7pwvY3BCJUErEcsajyG7mFDALvhuXtvLmyVnSH6iepQVQsxE2mvkFT",
  "key35": "462HztYFgx87xAnfuEDig5uuajW1pQ6Sqrecw3JAkPkS3YJt9zGMFdc2ha5GHgzdLieDY3z1edfuiHvivM1WSDpt",
  "key36": "3FNUjXVYLFPLN8RYp1kfb3WTRiodAmrqCWkqSVYsKNoYgqoTX4wrh3TcEukKckCxcNt8yv5u8gxrbRh13PnhR1Hd",
  "key37": "4Z74VXtrU7D8vqdCK9yg9mEKZuxdq8GrVjunyzsGnmevjdVTBspaqExn3i3WKsRr3N5QikgqsVq6UZ2Vbq6z9EhN",
  "key38": "5MTRKps8fZ4ZEDruNgHRbvouyawey3azTk1J6cx779awRFrHC2LAWk5pak11yNywcN8RvbkucjWPzZ2Eraq1tQVf",
  "key39": "QjRQH2B1MZFVgfPhCdKgWStkdjcw8Vq5T6iVcfVw8fS891p8L5osAGSXUEs9wyDtGVWcd6Q8DFtbjqrd5yVQXZe",
  "key40": "4rdTj94qFUC27irjx2ox6bfGozJjkVpkneo1Z1xYFEGgieuCBCE86kvut1rhqdrQnxvaNRDxBxBwqxpsueWaknd1",
  "key41": "4enXsKPKXeVVjjWXZp6yW2snBNJoCjuyK7So4DXCedhwfu4RXaJtCN9UcVMCno2yaAqVtbHPT8u5No7dgb7dPJk8",
  "key42": "ASNJbPyjF73Pwcd9MTmygv5CzdetMtQxpbZNUXjMT7tQuE5Fc4eoZPXbEX58gwEvYuUvMQhXMMKXgGcQmEnFjrv",
  "key43": "57aU4in667eCWw3fPYzp32TS8xovMiQHZk3Xrgy5bMLy8wbNieEahnibUP8QqUgtDqys4DrvhrmhoLXK1Mq6PMa2",
  "key44": "54G9UxkCiz9iEKBHha3XWkbR61CUTXmH7xZJARuzD1L86o8uea1tZQCBzGEEaxYWsVZ4JT72CfJmuVxUTohxyTLe",
  "key45": "3qsGZJY1hUQ66naz4ezN24wvJJsayQbYYo46w2iJ2LiLTyp8YkXTcnbzACVHp2t85mEHzaUnvobCfpzfEEXadrGN",
  "key46": "4tPPBnUtjV9qrtX9tKA4zZxAFr4iwsLCPykhY5T5MaBQp1kRJW17F9h6JV5Si1Pga7kWeeBkJ2ntQf5pkwEd1apZ",
  "key47": "2HAkZiVvCUTq4s8noj6Jdkm53BvpT3zHpgKeHgCoKXwedu1gb7Njbf3WXL89B5gmrU47SGbNNskELeyyPNCsFdkG",
  "key48": "56zWLFJWyZ7SPTphZAi69VCckgvJQ9uPzVPkwWYSa6vcs7oRnw1nTjuf6Sj4UoZSKCEegCtXnjcHB4p6bBS5LXh3"
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
