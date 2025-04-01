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
    "5gxisjXfsWspUYAvATPdttLmdPym7whCBZwpuSumbkM5owfXUbZV67fvmf6VQM5mCuCouKq5bookn379TXNyqjK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33M9zaP7qcdX5MEgk6sKBFKXvkKFX3YhZDdcBFznt7aarnRRJMRzMnEadTwP2prAD1h9NwPCucxKYUMCiTVwfFr6",
  "key1": "5z7W7RuduWEogWBYbzqwqVRyjkL6mALT5okerV24HSUREjWjn52cArQCHLkPu3c9ubG3Sf2vRZ5HN1Vbe5vxAivp",
  "key2": "Yj3pt4NMrVh1KVRAJtddYhEBZd5mtGBCcqkazFpw9Kdjfn3rzGh9X4MmMYnpvhbcgrwnnvQDyNxAtBSibMxJmLA",
  "key3": "3Cmd1cSr9MQotEZsm47wuZZw5oZA8Stw2816eeTByVW8pwoWGv5Sn1RuftMbFXc8S76W7PsfepxbCR97r3aNTNuN",
  "key4": "4dX7ZEVV6ba3FWqeagDCPNJgqYvaU1ZJmDzc3R55oiiyzxeLUnEtU9KTtQ9cipyPGyUU27hcMr9kX7TV8sFgS7Pk",
  "key5": "49DXKzq465NqBigpnjuJXsMaT985nt55GbLgypK12pxrw1A9nebH8LrsaVKVhotcWdmKUByuo6T5SqxzXr35fWFz",
  "key6": "5NuTU1SECAaLZ2YuGmsT5biQ9o4Ly7Ys298NGQZ6oDTMW8EbLN41NPhFXofejCPMZKMw8ybaTRkYYYEfMPGkvLJb",
  "key7": "4axfgyd54ZUrzRsCB4ztbmAWjH6kj4o4fyJpQUuMdweum2zbKyYoFcE4xy7BNJhzSHykWVGDhpvFKK7uZMBv1347",
  "key8": "5CKJzutKSEmdPWX4yamARsPhcs4czPcFBgeMid3DiMSoPwkU1TQkCJ4gySfUJ7aTYFSAYr1kFBYF2JY8RmFXRw2n",
  "key9": "2XvWA7M6cnw6f478qoe5BBV4wsixz79MWDhMVarWh87nzxtYz6wkeeLPXP1222pF32kkEsGmX34N1LjUtwXF2FFH",
  "key10": "44sinssgVL2SYwKaEunKZFsH5xMY5DLoSWsGKydxEPTKfxWQtfaArKZ8eYH6B86crjAgPh1NGUSPBa5cQJu92RKb",
  "key11": "4xTNvS46jhdJA5QFBFg2YxJcY8p73pb65MNkTpij7LzzLksn8TZdr37BGXTm216oM32sWK5yh3iathXe8FJ5PpuW",
  "key12": "2AFJzbN1EgXFRWP3JmmyG3zHiPjRZ4r98c397ML7yhXwckpQtQ9Losq6651YmHoy2VjM7CN1rFYc6VrUwgV6tmkV",
  "key13": "4Rd6ebuMB8MvTDMRh1tZqFdQLVZwXVFAaF8ry7vCzNo8iMxRHWaXY7PpaPMybt6R4k3xHdWzBnXYJufSzSeGRLRX",
  "key14": "5ey3e1iEYEveuoXwuLrbe5iAMnA6D6WskWgQMhBcvygAdC4494tjHDeycSRHdE9PQWFg3JJegKkt1MLkojbr48Rq",
  "key15": "5BpbRpZSvVuhnTaLSdjgptVzZCSKHQsDQeoRD6gUD2WD4CbEStTwVhgFUCxdx15oUFyHX5YqB7u7buU6AmKP7sCi",
  "key16": "5XiypfEKtoF3RztkXv55R6qcCFZKk2uDmpWfCADFUomzR76mrAy4SCSvGd98VbY5Vdhx8bN1Q7c8RaZ4JJDA3br4",
  "key17": "3EwFWxFQ2ssMBqDBToR3FLFDKkXaLT2PCvki9dcck2o1vceY3CJG9USyHxc6bLVsAq1MwtE7H1aBjDU5yuo7Cjr7",
  "key18": "5Ag4kBYTzMEEs4uaGfVADKirg35eEJZzfeJ7NGhZPPdS8ModJfArw7aDrXcf7neU13dx5xag1KeJjPrtbSUYBYEH",
  "key19": "2dVGKwTSTYs6ZfJC45MNts9RyxTSTmpRkMKdLNxyv5f8x4cSa5sA9AZZnRkdj4J9uiH7VEGnXafgQmC4Q5zscHtd",
  "key20": "26cT2fiDR4gzufEDc2jnHibHM5NUWEoEd4HhN1gavLtf2J2crWW7M4WUNFRaiZLrzRFEknXW7633MNHm44N614bb",
  "key21": "3KSXUcoEj96TAgheMpPhKcaUM7JsDtCaDUzrxTmwPxWAbYE8rr3CjBFoqopkJDg2rpe6WUqm1eWvGtykNnexgzoi",
  "key22": "5aJnvb4Es7Q7RGLscgPpa4pQyX93qYXy4xJECdTwHtdoeEsdUwz6FX57w6mjy9GWFsZtCjaw3mwDtNWoMBpGt7Gh",
  "key23": "4WJBuA5pWofzUgyvds2Q4igf8CYEDqy6XXJ7dDYXfceRzRrftnYzf1s3azDwbAQavKKhbyTvD5JumX563prmQEZ",
  "key24": "HK9G6HwJDDFXmTw5CVsVSjZvDEoaZdR4ebd7wCpev8WnWPKf2wsFmDbYNU6MsW7CooXNLEVyXRkJKQRtE8iVN36",
  "key25": "22SsUk51KMo7MXoEPSXJeRcjGVZPQjQmtchPJgsANCG1WdBLE4nTe5LiLc3hKwjkt3gCABxEBLjEq4RvYpFEFKBz",
  "key26": "5CRfBmJ9memD2EiskyYZ8aBdtsT98hUuQjZGi4YzzkAw3nuZqnHnYdBz6YRpNnqfDQ13fc3Pp3qcE2pb43s5pZX",
  "key27": "2tEgY4EX4Tkt71g37p6ZeW5LH4TNsqaYmcfTvENRHegg1HsYDyJU3rzsmx8hU31c4F3soL5wpgTUVSrJ1BUdKvJ1",
  "key28": "32irU7U15QUVtW4AuS8r9zTNoA7Crb58r63zKikESDuSf6fmC7mG9qAwwrySrWQbJsprdibQrYUYkAYf3LZeiYca",
  "key29": "2Zk29ykAjABtVzhbDNk4JAxYKFgMPWC61JPwpuSz4EtefHpJh86tRsg8B7xuVTJaj2DJez5noXh73tjYvussAiAS",
  "key30": "36Va1bA2bRfQY7xrqto8xk2x3GoAJALLbKtXW2NswRcxMjf1FygPwvySR6ajwGfiucuW2PHR22moBSraGMfx1aGP",
  "key31": "129LCPMeS7Mwnx1CCJMzod8xSetVSUqdng91WVS5ovxVd6vLbVCTqWvudHqhE4WwSjtU8iKr6XRTX1r6juiuFMaA",
  "key32": "UnHGaH2CeyYQTajWh8znxUd3kh8iyzCwuB9ktT1peoPFT6Nyn4xPNSY86eY7Hbz52wg5UJPTSZUed1kwhv8Vv8R",
  "key33": "W1bXedpqqCNMqL1cTrL4mrN1ru3KDCatPGcFQwgjG4qn7pVRMdKfTcUTzV5f1vmCbheAbpEbVeTvSD9PCgax3kX",
  "key34": "28PQ5kZYAWqwTZBk6UtptQU7YuRg3T1kfUUKo4RDbodtRdJusmB29iAdi5WA9PFHjFEUqYANXensjrUSm7o9GvTK",
  "key35": "51YzFyUrc97bKJd4gJzN9k91nEH3DcXbsTF4McuqDuuM4PuTLwTrBVk9NwCY6t56R2WZDvEb58M93EL22Tn8tQVv",
  "key36": "nxDbeEHKC2AjgFtmaJ9Zq4bRbgZw7AXagoG4L2Kx3gnYMMEHJ7KGhdnPpZoTnk2qvd8LweaBJcm4WE9S1tFPRZA",
  "key37": "4JwxJXQfWj16kbB1DQemtqyC5LLbheqJdRnezxrKGSxM3MKBEbxKwgMAt5L3QJ7PmJZytsajqiHyj4kU8rBWWXVN",
  "key38": "3jSmM7UPMSDvtW2cXZ4WB7r3XFbBhRZGSMFHAgCKF8Az9RAuApnKb1HHZGt9VdEQhRoi5tfkJy62pVAjLN64mJGK"
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
