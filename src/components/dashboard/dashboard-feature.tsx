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
    "2mhcjZVetZAGhG9EYMCKaB3QU39D65frgaERejPeGezJR19CDzgCYkSHijYZs1YaqRrGAdhuteGVd2bWKtTzzT1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRxqyNiGbCQwYMVaGjpd8eCH7Vcrw2N5fszQzAZAwzFRjnAners4bZwj6WtDJmKykXwNy7ePDGx4mKu7XS9WoMk",
  "key1": "5v81UZ2svJNwVMtszSAaHQAy6Ud5kVZqGp9JnvhgferS1GpbjG4AZTFB2p3m98y94XVvPNGNRzfYd1cLiLwxMBAz",
  "key2": "486UVZiaNKPyJCEHHNoNWV2XEhRUQYh8ZJH5n1czf8dB5koQtNBXFxc1cvpUK8cpTbmNEsfWCUxwzNwBRt3jCVwy",
  "key3": "3u5rvt75bsQVEFMRff1h67psLA9bfPG9Nz2MFtuKcZzn2wF2s72UTiZ6S5Qe3cCTcNJHKZnHRWV6MwLVcea1VQSV",
  "key4": "23RnW9qU5TXfh1pSfZ2fbMzDDoHEReCWYmwDhyenRNz9oZGCxqNWn5XAkEcnNEFBEtjiwsoLhkg9zz32TLWW5nuP",
  "key5": "3wyyXJk7W6fYEUbZeDzZJcbJvgSG8i53qFQyYBGQ4XcxuVQhvLUF2wcKMBqf2onB5vNxfQQtthXZQQfnfSe7fmHX",
  "key6": "476S5pKCkoaB1o5YMpiU8Uz8xxH5qe7P7nGVVr8Zz9FFmFeY2BWQ2accyHchPoTy7uepGBUb6X6FCCgJBBZmnzd3",
  "key7": "2Y1SBBx6a4CtdZKofhUe7Gn5hzGQbDPFt1RePNSPLhd7KapPXbCtyyJedaneYN2ViqjqZJ6QnsgLYTvEjjivWZv7",
  "key8": "4T29ScW7cmjBT4iiUsN5JYh9c1ZcVLQiotCVtZE6nVgC8aQjQ4b5VXoSUykFJVgm7KM86i5G11w7spaxLCHpf1bJ",
  "key9": "3HPw2PqETECBH5WrFEDuZ7u2TghJZWg6jLCCpAnwvvRfYKY3yoo5ekRCEW2N7kbFNcFs8Yus785tHDuTvFyYzQXL",
  "key10": "WgAWSwv92BY6SvyqDzC8hXiWw5awEfCQ27S4aVjJ9ijixz9JwAj8tcwdqwTgU2FXsYwNTJTe8VhTDrbxReMLtex",
  "key11": "2QWcegBzYUc1NtNicZHqczHTTuZANb5FwXas3jZC1nAsw3nudrXqLaEsKLWwcYqSent2uVP1GjuBcEbHsCfStkEX",
  "key12": "2391xWdTDC4hgPKzrso8gLCHKRmaF6NhNdGuATodkhzBAtEGPufhKMmTZJNsPrVG95D6kMphWi39fjZuuTLeSAL5",
  "key13": "37oJu8GvRnt7z6WSqzY3grDo578vitfcXEjsVuapQqon1SkTSF88HEM7uC5bEnbB3SGvqdfniNV3Rc3B96iKG7Px",
  "key14": "TGvgMLQT7G9nH27xX1HwJbRZD5nwHNQ75CHs3QgaziebBZrBnuUXkUAgifV8yXz94Wxai4hsd59i1nMc9vBaCy2",
  "key15": "5YqBw3iQmP1qq2TjEHKzu4Vvs2hVvuxd8MxnCbGCqtKnDsjdyQwGn6sX3dy4gNHoVyEiogZQ43zxuFk12YQTQusV",
  "key16": "5WEpekjKw7hSWVSTups6HLDHHV7vB34mx7URzACz7RjkDT8iA9k71RJuFUpZv28vS8HZ8vNZ7GKCAhw2Gy8bUubx",
  "key17": "2QbGDBeegNPfLnCqNGk1QA7kPTgaQcLEWCGLmrnaKHJXji3teCGHcohesNT3K9mCGvUUDZc7T9ZE5i17YzvCfGB4",
  "key18": "4xNi5RaZ1QFvCWJY7KHCnMZcDoaL1QvJAZxigFdwAzv1Mwi95D4P7y53sJxLaBg6YTBzAyWZ4kQmqccdHtcFR5oD",
  "key19": "4oDYag8V2Y37WTGpBgd2THvhk88eN3ro7mWosd9Tg8U4J66sANBxHY74T24TqPL6RfA7YvnqQBjqJ6jGTz1zdLs3",
  "key20": "2nWGGKjHmMRkbASmUYPKqqQux8aLZD1aaXY2W1bCBMkTUSG9fYByaqd4yE2qfhKHsaK5yFCfTvgzqcAQXQYkrCCJ",
  "key21": "3iiwjSHrSYW4BUVrCAJp2CSyRo4WefjNk4Rs7rgcAZmK3Mt5cVKhCRTrfcnvMzDT3MV1ijdLq9eQqFBPMKwwHsbW",
  "key22": "7ednJfqKnYPK3hA9YHwk1fJxNbtqz4VekhXJxEernkSCEAy7xDaUPtXUfh784LXHSm4FofEPUdbb2f7rx5Hp9bD",
  "key23": "5ibkQH7a3X5rmRJMBdrM53Jr4CVjrtDHAGnE1sAdMDA1smojeWLSjx2yA3h9pYRhG9ugbeZKxQweBokMnHmYqCk9",
  "key24": "49Er3nBEDTwfcmmo4VemQyffN9hTgpfmLmWBVngy5hyCY6UL7QAZLCcxEXjMkiff4no4evnS8RSmHHQsg1me7AyP",
  "key25": "2fbijwuX1A89Y6U4Gj5dNWmjFKxcPhjfpPFywCR5bnrc97r6yzDREvz4btSnAm6gdRptiV18guJEJn8uc7JjUSRJ",
  "key26": "3BKGK2Tfr44LFhbvSoLQgcfywfBLYvDhAVk4QfJ6oTbhcQYQYGyNGCVgNgTzbFda9KhBgbV4uP3LcwJQg6K37BzB"
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
