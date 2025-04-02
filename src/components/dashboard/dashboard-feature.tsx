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
    "4PV7dLDQ1xgweWDWHkhVm1xNT292scphtGd5mntoqihqpzNdKfobHg4Gw5KPfBzoniVT96qYtSZNqKKxph1bJ7rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qczCfp7hQBKxzKrQMmfKGV4crRRKfhK424wZLe7DEng2jvtcR6aRZNpz815n9nt2DaeUsdxs6CKExa8Rs4pST3A",
  "key1": "2K5wnfBWrDsCFDUFDee7o3dHjfwNHqwpgnpwJwCd89rwFxNtkJ3zQjMBvRmVkLhzedQfgtqfz1g69nChczSguvfD",
  "key2": "2Lq7JYnWjFadQbKM2qLyfb75hoVqyK4gyKMMfhSVonyi8tM5XQgJR7Q1L8n4jsJgbWR3x5SnWBUmwEKjyBaczwcg",
  "key3": "2mRsCStg7zqFPEnyAqXxn2NFYo5XZGAAYoTSR13WXdAUpmJBzcHafQVBBaQbP9kN7JZr8KoxsKFSgGGFb9Ewpwm7",
  "key4": "4D1yxHEa8bJggLB3VDECUQnHBUNr2DFvxKDmGa1vP42GbTpFpezcif2Ldyg3mpXotx1uRHuVpUSGrbBUWgYpT4FC",
  "key5": "7PHRTWP5Lpd9CJHGo2gMDksbJmH2sprGtsFjpNuyJddPbZYWHMuczVpJJDB5pejZCGcnpfwJQzYAgTTSkDwcLHA",
  "key6": "3y2MSnhbXK3axzmeXAkh3PHaPobmw8E4i789n5qXKWhsgu77f5kgsanSFQU7ZqAX1oQwWSFy6hgxHot8dtQYoaMh",
  "key7": "64TmzX3SUsL8EPhc15FeEc6wzqA7A9mhGKwX96S193zKYCUfjXHYETqWJyM2KCUu8HFY3aSftZg3eKfZM1V7ENu5",
  "key8": "2oyZzRwX14RvUT6kGtJbXrJGsnorkDXTjdp1pFDt7mxxkQb796J67svmV7nQfPcUVUXkdwBKRtpKfT5f3R3D3Dbi",
  "key9": "2pwDJEvz6jt9snAPuLjQEX6sCeFQWssmtAqz8cFPCiyA318TbwdPEFPk38NWVvfMKNdrUiCCzXCYZS74PueTUxRk",
  "key10": "2Sx2o76YEyzEaFUht8ppke66zra94EfyTM5G8jgos8PqWPocvT81o4GzYDscBbN3KJVAGDfZguaayeo96geZoERN",
  "key11": "67r2rznz6hUhp5xrAX5nLrLD1fvPVZ468PVbJz7iNEWkezzh1guNykHqBn2ZaoBuK4ATrxqJz9SgpBSk6g9bSLow",
  "key12": "2yiCTKMDf8qtaQr7Vcwg7Xmcfi4DiAVuwJwh3VBA3WbZfg4DDEisY6a3GfDjsbXAvyBBq8mPjS1eaWguGCCKbcxP",
  "key13": "EeGy5JX2gJT6dG29LvzSwZSVYuS6XVPqCJgaS3kuqgG4tV1NtDN2PFLWMfLppYi6vejv1KKuocBZeNbvXcoAsSR",
  "key14": "2XQPpUC59PECcC4KFS4vwkayKYYwefZk6RPwxzvNxgavApHjYkXguZK5GrmiyuyUfbxiNff33EN8mZKoZnmnuFpw",
  "key15": "3Wi72qNp1HiwqtbBPr8FDmz66bVRonbie332FHYaS4g2o3t6HurpQdwi3WjLYmRh2X6eP4s23wYmJXL77LfuTzyo",
  "key16": "317JdBddUPxSB5Uw1jt1UkcxooFdbEPUYquX8TSMwNmUi5RZbrRgC1SudKwMB6eNPp4z91x7y4incuRA7EDjMjjT",
  "key17": "4u5FPFMyrLotLXvd9JpFMgDEYP7TgWHYVrZHsaEkgymJ23Qo99jrQnt41ZndfijpibURysyAaPF9rqJssqVfjde3",
  "key18": "4AqSmA97ysBcwinqaPn45BXWHC8KhpAEifF211BkzAV5UTeawV6VJ1yim6u8nCMyAeCMZypVaTuYhKc2jxUd4wNo",
  "key19": "3uyV9kRp7pfUxh2SB3HfeUK8GtxArrsCsUrkUdjZ7Csd85EKbYe7JvTzsS6o1tC2sTWfX4bdEwph1o7UiN4hQKCM",
  "key20": "41QTW7wuQLNedcucL5CGovExBZs2PDKuAjm6efo7pUUfeojA87kM9jWzHFrWFbKTPG3T4LZbxDsxKJ5ksNnHcZpd",
  "key21": "2LWhty9mVX63sFmorEXoSzyHzgNkjHe5kz24GUyCxTCrvRaaqMaH4H8FhgA3kTTAvqn52BAjaYoPkFLbP8mVUFJJ",
  "key22": "5nd5KdnDfD7PjVyCXjNu2KqP8UyfpXXyiAJ8hP9FRid5UesgFynDR9JRFVxAzsCneZ22A6uU9w1bk5rSC5Jea2Mc",
  "key23": "2ogTKJznXAwUx4Lw6PXoyEiSH5mKquwwdkUUxw9ewKK1bBFCn34L8d6Nxg4b952RLWfftuCBPpsM1oen4T6viuao",
  "key24": "3QyNpLyjH7j8AbE1VLsQ3hDx4JtHQxehe4k2MV5wvV3NhJtuUvd7YbMkVgQCfeqU98ww4x1ecTwB1um4X4tFtedN",
  "key25": "4YeebPZ9VTYJLrEFNHujJVNGYRGy3u7G28fRY69E11FqChc9BB16oLLe88PEaYojPB9UFTxnUwkBjTFv3iMDAjpg",
  "key26": "4BNmrxfATHQ2gyoW6gRNbysyPTWjLYhGL7Ah23Udo95C8CCmdMDHrswcWrUZBYWekRa835SoPFZCVmRYpUgZoeBh",
  "key27": "3rVeMUYj8cEeM9VYuRwbfZoXkoCpYbAHg6dUbN6ZoxpsKC1yeH1JzypmFZiiEtrofZhZUJkrTkSDqnCXd3ZPzMvv",
  "key28": "2RKVACAJL2dwMnuSJmUbjhkrr8eFvSTJmJ5sSVUU2BzqftJaHoprEVGVURHqpEa3eX9tRNzdz9ddWqgvtQbp849r",
  "key29": "Ha2WFeDsx6ZR6ZdgUb48E15GGys4k5eoiHnvuyJfxbmqY9nGSDN9xDNXF9KLahj47swPWAJ6yG4oPiDvG8WoXuH",
  "key30": "324ycTnBnhPB5Tgo7yvWaXa3b4BTv2LGEX7y3RjzLH8iZr6oaZxdzxruhVyRS4PDZZ4WrRXncEEPSLhXFKrmS9uB",
  "key31": "3aBtTWM2RfDEGmXpLigVAcRjJkwdhJVsPbDRtViD13Yan3iLVFFju9qQLsBF6Ggqo2V9qYS46VUxE6eoPAzVuyGN",
  "key32": "dFq2xQb7TvBCac6CCAFctypeEiJw7cWZVkV2GMjSxTb7LjZ5moGXH2C9Dh95SZxCv2T36a5RgdQTwXbG48S7gsn",
  "key33": "46Jy5PH6sYF9XZ7EMhqAmgmvmguVk1PWmpTx5xxSPiPLiVzXH6zfmMfdpqhe2hoKc6BmPb6D8PQXW9Qz9iCKau9E",
  "key34": "2h7RWDzDWBESRY6N5HrzWQhvb847TaZxWmcy5w1xQVKDijcTnhxMGyxVKmLcn4PYosVhwwokwk1BzbT5MuzEwRJB",
  "key35": "EGvyrVbcKcNixMNySCk4F3DrAf4oEcFKcdFZJ2ZiyyxqU8pyiEvZCwQiDfDqRScTL2dAzcpgUbp3Wg6Q95sCyA7",
  "key36": "2vKPpxKL4Y3vVrGtL54vBCJFFFWMVLPc7PPCchPXtbrA2Ri8an3URotyLroQ9YXMr3gsX37HwYJ2hBNrTA8Fsxjo",
  "key37": "3ZhHN2QosMWsrLFBVPM4pMEiiC84mrkvWVas2r894ZyUWuAKVJQbmBWgXJFZ1Q36E7rqK71SUZKZmacq6H8k8kod",
  "key38": "2fjgicUeXS8kivjj2KXpnUupfQVR79jceXiCrKiccMTogKLEay2CZKMqPMxoqzum5daT8Ekq5FWgs4jNbqR4iBRF"
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
