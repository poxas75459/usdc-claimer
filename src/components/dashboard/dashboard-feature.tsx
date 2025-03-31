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
    "4n3yTqQMSm9F4mbNHcd73F3JnChY2VE8XhghCw2BgqV3w6WhsNoCppjjuGiFgh1xm6AnHb1V8iRc4ikTHBrv4m43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTRyKEEAQYrbnPFbhnaMa1NU2fenhSbRThmWNVSu66VFEPYbtZyNj7nJU81df63D7444W5TtdqVqqMnjWQbWSkB",
  "key1": "2qjycr7JsnjpEBnWLiMoUGa35YKeje67piyH8v2iVyWuH8i8dSY3duVJhRJCDamDw7ZhBppJb3xTZ6NWWMkbEAEb",
  "key2": "3ki1DD2NxtGBVqJKnbyDEozeq5Ad2J5uPXu12tFNjS4S5Gm4GVmfMsipt5eCp7qa1BpG81LzJ9jPMJy9RLvmraNB",
  "key3": "4hnuDhhg2g4bXDRGSi9PbHD9M77SXCwuyGEiUVKaKNMXD912MH33oj2tcZbe4THE8SorJevZy9iFivtrkVjA8EDo",
  "key4": "5yGffQ9U2gGS3mcJmKScJVb2hjB5dgSNmPMh5ne25CXhL4Q33Z9GpbV9k3LhQjWq2xeQUWkh8gXEUTqbnHwnVKpC",
  "key5": "5LCLEwR5dxcUXqN9rhuBeXyjYiReaCRq8hAiies8X4DEEVRgYcWG7WfHJ6kbiXZXcKSBEPGqrZwMnWrkcoYnfQau",
  "key6": "42sJVuToQSwL9fSnTBJJ1xMknyFuZ32sgk2UEiM199f3jRaSyVUz7tyywxjuh8aAUGepvYPsjHFNdnmAaaarv9xh",
  "key7": "b88PtrAEWuMzEKzTqtfazKfFMtdrKu5SVxJNYWx27HVvdETu88nr87ptj1soLaf4BRcBEisvkquMamguGq3N94f",
  "key8": "23p6dReeimY57XKtWAuPQTcyBT6UqyWYuqhDPwvWts8Hh1uuRe3Fi6ka9kwFewVd5A2hEEvAQfEhvh55KjhvJo5c",
  "key9": "35hQgie3ssJ4PsDVo3rJM8G5kLnkJTJUErRF6PzPKFdaiCaoQRUX5rhCXKvC81gri7ffVfdGNKATyn9uGBvr5u22",
  "key10": "4QRBY27DfiCqUVDbkSYWn9x93S9R95XFALn6u4zPUTW7C4bH7TBKBZ8CpbjnEbiaRgoof8DJG5zVVEre7zp5PCMS",
  "key11": "3BEh1Vm6iWCbQkN18eCF233ZjpdqEiLdV7Y1su1mswtB481Fxga5mbJkWzNMtdAF9buNroCYePVKAwLc6zMC3UaM",
  "key12": "4RhkQMa4Qq5WdAdFpuBuzLzJ5HE4YRu3KPaNiNVNsVKuci9juxwG6jj9tkDFQMgnJXC1yiJhmifJVg3HvhpNxud2",
  "key13": "5btu69PnF6s2mgTVqkK7xBj9dgQEJdsP7Br3UcAnyjUJ5gXTMVDjmpaZnbdiCbwUMsZ3v4dvkjP8A4oZGk2aqeER",
  "key14": "4Lfk4FfgXD3y5o4L8d8G9UQ7dm6n8fyFWuYKJDgA7CSQmSXmMqAzhxCVU5L7pFLWSzDA6CYueFVhiAwdqVY18VvD",
  "key15": "7HYLfqeobtyuYeYpuzYvcQG6DSJ2Pd4EEqPVktyRtfrX54RWEKkUCzMepqnK2pdb3eWaYS9Ws4DZ6yM92qWbeMz",
  "key16": "4kWs1CXcPt7GwDMDNMmgR7cUeAQ5Eesd5mA8Cpq5QSqVsndAs7KwTe212ccUewse6Qr2VmLrCUPjVvb1z8TZt7DE",
  "key17": "3Hbb7JraByd9jWTLwJRktcyFDGsSqLeHv5rQanpy8XMCkWhdN4NU3oKF4Kr8Z4Rm6ZTdnhZwQtG4N2G41ZfnK1q7",
  "key18": "3CnixGjr8buumyvYWZtcN3cLMjyYrELB9JSVrFnc4kyDPBUrgXCcBE9yth5pfvGPBQ2hDMZoWYqh8HvDzoXDfXhV",
  "key19": "3uYKTYCMZ6s4SX9Ush5i3TAbezHC4bUzsT6xN7AsB94cZJTKoELe4MqoqBQ5PgAigj3imkWyHUYWApm5suDQnoMp",
  "key20": "3mozsjkRguxpc5n9K1iU5M1mmCwgXve6EQM6RrTwxBcZFxhXKpMiz6fhTcnVS4NAZd3fHq4ojcevaV4cgWuEQn2J",
  "key21": "JTUqGWE23cGT9uH481DLbEEifvBwL6BmDjv4waQH9ur1Fo1UqkocCL8nfwmcFFNCqA8syxPC7YxDvyBKk1VWzT9",
  "key22": "4sVJtsCsh1G6arxSFsoCi1J6hka5rMyDsQu3nm1kgShXniSfDz7MgZXqEsYmWMo7wkBTXYz2zqm8MvfWLdJsxfH8",
  "key23": "53NNzaPYrb8sg4nMqFwqwEJoA6VV9W7tTeaRjxs4AgxsHJdEPhj9psadqbNsLncpk1Q6b5GvL6m7iCSzz4j3av9o",
  "key24": "5yUj86E7qDyqweMqhR6gdYLMJKhDuWjLiSpH1FGztTEnbmDuoQjTjJ7imgj773SMHY31eTAdRuwZ6aVvE2iWgGio",
  "key25": "twC9vcc9WfKUQf2S4Tvtx3k6awU2MdbxAy4JHiKQAN2t8xqHKfsFNGY6mPBQr9KgaBBhMfTPL8Gs9fA8AxL4Mg8",
  "key26": "3FgekaJUvAY1MRVujsS4dh5LPT64Jrp1uB8zerqxvmKKkpmSXwy8UphGkmiDqvP9vhVmst5pZpprZjiVhnASv8Cy",
  "key27": "4q5m6itGTV5SBiGsH5rDtdLGEes4bUmHgFbobiVJXUf5QaUTf1w95QcWUezuqxjvz7MTkXt6PtXoPE8uk63Wm3Zi",
  "key28": "437SY9UwVRaeaCGTRU3VmfrivoT5ErvbDEHJCoGaPo8FH97pkf4sh9bYpaXxkUvhLFJGWuJJDMTP8Rdd4jKDuk96",
  "key29": "kTGmussv7jnwokVJgo5tijA68HV2DsaaLL7zMhZmDVQZ7wNGQ8x2msTY7gZ4QEPuAV77DkJ588VGXhxHcKqE469",
  "key30": "5MSinGc4tCB7dTN8pdiuvaHyAMbWg2vVTru2CwV8Ch5V518CiBCi668GtNuFF9JCjDi7dnTfRE5cNoh4jbhzBimM",
  "key31": "4XqAswG35z76KH8w8bMPU7ByyuK3GoRiM5Wx2C7wPCQQcTH9m8eYrewHdskTQ9Ps3qS6HVNhq7cMQeGN6hBTaoft",
  "key32": "4wAz3p8XLjUrvXKGeukM8uw6nKvc9DARwsCAWosQPjQ27oXaWxZPxXv3BZrFR11QxWzN9d5SPfmxmXWTS82vbUKx",
  "key33": "jwr3MEpTXrbvCAK66f6MBEDsBcBi39AGrWCHfXdp2GFPvyfSZ4dYjvNBb9DT8P2qECyunsytR2hj3QoNNewWcPN",
  "key34": "3cr3q2kD2F6xf9JDwZwxqAkkXvcxWiA1kRWJBG5JJXug31Tmcr5nycA8B7agouzMUKNogPwLR2yGMZTGME5hpya6",
  "key35": "4RYZFg7NtFR3jjqe7k5NgQUjZ47xqT7W3hhRnWA1GEXvuKgBkESMM9dkS7XD3zeZrHLUEuQAWEUn7bqE1kGKPp1d",
  "key36": "3tfzuiTRyVSb2JpBUjDjDuNeXwHqZrr3u6LLrDGrmiCiyQe847JxBDf5kcvYaf5SZ72FMMYw16K52rwunwDm7yLk",
  "key37": "3xvuPi5RQB8NwW9awrRKeCV4AZRfE5ESJxmFzPHVQTcDkUMFQ74HwuHtVVQQQGfcV1yEof8qE7ynrxKfEcBBJfHA",
  "key38": "NDVe8P9jTW86STMYY8S5Z465sNtCTxMX7iCuTEUM5hXGTcw1y9AnzLtJxyBERHR45oqVdLHvbYJLg145Y9EU4Rf",
  "key39": "5fgHFvVCWtKmv8pVVouZLw4RyUpWXR8ont48PfphHKxM2w3E7FewiqbiJcLDdDyV9gbFCeAE16ceqgmmXbBKrpWr",
  "key40": "5TipEo2ephFaDBsyi7an9nSgx85PPyceqZMev7YUstAYm6vvf6969P1gPohFY2yoqFbrSjDHseqDoFyf2K5k32EM",
  "key41": "DTSBokKj7YvALmMrxZt3StHibi2KjPAzQXoes2VdTS2UMgn5fxCfzoKGo5ZMeQn5MyyfTptuXDsRHkJTrQ28VWb"
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
