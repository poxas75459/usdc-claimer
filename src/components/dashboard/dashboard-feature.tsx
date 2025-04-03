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
    "2QxCuwXANiEkftJceZnmcvGUrFHWS6xJFcxCEoiq9DaR3iE3kY1BxiMYaqFCFxWih5cUujhcB2wXez8ECtoJj86v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2La53F5EdVfPzB23Qq7MbxT7c9vJ8KSjmt74VuYENf37fcdvNCTCDRZWeJrLFModB2EGoJRwYkb2LNFxXEVxaMJN",
  "key1": "3CtzEJ74Q1PszZokJ6SNhtDenn4d8UAbpR1o1rE5LAVRNZpfM5E9g4doNr7eLPYGtdx37dtvtDcgVZZnNNK2fVtG",
  "key2": "2X6yRXKCta8fjw3BxESpiPyAn51BrHF8iwCsaPb1tTrgoswKjVtYAfNyzE6upt8qhMCQrKobFfhWQLnPPfHUeR4",
  "key3": "3HZunTwUSLQvLQVo6Mn9p3fqg8LP7gzssmdit2VyaRV8PDfPQJXjTXgUwTY5su4bWmTsLwLFTqtingDHeRbJHqZb",
  "key4": "4QEF7AoUaYBdCaSiiZ5JZ4VZXAbWE2ZtkgmodRcSTsBBbwHgpypytGsXfbpMNxne8gCoy3iHcswvwPPuZD2qBmqS",
  "key5": "3kwdLhfQ5rsu14tE8EBq4T3oyKrqaeHWp92jJhygHGkBasfmGWofwPvNxoPTmmKfzy1zkQMENT49veprhGucRzzx",
  "key6": "5tc86BNUeyx1TuugyBdjnwU1VafNwPz6kCu8XL3ikcC6PutxxYskG4mP4FqhU4BfHr5iMaPvmFhhAmaVs5bm4V9v",
  "key7": "5xRBmnAxLGRAoEgPEiiXhVHKKWLPrtVPJCf5J4ySaX9YozqUvGtLV4CNRFSuf8ws4eCjh9A9kN8t1KB64xqRFuDE",
  "key8": "3eTqn5MWxDfP6ZK8NfoeeSoG5p7rt18wrKDJWepDu8TCRaEVuCCGhatv7UwxAP5YZyLTKDcvFfysAL9JVUyfRjfd",
  "key9": "KvhReJJ1sk7AEBW9B4Ys7Sq35ZbC7171m8DUYD3HF5DQBghoexDnzH7ukjVaqun31aYDtuk2cLHbw4wbXVvZPDX",
  "key10": "3hmSMrqDdbsCiitrwQm11Eqpk2ityyMSUZrQFTHArU98GWPKCzEGRc2mN1WS1A5EX5sWVE3zhbJUWmXCcjqV33B6",
  "key11": "RGTkQj56ssADjvVZWRW5atmk683nupU7n63qkPvQVpiJiBtUdzdzBQEkrobKPUfJWpkDQeJWSKR8W9VdF4SVcYY",
  "key12": "42CdCnHWnVnzmXgFoeCTA63E2DQ7NM6VdQf7v6Vh43aaxf7JP98yDEX9qsATN4BmgEMXT8vFYCFn4dcQp5CEt85c",
  "key13": "54JM2jGqj9m3ZjNbi5wDD9KDLNpdBq3GncBBstEZJkHBW56PGZcgC3JuZz6GzwPuut5KjFd3QqExRvwyVqpeiahB",
  "key14": "3ELWRTm517nEU4eVpfMm2uT1zQDNFvaEe4BXBxa8RVdiuLbLLXwRGX4SoBAqUVuHdPmQKsyq7xgZqWeBSJ92NjUi",
  "key15": "55wcYHfFG7jVJhYMMiafEd5dsae58Ug46Z7juXTBKD8LEDrEmaCJ2N2rabwpoQAURcdmf69gdzM3XNE5PmYRSN84",
  "key16": "3GExA6Mmf2cBe57WKUCqYunnL96exGzAdUCUv8qXABAc27VfC8PCYMVhkVSDYKog2t9aNgSikBY1QKecErv2Ftz6",
  "key17": "2QxTKNCWRZxZBqt9axNTHjrTAi54Krs5E5RucZWc1jpbawbzPT69ySeo4B6unj6M1BPnESFATu3uTguDeW1kg9kP",
  "key18": "4wmWwPtfKsgLcMDtsg15rydDL6v14KsNgc4WddpYUMMcbPsLRkPCuPZGuWqjBDcfeBVkA1o6fnu87vrW7i3ibjFw",
  "key19": "2TY6A3uEAbyQf3WB74UaBD8f5fi7dEcjzZkiBhj4J3HYvWeNEVagZhuxKwdjPQ7z9NgHcQpJSz3MnzS2g72kHZ3o",
  "key20": "4tmBKgnhNFGwjHCQxXUJizhRzE1rr4WMRQMn45KJAeEz24QigRxd3WRutZEb1W7DJnTDSZ4n6BRNAn6DndwtUYpw",
  "key21": "5e3udU3aszk7CeYqJ4RN9jtLx3CXMvgMVUMsk1VyGdqFHsBW2FsFsgkqbcJco6tejZW8UnoxKAQQNrEtMgDNTWKr",
  "key22": "2BskVeyvecFp88PzCLkaMnCFo2osKPhEnG4W99YcTT8C1EQWY3LmxLainQwL8Ncxiz2UhzsR1zCpcdVCpbbvgxVM",
  "key23": "2UmGLJCV7PmgxSZ7DFVqxfYw54pYxVaQSg1qf5Rb6hZDaxsZGmvfhE9GQnoLjawrtRAzw7RMWzDbcHTUP7ke7orN",
  "key24": "m9MVFSjtWQiNXCUB1ejmvmiSbDHfe9Es53PrB3FDinJ4wY6EViSpKmAKC7hJwHhbTfLGXsfWNHMmHXuJx7JKnQL",
  "key25": "28SHRZYBD6xua74H2by7u1fAQNpFssuG7aKiuFyPaC1Rdki7Hm4wnmTA7Qfbo3S3k5GTDwcrRjYxjjJ2gXxqEkAH",
  "key26": "2wxSsDPnk8xSjFNyjsJiG7ioHZFFGnotnd8UmT2cFpD4ywxrAPStcbCZgmncp7Fn1BPXB4ZPWNMJRxEte5q2T2V6",
  "key27": "oLHTcW1GkmGV7rNsouvXM2en3XZBkM4kcK4LinSF6U5dRjx2fhhXDnw3Ut6FkrFLACUp6A16X5zREXc3sg5eRzv",
  "key28": "59syaRgNxhmajhHPtuZom3GUo4kQmSxEPznmTrs7sjQTbuXNe95cVS1dQCubLQmRAtbmZyQYPEJLbcKDAgYrVFjM",
  "key29": "3kuXNdb7SXyj9JG5sPkGZKTbceaXc99cg3fvpuAtYnSohtCw2tZwcWK9NXKNaVwDatUgiuBaA1QtHH83dc3owMht",
  "key30": "3vNcD83k6YkDehA8xAfYqKZs9Rxipg8hNiQQyTfkenQn5DS2qaEfX5E7MqXfssFgEikzJZ9C51k782j2P7EbCuKZ",
  "key31": "2dfnZUzTkNaMmvUg8jC7GZ8ttbxUDCKpKhHgDBainfei6b3vNeXAxQpWCekjVL2Aqb3Q13fYXemLyKxDzn6zufgX",
  "key32": "4Fr7U4Bmabrjiha7jeWovDSSLkZ3pGEt9uiytFKYVLfPEJC7DzGi3xwsq7uoEBcvnBDLg95eehVi8xbH6KBEyfnT"
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
