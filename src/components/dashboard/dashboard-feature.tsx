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
    "4Fs1MjpoHhNgFn3kMwpFLtSt8LPrhZ1sHeZoREQzgqYG91KTPKbvcMHHvmLPqdggrJx4PhttgooK32qekZBWH11P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQoqxN62aDXd9PzLq6ZerZpkMUgDhC56XjtUNBSEJ9xdnYNsdTGxT9BtaDjgrKt5B71fL1mmkGi7t1oTArULC98",
  "key1": "25RGjPD4CAB6P26DdamrA2eU2wzXDtYqGRH6hGCish34Q1QMoc9xpMco25Gk5RVfKwrkdrZHjq5wzYMa4fUvpETs",
  "key2": "5Z5PJwEhQ2ggfm7vrqSd1RafBX84GTxs9X7XgGveaLeM1CTbAzp9D24oc7FYQWV8VDKSgwUVkg1XAtp6GwQ28tjm",
  "key3": "4K9y5Jbs6iEbRobiDVw7Dd7TzZCUvR1ZodreahtA6kq2uz75WHdVsuKKisYkHoBgDAffdoFjhtoAyD5BpM36VGku",
  "key4": "51xVYVJYfzqC5REE71kYy6GKvK4qgdhArARQLzxiYtaZMr5PibmLWBWHTf2Dip4ZuuQxpJtBboRaiwtGWW7PNamC",
  "key5": "2qs1JxosURJNBUYjZaxmxKFcGE51MSjuPuctxfgUP1quV6TkCLZrZKTxBfxEVn55aPoueNdb7uP9bQXptB7szYJG",
  "key6": "2zsJjwMyCZE1jX1jU7bbK4F3RcdL2xnRYvUtZZPdUseotmnVJJDxgw3m41V7AR4XqjxCjASEQ96FiZgY6fRcSdxG",
  "key7": "4tNs2xsrKB9D6zsUsemSYfpKVmTcduJcguV49mLjCcjDj7jdMYUD3CQhbmrXMBVCwZQd2jm2wwNFaTu2wApEHkHd",
  "key8": "5PabHjmFML9M5BEkAPdkYdrchssjXDL437Z2QZkdRQg8n9fn1jxi9atRiycpxWd5gkqiZ7Gis5DT6WsTLQFDpC9T",
  "key9": "31ZeuKabKUyHnTsBCKQwVeW5XXbJ78RiBu6x5gpci2AijSsDh2iAXfNAt9LGT4Fi5EfRb3CNTZ8sQFwetWdC8b86",
  "key10": "3G1DTUcfNt7hCcyyo1kEfuRikwetVVsqWhorjF8pWbynHwbxdexGoPgXmqkDqV1RiXy4Ls2J2wCYd1DvFWpq5XKS",
  "key11": "3M59DQ8ozbsVVGUMFSkyp4WcB9eGhGH3p6soneUyvJdjHBG4tH5ttTThuFPVf1ZW8VFfDJWSEg3wvK3BcPDDsrZY",
  "key12": "4cteeDbBekLkfbY7G9W1cEwarkXKVkGg156NYw8u7NRnPpkPNSNtRmZ5AoAF6CUirKZRe7nTkKbNCKWoxhS8fm7h",
  "key13": "2pcMwsV2265YthBUC7uR7vp8m4231KTLuFxBbiNGSFgF2dpXdy4Ha2wwaT7bhRsntbyAwBheMW3MyKZ2ABTHUWnL",
  "key14": "3io3wyCWmcnAp6ouUJdEqViLmw7kLC7rbW7WbZDGCZ4rJQa8JGhdJcSSLwLcpx2TzF5HdJYd1yM8yY7X3PfMDDdp",
  "key15": "3F5hs88huANyyPV1S1mQxKVmmiZF2Bhvig4rdb9QUEzqBVtmZ6JD3rYp2vE8c2DWtBmHa17YTzzkPfCyBQKkseXW",
  "key16": "HRTP6aMEb9oTXFTx6KKsZGXEowyo13BMR9LAWZrpHa24XpKd9DRZafr8yHz1XYTLFecN3Eq1pBqa2gths3zi8c4",
  "key17": "3LBDY1w8YisG7SnXFXEXWhoGDD8V3Lo5B9AuST5dSH3LGg3MDSTVrrNJLoM4HHhLo8teS8Ern71RcTdpvqNzpqcp",
  "key18": "4huU1hkw8gacL3begrX14WaxBnTf4q6EUgC3tqBaWK8tMB3zjYEKdMDbJmpikh4jKuxtMNppJXJ9rZJmsjhhc1Vk",
  "key19": "3X9Si92bUWQd8FHb18376mhcC7jDhKNFGn2Jn8gjyWNt7qRc1ukV7JkJiYyxkQgeL4JShA6z2u52LUyjNLfx7Ck2",
  "key20": "5ksEa3cZwXjheihyyoZfctvJduDr5iiTa8FjzVPmio3rKeTL4eCpPyixme3YwxrXQ5MwGW5jVCmHzoUR4DGhidAQ",
  "key21": "2JH8HdRWjmyQ3kQPnYWqqgBYgDAKASoQb1pnNBWJmxkgWQqMoH4g5kHCBvr5Chfd7xocHqZGPkTXQLkiebve6SEP",
  "key22": "5gyCYuoDy2TrQVqwFL9RSoUecHuNB5gBrFzBzZevGzB8EgjUmvfrkjLRLLoFzHMD1HsJk8pTR2qEmFhCMWAREgvn",
  "key23": "NHuVkmgXhxmUGUPY6WUYyiGb7W6hxbCf7NZ1tnJ37YHSbogoiFu2fu87hNPTSKHBKNmvi6E7RmLztkBG7P7W8Ki",
  "key24": "3XYX5yXMUBzVawKH89B6L4ZPNQAiKYn4MmiiS1CaFGYmofKzk2Q3vYBcggC3gc9BBK7uKdjuA6KxPzhuZkwuu7mf",
  "key25": "5CZ3yMRHZRsxSsdF7kzrujcnpJ8qa3z5mNKzZvfRUzzKSXL9oPa6GbE8hwoUXNXnzsZkKW1XGumcT6R4ysN5K2y3",
  "key26": "2QRJDirP2mwkv4nSG2mBcibmfaWytxAXoHVghph7yWMQV8hf1LTCRKggdQqZaJCFndo9UF3jARkoeCDHH18Damwd",
  "key27": "5ayaQjXaVw86Go7fxtRY5ASg8iMbzaQZQpibGkd1LLGzsMQnUiQuDCf7pbFQB6tpXTMJL7hGaYFomfYT1QY2DWD4",
  "key28": "4rXcahFRfTxQmoWKp6e4BxnDLmwWGfZ5hrjM2UHy9KT31zLy8SkGCULodoSJzZWddsWfaGGB2JmCRHDFgYnuUU9L",
  "key29": "3mmdvBYXZjpsd8ctoKV1c733NgmXg4nEpXv1gKFoPv2b6vTFMnunykpe63PHTVvPPdifrAcSnRmeNwGc4YDrzwFP",
  "key30": "iDTg7ZeBRr7JX2iaDXB6t4uefxCBH4Xaq5LNLaZbDd8SEPZPVjQ5N3kveyvq1wuqafQAsuUjRi1xf4MKk5zLamy",
  "key31": "3yKBoYbiJFdnX1Sds8jg4jH7Ee7HJeDTDa2mZK56zMC4CBeeVEoyUYkxDwZcyZVUo4Xs7uAFuGogiTfru5Yfmoax",
  "key32": "2VKg15jKyMYeXRvLJzU48qmXVBjDrs7fzHkZELixBVhmEtQzukQqNgH56q3rY6xEMCHK9md8zxDan1Asc9iyeZno",
  "key33": "8VaJu8sWQMGQg8gpQtLFeFqyi35aZsBASNM6kW3b7Y1jht2gpnnmixBpfaJsCHLoCTYtKUgXSwxDxW3X4mCLTcn",
  "key34": "5nMbo6MAfxwS2vVSzzR7BiZDg2jPSoBAYB5DaqkuSXfCjpSu1sj7pNrMGZKj8Z9oWLq1QmbUZ97RHxdELwX8yZA5",
  "key35": "CLMePQFSNddusGgEjNSiSYepoxwv75zd9Satd5HkU8QVKmeKtKNga3xwwsANXS8Fpp9tBPuzHg1zManjn8gJBnz"
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
