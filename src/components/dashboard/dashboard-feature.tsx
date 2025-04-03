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
    "1kpdxiiVNVY3VY4jY4oKmw83pQVYKGmuyYwnows99PbunuiwqExdfYKHsEbEnmShX5rXG3k6Yag53TRpGXaKP7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vECbkyzqBpuHFcWdBG7cBgbuYFp3KSs1VFVEPtSiiwybkJs4oqvEwuWm6JwRF9U1QWzCF91j78pqJX2QdSpwZ7X",
  "key1": "UujfyztkJsuzj8Ltiac7uYERJwjiD2aa5zp6SC5HZaWFoo9Zo2iB7GDuGnw27hVq66yjKHnMJDJAffsV72yXu9i",
  "key2": "yx61AaLFhrsqXoHMkmPAdrdK89RdjVu8uLi2kTvkjAYWAdyaYGfUyELEafae1LYDJXsJUYYpoBbThuNYbag7S4z",
  "key3": "4bNhsvMUPmVeDexzJXjcfzunic8q9mxAgUJCKuZiBfzXwP8K1dPsex4hxosuTWNUy2ekcENHB7g1gds4HyyHGbRD",
  "key4": "4pestd7XeCfCxwhNNhrQ4RV6uiAy5PCVP96VBBfZnzQT5UWLUzuQseMsC8uWSyCP2yTsjchFVKuKg6VbTwCZKwcE",
  "key5": "iL6e2dofVbjsFCHNc9JbkfCBWoQiZEyB262wYbsgMFVYUtB5KkJxeia2CwrcrdgADcqvUjZWos4iV1ws8s4qZ9D",
  "key6": "KuuMeDCtoAY3dmwpGqNJBubEwcKeitJdjfdLPH8gT1NJtpF82o5W61qZqFqE36Me7YtJSCEpg4aRTYU6nv3bkRZ",
  "key7": "5G2tp5fQBgSYHSZfoE4MimfM914VZTM2q99B3RvaqSncJPy4RHdmc6y2M1nnHRsmk7qEtmF9iz9dAaU9tzAmbKBQ",
  "key8": "4Ee3qVnbdYzdfrrUDzpSWp6tNV2jGFJnKjC27RVSPSwshAr6MSKAvZqzDT1ZQu8Tzjwpsr3BvXZihsxUa3Uxrkgw",
  "key9": "3J87Mjktu6yp6N5yp17sbnQKaFtDA1YsUxGMrXh1PEb5QNxXcmnU72VkWapRaLSqJHnwTBLnURpSDpo5iXUyK74t",
  "key10": "5VaYUJD8rgGGTVqLhmPX2v11TVmjx7ooe5TKK2uytyJuATp857JkF8QKrpoRdrUpmRuhPocYrNY6u3EXY4FLHhEW",
  "key11": "5i7LJ1snRP2kGWvYjznorkP66Lp16oydWHQuUKGck9Z14YumwkY26o4LgqhERVYCE45UbkS8nPujPjQxU3EGchXE",
  "key12": "27hxffUzZfguvYRYQpPrdieMp5XhMxj3pHSzVv8wWtHeE6jQH525ru4tKXU8rNE9oJEf3nRqYvSQbkFJ8d1AuRKM",
  "key13": "5DAqF9GJuDcaYzdmnWU5tz15cVXPVbEf3kZJibxJH3BDXMT9CujpTHcgjffodpxFJZ7N5V6FsE9p61VSoSt7ob9e",
  "key14": "3RJiruYmanqrp5yxqKnV8K6PGjz7SWfGCnRdvN4QQZ6dL6YCAbNcx5yvFV1m7kf31b2Mxti4YYD94ykiMPbHS76",
  "key15": "2X1Q6ykVFpcNiNzdH63UViuPktf4yqAbKCh7J49N82gxeRNW8v3YhVk58ziXMA7GZPrvWNQX7YkpaMWbGmbDGaUr",
  "key16": "NUKdzSPTSpKLyKxgFZzygXNxnhBxxyQFv2UyBW49YqeS1Fwz3vFfEXUGi75DcbuYZmNKRyzH5iHg2nMkCrXZQwK",
  "key17": "4cTocJAYn5db8ncL2HDMtyjeGN9Ahd5jFPe9nSF3tUtVMSzqCoSqrRQKp9RaZKJgz3Zfy66ZZwjayyvPZJBHhmz5",
  "key18": "4RV9zCd6J1fbhoPnVWND8ctEpnhcbC7nXuqbYEJEsFpL8U3kQtEGhXmE7KhP3KLcULA7FE2Hg6PiQVMkCWqQaG4d",
  "key19": "2BCY7PNYRAB5ue1C9RQX2x1aSVMpFMoXe4ou8QeQLxckDRqTmXXWhAZ1oy4W2oj19gVqPR76fXS4j6mgzMj9VfpX",
  "key20": "54H5JQyTeoz4oTMmW8Bnb1aawN2m6VE2K44aVr38oMiNUBjbaBNPjb9En9tzF2ZECcH6iNUjr85XaBvUwW1MA2Qt",
  "key21": "3sj2fsEk5VjgKqurmwsPicj15Q17qKdnCNcebVq3GYimBBVyjvms4M4dostuMi3Lp1CH3oQ7Z2FDrqTPMrgpfArw",
  "key22": "5DC7X2rEPzKMg9Bok8z2hgr6a8w2ZNPjU4jHqruBDGEGEntf49MDYHpCf9Mqz8uwNE8bnVLAkVcd8G75T24HyBkG",
  "key23": "4oHiMBRydGRADp1GrRt5qKwC64NhLxtk3fCmgcGMK27cT7sU37y9uquWcyxJPhUajEUgwiC399Qxkie4dcH7NZfq",
  "key24": "5k8LwLEm2pLSJzWgwr6pVrdc1DpbX324jtiqQVQv17J2rfYPCnx4iPd4LNV9sbgqfJJcgAfoVPAsYjYUzGfhuXG2"
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
