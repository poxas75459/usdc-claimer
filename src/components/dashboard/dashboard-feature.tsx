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
    "4JGJZnZkVtd2zc1USNfaskZBmx7LqSo5mLyqPsJw3F3JeMCsnWYJPzBkALSzjrFch5XpGRGWk5KaV34utvqBzBG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Soa5qFNXz51UjZXEsXwa72H8PcJBe6HkqLRmdLYqDHm2f4qsHbETWdn8jg2TfHsxZbaWHqUKnqRzNwoJnvnpMQk",
  "key1": "UA9ZUHZ7MrbAKbFz5GPNk2teEKdxfQpSVLH39cNYCZ4f8tmM6NtAKfiH4BciXXW8fze58449ZoTtn9Q3cNMX9Q3",
  "key2": "Pp4ND6nDwn4HYwtZsHo8KptSh5Wuphu9xRKpfWUkMXQEZqWGgGTJSsr1pCp57pwLZnGjftMs8KCqtZmbBNgQJpp",
  "key3": "XaWo3VeTumZwCcZ7bpCSUyELSRDCKoCvokzEXjXAzzDoorQiVPMaiXrzZ5j8g6Aag5fj8gcquj5wLuBmN3PFkuc",
  "key4": "9qy3ezLDwRPtGA1j9jiiJUAYHUADaadi7p8gkPXRqfZobAxJBg3N8TaSHM2cJN3oj4JzfvX3qPfdg4Ym29SPgzF",
  "key5": "4r3hzNWnQMZRozjXG2SduZqWUQzW8vfW2YGZzvfWrtfgREUg2A5QbRDv4dcPycFsga43pu9P6dLvYvqU55KcWrka",
  "key6": "5mdJyEjRU789shKaQCtwsfaZbdJ9HpLNnn8wsB26yU2Co7DtrjxfDr22MnouzGzEyJJxciJZ9TExGbox8VR3C1N8",
  "key7": "fyCjzRyWCiKyBgxaexYdZSiGDybHpEt5cLvCqDRRSTF9dLdozBEVRhoGdxkqCdmdUgeDeoo5d9mdbmjNU5eaYDD",
  "key8": "45u3KtoM6Mo8XVQevpUEwetW3WP3njVUmdiiARE6xVvCgNW7KrtJqas36twmq9b6rCYYwbGZa6NQ4ZmFneaFDwY",
  "key9": "3rquRJBMeE8WKnWsF27y5xfEdckeoaVTkzWNj1AnzCK4b122z558y7B2RUBNrHKYiQNqcwSotyWCrKCyykDktGgK",
  "key10": "42hhN48VYiLXyecYrjQuQ7f7XeQ6rRHi472i8xoiDkHTinsrrbiPhBEuF29M53C7qDTQdWSrqbnuKTZUCrKp1LGZ",
  "key11": "Hk4xfCMYErACFfP9vYmXpdhVvJFHHS4htferFCMTzypCbWpJ3qvQg8z71GBQHuBRMTyHFSDbvdm95EuAUF3kxc9",
  "key12": "5Ck5QfiB7jhA81uFBRUfGxPDmZf5YSyEokKV6rfSTP8KSf9cmtTdXdgy27BMoyzmwhAk4Hsm1t7cDSbTVPuWYNgN",
  "key13": "472iiMDDKfkbJPge2LL2xy2jCzL7cQSatmBq6dKoZaVJdX4cetYZ52NP93Eozs82frDFDbHkJWHcVLvGxC5TWWVk",
  "key14": "2M7skU5BjdoYYiM1HkTPvYr2RwizeDF7twNpPfn21kX9xwge7CH3DLtS4adSH2csxS3HPpdHyvV72rxFxX2Cc74f",
  "key15": "4fqXg64NMSyRwDenbRFEsi5H7NWwSjmFXCQ3TNxosoe6RHidAPjL4nSVrYMSDtH7hRE3jFQdGT8tib5X7Kx27E62",
  "key16": "4SpY613KQSTTZNvjN6UjkCU1zECwVmgXvPfoKMRyMeZPTPfNE3xhZtRvh5ztKwe5jv8MnqSZqNXpTArjcKb1oVxx",
  "key17": "tnQP6nCKygtdGJc1fj9F3kHiH8WJ9VrdU1TiXRRwTriXa5Jbt5hqRLmY2iuUXhJ5XCe4XVho1NBetTCnXSkogbH",
  "key18": "ozT2Zizq9dxt16zc7bUo6LFGAfWXt9Qx7hSSHZxEucxtDyXv2zw32Nufz96jKFThucvpgUU5i3uZnpmbS83R6Ds",
  "key19": "4JQr25AvUy5Te6ckT3DjYMZbCKK5TddPZGiM8B85JCLNSZ5zLWY2yMUsBLdArz86omVpVz2mQXCDWXxG3YrTwkR",
  "key20": "3iumxhucWPBn3HkqtsHQQoH5N5igzfKyFhx9rWZdds2jsoyXeHSryAdcBoYPbYnMu7ZnRuBRCZuApDTRcZCv5hbo",
  "key21": "35mJhrMNerF4uk4T44jGY32sov8JBexFX3sBk7Paw4C4G47UAvv9VyKpLvfvEaU5JAZL8Bm9TSVfkdZUkVj3zwtv",
  "key22": "3YBq7dGViDcLKsR2XWMZM2W4FoyPPH9iYrkemW8tGwT9TVwm1EbRiV1utgvBBXVKGmxYR3W6gmh1VYwvmWSizD8W",
  "key23": "5MnZQ33dASxAueZMqmUjmRxTNXcgWGdF7HJwycuf8rNZTyS4xyDQzdZcbrBScHrYBsmuM1jqpwArrSKzFosWg3w4",
  "key24": "377rGQT4bC9MSNsTxCcrW7rxPgNyK7T5WoLkjENT3v5CZmnJxGBP94U3GVMdbZK7Cmtn67JSEx3QsMXWdd7NSJCa",
  "key25": "4aKNrNTwxzvZ7tNXEBtsBgq6v7mmotmdZ4KF2nD2Nhytior5tUPXKdVtm3WK2Hp2RmiAsRuX16XZfVGWv4XwcVgP",
  "key26": "34pc34viLk2bqAkcXUhJpvszKWoFT8x8fXQL9E11DJmkpv2ToDG7gECpkwwvDcfvj4QM2F71bCGRJdJ5stjbzXUF",
  "key27": "5q8tX3gXLHssLBYWZgJhF5jhUXSi8HES6CM5GUq93ij6hrZJqUPx51b269Hf3DuswHHAzKc15Cgo5YeWwTH7YEWz",
  "key28": "2FsP2khBQWBvHiNtuMbntfpB6kAztz6oaL5911WPJUZuLzwqnYBvASxuwhoK1dsPtExGgceruE4Mu6tfwF8SzHH1",
  "key29": "3iskJy8n9zbF6KLhtGSWK5CF9CeUFx2TcrZqHNz3J729qy9Wk6GrEkUbd74B9WW74HmGW66AYuBPkuQukHWo8mgd",
  "key30": "67BnbtA8CxNTXUDZ39eC4njsNLboexBi89i75KuMRA7rNDVfc8oHr9b6HnzDMRw2PC8oh6UHHQA36nRT5A5X5eGm",
  "key31": "2RfuJFz9wrUGSVJYqCo6r2Umw3z1BEhsuQKUQNKqJue5rqiGToTEzfrDVuiByq9gw22xtssUMKBrsCH3bvPvJddh",
  "key32": "KQgzkvGm3ribDGiYmqDXxCDoP7U3stY7MDky7XvW6kJM6E3jfdvY7QLTW6xtSs6vaYFzf6A7aPjZdv1t8cCPa7A",
  "key33": "owY55a29Q1U2ME1bMRMAbYkzavtHTBDYfQZdsCu98ERuhd2H6RMLtyyA1ydtNYgDCtL5WbqHUBacicz1KwP7Rqo",
  "key34": "3ARjLfYHc59tZy6TRSnDqDAvx2kqf8TqQxWjbFeghRCVR38AzsYAievN5pSEz5TReqB6CbshJnGE1e8reXseEtnr",
  "key35": "48df4WhnREWpa9kwe2JPUhj9WPRdowkqaJBhV5nx1VBsKy7JCVJy9qz7gR7xh2aw2Q7vnGy4nGRLTeD6kLWi5ezC",
  "key36": "3VfSKsuEUD3FT6BvchuDDECp7hv82hpcV8HvftXPh27x4P7M4MwjHrRDkVY4NwPLHer2nYVZVnUnurxnedeGm9Xb",
  "key37": "3SAyc64Lh4Ay16SiCyhJma5B4YHgpLdxjNeWQ5Ap4uWjYbQe8Xf4Z7sFyACu63mcAFU7NCkBNf97j1iK14dqrJXj",
  "key38": "4VV6UQH6RzP6PmYoKP2k2CxV1L1yUq9vbLEm8RxyhYBjnSzxUywd4vwXz6xQ1RiQHfrgbphBUykqF7N8McnbqaRP",
  "key39": "4wFmTkuYA4wi11XjB4A5eCnMNDK5K7N55GVYgAavGKYiBLQfpv6RzLVXR8Evx9ciMhMRe1jsrY2HFzUBTJwqmq4Y",
  "key40": "2gLUj4PDrVWE4CF4uvqPXa1ksDkkW6Ks2e1gbcAkK73oWXBYjTGU5uWM68bZ8QyBLASGznsDRgKmaNPe6PK8ghZn",
  "key41": "5N8S1UhW7oCRjnFozVHrpwxdPcSMBWFuzMAt69uzXfXGGbYMAx6jxUtm28ikJSzfNkKjChPZN2K589EAuhrS3Fxa",
  "key42": "35caaLmDWxJiC47aLmLSDmnohrAqw486xEtsVUfEGFZx7B4aMd991kyCb9J9zhLAFEjTHzgSM5tDMRi22p1kK2MX"
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
