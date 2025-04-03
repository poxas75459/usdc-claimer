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
    "2FtpAEuHhsqYhMsvB9t1eWeTbnne1wh8JG1u9zKrbmonQC4yuFZPgXGNt7MrUUd2y6ZA27FbwaqTefk4LCtaM7dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ke6Tyz2vyNFFWh8HMz4v23KunJBsrTEn8QewbNyZ4yeStVSopPsDzuKKCuRnQNwxn5rvo1pwRiPZK4VtbnDquaT",
  "key1": "5nU2SxAnknkn5TG5UufmbtZ6zsdmJ6DhYqnBFBdEhQwmsaRP9D9gJSRqvmCqmNeN7JJAfxAVWcXvMtuqdKcWpNeU",
  "key2": "4DBzTq3dcoreETq1PHS6oC9dk5XabXXE4LPAw5a6zMcewxpkj8D7b6oTkzwuCuME2Xxn88RQfWueH5wrwdWkF6WS",
  "key3": "4hrg71XjPoGm3mLY2JQFFoFebowhGnQRmqBmy1hKBMfaJTNgWne9x9ejNJwBtc5FDBGBBc8iEQPUDjWzECD4JB9V",
  "key4": "53gyZGavsbCYg7oMGzeYxPpRNc6oCqRQRoCQsfKYmLVPjEskuw7ehBY857YFBDCbDZPGAzqMC69TmHHW4wnZAnhd",
  "key5": "4F7zbHRGvsDownZRyLCgK2uzCtqL2nUJRWkJA1vhQJ2Dbteo9LuRf9GhS6ppAvfNrHrMvqmnVwG2BDuVPjyjGNji",
  "key6": "dfy2gVPCDdbosvySTXf9u9jTHfnRyzyS46By26i8KwbT22J4RKodTQAL8TbnGF3BqmATEj6MGQ8EnSQxg2J11Gx",
  "key7": "5Xui2ux7cujYqHgbMSbRhNXH9NdkQTSWTG8iGHfqLDC4sgjV6kEUketNU394yPDHDMEdsR4ksK19k5xJzRT9V8Ub",
  "key8": "5kqoC3WmbQNDJh3S8tEoFVvmFvcgxTVyErF1TXSesScKFG7L8vApaioDaAXcf53QyaDVjccPpmU8o9u3kFSPJ2Nr",
  "key9": "25hC3NoivhUnbELKf3xLCiRCko2UuKpQ9hAkP5HCKJesGyhUt3yH6QzW5PkDkZC7pbFanxGyLpsRPfnq5zJGW69W",
  "key10": "43jvQjvbqaqDt2Wpd1Dd6n6sqcDcngYhe9ZH4eFTndevDvaVZqDPCq7yFG74B66FHxcuGAzDrURxfKTXCr5q5MWh",
  "key11": "2JwcpHGarW435cT6Co81wXh5RiW5y7t4swBxEgRpN8usABUJYyQFiv5VNkNYcafopv9YXNkJRs8YDfEu2JW92hTh",
  "key12": "3i4bifLHcp4DQxo7AwdENncp4CyeHtg1vZHyRE438NjhBwukXMCxwv8MmQ8iLLJVJBmL8Gi7MntKUNA8LGwF13BD",
  "key13": "vqBKJbNapFEL5UKfdZ5fciMDg7Nw7uyKEMBkuLtga6QHsDcCLqjZNpB9cXMiJfrBdBfEd8G1PbLEfc3scVJFZF6",
  "key14": "4acomqNa2grBc1XZt7e8xxqMGSEiDdBr6gRtDvho7Qd5TAUdmY8KGA85iezcJj8K8QzpHPSKRvdyK1YLDa886SRB",
  "key15": "4XZL1QzWvQ6xjqfhfRfN6YAGTZRPJAXzrPDrfAe5GtbTCjBEQUUHtKkQKUBKB9n12z3ktkfzJJGtHUYSz9CH1ShV",
  "key16": "62wiJ2S88R9yDjK5ykX3ZzgzNysK9mA9ivfSgM9R2rsbRB2vjWJMyjduShCvJ4AiZwUaYtz3tK3q8vXSWCAKHqcA",
  "key17": "XtL8FnMh2bzk4ok9XXWGtpcpgPznFNtBvQcXNyeYEfeSLgMiAiXN6veHF2yWbxUkD4hb1NpmUVAuVuxj6Fddxgo",
  "key18": "641xNKKEbegcxyFtwYkaAf16UFWFj3WH2TnWETGodeGf42AC3d8KcktPs3WSTnc1fzNy45Vw2BHQTCPoxjQiQ3fH",
  "key19": "2zrkwpmJfEDfLsZCSaevaKsMVzGtWn2N4s5nY2EPNM3TohYQa4WEnemks3muz3hMBXRCjT6jK3fmxzKkC834Se8r",
  "key20": "BG9ZLR179y3qKVp4xKcBpgV4b19taeu8VYYA3iBwgXbabDdz4AUZHpobxaXfQuMd4rkXcWFe1ZxEr8bXjvRKF6y",
  "key21": "4joWSRx9JLK3s4NqqGDczN7JcoBt3rqPR64ePL586C1p6pzHqMUBnK2TRpKveybMgdGunsVsCwLKwcdbcQTxaRaB",
  "key22": "57tUYDYUu47SEwRL1giWwDt2k6EbPSTY9BQUgYQoxRzevuSL6trfA448ShnYzGeuJLAHVpy5MVkxHRURhXNeTxcK",
  "key23": "3zWtQzMZWLcHrU3z8hW75B9p99XrWN54HDN2XMxvWN5YbtfT8c55qTkQSpXY4qc8Km3xg2K9QA1GUmmDFzs5S12v",
  "key24": "4taPYsYemBNbN7ovsz6uZq92hiDfjYhs4Fu6RSocvT7KT6bCH9nLb5iYg3HWTAHNgKREBYnVfGFSrtys9v5uvqjU",
  "key25": "4TfAfy5SQBwgdxV3qnbEcp3DrdutJQC2Mi2tHMUawSDPnFXEu4d9gxe1hY9JjnajwP5CvUVgNM9SUnLGqj57f49j",
  "key26": "4mbSoW1DB9Xz3TTfXmZReSPyKRgkLbNcftHFk51XKAcrEP6PGS2SVXkNjAL8zFRtZZyDGkjQ7UyEuutvntu6sHSS",
  "key27": "4QKK1ue75Dk2KedqWXRb7fpGmWLJZ2ydP2XS4GmmHRhJM31FyKngoXFsmDg7UP284hHkYZTWSXE9SVAbjQt5zNBg",
  "key28": "YBvpGQWugfXCGemGN5VcqCsLaMjVc4oSVCsTrT8KaRdodDeZUxRhtq2WwMje9zCaBUFWygMZUqEZQZmxMQmjnua",
  "key29": "3rDzaK6nUkJeLJZj56sKJRK1DrpH2GuqUSa64ei3NNFxyKH1psfTYcYdjCSzVt92AWcfM3UB3QR3VtMJ17Gkew18",
  "key30": "zStyrVqn7CXFeH8biZExSP3j2HHxTbrVgaSjueYQBDmrGeU9vAZ8KMinDrCzsummLPocF9e12MXuv5eUzgy4JAw",
  "key31": "5wWZz1245jznNbPoDjHj8AXXoNrPRAsBMhenWVXN8V5ETGJVUew8PusqqCpTTYLh9YnmLfHf7Nkw3uVFnKkYgwum",
  "key32": "3LvkA5mzKinjYwBS9eePYXJvRaYxTgJHZHzyWBZuJhjgUMcA2ayEjLUaUQQCnScJEe4SSZ6xB9Zew7cntdhR3reH",
  "key33": "oCjL4VwChTgQKyrzGn7xRUSgNVzQdzu8EKS2J4wQJ9sFQnpQfPP3P2acpnKUcfcqooQagcDiw7fyPuQqKRQkYrJ",
  "key34": "EmBstZM4GnjFiCQKLwGbzwA9PBXJriqv2CN8n9G9siXqnQHjQcf8S9ETVHMimWSwDwMFht4NoTdPiCsvMnFWdpj",
  "key35": "5ihoPUTZTeajzAA8QFZoowXxZtCN1Xjv3v1x1HxA888Y4aVsZUtXq5Yzq1XbUBWXuAFr4QdVsTgQhmXGS7hfqpyE"
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
