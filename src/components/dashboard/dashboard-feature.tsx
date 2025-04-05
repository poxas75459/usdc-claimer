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
    "43MQn9defYAXogyi9zjXrQDazkkBDeqGTf7fVAceKKsB72HxMg9FvdQ4KZYHHFUM54Z62mPLNYJ14g4LvXj2xP3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxYvRNgqWFajrcKAfjv4n6GhF849XeWTmMa9dMnc6RAWiXaswtuYy3ZUwo1Y1Asc77KDXZFgBix28xSkdkYP8Xr",
  "key1": "2F3Bpzf7xaotvXVpeVqKQjsnTPubaXanzMgK7DmExgW5XCz2rJgN1apXnnqCejmqYvyveKzGCY6euQKWixA7Qbwo",
  "key2": "2tsYCRpjHUUgiui3gKZjqKTraJs1aNHmnJfvh9Qyh8kpFqAtgAVzRKJT93fd6V8EP3gcV5TZqEznUeAhKmdBu2SL",
  "key3": "4YqhzyRpJWsdq2Tj81t4HRNqC3VqRxtCAj4F42MddeJ78fLtZYuJMKSSZa4KmS9jkzEDUAm1HZmZJiMf1u1KEX75",
  "key4": "y67arZsBAT3gQutjudZnWz85NErw1ZkmTbyaYunyct8D6icFDLNcDLuHwoQKzgH8FaohKPFtJaznN7c3CQkHi4n",
  "key5": "1y6TNEpCCsiyugbdr7LvYj17RK5BgFGBwkH3eMcwYfzz94QiAyuBRfycc4fUTjXQzVLeZVffT8okjtftkv8d7ST",
  "key6": "5efJh2wDNSUPskQj4wHyWz6947NjiUeHFNLAfJUGxcygiMeaUrm5NchvPqZ6XpAc9jj7gZyJTwRVcQJfTT2qtoca",
  "key7": "8uwwTrbDmEKhc5y9PmgEDWabbTjq36dgpx9mC6Vhvcz4gLC3j1s2jpfrrncruo6NdHacXGVmdbttSdF5DXx3Hu9",
  "key8": "43wmbkReAfeSExJdiBfXoTfAwXoYV2f9q4aFvuvpBNE5FziJC3NZsgXjxwh6xqcFBervDnrP8YSCEhJX1AxUyeGi",
  "key9": "5wHVdJ6GqsYxh6DNN1mgDLbA8hwR9q6Jje6msZEwqx7m5pD7PdVHTaktKZrC3LVdqVRimXzpcvuyuuNQWAaudgVZ",
  "key10": "2ZwFbmXddAUX3FrK1kY51vriwAQ5rxKY1p7j1SR8GhoS5fua1zKTTxBuvZixPUHx8weWmLUA1kNymmmyZDCMpgeL",
  "key11": "3HwhNiRV54BtigecDsekDwjVVKNPydGpVXeJA6NHXFdh4d5vYrqFKGzQuWY318Y2MpEMBBNaXobnqDrnB6Bpx5iU",
  "key12": "3xoWS4JdBcDWDApKMXrbn5xhTVJ8tXgKH4RwA9aQrXPpxwKyW5vKMXXqcPrd1dffzvAfEznzDa3QGYh8oL29tWnn",
  "key13": "3WNQeJ7VkAUZQmqSokRcFPhjZQR9v5A1w2bLeTn1K24Zn3PEb6KrGjE2cb3qtvSD38udxg82vrLnjtecL6VpipTL",
  "key14": "h87SgPu4xtFMePP6zBWi8ALDF5giKcYsTKDFUMVjx5QPvtLe3q4zMixTQ219iFnPzr2QjdUmRytTUiUuZsv6Pro",
  "key15": "2WXSTKKjpNpYXZAgGufLcHpoiDkKvRyrcHUrj7LrrYSHkH8Prb7ByfBX6nunGPbZHAxe97KjsX35A3zkXEzwS2T8",
  "key16": "3wdqvDVZXJZAg3vK6R4SFtWCr49viAnY2q8zHjHGHXXz5fo2d6jDwpjFmFpdy9vV7M4335nsQ3qq6kMaZMF3aFDP",
  "key17": "5eW9NEkco48gE528D4CY2bS8pUXfibEHeJ39oT5ogKLutYCdcxt7AQXK2rC773p4K4ggkqehXhNhJxSpNGjxdjRJ",
  "key18": "3jVfizA25iT28ugg81TdLiFAYknwJ29jsgZRSrNt28mdj1pRcuR3NAjhaLJWyJcyaHqhVqJYpUXFXMisncutYzB2",
  "key19": "3BwN2ckDRSbhXxrkkU1qQaiyBPXKqq77yxyCALWnwNDCFfYgR559o7LGBGRb5SogEt4ipwcRSJVYdSSo1DCqDVJy",
  "key20": "4HC6VtwhoByvVNzkM5GzSBkmrS2ZyxbcSjeNJ3gc8rfcoALFuM5xFCPjAF1yZWGS3TpSxS8C6soNYAGULQ1Qfqgp",
  "key21": "3SSmn29tqiqNDriFqk4AyttYhuL8dTmQH6WXwmxGLzEWq3QWdQZKdQvo8zTZqifeuZCwdm4gAGR6jM7eriZby9Ui",
  "key22": "2VuEwiuX5Wbz9efMX96WmFnB2YgjCi879LCt1xE4WvzhCUT1HHD1kaPb8kGjoubiu4mhGjZL52VZ9gvwRC22je79",
  "key23": "2AVyjJJdCo6gN98WtMKxxucAgJsTV9ZJDUZAwaUnwYLB9HcLExqH1fn8SoRHYXvfnmq863u9VSGZFYfBcM69wFwd",
  "key24": "5VJ2wdch4QbrBPDU2nAkgDEShvy16BdVdBAkdcGN2Q7wZmK1ppiz2wfVQyGaj9hcR4UuMKeLCXxqy4uVPUj1GYAa",
  "key25": "2fSk2YwaiCmXA5opjFM7rzgTY2xmvkmJvnTJauAJZv4P178MJMrmJusMJBH3FYS948QVByfSruMSojPn1UvAVjiz",
  "key26": "3qiZvPJmCRfCSLuYBSW6LjMbCopcdqWcYvR1k8osjBxZgXjrKxhqgmTGyEsP7zmrcNFU5RwFQvQDxBWP6j2dgq2j"
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
