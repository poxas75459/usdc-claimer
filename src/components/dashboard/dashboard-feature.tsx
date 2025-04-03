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
    "dX37FXQ4Z2eBpeJirmDG12dihvc3wV7k1m8UMCAjLjBMonkb3g2YKKHuCsAFiXvi2h1HzP7ve71Vymy35oa62s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gScF6UPHgTTcYTYSx8TPBYZELrvnymw1ejrwGHm9aRoSENb6Ddp9sw64Nx64DNyqCnSFGSD77yJf4NdZmV4rhfd",
  "key1": "66WuiGMoUwvECeUw6c2CMPhLiHPb49QyV96Lyv7e2KjCz3K5nRBFkLLYDV8shA1gBeUSFG5n2s9RURdAHKdqF2jV",
  "key2": "5TS1wnmxYc6Ra7ZVHuqXpfoHNhi75Ap6Fpap1tZMaRyyrtkcXZvXNiDvsN4ko63zP5YtCwXJNUVTF6Ms7ewQRiNv",
  "key3": "5kfcVoPZZ1uxmS5dhHwbbT1oBcE63YXB3eDmwZpJGsZ7B69EACN2Nhs61b7BpNr2B4vQUeAjh9Hpfs8j5BHfANjn",
  "key4": "2bs5ZxFCBJS5YB5WsHovkwDMicW7AV5DfMicqN9wWDr79NbxzP2FchcbzYD1iXFgRzUX2iToDPcrRCYhmzup3jnA",
  "key5": "58PAypkZzztZWcxJgVAJpyfZQiQWyMWzwa3q5ei622ri7MFB4seUANDkWiY1nHQ5xhFQRerVsArYtU7Y4LFeM8m5",
  "key6": "4qD1zTx4gNnv28bw7a1mFVTVkqsa1o8rhf7YpU5APp5ZYZDBGPnXBemU788VyuDmmnccuFFqgmdKHvuxb6dfveyw",
  "key7": "2iRszNL8rXhNxXwAyjpjNfuB4ffWUVJpJ3R2BWFdG3pBXK3KwKUhrcaYu4k3wL6hmDkrPAXsHghXtUB4vXL5Mzkj",
  "key8": "3ZyrSvacmiiNagBoitTfVnNATrzFF8aMhEri8YVaRMSRpYyoqW4Ss17DnVDtGhqHM6k9PRtjYTP9uTnX6kFTkq6N",
  "key9": "5e8seXTBjb2Wyn6fs9W31d7BAASuDpAn7iHNyzB1vchA6o9aXd5nnx8KsVHzr8Q3KgDr3rzRJb45jKJrtxWQRgJz",
  "key10": "4cFvaADbMG8ssqoH2cSL9HEHWCNz2JtFd2WjasFWsZH1HufjEpZ7L3YwntfcHzA8XMfxnPuWGk4fFE1jfrspyT8s",
  "key11": "3yhWJzPjPXkx115CKRrwPHRrW3C7e4s6TV81S56a8DbdjiMsX6zTxK8cgi33npU8cXxWN2FY6cXiFgVY41z5d8hr",
  "key12": "hxi4boStbaWjpahng17ycscENe4q39EQ1VQbCyBwG9RPvWdW5xhx2vYcLxvdQ1mfvtUxs2uSEggRLtkQQW2QBnF",
  "key13": "5YeUf6hTXKrMDC9827Tt3TkmJyGvfpDtmNdLoDbiS9tpT1o54Cym5674C6on5poXL4YTg6bfLgFMXBZLQz2FkxXE",
  "key14": "2guPww859avW7HYx9Cx7K6fBsMuWASSMwvBH7x16mP8Li3TE32Pn8ThFaDGW6C1P6b9fkBmS2ViqF16ZAZX863Pb",
  "key15": "BFyodudbgnGvsRWJpi6aXYBZPUuA1BuH9PusxmuwpncoM568n5hSPVxic23jQL3VjjiiTsDVgUyX2fdGYtgqygx",
  "key16": "5zeiMT5Fax5DCbVchs7mRELBApFP9ZiA51mkRRrW3ALTQZydwRb72kUkaiHCcqucxGwNuatRTX47Yc7p1Huhk3Sv",
  "key17": "2FtzMKASf4dwxPanhopAGSWDBrwkMtWbBHDPk297NttBKGTy9bhfXD99Aej5dgFr4Zei7xvooG76jG4MzoLdAsNY",
  "key18": "3DcyKhbcwQXhwLQ4KUXGxEVRMwHmQo2i4NjKueLV4jY133v6gUQL9wegp8wC6QZDdo9AZ4ufsCPmkMpKxSs2kEP2",
  "key19": "3RAiDNCpQTCxcendD6553pmpqqpqikBSzPJXmJmv3e5oMj1pEoq4i2YeP9PTxGaa6iKtvZxvqVAVg4aaDozJanzp",
  "key20": "XCS71RhG4jWfe5QwgHxs23FdgWnKfKauUFSemFzoWwUzBXnJGJ6ECsuVwuSWH8xRbMyC8ZZbHXydXut51ThJUiM",
  "key21": "3njaZih1xFBk99j2bqpEuMHaVacKwy44axE1iBhmwMqFqDsEMhBUZPSFk4vB1eKFt4R2cypCgC9J65oycbQFQWK6",
  "key22": "3WgfHF2EC37TTmbDqAwSkdT9rQFANLLkAEc7m2ejAxEeCEdaRvKgRdP3ttBxMoGFUHj5HVAS2BGJQbYYGm5UDXDG",
  "key23": "5J6zoLzS3Fw2yAWVsLWXhqRVXzJZCgWyzqcPc3khU9pPJJsUBc4B7ojSffuMgseqes7ZhzF9u1F5K5LxCFsfU79R",
  "key24": "4XoSmAKfpeL3iSmnxxxfkohscpmBJJuTYzP1cSbHBR5AQg4LyTwDrcHA5Uoy2f2ZYBrb52vthYMuzX3B2brtoLLR",
  "key25": "wyP7qzgLU8aridfmPoCMsVYK4vU9iik9DyoMoJog9igi2kjMX4cy5c3gMGhHQzxb2iwpXip5XgwfTxNFMbwwrZC"
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
