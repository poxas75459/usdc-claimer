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
    "3K91kqwc9uWPNdzaTTydwy8sdXCV7b7TjokQTTzK1mXzEjnZeGoDsFzujx5D1VU55njeGH1bMtS2MdDb1CNL67Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMsbFELXcKN5WmTkb1o7Z7PFYSJ2n7ntMCjgFii6TTjJJNufLnvY3PhcCbfPNSoimP7eWEEsvBee9gdum1ZJhPT",
  "key1": "2Qq7VL3AafMMvsfXnwNstwQXdHz5fpsnDe51N7osJmjFTkoCCtDc5wr8kGch98xJNxwe5FKdKNQSNQUcWiVDQZa5",
  "key2": "bcFL4HwBE5M8VaJZUXuh2Hu3M4ufXn4b1Kno3chqxr4jT79edmDrmM5EkdGUEmvgxiecZYRWQkeCvSeJ7FqKFgJ",
  "key3": "38vW9gjPiVvp21wvLJtbXBu7VxoKDD1etm27UAG1m9bsZjzMmhcyuL1mWQDhbMAxUTgL2Me6YcjTkC6dbPGyu6Fs",
  "key4": "4V4MaBhqLkvLo5SVWcTZoXzPyx7sDnDVgtAEacpeZEHyL47wBuJeQgGbZN6sL8pcq3dLanfZiTnDUxGUopec9GpA",
  "key5": "2GppSTAEGpnP9SBoFwarbddjb9NdRAkNmTiagk6CW9eD7npJJ3NCzHEUhA2c6JQeinx7RfT2TeRhTDFbqWHYpftQ",
  "key6": "2JsS8qqhuGC4DYibMFH3Nti6Zt8Vt2YzGWNGkVEQRcJHw48ZViEuqGxzVnCiFqbNexYqwxWnNSFwKMKS4CKDLu8",
  "key7": "2pZkjuxMGusvc9VNaCnJdAhraEBj8gsFUweMbajwc4LjxeAxHfZq3h859uJCmkBsVwAi3q8URLXFBSbUjjHtpFQ1",
  "key8": "62wrABgUJ9PzUUW6bGfX5ntVC7ChYs6NYV3nDcZ1t9VwEPUU8h6LDVc3HJbfzzdkp2xZ4QG9jdVD3YWvvng2rNtD",
  "key9": "cUph5mmEXa5h7rtganwqYnHHwHw3pKxnGjZmbQFwgRpq8qUe2YuggWZ3EzxWem8JASt2NpftA2aEPouwvecLzqt",
  "key10": "2XTsccMnj7sREGM1fke7yHNqGhQBQPJooqhDEyux36URAW61XH2UjwRSvcUqV7mkxYHSiabcvv39apj5WUALhukp",
  "key11": "5zBwidmLL7Liu1bLU9ubguxSekt2B63G3tbTLFncoS1QdRHUF9nVfMwZ58ra8D4ZRGB3FHNya41c3v9wGhKerpKy",
  "key12": "uPvqQWNcb5jbmCZvSN5TkCtZXcqxMr7VtT5xdhhEtbxwkqcBip4toHwmVa9EB2LWC2MUfTToVWdHEBF8V2GjHSV",
  "key13": "3HfkEiSkgFhn9ktVf9YdNhT1ofDngmsd6evJPgdk1xmiNcPUZff8t6RyVjLafFodoZrm2F1T2py5C8BUmP3ng6rh",
  "key14": "2ETmL5NB1U2ajkpJJULCKbWbvKdWFJJzZvV4vEvwsupM5cEachp3y6i27oMZKAQNiCLB49NgwUCERXQTXR9GgddT",
  "key15": "biRb766Ln2LZQuVUQurCXqWVvPU4R2wvWjkcvTrEMrowwrQAWWvks58Dp31zPyoXRkyBkN9BD6Ky2aoB5DScSXV",
  "key16": "5UZoVGYaqsZoBvKJBjYdZsUQ127ZDAr35X2NNWopnsRPegDZ2tGaMba3A4JmCNnNxx1V5mkW8Bn58B3VT4913JGZ",
  "key17": "npcqjFHANGdwuWz73oS9WX34YogZybT126bwxtzwG4QsrVxfNhnmLzi2TU3oKqMefQD7D9VCHXw6pGkcmmkVBJo",
  "key18": "4FfhWE6DNPayReoxjo2fzQMNn2c3JZeDTnFKfnodyc7CFXRFj3rFAPGnJBagRiTTo9hkHD2bDehLP2s3gPysvq9Q",
  "key19": "48W5qcGqDo7CnRgzKyedDv3uLvyTCn2mnvYJMSHM6rJ6YmLZWuQ7UN1se7TGNSbTGFadtMeeq4AHFp1S7HSj6zhS",
  "key20": "4BHmy2KXgZHQVePAxcK2BFqB1WCmLLZAYNM3DJi4Jm1jtzXdNZmz9WzPtXG1nzxu3wEuoozGszeYw3NQ8USTRojc",
  "key21": "5WMuMskRJobymSzzZMkNf4mY6GKjm2L5rmdEZ3h7ZEr9vFV3ncXhRBjmAFZZa99hFoS2gwz8cgqngPoNobvrDe7t",
  "key22": "e5d5yNrKrbSGK1Q7FozXQ1VbAf12vmj53sY9vTJG5GfDwd2s3RHYGCa2dLw2pcea6nPkL7FNp3thziZq72Ld3yq",
  "key23": "3N87rySc5txn6Crpgu578zExv3rbiAbNPsEdSiu3FTVA8untsvxKtKNYVbRsnfDKfXyxwXPBwGibpRWrQKXt1JtT",
  "key24": "559XGfwhcpWbTfPH8U6KYPxbj1ERASDBbud4ERqzfiu6dMn9swV4Cpmdcc9iV8ESpwND7z75bDqKMAWn2fsmRGGx",
  "key25": "2ahXYynA3KJvF8zNcSMVsDN2FM1JXKvgisZgwmnGXydXMiCHt5g8ozJWmuUbQAnhrj9kVkHvS24hXnk25KEtPsvh",
  "key26": "MAd6EfhamR2a4XPnsZAxjzaxmG9MTZcgy3Gqp3NfdXxix3Sx2zu9zV7WdniKkt6JiEm4KryZqBTHZmHo1ACtU4g",
  "key27": "4hPgFJ8VUjkTCPLd6i8EMCKBSTkMLiRJhCrgNZTurk68PoPeokmKc5uETXYTeZE3E54SrwY1APrZ5kjEx1poLtq2",
  "key28": "2JyhYhm6JQzGZmZLNvz9MwjcFKXgH8GdL7pV3Myzion3MACzYJLPfSuiYhfhVYmqjrrSz9YB2ohFBvGnwhZykV6B",
  "key29": "3nDVDx45yprEqu9jhC1c9Er2Jj4FmJ1TniZ4QLs5y6j8w6NSX7GeN8y73UVg7CxQBAHWMeYqKrqwnnuZiAbKTJfZ",
  "key30": "3MnxtoHqCauYkBf9JvBZ9P4ZcaVT8cBUb7wDghwmHsZBR5swhzMcQz499oSbS7ctYKjvm6QNJuPM9Bb3ikGJ3zK3",
  "key31": "4S2gyjMjFvnRa3AcbeBY46xiMJ1WLKwLpkRuN2CH7z6zxP9AQ94DGwpRGCxza9zsr8JeDxhrMVLxjRwKoRnSn9jr",
  "key32": "38Jo6nZRzyhmiKE2SC3f1RmEK1VfSMJyE9aCUuj1MPEazUBBQ6aWbu5b4EuP9fh1fTjfZHYLVhJ8oEKb3Ap487VN",
  "key33": "3z6C9tNSj9P1eR6saFNKhTAtqddYj2tGwnc96EENPTt2UcedRCw81iUMHrEbo3UrNsTdhL6Ve2t3aqifb35AsRkd",
  "key34": "2Mw7rSkiHtH7YZnc1x2UBFtzmburdeZTpj8gzwTnKBQG6HB2HkHPQtcPducoanQqzTETcZMeWPYXBzt4D3bujpM1",
  "key35": "4GzpSwQnXfCmH5tRSF5f9ie36Kpgd5YmhqHNzgDfDEUJqRZujW2V3wxrvHzcU3npy8K2HPhev1RQbPPf445kbGas",
  "key36": "BiE87tdtJuDEu7FELxrr8vdzgSTKwHom4H44FwHEqTpc7GvibxoZ27gAqkVUtFcXsSjhjiSvnDsBzHu54te5wDE",
  "key37": "5A2w9FNixdQRzGKG5STCX1ehAvMqkFu5o182MRQJGSdr5xQ6yZCJnQ4doj5k4m26kzvgco1P88gZD5C5XCHdfkdA",
  "key38": "29mCHXCJ2PfxYbGVWgnLG63Vdt3y9jwEEgFRHGr3yAUr3PgCmZjgHjB8cN4ThoLbi6CGHm8CirFBq69TC5LhU5dP",
  "key39": "4YxsAhDAZ2624heQbws6qesrsXGuLut82vAxn6wwCf39EqGGVGitDSx1CDnk6RguBPbqhg2xCwqVWNYBDTVcYQg3",
  "key40": "3MG7Vx6rLzozdzXRYFzjK42EAwvgxdCgVtest4dzBRGW5fpXTXxb7UsW7xwpgumFViY4t433aWJzf3kXwqoqgv1g",
  "key41": "4zQt4eaPWmTjae3Z5qEgXB2Vun6petqP6GYvCGYA1qyfJwKaHhEnkAuVFZabkS5Sji7EzfRQFLYFoJscQjHcQZJx",
  "key42": "2bD7upDZSepP5mcnuf8XEvKqFW4aCE6tev2MD92M36hx18GBs212cgwGmWMULR8pamZvpTzuDXNdaoTvKYS9oGZF"
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
