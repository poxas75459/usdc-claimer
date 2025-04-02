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
    "8J6dEbaB8i7Z7mQw3hcZvGTeYJ9UVT7rt7xyjdohUVAy5ZzR41yvhnAsH56sAA8w3uvUHM4KsFvvZVJgj7ywthG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrCwiyYYaCfZTCJ18TRA6JADMjHZcuBcCLNoyx77U12LT7J7bzcDhY4vPt5QPMeWUbbzGb6xNxHBtL49SX9JTxG",
  "key1": "3xp3AVYfQDWt1Vdi9e6Lig19rQfr2eWA2wLDpY8PdAauLHdWpQcagnACTjUNYkSxqAiN6UxPLnf2t3EczDCS11px",
  "key2": "3LdH3gFLxZY55trow6kKVdSFQ1suMfB1PT7ha1MxDDbeNmXNEVrcSvREpLc6wqVEoZgUKh4mHentJf1AW8gNJUj9",
  "key3": "3jeMPgmxenSPw4d7X6tLP2RNsY9CpTXckFjpJhVQHTSA5qZfATSdVZnJ4jQksAPBZn4bKWRbZyLiEv9mPriEsobA",
  "key4": "Q6i8tiVR3jaYfnywttR752BYqagAF5CqkxpiJ6i49XvnbF1Ud9Nu4BiGy15U92PVNSoWUgE9SqgMp2a7iNQ6SGq",
  "key5": "aB5oDfKXmHTjqs2ZoKj5gozc7YHegQpE7FZhhQHRWw9QDRGVBp4hB9695LA3f4AfhPnPJmUEtQwXWYFx84v1jSe",
  "key6": "u7RKnbHycnorapfADxsCWu1aLnGNckCCrRcTmX9NTvLxLNyS9cEiy35SyUydjoHgWKkzmZzX8qN5UZpGqYryLMK",
  "key7": "2XgGGHD2jd4pMYXJjVEb24CBEVd2DeziQZMRG42ehmzbBEza32gLJBFLEjt2H8V2r6wvnX7QeHHBoshy6iq4vcMN",
  "key8": "5TLJzKY28823WMquznEg3NawgKS2RTgLP7oVeppiHvby1bkwCxovh9D7E4WMTLuoBza5JkV8fn5GLKc6aHngdvTv",
  "key9": "2od6RcnyC8MM4sHkQFdvo2sDJpPqC677Aqdq4DsDkEXTZLiVGukpV4HhHCwXKoqeCNeoDzfNeRcb1tqFCNC4w9Vk",
  "key10": "t3EdR4hsU8pktr9AWzRwYLqi41NYAGG34nxTnaVmz7DCSJwf4SuV6JPQCmZgeJcuabzQsHtmkhZWwSjVuPSzAo3",
  "key11": "5MqBPnMb9u2hk9oP8Pan5ZvyXQqEMAbESwPnqBFFiBHax5dNghyiWDd6yARg4wXpHCAzCEnAyA1EBmyEUMFAXKrD",
  "key12": "4E9bcGCnoXVhkYHVzDg9k1LqhyQz22KMN3eJ9dcTS3GwvEAtj3RmYTE5TFNpDwTD9L9mwGUDcDxqcTqQWaWZRJSW",
  "key13": "4U6RGeyxEDtX7ffiMENWED6uPBAJmmS7ivQXhucjNVTjkTP2a44gye1MreSvrwvNv4teKmCi8u5NuivW1RcBQPXe",
  "key14": "m3GvdEfCX9cU7SSv8GEQpCEFo1TsKjHVjnfWkquDvUw5kSEBAhFXWnDjhtaHKXHkNwNWTojzx1nrq7ipPrnbAdX",
  "key15": "2f6aEvRTDb9h8jxNDuFqeAUyg7pyLR57KyZE3aXT9NUJc3G5kw5bxdVUqqjVzwbCcmYM8VUvctQoBk76MdvA9C68",
  "key16": "35gieRGumvnxiCoPSrfrhSyZCXwRBWVUmxZz8rkrzkNEjPz7j1HyHHKBmjQodL4HtpPiMtf2QqZywFj9FyhL8drv",
  "key17": "3g9wpajgS1E1t9BEPF275d2hdXLoHHFqonuuqn1A4DJds3J8uEQAdGoyegMxxnGyh9DMXhCuFGCFZrwwNzkKXFC3",
  "key18": "686qAqmXptUoqtnrsbZoZVinyYJgJg87U8kJD5y4RWZfRP3qw4jafuWmKsf9WEFtgkGUu64qfi9yy5QjCK1jh8S",
  "key19": "CQk8KD3TSJyCBRTB3K46TkeJbYtNCQ521oxL1S1uapT89jeb9LSYBjKi7bs5ePQosFRP2yU3wyB5tXc43Joi6xZ",
  "key20": "oWgWLrsDm7RikkiNVUMn2qtHHQAjeQtigfNwz1n1uurmtvwgZaDBmcs2HJzSehWwHnHa6kVqWpaLk62v9i9FeQC",
  "key21": "3zuSzx3Myz4RUdo9r9KmmhjUnfoscVzahjpJyLfvxTudGJHqJETtiaTspmV8LqGVmPGuQ77maYHHzCmhPSgYVrKo",
  "key22": "5WqUAg7Za654GqdH2WwSnohdDP6iGLEDdVk8qRLZabZKdAwj368UqSfKE7vtCixcGrpvECQiRpHVHzeFEBXbzfK6",
  "key23": "pvsoffyzjzHgX8HmZZjeNKkFFDXCoQgMF9dduWXfTj2u4pAFUL4i8ssdLu6DxceVcdt7NQ3NzjQuyGzCPaDJCBr",
  "key24": "MKTGJzbHMuU1h8W88tw2kp7skKfkjrFBDfCepcVi9vv2h6yWPAhRBYgoyLYqkPugt4YHPzKp6APNDkDQf81jD4s",
  "key25": "46BjDMcFEmW5Qkpje9XKwXnVdjxV8R466Kr5ijEQJfE7R9mUVmHXcJyxwvuByRK4c861m1S93nHrewcLrcQJZbyg",
  "key26": "41whwyqr8f7X31oQR2jQkwrLHN8g81dax4FM732FFeiNKExDkQVojfivbmVFzfxgR9izrcJ3HNFJsgLp3zB9PvG8",
  "key27": "42WsWoJzspHzKpV4pskbQoeYSuk3zmAn9ecPdhyfSm1ZKnjgL8YQ9CwZS7TfApnSvjckTGcPX8oXdojPsYJcFLyx",
  "key28": "67GNUHnjxVefc35zcEUobjCKMjR8WHMT3i34ADa12EyK9TxtsR7xjK6sDYqgXTyPPmzZxFqgMheRNTcXkFf9KSrQ",
  "key29": "bUDbhuVrBGw9xRvL5T3LdzxXtkJdgn2i9oBjhCJXmpihd6VHBzhB6d3gZkSCi1GHjPqJzHKCm1xA74tHFnZjbg8",
  "key30": "5iomoBNYzy2npeJQRqW7iS5hNFeWhotyeD8aY147QpeyvnVRW1KK61MwcfVfJ8LzRUzM2JGAwseSpqtvFY7VU7P",
  "key31": "YtZ67akSKjuji9ffPq9iann1ceFstJKkbfMpr4qh7e4XRYh4qBxhPeBrwrirQgAKZSeSxwLaNbAq55vqnKedZkb",
  "key32": "2DzmvAYqfDwSRSRNu3G59Q1Mb4W9MuDdQfcJcCiV97T4Ho5EL3QH4dxBNvTfn8NYmbSTAcoPNgueKJA6fxU2Eh4w",
  "key33": "41AMXuLiaggHd4wn5RUXU5vx2DMY7ha6pRz49Xt5B5r4HqGNjd2LfyuwUD7Tqt3xoD3XD6Mcj32B3NaJzEhW6cWS"
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
