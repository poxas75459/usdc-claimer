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
    "2ohDY3krDQSTFcF83rmveKH4vDUspts13qFVWjUoEqX51SREqtdr9cZqnXe9fxntS1VUBvEPCUU4LmuSyDqtz5iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "524v4Pmf6n9ooMdW33TYqjeNZnQ5LbQnuXh4N337ovnSAkMgz2HoxkHg4tygUpNU7DEbW97JMRBL9meEj4FRQrMF",
  "key1": "2Ns6VtjAD4iqYg2rXD7YZ4zPm3YzUcNKd7nYrMu68zDByQ62d6j32mJG4SoApreNoh4r2kXSRVWtADFmNy9LJbnJ",
  "key2": "4TXYaiYtPdhbkEE25M6rfnWvrNHeqipp989v6xbxpyduLsFD22qkdS6s8qampJukHQBrsVSRuXU9cZmyGSvmpkQd",
  "key3": "4JeonDw9rqUFsCmcAEKDH7c5wJJuWA9FLjS9feFPt9dwBkSNBn6cRA7fTjYstgLxanSdoR53eqpATGqFuKuoS1oD",
  "key4": "5yhVecpwZVzW39Ju7RAMndWG5qT1wytPMrJyU5oH7xyQEDdYpKoujYhW1Rt6Upei8mEPa8z8h6AbZji8gLKo7J5w",
  "key5": "3aYT626PvdTS4Wubn2yCpzPTykwQHJJywpXvZ8QDgHCisW1LLfsgeHQyhjbvYFXVMZqFWUARR884pLjVdB8EFu9e",
  "key6": "4M3g5CVAeWgZRUjBEY46zz1AY7iTXjE2imqGVAv3GWP7kMXB2fBngApN6YVpFFNN27Tyc2yQ7z8sF18jgFiffxTj",
  "key7": "5ePaw7cY2yHnXkDP5MCwTTHeJovdH5pyA6eUNDLkGmcs8Tmh63FK7wrLxCuVsdSxRSPSTUHWv7q96i64X9JusBgo",
  "key8": "3kgAZvQUDS8abdrfsnyRqG64Ykrp5vqHnniKkRh62H5T5oAcb9nc1KZHkMn4gFvXwtzDMtSYDgLtEMo7BHFjbNsW",
  "key9": "38XCd2GuXDBHLRQ2p4znwoyCXbAS5And9MaGEkmNaermUFZSmfwekee9UBp7nTPcHEWLHpNU1kYZMrD3SCWvWy2v",
  "key10": "3VH4SWu9NdZAqyvLxnVCzP8eUYDBPqNUJDuPgxWmuvU7G78td1gfUPWw6YDoA2BaxaVvmz12RET3WXA2VRpXT59S",
  "key11": "3uUmcAJHym6Lq386rmQ6Me1tWJhuiZRtApwUJWptQ4CcwMiHshTkZJYXZW9R8NscWsSAyiPH3u9kPyeWsQLsXbB4",
  "key12": "4L6PQP62XFAcktKXwzaJARnZbUURe1iwedviqrJCPu2HVuoMmbGtr8dgJUEHNtaHpzKP7keVHhnPSH5VkSu52oLp",
  "key13": "4bxKLwdfFVCL7sEA99qLWmsq6JcP5wVhMrHKWSHdqhDt7Edtgn7WKvZzU8q7zGYSsoP4zFdQbJRm9Cs2TDQS6SjZ",
  "key14": "2mzVe45EgNJJexUTqwawyqqhPLADEma8ZVFhLMiiCAYzfJYm2YR3RHkdxpJygCfUAjbkpYqHfnSbCmhXNciwyzkh",
  "key15": "pN3hxrxvfsR1xL7xecJs5mHVff5Gv6CtK4qJCxFMhME8NBZkFFVPDozVhf8myZgyvUERmpPi4KBhnLXkqkZTvqm",
  "key16": "3cM5E91wvy49tYHFq97A8Lf1Dez84qYFmHAtjXxiwAnLhgkPHZzwJK3Kyet2UEikPxVcdme4SqtuXYdz2KwhhwS1",
  "key17": "21M698co6Hi7YK564kUZcTobWZe2n7JELKswx48eAtrdLautpsJJTbyJ31zk1xSs3HpuHuiqZsvqLeXpVBYZgd6y",
  "key18": "21Kjf4Dj5RDU9z7Ueg15BegoTUyYagCNqp2CH2Ythb7vqpwPNg6jeySiqMjo1SsKZzMPE2REfH22wmYdELDB95Nd",
  "key19": "2MnEMV1ou6ipXwXsm5CAhmb343GUn1u7oEBX9NQBMA7DpExZRptE1q9hmySRBGn8gK7grzGtrJEq8HwfsQdbxrGJ",
  "key20": "4K6u9g5UNjpmndmdkyjubcL8DZMwtJRhFbaxEEpDpx7R8g8mgAsr2m92pCURGsn1WsX8JB7wFPtfkW4nuyZyR3Rn",
  "key21": "2Sr9rQF4UQimXdQk8V4dZmAovxRP3fxa7RSWXXn4r4UTE7gQz3DdWo8Bev5oQVa9zUh5Uy91yaMG2q1DzvTpwjgC",
  "key22": "grYxGj6tckZMt62AqdE4B9HTRQykvC7MsSeyaEF3VAC6v3Qs3syAoGULUARz4afLhMuRsdYbKaxxHNEJqbHCFL4",
  "key23": "3XDYzfAxfE71Ak6zCWzjuGLfv24v1Py8VZyWZ7sUhZZFb9yFrrrmimwZdNpLQciVxFnySYX67hBvKnkdK9mdDFRd",
  "key24": "65emdQ4iZge9bhrz5wsgoU5buJBipN81aLXKujfugdNYASgbZiaiCxqv6XZUJo2sAym49uQz3ebwYgPc58pzygoW",
  "key25": "3KRtwaAqo8BMTRjxecVEwi9UaqcbcvQ5uoQrymLwH5WbCsFDaVM7nBSeXjWwddCMTujn8UZtwAHVF9pn6CZ9dsvx",
  "key26": "4ZfeZBq6XJTTcVYwQnZZ2kx3xAgj7DEjnpZiwwZAEBxsx5biCWNPnVAwxf5G1rVXHvXqtuPDSRXoeuwiSnb52DaN",
  "key27": "5su3e3g1UaLC3wFq62qVtx3FiqUaCDrbs8dEAPJFLWHeJEpCyEMfR47pkWzPuMXmiFzFZJPUCAz7FHMbSUHTsZuc",
  "key28": "4as6LXvxGxWqTNxRuLTuaZPQ6Mwpi2X1qgv9D5WkCU2PAVKW431ZJQ3C8uwbLaJpjKyQEDntahWTQWGdh7FKosP5",
  "key29": "w3LM6RnFhzRsHJ2DBXG89NpMr7qpCrTGN9VVwgtj1dMusjxDjkfAS17K6ZJFJZV5jtMg4E2TF6iz9AVH5Hwo1WK",
  "key30": "35DtcMvHPn4PqR3HVp7VuAFCacEb5CGiDSY3KbA53b8FvT75CiGvbbz7tyWSMwq6mPH777icAyDtGAPP4F4oLw2x",
  "key31": "5fe4KBYwt34TT9cXGgbFrLtKfg8dkaKPAF7FtwwfH4WwTKKoTdgphMUHk9etVMhn6SdzS7Tm6EFqHbW6nF2qN5PN",
  "key32": "58oaxLgzB1qqrdff1syFt3Xw28HuPJnStYMBxW3xy3JE27XMvHYgnSxYAVri2Fuk8FhkJHqka5xReToB5xKWc5GZ",
  "key33": "3amr9WeVBEw4pFkF5sugcFiWh1AdMQWpZ8CvcNdsF3A6cVUXroxz4xY4j7MmVNS2EgWchb4XQ1onPDUT4H4MjEsj",
  "key34": "2AkRaNCsXmSNru5TUznaXHiihCNqspriStNbcAt67x24QW6CWUfkuJzMuKSJig3XM6GYjnpb1BkCYKtuSb4qpaQm",
  "key35": "2qq95Etoz6asf1rB8MdqdJQYRGPTAJi9N2D2K57pBJ4zJm2M1UxsMHnk3PtF48DywxZkugap27hMaXn3aK6LFfv5",
  "key36": "5aBNHRDiApcWYvnqDLUqZB8mMwb8ZXdxjGyVkd7SR5UVJEiKZK4uZFo9SkjVeugybwkHevnT1tRc958vu5EQfBBd",
  "key37": "4EQEuaMBv5PwzTkBKHgbqaxjd83jSnskq636iQo4r6L7nEQ5GNfK5BhKWd5dmtcqNr2XyP2ApiQFqHeySegLZcTd"
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
