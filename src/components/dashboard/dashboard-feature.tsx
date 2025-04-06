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
    "4rJppQikDPFcLMgB7Kckn5duYWQ8kYuCpEqtgjjUYh5Cv9h7xMn3Hn5h23Kb4vUsQPSczCrjtzBiPKHSrTutDdZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLfuUMAeUhSL4YuepxmzUVDfeCJrBhoFHxjdEd9ekQ8grwNyDyzSrHfdDfYmSS6zEpKTEFpWLcxRnv2zBcfveSV",
  "key1": "5HGQ383Kqne8fScpZUXZsKETvAgStZJEcXtahqfD3M6nrije6w67JHTr7iCQ6JpTNjNE626EZdWrEaacbUShEuqT",
  "key2": "5TFpijfm3LbxB3n3g9DiFSEnSbM7Ps1vFGqE9kSyRz4cRRBY2oPWqi4J8Hj2ecVZkRqSkZZoVNaNp1ry1ctfDgp",
  "key3": "FfjZeRYLd1C9QhPmJ899eUNihYP5hU2NAvB5RVVbMtrPhuzf3tpa9UnoWs9T9VZzVaQ91cjaVPdCqt1JDmcUnTn",
  "key4": "5pKSkaKBnFzasUGaR5T8gb73porzBk2q4kJ6SyEuZYD8Pjxamd6idcV42Y1r3zcwsHnunjQ7Lr7Fmx82HiKi3tm9",
  "key5": "3s3L4fAj7feZ1ukinX4KBx72BSiQXqzMg5RF76V9gwtwrqKxvTP5zB4Ux9ooJigxQ2BBVynkcEK4vNGCkjAm9Xg7",
  "key6": "2k7QgrPc2BoTC84HhFd19YfDQKa3q8XQFSj9FsZMnAorp8DwQ8iaGQ738v17KVtdPhw24e3WqQS2dSK6NT4eTqYz",
  "key7": "2jp2cSLjG2Py92whvzjYWJqqFbmDzKxZgH3wZDaCeRxiDAbJERML5oZ143A8WX5kvj7Gkkyd3Vn6GEwAac5TyTUt",
  "key8": "2TdWKWyh4Tw1hEqsex95v1jSZ5i1sBEQYKfRGDWvrM3LSWQnk9xhiwfXEwnYemsrCLxZBpdcjJk9zqggHTWpEsPn",
  "key9": "5z7CXw7ZvigZCbhLapC1qRgHDg5mpi55gHooGdbX47hu3Y4DiYDJibWgjmQQx84YwX13DGQLnYEaVTkijLUCgHUr",
  "key10": "3DyUpvePzFyd2XJepzGYzm3s5XHWLjH5YsYSeWQeor7jfrvJedSj2zJK2u7wods8LnzkdYsJd6KvF8knjpigp2Bp",
  "key11": "2oCnPzgXKnForeTeJBzxhMuRAEFKuYeF6K73AtHtfX6aRHyhFbVude7Z9757dgJwkVAWMmKcJr76secQHr72f1nK",
  "key12": "5eCLJt6kQSy9SZaf5Wq79qNRwzhN4QhFAGwoP5TBBTSLmCsztJnM2KMq3jrEGndLfkJXEC42zkREWhDS7YoWEVxx",
  "key13": "5wResec8ErUd1GF8ukwi4FJRSsbNEk9ePCgnSFTn5qm1dKeDFoRXj2ZfEFb55e1Tk6PdZ6Vc87BV4rbwAE2wi9Ue",
  "key14": "2jS2hb31utsZBshLB3YyZahFX4DEzvwWekxELfcrMJLP3sDq8LLmoVKSbPhVXXj7cacUqRUfQer7mjpJwED4FWWs",
  "key15": "28dGd8QNmuD7hF2mcD4WZPuwFaFnUjdmEAjcmEeNLxgz41fJyqkPxkh3zj5VuWLDAjXYSFQVtvkWxtVa4y2pvYpt",
  "key16": "4YomVB223Va8UaqBvGWmbrCvtbUabi1fK5B55gj5aSUxq9M3yM2xbWYyovwkX5Z5zrSHYv7HgrNqJP41vvm3m4Dy",
  "key17": "4Snm7xXzdpNvKsaVtHxWAR5RNrGQg8z5wzZDTeErf8rm5tCQaB5f3m1enS73k5p9Wppr9crgZHsX1F5YUpe9Q7fr",
  "key18": "2HG8W59h98qTbjpQDJKtm8Ara3iFc9NSfUYCfNFg9Q7dL3qDiW7XH65ZvQw35ywYVsTD27VTa9CXF4VFoTY2z9D4",
  "key19": "KZUesUqGgwm5K9cMH69dt9gruKQQmZcDDSJSBnmNrVihqy1L17QvQwsdWnb8doe2k92bD5VqBogVTYKPWsNw3Cc",
  "key20": "5veLn5hMoepPZfrmWkVkjit45xXfVtUdeCjUSfvFaBj6LiNeVmYnwNzXpDeCh82NRTM6xDm9Srihrok7sfaJtkzY",
  "key21": "4gTFqo7ULvEd4f85KVxzmS2QBPED4SPpKVsAkBHzFkLmhDcF3hB2vLr1JyZDmQviPjuis19wd9VGBQ4jViLHiWH7",
  "key22": "b9YNSWQDutTm1ZunoCbC9Cct7QoWGBWGHbjszGevKNE8e6kA6deBN9oH3WsKw5td2TetxtPWXirZv4yn216TPez",
  "key23": "28BWP1J4BVhCHCrRSwX7BtHbutPCPT8W5xaqY1aVwoEJ7L8E8d6poTBr2kqcLTXhzzBVXnJa3cLo3yRYAtX8QkVb",
  "key24": "3X3WtUYxsdiqJdKyQGwtbpCoG6uqUghQVCEnGHR9pePfiPud8rMbQmz6m8qiCKmiiSbNHuyn24PTP7KtNRKsUzME",
  "key25": "2s8Tw5jSUzQR48gch2iBw4wR5noWANibfwpsVDqNPjKoizJsmLgmDiiuUv2XRjN7b1vMs2fwH76DiJ4JQayNS1qY",
  "key26": "5vyF9p5hRvYeKPXwuPEuX6dSmNoakBPNGiHgYBpfj7ABCAuKhzWrww65h8ao7ZBU7YGERVQYowCirbdJKSdD1iUN",
  "key27": "48WtH1qmAfQRxDCHzXRtWVwsBkR9bfU99iC3tNbN7w8ZbAfM5r9qA2h1Rwy1XTXJWkpTXwC4YVpJud4Sw2nnLiqi",
  "key28": "4NkA8v3VzwrU9rzkRquhVwdQcALjr1YUxkDSVUduHy9JDjHQvzPBkXKL4NSBCqVEstXKSGWvhHjnys9SAMNkvvKY",
  "key29": "34ChLkpiU1cwimetkxU9JRfbxNskdz6hfnJShdEC5c6B55Wb7XR9nGSRjE7toRYp91HjH98Mya3iUckR7WD3h6Yh",
  "key30": "dHxRJjVmahoCMFgryiXnzoaTKvaaunusW87DdTvAtqaQPJgfDbcufSMpVQbdYni6myASDb2w1KQsCx57P6AsJ5J",
  "key31": "3JuMJn31AdMy2LNa4gE2j48A3XMXEDc3JsuWAibzBwVWg7XajZq9ySSzSbpi5fwxMAv2wMiG6sFhwnnrvVNaJsVu"
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
