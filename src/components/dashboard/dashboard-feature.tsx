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
    "2Rf4u9spFK7MX4UusHs6qLwQYxbaR932DFcKsrsViusTe4eXkcm75rHqE5yo1McvoTmjDLJKX9Y6vWNnA29AyE7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9JEmDpkbeAJvs6csyR14rENPnmKsTEQGBUi7r6TYmMyWJ7DcpED2qib2KFP46wR1gErdoffyRzzrVZ7mqzaP8Az",
  "key1": "5Y8Np5p4JBzbK8rH3rW27e6Tb2i4tgnp7ugsXirWYg8yRjfxyJcmqZYuXyTsbjUokiH23iWo5g584FR4pBw7Zrz8",
  "key2": "34veWQRiiNZcMJHa4Gq47gj2EBQkSHzLbgMZZapZap1bLtsYSWEkwYs5uShW5M3J4Mo4sVGDvnwjzko9fcWnsoaN",
  "key3": "4kvLKZLQ6CbeXSXNCnV2nJiXhmZTFCyDNyY6AAXJD2snf2hSK5h9eQTFrLBhc54z8G9Nt4BUDyt9apzMhLA8uDK2",
  "key4": "7fKiu93hStkyhFLrkT7K7yPvd3dJ4FGUM2yCnU21uBq8qn3WtvZcyEWL2tXaoVDsLXBVpor7gzPrHifaZ6cWuHN",
  "key5": "2PxXpPXF3rmG6a7aKZeaGrxkWJGEgWk8z3eQ4nGy6DbFHPHhK9ck5rB4sErBNfX4W9tEewM7qRiRc7axD4yCPSC5",
  "key6": "isnR3w2QzuraTJjDaPyxfS3cBrxaPeBNazrrFSKdu1cvCQMyTBxLG5bJb2rpSjMfjjpqdbJgBedUfiEBzVh1fMU",
  "key7": "55onQ4kCxjgTYtKGCsqrbnXu4zrp28iVd6X4cippxpmCj2Ao9bQky12XwMAiVrMqcJeEGR2Zt8ybtRnVwBH3Keuj",
  "key8": "3NT3szDgsmPJx71ZGV8DnKBymmCUqpgPbseS2SDaHbrPvAdAHkShccP8f4PfVn67Hg3XH88pahY1T7Zz2ZKSFpDq",
  "key9": "5jJuJ3XUMXVBq3YrEQsyBGNcAribnuf2fveKbwTCrzwKgjR1jUUjkKFYPNkPEZ9PsCsn7rG7v9VKFuS2Dv2t8gGr",
  "key10": "3r8nihN4kGk22hoVCCbyBJR3MV6fMHahbP2yMEvao83PA5rarXNhwun9WK3QnYoKHqTQFGx8Yczsxi3gQii4xnm2",
  "key11": "H8ScX78qcVqCxsq7FA6HyxjPoQuUAtMACgiTEdToGhBJPLhuC7rTc15ggWaEGnRAyJDWe6NgPmnPr7d5rrbosok",
  "key12": "4VqF3K26QViZkJgBuQYb3y73dVZacZZThmFFnSz7Q3QG7Q2wnsMB3DUha4v4w6MZyycRZyRbsKEuR8yGRh9HwdXB",
  "key13": "61XURFCMk4ZT7f2xJhfLjHYXDGoojVRKeHpf1Rm2hdceTaSSqjydBhbgGgBSszkHZcBcRWbswKL1PkSvqfY71oju",
  "key14": "2vEgB75aZhEBduCoS3yWw56yAg3eZjKbUbE5Gc2PXXhj6cLMgUS6AFjnQuwPfYkTXnqwBmaz2SbU6YDxXgGhxVdL",
  "key15": "4wTA1rX2j2kqbc5CtC88zunMfQ3S4Y5sdDCfASEQLZ4h3CG6mBSqBxnFkxNFPizTrM2Sw5X76jajVUuaV5dD16bh",
  "key16": "58oFYXxz1BWatosdmuUYs3YTvWAkYT6poTsuhUJk6SGNJVaQRmtvZn1Dw4jHA1Hscqz1KLjKtaADFoUEFE3uXQVs",
  "key17": "2pFDwva9W1NJAHAZTXSRuGDaYrWCHvUtidfpJRkUxzdXAX11gNuBMQGRXHE9QR1kfkK3CmdeeqBiHxvKGZmD7YRB",
  "key18": "5Rf21z12Q8MeF4eMoxdBZjZw22v9WK6UixZhUPVSud4SfQX833d4cALtBgNUZEc88kCUmYVtMUuyW5CoyKeNesPp",
  "key19": "54BiLgCVPkc632S1nrEgcMP3jg4ZVE1kYucsS1EB4g37ws8o1HMCwmGn5U2gxdpF3CqUiVw6Wy2oo5zGbWeUbVwE",
  "key20": "K5DnhJtg64Q99iZAZEiD6zu4CWAsqp1jttRHAJGByQ9YMq51jkrFRMCFDf3CGuzrAaek2ovZ6dvEVhy7EvTxRN2",
  "key21": "21PD66y8Qbq2kEWFYvP7oXjANfGpZjjtmAXWEy1k9FciqTppkAcS7arvx4Ai8w5s4skcm3LHJaoSizXKneViyfMj",
  "key22": "346wYHGvHuqY2U5TXgJ8KbhBsx3xAypKvMx5ZewJaV3NUbFNqv2WqtbtXamYKEuGzRnErfX1ibbJJEKM3K6GyZQb",
  "key23": "87n8ti1Vw4nCBjnXAiVLBN2zLnxEjR6E6odk34wWqzSN6NStTEvert1VdQqx3USUb9aqxVcGTBC77ZuJNdrvmWS",
  "key24": "39HRox72sPShtXCeyzmZCkUHPeKipxU5XNLpHJknTiPxZJwHLH8Qj1FGGLX7FydSoFJt5m7aerywMp3hgoB3FZSM",
  "key25": "2fD3bGiomYLzyrPN4Th1qFeGeqbTRHeKcH3NZpDqobsQPUubZpw4YFW4dEKWyGJeZV7yf6DqxCpnp9tzYkBjPEVQ",
  "key26": "4qgcTKXue4DqGFXdrDgKbMV7k6HrW1pAGGf3oBQxZVVpDCwUCSNnf9R3xDHQbTAj4Q5YnGEdKWi4z88QTfBczrSd",
  "key27": "2463kgRkiDXDE5LarKbBnF7gWbqA2PpmFrT7bH1mYPzrdEcMBLn28qZvncLNN6sFqz2tyYJNgJEgdEUSmCXurPs3",
  "key28": "4zaNHgLmwyTvu1P7J4Mrtq8yoXuBWom2hjqQWpPUk7q5svLdm2cTQXDZkhivLpoeq7N7LQ8H4HrPKFHT7U2mHh3u",
  "key29": "2vGZJYs9nFynqqf91txAqGgGdk4EMg2kBHpCR6e5cj4gXEnDD5WK65y1YDbudTnU4xzmWXEBMxNm1A6x7W1xzWwp",
  "key30": "662vkjBwUoaKzChsVbw4Z1wfG8f8SerC6RH6cXf6aEYtzUQMaFmoJHWYkXhfyCCXpo3iZAeh3Qm4ZzY9ZGaf5yHS",
  "key31": "3tXr7hixvj6YZKrGP5nhcF255BVHtJRthMeQa28ajAgvskm8UcnB3qZZ7a7DToTiMxz4WWrH5ATpkRwdh21QR9Rk",
  "key32": "5XErCX2oGQUibv2wwZR1N98CnJrr7KpsDa3pRQKJy432qb2cbYy7Dd1bpomRm7UTcFfdu3rXSyY33Ac24WwBgmD2",
  "key33": "4PuB8vYuSRhWE7s1xvjq1hW7JgUprU8E9kgC6amijZpvnGiwR6ko19KARK9otDituv4szNpH5j18bma4sSAM4ME2",
  "key34": "3FPcCFJfZgMGaqKqEiNMHnXXtNK7QrgTKe9nzceFQSvPbNMX8yfjdWsT72MfRHoTm4fz9E7qZ8iPXH7GMz3KdTFz",
  "key35": "5qkWY4yUKLkf8X4tSTTjLNbVidHWXjSvoQxnbwJp3Cs9CjThKm9f18xTMomFNJMCd3NpbH9g9BMtU77vGW9rS8P9",
  "key36": "4yw6oMoKRHkvB4FdeXrufURSErWi6VkjzcjKQW78c8TSokvqMDpWyDqWxJXSCqcaeb1efNe7iG4qMbroaMnkBXZj",
  "key37": "56jacj7F6fgpa4R4wF65vNMfjGFPvgSTD8kdDgLEj8cv4gP9CnQmzNouEMnxhcNa8N5TTmkko9EVwMPDetL8tQ9L",
  "key38": "5BmZetkHdsLLnpjkYLDqpg1U1T9uKaUNQfukMV6tvs3fjuJt2XNqqa8Qk7QDQGFWQ7LP7N5pYfEzSCqKSSRRmueR",
  "key39": "2Yfv1K2QdQr1DDEm6Cx1ML9Zos3Gzxg65KHWxC7oo9ovFWo8Q3dBVwAv9DjtTmWS8Qcs7kCnWfsi7Lavd7MkhYnG",
  "key40": "3jJYKeXKKZ3XWWh8ZznRsZhScFtvaaWvd6G3MCvoKxSVoJjPEaKRNaBoqQDiLnzWDyLfATkp3VoKtVr7wwwyec1r",
  "key41": "kbWaEvYbz4VVXn9VjK7cTAt1E1nGYvhqEbyBzpLTKVNaE3GbxJAeBMKb2ga4VmhjZ1BfpUxMG4bQuiGY7AAEv1j",
  "key42": "3NFFsFmg78cTZms9o7Z1SaG6iet9ZD5KbJGa42KkMxm5J2mZSzj1AhR19DXwRdv9ETVoAJYMR2Zs3tf9yeGUpdJB",
  "key43": "gTnWWQhg4j94nKCTbisn2EJ8eJ15D42eSe12pBdfTugNUuSxmMkXzGxKPpY4UTzmLsTFAiAXZjBUgTWy8M5wxvu"
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
