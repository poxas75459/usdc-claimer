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
    "3o5dqFzgHce53LFMCa5gMTG8JizUumVdECREtic9C3h56fxCHVpQ8rbHS74vAFTV7CzVTAUNkYnWkhzjPZJmqwZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKi5s6hsPdz77qMncJreYzAG3W3oSHKaiksY1Hj6Xms9wSDwDQCF5WFXC2ThCgQ1peHXFfx77mWMJMSyGyBREFe",
  "key1": "5ENaxFUeDG38msSDzFjbex2gPAipHSKkTrDFNucWMqoijzXbLL64iz1tDFzdX51Fh6RFueZRZdLGEDJnBEkwBunS",
  "key2": "J7aiAYpD9F2rYMmSmNScMQMWhnrhNPCvec1wzgXzEroxJwrDzt91YbsgmLhns1vGbXuMKLmPha6J5vAgAeTaVzj",
  "key3": "3sjwHDbX2PBoXvpoA9RdqxC1kDHgfadRursUYYU7mqEnyZhu78U8a6E2LuUjtbRSzfE3oWwyQmWbWwAR2tp5K59A",
  "key4": "4MDEPnwTuHX8jZspuQFMWFrtieXYADaKkfeyoELR3nAP2w685bEo2W7MGyP1RxUeQazzULB4yrSg8vB71hzodTMA",
  "key5": "4UTmaDDbmu2vxQ5T21XACjNCZCLXsmmXE6V8TqwQQAGjbhQusUHW6Lu2uKZGP1HGTHG8qhtmfaV1ZhhZm6U4GR3c",
  "key6": "61w9iVXrwpCoxp19Cboi6PajPZfGGTR338CbWiAjx872mDHtps3cGW5DCm5DJrteUYELuUq85Ee5kdDWTRwDU7wy",
  "key7": "28rk3YgBkZfwNQHtPSjpUBoVjrj8TMHbVju5BDAPZ2G9Ftfh4xsP16zEwDxqqrnodummfc5LE5XtJfSJiQEFXeGP",
  "key8": "3JveRGSiNoSGVYzATqg48JqXo2dnN5G48WaPEZ2nsary36aCosA1sTnh8Te5zfu9sMqh1nNH55EPw4MdFyxzK5cK",
  "key9": "5iVpVhdSEkghdCdV2UFV9YTAFrZneXHse79chYavNHmGi7SDuzLYtkukJGYnoJNp1mhnb1AbdZcT96aMwV6o2EbL",
  "key10": "6xDPPhEbaigG4DuwwSTNB7Zux32Neoycx1KVjBSXWQbiiFYjv8tGQEFrGXwwmuDHxz6nRsLP4AzUDegDNPAPSb9",
  "key11": "3CXRxjxrzKDdumWoTmAiazRVeaMWrmuafjizx5YTosMAf3fXS7RvJV6VL42GVNQaHM4C1BAbgSrLGGtXwFcBePar",
  "key12": "5CM6f1RAoW8y9PbVHDs7RYF94tLN6oBf4GHayfS94hra8rfy16dsUZK51TfoMJWUwAGetjtGtx7ckeCaXos8MBBv",
  "key13": "3otb695j7neJfkcoU6RY1FyaxZN2JmTfm6wHp74YiqSMCwga24hoW59hgqdL4DDF84TkRGUH6LfjkaLrhyv78yxk",
  "key14": "4p9yP54MYLDbqNNsAgZNAdxTK4nkCK2atqGiqaDpfQJy4Np2WuyeMuryjAz7R7jZe2dBPP2gmQDWaMTbuCjsPCb6",
  "key15": "4wBS2a7cohFDEnuAiPcYB7PYPNcJPJnFeJv5D4opzXQpRbFnmWjF4Uym89qPLvSEVtLbLfzrasvHswFf4Czsi5zK",
  "key16": "5wQ2gWxNzaXTDwfnA5H1a8h81A4MSJRRYzKGuvzU8LPU7118Bq2CoF58SGPC6RLTSqKbV8yUUGiwRMwZBtPbb3BP",
  "key17": "5gjUx8U2t6rUdM49X6wrgCwupPgc7dN7kzukmFB1LyzkBUdQBGviDqhVFDwPwM3FfuzEMn6eKSJKKr32jK4hzfRh",
  "key18": "89Wufqi38n2xR8FYK2y317yLQjxva6XD8unUry8eGyBQxn8Uc5MNG94FW4b68sASo35jrJYQuQwba7LQ4M9JdDD",
  "key19": "29xCZS1S5j8RfGGeHeeqCsq946wstrnpjcSWCKeQbjPjSyQafooCQhx66fhFeqn84BqFCKKfLCo76kNNNczf3JRj",
  "key20": "645e4WRwxE9cVjpEDS21g4m7jAhJrC3LAExEixBmYLgwhzC4hQaW3cLsZ1rEviHmhVB128sME9b2uzGXhaDdncD9",
  "key21": "5DpnkiDRa6VUuEEyaLKes63YsaUgeoKaKhnRSohywrpLNCsbaqo3MNGsBSW8ADwPjACkW8mtPMawA3vo9LTWtq2k",
  "key22": "61H5ej3wShLHsskcNBzhfaVsH6FnFbd3jsanRuiGSxgSNBHXH1SJH1jNten2fbN7EZyDvts89oc4CaCmf11qjHP6",
  "key23": "4G5UqGxMvbKbxanwQdt9UkbBMMDchCMRsNfAq5c1GiMKBdB5RKShKPQaS7Sy65DfHmk4nRX8X5JfeTvj9xzQ1R7B",
  "key24": "2TWtEv2feK3G7w9mbRNLnuKSYbRRmCCUBfPnkbSmoMxMUyS6uFx5JHbSLLzWtPhm6mQmfQ46EKV8XioRvgLagatq",
  "key25": "nkBsTejAeqZrE9nz9QbPY3J1UbJBDgixAmXnMBKagah6HXyUWEp8UxwvNdjZiYWsBX51WEghJbMTgYX9tmV1BPC",
  "key26": "5vbT4kCuWmaybWkSqA8Tg9yEqQURnfMbLRroeBiw7qaw58z23HKZgddduA739zFfPxBpf5rUxUy1vEp51nBYJZrM",
  "key27": "GCTfG39hr4DWaYpsKApW5H5pUKUEMdKvpYN9SQ5vrWoBmDUTSHTSgQG9euQ1LZGRzEQQuwawEW2GkRmZ8nx9RoC",
  "key28": "QT11bN3atpdfHyVC4Xc9xvcGrFs68kuGm5ggCrWS7V1pmKwTvfAqafn8prQYhGgbSi2v7eoDByy7GBypsyBXhq5",
  "key29": "mMhabJ5tJcwN7Nb9xnjCyx5UmePfFPURBc2zF7RVXZL7cXDzPt8dkWn8em7rwNAzbUW7TXzs2qMzPQgGfFtAWmv",
  "key30": "5MgspX3jTb28KNZSCEK2zZycd1egmsrbx3wH4B6JsHB7gkUx6pzFt5NwXWz5pPdVvNLLYGfkCKkgtYYfPvv67iKL",
  "key31": "46UkLaijB66Zk83q3TTVuaL7cn9tBf3rjn6uBzWumTLi5p5mP2H6xpENRRt9mNfsofdtG9uYhry7ZuLAfb7AWYXs",
  "key32": "3acimkfzXUSgPnxe2uMDNWjxDDJAMVcByzrpzLjtDacLprAxWYoJsDu3mLb5pUAMcSd2Nh1eKgFm2uMjxM22tAYN"
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
