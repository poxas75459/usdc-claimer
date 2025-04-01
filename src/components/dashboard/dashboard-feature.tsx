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
    "37xAgW1SHpXmwiJUfs7gipQrPKpNkGQhUiQ1zTZhwRum4B7wfmhaAeZ6f5kxmeEBz5AP5MAdLK4dgPfoS56RoYwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwF2TPdKBZFM4GewaXrgqAA9BcjX1oaqPjiqLJNC4jGerQ81FeMw9YgbxBVfkeDxcXN7jwiqnZE6Xe6iRkZri3u",
  "key1": "4zzRbgjTmjeYcAKCD6ebsi3o1oBSL8Q1xXt9EydXveRF2aJrETXz6e8TKfGkQ3MdzZpiLWkVKc6nZzQcPpebEALE",
  "key2": "2GDhh3bDvUi1aQkCTnRM9HRmmxmC835gPU1sX3pQBLzXaeKGW2tQ6jx786ddr7iykMgmR7cHmA9jpRnGajZXWaFN",
  "key3": "3VWcp8A2nqeZzDJbkbSXN6Q3dekz5VxUWZ2FVKQfzDB2ae6LovNJ2N2WZW55iyqesNvoiTWYR4qAYWuar6JrT7j6",
  "key4": "5GL3WyLm1MRhpwfBGBKHt7P3eBYXWMVyfAMHtUb2yGYW3JYw9onYbeU2eXq4MoPmqhsQrqZUjZN7h3ADZNcTdfxd",
  "key5": "2sE2HHr8Fo2uJgZ22Vef6jVqbnfRykb4bKZSgpYWh8Tpcq8eNpFEYaowb81Bij9FcV8p65tPLdbU9qHfpYymXias",
  "key6": "WURvXtDgqSsF12uEiMZ6hiQFC3ZuwNbWDU7A6vbdrL2vzzffxuaaAMZo6PXroJwUAapVifCNYuoS2YAap5t9vhj",
  "key7": "ecExMvWzJ468zosRNYTcHrweh36A5i1wuZHcUPedAoXXekfWCBAkwPfsZn79dkKajdhvuBEn6wrTpfqJ1tmYTBT",
  "key8": "4mjrG81z9ecXLJcWjnrCbRjWYEqEyz4z2XWPSrQE4MNieWZPdoAxEKAcy5kBGsPg27jQqDBsfxgVojPuimtDDrSd",
  "key9": "5hh7RnSpTDMieCqjkkoTe2d4CxFT8HHTzwRMW9TatVd9Kg2d3GoXJ67CcNs372drSuk9tcgPGcXDYugtffnvf81J",
  "key10": "4RgMR98DFyD2PdLcN3KYHkHWocqBUmk2nu4MRa9Loj95S5vVAKFmJ5L6EE91T7BMHqFgMfaAQGQA29icpGx3G635",
  "key11": "2X7rvhrfkDButz8gfww6Wvqk2qbAbTUsJiKieBQHvEktZUNLFtQaqwRCywdFHkVGo4e7xguDZRP9fbUu47UaxViC",
  "key12": "5qZ8jzGNFW1wvdJdow8QPri6L4ACZWYPkwXyrkx7MM6EbgTyq1fwGUxp2KBqdBvphEyxbAjrXkH2hUDhNbk6rTSx",
  "key13": "5VvjsyoZvT6c9WMHkwXE96Vi3vqndNV4Tc8VqAcAhDEYEEGpoE2oht2dZATGErVCFeMQHn7mLRMpv5qDnhy1p454",
  "key14": "4iwNqamTmFeAvaFAoECpRxcMQ4zbVrkAEfsNHGdsnWdfYTtVCikPsCjHjVtwQ8EQ53kkWUKC2ovAA2gZ6LvRWJJH",
  "key15": "5zVg5rmX9zDk1Dg2LCq1PHKy48UktcHCLz5qYQa755MhFZKkF6SZhn4FR56238zq2kXErh9MZ4sqxuFCs9ynHuoQ",
  "key16": "2mZPb2WA3QSKmuyt8H7BeVMfzpMAfEJwZbXYvwvfueto4GLqoKjcxW9UDYkbA6fYfXJ4XQQAJby4hZ4NQapEM6BH",
  "key17": "32EJEE3PbtfoDFuqBkuDM2sGEiVdQPYHpJjKJ9KbpmwMLZkgF3cPSR1VAbhJaH9p3sZFVwyBjYKhMbUxQosaqk9m",
  "key18": "3XDj9eSeQzgWNyKYZEhNoFiSqY2YHjiTxMSQH6PfdacTYo7ZqSeaBqJwuhsvvmZCJse9BGfTdoTph6rct2VzZS8k",
  "key19": "21qyLHyQjD9HsgtSsEsytYsjVkASWByZxbP6FWnwhKYS7mbY9nK7c93ZpqarzmYi4e8j6XmvDJCrvWnDoNUYhr2Q",
  "key20": "9PFTKMULsSm4UkFEiThWGcTr4iq4meiujmWBxhGUjLWLKnRRuEjP9zXc22JR4tSxf5jzvzscHCm6nCJT2ksiMKK",
  "key21": "5nAsM9iyNQnhuiBh2bNhBth1TsaHHt9Zcw8ZtkJjZrMaSRoBWXruJ3gCB3zw64d5PdWcjF1J4aafC4yCFA8TttZh",
  "key22": "4YnVJ9u6EYfz9skjd3rEAZo8tozKnak5iA4VDpXTnNkSBQT47koJc4SMzLZjyX6w9v8mrPpQ3Zz6yD2YC3dvK49h",
  "key23": "5y3La84FurWP5WuCiXfiJ5qXADnE7forWX8BgYJRiihXzEg4xtWM7JQo7h5zoSVweADKAtfstrxW9hdhZRemh2Ky",
  "key24": "4hM36hhrfYFJMbpEjXeAXsiETxqReNzUyPajFdzxhvWEA8zPYxdtK553RXXkfY9w6DMj9yUj9jLTcnRkWqiPCpMK",
  "key25": "5FWw7N4JZVbKJeqy6vA4r8XxpVVG43uuBaSdJKGFkFvx2V2zG66PBTNVihNfA1NZQru23X48fRqLxtud1CLgUfgm",
  "key26": "32TWCicJyQLQwVuytk5T3Fp9BAxWRbKVvyPSF8FgktZAH7dNKoYzt3kL9fadi8uEaFNHmBy78gbzuC5op2QV3Prs",
  "key27": "AJRTpf3MLtmX4VJMD4TLteXhFLcdYZjvaZBfgkKq85HejhvuzePaha5JY6R74vsihXt8YdQz9kom4d7AFXi5j3M"
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
