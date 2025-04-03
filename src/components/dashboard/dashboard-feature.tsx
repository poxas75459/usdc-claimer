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
    "5g29w9T7E4hwYN3Th8J6mkPPfJxSrjeWy2xgkWdGc37dQu3t1WLr7geVPtgezqfkYaReJmtMcRQkKSkRUJ4owf3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UTyTh4jkMujK33bMhjw5DSpvJo2idYu7L3zve8hyeKYLfPCmryZySRGZU17Yzsh9U3SjYLDpyMvxeL77AbBpMa",
  "key1": "4PUnjUF3ZQx4P4VKRrmwgtK5Ce53ScvPZgSiEnuCB5o2aTqLmX6jWnXck7QVneLyinyQCSRDbQdJg7YtdfUT9b7y",
  "key2": "3HRYqAX34WoffvjGsWB95hTySQ5ZuwwsNJabejHG4vXuELrkXapPt5LWvBaLpsVS7q8JB1SG1siDL8VzTUVWCKwU",
  "key3": "Q4NQEtofQrfP5krNix72hVMygEJbhPQSeDZdAqcDt5yA7CoeBqQutmG44LvUREYDZWQkMYJurrbNpVoraQzK7Bk",
  "key4": "A1kXHG5iLUQn5dv6Lj7wrySNYrnEAbbRBZC1HqTXKiu6x2ekPzycP43rZS31N7mCXqgjaCY7aKWQAmt6bVTuUft",
  "key5": "2nfjoUG2tN3G42pxQRjjdD4zSshaAq3pZSCRwP8hyqHNQkPU1z1WBjM6MjMn4ULdkZ9c7p616bsPTL4GjruNxWhu",
  "key6": "5tiGuzVyyjVUbwVm7zG3687kjtGLBJJPGSQyJ4sB16M7N1QQCFhnXyuCERasZj3yVVvcnYkPwJQRNxyD3Mfoc7Li",
  "key7": "4hah2tC8ahKLfe6p2RcKp5JFvrAmUYbAfdGX9yFjYmdARZUvmwAmiXWCoZqJzWTyxPtV1PaiZH8vYzTPyJHhqKvF",
  "key8": "5XxfpVZ3oixMcke4616Kc58UNL5KDniiwq3Fs5RpvGxMLXE4Yhz5gdja98XqPLRg2qmV8d8qAS4CCD3AsVp1UPsi",
  "key9": "4CM9BLVYpis2cU8jCwXG4thBKgnHiUaeD6G2bgVG7VHg6hY4qZnPbfkRvhB6XkwcxfnXmK3ykfa3TZxP9TqAfdwR",
  "key10": "Xx6YX6pvYpgAv6CvKGmfpBtrFDGdv1xysSxY7gRnz9Wm9AWutuwDjM2UDSeEkRfM5dDYUHjhoe8Z3rCCtz1e4C2",
  "key11": "4Kew543L6EmoLcrzzoL2BTPdqSuCnUCzVpecmYTnCKeLKEDYh2r2HpeJo1MS4gDrXFCoytVEQKu7a3LqWRWbWv8a",
  "key12": "3y9FGNUbuCiHjba4RyNaxHt9bzyNzqgqio74wCerkoxx2YMFvu2jZwwJR8PFCGY3s9DuxJfE7PxwhCR8fEWtknsr",
  "key13": "4T7zCJHeebx8xkLVmQgfAW9Jy9Yxjktby2ZyBFYmwrb3Pu8FU7NrT3my9jF3AxbaNhEBA9VLmLUSLLwxuFTAeBx9",
  "key14": "2VWLoVML3VFQgzWiDW19zAPH3E2Lyy3XxXW84U6TxtKtJndCS5eLP6asdLUD7i2hQVhDRmPHEz5374dNJ2tNC7yh",
  "key15": "36UrGwBYJR1TMGNGkkn6JpVYNXGgvNbypfhUFTGNaxMVSHk8uwwb7xoFU96NNS4BAYwVU4FYDCUeYveeVHHoW6ra",
  "key16": "2LckyX7Dru8weNEQv8T9gCQCYDuoeY3mkEMb9JNXEVE6ebrHJj3pj6D7rD3xRzbD1a7QBJJFw8FVJfAfexiCA5e1",
  "key17": "5W6d3Q5ReQH6jQBSwXVhBsz33ifYZ3NUJJztGnsdEhW4ahkigHTTrUGuXKLNdVS2mNDmRsf5JUSyihodctd997E1",
  "key18": "4tSrfjuV1ynxdJGb22QyJRoLoE168U4cah6tkvzGhoZUSkQxSySnLZaK3LJiAUsY4vfAsPXwFWUCp1mSEqdrjEjn",
  "key19": "5TuGP3wSS1ftch5gXah1nYgz8Nah9d6e7WYqqGGgGewAr4pYuJVEEoEXcRRGRKkoq7qmDEHcqCA2t1EUYG1Bfy74",
  "key20": "2a1hqnebYJzjUDGCpdqQJt34EfiZwBsqnbuwrRSg4DNmYReoJuuoWvabMnQSHiCs81n4j2TzfdpwttMq5rDWpQQE",
  "key21": "5YyYcHBe9qvKVJqYsveuav6EPmgokUGXJv89DwyBoJt1Hzr95Xs12X9dGnNmmZxXxhnRxB6MLJfphu3DQ8KFnhM",
  "key22": "3vxzdbMVfYgJdKBJP3rm37doH67qXUnEaXDVKE8u82ma6ixUBczz1WdqMDLBgeZwyMxC5ZDKGyR7cdmn3byCbEep",
  "key23": "2ocoA8eoSfBc2zRXt8bzw7x5K8RviHzpBYeDEgNA7rqgRe3BexUKXLhuPSccS5Dz4tLksMrgvdYzqshCsn6FWUVG",
  "key24": "4T71Mk83MCS32EvLX2rjPzLTM8P76T6ZJCmEtFCU97KphENUGZieGe4zFEKNvF7sajYH6hEkYk3SuHwfMutFE6WH",
  "key25": "4jGEErzHJjhQQBbSo3NT2TPNFMhMWiZunTP1iAdqvsyAm3noCayyeZF4TKXsgX566r2KUVhJHzfVR1KGJZMKrcqe",
  "key26": "oUXUuhcYexzsW8LWBwahdHWDYrpiKYtfXrPFf2uF3hJ5Sav86DRSi5EGkedN8vmfGCm9ZKWC2MJKWYgvaiNFjWp",
  "key27": "33tLdDAYEXxujiAeGPKv1koSmLS75xsDjedRJybvCkRS3aunju8QP59a2YqJidSZg9c9ns9ZNrMrTzt8nXb9n5vy",
  "key28": "2tpLxoXQ7jtjrR1c8vW4pBY34e3nZrZnRLpHdtx8AdBSj3vnFAfRqUZbb39wcStAC9styDa3W9sC2KQpCAmZYwkQ",
  "key29": "rShR8tqBUocysaLrP7kZM5EMpNfjMt8pSpr7yP6PsU4AJ6SVQZ6CSJVmFXkCKRbSY3H3XNHtxRbytMAHQDj4vuh",
  "key30": "54UAsdU92BFZZZqbjkpdMmqP7xJHW6en6CYQMFiNQWBbpDRfWZbCduAhVHtGnwQ1y3Y8dyXbQpqeV6ejKC1iCDMY",
  "key31": "5THbRxTw7uujFgyNB5ibEBz51iZGd8iiJcNDr47FEP9fsJWMPtqRVvT7H7wuKawpntRJG6CBqbKoeZ3DzJ42khne",
  "key32": "2cmvjxeFjS2CXqsMH4c7deYUAiTuhubiumkkyrFK7oiZDTaFYuUapEyL4sCVLb5arLMe3CKAiXbXrs1iGtf9o7uh"
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
