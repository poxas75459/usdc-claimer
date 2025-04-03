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
    "5regy4Mww4x5voLDbMj6qZbnAfgk39z8em3RweqDYntyCTbvwtn3UhhziL8g62A1LNy1tqfyDcVrRqmm3SY1DdF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V84c2WwgQ8afNSAk16Jdh4LBUormm8qfSeJn7TcLmmQLXMjb6zgntwo99YZwhuTkpvbT4bYs2y3nua5A52Ynik4",
  "key1": "4iUchh95XrjsRxwXA71wuCnqW9Q3pmxd9HrbqQMJJwUuxhydHb7EqCAE61vGrPWvRX3rBvZb8QkyqgjGSQkpGrJ7",
  "key2": "27jokdb6fpP5EfQvaBFLfkmH5GnvAvHyQqYgREYNBNoWcTtFcH5V4CJBUintqTJTJBR5fhrXpq7Pzqs2gv7gJ5Ep",
  "key3": "3YZudu96DE2pVmYdtGSX6vUbGHwZ1nrisSHKBAJKH31eUuXgMNPzVKrvXkv17VJBPbjnoNqtNsoud1L7Pwtc2Jrw",
  "key4": "4SqYQhC6wcXg4G1tDa3cPLEnjSzqdxUCdytbQEiUiyP4iVcKb16JzJ6wmbCGGqT5m6FkugcXDgzdLVB93S8un7k1",
  "key5": "jBq915XRgztyzTwEF42Vq2thGKgvKQTsjQ7vyzoAVnkgj8AxGRCMuEV7M9jmjmwg1uNXE19PG8g168pw3VWn4Fx",
  "key6": "VHrf8no8aZMzjykAk5MmcgbgVpgi1USnfPAWbQPKZs2vvHKXhJYZ7ASAH6syeHxNxZvYqkxQEHQeU4S9s3jyMNu",
  "key7": "49rsfPDNKPJPMHY4z4j3skkzX2hismSUnRknRkuMFhxmZUC49cEBojuFDshaY93qJWfvXDSWVPsS64RV7MCkoD5k",
  "key8": "vYzn2juRjxgTXDKBaRVdALHBw3JQbXPqwS9CtkLuSCp8PhitbCSHQc2hTjW7oBxTJqQcbjUgF2EZZ4qQyy8kAnL",
  "key9": "3Uz6q2K9EDSw23ukMo67b61X3pUySZS5YToPmA2adBVim2GZQNAMaHSQCGoNUL3tBtmHn2n3ADL5pf6arZZyLNGd",
  "key10": "2YpNvm7h8LziJ9RRTQhxm9oHoxysZLsF18tYbNZPuU2Bgg3Xq1cHAW6hzvwtyoY62bhVq7j1Q64eo6ELzCCLWPvh",
  "key11": "t6tLH8Sv6chUEoTDJjFwXwaguq3hdzHTqsmmEpjQ6fBr8vjM5xZaZhosBWzyZi7cmruJm63uRqzJZFp478R9hbS",
  "key12": "mRF8JQ85uwDvJ5CPkpTBG7z2W5SPDtKsy1RpXRo67i8oTC8vhX7pu286DAYHiruNtwxchwP17Nx9X1xhLr8PxdW",
  "key13": "2g6UBvux9QuSmzqVEuej9RzdRxkk828ZxRPpcqyjKKLjjbZpJ6eVDWPZZrcHXmAUZcAsgvGg6PQp9w892ViH3LPN",
  "key14": "MtyaDKX18DShTf8UsxfM7pRGsGBYXR4yGZ1QwMGL6TUm7WkBRz3WPdUo72B8c5gWUfYF6qTkrqKYTt47pBbpmJu",
  "key15": "45f3E8JB2r9krzM2E57XoSe311sEiavYZ4hPfDxDnFdqrb1XCkphjcE6CEu5GaGKRnaM4kfgHRA7URmS4gUC3Rvi",
  "key16": "3oHcu3TdaPY3w6rTueNyAC876spFYEGWgBnjmdJKDrDXusLc9dNLhR3TgRiMAGGY5TZq6fSngi5nnYJWMsxg6Ew2",
  "key17": "4oCVwMaffS3rVudtBtrw94zK7QzkJgQ2KaFTgiSjWf52wWgSxQtrAtMBxCX3jqbsKaSBg5UwGe2WnWMj3zZHKrT6",
  "key18": "2eUV672QiKmYWj8awjBsuMm1yn8u45SdevXfrCQHjuUAGJZLmENnCpeRzwMwRuESUdxfSj2B8hgsjicB7Vo5KBFC",
  "key19": "TzEGtteWE3VQEsxknBJBLgQiJCTpTzziWm4ys3mWVDbAyveQMjy3uT7HTrfoPVYQCTPW2gjanYx4zn7ugmnfZaf",
  "key20": "T4PoJ8fGHfykHqiBe9kmSPvjknv4dtBR4Y2K72BUihjqzXX6GAJ8M32NmAGpsAWJshB3VYSHy4qgJn3ByCYcoW9",
  "key21": "tySJNE1rNDAFgQMNMJyZS6SpW6UpfANbkq96fpF9wJdHgSzMJrSivCX6wqqkGTGr3VAHcPf3ag8DLD848JSBNcG",
  "key22": "4rT8nKWvFfLFbCGHpr6A1JyEPHgn6woUhft6xW7uaLCeSW2Qy6oL7y7BtKjtPcRLmEbPVQjeRA4XLaUWsWneGVqt",
  "key23": "5e7xfig9A2xCYRt5wfK2uUANSgw99SZkBVriVKqSBSxzyKiHPaCLqGyxajPh6kXn6pQeC1MwjetLxridHRxJ6QrK",
  "key24": "roqpnjj6ufxD5nta3t6U4qufmCMhPA7uV8Kvosd93fTkXeVQSeCnhmfJ5X9aVwaV88ksdRmEZw1aKSqJHxdFVeY",
  "key25": "2pPFjXuV697JCXnomdePXPZUHxVX9vckkF9B9yVhVE6T4yQwgF5r9UPMj4JYkRqeoogZ7nK2L1cPg3TP2HRNupPw",
  "key26": "5tqFv5FTEUrzDFi11ME2KwzaKBi95GpJPyNpjnaUuwbRFp13pamfFWSC9rmXZiuWNQQqwf7fFjdgif8jtF9Ph7Es",
  "key27": "ri9H3gzFMkQEbwXHyqdL64hhVvCMsoNnCdZogY8sRrqnyBNhaMpE35c7asju61MGYLDQ1VDPdYdraLuPrKiho8X",
  "key28": "3Qiz1ucJtxD9voPB1PFBd6yYBxsWhvQkzTnfCx5bzxVgoYxYJPAQiMcwPQ6gGMQ3nv8xUcwgBjbn5jVY3oyB1Y82",
  "key29": "3BFACZKHXLaSMgAwLF9AirguyFgHkpfT4ttTHaBPQ3qBH7VYzej8tAvtEBEkfASeF11q1s4jWTipbTVVkceq9nAq",
  "key30": "De6Rzohv4uGi45bM8b1oN3ek1v1wdcUyr1D27MUB2b4PVWthDdptq3CwwctQyKMuvPoUML359xPyTGcUBceUs32",
  "key31": "5Q61HTtWM7QvtQKGxggCW5i6C8MWsw2gJGFNVRcJhELYgEvErvkAQgovg2SHTHFJ2DpKubVshzXMVN2BT5BAcXn5"
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
