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
    "5r2CskWS4Ek4erz4s8kSJfjqDa6ggLE1GU8FMbJYsy4KB24nx7iqZS7YZiakYot91tXWeSN4imN5XHXLne21CXiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYxzRZnBerRrViKNTm3yMAxwdBRa2VKH52etvgirCcvmbQxeaA3XbRDUbLB9M7nvmsQ49ZmUjbUpYotfAJeyXUW",
  "key1": "5uTZaUANJUS6NMbgX4VTLM2fSNQoWtre2ysoXMmd6PFFoqAsk77eq3ojsBPRdWCZDMTZrUiX5X7fbNwrR3NSL8YS",
  "key2": "2Ao511fBMuXGaG2Th2A21ypx1tpQDqvp21a3DBMfKhn4pAzRZ51zir9xgBN6KxXs73FVP9LCa9KSQy6wtUHDZFAk",
  "key3": "2rmCE7tAfkRy2eREiBtLfQXxS8LGciuYkFPC398r3N2mwpwqiyySPFHy982YNVQUujB8HpW1HW9wq2C6Nb6wWnSX",
  "key4": "Aqcn1rCEcU8qXQEe5YqD9L93cKER2yncRnXiSn4Y6CDCWhW8ks7XTCUa6W5oXeLRcJiSi5mfZHNAinFYHeErAGb",
  "key5": "4yStGnTHt69jfRJBYE4BMuCHVGhk4cefDH1Z8dWsfTFGf7ssAhXsiPj5891zpaTETPCGZQK8vFrr4hX2dfGrcfCA",
  "key6": "3z9p1rN87wbo2kMWm3HwF2MttCTuwM6fP3KR4nsZ4oaT2CWkxwL44kwR3wCP78jmVF6JEGtfbt1pwzNMuUnaKhku",
  "key7": "5BhnagzjZdFatUNXiHh2FpWE65K5UMGvQ6FXE3tGbXfdvsb7qUfCfZn1KB8AAeADU2pr5XoC1Bd62T3miavfEt3q",
  "key8": "5Lepma6gWH7XcCs2yr38S4mALMMo6MqnNkRUQjLQz1GoboiYeQxNu7NLGg3KxkQejcNztahc8zqb4WFSLsZLy9Vr",
  "key9": "jTfzfgx4LHQonySM68fsAHhFDNMopdHAbuJNZvskz9z5maU6DCYDMSQepKAJ544osdKXV9qoKTKU2dLo4ACEirh",
  "key10": "gB2H7718RSkF3kA4bdEdmtsxcewcont4sydUFgzjTRMb5Guvz2v5hLee4RkVa4hh27GkHxPEZoXRFEnL68vibcq",
  "key11": "51GC8Y9KEhmWF7eJznnKmRMz55mXodc678bMEkvUZsYgRkZiCtV975mNEMaXwbhASYtqGzmqcvTdHpUH73jWXTiK",
  "key12": "wjxoDpeUXHBddKYEJuzwUGFPYN7LMeA3EfQR5hvByqHFKMdyubB2HWrpfzjrkX1Ch6tBg3u9evmUbsxsDBx6q1f",
  "key13": "4GyZaSWrscECar8LN3K3CpBB5BT9afy2HshQA3bYnHBU9YG9RhmoBquLWGbwcBywuEAZo1ZbZgHk9x9r4J6Yjq8e",
  "key14": "4QmJ6T22r3Jrhrzf3Lj9iKDW5cg6jRMgN7Ujm5ocbGXcuyJnY572QdusS2j7rBBqTRgzpBi3rf4zndMAw3hLd27p",
  "key15": "35wrW1RXe7uUqc3TwZNgbeANskwLKSwMKwKms4kBbBCAxo95suLYkBmbnNwqkdt82mMYEWbarbVerTXknkrzk9Mp",
  "key16": "289wkbniEVNFm49qTdLTNiDHNvRvRNzR6tR31G8ex8eBAEzEtvcejUo8dgD3ZgjEaQ67HXHhRbziYrGsfMcdrpC9",
  "key17": "2Zd8VT2n5bs5cEtkfn2JZfnxw4THDhGMnM12VL8KCkHiWcnUv8TXtRn1PMPFUmnGn4iESaciXQa8dkK4uvLThP9A",
  "key18": "4eivGE15rjibcRkdy2GqUXpTr3eGV3tt13nw6JvGiVTWE4sXreEdEdtY4THWEKG5TyaX8P2tvW1uBkFh1n1RT2AP",
  "key19": "29LrpjRKoKVRCRaur6fuEKs2SFZ6trm1bNzA3Ru7DGBRg3xqCV6CgEUj6LNJEEELVRHWrqTX3MVAMrLRD181k1h5",
  "key20": "2MYuQc1jHznLUm4vwEAuM9ksmExWoCjD6FPe3jgTNm1Teprdm2m369TqLEjM6BDxhDehEe7uPXspPXtwyaPxVivh",
  "key21": "2B3KupGmPjE2cj3sGd4ESdYDCjBLU2ndTZ6F37d96Q89qRDUV4GDXGS7uPCWLcjUcQfypGR4BnGYb285GSHNnAnJ",
  "key22": "59wkSuU7FpEcKZZ3R7DHnLRWaiy6wuyvvzyuiiTMeyuAJVSNq5TKVAGfNPjmJiZDA4k2bySi2xuH4Hw415rSfvqg",
  "key23": "4UVAhqAkeqKjBMrZuyPHqVhTjTu4kzs5ozBVLcw45JnDcdBNdGFAhrLtexdc1MRiLtzg4TmpxzWQVNpTrJ3erAZp",
  "key24": "k6tWGUeGGE8McGEmeDsXqx8NB4D7YVaYXs1FJ67TXeHp52swtJxpWiud8ixskzWp4jjUAaYRrxuKUbeL2qg77er",
  "key25": "4ckDr2Z7nFehfjvUR5WB8B1jfVEiZZD2k6NySMPjYBTKKHXP6nmoM9oUkcn3BGMGDAKi5a2owYqgSitVp2fE3rHo",
  "key26": "48reSKB7ZBoiFMh7xvZci5hqHDzwRdPjxaFTAuUEWEBLdxVuSZDXQkiMkJYKBpjEWUHyNVijLVdPa9DNoSBrqwXJ",
  "key27": "RAQGNbJcTpQmgYGNhgGueT9XxRrSGMnWDMiPXmCyqBCmUBX9ERwH4PFQjs5zP3RUNNq4zubxVYvqYiF7HLyeVfr",
  "key28": "5SMEaLqZt9kzEiuFaQWZ2crxtv1oCuhchq8J6QNA6oA2YauuipduFbJpEUFowSgDcon3er1b6R9vJsV6ANez2koH",
  "key29": "5ANXLcy96ymumbQbX5kNEqw1cTV6QP5hvMjuFHzUvuBM2CDPjt2RDWuv26PSDBqzYZyde3ENEprZs7uGZDyvqx43",
  "key30": "5SqnuRRJvAkgNTsDMhYa2g1KLZ7dUm18j44Bn1GVKpf5D7iAzDdDnkVAbBWTAhYcVDZKiw9d39zapVm7hN4C12Td",
  "key31": "5mBjSD78WTLM7WBu1grHGuwDppV8bi8fMZwnPWY6qtgRhL8mgC4PYuMXgw5dafHr9f2h4bz2xBnxk6fBEy1sfPmK",
  "key32": "4Wi5sCyEC2tFA1k82Ujefmo4ZebA7BkE4Ln2FjjoLAT9KwHwTofriEapnBWKqvYxv3y3BdUjsph7k8qaSYLFtJ3B",
  "key33": "2SNv68muoR6zsnGKm7dWCrMfw1MiR1dgDc1UC7zkNMWvS3wScQ2bGN7imbQx1QTXigc9K9dAHwBPPvvZrMNg88jn",
  "key34": "4P726H5KBm6bDAU7TfsVCjPL2xvDaRtVvMgxuV3VHJU2mMqjZpi7UBqacsojnFwDPVwVqbuDvSFALU2LfDMx9VX3",
  "key35": "2WpHUKkuC6z8XesFfXjhRWTu1EFNg5RNBnBa9z8oqQxaaDkeouwjH3WeBzrh2cmzszFu44S7Ub5Kskfm1ggJt7ZV",
  "key36": "5tKpHdQmZuakptRGTprUzNxE3edLmPR8ZTDWhjssPezbKUEP8huCLCbAqnfjjxZsnnvcEq7pe85Ke1MP4E4CQmPu",
  "key37": "4aC4Kns8pnZwbYoniTgDjE6fc62fyZNebYJgKoD5aGJnxpr5gdYu7AJ87kJ4pwAPqLCE8cQ1YqrgbdyJ8ZfVqYn4",
  "key38": "4wh4ptBTkKVdrhfy1HPnRV2GAfq4sWw9kx4Pb4MXrj44ocYGz2h16n6bD5NQQqYYv39AeoPr399kYR999rhcvQWZ",
  "key39": "2rmX88vPeqM1MeAwdTYrVLFPzYiZCFmpSrKtNtcFJDV5KVcJknEvivnhV8HxwJMMMjtbVeapxbfZECpgqyf8Azdh",
  "key40": "uSDv83DBrsCtroU4Y1XkkHoYoTA4qEfyi3P3SoT3LTDTWv33ckyLmRxRmfe4qohcJkFMLFYzKFJJY2wFPwiUAcs"
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
