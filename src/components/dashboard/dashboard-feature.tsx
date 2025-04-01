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
    "fbxycSR38LvTvz5Zq9tbjVEptJ6eASb38tAFu7NV9DzMTRZ2XvBrb7zmf4mH818ajKgAZJgTz49h3szFaThVCpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nd6jbNBEUhZEsUGkr9RSRyFdZJ39A8BgQJ9XH4utWDt5dUZLD5aAvE4ndaZCS4Gzp1R2GBZEndYU7SVrzvLRxjs",
  "key1": "4uyTjuxfWogSMdds5oW9DkkGDndNhKmw2giqhBRmrNVtFSXvv4oSvCNSbpAMPmEviQUeoT49q8UgxAWcr4fV6DNs",
  "key2": "2LB8BKHuZ2KUhguP5DK1cJaxBPFrvbZrP5LFAVN3guHDH1Wg8ekTeu9Hf5ERZPii9ZQHGMwy38vrfUYq1eM4itZ1",
  "key3": "5S57sPdp5hNyZd6u1Zt14zBvN1Q6eevSdX64YUABSFGescp42tWR6V75BSqoY4e9dGoMPWtoyrgkoyNCoTCcG12T",
  "key4": "3wx7PxJUByxrdpirrYqn4LMKFWDB5qUWaHEpiawKqujiZ9NtgqadcBoR4asH1AZMAufgHotegMFq6Wx9VZkYmPBP",
  "key5": "5beWXZ6a72TMvDuggneMHyyox84YYGrvEM9GaTzr22CdacNMcG9yryJ7ZTwXiaq7WNasjnrK5XQoXhQpVhfnAeuB",
  "key6": "2HbRWZASxNJTs91kURGJwoyjveKk8rmrqCzgka9LsBA4AfBU4RbJkiVAUU4msL4y5eE19xh2vhr55Azd6ipo4JJJ",
  "key7": "49G8UxpQRgh28UFZCTCqhao7LSu5xRNjRx2aZqHb3Cce73K3PoknE2SPTPugGJqSEjevZPwERvwWtY5ZNFmyCk5p",
  "key8": "4wDESjd6Ybfx4qKj9z8Xq4FEL4gnuhrkTrG9Xmnao4p4UYgbhrtrzR7scembT4HmTma6WUKaNbsMo9Tsh1jxkRzj",
  "key9": "M1XajGBKkEPh8vEq165wz5bfHKBmRK6a8ACrBbB3hn7zRvCcasqyEv3gzG4WFHvb8BrPZCAqZX3M5d2wzCaxg6E",
  "key10": "9PpwYkGfAPSyyg9wBhth1g1Ky5BJiG6qdkxZ4jtGyKTKyXsdNy29z2CMRA1zffustrna2nrAmAvA4EgYe6ekcFf",
  "key11": "5dkANGUAc6J8yHbE2aZF3Cmc6sprtnMBDhibdEXwB5FH3ULCiZ9FgFSgK6PAoiV5KfMf6jcs3sUn2nAuX5X1roXH",
  "key12": "2syVC8J6gKKxcMC8fLvhYFsWAN2Xjzowmcob1KSHuebiwSaWCj5LuN3PYzhKSob4EyP5XACM9fiG4YWMihLgjnGJ",
  "key13": "3J1XtKeJYAnM7oB4FKpbRztSufLiCC4JNiSnqjh19sxsRHm3kcAtNVMbxL8WNBFBGCgYW2hNpFGkwtaKipMNGrET",
  "key14": "2DrGHPZC77U2EUWAzWHaaipu8X8n9m6BbykopVPa3BLcHiniMxot4p4oQxa9EUVa6wMNYCjTLKyxWsC3rybNbcgP",
  "key15": "qVoqUjU4YpGjJLyPDW3WYYksB7i5YXWXzAWRZVmRHp5hAMSHKAjerWQhxnmx9NDL9B6bghaeUcowDGYuG8GsXvg",
  "key16": "2hNgbSPJWtRNM822gUeZ6nctLUTgGVLJZtVkszrzG7BovJ9hAyxfvovy9G7vHu6fup2w86gfZDH8tEECbHcp71JC",
  "key17": "3MnxzC2SyFgmEXFaQfpbtcZFjUP64TAG13Kqg7fG4VCHv6B6RXfzoSvY5MDfALj8oHrB31iHGX7LnN4yHDbuc3Sb",
  "key18": "2PENQYZtcEmi72anXyvafpkgbN8qzdckH31ngLgTvMeLyQsXtfSmwdr8rZYsc8YvhMNATHknNGjnySR8HftojTZf",
  "key19": "2pq6TyRAgt9sPwKiZxdSu8KeYePXvcuUfCUuKWQSx6ppAG6hpSMVuQtgB45VaQfHfenanrSrVKbDVW4VpumdsF1r",
  "key20": "bKQptBgy2DRazmrSLVSEfLQNA8muZNS5SEPpUSJMTZm3NNLzkEWwcbgWdCfqaaYVDRRYBntYup92RfYAf1xjeQe",
  "key21": "M6PoWCcMfyJybE8JiQ9EYJAJuiqXjhRmJmRWkRTkTrFTVYX9s3NfbwbaSSErr8qNg2AnQww7JuH2fTSFjfouBrq",
  "key22": "2xsiccTxrY4Copck2W5kf5drVLLwnneFRS6P9PZmCJQabA1DZe9X1a5RNnfdFQYtLHfjJ53VNyR99BXWB22maiSr",
  "key23": "V9PxBxukPfBAGwZHBGGyTs13Ye7zNge3g6KVHL77tLs5AKDve3i2r1CDnwyYZADT873Ud7Vv97T45PHEQz53zRg",
  "key24": "2ivF57eQFSbt3KjwT5tXnU7DKZ5bAxh9mtkTHgpZjnesvcf5ew7fdQdxyeGyzSXsmfajujauMHAgZPKyzraieBrA",
  "key25": "8Su7uuWXkvez3pQETRYLVb4pRGfQLqG6oYFJHkBQDFfiUPYzfmbAjVpU4uDqjiioiJmv69JrxFmGRWEXmULFdxT",
  "key26": "2SG61E64jZmuCppdJRJVfbzKVVAc4kPVHeoWGMHwemuQLaa7wdCiLhMPRXPh4eBPaZiHbk1iyVSmtHytDTpuymcw",
  "key27": "4KWoeoZ4UNGvZ8xCLAqq2GK21zZPKXpSHxSCMDMZajuw2C9vwryMzt1q27w4LBcWuKxupMJ8XR4QVuCu4EGpExoV",
  "key28": "3ZNpnFqdNJBEe3RgrUPofg7VSic2XJz18iQxyzL1YXhduy7YcfkQVZRxZMtS2JJACPK2PgLJkiuYgSKtaXKdeHZp",
  "key29": "3jTwv66pPFnmdmzfdi4adBoPND77s8oRb4CdK8QuWLPU6FcK679bcHet96X6GJnMrDL4EJGKuZULj6JQxv8g3dy2",
  "key30": "3bJFV59t2sgD5TBhWPPTPPvn3twb6qV1mL7JutexgKU7vAvcXwK56bgJJntWQNQvGpWYxJDHvWFNgCwKrvueNuaX",
  "key31": "41njRNr6vEG3YHBcftdRq1MMtyTEg8Rz7eBu2qAJaVLapvkSTtGDYCLbZoUUiH3XQkbUJPYPVeEL9A3ykyTA9xnW",
  "key32": "K5iDiaxXc9tAHoAuz43BtRFWg6jrBcPVjuubyeowFXHCTDoUkx57nbuTrtiQfTvYGBJbmYtwTeU3vmgtkbZU88k"
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
