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
    "5vJwjcXqW2FYULJ3yWgMabWepXNQG9B64WDrmaY4QXKQdg6UwwQqhGtubteTspjFpjNn9pxS9xRn5oJYrK9Q97HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XkepCVCBMo9dotVGKmyYS2KDbNeunFWNkMvsjQyyqLFYvDRoBWgi4KGhFE3CU5i9gXHt9AG2DzfKyxhdzSkEPa",
  "key1": "2nP9TT5vfh5bdv7Z9ZzsHjag21Q4cniww8ooofufXFL2UL9d5gDvDh7QNyJFZ1skuANAxZan3ZqzNBhoXV99RKRt",
  "key2": "5atGrt9MJBCnDA3boxZvWdubcc8AdpKpY9Si6nZpypYbpqnrXeEobZYTm3qCyiR9VZNd9x5qEADPuX1ZBSSFZnrM",
  "key3": "2WovQDmp1c3AZFeNszCUxosvcdJ6Vvo6Pn3STRR5V8Ux28z2Qf7VRupH64i78d2xzuPuQEuvCEm4PV3igbmrPyTY",
  "key4": "4N4fAggpRuxhUxXBHeKEE9TLpuqHXruuaHjVejg14XshJ8W4amLq5RRyQj72TS9WBawEfmEU6dFAx9NX3QPiqCZK",
  "key5": "4J8DKgqeWBW9BcSbNF5XEvqJTuVMe1SJhdKmWn3VoJQYMDVNnhDrBuYqVrzruWUfA2VGT4icy9efdELrvJnfyskv",
  "key6": "AuNQ6nmgUpEV1Lhj35SDTDkk2dD6rrXpmt1Khp6sZCoVHpVZix27tRfKWbqH1WGcwvckwepCsqkJGCcQ44kXWhp",
  "key7": "5Zr4x1Bzm2cqV3CefVUPwx8iCSF7i3114W42cQ63EhGRgnrFJ5Fyn7Pejqjv6foStuyoSRXz5sVCJoXSv45V7Y6r",
  "key8": "5XrLLbHYzSAE9jkykbDKrZ2ra7rpGNha7reGMVMFNWZFFPF78THMKKApk4pQvroUdZ5QnXib3WocF2WRw3GcKcgD",
  "key9": "5dGaBn47rmkyZAX85dyDNJLrkETa1cjxoTUSKghg9a7RbFzdLDtJMMoCvuaBTzPtMgqnDM2114Cuwv7R3K3MQGg1",
  "key10": "3opCUb58vWMwuDxWid4EwwZiipWW2sDpwuGh8TZ4W84Ap7Jx5LXMqo4qy71Fs2pB4imprHBSpusYKb4r5CrugHpW",
  "key11": "sYu2F8RfzA78bHocE7PxdtpFkebRhic5aL5rhM7YJftD96ooPSFBh4DyVjZQ83So8DgyWsxRsBRWRAWhLsiWe6T",
  "key12": "3diFmcjtPHQqya1Tij8ibRunfdQdToRyWZySpJoAuGreWAXrzmpjvWcriAjMv4zn5uBma1uXZAegJFQ7owbYs2gV",
  "key13": "3jG7XkfhZowph4b9h9M9MPBqrQetWt6Suo8cKREjktnCz4yfrDvDmEuYsFvHGBYB5XeH6weanAPxNuMizcVnCS8U",
  "key14": "3wSWJp3tYWMgGVQ9Waz2FsG2Ju6WMu83GJKdLcK19mnzcPCd39VuzEbAQcUFLS1gCUY4CZgX3scEyexw3FLfP1EU",
  "key15": "4A23eZH5Q3hLuBDez6eSaZuwm7mpznAL6oxhRpCVqosVHiydU3diVrdPYFfEnr41JbkjvwUKbWt3Y6WvCrhhQt7h",
  "key16": "5hNxco1i8FEnmUCYKNZYPnqrEomaaRUpbZTPBTS2dkcGgnjB24f8ubnSBySSLGpJ7XyMQcepY2SW8HZyAHVEUAW8",
  "key17": "2AuSFgG7YQ2Pb7ddY2puXAijXVf7kHAZJLYqokiJ1qY7J1kuxKnoB3TBXHYkGbmedcbsG5u7wd7UkWWB3z3jHPaK",
  "key18": "4H6Q9M8TRQwWVdu8Rmx6dFzHQkwSLq3d8gMaAKxaoEELiTZaosu8suEuKnuJStFxZMcykvGbzcgiRW3HvVn5ajfu",
  "key19": "21Q3rDjcTQxvDhhH8axd56EqN5hdKtR1mt9vvnfsK5igPfDYZXHTcvW3MwFw74PBUAxgTXftfXCyFucNgorwbzNR",
  "key20": "3GF6X2QGNgJXLTnLmwo9VtDUpxRWzjjVjKNPxrfUcJYwqJvfgnMHn1xy2E4eHGU9QvJkuwibrHbvcYUwj8L8DbtY",
  "key21": "5YShiPemU3hWDZYGeQ76V186ebFSHmV1zJWfo8XtxvYWqruvV3D1fGZBUREV4x9CxY4jcAPmGRjRm5K2vf32SL3q",
  "key22": "2jTs6SZh7N6YqwYEYv9iwquVtkireiHu3v7i5ArDws1Vk5HcpGbNPrq3PQt3r5jpvp11s9A5qe4gobayoBWQ8s12",
  "key23": "2iDTtY7Z7SjmFGA2Yjz64ZfGAq6dD4UoUzpPaZz7WUi4tub5fFUarfJdBqZgP5mY4TJea5WUMhS9eiRMxZjYKZYs",
  "key24": "4RU3cC71NR9ziZ9djkw9UVnJN8hebeKREb7z3FmpvH5AcF7oNPgM9FKx8kwKUF4JkXBwDe38hsWFyghZRdcwYsip",
  "key25": "5Kx4oVb9ENqufoz2mg3SHRmv58urZwFP7PnbXbmJAaqUNJFerP6fb4CiniGttMGpkCsip41ebhnc31d8Qys5pgMk",
  "key26": "5goLj7pyRBuXaDzLLG3Er66uNzyryJBGcKM1rpX1iNQyubeNC4hNUSWJmir8DLiCUbLYX2h38WXH28jRdYzBoM3A",
  "key27": "3WFv2bD6UdC3gcpnBaK6uG1eTrHk4PKtunt1ErSVULgtxCw1U7QSANcDGs3W4iDLbPBu3W6EVaUoQpzby4xWp3dn",
  "key28": "3YY7CCPDy4SJwFatKZPwHDnucTUpnfBD28BHokK7u52jadnZyohcvTJYdVeb9Q6U7MiencaBGuaNfuF8Viin6Vyn",
  "key29": "3uLwJEaXwLHghnMbHwwpVkF3mnm727ZEXCiTvunsABQBWA7wcQjoJxnm6icD4qGiobNB5twx9o3qaGMtiN5fmDVD",
  "key30": "4f29MarVC9auj3WyhqFA4xd39KZKkCQvK7YhVAVZ74UkqbJYnpUqNqwFVQKZbY9qGk9eGF4nFuUzP9MghuW7BjHU",
  "key31": "5mkqP4UNNPx8VE9Fx1JuDuvcTwJeMa7TqW49yWYtEFT44midRwo6mFoYynZKFDWLNLjTyTuwJmnPfw8zZEBkFppB",
  "key32": "2DjrF1DSr8AvhvC2xik2NE47pRkywp4gkfaQNr8qRTqdfPeFjTcpD1uCkbqrybxpsVhqEBGaTSfSCmkfZf2fGBAj",
  "key33": "CZxGDyqVN7XtEJJzTVihKJuWLXevBReAKQqyPjjMZhDzMfctzpbLUX1htXFvEUdUU1Zowh5p9YR1ZozpxBfJ5q4",
  "key34": "5UrA3McRpS1PdKEgQaBfDvJHpFQhhCoXi5XtcuEpXNeQvBGZJ87RJJBqev4MopUVbwACG9NTDggcEy2Db6AFRh9c",
  "key35": "2E2zaKBVv85Ujah253doBhFCR2ebux65HyTeaupYU5RpNSS1Vw21sYKppnePcomWLhwYwtTX1FL4FWLa3HwQj6BR",
  "key36": "4D33iAoRPYAbCmK2RP2XBaCF8A2hi72ToU38uHcVi2VRyG4B8aofP6Z3aagFMwdT8jJY2T5fJVcK9K6aunvbUTB1"
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
