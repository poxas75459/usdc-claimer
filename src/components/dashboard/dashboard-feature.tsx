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
    "3RjuK3AcuCbwZmRYmH7jGEvapbbnrS78qQoRRxSgDDbFoqTuLU7vqeBDjC1GRkWzWd2oEkvjUseVBYy9uJ5BdWdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7oHjH49KRZVyP8WafNbvY9czGv2yAQbDfHJ2AJ9PGNHJnsCdhmXJwcmNp5pa4De3LQLA57vQULykrDBWxeDoEx",
  "key1": "4JitBxZ7U2GvfFGRafHNBZbx2Eki9NtZJaKuBcXv7tB3SRifHdDUk3QdqNFsvtbM6SQrGwpm8CoC4YjpqekzreBj",
  "key2": "2UhzrBjTNcaw8N9DxfRJM1dX88tDAc5onskH184oY8aZw1dp2y5cniK1v9PBQ2z2HaBoUbngvNvwCHPgk9y6BM8b",
  "key3": "5t9ZnW26ntsVqJtYXrqdvaCwzhwyz2iTCmAwhUf4UHL4b9WMvyKSFQynhZck83DMAdv7QocdV99YQiZExgUAkMvj",
  "key4": "2rvpbaygDa3KWKzhWi22Nw8apmG9tKDVnQHi92rAwEbd8QyRMs599Xj2UJjZiTFMgv1TWaZJ92mEKyEMNyXHDHWF",
  "key5": "4RU3syGNpbCLiutbyo5VkRDpEtK6jH1MgtmDbLVahHUc5EY4eyoasUt1KvBRdKGnB3HzJChXoYTqwDr4vMBuEF32",
  "key6": "4iCGzcYVsYUNUJSvqFN6EnFbLtZEi1bhBZZZQRVepgZky9RuGf7Bf1RkCxc9sKmuGSDBWCPfsfaCawMJGRawi76u",
  "key7": "7aaSL1ajCGhN7GpKti9XEMHueFZLN1LbonWbsZf72Y6fsvZ2xi1NJ92QvU9yhdwRMgGjpdDQ8hkCjomU3aRGFy8",
  "key8": "5DncbbJ96raGkNaf98ohSYeEH9e4uFuEBtGm4Wi3HHy8PmmXDc6Sxf8FCwBY4Bg2rrXC1QmwaMH1mZ7VXDGqaSnN",
  "key9": "28gXFnbzYYgjMa4Wcn6J83hKgZzrLwMg3j9EAfw3m1HGZXzRCvcBLwPqzNbM6x6yrSXsc8gRmy7ASKdYf84QFgmn",
  "key10": "5smQdWPkbHvnoScW4Maexp3R8p6H8T67YFHvG2caFtM79ZmVYzXhTCVgpDanVrGt1rATZVUesPyMfeuyBuQhuxkE",
  "key11": "2XnVqaRTjEFT2bDqZCXQKoEEqMwV1FKRyxxbmLNnhe9LsmFxyDxtzNfTuCzbDNuzm9ZDUiiJzpDiwafjXgVqt1gQ",
  "key12": "64d5C4DZHJyEj4DEUVV6pHkbkm9BAekLhFZjh4e4JmDsqkedy3ZftgdFCErAXCWAVzJV2AduBWicY5x8W7xWE59t",
  "key13": "4C8PHgSxuwT2FGTbeezB2NoZEELVsrRvLjhhtd8g91M3GN5jhJNqtiSigXxgfPc2EzznUELiwi53gzq5nbYvFKpA",
  "key14": "5FkzPw32Cz8kYsJAyL7ukq1wEuKJPSL1LQiYF6nzvip1VJMqsLetHj8oL3MFWPwQPC5fmoAVAUmJXsNjHK2q2smg",
  "key15": "4hGfw1qGsiD8KTsrWuWW3ZbD3KMpiaSzmwmhdLQ5fw9jAiLTo3iDKwUHzLH3JaMaCq7tNSeZ7CJz81CM5anm4CgW",
  "key16": "3xcM9cdgEWt3f1Jzy1aB4Ms8wBJoPdPJD89XY8xhkH1aBKaX53pDaxHWkXQnoMVHx8KxijvXWg6TmahYst2uWBu1",
  "key17": "5qTs6yBxSn72ZsjKV1ShTxyYF9Wg2a5rHooDDgaZQjifjhi1x69BTsdtbf8dHES6ZFVN4FS67Bx86FrWSZCH1xcy",
  "key18": "5qNsw74tZQw43nziMx2ki9MppRjta4c88RbN4hfXh8ufvmV4hPaznX2fDGdcRByqbGKNghNzeN37BCsiV9zMSqnb",
  "key19": "2tWR2x7NFPnvvEEvdoXqQwZ9iKHq2KTKXC1ra9WVMpJS83k2j6oM5s6hnBEqVhuSU5r6wruy9ee4UemZMvQ3MtLP",
  "key20": "5nZVGiKAZ2rL8pUHRF9RoM8Uz7EuvYzpF68RZ2trtNoyMQ6pJpM7DQy4TwQhZNHMVTzb7KUxn4T7A8Bb2kRbvuyP",
  "key21": "5gw6QhxssRmFCS9wNb7viXXHw8yCsXLTEZ8tecQHjoWqusUXEvSxVMw7LQyK7wHM7vbdgAuWX2NDwJbkGWQpX654",
  "key22": "obkACgh9MKL3ETETGvAVsMP6WZBCqMSzKXQ7GmKDGW8Jr5SjRJFrT7tNV1W6vBqJv7eFuPJdSZ7ZprHPAApWFXH",
  "key23": "4bUYEc7PHRVjMKfkFLYRDULw4Sh8tXE9rGGKJGAPshks2xZjtWk6615sTDyQu9Hx9qVCX7rUU4tZM8rPEeT1yVHy",
  "key24": "37RBRTSgpbRhy7KYSG5ts6MqM7Rd8D6KV18SBEn5M23EJq35bhM9t7158pqQmgy5tbtLdWatmkMTAghceCbf5ZCX"
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
