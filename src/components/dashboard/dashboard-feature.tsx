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
    "2R2453cvGhZUsX5PeEzUy8YJPcHe9hrR52rAZLuNrzeu4eMFKaevvp2hkNkJcVELoyQi9wcjerxs7tH2QZdZgZMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vo5Su4sbcTJNwJF19giSjA8sCXLW8D5ovRobZATebuXXQ16SH1ZeonmXkdtAEoG1xxidFXQ2bp9gdLHGto1YxRc",
  "key1": "4d1ChWHSX8oACLWpurVyWh9m7YQvyKLTuKujFGczgjP4Joaaiv4t6QCzh3z2QXSZqVpDdByJhVapxSCpifLQWkgu",
  "key2": "2AzAKgsXiiVZaa7DURkigUXprLWmBpvDfngFKcqoypuZLC6RpW4eFGs5UhKFNEatpsurLRodcgXVPp8nbckcyxbT",
  "key3": "4PQLxopmGtqwuafamGeudLq7AiuH5HcDfT9mPUsB4CqanzPp29nNQx33LPV2Kbqr3JT1bEE4NpMEUg2oLJEEY9ci",
  "key4": "3pdQmxe9CGoEroM8LLDguVaQfjMLwmqrEMfrFQNVGkizZqbMQwZ5dvCf1kvgfwcV8UoGFWTWLp4idssUs6t79hj3",
  "key5": "h7y8FouaLDjDSCtbZnU3X4NGbi2eNsYRgjue4DhBeb64TDQL4E13JthhydHyPyWXj8ZgxQT6YETfB2BNqgUtkdF",
  "key6": "nfahnievRKfbShmwazziFFtbX98i5yqZz7zujXZqzfeMjgcX8TK1CHuMbUUpGspuudh3qLjjQKk8CN1vMMxKsqo",
  "key7": "3NpPhGDwnbjXiE1RaJB4wzqh8y8H7EEkkkyb1kGA6ecoHSbdQnsSZynYMN79avdxGdFHmAZrY3GcD8bnrK1Zvv1w",
  "key8": "5oWZkecKjq2r9xroctEfW1VswFEPqwMLkYNPUoHmp234AZ2ijNddZp1xW5qDDGVkGFe7AhVBT8Yitnkf9MQi6VwD",
  "key9": "tsRRZPgW1GXphkgqALwZrbLFGKEC9ddNGgy9rSWYpHRuZ3j4xB8KUucYuAtTvmUcK4VZ8N3D2qBzeR1AfAMbhyo",
  "key10": "uR3sHWxfo6S4VJP9gD3XzZj2ncdGfhzQt1NxfD4pXMPMaSqLdrQ6WtvruuAt75HK7adKVzpyBuCr5QfhfMb9ZFB",
  "key11": "rYCiRAZK4hr8tFLRzx9nEmafCTJUygd1J78MwBGwx7gWaZedySrh2UXP2iWTSCfK9KLfyHp1kpfxfWGCfxkDD5h",
  "key12": "2XzRM5i3qaGDv7kn6gYXFHDbMgiYSZEpmfGNY7ZScjXNnS6Z6foWmTCjLrK5gT7PMCvbacfPUxZrgtFP8ro7KzJf",
  "key13": "3mSD6HmtWPXe41ajNj6pnZ3BVnWdvn6mHSVNxH6sfW27qPVQDgn6jX8WiMd9w8VLgBvuk5xzv9Td4aUVwfTts7bJ",
  "key14": "37reYmhju4zAW5uBPaVMtjFSd2quwH2uQmHVKEZAePF6Q983WQJ2pKVsWrHwQVoVbj3WMupcGs6FcHKPoH3HqSxN",
  "key15": "4ZLysNqxTDQZresoy7Zq7ocEctc53LhH3MetqEa6xuyGT2GtQBevRXTuZGvHiubrqasdBZYp2hHDCfoCtj3Tj4MZ",
  "key16": "B1shHVRXZ6NARu3euTixamMqi3aNEg8gPYGnCyMSRKD5VjaTw1oFmLiFM2ephugChQUPSXeQUXzaT5xtYNXH22s",
  "key17": "2RTXUTooYhPMDhRA5TiZPH37nadJyM7Uazz1PYhvbeYMZ3zob34yETsbMQe7BXoTTtpWwKSMwnLN7b5U2XRzV26c",
  "key18": "4GdthB53SuFgnttNB1DHo9ffp6xd9Ui8w8EkfZeKjWyUk5UEYG8yNHZhuDWunzDijsjo7TF61mk49kjGt4pAdVCZ",
  "key19": "2vyegyuvkKHpLRmfvnvjgtFt3APhXe6VUFtaNVgD3yy2m9ZHe2LWGhxtsogNbceJHfDGuJgLRTmnG4XjQ3pRL1NA",
  "key20": "5A25rSQtJ6s1CANK1FqVE81NKVm6MCLFF3uAQoxF5awvdbc1QTyFJdgMMDikNrwgmNT6RkkzCt4uUgwU6szAZHtZ",
  "key21": "kwCaKEv23DMY4G3Fzo8Tvxgys2EqNj3YGLpAyH35rdtCyQjwPFJhmAifRrNVYuiDEfBd6ELVS9bXX52at9wQ35Y",
  "key22": "56KcUUJGMLHh4Jit7faxLJAnEjvuqXJKE3Emoudhz8tK1DJcyBMRXi97dpgfgEkD1dteFXiYLnV2dyXX5YRf64jh",
  "key23": "3ERfgUsTXNiKLCx8CNeUR9ESz4SPvwQFHWtm7E9WcddukNgssKgKofR9stzxtVtBeiVCFU7anh4tBqbsnRRrsmPP",
  "key24": "3hai9xctSjAte1EzJa6HuXwf6J6XcAqX9fPDXmgH7CQa3LsBeAyTdUjG7APs119BLmX8YhFTiSYGcnG8RgFRAK5y",
  "key25": "2qv3LHghtHKTHJXUXuM4ox519RuvYQ8qe6Zw7ptgtty3dSTftGULMaYfCGEcfnC9G3qCS3zdVXTfaYsu4wbfbLGV",
  "key26": "4ZmAWVgbHBsT6TQuR92mrF9iEY5xhnoWVjMSHk7UU2M53y92yVkkPGb58M9YbNEXGokRyo1a8sh3srhZjdPqXBUq",
  "key27": "4tuGLFncTJoH9hLH737nQeFcrSZedJoDJu4hP5Zr3PBQsy2HJ1gv6sHohnwf12bnKqtPefVjK5DfHvuPTE95U1ut",
  "key28": "32cSJrLGSXWgaKv13VYpKEjUWi15quVCNqHE2PbvSSsZ9fs8AoCUG3e8CsVa5za7Su7UK3g8PAtC2rfwXU5Dxjsc",
  "key29": "4MpfBcbgMkY7gd6aHmpznT37ozbTnVHr3wk6LmG1bnQJKwdQP1na9NzWXwpfMLZMAPQvxkYnXcqTU8C7aPNzXci6",
  "key30": "nMekDXCBDztBjUyoYxyh9URxnFmBhNKF4NgNsaiiHRdA5pjiCkzb8jGULVBRSq4AaLxZfuDqtvEb6MjZS1FhRBW",
  "key31": "U76qoKcUdGDPP7CUcNVkySzKsr9Sh31H86QRSuHhEdN5TDnwTDq6HdqSnJ37un4nUUP442Qi1AX613mSn2sjr8R",
  "key32": "qym8Fh7BPjZKmbuXSFHb61JQJ8pWmEFtzFx9E6PxsrTBUJKpXnPEXuMmBF5FpTSmoEkv5JtXhe5fMcM82TJZPmo",
  "key33": "4cHAJQdcuz7MF3iCv5r52cv2czqkbBpsa28XSEDRjZK2G9aF4Xcqno24rkfHqsj7MX4crthhFttR35ToBEyhSTDi",
  "key34": "3atYrwM4oW9GpDgsEMJMwF6o7w1M5thvUR77D8G5S8QMzw41c2Uj3q7rrERLaq5Cbnmdps6kRXrmp7Pn5trBgYe5",
  "key35": "42DvVsFMVyCH8o4JtAmfjQNNNhJbfPNFice3MEC3uT6FZX3ge2LShB8L4BKg1vKrJTXauZY6DA83HqUULTvu3qmq",
  "key36": "jTBcLbYkff3nzBbcnr48bGsW15qZNdqoxGm566KhZ2uwmkSe21Uai2xZZtwBhtme7aaT8AwT4Caa4au2kqw6QDp",
  "key37": "3bHNuhUpNryfbk9tLaVoQxr3VnxbmtUk4Uq8Hv88u4B8RJXZnnwapdRXvVLyLZeAE841uDuTjsPmtVeVNhSwN8hh",
  "key38": "V8D3sKp6J5VX95CToxymqXy2ywR8iVqpqRmqbgLMvZtxfMG82CpMvsVJCm5LCPFF3aTKrdmYnDhRwwskpjTMBxf",
  "key39": "5HT27J4XKvTaQ274SbPiF5j63vUiQtVtkvdBK8YYGzCdRcujJyTUEjvwc4sfA42qPy7Agju9sYTJ5bcpjStNczcu",
  "key40": "4tZ7bVeZq1uNr6ARBx3ZLd4zRY7nEehaAx7NkLCZNf5mGfSszRw9NtubK1sCBDbMAVQ9iPs264MrsCfD1X22qAcr",
  "key41": "9a4VkLuErS4kaskWQ5R9xyrqAPUnz2XaPutmCALq6BhgHxE1waV9hvGP2n2pacdgx88W5LhGXBrnsn8mVNffXxU",
  "key42": "2Z7aqmvCmS7989roegFvQhFw2f6ho1nzgJacCE9wjRwme3jtH3SBiWmoPLN89FCKJ8PypkCU5f4uheeS1CXDyLZW",
  "key43": "5PK5VSHWT2yLnKZNtAKwfC3Ro2qbDrK6EaL74GA97VSPBP3XxSJXtMhJ9zgJvdnquP65F8ehFkyY7pwvMUFjY5zf",
  "key44": "2WRj5dAEa6QpZiQE389697UjMRxWvQp3rdSGn9QJjuWeeEHf95PbkUFRuiRX4LCeHTfoGang7XkYQGZTnNKGPWi3",
  "key45": "fna4Xsn1vajyMDLMYA5265utFQmLrj7iRdP79LTG31vsF6vSsA98Toi9VYxL9XrE43RznBs2WzoNF4ZDFRYwwXd",
  "key46": "3afx1xuChYCX8Pnf7UAk2jZU3DcUnDCisPxNLWAPctRY1TwesxudiK7cZF6qyjLYpzmgXjpWxZoVMoYqGybfwfaa",
  "key47": "qxEkuWE69L8nHQ6jytzefBJbmEyjPXaLvG5ySrk2BoAvyRJTQx5hEw42DpKLNKxCCeJcbYBs6merX2RabuUq6nX"
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
