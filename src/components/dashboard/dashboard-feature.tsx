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
    "535at61TPCLDqVYBYuUwT9KfDyYKv9bXZcaJXrA7N6Evvkb8FFjS9g8X8SRBVP2eRoYFJfPunvKM9NkSXrJ1q6o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ZCvfzsoG6stxiNuFXS2m3AVRp7LcmB6oZWtn9dtCH5FRLfAijCBgkEJHQdXgyPyYfTuQYRcALEbRQXnnvPCaL5",
  "key1": "2MK6t4PrvJZa6mJDQDWNPgR6CTEaJ6uxX2mLW48Uppfn92aJADYhZGFmLv6GAkJScWCYSibmYNg5oaBJZXSfWi5f",
  "key2": "nh9rjhD5SAMxk6ggNBTp69RN4TDyBPRJCWKoRFZeSU6aacv8LBG63JRagKgzvTknghETTAdUXiGyrt3QUqYmxrc",
  "key3": "4rRjWgJFpZjhrMVTfz3JPp98geBkoJYH5e6xxtwctA8fBNeNbt5uTzcUwkzFYidf2MdC7Vwn7FybUdYpTw9daMgC",
  "key4": "JqZyF1yBAQnunCCYYxff5mU3JkJoeFD24X42zZFuhdRK2mDvRaidDmV48i5LTqAqTJaieDD5vWnsMfeXzpF8JgT",
  "key5": "5ZjxpQo4cXHM5dX5dJWNtgUw8TtdAZAPV5cJ4jD92XenvBrAU55aN1rHx41sALrBjZsch6Q2jAJQ6DQXG8utFmyP",
  "key6": "3fU68sFwG7j4zqg8fDCu5bPSmMdwKzGT4gqsiEYcxV4HdEHUsjLxyFBMKCWPYgUy9sXkAjgvm1Zww44zKMjGn7ZP",
  "key7": "4GxyBMQs6nUmr8jYk7dLm59yZAR4p96EBFzzYKMsdxgVeXhWERJ4DxzVjNfpZop2zAxPivvmpgRWs3Jj3VeA9oBv",
  "key8": "5uZp8PtBbtLSyMrDZ2apU9x7tTzf5m4DR4ohuAX2Yrvp3wT4Bgm5iv8hRyuFspG5ys1zwkAs4rX1fqa1HADSw7An",
  "key9": "5k8LgBiQ2sa6vWQeUcJsNT2kZ6c8HFxavqSaFAsvqW6JuKmD9SLufq76XLHBwB2KhkTGrRnsU5mgA4XFftezkW6z",
  "key10": "2NNFsorLDXV9JWYER5uc4uN4xByvWzYaYCLWSUV5VktYNCDtsgktS9gVVVqejBDch22f2JSydkBBGRGrk1wxLYVB",
  "key11": "4NCRDy5Zbe6aa2FqWFXxsZwCZCUvZQxB354Jth8sHt5uSZibEmeaQN42D7gDC4EmEh9RFiGQPZ98hvfVHCQns8vw",
  "key12": "5cDHEPo516V2tX7t9HZtZXXvoYZedV1L4WTrp9Vj7Jvkk4CGsVoGJeppqjuGnkw289beUd1BKJL3MWwjyFrVPYCH",
  "key13": "34eu4iVBXBdB2ymQrFfyNhw8NyYB9oieqoh8qib5Ef8vtVH54vYWhKyrjE8Kxi8S6QoR22epHhVDDD2WcHfos7rD",
  "key14": "44kzLFE65UKAB46fjVSChEuJwQrQPFqx9xTB1SLAFhMwhu6pUAbrAtdM9mLg8GJS4VLqwqiyT7aQ2RpwJRXRDTGv",
  "key15": "2Fhy8ZwwL9f41qUgHvmo6bsQyaVG7PLi886cMRhsgpQaoWUDLByR4jYYc2UswuTzZm6eccbwMZ6rWm6p41hJqoWy",
  "key16": "61vMK2fPvYoDHQSr2MNihswoWJ2YCSMc4poRDM1SCVTBiMY3n5gNRGV6iCBBjJjoVptAszcYJ7VBcJeDMnpK9XiU",
  "key17": "3t9bSvJxswpRjy3pccHAXN4NXoBBoDp3g72QZMTqNbWQ5NYAfaaCYWoSbBKYpeX72ceeqDtvB5tgJ5AxBRUB25m2",
  "key18": "5S8DEeS759dFz9KXRk9CtD8Wm4edYXe3z7vwX82addUQJrVo6NmSFm56gYBZtXZJRVW6cZesDdUZF6TBUX6cTWbS",
  "key19": "4FvhSxpwBxyc4M2dZUSJQp5vChEUr2ahb7dSFWY7ezR7iGDjQRUQ1DkFNo9j1rdRJ2th5NRJPLJU6zDmoTiZnKk9",
  "key20": "5QQUmssqesnJaC4iypi7vzo4NUwzfzqbvjXHuhVVNHz1hEMWxRuoZJ9eSW5mKmYz6FjAqPY2FRA9y4DoNEbsLLsr",
  "key21": "HRr6qsf3giPrvtyvC2qmtuhP1ovQjYHwY4dRCNKtL3oPHtje92KL2TxY5UcWiP8W4X6MKPQeSSymxKeLUNqAhoc",
  "key22": "oM7KECdcPy1ZKXAy4ggAbpzEXEL8z4Do93ayRCpPLRHe8363m9dpShvVPZFtfDhW8YfLy1595woVuJhJy9u1tsV",
  "key23": "h3MVcx7dkpckpLKTBYcbEoDDTLnHapkV3giftJqRfeASC9HMWoZVhEmpVmxzHBj1api4Jq9QBdnUARhb3NhyJcN",
  "key24": "4dgHe4YswhumjFSyQzxEnz34ggsPHLSbxVyXY4WNqvmsRT7cGsh443EMsX7mPxGRaibkiDDGetKHDwtbNg9BrsDZ",
  "key25": "2KJhkDSMfkSSH97W6U7wT65hY6LttzERxAWmcoQVCgdmBuxJfucuhTnC1rpuBouH7TqZVngvVtZLQkAkaH3bf8D7",
  "key26": "5AtbmtoqfpJf9vaF6585eabtBzHbYeHTm5egom938rrQsnihWyU72XsayukwR7LZbxsCcnvpAvtS6dQvj8WjzKm",
  "key27": "5SRZkqHZDct5wAq6Y9z9JWHCEdcucyyV1X2Ssfov2qkHjNd87ypSyVmFPzusKgaRmutC3nSmbjN6s29ruUiQuES6",
  "key28": "UHzgB1SBocKhB7rzn3sThgusp2tKXMTANJB95jCRb3NFranVeTriDVBgUCDmBbbN3VATVD5j8yQDLeq61o9qisk",
  "key29": "4rREr3cGXiBtJmLrjjbGiyxaFUd3MQN9vtKo8HUaiVgAxridwPGgbKayZ8GcxG8gYeuiNfxwL3W3ChZZqY5E5XaM"
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
