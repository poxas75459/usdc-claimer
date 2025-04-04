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
    "C7dmaoWnnYWP94CvsBa2ee4UMtfVBYGmEETE3497nvqJLHH79uTYbMxVh3MTcKdhuuQeSE4WjrCd17nNYFp2q2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNpCC2HvpjATGiPcaYw37cTkMwJmCoi5oa6NcdaUSSw3giXoVvippjZUhCyszmYqgjK7BVsdHKxqbCWjjsZPqat",
  "key1": "4LZKQbS5ctWA1uKeaQ1fVVTPtj6BqrhNVBsyVtP6HawwMif1V3ezyWsABDrbXRZQvrdxsW3QZXVhLtq2XJtfNqSf",
  "key2": "vVsyvA1NWB2Gt3FAMmfATGLnici2cKeMnyrnPr1Rh3JLi29u2x7MZbxDkQAvq74xpJyqiEt9NxPDWBnA4Es5o4r",
  "key3": "RnyHrQVQEyAZLQ4AKrTwPgaigR4K76VJrWqsCVaxuAKm6shp1uCXMqgB6Rei4qQZMxmA5BzBxuWasG4oWWYSNt1",
  "key4": "o4k1SPe2MHAN2eQVoVVSM5BLW6gtZTDgPUMTCGCygUEDkU4hbS65MrxrDi5hzU2DKvSvZmX7TgA81vYCysTHkEX",
  "key5": "42jkbPx95kyibLLyJChRfK2MKqNGH5Bxd9fyUtyhiVzwCTJFEsrkmp9vYekYwcViWBusKcT2jQCZc3GUS8EvA4gE",
  "key6": "3C4ayRRNCKCbuFYcxcAEBCDSriQxQxTf91xYEBU5A2fyhF1eB2WLdEJPEQiZThhHqbGMVEQWUX9herqFsSq1D74q",
  "key7": "pwXm984cTY6k6jd7fZx5B89LfDnxbJiBB8oaTPk9tji4CQQSZjDwM4s7gXQq7CBbgXDz2mQkG2fbawz2CwBfXUw",
  "key8": "5uJKKn4fBhUtgwXu6jUGFSbVtegmPhqnngZV6bSy5WrsTNTwhCJCRignyKNTm8yw5duVkDTobi7tczv9zHr6bkTH",
  "key9": "46j6vXcjRUWZxy8WJ5hifxJizPccJ3snxM2Rw8qqetexyHSX5wGDX4Pcb6pR5DhoveTfq5Wx1uug4A4QNrzbKmxZ",
  "key10": "32mV8EAUXBsN3GTrPsZH2iLLTHB6YMYRKkha4bio37ZnzeXu3SbfnVpQPWCHcM9dpELPG6jL23j8DZq3fZjtmEWn",
  "key11": "2xpVDGiRw9Vg4uwq1bP4oF6URFL5T3GuADmdgbJb43hYTgN4epzzbUWbTictjrjA7b5ursmP2piqT7c7Bu4yayFo",
  "key12": "5LPVmivzNra5K12YhYsuErognE59RtDibqxS9rB9TBRq7n4QdNDk4RhFVTEjKjiwewBqF6nDFi8UoEkD6J8EdgKy",
  "key13": "2CAX9FRKhYsFeoaGjpbNAEDrqgQ4Bydy9M5sqhearPR1ehbNXiEdWsQdXcGWVA4aXWdmawBps79ikQhqDeapyG8Q",
  "key14": "5Q8R4D9G8VGSJAMtk2QcQttjHLaLZ2PZjdisZu95vtEaN3QMCzb2MdLLD5roqXgCBjbaiEXJYsdBTPqMr2CcaB1j",
  "key15": "2p9jgti2pkp5fUk2FXnPvX8RjsL8z29DkSH8Avt89EojNojDmuhdZBmUAwK5EnCWbWddq1CxnC24WtEfrBAiNe5V",
  "key16": "2aWjy67xPUiP7cj6EthpacyCNThHvPojLvvxHiG2CfnSqQqKzaofAPKjg1XraRgyq9ERir4bCahETvVNJeh1gvHw",
  "key17": "5tZuhP76qE5RwiAVpTyGgJRyacuVdPkafTt91Czb199DcGE65xedkJpdnuFtr4BchtSNnUb9fc8mXZCaxPA32fwB",
  "key18": "67kzXxiHDvjQAR8yw7MJiDXURqgXjkpqFCjRYLxzat8tKWa9ywMiKKhFe9NkgGoFAwfFEhMBACbFiPw7KmQeieg",
  "key19": "2PUEFx4DiRUmki1qE7osU1tgyukTUZJvHGStvqdXCqRUnqitPmUJSBX6RwnragcAr8gJ6hrcCdxK59eTdt7dmMXD",
  "key20": "4nJg2g9YfRimE8yejtz9rLV1TxwoGTfNGf3ZRz5mtQaTxm5SCNEvP6RZmG7XtcKqkcrCd1ZyC6Bb256WwMprGzQa",
  "key21": "2GXmEKzAz1jJn1ZWsLD8zhLykqtmhnsJ1iKReMeVSQ1QLHrEd4dFR7yKqoJa2toCaZkQC1HEtvaVXg7kFrF9AP9y",
  "key22": "23BsAfdSuKCbTUKsctfBszmuZXMmLZnMngPnqUKRZoqGewy6m7sCnNwQv7P6V3bfKNCP8c1a63Ns5srEjEY3Q3eh",
  "key23": "2ioXbwKFsR4QBaKneEzobPhXfSgadhcXEuVN2KdRqP4sEdNNe8r99539vUbCovQDgc67CD5t5n32xnrSbjuWC9RJ",
  "key24": "54UiZVCnYsxhTwALaxd8WfWrNcVT2Sc2TvomiGMudvHYZSwq6tb2f2H5pWqiWYotBtvBy6coD9Amyn6C17WELt8G",
  "key25": "2nRVu7fRtKJG8MaijGLn1E3Ji4eKt5vDAnfvHamSyvMJKy1ojAbXtzuhYW2RAHLH95f3SxLnLhqUap2Uxm9G5Q7z",
  "key26": "61khct8cDPc4j44BgsWKtvtLKkkbi5mrxShXruyaEodsxC2ro5FucER2bek7w5J3rtNQ9nf9kPyX3nzWrdHyrWxB",
  "key27": "3cfAqHCKnmrKJ7w4eGXvfSNAYyMfYwj6J4qKuz5QEJPGK39sWQ5LKMQVCTNi1G595kumRZP5TPr8pxVTEZGJUYZc",
  "key28": "21drP8pbHyBiBvChZJE14rKhynAvjk8ML91Qid9dJVis8V8iF6yHREef96sLpwoHRzob6pL62RkEPWexGb9mBq3R",
  "key29": "2u7bjfMjiREvwkMSvv6KA1a9wgHQxtaMaFjrTsY6DHtbAJRpCjKaZ7L5vhvQmqMTYZ4dYreNhd1kxiFfw2Bjq2rK",
  "key30": "2LU2khiMfqzQLvjRpDphsT48guCRu5rGzsZvouCN8yoNnPXqWXLwhsCpwdXe7rLH5gNVfNRhHHSPuLmsUuHdpTPz",
  "key31": "64HY3AJ1sM9Y6QqbXED3P7eivNhfznZfCpknTdfUPMgARfzzq36gmiq8aMQFejUoAEdApYr7yyNDBnrWMtrUVUjd",
  "key32": "3dEfgjdNBb9FHCFBQ3eBXDnx9dmC6nRTEZRd5v3QqAYZEbtLzuESYkngbcW9R9nzNx8e6z2r2G1Qw9pYGgpxiDda",
  "key33": "2caLD84cEXCc83PwVZkjQgBGu2nBQvzPXcSjdRQhiFG2CeMELpa8a3AUSvNJc3KGHit53sTZuwTBdqCBzeEBHo8v",
  "key34": "R56L14fvzhqhY289iFh5jSmBNwWJ8PVvGw6NynW8hieeJtzTrA2jEQuSk9PCrkeeUrRq87QABKLrpimtUGQSEBs",
  "key35": "5BgPZKc2eKPpiPpXE4eKDfVETsD4EfUktg9GhxWMiphxhZXAvWWZEQFrox6e9n82qhUXESN57uZu93mZK9xtNCSU"
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
