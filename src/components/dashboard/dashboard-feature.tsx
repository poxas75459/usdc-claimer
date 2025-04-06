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
    "4RsUdpcrUTG8hmsQXwREKk36QMxzdN86zaf5Y3mnwby5TaFYguwL6W7vtyDRasm8HfezxoRQyoPQ9My3hKngGC4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6dSDevM6e7mDqr6sbbgkzL2DY2NcakhUtd3EeuC3WRfQEqtKZZPqVuZZYRuf1LRq6yJi7CStHFmXk5Dvx4Vmju",
  "key1": "HkMAkmY8o5aNTphV5xa5iaKyqYpkJPK2DNT8SSypPHjfX1hvSPpp3eLg3LSG6nVdQR1HLXK5Du2hXph3VpfM9gr",
  "key2": "5x75iZL1BR9hdgza6w9NtY5DMH3MkziZ9sTcbza5Aaa52YWBi98pQPdsCjLFxJYu7QScQmrdC3ye5qgEGfh2CBj4",
  "key3": "qoTBRk27ASoRpucAXBxbW5g1oRSo2Qv14mTAFycRKLAKG9y7jnanbCQhynnnEVtZ5MSQ4Erw9m9Ljc8QNNi7cf9",
  "key4": "4mvWUmsrzMfMsDZkh68JKwdowCMqJ69LDhu4jopxtXHe7wMAe6rsj264cErcXqmr2Mkzr3CfV5NFXrK1sVJrsUDG",
  "key5": "51RnhgRLfD598YWsg5ZxLmWe4tyXcdqAooUYAwG3s5VR3CA55aeVNdWMiBjLaWccvECQTG1CQHw9VF7qDzLv4HEz",
  "key6": "uqey2uEnnxwEqMyH1guCJsLB9QKcwDjFLPwzuzB5iEaWyDsJW91UskfsdFS4oSghxq3yENMbo4jRL7eEVZX4z6t",
  "key7": "3BLuybFg7JnccX3xXB8KiNJ1WZ1n22bd77S1JKgbJro1twrGpyuBrr1MNHR7NAE8D4ghTJC6WfSk5hnd4crAsz8b",
  "key8": "LWd3rtuSWZUnG9LUb9rq4A1Tk9fY24trFUAWn2UZ7bMpQaxReYTUyHv12daQhM8pUeu76LtnVBvBf4F9MHJJ4kE",
  "key9": "3avfubv56zcSyTrksFUmWG4GTvDWKFRodfPPzbAeNNYq8ffgadSZuqJRjp1JVa2BmYjak7TVrZAkAsZvJd7NpZFM",
  "key10": "27R8m1CW7ngbiJFVzvYE7izScUihamKfUL54v2CEGGVsdQx8JrshAuNqBM7uCoLybWgXAxqLnsv2P5jk3hTrjEqj",
  "key11": "4StihLDHnU62drMAGabE5yfxds2uC4x2XWxJzap1Vo58CGWycZ5GGmRxiuoMJFgs1HMHDQSeY5JMJXWpvGq7bRn9",
  "key12": "3xY3K1tFwp9u3mPvYwWVRQeHGtppzeZsWx38MAbqZwPQJkisybnG7tDrJC9nySXbFZ3vBExdWi8zXoFLxipmTWNp",
  "key13": "EevmkQDNL4Yt7bpz5aZRLMGaoj7CgZMYpWwAJ6mxSFiQcPR9MhnKLNHTEXUCjxVx5Cgwfsg6jDucsg1FgYwuHAL",
  "key14": "2bD4npUZcXdxNTVJcsTj4wc1YGh4MtZjq2UvMEozpZr3DuYqTJatexyt1daZT6QdNywB2jffJzpYtAjHHoqfH3db",
  "key15": "2Z94rg1sQ72aEhM6DP4Q236sUC9q8hE2Ans93zo7biFRdEzzAksKeAHMLWf4A4kgdxvHNsEzM4xTbcfxy28HyYAy",
  "key16": "5XAVCVhQBjWNecbpzkMdPUUZXa4efVbM6LZDTmQ1vrzJ6PAtFygEU4v4mejt69DExjzjLNoDR1rxsms9gx15w9N6",
  "key17": "2F39hv4xxainroiYchzDMQbs6xaxNXe6aaQY67k1XCbVDfUgzQyawKfMHu7RjMayeYQxrX3BPGPGLjGbANBGo45Q",
  "key18": "22QhVtsLLL94uN2qP4ne7kMpczJW6HAZ2L2RGJaGtYT5iKTizh9hf3EbPb7A3PZr4KU4Y4Gt55MxCpxmDzARBQKe",
  "key19": "3tTb5FzR9bF2Y2FhMbwfsaPCxZeaTR4UwnwcMfZ51P3QxNsxtKz8sYSWW7dxPqBWD5ZF4bAR4HGjdPr54MEv4pxN",
  "key20": "4QPDuZLVNAP5MkA5uM5mH26KGEx7uW6cvjJhNWCRRNqSz6KNwp3Ndr74XCzemRk5GYG185zRFHWqBTknGo4zKyxi",
  "key21": "ruCGvWyR3vb3iBzVozFgkHKRfQPU2xySt9XgGcAxUfCFBjbBigJEFcx6hcASgHA4YPENNpFDwLkFS8HVKoRXb1L",
  "key22": "5Yd2SaTNyuA2w1tNkmvwqVVm5MQ6bAPiRvmDNCUG3FQUhetAYJhKw3GLZSTg7efaMqR1zamQCk2M5LwDf5JYKxgH",
  "key23": "3BngcCDNH56dQJK5AHyorZMhfj59ek1to63tLh9x7RRRma4E1BZL6NHjA7CX7UMWz2b89JwLQLVxx92rshcsei4S",
  "key24": "49UKMrksJvNJchRsts416aJqbCkczidbNBzBNiFsKSYjP4dNHwUN4ki7Q7TLodoyu6UsoyDivWGVAmgeaa9hUPYT",
  "key25": "4GuGaWarZe46YJNzp8S2ZwAB9iRcDt6SkAnFmhE4c8ZD6vSY9SSapLysQZGMv73WEyvvU1KgwWmWTh3obLY17ehM",
  "key26": "3U3TNqwkQyjKf3kYY8Ajs4z8SFPRtowYfRFYGN45YRFMbYVuPwwTLr1QivchJiYqFFyg6XnZ4cCmfE8Bv1qgtcj2",
  "key27": "5ycy9ERzfbB2UdK8AjKDih28oyxLv7N9wvXAkAguyY7LuFwPEJCpn3eWcAQZmFv5A5moQvWLakH9eKsTnqTqKWfH",
  "key28": "iZeTFdtqtdtpUNYrtFW6uGXhAvX5vXXpLjR6zqoAKBbvae7r8MDR1yt6mReoguUvhPLGSRzxCr8LrwFa7CV1NPH",
  "key29": "255WcFdUKxy9BU24AXz5pgJDpvJiCAsz179fdHxjNGLVkFhpQjxsqVFhkJzkzRTdmhKRRJTfBfzTM8g3iyTVZwJ4",
  "key30": "48bTagWoqjPJFRHTqXEScSb53V3hu4emcCouyNLVxN6pMoDnkTDmTnNfuQ7iezj7aquWAeiMCBJEDJpY1s34uAtH",
  "key31": "41NgVrZEMRhcANmiWBKCYGAjhLxawKLWXE9AYGcaxdTCaMuAFmVQ1FwK13fCMsXGmygb4225Auj52A8xoi2XkwVW",
  "key32": "5kyQjEjDXSZ5hf4W6BB1tj2do3rJri7GX1r2SjKgmKuQGJiR4PfrgreKQBtZgFuKZsTAn8x9uVJzonnHUcXWkrmh",
  "key33": "3b7mJrAEpvP9WFFgmQW2pQCGQXwtkSN6Pd6fuJanW2UMznRY9dE9kXEMgDJvTqBRpzd1zZ8vDokQ738Mi7FmoYVK",
  "key34": "4QS7AZzGrmaypKs1PxtE5jwth8d23eNaWDXhjMZGBA4NidWrWzUi6PjZe6Ko4gTV79hN2nzpDo1UbeoVZU5cBWFq",
  "key35": "3rLTtkfVExcLnaTW1zoxX3RGcKBXK9rJfJPRz1EpPyQHPDbASD9qLguUsLxZNSTKKENbG31XqWqnupRumUSDYv8B",
  "key36": "5xmtcW8MRF671mkg8a7wxb9Tj4uPqLVVgm1KsqVYUakzxcqNK4fXL4JsTQZ7LvNCzBW3EE3w9pesgdcckDLCvLf8",
  "key37": "KaoYo2rywmZ4DoSWskxi5MEZ9Hh5REQgQQwkE31bS9y6MnUihTHquQ7PUAr6jo2oWSPWLUhYbnNdvKa9xKTN7gL",
  "key38": "3iSinvSAFbz5AJ49vhS5yGT13KA2Ww78CpiChR5Ms7At1nxazJpHsqVF5Wig9T13CZdmswQtkeXyGH7B7qf92gN3",
  "key39": "5kmVTeEVx8TsMZrhNjGCenGwA78euHbM6QQdVc7iKKo1KMSz5DrgfsLDm3EYe3oTcYcwFWqPcXyiSPwPhbbeRxje",
  "key40": "3MYoWvTmrv2FVB8jaAFYx2cY9Uv4epTyjsFTkQ4UhYzUAhP8Zz9uXFM28gmgEypoP3c293dPkQ6yW7C3mQKXU4M3",
  "key41": "5XtxdqL4mMaCZxL1UNR58xwE3zvuqzq6xqysw95gu738A7Eoipz4D7TWtzHfvFTbggeNcSfjLu9thGcE5aTV1rYE",
  "key42": "4oZBTjxEPqBVjpCLQUoxkCCYj8QuaNrCxpvbJdHS2p3p1vpZyLFeRqBxuTAT8xW8K4dHC5PbdGY1PrtWoUL6A776",
  "key43": "rKde87D7sY6uBbrwyCHfVuK1vWXLwX5a6XRSbcxdxWKyRGUGuvST2yymvjKKgi8JuqJ7YsTtDMX5SbdPDuhQMeh",
  "key44": "5EjgwLu4jiR4ciuq8JS8FJrp2vUoiKzCSBN9s18NzEE27rDdMtJSgK6Qbkq7U84f2pNeKHtA7u1oxhR4AsVMkDKb",
  "key45": "79jXcuLcydVuLFQdGtLXFLB9NC61siXWUr1H37aytW33KbNAuxPDkBVHXUkv2ocK1LQSMQD7FUxEXiFTFfc2yqQ",
  "key46": "2y4xFamcW9o9fuoFjx6UxKLHQ7uYk2ZbU9bJjTqR9wCcE5LZ3xYVWVjo1KLhhvzYFLJsDKBgVYYuEwNzsCb27pAG",
  "key47": "22cmAX2M45dY8uDCXh486sz2i9PxBmSwjprb5PfMHNiA51whYWujHCTwu3Lhf4Fi71wVYaDCbWDYJhQDHGfEZpi8",
  "key48": "3SByRgnzJFnsxyMNwwNDTTqHhv4n5EWrkzgBR83dBFomrQYjhoCrZMxbQWJUYgpS3MqYjProUxidgCe6iKSeKVzJ",
  "key49": "oFDEyAcAssJu4m7m6TpdV9ufDjB9z2Sc6q8gXKhMSQozcpxN1GbMdN7BZdSStQ6q5xDYiBAApdrmbEn5nGeL1W1"
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
