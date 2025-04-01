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
    "5owwoXwMBXS52PpsoAZ7BDJagMQEaEYHbFZ5jdjeRLTQT5bX1ga1YfSJWjPTtxGchCzWVyX8c1DgKMbBCYFGZR9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25G3Jt4HLsLw4nxazMadSmUzfaxund3M6yjA8rCCTB5nBsK54AQWgakdcgytipWenVJsy1oZG6DrVDYakdEUwghs",
  "key1": "4nD6Wp5gQ53hMqe9by9tALYDNSjgrjEENZHn6fs9TtE4HRf2WBe5mVjn89E8Mp2zBX36fowfY6Uget4jfB1RoeBV",
  "key2": "KKR12bHgKvZgnYhSe8ZT1tM4SQ4maz3YrS3oXEZaUqoZnqXaHhkn4BnypF6rJG2Wpj28xoE833xporU6JfLnEiq",
  "key3": "3QGJqXeab2rf4LhhNEnTGfmvJcAMJvLU7RRCokwHc34WiDXVgDtGcTaec8jHNQ45m4Wuu8FoZuuG6a61oKQSuEiU",
  "key4": "FqbsipzXj1owuXoqB8981cKP1emW6z7JJ4sKKgJVPrNHEcSiJUy37ynyrfvmED2FUBTRGpgU1gEQVPD7tKJPewg",
  "key5": "5nCoBwtLgosxC8bXx9wULbtXSnVNvXN5PJAFo6nohqXJBDcgNuMmYHgXvpS1ow5mTfWDDc2RyQcTaiQGm5F381ny",
  "key6": "2XyR4ASYGUuW53RRu2kxaEheQLryCwAHnSx33doA1TbMTX6Y9PSJjACKdmWbwDCaFv59VEXMSVwhJHEjHH4t1A1s",
  "key7": "MSx7nwcEZ89Hgp1hQCsHsiC4P6637H3YeLe5u85WG6Qqhj48EaFwfAQxa2vmDebuvsVaHLR2JDWiQRxECTyM1Ss",
  "key8": "Qu97Rvtb7AFe7fVyhEZMQ7y9PpYzCjWviwqwJmjLjYhaYYNJiQdNpJiS32sRrpbYtS7qWkYeQ9NnNnD6PnH8MCF",
  "key9": "4jkhouRbp5dtmdGMPsZsCBkpyDcxDSMxTfUiYetmgoX4ZF2oThFkMZbC3ntMbuwH6zLBTc4xUUENyTRfWjphs8Uf",
  "key10": "dua66nkCPkjBFs2WVKG4K3wAXUVRTsNkgkhbXhyNvZLNXNacsbKL16XWaWFXmQoeTCWuQH5vwVmyMcMNzU6b8sR",
  "key11": "241T5qGycebNgH8F4qbC1t4gsCku5YkMjiBvPmfhPjMch6tLjKxDfzNuCWGed2XegU6TJ2tfTjPXGrZoKk3xpv7s",
  "key12": "3Wi9tSpLVQM2MpLzcY5inTLCNHDGqTB3dmNRkSM4FCLH29Ln1BA5qzWWNuixoVdNked2cptJD2izniojcCZcqECV",
  "key13": "4kYcrRWU4BM9azLyZ5fNEawPVbucmUg8o13NRM85VsMSK7ApythwDsieeCe1nWnZuVFShwuw2bSNpiimA9GMCJZD",
  "key14": "51CzkomPvy6DwbGXKmq6WyPpJHWGHVBZxL1jo1tGWdDRxudg4XEeqefWrx8vaWMRKr9CHgwYHZFa1gT5Dvp3zef1",
  "key15": "5yYuuyxednctewAL8z6VMuVJ5Fx6ePt8opdeQAzXznHtzv2sBUbYv5M4f45DWnw35ZNVjQWSuN82a7sEU9CRTGRx",
  "key16": "41TxCi59CPNLzJcq1jx11gfzDPeozAUHUHLW19YC8ysj9cnyhVS2tXPqPwnu61jK2eLtDKG2Cz2shxSq7XeHnM6t",
  "key17": "3LXpUmBUm3onmZpESVJZqFowcQNRhjicSYUb1m3MUqNCUz8NboNNFPvPV27pprv6hM1xhcXu328FCDiHurLkDG6Y",
  "key18": "2cA2UvFD5UHcmA2kB6nVKYtvtAcsRxiw9PFcrocpq4AyGdGcHDz6Hoe7YfxpBd3xL619Hfmk6qTrQR9j54piTKpm",
  "key19": "4Q6ZHaefV9HdTUfF1Y8vEguUM6n4o9u2sJoWTwAUxtQn1yU22RzcmWxa8Dk6GY8hvGHXCsTuACMfenMBBtmjgAYJ",
  "key20": "5uHqWCNEKYCrzZfVjAqsvfJ34haK8gFcQipuMqgdEKkcyUndwF8oRtihz7qxMDw7fhTwycmVRiib23yZrLhp4Du",
  "key21": "3pgNcaFp1EMn5DtAj21jFumZsoK9Yi86HJCv2EBaZ45GfTz2i53nmsFxxhKCTeFcDt6BnaHR4eWEJ1LibSR5sUmY",
  "key22": "3TtKDps9xTQLs5S96iMs2kz4hEa1MxABqQFH3sgxZb9qKD7xBGHvpXqWnX5hUDNyho38J877do3889f8RXVCN3Zf",
  "key23": "4TDCbGUUroZXWG89uHSCJ45PeP3ECeViaK8nCGxLKmwUDucghjnhjjmRhFFPrj19Ds7F9jkEtAC7zTS9R2bNe5SR",
  "key24": "GVqv13CMMzrbnxZQaPF6aR4egc9gKTbGLmtM1bYNjDQ6c2izaEjdmeuJ1BTyVoh79g1WRdXa6f5nSsieonDRAkh",
  "key25": "3GDiWJZtVUp6S1sWuf8ghMnFL7wnEqFN5GVeDsNgthu3w2mgb8iCPY6uUvtn5tWueoyehugcMbpfLt89rfe7BumM",
  "key26": "3nUHM3w4W5U9gM9bJfMpmoNpY46Ud9okFXYQ7jNjmmKNxX8eDMqiNpBuBxuWy8zr1Yccj5uQHwKCFfqVcZdaJjTc",
  "key27": "2psSmLtdcTqrGhW5ezxw9jHbHvnscJ7oMHxEnqmwAKRYRwX93RpEPZrR24QXJgzmMWprUU863WG52zoUUGEFTWZK",
  "key28": "5Pp7obE6JgMkn7AE34orVWubocx8MPMBsUkck61eJhsFNA2v17jc5n5ZsgZUkPdrc3fNjNWigXh2fEfuR9uarJyz",
  "key29": "47exeFzECEDVyMKbRKEWRjfBfoDjFDnTP4WNGJ69u8WzKgZiCN5Xm2UoSvFXQxcsMi4nAYuGkugWPuSrJipnWxGb",
  "key30": "2FG6pRvEiPbG1zvDauRbfjUYQnzN1XYkNZJXeXce3N8PaHCVc6mkmxtk7HAhyRQeKKxzv3UA5Q9vUD34agzntY8d"
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
