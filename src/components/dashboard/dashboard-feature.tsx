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
    "EkvTWRF2p5gJrEjjYeZRSciHCxJoZgTKuED71aLLXyrZ7pzW7VktHn4ynZktC3f8KMXBg7h11busZBEz6W2LSF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m42kdoipRKN2R6khKTREXz1GtXcaKD32ixqjMZwJZ8N9EkDJ5hDPbfKwzHnMJUYRrmbAfGzVaDtzkfSjq57yA7p",
  "key1": "3Z3XUaZPvvPQvyoFWLStF79TpZFx5wzZJFJ5CWRgRP5kLBi1w9PVFZ1JTn2ygt413cpW68bYCrtjGDAiuqvZTf4K",
  "key2": "4pytvx7zQirD3A8K8hTMLjBxERYtF1RxErnZJHxqawkZDGW8141fbiAksJJxNZswF6v8j57BfusZLhthR7mah37J",
  "key3": "xqU9FsgHzyZzb4cCY227obFH2vDRTFkG82j3rvMZAg5AcMYSs5iEkJUBYa4b7Dd2fShre1YTi5rytkzcT4sAbSm",
  "key4": "25uXNq838bTv9QHrjUBFghkniqz2VcbhJAW4BprqPEiZG3EFK9uV3jvkC4r1ZJUa8pjqrzq2S9vc73NyHqNKEjDU",
  "key5": "5mH8suX4uJdpGbUmWjkD5Xq6mtNCZkJktGXXEpa2xmgxKA6uMPPBH9Wk6PrDx2zDyGfqV9FERmqWxeseQa8QQFd9",
  "key6": "3FBoHP8guY6tuP14seMw5GXnraTU4KUZfQQjB6FBbByrjdpiWmEWChfoRSs8XRxSPW6FQ57VwxUCBUW6cswELYnn",
  "key7": "4DRkQrMy2EWUPcmgYpCHvPVhV4xA8zi39CmKC8WBVPP7xQdXqCw7ZEpywpTACXb1ZEjpfnhMdr8CEDYm1zDKRGmo",
  "key8": "yuNhgJscVQcUEmfPpjk8TszmQxccZXArx73dcDrfcLQf3Wjj5ugCKeCzZwhAJWsghF6sqwvTFQMRw9dGgVcrvLz",
  "key9": "4q7s87JekbCPNfL1KqZxppk8Ve2Sk2yZhgyh3xrSJnaN8ttXqePARTNhuK5GkhTdHADoCiS7BSZhhTyfdAM3cJnF",
  "key10": "uLg9XS6AB27c7yPHwBXUptfms9imFAc8ezmfRqemZrw4VoVswpkxsqWYxDYrKebRU2iUstmKrCuKjatccouzM8q",
  "key11": "2havJ7U8DfZShzTtRKGqsnYYBjGBswsv94FYKkajwKS5zXRxuYtXZDvAXC8R7aYHM8v1QkG6W7vEC319ExsLzPdG",
  "key12": "4D1PVy4kuQdZh8QNiWqmyVKdT5E9Rm1FFw8RjgNz98QxXqAChqZAu6Lv1X89PsbgnV9DWKzzooUNhdGCej1AiXH7",
  "key13": "2CJr7r2RLJHa7a8xtTqZqGAiQpyrL3HBRxnCn2ueqgNjKXLQJgdPK6JrMexjZYaJeSR96aQVMv6rpBFkqfeJiavK",
  "key14": "4SAH6WttqyVbs4DsY2m2T6kMQ6DTczUBaRabjwk31LYRhbQaACVUx3kHNW2i2V49wYdt2inuZ26MsoReBJap6VAb",
  "key15": "38T2oV2ytTf2De1b3ciBfnPQjv7XCaNCHJX2WdScvV5KUAuHYx6ruv4UCXJsCp7URvxACeK3ahDrg6zfVDwf63VS",
  "key16": "3bydN5qiPAW1V6Wy32mehsSKLW1c4HByqCdw2r6H48vS7vMLi6bfDcx5D36cnLNUeiMmWKQj5yXKJudg3b2JTmmx",
  "key17": "4wCHc1BiPjeA3zGmSBC2YH8UGJw998NGd9VjWcEhYDKDvnWzArUMjQheU4w6AwkoDFKLepmQJAgXMFWZS7GX6ubv",
  "key18": "dbw2Zs71vpDbYYViHFrfQUm6yvVbwBa4FZacyNvViXNeYuQRkGgDSgvPhnX5iM9V8yM15U8sZzENEuqLG4rCetB",
  "key19": "U8pBiqdopZLw6d2KtTULvEewHX4is4YUgzzd7YcsqFGLLcKu3SqE1bjtA21YRgnkLDQXN856bNnX5u2fmSFRXRz",
  "key20": "38iPriTYYiFDiakK29oiBB9fXSMoM8XBFLp2iGuw6pT5whkVMJ6F6wxgCjP5kKoFcsW62Jm7FBBjxS5YFeVQALP7",
  "key21": "4xWNmiAcZE23BHnEKpTQfKa3Fk9HFtozCSXkG27psSvmyMG9Sv6MfnvRZbVH4rA6Pxn7dSV2CTho7XrxJFj1QvAR",
  "key22": "3SdD2sx6ubVUkpYLbNkpgYBJ8XK2JP6nYdG1EMVYDTHXJRQCmNEatLgSETv5ejujbGoUGzPVphC61Bg5tuU7r9Sr",
  "key23": "66PKMamtM12SnjehJLhCuNvhAMXaGjFUCrk5DUXWRbxXjqtUU27vbq3cjqtmnUsqHVa8niQULmCLMH2ndtukcNeQ",
  "key24": "21QUkpnPY4h1wwHXKPraWuwfpENZbMErM8YE2PpBXxgd4fW4Wd1iqMaqgCKURuN9LNdY9gpsriN7xw3jwHrREPyw",
  "key25": "3EUf7Ahp2Y9WGjXbRhDt8Ap3zNCFhGxk3ZCFdMVE6g3K2BzWQrsqgoJktCAz39MBDCw4hM3jfbn3jPWopjk2NB6x",
  "key26": "3wo4SMVivvDZCCbF3ZyCtkX5nEspFhMvVqhgh18gV8o6x39VDqQzZaVo8gytCmpBfQeVtWRr8se24a5YAi5UtkNX",
  "key27": "5nTDE8TLiwNhZkW9PwGhvm3LiBNzDAXToS7gpfUfw3mCYRzJak4hpNN4KwbRL1KnCBdM3QPjzzV165akSKdpXTkX",
  "key28": "3AT39tQWs4yXS8S2AZPrQrmW21kbfvpPpmyChXhp5iGgMgRUViv679wUDNqGgAMXgnBdpvVy3Upsn5raFpYNuH3A",
  "key29": "4iGrvfrQxhtKiaDFb9FDF8nS2oQCpNUVxdjDknBYKYH4wnF5EMj27wmdDxNdy7dd7N95kHUqYJfmqRx6DzZpmCZV",
  "key30": "5D6d4YNfeJYJyh4JE761kzJVwsvqYrDAf1J1Yi3VdwEL8Sp3oqK5fHvxaTxLSUddMzMpHEmqvzzmzR4yc78m6t9E",
  "key31": "5bsDTxiGppDpUZpyBFsgmVG1tG7Pv36wMKTgRQePFxyw24ptY3JQwtAtciqZc6VFtLtJALq8qyAjKnbLEjGZvQZr",
  "key32": "4jkgQ7HoDot6dDB1ShRGiuB2efFZ48uYC2uKptNX4d2QMxy6URMuSbVAwWTFFLzgAU3nEpxYanrofciWT9N6SRk",
  "key33": "2VRXoqX2MtE8cca3pEVSh9thifsyNgzYnUmooojBi73vfkT71nZht9evaKjtZ3MujHW4tkJsqyXZ1A5TiMhyTPeU",
  "key34": "536SDpL1VMpZgkHXwSNTg88jCxkzAaS427YRAre3S3wqYpZTjsQ69xWdoue2Yc2tt2k6xEeixNnvsx7SUt7d87iu",
  "key35": "5R4BU3mToQ3MGme7iumrG8ReGVoFkfhc5aRpPAAprTwJcSfp9spYGRxgrxLjxetjSRug2f1Xk6UvcrQ2RXtQF8tn",
  "key36": "2DjTKA6FMnxnAwhBEMbthbcaiiU4CqpsWukrwd9KkYf7c8yL2YmaN3gkDhBGq8SJuUgCn6SZWcXsG3kLkr7HPWah",
  "key37": "2fU26aNz3xPE91jCFfRmXs6GNzTtj9QqHPs7KE6q3aJn8L2EiB14xqZwqMDX2LVUYCSS8fEYKZt39XcGegyxkUsc",
  "key38": "Dm3JFb2iXhQ7fqJP6duyaw1tuwgWCLkJ1Zc6AAGK1N9NjPACyEMTpKP3wZ72Bq2NSYQpyprUJDTuv7B2EovyJLe",
  "key39": "3x3zDZ5U9XBECQZ5sb4K1CrC6HHZwpNENdYv3v9GLxjyoxwnLaBJLY1fTM5ShPZgBysswe6GwR1X1ceJ8JC4WBx3",
  "key40": "5aY3MynJr3uQPKpT46bAmzDkTbZk5RE8Hw4H8Vy4PmHvvQsy9nQAM5N33vqoqaxZC7Gj1qNbiCUChjERRrowxYBd",
  "key41": "i4nsoqHHqbYrDBYKTWKBupK1UigmagDck933EDyqQe4dLvqMKjBDNwUeuDWGLtzFzPLRNvKHJP4b4EXHi14hUXy",
  "key42": "32Vgj2SWb67hntARU6uEFEsLSyEP9BtjeRHfhDcaqHkthUxgEA4bzYZcpJ6kAJVbatxnGHR2iFnwxjLNz5cjGsiH",
  "key43": "47cN4J4m5TpuTfNaKynYYWAH2rPwcBvAvcE31mkwWEqt4f1otvZxKrySRqpE1bwVQfJWy3wjbDH6Hj15cFWTizb9",
  "key44": "4N7MGSpazD4CQCEP6HX69NQfAwnCb45iisTyJpbvmeAs4MmWZaWzicub1gz7UZG8XADrin32AHs1xJYdVSCNK9qj",
  "key45": "uV16X4i2jxP6UXTUdEsS6ppWBNZdosUy5zL7mZmDZsezcFHG5WUk8Y4WicjSLMv98RBoSuDDhGHxJ44NNnio5Df",
  "key46": "5UVs7MfojBKZ46wtQnnzUpjCZSRRSPdpEjnQaCK65u5uAcTUkvsx8CKNyGdxrcBRxZ9rsEg4YqZuK5bTVjo9GYFM",
  "key47": "3sToGA1KehPpzP6Zaun56SSNsYSBJ1eJ2AmXCccWW3cdDg2Ltpij8zhYpnidrShKQepiuuBfEC5gzzpHJgMhrsgq",
  "key48": "4BUngoNtPGJqRzBs6mTEFERB13J21PSmh5oT4TtiXoSTJMvLSX7TfPSwdZ5NKXjtSf7ScBAMBXep1RZX1CYWYUTN"
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
