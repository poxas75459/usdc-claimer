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
    "iAnnnmVTBLaQunsJMEzZWEZ7cUKx1zSiGoqKHazq8XicRzb4J2VcAdezqwymLj5rVmHJs2BAJ1kyuTETggGNoPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZofDoWfBMGEWH7ehSetBz6fCju5Wh26Xr3oUr7JEL692mK11RUaU9CbSfi9AAZUMGyaPFqXrHMtLN66ryapD1w",
  "key1": "2mL12ahpWyzUvXs4jyMC7RtSfUGqVBF4PyRMBUHzj8RzUUkN3Uz18JkvP9GR6TgeiSu6CWYYS1mofJt1TAHCJuug",
  "key2": "3GiMnUWsJGF2qQQK51NgyqcYUu5KTwcQCamo9MM74wTKeryhTTFqEXEJAQN57vBEAGzbHCM7dcgWGQUh5u1xuZyR",
  "key3": "2h2JXLmuPuUXamKK8wyT7Kvp642spgEbNGBikjw1UDZDRW4s854RGvoBZP5WS5FrgeJ9dTRzMXSyGwnPn4MMqpva",
  "key4": "2wkP25zXTksTmBtnGsAJbtN1NFCbAQ8LoEDKP1QvCCFNarrgRJA9gZkGm86cUVpsY1PfyCByY595Gkyp8vu4hcHB",
  "key5": "WEMUm4HGH3RwJo6P1fTYk5yRkvGazHbeqEDJZyritvHycCywMkntoNTRMQ6zepJS7oBmn2SEAkuyZVpgdJ7nj9U",
  "key6": "WAEZqJ4SLehuotoa8mrKgvztS7bbaiYhbmveSJeBXF686HL9s6NmsmEKBtSUw513PTixD67Rso7Wi8T8R9EeK6p",
  "key7": "5QEjCniP9GQZ8PVgGza6L1XbBwNfKK2z9gCRT8Lqda8tner2fUyMRwkWWUcwkrkyKqLGk51hNFJQNwiyiBbErrFW",
  "key8": "3nbVFt1L8yKe3ax8ThFbfjrQQHKzwMxTTcboVwM24KZQEHboMaygVvLLoXQuL6YS9s3piL3bHCnyWHX9qaxiJqx1",
  "key9": "qeK6AsKnuwAWEMGTigi6xLX4Nu5XpQPL8xzrD3eJfgLYsf2vfcPGrd5C9TeT4g1ow45zH6maxXNV1ZHShLYd9LT",
  "key10": "2BK3UWNLzvr3446WY2BCgchWoB1jN6tD1F3FmgwWJoTfH92d8kf9Y6CNj8X89SaxWt3NQTPQ2mQibSXwVTUHy4aU",
  "key11": "5hTsuKNGMemnrc17Y1sVfwqZk3TK7BTxctuT9JrTKxW3HCCZKbkn1Wi91kkSqVNpGFJJfeKe1FZ78US57EbEJxWZ",
  "key12": "v5uqdWNKdfxkhZzLma2Pccfc1LLp8eu4JmWaytPQ2ouJPcbnLBCeFsifJoxvs5gqFki6kwKLGLpvb91WKMNc6x5",
  "key13": "gP8L3cgGAp26N57PpmxL3RBPZ7fUuC3JKPBDJno2mdjS2JvMZK2dxv7f5QN33eeN6TnWpJXE7V5mnuXYR5S9SBF",
  "key14": "51tcJjbPQDCLyiMaWbdtJLuXChefHdJXamNzbjhowLspBh7TLWBkYcAccfANhfYtbdmpxaogWsQy94pMks7FmgMD",
  "key15": "4BMQRsRxBsUe6zQPvuuV5gp26DAQLXvuaYoUNUBrHZLJsqSpKgLsUbSM6HX3Hvyam9g1beJUC5g5QT5HbmnPZJYx",
  "key16": "3TH9MNSWw2QiQdJDssShWebVvd93Pg9dyidNvG61BJf1Qwa1KNG6Rg8Jm17FPxWbAnL3kuRY94tdiLUnbmjxPxm8",
  "key17": "5moRnkWbi1oUSE9vv5zKU599gjZ1HvywQkLUZzHv6BpXeknnPEGodEs8bruRZbvteRVGWK3WX2NM3Xg3f585668Q",
  "key18": "kM7LLLuF9uhtqcLBU2GmECo4vqpvPsFppA87QUuuE6qSyjTo7ygDz4Zj1Qevs5XJ8dLG6oytu44MHDuLvVmdwmk",
  "key19": "4NdqLcg6wypeosHXqDoJEqw9fU172MUqwaC2C5uxYo9SSt8CGNEU9KoixAkEW6rv6YWTBgmpkJcMtcezuc5fJcL",
  "key20": "3t6YTEfkMxxVfGbG4zR64HT9YbFwFnBmG7bZZ9FhniZazQeHZxuM1iAaSareDywucH9P68rYcWNY2gdBoXMzKKa3",
  "key21": "5zpvngyPE3x63dWVuDazcg7ZQhrJsqqcRqFNWtgtWgERCNRkno8xqg1LCFEk1kAvAe78C9svTMdyzbvXTMuo7Jho",
  "key22": "928qFz8jvpxMCvzjLVzd58xm4RjazAHWY6W1Ymj2ut18f7aUEUbvKaQ185bmjdadec3Bj7oLMsLYhjsoABRNr2e",
  "key23": "D6cgfyDBCZUwP52KtLVRMBWjwLfF6k3xFZYh1sxigzh12RjWrMXwQVbR1X5D5RuVNXRXjijP2pX9d6wSBFhwKdv",
  "key24": "5QKcrSRu9eyMQFCN72qsgVqnVaAk2aqsULs6m7G2gNa6LSdraqvhY2CSmRwS7q5n7eHx5LSW3jruqWW742pLhYzJ",
  "key25": "2YUvZrkXnBxgqBt5nCYm3Mo34LcYSXCTjpc9TT5cSzpm3e9vAaGKojCbsxWfKc94hqLhau5fx74REp3hQYGUUqEU",
  "key26": "2JnEnRdHXFXqe5D2BAk7ee4TGWdAfVFSEXFouNT5k1Y25Ntyo5WfBpk6WiSX28J1pGNcjzweXQH2nvST9PDhcsbX",
  "key27": "5a3xcsTJ2eLnQq8V2yctuYMhu8p8pnfdzJS4ATPRGZYjFx79HVrizme7XChezSDGByvt1EhoVSohjiUc44SZpbtm",
  "key28": "57FdgkuaGMVJgXkPDKUPaPH8SU1ozBZnyqxYnTHf3h6icuHwH1m5TsrhsSXDJSAzvm2KTn6yMUMTZGaEEd4Pr1dH",
  "key29": "smigCEGQSDPqt5LhttrKnSLoWeS9LXK5dYcXxaRruyBn6sCoPdPBFj2cw1DayZUAm7DnRcj1UiCpAYftsdsCmGw",
  "key30": "3GWjtKPByuvFemZPr56JkBYJQGijn8NJbWA1M79e7ZqLrjfrpMPrFxnpW1ezDchJzsKx9oNpLojPsx4zDJ7GNvPy",
  "key31": "29PdgceruohtV1SbApsts5nx1tSq1bnRWCkrrTTfeXgAqNNQGoJsJn92jrcy6tzQ9YikfHsnxmTkTdWhzjpBrkLW",
  "key32": "2KdJ4AsqzvbhCBYvhmXP3h49U4S4jVVzxgs39ouaanonpUmvLuRLdQS13ukyvNCa5yRF8SrJpGAspQ25MqrS1kdx",
  "key33": "2eGhLrDyrch8eJfeVK6EKm36RCwiyNkX8B4dLXwSRdNkswWL4xRViSVgk6VLCYwi5HEXspXQaZy98mYU3ZuGN97G",
  "key34": "4stUAzEe8ccUa7FNYwftJcvVJjrA3TterNzqMTHdAmDxWe5aFHJk2FnhtoQccjMpzQ9yRZbDs7L5P3PWCwA8ajwS",
  "key35": "4zHxV1iDgz5bAMWCmkaQKwQRHvUYmzJ6W5MMDaqHGjoUR38U2fss6LcicSbQ8YPxPWDzafbje2eyNFj2JhCHRR17",
  "key36": "5Ns8YEHqBgihCeBTPYVwY2hGkoh6JwFsZ4TpzUwffLjS3E9tXzdrL5GjHuSN5xqUAH9R4gvWqhPwzx5hpJ7KnnFQ",
  "key37": "3ffnZhcHprFKGD4JhVLBJug5pX3rrCa9H1LZvhkjyJWymkmdE4njRjzqqh68HEC4wdLrfGguVaLkV14SAWAHYick",
  "key38": "2ynzccauwb9QVJBSpbSL7iKKx2Xiff8SMYytUjUofiHA8CNMkjDCkRDAJeSThMNTYVZjYBiSC19GW6svNphjZyGS",
  "key39": "3hsuF6giEAS3JhuGNP6XJqs67ntkiBNsxh3QtLGviHhMxJWQT77dTmLXhfuQUxpwHErGFstXCogck9cWBaz2Wi9s",
  "key40": "34sVdUuFzb1sxnAGtHPGHQhKJWRFC6UUmSArn6PcWHDX6MP54M3bwNJ99VqGievLchMJ5fi7nBW3zWmSY5q6y3it",
  "key41": "5o85SfGKQzY5qv4mBk7Efb4ALHDNdX6YXh89dMLHiBRW66WSNEYHsH6Vn6Cn6q9Ye3Zs6K6kUtPs8FqZnhA7kTsZ",
  "key42": "Hhwa7M9i1AjU1cHC5Gb73TtGcvJDAjEUyX1nLFq83RbcxnwfVEJHRV4beFhPe7enYYZpRWeYCdykYuksH8zYung",
  "key43": "4q3mZg92kwqQoBEuHceRxaFLaAqNRBR48n2XDTrgAL9npA3zYUi9EBGmMswqgtRzjVFXZZtNaZpisPeVjTTmVGKU",
  "key44": "44xsCXBj1y11EZ4arcxazP4ztCUQxckReFHdvRZpSwd9vN2FAXdob6tafVbgpxmZrSa9KLMsbt9ND4T4aqGFbpkt",
  "key45": "5oY8Tez4xcEEqdRjeYexJX3Ps1fK8171ztwfQjCaraAEJHoYXA9hMX92nsucp9X2P5pjFZALXB2UdraJtbkpw1GF"
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
