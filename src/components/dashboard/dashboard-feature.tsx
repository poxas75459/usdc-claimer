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
    "iwQGMasqkpZaYwxJUtVCLmu23eKeecKEiQcVNiPPBBGN3Eq8TyVTKUMSUGppyTxhsjA77k79wgRaUfhbyf1gWGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5876z5FvcGr9eN2MHjQHukkeAcuwZM4Er6ubRpHRE3nHG4GUgVEba4ZVSBbQBDR5orEjF8Nt9t8zLH54V1BcCpY5",
  "key1": "5jutQWfzb2P7Ac3cDBr6EAnXjfQpqqQf4TNbX2rgjoa1Fz14pMZEzCCdkQiyjPsxeFecMkUEx1cNtsXYfndeVMr8",
  "key2": "67aDgpdtQNhGr9mcYsLkWJo4Hs52Dvh89Tgi1h6m2XPRLkALaUqucjKNnh9USBamavjZXRCbyAQLfHHveFpQFETM",
  "key3": "4G6uCEeZM7whijP5nVJocXq8thGgbo3YB82sbyVncDR5J4oNo9dTvv1fJtkd4E8RwEgXogVojcrpe3kHVVAzS1kQ",
  "key4": "gGDYPXT7S7Va5CipyrpoZjgNnHuu1YpSCtv1EFQwnRQ7cbFBbV2sx4fxYsAhJX2oQQWkW6sPhjZn6ntt6re3j2d",
  "key5": "2VEk13N9J48Yoh5jRsGGZgKvawxiKSTMCURFZmEe2ehoTp3SW4YpXpFzSaZhbA7TsKor6mMKp6sWotsVnmSvNFcW",
  "key6": "5NSPnJKUaP3YywS7akGDD4kirb2btS7KSYms8v6eGBDccbqPgBTFkY2MzvcRMVPGRptP6ygaorjarJFUWCFEbwRG",
  "key7": "gRuLV8hVurZb6YAgX9wgF7xH7sV5TzVtfsB8AWezgkuARzMYeBZ2n8HmfLNQ6TGJqRGCyVi5vSv2n1cybk511Ur",
  "key8": "SC1u9SK6PCCo21zPu4FAEtMwuCBxxcaizogQwuwJrBktpTd5gGobCBYJFdvy27QmMyrdqbBEa9NqEMrQckeQ6GN",
  "key9": "2s1fMkfCRVZcuo8G2BMP67pEyfmJyRkePWmn5s3wr9N8ErExvF6wB8rbVKuJFNjES2yPZ9v4QpvVV88BZk2HABhS",
  "key10": "3ffAyhDPDpr4G2YZmU2TPsyeT9vvMVbJsKLJYG3y6rckk8XebmRSxJ37icrXU5SV1QFfWhU3ytudq4XpeMNtWtHN",
  "key11": "5NZRp2Vp5DXwE8sHF6VkLUfK8kuFCYnKgs2riDgg7ZyN8NW7R4ShL3Lu3Ku6Q9yWyTS8t71Gn1YvMSyuexDt3Vpi",
  "key12": "Lp3zincSzoZFzMEZ1uXPJbgFKJzht7Hi9BiNTKdkiXWDEo4hnF2YRDWeuaCwXYRrTtWhNy87uk8dk7QL6k8NK1F",
  "key13": "3z8dh1o4uj5j7gv4vWeAZoETejFj4ZHv6ASFmARzdS9nHc6hN1C4Bc46RsAwXyRrxHn1N9C3C9Yq3iJzhG8RwTKZ",
  "key14": "4w969PgdN7qsRtqJmvV63kvhzV3CUa2sKpEHzGqQGvCj8uXV13nm9gr2Lkd19vGYELVBkuj6vJuAjKkyGXjCt1xH",
  "key15": "5K2MewZP3uichYEiv97r3XKKgrFk1ftmHqcF8UB5i46KRHJ58tekyDXg4PAfhG2M5J4jiCvtycsfdRd4epPrNZrX",
  "key16": "2XE61RGDvHk6GCyFYombhc6k6Jk59jd4h3osSZnTq5KcVn84sFMZhRJGbKuH3JfqPaH4jQWJsAVxF2V3VnVZDDGw",
  "key17": "3BrVcT6xbQYMdxmhmajph8JVv4Dz4y7ZsdGm4HYecn4qKPMGfpmu6XH1PfjJXCLB3mZCBRX2KFtash7Geyf2nfu1",
  "key18": "2e6ZEPvfdQrWnQeQccvD88djqXfHQBuFvV1EsPZ8EkeQey95GmSS1dmyUjiFxAccLotLZwJTNkqXaUPn8HoBz9e3",
  "key19": "2SX3Wb3qvEyS2NFpL7u8btGsGSohPWPPVwhrSkib7hhWJDiPqdg34qsd5Pf16NyG18BFNYt8muH6tEzHxb4zLCjJ",
  "key20": "2wKx1oyARCuSmWZ59NfWBpw6fVtDv1pSqBK4j3qLE7edFR8t8cKtzuZZgPCgV2ztBWuoEZecFm4nVsLXFaoaqLZn",
  "key21": "3fdYqT3Ge78aXvA5ZFM3scWsQ33RRrhEfNG8C3WhhAJSceXkQTm9T8E8AwqQpQwNub2g1YWw9tMH5KRwVGM5Mi6g",
  "key22": "4BzsXBBNrExVv7h4RErhY7PWExv5ck4Difq22khjZcVRMoTo7Uvv72owcDqrgPHZAiinBLCyVFAMD9WrZPiUxbQ1",
  "key23": "5a15KMe5K7NYtjXf6ZRmiw9BUGVwihnefMpK36FL246qdyjQ4Qp9BcybbZVY2Sxzhfc5ixDp6EEvjoZ8etWbcowy",
  "key24": "4myxSZz7r4WLg6y7XSPq2E8Qe3iy5Zejonp6n5GiqbeL3vfwbSDSdvnwgNnDoBXGjyUZ2oPxjSpAZhvcfRNqeKsd",
  "key25": "3CtgVgWH3B43YU5kK3rrKZ3wc7aDuYphRLdcubDgTPcjMLA2ZJb24gH9PSUh9qKEP1izhsMKgDWKCwp28JY1J4vp",
  "key26": "2zxFdnhcuLZ2f7DdrhMMVMF6a7xh64KvTdMkpoY9XwZWXtUQ3ctrPnBm2HtfPx9wUhXgo35MPvpBgGJTL8LPicJX",
  "key27": "4JiCbGLiGpc5PJp3iPxzwXytrgo5YejRyTf9QcrxK2b4tSxSDRN8vWN1GZoiWhKgJ9jq7pM1NUHWTWLqqcw4nrhW",
  "key28": "SAivZEigBxQJnYLMsNfJ8sGasAvkeNAoDvtJydWpTp3tWJgmC2Kdqi35gKq5M8bxz7YCRsKqPGyMKUYuYrK9YdM",
  "key29": "3udBUHkctpJkDiGx6Rq8aPoRTpc714xs29NoCNu6Mbg78uga4TSBHo9wqt1Kxeiom6fofHnMxqwscRNgGe8JiiXu",
  "key30": "qhYZUrXN4chGnA7zcm8zPTpb18LHwmS57NMj2emTRF1AHW1y3oP7LHGNpsTqCueDAm6tCmeLoiux7RYJ1b6rRAq",
  "key31": "5rh9BHzc3r8SYTFKFckyEJMw7gJ7Rxupfe9geVM6T6SjLyA928Kx4qN6qUrSNF72tarzs74GkLuyJdz3Eua1oSb9",
  "key32": "qRbwxJYRZPbVS7LxAg7nKnHUWnFDGsWo4VY2ZBcbw1ZkEU8rYQWbTZjmHDyifipanjeCbRZoLtqPkDgtx8bVooF",
  "key33": "5xSgeH6FJr5juv13pj4HTSyvXqCtBsaz1B9sJFQBjoNCSB1PcGxrHFQNo7d27oBeBsbGxZSeSSn7RD8x7phqbRjn",
  "key34": "5dph1iwUQkKGm7Day1u53cfEmgSKDo1xCZcXu9JQL5Jjoo7CGsAgZJ3YEPEvGiFj3JLVshhoX8Bt9CMdha3N5Zur",
  "key35": "2z6bjqmM75CCVHdZU44YXf3ibdMsDFZqQaUP55TFr7CHuV5HFP3eXHSPsg4M23HfLgDrUFEx1UPMQjnpNvZwKNQp",
  "key36": "2eURH7QfTUVfrJ52z2ggTcfFgVUr8W2Mi1HPYj7wWxqqNtAYtUNEmhLyLwmwdnpVZkre8K7MzJfhPNGeT2ifFyoD",
  "key37": "64vQ9o2rE6SuL2Qb1wVW5iqSQAuUzaNQfiKNy2rJFmTRS8gMv4EE3trMFCeCsjMm8G2fVKWRoEpipp4UAuA1mbf9",
  "key38": "Er3ZSUBKVj2AvmxehFm9dmX9X192ZQVtgNYZdozUKgpUMat9A6h7ibMikKPZBN9neKPJRUsA4oBzzGPthR3jvDG",
  "key39": "4r4meTiDNvCEdWduN1tuyG9SsmJzEuZaKmhXJ9yS2pZJ4qMPN6ygn7JjGqYGm9Eop7UUPBMdLhJUDFiQ2UWHLM2a",
  "key40": "KCPensK8cFoZT98Ky6UmUNHEMsXa1if1EkeYmXp6A6Ay6BhD8JEYsqrC6SDgRZKT7FqZ5dud23SMR7WCVUpcLaE",
  "key41": "y5teh9CwQPSdaPGaE4FYJe7qRQyxCc9E3o3HC248kX4B9FEKci9LByGLMKP8iLM35RGTMMSG8v1wUfcEw9ggKQn",
  "key42": "k7ABBrWvKtVyHkXC1xJcCNNoRt6yTjy2kM1sJqvntvoK9RCDaukTNNmpbCLnvq7sqwFgQPjkC2BWeKCS4S4jMg8"
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
