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
    "4FPBjNSbG4oEMPpxDAPgupFZM9xcFxUVzj5ooGq4XMJA2RNJH7iVHMGDkFMFHShbgR1rCXcJ1jkrsRtv1a7y7Fvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Z2htLqdfCgLaC1TAi7ERqayz1nbhbnevpwwp8S6SePvai53JQoqGmCwAxCWfx3DzqpSBahgenDeQycYQCbxA2a",
  "key1": "3CBywNKCpUytHLtNDMygCWtXcZKH72rmJSEC5YMPFYJUqZmDjtwQxva3oex2YgrLLLduVDFyeXbmCmuiBk6SjGv1",
  "key2": "UdXHZrzZr9jnhSVrYMoDY2spiwVrNkqwYgyBFqhMNzkHfhdGwUseREtWWtiw2DVQZBU6tqEzyVCWykDe4U6F4nJ",
  "key3": "GF196Uck2X3iDbTRGxASnZDS6ShH3rmvWTnkQczhv1bDEqLHXh1goCbrXHU6TZ4VxsfCFTFDkFv2M7VthrawPaB",
  "key4": "4AAHPzXVuMQgx2UrcmgMM3qTMY6DjZYuV4rWCyQKWJr5y9jxKt6nC2gNfCMj6EcwyiytRsvzwqKUDAD5c6KaSJkF",
  "key5": "5ynoeUD3RyGsR9PXXi6uvREAQb62rN8jJz4gv7PHtFDGiuMokdxG7gwHT6nmeAj2jYGwgoyxp9EbuEXTfcAnnUd",
  "key6": "524UtaimU8xGhnZd3UsT43KoMM4hbV7DP9UuCntQvWYMFxwcTqg8hfaSsmSiujRU1tqAL43hKe8yKmbDL3Q99vcu",
  "key7": "2Ug6bAYPr8zVUhDp6MUbkcLQ48dg3ynEJy3ZMEYywTTxCxY3ERex2Ps2K5Z2qVMjpmegDCeupEA1ud2sEzUd9yFb",
  "key8": "3gqMyDet8nBKDSsC7M2J56sUS7sPVy6t2cT2do4JG2tPFFGhqkJx3Hw31nn1wwBNgRwBNph1LJzvJjjPSrGtErK5",
  "key9": "2Xp1GZZuGwnP6dcDJfu4ux79pVk6Uf5n41abhsb8zLDSWNrRwpd3Ram3wiCSisCxsjXQ7f1EfmUTR7yyTuXfmtqt",
  "key10": "5U3BSX7PnXNVaCDXuWGXZuS4jA6BzzcfH84TKFB2guLi2amerYm1ckT9Rod5WZdtAknXM9nS6TjJrhWdfEP5vhNk",
  "key11": "59RoXMZNANweu8MoL7t6RFRQ8toK8cyPLajjRFDpDY6khrUL7LJQppabHwLRo65o1XkB7RQh9S7WeyAY4P3bX5HD",
  "key12": "5Cy2GPrK8pscLvtYFJwB2W8dPopYWLEaNxsMhZ3g8PRx17TohrUxpwkZK1H6m1id941idGrdxDwwwmJ48wRixLfw",
  "key13": "4VBEtA9GZSWEknxaqM1xHMuRh1xjjVzHLWvjrbRFo8QDAR2gpho7S66Aq2rnHeaKxpU6hqVe1Ma7eZnVRpkQBEZE",
  "key14": "4g1omYBkFr8r8GW9KcXvUs8ce2eoFuqnqakD3E6ohoKodiipMfzq2tQwrBX6gJCcNikvuxQeNKhTBN7FrNW2ACEV",
  "key15": "2mT2pgyrL39nRxtTqKXAvJbrNAUpcZYPZHtXCYa5vEKYz6qbRqtsnSWhTcgrVqPGcRYzKVvnuhRG3axyKGoiQNxk",
  "key16": "66gJSc7pZP5MtFVrRQMvrSYFBjuviH73PymDZ7hqbZdgZX6W4EQLo4g3Ujh1XhXgoP5uQDcvnTjWLK3UEvBcSwYJ",
  "key17": "5DUqcf7SKXEQJSUsrgpmbMBnQaxd6LLyufWvJcWsCSNvwgYBpCMitMAxVApqhkF3ZM4VSeA9DjouSfDZ8WXd3uNB",
  "key18": "2msJJFqirar2jSgU1LYyBEQEekBCesmLuQCcCNi9SH3nqcfNrMfVsHErQRqqED9rJzv5JkAVvPEvL4Xkkawrrz1K",
  "key19": "3vcf4PiLiWvxmmnPrnB1YPjbcdnau6rysaBxCHAhkdDuRNnbAjZBczJ1L8CymJRTZSV8UZsiFXDdBuWLw1ctrXGT",
  "key20": "3e3f9YiPFMFT7d9Fnwb4txT187veo3T1ENFyYNDy4TyhSoeRfSHkRNRD2J9wNaFsLbkiza9aVP6MaAkuhSyzc31B",
  "key21": "3MPuXoE3C7ZBjbhpp31PT81NG3sBy4GsvMM5tc64BU5pDRbCjj6YqsP5gPqiREoESmvoxVPQygw8HJpXqSy4ayC1",
  "key22": "2TZnyHdmhHBrPpPRyFGhDe2d3mbZGPr5L2RcawhwqD2WNutmMCXdyv182KZTvrtrXyh8urLZNYp87Hy7WL39SQHv",
  "key23": "egG8XcZvEb81JtW9N2tU83Nk153y8EKT7yqp8YbwNtQKiPrksSisweMVh3UbsdGihDT8yDB8bBaVjQ1hxpwwcZW",
  "key24": "5ozvueVKN7u3L3exTrYjnUxcc9MRBNzvLxprtpfsKNFdrcsPfqWpXQsyWxQZNTBoBzKVk1g1HhAoU2BRfVAd6Dn9",
  "key25": "2Y8QFdi5wupsao6G2BjZdNqPbuNnkXP4Jg63ua3fpajy6VaZPtByWKRBz7vSQFBfYj3NPhBH24vyyX9jnBznBNAG",
  "key26": "3j3BFGWqEZeYLFcq2pf4unwE66iroi6Q4qz3UCAAqas8cTin52V2bPcZmsAVAq22Jyfryi6C9LXjEWjArMfF7tDA",
  "key27": "2X3EM23NrrNqdeYCv19R7RRwL1JzuCka9EYXSTFptfcxz4ToB9nzCQMDJX3333z2rUiZYQMcEf3eKwp2kMAxApuQ",
  "key28": "5w1R2aeaXeADXQfoMGJTopUfFKapzMvjccfSBLs8QrtheuSLAGmikKozbU3npqXyDua5wn39h1v6sA8z8otCuAh2",
  "key29": "zm9buqK6kAcA9AFrbSzbjzwAQZkaGp71F5R3EepDRfQToGGCYrWMneQYbwnfeCf7JWHf8pRcDijFFGNJPiMF9XF",
  "key30": "5MBtTpimPoYERPYjePzvAhpUhgsnMzfCJVSBgRUdgaiBbqYGFZxCF3LBSL8qkaUJsvamf4zGU4mAfv7oas3GUhaA"
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
