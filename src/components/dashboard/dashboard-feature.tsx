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
    "wV2ffcitzZJ8DnPVgUDXqi1u5GEgPedv5gHSDsE67JaUBiicx3GVWLFHZXBvwN41kzbhuZPMegGQpAojF5JBPet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNTzTzpnhjHK8g9VfKN1sdEUR7JDt2EtLfYjP9okiZFq1nEGjtydJRbXD2gYVnuicYF3aehtbmKZZ1metnjCmCL",
  "key1": "4kVC98213DGaTRyHkv5tk3p3utKx42KZ67yvZSfoE1DZHiCsJxpD797DE11XcMXZRjw7Dgn6XuHLmUNxLJyj1AYs",
  "key2": "2EYS1boQnchLjv1AiMfsyqaWBHSE7kWJbTy9aczdmKBB8ZCwvrDPRUmRa6uDyzj4HFa6crKdwngYJrgip61gr3FP",
  "key3": "4pKNdwBnFpo3sZuQehGiGtwqFdeWEiHKxyGboQ1qToK1u8QFjA97WdC4jhXaDWeATtdg1sjy8aTjMJpaVzct7zaD",
  "key4": "62zFCeGKNwFwHqLyp8ehKNLocctk4Nki8PAKYx4mDF1bji4HXurvKvdQPqde67oiunsSks1419X1MhMXdGSvN8r2",
  "key5": "3SwyHSdW9BUSUPQpPt5e3D2L8t7D86hfgoHe62E6xyvwGGPBpgDYibYJBYFzY8NYJdDdSULcscTmLquSJkaXu47y",
  "key6": "44XP4TxCjNEvC3JCjgGmidy8pJ9NaYusfvbyKcaRRXSoJN1P4oWFPmawEXqrDSq3ANLWet8hDFsEPLYcciLa8nFW",
  "key7": "47vakNwgYDiGPwJz48SLmzurEbe9ZbGNU6M5rV8A1MxxzGvrhU4rBNnpjh8RMHD1xZbhzDrLmMHgkPGurFk4VbGm",
  "key8": "4aif8eJdMi3myVo5rrEBnWSZbohdaNqb1dGwKH1excPwxksQsTqSJf8jujvFECiQhqFRJ7F1PuimszcVhjiCqU2t",
  "key9": "2FrfdxPXan77SnsUV59XHyTvi4niQDeBAk3FCPmLxGxKfdwAPzgaMMt1JUPWncXkRmjz2CZT6NXQHfYVnH5GWMBs",
  "key10": "4Qt4neAXDkj4o7brHRSfTRfnr2NKwhtAEaxroPVq8iRLTvfx9outkP52qYnEnL5bhqwywzS2YFCQqHzt5Jhj771",
  "key11": "3ASgaYjDM954qLecVWFPFcEEKVySzFbMpt8TbarKnvVec9sNvG3MkBc9qirZ1VJhMWUHS5sfaSRDocEQihfqcVrV",
  "key12": "5qhGu5RER1EvZbvaEK5eTwUWqx7cehkg97swTPLjkzYtmibNaVhrSgLcKYCbfMoxe3CJ5UxzYFwQ1nWDb1schoxq",
  "key13": "5PuvwAySZQGHAhQXKqDU5uLjPycDT285ecqdKYHb6j23UZwugqxdxpDjokkjiYUsMCVk9wDgqRPPQgrRVde6PkQN",
  "key14": "2wbPMwdoWVPRqVdQ9bvkwmc55gfHSMvBnb3ByeimKtcKDSLctfCWoD3S5hy2ZKPA5edpcBtZpG1Xsz2W1wuxm47t",
  "key15": "5pTo7BdNinaQYRwoP1WPFkEMhDSQqgCYwptHxzgzNdRwHW59cCq76KPUgwrQBA7aCSP6BAZzayhewAaiv54pJLke",
  "key16": "4y3vPwmAQWUS6yeByZ6aTeXc1kgSbKZJqVpHSAMLeCeQ8RQoA5aZiTuhxbnMVpVVxj6w8Rr8ZXkB7D6wTrFrwZwr",
  "key17": "2YLcqAPJbamFUhuoLsDBiuUzeDFm55UMKFLHYXxPKn9sxdtTbgjjmALe7Ta8KQdniwVwUd3Re5Jra9E5rhv54DrK",
  "key18": "4C3Qdg4dBsmnNR7MdV9RVGio211mCcuzRwdjuwsSsfwbwYkNQFUjB4XgKXtmHxbsKuhw5XZXwhazj6ZADuC7BNCq",
  "key19": "3uQzaL7P6vAivtTXTxvqGpadZ5xZ71BUzWsLAH6z4YsSfc5K6CZaCjYTAYaiYJHozsS9UN1dVBzWdTLxuxP8h3tt",
  "key20": "2LcLdGQQmujXfigm1zndDs9S4VHUV3YabSUA51NdoR59od5DqoPSaRdwaruji8GjApU5TK4xNLH2YsQAXYaUqKYa",
  "key21": "2J5bc8NaCe39xaQdJeSar88ayC561ikvYUcLBjTmJNZwfF3DxvvDw1185Vc61NQ9g8An9u39wn6dMTLV21FLXU5E",
  "key22": "4k8wts7aJLT5KbSd4MhAureQoYVRaVnggzF353B5SKK28CEDYiVGyCwmds4bVeVLs9W62hbCk5DDgUg8qnz6LzDR",
  "key23": "XPBDdrQZtmfjSQw1upQH9fKADofSNNtyxDrzAhpKARnrvMs8VTLjyhZRjcwZr8FsEdRgBV9rgMq3nS7GwN7Nwqt",
  "key24": "fS9sKHgxh7T7NcLGNec15HNmBKNbbRqwhv6nKYTQ963CZ6zPqtqnRq8gbY5my9edTrDZdDb6jbbPdLoeZ5gqrVb",
  "key25": "1euzqbywLYX6cDPvddYGNTwPF5TQWRYvFRPDhbuVdk4V26v842FcsAD7rj9MLZrh7h58xdiF9cFZ6vmnksWnyKk",
  "key26": "5KL4cqGNsRaZTZ9Qj4ZXVLcDrJmFcUghQwUYZjjiwRfbHAAte2oVr1BMzmWuKwK6ZtPF1a4QnWuJGv8Ru1hevpcy",
  "key27": "23Fe6Z6A5Ajm2RDJC8F5pyxmU4qTyKt7syqz55e9mQ9geXrRbLhZUcAymfafYj2cQLvNjHZHL14gf7RGiuWtmXBW",
  "key28": "4HhgoC27pPy3B342kxEgidQA9WBzysSx8D3tuEHLSHRYvkHpEJzoQDdnracRLerqSbsgJERQNYb9Ar77MxwSQzWh",
  "key29": "3py5mxgLGbBqsV3i11f1WNjoNAUozYxSBa9FAMJ8jmWsLez7FmVHNK1gD3oyyf1GamRdaGz48DNLZttiyaEEmW7x",
  "key30": "32iQHXoaZm7Ju3KME2kHefSUR3W3jL4ie4rRZEfWrQwunxBsw6WwkcNbG7hcxjzqJnxHbCwD1fxbVn3ptewbGrxF",
  "key31": "4jtZe7C2dX9XTcqgq4U3W4eTT3u6B7HmXGDA1ma1MBwxqZZtbTEzkAEYsq9gWaEMqGNnWCADwwDk6Cko1sCP35xL"
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
