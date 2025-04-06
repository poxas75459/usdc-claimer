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
    "5jMAXwiikDKxsfUAvZUej1YvbT8aBWdAxmFKwJbg57VJSBvdQL17hPJws5GVFBSmEJ6hCQuWMBMnwUmSoeU4mPB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLYP75WzSZAiUqTRBRf3VCgoeyC53c6HtAJtfSV2HyVLsT1xqq7pNrVoe5YnagP58g3a9dzTXS6oK9uJTzXzWxW",
  "key1": "2PijhB7HLuANJji3HZfxZwpDAZvyxHT4rUJPMVft78TSfqzNUykAcmVfoU7WRK7XQrutpZcSJsZTgtXCEgiaNQey",
  "key2": "3xrfMZKZFKnRH2C146eNizA9LSJ9k1oR54j8tQ76yRavSJ3QY8wfdV5ZRZXM7yKzzNVoSGuMv2BZjfKCiVXJaZn5",
  "key3": "4mrS8BZJhoGNMX74aXo4DKQXyD3SEDqN8ditVmsyiuHk8hXVeNkz3YWsxULHcn5pfizV1JM5nYt4TnqNftm6oTcL",
  "key4": "32u5w9KqxSP8KCyntYJ1nksoWRfp3j9mxEf7hd92jMZZQAL6n8P8HXbqcFmUbzfGDYdQKBe9LzowsTwsHfujVZcQ",
  "key5": "5bZYRRxskWtqpB24rZgEmKgw8DRRsGJ8xjmJCTiXMFdM1ee8wroio5neb4y8htyYyVjHXMY91Xh2ytCZdbRqFwug",
  "key6": "3zB7T5rC3Akakx4Te1mWi7VL72doQ3x7J4xChHtyGH5GGcbDhXUBCsapwSCYaYQFEcCRWEo6tdRWXoNNCook3qTE",
  "key7": "5q75DdAc5tR1MCvfMJ2iop2NNbV8g875gziEhG1jtuDAFoEPUx18qmBH1FuyTAKhAe8HJUEKbkW1F9yF24F5ykUD",
  "key8": "3kNbYvsHxuLzcxc59V8kU7EvVfqJGGArN4aYgCzcFGvi9kK5b9pAzcDsCJdsoiLMPWzqtt75HDRGH7HujAoFx2rk",
  "key9": "4aJAsLGvwiFbUuezUKaF6q3sS46RZ12pRbefsJTQsBLUZ2j8aRmLR8iEmWXZjMohuf2KAA7cAdEjRFDxv6bMcfCZ",
  "key10": "21puAKJffooyMoZznLvdQB3bNoyjiLqy9AsdKJUC1fSQPo1eJsZJUVmKFsdXEirhKayRmX78aSn1kZYBUVx33gCy",
  "key11": "5YnDokfdpuEsVRDjzdKKuEKetxgNxT6JXhith5VdP7Bgx3fui3Ci4Bsn67KhH7QjJt5F4wnLZwN3rF3DDQr3ktSP",
  "key12": "R3pJT9GYgRqETn8TKawZNdmTozguE3FHDmcEECYcmoi2mEMfJZC78pWgG2g6GdoU3CjgTUjKS8DcaGA8hMdXqyV",
  "key13": "6mMVxQkTnfGyKNnFo4K6mvLSdyNwEcCV59W3sxbPeDA4BoZQkUH7PeLYCaT4Ha8czbGcbK4nECipwFjkZQ25A9k",
  "key14": "3NV5tvfEbZumyQtuChc562xs6yDmVaLkyr8ntqtv6fD87cafHxEkT5pi5i54C7Gncd1Azh9Ej9UgrVg8sTnd27jT",
  "key15": "4bny57cW7bNgu6ttrCFbv9s2RBjA3sx6TP1ZMGn7vR4A5tNwuU3rS8ahQeGf6EetrVVj81ZQMHensHwDZgoWTS8s",
  "key16": "41EbjYp6th76BUMTfFBiPChFf251aW7WbS5856BdaUkCr8917bhdTBkvb1XGg94Ji4P62qMVQJ7YMm24vq7AojpH",
  "key17": "5XoHpe1CW2caSgTFP9r69P5RKD1wYKJESnzZNJzpoa5gdndhdEndAJVCuVZfYUQzEDB18tDc5UpFn6vH2FpEopZE",
  "key18": "gaLFhyQzd5VjaPkAiSNiRZhGHUt4v9MojFN9ZYznw9wqpnV3besTmphAWoWNLF4sZ2um95PF8qqfLBat7C1UFcc",
  "key19": "49VCvg59keQq6hFnN5K7KnUGMpkAzU93vpFPCP4EfdbrTDB1XXnSYgBKXgonvc46sreQXyTkvhVfKwfrXBvUN1n1",
  "key20": "2yKa1mRwVpUetk7Lzv5u4B6eESn1Ba9kJwfjGxEnAW3tg5tjtgomDe6gywQx1iqAQmNzLURfuygAJZGKeWNbAeWW",
  "key21": "3oatcfR9iiRsaYRAZ2ExZXqidjXjLFL3fEyebL5DNEGQvUCqzbRV8SQfFu58dUf2xrEDKc248kbnenX37xPQanv3",
  "key22": "4jKDPactdYi7iMejLoL7UQq634RD3UPtxqFG1vUcH56xyfmiTyb3T1bEpT24ZB22G8rcttNPgx2A5nNJdLCDEe8B",
  "key23": "2JkLtWVvHXfyE1xxjoacwzCdxAL7YvGd8vj4e9xsH7BAyp89jfRXCid8AeVJhq63TKpNENQV88PbAFqUwNytZtW9",
  "key24": "2TYzYi6Ja5WW2tNfgEabYK51hWwNHTP6XYfVPG3crJsNgNEQMzNDHXYhBbUnfLxuKVBtar19WpDSuYkvXVeA5nbf",
  "key25": "24ZcgujsvGqPR5an79vvA2GeK8LjScFrUTox3p2FrZdWw6BKY1QgAdkW7rzMfWFSYcJs8jCNRWGZ9HwmMmkjMoLn",
  "key26": "5D6CuvRxbyGdzJdnDhVAu3fWJ86kRz7dJPo6SRjtdr5ovz3RsTdtTgmVwyqhVUe3ejaFLZVgdKFAC27haMFYaHQC",
  "key27": "2876kg3AijXxwc4cRC58AjbVLoHRweDg7iQ8NkQtptEFPFwxZun8dNwZjACkGENALasKDvKRZn7RYTc72MfCRmQy"
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
