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
    "2jbxJREfSgaX9vWYrrL1JY4mDn2NMTdMsbcfhNUexcfe5tQfuyxjfoNdej2JkbfXSfy5RzX8DG4FhqRGZTZSZUzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqUq6DgyrbeYjzyvt9NLEkhearLquSZjNubXc92Bg51oARrfbXCdT28YLKas4jB9Q1v3CZdqm2LkH6Tm8VVyRkc",
  "key1": "2JnEQTG1mfAS11dZwod6ykM1RerCUsm1DbrtudnMu6hDRfZ273ewm5HpxL7vbWwfNyAXHqeHRcQQ6N8eNP9bqVbu",
  "key2": "3fKdwtvzYY1MTDcyVeyvUbQ5dqjeTrTPEhEaqYK5FsFc56KdAkvqnPXxMtgJnXwtVqU7ZQsBL1dbcGKGitANCTFj",
  "key3": "SaV23i8JpnsEDYmqbP4nf2VJoHwWBv5PTvi41rcQAJ3AtQfvcUHeAzrm5VhpkGNduXBMubwGD3RjGoGC1zSgFbk",
  "key4": "7aZEAZLKnzzHjLWEHBVQYES7nPpbeiDJYz8paKxWGdpSJKbkk9NiKw1CYXdncGb8njCXba6BpHgb4VWSXHkhSnP",
  "key5": "4uSJAUVjVxyKbGJKxDz6RPVzTxjyPcdvHYev9Xgbypse9QZxmyioL4pgfuPqnLhbPzKCy2cEbL9CSLssRQeMHtxd",
  "key6": "2AoHVCB9jDiN7uhFqbUV679o3JAitcyi33S2aR4gckD9B2XD556obT181QRSMAyiVXbMKvgteYjeKwXeoT57R9fv",
  "key7": "vy43FpCVdhLJzWYh8VTnd6hS8mN3s6pLjFU4GvW2NaxKnX8M5KmCtYKXNYm1XuFmw83kTEA2knN1FGHVBoqPvnw",
  "key8": "5zP7v68K6yFwr2KJqmRYbaSX1fzpLcm2c8EMKxZmTfdheXJ9VDS5Nb6K9wMS8F6McMHwsU64ip1pZLR4zwTPYBXA",
  "key9": "3CATcS1S1SL9CDzzwgkpeKypmjDZYPcwk2jKsjy9JHxBDsjwWwoEWtgsNkWmJvKqDz5QMGt57LV3ua7Hx5SQcGzd",
  "key10": "3EmPkQut6KuTjrwp8Btu9HWCbM5nkJPqCiCuEsAXBhqYvDmm3J7YQ1crs6UPqyMwA2PgPsbEfezRUstjACUX6c43",
  "key11": "16dVwoJkGomzWY4fnHCtLxf7edNzg4kw9xMs1XRfvuSDVbQQno5G6tPqXmaeMUdCfSWRxaA2WRAABTCWxWVmcmX",
  "key12": "2duJ6BxnWeMPHNH4qkbcDMWdU7knipVwdSqGUvHLEgUYUTPaT2o5MBjfhXn7pd44wtU9L9AvLijSbBSxgniB7CtV",
  "key13": "mmAfFJQyd57VK1FGM3zRWFyPCYLhHmer9HjtRsUTuuYoNgGj4cp1cAcm6jS9rHxMLk5SFkAZqiLZrKWYzAAV9Rv",
  "key14": "3oo2SZ6N4BHhxjv8BPo2Xw26LTu34mVGcMRdpdUqVwgf27mXQE5Yemrz2Xueif1oiBvWivDqeFerXWKbMXhowQPk",
  "key15": "sPejGpz6shJbbw1fvu75JuRQQgHEbMJQRHyF9tR3akR9kNLgA2uPSo68Jo819a2UVFAn4QrC2oGwDLcsd431ies",
  "key16": "DkrkDuhKxfxMzpTMgYUUxrikmCc3d4G1qJCKTg8arqdyjx4y1PWX9xsuLrVPXzQacq4CoD47nuKgbzDRXESCGK2",
  "key17": "ch4uALgqWagubyhj8JCKERNr4ThJp5SwkwbWop3keNaob5cmoeZaSQcd1ALrxUFAxoXLoJjCYb8WbTnfpTHi7dE",
  "key18": "3wE7vKznjwQcEk951ZBR56GuQiBSRpDFMRttE1xKinzRHMEBZwgTRYMw4ar46NiuuhA7GKkewdEpR5yqd3e4dpG7",
  "key19": "2QQB43je3BFbu8TVwYHPeZd6U3NkSnGKpEKwp9iyGfyJYNwzmKg8AZRbJPqUajMb1jhhuN5GoCTG4MXHFnW8uhVX",
  "key20": "4UsnpKrUzbcqfkgxSgSnQ2bBU5T7XnfnJjjTFf2UFAGxB61PgKbwYpCzqAUQkct9NeaxcqCNixQ9wTDG7wHmXWKZ",
  "key21": "2yBCr7mLBfvSPYE84kjvhAq2dHy2KtmQxKw2mzrHWJeqCR1RNBo2eWvka9TV47dApeBnMsTWZjfDauuCT7VSxqtp",
  "key22": "3HHGu7wHPo3dLeaVi7DY73LNAYqwUkcbERGq6wmTfGWhfoQohw4gsGTc4jBFinQTX7KzSVznsZHDiGiRaseYDRzU",
  "key23": "3iLtZqWF6QycMc9zBV9HcQknAFxCuuQarcejz33JuG4hQ182PRFm7K5igzgt8WNEufEhJSFnCSqhWTKvEiq4hPqY",
  "key24": "4tidp2wJpskuK9unkyx7GqyKfNaZev6FYevwQnTDSAcMdycVe3X5N7URZF3GiX6UifshegBttmtLarf9AqZMqQKB",
  "key25": "4EBRZEPXwqc5TNcsFEQ3FvkobXPXMSpmb8GepzcrbucseJpyrN3fkTHnUNhA8H8sbo1TUdtBP37ienqi1uTNi1R1",
  "key26": "Xv6dcZdfQJLnY67gBTJPWAH2AYiTnZwVKz6er4YRf32tWiXZm6MNsRMesU1eKrS7GoxBoDvPptpxp9HcH4LQCLu",
  "key27": "3WcnE1wtd5USupC44F2MBJxQy8BfBvXbki2HWu1ZG4hoXHwthD1eS1MGp6azprkZ2XSx2Buup4BJEbPDY4N7VfS2",
  "key28": "4iDMjE5e7ruNPPqjuEHrHwZCAvKyhL5JRjuMcp1p1ES8V5TwKB5jyCzsGRXzuBZ5xxGqFPtDEZS6TLzE6ZYVhcrS",
  "key29": "3pYjKRxRKHNaXnhqPsrCmLPC5HktXqAiNvxS7Z9WMqUkMv1XP8kwWBVRrt1Zw9d9sPDyYJEE7Eo3PaD6NzJ8ixZr",
  "key30": "4xwR9V3om2E2Q5U2DhMEe6fZph19qKuosFRrSwkxiYj5Gezx2cBxm3S7WzcpMRYP3eRhN4ebRTyeg76BJXbNu33n",
  "key31": "akUehczcZcADvYFUtWEMkpvCVVR3nEGwALA4WyffKjgYtaqR2sL79WPPMCyUHCURhZgHLkqmi9Ln2b2cmSoAV7G",
  "key32": "Mnsucw6GecHxG7bogmak5T3g73Am86Htnd6CKNskaXu59iKHCyvX8cfoa6qbwBtq2MQHqzH2vb5ffzXTcU7bYR6",
  "key33": "4eL6enCJyxo3VEPNEmay5WigTTdyRnSiHMtLk8VxDLemPyvFPJZbuz98P123guE3wVXZrL5dJfPBBSPMFvNTNttq",
  "key34": "5CyDyRYqwgzBx8xfjJAr4nwbJQCUhmBkJ5mLGsGqSunfBbqcnXC6aBM73eENi4bwrXYAwrxJ4m4sjtADgh6CwTdq",
  "key35": "7UGqqCnM29CF6LJRFGNNStN5xNF2JB2nvhJpW6rtpL6UipDPeqdG2jhf5xXybqxCtv83EqXuaZz7grsJHDm4iRq",
  "key36": "5M9Nizp82cgiKp2dwUEtpyk4tbzYvKwMbxZiMMh7wDHgKUHfZyrztnSDA6tpgXY57ftZSw2zpAsPKudomzEPBDdz",
  "key37": "55Nm1mULeyLAtPCDc5Vma3jnhGFk2PwuQK1U8RnQEFQpiYhuiP3tqq88sNsQnbVq7p6H9YEW1ShhzmRWSPHykAA5",
  "key38": "5m7PD7RzYv94CraPLnj9yYEpdJAS4B2VmX4KFVk64N7bhZChkKgRC7jVgbCus6PmkKKyqyypPSdsEk39g4pv2kPp",
  "key39": "W16XsF62X8S2Nk85zLrwbrdqMvMEBmkCyAAmVp8TbM2fyFQFKmm16gwQuhmm5qcoGBgmWpHJBS7YvFnr7rDGd1W",
  "key40": "22av5Saszt9xL9Ymb6Yfu8pcg8iJpEp2XyzTJHWfULzPUA8G517ynqXUFsqtMFGpSQDb6bXLpx7RoJd7RvmL7fkf",
  "key41": "4Aqkk7shqdKjivMtniiP2xhLkLMSfkdujKrCswYqNT2sk2wgmvc8kcdWvKtXaQoJmNwqjt7MHr2NoqQAUGGomc6q",
  "key42": "3vE5a7u1pZ878ZW7FvGuZnCa1v27nw9GDeU1ZGRAq3y3aZLxwPqwpLJhojhGVifaZRBNX4uBF6zgYNP26BeFntei",
  "key43": "3XFLsxAYguYnXbyRZEzgiD8ZUXiit5az1znBPGCe8ymyQBpF18FQ5GxmS22S7FwBC8pdJJhgr6SakeKKaxFE95WF",
  "key44": "3YhZob5f9opSqEgYYMTSgyPRp8VBqRj8zzuV5WejwxDbgVYzMcaiyxs87xUAsAtaJe7Uh71MSWxC3ym3RxruuvTR",
  "key45": "4tPRH5ewHmnQirQTNMRSrMkee3SsgrH7LcYThywpTqqav8yxN24ouy6JnHfCkejxN3Ln3rCCSVuHmwVbHWpwB6n3",
  "key46": "26uHgSLcthprW9ayJ1qT1JzdMSzgBQawoptDRKomanB2iUxjBymV6V8qP7N6oxU1vMqTcY6VbJtQDvUnSeMndgZC",
  "key47": "5t3fsjsoZNSExG6i1zAsDAZWHPJZSfrgHbJBThxxGB5nkNbfD5Evs5b63Ftsp5QvnLH8t2MofNqSuqq7Xv2p5SzC",
  "key48": "4pbRoqGeG8KTwTgyHQ5CtMs7DtFmsFeGnTmVNt1FGHXtg84PXZHk9nsJ8QuSdm2gfUJ1m9DZs5E3G8nWFRxeui69",
  "key49": "5aie2wnzhCkKpaCY79dof7UPUmubcEr2VKaCwgqZBSYZhHAhr4eq3ZyQRbWGw6CeoFp5J2aMPWKCoYYMjxvNKwFh"
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
