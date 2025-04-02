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
    "3PL2r4mTVtzgy63QAjihSM2waeh5gq3x9qirXq8deVR1bsQdfhxt3yc8iTPKkms7t1KydbesGbe7et731fjvwVQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xomGRUYz4VXpbswb3zXmrYSzZSZTNQhY9kxzj7TWqv7vKzU4HNnyuocoU5wGKPR8JmnX5DvdF9WCPWiDdRGCJtn",
  "key1": "2HZS3PrMP4bfEiF9U4pY2Nw7CAgpecExbEFZ682uCcitpHjqCd9zZ6xjWkowcXgb6GiW92JHLeppL5E8tY5nxvR9",
  "key2": "2R89ThNTyX7WcNm1fJreo2ARSPv5uasMEbrYAoVfDaj7P1PW562JvUP9zMJr7mswcYRqWAdXzmMnFBBJTkUx2V4p",
  "key3": "5YYyxfnnzpALrhZjHbFpx5LXwCkDVrAq2Tj4pbq1e4z1wsLB38a55GftdGhSt1xmLyyb7kGywMqqbfaixfZMZ8hU",
  "key4": "2vaxWwoBUXzx7cyhdSWdJ1ZVVMTzxwEEwpEzfpdRmmBaFtmvLfZwHRCjcRUpeuQkaXG33YfA72uQaFjf7WTismrU",
  "key5": "KJKWtsvdXgBnFHc4zXCQihTma1vVCjLuNoUHqeY3QBdobjCoPjKUoQSVJYC8ZzCtgZ1aFPrxaC4suUwpM9v7Vrf",
  "key6": "7e5B9exqCDX4ww4rgcVWfEeBBpkzjvZeBzAqVnZGFQ9za9eGZhwmfddYVkb1xCafehV2xJj5ZX3MwsBfmP6nH3w",
  "key7": "2UC1Atu8Zb5EWx8A5Dyu11YSJyMCj5BdxAmNMsayY11jFbsCgTRFRrRjuRVrxkQjS929nsMo3XRyRMtHxqszPY7V",
  "key8": "2bLn9xQ6D8PimxQYdqK387Y8ksHFJCgTazABe5zscJ8xPLZnFzSgz3Ui5fio5zwsixa3S17EfPft15iSXFesSbXa",
  "key9": "2bwdKCt1xnpjKNGq3ryNtGm1iw7FaLDwkiCzgWGniASQT9xdEjsaXVKLFc7ojiZfx25HHZF1xycgFxegSjhCEX8f",
  "key10": "nf4Hdq6fAV4TMJNwPk1wwf5UJYBhj29cVJL3LxZ5xyQTthdAna5kTseeAUYtt15szVBrw7WxtEK52dJ3Umn8UhY",
  "key11": "4sr1PyuZmJJLas5e6yzd5M6gaSFRHVvwH5jcKvhaqgwvox3NxS5HD7i1f1mwv3LsjXjxmEfpihwWFyo5L9jwBhWW",
  "key12": "66P77PN8oW6JCNBG7inm1yTuZcuST7HYsVaGn9dHHngRzytD42RNPeys852hRkfxCnaKbmgAYVnXkLYVzZA3qLnD",
  "key13": "312SUDjBirAeBzYCAjRTk3Hji25bGMLyjbn4qRtHLgM3Emxcr4wuFz8bYXqwZKzm9ggNrXFps7j3rJUK16qHiY7n",
  "key14": "4vnAtjacVj5U6YffdwGLkJ9VNK7KtTiDr75NvRunsrJbXqwG1oqx1KEJGsVEVQetyCkKbiQ6LjCMUikcMuw27Zz7",
  "key15": "4gTqctgBUgQ3psQsAsnwRSeVEdQVrYwU4Agh5SoBbcUoN9eH5r7cuL35RqPC45QVqH88qwuGcch7LmTLgDqEgC9Q",
  "key16": "3N1Qe5o7uVYWKXcfiofpDwWFxzmcF5K6aVzuRweAEjXXHVuk6kKLjW8cxNeG1pcgxN8cCM2e7TeXpL2MywexmUDd",
  "key17": "2DX7E6qWiQ9Lk9WUQhaFf7snv1ayNsvfDqb6ucoNe78D6eodhMtvYF6qADj1Ufcmm3XZKb8UTn6M6v3P2X6itoex",
  "key18": "4aTF65ywkcfENuC3ttjxvj18TJAE9UG5cNNTyz1qwYSruqDxvM665Jrq463puZSowsZyNR6QZgbBUZVP1zPQsKKY",
  "key19": "3X4KMxXXSatdTsBMBKJyYdc2DXcS4C48WJhg7ShG9bv4GENzftHZ1Q1b27ZDxKHku75MUHhMrziTVazHpUCqZA2P",
  "key20": "5QXq6J8Dupd2WnxM5AWtQAK4mr5cZgYhzf1G39nKDutdX7cXRdhTsE4LV2BrV9kzXEwZ6Gwd9NZH3nVyfpYicjeY",
  "key21": "5UdsZVJ8htTaJLqkWMtS6MTNWEMtC8vKdiFLDK5j9L56VAAFa3JPozh4THqbz1eVomxrygj9Cwquqe69kojE26uf",
  "key22": "7vFwzzJ683xeQ3EXPDYhGp8D6yptyxEgDkoJxg4wwXJVXRDedAhnLxX8q1P5usahmJuNYydZheDwWujo9T3smmv",
  "key23": "4BvSPg8J29zbo6F5DL64kpksKiZ7FcN2j9zfHFqNVTurp5PYBRyvR6cXTfDRPjMkVBzsi5pTBxb6t5JNwkV1652x",
  "key24": "397o6zXXB1g6skrajAqZQyFpGfkwxXa9TqiorWDrK1NB8YVrsQkYdtfKniE2c4aVunWwyfBupniCdNXXNXEthZW4",
  "key25": "4uEt11oxgL6CyL8SecknKxxJjPmaGbZdGiEUziLh58KSmRbFaVD4D9sRqRfufS8FRJKFrvpGxbwCBn4nn3rqQTZV",
  "key26": "4bGFqa7UefB9R5hKvoBWenttYT2JU81pHmXncVbZj44ifgVbB3YKVmwjvHywP2EuerNuSXZ2yeGEC5888pgApcEi",
  "key27": "2KBkgE1sdALwCPiqfugSQJVNwd3egkRV6sHGBXaMahpEjcg4rNCXyFoCTgdTvYxBikFTURWUoppxdBFgqixevmC7",
  "key28": "4Q9RRBJwAc1gUksuQGcip7vVQEg34kuJuaeg3ZqBL6KYXasLu7jNMVvYkTfDsCgvzZ6AQbqnVbcQc6xnCYCoqsmH",
  "key29": "2yaskm386ztajjtvMsYiVvb5ycmGNzXBztrbLaHorUc9QQmAYqwRy4KVqLu112zPiTkAN3huVM5mphnSGeTWQ2ZU",
  "key30": "2EHk34indstz9J4YuYumCNNSTFra8K6rs2XBMAGE2PHCkWrppfVy4by1rn8KcPi1VeEkhqY2DuXabq21jLksi1So",
  "key31": "5mBnpS9hqEGMzwsvUaSiEroafKaJnvB2Hur3mbv5NPgALAgHRZtGnXeoyxK5cX46EtQ6ZTmYLP3VQnmkEWK3Rn67",
  "key32": "5Nd1v8QD9dZb1NthXfdW3EAoAoqNZH31hE4ePgSKVck5KoERxEL3X7nqqv82F8HQTd998yga4pd7fhwUS6x2UoCR",
  "key33": "47EughpXFH5b9R5HWcLfWS78Ya8pLFZ5YrrbD3yRn1TuTyvfwi2UPr7PX2wreZmBdWotbpKaZ9ht5qQ58yD1TXTt",
  "key34": "2pprMZAh11p4tG9ZpgNwFQRuzw8U9aqtVz975NEk7NQ5QJodj9zxLdu2zBgdU2tE9qo1HJZMFMVSoozPtHEW38WU",
  "key35": "2p3MsRMcSc3MD8WbenJBEevKXt5s6xvySsbobk7QuWsjim1mUm9B7iVMLEbdYJv9B6ZrJrMpzov2H2MmxEmSWFbX",
  "key36": "4pT7XQte3K6JCa7GRBL9t61PH84hjPEe4NZEKemabFhxcitaexHi5jiHQGtodYhZuUggBDAWQo9tRr8FF77Jo75h",
  "key37": "511N1bN9pNx43rqvq3Pbd7nMPpjKKfeXgXZ25MKRvFS6ZPtKk1nRtZeyCKANZXgCnQbypw2NPcJDABtuV2PZumwh",
  "key38": "3Z3ddeFPY9Jh7JfmwXP6USSuafKjkXP5zK9MYrAdLAdDmYg8536H7YCe6knNbg5ModhScdswrvmCCk1t4T68RZA2",
  "key39": "VUoXTC5QWzz1KKVgAXHraEXZXa2YVfyiQFN7J1X7dkKA39oeWJtjyN1vyzdisJMtBNUi8TNZZqFY6AsHXeTJoY2",
  "key40": "657rDwNabUpetgUaBSgAMQH45XeVM1csJYG74Uo6NgaJrtpbBfwgywwn79B97HRp1GTbTVWAPVqDZoYQNTXLdwzJ",
  "key41": "5C6ersgf65forZN8apqdHDCcmVbFsawTCKTAe6rcp4JDKPgMLgDkEG8xfB3ht6eQRp27vfoyY4BQSriGgYeQAhCM",
  "key42": "YQVftJVaKux7fSWcwyLwwy8h8cHXf5nt7VFFNGHyRLqcg5pv6DvtaG6JRUZAu1oEgae5bsBmNVwzabPD7WZkpFs"
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
