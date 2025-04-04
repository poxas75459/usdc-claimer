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
    "L8QgsMDkLXnz95fRRXVBMywoowcXADjnURDcGP8QJ16qzDz45uVZmUAgh5YaiehApTEycRpBWj5oedEzhD9zQAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7RaYQHZX6J3D4ELgVBqVXcxZru2sELKUXd4opqdKv2ysw6tH2TCJaZRyz7uoptsUVauLDRYkEr1nsMoeExprR2",
  "key1": "3YBRzUwYcrKnphB52XDcBPsoRanDwMiCs4pk6dTTBXAMorWKtX7JgW4Ud3scXULquC3EqWWdiku2BdjBNzRxP8Fi",
  "key2": "bmop2wbyHHXUrayYzgd5XTFY9LrEg88LnUyBpvKeHQeC7dsbFrBwjNPTrFfxyVXT1JWGyoTqGXsVvLWDnyPz77x",
  "key3": "5sDDK7U6tD9MraPcF423zw9YoVABmcFpcGUnqEbmr8vC9oeTsJvg12NFGhnavUiUcJtze4BYXTpYRSeLPtupKaeQ",
  "key4": "4oXYVaErzAf7PsGZG34uT5bDpgFeWdY4fTcJqBUUZfekJ1eYJDq4GjAh59P8WBAJecq1GnK5SiawNQS6DuThcD3h",
  "key5": "2cQCR3L5XpAB1Y7ZMnpAYwV26Mq2kVD98p7wc2E9gbD7hNHEqUNo9Wk5CnpVUoVPqQ8xvaovFCAMCmrYfy7fitn8",
  "key6": "3tiF692wT8q8QyH1tTiQmYmwd3jMpAKM5ta7zxppfHDvs3qHCrXjNSczshQNRYruL6HNEV7GhYoy7GNY4GZsHQku",
  "key7": "4GxEpt5rutVLmYuprymw2KsnWYquWoXFQZSsyBExPjFbGaHQehCJxtCJy7odj9Qdo4T98oudkYBDs5AZep1KdDXg",
  "key8": "4Rr9UCKCUFmh87YqfuxDgyA59gvBEfW51iwtQ7jUM2hfvzwMXF6CnWmLVb1bbuaELwjCpd8JABqdXJQGhm5VXjJ2",
  "key9": "3JX8TZPtks5xkAm9QTKYNtnvM4ua89nHAEgDDhbQz4hoUbzfyy3WnLVJZPYV9Q25vd8hhQmC8iRq7qSrpEEP2gpH",
  "key10": "bJZXJH6NskS2gABnPYHwYmrELXK3ySM84NWx6d363fGRRTULkM3NjhE97vGrUj7CGGjgHBcCsYxfAW3HVtpyWSA",
  "key11": "5aENuRi8nwfHgHyBsETxkuy3wuCkQkg761rx7QeGu8TVSiZTbYnL9DtzV4xfURaDFkXxieYYib3bdZGK1hNwNWJ8",
  "key12": "3TtFkhyKHTPtSVefRfg1aSgTactLmMmXUKJwenEkBoiLXeKVKBvDuQ6XTJDX37w4CP5UGWKtDxr1pnnSe66w9oUK",
  "key13": "wYQfUsjmzjCDw8PWk4B1XEKQ8mVN57zDhLAhZPyHfGyBMEpQPXTQjhRhsTXM6G39PRB9aaQrKkdaWKPwgAmcsDL",
  "key14": "4mQhfeHakERVMeKAxzLPeoMxRvoDhLWW59Z9KdFbtQQu7DNA9iqq1uGRNma6dqbu3m9eXo4GQsGCGsVaijBSZsU3",
  "key15": "oMg5QAEsM8w8sxSjzMcLkUJ5P6J4v8m6TVnB3i3SrVmHmPD5QKoVh31pse3USgbnB6pAUEoLGTwFcU3vbFxErE4",
  "key16": "3SnWHZwHvzXU7ePScRHPHzdvWuCGSTv8y8zBJdGz58caxnB1SiiEbAig8fuFEUaZbnrwPbMqL57nqk4FBMWWFJVQ",
  "key17": "5QGPNcUKju2Ex9zLcjGUAnVBcRDRdLn9C4CwddWBUJuhun7d11XykxajK1cYS1SRJmKXVfsG1TSkdyxubHxd8M2Q",
  "key18": "5PoXwPNMixrenVgyFcwiSe1AsVLbvmXHPYrSrUwNeKwCncPZ4AaRpmTJuyHpwTx9tnT88ahhL4sEwgGZYP3LXrBN",
  "key19": "2rfFWsXKssQhuJvsT36hcRNn68bC18DzrsxLEMPttUD9VZ9hhWaoUPgVfT4t8Rh81tztVdPuJrGZX8L7sA5E2YUh",
  "key20": "3ipxtpFuqh9VRQL4yiHJZa3UVwqm5uTBfbvVQtc5tXFVxW9zJSNqth9EzWr1YhUBSH5go5mxhVmPGciP71k7ykgf",
  "key21": "46bMyY3urkNQeCPBt42LFGzSLMLNBRreTAqY1qFQagKnEAZDjrg1sEnA9uZ3XUQJbdiMpMsiNgChbaXvomvbE1KP",
  "key22": "3imeWGydZCLPi3TNGLnVERtPSWTaTopYJ4zN5H2auKNvtxwyoKVGXFhvbgpcYM4XqyFwjsxUSs8jtEv79Pc8XxEW",
  "key23": "37zVjxhXKKoSjXGXQzczDDu4JM9nScdo86XsVgbWSn64gsfu3Cev3MHgS2tALu6CZBjCvQt4WoJFHTuRdu35NPrJ",
  "key24": "277eAzWqgxF8TPUyFNqxfYbzUvPzRFdx9zDkssNcpnCMH8F9FKERmDvaEgDD1QkXMAjj8jLFmdiURrvnsSsQkF4Y",
  "key25": "4gixLVF3cTJCRRjfaEunXHSopZBtiN5MS8CidP4VdpC2ToZgPA6zEKB6CMQWSiNpt6K5XaChM3eGmEQMBtS5JwDX"
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
