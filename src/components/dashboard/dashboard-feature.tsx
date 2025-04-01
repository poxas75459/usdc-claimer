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
    "25pFg3R5We1581pYskPVzbadFqFndBrfznzu8nWJ3mKNqjgW81gzBKYvxs6G8fvdCyajppu1j9H5is8mdocDQ2dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNCSTPzSeLLCS8vMJAdgkCotmCnvP18aqXLRtFmiUdt4rPgkZurmkmgHtFbjGufTNbHfxuxyWtawvUS4wjnzMaz",
  "key1": "56g2UCa45kgsMSKz55mcYwVeq8GFnvttCcEuJ2RSVCTYQUM1JayjCocHeCsnp4bV9JgduEEwauEjDGbgGnqADSMZ",
  "key2": "33N343gFjHSfBvj2Y68yL8RZGjhX4UL6DKHenmVUNGdNjRttH31FbGTJXjeiVJ8DxJ8ogc6eDruERv4JLv4TcvtK",
  "key3": "49WbqXxkKi9xygykjS6Zysysv8AgisvXXzMRmqg7jFjtm2cM2LL17oRHchTq9hNzV76CZhvK5YWrorYxCypiHKWc",
  "key4": "2MyQRFQTNhrBoeU2xHh2psoAeKH7adt3oqExb1H4A55Jn8j7hjeEb1gyBEoGgmUxM6YTnRG69UnFdY5NFY651xVX",
  "key5": "53yFgA7zvV1jBHFR9UPi3GzzxFatYvbbb8d5pGtfE5C8U44qvsj6ENGEceyUsQGsf78byYekkUcgUhbihkSyDmRf",
  "key6": "2NoZsk3WbPGkttQHVn9XC44YwfnTtYNcWWi1EvTzPMvCTw1KqkpRp3KLFJgsDhrYezyAKaeQNdHBJBqUj2XA5A5K",
  "key7": "2Co3aTxW25FMhq59GQN7WXk1ntnRsJVeRkEHs8H4m9UkYtVkP4xb7BrrwZfL9Lc1DAp8EpdF8fNNssAn6Bf9zt7L",
  "key8": "3XZ9VPE8fZg6MD3SXnimRoqFgLzGPqPPgvXX8HKuJXr86Q1gyvEsARRFDP14oTCekj6ogfxoS7hTD5FGLxfcyBx4",
  "key9": "5SBQHi3qsdmcH2yB6gbdy21URFv6tLFcR41jp3j68KQdmMxjdd7jJuoRTfWmA7SDTkUuMMa3RgTtSR67zh9zLZ6Q",
  "key10": "3Jbujrm59BJLWxB8FQ6d5voBTGFiLbTvcYZjXDhgSL8sceXP92zh8zR9MgjongVb9iS8eMRpPcXzNVvsHvw8gaaj",
  "key11": "632L9hVwEFHsQz3e4LdzkAgwzXc5Kq87yn7MyzEekok2ufmHvGLJwrea6kMJCw4zwcriaoziTyVwyYZnAB27pmLH",
  "key12": "3rAH2PYn1AkzLh2xcWewQUmQacYP9SJsMzta7owfC5MpdxUxENioV2np1U1ysNXwK3V3HrffAXEYGU9Vn5imyPHU",
  "key13": "4nYrKV9kix2hu52zr3qwRcBk75hWnfUYcvAQr2SsMorGqNZf3XZXGvUQfJVUz5AW823DFMZVNEfiA3M6V6ZGFE68",
  "key14": "4dNNhkpq4yJ9qyimbQ5bthdQ7SFyYNs45xzpXh86Dmy611s4rB3sBXWSNbR9gsCZij8hse8whdHvu83UkTXvxBeN",
  "key15": "2JF7qtP3XPGZrbXrCHm7rZ34V9ZvXKAPjbhf9FJakeQ24weKuHbRd3iDbqAfT2TrxibKgBRFewM4No4ntZFujGb9",
  "key16": "484gs9Roo6KLehckfbRqKpG4BbmQKq9pmTUWns75F8jXqErXYn9i2ZEjGeW2PMkAoTPadcJVs18DdKEp2pr9HhKw",
  "key17": "3c1R59rmLbbL3Cu3CFwS68SJM1WjbnZW8yJjY99RxaTvnuskvEbDmFJJuJKza1gjN96o4upEvFunY361uGcYmbSz",
  "key18": "cks8NTUTRETHzw1YX95HbJHvbqPxu8ciQcrh7VKMw1KWF7jazfQobJ6wAYrFjRwTPW7tudjDVpwP3kfhX5BpGrP",
  "key19": "34GoccHtKPyAsRw4EFQX1RJnnD8VhFKQodQbKcTfT9qdoBjtUk8YDhb3EjQ1yAfsXXcd1LwDMsyc88bd3YejaQJC",
  "key20": "3xD4yMjBTKKQxAE2kByjzYLk7mF4NnyryQkc5kyxFGNFqHQoBm4GEzwtVJDjyPXkhCLzVyogpiLoNKHbJb7JJ1nh",
  "key21": "58fettxoEEZ1PyVTQTmNKPfK9iGTHQF3f4WiccJqN9SC4NKUBqVQG7iPLGrkBMSvewpqnPJGUR5HZhDw7WLQwKgY",
  "key22": "DDjjS1HwHsfb8bYGgb5RxrYYoKQ9amHXrcbomSssEiR2rbqgKJL3eQkDRFUctHRYvLxhuLjzSMQaAdn1DgeFG7j",
  "key23": "xs8Y4UtPfPQkpE7G7RYVJJYv2E7Jfw2y7BWHoobozFaRHor39Cy1notfHexzyeDejh1xFUFe3KpGki5M83fRUE8",
  "key24": "4B1cFYMETjAH4iQJXgHojaTgfKib2oemPVXHMnSRvVk5oBGsM7pfa2DdS3myCUdDXZ7EcdpKFDw1dLWP1Vh574vM",
  "key25": "2q7GK7sLcAQgoQg6t3vwEpG3xtAS4AFK3msSYn8P1n4xZhXwuywGt38NMicBCdTh7qKdoCayfxQd2cjWn9MbrgsA",
  "key26": "4pVQeNqtrb32AGbSrSFQjsbNL9b9tC3nHf9v3UStpP2JN4ZhNjsbZUHwXoc4DmenhcGcPoZGFWxfbrCXSDssMCyi",
  "key27": "35Shw6jrs5HYC2cNcxY8WDYAU8NacokgUp6q7ysrn7gn2a1dhPVz7wMpoJsSHEGVRQac1PywKBaijVvk9zfeAMX9",
  "key28": "4T528wy9TkzodWquiVJdnGxXrAgL24u6V9LFww23V1NnNFpSVoJ1xLs57DSG1WSThu5CHhBRGzfSycEgTWnsiVnJ"
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
