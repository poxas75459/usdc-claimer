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
    "4jE4491hD2cKA2HHP75vKMYBHysncD1PrQZBgrDaCEmvX4nQKEaYjS7ouwWhRVn7LyvdenSK8sMbWyRdNW7ZyT2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499mxPsuSeRbFtnNaNd8gQeHnxTqNBJPAf8gHA77zKZooFZgAXNdQLEnpKr1BUJtgrtGyriRS4po2dpkKji1YwLz",
  "key1": "3eYcnuVekAJqFFvftRyxLDEQ8CuCRrXyb2Mr5Pt58Fsj2juXPFBCt5CN1Je5NCx6enXZdgmgeWexNRf2bAmzp48H",
  "key2": "32vqBYQ7gERb7R2d3Jn3oGPNySXWxnbVokUbPjRysj6H4F9ZMgKMJts1beA4F13hfMv3Bw5cBEJwYURyXbdnGxpn",
  "key3": "4wLfdN8kEmuAHyipyYYywS6qSkeNPdBqZoPDiAHX9r2N3rBSuDrEjGcHvBA72CCbwWjtVRXYeVK9a53ahK8m5q7T",
  "key4": "3EhsXNWviNjkWqCRLsLzfBywQ3DEuYhprMoGaJapYRBPnnNh9uB413X8oL4Wmymx9ReNApmvo3MvjHeETJJgqZ7z",
  "key5": "GAZaoiwkuvbuWN1zabEr83pDJsdwwKMX8xfycBQH7b3qn2N7kgJEnnvuBd59UmLqvNHsqXCvzTndMvosMTSU81M",
  "key6": "j29azmDpZLNcKDo5EWWxB1aKiSXk4mEwxeGxg66aCyw76a7ZQzfxedBevX1CCPFqYzDzgynkDUFy3X3nn7FJxqs",
  "key7": "2fMYtBLVm3iJyV1vbrPCHTV9sgU9xNnideLxhu15xfXrnHgnGehtnPGs3mq6Dfy12VzWauH9HKFMRzHjcMDRcu6H",
  "key8": "3Sf2h9WGH4KG3MrsiHp7588tH35ASanSTLr2Srhe9ZRas1eGhZbkpvAVGYTN84yQpZBUcYxaVC7PdV2cKtr7TP2Q",
  "key9": "3WKZpSi4126ffAxGbfrJDyrHeQFhSdfnjkEJAmakzJz1yP2vcDtsVANpCSweJKqUr4zN881ashKtHRYgEJqNi2oC",
  "key10": "GsHWAKzjMXSzuTQMKf2MR6fYbc6u7Qk2q6KspLVM8VnHegLmPxCjBLeSc74xGtcPRCjpUoVuvNBGBc7QWSFv2HC",
  "key11": "2aqEUF5vFdcQo7FNNFJ2XUmWZax2ZWjBQZZRYWnKc9mfqN3hd9FLFxcpMxdQHMwi4UaBQ7UuJAyRT7u4LGz98jki",
  "key12": "Kg3pubmvDW3v9bX5WQb9JjqwhSFs5dyHtw8KenUCwEjbAhwucc3frAVMMbmt3s4sstboSqMa6yCyWUyb35j6MTN",
  "key13": "5y3G6Vama6dEmEApzhRqBuxqeP1VBwmqEKGwzMLu59AKxXyCsHkhTz5NYWfagbnRYYFc4WveTSTXwv4YQM8N5YR",
  "key14": "3UvcuSXVBktHFHS5FBufoW7uMt1Mbd632wQBxx3nz1CHSSVPF2MR4LTx1ksUBqeSFVDoqcJsAtwQLciJ8T1ddhXx",
  "key15": "4GovpUV5LpqCgcEdcwUMzZHeRTNGQyxdERMmxzKDi8c5qGPLD24HkGrjh5CEfvzgQmmNVao96ueUFk66duPUnHRJ",
  "key16": "4V3qpiSEwBHh6bpnYrXGP3WrEmgLDQtBwnkJ9oxwCNVxHGsckWDgexBhPNqxgwXpgGdXDNWu1JHTWxegaCacPNBt",
  "key17": "r6viqLeF7acXpLTTxDwY2FMfQFpwc5CTfu2xaQx9tCjmD8u4VmBFLaLdvczAkzbCFecLjvGfmageQvffV8EpSkw",
  "key18": "4e62TDpmHKZtAkD7pXF7oZzS6VtnrGBCug26QrXakgjLzkj9rso73RRcnj9qiGTR1YrKH7KECZFWduFhfWe78wCG",
  "key19": "4RnRGgUBbJA6X9Zh8Rab1mKy71eRiqAphBBL9vQeqYbgCKKBanBYKG8SFGmrSfsrmyQLe7dRGKUGzs9ZLhVHn3Tf",
  "key20": "31VFx9swTsjKRmrBoin8kL5DRQwSra7uJ1x4ef6ZgdAuuKWavZyQCMuUDi4boC6M3GoJu64x1xttYHpF2XmiPWNz",
  "key21": "2vvskNvQR9LfeZHeyGekGVJvpLoqZFtpbRYHU5HSTPgPoxZyVsRjfHEXUNVE9M7npq5AdbKqpiUMCrKDvXsTXZuU",
  "key22": "nWh2XAoP2Mupk3How1vh6Xxv1patXp76XvsWCFNmenfzC2oNpgpXBEvVcp6Q1Qbf28Voi5rxt3GEikPmJgLK5BS",
  "key23": "VXwtMpSnWpE2TLSfUP1VKgUCrs9EQzABioJTx1LhzBakFdtJJDJ1VsnXB8Cy8N4JQTNACWG7E4Xc9HxMFawwkY9",
  "key24": "2MLyoWD7LDLrfHmbS5NqgAjdPQ8FTmdADG2fbiRC7GpDW8yw6Siwu3w5vm3mzPfiX1P5C12bbUqSX2uFWykzrUFT",
  "key25": "2qnn39C6SZV98C9DXQsWubN5XMMDWjCrnkhBj33uukeGgpYAgGP4nSvrbhRduUUefnJn8kMBP9tZ619CPJYPMfXa",
  "key26": "9hgEexQKZurjWyQ9TLz2qJYSqtmbeYr8my6NKY7MpqrstNwHEH8giwPLE2b7j4DCeZvCntWg6dCtK7hqyzf2HAU",
  "key27": "3wFJDTbKym3MQ5Rpt3PuRUz3PzoWACjuoSxpZU6kiQMhkXt2BhdrPmDsmR7j46rewyLJ8TmNzkoak2AjCBAKNRDh",
  "key28": "5LeETBsy2LZATHnAZyzZqafHg4EXwamgWDcVKgNnr2eSzU2x522vSgxDrC5taQtczhjPwp5fhZ6am33RPm899nHT",
  "key29": "z8a5JXJW2rSd9xK2d7Dbnh78eS87yvHBxgAio8VFJg7AmMXmE4gR15tA3LHx5SPAq8J6PhXFDaAxP6TxbQNkEpX",
  "key30": "2bEEK2Ayhz4oWFUCW73KyCiH7LDxTGytyH83f2v9QpDuWP7oXwPFiXjk2wWS2tWjXgaWKHBKApRrTA54o6xG2Az6",
  "key31": "1hWbQzkxK6gZFGzTFpyop4PfGSXn7RydGJmnv9Lu44fdzzr9pPsYvxz8eJc3rqj8P6Y1Qsng2UJfCH8JkLeHxb9",
  "key32": "5GCnDauJ3xEzgyk6vFvhdReBYXYt3W1Lm7qz5hRdNNwrrbxzAD9kgP5xMhUEsgYZorT5b2SCHUqEByA7Y2VhEA5A",
  "key33": "4u2iDisFMUvxnatPPgZq9ArtCS81HmtqKuiULFFuboh3TBGytjo98BmcKrq31YnFeNmNhKdW687dDQnQsPN33eye",
  "key34": "2AE1K2gbF7hhqZBVDp6Gn2SUdrcm5ssZ6s27SubX3EzL9SZ4wAPxGpEo19QbcZ46vCBLYwo6pe8CuRMvUuHLV91J",
  "key35": "5uuCXXsYpdmASe8HopQ63MJrP9KyJidGmZJNFuzs6DteH59zXMSYXe1CAPCZsFCvyWbmB6drQZsgDpps5LZzqExd",
  "key36": "3K9VSCgMXm9TBjJA6iTAAramyeDH9LVttRuhPWxX61z5ULNvv8SHJYxMijMdVdWkx75UV25EnZSritbwRTPeiupj",
  "key37": "2qKsD6tgtXwbRwj6eCWpnYSy66zfpKMtGGnMG6ctnNUjo1XKfXsYBgFXxDbdeN1SRGBdTM6NCTNDy55tWKnxDDJ7",
  "key38": "3N7uKj192pWjSGSN2ZnYNRrZ54h9iTNwtc3t8zqFdC2pfi3GBctWQHthMxf7rF2qxeane7uCXubESEqUHPLwxkYZ",
  "key39": "krwMvV7tn7JJqnhKUWgYFHxrsoU3wjaGHgJrLWRrbSXDfXptBqeqg4yHTSEWWzrKcBrZRTEJii9J5BYKe5AcLNR"
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
