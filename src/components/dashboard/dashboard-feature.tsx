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
    "5BPWzUBcfC3ZffMCPbnfMtQmb2Bs7rCCo4DXFR38riC7uysCgYtyMfizyjxe9EUkBfwNdbMKHJSLAFjGRzkcfLFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTcPnkRbGrnGP5jG2mxDEwVJNPpHQocSEyRoBwY4J2jGJQ97NesL6xHvSk6PvdZBEzHgZGJX4AHPbuj4YtxDbNV",
  "key1": "4SchkL14e7n75HHLcDRTxz1WzUskaQysEWdFtKEN1J8CE9Po5WfUdbw9F3cyyFGWx3voLFfoFWgkaJN4JwXXf84y",
  "key2": "2Q7h4jakYoE6cc9MX2NSw7pFLzZSwzXeU4vmZscuuFcsUCKP6Uhi6aBQeJ9vPAsCeuPAktYRf6MgXa8v4TtKBWW2",
  "key3": "KUSvLdokcvCtmWLRCqqQUGaq9KuhXeiXKmAWgVCx9Hwb417YLQ7JprKDdPDH6qmSV4EkQ9BgUrwjk5Bk3u8bEHf",
  "key4": "34J5Aphoszam3uy7Em47jrrq1kBfbEZAX6B2eVpS2YyvaKcH2RYTu1wuqQBgTqkcLSafFk3ZGuk21bvT87uBnV8H",
  "key5": "5gkYBUsdxQrNvy2H9uxrmrvEXGxuZK3y95YS7G13PDLvgJXbutyQeTdQvcAiXpwfHkT8wEtN9zk2Aq8MM2edBGDD",
  "key6": "5rAtq4bh72Dq9RGm8T2UVVXvi1J47jb4FXWmAX6fzN87Hax4Cci16x5aM8qPQvfNFWZkNcgFmg4qmxKip3C5mEaA",
  "key7": "MRPRmnDjRQBjLVoRsqWnQJY1VigDeev4cBhhK7PE4JmZynQJNLGkwMXdTcC3xnvEiipUfb6U6jD68ermUH7SvsU",
  "key8": "5g851m5juvV1peihCBx4YeW3QRboxyWgQ9a6VjxD8k3G5pWpcMUnwgXt9GWX2mb7t3YG57HawUbHqnc42MhqGLVj",
  "key9": "4yia14zn4DTSthUVQyoSZHcno9tthL6A5dTc6a7MT7M3YWvPucDP9LxSjwDBfe18cR9pwmQD2KBKDswkLpZfncbf",
  "key10": "5ciVhywYmpiganb5LpBCqGDqfwL6mKcu2rXGzasLH9koALHVdVXy8VvcdhADTJP3fCG53toY8PK1hbBwiE7draUJ",
  "key11": "56CPzqrhU4k23CF1aK7pPaCEqHhJPzvVdumBxAC5DqrCxMNXXm1ocPM88V48mSxYzxLDMXvtCeeb1GAJTdxij3QD",
  "key12": "624LKq5586dynSGgWHdYu2Q61VEHWPtQFE3GAyx9sNnfWmtCAHVP89VssR5dxGRcqTJn4ovJif8wCCM54z2HH22w",
  "key13": "PX47bhMUCF3xb89ueGMML3CQSAXDMcCEFe2re7YqeQBous8w74pvVuoKfVUvmuS3XvaJSHtkHX7nCbQPQvM2V1a",
  "key14": "4XsQYWQxN82nkbT1J3mn3AETeN7ubDad7NDCmppiSRRdgp648uhN3hctdR5r6fPNvZo7xYibU3FfpDUDxeGreR6m",
  "key15": "52tBWJyxKrvGUDUbcYEHdoBzjL4ZrHCMsTNDS65pHZLQKTi3fSn273q9sFW1wbErYffzBhqZnhKEB7NdEMuGWTuU",
  "key16": "2gNMpj1NK4jZWRjh3savxJi5dVPZmMAYAtejGx1bK4tZkqftnwcgxWmwJuNxVaMubKecJFaddyYP9KL2UwVA7PV3",
  "key17": "3iG2vZwByiNtiPiBVBN6FWi8Hfmz7JiFKhtuuwxoiSsdd6xf9ijja9zovZdrBZLcsM241g8DxNKTJyrqkrMLU3fs",
  "key18": "2Q6J7pf5mc9A2kmwfcdEuEvxMyujMjsppW9anwMk4HRiK6LKj8D8ghH7CazNSxVKM1ox7odHJoLjt4krwF61nUxt",
  "key19": "3bsvPwRzFQdSpJG9RZeL24pFUgztRMp3zxzdaLiTHX9e9vExr35rWGp6QwSYJzGV3KNjfW7Shi7ANasCDT5XZ9Lq",
  "key20": "57K9rSjpSyfB3iG7QqAdXqN8Jbac3GLZF5PHTcCNx2GSef2h1XWEQAkbpyT6isFYBWqFB3C2WLxLWPXkt16sSKGQ",
  "key21": "61huPQ7vnqtN8F3PmE8uJ9J1EMad6wev1mjrLkhHACfn4KKHSPbVprxWN89FKoQeCMu42vDYw7q7Ku2J4FpQnd1N",
  "key22": "61aECm4y4xZ2kmLSQV3XZZZ2Bds96GddHHrgdUG8nz4UytCX4QyJ6ovGV4Tap4K7FWTu98NHpfVus1xmsLQjSSNw",
  "key23": "2FjmhWx1bpT7LHwWFj4aJUmmPqjdAAVEeYbBKCyv2VBoEK4yixHNxuohnbALqYvbxrvS3YXPN4Cmipo1bTMZffa3",
  "key24": "2jH2rrdU1wSyitjp8esGAFqtSQp5U4bqmwCmoBUHcug3YCh3N9zrrvnrasmMNvdNZ9UdpTj9BtvAsCfT7oDkeCkj",
  "key25": "BHJLfL8Nt4y2sJ6mVDbPwwGLNZB6EZMoj4iMdavTfQJY7LxWDrZh4WWJk1SNS9f4VWZpWkDz1KMmRV1aTsEem6T",
  "key26": "3oTqY47hPeJyAH8hkNzeuyCLHcuvRHb2i62o7cRgCCQftF9WhUdhz522ZsJ7H6heezYWE1nD3QhR9fmkDXEpGxN9",
  "key27": "4v2CWzWb6gMSr4xcLgxfXrSPE3HqZFgrHmYhVtrZPLdfHzjZGQDg4jaFteR4ptH5QcnpRwHjpsNZ7ZmfAjKn8Akv",
  "key28": "5VbduSjq3DfCUCFniDii3ASxUR6AC5CiKDW96iEpWZBEDEC44cGUQsjZBHpHA6fqU13ShbLLgpyFF9BcRL9rk83N",
  "key29": "3XGZ6zAs89uesAC6GSZ4csjtVpYf3qpxYDd8JcArLweyDj5iS3CcgjnxWoYXREw9FmyqWnkpEMaVxwU25EQwtSYu",
  "key30": "6zrgBJGHNqMdg4Y8y6e4HdfBBkam2CZJ8goUFEetjEQ4uNBLPsmtp2R4hM61Ds8Xy12GmMpSW8FdfyKTCFkku9Z",
  "key31": "4f3C7b3dAhh4Doja3WPkZgFM9zJ9fpK5JzFCMBW46a5cto7HvH4taC1ETtURrvEbP75T3cyDwbCCT1v93CnUdxZW",
  "key32": "4xZNzasoqPQoPcPNqjYU6jxVj5EvW8QsFtafhxX5Wk3bjDMPN4Zzhjf7WdGeSssmKzkGL7tCiuoh99hTNEx7Ej9F",
  "key33": "2MVLjcrg3H8eF6N3No9Q14G3y2b1NXjr4vintbyvvUJBTyh9B9c2jnhwJ3mca6YY615TgcKQqVTmRU3cRfW3L2np",
  "key34": "3HkTLnHM2BAsEcDZkyw9JGXK8nj1HMKPcQydRpnWUepNi9cLvwSxRmUn5EtppBDnRvP9AphhfHkPNEQm6PhmRsEH",
  "key35": "2JADduqddzFvKdXQDbEqYT9f2Q4WU38hhJg8L1rUaooPZNsvkq3DMyZq879UqKaHK5mGhqdVWRDx7ZVjkoKUyVCS",
  "key36": "5fF8Mi7LGBNR63Z49XY9gdgmhubVLZ6gcFjn5R7VvJN1Bos2EHgrtFe2Bgjg7kXnyVQZ42KhbbchbG6B632xmDbK",
  "key37": "4ZQDhE82CCpgR2V6FTJAu3FZnLLXmvP2udKgJWUHChAFdbniof5v5SXJwnWpVXsBTDJufKQxhNf5HGjCF9zA2Cgq",
  "key38": "5Sqw8Tr1Sgqu32kSQm3xCFnXdEUpDz8XkhnZpUF9gt5BbLKeYp88ybEJYfkzC1PKoskB2dujLqYAac6AgvH8KbQm"
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
