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
    "3edubVh7E7TSpGedgx2CZ29D36BRfmRWxV8mK9tBtpUo9vCeodfCuifWV5wHsADQFzXRKu1kdbtWuEp2ZNbbceuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpgMUa9KhhYxKZPzqFxuvqvh5F7z9wjdaGib8fp58cHTU5hHz58EkLCZRRnRBkqU2CMkpDRGbUuXULmZz3kNhVc",
  "key1": "33oAdzcEAxSDZKkT5AUD5PyJbY3eFVtdJCqaReunoiX912uuStDGWfVPZCNCrZwnMRKFs8PWFDKBBdpAojCaR6sg",
  "key2": "3V6NohWz4d6BwkyGveNbeYuzLxNsMvKKTS354H9Scydvakz6oaL4SzueuYnzy9kw9rMFLnadqchBp1SwDMa7vWfE",
  "key3": "2xiCF1KjqEVZ7UvAs12hMTpsn2V379jrv5XTmnZJxb1km5GHy9EzLX2gDJiegtPrpqK9BKvig89P9wiw3hpZ8Fhd",
  "key4": "4RTdChTLCuJPhhmJq54MYBMUt24SdqNVZpDUM79PiE2CRzZFhESPBpRWEajT41M3PK1yWFePc8zm9s4vqq5Wx3eM",
  "key5": "3c6KuGxW2aEVnd3kc8XxPw3uuAJtD62CC74EKGDoPRJDvAmASNxKMXRtG3WzLNvzFXYKYQhm7T54JWUFwRqzRgFh",
  "key6": "GDzTynfshtZeCZ9P3EzWomzRys9M4hUMoRvixmPxoFSvxzQuHDkhTJxWg24t85gXRvzgkkMpkYakP3w58fetxSk",
  "key7": "2qgF7XsqJkhfiSwvj51grPdnRr2siUtvQ9fdu26f7c3PL7beNoqd8VZqGNXC5CzGQEaoWVeFEFv7afK3yzJwNAD6",
  "key8": "3b6ekEvaRq6AitnAgT7uXKHt1kRXos8uAmu4nmhBYA2zt7dPnHrNREPamHGVoiDXNhucYc2bWRQ73LD46kJf2aAG",
  "key9": "b3vLi8SH44iQGhf9V1GvYogqgYnMzbfZ9u5eg9KnDxmbGzixBfu9fA6DEQNCmpRYkRF9sZ5kbX5rp9X1pgTvZUh",
  "key10": "3XA1WUgHvYwgPgNoc7jNxCrKDowmwS92mNk4vBgZRsN5p6qzReLdfwKNhvdZHxiSGioYRxMXV1VNDP8ZJ9y2WEhL",
  "key11": "53DxxK3KQm17uA6D4WVq16USi3hGdAAH9uYGhZknR3g3aLiHKjbE8jUX5XRtP1ZzBtaFCYSWof4QQG2sALJysfpS",
  "key12": "2kbCJNDBBdWZ8hx63JTs8ntsEZ3YKPTTbZ55uCrUg34jAz9M71bFkFZNioiqY5NgtAcNTu4WXSf4Uj6AHSoF5xQp",
  "key13": "5YEByG5Qp1A18gtNpuq7Pi2DCi44RSYxjvHx5CHJTM7nYETYk3nw9FAXgXM6f4peVZgJxymkQ7UXDwgQPpreb6V1",
  "key14": "4bxz1SwQP4yzbwmHygy9zzfJneM9jgMycYRCwCkWUpxLQVUqCFEebQ3ePyeSJ7PyPEYKSGQDD8g4bu9RAxp1x8ai",
  "key15": "4c4eA8xusgG2oJb4T2caX5bmBfdDtpAbAkTPvEE9Dhru4BvYf9DGZbgKLdMNUEJNDBUx3wMXYpAoiKgYJUMwsafJ",
  "key16": "3NugyWWKn2s2JSQQY23a6SVKoaEHbkx4S2CvSkTNUUS8pUA5MWv3zuUmhxv3rt8G3VmyFzp4EjLmF9dZo9ujkgzg",
  "key17": "2UH7zmu8cKJuMFzVP4WGAjxMM8YqAQc3bTY6kQspbobkYWtN3yHoHK8hLt3gTcXmx3xcTYjv57hP8yanhp1KAWaz",
  "key18": "vNyWFkx6vsWX4W1yHKUZtnRoihFWKT9LVeFU1Lp7TMvAwqj4BURMJ44dwyg5V9TGKb9U5h8oEBUpRea1zasFtc7",
  "key19": "4LkafnTYbub6NcdTEfUt32wiqQJLLidiF6ixSJExutE1uNWuAy2uKq64dxcpC33HwNuwWDhFe1PktQyWmbawLRAj",
  "key20": "4miLJieYvdSgP8avso53r7QH7fKoCnebqvHgngvPZWnzLycCqTgr3tZLzwQVFcWgvCyPqPbhbcvWMh12DLrjC9Aq",
  "key21": "Wo2UMJiANce9ybx8dLFZXcCZzGeDmCDeg2UBTRMi8By8Rp8r23pSw11PeeQCFPS9RRHRW76ySyDrW45c11x94o1",
  "key22": "PGdCxcsoe5JenPL8EVJiLt9RJXYE23ym9Fy6HPsNw4oPDAPQhiKYtL3FEsATUvHBuE1QeenJzqLtaNsnh8WQHSM",
  "key23": "2T9AUprq4WFvP74QmoyR1A9KP7KQpUrGkXm5yWGig5JS1jErZEvzJt7brhpuKoC2QCnt9Xhb41HLRK1ScnEGgZcL",
  "key24": "SmDkVk2woAibtb48VCBVxxb9vBvjVztf8PTQQLQmNBvpFRNcQXSx2XeaLy8hTSJKUDKixHQgP5yX5JxEyTPv9jH",
  "key25": "kGEVmYDqQjaGQLZUz4oSQnj3wxphoYqubUkskGrKKWPqqJvwDjPRVeZFmjBQuYBwJn6K7znQYjfqZy1T3uCVVxg",
  "key26": "5yxBYWY9z4Nu8m5JzVq3MXNhMFakRwWA29t3PCLmJAWVkSMRbG1G4ujXs49obSboxq75YTkFWvCK2gkDi4kATrvk",
  "key27": "2A1VDkBK7wSBgBv8ouhQPtraDfmbhUfo5RS4qzBWom5zS1JoQ288TPJBorND9tMeBq8uzr43kpiFmaGBM3A9hU1W",
  "key28": "5Vsr5AP9oUJfEncv6ToY3hmjy4mhsbnJbHkpN5EXp6qPo1c88W93CAb2AcXUSZwBkFSjZd2gX5ELmN4fVt8Mod8i",
  "key29": "u4GrqyuJpMn21i8sbJXGxfYBSzAwB3JAkFTQnvNfzHHHiDvTdkxo41kncMfFp9YgcTy6k9Pp9KMikYUoyYBHrQK",
  "key30": "57Fr9aG25wMZwGLMnmpi1T2tgFhiVh4q9HbgzQa8HpzCKpi7ndDjc4Y9QnywH9eqnaSgF5JJZZZNVaGjiX6Woti5",
  "key31": "5TP2WTCmgiKRiUdJ6jssJe1CCVfT2NPbkmpkXC2YhxJiqa847P8pjaBWo3u246Vw4ecZQNZChkaxynF1eKB1Gepy",
  "key32": "4FAh9QoRgGEFurGLwVeQaoRizvWoQdoTLDG1h7jh1z3rMDCpGEot1XRkdtZhD7hqnZWhF3SWkncRhjzxS9b1XTCj",
  "key33": "3gyBw5oqoNF4gvct27HmKcYhVi6mdLuSFn1vQMq2qGv1xkb1kH7sHFjnH2HTLckzopQ7je9ELY5L1yvo93RQUft1",
  "key34": "42QkDwJVFuQNs6gmrgAPv2MFth3q7GBrwWHsCnTyr4pxmeQBEEuXjyUg1sucXbf5sBN3tfXjBVJKgcUYrCNwGUru",
  "key35": "xFc94mU8NMshroppkN7xcvdiURXFZU3ySQYzV7g15cgZMvE5oMZQTq4VLonUayoopMU6owqNwenBRTgbhzDm1Ai",
  "key36": "2aGktq3UBJpUGfPumQK2SnATKY822e8NmAxd8tbvFLUSjBGdNVgb21s9svvVBpHPnx7R1DQMxLhd2k84E387VkmB",
  "key37": "nMjohkys9jsbDz8udVzUdNGeFsRZaQcHerE8GbYLdVoYQ4DJBSTJ5KebZTj1YpG4B9PL3QX4pPKnuSCeFk6oaB7",
  "key38": "byQKnZZoeDdqsH4yuQ9GBABnSp2CWnMPr21GgdU8KwKLh9pu5AX6eXh3ahtdoW5nFjhgtrKkpzkRWKGXLygXuzW",
  "key39": "3CCBuUm8yBgkumqCB5QbcssNXPPzWGAYMacjzKW7ttN7APvR8LDrmnf41frPcr1ycohNXoCSfNXhEYM2z5MsUg9P",
  "key40": "4jBY9rZqh3BQV9seX79ks9NYGKYepErpLpRAoMBKXM2jjWLf15SHEUxgGXkuBW5ohp56ZCZTEaef8vzki7zwE9QY",
  "key41": "Ed6gmTrJRAbhxopKarMbwPGr9NPFSmsr8nBXK7TfBW4vJdva5aZKKfaMa9qhxjDnn4bQscAQoQsK6Pg5nr7TUJW",
  "key42": "D73fK1HXy9kEuyRpf5WkxVweGWjMebAWrikU3Bgc5xRsUDY41bAGRrYzvFZBicLu1kMvaCixaaJ5sTd7j9MBeWV"
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
