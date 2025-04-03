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
    "4Gq6jMjvt47yHY1aKXTucxF9hDaxHURv2mz9jnxG3SoMfeor5jmHochd1W7UXtmjyWmgrFTLU3SCMjxXcbGR94wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oruAja7KV6QP9ryvDE9N73p6aStEL6ZVRdFHrN8YyctDTgWbkmoVSEUNaTH9UJJ7Vn43wVTGTwWTK5R6C72bVuw",
  "key1": "4b6So1WWsmQgUZZRWFHarEjqD8eVESB2EfhnfLZQqGzpoaj7yKkH5UeojmAagiXFURGnVFWjBJet1ig4GWihq3nG",
  "key2": "3SuBRYo6ifxfbTN9wg9RdVKErBiJpFPGKDR36kbGksfFrQSmLDdvgXVTXNpUo8es1q3z1Q4LMLdJ6CHdUSaTp3sR",
  "key3": "5NzUR2Gh9jGKHoswhNQWTZbdNHkqVdkMmg1sinSibKRVKhEvmWNixXyY3MLE1XnLFqtEWqqQeARSAvR8Z3n9qEPY",
  "key4": "4d7aJ1CzCTCUfVHn3RLZLSYQtBobwyQSe4rpf1JsySmEvZzeCGCGHEFBUECUSn6zWYsFQb8uxpDENHdABTpaZAGT",
  "key5": "3pdjjzM5hMU3rKKwUrKjGHk3ANfJShv5yfF1aybnFs3vvYt4H96nCnwh7Gy7zWsEWEeSToqdaLPTBNSJW5WU7BXe",
  "key6": "2nv5rBBzaPeJ4ZQLkeWPZHmKHYwfBSPk7UsVLTSvS8Eqdu4Kc4FWSZxVmP6pT4ezn9ok2nVcTdG1EsutLceaQNyV",
  "key7": "3CYZaiijBdAV95NfmVjo3jy5XYt4kaDgA4pQfg6wYWrgLg7Nhn94a26cUq5Prio7hrTwYVADw9Rtqd7et63EWtXE",
  "key8": "z9cgwCRscF9T4e7SChxuhB7PTuyfDRmhZ2nHeYsNyu6zap1iqhfAm3WaBykWRyiWQ2j85GX5ovJFF5H9Dx4UCPe",
  "key9": "53rFA7gm3EoKiWWWCbjQRCcSmTGKpfAhxieZaf6reNmC6ZEQbcWDqrqqaULRWey1LzwokzhQsXe7SDkefj6JJWsS",
  "key10": "3RHHXbuFPMtiS9kFfWddExCteCPdwhp32m17K2C2SiSzZy7T325MPbetEREZymhLwgAm6j6sMiwzw5kH8oo53HP8",
  "key11": "NxNZB4eKpV3nSEmkeQvZx5eVwSEvChy6pqup2n4Kp8eu2zgCQ2TU97HWExZDRmMsQ2b9z7t78mKz2ebyFMZdTUA",
  "key12": "64fZRAUvthpavkbGUsN92gtr58hDtSM7CwLCVytc51svWwk1JV6NajygyGXYr6Hea4ujB2XjVTyLagAQ4deUhSC7",
  "key13": "21jiZfMghfQ4AMAeWUwnpn82KrJSxnnN4LMg8fdsDReEQJCen2qGoZ12R8QCWYAuN2KStRTLsDYGd33gKrEHZtyo",
  "key14": "5yvPxN2mtGt6nGoJAhHSKvngrqUUocfEM1v6mbcKxuA5pKv9bYC5h4DBpBF4aVXiF15E2fHK1TALrurNaTeBcNsA",
  "key15": "3Wy2GH6WmMW4NfBJhgv1LqCe9CM2SeTqocEXKf6yNZEKVPvP3PwaxiuMeBECLf9WdDdMKWsCCT5AQrQUP16t6hB5",
  "key16": "3cMe9bUT3TVcdkamBiMvsQFMCPxXB3WF8zPdLvnheaNXq4tY8n4nurAPqUVg7mQBpU7YiwySnVkp1C656zaTFJbL",
  "key17": "5Z3dRZfi7iS19qeQg2NGdFKhTQu64Px4594YZuaGsovQYnvmvipv3KA8mC6GgFmhyYn6MaLR97eqVmcXsqXazSK9",
  "key18": "2i5QaxY2mRPW9qadqJ9Eq4w3Ti9xV4maPfbqMJ7qui8tRLTp6ZuPKNwBqjrdjnELnbJreDwiUhyEftXrZwz7okLD",
  "key19": "5ojidf2nYa2bvkeswaFhvk6NonedYTCuUBXwBwatYdkhi7eDEVv6DViHUsoDGwZarovWpdbKFXWi9Jo6yccdAepg",
  "key20": "47MUaNsAunc6NbSpjnro955jo66msHLZzANqChPXhxgyCXvBJFFJVQEG9PwA6eWD5jgQPQN5FQkTAiUnY5ZLWoe9",
  "key21": "J4nVFVRWgvEo24cnewo8e8bjMeeKZEhN7ZdMpSneWpZiujRAqNMHFVf6ExtfU7RDDiRSnZMxUQet41VXCWXuCXy",
  "key22": "4aKzmp7jio4C5sqfh7GyPuzvDBJ7JxHZDeM1DEFdkKgUSBRFHGG3kYwQbgohPmBRT8yJWYeVWtr6yPSeCYwDcAzG",
  "key23": "4faWp322bgXvzEVW4sM4aVfete5ASmbXxZagpH5sqtmF2gAfsGgKEiGq1VY7UNUY5gqZTZoJDWAjBNisxUCHQ3SA",
  "key24": "GJEp1uAG1B4bXFbq7RqfRBgFyaBXM6LhqQeXpu4mhjJvQujH8xtkvnGq3KWKL2HLEaFZPZm7bbDk3pb5Kspuvnn",
  "key25": "3hWe9gS2RSjVayk8Lz2aA6PLjMMWWPffJfoLNNr6PQ796MQunsvAvjMLwB8kjXgp3VjbDLUKvujmWs27rXZViRQF",
  "key26": "4phhiG6KkYQmX98UGsJJ3MHQmUdpRxQuqR54EHT873iknVyVXpPKNHSYM22QMr8a9eaMq6tMJ97TMSJi7YLmJSSn",
  "key27": "2tVJ3rd2vSSU9Sbhb7tsC1CySdkgbD8rFmm2RsHfQrBgSeHrVZcC5Gi84RngNosARZKxfQeG3VECaxoxDnUHKp1G",
  "key28": "4XsXSz2rWPJ3PNCipsUhQprs7BvqV8QethJiYb4fBz118MWZVuj2aYTfrVvEFhXjNtstqBHV4JQbXTHTApyVmMJv",
  "key29": "8E6Qwv6Q9VxgirRBCzj4Lr7jFmgucoML9NoTUKWC7VJeJ3VNH6fAb7iyTviTLvhcbK1pUcF7QUVa7jNNU4e49y9",
  "key30": "35WHjxt8mcRbFaG3Bb7dKQ2kN7u9GBbJs7cYL17oUDiomc7w6hXTTdu19FPvAq33zuVPbzWmAPoyYcqnbr17Emfw",
  "key31": "2wp8fMCNuxtvHTqxiJYXtaDrhG21mtawutxx1RpFTXT2ADxkBHdNiWFUb6wydAspdMfRVWfcBR5WLRBrmCFKzFcd",
  "key32": "5pBq8ip5CyV7ksZBqgj6LbmQYwLDWPyAJYoZgUS9vVqugadKaQXHGY8p4ZD1NZNCck2Ubn4mSZQLX8h4M4RVEivf",
  "key33": "5jKDsVCzdvitTyNFp2B7ZgkvK5sdLaupZr8CMHZrTghuySYFNq22sx28f4SNBhFM48ucP8Kpjsfu6D9JUHADkry4",
  "key34": "4BZ1H9a3qVaiNggr5vmS2A89GArbvL74auApsgRw8BwSvv5kQ8Hq3iWAJu6PYpDRcDjW8czUaBMXZ12vPwkMK8Sq",
  "key35": "3uUp5mjZNov5fD6APSBXsrPoAtMDySxo4UPva8gHCUgM41L9opCQB628k2SLuyoRdANryugTEvyAYjVAhNCJpZ5u",
  "key36": "5GA6bdEJixHPsgmjPX6vjG5d6h3mvdPaG4eKk5MyZyHJRad4c62J48AoVPninYqigbZHNctBKxxzoxibJiP5jmvj",
  "key37": "hwMs1bvXLCkWvGBm9CbmeeHnwDhKGPP7Gp9ax4WRs79o2fcrovaqbXF35BqU4ZFfo5xu71qXXTExkQvyu2QD1AL",
  "key38": "cLdpAEbYQuQC1wnqG6gYh1YuN5Ej2LnLnMJoWPQTcFVyKwWLyiqed7SUHWwRGbuQPqBJBFF3QW5Kug3p7V9YZor",
  "key39": "5MuxP3QZhoWWynQQeE25mSxgyeHuHzXEtFd29qMKs6VrDuFVTi4DaxDEBNLqGoY3L1ZPEPfp8KTy4xBKwqvvkGPP",
  "key40": "3uLxJUFTZKQD37G73Ziztdo7WUgLTEe9ni3wqwpRDWaA8gFmdv1bVPqiSwBuLH9d8o9qktZY4JKTo8mDdy1KUZBw",
  "key41": "2XWG6riFaAMTu1yHGwcW5nXG25hFETFhPJ4TyEd1YnvmzWq1B1cpK1b8EsGyk38ugz28M8qJ5NomexfK8b83EqGr",
  "key42": "6PWFcSpppH8Ze6TMdJnrHpJNEqLT8kxoST3BczZqVuhVpHjqm4SaXmLFNCk6Qd5cLptdhcNk2YjWs8tQDkzL7sV",
  "key43": "2htrAsgySPKSQYdDZxgyh4t3Xvkag2dgjXxQr4gqzvwCNeuuBzR2PFTA8N8mFguxtBWfSmC7NSHhW9ksQGnxjaAp"
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
