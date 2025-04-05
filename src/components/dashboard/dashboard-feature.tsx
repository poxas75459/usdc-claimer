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
    "DADHuv1vqVdwqj7qRHnWd3LbVTMEYPneEoQiqQR7QdHmWQAveaSPRYunEoMgxhhJ4C5WEoZGh3iZVpZ6og8E2RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwL9avq94dgiw6JMKhPGBsvAg5Svf4Wn2UYnRE9vqjp9NKLNS7JBtf1GHnTTY4p3bB6Mr6TUARdCyTM1qP7xrW9",
  "key1": "5QkEym47iG1NS1Kt9ujT9rY6qb7eCPSpsx8tdcwrvebSumAdD8qZpxJsjWNFWeSTxBQRsrPWtsru5iV8JFTXskZm",
  "key2": "5r1kVcM1YuwsqRtpRFp2Knk4PtBdL4EKp9B73AZPg4cFnqFFq6pxqPAbtjCrJ2viTpiSyhBRbmhJFGfFjvL4PPNP",
  "key3": "pNx1AVxeukCJnA6iHiQAMm7FWP2ZU6AzZ63E7F8cy2hcCe8jaMbQPEF36ni2yXV6qHXxGGFpvgkootWdDobgeLb",
  "key4": "4NCcNADEcoVEj5UaJKVUcQ4YRiwuQ39gwr6BekgVECMjwKng6csWrihAQjJuRqezMak9g7xoeXX8Uwoaqi6ULNXk",
  "key5": "5b3J3nvQCn7P19knBKu3RdX4z1s5zQE3UyGnMeSgPwg4gZ3xsfXjgQy778iTbSAZhKuakbNSFX7LQDq7x2zJEiRy",
  "key6": "Taj1hR9arDopPci3RZKNuDP7HKYQnvEMRe1oqKsyNoGQz2haWzke5xMVWmgqDPyg3i6CjYNdYDvtKhsyyTmDtV7",
  "key7": "2MzgjHj9jUhmTwmLxoEREfzYYQSpzxzzYDmWTifypbUNp1VLHVez7zhe347ArPbwibUFEph9bG5CTdX6xTeQULti",
  "key8": "gGLKD3Q8Mr3kxMcfo2kbCfqUggDPKC5ZS3kxYcuoGQKcrzihrEXEJD7jkNzzEVBfxSMkxwon7vD1M1a2wcZw9dW",
  "key9": "2ZGifkSkAGu3FEfVUsPcNFHzzDnPXExPV98SmR6cz1sJBaTJhhwP96aV8eptUdNHf8xcxTsDZzpzLQssfCj3dTT7",
  "key10": "5YJLojJ17PQ5c2e3GeaxfQRqPCc6G3hxN1f2srnEsujPX4sfUrwS3ShgmZMuUgC6gi33ubJXiQT2Pvn9oFZGjthR",
  "key11": "U9nf3mG6wHAWcavZS1DGha2BVrkyLd42YQH5uVF9qzt1A4toHnJqoSFsa6ZCVEwvRxVSKYhN8zMcwAYLcH4sBMv",
  "key12": "5Qc5VGotQSgzCbuYX83teutfUpYazZwcepWkGnRrfLy8gcdkaCmAbQHLy1cFmnTbArmM6hggbro29vztMDL8R92r",
  "key13": "2vXY2L7br8UL3q5HfvWYQhPufhqJ2ycKor17Gnts4nQEwBE7yMNG1ZfTzVWzPfTM1DzJSXFAWH2BW3LRq4taWz7J",
  "key14": "5PvWEkUDpMQg1DFLMRgdsapZeNX9mbBBUAaGkzjEjx2ziwBGemiH7PfCWMsHRDkWUmXfnwRNkpZZW4RPZKjxj3bi",
  "key15": "51RYPtz1dhBLe6aoKEAu1Kj9MqmaLcTJ27fvw1SoGVx5rtWKf43NqgJJVMcbX8hMzxT1Z7Li38BSCNvvYi2Akd88",
  "key16": "527fKFuKUnTpakcdEW9Q4Fc5ibRzzRurbWzjGVr6BeTY5BdJsssY5N5DZwWok8xX28Uj68J5j5bRe4QBUVZ37EQa",
  "key17": "3vSMFpJ55n9aHDtEWQSYkbauotjrs4fheVmuHkduBGCbsvyNkT7WRej4iFpZ8yWMUosRaipcpvEcyaLgv9G7tM3u",
  "key18": "3aXWzork8PVjrk9f6Eri19CLMRXcYV53XCtnXvuTXJkkhfanbKdNhpj3qe89PYRFim9hoTovMSnwsPZCpfTHsfC3",
  "key19": "3PeQ8pCXvD6iJqAdNk6n64r348BrvMHuQPNMFiaiwWPfw7W9AmmRK8gdta3djjkHf2yMS6xZJkwESmQkaofFXsoX",
  "key20": "3idSV93XpNhMpAYz3vzeF4rsBoPHEzatrUw3pV26WEQDCQcZ8crzr36VVsGNwRQv1jSMACgHP64SWhnaKcVcDBUs",
  "key21": "AJeRYi5duGmKQPqJFVA7HCQ9opStAnsWBF73a4fYHELqTXRC5NcRcb7YSTaZJFUCTFBZJTy6itxqixwZaG4KLH2",
  "key22": "53tNwcsqwmnu6BxGnboCXUz1527T1FvWxt8AKcm5DuDzXabMQ1M7Ng69tm37Vujr5QBv4QNJhgsnfsvWRhHnbWbg",
  "key23": "5aZ8PVoePREczLxZP2R3suYm7Q4yutX1VKLf5hzzgFQDYhLZ36u2r17NAEbjJZhwa5mEgeuvY26HJjcj49aa9pGm",
  "key24": "4keS5v2DPTFvuk5FYqhEhbYtzQn6tZLMEu3hekxLdufMbAYJ4LWAPHCHz2ZibC3u6kYX6GT75XXfxvqQsHg4tmhj",
  "key25": "kLTb1JxuqL6QZy4qdxhxJxYb2Ty8k2ehhFsPWwU1sYxCDPMqySBRaHY1rrSGAXrTc876UnV3LtWkB5m5AzfnjFs"
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
