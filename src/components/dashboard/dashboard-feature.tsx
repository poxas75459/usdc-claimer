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
    "K59AxhcmaL7eRu1y29HgvsqCoG5tjCjXWX7foF7XuZk2SnHMrrDxArHu9weDoFjzwWMavqPB2jc6tuj7it6M4eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LXVNJ9uVBdCmvFMpkCF7hSAfgwubpdU46c2nvmxePHQ11aE5Z4xpqwiEYns4Qo6SXCQ8DzMXksnAxr5SKE4wyb",
  "key1": "LYg4246ocCfCQUoPazcepMy7LvfcbefeMdza6Exr5NbnYiLmxoUwcPJB85o91SrhzVYfRsfNETtmHuPiFopKekc",
  "key2": "2EGDJibZFcWp6K23WwV1kKd8VYw1YEppi8EZdQ7T6vJ8UmXatsz5HacjYixM9GmAYCYnJNbJx7nn5sCU58Vp2GG7",
  "key3": "MwYrgwYisu3197iYxN25AvtfY6FhodN1QJgzjkdoG67mHR46oCY6uPgQuaSmUnwBnBu979hjNagGFtNYvNXzDVp",
  "key4": "4i4u6c47B1DeuJEPAESaroGVnKmtraugtNWnXsR9mWKUvnRiazHYn9XKFsjd28xW2PuhZNhkWasMTo8Y7hgLW1QX",
  "key5": "3d5k7gpaVbCEaw7EGRhVrnWyFSd1bv1ycMhXGZQFLxujdCd8axhvZZYayxtRxwhBPLxpk5F4tJZN4wFv9rJjXpMo",
  "key6": "5TVLCJ7X8vB3cXTqXXBaNDE38WAMfzBHnSTNEkwDu6GotpHKKKaMAwFV1t5XtAb2hib2omjuZoYFNMPJS7KcPXTr",
  "key7": "5Qh5TfRnjr2dvFcqHb7cPeVpuTBThRBh6V79ttmziUoqmh8BoVSAzXFqXZneH4zcG68ScJfzm99L67vLLD84xsHg",
  "key8": "62mT32R18CzhUKjsUQj8gY29mprqB9iqyJT7aZzj267z33CA5D7mDnDyoDbzKGEDxwgrGAZSPjRvGQNd72vfSVPd",
  "key9": "3JjYdHNePsPg46saUm2DDA7pbhHoYE6nunmLWsAs5Si7tMrwc89Gkbop7x4kS7hsiKAsEJbmtoBehbsEQVpxVxFB",
  "key10": "48EcFxH1xg5k6GeeZc8eeM7yC57sDrsthrRh158P9qBxUYPQye8V2o2NjYDtdqXTxYR3Yo86QqiLuYnyGJZmuLMx",
  "key11": "3Ls4ctQSTTGE38QsbYhdHGMBUETb6a21M8LuZGRn9mqBhTn1Jyv6XKcgWFtzJEYUGeQXdnQSrZrGS3K6KpeBaBpR",
  "key12": "4fexCrJrvCQW137pvS3LEpdNCQjjXVuMm1c138xGtrzo8aWWMt8MEzy31ufUUXZpBqw5zdVwsY58v2pJk8VnR7YK",
  "key13": "TmVpZ2dTgwnSxq3DCHWzXEyjfLE5DutF6KYR1ZZHmirPytyaqyp7GuxfkDRxuVsbHbngaqfSf8GWvWZvHLLjdhd",
  "key14": "4M6J7x4YPwfHQMkjLciKVsDqia8LM4T39v5qPY4GU3u1SA32HCBpqo1YTPaCCp8xPXzU12Bmeuw2qLh3gQdtr7qw",
  "key15": "hhNanSiWEAyfPijhSmR7Yurvw7CTWTLD1Tc1AHkieDKqYR9naFRWE4hyM7QxK6RgvK8wLXXQpGScGXNdnqnFd3L",
  "key16": "4GUXwJ6b7cch9M9z83c8k2Kuiw5ZHuj2YyqeZ8i33VYn1mRfuu78A6KvxHXKJ9FYggkM6fH4npVs1D9WT2Jap5MZ",
  "key17": "5s9SAETo9KyGFz2A2mdFurNTCZizjoQ2gp3SgaNve4YA6h815Bo9P4oKYwEPJVZU2W8nAsTmdGJVLuD3Y6R8q6yv",
  "key18": "45MiA9rt13VpQGccHfU48uyLe9UhHQA3C6KiRW6keNMRrdxA9oSC1SgcrGCyC9hF26tkyk6XmAARYwQWYejNfy1o",
  "key19": "3JSfFtpyScE1tS6kCw8HE9JNu65f4STcMNU1RCJQeipveo7Kg6PQGUPBSpqLkzbDyHyk5v1rjfapPN9S4XAePWmZ",
  "key20": "44jZVtjuEfizBb1mtbm318jQbLN726TeTgbCte4HYHfymc7T3okTGQU7eSpEHhc7AGDFb743LR75DYCYTqZ6q3V9",
  "key21": "2NZnpHunYsc493tmCAXxyaLQNfQFcqE4pMuAipoqSiYiuAbFDKQR4TacW2sMmav8GNrwiXCDVFNifaYxNHsTXjuS",
  "key22": "bSivdDahrMYvQVhTBSCP4hWckNyWgNhdxvwGhuMKU4dnSRpHLMmPXiNiAdXMbm1qmQGKbmhY3YYqwN3jcfaQGsy",
  "key23": "2ioa5YJkNZGaf8BSGePJyHw9LKjM1WxsmvSezrQz8njggLHWs7KtAjuWM8gYpiWAVGgDopG3YK6kueoVYRguoKRS",
  "key24": "62sCGBhfsVyjyVonWHedxAD6hizdtR9c8VKw6q5Kqaag2SBjEnAd8MVZyF4xDvMQLyUfE2tEmHRPa6fdmuhab7wX"
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
