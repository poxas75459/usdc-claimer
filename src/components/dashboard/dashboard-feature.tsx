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
    "Kb2mXcnreCkTnJqXQwzx73h4UMW2cSdzyNHjFs42d4Bj45u96EFLzr5NEXz31u6NfMpJrK78Ybzi1xLzvaoSajV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtJFGZzasUVb4VwZFV35aERqmwjefXpkXazDFM5Fe8uPVmPRcpBzCfoHyppyGB29GVKpWUubQVTvj1wTacMBwNY",
  "key1": "51wdSU6rG2hhWtbKxMg9vRWcUNYhemboFZZcEBAK52YZfmjjCeN8QVaiyEkko2ULykQLnC6xU6qB25FzmPuzsroK",
  "key2": "2EeoUbyLbaNDiQabwNCgd9RzuaCY33KtGaYjUYTxFqDe9YetQ5iypDAMLsksAMVjYgKFzv1H6CrFRhnABed3onkk",
  "key3": "5vqRK2NYm7VeKCn5kGn3hGMsaY5Y1XdQjiJWhhX9iESkWQfpQ1aiczdZAc3uAo5N7YvNfKpdXcHpQP6Zevv5oPod",
  "key4": "325LMsGWc9e65aGsSUTcFzx8gET8QXYfxqMkckfrSuhPYpvN3egiR4LZDpEGqdtMEKCpT75T3skSvCpj1fL5pJo7",
  "key5": "ZDDjhn7cekVJpaaynwe41a65qi1LhkVw8YUsXG9VofeXa5rftaZTJ5rENFkagM2m5v8xYvjdHfbWZQU9WzPgMfH",
  "key6": "3ENXjC9btjByd1vHLX1Djjxte9R6m9pgQmhjmnQu5jNWhpNTC3NtSvcd7XrRaCZ2FFS7UnVgqFzZpUKtz8QEPT21",
  "key7": "59hGPQcR7PRsx28mKMwoirPSTdcLCVGqHUWKWXGe7wdSXWPayXewkr4Zhph2ie8wkWNH6VypH4p3g85YRErPj2gP",
  "key8": "59rR1UzZiT7QNcBGQZRJqV7ajWFxYVq8NXCM8Ku4uied9kSkDaGqj4EnbGTWo5WYzj2SRXCxeJMwmfe98X6eATLy",
  "key9": "3BRkfB7KZeC81QZVwiZpykRBv87gzY1yUVTSBcej7eFrefZBqHyn4ddP8aGTjVew7x5Wu7g8vL4hPrbhzJevTAEv",
  "key10": "4eing8H5PDGCuEq5NjbbSxfiwbRmfp3yjPxpr1CK4ak8HJkMQ435r5QwRGU9WTVtPrEpV7QCG4WQGDTq1usLxjAP",
  "key11": "aqnb57oocHYeokmxixrxubJHdhh28ztR5EVJS8AihNoS6J2jgH87AYBqmpGbkrHPamtcZwjgHWHEJ4MKGCLEcuG",
  "key12": "Kz5t2r5TVpn15Xc3eM3ySMrht6hqkJdEBgCgp29m6z7Y1cetna17oj4C4LAMsBiP24o7RppoVqPhzw8KPMzyn3H",
  "key13": "AKJm3CPB9SGA7LdLP7s6mmXf69oNYkvwwitZdXkz4KALFTQ9R2rYvc4EY2D4hmu15n5v92Efg3riH6ATnKjQSsC",
  "key14": "59myFbZyESdfbTB4G7bnjhuS5brzR8TgH54fEYLF3cqDPLukns9JsLRR2QSscKADTPZQVmSD2hB36B2Kr6a2DgQR",
  "key15": "2pYjKq4FspFDtgWyZzq7kpXnbpNFtNnQWzkSLn64ih3YTYoim74NobFtRbC4ejmxgmRy4hc8Qc4cUfMkE3cUpibh",
  "key16": "mzDmK1jiMkrfqS1SQRuiQmJwWjBMBd2SDB6GhEbooVw2ExUSQqBhxJM2yBS4aHYEtpcyEq6tedo7Y2DrX7aBZHN",
  "key17": "5jNaaj5U1UHkRobLwL5qgVeCDKeC2KC9frDS2EhV31p6WYEmxFKezzEW6DghqhqE2Mt5ZgiQVe4f3AA4kUMcVAUH",
  "key18": "45MZLZBst7eXPUPcHxa9zHiXjGTdCuwKdVyzgaEMhgoxoPq9b337BepBUkCLQ3GtdqwZDkwBUzHGe7TfYPhqa4W",
  "key19": "CR1G29FEidvFG6zNNW97c73uLcjJQEiSv1fCf7ecyhkNaCCGfVZSAfaoNZFfH4SARpuVsGgi44G9J8ov4zgPAB1",
  "key20": "497wfttaup85dBcMPiVAGzeegMDSjnsJrwpVMaEusQDMrtxe6iiDo5Em1SJGcDD63txnnGgBxdW2syoSoZN571XU",
  "key21": "4ozazhvVr9SoRM8eur8m2iu113Nsuj9ei3CZx33UFpnBAEgmNGuSkvTVTBZtpAEDfeS3TLJPyFpJGfVrpjWgmxv2",
  "key22": "4GJTr17YMe7XE5jeHjoY8Dt59jnVxbf1Yy6FdjxdTHQrb3VXHKvtkwKLsMZ23qjMXoDVrwjAEdkCnWkpXaeYELga",
  "key23": "2MDphM8aExQPZwSsmti1zFf331q5FwdVBz8tPMWSSHNwpsFJXAqwbXAjib5GFRz6GfHovE6Xurt6Hw8RmhWvDms7",
  "key24": "4xsJU5hdXjdfr3wHTAeNWs8Zt5v4bYxGjWNVse2kXchGKyqCL3JULboYmvh94K5kSUqaBNwi8pauqHwG5NvpbQhB"
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
