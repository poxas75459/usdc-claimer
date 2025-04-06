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
    "2zdZozx2hQgycv4tjCgwovEE1HhRJT7yW6H9R2e53FMwNn2AH3Rk1UkRAoEoUycyeWVQtJpj9zKDGWrpywYYsLF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZoQNgWUF8Tjzyow6McTaXXE7C7h19oBRUcAXCvcMMrSpHmDSqBPoxrmXiwpk2jYaBWATHGgCYpwqsSnmo3qj4XL",
  "key1": "4556Aw65fBRtLNh2BAUjGXLcBTNrhbrTh7eC3dqHSertLfuDPpx1hQCx9azgB9ctJ6pVJ1JyvEhUvs4k56bkeWxB",
  "key2": "3uMdGtd2wFwqkPV9ac3yVNuRPiE55uWN289Ti5gRqpYAGJ1UpjXRuZFjQz3fv45cxzh2JGzBfe36371vaS9b6Kdp",
  "key3": "53i9s9MP54thCQndhscrpKkVu6dAzTRnfKPBiBFw2AY1AWt1GUgNMYdhywa1dx5yRWPSNwGJBaiPYpVfQdNViq3y",
  "key4": "4MKNpBC89VivC67HkU8SHU3uouisNwUfmRke1uL9tqkHJfLDkYuFVYUbTN1pZ5oXfbvVz4em52nFyfGJbjUea7Z7",
  "key5": "3PtfbfmwmxQUDZzjSpmm4dqrqg1px6cPGXPLVxKDTQEqFCRMN5qDudu88BfxMniHf45Mp7FCtMb7dSAKTE628Er1",
  "key6": "3rFjdiZpchk7SE74U12bkrAnSVES121vs8VVht6z3wxUAtNJKA1nJpuvFQxvRAV38fcXx9P5ujqCavaGVYvUbnA9",
  "key7": "5JQTrd8vp9zjiEoF3xJYr7xbPQRdcTMMzJ88koZ66e7GbV24nMNnWnsJbnZnkYvrZV6XLb5uuoki94odTQNJgyd7",
  "key8": "5qBFizbyyPiweRU3U8erPFvAhZn8MBwdfTAd691kXaRQsXQt5pyvb7n1457LTUa8va5xTErcunguRpLGs1cREorA",
  "key9": "NccyWqJiWbcfTz3qk8tDgBfFVbckGoQqyB9sBYVVFQBA4LQeA4QQgMDrKFGCzpDHQG3L3GTwniSuy5n1wESrzMy",
  "key10": "3Dsd3GTyt1WgzJCLuqwUqpRho2z77ifvAgNFwk4S1yRoh3EVKuuBbBNBfAmW7KXu4dX5RfMvJQgU6U3TksP445pa",
  "key11": "3uPZh5ioZzoZSCEk9rjiqQrxHz6uR99FVGCXfnxHVo9RQhLLf9gbNw8DHVXuwzbFbrcJpLn79TDSSzSienTJnPdV",
  "key12": "1eWv574NTcy4Ud7uoZ8hjcYWa5M8b7UnUeefTTDMEtPxiAMpM5SZDxMt1o3UWZXg4mGsQJaL9P8RtNxMpiZcsFY",
  "key13": "5tqXoquPqDXD59UMLc7yrcMrps8Sii96U67YYCc1QZSdrHB5eZgki6NcMdwWrjQNe8NQ264soGegtLLvurysUMCM",
  "key14": "5EwMSQQ4ZUyVtKUcj22f86W75EFqoKaEHz9ax9M2rTZQBi76Dwqip22hfaNyiuKJz86TghvfAAVyDrbveTCKQzDt",
  "key15": "61aPZS9D1pvHGtFwiWGLj1xwX4Gkc8MFccLEGG7Jmywd6EcWWpL9y417wKawssUFMvroHhdTFkscGDdNztKwSPFA",
  "key16": "2J4UTpiJFyRCoE6Tds4Yxaat5Q31ZUVpkfBZRNhUENBNZvbM5guA8UMTNSJdRJuHHU5objmk7yEKY4da3YxGwMUz",
  "key17": "5XujbFp8GyvGno942GvndwASq1tLfrHkyvdiHKC7QygzuJ5TsGY1VRCerViDBCJx7onbSWcUUeNvfVaZQAjdLQq7",
  "key18": "3fRhADdRj92fw7G5NqndV4xHssReMa5PvRPDtA6kKPXxuYBVw5VzCVddwH5WPWugs3mtGGjJccnU8445VEWKeR3L",
  "key19": "7NLUctYB92Fwe3fGQAwZFbS9YabpcwRK5uX4XBk45QR4mDYpowFK2mxFfYt61K43Q1DvRA5orMZiaXWgbNztJjc",
  "key20": "2UVeqLNZnKrHv3ZjuUzQN9YE6rMHTTxHiduHepob2CkAybxSZha63K6Jpd6NR7xNWx5or4t4wXxn2CfA3S9g62c6",
  "key21": "9uyPLq4J7GWcTdNwTZsmgUPBttaSKr7y9gFuMFDUEhoJeMyJ3fdkUJ4QSP1NEokYkkMD29LQGKiXUPPPxzsNmRG",
  "key22": "zqqHijPR2Wwu2g61v3bDkAE5SbcknedG6k9miNUUpmRkP83LX1vXA93i34Tcq9oHnJTGPDFLYF4gn8eM6KGZ2Xe",
  "key23": "3tx5CGY5YVjQVTxhe8253t9UJEREw5kG7enChkba4MK2vj9rXqJhEx4KXkP3evNwJLrxUrGoLcbnju82mrekt4cg",
  "key24": "4gYv9t2kt1LR7Nim2UC6VrxJ68yjwaeUrNurp2bxRe7siJXcZYoHEWnMqXQnNg2UpDsMH1DP1aTL8LNNAE1yYnjt",
  "key25": "323MHm12PpEhKAXvFzBuwWwgbHw8FUtZrT8Y5pzi3HSjRBCmjb7QA21GhLNqe2NxkJASGttUMwyo5dr3T5fNoDB2",
  "key26": "4Lz8Z9sQB86UfNucumkzY98eWUzTJmJ2tKV1bkXWRsnKG9orTEotAK2RaJs4nn7nzaY72hG2jsQkk1nygSy2SydD",
  "key27": "3cZ9FmT3GhP6sFBAgQpxppBQghDDgdeVRD6t8zZHmdABBYj8KdspKswZu7qPMaemFHQvAkPXTv3qWUxLjm885dzd",
  "key28": "2uthRouqEruPTk7tsusSq4hEJ4rPLX8GE7QC5VxLfJxs7mSpY15iXC5w5yQLJNcLdGFWatK2iLoS5LjXRuc8DCus",
  "key29": "2n35LtM4YFgDEmTXVR6agnqCuGv8QHAuYQqTqqSR78bn9B66RCMG8ys9mthN4wFjDpzgbVSshS2tk12vUdKYFgaG",
  "key30": "3HGPNxC3k4NtrYGMi4CHoz9bHCqxHtPrAAD7VxMmViurupWxp5akfbXhuRTjurDwShGG4rgmqjoUos9ted1goM8Z",
  "key31": "RjzztecrigkMyfDUeFR3zJ4ZfFKrBewtcrSWCTBV3Gn3YCVzvcLy8Z9Kf9gasg8ENifaokLwsfTmworFsYYtHZ9",
  "key32": "5wmFFNZH66veV6hM4k8e9HS9Uw39eVQWBo4wP56expq2hdqzjqFhdqxvgdveBw1Un83j3PWCq3inPSp2SA5BUPq",
  "key33": "4M2iSVYwtD1Bu5d3XHY3AuJQeEHJDRrSAK6d2asiL8mDHHDXVwwRi3gjotTqXxrGNByhNWRMRJw87mXwbwEq1G6Q"
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
