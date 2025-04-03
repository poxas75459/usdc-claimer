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
    "eBrmdUmVoE1btpXNiF6CPyJfUW6kYvtGceQw4XXEuMWhGGFFCJWLmV4ru4Kda9f4n9X1oSNfKaQ826ck12nsDfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MK4VJjMkYxbyjcd9KC2UuzJZiFwNUjVM5mjT7Nrb3FA63BTJu5hupJE4X2ywufWBgZpGFgmFnTKkxHuUvX41TH",
  "key1": "5mM99sf825eH7BvghiTX2uBcQZg2yh81h9BXbTtQgsPMMv3MwBUPt9ACuNRdde83esFLKTrAWQj9z6PgHGFdWCYk",
  "key2": "5k7gjEEQJ9LhGqL8rQ3F3CmivSs9q6h6DereXCb9Q6VK6VSGmj5GudHstNvzHzq7HLGKpAJdiB4QSuvGEL3Bde6P",
  "key3": "QTnbWguQnfhjjrXcmjShAQnaRZvPqWBGYguJrPwNW4PhmmLEBT7PSCieej9GiHNhHRS2Gb6Biyem7T9fq1YyTqN",
  "key4": "4Egr5K669DxP5qoBDzXxa5PmBJeE75QUeKQWaCW7pdBdQt9bLPgnJ8twZ8uBMdTZ6fLW3vULVY5uFt8jGBkPcjiV",
  "key5": "5GovENA4smYkWEmSsBSp6RpWTqKUU57Nxj7VyhdakXEsZdGhFzdzRUFoezj9KLo1RWLP7bqyN7ZhMbWa2qPuiSkY",
  "key6": "5LJFjWG25Ww2jhPw3B2AaDZhqbeaJ7ypxnze7pzDgBvGHfHoyaP6nJmWayAMisk66tx1YmZRHATxtFeFjCYpTU7M",
  "key7": "3z1Duf4TqUKoiUdoHwPiUy8uE3UGdSUDcKmgsv4iVSDrfRPyPZfRX1g8rKWrFXjo2Gcxem6CMCXmCxwiNBWC5xXP",
  "key8": "4fFCwe71uL8pdi6shPa4nyk6HYFvDjLrKrqE7XnKxMpwQFVkjL3haH25Pqp2cYLEFMpmZynPLnTVptMYwgeVYndm",
  "key9": "2imqfz9ej8BgroAc8wUJSyMiVGvHnbKasxSnPvqbZ6ygbFvHiCsnunupW5nzLjui2hQJ6DuVj5whya5JL78wJ1ht",
  "key10": "3Udgjx9DrgDBVPTyuCdcEHAu6zGx5arSaQHYvcBhpnZEm5tz3KZU2LmZ7be2yXTzBBLWyCTn6twwJKkqSUBv676d",
  "key11": "5jxNvdSWBW3h2JkpJYBR2exEMNvB1vXSJQSownNM3NhKXe4M5EC93muQUF2Dx9FntPWSnURXKKbgt3sRc9q76C5W",
  "key12": "39zxPJfCET6hbh3MoUKp51SiJXYnMD9yPxPdeR5Yp6yU6uE8vcMa8KWRRxqC9j7iXEByBhYjQhRpLSdnHEZGM3id",
  "key13": "64KV62xWHTAVa2332vD3PW5ufwB2KW1wPAJFxT3P2DhGn6xDj7GgsxfY1DSCefexRBhqTw3UFj8x42uJtqf3r8kN",
  "key14": "a9f63MecysAF8hPzfzTWgFeShAspww6HMsH9XexUnMsNZcZVf4ZaFfjG5ow8MmKaywkZRywJbbVuCueMatHnY4e",
  "key15": "zv3DaL6zhZ4SkDkEnbgVohgwFsrXqzeuSAcjGv86A4YFbxpGQFN9wTxQdWQzk2mmnbavVHyT7TkAn9raXZjn2KT",
  "key16": "4Rc5eMYJZmc5XGKWbWEBn2ceVjK2hWjrXbUwE8jbzToQ7og25e9bCnyUkdyoTZwcjh6qfcBhP8NPvpxUbt6dWArR",
  "key17": "5JGpHtz8aR6EDfsycYhcEdYHzpfR4eEND1anPCU7KurRkmAHndA8vCriAU62zBfXeJwqYp3i9dbHQANY21WggKLg",
  "key18": "349EArWS4t2LbrQvKNB7sBQXnppiwXt2dgVaES9GwL2kSVkJKoNuwqYpZcdAqRrP712NN9gNyjCBHGKqapNXRDny",
  "key19": "24fAzRx5g5LZd4asVSMUW71KYRZxDqARrigoSrFg8femwnX9GrtgNMdB3T3dVEVGocJh8quHG2mHpg2peczmwKrH",
  "key20": "5Bi27mGb6p6tjCJFonLDyyaY1tDa4yvebxWBGmx1iJp4ejsXfxJ64EJCT25eYH5hDHVLGe44U3DWKHAsgqRW5szY",
  "key21": "3zs2K7tR9BcJjS87EdfuWyd5XKYh3YkNd6Xqfpy4Sf81FRKuBvUuerSJokYxW5JjRRk7kxThf549HqUCkLzhf8cg",
  "key22": "4Xi2cpW4eV5bRmVv1DR1TxLrvcxpXw9CXv4UoDMJPSR4kCJkexqa353Xbkd3esHqaHgS2cdV5ToFKpcwpidCTN6W",
  "key23": "65mpNHkY54cnd1ihWDrA5uwnP9qGD3rH9PHaZP4jsTdUKkCQidiEK4PZgfHXiWXsi6Lr3eEWKKGfryMkgWWxoPYS",
  "key24": "5KQMETKffXMAe6QnukgNgR2a3g8yw6CuagxuwjShMmaZRmVNVwWvSiLwbvNcVm7XkDenSzLD87wKCzw6bbg6gbFY",
  "key25": "2NxkyXjaZ1Fq3VFqYkkcoQTRT71LBQtFtv99MKxd9ykfrn86nByoUREeLgoLFEVxN5FyaWPPdBv8HY9BJ8J3uF3z",
  "key26": "2NNJ4Xv2yE9M3dAZFjNcmfsd5QSYN4xSUqVqkr266JeShvTp878PC8PjteVJvE4pw2TN9eqaQwgpaSbYr3hhwELc",
  "key27": "49x2UQ7TvzTWQhPZufDsiVMAANNzg7qgfR3ZtANS3u9ZzmFQPwLStut6y19XDj8AbYyNyQwUFrSf2nYwmxDoPkpB",
  "key28": "4XhtWDah3RDy47RrTYbHbbnut7t8yxvKccHnk86A9CQykmEsrQVW8CBTdrPsnSZYgE5wZkMp1hhqZMti2qVxxHT8"
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
