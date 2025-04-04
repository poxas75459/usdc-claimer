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
    "4JVFDZWSFHe597mpkqwfKs6PEHgKUjxnScxe2pdukf2AgqZpe9ueJGaSUYhSAnDbx6UDD9zk2ihFXPasHya7kvrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r69yEEQ1avivrKvPJ9dRXYSsvnokZSmYJCiiBJXjX81KwbBnarapNajDRr8FxNfUKcw2hMbX4i6aiHc7HCrV9Uw",
  "key1": "R8EuS5HBhzHJqRVSk4FKkDkoAVRdrCPzN76XxhCjmMBhFQdwR9cgX8WPWQQN3HcoWgJZQRouKfeigWeLxyrsAi6",
  "key2": "4VypuC9e1M8dPxA9ZKQKw3FjdeEaTBbMCrjrGNZ6p5hPzG7NUDn7V1whnsL33fn6dMGbTuCEZ8vbqnK9UXwRVdF2",
  "key3": "2tjdMhWy8RRoo55125ZpqhdcwYHpk6YqEUa3Eqa5dXUM1tV23ToyphYfHUGirgGccLA6mEKLtHxVGrza7yWDz28P",
  "key4": "KRyJYTxUzEBuepjM91okMqqydzLmxRPw67fuTTRxGRyHird7E8Bfd7Dv1UqUGTwSKzLxCKVjCqbVS5gwUwBsBtj",
  "key5": "28LBU94gvBYPgK8xfJds1bqPRAeXP7Ex6gqjtBEQ2TPLYoNoxBzWTSx1vdYfDnJkRfXK5xAX8USTm6Pw3JHnZH84",
  "key6": "3zZrDkKyFASLaKFLryXLP83uYbKQeX1duiyJ4GK77ShQqxh9972AbnjfQsmPiHZP33afJvuRjfi18FEdTkNJmTW3",
  "key7": "3GhLuP9DYrg37iNprmSd7tEWR2sgX8izq5693X1gCmu5yxwLtAoCRiSnRTe14UfQ5ZtHWYdWDGEZ7f1JKrJVPR5q",
  "key8": "an5MbwB7N8EQHDwWXjNW6sz9vB4dNZNdR5wmuDnuNDQQeqw2xFrpW6xnd8hUaPHaPEgJqZjNS9d4J9mziz8XnWX",
  "key9": "26vpTPSckydqT1Q5L9FNuenQ8CgpkzeWAu3fL6uFfGCVmNTJzHakF8Y8v5dzdPqNpJsVKXDM6JCt57Ez5Uh2HqiJ",
  "key10": "5KrWwYWwVUz6ReyGco1roNHEBRBcuHo521wRvHCcv3DH3D9RgdWzi37vst4yXXnYvdZPsFqxMxxZS3bxeDzcbLNN",
  "key11": "2hwa1aViJtFdPoBqjhyjk822SvfWa54qsz3SNoSj9rwD8jgGsZbpfnsZ3X7oVd43C7XSDH7ANrLtrc5wfwt6UEwB",
  "key12": "2E48Lm6wQ2EbvcgKGRBUcCj6qE5BMNmaNnWUhj6zEgw4fc4yojpao47yrGwTPMnCmbvyTBQfEpS1oCdk2iscDo2o",
  "key13": "61WqeYWNFC422JGFKfCRxrQDZMh1HgTwJP8v5YzAFhcHCV6NqNvBzG3ccS4e2huTbg6ju2Kyty48BBnD2jLpy4GE",
  "key14": "41XjLQSjxXf6cmh389FDRdxtSK2uR8AgEJFmA5McpAC8WbLUTUGGCjHX3eTgbv2cJwHuUgy2qhTwJD4SGwnq9TpA",
  "key15": "fUTuvatoFYuGiPuCSrpE1n7kjNqi3bAhbPXZwUGgh2ykjV2bJV4wY1Hu3x6UooH3q8e9hjTLtnqiCnhyRmpj98E",
  "key16": "4HtXX5qXn94AqKbY9F2PL6Wc996grJRcZqk5dSZhG1NgfqkazV8iFxo1diW4J1aJjjdnbRuR8op9zTK5mirHFxPi",
  "key17": "5q3fpmsouKSdB5ur7RhkwEaSUebnmBDZ17e527HQRkJv82FGgKRMWBHAjEoNkKt96oY4oGt51hjCCp8oGaUyd2iZ",
  "key18": "3xs2LobGtuYo3DPWDcFB1ceXkTdSrHNVwj6A43adt8Kss9oBsLzGNbDKSjd5q1FiFRW5Sxpwa3tho4nrFxRdM9Et",
  "key19": "523JZmb4H1FZtYie87CbZQhFgv65YAzfiRqw2335Jzs8XLbmd3xPRtRzpAeZthFaWX8cWC9VYNnT9C4Uh9zCEAP2",
  "key20": "3tGFdruEggVvDtxKKHMDkVLcDKDM3pN9AQo2NYqFkLCxr2SzqcmCtt3RFrZpCyjcQxhnrZg26DcBY2EfYWs1JUxS",
  "key21": "k9y22v3VduD3Qc51YcSym1tVJsUS2n1pNPUyQbBZrfLPnWfnemEdUAk8Bqk7AMeHhUmHN9NkTbcgWm77VXht91A",
  "key22": "2dduXpjSSx9Y7isj9JbcDmj2q2myAjYSYsiz4o4qVq8h4MtMy97fbNPsUMfbbyNyVq5NJXkju8F1KW8hBMzRHQqp",
  "key23": "57ifsEXoBNrb64PzExirTLUp3mCRxvmkwWByXgxGkLo5eUHQ4auamWU5gayX8sQaRd7ScGWuBAYn1LJwzLZ6tayk",
  "key24": "3JjtPYpuBE43C5Pscr6YnqnsPWGjUpPHR2vKpp8J6mmtRzFhJYgbpAqej8qoM84xEf8bfNvqawZgjw6eYA1i7TE6",
  "key25": "2AWK3NVdm2My5W9LWq5MvcveUvCVoc3cDhaWfJ5no4JsZG4oDYvoVHSXSWsfdr39uDa5zJ9vMbgZeFhrvJvXVgwk",
  "key26": "64SrPugUPtX3Au6EK8mhw7wRFKWPqQRVovUmTTFXWxWXWLQpEAmdL14ECvbPwSwCA1855Lh6n7hWtG16UMsaCT6m",
  "key27": "5e9BdgqabHyLSedDiVRDpeQXL2L7Mx6uUPyrrxCcckQY6e9S62B31ftsz5oXqjMTAu6o9n29fPYLnZAhpjaRe3A",
  "key28": "56PiWYDrBjzrkx3LQJkUjKbLdhKz62fT6ZWjWwCswK4qTUTwFQR8AFXSyJaZTtdTXH2o7aqu6ccy7ju1nj9BFcb2",
  "key29": "4HJtMJwnavQKgp28HyGFV2C9JusBUHvgtQMSb26ANH5u9xoqXZv5kPZT11cKfuiCTZhcXULr5kC57bAMhtFhR8bs",
  "key30": "5qmx5QBaQaQsKDGTYrJTqFPGftcT7F6nyHSv4ckzr9jKxyFpyCHpHNg6YRjjzikYvW19txJ2cXddeciwje73KbNp",
  "key31": "5tHyhBW9QgjUqY5vxJL9m75HaXhA1xYMPa9hwgEXmooiMw7nazCUpnkUzQj45cZFdkGNjtRgcJp4dnapWNgvSH17",
  "key32": "rcagwCyujs3Qtj8AUFuJpxHAcduPfMQwCo1aoyqnduNPFicSdTjfpXoSb7dtXR3g1tHZHcBWpMaaNsVWGbPpBbj",
  "key33": "3nwAPy7GZYXiVuufG12jpoWDafuAfeRyGJxhVKtDpvn89amnfDkVWihfZABJmmbSCj7aLk8TEZbFhkQYeVMfHD1f",
  "key34": "GVQmYX3PBaH1kTEeg67cbDdZPQv9s1RkXU9jXP4b6EjvF6SQcLw9JFGosRizCsC5mbnF45wbnBirDi8eRRW336g",
  "key35": "4ZV3rzziWQeepcdjWRmi8snvNArtTvMjrnerheXLNRUNjDdgkctpaYJvh2e7kqhHmfddH1A1ueuaJVruzxTdkvLi",
  "key36": "chWUBaSuy8UHePt7qwUdYcVuESMRzTySNuWynEiFjXjTcZbNZhbwSZ8q3sCZG9US5MX4kaQff7EaBnpoPDMfDgJ",
  "key37": "5fWFVnHDw1HEv2HTeUPdQQz9ZsnCrrkiqZDACPLi1exTmKdeADyHQMJqNm3oXUsZquDV6dvko6fNE8Y8TdHJSKNW",
  "key38": "38eVHpso3S2KQskMg5fKzikPez99Qv7nqLLXrVxDHVtKQEDtAU6G3XDD3akymPogCojcEpeZLnRgzp4UJhdBxmDf",
  "key39": "3JndFzturbpzGbddcWeWuerTNFVKPBXDpK7nP61zsUBhwftXYs3HMT69pBsSVQPcJqHLrQo1wxsKBbPGqWmqmQKT",
  "key40": "2jXGZGPANB7kqzPhFtMJyecpHZ2a2pXkqhk6MYURyzUFaDAzQbY4mhkkxDnqQf6SjXozQndCAYzXmumoGnytBt3",
  "key41": "sW4UVPcoq25Vk8pXGhnX7WbfWpuGS1sjX153VESbDAP9uoxnztVkkM7upU1CVoUSyYdBfvak6pbW9zj3FdHCqW8",
  "key42": "4Msstc92148jqbQiiaM14AYmMZL2yaHJeNjVyf5HY59DTir8XiudKH8AzwHeDzJsAuZq9EsASFums9q9g1XmGY17",
  "key43": "2JacgZW8sDnYmTTL9rFk22KSx5a1iCsnpHHBgsgJ8ifxwU211pyBDQWjaEdEdUbau6C6uEZw4rLPK25dAmJi4czo"
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
