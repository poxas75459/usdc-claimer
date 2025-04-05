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
    "3i3FhKTBHriz7S4Crxmd2Wo3qdxgCDhkVGbaGvPr5hD9GJdgYXUFiJe1duZYsALdThzhr1tMarN4uiA8DkhWcJac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9nENwXSCt2AEujfMMp7TxxG9eZEYY2LsyMconR13hhgTFRh2RMwc5io1zyBUwRUNToQLNFs8Twh8zAHVKHBgPp",
  "key1": "5K7WLbJnyg1wKZHW5pJRzsffQ9yVZdM2MNYKkYVP3SdsGtqeBQ4WdsJ8TqCiU5123mUzisvzi3rbqVKJTvjv7fZ6",
  "key2": "2RqV8CKL18oYwqCsAxGwJSaw2fRemMh6ALG2bFZCFdxQyHt21Z84ciJ59MwbBnbC6WAZMxRqWeAo4cxyc49XKiGv",
  "key3": "3wjVBbTVwYFfhJJo87HnoBGLiiHMPKmgbaV9ZZ1SH7vTomkdS9sxuQtQiDho9fFiZpuKMX9SjMEWjza4tLNW8k28",
  "key4": "4onebK9Q43R5NdGondhXJ8tV8sjpwwBb6kBLgjAWxxmXmn9cLS1KChdVetRLhjz1yfiXDA4KABzBtVyjqJq926Nd",
  "key5": "586nSCrPmence6tuH853P85xhjKHGQGS1N3YnboP1FA5o8Y13jzQki9K9gwoEuNSarsJYAizTpmtkc6JuQu49bpt",
  "key6": "xNQdGBTJfcbGwDBToZs6n1aWoMbaq7AWBfP31b7G7bdLEaU614CdLhZrAXoqpbZUtMWSYYaptfZXKM1NDkJo43r",
  "key7": "2yu7pEtb757MaZ5azDfT74JzTaJcfCgpgnjoXbS7P46aKcv5oN3VKgM7taR9kEUNa6XGKd9mxJ2RjK526NcbAEX8",
  "key8": "5WjGoXbQQA1U5jMPC59eHBccfwDLhpQBePszjhUQ482qShcNKd8r8oSUozst6goSmySA3BZcNkQx7NkigZEKL1E2",
  "key9": "5eW7n3nnqkegsnuD8nSkgNwGjv83hXR5ej24RivGA3Pe3aQW32DphHoaLyiY8s2fkAwmetADvyWpz7DGqDZN6GVy",
  "key10": "3tVNwKatKsXPMGNr8WVmPKpSxWEvAACqxXyAhMrUn6LY61YuFopwT4CgNhDSu26pYK2iYmhRBqP1Gafi222fgeQ2",
  "key11": "5oM4f96p3gYxJdKQFuVpQw41kYiurNVA8h2ADVX16gZNfBLDLGvtuVBLqEA8Fryw2ZtboSEQpMjELt5urvviyq9d",
  "key12": "5ho9ynbEwKCeHcDQZMxgYJp6gf33xCBSoKigxxCStXsX342x2peh74HRTwxYqFGDAnxYpyt3eV9C4nkCzUXmYkLu",
  "key13": "XQnyu7uND2waCYbxMTzPd8whLH1MV1KAVYHAyZ6KjHDNEqxQN5bT3hpBvYAKHgXHdrCjgtruSLitQyWBBZvVCPw",
  "key14": "64t2FV8YVFPPMJhsnegxrRQ1u8hsxLkugSP94X6BkrZCuDDQuTQmLkxySvYHtxHXNcpt5rTZ5cqwijPeJLsRuT3Z",
  "key15": "4MujFQPjubHbJx4qeYPrGsWnw4Vq4LzdEPSHGZYYDSCPfnm8JoK1MgQ74kZVNMGw3ao6ApzScekfHCpSkzwZLLUX",
  "key16": "2MaaYVFHjF1iqBsW97coUXeSUkpcNY5kePzuQ7EdeVFQR5WTyDtBUpHhLHY7oP4WMuRZamY27rjVWhYggSaViSnu",
  "key17": "2N9N7irvmUh3njURcBtUPoAFkuvYZQ27cLWgt1z4yZqgetubDbmrGqGMt3ANRsv4p6a21Pw1nrAJAj3vXmGsssd9",
  "key18": "4UWhpiT7i2iTf6URngqEGLA5yyBU5QLRfAyr3y2BUtnJ598zEgqY2EW23Vuc8M8Em4PvattYmooHQrzszoanmc6A",
  "key19": "2jpi1UQ5RSVCu4m9Tm7yxrGjVeCSDpHeJYh933jUHjFGHVAgU5ZQ5ibhGuUK5Wf35695xVreoFwhMqgn9rJny2Rt",
  "key20": "44SvtkQoNT3AkJWLv5QjteFpGx4MoXLWsn4HbJuMMyVzYEM4Lu5nyRfmCBcFxDCrD7Y3J5UGDNum2qsc1kfZjn6t",
  "key21": "153ePXpRA1TXddKc2ThhCbrGpUcTaWApnYWFGtbsJfm5JAEDNwMNw7YkXQjJ8MukGpWZzaExqfWbbb653jF69VQ",
  "key22": "2K9i6xJH8uE5TkWfXrJDsDu4TnB4tsttrV1Yt787U5N7NxuL3LnkqQiLrmdZ5MWZHB2f8P1YzLuJPeK2Cp9yd6qB",
  "key23": "3u6BCFmQFGkMPd1VDMoX4uyZTcm2Yn9qz78WiiVGeTNjkBsNXvZ59GedRJWHs7s2xJkyTLNgrP9P9L8qo46e4jc9",
  "key24": "3Z6byyHqychMdV39pYtMfWNbT5R4bn8WTMXA3yRqNDnRarxggPZiGEtyQKrdjRQ6myp8Qks8JLzNx6FoVhZDuPrT",
  "key25": "2iq9KRTPRHzbdy2MaEK8eoxnLjE8jdDNtK5fyv7YMjBcPrkErZEVNe6NGVSfYRqQ4pDFEg5kG6HaWrVTQM1QKzCy",
  "key26": "5YcaftnAvAuMiYvAJcq4t1BizzRBgoFm1ppr6eigEzw6G2gTsvoUgPLSVtrGYCpqtLsEewp8L7DhgdpjaudVgYnS",
  "key27": "656mw6pc5Q4a7Qn1Nyi2E3pUdecVpf9BgqtpmPivNhuWdGZ5K7hxmQG3iLj6yaHRn3C95o78AWzuntvPBi24RRJh",
  "key28": "2im3w71p6PL44z4abYNiUQCCgYGwiveeMQmLnAyvzq2HUXB45s28xjwuSt1BoG8EyoU1QG7DddmUersDps4Gb5Sv",
  "key29": "37aGb7fCAUUNuXkTEKnfk22UyevCEifawfkLKiqgsrhbo1JBv8XdWXVweEoZ8j6EWU7PYkUynJEwP6CXyybBhN2t",
  "key30": "3h2mCAdhWKj9CVgf65DpgL23aYmZuZh2thTN9WiM5LgSJcQfszMSunAWhAWgnPjCmGmUo9962K3KmM48JVoBp6kD",
  "key31": "5WtDV9iji85bu7Kxx8ZYgnj1nFssw4E19PsivnDymoqnvXtZBb2e1Pk8nWDpvFi4R8BHG35kVGMCApoCFsRs5ubJ",
  "key32": "37WtKNA8Qm2H7VDjMGZUKowUDYtUx1bArCZSvPeLkXQwoLh6DwdD1o6pBr16wrMWhVLNiC85hLiAnumoL6PrAvTp",
  "key33": "66eFRXEpM77ShrJ7oz2ohMruRFVQKFgYjG3bF7tnFjRUMkXTvfu1yQ3TxTm3SsvuMY6KGTc4Tfnk3PdquxdU1ozy",
  "key34": "5xiATYu5ea71dsDcSRYoR4MUR8L5bjdhAUVwSnjivsw1D7QmzaZTiDYAf9166Ha3NykGPhYR3Uq7Zze9ywZf4Ly",
  "key35": "4tnDMCnD5RT1SgSvapMRMwUXP4cjwiJyTMRMjemWfUweeXYxjnMrU9bLRqmmvkoZ2UFTGuiPkBwhp3Vd1QecRxN3",
  "key36": "4X1svBrmHy9jM3FsAM1Heh3ZVwpnStrXPCy9A2wVsuhktdQfAYAX8BkfBtaEPjLzSGoPWmhUByMyYMQTcZBD4ikd",
  "key37": "4Dro6z6D9YEqixGFcippv6jtBDKumvLwfkPZfg6CRVRzEWbp9Cs7JhPoN3cJSP6kkjBEuWeTfA4Gi3HpR2z4x3c1",
  "key38": "2WrBtWN24CXyWwfyPTdZngtt6DCwRSTL6ucCPbbJKytQu7TDXWqQswATWBXnTjfDtnHXtBNDkGjXQVErNqbkxPko",
  "key39": "AqX5P9yZp9bgpzbfozpg5CdbiSgAwhMF6EKHk8EcQ3CbJXEyDi2gCDb2HGbgMaJ32BWiBSco7Lj9sQiTN74ae7N",
  "key40": "3qJi1RFSPLs53kw9woivA2tis9HmJDJKPcP5zHL32qnLSnWmFiwetwgih4jHAh5JfvMkXRseih7qcfgUHKUEU8rJ",
  "key41": "55MeJKAFgX6nXtggsJSsvnxoQCpZWwsQWwRzumPLpkxnSQfhFL9Kt2QWau5wUozhk7oj77Tz8PmybmjPxohCtwqg",
  "key42": "5LAJuBGJ9KgZxRYjnsMXqs3JkbnMsDQVafFoNNqyoLSrA1kRfsqoPYdY35bcgBBXHAfTogEURkkC6rn8C7q1ecCm"
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
