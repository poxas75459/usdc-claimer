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
    "2376wrX9T2qf92cEtuyN8DgEDvpFTL9Rrsq7aqKvpK8prVRTysAXwdVb8YLRt2nDJJ7K1FuJE7vcCfV72KhiMbae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y17A9mMRejsdgicTHRrMrbMseg72E2EBuLdCDnDLKUa94HBbz12NZr7UR2RWmPoBVwTiiDofDwFUWzFzf2YdFur",
  "key1": "2paMzvETjb24WVPBSAnQWxZxyHV7qvhXZGjgNNLbz1HYPvEv3TS9uBj3hCFQEuoHDQYVtFiauRg4eWptWyqXSV3i",
  "key2": "3qzg8WSbjsDpdnYZ3GB7UxdCDthVp1GYtsVqdJTTZsg4jZSiMNVWLZCmb9SjbkpofwjhosGEASQPiTMjMdRTTHsM",
  "key3": "echUPz24jTPe7qe1GMAcVDyfHVKNUix7CP9fSTWHBz2t85tLUVx742wrsHb1YvjiR4efQez9AHKjJ1KNhvVRoJV",
  "key4": "3ZEuMep5jrtpySwpW8qWbgtKheGXouvjk9BSeZVAx54Uu3cRNr6r4TM3Yc2AKh4sruk3GuXLf5QVjLK67RAt4tba",
  "key5": "5hu4WBdFeh6WKpGghiDffN8FiZTwXeNXZ2TpjaU1Fbeg7Pu95FCahKz3WeAS59ZHhzbB8TA5yNyfyiweLNzRSa1F",
  "key6": "5xi8HVsdsRmifn127jATrChFA3R8iARszTkue8bJBhjPDdxLNRqgNLPaGSGXK2QpviwBmJoE81Dz1KHH5wWP9utz",
  "key7": "59PzDxDeWhRsmzSyAf9MhdcmGSBjQh93KMBCiHYCZme3iJEMY2TaNmQRNfL1wZhesTpsp348dmoXWr9Y1BhYGnfs",
  "key8": "6631mfKS1Cocvna6xnvxNHyv1ja2nonDa8tyGbLuDbkTtwLEyZtd54mXFQ4KwR5jvhKRzBzkZoVtpftxCxUYwLyJ",
  "key9": "4FWhi46jDnpVpAndT38BdKTjKe27HToHt7bTtL1k5SZVPXycFzaJ3yV6Yr2RE1njHreJLGJbFTwkbaiAE9PwNRcq",
  "key10": "2SP78vHFBNSNL4hvsBJmThbzgowfgeScrnKDc84JDPq2pJVYbgjM2Psyn5L7itiLog6eyAu2AgfBbVxLwJ2RdpYS",
  "key11": "649UnXTeSw38AFJ2ozqNTt1DfaqU1RydrGsjJJcZrQzWRBFL6BMku86mmfDUA4yyGmjE6SKiNXnuQiZE6Asbqpyh",
  "key12": "2osMj5BNZg7WLALkayUiyMVLL5FDu1wU6yPs8L5cgSqsW9FY8dDrMXbrBzCpReK1PtViFxXbQsRUMXREASeCMEWp",
  "key13": "5PCo7yuyLdovHL9N5x27cTWdXnPy3DzYVAeYXyeDE8umdoezPzoRmJzHhs9BtewumkH1kAAUSspuZ6PKiX4iA4Y",
  "key14": "3Juz4s54Ub7ce8J5uZtHpUCATjARQiafEdCwtJQ6TJTCJkNg4zEBAEbsvcHYmaLkeaqieED6St8nT6EnkkR5Pfpr",
  "key15": "4yQ8DPzD7YFw4CvgMLVbsLe98x6kXcVnL1Qj7SMXZ4EzuoQqRTQyv51hAu78DibFquEie1WPoU4rmrkgDP3rQawk",
  "key16": "EAU6JtFMBRCpVLxxwjVsEudr5VzyPmcRKuK5TX9618GKKWaPuWNPoAfp2i7FssETDsmHyapRHrxKoibaFcQwihT",
  "key17": "2sNswJdEUGpXC1szuZaNyUQY5551Lwnh1dokv3KvdNrQ2MzSZzSJDvKABjod4pEVvn1kQYjwHYZpbnAqJrNPzekH",
  "key18": "4fmVJ3cZtiuAd5eFUbCoHGSKRQvrJsZeDgppCwJDAAbZXpcVhmG2aHMNfhhCLz6UZHixQFazv85PVSVBeyArENkn",
  "key19": "5ciXBkWNn4UiUp6vb96bAzCJRYaEaLUF8y1YJXkWJP6BAoRcC9mW8ofqX7kTTg6A5ma9kkE6Ka7Yk9zDLaaDptB3",
  "key20": "TfAaZanUPtKZkmtq68kro66rTVW1iK3YoDViGm69ixExQcyTXQwhZPwDjWm4kJd9vXrUrpsUoFJ2PCjE9r6KtN6",
  "key21": "5S5MVJjs46mTKURSu8HjYPU3UakmnXp1qsknfXqPVyX3GeVtyXM6XpFpUh4GPNpFd2JWhwRq86iGKMeBECxznw7W",
  "key22": "3dxPq2ozqne2xA8R4G56ApCuNG9HV6kDfnZRtjXE2vLmrqmVRYW3f9725yvYfjxGVYvetqh5ZRZxk1WMeFWUxUz8",
  "key23": "4gc2baRoPo1MYVp3AsafonLCJREL8sYqWKXev2uBFbJ9SycCh7ea1UvyL1eaymfSsuC86A5TYq2Eh6FjbB9uLTYn",
  "key24": "3zn24gSBh1i8iNZPrTk8Lc4j18TMhD1q2Xp4ZqQb4Ki2ZjZy3VMQfWgHHLMtdKJXFtdqa4qK2jM9vegWgmsKAQGp",
  "key25": "r4X1SEeTcF4i6z9bcMrJNHuVQHND19EN9RRMpQqzqdEjzPNSZLFTZ9JjRV7UZi3UPzvbvZ8CmhMstTZZ2kNSFNo",
  "key26": "4daEGMk3pvkNyuvSG5LKqb8Ukgc4kqEbbVvBQm5uHYxb6sayiXgiDwm8NuHrej6pDF8AF3U5i499nYNPdxBoPkd9",
  "key27": "46XpBudBHk4DBLZUypzkAQRHNNBkDJJfJwEwSdCt5ro5eFhik5L7V82zRwzZie9a43vLENhyvHVTGEH8BavzXnVW"
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
