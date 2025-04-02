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
    "UVGfUYniQGWWmsEK9z3e7WdqB8qyPQWGyEmUxZoSyh1MNijpV8uWMFbv4rcpUP711u4WoTJXog15NDme992HuCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KA3kFRPURmWkmkR65SJisGS3HEJZJLUKEZXqNNztpsDsViBTc4rQn31BdPrifjB28M9ZBQVM3XDYa9prGTi92ba",
  "key1": "Vyky7hF9E3MQyxSa3bbmPUosMnov1ZQpcKyPmn4sKacATWwvsTWjk14XVJP3bqxBYUiBPHfhJUaFwR2iAFMBuEV",
  "key2": "Rr97Y1jGjLvoRq9Fyp4YMr1LqFftXGvS3xNn3p1TnSxVaCpEnW2NuSfB7GKV22fGuUwbU83ahKyfdiF7Eh2s74U",
  "key3": "3DsymkH7pH69ctPWKPmjfHhjBMXoKnncgSMg93jypGSeKRDykDKQicHPv5YusVq6N2KTmVBd4BDFEzZZJNhQLD5L",
  "key4": "ZKKk7eu4AYiUA2s9mwmsN5kysKR1AqfgDUky786rRQyQumoH3ricw6GgkVLMEPhcin36MjjmRN8rv6eKgqq7WmP",
  "key5": "wWJt5eFxd9bH6fHL6HiyBUatEAC7Hz9KbkMD6uEZ7eFmxZDUWBK65GH9ddRBHrXPa8xernJem9PKvmhA9ypxpuL",
  "key6": "4zWdrkrAtgjNEcuQGFtGksSMS5uGnUWGyxppLZiK5awR2oZPxXPzhqyAD41J3ZZhfbzTFAoX4B7uHncrYZZzTWw7",
  "key7": "2Wgq7Rcz4puTA6Sug1varAPUS1KD9gw2CMwd6cNmnb53Aq2CAQcezefA32QcWJ27QPacSuFLnx3BQKabVycSfcQh",
  "key8": "4EgzHDoatBMh5kxAM78VaR7TSYVE4GBqkQJ6sjpbk9DyH3edojRgGn8q2iTzWdX7sMR8cmdwYDoETVsShytyhVWZ",
  "key9": "bggBhEL4CC8ELVHoPHLcE9YHHUsY4zfYWgQkEQxUtcpNo6HLX6mDJpZLrSnppTpv564B2yYJLUCXeJq9cWJv8ep",
  "key10": "4JLV5dn8BhJjHUbT8d325Ue2jR9LMQCeQsrD6MvwsyTMrdfpEsjDSHfze5hvEmr9tybJxM99pH6v7jEXtDpuPvCW",
  "key11": "5oC6Xy7K81BWAmtf42yKDaF4FKazWGuf4QxZej32c9zcr8rVkHQRETKeoKeWZiZNeSpofXZC6JkrL5Uyx9zVnTPY",
  "key12": "NK9G1KAb5AWdwXoqbcjMhseVugCm6df2jykfFfuA9rQNyQLVM6pBMJtbrBdAKwEnKZwGnKAxT2iimXyrMmF6w69",
  "key13": "5JzeSJRuRmnoJEJRjc1ExQSfhKCo9DQ5r7QvRiLUtzxXyz2KWpyAjiwch3DSP75fNKQuaFk5AQD4yZB6NZ9wr43R",
  "key14": "5k9MuzNfv8jpWfBMiXcEhkhtTTy6MUDmDoT3p8FaoZryCbd3CL7P423J1JWvXiNMpsTxxVR4DFMx1YfNcbxBYMxp",
  "key15": "4uv5xqCwAcSEmwM6mf25qZZYpkJhQhFDRuSZ4n9bbbDjs6verZUCaBz4ePQ1G1RhN2WLBDe3KbTK1Fa7kN5iaWJy",
  "key16": "5HxxtkCYYMcj6bb1BwWmXwrMi3PsQqs9yoDsyaqPBR5wiAY4KNiG1NKBwLBWRMxBDMq6QAEgBgWNzkQWkpNyrdRH",
  "key17": "2HFkzzJwqRSLXNvcNnUKE6aoujEorm9KrcXeGUzqm54pewBe1GZRcAahrJmZzmeGaVLkZAU2KS6Q8aZ4WgJT6iGT",
  "key18": "2amMMK5s3Wa2xDoJYEqQx4cSAbz7JxEH6XwT1oVdKYNMvprspqNiGucUp17VgpdZaHUkMmPBDSdEwyWpg6ZmiGuq",
  "key19": "21Cfs8dBcrh9XTLnqz3f1ZHw4AqNHFoenHqS18SNMvwLJpoQ9UrkR9hcDo4pNJvFAwGLqFbyuaziLQsVZboNio8U",
  "key20": "5xVpK3wcT8vdUBG97Bo4w1miT5PGswq1UgVyxWRxFmP7pVsoQmEviohBp7mahUWEpMkCFnAPhKidf89v94ohNmpj",
  "key21": "4C5t6cGYks6HtunpZzWCVwqfrLpcUFayAzARniLbEC7scPaapTM4DunV6FLXkRamwLmEupXM1TcWMmK1dkWMkYxB",
  "key22": "3rP9oo9z5P7iVnK4qdSkrBuQpVLAb3Sh3BU8vLWNp5iTtn9vRWv7Zf63kQwhUrzVpmspoAXonyRAUPCiFBMUfV3L",
  "key23": "4MvPrMGkp2cEfhcUuaMj2esMaXWcFZbvHwor797TuYKh4j5UkjMECP3axcwHmQqn3ZynNBjKhzncJCke2BFP8gfg",
  "key24": "3ZLYjipsL84ttsZi3HBJky3jxrmddBY6VYBuuWHG47TxhuU72E8wMgDbG6PD8AGNqaEVcBqoK6X41LxokoFDaDMr",
  "key25": "4Xw3MCoPZajmYN5F3pkh1oC6QCqv2riAxDpccJ4EAX6z8E6UcGTp2SWjVEX91QuBy8edwfm6Gs2MWRFT7AGeSBRR",
  "key26": "3EuAuW6swtE3xrkKmDC56aHUFHhCuv1grL75LrbhqVCS9oU4unpvE9nCGf43CEP1MqrWHTTV9Cdy1DzdhMWtNhQL",
  "key27": "36tjprCSTi1MfnyaZtcvq6CF87gebwD5nboFgKRhJtA7XjEMRie3brt3quiFDSxCybnk8RKxRxTK3697vEdJkYHK",
  "key28": "46e1nQt3qSB2CWtPS8gikCqY96TAubfpHYQqXSjfSE8dFC9XrKmSrixsvU9UeWjkpmunwNbQFdd1m3DkPfF41q3Q",
  "key29": "5xydDpnAQJ2WdUz3t977Z76vkTvBJaVNwRGK4hMVfoiJikA3jKAwJSsGT1tsf8BmmnDyoNqssENvmWdAWg3ok9uy"
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
