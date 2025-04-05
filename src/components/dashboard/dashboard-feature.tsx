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
    "cHv7Q4JKxY2zcb5jV4jy5gtXABT4vJuVQCuJgwHp9xdtXJzVRSugaFtR7Qznorj3FptmFSbbpvh9JvE1JyTCfT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i87iSHV4qWtqSaSvQQ5wy4qJbS3NxVsSLPLxT1JGgNV9X5rAbTdswnDvQPHkvxtApBH4GSWDAr8cgJczU79pPeT",
  "key1": "5Az67RgozbnZXm2xsw4XkwsB3eJUxQ8U8kvMzmpY5zE1WntxUBxB5jqS1ktFrvoHVhvmo4uFn3ZUZfCMbVRVdKg1",
  "key2": "3C75RYLJgyr4peKUppGvCu72dYtg9EKZjMw6T8gjSo3Et4KLAM3UtJfLsTynFvWKf3n9kBnWDuf3epkJfmDUjRrQ",
  "key3": "LSz9L3DTadKFpBF3eVwpgQGqrD9HGT3EnAjVo8YATCxo2BXvzs1XD12h2jeMQncwPRoocRdBfXNWaFw5KGS63YB",
  "key4": "2zzeoE1zBGKazyCWu7BpabYJX27Fc6pNVR86dKXtiBhzGWgA2S3AfXFrKxaWN59oz5CrX5psB4AfFqMve67a1JdJ",
  "key5": "478cgdMZRArLG4uRQCQqxCMf3tTEekrfuDJgTvNnL6cyVqRyZYPxCbhxtUyf6MkNHUuFCEjCm8jvsJQyNBeAf6h8",
  "key6": "4wTm8JgV7bSgPtjwdynGdM8zj3q53NkirKPEVmnLvX9YYdgv3MvsBUyMScyTtv7yaNr6YnpEbJhBpd6wbQPtyNS8",
  "key7": "2yXnRquMxMWP85AYhtG2wTAkEoz49roje6twLRrMnWSsPdGwyfkLaX1PgLjTVkVYkukJKAKLhnzuDwR62YekekNA",
  "key8": "63xmLF76AQUGVe7GZ4ehG2VTVYvbKBHPkgjAjZgQe8Pu4byGjznbYrbzHEJPp8nJ99RBkFyzat2Cdfcveykj2uwA",
  "key9": "4w3CpiKxKRCiYaueqoBiE23tvreoNNvMeC5x2AGxvU4WMYjxHjCGnWp44fYuZWbJRiEMfq1PCaz93YPByBphtyD1",
  "key10": "3WPg3qcb4qU3hyj4Hhs4dkmEXN2hxuD9jRbuFZQpEfb7o8E6NiJwFJZA3e4HUZapkXNjLsRgAYcBtS58hv6Prd2o",
  "key11": "2ccLfKa9qsdnVSsGVVfD7ZP8hPAYQ1Jpny83K4dFeB4stQCMBdA1nSRyU3ooGM9v2infvCKnJpk2dsRpJLwVkRP",
  "key12": "4XWk498eR3x7srvRpvt49aU9gmmMCeQCGu9DAUfEq4LbudjUEAvFUawfMUt936JD5ud5WMDq8bTpFYVysxwfnH66",
  "key13": "3ccDqGRmePaJzNsYSc3M13CWnVJSLQPnWR2TN3Nb5wbsKbYHznB1TDm8d4SpwyRL2CAQgRMtHuNjjq3PScKswkmT",
  "key14": "43MzJ7onrENkvct3o8bg85CDDhqYZWsKz3SsEYHoSfikrk1SCobwGk8GJwoUajxmp7RN3CcbM2zptjMnVpNbFRGY",
  "key15": "f1uYajpKriuLJ8dujqcpo4kbACVzikMwDp2KUPXbyQ8k4b39AkWrjkpT6dR6GxexcJzhNs2mwHZfnwzWFGaz6De",
  "key16": "qGVtcvLKM4YJy7Jysy5oZnRmQPnXkbjtDvPDxCsd5jhaR71za8heEKz9ywgVqNBZ58gxCwdQYGJ3vxX5EQUg31U",
  "key17": "4UXMga3ApN9YnrimPibpjvo52YWxda65pGgQay8Pjw2hRF24RQA7z26d9STnbYefTC4cKADFWTA5kd2ZAU4iaQ3t",
  "key18": "4rwMLttQbGZnDMNkMVMuZ9b2x84nW6wD4gz1hwSxq57FKYNHUcMKKQmPodmtYNjJp9ZJCCioSFhzx5ddQYybxwuC",
  "key19": "4gEcYuXoYYUMLaKMo1sNLC2gWLLrJ54fbM24AuGnRgdKhp3Ey44jt4wwpX73moZ6c7AymS2bAh1tapcGCStR3Dwb",
  "key20": "5EdVwtzuv4dp2H5yVRwNDsE8EgTQ2ghKdNF9BFNr6Qny39vto3pXZGgNWhmdAwwnkqCjSRtFSgx3qqyXDFVxh7Eu",
  "key21": "3CjeRGQxFHSTBqurBeyzEiJ9Cm4Kdu2PPSXGJxVvv6WUcXS1TKKJYHbaQ9qa6stCQCrmo6L3VZQrmeh4okyfdPL1",
  "key22": "5iA4LT9omMuhN1KXGLJ54JAmAWH7qY7C7EX5LE6UMuuCv7yeNCzUxNPNT3TuddPJUubvFdvSCoiCQYmxpiECFzd5",
  "key23": "2BK7UNcyZFu9z3Ppjgd439wSYNXzTHjMb3Rjj7GdXna3td3QW77hucduWhRPW4S3orY5itTbDW95QfVqngAJYPjt",
  "key24": "3e7pQC5opecLaB4pufFm9QDMCPJSh5QfsrA8ui4Kd2HXKdMjKQtNFyXtHNrQRHDmKgYw8MJpnF9W2wzyb2Ax9bCz",
  "key25": "2K9jyp5rVnsCd1RESUp7BkHX5yHQqFsMEu9ReKVXfG5EvRJxRASLpKC3CFTViSpCCK4DCDATQ9Yt6MtLtPrMYKsK",
  "key26": "3RtA1CJCvnxmSwDjAvEbPfvcef79n2FRR8vZBBDHDJ1bAwTqd7F7fc64zaVrjGmhaDKN3JfNWC1jCT6wkKsNkdTM",
  "key27": "HehsvzEysr35D4koDkjh7sJ6cAtSGghFxPxEVMULSDP4uiiMxbcS1sbLjopafJwuUyfn9ZNtAhPvxuw7EF34GwX",
  "key28": "U4FjyYmbkU1bVSAUpwzf4L1F9VgvmgSm5iAoqxKeN8MZVAqxE8q9vXUxyQiQefBQU4dJBrSDnJJqbDw1nMgX3EE",
  "key29": "5rzdnxP5PRhH9hkkgjLyGXzHCrhq92eJZiJuhcSinP9zdEVDTPs3SMxCnWogA8j2j1231x4KDzy5VzGqoNEC1RZh",
  "key30": "2n8vwb5FNPbbqn5we1jF1uzciHSbipTS7XTr9K8JLaQmqxjfwXTUNLYX2xmi4sAtskGccCfrdZ5aRcpRzcUeyYhi",
  "key31": "4izwtu84EVWJWjd9Bi5Xd1KVmGKG4ysMEkU6w21tfBWoC8xHdn5FAQDPAYAK871umMH66tnBrDnTP6doDXMd3UdV",
  "key32": "2v4xutgwP6v49F8vneBvZPc4CN7NsxJK1FiJgGda2SFj5y4S3CxtpqqPjLSup447MWfKwF6Vr19U6kjLCgP4pnBD",
  "key33": "5LSFKDY5ZxrwNMsJYbpcEGoRgz8o2xhTDzK4gDWvociv6FxU2sPivvvcCbKZ6Wv7CCMPfA77Lcedo7hPeVjHfUcD",
  "key34": "JQe4oMtiznLWsk1jzA3odKHcFwgvp4jVL1Bq78G18sWPXn9TT5eezktZEZ52hEPdL1RucNje8jrVtPExQU5KgBw",
  "key35": "3QgxuihZ5HjSSirdVwNqNjYnwRthbHCPuAWbqRt7h7E1KPgmDhF6x63gpDExG1u1SgTVhbZ7meBupcbxYCQiTQSz",
  "key36": "5u3acmfLxwygnBEgb7DtyXom6LA2Fk2BVepa36xFkQxBXjuCvg2C6MFZQodZzcDUyv5WxxaEkUVK4pZfiEMUYfLg",
  "key37": "2T9VCFxMZjF1r52uC3dUhw1AdxqrHkBApHuQQaW4rAjXgeGTqj3aci1fmR72xcpAdBmsGqoTnD1uMLff691xrdy7"
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
