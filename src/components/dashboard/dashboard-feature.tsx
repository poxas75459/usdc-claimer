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
    "2fheMFcHHKR8LHoB5ERsPpUX1mr3mVHY58ZS2NhLJzFxJY2YQgmSrU8XUgudZzq5hbEMtNXt8y32GU73oJa8ptJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dw1P5rJeLcUuZgrhZmjVfujEf4XLLPGKnzsfuA6kPow731jbawKFJHasTHowYjappLWHcJAXd2e8xqLitZB7Ngz",
  "key1": "3Ey9bjUijYeN8ssG77smP46JXXT9hhLZdDJ9ZNY7u6sjXjsCJxwwpKium9YzedhouHGoMTnZPTHSNRcZycUEYS8Y",
  "key2": "29Uyns1hgdexwNtXjybKMwH75EFjVBf9sBqh2YT3L4BAcoqmj8AfV1R9Biq27MWba6HN3k87TQZ5yUJcBLgY9ZtS",
  "key3": "2QsjEfwvZz1WNqnckRk8ZJLw4gKsLKeVhgSj2tSQQKDvKMKuwUJasToez2JZeoM2UcHqRe9us3VKQepp3cmx5buo",
  "key4": "2y6ktYM3ULaLGsJob7g1buW62gzNfBcsYjbZ8DwzpWD1t5s7tLHUMAyXPiZhTVqmBiTKxUWfGECPoqyfiuJaBTQZ",
  "key5": "RcmGNVA7LWbxtSYqacpeH5FCYPfpRZELxuV61AQM1d5zp4eG13PU8iBEwxSBXafXDj2nor7NSZ82fuS8T4yUYWG",
  "key6": "5oysJiqsGfjnhQEMDUDH65WNYs1akPHqdRGA9RVHAo2hLpCVdvWu3cc7s8YCmrzZxBHu8dp1Yss2JGYsedegxv14",
  "key7": "2x2WbaRmchdWMy8hu6uDh88Zz9cizdubdAdTwrw8ctpSYuajFfBp9oWaWsXMYFeBpQi2TbbfNc87divi1Y5fdjK8",
  "key8": "5NUzW1wJS1GkcohvMhSgKrwYbv8JuDbv7LWRorL9dSBdy3kfBt6oHs3foaUUhMd6SWSxcNNmb8vrfqg4iCt8RNAU",
  "key9": "EqnrsTnnofnq4qNnDUHqwK1TSYYHfE4Jvt3R19ayBkjnaVhn321KxY7DDKVzFocxKEggKiArcU6fsX2h6ivY69k",
  "key10": "44g4t1dMhqinvp4xbbhmCxU4rf9suevg9MHdUk7CkDMh5AGsfmAZHSDSE1NuCST73x2AXjrhUWXcD59sk5qRGEoC",
  "key11": "qWFxkXFZNA92iwrDDXUmwqCPB7TTAXaEkBMt1YJKTbhmBNyKSqRVoLmsLNr7WTgHwPVQSFwgc2MzPidZZgdzi4f",
  "key12": "4nrUjfyeG9z8VRgisoQNrRT8a44epHjTpYnPWEFvhZP31co4PPsP9dgSwr9ojyj3jgQSDkgocvxgPacmpcwjjGD7",
  "key13": "5rXM1QbTZFw9qn4Gj173CRD6sLt5iMx6WEyVAMdHWpuTKTJgGVK49uTqrGRL21g51U7bPEBGeyo49HL4YGHtHY16",
  "key14": "5fCYUXE8AQRxQsL9oBxR9yDdLB3zpp4geNebmmXQSGtVUzzg6AsJEh12H9ncc735iCt97xxeRTV72fFLyDy2iMA6",
  "key15": "2HSZK9T91KJLcXUrJFu18jEgHBzfYiogMDJxpenqHPXpZtDJaUfpoC6zeQiiXMHs1sMdUvnNNkGP18toW7EdG4wi",
  "key16": "3goR2AcTWk2QYNM7ActHbWL2Esapd8jwyCCmSgoYp1Jc71amDt58EHNzAvAG1bLMFjZJDjvy9gtH2rBkU5tHbjLj",
  "key17": "3A8vmAeTouGfoFGN5z28Y66wu1v6PwVXRthxTPi1YFptfrEi74RdqvRxkhfTtUiPdmAeAVFZhLjHqKKeHpR4NBff",
  "key18": "2KcT1njFGh67MJru5sxdsyLnKHkgucJnvsisJXqR29Bb7Y5yNQuKyHyTXPpgAn9HRTbb9vWuC7Ftu3L2F5D7QFdt",
  "key19": "5VDcxfvUcZHjc5dMaghJvzQzjg39PGgNUPQRJXdQWJNyUUSePrhk9KpY4MwLknBERZJd2hbedu3GBpwhSLXwSeuc",
  "key20": "eWxAimNi61ScgRaHnVggQhD4uEF8iaHmBmx5btUPaj59rcQNn6CEEKCEAsif9fpZSqeyQHzxRG1L4yiT7DsUAEF",
  "key21": "3h7ZYAW121k8H4RLQS3DwXY26iZsk9x2xvzNbSquKFSpJKfHEdxCCucbBGWwjybGeXWBBz82WnK2dY19AJT2urzT",
  "key22": "3cq7NgoH92UNQnq4TZcWHLc9HTHHj1KfyWS9rpCrfx8EkzDziDTUTpxrbkYkxv1rkF2TMkHjyvoQJBr6JSVSvsdB",
  "key23": "4y7vJT5ZaedVxtPy8E2bMMJcczetibCVom6iCNbSGTkoxaHfGCeXUesPwkcHELPeuxqCHiyTE7v15wvEe9umkFAM",
  "key24": "2dKtgLJ2TUH7z3hPpNq75M6w4a4xDCwYu6BX69EKgd9tR55fQCV9x2pJnLmmMtP7rUc1qTCjnTpgeipSEdXrqP34",
  "key25": "3GwxEd8Y27dHWmSF2d5bnKFWRJjd218GTzwas7Mhtmu8utc5tzToG5UfPNtTxyajc9eSUHTp6TGjYi8bxGWU3Grb",
  "key26": "4XckvRBW58gCoELWritU5J3SnsXKe3N9TtCFe5N4BRA9Rqmqud77KJ1jden43x61gVj6x9KsEhcsoNVWJtQRmi2R",
  "key27": "3PPCGKPFCazYwCdfjPrTKB5PJU5FbqjipNZNetEKhcSVFcz4eGcXagy6ds7G2Z6xLc5C7HgeJ45sx3tj3cbVqPU3",
  "key28": "fWebfGbDTx6shsvMuzngvpnBVXc7jsv4ZSwcRF4WVGuo83nApieAWngTnRdTe5gSzrv5abQ3FwFmhVYZZ9fomJp",
  "key29": "4WTrTL7HaAAsHGsnjz7ovNRaAdYZLetFivLo8X8QN3Yo14sVxBKvtcpxe9RYk7PrDYCgfeY5pHF96TvTv7sLhAJV",
  "key30": "4vrZecsuv7mcow4eX19DfebVF6tkWWdJ1x1nssGseDNkk9YBKxVf3Jgryy52VFmmUaYQDyGu1hhwpD8VBsmB71Dc",
  "key31": "2cMDqsoEKSqV2w2D9eCVnw8c5Ze7vVbvABmHMbCutaHtcf1h5s9VbrS6gBTyWFZbENeniDoZ9BRqVJR4uBHfzKKF",
  "key32": "Uo4ZsiCHY4KY3K8NoERWy9f4wezx3ZiEoKv1KGDe9oNfx8Hf9dDryi3q9sFVhRLzBp4PJvLjXwzagFw5q7oytWH",
  "key33": "5QN2JeShAfykDwa9yMnbDjtwVLJfgJKispX2k5SsC2K5WGkQL9tZjfWqvv4yAbEfoqsTxRdXxc2BzyUbEpbYtJvq",
  "key34": "5v8UzMszRCe5Y6zWXMy8wkvNGMMwDcM1SZynBzyU1tZmCYTHQtqHUoYGgdnGrhpdztXKhTRcavFLaWdhDZC1dyxs",
  "key35": "yhenBwZW4t5S9Lhy5BJUonf6MnDGkUuo8YuppKNRsmuHtzVsBGW5ekgtNV3CzKkWfx7wDsUQibuNCuwAGGahF7S",
  "key36": "9NPukV2BJKDu3GJfpcQhvcGTWbr5fL7qSEh8jffkJkkBMupaWMiukdMEJVYA5U5Ji4MQhRjyzdsyCVFbvX8QMwB",
  "key37": "3fhSm38xbqY4HzfcZfrwip7xizdhbhm4ERs2xJXfVX62Eo9GZ8DnnWWkkG5pvdnPowp3uWj4MyyJVNew6e5oHUdR",
  "key38": "5JbxnhsqpGz4fjym3Ki9ciba3Eiec5bj451d7svgDagAQDWxUFpsHNUe9JuYpdsW29RiqCk5JZUUmHouK6kTES87",
  "key39": "5xNVZeDcJJWwhJfzYpSW84448KwRGWeLKqsCcJYNEQYytZcnchE2STLigiLHEQJSSauDsiuxBzUNtbJu2Aq5Lsjy",
  "key40": "67qXef6vD53gK9ZKdDfbyB6oPNFYkUSrqscugCmLR3AucLAHqJWuzr2HrynDynxeqF7DERCpNDMtokAsPhABq6wu",
  "key41": "4YP5TKQWgEqydJ8Zdw2ymcYuYHT4e7bgdEUuejsbDSVuvrjv2sVxZt3LJLvLbT4qaAZajdfLBNB4ZkEKd37UGwKg",
  "key42": "2GsS8CxsV2FxHZYHNbKzYRij8mKakCH5PhpGhTAzpsgBU2CRDfJG6ouoDMxu6D1SVzVLfnfJ38JkiFRk54eay9qG",
  "key43": "4wrbnJcwsWVXZpTK5B8HkRw4TChZBMCCm6z1RNWjz3dRb63JjN1YG98LucF11HgkiqC2s55pQnqs4M4at7wsVRwd",
  "key44": "5EziLvWogr9oQHpWxsBd8wmHoW47j5gJTCPtw5RQejQZLnjFUBvCKuJ1VRYSFjt36N6exwWz5nLR1KyTrqW7XRbZ",
  "key45": "2Kyoox2BN75Wt8UjQdpaFsF52ERp4V4YuFAmY1X4NGYVKYhLYvcq199Cjr1WT4Lciq2fhYu1p9VsDhcDtYXkPhVZ",
  "key46": "2dLWBRV7bqnyUYeBxvAMrYs9wxJgvUDTY2mAgo7C4bZxrYp4BVRTTZ6prA3uh12mTeUu7xgkth2abCBeVQdS3ikP",
  "key47": "64QLzPuqy817cnY59yVGZdoLuqHsVfJvAJWWfceuoyWDuNhppgbKsrjfjud4DwnzNz1bVyDj7KDuZkZAjojfquAA"
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
