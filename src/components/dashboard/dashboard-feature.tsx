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
    "2yAz4L8bXrBj3Pr2gFjkxptB9oC122Hetama813uAu5tTRGpAPh982PHuxRVJTxQAUua4GBDdebL9DqjRnZHwoPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPu9hBsj2fVy56wNacNNCSTPNGij8uj7bwyNwFibpgH8KpDZYSh6jYDjny1iRYPxcj8cCUYR5efmLgz5txvvBkm",
  "key1": "5iwyJCGaePxWmiZopSaVievd6JYcMziWFJx3cZPUxmDJPJFNyXRc5PjAAERPEboB7iCqBL7JYk4kphgtvboBpQxM",
  "key2": "598zK17py2bKsUEwd7dHV4f8UUixZqnsaedFYP5n9NGBZhmWX6MRSfds3Cc9QfVe45bv352V1zRbWCeTaPY9cJoi",
  "key3": "5NWjKFyLJdKdbC48hzikEruHy3XDuZzfjxddESmVH9uWsTvsV8QQRyxUZj6gygk6HNcouXgHLMSpJVRUaCyptMxt",
  "key4": "3uVdSaKW6SFMg9sAmv285Q7uUB5aN7T1TczshGTk9hU61bK4WTMaZhHSWqqb8Jr17tu1jf3CdwhZV1kPRB7skZwy",
  "key5": "4g35bhHY7YNWhkPRcR52tdiPQ9xAr2HNT6f3nDuuMEGx3KPM2QE6VAynMbB7huyS5Nf5Lz7Fis1FGq32oYsKNdrc",
  "key6": "2vJC5K3JdDDDLqiCd75JSXTKrzJQDKwQRZ9EWF3kMjD67DJ7Ak2XJar35yjMmREYaccTStWdSmDKP6aiRZoy6Wn1",
  "key7": "5cZkfT1UyGMxB3CwkJXYmCsCk9ZyMmsTLkFADSgH5h6HDoTsQrqMs7Br58xjHgtfdmRSMM1Ncy93aSnATDHaUwvR",
  "key8": "4ofcroeuMy8JodgdTo3au2EAxLva16X1LEqswfMhPN74SP1gNzKC9Gk5Qn1qjWBrd2rF5oFHqxgTqwQmDDa2Y6La",
  "key9": "5VNodip8PqfESANJUDHsyA8GaJLDbSCDMc1rgpxGQwSBa5b4Msr7fbbqhSVmAM9zgQiY3oJ3Wvw1U4VmQLPNFG5b",
  "key10": "SDBQxtfSFZ5HNViVnPV3XSvq6DYDUqL6458SjPbHkqYqLG1SV4MyjBo4W2iXjXBzjfqz3auHFHefL7WXFZjYcEP",
  "key11": "4QpqrLYqYY5Suf542qCC7HF1uF5ojTBAu4ggKRCLae3Wky1uVAvjHQ2LadJBA4zaLyRTrXYgGByG4JphK3yoTycK",
  "key12": "3ggMaYUGa8YbgiJtN7QJb8swqfENk5v85pZMaew8UdzGJFRFY2scxnmCd9NpYLdsoJmXrSHdopQUafVLLH8311KD",
  "key13": "2QMndAkB2z45hrjnNXjXKtaJskShsRBaucJEuQE5ZwJwhhMDsWbpnFcNfZLkFSzQw9jwL1xWiwgHh9m1tvH2LeUj",
  "key14": "S4cyo2qHFtf4hNKfT41gP3sb5xrZEDLDrJtw1YD9FWPWPLS2aqTY1KV2XQN7Z49yCBE9vtaK2Nsj7Du7WL9K1gw",
  "key15": "4DcU6Pm3gyZXUAw5BDdeJH1KGGjFMY6wycRDxyYbAwQctew4kehXVVz6aD78roTMEwS2uzTmJ4dFmQaKVEkp9qnT",
  "key16": "2KZ5a3sEZ6XLPsS8d5Rm5KyMLgKm9yrox3ChqhjFqWXjEMYFXKg5dzVXvYdC9LcRmUgusdUBzyJfYWzgbUwaSxvb",
  "key17": "2WvQXZiRhQd5rDADjWnmc43THwdMfR1aM7CWuUEnPJBfCebZwnTanduV1jyntVu3EGeqLT68ThHtomEaXGbs8EgN",
  "key18": "5yLsZXnG3RCZj1992n9NVRUw75dnruoBtvANuP47erjxpcRUgTRjSLyHntKcKoUZTQA4QkpBGjwVBG5NQvZsatgv",
  "key19": "4soMa7sH3RZ24jbE62dXkYxwhQpQ2wjyf6TRj8kWF9GtHgAwywgLEkpY4TpEv9BZGoojQRhcPGd7HYa9a5XAe8J2",
  "key20": "2JfeDXLv9NiPvkKbafApYDXUdCmA4GgjhUw1hK5n2yYKbdk3ijcEe1Drs3HQczV8cUzw1EL2A69XhcBJdo2Ad6uP",
  "key21": "5uGWjpur14z7uxf9pGGKnHxYo15wB8MtMRwxvwa6oQ8srj9WuAR4wptjXv98QkF3beVu8yEPWRNJLXBSwXTo1NiU",
  "key22": "3uq2UVg9HKRGDsimjPcDGC44nQNFfs99omvQWS8mC6q9rix2U86EB9mo5si4v3kDxHsVKqFys9YJ1jEQsFBtVVgp",
  "key23": "3FS8ACWXM6XCsn3aRekCMitWK7haiGdsPeSfhvBn27jNFiejzpXjQVGQgmuWunoSE7iUNUU7EzG7DGfsLomRB8ZW",
  "key24": "4DWvUy9rQipgP3AgrRXgSKSzhpWU1x4Negb4cZg36w46FMpQiK7TRuxL5Karg9P8bXwTSEvSMbM3hiukLuqDaeHT",
  "key25": "3krmYtUk4k88L3e3SgoJEBWiBnrbdnkXDoGEdsJze54SnRr7cAkepfsQeZMVa8RbbPfz5AyK7U8nf9KUX29fAQs9",
  "key26": "56vXXgNVEacCyRzSvcWm9z82ZDrVdP9NEExZEgRPLsJHD15366CteLUyNCojEvoXZd7wYUySe7yL87kqJ2ZFgcnn",
  "key27": "WTFBbqqm3h3BVPGdTRsU8Vh52EmR54hYDRDFWV9BNU8Aw81h1iKcKDQ1fdTKxKGA3V1kiBvBPWDYsvHTvQ4DDz3",
  "key28": "4yByuWd7wmoJSeieveRMN3DuaCDrdQCJE11sdGMxnWJZdtCKTho6uANXVBS2Kh1gwc4kSb7vSDasZWtV8mNtvSsr",
  "key29": "QzswpykbP8HDpKYtSj53VM34iHhCJzwHnFbvofhp4Dyo63cxNbnTv67haxyjsZ99UspoyZ4pbAHCMxNGFurE33N",
  "key30": "43EPSJu8s5t3XVQDNyLbjm1HJD25oG3u7LtFthhn6Bjzmxp8o1ctCirax9LbqgtnSYRMuNzMmmDPPquCb5LPTxMM",
  "key31": "4bVZHt8G5Lb6oJeYVS8VEE5q2kZ9Lm8ZXNaYSWo6hiB1poSmaR2gA9E9Jj7idwhNcHXRE3vZNguxBgnunxEyrWGc",
  "key32": "4NMkF3YWMCy497GNi2yLnh2sfrjkoQRydZbYzhNBfajQnKhFE2uNgN6wAhsAwPWD7Ny3aNVT1x3AQmmZBLYqj2q",
  "key33": "3PCyy3QD3Tu4RovaZu713jGpE4Mw2i8bJdPdxBM2yPBiXnEQH1Xdks9X3bmaQgiCRBU5t38pN7opb9oj4hXvDQgC",
  "key34": "zJJeAQDnC2NCRBwkKC2bubATquWAax2NFXf3nJoSWRp4E2tAoUZhpMBNz3jfJnUyfoayALv6LK9QLtdhqY7eNNq",
  "key35": "5HhNtKYWqF3czuyq45SVhA9qzPLrsBK9AWmg1KRFKpUQjr76bt4dCMmNyAW1ibDzva13tz2BHBRqwSXdn9ewYz67",
  "key36": "2QqEYojPWxkpTvaVtaEhcqtTX3DczEuDnNTKzKiyVzmQUvb8D6mP6rHYjVdhSLJvMSanEk2C2NMk8o8qpYXcSVtz",
  "key37": "b658a19kaGxt4AU14T6kp9oYzH5Vxo23jZQ4qJA596ikQxA8EGxK2XynQ3ccKvxsMc3XpjQBLn5Mwev49GHtXxp",
  "key38": "4ipwtWwasHSjMEdaeCKBamJfgttUpUh8dRvh75bSPWEjdmppZZxV4Av4VYMr5i2bKkAwFjPDKEGTBSZoa4bEif2b",
  "key39": "4nL1XSktiHqmJb7hgLVFjietdrDLJAQjScgADfj1ApHazz3YcUR2Tcw6jbgTuBVjrbnpWkcW1nnGZineDtwU8oi6",
  "key40": "4Vscx8mqv618H8atWhrWbZc1pDLjvt4keSkkFFFsrnX5VGewVMfw6NtY7KpvsPAnGyT1sKXarTZ7pmNz66xGZt6u",
  "key41": "22RGGDCZE6uurss5nYAnSpF6W72Ea3W2JCVU6pJw2RzMUtLTw8hzq5qcBrGr2x5yXhsYpdYWEku6gDjVPnJvSRwp"
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
