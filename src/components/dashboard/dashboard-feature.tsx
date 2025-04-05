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
    "3qShsfgFuFW9zWrDd82XtTT4K7R1WH6KdYkn16hmwQ3cUwD3AqgaQzDQsYiavZgpDRZ9iwH7DXXdaPajAzwZPjTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gpzo42t2PTFojSCA1F3v4wNvPA3XeVp1Ta6Es8TNRTMHJFBUpWdYWF23qeKsiKtWwxo78yXkJP1iPM17cthetML",
  "key1": "5gLS3Za7WaYyXBDmxyk5PaQBSHFsGKcEF7hne8KXrx7HTdvC4UukB4ektb69Jsed41TT3grML3QhjCE5ucZUdQtd",
  "key2": "3xGSUkJwVmJESwx9cXNkuGLPub5cqqGP2tUPxEmReS34nZso2a14aMuDBaP6DWadAnc52B3aLkJBN4srCjscCnbE",
  "key3": "43cTgyfFCGYWXZfftBTtHbk2cMLmH6dkBBQe88MukRrh1nbgxTRAAvPwLzKrrQSYenu6jTMcVjwxkGJBjodSd8om",
  "key4": "4mSx9ZKvLfmvUHNNjSAS2bCosZkTgvNdaJQNVheys3TGbDEKVpHBk6oLmHJzaHpMB6B6cAtSZ1SVSxE194QnxhmL",
  "key5": "3noTBQQTHDDusKC8AcB7rBW2bwg45SW944KftsF8zrozxZbrvek3HMNZ2JCDw9PCif29S62BvU6JhH2nmgnqt9NM",
  "key6": "3hmTwrTswhnQHvZQCjxMuBAJeNfaS959vpYr9fN9xvvbZcU6tLc8HRBNmAmbYNCia6smc3inY89N6KW46EagES9Y",
  "key7": "212xZo4HZ4QP7Ze1QZTD2uBUjNRVtKKSHpSm7THjmu2q7GddB4oQxjpuDwRagzs7h9WPadcRCmC74LN56VV2fLzS",
  "key8": "2KmqY9JJUj1gu9VN2nRg7Q8e772Fubrq7EXWp7GmxnDzotb3kjAa5aG6VaLgbrCRvdWKDA5EzbP3JYtXRv2sFSsD",
  "key9": "4PvhkToWqQoeXHvBkeAku1h47MsVd3Swq1EiZjCG7EDVBXyG3zgtw3A72GtoBKHqM8zkn4VN9XBqCPX1PrKSmWtJ",
  "key10": "kfyac4J486KyoKS4Bs1UAVShojT7ZvUkJvGNge4opcjzb32j8TyRCUZ9zLNoVUGxJ1e3kbzjoZWuRxfLwscVrjx",
  "key11": "4GFQrYmU5Z4Gf4QTgkMfh9oTyNRoXJLncC1uVadbmdeN58z9hwvtb57fkSixU2XLNPVMF5r9MBYo7JE2cLmYbhjG",
  "key12": "2ff8oQVaxSEqEDwNyvMcdtL9miB6Q7bnV994LCAhcysbDx7EVT8E7zGekRk4bv5Kb26Vk8VsDAGsrC4No1K2kgX9",
  "key13": "3gHFM7FsBUk1pbEvn3DRkrAUgiCVEcJUJfvoaSeJwe3CYcVSL6rLUnLJVhXxoGqWmPMR8k6fDANa4aVTTZChmLgf",
  "key14": "saYjo7vPsSaWnKVSLbbQfEVyEggEKdwFdAKZC3XYMMeN6B2nXmPbUVayWtfFtMhDr4smCdDZ9BKzCmHhGwVWvqg",
  "key15": "3SdX75AyF76ZVJTkyLaq5uk1REVgTJiXKpUsRnAK59b4bzBpJSCksvJodYE89zsHjBD41q2EuQmnYMYKx8M4UCsP",
  "key16": "4sqsPYCaFSbXkxe5oYmsvCdcw6e7LEAwkExeSPdqoHT4T1UxSDzqNtGx7emBsEgg3y5EociEihrc1sX2LTReWAt2",
  "key17": "4KHyLQWfS4fckYVE9Kr5u2Dcz9JnhURAjckWJ691dXicmYo3HPdEh5rTZw1S895PDZttThGXMHWgQegTviAP7USj",
  "key18": "2VSjmnXKrFkcrGXdo5f1GvarryattVVTUJ9dW9BeCLyeKAzZaGC8EgqPKvHa2wKp8BoSoL3dKYMcSant52uqPxzS",
  "key19": "59E9w8bHKC4k3Bd3TQ18857LCW9k5jouD6oPLzfXVzthn7N7n14pnDgaTdHgFzRdZju485UspwJ8AY8v6tePqmVJ",
  "key20": "3p56GHZs2RBdGuGdPNT3daTUwnXFYUurVSEMYfffmTfqs1D8f9B9u33oBoN4hkGH1uEfSC2NkiQrroctCv8tLGWp",
  "key21": "5ahrnmVtfL7HzizA8HSq7mbhbDqzLiv4XGgH5NKiUcGzQsMjFNQ54FsT6htT3osWHtsvyZ2fBTdk8ASTnwEjYd4H",
  "key22": "5X5D79APZgV73xme9Ks7srvnTUqaHqP7ooT7BiZdy3kwH8PSBAcLAYEY3oKKFPrMNfeXQov1Ev8N1G2jBxGMvye6",
  "key23": "3eA7e5wrPWBz2Kgmhkh3uJtEhZzejTkMoiKFQXPa2QBPAe3hNJ2qbtkKinfHNpYSW5y9gZNeTwVHEwKQ7s1ZeYaa",
  "key24": "4GMQoWBSnJrXkeJCkpbNpDRP54zFDiR9jkaQB1n5HiPGMw2d6w7SXjHQ93iik8auWf4XA4k8GAmdpK9Zc9k3SuFN",
  "key25": "5DAfzbm2aDxupkRDZcT1rtVg35BKx3SAriBazdNGgo5AFkP2teC4XEU5q77TejHuLcQPtQ7jLhB2dicBCxr2fFpc",
  "key26": "56FvhTf9uWHx547ZxmtDwP6Zdh2gby9cnegYJxDoyVLxmQq8yjvHjkR59ybg1fa1DZJtoZ2q5navE7fiYkMA7QV6",
  "key27": "fzLraZbsw4ZbPtjPhb8y1ZRBUPK1HNcVJx4Y8dv5qjoTpzqtdXdH68GHhL6LWAFnDo7awtpRMj5q1xByxWZryh7",
  "key28": "5xwP8FfzA4EGfReJgp8KCrMwGFiXZcxub79muX1QFi5t7nefEaQyNgNFB4RPnh2kYRxXS1eEKHAMGRrgGP3f6mYU",
  "key29": "2vSqCaeRwAF2ecaEEuCdk6jtKQmD5faAurYFgUrUz4CaDTxyqrDBBWik67u4nNXWM6x6MRWtyf3JmwBhvcVkRKqi",
  "key30": "EjixjNsGudxncmaM2X9Dcx6wEzXf9YYo2NcmeKP6fXqgZEHCuFJAbKTorKLh4hFcD4hDJfFFUZpPYvsv1g5P9nZ",
  "key31": "GTn3F3QNhe2yKEE6VV58TD6xyaDg2hmNc1S47J8dAvYiXLq6MmjiyijoMuMPSdWzF5hUNEx1mNhFacpkhByK9nt",
  "key32": "3F53wGjFC9yUhwag6XPvBzHvN3GFeUZi2hPYRMGt88VSXaTnXS5dMfd7HKuJp9mPeoSoFEyiKnJnC1ST1uAWaXUR",
  "key33": "5fvQ2SA6NXhfHtMSTcFzC4HTWkf7yfNCoX3cWY3cEPe39JCRXAztMpqdrJqP2bhK6VuQmkj8J66QGutveB6qLG8t",
  "key34": "AAoSBUuLGvvQQyz145jEhKsGvaeDaYsyvTwgiCivZrah2J2nTbSDsUTBh2gFjsfheh8U9hnBwXagpnwWTs3ogtG",
  "key35": "5fPrynk5zAeMh724YjKHTK37BYpYpGbZSwkG2KLxmViSg45dYhVhmZjA6SuDUMawmLu8skzG8ruaHYpUDKqTXzbd",
  "key36": "56v4NBQaBocTQAA6XbjLq74ZGMC4SXsUZrkbtRRHrbzic9kDXwpMc9ScgK1ZHpZRCLdyLJETEW3RF1BsazoaYGMM",
  "key37": "57r5ZSuq3iyu74fVRysgKZXWqfsppNBAEw19jnb31DvgszStzEwBGtxZzoY3hG7rR6RVWyCrpTz3ftm6qJx33hG5",
  "key38": "5ACyvcU3FpqjCAMaQhMmKuBJXuhH8FEf5MNAkd1NTnZ12Jcb2Lgt3TDTFgPAJ1YLnVrQJsxk42KGPSKc6wrutrC4",
  "key39": "4Gqa3ZSiHb8xiSbEwp55VTdENWnDTczNRiAuRHDij34WybfK6kDGv9PsTqjhUn4wDDFg3vdEe1wSSj3d9f2TTBNN",
  "key40": "4vckuZ8HGxEuhUZSqfmFEXpsamBCGLLGomUzJXzVVjJWxtzEyuK1ri9rUGocDGWzmYJtkGJSk7QVtHTiSVpg5hDa",
  "key41": "3SNUKedry6ydzN7VNm5LjA31py1EvmwGEmMjfYaYm95te6jAJjEDXGXnrQ5YXKXmkD7EUuqLV1JYB5J2eLuLHDbV"
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
