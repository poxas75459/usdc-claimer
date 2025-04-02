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
    "54fcfUAsTp9vt9myL7VBkeWF8Mv4y73Gq6t7wmRhHFpUWQe6yDJUFiq8vRsXQ34rt488Kb21CEFomUKmiCWEUA8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHt4dXPHjrBLdDGdbfn2YLx7hpXYczvTZYmgJWqAKkcJKr187FLzgPg5XbwMLgxsgReXm8FEnu5Hhqzu5LBMCLU",
  "key1": "2GN1Nau4j19qpthGucF8FzzwBAddAwPa9qo5EXZdttk2FCNpqMC3akwS4H1ZefYijMLyVrkgReZkVjFrJv9ZKGUJ",
  "key2": "2m2fxvDk6FG7R9it9oXdWYWg2Jzww2Rkq9bC8whGF3uZKEvnmMvT9mBRKSbT1sWSzkjc8LnnFjyP1sx44owWcvhC",
  "key3": "3gsHaRvqcaSgc8aHhU4HrVfufU9LTHNZoddbWDs2MFHxQpNZtLTjxgPAyMGYsHNnZiqg5gc2VjDFPSfZBz2nJHSR",
  "key4": "4c2jDT4JLukyE3hsBsU21a3xpbPAmchQxp3Xr3hMkxtZYAsocfWN8gfTkEVWdThLz712k1KCpUB4EKaSsDBA9RhQ",
  "key5": "5GZTUZ5DchPNxqhSVX3mn7VLAYn4ooJTVJ1skV6VXm8QEGiJyxNSai3cndZcbC7fZeAMW7iCmtmu1VebxhdFkNMZ",
  "key6": "2KRXNyU4weuxtGk7MJG1uXBBJsrCCxykCxMB3VgzZgyDqeatyb3UAVAjJ8H4iFWbzuzsbDFr1kUQbaXhwmdPTod",
  "key7": "4tNGnNVgV27ijvRnVfKS5aoq7v6QQ3WGnwBgrQfy92WNz3Kz6mK4Yrr1nj2LxcFADcMR1XJKufqJk18yXhnewxnc",
  "key8": "zTDzGad2oKXUGj8VeVG4sV9owKbM5woaALGkPYWhsRVUSjNMcYhWUrFwPhhTFP3vwQnJu3zGVxAXJdUqtP9618m",
  "key9": "5J1GNPxLB6yiyBacG4ycNbBqy6o8tr9ngr6CbqcHPMZYsuqnDMXDyejDcmTabYxdrH58V9dssETxQqp5GdsCyJQW",
  "key10": "59RmKEgjhjZDAUVSWnXqjSod6NdkY9rmqHLqr9FstTJWFKTtrsEdbwmPij2M3p1tvsHTxtKgtCN3zpWie8a677yG",
  "key11": "5B47ej2JdzVgphKhzs86QfdTrnYA1or1LkfHZvFCq9LMAw2m7wiuY6BCoq1DhvRD8CnNZix3nQynsC17E6Wvhb6x",
  "key12": "2qPJQ19GbCeEzoqnnuwcye1DiLaCBGxthj4pHM6rzFuBnnojXNyjGZw9USe4zdtvRNtnbC3Z8N2PWvjnC6jxmnTJ",
  "key13": "4ywEZG8mKJKxAzqSCwNRU1Cd3GGh9h4o2cKntyoESaN5Lp9b2w1cxNBtwes6j1AGVA3NtYPykZksKopMMLTJHJQe",
  "key14": "5RAvQcq8SBiXPRdj5aDAKohWR5GFzkrqwJfccynr7ptXSzANPKxZKRBLmbkfW24nSBj98vycVi6g4iTRsioVmbg1",
  "key15": "2J5tyEyjLnjx3UmYzzJADMFCcm67n95VJfJuB6bhzy5TgTqxVwuMaQok6nXUJQv9ThbRrygqQXMfpE6A6ZcfjPGv",
  "key16": "5oiNn39g8J2YdXHeJ1wEZto94cBNNYf2xVceQDQ75TVbUvLp99zdVdgSzpmCUpMPeZm2wCFkufVTpdxDw65KoJ53",
  "key17": "KGERdQ2pCsgqAfA64D2aLSLCVZvCrQAEHVrwMPR5aqXojemVxFoaZmYEXozNdqNhA8PAq6naPvG1dxH55KDkBDN",
  "key18": "5ogK69JjcvCujQozUkVtcHss6EoMQF9G5jt8SXkdzn6jLWACWGp38JvediuBiU6RKEcqKsoLrcyWPxXMESMTKY2s",
  "key19": "2LnVV5aLb1v9awHE1DHn1iPCKhc6mmDWsTZ85LbJvv6nQv2D2UXUeddZUa4fEAdYzRQD3e3JdWSAq4YgdycMgoaZ",
  "key20": "2nu9jfXJufC6Mp7ptk3sJ8fvUo5DuM6kYqqRaWtsz2ueSLjctTYCs5xRfh372qkaFT1CpLBnwv8LdbKEqWweYBUh",
  "key21": "2mY1svapbBvX9Y86Pj84UjU4V8jWWyVvQZCdaumu5ZHw6fGZpeCmvDtXxBBa69RL7EQkb3HqYKouJm9jdX1Goax9",
  "key22": "ANLidK7Nbd9fzKhoUCTJthQpXG49ri7wUdGXUtA2xj8vyaS6w9QaDFsmbrDEeLEotfN1gmepXHYniA9SexTzb8D",
  "key23": "Se2gwxdXuMUJjyvxgqTjjWroG8F6MjuTB9BmEX1L5eDZwvUqiQRPsSVK5cWQjkUjaAU18gQeMU2pgFtbfYjTMoe",
  "key24": "7Yi3LayzDXqpQ1qnW46JacsBcJGZYnW5PPWbejWuHyL2f2SiU2Ye9uuJbbki3dY6ig6x6FZc4NbgPkYrmbPoYbs",
  "key25": "5prX1ZDZzAJVFqohtJes5KhfT2jcReNHK7n3xX4nqSgZhohThA8c8YNnuUoPWvd5fTUYcUD4beGbcK5UYg9SWCG4",
  "key26": "52XCHJKpZceyhqPgeu1cUiMiXDNDi5sun8nkxVSvG9YRjtRcq1nsL9syvJsHSj1xfrqFCjK7xLRPfdfP3Cn4mv4q",
  "key27": "5JeQjnA8wxtRVheGWCuvgYaD5sADpjaNqEmtbByZFqtMdeEvgARMvtbZne19NRQhMw3SZKuy38UGqXdiAKiDeQo",
  "key28": "4CS7LaJcKrquAcLheQTbZG9BVtRdtzDNWs249tR3X8acewh8vV5BafKmbZsDpUHfByPVj8gcXPS6tHmAWomKq9Ft",
  "key29": "3Pc3YxYD5jLQDYYjHvSx8GXmZ5Dsy2MM8a8QVWAi31t6FPp9n1HNbAwhf1fKR4QoqcnVe7ccHbcBjW4sjSc9cXci",
  "key30": "3uGZHAaxwMPmiNFnq5ePM7SYkrZtqWArH5rgVcLpkMrceyf8ZkxPYC6RaLj7gShhEJN35QYDvsJ8ukVuFgMBQrA5",
  "key31": "28nbE3RTr98HR9S8dtHSDc3cqVoi1psQfPrtWnhctdYbWkEHBYjpkeaHxdgRqTjDQK43E7kE41yeCF7kTJ3YggrS",
  "key32": "3vWM3X1rA9ktC29VYAPK6iqbHSKn77q4UYeWiypBcaZq8gB1159hYo5LsuQLUoSgCeCJP2Jz3653UXEnBXwMJNfh",
  "key33": "3BdRPcghVNiiA16EyQ3QXxQzUetM4TikcuZqvKdRao7dWd13uvs6j2daumMNs4Moj1tajPXNaGQPNSemR31n4SUV",
  "key34": "57TfXWBsP9B62qSNa8bNayGGpKi5PDYn4BS7uhwyaRe5XQzGSVZiFsCCf9LiGd65WTV7s9uDVFDzFTZrqZE3iX76",
  "key35": "34uvq2sW9Zb94WZRJv2mEyYCDJnpCY9QYfzXMbw6dSNQNnAsWFLPC3czfKZ3zHJdvwVFdThU4KJWA3DH1PPBysVT",
  "key36": "45Wf798QBg3EQWLZ51A53otcCiGhXmdeSeKAGEeyqtCWuZRoENyFhB23jsNhEHSDcmJ8WqLr2SFPaPZzmD95uwbi",
  "key37": "641Q4Gn4sycNPQyw7qxWsjwQSdTaUrXP9KCyNBt4qdHY1Lv4As7v972vzh89wSYqPGJe2GR5RwLRq4SATevZJr8n",
  "key38": "4UbTNEfNw15hRiWWFgzKpLt6C8Ler5RPaBtTqj2LMVShezhb6bhZQ4Suc4wPE9tEoPsAYz6PfjSu9DZd5AgNcmsN",
  "key39": "5pAdHKyHHgSpGQod1NW1TpKyuK6owSyQd2wbLzdM2yALeS3FA6rCsDbND8bkaYDTV38sT1X3VsZJxUrKyJHmVk4d",
  "key40": "YvQKKW3nGz36utoptdAmi8wVPoV9GWTnQEGMBajtV1Len6ZaftmuLSN5xxjws5Tu6Vt6w7dnjX4YxBrXdaLcwgp",
  "key41": "66nrzBff6c67TX9MuvRFe6abnAna5dsK4QqcwcTefoiYN1FUXSM7EJu8PZw6sMk5EQr7vtb1UaXPTQZHB6UiGofG",
  "key42": "L4Nit7Z6q9aggAbRdMacZv1ER95iE92AU4gR3U4UbDnPnYVLdb8Ym3R3Az9SfhVPjAhK3jGML1NHanm9WMzj8Pc"
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
