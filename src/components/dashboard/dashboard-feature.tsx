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
    "4NaTnyWHEBwJyyzBBmptPHjsDJVUZyTY2ztx5g85GhW43LJQASREtUwFQJek94oiKfaDC3LpirWFVsMXaCSnHh4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcznXYabiki4hEZxDWy8yMgxvFceLSfBcJPzfdRJoLpU3heEkyJyDdEbhRsoSdwLqhnj7Va32NZKH3NoTn66Fiq",
  "key1": "4iwQTCZbqQoN4LRV6c8aSwXTZCktW1LrokmLfbdYAkwKRQUUguoPX6myPC52k7cosHcDZL7rKrLyoiNQRJfPKAPR",
  "key2": "25BcfU4A21ALLHbrLBXC4vAhqWaDJQbuXPYhuChS9PChzYjykbB42eWKjLtmHmhwqF9nCoAZRdeYZuNreWFpWXzZ",
  "key3": "9Gy3XrCicx5RUhd92Qp5W6uPXJL82jR4QvatvmiRPKiEvynn7jfJaMBzgUkNMiKpVFRNep4U9h97sC91EMqz88m",
  "key4": "4AHVFPcfLoMWFGbdZ9kXgAnemhuuxDaGa8oDcVvsUpQCbdkLNQHjMZtNmaQQumSUgoqV97QwSPV47tFehRrYDGB9",
  "key5": "M7WyMhbuWU1i34ZCL7pAQrxajFGY77tv3LkwMeRnVgnPY2fDA9i77nkLsBWCDXchwmi8VULgXjWHnuH3URhBfwT",
  "key6": "35YQJz2YhLDV5WZ4j1vf7hk42cj4PeUXdZUXjaTK1z88vcqTrcUNv6zQTbaZPzFZBX4m1xvThF36YKmyGdekYV1Z",
  "key7": "3vQ7Z39N63Wfva3WCeUjUepgf228m2pA6GR9BhSQ3TXLWhEdHUVW5RJxC3Ypf3VVHdJfKsLApsXQxBHFH9MdP5Au",
  "key8": "4WZ5wPaxdDwiqLy8mwuwwJDSRfs2kVyMtgGbevsLPRjNTpxUFB3JfrD8NfodGkunTLgMVSvoEHDVGkET2FPkm4vz",
  "key9": "4QCgkPFZw1v7R2Touaky9umK9nFbvaszFP32jXYxUaDXsSpf18tSh2PTgvSsyjbbWsiFgfpT9B2cajJ4bh2W7Zwt",
  "key10": "62mooKuqtVmxrcNhksu1SjJd74ms3nZnnJxsh2UqBGvZPU3215UpzgiBPKugSsDAVHPJf1cRVzYX4Ja2vNNrbgB7",
  "key11": "2JwhmSuVgNEzAajD32fiqH4rFRSdonrCeRTAru9jaiPqBhmsgXjqfuTHFnsJqhyaPZVwRMJHhRw85uMVQ7i7h5Qp",
  "key12": "5YJzVVdNhcEnGSFT2uQFHC7JuB1SHRbtQGqHVfDW2BLM4F2VNsRAo2zxhWxcsHjoewWxxuQdeYdXbUAqJYz7gHMZ",
  "key13": "5RbaGs4NxDoJrrAhTXokTwKhTAWwmwt8F5Zr3my4rnQM83BVnxUzm1aq75rRkiFvr9UUSVKGudgBg931PEF6qrrV",
  "key14": "2mea9h1KmaaHhSPfTFbSWYLNZ9MKfSUoGPYdws39bXFsGqRaxf1he6wnT5kGRoehS3GFgkU3gpNqYyCQ3HQViqHt",
  "key15": "4jd2KvQmaz5ds431pKFZSwGz5umPyFvDVv8q1sNk8i5kKxdjpnmVmFRBYcr6fipDuX7pUNq4BHBiiy7VWQUqq1WD",
  "key16": "29LekK25xkHMRcezkL85coxyyg2T2gM4HkBzYhXbSwqvvjDHu2bdH6Th4LnivvB866TWstw4aUjUcFgrUDPpi6tZ",
  "key17": "46ikrMu9qqjhKE1ug1tZVrTUfj3FrUoAWYJkaP3Ei12H3zUa8p18hznfYrK2vMGwjRmgdYoYbVzVsM2GSVDvMEkK",
  "key18": "5x4RSGDtf5ffJvmeystuzm596qh41Q6Juq115YqS8S3RHJo1K79C7kMYj1pFHUt1kxa7D8zZsfUEQR2N2jXc9vRV",
  "key19": "2KmHMaK7SwKb9usspGeZpirJuZrHRUwv7B8mKnj1DRKk5HdrQ5ERM9ot8i3Qdh4mimX6izVYZZJsb9MuGF3u8mYK",
  "key20": "3kJRKeKdnD1Qg42LLFasSL5GvCPfnsYW7MHyXKKzGbKQZMPaNkoGeimMCxqvCQuPum1ZVqULcLE1rGC2Gn8HfJji",
  "key21": "4mvr6MiUsLNbYjHW3wjFst8fe4j1B52enUiRsmqPPRkVAZmNsLV3q9hjiEcqCDMAm5VqyXFv6YF1nQWYNuYZwaqF",
  "key22": "4jcGD4m3djrvvHFb2Qin881ftkxRTRCVVFPx5kzrNHzYTwJ7QyessoRzv1Aq5qBN6W6Kj2pSycxtTpATmB4z7VhX",
  "key23": "29nU4nH6Wsc9d2m7Cvoz9NV4CxpjxM2BMEC4ufXW1jT8pPZmftzsgtc3xatzYMvVPxJtLN85XgKhSFZaf16QzEQ5",
  "key24": "3LFe3MECwD9uanY83oVzH43SmzAV93iNTJiqp2juhYAGtnX1hEYHkKastv1KnGKLHUAYmfeA1dCRdW9kgkyrsKa4",
  "key25": "5K1CTe6QgaBjcZ5xEsjwxn4a5hyZ6VqkA77bNxN1t378gKWSXaEPiyQS9zQMbETWHTC8n4ZgUgYNsWpPnn9h3e4j",
  "key26": "62vjcfFbg25oFi9CoEbcQomESnaYaprLcSKZy394mtbnwbj3Rk4BEiPPeHTnPGPq8XTEbfE4m8MHdnDcirsLWqka",
  "key27": "5ptC335XyxCUoBJ4GZnvPNmSgoeH5BYMiGijEtqntZWGVCUDDnQuenXubYTvDiREKyqZ2Eh2gbobpWAiKMQQkGAy",
  "key28": "32831XJE5LNsBut8NTbvWye13qSDiZPBhNUCkap47BAzb9tKGHDCRFBeM5DRXbYfgeheytpqjPQmrvdqVSTfbQ75",
  "key29": "5HZHzJEi9BC8mNkgJCL146NMZtV1kyxQxLrcdq8xy4v1BygqyLDhVU2ectfMKzHxa7i19ArpFDFi5jVkBMUtjkZz",
  "key30": "2fvoJtezuFrm2tBvg1q4GgqqLusyCgKfoKDb1adrfsu4b13vBuPjC4XPV56y6VWjYmMkR3qourJ7tDS63rWLNAhN",
  "key31": "596U83MbZPFaDFXWppuatSxQeaqYM37LorAG2bCDyPN7HENngwDndwpYm1ZTCwV79A4eqZ4NZN55dx9uKhLwCgUz",
  "key32": "38TuWWfmCjXSvaxiWF94TEjqi4zvQx3ub5LwhjQWUDv3uWG8MvesZLzaTih5pGtoGvT4B4aa7GoXgstfMfsRvRaG",
  "key33": "5doMo1CgH8PK1UjWvodXYFLmanKAp51eeLj7cn3StZs9MLtbBngnnRpCnK7MKfXCzZwgmVMExbBUWdYBvV8tCGSF",
  "key34": "2i5ZwKaQRPSThE9PkDSZSLPndsUM4rmakVKf27uJX7ASJzwSP4qET6FZsUe7uEAA2APhKrxHCgPKf4D8p81nNYCr",
  "key35": "tfPSw9FqGS62ZMXwybKAesYMPWsa1oYsN3Pph9bbtatrfzLV1i9EfFq3zaBc7PPacTMfHWRSKXKDPgEXGPuHqhS",
  "key36": "4BovVk6hwrdSXEYuF2MMth4dndcJ5Y4MPGZoj1GYxk8ztX4sc4DkqXK1RdZqfLRo5DceT8hR3F51vBEESL1c4peG",
  "key37": "3UCQEmC6fL8f3bahcj9MhntSYDH6ezziEm13aCSSgcCk4ZCbDJAdwd3wNe9MLTKjqKSm87aopqSpia73gdc7YpBn",
  "key38": "3DNeFdzEpdNJTc6GVhHCM2zPricZdcixNbYJjFadVUJfHHdfBwwYzuH5786jcwviGjpuFtdSqRKRKR9qQUktkd8m"
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
