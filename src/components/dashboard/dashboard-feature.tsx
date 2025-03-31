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
    "2dkVJqQh7ZUBN9E8wpymYCNokP54HxS2qRWdrrr7avgE1DmU5JT7VPBR4RsMJhxCZo7jQdCEc91Livy1jzP6Vhag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDbKCLAgYbP227pQXYHRMAgbW89GgjudfV7V4uKfo6hNLd4bGdycGB2pxhwoW7Y9wmQM8zucDDVsPXqGPkNW5Wc",
  "key1": "4TNsv3vz9581XaQic6aMzcjGs85wmLdowGLVwezk3odJt56CFrDEK6i4D6MT2xNE8fokxaPNa5diEdhGc53FhstB",
  "key2": "2XoUPDDD8VwJ7nk9LB5d1mpRsfjTJPDcxigC3DgmTCce8JtUQLE1SmCHXFGa4Vr1UxE6uXE7o7Rrqk9Ry5ajpaUn",
  "key3": "2pVmPV1BdVwi14E9wQmuoHvAW5pcUx5MXeeD1uADKxoMyN8XziAZBkdJFUThqHgYXcVf3HamUW38MZvdzqHrhwUK",
  "key4": "DdgFT3cRaM7GGgDp9FdJEAqXVwtsByqRAg63fqCZ1EjvZsanTYZBw49ZRGcngGCCePqbbZ8dRPnzR3AJoTm6tmE",
  "key5": "2XYwDLinJi1BicuzwNBsnJD9YH1vYh1cBEpCmNPbSMHzFpeDPZw7bTvfh5KyZHDBwY5mfF967seopuVA4KwCssW9",
  "key6": "kkp4rspMkZ42qTK4g4GKZpipTytnV1fiF15yVbjHeZpapuvtPbqbNykm5GxRbXyrWeGMLshyT6fgbFcbhgTaNYR",
  "key7": "4czQMNPQTMwKqF5B85gQe9NDPeAVHjswy2u3NCtQMFYDwF7D2MHtgWqXUGLgFQzbDiVpGVHd5zZfmG76Jj3rNcDk",
  "key8": "5a1Ft1qq6QXmNZ78GVpfDdMfmrAPHuXFHxCJamZcAMNLpJcB7o92xcdgoESdKSTFuLPvs5vsirxuQSw5Mbqifbwe",
  "key9": "4P4FpnQYRSUGtSSFtkYWupoTc85d1c32bE5wYfUMtemL6RMQSB5iv3ZpDH3BkzQhS3uhHnssNC11ku9ancDkJzA1",
  "key10": "5F8q4hbN8NYgZrzquWFszJTbghqpN4ha6iRpwZNjj3UnohkF5oKPuN7PQrwQ69rSZcY9sXLRQCURnUska9kiZTdQ",
  "key11": "4XhiYHWEi2HU25kVXZwmfJwCE2gLskDsSdLqVmziF41YovHs1HfqhY33TyNhzerztY5rXVy6L4er6C7nL2BKE17U",
  "key12": "2HnazJ9gHQMLkqtrBTxF6SHqnUb3GbNKKGGanzek5urR4SqrRPu58FNULL9TRbD5T16mCJLNNcPLTobSq3inskCq",
  "key13": "4ymW4MEDoyG2cdwa41dxiEhyab1HfiwJnUN5ePMENa1AwLbuU1VwQvLhJzh1GacdRCMqVKqPQWvZch8NBEdF3QCC",
  "key14": "56gD8jGhXreKLHhCoeAorqgEPphngNFC36vR1EtEjjHr8JzhEYwBZz1Fg9BmR2nD7F6EyWmoy7MyY93zPM1CgYi2",
  "key15": "489g4T2HEmcgtmhc8TmkPuYW6JPafxKTGV3DF9TkAkJnudea5NYJzgpmB9ekXovRRAohooXe1LBWDh4pQc3JRyH3",
  "key16": "47skQ1LPidGEcHp6KmeKQ6ccHC6Y492pSChDbH3J1vSwxBjEcBqSv5axBydnVBNASDN6zNSjqYXgCtggJkavhLDA",
  "key17": "5P25g6Atwv3p7oeZLGGJHcJMr2zyhdgrd2ZoGbqHywTcwD4pdTaSSLh2SdNK7A1xWfGUEmXoLPehVvcgh86QtR1j",
  "key18": "36jTXG57YDbDxe6pw4ZJkUze669KdboXEaWZj9XaYGk1VpmTtiyzDfxedqGAAppDdTYZ2Ze5w3BFPERS6L8ej9jP",
  "key19": "22qtdgMc87RSyFkWhPEnxQfWffuoR4HsDRNoVLrsbkQRE5MvzDtv1R9u6WLiE6uKeVKA26F65MzFwB5Tcndc1g8d",
  "key20": "44HpkwaAcqzz4pqfDzL6zstYY8x97ckmA6B41oGutpPZQEGpJiQzcaapkrW7bn2yRKqcMzcvmGP59FQfrfwQqLVg",
  "key21": "2KCkwEPGAXE3AX57DDrLidBip4RedJYuyQosprfeidvCdVKvtWgJx8m6RTnM9tonzd1AqZrfrDRuV7RWtwnZ3hDE",
  "key22": "2TkXt5xKjh7NhuZtywQhCpk4C66nZJp8KJeYdo4uPho9D57MEPuwovQ1nz9eoT8SR3YkPbDdyUJovEaE5yStYpgY",
  "key23": "e2Hrk376PuiT9WbLEusvRrMg3d5VA5CmA5q2TEamBkrKvk6KkFHtFc9Kh1STUucAyPvFTZDJXGcQsF69ZNFskfk",
  "key24": "5uBVBVAeidm8jQCHPbLbDHweXXzrYLLASHoaJBkAqKTwabmb3qt3XMqzmvgvJwx5Qusb9YP15xJMRdgbdz8ox9bm",
  "key25": "3wW1CUZEGy5vxuEG5b7qVAPRuyQggxsssTCkeBajCN4vSfZcwVKSGKPchZf1ECAD26cX51LwDKiPjawW4zsaAbF",
  "key26": "4FXWypT5kd2t5AMDcw99v2bEKVW1Q3poAgfreWfQWKmQepRMRs4m2AkvgKDxBpawVhSeGBJB7bcKpcxkPUjBtJnB",
  "key27": "5r1KGXgC6QydEAb5KbUNzgRt79TMepjgP1gPDYDZpRDJcNiXcwPARbWtPcjbevjUNw8HB2cqszc8bjfBXrTeLZVB",
  "key28": "RoHpBKLiz4mgkiMNHYu3haQkaPGBTVX174A5FXjy34gqPJBnqhkuAoXfGghQzkFUZ9XUqcVWKhHGdgLq5cC8mk6",
  "key29": "g2W2ph5bwXJebRS25hpJV8DBMDVQkfTfWfSMaUpRdd8F55ExDLqsgXuo7F55hx9Fqx5RbHw3Uasea1Ea1GNpdxB",
  "key30": "PELZZe6xodQmQJgXchyCwyPjFo2bEomLJbjKjkRmDf9R25jRY3XC98pD1hnSgh61PLHntZZDNWspS7Bq8h1SPiA",
  "key31": "ehWXn3D1ric5vZHStLPPdZxjndRH3bnTjvY9jbCZwn7gFP3ANurGFTPDXPbKob7pfBrdMv9YurMVL31YoK7j64T",
  "key32": "sPS6UbYmnx2oY1sExKNTX4ABNCPdbuUR81SQv8YePJ4Y9ej6G6khp2iAaBCYi7R4QEpqd8txY3E9eFNkK5D8oq4",
  "key33": "2Td4rzJSShy5xtHhVvzAfYgLdfRTs8e2n2cR1f1Aa32cjhTknBbSuosKwRb7bDiA4zvYJ7YPHrH8WaX84ENHS69t",
  "key34": "45Rd5V5nzv5MuhdsRZXH2GAu6p4uKFFPm6prZmk9AcpyLm9MfK52DbtwsZxfx3dWHpx3oEEFA54AsKc1e7dufSFu",
  "key35": "4mLyabhrdjX5DWYAfTDJuvmX2KWkJMzfojUAu8PyEjbmB1HuM2uDfZm58NprTsZd6fM5tvDndYc9vJNaCU4v7QgA",
  "key36": "JNqvRPnckuQYHr1StrMSg1eM7rTBeRSJJKfwMEGUNge5nC5smNRs9qtkooDzjaYCbE3ZqZPiWcuGz8UbSYa7q6b",
  "key37": "2u9i4DK1t65Pbd2PSceULMoZGLdqJqJdbmkttzpa9k4Et9pQTNECzyRXnEN4VwxdoBpeZMFDuzJZzmqkDuQZTTPg"
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
