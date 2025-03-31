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
    "3s26TZ4x5f9c8YA729iM1f6kPuYTSmRBNxHMsmMmswX48qus8DY82TzcSAP6hi9UY6fxjr2LuyAfNXjrKpJM2iEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672i5TaGHsopzsSws56mJEpGx6rP11bQWkVL77zG3mYPUHc3iehpvM9ijNFPK9oDj9gbMaum2wyJ6fHt3Jh8nj2U",
  "key1": "BbQyrVJXJsGiS67zRcd3ZXxFtx6m76d5GbhEpu2r57bK9cYU6EzWW4FaRrDFRHhRBEYLcwmpHJh5GZAuf3SiAzK",
  "key2": "mfVJ8iktpmJujjjyexNvNPTLuJrKhVVuWYCJXczyMg48YGwiA4PzFLdpcfExFmp6jS7SS4XY5NbowFak1PRdUfk",
  "key3": "35TgeYJmXhb41rk7JkoWtd75mpjwtm3ucdL9nzPVFMdGkEXSN6MaERBHxkMan5s6XyHERuHSvHbC6eHE91C8r3z5",
  "key4": "4RxQwKfz4JLsEDszPAA9D5B4U5V9xLqLdSaM9qvwQozmsQthpjCympesf16NvnAAo7N8dFhCvqLb2dBU1HNcVdF7",
  "key5": "57VxfeSwtsF7a73YJeDHgFtA83mK9w7TSExPHjQdzCTjXCKKvWBapxf3icgJbf1P3yJG7WDUKCqUVJ37oVvm9yDg",
  "key6": "dZEMZwmcNMRfYAjf6pwG1hM3gAoo8AvoGtqFNJ3kxgrTGfeTgjPao92nd6VzfF2Bu18FhbtuzJr14zr93jP6QEg",
  "key7": "3mxLe7ycBRBjM55axaLvSER5mA2LE6t8KSYxvZBHdfHF2Ybb2veghFZbQrDED8MBMprozb6usqbUUGQekKLLnQb7",
  "key8": "3t1muamuHQyJudPiDkYdgFTXLNYJvKtemEHDFnqhftCxonPQ15hnEq9rYCrcFyc8hC1zU1dHry9NSghaSF35N692",
  "key9": "62gpQvSV7NHVrqMwgrckxRJtvXhDUWv9T11ipudy4rsfvBCSHWFcSxMH6ELTxfSmXCqbMxuZmDd5wGAfRtPFVqpe",
  "key10": "64A6YYc5UP7fv71NrMTeDCDQHN3AGQervQQkHU9MSY2MjfzKgNSVBJviAM37iLCjkpJDUs7PQf4ZBQxJkVRT4YZj",
  "key11": "5eakVGXVGwiQiZ8s1EdGTa4Yu6fguGbjpzFnjMdeNLmeSjmeM7yoKRzrF9DvyBFhTnhfRWgDjnzPXv5pLu1vCpo6",
  "key12": "4yZth8nkzxuuY1kKLnhKQxN5BBpatM2WohoDCaKK71vUkeQkqfYSVXxbJijK2dhoiBUMVeot8UAex6tJ56YXpetr",
  "key13": "4wfWqotc2WYzVN819LsGvh1SuSfpYSLmFbXmE14RAJZYQCt3gzX4PhJYiYVsbNxtXUuDgKnD9p71NdWpY5QQqSWW",
  "key14": "2KPLqRPKXqDZbJbj3zBPACzLHfzRpaLuZSYJsL7PotAdUXcHVMtPfFjo1KKao5v2Pg4uPPcUmk4cHQbrY1M2F4ob",
  "key15": "2VH8LJaCvWM3aV1FBm9kSa4u9HcuD9mwAYkqys8N1Qc95FSNZF1SACnVR1dh1rekBxDkmiH2c1VBJiFtPCPC2Jbi",
  "key16": "jXTqBReKe1RXopZnBmXiELRq2thB2Wjv3UFhsdw9G4nzh9mzADVmvoTp5My8YCynPxewU312geaHgVRUg79N1ew",
  "key17": "38hDxhbsnaQ2ExNC1b6eKt4BpTqvKME8G8oSXGgY9mFpZkiQ7hVFJ1Je59dBtELicStZSdAANnAjnfdrwQXoq931",
  "key18": "5DgJQ7cPZ2REb6SyUJ6mpaJm2sW3rz8Y7GZcQH7JFMaYYrvpGWEmoevEkoXKcMspCXjMTdujfou16YKbDorfQbEr",
  "key19": "2TdGb4S49gs6evVMagn7GHkWwdGqHdc9J8JXfSo5rBsM7F9SSiZvKStzoCtsSpM34Jai3o81q7erYTvQ5Yk45jPD",
  "key20": "4XkTWwRyYdMoZ4HEaAzjjVPDACesrLGgrDuckofVpKiPPbQyFcqqY869j3zZUQDvaDV7jtfdV7YTwtzkKmrriQeS",
  "key21": "XHRNQoFPApDtshdTdDUgy3tJ57xjsBaN4rXCuRTEPXMBHw53yyseCRw8QQnrwvfB5hfRoeMXi3xNU1myr86sRZD",
  "key22": "7SYvwcQ35E4EFToTeWbJjiLbmChxb77ftdLUNAuHeVNH2Sx51sZaGoscKbDtqUgmKHsG5fqAUf6ctGKPju5BhFd",
  "key23": "65MpkXJQ3X7eMfzS5m4EGreinyAHnfYrjkeTdc2BDQySz9qYzVbjvfzkxQNij1Qxm3iiXVzuBdbZ5bduJ5d1LVkt",
  "key24": "5PuNmAWGYDu94aR7PPhftKwSay9zu4D3brBPTAjsnNLcC83y2NRVABAbzmU7sNMYjV97Efk7F7RFg7CMqpp9mXur",
  "key25": "5UexqNT9zmxHXUh1yMNJkXoBHR4hoXXecoJEAJWygCEacrjTi5EMZL1gCJHgHy2gmefj22wmaWGAtioDPaZYj1Gi",
  "key26": "5MoqdfsnYEBn3BVDvttQUa3WYPSfh2x2ttuBrmtM8Uvw3hbu5xjG5H9Wi3E5SMHNh2gF37oEPBnXyYb4SaUcmhjn",
  "key27": "2gYDvmc14X838VYtniqzuqWZWd4M3tViK2Lse2sGkmohawt5KrPEU1TUrx9yxGLWeqiE22stwUpud1Ds2UKntmQz",
  "key28": "BZAJqBFNEaagGiJzcnrqbMQXXPBWy9TPugJ1h2bteJAd2toeuDUYzC7tyWkmB1rD63YT7PwM9iUY5eMZhZZSvEM",
  "key29": "3SJS1npGt8ECrLyVyM5oSAeeSuLSHPBuL7bcZ7JinN9z9TJUi2BnUkwxB5ahwkfX6CySFCtvez8qWLjW7M7tADS7",
  "key30": "29FMsfajiVZbhrZy542H1YQrXvNdeNJWVsjo7tUPW8S7GHmsp64cyU9fwXihoXvPNG5gqpjHqY5qcCoazC9Mr18V",
  "key31": "3VWUjiYXzStUWVNckNmqePkXY9hJ1hbcoYUcYMmP3heG99NXVxDewDoxfEyFEijgPgJ5G8cX2Th66GTJogik7DYy",
  "key32": "3VDGjyANZDkws5hi6kaGZoP5BcRjTUeKbybUGcaSDumZ1k8TeRZSrCQmxe2fBfX16g93QrXR7RnrnHSjXSx4fnGR",
  "key33": "5kCKBvBRjnQpYxouAGRBhdDksCz3R1tKrrYdoTT5V3KkbC3S6cbiJbpg22posmdaaouzoFXCnX5qpaiF9VEc1hds",
  "key34": "64GTwa3D76zkcanTRBzYuoq9ysrSP7CRPm4DPxCutMx8agK3SGEfK3fwr7MymZ9NgxhJ3ZzTE2vmjH311xbZAMkA",
  "key35": "2EDmpFJrxyyYpUvmeAZZMnjdQyUyo1zc9pGtvKSsYG3iy58jbajhUpawHKguUmaYjY2sTwnMRuUWtWTkVfA5DCyL",
  "key36": "7WUtqgi6Y2QBtSsu8eMJADwNoEnPa56iAHZ8KcAk3SXvbEWAr8i81nQxmJzigKkuNnqmxzg8WYdXJT6sHaV4E63",
  "key37": "3w4MxciNFEFHh1uaSDWuWG7qeWaLjSewjCqUfD5c3Y44sbGW2VmePxAvsJMo8F11qn11RLfvFFa1mhQv6xA8XSU",
  "key38": "2tpDSLS42yfm27qmxUWMzMt74xy6UCpjWJ5duAw79DMgUUAFSzY6xJo9HMVigau94GW9ztSP6XfFrafX6jGDPPG",
  "key39": "4XUPLcqr7fjkHggjNVS3v2WVyUpBNUdeRBzmSkLATmmxHii8cypwZU2DUPVUTZgfXQTy83jwcNGU4Xbuj9jEjvgq",
  "key40": "2uU7XP59axM45FkhdZPz8BaVTdN7zEp1XpMinCs4wWAdyJEXDdXb6oEKgGEKXovrcsmKYbjfPzpfFW81VbY6QCVG",
  "key41": "5VCx4TbM6h896XAKi4GpmpJr8DiQH3wYw4nZ9mqH1HmWXwVGt89yp1fJJGhSKBUJBL3nyWYdnADcPzau7tefUdGa",
  "key42": "2KVkRY6qshr1nas1CUHeoDg8xpTyKatu7FZQBnkW37LhxLxzszcKiYTP5EiWyyfaSZu2hFoXuwoeoiwhjagoTdqk",
  "key43": "5hNAtTJ8hKGaLAwh66SFgpFpjhiCFgtgvn47SCjHbodBpweDVogMnusc3MyfYiHjGGkKCapKupJKwsbkPkZHmu65",
  "key44": "4RBjdFDq5LPfntFWKJx5uD91va6whTNbtnAExPkCzNsoK1H1oAWoF2Hveicdb7iX89HWgC5QcY7BvRQKmwEmGQPD",
  "key45": "56WTiAZ6QhJ79LvXBejkxTSRuTzMMC27HJyfKXH4xdY3Rp1hLL4HQoXLgVfjyjsX1q3HfEqwMzjPMGzHr93DFfXv",
  "key46": "2NNic24yj3ChAUKSryRnHbAK4XoFeHEhT1JDSqyd2dhqdBhUqaNaxG9HGpMvi5kNZgzvAkbnZGUjxqyMow2PH9wu"
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
