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
    "5GEbHhMbweBUakjSfS9p9gGRsqFtpnu4EQDwjMKHMA3kvUcNEE5ok7CUXq5WGWzsrWf7VraA59hoz36z2xENudr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WoLjELfaJtbSjpkNXrdJed2iWyrAcHzn9dfexma971H9sTwbrid5uo1hKBMXUiLpuD2KDdUahNUnT3qzdWYjGft",
  "key1": "5nkQM8B5q8Lr6ceN2RW4hgiWzHCnLTnthAa13EjTTEqDSgardoUpvTYdju4ATC61SBYuM6LT2ns5RdteyCy5uYD6",
  "key2": "2yKJ8UEDL8ujdLpjWAPzXEwU1dMzfR9gBX9UF6Y4YAetbuU5rTLgeW9DFGifutxYyqCZaVsRAKw4UxczfC2ngQJT",
  "key3": "apDVHuRhquQuqj4teaNQei6i8Ag3cW9n3LedpM3ezcMWzhKy1qhZXyPfEy9fkMqxaaGbAEEAjWL493iby3xyXHF",
  "key4": "3uMyHYsAdkKPHjGD3eYkEworE1VELRrF1B5Si2Dqij7V1bdzv3LyimkPrfhRXDjiDvbJ9K6hXjawVcwqgEQmBgcQ",
  "key5": "5sCW219naC7Pv4vtWG6cgf5UjTcQPnKAXK87kAjLayKW5RZUpWcVjdDLEpgXC2ToEWAQDrK262c2dRs7wL3D9NRx",
  "key6": "2MTDaCTmenxD9WfFntdGqAdmXSDBrYfoMGRboXW4dcvmhHghARgUxhdg5pTfCqBYm9VESJUaPZpDx7chef6rtLXJ",
  "key7": "i8bTVFMb4PeqpLv6QBr5tux1WfwJeS48iwf2Mn9xpcv6sfSWMqtxckgfYNB4zAADNBuLGaBsb39KZ9xe8QyqrKM",
  "key8": "4A1NrUdce8a9jqMZ9burNrU2iHPo5wv2iq8YETYzJcdGMimf42g7Yvy7NF8u9sgaggNzzGQxyApEq7XMx7t8beSx",
  "key9": "5w2kx4DCu8E7YYuYLbDh6woML7br2Qd2uXVaSPgjvLdLpq6LCFtseRtgUyQMDaqEpc8Jc8DYcp2cudp7E7DCnzVd",
  "key10": "2ACoMxgEHRY4tXhtYxtopsCRghngPqezpohoTbYdwyGm6WTP63bx9s5BGyqneYtFSgPjzfoLZxTrUkxvuUmuXghk",
  "key11": "2SuzgSvt6Zw8WDM8osm1cLr7YuWVrpJin8CCVRSPSgc9qPP4XEuszFtcTUtfHefaizvzEyesyxmiHhkaiGwaGByw",
  "key12": "2tfu2KSv2pij48KxXBGgrirDPZtKT3RifuCxZcY1JoVSNqWuaspahcPbNTRjkqHqjcWk8HHhGfhJ8ufPZGJAuu8Q",
  "key13": "4i5YoLczEChYsNkC8TeAZFCtHGwe6L7EA3Hzi1KZQTTEbibxRtQGqidiD4YVP6bUHvrybd97An27zPfNPvE2XdGV",
  "key14": "415ywd7QuJ4PzbHpe2zNirR1Poxsy4jPB4Xc39H6sdqun1EmxLhz77cbVk7yKAW39e88MMp23bhnDaFxfEq3W4V3",
  "key15": "5hABypoVx5LBc2aa9ocrAM7Qu1ZbBqbJSS3NoWpgHXzkknJE8NZLR8Hc7V3UViqi8Rj1X5EZbWtK7LkGwgEM1iRn",
  "key16": "5vxDwX4QTDcSjvhsu2W4ap7RT2RTZp4iGbRvPKgNDAcDoS6cdMqdsz6AACYzf1TRaxFUdrSsYciwDY4pTibWmjsC",
  "key17": "2XGbTvffYe1LRT8XkiFYGc674CQehQ4sr61SsiNFnvyYWT8JFfFEbcSgkXrL11g33qJ6nxPFBRu65vpqnNxe2HWQ",
  "key18": "3XVGPkSRrV3Mpj9mirojaVxQoyEPCNe3KKiCp6RDrCMY4f7GECDioiPKF4uqkGXeHxNZcouspy7Lkcyhe3rgWJN9",
  "key19": "3y8PYCBp5Xy2arWibbuem19trjAgd3iuaMouPPtHFj37Z7i9ttgp439XErxg3A2oSCxDbhp3RE8kEqDzfCWRpR3y",
  "key20": "41giPtLMjqcS3PSxXh8BwCbxVCd5J2o3DyibAn1Be49WaXWNpYnxY8cXkqDBDVhYWwarmJpCj3fNnWocPEz4YPcS",
  "key21": "3C2YnwLg8hQ3T6349vmVhFVKyh6Zyq2DCXQW5C5cucRUE7omiUPJzyaDiHz6Wcj9ewUQyx6dtnYSFHvbkKdPfGpR",
  "key22": "3M1r71S7225uryUERJa59195kxnQHP5y1Fr7MsvTEdTPA6QFa211ibcuGgcvfdqCF7y8eNgs5LAgS9kk8ZMpKiks",
  "key23": "2niB8nbcXZgK86jTYjnM6uKE9tQwtM536FQLXvR29ptFnAyBjAKsYVvgL8huBG34oY8ryg8sDNYsy1UtZWqxTJPQ",
  "key24": "4hB9iDxvM9WRXTvcgUdxBSPWxex7ntUPWBvJ5wXmtzZpBnzEecGBKegaizeYrPE9RYnKSDqvJfpYh9jVgytMAti2",
  "key25": "4jjTS8X8cETZ8HLt3x2VhWndb9U2QRzbuY2LNTZDYZ19ejRnQb54BvFy3fbjzcT9DCtsKc8yt6tm1qfKQDdftPFj",
  "key26": "3Jhjkr1btwMFXhbW9Fi6wNcU2BU9NtvafMqt2AVderNF18hrdun1ms2A71wMY1eSKHyYjFidZsLnbDapsUiYWB8",
  "key27": "5974CTHzDKSfrvkPv81mLWn9GcEaHDZBAFvQsih77eKJfoJiH9t7JCnRj7YjvTCdgXRDCiiFerJmo2Sg5sf5XQvJ",
  "key28": "5dgJXsXFPsMm6MNZbKcrVUHUdovaXsSWJ4baAVvuotdwnHUcx6XBgJ65Ux5RrXKNYEyeGJv7CQHA2VKBJBoWSDyQ",
  "key29": "4WYqyQ31hCh7bnH5SVcrC1URFsAQmRJzSoDhnnVdbnSTAmGuVBHgop6PSPZ5kFhJpABqDGyPmth7uTV6QZW3uLZq",
  "key30": "28wcHy5xVKrDQYnWFdi96ywgYZmPB8Gu85rd9tV3EXJDw8rZCQiM2bK4J6XrbtgfZVMZUdtj54ZfYvumMUnX85nh",
  "key31": "sBdRhtdSzmYn2EydTg7FPmYJsQhgen2WW8PZdfmnsb6edZ6XuNVGYdQ7Hk2cqq9ScCbvGFGwauJd6reBtKtE77S"
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
