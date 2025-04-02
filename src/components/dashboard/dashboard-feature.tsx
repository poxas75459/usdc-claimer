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
    "8bGdD31VXW38GfZgyoU6FYwU9aRdgVHHhZpoQVqTrkQG76wZTfNa7ac9CiiKcP5ooUYvgfdeKa75puJszHaQnTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgUL3FtJAoJBH97AKfHGuPADvyGQdCZDseWQLGdcVnJyfTdK8THTyquT6EgeJxJyrPRY1MSd5SwMYwacr7V8rN4",
  "key1": "2CGpbU1znaBnJxQTZ5m1nwuxEw4Bv1MY4Ab6wCA97vcEqBW9v4swu2aZUzUi59HsR9he9QUD7DszC7NVmywpi3xU",
  "key2": "HNmuXA7wawDMBjYx3GRoTjdiWTz3FWdZu8h1Eqnoy84cFTyGc5NXerDJE5HTAaoKnejC4p54fA56Ut1ry62T5Vn",
  "key3": "2ZBdacjyAgj4dMWeNvqg646U8aA3f2C3MhF3sJYtFjwAgkKhSE7L3oVNDTvmCacQSZNjk1T8vsDCi7nyaipQ7QMb",
  "key4": "5AVGXHfyWMDYqLXDAje756czrTsPQ7fRyABzMtjcP1yD5ktm221mh6VD5JYw4ouBDD9WyHExLJuGiVbZi3xNhDb7",
  "key5": "L3tFku8GREim4rXicerGUfsY5eErGwYotXeQ7ULaZg2UgRWnRxcdDCyZhBEWme5GzKF5faviX7nGnHzL5gSETTa",
  "key6": "3xtj4QD9cTmLwmTn6pGjQqV7SJ1qmi5DuWnqvmZvLcb8Awz5v85YSMCCvFJXsqnvB5feJ3LR7mwh6JHptPs5RnCV",
  "key7": "4A998Nkqmgtjb7q5yhiGw7kJwZRCwuZRa7ZhykkXh4LQGxVyHJNn2LsSZRM22LyPDimcjU8T3pv4x8XE5SnKvMQA",
  "key8": "TjHYVLtTy6acmR7Se5HJVm4jdf2zu7Y98Hty4GxpGZkQyE9n1jDpekpehzsG43bhfyiSsZJ5XHw8ndtYZiEE2Xi",
  "key9": "MMUCjK8eByn75BPUSDd7J5JsMykfemqGvyvZjnPZowUEJVXXYRJYH6iLi7XhUrJ31dyttBbrPG5woybvMDQc5Te",
  "key10": "2xkMJgRjYrBkwp9KHBN5WohaxSAWxcbyMw27yUp31eCWQfE6TnsusuH3UzsHZkg5L9yipV3YdoASVQEgqgeHePVX",
  "key11": "31WnjohgZXn5y1vhrQavAQoC9RRKDKdi6vTgy9XyYftTfeNPWEuU31J2Wvzt4Cv1R7TezeJCcEnZcw8e8pLHfSdE",
  "key12": "4sykJhgGeJUXDgsfdZM8u3jk8rw9KUjc35c9JFqx63Qwy2K4GCU8kzciACjrdn5h4me8qFRfpk2AcqU25Nh61MGT",
  "key13": "k8Gi88iNQWNUbYmHFpPzTeYjj2iGbj1gsrkcna25FrcvvEgeQmcS5pqmsu1srXQKo9M72WBwCnNp2kQUyY9Ab9G",
  "key14": "3p4RS3X7Lc3j2apzNNBXfnucn9FkxjqTqhB5DBgWKDtPHficUfiSh2PLkBLKdQ4p6r8oizBieH332MeAQsfDXHui",
  "key15": "4mSpxZZTZqqqmSn3EDUU6vGTm7dDCEWP6cQevxBJooeHqsrBBRR9BfVJwfwMLpEUHp6cunGcFgQ9HxiscbJPr7Vn",
  "key16": "3NGCjG7mAcKVD6dXeTVWFVxBJtk28LwJKMCh5SPjT3PkjhyTwtyXQnvUUjnTDeUxMCUjakmincTe4VJ4LridGSrE",
  "key17": "4ok9vrqtn6WLBQh1PnEXWdhKuLQWbMecr8UV8YSCxDHpBiEeNceEnV8J5hiqUxcmNRK5T2qTjbWuHtyRpPcsUT41",
  "key18": "ozZwCTYRJUHZjjvFPFDF58BDQ3PSVdPDTksjdsviQHDgdMuYWN4HcPP7qFQu3kGGAaFA73vhNxa4M9WvSMVa7re",
  "key19": "3j9ttDRopFtcoXCoa2wKLD2KFy6t7BrxeVRRSXwff1Yo8gMfzw1pLjRqcUaBFKUTn2Rjip5RsmpyQ3yVprNZm3iK",
  "key20": "2MA5HDvTu3WV5zM3raPid1G6CVhUUCn16dAQLWyPaZfYcRy1gyaygZeTyc1HN4sUJmhwmi5hijdiqrfhggXRMFnQ",
  "key21": "2QqZygCgZmJB3LhwvB1bSexQ74hJXecX4S6Fb1npSGZRZgp3wyAyJVAbWRBJPoqavXqf9xCZpTFbPHkWDGRdDVto",
  "key22": "2JUMgFs9W5gmxzxYpZg5VfyZkUQRKFiim4WDQ3Ps4g6UXudGzwnoUvDTJpiN55HQK8T5v7NgDAGwkW4CKH5ahGpz",
  "key23": "67W4HgX3LmU6AmQR2K1DqWq5JcroG9wy9qG9CThiwaJMskdah17HBQ5CkD3c6A443Yt8Dd7S8xvhc5gNBgaWrDvk",
  "key24": "2QddDjGAmVeq49vVngxwdGkTGYq5WigGafpiswECVJEKFXaEiv8bWVNUNc2tsk8fFUoYYNxAg9zkbgPNsQTmfJxF",
  "key25": "5fe5CjZ9uybARLRpYuwXY5CV6jeeCM1q2UysHdcBHi2Pcr6VRVgdTTeqcqRzqabEh8GxNyrL4ZTTxDTCR69vJYq1",
  "key26": "2bVtmLnYPAmdpZuRDXLnhYR2AZNaqBsVjFxWfkA8xtUb2RJA8vtTR95eny9wLhvG1zf6Be65Nr3QYaDLr5Fx5aVn",
  "key27": "4CvLbY4fbDdtegB7xerBX18ArPbn8iCuRQZX2GFzs554v2EgwGf7wS6MPQCLZ2JRcso9DJVa24S4HBwKv2gMckns"
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
