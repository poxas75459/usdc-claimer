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
    "59qRSZNAiRfq8GejesdEahAxNHpQc6axzeUUASxhRofmXH2cWEkwCTD3rg7qaqUh9i2giA56HeKL7x5pZBKy5uP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cwxq4SCrFyJXuwViQmy3pWKa92nBTHcGVgqEmrNAgFQxT8eL3fW3p6qKZhV36HN6DWxfNfkTDzZ7gGq5greVjSN",
  "key1": "pNAQVHQSYL4vvtpR7NXLV98Esp2HdfigNrqjqBGptFaT63WXCrkvP147UfXAPBWeGGs5AmJHVURAhHiD9n5J2K7",
  "key2": "5RAgDyqoS2auhiCrvzVnKX8LNJpHjFLwm4XKbrYQAuaNk5EZsnnHocDaDnLZwdqKFFrq5XqHbgiNBpL8hVVGkTm5",
  "key3": "27TyX4f2UXy8wVReT4yFdZebdgtUVq3A6iRKVKznPtUJG4sYhzcd7E2XyGvUSNsyU8osgRQXCcpkxSdB3qusnFjZ",
  "key4": "4CongJbPo2Vf1r69yaHbDGG1VYSNZCXS8pRrG3BNaGY7ouzsiEN997R5craaSgYsYJri7awZmiG5ZMu5wuKjP6s3",
  "key5": "2gaJvBZU4GQBGUNNgfSDPxZGigSNbSuAyV8jqqDgt94jTjeQTHDPYYBFfTuhZeKTZ3sNLxhznt1R1YBxCLiJBcZS",
  "key6": "2Fj93ehforxV1LBdZCZhnzQajGn9bPerKJ29uLiyHvt83EWMnL7YLUm91qrCDzc4NMN9ztoNhMMUPsZmzT54cH3D",
  "key7": "r93r6wXTinnWr54fhj9tuW3fcHtM9RTAFnB4swqqxBuYv3A7muyAzErHJRiEvm2iq5RGdHhwFvPBaCj1hT2RY4V",
  "key8": "3FQ3jy7X8gJMfwHKTaTqURPFBQLWzpM5CZPHV5FMbbfNbkLptWLNp5HU4Y4XgVXGePAAphktwodvNazZVrsYdqJn",
  "key9": "662TJLp8jEHJyK96JQoHnEw9zhuc4uJGUX8sogG85392R1iDogiDdtWYAubWcy3QXxoDLaiLMyZi9nPhmGgQ4AHi",
  "key10": "LVx88hYeaZEq9exn8pNyKg6vNvwDA7CiW13M9QZhte1aCkhR2qM8gqFpPQNeiU7eeqjcPZtus8bG8EwToTVJpzL",
  "key11": "3n9PnBBNy2PMQCau6NtvpkdmbNU2h2oudyrcBUWQuTARwMhk2HTkH9CaaaxJg9YJdTskGK4kWz3KnFkR7nJqwynA",
  "key12": "2GWqGSChgp4tsxSEBE7Exdg7XGXVszx3Kfx3yMRhx3DLPFN1EJ2eG63yhD41mrfZzQj3DDo44qf4MVsAviGQ9qyV",
  "key13": "PZbrxS8YnJK7y9WKAuu7ZLR9ZQYBLnqQ5CXWb3mvwcG4VUPMEzuUcNkcGw89iD1NajudsABfx6DhywhStAWdDMw",
  "key14": "3a4K4Bzit9VSj9jc2TAmXsw8LpmKKGxYXAsp5S4FEBSqyNxrcc5su23Y2fpnATYbsh7x9VFfAybVNv8dpnF3Myth",
  "key15": "4s8ifbxueMTHqs6HH8G94j9LHqDtde4Rm83WeWMzdu2XJJZtqiWA3fvtiyb7k8XrbV4wG2QS3ZAxVKR2e1sbK9cg",
  "key16": "4VZS5gqCQStDCQhf51wCzsDc3Qwqdc1ejFk91Hn3bvpA2hKv95A4Sb4SYy3XGJo3EYgprfLLxXudBzGj9FG4nM4",
  "key17": "3b29YfTxPnFQzoAXg8vrhghS1LN9tQet6wnHBadgoyXYFSwfUrTf374Z3KLbt1qi1RSSP9T6Jkpf6qYs4nKHexDf",
  "key18": "2hkqm5mGjo9LwsGYRg89FasqQrac54oA2w7XWSXStRMrTtk28Abuv9Z6YVLzJFJ7LdtcpRTNTNJz5SjBxursQc81",
  "key19": "124fmPxWKHR12brrE5cfr96afMqWeDUEeqLMAExQFiyi6aNX9kUaZmU387PbJHYvVHUpUrbPUA9GJ3XFLBzURhMd",
  "key20": "4vNdxe3Z7nmrygaXY6pLQGgb12YsFk3xrbfBb5GHe7WqPXCkfhBfVe9MKxR5KwV82gAw33gSEaPG4KGJ2WVAsdC8",
  "key21": "B5KMPow7ZTMorcgkpoxeVZgZMzMECbD6igKqjrbLn737jqYBy4imLsqxrTy8jJi5J8sgHZiPawW2YDM73hGwDs2",
  "key22": "5M3iD6E6M3pJkjBLbHUi4YJARM2nvXdL1ZB5wvRWXmRxx8RtdLcCP543ithUR8fNov16wiFT6XcnFL6v8WB5Vc55",
  "key23": "d3zvRDkuAwfsdxKqm2wXyzh6VQ8LBxJwJLTUL2Qb1hr4tvPP9Ns9sU8uMw6WdfnP8jPmpZSNymYaJZXGaSgkXLK",
  "key24": "5kQUxtNVgoDy2AwG7fCCtLRjs4an8g5aGyaJvDad6Aei1oDKkzH2hbS2mmeHMcr41Eid2Kg9Cbybyu6GWVtPxLLn",
  "key25": "2HWxMXcr5kYTbaiRBoxTNjW5jfZnTJ51jXyeL1REhx1ejt7XL3fFENqccWohjA7YRH9iQMKmGMwPKcGfSkdSEuZE",
  "key26": "5AJTktK2U3ToZwn35qJQgy13cyo5ShFStmY7p95RsRXG7TLPzfYzwnJMxz3tBnR8wAq6ighZsd6jTtfkBeKLea7Q",
  "key27": "21FzgnRYN5PqD7zQTHispA2gB9NZhzMXvanXPo1mncvvmrg9qaTXLTamvdkiVReiT8KbT2M8PK72JjQXYVreSukx",
  "key28": "2NuAkGdrqVUBDFqkWsAk5zy5WAQRuKziHYdhqy6yMJtXTJSNwo239i8BvE9agbWnnMD2n5eb81AXJFnqQQUXL2q8",
  "key29": "qq9YfnrELCu4RLuUBJELE61GPiMVyeCaWA89hnpqR7RvTdsnUzTQBU5cG6BcaeVzM12b3FbjRumHSFxGaiv9NJV",
  "key30": "3eRPKf6FpbQ861DjmMMaPhwFspXiSkRuQUSQEKX6dRheYEea4JxFZ2Mte5dh1o49NveACfFonK6eoHRVWQDiQCgx",
  "key31": "473VsarJAf5s7gtm5iqXjkgL2Qu2zDPkc9X1Eed8mGdsZRce954rbaX5Ye5SvmBW3aBajHPnCbEi1ckTZbifRRYg",
  "key32": "5PbX3PMsLuqcAsg7S8qbWW2o9xqNywvaHZK3D3vc2vVNMfsS9YKcryTZyvz4WGGwgRjpnoYH5sLigjMUuVCYUZa4",
  "key33": "eDCsfHkURL3Ax8u9wtg3NGBsUisfJDQJGTYGy9usrxvMXBTGYJ82zGit5J2f7KTDrcNoo8TV1onwVsSiTokECEj",
  "key34": "5xTdEQBhAxHxrKQ2cKLJoSdotk11mtnNfPL4QRmEnpbTa54sR7JPuqbFqFrcLx8ETFp7jiXHBmvAQP14YWh2iRCM",
  "key35": "LUM3PkRfcEyLQWczRYmrhsTt9p3v49hWbQmBSLgH5rFPpAS1PLUVgYaGVei4fbAVSMcAxygArhK4DxqgRueKY1z",
  "key36": "2tr7VpTH9s9PiCsqE6xxMjdzfErxUVdW5WzZvKn9o68YjQ5WkoVqopEiWCdkeLSDFWrGS55wcubTKrumbojp3sfG",
  "key37": "5q8ktXTEvVUnWa8C8wQgPweyFbwPoJt1Xa6bEVWdxv9Mib9528PiaSncvtWmQZBdRw2btouzxZG7VBzaBbh6zMtg",
  "key38": "22Vu7gkQ8WArCkECGeRSXP5Jkbexw4ofwdAonUGnSu5PCMk95CE7ci5LDuC3scTe9Uf4f2cKvTvh7oSTab8St1Lx",
  "key39": "33j4Rc9e4HFtUPTzLraJSV9f2bWMCmxbDBaQiJ6ettBWufBo2bcWHvFnxPydPyj4xk1MNUSRe4vvV72jfrKKtMXq",
  "key40": "3yxtPCSVgVWamQybrAAWpb5VwW2u272DvEjgNd6LgJeZicwKXGKChQcBBkrM3kXU28d14TaCCzfndtQXuMVSJ4RN"
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
