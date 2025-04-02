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
    "5h1X3dPc5qB5Ncrxv433ERjPL5GNfEt3a6kWSQwAxCk872fKb6rEYw7njsUx1EaaW35FEdEo8D7jz95Egzmh91Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "535tL7nsiGDpbYyvJah55wH52asNEY4tcF46yhS8z6Rp4ncq7DRULUmEMAnUyKDw8TDLgBjkXGDYtucm8SEv64m",
  "key1": "3fEiuHgdrieW4TNKrzW7T7qZsjGgq8T8yUmjJ58M1qCWAdqP56rkR66eadEs5XXXQEh6bsPFzJfPeL2pAsvWKNCd",
  "key2": "2nZR2LQn5hkNACxDzYz8ipbMF8rDyqaVMSJBSNzD2Tkcw2z5cYETPcmbpKtKHx9FSpw9oZbSJWsG7HDkPTn8UtWz",
  "key3": "395bU6G1HMK5MfbHGLcbFgvW7iuBLz2Fgy1iHQ2bnAotxBy3eDtUEvdJGXspfFtVYnnRDAiQ9voyefDy5MSoX6Rv",
  "key4": "pCwqMcEkD2YzC1S7JnFBGe9nShTCeyjR9HQo3gUUiZDLURDVvAokfNmKUaeifikZHdY4GJw3BvRL9SH9eLF6Bry",
  "key5": "2DAhqKYNQgvWhdfNaAywpQ7cKLtv3hrNav6qc2pSPaxxpvtQ5kCnhF468siWVQUegATqKyUahrmHgH1wFC4tTxPq",
  "key6": "47yU4VBYun1bEzsEFG5JTUuu8rSJshDX2sfuqweSfakU8Xw1yBuMoAnHUBKkYP3yMgp7y3brj4JcZ2bPLzEC8Ew2",
  "key7": "5Z3mf6tnr1tBMymLCM3dM7MCBA9QQN4zTzGPWXiKqFxgmhpqEDxwhRVWyiCFQse1PhiUwjNZkkuw3GPgDju39ZYD",
  "key8": "65kfqCyWJLANuNm6tuQ4Hs5PfBh5RMSDEAWgYMmvb5CwW52vtasYZ5b8RVEJfvKFiEJxPHj5iJK8FL3ChLTZBs9R",
  "key9": "fEHhfZyn8gX7qBt5SgqwG2bsc3zAtXpDi5nu9vLfBfbNqXedk8xNHffwuM3E6JQ4ZGZWBDZbRrpF6E6ggW86Kbu",
  "key10": "37WWKuBZrJ1DHHagE8Dy6CGiBTTPRcfCeXFJWGCGkXHYV3XCSwmD75LbpqJ6cpGzMG8nVmMLq75bDV1qm6pvnEfL",
  "key11": "44CN1URczsC5sQeiBq6NqSoKo88RDc3hw8cB1Vx9GfpWJ2aeQShCFx9U5hKAJghSkGD2oWeCZyzW1JZGphdN3TZW",
  "key12": "5KiQJPh4EjcPbXMngrWEzEQryfgUmvj9KYCcLVRqGuuRM6zuDVPHQTACPiTH4U6LxpM8ubHVxqMNtwN2k888YLW6",
  "key13": "4cV6opd9FPeuBpeFHaV5CkEavRFBsKa8STehgysecFRsWoe8AH2Q3rHJqHox38rZi37u193D1ENjuuZaTebqpvBh",
  "key14": "3MDjGR4zU7ja3CRboDWexcZ4RpeFGJBRryjLacWRL9MSA2y2ewAPB5qMPyH1B9vnm3NeW6dnMQyeVVhnMahZVQ3j",
  "key15": "3DrV99ztd3KSAPNcdPuubu5dAEYS2Qsjs5tSqpuV2LZkPYn4FJU3NrUATugfqUcaegqoTyZ95uky5XCZTU5CdbNa",
  "key16": "2WQzJ4YdVe3Y31dWqWMdeALGJzzwDrRY52wCuEaLWVKzxmmiMzBUfZRsCqwQHg7eFGhmkavVASQwdmcg6vFCUG7b",
  "key17": "2neTrovtVXwXojKHFVowEXHeeBNN5DHmq22CwLXE6xd4Nxa5UcuobseRFQJfYV9hebVjQ86RoBtSQQuyoh3YED1j",
  "key18": "9b1TdT2iKfxoM9N8GT6wgKzd1vcXLz4uk5MMmWhGWkTVKoTKHXfKGrrBhmfpBwtdS6ioubRpa8yjQWqH5v2qnNy",
  "key19": "93ntTZfXhz7QoQBJtP2YHpbJcMokm5K98yWykAdWNxbjqXutFEkJLM3MpuMuzkTQNrUUwJNWg4ShDN8AMyDackR",
  "key20": "4espTJGtLMEWMxGrCsZzvkeUaBRWKvBcXc1WqoYcJq5BLk9U2vxWHZk5HtT9rz6RnSdfQ72fiCPaPLiMBc2dghT9",
  "key21": "3112hRQpagQBoDHj3RzjmpP9WwX81sjUWnvULW8chCEmssfZ3TLrHT2Ta436qqvHLTh8VXVa7wgL1ZFusvcy4bHn",
  "key22": "2NAAZHPg9cix5xLk6NfiVxHutxrh958E3qKnvhcNGiPDQargsQ1s9UZ5KTaUnW4fy5nfYthtc1b8wEwFsvqs3WRc",
  "key23": "4dznmDeQbRr3XfkqXGtVdLAX5VDHdWuN2pCAn6f7KpzhPVy3rGCZMEBHZZ3szACL5SXo3LNFr3fvUY1mK2vgMnTZ",
  "key24": "2dwr1Bkvg6nMpREmfEgT8R3sEwMNFyziQmsQZ5CPN3xjMrKHVBTDsxtTW4Fo6CdW9HRuLHm6AWsmEcBAsQM98KSh",
  "key25": "35y5XqpUj1o3ADZXfDWzwpXiEmsDYKrpDFVztp8nD6aTVAkKJRMUwnsPgNt14Hs46WB4EKcNjsnz6XePNZPBcJYr",
  "key26": "5zHVDFyYSqvR9H1GAsE29351eoqYmojeea3Ggd3gcfAnctBwF4CAsSw7dSEr5CkTTmaRMdTrv62QfiAQspbMU9VP",
  "key27": "4dQGQ439PcE9pxj6Zw9zVw6iU2KmvpAUNUhsNzUHcpryZHzEhsK48jGkgpfJr86HtjiYNSxoaBtnMqx6BmrZSkKm",
  "key28": "3TspBmp35tUhSkkJ3f1Hof9hYkkve3vzoHKdcgsf8mFT74X2z5pBdQSopUm97tJ2MBAoAHCnp3KMQRA9rBDfzEja",
  "key29": "5RDeX7piiuBBoNxuvS6dqomkUHZmaL21v5snBA9iMqJs1YxJyNayqPZV9rCTm8ER6RJhDudwMSdyWKRW6XyJ7FGj",
  "key30": "2b8YcwyV3LqcDh5UfBG2TfbstVLDnN8aML4tk4njw8Joi3y9NNS3fmT7mqX2BesinfBgHeeq5zuTiAW78a7mVg23",
  "key31": "5ddqbyjPebyNPzHnWuvMz7WuKuEG8JK4p2q2HEokMWJJZPG7uv9RefcH6NnSbaMD6dc2G96WxRk6UgC1NoznSFkw",
  "key32": "2DYCiHLjuLUTt7pQgiEy9LJJKrpzp2BfivW76g68w7GXwB6kdLkZLFGUTzzvUw33aCFzcBacNAsiqePnYCAwEHSU",
  "key33": "3utfknmUPQgWtMvYezpc5cuYXX23Acop7Ayg8JBVGHkTjvwNb8VqkDDpLhHrH24q159pr1xNBS5C2L2znJQYsqmV",
  "key34": "2KC479yQpzK5mvLAVdXdwywCPXb6NYBo4WLpnykSbfkFavFKcy6LtDmTT9SeuE41UWqUMadUVAYrW8fm96Yh4mYU",
  "key35": "5ExBaYL7YC4mMBw2Sckwnt36NnoZVuBqvCv4mC7armMNADhj8EXMUdzDujzQG8XESoNEhaYhSWZgRKJWjNEDxWVs",
  "key36": "2LvL7Mo8bUZvZVbLikiEAdBrWDim9wz8GzEaC8bLPbjKYetxTzHyKuNbFBDbopqtRKUZ6UTdXCFY9JdGWFnTL3qd",
  "key37": "4iguauddc9e75whmMbjeXv9mtovs3ugzzQrEEKeG2prKWTmRL4XYWPUgpUoj8emoSVzZfJZYNR9QJLx9QAeV1hsf",
  "key38": "2W1z3yHowGQqYtZZebTzffxobomEyNvKbHMqjBY7cxdJWkRawG8hxNBkYV4wZkGGEdcMbWRftfqEg41ZzTfqWp3H",
  "key39": "5yanewjt4uVoPhgLVp4jBuU4Pvg8iiAFN8CwKqLcg6inddZ9nEUj9deaTum1CFFaQzdV5ut4YQN6JrjQQKSWS483",
  "key40": "5uTYDWytwKM2TRyaHdtxCDXYEzMs1HzRcTp2LRCoAPfmRbpwKBZGuu7EYgJmbwWSbp4BkkUP65cWfbt28N6wg5ao",
  "key41": "XNGitfXkYEtLK1gVY3FkDRfKYSZgybsNVUZXKnhDjhhtgw3cP783NGU9esHfAo8jZ7UqBtzkMbec9utb3dyYGvN",
  "key42": "4sVLyHfy6SwsnGHgXPTUcUArRujcmCzTJfbboEiwLjc7t9t5wJDEoXSYurofGnJwVDQkZVPejN1ot59A1KBADwad",
  "key43": "2SXYkXcd8fWeABzWYmXWG5uo7RBkjbpQrvozqJ6V1aCkdK3JaduqgmXT1iqMxh3rj5JgzjdkEhH7NZocauEUXD7g",
  "key44": "3P33tpZg2tH2ruC61VpbeLP3tVsRhJVwuaZ88hK4YRCw9TJCYuHoWGUpa9zgS8kTxzVf9scHHprMwjcb4xPnMd9v",
  "key45": "3sH7QyGkVP6VJZ4eHfcFzMdtqJegNjNCJM3dX41LCfsKYrmHdpCn9tZyXDpq7eHpqBmdu3SXTr3NoW7aVixQd12S",
  "key46": "5HL5HbH23amGw6bBVhPZuQHgxoL9Xs4Lq5cF3NEPwP6h2fUV2X6uSqhAeBkjUPj6C5wN11yhACAdffdQZFaHMTyL",
  "key47": "4zgMsn9RGLnLLc6G5MhJsxxeVbRyTq6TKCD7NwxEhmWdD6xJhVp44BXd3i2FzWqu3CPdYHu1cpr4jvHamWeRLNvA",
  "key48": "3dDhp8qm4amaJULJFzuZhdWBAf8ChuP8zzgLZw5sNbNvgcA3eZVxGpnnjoNsEpXKUseCSSGZqZqL2dyziMyYGwYE",
  "key49": "4XD4Qh5fQzdCr2vYK188UL3f9tvY4hTGzp7A6PCtJ2FKPxMUjay1TfhmbGXZmkWPP82Avb1GaGFuTrTo14dDr5Ji"
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
