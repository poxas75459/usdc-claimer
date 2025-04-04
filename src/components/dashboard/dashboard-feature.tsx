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
    "3dhchuUkvxguQcjBw5HvbiK5EQJnxZpthEDRidxNBPdjf39HG6Ucr8Cd8BZnXg57hJziwESm2N73vKaKQZq9jszL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cj3L3KLGTBNdb7SVpRLMH29bhGTDoae5Jo9WrWUrGqkja7QrQt6D2ejmNNFcr1dNTaDAiR4sEY4GTemZ5gyS2pN",
  "key1": "65hMx4AmpZP8tW3vUm4b9Ab2jXLzWAGfnirQ6XKDeKNsbUDH7x6Uq53cyojpqvkjperRMgiCRUH1vqwEXTVQYghK",
  "key2": "2cKKRxsV6g4PSLRsedDeKw625zzovhrremHhzrJ7wijzbDXYPBkWnu1f9rTiyUkLaGcXtN6mkcx37z84z52TCpLV",
  "key3": "3KPrrh2PDSnqnmGaazEkf947w1QLpmwSXWLBFMbmEJk9FwxEHmZxEyswhikRZvXYFpEoLNWhcPBHujcGqxZn7y1F",
  "key4": "eAQbQTx8Z8musTaKi6J8ujrttiu7ZkcJ5JkC2Y82LaVNPysLFUfyMeqXiiwh3wuKxmaspJuTMCa7NgM1QhVaszA",
  "key5": "25wt9ZrM8atSBV7ALnK3zq7wYJPjL14s3fXzYv4Y1QFLFM7gAFoZuvLFYSa7BJ44MshoThCrTD4kWUjdXY2nHEUW",
  "key6": "57TkHaJ3NZCfc4WGi5YoU9ocqNUo3K8DADzqDAvCphXQUAvUQ1puvcmrTavJ68LNRS5GWLVRYZcFrgv5QCGsWMXw",
  "key7": "4i35UA18XhJS4UXH9Q9xMqSVuJ14VWK55agaYjkGBVaH65kihd8kMQMdG694eP3jV3MitUMNVeD5b3KN34qqpA6e",
  "key8": "3zzakufmBZwe3hHS3t8dYT6scWX9MvXRrPcA1QD5T2qYBVhiCDMdWSkoNDf41wuM1BhuzKXycWRisG7QScNr3D4d",
  "key9": "87P1GaavxFmTRY3ouWvkmqmZkx2vJ5voUVvZynopHbDiZoNswnS9UsaHWfsVCRSh4bYSgTX9iuQuTD8et5tBmP2",
  "key10": "492dRudtXtZuZnXqvLGUwPkk3LvqeQxGCCqs9MZDveGzaUQx6DrrFtVNTagkM82AWfyvUQWWMjhTmzNWZYZhKqZV",
  "key11": "5TCx8xKSoxfnYqkx4Wweouzj3nHEbnmgJNPEajPFQDTZhEat8Pazj8Lysg78tac2MNPHC2XBqdG2NV3wAL52zHL3",
  "key12": "5zx6yu6SunENYDgfUxeV4FuQupK6qxXZdJxJoTCV8Agezj6vk5FHieW6zMAbpLTU8LUZ24o5KZfp4UBb24PRdxYk",
  "key13": "22ohdjHfDJzjs3XfXRbpFdSktxthcnzqfnPVcauJgHZpCnLHaXRB5jodwhs4xHhLB4RfgmXSMbuSwiiweURm7wMJ",
  "key14": "4xytgFZhdfyJrmc2zB6RrwXCBTaC8yUNNrL8zExtxKfJZZjoJp3j8SRbxPbgGN9P6Hm9J51cTE1Y8uHh8TcYaQtM",
  "key15": "41oHLPqFostBnkpyVod89rqKQDVEphtJZsXmM3KAVhtPBBNptKxt9fJhLg1pM2xrczc1d6UHB2NA5ENp8NQPfxox",
  "key16": "4sPRjiaLRZV4ixvR5GRchvt4X5RZLqaaa3ZnFHfmcxEdT7tWR3ucQC3zqD5JeWxVwrGzxTVXDuoByzyZ63agknps",
  "key17": "5wk2NuHzM3mYxbbnKxCygWwFV3ARF7UPc87grb3SUrNcCXdHoNFXgm6Fn6XhnuyqvfFzw5BcEEC9LBS5sVqKTvxP",
  "key18": "2EoYWteCNufWsWUoa87tBXiuuEi5roGJGGJGR4sD96Sc9it3xWcuPBNbEaj1kDp7TtqtYnykMJAC9JC7gCZELixt",
  "key19": "CynqAPkda92YHhqipreLmzvfVyLdk78Uq4qCKysq8qVX2d5LjBMsznRWGzpCD8Wfd3X6y7tChB4cdN8roZe4K4W",
  "key20": "5gVUbXXRMKPLa6kCYrgSxZEBhj4DPWTJQ5n3cNr3Rc8CkacWw4heBfayzqQXK2N3UaybqQPRHbGa1oZFpuEQszp6",
  "key21": "5iEdhXF8c9ku8u9cqhDz6S2rzvhTnbiFS4Gu6WKUEmHwQ1mJYrkxFh8wxjxGKCV79r8CEt1xcENLSC1So4bZkLhV",
  "key22": "2KoT1H4EqNF1SnVMeb94KGV8wqPTUtrLyFdhtmmXvyDJMrabjXip87Z3fcw2QtV8mtqJymKHNPzBwDbWwbojyETT",
  "key23": "CEWGnLdCnkwoeTv8XFeq7C1m2fjYwqft9V5eokRzkiQeZ3WZNyi514bxJootizvkYWUKWT9sTswGcYay2sC1WLs",
  "key24": "XeFwHrmnb4dXtn2KzeFr6h5gbovSpnyijPNo4dxAuwccsFpJLDtiNM2j3zymKdttWryYGVa2TcQetaVn5aWZ38y",
  "key25": "5USo182Vfs4WecVAbuMVU9txBLsckzaj5hDuh1MgaPuLVgmFEb7Q7F86M2bx7g7qwg4pRoWc26DpiFEVcutsR7yP",
  "key26": "52htTEoFwAgK77htA62TsHe6S4LVCBR5UY2GjvpreXckvSrTp9bi5J6T49SZgqSZcuSmrWRBDsrVKY9P7i1ZMzzM",
  "key27": "3WXzQmcYoZiXfP3WineCKNeuPu2pjFMDL8WxeZfxrQRMroxw5T93uJ6b1QVzzmx25aoj4XhJ5zhAvc89gmwEmzVz",
  "key28": "4R8GNQdhhpkWeK4tgcZTPY33VtLhqwXzGWu9ifBxN4vpUH18DFZL1EmanGYuWZmdXVxcA5WY8wvxBqnRuhJtabKd",
  "key29": "4X6E151R159ubSAMg9s7xjPwabdgJ8LergnZd8t1FGfjmkbafexjmyCKdj4RrPxGeRpSbz2WP4fsRZE3EXZntdX6",
  "key30": "3KuQ7LQ7gr5yu6SbwrJFD6DBJxnRHQudeBVAWLffgYmD1BPwQebQNJySsL8fBjSDiXYHCoAc126bFogyGfVQamrP",
  "key31": "4RQvrY5Y4h6oBYS5moVQaP3ETfvmNRxVYr8fZTT3xEcP74P2392ZpFDdWw4dNuQdKbJK1Nuu2cCNxSREQgmueciJ",
  "key32": "65GyzSn8DzSA1DHkYmcpMnd6E3Fs4k8hGQtViPSmGkYK3pKi1aCaXh6DmbsgcrWVZurSodA3PvDMoW29RsR6LPuV",
  "key33": "4mBpCsTayuNvfaroqAxdShAwyahRYhHN8EFUXQZN9KjfjJfXrPA949U5Wq3WWV6KCoKNq6R8xWNqhVeMaixD2yUM",
  "key34": "5ibVAcJTHsYeSDLJm19S4voeBiPfzf3q6fxpdkKNRjM3QRawhoS94oHSvSPbszuP87ycF5DtxwWaJAJbeJHaKKie",
  "key35": "4Dioidrh9x4W1hKfEWMwnxopyM8EQoeNHar8wVnb9ZuUhGnvjwcVZFHKg27VRxhMGrcYGgEAe6B8XHTrZWQNduwH"
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
