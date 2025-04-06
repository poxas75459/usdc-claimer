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
    "4fCfMRYc4EzcieLsjFrbewZDsTst8dewg8ExTReJpgfuFbtCXJi9xg2QeYEwSQviNo2hsK8BM7zcsMZfT7RaRJqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7zMhn55JSYQzD1XVWsZf4vDSnbQSVSL5akYWCTzFacR6iwnXPa2e2yVuLZcdsfjSW5g3ocVCtnh6vN76c1egV2",
  "key1": "3UppZqfBMLwkUZdWeNzcecvJDxeuZEo25HEsZFHNBbBWAuLKg4wV9pryKC3jy9edQb3gf4BcDfdfFQJbC3U1LAS4",
  "key2": "5PNH4RKNoXcjLb45LA42TLbboFuzotcdY4g6VfQcBtsoCGWTWNyTjFd16B3E4GU6kmYmn43nyvh9XpR3GofEKCnM",
  "key3": "3ZaT4r7Da1YqfuLTk8Y4ibovbNfwY5SG8hHCAt9YQZ3Cv96D6RFrAtCbz8MsixDZDuxidS4rR6cQLHBsbzZBba7x",
  "key4": "25vKBVovjHr7fDYa1MoTgX8LM17JaZApmpe7JsT92GDY2PczHLBBd5YgVzE9Pw9iG2fUWe3jvXCPLXhtWoyJyzpd",
  "key5": "2ZzmXwav57ah3piSRvK4RsniqgVe56SL6YcJZNid1SjiMMMAq6KC7i23Uph1xpqZHeYCzvHTv7uLhEzuPd3L8whS",
  "key6": "DXPnPrM4vRk5iaorBBBrqwQ6VjLPx19nxpYiVBAkSf3dFr2jWyDyj4DZSd6dPC1pVkoL3G7cn63Nih8FRDSAV9N",
  "key7": "48LSWJNTBCeJJAbtcRbnCYkdZNv18UTTqfvt8Ba7ijXZUxDymrcDnXQtV2iEusoMTRynEDWy4QgweQMEtJtbH37J",
  "key8": "2TiNcBy9euyH6mhNRGqtnYfzqn4CxcUrE5vvAdXKCwh9XRqEjrZL9hbcAQ1dU8sG3E3ypNqiEEg3Da83fTkuz9DL",
  "key9": "3aXHB73orpJKzz3EUXF7n9cbHZviqPwfdVdaQ44RDmCfqxBvjuRJNd8UUEiy77DJ24FVeXk4JTQNtZcdr3bK9f8w",
  "key10": "2w8eE3DsQmYc66vgnYCNsuaE6Bx3bifxGHeQEhzizcrpVnuPAySYZbbApmEDxkCT31NNG1m3Q8EZPQ8EQDpU9dE3",
  "key11": "5nANfGohbFBJh7iRDSJScUcRfe3XbNiDewPfZy5kkPRsbf6KKV48vNh3o3RNJ7L14hZhs2nQiFVLwEeBZdxcMuQ5",
  "key12": "5uPQrqWWK1FF1cs61CNK5Ye5wyb1DNSzWmiLGZMix12SP39S1cvQjPKqijFWCMJX5EtQh5XiWfhFqURsMGZhT8NW",
  "key13": "32vQ76uvMTTApkLF82oeCivAGCE77qususDuvURYei9hxUfskqa1MkrTSrmSmKnrdG2NfYjHCW4UpmEvfd6sQD4C",
  "key14": "2h7AW9Y5oFBFNyCZYDWGMjaz3EAzPhAk6t28xgaA6qvaLF9VBrHVXD4hDkC79pLnQcZGE8ms7v3JjqZpf7wTuMb6",
  "key15": "4Q1rXkqQ5mgJzxreDbbKyjpbgb1bksJKEpe6AsmS9VZkjR7K5wUTFZcTYyVHHWNn9TEFnDzRVEQ23oVhXZFMA9Pr",
  "key16": "9dHXfr9STKdrL6UuDoVD3rpRxAUy5bXgZvPAHi1PTwDNo58Wvjven62asmCh7otPYHzrUHrNKNgszWB6YBroQ5d",
  "key17": "5rt8EJy6jfjiSn7dyp6YiUUKWBZU8nXruwKgwg8nWah6agUe7ZxKCfs79VtMFexDgVeuVyDLxM9NFhNEnkCiFvy5",
  "key18": "4dxkw9sqZYZYXV4jsn6pQMgp7k7e9ux2R1XtbbyxdaRkYc9qHu9sG1QAz8ZfnYbZZ2n2hXAg765AjwN9wjYfBfjF",
  "key19": "4xPVfjeLozgS5nYwyq9Wf91gpgeJu6MBwC5PQWDfNbG5yEX2Cdddcsj6iWnwWb6FVyFpfvvydUkkZgowuCHQweS5",
  "key20": "41vAxdNeuPL74Yu2C1svK3fetaCGdCH23HPP4xmwnDn2oq22EkUFFN2oTSBFPGiMh3m511jqx55peERQVtWvxXD4",
  "key21": "2DyVhJ9yzyWDVwoHLkVHB1otvdaH7e6Kpf5XRRpTQXC6iWNdwk9nU4syCEozjk17UWx8HFrL19NMhetBUaJZHjox",
  "key22": "37FibcP74KtcgoUUzof8Mr4mAqzUq2hu7QFP4KZRcUSAsimzrU77bF8jrfEqFkgXZ9WtpDMCp7EAwwxqhfVDfdRR",
  "key23": "5gnjHYFfEDXS6knLYzKfAjMYnj56ZULiUpJJFus8o1PQFBGsmpyBVoCpe35dpRG8Ju77S3jeVieR69bumdz8SAPK",
  "key24": "4PH5Jtsjfs3uutDXTTufrpnF9iqcwLqf1LH3ABkf9QXUzkfzYAnmzLDS1jmE428dba24WcPKc2YWTuXXkDVstNbC",
  "key25": "486aMaHnE89RgjFp2TQA8ng8HR7bRSPT5qQStzhPM3B2ReKKQhT6eBdGsMJdUVdGmDxt8wCVisqyP9XWhkN48fuS",
  "key26": "5Nm7GabLNhSovfBpYzgXutBZqdQWgiCRewYCthD9Avt3XoxcTGDxbQcYh5DqeD7ZbPRfQjka6bQm6qtcqNoYnC5s",
  "key27": "3CQNuTKWt5sp1MuTEmt5r4q7FskuVQXEV6U7vYimdEtqkFkENTHtD8gzg72K1gHa6zCkHtyDa9pxVgP9H593bZLS",
  "key28": "3v2Gz4CFUWcpuanQ1EsHqYpFJHFWT5eqQQUyF4o1vy4PSpNDDhu7dDtYzd2XmeGNivgEMxX1uxzVPk7gG9QCPw7q",
  "key29": "Xc8nGWjZb6FExPA8uD6rdtfwYC2yFeVVUQKWi7Z4FhcPw7ok4cYMRNUjAKyLJerk2NayaH6KEkxENgbRYdmzZnQ",
  "key30": "5ug71BwKAHMuS2pk69z2QTBJynTP8VhiE1sc2mjiDBXBhyDnuBBwhYFuF5mKedcPsgnF5sHqdEexUSnLtkjxqkye",
  "key31": "BZKYE8U8jztvZvDVsoY439UuX3YJHGNoeSJWgru6c25moFPbSEkybQKrGES2zZggKR6i4su96XrtFQTjs1gz2Gt",
  "key32": "5jqZRdHgNzSUL5oiouyEDEXJ4LscVYpSHwkPMGeA9Bbj6y4FxsURrCKVDRQnULVFATDybRmjQFgX4gPTDe4mYk9r",
  "key33": "4NZJn2ZdiFV2ECfZKZZPbEx9Pb5mymQvSgkYYX567egzMJsio7SzqpEdk6YvdKcH4CqrTMc3yo1MnFL9zofQsktA",
  "key34": "5rxi7hrz7SS1i32mrWvmpfVrCFErxACUvTdaPjWc3MqVoUW9jgu1E4rXdiYtgibRMVdRKQ7PpLoT1hi2keu8bWkv",
  "key35": "4ScZkmWmgzTcvTj8n8kwRTVfyARGtRHJsgvMc4z7563qxoWhWgFpMJmPvRXq4E8PzA2VFSuLiJK5AkBXSnWANECZ",
  "key36": "4f9Pga1Q1E6BfwmZJFaXheDFXpNhdh7J8E4jwW3zgXRVd17kNf7fPRkvpPTrPWma28VdQ1BVmHudANQoN6vzhXUm",
  "key37": "5FQvXk6M8Q9NuAHfNpn6ZGzeghvCSGLXBj9eKdbeGPnuR9xcRJBCJe8xpd12QJnJKyDfvs8V4qCX5bzwDTEVFk9m",
  "key38": "2z9Amjthf6CQCnaS4wt95SEVPomR1P4pS4uzGJapSBpbPSzvYi3MRFPx91YPSCkJrf1UohhSUvk5rFiFGfe9p5QD",
  "key39": "6EcThxZyDXjGGAx4brqz6SVingZ9XcCaYWvGXvn88NruvNZH7YnXqWmfBrqAe3z6SSseNfa4vTh17iQ294UnYDt",
  "key40": "58ijjior4qenKhZmX16CegE3HSL8rxfrRs3TUS1aoxhTn4MdqzxXdT9ZxaZTjfS4wwZRzrVFSNMTDVEc4UhCkPQB",
  "key41": "5XkghEWksSQcZHi2NSRPbXHrk2iCHGaqnrohoLtFDytQT3HBZNnoA7WNbkT9bcnQD9g11xKgfDmLK9hvnqJkfeCm",
  "key42": "5ADk8Mv4q8KtfJ8qWdKsqnmuqa7m8j8XPSXRQgkY7DuDYcucQjJphm6Q2YuRCfossXuJx6M8H9xbwNmWknHAnEHn",
  "key43": "aCVwYahYJMFKg8V48goVit9GTL8XrDM2oBTp4SHJRnMePWyxVYLvutVW8ivdcwKETKJTj8sHbryvdepeFx1jwYa",
  "key44": "j4D2GUdRbFKwLH7v9FqQ7Prk3uBJD3BunePMRq7yBN68XGPFwqwkumMb2q3enBiAS4CKsFS2aszk477nSqG7Fbx",
  "key45": "4oiYZ8FSeDQiHsBdceAZJsEHQJZnXte4pCmBs6W1dQ8RVGz1SLSjc91fKqkXU44B7QkA9a9pR2DY6XbsgL2tKgPZ",
  "key46": "9hkhXZFC5rV32pL2L1b6XnC8RA78JWd6nkc6buuwxYzjwexaRUiLsUkk7migQDA7yysYFGZN9j5nyrUvAgpEnxE",
  "key47": "4n1jyChuiveENQCohbaR6Lap72fzFrqdKjFLC8JPeKMhkCk9MJcCZ5Pekm9ukcuQwWu61PA3GJirU17sQaRAnzvz",
  "key48": "2NB6R7J1SHsX2ywRzvb3J7kQx67u2z4XbLZiXU3jjkx6imDGfmZ1gpZPkfHqUc8eRgvpCwA59pwuMBr4cEJYbxkS"
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
