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
    "5FjdEMzYNrS7RnUHS9vEdonAQRiN3NEDUSrRpcXkMRVGdMvRwBjgK6NL6G1WEPa3CK7PZdC7WJ1PMyVfzqwZ3D2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRYR71hrHEcJxq727WwkHRPUyEqSffhFHa5CX3Fba3g9p11qJ4k1B5rA9mTdLCAaxCtStWWaWdXcuCk7wz9QzN4",
  "key1": "3rbMCWZS8Y9HWccv6GUR55VRYeiZbnK64dPm7bfVuUtEyjVTAqPtutAGyGPFoYJ4r1aHrzgeAwkz4LtKAhTADnpP",
  "key2": "5NigELkdbyxvapSTvbPPxZTzjwPUGjXgi6K6ooyGyMe6tqbUrNToY8ZqJabgcpgpmCbRncoXcMxBMDLXGGw1auwk",
  "key3": "4shoZ5mhNBRgbaNQG2FGFQPu3Q4cUso5ZSDrY36WxskqkMkNdx7jAx7jFaZFSSZKdipGkxQLx9sRVCunqeq1aFwk",
  "key4": "2uZDiZEcx75m73ZZhfpLtnCgxmqZfVV3Ueig7hA8QYEZsE4qpSAuKPCCouQGGbXb8QT18mrNmC79H7LgcYBQP5DN",
  "key5": "4jg1W4qSNPB4tqHJzyGU58hPVmxbKh4bJD6mzWpiEfcyo7gVJ5XgM4uH8RuXA15Et36teTRw66aHuYACLw8j8hGV",
  "key6": "5vJHTFnW7LyZYLhFmJs25qAcSpVcFDgUkKnpRa93W4hTcYXDDtwSe8yxPCUgVDg3aSZfgUHgNV8RFaGDBtj8Sd7",
  "key7": "3JR2Um7XRorKWio2p779tvm1Ssbb31WnuGDnJNyKFPCv6uPViKuZ8zZwJxMjp8iMXjhM6skJmxwHTAZ7bubjYrVt",
  "key8": "4B1Z6D8N8WEBCpfzi8rxP4ir4q8XCmnpv6JAtcZhEuwWCHNxfzvvz8vjZuS1NwRZvY6ZXHZyy7u5WmWakP4XvtFq",
  "key9": "56iZ1NopJGYVpj6Xeysx9yTrXk6t7Ab6arDHnZyDLxMiiZbHnFm1n8EDXPQJM5XgjhP2dSwEUmFgczW11fMdoEkJ",
  "key10": "2PSFcTDzwNUAqNKoWQ4jFMrdEAzeChjJMAfGfirgs9VY6cksmNUDvRin6pZK8jD2WZyj4XejFqFFXVCaMEGQmAKh",
  "key11": "4oaiFQvUqo2Wubhmnpy3Xn4YZWxCFTfzmUup2qZaT6KAXroCdWymC4kQF5fVQkTw5rsHemF9G6qKTWDmHQVr3Po3",
  "key12": "5946uxKE9MBLVMN8Gjb1sYURwjcR92awgMdQmSE4dGjnRfgXNYqrd6a57yHwJZPp5KXvBrAS1kegFtsauoxdHzxH",
  "key13": "ZzbSqmPftY4QbpGQR3T6VTgTWVn9kXKGWJBgjeGe6rdnhvW8DyEWvhR7HHHQV6Yt7jDkBiMpJh2FDM7R4eYp7D1",
  "key14": "5Ju1ZRu7iNLSBekoDaBfQzXAHNRDk74d4BwP2sZMJvus9tD2NFn5iEddb82oZekHsWanCKiTvEN1A16ZWkLXtBzL",
  "key15": "Jwts1YzuCzR7yRVSumY6tNbP9cnTAwkKS18Q6bjHovKVFj5i8waLPJrmGvakNuuYoHkN38doPepq285jKYDzm8J",
  "key16": "2JLWZCLNsjxRbmYmJJHiiSKRbm2eF13KEfNoiUwadbxCXhWy4DMQ8G9ReXw4d1kt8nak9Sjw8BS5YS5aWwW7kcnj",
  "key17": "NcVf4soSsPBj5pqrgDJMqPhpCTCrKY2vfQdLiACzYEczmMwFpEduC8XwWcu4kUstawcjCorrzot6hqkszRTtonM",
  "key18": "9vpiAuJt3jjoCxBnHJcwZ2146MiAtdT9bcX9wdcrexBL6DQKao3BgpnRCGzGMbQuW9ubKAvo9hnkW4SrWCPEXVZ",
  "key19": "4rtT1rL7PAwYNrb1LUfuJw1TSh82xEqXme63VxEcdv8qPM3QtX3YVhgoy9iaGW1xzHUAMYgBAJNe71BXDtSAiEbs",
  "key20": "2eGuCv3gdiNAV3LmHpbWebfA7ajUYK2nyFtwCG57VX5PQkZrezruUQ8mfzk2ap96FcdMxWVntVDMFPGeTzGiFK5Y",
  "key21": "3fn6RTTu4mGBjckVig9aApKEDT8nhk4AqdcpFyx12s3zciGXobVPrP5v641SYpFoaxhS3DqvHcSXWbBLeKxY1GgK",
  "key22": "5PHEXXvjGLfRPdULeKj6HevTLo5ENFGxCJ6WxEKi8FWuESveyNVWKytct9BkEJDqNNEEFN63gxGdMnMzS9tJv3BV",
  "key23": "37VXhxcRM8VLnXqTLpuuCQQqVa4LmK2HHygZYmFUTtX3bJ9cgLGZggwkPvAuRVazmorXuLKrrp2Mgu3XPjnkYEfm",
  "key24": "3nFbVmjqsNcbKFDNHnJcjeFz4AkmmLyBecwjSgDTa1uzbaPhpX41dmDDmac9rUegso2WpQaBBMPRBcuk9tSCTXUY",
  "key25": "41Lp9keJAJzvAVoKECXmy6YRUKLu4AXaHFXKGTsGML1JdCaudydfvKYmTfDrcHRZGzuUfP74JHtQHiHjn8oMheV5",
  "key26": "2ZwygxsVc2dPQnmmdxZ2HTs4RkSumLMsLYzW5caX2ghyFmMWELKifnzzSS9zbp7CYG4JZc5T3ke7g84WwacXsEMC",
  "key27": "57YwQBsxeJMk3tuV6fVKw7Xt5WhXabybbgtgwViiMrV6n3oP5i7tskMAX2meRRAN7ayrb7GFz6CA28JdVft98RFP",
  "key28": "5Hrkjgwzyvtn4YkNK31iDLdJNgEDSaQXv5csHj2XVN1NLZJubYwGFt5ZsEZGevzQ7Ys2V5WnoXRfonDQNd53xFRc",
  "key29": "49nfGVKiH9qir2N2dTDMddSjRUBKAe4Hj2nNp994tPzxCoQcZSYw9skoRkYxDc4u3NgjzVmVXg8VEbxmyV5fdLoa",
  "key30": "3KmmRXK4MH48vH87utjfCvjnSwKkuGqTLmNTxNZTeu3efWuUvnmaGXmwiPX9h2oeK2DpSuqEncWNJ8wqvmSaAfk4",
  "key31": "5bXaTjZzU6tJ8BeL96fpJyYJ9JDZwvDqB2FMrF16w9FuTAXrAVezu8LgtowdrdaokvTk2dQmAVKQL27Ze8o9vYV7",
  "key32": "3wGhDCeJxCeZhWT8k2JB85fQvdigxKfiidXzqFodPVQf42sRQoScDaPPYYp4HGfen25v6XseekM6uKPFenaGYe3z",
  "key33": "fffgsNGQFnYygjqUJdgmWrRywFxZZjKkTvBLdG5fXxm8nxhJPXAWoYJRmSLQ3TnhnzYs3JQ6bFiLa9Q7aVVKo1q",
  "key34": "3XxddXNAxp4kT6Am6QAf3WvuVeGJdSzdCWmgU3jzcUWDuqDPBA4ThkVXJfTHNwqa5BMC4ZJZybc2Q8PyVWo8bxsL",
  "key35": "1Hj46mENayxYM41JwYU3bAofEFbxn5wAPst3iFkwaji31T6QSovbi1AuUhiX9AZEnoPyHbBdfG9oHGUnM2Pmb4y",
  "key36": "Xw7nGCuEJo7YtMMKNk31iHjLfbnt3vYbxBuhpkVm4patNPyqrLsLu4Xx1ok4bwPuZXv6i5eUiCCPoqfPW6nkYRN",
  "key37": "nopwv7Xr3QtmMvYS2X5SaD3XJe8dvwnpFzoNtSK3596y1qj6nqcpVioNbRpULBTzgxZPDk2UNeUwhhgGKbe4tAP",
  "key38": "3eLpCMpnPURGjKUtRi22K4wbBay3cEajbk4rXgThNVrJJPCWroRu5hqAyLrodyDCL7uaimpKpCVAGdpk9qouYMch",
  "key39": "64cBzzLtKgoKBrdsfXCWcKozNyxvYZwT5xUNfi5eBpp5Lsmt4uyEDrmgGPvwyy5DAPfL2UnfAgz9sX4CLAYxTQdv",
  "key40": "2mxKX3Jw44c8nsAEpJdbKd9xXYyfYc7FFVWeZXEA1fmrgjJZsjYtiRs5u89aztyaPieaNVj7Ur358LXwXZWBofpv",
  "key41": "27ZyjcZXKm7d68jZuSecKnwAYWGYHctRkt8EeVwMRHFSvXvG8srz8AJcVBzKaeragRroDeiQ3UrfH2Q8yjFyDP92",
  "key42": "54fxLj8nTUzdPoBJ11736SdWtWxAMBk8KLtqHH6i5SNNo9K9sNUjvurM6WZUTtdRb7PSqD8F8Eb3vbt1vNXbaykj",
  "key43": "5xjsA73KxjqbyZsvCnQL5cSUm2LiNW9DJFehnkMJZUV5Y9RL8QKiePcuq92naAVaC97r61uVk3TgHj7JzEfJRDer"
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
