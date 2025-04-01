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
    "4SMgKcbevF5v5t9NWpu7isd9eVvDmyXeok7yYqD9XpczR5QuJjiPUJU1Uxh4oUG6cbK83hshySbKeL8CztE7Frsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qC2kTALWGU195vev1bGSDdB45h5wjX9JYDZj7enrdHTrjwR5vAprzftCQJWi6eNyULGSdLR5V2tNWm2aLF3ZFhS",
  "key1": "45EBoQCijFtgpfu16E13YtZZ8wanANyogauwSzhfihdZJUtiUE2DQk5j2zK1bmg3Vi9mRiE41vhY7tEhaYFxWDfP",
  "key2": "5JFa3fzU9FDGt27vEQygxsFub4HMbvWqyxAmMVEXvibVX1HimC1KTBTdjdjeuwns7F9W4Xzpfhz8CcDomywoFWm4",
  "key3": "5ngpxGdjopmuh3CQbuTQCaiY1GWhWM8kXWYzdnVp7Qy3PoSbwMmTmtTUkjHy647pM683oQXjEpXnqYYGZt5HD8f",
  "key4": "LmJu4wVgGcad7GvctsqTapFeB9KkSxTA6DBDs3RWPzkaCxKVQorSDcX1KKEA5UBRa29LwfvzzGg3tnETVN6Z1E6",
  "key5": "2ok1SiHpnZfBdgJ81V7x4y6ojRCuUkE9R8dN136DXdHMgn9iYV3zxCEeNawii5qHMNmJQLcSyJpR8iJSVig7oV27",
  "key6": "67FMnyStMDzrrgzGkU7kBoKjvMMQh2m6kQ8USseonjc3SkFY8pF6x6gNTNNhK7Au7pahiyfDpdy4qohVGpwxp6CK",
  "key7": "4EJt7ZMQgBgauN3GHDsSjEszEFh4HV4mNSmN21LtLB8ezRBcPCd9QA5B5WuBiQVqZfXMAPnDnKSZyJw1aGtUqNX8",
  "key8": "3rC6PGfzqjhVLDwznEGWPhR28oFwCfKdc2q3cBjAVmeaxMCRkahYAwiE5cMN6oYyeZYQHjPSCNbW4xZ4Hp2rD7qx",
  "key9": "N83r7acJx8NvSgWAZ5PpRK9QkcUmPFMJJ9yw7xTkfVohGHaqqPkk5rwGPKCSQGj82Xcs5ZQ11qNaXrw1pgsJhdz",
  "key10": "5nWSiPfAQsqi2HqDsYUbAxd7WRQZUn9oBH74zzM6smfw3NcyMJkSXNPwSJHq5NW3UJ1KXjVhaUWaGds5YtXW4BgF",
  "key11": "3pbQjaVytJQkgGKsCSZs1KDreN2dhUsdXjzQMoP2DX2MeCdSopvnPtMJyvrxNkmzei2qmXpANfmZhkydDSP4eTyJ",
  "key12": "wamVHpuz5YGTnDuucxw2NuTLah7K7uRSYmTM934n2kYFeGUXfR4oQ6PaXst8jKbCC6upcCuNMis3BdwH2iB3Eno",
  "key13": "4JrxhvxxFgdaozT3rYxbiosrPr6i4EXb1PkLVALGHbF3f8DrETUaiQUV5vws8gLQpddjHtHCxw29arn5etXAUy8e",
  "key14": "6643hvx6CzGVJoiC1qUGJ6689NNRsHi1P9KUJW5L4LU6Ti1y1Auu9r7wNkVomoZLVGsiSieYhTudTohok7kdTDFV",
  "key15": "2JAW8vnYBphKAifwyeTzKJwrv2nFNg8GEsA4ffjHsbdTQWvfq24EHtfjVwQ98GGzHqCywFUkVYXnL5YkB6gE6K5X",
  "key16": "4DkZr5FwA9yjZcwcjMYiSFRbKt3e6UsaHXNSbVt3CxYqGVx5hfzFU9vk5aCDH8o38tfsETbsTm6H39FLQtA1EHtE",
  "key17": "4wbCapiH9zTF6KpRizEUP7yG1ubXRBYXQC55QhVHrN7atCQXU9TEWwyiwGyiPywZ224io1dxsdBqf7AgWDnfXQaA",
  "key18": "2BTR1QELoxrDT7jBsyC6he9KLS81txjM5eGCgt3mheiyYFYNQoZGqdACYhS2yVeb1GoATRRUPCTEs7oZUy2EjRuV",
  "key19": "5mnfxUpVmfEhX2N3uNBojv31MSipJs69QNqxZEgTa9DB9q9KrG2u6tVpP6JbmKwLFptrV3G5GVDwYMtii7516Fj2",
  "key20": "4FgNtHJJiasGEVhQ3MVRGkUkCWPhKMgFGRAFLTKaG2vjwhDYPzHL4jbNbHMKCnwzQBdbfcgmEYM5fwwSPfCgeUMz",
  "key21": "3W1UgkvsQgiZ4jBa9ZEKRtPB8F8PjwLHWL7DzEa7F5STxqH3vin8QNPv74YFRUabt7oU3UPEKRb1pi9RELnLNSQz",
  "key22": "2Djj5yqrEUauHrTqX5uqM5ckc14nVu9dSULM55Kcnpcyo9Pq4k81pMwptdoWgmGdRvNPApHqdypvP97MaPMHCG5C",
  "key23": "4iqL6q5yobLrjsLfaE2UuVwiqDmvnhJ55mHja8tqnGhbWGvE9Dbz5P2YL3KFMzcfvTPaDHQRapKEEwviEuQHeqNJ",
  "key24": "2a5hj7aP31aZrmrzGawQojNXFZZjuhpdVzfGqUhircdsBoVf6teTtkPtVwKyXfkYRrBNGFbrCpicJfTN4A9g7Q7c",
  "key25": "3VPTMTrMWh8Pq8zwM2Ru5TQRoFjxRA2cU4kv8g93vwr3jbQovRqcrhfbRoSKQ2s3FtDXWPz12ZS2Z3h4BUyJtJZR",
  "key26": "36pMNXekTurWRsQo9Lz3WMVyAXsUNcAJuCsgr4D31SvY6usK5WCE7YWAdpYA219Xq8C5yXQDu4Qx7qFw112WSVim",
  "key27": "Q9CAm7MRipECDXEzZGS3MNk3zEN7aPshuEngZtyUScAyVreTePF536tE49csDHYjDNuhDFr6L8LWZmWoVvsouvr",
  "key28": "3HdwTtp8pzQshkxqokP8gmGpsY1yvkKNRyQFmgAqvJi5pSc7XMd3rZUo3vKfkt2FzNZkcJnQ1ngejF9n2WT4iX5j",
  "key29": "4fD2z4T2oXtFLSZMY9MnGK7DUxPkJFhqz6JnUzA6yiZgGHzMpEoZ46AKVsLdcSxsfiLfUAh9sDs6LZWEhc34SK5h",
  "key30": "5jQhH66vPWhvhzS3PQweDughC1b97xeARS2zxGZM4tA4grQoxEj7KJFBsCrJdxmXbau6UoCatRG6pNGXJreL8WtQ",
  "key31": "5B9TZHsqYTz1jUYcNtfJwP1erty5baHLgZE98rAq9koZ48AfH5iJcboCM494gpUd7hs4cxSnGwn9oEH4QH2CNDoH",
  "key32": "2F1SCtarT6FnhFqqCBoDT8RPqcfry4bfvdbSbJWDKbVYYXvCNAEZJa6EvKEEWNKxuYD6JvvhAguMTZHnuyS5uoAv",
  "key33": "3VXgDHoetQZjJH5sNpqr1EdFCmh1V2u4K2JGvBRuSdXnHRfMS1F9gk3wkZ5Ndbvdw7zzvfcPyF3dVkgKW5jKkBW",
  "key34": "5uE8ccHdNmuemVDev6jksbU6rHXM7xSTmBfRRrXP7yHXqvKXqM9SACeyxLVrSWA5q2GdUj8gAFNRdAbVjzdGBhi9",
  "key35": "3sTY9gKdf4FBAVsq4uvraVnqfrb8FRq9ckfeP3hrYjTKagbqZj6FcocYjDCednJWExUG8MED2KiA8k7UHkjwpRzq",
  "key36": "4YyA35Lnku41hji6BKmVTLeH8mokcWPTHXjjN8jwZvvmnntpnZjZs6dwJGyNNrdNm9o765NgV3myZgg1NFEeUe6q"
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
