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
    "4jQHgaGTkDLfCuTAobuUzFVYFR7oMCZgcdznU7tnLc5dUb1emhdpacH3zhyHvapEhhddC9JfXLhv6Tcznk8Nriri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwhmckSNABwZyErR45nYcNKnDEsjRwtzTXBuHYkSByJMXTqhfjR5Vn7dq6d4XH6snKTxNDAZJ7nqv9JiRv19Fi9",
  "key1": "3ikdYknks35uJpvUFAH32rMrzMrkrE3FQ4qBBSq9nL6SEfyEMqog8gS1ZA8g79znoSoTwAzKQPdJa9J2F9pxoPRq",
  "key2": "2XcLs97McMA11UXpfG53ZSKa8MXjaxXfSUXx57ykJr4mJdqusDMmWo6FrrZUmpkyHzVh8U3ooZJDKqFGcNemCBdu",
  "key3": "nBwqYbXVp7MwG7xQDNv4qMCHUketrfjjFghgLrKdiVQ5YvCByukgq6Qz35zzKUwxAEvWEk4JxR36brbu4Wd5g65",
  "key4": "64yNd9xMZMk1eL9uStdUgmmeY5f8rRacRUb9vrxQGb9PwF9kFFZDadBJMRkFt7twPTjoTmfnzbXDhqRNnjHyRnss",
  "key5": "2C2YzK63Ca3gtMWGaVXBD8QBNurT2Aio5PDzGuxfiaFBCcvpEfPp7ac6GLoAeKYnjA14Mi6W46QFeD6kuKEwBs9o",
  "key6": "2tUezmrVJM2pCbZbSTCJbTgZZqyJLdUR1LsRZuoM1ds2Zkrx3GgZ78Ugbmsm16bkG5EDEZCgbZVwEZnQJLZka1Gw",
  "key7": "31caR3kh71tTJFDMH86X6sNpa1zgyLp5mpyq56CSaX4ayPYWFUrBVLFvVpDfsb2ZZDp5rJK4MY4HbsGnKBqZiRou",
  "key8": "pX7UiAUpKhaGHTPE2VZnHWQpB1ZEGGQvmrEynQN69YY4Wxfe86EpcpBzmKgkhUUUEcUT2hvCGAqWS3bXwni2bMB",
  "key9": "4Z8jSavytspy3gJoQyH47UWukqW87XWpwvVQt4BKvzVYSrd7Q3nPX43TxRPk2pqnXwfp48TmrTm5LfU2AHSb7gDk",
  "key10": "45bVSSHuk4HJ9ALVVKQbJwBDqRe8gnGqUK5cgnVe7omWaT9ezq5EEJJPPCjk5YEyS5JwvSuZmYJrayiHGrDSouCK",
  "key11": "4Bg8wZFFUEfTCeLg3bNB3NsiyMT3cfHJRvmc4bEiH6KKoeHNe8NE1vtr9889mEp8Ev9QVVcRLsRU7rCRxH2p683R",
  "key12": "XKW8Pze7ee1o6yUey5EPsJGoL7FgEUmmaywim8BUn195qqFXpdvspca66fAFgFJwWoRF7ckyE8gKW9kMuu4ZrhB",
  "key13": "2fCnMzgnM3uZq9Qi5sknwifrPWkSgUmudqw253CVXAwQLy3VYxru7VCo7sRo89HgDAjSgGhTouYSboX9neS6aEfq",
  "key14": "2Jpofztyyk5r9NfTQwX2HR6Q1AtZbrPpdu1uAUSCyt6eujymwGLpUR7jRv31fAjogCaiRauFCaqpiPLxMRxoXWbi",
  "key15": "2sMQDDvt7HmT6QegJNLHhqsuwYdbdFqtRfVys19j9ysdcPGajNnuwJKPE1EEnvzMVo6Q8Ny71UrxEa3Q57kRAxAH",
  "key16": "3kiPfqAsDQuicroSattXa259uaptP2qDXp3jaQfJQ3mAghnRLHXZmipuGP9eFDiPF3C74Su4xehud9FvBBaTjttu",
  "key17": "29WMGVZia52EVWmkHRxkinEGaT48fRYLRMRNXUtuWwaG3wvXS2BDbzRXB3WGKjHBtT6G8AaKHW1q1pNChyUYJWki",
  "key18": "34Zpqts2bb95fSoMBLrhHsPf9ECH2DFhxcWarqbEYsQu3noh9MjcATmu4SwcQ4obiybmcNLgJBqT1VWxwDV8PDi9",
  "key19": "2jAgKRXCSpE1XvepkoSEjraEeyEyTj6iuhGnzBwhPW51za2DhwnsevsUVrR6gT7CJ2LVQTCTapBg6LSFMLNVtduP",
  "key20": "25145skngVSdSsPgbGPjcccqJKSnCaeut99GMvmobDosVY2pXnR7ZVxmK9MjYoKbbzmuy9vkVrfMNKZQn7XAyXoB",
  "key21": "3WyQEDfpNaw8yX2Aiy1bFMiqJFQb9nGesS1paEcriooNxe6LXXXUDvNoogQ7BcoELGg7GXoD6cstSoMpPTam46x5",
  "key22": "3EgPTNn8FVXsRWQ9mfbEFko1DmrVzTMdJSnwVPwGyWu68JYktHwEBdnjBFeQ3Z65NiPCc2SamvQFvf7VoGJbCGTT",
  "key23": "QPBWPysaKBaBVABMLNuZrbJrmxqwzo3Y14c8DtwgPMXyPdSwwMH5onqgLL2hrWJrXnBe1sys5GcyuAjTb94Mi18",
  "key24": "4sD3QvFrFbWWEP2SxkTrgURSQuvwHUDATmNKDua9kmwsz9NWojLTEiHCNCbomaVp7qJWd2mCM9r7agVKV45LKMWM",
  "key25": "3NZATo3sXaU54LWLgesauXvBxiHxtcqeDim7c4HEjm7dn6EKMrtDoLULUjDQHat2MHA4yM8cqA16a35LGFB5zKeU"
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
