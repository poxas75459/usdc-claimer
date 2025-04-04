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
    "4ayVh9zLq1WogNCg2Qi9PK6FS78K2q8pmdHmD3A27FPDgYPzZTERzKeGqk3m1NMhARSAF3FVo8V9uJ4pxxydNuGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Gb4yZivRGwjK89YaBfrwUPExFhVYBeACuHrzu7bGkJLM4Zc6Q9jwrExYedVcuPY7zuYRdNquyeCngJvmHMvPap",
  "key1": "3SexznFFQnidH25QvNQNJzr5YTFRt35tiZipoMxrK9X8MefAC3g8JzjG42AhKoUdjaKii5u5n4fD7pVyssy1ejfk",
  "key2": "2U4obP8keELrpNtkpcaSUQa5SB3gHCrtDhYXbwT4mk9vhfNsakSrVVahHb8RonpDQTKr9U3gEBNQZETGzrSBfKX2",
  "key3": "5NF6pxPnJjhxGtvbnyZj2g5FP6pxCX6muc1aDUF4KEWJDSYTjb2M2KT9qthWjazq6Mwf1goEvutNzXrjUfuVncht",
  "key4": "3mjQqrog5NSmMQWfg3LBgjoZiFBqVjzPxqZ7Gm5Ezq38JNxhP1tWYi6j7tPsPSHyNiadZeu6BCdEutYH3AVA1REd",
  "key5": "3LQtEAz7a18Lpw8hBtoCy3ReZVDVWXP4FhtME7XFihCpvkYnhsEn94uS8nT656QmR79ys3iYTJt9hifRQavE52XV",
  "key6": "ZzpZQx96P5LaJyRyipH5DAtLjTBRtthoRz4WNUS4p3zWS7zUDuKjL7pDuTk9UQS4HTQEoVzj1X4iKRZpwQABgbv",
  "key7": "K4jfoaqcLxk9CoqLmiqNfzKAtPZ3WfbuXQ6Mja9VvsmYEDtyJVkVigwnzeMGvkf6255EhxEmsF7e6XZzG71HcRH",
  "key8": "R8pqA4SBAZgVfUFkmxgchW8yNMEx5PtSH7s7CbY6rFbncydNr94PxiCH5TuydDScWPCSFhco6h4CugfuZZV9yGA",
  "key9": "21MurRV5LqS8yXRsraPGypN4SY1B3GnRB3mB6ztDig3Hx3r2WiRqhqjAej5tyJ2rHdcVU2X2Jy3cLix16vRwQR7M",
  "key10": "2WeFzXK5g8gWdSqUoYHWG2fbSgegucPNUNB46pno5RVKqJoK2eJQiayBFfdKdRQoqz4gorLSR9doiu7nQJpszLPq",
  "key11": "545tF5HqA8gge9oseLHZpjKZvsCtVDiuzDTJzf58KtAe1LtdjRpSwk58YMTcdfFYigcGxJLmQwriwLbFL3EL3nYq",
  "key12": "3a1fpYfYM8gALvTHAokkhYjNqjJL3LvFAhZkc1vYYcWxdA1dqihPaf5P9BhELKUfFWYxj9B3sA9XQqDcUgTvMBpz",
  "key13": "3z5imTCfSF7ZjVcJeHwcCTuMLBV7shag4SR9pN8B4483cK5K7NZh6zVqQ2E6Rf9Ki34YDohzGR8SogfTjkpwZrE1",
  "key14": "2RhMPqHi8c5DNHUB8JEfGM1G3WdC1casTXPDHaxTgyHxnnVXhi2kwUqtqsUvL5SnNY2bpL1z41N7m99BiQJef2LU",
  "key15": "5rrME3ujPhFmvsVGSovE8k5USTbttaWiV7FjS5VaSeAFipDZaRFP8qYLvaXtypp59L5qvpMEDf77Q4z9V7uDHWjp",
  "key16": "4tZNGfvErPUytW1LtgqXFefbBxnS577TWkqiZH21U1fAGjj3N2c4KhN5nbN9m5QSgMkkNxWXc1hYC3s8tv92TZQD",
  "key17": "2fwcpj2a7YjTyfVRYwfDDCe6nRrxPPmjtmrCc9fi3hVrfMo6dcHkfuoXbPQso5ARKuz7onrqRX6Av84gWiji8rk5",
  "key18": "4VX9TrVfcBEXrdrhdKUg7waXrUBLE4W8eQFz4fxWA3dMFqrA5DKXgHSFhaW5gNAz5NoGFZosrZ4FxSNnkA4RJKmy",
  "key19": "23kEJowti2gSRQVttGht7y3jV9F5TNb5KCy6VeKWosXcPKpyho8SNUdcviy4BnP82bUdpsPy4MzDQzPiwWdDpRwN",
  "key20": "4a9BFyLXefUyjezzNfsgSPGRGNCHaS8xYTnd2geTCCyVCDdZn8ABm53VqyQjKbggP7NW6iUvK6ZyfAa2KVLJGkJC",
  "key21": "3tp5Cidh2YhS5c9cv4iiFKfgX2iJb53t6fQvXpJDmKACg2YJJyu2Yh4UQwhqtX4UY8EmPvmEaktZQcsCtJ7r4txE",
  "key22": "3mbtHm9Bejn1q1u2bgPyt8HkJjsFwc43z9ZbgNNg3VszywcF9eHCsh71E8WbVAvvSW9ANiVU2TCqXrxo92PFwpbv",
  "key23": "5naBsM3VTwTbzK5QrWu2ZkB42oupGFfjpaJ4EFhUUDm79LspH2Fuk3UyUN1orc6btPkSULP1262SSVLLqHEdovrm",
  "key24": "2Ffv2rk63xEZeqBs7DaQjmPXAeDCCGiaLMVKGsVMzYaV7Vv2hyZQBuKgjtTtpQ3CLpvsWVMdz45gNyJd9xB5jxke",
  "key25": "4aza2VdZTT2wCzJFacFn4thGSNtgVeSKqpf7hZsJyLzKwhCkJxSoN9dEkeh9VvbirXqe825PnKnMmzPeTSnLjUeA",
  "key26": "5jt5ajK4Bk9bi7XeXYQkdshZeE9hn6P3uWfj9Psq1dzQ8Qh56EVNMVX6LKo1P7aGmq6utEd3eWdoM5yzdvQahNbW",
  "key27": "5wQRwDawzotauosDprBTPtK61FqvL3CCekqswrqvKJqnWSLrc6sacVLmH6dDnGCTKQLQzSyW5TsmTEBMAGPU1PZL",
  "key28": "MkgrnUgBkSHToo3uv8MqNRYa5S5VRgDrQwarwKq3B7BeC9Ar9uDoLMG2u6hNsjAhxAH2A1WUu7XhaJGS9Kcj39X",
  "key29": "4fYcBXfibBvUfzGjqxh7ZoYkQM4eFQwju3JLX52RqeAgvwXSzxnxTmJZ8PjVEy7JbQEm19EPzvyh9aCAVf9fRVX2"
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
