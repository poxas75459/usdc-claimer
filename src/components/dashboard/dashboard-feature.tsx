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
    "4XvPDQQxvkcjrugvfeY9vZFHxc5BgkeacRpxoy7JihfPNbFXVPKzFMJo6FrovAquHZb46VjHGHU48demCiXrs54k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YH6p2xC6eQGxthRvrZzk3YvcuRafFYBZTtATMxxBVpCS8zUV12ThfPxQgxJesrXsyLHGaxhtyzJHz4orEXpeJMV",
  "key1": "UFce8TSvDK4fxxHBZEm6wXx3sBqPTshDj7KDqifZRTFiL33U4jppi8QFkxM7Hmm139AfGbY547fPjYPsu8pAvUN",
  "key2": "2F7LNcDZ3Xuo5dCZvDcYYBFnze2MWZD4w3Kh9WV4869UG7nLqxYBeyc2nY7e2SD2eawas2UTGFcErBEr8NzQH2DG",
  "key3": "FrzGzHSAHDSQ5RXaVNhZQCcmxuU13twgBYVpL287VQayA5r6j9mD7ZESSiiGzcbzPcVAcJVmPxRKHmDVSw3XPCJ",
  "key4": "3dMbGMK8HTsXQK7123UVoTzBVPeEL2oCfaLuxShUJsHXjypTDia9YeaEbjqtrHXAmXnYGuPKCvc9UMrbSQwvQthD",
  "key5": "3oz5wUfp8YTovhbi5gGeKEErbsdeDhcPqsLtH736KwWvXn2BqQ8pD15nTz4yJ3rmG4XizBGTTCwXB3iMeYL3yvjW",
  "key6": "3C8pRGdZMwxp4vgcUJK6irtpSTXXXyPciBznmjVRKoYZo1ogStuQEr5ckuBhbXSgymxf3wMPVpbMDWTbmVC3h57J",
  "key7": "63mqZbsU7TTWP9ztUGKNDaNztahKNohgnTwFVpjDSsh6Tg1zMosPfNH9JDnQmvsW2JTHTYnECTQqJk5CNmVt3aBK",
  "key8": "5EuYNdKtWZB9BWE3b446kFuw92fdJKXPqcawxf2kETHHW11R8Tnaz3MwytzMyNAMHa7Y8aobPW3BKQ65K9PL1FKu",
  "key9": "4EUcgckYbZ5NwbNAyTycrdnVbUQYgV71vo7bGo7UBWRZsr9xa9YE6sE6YjEcJSHPJxhDN15SDxBwiEGGuUQpUrH",
  "key10": "48dUpq4ezWNKM2tPA4CJwBiSf63LXztBejrgQg4xg9nw5WjrATft16wqUNi5W76Kp46T6DKeN5bb9WF3JTHBeRiZ",
  "key11": "5a8wqz6DHNYVaw449ZcY6UcQEtdnRJLTRPTZLSDofQsxf3Ervp3GiNyq7mpGeBaFfnxzTvAgHvP5nNzVmQUujxwt",
  "key12": "5z3KrsM1btQVgA4ntcN1vR7SQDxDPwXSjTfwCvTCAtQFt33ouQ9LUNCsQdkboKczySCWsvVebeXDbDkbjcSYqj4D",
  "key13": "3R1JJQDF8yH4Hyvz4TTMTYRoBurh4DUhfXbsebLu9dyEd33pPRatCrnAfBn68r2yDu1DcGZcgRf1q344PpXMiPyL",
  "key14": "5QQPADPvisgJHfq7zMr7Hhw7sXGANmXHmYFHVJrvfdSGBaPNQpvZmGFYwSG6FbvTPpwjJq9xZPio1yJbHH5kfpPA",
  "key15": "8PQhtW8QL8fB4f4U49zumwGRiz8RNGwPstS8amNFfTqaXiTUF3tU7iPrC7cP1QtSdtBmy9y5hQ1TxcnJ5QZWGGm",
  "key16": "4iBPxMNjUpthuvopbpjJYJ3F2hMLVJi1skypkYWw7v9jg3na2yxQHgw34hmhgrsRw7mg6swnhidPNFiZq2MN4Tfb",
  "key17": "3Hzd2PuFUnsCWsRNSjfnx5bUwCCQ2qfQs69uDvib2956CBnD7iBT8Hy3sTVUS5jy7Bos8AN2NiXtkciGp2NXh9Ej",
  "key18": "3r6gWaTQwHXXrcuoDEJ4YTtcNiCDF2vxhDW3P49JNXvzadJUEbyKx9NxMwKxWe23dEXyBuXWiSfzR9M6a6P55k7Q",
  "key19": "2kGSfzpp4EDb6dM9aJ1asP3jYVV13qjKdjcRcUCRW9QJBbFSrXhFj1RRaf8jJK1eBDUTgdLVoQxiFZ92C5eEQsFE",
  "key20": "3Y2bF9xJXUBv7Q9jTejK51xVorA3nSFQfWYmmcxg6nGieycpMzJb9zxSAahW4Mp4EdFqCzDnRwq5YiQpoGi2kQ7A",
  "key21": "3Ks6iGZ9YzQEWhJYfmLBvMnXk2z17hoDDy3skRfwbjdqU6efH4vpHP9L9Z3YcH852L5nSPTZRmWZ3i3sX4QBTyR3",
  "key22": "4CYLgFbvq3zsGAYphx9EbAkoFRutV3o8qegnPjQ6UxRiBEaUQUW12cxhXTGn6bNyxN1jVaKYgWQkNGzX5SCf757W",
  "key23": "44imzTUDqFjNhDrwVWrFKq2iR6baVBdpDBzhE9x2afLNKm1rVuNhtaMNFwsp5qVAckxPLXrHzSBN7u4wjhshLDV1",
  "key24": "3NQ5jL6L7hxrdydpugEiAZHgYiMAgax5t2qHRfXM6PS6LKeEPPVLcxdpb8eBNw3hjD2ptRjTd4CmakMBKgiig5P5",
  "key25": "2Q3WhrHhABCMvB2YBXyu1Zsc4NsQhQz7PiKVyf3kxEGgPjURXdwRoKYNEKzBHHbZqPoCC22nwE1T7nbbKfe9qZbL",
  "key26": "3ptYxidQnamxr5wjhocAJ8MBzWsxXiRr27TXVzgB22TSiSxmisJpw5kMfXcGmkST3XwXNiXvWjMjUFLavwyG6Ac5",
  "key27": "HaCdAncfTBhBHSxjQYAn5UJS257L5GwyqyJkEPEskEU5SH2zdPAobkUjp3vMW6DZcMamLGs9KboHBZFBzn8jEiW",
  "key28": "44Ro8PkyKbtEHr7vXsJkQkbsJYL5fg9gcKsvX44J25rr3XtGPaaTvxKdPn4W653bfwCkQFaf6CheVNz5h3ksusH",
  "key29": "411qBNK8u1ujvcZi3SHKtQbCJTG4SEd9P9XsByZXCcw6o6LvCr4bVkV9AsFqALVWLXTuaE2VnMTP5dgAkRvVPZuo",
  "key30": "4uQH1TYqCSrNJwQpMHyex1eERhspCGfYCc2aFj2UD6ELtJuLaJL3zMwxcKFCZTQ1ffYt6S8iasRHe2K5d8p51k9A",
  "key31": "4tNpVwCwH4v74ExiWG7hBJLA8AFEPkH5sZ6A195coJ5tUvYR2b9seb6A7yi3qAhB1Dh65oCgVWqAzQJr6uqjFkHt",
  "key32": "QsG2kSciZCXDXRNZwdqBHetEeR4KTAdeJdASmG5ZCFvDKQnGsB33LwXYLLA3mGrUwVcir8ixPxU4XPHK1ZzJypo",
  "key33": "cshxDHYAyaenZHszAaTX45QcUafygAnnjcaQ8B5CD1BfvXiz5uYVD3HDomx1q336Q8SmU6qWPE7KB2c9Byp2aCV",
  "key34": "4rXqwyftqUfj3sW1wqpJ2VtBuh5m2259dJ1eD863dYzrG6zmMupFJMcd4Brmrk7zYTvG5C8BA7uYbon5XjsKpbcN",
  "key35": "3HywyRXmYys9qyeFfdUT1kZWVZhiqyUUoDxM53jXUUdq4nqEC8nzP8NP8sudLRWpCgx7CFKk7kp4Mg8M5itKBcwS",
  "key36": "2ysP9yow1y8a7TnwCHK9cN69EMpTSfgWpTQkej1H2ym1AKpbHUy4aJS6YgQk2yVAmA7qcJVm8Cti3RoX1D23ZGWW",
  "key37": "4CGuMX79eWyNoDhdrkRpPiQ8KTQXvZ1FheFupdNqPNnSeLp9iFfszki6cEuEJqFnyMY7YLqrCRDViST19nutARSm",
  "key38": "4deDcz15uCwQsu4eXCGThgjpjaCXj2mpa8AknK6Hiu5q8QHLKzvkyDfyx4Y1x7SbLFxBaQULXedyLbJ2Fqc4iqQm",
  "key39": "425DRpzhQDd21hdBtU3qWHM6Lw6R5hA818mKg7fkx6p58hDkCv7ajP6Nf5hefUqM3vbNw7uXws7KVWNS5YXbPyMT",
  "key40": "5ok6eZ2pjyUQgQG8QHXrvXmQo7uNcKEzo9Cym71tZ8duLwCAhYBuXPJy55a2S93PdfD4QqNaHGgoZKiPhqWrVQ8F",
  "key41": "5sTZrPx8grvxDRiRgTj8ZVrwmYpBaCt3DCKzHQFZY4VTeABWBTt2K5P1FK2GAgkezYM3MigVUEs6H3DrP5SoH9kz",
  "key42": "3BkwVdN8tz5WP5w2h5EDhF8iopAHTddNHJRFADgUoKHV9EZM52XvecAWFoqHG51XcDecmKQ7KeU1PFfbLhB1Xmyy",
  "key43": "5sipYKnMiEbwoWJoqkdrPq9ac793iQ8HWB6QBFEGQKVHeYmbYgEkRWQCcfdWCEFw4QnxJXKAei3659A4tQ87tCpy",
  "key44": "55A13rrTybXewd47Sy35qpvFDXEhxjK9HZkZ2p4PxArqbUyepXXngdiQLk2gHWjDjAUxN6xjuFnoG1mMZLpcjTKj"
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
