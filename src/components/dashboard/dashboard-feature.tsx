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
    "KHN6e1hpQucZ8Xt4ctxdscQ7YfxUckkxNtHTiBYJ5hmFUKSY87PhbEK14zgET18DiYSzRpLDbakD7KomUaZFTFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2WNMmx1YhJ3V8ooCAeNAS1VmaJaiTTiY9EYtXWLQw3h4cXhvS9TTiYHdZaqGBuR69htbUazeDvbZ5mnAARJKBk",
  "key1": "5iYHhcnhAAY8GGZt27oxRokXzevvtEJZjs2eSKv5p2aUmH1pVPyXpzbAsbUXMhpg2RdVXLQ6vFGMRWzYWF9522Pq",
  "key2": "2UnB8t1XTWfmGnugEcUpkGKQ7BqUwmKKptyyfbGG8V8KXY4uu2Hy3UHwiMg4yaM1KUTJu786EnASwndmCnHSHaPs",
  "key3": "3bM7FE9R2GiBx43eSrZtxDp1wWVCZYuHSczhkFGceQexssbKGDXBS4izstBJYBdxMqFJbP91D94jrpC1ip2AK1kg",
  "key4": "2h1kgXgSxyPH3qHJSPhfgVV1KWC13gjgJQgbhfJwn5hhA3a4g7MFNp7FmwuH9tLxTaXtgz1EryDXfQugqEoAmLRQ",
  "key5": "3cDpPwcrkxbQbA7m5qBZVmaraPojT9CUrjtGCxXfhk8hhNygoMBgimbAC5S712mRxMf8VBLxiRbpB9HLLgMNHtTp",
  "key6": "QL3u9KToMDRwhjfnFnMv7hnJaVofSshTf9bDfMt1pq2NUF25LjiGAbsD61YSPv3vxfXVZZRdSaHznWvussVHZ18",
  "key7": "onTBcK7JqCsvEk4vRYZdLA4dc6Tw1gs4rEWJyKzQ9n9s8FYiUamza4H1PKnf7sGSzVmGgcBwD228qMaiNJzVBw1",
  "key8": "5uCEGKUUK6BcE9sm5XwE6j7RytNzR6Un7kXZUt3rgkYXg6Eq15iAkUJ5cw7c9SkkCcSirCW7gR3F1sNCnhspQu9c",
  "key9": "4V7eSLnaBf4iNwVxrrmtXwA427MQomkook5UUmosMKx5TpFyVNCCzaFnK6Qb8pj7ydq6bbp6CdGCyNDon3kyQVNg",
  "key10": "4bnQuSeMeyatokbLDaSgQmusnsWjxcv6tf8mD6nY3K6mDacpGeHTgHGArxiPCU8i8a64jg7Ax4nFd8C85vhEohME",
  "key11": "2Toc24ihVocQ7gWSMdykag29ruzNw5yE8f3zuhJPxsqe4h9tJnToCM9UpqDnso1fcY7YfeuCZk6ut8oYgHQkNfdX",
  "key12": "3UQg89HPjR5V8qjWk4eWwpzSUZoJXnxNjFPavRrSeXpemHohdaCqDeENi5Ko8aLN179pn46BYCjZsJ73fFu2n5YS",
  "key13": "3wJwsm7CNf6upU3sMTNX56PAA1QhWKuHyYhHXVtvGimfn9PsCS7dBVQMdHDcsfZnZA2Q9D9YGQBbesF8k1ccfzhy",
  "key14": "T9JJdZsNoh8YC88FPJJAxRQQRHTs6n4XySexTXSnpfCc6CPcnUNWCtgT2fvPmeYcc8sPnDaXNpYtNPFu3qULd9R",
  "key15": "Bw9GKWWspSrCDRxYcHDwKdJReKo2BotJyDUVn42A14NvtXYKnTsT2MqehZVV6mjAMGSaoSxscV2tTe326jJQSFL",
  "key16": "1GUWQr4ybQfp7BUsdsULjfFMmByWrUwTXzGDeGdpFkk6t85NDkuugZRJiCA2ZuqViTvuhFYRbimf9w5x1FMupbC",
  "key17": "3P6t7eVUTKjLVKKSR5GCXiZxwkDF2PxRAcZ4atFXZ3no4KZiBccTiSDD1YPp16AWfDLaKtuFsx3foizLvvm4AX2f",
  "key18": "2xXtASDJ3cEaFyZVetvssH9jeKtfJWVLiZQyRHL474KpFiDXuHESTUmcbFxMBhDGsKHdYfNfdxXPTiRZSfXy9uq9",
  "key19": "2XLAJSRcYPj959uFHiY1o3QQsNznFvL21B7scSW8pKArXJswA3atgrCHnuDZV2M2jh5XDZEchjModLJHZvYy7GaL",
  "key20": "2yTs9s5ruQVYqnS8RQgAnZZWwVuHEAkRoKop7vmaYQo7XgTxDAxnLuGAKpRw34TxoQ8LV6GjcRbip6bYdqj9XWGH",
  "key21": "5NDmKxpPeepyUP3QXZuxh3K3schCehfsRAcVYSqNxJx8jFsFtaYeAAqU6kYpnnJTDpyvF8pcMXFYzEL2gUargi4n",
  "key22": "4NH8PHRbVEjpWSDhcGsUSYECjNcPWGRQAHx1c63VEejFCoyJyS2Qdz18W3RRRnvqcvF7k1o5c53NUnQaKbMu47T1",
  "key23": "62ru1wuWa87niDAU42eVMkurjK2KZWoPpeD2VrY4ZNMxtpq9hZxVETxww6LfV7bNKpbQsdDcfmMz3kVvNckEPXBh",
  "key24": "3rJMv13KTdXgmgsUpmWmGEiWnwtK6RT5cdzGpDZTc35EGWDgBmDjMLSnGZ3STvubYJakhh1uo5bMoraZcQ4xcvAu",
  "key25": "2gcUvsfpViwsXY3SBwmKG2PsZt9erS16iFeuqNqLVdedRcGWU56gS7q33o2d2wP49Pdr6BZS6rHbeYHQeQGzNBzg",
  "key26": "Esnpm9ZHRdxTbgc5scSnihKYx9BJBEcVnpUewzPcKcM1ZpBZvYAPY91z4t6C4EuWjjX1wp3DQ2UqHCnKGjZsUrM",
  "key27": "j4kPc4mCyjzUGYTFL2XFPhoAHPdhYcBDHQ6uwNHQDVkShdKzp58TxyAngFi7mTAeCf8SovDH5GartiBcbgkPUJb",
  "key28": "3EczrzKPvzjx3KJzeKczL4DcDoy3nqiV8M4bUawWKTMxgTw4dKcx2sHKFpn9RRWa6n5WScX9Udi1x1NFWr9yVgu5",
  "key29": "3BXbDeEUvDUa4qxRpRVqtqbFwzMKduLSFKPZ1ku9NtyTw1iEGVyyLZfzkM4za6QnpmZSmVYtPDjYfmgV4ymGpjYo",
  "key30": "44ZRQHSJ7ThaRRdGKdXsBmMXc6abBxKWrXCZ8TRByg3nL9VDG36CyarRaZ5nYnyAAXmgNALBw2XmJApLCCu2Gpfn",
  "key31": "QhdCjJpiLDTgG3A3f1jFBYEFfztaSguYkKdSaA8pCJqCL7nx7js28P5wzWCoh9CQCSCzLz6xsSBXW3ArWTFoTr7",
  "key32": "2eWw76wP1a4kmkXZ7CXTghKgW5SxpNgJRaiDPDmbW1W27GkMD2pD5C4UUiwMzvKYBbAKRAaX5y8H3AZAKWN8etpA",
  "key33": "4zn5HznUQZrRJjv5sCNrTZYbLHKTjGQuB5zkMA7AHEdcwVbN9JaDGpEqvVVS4FNmRCaaSH3R5Xx5223AYv3yxPLy",
  "key34": "3W6AQYhn8eXjoBpCEgG5eztnR8LQLNDxELPrZUqqwFo2cMdbw82KqhcRFXHik36Z5p9G3q9ziu6VYQXByNrrAQ9J"
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
