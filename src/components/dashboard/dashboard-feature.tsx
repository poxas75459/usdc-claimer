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
    "3DvYCRa8LnHe6nkkYn2gYkEWBnUSbQ4XgAksyb8wChJcyHpZPuAmvUN4Z1EFYocxdaGcM98pPt5WkWr6SBPjpwRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKuKBSJJE9aoChw9KA1Ly2hL9FNB7fyB7F8BBHdjz9mkWsJRd2FAJwToYi6fXgityjivkh77Fq22xRTtZr2nGC9",
  "key1": "3Yw3KGHtjBPvJiVvXX9YT5c2PdyottNdDcjnQ2xP87jngVUGQFgeiTgLUR8M16HyqnhfLw5KBgxrkx6azVdgm5z5",
  "key2": "3txcL8aSNu9fPigbPRD2bTCJTNMGBsmKrtoqXTCgFeAYz94Cbc4TGk5xSbF8VNt2srMkU1P9dAHexpZdCHtvxLk9",
  "key3": "5x5VLD5pPk2xGCrdvYDjM9Dux8qnp5r77Fdf3ncj5HGa5zpFSa59fJNw4q4yFuBgRQaZmFwC4BKReKqswMHUVBQS",
  "key4": "3njSNG2aKmvjH7NBDryDEmEJqHnKvV7U8nQRKkPbnFGmJdrmN1Jky1dKhDhJXUu79ZhbyYUzVBw9HGf1QXne2jPU",
  "key5": "5JfmKYZtsViXrXXhHZSXEnKyrcNNpVAFhW41VTrQES1PQN2EX4i3aRkz8svXejVUXUrzWiypK8vveipGY8vUtfHG",
  "key6": "36eL6snp6RuxSp4K5rSDvMLSFTmk2o8h7m8uy45YNcWqrwsyzxoRwpgJdKg5AZoEkgNVNeR6Ka94tUMknZgjBdA7",
  "key7": "5cij9QFGN7QGmNE3NmframdCzqrnyqw2PmF7AXMLxn48SyJJDJmgkXF94bdUpAZvQ1EcZP8MJxzLSDdX14p4iNoM",
  "key8": "m83xs217C8wCQE8KGUV2jWE1JDx1y7tHwfc4snehVBa8dw9Cpe8uMcY1QEcUBpWCLauqVsrWwuVTyHb5umfXVWH",
  "key9": "5sGET8p7qX6oqEUGxnZVRQHyhnzPptFB4iTGvgV3dG3pyFXddebQuFuHN1QiF2MCxM8VqY42UNgZ4asPd8yybckY",
  "key10": "3GxHyCY8TyCgNTMKpmUoHyYntZDSRr8zLn45dmbsmK8sn6VyvCD54F35iPEJeTMTtyAnLx4ZCxyKYGk82UnwiDg",
  "key11": "4A3pZFkdxwJEnbAtnbypn7P4An7HzbdRYaDqQmvFW7mqsj2BYL9hGB8cS6myzmPbKP8eqDQujSwPXuW9TLhdiqDo",
  "key12": "2C16CeAkVjTqKbu7FjBFapydxgCF2hrAmRLVf49v41d52Q9K1Qr7XDC3QRr1bY4yvZ7xJCS76zCzKLPaq2PoiU1g",
  "key13": "QA2f4S5msTE3LRBKkh6CLX4mgFtvEBioSF9LS8gGjqbfV77W1KJ8AH4sMEd9f9zbyNv9P59qwFYcmLpJx7Psf3y",
  "key14": "3fhZ1ziJUBYHKuFyBM9u8Vpvez88mib52yTY18XqKNnDnemaakrzdwdo2HdHgtMVUDaVfTM4417ug6PVG5kD7Ykn",
  "key15": "inGxKiR1SAA8XV3p1N9vvnrDa3Rrio27u5RdpdPSxkQJ47x8GmoUm3RgrFbTGjhpDtUwU1y2aQh9McFiWYLM1Nx",
  "key16": "2J5r9paL2eDyEFZJSZt2vD2DDCBgvfk1AjMedh38nzRSF5N8CP7b5KFou2quwzbobVmV2vZJrAfQe6nYMCXRP7tV",
  "key17": "55B7ftUqgg6PpyXoaY2zpgN6xKduSiYjvHbW4PvSXQVxo6hQ5zzd8bxiNVddenyzhdXF8T2jtBrUHjtPU9oZPHZu",
  "key18": "42Xt5R2igWWUrXyHRmbo9WhFhkCWqRoh8J3KzqZ4i6ozC2fLdBHxfGCNUB3mwqvVYbiMVSmFFKE4vEji77KapY8y",
  "key19": "2aTNNaMPFAjqUVVTiR18vr84QWGd2LwYfV2AmTwhCnAaZgMN4ef2HZuLqJyoUP8urMjjdM35qtVp9Uzrfr7iQmZK",
  "key20": "3J8WwpLFiCZtyGPR7Tp2CBwYW3vXNcKgGXv8eXxh7PcqfFi7dF2vCzmZaiiGu9A3D5ssVjxxXDCuyWhWB8opQmBK",
  "key21": "5fryYoVQKS7FY4G8vtKvY4YjnPCgVJYrpCUPwjSSxTvE9xo5icX9YoRTx4nCaEwNgf74wku6gBjyK4GabR9F2FUq",
  "key22": "Cc9GtYbLskHYHbAj31bYBN6umJidPum9e9RukBCfv8DCFhTamUyXR1VKtHPcLmK344J8zq1CiL266r49jaBLr4p",
  "key23": "5UNP48KcQPzjTtpqhfZzrDm2bKy5tdLoc7nPGagh4i7n12Yj516cJfQWE5TarHwA9o5hnVYKYWjpFcUwb3FGTNXJ",
  "key24": "4A9aN5wH1WaqoWzxNAm68XZs2TA8ijL1Sa5deidRoPeQdJDYMzhxwvuoMwudnvqateUcrJxKRuQgqRz46Rgb9eQu",
  "key25": "2v7YWpJRg8Qru2VXNCBxLRiiTTEY6HyxdfbahJFBzz8wvMbJnzy56gAcURred31ym2QZ2u8ojxtiR3SqgsM3igmC",
  "key26": "bgmAoTHrV4Ljw7dvJG3rsFZw7LT3HM8jV3grAdvSVu89LUaXsedsp3QesD6Xh3QYBtwjpwYbeUfKxAh8ocLQPSa",
  "key27": "oYr8Xpv5KXkGRPZgCBSvLehSQnz6GsgPZydB6ivvAc97WZ5T1649qC4umNHfstAf7zH942CpiDVGiXfLw3DGLU1",
  "key28": "2NrPBwE9Eqx8TpGBoEppNtC6hXY3isGfvdTGFsKCSGdLTMTZcw73Fvu7caYE6j4GFPGG3v9VcKjhm9PvsPFJb3iX",
  "key29": "5FAnDmLvqSv42h5m7UGNRPjMGj2Ufxkvte79macd1knxqsTPDAMNz2tAsbfE87qXyc84fbsLef9b3fi7qRWsLLqP",
  "key30": "3qSPPuHFiEPywF43AK5CJCxX9zzReVtmAHnG3MxasTa5ZbMKwRZJea5JED6yQABaTCGmwDycWXJeaAxk1S6sN1qj",
  "key31": "5NMdymTcHBGP8noXsvCmYYauVUT7G5uT4ZcGXQSiJSstiskUTqpDUPqUwiJcF12VX9F5Tmsj6mJaS4eqsPszsc9d"
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
