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
    "4kvp6Tas34b82oEB3coF7WGpNXeLbRRfChbHDzC9yswXcCchwn7qW1jEWafDpcxqNS9bifsErTUR8jC9bAgS7fkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g6pJEbZvtjxmsGoyXt54eVtDLPqd2RpcfCnviRL48uaPRFibSy5b8kx5DVj28QgFwUPbGj2YAPL3DkuHArdCZNq",
  "key1": "5EM2r6iy3w9TETxhmYZLxW4oN69EskwGG3bLizkogeSLyD23iy76bJHCVVGnDjDhch3GRYmWqCjYDX4U8kUWz5Jt",
  "key2": "5mA5CvS3JkisRcvhsP1KHqA6FxPr4dMXAeWK9ExAX9Qn5UYCRtdUKv7nsTryeEexQHvxhPpFo3gNidiFcybYC1Af",
  "key3": "4GcrmtXjZJnwm258U3TSsrLzQpZUhqkEuN8eCg3bgBwWwBkata7yn43PkXcc7uZqQWAP4gooHhBj3qczob9jZ1Bh",
  "key4": "26PnnJwVNNUXLVeks84iH4Jj56WMa2UDGkx3j4QNLd35CUyB4rqpPuYfhu7fgx5zL7kodDEyn9pyDQjKHKPRxTUr",
  "key5": "5GVsVfH7ismaDWniLW47zJAH7VYZgVv5AU8Xdr9zgqTW2ZrGEwz5msgwKaJkNPgapBuVNoCh1eenPoSd8QpUtsFK",
  "key6": "39Eeh8a3cb7RVHneyUCYB6nE4qMWbRXnV2wH6xfuu32B2yA82yQ1ySbxFjpChCTEjmeXUHM47MiBYCnpCMQ7fT5F",
  "key7": "42RhELPC7kmNciv5vNzpn2kBPsfmBR1xjmhe5AN2HkLZw4weWXYkDefCjH7CF2CUHutvkPUf9zpNXoT8Kyw9gG15",
  "key8": "2tEUWWkgroW6wv774UsJ6mVVRC4vbKb69PT7neJFyt5XxN2YwYt17RtCtMUQR6TvkdVbmjoUUmQXiBZD5mi1QbF4",
  "key9": "2K22Eao8xodUADBaeRcq5xLzuB3t8jd7BrrpAir9Z2TxHM6aZEjGFnpbne4n5t8tDqzyJo9XMdtQfZtGp8HACQZq",
  "key10": "4unkwKaawYFvwv88t9eAgq8pLYLRNxPcta8Djg8ibTuRRZLSGZJbNTVy1WAk5UvegHWwGsqiSHj14P8Kdv8m2NJ5",
  "key11": "34EthJgw57dVpBr31VMiYzaChqWEgshLFrbBaxJNjV8isYm9R3hLN1oy83nHjUdxpJ5Rz92KCyLE3ZC4YDBwGGuW",
  "key12": "31N5cduvf48qatCHaoeSg8gfHZddQJTh9pqYkZnczuZ38SHxMYtQy675MZBPE3vQJxCQSZKU4XAhwJDCV6t7Mz1N",
  "key13": "2pwCuGJ8m7dcyi5TiLpBMpi6muREmgzgWfAqhmgpZSEzkG6GHzSd1abSwqjNC7KexUSPj1zNYNjKKCBpCEsTGpVQ",
  "key14": "4Y48UXrtEyPwHXbSR13Mn7A9uNgcgDN1zYVCQgGJzG46v6zFaU8fuQCGecq4iYBiqfY8ozyPjh4oF1thaYMfNRYP",
  "key15": "5oDX6Z4jLMot2fVRcYnLod7SarYfBh1vn5w6rDfxfiq6ojneSBkVKHWKU8oayb2VyGrPHUtWtzUzBAUCvCbcqXg2",
  "key16": "552yYNSXsskhciEXPyPLE6SQXFiY6AWuqZ3dxSw9mYnTHohf7Jn1DnjJ2z8BSVwivHsnF7WEYBCPmLyNt8RG7dBq",
  "key17": "3XbqsvfkvhPMwotHhjxZiTW97yPuDBgsJdwCznouvbHxUoHjrSfis3dpaXdrxhkUrQ8eyuq2ir9CJmnJJdYD7gq9",
  "key18": "4g34eoinxDprHZP1cjEUggR5fgYEwn2gnRdB1Egoe6AYME7B5LT3c9vC2T1oehzB69eGfi6uhgX8LwB369fVJ9WL",
  "key19": "2cfNUye8ftFPwRVoNRuK23sTaKjrSSMNX8s6PhGKpjFVFZ3bqpo3CU8Uav8ZSSaUXD1wBFL6wj1pVeshAnvgPisF",
  "key20": "zQcEcrBvnJRPzsNbYN7c9HkLejWdhW4YADWDfY6Rt1SERHE6GAfGGe43qAitcp5imuRBjv3Dvv9Zpj5AwEyPsYp",
  "key21": "2pvZVsU694Qcd3tzdcnhy4R5SgvsAgsFpaxjAvNoiQiekyVd2ctbxPmNSTTHxnvbVsNvURYeY9ewYWWj24MfZFSV",
  "key22": "5DNhJ46sogFn6kmUcTaeNaAkGjo5mvZ6m8s6pXMCkBuGH8dnJHpULqeEJi1yGFGCkhCmno26J7XN5EqjenVAovrp",
  "key23": "RJPvtchKKrZoTm1Y3RB6xBeXcKULTw2LqCVRzgiTLD2JPLNEaTKEVVANUK59z6wmZAp9eatUyjHMSuvCV362gK3",
  "key24": "4kNrfgyQNWnHQL89mWAx3yG8XsRX4QorxwkHq2dAkTb11Cbhs4R4L5MWfEr6G1JEaD8D8S74ys52ErUJw5VQHS9j",
  "key25": "5xiXS8Q8haBnwJDqeBfCFDhn6Wdc23ZPpMaMuweL7tKG4Zr5LcEZWjhcuRCFUu3z1RmJBG8ZGy9EkK8Fksr4wGxS",
  "key26": "2Pfs7nw9w1GD2GQQ6EsUrohBRjYR6UTU92txrD84hi5UQdYqp8W8QrcZQxeCH2hg5raiDVG5zkZoC8DZo8R2JSyH",
  "key27": "RJb2JtmGGafpuejJi8hQSuEXfmPr1UzyLkwCmUfGJztSLc877QYkYugz7PHAmmtrtU8WiFyjzTNgW9P8w9558GR"
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
