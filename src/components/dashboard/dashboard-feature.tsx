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
    "kio9zpB2U9ae9asDmXkwaYjrLyQCs3iMGtSiAXpQUSFKNnFfW1uDpJjuDMPZAaVyFgrfYyPUJWLEudBtvkCsVmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVYtp1KJCA9JjNomGDDeCP6jNFtbmdvaWDJ6h12YxmrUahPuUmy3sUX3ak9kSU38CxoFugvippMjvoQGGDnSDag",
  "key1": "3HVZ64S13bGPedCqtzjvi38JSBFqPxiGeMaPBU5rf2VYzg7brb5X3xooj5y1nGs4c9VDNmMFXLzVAarYAypwRjQ9",
  "key2": "5mBkjhH9PqpVJcdtKQntqCQqLPZq7wvCZ8EUecBShDNCPWmmm8c57MZXGaUFEXAAVFKUJRAqzk6RVh8vRrutU3p1",
  "key3": "hXZRf4vMreprj3dYhTLP8sRbcpo8cPZqah1xujEsEjp55YCAyorhs1jzCGnfPe4oYc4F2peFpQwFJNaYqbHofBT",
  "key4": "5iNvBMSzKmjgzA6BBNDRLi75GabTZ5oQJ3Bxm6WdoK74W1vprBUj4RVmVNDwrubdkphJYLXRfMwkG1ADm7x54KGR",
  "key5": "43gQjNn3kiM75ir8Pah5tiFDiciqcUWdcWZfrLT5gQnzbQffjXjdyis519n4GeYXDLfiCj88viWCxtFey3TyCtiT",
  "key6": "5mVkfzzymdxETBoPFhGNDbYojeCmJWySAethLiKQa5uz85we35s7eGYA1oZEhYs8Bud3z5wcjBWgCMtfjbifirgr",
  "key7": "5G9T68Y3fQyWuiEkTF9GJGCf7ganKQU4xR9Dkj6WUyYrzZPi62iHqfJ8aHY9FNEpvkkP9gmD3xRJq8TuNfJkyttQ",
  "key8": "5TBrYwno21hA7r9VW2FmaAbfPewntcf7ntcocuFCb8RNDTmxb4pZ4P3CpQuWykd5JCMgJLsK8kGG8ctYyAihybDz",
  "key9": "594TYCkkqtpvEhiXu9rGWP5kg8gS7i6MhfH9WgYEEkpjJ6AGN9wh48zoiKBhrV2gfxtmpGAPLfP4UsHmPMw9PqnZ",
  "key10": "tSGVEL3HWswZydZ8cFayWZa7rNN1pdCyHcUs2VjFLXcc7rg4ho6HA2GXE8pMjtv3GBVZNSqNJqQajGE68Fx6nMo",
  "key11": "5cJqpzxhAvzTtxWVeQvu5UppNFhVaNm49ykDuToWYm6uSoH91dLGrVhu6zJd7V4kCLpEYy3SrjDdwBcMYpZtbi1u",
  "key12": "5tp1cdZKA8Fi1pNknVZTvi264uUDPc23pXZitEduV8GQiXQ9ZxE6DinGwL2YFuthpSCsKafvME65v5wGeWVAy5g2",
  "key13": "2zmPkDYXLwqcVMAjZUY5a9GQyuRNivBQ5oiz7nZA2ttUJs5ZyqtFGxyhs21GNEtAYAssxfo9DQbqCwh6i4hGJAYB",
  "key14": "5d3McwXpU2YdjL8BRuST3N4NquhGHxC4g4hsNepTDzgX9Syf3Cnve4edBR9sXcHRUsoZ9BYEzfvNJk9KYWcrSAeu",
  "key15": "4APDTaibUY93gMBLBgvmZWje27naLa6cg3Ga3QECxNQs8FdBYXTxZhZQQ5HLhJmxq1WUedF7JjHZJ2QpruRwuLFQ",
  "key16": "5hpHg8a2HLr8GU59JYQqdZzixUSXepdRrVc73aP965piCZu8PC2khj7r2FT78CgfDWe3bTqAEsWxbFqowjMdEL1y",
  "key17": "5Y3HmSjMfu1ehyyCstqycyk7497k5QpG36GLwcMF9HEk3DFDUZ2qpZ3F45dszqc2U5CZtNDW733ajZzwfp643yrY",
  "key18": "4V21K7bYkVnscXwU21ay1kvKaJDb9f2dcXinEt7RwLgkdQ1mHnZmC7Qu2xAyAwkGb5cAzmSJKwmLfp3rCmpYnBrH",
  "key19": "5KsMc6f9Bb9ExxZdFXzn3VYtXL1bxLG5FPKZQQ9V7MmHbKQ3ethRJyuvXuC4Mve86eEvGkbgFfXbdW68HuVtb4TX",
  "key20": "65bKKKfteCpffh3Q8BCPXar4wLsb5N39E5RcT8VmBbvTmURsnVysdRHDBSYFC277apUTYEEFuKAk3zbE8XP7rw5X",
  "key21": "3zoXx2rkm1775HxusREfTdTJT9mLiK1gGD1GzD6zrd5PwdBeXQPk4yBgVEcZaWKGaDSXDLUsKtPqi9rMtRqT8NPq",
  "key22": "2MJFfunm4hybBMfcujwo37MAGW4HimRVEShX4SFJLkPdQ8K9JKbrEgtYDdM9QtNFG1y7nDjS75eRUqGEZzrU4VRi",
  "key23": "4Eg2Sw74ccgJ6HtENRTHb5ZZvu5TnHTNgiXZyT3gDzuHVvzZxNKFkpYzjwmo98TrbvzKgwP7g2k8hdnqsdjf3VZj",
  "key24": "4tM1jxMecr6DF1ikDFK1qmTUWdodbybqHiERoyfSQKme1FDWYtmjBejZhjZbyWzWaQ2CV4UrCm2K3qKLK6jpq5xS",
  "key25": "3U3x3DhcYvEzQt3k53esiCzsM9J8KwjZpvb9EnQKCbD9wBgHRdiWoohp1HcyxPojarULBoeyF8hRLnuqWjEWmbNA",
  "key26": "4nspMBPpL2iQCffMjZa16AQbr1ZS8mddnnyV4BSGnWvYC9rHFroQt1pTXWnFWLrPj5SpoF9ev13qVxghQxT71HoF",
  "key27": "4ZZa567yw8NQSxVKyDFezVGF822ZQ8tGhsr4ZQ6fLzNCf2J3zfaPAhRrX7LdpUkDD3Cqw144obSTTnQY4T95bQZw",
  "key28": "4sbqZ7HPSJG6YWoJ7N5QXYMjQuSW4SQibdwjHp2MHBGEmVhgcio6c8Js5jDLRMwU4tc8CzzhBeG6nwEB4YmJuPGG",
  "key29": "5AFdYAiyXHd1QfYS3s4ninKB5azAJG41vP5hbPSW4MVwfWZ9dyfCpmEqq5Dn2kyKzGhuA1M5tQjJmpwusMiifuRj",
  "key30": "25Zj3dfADQtiVDV68GPdxaLd6KqZ7gerq88GTdpDb9UuaTwBK6o3H8CAit49tTx4DDyYA1JzfhSDVGXFpxHwJVhd",
  "key31": "2wp35tFJnrdHgMddo9uLrH4o7GpAJNA84GujSaNREg2B96d6bnGoR2AJEvL6aHf4FsHVQv1GrdUZBVQVNNmEfT4T",
  "key32": "36RnD3FAFSeyNDzojcnVgFEhVjiZ21VC5go7onFo6qs1VtgfZJTaJcurov52vAFwrK8MSaF1AwcmkcsE8GdtBSZT",
  "key33": "UraDCduKgL7mj9UVEve2N2DtvGuG2mRfadiXK7dMbt1rr7WTFTauSxveShHMB8FQQ89hK7f6Xt4mEuwtXgXsnQ6"
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
