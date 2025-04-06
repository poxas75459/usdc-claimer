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
    "5LfTdYAN3FqE7KEchmrbZGfeywV2D9m8S5SZ6krybCkBtLHopLJ3945v9ywEBRWo4Erw8TTdZqvjBUKqo2FxPMyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRX2hEqkWDyBcZd9Msu3kcWKPK8BCDtB9gLopSpT6RazMyCL7c1DFRBdeZNhiN9sGVTHVjdVEGumcEzChMcAdUN",
  "key1": "4LQDp72u83QdeCP9vcnK7NgmnVtuQk6WE3D4orFE26y8zyAmrSHqtAM4tcMvpFweU4mrotzSWMgJWedgjEMu4Xje",
  "key2": "4u6Rgk1ZCXaSa51QvQPN7v5UjD81hUqvUmBZLu16gJEN1uPScp2uZAZSQ1nspALSgDoHcRVVk6YLpC1XUCtk7C4d",
  "key3": "2fCaxjB5HdKQFxgfbcYZ4CPbNJJ9s5N9BZccCAE7rhsDrBxAFiHT9aKo32pmjixHkaBgyGzEfXynMRRsJ3MqjWKi",
  "key4": "3c3MjTE7ruaFYvMjdNoHETJ6Wyp7UFWQyL4Y5mK7YSxBdcsGDG5JLsp9wNDcC2MrbeLiaPcDq6v3wDhQgoKmbEnY",
  "key5": "56cJxcCNDU79L9TuaxfB8aSbo6MZKr6Mf9NQtsrPLtm69zGKSUK7RMpcJUfPbYDRK6smxiUvA7rik7DS1SiDYsTn",
  "key6": "66rsp2eT74fXX3nKBNVxz5HkvtwvekMaqRu2CgHtktk8Z75x6Jdb8oaSDtyuEQzoVAhG97915eUHTX84gzZie8z1",
  "key7": "AXDwq28HoayZ9PzUkvTr9xZ3nzLaJ814eC4SKGDnatUm1XCZGhfSWGuUfbQgNZxoZfXsx7aUjWSvmMcD4hJpJCx",
  "key8": "5c986p38Fv9TDKnsA4LU25fZksGrsSiTQN4fcEsn2BEkRA8sjcvqLuQmGzibtcZhkJhxgoV9Vn1VAkRxmD4ZHWLi",
  "key9": "4RraN7Q7je2JRTvxfzTU9FMovgSaWB2JFTqyZCetTKrzs7wkCv56JRAhb7T6s7avjjdG3UMcCQTbkj6tutkCFXar",
  "key10": "UTw9kFwUSvChXF23zSUW4RhmX5WhRbmSk9fy52yuB9G7tbd1KV25KPiFjuhyLipdRAbgGBYDwHwiwdKgxbug9UV",
  "key11": "3SkiDMWr8AfoafAZvkb9T5u6rJXy19mJE7LVraEjtMLFrLGqJN1ggiZo4Qf7d7LpSyLBxqpGaB2Er18oy1jRd4VZ",
  "key12": "4yXuhjMubw3UL34MB6ZqwugDGwgVXdQ9Be5uX6zocE5AsLt6QTMcTChv6vXduzP6TWZTmWJSYe4CtguFbWfQe74c",
  "key13": "5Spr4PfhUTdAwiiGLXS216Ft42eEeEy6cqU7kP5RjapKuRjt7hYQ4ug53E2xRFqsxSTPWKFeuiEJYA9LPZB9gWgP",
  "key14": "4EnBASR8huYX9kn5Dc5t3iDP2NXvABuw4uX4HraFw6yY3JQFwDfAwzxbeb9mdZ1gAkL77qb7yKBL46zY4jjcNdak",
  "key15": "128dv5mgSbRvjHfjTrgBgXjFw9TGqE64xVxnDjaSzp9seVQptvKw8dp7mXfeatyAcyvwpd8DG4fGdVafHXaybtfx",
  "key16": "ZaHWvfEPgjUeWM9iAxeG8Y5HB8mYjDoSktNepfjhBAXdE1ZCMFyyFK2LLRYYHNmkH5k5SPw6gtFW2iCRULDJD8o",
  "key17": "2Lw7cXnUzeym3gpa9KdZ7gn2V1CYs1LfZ1nnLmuzb3LkVX3g5aaAALP34uVitQXPNCTBYrmwKm9y11GUbzN7uHwd",
  "key18": "443zxcs1HSnrY6VrQZR7JSpmNRe2XXazLjVvzAV1mcQn8FXvGNfj99vxA3y7qVT2PuvLRvivbTG5Ff93toY6nzr8",
  "key19": "3wFZ5ztHrJQ5bYk5gHPAdFv3jkdM8z3oWe4YjCAWjymV3EC1XUmwXiCecSXdUVgLm5ppWuiwfNKiffYaH31Ae6Ax",
  "key20": "5XrpY1cGJjHgUrefnZiviMckVwo5Km66YScrZBYujYGW98ot7yTqa7TbGnfM3cyS9myuyGQfWYwHaSNWRycPLJri",
  "key21": "5o9nun63opjj4ZDj5SEXgZSE2cWe8bi9rkUQB8xTX17mm2mq8YdsFofBVR8zbd9om1XiN2FB3HauWWwVBmQX4gwx",
  "key22": "51V1Ab945BZHCK142dtwfW8nizK4TdXaxpfLBws3AhWgLVpgNrSykB3KhFwfkgASG7B1oviGRDxnVm4vcvoH5e6b",
  "key23": "4TH3Kv5c7tCYfXbMZPsUMcYeNnsocwTrMoSr7Yy4EYd37zQ1ge7f2aTHkuYuWBomzGDVLy6c1fCKwMKLEbao4Vcr",
  "key24": "4kHNeBHLe4DXyKVv4XSjtXVbs4vtKAQn7Jsyz7qEL8UVpEMewiZgnZVmTRw9b18uby4VZDkc2GLpEoEHgP5Ka6uf",
  "key25": "5DZzUxofpmeNCVcrr4dPtZfUsjsQyaRocPMJugHEvMQBbA1WUL5CfMHt4mZsnLcQZkRthHXL25YM5XWQqDUdE3ue"
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
