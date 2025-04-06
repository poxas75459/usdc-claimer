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
    "49HaNpCJ9DM8RjeziCX3fX5BYN2zzxQrqVVtUDw8EMkVpStdGw7peMBkuDZhFXvgXZaNysptcUZFwmfUBifKp36G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuhUPhg7jBN9j193peRrgrVwpc3xJbMVgKGk7UWi3AoxvvmX1MPoHtVkmiUSoTWkgTx48tJZc7mUPqxiHk87noX",
  "key1": "3BLpB77gxPDcTCmGBoPQMANZTSxRubgXGTgzzLEYAJzp4tFpuxqJM5sAxLTKvri2fD6fT2ywyjK1iKe1WNZkDcFd",
  "key2": "3kkL8tpSip4BgooKQvJkFYE4a2H6aVQoaoTY5qQuqFMbBesadAVD2uxt1kiUP3bG4JYJ1HXwvFzj9Ng2UecGiXmT",
  "key3": "6BR9phGP6trd7x2uYeTaRFmPRdoa5MR9MruY9bT8ef3odL6C3NtFtSFjZq1p5jq5621cyXwrhP5Vxm1XAgyv73z",
  "key4": "2WVjzoJJJ1ZHcyeSyxXfDJK9Qwpc8DMVxtfMsawGkpa3BSR5DgPHhahemUJARXQ2jRgX7EB7ShQq9VgxGUyQLGXj",
  "key5": "27Bs5QCHr84pbevNJSoH12e4ktrUM927nfd6zKNJBwgRqCF9hc4afGsceMNUztn3C1X71hEDgF9tK9if8cdbJajs",
  "key6": "WCtoJ3ep4fpLWC5mJqsSvrPzdfyzCxq5jWuBjTNXdGz85X8LjUV7sW7jqX7QYLJV1yZ8P2e6Hv1C6rnuF1Xtjfc",
  "key7": "4zgpr3fTpSSxvUjyMVsMNhG1E7vJLccPjX9ifWPP5icHfWcbe751KptczvTy6kjPkLkhkoVmeFeZ9fscamgJH9N8",
  "key8": "3YZSvwxRFi2dyYpaC7ttSx3mFbudA9QCqqGkSDKHx3HES6dTMrnd8i1oHeWTST39AzvataL1zK4oJwoYgD5RSDfe",
  "key9": "5EzGZHuaYWFit8fmaUwY2vLWbBnAYwVKGdoGpvx6d61nat98TYx2PYPRCcocX4pbo8JMW6o5gahDEkagEVhzitqv",
  "key10": "YMzbPrud75u6v2Vp3scTWGuRf2s4R1ytqfx9homsehpB5SXnQeS7stvnANVs9hdr7aJ5nmZ3xoZNBdENsdByWKm",
  "key11": "GTYiMRY4tCqkaKfitK9mrJoJUNeTUze6r1dUNRsSJTVjZxLP1o9s2WT8zz4grf6KgEMK2Qg8JQSKBSmVY6KsS5M",
  "key12": "3rvWBjwTRygQC9aDJE7PNgUTYDS6KYhq1T59Hp79Ldptivxaj8FFKoQ87Tcjq6ysW4gsTvZeNquZQBCtAgspvjqL",
  "key13": "2DoJQTrWx4oCcZRADDGR11HjvkcnaR9YYD8fyTQqC1XfUAfxG2HPQu6kKuD2psQMHjPSMCxwdYEgzCPeB4Dp6d3q",
  "key14": "3etUtnhpPMRvYnpJZbnEKbKZeSucfUD9Kt8TLotxp7pWxJFDMhgHkm6EzDVvxTuY8Bqk13KY9pyJF7bCnbZvQ7Ew",
  "key15": "56VPwvY9RMvPY76ybTn9xfdkZVVVXztApXjL9o5opskHEv6zM1pKtRANQRUfLDCHJ86BxKNacwJa3ZdRNFzxckS7",
  "key16": "3zuDwHJeKz8yRGksixoaEu5UpLYS8KH2hvyHNWUZgTSQXi19wmyMu6rkm5ryihHuWDqA39kdXZ1LR4DAgeV2ihEs",
  "key17": "553mSWR2CDVNDmjXVGyBxYtbfmGDtB3wVX1krFgwaovXANNJ2iub4pqtsQW6QQ9sMA8HuBNUmbjo1MJQrFqeiEd4",
  "key18": "22Aj6Zg7Zo87kruMgDUxRfVwJgDGLvG3qG2uT7q3xcMb93zu5KMNWoSPvkjWvj1gFVME9vkhq8TS3HeDscSibxuR",
  "key19": "2yKctUCEFtXXGH69MyEnkT4d9i2kePpZ6eCYTZPTcHLs5ccx7SD4TYSKpKkuFLtZXMtdcowyaC9qjV9mwE5B2j24",
  "key20": "3MMUwj3EYx41EQhRYPnj5Y6iM9CREwWvF3KF1saSpJTARBzgSTPhm4JbtF9s2onchXJXFoweD8rLuU114HFfj2aT",
  "key21": "vzpmWrqtGyeWdxtY15cVRSj6iRdeFXCHbMV8YBjkzedCSmo6C2FZ1bWz8Hxg7i3KTpqMfY7dx14qD28SYGXotBA",
  "key22": "5iTcHW57CEnb3S58XXKDYw4hYsnb1CNeqsUXok8vDTkZ8bP9vUd5tPsBmtCqx6YBQbAm8ufsYtZ6VujJBES3qz9p",
  "key23": "2YfcWwGmSQ9kXy4ZUaMWa2jUMotEWEBQeuJppE9tjZkhLSWbnaWecCCDdm3jrJMqW5to7BjHuL5gXFK7BaY1ebKZ",
  "key24": "4CD5X5EknL1cPVyCWjAd4ek5kNizGnKxtrWojDEQj9VSKL1haW7TsgSVWRPG6HqFsSgKaSSekwWKNCPzZkHZFmyv",
  "key25": "3cyAT1wsKXfJFgohN94FZA4j2WFz8XiQqf2LKhSEoQ9VgzrxQ2ndCNJ8NTMuqH4nGMtMt4KUAVCHTcifPhqwscJw",
  "key26": "5XX8zTneFep6RPFEdWP5WNhEKBEEyr79UfWoaUXaVRdm9NtphiseEWWaS5i7uxgfdFZuUCWsE2tesAK6yx7t3m2z",
  "key27": "3HJ8PRee9LTN6UQjrU1cTsXQuFUoK5wS6fWmyF7TGCqR3NzZki3W8A7bTwqnts5FWq8ec7fz1Ybfmq5xS3q7YoCi",
  "key28": "MqxnBCG5p9U7Gxs7btMVqmVhD2ZMxMPjc9AZTiJdUykPXFHtG84kZkMwQ6NajUpdLDkJayum9MHsSw8qcZcY2XQ"
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
