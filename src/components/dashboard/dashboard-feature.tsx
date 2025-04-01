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
    "3pbPzBkX8M8cwgUWhHERJvPVLHwtoPKHiPperQYk9bmvkgiWEpX9CtBPuMZgUephxNnkC9aUhv1SUvo3BHFLho8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaYSLZhDkHmaKiEm7mnE33XMZ3gGE4UMpZmsftcHNDASqfnYrPfw8CSncT5JCwppg3LYscgCPhQ2Ta2HWJq15iT",
  "key1": "5uwbNxavYoH7piiV5rf2n7rXmu6EopeKGfyiMw2BCF1NYJNhwKaL9vqQyq192fHwwS9LKZ9knNB7SSYp89mnf3pR",
  "key2": "2xHfXGc3UQAs1CB5nrP2LL8YuMDwxkncxyPu5EVpvxCt6DrTcbr9S46W3E183oL5SPV2GrGzKXYTs4fEWKBXKoBh",
  "key3": "5w5gYzsynhVo7xwQcgyR8fnWtGDr14JcgcG73ki6XoPE6LBhu7HAyvoehbKcYk1qotRSYoMyyfVC1PX5niEa5P86",
  "key4": "4dsrjc9eY2yHXj9tQDJRZik72yw2FPTN3KY7mSDYGcNsXm7ggxMEawPsZPJcCrZ6rcfeSAGS9GsXyS4znLjna3qR",
  "key5": "2qRHENxPC5EcSprVTh5Qc7k5HAbBqwiqwEcNsdSB4Tva9jVnMHSfweaAwG9K36uGV6ZgNhRgGYVrfkcKdVWWnYEJ",
  "key6": "5NVkyi7QFSk2xVpND8B3SNLapEZ28ddiEFyuib7WzH4AXBasCBG1nSSHJChEGUyJCPjV6FwuZE9jTGMF27SzaLih",
  "key7": "rtSgF1GFfm2XJLGJ4cqMsRM5gsea6SWRgczvoA5ANFVnWtgv28hzP5xRyNed8KWmCWJHdiJj9Deed1crbKMrL8F",
  "key8": "662HEZhoU9GXEfVTV6Re4Jd7LJeWXnnSZ9y89q6EzRFfSc5wxjh7w6kr51sgSxG3DAEQptHbNLH4UPhiWpFXx3gp",
  "key9": "3ebxm4gxqV2gBCYB48PujbWRc2rfGtHhgdH1Xn2Ebv18jjYjfTEsqCJBbq9fTb6AmFcdHaouN2ydKwpfu8zY662c",
  "key10": "5V7uGh2z8rBS6QQ93oubwnuuLH3PMJ8jWQ2oiKQyvy47PhV1XA3hQ2SRm9cz9zw2K6rMjBbY6hLtCJ2rDceo7ZNm",
  "key11": "5JpG1Azx4HDCtP5PrFg6twEAvzGCyWB8i8vqMf3ubbGprWCKTDsoP2ZA1tz99FB3vxF1X4U9Ffi1mVKyC91p8eHx",
  "key12": "5Df3Pyh8vaX9KvXmE3rozg3Nrp3bdGCvqYZQhEkWkj6uY5kQLj9Y2z5zQKM2oM6xDiPngtXnC35zCUqTwoYpHZwz",
  "key13": "5iRVbtgPrDXrKsvcdd81SoY13AcdbWiDaHen35H27ggsPJ7AXyyTSEM7Sv2v38m7LgtdzMwiG3ap9nNaofgCu4tp",
  "key14": "5hZCkpnTTB71Y7YCrZeHovS8gbgXCAQMbPNyKEpnTExWNxduFrdgWxZeA5cqdKGcXarF9pCfgJsyTUCdPQiiyKUn",
  "key15": "3fN4NXwDvv2hQb5c1E37owxcCXq2q6dh22vHXsZdTecWVYQNcBF6cEHgWTMEWZeDXEyjF9baf4HgXESuD7Sw7u9j",
  "key16": "4Dx3gujF6nDefU1dH9et5dhBsiGwLZR4mmh2zHeiK1KzJZVS2kaWDimtN4gN72LK1awtqVdUgTJYLA7TemKhK1b7",
  "key17": "4Larubt1tttm2AV4J2a4mH2wAsQsJr7LTE5TgscEtPdxqgCo4AUPWctykN4jSkhNEcF3p9DKooDCvugkgnQARQui",
  "key18": "2UGEHsCNsV3bjWbSz3JdYPKmtqhGtuq5XgUDFXYPifsXtMnKKUXe8ykiYzWYrq6DARSpfW67CWwfkRfS2WxvTXUH",
  "key19": "57c9SKeXvnna9CuhWRX7guSGeR7i1tVdULcj6gH8CSxtTnnXxXvRXu3sgKYXmbUFbP8yUxzCHf1vtHaHJ2FcboB4",
  "key20": "qdDHU3zmEb1qCvbjdY6wNtXZmEV7K6585PMHx8nbmgL4k12P7yC1gVmiM9AkkEiAsaRRNtu6scSBXHAnHsmb9EP",
  "key21": "5dipmSJF84zZL2A5p3udzaAwdkmNNk2G4sHMmeHeGp7uSmW7qipGbTkscsYxY4Waq8mipnnCUrpxVMxruBFxajNB",
  "key22": "4hstSpfGf3gqqzWdKXswLTzL7VsE9JQnFmHxCMhmGzJwzzh3sUDbb7DVvUJAAbz72gY3oKwkagjMfWQPn7yALexN",
  "key23": "2WufJ1zNEcXaAqJxmBbTAaMsarLjNfar3rcdKRb6PS4nXUAbjiWvCesBTsUaAhRPU2xe5qqk9BbE4e2xviytEBTS",
  "key24": "5WtvZAHjcKng87XVBFcypKi7LfZHDb4PLjA4TBKCiVTLsVWGuiWRyzmNnC5Y8o1KaiLqTDBa6r5HLe1LRxsa6MRh",
  "key25": "32VWtN9jADDgz79kKRBKTXqeZ2MRBWTVYeBewb5n9DxuCrknXDLhED6QqWUXJ677tuWHGVL4N8GRDx4Z6nCZJaaU",
  "key26": "2ZJ2CYnrjKjF91aHM5YhhJYV7zhuqn6gNZqaD4i25c6ThBKK94BBjrEraaXB9iVWujYpzreyoY3Ce21Qzzm27GgU",
  "key27": "5mkdRLa3kRuo46KjiEkz3Tcd86kUNaSjpL2V93jScEL8FZQzzt1DdNgyLKTtBuyaZhBoocnrz72r9h6rzWX4SjP",
  "key28": "3PX42H8WxTx1Xk8W2PFPvdDBq1HqDNWsA2GQffQBRvmvXDvGzTG94AH6t6u3ux535tx656sHS9fnk3DXodHhKqmq",
  "key29": "4D2dVcGm37dz5p7pwnooN3npvR8VFCdiRFj3o8CSGH4Zf7v4WAAyAs1JLL9376qQgV9URECFfkUS7eKA8CvMt5MM"
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
