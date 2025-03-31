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
    "4T9aXXXAQp4rP8f2WEnbvXW59FKbbtrDx76MhAjbzgbE7doWNyTm15ifvxhfU1dVJPDJzqUDB24qmryyDR8HiA3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BsNck174jbbi7my3gM1st89HzDt75XcH6TbVshWi7yhSVeJfU4zbbfskakGSnBZo2tQbyW1SiEyA1RYPFWkj2b",
  "key1": "25mEyTLykmc8UdNZnULPHRc88Tysxd226q4WktFJRnKa4d6NXsDwJMgkELCZopq771DoiaN96ws4rNo2HiEPSE3i",
  "key2": "29jZseKnyVYyecNW8maescpc76iSV3o47WVGLX1wD7c6z8Gs3YhKfv7y8cf7pTtSxtcDVzikQVvA1k7ErmSJpoLo",
  "key3": "4xnyWvY3kftv4C4miXBJBYMibkeq6QFKpoqfoRJxeRxrv8KmcHYdN3hVejx5Pne8eHzTCNekHc14qiRuLTMep9Hv",
  "key4": "3hf2Hq8ifG76PTAXhmom7Vcii6xZePhk87EFxoRg3MYAamJvW3pLt372wzvumTDQuQhNWU7bLjxgz5m5bpxxC9RS",
  "key5": "4kLiMCURj4XGGEvcrNRn9TzVz1V2fSF3n6QqdbgQxCWRr4ZQaW1CBKj3rALsD5dtkxNCaj5zQiZdJRAKfJyQzuPZ",
  "key6": "3khNzDubkc5Z1m5jWyW5Qnc3nuTsPjC7miVvke5eF6WSE1ZboGCZedV9AvQwVjD5zysF9bVKKvJuv2u35GB8JVmT",
  "key7": "5NX4ofU9H3KncZmu4bJ7GcJ7HP3zTtQkfjYynsdHGZdFi87V5JU3f2xLvvN1npJeBuzsGzMaDwYJMSZQxkWmU1af",
  "key8": "5sn8ezuc191pjN8eVEzb4ThyogbxdNtjps631XBGjpBvxRuTixq3ggVM2QyhWSRLXMftdHJVdFMzkHET3QJ8pbq2",
  "key9": "W29sg6D5DtwwGm7UCXe5FqbHpYoGUodTMMfp6w6p2PNN59PGBStVcVwt123VyuXnfHPQX52ndMErksBtzHJCqja",
  "key10": "4iDCV7jzVw7Y88MbffT3qNvsZyqfS1wKcynbCvorjp4QMJ2aWAheegohFAK7eq26dt5jZsWSCU6ebgdiCo6vr9v6",
  "key11": "4jY6SPMxBobGgVfUgeeb3vkUdFwQRbsVa9XKp83CwnckXdVjc3sqj9jenyPDA9frk4scr6AvCHhYqkzHU69dvHKE",
  "key12": "4i1cEpeYX91c26Fcuae8YmwA6Q7zjV68dtWjvQPSKNrKBv6rhH8WmXBn8DouVgLExctfTJT7AQgxkV5GwgutFVfJ",
  "key13": "L6pc9PoQjZewjfazKmkmTTqZ1XaNbi7xt2RhvFwhgWUHtMEqZDPW56ZSuxhhGNvGv9zugiTiuGQbh7YcMzr9eMd",
  "key14": "2pPGbPGmNmmqNi4wA1w4S2qqKRTmeXbKtTvhJVSzQLivpUs11kKn1Ar1b5jfQuAoZpWKurggrhvzdLZhiN1BAbGa",
  "key15": "2xtxrjSspyjBFktajxbqTGsizosWzcDkBY86GKhNjjeNwqBXoFgnVJHDbGtgaq2H59UB58rbsu3Ywmd2H2r2Nmtv",
  "key16": "2G1zEPhpEYs82gKESEQwyUsDvPpBvXpmqpbP694CkKVhzJqnwfVffbMCeEdmtbh6dfBN1vPhcpek1eTXL7YT1BKL",
  "key17": "4inv7ATd7EqT7TWuJKJfameQBkRA7wyXAaRgxnqxNhfLrVJw5fRV5Uz4bojtXV9Wm88Sov6P6RjcvLvFugqn1r3",
  "key18": "2H6QxKqMcsvdoiMCK1EY6gJzBAGQUpobWgDxzMxzGQRpJkBPDa79wP4vUvhy3tAqPcTkxopjrNbmmEHcKwsfQQsD",
  "key19": "7CcnBBm87H7k53un45Xe7e1LgRb2dHkETixWdxAUjcxS6ors3yxwMGuiMAQpmCR4avAiiFBEurkEhx9XWTN9RDm",
  "key20": "39d7opHFXxh8vj7D1WFYMNtCbzWrRmseFq4471BmrrAZK1QuZ9614CYnn2ruTn8aK1xJUfAMWAZEos5MiQJJKXpz",
  "key21": "567h17FFw3KCiaVqpMHr5uj48qLaYkpkuZzn6sKStLTxuCUVtpEQPk2o161QJj4q1Zg7tijDnedGSZFN6yFPQJbq",
  "key22": "4TbpHgGFtF8w2yKGGaNHTP9Kf8H1xcdhL1xVWNaWY1KPqLXfSm6kETnMvYiGQi7QetpoP8EFvK3eYuKk4SBbgAyc",
  "key23": "3HoAQdEya2C9cjg6o5VZf5WzFE5C4EdEotav6HjnxtVmoYsa92NhMb7JHhoZRxUgDivpubCxCo6eriLpWKf5cBqZ",
  "key24": "21T54P2CvatNoSmthyYxqUNU92rzpjuKTCeb5aF1i2rCq3P4xVwsuepTaUwo1r8aCoFrYpoauVqtNZzjrE2s1E3h",
  "key25": "2jdfDmWnrqf4FSyk1piBGXAoZMvD19Ftc6qAAtSq8NE6KQ5Cz3ozSLrJtYrLX2R1Pj1chAWb6rPdMFb91HtqV7g9",
  "key26": "3Rxs1yxWinCRrkkq1weguWFF244apo5sacp5qBVRgpN16LPGGupocp5QyCrX5dbgM7mHFpxeCAo2nrVHYNqaftjk",
  "key27": "5fffdp8udjYHTfFzBcL2vsQnxtUij896HeSWBsx3WL4ScoZ1MBJkoq8osffn2fuFDhB9Ui8vVGqiuVJErwmeMv9X",
  "key28": "21KakFrwwoP8N2NyH38N3mN5tHt9cTuyMsFXDnojAQuGQmpPRMgKdhZ8mAKaktcuh25QTogZfCEmt1F7E9xTXVJR",
  "key29": "4Y7kXNpqQDGRvh128v3jS3hGwc9gUZK7QBZrvBkeFyhG53BoSaWwUrabyAy2a1jvAPHDECv7fzmYGmFdo5V7y9G4",
  "key30": "4WVQXYkx5rooQ1Cmb3Gh82m2X4ayLr7ucNrrCgAfJHyKjMHNH6W7fhY7n9j1zCHo9fs7aH3o6dJycngT8SPdqqZ9",
  "key31": "5QZWmoNqAQ4J83J3QdcF11NHCPxDjGiBzzxLHugFKq6L7YjjrxyMJbH7yLHi6f2qGWJCTKoKCYCeZyfuzHAN6DuL"
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
