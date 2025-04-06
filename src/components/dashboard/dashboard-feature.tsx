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
    "4U2C3c88TNceafWfPoKvzDVA6NhA1RUPHVZrShV2DCAqsebUASFehMCcABVTe8aSdYfgBzChvuUj8C4ttigo9gsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Vqk3hjE8FrwT43k6uvacdNGa27aqAijTEEXpbXoSHcUyZT5ueYkB8BPbXcTKhwvQfeC15RyvkRbCNAAY1qWo1e",
  "key1": "3cBFwwCywcukqfJri8fANpNZoa94vfK5s8RAPAsGhupQp7547dn9DjraRDFnCXFR8qytDnLScHbNcBtv7wGCD7UZ",
  "key2": "cwSWqswSD12omQNSENVnSehddumFnq3yfhQeqES1fU5e8VnVD3fGnVhUj1R5p3keCZwJhnkcrshQRqPziCwWNL6",
  "key3": "5gwLash52i2XJDqaZ5pr7kaziinA3h7bSBsH9bDeoi6ci88Fnm8n68dS6gncASP9CgHxgmAFXxC25odzH5FmF7AN",
  "key4": "hQYqHEfKigbSmBi9RbPBSHa3XCKFmcA8vspmkG877AWK5gWsdRoBLp7tT1BJYSVQ3cZEsVmRNv7bF8cqJFUAydm",
  "key5": "2h8iGDT26edZq3tDRZdPDGytLKGmJLzwgVUdiNaFSPjeTuc1s3YUdq5dEG3ee7irHEQdFAghd7h6vLpqD5ZdW9FV",
  "key6": "5ukUoXPCrSu3fPqreYLWk8thoYcXmQWKgp56Uefj67c562mHCSFq1vJpsjHSwE27yVKFGzfBf2GRFprPqmm49oaY",
  "key7": "4PrQEn8MapcCgwiXABUqUuXrqPWtdjdRYEGLSoqgdt2WT4g58ByDCXU2sWYervUFS4WUPUuQqEQWsuEk9E2yWxp2",
  "key8": "2aBoiX6bYacKo3fBjcHMwSFXeNnBvnYGQp9f3pfyRrNiHDjiB8AM3WBRb12hGN1sNhfcrTNqu21FUobP67twZSUm",
  "key9": "35cRiTgXYJBL8xDY8R83RBg9EWCqn6jY1dq6Ykoe7YvJCNPgcHm3UoycwehTrMkGDWU4g2Tpt2yYaeoPkAs5WZHU",
  "key10": "5J4WAS37Y11dUm98vK7nCg9S3CEkLDWccES1fn73ySDMpMHg6SQrPM2wL1VFNM4SosmhRCCqC6Eg3XWZaAgeyKVb",
  "key11": "2eVyXD2egZA3g4ena8PatkdkXJoWtfZSkQg2aB6jiBdeavYwCgHdH5pK57mE85tzyTCDioArVt54YKRHKanH77zd",
  "key12": "iQYZWnpmweopDQKwbqT3yeMHdj7ySvKbefGJj6E9YP739A2otwZqueuuqFgDEveZkY4dDEEtMAikzwCCzzK2eCK",
  "key13": "2T2ggpXzzHrt1rU28QqeK8bCKz3kfQpC9PW2hfCWa7AAzH8YshERpYdmBuesLuxN2jpsfGKNwnj31NbCsEzXYbo6",
  "key14": "35A9mKu4dqS82rLoGY9T3uf6YY87nFQEsJ8i9NCPRwzBgtx9AMr5NtzyHkcWUnA6QaHHmu9APioPETJYxRtEHDqw",
  "key15": "5WtVmUpj93yLMrnTGP2EsxaGRT12KP53X4ys9W6axgutTikdgxTMJQMLeaRkKrNKrsuiHMBxa1fc47C2enQaMicV",
  "key16": "4fBisNLgEFEBpZvWzYbnwaNkSEAPuWxbqN4jzmgxuo7cQAN5sxqSHgqoi3zfNRGz7qhP3oHenHGx69ouPemZNYnS",
  "key17": "2EkioqFhr44BmgMXEdq17oTQdkLyUnRLSogdUQrrPYffKpK2MMUt3LizXwhSJYAF4KZxJbECzhYUMSQDyuK8u41A",
  "key18": "29s4zBgj5hBdUFpPH9REoyPtbQtJY2hZE2Mk37LanH2anBN4HWCK46GtxcXhpSxNNYs1jhY9u5ULqDRWVsQQsCyh",
  "key19": "3iwDwRdhQyqMtG6szRWuycx9ZsCxzjKtRq29ypCJok9MaWDc8fPT11KP1FGdZknS5ZKdJo1VRuJP6BSt53dzobZv",
  "key20": "4JVQFJSTPvs1hNkWNs4PZNfrHorCwRAZ3GSBJSKapig13xpgv5noBPdqTUmMqEZLRyyynS6DVvmhbNm4PLRdemzV",
  "key21": "4MA8V3sGSMYFDkuqwxe38DYiDnLquHhg7pFrxH2UfL4HDbL21rLwfm2JAaiNfKVGdSEK2Kp1ECsrWYhwF6zsLZBW",
  "key22": "3rxSR7bnctKF3yGiJ5miHhZZhbASnQNpydF8jCi4CZGGTNy81k7tvfPQirkinCtUGXKsxVpDLF2NCmBgxgSU53WL",
  "key23": "39d96BTESDjkegS1EmyLQup5fcPwFTmFPetSXHkEs1jzp4YA3zPKe1BRrPTaFVUkgjbGMScL1PkbuZPShaYFUjwf",
  "key24": "5bVDjoCkJXciCkzxF3m6UtdMCaNyqdChwp1fgxjBNaX88vMz1nWmzmnXxHKrAtfMgdDRGNdZbAxtBbfiJFBh4uTM",
  "key25": "4h8ZZTvWV6hpfvboQfT77qs1qNKsjsxZyGyz9fRk5wnVuGv8aVV7bXgTfyYvsksz6runq7GDABNpm8Jr8NgKKyMU",
  "key26": "VFYp568BjG3TfiknLTtUzQ5CMAH4kXfK215H8AK466ifP4VGj3ysjUG4ZdNqmzsBf3oXYfk7DnzHVeArWVMygkU",
  "key27": "4wzhgVm624TVYHzU8KVWiQ4VFUmAdWj7rSW5UkgkuCAk5rrQRNZREzvcQFUA41gs6Rej9jbUvC9DJAEsFmvojdLa"
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
