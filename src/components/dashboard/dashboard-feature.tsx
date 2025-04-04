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
    "5kCyjRVDGbHFh74GWp5wRCpA2BAPqKjJDvfiSJZhw2TsWu3eJnFTE9hSySgTTszjSDWqQuL6CWaEKQtX6jq7WBvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVf5wwfW5q535WGQhQGsKusgw96RyWDrkgJwcVGmjDjt3UBQDHRZiYHwBokVXQ1padrKGA8N8wvfU5hCtNV7ERH",
  "key1": "63PtHcZWDrMRQC1wgs74ZXn43Ca8ETAa1JbcAFUFsM1VeGqXod4pgd9bSSH1ScQNpqKVtb5wy3y2ZhPYy4RhRBNK",
  "key2": "5nkSr4DK7g8rLcgvt5ynmwAC8iyjGSht8x9qQHR4Cfmkn7uEEaEVuNNMW4CesGmB3kHrivBbajvAfPTzR7bd2KKd",
  "key3": "5aYaezkzWgRpZ8myZFq52Xcd657MFgqvH3JM7V7fEy5eiynRab7CLXNgrUquX2baDQa9QjwvwdPp9QXH7QmBXKDa",
  "key4": "3MmJaXAefygrVaSEHaqymSRySneijYdyVF6bNuUjnEGpYka2YXUKyUjoJAdta4gZCQ9hJJiSrnJCY6PsB9PjRvmv",
  "key5": "4FGmmsq8YDTotvL1ijjbgU27xE1n4mmqppRw8WyLAKoakK1ekCrzvcwH682HwXE5MqJctUunk4dU7vqdrb2r9rkP",
  "key6": "2keZ29QLvVrrz6DkzpFvp1vUsAfqWbMBvSMWvmFhgTACd5ydPcarPDikpWSLcobKuz1vzdKPhJ1ErsShW1TUn1AW",
  "key7": "4wZW5tvGBV3MBUJhrwb1PqBrZWHpuZo38nBKpWVtHxCvaDEvpp59L2w13RqgvDYkpJctsTBS7VgZLLNTKnsN6RK9",
  "key8": "3RNDx9Emw3V56i49MWoaK6Udbd24z9DC2vWx5HZ4RUCTmK4HWgazNhrbXBqC9ZX6k6x3HuEBrRNe8bkL1TwAkvfg",
  "key9": "4jmrz8K15jAj8AvMDYBHuvF1jZX2oJEvArdRMzsnqbkYKS7DTNpfECFbgFURZk3TSaqLtggx2c9LSDURsudePUQn",
  "key10": "2WkanKwZwADkQnHePA9WXvr3JLvGb9pnB5kv8GSrmpZfMQHaL7RVeSWC41EPP4n7BrtR1x7LZGE8S4NsoJXrCrDm",
  "key11": "4kCK9GSqtcoMDxx4ptRL3QhsZzEZbNJiMztHdUVwSYhquR3oo7k3dN6aQ58Yre9EVFhqb5FnhDE6442BRhDsx6K6",
  "key12": "2PzEEtYC16pAwD1YBejfgdAPtNrkQbyTQRQbhLCecpxNhw4JZLR3QkPh3HG7G2BsBR8JLKYzXV9dBwmWn98M1hQp",
  "key13": "5S9Af1eRag1p97nYNyDaGpmR728v8vc3RJb699geeQL9DkiDhwUTz8Z4evzkVCuWdqWq8C9fuo2ijVcaGrj78mJY",
  "key14": "4b3SL6BAJ6nTkzD8kmK9K4nwSvnesgpWL36T7ZHnJqZfabcKMHMZquzw5x5ZdkQw8eba69aUYgzWfc8voPgcybfS",
  "key15": "ShWJ6S1VoswVDwq4nKfmKWTbW4zbmQeLeaovfy2KRn1j4UWbx4vNt5k4EoWUK8948tEcpm8jsTfDwwwyAoLghdS",
  "key16": "2TYAuMESaeV1WHBhHY9szpGdpxP2fCJCkkRgGPFrdqpeYpDKUiHR6eFcg35cxGnbGWg4X9iUV7qqGBmq1joGv2tC",
  "key17": "3qMNEQW38VYJ5YrGNfsjys8NnJ6reSUBB32xkCJxSbUAc9Fi5hUAQPNjFP8ydycQBNsR3Mn7GKQBg79SPLMaCmHZ",
  "key18": "MXTSuYXaGwWVsf8dAbeDVkV7tDJxQszG4ybeBEjNBygaqH8NYBLCryp8NGm4cBbWYZyHq88CKmqc73r5a2VUyzQ",
  "key19": "2XTvyhSWAM1CRYQcQjU61dPPPariesoF3odV6A89pkrxrQqVU28AbB4BPc3Lt5yVuS3S6VnsgzYTjX8GVrRfq4Ns",
  "key20": "46Mu4DKHzcgJQLx3TTBCFs8sny48iqpDguhxHmRp6A9v8c2Cwgz5iMrTTJb7wSg6oraieUysxaTURPESimQkbpoH",
  "key21": "4YMU5jwLz99KBYyaC7q89d8PqEgepTbpZGhMCYRb6iH1Va3sLJXVFbfFj8mxRH851v3ePVjxG2qp6QEgJ6RFx2Zo",
  "key22": "4YWEADhScVms72nE2wZRM95KWu18EKspRkAv9u2o3TsxYuuRJqtWL4Y99P1q8nvprBFn8e38UcxfApXoU3sEwUTv",
  "key23": "5PTUdqsRyBv62g1JAJUjq2fkgxY7sEidrjMb9nsE4vgHQTBfFkemryEyQfmYYcD9m8oscBSXsvWEjUN9s2SahrBn",
  "key24": "5zymigw2BSKcYX3nfpVFcfp5WHvwKNDx4d6beLopdzLqTDxxrtz7DdZtELNug77G6W2qxEFeTLrSkxsaPQLsdRkm",
  "key25": "NyK3EAsbi9oC4fFi6wsNQq8axDYkzEFWYStDctYoGfTuCU4UjeqhMr4NLXtPp3eFndf6bbXsF5wFwoGxQ2CPS9u",
  "key26": "5yAvbgmuVoE4bqtbyq4igthe2wrmvNRHZefjzeRFjAT2dYua6Cx1BBEGYi6mzhEWjvyWS4y9sJto71kByYwByaGU",
  "key27": "38Xmef5kCkw3kWwWD5nRZE7rd1Ru1qzjhShXJgVY65q2oL1KAp9LiykTc8fsnBfDA3feGP538T3zTxf4UxrDAaGk",
  "key28": "4QfEhKizN89cHJvru8Dfa71nHiRBYavdbgkjQH7jKBe2BXdrz3wE9x8xUYdtvnT5EShx81a5QX9VMMpvqSQTVVv1",
  "key29": "436E1KJPmDNDKidDjWYBM1PXyab3KpGMahkCsy5UbWdNtVUVuiXrvjaGJLAXyS9F5nkABGMZHaGcapP9Us4wojxJ",
  "key30": "4KzXuZ8oaUjvmjKrZqaDkM3LMuBEr1DW3B4Km3gDeVqLUm4PccgGxtCHnvy26DgRWw67KNycsqk3bsqDButVHP5g",
  "key31": "3WGCGDzFca4TNx6hRcd2jxDCW26TpYy6yDzq4x4YbnWSTFYtkDC4Mv3Tcjz3BQSXaUBZLesLAJAFLVDwPWc4qzBJ",
  "key32": "3c6gYtwVyySiX1h2vnyRCGdnkWvn2TNSE2xnEj7vUbErbpebcJSuALv5Jb8KVdvfx7kGereHS7HRWvbFUeaESUc9",
  "key33": "J4k8eLfCvqrghskfxe69uR8zeQWvuWKofQpZapdKCCwZ7NxMYZD2HuDX4Nepb5pHchn6XCsPuN72H77kWXg3heF",
  "key34": "5Wqmtq2BZoQQNykMrPTuQ2VCTDMD5WY4rcy2YrPnCmGQHpNShGHyFBJV8pYAgbmqwNchWfYsHbSuuNWnFmuuB9C9",
  "key35": "3MQda75md6RzzC3jwRYjeKe9Y7NR95GxfXBh9HWFYwdhB4ZxsNPjyjciFSEvX69sgkPAub71FUybdU3PgsWCPKSG",
  "key36": "45bT5v3m4S6QzrTfQ8VBgUBsqwCSGprUBoo3vPhvVZcpkdsyAUNCgNk7vqQK2Tu1W3Zu7HDa5hpf6vbaS2VcM81L",
  "key37": "4ia49kbKE4cjyHFxEUqSAQ5aipBCsQetVmTXkXmBiUrSkoaWM1CmcfSNs4wx3ciZEH7Wb9PSjwnS5bMVES3xuG7s",
  "key38": "cjwviCRyYa7YQMFbAPMgbb7TCyx4C9LnXtt5iFZh7L7HoaZoDmyryHfUYQRuN7AfqASDmRCS3VjxzScmZoiietX",
  "key39": "2vrNM6cZMaPjHRCArWwrnDAJeK8GgNpMKg4MbpvoWkqWKY7hNxiszspkJMokxALkHd5moNiyr3auuzQjGADREq7E"
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
