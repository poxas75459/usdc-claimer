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
    "2nYtDpMfgZhNHL1bhgE4JjFeHvdBmAuK12esfaXph3johJUtC8RBxaqUoewh9HoYmSWZtSzihVB63X1qtJvigvsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ARaNs6Fu8j3uomx7ogqZ58f79h68hyczzSEscvPk4UGZg7Sx8UzLmK6axRsUorGoP3ycDmPs86DDU1ZuRacnHWn",
  "key1": "29c8bSxFoh6pURabtcxKVbu3pvdQqae21TfdsyHdfSd6TLGXNzPhPqzzbo9tk8BuhYEKgYCPTJTQd7dbsMAfsg9s",
  "key2": "QwNnjyFXHL91tS4xNAJPNYWsejrH2LwxgP5fit6iX5N1iy5894vK2ZwJZc1GapULhk4mgfJDSKaZwy7vVm2eYXu",
  "key3": "F9DUt4QC5AsAkDJndufJvU8jZqwXwi5YJSVrsuDHRn9YTUXuNeJYmLyApoQce39ZpEwYeakrXLgrYtmyvG9r5SC",
  "key4": "5djzu91hi8Na5CboSvjQb9grEPsaJv9tHNbMnn5GyLWvpJkf1EhY8ZEins3rNu5rDEdUyFqEjT7DJeHJ2xmPAMVC",
  "key5": "4ja9YDkmjvUfdRsqY6m52FQByjbsx6Ts4eK8DrTrC83wDBCfjNxyPwVRpeczRJWZXnEm9HNwP1ky3idbafmxSwBq",
  "key6": "4w6eWacDMR2KLquohqzAQ7YkwEuRdS7bTnKhsFCaUm4WCYM7vR9CTvBhXxTxc84WQzf6bDDioEys6zyQo9gWHSDb",
  "key7": "z9VZjyKpzfcCna2yHPdAqjgtkREqDerBTnV4pkqvdR9qgdLTsDufYgaSLtn7fBJGHCMRwFYc7THCQ9ASNZ58wY4",
  "key8": "4646ccre4HyXbt337hud79Wnwaujx6JASDkqarY59GqsTWTRSDGBvNP9c7hdZxpMHmwwGRnDZa4VfwNnKLJXYHvq",
  "key9": "EtdywENP7SiHn8knqWkcWPCvBxsAFwKafoWqBB1eHMDXHJZKcS26wsk9jTomWmgvmNn6w7Z3gccdebwpfGjJxEF",
  "key10": "5Dd4rTgtLgpqQJ75bUMdDbdwcWTm1hkmexCm4zHsGgFzH8HUKtrGYefhCfbVqWMezteGqJAm5YFsd7favgNgsipq",
  "key11": "3XF8aVhC4et8Ed45stz98MsiU7KpZkrsJXQeL3zj1VZGH4uhcdFu2WjwWwmMw6HR4nDcAB144Pv61vfwvPWCKqzS",
  "key12": "5mVVsHhiw83d46MR26sAn9YQoyK1kEZpsQoFiZK243ecJyMtZ9BnWUhSbJoxpRkdap2h7LMJ948QJinjxrZ462ez",
  "key13": "4JGjtHe7rgf68CEXdXy2xzt1bgv9FGi5WWtAxppz8CcmKkoKzMAzwueUF1fwkYgraDvEmkUomC5cZir7S499nFUF",
  "key14": "jbCt1VPUnAooDa2KKRKVu3sZk7YEYShddnXFHjTDeHQjM6x7dZN8a2Ho2qMvEjpE7zz7gNt4DFrc17MBJY56cCP",
  "key15": "4qoJ7ycqUjMmUKfFdCTWgmZmWQnbovwrtMCmnA24XNRsgJRadaVq9exJ9pRaMANi2RfFzLFKtFfGU1YAQGe6JTR6",
  "key16": "3UsebU4ZytY5BfsqYLRESX3JN3jsPWmcjmq7ehicAxfaTCuSGcRxGz3UZgJGh6tXm7mNVzst2or35yCpb5MqpQYk",
  "key17": "4k1JZijQUKtosS6ipxuvGf3uRMu4bs8hQEZDe5HLmJ7WQquvowUAJpUGVRRf1HK5ZH6k3V3iYZiqJJXkRnX6Bb7z",
  "key18": "4JwyQwPKbeEuxBMZsUdjYLL7cBqaqFtEJcfEPAv2YoMEd53NL1KvbJSCyeaZbtHhJh7mTZNouE7ptt7k1uWVcCQY",
  "key19": "3d7gfrf2xGpbiJ6H2dCi1EXjunWm1fSf1xbLmYmemGYg8qfUjrkT6f8m1xd1uRwnuN2dbNSRh74k2dFKky3rmhWk",
  "key20": "2EDcGnhxSiBM9JdVjiuEFk9uhpsJRkn2Xnh1svQdpC6mTGBvGWh7RNzBz31UyQEmzn4Qse1gfRhFndjjsNgaaRgv",
  "key21": "5UnAZDokZex9jWdg9XChAjaQryTHdzembYMtV57CGQvbww9SBJhLZ7SkQNMjNU6ypvgRRfUrHfJbmeaosqwVrWLA",
  "key22": "4CqzbZsN8xJrvmu2vX2CUtJTRdgAixD5yJV4LgjSvLauVekz8gutTKjDx6odL11M2gHsF5vCCz1rdtnMusDwWH6G",
  "key23": "Bqe5BsR2qZfJ1pN45MvEi89TuCCcjP2d9hD6zciBjy6vGp96xtsKr9Bf7F8zPPn3o9XWjYyWJLdcdTbC9AYMQgs",
  "key24": "59PwgmtbMSUCr4eqtfS7b9eubTqSjC5pnTm5RFSePaPpBVTf4yCWHDisa6g33zjhwj7WdzQrvHUh1iSYE4GxLDKa",
  "key25": "2sWXGbw3hvqawDX9zpfZD5YSV6A6RDrwX1VnbfRYg5jVN4JHcE4ttAm7L6yyWnHGZheSVMY8SX8WTjPuFmqTNrTW",
  "key26": "5DTG5P5stMNrWnw6es4QhRqz5Qnsq5tEiUTKVKW3Na5hHe2CVD25a7hPrjipufnEjWhCv23mNq9BwbSmdPU53jVA",
  "key27": "4L3moUtbJMKXJ2unnVDmht5Z8ooMqkB1SZuFsSeAqAUw1NxGY7JaNB6fmaCSNsBkJYkLSJ1deE1cBBHSqcUkuzMU",
  "key28": "5UzhDvFSW8MAajVWfHm7J4rSkh9C39dkbvymavNBqLTbpwV9WjGGduAVVQ4mCbFE2jh6mytesUYJXqEQeTJYj38Y"
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
