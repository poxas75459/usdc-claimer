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
    "3eBeZ7rw8W3K3uQ32ZZheRhwbjcR57Vramu6vuS7Emv1PrCXMHprHdt6jpRfsY37PyKZKCs4tbq31zaL3bJYrrBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTwcgoAmorXe6SgkFrVRVXLdxyTqcPd7jWwtkbsG1uQag6KxdjKToq8XiCY5J5xMgVPiZXR6wfrG4tybMhHLbcr",
  "key1": "64oNpKefer1bKAsiafu7ssjW8M3NAkJmJrfu3hupAf2NnqtTvvdS5uvRznt9cSzp1HmzzAW43ewVW7T5U6tx4Vrf",
  "key2": "3ztnPzvNeP1FhMtwvXmvksUC56WbaqgVrbz7Mqi3pHPvRbLbxB4ZxzSN7J9VUrk4m1U1sxiS9zHMcH1cx6TTtoKp",
  "key3": "4zVwtFHmciyVRMFWkWwTGfL8VaDpiGirtXEePPQr3RVhMv4QqH4fVidKrzZJ4vCys5N4eyuBzAPG2udi7Yt9VFfg",
  "key4": "58JQ58V2Sz5Tnu88CiLJk9SbfAt5zqAjvmLBmEWerRFhBWuJ3RZPFMuuVBKyPZroBKaStRS8BscWUxgJLUkB32R6",
  "key5": "5YrWjonQVvbLuvvZGZMb9sXUxMu2oftE3UwJbLWqHoBwEhQh9fRTNcJT9zjGnw7Q7QYqAcf5KC2LmQobDMYGgzin",
  "key6": "2YEHUsmRZtgMZE5qJdAGDKW5weMkABTCUoMoJmoRz2iZE2vvc1fstnJPJ8tGEgRfN1zcsEuZT9zWig5L6Jc7PUEV",
  "key7": "4x7j9zGV3aSXybi8F5c1osjY8bYDHwLBSRZt3tyDRsfpJ9GTc46uzAqXZ72pnfyLvZG1QTJiRgW98k9e3Jr6zqrq",
  "key8": "Rya1PRZYUyGNeWXARd1e5QYkcpJcX2MTU6nijEQaXAQ7hvg5frP8FVg1inpZsCUBsgek5yAKuh7zWSW6XzKd338",
  "key9": "2kwGJ6WYTAYRkNNnv9HpD2nrnmXVrs7GGHNkjZoUumuPm5F9tdNCFvBrk2Ts9rGf1gbBMgYhLLL842EVSxxXoLMq",
  "key10": "2BjDBqRPFECqQN6GjQLQ52uY5hfMP6qCVMeBpPd58BtGMxwboEr93LFgirzdxJKC6jW9uWC92CoZHLnhaSs5PtQt",
  "key11": "2THxYQKJcrnSEdMZJDzEzEhRPjy6v1GiPq24vrxyLndg27ni77o49dUen859rK1dQ96qH5eg3wdAsvqXRZvs2C3K",
  "key12": "3KWQ1p6rKkviK6EBXqhyyE2VEJRYKz6gqM1BYbhcfC3QCTJQ8W7WZ1rw1Sbh2KmFRewE58WjCVVcykJxE1kZ6iY7",
  "key13": "3BTuGxMVtHbGXMSmvbhDnjcf45thi1E9A2WMYegr6Xb7hPyD3L9f95abhdigtZJDWyqzfDZuk1PkXZa5ESQy7x46",
  "key14": "XvDpvPCcTQVw3sEquhEADEpPN9JWMMJF17KZA6TUHctsSfnVud3C7RR8nVUHDGsYzFkK3Ech7SCXCoeZtmvCw9F",
  "key15": "5d6jXDbxnEqPYW9F7Y4kVSoCGCMMDnRef81yost5muTp7DtSFR6gwNqVDpDTihVk51gYMZXwSmuSxQM8tEARdBeR",
  "key16": "a9AEJhXaDmGhrc3BWjT8kE3wtBKPbzxMDiWvT9DacuYwTQSMPNkjwsicmv784Sr6HwLhFCneB3RpYnDavCrUjSd",
  "key17": "3nu3zUGxfkH8vyosgYWTnTfhx9tSowUYJPE2Hrud6ZVvUsLT2rXLrMGTLxnAFcE2kpPtX62rJyqmouAypd9Jd2xB",
  "key18": "2y38WBkRrrPjdKvtBiCXbC1yWLvfKJe6rW8btEsQh7y43ectecrxJ9Fv2ZPomQARzbKL6v32okJzUTaC28h8Hq9c",
  "key19": "4ZMxPtt2j5WQbUcLS2Sy74vtHMdTg5p9K2hvCWWQMpkrSCKLCNtP1nyUCtZ4UgZcqyC24ebtqsGvYSUmCBTy2ewx",
  "key20": "4uSiYK49FUgFDXwC55nj4TLap5zoixfm3kS5AKZK6akNYFCsh8ypx7H3owawbhNCqwxqrzaHf9HweuqG21LU4GVL",
  "key21": "2HV2XmtBvXD1W3SoddDiJsCk9kRgrURjzCTdqi5CSRn6nHCkXgKukH5H2wCzLJiPP6tdTdLKRiSpYEZHvpPLtHo5",
  "key22": "qZSJgozkfrzYFmdzaiRU4AFUDzhp28qZnGiKxJFf21YCvAFyo6sH2XwbLuGbNMGCYAcQtmazMaNx6ZTntRTpafB",
  "key23": "5YApYs63c6dkxDspwGYdgv9rTerKqJYkoXXhSxf5VehgCpLqjyuQvaqpUb6ALKKZKeuyM6JpmU3T9JxHXAJQipfb",
  "key24": "2UmT4GmfAvwy7MJ3egfA4kqoev5uMRRvYEFj7BhxounH4iAYTuvrCqpZggU8wuQMpkiUm58tgqRFHBYSNdwm3eDw",
  "key25": "cqdYPW8xn3wmUyNPvphngBw3h5R9kMFozDoSA2ZNEpSf8kSPmkRHuneufqKSUAWZmmwUHLJyXbXsSLR9i5r3BQf",
  "key26": "aFzLhz3skfzCRASt2fZkAzBjGJbQDCkjBGD3QUzBNz9TJhGLFcR8Urf6D3qJWQGeVGFa2bg4qyk82MS1gdyj56j",
  "key27": "Vchmx2aWT2jGu6JSDXZZmvHoKfvDWoDPX4wwCSv9FGN7sQiqwTifZbLNLGudJCjvF9naNtRsWdFuQWhtDW8QgfF",
  "key28": "2Ey85TCxD6QoT1yQnXh1whg1p8mRxggDiMcCEfMCJLEtHi4DX9FDf2JEyXn3TsTKDyEwaVQ63DK62fC6XxEzzewB",
  "key29": "yh4WbVCi6631wH7ZTzBopKNSUYP1odJVEPxb1ECigcbXNbKA9NMaSRWCn1PBKFN6vjVrVXDUgHXDeuH9PjEX4tX",
  "key30": "dKQqkobsYPLdpsDZxGiYkwnGdangsj8R5p1FPqTMCFKyX5psP8SRbjZfwYuWGJZkv4oPgqU3mFLaBHQmg6kLoJt",
  "key31": "RxKmXnDvXSP1dc9CBGaENb7RbxUjDLPW4wPB1kZU34HhWN2UHfxTsXeBpUL4tPZ6scCqdiJyUZJis1wop4n5dHx",
  "key32": "61LxDoRvZFYkPJ1KXMaDcx9SzCLbhnpZ4m9g7qL3Sh3NW4oZtgz8D2nkqERJvwSK37nfBL9Z2eaTWmN3XdjxQBLm",
  "key33": "4afpbE7ir85WiKAyQeSpo1HYy6rVquQocWrWC1WEbFrsXm4PWZxG3ekztwh7J1aBR7jhLHH5f8nqFhCBMBVvjbdZ",
  "key34": "4BEbqmqwKQMN3LTSy1qMMzuvb455KUTs78RdsZBoBdmcxfXTYaqv2FdfVDDvfB6WfbbTbGGXggNPnd7tj76Vzh6E",
  "key35": "LkU7JoHY1CSDFiWyVcfftReryPQPE9sHDRHxX5KsV9GL3JrQc4qZVAor4pB5cmpy5A3tWQ3kx8xNCfJySDmmRTq",
  "key36": "38vZChFgx66NmBgaiJAybT8tJTdn44WyPTtkx7beyoSTKpCFhaKFnKRKDbReNTHpqSB1Fosy7S7VBvkdsF7xDaVY",
  "key37": "2SKdYiB5VesKLZmUe8KpqUYPnCuW1m82sWis9BkRFSMdhM3dhEwmjWniMwshXMihWFNZLwSEuZiirNFxguciv4ML",
  "key38": "5P1ejBDMAJ3Tw94beV1GPtL6Xtg2U3C6pZhJsLqB7U2LcrDeqsWkE9apG7mapJLm8yKb6E8HViwAtiLvBsx2wNbd",
  "key39": "621G29MpEvFULjBynaiJMx2AhuW5CmMYpSMcVkKo9AiXAgVwiCRgHDRfLG9MzfZQjw9KmfhKMTYyVBUsC5nZMZmK",
  "key40": "2ESvxBbpsf2V4zemtH53CM8wroNePJWrG3HzbaVv2NzU97CS5QK9zjZ2FB66Vkw9Zi3pS6NcbKVUSC1BjjPtsaWW"
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
