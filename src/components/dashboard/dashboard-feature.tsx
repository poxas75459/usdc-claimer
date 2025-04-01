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
    "uxKuxi2K5rQL3xDVAVHRUarMQiHZbNKhCvg8PctjoxihSGwVNZ1JCintqKyfJbsZr54afLpTTF5T78i8m5sSvfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBTe8gsYhtmK4sHMGnSjR52y1TKyMqQd6efMuFDMKwPenqyLZUfbE5RPJp7iSaS59j7Q9EEH7x9nLnicE9pnKGz",
  "key1": "2mK4T6n4yWa3M3j8SkNqyXYVmVXC7zKH1C4Hby9bapNHjBro6rrcAWqYdpHN3syy1SVb4mozAL9ZgBVZHXsbBEMM",
  "key2": "3cvasNfmd6qynNa95yA5sZooK3UoysSrxUeufHtWEbziRK9DFYwryN3L4Ba8rx1BYTwuUqdfre6D1ixPmWsAowmx",
  "key3": "5NmQesuaazN6va3PUh62F6M98VV3kjba1LguvDFELhsC13gFK1G2FQYYGvjitqoeeLCykA3sJsp4qsQUATENf8d7",
  "key4": "5TJV4wmKE52frZnLQ5vtoWZiEzt26UaEWJucosBkfZXuyZrobwN5j7U4ydapyBQdq7WsF3wG9gJPMqW8hUBiej8Z",
  "key5": "3QQpT7xcJ1UuzSwRosnHXWuAH1tVzrLEHfYaxatV2aBbEx74LiinBQNqeXSB3gB7JB7y2CRx6XbbG2TMBycPhuak",
  "key6": "4y9nnXcDVJ2CHGL3dxNLJn1nveQ8ymjhFnWT9MQ79BDbJYWfBADk7RMQ6Qp2xLqzG8Qw9qD4TsnbG6B6urxwcZTM",
  "key7": "4vDCaKzCMw56V2QQaHtihHcTEJBKLyX1J2kN7xsPcVooKAZrq9qg7MJtuQNDeo5kxZpu5bjRKzcKHocsXM9K8Nw4",
  "key8": "4maC9xQ8BSZwaNzpBoCWXeyZq9NcRNyxhZLmNvdvcrikWBwaGCdkdB9toXGYAU9T9m9fKvZJ1eCBygiZs72VvQQ4",
  "key9": "3CBSgZSk1LxQcso97sc6d4y7yfQLjFt6MJiSmkTzKT5fZqX1p5MesbH5cmBC9t2RYdKdmCyGFAJKe7Lf5b9rrP8s",
  "key10": "2kUM2uwGRXnQb3h4H9CpPQbnJ9R1wtWUxmYWQL521cPeeTgx9xbmrbhXRQ2mfq6N4qLkkkhkRXeWcNTbXYZcGBav",
  "key11": "Di7gVqsWa54RnbY3qP8GT1oa2kGfN1cjAmThw7mQJ7KeLscvCmawq5DW93Hhs8Gd9gy3NDcY1P7NtaCjvuK9B5M",
  "key12": "3X8AC6zPZZDCpa6UWvSQ74eJbeYvRMSRs4ULV6a1M3SQhd1evD8WmrQsS6fUv1JpFbkbTSiRk8aVppeW68aLb4Gu",
  "key13": "qeYs99JFajCwq4XzWPJWDBNU7m6aWNBkVYgjk6TimzGuKPbJ8wN3DigZssxnK7KmPdB38QsNoJsNaAUox1yVwBz",
  "key14": "5jPgvGa5MmreEF4GTEEWV1MW7GaagmuxxFK9DUTjjdLpNgMTRKU92zLJRoF6ndH1J2m3qn6w86E2ZZXTDs2pbY6b",
  "key15": "3vVeadZv1CmeArLSg5mBHGBf9YKeT6UbRkXrBZv613vWeSjZoTcw2BKvrcT7ms8LdjHGxhbW64f85z9HAG72bgKa",
  "key16": "qiWTkiR2hs1juUpT7RsuV6GKxffCibTfaQWTazu1oKEmcTeYJnohBQcKJeBcu6KwGuGy5ueh5utZN6mc3SuFYqE",
  "key17": "LXvs4BWQvRUU9SvVPSgcs8JdzkgqC7EjwqeLvwVzg7UNvVjjKNzF2FRdWWaHxKxpjxy73XExne2mXG5frVk3r6U",
  "key18": "5ETf32kwKFZ26QcWKZpYtrpDNWyULSj4zHD8EqT7EXxGCD2LmbCmAP1FRYmu7pqSnJmocjAYn6zZ2wZ51fHWFuA6",
  "key19": "4mey82gW2MPpouQJ2iyvsXbBAE1PhbihhhiWxAFAAVvEQjNmsB6ia87qk5LV3vp8DXcPkoDZQ9Jj3VdAYzCAFP3N",
  "key20": "2UJid1FiFGaesnZMQen2MVqfhwETtEQq7Uh2djfMGmaeTsDTbpQEyFBbiEwUQAkauYYVDxw93H3hYRvN4aWCjBT7",
  "key21": "5KboY9YHJ6PGyW8GH8pPyaSXFa67Gb6HcsGDSFyfXjMXqYWcPMqceGmznujioxWCLrp8kmF67WY9oHmoLtYbK4Zd",
  "key22": "2K4fH5xcDKKC4vyxwB3eLDJ5Fs9KeH47NiiXDThJ7mH7Ej3PThkBjaWVajK3TFTSFRLWEa9GwrnGGqMu5EiRCCJN",
  "key23": "2gstw1vywADjNk2sJ4NuVefiPqtaJdg8d5x2XPhBSxTaFpjf6KBDiMN7sXtPMGZemEdxfWagkoXHurZt6nBWb3sD",
  "key24": "51c2eDQhiBdpcrU2i7zbBACb7LrzVcpkRsry1CGvhDF7f5ZQUZoG7TE4yHV2sgEsFHehqmenykgG3yTunKUdbnTT",
  "key25": "3DVYHCxgEmXuHkmrVATduYyEEgN6i5E1XV8YqUjUskoX2LbXncZebTFDp1zCWV6mLfgoUAnC28zDac91JPhVXYGp",
  "key26": "T5Yt4vTcNorYG6kzAcD1JhXJvjZpzs5cTQJyDCiUn549tFvuh14yyUCHdSMeVZh9EyC5z2QTTNf3R6BRcLMhg3o",
  "key27": "5RckJSJ9KJSy3KGkSjhiLA4Sx2qEbUfsJkPG33rwnkHEM9bZaLxDEia9zLzNMmnYJyR1kcYpobZ53racMQHAGC9E",
  "key28": "QagE4DsKgWnQT2E5bahrM8DFgpTkxV5n4iHpKfh1L8LzFyQvJQdoMehMvXUBjeqeEPWc7W31TcgMXvwRw3fc1AG",
  "key29": "2BFXCrd8GGAS2FRDMAoS9QTE5WeJv14MrgvhZS1PVMdb9heZvVPuwD6GbkRawJHQWCErc9tvsKSpGwY622Qaat3J",
  "key30": "W84XWpunghkswMHU8s9TuJUVMmkFgaQQTQumaqedcCAnkXuw9mpojsCDqYSCpUymyuNviXwjcUwr2QNLAskoBEb",
  "key31": "4iHXManzuC8MYYyrhXFjH4HFAGWvi6D12hKUwd786Gc9fbNWCSrsDEkHMr7ShoqciRDWNX65qhNn5Nbd3zpd2E6c",
  "key32": "4T5WunKCihhogy62JCSAKq4fdNzYpjF7ceKvvr3j3j8ZEZU8uKhqHWPMbwX8MWVKgRZC46eRW6LiCZkmtZiLu6y1",
  "key33": "ehrddjNvAXXqrJXQ31JXoZBXDvWrnNryaemiF4oRYufBiEF4UeFnZssXMXEkGzqKxpNi3MWCKpZSCa7H6WYYM9x",
  "key34": "3nz17Z9kvRxXHGTeof3tEkcbivzWmQEcnNrkpG7uxsn13BgbeJ5AHNbjWY1u4wZ55bS7Xk7yLemiwa8GDBBZp94B",
  "key35": "673pzdi9krH24UgG3sD7nS2ErxtviqdEQWZ8aHBXF3gCne6Ytfqn77YctsYU911Lz3LAX7nFpE1Qaad9XjtT8EcK",
  "key36": "5DQW3isUPxXU8FWKMc5Vh2qxJTzbmnU7FnoLFej2pLjuyW4kJDWtdik8axVsfvwVuv2xrpcprAxJk19ioCtBY6uQ",
  "key37": "2VLg2iSHzSeE87cCK93bdYa1wz9HZ4tigJmUzooTrZLQ72jhUbcRa4UrjVonnt5UomSeZ5KY9n9UHtUYCHj6kzSa",
  "key38": "2o985Y3GxPRtQCPAQ3v2ttiHnWUwLN7HbbZNmQZLJJyFW9vERCp4zjqcKkaXDVwgMU3Rpfz1gaqSBCenzBkmvRs4",
  "key39": "4nugmwxgL42yVnkkYFS66roKXd3i7SzojM9KoSWkTwsTyCXXK2USGTfufhwDXQb6FtcQWUFFz2rVb3TwpkrLTFSi",
  "key40": "5tAqfMeSY17txTgVUyhh2X3mCDQezT9eiWbFzi4UKdMhiPesUX7jVs6KjeQa6ENGpK79qcj3PTC3W1TiL4QE5kTM",
  "key41": "4c6P5PhPcuxU7X6VASBJgFwDYnVzSc4wFAo3MZgiRVDQytBuXTFBTF7FyARyUAbr6wUwXLY7rnDL1aSUM8oAZwU5",
  "key42": "42WwLapJ4pPRXJ4xoWQg3cqPxGsTZKKFzmztr4yMhs3mqYvPpsQDjBW79DPMrLYSqd8pjHP4yW4q8cfhy8GB71QN",
  "key43": "m8str9X3fbeNiXaasp5gzx8pbZz1WsYA44k7cUiwXe4GsbaKmh81iTpfde3Yd6KB1dxXBpYEeVdP6rRHqSrJcTB",
  "key44": "5sEQprnQAk3vkZE1Un61Nq9J63HaK6ofHexbkNhG81a6frJFPv3jubmf541LG7W1DXpgx8Qamv5EbdYJEFhb9Vbg",
  "key45": "5SkHufTpnmJAMA9miRT74kGNmNYzR6b2XF7nczWJyXUEBrJUKaDC8G1Ai6KGfSk4nzhGLd796kUqJ5uT19LWJz3e",
  "key46": "2fFyfZM35ZMF93oLbHbPQVqwSzriBwDPwZxNFr6HJj3E4sYd59GTXinPXYFoXNpPzCKJzYj67mafXdVxwb32cdid"
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
