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
    "2WYEu4dLjjoHRRnVyapkkx1mU9NUt3HPr7XxL9tFUjQCjmnAvvo95gDjB5AF7CD2HRBXp3GHQNGq4d2K7ains9xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hk3fGY1eKe1TDtn8RwwSRd1EHbXNcK8reAJg786rAB8rQ72bWXVbap2RqYodndt1XxgAsvxR8DwadqGxf2h4Xng",
  "key1": "2mcVJr4S4GzZh3ntvQX4hTwipoirvPFkQ7Hv9PaQLw39xykTLS2rvHxgvkvjwJaBZAbC8Jf7hzrUNMqQxtaT7hkA",
  "key2": "2JGEEYfYf8wAAbVkCvxS5xZ4kw6fx8sUj17mjj86aTfAqsH3JK4BUhSni4kNCuuKqCdWVFdfcmsQYc127i9PupNs",
  "key3": "ZQomvXMKExQ55g4gvLBs7HNpLBcZRgk3nDb28Xt52op6LNYNB3rvpwKM1ZjNdUkJ22S6SCPFeCCkicxgWdGrUMd",
  "key4": "2r7mB8zMboz2Kx31AfjoWYVrzKhBsYgBDjVHg6uQNRkbmugPW4vrCcebU3xdj4NZckuJ5hcthcj51xgrpnanmByu",
  "key5": "5P9tzc6468unfeDs6ji8ttLAHMejKh9bNtaG75uSgvCGxuGFotuAbN4ZsM2UNJtAZ66rZfnTKmNvBDYmRQG96Kff",
  "key6": "SWshYqrPD86NePLGH4p6usaV7pXZKz3Bvn1wVW55eUJWsRtZ9pPdMEyrK4SXhbGbxHWJqvegiznMCeB9FBoTfHY",
  "key7": "bwnXLTUox5KoUQE7u6GR9VaMHXjVdJykKNY3YVCfnK4qx4Zzxf5djGHTyjjphQ4T9kZbXaT2vqSbYVPCTf7wYmN",
  "key8": "531wqBKhSR6mYSmfypqVGxaRxuyeYqQqiejTEHwxYZ6zGGSG8cs7Zt9JgFAtqJXnwGxFFNZQ81LFzuJry1XuaAvu",
  "key9": "2SE9PZTjouwK8ju6e9icGaLi5edMzcNSBkjrweZaKbkn3LK34sQBPjxFqCkHrrxo5QACx6WM185XsAvL9HJEytb",
  "key10": "2VTwsvWGGS6RKabNecgsR9hMtS1kpg5JNSyJjawv6ivdfV6xi66LW5y94TwNvw7hZPYutsYyLt1DeNfs3e3xBxH",
  "key11": "TdH7qTVuTokduyc9yhzbwAhhNrYiFDgkoqzoHd9duN7Bhb3ebWE93hY8TY73vZT1uWsfaJYbV9YQpGqK8tog144",
  "key12": "31pLCKcgQCQVZ5LFMskNujqGHP6NGgDuRivFXNQS85wKRBXHyFRo3N4vspf86SRxzSK8Jpbshe7vihYhG1tELgvF",
  "key13": "4Djw1TdZDZpBHrsBje9Hybv9j8Rs11Sw7riZ5Gzsy8ocyPYyTGmhKgXgVNXiELTGASkXTtNmZ4CgxKipgCt6y8AN",
  "key14": "wTMMb6M9jboBt6zWyKYQXJ59DfaTwkK8kRPcuKAk9V3xyWyv5CmY4dGLGgkndr2RzJwhb3Zm7vwM9NL6GpTuT2D",
  "key15": "4droHW3WZ5s7EMR2RUS8XudShPyyNZdtYGAt41KNxH3rDZjWU7zQCjUqamWvW1eNzt6btBMMDBhU3WtG7qfT1KB",
  "key16": "3vnEyPRauie2bpL3yLkLF3sKWc6SFUS9QtPGA1LYU1CtPu66KBhKxoF2L1n1i2ahsumNd6TgTvSmWxyZLe54gqUY",
  "key17": "3gAN4SwVAvzftSic5kL78tHbTzzUDj5w3Mu4qw17RADgVwbB6RXpFbBK7mRzbUH1KF9mZf5UkaFgzfVC7pFugJy9",
  "key18": "iBtjoS3EJAqwXiGkNnzzuaaxKf4hrudjJh6kjEx3rBR11jobfnJo8bbg1WhCcK7J4o4wQgHdeC3Gpn88d9LFk5w",
  "key19": "3v5i9FY8tat5oVzUHMNdBSwaYEcnhF5UvaWpFTojWYMr7ffps6qv74eYuLf9CBS2PFBaVfVTDHsFeCj2pSiM7ULn",
  "key20": "4WEQHzHk5YZa7BdCR7UsK5T75M7g1Pf9zmdin6RXdp4ta3zDsx7oV1eriSTMbHtJQ6tSoJzT4AKLvupsyhAXpHq1",
  "key21": "2KH5gC2M4oZZ6bCw88TiwQTnbwPMan77PkCYeX2JjkQApCYeDo3XasCnZqe2HcFSGJ2g5tZERodpqTKakFNRoNgW",
  "key22": "3kxKXcQ91zYwEZNYNxJEye7dJbaqNSqSvkbWaWdT8qLGDGJ4bpBx6dnvi3NHc65xLdfbgzixMeyRHBAjtnd8jcsy",
  "key23": "2RNSiwUBiZhow6TayU8DP4Xy225uUyy6cSrwGHdipoTWFLmyBx4E2yFjShD1k1rX4U2PbkDqsrwXASzGr67m6ABW",
  "key24": "pkbVvrSWrgNityLJmuekLeiMcbhAbNvtSVQr85jedFMHhB7iSEFAHAY2ZTApsW68z6dUtCt12Q7LAxUWn1UBtPR",
  "key25": "4TEB7WzRPnAnXRyzxhnPeZpJRL1TSiSX3ze2K1iN1bBRTE1wdLqVMtxca2pK9FxBXqg158Dcw3x7YVLiXmjFtF6B",
  "key26": "3iZYDfUoZEUfCPcEJdDupPbHznEFQzDnXhptQscdcAnbUD5MoybsqFkZV1GXCcKxT79VRA57J8Xq8ECeeXSMUgnV",
  "key27": "5biQ86rWJwVqUpffF9XMuStJ4BBJsdM2JrHPaH4xwYfBce5Krud5isNN19iM88h9ZC3mKF63nN6ZuuVFMXREcNEc",
  "key28": "5LEJp7fTHKFvvP6HFQBfs7Vk6C7b2AyFpqEPFkqU6TKcQcBTEdok9J5QNsFLF4jkQf4gq7bEdCkrdwViiNWrYGsD",
  "key29": "sLDKHdpGZvV6ivRGF74ySTN5S78t1WRodn2eF6yExmWJDe8B54Zi2WZ1zvRLC6A1n15c3dfBTwbyEf9EduMqunB",
  "key30": "3qg3UUBCp3mLtd2o5tcRHgbhijoGftmB3WrNBvXge99fbAcKaRFfVn4KfBExDjYACc5qj1FhHhQdyMUoCageLN1m"
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
