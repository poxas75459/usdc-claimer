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
    "2y7hkt213UE2GsUK7c92ho141WpGoZghZ4fmdDfsawpoiJsWQYoz7pW1j7edLHEVD4eZN3YMSjKDaqP5NoUpDQB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzhCnfdfhtw33LruMV3k9bT2rbuwA1Yj5oQbGJxQCAsgApSaf8cLRzpo8McEW22KGShbm1xqHRbW257x4cNVjgo",
  "key1": "4sPw13VSyaokiYdcx7pmGjAMMXMN7bw2esi32P53fzW7aCdkUXK5irwKFNKetdib7Zo8oT2PcyfcGgmiq6RUpZrt",
  "key2": "4H6ZiiABzHwuZ8sQPL5XQjuYrVvC5AwjqRszCxpPJCh8quF8igVRZ4JWZV2ddG4qVKFMbNHPHDWHPRbfoXMnBBNU",
  "key3": "3efEEp7BxNUwyfJ8S1fMmn9oBiP1RA3USY1hnNaCtSE51qP6SrecPNCzotWqZsxLaNgBE5JdhVJPzagTLCYqY93Q",
  "key4": "uZVJUpSNygxVC9hzgtGWtNXjxJVwehpAvpwMmvqoReCEwXWzWseR2WXKsuoGfRJipd1DZ7mycSyiTwoaaxCYoGR",
  "key5": "2N3ywi6u8GYXHFXcYSMR3ZabLMbcR7XurGjNdtpZc4dSTZLJo1BK3BGKBKg2ZsPyQhDMTkM6YJU2TSWqYXNRrStU",
  "key6": "23W3e7zLpE7Z9rb3KEWPYeinvMgEV6Rt8eTLn5So4GvWq4Do7VUcEevNHC672Ywrh7nVxgKu6PopMsRgiWcxvkAa",
  "key7": "4autRrgwnGvh3ZTyb5u8CqHvgsb1njYFxdPHmfVZJL2kqqRbKtE3e16aqjkU4cQnZ7NupBp1XvgBmforx52qt63T",
  "key8": "5MiGRnyicWqB4H7xx6HDw6qxzgeLeHLaTuowhcA7xWNnFsTrEjdCMmCr2FxP97Tkv5htufihok1MGPrxgiWax9AW",
  "key9": "fJBG7Jac1CimZiwMqbnf9becB8aJ2cYPtsnTPFNLaM1zMJZdh79x2C4mzPSEifnjwpP7D1kxK6Xk7mFyaK3x95K",
  "key10": "2FRcY9grdKTrKLRKQQ4a5yxbctfBu8wHgghVfzLtQZMkJKcerK4rwFCeNqERfeqSUjogEEPXvDF9DH8TK6GFKGjd",
  "key11": "4T3GS7dZ7jQwX5n179phBpf8Dm19iMmMCqMvDWeUdMct8zTqme5UWevRZUw7xGbPYYc2dtt4nWxZqk4rvgS2Z89Y",
  "key12": "2A3up6bdcs3LP3SSWDxiezp3F129ikBdtWCYbGVUve9GnkT2x3N7rVWRQomNicVUADThybDqu8XQDjAAPyryLR5D",
  "key13": "45XpcqNM8QtoBkVTKCk5tsoLpk37FuDiJQot47y7Noc6g9U4SRg5qjMniFfSEXHtQicW5PygHDTJS76QGekxWLRa",
  "key14": "37fhZpQVS8DNMZTSBHijL5eSrCy7WDPAZEKRQhRzwqar4RWnX6S2MxfaFPVwkdS3eZAf3YAvBQz2ornWBd8xagxg",
  "key15": "2LnQiwJhL62mR7NKgrNcB6Yynr2qvs4Skae3WTsFGyo6WeXLoFGUbwZ419Te4hEpr8nJcYpUy16S9uhBkFkM83Hj",
  "key16": "3tGWaJNrf51nwP7bfb4qFMQAjAGSm7s3uM4DCq3nWzqVYzp2kbESRaDAb9KUktTTqTLgD9HQ6C2rcqwJw4skiWmS",
  "key17": "5Euf2Ydp4VESDEat9cjuq4qjLA4tKDJT5bYgvRLPC5WHKx134W3AkNVv2Thao2LrqxsS4QKjNpF9ECHgECMPHgnP",
  "key18": "2fgsdyqT8cMihEYHQfprTmRZAoZAtaNS1Ec9ibsMFa6RPyBgDh8PP1qFfAToVdnicq3rEzspfbYUmiZFBJD7whKh",
  "key19": "3HwfScLD6kCgzQzZpwwS9Zbd83LWc2gsrWNR9Ntuq4Yp5L31x9uBeckRsLWfgiFUu6YjULn3ehjuPHrRPHYf6HD7",
  "key20": "z8RiH3vEdRDiPLBo3ZiyS1F3RKZ5AU4LQuhFR46PPYiCJjbDgXfrSBFzwpDVNFeEdnMGMXsaUmEMLnnnBYXBKWV",
  "key21": "5ZNysZKVnex8ZuzJEXmrouefR6qv4nWfCtFWaBY55PvaMF4rSxMRdmogkC1dqVH8e99EEvmzmEX3gsDgZTQNEc1w",
  "key22": "5318J35F6QeYkvYhbymmMMU7XKb3ermWreKn6wJrk7S9L3raR1oVhkEEkcfxMqoARsATF1AxztPEzVRtqRrkCmAh",
  "key23": "4atwSYh9EWLdgPajy4nqFEyvHciFZ5h7TL6VwcVvNARZgirwFJQJP4nANuuHzERhPNHosDLVT1FA4FJi4FqgbWGi",
  "key24": "5UU6Wffy46KD4yaBHjs5pCX7gEkSFY63diQUHyjikxFJERsUpqNxk29LGARQSP8GPFX282LK5nzD4Lsav9NqzUBr",
  "key25": "47LZYykciwkq9TPMi1E4Nm56Gpg2LD94vCtsKnyqpyQXHVLoLfQQimH5Y3vNJX6WisWEA7UgKoxSKjxYNJyEkCFG"
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
