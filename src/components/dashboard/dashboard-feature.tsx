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
    "3VeMe6sTxsSrMkgMj98Vy6ERHrZFNe2fohXgQihxVxqDuUpimVBN1PQqgbPDZDf977Fu3czZZwCginJr3AVXQS4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AV5jAyr7j2EcW6hUA7SKxrip7iXzJqcepN6jqDPXPmmoBQ98RUtQw2Wp8hoJQBGvUC1S5e1o1EesR4SnukYHXC7",
  "key1": "56vjua4rqx9d5Sqvx3Yx8URtXMS4jT5JQoJpC5S95KvrGzoNzdxSRikDZWbbB21R7MKs4w6hd74DGzBtjpxheLoa",
  "key2": "5MWtAEipBNmtmYoxtPD5VM9D7Dhj8JHGh12boxcHaeSZGgxZDsHB366h3zHBQDqXSgLuGcd5omwfh1asZYSyAmez",
  "key3": "2guYYJz38dyMKbX7omGNzunX62zf2J2KcUCX2qiVzUScZxxDMzqKnc51N3J97dHaARcwu4myu9fujbxDG4hvSzFk",
  "key4": "32rVRG1EYJcvGv4c9SthL69bSnCmQGuBaWpQa16bbGwVqSqUBgJ9xE7YEuZ2u3Wa9eC9CnCf6cax5p6tsudpF2Fn",
  "key5": "34gMJ1iWqHCMATizdg68YQiKYQ2MTjPubkcB7xuR3o9TSvWEd7kbUMpP849ojfG3Tt8A4zpVaFE1LBmGfbeUYSVc",
  "key6": "544gnHxrStLqCdrPh7nnUAY4r7zojbPWobHY4FVXDPhqjHRCDUBtmrEz3rDUT7yaNYF976QQ3AL8WFRYm4J489DN",
  "key7": "DhhLjYgkkSEqorzRtqPkgxhfhQUM3jg5knw7qXtourNdkrnXgLGHtRz9EusuoW9fd9k7KZ29oFnSbv6bPRSRLNQ",
  "key8": "ChzUHX2RgiqcRgvaw769rvZ8ysWgqpN4MkjbYLD9xAVkWu9QMLYSeRo6WV9wpBQuokG4Kw2GzczHdZWR2x7VNpi",
  "key9": "5MsJ3gPA12iRMMGdaexmf5oKt47yV7opEXDh5D99qR1X2AQB7E1A1LgMRYzGdXKeViUH7QLcDhbRFxMHFw6Eod4L",
  "key10": "5QYCPa5WGUJYhEjxwTnpLJxdE2est96iNCEYSAFgyc5NrQYWw5ZzcLhguRqJKRJXGeBgUb5FaVjTsFjqkQZ5qHv2",
  "key11": "3tM4anLvW3NFq72kqZPRUpTtFibcuktwGiBkkao5fPoLooZaQwBpC5Vpnyq4WZG2sZnm3fh2AVXL6rkrWgtFpj5m",
  "key12": "3eGieocJJGrbSwg4QrN5ugywQti9bcfPTYwqxQJ3uKtsCGyDDRZtJWiMKv7zcTnWtDFoKESGzqaCVFe26Jcg3sLn",
  "key13": "62B2yhvUga2KKtniq9tPwWh4e9LmZt8ckSm63qj4gQd1nC1k2WKo5YArbohSTSt8KmzKHRLdW7V6ReTFpXXri4bP",
  "key14": "66Z6Lvpa6iDLU9hp7ezZX8RT99C3gBr8tt7mgpwr66pT89ycBHyPdromD3BfYahGUiyW6wDFEuVUxwFBCwzCefyi",
  "key15": "29GYqfyrgU3ew1donjAS8mKXULLrNfaX47W137DDkV9cc81Uwp3Vw97ka2DrFzCCDwHyixvRxExpzZJU4PG8wkB9",
  "key16": "3wvSgPNndXbiuxe8K8o6p6pD73dbJ53iZsvh3McFt9J5fAkyAvtVne3UquuXWwjgL8SxLzfMCmDQKn686c771cva",
  "key17": "61Bwtpema6JfAfHm6GfujaKEagfS9YsGZbzijzqXLALyjuzZr9oZ6HpZDKH2Fr5dqPHMLfE1fUQUV7rVrbTCPYUE",
  "key18": "5BFezXXAL1DJTFx1zpUzQ8eyisVEDTJF8cGWpu77J79WM9zVCS4hYxt7AfB3gyRLURfyfzDcjKjRhZzCeiu9eC5",
  "key19": "4vmeeyDXqzGgdekDPZBaHG8g36ETWFzQvmwBZ8ont4eYnHT3Lus9rL5Rf4Tmx2Gi6Su43sJJU7ENcjzpmE4xhRms",
  "key20": "2gRb2VydwLxSxF1bjhNmNaQ6E9yDTRx4B5fqWGATLjf7RsJrTDVJ8fpEyim8WHkLTDtCBxVcKBbPQ6BBUnfd3HZD",
  "key21": "2GmwgLvbepSnkstcaF9gMGG6z4699ddTaaHNwySu9RtSpo7bbiKTxQVXYkN2pY6vfSbLvn2UCTXhbKpCeLupL2h2",
  "key22": "4Nqdz7KhMNLRP9wt4oQqqNZLHmxyCg7CXSzMEXvVFn2AhSdVEzws66Lb1m35kJPqtkbmFY8RYn9hi9sGef7qbYqk",
  "key23": "5ZQa6n3cFUoSPZ1htKGfva11uG6ibSHjfbjLgKm5EoMVLvSeFcDSDE1Jfh2hfUfPT7zr4Wmzp6HTSGqbYo6rqgGM",
  "key24": "62K8iLJdAVEWgj7jE1mN2Rzyo5RQP1UERyqciekdcvERhsKAtKQagkRyPKcEc7cvqLpLwjEXwXdsZZoaBu6TvJ34",
  "key25": "cbBKq5NmpT55cD1AN2tKRMdWPkjZTn4REVw29aCFNU2xSVLJ2A4qhEi9u4ZDS1qk6Njp1atJho6X1zYwYcKeuFw",
  "key26": "4UxP5nPHAjiG4uncoKsyQrZKMjTNxzURzLxh38W4hFzMQWv7NBouUXJXMJjF33adQgkCogPjcGa1g1Uevi7weCKC",
  "key27": "2P7xfJhGpoDe29Y7AzhQAMJwJ2pMgg1TDipkb1fju9CC4ANtv79PT4XZBCkiEKSaCnAPSyCBq43UXa5yTo88GKKA",
  "key28": "2vbH5vhDnzUJhVKbvZaD3oGjKm8XKPsY5VmTkBUfcnXUPaaHVBbWptwJo2uQCraU8k24uK64Npw446xLLoVvxNAr",
  "key29": "4FZyVSQBqwZ5Br8X6U18xoN5wZaAiXXEd3Cbm6LbqDBQoanaXhGut6JS36iU4GFt9gGFY1XjwKCzqnsLrZWpHecP"
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
