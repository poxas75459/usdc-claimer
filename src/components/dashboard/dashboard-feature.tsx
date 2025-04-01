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
    "3gchoV4yZqbaUC3DS6moaXczkjrp6Ez7CASqtfVMRVnRnvkoRu871AyxmLPjrHyTmps2k3ZVrgrCGcxGYDpCSNCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sREop4jLQX1joC3LHfrNiEFc26Ur3S5zRxpLyqyZ1y44xXrK1cCh6CmhcPQHqPAHfriB6vUS3pzyjLYLva9McXA",
  "key1": "485UwUqUDEYUowfrzN1CFvw4w7QWcCbyMzFzkusb1WahmLd1iok478xF2HXX6kgQNzSM7PcYsrf6rZmbqExCSCDi",
  "key2": "bqXZ8fyKn1EVipudZ8GqdmFPJhaRpuBMrASazTqiGKy2L2ur3Z2U5NvmLiqoLwJAY1PUCxWsJhJM3CXsEbhr4PR",
  "key3": "2vDvaYX6NAEbv7wFz6mrsfY1hXPBo5MDTEsjSxturTQr1bLgPgWoPPLJpYEJDPGskxvvnmNvtxKfGeB6Ax8HMKC8",
  "key4": "2r54BsQHR2yECTTzid1QngzcE7dBYE9Crzf2GtB1n6wtFtqnWJ8cMDC4HbsXTUcBGGfnmDt5LKHXXkEUairfEfez",
  "key5": "56tLQwoZKhRviGSRB4WVfYdt662efJWrt4JwnjTLsL1tZx2EAThnZ97x4dk5papfZmoNuqq7x1Zsm3LN18umRnhQ",
  "key6": "663GqvQt27RuhrLicmu2UAdJDAVhpsxbDxPg62hhpgWPE8R6LjYnynBttRP4Dt3XKrCr34ZJ7TjXY984YiZQByoD",
  "key7": "5ZJsMU7afqa5d94f15Yjdb9FMYEbaa7BBKNELC3gSWVZAPHtRDJ5veRypXN8z3MieSVfCq6LjbG7tdPduAJ29MB4",
  "key8": "44e2W8bwvupjDGad4csdALTtesvh4GGhCE5e13cfit5QYFxXq7qZhZrZJ8YK21cXTLQDbupkaxTjcecnQ8huVb5N",
  "key9": "62CzY1Wqi9gnS6yx8zzfSokk2eZhacwwhkdxLxLQnJhatBq9SX3nTnPZatM7h1aSeGCYppGuARxkQcyG2GozZA7a",
  "key10": "3bJ7hkjm7eKYzNCgM8b2jAeySqNiUSZarh99GAuZy9jYh9bYKLKQfrurLmj4ZtRdhHycW8kjx5dE1qzHEEn3BqM",
  "key11": "RdAMZKbdv4Zv1jqeZyiWKArFcLFuvgEXcHJzLFPqovPt14nqkLgtWxK4BeSBFpibYoczMA2knyXDxUgxHGCfptB",
  "key12": "45E7YrZ34MCwgqCZGH7rE5BxqUyYhdAW8BF7nQUSMCfjKvHjBxXCVkQLDMQ4sWzifii4Qxuok4wWarVM1UhdoeAQ",
  "key13": "G9ngy3r7FDb9dLNMXisLCVsDgxSdY4r3kcGEC95MdkxG9Jc2WkHuDmD4Zyd6yS2MEL42A3koUVcQ84UA8rbrA71",
  "key14": "L1sKHJ6fdphdmGwmyTPGHJcdzeuqhWtgry6iAzcX5dt6gNyKSpBsWRqZtERk5F7DXnwT6SRcnuhVm4qcQG1HujC",
  "key15": "xZQ6swMKBHpR6KfbtUUUKH3q6DHtnRSKcfnDaAxRqkvEqY38gALiXU4xKQRAU8BULyC9pyhnWYuri4iadMQo6Ae",
  "key16": "5MbRuGqXv45ivC6x7qGp4jyryPLHSMU8HjQWrJPV3umEKFt9MbWtwVdd3oBppxY4rhMe9dxshvH2hdWuo3bQtPCB",
  "key17": "3KGikerFFbKVRXJMvrJztmFQ4oXYz3tjYrCTSZJjG5jiaJiS1D1LokUPAFKDjSknzgm47YhQi97DNJtgGUJLKPmY",
  "key18": "5ayQkMeuxCuaTXuYc5NAtLW5cBcr2HjmLyqRDddzXCAcMJZqG93kKCT8yqir2fGQQ21oKUuxSeYPG83xZRGE7WaQ",
  "key19": "qq8p2sqXVAtr9pj7QDKCswfpq68BrQcR3DTY1CVTHGvSdsTsp4xoEpTw1CXRnnQ1Q95GdwpTMfKWEvLo5NKAkEZ",
  "key20": "2KSq81pB2thBDfAhepnNPU1tF279vSc4WMuPinYfeFLhcfcXFcwvLi3SRxAS4PyDeTLwtD5HQTsvFpNmCW1XbmpU",
  "key21": "43BfXfLengNg31dbHvxwCYRmyfbmBZ3v1icAzg6uNBSwf18RXVwWP9vJiecN8MNo6iQbhxX3BHKAze9W89bVwAeN",
  "key22": "4z8UqPH1RHLMK8gDGLFbHZL2B19FmfgvEordwiJ4NeTNWB7XEncK8gw9HDqJMSH8eY1jQgGLbAETXyMXNPfDe5mF",
  "key23": "3EGKzxGLpeZS7bpGhojmUt9saoZwc5SDAsBhJvurp89UTxSUSpRrtsgnhsgKmqEayk2YZsD2Q9SycTKMzt7HZc3r",
  "key24": "5eZrH1TGduVbQLMBW9pjkqSjzNW6Vpxr46NVg5D1adMZcbDuoq6h2fdf9zhZpauka7M3G3DLzNHCSXqQ5RmgCrsn",
  "key25": "2k64zMm3CJ4re4j271QCXnVDQbtiGyC5MroSfMX8zrjrCYJ9TENqSh4xwo9QX87zqe2vq7Rp9ACWTewKQwJGWWyC",
  "key26": "21ACTTEm4zeSHV1d2vHQkxKyYw3Y4dXvNNPpZhfTfnGTdoPa9uMXRFi2dmmopEaLmubYGh5ULDbFpptBzvgQnviB",
  "key27": "PkvVCnnjtvB5X57zr2GXUgx85s45zaQzx6A7HSonwHrs1DMS4UPp82986PJHPyg9J4TsEKPvK7XXjjGpAptWBwF",
  "key28": "5mLhfbmVaYTk4FhzJWTTKzaeo41frAbD2jBJni2CYTFe1PEB7nyZ4QyB6BYmGFqqaxmYtcnZwg1ybgkVZNDy6AWS",
  "key29": "4c6vF1PsrH2Dp9sniixHyygmJv2Q3BEbtbaGExohEBPWLtrLMXpFVJtryK19858ziBFAdcqJ9igj8ksPQPv3bk2B",
  "key30": "632cv8KXn1a2y2JVSLA9xrM25Cep6wfnN5tKkc8pLLjZvSFSkqgNprhGBnGe6YjLoM7zQitqCWzevEWThMZCjmWg",
  "key31": "3sy8Wi3e3uVe1j7RcYgpEJgvqxRofqhZZPAxXDixgfFaVXLafo4hPFc8ZGEAiDfbuXssYjd985s4RftvnWGpf8CC",
  "key32": "n9Fb6L7vumYUsC7tghM8t7o7PZp5Jh6GE1RHbC13vpKiR3kyVrmCAJN761zoH2mZCPYEQYcfCMC4egp9n7ZTdwR",
  "key33": "2R1qV82rcj8fipwAibnix7XvxHYKMcpw67nJcd1zBDzCgrBfR36iPCVVJbpWnczsg18WCxUhZTPYpZeun6jqEiDg"
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
