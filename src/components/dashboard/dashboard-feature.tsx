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
    "2QGkqBV6RNcW1m4uu7Q5M7woCjRVFy1rbCDHW9QJ3JA1jFwgoRaDr1TVM5VsP6dh3d3aEwCwCcbeD34agZt3HoEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLR1w15mtKPssZiEyrxNPJjs2VJUpd92VFGhmgpU8q3QxxMzYGAa2Kn2YXVyvp8iQxTDBvZpryCG4z76mWMKFZw",
  "key1": "2BMden9JgBNiuzaehBMMGZfUmvhekpvsuUSkMKNzGSetBGhbYLQceuTSHEhft2M6MBHncUw2FgCeTqbjqYMjAFur",
  "key2": "2H9znDyY1U6F8tt8zycXeWbEiN7TNdAihgXK89XLKt8BhXUnoPsSJ51msSYwTLPHcPHkZkXZG7aj53n2wSeusrMG",
  "key3": "4Tqnh8nQfQWdVXzNcq19ZnP8ukioYY2epS5SiQvAKzC68QwVK4YLy4WrwfGhTEPWWar7E2GcPpKAjCwDDqJLgDY1",
  "key4": "4ZQVPVqM9VDeoKLgEiCxbgqDsT1FtSFbrYoZihREUZiwKemxRc9pRnRHnf3LgppG7VUw2c1GMTQGz5d8TWR1Ztrt",
  "key5": "TDU5gkuAhXn5gcQhcMmPZqqNzVHRho2c4avZSMCodxtboW3US2o3Vn5WZp7Q6C7xj5AE7PKqBRErRjEYgpVumhW",
  "key6": "4UgzSDdt4dH42fV7QwMEeibvvodU7qRKxQZvixnKS2A5ty5xUBn5L2gfY1Y7bJRnQkAKFjYTzmsNyhGyw8FHuAXN",
  "key7": "2CDLNXn7GyYQYtgTi5o5f7VyNypYtGoSDYU2xkCspbgYhFGfvgJHgSBKKwnB3GhRXP9MjJfRc6ayMSmYHqKMFba3",
  "key8": "38wP7VDtaLuGxuthjNUkHz4u52bAYUvG2WxLdpxXKJ4Vj2MUQQLNKQ1GcXs61dniytuVHbqTefK4QDZZr4ztWFCt",
  "key9": "MAUT1S9M84Qy3BwQtQ3LGns13J7uA19MNVGKvmCMNEEZxTMAKJ81jSDFhfmruT5yTxe1wREmVcV4urbjx6uFm8G",
  "key10": "5BvkRRVr8EZa7rrJBT544fNhaEMXoPem3MSaN6QWX1aWZSSxaECucjee3ZEnoCuE4wNsB96YDfFZYYkTptJVtCA3",
  "key11": "26fZVUu8wbVJ7kMCZb9rfSB3q9MErZAKqn4WWhQV678ZjEp6od3PcHg79mYP56sN49N3mzQf6V7Yg6Z7C8u2xowu",
  "key12": "CpnmnTMRBPKhqc4CXxZaHkNMxs4dEcNWj3ecSzk5wxGBWAyWBW4bJnppXXxjh3ACvmpkcxQdERjMt6spGVHGAox",
  "key13": "59tXYUt99WRexfLztpwerhpb1wPunZXKqFKpfHNjFJo47Xaq39aNZAD3DGAKx6V6x3QAf5anooGsNpsq5m3twRTr",
  "key14": "4ZxyhEv9i7YysV8kJ9Dz1eetNrtfciDbhCrUKjZvnZ5GMRg86JDToof8VDRVBE2jty1HcnL9VeHzxtqADru4HqpZ",
  "key15": "21LvzebBWww6r3GZPacMaZ18KNwNdQ3ZCNGMpNBpA92DTmGptsRgPB2RtC1zSXmBR4dybKPaPdNT6Kc7wDKoo9Et",
  "key16": "c8GbmVvPTm7DV1xA7dfS2o7VdEEnZu1HBN8KCKzaFPEichRz5AbWV65Dux3BcVKCPP9GoZcTdjVikagiYfwT6xQ",
  "key17": "tuJkHySbJYnt5fZX3ap7M1E8MnempVki52gEigsV9vsfuyRDkhthDKa9uKHSMD3Fa6gp52K6eUA3s8nxSMErL8a",
  "key18": "b452yzi1adDCRhXYBSxNrYHj8TLKK1RjXm7kqo5SEXRN7iUgqbAnoNFDm1DuqxuccRMz3M4cq37hqq3HKz8mWe2",
  "key19": "5kg6eTrFKxwvNd61fvbdZbyvYmEwWu2ZjznV5HXZUmnCJ1pA1zqP92s96JvV4LVxVDcuMg9JN71UXavujipW98vK",
  "key20": "4qtLcTXZ4bRmkqpTAoqmc5mr43WZrdtEa7kV8emg71WHp6TRGWNy4V6pDXBWM8FmaZLn2TSQWvM3YDjzHEXVVjtE",
  "key21": "2ritaXoGdkcWDyTC1puFHAVtFz18RHUs1Yyh4KRxu1jBcLY7xFa7ENBuiNCmf9WjZfsXv5G6XwdUEq8HKgesXc73",
  "key22": "2DUgX7v4CSvWGXCmHxQP1WEC5pTP6H5FZEjV6CbsCf2KeTn6zLdEhQEn28nTnUcZnSqAN1VW9Y7vvfDR2SmxRn8J",
  "key23": "5fFSj739soHFgBmjVyFE78jhshk4rpMWhCfJ3SSH8ExePRBBcQFetFFBg9Fy4vrpNyBC8Y5WjaaGJrSX3K4kDRM4",
  "key24": "4wtGKE38549NLhe1LJo8sqzurqoM5xWvnCVo526suac5P8W6y2VFSeHGjQFV2HtLJQy42Wt8i3724JRqXdgShx9Q",
  "key25": "51oMoiYr3WCaSuQZA5wVttrD67DHqModBkhWX8Twk6qRx79DkCGdkt8UmegAkdkh9ZcciSzPj1CGBhXPSwU3r1ep",
  "key26": "3TfMYoRCcgShDqVdGwkkf4KFGeg1H4Uf7DYSFjiYAShaASjSMpFX7WofZU5kpaHcvca52mjhfZ5TQFYzaTm9DaCS",
  "key27": "4HhsP76NcHbwmax3WDEkxchCwKzcRkzTXk5BzUWCwgXvj3QKqBCg57kkYAVQzrFTerCcTh2VEo2z9wzRZqyLMsGA",
  "key28": "3w5n2kdLbCkhxCq5vuhXEUoXoDq3D95hcDynzjZyikFWAYCQXYeAQMsvMtNFoPLfP9QqvXEdJ6KeoCnKNqjoaPcK",
  "key29": "vP2iwGojK2no7dTT9aj7HhxA83HeTunZdPTLyE3psYiLjgxrdeyBbH9qy2XTD6v3ptnW8J9BDr6GdQW9KHrSAse",
  "key30": "3fVHPkab3iNKdw5ADYubpHNnddxVAMvgy3pxXCzsmD7aQ1z6paNZRD9DobT1sdpvh8vRvzWVrcKMGfkAhgpTeTCy",
  "key31": "aHmdDKr7SCuRFPhghL9AdxqDiNvW1NijjpQVptKoBPoDm4UV8dyt5VapqbBSswmqfmHqaifDea615sA5vsYpmqw",
  "key32": "ZqcC2mCb4tQHhKscQCmt1cPhKZrWZPptnNs5aeYsPjfuwQHCefLJXJ8F45pjgy8kbf2Fstn9sUDjkwNPey3VroN",
  "key33": "2mabRfcczCipFpRyWoKx4DQ2kJ9kHNj53wJmnSMYJWTkm9sfaxcS4grQCgPBK8z4uoQSxc7G6cgAhXCS44LmutgH",
  "key34": "55fsWG9pfkLSQuUR1LECx1byq8kXPt5grWVeH24CWjLrMbmKhs4EUTY9QKcdpWhM8pK6oGBNZYpir28bWHrahBnK",
  "key35": "4kY2sPwb6uxPEUs1zmMFxmcY65hmnsy9Gin5NcbzYzZxxa73nnQYYpZXg1mGuYWfsu2r53yASfRufP7LCCYa27ok",
  "key36": "47wLeZHVwqGF3T6tHP6oT3vmqNSMi24iZeFWbc3H15TpcMCtcUWL2TA3KeYxh2FqjVTZpwEqUvKoq7uL3rJnLVuu",
  "key37": "214CYstxtt7J4izUeBX564AqhAnvRMLiEXaGnezYRNpy9ZoVjie6dFRPNmLH8Md4vCgXJez9PhP2QRub7oeoitEM",
  "key38": "3hhmFVkSzpiQDJj1SPDfzJ8gYVSJ31fyczKRJVyBoAo8br55i8A8FYxBAXm3tfv4FdALjoWVRtKFSWmc45Dcezyg",
  "key39": "2gCg3MhKEVwT6hsuruU8QSVdGVnuECMzVpJG1i6rjMgsivqs9DnZ8qRa5HzeE497TAhqmuGdDKEb5x8sYvxcQFwT",
  "key40": "33zsffU74dZraRmZVEdtqw1JycbvV2XEVpWqQTLUfUCwD88288CSA7BWDqNj1Yhmu4WWRfWR8zaU9kpkrgHYppou",
  "key41": "4hfdUw2G5G1MimaHeMnkcXm2hXPz886U8bQ6PKnYsYBFBX8K9J9vXmKKgihVe6dLmm3deZpwc3XZffPf2DiBcMDH",
  "key42": "49GrkavtgeQsSVPNbYiznPrUcgJZvkdtpkEHMvc7BHryeuRQcx1APHb6CdnB3L2qV8DukoCi5u8dbv6fGn6b4Tm5",
  "key43": "vRU58J9dFf3iaEQgMERS19YBhSeuuXTZ65JVHfSLdi9wER8cPEZky5FsMDAPDupBGYAatzd6rL95jRWhWtmah7u",
  "key44": "26yxPKoXNqJ7E6SxhMQMfB9TVhVpYXFg6kNmb6156YNdBXm6nTXriVinPkULD5EgfJiJeDDpByLKsDW5NKRrAFVB",
  "key45": "4WmhtXzSzXZEbx93r5qY9DvrHKJfJwSrmYyfhjjZCjdAHNiBvmZZPZ71FzpWa8LePLB7qGWH4iX7PKYPT1QjW8Yu",
  "key46": "3jTupUHzztRG7yebD1X554g3nGAEmdYeMCj84eA791aSxyZkVA2m6GTjeAmu3dXD7nWkuAfxsGiCxH2e67bgSNmB",
  "key47": "5UsX5JK8R8jMza3GS2XcRdMwkZgfbABEs5ws5PefQjanAKSjbMdQSLsnSU3oiV92FabUzx1Gef2tJ5pqkXv2xZWK",
  "key48": "KDoekt5Qy4Hc4VPFgHTuD6ZvuM7a2hNghqnuik2BKmmQ7sxcNt9YDQTsFQGbWst1JrCz2KaiRKjJBDYpm19HXVi",
  "key49": "J2buFjr8gPxRP8L2ay6PZTEopciyjgizN6pyRrxENFLhsn9wb8dhkoNdnL5mJScGyb4vDQbQ34Rj6W67n1XusUq"
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
