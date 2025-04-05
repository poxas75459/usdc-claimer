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
    "5tsHYLmMxYjrZKUqejsBewgpBFHaeBnyVpypnpYNWJ7vT32HFVtRHem1USPqnbpFe6oUw7iJqfzquimCgJ7weRAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fFhGRbAnyAJz1EvgDR3nfUEGa9LhJQSf2mdHfMaBRmeH2Fngx6n2y2wgrkTT8wocvjN3qJH8N6FusSLGXGzo9PQ",
  "key1": "5osQQLXwuAptFRKrUb7hdv8M2tWn4YwoJvwh9DAWsiPb8zyGy8Zp7tnmMW5k5n64AFaYZq8DV1Wnd3u3SH21HufK",
  "key2": "tp8T7X9hcPqLZNf14Fgun4Mkq3VuurEzNTz4cKrErDcBLwBZe8BHZ4SX9xmG2JdyKgqYHPKKuHVeVVuMWeTsfW6",
  "key3": "5YDXJ5Cq7JUVWLD5ZPq3uuihuDWQVFmST6U5USZRPG5ThFk91DmYvTTLA19iRbaXaDUm4KA6ZBThkWvUHhqbBFDV",
  "key4": "62eBor1Wc1uxw8H6UmZWYXQMoHAevDAhLXitkcQc7JTkrUH4Fo3iHYGQHU3JfLy5n9UHMoQwbqg7wvPX8vJCmhLR",
  "key5": "SYLDs7sHZeDXXRuuqwYy3vBoqDHPqZfgka5J5hwgQ2jiEmPVGs8kKdDFueDDkKL5JaN5kPQY4MyVxXhoyxRrsSy",
  "key6": "24h28HMcynr3nL6WWLiKPUxGukc3TogVPHnEFAj3LmQBtrUKGuwtJKvjFzXp2FesiiDc6hdDpQBPxoiMsYo3t7kH",
  "key7": "3qCU8a1c5G9F43i7Xvo5YXyepETiwfDEQCkuapRCJKcGaXK38VjdKeStPAZTF5FU3mrVtbNYExY5GF64n8ELXnDR",
  "key8": "3GogArYpM1RuiibwJniA69dUkStLuJDkJzQAMi5HsnRsmfKcGhv6bfSmx4SfmSAt89tfPx3EcBsfuUgS7WzmCNLX",
  "key9": "4B93CsKB7uoUZrKAzFbGpd5yvRiEpvrpdAsTtVPfUX2yUGqqhKHQqzMnLYMYYadmRT26o7QkhqF5o8Dri3ETu5Rg",
  "key10": "3KE8AjnCtL9WDBLVxyr3migFBbEf3Co46tGG1TLP31EHiMdXFcLh1YqZhnLwPEhZSNEm8TbDPmpCycar1L9riX21",
  "key11": "3obVpNH47QDgFhWSvsXm2CVfETVfhLrmuM5rH6HRGq3yMkSNR3AnMdAg3GXvhJz8ruVWDjM3RrBN4ut879YUN9HT",
  "key12": "4c4oF14yjxcnUg2biHnd8vp8KygzAKbUgL5hgTLTLAWz9XFDdf21YJZvi16fHci43UBzURAvDcCPo3fGQuipCUSg",
  "key13": "38ukyyFMW6QzwMP12Ej55eCKxwb9ZnLKagMCuVH1ovf3GeihGRg1rRM6L8HKXANodxhhNx8EMV9HsMvJEUAbuyY6",
  "key14": "2D6q5KBPUjuyCpD1kmErUom4DFYRccVDh95XjH7EbNJbKu6n76VrQxRJGhLAvF3Mp1bswQAr8NJPrpBKSvAojHZW",
  "key15": "3Lsi6NDyj4jHmkpWs1NAMj1DLQHkc2sv2DkCJ6rmecDxKmDRqNSz3Ax6E765sUNRnYjcEf4BrwqyxugiNhmYXpjQ",
  "key16": "4ubAZv2LWoZCpXzqtAPF8HNEHJMKCLyW6AMu3FnoZp6pYEeWNqU4gYcg4cNSKdusToTtuEqknHVMktz1K3SHRrt6",
  "key17": "5Jt9NaMxGtW1TaCfB7e7siG4NjSz8GHZdb5bnnrSAzsyNo1JzeWG9Zfd6bUYmFh32cKnCrUyD9RGfGZjCWkBxfN4",
  "key18": "Ui5fL5tRyyMjzZnWDseBa7SnxKQCwwFhUEkzRZpFXGSPfK3bTeEZvGdnEzxsbr42dK8hgjSA91ohr3xq8JxVaxh",
  "key19": "5nCtyvXJx3aLtks4eLGZh5MGPRJwJdtU9EnowH8LtfbDAvCeRmSgP6zumwwqB9tXaea8LjcMtcmKbrRi3guLFWdF",
  "key20": "44N2m8h7zv7fzAP4wzg6P8uuy3HxQN8Arqg81iBrV2uMQzzoHe8V2Mb8dB8eWtUGn1DYisJ1uFVeQQyucgShPzCu",
  "key21": "2xGUwkTWihn2UjpfnDbG9HjkGaqT6XLBmyxMMSTUriXdMUSzuEFyMQC7DP2SrC6pv99czd4KkCXFsoYxJMwLfQvH",
  "key22": "5rigxoaQWQPKJmjcA6pbRMZpy4wAdQNjzDt6TiUYtFxqpNfnG8KwQiKmrtLZXphKtEMWg9SpuZkf7uwyf1K8Szrd",
  "key23": "5aSmF6rZPRxBxzQd9mpzevRZGuNGjW4VDCgafDgwvMF6Rk9usNXDJ8ARPfJuWWtRMMJgqZ9VtNK9E4WLJcnFQfwL",
  "key24": "4of5UTTyvg5MAGNZafyuZSGh6CuaXCDiAi2MQQnQuc7m4XGsVJmDGvp2Xa8omiu5D2nh346n2W7K8q1BBR7K5jB5",
  "key25": "fbWePKyQ2o3H2M8WzLYTNcUuyDX9ArUGKFNHrAGEmytG8eD83zoFSWbzN6es8nbkQ38r1i8Shvd3q4AkwAe8zV6",
  "key26": "4Tz5DrqpdH4fXsPRUQGx8beDATPLQ1AVcCCUTsGVreYK9uBw56zde7NJE5FcwbpLz6WPVUHEDQD3xgXE3C8gfqoT",
  "key27": "28e6uRC3kpw1tjBNGmEKtQFgKy1FBGAvJunHJ6Y7VTy4Rta5YWzHzxL5ZReoN7nxnGoNhFKnP2gXDS3rKi8LMBpe",
  "key28": "47EAMukzRVDf3DZ7g3Thf1ogumg7GvSQuks6bnPdeUSJpiySWggTNrEhTK78dZcojKpQCnDdhoUjSyZgu5AGhFe4",
  "key29": "54mzVMwBVAjdkHwXmdFtobgiyNmeNkMoh6xUBskcL9un7NccaVYURa4BTtKgHa5XRuzLyA8TfJTonsEZkYpXXtKp",
  "key30": "4eocwzXAJoQMsB7j5WpLwGAzWERTc2LTqDVbb6h6GRenTHSnFvxs5xiMdfppbLfP4Ko1owivUxpUJAijUNKb5YL2",
  "key31": "4TrXxtYtD1fGUZHeYkvkJ4GbsXueQVVne8oBmbUaW4TUHzinYFMbSfBqNyETAvM2nzPBVAJAf6iy9jMzMKAduxJG",
  "key32": "rPovAqqhEihL1WuSN1emtLSVpRwXBjSPaxFL84erW1xtTn5hHcqJDVBMiBwqqyuDKs4UdZ3yadVsv9xuFxpi41p",
  "key33": "4abuBX7d4JND8F94kDBYUWWDpxSgmcJfNZapTHJkD7egpUvJe1EGUXRqMcW2D39Ah1wMuUszkiNvhTchtv4MyNon",
  "key34": "kT1dE7UHpoLV4Nwm8d9UA63LZJCMi1BCU65jTKy1spnEnfkcbmhQgJwULyKzCJkyh6ehLThZFVAWEsEubA1LgZo",
  "key35": "4AURZwK7fFB9tT5BZWdN8GY1dmbg3QjuvhhcJxBoC7bPxdhKmGEjpBPHmk3jeoFLpnZTysgJYaPEekBkCRZsymzB"
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
