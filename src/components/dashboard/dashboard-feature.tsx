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
    "4TUceSCjUgUFGENFvLKXT19twUoCMLmq9TCiSyL2dkcse5fmJ6ER9RtMBDvuS361yZMfoQYidYrRdR2JvycPUE9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDBVnHxPRHe7Rq1fjb4pTGHb47PCXpNKzMju2fEXoer6nmrHkRtrt3UYqHboqZzs8VFgqpUCA45PbJATjL63V5P",
  "key1": "Ccnc11G7o1owTSNuBnVYoXAeRttZrB1kNGioTmc8wA9KfCW6D3KEghMxrjrZxp81uym2cZuKr8rKuzVcpoepvws",
  "key2": "2NxrPzkD8patDesrNNqK2NQSSe5PbJqbJREMXHwRWudwHUPxRM756PS79ew2Zq8XVQ1yurHv9zgfGKmU9ZKaDF9A",
  "key3": "2MxpewpfRtjvYstRnAEPXTjt5ayH2Kg9fjm8Q2fE5CUi73eZo6z4RcaqK6fquB82k2JtbZ3MbWtG3pSGYtDbGwvC",
  "key4": "2ttuuaa5MMVC7XxezAXkcdN38Utfqg5dN7gVGN5ckNHpuVGEfwxKp87SKyoyZRYXY4GHPQajcTTAganJW6atnU4v",
  "key5": "3d8AqhmA97JYmLjMusmEkXR72C14csv7LGoJBDsMmX5RuepMUEsk6sQuHSAKYWK6hTPJ9egEig1q9pMyS2dURkWd",
  "key6": "5p1QRr5zU8mtsvbaC8UVnHQXwD5wdNMDFxpWgbqM3tXXatGiUdXugupaTNtnNWMFWQ5CfPLnTFSUQAb6VqLd8U2i",
  "key7": "aT7eMB6sPih6gu2XQBXYJDyDX3rEEoaYMn5QX8WdL2wyE2YCkZAQVAWc3bW9cgNAvHRS8sgdipBBUEFB5oXarSd",
  "key8": "5NGc43sYKigWPmEnW19soT2Quycp6sBuUD7pYhwj1HTkT9o36tAeXS2aGByK8ZTbVcAZPvRMhQqW82QVPTuofHdb",
  "key9": "61Zxv9RUAtqEDS176deL45uyCHnvR4beGMmgCyA8YBGVVUcDzgAxV7JvA4FFnP8svhsMnhGbt1EERrM78ZqmvuxY",
  "key10": "3FmwVeoiGACxp5zxJ4wYT22UXdaUL2EvCjPpu2WF9kB1nRhEq1UXtCLEHeiipSqSeQU8ejdQs3rA6rwwEKyYpKgc",
  "key11": "372aCho1LQ641tNTdntF9VDGAxqN3Me9QhaQBZEoMZ1X1Q32q3nMHsXfqWkKuvcZV3MYxY77QUDpvrwB72vgFc5F",
  "key12": "46BeQCzk1Ho9eSbi9spWLGKL4HNSJbLJbKVEN9D5CXD6NonXAp9Na23LujmimPPQuxaT6hbb2oZErbpJNnsNohzG",
  "key13": "L97wBxUbD8zwbTSCawcuXYmccCs6APKus2ayffn2ZoAbHnRbFY4vDscnmKH3J6N2wcsfyCUE1sxWyy32mLreJkt",
  "key14": "Y6msqDcorSdKeUhaXv7rzFuV13Mw1fLBFxvvnDZCL8uFG4WSvPQFSvedKGktsLK5MB3bP6sYPMcWXZA6xxJGnoF",
  "key15": "4XcW3bom9aS87YjQLyCFWBnNkJuQPAxqtJ7FNic9MA9RtWqHuBXyQAdrYm8tzwVMjePahKPGtYVBWgBMKamXumB6",
  "key16": "4Wjc4vs7eiT7GhxNvL2LfLAcD8UNu21n35W7J1U2ygZMbPhPUTgLAgxGvnQYzEomLrZ9hUSKq5gd118sJESwAWQ1",
  "key17": "38wuJLJe8Ne8iYEiH5Zv6KWSm8oXA6k8LsUxG8fioHdUKsePGW113RTg5wZ9A23jkD5dzbi7xEJnddHGo8SLt5Pu",
  "key18": "549giTuVq6mmeYMrQL1iDkYbfrJ2kJKUc4YQWLKBNq8e9d3BLDwrmKNfAZBQWoAHz42gCKW1v9mf6Je5Z2XwMC6k",
  "key19": "4hCp6z6r6QUSyCDGbEPHH6nYdvcBD1vepS2arszp5wzEtbRnYRLdgSub59MXJ3tmccn2KGas52Wiez4i4jAqRZT",
  "key20": "35hQsyc4ZicQW21BtAk6Yhu4AA5NfKM8hprQiskZKauz2bxD1B48PrEEvUhbvXjZCkgrReVEoCbhyr6Q64HVLKpA",
  "key21": "5949gdxAxW6buLiHRgn2cFSZZHSx5i3XjZTkf6zoEdeDaVBa4YBpSNBRhUujPrL6UBY9kyRK8GfJurPnJ4mYZPqR",
  "key22": "aT2RPd7vCTDsfWgyJ9vytcPtygYy5PjdcGT5gzaut4cuDMepeFWFJt8Fm2UQmMgg6SvDA7y4VYFKfs42RVid1e9",
  "key23": "4j3RF17LnhgpdW1XcCcL5vqEpbS8qsjV3E8zFCdGnRPiegg5qHwfhAdc3rYDbKr5WEYTXdGLGvQKYPv96xkWwsPA",
  "key24": "zbd8mmD5mf5zSrPN95V5B7jCpUCLwQabrGX4zjNVMcM7n4ybmw7FE8tKh7C9up66meLmWFbpHRS9Y4CdkFYKCDt",
  "key25": "aCxtFcyYVBDRu7TH2HJDYaKqH8MY2fmUDw3yFfUeQCDzddB6QwPgMNWjpuYWfq3iCw4BmHYb1vzGtZ1RF7nEcsT",
  "key26": "2tCdcgioaw76TF1qUyxkk5xGnMJmjEXyRu12mer13CsPd7noiofxtEAjgw3EUHST1R9bcSjDmVEk97jjK6E7puim",
  "key27": "2jBFyGzGu9fx4XX7RpHwBnoqLyVBAzRmhug3iDo8nmTFJ6nx6hgWjQ26KYTtpKa9qiwQEjgDv8y1RLNeRsrgSHk6",
  "key28": "3fBYmjVwv6RkaZr5LvRfDtbARWfHWN1w6towsqAQLn8GFzgqc86rVsFAkBoVCnHao55tUSq7HT2SeDS4jdXmuJpg",
  "key29": "2ypxKSRitBD5HqoE9gmAwAFi8pNMjxTTV5GkQNQzkFK3bZhgCkxKAXAJF1dZNJxczVD822U6sVvQHuYKhsPbrUGq",
  "key30": "4eDdranNJKBG2YpJNk5ScBxzUqW3orxgYPhBnbAYXAgzR1takqCjU3GKN5cxdx3baL7hxunohpTFq3JfC6afs9TN",
  "key31": "5PMq7YQUxbo4BMsAhCvZHrML6wLDoNR3i17udsadcsDqpDm8nbAf4CYKZUdaisZ959Jp7C89ZzL28SMT9mMUfVmc",
  "key32": "fksguK4FGUeNRnRtvDs4nFDagbSMVvHzSRbHcFeuLgG9k4H95WkTjv36zn4uEqUrfVEcr7mjhRZFniXiRtLDxvd",
  "key33": "2V256M6Yf9tmis7rXK1PAHoq1atvg5osntGGThip7ADfpJjXoenxiWXbfv1UVLejj5zER8J643nj9t4H1DCNVbzn",
  "key34": "KSBj33B26MR8SFoKhE6aZ2jhCvDw65VwtAsqkXKrosrSotXVxgYhRDpVNNCjRdfcPHtXXRwsgD8YipJpSn7kAwu",
  "key35": "674kejzG2payWt9TnRFpYJpNR3gXsz2gTyVTmNKFPzNTddSTNL4cXPJ8ke8boD7Ty2qjVtwPJrGpNf7MSFD5eHq3",
  "key36": "219GgCZLF71NeLvD8YXBz519BJYmGxqF4dft75YF44bPB4PGF2dquW85Gy1AtgmVc6zs8iokTiT3UhupceQU9LnM",
  "key37": "27EQRmacGm6kwuYCv4SF7ejG9YpaTbtdLh6oW7FUCMHYc829HoDYVo5KnmRS2Ptkpg8BBnM4i7ateGAkPE2fGLU5",
  "key38": "5MGCbUb2QhAsTGXAWJkv3uueTAWDWLubcLJxwJtsDAE51p3Ys6Kwszb5SLd4gvaYgx87EmwQmeWvSxjyNpELaSu1",
  "key39": "4mKFDW6JcrvycaWnZGLHkx7Z22dWt58uCV6YfAYiyhUgxKrD1iKnxCCUN4SHUxLUBqdhHcQswU3vEmA5EcbnjhYb",
  "key40": "4hjWn9tDJcApVYdYMxsBwFkUvTxNMMtZkQawqisSPFShoH3r3EvbAKmGuEZma1r32r2HHUA1eMXqqj84Mm1qgqt6",
  "key41": "4ueortx6o8xe55PqYZF5YtznxCDKpEnn9Svcf2uSFZqZaXMgtmWxNkcr3GBgbrSaKcf5iATtXNRbaLHcdAVwoPh8",
  "key42": "4g1qU6y5xAq9e8zYavJBAXnarNs3GvW4aAZDNe8djdf6jPSjFTkkyp5U59PmbknthdWqLQTmx3UL23FrbwjLNPcY",
  "key43": "623ooJmsYULLmPrtDj4jPG1NGTCuQQar1DxmfNzV1W428TUju3mk9CdBpVNag7RgjMmE24Njr9iFrqWoydaKDRrh",
  "key44": "4buH1sMX1uNzmPzP5YBS1PJzgtPAJkZzoyVPDF3i8gxumpQG5QykThCtQcyaJ1rgtQaj7PmzuZrFiaiccYmrSbyX",
  "key45": "5qpsAsU6U7eexustQqZzeEgLNafKCdzyRmEbgSwj9xb1a3f9NmLUV3vQ3KcJpayDSGu4DhqkqhJ4Pa8VwsdULNZE",
  "key46": "SeA9iPN3smKFihUm9QvzqVQRfAM4Re7DeTUzeeEsBnTx1282oWk2ETFvRBaMeNffYC1FdWAR8KqoLSWW4gCHcNa",
  "key47": "5qxm1V9hXq2z2sTnsXgTPwSibBFXfib34E8rVQrvc49UhbtXeGpXVTmRAKWfU1GgnZdeMrhFSS6QXLGiqWJr3LTm"
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
