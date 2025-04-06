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
    "eHWhVthYMaNag9LN1Bbmq6NHNboxfMZeVS9VmpHkAtNyBqT7mtnwXDdT5mHtmPc5xNfg5eNn4PmJ5XeF2DNfF6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3REUQuwYW9PUo5f51FDxqsg48JtNTjBCzxUbjSd5NAnt9h9UYb5jQodL2aX5DJF5bzHV3v6frAgftYauZfd9sztF",
  "key1": "2PV2TCteyDNyc4dYGVWTg7qMqaXpMGNM7j5tzCE7qXSNQnifdK9dxGLEBnYEwFZKaE4LW5egpgBWEF8N4uJT4etu",
  "key2": "2BVauvWuvuRRpuaMyBFgvjQqTaMYPpQH5fWrF55mrxCEFT34SqtYuTsEpj81wXJmdX6bQe6TnQGtVUbByci8JR3C",
  "key3": "5oqTSsccF7RLSSrhLVSQxspJkufTXxnPFaZ4eX83boywA2vsiZUeNaDCUd4mkW8stb1R5X2MQruQmFsGfdBpKYs1",
  "key4": "2TtfAtE15kte1gs9S2rMGVB4XXZgG8FY9pGyKq2KRznbYdb9tTtQbJRhVPxTXaPKC4gv4UrkkV73Y6a9ZTvwANPH",
  "key5": "36525dECsT62YDo3xVpMaBY4kL7cwjHTUY9Mv5ZhGokSUuauDRdbBeZ2h1VswGXRCzC73H1FjWUcLsUAoQ9FP7XV",
  "key6": "2KzFQG5dMzEf2onEGv5UfZCsbMDUg4e24rJbjf8fzS49BUxWGDshpstjGt9aZL3PYvsS7Xrkx9jyB87sJwSLmtUF",
  "key7": "5wm97GdkpLEfvtbWqJLLy7snHqU8L9hJMNoDiYyQN7TL6tN2SH1tRNaVN9Tm9s1DF31yChnswTfqorbbSmmfxB5S",
  "key8": "5zG1WvsrE3nQHLkTYofWALJ8nCv9QWAUEZAfqfE7GoV4bWXETn54Jf7pnzstwqgCnu2UrbafdGNwDvEnqFmpTGLr",
  "key9": "3wvdbd8DDJXt5pv69pYcvbeC3w8vwnQfWCyVsj8LnkRsSHdQNxRrR9q66HbhyGYUSmerQ86nLSFaCwxBg5tz882D",
  "key10": "5k99R7daw9XjTs2WQA3kssJoKZeFWJgfd32yJsQQMzKu9K9kdtEuvradkEU9BG5TrVVUwyCR2QRmq2eyvo897gXC",
  "key11": "3fgNDHE7zSp1n8tdTVE7Cx4Q5bt5maYPQofEtaaEKinpYaKK7SWwUHCdPmUHWE4mgoGMTxQPFHCJtqxdGummB7ZA",
  "key12": "pJAcwmUU8NYgdaa8y7oKHm7b8BWkBcpjVnXqdt81WiAKAkmk9f6XNGV5iPYVYsW2Ju1RmCM2bxsd7Jz4vBQpuSZ",
  "key13": "382kvvgTQAmyUX5Xk253ENdeGg1kmWgf7qSmNzF4m7ZzTbjPKcuUhvQAPrpCGF2tyEbDJP9AxUXSPP4T6NgVWgMV",
  "key14": "43NYbAybBG5yomAAfeVoRPopV2X5M7AZL1f6vasLQqeHBP7SXcATy7mPYzDEQ6RnpdYb9Aa42FYQpEFrbZ3NNCY4",
  "key15": "25MdfLa8eR91vkVNFNFjWKe9wQpUJ8BGBtrRa7REh3KyiD7TQjW1rPAtPhx1gjySiDbXt7J39s9NymJ6SnnEKuwL",
  "key16": "5VMzHcH7VAuszQpxbiPTbYrys1gW6aSa9sgzRSVtenpxS7kn5AAVeMQL9vQvzB3LibuonqAGmR2CXp3zMDKxXL3T",
  "key17": "4nbDqayBr1msDKFUDwobMagjpDHo9SUrstA3X5nRUZfK82vFSbh47DRd8JCnaNMdzvcW1qJwZ2Jzt2SZ1RUfekM5",
  "key18": "5mWrW61rmr7m4NzcnRsyhUFYPt6iHGsorGFJJ6L4Kam46JXHWWgoMxeuakgDk8mRhbTPg5tsy6U4ypZFKcF3XygE",
  "key19": "5QoPn9cv57Y1JpZhamJGoBgHdzFa1kd24qkb7joFVUWFK2odPkFE3GP4tjVtD48qWGDXBnVggz6e2Uka1XijRah2",
  "key20": "Y7sd52SZennqoWtHRFNh3sXVVJnEFdmSdCUS4W5MJRiUBatAPuqAWkBfhYY9KDkma9De4n2SwpE3zQEtiBxvJbT",
  "key21": "5DAMVDHkbmmSMHbjJckYYNLzCwn5VyZJbrdxjLfktQZ4DzjieUEzVrJNs5r9ZWHJ2eQE9KqgGtij7EyiHMeUfhW6",
  "key22": "5sevvEsXLNruKU2etow7ZKSipw7ob3j857B3o81p68fT9wB53xj6rVnBfzPoh2bnHfzhxneAASThQeQTFmgrwGAC",
  "key23": "WjegF8D8taiwEMc91dmKbgUhdGfJf9rx8AEDwHZbUTheZBQknXNsvAwBZsP9vV6SGa5jeqfxozuo47VyZrcsc8F",
  "key24": "4ABbjFv1MUhDRvG5HHkwQj58RX2rYs1YuVYurjRAJmsW9w2y2kjRcbFcdAnE55MqsHqMQJ36nKgy5eDJVhESiupN",
  "key25": "3iKQQF2k68YaaJtZBcFbHm7qUxd6yPkL5uTLUGvwAb1RDErshJBCVHKuMcJKbMFscvzsHgLrpaQXtM8xiXfCWmpH",
  "key26": "66E5ZN8t22eV2ufcaS3MMLrsSSwyKfKq8UgXe6CTcShZuHX5xCQpBEYdbA5qHywpfiYSkKVd9mBrpSDvsre9xorb",
  "key27": "4XZ8MBu68UEyZyG2uXXEL8kUYwpA9LyvE6T3qJPF2pRTtiXy3FgppmxqDUB6PLawvPqMDTpS9oDcK2LoXrZ9Ajtm",
  "key28": "4kwtSHHR7W87t3my97KuRA8pXy83ZwhGWDDg2JZMrbCrBVR7v2neFqXbyZ8i8ookfUp8StqkuwFLEu4YjkJ8aQrt",
  "key29": "2eVUmXsZAMppsdhEEFHfQT5W7BWUBN9u67fAEestc1bwW3i1qwzKvHwNKLKJHXzDfUZiZsxT9yVkyaFysYsi7y1w",
  "key30": "4CQd8inQMLA8QrKxq7qb2E2MLMoaPpQwkje3NNmZRsYhv6DzfhUgPFfpF5TPvNZ2sYeGjEqS6aar12fACPrxLHKP",
  "key31": "4SLmXr8RncMPgVvwNYfg1tPSjAheevSVNRzo1CU66djgYXSZKjtgLhnCr4VkgktjAWazPUBSnydYVc7FMWmhM34y"
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
