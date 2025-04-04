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
    "2UWYmgYaRskepxuYDq2F7TUD4ksaCYRu3roPmakrBrHseuM3csuGRZdMNj1syMhs9Taq7koi8KaHJnPfPCFmN5sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MsBnDbankXgce1NdD4gP26L9G1gdWo4fZbrcBzuoB5TDhdofVidcMGgigimz6VufPePbMchupngja5YfWhTt886",
  "key1": "2kNiNfnysz95cNTQkzXpDwv1mwcNrjmcYGem4zM8VJaoJWgV7g2ZwGTdzrsHistzQzfrydwvVrzxAhzYCL1nz5o3",
  "key2": "669pJsfN6KryfADdaZBFpamFbRgVqJLB8Bm4UTDJL4nrmPAjXx1vD5gMGnWSotcCsCR5YJRaGYujYPAJDFi73ah3",
  "key3": "3jAkrsYLA4MMSri4SCZQTq3VBi6EUDYDVNSFwsxDagWGkP9gWPnm2cLvqtTxNKXBHpHk3PfXE9xC2k1GgkwyP43J",
  "key4": "C53xBa2tqceQfy6TWP1m8cacP59RaHgHUgY22xnGPFXyhiekNWFaGoGR9EGautVEuBTa54cofoXmtbtduUN7k1v",
  "key5": "2swrjiDT3CiZP96wWSt5CJsH5DT517vGxu64ZnvpAKK8AihV44TNivQN3xDYzZLSszTckKKH6xwMxe3PCMoQDPv9",
  "key6": "xxkdHiC3j9VvA4VfuNnUj1Y1qUCSYSsWYe1ZKKqe5rxGbUUqtb9mMiQLUSqkG92xRtyuNrbX7dVf931J4twU48c",
  "key7": "5F1taCXW5LTd5Hm9VMtf2UwkCbWVavr1YR3LTcvefeLjDHqsE4CR6CGPoE8Zkaejy3GbeWDBpKaVL7ycweP86UjM",
  "key8": "9kMi7eVtn9dugDdB2PkL1ttxwU4RwdisDgGPTx1k4VTmGLDM4GsxCPuPN8XqsuJ4zjz4TWbi5nHWFJThbC5B45w",
  "key9": "4mh7pEaoveVRppvcHDCAYNSDsJBtjHwa2KoJ8qLhtkkA7sfW9Wp4r9kJMUfWb6NGqDuPhkuXuiY7eLfhrgyZqWaU",
  "key10": "37GDeQ6zykHgMH5g6jzrvemFVmDdvqZVEoq7djiXMTiNrCYiqmWFoZQUeGrccfZu9oNt3F4MxELEmfFV4fL3FJp9",
  "key11": "2wud6dSdaaSUeBUtygotxQafSDB1TCriiig7ccfqbSWEYsoUL1Eusdju3BAw6JWoLwY8ebEdz8P9bpWPoPpt2JGy",
  "key12": "vWBL5XnNA9h9vA4T4AMTu8TNF3Sypk9rtaL92mScUMW4PGFo4zK4ax1PVkuvRDZ3GLmMiCNSjXPKi7o64AuoFtp",
  "key13": "a8Xqf8WkqQ8C22BpGdyYTzqJPLBtb18GJRgCUkZvgJw23x3UQWP68NM1bkyrZVoi8sNKbRtDcN5wvcMVLAYez6p",
  "key14": "4h2ToLd6ocCsvtGDMhJniucB83xe3DjJsEYYA3T7JyGW8pmC4ovXjzANaNnb2bfaFQQC3T7tjpuNW7Kp1HfVehj7",
  "key15": "5TvJncjFb4wmvKbbVxUDRoWTvL22ACxixghaesZc5oXztsTkR7KzLCVq8ka7TEKz3PUM9aBneTVUcs8eJGytwvhu",
  "key16": "3H6HSibgmwQRR3phpf3cRfWoAAFE47i4TPi9VjZF34BPFiXwjrVF6UF4fyDN4yt5Wv2FvCvDf3baLSTMvBZeeusj",
  "key17": "3MZETnNeoMwfBpnn8eTkLALt3t71fJmiviRzdmTVo6TGitLZz9nPMmHMKs7Wq1wkCVGM11QH6w4h6XyiThG6zzxx",
  "key18": "4rhjqUFKngoD7Ziwy9cy8Dr9T8RRe2Nkrx6iW2HeQZomnVq1fQp5hxbXWA4LpaA9M95SqcEGzZvyeADFoo1KAfWq",
  "key19": "5shqEUNifZaP9SEtCtbWMEV3ijb1FYXmXSEMjFzqMXKVBe6jK8uYcrDu2o7UxXcGwc9yqLhDPHxd8JnvV8F8moNb",
  "key20": "3cMBxXV4Drun8F2irov7MVkzT1UiCLuq6FvkP3F9PTtRmus5AajMbNJZk6ZiYUMGGjSjoGGZkV4LBMFf3jEGyDRr",
  "key21": "4GxzxzWiQUnV1djXJKvsz54ix7B3DCGSr6WRnDoXeLSz39rt78rYmLcarzTCQZfPqwh5TovL93Hzi2LFc4bq2JTm",
  "key22": "4nXMwTwxzKTqSQQGQEpgrdpcZEqQXTLnMTWSEnD4hRy3qK2ziGD2msGQWKuepdPZ5vrF4geoKqhdtATcuM56iVFx",
  "key23": "5bXAn5zGVwqJAYX8x8ucpc3DwpkV5zE7EwvEhw7dtE2QMNxCpX9VduVdM7th18QFfRarox3pkQrNnybXrGsLW3TA",
  "key24": "2k4NYuh3ynUBY2foAPWJZX1GXNk14Qhh8HQcha8H27ESQHYsXdRnaFLeRNRgszb1jBGs2KubePhKyqag9bZgP8AM",
  "key25": "Rjvvy4yfm22QNkSTV7xM1MPYMX9FLUQMhzDvSdNExRZkQ9rMLXYaidB512HJwLCyePvKpHQ4hnaNArcUCRxHJzb",
  "key26": "4hQMaWpbEG5my3K96yjX3JS9tu714Ztaa5byDTt711EDVMAKLzQFBHzxWZyAPyaQXCiL2cv9vrrRQsK6RjgJDFBh",
  "key27": "2UMNPneBfUUZuXrBaqk8k1k2eGbUzqT8SebZyGKjG4CJjwf3wF8Uf9gsgfBngS8FtZPtkFCHEWdoRqgjXSpURNBL",
  "key28": "3gj71mxwyrK2KY9ha6ihSPiQJhiMzVxf9GwJFymE7goPGFy4UMMpqtpcGjfC3MaePsoUZEGDV1KUvqDN7aj4RTRX",
  "key29": "kFZd9ckbxyQbitNacPn8SpCayqR6NEyjFZV4F1bS9cx5Pk57BXi6DKNRvMKULT9hQhyetLZhQLvUqERtMdwveEE",
  "key30": "56cQtYCXN5ETuu7YJi771LC26ESRmHscbUtBCV6ZCyeNPuCeWLCriRyfhYKt2BZPDaM88EksD3iddRbQooQcPSa6"
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
