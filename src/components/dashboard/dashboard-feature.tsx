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
    "5MTw4Bfe9ydofHZEjH5LTkDCApoTEgKsmomb5haCdaZBAKU3q9bSp3izSHfyFDKKbaPxYjodGfyuq9fmT85ue2oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2VVvuxbS9oqC8PMpStqHeQU51bZEztr4txmcvsvjXk7ysQVgvHMUuVWMX5FJ42q7knpbB3KyNQiZke175fpzVs",
  "key1": "37EKri213RmoNTXLqEzp5U4rvkvhEt8iy4zAuFyRc7cy6GDZh6Y5GtyYrV6Ypodwaaw5T2MrTxdq93vzUy4U8ZJ2",
  "key2": "3nvrXshHnhZCQXMhpYC1uSZt4H1GcAxsrL8qcr1cgXKC6TVuMq2aRfKTNSB9o3QyusbTsBJDdK1jLLqwAcgjHYrt",
  "key3": "XEgQGHau2NY8or91SdVGJY9vtFPpHYK4gGf28y773rj1fq7j3GkknpBMEyvGJFz6SuazQWFeHdLEBvG5LRFN15f",
  "key4": "3AXgntrYqADR49uEfSeGHrQVeDXzA3UMvhLF6gEXzj9HU5VLAm6BND2L2on9LkKk68S1awUFK8unCMcAFxrkDFkg",
  "key5": "4U7tYUifTtbBeJHd5c79cE4XN7zuUBFS4cQ55J3PA6zpxQ6afy9KHzUqPcpGHDGaSDYQnxp8RNKR2zivqqXJXcFv",
  "key6": "mJeRQGGkUA7zSzGo3et5sr5sxDPUpSakrixBUDspYSaAXeBkfzt6u4htKYGpiLwpQcBqedLtmucwuHrSMCckor1",
  "key7": "3HkYRKKdaAmH9k4w3FDcNUqzzKqpUYJXe7cRQnikQPCM3tkjW7tTzb5katQhDRG6nqcfbZKzgUafSrQJgAzUA3mn",
  "key8": "41LfBYRfJqRkjWx9EaxrPUuiUDjAGvL3dpohxeLaZwjZdHCK8LdpgNgD27YAqZSo7eZepXarpvbQmo8f7XjcbY6g",
  "key9": "4xU77GaTQQ5fRs6TuHejpK39foKE81oBwpxJacnpTWWWURgyArvsdXentEvEEykmeUxehdGFBB6ivi2tJS3YB2iV",
  "key10": "5Dc5AsxPECsqz6xCofJE3VZz2LEz4tXCfZ4EEPCLLgMJB1Z5gRCA1VWn7xQCZoDb6S7mLdFGWQWGdBHrPLK6F8hF",
  "key11": "2nGUaRrerirzQ4vSU7XzT9tjEqQaVzHkLCbZ81GWosnuKhiHYsh45Fmpbwo1Ubhnc7wZM6ZvzCq8TNveFKvf4qEv",
  "key12": "4MJMLqXCrwVr4YRB5UHrqPCxbRZrwAEhTEGYG52YpNm3Y43f56kq6VBtvd66UDDEEzYXxskJr7GJR2ABVktHCu1",
  "key13": "4JzxM5i5DLKT7dYpEkEo5dNM53gJAUTojT9Qv7dKHXRCg3VyMCwkMh2ZGSsaeKYB2TvESDP18YNc2BJ27raR7cmb",
  "key14": "51uGJgGCW2qjJjchrgA6LKw2KB3v9iQPoZWhYGnDHdCM3YS8G9hAfKGmGxvCx2VAcsR1nPxM9xibLQd714DQ5Twy",
  "key15": "oSMqwGgh3MrsSKh81KR5iLh4AUKhLPL2hJ1P18eSWS6PTDMiXgQxEFoYt2dMyv2YJW5KKGJgbnskUPMdaCM5Ec5",
  "key16": "3ctG71mxeohTEfVTQRAg5ygug3H8NR3hnBsPLJkPpYMhHYfCx9TDm3FV5cwXjqXZEbHMywxiV9AAM2khWxVJ4fR6",
  "key17": "2pY11YP219XYxvDC3krWnNogCR6Xw9YYzkA3Le332FG4fn8ygsZ7MyE6GoB5U18xFqSUrX2jRb53t6ZpTxfnFpr3",
  "key18": "2bV7eVtEETAPe1EuEqVKXe66Hy4SyiJzVBRY9Qh7MJiNZJehzbnYBedJEsBpsCNkq7TPffBW5gSePE8Gs1P2pKM5",
  "key19": "66uEeddhuu1cTRLU5tN4GcYnsJckGM3QZcw4jkKRdtQqNDziEX7LGRH7TVWDTjsgojHyfg8sEvy4AVNmcdK5181M",
  "key20": "4NU4LLy2EGXbbDAjN9yAztz9jzS6PZUMmL7NdDzuBPQ83JwRFQ5HWyvgoqTLLMCFpqwcJbDrxpQW2n5Nz5VkNVUS",
  "key21": "5VaoL88r3TmTSU1XaxFfgxZi1vQyUa7wEfZaXKBWUtKxcEdXYsgxcP2n5st4FDDtp8FG32DiNGRigSZLjMLwSudT",
  "key22": "w4DPToA11Rb8fWnMP3TRUFdRR95eWF8nzX5NuiCBFe6QFwtejdR9nbr8zQ9RACpwR2aKwAP8Eg8LNi78HJB9jyY",
  "key23": "2TaKCHQqT6XJN8rksXQhmiUDho3kFvYWTq7FxyCzZGuuK8bC4ts5Socd7gVPfis8a2oj4SvKmgbSvUVTxmw7SCAP",
  "key24": "2zMhpRU9uoVFmTN53BB8vh8doh6DvTmhcSgs4zQTcKqWoLBVqFxoovNuLXPGF4DZb2qQktJauo4aH2rVUE1eaacQ",
  "key25": "65zbUJshdpJfrffkANJWjtvsSUVCePqtG4iRGVNdzMjiE34VRCVD4MA66GvVcxVeVcw2RehFkrAp8j46nrE2EVep",
  "key26": "g2EbHZUGfNsNv7PadYDKgauGLvkpJVUnbqDL4nf742pkykMaMcMtUp75egLUjsj4VATVm8tWYFhGXeFBw74fXER",
  "key27": "5nmxVZxfE9RrMqK2vNyU77t5eNf2mNMvgCGjR6e2jJGmWC6LY446DLphqUuMVQtgw7Yz38dwn5RmqUJCJCKpxizd",
  "key28": "5cYzbKYWRRiBMyPzdMNQhXs5CMuFkGApHwSYPFQgvuh8PRTRxpZ26Chdx1xxbpdUuoSRG4pnRpyx9wxJvTDVM8zN",
  "key29": "4Zw6sKdSnXfqXLTHRLjiaTFeAZD5S9WS8zVVmjapqJNbdCF1zYDCtSrzEu7ZXr5iD9p4NoAgKXm5V7aNmEoATW3u",
  "key30": "2D3sNmAUWYjVsFD3y2MQtHEZt9mQ8gGhkgbVPmAZAt5X7PBhePZ1H6ocQEm49UVr3DC4c5KvPXRJYxkts4qPi1t5",
  "key31": "2o29R6Ufy83rjCgoQWPjdjJApfRpoSRKMWnaDaXPXr85zKpgdWyvGA8pZrcXBnH1EP9xJAZy4R1xczDF21XFw7iu",
  "key32": "TpEghBQaLxzasFA5Xg3vs2r9NNba1aA4AS5APmBLn8YUKhtP4XHLfxMKeuBoVw1h1vh6gzckGFzdxR4zHwwxMSL",
  "key33": "5zmkpK7xqC3bPN2QyM6dxoYArnRpWzbT58KLpxDQdn2UBDXWXgfTTk17sL2CFLGRxyK7RJtiaC4i12qu7SYcD96Z",
  "key34": "5Noz5Gmm6CAzNcYo7Xd7BddTnTJzkQnhUXC7mAG4E3tUJZncYs4vLUUG2HD8ecBucZQ41dbGQPHoyJMR2Nj6BqSt",
  "key35": "31UMiHT5VjpCpfXMNfFvkihiD5qerxeX7XnExd1pa4pnxKVLhsgdLq2zQtPH7XyBALLCSn1d87wC4Pz3p6wMxKXW",
  "key36": "5MKiBVA48hEMSDRmc1gMrSe9oXf6gUgdvNybA1CgVf5xbphmAyPWyogfqDG5tyksjUurKhrT6FTKLkM876pZSC84",
  "key37": "5MtddLsV1cH4qARitXCNDyJRwrWQZ3oF8tFQMo7D1y4xZ2kphECUqbKXGD8x4vyPCPTprKYueLnCGFq31nmbSfny"
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
