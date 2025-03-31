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
    "34XMtSZPsXStqpVcN8Tj1AsNhdXqNDptNxSD36up6KpqKF6K3iBZ6G29pc9yWSR5HmeJryPhmo8BFr9XskqbMnzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7KWd5kgLjiVmZFeUkMG4Py1cxhY9hYbAXnaqgmCJYBwaYVgoJ9srqFMNyM5QqT7dnVtKzFcV1atmCgWx1gTu9G",
  "key1": "4VaZJj8MbMTLydQnBqsPf2q3tykvdzF9fWb4qQxwSXY8buSaY62rjEyHLj6tyPqsoESfisP13toc1Za1bj5fQAKg",
  "key2": "3tY1K7ykcYgSGh5E6VkjyYCFceQAsr1SFYPSfGyNxzCSCx7uwXosUC5udpP9gvMRSgmvuKqao9WB7gW4hsqtEAz",
  "key3": "5nMMLDRg6BMqKnQPSL48jxfKU5hVJeSY1eSbebGxPAj1MCXqFmZwoZFoQbpTpJipFk2KQ39iwwHudSBkbvEb2ZJr",
  "key4": "5kMN8WHFN7TpmsxdBucrkbtRX76YRuvuJ4G33sRfutBCb2E9BL8HRTKNwAWPpHQQyHHwBWDDL171rSc6s9NwF15h",
  "key5": "3pVpvQLj7d6mEcx4i2V14swGJVepxVSpYQ6RPx1HeAwCjdCiTzHwzThviSYvvN5KZACNa278f7jNwh5hMKcy3sC1",
  "key6": "2snRL491txx6rGizmBBJLCPdUWaP6z8K4nzfzVfL9zZG5FYwoPa1x4kt1kAbxQ32XimS3jJfKWfqK5Rz1Qe5RSxT",
  "key7": "KXJtiV7yYcRZS66tMksZrgYXe8p2rxQUaaPavYDLN2KgKRpBWRr8n6naBvVW62wt1omMMBB1LWR6fxK36NPm7RL",
  "key8": "3Fyofu799gjgRqteCXLKo87dBMeD5gMfwnpY38suPfFAoZ22dkRxiXtwvpoPrmQSog81jes3LL8487GK6RKVXLgN",
  "key9": "59hiiEXjPFiv21nu1F4Ueeg7QJLU7fxkcKBmG6tHAncbpYFBkxdf65PGWrnr26QLcPGnGf3iRzcV3wX8MJtQGVz7",
  "key10": "3tuXhcBiyyVfDEY9dFGXVX6R3g6nRyxEwQxMUvEyhaoqKGJ3VHtf7vCnBjGvMc8d1FqPhynCPyGBbfuw6p7ERrdq",
  "key11": "T559LWpKNoFYvBNCHpW3NnwuuiHysZzv6jUKndpBSttg4LLYUWzmmFpk8oh6sufww7VeWwaGaPQFVUCDFukHGyF",
  "key12": "nHXvhH7KeUvtBPB5w7PFE3EqyXi37BHk2bR7CqyJhjtpxRTu5kQthezYgT29KVgcYE2Hh9yLHsrnBG67JSYhkYD",
  "key13": "3aos29axUwg2gbD5xEmTz9q2ofTuR67WzSJsp5udUg7qweuJSkDMneJcdBuZABRYs6rEGRPV3zpAjCLysugi5eRP",
  "key14": "4NSo5xPo3bb8zw5EzjVMko2Graahmyb7oxxCEmTKcV9GbjqY5Ft6z1yQLJ7XFinJgWGb1dczYgco6LCVdXSY3Ph8",
  "key15": "xaUSPXUVQNJQu846T36ScRZnCKn6cHSXQqYXxu9Ke1zxBUv4AfzZ2E1FfWy3vo767p3eLKqFHfuh2TC8WG5E6P3",
  "key16": "41tnLvEKNBGmsbBpB4yGrndBfXX33TSajugH51KgpLdakhzkUfJPnkZjkzzN6T7bxujM44XPdKiXTLiUQZjoT9Q5",
  "key17": "2HVFrr3qUqtjNvYFXahbHu7WG4vxgJAuNdMTaAQBTNMVg1zTKV6N3qGP2hy8HeX3QtHMBLcJogfAZBQ44gGG4LNR",
  "key18": "4fnNpkGmrphS8CnWDeKAwnp98UdRgvsyHjCUHjskNXcqa9riVm3SgxjWD1nPnKAqSjRbcn6syw6n7dNsFXACAyS5",
  "key19": "3qGV6QQhHxzSYargVeY9khiQTjm41xXjvhvLtvkPvwcy6z1VadPctT19mpRsBpwr6DJmtrKqdov8dJbBANaa2dbs",
  "key20": "5h55itLQmN9AQRuH8mLMKAQ1c7BPdDsfTqNzkor8fB9hi8LktH8ZCzxWkZWWsWEwSbF5fAzsaGide1pQEHx1HnX6",
  "key21": "3x9fJPtgwWwSTZA9uRMTD9Pwfgttqdzdyu1LvEbrwkTcDfovSFNwbZ7eFUbuGek4RVdBurKgQoqWVm4P7u4wP7eX",
  "key22": "2QNBtwcwXVyCuLAFVEnx3Y1UnGGNARvLTYMeQhDw1hYupXiqGdBvgJZzuamE9FLvhhf8uwvGPayhMx8dRHU39nfr",
  "key23": "3Z22NaZTY58pWZd39ETDqAZDeL5e2XrDaQssNBhcskcFUrVYirKDv7wA1BpeAiMRrzwCVjM2BYFQxCz2rnryoteb",
  "key24": "27v8yYRRDArRLMtCE647oX9JyfXF24wJqus1iVxT7jMDpkqfiDX4QAfPV24vacwZueuKmf86Qu6cqmm7gsXc6Efc",
  "key25": "2C9mzeuYW5XvMm932dEDfDbtKHHAtKvmcY4y2esazmXcHoouMqN17gY4C9HxSD85RgQfJnBEKFtb5fuMN58HhdkG",
  "key26": "2uZE9YcxsNYZovvLzQYEgtykVPBEW78h9g2omWMZTKYtqipaG9tDg8Sq9n3eeP2y3ZQMxgaJ83DbNZjEawHjvd8o",
  "key27": "4Z48UYRetzFzKg8ggaNU1aHCDP3myagYTofkwaWQf4EgtnyDaW4HkcjypPX9VWC6o6GWzzUnYYftkLDM3HE7ioMT",
  "key28": "4NC1kAxVxieFhyPc2Rr1cqoHsywAzFpVn8Qq25fmSw6H9Jsa5nLMbK2EXuPtCug2NvVoUbujnV8N4XUfxJ73UUiF",
  "key29": "2Misx4865SyhoeP5MUHPm2R4XKpkyfCpNokSUrDrL7ZrCHYGvqpKquGSNhmLkJqK2uZxhU4QTnMDy7Xricn9mXXw",
  "key30": "2aTxzo2wA2YzACw2s1Xs8GZjgjNWMud4pg6JmXbZAVLWjmXCWnFQxT46uqSRMA7z7qhDtk9z4hFky1Y3RcPvwMdd",
  "key31": "27NLF4p9Yq5bcEfqE5tzoitgCx3YvTyavZxwzKduV7CzSTRWLx2pees6nVYnd6FAh3uXkrQm1G1MRxrKELST6Ut2",
  "key32": "6444GFDUUGB26dnDNj9T8C5StfbGLyrrGZfdZBXdMikxTRQnDb7A4ojf2MLxKF4Apc9VZ6KGrE5mYEyxJZ8wYYmy",
  "key33": "rX2oj14dZQB5xxfTYiNvU1fUMJmahUZzMiJGecBtFqHCbmBRkDJLBCxAFmSUDT5FMMKhyeUPKRuRf3zQeKRuybJ",
  "key34": "t6bJLesok22ZN8xGFmxUx5G2jCmbeEPKyup7aKExiYVj7TYC64uRaAKmgwa2GP3mzdSQfk8zGch8sYTbVnxyhMJ",
  "key35": "3yviharDxXrznCReukabwKgSpPT8YePAq94Z84BhPhb3SubZSVbEByCvS2ZVTGiS2XczCY87mVnAfwEgtdtqzjLU",
  "key36": "5K9915aqXWmktYyjvuMwD64xXo1A6nrPtaGirfD7UgzryCeFwUben8HaPTAwDNBGmdww2J6gTqaG1KpfkH3FjMZu",
  "key37": "3KnQsU4SEmHxyw3VcjSDgShsnSNjA96Gpk4xUpUzfBQFg8TNDp3CXCsmUqP2paZewEeySRf51L9bna3FhyP68D1H",
  "key38": "5SKEkwq6E3c8bop3p9MxarMp4ZGyzrn7EBfW37QCJyEVVuhasYxRVJ8GMPJYEjzoeEfswEt3QPGJF9mr86Y6R7GU",
  "key39": "5VJKjAsVHX7efL1soFXnjjrD1s7u8AGRZxUtxytw8M1StaKc73faBknT3Fz5zX7YRpnW5GEN9uzLdCPXbk9F13b7",
  "key40": "2qzWCSb5NUspvgp65AGPLD2qdnru5rpwQAbxsPHsLjYRtSvPWUGTJBPVzP7yQj8QPuLtaj9uGtC7ragy1tzaNYm8",
  "key41": "2hZDzmUQWDk7RKopZw5LemfewTxgTqkUYKWKfQyPMUvLYSz9wkJfMeVDcQEZvBWXc6VGrjVdHPZ7v7cv282Vt3Bi",
  "key42": "UB6gtyyE7EGE8yET6ggEB6nFPu8Zc3XSvsRCHb9xMhZnWD5w4QMBn9pjVM8SNPsk8o8PcNjAv76ASVRix2cEiQd",
  "key43": "9yjw8Tej3DWAgh28PhLJYXxZkSiGGqt2i3Ynt5MY4bN5ZpzugRbEToWTVCfesvdgYDbtys3ycQ729HjQHdN59uc",
  "key44": "4kjb7pXfucfyqaAy3yjNJvDhJQDZXtfPbP7jF8gpsVp5NG3mrnqhWh49HcLVAvaRqD6rnQDu6qpjj2KKK1Ec4JQK",
  "key45": "3oWhFyu34j4zUhoVzDwm1jLNRjwHiXEs4zVd2kwS3BgLUhboj33n8SzqkXUP1n6aM85cxbFSr91YMZ1NRAvUYmz",
  "key46": "2cdfxBKuFZ1uDeK3WjQiCz8iGD2SnaCNXUdZk8Pjp2wyaW2aFqaVXsA6goHaWARNUBSbVHWg7UphkQ9Q8JdfzMgc"
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
