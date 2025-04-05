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
    "5biTQnSJF4FZonnZumF8SdTB5b2nqRmtU7L9br67XQmsGdyNgb8f41WvR24JURLWFoNP5TTNXNrj7TkdN8CWSPfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MnQkii3vsjH7uLgxGTazm5iFLRX7D9TMMrJHfApX5P66Vm1q5ey83KST1ja2aDP4PFDnmnxuHd5zZPMEbwdB93d",
  "key1": "nTGjjeNVs4B7Ag14ko9oH8A5yqrffe7DghGMcH6mYrG2JeMUd3Pg15N3uCqESApj4Dbyk8oEZaKRPh93dL4K8ua",
  "key2": "2oKu2ESWAen4u6bsYzUGjoHjWP8N2P6kFYfo26xnihC26GwfPkR7ABaQPGtfwn68jEZFkCJskHpNzr4rXRs91KXf",
  "key3": "2gLGTWxWqwLbFJ2eCZpQqaJyLEGQ8y5MKkXQDJCDdstiL54xyTQq6D9bjDp64WKZcDrPeH2MUCECkYw7cqXE7EYQ",
  "key4": "qPkiPurveYUvYfPBgdorWsyezX2c8Dkihsepffu8t8jbHVqy7WL4Le8de8BYv2ZS2EVRC5MvGt9DsySy9e85QVn",
  "key5": "4yCgRNJfdNyoLwEHezu4pNq6kteF5i8YmqggtYtKdNUQ4wvSw4qF1KGG4KacJEFv1T6bV6jrVwPLotiQ8MpvMXeH",
  "key6": "5nopnUzKZFLRb3eHSKx4cr48Dc6tWWdN2GsQyCDGeULX6ep68JASXzg8gHbYPQvg6Kj2i4TRPC9BuhZSEW2V6rqW",
  "key7": "3cdikf3LVHJsxMrPEVQjcjatyYcJ7g95ErGXrpqjcZ2wy9NU1etaVEfErXKSJHM8CFVc18wV1WEbWXKuZ2HPunY6",
  "key8": "56EJReFq4FjjEMTz1zJdcnAL83Yj1U5ijCX4y3SoxUgqE5UQLP2TMZJ6Yn3iDDtJQtcgznaWJ1y2L5YuPGZB5ZTS",
  "key9": "4NWa1aavQHrx8oqdWDitcogqQd9uJjaULnr4tHGymKuz7FvpQbrew3sXnrUZyLtjjWD2XsjpmRf1Ecet54Z4zNPf",
  "key10": "667pb4nrucENu2gh4Q9Sf3Gj8YKSgAZFxTCYwt5kAhFdvzWD2Y8cP7yDzZd2rkNjwxbyQsNRA61QbPjrpY18usZQ",
  "key11": "29e76XhVsemCpAG3LfGHCLrEuTA8xzq5zyoR685DXuincRX6aezqfvrr8PZPt7FYoPRamoHF5fub3XSyoEMCjGnc",
  "key12": "3LqtDo9a1RfxwR1ZCG9MWphpconW8UZDsMrhvnXzRouzxGwQrDtHpeorW8CiFm9Z4d13ZTRrqV58P8eFD9YKtWz5",
  "key13": "4CXzzCkwD3C1QeYd13xxBhXEJb2X3epR29sioSmdpV6FzMVyYDA5VpbPk3yNjdZDzwaU9ii1oFNuPPPqoJLmddEy",
  "key14": "2gKyGebcjVRpDUp3idQc3NRfL7aw26xu1bxNq71riK5RfEaz5tjxvs1xWgigr8TkZm1nU8qoDxuWAj7ym4c1e11S",
  "key15": "45MpBAv4czr41qnxcuorPADigu6xM28J2jTFWXpEo36RPFtVoqCdGLL2ph76e72TWRXEPKTQPLvVeuoJiuT4Vdxj",
  "key16": "fB38CMiahaS5CVhX6xJXiJkMiKxSattAcPjDfkdXQkn4PzR5ca3sM2ofCquux6p1iqs9DM7W2Ao83x4cb6WHzc1",
  "key17": "2dc6bhZM75wgLNHgc9R9JaitsKJ97jZLuDfF1USmBxXG3BcymyCjaoawyLrNR76f93wUeRVAHSQpw8mBj6y8gnAu",
  "key18": "65tm2eUAeHf1ibDneTMMLgdVeKDfzUWyzGVe2MTg3eS2VtJDsPy7LYEz1QghPcNdePHxPDhSJcbxxyJ1Ehs4CFR2",
  "key19": "2y9vcLQhyXis2WGKJDv5ojhYW4MPw6sRrdE7dp2de5gjnR6tg9nqRuiRqw2ue8dQEPunzDNDTuYv2BDLV2kNbEd4",
  "key20": "5DbWwFiv1mwN4cxxD5t52uFLTf2FCn8vQgufiJ3orGRf5Xe5CZoBLh6hqFJs9ie5pNQKgum6w6eLScaWw4xpVt6P",
  "key21": "3kcmB9sBqjQTVUrxJB7SimLPKf8BwvVipVXRMrA248rB3rSm9BPQQh5DqtqSex9FN77o88MmCQV4fwGd3agFQeYz",
  "key22": "551uHgmS65qH98vmwygDoyEZtFJXJYEqRgyGUWjTdGqgfFwRXmAqsiJULBvN76mtDYgxTyqyGc4mfjbo8bemZiDP",
  "key23": "2Euy9fy4kxnb8oXrcdKGosWCSBVEgxEBo7APzErnAKMVvidtVpzXMqow8mHczwZWEAzWmeEj8mzUM6zWhGh5S61m",
  "key24": "42wNFvSjmSVX5EhT8RapCyK2ePpL9NGBgTig5uiekN5e79Q6yHbPYHZYc487aDY7jPGHaRpesFBdysBAnz6ewDCY"
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
