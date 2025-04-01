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
    "3SwSxVbxJAVGRqKXzeki7a5S9c7baATtdvnX7GYchUkYQmii5UANQgNsjFfLiwK7V9oK7bwbAextappFG5gh6X4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4773xPgkNaJFLHsGW4L1znqR4rmE3SyXCm5vCeUYsH79yUqaqmqBWBjGKMkRY6qwUp1AbGURrUEu5XY1aY3gga9W",
  "key1": "3sBzXVz61cAJ51AB4AvbbeyYmV9wiecA2X3v44fGC3jYk3DGFEo3cuJXa6CHBMrntaSp6wPzP4x8Kc7cvLxVrXEr",
  "key2": "4ZmWc1cbxqL7KoobqMbYhywnpxmiQSZxMA34iHJwE5D9ZMRAX9qYLk3GBvwpAmkzzkLxLhjXPKj7x99okFCz1Wzq",
  "key3": "QpHgeNxwsLMMMytEU7Fs45CXU5iDpRg56wnP8MNP6DCWGZepiTpEewR6ja8baaWzDzJ2sZQUY2yZiW4vPZpbxKN",
  "key4": "67BVKsxrXagmmXRKiVr939VcrEDjVBE93n4viJpZf6xo9E1V1Xa7YvxyjXDXxi2DB6aPRV34qzPDq7XiTwmSRZhH",
  "key5": "3oVvpiFSR5L1CEkUdAhHjMbCgBmsXcT1p4qktCPmamaHXHJXTLVPbhew3WP6czUbLp6jPnCrjKChtnAwSr5RgfRE",
  "key6": "4VJ3bn1hPt7xfFL6jyScVjLLJ5t8ugiwy8PiUoU6HsjqDD31ApPwyYtrFtbfzYMTzkT6R6ftkz7xjoBpbLtQ5B4W",
  "key7": "4PnqPUCLrEjGX3U8nb2oADa6QxkAH5ArbauFizdq65ZFJZpzKVKoXh2EFSRqgMPofgeMFWHNzph5hH6X1d2A4uHE",
  "key8": "4NRr9pMYLACzCL9kELyhrSSBq5g3HZMeUEu1qieAnqNuEkT3cXeQ6HSE6uNBnJ7x4TVznWojNSe9XHrgcEg3JKeA",
  "key9": "3KZ6T9k1rBx6Qavjpj2tWq5aS3sXJy59TnjumGZEQecPvJ6Co2n8Go4WaTi1X6ncdaQ1Hp17cBZ8oC8NLyJrGMwq",
  "key10": "27R7HdC1wvaznFqdUaNjdZb8NbxtPrzZ44EBaorwWBakxqz3LHVsD11Tf9xmfxhd3TLCQocj2ec2ySws7byaqemX",
  "key11": "4cVysvsQnuZm5CvBor6q9ppQLCACWnttfaBfFnEJMS3dykTdZEDy8XkMXLhRorM825aRUJgzoB31MHLcmFni6HiD",
  "key12": "n24HbwvyoMcdc5w1s9uvH5vndWPx5p8V5gdFjodi6MhMJq3v4KzeDhrkmoEipMuGMBNbs6KurUDSCHxrru8vtYs",
  "key13": "j7guNFMk6jomzHm8gwDPSwths6jyVjZWR7n1miAX52uxmGjvMAtyr4UHNCQ6w6hs8cQupK9zYtFywFGi5NZRyDh",
  "key14": "ykJrWpEaFXTLpzeYMgk2VTmp1T1z3msS7tcf32DmAXeDu6T7xSp7Q8MSqAC8Q7FQALVVf7JAdJjuGrc6NkNFgdk",
  "key15": "7hy5b3P4UcAXDVj9DVTjcSK3yPAMszasfmNDnt8m63ZLCf88oQtU4RT9CsDAN2xrFQ9ESAweawUZaWSr1qL9FHG",
  "key16": "4doiHhDKn5aCT3jwDp2XFKBKdzT7W8Rn5u1w2VTZ3evHMabaFFRZL9AA8Dtn2LizXphTAEHgrY2bH3u6tAs78TEJ",
  "key17": "4dSSREMUrynMCUFFAAGB4QggjteTp4Z4EW5P4k6g2XtB4YYwpmaDd52LqFrjvfm3cuxnZ2YsPixmx3MEp6yY86CN",
  "key18": "3rA6ifzYoUiDZfw1cjGhvPuE2heGgjXQR6RvLZx5rtmkRVpwtSHr4Myb1Bf6ZtHU8do5ncVrWUsoh7eVPACrivVu",
  "key19": "23qR1H8whA8ppmXJzfL1DZW4wpxHjVP7naBncV5eaGP6xk7X7NziGXuiepVSgDJDxj36peDGKkUFPCzLLmzRD1mu",
  "key20": "4ZsHpUcN1VkTWtqpDKy2NKXp7SR5ibV93u97w6zk3TZdDELw5uazHzaMsjveephcwhs2qAJUqBeep3D2MDn91EyD",
  "key21": "t3k6yiAz1GgR2cGdUW7HdPZFoam7xs1WpADV72uDyyLPtS9Ufx8KJ6wp4U1YxusTEZRSsnR1eRDhfhFLc8A348m",
  "key22": "zWrU4aXTet8LFEgzwPMNX1fkBw6mJPJxoJGNSnF1SaSxDxnw4FFC5nLGrkBkPGDrjyGgxw4kQEdTKVGsv5ExN9Q",
  "key23": "YMDHAPFukuGRbDWrnJDHS4n6BXe9sad9aCawMGUrXcu1pAvNKQTePxemNKzm7aGPUZrdnF6apcvJB7qTWYsinsg",
  "key24": "V6may6GNSY5ZmPePLdNxRVgDwVbwfEZMmFj2M9eFY7ryHhY55n1WNByK3CKuAGZMun3BWGEgtdV4xt87FfbGLYu",
  "key25": "4AVhshLHz23gERc8LB5WWs12MdRL7Es4WdEgHcbMfP87Lq2EsdyXGmPtqHEBvfmnxREkfLKoh3T1k4G8hBfzWpZp",
  "key26": "2rtZQJZNweL2MwFg8V6THhZFTk2CKhV7KJJ7jLCBJjdEo2XE5nG7gkzqqT27eXEDp7DZ4dmvaR5J9ddrKj5W2Gav",
  "key27": "4DEbokvTNinoDpe3MAcBzcSK83zwqaKviM8ox2NLhaJk4b6s81UQJ3t6Ahjr3e2JA1cWqjx3gLef3pRXdze5uXi5",
  "key28": "3L5tLJs8ehN6xpA4xpgNbJo5cKhyL9rvEtmCNrqsWpQsuf9vyMemuqtkunjtCtXbeQmq3cDZk1zX6Yi8diWjRCyh",
  "key29": "4UmjJKaKEQFM9wvMy5Gz5DBBLVN8fxDb8wchR1YUKbbDRHcUVZY94CdjCm4c6skey4NjKMgzUwszHa2wkWiiabyL",
  "key30": "34ZZYGVBLuTbauy3skqvPpd44n3m2TdMjEGcuxFcN9bapMuHam4X3kpERcamPmnY33deqgPHawMVSdD9PNh13f2B",
  "key31": "223QQEePqBWvzNbjCzJq7DiEp2TxiBWjCkk8Q9b6YXVGGEXT73SNg5uimzrFFea4GnWbDAkiF2okwp1a3TA26hdK"
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
