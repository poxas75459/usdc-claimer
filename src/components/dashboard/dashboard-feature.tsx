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
    "5VcFAnKHHb3SRYYNdJPF5uTgktx8hmf5WaxnW7TJ6YTrhwXs67h1svb7FKa3yJKJJJeE9x46khQZ18o3QH8QrHJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auYmRPgfpszncyQ2Ra96iBWBCsYCdaRE5uRfrsvGjZYYTskGWBKEvKpHZDxsELPD1Ww2z2tYqdSyE3YSRmXJ6wP",
  "key1": "5bj1wk6s769t3krUKRyq3smAWsnuonosy3GQLjhEfRzGMDgxu5FCzBHhYe66LXzJahmcGSLUceHRwFdNJ7mGythr",
  "key2": "3k6vGsf7RyXp6YY6GbbyHXfmNXbruWUekEah5zuPJSwcVjwRcYu1LAgU7pid2jEAVPK9aM2HnnUHFZijqt9C6HGZ",
  "key3": "sVpr5vftPd1RBeddUMo2BgHAvQcjhWc4JmxgKjtN4WRzDhGJTWgzWc7Et14ZPgjyB3TRG8fyT4FebTdfTEepWVo",
  "key4": "3GBWGvcy4oMuL17ay8QaHHs2rERS8zfKvyKuJvWfRC78ehZBhJcxnJRw27eYoyK4DbXcub1m7KJjVevBWzLnjYQ7",
  "key5": "2adQca6qaHtDN6dUTabzNSwjZ3ifULf54hztf4Sde4X5gZo8j4q8oAYbKR8KWU9WDfXoE4hrQJiFiMm87BQHLAsK",
  "key6": "4LHcv4aWMBxAF1hzmtbhGB21KXoVwrrPQwpZTonSe51WhuAhg56j5xw6YF35J88iCjAfHnxHGDZJUtanmvj8XkQ2",
  "key7": "2w2bv9CL2EnaRxGDZ4qvX4TjmQFTJkEWiA2JX9AxAnvWxXBkXg4NLxzZ65GYjZEE7bC5cAdRy5rtAWzQjVP363jx",
  "key8": "SDQ1Za7xMHNxdstnr9qRNbL1Koq5TsHytC87J2Z3YoTob1dHGaJh8iP7q6HDfjrEpiScYQpynnbzzKfTv6nY1X6",
  "key9": "5jWsjY7G87F4U5Swsjy4Ur1ePJRPyUc7XEFg3B5m7nsJ117u2HDyqeEBzXW42JAPfEVvK6ooJZ3CVzSri6uMWLra",
  "key10": "4i2n43Rx9zWD859uEK9ZkL6ko97oaB7X4y23xxGbrzYiY1WyqRs4QQ1Dz4PxP79mMxuWi7Z9pktkPhAypGnZjyns",
  "key11": "3nSU6FZQjNAQf1CXiWRa2WzE289DwVV2BJoJhpXau7CpddjzD1ecVECMPtHPU7yNoJZ5dSKKmiAC7VRSaWHbFRc6",
  "key12": "4e7roSEaTeejJguYPW9fhwz8AM4GmwV7PQovX3LGvdADekWE7Ny36DY6bWRHDGct2DRskWpDfPLnmXSDpqRz4D5K",
  "key13": "YDFpy74NVYveUARgz461hmmqVLc7N688ZBnKjht5vLNafCMUQ1KsWbuUEnVNY3ZB5ShTPvKfYn21PcnQvHkNQc5",
  "key14": "RYzb21Xh6cHWeAmQeezUCyfsjs1AxyQg4ijndCySKfhQDhtbEjV6pqc5apBRwWu82zTFVgUkr2qJf7ECC6p3EXQ",
  "key15": "7xwocDPKGN1bzWnpjTFCSgAraPvQGyQfn8ro1Myam5t1xLoTEKZ7T71sWJXUbWccNVtPipbNPXYgkaC4Fw4Cenh",
  "key16": "4oU5PWz5jbPDVXNh3n7immz4JJ8kmorkDDCdMiyhj44jwTZchrz8FBm7WrhVLBbfG9W6FCmDGePUBrsA999ZcGnv",
  "key17": "3ccNeqgEob5BEkKJEXmc617rvqmezaLk88hN3h7yKGRZfFtEE4r5APfFVY4cZV2Acg7cdH62YCwSPa31SWE8DGPk",
  "key18": "2AWumPvGo9QD9xnkNv7RHdUzaR6LN4g7LiS2saAuyYigJ7VQJsm5sudWjqN7SUM3bAeEkSwkcaTLDr95AnXMDLr5",
  "key19": "2L27NzByLcKj4jEYRQJA8WCpdhK7vcDNFdQSRr5ZAy9xspHAjMwAKJ414F9Rok4qZGDE7guKG8eDZge7KXbC1uJz",
  "key20": "4Kks2PJTXA7KxTSdwYG2tqmf3EFXDTFimuL9iwfX263s7Ya2ozpsYUwZHNG8MVjducgDgJ5qqJiND3JDZW8UqRkL",
  "key21": "5ZPyS8yxnrrTqwdCXhKX4aPtjdkVmF2aUKLoNXPkQ8xHjRmV2uxeSUPPyp4CjJf5mckYp2THjcCRDP8nqnYHi5B5",
  "key22": "4RssLwPUNwYkhH3xV4ZV9qC8wPSZ5iitEkgUB6tJ3szwstWEFaYc4ZsjdN5o5DmnmmsKDbbqKRrZb64cDj5whDte",
  "key23": "4ERBAAiNYVVEGDLmSGUUYZeaNSwGZW76sBA1hvUbQwWrEjShSyTrAtP6xVsc34xQXDcX3bY2rVKjkb2mogamvLtL",
  "key24": "434EfqP5JYBTFqTnBY7GDeTyKkvjn9r5ZkmeMjkxprzuPBn4Qq9tgENEJ6NPvDiHwhuuKUcZ4LVE4NAfLnBLTqMC",
  "key25": "26TNjPpkTKaXyFMWrZLXz4eApbVw3ejPZM5KBZJpPo487ZipbbYQUgEFYb5JGMiq4gDV4Nb6LkQTQm1Bvc8PJi4o",
  "key26": "3c96SKkJPF1BrfgkBeimFv1jXbuYrF5M4P4KWRLnM1d8YWiocg7JKCCn4mSvE37eeFZigYTu38EHnNwsSwJBgEqp",
  "key27": "48VWXXSRnsoC5eGzpetVPfKE3DMWA4qgNdbQrV7AAHac3GQBWv1wWnWMz7ryWQJruFZXUTkP5RPW6KfNiHWbVQkY",
  "key28": "2yratW5qfRnCn3tpLq6RRFnYKNYH4nbnqQoDsrikcsFozjZGvMuhuctDDkDWz9QL91QXWY164zGhKEkShd7fykLi",
  "key29": "4NpcSWKmBVg8M2zKd8pLFmPiqv9yV7oP7dc3JsafPUauYpBoc2yzmWGmRxLw4iRCGgGuZajuvp8Cekdn99z8tpUm",
  "key30": "2VibGPa1LFvdpn898T6wbWVLQgU1kbGpvDaMqxwWGoGaAgxhMf6oqw9Jgoit4CGrZJ2kHduRBfchV85kJsJ4yHZW",
  "key31": "5werD8Zq1Wr92fGLc6eFqBXYw4FSFneNA5F3pQ5E1chhZtiToP2i5UMR5wgFW7Gk8Jg1C34Y9c42wEpYDMA8xTSL",
  "key32": "3eaFmJxG2qWdzJUTufRWumULVtHAB9UGhsgWAbJPUby4s7jfbWynbpqUuD4TxhXpLL2rfWtuf3v18tNbhXKATfiK",
  "key33": "26DHV4Lrg68mANh1MMHShCwz44TVG9Gn8WHpJmsnsDZKUStRchEcey7etaEa3cVvJwuYxoW2UhoH8Y1HxCBsk5hK",
  "key34": "5DcxujScpM6EevxzP4dQtCLeFhWdgBQ9VJReNkkhh7HaSss4XkU8odhER1oTJS7HKnoimJrCK8fFJtgqFQNksDyv",
  "key35": "LhgwE2EsgoJWdPiM9BybnQ8oE6tCdGLpJCGGJp63dJVmKgeYH3y1LwtAB8nRYkwSJu3oPQaaedCUA9s3q7nFin4",
  "key36": "yXoABG9bGZHuRLjjUf2ZTQeroSrovRpT12WjmEdKEKP6YbU1VFynYET2UB3eaBUgZxLFc7L1pWEeJnGR8KfD8mL",
  "key37": "572ZoFCCbt31J9PnoJe7uMFnUKFAQYF2R6psqbsfBrJ3qQpVqUsf2u38JtumCEh6r9cYwuLks1UdRbeabZ8qnp7P",
  "key38": "4pjy6933XUJqx4mDW96S4kyKr75CBDnowXJ9QuuhU9N8uxXJ1VQDEgrwHddRpKBLaLRaHUpg6Kfhs8wfRPycUvpo",
  "key39": "2bCNNGWMVabVyJmF6pTXpLMTdgaA5FN82pPYrU4K67jg5Cx6nVcP8HhwBMmqowcAb96wwYoHdiQJ5Z1ohZN6yQFv",
  "key40": "VDm6Hzzd3RDkXm6BGEexP3kHbA1rKuFWGs7rtKvAP6kNhHWVYozDNtLgdyYFbx2AWtDVfhuryEF5tu6iMWCBGso",
  "key41": "4p9Vt22Q99y5Pvfr3emeiZiwZBEXWRkXx2yBpZkuzBsqqYTHE4Zf6zRttijZkfviWiv9Pq4fUavVvT4KNqL2M6k",
  "key42": "2jyPB2TmQ4zCCz73WA3ywnFfUP52HLikggU2A9ZKBir8TtfPB1UVZq69mahGek7WztEpqrhaLVd4QdvJULD6Uog2"
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
