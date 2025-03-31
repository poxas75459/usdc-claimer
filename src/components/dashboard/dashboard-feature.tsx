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
    "qjMTv6UYvetCAfVpMn412xKY2SuayjZvLLHrhn59uJqgxkfGgV1yWDb7aVDRrkJEaQXTggBfJ97mA76wHgW7ZEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzYQ9c3kz6ARtzjFHTNHGyzN5phE2K3SAC2W7McnzDCJDK4vXXCYPHVjnte2Usaxtsj3ZRzsrT5MZqu97wR6oMQ",
  "key1": "3JyGbcUPyhkj6TZJGzqkr7QM1SLaTQJKmr4gGagRdVemRTrqhyBPp2ADvYGoNU47BYmtybcnJywLtqFT6RyThnWV",
  "key2": "3BxmN8LL6pJnoUDV3xJcN9DTikzLDZ8mZpGe3HftgPAByFygrg4mAUE811vosWrcGtRK1r53WE8GFNo5kUmXTYYH",
  "key3": "2HV7hj5szJ5zusWZSf1mxYJPUfVMcJo3QXjVsmxHUKBErB7frXAjL7NgnaQzSVnA3vZ5k5B4Ax8sm45tmqnDR7Jw",
  "key4": "51Xx3ehFF318Gjyqs8idTW4WyyUyNLGXC9iNbBVvZ1xsJdCJgsFzXirM22YebCdscKcC8Dt4U7bFDxBGCHwgrk9F",
  "key5": "5QRqGhUxvBBBpk4kmTKh3TgDteAiEdjRgfqaTShn6CS5ExQX8m3T3FsT9LA6bKjGcKMPmmgq6cqr3HJXR3h42dhC",
  "key6": "4vxxvkdZyKh9Yg881gViMvh68DHJkVWfZEjCsA5q2i8hZaa5DhPNhenqKFLMyUXfy5R8bapaJKEGEuQBM2B8nefu",
  "key7": "4o13V6nPAcKm7Y2UcfWJiU434xozHFFwWtRrALZD5XjQfrkNod2o4eJzffAM1FERhWQGKbp2qCxB5cKxsJeJMwDc",
  "key8": "2VowqioC1dQNgzddeptM3C4uBawFvZcfVhoh6dQmVqvRL5pX194nv4qKKVuJtVkwAKMfdwATr3DVXs9onb1vsyju",
  "key9": "3GdJD7hKbiLzn88cE5JMyW8ixghCgykn7m3GrsY9a8psEUeFzfSqhd3gVWEfF3gadmeNikZjjBuFWDzTFscU9WMc",
  "key10": "4Kd5V3Bd2pb4L7AmGJDDrWtdZ1dsdnL7t9oeaVRt8AF5KGNZCkVvacknWw4PcS5PGoxNuEBL7UA1gHVSB5r9kebq",
  "key11": "5HyoWdZpEErwSg1MkBANeLpFJ8BkkHyDsShrNQmpojYx8YLRjyNeTrKrtcnnRqLzR9spasQtWFBtTGV7Xj93vrAM",
  "key12": "3inFomES9quayDW8roAn3ofbiZzK7no8wmMA89vJPyPLBRkghJV6stwNS4WfUYYZcyyiWZJPppCGWPGS4AQENxuz",
  "key13": "4f3ekizDQNjtpsPRnNqYCsCd2iMRPh4BgktsPcisQtHYFKobwDp2nvrh48sSHzwcFE6Pp3f4zo18SYGUkUSeXPC5",
  "key14": "49WbT36YTiiYRZ7Nn8qYXgCPyiougmxWY8xCQxvnnSag66WWskRDoicqJx2j3WieRdjXE9r9p2ToZgVQt8jdi6m5",
  "key15": "ftgZcGyZcF7NPHYkPijJQcTtreDCYAdjJEqqJAZvWdMA2HrgmR574G2z7ZiTVzqUg3dDHb2u4Xi9Deb41NwyAXK",
  "key16": "4rpiCJdZA3wnurgx5sipGavJiNLKUmpw9DqmERgjsCwaf6gU8BmhHpDG5Lh5yFcjwHAw9Pm77QNAAzu17sVxc4ND",
  "key17": "5Ps4x6uFfLx3ARvSPW5LtpmRBNuGbUSkCbedyEb1pvKYSueNz3BbcBsEA6JABjh1gUQ4rp8SniLM8VSg6JZAajSr",
  "key18": "2ZivAt3Q1h9QBVLLAGzK9iBubwquWUvAtU7U8aYzxAbvk46mW6M4dFkdxPnVwAaZtD6LHLHVFhuet121sVyJ7mq2",
  "key19": "2RH44gtKLN2a98sDRFzbVgDhkn3Uey3dpebVbE6KgZCLXSuV59RZSNyFvHthsA3P7XF9rtNXFZFj5Zgr6NXmb59s",
  "key20": "5wWoR6bBFB13AryL4Y6wHj3BMFKCdEuP5jBP6kzxEAVruAPzWDmjoRy3rGGSq6Vww3c5tfv2dcXJu3PVeCmQstvm",
  "key21": "3u6KXi5xvK83jLTAMGWbEjT72epFEPBs8MSH258mxgghkmNof9PrJ8Kp5Qic225r8DBD6EAWW8NUjb4GA31bcDfV",
  "key22": "5Ev4D3rsTFGTpAZm7DXw7tVcB5Yt8F8LjFYNHN6zy6CiWjryNo9yjgwC5FaP33yRG14nyMHwjUGTKaiBR8W7qr6R",
  "key23": "5GcBR9c5zXyvtP2EYW363eMtiETPz2SYG1DKW37MVGTLPMZDBrQ1oF6n4rNCA2pTjCV464WbEN5rVLKz6KCp4nbr",
  "key24": "2yD5rrcWyKsFgBrXhVJASNSdJVDkUbMxkbhBTvBhxMrhyZyK77gH2riikA5TRDXH5DcBotkg3ewykm19Z1BmJQ9s",
  "key25": "3gqhHceSFRKdsa4Qjc2kxteAsFJsrPPCV8BP4D4ZJfymWhcQNMCWyzYmtxxLsZDGqrFk5ZzpaWC3Ds1yDP3HWGT4",
  "key26": "2kn3mJD6q54UBvrRQt8NL47FLNWzZfri8CTrCjwVHYWF4jKSHmviQKBPxytoHEJ2W43GtNFDSo3e6k6mRCARfhJA",
  "key27": "27F8DkJharV9DvjzmT3wJvtXXWidSGvT6Vz9aBdwni6QGTQY7ZJXZ7QnAkqaJqRuLYhDSRhB9wMrAAUKyxtJUw3J",
  "key28": "5vDhJT64nhNBryGPbhgMjacf69Pmyo12aEshon9YkmErfPpxDaXyM4Sj5d6uc5FbS26RTsP3RXB1D2cEyk84Cz27",
  "key29": "3Gsj5eq45tcCpzZ8TLHCSu9sStwqauZeUQVRcUnZRm5svSQzbUDCuYnz5ptxMHEQfNKCNCh6atatLJxAYVHngeQV",
  "key30": "4G8P7VaN3XDuziuZpArWNWXx3b7pg7BNPrN3ZYck8wQRjGthEA54VQT2ZdkTRDvTHFgaNA3qiXX9guqu3vYn2rob",
  "key31": "27ibJHjGRh8evx63iZotwBdbRtbSW8HssViP6x5dUtrNZGsXdF763VNUzXjCxxejLXUQMNDLg9pV3jPEAdZJgqc4",
  "key32": "3y3RXbQZ7ZCTGUEHVmuxFzkThWxNMPUfZh4mfmxAF3KZZm7iB6WcPSmiHaW8hBNjCT3nprjgDVTQYLwZBtqceYCn",
  "key33": "5F5deYcwXzkkxDhxZJo21Me3rahw27GPWkchWh2qtcbmPawqYjHrPPbokZeo65r1pGsd9GZzCbAVaefZbPbrrxCJ",
  "key34": "5BPr3L4NpMtSApaN2Cr9YjVTFAWHe3ThfnH7sn1Es97UxcZ7EB19wjH8v7FcLPLmcRX4MWLdU4LStcHKhcoSZNP5",
  "key35": "4MfGmRyHb1ZMdjDTKu391Bcn3Bp5LC9vGbtsWkWppKkiY3EEhR72RkE59Q9PotpFo9eTKvSkRbZwauXteVtuFU7K",
  "key36": "AXcSZqTTNaqPj2GPRFbWfL15bu3X42qwdUgyWkT1gNasipZu9Eyw8CVg5YucbDkskqTkZciCBgqiBt8MyQbLSmY",
  "key37": "3k5Z9eW9BATDc9bwBiyC1USx9mYFGzupQypyousNqgPKddrDqSqzAXhpG1h4j9Ghfhh1H9RoVwhx7RFxU3oZQPnQ",
  "key38": "5WwRQT9sAs9hJXYPLWHE4Fhx2X1LPmCvrNV5Mbd3toXa7wSmSYgNfE4ReQ3hJqCb9ythRiPVNQXzJ5wHtNxUoBRf"
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
