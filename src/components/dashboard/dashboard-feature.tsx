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
    "4B2RZnvoZ6SXCQW5S6Pq9EyCuPAH2Wv26sbLf7jtAwHcYep93C6NMB7a8psVWpqtMMAM7iiFxx4s1xSCx1WHY5Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w98fwHSYTEDNtkAv7d8ADsvEQPrqbKtChXhMeNa8sgPm7cmctX1boGaZ6QZaQu3HmvE8sv83Rg37runYDeAdqPV",
  "key1": "jMf9mARqwkAGxVybgtXjJE4pE9Vh5c28sHthk6Fp9Rbuc3SYfPwGRAphpY9cF6a6e2aXFdLbqbRs58iPv25bj3B",
  "key2": "3yyfuoetD6KT8vaeSHfzFCnaMXgsMos9suCvdWRNt6pXewwj9As94PPpPLgqfWqU34aM1pGnF6NvAynuCu7PW4JK",
  "key3": "3RwNEHafHPMKRHjBQ53RJqweTK1vK8RME9mKRrqto9zuecLuUHQMUKJ16sDAaEbc2R6RtW6Te9CruBE9cs6SieB9",
  "key4": "F4ZaAQ1qDRoNxrqq2f7nu2yDXYfskSY8HgsfUUoM1DL5YZ4xkyNTrip7uEtDUi3xibojfe5qt2bUTu8sfBxxDsr",
  "key5": "5qUUCh7dsWixaKj3tjv7RpqAKRYhBhZYxR3YLJDCqMtkMjSGDBbYfStzzyDWneyoLqqmxXfpAACQeSxkHvFkt82W",
  "key6": "5mTze5TFQLNLzGEWexnyqHavPLeFziUTb5tcnDxDD1YMnVMwsPcidued4XnzDwQovyhgkdzXDx1uXmoLmPNxgNx1",
  "key7": "1hFdVKud5EpZfhySBDMnP4ygmzt9f6nd6Nv6gbdtUJGKnfQVc9vC4x8sRtHwtz5ATp4JZpPxNEpEfTYcus9oDCf",
  "key8": "o4sJ7p547QQZWYN8FN79aZRFCai1B1F43jLankF4Ziz4GcRwAs8VzmafKPdRfosWSy2F7ww2t5yeUJFTjVpFN9A",
  "key9": "4KA5kD5sfxA3se3t6D2dE43RhHQDA7N94JTg3xSDKLHRCVpQfRa2tSK8bXQ3aWoJqK7bZkEHaXLkthwxfDr4hPGn",
  "key10": "3niwQgYHCZUbx3hr82mT7Uuaj1FCPe5hYfN1yJyNSYsCUiMNLPHTJRSaGWFBxywibgcrCXncKT48mpEfLLi4RGxT",
  "key11": "2U6inFQjmTUjnxLmdsZokJ3QHdADfTcrpeEJE4w8zGMKewoanrT49YTF1arhRqyF4ns2Xy5mYPWrut21u6c6tKMy",
  "key12": "3dtzCzgRkfwKbSqhWLqYptYLFZFF1BZbpgHEFkUwckkjZwsEoktiwNCpdBKSMRrecMXid3wz2M8UWCGtQczzEXtD",
  "key13": "5ejX5Q5UjP2gX9ad8rjdD3MxUd84jafLxERj8XvVp9UCUthkgRL8iap1vsSzdGgBgktCyydRGq46zVxCZQaPSw4e",
  "key14": "3oGCrDPimZQB5yYDHo8R4XACyXB8MsXfwdCYaMgfvkh5tEPQbngYXeXYe1uy2bHjqadFH7jdVZtad9AqdtQycXnf",
  "key15": "63azHkhAGrcy2kRUqrvqQsiyKvBxUsD7S2wLUudYpT4GTWo1y4hMt4eBJg2mR5BSi7h1LP93bDAHqiyyyRyWVFkK",
  "key16": "6BXbEbJ9B8Na1v9kdYLUFVeW3vekA8L296tdyzThuf6KXppfMGJc6mkts4Ahoveo8GDzcaznQ5RSQKzpQYEvbTN",
  "key17": "4nePdT6kaPBDFpkDj6BzyYRREQJtp5BrXNtCzjeP6ZdsLi45qDEPdh5nozddGJCQ1C1zmX7k2cpQnkAF2vtngMGt",
  "key18": "2qbZtKfswwZJYxLttTAfcedxxfEUGs5Nke1DAKMAog4XbPxNqY6Jxb1evtBxo5m1cu2DNTh3VkcnpBE5YofaoNGn",
  "key19": "2pC4NRKX5waJ3wT1mxSYASfKmVjPT8X55YymeveHboipVArEudT9WVHNn76B4nuQCR9bEn8wV9ojQqw7riHMNaL5",
  "key20": "2sxFZdeeHEqtiAL8CEuniXAsTFxQJSHeiuJVVZHog5dkk28JBP2RVGgkZFYccFuPZog1gBnDjPoYW8DFmmLajhDn",
  "key21": "54GoeGB4oyfRoZJDncACPXJGQ9dAafv6PRabyuhV7qxDXMyZ6ia9ZgaECDE2FRDN4K3wPBmQ1hMHMCdDB5EeU7d1",
  "key22": "3cFb8AynQC7eiADCHY3buHssWUtriuwM3H65ukvYPqWQJSMfDSA9YjKMT1CsuXYpSVgiGKH3N5svQ66riqEkX86i",
  "key23": "3iKYJpPZvs6TC1J8S2u49BehZ4sxG9d8316v5c12hhoHkDibe44bkeGwZy7fVoZLBCo28FYam62YzdxUc7WkmHfg",
  "key24": "2LAoG36FEBDWywccZfsFBywUWFzkaHnhNqEx4C9JJKKm44CSSHmEfwbZD6HmRkhedotdnELhAFoheMn7ntvuRmrU",
  "key25": "5wB9rDbUFmMyskQWbuB3gvnoGMph1CGg4VdWooLRmTJNweCR7NwEDSzGTnFMAKjcRsownP8JcLPHGNGtDYkwcqqH",
  "key26": "wAcXDALRgbAvRTrN35FPABQfJf9qVq37f9wyXmDtv2oQVAtSAP5jqajSBeu8rjjcSjwMa8QTtHpzTocjxFYmRgN",
  "key27": "5GVacj3A6WPNyCZ5rfBsRAio8pXKy2PP93s1ACmqUU1XMfTWT18n3wdiyyDLyNWQG8ZNcPrqFgfpEt7uuKevnFsg"
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
