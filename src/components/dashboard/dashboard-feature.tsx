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
    "5omNJz5fj9HnM4xt7WcEikqnpk3DSAvzX9NYXjvJ57LUMTWwAwS2RmrPXLoUS451Wn8cXyDVM94h4KzjFkdpTg26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7F8WwK4rzVnznYbUmU3k8w5nU7JBwb51UB8WkuENcjXrR8wabmuuzcwK2c8hYXPLZyUCXkwtXScmiKudBCWxQQ",
  "key1": "358hC3EQYY2EHjBjJ6qcHCL43vY84zkdQpymBk5xtXKjv4TrW4f8BE4Xwujj7XDpL28Cn2vUQ8S15mcM74YJdsPy",
  "key2": "2gbxscEn6ZakiMH4FAhaFkHN8QaPw4CGzUJg9Yk7cxwCvHonm2DydiT7sAgpTvuud3FbuA9KY3LEaQjzsRQGsZmi",
  "key3": "E8abkupGqnZ8gaJTQ3YS8B5A2nWSM65QfXHhSVpRxCpT72ygpfcw4zrJ6e8ZRpEe677y8Te6kUKUPXcu95LwiLX",
  "key4": "oMjsXh7JAsBfCQ1h2AYJ3zXYmVjQLfGPf4bePTTR1waQn8iTKMw1P7ZcAcsBX6ah2W2SQDqV8fiE9Vxp39Aund8",
  "key5": "41SjLHhTpMx83zk3Bke7Y34RWpMMw6Y45ETNtvF2yRUYtia1yix8c8t29Ner6QrFXU9p3g5Ep6SQmzswX5JXcfzj",
  "key6": "M1sGrk3ybtH7E94zJpDNbdb6PsvB3BgY3qFx9FNWNDqSeUqY7hCy4D5WD56PdXCt12EyswLZtkNHXetDbyyxFBi",
  "key7": "3czmFPey5MyuJbiS3iGUXATimMwMYKURFMBC4qX3Dwe14hNrPyYmnEXymbpLUMNYvsMzq3btR79jFUyrR98r4A3q",
  "key8": "MaYBU4jEuuvt68Y9YTf2c3gGcQ3r96mwLr7H7oouySsHDBsgvv8Sf8PTBzjFnfwjXDiQUxwVGddUFRWZwTaFyBa",
  "key9": "4ohHsZR2i1wcB2ddX7YqgvyJUq1XzYztQx1ELWH6ppq5saJSPQpaMUG5JbyYE2CESfzuEHT4Ze2nFuJo2hu6oJHu",
  "key10": "5jovZH22F96AsRhoDFegfDF1zvLtKPAxA5KJLtGPvAnUJPNPrNMmexN7B3wbvBpg5Hr4DUXwno3A5eP12BL7n5jb",
  "key11": "2Mnjb2ifngQnJwYjuDrov6uPSbJeFu1Sq58jh9JqaSX94nS1SspLFuNkrv7aQNMvta7cKDUZQiCnQoU9jPCuaxyP",
  "key12": "39rSjJdvUKekyUM3T4bTTA1NmkJ2CxVAfmbg6xh6hNn2YwcbARmP2dmQzY53m7rk8f4ZqsTZCqdpHZckwk4wt47Y",
  "key13": "53WfJbc6CiyJpijTLMfsuvBa4QoMMNhQCzDj8zCYKF3ffBWeaTvbH2LwsYKtZqbBVMTNxA42ge5oETHorKzVqjwk",
  "key14": "49hCM7qAHWFbQQ6td9o6Nw64MqnTDzNQPQJtUxN37xzyAuPpeu4EAfykAbWSx18trv8CpNGBrPCjsmstVxXW1Jrd",
  "key15": "3iECMpMFknBowM4vHk7rJMRH3aHcc7oL9yThVSbLJD9iaJytzBc5Pdw63LhiUDVm4wcWZmfxmcJ2AbEHXUMUEAf1",
  "key16": "3dcuqnMz9prT5Xxau798tUjLRpTdCTB9vyR3tGkg1ojcwDUVKC3LYha4z5RtYffQR1ieGCGdQ2Lh37QUVWeEq4yB",
  "key17": "5gLXhKAk3H8cyzvdTizuxYqd71L83KS1ecupmifT7BAcBU9kgrMiFcgVv6gSPnFHEKpyuaZ6r5au6d2TJWcbmXMG",
  "key18": "3L8pNAn81r9YFn4egcSbygf2aPM9z7QNZAjjUGxZasRCVPdSpBJqVGoFUdi6WMAZhJhKc3diyQPcH4RCvNBqn7tv",
  "key19": "5dvp7z3o8vF174pnDWMNyVhUC5Psyf91fsGKi219Ay2amNRXvbwU49aHuXMwnjKFGSK9hW5Asqx6ZrVu77dbBztq",
  "key20": "PtVpscBhp1LBecZ2C59ZvWvS32n2cmD7t3ve3xNHfnu9wreSFLyNnTPtmoM8L15ynS9J73rCQTt5ZeR8Aq9BUYN",
  "key21": "3aUSdujQ1wpiLZVjnLLche5ScNqiVMMHDmfjmP7pt6pYqTUhxtZXPSXF5oVw9ozqSWmJ1NdSf5PAGQmFbijUhBM3",
  "key22": "3ed1BmqoQN37dMys6rYp2WpjBXgZELTFfQy6xBW31svwFtK5fLCHGztZkbEPJGRxEGZjDjHa4FgyFs9ezP32mGri",
  "key23": "n7BoqhPkNFfZBfocmPDM2yjcY54HmYMuUFQ2EDAtYk8J1JcMkgS57nDQ42HThUiVZVyvGWh3m8LoN7KfmvSNVLT",
  "key24": "458hVbCDWdUw1dggZunoEMxxGUtA8aHgQJPmXHrZ5unJwTkx33BQRcgJ1f75zViFuPfwZi1baCZJ76NTn8vHcy8r",
  "key25": "38RdnqDMp3Y5SwAh6LKa6j9MgimUzNyv1EeN2KNjnTeY46GetcC3iWBNNTzXrQzaBJHoNiZX4bRhJUKA1C2xP8i7",
  "key26": "5NfqCnucRdcsBK6pFeAKcotrRafJXRzuzpNxs84YtmPPqaQjLr3vJa8GgmwSaTZRk9JLyN3NNPDRbPJ6sNjJT6a6",
  "key27": "286FdTDPKae5zxVPAJFtGb9N1tB1b1P3yxyWmQrp1bBcnkVvhtGLsytjaRz3aUbn8j3RMFAushyLyq47ibty9j6D",
  "key28": "3uPKPLq5c1YFxHFbWHWYxr2FsBpC243wzrsEJWzpXhpKXY4Nhf1eRurDW9UykW8iLCaG36Z8qeCaFtXX3u5SCFrV",
  "key29": "mXXyzNvzwDenwxgTVMx27vmpVQhjwULoLKnkY6syn6AUDCv5VVyNs4HLg4gdnUrQPdx8Mtqg9VzFejLZm1aj3Pg",
  "key30": "4JEahf8GYNTiqXgUdXBzjjcm79rUj25mXhCzS2zdpvALdincASj2aCxWmKtDWWVs6UqMkMJaMcKBXK62ea3UbEng",
  "key31": "488exBirbTJfs492BZP65TF6xKr3PgVfKWXzYHiQ4APE7ZL5jxW9jjrAgsQMZhbym4D6hA1Kr3KqcK2CSYHcCz1D",
  "key32": "LVsBuUM3Tn5ZiHYbh5CWsm9ViDBcDiJ6PPeSq9Ks3wLUtbbjw2YQ6BGPTmp2nBeLyGxh621nqtMi5DZd9bCsizc",
  "key33": "3mRduUtWwLHNZwRn7KRJ3n6y5kT1bBFuqXE42V6dAYcSAT9dxMgfAR5RnEdeD63zkyy8hAYogQw9VTD6jGhGbiKW",
  "key34": "vtHQTN7LutDt1bZtBdpv9oypjvBb5K556sMmXwmNjz4JeEDDWw4mo3r6XTvFupZyEvwnnQewZDX4yeYHcP6BGaA",
  "key35": "tNnmzzVzcVENse2HsTtZscxEKJn9PF9h4jZ8S2DeHBn1fmbyRxD64PhUxTtXQNmxmx5Mam31ZPm4SPMtPYR3vZf",
  "key36": "2yyGkvrRzrsz7jso94XxHM2L44WjsVWSPRpSho4J4XBYMU1Cs4bSztJb6EvgmQBrWLzjuPG25tnzEHp3qwLXhbWo"
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
