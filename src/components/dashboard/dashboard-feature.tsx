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
    "2h1MMrxRbeMVpBVJocPztVrjqryECEf9V8nfEv6vd9ZSYFWkCRDcZPzRUXTbUALiCTQrCB3KuTM3SPq8M6S1M3a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdkBzht8dwiVJmmkktPnHoU6RLLN5w6qef9ZhkkTRtpcWKqUivtqw9nnyRsoL6bn3CXieWR94FXZsWfHXfEHU74",
  "key1": "2doQjUi82Ebo1NLUQjViSGvvJdgUzjhGsxcpRtHFWaKzFVA3cFvxzKDn2y8RiVcmcgT35dTbctnce9AoLT12HeWa",
  "key2": "469ZUkmrcPHVJbiWACqEpQiAn1mSeXbs2TkyoHFXEFN5AEPfD2J38vaaG2uK5MZiWdsVQXtpdWtBbdALiNHpeBvj",
  "key3": "2879hLSNgEB2wjadnJRGobng9H5n3gAjumjyRErxDWA8aSjrsK7k8p5n27VvCh2LrNMVf5sBTPVQBUZM1oEc4bSJ",
  "key4": "3GrB9jQTedcTPhkwHdLoggBmxEoBYoHyW3eEwsygMNhTjGL1KxsBSxsHcktMPst9KbHxgBnzGmgQKWL1MpHqHAv8",
  "key5": "PJKsJ45AgyM3ajGfvNBAKJVxswJRpLJfB6LfdYDvon8JCEoUKFHjXoHi4vurdP4ooXYc28EJzvgzjzn9P4pu9BB",
  "key6": "4yNqF5y7X7XzpJdKw2CDn59KxwGGK2dfL1EJdzCmznp5VDSeYfp8tfwceHrVgyuztci68so24tstA5LqKovccyWS",
  "key7": "3sjbn71TDA4uJCXXZmxcePSWRDHNSHtRqMhXZpz3N5kHcZ9oc8w7ocTaab6RqVDAdq8C6WXkYpBaWeQ9HHEjfyCC",
  "key8": "5NWirL84JgYC1Pa2AXBsSyVUooPQZUmnGAaep5H2dGeRVyGDsTnXswkk83QCzioouUGJqMAEoRkiAC59esxvyQSC",
  "key9": "5Y92Y6VbvkErkPuRumgPDwF5y2d5AGvPm6nvP67hHPGjfi8nU3Gi1oAXNayK5wfKvhDb4G5xsdQtAs2rPr9kUEG9",
  "key10": "3Xx4YFmLktBysGT2pJWF4LiGxfFarStaAZGvZsk3965yjCe1HfxuDqYzc1FvTxUP62cFnjs95E81bcKeyjgvLTJQ",
  "key11": "46n14yhkdVHaxRnFJgfvrUrLcWKX8aQQGPLANQGWMCjofLSDy6FXBt7NrGcQ5H95f9rMJJY68rah4qAHRyLCpEz3",
  "key12": "4S5zi36ywSLQNvepTwiQVLi6aiNNem1heA1BJruDH7ZBak6Yi6jNdo5qJbppLC7QPwTt46LFwXSdHGHu3qpmxqL8",
  "key13": "37eziwk384ij4Qpwv9xpymRWya5atP3BfTFm9GMkGd5qXMvSm5Cy4VoYvsSorV6GEuaBEr1EMpuUutP2kQ6e5bgC",
  "key14": "25K6JSSeLTGogzD6aJNem1e8nVwrHrgLVwsTu2ny9V9iHWxq191XBAsDz6YsnzmWLvRX2N4iEwSTsurwiZrc8AEj",
  "key15": "3CGBVqku8T4iGZdqwDhkWJ5fnAMfYCgKGY1tuyaf7bGMYP2L9JpPZ4gSDsec6DKfrU1xKViH7f3z5LGZjPCUbXWp",
  "key16": "5Nv4TE9GqFi8P2BJFswHaypFoVdfMpHkox9xeihAFGHgP8oNwTKw7a8UgsaopGb9p8pC3GBysrrcoJcppPeVfepf",
  "key17": "3wXcZ9KikCTrbArx7pEUAvNvcRyVJHMr8KmwBVHJreV2o57FKM74VxuHU6Mni62Xn38ej9P3HMqTH8hjyAdcTorr",
  "key18": "m7V4yJYYtwEBnzwZyuUPLuvsHqLZLxtvUhuTkrbx7woNE8hLiWLxLGSnjkeheZUJXN2P5Amey2onhfdU7HFJKRv",
  "key19": "XZ5EMownQPFBCd1tVLTNBYZLQe5N8oZKT21Yi4oBsW6cCcig1R6U28gtbvZnj9ixkq7fGD4EPphsaEngSgn9pYJ",
  "key20": "35abzKcq3a9qBa28JiBxrwPmSfBVdXD2PbdxsHcnaqz1BajakVq7SYYKv23XYpY6AytRkTUxYuTzHo28LH4xYD8k",
  "key21": "5DUdUU9SvZK1vwdPu3bPmhiJ1bAr9tshXjtkHwJdig7Uepnjs6RC8m8va2vgs4Tsr2fNFtwwn3XQ32GTgnS1eff7",
  "key22": "44wvFAh6YfGguq3A7mHpGBzqUARhgSPpijq6JtQzt1Fs1gPNhq7fFCFDeiZm8KSTiaznkLDn3JTwCmo2T4p1nnPc",
  "key23": "21Hvi1FFbkdRWPUJPbVKiucqHbX2i5f7E9nVESbnPEp8V9tX3jYbhZT6iuXRAVCUhRz16kVCBsK3npWrrnjgoFdC",
  "key24": "4mpaPY7GWM3zPb7YoFFie2Q6CoPaxR62nnjCGGvrGtTcXWNjvhwe1uPGsJDwFFFPmQyBcK2ARfQyocjZAk9tBGLM",
  "key25": "ngPysMUjpo5iSggobezC9cvkrddenAaHLJTmM8vvqpNJ8mRcJSSsE7eWunUMBjpXKZ7hkJKPCFgRzeF7sT57K4c",
  "key26": "n1rxjtVnoxAA5SSaiNMsMGbjzFgaJEzAxXipryQPVAePkXi18NEEpaHunjngbjoDbHxy4UKjVnt4ZGb1hY3c8bZ",
  "key27": "3Nq48oCUAALLU7YyLqjM2wuKYkXDTwfVF4MaJSSCF1L4imu2rRJbykh8nCcwBcBDudzZ5njZD9Dy8a58574RXDsW",
  "key28": "33dS4oKnWp9qWHSidNLKLA2hGrwPxDG3dM9wBMsCPqeuErLbouJDvpoRk1hdy7h2SBjy5yGYtXtVpdmE2WxqmSiy",
  "key29": "5VV8TCXyHEm9fmHJ1q2sixXTZTJE7mmS2hBcArqkpG6u8Kh5q4wpQkJKxqeYDgewYjFPPv4bucR24oBSktCeeHXZ",
  "key30": "3jkM12rhMTdv1oxr8aT4Vpvh1nPoom2CqXYs9D8Nibz55wqmUxXzEAGoJxGxwTciE5wsySw34fzkaC4ABifWbmfM",
  "key31": "xxAv3gDUqacFTgUrHMdJct3oANYJmbERnL7z2xR16fM5ujK4xNSqa4NoDUMUWZhmAY8FMsdvbKvM6e5WoqMuhjG"
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
