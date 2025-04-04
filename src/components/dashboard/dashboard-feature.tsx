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
    "57rNhYNEvpojuWYaayejYUaTmVPmQwd9thm9rzMnEfT8iozN4MMXzMYuFda56LiUYmTvV8DjzpLvNDMdVz6u4BbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBChpdwQUfGGV8tN1AVJ9DYq7sfjXq8fh5QXmoHhacxab8MTLGFPL2vK5dk4rCyLpMc3p7YPJHCtSi99XA5aQfw",
  "key1": "ZevMM2BevFqwowa5KeV7mh9XAueyAcVvXMagSGwm8iweJ5XZpm7Tfbg5SA7JsBpHPTT3N9sD6RMopKk6PGr7Bnf",
  "key2": "5ik9qUhwFSmn82uh8pY8jgJ6E8zKFZKiGVZg6bUEcjXmvac9U9vVEsQev4p9qbtbDAAzfWFKSDS9kBcniVv388Fg",
  "key3": "52V288s3DrPfawJgHyDVUKgzYr8PCk5H7t7BWPcfx8jtgZ44wbG4ghiECXYDt58kwVxWvLGdbRPgiLmfFdt5Hx1W",
  "key4": "4WVcHz3Y1ejN2A7Y9PChhgB5aUewimBvB5Cc5voSaDuU4QAL2YRvwzLWcipFP3CA2dHPTKqYbs6e3SJGAfqG7thF",
  "key5": "3pTbPHYb87jphDjgtuXvU7sQ2J4G4BA92kzXBFNc6oMHLWYEDntivAmUDGKfuRZNcpSHMdQY5KL8ef1gPrpmqgkN",
  "key6": "2VJqqFA9k8dmRqmeA1R7D8on5mAGvqAqEehMQ36cZk89gDUrMPumyVuFxrMqeSVMBhppnvmncV5zSMHkq8ZFnGDs",
  "key7": "4GG7NUwfSaodrh7PVNWwew6WwAfFnpxMehMrWPs9NMDmYrhur1dKt83K8ghhAK8rmXHAmzHhZJmzLimSki5TpYbv",
  "key8": "Y9vXS6Xbf29KMHXtCBpUqkugUF4bAuLVQcgztGEFKSb54GotEGpVmjwZ1abhVmVeFCLCxFNyjgF4JStSawDVPAm",
  "key9": "2DHU8bhte3xCboXU3bSbe9b4B2F6tG2PEgtasuacugJWdNsa3WC7NntW8QmPZcZhUEppkctQCAAnJs81YzQFhUWq",
  "key10": "3MCJsfLRgMRg1ngyPkemkKfPmkRga2WHUqcB4xXaNmkr8m84dsjmBoVmy8dEoAY82NkNEA2R4Mw1AE7S4aSs1ZJS",
  "key11": "eTy95CpSgvh21WLR3BajA6eZvGQhvNQS7xpCXc49Pecs975XTZYyfaWAxXpk1VnLxiNbTxa2pPrq1oHFzor3Stt",
  "key12": "3YKkPwyE25u1eiQnhy51q5V7E9MU2LjfFubBEnFfKCsiTKyemRw6tqAD5j7wRMpuweD8oAKsrzMygiHXX6FqGtnm",
  "key13": "39Je2pJwtFPMqRD1vnBKsHdpeac6qMQSmtiExmoKpACcCf6gXJvnrWZge8hyFwrFmGCFpQhToccGEsgu5Bv3bBKR",
  "key14": "2SJSM2bPsVzFADr9s9STYHdrjJohxBTe8gEoXvnYtAdgZzyP3BfwZEbCbxCwXhnZbV6dtvgKDupBiGV2xNTSbCRd",
  "key15": "4MfaNkXetuHWYN42C5ADCoKrdD8G1XaaEAbiPEFQoijjHcxesaiSAu5mVhKKHnSTMhm3YT7VpEyKmXvvJRPCJZiW",
  "key16": "5hTEourRrvKggrfYUFFNyLFtBQ4wciEvZcmtb18hbmsUZfoADhoijN5tzRVKtabbNqLSYxoNfbx5AGUXJhxcHVQD",
  "key17": "5GZLtMP1JG5grQ9cJW7tRhE2NjuuaC8RbqExdMPybzqCymwr43FF36sP7SWhwGzaKu9TYho1SScB8Jtns7pkLqr",
  "key18": "5Ux2fTyZDiybXFWKv7sJoADS47W61b5h7gBktK9DGuPftPEvZrEK2qiFqXhEknnr7rEUz9UQoYBcc9bRq1L8Up1w",
  "key19": "46EK1tK9WTfHwHrbeLKeE6gXZwJ3ZbjCrYZ8VKXAeFTci29mjS29GdGEtusctALo9mDzQueac9FVhi2i1GqMMFrw",
  "key20": "4e3w3gLr5BPpsZ8cXNiZ6U7jvm8omDnhdKoeUbnagayvxoj256eh5xsYDRw6fXrQagcHW13Br8yVJ8Ey7tyPmfNo",
  "key21": "3eiFvsSyxWFNAGoWKPtVRngQtLywfKxjb6jb7coAZKikH9fis7UfKzVkuSqHEgzZQghBD1urUXuLpj76mJJjTrFA",
  "key22": "jB5WoYBRfb2anbsrvcv5qU9dMnBwJfkmmsdSmZYtUN4eh25VmmzECFEM2nb1UwMei6oSUuLNJS8PJbV1FA7tuns",
  "key23": "4CnPQkmu4Bdyd1A65phDd6aCC9aetaLAxUtk8PkP7NLxYJqrkGDLc8qaTfbq2QR3bj9LBAUbutYYna9WcTJHck4T",
  "key24": "3DyrmKyHiTDEqJWs2U9wvAsVo6EdHXjLBPDAZmdxKgotpf1wFhYok51uZBtwqq2k4EFcr5coWrJNmbz2XPnp626e",
  "key25": "66M2cvzLL5JuC8QYWZe2n3V5iWFNqLUPZQ3x6RuQV1AbeHhb8DMs1vAnhSTCgpkbRFkioR3LsadjrdWMaKTajc41",
  "key26": "4zYryHW3JFsWETazgFbDwezgjTEcXS9P3FeW7xwMeq3q1ra6JRwSdQzsBoNxeRd4FQ9ERxXqaZYQHaP1GbzER5Mu",
  "key27": "3eBtCVL5qqKBMgDHPNmjXimZT24CtYWiy5iX559qJh8oBTbDXz1zUFdykXx42gzT4EJNUtZdDw9GwfPsRQh1df21",
  "key28": "4LqsaWbwqku7P3w5k49sTbfUpmd4WDFmHVY2xk7eeCFg5JV7VX1W63nFPG8twg47gZ2HHhiJhz3iaZSYDmTbobDs",
  "key29": "5ubtt4qSa4i1UtdYcwzbXzRNwyWgXEBoUN2uYE8F7hNotD18SCsDdQsn2eBsVHgFxpM133TKQd3v9BdATLvrrfqm",
  "key30": "2keQMyTqFRPJQ6fG5U2TpGEXNJL9QZLctxZfq3FJ55GbnN26am8Z9QTRP7jJKQqqfx555pRdMDuwjGj4PyEsYCPD",
  "key31": "64ceRhB9GwY1MjgA9VekGwGetdbf3MaePAgCW853Y8owVjbX1fVgsTsyMadtyaf5ARh1pbYbTTd2YznSia9gfxdS",
  "key32": "4YRPMokYHTCJTmdxjpQiz86rWyfP8CWpQMubMDh7WD9WKm7rcEWCdjWav4LJKsyCKZy3zjuUNhAcDrCffCVHRCxZ",
  "key33": "2gwRYyX2DbeMga18GkCoVZaQL75RhijSGLsMC2ySXyTeJgHTL27DvuoaCW7oXwGCTCCgRYZgUvEmtt6cZPymG3E5",
  "key34": "524E3huzAb6FZPEKZijwAqoBxApgVyrBy8PPNWWXc55ETjAmkci5xFcAizdRnNpwu5m2ZRS7grqJVTdeVLyoYLtQ"
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
