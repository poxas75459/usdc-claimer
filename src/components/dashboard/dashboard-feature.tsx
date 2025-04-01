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
    "wQpeovsqjx3s8GwkH58QPsTWgTXvD4cS3vVtAJymThXMHeMDutFTym4aazyoreDcQEWsDX5VHvkidmrW8W8rCuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMxmWwpmya2YnUGa5wAqwhe3EGJwaGkYdDoKbfVpDWDUfjFwj5u2JASZz5Zb4xh3BiupFaSWP6r1aosUCsmbb8o",
  "key1": "9BSc3byZ9WxiRHqVUA99vicTancdWbsYko2F8dzVNtdmEpuRz6JBMizqSYLeLjFfCPmgJrnoPQ29oW6yfvKVDVX",
  "key2": "uBpFgjVLezC8huTshHr1u7fqw7hnWGDdZu3P53Cws1cxcFDGzaphdBw9QbXE16AKTqAcHjnvYcR8TtMxzH3pU7s",
  "key3": "2uEj32MVgNDM2DnQZoG9cgRUR6uzFJPVjhHgKNaaEJkDgynoV9X6Mmss6QccqwEi52Ps83d4rduW5R2pxikeDbdN",
  "key4": "3gucKnF1CTPwTj51KssV7bXpBceNYHeRBd3nAYGmimBT9ns53RK7vehtiq1F1U6iEjJkBvuThZPRVMcDos43YEdT",
  "key5": "2DZm2i1Agoc97GvP3Pej5cMTFyk8xsEGDTB92Ax28U1mQ87amkUNAoXiC9msA3Ae3qqf9gwFc7jRWMsBuLczYADa",
  "key6": "3GW23yf3RERHVGK5g6kRAXmakYgTQiYXhPDGfBFqNF6DMENAuXnotvP94cKPNd4jKAVHsqKdpwx6yLBPhr6JFP7m",
  "key7": "5LSLU9jKquZAMmCB3yQUiKgF1wJjCYh3jDMvStXCnDmrEkNgSwfa94mjDCr24pe5vUcpFqVSXYwaZpcBgEm9tnnK",
  "key8": "3n3jwxmowujTuNnE2zkSoWiD2a4oUnQZ4UTBR8wbwRJYKESjfzjcKBBhpfBDhv6kMFdMJFH7qqRGpfNGyhFBryd9",
  "key9": "53JmhC2W8aG9KeRNepPcM9jqeavJyXUZL3c8uk2tb6oibk2Wt77i3xMsSRjEnANwgA5FWiWnmaBbV7rB2qMbjMeb",
  "key10": "Gv4fTcAUEraUzX9hs8qVTWJ799egrTCh5CdtfkoT13EKWpkZ6ncZKc7iQ8CZNydm6enqCRyvTWcsySLWBgSaZB2",
  "key11": "vz53RsNGUKq2vjPYYe7hQAqSjbq73VhYr4yiH8UT5hcfGfB5gLCyPbNxwrrd6ZbLz6Cf5cV93zjiRr7Zart3bGv",
  "key12": "UALzMk3cMgmk6zYkCcfQfuqszhyqCCe8PApxBEYvV3GYNM9njkL9SrzAeisNDT3ofxCTP7GNm42aYkqtGssatZr",
  "key13": "3fAvAK1xeJi46SEzTNm4pbd1xZNEbQn6XstJ97HncAaay8vREnMsyBA4VLevotTVC455Cd4Dny9P6m8iHvmkfoj7",
  "key14": "5evhBMEdF1fCzVUjEjBbXoUPMnQpHNbBfdjmcx4ift4nJ4u4hScGkuUTnCsDePxLkTGgbpPaC7kj4ya5yqSDdji5",
  "key15": "4vZFs5BA17xVmLrLtv83obzU4fjjFodTD4v2vHgTy2pm3eUaYMNpVK5YC3vChm15ZfxV7eXbjao5Fqr9iA5J9mBs",
  "key16": "42ERjASsGpot6XKq7iMn8e7YGmnWdmUNENc56UwNbWjFUYGBwyoFQMsAakmQBG8ugWoNhbsdjS3ZS8S77rgMtL2T",
  "key17": "5W9vsBidbgWSqGB55SpQHx2DH814mFquFnTGW57kDpZVNUmKCQPP5Yyx4ZEuEiPU36wjWDRGsjdeXEVSqXSbBamp",
  "key18": "6dqgM6CoJQ9FcB7jC6JKznRHKzKv2fTX5m5J1M33CYpuDCcuPJAhx1xSxWDKkis7karvKMEmizsZZoMWoaGP8mH",
  "key19": "CTaAuoKtLmhSsN9HfRodGrEDwLMr7hVipvKkXEkwpWfXDZEw516P9UMaHiYJAmK2EqAQAJwKV1WyntPgMvS9M7b",
  "key20": "2DonN1uUU5UrMGeLu7rsaYGUtq69uqHy7csh7ZP2dj5qagTfpoWnr2zLsj13wvseT2SpLmZ4aRMRG6Z6R5PqTeXM",
  "key21": "3mNv7B7Hmru1MW1PBCjw5zQhJihHWQ7Lrj4YUNLvgXgEyR9o8Jt7z1auYqShrHNweQCfRbiQN3RkZKLm3CBK9svk",
  "key22": "YQvKL7X7uGBFjAXsPfSUhjeE9W1sz1tgdrL3pNqRmC2BHVangdmsHMGZ7SsLUZ9UGEqrWH9dGWAhFCLSmv6BMS9",
  "key23": "3SmPLFGpmkgKkWrWQbK3N4yYyGkCYfkUaiqhN4RCSeaghrHduoEQvW5PUrDuKPzc1FdmVtnk5q3ziMRLcd2srQW9",
  "key24": "31ngvF6ZfEyX5jP7KjsNnUw1x1ncTSmKtpa8PqMXitf2cuoaR7bGRuYP9gcj9uE4zsSPWUs5CBSqaRdgKinoDkPN",
  "key25": "2TaznUa2uUmqPijdQDKvdRkMyt5rm1JEr5oY1xMi2zQ8WzoqzDXGGBSgnvAHbjn3rcLo7vRX59Lepb4sa1KjWMps",
  "key26": "5wpeevcQWzaBjm7dxbCdRiiuFZ7xgF3E8pPCx7KXYQoshxCoNk2a7MDsqfPrWbwB9grPud3pR5SrfdeX8gDHjdz9",
  "key27": "VkfGnuQT1frLE8K4YePxetdDUpMokRKf9g4xDMQLaA4DSMHQLi5HE8NpYeujjBS1o6EdEdE2Di3pP91hgkvupDx",
  "key28": "4USnQ9TyqCEzgni3ZCAiwy8Ty14LGvi5zirVKk28qHjzPJdNa6bXGBVLEK79amjVtQbt1bckrUHV7TCQFEVDJ3DY",
  "key29": "3h5jqQ67CBh5fz5UiG4rUtohX1rnzgEGNsBz8ghaMPEwySjt9zvnearBXxkakSRhtzsyg8aSUcDYGLXqtkM5foiN",
  "key30": "2Ku3MakSzr2j3tbacBb24dpGKNbWqUzvphuUCQXUUxkQdt9GBkyzDR98CGqM65MbnAdmjmVc2EDTp9VVZcwqWVj3",
  "key31": "2RfHn5ow4e6DHf9T2Kpn7QUDsKJFLDEUNxKqmS2b1HsxztVTFFky7xCabrzJQBqKExg9nLm7MMY6xgs2Pyoubyju",
  "key32": "3rNmMRS9NQaQWAA9Vn1zrpEBKRYc9pdC4oaJ2t3jDCukg13iPWG5ogKyjCnygcDqQTVzyPVVsHiemoQP7AjjPT8E",
  "key33": "RTPdUfkHg9fEfuhNi87WJKy3omf7BJbZujX7atGoG3sTMddbT6uUfQuEvZMvVSymaP6LCqtEVnfEn8FFVsexWbh"
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
