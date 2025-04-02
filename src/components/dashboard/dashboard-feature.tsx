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
    "3Pdhh1BFMP9n4x1hvGKvnhb2g81HqprZ6tixyDmgbLrg4rwT6WuF7nKkjN5YKPYxyeFuNFZkd7ESqd1GXoHdX46w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aw95axEGniRbYRmcT7ZKHi44zuUY3dxyUFcB7oDJiYgaLup1MyMWxiHvU2YAixppnYzHVnm1qkRcAyCvkcEnJbt",
  "key1": "3MQTkRHM16hvcR5jY9o8iM2D5rvvKy1SepMGMRbiyFWM6tJFjAjvhj5xfziEMFnWK2qgXwJSR4Wu93LbN8yrhX4J",
  "key2": "4X515qSCmmRrbHkaCGRUS1K9UzCyENGs4HYzempbiEYxu7qYGN3wDcZUJeb5caYyqGeSEv9MxMAMHcik2xj4uzXg",
  "key3": "3kYfXSs1YtDFdqmKscCA715BkCarFFvPTcZmmK8nTzFGharo3DBzADni8ASDLzvVukNCoMNHzwbmaesqXLMiLkMu",
  "key4": "2CNNJoHqYj9CPqGE9g8tZ5jmagXwVVBLANKZkvGpUfxPNdT9zLnd4NEGuiSskgYXYcy87CFYqjVALX79L4mVh99K",
  "key5": "5UKNXKp5dTa9im6Wyqi8haghE8fdAYPRPAbmyLpo3fEbKQPQ12nJvBxXfYWGffB8dhWD5kH9TJRSPLhwAJSwNRAq",
  "key6": "5ok3VAeyfZ98V92aketNqbSZa5KddQJSdGncDVS8keTUtBnWQnGWp24W6qJ818C5eke5M9iV5mzAp3frz9NmeEDN",
  "key7": "2fAsKzqKfAMvUJze1oKkcHteZGwN2tCgYJKHDAiKKm4hp699m8UrpqNtDxwFJLzQHLHHY39mFYSfcjBDPVws357E",
  "key8": "Gm6GVuJZcPbLFY3YDP7Xu59Jqm2BeMix9f6bKq3FHbbT1SpmHz5Kdggip24aUHsn6wdhpmRKerL59ZBSpoT3ydJ",
  "key9": "4WEZeamPNiBWXvKNFS8dopy2N4dudJeLD2fgY91i7VrsVECNDKahynTp3fkFgwE5F1mb4YRPTTVKQhC5Dct81KaV",
  "key10": "56GX3EaCj8fcCbRDDd1EGYERf6uJBEbKLYV71GionYndBz8Frebkk1ULMhcfG7tBrrCaRuogfhoLZgWigFspP6Qt",
  "key11": "25M59etdsXeGKqCvzK3taLHuLtevFUk1Uu2jHfw1hQyAPwQAdBpD427HqaSqFPGG1CXN8M3gVaBzsZ5hnLxMniW6",
  "key12": "D1zt7uGHdNrnb64qACuG5FQ4Q51LktHLcpprZRinaDPJ1QJ5YfKZTHmWcYWu7YTHQcSV8v8GHpXXoZdFvv3jDBN",
  "key13": "4maT4BFe5bcruwWhSafxdLyVk1bQffQvXYXzBuZ9GkzhmLbKGBGZQ72my8RQ79cqmxoiRdcxR6ZvzkiaXwJT7FtY",
  "key14": "2bDtuHi4Gm1ayEGRQ3nLg45cACGYA72i9w4Rv3mw9s1PLJKve6Q854et9yvejjSwYWSFW95bUmiqyPGEy6wp81mM",
  "key15": "4oSXVbonPJ64JwpygZPhNdn9y6RFA3VBbHJsqyX3SSqRAGkHGD3tLmXxVBPAAPqi9i7ND8ixcyqTsCf6cHRLc8Kd",
  "key16": "4LghXPrWF2bxrqVum7Xj8SJqjHCjpbDFnutbYJi7xq88cny3Rv4EwTV917MF3qkkaLEX8hoKUumrVA7rpBeYbBri",
  "key17": "8SmH5iNQwQsS9uPonZuij3jKy1jYHAEVqP41JBa9r5XhhKajwrfUaT21ezJdcyy4Z78QkDU2dQWH74ehdvuUz9H",
  "key18": "34bPeYaz7t7DuhTudoB6ryj9YnNsNR842Z6hiX4psh8bziPUnPCDDDN95kE3BdNjrGjs4tfX3GpoMhhVijYaoDDt",
  "key19": "2A6hzB9xUdMqpHu53ewtCx7TDvwZd3NvLuECcTgKD5zQ7tZW1H3FrzwyXqYmiwzWbR1ybVYHNZPPaaMF91F4WSvs",
  "key20": "2ycybrNMHvQtBCg4Rbvc6pAs8jknNcMiFQCwVhd3vNDsZfiTzsPtsohvUV3uxkx3TNMe7uNoTRo9UBrN4qYUKvTg",
  "key21": "5gzSzgv1CwLeB8voCanRAfcJfLyfMxspZWWcP481H7YpUq3JNhvqL6RJzdHTXTZbc2cF7DN5e7qfTYtRDdbvniNo",
  "key22": "viKpBsvhrHqV6H2Kxon6kYWrn9J9E18k1QWx7Avj3f1fpi7hNxomMjbizYt25HENQt7Pkuzc1QrCpnSyRyKU4JK",
  "key23": "5uUV9u4iwJpj6f4munaStQR9jjMCmTTdzCi8U5LTTJasKLRpQu4dzuQNrgCtFYCLAuEMN5AzSoXQYw1K2WxDfV7K",
  "key24": "622R4AziXX4VoyLgUvFXoLKh8YA551JzNyQkVKYSy8TjJ7enwSJceYArGfKSvGjHWu1GbksHygTYS8Bx2YWDq6J4",
  "key25": "4b2QFJYP8do4u5mN6ERgrCZUt7Xsv8AwDBADkFjGiuDMG9JFFrTs5JhHHf7FKLu1bWEceETqTkZPW3uzUSDwz92R",
  "key26": "657kEqHutTdeofaJmQYaS6v7MV3isgPVtY4xzoUzsGEhU5ANMiX7Zqckbw34q3jnvpDKRbXcAbFd7NaqvbU95XXK"
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
