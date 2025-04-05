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
    "3sqrBehenLUZUAr8ByGNzaRRBTcTVoTV6yZUM9JzLMrKYMNNbmS1qB5r2aXYxM8G8gQKmnPte4EojpWjTpVFXnhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFRZ8inj1i4CTMd6cEKZUg1QAkhmrfSAuYTZ9azPXcuw6s3m7DtgXSdXWFMkmGaViZqMeqUaTYiDM47qZQEbBvE",
  "key1": "4N8xpU9sgizkV9cDdPJNN4J1ho8iNFkxzY1VnqjJmwCGpzFCPoxt4sBKQjV5TtDWzZATHzLFvxzR9Z8APnY8Jvuc",
  "key2": "3d7E94axuktk1qYjDbVNCCYiLcusKNqhmBAnYiH5vSSP7pP6NGB6sL6toU1bL2TTYtpH5J43ahvYi8KkGteudS6i",
  "key3": "2YUUxMynNW4nSUD75vWkcQLxBvTbqBBeHy72Br7ULHJfLa2f2XpiYMJqqfuZ2HJcNxWA5WE8oHtFb94G3FMKQy8D",
  "key4": "4n2WnHcbGC2WNj4dVdAuBm2iU5KszZZbMRTvP3VmqRv8fiC1hexPbjxqpUM8FZXFPPr7uHHQDnbqFypRtRiUmDAx",
  "key5": "CZLcHyy51Es3iG3uvJsYvLKEEk9ZCM4pePPS32utKuaGVDzNYeFg9KrqWNRBHmTzBMGoU9zyWxo3pTybUCE37bm",
  "key6": "2nwWuUVeP2ACfjowmcqd2yfBiX1j9tK5o9U4Fp91nNkCZArokDZs4qwNbVLryi5VxTtDDHCj63ro7yihoAoa49yU",
  "key7": "4L6mhRZRG8b1VymA9UBvBaaKiBRJ1AxGFW1wGt8p3Mt5BaAL51dA3kqS2Z1F75wtw8usMgbXRvEjTx4uSnzZsFtv",
  "key8": "5ojz8BszcADFkPLEZCywy35mgiNb9uYojEfJgbiomq8P1JEaiSWXRLJoQyAyBNFzZCeaW6Vzb7frEVMEcz6uFnw7",
  "key9": "3eXc5rpY2oBJC6uMNyHo36UtiUbH2F6PKhxLZxrC3ZVVDscTjzbyG936HUvmRUfaPbsDSaz6Tqdz19oFZixqBXCW",
  "key10": "4PXkWQVAMiNJkRnAjzVoNUy7MWsdiTVgwJ2QfTokJN4BmuHfruLXSUWgNktgCVKfMZ1i8zaea8n1RMwH6bqoLRCW",
  "key11": "64B3MBP5ibWvZh3cbbYi5txkHzRjcr1iSaCeehj5Rv8cmdArkTCKFJ3RP9YW6fanHFbXBewtky6XSHuve8aY7BnW",
  "key12": "apdn7iPmJ4AUigL5ASxQNvvaG7fAjJGMdB2H5TALWfNeZm9vCakwQ7KaZWFyKPmn1jRxDUkUB3A9VkqDBPk4EoP",
  "key13": "5sCxwHRzxmQyTkPyfZNS9ZZRQ1L4Ben9eLs8a9KEvxUDpdTi5Td3aJZuYihRngjpLVhVhp4aAg46bmLBvFsDsii3",
  "key14": "5TRynVYQrzHyZcFaqD3Gt9cAZ1danudpT4nrtaxiGgrtb1WZwkmiwh1NvL4GB9mQGG9ydu95iKhHpCiuR7NnLmtF",
  "key15": "4uc4h4JehDQa1f49nBD7v1J9eQvv2oFL3duE7hYo5yyjvfG8KtVfeqvBNEbkp1i35bcynyN7hQZZAnJToeULo116",
  "key16": "2Rfbi5vjc5dEAX4v28ETtDtjudSUZ8JUYt5Lt3gBZxwwpFTfqwvQnvqxymAn3CPogEVirQyhdaJtWrPHQS4Vpf6y",
  "key17": "2CwoAJxK68MutWgb4S1NCSVbU22DqHF6tQcNgbysU41r3XPTSwEUuP76QKNJMMDWVLmQYGAZkYVTg8MNEmQYiqbV",
  "key18": "231p8f92fgA8ig1642orEAdudLKABuYQwduW5huJNAuYhc6W7BiXbsx5FSzZUeC4mpmtJcZZ8rRBZgJAwJMmJRVg",
  "key19": "4hiYAV9kVwRyCaRmiE9kgWpMGTRtvp3hiWV27r9aScq2KPjGRfNWq9HbNNw2EmdUgGUJwZTpGG9ZsE6WyVjDpPS3",
  "key20": "RRWZQamv4yqY5z1jgB7eBxKAQMLgXLNr7kPZ4V3owYSB1BMYrYLm88xqQpWmu54sjzA14J8nXshrkBuQpVRSRHz",
  "key21": "5KFnhwSwHVLhZYH2GbtuUr9R48SY4uSW3fCJryZSJSxpGn7Dw5wHowT4nm5JBeqJaPZLANv4zkVFfkrSYgiWJE8K",
  "key22": "2snmjjHJogJjQNk3vWcRR8zaEz8Wa7WTurvuqc1MCFBZza5zN47rnZQCZj5qTuubXkBozKi24PeYcq6nkPSNRwDc",
  "key23": "2Upv2rTGxg81uSMSh6rweyA8aaNvWdGu3hsD3GefnoQzB912KUkdogNV7bLQqURU5r3wvTw4ggACbZm4B69MtEJB",
  "key24": "5x55ukjowaAhum64AzvjqLHhmQWAncx7qdXAgSDUeHYpucRyp7pwvUPfhdw8AFpmmjhQ9bkb4QsG1vTpu6SJGRUD",
  "key25": "68qj9sdptuHYLT6G6LZocgxEoY7g8Kp3CJ1gWiUTfTa1stzesuSJQLiu3Br3gmPg8aESAtj31FTifAdkJoZyfcQ",
  "key26": "2XdZmcjqHjd4soNA7wcxHHoKJLLMZTCheMTz6UfkZyNeZQox7kk8P1AAnRsY4yj7SDFQpY2rDM7xeLkHcQxmywKS"
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
