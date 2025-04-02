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
    "5JVTvaFBMP9xEqv1bbJevSfESjVoVWEES9oiERsh7VVJSRjQFA2RsGFJ5yFhLTGYUd7L8K1T2aSr7XK1R9cBo8eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAemtVGWfsrZRqkPqKqFPiyQUv223wjEcigejT4qrSi52JSnFx8XLF7zE6DKe1f1PfcPBDUpmsAvh7DJfepvhE8",
  "key1": "2kzhjNvtY2eAA6qSTzpsnnr4pvZAFBwZj8bk4kgtBqiwLPhamRqRrEyCBZoiP2obxvDVLSFkgtaBkVwPghDgeG7Z",
  "key2": "515fyhLumzu9ChfxQ9BYYDg6WwfREVmDU9PkFh1gKBrMkpXWJfdgjULCbkPzv7iWvWrA4dGUC5aYJnRdyZ9xcSoC",
  "key3": "4baSFy58XownuenRQEv6FPawxLLJguVw3Nm7zFsXMUJVjtbHjLk25GQPqki2EPLaMg8J6akD2XanGi6j8ussFsWp",
  "key4": "2rNqWmesR32BhXpyEkTZexJpxbun55GiEeG96WVWyVTJPsECqWAmd96Xn63XSGvQBm9975gwcmNMtpqia4SRxn5r",
  "key5": "2P342tkvtCTAZ1ddtBNwYgfv3qi2fzUXH3kGWsEf4m9BXoTDLBRqDQDd5UPq66e5Gys6TbqzQLeW5qdzxFPV9hTf",
  "key6": "5T1SNCvGghvgURQgwM9wgv6Hnk3PxuRQjrRGtZxJMTLKiF3xMFkYTgHJiMnMUsTJ8Bdubvrn18p3Hh6iHty3ZyhM",
  "key7": "4PSK32zC14kLZoebvfWTyv3RzEJoebfj95Aqy3nbTGpzRoZpJZaEsx9s1drMY1Pnoq2BeWPE3j9oAuhxgu8HJ1HV",
  "key8": "2hWGABnvGWX7TzqCEKXbjKFeq2PYWiXvsWSJxjTVHoB98DdGaJYXbpyhiWm3BmsJyT6xU3QdoF5tzLVXjGhioF8c",
  "key9": "4WLGyHKSeG3CqEJTzF7QWxxb394JqxubgbnytZvNyDqLXuTG2va9Da2vZtNWMUvDyhrLwjavWZ1KAd5m6cdnHMX1",
  "key10": "2JqUTnaqbMuNo2sByqydnn2B4pH1SMbNQt2fns6UrciaZydpS512H7v3pAtLR16gttUk3c4mHRUhECaM5z2s8R4v",
  "key11": "RikoqiZdRETBK7FuSW6ieGx9mBGdYwztqYmN6jcg76JrqiAqLrNBkkykaq4LyKv65BNjswVx5pz667qtjtrcqwd",
  "key12": "4kW5E8TPCHXiDQ1NErc9jubTCx2Ee7sZiHVbgbYkJ3P95oX9iAC3HVeBcVTaSgQaLhyhB9gosnBbgpmmfr6HpR5V",
  "key13": "3S8b5L7nRVj9XDREdxmnYseRHTDcx35HcK2CPz6jwCW7miL3EXq5R7NkctatKVePtTipubJeovgrMcRwNPADmfRR",
  "key14": "2S9xA422myCnY2awxu9PdAywVd7DU3b9dZBi3cHo51MSp9PptXGu2o9cSdW9RoNy4DPZUgo1iBL1rnxFCeW9sAJL",
  "key15": "3bXk6g3jmK8938SiRnmw1x9MgfjPxCdiCbCFeDuDoQtPob9RQqPTQShw3QoHyjq7VCVSEeveLzdxWu67UeqDKanN",
  "key16": "GSwEeUtjZjauCWwycRVLBAWkc4VravZ7XWjBHJ35qQgkfDWMurPvBxH5ebKy3sttivptNiYB8yf9euMzeVMj3or",
  "key17": "2pxCN2DsoHdUgQK8aYnu3n5Fwi5Y9p8Q6WJrZE8pi6rXEjN9bMcv9jNH1Y5MRLt1Vug16jD54auMcy8ahgcAUKFq",
  "key18": "4iNQnVD7QfitTgJxdog8ehgnxV8njL6zxQJEQaXVhsqZ4ZG8jwnt4C5ny5v3QVrJC3L1CkAB9Z4fzEBX3ii5BgrR",
  "key19": "3tqQfjqsuJyYRJb2n1Ua5oxkG9rXjGVqnWwTekWkpm1o5J78xiPozhHLsMZd7F2SJE9LPgRxuh7DLyZgb6jwoNr",
  "key20": "5LbJeT9snb9A99F7FpKC7wL8CDqwVrFrb5BMpb4QCqUNehLcEaDc4DLtmsgZ9XCqxEBrjVPFrFiXRJLEwQFcVh7m",
  "key21": "24YPheUqTssefrF8gxPKMjCKfD6CPhUPG9dAfooNASdkXNu3C7s8PQGb4175Pf22bAoQmzHtfPYdJhLyeGEYv7e6",
  "key22": "2YgaewPzXgyCUpprJk7i1VTDST7a7efpUyoHsDoGkPQtFkztj1mnv34p5jSH9ygWBCDckwr2E48ee3yWMje4SxR7",
  "key23": "UvKRvB4LCvPPet3aWo7CMBQyyk9NgqZqCwVaQHvCJVyV1VXjWMeTt95Dib8ofYkSzj8YYcuzmoh4fSzKaXhY47f",
  "key24": "2rnmauYMcKvPLDFR1Aeo3oPws8QgNckwJRTV3onbwh4DV6vnQoPH9WiM5n2y9k8WvrPtZAPW3JkWEkTbkFnELhBu",
  "key25": "5qJ23gCkcmefVoZqyJjpLbTA2dGNRUsXBvpsC6s1PasXigKLrgZzNDX6G6gRFU6geinmPXcUCVrwDLETi1XeMNZV",
  "key26": "3vpmTJzUXd6h6p3uRZvJBbYKhZnGgMvyaiUe4ZqHeqtUQcJjVtU9dn59FFe3WgUjFLakz4BmKMWktnBfzAsf7PLY",
  "key27": "VHyQan5dW2VpYMRRcrJQ2q2xSB8cR8dMT1rNEbTHjoePDNKyaZt73gFtsNApRnY3LHLJV6mB3hgsAFbpypzqr77",
  "key28": "4H4DfRKdEnfF5xpPwTajyL3EphGvcBR9jEEonuXR8cNNGDFU1WEkXQPkLeuTrATmVBjrZsouwycuGBzxyMECM2xN",
  "key29": "5i3c6MkQmg49Q5fYxKoTUk7kCVFCBoVDvf7K2L5VJVvp44DhXrUb5Y1ieGQDKjtJG9g64vm5sC84VZpCT8HktKNg",
  "key30": "5xrK5zkJDXXdM3Nk2fkT1UNqtt2UGqFZNH65makEo9a9Th3kmKFpLmhuShFyv1ydrs41NcdHn4xrXZkjKdNSoJ53",
  "key31": "TQtpG3KQDNXmrXn95c7rinPYX8MYi99WLwuN6bvrfp7LXtxSRDz9AZQmLT2k812LzmdKdb8GydjPwptA2AZH2SZ",
  "key32": "TJneUyQKfLKvAJw2D2nsoVj5pC81kJ9XRB45MmSZkjo9xUtba96pxNbfoecVfLCm5khocUfZ8HWCG5KHZVoqLhs",
  "key33": "3MVWs4SDnn2dRX9U3Y5ssf8n2TgSGTxvjhuHsfRCtxbdHFkEnkjiwdTZdB1XhF1WNs1ivEGAXubAEfsz1beqFqQF",
  "key34": "2zPgKKgrpB5rYN6mpfGoSpKwProm9HHnJEGRGNQ73iKMuFENz1kgDVqH9N6kKqPYWutKfUF1hza1VFexnJiPHHgr",
  "key35": "47tJ5Uk6MLwBEdsdaYhikQzUkDMopoEeFW8jeV9VUwG43cS5R4fYzC639re2yCBuumxEByaa5yu3F1VruFDEq3Qq",
  "key36": "3qG5k7qDzoLf57hXfW8EXksPZ1weZo6J66YXwY6cZYiVfjKGjZK7CvwzxrA7YjcUWPYitLufp1bZ3Z1Kjacsxyy9",
  "key37": "5gGQwemZsxoopFtTqL2odEo7ebvBGhPCup6g97ES4ayM3pgvGZM4jC3Dj6Vu81mww6EVz4pL3dPRYNuxqcsm93RY",
  "key38": "5Kwq2FiygZv2E8RYSz4edMbbvn12fUaGhKUnNr1PxBbU5RNgmWWUMeADDZr7fr8LuUrFkupDSXoWZH7mnGL1QoyZ"
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
