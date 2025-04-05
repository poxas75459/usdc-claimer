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
    "iDuP7Thy14Y1XVdjFeihjj2ncmydzKNiy8NJM6ca3ufUusy3ZkQjxd2eNipxjbwnmwfspHkUoRS1GunCP9ZV3Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4upVWsSqxUL4QwfdYtSoWwLBmVRg4qbWnaHmGwiLMQg6Ltj1CtcfSZbKyqsHmjoCkyhxZ8VRS88QBwSRC4gtuZjp",
  "key1": "3GQFiqYAJJvVBd7stQPU29q3aWXarRB5qo9D55MYVajt7wXRssmt2Yki7tqUCzupiwCRVUiAuNuMR8jPkUHCH77j",
  "key2": "QekkmdwhvNqdkhWxKNfA5ca2Q8HPtFmgCvMdctpMuLvUgUUcDzAkZUVEnqMqbeyX6KxZxPE8SqtTAzdXxTvu8qq",
  "key3": "62HPoBEpPMN9BkU27zcm8D3Tg2W6qSiVRBehPbvEeobMmtmeJ6Xmy4PGVLp6rbKVELnBAg6gYsUo5T37McQf8TG9",
  "key4": "26chJnrECjfFgzgqBVffp4RxYGdTVQ4fMVvLs3uB18uyUz2DpQfP5SgjG6SppXbtwRyzFevJD3L1ZW66CWYV4VeQ",
  "key5": "3ZDSfb2EkpMYioi538NAxB7SvqgLEydPfq691da4KbJHSFQsMAPcajmko9MXZgJaQk4PLdEFaAtMFTYZd9uNyvbv",
  "key6": "37CewvMk9tQTmXLvo5prnHrtNv6YQpdjLohaVFj6tu6Kk4ZVDd2A4fbrjVUf7cJG1uYvvhNwLdUMdZoqxYx74Xw2",
  "key7": "2CJkMMAPXVDnoeECzsqDoPi3ea4LMHTgSCfnrY9kQR5EWdfu7D2kcWNi7dwiFtxZD1ki9F58xKNgfsRf9zhwJWAZ",
  "key8": "uuMGbueFCS9vVLyBX1icBEnhyfTbfGfNXwrcJxC29Ag134est2kdzupmBaYe45cuNDjiJgzo7JtzMUVYA9A1KZx",
  "key9": "xuSAQUbUaK3HJsQpVCrn4keJoWGzE7coijggBLa7EEK7oMwFLVoaWb7Kmd7WVzLHg5PMqMHQbykYp6xXNftKoa9",
  "key10": "24XmoLqEbiwVMeYy8crU7AfHAT4XUfcETAwxE4vxNR1gm5Ebv8EGch5MXRXx26tJbC9cr2jjj5m1y7vje99QRRjd",
  "key11": "3Q9JKGRcbnZUHQ4Q5sFmV22hSRiEh3CC9WS4X1pJT8BjVS8C7AaCgbmPUCbGJcq3ibs18V9pu4T5iZG3UsdEf23k",
  "key12": "3wHbuBzg7FB5r1UjFYoEG4igNtyfxJPAEZPELQkg539ReL6dHRWH5xRkZb5SeQUEpTkG3WgBmGyRoH44vC873Cew",
  "key13": "2nGTZzG7UkdtPh5Q9W6vZrQsj7HgTfAAgkT83egtnVhVvnWhZM6UYyw1CSP9VUDdth8ZckD2NrNvvB9YCtyT72hS",
  "key14": "54tsksCEhhyKGdhoKbQUy2uDY3WWKSPJ6WycFW61Nte565hRDJ8DNg4aUFCqMgtPLH1uhKBqjGpgUtgG2uAMUZAR",
  "key15": "3AjekMyn89bQYZki83VLT8ShN5p8UGVL99FRQCTxDUMyhgktVxBatqsyYeaDf2Qk61cKaKJKfogSCY1Px1oBxWnc",
  "key16": "2LZDLbA3z6ga3TBE3GeAVLRpEdcVFyfd2tWUqkmYcJX3a9RDtSCERWMgcQeGd7NJ34sXxvFDJKAFQzWWsuZzMVWQ",
  "key17": "2c5ErAecbbAw2HfMfZeCHKcs5mKZptPvm1QCVV31vWWW7AqiogV8CmAkS4YARTw1Nc5LeYoXXjCqeCvLN5mXuKAH",
  "key18": "3nL4PzEpSAf34YgzjapmbBUyw2ZweRdXBspHJgwkjDkonTknjXsQbEmWoUqcR7xphwBS2xvcCRxewwWpTSLE7eNK",
  "key19": "52MfFkMMeuYeqf7fnLNbzXo7zsS6NkcX4ZbBpJ8gV4PCkf78kvSpxTvcoxXvqymUKzLaDY7rgt4uh6PZrvCWTTwf",
  "key20": "2eF2x6pXZU5pjNkHSA3dnVUf49Rfkj3LMiuTrBD7PjWgg9rDYa13aN8qyjsULE7pTQXWxcUsbe3W7Hp8HQNUAEbX",
  "key21": "yCAd695LcKZSUwZsc8kfGq3wzvJRx981UMKRauJRWZX2AQR11Low7U6gDNn91mCfuJqvJZLjhjAFXAcsfzcNrWu",
  "key22": "4LQnHQC7rdgxptFFAwwSXRBr62t7Y6zLRkFMCBfLuD7hrVDuPdxbCsb8nyEz2dcScDKvg6SiUagwwqVSCdiXApWc",
  "key23": "5H1EDTqhFqZfoDkzKw9WiB6rGBJVKxzACXC5vzdntepdjwafDintBT7VzpHaMvHi1mhmPxdUKDHWmMh3MQfPFq9Z",
  "key24": "5Y75mPnYKV8mfUj6pKrPmoLRzWmKVfxmV4dQat3Y7KKqcMKvyuM61ZfXTJxckvPn9zRKJtJj8cvpXK8EQJX8nYHa",
  "key25": "63TRq4b2h5QrkVJUvRn69uCqdHniGPvP1r3sJqs74RVfh2HBPFyytN4cdak2iU1vQkq72rKxatnzp4b4SVgNYGuF",
  "key26": "4HZHEvyLvYECcBLH38F5xXfxdtSJA6BTd1GJyo87o4LafSXjWzKCt3k5bEdcQ6kSNeLAWkK6bS9cAfNeGaE7QFqd",
  "key27": "tRMfe8cNvVbp2z4TQbwAztR4ZbiJrf3AobpuUvEfK5CavqMs6jm9s3GTBEj7N4gfLUcJdwUeSY5cU3ubR4fq2Ai",
  "key28": "67NapcsKnXe1TBZQXLpyUdQeuGvE92VcxpPUEArkr76pSnnyRRt2sWJYDwKRVLqxTW1txWCm1m1RGbSzthEGq2yt"
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
