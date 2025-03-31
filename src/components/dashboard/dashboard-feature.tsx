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
    "zkjNAMJWBytSNd2mwTLqrXmXCQBreBbQNdCH8ZiB1Ub4RRSYfNU8w8X3chwnzpyo9BGqsEMg7tQkqpkeFN26JfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8kbwyzQmvJLT5P21ih5JtpZ9xHafY87KJgnv9ZrjrEfpMuMCevEpAttzUJ6AQvayWLF7Gbg9CM7aqKKRP8pdyp",
  "key1": "Dh49skZ6W9Q9B1WfTCKA8C5cJhh4j5ZuACB7AoQzWMhRUJXr7avy67VeQebJhLdPH2cjRMNnv18XnS9rH2tuHYD",
  "key2": "3CMWh9zQGeSrgCUbBLyaCdZZNhNRRwAbF5zzgrtnkLpukEQAGY4DRKkhEBVURM5JQQmDWz1wCbpjas54xDfk3zUv",
  "key3": "5pYC1t29wdexRQjxxy2SFsUzAhbVUkcgxBU4Dt5pDhEPZwqbMHfrfxKZpDPwZUAyyXWL6uJNMF4dDukNQTQ34ZYg",
  "key4": "4uqudUWBLWmAMfR2Kos2XXZTdgHebbzeyqw8WBonPMWokfPvpa54hvLud3K2EWHGj38QraicLH1MNZtnK6zBXNVz",
  "key5": "iwjsNzHBaQY7aUFfGsWZHwFTva2CYfxAgwrU2wQ1vAAkXbRV7NQEaS78LYtN7jhmLioxFEJjqBvSSoAAR9yx3LS",
  "key6": "3QDZuFGWj54Q7Gih6PUzW6G2ia2UEK13B1rumsfLh6vJpYfFouYgizx26M4xeBu8aRwNG1ozpxi9yQW6v6249nMW",
  "key7": "2Z7PjwY5SfCvX4fPmY2fCkXbi488jNi4gnzbNbEgojy7dBtDLdYCRPGQFXbzXPLnNuownqiSvcGyPSghW6CjGkPB",
  "key8": "2j3LK8aQy3ioNtEeYuxwW5x4weytFvmbi6hcvq1NPRwQWMSCHJDc6YHb5zcp6SPi3poC3xe6hspZvkHkwUkT2etu",
  "key9": "2nCMBYFpvsTFQMisNY9Z4GV9ajDytDKF6d6fEcFLz1rLmNcB4Xth5yWinbtAjwKQC5qmpXxkfPBjrEbGM74L26He",
  "key10": "5PSN7QpsSw8bS7qyPCwvro87EeEViXN8VvTvNG7j3HhVN7J5ZnKwxDztcw59guN5PMYad8KFShkM7Dyt5xbZ7Tak",
  "key11": "4V5TZSoXK8VU6ooC5aghfce3MUU9XDY6oo5KhowJwjYFfsCSzcbvxE8nyQhTVq5WPhRpEQqcz3WL15BNHuRGrG3Y",
  "key12": "4Hfys6wuzrxVMyL5H4LhkErfPfUwFLQRXjZdRVJhVyj185PhtrLQMcVq7GripWhGjhe2KQHvRnUatiymhZt9qEE8",
  "key13": "2PmRH1cnxtxPi4BwftZ1nwNPez2YZX4uT3QvVkonmgwKr1qLeJcbcP2ezTJMog43qcKwRXbrxR3TDDnEzeuRPCQz",
  "key14": "2PCYVA5bB3UwhAkDGMAPtcwcgmuYkma4g8kPmnENEcLzQDJCiUzY7Vmg3it9Yc7aoPT266AZPcAXVwXVB1oEUfHu",
  "key15": "2UKLWZQcCP7L9Csm6qZnpz9j7TmdCLoBnwx4VDeV5NTacb61zU5UhSNJxa3jKpECJs7SgYMzBGFUTGrs7kSqG1dA",
  "key16": "3BP7qcrSVMTeNLba83zPFz6svruop46Weds75HyZPyHc2pEwPboJZ6YdTkJcU4UwMMx2Pt7q8J8Axy3yaio6CDiK",
  "key17": "4he83Kx2CvkVXTAmQw4K3snsV4Ct9KKpPHNfzYMF4znFDrNQwYGm3nbpsrhwDxynZrSyZucZjhBZyws7TW1VykdL",
  "key18": "2Lk3Y3qwydw9UxkK34XksrY6WCKR3rAykAqdyJpcv8j7xQptManmwndmoAFQhskCZ3FoF1uDZrj6i8KxYnsjXkDq",
  "key19": "4F3HKfFTDYFMHpyxucMZhF1mfUrrMhfkAuCi6zYXV9ACqrss1KRjWSRXPUR1kWecgvfLnKAE9euEvczVW54GnawM",
  "key20": "3QWrziZpMwvdb3XEyY7t7Vv4e1FE4PKvsNnfcxh6UTkTKh9bEoFoQKCmjEHmFs4pnrPb4VKwSYdFUhetYUiLo3k8",
  "key21": "7kkQyphX9Vw7Za4VuygHfPwEo4iR9vFPRzMyvz4emfVWC7eJq4iYu2eAERgfeKoh8Y8ENEmy6tfeyYNZbyviBx4",
  "key22": "5QqpT7KPw3YS6F5Qg5Yb9y9J8tVQ6fBtD7sDP9WAsdz51LU7Ls4wMGysMKtJJZZUZgx5vvXnYRyiw7emUuauRB4a",
  "key23": "26Dmc26kUnrZZy4JDtsHDzaWcDmWV7KhYyAoLJYZW7oQ8NxoEBcayxqGFDkwJuoCph7GgAtoaWedn9DyyS4xBcEK",
  "key24": "frLPg4BP6qKPx89jLVN78wq8upiuidbGdvLT2JNXPL9vsvWmT8hbc1RxKhk5FGXzTrs8CqPscHvf34DmqQzBHDq",
  "key25": "4PwCzTCUkCdHTmSKg73TqXaM1J93bVz9v7MxcQFH1kFmpnZ9kQ4idy53STqneBHxq4qX7bzsk6ukH4PVbtrz19Se",
  "key26": "4J5pwe8mAiCdnAGDtBuLuMHwf6gbSqcxn9GeyFrA1HayaaqtJGBromoZLx5P58csq4LsSjXMeTwUEMTT7rbTEsXX",
  "key27": "5q12Toepv5xqh3dGQYS2C7znBrjwpBHUPsHqHoTTcSgm2R7b4Mid7RNPcbvKYzaoZBDEdPXrhDup1jT1meawWZ6W",
  "key28": "UjViFuGc9duB2mFGyiQLLTqdAq1ujaF2D1ni5UtxA8CPEiSmNpuTtkUwSPSumxBTymNcbDxfsR7Y37s5qCjVDJW",
  "key29": "2DZeaMNaUJpMChjxioJCEwPPxYndSjQh1fxL8FsfvhrQ9ooMr1dUqTRxDG1YhopAoAB44FsyoZkFmkK3vAVqGiEQ",
  "key30": "95iQPCAWSkWyFfqhPZvTtfRYvBNofqa8oRdFfdrHueiemRzneDBt1mvkHHTMPhd6byH5wg86uwNqyoHAac8NPsS",
  "key31": "N6Dw88Z1CbcC75mG5NjHxE98GxU11LsdCYKoBuKeWiF61r4Liy8hKtxGDJHrHorEzJt3BPHATwDEeLzsqDKFCXx",
  "key32": "514ainnhvnkW7isTojB2n829HCk9bbivZsMenXubuGY8PX8h2ywtjZwDNUCMBTUPKCgp9sjVkyZ18AhXApgbDxna",
  "key33": "5H3BPYEmuXJtwrErMQFf2h73fVLhfrDYWCmcBNMLKuvKib3b5VLN2ihGmw6b6PeGCwjW6cpENH2QykGwHuBz2oLh",
  "key34": "MMHR4L8wTfEynXeSnrWX1SSBy9UZG7Us6F1X6GE13JLehU9LsHSey3ccpz732mrcgkzyqiGYKikHoD871VPiQsq",
  "key35": "3u9BzS9YrFs55t5PvyiqycCUqL5JcMhSYvjUHsocgJA8JumVA5pc8SFs9DypAuP8EPUSnue7HxpUH8KtdLkypJPk"
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
