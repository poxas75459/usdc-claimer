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
    "5phwdf2NQtKCtwmhTpYX3ezVhG5knK425vtgp8oJkApYcDxLyjoEYNCaBKkaH2eQwKieaUb6zuoXWKeG554nQMaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYY5eqUGKoPwXbeGr6X2472496YcEGZ2mU7guAhcL73SSSgVjhHaNErS7ovLTjKXyn9vUWzAE7bUCsokGeQiD8g",
  "key1": "5YS37FK31E5MxubSsPtW6BqMYDgrc4touC65r2JBkFUTWXmjmwoKwSbjruYcyM9HqSHQreZgFb5TJZjAtNoGWiL3",
  "key2": "28BVwWp75nP44aiM1KMRQxYw4DefdwfH5hSMPcMovEfdNPrqDnQruZkPtd91ivEpYPeSgMCykJZSvsPqHpwbGYtY",
  "key3": "16hz2NPB7hxTZ9P53rLxuVJ8UYoGoGpr7YECSZ8eJrDcdrwEH6AJfeUPtuPsS6hnMLSywNS4hasZQnD7EsZH9r1",
  "key4": "449TW77pwSTbuU9jrohjXDjcTLHvLoJPuoqerfnTn82jNVrY9uvk2kXznXMAyGBdUgsJ2sxi6Gc4xKuvaMet5MjX",
  "key5": "3uVw4C43qyJ9vFgMqhzyFT5JS4QzR61m2eXkr3LAEbx8LswX4JdbPqotRey8mYYNTGMp3tLF6o98CG25ztEBeZ1i",
  "key6": "5QbS6P6pybjPqJd4uudVrskTsBYRSyyYDucvxXcn5CFhu2ZrAhaNUBACKAeFW7QjtrnvJsicsEuCtq6DEJAH26c3",
  "key7": "48Ya6izMGdcjBk2xzXsgK5gSh1y9QMJhxaxb9BvfJDY1Fh7ndGRx4jjT4Vmd4DKdQuTuUYa9GxLivu4FRzTpZnDd",
  "key8": "tfcRaNz8KAUFZ4c2x22GrWzDsjBknSSCRQt3sFt5gggUvTDXPqKPMyxwgZi4TKuApoiV6QYDfaJAUrcY9Zugeeb",
  "key9": "2GdYwSxGGhhxwDbUcKCdJdmYcVQ3qEwj9f9tSxQ8gx74m2MHvQuaBVkSUxBWCuCV4KzHTD2AfFsTAiZd5gFKb6BZ",
  "key10": "64x88ydE1iYpTb9EVhFWvA8Qfi1RVFHa9jLcZVSmf12jSDJLc4PjGdLscDCEu8hGEuHLnvrwUx2s32wVCKiazzDo",
  "key11": "27HcVF2dbufVFnUaGv3ZLGCfP199NRMfyoBCmmNH2dt7BLps2yXnNBGd9D6vrpPJvZmiL6BMzeafVuhRyAt1meCd",
  "key12": "4du4Jbtznr23noq8NcPbo59rwwcbfYeAQawAPv8h7aFr2UjMgsHn3HdoucUvUVmu5LEnMmq7nV45HuAQYwCCNnnw",
  "key13": "4tXeaR3KHDqLAgGjGgkkHaaQm4GfZ6LUrs9eVyxo5YJ9auvB8Gypqj8UsKDiC8i3X5eBWeACe3SjcMJf3WJEw21F",
  "key14": "5Cttd3wKYJPLPvM4qs1wKhN9jZ89prB3cdZ9UtrwDX1zoN2sEuqg9jEB3wfCjaXyYqUwVWmL7xfjAvbioFKwEBVF",
  "key15": "5YYRJdYmDTgKcnh9z3hSLQ2W5teBWF82nEzZc8JaDTRyx2wxhNjeTeKn6Cav6YiSjkBjS5WuDvwjZkmQDPdKZpmo",
  "key16": "55Ny6KXmwDf7VXp4YgqzdoqFXfE9XS7AXQYNX2mFAmhKamvDsURecwUgumdcLxHfmYjqPSmdv5y8qUCxDuttWhA1",
  "key17": "58RoJfMjgeBw9evJAyrwTp16oUNrmFfFGsFmqLNkwCY43HyX9MbkqCZQKh3TXXnEvJDSii22ysjhrV9FzRouzePg",
  "key18": "3ZCFRB2PanS9yC8ymbomdpCj9caEKqLsWzvUBZXFcsoSZKHGPNQ9bXCe3vz1U2YJq1k8FMYeQYwa6mPLi3MtbctR",
  "key19": "4yMen5jFFMKQh378gCRQZjh5YBdnK4GRDKtcMfrBxFVucGWT4GHNSmeksTfA5V5tc4btDCqA7veaj3qetEbLnZBF",
  "key20": "5uFxajgqbRMejDeVTUyi6qmBjuxW2VM3UAGTncFRJVhnWWGz1nQzizf7iBGryGYhjpLz5KBLVgNXGDzjDKEGvUQP",
  "key21": "39u4csVbru8YekzjZTbhWbrRCg838BcxToVE5YcDTP1jbngN6f2pmV63R9C4frhhocENWZ4D96e3jg6zn166bZbV",
  "key22": "3Kh4wggHi5zLXyWB8bLvuvkGwBUtUeor3hby45es2MRsryfQTybVpgFpErzsWs9nE5UvPx5G8wAR6bzW85LbEoaC",
  "key23": "2qsGgEs1SHyttu5zsitSkvivruxf2oUo77eTHdU8bhcPaFnSNqE5F7Ef76p6jhJHsirB3TXJ2c68ZR72gjcJ8Pmx",
  "key24": "UnzUzknjuxwzWK3f3KtZYscrz1Uyg4G6oXNRzC8Snis1jSZgqd3Ctttfbq11MwfAeMJZYeLCGyw14HZQLTNnZnk",
  "key25": "kHNTLZTHL1dAd6CwtARVGFbgi3d1VMeeznPMSSFf3ksaXRLEFxTELRn5HxiMcNWSBZnahqzhYqXbEA1DGRikZEu",
  "key26": "4xgQhgwAWZgBbBkNDfKANJ1t6UBTG9QrfbCipc5HQSrW8U9Q8E1ib7Qt7hvmB4WP8qEHmRkjcAbhT1kb85Bsd4W",
  "key27": "4hqLDEzwnfZYQQZmK9HkYdaLYJEFEwsPMZYKR3mUhKgrCZVKidKgNNBx8QKnptyzGb7sDFLVPUpTJKDNbKyKPZaq",
  "key28": "3fdtLY1pHZhkqZj9FnPdaKHbbhTZBNPkzCkqSJsN4gpHNQuByFo3tSGgQWweAGUKZ77M84Vm6QTUzj4b4wEZ67Af",
  "key29": "4LN3hogbZQvhP82w9SufMnDUDpJ4DdwFTkDYiDWUcT8ZF3g9GwvMTAjcovT1k1fySCnYbxm6nGAeBneCxp37HJB3",
  "key30": "sc928tbFi6tPGGCcCHifPQFbtpKLi7aiAZyqaa8iFgGnaLkGBhxjGs6J4UozqRHqE963yvp4b7yK7Df3zXsuCik",
  "key31": "4p7qEZq866PkTa2dvZF9RMNVjANX3huyzYn6gnFPzr4sNMpMHUtdMvorztWDHVqvbnQ2Z89B5PGxw1NhqQHiVe4k",
  "key32": "4iywr11xHdgcpxwcZmzBeeDNZ3iP2QbCZ8P55Jvm6p93JjftouKye2kMqnZYokhTvDjCDvNtNhhdpUDsiKHNfUct",
  "key33": "2jGeMpX9iLsnY62FPakAg4P7YSRfdBatZpCSfzJccJ8GjD8Ya6tbFjBvoDkkXQBsJSvhD3BYugKx1e3dYpVZhHiL",
  "key34": "5wd7yt1t5k9iHzCNW4tZuAYrXcm5QrjApbTBSxVtqWQGuyijwdWCB3ZNJWfAazVxprhRFuqqkdSqRxEyDq4BHyAF",
  "key35": "3c62r61vLStTbJsWobxo5fiFa8615Zf4s6vxp29vVadymhapCMyRmeYmp76ALeAev86MZXkMpYtRp45X4EzasQf",
  "key36": "3xx2hF8ytc1Fiz3yJFRaLr4gvqCSfJdZ7A53benZMC5UbEu9dfdAp8DDbDjLRiKKoKchGg9kz2qoTQU1Wee7KygG",
  "key37": "T9VkDhkuMahomQaiXwpt4vynfMBn5LHcfCxYkFqwhAN8AfEqn48dbDMao1R6FMqqv2B8yK6dTeu6v6ZqpkQFFZX",
  "key38": "3TRCdXQ19DKLt68YJqDi4H1D3dhF6XPynYK8oYcaRasGNTmPXHsu2sw9kb8foYVn7fCS4VLsAqGyHytDNF4Br78G",
  "key39": "5qUZTwddgM6FnhBkB8FZwzz1F5FRnGzHbZt1JrUWyPdvjwJhbT9qw9KG698ivshrmFc58ZAPNSybu8qsKiheCn42",
  "key40": "poCoRwu3PgsNA3WjVz7eCnDjTM1vX4KgCzUVhQ9rprFLefn1vrAEYSd2jgZ9kHhC9fDtBuRfE2vzjEdC8wDes8B",
  "key41": "678kcwVCXWaZMXyt4riKJvH4Fw6ayQ7XrGQ15FS6nf6TvFJ6k1J7BXDSsVJbQE7HnGnzkiJMLGGBy17vKhosMMQW",
  "key42": "2MU9BKR8UocrLCyZpBWAiAJ5sJKbt43hrqrVbVSqsUsLLwJuE26jup8oBRoLRJTbbycGMPLdmU575xDR7H7BcUiR",
  "key43": "3eKHEWPtG6oip2bbSt4N8F5m5noYqJ4mwQCBebGfMw1yCFHgwTwmaxtmHn27uTXqVmdCb5zsp3cKBDCv56gaJSxf",
  "key44": "2q59KY2d8DbauFwvUVR4aNjhb89ufDN5WAqwDsbVPbKVH9XpTYuq874XJn43cKKLMRcSY5SQZqoWi1AbLRreW5mB",
  "key45": "25bWKbQJ87U3g2DyJh1F3R9VuTd2roqC6f4A1QwUeobLJivirnseT7HLfDCVgaYMtwfPJgJKMdj2bieuKke945aK",
  "key46": "2TQZiY1JzLKXQ8x5NNN5eobji6i7D2SsYPjrDP3Mzpvu7Pi3QCTm9Ge7He8sfnpFYSL2CdEZ9JCBeLmKB7ETpq4U",
  "key47": "2SjqBriDn9ejsjN1YmEYEfpZEka4UDbqHtE8ZfXuCnoMueN1ZFNY6bKRHdV8C6QPP585K9MYprx75Z2XTZShA33c"
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
