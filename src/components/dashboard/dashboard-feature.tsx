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
    "4y5mHisz4BmaQ5Xjb4Anp4LY6RhpgUfGhu8R2SgBkzRu3GzCQ4LBLyoBKEyHLmyL9b9Pt35EMunNTyh4qxncYCcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUw9kMFiGaULhbpeJseqVo1g74nwESBDnibNNGUCwPf7Yw7uHcwZEbsDSRFzLSNfHXQEkqfCCtBds4UsvrWaXZF",
  "key1": "45xF87K32wFb545rDC25vUdiy2fnEJKDkUmC2zm1QxQCGZf5VDa1ZFXUJUUr7SjhF6LsNvNNpVGti9sP19YpgsZZ",
  "key2": "x8mQzcZkVsTSXDsVDMPZ9f8c7RQQ9Bkqft8EQoCiYFzXRmtd4C1ciqW9BMn99GTxRdYqjyDKfWkvMVaBnzvgcXd",
  "key3": "3T5RKbAsNvpUY2xXEUxrQ5YUSzhqEUk8esfmt27dkU1awFpTuwVBxnoFSQHMA1iJqt652beZ2MwAcMGBbzEW5Ljr",
  "key4": "4ZzUBLQFyq4qNSqcqQhfMLAPBWmtJRXsy2ANA2TGwq8xsT7KhkVJdywa5MAGr1Pda574U7mHWPThDnxTVNW23gv4",
  "key5": "3B8ZDkXYqN5ffGRqZ96WocxJYx6AQBqaaftuZ4oGL2og4hxcp1td3PtJYdEXEn8fmaj5TNed9pUMynDQZfWe8K23",
  "key6": "2my4VzPGw9fVGbVbQ4qQzj5Rvv4VDEszYkGcsTSBebSchkPHBaip7g3gWv9QfeEyYHBXmeQikc3rKYA27qiBL94i",
  "key7": "5yqa4gEsi9LpgxofUKtQUkFbZLeaW2S3TVT6yGUXsZpPoBKpfTnN9T79s4s3kjgNH7HH2GT44ecypF7MeDASdZh3",
  "key8": "2uDUCnSRKV9m1Lxaxj6Tt3w5Rt8S3egXF31DeMep6YtzrvMNpcjdk7kMksyY8SKYGGWzGzWQmgF6fFrycQnKYTJW",
  "key9": "52yogdUhCi5h1bBfXoiZpaiMS8h4nYGiiSfusp49WuJGLdUJKKiAgw42Aqsci7xfjy51RvKEW7TqvCY9UWtjxFck",
  "key10": "ehX4AK2zG74oecxbKDXHf6f8r2wSPBgpNgSzdULt37jsiSL1fimrBY1TgUjqU7nQmSLMZFD4n75xHMQCnBcQ4hv",
  "key11": "3EuokEZkrB3SduvptSTSAwrktMdKkXUMP1akcWgu4tZFLPgp7ij5WnKNG5Lz7FLjkafCZ5VJSYfY67nBTSbGDB3r",
  "key12": "2XP6udRxqYeZWw1MBvbf1omeiQ11RGnrjhVj6K6yeDDbqdcHwtvnE7oKvv9gEn3D7Tusd2fK8hTymQQ9TMLxi5KN",
  "key13": "q8NsJTNNduNgUu9yb54cmwNGo5fw2a2w69RW3FyYMKHjjA7B5daeeqYkMWsJx8a42YhheaeiB12BwGu9H8c6J2e",
  "key14": "2eBD9Yd6tLKjqj2mVjGn9b1TQFUQT1r6cwFv548gDzjWL6b1SWN37wjddAvZq6KmziuNpdfv1uPQTELCio31s6X9",
  "key15": "5VL7tnuKgxzyxdz9HRJ6y6HoP4nTBaQo9xa4CYaQkwrynnpNetHpMKe8TCGALepkeRWCf5rgnDpthBPKnF1wU65i",
  "key16": "2HcCuVmqyE58sgHn8abN3YR3ZFj1WeLDa1gdoUWBnZbDo3xVpJiEjYzFzU5Lcg9qkRECC2ApWTAPX8zMk8pXWo15",
  "key17": "3KS73eNMwSzPb2YupeiVA9mKH8bBJfeYYU7zYZiXJVX7NvsLyHGWSKYtjPEyxXCjZdhutxreZP2ab3os6ZGmFs7Z",
  "key18": "w7qMaL9oBYARZHQivcVYnKE49rtUqefuW6hzxXCfGRPE22DkiW4T5MbY6h8N2wCrht5S9Eexn3o4uh7qmrrJ5VK",
  "key19": "vVAUcbzmqbPCrCqV2Brck8xVtMA8v3ur21hJLg8sJHH6b6YS6H1ruC9jjGpNLJFM3NB1Hb8GgeuXFozHEd9otRw",
  "key20": "3vfTjdhbqYJRAhn5M5noapFeaywwMkAEVNchcD5dPfDUaA7Ux1E7Yx1Fr4kh3X26vpw38WEoKFD1Eh3Xugn3rfCB",
  "key21": "5r7vhBU9VuAyLh6qrckdR5zVRJV2HJsy7KhQ41kUtvnmiurof3eSRZ9C6sXjDf6zgjzpzjp927xYtKwCpVdiCFCA",
  "key22": "5zUxTuC1v8DctJXWXukR2VjZRoPjgfSbYWvXbsZA6fdQJKbyHjEK8qY2w5dnfViRZqANR9HpBP4ZhPqob8gWaJWZ",
  "key23": "aGzFQ7ZCe5UzzyB8DvX1uWyix1zX19X8iCKny8hfDXGCu9gt9m5whQyJG4v8dZ6TpS6hd8g6rNAwZ9kLPFzTP6o",
  "key24": "2EFGR7W46PGGrupgMwwzBwDXGeR6znmiHLywtkmwJL8B2u9yUQLiPmChSCUKe3gA4MLLm7WvY1gtQadPz5twyrKM",
  "key25": "243HVVg8T931bDYnUcdUqofkk9zCSd6ShGkjkECupwtH9P782b4xT8c3XjLRognEWh2D7X6xLTW4MsxwWGMQVhx8",
  "key26": "3Q3C3P1kWcBHB5aa3aGuTM47qEMaPeCeYKNcd1DoeqYQM8Hr2jbYdNMsT4hAmWpxnoXSw3c1TjZKEjkYZ8Ho8oTS",
  "key27": "53MNYNoYy4me5rgbaaERzMDvF7sQHS93dNQv7QM4LfYoRAgAYsMQHzcfjSyKZzvmxFv7Fywgo8u8uGdUA3pS2a7s",
  "key28": "5NY8n82NPgBUJEpN5VnNes1ckrmSwdVKUNnsn45TzZbvR5hCwRvo7ZVh2xvVyiL8h5cfVn5PwYr5UaWBwqrWJ18F",
  "key29": "4HpQGrYEQ1LJ24T5MHiBSRSFE4UKM1YbgE7FGmXTuTG7ozW8ACdBxzsB329TVxtCiDjozcBJdwqcpQTnn5mAynJH",
  "key30": "ipptKhzqEiUhiRnKPg4FRBHXy5mdqXfTkjrQtPUvcJG3NUVR6TcTTUzK9UGvijEwp6u9nwV4Q9WgwUVmmLhQ354",
  "key31": "3dNbh7b8koRHvESYnujDBUbmr1hvdNRNGXn6dV8tNbdAP2AwDP1GQ99VMkFXn1VCqKZ5oKxWZram8E5AHwyhJBEN",
  "key32": "5co3NZTLLht7GiVihgwJbmrjarWH6k4pQEkQLqHzJsE2ked5c1hiSihBCwjLNgQ5rNmkaqyffr43SFb99sWEkJtS",
  "key33": "5SJqufHhPXRKXbntSvYGLY5aabMNCYMd7vvcpqpe5JN51EkP1PuMhrEtSKFL9hR5d7KpPDbNzDKxgocQAaiUJ1eM",
  "key34": "3a3xzRKsNuDtvtmXW6Sam4vwaYmgaoDmq3MFQEPCnb923j82hFa7dHRtXVRXig24C5FxtbkAFr4LPG3L8h6KVuM"
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
