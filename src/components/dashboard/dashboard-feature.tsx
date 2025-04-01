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
    "2Sm7yLt4WqZ2PeZwDEPHSWu6eAybv742pE1ZFE7ej3FnwZcXZTjpBb6KNjJHTJGPWtVdL9EXuwd49Jz1Akj2vSxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Epv3ScNHHyV3hSF1nSNgTdevUpbAjGk7KENEbLAMEY6qLahUxrsHVWYGcre6THas9faYe4oSN8CFZpTH82FVLHc",
  "key1": "5dyeKkXRECvrYViJcPU9ZAPwru5y4nY4q9Bm1pxfL5tNbzDxzjDu3PRk16GVTdVcLqmvZwkRuRaxkjts1HBnNq4n",
  "key2": "3qhkwPzzrkekS56o8PGs6VdCSkZr7i42rXyasJeGUzZGrcyVgshyBNgWLtonRMy7oWwCZp8bh3BWY7bNUQXdFAhg",
  "key3": "2jACRNyNkH98BCVnkGKmKu7KSJ6BwkAtM9xYx9oeupj6upA16Gc69P8BBQJZntDm9knZE1DP6k15pjxG7D4igJMS",
  "key4": "3R3DqNCmFc99b7nkHLFVA8GxAy3oXQAuT1QR9JoVpCPyKAxCzfHUjjvqULQDcUwJUN9xecidfG8vsaCYGsXzKqe9",
  "key5": "2qRcxwUgDQNN5MgSEfScjZfbqfrRVaAoX3qV7pS5Co3qRNmt1EtFQswo9dFnfaeVt7efUqThAMb5UyqCvjbHdfGb",
  "key6": "5MNfUviDGwBw9NsZi12jkUqZLEKqdwsAqtuLFjoXjtuptpgubGTP1v9cLFdMkW5BTbSbz3sLHJP8cPuS3qz7m2EH",
  "key7": "33CpEc9WuqkRHmNxnfioyjb3fyyW1BD6UHyxuHbRZNV5unBA8dyXiSMpbdKAY1vZb2C3NVNF4NQAU2sEYTmtHgqk",
  "key8": "3FuwtkWbouYnixJc5XkvLccorhDgXVS7hpQ4djLvbF8STVcYcfNA4p3dLrVv9vCu4aqkgEVoqRKhEwZZTgXismsL",
  "key9": "5SLkw9GMVu3UEEUHNaTXohVC22URhRcMMjvkY7u859UXyxRK9R9Frit1M9drX9ASw2FMC7fesB548Le7ng5oGpo8",
  "key10": "31FS9RixbuDJfSFEfqGK2eAc5kAaLYJJJDZPjL4Wq5pDHD2vBh3WPPduoj9VvogpYKoNBQ4xMr71PrL8DiZJNnf",
  "key11": "62EZsLtFRPxYcs2gAyxceMvuRBcb2tX1PaoNrtk5FZfzE5sx3sWeGdcj1mKiRXGBDeP9wgNN4JsjmY6hrJYLLSW8",
  "key12": "4JRBow2UyYrP5QCNWMQcf64ZVNnHbVXeLC4ttZNiBYsHm7o19BqEyGryrzRKTzLdZZe8JXFn9fcLRPVcsoCdtnU6",
  "key13": "BLHkmDQar9ppZppArj3eahjx4ew14UdoUNjv945SHPU7umKNmYa4gKAy1kKscXZwtjwyGNxuRkryaMBYeFMAVuQ",
  "key14": "3bF1R4mAwmNpdY8hcbKj8VmdnChH5No7CqY8pYkUigLQNfqxmRUDn71R5CUKBCmwy7ZQPiHagg1mEMjvH18Rz43L",
  "key15": "2D9a9novWRwnVrvRmEsGySySVYSzc2sskfjXpCAsZ3gYm9gQ3WL6SSiWtq3TXks1WEkEXfqw1SpZzu8GvBeZcVdD",
  "key16": "e88We5iUtZA8rP2CLA61eRUXbquesSRs1WkpdfpTxu1PruxsTBLfSHmQjPPRUGSFyrNJJaJ63bXQ1KY2sZ6wYZG",
  "key17": "42saczxn5wMZb5k93LgD75sdsGQpTLpcVyPQmSeEUVZYdZu8xJfBkSFpbPkmHJCHxpu6unq2pyjAzb7XcnkPrGUv",
  "key18": "3AqBdBQvo4bgc3cEx9FbaaGcCW4BXFaF2dmXbuNewsDAcEqEEsZnBZt16t914Ap9RwZt3i5p81RC9zyh7QTmhZ5d",
  "key19": "3e1HfVyEzjDzbSHb18Mpu9QX8fcCJKZ5rAgg28Y3LqqPspW6W77qdrUTQXxbMdAnLQo59yCJCVkH54EzSJs8Cd1W",
  "key20": "2kpRRQxtuEMxQDFoJZmCrc2G5LozdsuXthVsrRtNhUAExrF8ZdeDgmWQgTvn2vKXLVjUzkNj9eRUfDu2EQcw3cw5",
  "key21": "5zsMuDqV2CEnDuNLbZE1s6J8e9FxkS1qnWDjxmxq1nGjQ3w31c9emQkLvaiGKZ9Ncp2HUzkDaUVLaJ9a2fnNPnNm",
  "key22": "5KF8UqRKvwDu8Cmi1TpK8K8Uwj6TgPf8AehWpnZbBJqgzZ53KxRiN6Zkgb59kagbyJUFyMxGZGVRidk7qbu1Eypz",
  "key23": "49G2yq43SXyXf25H4VVvj1YnegXSG3ETZDXMvw37pf5HVaCKu3F2AYAV43rBibwcBKDrfEersqE3x3iixzC1PkAf",
  "key24": "8vhCmPQQLb25YyGBouteBMLSKWTERtSY5TrsUHHCF3ZrQtqTGihAwoUXcJc4NjxTHR2Y6cRqZvqSiaHKKA4oXED",
  "key25": "HjnRKDQsXAKXKBhhNCPvtgCv3RMpT2qbYZWDCy5RLuoS9PipCjMYpFp1xmd3v55qEJwyLxr5NYTqKEfAEZwpgDW",
  "key26": "f7CnEmsLL2pQ4EMxeVtfx4uGpScsSc21vDAfJhe5RERXUskgzh3JYCvL2iFe71pxmkiooRVtbHVCJZveUQVTHfW",
  "key27": "3EmdkiZKUMKWf3uSFoq1PGshk41dUZn29J4ihHHuzT9eyr4UzDfgWob3LgfG139zxPUmrDCd7TybpQ2pz4rBDjZP",
  "key28": "dueHfv9A2mhxAURZkUmB7m1ZbbRyCo1svGZzjg1WbrTYZ54FDix449G4FsuWoHsh4awnADruarTBMwvyiNRM2w8"
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
