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
    "5ivn77QfhWTV7scgNH5JVeSiyfzowUC4CwTXsF6fBjcwoiSvjQnjtZmSr3SDpkx1vwsCSmJ6ggMrVF2Bje5Xi9Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdhwrwoKx1AesfstRSLxtEiBC3446HvRAxrvnfPN2k3MJ3DJhkNp5VdVt8pz8CpQoBqDn1efeaNCXzdr9Xyy497",
  "key1": "3AAn18c84SvyTRAefc2kMN5kPQxUGoRPCdECfMVtbFBDupEb5JeF5Guj2ZC7kEQkQAqghB8LzdSHdPveVUL8teW8",
  "key2": "5rhVnpKyTbj8FjC9Ng7dAxbJigw9TCD1AtVzSst5L1EnJ1KSfRZ2jb1TustgfMVhKfMpVQYBxTWog8geRxkcm9dn",
  "key3": "3x1P8YztPuyPxGZ3w9FPkyDymgmMjHfgrzvYXDtKJvToxUGkYwu7zSfNQQwwAGr7yJpgPtbuttG8dJ5tBc1CQz9U",
  "key4": "4gjjxrbztDRRHk4nhDpp9G1UVuzw9Fv5ZY44KKKRswCYZt9giaZvHy3BQ8666T46TsH2TDbAurhc4cSbkss2SsrQ",
  "key5": "313mSrZx7LMj2cB5KumJXhSbBw8jh5gmSJRisnc8abjr3gnehJX2ChqvWYUF7BGHd36fhCQqCcBiESAMXjk8MLgB",
  "key6": "4yH5nPAysQCpq2SbMNSirtFWtjKw8NgFv13BiqAFtrSPeRRbXyNDF5sGsEPKxn8S6raAUaVzMnGAX82AYfa9k3DU",
  "key7": "4iHSDqFbj1XusRt5afKTcQVvn7CfKhW9bacZCnvMUvKPLLjuU5gnZ9T5F1BFcf96UQFn7HchSa5TCHx6qjqRN7Wn",
  "key8": "2a5szYab87ipo3oi45JTM1mdctnzFLJ6bpszWyvCrAHs2t53HDe7ym61T1d9LYmUCy1yij3cyVwj4MjeKubK3Sk7",
  "key9": "3sbPn8hA4V9eYKEMG6hnX7PfyMbo7MkWjdbB2ZV1kv1GFoKPvjVBEKyfWPc2Kdrpv4HPpH29bsUYs8AYLLbhUSru",
  "key10": "5iCS43SAvxUw1NMftUjTsGa9sLfQ6iTaJCRhySMTKZ5EE58rwJPDPJPcbnYz1SQixeVeaCi9YHED5tP6oBDKJH1q",
  "key11": "3y1gUSKq4gYJutt4JLRpH2Ph1Yg4LcawxSb2izP6WJfQ2hJ2c9Lb69eMMvRF7uyfaXoZ231UiQaPu7hJc2rx1r1u",
  "key12": "2R3koQqtb9EAS19LmX61fPkYXqbXFCNPbyMZyNu8HJMG6pqgNfjXNFaJ7tvSSbDxVMNs7CbvP6iwVHgm3PBWjUDf",
  "key13": "4Ps2Rh7x4DfGe9kkLiuEqedzEh94pyShm4KyTs1hvv9NK6vQrTh58t2wpD7EuDtnTJkitaYARLJn6Rf3TeFUYhrt",
  "key14": "58nj1HkgAnFNkvYoW9NywvPekG116kWQpZgfZgknBUgwA2DrcGsx9aHLfQsVNEc41V5rYoHc2hmzLjoME4J8UeUo",
  "key15": "4U4gZTbqhcCJ1ySRZJiZjz1fpWXMXvvJYQot68X7Lx8xFD3YErkfhtxJraXyv2fsUWWYdGF2A7kbQzmzjJLDUmDW",
  "key16": "3zAHbZuJxcdgA4ZdmZQC3U3Ht9JkMLq8cFyXVwsGx7eZUgsaXh3NP677vrt49dbwSSxjM4fNPfr7PCrhEPeS5FjS",
  "key17": "4woXAWoMUK82tKMfN9tYH1NtCUQPkeFBVXkJq3q6RNo3bUwxcHmythAGunRQSRDCgtx14GLWbgfv1kv5LgZkCAZ8",
  "key18": "4KAsfeATRnE6QiatfkFmF5GWuK8Hj128DMZbYLXwQd2AhG7ype3pcN56q4ZHseFoYfFyyeF5tQcMNWg6c1S8MCA7",
  "key19": "5kAy2urPswUc8sJAfsmZ939akVceEUnbgLZvtGmLRS6gYebWe93NPxCbiapzCzbuLAXFqrU9gYU4wFcdTsQEjbK6",
  "key20": "4gNTiPNHJQu43Drhhswtt2dELdFU8ztZnkjG6J61kXcmKfnHBTdozr49bbE4Svm83X7pXsmtet7sg9JSFeeVqThF",
  "key21": "2pCWpgf6yYULPb5CcPAcmEq1DJepHzMFHxXGNaLPp7ezidB2SthcGVXiaSphqLPEjvG9U7SVEKuKk1Ct7bHGHVLV",
  "key22": "3DJyQYJSbFvQByHRch5SeVeVFHUp2RRUAoFuXiQN5cvoyD19u1Ku6go36pvVnshd4AZ4FANUTLbYZZyNVcKSsq4o",
  "key23": "4YNeZAKeD759yKHPtHNf2Ufc4xYzjJehqMnsJC8wMjW6jmmMxecXuikGbeeudyC4VpkpJX8xEJwthTpeKincE7A2",
  "key24": "3WwdfxADn7mH9J72jjRAuYgkVMcv8K8PiYPWajy5bWJ3Jc9Pt7c68RhXApr4G7GNpX4L4sf9LgnMtzinSR2BZrDN",
  "key25": "5Xz95JqqxHiGQLgd7MCuY1LZykd6Cm6iRKB2aLnUn2Ngc2tkTaa99xXxMJfsga41QVc38c9PHcHnchBUwHnpaCUm",
  "key26": "ujY1jm5mSFQ7LiH6yQgaq1bYGAizmXdPF3ir2DrFrj6CF1iivauLXsuUbYVpjXzJaPpA4hqUjUAPW1iaBMs5gJn",
  "key27": "28mtHap4jBKmDJu72aKW3V4bGLjGPmr347yoKrfmDwX4BEhEcBeV48hZd7wbMrYrdZhC7JXhzZQ43g2oxJpdRsvK",
  "key28": "2AxPa31DoV2kfDVsuJNvJkF18xdKuBnHmD3vDPx3de3Z6UYCXRhrT2fwFfuS8DJxJB5x7eeGLAptNo6hn3gseUkf",
  "key29": "2qt2VLKT6VGQp8xVL7YJJXVuBkoU7bBYpFPQ4zyQi9r6BCkQzxSvExcrkPxqMCyiLKSVJomXrfvkG1joQ7qAZJL5",
  "key30": "3A71Apm38fBMTK7RVWy9k5rDZtLjGkFTKuPT5wHa1yNSXk8RkZZadAa4msmrp3gp3aBDzTfdWvKPfDQbVmThiZQs",
  "key31": "gpTMwWbGdxziDXCX92BwKHi31zfF4JE6vSjeQ3VYJtaAhmfRtMUf7YBYg5eXgFDgG474qRHunyCuwBSRhonkxhm",
  "key32": "29ne8apT4WLjsunPH7HqaeWaGSNKuTPVKz4T9madLb2FyEZbQuppeEHCDCfEB4jDfZ3ATp3M2NMFx5dfgGeJAUTc",
  "key33": "J3p7EuHP8oPbvZH7pvbAnRQQmbgSPnS12aTmwAY4W63SmhPv3zv1HjuWCnw25x4kHB4anJvohxa2DckWyqb6UVU",
  "key34": "5A8jq7z1dF7dgZrBXTanpsmQuhx8NhB8LyNR463rZ1jkfx5LutqSnFz2gykoJSR4NbSxkvaFJ1BFe2PN6LrHcG2K",
  "key35": "5aZVJRotmKYDCLz1yEpYjFCjp2wBs3yF8EjpGwF7d7SX9QVJep8MD3YAsenU5TnQRRhMy3WGHar8JdSEh4wk4RDz",
  "key36": "XcVdREkNqU2Gj2nbMCKDtTX4cgkHPDhquj74Xf9xzoezQADsiTYToGoXA4n8WDapZjrCGZdQhxoYFU94jXaPSrG",
  "key37": "9RbXkr1j9xd3QmA5SjMYhL6oLnAzGMiuRudbrpD8s1puM3pfZPG6AAyZH2W6vW8dLY8mE2JDSx6dNCqbgf9r3Nr",
  "key38": "4CnUKYgLn4RgKgUGJKJyCC4JSMDinaXUGyoYv812XTWMix7SNoZf9jguxgL34mdFyPhkxPvhQrfDhu3MFr9ERnGM",
  "key39": "658WdQW3GZ1mnvx5h2rHEq8dfRHViRZqX5z4CDigZLiiRKBj44TCMVvF6L3h1WXECi5ovvJouCVVuarCdo5rk9YS",
  "key40": "3MpChwo1XAE4MuDFfUnsh7pL2bGhbsnYfZUqVxLyfAMrPDk1825ysxs5gsePeFAsdY9ufvMUo1kZCc2HyywXNCDu",
  "key41": "5YmNBSLdSXHWNFqYGCMhQ2NvGiRHrTEbtcYoJYMomtTYwkBTQfkGVryfJdTA3hbK6S71pYqwE1M4PS4WPaMWAwCa"
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
