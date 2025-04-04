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
    "zMxW5WQjiPvbEq91NzTwfWiET5NK4jZm8L9JHSGUMwCBJd1fvstLFL5knB2DENtQkZgX4pSAByhi4HDfCagFU8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpzFnUhf9VFcisqA3NncNYLmbS8DNkXvzMsCkpc9NdzUym1amPcGv1KRShwFkhhvKBNT8HE7b5SMhtHpCPWDBFr",
  "key1": "3dD844hmaQRTQzmRKGgAhaZwSZwq3RQM3RR32uvaNC4ESgtVNnuxuYpU8FfUFq4dBdRuJdtSKkNNJ3fod8TGfiCg",
  "key2": "5tAfsD7svPxHbmaUqoJnHuy6EuogfZ4MNxFzNvpe1GBQJtE3mUAaJubHLxFENWQogu3TptYti4ay5xf6xYGrXdGk",
  "key3": "2h4tvb8zV3SxPVEKPLoh9FPmipS3EBihy8i5orV1WWUYkKC71mwUDfPpSGRaHxJc7NpbvQMbUapWQdaxwxHa3C3p",
  "key4": "3UiAzS8C9LDvLfThCm1Kv5rut474t9iLiFon1xK1CHCaLUmtemddyCz4W5LLwpR5y6eHT6kbhG1DpXuDD4pAGbUe",
  "key5": "4kHEsxu9XrgFopaw1MRexpc5ZETJBQUqgEqMca9Krdit3XyorRPTYnSRXaHBMBepBXykNj5R5cPhPAqSjTLYk4kJ",
  "key6": "4NPNJaaUwsVCWBJkVdxnw496jZBmTbt8F2PdtDWxgXBGbHrUfktFCGvihZGmJtgmMFRwEx1airXgnBnm7gQuKAgy",
  "key7": "5PAzRKH96JsEamik3AzNqmmYEspR8RwfjNuZGSKDrCdCig4jKTSfY2CGa9U9eQbCLSPhJo4aDja85EkrmQTTxUjX",
  "key8": "2yCPmYasWYu1ve7LYmRQHvnBjnAHMGNGn7fYggxEnA2PNmojv2889hQJsBGJpXSPrNchE4AewdFaP1zzCFSD3iCX",
  "key9": "4g3tXkyZbxczBRYzy8on8ARo9kaY2TAD5UfWtHi6aC6feZZsXd2qhwLZ2jffxnk1NV4vuYRBugYvWpXtrz6WqTyE",
  "key10": "5QVxgif9TPXwGERbmU4TG5VNDx3hBL1Vf4UVyGvaqMkTYgaujrN1DWtq9d1aVqXuH186Z652vN8MFGhUodjzpopi",
  "key11": "rgDEqEnfqDa3wXDDcEq7fNNsWjM9ik8tZE3d4d9tDyJhJU5yFr2wAYEuEm6K8C5vsboyxiLWV2TGcyy6x4Q6Jm6",
  "key12": "SUbru2WWoNhyUPYPV1xMUCEDQ9Y9SQkEW7kKQn3LCwpq8TfrWUdsoxpeNWtAfHX8LUGBgphtod4xFRPEx1xJJt9",
  "key13": "pZpTWhsb9UZmhP5SDZSiwsUYWsVhehtMbAvHyBt5QXr4zSGDehM2jQrpBtZsTQoge9pgVDR4V3rLXkQNUadfKVz",
  "key14": "3CK65Yi9rTrz8NUtx6drv4ZiRw8x7mq6xxKZ4R3nyQ5JBGKWUAgDkmzgAJDu4UuGYVGdB6yrzzgJbVDhxJj2Rv3G",
  "key15": "7Q9TD6BoxDecNMuKL4fja4P7SrzHR4UhVeiucr4WwsS5oMMEqo64Xwd75tMQCMwDP5gXujDrQ6bBYJGHxZEDVBz",
  "key16": "2CDAACTk3TeVqN6JgHcCxm3VQL4VQPsED9kxgggHMFPBqzExKn9uRkjxuApU5ou3cSnzmAFXW822oPdNP4jL8YVD",
  "key17": "4gCm3CBV5qt3mvHavkpGTnMZAM4t9c7BeQGWuHUGbsgRfYywHLUHaqSLr7tphLVX7usVCz3Tzx7jr9tbBB1MPmji",
  "key18": "2VxLQERQDLU4RBhHGxudBeEb21DTTLxPf44VPZeBVxP22489zSoodEzPMjawZm7sjZQWzNwULWySNDChMJrg4ziw",
  "key19": "5CoQStvPWMVCFchhtL9ERrh3ZkPM5WT3qQg6Qxk7eWQ9rkXtjMuib3xVjHXPi8QT8QhKfxECzTJ6H85DQvfZwck7",
  "key20": "2bhpY6Cxus2cAYjiA9ZQCp4MQ9Kr4pBYcDmz4D8UApnW1rgE7iq57bqdVfFJU5HqfGqurKLCxpPTMZxyhcQegkmE",
  "key21": "17ywWtYcbK6rFzNL8kV84BitZBqciKrqA3mwtgmvP2cVFahWvYxiQPfgi8gR92tDhbqvd7cQygZWAY62eseyDvT",
  "key22": "z8Y26Hn2ZiJuLW6VaMyd2cPato41mhFn23ghD9o5G5gf7CuxB5ax5VwM4fXNRSR6UPfsmBGLKHT4qSTABDe2XtE",
  "key23": "5Vi9oukxJQ5dtXpZxQufRbLyjPqAHFRFrdj9yjEKn8M2eq6wFPFCV51nsiCfgYnkGihphmDNRrUAzFuyekGnxjG9",
  "key24": "2V5wwpqB3qwNE7LttxywrM7jVDTKUddbD1Yt58wjJq8v3YsrYvHtHPVDhcuQQ92TKzXc8jTPpwbzb6NgfmzHtdQ5",
  "key25": "2AKvWWGdPG44s1j9CfhnfSgSzfk3KEPEc2Jh9pY4g1rjX8sJbufhQBP5FnAS95AmDqBQsseBjohUtfqw8PH7gPFk",
  "key26": "58XQhLivbHvxPGrtPgNs4G95FZSwZnodP6mBkjJzv3YEYaRubRt9K96t6bCPry6eT5vH4viiS6LfkvAuGiFqrUrK",
  "key27": "54USq4z3AU1WwBfSRwd5zEApbc4Sb9zhVezDne15LV46ocpg37bE6Txa1xQXpga3QQr42MHDCVZGEtU9v2S9ksrh",
  "key28": "35c6REDNKeAdoQ3VUrb9ApxYT7QGG8bqEyu6Bnx9btDGLWkcPhM5LHWEQeQZd36z1bFQWqFLofghd3DRAWB7udi",
  "key29": "2TJa2vbBRKRzBKH9vozvQVP2VMnXzP8Q7LaX5sK1ZjXQ6F7sgZMNDHTKedmp4EA1JoQn3SzA2MxNDWEZLCbwhmKX",
  "key30": "5YfurhfQ4SPQ5XPmdqG13Rd66kWMLwHgiaamfXE3J9doR4fGiUDArRUr1VmRFYFM7cXYcFF1L59vXXdvpkaFQ2FG",
  "key31": "UgduhkhqwQAers1K8pWy5ARd3JmdCUQoRYVtcPvNvnvnnB2Cc4JxUPiSq8jfkhxPMimStMC935VsWgfHW4NYrsk",
  "key32": "3PGxF2aT7gzHq4VWAejpgAsVHVCrwoa9peSjkVZDRy5jycAr2ppirtD5nEEedyDMFcPtDxikJHvxi2nFLAXN6AK2",
  "key33": "4z7kewNMWGaFF8iawRM1AAeUPadCBXJPXb8rvRRbYQmKqQUs9aKvsCrd5MMHBF2stzeqxk5MtcjTxZr7v5aYLMFm",
  "key34": "2aj4Qq8V1J8sQVtRiiVkEqSW5hZeJ2J4MN5vWi3gCAvHQB7qx8nBFvvC7o6CHQCT8XVkTDYLHdNPFj7LCXGBY4EY",
  "key35": "4bFZGamTjRSsFXV531ZJMPvsTEEzds69WX5bnuZUJXPcoFYvPhxFcYks44HTEp64vpWoXTvhiH5Vbx132XE5ZoUc",
  "key36": "3fNLxzgvm2qQmnMhae6n4XEECLbQgCCasE8gqUCaMs7ev2dotciAhDwnnSSz2vuCcNbiLtSbF4qmTqrYLyrkGszy",
  "key37": "3D1JckcBKkqt7H3FfWZw1gyiuP4zYSdnoJGkUjBjerCzJtjKYsiD72tND6sCQBDQtfQiETRpKFjYGcW9fmqFP8uc",
  "key38": "4Aydcp9rEGXq1daqcXZcE62prCJ2zuGvtTFv82s8Buoz6VDaJVy8BXk5qc12ey3k7Uwbfz99i9DPGw5yTuW4BjYM",
  "key39": "26eV5MpgvdZqeKzsiuVQPUeyuZJTK41csGdeqbDRW5Rne9qjoX1TBXNivDuCXbo3jfjd2JD3LTwPWJpJZZjEv3BL",
  "key40": "5Cwr7A2s9vUpaozUNRTL6VSVzKc9eDPnhah8aLPN2TLPEjaEeoUUWEEdV2JpyYvqfe8H6pvxPjaiiB6hmxUA2eC4"
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
