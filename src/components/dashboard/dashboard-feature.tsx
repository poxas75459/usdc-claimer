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
    "2nc3zuYeBnMNEeM6kM7K9JqUWEpa5ot4GMX5F9NDg8w32H6PWedhLgVQqYwojnC1wfB3wKP8ACGZdSW1xPoDrtcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tN5yUfgByVgZiVepVRDK8GJYfP19Mq32kDx8HmYETh3mFxrKFpXtpbE7CtyQGkJiVrMGFHAJq9cYLVyZkP2pEqf",
  "key1": "5AZMqRDJgP7sTEb2PJJT1UKpoaxXKwfVN4w1jShWUWeSDyQak8MHSS1k2xxoz3gmuT6Mqm3kmdYxCYLHfS4Y14JB",
  "key2": "4SEBC6ByAGdB4SVeCLGTBkBcohRmcKpCkWYAixj7eJKLG4Y8y2xQ9f3prcqmmYaZ9YGJyqEYrbKjqH6N7fBGn2U4",
  "key3": "sdvSkKj5Ko67oRM3yh8jjC7pHijeuUaptVywe4vmi85hNd7qjUArQiYKR9TG5GtQqo4Q9oo9EzF2kc9nPWXeT31",
  "key4": "4gKqo9yjpounYamV35tj9QfdEr3WM1onV7ukc3462qY5bou2zTB4cPUosteuw1foUWDVnvahjNKcH6TiUmgkc6vG",
  "key5": "2Jk8KRuUsNewQZYmUn6qnuw8FFyAf8kwqdZXyXrVm3JsU2K8jLo1VaZXsnjcusSbNNwxYFUyrwq4wxSpjGjJxRqv",
  "key6": "5bLx7UYorng75uP6xU43KHb8AmmKGgVeLuJaKfGKJKdxvNEsp2kDFww6q91zhhA3PwUhyu1nw8FmcNDvywAYcKpx",
  "key7": "75AqBqc2GY2i92a2z1HTRUgsw96YBzz5Au7ekh4AwmTMWdJjUKG985nn5Hnt5ZX9MFife9NSgERUN7n7YwpEAnA",
  "key8": "xTuRFzAMr42NqzY3xb9esVZBxffw32ngNo5H5SXsHKqR2AbPG8DBA6Cmm8QuDhfj6p3UkiUqRMJMFLvUimWgZR6",
  "key9": "4HYBq6qvihrducvrvTYG2X1shGWvYSotAojPx2Pc463h91A9hFg28kQGF66VT5DLLEceRPpokVg55sDgrBHnm177",
  "key10": "4ui8zCpoSwYBBXLLPdJzhEqqajyJNKDXYBLStvSVA64Sx7fmkNbrSm8LRJMXUDJHKQFcC38mJsFUnw1tYex41iGu",
  "key11": "9QPx4g2qxAYmYTUkpqX7JpqFEd1NwbiJPgrVrqSXzFD6P1RMHBaxUcDxPRt9kQ29D3eMzEZWeigmfVmwSHCR9Lt",
  "key12": "3Jv9XLGW9QxcjzxCMp67twKoRwYeiCK3baTaRg1RyMZezHcwG2JUdsdDoVUJ16D5ke3Kx4nLoN8y5n2fqX2KRXP2",
  "key13": "47AWXoHwUqzJfUaZK3srSYwCosVSzJdqESq5rFC19TSHRgNDUHChAjRV1EVem5fPZzk4MabfXFSYJ7kKJGk8EQPb",
  "key14": "F4FURxRzad8QGB3qMvqJYUSSFpuLqZTHs47JugdcjPsYUJTsBJsFfGAkzd4UDkQBYwwGNPEFABTqU1CQgRV5CQF",
  "key15": "4ieNQWBc2Cv3uJiXhyBAM9U2NjDfzCdXpcbk4P9yYneLa8mQP8LKNtp8qnQgEGkswtDocMsWozEGk1aozfZRs5qr",
  "key16": "21zBCJ41zrbd1FqXnv72tZR2J8r9qFCjDKBWBAvhaVvV7A6F2Lum6C8VfV3tQVPi7uGWXuKBb9dTWfZJbvFBRz3o",
  "key17": "strWs3j42pikMB7gJxrEn19zcyd69XSHQcNXXp6LjcuW3c2HW41iX6jKxkdHMGssWpESWrtQvofttVAo2vxcALt",
  "key18": "347TTU1kHhbR5PixNyTrV5v9JmP8JumR6NtfHL8k8PVddZDgECegbThseVdVLYwrWe24V91iZF1RXULerARkVDBk",
  "key19": "4kqLofAK26KXvvdNTRhP2VSYNrqjDDmpn8dxXVSdtCjuXTksVqNXU1bhEWC9FPoQrKJTtF6PtNuXBMwpmDpzZWAq",
  "key20": "48rnGGeuqYPd9Scnua3Xy4wDxSQXjzyhrwjiiByk9DboNFStE8xcts4FLHQ9LqQndCoksiaxDJMVpPrajdM6U43m",
  "key21": "2tpsiSZve1VqdeL153MbYDJKaCS6PYNsGL8kyLJvdCqjuvmPHcPy6D1drnRBMNv5HCySy5EtQ7123jKKnE5T3HdT",
  "key22": "48QifPU3DLdW6khtyfJ21Pp5zGmorpsc5A89SrrLrdekh6mUqLaAM2ZRFgARGm5NKcmF92H6Qi8Q3GaKwaFTXR9y",
  "key23": "3qebR4KVbdsUbN51npAaFg9psgobc74B6s7JX6J27Sc3HdxesEC6M77uKDEdawFjKwcKSTCYBJJPr1hDqJfBi6VR",
  "key24": "4gGVP77ezmaAsszGAjDoyN8dfQWui233cMaMixeUaZ9BuhWEhgZ4xVup8MKYjETrKNcBSQQfC2BJnfgbwMdRjdvg",
  "key25": "5p97cu1aLbscCVsYvfCQL3M6vqgurobKW6NadmvyH6r7AUunXn76K5YZubNaasCfmBLVQBWJAvHSkkPUzjdwWALB",
  "key26": "3BrHbAG2raD9vedM8kmLQq5CuguFo6XVprqrwVJvYEHenzxr21THwp2XC3WwecLHa8bWLo8c9Ld4KGR3oyjKzqwS",
  "key27": "4rtisgwyVvanNkuxrXAdcDSciSy5y814MzanSYRs13jZTtC5DV34BWndyoY3rQPmCVs3HB2VhXar6CoNxWSVzXZp",
  "key28": "5bBbDverAak89DG3uLDStcLfXD8mdzT9Z2vtGHM71FR6ojZXMsukfGa3kRANoH4uSXN1owGdBu8LE1sdaGVGRy1U",
  "key29": "3Nmt8ZZb7EYVHYiFjqKoZRomTHN6c9gkzseSXtNYN43S527dVnvkuhojjtJwy2MfK5GCPA4o6XZsYRoWBToprAyW",
  "key30": "62J1uLwqJqoqXHbg5h2h1sbhmhhB9LCEjx54hihxpN833bAGQBswyZippCF67qu5NjETC3jzevjRxy8ag21QRV8y",
  "key31": "2o3e8caUv8XTUk2ss16bS4GczzG1moopVJVKvfT8uueeJ6SHLHWsAQ5NsFmWfukRGZoBkkMqu3GSjStD26M6sas9",
  "key32": "5r9XEVXGwVAJxka1VcTQQtGUAX39Uoi6G3ienVnRheyKRo48rwSXdZS2beDH1QgEPKFdK76XLZrmHx5PABmTxAAe",
  "key33": "xGb2qHs37oLs7p7mbXcrGmA1SihektEHswcmobXF9fXxJczyggic2ghKL6WWQLFBBsDadLGgsVhAnLM32sLPy8c",
  "key34": "5Ko3eKU1kE3gRMYCckt38eTaD3ix5Gz1rQWcnLYxBHUC4ZtwU1qEG2jP8gQgnQ72g3aHozCaFMZFJ8XoWEDPZxHE"
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
