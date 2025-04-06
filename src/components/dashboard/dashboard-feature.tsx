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
    "2G1P5VXGcUzX6nqp3d9VSvtmBuPfUYvmVC4pYDJnUt5ptw68zj2ho2fVhFAmmjhChnKFBrVD5RKeZ9Sx8QwhJ5Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45biGvVWqdHepeJ9kehxucRxCNZPTHN19gQ7AF41qQchiQYLdwnV7YmpHFnSRhn7wxw5cAstC7Qv7Mg1uhMN2hQL",
  "key1": "5dqePW6W4vrE8NNGDq1uSMDnrzNLcay4AGw2Ay15whQSrBx5Uu2CVxnVh45kitWhUszPWVR4APerfF653L51rrte",
  "key2": "5uDy8Hnnu8CcJrWHPJq6TsHxEqtYMnYaFTwy3r5jvb2u88iMvMqYC2Ls6HyvdJ6Enr3GGsRhL3ftRbNxS6QaP5Ku",
  "key3": "4iXJJWsAc1kddNe6WkdGgK7QwAXBP9FfNz7LfSgFW9cTkYk23f9JEjQW5YrLTMeGgaSy3B1yKUGy3TLwAhEhJ84V",
  "key4": "65Jf27UgF4xW9cUD9KP4tTbHYmhpZDzPTeY48LTAt3jrWJA6rFB5xWWRwR8Bf9nefmnxqASzFcNw7UyKxdJmMQ8U",
  "key5": "2WBFz8uerwmHJX9ErUniD9FsWpmYmVRh2ZYLHPi4dyJayeRyu4G8RMrLJJm1Bu9cx3Rus9hxzGPqt9Q7erHZnyvY",
  "key6": "3aUxjBaVbzfC53TK8JByZ2RStC3pn9Mft5FpBC8cyehyQbnfeBaNVd9YvRRad4z3mfzn1EUShesjwmJAo91ekrzd",
  "key7": "2rmfF4iWkUGnzApHsyQmyF5Qs5E9QatG7XDEQxNq4hVxRFqQyXR3ziLbDpgzjTpJ9LcfdAnRWwBLsCSK8A4qafg4",
  "key8": "2BtbmTxFYV4yQEs1tF93Nkp5KFApk7qFyhP1t53ZZBmyBMmDxwudJUz9m7tgzDosKT6R2cLzWKLu68HniPcfxYTN",
  "key9": "5t3nU7L6EVC3Rw2GLPEWRJqpkhbMMo7wqRQnf3h5GoPVXBai5WKGx7Fg8xFQJ5KLFhmnPEVz5dwa83qWmiEsSYmn",
  "key10": "63Z7RqkYBZ15SAqys5vuHWuho8bi8DVLCgFxx7HYiHUpezLvM5TcxnVf7YAjUu8Da5Km5GrdxXg54wUwncHEW6MU",
  "key11": "25kSnjC5HtCYArZX1a8qZH5sBspwp2ymBJopknCyRFxTv73C5USZdCNV3m1doiKvVWwTJsfLFvKjxKLq8wvPHYqY",
  "key12": "2zGw6DGiLrfL7DbMVbjchMa9amC85k3YZmYcnEpS4TQF4vVz9RStmSChek3rBjDwG1PNyroTv3b7Hb49UpPjVNgz",
  "key13": "3Ub3GjrrC2rgaKiMVMEvAMV8JPLCAd67KhRNCbEeK25KfTxFFt7JUWBo1ehnbMp79fbPEvn8qQMGc2tb9f4Anyyo",
  "key14": "4LyiEUU1eKLJvvbjc5Vgnw9BMQ6iDbeHk92F7opRypHkEiDKPyJpRfERbk5MY77z3BiYuoVxoyxCLenLB6guMYyF",
  "key15": "5dw1dv4xsWd1e3LgRKMMnfsnqVusbrX8XoUH1CLcecK7DLhPgK4tSmbLqxtuDAWXcehssDtR4614YjDtspE4gCed",
  "key16": "5pF4mk2bEcvWSsH8BbxmA1Yys3xXoDVMeTwhrF5jAVugzUp9nV1NKieiBSbUkotHaXmKdoghvzkUSUTmWxNVbWws",
  "key17": "4MUHwHMXumDjN52kGBUWScCMRtz67jb8urLV7cBX5d1unNrWTKnit7v1zTDGRwd8FRZ2psSw9hHbSjfWAQ3V5yWB",
  "key18": "2uKq2GSG4CJJGE2PopdpxgUsCbTiUc87nPSHBNA6c2pXhswd2GCEBQz3j1Gd8vMvB3g8r3JRq3Z4SEZXvwgxM2mo",
  "key19": "4YkQWChGxkVKQBhfd7SFhfoS4BqRFWmM5fWE9LofF8WrNZi6T2eEKnqoghvSrTjnUjdNdScHztDeVyVqr7ZXm7Zy",
  "key20": "YWh4DYk9EbTLU2UAvKd7y85pVer8qqezXrzNBc174kyx861vvpXNYDCyN6WwcU3msRmLgzBQLS6qWhdeKytPR82",
  "key21": "2DHFCT2gyXeK6p9KhQd98M32KNwbNY32ChdPi4BpLwN6Cp1ZYuMoV2td4KRo9NoLbyKxAt3KY2MR1YoSA44KDCtk",
  "key22": "3MJpHVHTJX2HrqMxSQVcaFdpR7vxhS8MN7wxAGkd3PErd8Zw5cLchht1NQXx6oVd4dbP2TYrVRTpkHr8jWQJGcK",
  "key23": "59Xg7NNRMLkDJJ9pUA4nPQuSFP1dVv3LTrSpiar9qLh6wjLkKm5zUqhfHsKx3WjewfgdpfkiPCqwd645e1fDwNC2",
  "key24": "5WRQbqk7EXFHVGpWbB4xMZUAJC2Nw8Gyq8VmqEb3K5sL64dh4cb9vyL8VXS3VVhw4CAenTZroJ29euGosH1C6Dbt",
  "key25": "3r1RhufTrbWA56qt69rM7Hhez2HfSdW5VmY4RJGcLFqw9CyrzyG5jgMKgnDUsNuWm683F5F4KSWQa2jX2jqcECiC",
  "key26": "4aTKaMU5A2RrBuTVytaKPmN29UcFhNQ6H2r1Wfr99zoy32UmC3mLQ4VFHNqbF65dTZxAXzmwr5SmsB5ASCuPsod",
  "key27": "4cgqLgshE5o1S2DLpxxahomushMUPmWCcmjT3N7uud6K6Dz4K5eFf9Grw7cqfwW6ZfwQZPnzavWiSD2d1PtUjPmC",
  "key28": "rhV6hUA6TRpPXqicRixcvUVzvCGs7XHtift4Zrq671LUCG5u8Fjo8TRE8eDvMwtqygfTqsCZdTmtmFjmwzpp61E",
  "key29": "56ELt2MqzenUYAaY4bmcxGxL2szJR6m2sJDusbgUMi78kGkVv42VZNvYVYU1zNt3zqpcs7xGoFX2eVudFN177zP3",
  "key30": "274QZqxKgADUwu4iB1wbK8G7ohZ5oGpqdEu2gBu4adoys2ao9fFcJ1r5ZenMrfkqUGyQtZQzbSjsqYojr9fR9jHX",
  "key31": "dSoyDAYS8YMZPWpxmuk6EybPDFJZ8AspH3iiCdGK4pP4jQU8Xda4s63qaRhwvT1P38Gdt3EEgwVy6eE9Ghozmbt",
  "key32": "63xi7Lzo8oQJA3puJQQ9bwixfhXYgvG5aEDHeTza1zwQUi5YjAfuU34ADUExFQZEhvYgVi8EddDtwneZ8cZb5xBe",
  "key33": "3QJJCMBKRCK5nDs79QsSSMGea7NqGgWADJAj46mAQjHPQ2wvfBRHTgDMvgk47W1Z2o4ueJA7GbwmHNj46SxgHRpE",
  "key34": "4UEnKtQxogE2NpwUfqc4FFNUs2cppiJPXS1FwtwwTuD4wZyMUwn5NhNEUBrPp4bcfdmWpckJokWxYdnVJGvpmjBx",
  "key35": "45vK8JvGmjrjFz6aj7rVVgjjaBeiPnWX319atBzo9bMTCVCSgXEcdQ9FQ3kGaNUJmBxFGfPi6j3zgk2NiKDxt9vB",
  "key36": "5T622wUqMqGaj2bRAR41vQNNFv4serJfPAmov6FWQRT392PqYHxAvqzc42kYknCGbpb4FB6yStoZXLksTzeeeWj6",
  "key37": "31zofuaEDpvgF33RUftV3GPSCzoNDWt8kGAEnJn33k2rTMPWGLNWuxwAg1PLFP1WdCQ2cffXASLewstmPfXeTdB1",
  "key38": "2EF7qYtTbx2B1UwP1PGRTuQGCJufNxLzueoGCENeSP9GFEcV1KfnH3pErKnBXjD3kUEyHon2NTKDJnC6uh2gUqyQ",
  "key39": "2K46oBUHqWpqAEFbrkz2ToooCeLnwTwsMfTjoodPSDpfiP9EqKKe3PwnpuqEYd64BWkRfefqkdhe6aMTpjmuFagH",
  "key40": "kfoVmNbhFndTTCtvaBUEZQy6v44RdJed2no1BgrvCKNpJuA8EgzKANqwSugRADE5Ap17r3VaLy2NQWcAkacNary",
  "key41": "4XBbsvK5QcJ8dwjWbBywdtzQDgVhTi9g4dtqCxRhiUnGiKecPJjnrxHUCwBuVuGJshFD5ZWDcAmEntHK2unMMqT1",
  "key42": "5LEL8bXwhzqpciNTzUs3AzzDs3KyQHKZKy2YU5zx7tD5s2JX4krk1ndhABBcax2Mq2wPFmCSwNYf5XhtmuRFqsmr",
  "key43": "4mjwtkkcMHs47jxi5Y8nUBKD9j5oQK4PYqKVfba4H7JLYJTforuNN523qL7GLWqBVhFqV4UKzYCWSKyJD2CZCi24",
  "key44": "63xCM75NQ773RUoF2bD9qvaJUYhkkqcmWNjKZ7PLJVgDoKSvYVJZd36eHtwSTHQkb1MCi751tih6ZCprmBhoFJhT",
  "key45": "PXycXZNLfvERK7hUWzj23CyPmfGiJnojiMVppbwu9iWHvnKhSUQoFfNqfZtNG3curN4oyFx65pVoPHVK7S5AF98",
  "key46": "3Ud2dz5kdHmjxSFincFH4J3vn85LyvoSPftspjfL77w2khmT8pVq4E67tDzjSB3D71Pnkv3rj9CRd2Ratvrd4fSw"
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
