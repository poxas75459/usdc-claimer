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
    "5YhCM6Dxb8SzVo8cGrchdFM4QTKD6E1iJfzf15D8d7cKbkUa2uFuF5wtC8YpQmjuraZTqdsDaEi8JWDrCDFtTkSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CU57v2YJfMsehcVpHJ2EEjFZUcrkeS2iG89T5QTan77pu2r7yNH7XLMNA9QRnDx9pNYK7snj8wh64dyMLL7rfL3",
  "key1": "4ih1cBGxmEF34cjTLZkDabM2zp7B5P3RqrJDwwcoFJ9yTat5jjVRx2TXeriqbj6BdC9ctELxGkD9rVjzw1AzMLP9",
  "key2": "4kTPcjBmSRpboNaLLJW8GB4XEEHFYceM6zzVNACSSQeAR6L2w6EyXZy92h9PaapPznG7LqFivZGCQKAR56y84LfM",
  "key3": "8Wvgu4k3xByjWcGvjKDNWXwcZ69PpjXbRqitXEXgmGYzsRKPzzgSNoh4UKCNPSksr6bMym2VDq5JgpyyvBCmDzu",
  "key4": "64GqdwQGffSKApzWLT5YDtkUAaS6eo4GMfvnsoU3576Q1r5jLL9EGxrR8sqFg6o3Jd33edhMwq2v4w2C2wWdQysA",
  "key5": "UvHW2LmqtxobkkUJQV97ZdEQbaU3hRTZpRnL69mZk4W8zrNRfrkTCYhD3LTGEUzkFYWL7QnY3KsFZ4i9brhUJQ4",
  "key6": "3qHtRtz6b4KF2JwT7uFfnY2MBRm3cBk1iEzkLErSQZWwriyK7ecGdpfCbDA3vsxdoqhzJCZG4Nj7NRG2AQsPtXFR",
  "key7": "3USVD5DqeYZ6Uz5XWwajcjLDWLBS8mJVxaZtePXJBrkhegojZDwLgAGvKhpLKJkc75zQBM2ii9nGKSLpbQQ3rGTn",
  "key8": "2iY31Yx99eVJPuU3FsJXqGj8NivNxAEbt4XntVCSK5nYminCsGnUW8RXVZyHEPvh4eBorpQ9nqnXXvUKVYvA9YWp",
  "key9": "2KviP8Tw4kkrPvsYuGWaLG3FLH3Y4sAdJnoc99DW2aC38Mj99RdvKhcAUwWtJ6VyxJXQFiWQAHmfvhUuf5FZaB6d",
  "key10": "45oX9ijmJgJfd7XFGZMErLaMBzyctm63jroFe1TqjHJe2b5gBe6VehPZaHgVTZWCyu35UmbeEiM3pCezf4dJJj2b",
  "key11": "mipksGuUcEitnXgPnbNz52xhiKguvYAy3uHJhKVDvpjLGJyrZ4cnGaZCLbzYenqXkp8DAdYZKBtMd7rnH1xGpAw",
  "key12": "2f9kVKjrmnh6EPjE8SBhNHZCwxnKsnEK2wD71CEbLT78dSDdS73bQmWW1J4oHG8m7h5Vmua684BoGANhc7WxpTpt",
  "key13": "2tgUiezFQWrSHAXE7iAHRqLhJPZft9eHiSSEKg3Bc8fMgmpDqYtaYRnXdAoPZDhpayzCNzS6uwex3NpExd9DPeEn",
  "key14": "5cJhBW37XwWGxKi6mtVDfZLFgbdHWKUZMps82zhGzok3DVu77K6M7zBKp2XfCZdQBDZZ5W8woWeDUMczd4JYHjas",
  "key15": "5eg8v4nYzhfhx6nYEW9B2ttVAuTsWhsb63GHoXeKuhLywmJiSW9F2ANisxVHh7U8XRgAqksh6CumWNhWdHHa2RNw",
  "key16": "3SW5cjxo2hF5Co7rnyW69aKphLdAHyB5AtSwifWKMLLySZm6qEZ2DhhauA5SrTp66uWAtTPNdve9BYkp8tbwkS7A",
  "key17": "5JNgtGyrKBLngpHuY7YM4VekESCzd5BgJZYrq6KwhQfTFtedMc3gHPPWGRC3ZLttZorktDUJ52t7HPvVudtmjrmj",
  "key18": "3Ltd45orEt7bs7e5hkF1adGgHMasrgM1pcYuiJSZ3mV95WjcQH3wUrcLEPyEp8g5WsvSkLmYZzmi6WZMs8VEs7gf",
  "key19": "2v8qAs9YZoVCoHLMQGAeyakKJhKUY8B65PgK8GP6PEicygKRBZvDMod7MvvesAVduDZvjw61xaJepLDgN8DHsD1A",
  "key20": "3VtPqA2eqRUJRjRBCyqHbhtyQ78bocWTpvvqCYFVpths6sjDHDdNcYjiYK9tDwkDnpgruURUvobSsqg2vjNDEwgR",
  "key21": "422EN5zAtBBHUxUBxzWMgqRBCEaETvmYnPU2xv4Tiw4MZzzr7GN3f7f38gSxQUMnKAPDwRJdKXXueu1jeN3JQCju",
  "key22": "vgxauzGd1Mb2fw1dg5igzPX1C2AdPaBEz2QpfFyf7FvrzYuHYkxXdiRA5dG6Ph5EFvaa87Dp6Auwsw15now4hC5",
  "key23": "thC2RHtj7UkU1PyFVnUDb3dMQkk3ApuWgAY3nLxRno4yTpFwNqx3g1Xf1K2oNPiwRMx5APED5GuAFiciKgKLVSq",
  "key24": "4g5mrLGDgJAQrcDsC35Erpeg5r3PeTuEu778zCPuayDd76sipnD9WZkGACVs9jqtqchs7Cg4tZFMfz7F5Yijza9d",
  "key25": "58KmmB1JoD8ULLXhwQNUkAPXp1qZQMEtmidKg1BGvNN91tzQKGMbsJLJA3sRCM5Yzp5pcN3js7daeuwkXGoFAERE",
  "key26": "2RvRxAzPojLJC11Sw9vQTjSbdJRuRFsskBcGKqrbBixSqS2fp1K2fjMspx29aBGR6F9ozebxq7rMtJXMrRnJAuzJ",
  "key27": "27xkeKSdnooxDEzu1CEpaNMU29m5SYWeo8MpR3tbptBurh827FioY3u5M3QDMypKDeQzHN8Yy1ZgkHXSpPPCviDN",
  "key28": "4RbPaPuNendbNRuDYcnzbv9XQMnxA8VJ2khQ993jJ1bLDHUt5QZiCYRtDduZ28LFSmjGhaZEKwybVpq2Ki6zyGAJ",
  "key29": "3KcMwfT7sNDrJ1DWvWgzyYokahoVSuFs2PChUFP13UrhppkLdPi7eFPcaKjVzPANVFGWepbw3w6r2jeqUhpHtbU1",
  "key30": "FpvmfBUeVjhrRC3mpdbKueGRexsPL9v6D5qgzU1CSorRKfoKukRbHKnvECGKAqXQVf7YBA5ppbWykD1y4qNUVE6",
  "key31": "324tcYpi7aXMLqZahhi9zft7Zcx4aeUfdgPWvjxhAcemiqBa4efZJfWSBPizapX4VuRLz4Sp4jf7NLVLaekyrrNR",
  "key32": "rQiZECzEwbyf2A9sypXEfhw79DfHHGCSdmF7YyUoD6AQBn3XoDbdEdX7RXKQSS94gavDUfB4G9WUgdqv1cF5oHo",
  "key33": "29QDKhskDymEux9Pdv5mdD5T8oMo65ghRKcG7F7y51wRaoMffHpP6odHNNQ7vhEQKKF2e7w4Vtp9KTYSvC2eEAm6",
  "key34": "48b1a64vEBAUYnptYpxkdVeL5x3JsoqeYr38JVsjSrjcLBuoK3VKPKmbQw8KruptKGvwc7ptocEZC5D8vpQuuAW1",
  "key35": "3twcpTnqjdswo8W7S8zkTMTciwf12skgGz4BdkxYyvFgnD1f9iDeLAJqwKaWcjx7Dk8Y2CEYeNJHL3hjuNFtyvS4",
  "key36": "4b8xpqmNNKNqBXhzTwwAR7w4XgTes9ZjqRAcjNhZwee4YTFGYrHpuV36R8YyNYnVXJmXHBXrmEfabXKecLCSi5hD",
  "key37": "5MnQREg3iCW1X5tFJsBbD8teCjd6qZN7esBC8VHwot8sECUAJVG5xrsf41qgLcsv6oS4T5tUyg5ovFmTb3wKAvhM",
  "key38": "p5vjkpis4LUawZ3oviXrUPcJZE5s1Nfh7QcVnB5hzS2iWkiPrBeETodcvUqa5fLYJxjtX4wE3YN3cMJHZ7ekWyq",
  "key39": "2qu8vnAD8QfcJZrBzmd3unKQrJuHa88hmUnwGvkwnUZByuegu6jWvDfh5v3vM6gd8s6jiqnMHSu6bVnBx5K2xfzw",
  "key40": "3xtMqaDAuRq2hRHp73UU5nXKruhiH7e22fk6N3tJKEtTuSy5P2BYmAPV7DgmMbDwZ8kFFwzB4qjaYtotFv59YxVL",
  "key41": "3SbtVDon13Ax9CLpwN4mguuquFeRkE2gF5vuH4RrzoTXbpE6wQJ2vGSdb91cuwUxr59Y6KFMvST433bVnANvPwT5",
  "key42": "27PC4gZ5jG6DtDTPVdwA8z439LNcXH1WFyw786pcK7GM2nQpG3RhbL7tWnwLiLpsFDyZ1wxpcyXvo1wkuLeKCZLU"
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
