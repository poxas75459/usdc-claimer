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
    "4TDRQz462bLws9bPH4FXXt3XqCaHC8NJ3TgfA2mNmR36iarx3pCvmSBP1YPiUgjynemmK986K9CPUnoBmCYxBdB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRVMz8NbJntsAWP53zcYXM7zRdjxzNVxtkifPc4ghJDX7AzwMCUgYYGBufsjAxCuyZsCrEu7xqqpT3NGfSmeQgq",
  "key1": "YDXGxiaWF7TQ4ryKSUZRMLQW9hfuscaHR95S8pNtLdGg1ug6qSry7kbATeg5bQrF9nVjoPPUCUZg2yxvwa6ekE3",
  "key2": "3VezMan2oBVVBi91ET7VaGEjZGRerXPR72PPAtsNDFzBfkXb4oxJoVRCzKPJnWy86neznsTXN2KysBYj9G2NRQc6",
  "key3": "secsVsdF161oDyc8ypAGPTgJz1oRkDNdqxgWawfDgFpichpiyEpEdQoDvjjZqouo5UedDQWdLhWxjh3uYtA2iAh",
  "key4": "3VNiWG7z1gDgHLSYjCuNSHS21WRz9Byqh5RznmKAPnY5RiaH17YBasBewTPy1hhfLFrB2Q7djbz2vxEUNhxrw6gv",
  "key5": "3Emt69phMPtzDEo9eXQXMy6QSgrJLX6iUzzDPX1wDDnzihcrAEddbZdtRXyeCmYdePCoNbxNQtB49Bmvue5438NU",
  "key6": "3C6iF5jrdY6Z31vtfkqCJfNXkXa2q9XifruafztkXtER4U7pkczy5pjAF32a2om312rj7rhEHr3DPK76zE5nDsBH",
  "key7": "5x7hgvZHxUBcR16VCGfatgJuZjheSnienTzX59ZQ7Eq6mRTg3dQXQNUmrFmCJWS6h76bnqRTq9X83gv4erx1qzxB",
  "key8": "3wRzdMLwPKPFZ1MfeXEbEZxNfgE9BVU7DAeTzZy8f7fLqKkqpztjFTF3y88g3h5vyjBB6YYCCrG5kcsDtjQHQChP",
  "key9": "2MSXwTrZ9sY7hrJNcb2y9oBw6RBcAyzfdH215xRVam7SYPdQb8CVWtgAWhqBnysDTk34vP25L1UsqWxfz5jfMj58",
  "key10": "3KTp4pLAZhCX8Siait8yUbKvhRy3UVneGpc8c8TVaEEEJR6AZfj32GrioytHNA3caBtBSgzcScJrA3FJmLKq4DzU",
  "key11": "226DCn1JGXuq3o8zQoMn9kSAdMSRVAYagJB5krEpcKSS9xecNUHXyi8HdhjDT8PLYVH4FYQAM24yoGXyKj1HXeZd",
  "key12": "5gFudks23Ex6M6SPQGAQ6KyZQTvJyZvT1B2r7wuqxU2ZnNnwQVJHCRvbuKKaGXeDoGQqfwhgLHp8ioKakk2nJYrz",
  "key13": "57tkVeyJxHW3ZYYqTnF6CsqSYetZ7z1jwY3uaFwqDDuDiqvCgkZ2QKnVUcBFxntXnQHZk3JVqVvHmkbDABazYMM4",
  "key14": "51WKQxNCQcgtaT4i53cLDCxzXqeuRDi4SbkSYwSsd9NbC72y23DUTdQYXStHjD48dow9YZjEnXocBiBgHtikGm1S",
  "key15": "5E3Y8W6GPiEHDvqoZbPq1VhVJqGbi45Q8xPy569uJqPBPTP5kbhfjGKfx6C8v14ypEKM1Xo3UfNCLVGThWvJsMcg",
  "key16": "4jbqudXjCWfaPoMRmah9qw21EbN2dUgd1QKaq8w25zEMeLjQuz5izZiPKsvfp6Bv5kaMw6tteZeURxeYbGMYDsCW",
  "key17": "4o33YThUmEnkCDNHfBKAh6L5MPWPmsjpSUjm5A36Du7U4tK1AFE6Ljf1nikPZaDu8bXrdCg8LENC3DjbVfuH1Rjs",
  "key18": "5UwHSUsGszJWfeEVXihx4QWWjNEGBeBecCGsnDboMa12KAV3umuFzaPRqTFbj1hR4GiiieHU5YDvB3w4UEW7hzKR",
  "key19": "3ZWGr1BoGDQzAsxKG71k6Fgtsj6Xs4E2yvhjwEb6aKhy4V4gaCRx8SvH47RY3ueojxRXddLHyoyL6uH2vYQKQmWs",
  "key20": "X1ViAibNT4u1qPLz5bpQn7L1tUy2Qi8Q3QDUZhRyrkRC7EkdpoEiGQK5YSi2pBQXUUXoUPNwpw8Nyh1muSRNoxx",
  "key21": "3Hi45cxgtg6dwSiBq8mMfxYrdBS7WbSDbqHMYKsHfdq9DY4kLiUk9whSggjtntsUuYKteqwtAV6UqskgjvRCF88j",
  "key22": "3FZivBGMwVXepDbmkgNaGSvZ1j9wbvJaxRyq1YoBjHDdxXzuoVqrfyqHU45cd4cJM73hZjjjwAQUcnckyRFrPDcW",
  "key23": "2DgdDVwBnEvFaUYKnzpRXUWS8CM93rTQRG8sH2K4ucGSv3MBYwABUQbKmq68f3hEwvQfTqvY2tbneEMRUDdFkWAE",
  "key24": "2PMHSZeXiRBA6HBme96BqvYXaBYbVrpcbBjB2wiG8s2sqFc9tPqgRwuevR55ZBv1ZkNML6A5F4Has7MYoViVCUfv",
  "key25": "2cTvXEejmsSQJy3Cbf7PCDWMrX2dFzAwextZsY4b6HSxivRtQJynJXMuf3dEygWrks3cjNM5jj8o18QjxtyCwt5A",
  "key26": "4fUtGN9aTMUHFbFTsA38AmcsEdWZQKa7dqgvacRCs7zicmJo7PZUQt5dvwxdxmBSSNkvotpHhB1MxnzRxa1mqj5s",
  "key27": "3WhgFXaY1xUtebRRLTs4ASQBXeCB685sXDwDN5CnrJWmZdLmZf2PHfZa4fBaMCAMbHUdVhEeuTwXU2BoimVdR4KY",
  "key28": "4EoATTu13nAX2dNef2KLCp3VnwZJtkpPXYXubcc1BCc6rEHYKEhKvKRLHVCFboTqJKSacWRuAesJrQcok4PKkmLt",
  "key29": "3rMDDh6EmZWbwgr2zZrKDzb9CmDza9JZQYCTHbqqZqo1WYvY3m4gbGD7twsYSAUaXZzKNuze71LZk8xEYky5rGVw",
  "key30": "zhbcgR3ke2noxub4aTvVyxuE6dX813vtbwjBY51CYxQdNqFFEuiPusVVbSCs9RsLHjFUcC64kUtskUCkanLCDMU",
  "key31": "5ty9cD8xxaaz5njt1AmLm9Pme6kS73pA3XbSdB5j9Rj4ptGDJtiWpyS1h3qLcrtfWqgKrqvGty9XEGJUugxTmwpY",
  "key32": "57wGNBZeQe2f2RAGkiGxukUtBC2FgZtGRQTYG5o4M2bfqTR8ezE6LWtvNefjwW9yeKVTWbMpmNJibQxAGgG64Zo5",
  "key33": "2Vr7wLLUKxXXzkFAd59sd5mbUEDUkPGoenq95UKYkMkGZ7PJBPrCsP8uQGiP2t7GyJbSNL5C1yqjVME624eDRjZA",
  "key34": "2tTjhyv1bYiYSkh6Y1sNpjX8MyggDXSTG44fnHAb3cwFwkTbb9vg2c2fwuQVbQ8i7mYnfWnm8pCeaBwQV2x2zgUP",
  "key35": "5fb5aw1fVkq7d5Zzk36kK5Cgb5LLAf3TLftXdmrHoQgzuXy6SMwYKjCEQCtba7ZRbn5563q8TjU3ioAA61q3nYwT",
  "key36": "3ic7gZdf4zWdejXcovns2m7YKimhznnnZcHfCm24on6bM9CdvoL1DdmY5XrBxfCRUFgLoPCVwdxVEG4CJzrvVkpB",
  "key37": "2kzb82Kv8TmMj4GsubsfkmEknmsvymfUKKzmNVrpjv4ybgKyxHCvs9fhzdgJX84TbYmDj3hqKxDzTd78VpmtcbXf",
  "key38": "4FNQRh2N8qqN1kuWLUrEpjwPFP9sMYcPsirjbLcyNSkSVXCdLt7rwuEG9nMEyPEaFBygoD4y4Hy9N2R8PN3AXRpD",
  "key39": "3td23dyfqgQ9VimffHz3ta9fGbiVKcyWBNJYvobMnJrpzZwCcd6rDTbsshJCcwLZT8nicp7x3xoHdbnUyHLJkEnw",
  "key40": "3hGqBpTPnwzToJABvnmgT1sQhcY2ynsfpNA4ghBYF4KL2hfLDayTxUReDYJEULqD32N7mMB5dn247gnHfRETWNDK",
  "key41": "38YMd7eEBfs2QqQYq5DixUXqf1JnxgnGRtoZ6sCMsnaGm6dYqELmbDifv1BVVdikdzsBPUPrx8t4nNkQzhK3Nxz6",
  "key42": "2ijfSnD9wkSsNwnPdhQJHULCjaaf2qqjqWS7FF96ZatPyjo8ug276DtxksVpZqSYtDTEPnhotoS6Mohf9qq4cfS9",
  "key43": "5SSMSgKtG3rrTxdeCh5hA8xuZyU4K9WkbzAWohhwb13Cun5714sB41z9RMzokFoifALqjubtWPZj3J3h9d1ZWgMm",
  "key44": "6neXccH7PGYM6GLsF767Q79CLw521rev5q3nHZChs4CjPvmmGWDAEzYHNFQXRrbKJTxqZiMrKce3om1tnNDAszL",
  "key45": "4GqfdLVHtpakgwRNwmpSNGXQQE5A1hfRfCdcUhS6UNHg3rFekzgruNRDUexa7Nx7G9VrPHgnraC7AguQYjyFDD2g"
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
