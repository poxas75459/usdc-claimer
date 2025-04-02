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
    "49cpVC1uxWRPmE5eLbzrCD666hmWfPXAX4Xz5D4WPWHgusBVtvdDATCXregR9MzBxoCMfhNjFJmEXEY4qf1iVchR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8QmYtwfntYSYu4tMgwE4AF1RqNE9QovyXjmJ7xWUvxXxwNPytmwB4oSWGC6Rar2p1B9fcpoc587KNeVXRa3as7",
  "key1": "3BFbMnudzAaZG97XYimTKgLNoKDYVn48BtJGaAK48Y4DNUcVLtZyyoGeskXTxMSryY8cZuSJ5QixHD3PyS26K7pN",
  "key2": "VochRGzRgms333ayHmD7yRfp4iM7pZ1NGTcfFEW1aFK3trZT67cQJEE9KfgUYuWAFs9NtG2kduT4xn6i6SuwUyp",
  "key3": "4gf4vxAsGw3CqpxnPnEM6amqZTdZw7qgsWnCAjrxKEf27FrwAE7ZYbzz2iccLPXutEwvxbF2oemJzu3MaD7LtyLF",
  "key4": "3CPW6Y5p1w2EQbLPZPQhQfc9HJBVc2tSZMBcapzvgBurBzbnrQSr7NX74KheFwAFTwyskk5n6K1KhdWE761nXEHn",
  "key5": "3acGfouz2ZyJmrGXWJyQ7TM464MaRkwPsLCktBFnHXaWUrUEqAHSjYy8zHVeodWnQVGk3StqFLKryL6mCMCAGyhX",
  "key6": "5YbF89bdwmSG1wtviNc5W5jYugkx1FY2sAQjWpoHBGFTeF71qczeFzbxSjw2FFK7cf4xuEfpCH2PSjGkmZGyAMGZ",
  "key7": "zbkvkv9onMdx9dpU7EBbx4Ph8cved3SChHAZ3Te8NmdF7bCTjjX8nvYefg7rfVZTnQojtyFfLYLRz15TqqbhpLn",
  "key8": "5AvSmruaJcaDMCTAnBeUmRU1EUVDML7ZFR8Ak4Db9yH3Rf7utvMDLSKbpAk2EN3259wyKEFEzAd9cBhFk37MKtNx",
  "key9": "4BZNxYFuoFq6GnBq4rSn83ryxbGXYqRAdbc6vcBNAwaNshmxDPY9xbGmcTXN5QCMFDkJKQqE3dM6Laf2WnGDR6E1",
  "key10": "5kDXY8RHg3vSjbEy11G6PvQHALnhWAuyas1sCMUHFx5StHr7ZyUYmQ2b3ebQMFH1RxjwcJS1eujYvii5iW2StMNH",
  "key11": "64yhVKDcKiDDstFKyvVWtxkrtWzPSk5S9f39Bya8CZCYvcDdcbv8YZUqmRdbjQQtoJ4KsU4vweVLhFdey4VuXjDL",
  "key12": "5irkMsQU7qUt2nqoQa2fYVvdkP2s97Y2PRUREfu7Us81tJY5r5F3LqaFnsNpeqkXHn7NEbhEKXMaEpj4SGsNuyw3",
  "key13": "3PgHDJD1XPj6UDUqSMiCpNWvQiJrGDZC8aMAkk13X32Aujeo6c1nTUupoW8AzmfrJrDPWf2h3VMkEXBnGveuZAHs",
  "key14": "36vXsdb983HQDRanhHkBiysSEdVj97WzccQHnouY7LTFA1ptNS1ucw3DPKt49V9R4F43JXEJvVLbrAc9gomTjrBz",
  "key15": "56XyYhhUeiHLkd4swkjg1ztAWtfVjDGeBN9RjfW5Fyuxhk42tZ8kzX6oQBG3WxDDuAwrTWomw8E5K1MrcZXA1tto",
  "key16": "2c5pQ8jjpC147Jkwg62jzY9VjavWksLbTLzm2PdpZ21SE27GxgToXqd8vrP9yHPWCchpkdEyK4W69RRUxd5i7TmW",
  "key17": "GpvxK9N9aWKcFgNzGTAgVX1f6baSh2EA96tfLkcYawwVhZwx9txWvRVfzDAWfB7GiXWH8SUt4G7T5j7BhoFhi4E",
  "key18": "3RXw3koDfT5fCzd9Bi8wHpGXWDzZg32CJsEMyhy6Pj5UpF979WvgDVXbUGbgjyBfbPxjv1jXk9jj6YmJqPKhg2jS",
  "key19": "4eCmc5PBEHGWw9YWFuXaJNMK1HUMX8HTALi3YGj36JatTobxqRUVbCt7QA1kD5RHkckSAeHzGGvDEsS1enVjJ1Ge",
  "key20": "3jtPiPaw9CXFDJoCSUNU9dxTK6R6m3WdgTZHAxBc8LJzHMSG2o3GNgoyJjEzpmXEWGsaoMjVLuwy7shqunxaDec5",
  "key21": "4rT89wUoB8stxdhnPHsCjpXejV8nJuRAkgzvbr8MHfXmQPMTxiwQhzgPizpxBFv6x9ZbCPK84qHexF9oLdhZy89U",
  "key22": "4P778QyAAx7f5iFCz2DFChKkLqf7APKCK7MUxj8jHpizYaUeKAJtTMNXTRH93uWuvvzQDg97DwvDjSeyqYwmHB67",
  "key23": "37ai74ek12SCYeYcsNwFRfeK25LXfNtqeDZVETR9kbbsGLFzx2gHDqC3AS6fbyb2ys24EAWpXLMtgp4y3WA9yEP6",
  "key24": "p6JHAUb91Mz4DBcoEnBd1ujw8tbYwa1piWL8zR6UaL4aUbDNP2F7gf2eLqP83HFdFfJZa8wAmo2zRwcGjT4U6kj",
  "key25": "3t3vUjWPm7hAN9sa2oYgPetWGRrrW7hPbHwsrsnxMZN5eBXLvaYuDYCQMrm3KA41LEFTcMGSAmWrSFPJkB8kfGBp",
  "key26": "3RudPWBo1bTDjHGXUQvKXdfj4EBTTRp63jjVcbS7gm9ZSKMwi46q3jcxTMZFHz2fa4CzVA45EGtK7V3i9kWGAvtt",
  "key27": "63YdxJN4z8FetNqxu6bDFmRWmZA2PV7agFuuemcnX9Dy1N88KcRPkBigSax8iiHbMszFPgFaLEUcRX1LRVBLgMEU",
  "key28": "2JtnGSwR6dW9jWMgzJDxJ3tEHFDdbKjSE8rLcHcKyRH5qqNJLaq8ioAWPLsskYYAGnXELAYgKqcaxWXw6FEWeUrj",
  "key29": "3hqR9vPguFpnAWMuiUNYw6wiNQVoppdw3aP8x1foAngM4hxfwCdqRHJptjc34FSWdzC3WC6ujnUSyYvjXT5B6B9A",
  "key30": "4ZLLGuAZ7jK5TJ5uFYh5XSPkwFPUFneb3grfUCexnxYST1or5TpcYyB5MxBxzwt8WUxx2zK5i3pSm9DQd8YKf2xb",
  "key31": "23yoiKiAJ5f8NaPdmPMD61TGh15r7CeQtDiyoKGm8aMLFxRmbjZwJeMrSzc8DZ6HJ9QcxTHYUEaPwjBdASr6ohBa",
  "key32": "4Uyg3uohQeq3dFGpeEKpCZ44ubV21P6t4qmJvHmZM9Cy2fv4PMwqnUsQ4w9erWzbgT9FK7Gv481w3vorhLDXJdkb",
  "key33": "5cru9qBszirnPUyJcANBk9w37mxSMZCy34o5cUuiXcY6uJEAoSKHnTtSwLkvZdozBbL3P8KE22JVi2A8F7rqYRde",
  "key34": "5CUB1HgpmbE8qrStzsZG9TpYatAnenEaP7NZT8NFKPFNWxoNDNrvknZWgKbdAwfZnNNzbRsMQeS8egpY8bG2TSdv",
  "key35": "2kGRwRXsCemHzPNJdmwwtmMkLnuLEeHEf4xiSK51fhD59hGUG1RAp8qvAfHGMDFFE8YAbMr5ZNTvS5eHHgzT4mo5",
  "key36": "5xBMQH4cAAZ8NhLFvBQX4wB6FhfMTQGpH6VXdaSdQqCm3YENsfcv76pQig3KJ4n3We6rSVZyd3WHic1XXFb2gBwH",
  "key37": "3G3XUWHySpdNHRPdeSf1PrzR5x1AQjSzQV2ZzXDHtTkRm491YGmvZYMkpJveeDm7qQwTMUYQLJd9JnrYAaK73Mnw"
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
