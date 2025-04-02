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
    "5KNQNLvKcSXjYi4es4UvdgyPkkjKNyuV6GkjTyNRVM729eQ377SrRmmu4JotoMVkoDVY7puTteY61w2pdua7EKaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBD9uyXNdKCKQH6Kmvv6ztQ5fir1YbkFF4cev7DMe1gGK3eLjvwofqnQLxdYYQZcji7e382FpEHUMSKimoZSu97",
  "key1": "QCj4sdydgM6coCa4RRK9UANAvEXyF4viZzDBpacukjnzHYjxutebZBDmgJPrB9HJiGskRia5M8rB4pMkGFVXcNM",
  "key2": "4M33PecP13TEEbpWKoNk2xFabdyJjXR47bz5YRSj1nBNXmccaVt7BbxvKnohStDZatM7q4icB88SmVsRsTBrfQKQ",
  "key3": "4Ua3w5igYeFx5ud5ke6EL8ScN4hQrXwbjdGFWFhBwbyzXkFNs1UB9BAqdha938MCNeyNCN8YptexTu3jQXXaKDJw",
  "key4": "u9GcMU95xVZmqszayYgWUrqmpKe2bXpmTH7GzZ49ig35mQLxNLTjbxt8yZArW9z9ibHXD16muiCD7QJZ6tQxRaw",
  "key5": "4jf44P27WXiiA2CV7ZAMjyVxqDb95u3bmucNzbtNTvtWGZX5tdea9gQtkSBbMf8CD5485cERqxqDcDdLvTsUoH25",
  "key6": "4C4EG5cofsEGxEB5QW1HhXBXCmAJD5Km7PU5Ud3Nm83978AANFHqUe6Utfb5pgknpotd2WUCDLnnGrNgtRQBvxMq",
  "key7": "5KByKdKydPTDWyzaxU91dFCNP6QbhUsF9jLMHhUgyYaxnWySjQX4YaVijEThPAw7XTUS7KfLJYqpP4Lmw4TRb195",
  "key8": "3rAccQGJBHZdHRg9ZnwuMcdhGUhFWKEeKZdN5ikBz27pMcUT31e7TT23UFD3FCD1uK9yUwTY3JaepLkYki72J6Xy",
  "key9": "bRM9adarJ3Lsy4dDJaYdVgM3RtzMsvoMBhGkE88TPmpemJk1v3uGztYfa1S5eLE8S6xfVPhSRpYNpxbpg5Mv1ps",
  "key10": "25FRjHR3YAL31qDTaPGrGycSEd7k8cUk5dxirEYm8datupHDBuy2dyzhPcKaGZvYhkKNHWTGSgs7FKFZoxeg7BCP",
  "key11": "4hHxPMVBicTgGzKNGrGvAPQJyb2YtKJEsgMPNnmoPTaH6D8Nd3iCL7YmFocV27W7J5ADXzPCMHahRoTmUzc6irtg",
  "key12": "3GA9V15gwympM5gJ8UXwPHfYBetdrZhEAryfnQuPtYwCLrJFtpyuKp9j4DKLCAManc1J5s5Fn9NqHeYegmC9YLKr",
  "key13": "26CbkVXFdiDTxScYztrYBqT9hDALGYUdySd36BLfDJZx5TrZnHmnKG7QX3qARbjSkdsWb7E38RnuewGi8MKTuXrB",
  "key14": "K5NCjUq9tudTw67AQ7hhqJBB6D6ToiYVRPW6x9ZR7C11U4FWnSAC6NXsHFGRg23RamFvJmcmddKkaz9UQuiSZXM",
  "key15": "2VB1idwKdt6q6A58TamRziYuoV2b94KVNiicyHQhwPdsgYyTv2oVXG1kdtLTTrCXSzjBX5Yoe8EBEDGtexDPaRbd",
  "key16": "5zWu5FcvCQoCxxFgb6f1TAD2KaqHm3bLUhujYKffd6Cy8Hfgur2sqsgW98mb1NtvpSxUnt8ZibqQK6L27xrKF7wQ",
  "key17": "3nCBCPsAHH6iPcpEG7YcVanZdYjJNQe3Ci6pe5Xaw2NnFvJjgYpPmhKxQfrhFr6KyaNkCCadvXKfK6SBVQoMbCwr",
  "key18": "2qSAkfDWi2xLN57HmvfsDUAsXRccKezJiBy8puRPRG4QxLER2V5VttxbTmHBqnw7H7kiP3atyCd6Ftb4fATqwAvx",
  "key19": "5R3oRp21QGuBqyKxYGxKNpxFGKguSKSrApjcDekw8LyeSLiyUwxozYZFiJKTfWHNgPbZbkRCVWHk7GkZCsAmtKP9",
  "key20": "4bt3KgppY95NrUBPUajYJMfsMt3YxZjWWKGn8Z4FkvyXvFCLMsNHphmSwdqKTxmf2sc8mMsFxukZLQN7H9jzyeAu",
  "key21": "9qxmD87PnxJYDrvU6EvVFaPY3Z89eBLMd5MiKZ4ekpL2soLG6YbneoRqtCDmZrtfkpXAS5k3pAiH3CvWW6XiQdc",
  "key22": "4MtLrEdPgXjH547PoWezGfucy1XDguSAmXRpx3y3YLr3b6Nrm6Hzj42z1HuUKqzJGjNv54S4KMtCitVJeSLBHC8i",
  "key23": "3vwQaMFVit8o2kJ9wh7JapJULBqPLipjMTdWfqa5Ggp7XsYV7wQGBaXcxJ65cG6GXdJ9LtBvWepuJiu816y9z4cx",
  "key24": "QffpHsX2Y1ScX2fAtfSxwy8YUExVPt4YRGkVCePSsqAAsbpbEdALeu7Lgr5NeoaiET8EdiCz5uqmsoP759oFVZq",
  "key25": "5eZEgwpZiecjBsQ3H88SD7DmgJZo9iKECF24sCN8SphmKmCQqXcaFaHFYDDfPrWYpqVoycLJuxGWcBvf9DxTicQ2",
  "key26": "5Rz1LfQDWyseZA9uTKVBM7iceK3o65Hgq1hjVWGrQetFyD1PYZHcuG9QPGQfdenBTwGuhjGUxJ95JreExVD5ruMP",
  "key27": "2DMNXXTAghtG1Ty2VfVGAEsePZwYTxx4WLjjYyhGdu6e6nonzx45qDmzcTyDy8yXAGgzTsbFES6q1C3DCS9FcJ51",
  "key28": "4y26LU1JocTXv3Z4oEyE6aWALTWCgKHwA2oBfEy2nfEZhPu6R9bjmsQ6t5LuRjaBkQZxtzq7KnrHT7Ndx2n7j1Xb",
  "key29": "4W2Rrq8PzG1NgbdWhR2bUh9wdmeM3rMMtH2jdRDNJ26KHs5xJLHf3XQrBapB6JrCyjtNq59q9b3h3Xybc9rKrPGE",
  "key30": "3x8nk7yPmcQNLAe1kEYU1f6TkL3eLHvck5F5NaagEJaWFPLAVsRTt3PhfSDd7FGNq7X99pt65BvBQiSbJsXgtkD6",
  "key31": "4LWTTKAUFzUEjjBwBkQrwUEbWz49rRtFP2fA4NDUwsgMWpMoqn3EMpgV7w9X4pPAMn6eswvk8TSoM9uEC4P165X5",
  "key32": "jXDsc1bEchMAo59YP2BJLGV3VRdHDwi1HDzif3Cuhax3x9aECfREYinz4RxAhv4ovKXdLbF1uZj56Tq1WXdC4Ed",
  "key33": "59iCmGZNbaouydqPY1K2r9PrA8VPW15h19kCLcQLeLnBndsR2YUn6Tawp4XjtckoKNjTJY8PK5f5j6wKAV6K7erE",
  "key34": "4VYE4W8B7BFLqPyCDovvyn4P2SMj3WAeN4XfZAMJP25DkrJ7oTndM1RrvH2PHsoRNWFyqBeB5WySrhopEuhyHk2o",
  "key35": "5tariM4vmArh11tsnTHY7nZhimq7n1fZGabNBQTTUZVoPuc2JBoxVfTrunsoa5TbJheMJwhCzxvum2RYqSgfgYzC",
  "key36": "gsdrvgNBGnotinZAhA5hWSg36ekH2DnkM2EorLaKavQJgNicMjuT2tqHwH99EAcewr4QioXbDL2T1EvraibaWt9",
  "key37": "yG5ZEnqU43ipLH2nhfnfqeETdgDq8pBnnUhDhT9ivBKcUJWapKrf9xYYLKyrhFoegpwWJQYk62fTbD248u6Lo3N",
  "key38": "4WAgTUyMn31xtw69sDa9W2f3TYez1wipxiWCKbLTrUiFyCrqX2CbCWH9Dj7W9igYGwd2LHMECyHd415N7pmstM5k",
  "key39": "4RJGfsK3e4SJWdc7FDER9FwZx46Fb1nv5nkAT3SjtpHPJitkS97XCF6x4TapxFwGEJ1Bjagrb5ybvwKaonReTLkw",
  "key40": "4rBh89uArQ1QPiFLwnqcLs7WBC1QrKzqdQ1QNkFuifgTEgdmUEt73Crw6xG1BLwdJzW4So4n9TqjA2Et2JKNFFj5",
  "key41": "3NmoQnnnBAyXTz6o4M5eTYuQdKWAgdYDyFuqmkgumKMSfUuhU9R32P4o7At5tAEEa9hoMVDgHMmAe39FopE8pGCf",
  "key42": "5U4dGHBjnwJ5GaE5Z5iwhmCwKhdbKSVUi8XeHSSLwzHoEmEzxXFXMjHat6T8FsUW1jo9Z8VKvxyFyL3xBqmAHJPe",
  "key43": "5Fed5QMXAUcpwa8PPNLJRKejrs2E7xNhEEtTeWr8AmPG1UG3s6vdbyPcAGvpjPyziHYf5dsKhZ1qcJC8eeGKfesz"
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
