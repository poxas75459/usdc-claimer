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
    "41M7uBfpM3Sd4BMTZfuPfkQWXYN72zeRDykN4RjEittfARoZcgY2yEC998HXieyDUBToCgefamF2sxTXrBjkFhKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmjKVPZjfxcZfXSBLCpresdMHKw8BQVJvNo85KiGA33tnJLf4qLktMUM4nteEe5z8JMDWcuJSFKcfXEASzFU1Nh",
  "key1": "3spDJzJbAkBkWq3zmdtVRh2iL3G9TjzE1rHev9WEX48qD7BWmEtMjWUUDDSGU17Mj9cRvLMzKiCJnJtuX8GwcroZ",
  "key2": "RkMWoENca4wfDhd3Doa84tCspv95ahjLAr7VmZbUWX9yvMM3KJXMiMnPW3NooqrsYSMwxe4v7vSkTUYLqakHUDJ",
  "key3": "3M8NhqXxhF6eZsp9PnYJodafhod8duxJhV88dABk6gE1cZtzb2SejaB5ojXQqQMFbL1BtFbM45tUAgvxog3a2WkR",
  "key4": "5tBbRLXSnbEbwD5NEhBKmiS3hugWELaTKsiR7oTNtWnDboE3MncAnyGF7fskE4y3nLK3wAJo99Yx2QMK1ApLrAXj",
  "key5": "5PGX8PA2BE4MVSfESYFoALNFEXcv76g98SYPbyGpeQ6xLKqVtYpsRooxAu5P8GNZPGQMUmScxC5D1hxawM4rnFD2",
  "key6": "38sXCRThK3dMhwybRFB5qi1pr3vkbthLhc8Yax4655ajTHt8Lsue2hxGRNygT5m7AkncUkbwRDSc77VgkAZj2Xdf",
  "key7": "4r4rGTLuBjyuhoC9LVD4AnR2Q2G3nhbwLUF1XsDjDFUMEbQh4WnAfqJTuRhnbhAQGXoi2H7sdw6y56oUUWn179WD",
  "key8": "DeZVXUom5FF26mUTZfQK66yVekYEMfN9hdRqKGBrUs4dYr36qDfE3kY8dtehmqcEvACJgGnjeKS28ZSEBFnWSQA",
  "key9": "2J4KCxDGrj8bHavB7Agwh6BUfSwSFazdQeNcFTAi6TK6E2EoSVv6uJHybWQ37QMgUyC1jJUPzEFWAYw96EMLe2Nu",
  "key10": "4ZvKKRmr8XnKUX2czgBj4KLSdrhEuTADj7xsvx2FfemZWLsss8Sbq6QhxaQ1U3v98LTQsT5gQYeqEsRyHQf8gJGy",
  "key11": "MqRzGkCLKh1oSjETzzxhGnVwku8q9BZSj5tBAkTNC6ExDJStugPMRAork64smyhMdpedYmCNUjEYEFMvZZvsYhJ",
  "key12": "52RPALZPuLH1Y1WEp5AMBZeFneiDq8UJ1Ae2p3Zibw4aBM9uEJ4Hx2GPy3hqRqcKL9qV4zQLwEspUwmPbU2mL1S8",
  "key13": "2tKLocLr9gT1qariEGwDfnJMsQ52Ka37GiFcQqkHU7wD4eaWm6NZ4btXBZMMrm2NrYMRE5uMMvmBWv4JNWpNqv2Q",
  "key14": "oGqzqyk31raWoBFsZakXMxx8ayvL5hZXqpPWdxDq7yGJbLeudtriT3k5D17KJxJTh7fR1zEVJ9cE2oiYctDR1hx",
  "key15": "AyWKgkZhqCafgJ1miuuoeHJxyS2fHhBbofjBCP4FyZPmGjhJy82gybjKkUSpEWokoBgaafp1Wn2iKdXkSx9mZw1",
  "key16": "2oKyvypnj1E7sGyghTDwdpPu6N9q5FHz5Ty6tSokaJZ975uwCYTnT5XehqMdchnVJdFW8x9e9ZAr3XBDJdy5h3QL",
  "key17": "2SnWL8scXMQJf8kFRFe3pyvL9ywhccbPSArxUkWrHbJ6Rn7D9A7dYhFLX1FbXhxbuZEUR15Lq4MBMLVJgAEVWEDX",
  "key18": "3fAZ2yxEoMAo5QxVHUY4cayqgcBstF2iFkigJLA4fEZY2ZxVFCuYuiwZtgnUXGBvoeoBy8d9G6RNpey9ghz3by7W",
  "key19": "5T6tPvRo6rX3MsCFqeHCfeL5PvMhj1UbXBVhPt8VRwVTpGtSiXmVkGomnDdzfsee8RNe53kMYm5DNinKG3SmEXTj",
  "key20": "426125dDGa67gh4GSzAdAErmguoFbJwPeuT2bz6AEXBsfH4Tbe8quAFwN3q7zmo83ACmk3UtCkKpGy9A6jXofqXo",
  "key21": "3fUx57mqSPwoPiTNb1YK3gFxSVneERKw3fNw1G8Sj3ipupL3PGXTyu1NkNBmZ9CU5tzUWZAW5eVB9F8PhQCtiwfo",
  "key22": "uSp6eHie2683PfVokhnn2aHi4ffd7qPNbAYmo9pE4Rqh5abms9VxvmeHbEcVQSbJRBUftXwJq48uq5ze1hiVV5P",
  "key23": "4V75BcKdtkzCnxuVjEvSZP7ctzftgMymraK5zJ2qmeBRrywF2S6Rrr8rrMqmEXdfKn6M5T3AnreCFVEKChv7PzsA",
  "key24": "3CUH3mBb5j5h9YG5GdoncyevDBgVyySTUzbL1RpWfNHwseRCszjjUmeGjXDgU4JQETp7QxQJgWCEf9kUHJAEjW7U",
  "key25": "wgaJMbk3NupLYxjxkksCrEkWQvtpEKnD29PN6P6FpLwpXbazAG8EK5DrT1vEkoCT5t7ToMqkvWQXo2BohLi64sh",
  "key26": "3JiK83HNxhoC8VXqMLPS7RXsEadtUUofT8d7CUFwL67jAnvz2CHUATetTMiKYVY6W2ZqkpeHxFqN6Wg4RgzexLgz"
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
