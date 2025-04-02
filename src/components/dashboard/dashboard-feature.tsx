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
    "2EX5Pj1hVQzP7s52snSo2einNhCjpu4f2UzdQhL3tS344EzAHrdECzuUvtvmncrKd67LRCAVhXQjnQnFDoPsYiBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kL44gPwidQo8qrShN1x8huondifixz6VrbSt4qg6kaEx8hxfzpoirvUDRv41KJRRunnanJ1h29NugEWWz2GYJzn",
  "key1": "ig5VStRzPr6osAyp5DxDHo5DepxbPHQ4ithfo38LgbbAEo1NCyPKRVVbRHXMUqpkovjHJTMf7ver9NvhYbaGbq4",
  "key2": "MjZ9Ss71NLaYDCpPxvkFP472U99MzfhgG2qFtDwEqGWXN3PhQWVdJGvv2m738ntnFC5spZruGTHbg7vZfVHZdDp",
  "key3": "3PzGXJZ57gMN2q6fiYVScBNpQCQoANSbZdGsNKXf3twLFgSaegQyXTWVqphihdG16yPPsDMUP1RRi1VHnJxsa75c",
  "key4": "5DkGc99aq8szqB92d5TeBD2j8NnLkzbvTeZ51jVMFLL3DMDrt3D5dZoWKRgqMYgaPe5vy2yKgPHWFPi7yk3KuCjd",
  "key5": "2VxGD9JJq3eoUZvpKFtQ5Jsou6VQqGCrHuJA7bvn99Bg8tzMdSqZjBNgZxHEhi1KWyYgzjrhsByfgXrWGgkpr3JQ",
  "key6": "5CWHMzpYjbM3U5xwMd9cymaepsik7KwPbumgQ4uHMhAkyzaGXjyoEqn3mvGo1XUDRijqZ2F71mPcQXq5QmUS5UBr",
  "key7": "PiTgTFYetyzZoPQcPS4UvwgXF4G8MCJqLpYvG6Kfef9aq5uHeVjHjZERoTqryeq2nr4hshyJumFntaDZ7F1AtFN",
  "key8": "b69Y66Pt8KUntRocBEgfudrEDAvKFHW82QpoVTn3prV6PjsZWRz1cCbb965TA2FpkcDv1PGExWfKuzQ5cvtq6R9",
  "key9": "56gBXjp8fY4455YeKWByGhnxQ2AxmkZRM52PB8Y3V8AqNPDf8vGdv5aTpnYqypNoJWc8E98v1ifhyufE1t75R7jQ",
  "key10": "2rF1UJk28FYtZ8mGQodNrSqukuY52MkxX6jdwy29RdP2EyzfhgmzZbVa6xkyFK4TDi4ZDiMaPAtYbJ1rzp9Lauu9",
  "key11": "46hRKzXfpgRi7RWyZeUYhbdek5Mqy5hPEWVmLPwHKM3HmPWG26mJ3YBK1MxNYyFfoKAE9r2nCMgzwyjJadYHNBCL",
  "key12": "83LjVXdbViEaGbgPM1SrWcUMa9WmwbAvoXzg75XukJf62Ho7qBtDaouz864VLBATTfb3kV2ngqnDwHQ9YbH1jVV",
  "key13": "2Xx3KoCmLrjc9hZA4j9H4GCnB5peCBWqLyKyQiAqsDtXs6KGZocmHW41mmMmFAjFr2xkXcwLfN1BGV4qMgaMt6bT",
  "key14": "3ertU816x72dkLzQGYJjMGSmXef8oK3Sa1PyXMLYzHsB6K9BGSZVURRCfvK4bpQzLK2YuqhdF6URgs18FFD4KgAS",
  "key15": "4wS6piWMMGEyA65bXcLNX2N72NuGxigNtAtLSTVEpAHH5jf91eYdkVxCzXzk75wiDXgZoG7ixTRvkuVhGeaguhk7",
  "key16": "32exvWiqm45MwYnZpTEEvR182ic6Qgqd6Nf3zbqhrxYF4U1rCrjLuxDM1f1A2agsWqFQXh22vx3iTUHzS42Fysrh",
  "key17": "2bBEdEigucC4KJwjiYtkwARqMLEgBnH8WbrJWBGvXys2ZXTB2J2ma2mAMokXdyUknnSHD16NBBuXZy4uPDa1G6uY",
  "key18": "2Kyopw4A9hZzMNvQAMh4fmgMApkMqkDuWLBuMTAryTyhLyVqePcXvK78gTxe2xEyF1bASwrdoPscetRFKTEC3cV9",
  "key19": "28fxJKtYVrxZhT7U29u45chYvcH6unWwhWG1aFCfzSadcGZBcpQPhHeaVQyEWj47h29kaPfToS3kAV36yEKMj2yA",
  "key20": "Qp5awnJBaMNzojmh8uK4S6L7rbnWSaneXADtyRdPV8qvvW25yU1HET3AywkdXDWqADtg49crkk7YhW9i3rrcxrt",
  "key21": "4aEKLrYXyj7r8c7jqYFMvXTFrGbqyNfDdAS1whGWbXjuZ6uySt6YbgVJTYwKTX49BZ8CeUuqiM3i5efzDRa2V2Ew",
  "key22": "3LkRdLnfAR9SGdV4TXHymnM6DNWtZB8FTeZS32ueDUABenq1uvCbwYdgrse3MCw8GRagFb3cCZCWeBFrxBviTefd",
  "key23": "4Qd2ciW6LoXUV5PqkmKt4c8XKcFBatD7XETw1PqrWss178Atok2KYQ5BAUpCKtTrqqJEvvtospWKfRBQmij5eerv",
  "key24": "4hVgUL9DQBavoFKjCzxTHLgSSJRCK4DjtPt92XJqqKshZSb6iHYzWyUaiEUdew9aFb1wRtef36SubgtW7ymyEWuH",
  "key25": "2phLd7L2pZjMegGm1j6ti86RaMT2NJZa6bLBb4H2z4XnAmoe56aq3YfuznzwXyFUjw8wqohPa6T8Lzsr6sAu83KD",
  "key26": "5uCKz9oACXzzbscfiUxziQ8WKxyPcJFhXptcPY9zpf5K8CnxPBYFgTPUFHG7eLkbQ4Ew7hSDSfTYTVDXQsbvjRDw",
  "key27": "5Ce2SeDKPPPiFpVv4Nbw2CYThnFytoPFmw2vTW9RbiTJcm3y6z9VaLUTTgE3ebiazVVit9DEngcEJZuZDcL3GgYn",
  "key28": "288mnaqtwNoiRvvJrJsCCLHF1dtJK1FmgQNBzqaMgs4gfGEKimv6KytM7k1fWEBp347jb9rpwVkFB35VbVC7cxJQ",
  "key29": "5N7DDfXpTZzrYVtSZ4CKcE13bNUjFs9uV3VpYhL9dhJC3YQzF8nh9h9yGHcEcNYG3u5zHYfy51u7FC7P3pB3ZjN3",
  "key30": "5kmw2oyfSKog4revwR2dBQ8Je8895FgfLsDx3ABhxeEd52wMuGXWUsQAcpLuaaHLoooNoQaxMT4YV6mkVAxY1g2b",
  "key31": "32GBG4fwGry9x97SbbsGHgxnkBuXmNi3a2K9NBXwEotEYQPsg8PSqK1DWZM76U3z3QFBumcGYFug8ywXP78v68rM",
  "key32": "5qiJhj4npDZ9gfcK4BhZMdjuBXppYZVHhLw4F93GhqJAELhRAwM9qeuS4DeW287g4wHWYk1z1cJXjZDDHnP9g9qc",
  "key33": "4Y4PASMf7tzn1oACrSWvEUHgabVRnuSMBW9ZftVhUPqtcZF8Nah9iJ3bdaMRuwKKQBuY9yHqmGdFA1VJBSh5nxHQ",
  "key34": "4xSBRRYLKAJgaDQmjvVo9P3aRtPALSGczidqNvr6VCUDgoyHsVY4ZCwG5Vun2hBadEMShwRbju4uWfsaWtN7EzCP",
  "key35": "28sHSwdkyXkZckQcg9A3rKC48nVhjwqN8JGFdbttwg5Lpn1t6R316MRmpY4yXEu4BJ15NoReeyGL2mghzBX5dBW1",
  "key36": "ApkihTUgypYHgztzdnqjvbwTWAoS4WScLSmDLSF5YzNNbtNMqUvAom9okhfknHjpRxxKndBCPohseTvAjBCgpnQ",
  "key37": "5sJGVDvBb4SWgc6PkYWMCF8WjPXcmNWwP12Y8B4eW84JBz74yQoimiQne2vNyPCStgtkqEZGw6edjBALX3GwLTK2",
  "key38": "3UafTUMG2RgnDurzYmm4pxAFkvCfCmkT2UBUkKjMgZr3JUoVAEnVw1fDi75aoRB5jkeVBE6ArAZaADNZDi2XttcC",
  "key39": "3ZKLT7PbshdsvmZ5Rfi6XAVV6uH2htwBXyYT2xfwaq346BLhMTj8J3EJDtTSoSmDLr9fY1RWwcRifU2nmrUhBqMd",
  "key40": "4BEaNSbGDMJqCbx4F4LZHJ9Eb4nzMi7QzrW8T5hqU753iimoZcRZk3uJXenFig3EGzQvXb5NZGeh1ZcgnsLKzyCq",
  "key41": "26tSTherWVcKLpuQ7gbbDqXhje4bbEoHXWHQRwUveYouWPsDDpJjjC6csh7zNqBXS33qKLMYkpxjHeHu6Jc42v5e",
  "key42": "5xp62S1RxvNCBuZcdCMcVzfLFBJjmydHuVqT6Ju77jJvtdH6cqhA79KmAdzriRQJPjF38WGfciqwiLRXdQJhyovo",
  "key43": "4wEAtT75ywod5KSe5cLZVUCSMjtLXuL56mEcAq4Z8598wRRD2n6oW4DTMfr8j4JwuJajv54Vp3TwhLk1kerm16A8",
  "key44": "2fs5J4oZCASscSmXKJhXPrmGXiAEQa4RNBJGZ2VTjxrURa5F8QvgEMAk69jKqsYTvsJHk4UsThdq5WH79bvFd6k8",
  "key45": "5S1uHfQq7LWkxqn8n1M56GDKzDbN4VqVy1o686zDyWmV831GcekSay5ZbwN3YWGMjF88Jfa1PcSmSdC97nzgVQoG"
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
