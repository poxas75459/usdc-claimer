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
    "3FaXRr9hwsK3AAAMjq4W8fSCnHrSkgQEdPsfZtyBoLYeoDxi8XravqkUCYH32f8QWAUDge5GBUyUwT4L5WpViSep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4deq7s4E8AQvJYEnWaGM4vq2qupoN9QuiwnL6edih5rLJp5vpPFkoKxwEMn4besFp2kn4CDYvS7AGPShXaum3ZyL",
  "key1": "3naEZa144KGw6XTXyuF9Nj2EE4NgayivVbZP1CSAe5eDxhxsxDq5xvpa2CSZcGDo9ySMx4BccU9adcFSzRt8mzHA",
  "key2": "khaLyriPgop64rZ6HMMNBWVP3eyxPoJnHmQw8KGpp2LSahk7h8Qc64zBTMJiN2wcVynTjmpbwUH8W1tzTLw3JKf",
  "key3": "3mFfPrwtftTyC92X4w2TbKJdyiYtfBBApS3SjjVqfhGM7bhEJmFT6QTCJDNvXpJjsz1D565HGKWwUAm5QiaN9Sdp",
  "key4": "ndarX124hzzdTFhy3yppEwa5kpdtdjsNFJK27bPdKyrvREQQ4KWojzBuMqo1tNxSaWnxwGTQMGWidTHJEWnTCYz",
  "key5": "59PE7zWxo18ecF4ZospKzZj7sdzBcuTxFHNctXRtwYLXDAhE7LX2t6T9ybvpBrPRPGrgP4jUHdBrsL6C8SoX6kot",
  "key6": "3aRNDHmj16zucKR4EHABJYxzL3E7r35BZThugrpdaZDmRydmxuXysH61eSh5oKYNSqLaUQLC9azLpsufuNdPjHT5",
  "key7": "5VZRNfj6RmhCg6aZGwQuU3s9mdorzEJkwjD2CZHbFS7gUVZqt31kJpnwzuQLLXAhMmuKFVEMd9YGNdjmtD3AygEi",
  "key8": "5Bjvpsv8LYUMKYxmJVLJoLHE3N1phq3RyB5L8oc7diRbu2Rnc6RWw6bPkrmAP4pfrhpQERncE5J7MADVPK3fHZ4L",
  "key9": "4sfoRSnuMypM5WYKWUQ4i54JZsyECvTv2PtGbefr46B6C9nGmtqHTN37ZdaWnSQ53U5FsM8LjrpNdLegEjZDGUYH",
  "key10": "5g3pj1X5wiinxd4QzLwzJtW5Fi9qnUpKHyT5QMGCCJFVhJBoeskC8WiMQTVHKt6xDmMJLo8ia8K4LZJEv9LjxJwj",
  "key11": "EdGvJxy6MkXSycQb2UPwHirNhnUvoHCSb7jVA4jLoX2FkkqPKJ6n1c6BFia6NWPmQKGWHRWP8eM6HWtxk3dUNG7",
  "key12": "3FXSCBK8NVzBaPMcuYXQkCs6MMmHFra7FesxmjyxNKJrwRSRioxUbSi45QSdLovBejHw6VbwzFRkfvg99Wn8X3RJ",
  "key13": "3pGxY8nUYJKM9kLfFLwYhYcLdwwpz7tgZ8DrqMUp8vLCHC5xbJG5GF1gMPSU7mzov2XSjadZUBJ3Z2mJFu2hP8R",
  "key14": "cgdv5veu1nUcf1qRg4zAyyYkAM5n3Bhi5bqmhXZmZSSEtdsXCcuYnqwMoWPA4PwUugDLPAPTJkx4e69ymeMyr5Y",
  "key15": "2UUjkiMMoChEnVBywCKMdcht9pdLVkbrMfTiAED9jpYxuVysLapJ28PjSSCmPnnVrSb6G1b8zDRVUFBmw67KqzCd",
  "key16": "MdCP2axXcBW9UpmWscLMujEZZCnkePpkyrn32ywvhWdA6KvXj9ziRvqKzqkDSqhSHHoeq1hSQJNHRq7WFLyVw4B",
  "key17": "5ahvWt5vc6fSW3JCj7LQeG2QJz9ckjkLh7xtvy7vrqVneBebeDyVRm5UmfSDKk9iUxS13nMQw7PWYm9bv27x3dri",
  "key18": "5f5GhYJL17C6usZ1ZvWeohchLDM7bwiuv9WKyQCE8iyVi3B6RLkuXa8zCqTbyoEAhP6Y5UJX24jeRffwzoi3iLxR",
  "key19": "2pmkuHc6iiTWx1rn1dLdg6TiEwsAsCVTXmqm3N6DJCETwhZSsdaVtt6zEwxrBj5WGX1eVy7wPLA3TR3uS7UYHY7K",
  "key20": "5MQyFBeH1CAUt4BgaauLKWAaMbNk6RKvxUubreYLULSn3GGstkqd4c6iDf1vdWfanY6hgkgBaCwbJe8nzT1BTkaw",
  "key21": "o4BFGWEYGCEDe3G8nEM9rQRdXnsF129ZebUW5pvAi82eTd7EC27GaZ4CwqFHP9LseEfvwxZnYAtim74AuHnrnj6",
  "key22": "3gByWJhXVvA47E1JXBSP247ZtsCtuLsEyMsxJuVWmP1NBspG9TNTvNFUq5UqqNizDQrMvfuVD3rn6Cf4n9GVY2Lv",
  "key23": "2UxGbnPUC2vwVPNPyLVZA6xx4nT8UwzomdJ6yxA3QjNSV1jtajnrx7LTXaypoctyYBce3TSXn4LAJ53AVcGTxAo5",
  "key24": "hZ9fqhsvPhVTQubJ5tPCtLbpfdd9p5Gr8v32DPc7L2eirZM1tZqJB42wL65Q84nG6QPDBz6vHMBXXeGiTxHA65Z"
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
