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
    "4aiF9TNqgJqwSTr7HaTm3Ws51eTiNafNAJqJGPyhcrJXo2QKVjLc2Z1eNXkhCKXkXokBfGXwKeAZBCtNzapJQ7ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fpqf1ZrT57hpBpGe6S2ksT6DYoJxPcjEaHUApD8inJv3zPa1qdvVNDYQ6gj8F3sKdtBiKD58dPfKgGF8j2AzWos",
  "key1": "3qhxrKZNarQZ1WDaKdW1wnFjYKtKyj1YSEqo6xg6jj3EBcZM97dVQGLm9wUGeqTvfuqMSFwCTwcz5AJ8eSepuUBG",
  "key2": "5Amm8GZaSkt99C9WSS8wCvNndycuApF5SAd1F4f5Eh24MQ2szwgqTjGRGCDfEEQvJjPQhSfsduMA4GwuyjasHE4t",
  "key3": "4vMB9jAT6AshXRahiY7VjxWjUgwNaBi2hoPxfbA67U68mohMsYcVxWnyeYFcpSoHuGCQNPLrsQhaDWMBxm2JctNq",
  "key4": "4cvVVUXjTz2FLH8nbrrFmXa6cUc5kKmWztq5vs2RaPNMe5uQ7XAH9SqGyCcTixmqs8bHrAwhWvwLnZBEvpnDdiDT",
  "key5": "41GDwRs9saH73ZebAnGTuwCApuiS1XF8KirLSYwKCJCq7VExqvptke1FuVH1K9n1JuiSYPS1gbwYifr3Cpy6ZRLt",
  "key6": "qAcmCMf7L6jKZRBpThvW7xma1Kt8f5CAffb4QY1riEaHSr5UwdywNTGNBhC6f1SLHa8rcpnijALuQNVkFDxvsKb",
  "key7": "3Xi1e5Nmd8LtPX3VW53HydEwzbp6onz84YZ7HP2ogAiJKxKutxdjdhUTVDESqZz9mP9mvvkk8LjZKBGiP6VQYgyb",
  "key8": "5Bi8c3dUYmAvP656simhK8ydyA7Wj1qSpagQHDPfiENYzz7oQcAv7adapu3ny1izCdygjMa2iFkMAqcwtWa6xTRy",
  "key9": "53jxfT23qwiJ3sTNu1tchcmkHfu3tt4PLKSpX9oCC5oHuS6moG7c4TGjg72SaNa7AVHe9JL9NbzfT74sfKGmAMCe",
  "key10": "xAHNWD3x4E7otm7Uo9wo6YSXLNvQjQ3H7Tywfrx2ZqB6FhgiCWpGvJ1q8uv1PXVoovQBhRNf5VQnVsYjwvYXuUf",
  "key11": "2nXm5PNHkpXhSSQCfDnc5qZVq6cARx6pqGFmYaoFsnenhC55JPfm9jLVv76GzXnDfAd1mahZAN3DZH244VpTx7PX",
  "key12": "ujtABJMUrREEQwjX4odaMgSXZw5TCgbg3gBSmYc5wQSPR3V9FJ6A35sTc3YqqNc96iSnvGLMFR8eb7xkuem7Uh3",
  "key13": "55JyaF5bp6iuuNtjEbcm9o4xa6pYWsJbAutzsKyxsVHQXojHtri4aj7BqzTmqjUnLMzvtaz4Z4Q5McaDiz38c711",
  "key14": "4dcntvbP5ny6VyWWn6kYCH6G5vhuvQCAsHTitWwy8HnDAPuKM4dy6F9r2co7CK2QPB9iU12CwBwM2wYTAFBEkcMc",
  "key15": "3CdNYv8JZ4kBgYB44dAvnc4WBLxtkYnvn85ARRdBoJzEoVgrv34tZwDjtvdB2BZUxD6YiK2VVaAF6YptMRKgUq8C",
  "key16": "3vv6TdZMRjWtJdLgYUTkQ523g2rXJYNkao81k73AsqExP98VDNgAo8bJHMUegyc8ZeXhywf6ehHgwEhK4BsCJsbC",
  "key17": "3J8eG8mj4mrUrkr69Ux1W9rvEVamSV8n6RJcLoBVZf6qKyAL2M4sDnwkYR7tfErMg4ZDPMKjngmBXvkv186igwv5",
  "key18": "4TV8aU4dzRuAzaTH2EM5nvhbrenvavsNRj88iEpxRmc8Pdox7DgtdS7sBdUwbHfb2LddUgLZt3ZHdrZKt9vZqN4g",
  "key19": "2epHZehZ1r7YB84eCDAZVgCsdvifVqaTmQU77TCYVnttgLJQ6H2xohfVrVv2jK2iyUcvyo62NkXAaXaWwBLz4Yua",
  "key20": "2KgXBNJJF8JpRLkyY3MTnspnqr7Bwvkv8QEdG1PtmhVh526zMT33V29xeuJ3oB4bLGBThYdVuWXUr3Ze6MY5QKFF",
  "key21": "3dCasbyEBzHN9cniE1WAM7zTLdWTtYBnRBLTdAvTLX4vPZyTvo39njcybotDN9pMy77W7a5c61aXw378nEjhXja1",
  "key22": "3RzX7Dsk777sRN97CBGvbYUvpjsDGUkXv5SXmBYFTfBKtM7bufgGN7czGKT4PPuD8odngfomhW7bGePVKXCbzRe6",
  "key23": "2hAVDPRBRxqgrti8nSpDw5JiXGPtLMWd9hrv97smzFg7Uyeo9Y2XkP7ofaS6qeBk6Sxwddu16pAGZhtjxnM1WZ1g",
  "key24": "2Dsvmt1zyiQwmkdjifdxgPhkqzr8QKn2emy6jxdVnBW3ASK4b8VhEtcGyzN3w6KRYtDqamK13YwoSjZCpoksKhSQ",
  "key25": "67RyNtBsMogYTwSYJbqynKqu9ssoqJV9mbFefcpQ3ayvB7E5UVyd4XEYC9TC8vi8S7N1pKd2eWixuyYtCcdbEGDh",
  "key26": "1bzos7yapq8ESW38sda1yaYLGB6oJbdSpzq8EPYgKjdtyM4RiQLPPsQ42xJmNkpMLJxA1FsBLfbjw8wWP9Ssc4D",
  "key27": "2qMjeWCiXHeuYcN82wh2pV5LQvqqKAuSoLoN3bUsFLdY1uAiENVFPGxQDCTrDEWGdUUHEuf8fKBmLNZpKFnscNEV",
  "key28": "35qCHrQGd3dtg6z79rV3xw9r15oafM83QHNf9j3UQwKmeFvQGspQzn8B2KfLaTZgreVfb9YA2M7DXVwCpbTXqds4",
  "key29": "3uRkrkQdB7gCsd6ZHkVCHN2dxAAfQapuZG1k4DM5VsKHnMtX5LGDwFMHvWdykcwZDJt1m5G8KztNrsGvb6ymyxKi",
  "key30": "3Pnoviih4AdTTuEyAsAmH7u61R4KM6EtYoYg5gVaBiEHb1DvfMEL3wb7DBYPYqVmktZWfrCuJEfJ8nF5Ef5bmHKN",
  "key31": "2hBZhGwnH65q5pEgS4AeY7Jk6B8f24z1txiJFgZuFcjjiihrwnw66kBdXYjir4PPkpifzPmNQUgj7NkuQHgm6crD",
  "key32": "3UBavbDW3FwQYPVnh3P6jC8htGW7b8SkJAMQq1sc5Zd8XHbGQBYBqG1rt7Lv2VjYBLqKFFov4ijH219LQ8eRbXUU",
  "key33": "4P7zg8AdLBqk73FCghojTpw5RP2bbSsV9eNmHfyiRJrNUge8rw7KbbwqBCaFgz5F599kQYXF4TbRZRM5avkAjcBV",
  "key34": "4tCddrnmJfH4LvGL7LrAjZC5wEBdzUKjV2UXMLtxUcbNqpHpigcefFHk6AJr1Z1sBbi183o4HUbR6yKzUXyVz4Cy",
  "key35": "4xZ84cgCBQ36V6hFikERgF5DA5ERyYH2xaWST3cXYcvdcHiodNpiDoPXoSZxnG3ajGX6weYRVbNAu818kzgzjjZM",
  "key36": "2LnuvbiXpnhN16iNdmEmV8AgKKt3pj3YqjXjbLV7G7mZ243oWZyBj6aG9Bz8uwcHrf3neFEApLN9AzxFDAncJzMi",
  "key37": "4Ve5De5vK43Xi51ccuJkZrUgKeoE9eWP3Ku9ey9ZCJ1rgqdzUw3LS4ua7WwPiwnAYyeCqT2vu7GGmwLbTBRQXZdg",
  "key38": "rtByJUCsSKmRyVjK7iTBmXVAqLUuwAXoU5mCae3iD3xJBggivggAMpu7NVmk1qGmeXAe1uv2WHeyXckA7pEQfcb",
  "key39": "2DrUCmma2keW7nhcqPzBEDwH44AJws1uSMJCDVzC94Jw5eNy1hGSRod8MhWJzQh1ULy9xnVtB7baNhoFjf26Eehk",
  "key40": "5pzxTksbH94T5Mpuku4ABF9vu3sBUy3BuoQdyDNC7WPbRBeDFGgAxyp9Q2deEWJX9HTKTKwW8eiaPCCNBB16a1JE",
  "key41": "3ju9TrXFByGdNqF3U2d3QMHcPWvYKgUM8Kmmuo3Ujf2vR6DbV7aCoj1LWuR8nqzWoZ3MgWk5vgH5Fv3YdCmWFsVk",
  "key42": "5nwEkUp99PRmKSaCuocS1xrqRYqDXmgtBJBfmE6w8pLmYmF4xbinePFM2PeZUhDhvV63AZJKt6WzhqD6bQWjEGJw"
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
