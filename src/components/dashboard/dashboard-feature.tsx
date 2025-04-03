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
    "MdkrSspfmM9vq54QcA3tKPAM8Hzjb3uF5yW2MZ9qoNt7NRG1NZ3j6Ms2b2sPoDfBVViRee3ExhLDC2WJPhs3U1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zc6Y6e6wvMzZH4ndqacC7r87ooJbEkFv2pT1hhc8tJoqy8ebzZwMsjDd3jnBqegaQL15G5QnMBzxtE3JgmKbcSk",
  "key1": "23wLxUwEJqgzNw8sL6ifMjgfU9cgA2Q4519jamXdK1nEtzHP6ZescoMiBMXTCPQ3zG5xZKkpNPf7KGcsv1TEmrcE",
  "key2": "4tnatrXvfJRwXrmL12hBn2wzchcj6JmDm3LhCM29haGb8mJwxx8PLnPKJ4cx2YtZSGccEq92iEKjUCSk7NHvvXoS",
  "key3": "21Y6afS3gpg7zLdk4ADMXCSaJM9RG4qVovp4WVHWowDiLKekDTEUbnZ3UZh6tnbaKY59w5ktg4DKqjN4h3cVocEQ",
  "key4": "4KeKSGt3odXWP4ZLZVEUQhpeoyFjo1nPssezvHe6RsbeohDMeWMJdMWQrPrG8uKdjUVCHyfCtX16HPhSgcy4yu4Y",
  "key5": "5RTMAJRmXV7aY2XSKaw6zmRzqb42hih8KiyqJ84m7STHuCdq19trKizaDXTGVjsTCCrfp2Vgboy4Y5Xmtv6F5wpT",
  "key6": "26UGQWbUjpNAzUzETLUEEawCiy49L2k5M9qNTZUEs3ajzkyRuXX3xUSmCJK2nNEveX1KvJzSdZcdwif8BwidiRTf",
  "key7": "4CfkjYFMCdw2yPkjDpLkdtV5FS2R7TuDXgde8Q31tF8PXQNsFJpLaJJme9mPPP7YBMemn8LB6o54BE3KxTxGMpJA",
  "key8": "4wZxt7TqPpbAK2FUpFuWVa9Fdp7zytvgQWSMRqyJmFmWqgMPUy9kuJMSYHQ5e7sMK42azzfL3ikAES368xP9BAnd",
  "key9": "5GXx3uQ4S2JPHcVZdKhUWcYGoS666tYh9UA3781A5F7roNu1reMKt3h3jM5nyhRs5dCi4WrUTWCWsmdxX4SuN6v",
  "key10": "2USS35F1Ms1eXqJZCxj5oL8zFx282aGP4MbYGWLqr9EYutNbJmZQBWQ4Li9BrtcrsEF4nEacDLrvi2HuR795bAfN",
  "key11": "5MYK4J32T2j52DrNBrhYB75g2nfjKTwbFn1nJpSygBTbaiuZgJ4DHrAfTCnm3iPmeyuUpW7csrpfsAAu7P9f6pq3",
  "key12": "AHGNuti6nDKqCXDVrRarrq7vXFrV74BdYR2sdX82HY6b14CxmVPxCTkKjwJN6UYup2q3Ju3bx3Rxgpyx9oe8EXw",
  "key13": "3FSRVMrMKEi2z28m4xpxzQdESAFfBhtw2qC1Ee1eucMSW8f9mwbiR8T9uRM8U6wULgcc82mzatFktBgDCFiXBhP3",
  "key14": "5uQ3XNbgnhgtcUcwbtG9QYwvCi1A7Zyy7jv4AdYXSgWmXShYSDtdKDBA7gjitttVzyCFVvQNcTh4J1rr2xhBqdcq",
  "key15": "2x3tDh8mYQU3LkrwjvowG8SUyFZk7qiLzMCTGTtfe3YCLi5KZQoHaHzhWv9aUXBas4633zVzJQX28f3PPYiUcMEu",
  "key16": "5LTVj12fNJx5vHoocJfe988hxE4XU1AVWzqps9YGX2wXdSFGLm5tNtiSYWGketeA6YZgCb2JdMxUdWSNNCYX2EDR",
  "key17": "33SneZCJzSR4RRqY8QgZkAd8EjR4K4SYPo6TkKgqmLFoPhoNqCZW5vSLaLseHQrWNeu2HZGshN2AdJse2sv7NPtM",
  "key18": "21bBe7BtbTs2rHTDLwq9bdpQTiCEAdyEFNBFL2WU6HMWW3cf34vwrUpUa9cJYucCuKMrQ3Xw66gw2oXWKwJbkTzy",
  "key19": "5Fdf4BB7B9fPRZk9mwKUYFEcKCvHMWr2ZJWkvJDY5z2WgTNKXtByRCNAhSUHbAjpwd2qkMUjseLrM6fQK7A5D5nC",
  "key20": "5CGREgsZ727TYzHjQtqYEvfjmMzQHdp3vRYRnQHpAjuJ4iGncwU2gEDT9DHG32KYkWU2CbtQnMVZnvfdNbU9oBuo",
  "key21": "55WaCvdWoFJ9n3dBMRV4b7DeC1afPKwWmS6AiRDJUhYcBYFs55RyQGK5ZdXa4FrUCpWJd3fwh2zE7dUw3bqUPeNd",
  "key22": "4A5sKKWm2VD4QuXBYmy4Z3X15DS9QUiY91nXw7T5DuwPkiBfaNoPJKHQqV3Et5JujQ7umgBZ74Vc2Z5DMjoLMn4u",
  "key23": "3GgHkwA99GNEYoBszh5XvzhMJWyGQKExyBRF7kkBLjJe2r9v1QhUTbdvgBtaXd5UuBy3s8HbECjvbuZK68ceagLV",
  "key24": "2uBqp68rP2DjgAPYrwsuKLX48qUfn7tvn269vXtdGx9PBepsHyTye7TinWwhrbKotGBcTszjp8emQAoQEU9x57XA",
  "key25": "ry6R4vNXdmcbCqZbxS58x9JGzakZcJuatB8XGG2vygqqwzvd8wYbqK82VbT8iG5ehmTzuTBdGBvcEKoAJYhj6hM",
  "key26": "56iqW9PzE8QpvHP7DDQVsPShkraLxc9cdkACVH9WJQ9WEHrTpjVmzrfVP4GmdXw7XeCsuF9kwXx1aLxtywZka49t",
  "key27": "5Wvv6tuYbekrpzmfpamhgAoeUaNyjFXb9bLWkuG6JJQYLqdcDJE9RMEbc2j1FXDsnG7pyVG7oNzi6jJdrEmM3h9Z",
  "key28": "2nJjYpNpydaAXy7nxjG7Qn6MT7KKJfJEypeg1Axp4CKEvUc39i2vGBKe5YR1eMmiWKFzP91drcZTxJAhX52tibXJ",
  "key29": "4qGWyEh5f8FJ5sCkk4UBZAYL1zCutNPsvz2K9TQFYYTKmQuho5VX8kGYHeQbYjFQinLrEAQ2sFRRcLHPivrSbhtj",
  "key30": "PJqBqGmkXKDYQceDWrqbS93ZFovwsRvw7xPjr3muBBtdwdKRDz9N5aeYzsfcxtn3Ra7Dnm5C5x6K6GpVwJ2embZ",
  "key31": "Hek7akTq3CgUPyMRQw2QQP8eG2nn47EF5Lox1ZGy2GFdgkvHi5E5cLp8Eohz1kwZLoZW9pPiq817Cvw8MCCNrzz",
  "key32": "3qo3xzFFmCDj7Ed5Dcg4m3Z1mfoxMBFeWsJEiUdnqQZXFEtUEQihScieFoKWUn7n9smSYRihcehbE6eTbKaZTqBQ",
  "key33": "4EU9VvK9vYZMDHMLzdLBkrpv8MwnTVbithqc12Hu6adHq4ptdKVpEdmYJzL33EE4mmBhCaynCAjJ4EH1sYLRA44g",
  "key34": "E1XJC5bMqYR3CzAuadSkPwAEDYMfNbNUJ12BoH2A29pBBvabwdZkXYf52ju59yjBZ5cuayuQ3kgE5mWx1WMJbTk",
  "key35": "3vgW2EviybqHoUMMZGcnJDyhgNEtU6PY82AaCm2Yxf8xxSShJJmvdBKAhQZ3VrD8yumiKegKA7TgQqz8tYX3Pqkf",
  "key36": "4UuRGQ1ofuQ1jgENhrXkq1jsHmHAtnC5Ng975w5ScYcs1bNmurs9D1PQnid1xsWyfjSMvqEovczD4D7WC4nEgtkM"
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
