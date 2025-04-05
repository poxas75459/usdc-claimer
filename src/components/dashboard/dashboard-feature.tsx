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
    "3c6h7sRGnbkYEaStguN2gtFHti1WzofytX1jhQfBLb7z29GQKu2EAdaHge1vZR9d21sTvbR4tHBHS6vRJzFQKg64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VhGYsd222kyU4RR9H71viEpQnRRANL6kJp6FvnoRPLLU8y5wGDk6yNTYuWnqrT59QNkAzX11qcGiU6BgyaPCsrf",
  "key1": "3g7bZzqJwvMQp6XJ5tumD3SpBpqZB4qdpu4Toe6EYmkHqm2YFG6yJV1P9hkyjAdFPWKWYzDSV5Tmfd1QJkDmaB4m",
  "key2": "4mF2ueNB6NkG84cXsay3RPMqQX3X6jLuNG47xwZnS8qo7cue71JFw8wTZurgE33XPqqJFKTwdJDgVvgAQZXarvzs",
  "key3": "231HgVZrktDfmPnEAsb2HJAe3iYCG2Uu7QLvPpgQQLwVoLaYN7MNSNU3eKWvBLpCoehyGdJjpAPTz3fstXibtJoh",
  "key4": "3RjyRmXtNZrRayUwjSQQ8LMUtHRzcNJtyfmYH762Fob9BUxREyK6QuQoYshA4B6cCBr7gSQneCmwjvC5LjnCwMT6",
  "key5": "PCmbjfq2hRASbhCrZnMn9jWTCEieciY4rr3YcaZ8zyq2UCsHXMZRxUeAj7mnTWvMC2pfX2mJuv8u5LL2Lw47cZv",
  "key6": "5op9kWBKZaZb2uvqT9NVhi3aMoJRKGmrxMQbFS4Xme4FHpZmpxvWVyP626ovUGqX616nUopixZEkTLfdupqqoR2f",
  "key7": "ZDV5U9xaU7cS4iHeTWV19YuDB3UYWAeYTHPbRn7E3JzTonwGuc86HhUh1QdKgG9BGC3Ee56yQGpHafVowMjvsk9",
  "key8": "3qSaShrd7iAs6Q5Qhk4sprJ3mmesBptAJjp8yJnfe24frTyno7PAbjgyy3kXMbx89LKMQvU7GHFZknrotuyJtrQH",
  "key9": "3WxDeXvjUTPeZSRtvmmBN6ijsKfL1oqQ3MKdCGq751K2yfb7KKRsPMVNqmv74gjFWjNzrd8nSHsxkUaNbKQnDETG",
  "key10": "2L7CkGKAVAgdyAQ8zKbrLZg3wcwcjKvCQbdgSxn2bwKmbceBrwArvZVhyfy4shq7zCZxcjFjXiNuexwh9X3mZdPA",
  "key11": "gKWCqzHtSvsGrXdgqdhPQE2znrUTPP4jATBAMmJBdQv3cbWftjaAbVGZAjexbAf1mq9UimgdEnRt5iDwsEWsdFr",
  "key12": "3bzFvyjoeP13i8sKovGMcEED3igQ8Z7gpVM1UCC6WkMkLQfDeresryLHuBARWKJ911CMPHGETVta4R6o4o3gya77",
  "key13": "8vb7yQBj5wHexrg6nEoqEENi2dGfc6h2CKv2ULhiSBQVCu2feNekaWfrh47MJ5iyNWNcjscJXTaBadhT7firUYw",
  "key14": "YRDXQMbknViigydz9cZPcazMif8HAN8FVvjZ5sKsAdkfmrkGfBpjgDVaHFG7ieA1gd6Kd7qnFD1Q6ewMDvtVttY",
  "key15": "2QDGu8dLb6NxbqTQt9kb1tXKq2CW1G899M7fTuh4vdWPU5tvaZ9Fdp1FXgeac8RgyCqurg9HqAuWmKHryAG52Hxi",
  "key16": "2xxwasryeVZHsX5Lge1a9x77AF4hDv6BpUMH8WvSedgJ12ixvHen28753FgXNNdUGwnXMV65pnkG9ifLtF8tfmSf",
  "key17": "4XVpTtCyHo6ygqWvUHPPaUZHRfsysg9nViobJvSzazMDk6WrDBhqm1tGbEfzSiLSn9aLGEvkf3pZLgiPkYxHjui9",
  "key18": "2EWC5AtfKCTU27GuBVE959PZs4Lh2Vk9h5ZjDtY6caxJYVpYwqnG2jSqtpZTpX3d1N1FnahP2sNhysqM44midrum",
  "key19": "4u5NiadeK6ug9B9vDXTPb3sNuEwyDuC6LAv2J2eChH5PG61sZLCf9tqJvH4E4jf5t7ydmqUVGNomvKu8AChCWWMK",
  "key20": "24iEbf7gG8zcUgyk8vyfegWhcaJW3XSV8HCDefFRHfTt8YryAxSynYyMNyWuBbqfANZhv58F83AAz7KR3ZMbpwhd",
  "key21": "3gf5YnCxhAQa7d1dKXhjiN1PcrDCRBNzFq9y9EFkp7njbNBnMrHTXtJHN5JanMxdBCekDi8yEG4JxFTTsaqqsVpt",
  "key22": "3TixJyRa74XuDD3vDLby31zfNC2CcMUTkzAWx6vYyNXKokYmszfCYdghbVGjTtbyoCFSAudgVJEYqqYX4qKj7S9d",
  "key23": "3N4HzYUEcCVv1ayuRC8ayp6n6uiJBYUjLNpSHKPDvdT79yJJjEgpRbsFe3RP51yDfnnt8TG9Tiu6S4EFnduytRZr",
  "key24": "29A6VUq93JaNXUYEfn72EnofbDvRZctxpGiabbELsPzXEzRdcUGRALN4BsWfFZiPpFQfrWArBJA69rWYX47LmzFj",
  "key25": "4qL7p8CWmJ5wZjmQM98xGwgbDvEgGkwtcX2er7VgCFr26EUd8DpykjF7tV8YqGPQibdw3nmaPE19CGn9dwNhmMGd",
  "key26": "2gJGpZZUobqqsTiCKU5GCCzq4VLBEQTAA6kV7snVtVW6cmgFe3Svrwefp7zaq9PpkfNzcr9oV7h4vrk9fjDReNWB",
  "key27": "gAX8ghC4rhELwKgrNVc32JSYszZde2VAFztUyVDvw6cfXBvWwRrcxpzmV5jvXoANXxvFAoyz9799gx9KWXnwakj",
  "key28": "4kbAoDrCRPFcR9ZRDNqpi6wfyFHc5DPRZv2J9kX9mGeziwiudwtj4HAyfH2R1hKFJvaNH3FmqYmjRDBzbpeod7zF",
  "key29": "5yJ2p121nAmGud4ya2XqeAwbTFq3eDcgyZyoweFrMn2MRpgSUsBTD2kALXW2rKFNuzPiqikgxg97WytDpokqYsKX"
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
