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
    "5fkobmefYCo3TAjHszb2dxS6cZnEfmtwFaJ1JSrFxoiKrtkUYqwBfa4qLnPofFfFCVtnMqoRKgWdFvG2jtFA3BKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifMfRGUHLJnNPMAUGSxrCWBUDjWADEpYGbafZ4q2FZdcBYS6kjYvEszsARUJ7LSRvnMo6kjtGDBnRTtH2Ac3BqC",
  "key1": "3UhLmWFiM1GbUPXtsmxSiT4YBvH9aXU3ssp6tqwiyx1XZqpAWDNwiUgUx9HsyxEfPXoPCfDudwkpRi4LGNNzZxER",
  "key2": "3tEsYUkhiXMTJy1mp7p5cryebzF5F3AgvheRDRMd8cVngqmexTp7yciAQLatZWBnYACpiy2aBY9NzE5Gtq5mk3Du",
  "key3": "61Wn4uDJndSuuVyFyBNXJaJcuZaVNhSQbDPKS5oRfnY8BghvfCFqu5KNLKs1doBhmd1Upaz9k4WUshkQSLTaFNCa",
  "key4": "2EuknyDdornzsdX67FzX4i6ed2m2mTMm1KjANWhtBAXfdRHFzpT7i2TWMYKdU4bvzsPYHSubimBf3tufCU1qwNUw",
  "key5": "2HeeJbe97TZb8LMBpLBJcoXxMAfWfEVcfB4SQQKt7LBK8nSBTGrj7926Km4RjkNjq2xy8Jcx5gQ8A46sAhgpFSim",
  "key6": "sqtkP923qPmf59rpJ732v7X8UHnQXo1W5zrtWCs9spFZxbEytGpmKpbbsdi4Zm7yip5QB4AvtyxCwD4KjbGaFPx",
  "key7": "4T9uT32D81YbQYNmAhyGh328ji7YXoBU7CvvUomrW8fVddfNrSVEYehxWGv2pHRrXReP3kUZzTJnJyGprhCzhTxs",
  "key8": "5u33gCWdYS7V6G6NfR8QBtkUyXscfPGNC1rjm9ckYAkQ4oY5MkAxeVxZ6Q3pfPNsj19nq5gXymB92JZ4DcjX8HL7",
  "key9": "FVe2LM9bYf5BD7nfCanRL8a3DVXhEQiVRKY85Uzsa29WjekFmzVtWiVYbNbLqoswYk4TH3r5ynd5yc2rVtnnkYv",
  "key10": "2MD364PEbJ5jqJoHVCm55kWd6BLLn4dcVRCex5Qnbm9gh9jRX4HHj6h5KWfRCvMQc3TSPC4tm6ndYwep8yZCjj7n",
  "key11": "48NofWJc1VQn1FDUYLmHrzNdKxT2KJ4dn14swn2Xff5BZJyrYDqY6XPVQn1aHNyBTwMwD2PiDL9NHaEXJ8KrzYT5",
  "key12": "4v7UgWhM218MQ84xig6ApxsCuwZs556UohdpWKM8UWDR2MAWhGGC46pF4bBwo5bEUCCxUbJArbaRrVwUjjs98p7k",
  "key13": "2AqYUTmbDWFJTiYBW54k6DAWGYBck93QWdkCP5f1fVKRadqypdAyK7epk6gnbuopmQUBgTHy14m4ZBJkKHKoA6sW",
  "key14": "5NyureDSE4hz2BWrHBqXMgUBBwEiXSQp8HTJrThafvjxKrx89sw4MSYhjJjSdBmVmXZbXSoxff43FFpGunATgYVb",
  "key15": "KJMs4LjA4UwAHdi91HDfLfqXyYNAXWoZ5vGvo9U6cA7BTtUkwmtnZ2c5kFRBiHvdyLhRU9kvtrtpCqb62G1qSCP",
  "key16": "2ViFex1iSGNoBT7nd5xirymBa6V3b8qKTj6AR8PKn7PDkDKdbr5HWYptQWPqgRVjgQZCho7bAnXreB7TQZecRGuT",
  "key17": "2qHA7ACE1QPG8zrxKWqNp9J4MNZdi3uQhwdMRbmfN2jEd77b5p4FDKdfXg3RfgGriL6McV917iCyyMn3dTVdT4wv",
  "key18": "5Q5FBxGJ82ZjSTGVFWS8B8U4Jx7eBgUrzjuCuipqacRPgHQs5WTn858UvX4Vs1boeCnsvU4NQ3VCAaUdav3ij3V7",
  "key19": "3iw8LP3GHjQ9jfQp8s9QStK3exvwvoQnQBDCeeCGrChxf81KDUpfSqS4B3hiLb1rij4ZXEgi3DcB8JNJfx3uywSZ",
  "key20": "X1fEgRBtx8zW1rri9MRDuJUuLmm6P8BaCW8z2C1htWGnQ5qgqRoeXHWoM89ZnZZyHqrs9dcKxjqYkTDMPYZJQqe",
  "key21": "KWzg9u52CZW3kkNG94faFYUJ3wKXBQ8kzQQAdEjnhmFASRotAdTQLyx5dj1X1G4MV99W3L5szbVbL6rQaEwQ2ZJ",
  "key22": "35Da9EPioRBRcj5h8g1ZXt6K9LmCnx7kK72X4NNGE6L7qcjPFZxgisWeoTRzmhmm4guehxDb9NWrdsNBcVSSgQ4K",
  "key23": "4XcEH1vw5F9tGmynivq8rPZ9NTo3pK55s56azVfhYsLcBEfrGTZDCMzNnfk1DfexCchiyKDLG2FYEHUqebDLDtfY",
  "key24": "2Fm8XCA3NqYzAQv5Bb4rupFhXnpJxytVNdRLBdfCzHL4gEJn2MqqopDRAUSNLwMNsbvARcWWDaPVffubJSgTBZfP",
  "key25": "2QPjJdUqBNMGk2UMssu8xhSj7xVcbcUAtJMaZ7wypWJFDRZpLDRBK3VsJ33M1edq2HmHnNLNhKZhMWdLWAPXLPTp",
  "key26": "auGwK1MAMTbcbRuyCCGUQGeJhNUZYX8vTgRTk5C7yCn33qnT9Gb1Dei6TbpkFsaBr9X92ZWQiHaBdEfLM1UEFFQ",
  "key27": "jjp8XjAHptHXxFxK1FvQP3x8okGGp4ANjETaxK1hUS5Syfcamwt5DnUG8DpcV5h2e1kvCV5cWScQLPJUEUqDNDe",
  "key28": "5GVsdgyDMdzuzqWcerTkPEuMuEvFUy5xtskft9rW6uS7ri6NPRfpf9jz372pUPyAs7UQDnwCA9GNP6j3QB3NfLDk",
  "key29": "YpB9ioxuy7buPMcFDmxFK1jWumRvG3DG13d2owqMfXC2Y157Qiju3xsPPHknb5mbrVKnLrZEJDPWFbwDEnG9ViN",
  "key30": "aKkVWvUxnaL4xdoUGL3sTFR7P3qX1eoijwVdP6Q4C3svv5NJiyjfDa56u95bagf2p22bZbeMF4XFGnk645mbqqN",
  "key31": "5SmuxKkWGptopoMEchoYWc29zV3nTy11ZCuHwA7kzAZ9FudFHWhSPEGfj8jGjhg66haiZAvjESBwydcyCryTmEXu",
  "key32": "64YDKRwmNVQKrTnqNAVURJ5PYyT2vMJWXypVucJXtXMCH1PaaBGQ1eCoRmu6SyRVv2rbYVqmu8kG3R54Zy8MnRia",
  "key33": "2ufHSbSYUQm86qKPTkmBAoco5dpNA4PLmjG9QP5An5t9BYoJTZAKcg4e8GqoUeWPVjxcT7zxLTp2k7rTBn8YevKu"
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
