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
    "2UPNxAx6LcAJvDaQZ3fcZZyE8sP93AZaQXqDvfSnvRzE5ng1JZKTpa9XXw3yxS55VivhthtoddBGfr23ve3bhs3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXsBQUgYUJs9Lz1EtGTNZKbxBDNAPxbKoZj1PiJ7yrJgnHwRNYUpFax2SbdX661iT6PSRD1wVyRb1Jhe3K24Y4g",
  "key1": "5cKEjn7itn4iumDALpdftYFMGTc1K361cNThWyceVGuDp3iTTBiJ7niP5pBs4gcgT7P7K3mAoG83QQ5LewYh54yy",
  "key2": "4ZeJiGrDKFwLfxUa7nJZV46ydqdvr176fhRcyRUKfqr9LhxGzH1WJqs8AnrTdBp39zYMS7MjjPiAMr67gEMAnT82",
  "key3": "2Giw9aD3q1JPj5B9DJ78oBN3ojK3NxFL3ckz8NqtcBeV4T46hyonnLSg4RfTRcXW2mfBkSJd9BkMRtgvk2YNntDi",
  "key4": "2ga8CpmTwTS4WMd8Hjet33QTCLANVxPb3htGwT8CAjzeBYMr5MVe4RBktpySCx3izQrxD2MZMcdxeqFP2quFeg8D",
  "key5": "4TFmjgHbFBHP8L6nieMZJPCCRUckQjVzmSp9a9MiBSQankDhekCEsW3vQWQfpw3sSCXYucAVegYFXFEu2qhspmJy",
  "key6": "2Q2adajEhAJQpDiUJSVyqgc9VagSfuRCmZKX4cidmwobujwvSmGEKeqeAd9AbDDTmBuZUQoNxpPJdQd14w6A9CXr",
  "key7": "2bozcfjbkSL55QKSWnSecAiotE6m18xy1t5vdVpnTYF3Tz6NCZLt16mRzbcbcZhcDa18Xw9MbUpvqRPkWqb6wQF3",
  "key8": "5Kg8ppMRMMqMU7cpTzEBfAwhY3WNYV41KxjD3U79Q2f9G5wBWetNLQvHdZePHra4bC2hJRzhckDBkqZmCnszHBza",
  "key9": "64y5cXY2UQ8dftqCPyab9rFHmxgE3Cnu3pmoWAVXiWJ8dZ3ehL8h4JEhfiCZr8ekEnMtoK7ENXuJViuEDpZt8kT8",
  "key10": "Xk6XK1JgNQL9LeGYJHKex1Mm9skJySvEcNqyL6LNxqx2e3UN82CrJ5uPFwfuBxZqavDdehDHY8q9Ww3P9DAuMZU",
  "key11": "5LigsK9hGx8j1WJMmnkbhUtGH8rSHxyPDdrrH48j2u7RCWCPSfh4VLCWJTRHrfF42rtA8s938byF3Gx5ATdtGnfL",
  "key12": "n8u9wLvoPSZaGJu5j2Sfpch15aqdwgb8xp36V8Pd8p1mpT2HZcdsXvBwewaU8TNNtrk1UUBpFVZiMTMJK1fjcNC",
  "key13": "2TA5MaSaDaHKQfo6J6dEm9hkS2n7uQU4HRAS2V4iFL7Hj5uLN226mYr8boBSa1iihyy8fYUgneH6aTLRsXmm1zFL",
  "key14": "2sWhJdLgxcK5pGKrsUbBQEWHsNSZUmvbqSwRYt162JzoegASKDX9tpLXdJziGEnUALCHQ5ftpJAYS34tWhjFuS3U",
  "key15": "3whgMXZpukgr6fkoKU34hiTaMqH9ygcRP83bMMFDomJPeabrMjaN66ajTZg67TtJYiAuUNyKuxnbR94vKxY1iGLK",
  "key16": "3RujLDWfxYGKs8mUTEqg9gYfALqs8vDXdNqhBUpM4q2hUez1QnWHHhAsDgUFAkA8fYPYo29EyeQJ6tpiq3mFKyKX",
  "key17": "5gu4rAA6En91nJhFJ1zQsgwEuckcMNjQVWieeMAFBsFkU2LQkSZ3hsWBm1PKdaBq7DofLw7gKd35HHN6GhPS1EXD",
  "key18": "3XDK1nojNLxQ3VxJK8MJQuxtyXXZiyyFv558m9AqFmaFGshHtFXh482vRB6fBaEGUmnYYmCufBSwH5JgjHdX1SRA",
  "key19": "3UBd9VPtNQfheJyCMiaRDQ437gpzXRRFoPgkFRPRh3YuFST2TMpDpDgTYFmGU18WpAe51BVmuBn2cWRhwHmx5jNK",
  "key20": "2qRAAxNRuzYRcSq7mA5XgFWEteNHVdLwcksXvEvUCNcTyUz5GRWEWv7pGhCzFVaA3821Fbp4z9KpP2EPeAnBMsRy",
  "key21": "29A1GjZqRhRAgftsEABQg7kXMtYnX7pMKpDuY1vvt7LgioyYoivxPwAwd3W8KsFUEEGswDSBNgeLCvmpKKarm6dN",
  "key22": "CVMtJ6yh94UnXBWinB1hdiFiaEeo76JEENeK3b8hpB7sSFHpsGqq3PzrzswbUQzq2XKhKrkWRs2hYS1arrEtMti",
  "key23": "5gd7DMvVeJ13LBHxXuUTAyrsTLnXABHKLckYEtjottRSfnbdcKDSoyjztfdnWVYXySyq9M1SaJtK7YUL354BS2fm",
  "key24": "4AjdFLGr1CiTeACAj8Q9c1gvQpFDtbiFNsPAwqyasTs8mvEWyFJXnW5JFi1da2W1enAv16bBVXh5Y7pz1diPpdA5",
  "key25": "4eG1ZjjWztRu6nmyTnQqgHsAa84yAw9ZiH5gvBtXbsoJxHyk3TmTqgx2s1X2eyszyjRxWQdtPH2j8ZGnYCYXSa5b",
  "key26": "5xJNAsKCkkY7uu17poQLS53KQB1GqL1LRwsvnDshn7QBxsqYHA7mqi2QY7YqT31ZVZwpbRxaE8YDtyHx6kWzSa9m",
  "key27": "4RgATmJyAeFKrCrT9CSuskVe2Qj1S5W9sexHnfCee5hWkd8X8Ncb7txuKm25rNVELEAz2DhGdjUo5ngxhL2JKP18",
  "key28": "3F5p1X4mJT3SCuCmNGkVyEh22rdRT5CaNL1H7Ji5PaibjTEHK3YVNaLHjA2VS49ZHiVzFNZ5439vvBto6KW7vkqR",
  "key29": "4rja88r7417GKz1y9orsfTgAJwAPiAbkb6ogiUy3QEYpc9wRDi3XZeNJrmprCh9GFbd2zqD4mggyCLmRqAfMkWHW",
  "key30": "24S4C9XzxMuotnKbCArjFa3vJgxh8CB5JMAUrqRHH3Zr3WDfG3FAgoDVnjkawZEKT3cprFYfgVSmQN2XxUWJbsmd",
  "key31": "4VdNoxubJSe9GtQJ3E2mzoHqTMXMrxxcfHJBqmamuMf4AS5TjSU9ULPkfQuNi1dnESpNW5dKZ6oDjK7YjveTvKPg",
  "key32": "4iZppDeME14tpJVUMzxPXXNAHWNiE6TX2At7MgCN6SSYquYGnZiCMSThzRPgDVjrabnXRf3kmGLKUNAZhcd1eCAE",
  "key33": "3uAh8RB6BoC8Vb4E1Yy5d8ak96Vqu7sEiifwWpTNYVA43rUTSYK4aJ3ERGdQBDEyvJZeqnWkAyphGkf3uUaZkbWJ",
  "key34": "6ENFXF784pnkKgqPQA2M8KEKYWmXkZnUhcapDWPrJ482pRXGwzW3rZuZoATwB1iruGxexDwGTLyuinpggaayLPo",
  "key35": "9wE5Rz1WbxTkg6SoMRgmxufCghaNdeniSAjufcLnZU1aTFQwtro1vSssFdwy3M7gKmPtXLcqfrAjNiSd3pmRA69",
  "key36": "5jHKvTH7fTC5atYcqwtSAw2ggwsym4JYyueTveoHR2FSdNvfdyGE5LJTCsgfpBHRNrQcNq9mHgjsCuYqSqLSa6Qh",
  "key37": "4iVtZ5uNq4raWn9WtwLSj5NNNrACJQTZtEz6vhuD7TBsVGzeedPrvjjQdPZmJW7xzSpvhUhq69qWXqZnFCC17pNa"
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
