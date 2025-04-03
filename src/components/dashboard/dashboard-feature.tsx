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
    "5pXS5hnXnAyucym9M1BbgzCSaJkHmhTQNt843Xuq8xJMzSBpQWqCo6SJDcD6avoZSnBrozVGzC1oxNSUe6msmf4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whPj4u7wDisHXigCGvXpfzKe8uYuJJrCWqPCHPnRdgE3Wm5LqAzCDNcYLWoyQgZtL5FJbCqLchvhbFM3gDj4FQ6",
  "key1": "5rEq8AQVWZEq6xXfQUrvPj5HaG78n4QLadgMhFWps1BMGH1Gm8b3p9K6Hxw72pXyF4SMQzpBdR9rynV4uKj9g9zB",
  "key2": "212m9Avk4K2KcPJwXuoovhdDsstbAAT3Hig99Gq6PuaCZeem6hz4hJPKXU3JywG2m17LsuNTzHiMsgoe1v4RTkMm",
  "key3": "64zqbow586cXPTiyL8d1D34STnm12moq46wtSNWmzDSvJVaNMaMu2PFh2WXx9QK5gbfJU91ANjCw73WdNozhQbh4",
  "key4": "2c6Jb1rffMT99VuctUDqSPxDELbKN7PwpReadsQQozkKRXbJijQRBokEYPxGPihq2JC4Am43HAmXALB6gVH5pEjF",
  "key5": "4HVnJfyxPwrP1kkrFzzBktRytf7NmznGQvbpumYKunvuAF5aFwKBYxgpuNB1YvNZojurZyEQcp4GLnwrXddDtRYd",
  "key6": "h2HkoLRCiLbWsVBYz2newLvT3RUefwTGNusEenFhc9mZL87iAa9R3JwaVxVD8ovjAWQtSur2eFZpn1R5H93YoWN",
  "key7": "3kv7AetULyPz2iCQAqcAGmeRmWVVThcG9yyGt92s2pFe5rrvfa4skYTFH4siP7UwMXkWkYLuU2DyEdYk4msp7AcL",
  "key8": "3HWZWChMxGgLMiPXUwusD37rxnEwsy73XVh8mxEWBJeqtGhowTmCpW2CL2pHypDEUhFo6G6zTiRYeqp2EW7ReS9L",
  "key9": "4316kCXQzrtuLTrs8jTAJJbgSXSMh1JR6XVBfDE6NzoLTrR7kqpfdTZrPjCbZN3NhLPxC525S59Yxs9M6HCNr4HL",
  "key10": "4ZPjASKcjEjzgPi325fq9hGAuCdjrQsR9JrvdmEtzM2pCEPadTpP1CJU9SduJSqX9R1ZkYJVgrcT2ehRAzspkioK",
  "key11": "4Ygh5hXSRDU8kWUYQpKh9MASY1xNaCNhe2Z4gzQonoqqmrM6nhTAGpswDehr2fPSPp9fTPcSBVvsg9vrnRfvCnbi",
  "key12": "gibsfgW826FqLkkoLLra27ZcefPfDq4gDnkKKcV9C3SyKCQMgpPn3utZDUVFXKgwFAi8zASSGfFJdbpWRpVcwGV",
  "key13": "tLZ5jQpKiDRY6jf3x9A9B5wcsPPL68yQTffSMzpRizvbeBy1k8PGZANTiEZVAWU3pysdS5FRaHsdi6N2zhdkH2v",
  "key14": "5eaHDVoWDgdf9PRnvUVtECQns6pkmLGHdyU9UUxZPqJW3Ujo8VZFXnoHNrDNV3whiSwkn8bzVEz7eBV7uHEscpW2",
  "key15": "42Y3dirjYZXY3bdZ8xtBCadYBKZzSynHWKQWC3CCMSi5oBNfge6fxsZvirKX7ZcBVTkKtvUNieHEzoqZBiyF84cd",
  "key16": "33cb2ywVby6qtDeqqM7Kr5j9E9dBDgvFCZb7JRUb1XkT5uW9ftsHezDifhfxZrikLamJG7GCRmuwwCSnxVyfFCac",
  "key17": "4hJSkEgwEvMxhfj8J1bEvquyUtKwmEga78Ebh8SedrNUKHvXVuhC6kCLEKZc17hzCUkaUVdNfbCTy3avqxiGYwBf",
  "key18": "3RucTiwR2XceE7cGotFum5AD8ktaGqjnojHxfBRuBtezywK3qFyD94GtLmf2N7kebh3ap3SA21cvzhsr1a2815rk",
  "key19": "4c9vyMYAkhYa5KenQR5HJ4oju6jHNu7h4xforPfXgocvwARs4yYh7MihBdtchaweVCaMB2hdq21Eb5S32ZJB5dWB",
  "key20": "645ZAkHpPKwz5o7drZ686L84c3cf5FW3M9Z4Ta1ZZGcXm2sv8CbRLfQW2oe1vd3ebrAMCtvV2fEie2adLQASUZPC",
  "key21": "3kcZS2rKsGsLFJPAGTrJE3hS6N1KxWPTBBouvmid4xBpHJMtKwtBktGFEppWABU3Pwvq7VJBqffztwFsgiB1odg8",
  "key22": "2c1f8vkvrZ4xJ4uwjXjXavEvmLVKg9Qk9Vk2SRKhpMC3cXMEQ2YzHTVBGYbeH6pZeEAbRqbD2E4vdnHrAve9Ze3e",
  "key23": "47kDL6fmUTKqJwxr4dwTs1oxecQF7N7XV9pDHV8xvKsQT9gB5UXAQKDEEUhMXYFFe81Y2pPjQyjg5oUZuCvwjmrW",
  "key24": "57EteujsQ2HsTh9NYgEAk7mcZU33FL32yABmB4gLPwk89m8EEFRLiVvSvYQJjjcKc3eLAa63viqb9stq8Jvc4GCk",
  "key25": "4kfYaWRae5WdpLuc3P1haKtUtA5sgJnHpqgSJJLMkyUJMFs8bFGThzPGxXnpXrcCPWkfV91yXnMAPWPhSnEdpvHn",
  "key26": "5q4LVyQJh6Wt9CA8a8YFAftyrhaaWR2BFh8SVSaUNXrknbN8YRYFsajvAzj8xSxgSPjHuyzFC4sdBqeQUqX8nKLj",
  "key27": "basRPXfb7ZLwfLQvSFvMBKZ5SBGPygd8NJJQ3yYYAFZPva2UfZovryWVmkwZ2UjHdW8bUdhDyDV2cuZTAuxk28Z"
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
