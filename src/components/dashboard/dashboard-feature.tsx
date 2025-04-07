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
    "2aVTrnMNLEhsepHGDGvtu5DzpkNHNbLzkvdrMGYRadqWZHN7Z3AbZef84AcvH5TXgJUD7fuKGeMocJ2Jv6Twgv6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rB6HdGaA2w6nma9CWmQ4wExwJYYBYgvXGmeVJUx7yszM4vA4v3kJ17Dzaem9KESS7hDrkFdv9sQSiwL5tLCjaKL",
  "key1": "ZnMFPdGABW2unT3Jii97QaumBgJdK5LMPWXzS4eCwJAbCPrdqgsyuwci1pjwXP7S3uMTcq2UrMqEcTmsD5sGQWs",
  "key2": "37eqMAcdNhfPPD1o2FAkWW9ZWbkiwiJK4xgVFC8bbmrsMhStr7FdnCroUpQ2LirFk7iP3JZ3Ax3o5ishQRVhWiFe",
  "key3": "3GzFDGHJrF88GeoX3QYHQabDtKwhVwRmy94ugVLWVSSujZqnQ5serGy3GiY2QnuWEhsJw4TtvcsesB6pxMT2QyZu",
  "key4": "2xz2F2hqF963PjqvWkjN8PksivGL554bBTSUPe1mcWfGSCJf5TrKmkW9xya1wK83t3StEP624FXfhvdYVjcB74CF",
  "key5": "bPs4DLwfY75bLadMHTvRezFhK72vMHwGiiyuHUvhex8uUCrkoaBG2YtuwMkbHqn52JW6jfjM6PVv4zMdKuAJ7Bn",
  "key6": "2ws65YPxepW5BByZUSK6A52oVBWqJ127zdjrkt2yPi9CHrY559xRt7SBHFeAiX7jhVjVJUjsfEc9ECBZSyfGGFWa",
  "key7": "USXK8vkvrZrnFCX8crY6FAmGCSgHWoAEBzMvdaU5C4FY6DVYyhU7DTXrgPhcUPEUbqtAkdNXDR9Gs4hb5rj18U7",
  "key8": "7Hum1NyavKB5ZezE5a3GALqUPnfq4oM22F9LbnQupJobUj4sZKU4eXc48STmak3tRTYDdnXPHWUPqxAX4yHnvT4",
  "key9": "46febWDpE81KrxCvbxE1XiGSTWNTv7pFskwHYG5xaii8gtLqp7GhscECYYR4w3xLK3dtpHiAwy2BwATFXoYZDnA7",
  "key10": "RbAx632uPEuhm39dYA2gYcicNJmW5F9chwPGQmjr83VqYuKhuT5KUSG93Mr6MfQHeDjhF3HHZzujnyzKyT5DWwp",
  "key11": "4BMxdEoMjZfHtyBCGQasGFqc5Jr2u19TdeARQ74mG7aeZouTmUmpkxPJ7RYevvLPbumn2XbWh7ujwEPwJ6uPyRdU",
  "key12": "5KJVr9AUXdboRa9N7ytC3DeHjASXkUF12Jb8UyH9YCZrViEPYYxxoe9RQdCmYshKJcX5k91jrdcd2p3ZnRwdgPZm",
  "key13": "5Lmp3bd5BXDNWCSdaZDn7L2V27H4dkGkDfNGPH8Y2tyEctL2RTwTtftbKLX9Z5MDzZU5DywZDZRVcMjyiUTpnjqq",
  "key14": "2mYWHMP4dkieR59Gcunh5frDzPXXbm1wJXJAFTWbTkecYtTU32Lb5yCRvcZ59Tmf9RiRf95P42vSjGwn5myB6a8t",
  "key15": "uhDPUwLBcdRZAvoXdoBho4rGrDT62LsDqHxwvR3hPZoe2zVRFmi2W4Run8VqCrC9pDegpva9JhTZXkoebQd5B4t",
  "key16": "3tocKyG9BaFTw2kXByJ54VaNAFDeEmGQ27iCRb4qb3SD3M5vQsjAGp4ZK3sTVPZofzYZGHsydCeZ8VdsWLsN8nbs",
  "key17": "2u6hgxgsC5LEuPNtJEQYfD3mN4w4uRXLQ71VRCgeUy8PiK8Pw9uPrKSmAMph7CY6M7Xvv5gQNfyWGRXrefmsv84H",
  "key18": "46Hj2wK9x6XTNzfKdK5dv52y812CgRsLXnELid54YZzPz4mTUxxGGNeMaYt91bDwKdRzNB6Cz4CMrpxDXZ2pWTNx",
  "key19": "2uRJbebnPrCXHKdA1Ta97XhYfPHZ4y49vbfDQXRd7s4Kdw83VPWvYhRprfMw6cMgnzU5xue3jfrAEogzmP83ZaFz",
  "key20": "2q5NTEZ5izTj8NZ443JbV3a1qAEBGN8T2ZP8zBrpgR939SXEphzaXeUw5XBBPKMXib7qLpg9iQctsMwyAMpCz5Ls",
  "key21": "2xV9WnRpczD3LKtH7Xv2eoKB1aQMWiCkf1AQEKxnwpP6RpmWsSTuL6YFQTdpVah91cEEoKivSvdvXjZg3rtgJen4",
  "key22": "3S3AN6gdF5ABPKYDMcJdntW9BzUUXPiS4BuZVQHYpdAgTQf2oNK6JNALNkyEvfKia8NKYE4Ww6SK9JdnxeayqUB3",
  "key23": "2Q3doCngCQvtzHoyE1okiYfVA2nhGDptgXkuLmRA6YUQqB6Ld11cGr8N6kuGrGXYrDkKKviET7kbvYPpwKu5keoa",
  "key24": "67BjBmqhdLxo5MaycHLaQCvCDFZ1ovhHH2omwbmVYNT7JcAjG8Z9Vd2dgqGSQvNdvh4mREHMSL577psXSjVne7iN",
  "key25": "bLZATgRaDV5xCooLQMAGKWvMdgSm1CHTTuWf73aTEkzdsQCYErHcdytoJyT3GrJeVk3f92sJizkHf6BMpof3ojE",
  "key26": "nCtHv9T6Hpbzw9JW1vjM6qnFCALd3rThng1qbb9r8C5ZjR5WhAHBftc5pZ2WbnEHcsoBs6FQ4HMEDuBsURo6sSF",
  "key27": "5tvBCWkJe9oXtqxyazWvnAc1nedV4d8c4v4yddfvMf9MRv8f7BjLeCZ677xbNqiF7pc6UGRsTdz1J9DYxnXrdBBc",
  "key28": "2fdRLyMGoY15HTVu5pzbZkY5UhWsnw6JUqo83GZee9gKQ6X4of7M28Ztnsig8hsM82QZUCVBZfPd8XaDkjSiWV4X",
  "key29": "5dAWPpMDxiE5KKFutrAq7fTaDXjSP1abCXC4pzqQPWLzVcdsf8vqUN5kczKbshiZmmGHq3DnWsgEQc3sAYhf2zjW",
  "key30": "2X5MAVC9vKXemiRMRnS5QLMenhJcWWbFkZjxRe2wjeWjB3tdQDvyabgnjHKoLybSeSwxpQF9hLx6eLs8QzvuTbwv",
  "key31": "4YVprMkGyPi8pKamXHWfJiBxdqRMNUjeUxK9Pbqw44gzsasMFRpiD1uTDjQAsDauVaL3QjefnkqGHpSMyJ8iWgvV",
  "key32": "36Jhw5n4NEqY1QycZitQKjp5mRQyM7GYfasfNrXZwWjgXW6dvDL5XqHng8GpYB1SzCcasMQ3NjUCHJC5iiSGRbi9",
  "key33": "ay9M8XkBQR7KZaceT8a9GnR1kx8sJHkBa1jXJFnJBi66HLwpaF3ZZrC9c5FuRZeuM44nv3tqntd14kFbMWuV5m7",
  "key34": "3G6ZtMZ76S87arFXFwvijxCkavh2mLW7P4nooXaErKh2wSEAsALuWn7JtdHLzF4Ndt1YNuR6q4Yidnik7FMoM3xE",
  "key35": "D5btGWdMTZiADqztRr2Xo4W9W5R5FgFhWgcZck6kM4YS8LHjvS3oKUnrozdT89aaHTeFkDsHUhrvS4bdbmPq3Q3",
  "key36": "dfoKGY7ofTM1hPdqbBsmprmqXbN9ZgWh1kV1bynicxKgGrDtJDHZyTZTH3jSgYBAGoXcqjJsw7i7LZHkZmVyRgf",
  "key37": "FzT4ro4X82S6KuB51rqzRh7hn3dy8ARBg4UTKpK9EzDxLfLXcAYRK2Kftof4NQrdcbstbnLZak17XmZK3FHdxuT",
  "key38": "4PektpHZRD7PUNNQnyw2Awm9LBwr18HkU3Zj2ZLBHrCSVsRZE5qC3qWUqTdGbDe6PXSPVaUP6GaQ72x4cxSjBE53",
  "key39": "425kV7AvB14m6vrxf1BGPGE6Fc5aRZEhcS2JBPp767wbtKYeoh5gWpb9Sx1yffHvBt8GQw1u6ivoWyiYtMhS83Kr",
  "key40": "2dPpft4Zs27sfMTvbCQcCQeSfSiYcpq8AvEtHoPQZsnQgSx7t2VPW7UwXZyGjwATYaWs6L4iF4jQY5Jb5d5z2eGG",
  "key41": "GMoSqy9cHQHDvqMcF2giaXE8dz9x9VpqnzY4Jo3E1yuCxBtCqLxG7iyzFu21kfKt8ofRtpB5C2au4j9hSFXKFHn",
  "key42": "3fzwHFPfr3NAFLKYaJANYCdnNreiX4gTn69VSaK7ZW3RbHAt9j9HpPpAajubnXjPxcFWNrQ9codHxiVWVvoFBM8W",
  "key43": "5GGWo4CvVzt6GUSnFccdNagapDuqaD3x1mRUQyMbAafop9n7tKhjjynP83qgrPKFPMmSibpxFbxuo5oqszBogUdv",
  "key44": "JdnvEZMxNqbNG6cVXr2nArsmq4eWTXuCtP3dYx4EYotQasyvETm3XW2YKZgJGqiy9zndXSgxRgAWsPfeF4z7Un8",
  "key45": "5zdYrCrd3C3H3JzDFg88FKooaPWnLWPWXYanY3RGM9hxD24ayquZaZD3NrcjvNxxyDPGdiKShTzer7D4FN7mShUB",
  "key46": "2YBSozKVM3egM3XqLAVQp3xWtgxvtRo2jMJHHXZBPW7vnk7cUR1ZjSYbn6NeWGdZAkdy1BaVYNBCK3MucK2VRQa1",
  "key47": "5PhvX7jZS3RMDWd24fn2c3tqs38qoiq1BEbekLc4vz1wfmHdUCtia5SSZxyrDWHGtjzT2GS5sxPsTuUboritDg9k",
  "key48": "24bQrgXPVykyzaYsVv6qmVGHsgXkygadEqvo3D8aNwS3WZPC8uEgysivN4UymiKngV9UCo1nuhkAbhFJpCFy4tUH",
  "key49": "39To5jFUREPYeqYxwPFYkzWx64DpbwvyBNJ78gSSv5BY61pESikRagiKSLodLPsnkWh9CnRw1gDUunTL27habtTB"
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
