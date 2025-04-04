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
    "4YsTicGJu35zLx1NdDGGvNiBpcnRyGwNY9zAg1Ai292UuCaVHCJoosEWMBog8L82w72pj9FpCb2eEB7GpExT5sCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UbuBKvRxXpM32xuLS9sfeARZbDUoKTBGQSAoqvAg5c9ucohA6EMvw5dzF1gn1NHisd62qpEB4LwQdgatfmVBEht",
  "key1": "5zV8hQHtsjTZ9wZnr3ScVpGy9WRqsRkyxMZVphvZA9JZ6MfWRbLcfNQBPdP69dKV6oUuKrkkBcP5kiSPqvMVxey6",
  "key2": "3tMNzhQrbELM7SzZTT3yAcgg3TAjx65oWtTMB8i3UgkvKhY7FdTYZaHpjRSeDdox1797rKXFRWzL5bPtb4qyg4Wh",
  "key3": "3vqVzCswb5gkfbc8DkzV5iUDGBniopn23m9XRGdNH8KccJnov33CYD5DN3V4r2TudGKGHnMVavnU5kb5mhVdVs5h",
  "key4": "2aDk7mPsydraq6NzFBsYxptERFqTfByGMSeqaDaQTay5GGo8xNSSUTyqymPdkBpVKzbf22V2xT7KvYers9itDFge",
  "key5": "55LxQ8YUg6pubydBuepxsZ9pcLd6RaCbrFJqdfKqwqFcwsSPhtbymsQHU5s8ruL7t4G4XqTfi9UpcoVFC7dkMecC",
  "key6": "27eeaNRhKbGXKrJwESCfjJ8BaxnjaZMDCLtTBLsbqkAbaqpj5ywade6cJavrBURqzFmMw163ZQTdG7uPnRanG2D2",
  "key7": "5Z8asJwbRxAWYgAgPavF15yVZBGYGYfpL11zprCEd6mCBGNJU4LQVTCaqBbc1PR9u9VsNTpDzgmuCJ22Ud572u89",
  "key8": "2mBN7ZCBkn7wvBeYikz8dp5rkEe1gj68QJ2MrMiDwtaheqWd8uQmmvhVAxCa14v9rARCTWLKg3XSkEhN8gMTzAwX",
  "key9": "4eiViBxGDwJRQDqC5976RJv3W8BYtxxkKBRfu3wLC9eJHtGS5oTwAhkSMw5DtD3R5kLC58ES5LzmfPkqaH3UoR56",
  "key10": "1czPYgzvMdgx25xKAE3b6PnyojfVPM5wRMue1LbLkujSVXCV8JnTRkzn4dbSLzwAanWuarR3KWEkzAED6A9cqZU",
  "key11": "2jW3qFw4wxixoczX9vzQxfA6SoaGHXGuWDpxuqJ8mNQipvcskdRngYu76nZLhaHrX83YjZHaJ8khcstBeeTpj7Dc",
  "key12": "82GRMx8Y7zJZmgo5ueKzUy5tocpCfXmdqxScjy68TJvshMBSX4zd553rRQexj5bXvToSHomutaFAQ55Vojtq4tK",
  "key13": "4Y8Yg7tHFQA3GVwj4qnAh7P2pegzmGKqr2HbgtvAuASsbAK2M51LUKqEHozRhFrSPQSh7aTvWhzGXULPpgWVZvFo",
  "key14": "6FwAFYAookeYtrh1UQfdziNmqA1MPRo5wpyR6XxHA9SLhEVNSQsyS56ACWmXdaZN2v2u7Fi5cNksRe6tkxpdsyG",
  "key15": "eri8iN9vmLPCVEwD8AGDCDjjKXBikSjojMCC6JJaCYX2BFpgus79sWPFGkG4xfeNdXgS8wvCDsfCBGgkzud5cZ2",
  "key16": "4NiB3RgLMrt1eLKkkhpy27ftkJzi3n8Mx4C8aeUQCazSKe9SPC3Cg7gZmG6ypH3wdFp4NaTzf22DtFut7fuLEVqY",
  "key17": "4as8jn8FCM6cfSibHBqxpgWvzgVDio8hs7zbuxvUCFjgMNNsFmR3yMjfv8WDsXH3STQvGa99JFq3Ckro8WALGL3h",
  "key18": "4oUQWD1C3PKcEAcshrSooVYiGX44dcDEme2BUrovAUJNoPueduT2qbt8NZZkjTq1VkE1ie6WuqxS3U8Xd51wL3ic",
  "key19": "3nxRu9MU7cENgakFpThQYHnCJPZSfjyfbp2JmcuXoQGALQT3baFGt4B17dgrCHQSEspiFv1mpoxRCdwSXyAPXE6m",
  "key20": "3xUsLhhx2bCGiytNkF8sQGSeZoqEdbBCdQNeut6ZreAEwyX76vy7c3uJFrcY5haogWShcFfdBD8Tu9n4qHvXs8zm",
  "key21": "5Kj9BA3ZXCoUQtugvSCLEV5RE7f5xxFqs7QV38RQZFKhNB3qbqUYSCxAXGhWBPWakpEtMuRdLiK2tdtUVmNn4EjV",
  "key22": "65Xv6fwxF2g4KpGasddVZvAYoJLQJsVSCqcWuDzHB9A4RuNpJhLAbkGLj6oFfymwYLkuDLHifhFpGwciduQHGM4p",
  "key23": "3EP5Yut6BGVxznCejAFEcEoKYVohf6rxJeXa53RZWB9dNq57Gra2eqAFW54zFxxi3PnXj5KfoaLBBwL1RGCycWaP",
  "key24": "3uc7JskGCscC1HxsYDkMhBER2Ncs2gkVn5dfrcbi7dbpVz4k6Zt685MjppL6DWfZeSWoxeEvNm7QYTUzFXMjFuFS",
  "key25": "3CiZmErYTrPPhm59R5RYXm2p14F6W1ZpMeaTBR3TyWQHQ3Mqh8B5HgmZKQLtR9ZW9m3c7CJ1yhJzdajtSbVWCFd8",
  "key26": "4JbMd3PKqdCd1JXWk46NN6QQ1fT5rTXRGAfexcd8TryzymPshpTntDEGnMjWow9EGM8QjrHtWwVUMrM5jbV75utn",
  "key27": "3tgdH8xQpVGUVwzdyAFh4JZV3Nz4tfK7hVUc5zifWicFq1bLRb3wRGqW9WoHpN2kvgauZ9SZGD3qhnbHcpK4kyBS"
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
