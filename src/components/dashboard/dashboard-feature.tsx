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
    "62S829xtSLo2wXEE5i4owScc6ZmVeFDtpFX2d9KzErr5ZuDzU5LWHgykgo7boa3gibjPCJgJ9niUCoN48t67KSoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37P4DWAiJmfjTfh8xstExCpa5AaEvx9psPZ6iQyDJhHBnyJNFF71gYtRdycMXaTqrsutBkbdFoj7gDhb4kAdx9gw",
  "key1": "5s24Pdg8U9kawumw8XzwGS55v9FNGUop53phVPsTDxm7Tb679rLP4hhmQMMnRLJ33bbFxABq1Wcr3uuNhY24GVJu",
  "key2": "3vSoHdhXjcXLQkfV8m7zEojc8WJFybDtULUKtHhUEhaWRuAH6whbbN7xPqX5nm82jUhiENNtYGBA7HDR6XaRMHRB",
  "key3": "3RwHChphuSjStacBfXevfVv7zdv6nibitTUN4SvPgtWQpQFZNRW1QhQTGgfGEbCtenDV7nvYK9ES2yon5ftYQi8H",
  "key4": "2RsQTwD4PE69n2a7EC1f5qASueAjghmiaXA7Lw4HXR3GX6rqDNandYY8kYsCicS1fQEJVkVVXZzLuze5DbiJDRqW",
  "key5": "5wwm2SeaVVVU3gJN52bpUw2CfuzAemQc57wAwUBYYR5Z39xNS3Aaddx9W1j5868vL77L6RbXpx2cXWK5A4mU5uTx",
  "key6": "44MQx88TS8ALBDpqTf6ZZdPYt3rTn3kfErrSMEUyke7bLeSQ1Lg29sfz6cRDpNQuyqTXvE3VuqsybQjYx6J34hnU",
  "key7": "5ynLeswMJAeFdKHH8HAZTo9Lhr2YfmXmGkpWHB77t54DNeendUpRC8xpVbbvTG8WWREibSh73mD4uM2NXyUzxy55",
  "key8": "4o48r7s8RPq1eiV8LpCmsHqfbrRniE9RveMTiigoNJfmqZ6m9ZyxCkk7SS1Mt2NqcGLRu9e94Wfu9Gz9FWKDwqLc",
  "key9": "3UaStwP1kFRiBsNzfYswL4B9u7mYNtESrHYFyWWwEH7YoWQw8n9Cux9xWKpCcKx8cQAQJyPPzPoWYUDJJfJ2F75Q",
  "key10": "5C4fbyBakWWKK5MZZrVbE2MRfE3hMRfKYxLgHRpwvhxUTmbR37bTJNNGuJaoBC7fZbPU2xikSuinrpdrtocSuzkN",
  "key11": "3SD5K6AW4JgBGzgrXfR26dkCAsd4PZc1hEsjUTzGUgBJaJvfKSuhXbWB2vQ5KTMPwhxFiwGU2qxKWxgeswzXod4Z",
  "key12": "sHjtX7BATpctuGU3Ay8EaUcotoWWe71TLWmoXHYxiF4pVntU4XYRtPbhJTm2qnPKt8QRNBKyBDaqqTBanz91LTh",
  "key13": "m23k4f2bx3e6VZRuFMC9RuLRQGpHkCZCaQNtAbJqSXQGUNCRCgtJhpJC5Lc7sFW1bD8qw95eQziwVC4qGx4TEgS",
  "key14": "2sbuAdW9RZ6fsALKPsoikCpwH2mVuXjSpLSooXR5uVmhBzcATs718iEaG95e16QtsG8Za6H6NMAvSKhcGaCvZLVY",
  "key15": "4AjM2LVnDSWAp7TuSMFroz2kt2JHxW4DWPkiojWV6MhFXVWFudmk4S11XZS6dRB4a9Bcm1qeNxJy6fNKmK4hL1M1",
  "key16": "2tWjjm3hdry3XdWCVrjpemTdZ2pQP2N8Bf2AWfsEarx52qP7tY8S1NthyF9u61xWrdoa2bC4jEmD2gfHVg8JptGD",
  "key17": "3LvdY1YyQZSbzNAmgF6mTDTa9sGFRotcEuUV4KF5XNfY98UCucvqZYozwQ81EVj5hsCLGn9kBkTWp4PCtr9MVKeE",
  "key18": "dPyBy94bVYHK6XjuP1iiChJAbPTKRUjXHCytdpGbZjsMy8dPpNK22UsZMXiwRx5XLAiJ6QtfhYzQp3iCSACgq9K",
  "key19": "4bxdxaSTZ724vGntnR8KUAYyYjEbYXH9npYKwAFLFvr3MyuGuwerPdRbq27uidyUsVbv9CfzyrYN7uMwM6hcN3Mr",
  "key20": "3RyhsqqQ54sqvrW1eJpvzgbnmUKcn65p1x3xTXas9rt9BVycgaPrKh5XEScQD74D6JrA1HFE8QFDMSN4whWVCv96",
  "key21": "4sDgb9qi7WGTT3QqmD3XH5J8xFEY9d2zGphKncYQvXEtPMwtshvC3r7ztjUnq27aMrHqsC4GELDkEXADRe2Svr5x",
  "key22": "4wUg82CtSiWQ8cTrXLjcQzWLZNZt4Avpcyqm8jMRiwLSWP5wMvAp4zchgtEiB81ByepecfK2mRcuFizgxqiiieq6",
  "key23": "4YumdUCeBpnuxQw3E1YQgciASbcJUWRmkUMFVXtdjX8yKw3dDJxV6Y8rixqvqSyFfnBxwozbVMhFYcebg2ii2ef2",
  "key24": "4JWqsJ1NA5WeJxBRGQEfNQ7yM3tshWKdSUNiMG2UD6pv5Q4u89G6FEaXzKEpvcfbdRFpU1xPpBWpd5yPQxLKZiFN",
  "key25": "2Fz567mcEoDhuov2RxvLEqTn6cnXnu6JyFLv54CeGfd1UtUqQJtabr9EoqLSXUNHdNTBUpk3zkAtA3fAs6q62W2w",
  "key26": "HkT6f68m9ofSJjdHZGRrpWMwwWVrDg3HLJxeUAa686h3NDPQXeDPJpX6F9KMiXZpDAvLTJdynsaaDKyz1fyzAg6",
  "key27": "3WrdGZ96JuXevMiSJ1n3ntNUATG6bXEdQuGFNiePg76c4PNhsFWCoTkisWdCuhGkU3uQUzNt3oierNbdNQsWcbwX",
  "key28": "gLztxoGY7Turq8Km9JBXAzuEQMzAiVSvs3635icVPNvhJXkthx8nNwe1LjvWK83mTAdDL6KqV2gLLfiq6GUPdvS",
  "key29": "4D2nmWvskD2BsxVaNyhPaHsQG2nT6tHMqnk5ZBs3bU5N85aShrQZ8f221Ut7wetsonHS3EBr2xYNwpLxPH4EigwB",
  "key30": "5XWu87Wd5ZhorCu3wuiEdNeUhxZ3kyxPSXusQxeg48agYtGwUxzKKtdU7pWDaa3ZbVAsk15PsBjMUwmt5xoS5QYb",
  "key31": "56UyCkYKNVCcpDtDripzPK4rhLqNToBd7QKbkxJu662JQHqLTL5pQ5qXScVNYcLHuvPeFgePSzQAFzPLaJaYRzWL",
  "key32": "2mgENHkyth5wuheuebZMKSjpb8C7dn4KEsD2ACySs9tMq5anvfSGCszvov9jy5xBLHzeQaWKj7kPnfjsKSb7idmC",
  "key33": "5c9yVsYXTdFHsqVoinJxTFzu2yMY3om4LWf3TiH3WoRNXyUQBbtxJmds9tmby4si1v985xsN5hYS92ts3TdYRCTA",
  "key34": "5hyauHNn6R8mgAjShdqSMpoVaMxqgNXv5jvCyMMAyp1SBGeTE9cVSbkgeQYpsUczuqNZFfQ6rX8acUfxcDKEciqf",
  "key35": "B8JWJnC1zFWfCHQfAiAwQw7FFFqKcQ7eAYswBYf7PWB5TnTiwJaneovNiC9kmcWDQvMmmTYhat5NwayBnuBSNHk",
  "key36": "czUKWiBCS95DjCiHEDieqkrpC2wDcBBJMucUv5bqeAwSUse32UQGtsX5gyZk5a1SsfuU2mAzVscSBUjsaazJ4cD",
  "key37": "3M8PETTdxrEALGVKL3aaZoSTEH5sBNgxW5oj8XRLwDQjtKR8Kq5VaLNHrwGCCtDBcaiV3jaBzJJ5grWnGV9xaTbM"
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
