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
    "zRhCyyD9RhgeUdtVkFHprvimn4WQzfhUKjqzhm11hRGjfEM6CENikUQxtcDrMDcxE2kmEzWFdmBGwbpo7kU7yuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LWY22Qsp6Dr3of28wH2wDC2J617F7pBiZRh8vSHfuCkoc4doYnBTtAkxVhqANGP2LaDc7qZ9YWKSD1zEPGxrJ5C",
  "key1": "34v3MG4dD8ZXq9McDnZALrLDQmSaNyymoePEHYhDvvFuVmk1iS11b5g8eaQoi63o6evGyGgg1GMifQkrYxP8bRFQ",
  "key2": "2GaEn4a2dfKDi31uf2tyVaHvnNHfDabNzywPJKjKBn4iV9nqrcnaTmcD4R16tKg9Zc9uMS9mX2RPjjaZJ7Dk2V2b",
  "key3": "4CvnFNssjtXSptkHDjFY7tvbqLDd9QM5UQsaMJh5ZJzttHM1rcfGzkbBzrVSFeTzx4jqism6RLdnpGdkMtXT2piT",
  "key4": "2txDb9vy3RdDiwhnFaDXSQyk8rYSSfQjApRx1P4tzmtPGASN2GxeaSx1Q6Ykmu59tRncdPRmg516yTxrwe1qS1Xs",
  "key5": "4AvrZUALn5833T3qQX82D8YCxWRnET2c3Kya7ugEJzqWGfBcv6cQ4j3ykZxTBnQ8oos9UxqryUREfiuVKcxEmEGu",
  "key6": "YkaCEDt5VXjAZjUpD2YHaH1dtwcFKVG2PZ6EcGDtLhy395oX5rHYc6bpFEQw91BGd8f3Nn7yQU1MbgMoRqga822",
  "key7": "3NGrrbzX9UY5weD1kMBb4dZ2cYaaRgJtzbKFXjaQYDUSKaK27FJKNu342iFHbXsrsNfgv8G5g6CvZJucRac4ikJN",
  "key8": "5b5ywRKCaz5xT6KqqKMZzNSxBopjmVPJ63h5MCjs3bPHXNqw4Ykk9r2TaWuNPGEjYeYzaAjiLVJsz8dozAPjcKbr",
  "key9": "2Bvz3zrjACWu8MkBP2NY6d8QVkGY47ghAGEAiCSAetycLtDRYr9cCh18bwVw9PmkWpNxTXfBWBU9GDx6b56Ne1wW",
  "key10": "34GzeKBpceuMUDxyvNyrm1AK4CSfexnKnXCtJUJA2yBPoyow4r89A4Wo6xvnhXMbvkdF33sB6VgWmbS5UMHVgdtm",
  "key11": "53PTheEjrEUtBibw7rPvxMfSS1yjQhjWPtncroS36nk5QJrMui8KV19porP2UppeWSjvDsEPeatQirKUWMU3WoKs",
  "key12": "2wy2D3zHpXdKb1JuRUL2RXRMjhTTQjeKXaYoh49SnK7bt63FBnawR6Tf719oc1UHHtUzVCwY7UHT5mLH6nXZDWMS",
  "key13": "FygzKq7KU7u1e7WeCLSPiMHBTcgisf5aReat8advgobhFF3NLUFGqab5zafhWKPD1511gu6t6d6aAxB3iqE9669",
  "key14": "2mMQwCPuB9Qz9QxbM9XfavyDhFxM66sz7hSzgjtXumYqrmuK5VJxzdGCyWzMMKo6PqRNvoPX5RxYtc6eydZpV4Xj",
  "key15": "4xx27UqzzTQPQuZSfsZn1YuMoXx2mR61zfsHXpVJ6TAQPW1M7oa3koEHoeDBPZgE2rsjFo5FoMGzpVjeoJG7rfmy",
  "key16": "676nEToosNje52ZD1pvAuaqF4UHgVgNdYEGNWy3f6M1NieutTJVvKA4RDe4fm7wouxSoExuAcTQfPYBtKaHyVz3W",
  "key17": "zyi8yXYqjnjFmpKzoEQLL3iRXNZS2XdaX6MbhZ9Ke3D9K2qd8L8vh6XKLoCukSqnTBuKi4UXKKkvxdcgRsGCTnU",
  "key18": "ZmZvo6vE2ekYjbYmCVMQ23pqkpk94m4Ntc7FJmQXBccGZE3efy6h9E5LbyJ8Ag8JZJqowxsDzeYSXXWHwAfHis9",
  "key19": "4tr8ZTqcX2yjUYf2gG8QkCnE6iVL9yKxyWNjJ93xyQw6zZx6aqG8KCGzdrxFUuputucNSJpB3dk22XftE8iNSFEX",
  "key20": "4W1jGC2hXqeiUXNTPLmZt6eDAzM7xfU6Gwj5BzwtJjRUwzZrhJ8vrQpYpusvntC3UftF2EABhZegNz9ci5UbkvKo",
  "key21": "2DBUNCEzwavoW5P2YZMbZ4roRNvK49CWFm3p2AbwvH2cLt8Pq8h4hfpBPiXQaAjCZp1eChD8K9BtNdEHWzoU7ikc",
  "key22": "3LckQHKQN1Bxa6Bis5wM26J1fJj8jsFg8yPjv6gUYKxKFoPQzmwWvN6r886XLYD2oCnnnB8ZqnYa791LFBKURTzD",
  "key23": "2h7gWS8cyoVfs3EVyLBfuipy9jt8EVjDtgGg7R5u7cQJeZKzoACdyuNEPRTYYVw9vWJJwDk2xdNiGSWuZnDpenwC",
  "key24": "4UmzrbqjtSqUqHft4Wa7vSvU3VvdkQWKx5JDtCL7oRGCQaeteeBu7JsXTVwndn6Z654xnHVewFY5U5VpXvob2VXX",
  "key25": "63Zmz8eJw1vQ2mancGuuVdUwrkExEMWsMLgQoFGetCxaouR5XfenS68JokTL6Td2931vseiCGTCnLQ9yChym4Lz1",
  "key26": "5HkLVVkUq8QZDANWH4kaZPDpCLJzqgDnw8HYjFn6pWHJwejPYPeCCWTB6x5S36xMovWyTpJzvwM7z1A3ZbdpmUfg"
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
