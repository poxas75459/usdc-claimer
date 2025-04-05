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
    "5HPjiBrcZTDUiFdDcQuf8XS5YmmhdG8LQnuDv32oD4F8ut1ZHqjTk5cwUffCjzHpH5g8G4LDk6nriXLabRWy8civ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpNGXMNczh6zec2oiMhi7sFJXrZxcM8q1Um18rx9uXtg5WbMZ7HQtcPAjeXq5H66yavWTn1nEetYWb6Qm29rhQd",
  "key1": "QgZ8onA83VyA8gTQXmqo1AQKWTShGDkruruwvJhqzn9thHcic9EQ11BovZWn74uyVDUf1GHgqnrARGZ4j2tHUk1",
  "key2": "5uQEUwv94ofrSxzmnh2BQZmPJPNCMMwVSfo1XJao9s8MMVYWDM49Yqeja287Uwxvq5CSPYusg379RAJJc9Mepab9",
  "key3": "r5Q95CB1o9JqiUqPq6BhurmSeqP6bESbkdJ1gJEx6M4CkuVFAzwSXAtZ5mDFnvCbUb7E56H9ANh9ZUPrVdEgm8D",
  "key4": "jet5SjRpSUkHHS6o7LyF47z79MPVbfznEuemXcmYvr2JADG4GAY2nGykvxNq6A53zM5XnhfSY78b3tikHmPs9LS",
  "key5": "5WJ8DBhsRkzyEVMUM6pTV391qs8yGX7kGbnauuftfZNJrEopbtZ1GfpJsrGgfYoyadgFszTxYEBMeqpZaZ4DuX29",
  "key6": "4NbrHJ8uxHdJxDFmDJgR83HFDW1p4mzXXgdNnMSEa3QueySyVBoF9TYdbSVNR9BnPhxwV7LSLbRkWte5qPXGzvcq",
  "key7": "43YgEK8JUrWTXaAFCUnmpx9pz8uuS2CDwUb7NJpQwyJrQqWZGb85LKuSErTKDG413c33WSQoEXPVbwQdD6RpGkVh",
  "key8": "67giEUjiPuX7JdbTv4JpmNEQMdMY4n6NfgzzPZtvXLkWWzHQZgPdvaRfPSiHeTjaYxsmojPkHyfVpw8WQhTH36n",
  "key9": "55F2Ld3WgavGGQXr4i7F47mkhUBQNiGEb8ZgbzwBzMt7R3UC5WdfY5duGHrhWQbEV23fPDpgJUxAZYgmy5MXDX27",
  "key10": "5UVS9C5ubusZamzZNUEKBEjdQ5bULxvkNzeJQTwCfhbBCbHQ8AV8ZByNZCRuWKgxsyAZGhV4sNfBDAVZjxwUrT4B",
  "key11": "4uyYjrGDwBV7qDzKaGJUGa4isTPqfvgFAmCHxciadGJkC61u8pU2JB54kVsPe7egiuveNpJb28JF4KnfR51o93vY",
  "key12": "2DYTEL7kwuxHQpRfG3mR6i1FV16FDsnBaYYKTuRtAx6EiPcFdkmyyg1R3SuSqEf3UXj5FNqzkNF7YGfJvj9J4R9V",
  "key13": "53RgaqxhK9v87LD95bnU9DP8Qi3BsF8wDBnKijhWFX9owtKRqFMCTjHZXgidxGsNaFKWdGQcHi511Ueshs4UoeWr",
  "key14": "beHgadocD131g4jNQVQm1RfCjcQUMbcNmwYEnacECgMMe8h6hmtEfoiKZKTpiDi58hEFxpNvNKrpHnqkjkxeNKR",
  "key15": "4o1o53mwrX8w4aSqJ2scdqpyggXHNPAqPuk6PKq3M6mf4Z8cKWWMJoqsT9Mu53kEw33XRWHicVCHujUS6ebkfika",
  "key16": "hfLCvqpVi3Y3Np2tQ8UHNxUr6bLaf1fD2BeZVvH8yr1p2UWsDqYp97K3k17yvm4p5sSBQdwo9s5UezV8TPvb2bV",
  "key17": "4etsvQEyCup4s1bRKAbyfKC44nAZSPnAQJ6gRACMkREFFCqXmY6ZB3ZLRHSPZg7yURJCHDawHsJT3Wb1dZGqJYGt",
  "key18": "2cvqDtR79Hfa2bYAmfUJaAmjuFgVGgtNP1NnYopzLZoKWTPUAj1oRXCarHUnVGUZsdsqDNjhXhkR8kUa4kafX3Fb",
  "key19": "32g7ELX8zrU6C4Phtg9x5Pz5nfGNfHL84yY5soYmbj2o7wKMYAqPuvNUGYpcuaLTcuRcrLZ9GFJwj4cPP1gyk7BX",
  "key20": "55gNsWYaki6RbJaLqqfS8kbtCefxQpJMSXVPEJ88uFsFd49Kywg4EL9dNY3i7S1YC7YNfx5bmTYE8hG3j3jLo1hM",
  "key21": "2Fad5VwDykorzKCbjaRRoekGSJonx9z5WhqRQtmfGFVgAPpiwPPvJKZDUpiYNhQKUyKQRsrFEJ7i5yhra4LsR589",
  "key22": "3TKBDJ1hPzW3qmeRNmTPfa3V2oavyvbXvDMZEkjFM78FmWbdisFvCGs3k3EbXSicx9yEyLXhzPkbMtZNhMrq12jf",
  "key23": "4qER6jMhJfLbrr9suBmGVE5VuDkUmXLLXrcknE3o8D1LeEdJMrFJoHD58qFCf6MTngpPbA3bWoz8Qi97H7EaXYg9",
  "key24": "4kaYBzDg43RG49MfQdKxKjT4c5AVtpyRjLE9DGsaQiVrbNMqBVz1f3bWS2BvMEpx3YHe1vokA6psX52o59iApYUz",
  "key25": "48D9U6aeiP1ermVWryMjsNtUrYaZjdSV2PZaWJhcqeatfbvy8zqiEejudiqYWfB4TEyQuY5ZXHAWZ9Qw69wpLtEn",
  "key26": "4Xy9DQz293GkLKpwmstDRJDRzXefx8YuahcZgaUP5Bq43zQC1XMd9D6uXW4cAhMac7G6yid8jfs3KFNtScwwdLBP"
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
