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
    "32oRZGH5N8cp1YWnK9kv5Qb6y33STN7AM8Sd5TUJkhCf3ppuHgWFXE68ZSFBmQvrwR3sR6BneiKCi2RyuaZ7VuoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybeSn4JWBWfDCEtXYmtRGipRSEMK641V3868yV5dukfaStDc28FnD4buqWfE7U539cdhvY9dwyWeLpnWfn3oPJr",
  "key1": "sKvfizVDCW8Xv7Fk7WokbH5vfs78UwR9bWDtnxLrduSHGGDb7iWdkRsfcaF7dXma2Wi1vvJ5opRsWQ1PA2hLmtC",
  "key2": "5ZApkePFHksPWzpySwoa7s31bJsSodAgGw2sSf35EaEkZsfQEmHpsdMjHCTfvZkiCgFosSSU9iCe6vKCM5PnoAdj",
  "key3": "41kTLLq5S3ehdsR38eU31DQfdpuELuBRJfDKFcjNG3irxVGS2NqkzJa5cZPttuByP6r9jJW1R9C5xQANucYaXXQe",
  "key4": "39HYxHxkYF27v1SFw1fN3iQSXzcBBMJmwHagwNiy63jhQUnNq2b3122ounUQGRZQBzF47mnMVqZeSDdxaaef58Ee",
  "key5": "jiCKXs1r2oNiKSyzSkjY6SM6o72rDGVPFHJTyR6zdBkkSU2QwtY4nzCqtCznhcjKsFvgomE4J7ohyF59Shtk8KV",
  "key6": "5u5fgRXV5pyPhgn3EDwym92fj2YgwhkZA2WdPkAC42vn3i5V7JUeEKmtG6L36VuorhcXWbx8asej7MYfNSfe8a7R",
  "key7": "3uiAZoKdupqSzTXVVXYQUG9gX2KMRR5DYL3R96WtAtDaf9VTsA27DxyxVzkfDbonuTGGrEmET7bFULPSQW3zFDf",
  "key8": "Ay1xVDNpT2qYJEkkHkF97NWQPwhc9QFME9QLSbHG1gQUmvbMLLEPT9WigVMhuuY1dEN8cDdf2XmVebToTkaCToe",
  "key9": "3n4pd7mW87ucLm2MSfj9C24Pw6PKhac8WCZkNCBaJjvmuGGvWCeAB925dPkhFMfyihHFZKMDhE7HUvjNM3GnaudL",
  "key10": "2x1C9Va93u8bjBa9jULUrT81zuQBYqRnptwh23Da24qHPpw7VDt5qSnvriHb2xgNWwH2XqAFvCsUm9v4yL2PjWGP",
  "key11": "2n24JnrzWi3QvoTEGUswG1e7ZPPkAMwQggLPibLGv7JVbYyKFCfj3EkehksEKWyKn2MCkYcYKWxnAdpzngcqDSsC",
  "key12": "3TUbNZ4DXH9j2fGyhEFJGXG5yF8xB1wYWrGBS5dMsoCD4uUBz4BeRuugerRaHi7JCcff3iRPzW7Lv3PhratqDh9i",
  "key13": "3emihW1R5xa28e2yPLws4PLEdfSeJ2GirWJ5vD16oGqGtX1toqW72Tq8eQzstp7re1QtwN46DLWt3WbCsRvxY4Hm",
  "key14": "5LRFLc8cR2QKytX8AEi1zef1g7NLQS8fdpcYKsPyKgwFbfiQjLshouAw8KxMkUk5xL9MSc5EwHB265BksNQ9PapX",
  "key15": "4vQNnQdngU2sSy8ibX3cyJz4ksQofPNGkwFS2GSj2LpbegkVj8sXydibEjfqRJhBvebSjzmrZqF2DvG6m8hEsCya",
  "key16": "2zRNcVm43ciTcgQR82x4ivgP7ECQJ8x82EfyvJPSMxBi4cRjfeiWji4UzWbtEHQu77Q6ZEFbPfkaS5WtEYv9T8gB",
  "key17": "4KjXz2NT7n1WbhiXxca76kGriovh5rrcZg817BVELyt4H3kbT2x9h3Kvsokrhssa6SHNxQy4mkEQYBtChJzYsa1r",
  "key18": "4VhjAxz86tSw4HP16vo3e9pwU8z29g6nSFzA4su8T9uTUbYcT7nonX8JYyNvWZv8GvweoR2Mbydt7S7aBHg11ZoC",
  "key19": "5z7MdekT7Une7xkKo999aV2PHNdw1HhyfYsZhW1q55vWrxjyjbCSpdGq2eK2Q3ehZwCp2RR8RTK9DFGeNpv4YAVg",
  "key20": "5MoiqMkEAoz2HLcyQ1SXEvzowjTiKVmCXi6R9Ws64m8gQ29L92xEbZRtZYJKRUvj39i5iG4GLR9RaGw3C4Bt2hnc",
  "key21": "5mLpX8E2N6HU6tjp2AE1gLCjEissH5QWtxWX8FivSsrZMDZ4o83Lk2327N9aExufZ2PncTuuPbp9D8KgM3TcVtfX",
  "key22": "TivsUFkXcXVXXaA8HZU9EUwNgpjZd1zvofVvmm2LRyjV9ArvbXjPaTTXTC77tFiVCQZrVcSBuh9cLWgv2smbCtQ",
  "key23": "S4zdazbvwDRVgFVHdNQKkBfyc4rqEPFANauJgTypntFcNxDdk75jC2FrraFd41zSizru426JkfNZGpy9GJM97uG",
  "key24": "4td3EA5vV735BshT4nMfVPnAvbasVA4Znbr7SGKigyG1aLYskymM7nftQee37EkShuAgwE3HrTDfnxYKpDwtfYci",
  "key25": "57m1nYvFTo9bqp4MzxgywRoErgG4fGmskeeDLebxpcUHMNuM1bu3kbQvGMHDRbiHLiMuTMkpXfZpbU9avu627hE8",
  "key26": "3CBS9cu6L1HHNRuyEvtk4edbYodVMtexN1GmrioubppnwA4MpXM6hU7dqaP2MTcQ65ffq4XBVEP3P2RQW4r8d3v5",
  "key27": "USzRgusRB4Uco3y2c13p9QkDrqDEZbHuVz32JFceXfrZ2JkBrZgQ7GesxJkKaLFBEFc5gjPrCqL48jA5rUrgj1L",
  "key28": "4aJJDVSyPRKrFR6wd1q84iJqvPiN77sU7URtwPqLxLNWC9FKyK6qf5YrxcmGg7PycwoppNisVkAMPNYKmv1C7TwY",
  "key29": "65fWXg3U84hqHahdD8jrvqJ29j79vm5pQZRWUUp5mwcBs99269gjaVS1iwjikMckK6KxYhdRyBK2wwq899UGWn5L",
  "key30": "4GkQDRrPdFAc8rdx5rbqqQxYu2c4Win3e9Ny7RJiVRJyrGfDSE54iH3C8qxVTKdWU8aQrcifpgiz9kEG4EWk66RU",
  "key31": "47F7okayfL5zmdoyrNgfAxA8fBbDXsDiLi72xheZSvLsAGdR8nqTbeiT3bnywL8R6bMpJbZsagkkt6dE8svtt3ws",
  "key32": "5EAZgwbX8j5cTU8zWc3JxLvWsuWuVZ4owpzHd2Zzw86FpPRCDde81zwk8MDKqiG8trgXj4UGhua2PqGSP4u9kCxn",
  "key33": "3PLTsqQiEiqdWVegi7cjXMz6KGgPoBAGEzH3AWyTbaYt7zW9R2aQH68zohHz4J1muC8N5KJr2rfQFcx1hkNEV6hN",
  "key34": "gB5QxCFToWyL6BX1fokT5Lf3YySWwrgNBNuPjdutxdUJ71q73G1jyLnqviqJv7omzSH6RVxAiBuwWtRCCaBZHAf"
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
