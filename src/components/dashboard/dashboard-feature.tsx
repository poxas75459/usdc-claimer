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
    "2jmAWZ39vH5C8SKidoLfnmpC5dtF8FpUjxTqLMV1C1bsNbstPCZUadWcwRdSsH7of2Z2EJpkRZAiasHyPG9JKDw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R29qQXQ9mcV7gb4K4XxEUxEfuHatKKq9BSkmKei1MbeDKBmDaz99jdRi6bnrCFmwdynRk2x9VjALnkDKDAx2c4k",
  "key1": "65Q7feofqRgMcciaMAad7pf3H1mL45s7Y1ZLd3A4Z9BymhJ3sFhjCXKNtNCqyqCahs1WY7JHLAD4aPAAjhZAGGgN",
  "key2": "qgo6iKwNK4FEvzZ7QR7QZw7YvoX7uyTqALhhC8mfC4z8Jdu4317zWn3ckaViBRVwR78Y8hDF9jZ9Fx26Povn3UL",
  "key3": "2F8TncVmV16ttNNiM5YmjacxPk1J1Gtgx53Z9Wq9jXmXC7vGYKe55ShxYD5C5H1b8XxqMn2iwg6aHBsFiGoTyf9u",
  "key4": "421LXbS5sApqL3qjXA2acHeBQZHccAsS8tfj5wY8KQkDKsEmpYHqrF1VssTjVbhaJtriQwTu9zhXChhKbWyVsosj",
  "key5": "3L8LaH9Nats2bvERiLWLvFunnvS3ZV52pLme9hwwfZZtzuXhrUBsQxffcuuz2BKqcd8nWZ4TFkTVtRaRueQX9Men",
  "key6": "VtBMGmcBB7b5i6RPuK3cCcUQuwY3dXnPGWePDKwGCVF4b1rZ56k1ThCRoyBZZ7h7ogF7qMCDkWjPbNMFKBYUbFh",
  "key7": "32GfJkF6LXkSUD7g6h694RTZGRQjwhSmTg3etW8gKHean9w4Cq2uDY489Xmuvt3Zyvevnh5bwHDZCDYuatZ1BFC5",
  "key8": "39AqbQ71g8VjLq93xqh3YCcpkULtz3BCdMCgq5DpVF6eT9SutfugouSJ5TV2ubTJgwjkjRWr2Pm3RXe1in4X3ZtE",
  "key9": "4RJpfvPM7FNAHS8oPd4fwEfwcyMKBuenRmv3oKtoZC7J1jRDsaAMpAweZivJiMaAyFToLC2bVM74uRi95LBzSC7r",
  "key10": "42XJC5vgMRZF9M4Y7CXrAs9kCcjhNrUnQjYhLbA9XwrGucogciLia2MXrTi6GtiLX4arVBhR9vFhDsQF5RWcW1t8",
  "key11": "3wbitctZMQXGfr8qGSHN1TLySu93CgA5yEThJTMLnU2SgLLfKH5m4rQQjUPocEYxHEZw5YK6MWh2tmxcCQrpguX4",
  "key12": "2Rht2h5zKB35J4TcZNoR3tbBV42DwEDqrCmUY1cKPELCAzxYXH8pPgQjqaEhya2yskvTa1MdCeNmrqtAmdhdmtuB",
  "key13": "5kU3ChQ1bHmfK2rGfPwwpF9HwyYt411GApExJXZwH17XrSkVSYwMD5RyvYB18kY1RSUqkKKsSwfiJVdybzbH5NZq",
  "key14": "3qtJ2apzDJMabvBL4jYTFuj1qo9iSw785wsfz9z4X6K54J6bHVeW6EVPxns69VsUDWHVBZp37MDEYzZrYLvXNx7C",
  "key15": "5RhN1UwsohYwBzvkjVakP7TygvGjN1sU5ZGSxX4y6nmHAQEKJNEyykXueeEpABiieHNSAqNMuVy7R4kEJ8as2NcR",
  "key16": "4n8pQhz6EY7w7dpHKbpWFe6JVnAykTTKJPKkByrJCjCZpEsukhDspvce3TQStdRabdaazR8URc9xLCoVCL8V3TJw",
  "key17": "4Po4f4FaFJLA1EPnQPwHVXFyiDm8LCDokM7zcbdMHJpGiMNAAmBzv6YVEp2z7r9JZkWJcR8nNm4V6VMXBJ1Woc97",
  "key18": "4Hmt5dktkNhS7fAdUcCp7NsmnBHkzP78uxTJGvSBLEr8YGdXcLaetybU8nCk1p23gJsVJtgL3rzaaw33H7viXrTC",
  "key19": "6K5ybjdtaWwKDLUtDHAyPAFfcVXhYTEYyySwqDcvtSMRVKqE3nhg42DZhuEdSM5H3TFpTf1BhZ1RCR2ZMsZ6JL2",
  "key20": "3T71DwWhvBffNtSH1jwpHDsmYqTVurpvsbSbE8zbkdEvPFdpHJ9nn6B95ujZfbf9Y3GXsdwyp7kby7XhHkHkEFQq",
  "key21": "242SqtLqJnqssVUwck5rhWiPpwkpjyn5exEdqVqgBi4njA8MTtTPQvNi9f6YQFM99nZEacfXMn3phemL2FBz51VY",
  "key22": "5fw4CgsE4QL45nJNnGm5T17T59vwYP3roUiLAe4UV9YCBw9KNQtiyuLdQ3of8UXn8pG6UnyZBUZ3FfUJK2CJniXU",
  "key23": "2NmY44m9MmZPS4aEqsA7H9J34DMRYvYP1Yg2sKLQfW8SMZUbBDxVYWgfqBiEHxptHeGKHr9nEKZtPKj8iHLMd8n5",
  "key24": "4JBeHTYUCR7QCmrphDwZiHjXu6MV4j2zjvYbNhadHtWCEqVy2PNwzW1Zo7zB6H2ZACS2ztzNfmbYAdwZcjiY8cp3",
  "key25": "46qWG1pK1YLh8QwwmMXmyWRsuEa81shyvDYD82mjPCspjDM4JRrQe3jK7ZNZV7hRFuqPncc629a1UsX1PWJhVh9d",
  "key26": "2rXGNkU3fiPqJ1CYyovkcHcmypsEzPKwoUE1Xmkpb495UrUP8qDe6urHvLwdzwk9njrLzaBG5SojsZ9QZoYZBupF"
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
