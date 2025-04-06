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
    "4ztfQ7vZfgkSf615xVzu2gMvwi1wopyt8Eopma5dpm1m4Jk1mZ1DrYQwU7hp3zcen5TMtJLXBb34F1V8XnWZQJma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KStBzrhwZAXfT2J9hWbziaD9mm4uXZYCWHngcnLnuaAF3g6abDZAyVhmhyjcAnsVAceGfuTPpzSPwD2JZPBErBL",
  "key1": "2NTgHkA3EPP5x3PuU6dG6hUKKXcu4HVPmYLA3NCuTnytYLnTPjhWhp1Bq9UTR32s14RkogxqX4cbFVhyRTmxJ7nj",
  "key2": "gYaCYp821WxcDBpXnF4S1ieoYsVG51fHE2zrxifUSPYiHWfKVHyw9As9nbhjLg19oKzDhr1uAyVhkngYQzwuTnp",
  "key3": "3pd3EQtBYEoKiiv7UWy82D7CPtrRdnQecnY3yM5EKPAAbzZ5TyM1prEGCuYRqWF921Wet73cjcjVRG9WyuWYDn7H",
  "key4": "2EzivBn2eMe3rjsGrNa7GnKKiYjggwf7deNFMmwSVqE6B5KCoSTCkSPrgXXJMKA5NtxV1K84vyXDsBNrMRgScMdZ",
  "key5": "5s6eZKAjfvrox1kRtgtFyuLvi4cgLbvqMQsomCWdiHQbWpKWAZnJAySc9giW6rG5rsoxXLyT81KRbEpAzQMD662P",
  "key6": "4TP3TVGRyedJpPaNDygNyuvDeG7QKaaAw5fZbS2KzUuixdKGg6CUzWMk9nWyFAZ7EVvroSvJ1RJzCjsF4uvanHEZ",
  "key7": "MZEE2XEaoA9gut6e7zAVsx75LKQ81stHdHEtVuDm1LUs5Py8JFkwzU9Ci1V1tSqdhsxA1nvAcRayivmbrPvHp4o",
  "key8": "46J4StzLxr5EiCrUSfmhPZr1vJrwegtR1osYkaG73caKeSnapXD7M3ZnirrVSXxDzBJKYCt1pNP8gtvf1qydwH78",
  "key9": "2BTp18SDEZN9ZH6yNKo8s7S14YWGsJfLzFMJ3xhDpqMzpvVArV5AgQBP42XnMrnF47KcChjUr12PtLbiHRQyKNxa",
  "key10": "24RXtmaM93m3RLpjspcBPhYrP92Z3CEuAxJEy4yvvjVL2Aam5yDYAZhCwpbAgXzGqsLvQeBPwGYaz23jhpBzQzLa",
  "key11": "45w8CM3fhMtNMMdp1VEnoWMV67HjTSz2GWxwewEtxMWpmDQBSQZt8NbyMb2mmHF5WCxEi5wPQRjhwrrKgu9Ln1uq",
  "key12": "3UT67yMmuAeUnneCYB2tC2ntBSAGTWobYvwmNuj9pyhuVMEg4ZJFSziemAKyf1WTYu3ujCjvyc1obtw7T3FWupYE",
  "key13": "4rUa8qVwwyatinQTVVZvXwqmBN8TnafKZPLdiEJP712Pug4rpBgigNp2dXBAGcxDj2Av4A3T7oZoUV3irF42i75U",
  "key14": "49K41guxrUCp2prmT8LCoEpFvtMyRkvTDsPeCHcK3Srg5MvcCqgksL6V5XCgJrpob5dmWHCZqCevPzyLDXaSr5jm",
  "key15": "KDAZ3wzy8Csiokn48WsPSXyEtogRiLHqE3qfwJcKvQa3J9dHYbCkMfhWiQDFM3X2KETwBV15qP6toGX2RPMQssV",
  "key16": "3cwBVrRxaMbqCvtX4kcKBp1Sfuo8wc3W1V2WMkjNAL527RAqGMXauAkaYBKnxYNqq8dhJMhHyFh2Xdu5bQjr87Rw",
  "key17": "4r9nn9pPd7wPTgm6d3s3KUQUN9N4mJK2ARPGg2hUrVWpaKAjXx4FHCDC6enktXSJviJNdk4QbDmicvDpPURoma9H",
  "key18": "2q8aiD8CqGkH7a8wXY6uTc88UrrfXnAFEt1K5mpvyQUJ81FSEYPTuXEen56gtQnbEk91UiisArXrf5NHBCxhd4ji",
  "key19": "2CCqR7is4cXYctQ9hLBS2CNEckn46nTjp2cH7Pmu4RJ4RdoLt8EayPiAinxBwCKheF9PhXaUZpLva1UzLGHo3i1S",
  "key20": "2jemh5mjHssXRfVpTUTxtfPeoRecixvVw4io7p8EXEWcftkQ9gtFbUCzzsN2dicekWb5BxDrvFzrif3saNKnB3Sj",
  "key21": "3icck56gSw2E8GoV8uEvFZDHbmiHaJQZcC5sLqaAUckNMHPgeG1v3ontaA3NR6tx1RjKQVJHUa4MHVYDkjmU4NQM",
  "key22": "4kNzpwVYXFyWtSoXKLHMUmD492eU5mUFfTmWHa2oZfLoQoaM2TA3XcTp66VXCUddcw6yT2j9Pov2EJLuiF1j4NAf",
  "key23": "2xsRRpQrbXxiLhdgMqpfFc7mbp8dHMWFPwTARfetCjZfGX7Ex6783ubyD5foD6vaRm2V9PUF5JM8hZgYRztgVNzL",
  "key24": "2zK62feUPeiQuxjEYQXvq1j5aNXrviHDVa7gSoT1z9oQW6EFDYpxSpc2YAFXLBtD8LLb55VQdpzU63wVo4tFtMbi",
  "key25": "3Wv4fY1hJ2KEAqoDwwffJCWiyK4T3SFm1fcMQmGKDAmFvRmQdMbDrJAJ34EWEFC2bWxbvSLN7BpEzGc8nuzx3Mub",
  "key26": "2AywqEEGcWd8zzA8qTd4FaxVmig1fVZKJsd28BU5GGA8xJLzm5FFiA4V77MzRs8g5rGhqYwmXQ7g71JYJVzjSMeP",
  "key27": "5B57gLrvmXVNsP9Cnt23KRKMDyc2HqQb3Nc35PcpeqoQHmVY3CBqSaadmkNCEVoBWRVddV4CPeTJ9gFhBV4m2MfE",
  "key28": "2Sv7d9GgDE49XmnYELUvtFBgA13DSJoMFHRucGjYURVBi9mbVH49tDpQPNE9RUT5W7hJgA3BbvqA9yru75gM4QsM",
  "key29": "2Ser3w76V835b8Eq95FZ4mJFq7SJZZcH4RAHrdjpt2rqLQzANeEcZavwV41JWMAnjPxTuzGG7F2294p9X3FDwkW4",
  "key30": "rUihfw3KMUPRDNntK349weJgCNuAKpBzNv6pXWaqcbYy8f14u678BeYT8cyp6tBNEm2qP21AibuYJ9oXFepEcFc",
  "key31": "5LAY8irB73jC6hWctQJu9DosJ7zSDoUhWnv3jgxi5B7cfpi2c9Qn9nz2Zd1Hf6N6g6XBGVnXRZEUVvEmNy8CN6Bx",
  "key32": "3Rh7qcF2rtBFDk6zcvu86qC2pXJbBePR67ibAmc87p6XAJhU78dW3z5kEZ15ywrmAcgQwRHJYMiVb2ffYFQaarTw",
  "key33": "25wvwvzeYQz6BmHWzexab6yJRBAFvLcN5Fx9cFVfNdVz1QveyBcLHYKV4jhWDr2vcY42HcpHk9bmpj6VqNjcCycH",
  "key34": "4bV2sd3BwjbJZdPeorFudrHzJQQmb667zaoyYArgERZ6gJ7yFGwWRdquBfwTNezXf6ZT9gEHHZZLT2re7Y7QsDy9",
  "key35": "2CA9MR3uW44QQqKiUotijeVGH7ULZHHDbZGhXkpeSVj46ce7pfpYoduVjg5He4xjAromjqzMDFEP7ZJ26qwZQK4T",
  "key36": "39HQVrt3igihpu3744S6J6AnWg5p8PEvzDnB2rVJPwqCY1qcYMnjtSJqaspyRdY7gRQhTsBbDUt2dQxfkqGYHvN5",
  "key37": "31bRhyLF7hhRQcu3A2YZjSuLT9jV2MnjeM1Z8YrXEWcT4K5UWHXmfVGfewHbanMehC2BTHsdZtth1xxUXfm8ourM",
  "key38": "2TX9bBP5vqsb2t3JCypMJtVR3KDkdsY4XowarHeoRUL5Y9ueLMpvCFCwMmEjL1wKG1LDEaLjd59xfMxuugwtZ7BB",
  "key39": "34Y8FfcARuDy9EopdRQpZVnYp7VTEWZKrw1gvxLhTjG8pSnD19o58nP9Yod5AfCNA3vgaZHotqDxTfoAtXK76XS6"
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
