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
    "51tZw1r66V6GJ1J7W1DFnjJdzgrYxzGeXFn1kjmnst5WeJuoo6V2BrRpvTceh9DaUVuaYyhrR8tnuPsJZ82JJpdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdSZ5dbCG8LbjdXPG1UXWk4cwzmz3x8CYR1F5hou3YbvBDhcWoocTHgE2sVpEvvLtZLNtPpuyDCCceu1TsPwv9E",
  "key1": "eWY6DZeAiv82QjQBAJpvArtf6p6WcMtFLUhYqQwTrHD7UkHvghwsRjEUepu7FdxhYgcy3synHgSFcipfoxVp4Eg",
  "key2": "3c17NWohMdTgSmTvw5ZKz5kaMFLGsMPh1bhFcfPrrXo7imUnYB7KDZL8tr6toSisxqda2kC7gAwUi5nrexZdApgN",
  "key3": "3E9Q9yyEedjE7egcrSN2kWwfveb8PKN8i9NEoQDCjDe7rutvnotwQ2dZxvUPuCtk9E2gtChYu5QNYqaE7677BHob",
  "key4": "3K6ZJyBf1WduBhQtrZGMPj3bpu1WHw1KaDiRfJGSLuVqjHBST8CdpyrP5AoavfZXNFrT2SXzNkGY6FzDvj1TfFxi",
  "key5": "4YGzK844D8aHxdqh2DoLRztdXMy1CfB9FQcujuxCLBWLL6E9MtdBQJ67CXTcXD12W5Xa8eRaTQ8vX9Pg3GSXdVaz",
  "key6": "59Joz1Nzh3EMzGudFPZ4eRRCANPrWqHhm3T2teJhmNcevrSQKAKfgGxLCRq71kRWg9W6WdvDF6hnTqaTshMKdKHU",
  "key7": "C5qMn9ALMLMQxfnWuPE7XTAtd25TY3zTFBKtfXtATTk9Yk8v7po7wyn1Jw6a6PfxRf7r28muMn7EqEGBHhsritG",
  "key8": "23zzXNpLQSAi14pUDe4vvqdrds6g58RuNvdPKNQYhUo1T9DX4FhNM8K88pjoxnZePNbwqt3Mi8fhQ1cgU86qbo7Z",
  "key9": "4RrK6SSnytseWTBoFbF9wjjRzmCFNNUX9AdTiGtGn1ZphbZdpb2kDWgu3gY1Zk1dFeYEehPq7tUHQ147CKZSwfpP",
  "key10": "kbCujFoB3i7afAbUzrQqXSWsEmYB4eYxeZ8WCXuvPxEKHTQksvgrWpR8B6Ujgk4LiJy6hVszJXfFzJXhVHRNK4n",
  "key11": "2872J7ARMNjSQCUXjc2tQm2spiAN17ipHGArptEdDPSbWoeMsbfmRfpbwx5XZrZqSZLe7eFMHiSbaS3upRfuot8N",
  "key12": "4RT5PwrfoZNoiXywGkFYjj2pfwzW9L3FbfVneYczp4oqBie9xXxfDHMynsGuYqrDGyGLdUrTcDDLiz64hp1zWR8g",
  "key13": "nLvhu9L5WyydHwHGtU4DrnwLX9b121LRVLaxLZ5N2kSpZaiY3u9YeFvipKUhJhKqDJheAGyrf8TZZf1r4CsW1QT",
  "key14": "4cB9xNzmX1Q93qzwnX5wopBfvp2wVWiJ9ZP1q19Y829hrVfwKmpVm2nmDPJPQDQkLznspbD47pNbbTsrQSHXqcoW",
  "key15": "4aGqyskkCDbXFyc3i3LsHznSHoXDcFrKJhFe48eH82QU1ENkG4HEFUqDeyMixTrANzeEzjac6wzMxuypAf5JA4bN",
  "key16": "hwANGFShgso7ytcy4ZXSJTaHQ2gT2YZaE5Dd1xSiRwKtskEdEeBRWEBBTovdVgNDVSnwLxsuaRUKZUyAztkpM7y",
  "key17": "5H2VDfoavDM1VLHaZKpHK3VhcxizLeNcGseDc1XfKqKyTJe9xjkgr4JtPYmVzV5hKcgGPSGKgPyCXfCV91gscvkk",
  "key18": "23x2dquzh8JTLCTheKh5nATjSrx3QGcn5FiUJudFm6ztwPZ5BjBnVkBywBCBwivL7dCVDPReg2W9zcaYNRVDq4XH",
  "key19": "5tJo5Mr2M1c7TL4RtLEoiRyiLyp4ebTQ2zsEEB8HGJiyDZFn9RhSySJs4Q7P12JNbYQG9RT3EDesNESB9AToC8qD",
  "key20": "4RMeT63Kd17ZhgJbaRgTWgkAKwqbuHRkk6VGeoLsQFjAxX2kvcBG2cRdhShE1fnoRNUMYXyTE1X6iefhV1dDcuks",
  "key21": "pC6bthFGfCBY2PRG7z1kEuuik399yqVwrVDcunHkXrnui2wbKhMSmtXacj3cvhebBKGvzLk8yCrfEerCf3XGvjr",
  "key22": "4T9qYZf9yq2ac8gtNj7jzES39gXt6dzaFFBBX3L9FA26q4MUBLG9jFL8QG5uXVeTLAm6vshXt7sNj8zKrrHqpDpS",
  "key23": "4svKaTGspb7Ny2YknRxTt1cevgUXeJZwYRwnto8B6g9yiTXJxcXqoXZGogJTABtbBqbivFHVHVsHhHDqxVt1r4Ne",
  "key24": "7LihApAsWyfXkh92LAPcUJ7g1XJWjCW4LExxgAvr5fhzZQYs4ihpLP8aqdkyx9gLDqkLQY3ozARwLEmt9zix1s6",
  "key25": "5GrLYZQqzNXrY2fCLEPhXaGryQaTmz6pTHroB3UmpT857UWGKiCQE21AB2KwkFYK6dRHRWHWbHgquEzT3CqioogE",
  "key26": "5xZuq3vqDRsZ8fHhf875X8Pu2J8kmt8e9efECxdQo5vKYc4XojYhVQgccHPK3xWNB8cEVPN4ABCbDdCXMmTtALRi",
  "key27": "7g1v6KLpfCms8QsUdBHTfoZzx5S2a2cayNHuMjfGyc2mfnggm2rizUj26XSFsYGc4Q9H8PPvoboSbFrwxh6K3tu",
  "key28": "nqLNHoBDNj2RHsfnRhyJetN9kbuuPxkn6U7TssjyhAXG4rvWtxjmm5rRFKwJ8coKXy266xAp3SNUkr9UWf22T7N",
  "key29": "59YUVHjUzCbwZWpvQdane79sj8i1CB9NYZR4mXy2ATQMztMkLUNZi1Q9Y8RVU5FMoDS6MwLNUoehXV6Zh8YHhmrP",
  "key30": "5iTZX1uBxQoiS1APw5pbCHhN23vYC6PGewoanX59x4qAT5pE7qi5uawtSCLCCNaD6b9B8NvajocQn6PRfHLYfLqc",
  "key31": "2hfVSV6sEZVmyq24Mz4kkt6FEDpVuPmzmTNxHmrqYTTi6X8RUNYrgnDwgbQkuGoMhjSpDkSe5gwAhvqp3nTpnfoB",
  "key32": "2hmhTNJMtYZqk8AvQgh3aW79VKjH2ZjKFuNjcD4nBFZ1WUAgFiXzV7X7M6zh56TfoU6yeZi7R4Qbac9w9HyMYzDm",
  "key33": "2TBoL1BeMvouUP4BPdHsvxt5S4FBkTvTPQ29JCfWno4qrLy5dsxGazF3BN4JtedzvTTdAwYt8gVTKmykZLFDvW59",
  "key34": "3cPuEGcsG9wj4d7MTGhryhb8k4SYcHrfSGGyepDaDqWRN5gx4DhC2U626Nqpiz5PsNCRPGJo8nxPkNcs6nAjyNcL",
  "key35": "LjT9vJRmPcp9obw5EJ2qqWTKaWo4p5LH16wsFdBnvgMJHzC9jWCdiAby7jhBqptFuToiiAs8D7EQm3msQCiU7k8",
  "key36": "2kHW36z3fbLCR2KzBPGNqoEX1viL1PAGzc4CjYXTsqeYvx7rata44986mzBen6QLMrhcGiqgaX45SuRj3NiCtL1o",
  "key37": "3YX7PXVCkpSKNX1LJtXMuAneLC1HMWgAac9LWZjmsK1MniskWxWNF4DRYgnKfjRhJPttAD7orJNPPPN1PMVU16na",
  "key38": "4juMD6HD9SeGgu6cHn6QLT6nq1XvWkXNwNFKJHJ3b5pwsPnsKNUrs9UcZXoZD3DgPuYwfibeUPv2CtVQYFAY2pKg",
  "key39": "52QQmFCWKiG7uoEisadQnWhZu4YuMSrtAmBW3pVbh11ycSUpZZnmHHTEaa3rCMwjGVpfyn735wjDFjavBJcSZVYS",
  "key40": "4gBGmzhHqYgjzGQrFoBddWhGoHd7TpjGYhXHRECnXDc3oUpiJWVAHkXVvT5pLST5qj7cnq3Wm3jGGyLaMmTLPKJ",
  "key41": "5rqMJK2oMKhppZ9JhjcTHi2MWoFdgME2MpWSGsEjUajh7CD75J5q6A2spjCEHpLHYth9NRmSpDLXdNtxXQ1tBcGo",
  "key42": "323PsYDgdciM9Gf3MF3xqjQ33WtHZZVJXRarMVymvmVNq1AHBZtBju2nZdxhSiVCpbrzEr7VLGSmXyUUc7rRSPBP",
  "key43": "ccm5tqeEbinZGsZ9haeXa3XM6izTSGrfyiytLnTvo7oyiw7MB8frtSCPfbpUdXZZN5AkVPD5v7CRHymnkWhTRxr",
  "key44": "5Y1FxEpnhsBAjgJDiCM6rGaxzNXshJMTpLaroPJxJ1zVGNVZHZJgtqU28LnuBpZHhxC2ffgWMaaHiPW8kHx5zXdf"
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
