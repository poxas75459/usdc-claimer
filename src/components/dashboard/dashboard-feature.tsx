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
    "4RtqeZAoRpUEVvpeLGxmdN1gj35xFnRxdjQ7HKP3ZcJ2AsaVXgnjG3i2iykW4GjnDHeEVrzYB8NE1pVNFNPTLBmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyU8NSuQpuqW3MVjNHYpSND2KQ9YAPkFfVCKGHCKPX9Ffk2ayXpHzHDxYXDwAz5gj9C7Zfs91Jax6XLLdWSPAsL",
  "key1": "3j1aG4Y1PbTGSqtpT7x8Zumv4b2FpccY9SD9RFhnJGSycN3XndPEgLLzzEJEFTfuna46LZ3MPzNH6aLjenTuT4h6",
  "key2": "2wcaE5KFska65gcL32pec3wSNj7rLqh4DMS3HUvYfSrBGKuahMyupPWAj8A6nS9yWu8kUe1CEPt67xhZNAmahijA",
  "key3": "2x9sH3WoMx3ATWXSinN6NWEAMYUAdoLfoScNgp9639n1c7GP5fEocndUDfAjKo6Ug7KWcKmGw1swmmLMg1RmbLdW",
  "key4": "2uKTLyfnMNMHvfvzjdyU5894Kbuo9Yva4Z9nYMBgYybkVDFYgrgfw9S7Y18DnbjFBkomsJVu1QojavDMNrbA6F1u",
  "key5": "3XdEyA74EJuw4YaEcW9XFRffuungswwxDVb2D417TXTZy4RGX9nTmaznNoxT7n73fmxu3kXAgv9jXkXBcCNLMawE",
  "key6": "59v79TxeH1PtNtceKcbRtqoGVpMu5PKAEsP7CPaKG7hUfeQpinzz2FnKtUsSrdmaxUtMJmNNpSZSaJHy2AD2XduT",
  "key7": "3T9ZmbjLEMsfz3vzYumwqBKwDaSqFoB6Q52t6u8nkRwkf7DGzVoqnihnS2AzxwyUkgF5MW455CPFcSt84iPyJfQ9",
  "key8": "4Dhvq77wJwsNcS19DC9kpvekQMxzKs4L1uUiBjzs2zz8DcHRweRLSyQUBcDKWxNKZCYoxLmCvYCwUHRkttn5PgWx",
  "key9": "3FM9ttqodXcxvuyX1zPFnbcoGspqgSPpfx9ZGdDZ9NmZFW2FbnQNhZVACCR63HRzgck9FX2wdSiaYRwwHvWKe5ze",
  "key10": "2ENGx9KQcy4U7XB6HfgaAuEb4Wfe5vCKouf2m5RuU3zUhhe2v9sgmUbgzEGd8BU1TumVuPsu2Khs75YfRQ6xCzAu",
  "key11": "5YcGfaYRva2aanWt69vnYuDq6GD97GFyuoH2FrESKUJzVXuDUA5Aye4HGujxKXYcfXsfwNjf4vmKRwesj9wgfvba",
  "key12": "5syXwRQctSABGY5Fqmc9aPuCaVF7rQpcYx1U15Q325e12U9Vf9Z7kF6ZQ6N5oSeW3JNZeiP8XZx6rTrcGkBy6zbZ",
  "key13": "5L1i7cyXcfbfrfLg3hpjQNBqN8oN35CvY97Lt5UiewhszFQ5zz8pfedGytegc9Mc46deqWQ7EM9oTrnLi1TsZVMY",
  "key14": "27XxRDcJkjyWBfM7k2oAv5UvbVnEhUMPJGkQe8hoV3nWpsXf3xRvhf3yTubA1b7bPQnMMTWyHbngCveDTU6aGeZ9",
  "key15": "2SxS64mCaPc2bK5Dht22Pdjc8nizfne2UFhw5CNf2qtASzzkVhVWx3xdjt4ojMkAEQT7QZxDzmRyiVYzUDRcXHxD",
  "key16": "5DFyJiXzNV2VbEheGTAhcP7QY926qoNZmriZQqf7n2c2nLu78cyHaHfRUpNroiH6FdbhPEFYXb1UZfsqSqh3hMXy",
  "key17": "4EEjtQwK47hciMJyQJMouE1Y8ZrGhZ4DwzmWcfGtpw388ga9Fg5heMUJo4Cr8MZ4QV26Y9XwpYsPKLyCZQZJrdwQ",
  "key18": "5EkycdGUhqTPS3nf2M4RuMK3CuNyQopi4LeLvyNjjweCR1KPLYzGTrdtj7vV2rndj1guFuTTndqse3A1fy1xhxAu",
  "key19": "5NoZyxpEdz1CmryDWbjXGrHJMQyEC8oiFoUr3A2Qpe8FW8QwWX4E6hNeEnWPwSUh5NijTvNGiD261je5Lco6yQds",
  "key20": "28rQbq4FYHihpuaPEctZQtHpqVxQ9aKDrW1id3gk89qbgGYwUtX5HaaNaHWe7ibBLgfT1Z8tT3ZP46HsqkK371T3",
  "key21": "2GMSUAWRJ8XeaVm5FuHxWvq9Dwy6LZrzzcEohRh2BEkrDNFerZcqNkno9dHBJBDfTBBVzQFv7Se8VaLrYynLyf9e",
  "key22": "59ANPPdVmzTYno9849BBrCF77QeH4i8kTN7sQSLf2Z1pDbfEXRzrNDG1nZPfcvANXn2qSziTbu7c986q8m1ph7We",
  "key23": "4R2AHEFeCubKux5q7uuCschEJK9H892GGqmuqjsTPk88aznq2vwjFr19Gu4jkDnqEVdEzR1doxbxUPFUzd73E5z8",
  "key24": "5GJWAWRTQNTpuRnPm8okBf8acXnTHktQ8audk56NYwpxcpB5vcoBHGhaAAVA1ZAaJu9uWXbnTbqagS9x9cwoaUnT",
  "key25": "3TBiRPF856NJBAZuKy6sQCXTWDC8JjWWBRf8Ac6kvUfHtopgPZxhi4XofbWQjsJKTxSSaYR2HPdJvW18PRaEFHrn",
  "key26": "541c27QJvaS6VPo5yMcz8itUcvVsSrgQikMvCBQ6TydNuJbGshHRYyNi9p2ytUXFQCaGZWP9qi9R8Q2tVeDyib1d"
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
