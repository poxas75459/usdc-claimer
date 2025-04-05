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
    "5d4kpy3h5ogwWYCAGJtbmm7P7jb5Yx5DzQQCLEPyq1YzenTX21VWD72ngnk4Qyk8n5BcJKnNv7o3hLr6LfPeAxEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHARCX1FsCSVEMKkrDptwSui7uSy2pXYawG8aDLvoHhGyFKasDarPqp5BHK3gTAucXgcFyWwdvxA5dRXHDL6dZJ",
  "key1": "5waJ8pihFEV7e3jyVMkqNnFuhHesZqHpkzNDrnSLC7MebxjXCihpUob8mgztzVj8WoacUjzzshDDh5KZH7UXf1mP",
  "key2": "5gocHTXTYngy1dMidQTf8ENBgoDuRt9RCm5JznKpPzNTxrLCp2ie2t2A9zJQrB1TjwJNRN9nbe8Aten7bLVhq4ua",
  "key3": "2dzvLFExt8Z6THGdiLSpSQBtEgL5M4rWM6qdV95Ztscv1xckDqYvmH3MucuNTEuV3eE7NnGinBk6Jwx3G3H93LFs",
  "key4": "36p2MrJXhCpVUzP4GzVa1gBy6Tc4M5cxhp8EHhQka3fDGgtBmoLpWfh9JcPNdL4jTpCva6hqq4qaH9gSQ3aBPW9V",
  "key5": "3fzWoreXdhBt6HMHJms7GA8zJKcX5qhkikgKuxpoBuCTKVtfNN2wRUsDzYSWSFNS2igcYwzou9veR6QefDTBKycL",
  "key6": "5dbhL5kTMerdTduxaJEVvPB6pVmsDhtTiuqHCDPndW4b1u3jFcswop9gEuQE9yumfPEh5p67H9dNXUN2fkDxbgyf",
  "key7": "tYuGtifcKB4HuYjE9YpmZuuN3ioQQJraFqA9e43eSPdxY77HKiEvLrC76oAdkSULPbdE2FR2tonRsBS72ZWBffj",
  "key8": "55hfWNbF39VB2RPKewekzHTsSVswDqQrZn12wwCP1vvkrr4y8ThpwaRrjSvSYNMjerXJuk4JYas1ohbqGdFURdkq",
  "key9": "5dgyVvWBPzhR4kr72Vdo7nLYjNdoybGb6cD7u1rXhn174LxEixJyaWUYaeFJnSBKjUvaDW4TBHYVB7Z7zmn3bmEk",
  "key10": "47AGe8WgguX16MvPT8jxe5us6toY8n6o1BJGc5qEN9DSD5BySUTDHqHY8Q9TMAJuciwpCwqKsNZPY4yNrDorHTuR",
  "key11": "2kY3dD5kVBJMHrJJjxsSPow9B1X7kancShxJheC1k1pdqNMtTGA2TiWbQPiPk77DT1itqr5jwjueLa24dS61ZPpz",
  "key12": "3yPZX5yjSNBdZVezrHiL5VCWDTVi5jCQTEavAbiisr8751Dz9tsAER5ktincyK3pSVdooepJCXHmggVKXwZx3beE",
  "key13": "3tZKXnpRk7ZCrPRtxdhJZZzutWo8udrNCrdsLeRv6S9tv5RubsCA7Z5Ydq1SaVTtAHdzMNB1X9FRtRRPWpHpkJEH",
  "key14": "2z1btCavHNwYR3RLbhRdaWoc6mGi2rDDV5THSK61gvGYxo5smkRKiE7ev38zcyFP6E7wYHeur2gWsdsruwWFUDCc",
  "key15": "57XmqciN9CacFpfEhTZ6G4pbD2kZts6SaWU61y9CJenQs7wX1Q1pjjSGKEVR4DfkFtNdsS3oAqrBwdPZtsEtWt9D",
  "key16": "2oKRkbS8BFEbjkfJk5Mvv3B98gqsHGu79mGrsuuZ7dL7nGPyh5SoVTVBTtSuLYfeSXBupfnEuVKomXzJDb8PtYk4",
  "key17": "2BxpB7ViEZTX68Cwjzoqbu7tg45dHeHf8eii6ctpAbMspaDct39H5VvzFrNGppRe37q7pbKBvyXUYwQ8vcGjoU62",
  "key18": "YPucDtyAQMwoDUFfrKvV8nhaMtYoXP4KQoBRDJnrCnryn1ynBieLxDsspeTXwqpNNrybh6k8He7yZferjo1FgLP",
  "key19": "2oUSSPZL615sibSrsjwso7SnrJzrdkdDMk7Y4cXZ5YVyM7W6XQs76oieJ4EH5NDSf5XGJSHbXub5W9ZZuPQVZKoM",
  "key20": "5d4dt3WFmFqVYU6r9eVRgkL4zMVPk3DC1ZwH9PTrE6MVoM5jveq6MvW75Dh3WtASVqteWPLN45pP6buA5eJHfmrJ",
  "key21": "5HiWhWLbi3Dt3oNZWihsbUmixaxgznYamVpHrXZdaxV5wnuT8b4C5GwyVG89marKd6doYUuZttsohVfQCVXvhyPV",
  "key22": "2uCDwfADGAR4wdwoc3zu4MFba9z9Sy6R9f78y1q8kQMx9zsPmpzxqctqucD1fakmbz4YxXDHytMsfpvLENxA1jU2",
  "key23": "5EEDmcdZbdu7ATRATcoPtZdHHk9V5EYsmgrVxUGd44WPjMmf7TU65RF3dc6eSp9bgQfpegH7npgnPynwaosSTaUk",
  "key24": "xd9NQn2V4xBnsr94AFTAb9e7vjxZMMhxVwQvtxR9LjGnaHN7YFgi8VqPwmEvrxUhuknyaByuYdY9dbsfWewRr36",
  "key25": "36J9naBakd25mSk5VVrw4M17JoTEWbfEvtWwPXHnGyHC68wVnePKS15foLiYqWT5K4ntfqVGwTXpS65TwC7AFJk1",
  "key26": "5LEu9uz21LigCJm8AeyBihUjvMcU2qzU7sZ2sU8GMnGNGo5S8DToxJmRe2A6VRmsEW2DaZoN6K2N24H13AYoyTPW",
  "key27": "4L2zZw7UYnyX3hpKjikM1PSEuL2QMCGMEmhWXXHh33QqzWcPsyVR2RidaXid7S4npEAR4N4m41nV6XQu8JpJMKS1",
  "key28": "56tzJa2j4M66rTnPjGNMrkaxxa8x9PumePYiYrgoG7dhipc9XbMvyLqPUAYpP9T7EhJANeVqPUpVxM6r9yP6wNVU",
  "key29": "4FrpRM3jBru4Ej8aTdRFshdfSbNPkCYHFezqMxhAPFRjF9ELcAut4wsawW2AJVtk69ZChaYrbhDbJVmY9oxotuoU",
  "key30": "4QnR3sLZ841mghw89gkmUeJAkD4ApLEewc8HhM8817o7ZxjNLS1UgJ2aXXP8NQ8MAYvq29wNCUtySTbwfSZ4HucC",
  "key31": "FnUAHAwjSuanGVKywgiiAHtf6Tcy9P6dkEaufSGjfrWbEJ9jnJt6Eihb5XTZUAvCN2JrKZnwDbP6Q4FqaArmJxZ",
  "key32": "4avgV7iqM2qt8sw3k3hVmJ9g9tft2ijAEjHSFMzgnjhBwyakr6nkfq2MgSTim453cfJ4cXPYeTMMvToWhz3mFK6o"
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
