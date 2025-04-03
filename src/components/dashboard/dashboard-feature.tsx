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
    "2VNuf7Qc4dfpLCBz4BP76cYXUByfHkxc72vVFB1QVFTWjJUWSJ93PgVUH53bTDMJhAJAbEZHqZqcz3NkbTW1PuAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkdcLkYRZgHaN1ZYwb1jXTgLdPBZryi1vfmR3B9ZndCeqXjq4EXCyHeew9XGFaWneTMpWBYzMjSs5gSK72wzGuR",
  "key1": "3jCFKotKJi6nFjvAsRKPuvwGfqRaa3aehba8RoZ2XTjoREgbyX54cRv2pAYY5jjnuST5NHCfgkcNgvozy5Qawqwt",
  "key2": "mabPMYGztys4KHX1uXCLST8JiEPbaw7Ky8VHSEpi2jVTVKKLuDnVY9WFNstdcuWYNWgh341NRF7GoEVjqDSL9oi",
  "key3": "VHSbSQA1DGWcN97ecDj8HSBNfDDjb1ux3bHQQnyBfQ7xV82Hz5wrCaa5BaszioMxLV7LE7CxcYzAmBnQcEKmC6p",
  "key4": "DoPzTK3EYAkhfuBehJBXPfiezm71HubvtFJVatRrum7jZsjQ97aTdMZPhiaSkUASzJgAGXyR1XhaHSJnvLaBFc5",
  "key5": "3BQSEwu2s3gzEzFdL8B6PpwYgUkfQmkEAnppTke6DYfmikJ8nLbftjbizLnQp3VGA9bA9Moe7FE2ejvWwv8LjJon",
  "key6": "JUyS1LnYJigVEKK3eE1Uvqf9knbSh9nATLWHCiShxeP471LHkVUjWTR2b89pSziF5423jjfCYTjojfrnTCcGvoX",
  "key7": "3YQETgvhPQdApEg2orcpDrV3Za44hjKztb2VomFsUtBpii4xja9BpM4LtDp4ojJiiD9n8NWNuNxjaCCSCXZAUtPb",
  "key8": "nsoEVbbJ5T99EE1wPmkoHPTAQnRvGds2gxcWu88vX3tMxR79DaoJhB5ZXXrQTWMzfThJxfmMXVf51WfSudZavnw",
  "key9": "R1U5iCJZNMHDLAyoF3rhpMJZpqCfrTAeNWbL4rV7MdUxYip8MjEspS8XAaqY8gmTz6KnchFvPgBuXqEeuZ5odRC",
  "key10": "4pTiGUmGNARoXAAUFMdHfdi1PazCM4icH4kQqzptNzyLnDcehWtigvhC71rixbEZFrf9qhbBNsQ31beVv1ZbXAv",
  "key11": "TwNc1m1JWJSD4Nz1rqAhwNrtn2e6Z393K3aoVa7Sz6bZKZAubt5HrxgXxb5XRViFjk6aQ4Ddu1HZo7QcxwrTK5Y",
  "key12": "3hyF2U5jfrZAkmTiBEzTQz6fANJdcrENH7QNeoWj4gaMYKJCoMNTT65MPrACMCXuiUmiQZmBSrckP7DwdXQLRBLF",
  "key13": "3bAc5hzhHFEDRgUECYunN3QgbWajJfEvSNxyriFa4dviLnHkHuUbVnTBz5mn5tdDueaZ6YmKikifAvfuGHWAWMNh",
  "key14": "3APk8yxxaRoTrgVfKCHoye1ir4VmJgKQdFUuEWfKsQgmm5oi76Z2itSQ3DcPML9cGFkHypq1Gtz9Js9dQYKkTBWJ",
  "key15": "36G8DQqbzj8U7PMpL5qcppHC7cfW8KX4ajk9sjrhrjd9u5hB5zVwiiGrMzYcadeJ7t2uJYvUGafvKoEYZVDyQZ9N",
  "key16": "2oHT45UAWq5pnx5XxNt2dqwT4nGPNhinqvhkpUz93fbufm5kApVKrYYiUYn16uwNkgQeSeEnLiygVwdpvQE3pKVf",
  "key17": "66nsqNn47v672aZfxbYskgiRVzcN5vw62ZCbJooxvwKenn9gQidbLypU2ccD7M2h2xydUnRGXQpSDiY5h6nq9vBG",
  "key18": "efsnFz6Pzh6V7EsFzt7simjNKmncm2XwXv1NN46SVM7dzcTE8TWAXZ5JPFPasEqGEnV4dbpPR1CR1YxHsBEdLCx",
  "key19": "NdwLBh1cYHLJyjSpo9AUiqHCFcsTWLteD3YGjRWKcH2dQ76EsJNxwvsTpTr6um9sfnrfAYajyvhevcMcM8rSQfv",
  "key20": "5xehnV3xL1xuqkTVp6WBBMv3frgXiRpPp9vzfoM6gFZhsABhkPeGXrcHC1ycVz5t54GXtFLiCYjhpYFF5mpuJXnc",
  "key21": "5NabwPpsP8LNXb5Xu7tVJpT1Mbh3eRVRwQhMc41pGjqu2ZX1zsBhNjJRGHhPFuHuyW5jKy2fKaRQgG2DXyQxJWHA",
  "key22": "Twm2eGUyQSRP1bfGHwyDsakVPmBzHKw5dYLgcN9HBj1LvRgFjttPoGvkw8M7rZzvGGvEkstvMNZngd7YD8ALc4G",
  "key23": "XVCGuBQW7dNhsemMBSyJ1hEMBch9ZrkoCVoYUTXRF7qpnfndQMrqYTxRWzENkGTKso5N1vtkEviK6yAZncXGhms",
  "key24": "3sVR6i4uU5kxR2QR2wJ4RFk9UKgXQaZui3tYJ3AoDPgDrA6y4AZtoW3xY6cBAbEdDQBuhQy4i2qMpTAfDhxdjoXS",
  "key25": "2DEUh5dSR4LpEdi2Hz1faTPMXMTUdzSGtVa28mKiMyPt5cDXTDtg9WKGvNWypuboRHZyuZXABxyqjmnfWzSTHqRD",
  "key26": "5AhtixyG2Hy1a1NyFFcbw7yd8Bjs4NT4HSGjuWqaiBwPEtkHbezsRnYDdFYwo3k7rhbRPkn2bEHX9GCabwDxiaX1",
  "key27": "3NqqxoemAh3yQfMQfP6wYNUtxY9pgDsFwqjAfZePxXFmNJZ2tV918K9u8NJKFFMAKdSj9bz6maShhPgzj9R9ZTJ5",
  "key28": "28tMiB1g2QML3zRZdBmxcGXtWE7XR1VjJTuvszHR5L5cGYNRyn2vo6AYjYrJegjRHCYqiu2EKPUZQ7VLJbLziqQ4",
  "key29": "4UfmnqxP3aJA6pMSYnE2jJSfehxHgGEN9ZE2htYzLkqwA4PceL6xSrEWQxQ9YNE3ciC3rg11jLVqJTrzwvyCoQd8",
  "key30": "5ALMZG2mBHaTQxS6f619pLALLe6DxAjzYiFCgkE8rVYmqHKkWzYuP7HQvjYPKKQ57s4vumq2faDPwh1Y8GBzL9wB",
  "key31": "44mDUWQNYMCU7EYrMuctunbgkhgxhGQigifeaandduiv5uoefRiUzEjSU6hJ2Egnbjz5ZyQf2Fh2rBZBNa4NKmMg",
  "key32": "58XKXFizTNwx2bNxsRvciSggK8ZV7g3czBSCupp2BbjeJABxC9e1FRJmbCcY6ttkxzBKGNLfUga62dyXY6xuxMBb",
  "key33": "mFA8UvGXrK98oMKmGMEfKpLU8kZLjgx4yCh5aJYcTLbakWtt93EhpnXcX56tc3fZJLsZFpynNb5tvhMG6eyoEZf",
  "key34": "4DmqY9VNcm4G2suzpFr3vdYxWDJ67MAjnU2a6LyC66Qs3d3HoMkhzDxv2YQ5Pq4MuFnneRdy1Ls7Wn6Zt9yeTV4X",
  "key35": "5jhCmSAC9g4y4iQs7Ffd81pQEQs78f175H2Cn2cWoEWcfirjEmFGHeqMMxx5EAupUnNXnLaTDHMzvkkmYxUEjyHD",
  "key36": "2ba491xKUvqjGUQ5sogWyDCYPUFYe1k3J5jreTYxBdcknRAwmDpPwZ8CxXdKaJ5zcDHUA5cDEUHFPWk1cCCf2ueZ",
  "key37": "57C5n4vD8XRhJP46mHrJV2bLyWeoAzFC7PR3WRDwpZ76SD2sjxCHR5F2vrk1L8SMPnkaTZBZNRoBahBP5DDijfJp",
  "key38": "4crHYzQrVA6sdwZo9iycFGdepJyT3oRKrCpLrgxK9CGdB6YkhkCsbXe431yiBcn27szuBagcDPeDP1vA4kkabi3M",
  "key39": "52RquxN9XsywganUMTHNAPvETuM2zDRVjz91GVBWcwAwmpEogdYJD1Q6mQ4gCCCMEfZPoSSskFKGYuZ69soTuuBg",
  "key40": "2dLWK3o6nMNzWh5snfG8ceQVT77EgMGPPW3n1ExQwHixCQTvLWFsuExAw7NNcPu2M26517KKu26KfvotQfkFRYk9",
  "key41": "62A5RiRwTBSf9r8fw4TTumM77yFAuEQRn9BLRsyMoXw6mMqB2jt71YGKSxMVsfa9MtmCWeFC7ntvmuzgRewUjAK4",
  "key42": "wdSUudDiJWYEZii32VgjxPGHDzXueAVWHWBn82CPE2mFzDReSgjrYYsUTGRJBY2nwcpdh2eeG222tZLzQWUKRKp",
  "key43": "2AgEmHDpVgbsY1b1t7oq4d2MbTYvru65DvUhRW7Ck9gnAPueWRrBgBXezn3KY2db5CgsMQ6emFh7pkFhRNqsoPQY",
  "key44": "2hzPuL216G8qPdFNeB3XNtWTZAjP4pRLA5phXvC1hw4vbzdBWL2AxvYjej8SDPKxrRBeFU1LJmBZGXcjNDWLRnx4",
  "key45": "3TtTH9PVerMRq7zK2TTLgqwShnTJsZfyZWxW3RBXArXW45GGYR3Ki9HXLNa4KyuRznwdLKXw6JV54HseShwGjZdi",
  "key46": "2vkb4pUWnNG3pjuWyLhh3jbMErqWBqRS8YQPApYzZBm6n8vvsRqG21shQAgCjwkSr3MwpQ846W2jXLNUCzBkTP5v"
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
