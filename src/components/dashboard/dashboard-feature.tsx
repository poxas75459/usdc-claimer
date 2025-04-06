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
    "2n1oamKjuCv6TXumGjRBq6oR7CXXjMZCcXpj8CmbnpQbsPRJNGjtuQqzLjJN6r5mSCVQJTKRb5F9wJ7oDa1bpmG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWonZNtUMeDk3nX6tYPUwv57HHGRBYnksz4MUpFc3fBFxNrmBueeQiZpRMahhNy3prnrgZENQWJpvUGxXpzPzLy",
  "key1": "Pwzr3wHkzY5kEHZJDr6f8DutdSfRZE5J14qFKRK2qhi1zZ52x7S3BrM9otfrpgk85LXNh7gDiCbjgUztH73AkvY",
  "key2": "4eB6xNjJ2uzKPaGwCofM44nN4EVBi1M5TEpRYixAanRpqyWu4xqZyKnWMABo9uCcparvF721a97NrgtrVCfZDHWs",
  "key3": "4okwvp5Myqsp7Hq9j5sJDpJhJgTsLTH9BMcmdPSV8JhfsHMgj7L1e92h4PUtavkvK6iQ7zy8p9HsUvzMUxkTGaoM",
  "key4": "ZUB92zFSySBNp87bJEUuYFbiG8eA23RMbGvA5Z2r5Bf8SecKnSr4Uc9vbff9CME93jVppsWiMeX2pstfZb3Rja2",
  "key5": "31EujVwLCGAg5xA3fgDqrw1kixEWvTLepReM9RGJXjHRLQ48q7vcFvJg7yjf9mRy72iBjpnqmEwNB7cxueicoBAm",
  "key6": "eYE4Yo1mHh7RZwHyZTWhSqvw8GnVaNRcLgFNLdaJFrFBmPM2mN5DKkRsM2mBkmCVY1tVgUvDYVXEMfaqgFhLZhV",
  "key7": "4Hr9LMffGvvquEcpng19HSdWV4GpDQLrEDRzLFZjkciBKeRtxCR3NJ1E5m5AWA4pA3XjrrJYGG9u4ATvefpNfYw2",
  "key8": "2UrqWpzpFjmPUxaqd7oX8jNF3CvMseyjhSNWQ3ssZyPi92yN8BDpfYVTbKf1HUDMNH6RATWCfDAbMZaWgfm4Egzb",
  "key9": "5vAMrYbR7vcrDuF7n1EXRVfnodywosKnk35oA9dxWKJfyLatYgcd16ht8HNkmDFTYKd2Q3gWz7NwYtuoWYzab7CZ",
  "key10": "61gv7wazNg8Dv6eF6t2tvrEpqCiuMg9peGEzqWEZSr73naWi5z9krNxsHD9SbzATdfYehmMsdPda1q5wbj7gHiy2",
  "key11": "583t3PQHNm7gB8byNipqsBqyBzufbhQ39Q2FnJUhKjQezaQAU1iYFW4iVhE5Q38ChHtz4oSB5QJG8wzqRJZCn237",
  "key12": "5Ds3V2jqGmEjYWU4empqC5ceMpBtEbbSMfPX8k3rC8uR6AwyY891aAVMqc1ewcZ4fKvazt2CffKwrxgKfiPBRhqQ",
  "key13": "5oYjjGCzCMigAiZKDp8EUjendHW27WXrzZcVSjpQxaY3hC5unf5k36JzgHaNgQhQaV7iRmdwAyTA2JYbzNTVYvn",
  "key14": "5wMAFPB5RUj3o7LSitY8hgp5LVSkWntRdAdYG7wL5S2PM7MNgTbSQHzEDrKcnJzPvWNJzouL5HoWXkr1ygcTgGsF",
  "key15": "36FYrij7x4HK56mkKmVHE5hCsw4cojLdZXGeqTkHKJuQYCir1TMjKsfmdZQBm6atZRbnYTy4psTpkoEHRrhdy1qX",
  "key16": "2hefV6jUncBxZtYsSi9bxjATTmfD7dexgsmor5wLQ8kxAhikuWia5KU3FfvbBZoFWarFBLvSXAUN9WLmoByVpSTC",
  "key17": "5wQijuwYh5hGwLXXZWiVigsLRNizwFFwV4GV7uBkUPrfg1xJhTJjaNbZg8cW3jfNPkqTNyxWsKbqvStBDQywT6d7",
  "key18": "2msYTjcisTqUvPsnA9D7NxTH39ia3YEAFKmEjKwcKE7VAmBUDjLGSuwm3gP2CbFx3Uvmzui3286sPRGinxigzntk",
  "key19": "5Fw1Z5RgPhTgzdXAXFnKvnZ55swDqTCd7Rhkoicr8i4iqSHpYPpJT2rQt1kEbV17bhcJC4m4JW95wwhEMsKroean",
  "key20": "5Ugsj2MfbedwhdA4YTkHXqkoCiQZaCxNfYweq36X9Hk3GopsxH6iKsUSuE4hzGGAnKAHtZTf6NBf7zJRt2qjGv6s",
  "key21": "4Fw3PYwg4jney32hNLAfWBjJtkUJmzZwsRiNHfpwaNti9cmUKRBDZboENq1TZ8NcZ4G4q22yy7MwdfmAzrtB2tpV",
  "key22": "2Rr8G8DHyzFYfV8MBK6PRzKu2E4EuCbHko3vBhn8qNgUyrjxKLbwrbFQpcjwEy7HMJAhaZvdRnSJ6zYVmMNwTuuH",
  "key23": "4UfmCeY3r4qXtm8rMn3JZs7mNJRkaZJKbMp8ez7HqsrdZPUg3XkWTtPADzo83am84na8MunfcvgsoU3uEmBpTvAR",
  "key24": "64fbDw5Qcf75Vwh1xZaeYCTscq3yHehoYhwYtu1vounayNbtWQUr4n4jauzVf4TwxXV8zAtq36NBA4EnsRVxcKnd",
  "key25": "4bTVBxGaw2kafysCtwoPtMmYJfxEgBpnbn8sTrs5GTZWoNwW4xSPEvNuAE62gZE6wjUHDA41EoZW4jH5umoKNsVP",
  "key26": "4tBaL2QBKeVr4vdKV3f6sKfkdK426s1tE4AVCrPfiZKRa2mvtkxxozfZbrjMgnf13E6dXhViMCYTrBxRH46N2tdX",
  "key27": "5X1F32VZVosyJvi69nRWmVb1qPLenxtu382RPRqYuimVCKZGxgUUZZR6iFgitpQv1wrAqZdL3Hp58VrgnK11vC9m",
  "key28": "5NBVRFQvCpmx2ZgCTQxDFGVKkHkqSnpGAS2XE8YtPXUvt5eaJChryDVnEuqAHhyZxy14h8soCbBdRXA4Uw1LoRj7",
  "key29": "5WFd7s2DQyenYN2rhGfor2uMRyWEvmYA2PkvJvxWFTRj3xKQBt4PDboM1HBeXmBSkKm6m3D6msi71c87o9FhxwMP",
  "key30": "3youe7DUBPwgDTg929dbEeZsZ2wkhSWShaTUiTuraJaAcosKCv6pRuHB29WtBANh5HTAPxBCXVX5HrksQjasT5Jq",
  "key31": "45f7o5c36p4UWsX7rH5FpfveUqdqvKTEj9D8P2beSfHiH63ZvvcQBXx8V71CxLynqxVPHEjMAtYnjiySf6xwthwu",
  "key32": "5xaJXLy4yP1Q2wnM43FS7qCvPKqQRHaKvyqfApcfCJipg94mTz4ikezYYxJiazeU74ZuDW8PneQeffUe5m48ud59",
  "key33": "2aWkXJ7oq92Vn63SWzQWU7NaqQd6KscsnMqEt6fmUq5Z4vihEMQR8CtmDEuSy93rZyUcA6Ek4tPw2WZunaTvvLRa",
  "key34": "2ic6VLfcMWE8cwHb53aqTDwN1f7KTZRTD5Fg4bxPQoZK5GftUX5XoNQgMuWCJpkLgF28AamGfLuu5ZTCtzFsBvkw",
  "key35": "38jS9xWcBEkAqW8E4PpWqfgFZUVxeJVQj3Ystjg8otRPWAbq8TKXMbxyDsRZXyDYduEX33kQUK1RgayE7Qzw2VMq",
  "key36": "3cear2ucWUDs2KFf3mFne5Pcxy6HinMGNQXRsqesB8UtEjMfGhf3VixiR2AVJQ2EaoRHaf9agLHSCmnwyzySrtdb",
  "key37": "96Uu8VjQBo7kMWxCzPbCrxUb4DuvX3T7FQiEzzu88rzehsBdHecKKCDctC6Aept9KW8Seynq3veYNbVFyucsVSo",
  "key38": "3c2PRC93aimvCHbKduGSxxdgi85F4gPaC1NTujoMvwQDdZJkC48Zzs6yQkoXpTMGyeAWgmeV39wVZb2EFgyXYFAM",
  "key39": "2nxb6XVDL1SwJqCp8gHHqmhDGFV3bdupYtAoHBg3VKCN5iDwuzwGdhLPVwQqgdP6UxErzWD5Emjn1iAngenkkcY4",
  "key40": "5ChMa9qHnNE16HycFqAMAxhqCJCzGbbaRAn6M3JbVxvrFugj8TChv49vdTQCBA6urFzw49K3yWsTNBsnu1RVk2Hb",
  "key41": "5B4CgW6rDkUWdKHtyhZGd6DtQo2Rg94y4eJtdq3RsxCX9hNoGsDmNzTzyyyH5JAC3Dn7KCCR31Hjr1NnJDZEcnFu",
  "key42": "2fsK69Gk1o9n8rw3AozqnsYmj9s7ez8ugcDSYH3Pu34QaSFUgkukSsPemGyLx8vyBnaZVEMJUmiCFpL4B2EDzhAg",
  "key43": "AjpcoUJ5zp2sesctbZ19ZfDfs2PmMueh9jgh7x11iRk4BuFjkG1tLiHF29VH7Kvcy2UD2KvnmcL4Mzgq3JKnXgc",
  "key44": "4afCGR1X5LQjp5wf1QCzr7QTxqZ8pZo1Ziu7h5GpBPBzdYaMDpPfwdTtfN53Mu2mLYXas7VpW3dgkZsab1tWf2Wk",
  "key45": "5A8XMgZ83Drmdad5kZguCcjEdJTEoiDVBnJ7mA3SeW51YcCwPnBd5mpzubPpBMdj5ytt5ELngDB1Y8GaPAU6YLv3",
  "key46": "4bAAEtsmAQQeWU8h4bRifdrmKMcdNtGPzgRx3yEmSTPPzmg1jzMMUjw5UBiu1WtAYVX7Vyp4wbcpDwnF6vLqmb8e"
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
