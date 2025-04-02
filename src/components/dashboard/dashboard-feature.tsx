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
    "z6gsXG8YQp82Drjtsy782xX9FfkcJ74NqDqTFyfxw57vYpfUKdX1yrHn4ZLgxuV2JoB7oDkXQH3MATUmXzMbSET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyPRvK3ZYwcCBP9pUdNDGetWSP2AAkjzKYhUR8oPX9W6XCn1JgryK2SsbQToqx2LnuXPrzv4cqF5pt44shua1Kz",
  "key1": "3WD18iPwkMN5wvdMtu5diNJB9DFpoFKzBbRTAzNjQUUPxcsYAL5Ei1qugnmrBUnFgyXYGvWX5eXWE9DqFLkrb3P3",
  "key2": "3j3eW56yyAsQoQGxUkJDjBwboYiBSkQPXkfwkZJ3riG1HpYWADumhrX8cLnpoYKXdztRj2YMSmK3sqfQ3TsJbbVM",
  "key3": "5P6q6Wa2e46HMoqiYk7ryYZZxSNaHJU1jcmPhyuPZ26cywb6gSX6r7ZoWFn5c7GGgGKDoVfS8zdjhcXNiDenMGY1",
  "key4": "4vVngJh3c9hcHxSKyJqvf1ahGEJ4eLvCpBqtQGaaPdhaffiMTvLabRzBK5Zrd3RvKzbibnpFLGUv8R43A9wC9zYG",
  "key5": "56nrKt316753HS6eXATyVyeWVxgWX5gimMKB2MrF6RcQXYhB8vBSASwsV2wrmBeTTK5cuhTdn88qKkM68hUNCk7h",
  "key6": "26kKg4owa5mdorV4naVrEw3h1S8vDnDef94BBm8ZfvjyvjZEgwce77fNYkw8D4qyNEzi2mHbDmZ1TiYfpgaYRXdP",
  "key7": "3kMwGfqmJ2e9Yv49TMdmx29wJVMaEeVWKHJMvF6C7LAWraCz7CLKrdjGTXqMqgessixWwn2LrKmAvofRywmYvDNT",
  "key8": "5y4ypdAMecFXifDFSgYaCNNiiUQdNGquGa3PQRb7rBfNEHd8Re63GSC8ts15sck7FpYio3x7S8VpigmwJZtAkoTx",
  "key9": "2uTTi6sje8H4j5zH6aNvBJqSHoVJpmYuGDtopjDK5bdfXDN3caownKLhjophFN4pRBnysw1F12u29GcLzsPzAX8K",
  "key10": "39D9ooDHGmkZy6gv75LfEr78fnpFiQeWhXbwNFzRc9s8b23JFTcpWmXSkueDKrLN3M7hPjgNyM6bGHeYRHwZC6qy",
  "key11": "8KnVDUJuv4L1aapbccgobiCHaLu6JAEC19dQ2AjvqXqtHZJthQ4dvVsDK15HQ5cUpggYqmWbwakib9JUbMAJqyc",
  "key12": "2Vd8f6Gb4CpAoDdWQhdh5cATkBcJ5gQbT2C5eeozqqc5WCRWAXkrf1AW6oZgCdYi4cb7hgVDaNxwiSHhi8q2AgmZ",
  "key13": "5GuRwB5Ej87RFYGfRRNFsYSxwKkcFPWBFAb6CuG3FAZr2QbR4nrMWdKePga37csk3SS7WYjdvcMh36NxUBdiKLFr",
  "key14": "3xFznYsavikVdfjDo1JXD8cDck3eB7XuKAhFnFx2ckzPxJs1sKk2vTocsLNHMjkqYV549wJ45sUDn9UAYW4NiH6G",
  "key15": "5FFTQYN3Khw6Kmjv8gtTJnuKSC1p4mqsXPthsQ5Wom9zfrWoJXGLk6YwipsC6HKFA2LmiG6GGYD5AThNXe4gDr5L",
  "key16": "2Pr2ZTMtr5myZtcWieUeEJWtDzTaEcMWT5LmgSHMxRaLuKNMSjUZoCCG25Hr8gX35wmTXX5ww46h3pHqZYw9E9bN",
  "key17": "BxYtJjs85tAunFDY9HmLciNqdukA1E3884KWy6URoYrch6p39vDdv48Hd9Ds7J6x9vxKBdAQuVqQ5xS9rkYwY3L",
  "key18": "2FhY4ssdqtawjn7rJY3YSASkx1vDNriHkJkW4HbakEUa9XEmgtRZbi5rhjET8iR6LQu14u7aa6SFCuqbwuJGF5aD",
  "key19": "522DbKTUAe8EJxHJnuZ7RvXmQvVNBbCTowxe9xKVyjFQgM6uSqDxVeKRnWCSoYD67TXTqKWUCeenqkFZxoEXV5hM",
  "key20": "5WAfQ3We7DVMefJbdpmJUtP7UTQKvVpgg5iyGH6PUCrqY7pugYmt1NMeHpKSzeX56UZqpvapMmmp4iAw9GncAtV7",
  "key21": "3XQqRDsA6QbBbZxyx6iX7d1bwLDkraEVhWUPgHMxLZQbuvQe8nw82sbXZnHqnSVP986UAPAzwsCAAKRq9apMDTWY",
  "key22": "281gLptucHJkoFCsTWHfnwUte7r4Q8dfodMsxk3758nE3yn1prqomxXuQJv3Lxws7xSNe4fiFgMVeZi1yybEdyhn",
  "key23": "5y4QcR9n5DvBiCBXRioZQcWwy4imTfdaYdtGGTkNfEhaeoQgJjwnABU4wcwAUoVLx9RByekRfwvzqZrGfeem9FG7",
  "key24": "gMPDN1S8RFFB77kMsi6BwwZVt7S1C5NN2GhXcjBseSQ8DHXEHCpHStLGhYhyE9FnjEJUW8kBEV4bPjVAxpwM4ff",
  "key25": "64ujjJXJ7kFW1AExYvGzLEHTJuFxxFZJvsfeTr9zwULpNwVS7BMhsNEM2V8Ln1N6UYtzx8KKdFAXRqhMJetSnjVj",
  "key26": "eX4wjhkRBGQYvtmqXDYNGAStbYpejyf7h4Ph4DtuyGvuVaJpa2C2LpoBLwgSoYXZPy3chk1Hm8bj6o3EGbsSQ3x",
  "key27": "nkFoeXbktHaAuz8J6kHx5mEyWiUAqvERg39AEUcPkkbuGu3Kejnkf7eJSrYBb67K4oGceqGA1JA722TL5UccQEP",
  "key28": "3gsKUccdfahDq5NxcWSaiuUYnDa2Qy2V672ha2bQDvU2ysHJSQGouVqXTtxtLcAfRBfieGp4gq6rLR2Vj8f6M3Gq",
  "key29": "5oNyGMNbdUMeWZnoyBj9DrTNuLfhtFsyZWd5zv8534YWHEMYPVEsQv1xKJynGczr1g4eK9KyoSSVV3nMRMsAjpJ8",
  "key30": "5WEjaJvJBXZxCPjtyghc6uM4d3Lm6Sr31NQ6YGQGdZY8kWX67RyEswSmZ1LkrgEhJYP2HBaDMD1p69jxVax31JQL",
  "key31": "2pSfnhsjo66mpH8nhGkQtH5W8VSeNQmgpi7U9uxURyZRHSDvJixdS7xpyvRLsh4Hzz82ZTfCXbd1FRWHMX5pcJYP",
  "key32": "21K7VuSyvLyusnrPcDS8xGkJPSHy7UeurNRJYEyoBWk1Q8T6m1tcZ1x5tH4cZ8saNVAjUG4ZbEcSK3PevEbrPJst",
  "key33": "4HeWhjEhFQYCz2KLiStMF9rHpzSmvqYwbaAcHJEzuwZyw5sx6seSMnwHLag32o3XpukhrYEBsa1tT39CeuuRSzfX",
  "key34": "vU8FpcxZn8PZJdykUsaWuJfpiXXWGgZfPpHs6FSq9S2mH7jjJE2CMjqigF75nP7pShoX3bZsSjjt1BdAj6G7veM",
  "key35": "5J3mzc5HHFzysRmzWrRUzMpDMujjh5sBhonYN4KcSRzsx8qdyWMcUKPXJX579k9g59aPFkCqs8sL9ZU15FkgA335",
  "key36": "2mGkhLg8sZ8DrxeGLBry9wa8GYUy1ZksMUVTSYVdgEVQDhk61y83HPptQ9zoDsMBeLREdVJTu1p48L6baTZ5T4U7",
  "key37": "4cKLQQJKmDrHYdZ8rcXPuhehLZoDBjn3SADT4CTPMerjAn7SgRPe9GhKyoLoKMY2fSEeB6srEVP7tk8rqe9X5uVG",
  "key38": "CNKeH56e9f5mF1vWUAUaysWwe5G1d6TDNEp1iEBwGx4RMAdwWfDKPA3btZatbqTdZBhZWzLVai1UsAZZGTBfRRr"
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
