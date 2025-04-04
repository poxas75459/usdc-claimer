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
    "24md5RxKMb9ALMP75EZiNa1LjLJ4286X2qvDYEtdvDA1ea9q2jMqozFXcHZUVZeyoXDtAEtdfkeCQoX9t2es5bfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXqdEeQuYkRPWosqF8ioNfU6uqKTTgg2DvYVLiTUqdHz5sXbtWC75Mm2EnkVtkmzzRFwNvQJeSgMevjr47ZBcnb",
  "key1": "4BcQZpAf1hrcmPd9J82Ney8QHMbj8yohGWtrA8fMqZ7udSNEtp8ksMAb7SJ4M5AfuW3hqWqNJRYN46YUp4h7Mqd7",
  "key2": "a6rfFM57xfyWJeWNH3JgbFpxACYdDB5ToL21QuMCXMzM7cZ83hMhmwBU62wUt1dBWugyQw8wdXZuHfpj1dhhtXp",
  "key3": "5KXeSMDjDg4KaeWPVFPYPgeFMAwor6B9YWtNVhaxKFxjkTBayM3z1HCTV6ijfJGYWUHgJwMHXFytegBd7xUTwLi8",
  "key4": "5Q7WVbijddwSpt6hv6y7o6dFhpJHfPMkebUusbazSKk1yyu9kyubUWKCcHwE5XS25fecmECmPxkQu1dhBAbVQgns",
  "key5": "21jDCV9Zs9erfgzz7DRCEVSvMGpCQSfsQ5yJQsrtSHafrxKwMVasr6aG99eTz535ZTunxUWHY6Tmt6dYj6M3GHJv",
  "key6": "EJEWmGo1Jir4GgXGW516rMM4X84JpsM8WhXAeTrcZC5j6Rx6RHrMsLdQkchPbFhjgT3dfaz6mjpEvXggyoXPrgg",
  "key7": "qPwiRXuv9MJGXKV4wbE6ujd7hWf1ztrQDKZreLYMr23ViMBdko1Luucwuz9VeUie1wtHBWa3TQ7JDDu4tPSzfGS",
  "key8": "68JPpMzPRgFJxiPBJ8PFDQnGYaKniYdxZBVV1fcHWTFcwErLTEzCZTCrQyTBdk66695ff9f27PhXw1uRH1XMphk",
  "key9": "336SCxN8ZzLnpt4nEzYR61cfdms8VQWtBSpNq1Gjoa3SXAx7REpKToRxfrW1xkwBVdq1hzJKqegPc8bNzM9vNEyg",
  "key10": "ftYCQLSusoLNrJ7rfosmRJqKRXJxq6L7CFztCwXnkXbe7ZAVfUf5NLAaGY6k3bhpeM8Fp4J49ACTiMQLLdZFFuF",
  "key11": "5mESrk215uzjUWBPPuZZw17g8ZPANwM8PDVgSmT8fkj4NmFicmx2E9u8rJCGC3Bd4SPFaUE4xg4gbnmBJXzXRos8",
  "key12": "Ji7D2NZD7JAUkZUY5kpDfEvJrB1ctmfMj7Wkc1vCX5aCrD5Nsb6bxkzwuV5VgjWEBiQrDa4QHKscYYZRCjzxrB5",
  "key13": "wzuAaUYWZTfZe1xyWkoTXCpWx8qKFfEKr78mX8xFYnvg8ajch4hT3RPwRRceHYwTCZXw6uA5KF59HHw2r7s9iuc",
  "key14": "47HMGuJdemAPdEcCziybZnbffHVNLdPqLUgXC8iiiJ53tUaMRmLYHTtx63UXEer3tXdN3JanfSftwgSrUExm893q",
  "key15": "4jA4M8JLoUKZwdk9ACyvMt3R8dqD7PzvNhnHvWp9FXvi1RkLzUu1Zw76TCi4knkocLwgoAabZ8KK9LcXSBvohv2F",
  "key16": "4ftYnCeNXTbos51LzAxDnQEU5LRMt1bQKitA2zmaoAccFWVNqUMFtEhsUXcKJFC67hmSQpyA6DcxedHgDjjmi3k6",
  "key17": "4M49dNFbU1mdkKpjVLcnE7E4mWNr7ubB1HTHy2PQywmUxeC6AQU2oS6czrptCN19nunXd7ETXxSBx4vMMZCxBquW",
  "key18": "4QobRWmGqv9XLJo3hViJenUoLJM7m39SJcRaFmvfWRaFa3AVJ6w66WWvsTtXG3BeLMJeRZ88iEXoTb6hNQ7zoCvH",
  "key19": "PJDDHLiFq4KgNAxH3Esnk93TNLDLgH38V6K2Zp8YEdd5aGp1dQsZGqkPfHRhMh3wxWGB5xgV6M8KGdG8ZPL3nqR",
  "key20": "2BqHvHYqXdYWrcjSeSF15eLSZSsBduE19VC6c68AkbyET4DqwwF2TnZiUdd9kSQtGtmccr8uyv7c2zByrnEp9DLc",
  "key21": "5SDKgM5XMPXXhxfMQT4V3qHndfaHCtmKy4b4Fa1Sv9Ydzr8Hk6pr53rAoBjFs1XDtSEyGcTPyDDPknoeNTqg7e2Y",
  "key22": "3Mp7cTMgmV5FKnyNFQv52gG3vfZp9oUdUKeVJbP3X8DpHBkGvn3o4jAf83JLe46Zj2G3c8KM1kV7stw19ta1L8SY",
  "key23": "2yTewsn4CcaAYsfSjyjsaDKBbyDxV5ZAsT2vmtq9uiXGqkZfa1CJ2ohbaqm2knC6XCt3JR83wyrKt6MNvucgAN2p",
  "key24": "4o7HhjQtV5dzPCdWEzucho7dfW8MPBBVhaYrsCmHD7pzTPBTViGyUCN3RpJUFaCUzyNCYnfudW4mXZ1nGbQ1ipha",
  "key25": "625paRnGox1exuEVBXLUUUm4pivWqNiVheULEjsrh4HAXYqC6R9czmiYwDcSn5DhqY7b78iHwNMxNfxQgCZfNC2w",
  "key26": "4UchorYwswt5kV8Tp8AQFK3WvUFKKgjrhP3pRGScuuHfuNdMb5W56EuAZL6qcqteFFt2JdxKBBbvQenWdroGj9W5",
  "key27": "2KNuBvs2zR1qqKgxTJVKsjT7tY2gdd5EycXabC61fgRgh3HggpQrJcMEgEjK4eKdRpCJfKVs5ha7uR8k69iHCqAr",
  "key28": "cLMxVCtNzyYLRbGbUpn525YGtQDGLCGoRLqSNMSmf3Vi6zcsP6MyStYBCnz41Jvt8z4hXRRopwx86wE6LYxqcRk",
  "key29": "2Q16RKnuLEBQSNbR8h643MnN6DAXzJeiTpULPNfFn9bzg7ptSf1gJ8vMQsyERMShVozBCEhPRp1J96oATWAstDDv"
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
