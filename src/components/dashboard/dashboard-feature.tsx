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
    "46zNtsTH39bh8JJseyoaSaZXkgTXi3oTXGCXNBGYPZVx8w68jCxeuqScQK6SCW8bPHJP3ghkCEbkAYnDHhxTN9nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTSuiGQpZPdKvptEm9fQrwkKHNmgx17W3Vs1qqrehW6wvvN2axXMk76N2ynmzYHmWGcWy3nqzvQrPJB4n7y9ttz",
  "key1": "5zPUtByiv5MfMLr5B9EBv7qVhYHMkHyfZqD2oYwrKw4QP7Xd8yWcnFpH3AZp4SgircPQadZQvtCjx9Svbh93iA6R",
  "key2": "duTEo8bymKLzd9w1QWcq8sumvmRMZ85fTCsQQRxATNB48yNf786FsH5vhEZw8eZfLyNEE1M5KBqdVhAtwzxZeHN",
  "key3": "3y8CMqDbPPHakGqpcepXrGxasTiQGkrZzfTkd7mpsFoRJN7SZPF24rzcLVCHfpUfoiczRJ9hmXuPUiq5Ckb2NKFN",
  "key4": "64dyBC2TmTwKGTovAZpdBW4e5BNDs1EtNHL6AAVdwDRxwh3jUyRaLRvSWXSkkMNVdyeNWz7gws2M2pE8oLYTpAso",
  "key5": "3piYaDm7aB2BCeVY9teAeocnynMq3pDNNJrmSSToU29hWx8rUaw8G3UH3sDZrVTNQyp56LPBDTizX9CGQLMB2cGd",
  "key6": "2AmRUUcQZdeiohb1YDxAZKaJwpJzwm2VfjRgLJjT9EEn9ihAx7koUsFBSRje5usoEoyzWxT6bSoHibxToitWJRLu",
  "key7": "mjtUFPdmBUCjkDjQBQoJzJkNYVL8cu7tgHDXQr7H8KgBKtsS9WQGPZVe8DfboecWSyuuTeCLRyDaP5fuzUZUS9G",
  "key8": "3WE5ekZrnQwVetzsaSPZsMim6zwffrk4T6LohEvoFFdx2wVybYLwdXHPXniYNhBzZgK3ryqdF2YG99cogW61H5sb",
  "key9": "35yGqjqoJ4WFmaxLmu8PbWeEA3p1MNQ5kt7xrxABaZtrTrmi6n8xQ8GrWQVvC17ngVF8nAwzmnRAM2jxVoFXcsMW",
  "key10": "2BUzpjRP6E91Dgj5Qp87VnjUBaTruvo8veJBn8cDJyAm5Wucb8BN1LeyCptcHJ4prq1eAKXoumPtkGzJPu1MVmzr",
  "key11": "4tPH5dysQRZzHcA9qvFVph7XWRS55xPX1RH7P5rSwRqt5GBqrWvt2NYy7uAm5U5PTpPwtppoy4Xy6DKMk7RssAmP",
  "key12": "4oteDr3eD4vmgK3wSDTUMmyh93Ktoo8hCxBkGfwddckCpX45DMDCMfFYUkdhLnyX1ae9hmiHCUCroA65z8H96EsK",
  "key13": "2Qeshgz7FP2gYkNjWV7GC5WcMAdZHqncCBybfqrwmdw2uVqhGuXmV6XWH4TLEpf48s4JJrEgdikRw2LWwcKnPHVB",
  "key14": "3oPivD3DhBfcvUy2enkfGRJqKfGsDELdpN54wsaXjR8rfJuAzybrUrV7ETMAr68xAh3y3ctb2UDiJ3ZJH9t8P3uT",
  "key15": "VGrHQW7JzCtUH25Mmce7G2kkswsaf4bmsVzGV8nXJj99DEizFwceEMjRa1UKDKmaMyQ1axZnopMuk8qDiAMzkTN",
  "key16": "64QyMe6PnKpxxRt3ZQHLM2kSrEAgtTeorFgg3JoXJEoc3ZBhzVakWzCHa5Bx44xMghDWAGVhSPFB4eLp2gh3LF4h",
  "key17": "3tfBULbxaZGALmsgorGa9D5SHu9JB5HzZQJoNFkkF6AtNNYSCKFUBUTErzS68ipJrNYfpeXitHjaN6aVEeeBBQGD",
  "key18": "TrEZF1K8zZaoZXjrRjNw8n2dbNLp3bzSYrE8nk9amFjY9S7StFvBk6oVh6XhtVKgeXZexJRGHnWaaaDTPF3TuCV",
  "key19": "2RrBSiv5Jxwo2KwXrBBNXs2ag8o8oT9CNfT5o9Y42v7pFmoT5Q6MVKJJbhikL3d8xNXSjjpzy7PyVyfrHiYSnz4R",
  "key20": "37TmUSiwQ9p7zqFU5Gsb4uBkDuEPiZBU3GCLKrAQRqEQWtkPg8HvmpMjzx3CS45mGuV9x8EJrNwR9yWGKBRxG9Uo",
  "key21": "5KNZGGMdz7DkzZ6aTK1HwYZSgncFLQ6eB8qqiQXSXuboq5dUaWSXqNS1CT3vCHuW5Ph6ximVijTb32Bw1zCzcztd",
  "key22": "2Ttc9AWsQDLSjvsGBgyhiPgWM7Mn7gQ1pE2RtYqZd46twhe5K9T7Vw3J3q2GAuh3UEptNkh5SYjnhGBhibfPAa5K",
  "key23": "4JWfWrgBN3Cb3Y2Bc1yzuMKXteD3cjr3r5CFtHKshiFr15pP69huwYy9kXo9awJsmsW1bdZBYVjwZWKhoX4QSRNz",
  "key24": "3MqPdQcfhBfj7spSSvBHLv2cw5TuBTgRNeXX95dddwbjLKWMD9Q5qGuR5hPLg2e5qSBH2uEsrdJsKWo1bU3vmV6G",
  "key25": "2Q2Ay5D76GzwD4NgUp1UFyJFPrc99gfte4Yv1nycoQTjsqxLyEXBXsH6H5mcEzhffFZEqfRcT1dnco4dBkGCU2Wp",
  "key26": "5vq9GxMUk9kVVxqrPiSMeLAKBM8YiNJxaVfMp6pDfYqWHxEL3iv7XnKU5KUdH4wqJGn5oi4X2K22ua5mt4fvJLfA",
  "key27": "3UKf1U1vYUvH9ZxbChckjUmgauBAwASKqz6Qi4NmUPV52VZWD2k1eNz1bS3uFv2D6Uz48usAzQ1RhVSu8nzis9Ka",
  "key28": "3jKsAqkwUB6UFkLnebeQXWcfrAA8GbGasLP12Qw2NtpgRDKys1ynezMVcmMzwqNQtoyhwN3rnjxj9fHFM8GXg6V3"
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
