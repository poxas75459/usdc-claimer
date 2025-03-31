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
    "5EGaERGnzMWHppGgeiDsEPE4WdE8TuD7vXWeT7PtPZFEgvuTry4ZhoEczRpeDpk4g9ZHt2ep96kbbcGR1926AXXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AY2tmbyfcDQhMGJNTLKpr6bjpwUyU2CgFK9rMfgkJYLSbzo9N7gMRavKM4kTCxHfz92NQBa97xQ5mSeTDkjfoKZ",
  "key1": "5AR8Mh1wdiVtq5RPT8dxUtWxCuJLejRKq5mT1kh3CP1j7jhA6CbszRj6zeyCFN6ytSFYzM264o4iebcibxx9QKB3",
  "key2": "3DjydHooWcq8zPcD1NQ29QpvUuibggbNuUgavgGwaCWGbApGs5kwFps5xwACvqWAe99JVX39gThxSgpMfyvU28E8",
  "key3": "2ghD6GDYrejfWECWWCW51d9WhoWidX9AbPnM8oezJJpPH4BkB1qKd5pdzkNdYQJnLgQ6hC6J2eaqsmG2nhAc7N69",
  "key4": "3unTXfyYij5BHvpqDnr38o4xqCZyMsVkaTwAUzrT9rxY1zEcz82ybgfKEJft29UTPVmLkGLuvJjphyeELr9jwkWh",
  "key5": "4QukzvwDfEtBrvhTp8thuj7BCZy47NViFbp83Tv9cY94utY3ttYVwgbZeVgdBMkCfBkHSjdT7x2SRgMEZerMsHgz",
  "key6": "25DkQtKq6HEWwGby1GxD711JuZ7EKyqFpeXFe97vx9E5DuWjwrk6QJLs9zAjb8JSi1Pi2jrBBiuCJdj39E6dCW2F",
  "key7": "2Guc9JPcnPyKqWANnNvjcWo4FUFK3GirYNhCGYXsZBSDv82a6Q6X25d3bXDTHHSMvvMoxMRK3qRTyBZwGnygAdb8",
  "key8": "3jeUAKAdHjqfL2o72dz4XAVbZonFcAkcrCFsCyrCdrDFijpPasAJMTF5vuFzLVyxFs6SfsX7RmLJwn5S6wVDLeDj",
  "key9": "3ZpZjH2eSaGmaGUGStDfRv6YB1qYULZ51dsjgYkisZatGdNSALbX54wx1vFkknNgzFNSUq5CTStiVwHqiUbetyAk",
  "key10": "2WWhwByoRSSou6twFYCnH5qZimtYh2etFmjpYKfEnD4qokGiHXRUMNufmfwp6danAHkaA53oQhbqri2Sakp8zKrF",
  "key11": "5JAhcCLhutctTRzPoc1Y8DvKXTuzvQSrPQtcgFFQ2tUo47vXkN86ykqgH5XXK7dyyTBiuuXCgREf2HYTpx6pDA19",
  "key12": "4T8arDb3Ki6K339VZRLMNJcbtD382AK6YbNyV3Sx43ooJJ6Wuxq68QTrMTZgSp9YCMmqCoqRHorEpNnMq6cQYqwk",
  "key13": "3moRhPhubv4xNsY5BfSdFTtddVDC8fXHKMkVW8enoMgMSyQQxXGTpyr7GWMbACuuZ6uJUxJR9WrFpMVYahECrUZV",
  "key14": "TApMBXqGun2i1ipV7WtEwbmJMKKrszEXQy4DsnYSYxTRtDskjgVQD8au6AKjApimdSid5zzw9qax6JXzutzfA9x",
  "key15": "2KADx3qxuPZ9UjsPKkQmUQiB8xheBHREcJEoYenVw8p1Gc1DMg4VV3jczyiVyza5bCvzjwgFFtAu1M1sGMCgFY9r",
  "key16": "3dSi1zNypGnLRJ5jGti4Xyid5FqSNxFFdR6S47a8oDzXpoJJDNjutBUScexTAsN198bcFJioMwYm1yyNrgX9PWB1",
  "key17": "25qA72mWYqa2WYcaKJ3b5GjenfhH1QPcuuTGiByrudG5xVDb27WvhKGAstEFWGcxsoqa5kwYgv6qKFiBwGmYQG1e",
  "key18": "5MLmB6be28rkyYMRDsKCsnoKNzC4BqaJhu2zxuKUQArpgEjm45vpZExZGNaoSkJ2FJLP5oN4gRKQNcn4bTJChZbi",
  "key19": "2Xx6wZ89S2RvrhqeFu83MqMkqTRXyBrucq1mS8i9Nuae5oP8hafwjcPJTtmssgYPqzEGWVuQaM6dua8TJCsNo7Pn",
  "key20": "ArmAt8ZdznW244kkZPT3Ho8cGNJznbdGEpxNbxphJiH5SBM5UjHred9ReVgEMvA8LQuhTENgGs5676dzYJsdCu6",
  "key21": "D4TmcAiVZCMuCNgy7xEKcA233KYMJz7y23UAdGyt8NrjxwZoNiL7WnpzFpUaHjGmUPiHBKHBFbrdvxzByzv4Jz8",
  "key22": "3z8HwK8vWa1qtk4SGJYVELRxmgsgEunEpTizsqCkEikkm9qjnnzWA3ptjHbmoXa85d4shT2qQpznfifvseAqXLQB",
  "key23": "3sBPkY8fXmW4CmeR2bKKcDio6sKTZ5jkCpxvEuPwRjteR2EaaMFvcaza8NJxsUtLfz2YVzhzbxHS9Tg8CFqsxzyB",
  "key24": "5UnCqEDLTwfwdoLH6sfZHcynDikN3kxPAJhsY2dkgvbJLoWoAV4Q9Z1iptXQ8tgHe23sNpQvAJkFnNf9uCuTTrhn",
  "key25": "5as79VZQRSuFfkirmKCjcYsXQX6PKQcxYATpXxAp522qSw92rnWn2foZShZWGjdA7XQe13YBkJfdXMvTityhzu6K",
  "key26": "2dFyc9b28of4pEFLo4DaovGJcyKHcjCNkgvsg5hNp2skTdwyXS6BCmdAPJctmU2fr4gkM4UMkAh7N9YY9Lsfur1b",
  "key27": "21WHBfmMR4aFUetSxW8nFgNirwcT5qmjnyw5aQsFYmSr98J2yo4gfbfKUqdgXX9Pf3EP71pFoWjQAyWTmKEbpYDG",
  "key28": "gaaYJiqY39TrGJva8vg4Tqtki6yvUc5tiUPVzARQBJpQkPg8gSDpFu3LHqs4iopKfgAJwxSipdiLWpz1JMEdKCU",
  "key29": "5tRRA9tbdNFivDYK2fFwHThThbv2zoXYezyHvdPkKGK3DQPBJaQuM5JxZ5yWcpuhuhxVCT6AHVoW1e9ZFztSPV1c",
  "key30": "2E5N1gfSr8LMSapCf5VH9SFJCXh2C2hw94pDNKV2Gk7TjKnCFbMdbJ7A1CMiJ2H8AMtUpastcN6VfodorzuTjVYa",
  "key31": "4ziJZBNHxZif5yNkjUBfzZRfuKesA2JAnNhUyEfzfnwY3n9MJVp5h48J3DhKRSa57dG6Zktvd69c2nnmPhUiKFcu",
  "key32": "4hb5nQ9eKjXBDnQUPrz18mSdVyFuRM3rk4AzbLFPSjGXoR4XiyxDmeKkGhNcvGEGxPqhbQbhUpf89bbzbLvt83cX",
  "key33": "rY5tRA4foxcEVRAdyx2cLFtdPPEsKQwNGVkRe4sSpRtkALbUoWgyJABLkpekNWduarfmVkhtrDcd34sAixraY2E"
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
