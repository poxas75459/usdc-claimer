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
    "4s78tVsGGwwpKtHv2bjVXSTchtGQ7A94hiM9iA2YdVjTjFctKERTRuWKjXaBhdGhrEc8KgBtMZnu5zFabr4ZgUdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWvMTYdQSHoTMcnCszHWE2VqnbaMYfCPdEvBSh9uJsCpdt1pVdFdBkK2rkA2LLpJMfXy64ebTSLGbrahYqfMoD7",
  "key1": "39kYg661HGNv9vyhD6wRhpDTCb2g7V3rGYHM3h14zRfZii2cPEEazAvft85zAgF4Up9iPUxDrUfrYRi6ocpAz1yN",
  "key2": "2zEYUJsdUaeGd787kGCzyudQ1pmjeKNghynz84RsXTgFfgZnHsH6yA22PNWFZyW5JnPcnWfhJy7XKTE8FLZcUcBx",
  "key3": "3PiMBoiBMskkz6ncPcxnyh6NcyfVd1FhkyTnu2MSY5VR9epbceg24yo8WgGRGahrJs1oFmN96YMrwJ9QWSp8djj4",
  "key4": "4RB3HXYV9gDi3bvy2oJ7ixoUX288BYXhQYsHpBxy4JpDuxrLDMd2XXND2mjbT4sWCLkdrVyuqksQBV8WHvdFrsdn",
  "key5": "238VZza2xQBNt9x1BVdCJdMJAX9SsYYDHaVSb8RuRALmbbFBGPcMneyQPeMgeSUpmGWpw6o29bwTPk5UyheHZRze",
  "key6": "48zmo7r1SDTCdG9JXUDgazsUh4Sgb8n2Xjky5w1sMbXo8ZvG3NsQxh5ZZmpiqbzmmUy5CwpU8LHWUURXFRrHNv3A",
  "key7": "56htFw988dLXNKmB7EdaHG9z25SbSEFojfjmbrQWHgstYXEvAx5BF3Fn1MraGuL6UBfB8VzfQqZvLLWLgNd557ZU",
  "key8": "7N3gyAw5v18JJx8CGWwWaKBM6YRAMcQaJBzMWNPq93VKVkDurkWvTj7rrQ3iWgRLsTpKxpUYTknXYSUoSJVhhXF",
  "key9": "55neH9HbjtEcm5mdpuRYoqLpeSgDvEgXMABFxuEzMP58NZJpiW8oANhWEZ4hfK5ccVqChGbH6J7473B2o2rF1ESa",
  "key10": "2Mxuf7vCZ88BhUzHrHBRLeShJEBDq3gEMMv5iKySUqmG3qq3GbDXFuDsDSmpg45gsi4sx6dSDDMqmqickgHjCW9R",
  "key11": "3Nhq8V7mtPig2asB4hoNAt4WfNhD9gY8iCwuSL9naDsop1QdAHY7mXiteZPXsB1ij9E1vfozdVJPWhU4e1xJeK3P",
  "key12": "49hTQAxWXiqRkLeWTskKxYRHsKvQndxmTCgnbD6wXGZiw7Tg8kNBXVBxEW6FnR39jTX1SB5X1pYfpZmLC6dd6vE6",
  "key13": "31yhpoBXouv7Rm35SVHTN3BjgAENJFwEV1mMhiKDTMrxgo1bYfM9w1Shd9erb3WUdsja4qWeTPAjacVm9R8qdYij",
  "key14": "3XZBJyGrni3HDdkARTyXj4FhTJ3gWmxWQYos8DATj8syNv5ENfVkUcsBe8Dtm1LkAio5BAzF1Xdvf7WP8Nio6Nhd",
  "key15": "3YaVAiCMGL4ukqdzPM9dEzMJayQiujvnJ8RLfa3SVFAEY2pPFgKhv6CCreTsse1D1WJrUL5JwW4KZWbFwkdQ4tKc",
  "key16": "44wpes9ZY4HxrsFsjNFDVwbLPdzkkZCjtGoHYphRJvoyP6o2UiE6xb7bcCtqCNR2zq5DinvBPhYa37rhFCCFSguy",
  "key17": "2Ty539fbpPdK6Wi4TKuTAng23DJAx44wCWAskADSAcBoQmQFtaFZzJ9y3Lpi747sWrdaUfCs6EzgAPFXxrq8Gdgg",
  "key18": "3DreBniaiwWfztNmTEULMxa2XWChU5xjks9qN9w2iWyBPEmrQ2kSB6ybGR9kEbom4YmbvSxttX3QnNcGRdmSPLNS",
  "key19": "54Mwe5nyvCgyQCNzKczyLEoVtv9oKUdkWzdogZ9ZT4JjgbByEWdZvwxmPm4urGXBSbSv17iFgy4p3ksz2qVF7ZHm",
  "key20": "3mMvodifhuQbLEQvG7uS9D5QBtwAFAzHrDZWprQ4TGW1bAgSuUtNoHLDrgrGFZLmdmCzike6sbE7zJJUJLLkzSHR",
  "key21": "34SLpDGcCTvRK3d55bd34iJDTzq6N8njJ8sw4LmpK9avKyQDCJLzU2PkCYQHV9DxehULz5jMFRwa5r2AKKibNak7",
  "key22": "5NShXgKKMeN49J1esD7nZzYR82hEa8XinfNBQCn5N6Fucui9675UwegrUdizV8zibX85SAqADssWgTBQzuo3FiCe",
  "key23": "2XNaGmUEmgwcTn1tojHg12MewRVp1GvtJgXmhzGG6qWjiNdaDMTLCR2UGdx9ZNwoMDPEbL8R7dBgu3TV4ygG2WJX",
  "key24": "3ywwfX8UbJgj4DeJC95icNWafnQFx5U4ypDhAzVHnoXF5fPwZxPs55PkAqVys8AaUsaVYYQsuWP2WC15wa2KMX8v",
  "key25": "2AazxaMz8X5JsWJ7XCLCvE9kUhi1SYXoNeemu6JoyDaCUg7S7jvsWefcPMpDkbCcrzaY9gfHcVFxXhT7ncx1M9Lf",
  "key26": "2Ppu7MRvxN2yPALhde8Vyq6oRr1pfux8m7xoxdNLbSLekcnDcsExJxkiMx7eEuZ1HbGPwuhqbLc814Jix2prEbEC",
  "key27": "5HVAkv8Gg71WkhdNSjAb2ZoD8PJsardCm78kSRVhtvwZzTgGXToVnhdXraUUGuZ7jwrZTdxbK6piUiHLkv6TYCFg",
  "key28": "2khyDsfhsni9LheH8XhtZEi3gMmzgRXKzTDTLWmPpqb7xrhzQXmFSqn8emXxAnvhUWzvgPYf8dWHcuUKgKWSJp8W",
  "key29": "5evYzdTyse3yR7JfxC32B2JoFbt5gAaZ1vbPRwd8DMYFwrYW1Tuswed2rSwbuCoBpAUKCBj9t6qX3TS9cMc8v4Nz",
  "key30": "3DyQ772pEfcRKDkAmBcdjrTxLPRDRR7ACLFn1fzDWmTj5T3ST5tNwY3p4cHm8yEQ96YGc14mfQXZEYFy4GrNJDa5",
  "key31": "2KLgotgJZGgJ3SJVHW779i1QZiJ3kuLGoNB7oBjsjzFSjgZbJwuQUGcC4FUnfoXZCJbUzKAMdsVPeqcjR5VbsZA8",
  "key32": "3jLC6t6bYMU1PNp7bPG7TcxWyE9gsjpxViMgiv8FnqRxagRsQ6U5ZM6vGxkHXeWqpvgF5nJEgAhB9Amqmj1fFFJb",
  "key33": "4TTznPEy5Sisb44eHjn9rgQHaPRCApZCPmLJ9CkZUGuBozmj5sPdr6XmswJgWLQwRH78X7bx26Ld5y5SvLeF3o1d",
  "key34": "5vBpCSBGfsidhixXvdEgPzX5EmrPXMcwextLAPCrYgrShRSmL9cs5Jci5g2Gof1VPFrGdhzRDTFtajLfCQVBcNZw",
  "key35": "4fL6DoosgWkx168fW8jGabWjcULjKrd1NZX8ky7dYbS8EDkJjtsb3Wq924gL5W4CiJWokP4D3epEwjy9u1FRfF1n",
  "key36": "5qvKE24cqRP2tD1gK9JAQkBe5GTPgf2npNQxW5FesrJCgSMGVpYJjYaTGeuar5raE8Bwo8rSkSmmZ2aETSoxbT9f",
  "key37": "dYmtw4L3yUpBjjSeiRXmJttYUGXpofATwaoSDu6cfaz8r8tCwcGCa1K3ynxWGqEYHLLRXDHUUUMvQdWWX2mdW5Q",
  "key38": "oxjRPRTmV55AcKyo6ZdaQyGPiveZvGfHVEZ5suAac3qN27d3Xp9ciaf6DVtHA9EgHw93TNTMmVtfoTaEy97SHn3"
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
