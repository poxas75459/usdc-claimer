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
    "4J9MBdEFQEzHXAFHaz9qGejB4LiNiA4fxRX8ymHXJ4yeoD7mSA17DrG5wqunnAHxVgCB24vdnxExjUyeNZ1moNsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zF2pWEADFPKKK8Bgn2nSGZdxaoJMpWDugujciCcyCiwoACf1BRyEciy5qNXxY4sKoaf2HnyR9sATP2fU6gcbkoT",
  "key1": "2VtHR96u5mwXc649257k74q8kGUxqHNCfCaHXzksZLgktKoU7RF2HqYrcaDVsgGtpP1B5pM5Vo2iMAvhGH74qKJc",
  "key2": "4uJEC5KPQa3xKMyVjy1evfjPQyziE6bhFZbqCtEExCDE6tYy1MCmnTSdScUCYCsKhwN6usZYw9m54MH6ekcwnhFR",
  "key3": "5HaGTJXGcrPgb4A8xV4R4REruoaCuNp3otajg5qpzjrsK7XGiQVo4ffDfMUQ22B9BisAaZNnM4epD6UKFT7NAqDj",
  "key4": "2LLcnf54oVhJyVrRZAWDcs1Wfc5cpnsQ2nLXzk82joisy7WKcHpTzmJhQ54qAmUA4QuV7cwBzcM8HoxAAm7yoNKx",
  "key5": "hNd9B3JbASk1Eig8ZWd1Hoj67x2Yi5Xo9MKVjiAo5jwSXAJNgsDxHFGat1hiVuDPo2LE9sVohUwj9fPPSmCuDso",
  "key6": "29LAn724sB67yWmXBFCrng6Bn7HCTC9rEpdsxRq6a9SZFLt5qoz1jMWm2qpsr1pd97XhCSdqxQHPwTwNg9iLMwXB",
  "key7": "CqEwPi6sfCe8yJcy9TxANQUGtHGEeGfMHx6iakoWVusD5HVctMo5kUhQGRbAkAf8ZBvUht4E3zojUpUu42nwr2e",
  "key8": "53u44cchWGtc5JM5VH4XaFeq2Vm71x9zrN4NgGWhiigVKuJDGDdci7MGK2SrbDpYUm6SwnpErvqJH7nfPTrkWT9X",
  "key9": "ERhWA4mHPXdx7wCb83RoK6zGxDGXURwBqeGUtnjiUPwmKgoH2h98naeH59E8qDy62c7F1LipXfaxMGwh5yDoPzP",
  "key10": "52Hmx1mf6k3ieKLU899Gd7HRQoHFPNxdzZtuwoY73JHsxvVpisECv7Zzgrt3vYdSmxMUSpBzdZnTvbAWPCF48ey5",
  "key11": "3WXLjWAhFkLYcGX83WCaB7YXVevP4beW9mnbgVKuveHC5G7ZHVeCKde9BsgqcE7HaD9h2xVJhEFjZr6ZrCy2XQMQ",
  "key12": "3hfrdGXgXrCfP4pyQzGbqv95a1hX8TQPD4esWaawWT8tcN2dZA1Gs2a8d85jkf6i2pUuNGLot3fZ84rNuR39E3tE",
  "key13": "4bcykBvc2NKuv6RDEaGqMKqWj72QcNxGpjj2PmtfW42A9uVJnEeDXZKmnJSPgcjQ7BoB8hQTgjH5grZ9FKa45mCj",
  "key14": "4gdRd4zvxpMqdpXb42Z4pmoRbybpNXUX36YocBPzX1y8ockaj2ix6iY8x1BGts6cHCNyHaxWard5W66KMckDvHek",
  "key15": "2EFAUJ9xFSTUMpHrSor6AWtozyLA83MGYXZMTke5wtvJsrPP6ZVnt87ZNjhvaCkfrfhYiHgeeD3Xsj1gSmdqb2yc",
  "key16": "33rKKPC8wSqqnfyGTuWzqaG8GVGALQwpWZXtmFstc1hqeGgWdqXYXADqPK5L3j7TutErtJxEC3wiAvq3qZyMHCQe",
  "key17": "3eHasf2exZkYh3fus9Wo8R4Ny5mVbNyTcveXPoAEM9T8wXtps8mM4hhDi2gL5EocCz6jrb7rF3DWdJFoDpzkWbW7",
  "key18": "3bUfAebk3hhN27gSgxPKFNn7jGkS9SSwGtQbjxqdwcrYijujwTTfX9RWgfKbS4bgafsy7ScbMst1wuonLsKUL8ar",
  "key19": "39xevEtg5uuXSnXXXxmovzg9AsQLb2qQnuoG2GbpV6QfJte3tz9Dy8GzqbSSvQ1C3rxLChXvMjGkNhVvJsVfTfpM",
  "key20": "3Kd8WE7yEMZ3dqbvfaRDrJxTodip3usW3vnHXDbKFPo9NA2KMTcQmQEeHQX8sRAfKHrq7sRgKfurn62Ekwa1aBAT",
  "key21": "BLAn2Dxrc7ytKpqhfKJuaFszLEn6iz5JrMQ3HfoK954j8pUyFq7tbwFXePLQRxLpvqRre9fjoKM5GqQawNsHo4w",
  "key22": "2aErnRmvQAyy46FScFrxc5Z3BU9vqtw6gGGrgAqR4tv1nHkfCy26gc8VZdLTB36SX4oJSdgUFsciMDDEmEh8bnT6",
  "key23": "4jVGUXHMSckek8iHgziSnnntcdVDNF6JbDqKDpEWG5PkJpaN8mmWqepfNvrm49HiJqT9P31XfGpQxf4dYUnWowAr",
  "key24": "5MCKZhWkVx1PDWXhXo6c3wQDbjoASedh3nATGziH6dC7hSJpKNNvLdXDJmXcUq7iXGyMoAttk6Xmk4qn5fMChQDk",
  "key25": "Rx59jqXiZ4yV9X5GXXwUTUwovJK214Pds38cuQNAKroNo6MJEzFoymMvPMCWLKEWmPb1Bik9hrbSRXLCzrgZoQ6",
  "key26": "2YjjDxbw7WdyBM2hVfLk5sAVZJk3TbCeqtY27fNj6t5Gwsj5U7VT8fzmYbZz5zoMsiXpxzeftcH7GNCbwBKTXbzN",
  "key27": "3coTQoHpfkqNVhaDtaKJ68r5zd5pTvsXrWxhCCgZNd1D8W7LJNoSgmHQFvR3JHasBPtGLA3Zw7qvZ4XgoRhR3r4A",
  "key28": "5inP7C1ab5dzdzXNapxZ7W5xh67cciDVALpwU96gcgqHu2uFY4XDjkrBEKdAGjcGtaBGM6VYufN4wV3FY5nWBcN1",
  "key29": "47rH9q2JMCbfK8CPeT4QQyUkFatfybFxaqMGyv9v1ECDj1pzo4L4DvAJ99GApQdmfG6yiFgXSfJiyydTnTap5pEa",
  "key30": "3jW4hfgwHKZ45oZifaDKY545HLSTXMgFz2kuNqQsYURhswbBMsAVj8w6zfhTf2LGmcCucNRYsExC2pNWcvP52L8b",
  "key31": "UYgogYMF3t87xjksmGK25RnUBn7Gv8uxXXiJHnq5atnAX1qvutY1sDxgvzVz5UdLcvJtrijh6YgCN493pvhseGJ",
  "key32": "66e3gVvkwyuQh2uhM3K9gJppuVw8D4NmbrJNUZsvyKxdkJhNZs4UpaqMzoFUuYASs98hRQyETBnMSfStjjA1Ga7J",
  "key33": "3dZxmuJgejAuyca1G51qj5NxPXAeYL7jc6eCgsDTvckW2XujmPeeTPh9TMuiccbLGY5yuPVvPpgWcnkc2YBKDteJ",
  "key34": "22bWrXz9ThTY2N842FwC6Weeq5ESZ4m2W45Ksj7eQzBCF7RTS1KAvKKTKUnXY38ezJCeoAz2kwuEoYbSj7ViC9ZF",
  "key35": "5yZ1VLTioGnGy71fC6JkCTiFoYFjTC9Jtf7AHaq54aLMEb4qVKc8bsfRJQnkF3G5gMPQq9nbUsruosc6buvKY6K1",
  "key36": "fdfkpXSXaeAoi9CQeUfzeLwVzSwCsJP2DAZF1ymTZVHra6oGofBMF9RVsg96pFs78ryD8En4WcQ5fzbSdEM9SAh",
  "key37": "3w3m3v7fEZjFRu1CfFxTRRUXR1ys8XQpxz5QYktoQJz87u14qRx9gVZq25ntuYv5bPGLMVWSfJ4VZ12tucabsVDm",
  "key38": "3c46eT9zJkSay11yqviJy7FERX1HuwDQjgFUkp9hkLZTUQQkGNhk81fNmG1UZcjZozzYxk3T5hQha4G7RQE7ufH1",
  "key39": "5F9aZdFLFrqhnxFBcXq6DSE9oFfKmdxEUTrzK7yNcR4hdixAFA2hi9LtNPzYsDnpwc3eLc6bmFL1ExWmCjixcRgD",
  "key40": "5TxN64uzQWiJGmHBSeryvzh4twtzx7LbK4TRADE17K4Aneu7gkXnnBoRF2yN7HNFCxCD7fmjVrceDB1Pr9k5RQhB",
  "key41": "4xD4E2QdWwdZbg5Mn7sj8NyLKWSvxp2BHpuAT5vYHCiwwoNZGdjZo6bPAisbZ7YE2VGPcCGGsPCHUQzcvDiTZgAg",
  "key42": "5c4iboLCRxEnWJGvZfUc9raEAfzPYZxvKub9nekGRcTVVbX82VL4Xq8ucRyjbPHshCS8ud4KoroUAp7bMSS45SWg",
  "key43": "4bTa6r5n3BKjA2zY7fwJAeSjEggrxf4kEkxsLPvmEMgZFZ5acKNbSjdJyzEMro2UoaicVbCm8ohv3FSeqMegM5D4",
  "key44": "257GeMpye9iYWmYozEX8M1YWRxNV39vk5wiPBue2vNATXUSUmQDM3QCPT6WyYqkjHiKHTcgpV7ucZ6pDpydAm9rF",
  "key45": "2eFx7jexbDcDf6GgWoxETupMvVQ3v6guWdcAUYwdi2EQw27gJZgV2G5KcKejz8hUCmbbMmKtRaPpi8qDnu9i1GgA",
  "key46": "45WmC2TnBaiT3unmPDmw7HWDZkqan9FW1JE3k8YNtCAbWw6f9XqUtPDEuaihPr4VDbaBdwXMi7XKjcm7ptQ9h98m"
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
