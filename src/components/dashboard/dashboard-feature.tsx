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
    "3vKdz3aXiSZhKKs85YEvfnHM9CyA8RAcY6XFZUouNiwScPGK1aCwniHir97YMM546MuRmSq1ReVrX14jH4NDjsdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMPc2ePhNNb45p6d7dHanjMqSHLDzQwvsnBYqH4qJcBJpf4984a6eKzHsgG7JEK6T59WCJTDaHBwZMzHQJCUU8u",
  "key1": "2ewCSE3XtBp625TZtUNVptkAF9vrvaBCP75BVHFaLgnprm886DBqWY8ju64bSwZjBVLRZazfohkeNXLqJmWfVVLg",
  "key2": "4kQgcWF4oZVzrDkSrkdocWo1S4GroxSBQLmUbxbHWewxcrAbTbmUrYsVZehpWXiNHze84zW1utAxrivHs9W11EH1",
  "key3": "5E4jE1mv9ehEjJEk6YA3F4FH1f1ZDe7UwkzV733KCf56dks91ZsphSuJuVTvaYzGmSGaz2Z1XXGHp66qL1zfuLjA",
  "key4": "2o5bzoA8sK2iVpxiE9GgA181fnUqG1Ec4RMdW8qwrpeb8wYecHWaGotpe8AQC4cAPSqZRDxRRkAGpScJv7P4yT2W",
  "key5": "5mXZ2eNwA9KKD7iZFuUhdnSB3AmDa5vmQ8P7XCdvJDjCWo22Tpz7atVwFTRRUm1My2vWKENdaBoi2j8HStW1DhBC",
  "key6": "2QHZF7nmK2gK2MdPcGexGhLecQnpR4Xs3kW3gG2qKpFukkqjo8rkCsH2GPoswsLe2jKoi95UjVwr5xs3eSmLDGcA",
  "key7": "3cVZSpfBQRMcHF2CD1Xc6XsF3DZBfEDXAVQ5kKPD1wrSxBGAyyqkkuUQZ6TzHbqpuBCo6Am31Bfuu7iABa39We9Q",
  "key8": "4W12iud8nTVqTRCm3zvhThDSdK1fvAj3jX6zvJubL7HvprdD9skQFHECFDdEjUzBKnaJEnt54oxbLAFzVWe4kg84",
  "key9": "2pXUP5h3jHzNWQSRHhqiWUVuwnxt2BLjmcy4G9ZzTETgRHmjmZdMW7RHVUYWY1VABwrqx4fuF3Pxq6MxXnRF9AYf",
  "key10": "2foEU1oEzbCJXzPLBBbpd77Gdhifz77SLhw4Qr7xzpbr8H4iyeyQ8XwVfy1JiFBXo3LxGbFx3GPfDrHeo373sbW",
  "key11": "6yHKbzaThJToDodrp59ZMwbKmaXzcNS4fef6to1Z3g4vmLomESHQwXbfXsPfF4DYXABypTGQPFt9XCnWWhSAqHx",
  "key12": "3SSu19b4VhV8ah2swVB9A8QLo1qSepqDp9t6q7uZA69Ai9ggb7ZyLhUMBskHgwirJSgQQFUFJHLp9jUYS3NoQF2P",
  "key13": "419ZeNEUDE6jmtC6GTPc2TikCJsd2AdCaPMuwugxF2pmQNykfZZnamukpBSk4DM7N9ipsaFBxndsxLYihoUec6tn",
  "key14": "2wU2fWSWQZvdm1h9eTZWMR82Sifww2kCnwJTXz2u554x6mQd2YupsZGUrmWCa4EhnTyY1BbRyQBjMn9f4HE1nXzh",
  "key15": "zYk3uVRB4mTfZs2mTcAybkdGvUYYTxzqTrhFmnozaqcSyPkg2yca1gnDBPgSbsk3FWeScNnANJm2JTmNFq5W4sV",
  "key16": "2hbk7WYgtPFdh7Hh3cRRWf4SqqSeMY26gXQgbhPhVDWYF1BpZRrdAV2EDKMUWGyAdAtzjAHTs6pWt62Rh8rzhoJF",
  "key17": "5ktuGQmZmm9cWo4bk6m6LMR4eFp4RgDe3jTRXJvV6VWmDHjQZ4xzirK7JzJChVwG5EKTkJW344dWYg2JueM3Eidt",
  "key18": "3CMKmArGiC51mDyXU8o2fNx7zwDpFFn9PmPFF3gKMnzKR7JJTGTFR1QJh3dZLnjKuSQQPEWdfvW6oJcmsUkUVuxv",
  "key19": "5TVwSPN15xJ5NUueBLf5efgU4uVyxjZ4UEbYz4hUTMAqKweLvKDN6sd9u2eXbqthx5LV1igqaEFXFm1hNb3ANLwq",
  "key20": "2mNJDLCqCfpVWwt8db43prdyHioYVdU8PnMuYwR9DB8J536wtUcRZcv5VFKCAP3qNpZVPhKiRYuUnQgAX6eAjcch",
  "key21": "5rEKd9a5xnQXrYFPhpbvsUR7BCysrdrb7s9AnRc5ZDMCHYtUMxWnYSJCjKosek5YyXYvNuQ5js89Rru2HXMThkDY",
  "key22": "5ZQ2N41u4udHLyUVgrS6YTSy5suA8pApnBBDpo6PBuSGjYxA3DfVvLpx5tF77zVWVtvCHqdQtqJNH7FMFk51tjKh",
  "key23": "5PGcruEskeugoAfxE3zDr1d1xz7C7Gu7LpUDkBUY61cRvvVgwArMubruL9VBwLyMaSskA8ym7SKLyJGw1HJQWDfG",
  "key24": "AzsE9oqqd2jwWJpHAuKxkd7eZX8tcgLZxE9P3J9AfxLyMWAJUk2uPUwgyoYR58MYwxLz6GVE913c3Z5xstwRHNs"
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
