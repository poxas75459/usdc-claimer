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
    "4MPpEM72ho5xrQEkN9QfaBqUyDpEzhxKBzvaJMqVyRCcoGsGBH8zg3MNAB14nH3f7XPLRcutSSU84qx43nk72RPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvPTsUHsUWdHi1oQWK5GLMQVuvtAk1W62SztjmRFqYcGqMsPRnxL8oMppCVY43WRBeZGLeoCCFi1j287tGsy7W4",
  "key1": "4DDbDJKGvwqpj53WtiQWcV7nLmhuBuD5jaBnTqW1XUXD9nYd1edUSuLXHjat7j6CVmiVCmju2Xb2Ck11xZjaz78f",
  "key2": "4nCxeXQS7CM5JrhCQbp3WVb6KmGnvPt7PLP4RUsBzGEJFk8ZyWMy42FBffWVyuqtCSTYLvseUif98Kodxs7HMVbf",
  "key3": "63uRQ4osYywCEhaG2YXAki9z2Fa7kYj4NUZ3fzvtpnVCox39tfkYBvd3XNZEktoVPnUhcqGVzahCMMnr8xTmwfRd",
  "key4": "4m2NhxsHAs4LydcnwxRFFwLeX7XBbUedD4gW4wFy8g5x5wdM5JnLDbc5Euw433kSxyktcCg1thhWsb5mMtTtYXCT",
  "key5": "59jhTWTppJweS1oaVS22pDSfitiwKcYZZFG5suPUDQkR7XAXRK13AyPC8FEHrMy3KN5ShqMKnWBor7yUoZC43xuj",
  "key6": "3dxor8A7jcsRJWsKwkP3RbbheNTckfvnzuNn3b9SHgqxV1nAowuG9hTzfvAoWxY7tjMDD7MLiLVigD4oKiyBezuW",
  "key7": "3KEwgsW5iVWuJsJgCWC7eeNw7xuZK1F3g4neNAyjkJNqhKAh9Rbyp7jZckVGbKWX7MJqEXFMoj193kSPGcKYCQ6A",
  "key8": "3m9Vu4vuEiHc8Zzi3aueG5TeT3BXSuYGET6vtUugu9ftPLXtHkezVsrXECVFe1yyLQU9VeYyTPuRsdMqV5W2MZDX",
  "key9": "3rJC2ARpuTNBmU4BUpsQHxUGYRhaE4sBjza6SP4eMrnPCyMcpPyP9NDUea7P8W9BR1dh42MMV1PAq86CHdcQVE4a",
  "key10": "2ywBox8UufAsveapz9bUgQosyGxXdznFCFtatC2M6TgFKdiGMoEtPLJjH6yZskwnMkijc3MHCnAEMFZnjqqtJvPS",
  "key11": "5A9XUvdMXBuYSSfiyhbf7WpeFhumbdrEtvVQTnwP8NgrFmDXxry5GubUNxc9AmvcDvui4LnnZyu43NWPFzNRnmUW",
  "key12": "4Tj3BvgL54jVwRxEFGWffEpUyHRhHiQTL6LZqoot8vPeZ554Qde2CCNsyYbRasULhS1H7wU1foeHXFS3sBUGbKnv",
  "key13": "5euT4vpwLUywXKkxGsa6nWQt8gmq8a8FZVoXXqSS1syXrszL2F2aQZSo1xC21AgB6R4pBkS4jBxSH5KxTy2NTMCp",
  "key14": "4AgbTWU4FDGN4ndsHXnfR9db33UPZ3GooxuKuDBZYrSoFDgEnrhbfQW6aqtunQsDPHA7SRCH2huquLyjNjxTZgxW",
  "key15": "3sNREo9KYmY6xtwjpq3dyYBG866SF8YHV7RrCg4Jx3QK6eVDqApJ6FK4uyWg7BmF6nD49pMFPo4nnwE3jeVTT5yG",
  "key16": "4J5n5kVb3JnA86ZhmaQuVF6A948ps5P9iqgUbs1h4YK6aUUxUBQ9oTEz6iKiuh1syNhH8NtfZEcVjkLTB7RQQwug",
  "key17": "nPwxnoDcoZympzt1bP36jYFadzXSCqSqamv6Ty7tmwHcUHxmEUbHecGJJkBEoujAZrvjsXk9EQLjvb6RGZd3kAY",
  "key18": "6aghyvyP17sLD8mdjkhZe79D4KxjoMN1Ate3ZuXpJN8WAxG5QY3kUp9ev1trjBMUFQqh6FXDVkhtBnnNkuJGRTX",
  "key19": "4v4pwoKtdj2ZCP8cLVM8stBqhRwpn9EqsiDZLvLHxy3zBhnWUWwVRDwSA2AAoMk1v2Drty4RpcBX6X6YqdFEJjxx",
  "key20": "5nYGgeuYQb72PW9gyP8ioFvtBeNBG8uaJApakT5kcUmRE84fhBXJ8vpb1QQpHE3CyNMX3xpa5jnSTWrLMArSRCJz",
  "key21": "4Q6RyZXejroFaQbM6LNTyCbbtSha7xmi2H2BmzkF7mkgrDFCiYxzK7VpYCRhGQF8CxVVdN4ZHR6EkegMUeHV8iZ5",
  "key22": "yBqatn6j8srWtYw3gMjfCNfmhuAkeTqSApKFcVbBiFGkRLSkErowSwzGwDRqU8yTy2PHSjHk33Av2Y9F18m99TR",
  "key23": "2AF2LCVxCxiU423t3V2BbkMczB6Lo4HCWwarBZ2X9937oF7HrpTtFA16iLT47h6xFvy9YhynJKo6UXnbw6qLM4ad",
  "key24": "4ieeoPVV9LjKKjXoiBmLGY46TsNJ7xmUHiSk91sJ7yZ15kGuGSsFwJxo5HF1egZ5wFvLyoBd9toto1njfpyMRpLh"
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
