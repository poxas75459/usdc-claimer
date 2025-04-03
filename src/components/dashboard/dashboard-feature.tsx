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
    "5KJZ7KE4jWZWR5fwg6sQtorCsfvft5YEANug75o2tNJuwk16QRToPtqDwYXq3DS1Kvih7TkWtvsy994oR2kF3umU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aq5mFns3ZFvpyv6GxnJazZiq2Hieen6SNADrN8MEGjgo3Pm61pGrGwg33ccEdjZB7cWePVJ7nLNjsZzzSaQ8Vyn",
  "key1": "32NGydnB7NPuY9kz9LyJq1ut2jRstaTpPx4yDp4fZFrQj6VVgTiXw4zc4qfg558sfthe9HdKTj3HBkQ8Q2kBsak2",
  "key2": "GByvqwavZZTtRD9UxjU9vXrQmGdiD9trWPWxgEL8fosievoDp7YRxbBZV32PMUL5TnmfKVxwiTQXqpnHoyxgDHq",
  "key3": "57QNbGercJiyWs56AZuer2Z7BPeKN5ZbNFsnJ5JBxWms18uXfbGgZMTsf8517G23uecRsNBymRFHgQzJ1ke6kgTM",
  "key4": "WWJL1Z5uHTtxAAGERnPxf5rX5aVp3LTvc9Whf2ZiRnUqrcMxXZjmkG2J24oULcXcBe9xVCA8ZX2ox8DNb6AzSht",
  "key5": "N9j9bKd74xry6YBZxdQ9Kabtoc2KLKFjhmKhMXCnrzZy4dmCsiaNbJeuLncA3mr53snnqBZSnTLSpjDH9Sut2Rp",
  "key6": "4BahgkYyY95u5KR4Y5JAzAqxuGPiZa91faUJ53pta7wS9Zz1rD5xHCZ2B34EtJjSZ8Ym4U8PjqAQuTZeU1M1yCou",
  "key7": "2SF7cjJ3bKuYihUc6XzNfX39ELcHbLyfAyRBqrYRQp28ArNZWz8rfN6Qe4ont4dD1v37P5gg8f9GhiCkkfQz8hA5",
  "key8": "2wtAmtYXJaXSWPSdYdDuYUqmpi89LVCodBRSvgUELRvY8TfQaMsJFYc9DX4kuXdtmRcrnGVcwm5ScetCumZGWkYT",
  "key9": "25XkYE1SqvSxvEQ7sGqWUFww3jsE3NtEfYuS7iFa8yTp3c2zK2EZqXn68tuyBB18ba3o44LUn18oXr4Rpdrb1Ju1",
  "key10": "tjthW4vCaR1cx5DBwrfqyWrZP5oUQxNDDz7baYXcnkmz26ZoFo6rYoqUZDaH1EPzBzwkCgNdJGFxHTzK3U3GY7a",
  "key11": "mN4kPzojRqLSLn7FGH5ccSQsaum2Ekco9NQyvQGeghoo1gqjyjikikx1F1dSjHihhYnDsLG8f6VsoZV3XmkLAGW",
  "key12": "65gxgAqrJDom1ibtTEEmvcvG15s5fqWZyV9nWvnWi1zFHYAREstrMszFsLPbgvfAGc7fnhr31b31H5bgkHPi9ZAM",
  "key13": "g3ZVrijTVwosacX5YEq8nEBKpRfSEZLiwXfr4VmyB4XyVVKmmNGTM7iHrLHkE6idTEeB5NcAJTGoWrxpqNpbVDr",
  "key14": "5TrpP4kk57tqAQ8TmvCxi4gRDXfGgkNu9s58KgwZQCdHmz56ReynT8G8UjQ88VKabpiEJ1yAvKXYGwCMdmL1JajD",
  "key15": "3rE9uG2Vxgi2EMWBZsgSpU4ju2c9p49kUez29aNWdCs8GVutjp82rSfjyb75BgwQ5ugMfkNodaXAYf2hNw3eQta6",
  "key16": "29P8zjnhUaU1YD52CJgw5eKaoQ4RZ2E21BDHdEpZFWxa3eJ7L5SayaZox3FyBVMzwvPMeZsAbimRSDTKmRYCFVr7",
  "key17": "3rA71uP5g56nr3cNYAG8CWcE6jGZTfykRxYKJaWMKw4p29aMSvVqSXz7H9FPePRHrWNXMALiPZcsUJ4Vg8MAyaSF",
  "key18": "5TLDUybRLBY2W4oTG9JScqDHtQPCCFnFWwBNuG531jCuUGnFCVSk8CezeYqrBWFy7bAfpxR5AQ8b7i9XAwu35jc6",
  "key19": "4nuFCBiaopNa9dCzMhdCeJ9yZga25L2poh1p33Tsb1Cjz9ua6KqJScLvf6rpNmutT9Beb9AXptCo1DPX4VxTdyLS",
  "key20": "3E6sseG6oC9BACPJwEbgmWMCfgEi5fWh5RmkgCATRANfpWQ7mwcB4amdLk7gs6evpVP3poGxJAAAhpk8xpnKg9A3",
  "key21": "3vh1qGsTrSfG2Fxa3rWR7juMGo3ruyhscrMtVvAvBH9uJoZXDDQreC4SAqpJRgZBETD8Ysr2RG4SV7xg7AjZ4EVt",
  "key22": "24oK6JxPEhqMtmsQvFUPT4mwqfUfyH6iPD6ozJ9dpp63bEoyAVy3SNwYM93tuxT1PQC1qPAmmw4QgMHgQb6Dmnbn",
  "key23": "3VPhZgh93CA9nCqVi9DgZFb1hjf9RVxqADXEY7K8cg5goFbBKmVi8BSShPjY8eVMaTepZz7VNPhMiX8C5fCDs3VN",
  "key24": "5HGn6CciWdqLR3tymVEwbwmd923KCvr6FG8EntsCzvC9sZzNkYA6cqFiAgUmBhfXGQx1V4Kj3BNDb7qQm4QaAZSV",
  "key25": "4YgqLdfRBnbLTnfrLQYwUqy7vBP7a8XGZTbPYQxtVyRS379C3LrRAJv7Paehi7rnfcYga32JWkJRFhD77womeHkP",
  "key26": "w35y1SXPAY3f4dKQrNpi3HeGha6gh25njWawxNbxJBtqMzkEPAyp38XGfA8P4qiK2EK7CGQtMfXAs9jv3C2KAjj",
  "key27": "W2Do18ZFU9nJffBRv9ToTXbcVydfigp5ed6w2Z8mjasQFXJ1bgWS6ftKD7pjy1ch6xfCjDJZ5rmJpxkZShfUHjK",
  "key28": "26qmbngL13D2AV1BpnBgaCLGNMUQAYwLJiUYJ7U27uXUKiVgZiTHxXJi6y4mVSjGzj3Bj2zLKsE6zYuHHf5cJDi4",
  "key29": "4QQhpNu32s5twJHWJmvjzMSqW2EDFJ3zUAUU9zr17EJ5WemxcAZ7K2qdikjemgd6QrC7iqMrF1mQ9JTFXerSUtc3",
  "key30": "2fQ2rGp6ME53UQPkdD6bUvD16Z6h2NP16JZ8KPXDtcnnJpBB2rHS1Eu6p9t8sQGDPCpWFBtFrSMS767P2hPUAwQZ",
  "key31": "3Z4CQEMMRyXvWKKKdfKJJ8iuveTdcohfChXw5jULQKnYTE8VqVR1KPJVvyy8wB61EoeexJgBaZx2YJr19jPzzBj9",
  "key32": "5cd77amNv8foaUGe86pQYvtPXcodud7Ek39nuQ4QVJZNWkhRJteg96KfZC8pG6Pmm4ugf7NQxkGMvvjwEpU9LVG6",
  "key33": "4SZGN29t5x2oEU5p7kBQhPWPuyTV9kn3qF4NJFFgvz1twChtfDuXc1VpCB6KwJPedf6A8snY3eazC7bDcCQW3H5r",
  "key34": "9TXmnCa2A23ny3UN5foAchcRsxETM63s3ge1fFqYw19FAFQ9nq73LM6PDADBk4FCEJcqGg6csKspXSbNmZqxSLW",
  "key35": "2KjhiLapxs6SXnk2KZzFWN2WyjKsM8odofUmRqmqXfWMouBk1Ygso9Vn5sLtz6NNa2NZXvD6WDdGBVJyg7CKLnxz"
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
