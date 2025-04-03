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
    "2zeQGz8D1D1K9uwLmkvfcpEx7zzrZMutoNYQpt3YvXSvW8epJqwwLwb7btcBCJwG1N2To2N5eMGQs6VdVmUiYChu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vnp1nEwV6qrq38gxaQPAgNuF4cNNQSKvYas6yz3sraFhyqhnUAwkcFoPyh3QBoifEVeRUep2ivBmH1cXG5qw8W",
  "key1": "3qieucPZCcTJbGFc7EJG9vVyGUHoz7xQztqaEqGGysXQoSEG4dx8CCbRnFfgzVgPnse3viFQTnaFm4R9cwfihNpX",
  "key2": "2o9qt6NPf4VhHhZpwJNh4eccuATBJdzNAQiVtf921ZC4wTxF3DDJ17m7TADcGFRdvvxkQVXQ68BrLBFY1CP8FgZZ",
  "key3": "24DtDxhGbnn54JWuhqNKSFK8SHsem6ubheoeMt3u2K2s7BYoUz1nCCfTJp3ArDQLNt93RFTP7UmgN3HFPWuCbeNf",
  "key4": "5BMZ3qTqvTC9czdiD5mhnJd4evZNg6rC62n65Rwyv7vv4aQgetd1LGLyP1Jxc6eN2H9uZ7yFRir1eJ7gm6YqmoAk",
  "key5": "57jZ7EZtTy63V9WmaRZt99CvQ73MbkhLb4rH1JFyRmSX1S2V2UhjDFV38iFPFSrTnTAAtEjuwhkPk8vE45khhiQR",
  "key6": "4exzHQu9UwwnLxYZKma3m6gDkzgkLMrQe3cmdccuYQwqbN4zBXRXN81nHcfgK7LYRCYM7FbkuDfzm9UagbUNX52D",
  "key7": "9UCKqALAYG66PAHdPKtDVTQPPDMRYwJgYmtE4qtajv7fM6zXNLqzLuwDUfFyG57JjztW4f9VXzNDkRGy7WCMGXQ",
  "key8": "3dPwRZg2wYhsBBswiFjikRX2mnQCyAJuASrWKExxUK8ANz8fPt9851yKZNyMBrPdJFYSEm89sVJGRFUG4oU2K2JV",
  "key9": "2E423xTo16HYeUscuDcvSVnYW9aNCWhxXzQwoD4H9VL72LXsurz9hXCh8M6hGAvMpCX2UK8sx9Kprb4tCZmzpur6",
  "key10": "5bhM4n69WNfgse9NXptzKUgEdNREWFnQ9Y1QsJg5jCLWqx21jYsXseDUuf3Nmj26YXeUFcJfX9688VtTsmDBu6em",
  "key11": "4it4BzQpMQhJ5REg6tE6CYKbPgZUKuLnMzetqU2PFzfpnC8Zx3b9gxH9bNshD8wr5j4BJsSmvwdSydbXkoDmy1yQ",
  "key12": "5mfu5119r8k3VwaMYVKkH6ftPuUZBbX8TcVWj7DWXDCHLvgQmrMMnvJtr5pa6u2eBtFxDr437ERCY2QfDcj3zdCn",
  "key13": "cTqg2pXgrT5NSTGF2mVfcjJzy4PivrMEzKsQ1VUMjqJSW1j8CZEJCiysExR2ko5ey6rZDjXjfJtiWhLxMfdgmdZ",
  "key14": "QrQfyBfZL1RTh4d2DMuggLmjYn5CMfy3Hc7XkNgbRXVW31QftbTvp6qdYgMbDcKW9dxcHwHwB1UNcBRNDGwBWD9",
  "key15": "3pkzkwv7dfxsEEFgJ9nvtmXdAnRtGCfSgYb6qMTL4sy13JRCbG7ohxqpHQ93UN4C89gzdPsV2Urm3E4WM73kgEWy",
  "key16": "CmkUvKr5grXXm96bHbbhqQoFcLyiLafq3xi2ugRSaQtKuSr4RLBQS4oS1pm2VkMg93AgzkfaqchXxBYxNiAgxdN",
  "key17": "498c8ytN5P8GZ5K1eSNyUvdEj7DUryMUoC25BHnenK9fYmzhYboRkG4QYHeSeWXMLLwck996cHua9twyZ6559kEy",
  "key18": "2iPmKNkorViY1DqzCMpQrmd51uwaK542HUJSd6nCcM1faRKEWdEqCfQRBdaxT42P2vHQ4MHM7TLBHmAGgPk9ZLhR",
  "key19": "341V8aF6pPsZVCHogwaPxBqLVkyy8jx27622nAoLnVwhDnvrTapeBJzAFSELUxmt78ivBxMSby2AZRvXSnckoJVD",
  "key20": "4NXHh8r1qqMHs8DhYEVEJgj1yQbKRqz5f2G5CShZ85hMJsQLnyTJAemfSKU8BDRfoQdKYo5wAnrosRhMrMx7h9ma",
  "key21": "DGypk3TnWZRWapyyyToMTCChTaUb6gs2g8jtSZjM3UHzSViaUCFpQDPnrpeyHYqWV1yBMx9m9T7uXinjoYAR4wK",
  "key22": "652iuiU14WJNTNbAVrjaqvTiPe6zTuP8RvUDxwutkj62kjhz6fc1fFSvTY3AqTQM31GBjwbg3gQBwbi3st6cciJU",
  "key23": "34PPYmqxSH3JkseyR3kjVxzi97wsqMUh8DY221spbEt2zEjAp5r8yotM7HZoD1VSoVhiPKAJTUwZJFNHrLCY4rHh",
  "key24": "4aDNBRLduFW1ewYACVZynw4Y7povLaLgyRrhjVcjyqxq3U34A3X7xMS6zjEDxJpcJ9fwqbBVtMmYagLjeEA2Mcz7",
  "key25": "tUJ5jJftfBsPQX151Q1fGhiedZvfaJtDGRco7KFFvaUP2c1fCwkCmyt9JLX2c6LeorCavRgsbQBYC6pBtBohwWR",
  "key26": "2HvaWytgE2AdyMGFycS3gK6HNRTtyBBZs5gZQx9eGrQJkMg2t8BXzHQCq588nTwU2234eKveQ7mFGPVxis7m1by8",
  "key27": "3mqYBHsyZsZH5ECuKxWzYXj1in2H2HyaiAB8Z9m9QPSTQRz37CLvTfqGSE9kFFG9FdiRBJgAugxJ1pWccJmUhF69",
  "key28": "2xfzEGAQjvycKVQ5ZmVQ8z5vNo6vFpMVoR23VGn9m6TfYHcn3k93R9Xh3u1aiC7y4RgeJ4tvz1WmsBucGdhz3jzG",
  "key29": "3PLUNSCWc5iwX7j6Zx5NH5kW8G1AqwrgG8RhcwYLap4UNh1JByDRNBDSzA7Nta74jYWeTuhamzXYU9bLhhE82365",
  "key30": "d4uBESQRDhfCAGmG8uL77KYnrrbnRSeTT1Yx49giFCgDxYxzyaNYuLnd6S2qcdwBuTtXKKsE1cdURCjQ6sdVHst",
  "key31": "57yMsevaDgR7Ypg6uYuibmEgikgk4yo7twC3BAkpyUxjgx6AQdGZXZZcgMhcuzqARvnez37CfY2qAZjhSWAPEju6",
  "key32": "3vgTURBKevQNQBzbGK8U78gVcYEECbmdVqN6ahXcbsG5smwVVsrMF4kUE7QWyy8pPt3NmLvTpvpCNTQwck53hs1f",
  "key33": "5bDSUZs6v74zsYZYFppJbNufLufbuZX17s9dM3UCb2WvN5tcri6NRCX533SX9qBrd9iksXyP1mCVDcocCQpSxLwJ",
  "key34": "8Z68YjTjTDXHR3SAUpDGs9MWLy5uXgFcsW2NegzEtVoLXiGaSct6uvWtHQVnkBjEBvgb9Dzpqe3C9dNWqczYyd9",
  "key35": "3cBozzDh3ggtneAzjaX2XiMDXtJzUPk2rWY5uU1Gui2M4o7gWWbYURNFYxGusypBVsBMrXJ5DVKF4fYDJvfuSxcM",
  "key36": "2Eiz3Y84oz2FbEq9CmCKEx9peFGN5TVuiGB7xpEiT6vG3nKKV4A6i4VrxfHVTzi2yeDimQ7QXaD9mThngamEYEW6",
  "key37": "5BQ8SCgqq9KJAcxmn7HREBtF4uJEajCVuXTX9a4QrjThE8ar3GZDHrFx7eZ9JWXtfDcziqzR3gEAdpUEhDpJQXpm",
  "key38": "X9trXWzGG2QvMLtfTZWZtPRMWeZRChhmC4vRGLFseRJAcHiJsn3MfddgGANkccdxK5Q9kHtr8Rr2RbA2TQSKNU2",
  "key39": "4ptN7iXJkUEaZqhX2zwQ4WNXwEFaNMUxCzkSYZod4kjFpGqS9idBNBGRMZfpJs7EmzwbJXnfhh3meHMoPZWyYpuu",
  "key40": "634J2zTCPH2YLK4fHE7nxKL9efhxY1H4AhUk9UuanMsy8wG7AsNnpGjd5aBLQevGZGMg7GEbWJ34Kja3FXi9Bdbz",
  "key41": "5JHJfyHtcen6P7WN8N3aQ1iXgDRiFmWytQwKR4BnSNzHUA34WfHEP5vxuXNB7AhRMWbvNPWMZYSj7ntTbTajXsR8",
  "key42": "27hgJjpCobsPxrvwDVxKDB3pKcNr7VFDVDpQjCYRXuLKc5vEvwcZZD9NK1gp4JF7UEuuVttiqtjoGWdFxw91JiLL",
  "key43": "3T2CVxYAaxtazQVjXSsUdGN8TeCHxYSnF1HomgPvxyaCmdtyYuUNqumDsAcB5h7YfQ7CGyepT8mwBjEfonUXJs1w",
  "key44": "4HxpUWxBYCNhirY37LppguzpTLiKKN4HsqEZf1taZ7m3ogkXez4TDn81rMeno5WzmHgMR18DHY4ZFxGQhAtqhzon",
  "key45": "2HbPowvBaULK61JykGzcrY36T7YS5mWPqm4sLhUpLuiL6qHP2QjKihma9mmkDAKfNXG2S98z9fvnRALcUXAzJcQD",
  "key46": "4yW3LkobhKXsV7sqPeVTaYojSaCoPQYSunGGZ5jWcwyc5WwpWH9uJCsVSk8KE6wc2dgqBkANAhpqwuJKbHJtLb59",
  "key47": "3WbmMZR968DFyGmb9Ns35nEKw6qpLc3QYh6EKP7LYd4nC5mufu3JRG2UBMRrAzgiE9uLwiREGYpXooPvG1F61K4G",
  "key48": "5yUMwwUE5Vx1cnsgq5metKNA5AZ35X1ijWg4zQJVLg2JVp8gFP74DQa8ZWg1YPWDDK7TuSee4LJguGqKi8P4srsL"
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
