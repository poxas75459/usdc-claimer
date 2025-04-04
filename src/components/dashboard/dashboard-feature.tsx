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
    "5xhwJtN1WApi1MA13hB3qcLnmxeSopMVrhcsJmbcJLUUu75KJhXr2yn8mXhCdjvVS5cAFQgnX6aGoHgPqWxCc2w4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLD288fXLvgF9o38oKRP6QT9WbbcJqDnE1fppEP7jgKb5pm5LyQBE9P4sU5TkfbZZcPWLuYvPW6HZokYSAGVWmP",
  "key1": "uh7cfvB1G7MVNk9Ar7Ef5b6PXnmvynQZLGgtJGoTZRdUMFR2fDLFcysR837rLgnc3SpGofnoPWmE97y7tNvtXuN",
  "key2": "2iDvhPUgzdh6njNR74HVPxhcw9p8VqqbdvNBhX76A82ZiBGuYTiR3S25pYSvWXe3A1d5VGv1ixAh43UGejAkgwVG",
  "key3": "2aA8MqHLvTtuuHumHZgRsUJXEp2YipLz5BZCKbkyHFh1bZwNoDU2XTsQfZ4n4vTDLQzfUWWo1zFmdgMBLUcYQaLV",
  "key4": "5r1husotcwUmmTBjYzBv8A7VrFaZirdFFTNzVrV6GpKCz3AjagMNqWKVNtpnpKBXuV4KzbkMkAK23oUMUjsQhHkS",
  "key5": "4M2S3jxGfHfs4RfrKhVPCCu24Zz5TzSJxtWmXfJW7VJFdbZSG11gLGBtn3CQKGyQsmQ1ZpVHWueJKHGqxuKKguTd",
  "key6": "3nCPtdXtwuz3qZwNzK5EXSDVvSVo6cdtmaVQa9V3WSJkruRqPY4GEuW5uorYR3xZCeLQ8jv2t5169mpof9ZES2hC",
  "key7": "5pWBnqDirMSctXF2jDtMtFNq4Yq6fetvYpRZRoPa1wxVNcrY4uhWjPNBxkwFLuAF7gCxjQcJ7W9uhZd4bq9PPkDW",
  "key8": "qYdmzagsHkBdSWUqMAZXo581pz1fk6FXuWX4xTQnNSNTpNTLdWz4kdz9UYxnsMNKPM1rX3C3pCaNdc8btDXiKpk",
  "key9": "3DXmbZ3jwraWekCoMkgBmPgXjo9FycUStJPyNiVZFPjcfzZuQvc4vTfjZGNyoNQhuEbdSNBGyMbsSiUZrd88zLRU",
  "key10": "4XSubui2TrHnJYS95nyobhbjxFVqaRWnsmW4Vz69xQzCeSFmRNj6NqTLPBmAM56VUfnYbSyVaRvE2BCjsZkbshi2",
  "key11": "3dgfEJhTiqpujs8vNHhoRwouZM27rm8FFX57hc5Yiichn615rz8Fyx1p8MwiZKj7Uy7PU6ooLfmFiG6hDYpraYa3",
  "key12": "3s9Y1SWuyHiq18tteh4KHkMguXyodL5BrbkpbBmx5tT3eAxXbxR7o869WLVxxvZfQ6fKywhrWpiXAMr1WnTWnke3",
  "key13": "4CxW5z9LxsTPyXmHTnrc2FXonBaK3Q8ujHdHLfMQ6LqZQgLAou424Lj6AQNTGB8dbhW99ooqkyay7NehrcHMqamt",
  "key14": "UnKDFabHYm5XSeYPBPVKMpGDJmwppao41Nej4C7dpTW1Hokn8RzzG8ho3yZTwTNnRQgX2atQQNuzuEvQumAYW5H",
  "key15": "3U2AMD4pS9TQpF92pVrUiEvEq2zRVgtRwdD8Dpj4EpM2J68xeqZJiiPZXcoJy4Ds3XkyDngFGsQrFnQagXuF7AQJ",
  "key16": "2WPkTrtQgnbWmPeFUbsCQzi6UT2s5Rz4TvYMSTL755uSVrjiCZVpdwubmiqxwvPfS1dHutaehuyzEmwhKvTDh41q",
  "key17": "AXgHAhDFM8yfKYiuP2dPx6pQ8qWP42d45JAVDczt2J4my2VMqthBNj3V7wTXNESA9Due61tr7SBsBRiN7hJ89mH",
  "key18": "4v9ETQdSY7BWEfQRN13ghskV5ZqqvBbDqF2p93SrSGVuWiaoKVaLrFxfVZrsKMRXC3rt7EnncbYpQKDzeXW8LKZH",
  "key19": "3PzakuoE6vuHefxrE6XMT3LzasKHrZsTAwTtKwKiJNgYd2E1rtC5HtVKzepeCYmVPpqkbEdbNGJprXGwyXNeAMDH",
  "key20": "4Hchr3mbyPYSSHjsrTdfD87HapbkwLwoTkGH36Kpj9N8o2m7uvpbtErDJ3Kw3E9soFnPVX5V7nJYnJWEzehcuQU8",
  "key21": "3kySjXvkHoKMK1U9TosZzzQQsnYC3Z9m9e1npM1zK3qrd1WbxLXFynApDaJkZ4fWYddQEP3sC5w9cMteMQM9Lg9d",
  "key22": "2ZSbArpNFnikuojWKSpuQJMvzLcQTC3Zu9yewn4hco9FpwJ8zJPBABDhHcw7x13ZurcYSju2nyCFvLdCwzxXgZoZ",
  "key23": "5DeE11o6MqCyPK3ciYFBL7nap5XLhmRppadVzWBdGxpJSAem8hvmmzdRhdwQXRL4uggXSxZSseRPRvyPPx5ivaQ2",
  "key24": "62GoLugxwjZdMRkqViCw5w1C6XEPKZhs9boQQrPmJukT5zTQCPfLxHzn1PWfoF69cLjXrmL5531yUKoCYYMFdB7P",
  "key25": "5bGV6cBRn7yVnAHNVoscvD3jnvFNLebiddidWeKrL3GBr8WTfbE8qfNyCbDsp38qDr5rui6mhYbf71RBzVpvd4qC",
  "key26": "DWwRA1UELPYEVFt6strvTv4Foeom6GhP5fWLL16xzA4UDGze8iR5RmdLVkzGq1Hpm7MGHRB6A6ifk85LeTYwvmQ",
  "key27": "rvdQgd4zXPNVsfLs13no5Dwih1NczyCkGfVSFLNXTjYapSdjuowsro95aX196Lgeo4fw2uCPcPzEC55a6RrGAp1",
  "key28": "4CT7PCVgkWnm1ytvdF1i4RZepmFBA65Mwb4u7qr6bqLEH8ee48fzyhoAk21p7iKCuj5PgCfaR96ZBgnsk9G2NtSm",
  "key29": "4AzLkUiF3EYZtetbEZi6tbTZU7k1CumXBQWd714VyQMvtZ6MT6mUyJS29w7YY9SZWqz7836Sja25v5QqGDbjHDjA",
  "key30": "9msqrfZDjsfL8VhWqedewqXJwJ54u2ajTQmWFqzvuw2gPtTVRqYC1Xx9y5DT9Eb7mpKad9HEK4zUFZfgQNRW1ox",
  "key31": "34YL69HQq7XTVkRNWyT8LjpmBJU6WSMuKKWHmqUACeEBQUN6pH9HWmKem5fFkhbC9uCrNCHQXpsrzWQF2MpMGNvA",
  "key32": "5FAt3nA7H8LezYjRnkriVGU8kwigBVHeL1YQ8H8RLGBenTSn4LTpnifTqcawmzZpodPfkMbnCVHXFrKGg2MNKEQn",
  "key33": "25rQH2pW7dfjn6TgpRDnWSsn89hyaPtBYP5TXHWSiuwewSjCjU26RGyr66Y11QK5AszTY4aXYSD9ZwGcabDuwFe2",
  "key34": "4f75kMZMSrXXq2g7i55jrT1A5MzASxPXqgLbxGG8p86W6UEdoWsgWKFwfJTBXgdiioGBRSaGbPGmddBXUQoJjv8B",
  "key35": "27wz4GaWpqBFZ8GfLuBoVGMBxqTzD9f8iQMJXNMuTa4oDyVHpyjpXBAMEkeVtUfRixhqDQQEsRaxB7csDXpnP9pB",
  "key36": "34EiDQug835RrreDaywKiQUfDoS7m7cfix3MTptW8NZvpZxB1CEHM1kKAnoPF4PAe6ULTnvphsRzjESmNe7FSYB1",
  "key37": "5ReK4pin5GrJy2GXtL2jwAuR1xA77PaCjd4Dwj5XJPyvZocXTdbm5dZmHGrdLsDCgNqeq75dSRY13GTDC9XgDaG1",
  "key38": "3wmNcZQbWAxPGhrzUgjHZhHkzXEgbXMnXyMfBqRVouXXRnPCWDMxnCDT1cJ91XkjcBSoLfF1trv7MJjr1NH4HSCh",
  "key39": "2M1vXXHYiuuKidFu3LsxHaCMGZFTpeYbHs8APsH843miBMv4wmUjqw5TRmwVyM2bJx3NhWbYfScWiyAHX3uepNTs"
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
