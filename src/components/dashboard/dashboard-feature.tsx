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
    "3CNk1ruuRvhTJHzpV1n8vg2BrhwiYwzE5ut3BUvJ7L2s4L7vRK8ohbpgH74JvxiQiGV3ETw24Xzvsjefi71NBz3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfUi6UC5MdLau8EPeSn3aTntWLaRTCav4E6Dw8UWbiJZ6UjTPueiVshaCqpVzvrCYqRcy3fAuCSJvK5Zit8PGq5",
  "key1": "3XboRh1pxajPTYYk3JDYRhqD54NkFpU8MdwoyDNkd3XjDo29m5TiCnAZYrFUq1cc8aGmqkit8hDAYy4umo8jo8Sv",
  "key2": "5hoPg9bqa7s6c337nRWysbJ9Bkm9qBZ6McN4rSCPuaceNyWxuh28hx454jtki5275Gz6qPw7UqsQK1kdXbodVziR",
  "key3": "36anVta3umw59QrfxyMQXhvTfeJQTwPuREgkDTmpe5fVkePsAzkLZyi6UiAK2mnHN2qvk2Yo8EiXKMUxsePJxoip",
  "key4": "YKtbS3BRbfZqfGNWwCNEBiV8qc547D9bAdDLxr6zvTL3TuYGSgZx8MQfTbbgExq1rk7Nxp1ExrvguViXsB2URGJ",
  "key5": "5iN8q9qug3CgNasKUxWXN3d3jjSdQiSssx3sUFXSKBdW62hp522BqFC5NYjfSWKD8JC8XK4HomtLpB7bWS1yPSwD",
  "key6": "2Mdm3RuUxcSpxnvVqJmQeH7d2vpyP7JayaS7hXQbTWnpZdoe4WmVyEmzTkWEnGddqYoAW6b42Z52S7B5amLn7hoS",
  "key7": "3isAdjREbLTXsjFFcyqTPF9gEJHQJTMTmRru3oe335aaXoTcm1Zw44CAAoUHk5kSy1znjLrXeGWQak9uwHMGWSQj",
  "key8": "57YCWRENvLupp3foNhYA4CbFL87FSTsS7u5TyghsHgZUrGkZaTSei2JDvuYsuR7n1HTa1v36W2TocrbGAHEBekHL",
  "key9": "4VtYqc3A5GdvHsw3ygR2gsdMF9ZBxKLqJA4rDrctDkdtxDJNUfei79aawdShozAjPWQdDNGDBxYkNLQWv1hStknh",
  "key10": "4sYtv2EmPaZhc3rzWtuqYHRxRPUeXNUJSZ9jd9DzPqYJkAv6BySNfAwQvqyHEW5Bbx8Ci1HvVkmZvHSp78UNV7w8",
  "key11": "2iAbBjVmx56mjEgr1dHbu2VAZ7146oJRc6hr94cSbhVyRvjpvcsL4riCnnhjzBifRJeu3w8MLhvAmuzHsu1DKATF",
  "key12": "4wQKb2WMP3rcuseYRpMat4gin1ijHrdpfLR1MNZtKKFqnfVE2f6YS8NFphGsb8a38HWrcEqZiE4zfAHXj4KMNaRQ",
  "key13": "DL1tSsv7f3XSSwjbWdQViPXYCoL27GcK8zqHfpTtQJGktWNCViycCGfKdygyhdSmbrjsdu3TVQX5EqK3CbjZcVJ",
  "key14": "5ioJsUTq3C3TTnoX45bCJ4VSESmqbmLpMs6cMwoyrZQVnNmJF9W5GrBQwt4pcMmz5sLS77t7JKnFAtYgcwT9gzVh",
  "key15": "61Lk5Z4UGLsf2M4KXRyj9QLcAXkofmvQwamxqyijpscrRqS5wNeXRqEegBaGsnGntQ2Ljbe6Vq2TahXyhBh4sUAN",
  "key16": "jUG8Nd2r2rWuxtYsqaBN2Pi51ciKu3yzxXVBEjmwJVMckZV5CZw7bc5GLjQwG1ggzjEVQ1xjHVXrmvPYBMfnzoh",
  "key17": "2VQNMnpV4gNaKPRQ1Zsn96fBYSuLcq6Sva9UWsKfAXAxRmLXPZdPEGWPJbp2BhoFPcXG43ap6JDpbbocmkBhdxXH",
  "key18": "ry7PtrxySmWizdkNKozVEKrNVxaZ3ok9s9U3CqgSdkNJHSXDG4hhPj34Fv5uxHn2ttWq9e1c8eTULv2NsDbKNHr",
  "key19": "eGXxBgUuGYn5bQ7jDG46my1Z1uPdaDAhJ1HjJLezQS4TYpoQboEPJJjkkRJx8SrofbHEYesZDN83AjF1mnaye3W",
  "key20": "2vniLy7iTRypR3bm4FEexXUTGK7ofq51ZSGUapsHit6JxLKE1oRG5ygz6Jxr71cg2eyCW2a4yEeVyDX7BxaUKab5",
  "key21": "2Lh3WpW9EjDSwqcwNPuH7V4Bp7wPmgq8tM8D6kNgWdU7wet2mpenGUdHRoYtHq73NH5ARURUfZQhgkXr15iRuPmK",
  "key22": "5zE6y5n8oPqKfroX1JrLKbKqkPhcQmvSZhJyvWRBzVmyFbifhFb3jMFvJVhf3RnQ2jc5vtzyTafYTdwGHjzuvNVb",
  "key23": "5qM6Py2e19Hq86S4ZbaTgfSuneJbF9PkyssTve2SaPAbKmKrDMk8dFH54P3krVjGo1qgaEDyGnZPckqPSi4dHcWn",
  "key24": "9MHgdeyWVPAqvjcdomEvx2GndLed6PDCCGwEEnPY6nzrQbNnzqKLWYeyTkc9HA7zRyGnuEJ9EEyYk1xLynN3Tti",
  "key25": "3gvhuq6sECVoduWekdedJJRtytHRB97aYZzLiDBt5njmTUSMhwHazL99VNMCZn29ugpnm9p99KSLBrY6nbf47oTy",
  "key26": "6oLHDxYNxuTz5P5xwC368f4ZNnxhWjHwFQUamwfN5wRA3GF7zX7rwRwHyrnvtVrpvTicRHYKixYDfFoktoZvSau",
  "key27": "22fCi8PriFNJoj3wEzdjjzJewXcF8p26pRW9wLS2npeoG4yvtuFzqVpXTNzmsGfAaMCdZnKG1TAYEsffZAe8wAF5",
  "key28": "567c71sZFQxQCdSPR4N9ZZz7RHfswZVF8PrAYoFbzKfy1a722bDSA69FQKPL53rEtsak3SJTD6wbezgpne9Jo3jn",
  "key29": "5d45UT61Jt2U5Sy43LAnHLCYFnCvNAX6n8Y8rHXQ66CWKNFWiFvcYViMqhVcU2VbAkmPBBfvpEGqY78UgKceMMMN"
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
