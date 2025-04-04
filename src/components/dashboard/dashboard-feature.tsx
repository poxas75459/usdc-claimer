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
    "5zYcxTKSnuXuqW6EjPm5hR35yPD1JKqwg9fybhXHqv1ZvZZmKJi2QwHtGXgQwFUDd5pJ9xNQDuzRBArdfF4iwcK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxsk1aAj9XdMERz7J2BzyG69LyteGnTSvFXdVqWRGbU7QNdfEaLYFFu22h45js71qLdwDSARSeoz2eTS53ryVBv",
  "key1": "212VL8nLpdrbtDJwtPyzvqoFXPMkbqAXvu72Qx9Sqk8S38mVii72VKz8KoCNR5yihXxFHKnnnZyp9oJzpo9tYhxE",
  "key2": "3bMmjALnF6E5nF6kdjLLCc39gDKD6YqxD3B2a98GEgcZ3KhFkvpHcV4BuSPYB3DC7WPPvCCWpniiXcHgKvVQScnJ",
  "key3": "bNJiSjajfMRYxYaBrZ9J3YMR4yBAzbYGgAmCDZ4NqWUoDon4VzRdm53UJFdFyPHj9aCc572YzL9z6u2n6xgA6ZZ",
  "key4": "5pvZVFawCmn1saw5ogCeg7yDCaKQzgpk3vSXqVwB7gNgtQN8CsUBJ9BBuwSVb7dbPPrBkQfiRFQ9MV27aLRcQcL5",
  "key5": "64AGzdCmKJZNoVHidccPmPz8vcRT7K8Lb22X14cXegh2jPRXGewAcAQYzKBcmx9BBiutVNa2qAhVWJyYaeNpTZ6K",
  "key6": "2hajLWvvccSQFeEdi5EX1W2kNai1ji3iMZ3hmyCn5SxfZ3MawuQSpzdYnCczrt62ZXWpdYZERfNKSpQhGcHfvwqE",
  "key7": "5iKrnEY1q6BA5YxrSPg3xeYPxtFbmGKs6csyrqaPjALkrtp2LdgT2XueMghRGP1MHmnm44CX99pxNU3EWBBkkmfh",
  "key8": "3Dk36Uh8EpifWS1fZfjRbkCGgjNoG8eP4cYxvaMf4ZZbLWKgFkmY1NnLGEf12CrXQgbgdUTgMP3ZBpx77PvP2k87",
  "key9": "37qTVQbwGADSZ2GsG4UXoER75wVZtA9mvYS2S6yYa5EyqqMBioo8gTFCwPXLKziGZy1L5jxziu3eCbxW15RTEnWf",
  "key10": "4ZensBSnBpd9kBaS2T6myoMah6bdrCnUEFvaPLS4Wn9WjLLbAoUe3bCRYiuwyJMs6ATkNDcBEqm63mRwmCwPrnoQ",
  "key11": "2hKMZ5mF98WS7nERkbngkhjAArtXYpKxspFwAZcjazs1bPpJadCdgkjpCd75asTiBCyN9FRNCfR3XjNpGKsrA2jA",
  "key12": "5tCQ7TYEjypjEY5k642SYU5LF3rgBBL3opuouxbDqEQ9oaWKzK2NghpwMDe327osxvzpGMzJLXdGSKSDhd6v4rag",
  "key13": "4td6r8c1dMHCo12awHu4jbDoDJ2kNmt5XLfZW4jaUE7gruuYQFGGKdJrGwX1wMkx6NSXoL6EeQdKo7Sb9A3VvwDr",
  "key14": "3KVKFLHGncn4TzSgtdGwmmQ4DThtp6HoMqEGvM9c1Dce33SrtgtqnX8QFJNir1833WZnpZn8hpiy3WYHC19PPpJv",
  "key15": "ytaUHkzhkzndHNRjCFJprW4txg4R6WciHLbeUSEhkKxVvTivz8Bb3ggvFpqxeyVuyVLnUPhDgNCnpEHdzuscRtr",
  "key16": "5gB33W2AS2wZH397SKfcmYsefVAfibiHNhmcApEhzmUBbRjSF64NRFaKZmgsX2ooN9GhKe6bHaZ8FnoRkY2QuH92",
  "key17": "2SrmSwsE8tiLcrt73eBCYraWzkS45vq2urNtupQzEy2goMij3XoqmawA4hEy4nq5b1Z34Bbiqa67xBtJXw2f8q23",
  "key18": "4fxpBrQmFVoQhvPs2Ap8bFb7Ui3u5p8DPfi7WcwKwSDbrsSzfRrSWe48b35opK7v3efPgZCBzc62gwzrv7swyM1Y",
  "key19": "5Q37NW4oYffjWt9LUrJ4uW8cqqpzBgdEu9WYtxeLKg7yuXvvSFMU9HpwicmScmW1agvsVGjBkk4YBAVAT3NmHMnz",
  "key20": "3Cs22oTVYtD7jRWHwsU2PZnfps4M28NrNvKNiY9NANUb3hfR7kahMfAScVn9dTvNqunEpMvkpAAh5Hku2NLujjV1",
  "key21": "2aqrzWAyDRSGfiGmU7Vp9Criw5aiJifd7U3Qupz1EC1wWiWjSAVwkDWy7E41WjH9WZx6Q2v7tyofmwAPuDWUwzGY",
  "key22": "2eGASpJQMdvZ6Gf46urr7xE5aF9KqNsAydHcxF2cFufFZmPRtBqEkdLK2N3WuEhaNtNm6ibLztDaW7PHnsruMwYw",
  "key23": "62ThY4Bc91rxeZ5aFQjy1rzHvHMhKGPfc1GSAZrAXz4Lca2jfjMiuWTqkBXReHmtdLmnrjTNmDXBPVWMUoHd2t5y",
  "key24": "4U3WhzLH6qahgVjGswxQRSnpqpEqW4cyzck8AvRGYxiYMVNh9yFFa9GUKspTLgMWZPynsesKjw4yS3fmcoCdcMTS",
  "key25": "45LWsNNNxAXpyM1VkLEEbsLQd9ZhF28a34XH2Mu4WbuA2gtdk6NNAb3sSZR7Ng5WvngeA9fkF8EceJ7MPRTj5typ",
  "key26": "39YXCiYuimjnC4AbXohQo61dLZzSdeFj7Man3PjHJcy9BGUT3FajjwQm4MToE5pRmt4RCAoxridbaMxQDJfUXucu"
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
