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
    "UBY32WFMYsMTuJFAHw8cNEU3up2H4CSpncu6F654e9hcVjJiVRZ1poGoTwXCbhHKH3EXvenAB2SX8UDMujfDDiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGqBwXjbVszhSZpwQ8gMNk1cFak6b6DAewCYWhzVpwod4kageEzcTPkiYXCgSRxbti2AWjEmJ4tLg2KCWgp7W22",
  "key1": "UXS5yM3Rdoy5RdJrEZzZE5UNNui8pFQQRdhpPssovP6kAjrv2D37M9i7JBxpifVT6kUFFcRXLZm3xcGMRLorFpD",
  "key2": "5Mss41fG8Z3vua1GZ9rqpie8k1TPeJworsLBAWNPJyYq3tyjm2ibzWmQqEk7DJF8ji7dHBaAvQcT16jWRp5vM5bA",
  "key3": "3MS63vG9acuSDNwQ7kdqNN4wqBTq8uBQVgqCzmHi5xiifx9JSTbcT6JiFzQbcLCWA32TVD1Tpg62keSvs2RBLKZC",
  "key4": "3RpJ6LEtfR33ALpqLnUAPmtFsFuJ9wzM6bnWKpQxxsz2LLigYd7s7oeoxnDpLdWFARDpiJN1rhcJWPvA58fWPWfz",
  "key5": "2tRCUuHZiy3vQnyW21unSmRKpUutdXEUUasdRFbUHYpibiAheDPEBJvuo7CxFCaDErHKnRAAdn9v4qutaoCBxxgR",
  "key6": "4fkpQUhg7Mg5DvUjfc3NA2rRN8j5AULVoNsEgPvcYDJgXSLMjbK6omydUX2Y9EiQjtFVScb94ygWsJKzSaBGvtne",
  "key7": "54arWE1moSNdoaYofThFKQLnLAmDeJdp5m5JFTTgKbsEQjoPgW2CT8nVFhiogfg3T73JPCvTenfaxJDoPCFkRrwv",
  "key8": "5AWP4QP5KuGoTkZyTiCr3V6Kbz4yypJqEmHhUsLUGpPWknGfkKLp2qdjz3azBbaUMDjV6GaSjVFivxEmavzmidh5",
  "key9": "2ud9FxQgi1zUujpVd5tJuUdsfJi3X5RNhjK6v3R1SeC296NSZgt3gbaC93GNq1FUbjHB9n7QcZqjgTnw9VuF6zKa",
  "key10": "279Wn3ZzWHhzyYucw1gSjvPiU5JCXxpvJzFeyomf18h3An5A9EHZwaFzudCHdPBsR4xumyu9kv1qCADHJTnUHed2",
  "key11": "4WZbKNJhhq8T4Euos5GTRLUv1DWbbNoxSsw7jBbktDC3dDjNJZugRX294if6fCqnrPCPL35JJKNn9TM8Vz6Do28S",
  "key12": "4DW9RdvvQQhRiWitUiPMjnwfg2zEEKweCXZspwVAfpHXda817Q9ra6X4i77wTzffvVGEYmNoe86QgUoq7gECmaWu",
  "key13": "2izrhkTwVRzSppAx3fGJjw4efLbpmoyxqoC9WGWHtxNxuoaj8p2H3uRFzKqzAHbZxS6TWu2VAmWS4WW3d1saUF12",
  "key14": "2cMUqwi9aUvYKDtXLPGGrqx4qGxj2SW5VjUWsAMkvDgh3xTkrthbjSnCyTswwi87XcPrxmPAGk2K2bLLN7hwmmUQ",
  "key15": "58756nNVroPuYcU2EsGQ7UkcwxwnxfjgBje9XcrJYHQAL52fR2R8R7hw3cbhomAWF7NgznLRcFkqzmaWkS6E4SuY",
  "key16": "2YXjbRHGRiVVVjgcjd5v9Z7J4auiqVh6zhTEBjNM1cCYCGgiiXcdZjPqywb754GwqVvifeGfYqJs2iU2sorffrZ2",
  "key17": "5tpJ9yGfZt8L9MKiSoQHMP9FKdousEuFW2hiwGxQAso93JrP4obtTstQoGkRyNtFV8uDTTyvSf4Z1xS55BHhhocf",
  "key18": "2BYQvLTNHsm2dz13npsKuFPe3CAWHiYpJqjSVw2yger6asEbSsETjELNpXnNYZ7Ju7qBtV435uKF3tQ7FghRkDgE",
  "key19": "HTiMeh59V8jEEK36raZaxmJb8QohygzYmWz5n4A1MgYcxj2u4EcJyQ8vKy1fPuECMstAcdvE8hiF833QRcGX7Nn",
  "key20": "4ivVWH4EShgDHrfQrTuTpPDr4kqdxf5uuLWxjyox1qpbuwd3MqbDMseZwGdTyDm7HWNgy9kVNdLrjfDmUZ2D5XXv",
  "key21": "5qU917fWe6cRofDnMTzGmmME2LF46U5UYibe8z6D7xGvLf81Zn2XcvRWvAubH1v2Auo4FuaVd3BbZNGhgG1brt9P",
  "key22": "5E2dDVW3WRk4y3yPvHPbVDdUXNeiFnLxC9KwgJRb9D717UBdogExwUjA2xmrW2sqxmfQvSE9RshQfrrotKMDTByq",
  "key23": "5C79wLWmT2aanXVkyDSmXQMfCJAwYXTm1Pj2YLW52r7xaaziFiqJPQWroZFCpH8gg3JTkZLrLwT9trA6cPsyD8vT",
  "key24": "pa86pcnP9SdMxAs46h65wz5BaSRX1HUSsTXoVQCTZmiYWUfPYDyod6B3ohcs23KugjS8JJABkcTQPfJiFaWM9sA",
  "key25": "4ayRbiPu7F1WpD3VPwu1w6NEVpQzNYf3YCKasbR6si6Uu1qvpbZyq4aJgJCKAn6STPR66bmToRexUKmUNoKPoVDY",
  "key26": "4ofm7h3c13nhCNurKsx8mN3JahHW7psDtyqNyaHYLN9ReeHDRWNR9dETxxZ8qCTvaU2gykZRq728BKvWETPR9qsR",
  "key27": "5hH1Z4Kh6jfWSJ7BYSHDFPZ6bGqN25njyUU3sJscufnKiv8Wnd2XjXeySsWRAagdH1TaELWoXB2xERq2D41szeoH",
  "key28": "486jiX92ABvNxeKWBy7C5KzLGZ6fziCCXLcAm8VdyBkLREckrs4Gi53bMAt2ur3iAeuz8gxMPLd5B7S7L8xhupW5"
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
