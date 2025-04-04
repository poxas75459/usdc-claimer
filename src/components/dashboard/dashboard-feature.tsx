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
    "GAnx8MnuctJ7RXJhRBxLdjTGqaMBZi7zAEB78VgsUSgzETt9F4KEShVF7rZqYj8rx3SJpwsKKSeExDWfB7KUMc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fFmio9XCiDrSTe48bDwYBvyU2CPmczDbR9R1XAz4DYrwcBKSNoXCkcxZ8vgbUn478AnHF49BVTFYbsipTyhKgg",
  "key1": "8aFsKuXdXkT6PiyiaL5sTzoyTbf8nNeZMpufL48UvsSCroim7L89n6vjW7SUj5PboWmGvvSjWDGHT6Y6XNHEjTC",
  "key2": "3ZVXJsaCQqC5eRUZCtTK5WHqjRNbJvTNSud5G9jkmp2hQTNUorNj5uyQuqxYjEonbUUtnob7zzZPFLJF6JWXkuhZ",
  "key3": "3c9Qxz8Yb9G19KBY8C78SU9jheasEjHrQEJp9neKJJAwcQ8pfziMaX7Vop4PboSitcpRyjbmitf62q5M4NPDvDjV",
  "key4": "4scQX1CQQwCWSWeSydzYuvqAngcZtpAUc7U4ff5zoKoSTTQt28ED4sa3TF2tcVSrQVAPyKctkcr3mNkjT3frW2YA",
  "key5": "sQWqBcco5f3n1Z8qghuh79GPcSwqN4Ruyiz17E1ZjQSyJDN32quUxQ1Zdr6dyv7A4uE2JDyk4FRh3BY6avtCsFx",
  "key6": "673QDnvKJ6fr67KosVmJfm9Ka93z6533itC1HdweJuuxnSuWk74wWrgkDnYFJMbcBTSL3zFoRe7knCzDG5Xf5R1p",
  "key7": "5wXg4kfCF3yG4uazcn8nCxtw9fs5MtU2Pn6afcL6a2wvujBS2QDAcVkuoXebpH28k9xPD3Rcktiaa2h4cAQZm21b",
  "key8": "2aP24nGirATjMLiCwg21P9p3g8NDz8hkKB2m8CApFqXYq4trpF3Qf95hLenRDueXW5RSeAgWavMZ3VsgM2YUsmxD",
  "key9": "3m7ZbrbUsdNurDqWzngVombQUZj58GYWe5c6dsgesLvVJ7T8JYPj77F9z2rmUdkuvdEhZUNyZPPAMtukA3WgqYz4",
  "key10": "L5nLLqrwSERf9DtpErCAHknGCFKuixzzkTroa2mJMueAFL864dgwv7PjrFmKkQCBnonBK7JojX2DQfLqHKadjKp",
  "key11": "3m6W9c11gAP3QMhqnkb3S2C3WKnyb4Tq19mAkA5KLdyNbfP8xL3ZmAqfk6BCeHtAwsANWKWns8fGbsEJ4Roxxjjj",
  "key12": "3NQ32Jz1pSDavpFNrRicC1RRWXYyzsQNHdw6Emh1hccTQMkkJKLf3qjfDTPupCHAoBN3SibDF7JMA1TmYwyb9Ks9",
  "key13": "2RW53U7LkTwKctoiXuGiWzW7q4yDUFhxKausuG1Y1vUec2JTnPDUz7iBEQuNCfrDqp5yike9nsm9c7h64DNA1NUs",
  "key14": "3pFLRJEB7AiyT5FmtHN5WmydvvTEMfKPFi9pywGs7Zhd72mzsVG9PaGT1VyFaNNCcmYvNgN51NE2ZHnBrv1moNcD",
  "key15": "abj7rH6bfvAhR46madzA7AEv77EErx2rGvCfS8R9pvbYvDaP7taHpCRfhgihSrGXeNfPo5iDFY8y6LCd6yXNPBe",
  "key16": "4Yy86jzYXfMubeSPL4zTjQaZvHxez2GJBBH44Rke2CLtVPLZE2JJE93V4i8HxGD2m35K49HpBytNsS9WzBeZjy2Y",
  "key17": "a9V1aeAiwZAMLat6BVYrBy1GQWrTRKRoQiaGUtAchX1uTpTc1v9Qof41Dym95Qkbtew1nfZXxWPvETMJ6jG3s1m",
  "key18": "2e1ejSEcN7JUAJpQ7VaPektEmSvaqmdLRkGQQg3ESbiuwgBo5kBGVysai53PzR8QB2iExisRsPBTij4q2xzN5Zwo",
  "key19": "437WhBBktT23ZpqfBQmxqdSmFPMckUXQ3Wyb3ot2mWsXZcVAG35mvgaFH1Thucqrb9RntapmwEH9MBxAaG5JGE1q",
  "key20": "2fZvhdKgDVuZScSdDC8XvihaCSwjKr9eZYpXrxLncw56afMr4KQizWRLpDW4NSTU5R4nWvnhfMunn9AAb38rfJNj",
  "key21": "mwPep3WFc6iurPM1onsTDv7yQyDDT86DeP1w86qx9qe6Bs2ofFxEXVJsLmSY9d7ciG5HoK1MLtjRtcrCZe9NgXy",
  "key22": "4JSjqSufVY3buHVvGqyAWYV1iBV893KKB5onPeeBNbeSpKjdsrJra3z1bRCgYPJFeHDbUEUhas8ZKydEqbEwVoEA",
  "key23": "57vuyWx9ADpNabKoFea6SG2tFgRp8n8Kzmgp6rWnxJh2EfV18LNq9YXp6RmXiV9gVD79bvr1XpCJkaMvNRGCxKsz",
  "key24": "3tyU76G51EovUjspT6Nt5gsSmickSG4dxe767GouVFh5PuZiCufwukKfQRSnuQj7v1EyeyRWrEqDcsPnqLD2d1QH",
  "key25": "JpGJeQ7TonnDwbBgqm23jRdvU7RckTAbj7RxmRYtT6RdShi7uWFS5R11JG2QhBzaUt2vn6hbQ7rcEvSgP3cwVmk",
  "key26": "5vZ1EUpxujr29wb8T7EbpZQhpgK3Q1CLrrWNitV2y2Yot9SxsABr5QuabkCCha4tmhJxpvu8UjuVV5AsXKmBZza2",
  "key27": "48rSwEABWWrsDs3jTEXFen1d47f1ieFhnurLKosB3Rnv4GsawQE31W8BQXKo8FCHp9S28spjtacamqM3sipTyuEy"
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
