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
    "3wX64vhYTLapxvFxqX5XBNKEnZ73u9cCP9L5Q3CkJBW4qiT41kxMQzQUaeYuG5sswkadjX4XGngnFRkKGxaeujQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhTjqEVs5xWUpQ7W6KAa614vwHhoUyv8i48vbdKM7LYGiDvLdA1nZvDMNHfkwCHHNbtjA789AkswvJTmKRN1KBv",
  "key1": "4rVqw1SFKG5NfWFoWZs4NcD3CaKgvRdt1ZV61K1xZ634Bt37XSbPr38CNvs34U7CUuWTkmvLEs8LfFyLdJ5kQMz6",
  "key2": "2E6LmtJNJSqzCV9A1QyP6aNFTWPteaGijwUACD3hti8WwKi8Cmi8hsc1H1JnD7sCKDYuDxcEUeCrGx6Mj3UhkoB7",
  "key3": "sohNQGS6UtM6oAfA7e9xxS4hcTohWnWzYctiZBeVVuJSj4YeeUWD6LN2suc8GpQnrWa8TvLm7TZpnW7EZLQ3JqC",
  "key4": "4qqfMXut7LM6LNETtXmfsuwmKRCaUcADffSevGS9LDJD9tsXmhn8Tm3mFDFEHZXcfSgN3ihUfxA895jYQ338bwoe",
  "key5": "3W8peUuZyMG1vYKqCeHiQz1swY7qJMRpZcu9x98qAxcTYqDJw3yZBTGLUn8qKa8y1fxjG96sLZ2N7vvr3bdpXrGf",
  "key6": "3asWxnm6dkgX2c5yqo7uU7q9gNiRskpdAeHPSBKLwMQbgAzSJew5NcTdy6yfh7HrjAEd8vhTy75iEuuoSRLZZo1E",
  "key7": "hn2q8AQi1SQG1jk7s97jQNjut8iTgzKnEZ9JihMRZH76q2Te5BJ3mBX5wcByUzo3jLf6JaZMftS4YfpV9RTM6k9",
  "key8": "5kqUuY1yj7ws9yoyjFGoEZ6hW9M4Ssb6Jucm1uEdUvgK1SchwR1wevsjuSEMMBPoxyinZ8QYVzZ2qxCD1BeU6qD7",
  "key9": "4XGzXmJeMGhJnEvwirLjr62JjdZvbQxmdghaJrYNYj6F6ND9W7Jrkd3JKNarWs7vNMkBKTrhvWnZHTMQZz88rKaV",
  "key10": "2qTdAHCLFDxzCXafZhCsFt4Q5xBG2n8kLWk2J78k2Rj5fNPmFQidLKgkdyChXNrvtXcZzkmpMsf7oDyr6LKnDdLu",
  "key11": "3Lt9SQ9YxL5HyQutpA9JcGduHQ1xRkZjEyLREXNdKHcUCmCtnoHtjgu6x6rj4dZuVEyiKzvfyW7bhFCDUgtni7fP",
  "key12": "3kTBjRL4dykdKktNqhw8XfMxN9E8fg79NT6rW4uJ3zHAe8bestox8reznYGabw747GSm2hf8H43YpLJoCn2iJeqB",
  "key13": "Rw1RsRKE61t6k9NV5Jj4trqhL3uRAfCGJTQDJjZqY1oeWRqajYx8r9buWd39ZD3V6VgSkcrRvgtq6kj2YKuTYye",
  "key14": "5b5KF4PVY5XCK8PZMtBcEeryz5XXY2Ub5kNavde1kUApqEvb4kAtbmSfTCeMu8ko6o2Jpzcy5jCoMifTgTz4LX4V",
  "key15": "5n9D3BzoMNLkMSnGnmw24rYwTPabvCVeHmbRb2evycwAy7yzD3cdKHS8h2LAVK9ga1T9Rk7HH94AR4A7zAK1BLH8",
  "key16": "4q42NfbzuUxDheTfGCAygFNf4oQKF7U5XnqpZJJ1ny4MVVM1LzcrwkMbZEtXsPFx8HYMtHxuVBWYJbPWPXFPzTiy",
  "key17": "3nSvi9vUGwovruYWU6EZFQUgEUKkamvczkpY3xCHsfJFGu2vRp774RGrggAw29qbF5P3ggAPGkFkbGANnqqpxmkx",
  "key18": "3UFVgRsnepxKWVpJm7fKfgmyzWW8DapAZ6mSUYWeyC1ttiqnxU6ashHk74tbFwYRJY5Us95pbixPXe5oZUSBDhAR",
  "key19": "4FPALnbR1Efi9G9MeizVa2qAV8qME7EXJAUv1YF9sq21gdyHBU1qyCX9Zi3sze7yX92ttfwFBuZaRbUr6iTBcTns",
  "key20": "2cfwDrJ3B7XfXU8TLeiAg6SmBEYwzYaJ3Mxkdmfk7Lt1ioEqYBbudU1NuTEudG9NsHr4Ja8ndFf8NqNA9acErsPE",
  "key21": "4FChethcgcPs8LLumwrSbdXXw8cfRxvVfSVrRp6chC3ZkPZTu37hSHNJzKpa3Y9Qur8nSm3MpZkuvgWRDgNuTzV2",
  "key22": "3zGzcwxvb7457zF8m1UCsZMzqrWgga6bzt7Dxid7mwxWWyptmJXCr78FFTYbh9iSoC7cRgXNkipQLC6Tw1wtKsR7",
  "key23": "5QxhC1uiFsy3UYnSQyH5owL9jc5XbgwA5aJQEqiE2z8Jvi6Q333FXfbcnw2p6eFpkH5TZje4SBnAMFwxdnXV1kAU",
  "key24": "cBNgz2VrGicgUFUpuUViTcKYCR717yBH9i3CD4u7dCyTA8zKoKJ3SSDoL7tkj2d1yCYqwZxXwWYWAm5nXE6rvqp",
  "key25": "2YGLKdQY8hnddUeUsJnGNsXfgkUauVzLPnkvzhMsuwCqaRsXnFL9iqag7g6uCQNT5y7X5xg28iCkpm5s8q5UWQLx",
  "key26": "5SjfndFMd9NiodkE9Dv53dzcuHmnxcEF7Nf6g9AvrRc432uyp1Mva3xMPNY1yChFrTzCeHFPjj5Vyv1pUULFxyXr",
  "key27": "6U1YiBHinDMhxkZoYMoQWxSKv1A8nyuAjJhVmqRspLbZcehALbgmtDBSymxS5TzEkqcCUcAuSpbnLuFkkeHKvHh",
  "key28": "7oBRn899WmZxNfDx6SAkK5TnjKx6jSXvpja3Jx6sjBaL2PZxdJ1uV9JkwKLAU4EqgzrhNWg8xko8z1Dty54fA3n",
  "key29": "USmPjUMTsH8GgBeSgZLGe9yDXYqePiEMBxSnLCS9uxbCNZ2JdivN1y5PggWZomFimHHYToqRQvaTFcBwhh8D8c4",
  "key30": "CivwZdJp6SQt1tYZqjEpDuwxZtbsKbRK86zQHHr1QVb3ERjphFngDMzf8HG2vAky8BY4mEzWNMvRjho17saKSTn",
  "key31": "3gKEeGF9Y3t2Qb6ZQGEMtMgRcDUfa5tndDsCwrK8fTTqSR6EH1ahFCJv7mYxq7MZSiME5Lo9aaKiXLSSuCdhiFWM",
  "key32": "8AK7dndFJ4oUCUetS9FU7srCK8oXJSkHu4G9MkSeL3n6amWYAwfEfPXbMXiTxKKgzG7zdVU6925rW5HpV9xTqvx",
  "key33": "66UgkXQ4WpVzsjFWgfMoUFz4APztciFuiBMUchF5YcpLCcJZY4hVo53Ng9dufmfjrNrQGLck1dZsWpzkTLJWQss9",
  "key34": "28gMmoJvxYjbrqkYrTMJ7RoLGuWazfZE8qzC6PYk9W2DaygxC1TjWAyPuvjKP5e16b4wrDBM3m5mbyrdGoC1HVov",
  "key35": "5aeLJTU47NEJ69wt4cL4zt6j8CThUito4LVSfrMbwhLfsT7rWFs8CcPKSQiD75xsEQr6E2ZAe1aJ1KFrcR22N5RT",
  "key36": "V7pkN1UXqF18fP1p4gKWxiTSeHwQ3YiNpnU6aT9iUihKUnVBAcMDcGb7XkD7kBcM8RZhfhG9fhFrC6DKxTR1rgF",
  "key37": "3ifMuT2xHyRqriZMvL4YszfWAAfb47S774Xnakcq389JJoc8Rgv65LuZJCmab1hWZ9VEzSEdGTZy1n43o2cqD89V",
  "key38": "2EDrntkLqLVigYnhpLeBaopS1eoJ2hwqXNoGeP9mBAyoXzKGNvUtx4gt8BDCC44snWxP22RcF4wgyXCGrABHBmZ9",
  "key39": "4otT15a3XX5tsjzeS9BzZJcR8eicsViJ4u4SAujruZEBHg5AX6B6qYWUrVRSc3529mXGVmtW4jP13PcBdgrSEThw",
  "key40": "f258st2TKzUmvqeC7bcozbQpVBoG6ngfLEboB4C47kyFbK9pY8m5WScR9bmCmsHgP2nZQEnH3NfHZSkLzVnoaJW",
  "key41": "2eopiBABWFAe6SGDD2huNxZgcAWyzD9QaPHMbVnKxKFVFXCPrfc8GVugjYZeEko2ZDUSNWSaXYjZCQs9MgnUfBbU",
  "key42": "5VeETLt5Jmgp1e2GU5upV84KGkLMsHTnQ5STMg7hhzF4kjgWQSVaKTexXXLGrfesRArQZwRhKCm2JUoMbhr7woeh"
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
