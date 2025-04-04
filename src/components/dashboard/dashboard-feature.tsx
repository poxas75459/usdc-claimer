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
    "52ETLWxGyrjsZXCX3qHEnTuFdKTW6dB1Gj56RiEerim45E819yytuxQhaz9gePnURTWUoYNQjYk4EHBMVaMTGPv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQ9GyfqfopNgd3Ee7cHyLzAfEDJ2ityfroL5mwpUr4yyJbg83KrMuDXfp3ExL6s9ZsJNDJYVtM41sVW8UkmmB81",
  "key1": "5TsNChbFQbrgV23Yb4FmvnXkuQqFsPrfCN9H7kjgNwgiJjNtAj9demakcUsuL23DQgSNeV12d3YkmVgdTsks3mAy",
  "key2": "162PCgbjNRtL4kLeD5ypLLHb5iTuRP9LgNZEXLLthuc5aQZm7LyqXxRvWQDRmUr4no9WergekuELpnvM3G8p96B",
  "key3": "qX8CwbrHD1RyGTLRG1ywkZihfgnJwHANMjHsG13tddXdTVKB9wSY5avb1L6GLuudgLNTorcsueuAipgWcxhWxPs",
  "key4": "cF16NaVopuK26NBdfsYtf9ZHrkbzi879Rc4Am6DiDWt2UwdmumEWbyT2V35HPS6BpSuRNkvy1gGS1yMJkGiq6Ak",
  "key5": "3sFHHnTYDviBiza7nXauL6U3PhG2vA2Zuh5e8vieQe3j6KYX9FQHLdDv6VYF5FX7maEGE9MXxhxAAtHbBGdv7Srj",
  "key6": "2aLcaoczifbHWK4BVts69SY4Rdct7VsghTZnGY5feqkxt4Mea7f9JjzZWKCwky33t6rrZXNaBpy9HoKTKGFH5EaY",
  "key7": "5M17R36oRL463sYKN2ZtdnzmE5xF8WRxrbf9g9Gvq8b9pVpSMJMgZr82HTegcNxkcdXfffkmEjmGjzh2vomUV3Jg",
  "key8": "3fyXZju9rbTn1ccVfRVyfBjUQn5gfgJmheSLnfnmGUm7wT6p3Ki8CPCdPjLVJ2XF8KmZ1HnVgzJp4ar2NjRPwZrA",
  "key9": "4DyJwWwTEMsZFCtw6aZdTDRJm6xk22Wwmjzd5guBhFqpC6M2B26HJ6CaK9PWxtHdAxWYyr2aReBaby2WdWBZnphi",
  "key10": "3YHjyMizhkaBHPGfawcRnHVF81rgxsosmqYKRq5UZTxkeEX7KdnNhuXu7bBtQE9e99y44gqWkpUpQSha5SzwWn18",
  "key11": "3cSwdqwpKnvQ5AXC3NEY6wmuM3EgyzRQpRzZhkhxNoeEoMp4jKsBVXKz3r5ZCEmAgsRZe2u942sYeZodf7FZ7cEt",
  "key12": "2cyGs7wdezSi81HWnzkk8jNr7bbps84m2D9fd1X7XRTYhG9dnLaEmXH3A48z7DxofBFx2vnw4sswgTLNrPYVNW7m",
  "key13": "3P9jh3XR23aMgrPdmcspSfoQJZByQC2jF6xvKup413q9V3mBVQWwrycG7vrG1oQftqLhKm1qQ91GP14e9VUKYaNa",
  "key14": "4ms6KCKLK4ccfFHYdUU8wh593vd249mgCGyjtWgeo47tjiGq9j2w8fXWPZDg1VsFNbB9EYjfM4zUib4o9MUZbLF6",
  "key15": "2tP6LwGKHnEkKmTW2wdkrfC3mQeYPtaB1tG7RvS99LyPAcaPz22VoRXvVhZQ13NMhHMS63FF7vpudzMuBiBaHdSj",
  "key16": "4FJ6LGgBqe2MXfUQHHm2Qu8cYFzwZ1LmFAuSxivSvRi5XH7WWN9n4eNND3QSBGsDF5NcL23hcepnFbLDY7dvr4dk",
  "key17": "22qqLnj3jzzgZTMq4V69ZRF9j8BbAvsBWF15k4TH2kt3cA996EvUFykw7Re5LZ7PggBe3hLhosRBpLEGFsoETsZR",
  "key18": "jw2YfAjUEsgEb3daNr97SafLonZfuU5kstjuv6sREeGZyU37mmzg8h5GtqgVT3Q1chbTRyuwjVT5xTxHYZWm7V6",
  "key19": "4vvmZ7Y7UoKJxct6JzxZWauNUy9irHoPgDRcGt5oVGDhdy55UhVMUgLQwnjcAT2krz6St1cGMKnRBS3GAJoGVubD",
  "key20": "4483opDzxWKt3TYadoAQqzHRjyPzRrMf5HXB7n7pNH23PsDAN5ygXCXyM3BtYE1kNjvyoPYrZqdH2kLJ4UbwPNio",
  "key21": "3fpctnnrkTMHYta8sGyK5fZzFfJxoMftGjc23Nv6HV1j21BiEQ9i6MKUcQEBMZYsSdbYvqEEg4tUvYWZHGkqaBto",
  "key22": "5STQ677gBBc7d7cuQABWymMJZF4cs76yL2ZWm43w6GytLztZhSDWAGYoBcTRMWWmAMRYW8NqG1g4rKsiPhEvFsab",
  "key23": "3WtwWoMqD2EoLH3FG4Q2TtYTHwFWo9kxrFZ59nVB6QGeX27pV4ZXXPmXJUukffSdThauF84QQLVzD9zRi3MSqb4G",
  "key24": "jhuJcfQLqaLWPd4tgvZ1imk53FBLxpoxwjqxCQZUgHxkTP7xcrJ2xvxdz81jZaw7nYM6U6brYZXe3ty7Vn9JARQ",
  "key25": "4vDLETgjRDZwevySwxbu3S3D6ZfdkjH5nbhrDuiVPLup5ytvufNFemQjSGzWTHDKzYDruV56jbfgGsrN1jPrCHqz"
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
