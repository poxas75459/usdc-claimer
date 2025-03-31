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
    "QSiMjr3aKDZoCFVFXavFxh2nh6shifgxqA8AgBNxpxtsx3MdUdX8UTSMCNH5ARwKLmGMso5H114xDYQG8vtRAPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEpjcb7kBK5nQDJUaErRmHgH5gkAWMcE9vphTXVL2tAN6LaxSiaLRJdRVfANXFX4gBQBLduxcun5keMKtCgxPyY",
  "key1": "2Rs8dBooT9mhBLzHVVEPTHFFFjtkZuuWdpwDe1pwRxAb2syXkf1FEZSYsEiXf672oz1GvuzopcHFzTJhVpnLEQu4",
  "key2": "3SyNZ5ua7jcGfubEX2JEF1YpSgXtsycdDv3DD2TeauzJHhr7brd5f3PhyXWdFazQd8kb6ikcd4pto8WBbxBq6Fr4",
  "key3": "yRZCZxz6g5AXzzDAoRvici5QD5zPF9j7MxnUW9GP1VPmVCmzzuAbTfvdFTd9x27BZvPUg1411zo7tynuEPHpmpS",
  "key4": "5Z9AZTueHcenGh1EYxDsJxdgAeUrkZ5jB9KjVpXQzdJxhXGZzYRcjNarj9SMcN3vtz1vScuUCDdt15wC7o9v8kvm",
  "key5": "2kWZjtohqii3PCfyCWKEEcuqEy1NkTQaCRhWppPacSU62FWuaBYqSoT2Mxj81icNpJuUzC27vDkW87ritequSv3m",
  "key6": "5xbCGJRf9715drgtYiyPg2ZTJZJDgxLdLCKX64Zk2bUxY2swczF5gzAPNhTLKRsac7uCEUyxuPwaDoza7QZUzsBm",
  "key7": "2RBPrpXCtagNqEBErowRc4KjFXAWaxt1ecn8foqYXGLqF3wnXnZ76QE58uqttBfqgK2vwkTD35nmZN1TkDfNoRG9",
  "key8": "54ww3gUvqjRwiUG9ihyMQeJKn9yYNGBqpWTkFoa5pgpeWdxfWEHeb44Rf5fY5yeuB43RiSD75jbz7ZDKyhBsdt5d",
  "key9": "5yHBg9fLEsUpQ6y4c3sTjGaWSxh4KYkhX5XsyQBfMww1HaVh7zgrCgGssBpMn6U3eusQJjHTjCYePLYkHKFymNJf",
  "key10": "2QLaiELCKvcbVhV7hQ5Pr2qfyjhNhKjuY7oTgoYB5nJLqZDXqzniAxQVENYV66iksETsMi5SJjBwRDJ1RAi6BaRu",
  "key11": "22S3Rnycdoa9YAZ6UdkWzvE224jWRkZ8VGWw8anG1fURdhrHBHMuXwGDuFvqTZvBZexcyfG95KZdotX4RTucXvng",
  "key12": "5qaRTua1mjCMKDBGKAPM33or54ngjMQoNStN8EL69CEvhYC7pSQRfek4YWdFbEcXLoFmxsfy3pFd8tHC6DSVPxS7",
  "key13": "3r7fxRHCuFg2tHdhmFxyGAP5ptyur3wYwwuKT3PSaqzWgwG8ZTdVrktUCLTogfjbm9mYwCygEGrkKquUbRB479ik",
  "key14": "5n7TkjLNWWjwDbXFn8sxGqkvPrDcWTFg2RPHTEszmAp8p6qQQJnAEJGsrDvUYkNNrsUr6eEfN6cYeEAqYZfjeQ3a",
  "key15": "56ee3gukUhMGj888tykoCBpbu6JjYojSjFh3cwNCb9BeLXYsyJhbPCV7XnHmeoBncgyPeGtgg6Q8CFPSkKUtDPWz",
  "key16": "UU3gJ8boDTcmXZiZFZoHKZiHFQqRoPidRBZgR2Hn2SCaK7ZbJaKNV9Rv33SF9vMi8PJxmCXUoXGRBD1SeWJheYC",
  "key17": "32MPyXpPVBvUMz5tYu7cqdZYCdJtHvF1pc1LuVk6maqEkUY9SKmHzD4NspVvEy834hdb1fJS1TEymQmteTwJfxVJ",
  "key18": "HbxMbvvZVjgw82FVuUKGiNGQDvspQXqK3HFD13orSCm18ngkQ6xNdqA81WzECHaWhdUSkB2H6TKSDjtL6SRbjaH",
  "key19": "CxTR2n84qE4rimYhEAYD2koGLKKQrG2m1HnAdzjfGBcJsb85JFTx3xMgPhv4QBsbgcke9jQexwit9bacVZoKGUu",
  "key20": "3bbmi3CTezw3TWJFyQFduYtaNbvBhooDbdyAhiMziDwrrWtyihFzdDBC1nHgq7aZJQGmM3V6aEoqQF9wzt1Rtq88",
  "key21": "2D1ydq1B9tDZogR7ME162uRoaM3udearhuAKDRXtnNqJvuF1F3V7Gr7jvGhWz4LviLhBovGQGyBMr2m8C75AsUB",
  "key22": "37zgR2UeTnkC8oB6un8YnvKzwfvSFZsod2f64SnMepVdCEGPhudG5wD4uhNzAYdHv29sM7UogAsDvcsQ2skH7Fe1",
  "key23": "4jTJWVuc47rju4Dt5d9kwnkDSZ4kzU6WzaKBFsj4peq4t3mXLsFmwvrgfuhH6nLT6mycizdi8efN75EUs2QFo2DK",
  "key24": "2vxRg2Csnknb7eCdDevF83uSDjwXMTLehcnJR2C48qHSfvX9zmw2fpurJfVs5m1rPmB5udmVFrMqjX4sAcM6vhxV",
  "key25": "La7mJZ1c8Rg8EZKA5X3qCB8cgCL4mEh1k5TaxuXD3NWunTBCBx99LP2Zre7semgS5YsPfM2fA5Q58HZLwRzYxmL",
  "key26": "18QfkN5LVMJXH9yPgcBSfhW2AhjD2Jz3yRq1RcgFsB8VGFBPCF1DbZ79xV8ZrLfMWLnok1oES7L2u64GpbyUASy",
  "key27": "3dYtEajDb8uHPbT13GBCRN7XVD5GzBPkd7UnyeDZgEUrsDAkYLoLm1opVPRCikxh6GDr6DVUe1TubyB2fqSt3FLa",
  "key28": "24PmVjGBotS7793eqekKd8oTbXiRxD52odAXoSiHV5c8iqhbYxxv6AFcS7GnCXCB2NHiQeduDKbJMu5zv4S8T6nX",
  "key29": "2EEceGmqLj2LEYWXEbPsP2JezQAi8fcYNv7T3TUL9qgehX6sWpWwwXLNr1JBDRBji3YXUUixugEDrpmcMTeSyyCi",
  "key30": "3gSEAzQcVa7kKJQeC5cLKLsxL9f7ce5dHj6iCJAXrpq1fgNNj9Pp76zXhB6qv7aQetD41Gs2ZA81t6GHbsDkhcUT",
  "key31": "2Hcz2bkF3EK5769g3tr72gyWfrCaFnRRVSe9kg7sNhMYTRPrQM1F2jtCw26erWyTLLMxezYp2583D8R1nAWExqtR",
  "key32": "w24hBebjapLyc3gLZQ2Le5MmgjtBoQhuGJk5o4CEpWKHXc3RWfGp66UYY2wFAbqzK84rregCxftbF1Fre7HRFqS"
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
