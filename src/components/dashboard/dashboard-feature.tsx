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
    "5KWXDgigQ6kkE7R7sqqARTg4tBYNuwxZSw8CdZqHdzWm3giEfHEiThuC8QBmoJ4LTnndBRznbo6KbRYGxDxNTcj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXbicAxUuKDZjbEyV6CLkCBZa9ZkvKBN733pdF17GBVL6k7j9J8Hw3No9LgQUaN9hj6NpAc5inza6fUravwp1B2",
  "key1": "F9C6zJ37xWtdxTcKg2nc3ms51HfZiSyPHGGBUST9XQiTckLbPDMuiDYCg8VT1KAgwtA62P6y1qVqNXZw1kNaEaV",
  "key2": "4QMnGccRkssDQVCCFhxTUgjzQPBnZyK9KS8mVMu9hrFxTMwmyVmUAje1bWxxbSNSfqedEqB6KLicHw6joFgFHR9o",
  "key3": "27WNj2n9SXR1e3UFLAQ3mHJkDukgMQziRAPDpcskdSwK5E6ahmsvVMAfYELYJXWBZdp9x2CtV9t4jKCvbiiHyv7c",
  "key4": "5m6yrUcE739798ycVqaVvtoPnn67PHMX2Q3vApVqFG3aBsuTCpXBzKVmE6DGBDV7cq8L7Wqgp3jAnh3pM9vX1Dqa",
  "key5": "5g4MhWZ8rMn4RB6cBYbM9nK2RGyrdbSXv7CqNPZ9VRtxhvt6T5sCpN8jev4eLqndQASb1qeHQSuRNsPrPk4PaZG2",
  "key6": "4pTEkhjaSRisqySCH9Lf1eRhfvvTFVhejrSyRiqLA5UyUJTuNp4pPJtEubuo58M1bMz3SuQv1Dt8k9oWQ3yo9wKq",
  "key7": "333uj2HSzwjmd1sgtWyGdwdwEMoCwPHHXg1eez7mnc4UkJniqkXysVcnM99vKgwS8AxkUzArHcmYqVKuTGquiSmu",
  "key8": "34KMg6mrnpnHsfkvwS28i1U6VBCN2zHZRE18z4jM7KzWLrWRPk7LjV8U9nBoSWZdXTdZcVQ2L3UXHDCa1yBt1ZZr",
  "key9": "5h93cLnwpue9uvRPMDXpw56C55jybWd2b1MAVNLcYd1hcP1BEPueFYmKgDNEcWN6DfMo5VgnzsjqPM5iJYhkxc6U",
  "key10": "2ediev2Prx8T4nmzJyDjfE2usvEzfQT3ckBX2yCBAAJbPqxfGTjffu1GuP2xUiaCVdJkH5qYgzSLAQ2GCCo7LsEN",
  "key11": "8FdeE2iPrt239p6vx3ko4K7UW4dPBHeCAoXRLQyp6Zb2RnskEFjbeZpRjJK5d1AN483qDzJdT41CaUTGuNMXf9w",
  "key12": "2rJGKKdZB3BoBkre8QSJaTBjLwvAiA6ZrqdqMznJLwU1HsAdKxpxqfDcU9xu7xxngAcQ8wtzybWcCgRrap97G5pj",
  "key13": "4R3eJx1zzRpNwAUhTQkbpHq4ib6nPaR3ZvcmyUrF26VYLWpojjModjqvhZFYohkMgKbdvk7UP79rcv7nuxb53aMF",
  "key14": "3zznz1S5AZjLJTmYBA28CujUnpTvpsZaRWGYmjBt7igzKJP35f6Dqyt3VWVY22iKgh7mEtz5288rxbCwpCWksF5J",
  "key15": "26TMssi55v9xv3QteJzF7bM1HKVKXGfKoh3XZPnS8fZVKKq8AeydRW9QDHCMTvJzu4LkeM3AaepPCUjQ93YTbBHw",
  "key16": "4dAhUt5yLgir4VmTR2z4QDd1WYi9ifDmegPqAxcDbDfL1JrVWfhyJSg3AjtiyiLNXNkG6wmfkRyx1Bx5AAjcMxcX",
  "key17": "2Y7wpiYpXYc4ab89QJNSVMwPzB1hzJ7zGC799QxQuq3q3PWsDYCDYEmWguVthqcE68fsbo6rAhwekvddd7USxkx7",
  "key18": "5BPP7Ek6dDKZuf8pd8k2FQoNWrNwG2hKSxAQWtEFXuGSZXQYjceFDtx9nzd3VY5iKK4NfmLQQ5tRdqxv7ySw7Hzu",
  "key19": "3GeKbAJ7bCfuYSFgMpWqT7qxsog7GAByguZipDPuentN7a2gL8fffstRGCg3WPkp24AhBPjQES6aamq3nuspb5AV",
  "key20": "3ttbjrrvJBDeGFkMhqMPBeMCLGLPnXTRjdio7K3tmTBQGKPDMd1VZL11r42qgAZjsbBMFJQhz699AP8bkVrC6AYT",
  "key21": "2Go3itVZVtQdf1AJcJCkv3Qu3kifYQRhVc8gSeeURJqBzSPhkPcRvvosRFWQpQZetvaVEWAkYDuqfYQEoAdY242A",
  "key22": "2GV3WTG8XzDBMut1kpC8iXaKNvHE8DRMMrdkB1MrARyTz8eaFGQyP6EKdyyBKrXdrofqLoCMp8tWFhWyAUorRrnC",
  "key23": "5srjgYZ6UsS7gcAnFLge2Q1WXXtRh9odrQrcEnA9jsLxR63qPRMYgEimHfR1qCJbqgz2Z8FLUr1ChCoABCumj62d",
  "key24": "oZs2nQAf6A2Y91V1vCopsdkgmEWs9oNAntByGTWJ8JjFLmLUjEswHQEuVfMriEu3sSp6QBUdHX4deHHuhFMsSuJ",
  "key25": "2eJPNuvWhGfnjBvMQDr1AtfVVBchPwuweeKHZXdnLkPgpKhrir1hoqDPvNgXsZmApTyTh2doNytL7R45gTyuCXiD",
  "key26": "4ffwqSjjcnYj3f8BeEJAWVCkGnNsvpTqS97r5ghtyN6Rdaqy5P527Ftd94AkdRczHWFehuaXesjQQznwBscQfQRf",
  "key27": "4rhPtfBXDSVZNJUkSnWcSNXoZRAccQHFe8wRdfDaBh8GTwFuAnyb7ALnrWRwmJdaxA2u4hZZBQTMcWFrqnAXPfXP",
  "key28": "2HcMsXxmVqysMM9eqneCxSDybAkKcpK4maLmNum4Pv4TTLEJUC6R8814UHXU5zyMta5wZQhgSfPiAxjsK4vnUGYt",
  "key29": "5fBHhkZUL6Fafn9HLyfxspDWSeFzb33pqBB7u3R5YZ5M53UPwykapbDayLYMAoPC67RxjoggHQZ1yTwdrk4yTkwu",
  "key30": "4ETfrAmX7CE4FtQWeaiLazgezNoCFvYvvV5NgNqB5shAtnkF1WEbuAvULo9yk1cQmdSZ3nLtT1wzYGfA5m8VN2Sc",
  "key31": "4RppyJmU2G7xgX3djnCwWJ9wVWMCizo2Jq5trFCkyR3ynPaDm47GRTptQyV6ixB1Hz7j8f8Se4VSUhcLtW5bMJkF",
  "key32": "3NoJ1jbkZR1W1P5C8S4X4t5QVhmbndTUy2kmkb4tb74V1fknQVUifXdgem4GqcSajWCHozLeZ9N4QgcPwuiixGQB",
  "key33": "xzqoM4poy1xc35AgpEc5bm7PsycRVzx3MWEq8iTBvjVsm5KZayQRTN5cg8ue1h7j8VFuYb8nzf6cF2a2uAnAHNS",
  "key34": "4awzmgBcN9Yj7pZjxVUoY5rtHbrgH5zzPx6atGhJLTMNNvdefJRLjBP6xaztjy9BoUaWHMvXx7ZojfsaPdbFTwAz",
  "key35": "4LEZGau2duNKH9q1HhKoZT63vmo8C2pmgH7M4NMGZDNDHUsBpNc41nFjd7o4FQKodXkiKMS7iMQF8bHesQHe2x9P",
  "key36": "2opb52rXg1W2jaULF85vwpubZ53adXUv8V23UuhaxrHwr17ec2d2JErVFuq21PmkRD1LE7pyrCxKsp5w46fF1aVG",
  "key37": "4DtXB6asQAwr5jS9KZomTEFCFBCAiGjkVhzB2mEozxL1DEVV1EcxRdEupfPpD45BrmXGgFZZwfPDq2eGP5kbp6zY",
  "key38": "5Wxk6wYUsDj6Rp666AkN2beBksoeiMywwVPQ1EziuKhvzm9CdcUrBwx5sbwT3A4p4yCxFpNwDdcAtGBUbswEL1Up",
  "key39": "3qNh8ud8hRrRcHFjJ8HXcWzNLDEa2cTABfFkhc5ec474BsEbxvewG9xMZWq5ef8knRvYbsNGp81C6iwySQWqPpoa"
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
