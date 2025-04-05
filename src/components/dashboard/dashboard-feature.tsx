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
    "BuQWHwVJHDSBvwednqHWFW7AxaUhPCdjZwQQK5thdnECe6e2mtBNhwRv1qayjyh43aejv7a49zqhvM8bA9hwvPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aM3m3ASr7p2FiDypCNHWwQvjWZStwUiwLPubyjkmUZN1BQ4Xq22rTSNfAb417QCcFTtZWyYBiWqK2MZQMbXEocC",
  "key1": "3YRGuYy3HxvekyZj2JPaxYik51HCEDEJrRZAhe9hdfsMVpdQczA4sGbHGY4tALKf4cTa6zUXTQZdyNzGZb9vT7Ey",
  "key2": "3YJFdQbW5edZo6gXnHoUwH41qAZ7q5k9VY8VsEBnsszKSbAMFBRiQYCZ7SHP6BVFC5ghZZ7jNRrbRM45PRsACV8w",
  "key3": "4NCWMZXkHbQ1CAPwtyJ57jhJoXu1n7fzWnh2BgpGpmWGeobbiZm6wFzDjiZeZxQAQdAPBJ7K1s1kPuWkuEkSqKSW",
  "key4": "3puAP4NFdDd3DPsURxxmpXKPCGUCMMJzQroCCC5q7fAYTffU3UmkBdq23DdC7frVmQnf865kFnskdh5F7VzqkGfb",
  "key5": "3b1X1W688ZqT7TGT69mgisarvHwong5uQpEYeTEtQC1xs6wX7QG7BDweWnQANuTh53MNgwXcbFWfrKZdfx9e9iQt",
  "key6": "56yncroHW1FyemgGwxibgHAGyXowvfbMmGbtXAhq1TB9LtrjTBmoSth8xEfo5JizUt5uYnNfmDmntNDTqbNERD4m",
  "key7": "NRagrLQNdD67D4p1E5rCAWEpuTcoU2aibwcdNV8p7fMjkngQk7p8ZjuxJscNb7vmk8PLS5yNtjK5ttKdfu2hsx9",
  "key8": "3aA4WMcpSQJAmWU19WHFzTqUkoSHrPLFzhpq25jXHLbGmcT4QVu5NxqSzVBxVauGHxpYX4XvkT7eB8ZfDz1rf1aR",
  "key9": "3AjU5hzH3gF56zGPkFcA3zL6r3b2BYF4cJWGHdxEAonjmxUux2c7U8usW9vUJEacxV4zWZkDUu6whdeRzypPGk5v",
  "key10": "2ApYCgvoXGcxgdnYK4DaRjXYZyfqyJfyqDZFfkJW4vtN3wLubfANPLSYx9sZw21M6K7aJqzwAdXuDy4KKbhAkqXd",
  "key11": "9SenBTbNgmN1sek4SysvCDR71o9UjYnJxFRfJCjmDZ4QLQUKZCGEpcB9xfVz8NpY6gKdBGSYbJcpW3Ukx6vDzzx",
  "key12": "5VKdXNt8QyqqBpSTFt1d3ENCSFAN15tiDXu6ZXucn6mRkQUgZWJ1PZ8uvPrickXt2z1pWe7jUpYsaVMuz516v8KX",
  "key13": "4Xx8jqv5JihTBDPfQTDVqdUxo9aqiXEAjS7VgJpake1axbmz7wVc3gki8Jdmg8PD3YCRSo42uv4KNQm4CrVe7HZw",
  "key14": "2X8BH3QUvTvtUU7C2KqKe9EMdvRWi3sjMKLC91yWG5HYcuPeNtHM4N5A8gPAsi32V23qJETeQBmU84dHKeW1nDpa",
  "key15": "3yBSuEVbSgPii9ybJpMBeFXu1MAZKFjsUEvSgMgFpHacexR7UqfLqNjd3YvrxsxCAf1bS6czgATWpMtZe3KozfPb",
  "key16": "2MMJEzbDo3ZcVUZVQLTb7tb7cyXxmYJyBGcciiim1NumYxCWMcDQiKtWsL1Z3gscVidbmvNKMjREd1t334BEBDcw",
  "key17": "5LU3samUsKQ3eyrxiSw29y2LPEFJywnsXYn5UKXcxqXJVhi7WNJJimVUB4TBepLas5heYW6XaXNUHpxhE1Ha7iYc",
  "key18": "4rdUQrqBaDvGC54sujRxeKVDURPnXo6RqFTpssDKMD6MfUPDFZHLbW8ZeJGSQ6tdUPUP3CB3YxEeGDiuzXbiNgZZ",
  "key19": "4S7deUj15aivT5nr9iq8EAshiCewnHwDchsBxHWQAr5afMypvbUNwgCjhet7iYFWzwvUC3yvtwKtAua7dDuwkYfg",
  "key20": "42UsRxNSE8y6AuXenA5jBta44g4yhNjsWdMrzrgHoJHHvQZ2unpmMgqZZMq3gjab9FBhxez8U6bashNeWS3pYbmC",
  "key21": "4isnyTMTgqfQqviGnUzXseqgD8ZvsVJmHTkv6yhufyaV4ze6Ftq4RAJZW2ZRLQM68wWxvjd9RU5GXzWWuoob7zEp",
  "key22": "gRqqqUoiKzLD9t5SJD1mNUP4duCqdAJ1cUNWJSZ2W2TnswN3tuo5xDyB5dfv8dNyzuePd8PsT76CdusPTbiWDi8",
  "key23": "5jXu9kcro6vLT8D5GYxKJoLJF6DxNcSxhbH45uu6Ab8L6RdcoNdR7wZvS4EtWo41mV4T8mbijgv4VSoFefa926kf",
  "key24": "wpEPAEZgEMo8F5N8uotmYDkUqmpEj7xeHowaXKPy1gUFJN6JMLxcQToCJAvYG89283c2MA4Luv2WUq2PVdhE674",
  "key25": "RcRRNk8abEa3bpXAgr6bwXSu8EM8es7RqRap7D7XzatVkNEyvq3JNZvRJn4yivJaZaj1kGUJSb3xXTXvw6DsBc2",
  "key26": "58oByfrmoZ1qxHzn7zZGdg8WdYRVTorzJKrbN3n7SvZVEMbQ7b4H6U11WfNGyud5jrG1XzB6PwK2JBqNVVhJeKQP",
  "key27": "3UpKmHFLcuJL5fHdphiD2RkFtWPLFm5QdYYmfeAgcV86L4nEcuqRaiVexX9FEnTMpnNfDpv6scsc1XVPYZXvkgUc",
  "key28": "4Zx5fRjDijzSrzH7m25sCbtmyPMeFoas1RBMms8QdrNd3d5x7rH5XjxRKb5cZ6CAGKQUaTiaqGvkN4BKcmxQfi4R",
  "key29": "2PBWvFbxp2theHo983H7SJT7mACkpo45XAG2dGNmasZNdGRm8BY1QTD8SYRth7ky8dmgvMu3HRHAzxDucbPP2SZE",
  "key30": "5Qjmq3aUhVEzpaXpbuSmTUzRdp4nGQb2Pd9wabeyH4oUAUTBphswWLFFxDhLw6EmtYCTKwJ5DcDoCmHm1GT5wC5X",
  "key31": "2BDG2UCb157u4bAyiXogtfmjTsREKaVyHa3hiUhCrMEgvVQCv6smXReCmtf5Taud4tJbj4XA4vRFyCn7SJcCW4xd",
  "key32": "3etfeHn8EpfQRo19KktjeJWR3SG5P73ftACG2J597xJHVdQCSi3GsuiKFrckpMYhbxq9qKZjGJ2XTL4ZH9iKqRoa",
  "key33": "MAuKrJmLckT3Dtx4iFo9XSoqv8kHAdwjX3MTjt5KHy7avFfwZoaEBT8r8XPAR9FWxxzsiMFr3D3H8ZQKX9RhFdf",
  "key34": "46R9vh58SFTj3XVt1X1j7EafTe4a9uNe8jUENRfe3KYswxWPckX45QtweK8sofVhUb3dzq5VDHKVwTjrcE67ymom"
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
