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
    "8uidrduBhFMKCvkT8QimtAUdpjyiSbijnseWE6cTeJwU4D9Fqa1GFrWBnoA8khRW5A3LGMBagy4Pd9WwEtMUViN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9KNamWVM5hoKCZF6pmgL5iwvciBgQrrswiNCtthXnf9mPxRnFTVSQnwFmcEXs3oiFnPAjh9jdbi8MRXKhsiuHq",
  "key1": "5KKxppfHZuLyTyRKKgA28SF4ZMHLtbPVPDJrvJqGZf36r9QSjjeymyr1DDNxBhZazLrPg26KR59ummCxsdMokrWt",
  "key2": "5D4Z1rbydamQzatTYhAQJG2n4RcTgJGhkMM7HUBk2rsZ2sEkCH83XzZmY3vBioxhbRTvsW8HLPVF5sj8XzXie5xH",
  "key3": "91933noXcGj9TGRJEW1T5zWCw9cxBzHfyCXHNGsdYyrgYRWSn3TsdGyyS7JqZ6eonqnD3Wy6X2ZFJXFCDp9xbN3",
  "key4": "3QY5W3u9ibezzwr24aVWQQfTbCZ18ZUnG3Jc6yF2BwBXixsa3a3R8vzsBy4BAKLgy3xRZnDeEwvuAKTThW9rPK59",
  "key5": "37HYhAnq34PYPywig5bpqxeyYRAB4GV1GfMez9t3Nd3Qc7UpCjBsiwnVamNuPnAhqFeDznckBDho4kkHkqRKWDDT",
  "key6": "3s2XsnYeFEzy9NckAueQ5vruxQ4G2EL7yFbxeiZzWy9MPtWzvx8MEuYfjmjz95LV9sNvQNEz4Z7PULvAHinkUxpP",
  "key7": "2jS9kAULwXme5uSdwXZCgb9uv2xF1CSvZAr4zqUWTxFrWqCY99yWQgymv7YyiwA7unDD3x2KHznT25aeXmyCsSWW",
  "key8": "2CbMgVTkrdfJwxPa4vpU5GLPixg7tqiSr2SXnPvpPPQdGWgCLfJxGXpyjCVNaMZX37qBSEWRthSpkcRP3Vx1NCf1",
  "key9": "4ukGRo2amXznLRcZhNtGuGLi9vxDxTR2bUtyr8EXoTGbDMhcXCQ7CKgjyrrW89bQoi8vmY42u27aQn8MyjWNPnqv",
  "key10": "3qRFquUTu8UvqbmUfaTf3zoVCjfT6boPypctbYJfqTGtsaPxVZuxBYiZMQW5nDJvDnjvKFDAR6UkD8XXtw8sUcNV",
  "key11": "5saBn29Wm4HGG7YmJikm6NATuCr19ig38BfNVYf4RgwMqzTBF3wkPVSfqzA7CChxxf7kt6gsd7FJyy5fNpCwg5uf",
  "key12": "3BctRxrhAq9NbNaeHeKybpvDxN9K4csraNHBA48wUJ4axJYvih7CJCPp6eFpEQF823NWawW5geVBSjSvP11XG4Qe",
  "key13": "2M6S77BkjtUcicUsQsoc3DTc9FAt6rPcugwSWoeWACGquqAyLGPgj9KSdHhH7ouethqv7QTGXeVNz1vgpwdmhfRe",
  "key14": "2qLgWbgZmfhfN6JrQjr99pJy5CFRNdyFJutaKSBusbfvS8rHAcf3Rte7cQSY8QaNUfGVrjk7mgWzwVgPUMzQfBx8",
  "key15": "3RhuWpzvHCKHNWXG6o1wEDWzWsoc6UdjsXWVLPyVczqPEkGCibKFbsgSiHWvqQdoYFVLMZHFMEFU1kfzz8m3WHoy",
  "key16": "5fdFt7GPguREdUYotcEuMcA8bsCG39n2CSWBQQQjERwogDBiGgFh3b9Y5ERwqovSAakQ343zJ2jRa2m5PB2CAfaA",
  "key17": "2D8zdBzDZVeP242x8W6FFa7w7kcFzSuSDKBTLYKdMmVwfWsFChmBTQZKPu8djj7JJJ25ntqiGJN55A3gXJddXEc4",
  "key18": "4RnaEft9WvNanRWKct3XTzaEqGe3ZYVEmWpc81EwSFEkVHNmQqsSwNf2yeyqUr4kAqXHBTFtPVGbEisWsNmusqTn",
  "key19": "49WSaqUnaBkye2qCUuTexTr7JmhHoZX6VNKstrzY3WqozfD2QyYwzoTHFrMsx1pTRjBEuWjc6YCT8CVFJFQZD3c7",
  "key20": "oakyBhyNmibzoLeqnKD9D2pbWTEHfTfELCyAyFCoWoSZ7ibh872d89uXJ3BMSWh6YhKpQqq5Ct13CjwtfeY7hq8",
  "key21": "mPmoijafuhd5BF6gcspZCq7hJ7Zo8ePDhbpU7sa2G3RAKWg2TB5UBJX5V74HaNTvpU9BLeYcWbuD8J5jpvQd9Z4",
  "key22": "5bi6gPn4XqNipqEXaLqa7LHW8juxmezMKRYdjURMzKvDNTeLmSmii6nY5W4Rc7tXY3TPupecRao58A4caDcNp5Gt",
  "key23": "3aizAd3skGWY4rnnRcuLuCQDtnFPZwUTQ8QzggNpMJe1v918Resvm1Dpj8MevAXkSZr2FmE8U8645z5Ust32zoiV",
  "key24": "52Sae9ETrs5kM6z52y3sX9itnBVqeapAr6p6xDvuxeroc55vg2r21G8gtUpc8L5WuWhPgYShcE8fhTE8KCAZHYeJ",
  "key25": "3iNSDrFeEiK2bsEodZyBQWd2oxCwpP221NEYzX4U3an2hgATiJ4WHEPbwQwLwLU8aCpTzcj79g2qaiVS3oAvRUxh",
  "key26": "4YX3Gzxv8Qw7C17Jfc87ZmcQDj3EMoU1dZgxTpLUTj9YSzD6WCeY3mY27fFCXdRHxqWnv9UXtz1THovANxxiWYNi",
  "key27": "sF6nPdAxq4qaS94rjrVYwTWDKddDJH4doRxFLTV4n1BEmwjczmqPqdteuAugD1XKEZUeZQFBq9tQP2eJZAmFsCQ"
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
