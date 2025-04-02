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
    "2tmqtHncbbV3GhjKzG9HKDsPH7DUV7eariihUqu99mSXqKLEhLNHRJpAR3zVeTRdNDsF7xrPVyrqe7imYHwsBPxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MQRUmvzznBCpyGbeyup8Q6bLmWPxp8vFtZsjLbhqeF1LUmB12DVzPCusHLUP2kFjUVQdv6m4zABj5zwsAWuqZeM",
  "key1": "518SqYxNWJK5J5AoR4ATSRihaaqPrnFcQzsNTHYfN1eVk5Kyyru5EJExVG63nWrMsBnqRcfUJKYugKsXAgF79as5",
  "key2": "37AAkjr5fDwtEYLDQgfSLaSmxgR5xvWCGGikMFYmJ5xqBKaFu2hctQ8Mzy9KPigCuFSoTG1g5QwWmHqxiur6VZh",
  "key3": "29JDUbrKnwEk9Kau7h3s2ArKe575HHQF7jRixacq3wCKkY4vRs8XMPWkchNTvJSzMBNBA1jxdktLp924AeoZDuyd",
  "key4": "44KbX4T5sozSwqBVJHZFWFGQC3SqVgnjUdG9Y7LNjnRVdAPMbGLJR1TtwefxDLvh3z7LZoUnLxhxrD5EHYehARMS",
  "key5": "3FM9Mni3dWvjbaDWMbtH6BtipL763gMoV52FRBSCKAmXxYc13jW18xuSMVfXJ2zz4LmG4W2bSkHcUg7QUUwyZyJ",
  "key6": "3YPqG7pRzPSjkBJwNB5kxsTgoQceqdc4VGGyKbmHNS9sWBP8JQsBr4PPiBMpNMVd8nGYCrh6kKf6GjSsM4wk8P9d",
  "key7": "3mH83q79oibBwCWAhF7hZiHbEAKrCz6JB7KQNeX12uKAGy1Bt5RS1PnUrqRKdKBryo8oVJLptgbJQMwLahifczYW",
  "key8": "5hdyLiFvgu1vnbSUVdopKAPraZo7VopSWueHUX1iFon8h2R6iozw8vX8qo5fzMVu3s1eHijmG5oWgaQebYr2bbvu",
  "key9": "3YAjHCMLFNsat32kuWuLndXcSrFzN2VhAiCazfV4MPhniyDH5b4Sju74narLC1sjVbSfpHQQuDJLMY1R6UAkyoaA",
  "key10": "2nhK5LywBfDmq5C2sBYAgpebJyjX4dpj7SNQndEc2sjXk317Qnycyqh7bbRKjND4PdiNuou3V3X5xpq3iuVyK9ps",
  "key11": "kyNZZtLmRmM1zs1qZpPngrdDoj7aMTCmBU2F5LQhhaq4Ajt7FPhZUVzufZAcjKg6SsgihgYPdpb7cN1hUWJ8Mnt",
  "key12": "JJjST3HkDAxd3T92RVSWEvUjMU5qQKEXBa7SkyM5QjAHmwr2KGX4qBA231YXB3hsGYEJuM9NBhK2ATqKEKB1rZ3",
  "key13": "2YamZnq8DY8rD8zCn8e9pn2k1NqmNLkoo13SxyZdpDPdqaAuW6Kw68jTCY3y9rgfp6n5JC7roPcXLcsDpMScE9cY",
  "key14": "2EahUtr8g4NCS5rvNq7VW8D1M1FrL4jMgspyPU9sdRhbcjjiEPJeN4Hchxmuw1YdRFtD6fBvWpFN7VcVTBBVUjDo",
  "key15": "3YNpye8zv7DcUNgYQ8XWyzKCBMbjYxbZUTbjYwJsyzjrYuWyPUHt5JePKPaSuCLzHXWe6Kz6Pkw6C1LpXDgriZZD",
  "key16": "48XAR1KWb5XvGdXAmfXvtE3mYcvMWgrmsQKwfL5Ux8Wk1a5XA4fxuo4dQGcG4Ey8ESQBjB6hrHdAsgz4D3yeMDdL",
  "key17": "4xmBSvbrS9JBrHMnnT8fUgKvVEc6RmCqBW5Uzx1PJwPThgNeSaKpVc3jVHKfWepLYyny6484aEFjoR6F2XHEKyV2",
  "key18": "28h37CCCFQ3ejPETJt6GjDrho8m5UyQLGxt1QzRxBDsbWiNitaGh1qzyK8178GEaj2ctrDeMsaXfdHxSTgvc69uS",
  "key19": "5xGDsDYqi16G1ktBByqfCLNhpg6Z4zyAZxyerEWeBc8AsiwKL6T8BoJfyw3TRFpAkKGHfjYRZjsdAQWJwFw6zPzS",
  "key20": "3LArynKuhJXNBoLevFMoTy7ratZNHgXWK6ZVSGRDu1iyD9aHy1wpxCB5zrUmS443eNgyjcfXXmdgDYTwHUZW2Z9i",
  "key21": "31PNpg28HYrbM7GKB1Sq51iZHuUMjW2k248Gbpqjp81gZEybyD87Aum5sEwSnzqmzL4q11c21qRLRhn72BJe44ow",
  "key22": "XzQzW91B5CkiFi5bx4kd4uxqbf42Kk7uNcrTZZvpuKyeQg3PCjChbx2T85aSknfKRnhETiG78ppZXrJTiJ8xfCH",
  "key23": "46tKcmbz3zXGUc9g22V6PBdRtKgASHBj1Z9TF4e8uPaUB8sPcSfvJnVYe1qFBoXfYxvgL2QuhFfYPVeHyGjgEB5L",
  "key24": "2pAt4G6uQuok4g7YP31ATqd5ZQ1xC9j2qcudaGAeyhh2YgM8c6ALaEmEiTj6BGrh6PY3SqfoBdX691XPPBro2zU9",
  "key25": "CGhyomTws7Rw6wv6hkvyHT4zpyucsHhLxiE6yaBJ3FSNvQARKGf8QezW5wd4Mf5g4d9AZfxbsxYcEpX1LrX72BH",
  "key26": "3gynPJJQzAmR3dxrsnF2ffJaoWUax5e6mr2kwWD2RmwcSnbTS56qzQnHjnZEQq17iK1RQ2ZMum6Qwa3XYJ2F9q8s",
  "key27": "4PwAPqm4HEW1ZeZgBiz4URdKfAwk61ymWPsmFy7vDosvyQCnpANUUuzc5A4sgGwAjP3crMwix88vnpZQX37hd9eC",
  "key28": "52pnu4j2nSHFSDVfrwTfxJLsgNXuxL2zpT5vsCG9Yt3dmfJeXB5U6HLZHhrpSF1QyotUPSysPRPxJjpVUhtgLRjF",
  "key29": "64uSvEt8MgSSfwGmfD6zZFA9t4uVbqHTjTyzrfQuYWkhuETeJqF3Zhc6z7YsUQoMiUtgpuKoN3w7f2kN9Yx7utp6",
  "key30": "M8sdh13dWV8hcMdwrinjep5ChwqnxZrzGHZFLT63NHrjjWfAiDmb1yrhpjZFux8tWSjKrXkhNXPcoMDXFwj2rXy",
  "key31": "35vMvqx96kF46nY7RFwT6ahqo111tA6Zt9Ugraq5CiMi6nr83m3pLNaUcukoreHhxd1F5TQZxEweG4KE4k2AcHaF",
  "key32": "4RjszQScfgAXnNg2t1DBdqoG2ephNUb8RiBLDaarhbakVRiLmHT6dHLFCrMRF2ici6mcyMdWjpQGYstGbQwsGNHp",
  "key33": "3LXUYcKgPjKgbCN5db3DfoB2cTJD17Qyi7aLiAyq98w9ZJUNZFdvm9coTzC4LXD3x6QsevxL7RbZKA6PAkxnU61t",
  "key34": "4NGeWbm3FKAuHLzYdWwN5ZUbigk3pS69nmwciYifV2fCxHwYS1QQakxAAPqdvK9wBuCt22kCAjsUiurpHD4uv6A9",
  "key35": "5zbZZknqX4WHEhaftXi1C6rKAFRBRXpNEAw14aUQ6nrzX8jJvS9fjizAHoy1HPSTJiD6pxTEXUZdAvt5kWQRHCgD",
  "key36": "4z9bfGyWRaaKeEMsqZ6gBoMFCTUFoqP7EVVztzEKkKBYmBXtpZ3WFHkTS1mtADQxNMY8Ke8p3vBK7VHXAhg8UAVg",
  "key37": "5FbiF1G289h2EFTT8TTyHR57GHu8tP7zuNdetBSLHMLZnpKu7XAM6Wfp2QSp6H4y5sK9mKCoVJxtNKhzJK62v2uv",
  "key38": "5FewqmyJfZbpqELE37yTKhtsQ5fmx36p4SsX6sWEBtjB4cxDAhtsyqAuazZfiEunqCAoqrnABkxpoQmitideDAE1",
  "key39": "3XdGVJjzgfzNikTHTdwTGNncKyg6d5RVAgWBoQXxZ4xLHECiEuWHfmA5i3BDNN1RsgeQoHRE4j6Q7UsD5edG5TXo",
  "key40": "3KGMvnNfrFFYfAdmULuscyq27V3LkH6iChT6U7vTJsX7nGFT7sA2EuVnmWR5aKowf3UUV7kfqtjairNE1bwMqA7J",
  "key41": "4DyjDxNPBUoV7vMpeHP5S7GkWrmACFWuJWjdKMh1ZzEUCzeawP9Q7K2MesZFX63cijBvNRYxP1NBsHayFTKHgQqf",
  "key42": "kQARXUMELXJ9jfyF8pTPaZpQGybnTEJXPSFbUWTFV9vtntJBozT6omePsdHh36Ja861xFLSeDhNZPu3cjoDAhpq",
  "key43": "2CXBNf3Y2yXnY1gYmMG55Q1v2EggJPsimEkfDZX2eobyq29GGSgfjb5hfCqezK3PhoojtcJN3ehKBkWGNFJMBBGv",
  "key44": "5UuW6LtJm525cSqifGBYQSHCbCU2WoqHvVnpdztuoahidL9zEqWSvb76kXYHD32tfbKYsgZrhC9vF5xDFF551LNM",
  "key45": "foWTayG5YhVFJ4hxfJorYh8MnmEmjMqoWZ2p4pJ9NSzhJvb4oQupu8gr9mCmd45N8eSC6Ce8h69gnFwLfUkRfMS",
  "key46": "JDfbPg7rYA3zdymuWzwFjYh5P8DEZyHxZ2aTb1NA6USHDezdSaCC7T6dyx9Kyd2ucy3cpjB8SZ9zodvEwAnCQBS"
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
