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
    "55CecmBonjBSQXn9MBNq2Ur7TwR4EiTu25TXmS9YfAdzeqZfu2HFENipWiNBmSaBNwbSLExqvbHfYemnmp15SuZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422KpfAdXBS2nrSAeqcWtAWzCBnvrAdyTScwVYA57JrUAJwS9o7GessXgxARDpzbppxrHdyFgn9nDKmT3h5E16AL",
  "key1": "2zhcrQ454JWLEjAgF7bTc3DQpWYsG1xyHefibejoyimKnu5EcsCTQumStWmxzmJKt6vjCRNGCzuvWr8vHWJ68r1E",
  "key2": "2hxjNL2irt5nXUcD6P4iC7V7kiysnjLfP2XgMxakeMgVKgXYw42AedPvwnK1DcvTuC5tUrXFWJ4QaECzqrSKpRtq",
  "key3": "ym2WP8868FHwiXh2QYUwcmXyTUpEQMzNrDp3ByhXkGRYhjCHTX3BrAXHCWkfwk5huGVb6ZYbHRCSC4nCurGmHfJ",
  "key4": "4kBC48DcMsoBaqveNgEyw6HcB4EPBdgyeVenZ1e1yan3jDK8mt48DyuW2XcWnqnmktsSnR8vHRD6z3dkW5H8raLg",
  "key5": "NbfijQT3oXHwuMsZvqrSy9auCie4w8GmCc5yVstWsGwaTBjcU1znwje28NrRn7r6WTrVKLM6KvJkdY9KUMy1LSL",
  "key6": "2QVrNRnrA7vM5wiWY9RKXTcnxZoUdBvkYaXy8an2w8Hat2PiUGtLLEhSusZiEaFYAv5RqGTfeXfWEbyNYBfF1QNo",
  "key7": "3ExJozSUT5omheyu9ykiwuJR2WRBMg5soRSu17R8UXo57w6cNz9wfNDsUtHZXA36EBtw73KFfPHJtHAr5Z7AkVHM",
  "key8": "4iYQasoCqusyX1E7kSSh8LSrJDGq6ixurW2gDoShjULntpxcQTUqecikkzkyjCoJpKLtuDbp6dpLQYPW5XZcRzMs",
  "key9": "3qPHAn3o15Aa4Mt5bC32AmFKmSkusEEna4odSE7EvtCU6HdwDMB3Sh4wcfQLgLge6QUUXhH2UC3XQXCUCEHFyhvj",
  "key10": "5dxehS6SLLdmjRLJoBJb2AAVXERJ8gTvhNxxYpnayFch7dPBMn65cN7Ujt5G5LXGEvX4Zk9MTyr7q4QvV1amjsso",
  "key11": "3dC3xvcvAyswyZdBXcubbVZNahJ4raLWZn8zrJD7SyQ5LuTuMccSKXdPJYtJY5xVoMWTxCxUXiECiFghZaC1CPSU",
  "key12": "5qgtHTNfCSSVhrt6W5P4JywUyXw6gpkyyJXHQez6ojADZQHoqeMGzRSyagHAHEbDJ7H7qnYWydCn6gfDdJQvoHmu",
  "key13": "3YELbJdpd2D21NYuzAEpvtCuimzunGQGP4aTfEmXPJMjwir5hWB35KALVFxP9aBu1gDiLyseaBGJ4fAVCFQibcwJ",
  "key14": "2oUWwwhZZ7UEU1rSgSH1gXuLJkBp6MTVRcLrxfM16jrGddB6xrV8AU4g17za62gGDGvMoC4EqNq9kwSnUGQp68ze",
  "key15": "fNQhWMnYkDXkbeCPZfh3CJeLfxSzaVkDWpZGk5pdjFM6VCX6Fa5XZRo96oHRLQuRQjb1CvGSQy2F7uUdZK9c5Xs",
  "key16": "36U1YqJeWRhSQ2i5XtTvTDbJVryx8EHsQPR8tBdC6S8Vt38UyN12pLWbaM9BS2YmCbEvXcZYz5HpfZX6nB15VQUV",
  "key17": "3viti5ffdbgGRwyN2yRAhe3ncugVuo2ZtydZ3Tr2wWhGeB4dhSRgCuXWVEXKRR8STwYimW7Ba9nX3VnxN9nDjrjF",
  "key18": "dXi1e37ghMLvJhRtBDSVXPPaMrDd5ZM93Ghx3dBgr3ah8AHXQv768RAqYrn5QFA7C1peCkWbKX7XhMwiTb7T937",
  "key19": "37ywLRWx2KqgV6bDcrSdUXBc7uCx9Fq27gLv2A3PtA53bLTCVc3yy5e8WwaptLw5igWPscsBaurLUDciDwKTBvBF",
  "key20": "4FdH8m4xQVgdcXJQX1Vc4XjPApMW5HvXA7rRj7nGiCRn7b8LmsW2iYRdK9hEhJRDbQRHrHvbFayNRPF1KvpaL9M4",
  "key21": "2oRQ9k3NzrdUjh11n76G1ajVp9xNnDoM15BHZR9ngvhcChxH2m3A47GhTKBPkzwnRX9j4CWMawncvbptuDUAUmDB",
  "key22": "4C5FxDx55U9Nv6P5JnoFNrHiUuYyxfsvBrn9Qaiph7msJzwiW6uECHfmADz8Mvwtdi2cDoypTH9LEr5qf1RW5gRz",
  "key23": "2K7DrJhXnhwCASrRN44f5RkPFnt1KdcQDctvkg3VJ7msRFrm3dkUWUaXLjLWML983JmkvpHWMbVJEaKeCHAxvz5m",
  "key24": "4XWThxKQFXyS86THXRhpEyQ2tVudFKdLoqjQKCFfia9hT824tS4QA161yRavS3y9zhEdRvAnw2zLPPhfVWopiL1B",
  "key25": "67fW4b1QM87DQ7oYGWft5DE23thHft6eNMPaoKj1zgsEHQnJXar36zKeJtnptbh47CT8EZz3v6wTfBDgEBT2uaQZ",
  "key26": "2naBgQTYu9XRzx3KpW8uffM6QXMUXio1TS8wS9CFmxEoRAuC1XusVp9VNgmaDmT4JdAjrUktHLrbpz7dPW8NiRuC",
  "key27": "5z2PsgqfyerRUWQaSqDQbWanUoeavTzr8GepDGxaR2yvJx8NkhtvBkC8uVBVYPqnJweK99Tbk9rJYrmZv1a3VdtR",
  "key28": "2MaUCwrde5gfnQmfqEJDkEZkDg2Em7yDVj7YJnGSTbSRHAqQ8HWwiYQKKHtVAyifaNTh4VTsem3YHLZV9hnz8GTL",
  "key29": "2ykX4EnGUu176KG2qybvnSTUezKkVyJdwMcmdXbaHWYkcCMqv7DRK6566TSrS1Xdtfipq9F65JBnUwpYNfLGnAMd",
  "key30": "accsAPmdskCVCjvXdc3ATKqu186DrPVFsVbQSAXqda3aRmyY16tb8MXXu7Sy3kdhedpEW9ifJMWJJP7iP885A3w",
  "key31": "3Bp4VzgyQ2U57tkXrbizCBb7bFxzsP3LtkMN35x9gSNCnN74Svw9zCyz6fcetpWUf6XvgLo3CgMnvaih9j8UHpnM",
  "key32": "2o1q1tP1beEuQQQUjYteJVpsWXF2SKuabNV52D2vH5mP6yY7dykVWP33c94ZKN1aakT2v3DuYnWJ4uDxjgFtsMzx",
  "key33": "4N2CJNabWBpa8uNTKUdYiEVSzbuydUR3aPXDF5nvZvPizWG2jmpd7RuWUGJahSigoTEiQQJX7ycevzzHAG3AityJ",
  "key34": "2wTNox8cSL6oQf3P71dMB9LhJhzA192ACHo1topwLyJ4s1UoDvxawTSyewQKZyzLRNTvckuRxcWairc9YdQFkFeK",
  "key35": "2yMsBsFkBdUCqEhQi38TRYhd2mQYbki12ccxvkMCpN5Z3cT42NkPrsWeeWpJ513md2L1HBwSnDugmQEToXwokk5J",
  "key36": "3SvsfZAwV2VoV8aAJSfqVUGKmbBoBgKcJAgvYv84aVYhASQMBWu76zaAQk3neyZ14now916KDQBHJUPtn1aQC6Wg",
  "key37": "5mHdCZ4DGGzjMw7x1UGs3UUyRQd1DTvMHJjrC7qqUHBDtHwicJbafg41KAaHULujKaakTDdyLzYhWRz8jvqvABGB"
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
