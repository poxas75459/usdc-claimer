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
    "4qtr3Y2YBT773EEswVFmTbuGkKbmMvbLmVN4tR2ojKzZdwiujrzEFxNcjabYD7pAr1BenasMYwuYr5akPT68cThm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCrraLLyKGWrrrJyW8jpWxijKGuCki5sVSUHCuMEWGGNg2fZQehhK73wbWtC7gW9bD2beBLsvXStxAVexkaGMN5",
  "key1": "3Bzv8fnkwUwswWENxoT3HycGtRxdTa7hsfy7MDCkzn3J5djJfyPEL3dAJ9HknBVMu1JBrauBKaqfBHmfa9CsfNy9",
  "key2": "5mz4yHieuMqKoBC6mJ4bwaCwZJXbfeDpPudY22y8LwhAxH3PiduJL3ow3d6pHyzyjvnykqKoExCswdovbAGxrzY6",
  "key3": "59VWyTirrFLDaQpJPwvLFGkUwxwaehDvnAamTFWGCGV9EFxSxsgqjjoDhw7jKWVGVbpUGuFfVgGttgfTRgMjAMdB",
  "key4": "vw32vWTbBb1sfohRmmPC8fsezmD7hpXC5H8jNUodckLrmpxfrw7EPijQo8MGQE8tDqn4RcRrWvh5r1EpYQ2dnPs",
  "key5": "29Rhio67bnTacJmyMVNtw82eDg2gdGWhpEatW3ZFj2TFR8kj1g8Dkvj1tybNJw2jsK7ikTxTQweRwDnrp4BDXCWJ",
  "key6": "36hrQpzqDdavuPrdFg9aKPhwHaa7dYQRSw1H9HkK1SrRFLpfTLeakpxjUfgnt8Mza5MvRmdfFCWL7dvCnniioSSa",
  "key7": "2RxkpnQZLsta9tMrw4g7N7YVpjwBHUDxEhQaKzC8jFCckj5M5py5yBXyoHptSoufnqPJfxEeNcF1YQ5WTnY4QF8s",
  "key8": "5VmVwirnJMXmxiWV6LFTkNcPwUUt4ZjposwyKsqaUgsJRosrWoKkeQ6X2SwEdu3MsZnCawNEpLZdjUQfS1mx7wXP",
  "key9": "29d7r5baD82casHK1a8bfArsf8WtkJvTmX41hTKL9NEUiMEcxJSadhwrTAqvXnDvh33NCPNJkdqxQjS5qWDoNZyw",
  "key10": "VhTJ1JcdkmxjvyH5XRc8RVeqzbDS7JwPygH17kdoAaJ8cnDCkzHkh13DtX3QK9DJcse8Zd6ejrcKse5wt8wSUqW",
  "key11": "3byGE27QDvjBR1FeuV7DLr36K2cAPAj8VZ7ZoyTFG9Z7u8mSP3nW8iTtDo9vogrSTGFZahjEQRQVatEJTioVxVw5",
  "key12": "2Rz8WvAWWA7F56SoXpVWvDaU5MrCqCu4TxTdSCYQPvy9pLb9aEvVgaHUG7VCN8R1JfwJ2HMoZx9CqmHHu7Q1RnA2",
  "key13": "4thUjw6NxsgVMZHDRrVFzkZGSp9wb4kgtYnGPgq8REMNo1HGjWmKsv77tqktkq3DxF7s7SYMYUmQF5zid4M9wtei",
  "key14": "5VirufCreGNSWZPw35cWx8GsJcqteqpWy3SZtjY3SXhy1oNza4w4YRkFynJbvDpyLeWGvfjTymdumAy2e8DYZBsG",
  "key15": "3cC1B3m2494bkxYbXLENFjFvFa2jrZrs39sFpz1roRp7sd4NWc9Cdsenw6NbD6eWVkdzvmRwZMN3pHyj2DpRwPWK",
  "key16": "4YjhQcyi4aAtudii4Zn8rZFsbUrwGSpRXkQRAatyemNXJzza4Suffr2vzZUiveTzp9qQjW1yJTXvM5zsCkXuv2QP",
  "key17": "2oigbHSwsxeP91FzTWKxM7Fgu3vM1Cff47pg3fPvptjvDDj8CxZvmRWnMJG2nyd3ibYjyd4bzYfstvUxctNcXPnW",
  "key18": "4G9NgspBkRFmmst6KTyyE1MyxcU6nrLuhE2QcQRkMvXYht9eFHj7prxNwJzgPc9aS6WhZDNzGfk819m2MhPLLu1V",
  "key19": "3ui5hxW6KdtU93BNgJfeJmZpagg8kPVSs9Ef4E65acwVbiaTEjruJVWttxYDrCsNyj1TGaNcfBFkWsybBKLyCXeF",
  "key20": "2gmbS6ueLF7NyHGTp5MeT1rtCiH5wbrPpTjqRjjrhuXvTr6tJBrNMEPotTUqxUBX8YisHpThyEZQx7C5yBTDfHP5",
  "key21": "oQHmWuCUAm1onj8n8LtSexfSgQ1w4HA5My3nKBCFAMH3HzDWikpJSeSzVgJv47pRL9URnoJyci365JVya65q63L",
  "key22": "2Lot4xVLzmnZVAdUWd1sgTSdTmmdYsdt4BiKBeuYGV1thSypZd4fmGEtEMfRnm9nt11iYKghJc3SHCZvpLn5ka8A",
  "key23": "5bcL9E98WffKRi4mAKYUgbrFy75b6sCTG76YDqazCrbzxzHjK65GRgUKHJS1yx5SzTTHTDbCXon6a9FRAUNFXyii",
  "key24": "3SCa3vGCLy6Rmigx5s4vgwoiMkFMRpeka91g5VwTaCmkaj7AYDQz4QQYBKHUeD3mNLkNdv1YpJ96znnAx5MVanno",
  "key25": "5YwKcy7ERY3EuZqvytQHdjYSygwcZyMr7bQjwjkw6JiQKZ3GJrHVGKzhhX9q2Yp3Uw3LtF2JvuUVkzsaXcXnDMQy",
  "key26": "3DzuUbitpTsxfG6MHQ4MT3491NGbNmGr21yDGtBsWvdddQJBu7gvk7irXBvL8X5p4N9kcz3Aw5GHMVoNeSHjYgb",
  "key27": "5wDwuJ5nRy4NuPKN3KrTqdfaR9KZFrLUJ2dgWJzbpd4YQorSogGhBbmdjA6f5GbMXFWTmYqxipyswbZDk37Am9Cs",
  "key28": "3ngrmpvSkT21bkEEkvGHN27jWxkHPxCTn3fX36LoRLZ65fA4tyj62ampzSbsUBc3MkWn2m1ikgjg4NEZykwmXz4Z",
  "key29": "5CBPhfYBNc439T6GTx2Bba6fQjo3TZj6wX5AMDFBqykFhXfRPuwn1TGcf4MY9xk8SSzVP4SRw41NzJuhkJ3JVhvh",
  "key30": "2aFrbD5pqPQ8Zv1CTFCVxmrVbW3MBMLPxuNqmj9YaZpsUJLHoMhQyvCzw7WMNYRJ8nkY3tSKAfgxL8aLgSwfyHCz",
  "key31": "3C77jW4usNSWfcdxvV6ptuxoeAVFwW6C6yU5zUQ5sxtcoppNwLZWHabfAk4G9xuGFpAw5ExFL1LW16pU3LYLVhPe",
  "key32": "5HQ78dNwsxqtLVN5cVU8aiX4aDmrxseh3bYJx7NzihNHyq6heRDaeV14JUrBcKrHrtmntfGeDDuGyAB3fedtpBms",
  "key33": "2UCPwH3EnQ4uqAfnwqarZ9en2TUxTj6r8Smq9scrgnfix71xpetmzeTy1fcs9AobE2kY1nVRU14fPpoQy1dEXiwP",
  "key34": "3jU9Nscc3nZva7Uno9RiogsFTpdVSiXMJaGgS9dZTSpM3Y6c5NyYt48hHaf86fPih85MZrZAk9XxJy7odfeCWk19"
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
