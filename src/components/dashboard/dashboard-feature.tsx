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
    "2rJH87j2DiHVWye2exbz9kRqbaS32M7SE8HiHk9DAQD3Fjktk8XKfoyppUCEjs4nCWMyAJQfUtutqyi7jPFo798P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCVWcp8mVdgRussdNWn1hNizyPvVknYr5rGFb57mUydNMiqfhs5eYHFHVb2zqmzkGuPYXg5nvkkuoW2DNyF5PPS",
  "key1": "4dCc3BXBWU1htkdNYzEoBkosrEtvJjDVdSzEtQ5C8cUfZpE5VUKemJ2tfTLbqhuqCNhobyJkE6J9G1go8EUSAQFT",
  "key2": "5gxFaWBufomV2UFzHac8io31dGuKbE7RBmKzCW6nFQbkS98g4rJChLHkSGfzV9ovKE3oXeZ9PpKjMBCoHnjW7ooT",
  "key3": "2aJiBN8gatRWFw6F2VmuwqMcSvB8CkjRadxyr5Vf4q2Vt778nkxN1YMtTKyjySN8tMKdJemrBiG32ryug3H73o4N",
  "key4": "3cPzX8Jimikiax5bmQxzuyTfwgf6ZiqNtFmvLrpaeowR9cMu6yNwxqGmyEvboXAxARXfFMRMbHH3tn2RmXa6wXs9",
  "key5": "T7TVHqGEm5MoiTKaFQEP41mauJwEUnv9qPB6EVWyath7dJqdjXmDXwSU7KSLWsq7ntr1Cga8UAAqLctjpWaPV68",
  "key6": "5ZhVS2jmT2fVGnB5NJtYL2gnDnBZGnu37uGJCum7GhUUiwNgRKKECkWHrdiCjw3T9WmWD4ypCpb45zDZjtoDm8Gy",
  "key7": "3nRJNVMJjdJkMGgVc7wNjz9scUK7DjxhbMF2rLvU3mRJK4ZtkRPhFHBjhv61yenJzkzj1RTLq7twwdkTBedPez8a",
  "key8": "J53rf48ptQRjxj6ei7HZG281u8UykjCjW6fCSoYioghnyLA411Z3yyTYdNVvy2uYcDi5AvoYQLBtpSUReRFmqNb",
  "key9": "nYcFYFpq2eYGfeQQjJudv9yWuo98g8QgUpKic2gcBGBNb3AZuEmNwrG54pmXBddZnxvYTgwvBn6Xm9eoQAx6ZnD",
  "key10": "5u5CNzziiUTaNS6svkYj6RRAE1RC5itk9awPrZrucpbJbNwoo3ixZ97KSsPAwJLMbm1DHmV6HzEGuGL1cFDxZbqA",
  "key11": "qjQwBx3nBWAfDBefYQVDP6bFUwSVsceNiL9KV8cxH4ysMK8Uzj9wPBArS15HR9KdoJUUbyjDx45CN33N65PKDUW",
  "key12": "55CbEuVR5yK6m4ASPFUQTxCLAkFWtQUrCxhEiBN7KhPoFaPGnuTF46k6PB5gBsabRM94Eus1DKtJUXRU5TN2bMBw",
  "key13": "TU1Xgi8atTmuRHdXeRABMLVQ48akwjDFUXTFgTU9qjy7aN1dBaGqYCf79PFf5F85YLCHrmfqpEUGxWd3s3DviyZ",
  "key14": "5XVrBYPm7MbELX4w7VpDY9op96dbz89Hm42eZFiZy4NreSvSuXEkCoeFT9xUAGAGMKF57FpVccT9oBGjrkbZKeDa",
  "key15": "5A8oP3tyiAq25Jsu92mSsDCYGvybE9RdtboqYichaf6JfEk7vTmfmsnMuDtUssErEVq9q2VquLWR5PFaxe54R2qk",
  "key16": "3fiX4YJQhf6zMEv6evsCHDGomwUUJF33P6WuuuLSNnnU5urhvK6hLVL5vauaqbs4uqDyuHv5pnLnMMYFp6pXtxWV",
  "key17": "W92KFNScuw7Up98iL8ZkR5YgqyohF5vmWFBPXGWPfP1YC5J3EzWpYFKgk9YAQHAdpudo8LkCRQ9M8Ct6qLSwqMW",
  "key18": "4K7AGwgcZNETkf9UuChJsJXfiYhtt5RndJZZZQQSMQdtNLDBPUStyMdG5L5LN4PwU36L7QbdSih5jzbowKf1A1Bm",
  "key19": "43bkDbEqqYw2BbPpe3XY1xWPUi4r3pM6i3A411venY9WzfuWxmbWuvv9zqE4xnrNpqobwsM6Hwp6UmE5zoikd289",
  "key20": "3tag15wRYzBLBkxnhkWGiaYRcXNMvKDxhHQaoa6Gy8mvQL4RZ5d3hjA9fuvxNJ4uUqxees8s1BC96drgX5n9fDtL",
  "key21": "D7w9WxgbXqfppJek8W39GNiUEVaQAE7wYCQyWupLAJgLDfLYMMAyCyzbK2qEVYKpEP6JAJBzDRwgDbLoDBL4ZjJ",
  "key22": "46ZxPFKpxS1tXjxBU3WtpnRs5YpmNFZK5PnLoBm3aYx1h6iFw5onaBxysUJcGFHBXiZXgArbXF6JJu1vMHSBgTNP",
  "key23": "3KfqqoKoe4rzqQBrxFmmyUe1wZgkTcZp7Nc34TKfhYsugCfQ4nWa2egYZjkSiGyELCgtnn7DZjxQiJFVGAUWuVdb",
  "key24": "3UuR2SipmEg42LzoPcgBunBZNn4jaT54ZY5bjEJoxgn1i7KtwbZYWi1rLxZLEw7wtLdYpWutNG9xCNAviQ1gdkR6",
  "key25": "2MMbBRhK8hW5kodsFj3hAS3623q2X1EexUuJVHGsDicxWZHPXAFQ3NqBVQ66VZcoBxf3UX8k36S8D5hb3ANih1W3",
  "key26": "5PMdKPCAvEm56hbhiBHxyQgknjnnrBSrpSJVVLGM5ZfExDfdvnb7pu2QwE8pYiHoiW1L4L4GT7pEWnqtcu8kRMm3",
  "key27": "3WcpCJAnZkcpKoNv7WFebyGo2dELh3zqZdKjGBUo87VWVfckDm1zZXdmpJNJxDBZTRE6HCLQisdqpExiHBayE3w1",
  "key28": "67b5FdJ36FiKXd9ixqzvwyQD1yKEPwNuRkVSY2u9K3LbBSCBiiec2Dk3zVYG3w2yEwycb8V2vVA2smdh3sS7jfYF",
  "key29": "5gHbVPQ2dhNzZXyFhNWpfo43pm3kpC3at9RNYLw6dxtFLiAov8hTMGc6STNFqfDKUpLEQEs2PKXkk8yQtuesc8AG",
  "key30": "5oGE3vVCkWfaa9SEgRiz9pmuPctQso3hUnFwshKdjcvNL7xpBT2PfsMSfFW4vzsH5gtk1YdtCmFGcqqRwBc2knMu",
  "key31": "5jFDyQaJ6Rcz5zwqJKeqRoZetxb6cnKsNZSzeUtR9jUJzc5oBLegt29myQdkRAB3Hbve58BEQeKu9xGhmrXtc2bn",
  "key32": "4K87otD6gE9WFKMwKU5NcvbPMMcj6CkGqhjaKRu7L3qaRtuNi7k5gg3dkoX56xP1BTbhhExvppGr22xSCbMqU6ZQ",
  "key33": "YrUfAa5CDiWN7Px6U5WfXNevkD9ZPV3uRTbaYcsNGeivm2z9jDALjJbb9LDEVhzSZu1Vrcee1www1nZ3a5yQWQV",
  "key34": "259v5aVBE4zUqDLRKD7u6ctpb3ReRNadR56tapUnk58r4paVrYGBTnCs38qPUDDr5fNY5jZdxAW33URPbSiYDsca",
  "key35": "5T8qnPHzK67KXXiHtFFweCMcvPhDXPFLNo9QA78NdTKmDMMwyntSLHvoKWhN5xByqgVtctzAXPMpz3X6NM6kgkTY",
  "key36": "4muy6AtudY9jaJ4X5M1cMb3TbDVpcih3capS2Hpgx7tDpTvgdknYynaRCvojH1Hr8v3tnjhtLokxmLtS9SXRBYnQ",
  "key37": "5qTcY5pUTP6yfvAPHfT76x4sbB6cwTGaZnkNRnRkS9a2S5p7ov27R67aSK5TwBT5NeBBBSY5tDSABaJm8dMtaEwX"
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
