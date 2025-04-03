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
    "zejR2hDmcD42eXAxjqQFWSyxF9qBNsxrD5mRqCq8yfUAG4y7N9WWuzCHF2Y2LEQJndpScqqoyEDeX3xSUS1VJsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Kc3neD9uZZToqu7dqLfEkGe3beGXYJ3W6NvsbHkYGANiQjQykE4EFXPRev3y1QsJjuL6ZGsKQ8QFRQNAsyXWfL",
  "key1": "3mzrbTS5YmZpQtGJUG6nDrt4RQzbTq2qiiDDYCRq4kuqGLvcxsC8NRyNqipuuXZA78qUfMq3u36xhPqruLqVHoUY",
  "key2": "4Rp42SABEmYgyJCxy73v58F9biLstQWuzXD1GTqVqfkvQ43fB237XVMUYfmoKgLweTyvzjF7RQqdVzuDY4jXu6gY",
  "key3": "2ckeGHZXi8CMt7UVA9nHjW7jJbAM2mnegPhUn27YG9wmcjNjJHnwYgCdvh24Lk9WEpVEqMnXrfgGWLJgFuzWQWbv",
  "key4": "3rM8RZYTVHVo7viiCFm4A2nbA2nhZZG5R9AX5s17VisvGK9oqjPYzk7ZHeMQ2xESbMEeLAJ6a4sJMvYDRWCWH4SX",
  "key5": "3Y9BCwTyUS7jQU3EVoELZoP93SNjQUPpessnhF7M91sarP7tWrL3kNhjzKRQK93Jq1fPgxhDi4v6KaBbr3rW4edg",
  "key6": "38jZ5Tncfo2ey42HcpFrgZWWQ2n1AXtuuCPhR925fdWv8oJMms3neDnWbecpayTzDw5hFBhoT8gn1M761CEnsnmX",
  "key7": "M3r4xp5n3D8qkJGYArpdCthxorHTiqV2o2fvAxCdnS3vpd81p79RyZ3kr26WfUboXt5DFg4wjz8Lh3mGa5eFM5Y",
  "key8": "4W5GsVvJqVu7JeWySLdmZphUbUShyZVVnXab81J4XrcMS6RnPc1WLYb4AU6Rm9d8j7s36V78tSN9FbNRJgpUP2z3",
  "key9": "8CCLD1dLRPRTtYyytcqTmCS4C5Kvo6nxmi9uVspUNwv9Mjf6jFjSjfxzW39Azy834HzD7PQmQNo4QeyPrPA8GKy",
  "key10": "4N3EiJEinJ36UHJ7T6Y9w6Q5L69KBKjnsumn9BopEYQCmojCG1Qu4JhiSUDWVHwNkifpnt3aQeNKq1Zm7jvKMpLT",
  "key11": "3WRQgZvrq6y1STmSkhFBRYiwDbZLc1AV67W8gJoVkgR6FB3P8nJ3mzgqn4QPzNM9BFdPkaMUmWeHzkQjj91avxSq",
  "key12": "2WhUzioM8xdVjsKkMdihe4kGyuqmcxZfareGUg5RCZcqLnbUtPFSNMPdSnsDotParsYpiueBtKYzaVYiGoHU3YXX",
  "key13": "356TmLEBxvFBLdD2Dmmc9c6gi4d2ti2KzPTWc3uEUhmn45VbMacH4YCRqbCWwao4idiSmYvEozWEDknicUC2K2JN",
  "key14": "2ko4K5UQaLVpgjDiaPbaF3zoTjSPo2V3GXjb6uvzU1Fr5qwGfkAswbXF32HBixKHYT5xdmdJyvQEbCEVtJjCaaxp",
  "key15": "wpSo1o5An1TFx9vG8mmXdCAYtTtUWdN9Ey1aZAKh8Jf9VsuzELWNLy5jSvYwuHWJCXMTWdDcRph4LDgdRHTXsfP",
  "key16": "5jRXnBnNpRRkgPX3aJKdFKfPSbg9HFAntt2Dg23vz6MHpTWdWcgHeAQyxmaLw7CDbxFZvCJp1rJUsJFzwAJLhpXs",
  "key17": "3GuTyZ7cJFK7dc2WfHdMwgs5yHmGya7XLCxSJYcjdKvUaHERywaLrnZNECj145d9cipNUT3tHUtpHVLtA7XG5ssB",
  "key18": "671eDxkNoKrvng2ec85AF8E57iU725tPKD3A1knbVUJvbdPWtbZ7tMZEj6JsMxEK9unQfFtecc9tdxYCVWoBBtiR",
  "key19": "RdYw9N6tE1G4uTKFLuAFtbdpPksNmce6ksSMqe3AbX3fXhCQm3FWEcUk2B9jw9piErpxc6Fic8TSyUZZAckHQWC",
  "key20": "2mVmZcgn7zw67fKZF6XZnWkP96SRJYZWZYnGNdYfjLvoSq3qa2RLBnRy8VBMdVhMSQSyK3PX1uCjRgNAxLM2wEBz",
  "key21": "2P42rYLkFhHBCHFoRUgJV5bwsp36yXVGJqqcBpZVv8kkeSLLNW7tHZWpdcyc5vnCbQLCsbBT5M1jgQ5UjnUiSMgD",
  "key22": "3J61EuqeH2XkpG1r4Na9Qsj8k2Xsz5DivC3tGVMjKDfwRsgQB47ofcpWVT1wWifMdcFuXHwYkVTSuQy3icUjtiNR",
  "key23": "2LjqrYTyPhFTxNDcxTCrVUL6zVNF7tZq9U8iP17ee2dAJKn7yAsJtHtt5L1aXFXQAt3T2Lo9CWrckLiRgimHhjrw",
  "key24": "3bo5U3JWHYM9sh1d116wvGxe3NZv8bNFHpPudUDLK5jTwTDNto4EbUiZ5FdmPYKojTxQeWhMfGNxTUhzPfy8rntw",
  "key25": "3EHQQaHjmffeALA7jfoZRfajCZrWTA84Uq61hAgHGpkeUTsKHkM2rXq2MbuM3HMurjX86rRyLfpMVPCGdPpmAQDM",
  "key26": "33nE86ZRTJTxAzimiJzadDfknktPP2VMU3p3SHbfaXTQbARpMzhZZMMoPT2aDcqmLZ1Xukho7LBwCbYkoVLb5XHZ",
  "key27": "4GtXUsGGG1jicxf49NWdVamARh45mhacwirG7YN7KysG9Q4ca88SgED2T47LSnn3XsDfQtn7RSjgDRVSCaKU95P5",
  "key28": "28qquaXTTXk8t4sb5T8TZRf2FToyDyjaN9BPQWzahgcwQymKpEs79yeCMfZJSCT8SaySDfrEaLyAiUHYf1L5VsCL",
  "key29": "3ZmRkZ3JpsLMvVaRGdXHvYYJbAbUHAob3sQmRagMWeYH2aHvQhEE55etbgv9nnXL4qx9ZLPeoHWUihziqLpjPXDw",
  "key30": "5tvuP5tNuEe8JdYTFeW7mYKCSoADhAGJ7xQCaWEU7gvRMsrwSrdgz563u86Ujm8y54S4F9WcN9AkHAJd6uExz1em",
  "key31": "2exmQqCBjKtoyzpDrssWHnAk2mjWZnfht6Hn8LUGjHQztAej2HJ26ENsUZWEPfh7uP8J27d5fdWsFxScinTkq3R",
  "key32": "3oUFZYn37xhbBeURex1JThjX3P81NnvdYfjggMMW16QRvPS22U2pSpb9ht3RcraZm6if1qJ3tXeANr6VNgAPgoBv",
  "key33": "2k8AAwidTUKU7cbz53jP12kiR7xDfkmMM2ts347vvNVfviVTjh7CK44DTBD4feHvhLRbLTTf8vVEaxV9g31KEnQr",
  "key34": "2RkbKGgbeTS3vWwiJoLrkDnCoPnryW5r6R1M2TxW6rD47JurFU6mZsheM7p6qFMQMUQpWwJr2eMJuGhqFtej9K3y",
  "key35": "5u4zf8E9saxkhqGNBKcqbNhukKVuMAgdBMCpFPVjw4jZGo4sE36kMSc2ZC6MWUApKbvVDzjFJDBZb4Ew1daKdSuR",
  "key36": "547mH8oMxzWuJBDPJB75VpTXHQjyxmCHXbNVTtAd85AXuHWE8RUyanXUuUFo8X4ommg2zzeA7wwWe8oaBtFGB3G",
  "key37": "4Xbeq3hEBeHVxmUCKUWydwB3QcBMGXbQJj11AK3bg6f9dxTXWbsRdbJp2fRHkhAGr6iRH7FVemaJ8KMKAxXin1Nx",
  "key38": "2WDBSQU8eRqu6exexWxkiUC81bocH3BDnMLYYM6NZc1fQsz1pzWE8urGCptHR2prHXc5F51TejUb84qu1gGnP8MA"
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
